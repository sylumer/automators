---
status: "incomplete"
fc-date:
  year: 2019
  month: 12
  day: 20
fc-category: "podcast"
podcast: "Automators"
published: 2019-12-20
duration: 4457
formattedduration: "01:14:17"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/39"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators039-RevA.mp3"
episode: 39
title: "39: Automating iBeacons"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary try all sorts of iBeacons and look at why, where, when, and how you use these little devices.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 039 Discussion](https://talk.automators.fm/t/automators-39-automating-ibeacons/6193)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[FreshBooks (Sponsor)|FreshBooks]] - Online invoicing made easy.
- [[Kensington (Sponsor)|Kensington]] - The Professionals Choice. Find the right docking solutions for your organisation today.

# Show Notes
- [Take Control of Shortcuts - Take Control Books](https://www.takecontrolbooks.com/shortcuts/)
- [Estimote Beacons](https://order.estimote.com/buy/proximity-devkit-2018)
- [Blue Charm iBeacon](https://amzn.to/2EH9Em6)
- [lgaches/BeaconEmitter: Turn your Mac as an iBeacon](https://github.com/lgaches/BeaconEmitter)
- [Make Your Mac Advertise iBeacon - BeaconZone Blog](https://www.beaconzone.co.uk/blog/make-your-mac-advertise-ibeacon/)
- [Online UUID Generator Tool](https://www.uuidgenerator.net/)
- [PushCut - Smart notifications that trigger your automation](https://www.pushcut.io/)
- [Automators #38: Simon Leeb and PushCut - Relay FM](https://www.relay.fm/automators/38)
- [‎BLE Scanner 4.0 on the App Store](https://apps.apple.com/gb/app/ble-scanner-4-0/id1221763603)
- [‎iBeacon-Manager on the App Store](https://apps.apple.com/gb/app/ibeacon-manager/id1317261207)
- [iBeacon Recommendations - iOS - Automators Talk](https://talk.automators.fm/t/ibeacon-recommendations/3573)
- [‎PicSew - Screenshot Stitching on the App Store](https://apps.apple.com/us/app/picsew-screenshot-stitching/id1208145167)
- [Format Images for Blogging](https://www.icloud.com/shortcuts/84f5ff995b864df78567ac9501c3612a)
- [Drafts Action: Fix Empty Markdown Links - Rosemary Orchard](https://rosemaryorchard.com/blog/drafts-action-fix-empty-markdown-links/)
- [Drafts for Mac Changes](https://docs.getdrafts.com/docs/misc/changelog-mac.html)
- [Drafts for Mac: It's Action Time - MacStories](https://www.macstories.net/reviews/drafts-for-mac-its-action-time/)
- [Elgato Stream Deck](https://amzn.to/2MeWhh9)

# Transcription
  
| Time Index | Transcription                                                                                         |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm Rosemary Orchard, and I am joined today by my lovely co-host, David Sparks, and              |
| 00:06      | this is Automators, where we are going to try and tell you how to get your technology                 |
| 00:10      | to do your bidding for you.                                                                           |
| 00:12      | Hello, David.                                                                                         |
| 00:13      | Hello, Rosemary.                                                                                      |
| 00:14      | How are you today?                                                                                    |
| 00:15      | I am automationful and notificationful because I've been experimenting in advance of this             |
| 00:21      | week's episode.                                                                                       |
| 00:22      | Are you feeling the end of the year pushing down on you?                                              |
| 00:25      | A little bit, yeah, but it's good because, you know, with January comes a new start.                  |
| 00:29      | New automations, lots of new year automations, which I'm sure we'll get to in a future episode.       |
| 00:35      | But I've been playing with a lot of things ready for next year.                                       |
| 00:37      | Hey, Ros, before we get started with the show, you've got some news for us.                           |
| 00:42      | I do.                                                                                                 |
| 00:43      | I have been busy typing to the point where my fingers actually hurt.                                  |
| 00:47      | That's how much I've been typing.                                                                     |
| 00:48      | And I have a book all about shortcuts.                                                                |
| 00:51      | Yay.                                                                                                  |
| 00:52      | So Rosemary Orchard is the brand new author with the Take Control series, and she's a                 |
| 00:58      | book called Take Control of Shortcuts, which is an excellent explanation of how shortcuts             |
| 01:04      | work and how to use them.                                                                             |
| 01:06      | I'm really happy with the way this came out, Ros.                                                     |
| 01:09      | Yeah.                                                                                                 |
| 01:10      | It's really exciting.                                                                                 |
| 01:11      | And, you know, I've got, obviously, the background explanations in there as to how, you know,         |
| 01:16      | like everything works.                                                                                |
| 01:17      | Like, what is a repeat loop?                                                                          |
| 01:18      | And why, what's the difference between repeat and repeat with each?                                   |
| 01:21      | How do you use an if?                                                                                 |
| 01:22      | But I decided the best thing to do for everybody because nobody likes just sitting there reading      |
| 01:27      | is to actually teach people how to build shortcuts.                                                   |
| 01:29      | So there are tons of example shortcuts in there from controlling airports, pro noise                  |
| 01:33      | cancelling to working with [[Airtable]] APIs.                                                             |
| 01:37      | And there's hopefully something in there for everybody.                                               |
| 01:39      | Awesome.                                                                                              |
| 01:40      | Well, congratulations on getting this out the door.                                                   |
| 01:42      | I know how hard you've been working on it, and it's a beautiful book, and I think a lot               |
| 01:47      | of people are going to learn a ton about shortcuts thanks to all this work you've done.               |
| 01:51      | So how does somebody get it?                                                                          |
| 01:53      | The easiest thing to do is go to takecontrolbooks.com/shortcuts.                                |
| 01:57      | There'll be a link to that in the show notes.                                                         |
| 01:59      | And then just get it there.                                                                           |
| 02:01      | That's the easiest way to get it.                                                                     |
| 02:02      | You get it in all the formats, so EPUB, MOBI, for Kindles, and PDF as well.                           |
| 02:08      | Excellent.                                                                                            |
| 02:09      | Congratulations, Rose.                                                                                |
| 02:10      | I'm so happy for you.                                                                                 |
| 02:11      | I'm happy for me too because it means I get to take Christmas off.                                    |
| 02:15      | For everybody, go check it out, and let's get back to the show.                                       |
| 02:19      | Yeah.                                                                                                 |
| 02:20      | We had a show, the last show that went up, we had a segment on iBeacon.                               |
| 02:26      | We've had a lot of questions about iBeacon since then, and we've had that on our list                 |
| 02:30      | of shows to prepare for a long time, so we thought, hey, you know what, let's just do                 |
| 02:34      | it now.                                                                                               |
| 02:35      | So Rose and I have been burying ourselves in iBeacon apps and hardware the last two                   |
| 02:42      | or three weeks in preparation, and today we're going to talk about automation with iBeacon.           |
| 02:48      | Yeah.                                                                                                 |
| 02:49      | So this is a really fun technology because it was developed by [[Apple]], and it was announced            |
| 02:52      | in 2013.                                                                                              |
| 02:53      | So it's not something that's hot off the process.                                                     |
| 02:56      | It's been around for a while, but it is one of those things that's more used by developers            |
| 03:02      | or somebody who owns a store or something like that rather than average you and me.                   |
| 03:08      | So it's one of those things of, is this something I can really use, and the answer is most definitely |
| 03:14      | yes.                                                                                                  |
| 03:15      | Yeah.                                                                                                 |
| 03:16      | So this is one of Bluetooth low energy, and like Rose said, it's been around for a while.             |
| 03:21      | The original pitch for this was the idea of you going to a museum, and your iPhone can                |
| 03:26      | know exactly where in the museum you are, so it can give you information about the display            |
| 03:32      | you're standing in front of, or if you go into an [[Apple Store]] today, and it says, hey,                |
| 03:38      | welcome to the [[Apple Store]].                                                                           |
| 03:39      | How did that happen?                                                                                  |
| 03:40      | I'm pretty sure they're using iBeacons inside the store to do that.                                   |
| 03:45      | And I was told after the last episode that they are indeed using iBeacons.                            |
| 03:49      | So really what it is, the very short summary is for automators, it's a trigger.                       |
| 03:58      | We have triggers that we've talked about on the show where you connect to a Wi-Fi, and                |
| 04:03      | that's a trigger, and then things happen.                                                             |
| 04:05      | And then we have talked about triggers where you're at a location where it uses the GPS.              |
| 04:10      | iBeacon is another sort of trigger, and it's a very tight trigger in terms of location.               |
| 04:19      | If you use a location trigger in your house, it's going to trigger when you're within blocks          |
| 04:23      | of your house, because it's just not that refined, it can't get down to within feet.                  |
| 04:31      | Whereas with an iBeacon, you have the power to set the transmit power of it, and you can              |
| 04:36      | make it very, very much tighter than a typical location-based trigger.                                |
| 04:40      | Yes, definitely.                                                                                      |
| 04:42      | So an example that I can definitely offer, I've got two examples actually.                            |
| 04:46      | I live on the fourth floor of my building.                                                            |
| 04:48      | If you send me a notification while I am two blocks away, the time that it takes me to                |
| 04:53      | walk those two blocks to my house, get into the building and up to the fourth floor and               |
| 04:56      | into my apartment, I will have completely and utterly forgotten whatever it is that                   |
| 05:00      | notification was telling me to do.                                                                    |
| 05:02      | Same with work.                                                                                       |
| 05:03      | Work on the sixth floor, our lift is so slow, it could be Marvin from Hitchhiker's Guide              |
| 05:07      | to the Galaxy.                                                                                        |
| 05:09      | You genuinely think when you get in and press the button, it's going to say, I'm depressed            |
| 05:13      | as it closes the doors, because it is that slow.                                                      |
| 05:17      | And so if I get a notification on the ground floor, I'm still going to have forgotten it              |
| 05:21      | by the time I've got into my office.                                                                  |
| 05:23      | So it's great to have an iBeacon somewhere in that vicinity, so that then when I actually             |
| 05:29      | exit the lift and I'm walking to the door, be this my apartment or my office, I then                  |
| 05:35      | get a notification that says, hey, you need to just water your plants today or something              |
| 05:41      | simple or it doesn't have to be simple, it could say what scene would you like to set                 |
| 05:46      | or something like that, because this kind of thing you can integrate with all sorts of                |
| 05:50      | different stuff, home kit and everything else.                                                        |
| 05:53      | And it's really great to have that at the appropriate point in time and iBeacons offer                |
| 05:58      | that.                                                                                                 |
| 05:59      | Yeah.                                                                                                 |
| 06:00      | So the advantage is it's a more granular location aware.                                              |
| 06:03      | One of the tests I've been doing this week is I've got one in my studio and I've just                 |
| 06:07      | been having it give me a notification when I enter the studio.                                        |
| 06:11      | I'm just testing the trigger.                                                                         |
| 06:13      | I'm not really turning it into automation yet.                                                        |
| 06:15      | But the idea that I could have it trigger when I enter a room.                                        |
| 06:20      | Now that's the benefit that the downside is this is way more fiddly for an automator.                 |
| 06:28      | Like, you know, connecting a trigger to say this location or this Wi-Fi signal, and I                 |
| 06:33      | think those are the two competitors to what you get with it with these iBeacons.                      |
| 06:38      | Those are dead simple, you know, you put a pin on a map and you're done, or you give                  |
| 06:44      | it the name of a Wi-Fi network and you're done with this, you actually have to set up                 |
| 06:50      | the hardware.                                                                                         |
| 06:51      | We're going to talk about that during the show.                                                       |
| 06:53      | There is some configuration in the hardware and you actually using software need to tune              |
| 07:00      | the intensity of the signal it gives off.                                                             |
| 07:02      | Like if you turn it all the way up, it's not going to go off just when I walk in my studio.           |
| 07:06      | It's going to go off when I walk in my house.                                                         |
| 07:08      | And even, and I'll talk about through the show, I've had challenges trying to get it                  |
| 07:13      | just right as I've been playing with this the last few weeks.                                         |
| 07:18      | And I think there's something else that we should mention because shortcuts also has                  |
| 07:22      | a Bluetooth device trigger.                                                                           |
| 07:24      | And theoretically, if you have a Bluetooth device that is always on your desk, so say                 |
| 07:29      | for example, a Bluetooth speaker that's plugged into a power, so it's a more powerful Bluetooth       |
| 07:34      | speaker, then you could theoretically use that as a shortcut trigger and there's nothing              |
| 07:39      | wrong with that.                                                                                      |
| 07:40      | It's just if we use iBeacons, then we don't have the possibility, or it's extremely unlikely,         |
| 07:47      | let's put it that way, that somebody else is going to have the exact same iBeacon versus              |
| 07:52      | a Bluetooth speaker.                                                                                  |
| 07:53      | There could be three Bluetooth speakers with exactly the same name and they are very easy             |
| 07:58      | to spoof or fake.                                                                                     |
| 08:00      | And so that's why an iBeacon definitely wins over a Bluetooth device there.                           |
| 08:04      | Yeah, they're just more fiddly in general, but they are, but they are also more customisable.         |
| 08:11      | And one of the things we discovered this week or over the last few weeks that we've been              |
| 08:16      | testing these is that not all iBeacons are created equal.                                             |
| 08:21      | Oh, no, there is a wide choice out of there.                                                          |
| 08:25      | There is also, in my case, the invisible and missing iBeacon because [[Amazon]] failed to deliver         |
| 08:29      | the extra test ones I ordered, unfortunately.                                                         |
| 08:33      | So the one that both Rose and I bought, I bought this over a year ago, was the ST-                    |
| 08:39      | Yeah, I think I actually recommended it to you.                                                       |
| 08:41      | Yeah, the ST-Beacons, E-S-T-I-M-O-T-E, at least when I bought them, they were sold as a developer      |
| 08:49      | package.                                                                                              |
| 08:50      | Did they change that now?                                                                             |
| 08:51      | No, they're still available as a developer package.                                                   |
| 08:54      | I'll make sure the link is in the show notes.                                                         |
| 08:57      | And it's advertised as a developer package, but there's nothing to say that you actually              |
| 09:01      | need to be a developer with an [[Apple]] developer account or anything like that to use these.            |
| 09:08      | They're just intending them to be sold to somebody who's going to program something                   |
| 09:12      | with them.                                                                                            |
| 09:13      | But if you're going to use one of the apps that we're going to talk about in today's                  |
| 09:16      | show with them, that counts as programming as far as I'm concerned.                                   |
| 09:19      | So feel free to go ahead and liberate their stock of developer beacons.                               |
| 09:23      | I think they called the developer package because they don't want to do any customer                  |
| 09:27      | support on iBeacons, which are just very fiddly.                                                      |
| 09:31      | Even the ST-Modes, which are the least fiddly, are fiddly.                                            |
| 09:35      | Yeah.                                                                                                 |
| 09:36      | I like the ST-Modes also, they have a nice app in the App Store that allows you to make               |
| 09:42      | those changes that we're going to kind of go through.                                                 |
| 09:45      | And overall, having bought about two different third-party beacons, iBeacons, from [[Amazon]],            |
| 09:53      | one of them was the most recommended, the Blue Charm beacon, and the app they recommend               |
| 10:00      | you use to tune it is not been updated for the most recent iPhones.                                   |
| 10:05      | It is very cryptic how to use it.                                                                     |
| 10:08      | I found directions on their website, I followed them, I also, they had a video, I followed            |
| 10:13      | along with the video, and I never got that beacon to work.                                            |
| 10:17      | So it's just kind of, be careful, the ST-Modes are the most expensive, but I think they're            |
| 10:24      | probably the ones that are going to give you the least frustration.                                   |
| 10:27      | Yeah.                                                                                                 |
| 10:28      | So it's $99 for a pack of four ST-Mode beacons, which is not super cheap, but at the same             |
| 10:34      | time, they are absolutely guaranteed to work.                                                         |
| 10:36      | Now, if you have time to play around with something like this, as this episode releases               |
| 10:41      | were right before the holiday season, depending on where you are, you may have a good couple          |
| 10:46      | of holiday days.                                                                                      |
| 10:47      | With [[Amazon Prime]] shipping, you may be able to order, say, five or so different kinds                 |
| 10:51      | of iBeacons and play with them during some of that miraculous free-down time that we                  |
| 10:55      | have and give them a go.                                                                              |
| 10:59      | Unfortunately, the ones I ordered, I ordered the Gigaset ones, which on [[Amazon]] Germany                |
| 11:03      | had really great reviews, but mine had a slight issue with the [[Amazon]] Korea not being able            |
| 11:09      | to locate the door to my building and saying that there was no entrance.                              |
| 11:13      | So I unfortunately can't recommend those, but I can't say that they're bad either because             |
| 11:17      | I haven't got a chance to test them yet.                                                              |
| 11:19      | Yeah.                                                                                                 |
| 11:20      | And the Blue Charms, maybe I just got a bad one.                                                      |
| 11:21      | I don't know.                                                                                         |
| 11:22      | I will continue, I'll report back as I continue to work on this, but the ST-Mode ones have            |
| 11:28      | been working great for me.                                                                            |
| 11:29      | They're not them.                                                                                     |
| 11:30      | The Blue Charms are like $15 and the ST-Modes are 25, but you got to buy four of them.                |
| 11:38      | So that's about what you're looking at if you want to try and get into this game.                     |
| 11:43      | But the iBeacons are, like I said, an interesting concept for automators because an iBeacon           |
| 11:50      | can be a trigger.                                                                                     |
| 11:52      | Yeah.                                                                                                 |
| 11:53      | And that's what really is the most interesting part of this because knowing exactly where             |
| 11:59      | you are in a building for us is not particularly interesting.                                         |
| 12:02      | Most of us have the ability to somehow, through intuition, maybe it's looking around, maybe           |
| 12:07      | it's knowing which button you pressed in the elevator to know approximately where you                 |
| 12:11      | are.                                                                                                  |
| 12:12      | But your device doesn't know where you are.                                                           |
| 12:15      | And that is something that can lead to many, many automations.                                        |
| 12:19      | Yeah.                                                                                                 |
| 12:20      | So there's several bits of data related to these iBeacons.                                            |
| 12:27      | The first is the identification number.                                                               |
| 12:29      | It's called the UUID, which is a very long number.                                                    |
| 12:35      | It's a universally unique ID, which means that it has to be really long and complex                   |
| 12:41      | in order to be universally unique.                                                                    |
| 12:43      | Unfortunately, this means that it's not the kind of thing that I would recommend that                 |
| 12:47      | you type.                                                                                             |
| 12:48      | I would recommend, if possible, that you copy and paste it because otherwise you're going             |
| 12:53      | to end up with a mistake in there somewhere.                                                          |
| 12:55      | I know I was trying to type one earlier today and I kept mistyping something somewhere.               |
| 13:01      | And then I realised that I could actually copy and paste it, at which point I thought,                |
| 13:04      | why did I just waste 20 minutes trying to type this extremely long string because it's                |
| 13:09      | a mixture of letters and numbers?                                                                     |
| 13:11      | Yeah.                                                                                                 |
| 13:12      | So you get the UUID and then you use that in your apps as the trigger.                                |
| 13:17      | It's looking for the iBeacon with that user unique ID and then you're good to go.                     |
| 13:25      | Now, you could also install an app on your Mac to turn your Mac into a iBeacon transmitter,           |
| 13:33      | right?                                                                                                |
| 13:34      | Yeah.                                                                                                 |
| 13:35      | Yeah, you could.                                                                                      |
| 13:36      | So there's actually a couple of different things that you can do.                                     |
| 13:38      | There is a terminal command that you can use, but there's also an app from BeaconZone,                |
| 13:46      | which can make your Mac advertise an iBeacon.                                                         |
| 13:49      | I'll have a link to it in the show notes.                                                             |
| 13:50      | I've been experimenting with this, but as I already have an iBeacon in my apartment,                  |
| 13:55      | and my Mac is right at the back of my apartment, and when I was experimenting with it, if I           |
| 13:59      | was lying in bed, which is at the front of our apartment, then my phone kept leaving                  |
| 14:04      | the iBeacon and then re-entering the iBeacon, despite the fact that it wasn't moving.                 |
| 14:09      | So I was waking up in the morning with a lot of notifications, and that was not ideal,                |
| 14:13      | and I couldn't quite find out how to tune it.                                                         |
| 14:17      | But it's probably my user error, but I'm perfectly happy with my iBeacon, which is                    |
| 14:22      | centrally located in my apartment.                                                                    |
| 14:24      | Now they also, in addition to the ID number, there are two additional numbers attached                |
| 14:29      | to each iBeacon.                                                                                      |
| 14:31      | It's called a major and a minor number.                                                               |
| 14:34      | And for the use that we're talking about here for triggers and automation, it's not relevant,         |
| 14:40      | but you do need to be aware that they're there because if you have an app that requires               |
| 14:44      | you to give the details, you have to put in the major and the minor number.                           |
| 14:48      | Yeah, exactly.                                                                                        |
| 14:50      | And this can be useful.                                                                               |
| 14:52      | So for example, if you wanted to give all of your iBeacons the same universally unique                |
| 14:58      | ID, which somewhat defeats the point of it being universally unique, but you could give               |
| 15:02      | them all the same UUID so you know that they are yours, and then differentiate between                |
| 15:06      | them with the major and minor.                                                                        |
| 15:08      | I personally recommend using a UUID generator.                                                        |
| 15:12      | I'll have a link to one in the show notes to just generate these because sitting there                |
| 15:16      | trying to think of, I can't even remember how many characters it is.                                  |
| 15:19      | I think it's 64 characters to generate or 32 something along those lines.                             |
| 15:26      | You know, it's, you're there going, uh, wait, okay, I'll just drag my hand over the keyboard.         |
| 15:29      | No way.                                                                                               |
| 15:30      | I've got a semicolon in there.                                                                        |
| 15:31      | I didn't need that.                                                                                   |
| 15:32      | So it's not worth it.                                                                                 |
| 15:34      | And a lot of these iBeacons come with a UUID already generated, and these are unique.                 |
| 15:39      | So you can safely continue to use those without changing it.                                          |
| 15:43      | Yeah.                                                                                                 |
| 15:44      | And, and then the other real relevant number is the transmit power.                                   |
| 15:49      | And that is the number I was talking about.                                                           |
| 15:51      | You know, how loud do you want the iBeacons to electronically scream when you put it somewhere?       |
| 15:56      | And you know, the louder you make it, the, the bigger the area that it covers for the                 |
| 16:02      | trigger.                                                                                              |
| 16:03      | And like if you're looking to set one of these up on like room-based automation, that's               |
| 16:07      | where it takes a lot of like kind of trial and error, you know, you set it, you try and               |
| 16:13      | figure out what's going to work like, you know, roughly negative 20 decibels, according               |
| 16:18      | to the charts I found is like four meters, negative 12 is 20 meters, four decibels is                 |
| 16:26      | 70 meters.                                                                                            |
| 16:27      | So, you know, you kind of get in that ballpark and, and also understand that the louder you           |
| 16:33      | make it, the faster the battery dies, you know, but the, but either way, you've got                   |
| 16:39      | to kind of tune it.                                                                                   |
| 16:40      | So like I set mine at negative 20 to start with, and it wasn't giving me enough hits,                 |
| 16:47      | like it's like I would walk in the room and sometimes it wouldn't work.                               |
| 16:49      | So then I set it to, to negative 12, and then I was getting it downstairs, like, you know,            |
| 16:56      | I was getting it other parts of the house, and, and that's the kind of struggle we're                 |
| 17:01      | talking about here, you know, a lot of the automation we cover on the show just works,                |
| 17:06      | you know, this is one where you really got to play with it.                                           |
| 17:09      | So right now I'm at negative 17 for whatever reason, and it seems like that's about the               |
| 17:14      | right number, but it took me three or four attempts to kind of get, get it to the right               |
| 17:19      | transmit power.                                                                                       |
| 17:20      | Yes.                                                                                                  |
| 17:21      | And the other thing that you could do, and the estimate app can do this, I think there's              |
| 17:26      | a few other apps as well, but you can actually, your iPhone or iPad can also be an iBeacon.           |
| 17:33      | I would only recommend using this for testing purposes because otherwise it will drain your           |
| 17:37      | device's battery, as David was mentioning there, but you can use this for testing.                    |
| 17:42      | And this could be really useful if, for example, you are on a plane and you just want to play         |
| 17:47      | with this a little bit, you know, as you're flying somewhere, and then you can, you know,             |
| 17:52      | pop up in your phone and have that broadcast in iBeacon and connect to it from your iPad              |
| 17:56      | for testing purposes, but that's more for triggering automations than as a test than                  |
| 18:03      | actually setting things up because this is not necessarily very configurable.                         |
| 18:06      | Yeah.                                                                                                 |
| 18:07      | And the way you configure it, if you're going, the estimate route is just you open the app            |
| 18:11      | and then you, you find the particular beacon, you'll see them.                                        |
| 18:16      | And then they've got right in the app, it makes it very easy to see them.                             |
| 18:20      | And not only does it show you the data, it allows you to adjust it.                                   |
| 18:23      | Yes.                                                                                                  |
| 18:24      | That said, you do need to be fairly close to your iBeacon to program it.                              |
| 18:29      | So as I said here, I am in my bedroom.                                                                |
| 18:31      | The iBeacon is in the middle of my apartment, I would guess five meters away.                         |
| 18:36      | I cannot program it right now because it is too far away.                                             |
| 18:40      | It is also, I should note, sitting inside a radiator.                                                 |
| 18:43      | The radiator is not on, but that was just the easiest place where I could put it for                  |
| 18:47      | testing purposes to make sure that it was in the middle of the apartment and to see whether           |
| 18:51      | or not it would keep waking up my phone in the middle of the night to go, hello, you're               |
| 18:54      | here again.                                                                                           |
| 18:55      | Yeah.                                                                                                 |
| 18:56      | And it's not.                                                                                         |
| 18:57      | So I can now find somewhere safe to put that.                                                         |
| 18:59      | Yeah.                                                                                                 |
| 19:00      | You know, I guess that's the warning part of this episode.                                            |
| 19:03      | iBeacons are fun, they're fiddly, and you're going to have to figure them out if you want             |
| 19:08      | to try this.                                                                                          |
| 19:09      | Yes, you are.                                                                                         |
| 19:10      | But you can do some cool stuff with them and we're going to talk about that right after               |
| 19:14      | this.                                                                                                 |
| 19:16      | This episode of Automators is sponsored by FreshBooks.                                                |
| 19:18      | Hey, freelancers, do you want to save 192 hours?                                                      |
| 19:22      | Our friends at FreshBooks can help you do just that with their super simple cloud accounting          |
| 19:26      | software.                                                                                             |
| 19:27      | By simplifying tasks like invoicing, tracking expenses, and getting paid online, FreshBooks           |
| 19:32      | has drastically reduced the time it takes for over 10 million people to deal with their               |
| 19:35      | paperwork.                                                                                            |
| 19:36      | FreshBooks automates late payment email reminders, so you can spend less time chasing payments        |
| 19:41      | and more time working on magic.                                                                       |
| 19:43      | And when you email a client an invoice, FreshBooks can show you whether they've seen it, which        |
| 19:47      | puts an end to all of those guessing games.                                                           |
| 19:51      | If you're listening to this and not using FreshBooks yet, now is the time to try it.                  |
| 19:55      | FreshBooks are offering an unrestricted 30-day free trial for listens of this show, no credit         |
| 19:59      | card required.                                                                                        |
| 20:00      | All you have to do is go to FreshBooks.com/Automators and enter Automators in                   |
| 20:06      | all caps in the How Did You Hear About section.                                                       |
| 20:09      | We thank FreshBooks for their support of this show and we lay FM.                                     |
| 20:12      | All right, Rose, so you've got an iBeacon working now, and you've got the app.                        |
| 20:17      | Oh, I have three.                                                                                     |
| 20:18      | All right.                                                                                            |
| 20:19      | Yes.                                                                                                  |
| 20:20      | Yes, I've got a couple of them running around, and I'm using them for a bunch of different            |
| 20:26      | things.                                                                                               |
| 20:27      | All right, let's hear it.                                                                             |
| 20:28      | What are you doing with it?                                                                           |
| 20:29      | Okay, so the one on my desk, not on my desk anymore, inside the radiator at home, which               |
| 20:35      | is definitely not the best place to store these metal does affect signal, but it's working            |
| 20:41      | really well for me right now.                                                                         |
| 20:43      | This one is primarily my when I get home shortcut.                                                    |
| 20:47      | Now, my when I get home shortcut on its own doesn't sound very impressive until you realise           |
| 20:53      | it's a shortcut, so it can do all of the amazing things that shortcuts is doing.                      |
| 20:58      | So first of all, it checks with Timer to see if a timer is running, and if it is, it will             |
| 21:01      | stop it because this is almost certainly my commuting timer, and I believe I've actually              |
| 21:05      | modified that recently to check if it is my commuting timer.                                          |
| 21:08      | Okay.                                                                                                 |
| 21:09      | If audio is playing.                                                                                  |
| 21:10      | Sorry.                                                                                                |
| 21:11      | Yeah.                                                                                                 |
| 21:12      | And you're doing that via the shortcuts app?                                                          |
| 21:13      | Yeah.                                                                                                 |
| 21:14      | Yeah.                                                                                                 |
| 21:15      | This is all inside of shortcuts.                                                                      |
| 21:16      | But it gets triggered.                                                                                |
| 21:17      | So we're clear.                                                                                       |
| 21:18      | Just so we're clear.                                                                                  |
| 21:19      | Shortcuts does not recognise iBeacons as triggers.                                                    |
| 21:22      | No, it doesn't.                                                                                       |
| 21:23      | So what I have is I have push cut triggering my shortcut.                                             |
| 21:28      | So just like shortcuts can pop up and say, hey, would you like to run this automation,                |
| 21:33      | push cut can do exactly the same thing.                                                               |
| 21:35      | So it pops up and goes, you're home.                                                                  |
| 21:37      | Run your, run your, I'm home shortcut.                                                                |
| 21:41      | And then that runs, which then launches into checking whether or not I've got a timer running.        |
| 21:46      | If it is my commuting timer, it stops it.                                                             |
| 21:49      | And then it checks whether or not I've got audio playing.                                             |
| 21:52      | And if I do have audio playing, then it hands it off to my HomePod so that I can take my             |
| 21:58      | AirPods out and enjoy that.                                                                           |
| 22:01      | It checks my calendar.                                                                                |
| 22:02      | And if there's a calendar event coming up urgently, then it shows that as an alert and                |
| 22:07      | goes, you need to get on with things because you have X calendar event in X minutes.                  |
| 22:14      | And those are obviously filled out based on the information in my calendar.                           |
| 22:18      | And then it goes on with a few other things, you know, if I don't have an event coming up,            |
| 22:21      | it shows me my OmniFocus tasks that are due or that are assigned to my home location rather.          |
| 22:28      | And yeah, it's, it's really useful because this automation can be as powerful as I want.              |
| 22:34      | And I always get reminded to run it at the appropriate time.                                          |
| 22:38      | Yeah.                                                                                                 |
| 22:39      | See, I have some get home based automations based on connection to my home Wi-Fi.                     |
| 22:45      | And it feels like I'm not sure why I would want to switch that out because I feel like                |
| 22:50      | the home Wi-Fi connection only happens when I get home and it just works so solidly for               |
| 22:56      | me.                                                                                                   |
| 22:57      | I'm not sure I want to add the fiddliness of iBeacons to that automation.                             |
| 23:02      | In my case, I have found that when I get home, it can take a good couple of minutes from              |
| 23:06      | my iPhone to connect to the Wi-Fi.                                                                    |
| 23:08      | Yeah.                                                                                                 |
| 23:09      | No, I'm not sure why this is.                                                                         |
| 23:12      | I think it's just generally, you know, with Wi-Fi, especially right inside the door, our              |
| 23:17      | network is not the strongest.                                                                         |
| 23:19      | We don't have Eero yet.                                                                                |
| 23:21      | And so, you know, the Wi-Fi drops off as it gets further away from the router.                        |
| 23:27      | And it just takes a while for my phone to connect.                                                    |
| 23:30      | So I have found sometimes, you know, I've got home, I've taken off my shoes, I put away               |
| 23:33      | my coat into the bathroom, wash my hands, you know, and unpack my bag and I sit down                  |
| 23:39      | on my desk and then it triggers to say, hey, you're connected to Wi-Fi.                               |
| 23:43      | It's like, yeah, but I've already been home for 10 minutes.                                           |
| 23:47      | Now you had told me that you travel with iBeacons and I took that tip to heart because I just         |
| 23:51      | got back from vacation.                                                                               |
| 23:53      | And one of the things I always forget to do when I go on vacation is I forget to charge               |
| 23:57      | because I have a couple of different cameras, I forget to charge the cameras.                         |
| 24:01      | I always forget to download the photos off the cameras as well.                                       |
| 24:06      | And I don't want to load up the memory sticks and I don't want to show up with a camera               |
| 24:09      | that's out of charge.                                                                                 |
| 24:10      | So I brought an iBeacon with me in my luggage, I just put it in the hotel room.                       |
| 24:15      | I set the transmit power so it only would trigger when I got to the room, not when I                  |
| 24:20      | was in the vicinity of the room.                                                                      |
| 24:22      | And it just gave me a notice that said, you know, charge and download.                                |
| 24:25      | And I was, every time I walked in the room, I got that notification and I was free to,                |
| 24:31      | you know, ignore it or listen to it.                                                                  |
| 24:33      | But it was great because there were several times I'm like, oh yeah, I do need to charge              |
| 24:37      | and download.                                                                                         |
| 24:38      | And so it was just a nice little reminder app for me based on very specific location,                 |
| 24:45      | which there was no other way I could have done it because I was using the hotel Wi-Fi                 |
| 24:49      | the whole time.                                                                                       |
| 24:51      | So I was already connected to the hotel Wi-Fi.                                                        |
| 24:53      | And if I had used a location trigger, it just wouldn't have been accurate enough.                     |
| 24:58      | You know, those hotels are big and there's a lot of steel in them.                                    |
| 25:02      | I mean, it's just not going to get the location right.                                                |
| 25:04      | But the iBeacon was perfect for that job.                                                             |
| 25:07      | Yes, I have an iBeacon.                                                                               |
| 25:08      | It lives in my suitcase.                                                                              |
| 25:10      | Most suitcases have got like a little pocket somewhere.                                               |
| 25:13      | I have no idea what this pocket is actually for, by the way.                                          |
| 25:16      | I'm really curious because there are always like very thin pockets that are designed to               |
| 25:21      | like fit a couple of pens in or something.                                                            |
| 25:23      | I put my iBeacon in there and my iBeacon stays in there.                                              |
| 25:28      | And when I'm traveling, when my phone connects to it, I don't change what it tells me.                |
| 25:35      | But when my phone connects to it, I know that means my suitcase is nearby.                            |
| 25:38      | And then when I'm actually at my hotel, then I know that that is when I'm back at my hotel            |
| 25:46      | and it runs my, not when I've got home shortcut, but a shortcut, which is quite similar.              |
| 25:51      | In many ways, it checks OmniFocus for any tasks that I wanted to do when I got back                  |
| 25:56      | to the hotel.                                                                                         |
| 25:57      | So if I'm taking a lot of pictures that day, then I'll have a note to go through and clear            |
| 26:01      | out my pictures and things like that.                                                                 |
| 26:04      | And that's primarily an OmniFocus one because when I'm traveling, I like to think that I             |
| 26:09      | have nothing to do.                                                                                   |
| 26:11      | And it turns out that there's actually a lot of things to do when you're traveling.                   |
| 26:14      | Like you need to make sure that you've packed everything up and you've, you check the bathroom        |
| 26:17      | to make sure you haven't left anything there.                                                         |
| 26:19      | Or actually, when you're back at the hotel and therefore on the Wi-Fi, you want to do                 |
| 26:24      | something because the data package is very expensive.                                                 |
| 26:28      | So it's really useful for that.                                                                       |
| 26:30      | Yeah, I was just thinking, maybe you should have it say, don't check OmniFocus, you're               |
| 26:34      | on vacation.                                                                                          |
| 26:35      | Yeah.                                                                                                 |
| 26:36      | Well, I've been using OmniFocus 3.4 launched recently.                                               |
| 26:40      | And they have a new action called find items.                                                         |
| 26:43      | And I've been using this to find items specifically with a, you know, with tags that are available.   |
| 26:49      | And if there are items with those tags, then it opens that tag in OmniFocus for me.                  |
| 26:56      | All right.                                                                                            |
| 26:57      | So you've got, you say you've got four, what are you doing with the other ones?                       |
| 27:01      | I have three iBeacons.                                                                                |
| 27:03      | The other one is my desktop work.                                                                     |
| 27:06      | When I get there, it tells me to clock in and make sure that I start tracking my time                 |
| 27:13      | accurately for work.                                                                                  |
| 27:15      | And then it opens my OmniFocus for work.                                                             |
| 27:18      | So it's an OmniFocus perspective for work things.                                                    |
| 27:20      | I would like to do a check of, hey, if there are tasks available in OmniFocus, then open             |
| 27:25      | the OmniFocus perspective.                                                                           |
| 27:28      | But if there are ever no tasks for work in my OmniFocus, I think something may have gone             |
| 27:34      | wrong.                                                                                                |
| 27:35      | It could be a sign of the end of the world.                                                           |
| 27:36      | Yeah.                                                                                                 |
| 27:37      | It's interesting though that both of us are really gravitated.                                        |
| 27:40      | We didn't talk about this before we started recording, but we both gravitated towards                 |
| 27:44      | a usage where it's giving you notifications.                                                          |
| 27:47      | We're using it as a notification beacon, more than runoff and create a spreadsheet kind               |
| 27:52      | of thing, you know, automation.                                                                       |
| 27:54      | Yes.                                                                                                  |
| 27:55      | I mean, that's, I think just because of the way that iBeacons work, because they are a                |
| 28:02      | very specific location.                                                                               |
| 28:05      | And for me at the very least, it's rare that I would want to automate something like appending        |
| 28:10      | to a spreadsheet when it gets to a specific location.                                                 |
| 28:13      | Yeah.                                                                                                 |
| 28:14      | Yeah.                                                                                                 |
| 28:15      | It just doesn't strike me as something that would be particularly useful.                             |
| 28:20      | Yeah.                                                                                                 |
| 28:21      | You know, thinking where you could go further with this, like when you get home, maybe you            |
| 28:26      | could change some of the system preferences on your iPhone, because you're not as worried             |
| 28:30      | about battery life, you're near power.                                                                |
| 28:34      | You could use it to send messages, like if you could say, like, have an iBeacon when                  |
| 28:40      | I log, you know, when I show up at work, send a message to my significant others that I               |
| 28:44      | made it okay or something like that, or maybe something like that, maybe put one in the               |
| 28:49      | car where you could automate message sending.                                                         |
| 28:53      | There is more you could do with this, but like Rose, I feel like the real merit is the                |
| 28:58      | notification stuff that you want on a specific location.                                              |
| 29:03      | I have just had a really great idea.                                                                  |
| 29:05      | I need to add another shortcut when I'm leaving my hotel iBeacon to enable low power mode,            |
| 29:11      | because when I'm traveling, I'm taking loads of pictures.                                             |
| 29:14      | I don't yet have the new battery case with the specific camera button.                                |
| 29:17      | That's one of the things on my holiday wishlist this year.                                            |
| 29:21      | So we'll see if I get it.                                                                             |
| 29:23      | But I usually enable low power mode as I leave my hotel room so that then I'm not worried             |
| 29:27      | about running out of battery throughout the day.                                                      |
| 29:30      | And I should have an iBeacon trigger to do that, and then it can just run a shortcut                  |
| 29:35      | which turns low power mode on for me.                                                                 |
| 29:37      | Yeah, that makes sense.                                                                               |
| 29:39      | That new iPhone, man, the battery life is pretty awesome on the phone.                                |
| 29:42      | Oh yeah, it's great.                                                                                  |
| 29:43      | I mean, traveling with it so far, I've not had a problem, but I'm always a little bit                 |
| 29:47      | paranoid when I'm traveling, especially when I'm in the US, because I feel like even though           |
| 29:51      | I speak fluent English and I tend to know where I'm going, I don't know, that I'm more                |
| 29:57      | likely to get lost.                                                                                   |
| 29:58      | I have no idea why.                                                                                   |
| 30:00      | It's interesting.                                                                                     |
| 30:01      | My brain is weird.                                                                                    |
| 30:02      | Yeah, it is interesting.                                                                              |
| 30:03      | We talked about last episode, we had the [[Simon Leeb\|Simon]] from PushCut on, and he was talking about             |
| 30:12      | how he has made the location-aware thing too new level by putting iBeacons in public places.          |
| 30:22      | Or not if that's not legal, because, you know.                                                        |
| 30:25      | We have no idea.                                                                                      |
| 30:26      | I haven't looked it up.                                                                               |
| 30:27      | I don't know.                                                                                         |
| 30:28      | No, I don't know either.                                                                              |
| 30:29      | But I think what he said was something like he taped it to the back of a stop sign or                 |
| 30:33      | something that's near a restaurant or something he goes to.                                           |
| 30:37      | And I was like, that was really smart.                                                                |
| 30:40      | So think about the location-aware thing outside of home and work.                                        |
| 30:45      | Maybe there's something you could do with that.                                                       |
| 30:46      | I don't know.                                                                                         |
| 30:47      | Yeah.                                                                                                 |
| 30:48      | I mean, the other thing that you can do, and this is something I really wanted to experiment          |
| 30:51      | with this, but unfortunately I've been really busy this week, so I didn't get a chance to             |
| 30:55      | make it to the [[Apple Store]] for testing purposes.                                                      |
| 30:57      | Yeah.                                                                                                 |
| 30:58      | Yeah.                                                                                                 |
| 30:59      | There are apps out there.                                                                             |
| 31:00      | I've been using BLE scanner, which stands for Bluetooth Low Energy Scanner.                           |
| 31:05      | And this can scan and show you a list of iBeacons around you.                                         |
| 31:11      | And you might be surprised to find that there are already iBeacons in a lot of places.                |
| 31:15      | A lot of home automation devices are actually iBeacons.                                               |
| 31:19      | [[Apple Store\|Apple stores]] are full of iBeacons.                                                                    |
| 31:22      | And there are iBeacons in many, many places.                                                          |
| 31:25      | So you could use these, you know, instead of attaching one to something or someone.                   |
| 31:34      | You could just use their signal.                                                                      |
| 31:36      | Yeah.                                                                                                 |
| 31:37      | Exactly.                                                                                              |
| 31:38      | And like, for example, a tile, the key tracking things, they are Bluetooth Low Energy iBeacons.       |
| 31:45      | That's what they are.                                                                                 |
| 31:46      | But they don't have the option you can't copy the UUID in the tile app.                               |
| 31:51      | But if you use something like the BLE scanner, this is unfortunately where being able to              |
| 31:54      | copy the UUID would be super handy, but you can connect to a tile and see its UUID.                   |
| 32:01      | So you can theoretically use that.                                                                    |
| 32:03      | Now I've been trying to experiment with this.                                                         |
| 32:05      | I haven't yet been successful, so I can't promise that that's going to work.                          |
| 32:09      | But I would highly recommend that people try this out, because if you already own devices             |
| 32:12      | like this, this is a great way to give it a try, but please don't be too disappointed                 |
| 32:16      | if it doesn't work.                                                                                   |
| 32:17      | Yeah.                                                                                                 |
| 32:18      | I have not seen any of those where the UUID is encrypted.                                             |
| 32:20      | And as long as you have the UUID, you're in business.                                                 |
| 32:24      | You may not be able to adjust the transmit intensity, I don't know, but you will be able              |
| 32:32      | to identify it and then you got a trigger.                                                            |
| 32:35      | Yeah.                                                                                                 |
| 32:36      | And I would actually recommend, especially with something like a tile, don't adjust any               |
| 32:40      | of the settings, even if you find an app that will let you do that, because it may break              |
| 32:44      | other things in unexpected ways.                                                                      |
| 32:46      | Yeah, I'll kill your tile.                                                                            |
| 32:48      | I can almost guarantee it.                                                                            |
| 32:50      | And also, the same way that David has previously gone into trouble for putting eye drops on           |
| 32:54      | a button that turns on and off all the lights in the house, you may get into trouble if               |
| 32:58      | you change something and it suddenly starts flashing all the lights in your house on and              |
| 33:02      | off or something similar, or things just stop working in unexpected ways.                             |
| 33:07      | So.                                                                                                   |
| 33:08      | I wonder what would happen if I, like, dropped an iBeacon in, like, Galaxy's Edge in Disneyland       |
| 33:13      | somewhere.                                                                                            |
| 33:14      | I wonder how long it would last.                                                                      |
| 33:15      | I am pretty certain there are already iBeacons there.                                                 |
| 33:19      | Yeah.                                                                                                 |
| 33:20      | Yeah.                                                                                                 |
| 33:21      | From memory, I know Disney World definitely already has these bands that check people and             |
| 33:26      | now for rights.                                                                                       |
| 33:27      | But a lot of the stuff there, the way that they track the flow of people and the number               |
| 33:31      | of people in a line is nowadays based on technology and some of this is using iBeacons.               |
| 33:37      | Yeah.                                                                                                 |
| 33:38      | So you might just want to open up a scanner app next time you're at Disney, David.                    |
| 33:40      | Yeah.                                                                                                 |
| 33:41      | Disneyland doesn't use the bands, but I wouldn't be surprised if they have some iBeacons already      |
| 33:45      | broadcasting.                                                                                         |
| 33:47      | So I'll have to get into that and see how I can hack Disneyland, you know.                            |
| 33:52      | Say hack Disneyland.                                                                                  |
| 33:53      | Yes.                                                                                                  |
| 33:54      | Basically, just basically turn those into triggers.                                                   |
| 33:55      | I'm not even sure what I would want to trigger.                                                       |
| 33:58      | You could trigger, like, your work mode because you usually take your iPad to Disney and get          |
| 34:02      | on with some work, right?                                                                             |
| 34:03      | Yeah.                                                                                                 |
| 34:04      | But then when I don't work, I don't want to be thinking about it.                                     |
| 34:06      | So I don't know.                                                                                      |
| 34:07      | We'll see.                                                                                            |
| 34:08      | But yeah.                                                                                             |
| 34:09      | Maybe I should check your calendar for time blocks.                                                   |
| 34:11      | Sounds like a homework project for me.                                                                |
| 34:14      | Well, I think you could have some fun with that.                                                      |
| 34:16      | There we go.                                                                                          |
| 34:17      | There we go.                                                                                          |
| 34:18      | So iBeacons, overall, is it a good thing or a bad thing?                                              |
| 34:24      | I would say it's a fun to fiddle with if you're into fiddling with stuff thing.                       |
| 34:28      | If you just want something that you can set up and go and you want iBeacons, you're going             |
| 34:32      | to have to go with the estimates.                                                                     |
| 34:34      | They are the least fiddly of the lot, which is not saying that they are fiddle-free, but              |
| 34:42      | in general, you can pretty much just set them up and run with them and just copy the                  |
| 34:45      | UID and go, and you don't need to tweak anything.                                                     |
| 34:48      | The only thing that you may want to change there is the advertising frequency.                        |
| 34:53      | [[Apple]] recommends setting this to 100 milliseconds.                                                    |
| 34:56      | This is going to be a little harder on the battery life than the default 300 milliseconds             |
| 35:01      | that mine came set to, but the batteries are replaceable in the estimates.                            |
| 35:06      | So that's going to work pretty well.                                                                  |
| 35:07      | There's also a forum thread where people have got iBeacon recommendations.                            |
| 35:10      | So you may want to take a look at that.                                                               |
| 35:12      | Yeah.                                                                                                 |
| 35:13      | This is the second Rose's nomination of Estimote's, another little more expensive.                     |
| 35:17      | But if you want to give this a try, at least give yourself a helping hand and get hardware            |
| 35:22      | that is as reliable, and maybe we'll update.                                                          |
| 35:27      | Maybe I can get this blue charm to work better and I'll report back, and I know Rose has              |
| 35:31      | a couple that she's ordered as well.                                                                  |
| 35:34      | But if the [[Amazon]] Courier decides that my building has an entrance before this episode                |
| 35:38      | releases, then I promise I will write up my experience with the Gigaset iBeacons.                     |
| 35:42      | But I just, I'm not getting a lot of confidence because you need an app that makes it easy            |
| 35:49      | to go in and edit this data that we're talking about, and Estimote just is the gold standard          |
| 35:55      | so far.                                                                                               |
| 35:56      | Yes.                                                                                                  |
| 35:57      | I've been looking, but I have not had a lot of success mostly because I don't need to                 |
| 36:02      | edit the Estimote Beacons in anything other than the Estimote apps.                                   |
| 36:06      | Now, that being said, I think iBeacons are fun to play with.                                          |
| 36:10      | If you're an automator, you should definitely give it a try.                                          |
| 36:14      | I don't think this is something that's earth-shattering.                                              |
| 36:17      | I think it is fiddly, it's not going to work necessarily always the way you want it.                  |
| 36:23      | Because [[Apple]] has done such a good job of increasing the other triggers and shortcuts                 |
| 36:29      | and location and Wi-Fi or two that really stand out to me, but Bluetooth connection                   |
| 36:34      | is another one.                                                                                       |
| 36:36      | They do overlap some existing features, so it's not necessarily that something you                    |
| 36:40      | must do, but it's definitely worth trying.                                                            |
| 36:43      | Also, if you want to send feedback to [[Apple]] and say, hey, why don't we have iBeacons as               |
| 36:48      | triggers and shortcuts?                                                                               |
| 36:49      | I know they read that feedback.                                                                       |
| 36:51      | Oh, yeah.                                                                                             |
| 36:52      | The more people that request something, I'm pretty certain the higher up the food chain               |
| 36:56      | it goes so that they're going to be able to look at that.                                             |
| 36:59      | That said, I am really pleased with the push cut implementation because the way push cut              |
| 37:02      | works is you can have it show you a menu of things.                                                   |
| 37:06      | When I get home, I can have it show me a menu of different I'm home shortcuts if I want               |
| 37:10      | to.                                                                                                   |
| 37:11      | I decided to build most of the logic into the one shortcut, but my hotel one, for example,            |
| 37:16      | has a few different options.                                                                          |
| 37:18      | When I get there, am I leaving again immediately and I'm just dropping something off and I            |
| 37:23      | need to double check that there's nothing else that I need to do or am I there for the                |
| 37:28      | night or am I back for a little while to take a nap because I'm jet lagged?                           |
| 37:33      | There's a few different options built into that, thanks to push cut.                                  |
| 37:36      | And push cut is a must have if you want to do this stuff because that's where you trigger             |
| 37:40      | the automations and it's just a great app anyway, but it really is friendly to iBeacons.              |
| 37:47      | Yes, it is.                                                                                           |
| 37:49      | The app has just been updated as we record to have some more details about the iBeacon                |
| 37:56      | stuff in there, so I would highly recommend checking that out.                                        |
| 38:00      | We are getting ready to push the red button to record and I saw the update notes just                 |
| 38:03      | come out that now it's going to allow you to do web triggers off iBeacons without a confirmation.     |
| 38:09      | Yeah, so you can have it do something on the internet automatically when you connect to               |
| 38:14      | an iBeacon and you don't have to do anything.                                                         |
| 38:17      | That's amazing and I'm really trying to figure out what I want to do with that.                       |
| 38:21      | I am thinking, so I have some Nanoleaf light panels on the wall behind my desk and my boyfriend       |
| 38:26      | hates them because they can light up the entire room, so it's basically the whole apartment.          |
| 38:31      | I am so tempted to have these light up in different colours when I connect to different                |
| 38:35      | iBeacons just to annoy him further.                                                                   |
| 38:38      | Yeah, because you could do that through a webhook and Nanoleaf has webhook connections,               |
| 38:45      | so you're good.                                                                                       |
| 38:46      | Yeah, I mean, you could also just connect to something like if this and that.                         |
| 38:51      | Imagine sending somebody an email every time you connect to an iBeacon.                               |
| 38:57      | I may be being a little bit evil today.                                                               |
| 39:00      | Either way, it's great and PushCut is definitely the way to actually turn this into an automation     |
| 39:07      | tool.                                                                                                 |
| 39:08      | Yes, and it's a great app.                                                                            |
| 39:11      | We had [[Simon Leeb\|Simon]] on last week, the developer of [[PushCut]], and that was a great episode.                    |
| 39:15      | If you haven't listened to that one, I would highly recommend going back and doing that               |
| 39:18      | because he also talks about how he uses iBeacons and that will give you some more ideas.              |
| 39:25      | This episode of The Automators is brought to you by ExpressVPN, high speed, secure and                |
| 39:30      | anonymous VPN services, and you get three months for free with a one month package when you           |
| 39:36      | go to expressvpn.com/automators.                                                                |
| 39:42      | So VPNs, we all need them.                                                                            |
| 39:45      | You know, VPN protects your privacy and security online.                                              |
| 39:48      | But did you know it can take your TV watching to the next level, getting all these new                |
| 39:52      | streaming services Rose, but they don't work everywhere?                                              |
| 39:56      | Like Disney Plus isn't in England or the UK, I said the wrong word, it's the United Kingdom.          |
| 40:03      | You can't watch The Mandalorian and get all the joy that is baby Yoda, but you can unlock             |
| 40:09      | movies and shows that are available in other countries with something like ExpressVPN.                |
| 40:14      | You can use ExpressVPN to binge Doctor Who, Star Trek, or The Mandalorian, just fire                  |
| 40:18      | up ExpressVPN and change your location to the country of choice, then refresh the application         |
| 40:25      | and that's it.                                                                                        |
| 40:26      | ExpressVPN hides your IP address, so you can control where you want sites to think you're             |
| 40:31      | located and you can choose from almost 100 different countries.                                       |
| 40:35      | Just think about the Netflix and Disney Plus shows you want to see, and you can make that             |
| 40:39      | happen.                                                                                               |
| 40:40      | So if you love anime, you can use ExpressVPN to access Japanese Netflix.                              |
| 40:44      | And it's not just Netflix, ExpressVPN works with any streaming service like Hulu, BBC                 |
| 40:49      | Player, YouTube, whatever you want.                                                                   |
| 40:52      | There are hundreds of VPNs out there, but ExpressVPN is ridiculously fast.                            |
| 40:56      | What you want when you're watching shows, there's no buffering, no lag, and you can                   |
| 41:00      | stream in HD.                                                                                         |
| 41:02      | ExpressVPN is also compatible with all your devices, the phones, media consoles, smart                |
| 41:06      | TVs and more, so you can watch what you want wherever you want.                                       |
| 41:10      | They gave me a free sample of ExpressVPN when they first started sponsoring the show.                 |
| 41:15      | When that ran out, I just started paying for it.                                                      |
| 41:17      | I love it.                                                                                            |
| 41:18      | They do a great job.                                                                                  |
| 41:19      | I travel a lot, so I can protect my internet with it.                                                 |
| 41:24      | And if you go to this link right now, ExpressVPN slash Automators, you'll get three extra             |
| 41:29      | months free with a one-year package.                                                                  |
| 41:31      | So to support the Automators, watch what you want and protect yourself at ExpressVPN.com              |
| 41:37      | slash Automators, our thanks to ExpressVPN for their support of the Automators and all                |
| 41:41      | of Relay FM.                                                                                          |
| 41:44      | Going back to the web triggers from the iBeacons, I just had a thought, which is, I have a Christmas  |
| 41:50      | tree plugged into smart plugs.                                                                        |
| 41:52      | And whenever I get home, I can have the Christmas tree turned on.                                     |
| 41:56      | And I plug different lights into their different times of the year, so I could have different         |
| 41:59      | lights turned on different times of the year, depending on what's plugged into them.                  |
| 42:04      | I'm really liking this.                                                                               |
| 42:07      | One of the nicest things about the LED lights on Christmas trees is that they use ridiculously        |
| 42:12      | low power.                                                                                            |
| 42:14      | So I have no guilt now.                                                                               |
| 42:15      | I keep my lights on almost all day on my tree.                                                        |
| 42:17      | I just love walking around the house and seeing the tree lit up all day.                              |
| 42:21      | It's just...                                                                                          |
| 42:22      | Oh, I leave mine on all the time when I'm at home, but it does feel like a little bit                 |
| 42:25      | of a waste to have it on when I'm not at home.                                                        |
| 42:29      | So because, well, it's usually I get home first and I leave home last out of me and                   |
| 42:36      | my partner.                                                                                           |
| 42:37      | So it makes sense for me to be the one turning the lights on and off.                                 |
| 42:40      | And we already have the button by the door that turns everything off, including the                   |
| 42:42      | Christmas tree.                                                                                       |
| 42:43      | But now when I get home, the Christmas tree can automatically light up completely independently       |
| 42:48      | without me being involved, apart from being present.                                                  |
| 42:51      | And with that new update to push cut, you could do that without even a notification screen            |
| 42:56      | just turns on.                                                                                        |
| 42:57      | Exactly.                                                                                              |
| 42:58      | Yeah.                                                                                                 |
| 42:59      | I am loving this idea.                                                                                |
| 43:00      | All right.                                                                                            |
| 43:01      | We have to report back to see how that goes.                                                          |
| 43:02      | Yeah.                                                                                                 |
| 43:03      | All right.                                                                                            |
| 43:04      | So what else are you automating these days for us?                                                    |
| 43:07      | Oh, I've had one of those weeks where it felt like I've had no time to do anything, but               |
| 43:13      | I have made time to automate stuff because it feels like I'm wasting 20, 30 minutes setting           |
| 43:19      | this stuff up to start with, but then it saves me at least 45 minutes while I'm actually              |
| 43:25      | doing whatever it is.                                                                                 |
| 43:27      | And the first one of these is I deep writing for the suite setup and I put all the images             |
| 43:33      | and the article in a [[Dropbox]] folder.                                                                  |
| 43:36      | And I already had a shortcut that was uploading the images to a [[Dropbox]] folder, but they were         |
| 43:40      | too large in general because screenshots that you take on iPhone are really big nowadays              |
| 43:46      | because the iPhone screen is so pretty.                                                               |
| 43:49      | There's a lot of light bulbs in that screen.                                                          |
| 43:51      | Oh, yeah.                                                                                             |
| 43:52      | And so I create, I modified my shortcut.                                                              |
| 43:56      | It checks whether or not the width is greater than the height and then resizes it so that             |
| 44:00      | the largest dimension is 800 pixels and then the other one is automatically set.                      |
| 44:07      | And then it overlays them on a blank PNG file, which is, and this is designed so that, for            |
| 44:14      | example, if you have a single iPhone screenshot and you put this into WordPress, WordPress            |
| 44:19      | will then make the width of the screenshot the entire width of the blog post.                         |
| 44:24      | So you're scrolling down and this is really, really big iPhone screenshot in the middle               |
| 44:29      | of your post and it looks absolutely ridiculous.                                                      |
| 44:32      | So it overlays this onto a blank PNG.                                                                 |
| 44:35      | And this blank PNG is 1000 by 800 pixels and is base 64 encoded into my shortcut, which               |
| 44:40      | basically means I turned the image into a text block so I can just decode it every time               |
| 44:45      | instead of pulling that image out from somewhere.                                                     |
| 44:48      | And this not only makes my life a little bit easier because I should ideally be doing this,           |
| 44:53      | but it definitely makes the editor's lives easier because they don't then have to download            |
| 44:57      | all of my screenshots and run them through a shortcut themselves.                                     |
| 45:01      | It's just done for them.                                                                              |
| 45:02      | All right.                                                                                            |
| 45:03      | A couple of things there I want to pick apart.                                                        |
| 45:06      | First thing you said is it checks for the width versus the height.                                    |
| 45:09      | Yes.                                                                                                  |
| 45:10      | So what I'm doing is, so I'll walk you through the entire shortcut because I think that that          |
| 45:16      | is the easiest thing to do.                                                                           |
| 45:17      | So the first thing...                                                                                 |
| 45:18      | And this is a shortcut space shortcut, right?                                                         |
| 45:20      | Yeah.                                                                                                 |
| 45:21      | This is a shortcut shortcut.                                                                          |
| 45:22      | So the first thing I do is I share an image to do the shortcut, but if I don't share an               |
| 45:28      | image to the shortcut, then I use the if action and I say, if shortcut input does not have            |
| 45:33      | any value, select photos and I've deleted the otherwise.                                              |
| 45:36      | So this either gives me the shortcut input or the photo or my selected photos.                        |
| 45:42      | So the reason you do that is so you could take a screenshot and then just share it to                 |
| 45:47      | the shortcut or you could run the shortcut and select it from your photo library.                     |
| 45:52      | Exactly.                                                                                              |
| 45:53      | So if I've taken screenshots, say throughout the day as I was just getting on with my life            |
| 45:56      | and it was like, oh yeah, this is the screenshot that I need for this article and that's the          |
| 45:59      | screenshot I need for that article.                                                                   |
| 46:01      | I don't have to deal with it right then and there.                                                    |
| 46:05      | And then after this, I have a text action, which has the base 64 encoded PNG image.                   |
| 46:11      | And then I decode this, so there's an encode and decode for base 64 action.                           |
| 46:17      | It's the same action.                                                                                 |
| 46:18      | And I've just said this is the variable called background image, just so I can get at it              |
| 46:22      | at any point in my shortcut.                                                                          |
| 46:25      | Then I go through each of the pictures, which could be shared to the shortcut or selected.            |
| 46:32      | And then I show it to myself again, because while I have a great memory going through                 |
| 46:36      | 15 screenshots, I will forget which one I'm on.                                                       |
| 46:40      | And then it asks me for the name.                                                                     |
| 46:43      | It reformats the name a little bit to be lowercase, remove spaces and things like that.               |
| 46:47      | And then it gets that repeat item.                                                                    |
| 46:50      | So that's the one image that we're working on.                                                        |
| 46:52      | And it gets the width of that.                                                                        |
| 46:54      | And it says if it's greater than or equal to the height of that image.                                |
| 47:00      | And then it resizes it to 800.                                                                        |
| 47:02      | And if you don't put anything in the height for the resize, it sets it to auto height.                |
| 47:08      | And this is where shortcuts is really smart, because in my otherwise, it's basically the              |
| 47:12      | other way around.                                                                                     |
| 47:13      | So it says resize is my photo, which is my repeat item, to the auto width times 800.                  |
| 47:22      | And then it overlays it onto that background image that I decoded earlier.                            |
| 47:25      | I need to interrupt there, sorry.                                                                     |
| 47:28      | Maybe I'm dense, but now the screenshot of an iPhone is never going to have a greater                 |
| 47:34      | width than height.                                                                                    |
| 47:35      | No, but I may have taken screenshots on my iPad, or maybe I took it in landscape mode.                |
| 47:41      | There are a few possibilities there, because I use this shortcut in lots of places.                   |
| 47:45      | I even share my Mac screenshots to this.                                                              |
| 47:48      | Because I'm really nerdy like that.                                                                   |
| 47:50      | All right.                                                                                            |
| 47:51      | So that's basically a filter to get those out.                                                        |
| 47:55      | Yeah, exactly.                                                                                        |
| 47:57      | And so that I can deal with any kind of screenshots here.                                             |
| 48:02      | Then after it's done the overlay, it then checks if the width is less than or equal                   |
| 48:07      | to the height and adds 20 to the height and crops it, if necessary.                                   |
| 48:13      | Then I set the name, and then I save all the variables into a [[Dropbox]] folder so that I                |
| 48:18      | can easily access them.                                                                               |
| 48:20      | And so I can share them with the team.                                                                |
| 48:21      | Now, do you do an overlay of the iPhone frame on it?                                                  |
| 48:27      | So I have already done that with Pixel when I take the screenshot pretty much.                        |
| 48:33      | I don't send these out to put frames on top of them, just because adding that inside the              |
| 48:37      | shortcut feels like a lot of work when I'm doing things, and I'm there going, oh my God,              |
| 48:42      | I've spent 45 minutes dealing with 45 screenshots.                                                    |
| 48:46      | And so I tend to, I'm sitting there, I've just taken the screenshot, I'll open Pixel                  |
| 48:50      | and frame it nicely and delete any bits that need deleting then, because if I have to remember        |
| 48:56      | to blur data out later, I will absolutely 110% forget, whereas if I do that as soon                   |
| 49:02      | as I take that screenshot, it's not going to get forgotten.                                           |
| 49:05      | All right.                                                                                            |
| 49:06      | And so Pixel, you run Pixel on the image before you put it into this workflow.                        |
| 49:12      | Exactly.                                                                                              |
| 49:13      | Yeah.                                                                                                 |
| 49:14      | I'm not familiar with Pixel.                                                                          |
| 49:16      | So it's a...                                                                                          |
| 49:17      | Pixel is a really lovely app.                                                                         |
| 49:19      | I think it was a dollar or something.                                                                 |
| 49:22      | They've recently changed their model, so it's now a free app with an in-app purchase, I               |
| 49:27      | think.                                                                                                |
| 49:28      | But when you select an image in Pixel, so the idea is it's one of these scrolling                     |
| 49:34      | screenshot applications.                                                                              |
| 49:35      | So you could select two photos, and then you can say, scroll shot, vertical or horizontal,            |
| 49:41      | and that's how it's going to combine them.                                                            |
| 49:43      | So if you select scroll shot, it's going to try and overlay the images and crop out                   |
| 49:48      | like the top and the bottom navigation bar in the middle to match them up and turning                 |
| 49:53      | into a long screenshot.                                                                               |
| 49:56      | And if you say vertical or horizontal, then it's just going to stack them on top of each              |
| 49:59      | other.                                                                                                |
| 50:00      | But if you just select the one image and then you tap adjust, under the tools menu, there             |
| 50:06      | is a little phone icon.                                                                               |
| 50:10      | And if you tap that, then you can select different colour devices.                                     |
| 50:14      | And if you tap the settings icon, then you can choose from different devices.                         |
| 50:17      | So you could say that you have an iPhone 11 Pro in the fantastic midnight green, or you               |
| 50:25      | have an iPhone 8 Plus, an iPad Pro, or an [[Apple Watch]] Series 4.                                       |
| 50:30      | And you can actually frame an iPhone screenshot in an [[Apple Watch]] Series 4 because it will            |
| 50:37      | stretch the [[Apple Watch]] frame to fit the content, which looks kind of crazy, but that may be          |
| 50:45      | the artwork of this chapter.                                                                          |
| 50:48      | So double check.                                                                                      |
| 50:49      | Yeah, I do, because I just do a shortcut with an embedded frame, and then I update it whenever        |
| 50:54      | I get a new phone.                                                                                    |
| 50:56      | But now there are a bunch of apps named PIXO here.                                                    |
| 50:59      | Oh, okay.                                                                                             |
| 51:00      | Is it PIXO?                                                                                           |
| 51:01      | This is P-I-C-S-E-W.                                                                                  |
| 51:04      | It's a white icon with a purple P on it, and it is linked in the show notes for anybody               |
| 51:09      | listening at home.                                                                                    |
| 51:10      | Oh, PIXO.                                                                                             |
| 51:11      | I was thinking P-I-X-O.                                                                               |
| 51:12      | Ah.                                                                                                   |
| 51:13      | Yes, PIXO is into soot pictures together.                                                             |
| 51:17      | Got it.                                                                                               |
| 51:18      | And of course, I have already downloaded it at some point, because...                                 |
| 51:23      | It's a really useful application.                                                                     |
| 51:25      | I've had these shortcuts before, which frame images, but at some point they always seem               |
| 51:32      | to break, and it's really annoying.                                                                   |
| 51:36      | And I found PIXO, and it works every time, and it even has.                                           |
| 51:40      | So next to the phone icon, there's a signal icon, and if you tap that, then it automatically          |
| 51:46      | cleans up the signal at the top, so it doesn't look like your iPhone needs charging.                  |
| 51:50      | The time is set to 9.41 AM.                                                                           |
| 51:52      | You have full signal and full Wi-Fi.                                                                  |
| 51:54      | Yeah.                                                                                                 |
| 51:55      | I need to start using this app, because I just do it with the shortcut, and this is                   |
| 52:00      | more powerful, and the ability to make small edits is nice to read in the app.                        |
| 52:05      | And it has a blur option as well, so you can pixelate some sections or something, which               |
| 52:13      | is really useful if you have data in there that you need to get rid of.                               |
| 52:18      | Even got some of the little markup options as well, though I tend to just use the iPhone              |
| 52:21      | native, the photos native markup tools if I need to mark up any images there.                         |
| 52:27      | That sounds like you're doing a good job with this.                                                   |
| 52:30      | I find it a really easy to use workflow.                                                              |
| 52:33      | It did take me a little while to set up the shortcut, and in general, my workflow the                 |
| 52:37      | way that is the most useful, but it's been really helpful.                                            |
| 52:42      | Now that I've got it there, it doesn't take me much time at all to deal with the screenshots,         |
| 52:47      | and then it's just done.                                                                              |
| 52:49      | Yeah.                                                                                                 |
| 52:50      | You said you had another one, too, this month.                                                        |
| 52:52      | Yeah.                                                                                                 |
| 52:53      | So last week, I had one of those things.                                                              |
| 52:58      | I was writing an article, and I put a bunch of empty links in it, as you do, and I write              |
| 53:02      | a mic down.                                                                                           |
| 53:03      | So this means I had some texts surrounded by square brackets followed by two open round               |
| 53:08      | brackets.                                                                                             |
| 53:09      | Yeah.                                                                                                 |
| 53:10      | With nothing in them.                                                                                 |
| 53:11      | Yeah.                                                                                                 |
| 53:12      | With nothing in them.                                                                                 |
| 53:13      | Because I was in the middle of writing, and I didn't want to stop and get a link to the               |
| 53:16      | draft scripting directory, and I didn't want to get a link to Pixel and the other things              |
| 53:21      | that I was writing.                                                                                   |
| 53:22      | I just wanted to write and think about that later, and then I had to go through and find              |
| 53:26      | all these.                                                                                            |
| 53:27      | So I did a find, and I didn't have to use regular expressions, but I did because I wanted             |
| 53:32      | to.                                                                                                   |
| 53:33      | And then I realised, why am I doing the same find and replace every single time?                      |
| 53:39      | Yeah, because the find would be what, close bracket, open bracket, close bracket, all                 |
| 53:43      | together.                                                                                             |
| 53:44      | Yeah.                                                                                                 |
| 53:45      | Basically.                                                                                            |
| 53:46      | And it didn't make a lot of sense, and I was like, I could write a draft section for                  |
| 53:50      | this.                                                                                                 |
| 53:51      | And last week, [[Drafts]] from Mac launched with actions.                                                 |
| 53:55      | So it updated to be precise.                                                                          |
| 53:56      | We should have mentioned that earlier.                                                                |
| 53:58      | The congratulations are great.                                                                        |
| 53:59      | Yeah, we should have.                                                                                 |
| 54:00      | So [[Drafts]] is the app we've been talking about on iOS forever.                                         |
| 54:03      | Now it's been on Mac, but now it has actions.                                                         |
| 54:05      | Awesome.                                                                                              |
| 54:06      | Yeah.                                                                                                 |
| 54:07      | And it's so good.                                                                                     |
| 54:08      | I love it.                                                                                            |
| 54:09      | And I've got a link to my review for that in the show notes as well.                                  |
| 54:12      | But I realised I could write a [[Drafts]] action for this.                                                |
| 54:14      | And so I did.                                                                                         |
| 54:15      | I wrote a [[Drafts]] action, which finds all of the empty links, but it then shows them to                |
| 54:21      | you in a prompt so that you can just have this prompt open.                                           |
| 54:24      | You can, especially on a Mac, you can put [[Drafts]] on one side of your screen and [[Safari]]                |
| 54:28      | on the other and find all those links and just paste them all in and click OK.                        |
| 54:33      | And then [[Drafts]] just goes, and it runs through and fixes all of those for you.                        |
| 54:39      | And that's great.                                                                                     |
| 54:40      | No more fiddling with the mouse to like land it between the two parentheticals.                       |
| 54:45      | It's just, it's great.                                                                                |
| 54:46      | Yeah.                                                                                                 |
| 54:47      | Yeah.                                                                                                 |
| 54:48      | And it just shows you a list of them as well.                                                         |
| 54:49      | And it doesn't, it doesn't show you like, for example, open square brackets, [[Drafts]],                  |
| 54:53      | closed square brackets, open round bracket, closed round bracket, no, no, no, it just shows           |
| 54:56      | you [[Drafts]].                                                                                           |
| 54:58      | And then you paste the link to [[Drafts]] next to it, if, if that's what is inside your,                  |
| 55:03      | your link there.                                                                                      |
| 55:04      | And you're doing that with a [[Drafts]] action.                                                           |
| 55:06      | Yeah.                                                                                                 |
| 55:07      | [[JavaScript]] action that I wrote.                                                                       |
| 55:08      | Yeah.                                                                                                 |
| 55:09      | You could also do that with [[Keyboard Maestro]] if you wanted.                                           |
| 55:11      | Yeah, you could.                                                                                      |
| 55:13      | I just wrote it in [[Drafts]] because I also need to use this on my iPad and occasionally on              |
| 55:17      | my iPhone.                                                                                            |
| 55:18      | Yeah.                                                                                                 |
| 55:19      | And that can be a little fiddly to send something off to [[Keyboard Maestro]] in the background           |
| 55:22      | to do that.                                                                                           |
| 55:23      | I mean, I'm sure I could.                                                                             |
| 55:24      | You don't want to do that.                                                                            |
| 55:25      | No, that's a bad idea.                                                                                |
| 55:26      | Bad idea.                                                                                             |
| 55:27      | Yeah.                                                                                                 |
| 55:28      | I mean, maybe, maybe that's your hard work for this week.                                             |
| 55:31      | I don't know.                                                                                         |
| 55:32      | It's a thing you could do in [[Keyboard Maestro]] without running [[JavaScript]].                             |
| 55:34      | You could, you could just make it an easy search and replace and a, a variable for the, and           |
| 55:39      | a, and a pace, or you could even just grab the clipboard contents and automatically insert            |
| 55:43      | it.                                                                                                   |
| 55:44      | But yeah, that's, that's cool.                                                                        |
| 55:45      | And I like that.                                                                                      |
| 55:47      | I think [[Drafts]] action makes sense because that's the app you're running it in.                        |
| 55:50      | It has automation tools built in.                                                                     |
| 55:52      | I think you, you're right on there.                                                                   |
| 55:54      | Did you share that to the [[Drafts]] automation library yet?                                              |
| 55:57      | Yeah, I shared it to the action directory and I've got a little blog post on how it                   |
| 56:00      | works as well, which I'll link to in the show notes.                                                  |
| 56:03      | Nice one.                                                                                             |
| 56:04      | This episode of Automated is brought to you by Kensington, the people who make universal              |
| 56:09      | docking stations that are designed to increase productivity.                                          |
| 56:13      | You can get access to more ports and make your sleek MacBook, Chromebook, or other laptop             |
| 56:17      | as powerful as a desktop.                                                                             |
| 56:19      | It's plug and play with no drivers, so you can enjoy up to a dual 4K display with HDMI                |
| 56:25      | and display link video connectors.                                                                    |
| 56:27      | Plus USB 3.0, USB-C, and Thunderbolt 3 with power delivery available.                                 |
| 56:32      | The Kensington engineering team has three decades of experience in high volume manufacturing          |
| 56:37      | of hardware IT products, plus rigourous test cycles and quality control means all of their             |
| 56:43      | products are tested above industry standards.                                                         |
| 56:46      | If you're an IT decision maker looking to find the right docking solutions for your                   |
| 56:49      | organisation, check Kensington's Pro Concierge program and Test Driver docking solution today.        |
| 56:56      | Visit kensington.com/automators right now to check out Kensington.                                     |
| 57:00      | That's kensington.com/automators to learn more.                                                        |
| 57:04      | Our thanks to Kensington for their support of this show and all of Relay FM.                         |
| 57:09      | So David, I'm not the only person who's been solving automation problems, am I?                       |
| 57:13      | Yeah, but I haven't been writing any [[JavaScript]].                                                      |
| 57:15      | Mine is a little more basic, but I took a real hard look at my legal setup automation                 |
| 57:23      | in the last few weeks.                                                                                |
| 57:24      | You know, I've got this [[Stream Deck]] that I love, and I'm working on an update to the                  |
| 57:28      | [[Keyboard Maestro]] field guide to show off everything it can do, but you know, it's great               |
| 57:33      | because you can connect the [[Stream Deck]] to a [[Keyboard Maestro]] as a trigger.                           |
| 57:39      | And it's just the idea of system setups with these buttons is very, I find very handy.                |
| 57:44      | I mean, you could also do all this stuff with keyboard shortcuts.                                     |
| 57:47      | You don't need to buy a [[Stream Deck]], but for some reason, the idea of sitting at your computer        |
| 57:51      | tapping a button and then getting to work is really nice.                                             |
| 57:55      | So but I wasn't happy with the automation for the legal stuff I do.                                   |
| 58:00      | I'm fortunate I've got a 27 inch screen, and then I've got two 4k vertical screens                    |
| 58:06      | on either side.                                                                                       |
| 58:07      | So it's like an iMac with big ears.                                                                   |
| 58:10      | And so I've got all the screen real estate to use.                                                    |
| 58:13      | And when I sit down to do legal work, I wanted to have a better system for it.                        |
| 58:19      | And so I, you know, I, I've got a video on YouTube.                                                   |
| 58:22      | I'll share it in the show notes for the show of how I use [[Keyboard Maestro]] to do system               |
| 58:28      | setups and the [[Keyboard Maestro]] field guide goes into it and even excruciating detail                 |
| 58:33      | if you're interested.                                                                                 |
| 58:34      | But the but in general, the right screen for me is always calendar with a weak view on                |
| 58:40      | the top and OmniFocus on the bottom.                                                                  |
| 58:43      | It's like, if I look to the right, I can see my appointments and I can see my tasks at                |
| 58:47      | all times.                                                                                            |
| 58:48      | And so I have all this other space that I wanted to do things with.                                   |
| 58:52      | And I wanted to get better at automating it.                                                          |
| 58:53      | One of the things I do with law practice is I run a lot of stuff out of base camp.                    |
| 58:57      | And I talked about on the automators either last episode or two episodes ago about the                |
| 59:02      | fact that I'm just starting to lose faith in these web application native Mac apps,                   |
| 59:10      | you know, you know, air table, quip, a lot of the apps that we use that are basically,                |
| 59:17      | you know, kind of windows into a web service, they just don't work that well.                         |
| 59:23      | And and another one that's on that list for me is base camp.                                          |
| 59:26      | I mean, they have a nice app, but they are better on the web.                                         |
| 59:29      | I mean, and I run a bunch of legal stuff out of base camp.                                            |
| 59:33      | So the nice thing is I can get a specific URL for very particular locations in base                   |
| 59:39      | camp where I run my my legal practice out of.                                                         |
| 59:42      | So I thought, well, I could combine that with [[Keyboard Maestro]].                                       |
| 59:46      | So now when I hit the button to do legal work, the first thing it is it blows out, it clears          |
| 59:51      | all the windows off my system.                                                                        |
| 59:54      | It opens the calendar to the legal calendar.                                                          |
| 59:57      | It opens OmniFocus to the legal tasks.                                                                |
| 01:00:00   | It opens up multiple tabs and [[Safari]] in base camp based on, you know, that it opens my                |
| 01:00:07   | online billing system.                                                                                |
| 01:00:08   | So I just have a real custom set of [[Safari]] tabs that just opens automatically.                        |
| 01:00:13   | And then those drop those go to the upper left portion of the left monitor.                           |
| 01:00:19   | And then the the lower portion, all the other apps that I'm using get get relegated to the            |
| 01:00:27   | lower half of the left external monitor.                                                              |
| 01:00:32   | And the iMac is clear, you know, the iMac screen is clear.                                            |
| 01:00:34   | And that's where I open up Microsoft Word and Excel spreadsheets.                                     |
| 01:00:39   | And you know, that's where I actually do work, but I've got all this reference stuff.                 |
| 01:00:43   | And it's working out really great for me with this new system.                                        |
| 01:00:47   | And one of the the triggers to this was just, you know, the realisation that, well, I'm               |
| 01:00:51   | doing a bunch of work on web based services.                                                          |
| 01:00:55   | So why don't I just use [[Safari]] to run these and then I can use these custom URLs to really            |
| 01:01:00   | open it up exactly the way I want.                                                                    |
| 01:01:02   | I don't think I could automate opening applications for base camp to get specific projects open       |
| 01:01:09   | the way I can with the way I'm doing it, you know, on the web.                                        |
| 01:01:13   | So it's just really handy.                                                                            |
| 01:01:15   | And it sounds dumb.                                                                                   |
| 01:01:16   | It took me, you know, 15 minutes to set this up.                                                      |
| 01:01:19   | But every time I sit down now and push the button on my [[Stream Deck]] and all the decks                 |
| 01:01:24   | get cleared and the right projects get set up, it feels pretty good.                                  |
| 01:01:28   | I recently got a [[Stream Deck]] as well.                                                                 |
| 01:01:30   | I only got the 16 button one to start with.                                                           |
| 01:01:33   | And I have a feeling that is going to become my laptop [[Stream Deck]] and I'm going to be                |
| 01:01:37   | getting 32 button one from my Mac, but I have to say.                                                 |
| 01:01:42   | My proudest [[Stream Deck]] button right now, though, is toggling the Christmas tree lights               |
| 01:01:47   | on and off because then I can press the button at night when I'm going to bed.                        |
| 01:01:51   | And it will turn the Christmas tree lights off as I leave the room.                                   |
| 01:01:54   | And I really like that.                                                                               |
| 01:01:55   | So is that a web hook that you're hitting?                                                            |
| 01:01:57   | So there is actually a huge plug in for [[Stream Deck]] that you can install and you can have             |
| 01:02:03   | toggle buttons on the [[Stream Deck]] as well.                                                            |
| 01:02:06   | And so when it's on, then it shows up as one colour, mine is set to green for on and red               |
| 01:02:13   | for off because those are also Christmassy colours.                                                     |
| 01:02:16   | And yeah, it just toggles.                                                                            |
| 01:02:18   | So also, if somebody else in my apartment gets up and turns off the Christmas tree at                 |
| 01:02:22   | some point, then I can just press a button on my [[Stream Deck]] and turn it back on.                     |
| 01:02:25   | Yeah, it seems kind of, I can just see you sitting there with him, turn it off.                       |
| 01:02:31   | And then you just reach in over and turn it back on.                                                  |
| 01:02:34   | Well, I mean, the thing is, so he gets up and he presses the buttons on the smart switches            |
| 01:02:41   | that we have to turn them off.                                                                        |
| 01:02:44   | And so he's standing next to the Christmas tree and he's turned it off.                               |
| 01:02:46   | And then I press the button on my [[Stream Deck]] and turn it back on.                                    |
| 01:02:48   | Yeah, exactly.                                                                                        |
| 01:02:49   | I love that.                                                                                          |
| 01:02:51   | I may be somewhat evil, but I'm doing it to spread the Christmas cheer.                               |
| 01:02:55   | Yeah, I'm doing like, I've got the top row.                                                           |
| 01:02:57   | I bought the 32 button one, I figured in for a penny and for a pound.                                 |
| 01:03:02   | And the top row is all context setting, where it gets me to legal setup, the podcasting,              |
| 01:03:10   | the screencast stuff.                                                                                 |
| 01:03:12   | So it's just, it's really nice.                                                                       |
| 01:03:13   | And then the far right one is the sleep when I have the little Death Star icon.                       |
| 01:03:18   | I press that button.                                                                                  |
| 01:03:19   | And there's a keyboard shortcut on my keyboard.                                                       |
| 01:03:21   | I can press to put it to sleep, but this is a different sleep because it closes apps.                 |
| 01:03:25   | It runs a true [[Keyboard Maestro]] script that does things as opposed to just shutting the               |
| 01:03:30   | screen down.                                                                                          |
| 01:03:31   | And then I've got web, you know, like podcast production and web stuff built in to some               |
| 01:03:37   | of the buttons.                                                                                       |
| 01:03:38   | I've got music buttons.                                                                               |
| 01:03:40   | I've got one where I can press and get into the blog writing setup.                                   |
| 01:03:44   | It's just, I'm really having fun with it.                                                             |
| 01:03:46   | I still have seven or eight that I have not filled yet.                                               |
| 01:03:49   | And that's all potential for me.                                                                      |
| 01:03:51   | And I'm going to have to look into this hue, hue integration, I didn't realise that existed.          |
| 01:03:55   | Thus far I've been putting all my buttons through [[Keyboard Maestro]].                                   |
| 01:03:59   | I have actually been doing something slightly different.                                              |
| 01:04:02   | I've been experimenting with anything but the [[Keyboard Maestro]] integration.                           |
| 01:04:06   | Cause I know you've been focusing on the [[Keyboard Maestro]] integration and I am sensing that           |
| 01:04:09   | we may have a [[Stream Deck]] show in our future of how to automate your Mac with your stream             |
| 01:04:14   | deck.                                                                                                 |
| 01:04:15   | Maybe.                                                                                                |
| 01:04:16   | Maybe.                                                                                                |
| 01:04:17   | These things are great fun and they're a lot easier to program than iBeacon.                          |
| 01:04:19   | So unfortunately for the iBeacon, but fortunately for the [[Stream Deck]], I mean, it really is,          |
| 01:04:24   | I guess in like iBeacons, it's just another trigger, you know, it's a button you can                  |
| 01:04:29   | press and you can, because it's got [[Keyboard Maestro]] integration and because keyboard                 |
| 01:04:34   | maestro can literally do anything.                                                                    |
| 01:04:37   | You can make anything you do on your Mac.                                                             |
| 01:04:39   | You can do it.                                                                                        |
| 01:04:40   | I mean, you could press a button and it could open a new word processing document and paste           |
| 01:04:45   | text for you.                                                                                         |
| 01:04:46   | I mean, whatever it is that you want to do, you could do through the [[Stream Deck]] and granted,         |
| 01:04:52   | I guess the big qualifier and all this because I'm working on the video on that on the update         |
| 01:04:56   | for the field guide right now is like, do you need this?                                              |
| 01:04:59   | I don't think anybody really needs it because like using the hyper key, the cap slot key,             |
| 01:05:05   | you can get a lot of things like I've got the number pad on my keyboard and that's a                  |
| 01:05:09   | whole set of numbers of keys I can use to trigger automations.                                        |
| 01:05:14   | But and I'm somebody who doesn't like a lot of excess stuff on my desk, but I just find               |
| 01:05:20   | this thing really delightful to use.                                                                  |
| 01:05:22   | Yes.                                                                                                  |
| 01:05:23   | So really, like I said, when I'm sitting down to start work, it's got a little an LED screen          |
| 01:05:30   | behind these buttons, so you can use custom icons.                                                    |
| 01:05:33   | I got those a bunch of Star Wars icons I use for some of them and so you can set them up              |
| 01:05:39   | just the way you want.                                                                                |
| 01:05:40   | Like I've got one that's just called do do and it's got a little Yoda head on it for                  |
| 01:05:45   | that famous Yoda quote, do or do not, there's no try.                                                 |
| 01:05:49   | But like when I need to get the most important things on my day done and it then it parses            |
| 01:05:54   | out OmniFocus to some specific focuses, it gives me some apps to get the work done.                   |
| 01:05:59   | I press the do button and it's just like, OK, I'm going to do things now.                             |
| 01:06:03   | And I don't know, I find it kind of fun to have.                                                      |
| 01:06:08   | And for some of the podcasting stuff is really great, too.                                            |
| 01:06:11   | I'm going to be doing, I guess I can talk about it here.                                              |
| 01:06:14   | I haven't announced it yet, but I'm going to be doing free zoom conferences for some                  |
| 01:06:19   | of my field guide customers.                                                                          |
| 01:06:20   | At some point, I'm kind of getting that set up.                                                       |
| 01:06:22   | And I think the [[Stream Deck]] is actually made for that.                                                |
| 01:06:26   | So I'm going to get it set up with the buttons configured for streaming and some of the stuff         |
| 01:06:34   | as well.                                                                                              |
| 01:06:35   | But I agree.                                                                                          |
| 01:06:36   | I think if you're looking for something on your holiday list, there's still time for                  |
| 01:06:41   | that when the show publishes and it'd be too late.                                                    |
| 01:06:44   | But you want to buy yourself something fun in the new year, [[Stream Deck]] may be on your                |
| 01:06:49   | list.                                                                                                 |
| 01:06:50   | Yes.                                                                                                  |
| 01:06:51   | I got mine on [[Amazon]].                                                                                 |
| 01:06:53   | It said that it was, so it was one of the [[Amazon]] warehouse deals.                                     |
| 01:06:58   | And it said it had some minor scratches on the front and or rear side and it's mint condition.        |
| 01:07:04   | I'm really happy with it and it works perfectly.                                                      |
| 01:07:07   | It's a really lovely little device and it's nice, it's fun to sit down and literally press            |
| 01:07:12   | the automators button and have it open the right apps that I need to record an automators             |
| 01:07:16   | episode.                                                                                              |
| 01:07:17   | But if it's plugged into my Mac mini, which is in the other room, then the automators button          |
| 01:07:22   | opens just quick for our show notes.                                                                  |
| 01:07:25   | I can do my preparation and opens the right web pages for me too.                                     |
| 01:07:29   | It's really nice.                                                                                     |
| 01:07:30   | Some aspirational automation in my life right now is I'm just increasingly aware of my usage          |
| 01:07:38   | of air table.                                                                                         |
| 01:07:39   | Because I've got air table setups for the law practice and for MacSparky and with the                |
| 01:07:47   | field guides, the people are helping me in the back end.                                              |
| 01:07:50   | The air table is where we keep each other updated as to who's working on what.                        |
| 01:07:56   | With my legal stuff, there's a bunch of corporate compliance stuff I do and I've got an air table     |
| 01:08:02   | doing that.                                                                                           |
| 01:08:03   | And I'm starting to realise I haven't hit the number of records yet that require me to                |
| 01:08:08   | pay, but I'm starting to really look at what do I get if I upgrade to a paid account and              |
| 01:08:14   | would I be able to create some better automation with it if I did so?                                 |
| 01:08:19   | Could I get some sort of notification when a client's secretary of state filing deadline              |
| 01:08:25   | hits or something like that?                                                                          |
| 01:08:28   | I haven't automated air table as much as I'd like to, but I'm looking very hard at you                |
| 01:08:34   | air table and how you can help me even more.                                                          |
| 01:08:38   | I have found with air table because, for example, I share a base with you for Automators and          |
| 01:08:42   | I share a base with Scotty, my co-host over at Nested Folders.                                        |
| 01:08:46   | But if you share even one base, I think they're called, in air table with somebody else in            |
| 01:08:56   | that group of bases, then you have to pay for all of those people.                                    |
| 01:09:02   | So for example, say you have three different bases, but in total that share between six               |
| 01:09:06   | different people, you would have to pay for seven people every month, but air table will              |
| 01:09:10   | let you create as many groups of work spaces.                                                         |
| 01:09:13   | That's what it's called, it's a workspace.                                                            |
| 01:09:16   | And so I have a Nested Folders workspace and I have an Automators workspace.                          |
| 01:09:19   | And those are just in this case, the one base in each that's shared with you, but I have              |
| 01:09:26   | all of my bases in another workspace, currently called my bases.                                      |
| 01:09:31   | And that's the only one that I pay for the premium on because I was running into that                 |
| 01:09:34   | record limitation and it was getting very frustrating to try and juggle things around.                |
| 01:09:38   | Can I split this up into different bases and does that work like that and things like that?           |
| 01:09:44   | And the answer was no, it doesn't just pay the money for it because it's well worth it                |
| 01:09:48   | for me.                                                                                               |
| 01:09:49   | I've got a lot of things going on in there right now.                                                 |
| 01:09:52   | I've got all of the stuff that I used to manage my screencast online work in there and that           |
| 01:09:56   | is automated with Podio and air table and some Zapier and some shortcuts and some [[Drafts]]             |
| 01:10:03   | all mixed in there.                                                                                   |
| 01:10:04   | And I'm really loving the fact that now I've got it set up, I can just do everything with             |
| 01:10:07   | a few taps.                                                                                           |
| 01:10:08   | It doesn't look like you get like a lot of automations stuff with the paid account.                   |
| 01:10:13   | And really you'd have to do the $20 a month paid account because the $10 just gives you               |
| 01:10:19   | more records and I'd be looking for like the styling options and the calendar features                |
| 01:10:23   | and some of the stuff they've got for the paid account.                                               |
| 01:10:26   | But you're right.                                                                                     |
| 01:10:27   | And that's something I just realised in researching this a few days ago is that you don't just        |
| 01:10:32   | pay and get it across your account.                                                                   |
| 01:10:34   | It's each workspace you pay.                                                                          |
| 01:10:36   | You're like, I have a workspace for personal, I have one for MacSparky and one for legal.            |
| 01:10:41   | If I wanted to upgrade all of those, just for me, that would be $60 a month.                          |
| 01:10:47   | But because I have two other people accessing some of these bases, I would guess I'd be               |
| 01:10:52   | paying for all three of us each month.                                                                |
| 01:10:56   | So it could get quite expensive pretty fast, but I'm really interested because I am using             |
| 01:11:02   | the tool a lot and it is a great collaborative spreadsheet slash database.                            |
| 01:11:09   | Yes.                                                                                                  |
| 01:11:10   | I'm really enjoying it and I've got some ideas of some things that I'd like to do next                |
| 01:11:14   | year with my [[Airtable]] setup, but I am currently in the end of year crunch.                            |
| 01:11:19   | So as much as I would like to sit down and do nothing more than spend a couple of hours               |
| 01:11:23   | playing with [[Airtable]], I am not letting myself do that because there is other work that needs         |
| 01:11:28   | to be done first.                                                                                     |
| 01:11:30   | For some reason, I got recently multiple emails from listeners and readers saying that I need         |
| 01:11:36   | to be using [[Notion]] for a bunch of this stuff.                                                         |
| 01:11:39   | I have tried [[Notion]] and I love it, but I really don't like that it has no automation options.         |
| 01:11:45   | It doesn't have Zapier integration, they don't have an API and unfortunately their apps don't         |
| 01:11:51   | have offline support, which for me is a deal breaker, but I love the idea of [[Notion]].                  |
| 01:11:55   | So when they get an API and some automation integrations, then I'm going to go back and               |
| 01:11:59   | look at it again.                                                                                     |
| 01:12:00   | Yeah.                                                                                                 |
| 01:12:01   | I kind of feel the same way.                                                                          |
| 01:12:02   | I'm spending a lot of money between Basecamp and [[Airtable]] and some of these other services            |
| 01:12:07   | I'm using.                                                                                            |
| 01:12:08   | If this could combine everything, that would be great, but it just seems to me like at                |
| 01:12:12   | this point, my testing of it was a jack of all trades and a master of none.                           |
| 01:12:18   | One of the things that's very good with Basecamp is when I send an email on a client-related          |
| 01:12:24   | matter, each matter has a custom email that copies the email in essence into the Basecamp             |
| 01:12:30   | for it.                                                                                               |
| 01:12:31   | So all that's collected.                                                                              |
| 01:12:32   | There's no way to do that with [[Notion]] and there's just a whole bunch of stuff.                        |
| 01:12:37   | So I don't think I'm going to jump on board with that yet, but it is interesting that                 |
| 01:12:40   | I'm starting to look at all these web services and it's starting to turn into real money              |
| 01:12:45   | for me in terms of expense, but I'm also getting a lot of use out of them.                            |
| 01:12:50   | So I guess the thing I'm thinking of, I'm going to be using these, I need to even get                 |
| 01:12:55   | better at some of the automation between them.                                                        |
| 01:12:58   | Well, it's one of those things where I think we can both find some time next year to play             |
| 01:13:02   | with all this stuff even more.                                                                        |
| 01:13:04   | Yeah.                                                                                                 |
| 01:13:05   | Definitely, in 2020, I want to even go further down the cloud-based automation stuff.                 |
| 01:13:12   | I'm very good at making shortcuts and stuff on my Mac, but cloud-based stuff is stuff                 |
| 01:13:17   | I'm doing, but I haven't dove in all the way.                                                         |
| 01:13:21   | I think I need to get better at that next year.                                                       |
| 01:13:24   | Well, that's an automation goal that I can agree with.                                                |
| 01:13:27   | There you go.                                                                                         |
| 01:13:28   | All right.                                                                                            |
| 01:13:29   | Well, we are the automators.                                                                          |
| 01:13:30   | You can find us over relay.fm/automators, and we got the forum.                                |
| 01:13:37   | Rose and I are always publishing stuff on the websites.                                               |
| 01:13:40   | We'd love to hear from you.                                                                           |
| 01:13:41   | What are you doing with iBeacon?                                                                      |
| 01:13:43   | Let us know in the forum.                                                                             |
| 01:13:44   | We need to do a follow-up show pretty soon anyway, Rose.                                              |
| 01:13:46   | It's been a long time since we've done one of those.                                                  |
| 01:13:49   | So let us know.                                                                                       |
| 01:13:50   | We'd love to hear it, especially hardware.                                                            |
| 01:13:52   | I feel like we didn't give the listeners enough options today on hardware, but we're working          |
| 01:13:56   | on it, but we don't want to recommend something unless we're really happy with it.                    |
| 01:14:00   | There's just not that many yet on the iBeacon front either way.                                       |
| 01:14:06   | Thank you to our sponsors for today's episode, ExpressVPN, FreshBooks, and Kensington.                |
| 01:14:10   | And we'll see you in a few weeks.                                                                     |
| 01:14:12   | Goodbye, everybody.                                                                                   |
