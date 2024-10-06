---
status: incomplete
fc-date:
  year: 2023
  month: 11
  day: 3
fc-category: podcast
podcast: Automators
published: 2023-11-03
duration: 4749
formattedduration: 01:19:09
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Casey Liss
notetype: episode
showpage: http://relay.fm/automators/140
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators140.mp3
episode: 140
title: "140: LimitLiss Automations with Casey"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary are joined by Casey Liss to talk about all things automation—from home automation from the 1970s to Shortcuts now.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Casey Liss]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- *Episode 140 discussion topic was not automatically created on the forum.*

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.

# Show Notes
- [Liss is More](https://www.caseyliss.com/)
- [Apps — Liss is More](https://www.caseyliss.com/elsewhere#apps)
- [Accidental Tech Podcast](https://atp.fm/)
- [Analog(ue) - Relay FM](https://www.relay.fm/analogue)
- [X10 (industry standard) - Wikipedia](https://en.wikipedia.org/wiki/X10_(industry_standard))
- [Toggle or Rocker: Which Light Switch Is Better? - Everyday Home Repairs](https://everydayhomerepairs.com/toggle-or-rocker-which-light-switch-is-better/)
	- The UK usually has a smaller rocker-style switch.
- [Caseta by Lutron | Smart Light Switches, Controls & Dimmers](https://www.casetawireless.com/us/en)
- [Smart Dimmers & Fan Switches | Caseta by Lutron](https://www.casetawireless.com/us/en/products/dimmers-switches)
- [Aqara Smart Home Controllers](https://www.aqara.com/en/product/controller/#smart-home-controllers)
- [Pushover: Simple Notifications for Android, iPhone, iPad, and Desktop](https://pushover.net/)
- [Pushcut | Automatically show your favourite site's recent news on your homescreen](https://www.pushcut.io/)
- [Home Assistant](https://www.home-assistant.io/)
- [Homebridge](https://homebridge.io/)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to The Automators. I'm David Sparks and I'm joined by the esteemed automator of                  |
| 00:08      | the Internet, Rosemary Orchard. How's it going, Rose?                                                    |
| 00:10      | It's pretty great, to be honest, David. I got confused by time zones today, so I was                     |
| 00:16      | an hour early. Actually, I was over an hour early for the recording, but better an hour                  |
| 00:19      | early than an hour late because that's when your automations fail right rather than fail                 |
| 00:23      | wrong. And yeah, that seems appropriate because we have an extra time zone to add to today's             |
| 00:28      | episode. Welcome to the show, Casey Liss. Hello. Thank you for having me.                                |
| 00:33      | Thank you for coming on. I always like talking to Casey. He's                                            |
| 00:37      | famous for the fact that he loves Anaheim Disneyland more than Disney World.                             |
| 00:44      | So our pre-show chatter is coming back to bite me, I see. I see how it is.                               |
| 00:49      | And you're an automator. You're doing all kinds of automator stuff. Occasionally over                    |
| 00:54      | on your podcast, ATP, I feel like they're a little bit verbally abusive to you when                      |
| 01:01      | you do some of your crazy automation. And I feel like we need to bring you into a safe                   |
| 01:05      | space. We need you to come in the automator so you can talk about the stuff where we will                |
| 01:09      | not go after you. We'll just mock them for not actually doing                                            |
| 01:14      | anything that will make their lives easier. See, there you go.                                           |
| 01:17      | Well, we're happy to have you here to talk about automation, Casey, on the extended version              |
| 01:22      | of the automators, where you get the extended show without ads. Casey and I are going to                 |
| 01:27      | be talking, and Rose as well, about the various Disney park locations, maybe a little automation         |
| 01:33      | when we visit the parks, but also Casey and I have an old rivalry we need to discuss.                    |
| 01:40      | So we'll bring that up as well. But either way, Casey, for folks who don't                               |
| 01:45      | know you, you are an independent application programmer. You've got multiple apps. I'm                   |
| 01:51      | not even going to try to remember them all at this point, Casey. We'll give us a list                    |
| 01:54      | of your apps now. Yeah, so you may know me from such apps                                                |
| 01:59      | as Peak of You, which I wrote after going to Disney World, the Superior Park, several                    |
| 02:05      | years ago when my daughter was really interested in looking at pictures and I was scared she             |
| 02:09      | was going to delete them all. So that's a read-only photo gallery. There's also Masquerade,              |
| 02:13      | which is an app that lets you very quickly put emoji over people's faces for privacy                     |
| 02:17      | or for fun. But you might know me if anything from Callsheet, which is a new-ish app. It                 |
| 02:23      | was a couple of months ago now that I released that's basically the quickest and easiest                 |
| 02:28      | and best way to look up film information and TV information. So actors, actresses, TV                    |
| 02:33      | shows, movies, et cetera, et cetera. Think of it as IMDB, but done by someone who cares.                 |
| 02:37      | And so yeah, in my mind, it's IMDB, but it doesn't suck. But you know, that's the way                    |
| 02:42      | I think. Yeah.                                                                                           |
| 02:43      | But yeah, great job and congratulations again on all these apps. Casey is also on the Accidental         |
| 02:49      | Tech podcast, ATP, which is one of the premier podcasts in the [[Apple]] space. And occasionally,            |
| 02:59      | Casey talks about his automation over there and I do feel like we need to give him a forum               |
| 03:05      | to talk about it. And so I thought we'd start, Casey, tell us, how did you get started in                |
| 03:10      | automation?                                                                                              |
| 03:11      | I feel like we're channeling my other podcast analog and talking about feelings, but no.                 |
| 03:16      | So yeah, I got started. I had an actually unusual entry into the automation world. My dad worked         |
| 03:23      | for IBM for effectively my whole life, and he was always a bit of a nerd and a tinkerer,                 |
| 03:29      | both in the computing space and in physical space. There was a brief window of time before               |
| 03:34      | he worked for IBM that he was an actual professional mechanic. He had pinball machines for a long        |
| 03:38      | time, would tinker with them. But when we were growing up, dad was really, really into,                  |
| 03:44      | I believe it was called X10, like the letter X and then the numeral one zero X10, which                  |
| 03:50      | was this ancient automation and like home control standard that ran over power lines.                    |
| 03:56      | If I'm not mistaken, it's been so long since I've really thought about this that I might                 |
| 04:01      | have my details wrong. But basically you could have these very homely looking boxes strewn               |
| 04:07      | around the house. And I think you could also put them in place of regular switches. But                  |
| 04:11      | you could have all of your stuff hooked up to like a computer. He had his hooked up to                   |
| 04:17      | an old IBM laptop because again, he was an IBMmer. And you could do some modicum of automation           |
| 04:23      | with these things. You know, at such and such a time, turn this on at such and such a time,              |
| 04:26      | turn that off, you know, dim it to 50% and then an hour later, bring it to 100% and stuff                |
| 04:30      | like that. This is mostly around lights. I don't really think there was much else that                   |
| 04:35      | he had done other than I actually don't know if I've ever told the story publicly. It's                  |
| 04:40      | nothing like bad or terribly exciting. But we had in the house I grew up spent most of                   |
| 04:45      | my time growing up in. It was at the top of a hill and the driveway was very, very long                  |
| 04:50      | and you couldn't really see the bottom of the driveway from inside the house. And dad                    |
| 04:54      | came up with what he called Luz, L-E-W-S, List Early Warning System. And what it was                     |
| 04:59      | was a physical tube that ran across the bottom of the driveway. And you might remember this              |
| 05:03      | or know about this from like gas stations long before any of us were children. And it                    |
| 05:09      | was, you would drive over this tube, this rubber tube, and it would, I guess, connect                    |
| 05:13      | a relay or something. I'm not sure how the internals worked.                                             |
| 05:16      | They usually worked on compressed air. It was like there was air and the air would fire                  |
| 05:20      | a basically pneumatic switch the way they used to work. Yeah.                                            |
| 05:25      | So you got the idea. And then that was connected to the X-10 system such that it would chime             |
| 05:30      | effectively a doorbell inside the house so we would know when someone was approaching                    |
| 05:34      | the house. And so that was my upbringing. And then when I went to college at Virginia                    |
| 05:38      | Tech, this was in the early aughts, dad had a couple of pieces of X-10 laying around.                    |
| 05:43      | And so at this point in time in like 2000, not string lights, which are all the craze                    |
| 05:48      | right now, but rope lights were the new hotness. And so in my dorm room, I had rope lights               |
| 05:56      | going across the bottom of the like bunk bed that was in there. And I had a little remote                |
| 06:01      | control that I could use with a very, very limited X-10 setup in order to like turn on                   |
| 06:06      | or off the rope lights or dim them or what have you. It was completely and utterly useless,              |
| 06:11      | but it was an interesting conversation piece for other nerds that came into my room. And                 |
| 06:16      | so that's where I got started. And then fast, I didn't really think about automation for                 |
| 06:20      | the longest time. And then fast forward to the home kit.                                                 |
| 06:22      | Not for a minute there because this X-10 thing is worth notice because I feel like the older             |
| 06:27      | listeners will remember this because it was a big deal at the time. Like if you were of                  |
| 06:33      | a certain nerdy persuasion and you got like, like I would get electronics magazines and                  |
| 06:39      | then there was always like pages and pages of X-10 stuff for sale. And like you could                    |
| 06:46      | replace your sockets. And there was a, I mean, it was super nerdy and way more involved                  |
| 06:52      | than what you do now when you just plug a home kit thing into the wall. But you had                      |
| 06:56      | to really like take this on, but people had really gone far with that. I never knew anybody              |
| 07:03      | that did it. I was a kid. I didn't have any money, but I would go through and circle the                 |
| 07:07      | ones I would buy to set up my house. But that's as far as I would ever get.                              |
| 07:11      | Yep.                                                                                                     |
| 07:12      | Yeah. So that's cool. I'm glad that you were able to do that.                                            |
| 07:15      | Yeah. It was, it was very cool. I didn't get that involved with it, you know, personally                 |
| 07:19      | other than the experience of using not the automation side, but, you know, just the switching            |
| 07:23      | side, but I'm looking at the Wikipedia page for X-10 industry standard. And I'm looking                  |
| 07:27      | at some of this stuff, some of the physical hardware that they picture. I had completely                 |
| 07:31      | forgotten that IBM actually had like a branded version of this called like home director                 |
| 07:36      | or something like that. Now that I see this on the Wikipedia page, it rings many bells,                  |
| 07:41      | but I completely forgot about this. I mean, I don't know if that's how dad originally                    |
| 07:46      | got, you know, privy to it or what have you, but yeah, I'm looking at some of this stuff                 |
| 07:50      | and it is just, it just reeks of Casey's childhood. It's just so many memories looking                   |
| 07:55      | at all these pictures.                                                                                   |
| 07:56      | It felt like bond villain level of like, you know, stuff because it, you know, there's                   |
| 08:00      | antenna sticking out of things.                                                                          |
| 08:02      | Yep.                                                                                                     |
| 08:03      | Yeah. Yeah. It was really something. And they said, that's cool. That, that, that is definitely          |
| 08:07      | the precursor of home kit when you think about it.                                                       |
| 08:10      | Yeah, very much so.                                                                                      |
| 08:12      | And it's really cool because things like, you know, the tube across the bottom of your                   |
| 08:15      | drive, you know, a lot of places will create some sort of car sensor system for you now,                 |
| 08:23      | where it's basically an IR brake beam where you've got two things pointing at each other.                |
| 08:27      | And when the car drives through, it breaks the beam for long enough that it triggers                     |
| 08:32      | a sensor. But, you know, the pneumatic tube approach is probably more reliable realistically             |
| 08:38      | depending on positioning and, and of course, you know, how, how the ground is around there.              |
| 08:43      | If you've got lots of very sharp pointy rocks, that might not work so well. You know, they,              |
| 08:48      | they could possibly puncture it, but it's, it's really cool to see this sort of thing.                   |
| 08:53      | And, you know, it looks like most, most of the things, you know, it looks like you had                   |
| 08:56      | the option to turn a device on or off lights on or off. It was mostly binary, but then                   |
| 09:00      | there was sort of dimming for lights as well.                                                            |
| 09:03      | That's right.                                                                                            |
| 09:04      | Yeah, it looks very cool. And they had a wireless, so using RF protocols for like keypad controllers     |
| 09:11      | and key chain controllers and burglar alarm modules, which I know, like alarm systems                    |
| 09:17      | are something that a lot of people would like to smartify. So, yeah, maybe, maybe folks                  |
| 09:23      | should go and see what they can find in the second hand stores.                                          |
| 09:26      | Yeah, I mean, it was relatively reliable. And I remember, I don't even recall the name                   |
| 09:32      | of the software, but there was some software running on Windows that was just truly hideous              |
| 09:37      | to look at, even from the perspective of Windows being not the greatest, the greatest design             |
| 09:42      | in the, you know, late nineties, early aughts, but it was real ugly. And I remember there                |
| 09:48      | was some just completely complicated software that dad would spend hours on trying to automate           |
| 09:52      | all this stuff. Like home kit has its own problems. Don't get me wrong, but by and large,                |
| 09:58      | we have come a long way, baby. It is a lot nicer now than it was in like 98 or whenever                  |
| 10:04      | it was that that was, you know, playing around with all this stuff.                                      |
| 10:06      | Oh, yeah. I remember my parents bugger alarm system that they probably had installed around              |
| 10:11      | 1998. And that was like, that was a whole like taking like windows out to run wires                      |
| 10:18      | to window frames so that you could put sensors on them and all sorts of stuff. You know, and             |
| 10:23      | nowadays I have sensors on all of my windows and doors. And the only thing that I have                   |
| 10:28      | to do is replace the battery like once every couple of years, and I get a push notification              |
| 10:32      | to tell me to do it. And now I've even got widgets on my home screens.                                   |
| 10:35      | Right.                                                                                                   |
| 10:36      | So yeah, like zero building work required.                                                               |
| 10:38      | Yeah, it's very different than it was back in the X 10 days.                                             |
| 10:41      | And I don't know if your early warning system was the same technology they use in the gas                |
| 10:45      | station, but I can tell you that as a kid, I used to experiment on them because that                     |
| 10:50      | was interesting to me, you know.                                                                         |
| 10:52      | Well, our favourite thing to do as kids would be to run down to the bottom of the driveway                |
| 10:56      | once we were physically big enough and jump up and down on the hose. So then in the inside,              |
| 11:02      | now I don't remember what the ding dong sounded like, but there was some unique tone to the              |
| 11:05      | lose going off. And so, you know, everyone else would be in the house and all you would                  |
| 11:10      | hear is ding, ding, ding, ding, ding, ding, ding, ding.                                                  |
| 11:13      | As one of us idiot kids was jumping up and down on the hose at the bottom of the driveway.               |
| 11:17      | Well, the ones in the gas stations took a lot of pressure to trigger like get really                     |
| 11:21      | to the car. And I ride over with my bike and I jump on it and I can never get the bell                   |
| 11:26      | to ring. But you know, I was kind of a kind of kind of a strange child. It makes sense                   |
| 11:34      | that I grew up and made a podcast called the automators. Let's just let's just leave it                  |
| 11:37      | at that.                                                                                                 |
| 11:38      | Right, right, right.                                                                                     |
| 11:39      | All right. But but eventually you got past X 10 and and when's the next time you dipped                  |
| 11:45      | your toes into automation?                                                                               |
| 11:46      | Yeah, so I don't remember if home kit was the first thing that happened or if I just                     |
| 11:53      | got aware of the Wemo stuff WEMO. Who is the parent company of them?                                    |
| 12:00      | Belkin.                                                                                                  |
| 12:01      | That's it. Thank you. And so I had a couple of of one of the I don't know the term for                   |
| 12:07      | it, the thing where you plug in a box and then you plug like a lamp into that box and                    |
| 12:10      | the box is basically.                                                                                    |
| 12:11      | Yeah, smart socket plug. Like it depends on your your location and precise terminology.                  |
| 12:18      | But we're saying the same thing, but we got a couple of those that I dabbled with. And                   |
| 12:22      | again, this is around the time that home kit was first becoming a thing. I feel like maybe               |
| 12:27      | my Wemo stuff predated home kit by like a year or two, but it doesn't really matter.                    |
| 12:31      | But the idea was I wanted to be able to automate some of the stuff with regard to our baby               |
| 12:36      | at the time. So this is roughly 2014, 2015. Our eldest kid who coincidentally as we record               |
| 12:42      | this turns nine on Sunday. But nevertheless, he was an infant at the time. And it just                   |
| 12:48      | got annoying to me to do the same dance a couple of times a day, you know, once around                   |
| 12:52      | nap time and once around bedtime of turning the light on and turning on the fan and doing                |
| 12:57      | the this and doing the that. And it's not that involved, but like programmers are lazy.                  |
| 13:02      | If we're anything, we're lazy. And if there's something I can repeat and not have to worry               |
| 13:07      | about it, it just take it off my mental checklist. Then yeah, baby, let's do it. And so I got,           |
| 13:12      | you know, I think it was a switch for his lamp. And eventually we my dad helped me install.              |
| 13:17      | I think it was also a Wemo switch in the wall for his overhead ceiling fan. And a couple                |
| 13:23      | of basic things like that, I think eventually we got another one of these smart outlet things            |
| 13:27      | for like the Christmas tree. So it would automatically turn on in the evenings and then turn off         |
| 13:31      | around the time we went to bed, you know, based on time and time alone. And so that                      |
| 13:36      | was fine. And, you know, worked okay. And eventually that got sucked into home kit.                      |
| 13:41      | We do have a Wemo bridge that I have a reminder to unplug and plug back in every two weeks.             |
| 13:46      | And coincidentally, today is the day because it seems to just kind of fail if you leave                  |
| 13:51      | it on for a few straight weeks, which is super fun. But once you unplug it, give it a five               |
| 13:56      | count plug it back in, it works no problem. So and this is a very different brand.                       |
| 14:01      | Smart plug on that and automate that. That's that's the pro move. But but no, this is this               |
| 14:07      | is one of the very first ones they made the bridge to home kit. So it very well could                    |
| 14:10      | be that new ones have have no problems whatsoever. But yeah, we lived off of that for a while            |
| 14:14      | and didn't really do that much. And then I had heard a lot of rumblings about this weirdly               |
| 14:20      | named neutron casseta stuff. And it was one of those things like Sonos later in my life,                 |
| 14:26      | that everyone would just not stop talking about like, Oh, my God, it's so good. It's                     |
| 14:31      | so good. Luke, Sean, Casseta, it's so good. It's so good. It's expensive. But oh, my                     |
| 14:35      | God, it's so good. It's so good. You got to try it. It's so good. And eventually I decided               |
| 14:39      | okay, it's time. And I don't again, I don't remember the specifics, but around the same                  |
| 14:45      | time, I decided a couple things needed to happen. Number one, I wanted to go, I forget                   |
| 14:50      | the terms for it, but the little like nubbin switch, it's like the default American light                |
| 14:55      | switch. I can't speak for the UK. But you know, where you have a little nubbin sticking                  |
| 14:58      | out of the wall and you flip that up and down, I wanted to go from that to what I would call             |
| 15:01      | like a paddle switch, which to me is like the more fufui nicer looking thing where it's                  |
| 15:06      | a paddle that you either press on the top of the whole paddled and turn the thing on                     |
| 15:09      | or turn, you know, press the bottom of the paddle, turn it off.                                          |
| 15:12      | Do you mean like a bounce switch where you press it and it doesn't show you that it's                    |
| 15:15      | in a particular state or the whole thing moves up and down?                                              |
| 15:18      | The whole thing moves up and down. And you know, if you go to Home Depot or your local                   |
| 15:22      | big box store, you know, to get one of just a dumb vanilla, maybe it's a decor, I forget                 |
| 15:28      | the term for it. But anyways, one of these paddle switches, it's like a dollar, literally                |
| 15:31      | a dollar. You know, they're not, they're not particularly complicated or fancy things                    |
| 15:36      | to just for the regular ones, but there were a handful of places that I wanted to put in                 |
| 15:41      | Caseta switches. And did you know folks, [[Lutron]] is so good. It's so freaking good. It is so              |
| 15:48      | expensive because it's like literally $70 a switch for one of these switches, but it                     |
| 15:54      | never, ever fails, ever. And I think part of the reason that that's the case is because                  |
| 16:02      | the Caseta stuff is all in, I guess, David jumping when you're ready here, but the Caseta                |
| 16:05      | stuff is all on its own, like private proprietary radio network. And there's a bridge to bridge          |
| 16:11      | you to [[HomeKit]] and the, you know, the IP network. But whenever you do anything with                      |
| 16:18      | the [[Lutron]] stuff, it's communicating between the different devices with RF and it is just                |
| 16:24      | rock solid. And we only put in a handful of these switches, but they're amazing.                         |
| 16:28      | Yeah. I mean, and that's the trick with them is start small and just slowly grow it. I                   |
| 16:34      | mean, it took me like two years to fill up my house with them. And there are still plugs                 |
| 16:39      | I haven't replaced because I just don't think I need them. But overall, I can lay in bed                 |
| 16:45      | and turn lights. Like if I hear a noise downstairs, I push a button next to the bed and most of          |
| 16:50      | the lights in the house light up, you know, and then I can go downstairs, not in the dark.               |
| 16:55      | And I just like stuff, you know, having that kind of ability. And the reason everybody                   |
| 16:59      | keeps yacking on about them. And I know Rose hates that because they're not available in                 |
| 17:04      | the UK. But, but exactly what Casey said, they've got their own spectrum. So they're                     |
| 17:11      | very solid. And in fact, one of the things that I've come to learn as I got into automation              |
| 17:16      | is that I used to think having to buy a separate, you know, puck or, or unit for an automation           |
| 17:22      | system was a bad thing. But now I've come to really appreciate it because usually that                   |
| 17:25      | means that they reliably work because they do have their own connection. But anyway,                     |
| 17:31      | so you get these things and you pay for them. It hurts a little bit. The best way is to                  |
| 17:37      | like every couple months, you know, when you want to spend some money on something dumb,                 |
| 17:41      | you go buy another switch and it's less expensive after you set up the initial set up because            |
| 17:46      | you only buy the puck once. And I've got, you know, I think I got about 10 of them around                |
| 17:51      | the house, but it's great. I can turn lights on everywhere. It's cheaper than like buying                |
| 17:57      | fancy bulbs, you know, or maybe it's not anymore. I don't know because the balls are getting             |
| 18:02      | pretty cheap. But like, if you've got a room with a bunch of can lights, getting smart lights            |
| 18:07      | for each one of those cans is quite expensive. And if you just replace the switch, then you're           |
| 18:12      | good. And then you can replace those light bulbs with any light bulbs. And I, I, I just                  |
| 18:17      | think that the reason so many people love it is because it does the thing that it says                   |
| 18:24      | it does on the can. And so often in home automation, it doesn't do the thing, or at least it doesn't     |
| 18:29      | do it consistently. Right. It does it. You set it up. It works. And then one day it doesn't              |
| 18:34      | work. I'm struggling right now. I bought one of these [[Human Presence Sensor\|human presence sensors]] from [[Aqara]].                 |
| 18:40      | And some days it works. And some days it doesn't. And that's the kind of thing that makes you,           |
| 18:45      | you know, want to throw a brick through a window because it's like, well, what? Absolutely.              |
| 18:48      | Why is it not working? That never happens with [[Lutron]]. You push the button on your phone                 |
| 18:54      | or you put it in your shortcut and it lights up. I have some buttons here on my stream                   |
| 18:59      | deck and cause I've got a little studio and I push one button in the room rigs itself                    |
| 19:03      | for work lighting. I push another button, the room rigs itself for video lighting and,                   |
| 19:08      | and that's all [[Lutron]] Caseta based and it has not failed a single time. And that's                     |
| 19:13      | why you pay the money for it, Casey. And my advice is just buy some more, but just do                    |
| 19:17      | it over time. You know, you'll be fine. I bet it's cheaper than your dad's X10 was.                      |
| 19:22      | Probably yeah. That's probably true. And, you know, the thing with Caseta is not only                    |
| 19:26      | is it reliable, but they were a little bit not beautiful for when I, when I was starting                 |
| 19:32      | to buy them and they've now come up with not for the fans because they have fan switches                 |
| 19:36      | and they have dimmer switches and whatnot. There's now, there's different physical looks                 |
| 19:42      | to their switches. It used to be not ugly, but not great. And now they have these Diva                   |
| 19:47      | and Claro switches that are aesthetically much, much, much better looking. Also a real                   |
| 19:52      | time follow up from the chat room that is consisting of the three of us, Rosemary has                    |
| 19:55      | pasted for me a link to get the right terminology. What I replaced, I got rid of in the whole            |
| 20:01      | house. This was one of my pandemic projects. I got rid of all the toggle switches in the                 |
| 20:05      | house, which is the little thing that you can grab and, you know, that you flip up and                   |
| 20:08      | down and replace them with a rocker or decoror switches. So I was close. I didn't get it                 |
| 20:13      | a hundred percent right, but I was close. And so in part of that process, that's when                    |
| 20:17      | I put in the Caseta stuff. And, and I'm so glad I did because even though I only put                     |
| 20:21      | it in a handful of places, it really has worked out well. And just a final note on this, not             |
| 20:26      | an ad ad for [[Lutron]]. One of the things I love so much about it as compared to like a smart               |
| 20:31      | bulb is that it is still a physical switch. It is both a dumb switch and a smart switch.                 |
| 20:38      | So asking my family who could not really care less about any of this to roll with my ridiculous          |
| 20:44      | idea for smart switches is much easier when there's a physical switch that will always                   |
| 20:50      | work as long as there's power. Even if there's no IP network in the house, this switch will              |
| 20:55      | still work. It's not like a lot of these other switches are like a smart bulb where you really           |
| 21:00      | have to use the app in order to do what you want it to do. That's not the case. The app                  |
| 21:05      | reacts to the real world or it could affect the real world rather than the app being the                 |
| 21:11      | thing that's driving the real world, which I don't care for that being the only way to                   |
| 21:15      | operate stuff.                                                                                           |
| 21:16      | Yeah. And I think that that is the easiest way to win with home automation. It's not                     |
| 21:22      | move the controls to somewhere else. It's add controls somewhere else. So you don't                      |
| 21:27      | replace the light switch with like nothing physically. You replace it with a light switch                |
| 21:32      | that still works, but then you add your phone and your HomePods and maybe other smart systems           |
| 21:38      | and all of those things into that so that you have extra options for control instead                     |
| 21:43      | of you go to press the spot by the door where the light switch always was and it's not there             |
| 21:49      | and then you have to pull out your phone, but your phone's on charge in the other room.                  |
| 21:52      | So you have to go back to the other room to get your phone to turn on the light. And yeah,               |
| 21:56      | that's never going to be a good experience ever. So yeah, this is definitely the way                     |
| 22:00      | to win. Sadly, as David mentioned, we can't get [[Lutron]] Crusader over here in the UK. [[Lutron]]              |
| 22:05      | do have a few options, but there are lots of other options for us, including some that                   |
| 22:10      | are available in the US. [[Aqara]], A-Q-A-R-A have a bunch of smart switches. And I have                     |
| 22:15      | one in my kitchen and one of the things I love about this is it is a bounce switch.                      |
| 22:20      | So toggle and rocker switches will show you a state like they'll show you up or down,                    |
| 22:26      | which means that especially with a smart switch, right? It can get out of sync with                      |
| 22:29      | what the state is, especially if you've got two way or three way switches in your home.                  |
| 22:32      | You'll be very familiar with it's up. Oh, but the other one is down. Okay. So that's                     |
| 22:37      | why it's on. But yeah, with my kitchen light switch, it is a bounce switch. So I press                   |
| 22:42      | it and it turns on, I press it again and it turns off. And it's very, very like satisfying               |
| 22:47      | to know that it's never wrong. And I very rarely have to press the switch anyway to                      |
| 22:50      | be honest. So I'm pretty lucky with that.                                                                |
| 22:53      | Yeah, I'm going to have to look into this because I am again, if you can't tell, I am                    |
| 22:56      | Rider Die Crusader, but there's a couple of three ways in the house that I really wish                   |
| 23:02      | were bounce switches because it drives me bananas when one of them is on, but yet I                      |
| 23:06      | can tell that the lights are off. You know what I mean? Because it's all out of sync                     |
| 23:09      | like you were saying. And I would, even though I don't necessarily want these to be smart,               |
| 23:14      | I couldn't even find a rocker switch that was a bounce, a dumb bounce rocker switch.                     |
| 23:20      | So I would absolutely pay the money to get a smart bounce rocker switch if that's what                   |
| 23:26      | it took. Just so I can stop looking at this and getting stressed out every time one of                   |
| 23:30      | the kids flips one of the switches on and then it forgets to turn it off. And then some                  |
| 23:34      | other one gets turned on and it just drives me bananas.                                                  |
| 23:38      | Yeah. Well, I've popped a link to the [[Aqara]] ones in the show notes for folks in case anyone              |
| 23:42      | is curious. And I've also shared that with David and Casey as well. So hopefully you                     |
| 23:47      | might find a solution there.                                                                             |
| 23:49      | And just to finish the loop on [[Lutron]], the new switches are much more attractive. And                    |
| 23:54      | if you're working with your family where you don't have necessarily buy in on automation                 |
| 24:00      | of these, the new ones look even more just like your typical switch. Whereas the old                     |
| 24:04      | ones were kind of a button you had to push, but there is a limit to my madness. I will                   |
| 24:09      | not be replacing my perfectly working switches with the new more attractive ones.                        |
| 24:14      | Yeah. I had the same debate with myself and I came to the same conclusion that even though               |
| 24:19      | I really wish I had these prettier ones, it just doesn't seem worth it. The only place                   |
| 24:24      | I'm really, really debating it is in the main living room, you know, we're the TV room,                  |
| 24:29      | if you will, where we have both a fan and a dimmer. But it seems silly to replace the                    |
| 24:34      | light switch with one of these fancy new good looking ones while I still have the fan, you               |
| 24:40      | know, because they haven't updated the fan one to be pretty yet. So it seems silly to                    |
| 24:43      | have one of each. But man, I've been thinking about it.                                                  |
| 24:46      | Well, if you do do it, then I have a suggestion, which is one of the dumb switches that you've           |
| 24:51      | still got in your house, put the put the old smart switch in there. So that, you know,                   |
| 24:56      | you're, you're extending the automation and maybe you never think about, I don't know,                   |
| 25:01      | that closet in the hallway. I'm just assuming I've never seen Casey's house. I'm assuming                |
| 25:04      | that closet in the hallway. It sounds very American. But yeah, like that closet in the                   |
| 25:09      | hallway has got a light in it that you never use. But you know, having a smart switch in                 |
| 25:12      | there means that nobody will leave the light on again, because you can attach it to a door               |
| 25:15      | sensor and just have it turn on when the door opens and turn off when the door closes.                   |
| 25:20      | Exactly.                                                                                                 |
| 25:24      | This episode of Automators is brought to you by Electric. Turning a small business into                  |
| 25:28      | an empire takes work and you have to keep your ear to the ground for things that will                    |
| 25:31      | help you take it to the next level. But this can be hard when your attention is pulled                   |
| 25:34      | in different directions, because that's the reality of being a boss. The team over Electric              |
| 25:40      | knows small businesses maybe like yours face these challenges. That's why they're on                     |
| 25:44      | hand to help with time consuming parts of your business, like standardised device security               |
| 25:48      | with best in class device management software, so you can implement best practices across                |
| 25:52      | the board and be ready to scale. An employee onboarding and offboarding done for you, saving             |
| 25:57      | you an average of eight hours per request. Plus, Electric will help you keep a single                    |
| 26:02      | point of visibility into your IT environment to control your devices, networks and applications.         |
| 26:07      | While simplified reporting allows you to achieve and maintain compliance. And proactive IT               |
| 26:13      | recommendations and automated workflows make IT easy to manage even for non-technical users.             |
| 26:18      | And look, if you're hearing this and you think your company could use some of these                      |
| 26:21      | services, but you're not sure where to start, Electric's experts will guide you through                  |
| 26:25      | the process of establishing standardised IT processes for your organisation.                             |
| 26:30      | Doing everything is amazing, but that you only have so many hours in a day. And there                    |
| 26:35      | are a lot of things that you're probably doing, like managing everybody's laptops                        |
| 26:39      | that you don't need to be doing. So there is plenty of times where I would have loved                    |
| 26:44      | something like Electric. Honestly, I keep thinking about it for my family at times just                  |
| 26:47      | because every time somebody gets a new device, guess who has to go set it up? But you should             |
| 26:52      | check out Electric if you are part of a small business and you're doing all of the IT and                |
| 26:57      | your job. For Automators listeners, Electric is offering a free pair of Beats Solo 3 headphones          |
| 27:02      | for taking a qualified meeting. Just go to electric.ai slash Automators. That's electric.ai              |
| 27:09      | slash Automators. Go there now to get your free pair of Beats Solo 3 headphones today                    |
| 27:14      | for scheduling a meeting. Our thanks to Electric for their support of this show.                         |
| 27:20      | So Casey, I know that you have been doing some cool automation and I thought it'd be                     |
| 27:25      | fun to share it with the audience. So what are you automating these days?                                |
| 27:29      | Yeah, so like I said, it began with very, very basic time-oriented stuff. Like my initial                |
| 27:36      | automations were all time-oriented, or maybe if I was getting really complex and I hope                  |
| 27:42      | you two are sitting down, maybe based on sunrise or sunset. Look at me go. Actually, recently            |
| 27:51      | I've tried to be a little more intelligent about the sorts of automations that I've been                 |
| 27:56      | doing. So some of this stuff maybe won't make sense to anyone else but my family, but I                  |
| 28:02      | think maybe talking about it will hopefully give people some ideas. So the initial stuff                 |
| 28:08      | was like, oh, when it's kiddo bedtime, turn their overhead fans on, which are either                     |
| 28:12      | on [[Lutron]] or Wiimos switches. So whatever time this normal bedtime, turn their overhead                  |
| 28:16      | fans on. Not a big deal. But then, I think it was last year, what we fell into for a                     |
| 28:23      | routine was that Erin would wake up somewhere around six o'clock, give or take a smidge,                 |
| 28:29      | and go downstairs by herself and have a cup of coffee and get kiddo lunches ready and                    |
| 28:33      | stuff like that. And I would get up about half an hour later and then the kids about                     |
| 28:37      | 15 minutes after me and all this is relevant because it occurred to me, well, why is Erin                |
| 28:42      | going downstairs to a dark house? So there's a pendant light over the sink that I have                   |
| 28:47      | turned on, like 50% brightness, only on weekdays when she's about to come downstairs. And again,         |
| 28:55      | this is not that interesting and not that exciting. But what occurred to me was the                      |
| 29:00      | kids' alarms or wake up clocks, if you will, they go off at about 6.45. Well, it is useful               |
| 29:07      | for them to walk into the living room where sometimes that's where they choose to change                 |
| 29:11      | clothes to walk into the living room when it's not dark. And so I can have the living                    |
| 29:16      | room turn on at, you know, 6.45 ish. But, but it's even more useful. And maybe this                      |
| 29:21      | is just because I'm a real weird, real weird dork. But it's nice to know when the kids                   |
| 29:25      | are about to wake up. So that pendant light that I told you comes on at like 50%, a couple               |
| 29:30      | of minutes before the kids' alarms go off, that cranks up to 100%. And that's when the                   |
| 29:35      | living room comes on. So that's a cue to Erin and me, Hey, the kids are about to come storming           |
| 29:39      | downstairs, prepare yourself. And so it's, it's, it's not a really like fascinating or                   |
| 29:45      | complex thing to automate, but it's just something I hadn't thought about for a long time.               |
| 29:49      | So it's a modern version of the list early warning system.                                               |
| 29:51      | Yeah, you're right. Actually, I never thought of it that way, but you're exactly right.                  |
| 29:56      | And then over time, like I said, I've started to try to think about more situational stuff.              |
| 30:02      | And so an example of this is it used to be possible. I don't know if I'm doing something                 |
| 30:07      | wrong or if it just has stopped working or what, but you could do a personal automation                  |
| 30:13      | on your phone that said, Hey, when you start any one of these kinds of workouts, go ahead                |
| 30:19      | and do things. And that was working very consistently for, for me for like a year or two. And then       |
| 30:25      | in the last few months, it's just stopped working. But we don't need to troubleshoot                     |
| 30:29      | this right now. I think we might come back to that later. But suffice to say what I,                     |
| 30:32      | what I had done was for the sorts of workouts, because sometimes I'll go for walks or occasionally       |
| 30:37      | runs. Sometimes I'll do outdoor stuff basically, but oftentimes I'm doing some sort of like              |
| 30:42      | Apple Fitness Plus or some equivalent on the TV and the downstairs. And so what I had was                |
| 30:48      | an automation said, Hey, when I start one of these workouts, you know, weightlifting                     |
| 30:51      | or what have you, go ahead and turn the overhead fan on. And that's more of a situational thing.         |
| 30:56      | And I've been trying to do better with coming up with more situational triggers and things               |
| 31:03      | of that nature. And I haven't gotten to the point of like presence. I think Rosemary,                    |
| 31:06      | who mentioned that a minute ago, but, or maybe it was David, one of you guys did, but I haven't          |
| 31:11      | gotten to the point of presence, but I'm trying to think of more situational stuff. And a                |
| 31:15      | great example of this that I came up with just a couple of weeks ago. We have a dog                      |
| 31:19      | Penny. She obviously before she goes up to the bedroom with us for the evening, we need                  |
| 31:24      | to take her out and have her use the restroom, if you will. And most nights, what'll end                 |
| 31:31      | up happening is Aaron and I are watching TV together downstairs. And then we'll, you know,               |
| 31:35      | decide that we're ready to go upstairs. We'll turn off the TV and then we'll take Penny                  |
| 31:39      | out to go on her little walk, which really means just let her out to the backyard, which                 |
| 31:43      | is fenced in and tell her, you know, do your business. Well, it occurred to me, well, if,                |
| 31:47      | if every time we do this almost is the TV goes off and then I walk outside and turn the                  |
| 31:53      | lights on, why don't I have the TV going off, turn the lights on? And so that's what I've                |
| 31:59      | done is if the TV goes off in the evening, then the string, not rope, mind you, because                  |
| 32:05      | those are, those are totally lame now, but the string lights in the backyard automatically               |
| 32:11      | go on and that way Penny can see what she's doing when she's going out and doing her business.           |
| 32:16      | The one thing I do wish I had though, and there are hacks that make this possible, but                   |
| 32:22      | they're all ugly in my opinion. And maybe you guys have a tip for me. What I wish I could                |
| 32:26      | do is put that on like a timer. So when the TV goes off, the, the string lights goes on,                 |
| 32:31      | the go on, but they only go on for say five or 10 minutes and then they automatically                    |
| 32:35      | turn themselves off. And if there is a way you can totally do that in home care without                  |
| 32:40      | changing like a million things or writing a shortcut. So the simple thing to do is create                |
| 32:45      | a scene that turns on the backyard lights and then enable the scene from the automation.                 |
| 32:51      | And then there is a turn off after option that appears right there at the bottom.                        |
| 32:56      | See, this is already worth my time because now enough to go, as soon as we're done here,                 |
| 33:00      | I'm going to have to go and do exactly that. That is a pro tip that I was not at all aware               |
| 33:04      | of because I will probably get there in a minute, but I've got some really cockamamie                    |
| 33:09      | routines that do involve time that are just ridiculous. And so that is a much, much, much                |
| 33:15      | better way to handle it. I'm going to have to take care of that as soon as we're done.                   |
| 33:18      | And then as a backup, we also have, like right now, as we record, it's almost Halloween,                 |
| 33:24      | the same will be true when it's Christmas time. We have some outdoor lights that are                     |
| 33:27      | on a smart plug, an outdoor rated smart plug. But it occurred to me, like, I don't want                  |
| 33:33      | to have to remember to turn these off at night. And one of the last things that Erin does                |
| 33:38      | before she goes to sleep is turn off her bedside lamp. And that is controlled by a smart switch.         |
| 33:45      | And what I did was I put an RFID tag, possibly one that Rosemary recommended to me, on her               |
| 33:49      | bedside table, and she just waves her phone near the RFID tag, and that runs an automation               |
| 33:54      | on her phone to turn off that smart switch. What occurred to me, again, just in the last                 |
| 33:59      | week or two, well, wait a second, when she turns off her light, that means it's lights                   |
| 34:03      | out at the list household. So I can cue the outdoor lights to now turn off when her lamp                 |
| 34:09      | turns off. So anytime that her bedside lamp turns off in the evening time, it'll turn                    |
| 34:13      | off all of those outdoor switches as well, such that, you know, all the, like, lit up                    |
| 34:16      | ghosts or Santas or what have you also go off. And these are the situational things                      |
| 34:21      | that that's what I'm starting to try to do better with. And I really think there's a                     |
| 34:27      | lot of power there, assuming they work. And as a final example, then I promise I'll stop                 |
| 34:33      | talking, one of the things I've been working with, and I don't feel like it's reliable,                  |
| 34:37      | but maybe it's on my head, is there's an option for an automation when someone in your family            |
| 34:42      | arrives home based on the presence of their iPhone and where it is. And I've been trying                 |
| 34:47      | to get it such that when, when my iPhone arrives at the house, then that will turn on the like           |
| 34:54      | the downstairs kitchen pendant light, the same one we were talking about from the morning                |
| 34:57      | and a couple other things. And for the life of me, I feel like it is not working reliably,               |
| 35:02      | but it may be all in my head. But I really want to get to the point that I never walk                    |
| 35:06      | into a dark house. And that that's the dream. And I could do that with like present one                  |
| 35:10      | of those like present sensors or whatever. But theoretically, it should already be working.              |
| 35:15      | I just, I feel like oftentimes it's just lagging or something such that by the time I walk               |
| 35:19      | in the door, my phone doesn't realise that it's home and hasn't yet run all the automations              |
| 35:24      | and whatnot.                                                                                             |
| 35:25      | Yeah. Yeah. So I saw somebody with the same problem actually on iOS today, they were debugging           |
| 35:30      | things. And they figured out in the end that it was their husband's phone that was causing               |
| 35:35      | the problem because they were using home kit automations triggered on when the first person              |
| 35:40      | arrives home and the last person leaves home. And so what they did is they, they made a                  |
| 35:46      | new automation and they did some testing with it. And I think what they were doing is they               |
| 35:53      | were using an API of some kind with get contents of URL in the converted to shortcut automation          |
| 35:59      | so that they could then have it say like this person has arrived home so that they would                 |
| 36:05      | know that, you know, what, what was actually happening because trying to figure this out                 |
| 36:09      | involves going on a lot of walks to leave the house and then come back because you have                  |
| 36:12      | to, you have to go quite far away and then come home to trigger this. So it's quite difficult.           |
| 36:18      | But essentially in the end, they turned out that their husband's phone for some reason                   |
| 36:22      | wasn't properly registering the location with home kit. And yeah, so it may be that for                  |
| 36:28      | some reason your phone isn't properly registering the location with home kit. And so what I              |
| 36:34      | would do to try and fix this, because obviously trying to figure out what the problem is to              |
| 36:39      | start with is really difficult. And then secondly, debugging this to fix it, it might involve            |
| 36:44      | wiping your devices and setting them back up again. And that is not fun. So what I would                 |
| 36:49      | actually do is I would change so in find my you can have a particular device share your                  |
| 36:54      | location. Now this may also have gone awry when you got a new iPhone, I'm presuming you                  |
| 37:00      | did get a new iPhone recently. And it could potentially still be using the old one, though               |
| 37:04      | I think you'd probably have noticed if it was. But what I would do with find my is change                |
| 37:09      | your location sharing to be from another device, then reboot your devices and then change it             |
| 37:14      | back to your iPhone. So I change it to like an iPad or something and then change it back.                |
| 37:19      | And that fingers crossed, I've encountered a few people with this issue now, seems to                    |
| 37:23      | have fixed it for them. So I'm hoping that that will also work for you. I don't know                     |
| 37:29      | because of course, it's impossible to recreate this issue as an automation nerd. You know,               |
| 37:34      | I can't, you know, I don't actually know what the problem is. I'm doing some guesswork                   |
| 37:39      | here. But I've not had it happen to me, but I'm also the only person in my smart home,                   |
| 37:44      | which makes a bit of a difference with the automations. So yeah, fingers crossed, they're                |
| 37:49      | changing your location sharing to another device, reboot all the things, reboot [[Apple TV\|Apple TVs]]                |
| 37:54      | and HomePods and stuff like that as well. Yeah, like literally reboot everything and                     |
| 37:59      | then turn change the location back and then see if it starts working again magically. And                |
| 38:05      | hopefully it will. But it's kind of tricky to figure this stuff out. So you are not the                  |
| 38:11      | first person that's run into this issue. And I very much doubt you'll be the last. But                   |
| 38:15      | the new security logging notifications in a home kit, they might be able to help you                     |
| 38:21      | if you have a smart camera or smart lock or something. Then those notifications that it                  |
| 38:27      | gives you may be able to help you. But unfortunately, home kit shortcuts don't have notifications.       |
| 38:34      | So you'll have to use a third party application or solution if you need to go deeper down                |
| 38:40      | the rabbit hole for testing there. Yeah, one of the things that I briefly had, I forgot                  |
| 38:46      | even to put this in the show notes. So I have this bordering on phobia of leaving our garage             |
| 38:53      | door open. I have no reason for it. We've not yet been burgled or anything like that.                    |
| 38:57      | I just for some reason, it just it just messes with my head. I don't like it. And we'll probably         |
| 39:01      | talk in a little bit about the absolutely and utterly bananas approach I came to fix                     |
| 39:05      | this problem. But one of the things I did was I did have and this was I haven't seen                     |
| 39:11      | this work in months and months and months long before I got a new iPhone. But anyways,                   |
| 39:15      | when my iPhone detected that I had left the house, or maybe it was the last person, I                    |
| 39:18      | don't recall how I had it set up, it would figure out whether or not the garage door                     |
| 39:23      | was open, because the garage door is hooked into home kit, but it's also got like a web                  |
| 39:27      | front into it. And so I think it would ping the web server and say, okay, is the door                    |
| 39:31      | open. And if it is, it would use and I presume you guys are familiar with this, but there's              |
| 39:35      | a wonderful, wonderful, wonderful service called push over P us H O V E R, which basically               |
| 39:41      | is an API to send yourself push notifications. And I use this thing constantly. And one of               |
| 39:47      | the things I figured out is you can after jumping through some hoops, you can set up shortcuts           |
| 39:53      | such that it will send yourself a push notification. And so what would happen was when I left            |
| 39:58      | the house, if for some reason the garage door was still open, it would send me a home kit                |
| 40:02      | would figure this out and send me a push notification saying, Oh, my goodness, the garage door is        |
| 40:04      | still open. And it was very useful when it worked, although I can't recall the time that                 |
| 40:09      | it actually saved me because the garage door was always closed. But nevertheless, it was                 |
| 40:15      | very circuitous, the amount of work it took to get that all wired up, which was a pain                   |
| 40:20      | in the butt to say the least, but it did it did work for a time. And again, I wonder if                  |
| 40:25      | this is all like you had said, Rosemary, something related to what phone or what devices are             |
| 40:31      | hooked up to home kit in what way such that, you know, for all I know, maybe it thinks                   |
| 40:35      | my Mac is the thing that's sharing my or that's, that's defining my location, which would                |
| 40:40      | be surprising, especially since find my friend seems to be fine. But you never know, sometimes           |
| 40:44      | this stuff is a little wonky. Yeah, it could be something simple, like you gave one of                   |
| 40:48      | your kids a device and they have their own [[Apple ID]], which you added to home kit, and                    |
| 40:52      | then that device never leaves home. That's another option to consider, which I just thought              |
| 40:58      | of because, um, yeah, of course, you have kids and they possibly use iPads or similar                    |
| 41:04      | to watch things on and play games. So if they have their own [[Apple ID]] and you've added that              |
| 41:08      | to home kit, and then that device never leaves home, that could also be part of your problem.            |
| 41:13      | So it's all worth investigating with all of these things.                                                |
| 41:16      | Yep. And there's, you know, there's easier ways to do this sort of thing. Like I'm, I've                 |
| 41:21      | heard of this thing called push cut. That's actually probably much easier to use within                  |
| 41:24      | shortcuts. Um, and so you can give that a shot if you don't want to go the whole push                    |
| 41:28      | over route, but there's many, many ways to accomplish this problem or fix this problem                   |
| 41:32      | if you're interested.                                                                                    |
| 41:33      | But I do think there is a point where with home automation, particularly with home kit,                  |
| 41:39      | where you do fly too close to the sun and your wings melt and, you know, and I think                     |
| 41:44      | that's unfortunate. I mean, there's a couple of reasons for that. One is apples. Um, you                 |
| 41:50      | know, don't worry your pretty little head attitude about home kit. They should, they                     |
| 41:54      | should expose more. Um, and some of it's that this is fairly new technology and they're                  |
| 41:59      | trying to build it out in a way that incorporates security and, you know, compatibility. I don't         |
| 42:06      | think it's an easy problem to solve. I don't think we can just tell [[Apple]] to throw a switch              |
| 42:10      | somewhere and suddenly it gets better. But I think more feedback would be useful or some                 |
| 42:15      | diagnostic mode for us that want it even if you have to, you know, go to the web or click                |
| 42:20      | some button somewhere. Uh, but I, I find Rose got me into home assistant, which gives you                |
| 42:27      | that extra diagnostic information, which makes it a lot easier because it, you know, it breaks           |
| 42:32      | sometimes too, but you actually have a better idea why because of the way it's set up.                   |
| 42:37      | But I also think for a lot of people listening that want to get home home automation, there's            |
| 42:41      | nothing wrong with being respectful of how close you are to the sun and just saying,                     |
| 42:46      | well, hey, you know what? I've got some automations that work when I turn the lights off and I've        |
| 42:49      | got some stuff that goes at certain times a day and that's consistently working. And                     |
| 42:54      | I'm going to be good with that for now until things get a little better. And I don't think               |
| 43:00      | that's the wrong approach either. I mean, we, we like to go to the hairy edge on the                     |
| 43:04      | show, but, but I don't think if you're listening, you should feel like you have to because you           |
| 43:10      | will have issues. It's just unfortunately the way it is with home automation in some                     |
| 43:15      | ways your dad's old X 10 where everything was wired together with physical wires was                     |
| 43:21      | more reliable than what we have now. You know, we, we, we have a trade off with this convenience         |
| 43:26      | of wireless and sometimes things don't work. Yep. I completely agree. And you know, I don't              |
| 43:32      | know if it's worth it. I don't know if we have the time to really unpack this, but I                     |
| 43:36      | will say that a couple of years ago, maybe it was before the Wemo stuff had its own                     |
| 43:41      | bridge. I forget exactly what the impetus was, but one way or another, a couple of years                 |
| 43:45      | ago I started messing with Homebridge and I really, really like Homebridge and what                    |
| 43:51      | that does, I'm sure you guys have talked about in the past, but what that does is it basically           |
| 43:55      | is a bridge to get things that are not in home kit into home kit. And it's one of those                  |
| 44:00      | very fiddly things, although it's gotten way better in the last few years, that it'll                    |
| 44:04      | be a complete pain in the hind quarters to set up. But once you have it set up, it's                     |
| 44:09      | mostly bulletproof. And that lets me get, I'm trying to think of what I have in home                     |
| 44:14      | bridge right now other than the garage door opener, which we'll talk about in a minute,                  |
| 44:17      | but that lets me get a handful of things that don't have home kit support into home kit.                 |
| 44:22      | And I really like it. Now, my understanding is that the, what's the other one, home, home                |
| 44:27      | assistant, right? That's, that's what you said you use. Yeah. That one, my understanding                 |
| 44:31      | is you two would know way better than me is way more flexible, but also way more complex.                |
| 44:37      | And when I tried to use, to use it several years ago now, my brain and the way it thinks                 |
| 44:45      | were like polar opposites, and I could not wrap my darn head around what I was supposed                  |
| 44:48      | to do. I wonder if I were to give it another shot today, if it would go much better, but                 |
| 44:53      | either one of these Homebridge or home assistant, if you are of the tinkering type and are not          |
| 44:59      | afraid of software, they can be incredibly, incredibly powerful.                                         |
| 45:04      | Yeah. What I'll say about home assistant versus Homebridge, you know, Homebridges is, is               |
| 45:08      | fine. And I used it for a while. The, the problem with Homebridge is you're still relying               |
| 45:14      | on home kit. And that is for better and for worse. So yes, everything is running, you                    |
| 45:20      | know, on HomePods and [[Apple TV\|Apple TVs]] in your home, you don't need anything extra and stuff like              |
| 45:25      | that other than, you know, the device running Homebridge, but you're still reliant on home              |
| 45:31      | kit. And so you end up doing things like creating a dummy switch that when it turns on, turns            |
| 45:35      | off automatically after 15 minutes so that you can have an automation turn it on. And                    |
| 45:39      | when that turns off, then you can run another automation to do other things. Home assistant              |
| 45:44      | is essentially replacing home kit. So instead of doing automations and stuff in home kit,                |
| 45:49      | of course you can still do them in home kit. But the idea is you would set things up, put                |
| 45:53      | them into home assistant and then share stuff back to home kit. So I don't have a garage.                |
| 45:59      | That's not a thing that comes with my flat. I have a parking space. It's very nice. It                   |
| 46:03      | has leaves in it right now as well as my car. But I have a garage in home kit, because what              |
| 46:08      | I did is I turned the door that I use when I get out the car into a fake garage using                    |
| 46:13      | home assistant and showed it back to home kit. And home assistant knows that this is                     |
| 46:18      | just my patio door. It's fine. Like when she, when she taps it, just unlock that door,                   |
| 46:22      | but also open the blinds behind it so that when I, you know, open the door, then I can                   |
| 46:26      | just walk straight in and there's no blinds or anything hanging in my way. But yeah, home                |
| 46:31      | assistant has changed a lot over the last couple of years. They've really been working                   |
| 46:35      | on a lot of things, making it a lot easier to set up and understand and also, you know,                  |
| 46:40      | just improving how everything works and the UI and things like that. They've recently                    |
| 46:44      | got a new logo and some other stuff. And they're working on a local voice system as well, which          |
| 46:49      | is entirely local, which is pretty cool seeing them work on that. So yeah, certainly worth               |
| 46:55      | investigating. Honestly, my favourite thing or my two favourite things are probably like                   |
| 47:00      | the history for things and automation traces. So if an automation like starts and it doesn't             |
| 47:08      | like run, I can look and I can see within that individual automation, here is the path,                  |
| 47:14      | here is where it went and it stopped here because you had an if condition for it's before                |
| 47:19      | 8am and after 6pm. The time cannot simultaneously be before 8am and after 6pm. It's either before        |
| 47:27      | 8am or after 6pm. And so I was able to fix that one the other day and now my automation                  |
| 47:32      | works perfectly. So yeah, it's, you know, those are my two sort of favourite things about                 |
| 47:38      | it. So worth investigating if you're, you're ready to extend things a little bit further.                |
| 47:43      | I also like turn my dehumidifier into a smart dehumidifier with a smart plug and a humidity              |
| 47:49      | sensor, which is pretty awesome. So yeah, all sorts of fun things that you can do with                   |
| 47:53      | that. But Homebridge is a nice option to have as well.                                                   |
| 47:57      | Yeah, it's for me, it's for me at Homebridge has been the right amount of complexity for                 |
| 48:03      | what I think I'm capable of. And I suspect, you know, over time, I will probably want                    |
| 48:09      | to take another stab at [[Home Assistant]] and see if I can make heads or tails of it, like                  |
| 48:14      | I said. Yeah, yeah, absolutely. And yeah, I mean,                                                        |
| 48:18      | these things are getting better and better as well. And with the introduction of [[Matter]],                 |
| 48:23      | more devices are becoming home kit compatible that weren't previously home kit compatible.               |
| 48:27      | And that's certainly making things a lot easier for, for us and cheaper as well, because                 |
| 48:33      | there would often be a premium on home kit devices and now loads of stuff is coming out                  |
| 48:37      | and all things be [[Matter]] compatible, which is really nice.                                               |
| 48:41      | I don't recommend [[Home Assistant]] for everybody because it's nerdy, but I mean, you're an app             |
| 48:44      | developer and you have done some very nerdy automation stuff already. And you just need                  |
| 48:50      | to channel your dad's X 10 roots. I think you should, I think you should install it.                     |
| 48:54      | I feel like someone like you could probably come up with some really cool automations.                   |
| 49:00      | Like I've got one, it's silly, but it's useful because the alarm in my refrigerator door is              |
| 49:06      | the exact same pitch as my tonight is. So I can, I can't hear it if I'm standing next                    |
| 49:11      | to it. But like with [[Home Assistant]], I can have lights change colour in the house if I                    |
| 49:15      | leave the refrigerator door open. And it's like,                                                         |
| 49:17      | Oh, that's very cool.                                                                                    |
| 49:18      | Like stuff like that, that home kit just isn't quite there yet. It's just not, you know,                 |
| 49:23      | it's just not quite there. And, and someone like you, I do believe [[Home Assistant]] might                  |
| 49:28      | be in your future.                                                                                       |
| 49:32      | This episode of the automators podcast is brought to you by TextExpander, your shortcut to              |
| 49:37      | efficient, consistent communications. Go to TextExpander.com/automators and get                   |
| 49:43      | 20% off when you work in a small team. Every moment counts. You don't want to be wasting                 |
| 49:49      | your time finding video conferencing details to send to a new client. And you don't want                 |
| 49:53      | to track down the same FAQs from the company website. These are the kind of things you                   |
| 49:57      | want at your fingertips so you can get your work done faster. And that's why you need                    |
| 50:02      | TextExpander.                                                                                           |
| 50:03      | With TextExpander, you can access what you type the most with just a few keystrokes, allowing           |
| 50:08      | you to work faster and eliminate repetition, letting you focus on what matters most to                   |
| 50:13      | you.                                                                                                     |
| 50:14      | TextExpander is powerful shortcuts and abbreviations streamline your team's work. All you have          |
| 50:19      | to do is type a short abbreviation and TextExpander does the rest for you. It's the ultimate            |
| 50:24      | automation. You just build and collect your most commonly used phrases, messages, URLs                   |
| 50:29      | and more right within TextExpander, then create your chosen abbreviation and they'll                    |
| 50:34      | be with you wherever you type. You can even customise the snippets by having them automatically          |
| 50:39      | add in dates, fill in the blank fields, timestamps and more. This will make sure that you still          |
| 50:44      | keep the personality and the communications you send. TextExpander is available on any                  |
| 50:49      | device you use across any app you use on Mac, Windows, Chrome and iOS. I love TextExpander.             |
| 50:56      | I've been using it since it started and I have thousands of snippets in my TextExpander                 |
| 51:03      | library. I use them with the people on my team. I use them personally. It is for me the entry            |
| 51:09      | level automation. If you're listening to automators and you don't know how to get started, text          |
| 51:13      | expander is a great way to do it because you immediately see results and it's super easy                 |
| 51:18      | to use. You just type in what you want, put the abbreviation and you're off to the races.                |
| 51:23      | Then as you start getting more advanced and you want to add [[AppleScript\|AppleScripts]] or use the pace                |
| 51:26      | buffer or put the date in automatically, TextExpander makes that really easy for you. If                |
| 51:32      | repetitive typing is getting you down, you need TextExpander. Check it out. TextExpander               |
| 51:38      | today at TextExpander.com/automators. You can get 20% off your first year. That's                 |
| 51:44      | TextExpander.com/automators to say goodbye to repetitive typing. Our thanks to TextExpander      |
| 51:51      | for their support of the Automators Podcast. Casey, you've got some other cool automations               |
| 51:58      | listed here. There's one here I need you to explain. Is the pool busy?                                   |
| 52:04      | Yeah. Last summer, not the one that lapsed, but the summer of 22, Aaron and I, the family                |
| 52:13      | and I joined a local community pool. It's very unremarkable. It's not very exciting.                     |
| 52:18      | It's not like a country club like you would think of from Clueless or something like that.               |
| 52:22      | It's a very, very unexciting community pool, but it's a place to go all summer time.                     |
| 52:26      | It's small kids. It's really nice, right? Exactly. Especially now that they're old enough                |
| 52:30      | that they can mostly fend for themselves, that gives Aaron and I a chance to not be                      |
| 52:35      | mom and dad, which is excellent. Anyway, the community pool, it's usually not that terribly              |
| 52:42      | busy, but it's one of those things where certain seating areas are in high demand because                |
| 52:47      | either they're in the shade or there's tables or what have you. It's all the drama of any                |
| 52:51      | community space as you would expect, but nevertheless, I wanted a way to be able to                      |
| 52:55      | figure out if the pool was busy or not. They have a very website, but one of the things                  |
| 53:03      | on the website is it tells you how many guests have checked into the pool that day. Unfortunately,       |
| 53:08      | it doesn't ever subtract from that number. It's not a real time, here's how many people                  |
| 53:13      | are at the pool, but at the very least, it gives you a hint. If it's an hour after opening               |
| 53:19      | and there's already 300 people there, well, guess what? It must be the 4th of July because               |
| 53:22      | that place is slammed. I wanted to have a quick way to figure out, all right, if we're                   |
| 53:29      | thinking about going to the pool, is it going to be slammed or is it going to be okay? What              |
| 53:33      | I did was I wrote a shortcut that uses my credentials that I pulled out of a cookie.                     |
| 53:40      | I think what I did was I signed in on the computer, looked at the headers that I was                     |
| 53:45      | sending, the computer that [[Safari]] was sending to the website, and figured out which either               |
| 53:51      | headers or cookie or combination thereof indicated to the website that I am an officially                |
| 53:56      | honest to goodness logged in person. Then it will load that URL providing the headers                    |
| 54:02      | and cookies and whatnot. It will get a copy of the HTML and using some regular expressions               |
| 54:07      | or something like that. It will find the quantity of people that are at the pool at that particular      |
| 54:13      | time or that have been checked in that day, I guess I should say. Then it will put up                    |
| 54:17      | a little alert that says, oh, there's 75 people at the pool. Now's a good time to go. What's             |
| 54:23      | really great is, as you two are well aware, you can engage the dingus on your phone and                  |
| 54:28      | you can say, hey, dingus, or now it's just dingus, is the pool busy? It will answer me.                  |
| 54:34      | It's such a silly, dumb thing that genuinely improved my quality of life over the summertime             |
| 54:40      | because I didn't have to go to a computer or log into the silly website on my phone,                     |
| 54:44      | which it is not mobile optimised. I could just say, hey, dingus is the pool busy and                     |
| 54:48      | it would answer me. That was really great. Now, that's super nerdy and involves a little                 |
| 54:53      | bit of web development, know how that I wouldn't expect an average person to know how to do,             |
| 54:58      | but it has worked out incredibly well for me.                                                            |
| 55:01      | Yeah, this is the sort of stuff I love doing because it does make your life so much easier.              |
| 55:07      | It would be really interesting if you could hook into the Google, because Google Maps                    |
| 55:11      | has this how busy is something. Oh, yeah, yeah.                                                          |
| 55:13      | A thing. It would be really interesting if you could maybe some point, just do some sort                 |
| 55:18      | of analysis like run, like you keep a Maestro macro or something that runs every hour or                 |
| 55:23      | something and compares the number of people checked into the pool to how busy Google Maps                |
| 55:27      | thinks something is. And then you could just look at that data later and figure out, okay,               |
| 55:32      | so when there were 75 people checked in on Tuesday, at this particular time, it was really               |
| 55:39      | busy, but then after that, it seems like everyone went home. But obviously, it's not super accurate,     |
| 55:43      | especially if nobody actually uses Google Maps at the pool.                                              |
| 55:46      | Right, exactly. And a couple other very quick ones. Somebody else, I can't remember for                  |
| 55:51      | the life me who this was, it might have been one of you two for all I know, but somebody                 |
| 55:54      | else like on Mastodon a month or two ago had, I forget where I saw it, but they had talked               |
| 55:59      | about how they were able to know when their devices needed to be plugged in. And that                    |
| 56:05      | kind of just washed over me like a wave at the beach. I didn't really think anything                     |
| 56:10      | of it. And then like just a few weeks ago, it occurred to me, wait a second. I do use                    |
| 56:15      | my iPad consistently, but not so consistently that it is always without a shadow of a doubt              |
| 56:20      | going to be in a good state of charge. But even more importantly, our kids have my old                   |
| 56:25      | iPad and they never think to charge that thing. And what you can do, again, I'm telling you              |
| 56:31      | to like you don't know, and I know you do, you can run an automation when the device's                   |
| 56:35      | charge level drops below a certain percent. So what I've done is for both my iPad, just                  |
| 56:41      | for safety's sake, but more importantly, the kiddo iPad, if it gets below 20% using, you                 |
| 56:46      | know, push cutter, push over, what have you in my case, push over, it will send me a push                |
| 56:50      | notification saying, Oh, I'm below 20%, you should plug me in now, which one of those                    |
| 56:55      | silly dumb things, but it's not a time based thing. It's a situational thing. And genuinely              |
| 57:01      | has made my life better because now it is very unlikely that the kiddo iPad will ever                    |
| 57:06      | be much below 20% because either I will plug it in while they're sitting there using it,                 |
| 57:11      | or as soon as they're done, I'll say, Hey, can you plug the iPad in for me, please? And                  |
| 57:15      | that works out great. And so that's the sort of thing that I'm trying to like big or                     |
| 57:19      | galaxy brain my way into because right now I've got the, you know, whatever the, I forget                |
| 57:23      | how the meme goes, but the little feeble brain that's not, you know, I'm just thinking                   |
| 57:26      | about like, what time of day is it? Oh, maybe I just started a workout. Like that's not                  |
| 57:31      | that, that, that, that exciting. But now you can start thinking about, Oh, well, the state               |
| 57:35      | of charge, that's an interesting way to cue something off. And, and that's what I'm trying               |
| 57:39      | to get to you and get better about.                                                                      |
| 57:41      | Yeah, I love doing things like that. I've been using push cut for those notifications                    |
| 57:46      | because then when I plug the device in, that device then sends another or runs another shortcut          |
| 57:52      | which removes that notification from my phone, which means that I don't have like this extra             |
| 57:58      | notification hanging around on my phone for, for something else. And also, I've been using               |
| 58:04      | the notification IDs and Pushcut. So that if that notification for some reason didn't                  |
| 58:08      | get dismissed, like maybe that device didn't have an internet connection at the time that                |
| 58:13      | it was charged, then when it resends the notification, I don't have two notifications that say, Hey,     |
| 58:18      | Rose, your iPad pro needs charging, because I have an iPad pro and an iPad mini. So I want               |
| 58:23      | specific notifications. So like the mini needing charge doesn't replace the pro needing charge           |
| 58:27      | and vice versa. But what that device going on charge will remove that notification for                   |
| 58:32      | me. So yeah, it's definitely worth looking into things like that as an option. And also                  |
| 58:38      | just stuff, I really wish you could get the state of like AirPods and things like that                   |
| 58:44      | in shortcuts, because I have a bunch of automations that do just sort of run periodically, you           |
| 58:49      | know, they run it sort of at midnight and 9am, midday, 3pm, like 6pm and stuff like that.                |
| 58:56      | And it would be really nice if in those I could also check, Hey, do my AirPods need                      |
| 59:00      | charging? Cool, you should probably put those on charge like something like that. But unfortunately,     |
| 59:05      | it's not something you can do in shortcuts right now. And it's driving me slightly batty                 |
| 59:09      | to the point where I am investigating using the find my app on my Mac, it saves data into                |
| 59:15      | a JSON file, actually. Oh, my word. Yeah. Yeah. So I'm currently doing some experiments                  |
| 59:22      | with periodically reading this information out and then sending myself notifications                     |
| 59:26      | when my AirPods need charging. It's not super reliable yet, but I've been playing with it                |
| 59:30      | because yeah, it's useful to do that using find my especially because if I'm not at the                  |
| 59:35      | same location as my iPad, there is no point telling me to charge my iPad because I can't                 |
| 59:40      | wait until I get home.                                                                                   |
| 59:41      | No, that's very, very clever. And then my final this is this is a very silly one. It's just              |
| 59:47      | the two of they're the three of us here. It's two of you guys and me, right? There's nobody              |
| 59:49      | else listening. So I can tell you my embarrassing automation story. It used to be that very consistently |
| 59:56      | when the kids were young, when when one of them or both of them went down for a nap,                     |
| 01:00:00   | Aaron and I would go down for a nap. Then the kids got older and it got good to me to                    |
| 01:00:05   | lay down for a little snooze each day. And so I've been trying to break myself with this                 |
| 01:00:09   | habit, but nevertheless, for a long time, I was laying down for a little siesta every                    |
| 01:00:14   | afternoon. And one of the things that I noticed myself doing was trying to remember, okay,               |
| 01:00:19   | I'm putting my phone down and trying to let you know, properly go to sleep at one o'clock                |
| 01:00:23   | in the afternoon or whatever. And then I'd wake up and think, okay, well, I'd been a                     |
| 01:00:26   | sleep for what was the 120 about 20 minutes. And that got annoying. And so this is what                  |
| 01:00:31   | I was alluding to earlier. I forget it might have been you Rosemary that helped me do this,              |
| 01:00:36   | but someone somewhere helped me figure out a way in order to have shortcuts know that                    |
| 01:00:44   | I have put my phone down on the charger and given the time of day, it's possible and likely              |
| 01:00:50   | even that I am taking a nap. And so it I think it saves it's like somewhere in the files                 |
| 01:00:57   | app. I forget I'd have to figure out where the heck this is that I put this, but it basically            |
| 01:01:01   | saves like a one line file into the files app if I'm not mistaken with the current time                  |
| 01:01:06   | at the point in which I put my phone on the charger and say, okay, I'm trying to go to                   |
| 01:01:09   | sleep now. And then when the phone is removed from the charger and automation, a different               |
| 01:01:14   | automation runs that reads back from that file does a little date math and says, oh, you                 |
| 01:01:18   | are sleeping for 15 minutes. Is this useful information? Absolutely not. But do I like                   |
| 01:01:23   | to have it? Yes, I do. And so I went through ridiculous lengths in order to figure out how               |
| 01:01:29   | to this works or how to make this work. And I just really like it. And similarly, actually               |
| 01:01:33   | as part of my it's nap time routine, you know, I have a little I have my own RFID tag on                 |
| 01:01:39   | my nightstand. And I wave my phone near that one and it will turn the appearance from light              |
| 01:01:45   | mode to dark mode, it will set my volume all the way down on my phone, it will turn on                   |
| 01:01:49   | do not disturb for a certain amount of time. But the other thing it does, which I was very               |
| 01:01:54   | proud of figuring out is it will actually SSH into my Mac, and it will run a one line                    |
| 01:02:00   | [[AppleScript]] command set volume zero. So this way, if I just even though I'm already on                  |
| 01:02:06   | do not disturb and it's all synced up or whatever, just in case what it will do is it will go            |
| 01:02:11   | ahead and turn the volume on my Mac all the way down because I can hear it from the from                 |
| 01:02:17   | the bedroom if it's not. And so this way, no matter what's going on, nothing's waking                    |
| 01:02:20   | me up from my precious nap time. And so very, very dumb and silly and slightly embarrassing              |
| 01:02:26   | and honest, but super cool that you can do all of this within shortcuts.                                 |
| 01:02:30   | Yeah, yeah, I don't use the SSH action in shortcuts to do this. What I do instead is                     |
| 01:02:37   | I use [[Keyboard Maestro]] and [[Keyboard Maestro]] has a web trigger option where you can get                   |
| 01:02:44   | a URL and you can just get contents of URL on that URL and it will run a [[Keyboard Maestro]]                |
| 01:02:49   | macro. And I love this because it means that if my Mac isn't on, the URL still works. So                 |
| 01:02:56   | the shortcut doesn't fail. Because that's the thing, like if my Mac has shut down for                    |
| 01:03:02   | some reason, like maybe it's installing updates or whatever, then the shortcuts will fail                |
| 01:03:08   | if it tries to SSH into something and it can't do it. So instead I use [[Keyboard Maestro]]                  |
| 01:03:13   | because [[Keyboard Maestro]] is really great and it will just keep and do all the things                     |
| 01:03:18   | for you. So yeah, I really, really like that.                                                            |
| 01:03:23   | That's really, really good. And I think that's basically it for my fancy pants shortcuts.                |
| 01:03:28   | So the other one quick thing I wanted to mention was that the Caseta stuff, they have these              |
| 01:03:34   | things called Pico remotes, PICO, and they have their own onboard integration such that                  |
| 01:03:42   | you can tell the Pico remote instead of controlling like a light switch remotely or something            |
| 01:03:48   | like that. Instead, what I'd like you to do is control the following Sonos speaker. And                  |
| 01:03:53   | so we have a screened-in porch on the back of the house. And on the Pico remote, I can                   |
| 01:03:58   | play pause, I can turn the volume up and down, and I can skip to the next track. All using               |
| 01:04:03   | a Caseta remote, this is no shortcuts involved. All I had to do was go into the Caseta app               |
| 01:04:08   | and say, hey, I would like you to associate this Pico remote, not with any particular                    |
| 01:04:13   | light, but with this room in my Sonos or the speaker of my Sonos. And it's phenomenal.                   |
| 01:04:18   | So one thing I wanted to mention actually is that IKEA also has Sonos integration because                |
| 01:04:23   | IKEA make Sonos speakers. They actually, they're called symphonisk, S-Y-M-F-O-N-I-S-K. But they          |
| 01:04:31   | are Sonos speakers in IKEA housing, and they have all sorts of funky options like integrated             |
| 01:04:37   | into lamps, bookshelf speakers and stuff, and they're very affordable. But because they                  |
| 01:04:40   | have those, the remotes and so on that they have will also integrate directly with Sonos.                |
| 01:04:45   | And I have a very cool rotator. Like it looks like a dimmer and it can be used as a dimmer               |
| 01:04:50   | for lights actually on my desk that controls. I have a picture frame in my hallway, but                  |
| 01:04:55   | it's actually a Sonos speaker. It's actually a Sonos speaker. It looks like a picture frame.             |
| 01:04:59   | And I just picked up, they have a brand new, well, brand new, it's about six months old.                 |
| 01:05:03   | They have a new square button that's got like a play, pause, skip, previous, and up and                  |
| 01:05:10   | down volume buttons on it. So I've just picked up that and I'm experimenting with that. But              |
| 01:05:15   | it's definitely worth looking into what native integrations are available for your automation            |
| 01:05:20   | stuff. But at the same time, I also caution people to not go too nuts on it, because number              |
| 01:05:25   | of times I've had to help somebody debug like, why are my lights turning on? And we've gone              |
| 01:05:29   | through everything in [[HomeKit]] and it's not there. And no, I'm definitely not using anything              |
| 01:05:33   | else. You open the Hue app and it's right there. So yeah, yeah, that definitely happens.                 |
| 01:05:39   | So if you're going to automate stuff in multiple places, just remember that you can do that              |
| 01:05:43   | so that if you're trying to debug something, then you can figure out where it's happening.               |
| 01:05:48   | Indeed, indeed. Now, I've completely forgot about the IKEA stuff. Unfortunately, the nearest             |
| 01:05:52   | IKEA to me is like 90 minutes away. And so it's not something that I think about often,                  |
| 01:05:56   | but you're exactly right.                                                                                |
| 01:05:57   | It's very nice stuff. And it's very affordable as well. So I definitely recommend folks check            |
| 01:06:01   | it out, especially over here in Europe, where it feels like every time I turn around, I                  |
| 01:06:05   | trip over another new IKEA. I went to Stockholm last year. So it's like, you know, a huge                |
| 01:06:11   | city and like very close to my hotel, there was an IKEA in the middle of the city. It's                  |
| 01:06:15   | like, how did they fit in IKEA? Yeah, that's incredible. It's amazing. But yeah, they've                 |
| 01:06:19   | got one.                                                                                                 |
| 01:06:20   | Casey, you were talking earlier about your workout automations. And I don't think we've                  |
| 01:06:25   | covered that on the show before. What are you doing to automate your workouts?                           |
| 01:06:29   | Yeah, so I'm trying to follow along on my phone real quick and installing for time as                    |
| 01:06:34   | I do so. So there's, and jump in when you guys are ready, but there's like personal automations          |
| 01:06:39   | that happen somewhere. And then there's home automations. And I believe it's a personal                  |
| 01:06:44   | automation. Now I can't figure out where that is. It's not in the home app. It's somewhere.              |
| 01:06:47   | Oh, it's in shortcuts, isn't it? And so anyways, there's automations that you can do. Yep,               |
| 01:06:52   | there it is. And so I have an automation that's run immediately when I start, you know, any              |
| 01:06:59   | number of, any handful of particular workouts. So it's when I had it. So the when is a workout           |
| 01:07:06   | type and I've chosen four workout types that correspond to the kinds of workouts I would                 |
| 01:07:10   | typically do indoors, you know, weightlifting and that sort of thing. And so it's set to                 |
| 01:07:15   | run immediately. It doesn't need to tell me anything. And all it does right now is just                  |
| 01:07:19   | turns on the living room fan. And then similarly, when the workout ends, it would turn off the           |
| 01:07:25   | living room fan. And I tried to get clever with this actually. And I tried to have it                    |
| 01:07:30   | look at the current weather when the workout ends, look at the weather. And if it's over                 |
| 01:07:35   | something like 65 degrees, which rose to you, that's something like 10 to 15 ish, a little               |
| 01:07:41   | bit less than room temperature. Anyways, I think that's right. Anyway, it doesn't matter.                |
| 01:07:46   | But the point is when it's, when it's warm out, just go ahead and leave the fan on. But                  |
| 01:07:50   | it's cold out, you know, if it's in the middle of winter, you know, because see, David, we               |
| 01:07:54   | have weather here, it gets cold and warm at different parts of the year. So anyways,                     |
| 01:07:58   | I'm going to pay for that in the post show, but 23 degrees, by the way, 23.8 recurring                   |
| 01:08:07   | according to Peacock by James Thompson. Oh gosh, I was way off. I'm trying to get better                 |
| 01:08:11   | with as much as I give Celsius a hard time. I'm trying to get better with it. And I'm                    |
| 01:08:14   | just not there yet. Yeah, I think your inner CGP gray was showing from that recent episode               |
| 01:08:18   | of cortex or trying to trick the thermostat. Exactly. Exactly. But so anyway, the point                  |
| 01:08:23   | is when it's cool out, I would turn the fan off or the shortcut would turn the fan off.                  |
| 01:08:27   | And when it's warm out, it would just say, I'll leave it on. And I noticed, and again,                   |
| 01:08:30   | this doesn't seem to correspond with new hardware or anything like that. But several months              |
| 01:08:35   | ago, it just seemed to stop working. And I don't know what to do to debug it. I mean,                    |
| 01:08:41   | Rose, you had mentioned earlier that I could maybe send myself a push notification when                  |
| 01:08:45   | the shortcut is run to see if it's even noticing that the workout has ended. I should also               |
| 01:08:50   | point out that I'm starting and stopping these workouts from my watch, which I think probably            |
| 01:08:55   | goes unsaid, but just to be clear. And in the past, it was working consistently. I would                 |
| 01:09:00   | start a workout on my watch. The shortcut is strictly speaking on my phone, but it would                 |
| 01:09:04   | recognise the fact that my watch has started the workout and everything was hunky dory.                  |
| 01:09:08   | And again, I don't know what specifically stopped it, but something has preventid it                     |
| 01:09:12   | from working basically since months and months ago. And for the life of me, what do I do                 |
| 01:09:17   | to try to debug this? Where do I go from here?                                                           |
| 01:09:20   | Well, this is where personal automations in particular can be quite tricky because I'm                   |
| 01:09:25   | guessing you configure these pre iOS 17. So you've got a series of actions in your automation.           |
| 01:09:31   | The first thing I would recommend that anybody do in this situation is create a shortcut                 |
| 01:09:36   | that does these actions. I know it's going to be a bit of a pain to do it, but create                    |
| 01:09:39   | the shortcut, remove the automation and then create a new automation because with iOS 17,                |
| 01:09:44   | when you create a new personal automation after you've chosen your trigger and all of                    |
| 01:09:48   | that, then what you do is on the next page, instead of it basically just giving you a                    |
| 01:09:54   | blank shortcut ish area, it suggests that you run a shortcut instead. And the advantage                  |
| 01:10:02   | of that is there are a number of options inside of an actual shortcut, which are under the               |
| 01:10:08   | I button at the bottom under privacy, where you can reset the privacy for shortcut, which                |
| 01:10:14   | means that if it's doing things, then you can check that it's actually got permission                    |
| 01:10:18   | to access the stuff. And if something's not working, you can do that. Now, quite frankly,                |
| 01:10:24   | in your case, it may just be if you create this as a shortcut, you run it manually once                  |
| 01:10:28   | to check that everything's working and grant all the permissions. And then you hook it                   |
| 01:10:32   | up to an automation, everything will just magically work. If it doesn't, then I would                    |
| 01:10:38   | be looking to debug this. And there are a couple of different things that you can do.                    |
| 01:10:42   | You can go with the good old fashioned, I'm going to stick with a notification in every                  |
| 01:10:45   | single like in between every single action and say, this is happening, this is happening,                |
| 01:10:50   | this is happening. It's a little excessive and not the most fun. The other option is                     |
| 01:10:56   | something near and dear to my heart, [[Logger]] for [[Shortcuts]]. Originally by [[Alex Hay]], I'm                   |
| 01:11:01   | part of the team working on the development of that now. But what you can do with Logger                 |
| 01:11:07   | for Shortcuts is logging in shortcuts and you can add data in there. And then you can open               |
| 01:11:12   | the Logger app and see what's happened. And because it's doing that, then you'll be able                 |
| 01:11:18   | to see, you know, you can tag things and so on. So you can actually open Logger, even                    |
| 01:11:22   | on another device and see, you know, when this, when this, when you press the start                      |
| 01:11:27   | button on your, on your watch, you know, you could have Logger open on say your iPad and                 |
| 01:11:31   | wait and see, like, does it come in? Do I get it? Do I get a log? Nothing's happening                    |
| 01:11:35   | at all. Okay, something is weird here. The other option is, of course, settings, the                     |
| 01:11:41   | settings app itself, there are a number of options in there for shortcuts. It's worth                    |
| 01:11:46   | going and double checking that, you know, those things under advanced are turned on,                     |
| 01:11:51   | just making sure that, you know, if there's a script in somewhere that, you know, you've                 |
| 01:11:54   | got that enabled, turning it off, turning it back on again, I know we're not the IT                      |
| 01:11:58   | crowd here, but it genuinely does work like toggling settings off and back on can sometimes              |
| 01:12:03   | just fix something, you know, originally this thing, this preference may have been called                |
| 01:12:07   | that internally, and they renamed it to this. But for some reason, you know, turning it                  |
| 01:12:12   | off and turning it back on again fixes the fact that this thing over there was still                     |
| 01:12:15   | looking for the old version of it or something. You know, so yeah, there's a number of things            |
| 01:12:20   | that you could try. But the other thing I would check is make sure that your location                    |
| 01:12:26   | sharing with shortcuts is set to while using the app with precise location. Because if                   |
| 01:12:34   | it isn't, [[HomeKit]] actions may actually be doing weird things. And I don't understand                     |
| 01:12:40   | quite why the precise location thing seems to be needed. And I need to try and figure                    |
| 01:12:46   | out exactly what's going on and actually file some feedback with [[Apple]] on this. Because                  |
| 01:12:50   | I found that if I didn't have precise location enable for shortcuts, and I tried to do a                 |
| 01:12:54   | home connection, it would fail about 50% of the time. And that was very weird. And I don't               |
| 01:13:00   | know why may have just been coincidence could have been something else happening at the                  |
| 01:13:04   | same time. But yeah, that was definitely something that was up. So a few things to try and figure        |
| 01:13:10   | out there.                                                                                               |
| 01:13:11   | Yeah, so as you were talking, I created a new shortcut. And literally, the only thing                    |
| 01:13:15   | in this is controlling my home. And I said, turn the living room fan on. And I attempted                 |
| 01:13:21   | to do that. And now it's showing me a dialogue that says invalid parameter. Okay, that's                 |
| 01:13:27   | all I can do.                                                                                            |
| 01:13:28   | Okay, well, that is very interesting. I think there's something up with the fan as far as                |
| 01:13:33   | home kits concerned, because that that so you sent a screenshot of your shortcut, there                  |
| 01:13:38   | should be an option to say what to set the fan to, which I did. But I agree with you.                    |
| 01:13:44   | It doesn't look like it from what I sent you. Yeah. Yeah. But that is very strange. Although             |
| 01:13:51   | come to think of it, as I look deeper, as I'm adding an action here, it looks as though                  |
| 01:13:57   | I have two different control this home options. I can't tell if that's you've got two home               |
| 01:14:04   | kit homes. Oh, super. How did I do that? I don't know. But I suspect that you'll find                    |
| 01:14:10   | if you open the home app, and you tap on the there are three dots in the top right hand                  |
| 01:14:15   | corner. And then there are, there should be, you know, any accessories not responding underneath         |
| 01:14:23   | home settings and at home view and reorder sections, there may be like two list homes                    |
| 01:14:27   | there.                                                                                                   |
| 01:14:28   | No, I don't see it. I mean, I hear what you're saying. I totally get what you're saying.                 |
| 01:14:31   | But I don't see that. Well, if you tap on home settings and then tap on the back button,                 |
| 01:14:37   | you may find that there is more than one home there. So yeah, that's certainly something                 |
| 01:14:44   | to investigate because I have seen that before with a few people that they have ended up                 |
| 01:14:51   | with more than one home kit home because of reasons. Usually it was a partner who wasn't                 |
| 01:14:56   | particularly technologically inclined. He was just like tapping and going, yeah, yeah,                   |
| 01:15:01   | yeah, yeah, yeah, yeah, I'll just get rid of this thing. Get rid of this thing, get rid                  |
| 01:15:04   | of this thing. I don't want this thing, but yeah, it doesn't always end up working out                   |
| 01:15:10   | quite that well. My mom, I used to do it to herself actually. She ended up with a second                 |
| 01:15:14   | home kit home and I don't quite understand how or why. That's yeah, certainly something                  |
| 01:15:20   | to investigate there.                                                                                    |
| 01:15:22   | As maddening as it is, Casey, sometimes those personal automations, if you just delete them              |
| 01:15:27   | and rebuild them identically, they work, and I don't know why, but I've had that experience              |
| 01:15:34   | where sometimes it just stopped working, I delete it.                                                    |
| 01:15:37   | That's like a starting point for me, is like, okay, well, I'm just going to make it again,               |
| 01:15:42   | and then it works, and I'll never know why, but that's okay.                                             |
| 01:15:47   | That's what I talked about by getting too close to the sun, and it seems to me like                      |
| 01:15:50   | the problem is really not the actual shortcuts actions.                                                  |
| 01:15:54   | The shortcuts does the things.                                                                           |
| 01:15:56   | It seems to me the problem usually is the triggers.                                                      |
| 01:15:59   | That's where I usually hit trouble, like just the trigger stops working, and then I don't                |
| 01:16:02   | know why, but yeah, I guess the shortcuts actions fail on occasion too.                                  |
| 01:16:07   | Yeah, so I went in, I went in as you guys were talking, and I re-added the controlless                   |
| 01:16:11   | home shortcut action, and I don't know if I just quietly said please or something, but                   |
| 01:16:18   | I guess whichever one I was using was some sort of latent holdover, perhaps from a different             |
| 01:16:24   | shortcut, and so I think to your point, it was associated with a home that doesn't seem                  |
| 01:16:29   | to be there anymore, so when I re-added it and tried the other option, it seems to have                  |
| 01:16:35   | worked, and so now I'm going to have to try this all out, but that would potentially explain             |
| 01:16:39   | why nothing was getting controlled, because it was associated, I guess, with a home from                 |
| 01:16:43   | before.                                                                                                  |
| 01:16:44   | Yeah, I did at some point, I think I might have deleted my home, or at least the home                    |
| 01:16:51   | bridge portion thereof, I don't think I deleted the whole thing, but I deleted my Homebridge            |
| 01:16:56   | portion, which this isn't involved with Homebridge, but nevertheless, I deleted part of                 |
| 01:17:00   | it in a troubleshooting fit of rage slash passion and recreated it, and I think that                     |
| 01:17:06   | that might have something to do with it, so you have definitely given me some things to                  |
| 01:17:09   | explore and I think might have already gotten me over the edge.                                          |
| 01:17:12   | Same as we are recording, how good are you two that we might have gotten me fixed as                     |
| 01:17:16   | we're recording?                                                                                         |
| 01:17:17   | Very impressed.                                                                                          |
| 01:17:18   | Well, I mean, that's what we're here for, we do love giving folks homework with this                     |
| 01:17:22   | podcast of, here's a bazillion ideas, we got so much feedback from an action button episode              |
| 01:17:26   | recently where somebody was like, I have 27 action buttons on the home screen of my phone                |
| 01:17:30   | now, I should probably narrow this down.                                                                 |
| 01:17:32   | Yes, probably.                                                                                           |
| 01:17:33   | But I think that's part of the process though, and I think if you're at home listening, you              |
| 01:17:38   | need to know that even people like Rosemary Orchard once in a while have to nuke and pave                |
| 01:17:43   | on an automation for reasons that she doesn't even really entirely know.                                 |
| 01:17:49   | And that's okay, it's just kind of the way this stuff works right now, it's not perfect.                 |
| 01:17:55   | The more complex they get, the more likely you are to have that problem, but that doesn't                |
| 01:17:59   | mean you can't still take advantage of it.                                                               |
| 01:18:01   | Just be careful how close to the sun you are, I actually like flying close to the sun and                |
| 01:18:06   | as a result, sometimes I have to do some troubleshooting, but I'm a nerd and that's kind of fun for      |
| 01:18:10   | me so I don't mind.                                                                                      |
| 01:18:12   | But we all have to kind of find our own kind of happy place with that stuff.                             |
| 01:18:17   | Either way, we are the Automators podcast, you can find us over at relay.fm/automators.            |
| 01:18:22   | Casey, where do people go to find you?                                                                   |
| 01:18:24   | Yeah, so there's all sorts of different places.                                                          |
| 01:18:27   | The easiest place to go to is kclist.com, that's my website, c-a-s-e-y-l-i-s-s.com.                      |
| 01:18:32   | You can find my show on relay.fm, analog with my dear friend [[Myke Hurley]] over there                      |
| 01:18:37   | on relay.fm.                                                                                             |
| 01:18:39   | You can find the accidental tech podcast at atp.fm and on a mon mastodon.social as Casey                 |
| 01:18:46   | Lists.                                                                                                   |
| 01:18:47   | We've got links to all of those in the show notes.                                                       |
| 01:18:51   | Thank you to our sponsors, TextExpander and Electric for Automators Max.                                |
| 01:18:56   | We are going to be talking Disneyland, Disney World, Disney Paris, Europe, whatever they                 |
| 01:19:00   | call it now, and maybe even some automation along the way.                                               |
| 01:19:04   | See you next time.                                                                                       |
| 01:19:05   | Bye-bye folks.                                                                                           |
