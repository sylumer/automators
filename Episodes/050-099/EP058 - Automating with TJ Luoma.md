---
status: "incomplete"
fc-date:
  year: 2020
  month: 09
  day: 11
fc-category: "podcast"
podcast: "Automators"
published: 2020-09-11
duration: 5543
formattedduration: "01:32:23"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Timothy Luoma"]
notetype: "episode"
showpage: "http://relay.fm/automators/58"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators058.mp3"
episode: 58
title: "58: Automating with TJ Luoma"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
TJ Luoma joins the Automators to talk about some of his favourite automations and all of the crazy things he is doing with his Stream Deck.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Timothy Luoma|TJ Luoma]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 058 Discussion](https://talk.automators.fm/t/58-automating-with-tj-luoma/8204)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Unlock your productivity with TextExpander.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[Mint Mobile (Sponsor)|Mint Mobile]] - Cut your monthly wireless bill.

# Show Notes
- [Rhymes With Diploma - Thoughts and words from TJ Luoma](https://rhymeswithdiploma.com/)
- [TJ Luoma (@tjluoma) / Twitter](https://twitter.com/tjluoma)
- [GitHub - tjluoma/bitbar: Scripts that I use with Bitbar](https://github.com/tjluoma/bitbar)
- [GitHub - tjluoma/icalbuddy-km-and-stream-deck: Use icalBuddy and Keyboard Maestro to show calendar events on Stream Deck](https://github.com/tjluoma/icalbuddy-km-and-stream-deck)
- [Block apps "after hours" and "on weekends" with Keyboard Maestro - macOS / Keyboard Maestro - Automators Talk](https://talk.automators.fm/t/block-apps-after-hours-and-on-weekends-with-keyboard-maestro/8191)
- [Noodlesoft - Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/)
- [Moving the dock by Shortcut? - Software - MPU Talk](https://talk.macpowerusers.com/t/moving-the-dock-by-shortcut/19031/8?u=rosemaryorchard)
- [Rectangle](https://rectangleapp.com/)
- [Home Page [Keyboard Maestro Wiki]](https://wiki.keyboardmaestro.com/doku.php)
- [Rogue Amoeba | Fission: Fast & Lossless Audio Editing](https://www.rogueamoeba.com/fission/)
- [Displays: manage your monitors and more on macOS - Jibapps](https://www.jibapps.com/apps/displays/)
- [GitHub - matryer/bitbar: Put the output from any script or program in your Mac OS X Menu Bar](https://github.com/matryer/bitbar)
- [Stream Deck | elgato.com](https://www.elgato.com/en/gaming/stream-deck)
- [GitHub - Corcules/KMLink: Stream Deck plugin to drive Keyboard Maestro](https://github.com/Corcules/KMLink)
- [Please follow me for the latest project updates and Twitch streams: | BarRaider's Repo](https://barraider.com/)
- [Stream Deck XL and Relay.FM - MPU Talk](https://talk.macpowerusers.com/t/stream-deck-xl-and-relay-fm/13338)
- [HOME | METASYSTEM](http://metasystem.io/)

# Transcription
  
| Time Index | Transcription                                                                                                 |
| :--------- | :------------------------------------------------------------------------------------------------------------ |
| 00:00      | Welcome to The Automators. I'm David Sparks and I'm joined by Rosemary Orchard. How are                       |
| 00:06      | you doing today, Rosemary?                                                                                    |
| 00:08      | I'm good. I'm surrounded by boxes because I've just moved house, but it's given me a                          |
| 00:13      | chance to set up the home kit stuff again. So I'm pleased to report it will be going                          |
| 00:16      | dark during recording, but it won't actually be dark because I'm going to turn the lights                     |
| 00:20      | on from my Mac. And that's so exciting to be able to do that again.                                           |
| 00:23      | And here I was thinking you would just show up and you'd have like a stainless steel box                      |
| 00:27      | that you open and a bunch of automated robots jump out like spider robots and they move                       |
| 00:33      | everything for you and you're just all set.                                                                   |
| 00:35      | I'm disappointed.                                                                                             |
| 00:36      | I'm disappointed.                                                                                             |
| 00:37      | Yeah. Yeah. If somebody knows where those are, there's still a whole bunch of unpacking                       |
| 00:41      | left to be done, but I'm at the state where I can officially podcast. So that's so good.                      |
| 00:45      | Well, we have a guest today, one of my very favourite automators. Welcome to The Automators,                   |
| 00:50      | TJ Luoma.                                                                                                     |
| 00:51      | Hey, so happy to be here. I've super enjoyed the show and always happy to talk to you.                        |
| 00:57      | Happy to talk about automating things. It's as close as I have to a hobby. So this is                         |
| 01:03      | kind of where I get to really nerd out.                                                                       |
| 01:05      | Well, I'm glad that you took the time to join us. You've been a frequent guest on the Mac                     |
| 01:09      | Power users over the years. We always love talking to you because you just always have                        |
| 01:14      | such interesting ideas. You changed my life a few months ago when you recommended I buy                       |
| 01:19      | roller blade wheels for my office chair. I thank you every day now when I sit and I'm                         |
| 01:24      | not wrecking my floor and I can literally roll across the entire house on one push.                           |
| 01:29      | So it's awesome. But that's how we're here. We're going to hear today to talk about automation                |
| 01:34      | and that, like you said, is your hobby. We're going to cover with TJ today because his stack                  |
| 01:39      | runs deep gang. We're going to, at some point, we're going to get into some [[Stream Deck]] cool                  |
| 01:44      | stuff he's doing. And but I think let's start out, TJ, just with a little background. How                     |
| 01:51      | did you turn this into your hobby? How did you become such a big automator?                                   |
| 01:55      | Well, you know, it was interesting. I think it goes all the way back to going. I started                      |
| 02:01      | college, entered college as a computer science major because I really enjoyed computers.                      |
| 02:06      | And I thought, oh, well, obviously, computer science is the thing that I should do. And                       |
| 02:11      | then I took a programming course and realised that I hated programming. And I tell people                     |
| 02:18      | it's the difference between enjoying driving a car and being a mechanic. And I really enjoyed                 |
| 02:25      | the driving. I really enjoyed driving a computer. And I mean, I grew up watching the Jetsons.                 |
| 02:31      | I mean, the robots are supposed to do things for you. And so I really got into the idea                       |
| 02:36      | of how can I do these things? You know, how can I do something once and then not have                         |
| 02:41      | to do it again? And that's really been, you know, the secret to me is like, if I realise                      |
| 02:48      | I've got to do something again and again and again, especially if something has to be done                    |
| 02:52      | in a sequence, I'm terrible at remembering these things. And so if I can, you know, do                        |
| 02:57      | it once the right way, I'd much rather do that once and then have some kind of a system                       |
| 03:03      | there to help me replicate that at at at will.                                                                |
| 03:08      | Yeah, you know, I'm like you, I've done the online courses I've made, you know, apps                          |
| 03:13      | for the iPhone using [[Xcode]] and going through, I mean, real basic stuff and used APIs. But                     |
| 03:20      | to me, that's like, that is a profession. If you want to get good at that, you have                           |
| 03:24      | to spend all your time doing that. Whereas the bit I want is I want to be able to drive                       |
| 03:29      | a computer enough to get my work done for me sooner, but I don't necessarily want to                          |
| 03:34      | write the apps that do the work.                                                                              |
| 03:36      | Yeah. And I'm the complete opposite of both of you. I love programming and writing code                       |
| 03:40      | and figuring out why this doesn't work. It's always Python and the indentation is wrong.                      |
| 03:44      | That's always the answer for me. But you know, it's for me, it's great fun figuring it out.                   |
| 03:50      | But as you said, TJ, it's all about the actual steps that are involved. It doesn't really                     |
| 03:53      | matter how you solve it, you know, providing you end up figuring out what the steps are                       |
| 03:58      | that you need to replicate and then, you know, a solution where you can ideally drag and                      |
| 04:03      | drop like Lego to get everything in there.                                                                    |
| 04:06      | I think this is the point where somebody has to say, yes, we know it's Lego, what blocks                      |
| 04:12      | and blocks and something, whatever the, but everyone knows what we mean.                                      |
| 04:17      | And never call them Legos. You do that. The whole internet writes you email. I'm just                         |
| 04:21      | telling you that that's a that's an important safety tip. If you listen over the last few                     |
| 04:26      | years, I've been very careful.                                                                                |
| 04:28      | The hierarchy of things not to do on the internet is like, you know, messing with a cat, a puppy              |
| 04:33      | and calling things, you know, Legos.                                                                          |
| 04:35      | Yeah. Yeah. I think the fact that you've merely used the word now means you're going to get                   |
| 04:39      | email. So you've been warned.                                                                                 |
| 04:42      | I'm writing an email to both of you as we speak, just to cover it for the listeners.                          |
| 04:47      | caseyliss.com. No, yeah.                                                                                         |
| 04:50      | So TJ, we are going to, like I said, we are going to kind of get into the deeper stuff                        |
| 04:54      | later in the episode, but I wanted to start out, there are people listening to the show                       |
| 04:57      | that, that, you know, don't do scripting, but they use kind of like the basic automation                      |
| 05:03      | tools, you know, the holy trinity of [[TextExpander]], [[Keyboard Maestro]], [[Hazel]], that kind                        |
| 05:08      | of stuff. Share some, some automation you've done with us recently using like UI scripting                    |
| 05:14      | and those types of tools.                                                                                     |
| 05:16      | Sure. You know, that there's, there's always something, and I love using all of those different               |
| 05:22      | tools. I've got one that, you know, just uses an example with [[Hazel]]. And I've been doing                      |
| 05:31      | this daily podcast for, during COVID time, but the daily lectionary, which is just some                       |
| 05:38      | scripture reading things. I started it as my own sort of, you know, process. And I also                       |
| 05:43      | thought, well, maybe others could benefit from this. And, but of course, doing a podcast                      |
| 05:47      | every day, there's a lot of repetitive steps. And one of them was that when the level later                   |
| 05:53      | came back out, I wanted to send my, my final file through level later. So I set up [[Hazel]]                      |
| 06:01      | so that if I name a file in my [[Audio Hijack]] folder, and it says level me in the file name,                    |
| 06:09      | that will automatically open the file in level later. And then I just have to push a button                   |
| 06:13      | and it runs in level later. And, you know, so that's not a difficult thing. But again,                        |
| 06:19      | it saves me from now and flip over to finder, find the right file, right click on it, open                    |
| 06:24      | it in the, in the level later app. And again, something I do every day.                                       |
| 06:28      | Yeah, that's, let me share up there that that is something I think a lot of people don't                      |
| 06:32      | think about is that what I call name based tagging, because for lack of a better term,                        |
| 06:38      | like if you're working on an iPad, you know, that the tagging tools on the iPad need, need                    |
| 06:45      | love, they, you know, they're there, but they're not really there, you know. And so people                    |
| 06:50      | write me all the time, well, what am I supposed to do? I'm working on the iPad. I'm like,                     |
| 06:54      | just add it to the name, you know, put something in the name of the file. And if you've got                   |
| 06:59      | a file that's viewable on a Mac, [[Hazel]] can do what it needs, because there is a command                       |
| 07:04      | in [[Hazel]] that says name contains doesn't have to be name matches contains is the magic                        |
| 07:11      | phrase there. And then you put whatever you want at the end, you put your tag, like in                        |
| 07:16      | TJ's case, he's saying level me, and that is a tag in essence. And if you want to be                          |
| 07:22      | fancy, you can even write it so it renames the file to take level me out afterward. But                       |
| 07:27      | you don't have to. And it's a very easy way to do that. And using shortcuts on iOS, it's,                     |
| 07:34      | it's trivial to add, you know, to a pin to a name. So you can even automate the process                       |
| 07:40      | of adding the, you know, air quote, name based tag.                                                           |
| 07:44      | Mm hmm. Yeah. Yeah, I do this a lot with shortcuts. I have shortcuts, you know, prepend something             |
| 07:49      | to a name and stick it in a folder and [[Dropbox]], which is cunningly named automated actions.                   |
| 07:54      | Yeah. And then Hazel's just watching that and stuff comes down in that folder and Hazel's                     |
| 07:58      | like, Oh, wait, I need to do this magic. Because it's super easy to do and requires practically               |
| 08:03      | zero thinking about, especially with a couple of little automations to get things rolling.                    |
| 08:08      | Yeah, I do have a solution for tagging on iOS now, finally. But maybe we'll save that                         |
| 08:13      | for another day. I'm kind of going down the rabbit hole. All right, I interrupted you.                        |
| 08:17      | What's next?                                                                                                  |
| 08:18      | Well, continuing my belief that there are only about seven or eight actual people in                          |
| 08:26      | the world who write [[AppleScript]] and then the rest of us just Google and copy and paste.                      |
| 08:30      | Yes.                                                                                                          |
| 08:31      | I found a glorious thing that which is an AppleScript that will move your dock from                          |
| 08:38      | being on the left to move it to the bottom. Because when I'm editing files in a vision,                       |
| 08:44      | I want to be able to go all the way to the left side of my screen without popping up                          |
| 08:48      | the dock or getting into the dock. So usually I've got my dock on the left, which is where                    |
| 08:52      | God wants it to be. But you know, sometimes I do will move it out of the way. And what                        |
| 08:57      | I was doing before was I was using a shell script, but it had to kill the dock. And                           |
| 09:07      | with the AppleScript, you don't have to kill the dock, which has some other side things.                     |
| 09:11      | And so now I've got this little toggle where I hit option D, and it'll either if it's                         |
| 09:15      | on the left, it goes to the bottom. If it's on the bottom, it goes to the left. And like                      |
| 09:19      | two days later, I saw somebody, I think, on either the automators or MPU forum asking,                        |
| 09:23      | Hey, how do I move my my dock around? And I'm like, Hey, let me share this AppleScript                       |
| 09:28      | that somebody wrote 10 years ago that I have now copied that you can now copy.                                |
| 09:32      | Yeah, you know, it took me a minute to compute that because I was thinking you were talking                   |
| 09:35      | about a document. And you're talking about the dock with the apps. And of course, yeah.                       |
| 09:42      | And automating moving that is a great idea. Where's your dock, Rosemary?                                      |
| 09:48      | Well, I've just been told that it belongs on the left. So I've moved it. It was on the                        |
| 09:54      | right. I have an ultra wide monitor. So for me, it makes very little sense to put the                         |
| 09:58      | dock at the bottom of my screen, simply because I've got a lot of horizontal real estate,                     |
| 10:03      | and I've not got a lot of vertical in comparison. So I have it. I had it on the right. It's                   |
| 10:09      | now living on the left. I'm going to try and see, but I'm right handed. And I tend to look                    |
| 10:12      | over to the right for things. So I'll see how it goes.                                                        |
| 10:16      | Well, it's interesting that one of the reasons that I do that is only because that's where                    |
| 10:21      | the Apple menu is. It's over on the left. And I used to remember pinning when you used                        |
| 10:25      | to be able to move the dock, like all the way to one side, I'd have it pinned to the                          |
| 10:29      | very top left corner. So basically, that was just where you could send your mouse. But                        |
| 10:34      | I think either left or right is acceptable unto the Lord on the bottom. That makes no                         |
| 10:39      | sense because our monitors are definitely all wider than they are. Unless maybe you've                        |
| 10:43      | got your monitor turned into portrait mode or something, but left or right, I think is                        |
| 10:48      | probably almost equally acceptable.                                                                           |
| 10:50      | Or if you're like feeling nostalgic for Tiger or something like that, and you just want                       |
| 10:54      | it to look old. But the hiding on or off since we've gone down this rabbit hole.                              |
| 11:00      | I do not hide my dock because it confuses me when it randomly reappears. And I'd much                         |
| 11:05      | rather have things consistently be in one place.                                                              |
| 11:09      | I usually have it viewable, unless the only exception is like if I'm working on something                     |
| 11:14      | and sometimes I just want to focus, I will actually hide the dock and the menu bar, which                     |
| 11:19      | is still weird. But I've got a wide monitor too, and I can get two pages and like a pages                     |
| 11:25      | document, pages I work. And then I like sometimes just being able to see that and not have sort               |
| 11:34      | of anything else except what I'm trying to write, but usually viewable on the left.                           |
| 11:39      | Yeah. And I'm sure there's a way to [[AppleScript]]. They toggle to hide the dock off and                        |
| 11:43      | on. If you can move it, I'm sure you can hide it via [[AppleScript]] as well. But I've never                     |
| 11:47      | really felt the need to automate it. I put it on the left years ago, and that's basically                     |
| 11:52      | where it stays. Sometimes I'll move it to the bottom if I'm screencasting and people                          |
| 11:56      | want to see my apps so they're easier to see. But that's really the only time I ever do                       |
| 12:02      | it.                                                                                                           |
| 12:03      | I would say there is an exception. I have the dock hidden and at the bottom when I'm screencasting            |
| 12:06      | because then I can just mouse down and people will be able to see it if I'm navigating between                |
| 12:10      | apps and not using the app switcher with command tab.                                                         |
| 12:13      | Yeah. Well, that's like, now, where are you using that script, TJ? Is it just a simple                        |
| 12:20      | move of the dock or is it part of something bigger?                                                           |
| 12:23      | It is a [[Keyboard Maestro]] macro that I have connected to option D. Command option D, of                        |
| 12:32      | course, will hide or show the dock. And so the option D just seemed like another good                         |
| 12:38      | keyboard shortcut.                                                                                            |
| 12:41      | Yeah. Yeah, it makes sense. I feel like if there's ever something you want to do system                       |
| 12:47      | based on your Mac, if you just do a Google search or [[AppleScript]] and describe what you                       |
| 12:52      | want to do, it's there. Just the other day I was looking into methods to automate killing                     |
| 12:59      | the microphone input. I was thinking about trying to turn one of my stream but deck buttons                   |
| 13:04      | into a mute switch. And that is doable with a USB mic because there's an easy [[AppleScript]].                   |
| 13:10      | It's like four lines that will set input volume to zero, which does the job. Except because                   |
| 13:16      | I have an XLR microphone, that's not addressable via [[AppleScript]]. So it kind of stopped me                   |
| 13:21      | in my tracks, but just most things you want to do, just like TJ's dock movement, just                         |
| 13:27      | Google [[AppleScript]] and describe what you want it to do. And you'll be surprised how                          |
| 13:32      | often somebody's already written for you. Those eight people have been really busy.                           |
| 13:38      | Yes. Yes, they have.                                                                                          |
| 13:40      | And then the other 8,000 of us have figured out how to hack six different scripts together                    |
| 13:44      | and we have something kind of kludgy and it's probably got some duct tape in there,                          |
| 13:48      | but it also achieves what we want and it moves the dock and hides it at the same time. So                     |
| 13:52      | I'm betting if I Google for that, I'm going to find it. But that link's not in the show                       |
| 13:55      | notes yet.                                                                                                    |
| 13:56      | So I'm actually thinking maybe there's only two people. It's Sal and Doug. And that's                         |
| 14:01      | it. And basically everything else is derivative.                                                              |
| 14:05      | Yeah.                                                                                                         |
| 14:06      | That's possible.                                                                                              |
| 14:07      | It all traces back to Sal.                                                                                    |
| 14:09      | Yeah. All right. Drop another one on us. This is good.                                                        |
| 14:13      | So I've got, I've been using the, this is another one that is a free tool that I think                        |
| 14:20      | a lot of people might know. Well, the new tool I'm using is called Rectangle. And this                        |
| 14:26      | is replacing an app, Spectacle, which did the same thing, but Spectacle's developer apparently                  |
| 14:32      | is pointing people towards rectangle. And what this does is it lets you assign keyboard                       |
| 14:37      | shortcuts to moving windows around the screen. So if you want something at the top left corner                |
| 14:44      | or centred or full screen, full screen, but not maximised, you know, that difference there.                  |
| 14:51      | That's one that, again, I do have this really nice monitor now that I think it's like a                       |
| 14:56      | 27 inch monitor. And so, you know, being able to move things around precisely has been a                      |
| 15:02      | very handy thing because, you know, if you want, if you've got all the screen space rather                    |
| 15:07      | than just having one window in the centre, why not have two windows side by side?                             |
| 15:12      | And now see, I've done all of that with keyboard Maestro because they've got all those windowing              |
| 15:16      | tools in there. And, you know, I always kind of like the idea of having fewer tools to                        |
| 15:22      | do this stuff. And I've done with a bunch of different apps over the years. There was                         |
| 15:26      | a window managing tool that I used for years now. I forgot the name of it because I just                      |
| 15:31      | haven't reloaded it for so long. But the, you know, keyboard Maestro and arrow keys,                          |
| 15:36      | you can do quite a bit with that. What is the, does it have the ability to like remember                      |
| 15:41      | settings for specific apps? Can it do setups for you, this app you're talking about?                          |
| 15:46      | I don't think so. But one of the things that it does that I, you know, I know I could probably                |
| 15:52      | figure out in keyboard Maestro, but it's just one of these things where it became pre-packaged                |
| 15:55      | is, like you can have it do like over to the right. And then it'll, it could either make                      |
| 16:01      | it like larger or smaller based on like, if you keep pitting the same key. So that it                         |
| 16:07      | does, you know, thirds, I guess, is the word I'm looking for. And so that's been the, that's                  |
| 16:12      | been one of the things that, you know, I've used this for because I've done some of this                      |
| 16:18      | stuff in keyboard Maestro and obviously, you know, fewer apps is usually better apps.                         |
| 16:22      | But that's just, again, I think for somebody who's looking at maybe an easy way to get                        |
| 16:28      | into some of this stuff, you know, there's another, you know, entry point into it. And                        |
| 16:33      | I think it's just like rectangle app.com or something, but Google rectangle Mac and you'll                    |
| 16:39      | find it.                                                                                                      |
| 16:40      | Yeah. So Link is in the show notes already.                                                                   |
| 16:42      | Of course it is.                                                                                              |
| 16:43      | And I do think that window management is a great gateway drug to automation. Like if                          |
| 16:48      | you're listening to this and trying to figure out how to get started getting an app like                      |
| 16:52      | this, I mean, when you're able to sit at your Mac and very quickly organise your windows                      |
| 16:56      | without goofing around with the mouse and, you know, resizing and all that nonsense,                          |
| 17:02      | you will see the benefits of automation very quickly.                                                         |
| 17:04      | Even just getting started with actually opening and closing the right applications is a game                  |
| 17:08      | changer. I spent five minutes this morning creating a new keyboard Maestro and Macro,                         |
| 17:12      | which will close the applications that I need to close at the end of the day on my work                       |
| 17:16      | MacBook in the right order. Because if I don't close the database connection application,                     |
| 17:20      | then I can't close the terminal and some other things. And so I just did that. And then at                    |
| 17:25      | the end of the day, I ran a keyboard Maestro Macro and it just closed everything in the                       |
| 17:29      | right order for me.                                                                                           |
| 17:30      | So I didn't have random windows hanging, which would then interfere with my sessions tomorrow,                |
| 17:34      | which was great.                                                                                              |
| 17:35      | So I'd highly recommend playing with both window management and application management.                       |
| 17:40      | So Rose, when you need to have apps close in a certain order, I'm assuming you're just                        |
| 17:44      | having it close the app with a keyboard Maestro command then pause for a little while and                     |
| 17:49      | then close the other one. What's the mechanism you used?                                                      |
| 17:53      | To start with, I actually use an if to check whether or not if the application is running,                    |
| 17:57      | because if it isn't, then I can just skip it and move on to the next one.                                     |
| 18:01      | And then I just tell it to quit the application. And then I did add a pause for one second                    |
| 18:05      | in there, but I'm not sure how necessary the pause is. I've just added it because I know                      |
| 18:10      | that the database connection application can take a little while to quit sometimes and                        |
| 18:13      | I don't want to mess things up.                                                                               |
| 18:15      | Yeah, you got to give computers time. That's the patience, right?                                             |
| 18:20      | Yeah.                                                                                                         |
| 18:21      | TJ, I bet you've got a fancy end of day script. Just knowing you, I can't imagine you don't                   |
| 18:26      | have one.                                                                                                     |
| 18:27      | Yeah, I do. I've got one that will basically shut down all my applications. This is one                       |
| 18:37      | that COVID has been working from home, which I haven't done before. And so figuring out                       |
| 18:47      | that work-life balance thing, that everyone who works from home has talked about. And                         |
| 18:51      | I was sure it wasn't going to be a problem for me because I'm special. And guess what?                        |
| 18:55      | I'm not.                                                                                                      |
| 18:56      | We're all special, just not in the ways that we would hope that we are.                                       |
| 19:00      | Exactly, exactly. So yeah, I had this thing and I had it. As a matter of fact, I've got                       |
| 19:06      | one that will run and it will actually warn me that it's about to run and shut down at                        |
| 19:13      | six o'clock every day. And it will close my mail application, it closes OmniFocus, and                        |
| 19:23      | then just to make things even more difficult for me to keep working, it will switch to                        |
| 19:33      | the login screen using fast user switching. It's not shutting down, but I would have to                       |
| 19:40      | log back into my computer to keep on working. And if nothing else, you know what? At least                    |
| 19:46      | I stand up, walk around, refill my water bottle or whatever, and then I decide, can this wait                 |
| 19:53      | till tomorrow? And then I've got a couple of macros and [[Keyboard Maestro]] that will not                        |
| 20:01      | let me launch my... I use different email applications for my work email. And one of                          |
| 20:07      | the reasons for that is it won't let me launch it on the weekend. It will see it launch and                   |
| 20:12      | it will say, nope, it'll put up a notification and it will put it back down. Now, obviously                   |
| 20:17      | I can turn that off if something dire comes up, but you know what? Something dire doesn't                     |
| 20:21      | usually come up on email. It's just this sort of habit we get into of, oh, I wonder, I should                 |
| 20:27      | check my work email. No, you shouldn't. You should not.                                                       |
| 20:30      | I am totally going to steal that and do that with shortcuts on my iPhone because the work                     |
| 20:35      | chat pops up and if I'm on holiday or something, I shouldn't be popping in there to see what's                |
| 20:39      | going on. I've already changed notification settings. So I'm going to have it check my                        |
| 20:44      | calendar and if I'm not supposed to be working, it's going to not open it. It'll open, I don't                |
| 20:49      | know, Netflix or something, which would mean I have to install Netflix on my iPhone. But                      |
| 20:54      | yeah, that is a genius idea, TJ, totally stealing that. And that's possible on multiple platforms             |
| 21:00      | now, which is great.                                                                                          |
| 21:02      | Yeah, and instead of rerouting in Netflix, though, go to like a meditation app or something,                  |
| 21:06      | you know, it's a weekend.                                                                                     |
| 21:07      | There you go.                                                                                                 |
| 21:08      | I mean, Netflix is a way of meditating. I haven't watched TV in weeks.                                        |
| 21:11      | I guess.                                                                                                      |
| 21:12      | It depends on what you're watching probably.                                                                  |
| 21:14      | All right, so let's break down the mechanics of those. You know, is it, what is the steps                     |
| 21:21      | you're using? Is it an if statement you're checking against the day?                                          |
| 21:24      | Yeah, when the, I'm trying to find it now, when the application launches, it checks basically                 |
| 21:33      | the hour and the day. And if the day is, well, my, because I work, you know, as a pastor,                     |
| 21:41      | I do work on Sundays. But so mine checks to see if it's Friday or Saturday. And if it's                       |
| 21:47      | Friday or Saturday, then it will just quit the app and pop up a notification that says                        |
| 21:51      | you're not supposed to be working. And [[Keyboard Maestro]] has, you know, built in notification                  |
| 21:57      | tools and, you know, it can just do quit specific application.                                                |
| 22:03      | And then it will, I think it also, if it passes that check, and it's not those days,                          |
| 22:09      | then it will check to see if it's after, I think it's 6 30, just so I gave myself a little                    |
| 22:14      | window at the end of the day for, you know, if I do need to, you know, finish an email                        |
| 22:19      | before that, you know, something that needs to be sent before tomorrow, then it just checks                   |
| 22:25      | to see if it's, you know, before, what is it 18 30, because it's I'd use military time                        |
| 22:29      | because it's easier to do comparisons. Yeah, of 24 hour time. And if it's after, if it's                      |
| 22:37      | after that, and you can do, you know, a bunch of, you know, date calculations in Keyboard                     |
| 22:43      | Maestro too, it's got all these things. And the [[Keyboard Maestro]] wiki, I think I used                         |
| 22:48      | two wikis, one of them is Wikipedia, and the other one is Keyboard Maestro's documentation.                   |
| 22:54      | And it just shows you how to do these things. And yeah, so, you know, a couple of nested                      |
| 22:59      | if statements is all I need.                                                                                  |
| 23:02      | All right, would you be willing to share that one? I'm sure some listeners would like to                      |
| 23:05      | try and incorporate something like that into their daily lives, or even just screenshots.                     |
| 23:09      | And we can put it in the show notes, but let's put something in there so folks can check                      |
| 23:14      | that out. Absolutely.                                                                                         |
| 23:18      | This episode of the automators is brought to you by TextExpander. Go to textexpander.com                      |
| 23:23      | slash podcast to get 20% off your first year. TextExpander is the ultimate automator tool.                    |
| 23:31      | It removes the repetition out of work. So you can focus on what matters most with TextExpander.               |
| 23:37      | You can say goodbye to repetitive text entry, spelling and message errors, and trying to                      |
| 23:42      | remember the right thing to say. When you use TextExpander, you can say the right thing                       |
| 23:47      | in just a few keystrokes. Better than copy and paste, better than scripts and templates.                      |
| 23:52      | TextExpander snippets allow you to maximise your time by getting rid of the repetitive                        |
| 23:57      | things you type, while still customising and personalising your messages. Just recently                       |
| 24:02      | I was speaking with a close friend who's a teacher and she's struggling. You know, she's                      |
| 24:07      | teaching from home and she's got to send all these reports to parents and she didn't                          |
| 24:11      | know how to do it. She was telling me about her crazy copy and paste system. I told her                       |
| 24:16      | to get TextExpander. She called me back in like an hour and but within an hour she had                        |
| 24:21      | downloaded it, figured it out and totally automated her system. She was so happy and                          |
| 24:26      | I was so happy to be able to share that with her. So whoever you are, whatever you do,                        |
| 24:31      | TextExpander can help you. TextExpander can be used on any platform, any app, anywhere                        |
| 24:37      | you type. So take your time back and increase your productivity with TextExpander. And best                   |
| 24:42      | of all, Automator's listeners get 20% off their first year. So go to textexpander.com                         |
| 24:47      | slash podcast to learn more about TextExpander and let them know you heard about it here                      |
| 24:52      | on the Automators. And our thanks to TextExpander for their support of the Automators.                        |
| 24:57      | Yeah, you know, we were talking before the break about shutdown scripts. I've got one                         |
| 25:01      | too. Although mine isn't as nuclear as yours. I actually leave my Mac running in the background               |
| 25:08      | to run mail rules. So like there's certain things actually leave going, but there's something                 |
| 25:12      | to be said to have a shutdown style automation from your Mac. I use the shortcut control                      |
| 25:19      | option command X. And whenever I hit that, I'm stepping away. It clears a whole bunch                         |
| 25:24      | of stuff out and the desktop is always clean. And I feel like coming back to a computer                       |
| 25:29      | and having windows open from the last session you were on makes it really hard to get started                 |
| 25:34      | with whatever the reason was you went to the computer because you're like, Oh, wait, there's                  |
| 25:38      | email. Let me see what's going on in email or there's that project I was working on two                       |
| 25:42      | hours ago. Let me just pick up there. And as silly as it sounds, it's definitely a brain                      |
| 25:47      | hack to, you know, properly get your windows off the screen, whether you're shutting them                     |
| 25:52      | down in order like Rose or just hiding some of them like me to give yourself a fresh start                    |
| 25:58      | when you come back to your computer. Yeah. And if your mail application, you know, like                       |
| 26:02      | badges, either your menu bar or the dock app, always quit that before you come back to something              |
| 26:07      | because you don't want to come back and sit down and see a little one in a circle and                         |
| 26:11      | go, Oh, I wonder what that is. You don't need that. There's literally nobody who listens                      |
| 26:16      | to this show who has badges on mail. I have badges on mail. You do. We need to rethink                        |
| 26:25      | our relationship, Rose. What are you doing? I'm sorry. So I have badges on mail for some                      |
| 26:31      | mail accounts and not all mail accounts just because there are sometimes things where especially              |
| 26:36      | work stuff, you know, if I'm getting email through on, there's a particular backup account.                   |
| 26:41      | If I get email on that, then it usually means that it's the end of the world and we should                    |
| 26:45      | probably deal with it soon. So, you know, I do have that.                                                     |
| 26:49      | I get it. I used to have a badge on for VIP emails and I realised I was just ignoring                         |
| 26:55      | it. So why have it? Fair enough. Fair enough. Yeah. I saw family members iPhone too long                      |
| 27:01      | ago and they had, you know, thousands and thousands of unread messages in their inbox.                        |
| 27:05      | So I'm like, you know, you can turn that badge off. And they're like, well, I noticed when                    |
| 27:09      | the number changes. Oh my goodness. Yeah. It hurts. It hurts. So painful. Yeah. Yeah.                         |
| 27:17      | What else you got for us, TJ? What else are you doing? What's the latest automation you've                    |
| 27:21      | added that's just delights you? Well, again, I'll go back to the podcasting. So I came                        |
| 27:31      | up with a series of [[Keyboard Maestro]] shortcuts that will do things, again, that are repetitive,               |
| 27:39      | but need to be done in the right order. And I found myself again, you know, even though                       |
| 27:43      | I've been doing this for a long time, every now and again, I still find myself doing something                |
| 27:47      | over again. I'm like, wait a minute, I should be automating this. So the, what I ended up                     |
| 27:53      | doing with the daily podcast, the daily dictionary podcast is I end up with nine files because                |
| 28:00      | I each one of the readings I record as a separate file and I edited it and but then I need to                 |
| 28:07      | combine them again. And so I can do this by opening one file and then opening another                         |
| 28:13      | file, select all, copy, close that window, paste it into the first one. And if I do this                      |
| 28:19      | nine times and I have all the readings in the right order, well, I mean, nothing screams                      |
| 28:24      | automate me more than something like this, right? Where it's like, I need to flip the                         |
| 28:28      | Finder, I need to hit the up arrow once, I need to open this document when fishing opens,                     |
| 28:33      | I need to, and there's this weird thing where like, even if you just, even if you haven't                     |
| 28:37      | changed anything in an audio file in [[Fission]], it will, it will act like it needs to be saved.                 |
| 28:43      | So then you have to tell it that you don't want to save anything because nothing's really                     |
| 28:46      | changed. So I've put all of that together. And so now I can hit one button on my stream                       |
| 28:53      | deck. You know, I select the correct file in the Finder, and it will just in sequence                         |
| 28:59      | open these nine files and paste them all together. And I just watch it happen. And it amuses                  |
| 29:04      | me every time. There is something to be said for an automation that takes a little time                       |
| 29:09      | to finish. Yes, your computer screen is just flying. I've got some like that for some of                      |
| 29:14      | my legal processing and things I do where I push a button and it's like, it'll take                           |
| 29:19      | it three or four minutes and someone will say, well, man, that's a long time. Is that                         |
| 29:22      | really automation? Well, for me to do that would have taken an hour, you know, so it                          |
| 29:27      | is definitely automation. But just, you know, to watch the little robots inside go to work,                   |
| 29:32      | it can be delightful. If an automation takes the same amount of time as it would take to                      |
| 29:37      | do it yourself, even if your only achievement is that it is always consistently doing the                     |
| 29:42      | right thing, that's an achievement. And then you can just, you know, go off and get a glass                   |
| 29:46      | of water and stretch your legs or something and come back and it's done. So you don't                         |
| 29:49      | have to do it. And I still consider that a win, you know, whether or not you're actually                      |
| 29:53      | saving time as long as you're achieving the accuracy, you know, whatever your goal is,                        |
| 29:57      | then you're winning. No, absolutely. Because again, it's that thing of, oh, you know,                         |
| 30:02      | did my fingers hit the right, here was this really silly one the other day, I had, there's                    |
| 30:08      | an app called displays. And it will show you like all the different resolutions that your                     |
| 30:13      | monitor can do. Well, the one I'm using now has like 100 of these. Yeah. Well, you can                        |
| 30:19      | turn them off. And what you had to do was down arrow spacebar, down arrow spacebar.                           |
| 30:25      | So I wrote a [[Keyboard Maestro]] that did down arrow spacebar 10 times. And I did that and                       |
| 30:30      | I kept repeating it until I hit the rest of the list. So now it only shows me the resolutions                 |
| 30:34      | that I really want. Simple thing. But you know what, I kept hitting down arrow twice                          |
| 30:39      | and then spacebar. And then I had to go back up and hit one of them. It's like, no, I'm                       |
| 30:43      | just, you have the computer do this.                                                                          |
| 30:44      | Yeah. And I call it, I guess user interface scripting or UI scripting where you're just                       |
| 30:49      | literally using the existing interface, but using automation rather than your fingers to                      |
| 30:55      | manipulate it. And it's just, that is some of the easiest scripting. Anybody can do it.                       |
| 31:01      | So long as you've got a tool that supports it and [[Keyboard Maestro]] does. And you can                          |
| 31:06      | find so many uses for that in the finder, in the menu bar, you know, anywhere in your                         |
| 31:11      | computer. And, you know, I was just doing something recently, you know, we, Rose and                          |
| 31:15      | I have been working on this idea of scripting toggle. And I just use the toggle application                   |
| 31:23      | and wrote a UI script for that's user interface. It works. It's not great. I mean, Rose has                   |
| 31:28      | a better solution for it, but almost anything you do, you can, you can script this way.                       |
| 31:35      | Yeah. Yeah, you can. And it's amazing what you can get away with by doing that. Now,                          |
| 31:40      | of course, in the case of toggle, I wasn't happy with doing that. I don't really feel                         |
| 31:43      | like I even need the toggle app on my Mac. So I've just gone ahead and use the API and                        |
| 31:49      | I've got a [[Keyboard Maestro]] macro, which I'm working on sharing. I've had a little bit                        |
| 31:53      | of stuff going on, okay, moving house, which is kind of crazy and time consuming surprisingly.                |
| 31:58      | But it's possible to do anything, you know, you can, you can cheat and do it the easy                         |
| 32:03      | way. But if it achieves the result, who cares? I mean, you could even do this in automator                    |
| 32:07      | with the record button, I think, because automator can record and watch you do something. And                 |
| 32:12      | then, you know, you do it and then you just tell automator to do it 50 times. You're done.                    |
| 32:17      | So [[Keyboard Maestro]] even has a method where you can create little temporary scripts to                        |
| 32:22      | do that. Like I made one recently where I needed to hit two carriage returns and then                         |
| 32:27      | a backspace to remove tabs and bullets and on a weird text thing I was working on. And                        |
| 32:31      | I had to do that for like 100 lines. And I just made a quick little temporary script.                         |
| 32:36      | Now, TJ, when you did this with your arrow keys and your monitor, what did you do as                          |
| 32:40      | a temp script? Or did you just make an actual script for it?                                                  |
| 32:43      | I made a regular macro. But what I do when I'm doing these, again, is I'll name them,                         |
| 32:49      | you know, T E M P and then describe what they do. I'll use them for what I need them to                       |
| 32:54      | do. And then I'll just disable them in [[Keyboard Maestro]] so that if I find something later                     |
| 32:59      | where I need to do this again, I've, you know, already got the macro there, I just need to                    |
| 33:03      | re enable it.                                                                                                 |
| 33:04      | Yeah, that makes a lot of sense. Also, disabling is great because it allows you to avoid shortcut             |
| 33:10      | conflicts like, you know, your trigger conflicts. If you leave a lot of these around without                  |
| 33:14      | disabling them, inevitably you hit the shortcut again on something else you're making.                        |
| 33:19      | Yeah, you do. And I have done that so many times. I actually now have a macro group which                     |
| 33:24      | is disabled where I throw things in that were temporary things. And I can't, I'm kind of                      |
| 33:29      | a packrat when it comes to these [[Keyboard Maestro]] macros and it feels kind of silly, but the                  |
| 33:32      | number of times I've gone, Oh, wait, but I actually had something very similar to this.                       |
| 33:37      | So I can go in and duplicate this macro. I'd use that as my basis. It's great.                                |
| 33:42      | So what are you doing these days? Let's take it a little step further. You are also writing                   |
| 33:49      | a lot of like, just script based automation. What tools are you using for that? And, you                      |
| 33:54      | know, what kind of problems are you solving with that?                                                        |
| 33:57      | Well, most of the scripting that I do is shell scripting, which is just something that I've                   |
| 34:03      | picked up for a long time now. When I was going back to the college days, I was fortunate                     |
| 34:10      | that my college had a bunch of next computers. This was in the early nineties. And I started                  |
| 34:17      | learning there about using shell scripting to do, again, just very little things. And                         |
| 34:23      | so, you know, I've got things where, you know, I've got, I can automatically record podcasts                  |
| 34:30      | that are live streaming using FFM peg. When the relay stream goes live, I've got a button                     |
| 34:38      | I can hit. And I could do this in [[Audio Hijack]], but by doing it this way, you know, I basically               |
| 34:46      | just have the script set up once. And then when it's done, it will add the artwork. It                        |
| 34:51      | will check to see when it actually checks to see what the relay page says is the show                         |
| 34:57      | title and it will change the file name and all these things. And then at the very end                         |
| 35:01      | of it, it uses an app, well, a command line program called cloudy uploader, which sends                       |
| 35:09      | the MP3 to overcast. If you've got an overcast premium subscription, you can upload files                     |
| 35:16      | directly there. So Monday this week, I usually listened to upgrade, but I couldn't listen                     |
| 35:22      | to it live. So I recorded the stream and then because I like to hear all the little things                    |
| 35:29      | I even like to hear, you know, if there's goofy things that get cut out of the things                         |
| 35:33      | or Jason, I think had a picture of his cat in the, in the show notes because his cat                          |
| 35:38      | was complaining about not being allowed into the Roman. I like to hear all those little                       |
| 35:42      | behind the scenes things. I also have I've used for a couple of years, a program called                       |
| 35:50      | text bar that will put things in my menu bar. And one of the things I've been doing with                      |
| 35:56      | that recently is I wrote a script to keep an eye on, give me a little more information                        |
| 36:02      | about what time machine is doing. You know, the sort of like, okay, well, yes, I can see                      |
| 36:08      | the icon that time machine is running, but this will put in there like what the percentages                   |
| 36:13      | of completion, how many gigabytes is it needs to update and how many it hasn't.                               |
| 36:20      | Text bar is a automation friendly app that you can, you can really kind of customise                          |
| 36:24      | data in your, in your menu bar. It's a great app. The new hotness though is bit bar. Are                      |
| 36:31      | you familiar with this one?                                                                                   |
| 36:32      | Well, yeah, what's really funny is that bit bar is I think actually predated text bar.                        |
| 36:39      | And then I remember looking at bit bar and going, Oh, well, this looks cool. It hasn't                        |
| 36:43      | been updated for a while. And then apparently some point since then it has, it has gotten                     |
| 36:50      | updated. And yeah, I've been using bit bar as well. And again, the tool, two very excellent                   |
| 36:58      | tools bit bar has a lot, a big library. And I think that may be easier for folks to, you                      |
| 37:05      | know, find something that somebody else has already written. Again, just because I'm more                     |
| 37:11      | familiar with one than the other, but I'll tell you one that I did in bit bar the other                       |
| 37:15      | day, because I was again, trying to play with it was when I run zoom meetings, I don't know                   |
| 37:22      | if either of you have had this zoom experience, but zoom can just all of a sudden decide it                   |
| 37:27      | means all of your CPU. And so I wrote a little script that will check to see how much of                      |
| 37:34      | my CPU it's using. And it just puts that in the menu bar. And the nice thing about it                         |
| 37:41      | is, is if the zoom isn't meeting, the script doesn't output anything. And I get that little                   |
| 37:46      | space back in my menu bar.                                                                                    |
| 37:48      | Did you contribute that to your GitHub repository or is that just something on your computer?                 |
| 37:53      | I have not yet, but I do have a on my, on my GitHub, I just started a bit bars repo.                          |
| 38:01      | So I will, I will put that up there as well.                                                                  |
| 38:03      | And we'll get a link to that in the show notes. Bit bar is something I think automators, listeners            |
| 38:07      | should check out. Because as TJ was, was mentioning, you know, it's just a basically a framework              |
| 38:14      | when you install it, but then there's a bunch of prewritten automation on it. And, you know,                  |
| 38:19      | using the AppleScript model, you can take something somebody else's written and start                        |
| 38:24      | modifying it to kind of suit yourself. And you can also write a lot on your own. [[Jason Snell]]                       |
| 38:30      | actually has been very active with this app lately. It seems like every time I go                       |
| 38:34      | over to Six Colors, I see something new. He's done with the bar.                                              |
| 38:37      | That's where I first heard about it, I think actually, because it's one of those things                       |
| 38:41      | I keep looking at, and I've not yet played with, but I probably ought to because there                        |
| 38:45      | are so many things where I think it'd be really handy to have this information displayed in                   |
| 38:49      | my menu bar only, of course, you know, it's not there. And I've got other things in there.                    |
| 38:52      | And I'm having to use bartender to attempt to wrangle to get something vaguely resembling                     |
| 38:57      | space, even though I've got a 34 inch ultra wide monitor here. So I definitely need to                        |
| 39:01      | have a play with this. So I would be very interested in seeing your repo when you've                          |
| 39:05      | got a bit more in there, TJ.                                                                                  |
| 39:06      | Yeah, I've also got another one, you know, that I've got a magic trackpad and a magic                         |
| 39:12      | keyboard. And the wonderful thing about them is they hardly ever need to be plugged in                        |
| 39:17      | and recharged. But it always seems to catch me completely unaware. And so I wrote another                     |
| 39:23      | one that will, you know, put up my, if the battery level is under 20%, it will put it                         |
| 39:30      | in the menu bar. But usually it's not under 20%. So nothing's in the menu bar. So it's                        |
| 39:35      | not like I have to look at something all the time. It's just there when I need to do something                |
| 39:40      | about it.                                                                                                     |
| 39:41      | I am absolutely downloading that one, TJ.                                                                     |
| 39:43      | Yeah, yeah, I need that because my trackpad, I mean, I have just moved to be fair, but                        |
| 39:47      | my trackpad is completely dead. And I've been struggling to find a charging cable for it.                     |
| 39:52      | So even though I should probably just go plug it in during the day when my phone is not                       |
| 39:55      | in charge, so I should do that tomorrow. But yeah, I'm going to need that place.                              |
| 40:00      | I am writing myself another note.                                                                             |
| 40:02      | I was spoiled by the, because for years I used just the Apple keyboard and trackpad                           |
| 40:06      | and mouse. And then I went to the Logitech mouse, which also runs forever on a charge.                        |
| 40:14      | But then I went to the Logitech craft keyboard and that sucker needs to get charged like                      |
| 40:18      | once a week, you know, it's got a backlight, it's got three Bluetooth radios. And there's                     |
| 40:24      | a whole lot of reasons I like using it. One thing I don't like about it is I have to charge                   |
| 40:27      | it every week. But the trackpad is the only Apple device left. And you're exactly right.                      |
| 40:34      | It seems like it waits till the last minute and says, Oh, by the way, I'm about to die.                       |
| 40:37      | Well, well, at least the trackpad, you know, you can use while it's charging, unlike that                     |
| 40:41      | mouse.                                                                                                        |
| 40:42      | Yeah, the mouse that just has to lie on its back upside down towards us.                                      |
| 40:47      | It still looks like a joke. I cannot believe that really shipped. I mean, if somebody had                     |
| 40:51      | put that on a on a rumor site, you would have been like, come on, no one will ever do it.                     |
| 40:57      | The joke is that's the stuff we would make fun of Microsoft for. And right, you know,                         |
| 41:02      | yes.                                                                                                          |
| 41:03      | What does Marco call it? I think like harpooning a turtle or something.                                       |
| 41:06      | Whereas the Logitech mouse, which I'm using right now charges by USB C and just like the                      |
| 41:15      | trackpad and even the keyboard, you can actually use it while it's charging because they put                  |
| 41:19      | the charger on the front. So revolutionary idea, revolutionary idea. Maybe maybe Apple                        |
| 41:27      | should talk to Logitech at some point.                                                                        |
| 41:31      | This episode of Automators is brought to you by ExpressVPN. In the real world, if you're                      |
| 41:35      | looking for privacy, you close the door. But online, we leave doors open everywhere we                        |
| 41:39      | go. Using the internet without using ExpressVPN is like never closing the doors behind you.                   |
| 41:45      | Your internet service provider like Comcast or Verizon knows every single website you                         |
| 41:49      | visit. And if they want to, they can sell this information to ad companies and tech giants.                   |
| 41:54      | ExpressVPN creates a secure encrypted tunnel between your device and the internet so your                     |
| 41:59      | online activity can't be seen by anyone.                                                                      |
| 42:02      | I've been using ExpressVPN for over a year now. And it doesn't just give me peace of                          |
| 42:07      | mind. It lets me make sure that I'm in the right country to access things like internet                       |
| 42:12      | banking because apparently it's a security issue if I'm in the wrong country.                                 |
| 42:18      | You should use ExpressVPN if you're worried about being tracked using public and secured                      |
| 42:22      | Wi-Fi. Or indeed, if you just want to make sure that you're safe when you're browsing.                        |
| 42:28      | ExpressVPN works on everything. Phones, laptops, even routers. So everyone who shares your                    |
| 42:33      | Wi-Fi can still be protected even if they don't have ExpressVPN themselves. And the                           |
| 42:37      | best part is, using ExpressVPN is as easy as closing a door. You just fire up the app,                        |
| 42:43      | click one button, and you're protected. ExpressVPN is the world's number one VPN client                       |
| 42:48      | rated by CNET, Wired, The Verge, and countless others. If, like me, your online activity                      |
| 42:54      | is your business, secure yourself by visiting expressvpn.com.automators today. Go to expressvpn.com.automators |
| 43:06      | and you can get an extra three months free. That's expressvpn.com.automators.                                 |
| 43:12      | All right, thanks to ExpressVPN for their support of this show and all of relay.fm.                          |
| 43:17      | So, TJ, I first reached out about getting you on the show because I was playing with                          |
| 43:23      | a macro that you posted for a series of macros, actually, that you posted, with calendar integration          |
| 43:30      | and [[Stream Deck]] integration and awesome notary, I think is the correct phrase, which shows                    |
| 43:37      | your calendar events on your [[Stream Deck]] so that you can actually see what's happening                        |
| 43:42      | and what's going to happen next and how's your day going. And I love this. How did you                        |
| 43:47      | come up with this? Where did you get started?                                                                 |
| 43:49      | Oh, well, again, COVID. There have been so many meetings and among so many Zoom meetings                      |
| 43:55      | and things like that. And not only is it hard to keep track of what day it is, it was sort                    |
| 44:00      | of like, am I done? Am I done for the day was really the thing that I wanted to be                            |
| 44:05      | able to see. And you know, I had no idea what a [[Stream Deck]] was until I saw in the release                    |
| 44:11      | notes for [[Keyboard Maestro]] now support [[Stream Deck]]. And I'm like, oh, what's a [[Stream Deck]]?                   |
| 44:16      | And I looked at it and I'm like, oh, okay, it's a thing for streamers. I don't need that.                     |
| 44:21      | And then I looked like, oh, what can [[Keyboard Maestro]] do with it? Oh, it can output any                       |
| 44:25      | text from any macro into a button. And the next thing I knew I had ordered a 32 button                        |
| 44:31      | or however many buttons this thing is. And one of the things I wanted to do was reminders                     |
| 44:39      | are great and everything, but I just want to be able to glance down and see something.                        |
| 44:44      | And so right now I glance down and it tells me I have two meetings left. The next one's                       |
| 44:49      | at 530 and that's three hours and 13 minutes away. Now it doesn't tell me what the meeting                    |
| 44:54      | is, but now that I've got that prompt, I can think, oh, right, I know what that is. And                       |
| 44:58      | then after my last meeting of the day, it just shows the little smiley, what is it,                           |
| 45:05      | fantastic pal instead of fantastic Cal, which I love. It just shows that little smiley icon.                  |
| 45:11      | I've told those guys so many times that should just be your icon. What are you doing? That's                  |
| 45:15      | so cute. Yeah. And they actually, I posted this on                                                            |
| 45:18      | Twitter and they actually sent me like a nice high res, you know, with a transparent background               |
| 45:22      | that I could use for it. And it was really the hardest part was figuring out how to get                       |
| 45:29      | my, you know, how do you automate your calendar in this way? Well, there's this old, old,                     |
| 45:35      | I mean, I think like 2006 was the original version of this command line tool called iCalBuddy.                |
| 45:43      | And of course it's not even called iCal anymore, right? But it still works. And it wasn't working             |
| 45:49      | with [[Keyboard Maestro]], it wouldn't work with text bar, and it wouldn't work with launch                       |
| 45:55      | d, launch statements. And I just could not figure it out, could not figure it out. And                        |
| 46:00      | I asked each of the developers and the developer from the developer who makes launch control,                 |
| 46:07      | I think his name is Robbie. Oh gosh, he's such a great guy. He actually looked into                           |
| 46:12      | the source code, found a bug, patched the bug and sent me an updated version of this                          |
| 46:18      | command that I could use with launch. And then it would work with [[Keyboard Maestro]] as                         |
| 46:23      | well. And all it does is it outputs a list of your calendar items. And so a little bit                        |
| 46:29      | of scripting later, I had it count, you know, it's just doing basic things like it's counting                 |
| 46:33      | lines. And it's again, using military time 24 hour time to compare the current time to                        |
| 46:42      | when the meeting is. But the really cool part is I think this is the part that the kind                       |
| 46:46      | of sets it apart for me is when you get 30 minutes before a meeting, the button can change                    |
| 46:52      | colour. And usually all my icons are, you know, have a black background, but then it has,                      |
| 46:58      | I think it starts out blue, and then it goes to yellow about 15 minutes before the meeting,                   |
| 47:03      | and then about five minutes before the meeting, it goes red. And that to me, I mean, I'm just                 |
| 47:07      | always going to see that. I don't know where you all keep your [[Stream Deck]], but for me,                       |
| 47:11      | it's right above my keyboard. Like it's an extra function row. So I'm always going to                         |
| 47:17      | see something that's changing colour in that line of sight. And that was really the first                      |
| 47:23      | time I had really totally geeked out on the [[Stream Deck]] and [[Keyboard Maestro]]. And it's                        |
| 47:27      | probably still the most complicated thing I've done with it. But I use it every single                        |
| 47:31      | day and absolutely love, you know, just having that there. And I just know that that's my                     |
| 47:36      | meeting spot. So when I glance down, I can always know.                                                       |
| 47:39      | I just remember reading that you were buying a [[Stream Deck]] thinking this is going to be                       |
| 47:44      | so good for us because TJ is going to automate the heck out of this thing. So can you walk                    |
| 47:49      | us through the steps though? And I've described what it does, but for people who want to try                  |
| 47:53      | and build this, and we've got links in the show notes, so you can download a bunch of                         |
| 47:56      | these pieces, but kind of give us a little bit more nitty gritty here where the automators,                   |
| 48:01      | we can go crazy.                                                                                              |
| 48:02      | Sure. Sure. Well, I mean, again, [[Keyboard Maestro]] is just such a smart tool. So you                           |
| 48:09      | can make a macro that can take input. So when you call a [[Keyboard Maestro]] macro from a script,                |
| 48:21      | you can give it like an argument. So the argument could be blue, green, you know, red or whatever,            |
| 48:27      | and then you can use those in the macro. And so what my script does is it just calls this                     |
| 48:33      | macro and gives it a colour. And then the macro itself can set the background colour. So I                      |
| 48:40      | didn't have to write like a bunch of different things. I wrote one thing with several different               |
| 48:45      | if else statements. And then in [[Keyboard Maestro]], it's very simple to go in and see what it                   |
| 48:53      | can do. I think they're like three or four actions. It can set the colour or it can add                        |
| 49:00      | an image, basically a background image. And I've just got some solid colour images that                        |
| 49:06      | I drag from Finder onto there. It can set the text of the button. And it can even flash                       |
| 49:13      | a little alert symbol, which is a little like triangle and an exclamation point thing. And                    |
| 49:18      | I just dragged those in. So, you know, when again, I was just mentioning about the track                      |
| 49:24      | pad and keyboard batteries, I've got battery levels on those. And when they hit a certain                     |
| 49:30      | level, the script just calls a different macro. But if you wanted to do this, for example,                    |
| 49:35      | you could use a statement that, for example, maybe you want to write one for like how much                    |
| 49:42      | time is left in my workday. And so you have a [[Keyboard Maestro]] macro that runs every minute                   |
| 49:48      | or so and checks the time versus the time that you're supposed to leave work or be done                       |
| 49:55      | with work if you're working from home and have it set to, you know, have it set a button                      |
| 50:01      | to a different colour and say, you know, one hour left, or 30 minutes left. It doesn't                         |
| 50:05      | have to be like 17 and a half minutes left. Yeah. You know, what was that? Is it fuzzy                        |
| 50:09      | clock? Wasn't that usually a thing where it'd be like, I would tell you about what time                       |
| 50:13      | it was. Yeah. I think those kinds of hints, you know, can be just a nice little visual                        |
| 50:19      | reminder of, hey, the time is passing, the day is passing, and things like that, where,                       |
| 50:27      | you know, you can control these things. And it really is, I don't know how good of a job                      |
| 50:33      | I've done at describing it, but with an if-else in [[Keyboard Maestro]], which is just something                  |
| 50:39      | you drag over, and then you just, you know, type in or click on the new action and just                       |
| 50:44      | type in [[Stream Deck]] and just see what it does. You can't hurt anything. It's not going                        |
| 50:48      | to break it. Yeah. Well, it's really impressive. And just it was very creative. I thought just                |
| 50:53      | to even come up with the idea and never would have occurred to me to turn [[Stream Deck]] buttons                 |
| 50:59      | into a status panel for your calendar. I mean, what a great idea. Well, I'm really glad that                  |
| 51:05      | other people have used it. I mean, that to me is the biggest thing. And one of the reasons                    |
| 51:08      | I like sharing it is like, if I spend, well, let's say two hours, I probably spent more                       |
| 51:13      | than two hours on it, but let's say I spent two hours on it and I use it. Well, that's                        |
| 51:18      | one thing, but if I can get 10 other people to use it, then that, you know, two hours                         |
| 51:22      | has benefited, you know, so many more people. Exactly. Yes. And it's one of these things.                     |
| 51:27      | I saw it and I downloaded it and went, oh, and it immediately gave me ideas for other                         |
| 51:32      | things that I could use. Somebody in the Mac Power Users for a while ago posted a macro for getting              |
| 51:37      | your Zoom microphone status. I'm putting that in a [[Keyboard Maestro]] or in a [[Stream Deck]]                       |
| 51:45      | button. And so I've done a little bit of modifications there and I've now got it. So if it's running,         |
| 51:51      | then the macro runs every 30 seconds. But when the macro, when Zoom quits or launches,                        |
| 51:56      | then it runs the macro too. And it also sets it to the Zoom icon if the Zoom isn't running                    |
| 52:02      | because, you know, then I can just launch Zoom from a button. And you gave me the idea                        |
| 52:06      | of how to enhance that a little bit to modify it. And it's great to be able to, you know,                     |
| 52:12      | start it with something because this way that you broke it down for me at least made a lot                    |
| 52:16      | of sense. And it's all documented on GitHub, which we've got the link to in the show notes.                   |
| 52:21      | Well, that's awesome. Because again, I mean, sort of like the, you know, the few people                       |
| 52:25      | who write AppleScripts, I realised that not a lot of people may be able to write the shell                   |
| 52:30      | scripts. But I've always been somebody who I learned very early that if I did not comment                     |
| 52:35      | on things, I would come back and have no idea what it did or why I did something a certain                    |
| 52:40      | way. And so I've, I sort of see comments as a teaching tool of, you know, not only for                        |
| 52:47      | other people, but for me and, you know, the proverbial me in six months who comes back                        |
| 52:51      | to this and goes, why did I do that this way? And, you know, there may be a very good reason                  |
| 52:55      | for it that, you know, I try to go, oh, I've got a much better idea now. And it turns out                     |
| 53:00      | I tried that and it didn't work. So yeah, I mean, I think that the comments on it and                         |
| 53:04      | seeing other people's examples, I think examples and all these sorts of things are, are crucial               |
| 53:11      | because again, somebody's going to have a better idea or at least a different idea that                       |
| 53:15      | you might not have had.                                                                                       |
| 53:16      | That's the thing, you know, once you've got somewhere to get started with this stuff,                         |
| 53:21      | then it's so easy to go in and have fun and get nerdy with it. Or even if you decide that                     |
| 53:25      | you don't want to have fun and get nerdy with it, you just want to leave it as it is, you                     |
| 53:28      | know, that's fine, you know, there's, there's plenty of choices.                                              |
| 53:31      | Well, I, I think it's brilliant. I love the way you documented it. So anybody that's listening                |
| 53:36      | to the automators that owns a [[Stream Deck]], go check this out. Even if you're not a shell                      |
| 53:42      | scripter, TJ has done the hard lifting for you. This is, this is so fun to set this up.                       |
| 53:48      | And I, I agree with Rose. This is a TJ at his best right here doing stuff like this.                          |
| 53:54      | But you know what, you also on your site have pictures of your [[Stream Deck]] buttons and we                     |
| 54:01      | need to talk brother. There's some stuff in here that I don't know what it is, but I want,                    |
| 54:05      | I want to know.                                                                                               |
| 54:06      | Oh, okay.                                                                                                     |
| 54:08      | So what else have you done with your [[Stream Deck]]? For instance, you've got one that looks                     |
| 54:11      | like the outline of a processor with the number 3% in it. What's that?                                        |
| 54:15      | I think is that the one that there is a just in the, if you go to your [[Stream Deck]] and                        |
| 54:21      | you click on the more actions, there is one in there that will have a CPU.                                    |
| 54:26      | Yes. So you use that one. Yeah, I've never, I've never enabled that one, but I've downloaded                  |
| 54:33      | several of those, those more action things. In fact, the [[Keyboard Maestro]] action is a                         |
| 54:38      | quote unquote more action that you need to install on your, your [[Stream Deck]]. I find                          |
| 54:44      | the timer ones are very useful. Those were built in like I have a five minute timer and                       |
| 54:50      | it rings a bell on my Mac, you know, it just starts counting down from five. I have another                   |
| 54:53      | one for 45 minutes, which is kind of my Pomodoro button. And the, you know, there's a, there's                |
| 55:00      | a couple in here that you don't need to do any program yourself. People have already                          |
| 55:03      | written it for you.                                                                                           |
| 55:04      | We should also mention a KM link, which is an alternate way to use [[Keyboard Maestro]].                          |
| 55:12      | Now what [[Keyboard Maestro]] has built into it is sort of super powerful, but it's also                          |
| 55:17      | very specific. You have to tell it exactly which button you're using this for. What KM                        |
| 55:23      | link will do is basically just link a [[Keyboard Maestro]] macro to a button and then you can                     |
| 55:30      | just drag that button around. Now it can't be one of these interactive ones that sort                         |
| 55:34      | of send sending information back and forth, but it can be one that will just like trigger                     |
| 55:39      | a macro.                                                                                                      |
| 55:40      | Yeah.                                                                                                         |
| 55:41      | And so that's a very, I use both. I mean, there's no reason not to have both of them.                         |
| 55:46      | And again, just to give, you know, some idea on this, again, I mentioned the, the podcast,                    |
| 55:53      | you know, I've got a profile that has just for when I'm podcasting. It's got a button                         |
| 56:01      | that I can use to toggle my microphone mute. It's got a thing that will open, it will open                    |
| 56:08      | the script for the current day, move it to the right hand of the screen and make it like                      |
| 56:14      | 80% and then it moves [[Audio Hijack]] to the bottom 20%. So again, that was one of these                         |
| 56:20      | things I had to do every single day. And again, those are just KM link macros because they                    |
| 56:27      | don't have to communicate back and forth.                                                                     |
| 56:29      | Yeah, sure. It's a trigger.                                                                                   |
| 56:31      | Yes, exactly.                                                                                                 |
| 56:32      | Yeah. Yeah. And that's just another example of window management through [[Keyboard Maestro]].                    |
| 56:37      | Yeah, exactly. Yep.                                                                                           |
| 56:39      | Yeah. There's also an analog clock you can download, which I think is kind of clever                          |
| 56:44      | having a little analog clock right on your [[Stream Deck]]. And that's a no brainer for me                        |
| 56:50      | putting that one in. There's a random number generator, like I think they sell it as a                        |
| 56:57      | six-sided dice. I configured it as a two-sided dice. So it was like a coin. And I've had                      |
| 57:03      | that on there for two months and I've not used it once. So that's going to go away.                           |
| 57:07      | I don't know. I was just thinking it'd be fun to be on the phone with a client and say,                       |
| 57:10      | should we, shouldn't we just flip a coin, you know? But I don't think that's actually                         |
| 57:16      | going to happen.                                                                                              |
| 57:17      | No, no. No, I do have the, I do have a clock and it is, I'm actually using a different                        |
| 57:24      | one that's called Bar Raider, B-A-R, Raider, like Raider's Lost Ark. And that will give                       |
| 57:31      | you a world time as well. So you can put different times in different cities if you                           |
| 57:36      | want and as somebody who podcasts with at least one person who lives in a different                           |
| 57:41      | time zone. Actually, at least two I can think of. I know Steven and Rose are both out of                      |
| 57:47      | your time zone. You could use that there.                                                                     |
| 57:49      | Where did you get Bar Raider? I've not heard of that one before. Is that on the list from                     |
| 57:54      | a [[Stream Deck]] or is that outside?                                                                             |
| 57:57      | I think I may have Googled that, but at Bar Raider.com is the...                                              |
| 58:01      | Got it. Link is in the show notes.                                                                            |
| 58:04      | Awesome.                                                                                                      |
| 58:05      | Cool. Yeah, I have been looking at, I've been corresponding, because there's a toggle one                     |
| 58:10      | too that [[Stream Deck]] has on their more actions list, but the guy who put it together did                      |
| 58:16      | not address tags. And like for certain of my toggle timers, I tag them as moving the                          |
| 58:24      | needle. They're like things that are important to me. And I need, if I'm going to automate                    |
| 58:28      | a toggle timer, it needs to have a tag ability, but there's activity right now going on where                 |
| 58:34      | people are dipping into that code and adding tags. So I'm hoping that'll be there soon.                       |
| 58:39      | Yeah, tags I find are quite important for me. And I've been experimenting with using                          |
| 58:46      | [[Keyboard Maestro]] and the toggle API to start things. And just like I do with shortcuts                        |
| 58:51      | on iOS, when I open an application, it would start a timer. I'm doing exactly the same                        |
| 58:56      | thing on the Mac with [[Keyboard Maestro]]. Whenever I activate zoom, then check my calendar to                   |
| 59:02      | see what kind of event this is and go ahead and look that data for me, which is great.                        |
| 59:07      | Yeah. And that type of automation that Rose is working on with toggle to me is like an                        |
| 59:13      | open Christmas present. It's just sitting there. I know she's working on it. I'm going                        |
| 59:17      | to let her finish it. And then one day I'm just going to open it up and use it. And that's                    |
| 59:21      | just going to be it. So stay tuned, Automators listeners. I don't think that is that far                      |
| 59:28      | away. Once we get Rose moved in.                                                                              |
| 59:30      | Yeah, exactly. Do you all use multiple profiles on your [[Stream Deck]]? Or do you just basically                 |
| 59:37      | have one?                                                                                                     |
| 59:38      | I've been using the one profile, but I do use folders on the [[Stream Deck]] where I've                           |
| 59:43      | got things that I can dip into. Because I have so many buttons, I'm not sure I need                           |
| 59:48      | multiple profiles, but explain how that works for people who especially have the smaller                      |
| 59:52      | units.                                                                                                        |
| 59:53      | Right. Well, I think that that may have been where it started for. And I was the same way.                    |
| 59:58      | I was just sort of like, oh, one screen doll I need, but there is an option. One of the                       |
| 01:00:02   | built in features of the [[Stream Deck]] is to sort of switch profiles. And you can do that                       |
| 01:00:08   | either through the app on your Mac or on a button. And so the bottom right button on                          |
| 01:00:13   | mine is a button that called switch profiles. And, you know, once I got out of that idea                      |
| 01:00:20   | of just having one, I kind of, I think I've got like five or six now. I've got one that                       |
| 01:00:26   | just does lighting. It's called hue light up my life.                                                         |
| 01:00:31   | Oh, that's sweet.                                                                                             |
| 01:00:33   | Pause for a laugh.                                                                                            |
| 01:00:34   | There you go.                                                                                                 |
| 01:00:35   | So you've got all the lights in your room. And because that there is a hue button that                        |
| 01:00:39   | you can install and control your individual light units.                                                      |
| 01:00:43   | Yes. And I've got one of the, actually it's not in a hue, but I put it there anyway. I've                     |
| 01:00:47   | got one of those Elgato key lights and I've got its controls in there. And then I've got                      |
| 01:00:55   | I've got a profile that's just for zoom because again, I run a lot of zoom meetings and rather                |
| 01:01:02   | than have to find the menu button, you know, the item in the menus, I've got one that will                    |
| 01:01:09   | mute everybody or unmute people or start my video or I think my favourite one there is                         |
| 01:01:15   | when I start a screen share, it will turn off my mic and my camera and then pull up                           |
| 01:01:21   | the screen sharing interface for zoom. Because usually when I'm doing that, it's because                      |
| 01:01:26   | it's a video or something that I'm showing and I don't want my audio to overlap with                          |
| 01:01:32   | that. And then when I'm done, I hit the stop share button and it turns my video back on                       |
| 01:01:37   | my audio back on and it stops the sharing.                                                                    |
| 01:01:39   | All right. So, so let me just interrupt there a minute. So that's great. But how, how are                     |
| 01:01:43   | you doing that in terms of automating the zoom? And is that interface automation or what                      |
| 01:01:48   | are you doing to, for instance, mute everybody? Is there a command for that or it's a keyboard                |
| 01:01:54   | my show that, that hits the, that brings the zoom application to the forefront. And then                      |
| 01:02:00   | it hits the appropriate menu item in the, there may even be a keyboard shortcut for                           |
| 01:02:06   | it, but I use the menu.                                                                                       |
| 01:02:07   | Yeah. Because with keyboard my show, you can script anything in the menu bar and you're                       |
| 01:02:11   | just menu bar automation and then attaching that to a button. And I would presume you're                      |
| 01:02:17   | probably using the keyboard my show interface to the [[Stream Deck]] or using that other app                      |
| 01:02:22   | you mentioned a minute ago where you can move it around. That might make more sense.                          |
| 01:02:25   | No, I'm using key handling for all of these because again, I don't need them to be, you                       |
| 01:02:30   | know, it doesn't matter what, what button they're at and I want to be able to just move them                  |
| 01:02:34   | around.                                                                                                       |
| 01:02:35   | Well, darn you TJ. Now I got to redo my whole [[Stream Deck]]. That makes total sense to me.                      |
| 01:02:42   | Well, like, like open my email application. I could have email buttons to move emails                         |
| 01:02:47   | to all the various folders.                                                                                   |
| 01:02:50   | Folders.                                                                                                      |
| 01:02:51   | We got to stop recording now guys. I got to go re-program my [[Stream Deck]].                                     |
| 01:02:55   | Well, the good news is, is I was playing with this a while ago and I love it because I have                   |
| 01:03:00   | it activate a different profile when I'm opening OmniFocus for example, and then I have buttons               |
| 01:03:04   | for different perspectives because I only have a limited number of perspectives in my                         |
| 01:03:07   | OmniFocus sidebar. And then I just have different ones appear. And especially with moving, I've               |
| 01:03:12   | had multiple perspectives related to moving, which is, it sounds very nerdy and perhaps                       |
| 01:03:18   | slightly over the top, but it's really helped me, you know, stay on top of things. And you                    |
| 01:03:22   | know, I've been very happy with the fact that I've only got the medium sized [[Stream Deck]].                     |
| 01:03:27   | So I've got 15 buttons online, which is not as many, but with the ability to switch profiles                  |
| 01:03:33   | and automatically switch profiles, I'm pretty happy.                                                          |
| 01:03:37   | Yeah. I'm just thinking [[ScreenFlow]] needs its own deck and, you know, why not [[Safari]]?                          |
| 01:03:43   | You know, all right. So Rose, I'm so glad you guys figured this out for me. This is                           |
| 01:03:47   | going to be great. Rose took it a step further. She's automating switching the profile based                  |
| 01:03:52   | on the app she's in. So can you address the [[Stream Deck]] to change to a specific profile                       |
| 01:03:59   | via scripting?                                                                                                |
| 01:04:00   | I want to say, I did this inside the [[Stream Deck]] application. So inside the [[Stream Deck]]                       |
| 01:04:05   | preferences, there's profiles, and then you create your different profiles. And then if                       |
| 01:04:09   | you click on it, then you can assign it to an application. So I've got an OmniFocus                           |
| 01:04:13   | profile assigned to OmniFocus.                                                                                |
| 01:04:14   | So as soon as OmniFocus is active, the whole [[Stream Deck]] lights up for OmniFocus.                             |
| 01:04:18   | Yeah. It switches over.                                                                                       |
| 01:04:20   | Okay. I'm in. I'm in.                                                                                         |
| 01:04:23   | Well I've got another little power tip for you. If you've got a bunch of these and they                       |
| 01:04:28   | aren't necessarily tied to one application, what I've done is I've made, because like                         |
| 01:04:34   | I said, I've gone a little crazy with these, I now have a profile that is just a bunch                        |
| 01:04:41   | of buttons that go to profiles.                                                                               |
| 01:04:45   | A profile button. I knew that was where you're going. I didn't interrupt you. I'm like, this                  |
| 01:04:49   | guy's made a profile for profiles.                                                                            |
| 01:04:51   | Yeah. So the bottom right button on my [[Stream Deck]] is it's called switch. And then when                       |
| 01:04:57   | I hit it, it shows me what my different profiles are. And I can jump right to one. And I just                 |
| 01:05:02   | use that bottom right button on every single profile. We'll bring that up.                                    |
| 01:05:06   | Now why would you do that as a separate profile versus just a folder full of profile buttons?                 |
| 01:05:11   | I could have done that too, but this, I just, because I could, I could go to this profile                     |
| 01:05:16   | from, from anywhere. I just, from any of my, but yeah, folder, I cut it down folder as                        |
| 01:05:22   | well.                                                                                                         |
| 01:05:23   | Okay. So make sure I wasn't missing anything. You also have a volume button on your basic                     |
| 01:05:29   | [[Stream Deck]] profile. So with the number 19 under it, was that, are you able to set your,                      |
| 01:05:34   | you're just setting your input volume or your output volume? What are you doing?                              |
| 01:05:38   | That's just a quick, it will, it will mute if I hit that button. And if it is muted,                          |
| 01:05:43   | it will show me that icon will turn red.                                                                      |
| 01:05:46   | Yeah.                                                                                                         |
| 01:05:47   | To show me that my output is muted. Because it's embarrassing when you try to figure out                      |
| 01:05:52   | why your computer isn't playing any sound. And then you figure out that it's just because                     |
| 01:05:55   | it's muted. What that allowed me to do was I could take it off my menu bar. This is not                       |
| 01:06:01   | only easier to see, but, you know, I can just toggle it right there rather than having a                      |
| 01:06:06   | mouse up to the menu bar.                                                                                     |
| 01:06:10   | And I've got a keyboard, at least one of the keyboards that I use doesn't have the Mac                        |
| 01:06:18   | little logos on the, on the keys, on the function keys as to which, you know, what does which                 |
| 01:06:22   | thing. Yeah. And now that I've got the, my MacBook Pro, which has the touch bar. Again,                       |
| 01:06:29   | I don't necessarily have immediate access to that. I just like having a button.                               |
| 01:06:34   | No, I, I do the same thing for the same reason. Cause like the phone will ring and I've got                   |
| 01:06:38   | music playing and I feel like the fire drill just went off and, you know, having a place                      |
| 01:06:42   | where you know, you can press a button and have that taken care of is going to solve                          |
| 01:06:47   | it for you.                                                                                                   |
| 01:06:48   | See, I just tapped the top of my HomePod and it pauses the music and I've been using                         |
| 01:06:52   | the HomePod play everywhere. So you can just say, you know, magic words, play music everywhere               |
| 01:06:58   | and it will play on all of the [[AirPlay]] to enable speakers in your home, which includes                        |
| 01:07:01   | the Sonos one in my bedroom, which I'm very excited about. But if I just tap one, I've                        |
| 01:07:06   | got one here on my desk. And if I just tap it, then it pauses. So I don't necessarily                         |
| 01:07:12   | need a button for that, but it's pretty cool.                                                                 |
| 01:07:15   | I was texting Rose just a few days ago. So she's living alone now. She's just got her                         |
| 01:07:20   | own place. Congratulations to Rosemary. You are a homeowner and you're alone. And I said,                     |
| 01:07:27   | you are going to go automation crazy. Like I have my family holding me back on automation.                    |
| 01:07:32   | Maybe, maybe for the good, right? You know what I mean? If I lived alone, I would be                          |
| 01:07:38   | very sad because I love my family very much, but I also, my automation routine would be                       |
| 01:07:43   | completely insane. Anyone who visited my house would just think I would gone off the deep                     |
| 01:07:48   | end. So one of my goals for Rose is not just to hold her in the realm of sanity with automation,              |
| 01:07:54   | but I don't know, Rose, it's going to be hard.                                                                |
| 01:07:57   | Well, I have to remember in my case that I am going to have guests, you know, at some                         |
| 01:08:01   | point, you know, presumably after the end of a global pandemic, but I plan to have guests                     |
| 01:08:05   | at some point. So I need to make it so that people can, you know, do things like turn on                      |
| 01:08:10   | the light without having to, you know, talk to an assistant that they don't know exist                        |
| 01:08:14   | because it's kind of hidden or, you know, get out their phone and ask to join, you know,                      |
| 01:08:19   | the network and get on things. So I do have a QR code that you can scan to get onto the                       |
| 01:08:23   | Wi-Fi, which, you know, is a start. So I've got some switchplate covers arriving that                         |
| 01:08:30   | hue remotes just sort of magnetise into so that then the real switches are behind it                          |
| 01:08:35   | and then these hue switches or hue controllers go over the top. But it won't go too crazy.                    |
| 01:08:42   | And now on my [[Stream Deck]], because TJ reminded me, and I hadn't set it up just yet, I have                    |
| 01:08:46   | a button that controls the lights in my office so I can press it and turn off the lights                      |
| 01:08:50   | and press it and turn on the lights in my office because I've got Philips Hue lights                          |
| 01:08:54   | in here now. Yeah, the Philips Hue control with the                                                           |
| 01:08:56   | [[Stream Deck]] is like ridiculously easy. You download the button, you tell it what you                          |
| 01:09:00   | want, and it even changes the state, the colour of the button based on the state. So that's                    |
| 01:09:06   | almost not automation, but it's, if you've got a [[Stream Deck]], it's a great bonus feature.                     |
| 01:09:12   | Yeah, definitely. This episode of The Automators is brought                                                   |
| 01:09:17   | to you by Mint Mobile. Use Mint Mobile to cut your wireless bill to $15 a month. Mint                         |
| 01:09:24   | Mobile can cut your wireless bill to $15 a month with their futuristic approach to wireless.                  |
| 01:09:30   | I've got a Mint Mobile card and I've loaded it into an Android phone. That's right. I                         |
| 01:09:34   | wanted to see how the other side lived. But using the Mint Mobile card makes this a very                      |
| 01:09:39   | affordable experience for me. It's super easy to activate. Just pop it in and push the button.                |
| 01:09:45   | And the network coverage is great where I live, which is kind of near the hills and doesn't                   |
| 01:09:49   | have a reputation for a particularly good place to have cellular coverage. So I've been                       |
| 01:09:54   | really impressed with the coverage I've got with Mint Mobile. The difference in cost is                       |
| 01:09:59   | ridiculous. Mint Mobile is just $15 a month. I'm paying over $100 a month for my existing                     |
| 01:10:05   | cellular carrier. If you're still using one of the big wireless providers this year, have                     |
| 01:10:10   | you asked yourself what you're paying for? Between expensive retail stores, inflated                          |
| 01:10:15   | prices and hidden fees, there's ample opportunity to take advantage of paying customers like                  |
| 01:10:20   | you. This is where Mint Mobile comes in. Mint Mobile provides the same premium network coverage               |
| 01:10:26   | you're used to, but at a fraction of the cost because everything is online. Mint Mobile                       |
| 01:10:31   | saves on retail locations and overhead, then passes those savings directly to you, making                     |
| 01:10:36   | it easy to cut your wireless bill down to just $15 a month. Every plan comes with unlimited                   |
| 01:10:41   | nationwide talk and text, and you can stop paying for unlimited data you'll never use.                        |
| 01:10:47   | Just choose between plans with three, eight or 12 gigabytes of 4G LTE data. Use your own                      |
| 01:10:53   | phone with any Mint Mobile plan, and keep your same phone number along with all your                          |
| 01:10:57   | existing contacts. Just ditch your old wireless bill and start saving with Mint Mobile.                       |
| 01:11:03   | To get your new wireless plan for just $15 a month and get the plan shipped to your door                      |
| 01:11:07   | for free, go to mintmobile.com/automators. I've been super impressed with Mint Mobile                   |
| 01:11:13   | on my Android phone, and now I'm using it all the time. That's mintmobile.com/                          |
| 01:11:19   | automators. Go there now, cut your wireless bill to $15 a month at mintmobile.com/                      |
| 01:11:25   | automators. Our thanks to Mint Mobile for their support of the automators and all of Relay FM.                |
| 01:11:32   | So, TJ, while I was digging around in this fabulous calendar macro that you've got for                        |
| 01:11:38   | [[Stream Deck]], I noticed that there was a link that said Real AFM, a link to the Mac Paris                      |
| 01:11:43   | users forum. Then I clicked on it, and there's a 32-button [[Stream Deck]] with just all of the                   |
| 01:11:49   | Real AFM podcast logos on it. What happened here? What's going on?                                            |
| 01:11:53   | Yeah, this is one of these. Dave was just saying about going automation crazy. It wasn't too long             |
| 01:11:59   | after I got my [[Stream Deck]], and I was just playing around with it. I'm like, what can I do with it?           |
| 01:12:05   | I do have, again, I've got some automations built around Relay. I listen to, I think I listen                 |
| 01:12:11   | almost all the Relay shows. So all of a sudden, I was like, huh, I think there are just about as              |
| 01:12:18   | many Relay shows as I've got buttons on here. What if I made a button for each one of the shows?              |
| 01:12:24   | And then I added one for the live stream and another one for the calendar of when the live                    |
| 01:12:30   | streams are and things like that. And so next thing I knew, I had an entire profile of Relay                  |
| 01:12:37   | shows and things like that. And, you know, I have updated, I think I need to update it again,                 |
| 01:12:41   | but I did tell, I emailed [[Myke Hurley\|Mike]] and [[Stephen Hackett\|Stephen]] and said at some point that they weren't allowed to add            |
| 01:12:46   | any more shows because I was running out of buttons. So what are the buttons doing? Are                       |
| 01:12:52   | they just going to the website or are they downloading? Most of them just go, absolutely,                     |
| 01:12:56   | just go to the website. I did have one. I'm not even sure it was on that profile that would                   |
| 01:13:01   | launch [[Audio Hijack]] and hijack the live stream if I wanted to. But I think, yeah,                             |
| 01:13:08   | I think all these were just website links. And it was just absolutely an exercise in                          |
| 01:13:15   | ridiculousness. But it was fun to do and to see all the, you know, I took all the artwork for                 |
| 01:13:21   | the different shows and made those, you know, for the buttons and everything. And it just makes               |
| 01:13:27   | me smile when I look at it. So, yeah, I mean, I have buttons with my show artwork on them. And                |
| 01:13:33   | when I press them, it sets the whole thing up for recording, you know, and, you know, so it puts              |
| 01:13:38   | the windows where I want them. It opens the apps I use to do the recording. And I have an alternate           |
| 01:13:43   | button press that gets me to the advertising page. So if I need to record ads or whatever. So I've            |
| 01:13:48   | got like buttons for that, but I've never thought about buttons, doing buttons for everybody else             |
| 01:13:52   | at shows. I think I need to, you know, I need to get in there and do that. Why not? See, I have               |
| 01:13:58   | folders, which have the icons on them so that then I can jump in and I can say I'm recording or               |
| 01:14:03   | I'm doing prep or I just want to check the sponsors or whatever. And then, you know,                          |
| 01:14:07   | means that, you know, if I'm recording and I want to check the sponsors, I open the folder and then           |
| 01:14:11   | I press sponsors. But that's reasonable for me. I was just thinking too, we were talking about                |
| 01:14:16   | [[Bitbar]] a little earlier. I've got a [[Bitbar]] script that will tell me if Relay is broadcasting live.            |
| 01:14:23   | And it will also show me the most recent show that was posted to the site. And it even pulls out              |
| 01:14:29   | the little blurb paragraph. So sometimes if I do find a show that I'm not, you know, I don't listen           |
| 01:14:34   | to, I'll find an episode that looks interesting up there. And so yeah, you know, I think we really,           |
| 01:14:39   | [[Stephen Hackett\|Stephen]] now has a [[Stream Deck]]. I was very proud that David talked him into getting one, but I think            |
| 01:14:45   | [[Myke Hurley\|Myke]] needs one. And then he probably has one. I saw it on [[Instagram]] the other day. Yeah.                      |
| 01:14:50   | Oh, okay. I wonder if that's new. I haven't heard him talk about it.                                          |
| 01:14:52   | Yeah, I think it was because they're getting ready to do the podcast-a-thon. And the way I                    |
| 01:14:57   | sold [[Stephen Hackett\|Stephen]] on the [[Stream Deck]] was, look, if you're going to be doing a live video thing with                 |
| 01:15:01   | multiple cameras, the [[Stream Deck]], that's what it was. It's called [[Stream Deck]]. You know, that's              |
| 01:15:05   | what it was made for. Absolutely. Right out of the box, it supports a lot of the tools he's using.            |
| 01:15:11   | So he got it. But, you know, like a nerd, he's got into it now and he's doing a bunch of other                |
| 01:15:15   | stuff with it too. Controlling his lights. I'm going to send him a link to this show. I'm sure                |
| 01:15:19   | Steven will pick up a couple tips from this. It's really crazy. And if he's got one, I'm sure Mike's          |
| 01:15:25   | going to get one. Do you miss it? Like, I know that you've got your laptop connected to your big              |
| 01:15:30   | monitor, but presumably sometimes you're not connected to your monitor. You've got so much                    |
| 01:15:35   | of your workflow going through the [[Stream Deck]]. I would imagine that could become a little crippling          |
| 01:15:39   | to you. Yeah, you know, it is. You know, before March 15th, I didn't even have like a home office             |
| 01:15:47   | set up at all. And now six months later, I'm thinking, boy, it's going to be tough for me to                  |
| 01:15:53   | go back to my regular office because now I've got a standing desk and I've got my microphone set up           |
| 01:15:58   | and I've got my [[Stream Deck]] and I've got all this stuff. Like, it's a really nice setup. So                   |
| 01:16:03   | I do find that I miss it. I think the saving grace is that a lot of my [[Keyboard Maestro]],                      |
| 01:16:10   | a lot of my buttons do connect to [[Keyboard Maestro]] things. So I can obviously do that                         |
| 01:16:14   | another way. But again, I just, you know, it's, it's something, it's some kind of a combination               |
| 01:16:20   | for me of an extension of the menu bar for things that I can just glance at and get information.              |
| 01:16:27   | And an extension of the dock where like, I can launch applications or I can launch                            |
| 01:16:31   | shortcuts or things like that. And so yeah, I definitely do, you know, miss it when it's not                  |
| 01:16:37   | there. And for a while, I was bringing it back and forth between my, my church off the stream                 |
| 01:16:43   | deck back and forth. And that was, it does not fit in a laptop bag. You know, just get a second one           |
| 01:16:49   | for as much as you're doing with it. I'm serious. I'm seeing two choices here, either get a second            |
| 01:16:54   | [[Stream Deck]] or use something like [[BetterTouchTool\|BetterTouchTool's]] or program the touch bar so that it's useful             |
| 01:16:59   | to you. I have been considering getting a second one because I have two machines I record at and              |
| 01:17:03   | it's really frustrating for me to be here without it. But also at the same time, like, like TJ,               |
| 01:17:08   | I've scripted a lot of stuff to keyboard shortcuts on [[Keyboard Maestro]] because so much of this stuff          |
| 01:17:14   | for me starts in [[Keyboard Maestro]]. But, you know, I did that webinar last month on the idea of                |
| 01:17:21   | contextual computing. And I think this is something that really speaks to automators because in,              |
| 01:17:27   | you know, the big picture problem is when we go to use a computer, there is a, you know, there's,             |
| 01:17:33   | there's three steps. There's the intent, which is your brain says, I want to do X, then you have to           |
| 01:17:39   | go to the app. And then from within the app, there's the action, you know, so what you really want            |
| 01:17:44   | to go straight from intent to action, because that app step in the middle becomes a problem.                  |
| 01:17:50   | Quite often, like I want to go do something that involves the internet and you open [[Safari]] and                |
| 01:17:56   | suddenly you're looking at, you know, dogs surfing. And you're like, Oh, wait a second, I,                    |
| 01:18:02   | the intent never made it to the action or the same thing email, I want to go deal with customer               |
| 01:18:07   | support email and you go in and you get in the inbox and you're looking at Nigerian princes or                |
| 01:18:12   | whatever. But the, I think that, you know, using automation, it's very easy to cut that middle                |
| 01:18:19   | step out where you go to the app, but you go to the app at the exact website you want or the exact            |
| 01:18:24   | mailbox you want or whatever the exact thing you want is. And, you know, tying that to keyboard               |
| 01:18:30   | shortcuts really helps that I think the [[Stream Deck]] can serve the exact same purpose. Like the idea           |
| 01:18:37   | Rose has of saying, when I open OmniFocus, put all of the main buttons I want right here on my stream         |
| 01:18:43   | deck and then I don't have to think about it. And this is all automation that everybody listening             |
| 01:18:49   | to the show can do. It's not hard, you know, it's not writing your own shell script, but it can               |
| 01:18:55   | make such a difference in your day to day life. I would say you don't even need to write a shell              |
| 01:18:59   | script. Just download everything from TJ's GitHub. It's all there. Yeah. Well, and again, you know,           |
| 01:19:05   | I love my keyboard shortcuts, but you know, there are some commands that I don't use often enough             |
| 01:19:11   | in things like vision. And so I just made a button for it. And it's like, okay, you know,                     |
| 01:19:16   | now I don't have to remember that F6 in vision is, you know, clear all splits. Now I've got a button          |
| 01:19:22   | that's called clear all splits. And if I use it once a week, you know, I've still got it there.               |
| 01:19:27   | And it saves me the mental, you know, overhead of, you know, you're remembering, you know,                    |
| 01:19:32   | what menu it's under or any of these sorts of things. And yeah, that's stuff that absolutely                  |
| 01:19:36   | everybody can do because it's just a matter of, you know, you go and you find it one time and                 |
| 01:19:41   | you map it out. And then the next time it's just push a button. Well, because I have to                       |
| 01:19:46   | now go spend an hour fiddling with profiles because of you two answer a question for me.                      |
| 01:19:52   | If I have a app specific profile, let's say I have an OmniFocus profile, but then while I'm in                |
| 01:19:57   | OmniFocus, I want to do something else. Can you switch profiles even though it's, you know,                   |
| 01:20:02   | automatically switching? So, so it's just it triggers that profile when you trigger the app,                  |
| 01:20:07   | but it doesn't lock it there. No, not only that, when you when you switch away from                           |
| 01:20:11   | that profile, I think it will go back to your default profile. Yeah.                                          |
| 01:20:18   | In my experience, that's what happens. Yeah. Plus, you're going to have your little button                    |
| 01:20:22   | that or folder that lets you jump right to your other profiles.                                               |
| 01:20:26   | Well, that's all good stuff, guys. There is really, I mean, so many tools out there for                       |
| 01:20:32   | people that don't necessarily write shell scripts that can massively automate their                           |
| 01:20:37   | lives and their their computer usage. And I think that's, you know, really,                                   |
| 01:20:43   | if I if you gave me one automation tool, it would absolutely be keyboard in my show.                          |
| 01:20:49   | The difficulty is it's overwhelming at first, but it can do. It can do things like                            |
| 01:20:57   | TextExpander can do. It can do things like [[Hazel]] can do with like moving things and and it can just,         |
| 01:21:03   | but I think the thing that's best about it is that once you figure it out, it really can do                   |
| 01:21:09   | all of the things that you used to using your keyboard or most for for doing. And my two favourite             |
| 01:21:15   | forums and I say this, you know, I think that the Mac Power users and the automators, I think of              |
| 01:21:20   | those as one, but also the [[Keyboard Maestro]] forum is just a great forum. The developers there,                |
| 01:21:26   | there's a bunch of helpful folks on there. And so that's a great place to go, you know,                       |
| 01:21:31   | when you're starting out to go get help. Yeah, definitely. And I've got so many things from                   |
| 01:21:37   | there. And also just going there to see how other people do things so that you've got that basic              |
| 01:21:41   | idea of, you know, what you need to get started is great. Definitely recommend checking it that               |
| 01:21:47   | for amount. So now that you've wrecked my afternoon, I have one for you. Oh, we recently had a guest          |
| 01:21:53   | on Mac Power users who the guy who scored like frozen and long. Yeah. And he uses an app called               |
| 01:22:01   | MetaGrid with an iPad and MetaGrid will trigger [[Keyboard Maestro]] scripts. And it's a button                   |
| 01:22:08   | panel for your iPad that you could stick underneath your Mac. I think I've seen, I think somebody             |
| 01:22:13   | was talking about this on one again, one of those forums. Yeah, they're talking about in the forum.           |
| 01:22:19   | It's 30 bucks. It's expensive. But it literally lets you script. And I can't use it because                   |
| 01:22:26   | it it's breaking in iOS 14 right now. And I'm on beta because I'm recording screencasts for the               |
| 01:22:30   | paper of this field guide. And so I'm very disappointed. I can't use this app. But it's                       |
| 01:22:36   | like adding another whole pile of buttons to your to your computer. So I'm just going to drop that            |
| 01:22:42   | in your ear. And I'm going to check back with you in a couple of weeks. You've probably don't know            |
| 01:22:47   | how much how effective that was. Because when you're talking about, you know, bringing your                   |
| 01:22:51   | [[Stream Deck]] with you, I picked up a Mac, no, an iPad mini a couple of months ago on Woot.                     |
| 01:22:58   | And the mistake I made is that it's only a 16 gigabyte, which is so not enough space. I don't                 |
| 01:23:04   | know what I was thinking. So it'll hold the operating system. Yeah, I think there's I think                   |
| 01:23:08   | there's like nine gigs left when you're actually using it. But I could I could make that a portable           |
| 01:23:14   | [[Stream Deck]] with this application. So yeah, I think you may just have you may have cost me at                 |
| 01:23:22   | least some no, no, you're definitely gonna cost me some money too, aren't you? Because you said it            |
| 01:23:25   | was $30. So yeah, but there are people that swear by this app. I have not. I can't attest to it yet           |
| 01:23:33   | because they haven't updated it for us 14. And I've got a bunch of stuff going on where I've                  |
| 01:23:38   | got to be in these betas. But but man, just looking at the screenshots, I'm thinking this                     |
| 01:23:43   | combined with a [[Stream Deck]], you, you can have a lot of fun. It could feel like the Starship                  |
| 01:23:48   | Enterprise pretty soon sitting at your computer. Yeah, my mini is not running the beta of my 12.9             |
| 01:23:55   | iPad pro is and my phone is but the mini is not so she was it was meant to be apparently.                     |
| 01:24:01   | The other thing that I've tried with my mini because I also have an iPad mini, which I love                   |
| 01:24:06   | setting up next to my Mac because it is great for things like that. I've been playing with                    |
| 01:24:10   | [[MFC Deck]], which is a great app by [[Adam Tow]], who has been or Adam Tow, sorry, who's been on the               |
| 01:24:17   | show before he's created launch cuts and a few other really awesome tools. But the other thing                |
| 01:24:24   | I played with is [[Sal Soghoian\|Sal's]] accessibility keyboard hack, where you can create a custom accessibility               |
| 01:24:31   | keyboard and put it on your iPad either through Luna display or through sidecar. And then you                 |
| 01:24:37   | can just tap on the buttons. And I've got a Logitech crayon so I can tap on them if I'm using                 |
| 01:24:42   | sidecar. But most of the time I just use my Luna display actually. And that is pretty awesome.                |
| 01:24:48   | And both of those help me do a [[Stream Deck]] type thing. Of course, there is also a [[Stream Deck]]                 |
| 01:24:53   | for iOS app, but that's a monthly subscription of I think $10. It's not the cheapest. But if you              |
| 01:24:59   | want to try out the [[Stream Deck]] and you don't want to invest in the hardware, then, you know,                 |
| 01:25:02   | $10 is to try it for a month. If you've already got an iPad, that could be pretty good.                       |
| 01:25:06   | Yeah. The thing that sells MetaGrid for me is that it built-in support to trigger                             |
| 01:25:12   | [[Keyboard Maestro]] scripts. And it's like, okay, now I can do anything with this.                               |
| 01:25:16   | Yeah, I wasn't aware of that. So that's a definite awesome feature.                                           |
| 01:25:21   | Yeah, I'll be adding it to a future update of the [[Keyboard Maestro]] Field Guide,                               |
| 01:25:24   | but I've got to get it running right now. It pairs, it goes to the app loads,                                 |
| 01:25:30   | and then it goes to the pair and it just crashes immediately. I got an email to the developer.                |
| 01:25:34   | I'm sure they're aware of it. And, you know, I don't like to hassle developers on beta software               |
| 01:25:39   | crashes, but they should at least know about it, which they must because, I mean, it doesn't pair,            |
| 01:25:45   | so the app is not working. That's a very cool app that I will be trying out. My iPad mini,                    |
| 01:25:51   | just like TJ's, is not yet running the beta just because I need to take screenshots of stuff that's           |
| 01:25:56   | on iOS 13 every once in a while. So I thought, I'll leave this iPad on iOS 13. It's fine. And                 |
| 01:26:02   | now I think I know what I'm going to be doing with my weekend, which is good because, you know,               |
| 01:26:07   | who needs to unpack all these boxes? So this is a theme of the show. I have another thing that                |
| 01:26:13   | you guys can get into that I can't yet. And then in a couple of weeks, I'll just call one of you up           |
| 01:26:19   | and say, all right, what do I need to know? It sounds like you need an iPad mini, David,                      |
| 01:26:24   | is what it really sounds like. Man, you guys just want to spend my money, don't you?                          |
| 01:26:27   | Just a full set. You know, top to bottom, full set. Yeah.                                                     |
| 01:26:34   | I'm just sitting here with a little halo floating over my head. It may be created by                          |
| 01:26:38   | a Philips Hue bulb, but let's just gloss over that. It's fine.                                                 |
| 01:26:42   | Well, TJ, I am so happy we were able to get you on Automators. It's so fun having you on Mac                  |
| 01:26:47   | Power users. You always bring something to the table on Automators. I knew this was a show where              |
| 01:26:52   | we could go straight to like nerd level 10 and you delivered as always. So thanks so much for                 |
| 01:26:59   | giving us your time today. Oh, I'm thrilled to be here. I've really enjoyed the show and, you know,           |
| 01:27:05   | more automation is better automation. So glad there's another way for folks to learn how to do                |
| 01:27:10   | this and get over especially that initial hump for people of being intimidated by it. You know,               |
| 01:27:16   | it doesn't have to be a huge complicated thing. Start with something small. You do repetitively and,          |
| 01:27:22   | um, boy, you know, and then again, get great ideas from listening to the show.                                |
| 01:27:26   | All right. We have a bunch of links from the stuff we talked about, but where should I point                  |
| 01:27:30   | people at that want to learn more about TJ Luoma? Well, I actually have been, I'm notorious for               |
| 01:27:37   | moving my website around, but I did actually, I paid for WordPress for three years because I                  |
| 01:27:43   | figured that would at least keep me there for three years. So they can go to rhymeswithdiploma.com.           |
| 01:27:50   | And of course, that's how I've explained to people how to pronounce Luoma my whole life,                      |
| 01:27:54   | but you have to be able to spell rhymes with diploma. Or you can go to luo.ma, which is,                      |
| 01:28:02   | which will forward you there. That's my, that's my little vanity domain that I pay an outrageous              |
| 01:28:08   | amount of money for every five years. Well, we are going to send people to that place. We're                  |
| 01:28:13   | going to send them to your GitHub repository. Are you a Twitter guy? I don't know if you are or not.          |
| 01:28:18   | I am. Yeah. I'm still on, I'm still trying to keep Twitter is not, not entirely terrible.                     |
| 01:28:23   | I'm there as TJ at TJ Luoma and love to talk to folks there. So, and usually it's a good place,               |
| 01:28:30   | you know, if I'm working on something and I've posted something fun, I usually will link to it                |
| 01:28:35   | from Twitter as well. I don't post a lot anymore compared to what I used to you back                          |
| 01:28:39   | in the before times, but I'm still using it and still get enjoyment from it.                                  |
| 01:28:45   | Well, I can tell you, when we switched Mac Power User' forums off of Facebook over to our own forum,              |
| 01:28:51   | everybody told me how that was going to fail miserably, but it hasn't. And it's, it's, I,                     |
| 01:28:56   | I get a kick out of just like when I search a problem and the forums that I set up are,                     |
| 01:29:03   | have the answer, you know, and you are a big part of that. You were one of the frequent                       |
| 01:29:07   | contributors over there, always helping people out. And I never once used the Facebook forum                  |
| 01:29:11   | because I have a Facebook account, but I loathe Facebook with all my being. But that's another                  |
| 01:29:16   | subject. So yeah, I'm very glad that you did that. And discourse is really good. I mean,                      |
| 01:29:20   | I was never a big fan of web forums to begin with, but discourse is a really good,                            |
| 01:29:25   | a really good set of software. So that's, that helps. It's just been great. But I just wanted                 |
| 01:29:30   | to thank you publicly for being in there and contributing so much. And of course, Rose, too,                  |
| 01:29:35   | who really is the only reason we were able to make it work without turning it into a bunch of                 |
| 01:29:40   | horrible people spamming ads and stuff. Rose is critical to the success of this forum.                        |
| 01:29:45   | Well, I think Automators and the Mac Power Users, who's both very fortunate in that the listener group             |
| 01:29:49   | is full of wonderful people, just like TJ, who are always in there sharing all this cool stuff                |
| 01:29:54   | that they've got, that they've made and helping each other out. You know, it's the community                  |
| 01:29:58   | really that makes it. And every so often there might need to be a little bit of a helping hand                |
| 01:30:02   | with moderation, but it's a very light helping hand. Yeah, it's a nice place on the internet.                 |
| 01:30:07   | And there aren't a whole lot of those. So I'm really happy to have, have a couple more.                       |
| 01:30:11   | I'm really making an effort to get in there more often. It just, you know, it takes a lot of time             |
| 01:30:16   | to produce these shows and all the other things I do. But I really, I never have a bad experience             |
| 01:30:22   | when I go in there. So I've just got to get in there more often. But either way, thank you for                |
| 01:30:26   | all your contribution there. And being so generous with all the cool automation stuff                         |
| 01:30:30   | you've come up with, this will not be your last appearance on the Automators. I will guarantee                |
| 01:30:35   | you that. Wonderful. Look forward to it. All right. Thank you to our sponsors. And that is our                |
| 01:30:41   | friends over at Smile ExpressVPN and Mint Mobile. We are the Automators. You can find us over at              |
| 01:30:46   | relay.fm slash Automators. You can also find us at Automators.fm. That cool forum Rose is talking             |
| 01:30:51   | about. That's at talk.automators.fm. You can go there. What's going on in your life lately Rose?              |
| 01:30:58   | I know you got done moving. Have you got any cool posts you've done or things you want to share?              |
| 01:31:03   | I've got a lot of stuff coming because I need to finish redecorating before I can truly go                    |
| 01:31:08   | automation crazy. But there's a whole thing with a home theatre setup. So I will add a spoiler for            |
| 01:31:14   | audio nerds. It does include a soundbar because my living room is tiny. But there's going to be a             |
| 01:31:19   | whole series of home theatre automation. And indeed, how I automate my entire house coming                    |
| 01:31:24   | up in the not too distant future along with that promised toggle [[Keyboard Maestro]] automation.                 |
| 01:31:29   | Yeah. I've been obsessing lately. I'm trying to figure out if I can get my camera to do facial                |
| 01:31:33   | recognition with [[HomeKit]]. If it can reliably recognise me walking in the front door. Can it                   |
| 01:31:40   | play, you know, Star Wars through my HomePods as soon as it sees that I came home. I've been                 |
| 01:31:46   | working on that. My hang up right now is my face. And for some reason, it's not consistently                  |
| 01:31:51   | recognising my face, but there's hope. There's hope. All right, Rosemary, you should set up                   |
| 01:31:58   | your house. Go do that as soon as you finish your toggle script. Yes, priorities, toggle script,              |
| 01:32:05   | set up house unpack boxes in that order. I'm going to have to use some automation to write                    |
| 01:32:09   | my clients to explain why I'm going to be behind on a few things because I'm going to spend the               |
| 01:32:13   | rest of the day fiddling with my [[Stream Deck]]. Thank you. And we're in the audience in two weeks               |
| 01:32:18   | and have a great day.                                                                                         |
