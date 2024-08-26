---
status: "incomplete"
fc-date:
  year: 2021
  month: 04
  day: 23
fc-category: "podcast"
podcast: "Automators"
published: 2021-04-23
duration: 6762
formattedduration: "01:52:42"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/74"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators074.mp3"
episode: 74
title: "74: Stream Deck: Going Large"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David have gone all-in with Elgato's Stream Deck as an automation tool. In this episode, they go deep into all the tricks and workflows to turn your Stream Deck into an automation robot.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 074 Discussion](https://talk.automators.fm/t/74-stream-deck-going-large/11091)

# Sponsors
- [[Privacy (Sponsor)|Privacy]] - Smarter payments.
- [[Intrazone (Sponsor)|The Intrazone by Microsoft SharePoint]] - a bi-weekly conversation and interview podcast by the SharePoint team.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.

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
- [Stream Deck XL | elgato.com](https://www.elgato.com/en/stream-deck-xl)
- [Stream Deck | elgato.com](https://www.elgato.com/en/stream-deck)
- [Stream Deck Mini | elgato.com](https://www.elgato.com/en/stream-deck-mini)
- [Automators #68: Stephen Millard and ThoughtAsylum - Relay FM](https://www.relay.fm/automators/68)
- [Stream Deck Icon Generator | ThoughtAsylum](https://www.thoughtasylum.com/2020/12/24/stream-deck-icon-generator/)
- [Automators #58: Automating with TJ Luoma - Relay FM](https://www.relay.fm/automators/58)
- [tjluoma/icalbuddy-km-and-stream-deck: Use icalBuddy and Keyboard Maestro to show calendar events on Stream Deck](https://github.com/tjluoma/icalbuddy-km-and-stream-deck)
- [Corcules/KMLink: Stream Deck plugin to drive Keyboard Maestro](https://github.com/Corcules/KMLink)
- [Elgato Stream Deck - Plugins - Elgato](https://help.elgato.com/hc/en-us/articles/360028232451-Elgato-Stream-Deck-Plugins)
- [smitmartijn/streamdeck-zoom-plugin](https://github.com/smitmartijn/streamdeck-zoom-plugin)
- [Automation-Icons: Icons to represent your automations.](https://github.com/RosemaryOrchard/Automation-Icons)
- [fredemmott/StreamDeck-AudioSwitcher: StreamDeck plugin for setting active audio devices](https://github.com/fredemmott/StreamDeck-AudioSwitcher)

# Transcription
  
| Time Index | Transcription                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, everybody. I'm David Sparks, and joined by my fellow co-host, Rose Mary Orchard.                   |
| 00:07      | Hey, Rose, how are you today?                                                                             |
| 00:09      | Oh, David, I'm good. I might have splurged a little bit in recent times, so we've got                     |
| 00:14      | some fun things to talk about.                                                                            |
| 00:15      | Oh, you made some COVID purchases.                                                                        |
| 00:18      | Well, let's just say the end of the tax year here in the UK had me going, well, my limited                |
| 00:23      | company didn't spend much money at all last year, and my accountants, they're going,                      |
| 00:27      | if there's anything you want to buy for your business, now would be a good time to do so.                 |
| 00:33      | So I kind of have an extra large [[Stream Deck]] sitting on my desk. It probably looks like                   |
| 00:38      | yours.                                                                                                    |
| 00:39      | Yes, I'm glad you supersized your [[Stream Deck]]. That's actually the goal for today's show.                 |
| 00:45      | We keep dancing around the topic of [[Stream Deck]], but it seems like the [[Stream Deck]] just                   |
| 00:50      | continues to grow in popularity. There's a bunch of posts about it in the Automator's                     |
| 00:55      | forums as well as the Mac Power Users' forums. It just seems like the thing is taking off,                 |
| 01:01      | and we thought this would be a good show to take on the [[Stream Deck]]. We're going to talk                  |
| 01:06      | about what it is, why you might want one, what you can do with it, and what we're doing                   |
| 01:12      | with them. And Rose and I are both heavily invested in [[Stream Deck]]. So I think this will                  |
| 01:17      | be a fun one. A lot of Automator's repercussions.                                                         |
| 01:20      | Yes, yes. And I should note, before we dive into this, for anybody who doesn't have a                     |
| 01:26      | [[Stream Deck]] and has taken a look and thinks, oh, I'm not sure this is going to be worth                   |
| 01:29      | it for me, there is a mobile app that you can download and use on your iPhone, which                      |
| 01:33      | has the same number of buttons as the medium sized [[Stream Deck]]. It's free for the first                   |
| 01:37      | month and that's $1.99 after that. And so that's a great way of trying the [[Stream Deck]]                    |
| 01:43      | without buying the hardware up front, just to see whether or not the actual application                   |
| 01:47      | of this is worth it for you because you may find that you can solve the same problems with                |
| 01:51      | [[Keyboard Maestro]] pallets or things like that. But I found for me that the [[Stream Deck]] is                  |
| 01:57      | much better than having this little icon floating on my actual computer screen because it's               |
| 02:02      | out of the way, but it's still visible. But you have to figure out the solution that works                |
| 02:06      | for you. So the mobile application is definitely worth a try if you haven't already.                      |
| 02:09      | Yeah. And the [[Stream Deck]] is from [[Elgato]]. And like Rose said, there's a software you                      |
| 02:14      | can buy or rent it. I guess it's a subscription app that puts the [[Stream Deck]] on a phone or               |
| 02:20      | an iPad, but probably more useful and more economical over time because the app subscription              |
| 02:26      | is not cheap is just to buy their physical hardware. And it's a little hunk of plastic                    |
| 02:33      | with a series of buttons on it. And there's, we'll talk about that in a minute, how many                  |
| 02:37      | buttons you get. But it also has a little screen behind it and it's addressable per                       |
| 02:42      | time. So not only can you have programmable buttons, you can have the background of those                 |
| 02:48      | buttons change based on context, which, you know, it's a very useful device in that you                   |
| 02:54      | don't have to remember what button does what because the little video behind it will tell                 |
| 02:58      | you what it is for.                                                                                       |
| 03:00      | Yes. Yeah. And I really do like that that it's an individual LCD behind each button,                      |
| 03:04      | which means that you can put any image on there you want. Now, these are quite small                      |
| 03:09      | things. They're, you know, a little bit bigger, I would say, than the size of an app icon                 |
| 03:13      | on your phone home screen or iPad home screen. But, you know, those change and you can,                   |
| 03:19      | you know, if you want to put custom icons in there, I've done that. And we had [[Stephen Millard]]            |
| 03:23      | on the show a while ago and talked to him about his [[Shortcuts]] actions for generating              |
| 03:28      | icons. And I have a whole series of those. And by the time the show goes live, there's                    |
| 03:34      | a little GitHub repo that I've set up with some of my icons in that anybody else of course                |
| 03:39      | is welcome to contribute to where, you know, you can just download icons if you're looking                |
| 03:44      | for something in particular so that you can, you know, just see what kind of icons you                    |
| 03:49      | might have. I've personally found black backgrounds or PNGs of just the icons tend to work really         |
| 03:54      | well for me, David, but I know you've gone great, I think, with yours, you were saying.                   |
| 03:58      | Yeah, I mean, I just ran all of the [[SF Symbols]] on a grey background and I have a folder full              |
| 04:05      | of them. And Rose and I and some other friends have had a shared [[Dropbox]] folder for several               |
| 04:10      | months now where we've been collecting these. And every time any one of us makes another                  |
| 04:14      | one, we just stick it in kind of the community folder and the idea with the GitHub repose                 |
| 04:19      | to bring the listeners in so you can go and download them. And you can also make contributions            |
| 04:24      | if you have graphics. And honestly, the bigger, the more people in the tent, the better because           |
| 04:30      | it's a pain in the neck to put these together. So if everybody throws a few in there, we're               |
| 04:34      | going to have a really nice collection when we're done. And so we're kind of getting                      |
| 04:40      | way ahead of ourselves because we'll talk about customising scripts and buttons later                     |
| 04:45      | in the show. Just to start out with, there's three different [[Elgato]] [[Stream Deck\|Stream Decks]] available.              |
| 04:51      | The first one has, and it's ranked by the number of buttons on it. The first one has                      |
| 04:55      | six on it, six buttons. The next level up is three rows of five or 15 buttons. And then                   |
| 05:03      | after that, there's one with four rows of eight for 32 buttons. And the price ranges                      |
| 05:10      | for the six button one, it's 80 bucks for the 15 one button one, at least in the US                       |
| 05:15      | Amazon. It's $150. And the 32 button one is currently unavailable. I think it was a little                |
| 05:23      | over $200.                                                                                                |
| 05:24      | Yeah. So I got mine on Amazon a little while ago for 210 pounds. They were unavailable                    |
| 05:30      | on Amazon UK for a very long time. And then they popped up at 230 pounds. And then Amazon                 |
| 05:36      | had a sale right as my accountant sent me an email said, you know, if there's anything                    |
| 05:41      | you would like to purchase, do so now. And I got the email from CamelCamelCamel to tell                   |
| 05:47      | me that the price had dropped pretty much right after that email and went, okay, well,                    |
| 05:51      | I guess I'm buying a larger [[Stream Deck]] then.                                                             |
| 05:53      | Yeah. So I bought mine about a year and a half ago, and I probably paid full price for                    |
| 05:58      | it. And I just bought the big one. It was in relation to the keyboard and menstrual                       |
| 06:03      | field guide release. I wanted to include content in the keyboard and menstrual field guide                |
| 06:09      | because as we'll talk about the show, this is a great tool to trigger [[Keyboard Maestro]]                    |
| 06:13      | scripts. And I bought it thinking, well, I'm going to try this. And if I like it, I'll                    |
| 06:18      | keep it. But unless it's really useful to me, I'll end up just returning it to Amazon.                    |
| 06:26      | As Ro said at the top of the show, for the [[Keyboard Maestro]] element of this, it's just                    |
| 06:31      | a substitute for a keyboard shortcut or any of the other many triggers you can use with                   |
| 06:34      | a [[Keyboard Maestro]]. So I got thinking, why would I want that? My hands are already on                     |
| 06:39      | the keyboard. To push a button, I've got to take my hands off the keyboard, even if it                    |
| 06:42      | is got a clever screen behind it. But there's something about the [[Stream Deck]] that is just,               |
| 06:49      | it just finds a way to be useful. I don't know how else to put it. We're going to go                      |
| 06:53      | into the many ways we're using them as we get through the show today, but I quickly                       |
| 06:58      | realised that this would not be something I'd be sending back. And I'm glad I bought                      |
| 07:02      | the one with the most buttons because I am just constantly adding things to it. Some                      |
| 07:08      | of my pains, because you can use multiple screens, it's not just 32 buttons, you can                      |
| 07:13      | have it display different buttons by which app you're on or which context you're in.                      |
| 07:18      | So I've got some that I'm not using all 32 buttons on and I've got others that I am.                      |
| 07:24      | And either way, it just had more buttons is better. And if you look at the footprint                      |
| 07:29      | on the desk, the different in the then to me, that was kind of the big thing is like                      |
| 07:34      | how much space will this take on my desk because I really don't like a lot of stuff on my desk.           |
| 07:39      | But the difference between the six button one and the 32 button one really isn't that                     |
| 07:43      | much. When you consider, you know, once you get it on your desk, you might as well get                    |
| 07:48      | the slightly bigger footprint and get more buttons.                                                       |
| 07:51      | Yes, absolutely. And there are a few other differences that I feel we should mention                      |
| 07:56      | the six and the 32 button ones have molded risers so that you can either have it flat                     |
| 08:02      | on the desk, at least with 32 button, or you can put it in kind of a magnetic riser. And                  |
| 08:07      | the 32 button one is the only one you can replace the cable on. So if you happen to have                  |
| 08:12      | a very cute golden doodle who likes cables, like David does, then you may discover that                   |
| 08:19      | the 32 button one is the better one for you because if a certain somebody gets very excited               |
| 08:24      | and chews all the way through your [[Stream Deck]] cable, then you're going to need to replace                |
| 08:29      | it or replace the [[Stream Deck]]. And so if you've got a replaceable cable, of course, that's                |
| 08:33      | easier. And the 32 button ships with a nice braided cable as well, which I really like                    |
| 08:39      | on that.                                                                                                  |
| 08:40      | Yeah, you know, it's my dog has never chewed a cable and then, but she always sleeps under                |
| 08:45      | my desk while I'm working through the day. And I was re, you know, as you do, I was                       |
| 08:49      | resorting cables and I had the [[Stream Deck]] cable just hanging off the back of the desk                    |
| 08:56      | with the USB plug in down towards the floor. And I didn't think anything about it. And                    |
| 09:01      | I got all my cables, you know, figured out and I pulled up the [[Stream Deck]] one to replug                  |
| 09:06      | it in and the USB plug was hanging on literally by the thread of the braided cable. You know,             |
| 09:15      | it was, it's like I put it down there in one condition that came up in another. And I don't               |
| 09:20      | know why she, she's never done it since and she never did it before. But I guess maybe                    |
| 09:25      | they dipped the [[Stream Deck]] cables and kibble before they send it out. I don't know.                      |
| 09:29      | Definitely. That's what they're doing.                                                                    |
| 09:31      | But the, but anyway, so she chewed it up and my first thought was, well, that cost me $200.               |
| 09:36      | You know, I was thinking, because if you look at the [[Stream Deck]], it looks like the cables                |
| 09:41      | plug in and I've had it so long, I don't remember how I plugged it in. And then I pulled it               |
| 09:45      | apart and sure enough, it's a, it's a USB C connection at the top and, and a, and a USB                   |
| 09:53      | A connection at the other end. And I was able to just replace the cable. So that was great.               |
| 09:59      | Which is perfect. I should also mention, at least for people in the UK, Curry's PC world                  |
| 10:05      | usually has [[Stream Deck\|Stream Decks]] in stock. And for people in the US, Best Buy and Target are                      |
| 10:11      | the two places that I've seen people in the Relay FM [[Discord]] discussing that they've                     |
| 10:15      | recently bought their [[Stream Deck\|Stream Decks]] at. So if you can't find it on Amazon or, you know,                    |
| 10:22      | the shipping's going to take a while, then it's worth having a look in some other places.                 |
| 10:25      | I'll go to on their website, do link to a local retailer. So check out, you know, whoever's               |
| 10:30      | local, who are you're living. But there, there's certainly some other options there                       |
| 10:34      | as well, which of course makes it a bit easier.                                                           |
| 10:37      | Well, I totally understand you being skeptical as you listen to the saying, why do I need                 |
| 10:42      | to spend, you know, a hundred or more dollars for something that's just going to give me                  |
| 10:47      | buttons that I already have on my keyboard. But I would ask you to just stick with us                     |
| 10:52      | through the show today. Because as you get through it, there really is a benefit to this                  |
| 10:56      | stuff. So much so that Rose, who I think you bought the 15 button version first.                          |
| 11:02      | Yeah, I started with the medium, because the medium had an adjustable stand. And I thought                |
| 11:08      | that was quite good. And I thought, you know, with the different profiles and the folders,                |
| 11:11      | I can make it work with the 15. And I did make it work for a very, very long time. But                    |
| 11:16      | then, you know, I had the opportunity and I'm very glad to have upgraded David, I have                    |
| 11:21      | to say.                                                                                                   |
| 11:22      | Yeah, so you went up to the 32.                                                                           |
| 11:24      | Yep. Yep. That's the only way from the 15 inch. Well, I could have gone down to a six                     |
| 11:28      | button one, but then we probably won't be recording this episode right now. If we'd done that,            |
| 11:31      | you might have disowned me entirely. But no, I upgraded to the 32 button one. And that's                  |
| 11:38      | because, you know, over the last couple of years, my [[Stream Deck]] usage has increased                      |
| 11:42      | significantly. And in many ways, I should say, so it's not just, you know, that I've                      |
| 11:49      | found more use cases for it. It's also, you know, I've started doing iOS today on a weekly                |
| 11:53      | basis with Micah Sargent on the Twitter network. And as part of that, we do a video version.              |
| 11:58      | We record that at the same time as the audio version, I'm showing my iPhone or my iPad                    |
| 12:01      | on the screen. And I'm doing that through Zoom. But I can't just, you know, throw up                      |
| 12:07      | my iPad with that because then you don't see me as well. It just doesn't work quite as                    |
| 12:10      | nicely. So we're using Ecamm Live. And Ecamm Live is a great piece of software and it ships               |
| 12:15      | with a [[Stream Deck]], like plug in. So you've got all of and it creates one button for each                 |
| 12:22      | of your scenes or so that you can drag them in or it's got a set scene button. And so                     |
| 12:27      | I can say, okay, I want me with my iPhone to the right of me. Or I want my iPad with                      |
| 12:33      | me with a little round floating head in the corner. Or I want my iPhone full screen with                  |
| 12:38      | me as a little round floating head, because then if I rotate my iPhone, like if I'm showing               |
| 12:42      | off an Apple Arcade game or something, which is better in landscape, then, you know, I                    |
| 12:46      | can do that too. And it's really useful for things like that. But also just so many more                  |
| 12:52      | apps have been adding support and people have been creating third party plugins for these                 |
| 12:57      | as well. I'm just getting more and more excited every couple of days, it seems, because there's           |
| 13:03      | just something else that I see somebody post about or I see an announcement on where, oh,                 |
| 13:08      | and by the way, you know, now you can do this via [[URL Schemes\|URL scheme]], which means you can run it                  |
| 13:11      | via the [[Stream Deck]]. Or you can, you know, or this has got [[Stream Deck]] plugins now or                     |
| 13:16      | this [[Stream Deck]] plugin exists, which is great.                                                           |
| 13:20      | Well, that camera set up the scripts you were talking about. It's like a piece of hardware                |
| 13:25      | out there, like black magic makes the HDMI switchers where they do fades between cameras                  |
| 13:29      | and whatnot. And you can kind of do that on a [[Stream Deck]]. Not, you know, it's not as                     |
| 13:34      | fancy as what you can do with the black magic stuff, but it's a lot cheaper, you know, to                 |
| 13:39      | set it up and switching between cameras and managing zoom calls is one of the best uses                   |
| 13:45      | in my opinion.                                                                                            |
| 13:46      | Yeah. Yeah. And that was something that came out recently. Somebody's brought out a zoom                  |
| 13:51      | plugin for the [[Stream Deck]] with a whole series of zoom buttons, which of course is incredibly             |
| 13:57      | useful, but there's, you know, other plugins like running [[AppleScript\|AppleScripts]] or [[Zapier]] integrations,           |
| 14:02      | all sorts of things, which just, you know, makes makes it easier to just say, yes, okay,                  |
| 14:08      | now I can just do this without thinking about it.                                                         |
| 14:10      | So one of the concerns you may have if you're thinking about a [[Stream Deck]] is third party                 |
| 14:15      | software. I know that the whole idea of like getting a keyboard or a mouse or something                   |
| 14:21      | like a [[Stream Deck]] comes with the, you know, it's fraught with peril for Mac users to think               |
| 14:27      | about, am I going to run some vendor software for their hardware on my Mac and subject myself             |
| 14:35      | to whatever madness comes with that software? What are your thoughts on the [[Stream Deck]] software?         |
| 14:41      | Well, I mean, the [[Stream Deck]] software is a unique animal. Let's start with that. It                      |
| 14:46      | is not my favourite piece of software in the world to use. It has a couple of pet piece,                   |
| 14:50      | which we'll come back to at the end. But overall, it works well. You know, developers can create          |
| 14:56      | action sets, I call them plugins that you can install. And they can even install an entire                |
| 15:03      | profile for you. So for example, Ecamm Live, as I said before, that also has a button to                  |
| 15:08      | install a whole profile, which it will just set up a brand new profile for you with everything            |
| 15:12      | on. So you can, you know, just go ahead and look at that and go, okay, so there's a bunch                 |
| 15:18      | of run scene buttons, there's some solo add lefts and add rights, there's previous scene,                 |
| 15:22      | next scene, this camera, that camera, play polls, sharing my screen, showing and hiding,                  |
| 15:27      | picture and picture, muting, things like that. And that's great, because, you know, it makes              |
| 15:33      | it easier. But there's a lot of, you know, developers out there who've made the point                     |
| 15:38      | of going and adding things. So there's a keynote plugin, there's a [[Visual Studio Code]] plugin.             |
| 15:45      | There's a Nanoleaf plugin and a Philips Hue plugin. So if you want to control your Hue                    |
| 15:50      | lights or your Nanoleaf light panels, you can do that. But also people like [[Timothy Luoma\|TJ Luoma]]   |
| 15:55      | through things like keyboard moisture has gone ahead and created plugins. Now, I like                     |
| 16:00      | the fact that in the [[Stream Deck]] software, you can copy and paste actions and move things                 |
| 16:05      | around because I have some actions which we'll get to in a bit, which are the same on every               |
| 16:08      | profile to allow me to go back to my home base, basically. And, you know, that is great.                  |
| 16:16      | But I mean, I think that the [[Stream Deck]] software could be better. I would actually quite like            |
| 16:21      | it to live in my dock or to be able to appear in my dock at times because I frequently want               |
| 16:29      | to just be able to click on it and find it instead of having to reopen it through [[Alfred]].                 |
| 16:34      | And I would also like multiple windows so that I could see two profiles at the same                       |
| 16:38      | time. But, you know, I'm good with it. What do you think, David?                                          |
| 16:41      | I think it's okay. The [[Stream Deck]] is not just a Mac piece of hardware. It runs on Windows                |
| 16:46      | 2. And so they've got software for both platforms. And it feels to me almost like a Windows app           |
| 16:53      | running on the Mac. They, you know, just doesn't have kind of the friendliness or the UI love             |
| 17:01      | that a typical Mac app would have. But on the positive side, it's easy to figure out.                     |
| 17:06      | When you load it up, it has a picture of your [[Stream Deck]] and the buttons on the screen match             |
| 17:11      | the buttons that are actually on your [[Stream Deck]]. And as you add buttons in the app, they                |
| 17:15      | show up on your [[Stream Deck]]. You don't have to like push a sync button or do anything                     |
| 17:19      | dumb like that where I could see a third party hardware developer making you do, you know,                |
| 17:25      | jump through hoops like that. This software is largely automated as you update it. They,                  |
| 17:31      | the developers seem to be actively involved. There was a period of time in the Big Sur                    |
| 17:37      | beta where they just stopped working, the [[Stream Deck]] stopped working with the, with                      |
| 17:42      | the Mac. And that's when I realised exactly how much I've come to rely on it. Because                     |
| 17:46      | for a couple of weeks I didn't have a [[Stream Deck]]. I actually just unplugged it because                   |
| 17:50      | it wasn't working. And the developers were active in the forums about what they were                      |
| 17:54      | doing and they were getting it fixed. And they got it working well before the Big Sur                     |
| 17:59      | became out of beta, which for a lot of third party hardware developers, they don't even                   |
| 18:04      | start looking at, at their hardware until after Big Sur ships, you know, for, for a                       |
| 18:10      | lot of the third party stuff, they'll say, well, we'll wait until Apple's done and then                   |
| 18:13      | we'll, we'll fix it. Well, these guys were fixing it beforehand. So that was really encouraging           |
| 18:18      | to me to see them being active like that. It's not discoverable for some of the best                      |
| 18:25      | features. Like we talk, we're going to talk today about how we use multiple setups or                     |
| 18:29      | profiles of [[Stream Deck]]. And you have, that's not an easily discoverable feature the way                  |
| 18:35      | it's set up, but we'll get into it. But the bottom line is it's okay. I mean, I wouldn't                  |
| 18:41      | be afraid to install it on my Mac. I think it's, you're fine.                                             |
| 18:45      | Yeah. I will take a moment to say, so in the [[Stream Deck]] software, at the top of, in the                  |
| 18:52      | top left, you've got the name of your [[Stream Deck]]. And that's where you set up mobile devices             |
| 18:56      | underneath that you've got profiles. And if you go to edit profiles, then in that preference              |
| 19:01      | is paying that appears at the bottom right, there's a little arrow, and then there's a                    |
| 19:04      | button that says backup all. And that's where you can create a backup and restore your profiles           |
| 19:09      | from backup. Now, I have never had my profiles disappear. And why say never? I mean, never,               |
| 19:14      | ever. But I attribute some of this to the fact that at least once a week I'm in there                     |
| 19:18      | clicking create backup for all. Because this way, if anything goes wrong, I've got that                   |
| 19:24      | backup, which is always nice to have. And it does mean that if I plug my [[Stream Deck]]                      |
| 19:29      | in on my MacBook Air, which I've done before, if I'm not using my Mac Mini for whatever                   |
| 19:36      | reason, then I can restore the profiles onto that device so that I've got whatever the                    |
| 19:42      | latest state is, because your profiles don't sync between your Macs. And they're not stored               |
| 19:48      | on the [[Stream Deck]], you know, your [[Stream Deck]] setup lives on your Mac. So if you want to                 |
| 19:54      | share it between people or devices, then you need to export profiles and import profiles                  |
| 19:59      | or just backup everything and then restore everything from backup.                                        |
| 20:02      | Yeah. And but I will again reiterate backup your profiles. I actually am a victim of                      |
| 20:08      | data loss in this app. And it's my fault because when I was in the Big Sur beta and the stream            |
| 20:15      | deck stopped working, but before anybody had written about the fact that it stopped working,              |
| 20:19      | I thought it was me at first. And I started doing crazy things to try to get it to work.                  |
| 20:24      | And then the process managed to nuke my profiles. So that was no fun.                                     |
| 20:29      | Yeah, I yeah, definitely, definitely check that. And also just dig around in the preferences              |
| 20:34      | pane of the [[Stream Deck]] app in general. I found it's quite it's pretty good to have                       |
| 20:38      | it a full brightness, but you can also have a button or an action set the brightness of                   |
| 20:42      | your [[Stream Deck]], which I know some people are using myself included at the end of your                   |
| 20:47      | day so that, you know, your your [[Stream Deck]], you know, dims and, you know, puts your computer            |
| 20:51      | to sleep.                                                                                                 |
| 20:52      | Yeah.                                                                                                     |
| 20:53      | And it's kind of fun because you can have it display an image in the in the [[Stream Deck]]                   |
| 20:59      | using all the buttons when you're not in your computer is inactive. I have like the the                   |
| 21:05      | rebel symbol from Star Wars that shows up on it. And that's kind of cool, but you don't                   |
| 21:10      | want that blasting at 100% brightness through the night. So have fun with that.                           |
| 21:18      | This episode of the automators is brought to you by privacy for smarter online payments.                  |
| 21:23      | Get $5 to spend on your first purchase when you sign up at privacy.com/automators.                  |
| 21:31      | Recently a buddy of mine sent me a link to one of those Indiana Jones bags, you know,                     |
| 21:36      | the baggy carries through those movies. And I thought it would be fun to have one of those                |
| 21:40      | like when I'm going to Disneyland or whatever. So I went online and clicked this link. And                |
| 21:45      | the website looked like it was designed in 1980. It was horrible. And I was honestly                      |
| 21:51      | afraid to put my credit card into their system. So I didn't buy it. That's the kind of problem            |
| 21:56      | that you can solve with this sponsor privacy.com. Privacy is a tool that makes it easy to manage          |
| 22:02      | your financial lives online while keeping your most important information secure by                       |
| 22:07      | generating virtual numbers. Privacy masks your bank information. So you never have to worry               |
| 22:13      | about giving it out to people you don't know online. It seems like every day we read about                |
| 22:18      | another online store getting hacked and losing customer information credit cards. I feel                  |
| 22:23      | like every time that I have to pull out my credit card and type it into a website that                    |
| 22:28      | I'm taking a huge risk and who knows what kind of security they're going to have on                       |
| 22:32      | the other side. With privacy, you can make one time numbers that only get used once                       |
| 22:37      | with that store. So if they get hacked, you don't have to worry about it getting used                     |
| 22:41      | elsewhere. Whether it's for personal or business use, one time or subscription with privacy,              |
| 22:48      | you can decide who can charge your card, how much and how often you can even close a card                 |
| 22:53      | anytime you want. Privacy lets you take back control of your payments. Plus, you can make                 |
| 22:58      | sure that you are never accidentally billed twice or upgraded to another service without                  |
| 23:04      | your consent. And privacy is partnered with the good folks at 1Password. You can create,               |
| 23:10      | use and save privacy cards directly within your 1Password dashboard. All virtual cards                 |
| 23:16      | created in 1Password will have the same security benefits as your other privacy cards.                 |
| 23:21      | And you can set spend limits, create single use or merchant locked cards whenever you                     |
| 23:26      | want. Head to privacy.com/automators and sign up for an account. New customers will                 |
| 23:32      | automatically get $5 to spend on your first purchase. Once again, that's privacy.com/               |
| 23:38      | automators and sign up now. All those crooks out there are using sophisticated tools to                   |
| 23:44      | try and get your money. You need sophisticated tools to protect it. Our thanks to privacy                 |
| 23:48      | for their support of the automators podcast and all of relay FM.                                          |
| 23:54      | So we've been talking around the [[Stream Deck]], but let's talk through the process of making                |
| 23:59      | a programmable button in the [[Stream Deck]]. And the, uh, it starts in the [[Stream Deck]]                       |
| 24:05      | software on your Mac or PC. And all you do is you click on a button on the virtual stream                 |
| 24:11      | deck on your screen. And on the right side of the screen, you've got a scrolling menu                     |
| 24:19      | of various tools that you can drag onto that button. And that's how you start. You take,                  |
| 24:25      | take a, a, a tool from the right side and you drag it onto the button on the screen                       |
| 24:30      | on the left side. And, uh, in a minute, we're going to go through, uh, the, the variety                   |
| 24:36      | of tools available to you, but just to use a simple one, um, one of them is open a web page.               |
| 24:42      | Right. And I, uh, just, just recently I am, uh, I've been experimenting with hay a lot                    |
| 24:47      | and the website for my email that I do in hay is app.hay.com. It's the same for everybody                 |
| 24:53      | that subscribes to hay. And so I just drug over the website button and then I put that                    |
| 25:01      | URL in. And then, um, once you put the URL in, you've created the button, but the default                 |
| 25:08      | icon is something that's very generic. So, uh, what you do then is on the same button,                    |
| 25:13      | you can right click on it and you can set the, the image for the background of the button.                |
| 25:19      | There's a couple of things you can do there. One of them is you can create a button, which                |
| 25:23      | is a bad idea. Don't click that button because it takes you to their website where they've                |
| 25:27      | got this terrible web based graphics program to build buttons. I, I, I got, I went there                  |
| 25:33      | once and realised that that was just not a good idea. Or you can just take a JPEG or                      |
| 25:37      | a PNG that you have and, and put it in there. In the case of hay, I just did a Google image               |
| 25:43      | search for a hay icon and I found a nice PNG of the icon of, of hay. And I put that on                    |
| 25:51      | my desktop and I set that to the button in the [[Stream Deck]] app. And then I copied the                     |
| 25:57      | artwork to our shared [[Stream Deck]], um, artwork folder and I'm good. So now if I look on my                |
| 26:03      | [[Stream Deck]], I've got the hay icon there. If I tap that, then it opens up in [[Safari]],                      |
| 26:10      | the hay website. But just to go a step further, I thought, well, they also have a thing on                |
| 26:15      | hay called set aside, which is where I put important email. I want to clear out at the                    |
| 26:19      | end of the day. And the same thing. There's a URL for that. So I went in the [[Stream Deck]]                  |
| 26:24      | software, I hit command C and then I clicked on the button right next to it in the virtual                |
| 26:31      | [[Stream Deck]] on my screen and hit command V to paste it. And all I did was change the URL                  |
| 26:38      | from the URL for the basic hay app to the basic to the URL for the set aside deck. And                    |
| 26:44      | in addition to putting artwork, you can also write some words on the button. And I wrote                  |
| 26:49      | set aside on that one. So the one without set aside is just hay. And then the one that                    |
| 26:54      | does say set aside is set aside. And so now I can quickly get to those email things by                    |
| 26:59      | just pressing a button on my [[Stream Deck]]. And that is as much as you can do on an audio                   |
| 27:05      | podcast. That's all there is to really setting buttons.                                                   |
| 27:08      | Yeah. And I have to say, you know, so there's a there's a website button or a website action,             |
| 27:16      | which is I'm guessing what you're using here, David, but there's also just a straight up                  |
| 27:20      | open action, which can open apps and files. And between those two, you can go so far in                   |
| 27:28      | in [[Stream Deck]] because you can open any website and any URL. And there's even a button that               |
| 27:34      | you can tick in the website action, which says get request in background. So say, for                     |
| 27:39      | example, you just need to ping a URL somewhere. For example, on your push cut URL, so that                |
| 27:46      | it sends a thing to your device, you could do that in the background. Now, this doesn't                   |
| 27:50      | work for things like zoom meetings and stuff like that, those you need to open the URL.                   |
| 27:54      | So it opens in your browser and you actually see it. But that's great. And the title as                   |
| 28:00      | well. I actually have a title on most buttons just so that when I look at it, I can in the                |
| 28:05      | [[Stream Deck]] app, I can see it. But I've clicked on the T next to the title box and I've just              |
| 28:11      | unchecked show title because, you know, 99% of the time, I don't need to know exactly                     |
| 28:16      | what that button is. It's just if I'm going through and editing, you know, my buttons                     |
| 28:21      | in the [[Stream Deck]] app, then I like to have the title there. I guess I'm a completionist                  |
| 28:25      | in that way.                                                                                              |
| 28:26      | Yeah. Let's talk about the, I mean, the website and the files are very simple ones, but some              |
| 28:32      | that anybody would use a lot. But let's talk about some more that they've got available.                  |
| 28:37      | Yeah. Well, I mean, the other one that or the next one that I use a lot is actually                       |
| 28:46      | the text action. Now, this sounds kind of crazy. But I found that there's certain messages                |
| 28:52      | that I end up sending to colleagues at work again and again and again and again and again.                |
| 28:58      | And I can use TextExpander for this. Absolutely. But instead, I found that it's quite nice               |
| 29:03      | to just have a little vertical block of like the four messages that I frequently send back                |
| 29:09      | to people. And I just press on that and then it inserts the text. And then there's even                   |
| 29:15      | a button at the bottom here with which is press enter after message. And so I can type                    |
| 29:20      | and I have multiple lines in this, you know, it's not as good as TextExpander, though,                   |
| 29:24      | you could use this to trigger a TextExpander snippet. But it means that I don't need to                  |
| 29:28      | think what's what's the shortcut for this or anything. I seem to have a bit of a mental                   |
| 29:32      | block recently, David, with learning keyboard shortcuts, which we'll get to in a little                   |
| 29:36      | while because that's one of the reasons why I have so many [[Keyboard Maestro]] macros. But                   |
| 29:42      | it just inserts the text and then it can press enter and just send it. So I can just click                |
| 29:46      | in the chat, read what they've said, press the [[Keyboard Maestro]] or press the stream                       |
| 29:51      | deck button, sorry, not [[Keyboard Maestro]] button, [[Stream Deck]] button. And it's it sends back               |
| 29:55      | a message with, okay, thank you very much for letting me know about this. I'll take a                     |
| 29:58      | look at it later. Or, hey, thanks for sending me a message, but please can you file a ticket              |
| 30:02      | in the ticket system? Here's a link. And, you know, a couple of other sort of canned                      |
| 30:08      | messages, which, you know, I use because it makes it easier for me and especially this                    |
| 30:14      | also writing in German, you know, I want to make sure that everything's spelled correctly.                |
| 30:18      | So I sat down once and thought about it. And now I don't think about it again, which of                   |
| 30:22      | course, as David Allen said, you only have to think once a week if you follow G2D. I'm                    |
| 30:26      | not quite sure that's true, but I try and reduce the amount of thinking I need to do                      |
| 30:30      | with this.                                                                                                |
| 30:31      | Yeah, I don't use that function. Just use keyboard mice. I use keyboard mice for a text                   |
| 30:36      | experiment.                                                                                               |
| 30:37      | That's fair enough.                                                                                       |
| 30:38      | But it is there. And, you know, you could have the 32 button, 32 button [[Stream Deck]],                      |
| 30:43      | you could have a screen full of replies, you know, if you wanted and just press the button                |
| 30:48      | that you want.                                                                                            |
| 30:49      | Well, I figured when I'm working, I don't really, you know, in my day job, I don't really                 |
| 30:53      | use the [[Stream Deck]] for all that much, but it's still sitting here on my desk. So I figured               |
| 30:58      | I should use it for something. So I sat aside an hour last week and just thought, okay,                   |
| 31:02      | what can I do that's going to improve my work life? And I was like, you know what, there                  |
| 31:06      | are these things that I always send back. And I'll do that. And then I've got some other                  |
| 31:10      | things which pop up like all of the IP addresses I have at work and stuff like that. So, you              |
| 31:15      | know, so I've got a number of different things actually, which are quite useful there.                    |
| 31:19      | Yeah. And if you go through this list of actions, you'll find that there are a bunch of them              |
| 31:25      | you probably don't want them. I mean, the thing's called a [[Stream Deck]] and it really                      |
| 31:28      | started life out for people who want to stream online when they're playing video games or                 |
| 31:34      | doing video conferences or whatever. And [[Elgato]] makes a whole bunch of hardware that                      |
| 31:39      | supports that. Like they have a special light that you can hang off the top of your Mac                   |
| 31:44      | and it'll give you a really good light on your face as you're doing video calls. And                      |
| 31:48      | so they've got support for all that stuff built in. And there's a set of tools for game                   |
| 31:53      | capture. There's a set of tools for sound board, which is an app that a lot of people                     |
| 31:58      | use in streaming. There's also a set of tools that are just for the operation of the stream               |
| 32:05      | deck. And this is something that you really want to take a look at. Like one of them is                   |
| 32:10      | create a folder. So like, let's say you have a six button [[Stream Deck]], but you want to                    |
| 32:14      | have, you know, some of your favourite music playlists available, but you only have six                    |
| 32:18      | buttons. Well, you could make a folder that has the music icon on it and you click that.                  |
| 32:22      | And it's just like a folder. It opens up a whole new six buttons to you. And you can                      |
| 32:27      | nest these folders even. So they've got an action to create that. We're going to talk                     |
| 32:32      | about profiles more later, but profiles are different setups for the [[Stream Deck]]. And                     |
| 32:37      | you can set up, there are [[Stream Deck]] buttons or actions to switch between those profiles.                |
| 32:44      | And that's, there's some real power tricks we got for you on that in a few minutes.                       |
| 32:49      | One thing I should say though is, you know, as you're having a look at the [[Stream Deck]]                    |
| 32:52      | application, which you can download and install for free, you don't need a [[Stream Deck]] actually           |
| 32:56      | to look at this. And you can look at the more actions on the right hand side at the bottom.               |
| 33:04      | And if you click on the more actions, then it lists a whole bunch of other plugins. And                   |
| 33:08      | these are all the ones that have been submitted and they've gone through the [[Elgato]], I guess              |
| 33:13      | approval process is the right word. Now you will find some of these are Windows only.                     |
| 33:18      | And so they might not work on the Mac, but there are, there's ones there for running                      |
| 33:25      | AppleScript. And there's KM link, which we'll get to and so on. But you know, that's where               |
| 33:30      | I've got the ones for Philips Hue, Visual Code Studio, Nanoleaf, [[Keynote]] and [[Microsoft PowerPoint\|PowerPoint]],                  |
| 33:38      | because I have to use [[Microsoft PowerPoint\|PowerPoint]] at work. So I downloaded the [[Microsoft PowerPoint\|PowerPoint]] one. And you                     |
| 33:44      | know, and all of these other ones, which is just, you know, it's very helpful to do that.                 |
| 33:50      | And if you want, for example, to have a button, which shows you the mail icon with a little               |
| 33:54      | badge and the badge shows you the current number of unread mail messages, [[Elgato]] have made                |
| 34:00      | a plugin for that. And you can have that. So if you usually have your doc hidden, then                    |
| 34:04      | you can have this in on your [[Stream Deck]]. And it'll show you your number of current unread                |
| 34:09      | emails. Personally, I'm a little bit scared to do that. I don't, I don't feel like that's                 |
| 34:13      | a terrible idea for a button. Yeah, yeah. Well, I mean, when you tap on it, it shows                      |
| 34:18      | you, you know, your inbox. So, you know, it could, it could be worse. I am considering,                   |
| 34:23      | you know, hacking this and, and doing my own version with a couple of other applications                  |
| 34:28      | where if I, if I've got something there, like, I would quite like to know the number of Omni              |
| 34:32      | focus items that I have due today on my Omni focus button. But, you know, I haven't done                  |
| 34:39      | that yet. So maybe, maybe by doing this, someone will do that for me. We'll see.                          |
| 34:45      | Yeah, and Rose is right. There's a ton of custom actions, just to kind of round out some of                |
| 34:50      | the built in ones in addition to the ones that manage your [[Stream Deck]]. There's a whole                   |
| 34:54      | bunch of like Twitch studio and Twitter and things like that, where you can run those                     |
| 35:00      | off the [[Stream Deck]]. One of the nice built in ones is a timer button. And I have two                      |
| 35:06      | of those set up. I have a 45 minute one and a 10 minute one. And it's kind of my makeshift                |
| 35:11      | Pomodoro. And if I want to like dig in on a project for 45 minutes, I just press the                      |
| 35:17      | button on the [[Stream Deck]] and then it starts counting down. You see the countdown on the                  |
| 35:22      | [[Stream Deck]] and it makes a little arm after 45 minutes. And if I want to take a 10 minute                 |
| 35:26      | break, I do the same thing. I mean, this stuff is, it's more than just starting an app, I                 |
| 35:31      | guess is my point. And the follow up with what Rose said on the more actions buttons,                     |
| 35:37      | there's some great stuff here, some nerdy stuff, but there's some great stuff. Like one of                |
| 35:41      | them is since I got the M1 Mac, I've been running one that just shows me the CPU percentage,              |
| 35:48      | shows me how hard my CPU is working. That's just a little chip on a button and it just                    |
| 35:54      | gives you a percentage. And I was like, I just did a, and I should have said this at                      |
| 35:59      | the beginning of the show, Rose. This is why I'm a bad at marketing. But I just released                  |
| 36:03      | a free update to the Hazel field guide and hooray, you know, because [[Hazel]] came out with                  |
| 36:08      | version five and they changed some things, but not enough things to justify charging                      |
| 36:12      | you to buy it over again. So I made like 15 videos, about 35 minutes of content, but I                    |
| 36:17      | rendered all that at once. And it was great watching the [[Elgato]] [[Stream Deck]] report to                     |
| 36:21      | me how much CPUs I was doing as I was burning all those videos out. So that's kind of cool.               |
| 36:27      | I am so jealous of that. And I'm stealing your 45 minutes and 10 minutes timers for                       |
| 36:32      | my work profile that I have on my work machine, because that's great. And especially after                |
| 36:38      | meetings, I feel, you know, five, five minutes to myself is reasonable, you know, get up,                 |
| 36:43      | get a glass of water, stretch, and, you know, take stock of all the things that have been                 |
| 36:46      | thrown at you. So yeah, I think the action that we definitely need to talk about though,                  |
| 36:52      | David, which we have not yet talked about is the multi action in [[Stream Deck]], because                     |
| 36:57      | without anything else, just using the [[Stream Deck]] app, if you drag the multi action onto                  |
| 37:03      | it, you know, onto one of your buttons, then you just add more actions into this. So say                  |
| 37:10      | for example, I have a weekly meeting on Tuesday afternoons. And for this, I need to open a                |
| 37:18      | zoom link and a Google Docs link. And so I have two website actions in that button, which                 |
| 37:24      | both open, you know, URLs, but then I press on the button once. And it does both of those                 |
| 37:29      | things for me. It does them consecutively, not simultaneously for people listening. So                    |
| 37:34      | you know, if you if you need things to happen in a certain order, then you can, you know,                 |
| 37:39      | they happen in order. But that's great, because you know, I press one button and two things               |
| 37:43      | happen or five things happen or 10 things happen sometimes, you don't need to involve                     |
| 37:47      | any other kind of automation for this. It is as simple as dragging the number of website                  |
| 37:52      | actions you need and paste in the URLs or drag in a couple of open actions and put in files               |
| 37:58      | or folders or application links, you know, and it is easy to do, you can even press,                      |
| 38:04      | you know, hotkeys and stuff like that, which is great. You know, I tend, I tend not to                    |
| 38:09      | do that. I've got some other methods of doing things, which we'll get to later in the show.               |
| 38:13      | But the multi action for people who are just starting out and going, okay, so then I would                |
| 38:17      | press this button, this button, this button. Well, it's easier than typing command space,                 |
| 38:22      | [[Safari]] command space, [[Audio Hijack]], command space. What was that third application that                   |
| 38:28      | I needed? Oh, yeah, notes or something like that, you know, you don't need to think you                   |
| 38:33      | don't need to do the typing, you just press, you know, you could have three buttons for                   |
| 38:36      | that or you could just have one button that opens all three things. So, you know, that's                  |
| 38:40      | a great way of getting started for people.                                                                |
| 38:42      | I agreed. And a few other custom ones that are of note, there is one that I don't use                     |
| 38:49      | enough, but I can't help but keep on my [[Stream Deck]]. It's an analog clock, just on a button.              |
| 38:55      | And I have that in the top right of my [[Stream Deck]] and on most of my profiles. And honestly,              |
| 39:01      | I can't remember the last time I wondered what time it was and I looked at the stream                     |
| 39:05      | deck, but there's just a part of me that doesn't have the heart to pull that one out. There's             |
| 39:10      | a counter. Like if you need to do a counter for something related to your work, you can                   |
| 39:14      | put it on a button every time you tap the button, it counts up one. Just, you know,                       |
| 39:19      | there's so many cool things people have done with this. And like Rose said, if you just                   |
| 39:24      | take a look at the app, you'll be amazed at all the different ways people have gone with                  |
| 39:30      | this. Both app-specific, some people have made little games, which I don't get that,                      |
| 39:34      | but you know, go forward if that's your thing. But it is quite remarkable when you get this               |
| 39:40      | thing out of the box, what you can do with a button. And the button, the most important                   |
| 39:48      | button we haven't talked about yet and is the integration with [[Keyboard Maestro]]. Because                  |
| 39:54      | yeah, just like Rose was talking about chaining together different actions on the [[Stream Deck]],            |
| 40:00      | you can, you know, [[Keyboard Maestro]] is the ultimate tool for chaining actions together                    |
| 40:03      | because you can not only say open up this window, but open up this window and put it                      |
| 40:08      | in the lower right corner. You know, it just, you know, the world is your oyster in terms                 |
| 40:13      | of automation on the Mac with [[Keyboard Maestro]]. And you can take any of your [[Keyboard Maestro]]             |
| 40:17      | scripts and attach them to a button. And there's two ways to do that. You want to talk                    |
| 40:22      | through those?                                                                                            |
| 40:23      | Yeah, well, I do because the native integration that comes with [[Keyboard Maestro]] is excellent.            |
| 40:29      | It really is. It's very solid. You can do an awful lot of things with it. But if you                      |
| 40:33      | just want to get started and you're just thinking, I just want to run a [[Keyboard Maestro]] macro,           |
| 40:37      | I don't want to do anything fancy with it. I just want to run a [[Keyboard Maestro]] macro.                   |
| 40:41      | I would actually advise, don't use the native [[Keyboard Maestro]] integration. Use a great                   |
| 40:46      | plug-in. It's under more actions. It's called KM link. And it's by a lovely person who goes               |
| 40:51      | by the handle Corcules. That's with the C, C-O-R-C-U-L-E-S. And what we can put a link                  |
| 40:57      | to the GitHub repo in the show notes as well so that you can get it from there or you can                 |
| 41:03      | get it from more actions, whichever works for you.                                                        |
| 41:07      | But the beauty of the KM link plug-in is when you drag one of those actions over, and I'm                 |
| 41:16      | just going to do this right now live, so you search for KM and then you see KM link, and                  |
| 41:21      | then you can see a title, and then you can select a macro. Now, depending on how many                     |
| 41:26      | [[Keyboard Maestro]] macros you've got and how well or poorly in my case organised they                       |
| 41:34      | are, you may find that you end up using the last modified macro frequently, so I often                    |
| 41:40      | go into my [[Keyboard Maestro]] macros and I add a comment, and then I go back to KM link                     |
| 41:46      | in the [[Stream Deck]] app, select my macro, and then I can remove the comment in the Keyboard                |
| 41:53      | Maestro app or leave it, it's a comment, it doesn't make a difference. And this is great,                 |
| 41:58      | and it's even better if you want to send something to [[Keyboard Maestro]] with it as well. So,               |
| 42:03      | for example, if you want to send it the word calendar or the word zoom or something, you                  |
| 42:08      | can do that. There's a parameter option there as well. I tend not to do that, you know,                   |
| 42:14      | you can but you don't have to. But this means that you can literally just run a Keyboard                  |
| 42:18      | Maestro macro and you don't need to set up a trigger in the [[Keyboard Maestro]] application.                 |
| 42:22      | You can just do it from the [[Stream Deck]] and that's it, and it works. And it's great, it's                 |
| 42:26      | so easy to do. Yeah, I use KM link like 99% of the time to trigger [[Keyboard Maestro]] at                    |
| 42:32      | this point. And one of the additional features of it is that you can move the button, you                 |
| 42:38      | know, with the built-in [[Keyboard Maestro]] support, you need to code it to a specific                       |
| 42:41      | button, which becomes a problem. And with a lot of profiles, you can take a Keyboard                      |
| 42:47      | Maestro KM link script and just copy that and paste it to a different profile or move                     |
| 42:53      | it wherever you want. Again, you can attach custom art to each button. And the way you                    |
| 43:00      | select the [[Keyboard Maestro]] script is you just, it's just a scrolling list. And I actually                |
| 43:04      | have pretty good organisation in [[Keyboard Maestro]]. I have folders and like, like I have                   |
| 43:09      | folders by context and I have folders by apps. So, and the app and the KM link doesn't just               |
| 43:15      | give you a flat list, it gives it to group by folder. So, I can find pretty much what                     |
| 43:21      | I need. One of the ways I use this, and we'll get into this later, is in a specific app,                  |
| 43:27      | I may have a group of [[Keyboard Maestro]] scripts related to it. And if you find a Keyboard                  |
| 43:33      | Maestro script in that app grouping, and then you copy and paste that, then it reopens                    |
| 43:38      | in the exact same section of your [[Keyboard Maestro]] list. So, you don't have to start                      |
| 43:41      | from the top every time. So, that's a little insider hack. But yeah, the ultimate action,                 |
| 43:49      | if you're an automator driving a Mac, is the KM link script, which is pretty remarkable.                  |
| 43:56      | So back to the native [[Keyboard Maestro]] integration with the [[Stream Deck]]. So for this, you have            |
| 44:01      | to set a button ID, and then that button ID is what triggers it in [[Keyboard Maestro]].                      |
| 44:06      | Now, they usually suggest R followed by number, and C followed by number, which is row, whatever,         |
| 44:12      | column, whatever. But the problem with this is if you use row one, column one, on profile                 |
| 44:18      | one, say your default profile, and then you create another profile for writing, and you                   |
| 44:22      | have row one, column one, then both of those do exactly the same thing in [[Keyboard Maestro]].               |
| 44:28      | Now, if that's what you want, that's perfect. But if you're using the [[Keyboard Maestro]]                    |
| 44:32      | integration from [[Keyboard Maestro]] back to [[Stream Deck]] to, say, do things like update                      |
| 44:39      | pictures, then you have to consider whether or not you want to do that for both. So I'm                   |
| 44:44      | using the native [[Keyboard Maestro]] integration very sparingly, and mostly thanks to TJ Luoma,             |
| 44:51      | who we had on the show a while ago, and he talked about this when he was on the show.                     |
| 44:54      | He's got a great little plug-in, or it's a series of macros, actually, for [[Keyboard Maestro]],              |
| 45:00      | which you can download and install. And you set it up, and you specify the number of the                  |
| 45:06      | button or the button ID, whatever it is. So in my case, that's R3C4, because that's where                 |
| 45:11      | it used to be on my old [[Stream Deck]], and I've just dragged it into a new place now because                |
| 45:16      | I'm not using a lot of these buttons this way. And that then goes through, and it tells                   |
| 45:24      | me how many calendar events I've got left in the day, and it changes colour. So just before                |
| 45:29      | I started this, I glanced at it, and it was red because I had something in two minutes.                   |
| 45:33      | And when I tapped on it, it opened up Fantastical for me. And now, because I'm recording automators,      |
| 45:39      | I have Fantastical smiling back at me. And so if you want to be able to change things                     |
| 45:46      | in the [[Stream Deck]] from [[Keyboard Maestro]], you want the native [[Keyboard Maestro]] integration.               |
| 45:51      | If you're just getting started or you just want to run a macro, use the KM link script.                   |
| 45:55      | It's very, very easy, and I would highly recommend that. Both systems are fabulous. I'm not knocking      |
| 46:02      | the [[Keyboard Maestro]] native integration here, but if you just want very simple, KM link                   |
| 46:06      | is your friend. This episode of Automators is brought to you by the Intrazone. I love                     |
| 46:13      | finding a new podcast to listen to, and it's great when you learn something too. If you're                |
| 46:17      | looking for a new show to listen to, the Intrazone is a bi-weekly podcast with conversations              |
| 46:22      | and interviews on how Microsoft SharePoint, OneDrive, and related tech can work for you.                  |
| 46:27      | You'll hear from guest experts behind the scenes and out in the field, so you can see                     |
| 46:31      | how SharePoint fits into your everyday work life to easily share and manage content, knowledge,           |
| 46:36      | and applications. Each show covers a bunch of segments, like news and announcements, a                    |
| 46:41      | focus topic of the week, guest perspectives, FAQs of the week, and upcoming events. And                   |
| 46:46      | the topics for each show are really interesting. There's the Power Platform, APIs and teamwork,           |
| 46:52      | and of course, AI and machine learning too. I recently listened to the episode on the                     |
| 46:57      | portal's journey, which tells you a lot of things about Microsoft, specifically how                       |
| 47:02      | the internal company portal has changed over time, which is actually really interesting                   |
| 47:07      | to me. I love hearing about how these things evolve, and of course, this gives us a lot                   |
| 47:11      | of insight into SharePoint as well. Go ahead and listen to it now to search for the Intrazone             |
| 47:17      | wherever you get your podcasts. That's I-N-T-R-A-Z-O-N-E, or just click the link in the show notes.       |
| 47:24      | Go check it out. Our thanks to the Intrazone by Microsoft SharePoint for their support                    |
| 47:28      | of this show and all of Relay FM.                                                                        |
| 47:31      | All right, so we talked about buttons. I think another fundamental building block of a stream             |
| 47:37      | deck is the profiles, which we've been dancing around. But the idea of a profile, so as you               |
| 47:43      | look at your [[Stream Deck]], there's six, 15, or 32 buttons staring back at you. But that's                  |
| 47:51      | not all you have. You have different profiles, and each profile is an entirely different                  |
| 47:56      | setup of buttons. Profiles are configured in the app under the settings button, so you                    |
| 48:01      | can make custom ones. I have one for my personal life, one for MacSparky, and one for my legal           |
| 48:07      | life. But you can also have them triggered automatically per application. So if I open                    |
| 48:14      | OmniFocus, a whole set of buttons show up that allow me to do OmniFocus things, or if                     |
| 48:20      | I open Microsoft Word, I have one that automatically shows up. And one of the tricks of figuring          |
| 48:26      | out a [[Stream Deck]] is figuring out when you want a manual profile versus an automatic                      |
| 48:30      | one.                                                                                                      |
| 48:31      | Yeah. And actually, David, this is one of the things that prompted me to upgrade to the                   |
| 48:37      | newer or to the larger [[Stream Deck]], because I was trying to do a lot of this automatic                    |
| 48:42      | profile switching. So I had a profile for [[ScreenFlow]] and I had a profile for QuickTime. And I realised    |
| 48:49      | that one of my problems was, is frequently when I'm in [[ScreenFlow]], one of the things I                    |
| 48:54      | need to do is switch to QuickTime and run an action. And by having two separate profiles,                 |
| 49:02      | I was dedicating one button in the [[ScreenFlow]] profile to switch QuickTime and another one                 |
| 49:06      | in the QuickTime profile to switch to [[ScreenFlow]]. It was just, you know, there was a little               |
| 49:12      | bit of, you know, cognitive dissonance, I think I'll go with there, where I was looking                   |
| 49:16      | at it and it's like, but the button I want isn't here. And also every software, especially                |
| 49:24      | when I was doing the upgrade, actually, I noticed that the automatic switching didn't                     |
| 49:30      | happen. So I would switch to QuickTime and I wouldn't have my QuickTime profile on my                     |
| 49:35      | [[Stream Deck]]. I did fix that actually by unlinking, by not telling it was a profile or telling             |
| 49:42      | it wasn't an application-specific profile and then telling it again that it was. But                      |
| 49:47      | now I have the left-hand side, which is 16 buttons, is [[ScreenFlow]] and the right-hand                      |
| 49:52      | side 16 buttons is QuickTime. Now I'm not using all 16 in either case, but it's just                      |
| 49:57      | a useful split for me to do that. And so I switched profiles manually with an action                      |
| 50:03      | in [[Stream Deck]] called switch profile, which I've assigned some funky icons to.                            |
| 50:07      | Yeah. So exactly, you don't have to do either one. And it just depends on your particular                 |
| 50:13      | use. Like if you want it to give you the tool set for the app that you're in, automatically               |
| 50:19      | you can. But like Rose said, if you want to mix tools, I actually frankly prefer contextual               |
| 50:25      | profiles too. Big surprise coming from me, right? But like rather than have a set of                      |
| 50:32      | tools for Microsoft Word, I have a set of tools for editing legal documents. And that                     |
| 50:38      | includes things like Microsoft Word shortcuts. Like one of the things I do in Microsoft Word              |
| 50:44      | often is I put privileged comments in the red lines. Like if I'm reading a document                       |
| 50:49      | for a client, I add a comment and it says in all caps, privileged. So everybody knows                     |
| 50:55      | not to share it with the other side. And then it does a colon and then carriage return.                   |
| 50:59      | And you know, that's something you could do, you know, 20 times every time you read a document            |
| 51:04      | or you could just program a [[Keyboard Maestro]] script that does all of that and then put                    |
| 51:08      | it on a button on your [[Stream Deck]]. And so on the editing legal documents page, that's                    |
| 51:14      | there. But the other, another thing I often do when I'm editing legal documents is I check                |
| 51:18      | the status of a company. Like if my client is going to make a contract with the ACME                      |
| 51:23      | company, hey, I want to look them up on the website to make sure that they're still in                    |
| 51:27      | business and not suspended or anything. And again, I have a [[Keyboard Maestro]] script to                    |
| 51:31      | do all that. And so why would I want to have a Microsoft Word panel only when I could have                |
| 51:39      | it, you know, I can check the status of a company and add a privileged comment all without                |
| 51:43      | switching decks or profiles.                                                                              |
| 51:46      | Exactly. Yeah. No, I'm definitely a big fan of this as well. And I've also found that                     |
| 51:53      | automatically switching is not necessarily what I actually want. I frequently use command                 |
| 51:57      | tab to switch through applications. And every so often I get distracted by things, you know,              |
| 52:03      | world happens, you know, there's a van outside. Oh, is that my UPS delivery with my new M1                |
| 52:08      | Mac mini? You know, other exciting things like that. And so, you know, and then I end                     |
| 52:13      | up in the wrong application and then I'm in the wrong profile. And the thing that bugged                  |
| 52:17      | me for quite a while is I had to dedicate a button in every single profile. Now I'm                       |
| 52:22      | still doing this, but it's a lot easier on a 32-button [[Stream Deck]] than it is on a six                    |
| 52:26      | button [[Stream Deck]]. I'm sure of that. Was I was dedicating one button to going back                       |
| 52:31      | to my default profile. And I found I was pressing that button a lot. And when I say a lot,                |
| 52:36      | I mean, that was my most frequently pressed button on my [[Stream Deck]] by far. I am sure                    |
| 52:41      | of it. And I know because I added a counter into the multi-action. So I can find out.                     |
| 52:47      | And it was, you know, and it was just driving me crazy that I was ending up switching profiles            |
| 52:52      | and I wasn't meant, you know, I wasn't automatically switching back to the right profile. And so          |
| 52:57      | I found by creating my profiles in this fashion, you know, that that doesn't happen anymore.              |
| 53:04      | Because I manually switched to a profile. And so now I'm in my podcasting profile. So                     |
| 53:08      | I pick, do I want automators, nested folders, iOS today, or other, you know, the very creatively          |
| 53:13      | named for whenever I'm guessing on things. Well, I'm doing automators. Well, now I've                     |
| 53:16      | got, you know, our table link, I've got our zoom link, [[Audio Hijack]], you know, finder,                    |
| 53:22      | you know, Google Drive, the Relay FMC MS where ads are overcast for uploading things,                    |
| 53:28      | forecast, lips in, etc. And then when I'm done, I can just go back to my default profile.                 |
| 53:33      | But that's, I've chosen to go here. And I know that's what I'm doing right now. Therefore,                |
| 53:37      | that's where I should be. And that to me was a lot easier to handle than it's automatically               |
| 53:45      | switched. I'm in the wrong profile again, which felt like it was happening a bit too                      |
| 53:48      | much for comfort really. Yeah. And so like I talked earlier, I have                                       |
| 53:51      | the personal MacSparky and legal profile that's like the home base for the three areas                   |
| 53:57      | of my life. Those buttons show up on every profile and they're in the exact same place                    |
| 54:03      | in every profile. And then I have a fourth related button, which is a profile picker                      |
| 54:08      | button where I got just a whole screen full of all profiles. So I can just click that and                 |
| 54:14      | go to one like the, if I want to edit a legal document, but, or make a screencast or whatever             |
| 54:19      | I've made profiles for a bunch of them. In addition, those profile buttons often show                     |
| 54:24      | up in the MacSparky personal and legal profiles so I can stay in context and jump through them.          |
| 54:32      | I know that this probably sounds confusing, but I guess the point is profiles are free.                   |
| 54:38      | Use a lot of them, you know, just make another one if you need it. It's not a big deal.                   |
| 54:42      | The other thing I would say is profiles have advantages over folders in that when you have                |
| 54:48      | a folder, a button is automatically taken up on your screen to go back up a level to                      |
| 54:54      | where you've just come from. Whereas a profile doesn't. But you can have your own action                  |
| 55:00      | to switch back to decks or to switch a profile, sorry, in the [[Stream Deck]], you know, application          |
| 55:10      | and you can choose where to put that, you know, wherever is most convenient for you.                      |
| 55:16      | But by doing a profile, you can also have that same thing available on every page. So                     |
| 55:21      | I was building a home automation folder and I'll come back to that in a minute on how                     |
| 55:26      | precisely, you know, I'm controlling things like my lights and so on because it's not                     |
| 55:29      | just the hue plugin. And I realised I wanted the same thing on every page, but I'd made                   |
| 55:36      | it as a folder. And by making it as a folder, I could copy it to all the other pages, but                 |
| 55:40      | then if I updated it in one place, it wasn't going to be updated everywhere else. And as                  |
| 55:44      | automators should be familiar with, you don't create more work for yourself, you create                   |
| 55:49      | less work for yourself. And the simple way of fixing this was creating a new profile                      |
| 55:54      | called automation, which specifically means home automation. So I should probably rename                  |
| 55:59      | that, but that doesn't matter. And then replacing that folder that was on all of my other profiles        |
| 56:05      | with just a single action, which was switch profile and switch to the home profile with                   |
| 56:10      | the little home button or a home icon on it in yellow because that's the home colour.                      |
| 56:17      | And then that opens that profile every single time. And it has buttons at the bottom actually             |
| 56:23      | to go to my other profile so I can go back to wherever it is that I want to be from there,                |
| 56:28      | which works very nicely, I have to say. But that means that, you know, I have the same                    |
| 56:34      | set of actions available everywhere. So I don't, you know, use muscle memory to press                     |
| 56:38      | the button in the top right, you know, which opens the home thing. And then I press, you                  |
| 56:44      | know, the third one on the second row or something. And oh, but that isn't, oh, right, okay,              |
| 56:49      | I didn't copy it to this profile yet. Okay, so I need to do that. And then I get sidetracked              |
| 56:53      | and there's a rabbit hole and then, oh, squirrel. And oh, actually, you know, I'm kind of hungry.         |
| 56:57      | I'll get some chocolate. And, you know, before you know it, you've lost half a day because                |
| 57:00      | the button wasn't where you expected it to be. So yeah, I'm definitely a big fan of                       |
| 57:05      | the profiles, wherever possible. Folders are like profiles, but just not quite as good.                   |
| 57:12      | I did the same thing. I went down the rabbit hole. I made a folder full of music playlists                |
| 57:18      | that I like. And I was able to use 31 of them, you know, with a folder on my home profile,                |
| 57:24      | on my personal profile. But then I realised I want to access that music from other places.                |
| 57:30      | And suddenly they started like the different folders that I had, started to drift away                    |
| 57:35      | from each other, you know, the different playlists, like I update it one place, not the other.            |
| 57:39      | And then I realised that was madness. And I just turned it into a profile. So I would                     |
| 57:44      | agree. The folders are great, though, they're like profiles that are off the map. You don't               |
| 57:47      | see them. But I would only recommend them in the case that you only want to use it one                    |
| 57:53      | time and in one place. Yeah, yeah. So that's what I'm doing inside my podcasting profile.                 |
| 57:58      | I have folders for automators, nested folders on iOS today, because I don't need those folders            |
| 58:04      | anywhere else. And it's just a useful way of segregating my actions and so on. So when                    |
| 58:09      | I'm looking at the screen in podcasting, then I know that, you know, all of what I'm seeing               |
| 58:17      | is for, you know, iOS today or automators as it is actually right now at this very second.                |
| 58:23      | And you know, when there's a back button, so I can go back to my podcasting profile.                      |
| 58:28      | That's always in the top left, by the way. And which is one of the reasons why I have                     |
| 58:33      | my [[Stream Deck]] on the right, because I'm right handed. And so if I'm, you know, I tend to                 |
| 58:38      | tend to go towards the right side of my [[Stream Deck]]. So that's actually quite useful to have              |
| 58:42      | that button be less automatically accessible. But it just means that all my podcasts are                  |
| 58:49      | on one profile. So I know I'm doing podcasting. And it doesn't matter what podcasting I'm                 |
| 58:54      | doing, I just do podcasting. And then it's there going, Okay, what kind of podcast are                    |
| 58:57      | you doing? It's kind of like a flow chart in many sense, you know, decision tree. Okay,                   |
| 59:02      | so you said you're doing podcasting. What kind of podcasting are you doing? Okay, you're                  |
| 59:05      | doing automators right now. Here are all the buttons you might need. And then here's one                  |
| 59:09      | button, which is just going to help you get set up for everything, because that that is                   |
| 59:13      | something I've been working on.                                                                           |
| 59:15      | Yeah, so I do something similar. But if you go to the MacSparky home profile, there are                  |
| 59:23      | three buttons there, one with the artwork for each of my three podcasts. And if I tap any                 |
| 59:28      | one of those buttons, it goes to an independent profile just for that podcast. So I mean,                 |
| 59:33      | we're doing a little different, but we're kind of accomplishing the same thing. You                       |
| 59:37      | kind of drill into what your work is. But profiles, folders, I mean, these things really                  |
| 59:45      | open up the world for the [[Stream Deck]], no matter which size one you get, whether it's                     |
| 59:50      | six buttons or 32, you actually have quite a few more buttons. And that's one of the                      |
| 59:55      | reasons why I ended up keeping it. I'm like, Oh, this is way more than I thought it was,                  |
| 01:00:00   | because if you get smart about how you put it together, it's it's a lot of buttons, you                   |
| 01:00:06   | know, that you can use for automation.                                                                    |
| 01:00:09   | Yes. Yes, it is.                                                                                          |
| 01:00:11   | So we've got profiles, we've got setting buttons. One of the things you just mentioned, I'd               |
| 01:00:16   | like to just spend a couple of minutes on because I think this is one of the key uses                     |
| 01:00:20   | for a [[Stream Deck]] is what I call setups. And that is you press one button and your computer               |
| 01:00:27   | configures itself for some type of work.                                                                  |
| 01:00:31   | This is something I used to do with a palette and and [[Keyboard Maestro]]. But this was one                  |
| 01:00:37   | of the quick things I put on the [[Stream Deck]] that makes total sense because as you're sitting             |
| 01:00:43   | down to your computer, getting your fingers into a special keyboard shortcut inside, you                  |
| 01:00:49   | know, a working computer takes time and effort. Whereas as you're sitting down, just pressing             |
| 01:00:54   | a button on the [[Stream Deck]] is much easier.                                                               |
| 01:00:57   | Yes, it absolutely is. And this is something I to start with, I was experimenting with                    |
| 01:01:03   | using this combined with a multi action David. So as I was selecting, Oh, I'm doing screen                |
| 01:01:10   | casting now or I'm doing podcasting now, I would I was using a multi action in in screen                  |
| 01:01:17   | deck to both trigger my setup and also switch my profile. And this seemed like a brilliant                |
| 01:01:24   | idea until I realised that sometimes when I when I'm going to podcasting, I'm not podcasting              |
| 01:01:30   | I'm doing podcast preparation. And I needed different series of thing, apps and so on                     |
| 01:01:37   | for that when I'm doing that versus, you know, when I'm when I'm just, you know, doing preparation        |
| 01:01:43   | in which case, I probably just want to open, you know, air table to start with so I can                   |
| 01:01:47   | find the Google doc and go from there. And so I changed that away from being a multi action               |
| 01:01:54   | back to a single action. Well, actually, I just left it as a multi action. And I just                     |
| 01:01:58   | removed my setup button. And I created a separate setup button inside of inside of my profiles,           |
| 01:02:07   | where it says, okay, setup for automators, setup for nest of folders, setup for screen                    |
| 01:02:10   | casting, etc. So that I could easily do that. Because, you know, it's it's one of those                   |
| 01:02:17   | things where once you get that that setup, it really helps. And I'm using cable maestro                   |
| 01:02:23   | for my setup. And I'm guessing you are too, David, this is one where KM link really pays                  |
| 01:02:28   | for itself, because setups is a good example of chain together actions that just really                   |
| 01:02:34   | go beyond the capabilities of the built in actions of the of the [[Stream Deck]]. And one                     |
| 01:02:39   | of the things Rose said, I really want to put an exclamation point on whatever kind                       |
| 01:02:44   | of work you do. It's not just one thing you do, like Rose was talking about podcast recording             |
| 01:02:49   | versus podcast editing, or screencast recording versus screencast editing, or if you're in                |
| 01:02:56   | sales, maybe, you know, preparing proposals versus preparing keynote presentations. And                   |
| 01:03:04   | so think about the different areas of your life. I think a setup should be more narrow                    |
| 01:03:11   | than broad. So, you know, a typical job, there may be seven or eight different setups that                |
| 01:03:17   | you use for different work tasks, you do, where wouldn't it be great if you could push                    |
| 01:03:22   | a button and your computer would automatically configure itself to the ideal circumstance                 |
| 01:03:28   | for doing that, you know, maybe in one of them, you know, you need keynote open and another               |
| 01:03:35   | one you need Microsoft Word or, you know, I don't know, you tell me, but not only with                    |
| 01:03:40   | [[Keyboard Maestro]], can you do that, but you can open a keynote to a specific file or open                  |
| 01:03:47   | [[Safari]] to a specific website and just really configure it exactly the way you need it.                    |
| 01:03:53   | And it takes a little while to do this, but I just cannot emphasise the payoff that you                   |
| 01:03:59   | get if you do this.                                                                                       |
| 01:04:00   | Yeah. And the reason for me why I'm specifically using [[Keyboard Maestro]] versus a multi-action             |
| 01:04:06   | in [[Stream Deck]] to do this is there's a couple of things that I do which aren't, you know,                 |
| 01:04:12   | directly available inside of [[Stream Deck]]. And I figured if I have this macro setup,                       |
| 01:04:18   | then I can change this macro and I can use it on another machine if I need to, you know,                  |
| 01:04:22   | then [[Keyboard Maestro]] macros are automatically synced anyway. So, you know, that's all good.              |
| 01:04:27   | But to start with, I hide all applications. So I hide everything. Now, I did start closing                |
| 01:04:34   | all of my applications, but I found that was a bit of a problem because there are some                    |
| 01:04:38   | applications that don't really like closing. And then you're reopening them again 30 seconds              |
| 01:04:43   | later for this. So I decided to go with hiding all the applications. And then I go through                |
| 01:04:48   | and I open the right applications. But instead of, for example, open [[Safari]] or activate [[Safari]],           |
| 01:04:54   | I don't, I activate a new [[Safari]] window. And then I open the URLs in that. So it doesn't                  |
| 01:04:59   | matter what I was doing before, you know, say, for example, you know, I was researching                   |
| 01:05:04   | the right kind of leggings to buy from Uniqlo. That was something I was doing before this                 |
| 01:05:08   | show. As you do, you know, that's in a separate [[Safari]] window, which also means that when                 |
| 01:05:13   | I finish my podcast recording or my writing or screencasting or whatever it is, I can                     |
| 01:05:17   | close one [[Safari]] window and that stuff is gone. But whatever else it is that I've got                     |
| 01:05:22   | open is still around. And then I also, at the end, I trigger my [[Moom]] layout. And I really                 |
| 01:05:29   | want to thank you for this one, David. [[Moom]] is a game changer for me. I'm still using                     |
| 01:05:34   | [[BetterTouchTool]] for the snapping, though I know [[Moom]] could do it. I've just got it                      |
| 01:05:37   | set up in [[BetterTouchTool\|BetterTouchTool's]]. So I'm just leaving it there. But the [[Moom]] layout where                     |
| 01:05:41   | you can say, okay, so now, now there are these applications, put them specifically in these               |
| 01:05:46   | places that these specific sizes is absolutely genius and has changed my workflow for the                 |
| 01:05:51   | better. And so I'm really grateful to you for that, for recommending that recently.                       |
| 01:05:57   | Well, you know, I was fighting doing this in keyboard Maestro. And as much as I love                      |
| 01:06:00   | keyboard Maestro, setting up specific screen sizes is kind of tedious in keyboard Maestro.                |
| 01:06:07   | It involves math, you know, whereas [[Moom]], you just drag it and then you save it as a                      |
| 01:06:11   | custom size and put a custom keyboard shortcut on it. And then you can trigger that keyboard              |
| 01:06:17   | shortcut with keyboard Maestro or even with just the [[Stream Deck]]. So, so it really makes                  |
| 01:06:22   | it easy to set these up. And as, as your setups, like Rose was saying, hide all first, that's             |
| 01:06:28   | the necessary first step for these setup macros. And then you open up the windows and then                |
| 01:06:33   | you put them exactly on the screen where you want them to be using those [[Moom]] shortcuts.                  |
| 01:06:38   | And you open [[Safari]] to the browser tab you want. And then, you know, you open pages to                    |
| 01:06:43   | the pages document and you just set everything up on your screen ideally. And, you know,                  |
| 01:06:49   | I think I'm, I'm talking about this too much, but it just delights me when I push that button             |
| 01:06:56   | and my computer, it just responds to me like, okay, Dave, you want to do legal research.                  |
| 01:07:01   | Here is the ideal legal research screen for you. Now sit down and get to work. And it                     |
| 01:07:06   | just works, you know, and, and putting it on a [[Stream Deck]] button is like the, it's                       |
| 01:07:12   | like the icing on the cake because you push the button as you're sitting in the chair.                    |
| 01:07:17   | By the time you settled in your chair, your computer is just sitting there waiting for                    |
| 01:07:20   | you to do exactly what you're there for.                                                                  |
| 01:07:22   | Yeah. And the other thing I like about doing this in keyboard Maestro rather than the stream              |
| 01:07:27   | deck applications, keyboard Maestro can, can just stay open in my dock. And especially                    |
| 01:07:31   | when you're going through and setting these things up, you will forget applications or                    |
| 01:07:35   | you'll add something that you only use one in every five times, you actually do this                      |
| 01:07:39   | setup and things like that. And you can easily, you know, just click on keyboard Maestro in               |
| 01:07:44   | your dock and go through and fix that and tweak things. And, you know, you may set,                       |
| 01:07:52   | you know, everything up and it may seem absolutely perfect, but at some point you're going to             |
| 01:07:55   | want to tweak something and change it. And it's really nice if you, you can do that easily.               |
| 01:08:01   | And I just find that, you know, this, the [[Stream Deck]] in particular for me has made                       |
| 01:08:06   | it much easier for me to remember to press these buttons because they're right there                      |
| 01:08:11   | in my face. And, you know, and I've, I've got all these automations and I've been using                   |
| 01:08:17   | them for ages and that's fine. But I was using a lot of them less frequently than I should                |
| 01:08:22   | have been because, you know, we're humans. One of our default ways to do things is the                    |
| 01:08:27   | way we've always done things. So I would do command space, open this command space, open                  |
| 01:08:31   | that. And then I, you know, started with [[Stream Deck]] and I had different buttons for things.              |
| 01:08:35   | And so instead of pressing command space and typing something, I pressed the key, the,                    |
| 01:08:38   | the [[Stream Deck]] button to open the folder. And then I pressed this button to open that                    |
| 01:08:41   | up and this button to open that up and this button to open that up. And I would skip one                  |
| 01:08:45   | because, oh, I don't need [[Audio Hijack]] just yet. I need [[Audio Hijack]] in a minute. And                     |
| 01:08:49   | things like that. And that's just, you know, it's a little bit silly in hindsight, looking                |
| 01:08:53   | back at that code for us. Why did you do that? But the reality of it is, is I was thinking                |
| 01:08:58   | based on the way I was working and I needed to just take a little while and look at the                   |
| 01:09:02   | opportunities for improvement. And I still have all of those buttons for the individual                   |
| 01:09:07   | applications because I used them as an application switcher now. So, you know, I've pressed my            |
| 01:09:12   | setup button for automators. But guess what? If I want [[Audio Hijack]] to pop to the front,                  |
| 01:09:17   | I just press the [[Audio Hijack]] button and it pops to the front. Or I've, you know, and                     |
| 01:09:22   | I have a [[Safari]] button and a zoom button. I actually have two zoom buttons, one to join                   |
| 01:09:26   | the automators meeting every time we record and another one to just activate zoom so that,                |
| 01:09:34   | you know, I can see and I can make sure that zoom is recording as well and things like that.              |
| 01:09:38   | And it's amazing, you know, how much my workflow has evolved. And I'm glad that I've got the              |
| 01:09:43   | 32 buttons. So I've got a bit of, it's not white space, it's black space on most of my                    |
| 01:09:47   | profiles because that's going to get filled pretty soon.                                                  |
| 01:09:50   | Yeah. And the setups, I know every time we talk about automation, there is a part of                      |
| 01:09:55   | me that's like, am I ever going to get that time back? Like at the time I put into setting                |
| 01:09:58   | this automation up, is it going to pay for itself over time? And I'll tell you that                       |
| 01:10:03   | there is almost no sure bet that it will pay off than in putting these custom setups together,            |
| 01:10:09   | whether or not use a [[Stream Deck]].                                                                         |
| 01:10:12   | This episode of the automators podcast is brought to you by ExpressVPN, high speed,                       |
| 01:10:18   | secure and anonymous VPN services. Go to expressvpn.com/automators and get an extra three months    |
| 01:10:26   | for free. A few decades ago, it was easy to be a private person. What's changed? Well,                    |
| 01:10:32   | to begin with the internet, think about everything you've browsed, searched for, watched or tweeted.      |
| 01:10:38   | The sad truth is that data can be crawled through collected and aggregated by third parties.              |
| 01:10:44   | Being your private life exposed for others to see was once something only celebrities                     |
| 01:10:48   | worried about. But in an era where everyone is online, everyone can be a public figure.                   |
| 01:10:54   | To keep our data private when we go online, we can turn to ExpressVPN. There are hundreds                 |
| 01:11:00   | of data brokers out there and their sole business is to buy and sell data. The worst part is              |
| 01:11:05   | they don't have to tell you who they're selling it to or get your consent. One of these data              |
| 01:11:10   | points is your IP address, which is used to uniquely identify you and your location. But                  |
| 01:11:15   | with ExpressVPN, your connection gets rerouted through an encrypted server and your IP address            |
| 01:11:21   | is masked. So when you turn on ExpressVPN, you're given a random IP address shared by                     |
| 01:11:26   | other ExpressVPN customers. That makes it more difficult for third parties to identify                    |
| 01:11:31   | individual people and harvest data. And the best part is how easy ExpressVPN is to use.                   |
| 01:11:37   | No matter what device you're on, phone, laptop or smart TV, all you have to do is tap one                 |
| 01:11:42   | button to get protected. I'm a happy ExpressVPN customer and I have been so for years. It's               |
| 01:11:48   | a very fast service and it's very painless to use. So you don't get any of the usually                    |
| 01:11:54   | expected downsides of VPN services with ExpressVPN. It just works. So if like me, you believe             |
| 01:12:01   | your data is your business, secure yourself with the number one rated VPN on the market.                  |
| 01:12:07   | Get expressvpn.com/automators and get an extra three months for free. That's E-X-P-R-E-S-S          |
| 01:12:14   | VPN.com/Automators. Go to expressvpn.com/automators to learn more. And our thanks             |
| 01:12:21   | to ExpressVPN for their support of the Automators and all of Relay FM.                                    |
| 01:12:28   | So David, we've been dancing around profiles and how to use them, et cetera. I think it's                 |
| 01:12:33   | time that we actually talked about our specific profiles right now and how we're using them               |
| 01:12:38   | and what we're doing. Because there's nothing better than real examples for our lovely listeners,         |
| 01:12:43   | right?                                                                                                    |
| 01:12:44   | You bet. And I always learn something when I hear what you're doing with your stream                      |
| 01:12:47   | back rows. So I'm ready. Teach me.                                                                        |
| 01:12:51   | Well, I'm going to start at the top. And the top is my default profile. So this is the                    |
| 01:12:55   | one. It's marked as the default in the [[Stream Deck]] application. And I have a back button                  |
| 01:13:01   | which goes to this in the bottom right corner of every other profile. And this is just a                  |
| 01:13:06   | button I've set up. It switches to my default profile. And that just means that I can always              |
| 01:13:10   | come back here. And the reason why I always want to come back here is this is the one                     |
| 01:13:14   | that's got links to all of my other profiles. So, you know, if I, you know, want to switch                |
| 01:13:22   | from podcasting to screencasting or to writing, or I just want to, you know, I'm finished and             |
| 01:13:28   | I just want to browse around and do things, I can do that. And I do that from, you know,                  |
| 01:13:34   | the default profile. So as well as links to my other profiles here, which I've got some                   |
| 01:13:38   | custom icons, mostly thanks to [[Stephen Millard\|Stephen Millard's]] excellent scripts. So thank you there. I've               |
| 01:13:43   | also got, well, I've got the link to my home automation profile, which is on every profile                |
| 01:13:50   | actually. But I also have a, I also have links to default applications. I'm calling them                  |
| 01:13:59   | default applications. These are the applications that would usually live in my dock, but my               |
| 01:14:03   | dock auto hides. And so this includes things like [[OmniFocus]]. I've got the [[Fantastical]]                  |
| 01:14:12   | script from [[Timothy Luoma\|TJ Luoma]] because that opens Fantastical for me. I have [[Obsidian]], [[Drafts]], [[Messages]],        |
| 01:14:18   | [[Deliveries]], [[NetNewsWire]], things like that here. And these are just applications. The                     |
| 01:14:22   | A I use very frequently and, **I** want to be using frequently. And so you'll notice [[Safari]]                  |
| 01:14:30   | isn't there. That's probably because [[Safari]] is my most used application. So it's open                     |
| 01:14:34   | all the time anyway. But it's also because I don't necessarily want to be spending huge                   |
| 01:14:38   | amounts of time in [[Safari]]. So, you know, I don't have that there. And I'm looking for                     |
| 01:14:45   | some other buttons to fill this in with. But at the same time, I want to be smart about                   |
| 01:14:51   | how I do this. I don't just want to chuck buttons on there that I then don't use because                  |
| 01:14:56   | my brain will look at it and think, oh, there's a thing. Okay. And it won't see that as a space           |
| 01:15:00   | that could be replaced, whereas by leaving it as black space, you know, my brain knows                    |
| 01:15:04   | it can be replaced.                                                                                       |
| 01:15:05   | Like I said earlier, I have a personal max parking and legal and each one of those has                    |
| 01:15:11   | a bunch of jumping off points to common things I do. Like on my personal one, which I've                  |
| 01:15:17   | actually duplicated this one also on my MacSparky and legal, there's a process email                    |
| 01:15:24   | one, which is kind of like a setup. But what it does is it puts my email application on                   |
| 01:15:28   | the left side of the screen. It puts on me focus in the right side, top half and fantastic                |
| 01:15:35   | how in the right side bottom half, because I usually find when I process email, the two                   |
| 01:15:40   | things I need is my task list and my calendar. And it just, I push a button and it opens                  |
| 01:15:45   | all that up. And whether I do it on the personal page or the max parking page or the legal                |
| 01:15:51   | page, it opens up different emails and different calendars because with keyboard, am I sure               |
| 01:15:55   | you can do that?                                                                                          |
| 01:15:56   | So I get to have the screen set up for processing email based on what part of my life I'm sitting         |
| 01:16:03   | in at the moment. And that's the kind of stuff I like to do with the [[Stream Deck]], you know,               |
| 01:16:09   | because I feel like that's very fast.                                                                     |
| 01:16:11   | Yeah. And I love that sort of thing as well. Another two buttons, which I've forgotten                    |
| 01:16:16   | to talk about, I should probably set these up as a switch, but I frequently switch them                   |
| 01:16:20   | on screen. So I'm not sure how well that's going to work. If I do that as a switch in                     |
| 01:16:23   | [[Stream Deck]], I've got two buttons here, which are speaker outputs. And I'm using a plug-in                |
| 01:16:29   | by somebody called Fred Emmett. And he's written two plugins, one, which mutes the                        |
| 01:16:34   | input on your Mac, but this only works if you're using like a USB microphone or the                       |
| 01:16:39   | built-in microphone. It doesn't work if, like me, you're using an XLR interface. So I'm                   |
| 01:16:44   | not using that, but I am using the audio switcher, which switches your audio source. And this             |
| 01:16:50   | changes from either my XLR interface, where I have headphones plugged in to my monitor,                   |
| 01:16:58   | where I've got speakers plugged in. And I have speakers plugged into the monitor because                  |
| 01:17:01   | then it works for my work laptop as well as my personal Mac mini. And it's great to just                  |
| 01:17:09   | have that button there because then I can, if I am watching a YouTube video, my Mac,                      |
| 01:17:13   | which I do, I can say, actually, no, I want to listen to this on the speakers and press                   |
| 01:17:17   | that button. Because of course, whenever I start podcasting, then the audio input has                     |
| 01:17:21   | to be set to, or yes, or the audio output has to be set to my XLR interface.                              |
| 01:17:27   | Nice. Yeah, I've looked at that one and I've not used it because of the XLR problem. I                    |
| 01:17:34   | would love the ability to switch the input, but I guess that's an Apple thing because                     |
| 01:17:39   | all the apps-                                                                                             |
| 01:17:40   | The switch to the input is what I'm doing. So that works really well. And I've got a                      |
| 01:17:44   | link to that one in the show notes for everyone.                                                          |
| 01:17:46   | All right, I'll have to check that out. For me, it's like anytime I find myself fiddling                  |
| 01:17:50   | with Windows to do something that I do more than once, that's an excuse to set up a stream                |
| 01:17:56   | deck button for it.                                                                                       |
| 01:17:58   | I just did one over the weekend where I was paying bills and I realised, you know, every                  |
| 01:18:02   | time I pay bills, I go to this one website and then I go to my email. There's like a                      |
| 01:18:08   | few things I do every time I pay bills. And how come I do this manually every weekend?                    |
| 01:18:13   | And so I set up a button for that. I'll tell you one I'd like your advice on is Zoom. So                  |
| 01:18:21   | we all do a lot of Zoom calls these days. And this is one where I actually do use the                     |
| 01:18:25   | auto switching on because whenever I seem to go into Zoom, I want to turn the camera                      |
| 01:18:31   | off or on. And the way I did it, because now there's a plug in for it, which I haven't                    |
| 01:18:35   | used yet. But I just went in [[Keyboard Maestro]] and I wrote [[Keyboard Maestro]] scripts for                    |
| 01:18:40   | all the keyboard shortcuts in Zoom.                                                                       |
| 01:18:42   | Ah, you're using the keyboard shortcuts. So this is something I was doing with QuickTime.                 |
| 01:18:48   | But I found keyboard shortcuts just weren't necessarily working super well. So instead                    |
| 01:18:52   | of switch to using the menu approach, where you can click on a specific menu item with                    |
| 01:18:58   | [[Keyboard Maestro]], which works really well for me.                                                         |
| 01:19:00   | Yeah. So I've done both with the Zoom. I mean, if there's a keyboard shortcut, I just use                 |
| 01:19:03   | the keyboard shortcut. If there's not, there's usually a menu item. And in [[Keyboard Maestro]],              |
| 01:19:08   | you can set a one action script to select an item in the menu.                                            |
| 01:19:14   | So I basically scripted all of the things you want to do, you know, turn the microphone                   |
| 01:19:18   | off, mute the mic, turn the camera on, turn the camera off, admit all people and mute                     |
| 01:19:23   | the channel. You know, the usual things you do when you're running or participating in                    |
| 01:19:28   | a Zoom call. And because I've been experimenting lately with adding my fancy camera on a tripod           |
| 01:19:36   | next to the, or on a pole next to the table. So I can use that. I can actually switch between             |
| 01:19:41   | cameras too with those buttons. But I did it manually. I just wrote [[Keyboard Maestro]]                      |
| 01:19:46   | scripts and I use the KM link thing, like, you know, 10 times and programmed all those                    |
| 01:19:51   | buttons in. But I'm starting to think, I don't know if I want that to be automatic or if                  |
| 01:19:56   | I should just build that into some of my other profiles. How do you do Zoom automation?                   |
| 01:20:01   | Well, I think it really depends on what you want. So for me, the primary thing that I                     |
| 01:20:06   | want when I am doing any kind of Zoom call is the mute button. So I can toggle myself                     |
| 01:20:13   | muted and also so I can toggle my camera on and off. And the Zoom plug-in or action group                 |
| 01:20:20   | that's available in the more action section is, you know, it lets you, you know, turn                     |
| 01:20:30   | your mute on and turn your mute off. And I've got these buttons in front of me and I can't                |
| 01:20:33   | click them right now because otherwise our backup recording will get nuked, which would                   |
| 01:20:37   | not be great. Well, I mean, video would be all right, but we probably don't want me to                    |
| 01:20:41   | mute in that just in case. But I mean, that's what I'm using. And that, for me, works fine.               |
| 01:20:48   | And these are just mute toggles. And there's also a share toggle. There's a focus button,                 |
| 01:20:53   | which I've yet to experiment with. I'm just going to try pressing that right now, actually.               |
| 01:20:56   | Oh, and I just activated Zoom and switched to it as I would expect and then focus toggle                  |
| 01:21:02   | while I presume switch back to whatever else I was using. So it's just like using command                 |
| 01:21:07   | tab. So, you know, I mean, it's good. What I like about this is you don't like if people                  |
| 01:21:13   | are, if you're hosting a Zoom meeting, then there's like buttons for mute all participants                |
| 01:21:20   | or ask everybody to unmute and things like that. And also for leaving the meeting, though                 |
| 01:21:25   | pro tip, you can also just do that with command w. And if you if you leave the meeting or want            |
| 01:21:32   | to end the meeting, that works too. So, you know, that that's another way of doing it.                    |
| 01:21:38   | But the beauty of this is people won't need to sit out there and keyboard master macros                   |
| 01:21:42   | and things like that. And if something changes, then the person behind this plugin is going               |
| 01:21:45   | to go ahead and do it. And of course, this has got icons automatically associated with                    |
| 01:21:49   | it. Whereas if you do everything with the KM link plugin, you're going to want to change                  |
| 01:21:53   | each of those icons, because otherwise you're going to have a row or multiple rows of the                 |
| 01:21:57   | same icon, and you won't necessarily know which one that is unless you put titles on                      |
| 01:22:02   | them. Yeah, I think that's that's good advice. But Zoom Zoom is definitely one where this                 |
| 01:22:08   | comes in handy because let's say suddenly the camera is on and you don't want it to                       |
| 01:22:13   | be on. Are you going to muscle your way through the menu system? Or are you going to immediately          |
| 01:22:19   | remember the keyboard shortcut? Or are you just going to tap a button? I mean, realistically,             |
| 01:22:23   | I have a physical cover over my camera, not because I'm afraid of nefarious people activating             |
| 01:22:28   | it, but because this way I know that people can't see me, even if I do something stupid                   |
| 01:22:32   | and press the button. And honestly, if I'm if I'm in a panic, I'm probably not going                      |
| 01:22:37   | to look at my [[Stream Deck]] and go, okay, this is the toggle video button, I will just activate             |
| 01:22:42   | zoom and click the video button in the bottom. Because that is always there to start and                  |
| 01:22:48   | stop video unless you don't have a camera attached in which case it's still there, it's                   |
| 01:22:51   | just grayed out. So you're fine anyway. But yeah, I mean, I have experimented with adding                 |
| 01:22:59   | some of these buttons to individual profiles that are created for certain uses. So for                    |
| 01:23:08   | example, at the meeting that I do every Tuesday afternoon, where I start by opening the Zoom              |
| 01:23:18   | link and the Google Docs link, I then activate a profile. And this profile has very few buttons           |
| 01:23:23   | in it, it has a button for the Google Doc, and then a button from to activate [[Safari]].                     |
| 01:23:31   | So if I'm if [[Safari]] is not activated, I can just switch back to that if it is open. It's                  |
| 01:23:36   | got a button for zoom. And then it's got the toggle video button, the toggle mute button                  |
| 01:23:41   | and the ask all to unmute button. Because that's, you know, something that I occasionally                 |
| 01:23:47   | need to do, I need to ask other people to unmute. But, you know, most of that profile                     |
| 01:23:51   | is empty. But then when I'm done, I go back to my main profile and that's it. And I'm                     |
| 01:23:55   | finished. And it helps me stay on task because the other buttons, which could be enticing,                |
| 01:23:59   | just aren't there for me.                                                                                 |
| 01:24:00   | Yeah, you know, that's, that's the answer to my question, what I need to do is I just                     |
| 01:24:04   | need to make profiles for different kinds of meetings, like the I have a mastermind                       |
| 01:24:09   | group I'm in, and I could have a profile for that, which gets me to the key documents                     |
| 01:24:13   | and whatnot. I could have a profile for like a client zoom call, and it would have it would               |
| 01:24:18   | open the draft template that gets me to the client notes. And yeah, I think that's what                   |
| 01:24:23   | I'm going to do is just make some more, you know, the answer is always more profiles,                     |
| 01:24:27   | I think.                                                                                                  |
| 01:24:28   | Yes. Yeah. I mean, profiles, I mean, as we said before, they're free. The KM link plugin                  |
| 01:24:33   | is free. You know, the only thing that you would need to buy is either the physical                       |
| 01:24:37   | [[Stream Deck]], which I will admit is is not free, or, you know, the subscription, which                     |
| 01:24:43   | is $1.99 a month on your iPhone to do that. And unfortunately, it doesn't work on the                     |
| 01:24:48   | iPad. The iPad doesn't give you a 32 button [[Stream Deck]], David. I think [[Elgato]] are missing                |
| 01:24:53   | a trick there.                                                                                            |
| 01:24:54   | Yeah.                                                                                                     |
| 01:24:55   | But something you said about [[Drafts]] leads me to something I mentioned earlier, which                      |
| 01:24:58   | is my home automation profile.                                                                            |
| 01:25:01   | So tell me some of your favourite profiles that we haven't mentioned today.                                |
| 01:25:05   | Well, I mean, I've talked about my podcasting profile, but I haven't really talked about                  |
| 01:25:10   | my my screencasting profile. And one of the things I've done here is I've I feel keep                     |
| 01:25:14   | on my stream macros, which just do the little things that I I frequently do for myself.                   |
| 01:25:21   | So for example, there when I'm editing a [[ScreenFlow]] for screencasts online, I frequently                 |
| 01:25:29   | leave notes to myself. And then I go back. And these notes are chapter markers for anybody                |
| 01:25:35   | familiar. And I go back and I just add done to it when I'm done. And then I go through                    |
| 01:25:39   | and I review my list of chapter markers. And then I delete the ones that I don't need to                  |
| 01:25:43   | send off. Because, you know, them having a whole list of, you know, Rose, you need to                     |
| 01:25:47   | rerecord this section, which I noticed to myself does not make sense for them at all.                     |
| 01:25:52   | So I I have a button, which so I just double click on the chapter marker in [[ScreenFlow]].                  |
| 01:25:59   | And then I have two buttons actually on my on my my [[ScreenFlow]] deck for this, I have                     |
| 01:26:05   | one that says done and one that says OK. And what this does is it just presses command                    |
| 01:26:09   | on the left button, it pastes done space dash space or OK space dash space and it hits enter.             |
| 01:26:14   | But this means it's always spelled the same, because it would be amazing, I would look                    |
| 01:26:18   | at a [[ScreenFlow]] at the end of doing my editing, and it would be done spells in about 16 different        |
| 01:26:23   | ways, you know, D N O E and different capitalisations, the whole works. And this way it's just consistent |
| 01:26:31   | and I can just scan down and anything that's not got that hyphen in front of it, or that                  |
| 01:26:36   | you know, there's four characters in the hyphen, and then I just know, OK, that do I need to              |
| 01:26:39   | look at this? No, it's a chapter marker. That one's good. OK, that one stays. And yeah,                   |
| 01:26:45   | and so, you know, that's one of the things I've done. And similarly, for a quick time,                    |
| 01:26:49   | to start new audio and video recordings, and this is mostly the new video, new movies.                    |
| 01:26:55   | That's how I record my iPhone or my iPad, because you get much better resolution. I'm                     |
| 01:27:00   | using the the menu action from [[Keyboard Maestro]]. But then I have another button below to start            |
| 01:27:06   | recording. And what this does is it clicks the recording button in quick time, as it                      |
| 01:27:12   | knows what that looks like. So it looks for that. And then it activates [[Audio Hijack]],                     |
| 01:27:17   | and it clicks the recording button there. And this means that I get two recordings at                     |
| 01:27:23   | the same time, because I realised at one point I've recorded everything in in quick                       |
| 01:27:27   | time. And I'd forgotten to press the button in [[Audio Hijack]] or vice versa. And I always                   |
| 01:27:32   | record a backup of my audio. Perhaps it's a weird paranoia thing that the audio that                      |
| 01:27:36   | comes out of [[Audio Hijack]] tends to be better, in my case. But you know, I've sometimes had                |
| 01:27:40   | it where I've got the audio and I don't have the video or I've got the video and I don't                  |
| 01:27:43   | have the audio. And you know, it's it's just a pain when that happens. And so this way,                   |
| 01:27:48   | you know, I've got buttons that just do things for me. This genuinely does make my life easier,           |
| 01:27:54   | because I have a button and it's red. And it's just, you know, it's a little red dot                      |
| 01:27:58   | and it's just the recording dot and I just press it and it starts my recording and that's                 |
| 01:28:01   | easy. Yeah, like the screen casting, the application                                                      |
| 01:28:05   | [[ScreenFlow]] is a remarkable app. But for some reason, they have a lot of keyboard shortcuts              |
| 01:28:10   | that tie your fingers and knots and even like ripple delete and some of them always feel                  |
| 01:28:16   | to me very awkward to try and get my fingers around all of them, especially when I'm in                   |
| 01:28:20   | the middle of recording. So all of those weird even start and stop recording, I've added                  |
| 01:28:26   | buttons to screen casting my screen casting profile. And I do all of that just on the                     |
| 01:28:33   | [[Stream Deck]] and I just press a button and it seems like it's just so much easier to                       |
| 01:28:37   | do it that way. And I would recommend that, frankly, if you have any app in your life                     |
| 01:28:42   | that has a bunch of shortcuts that you wish you'd use, but it's hard to remember them,                    |
| 01:28:47   | you can always make a profile on a [[Stream Deck]] and just program all those shortcuts into                  |
| 01:28:52   | the buttons. And it just makes it really easy. Yeah.                                                      |
| 01:28:56   | And not only does that make it easy for you, if there's someone in your life who doesn't,                 |
| 01:29:00   | you know, really, it doesn't nerd out on computers. It's really handy too. Like my wife does a            |
| 01:29:05   | lot of zoom calls as well. And she often does them on my computer. And she loves the stream               |
| 01:29:12   | deck, you know, she loves that she can turn the camera off and on with a very easily recognisable         |
| 01:29:18   | button on the [[Stream Deck]]. Because if you asked her to learn the keyboard shortcut to                     |
| 01:29:22   | turn the camera off and on, she would just laugh at you, you know, she's not going to                     |
| 01:29:25   | do that. So I do feel like that's a whole category of use for [[Stream Deck]] is like app                     |
| 01:29:31   | shortcuts. Although I would call it app shortcuts plus because you can only not just do the               |
| 01:29:39   | keyboard shortcuts, but you could run it through a [[Keyboard Maestro]] script and do way more.               |
| 01:29:44   | Like you could say, open this specific window and put it right here. Like with the with                   |
| 01:29:49   | OmniFocus, I often turn off the inspector window, but I can automate that through a                       |
| 01:29:53   | [[Keyboard Maestro]] script. Or I can just put a short a [[Stream Deck]] button. And I have one                   |
| 01:30:00   | with an arrow pointing right, which is where the inspector is. If I tap that, the inspector               |
| 01:30:03   | disappears. And I know there's a shortcut for it, but I never can seem to remember it.                    |
| 01:30:07   | So now I've just put a button on it.                                                                      |
| 01:30:09   | Yep, that that I think is is the thing it's much easier to do. And one of the things I                    |
| 01:30:14   | found, David, maybe you can give me some advice with this is a [[ScreenFlow]] loves to hijack                |
| 01:30:20   | keyboard shortcuts. And I have changed and removed the keyboard shortcut for [[ScreenFlow]]                  |
| 01:30:25   | for starting a screen recording about 80,000 times. Now it feels like it hasn't been that                 |
| 01:30:30   | many. But whenever [[ScreenFlow]] is open, and I try to do quick capture and [[Drafts]], which                     |
| 01:30:34   | is command shift to [[ScreenFlow]] says, try to start recording failed start recording because               |
| 01:30:39   | your device was not connected or whatever it is. And then it's like, okay, that's fine.                   |
| 01:30:42   | Because I didn't want [[ScreenFlow]]. I wanted [[Drafts]]. So I've ended up actually changing                    |
| 01:30:46   | the keyboard shortcut for [[Drafts]]. And then I've got a hot key on my on my [[Stream Deck]]                     |
| 01:30:49   | and I've got a hot key on my keyboard, both of which open the quick capture and [[Drafts]]                   |
| 01:30:53   | for me. But I don't know what it is about [[ScreenFlow]], but it does not like me changing                   |
| 01:30:57   | the keyboard shortcuts in it, for whatever reason, especially if you want to leave it                     |
| 01:31:01   | blank, then it gets very unhappy and it just resets it.                                                   |
| 01:31:04   | That's so funny. We've never talked about this, but I could never get it to stick either.                 |
| 01:31:07   | So I ultimately rewrote the shortcut for [[Drafts]]. Because that that's stuck and I also did give            |
| 01:31:13   | it a button. So there you go.                                                                             |
| 01:31:16   | I guess maybe we we both need to file a report or tell a stream that that's broken. I thought             |
| 01:31:22   | I was doing something wrong.                                                                              |
| 01:31:23   | I just want them to work on nothing but gain the waveforms to, you know, reliably render                  |
| 01:31:28   | and then then I'll think about other things once they fix that other uses for for specific                |
| 01:31:35   | profiles like it just depends on, you know, whatever it is you do, if you work in spreadsheets,           |
| 01:31:39   | make a profile for spreadsheets, if you write documents, make it for that. But I think the                |
| 01:31:45   | key thing here is just to remember that, you know, putting that custom list of buttons                    |
| 01:31:50   | together for each context of your work will make you work faster. And it also I think                     |
| 01:31:56   | really helps you stay focused. Like it's much harder to go get lost in an email hole or                   |
| 01:32:01   | a [[Safari]] tab hole when your computer keeps putting itself together exactly how you need                   |
| 01:32:06   | it to get your work done.                                                                                 |
| 01:32:08   | Yep. And I think I think that's the thing, you know, by doing this, I'm, you know, I've                   |
| 01:32:13   | struggled a little bit with my concentration during the pandemic, especially in certain                   |
| 01:32:17   | meetings at work, which are generally unrelated to me. But this way by having a meeting button,           |
| 01:32:22   | you know, I fix that, you know, everything else gets hidden or closed. In some cases,                     |
| 01:32:26   | you know, I just straight up close applications, which I know will will distract me. And, you             |
| 01:32:32   | know, and, and this means that then I've got just the things in front of me that I need.                  |
| 01:32:37   | And then when that's done, I press the button, I say, okay, what am I doing now? You know,                |
| 01:32:40   | I pop it open my calendar and check and then I go, okay, well, you know, I've got three                   |
| 01:32:44   | hours, so I can go back to programming. That's, that's a good amount of time or I've got 45               |
| 01:32:49   | minutes, let's hop into the ticket system and do some troubleshooting and, you know,                      |
| 01:32:53   | the switching to those contacts and just having those applications open and, you know, reopening          |
| 01:32:58   | my mail application and things like that automatically as well or quitting my mail application depending  |
| 01:33:04   | on what it is. It, you know, it does make a big difference. And you might not think                       |
| 01:33:09   | that to start with, but it for me, it certainly has. And at the very least, you know, making              |
| 01:33:16   | sure that you've got all the right applications open, prevent you from fumbling around at                 |
| 01:33:21   | the last minute going, oh, shoot, I don't have zoom open or something like that.                          |
| 01:33:25   | I want to talk about home automation with it, but we're going to take an ad break before                  |
| 01:33:29   | that. But before we do that, my last profile I want to share in this vein is my audio profile             |
| 01:33:36   | is a bunch of my favourite music playlist and the thunderstorm sounds and the other stuff                  |
| 01:33:44   | I want for white noise. And I've got that all in one profile. I use it all day long.                      |
| 01:33:48   | I just love going to that and pressing the button with the cover of a Miles Davis album                   |
| 01:33:53   | on it and then hearing Miles come through my speakers. I love it.                                         |
| 01:33:56   | That is great, David. I'm really pleased that you've got that. I'm not doing that because                 |
| 01:34:01   | most of the time I am playing from my iPhone to all of the [[AirPlay]] speakers because I live                |
| 01:34:06   | on my own. So that means that my speakers are mine and I just have the same music playing                 |
| 01:34:10   | everywhere. And I'm looking forward actually to my Sonos Roam arriving. I should arrive                   |
| 01:34:14   | hopefully just before this episode releases, but we're recording a little bit in advance                  |
| 01:34:18   | here so I can also have music in the bathroom. So that'll be good.                                        |
| 01:34:25   | This episode of Automated is brought to you by [[DEVONthink]], the flagship product from                     |
| 01:34:28   | Devon Technologies. [[DEVONthink]] is the most professional document and information management              |
| 01:34:33   | application for the Mac. It's the one place for storing all your documents, snippets,                     |
| 01:34:38   | or bookmarks and working with them. The integrated AI assists you with filing and searching or            |
| 01:34:43   | the extensive search language with advanced billion search operators means you'll never                   |
| 01:34:47   | lose anything again. [[DEVONthink]] features a flexible sync system that supports many cloud                 |
| 01:34:52   | services or lets you synchronise over the local network too with everything securely                      |
| 01:34:57   | encrypted. This gives you the choice for however syncing works best for you. It has smart rules           |
| 01:35:03   | and flexible reminders that let you automate all parts of your workflow and delegate boring               |
| 01:35:07   | repeating tasks. Let [[DEVONthink]] automatically organise your data with the rules you define.              |
| 01:35:14   | [[DEVONthink]]'s [[AppleScript]] dictionary is one of the largest on the Mac. There's no                        |
| 01:35:17   | part of [[DEVONthink]] that can't be automated. Extend [[DEVONthink]]'s functionality with your                 |
| 01:35:21   | own commands by adding them to its Scripts menu. Even templates can have scripts inside                   |
| 01:35:26   | and you can set up new documents with data from placeholders or inserted by your own                      |
| 01:35:30   | [[AppleScript]] code. And of course, there's so much more. From an iOS companion app to                      |
| 01:35:35   | email archiving, scanning, or even an embedded web server for sharing your data securely                  |
| 01:35:40   | with your team. I love the fact that I can just throw things at [[DEVONthink]] and really                    |
| 01:35:44   | it's like magic happens. And honestly, when I haven't set up my rules and I haven't set                   |
| 01:35:49   | up things, I don't need to worry because I will be able to find that document again.                      |
| 01:35:54   | Anybody who needs to manage lots of documents of loads of different types and make notes                  |
| 01:35:58   | on them should take a look at [[DEVONthink]]. I love it because I can literally throw anything               |
| 01:36:03   | in it. And because it's using my [[Dropbox]], in my case, it could use iCloud for you. I                      |
| 01:36:08   | don't need to worry about running out of storage space or paying for an extra subscription.               |
| 01:36:12   | I'm just using what I've got. You can get an extra 10% off [[DEVONthink]] or upgrade to                      |
| 01:36:16   | it right now. Just go to DEVONtechnologies.com/Automators. That's DEVONtechnologies.com             |
| 01:36:24   | slash Automators for 10% off. Our thanks to DEVONtechnologies for their support of this                   |
| 01:36:28   | show and all of Relay FM.                                                                                |
| 01:36:30   | So as we were prepping for the show, Rose says, hey, have you checked out these automation                |
| 01:36:37   | tools, these home automation tools with [[Stream Deck]]? And I'm like, yeah, but I don't really               |
| 01:36:41   | have that many Hue lights. And you know, they're built and automations are all Hue geared.                |
| 01:36:45   | So I can't really use it that much. And then Rose told me about something amazing. Rose                   |
| 01:36:51   | shared this amazing news with all of us.                                                                  |
| 01:36:54   | Well, full credit has to come from the lovely folks in the Automators forums. And of course,               |
| 01:36:59   | am I going to remember the name of the person who told me about this application now? No,                 |
| 01:37:03   | I'm just having a quick look though to see if I can find this person. No. But either                      |
| 01:37:08   | way, there's a great app called [[HomeControl Menu for HomeKit\|HomeControl]] for the Mac. And [[HomeControl Menu for HomeKit\|HomeControl]] for the Mac,                   |
| 01:37:13   | sorry, it was rich in the forums. I've just found it. And so basically, [[HomeControl Menu for HomeKit\|HomeControl]] for                  |
| 01:37:20   | the Mac is an alternative to the home application. And it pretty much lives in my menu bar. It's          |
| 01:37:26   | just a little home with a lightning ball on it. And I've done some customisations, so                     |
| 01:37:29   | I don't have everything show up. So I don't have scenes show up because most of my scenes                 |
| 01:37:34   | are generated. And frankly, I don't trigger them when I'm sitting at this Mac. And I've                   |
| 01:37:39   | hidden, you know, I've got some, I've got some weird rooms, which aren't really rooms                     |
| 01:37:44   | like television is a room for me because it's got a bunch of sensors on my storage cupboard               |
| 01:37:47   | and things like that. It's just basically all sensors. But the beauty of [[HomeControl Menu for HomeKit\|HomeControl]]                     |
| 01:37:52   | is not just the menu bar application side of things. The beauty of [[HomeControl Menu for HomeKit\|HomeControl]] is in                     |
| 01:37:57   | the preferences pane. But there's this little button that says automation. And to start with              |
| 01:38:03   | you go, oh, interesting. And to start, and then you see authentication token copy and                     |
| 01:38:09   | regenerate, that's fine. And then if you scroll down, you see documentation. And it's using               |
| 01:38:14   | X callback URLs. Now, for people who are listening at the top of the show, they'll remember               |
| 01:38:20   | there's a website action and the website application opens a URL. Well, it doesn't have to open           |
| 01:38:25   | a web URL, it can open an X callback URL. So for example, it could open a specific workspace              |
| 01:38:31   | in [[Drafts]], which is one of the things I do at my writing profile. But that means it can                   |
| 01:38:34   | open the [[HomeControl Menu for HomeKit\|HomeControl]] app and run an action with it. And by doing this, I can run all                     |
| 01:38:41   | sorts of things. So I now have a home profile. And some of these things I am using the hue                |
| 01:38:47   | triggers for because I already had that set up. And that was fine. But for things like                    |
| 01:38:51   | the lights that sit on my desk, which usually just provide lighting so I can see things                   |
| 01:38:55   | on my desk, if it's a little bit dark, and my lava lamp that lives on my desk, those                      |
| 01:39:00   | are done with IKEA Trad free smart plugs. And so I can't just do that using the hue app                   |
| 01:39:06   | or whatever, because that's all through the IKEA hub. And maybe somebody's written an                     |
| 01:39:10   | IKEA plug in for the [[Stream Deck]], and I haven't found it yet. That's entirely possible, probably          |
| 01:39:14   | probable. But, you know, I haven't found it, but [[HomeControl Menu for HomeKit\|HomeControl]] means that I can do all of                  |
| 01:39:20   | that. And I can do that locally. And that, you know, speeds things up just a little bit.                  |
| 01:39:26   | Because of course, if you have to send a command to the hue servers, and then the hue servers             |
| 01:39:30   | have to send that to your hue hub, and then your hue hub has to send that to your light                   |
| 01:39:33   | bulbs, that's going to take longer than your Mac going to your Apple TV or HomePod or HomePod             |
| 01:39:38   | Mini and going, hey, lights turn on, which, you know, communicates with the hub. But because              |
| 01:39:43   | it's all on a local network, it's just much faster. And so you can do, you can run actions,               |
| 01:39:49   | and then you can, you've got an action type, which you trigger, which can be a scene, or                  |
| 01:39:53   | switching a device status or changing a device property. You can even switch between homes.               |
| 01:40:00   | So if you've got a laptop and you go different to different homes, or, you know, your office              |
| 01:40:04   | has also got home kits set up, then you can switch homes there as well. And then you set,                 |
| 01:40:09   | you know, the item name of what it is, and the properties of that, etc. And of course,                    |
| 01:40:17   | you include your authentication token every time. So you can't just trigger this. And,                    |
| 01:40:22   | you know, somebody else can copy it, and they can now also control the lights in your home.               |
| 01:40:26   | You know, because it's working on your Mac. And this is great. So I've now got buttons.                   |
| 01:40:31   | I can open and close my curtains, David, from my [[Stream Deck]]. That's amazing to me.                       |
| 01:40:36   | Yeah. So you told me about it, and I went and checked it out, and I installed the app.                    |
| 01:40:41   | I think it was $7 to buy the app. And I got the URL for, there's a little pond outside                    |
| 01:40:48   | my window where I work, and there's a pump in there that has a little waterfall. It's                     |
| 01:40:53   | not like super fancy, but I like the sound of the water. And so I set that up and put                     |
| 01:40:58   | a button on my [[Stream Deck]], and then I press the button, and then I heard water, and it's                 |
| 01:41:03   | like, oh, this is changes everything. So everything, all my, you know, all my Lutron                      |
| 01:41:11   | switches, all the, anything that's addressable on [[HomeKit]], I can now put a button on my stream            |
| 01:41:16   | deck. I also tested it on my front door lock. I can unlock my door with my [[Stream Deck]].                   |
| 01:41:23   | That is great. I love that. One, or a couple of pro tips that I'm going to give people                    |
| 01:41:28   | if you get this app. It is $6.99 in the app store, so it's not free. And there's a companion              |
| 01:41:33   | app for iOS called HomeBot. I haven't played with that yet. But they do say HomeBot will                  |
| 01:41:39   | be available on macOS as soon as Shortcuts is available. So clearly they're expecting                     |
| 01:41:42   | Shortcuts to come to the Mac, David. And they're not the only ones. But what I would say is               |
| 01:41:49   | I would toggle off showing sensors, showing homes and showing scenes. Showing homes, definitely           |
| 01:41:56   | toggle off if you have a desktop that you are not taking to another home, because it                      |
| 01:42:00   | doesn't make sense. And I am still experimenting with whether or not I want smart groups to               |
| 01:42:07   | appear. Smart groups are logical, yes, but not necessarily what I want. But also underneath               |
| 01:42:16   | this in the preferences pane, you can also customise items. So you can go through and                     |
| 01:42:21   | you can hide things, or you can even say that things should appear in a submenu, which then               |
| 01:42:29   | files them out to a submenu, as you might expect. And so that just shortens, at least                     |
| 01:42:34   | if you've got a long list of home automation devices like I do, that shortens the list                    |
| 01:42:38   | of things that appears in the menu bar. So if you're not doing it in an automated fashion,                |
| 01:42:42   | you can. Now, I would definitely recommend going through and setting up scenes if you're                  |
| 01:42:47   | going to control devices regularly in the same way. But you don't have to have scenes                     |
| 01:42:53   | showing in your menu bar to be able to run it from a X callback URL. So you've got the                    |
| 01:43:01   | best of both worlds, really, if you just want to say, oh, you know, realistically, I probably             |
| 01:43:05   | only want to toggle off on and off my studio lights and my lava lamp from the menu bar,                   |
| 01:43:11   | so you can hide everything else. That was a long session of ticking to get to that, David,                |
| 01:43:14   | I have to say. And, and, you know, I've hidden my sensors and so on, because I don't necessarily          |
| 01:43:20   | need to see those on my Mac. But then I have everything else. And that is great. And I'm                  |
| 01:43:27   | very pleased with that, I have to say, sorry, very big thanks to Rich and the other people                |
| 01:43:32   | who've also recommended [[HomeControl Menu for HomeKit\|HomeControl]] to me recently, because it is a great application                    |
| 01:43:38   | that is well worth using, at the very least, just on your Mac, if you want better home                    |
| 01:43:43   | control. But if you want automation as well, it's even better.                                            |
| 01:43:47   | Yeah. So the way I implemented it was the lights around my studio desk are, are there's                   |
| 01:43:53   | several, those buttons appear in several different profiles, because you never know what I'm              |
| 01:43:58   | going to want to turn them on. But I also created a separate profile that has like basically              |
| 01:44:03   | all the lights in the house, except, you know, the ones in my kids rooms and my wife's bedside            |
| 01:44:08   | I don't need to control those. But the stuff that I would want to control has got a separate              |
| 01:44:12   | profile. And there's a single button that points to that. And I can make that appear                      |
| 01:44:18   | wherever I want it. But yeah, you just turned me onto those rows. And I immediately like                  |
| 01:44:22   | grok it. And it's very easy. All you do is run a website. You don't even use keyboard                     |
| 01:44:27   | maestro. You just run the website action and this drop in the URL and you're good to go                   |
| 01:44:33   | and it toggles by default. So if the lights on, it'll turn it off. And the lights off,                    |
| 01:44:38   | it'll turn it on. Yep. Yep. And you can do things like get fancy with dimmers and colours                  |
| 01:44:43   | and so on. I have to say that's a little bit tricky to do by URL. It's going to be a lot                  |
| 01:44:48   | of trial and error, which is why personally, I'd recommend creating scenes for things like                |
| 01:44:52   | that in the home app. And then, you know, and then when, and then you can change it easily                |
| 01:44:58   | in the home app, you know, if you find every time I activate these lights, okay, the pink                 |
| 01:45:02   | is lovely. But realistically, I actually need the light strip to be white and 100% brightness             |
| 01:45:08   | to just make sure that I'm not really sitting in the dark, or at least doesn't look like                  |
| 01:45:11   | I'm sitting in the dark. So yeah, so you can do that. But this app is great. And it works                 |
| 01:45:19   | so well with the [[Stream Deck]] as well. I have an entire profile, David, for for automations                |
| 01:45:25   | in my office. So I can open and close the blind, I can open and close the curtains, I can turn            |
| 01:45:30   | on each individual light. And, of course, then when they're on, I can turn them off.                      |
| 01:45:35   | And I can even turn off my 3D printer, which is something we'll have to talk about in a                   |
| 01:45:40   | future show.                                                                                              |
| 01:45:41   | So do you have any complaints with the [[Stream Deck]]?                                                       |
| 01:45:44   | Well, I mean, I've got some pet peeves when it comes to the software, I have to say. The                  |
| 01:45:51   | hardware is great. It works well for me. I would like it if maybe on all of them you                      |
| 01:45:57   | could have an adjustable frame at the back. So I've got mine, like I've just got it sitting               |
| 01:46:05   | on a little pencil front that I don't use just to raise it up a little bit more. I just                   |
| 01:46:10   | like it at a slightly higher angle. Maybe it's because I'm quite tall. But yeah, with                     |
| 01:46:14   | the app, I really wish you could do things like cut and paste or copy and paste icons                     |
| 01:46:19   | from one action to another, which you can't do. And you can't copy an app icon. So if                     |
| 01:46:25   | I'm in Finder and I go to the applications folder and I find something like zoom and                      |
| 01:46:30   | then I do command I on the zoom application, you can copy the actual app icon. And if you                 |
| 01:46:36   | open it in something like preview, then you can you can paste or create a new one from                    |
| 01:46:40   | your clipboard and you can paste this into pages or whatever, you know, you've got plenty                 |
| 01:46:44   | of choices. And you know, you can export it to a PNG and things like that. But you can't                  |
| 01:46:50   | copy the app icon from Finder's info pane and paste it in [[Stream Deck]]. And I really,                      |
| 01:46:56   | really wish you could. Similarly, I wish I could open two [[Stream Deck]], you know, instances                |
| 01:47:02   | side by side so I can move things from one profile to another profile, or copy things                     |
| 01:47:07   | from one folder to another if I want to copy multiple things. Like when I was tweaking                    |
| 01:47:11   | things from folders to profiles, this was definitely a pain point for me. You think                       |
| 01:47:16   | it only happens once, but then you work yourself into a corner again. And again, that's just              |
| 01:47:21   | what happens, unfortunately. So it'd be great if you could do that. But you know, overall,                |
| 01:47:26   | I'm pretty darn happy with it. And I'm glad I upgraded to the big one.                                    |
| 01:47:29   | Yeah, I mean, the problems you describe are a result of the software not really being                     |
| 01:47:33   | Mac specific. And yeah, and I don't think those are ever going to get fixed. But like                     |
| 01:47:37   | even like a little dock where I could store, I store action buttons so I could change between             |
| 01:47:44   | profiles and copy them. It's just not easy to do that. Another thing that's a pet peeve                   |
| 01:47:49   | is at least with me, it never remembers the last place I went to get artwork, like we                     |
| 01:47:55   | have our magic [[Dropbox]] folder that we've shared. And it never remembers that it always wants              |
| 01:48:00   | to go to the desktop or some other place. And then I have to navigate around folders                      |
| 01:48:05   | just to get to my my artwork kind of treasure chest. And you know, all these little like,                 |
| 01:48:12   | you know, little pinpricks of pain. The other pet peeve I have, which is not streamed x                   |
| 01:48:18   | fault, but it is toggles fault, I want a whole list of toggler timers I want to start off.                |
| 01:48:26   | And people have tried I know you even took a stab at it at once. And there's really                       |
| 01:48:29   | no good consistent way to trigger toggle timers, you know, the toggle app doesn't make it easy            |
| 01:48:36   | to have like just a magic URL you can insert it'll start a timer. So that doesn't work.                   |
| 01:48:42   | If you try to do like UI scripting, it's never consistent. Yeah, there there is some hope.                |
| 01:48:49   | I think it's public knowledge, the time where he guy is working on a Mac version and hopefully            |
| 01:48:53   | he'll come up, he put it on Twitter. So we're not the only people that know about it. Good.               |
| 01:48:57   | So in him, and I've been emailing him, I said, even just like a menu item where I could choose            |
| 01:49:03   | between my save timers would be enough for me to do this with with a [[Keyboard Maestro]]                     |
| 01:49:08   | script. And as it currently works, you can do up to 10 save timers that way. But I want                   |
| 01:49:13   | I have more than 10, I just want a way to be able to automate triggering any toggle timer                 |
| 01:49:19   | without having to do anything like I can on my iPhone, my iPad. And that's not there yet.                 |
| 01:49:24   | But I feel like that would be perfect for a [[Stream Deck]] if it was possible.                               |
| 01:49:27   | Yes. Yeah. So hopefully we'll get that. In the meantime, I have had some success through                  |
| 01:49:34   | our [[Keyboard Maestro]] and running sort of shell scripts with curl to talk directly to the                  |
| 01:49:39   | toggle API. If that sounds horribly complicated to you, then guess what my experience with                |
| 01:49:44   | creating this was? Not fun. The other thing that I've done, which I'm not sure I can recommend            |
| 01:49:51   | it necessarily is I have a little iPod touch here running the push cut automation server.                 |
| 01:49:57   | I have done the get URL with the checkbox on the website command. So it just does it in                   |
| 01:50:01   | the background to ping the push cut server to run a start timer action. This works as                     |
| 01:50:11   | part of a multi action, but you don't have any of that data then available on the Mac,                    |
| 01:50:16   | which is a real shame. So yeah, have to wait and see what happens there. And hopefully,                   |
| 01:50:22   | when Timery for Mac comes, you know, Joe will see how successful it is because I'm                       |
| 01:50:26   | sure it will be. And then he'll have some time. And of course, motivation from other                      |
| 01:50:31   | hopefully listeners to add a few more automation options. Or maybe this summer, David, I mean,            |
| 01:50:37   | they announced [[WWDC]], maybe we'll just get shortcuts for the Mac.                                          |
| 01:50:40   | Boy, wouldn't that be great? That would be great. Oh yeah. And don't write me about                       |
| 01:50:45   | the toggle plugin. There's an existing toggle plugin for the [[Stream Deck]]. But I've already,               |
| 01:50:52   | I'm in that GitHub and I've let them know it's just not adequate. I mean, you can't                       |
| 01:50:57   | apply. It doesn't support tags. Yeah. So and it just there, it needs to be better                         |
| 01:51:03   | than that. And it's just not there yet. So hopefully they'll get there. And I know that                   |
| 01:51:06   | that team is also aware of this request. So one way or another, we're going to get there.                 |
| 01:51:11   | And when that happens, guess what? You'll have a profile of toggle timers. So good for                    |
| 01:51:16   | it. Yeah, fingers crossed, we will either way. We just spent an hour and a half talking                   |
| 01:51:21   | about the [[Stream Deck]]. I hope that you enjoyed it. And I hope that maybe you're motivated                 |
| 01:51:24   | to even give one a try because it's, it really is a game changer. I feel like the, and I                  |
| 01:51:30   | don't keep banging on this, but the setup automation and having that on buttons is going                  |
| 01:51:36   | to save you so much time that the [[Stream Deck]] will pay for itself. And I, I swear I'm not                 |
| 01:51:42   | making a commission on [[Stream Deck]] and [[Elgato]] and I have never talked, but it's just a great              |
| 01:51:47   | thing. It's just a little device that really helps. And I think it's very automator friendly.             |
| 01:51:52   | If you listen to automators, this is something you probably want to play with.                            |
| 01:51:55   | Yes, yes. And if you're listening to this and thinking, Oh, I'm on a Windows machine                      |
| 01:51:59   | because I know a lot of people in the Relay FM discord are very interested in this episode.              |
| 01:52:04   | And they are Windows users. You know, everything we've talked about, aside from the keyboard              |
| 01:52:08   | manager stuff does work on Windows and there, there are alternatives for that. So auto hot                |
| 01:52:13   | key and similar can do a lot of things. So yeah, make sure that you try everything out                    |
| 01:52:18   | because you, you will hopefully be very pleasantly surprised.                                             |
| 01:52:22   | Well that about does it for the [[Stream Deck]] at this point on the automators. Well, I'm                    |
| 01:52:26   | sure we'll be talking about it again in the future as things develop. In the meantime,                    |
| 01:52:30   | we want to thank our sponsors. That's the folks at privacy, Microsoft, ExpressVPN and                     |
| 01:52:34   | DEVONthink, and we'll see you in a few weeks.                                                            |
| 01:52:37   | Goodbye everyone.                                                                                         |
