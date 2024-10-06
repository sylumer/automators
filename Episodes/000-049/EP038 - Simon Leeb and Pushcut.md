---
status: "incomplete"
fc-date:
  year: 2019
  month: 12
  day: 06
fc-category: "podcast"
podcast: "Automators"
published: 2019-12-06
duration: 4242
formattedduration: "01:10:42"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Simon Leeb"]
notetype: "episode"
showpage: "http://relay.fm/automators/38"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators038.mp3"
episode: 38
title: "38: Simon Leeb and PushCut"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
App developer Simon Leeb joins us to talk about his automation journey that turned into building an automation app, PushCut. We also stray into the world of iBeacon and automation.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Simon Leeb]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 038 Discussion](https://talk.automators.fm/t/automators-38-simon-leeb-and-pushcut/6109)

# Sponsors
- [[PDFpen (Sponsor)|PDFpen, from Smile]] - The ultimate tool for editing PDFs and go paperless.
- [[Flatiron School (Sponsor)|Flatiron School]] - Launch a career in tech with Flatiron School's modern curriculum paired with one-on-one support from dedicated career coaches, all in just 15 weeks.
- [[FreshBooks (Sponsor)|FreshBooks]] - Online invoicing made easy.

# Show Notes
- [PushCut - Smart notifications that trigger your automation](https://www.pushcut.io/)
- [openHAB](https://www.openhab.org/)
- [iBeacon - Apple Developer](https://developer.apple.com/ibeacon/)
- [iBeacon - Wikipedia](https://en.wikipedia.org/wiki/IBeacon)

# Transcription
  
| Time Index | Transcription                                                                                       |
| :--------- | :-------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks and joined by my fellow co-host, Rosemary Orchard, and this                 |
| 00:06      | is the Automators, where we talk about how to automate your technology to do your bidding           |
| 00:11      | for you.                                                                                            |
| 00:12      | Hello, Rosemary Orchard.                                                                            |
| 00:13      | Hello, David.                                                                                       |
| 00:14      | How are you?                                                                                        |
| 00:15      | Good.                                                                                               |
| 00:16      | It's been a few weeks since we talked.                                                              |
| 00:18      | I always am happy when we get on the microphone together to talk about crazy automation.            |
| 00:23      | Me too.                                                                                             |
| 00:24      | And this week, we have another person with us.                                                      |
| 00:27      | We could call this episode two Austrians and an American because we've got someone else,            |
| 00:32      | one of your countrymen.                                                                             |
| 00:33      | Welcome to the show, Simon Leeb.                                                                    |
| 00:35      | Hello.                                                                                              |
| 00:36      | Hello, Ros.                                                                                         |
| 00:37      | Hello, David.                                                                                       |
| 00:38      | Thank you for inviting me.                                                                          |
| 00:39      | I feel very honoured.                                                                                |
| 00:40      | We're big fans of your app.                                                                         |
| 00:42      | Simon is the developer of the PushCut app, which is a very handy tool if you're going               |
| 00:48      | to do automation.                                                                                   |
| 00:49      | Today, we're going to talk about how we use PushCut in our automation, and Simon's going            |
| 00:54      | to talk about the app.                                                                              |
| 00:56      | He's also going to talk just about some of the automation stuff Simon does to keep himself          |
| 01:01      | going.                                                                                              |
| 01:02      | I think this is going to be a really fun show.                                                      |
| 01:04      | Yes.                                                                                                |
| 01:05      | I am very much looking forward to diving into some of the crazy ways that I have got PushCut        |
| 01:10      | set up, including the fact that when I got home today, I got approximately 10 notifications         |
| 01:14      | from PushCut.                                                                                       |
| 01:15      | And I'll tell you why as we get into it.                                                            |
| 01:17      | I can't wait to hear that.                                                                          |
| 01:19      | And I also can't wait to talk about everything you want to know about PushCut.                      |
| 01:22      | So Simon, how did you get started thinking about automation?                                        |
| 01:27      | You've built a whole application around it, so it must be a big deal to you, right?                 |
| 01:31      | I'm not really sure when I started automation.                                                      |
| 01:33      | I've been a programmer forever, like for 15 years at least.                                         |
| 01:38      | And so programming is you always automate when you program somehow.                                 |
| 01:44      | And all of that is, of course, surrounded by tools and utilities that automate.                     |
| 01:48      | But I think in the sense of what I guess iOS users and Shortcuts users and what this show           |
| 01:55      | is more about, I think it started when I kind of decided to go all in on home automation,           |
| 02:03      | do it yourself stuff for my apartment here.                                                         |
| 02:07      | And I bought a Raspberry Pi, and I bought all those components, and I coupled them together         |
| 02:12      | to do things.                                                                                       |
| 02:14      | And I would say that's when I really got hooked on automation and scripting stuff and connecting    |
| 02:21      | stuff, mainly in the home automation thing, actually.                                               |
| 02:25      | So did you get really started with [[HomeKit]]-type devices, or was it more of a rolling your           |
| 02:29      | own with just code that you wrote yourself, or something like, I'm forgetting the name              |
| 02:34      | [[Home Assistant]]?                                                                                     |
| 02:36      | I did look at [[HomeKit]].                                                                              |
| 02:37      | That was what I wanted to do, but I quickly learned, as I think many do, that there are             |
| 02:42      | not that many devices, especially in Austria, it seems to be even less than in the US.              |
| 02:48      | And the way you can connect them and combine them just felt very limited.                           |
| 02:53      | You're always kind of whatever is intended for you to do that kind of works, but you                |
| 02:59      | can't really draw outside the lines too much.                                                       |
| 03:03      | And so I quickly found out that there's this whole community around Raspberry Pis, and              |
| 03:09      | there's this whole do-it-yourself world, which I didn't really know before.                         |
| 03:13      | Oddly, I wasn't really much into the whole open-source world at all.                                |
| 03:18      | I was developing Microsoft server solutions for logistics, mainly that's very corporate-controlled  |
| 03:27      | own things.                                                                                         |
| 03:29      | So I didn't really clash with the whole open-source world too much, and I was amazed what's out     |
| 03:37      | there.                                                                                              |
| 03:38      | I mean, you can imagine somebody wrote it and hosted it on GitHub somehow.                          |
| 03:45      | So I was really quite blown away by what's there for you to get for free.                           |
| 03:51      | But I also quickly learned that it's not really for free, it costs a lot of blood,                  |
| 03:54      | sweat, and tears to actually make work and to really have it stably run at home.                    |
| 04:04      | But I really got hooked, and once you're in, you can't really go back.                              |
| 04:10      | And so I bought all those cheap devices that you can hook in your wall behind the switches          |
| 04:17      | and stuff like that, and basically did it all like that.                                            |
| 04:22      | The software I used is called OpenHab.                                                              |
| 04:25      | I don't really know how I came about it.                                                            |
| 04:27      | It's one of the bigger ones for do-it-yourself, I think, and that's pretty much what I connect      |
| 04:32      | everything with.                                                                                    |
| 04:33      | Well, it's always a challenge because [[Apple]] does have some automation built into [[HomeKit]],           |
| 04:39      | but it's not enough for a lot of folks, and every year they get a little better, like               |
| 04:45      | now that they've integrated Siri shortcuts with it, and even now if a listener of the               |
| 04:51      | show tries out push cut, there's so much stuff you can do with push cut with it, but it does        |
| 04:55      | kind of democratise it, makes it a little easier for people to use.                                 |
| 04:58      | But then at some level, it's like, okay, do I want to go to the Homebrew stuff?                     |
| 05:03      | Because there is definitely not only blood, sweat, and tears for the people making it,              |
| 05:07      | but also for the people installing it and using it for the first time.                              |
| 05:11      | Absolutely.                                                                                         |
| 05:12      | That's what I meant by blood, sweat, and tears.                                                     |
| 05:15      | The price you pay for one of those [[HomeKit]] devices, it's a good price because what you              |
| 05:20      | spend time and playing around and fixing things and being frustrated for stuff not                  |
| 05:26      | really working, I'd rather pay like 30 bucks extra or something.                                    |
| 05:32      | It's all good with [[HomeKit]], I think.                                                                |
| 05:34      | You get simplicity.                                                                                 |
| 05:35      | Until [[HomeKit]] has a weird little issue and then doesn't quite work as you expect.                   |
| 05:40      | So for example, last night, we pressed the button to turn up all the lights in the apartment,       |
| 05:43      | and all but one light turned off.                                                                   |
| 05:45      | I don't know why, because when I ran it again from my phone instead of from a physical button,      |
| 05:50      | which runs that same scene, everything worked.                                                      |
| 05:53      | I am mystified.                                                                                     |
| 05:54      | But you get that with all of these solutions, honestly.                                             |
| 05:58      | I was talking to somebody in the know on this stuff and development on this, and he was             |
| 06:04      | telling me the big problem is that the radio bandwidth on these things is extremely limited.        |
| 06:12      | The more devices you add to your house, the more difficult it gets to find space to talk,           |
| 06:18      | so that's when you have one light gets missed, it's because there's so much happening in            |
| 06:23      | that narrow bandwidth that it just doesn't get the signal.                                          |
| 06:26      | Yeah, I had an issue once where, and it took me forever to figure this out.                         |
| 06:32      | I got new Wi-Fi routers at home, and I had the whole hue, I have a couple of hue lights,            |
| 06:39      | and the hue bridge somehow was like close to the Wi-Fi router, as I guess is true for               |
| 06:43      | many people, and things just started falling apart.                                                 |
| 06:46      | I would have really bad connection in my office, Wi-Fi wise, I had dropouts all the time,           |
| 06:50      | and I thought, well, this new Wi-Fi router is not good at all.                                      |
| 06:55      | Also, I noticed that a few lights, a hue light would behave weirdly, and luckily there is           |
| 07:03      | an option to change the channel on the hue thing, and suddenly everything worked again,             |
| 07:08      | and I just made me realise how those things are fighting for your airspace in your apartment        |
| 07:14      | somehow with all the frequencies intermixing and stuff like that.                                   |
| 07:19      | That's so tenuous, if you know what's going on.                                                     |
| 07:23      | That's one of the reasons why I like those [[Lutron]] Caseta switches.                                |
| 07:27      | Another person, Robert Spivack, who was a guest on MPU a while back and is really connected          |
| 07:33      | on this home automation stuff, was telling me they have their own bandwidth.                        |
| 07:37      | They bought their own section of the spectrum for their switches, and I think that's why            |
| 07:44      | they work so good, is because they're not fighting with everything else.                            |
| 07:48      | But anyway, so you got some home automation stuff, you kind of went down that rabbit hole,          |
| 07:56      | and then at some point you decided, I'm going to use my development talents to make an app,         |
| 08:02      | an automation-based app.                                                                            |
| 08:03      | How did that happen?                                                                                |
| 08:04      | It's not that straightforward in a way.                                                             |
| 08:07      | I didn't actually think, oh, I'm going to build this app.                                           |
| 08:11      | It all started with this weird thought that while I still had my job, my regular job,               |
| 08:18      | I thought, you know what, maybe the life of an indie app developer is a good idea.                  |
| 08:25      | My reason immediately kicked in and said, what are you talking about, man, this is not              |
| 08:29      | a good idea at all.                                                                                 |
| 08:30      | You make a pretty decent living, you have a family and a home to take care of, don't                |
| 08:34      | do that.                                                                                            |
| 08:35      | But it kept just popping up in my head, and eventually it was almost as if my brain would           |
| 08:42      | say, if you don't do this now, you're just a coward.                                                |
| 08:47      | I couldn't really escape the track I put myself on, and I had a long list of app ideas.             |
| 08:53      | I would just start compiling those ideas, and one of them was, I looked it up today.                |
| 09:00      | It just said, and I'm pretty sure it was inspired by something [[Federico Viticci\|Federico]] said on Connected.          |
| 09:06      | It wasn't really exactly this, but he basically reported excitedly about URLs and whatever          |
| 09:12      | he connected in the way only he can, and it was about some shortcut thing somehow.                  |
| 09:18      | I just took down this note, and basically it was something like trigger shortcuts from              |
| 09:25      | notifications.                                                                                      |
| 09:27      | It wasn't even the first idea on the list, and it definitely didn't seem like the easiest           |
| 09:31      | to do, but that kind of got paired with this other thing.                                           |
| 09:38      | So I have two more things, I would say.                                                             |
| 09:40      | One of them was, I was never quite happy with the direction that I felt the whole home automation   |
| 09:46      | was going where everything was voice controlled, and everybody had the series and the Alexis        |
| 09:51      | and whatever you have, and I was never a big fan.                                                   |
| 09:55      | It's good they work and nothing, series of lovely lady I'm sure, but I was never, maybe             |
| 10:00      | it's also the German thing, it doesn't feel all too reliable, and it always felt weird              |
| 10:06      | to me to speak out loud in my apartment, especially when other people are home.                     |
| 10:12      | And I always really loved the [[Apple Watch]], the complications with quick buttons and that            |
| 10:19      | sort of thing.                                                                                      |
| 10:20      | I loved having the one, two taps for the things where you can trigger the things you                |
| 10:27      | do every day with a tap instead of talking to some lady in the can.                                 |
| 10:35      | And in a way, maybe the third direction that kind of flew into this, too, was that I once           |
| 10:43      | tried with my openHAB scripting thing, I tried to automate the light scene in our living            |
| 10:51      | environment with a couple of lamps and stuff like that, and I had a motion sensor that              |
| 10:56      | would see me come in the door and I would know which devices are at home, if my wife                |
| 11:01      | is at home, if I'm at home, I would even know how dark is it outside, what's the lighting           |
| 11:07      | conditions outside, and I just tried to script something that when I come home, but it's            |
| 11:12      | not too late, it should turn on this light and it should be this dimmed, and it's basically         |
| 11:17      | I felt you can't really do that well.                                                               |
| 11:20      | It's almost impossible to, in a way that doesn't eventually one day really frustrate you,           |
| 11:27      | automate that sort of thing fully automatic.                                                        |
| 11:30      | And that's basically the situation I learned where I thought, some things just have too             |
| 11:35      | many variables to do it fully automatic, it's just too complicated to really have to computer       |
| 11:40      | guess what you want in this situation.                                                              |
| 11:43      | And that's where I think this idea started, where I thought, well, if only it could just            |
| 11:47      | ask me like, or if only I had like two buttons next to the door where I could say, well,            |
| 11:52      | today is the evening kind of day, or it's the bright light kind of day, or it's the                 |
| 11:56      | don't wake up the kids kind of day, or something like that, I don't know.                           |
| 11:59      | Yeah.                                                                                               |
| 12:00      | You definitely add a degree of difficulty when you live with other people.                          |
| 12:03      | Oh yeah.                                                                                            |
| 12:04      | Yeah.                                                                                               |
| 12:05      | I mean, I have the same thing with my wife and kids, like I can get as fancy with the               |
| 12:09      | automations I want, but then you add that exponential difficulty of other people and                |
| 12:15      | things just don't work.                                                                             |
| 12:17      | Absolutely.                                                                                         |
| 12:18      | Do you know the term WAP?                                                                           |
| 12:20      | No.                                                                                                 |
| 12:21      | What is it?                                                                                         |
| 12:22      | I learned this quickly in the forums when I was like Googling around for home automation.           |
| 12:26      | It's called wife approval factor.                                                                   |
| 12:28      | Oh yeah.                                                                                            |
| 12:29      | And it's, I think, an obstacle as nerds have to overcome.                                           |
| 12:32      | Yes.                                                                                                |
| 12:33      | Anybody with a partner, even in my case, my partner is super techie, and he's into computers        |
| 12:39      | and everything, but he didn't get that sitting around half in the dark means that when he           |
| 12:43      | turns on one of the lights and then triggers the motion sensor, the motion sensor doesn't           |
| 12:47      | realise that he wanted to be sitting half in the dark, and then it turns that light                 |
| 12:52      | off up to 10 minutes.                                                                               |
| 12:53      | I've had to reprogram some home automations to be a little bit more, in my case, boyfriend          |
| 12:57      | approved rather than wife approved, but whoever you're living with at some point, they will         |
| 13:03      | get upset with you.                                                                                 |
| 13:04      | You're doing this stuff if you don't do it right, which is worth the reasons why adding             |
| 13:08      | that extra manual step may not be as automated as we want, but it's probably as automated           |
| 13:14      | as they want.                                                                                       |
| 13:15      | There's also this story, I'm sure you've come across this.                                          |
| 13:17      | I think David, even you talked about this once, when the whole hue lights came out and              |
| 13:21      | people would just put them in their regular sockets and then would say, well, it's great            |
| 13:26      | and all, but my spouse doesn't get it that she can't use the switches.                              |
| 13:30      | I always thought you have a completely wrong man.                                                   |
| 13:32      | Of course she'll use the switches or he'll use the switches.                                        |
| 13:36      | That's just not how this works.                                                                     |
| 13:38      | My assumption that, yeah, of course they're going to pull a phone out of their pocket               |
| 13:43      | and go to an app to turn the lights on rather than use, press the button that they've been          |
| 13:49      | using their entire lives.                                                                           |
| 13:51      | What could go wrong with that?                                                                      |
| 13:54      | Maybe the secret to success is to combine setting up home automation with moving house,             |
| 13:59      | because then they will never have the muscle memory of this light switch here does what             |
| 14:02      | I want.                                                                                             |
| 14:03      | No, you're never going to get past the light switch.                                                |
| 14:07      | You got to design it around people's preferences.                                                   |
| 14:11      | That's why in my case, buying the [[Lutron]] switches solve that problem because, oh yeah, the switch   |
| 14:16      | is still there.                                                                                     |
| 14:17      | They can turn it off and on, but I can still automate and the light situation is kind of            |
| 14:21      | handled for me, but triggering them, which is the problem Simon is talking about, is                |
| 14:26      | not necessarily solved because you're right.                                                        |
| 14:30      | I try to put automations built in when the front door opens, certain lights turn on,                |
| 14:36      | but then all of a sudden it doesn't always make sense.                                              |
| 14:39      | Exactly.                                                                                            |
| 14:40      | Yes, we have that.                                                                                  |
| 14:42      | We actually have a button now inside of our front door that when we leave, we press it              |
| 14:46      | once and we can just turn everything off.                                                           |
| 14:48      | When we come back, there are two different modes.                                                   |
| 14:50      | We can either double press it or press and hold, and the difference between those two               |
| 14:54      | is how many lights they turn on, where they turn them on, and how much they turn them               |
| 14:57      | on.                                                                                                 |
| 14:58      | One is intended for the somebody's at home probably already asleep situation or relaxing            |
| 15:04      | for the television, doesn't want to be blinded with lights, whereas the other one is, I've          |
| 15:08      | just got home and my tram was redirected and I'm running late and I want to record a podcast,       |
| 15:14      | nobody else is home.                                                                                |
| 15:15      | Light up everything please, which conveniently I use today because yes, my tram was redirected      |
| 15:19      | before recording this podcast.                                                                      |
| 15:22      | I think I may have talked about this on one of the podcasts, but I've got a button.                 |
| 15:28      | It's in a couple places in the house, but you press it and it turns basically all the               |
| 15:31      | lights on, except in the bedrooms.                                                                  |
| 15:35      | The idea of this is, of course, if you hear a noise or if you come home and you just want           |
| 15:39      | to light up the house, you press a button, it turns all the lights on, but I have this              |
| 15:43      | medication I take at night, it's an eyedrop, so I put these drops in and then I was putting         |
| 15:48      | my hand in the drawer to put the drops away with my eyes closed and I kept hitting the              |
| 15:53      | button and everybody in the house would either have the lights turn all on or turn all off,         |
| 15:59      | either of which was not ideal.                                                                      |
| 16:02      | Then I finally figured out how to do that where I would not accidentally trigger the                |
| 16:08      | button, but that's why you have push cut, right Simon?                                              |
| 16:11      | I think what Rose described before was exactly the type of situation I had in mind.                 |
| 16:17      | Sometimes you just want an option or you want a couple options to choose from and automation        |
| 16:22      | can't really do the final guess for you what's right right now.                                     |
| 16:26      | I think that's what...                                                                              |
| 16:27      | So all those things together, right, triggering shortcuts from somewhere, from the internet         |
| 16:32      | or something, and this sort of idea that voice control is not always great, you want to push        |
| 16:38      | a button at the right moment or you want to have an option presented to you at the right            |
| 16:43      | moment from your smart home or something.                                                           |
| 16:46      | Those all combined was basically when I thought, well, you know what?                               |
| 16:49      | That's what I'll do.                                                                                |
| 16:50      | I'll just make this push app that gives you options and that's basically how Push Get               |
| 16:57      | was born and the first version Rose remembers, I remember very fondly that you pretty much          |
| 17:04      | from version one saw what this did and wrote about it and the first version was basically           |
| 17:10      | just push notifications that you can hook up to shortcuts and run that.                             |
| 17:16      | But in my mind, it was never so much about automating shortcuts.                                    |
| 17:21      | It was always more about having automation ask you a question and you have the options              |
| 17:27      | to respond like with one tap.                                                                       |
| 17:30      | That's kind of what drove me.                                                                       |
| 17:32      | That's what I wanted to build and the shortcut initially was just, well, the first thing that       |
| 17:36      | came to my mind is what in a shortcut you can do whatever and you can especially call               |
| 17:42      | a web service or you can call a home kit scene.                                                     |
| 17:46      | And so I thought I'm good.                                                                          |
| 17:47      | I thought that's what I need to do, build a notification where you have multiple options            |
| 17:54      | of shortcuts.                                                                                       |
| 17:55      | That's how it all started in a way.                                                                 |
| 17:58      | This episode of The Automators is brought to you by our friends at TextExpander.                    |
| 18:02      | Go to smilesoftware.com/podcast, let them know you heard about it at automators               |
| 18:07      | and get 20% off your first year of TextExpander.                                                    |
| 18:11      | With TextExpander, you can make everything you write repetitively available to you anywhere         |
| 18:16      | you type.                                                                                           |
| 18:17      | And for Mac users upgrading to Catalina, TextExpander is good to go.                                |
| 18:21      | TextExpander works everywhere you type, Word, Google Docs, email, web forums and more.              |
| 18:27      | With TextExpander, you can send emails and personalise every last one with TextExpander's           |
| 18:32      | fill-in and pop-up features.                                                                        |
| 18:35      | TextExpander for Teams helps you and your employees get up to speed faster because all the things   |
| 18:40      | they need to type right away are already typed for them in TextExpander snippets.                   |
| 18:46      | I'm a big fan of TextExpander, I've been using it for years, I use it every day in                  |
| 18:49      | my legal practice, I also use it extensively with customer support for the MacSparky Field         |
| 18:55      | guides.                                                                                             |
| 18:56      | I even have a team account so the people that assist me can get access to those snippets            |
| 19:00      | exactly the way I want them written.                                                                |
| 19:03      | One of my favourite ways I use TextExpander is with my legal practice, the monthly billings          |
| 19:07      | go out in a web form, I just type in a TextExpander snippet, it automatically includes the current  |
| 19:13      | month so the invoice shows the current month without me having to type it in manually every         |
| 19:18      | month and it does a bunch of other stuff to save me a bunch of time.                                |
| 19:22      | Using TextExpander, I get my bills out in about 20 minutes, it's awesome.                           |
| 19:27      | TextExpander is available for Mac OS, Windows, Chrome, iPhone and iPad and Automators listeners     |
| 19:32      | get 20% off their first year.                                                                       |
| 19:35      | Just go to TextExpander.com/podcast to learn more about TextExpander.                         |
| 19:41      | That's TextExpander.com/podcast.                                                              |
| 19:43      | If you've been meaning to try TextExpander out now is the time to try.                              |
| 19:48      | TextExpander.com/podcast, let them know you heard about the Automators and our thanks         |
| 19:53      | to TextExpander for their support of this show and Relay FM.                                        |
| 19:57      | All right, let's dig in then on push cut.                                                           |
| 20:01      | Well, explain what the problem you're solving with push cut is.                                     |
| 20:04      | I know I guess you kind of did that before the break.                                               |
| 20:07      | I always had trouble explaining, you know, people would ask me, especially after I quit             |
| 20:12      | my job, like, what are you doing?                                                                   |
| 20:13      | And I said, well, I make this app and, you know, and I always struggle to come up with              |
| 20:17      | this, you know, one sentence pitch that everybody would say, yeah, that's a good idea.              |
| 20:22      | I think I still haven't because in a way, it's this utility that you can connect, you               |
| 20:29      | know, from anywhere, anything that, you know, produces events, if you will, your home automation,   |
| 20:35      | your, you know, professional Zapier hookup, some if event, whatever, can, can ask you               |
| 20:42      | a question on your phone can say, Hey, this has happened.                                           |
| 20:46      | What now?                                                                                           |
| 20:47      | Like what do we do about this?                                                                      |
| 20:48      | So and being this open, it's, it's kind of difficult to, to, to tell people what it                 |
| 20:54      | really is.                                                                                          |
| 20:55      | Well, in my head, it's the app that combines automation with options, which nothing else            |
| 21:00      | does that to my knowledge.                                                                          |
| 21:03      | Because you, you've got automation stuff in there, time based triggers, location based              |
| 21:07      | triggers.                                                                                           |
| 21:08      | But then it gives you, it doesn't just run one shortcut, it gives you, you know, three              |
| 21:14      | shortcuts and you can pick one that you want to run.                                                |
| 21:16      | I mean, that's the way I use the app and, and there's, you know, even when shortcuts                |
| 21:21      | got automation based triggers in it, it didn't give you those options the way push cut does         |
| 21:26      | and in my head, that's why your app stands out.                                                     |
| 21:31      | You know, it's funny, the, the location and time based things, I didn't really think about          |
| 21:35      | that too much in my mind.                                                                           |
| 21:37      | It was, well, clearly once you have the, the web hook, you know, that's good enough for             |
| 21:41      | everybody because sure everybody knows what everybody's comfortable pasting those ugly              |
| 21:46      | URLs around and that might, might not have been that true.                                          |
| 21:52      | And so even I, whenever somebody asked me, so what do you do with it?                               |
| 21:56      | My first two examples were, well, in the evening, it could ask you which type, type of light        |
| 22:01      | you want to turn on, or when you come home, it could ask you, should we open the garage             |
| 22:06      | door or should we open the front door and, and even my examples were almost always like             |
| 22:11      | the simple ones based on time or location.                                                          |
| 22:15      | So I quickly learned that, well, you know, just put it in there as a default option.                |
| 22:19      | And that was before shortcuts introduced their automations.                                         |
| 22:23      | Maybe I wouldn't have done it then, I'm not sure, but at the time it felt like the right            |
| 22:27      | thing to do.                                                                                        |
| 22:29      | And what I think is a good idea was you can combine locations and time sort of constraints          |
| 22:35      | is what, what the app calls it.                                                                     |
| 22:37      | So you can say, when, when I'm at home, or you could say, when I get home, but only                 |
| 22:42      | in the afternoon, during the week or something, then trigger this on all the other occasions,       |
| 22:48      | don't even bother.                                                                                  |
| 22:49      | Or, or like, like, you can say, you know, at a certain time of day, when I'm at a certain           |
| 22:55      | location, which is nice, I think, especially those evening type of things you do at home,           |
| 23:01      | you just don't need when you're somewhere else, right?                                              |
| 23:04      | It makes no, there's no, no point.                                                                  |
| 23:06      | And I didn't even find any, any other app that would allow that sort of scheduling,                 |
| 23:10      | really.                                                                                             |
| 23:11      | So I think that's quite nifty.                                                                      |
| 23:12      | And my, one of my favourites, which I'm aware the world doesn't really care too much.                |
| 23:17      | It feels like a bit of a forgotten thing.                                                           |
| 23:19      | Are I beacons?                                                                                      |
| 23:20      | I'm not sure if you guys use them, but I, I do use them.                                            |
| 23:24      | That's that's one of the, the ways that I get a lot of actual pushback notifications.               |
| 23:27      | Yeah.                                                                                               |
| 23:28      | The geo fencing is just like, I don't, I think it's an unwritten rule somewhere, but the,           |
| 23:34      | the, the region you can mark shouldn't be less than a hundred meters in radius, which               |
| 23:39      | is a pretty big area, right?                                                                        |
| 23:41      | And it's just, it's just not fine grained enough for certain things, I believe.                     |
| 23:47      | And I beacons, if, if you're willing to play with it a little, you have to set them up              |
| 23:51      | and it's a bit, you know, it's a bit of a nerdy thing to do, but, but they were pretty              |
| 23:56      | reliably I felt and that's, it's probably something [[Apple]] will never build in, right?               |
| 24:01      | Is give you the option to program an I beacon.                                                      |
| 24:04      | It feels.                                                                                           |
| 24:05      | Yeah.                                                                                               |
| 24:06      | We're, we're going to have to cover that at some point in the show.                                 |
| 24:09      | Both Rose and I have some of them and, and you can like get room-based automation with              |
| 24:13      | an I beacon.                                                                                        |
| 24:14      | Yeah.                                                                                               |
| 24:15      | Exactly.                                                                                            |
| 24:16      | Yeah.                                                                                               |
| 24:17      | In my case, I find it's much more accurate than the location.                                       |
| 24:20      | So I, I've been trying a few things.                                                                |
| 24:21      | So I've had a push cut sending me notifications for when I get home like geo wise and then          |
| 24:27      | when I get home, I beacon wise and the geo wise always happens without fail within a                |
| 24:32      | like one and a half block radius.                                                                   |
| 24:34      | So I get to the one and a half block radius and then it triggers.                                   |
| 24:38      | And then I actually get to my front door at which point the I beacon goes, hello, I'm               |
| 24:41      | here and push cut goes, Hey, you're home.                                                           |
| 24:43      | And then they're going to get that this is clearly the much more accurate one.                      |
| 24:46      | Of course, it doesn't hurt that my apartment is relatively small, but at the same time              |
| 24:50      | my I beacon is on my desk, which is the farthest point away from the front door in my apartment     |
| 24:54      | possible.                                                                                           |
| 24:55      | And it works perfectly.                                                                             |
| 24:57      | So.                                                                                                 |
| 24:58      | Yeah.                                                                                               |
| 24:59      | As far as you know, you can, you can program the signal strength of the beacon and based            |
| 25:03      | on this setting, the phone will see it, you know, further away or closer and you can really         |
| 25:09      | go down.                                                                                            |
| 25:10      | You can make an I beacon.                                                                           |
| 25:11      | I don't know what the limits are, but you can easily say only when I'm in this room                 |
| 25:15      | and it wouldn't even register in the, in the room, you know, in the, in the next room because       |
| 25:20      | you can, you can basically make the signal so weak that the phone doesn't see it before             |
| 25:26      | that.                                                                                               |
| 25:27      | Yeah.                                                                                               |
| 25:28      | That's what makes them pretty, pretty nifty for location based stuff, I think.                      |
| 25:31      | Somebody needs to simplify that for consumers.                                                      |
| 25:33      | I mean, they, they're a pain in the neck to set up and nobody has really done that.                 |
| 25:39      | But the, but yeah, I agree.                                                                         |
| 25:41      | We're going to probably do a show on I beacons at some point.                                       |
| 25:43      | I think it makes sense on the automators.                                                           |
| 25:45      | We just got to, got to get to that one on the checklist, you know, in my old job, there             |
| 25:50      | was this saying, because, you know, GUIDs or UIDs as [[Apple]] calls them, they're ugly, right?         |
| 25:55      | If you see them, you want to, if you're not a developer, you just, you know, want to turn           |
| 25:59      | around.                                                                                             |
| 26:00      | It's, it's not something you should ever see.                                                       |
| 26:02      | And we always used to say, if a UI has a, as a GUID, it's, it's wrong.                              |
| 26:07      | Like you can never have that.                                                                       |
| 26:08      | It's not something that can ever exist.                                                             |
| 26:10      | But with I beacons, there's no other way around because that's the only way you can speak           |
| 26:14      | to them is, is with those long or with this long, ugly ID.                                          |
| 26:18      | Yeah.                                                                                               |
| 26:19      | It's not really, not really good look.                                                              |
| 26:21      | Unfortunately, but aside from that, they are very useful.                                           |
| 26:25      | So they have their advantages.                                                                      |
| 26:27      | I want to talk about, we just kind of glazed over the fact that push cut uses web hooks             |
| 26:33      | as well.                                                                                            |
| 26:34      | I mean, in addition to the time and location stuff on device, you've got this great web             |
| 26:39      | hook system.                                                                                        |
| 26:40      | Could you explain that?                                                                             |
| 26:41      | Sure.                                                                                               |
| 26:42      | That was really, that's kind of in the heart of it all.                                             |
| 26:44      | It's almost more a service than it is an app, because if in order for your phone to like            |
| 26:51      | pop something up in your face, it needs to know when and why.                                       |
| 26:55      | And the things you can do on device itself are very limited.                                        |
| 26:58      | It's basically, you can say when I enter or exit this location, or you can say at this              |
| 27:03      | time, that's pretty much it.                                                                        |
| 27:06      | So you can never say, well, when I get an email from here or there, or when this sort               |
| 27:11      | of device does something, even with [[HomeKit]], there is no way you can do that on, like you           |
| 27:15      | can program your phone to do something when a certain condition is met.                             |
| 27:22      | And even with shortcuts now, like of course you have the shortcuts automations, which               |
| 27:26      | are those great entry points for those everyday things.                                             |
| 27:31      | But you can't really, I don't know, define a good condition where you say when this happens         |
| 27:38      | on that sort of day, and then only then do I want to have this notification.                        |
| 27:42      | So it was pretty clear to me that the easiest way is the push notification system, which            |
| 27:48      | [[Apple]] has built, but you need a server for this, right?                                             |
| 27:51      | And there's the only way on your devices through the internet, really, there's no other way.        |
| 27:56      | So it was pretty clear to me I needed to build some sort of web service with a web hook.            |
| 28:02      | And what I tried to build was something that's so simple that I always wanted the app to            |
| 28:08      | be no login, no three step sign-in process.                                                         |
| 28:13      | You just install, you define a notification, and you get a URL that's both secure, but              |
| 28:20      | that's all you need.                                                                                |
| 28:21      | You just paste this thing somewhere, and that's all you need to trigger.                            |
| 28:25      | That's the unique key for your device with this notification.                                       |
| 28:29      | That was always kind of the guiding star.                                                           |
| 28:31      | That's what I wanted to build, and that's what I built, basically.                                  |
| 28:35      | And with this, if you have this URL, you can trigger it from IFTTT, you can trigger it from           |
| 28:41      | Zapier or all those online services.                                                                |
| 28:44      | And of course, now, and that's, I think, one of the coolest things ever, you can trigger            |
| 28:48      | it from [[HomeKit]].                                                                                    |
| 28:50      | And this makes it very simple to set up for [[Apple]] smart home nerds, I think, is you can             |
| 28:57      | actually just run it from a [[HomeKit]] automation.                                                     |
| 29:01      | That is how I got for ultimately 15 notifications when I got home from work today.                  |
| 29:06      | So do you want to give us a quick overview of how you do this?                                      |
| 29:08      | Because obviously, I know how to do this, but it would be better in your words.                     |
| 29:12      | Yes.                                                                                                |
| 29:13      | It took me a while to kind of see what's happening there, because I, of course, saw the [[WWDC]]        |
| 29:19      | where they introduced shortcuts and was all cool and all, and they said it's runs on                |
| 29:25      | [[HomeKit]] too, and I didn't really think much of it.                                                  |
| 29:29      | And I think it was, again, probably [[Federico Viticci\|Federico]] or somebody that says, huh, I have this alarm          |
| 29:33      | system at home where I can run some webhook to notify my device and I thought, what?                |
| 29:41      | And then I kind of saw for the first time, of course, that's what I always wanted to                |
| 29:46      | build was a thing where your home automation in a simple way with something you define              |
| 29:51      | when it happens, you know, asks you the question, hey, like, it's, I don't know, it's, it's         |
| 29:56      | getting warm.                                                                                       |
| 29:57      | Should I turn off the heat?                                                                         |
| 29:58      | Yes or no?                                                                                          |
| 29:59      | And, and you just with one tap, ideally on your watch can say, sure, let's turn it off              |
| 30:04      | or no, no, no, no, I'm still like, not now's not a good time for this sort of thing.                |
| 30:08      | And with the added shortcut support for [[HomeKit]] automations, what you can do is you can convert     |
| 30:14      | your like previously, you could only trigger a scene or run a scene.                                |
| 30:19      | So you define a scene like evening lights.                                                          |
| 30:22      | And when something happens, you could say run evening lights.                                       |
| 30:25      | And now you can say, instead of run evening lights, convert to shortcut.                            |
| 30:29      | And you have a couple of those shortcut actions, not all of them, but, but enough to trigger        |
| 30:34      | a webhook basically.                                                                                |
| 30:36      | And so inside this automation in [[HomeKit]], you just say, execute or I think it's called              |
| 30:43      | get contents of URL, and then you paste in the webhook from push cut.                               |
| 30:47      | And that's really all the setup you need.                                                           |
| 30:50      | And whenever this condition is happening, your [[HomeKit]] hub will just ping your devices              |
| 30:59      | or your device and ask the push cut question.                                                       |
| 31:02      | And combined with the feature that you can run [[HomeKit]] scenes directly from the push                |
| 31:08      | cut notification, it's that's when I felt right.                                                    |
| 31:12      | That's exactly what I wanted to build all along was this one thing that pops up and                 |
| 31:17      | just asks, hey, the red light or the blue light today, and you just tap blue right then             |
| 31:21      | and there.                                                                                          |
| 31:22      | And that's it.                                                                                      |
| 31:23      | And the blue lights on and it's all instantly like there's almost zero delay because it's           |
| 31:27      | from your device using the [[HomeKit]], [[Apple]] API, that's all fast and works.                           |
| 31:34      | And the notification system is pretty much instant too.                                             |
| 31:38      | So I was quite happy with that, to be honest, I felt like now it has arrived.                       |
| 31:42      | Now that's what I wanted.                                                                           |
| 31:44      | And you add in the [[Apple Watch]] app in the mix.                                                      |
| 31:47      | And it's truly magical little interactions, I feel like.                                            |
| 31:50      | That's kind of like that happened recently.                                                         |
| 31:53      | So a few weeks ago, I felt like now it's what I always wanted it to be in a way.                    |
| 31:58      | Well, before we dive into the [[Apple Watch]] app, I do just want to ask a few more questions           |
| 32:02      | because you mentioned that you can just paste the URL for the notification to the get contents      |
| 32:07      | of your election.                                                                                   |
| 32:08      | But I know that that makes a get call, which basically goes, hello, can you give me something?      |
| 32:14      | But I know if you switch to a post call, you can also send a bunch of things to push cut            |
| 32:19      | and then it can change things, for example, that are different actions available based              |
| 32:23      | on that.                                                                                            |
| 32:24      | Can you tell us about that?                                                                         |
| 32:26      | Yes, I always felt like for this to be truly powerful, you shouldn't just trigger like              |
| 32:34      | a static thing, like it shouldn't just be defined a notification with the same text that            |
| 32:39      | you just say now pop up.                                                                            |
| 32:41      | It's much more meaningful if the thing that triggers it can say, you know what, this happened       |
| 32:46      | exactly like that.                                                                                  |
| 32:47      | And it's now this many degrees and it's like this time or I don't know, this person just            |
| 32:50      | came home and to give you the text of what has happened.                                            |
| 32:55      | And since I had to build this, I thought, why not just make it all customisable and basically       |
| 33:03      | what you can do through this chase and interface, you can customise the text, the title, and        |
| 33:10      | you can even pass in a list of actions that your notification will show.                            |
| 33:15      | So you can, I don't know, based on the condition, you can have your notification give you different |
| 33:21      | options and you don't actually need to statically configure them in the app at all.                 |
| 33:25      | You could just make it all dynamic basically and have some sort of server code figure out           |
| 33:30      | what you want this notification to be about.                                                        |
| 33:33      | That's definitely a more advanced case.                                                             |
| 33:34      | I would say most people will probably customise the text and there's also this thing called         |
| 33:41      | input.                                                                                              |
| 33:42      | It was pretty clear to me that if a certain condition pushes a notification and you tap             |
| 33:48      | an action, there might be some sort of information that you have to pass along for the action       |
| 33:53      | to be able to be executed.                                                                          |
| 33:55      | So say if you want to run a shortcut that needs to do something, the shortcut might want            |
| 34:02      | to know in what context we were or what exactly happened or what type of timer I should start       |
| 34:08      | or something like that.                                                                             |
| 34:10      | So I just came up with this very simple input system.                                               |
| 34:13      | It's basically a string, like a value, and if you pass a value with a notification and              |
| 34:21      | you tap on an action, this value is passed along to the action you execute.                         |
| 34:26      | And if it's a [[HomeKit]] scene, there is no input.                                                     |
| 34:28      | [[HomeKit]] scenes don't take any input.                                                                |
| 34:29      | You can't.                                                                                          |
| 34:30      | I don't know.                                                                                       |
| 34:31      | That's just not technically possible.                                                               |
| 34:34      | But with shortcuts, it's possible.                                                                  |
| 34:36      | And if you really want to go all in, you can run any URL or you can run online actions.             |
| 34:41      | And then you can use this input to, I don't know, make your encoded in your URL, run maybe          |
| 34:46      | some sort of IFTTT command.                                                                           |
| 34:48      | And the IFTTT command can take this input and then send it on to wherever it needs to be              |
| 34:52      | sent on.                                                                                            |
| 34:53      | Yeah.                                                                                               |
| 34:54      | So that's that.                                                                                     |
| 34:55      | I have to say, maybe I'm the one distorting the statistics because pretty much every time           |
| 35:00      | I run a push cut notification, I do it with a post because I try to minimise the total              |
| 35:05      | number of notifications I have just so that when I look in the app, I'm not there going,            |
| 35:09      | okay, screencast online, screencast online, screencast online, screencast online, you               |
| 35:13      | know, repeating the same sort of title six or seven times.                                          |
| 35:17      | I just have one for screencast online.                                                              |
| 35:20      | And then whenever something happens with one of my videos in the project management system          |
| 35:24      | there or with one of the articles I'm writing for the magazine, it uses that notification,          |
| 35:29      | but it customises what to show me and if it should offer an action.                                 |
| 35:33      | And if so, what action should be offered based on exactly what, which Zapier's app in my case        |
| 35:38      | is triggering it, which I find to be so useful.                                                     |
| 35:42      | So thank you for adding that.                                                                       |
| 35:44      | Sure.                                                                                               |
| 35:45      | But I do think we got a little bit deep in the stack here pretty fast.                              |
| 35:50      | The whole idea of these webhooks, you know, listening to it, you may be confused about              |
| 35:55      | where do you get the webhook.                                                                       |
| 35:57      | It's in the app.                                                                                    |
| 35:58      | It's generated based on the, I don't want to call it shortcut, but the automation you               |
| 36:04      | create in push cut gives you that and then you can take that and use it how you want.               |
| 36:10      | So the application just really simplifies the process.                                              |
| 36:13      | Absolutely.                                                                                         |
| 36:15      | It definitely does.                                                                                 |
| 36:16      | So at the moment, I actually, I only have six notifications here in push cut.                       |
| 36:20      | But then if I tap on it, then underneath the name, there's the webhook URL.                         |
| 36:24      | And I tap on that, it offers me the option to copy the URL or copy it as a curl command             |
| 36:29      | or share it, which we will get to the usage of the curl commands later, I'm sure.                   |
| 36:36      | Let's just talk through a couple, just explain a couple, like you've got some examples on           |
| 36:40      | your website.                                                                                       |
| 36:41      | I think it's great.                                                                                 |
| 36:42      | If you're interested in this, you should have head over to push cut.io.                             |
| 36:46      | And there's a bunch of simple examples there where he's got screenshots to show you how             |
| 36:51      | he built the automation, and like he's got one here that when it's sunset, it doesn't               |
| 36:56      | just turn your lights on, it gives you a menu of do you want the dinner light set up the            |
| 37:01      | evening light set up the movie time light set up, you know, which is really great.                  |
| 37:06      | And then he's got one where he's showing how to combine push cut to automatically create            |
| 37:13      | time entries and toggle based on your location.                                                     |
| 37:17      | You know, these are all real world examples that anybody could build.                               |
| 37:20      | If you just take a look at these, you'll see it's not that difficult.                               |
| 37:23      | And then you can kind of go from there as well.                                                     |
| 37:26      | I really like your sample assignment because I think that was, for me, it was a good place          |
| 37:29      | to kind of start building things.                                                                   |
| 37:31      | Yeah.                                                                                               |
| 37:32      | In fact, I believe I should do more of them.                                                        |
| 37:35      | But then I also feel like maybe somebody else can, you know, share their stories a bit more         |
| 37:40      | and I can focus on the coding because I don't necessarily like that sort of work, to be             |
| 37:47      | honest.                                                                                             |
| 37:48      | And there, let's put it like this.                                                                  |
| 37:49      | There are others that do it way better than I.                                                      |
| 37:51      | And so to me, the guides page feels more like a marketing necessity than anything I feel            |
| 37:57      | like I should be doing really, but it's needed to get the, to tell the story, I think.              |
| 38:03      | And I would like to take a moment to mention that if anybody is using push cut, which I'm           |
| 38:07      | sure a lot of our listeners are because people keep asking me for a push cut show, but then         |
| 38:11      | please share what you're using it for in the forums because that would be really interesting.       |
| 38:15      | A couple of screenshots maybe of how you're using the app as well would be really nice              |
| 38:18      | because I think this is something that is presented in many ways better in a visual                 |
| 38:23      | format than audio.                                                                                  |
| 38:24      | So it's great that we're doing an audio podcast here, but I'm hoping you can understand it.         |
| 38:29      | It just looks extremely nice as well when you run it.                                               |
| 38:33      | So for example, the options are the different scenes.                                               |
| 38:36      | You know, you've got emoji added next to them, which just gives you that one character              |
| 38:40      | clue of, oh yeah, this is the option I want and you don't have to be, you know, energetic           |
| 38:45      | and actually read words, which if it's time for bed and that's what's the notifications             |
| 38:50      | telling you, then maybe you don't really want to read and you just want to tap the one that's       |
| 38:54      | got the bad icon on it and be done.                                                                 |
| 38:55      | Well, well, definitely one of the Pushcut, things I like better than shortcuts is the             |
| 39:01      | way it displays its menu options.                                                                   |
| 39:05      | You know, it just, you can tell me, you know, Simon, you spent some time kind of designing          |
| 39:10      | that interface and whereas with shortcuts, it's just kind of this text list and it's                |
| 39:16      | okay for one or two options, but when you get a long list, it gets really tedious the               |
| 39:20      | way shortcuts does it.                                                                              |
| 39:22      | Yes.                                                                                                |
| 39:23      | And another advantage I found with push cut is because push cut offers that menu from               |
| 39:27      | the notification, which shortcuts doesn't do.                                                       |
| 39:30      | And also you have the actual name of your notification telling you important information            |
| 39:34      | instead of just run the shortcut.                                                                   |
| 39:36      | And so I'm finding it really useful because I can just tap on that notification and it              |
| 39:40      | gives me that list right there of the different options that I've chosen to be available to         |
| 39:44      | me and then it works.                                                                               |
| 39:45      | And I really like that.                                                                             |
| 39:47      | That was kind of the first idea was to have it in the notification when you expand them.            |
| 39:51      | I always like those notification actions or let's put it like this.                                 |
| 39:55      | It's not something that you think about a lot, but I always, I always notice when an app            |
| 40:00      | doesn't have those, right, when your app gives you a notification and you kind of a 3D touch        |
| 40:04      | or long press or whatever, whatever the kids call it these days.                                    |
| 40:08      | And it's just nothing.                                                                              |
| 40:09      | It's just this empty notification with no action.                                                   |
| 40:12      | I always notice this and I thought, well, I'd really like to just tap yes or no or open             |
| 40:17      | or dismiss or something.                                                                            |
| 40:20      | And so for me, that was clear that this was like a, that needs to be in like to be directly         |
| 40:26      | in the notification.                                                                                |
| 40:28      | Hey, freelancers, want to save 192 hours?                                                           |
| 40:33      | The difference at FreshBooks can help you do just that with their super simple cloud                |
| 40:36      | accounting software.                                                                                |
| 40:38      | By simplifying tasks like invoicing, tracking expenses and getting paid online, FreshBooks          |
| 40:43      | has drastically reduced the time it takes for over 10 million people to deal with their             |
| 40:46      | paperwork.                                                                                          |
| 40:49      | FreshBooks automates late payment email reminders so you can spend less time chasing payments       |
| 40:53      | and more time working your magic.                                                                   |
| 40:55      | And with the new projects feature, you can share files and messages with your clients,              |
| 40:58      | contractors and employees.                                                                          |
| 41:00      | See how quickly things happen when all of your conversations live in one place.                     |
| 41:05      | If you're listening to this and not using FreshBooks yet, now is the time to try it.                |
| 41:09      | FreshBooks are offering an unrestricted 30 day free trial for listeners of this show,               |
| 41:13      | no credit card required.                                                                            |
| 41:14      | All you have to do is go to freshbooks.com/automators and enter automators in                 |
| 41:19      | the how did you hear about us section.                                                              |
| 41:21      | We thank FreshBooks for their support of this show and relay FM.                                    |
| 41:25      | All right, Simon, there's something on your website here that I'll admit it's a rabbit              |
| 41:31      | hole.                                                                                               |
| 41:32      | I have not gone down, but it looks like it could be pretty cool.                                    |
| 41:35      | Explain to me the JSON integration with push cut.                                                   |
| 41:40      | So I guess you were talking about the API itself, right?                                            |
| 41:44      | Yeah.                                                                                               |
| 41:45      | So in a way, you can trigger push cut notifications in two ways.                                    |
| 41:50      | One is just just copy paste the URL you get from the app.                                           |
| 41:53      | Don't even think about it.                                                                          |
| 41:54      | Just slap it in there.                                                                              |
| 41:55      | It's all safe and good.                                                                             |
| 41:56      | You'll be fine.                                                                                     |
| 41:57      | And it triggers a notification on your phone.                                                       |
| 42:01      | And you can, if as Rose said before, if you turn it, if you make it a post instead of               |
| 42:05      | a get command, it's like basic web stuff, right?                                                    |
| 42:09      | If you change it to post, you can attach this JSON thing.                                           |
| 42:13      | And that's pretty much that.                                                                        |
| 42:14      | But you can also use the push cut API, which in a way doesn't give you all that much more           |
| 42:23      | for just the pushing of notifications.                                                              |
| 42:26      | But what you can do is you can instead of having the secret in a URL, which let's put               |
| 42:31      | like this, it's safe enough for what it does.                                                       |
| 42:34      | But wherever you run this, if you cannot fully trust the machine this runs on, which I hope         |
| 42:41      | you usually do, for example, if you test it out and you copy the URL into a browser somewhere,      |
| 42:47      | it'll be in the browser history.                                                                    |
| 42:49      | And the URL is all you need to trigger the notification, it should be a big deal.                   |
| 42:54      | But in general, for like security purposes, it's not the best look to have like a secret            |
| 43:01      | in the URL directly.                                                                                |
| 43:02      | It's not a big deal.                                                                                |
| 43:03      | It's not like somebody can listen to this, I don't know, the transfer to the servers encrypted      |
| 43:10      | and everything.                                                                                     |
| 43:11      | So it's not really bad.                                                                             |
| 43:14      | It's just not a good look.                                                                          |
| 43:16      | So you shouldn't do it on somebody else's computer.                                                 |
| 43:20      | No, exactly.                                                                                        |
| 43:21      | Don't do it on somebody else's computer, right?                                                     |
| 43:23      | That's really all it is.                                                                            |
| 43:24      | And what you can do with the API is you can have an authentication token in the header,             |
| 43:32      | basically.                                                                                          |
| 43:33      | It's not that big a deal.                                                                           |
| 43:34      | It's just something that you should have if you have an API is have authentication in               |
| 43:39      | the header, not in the URL.                                                                         |
| 43:42      | And in this case, it's a token you can revoke at any time.                                          |
| 43:46      | And you can, so you could, I don't really know if anybody would need this, but you could            |
| 43:50      | set up multiple access tokens to your notifications, use them for different systems.                |
| 43:57      | And if any one of those systems for whatever reason was compromised and somebody has your           |
| 44:01      | access token, you can just disable this one token and everything else will still work.              |
| 44:06      | If the secret in the URL, like the URL comes with this password encoded, and once that's            |
| 44:13      | compromised for whatever reason, you can't just reset it in the app and say, hey, somebody          |
| 44:19      | sending me notifications, I don't want this.                                                        |
| 44:21      | You tap reset and everything's, you have a new secret and the old one is just no longer             |
| 44:27      | valid.                                                                                              |
| 44:28      | But that would kind of break all your notifications you do like this.                               |
| 44:32      | So I'm not sure.                                                                                    |
| 44:33      | The average user, if the word API doesn't get you excited, you don't have to, you don't             |
| 44:39      | have to go there.                                                                                   |
| 44:40      | It's fine.                                                                                          |
| 44:41      | But if web API is what makes your heart goes faster, there is an API, you can do things             |
| 44:46      | with it.                                                                                            |
| 44:47      | It's pretty cool.                                                                                   |
| 44:48      | Yeah.                                                                                               |
| 44:49      | And this is also advantageous if you're writing your own code and then you do what you're           |
| 44:53      | not supposed to do, which is accidentally commit your authorisation token to Git.                   |
| 44:58      | And then it's publicly on your GitHub profile and somebody can wander along and just see            |
| 45:01      | it.                                                                                                 |
| 45:02      | And add a note in the readme that it is a sample token that does not work.                          |
| 45:07      | Not that this has ever happened to me with any service at all.                                      |
| 45:10      | That sounds like the voice of experience.                                                           |
| 45:14      | Pretty much every programmer has accidentally committed something to a repository or a version      |
| 45:19      | control at some point that they should not be that a database password or an authorisation          |
| 45:24      | token something.                                                                                    |
| 45:25      | But at some point these things, if you're writing code from scratch, you're going to                |
| 45:30      | put it somewhere that you didn't intend to put it, and then it's nice to have that option           |
| 45:33      | to kill the authorisation token and to generate a new one.                                          |
| 45:37      | Because then it doesn't mean that your mistake is the end of your PushCut experience.               |
| 45:41      | Now, Simon, you added a feature recently.                                                           |
| 45:44      | In fact, it's one of the main reasons I want to have you on the show, because I think it's          |
| 45:47      | just so useful, is the [[Apple Watch]] integration.                                                     |
| 45:50      | Why don't you talk us through that?                                                                 |
| 45:52      | You know, I love the [[Apple Watch]].                                                                   |
| 45:54      | I have for years.                                                                                   |
| 45:57      | But for this app, I didn't really feel the originally it ran shortcuts, and it would                |
| 46:03      | open other apps through the URLs, right?                                                            |
| 46:05      | That's what you would do.                                                                           |
| 46:07      | And both of these things don't work on the [[Apple Watch]].                                             |
| 46:10      | So sadly, I just felt, well, not this time, maybe with the next step I do, I'll make something      |
| 46:16      | more watch-friendly.                                                                                |
| 46:18      | But then I started adding online actions where you can trigger Zapier or [[Make\|Integromat]] directly.       |
| 46:25      | And now Microsoft Flow is added, so you can connect those systems.                                  |
| 46:28      | And with the tap of a button, you can run something in Zapier directly.                             |
| 46:34      | And you can do that on the watch.                                                                   |
| 46:35      | That works.                                                                                         |
| 46:36      | And then I added the [[HomeKit]] scenes where you can, with the tap of a button, run a [[HomeKit]]          |
| 46:43      | scene directly.                                                                                     |
| 46:44      | And you can do that on the watch.                                                                   |
| 46:46      | And then just to make things complete, I added the background URL support, basically, mainly,       |
| 46:52      | to be able to trigger ifs, if webhooks directly.                                                    |
| 46:56      | Yeah.                                                                                               |
| 46:57      | And that works on the watch.                                                                        |
| 46:58      | And then I just felt, well, now I've got a package, and it was a pleasure doing [[SwiftUI]]         |
| 47:02      | on the watch, really.                                                                               |
| 47:03      | It's the first time I did [[SwiftUI]], too.                                                         |
| 47:05      | It's really fun.                                                                                    |
| 47:07      | And Rose, you said that you think the notifications look great with the emoji and everything.       |
| 47:12      | I love how it feels on the watch.                                                                   |
| 47:14      | I think on the watch it's just, I don't know, what it's about.                                      |
| 47:17      | I think the blackness of it, I don't know.                                                          |
| 47:19      | It's even prettier on the watch if you have the little notifications with the emoji.                |
| 47:27      | It feels good.                                                                                      |
| 47:28      | And then you get the little vibration when you tap it and it works.                                 |
| 47:32      | It's good times.                                                                                    |
| 47:33      | Yes.                                                                                                |
| 47:34      | Yeah.                                                                                               |
| 47:35      | I have to say, the haptic feedback on the watch is very nice.                                       |
| 47:37      | And when doing something, like, for example, choosing which scene it is that you want to            |
| 47:41      | run at 9 PM at night, it does just give you that little feeling of satisfaction.                    |
| 47:48      | Because maybe this is just the automation nerd in me talking, but I really like tapping             |
| 47:52      | buttons and then stuff just happens.                                                                |
| 47:55      | I'm like a little kid at Christmas.                                                                 |
| 47:57      | So yeah.                                                                                            |
| 47:58      | That's me.                                                                                          |
| 47:59      | You and me both.                                                                                    |
| 48:01      | Well, it's also just such an obvious use case for an app like this, where the app push cut          |
| 48:08      | is in a lot of ways a very fancy trigger.                                                           |
| 48:10      | And so wouldn't that make sense if you walk in the front door and you get a little tap              |
| 48:16      | on your wrist and you look down and then you choose what light set up or what music you             |
| 48:19      | want to play or whatever.                                                                           |
| 48:22      | And it's great.                                                                                     |
| 48:23      | It just does a good job of it and it just seems like such a natural fit.                            |
| 48:27      | As soon as I saw it, I'm like, oh, that's obvious.                                                  |
| 48:29      | I hadn't really thought about it in terms of push cut.                                              |
| 48:31      | But now that I have it, it's like, yes, of course, this is what we needed the whole time.           |
| 48:36      | Yeah.                                                                                               |
| 48:37      | And in a way, every good app does that, right?                                                      |
| 48:39      | Every good app gives you those notifications and quick interactions that you use all the            |
| 48:44      | time.                                                                                               |
| 48:45      | And that's what the watch is for, for the most part, is those quick interaction, like               |
| 48:50      | really quickly.                                                                                     |
| 48:51      | You turn your wrist and it all needs to be there and you tap the thing and needs to work            |
| 48:55      | within immediately and then you're out again.                                                       |
| 48:59      | But so many apps don't and so many situations don't give you good notifications, especially         |
| 49:05      | [[HomeKit]] again.                                                                                      |
| 49:06      | There are a few, I think, there are a few things it does, it informs you about certain              |
| 49:10      | stuff, but you certainly can't tell [[HomeKit]], I want in this situation, I want to have this          |
| 49:15      | question and that's the options I want to have.                                                     |
| 49:19      | And now with push cut and [[HomeKit]] and the watch, I think it's like a perfect trio.                  |
| 49:23      | I feel so too, like you said.                                                                       |
| 49:26      | Once you see the screenshot of the [[HomeKit]] question, hey, should we do this or that on              |
| 49:31      | the watch?                                                                                          |
| 49:32      | I think that tells you the story, like what this is for, a quick interaction you can tap            |
| 49:36      | on basically.                                                                                       |
| 49:37      | Yeah.                                                                                               |
| 49:38      | I mean, like you were saying earlier, it's nice that app developers, good apps will give            |
| 49:42      | you the prompts you want on the watch, but none of them let you make your own prompt,               |
| 49:47      | which is what push cut does.                                                                        |
| 49:48      | Like I can say, am I going to listen to Star Wars today or am I going to listen to jazz?            |
| 49:53      | And just like it just shows up on my watch, I tap a button and music starts playing.                |
| 49:58      | And it all happens so seamlessly that that's the kind of automation I get excited about.            |
| 50:04      | Me too.                                                                                             |
| 50:05      | I'm very glad to hear that.                                                                         |
| 50:08      | All right.                                                                                          |
| 50:09      | So Simon, share some of your favourite automation.                                                   |
| 50:12      | So maybe it's push cut, maybe it's something else, maybe it's some of your [[HomeKit]] stuff.           |
| 50:16      | We'd love to hear some of the stuff you're doing with automation.                                   |
| 50:19      | Sure.                                                                                               |
| 50:20      | So one thing I have to say ever since I started developing push cut, my automation life has         |
| 50:25      | been a mess.                                                                                        |
| 50:27      | I realised this the other day that like what people like you do, like people who talk about         |
| 50:32      | those things and from personal experience and test out things all the time and have the             |
| 50:36      | latest battles of everything, I couldn't handle my one app really.                                  |
| 50:40      | Like everything fell apart because I, you know, you're setting up test situations and               |
| 50:44      | test shortcuts and you test this and that and then you forget about it.                             |
| 50:48      | And for a screenshot, you kind of clear out this a little bit and then it was a nightmare.          |
| 50:52      | So I am like at the worst ever in terms of personal things I do with it.                            |
| 50:59      | The cobbler whose children have no shoes.                                                           |
| 51:02      | Exactly.                                                                                            |
| 51:03      | That's what it feels like.                                                                          |
| 51:05      | But I do, so one thing, depending on how legal this is, I might or might not have done the          |
| 51:11      | following.                                                                                          |
| 51:12      | I, not as much as right now, but back then I would go to McDonald's like, I don't know,             |
| 51:18      | twice a month maybe.                                                                                |
| 51:20      | And I would always go drive through here in Wells and I have this app, I guess it's everywhere      |
| 51:26      | where you can collect those points and they scan this sort of, they scan the barcode in             |
| 51:30      | the app.                                                                                            |
| 51:31      | And I never know where this app is.                                                                 |
| 51:33      | And I would always sit in the car and type in McDonald's to search for it on the phone,             |
| 51:38      | just to get the stupid app to scan the barcode.                                                     |
| 51:41      | And so that's one of the things I tried out with, with iBeacons basically.                          |
| 51:45      | And I set up a push get notification that whenever I'm at the McDonald's, and now here's            |
| 51:51      | the story.                                                                                          |
| 51:52      | When it's legal to place an iBeacon on some street sign somewhere, then I did that.                 |
| 51:56      | And if not, I set up a CHEU offense, but it worked perfectly basically.                             |
| 52:00      | And whenever I go there, you have placed iBeacons out in the world for your own use.                |
| 52:08      | I can either confirm or deny.                                                                       |
| 52:11      | I love that.                                                                                        |
| 52:13      | That is absolutely genius.                                                                          |
| 52:16      | So if that's not against some sort of law regulation, then that's a pretty good deal                |
| 52:21      | because there's a road next to the McDonald's that I drive by all the time.                         |
| 52:27      | It's a big road that you kind of drive there all the time.                                          |
| 52:30      | And it would always trigger whenever I go past it, and it didn't feel good enough.                  |
| 52:35      | So with iBeacons, you can go a lot more focused in terms of location.                               |
| 52:41      | And now I have this thing.                                                                          |
| 52:42      | Whenever I go there, my phone says, hey, should we open this app?                                   |
| 52:46      | And I say, yeah.                                                                                    |
| 52:47      | And then I just call the shortcut that opens the app.                                               |
| 52:50      | And that's that.                                                                                    |
| 52:51      | It's one of those small little things, but I don't know.                                            |
| 52:54      | That's kind of what I really like about the, I think the best automations are the ones              |
| 52:59      | that are like two steps, but it's like just the right steps at the right time.                      |
| 53:03      | Yeah.                                                                                               |
| 53:04      | I'm just picturing in my mind, like the gardener at McDonald's looking in the planter box           |
| 53:10      | and saying, what is this thing in the planter?                                                      |
| 53:13      | Yeah.                                                                                               |
| 53:14      | I mean, they're really small, right?                                                                |
| 53:16      | If you don't know where it is, you'll not find it.                                                  |
| 53:18      | Yeah.                                                                                               |
| 53:19      | If it's there at all.                                                                               |
| 53:20      | It's like you've just opened up a whole world to me.                                                |
| 53:22      | I'm just thinking where the place is in the world I need to put an iBeacon.                         |
| 53:27      | I suspect that David's gym will shortly be outfitted with iBeacon technology and the                |
| 53:31      | gym owners may or may not know about this.                                                          |
| 53:34      | Or even like I was thinking the supermarket is a good one because that's, this is an example        |
| 53:40      | automation gone awry using a geo location fence around my supermarket.                              |
| 53:47      | I always go to the same market all the time.                                                        |
| 53:51      | And then you go there and then the automation triggers to get you your grocery list, whatever       |
| 53:57      | it is that you need to buy.                                                                         |
| 53:59      | But the problem is, as you guys mentioned, those fences are too big.                                |
| 54:04      | And so I drive by the grocery store all the time and it's always trying to tell me to               |
| 54:08      | buy milk and I'm not actually going to the grocery store.                                           |
| 54:11      | So I'm thinking, huh, I wonder where I could put one in or very close to the grocery store.         |
| 54:20      | Unfortunately for me, I'd regularly walk past, there's three different grocery stores               |
| 54:25      | I go to on a regular basis and I regularly walk past two or three of them on the way                |
| 54:30      | home from work, depending on which way it is I'm taking home.                                       |
| 54:33      | So if I did that, then I would still get the notifications.                                         |
| 54:35      | I think I'll stick with my geo fence in that respect.                                               |
| 54:38      | Oh, but it would get even better.                                                                   |
| 54:40      | Like let's say you only get the spicy carrots at Trader Joe's, then if you had an iBeacon           |
| 54:45      | near your Trader Joe, it would only give you that.                                                  |
| 54:47      | You could have separate lists, Simon, you're causing trouble, I can already tell you.               |
| 54:53      | That only works if not everybody's doing it, I think.                                               |
| 54:55      | Well, to this way, if you live in a community where you know that there are other nerds,            |
| 55:00      | you could also share iBeacons.                                                                      |
| 55:02      | Absolutely.                                                                                         |
| 55:03      | And I'm willing to bet that there are other nerds in Orange County.                                 |
| 55:06      | There probably are, where you are as well, Simon, I'm sure there are people in Vienna.              |
| 55:10      | So if anybody's up for sharing some iBeacons.                                                       |
| 55:14      | You know, it's funny because I think the whole iBeacon thing was inventid to get places             |
| 55:19      | or stores or like museums to place them and have their apps pick up on them.                        |
| 55:25      | I believe, I think that was the original intent.                                                    |
| 55:28      | It was, I believe it was done by [[Apple]] originally to help track the flow of customers in the        |
| 55:33      | [[Apple Store]].                                                                                        |
| 55:34      | I'm probably completely wrong on this, so I'll try and find the original information                |
| 55:37      | for the show notes.                                                                                 |
| 55:39      | But it's so that they can tell where you are in the store and give you information based            |
| 55:43      | on that.                                                                                            |
| 55:44      | Because if you've noticed, if you're like right in front of or inside an [[Apple Store]],               |
| 55:48      | whether or not you're connected to the Wi-Fi, if you have the [[Apple Store]] app installed on          |
| 55:52      | your phone, it pops up and goes, hi, welcome to XYZ [[Apple Store]].                                    |
| 55:58      | And I'm pretty certain that that is done with iBeacons.                                             |
| 56:01      | Somebody from [[Apple]], if you know that this is done with iBeacons and you want to write              |
| 56:04      | to me and let me know, I will not tell anybody, but I can just follow up on a future podcast.       |
| 56:10      | Because I would really like to know that, but I'm pretty certain that that's what it                |
| 56:13      | was for.                                                                                            |
| 56:14      | It's to help track people inside of stores and either provide them with more information            |
| 56:17      | or provide stores with marketing information, depending on how they choose to implement             |
| 56:22      | it.                                                                                                 |
| 56:23      | Well, just given the way it works, I would almost guarantee you it's iBeacon because                |
| 56:27      | it's such a small geofence.                                                                         |
| 56:29      | It literally happens as you walk in the front door.                                                 |
| 56:31      | Yeah.                                                                                               |
| 56:32      | Yeah.                                                                                               |
| 56:33      | And I think that's what they were meant to be.                                                      |
| 56:35      | And they're also so inexpensive, so you could just place them all over the place really.            |
| 56:39      | It's not a big deal.                                                                                |
| 56:42      | Yeah.                                                                                               |
| 56:43      | But as I said before, reading through the documentation, it feels a bit like a forgotten            |
| 56:47      | technology.                                                                                         |
| 56:48      | Like, it was this big thing and then nobody really cared about it and now it's sitting              |
| 56:52      | around.                                                                                             |
| 56:53      | I mean, you can order them on [[Amazon]], but it feels a bit forgotten.                                 |
| 57:00      | This episode of Automators is brought to you by Flatiron School.                                    |
| 57:05      | Launch a career in tech with Flatiron School's modern curriculum, paired with one-on-one            |
| 57:09      | support from dedicated career coaches all in just 15 weeks.                                         |
| 57:14      | Fall is in the air and the kids aren't the only one going back to school.                           |
| 57:17      | At Flatiron School, students are parents, musicians, travelers, and working professionals           |
| 57:23      | from all walks of life.                                                                             |
| 57:25      | Learn software engineering, UX, UI design, or data science at Flatiron School in just               |
| 57:30      | 15 weeks, and launch a new career with one-on-one support from their dedicated career coaches.      |
| 57:36      | Flatiron School stands behind their students with a money-back guarantee.                           |
| 57:40      | Complete details are at flatironschool.com/terms.                                             |
| 57:45      | Flatiron School's committed instructors have both industry and teaching experience and              |
| 57:49      | are backed by the master teachers and learning experience designers to ensure you get the           |
| 57:54      | best possible support, whether you choose to learn on campus or online.                             |
| 57:59      | This fall, pursue your passion and discover your potential and go back to school with               |
| 58:04      | Flatiron School.                                                                                    |
| 58:05      | Get a head start with the free boot camp prep course at flatironschool.com/automators.        |
| 58:12      | See you in class.                                                                                   |
| 58:13      | Our thanks to Flatiron School for their support of the automators and Relay FM.                     |
| 58:18      | All right, Simon.                                                                                   |
| 58:20      | We've been talking about iBeacons.                                                                     |
| 58:22      | I think we've been teasing the audience.                                                            |
| 58:23      | So let's just go and do some iBeacon 101 right now.                                                   |
| 58:29      | If someone's listening and they're tempted to, I don't know, put one at their McDonald's,           |
| 58:35      | or maybe just in their office, that works too.                                                      |
| 58:38      | I mean, you're the lawyer.                                                                          |
| 58:40      | I'm pretty sure you have to ask permission.                                                         |
| 58:42      | I don't know what you're talking about.                                                             |
| 58:43      | I'm a geek right now.                                                                               |
| 58:44      | I'm not a lawyer.                                                                                   |
| 58:48      | But just how do you get started with iBeacons?                                                       |
| 58:52      | Where do you buy them and talk about the setup?                                                     |
| 58:54      | Because I really think the barrier to these things is you get one and you're not even               |
| 58:58      | sure what you're supposed to do with it.                                                            |
| 58:59      | I think you're right.                                                                               |
| 59:00      | And also, I'm not really a big expert on it.                                                        |
| 59:03      | What I did, I went to [[Amazon]], I typed in iBeacon, and I just ordered the cheapest one.                |
| 59:10      | I think it was a three-pack.                                                                        |
| 59:11      | And I did this like a year ago, and that's pretty much it.                                          |
| 59:15      | So that's all I have.                                                                               |
| 59:17      | And there are these little disks, I don't know, like a bigger coin maybe, and you put               |
| 59:25      | in a battery.                                                                                       |
| 59:26      | And the tricky part, you have to set them up once.                                                  |
| 59:29      | And I think every manufacturer has their own sort of system.                                        |
| 59:34      | But basically, there are free apps.                                                                 |
| 59:36      | I think it's, I don't know what it was called.                                                      |
| 59:39      | It's like something like *setparam*, like setparameter.                                               |
| 59:44      | And it would just connect to this iBeacon.                                                            |
| 59:45      | I don't even know.                                                                                  |
| 59:46      | I'm not so sure how.                                                                                |
| 59:47      | I don't even know what technology this is.                                                          |
| 59:49      | I think it's Bluetooth-related somehow.                                                             |
| 59:52      | So what you have to do once is you set up, you have to give it this ID, which is just               |
| 59:56      | a long text with weird characters in it.                                                            |
| 01:00:00   | And it's just a unique ID, right?                                                                   |
| 01:00:02   | It's just like a long key, if you will.                                                             |
| 01:00:06   | And that's really all you need to set.                                                              |
| 01:00:07   | There are two other values called major and minor.                                                  |
| 01:00:10   | As far as I understand, this was back then kind of inventid to help those cases where,              |
| 01:00:17   | let's say McDonald's would use them like for real, and they would have one McDonald's               |
| 01:00:21   | ID, and they could use the major and minor to maybe address their individual restaurants            |
| 01:00:27   | and maybe even the entrances.                                                                       |
| 01:00:29   | And so each door could have its own unique key, major, minor sort of identifier.                    |
| 01:00:37   | But you don't need that.                                                                            |
| 01:00:38   | All you need is the one ID.                                                                         |
| 01:00:40   | And you just set that.                                                                              |
| 01:00:41   | And the other thing you can set is the strength, the signal strength.                               |
| 01:00:48   | That's where it gets really funny, because it's not really that clean cut.                          |
| 01:00:53   | You don't set it in meters or a yard or whatever.                                                   |
| 01:00:57   | You set it in some sort of decibel signal strength, we can...                                       |
| 01:01:02   | And I'm not too...                                                                                  |
| 01:01:03   | I don't know what that means, but basically, if you Google around, you'll find a table              |
| 01:01:07   | where it says, well, if you set it to negative 70, that means roughly 10 meters.                    |
| 01:01:12   | And if you set it to this number, that means roughly 150 meters.                                    |
| 01:01:16   | And it all depends, of course, on which walls are in the middle and what the situation is.          |
| 01:01:21   | But more or less, that's what you need to set up, the one ID and the one identification             |
| 01:01:27   | string and the signal strength.                                                                     |
| 01:01:30   | And once that's set up, this thing will run for years, basically.                                   |
| 01:01:34   | And you just place it or don't somewhere next to McDonald's.                                        |
| 01:01:39   | And then you copy the ID into push cut and give it a name and say, that's now the McDonald's        |
| 01:01:44   | location.                                                                                           |
| 01:01:45   | And from that forward, it's literally the same as a GU fence.                                       |
| 01:01:51   | So even the iPhone itself treats this thing much like a GU fence.                                   |
| 01:01:55   | You can enter this region that's kind of produced by the beacon and you can leave the region        |
| 01:02:00   | produced by the beacon.                                                                             |
| 01:02:02   | That's it.                                                                                          |
| 01:02:03   | And I think that starts with iPhone 10.                                                             |
| 01:02:05   | I mean, it's not all of the iPhones that you see these.                                             |
| 01:02:08   | No, that's NFC, I think.                                                                            |
| 01:02:09   | That's way older.                                                                                   |
| 01:02:10   | Yeah, it's been around for quite a long time.                                                       |
| 01:02:13   | Because Launch Center Pro added this quite a few years ago.                                         |
| 01:02:17   | And I don't remember, but that was in the version before they did the recent update                 |
| 01:02:21   | and it was working on my iPhone years ago.                                                          |
| 01:02:24   | So I've been using this for quite a while.                                                          |
| 01:02:27   | And I've got a couple sitting around in coffee cups on my desk along with some pens and paper       |
| 01:02:32   | clips and things like that.                                                                         |
| 01:02:34   | But I have the Estimote Beacons and they are a little more expensive and they're unfortunately      |
| 01:02:39   | not available on [[Amazon]] right now, which makes them a little harder to get hold of because          |
| 01:02:43   | you have to buy them from Estimote directly and they're more set up for developers.                 |
| 01:02:48   | But they also have an NFC tag built in, which means that the one on my desk at work recently        |
| 01:02:52   | got taken out of the coffee cup and put it on my desk.                                              |
| 01:02:54   | So when I go into the region, PushCut tells me, hey, you probably want to clock in and              |
| 01:02:59   | why leave it clock out.                                                                             |
| 01:03:01   | But then when I tap it, then it runs a shortcut to help me with my time tracking at work.           |
| 01:03:06   | So I have a two and one there.                                                                      |
| 01:03:09   | And what's the software used to manage the Estimote's?                                               |
| 01:03:13   | There's an Estimote app.                                                                            |
| 01:03:15   | It is updated for the iPhone 10 size.                                                               |
| 01:03:18   | I'm not sure if they ever updated it for the Max size, but it works pretty well.                    |
| 01:03:23   | And in my case, I can replace the batteries inside of mine, which I recently had to do              |
| 01:03:26   | because I've had them for over two years.                                                           |
| 01:03:28   | And the battery life on them is approximately two years, at least on mine.                          |
| 01:03:31   | It varies depending on the device, of course.                                                       |
| 01:03:33   | Yeah.                                                                                               |
| 01:03:34   | That's the thing I liked about the Estimote's, too.                                                  |
| 01:03:35   | They were more expensive, but you can manage them from the phone.                                   |
| 01:03:39   | Yeah.                                                                                               |
| 01:03:40   | But then I'm looking online and I hadn't really thought about kind of cheap iBeacons, but           |
| 01:03:45   | you can get like two for $17.                                                                       |
| 01:03:47   | It's not super expensive.                                                                           |
| 01:03:50   | I may have to buy some more.                                                                        |
| 01:03:52   | I also have one in my suitcase, and I usually turn this automation off except when I'm traveling.   |
| 01:03:57   | But then when I'm traveling, I turn it on because A, it allows me to know where my suitcase         |
| 01:04:01   | gets near me.                                                                                       |
| 01:04:02   | And B, it lets me use my hotel room as a location.                                                  |
| 01:04:07   | And then it prompts me to do stuff like open OmniFocus for the things I intended to do when         |
| 01:04:12   | I got back to my hotel room, like installing this super large [[Apple]] Wi-Fi, for example.             |
| 01:04:17   | Which when you're traveling and you don't have data roaming because you're in the US                |
| 01:04:19   | and it's horrendously expensive, it's quite useful.                                                 |
| 01:04:22   | Now that you said that, one thing we didn't really cover, but I feel could be a value               |
| 01:04:28   | to especially listeners of this show, you can use shortcuts to schedule push cut notifications.     |
| 01:04:35   | And one thing you can do is you can use shortcuts to schedule push cut notifications when you       |
| 01:04:40   | arrive at a location which can be a beacon.                                                         |
| 01:04:44   | So I don't think anybody has really set this up, well at least nobody that has contacted            |
| 01:04:49   | me about it.                                                                                        |
| 01:04:51   | But in my brain, it was a good way maybe to have some sort of system that reads, I don't            |
| 01:04:56   | know, to-dos and you can schedule them when you arrive home or some sort of fancy way               |
| 01:05:00   | of snoozing tasks that you can connect to beacons.                                                  |
| 01:05:05   | That I think you can't really do otherwise.                                                         |
| 01:05:07   | So if you have a cool solution built with that, let me know.                                        |
| 01:05:10   | In my case, I'm using the shortcut integration to schedule notifications.                           |
| 01:05:14   | So when I clock in at work, it prompts me in eight hours to clock out because I frequently          |
| 01:05:21   | end up staying at work longer than the scheduled eight hours a day.                                 |
| 01:05:25   | And this way, I get reminded with a helpful, by the way, when you are leaving, just tap             |
| 01:05:29   | here.                                                                                               |
| 01:05:30   | But of course, when I leave the I beacon area, should I be leaving early or considerably            |
| 01:05:35   | later and I for some reason cleared out my notifications, then I get that as well.                  |
| 01:05:40   | And for me, the I beacons are extremely helpful just because I work on the sixth floor, I           |
| 01:05:45   | live on the fourth floor, geofencing is not as accurate as a small I beacon in an office.           |
| 01:05:51   | Well, I think we're going to have to do more coverage of this going forward on these.               |
| 01:05:57   | We talked about this when we first started doing the show, we just haven't got around               |
| 01:06:00   | to it yet.                                                                                          |
| 01:06:01   | But push cut in particular is a great application to use if you want to go down the I beacon        |
| 01:06:08   | rabbit hole.                                                                                        |
| 01:06:09   | Yes, it really is.                                                                                  |
| 01:06:11   | And for me, it's become one of these apps that I'm not really sure how I would live                 |
| 01:06:15   | without it because as well as using it for the automations and everything else that we've           |
| 01:06:19   | talked about on this episode, I also use it to get notifications out of things that I               |
| 01:06:22   | otherwise wouldn't necessarily get notifications out of.                                            |
| 01:06:25   | Well, for example, I've got some project management software which doesn't have iOS support and     |
| 01:06:35   | it doesn't offer I beacon, sorry, it doesn't offer push notifications, doesn't offer I              |
| 01:06:42   | beacon support as well either, surprisingly enough.                                                 |
| 01:06:45   | But it fails to send me notifications when things get assigned to me and stuff like that,           |
| 01:06:49   | which is stuff I would really like to know about, but it has support for webhooks.                  |
| 01:06:53   | And so I just set it up so that whenever something gets assigned to me, it pangs a webhook with     |
| 01:06:57   | the information it does a post and it tells me, hey, XYZ was assigned to you and then               |
| 01:07:02   | more information and when I tap on it, it opens the URL to the web application, which               |
| 01:07:06   | has been an absolute lifesaver because stuff has been being assigned to me left, right              |
| 01:07:10   | and centre.                                                                                         |
| 01:07:11   | And this way I actually know about it and I don't have to rely on email notifications               |
| 01:07:15   | and then waiting through my email inbox, which after spending a week on a training course           |
| 01:07:21   | in Germany is a rather far away from inbox zero, much further than I would like.                    |
| 01:07:28   | So Simon, what's the, well, first of all, kind of your personal story, this was a success           |
| 01:07:34   | for you and now this is your full-time gig, right?                                                  |
| 01:07:37   | I mean, it's a bit early to call it a success, like financially, and I know I'm on the Automators    |
| 01:07:44   | podcast, so I could die right now.                                                                  |
| 01:07:46   | You know what I mean?                                                                               |
| 01:07:47   | It's been great.                                                                                    |
| 01:07:48   | That sort of feedback I've been being able to speak to people like you about that.                  |
| 01:07:54   | So that's very successful if you ask me.                                                            |
| 01:07:58   | I think for a person and a family to be able to live off an app, it needs to do fantastically,      |
| 01:08:05   | not just good.                                                                                      |
| 01:08:06   | So I'm not sure where I am in this area, but it's not even been a year doing this sort              |
| 01:08:15   | of work and so it's all still possible.                                                             |
| 01:08:19   | I'm still dreaming.                                                                                 |
| 01:08:20   | I'll tell you, we're all glad you're dreaming because this is a great app and any bit that's        |
| 01:08:25   | interested in automation needs a checkout push cut.                                                 |
| 01:08:27   | You can download it for free.                                                                       |
| 01:08:29   | There is a subscription if you want to get some additional features, but even just the              |
| 01:08:34   | stuff you give away for free is really powerful.                                                    |
| 01:08:36   | So I think everybody should at least give this one a try.                                           |
| 01:08:40   | And like I said, it's an audio podcast.                                                             |
| 01:08:44   | It's a very technical subject, so I'd recommend heading over to the push cut website and taking     |
| 01:08:48   | a look at some of the examples.                                                                     |
| 01:08:51   | Another place you can go is into the forums for the Automators.                                     |
| 01:08:53   | We've got these great forums and lots of people sharing stuff there.                                |
| 01:08:58   | And give this a try.                                                                                |
| 01:08:59   | Yeah.                                                                                               |
| 01:09:00   | Thanks for saying that.                                                                             |
| 01:09:01   | Simon, where should people reach out if they want to get a hold of you?                             |
| 01:09:07   | The forums is a good place.                                                                         |
| 01:09:09   | I'm trying to be there all the time and see if anybody has a question in this area.                 |
| 01:09:16   | Of course, there's Twitter.                                                                         |
| 01:09:17   | You can find the app on Twitter.                                                                    |
| 01:09:20   | I tried to post about updates or new features there as they come out.                               |
| 01:09:25   | One thing I was just thinking about, as Rose mentioned, the situation where you want a              |
| 01:09:32   | notification eight hours after you enter a region, I'm actually working on a feature                |
| 01:09:38   | right now to have this sort of delayed location notification.                                       |
| 01:09:42   | So that might be something that you get out of the box.                                             |
| 01:09:45   | And once that version ships, I'm sure to announce it on Twitter too.                                |
| 01:09:50   | So that's a good place, I would say.                                                                |
| 01:09:51   | There's also a Reddit, so anywhere.                                                                 |
| 01:09:54   | If you Google it, you'll find it.                                                                   |
| 01:09:58   | Just a message through, I'm always happy to receive them.                                           |
| 01:10:01   | Yeah.                                                                                               |
| 01:10:02   | Well, I recommend everybody download and give push, try if you haven't already got it installed.    |
| 01:10:06   | It's just a great app.                                                                              |
| 01:10:08   | And if you're interested in automation, it just opens some doors that you didn't have               |
| 01:10:12   | otherwise.                                                                                          |
| 01:10:13   | And honestly, just the way you display the options, like I said at the beginning, it's              |
| 01:10:19   | automation triggers plus options, which it's not that easy to get that in other ways.               |
| 01:10:24   | So that's worth checking out for that reason alone.                                                 |
| 01:10:28   | We are the Automators.                                                                              |
| 01:10:29   | You can find us over at relay.fm/automators.                                                  |
| 01:10:31   | Thank you to our sponsors, Flatiron School, FreshBooks and Smile.                                   |
| 01:10:36   | And we will see you in a couple of weeks.                                                           |
| 01:10:37   | Goodbye, everybody.                                                                                 |
