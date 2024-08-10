---
status: "incomplete"
fc-date:
  year: 2021
  month: 08
  day: 27
fc-category: "podcast"
podcast: "Automators"
published: 2021-08-27
duration: 6629
formattedduration: "01:50:29"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/83"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators083.mp3"
episode: 83
title: "83: Home Automation 2.0"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode of Automators. David and Rosemary dive into Rosemary's updates to her home automation, smart locks, Home Assistant, and even a cute little robot mop...

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 083 Discussion](https://talk.automators.fm/t/83-home-automation-2-0/12158)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[Technology Untangled (sponsor)|Technology Untangled]] - Join Michael Bird as he untangles innovation through a series of interviews, stories, and analyses with some of the industry’s brightest brains.
- [[Privacy (Sponsor)|Privacy]] - Smarter payments.

# Show Notes
- [SONOFF Micro USB Smart Adaptor - remotely control USB Devices](https://sonoff.tech/product/diy-smart-switch/micro/)
- [Smart Wall Switch H1 (No Neutral)](https://www.aqara.com/en/product/smart-wall-switch-h1-no-neutral) There is also a version of this which does need a neutral wire, _those_ can relay Zigbee signal, helpful if you need to extend it from the hub!
- [Caseta Wireless Smart Switches | Lutron](https://www.lutron.com/en-US/Products/Pages/SingleRoomControls/CasetaWireless/Overview.aspx)
- [Mi Light Sensor (review) – HomeKit News and Reviews](https://homekitnews.com/2020/01/27/mi-light-sensor-review/)
- [SwitchBot Solar Panel – SwitchBot Global](https://www.switch-bot.com/products/switchbot-solar-panel)
- [TRÅDFRI Shortcut button, white - IKEA](https://www.ikea.com/gb/en/p/tradfri-shortcut-button-white-40467765/)
- [Flic 2 | The Smart Button for Lights, Music, Smart Home and More](https://flic.io/)
- [SYMFONISK - A Collaboration with Sonos Speakers - IKEA](https://www.ikea.com/gb/en/new/symfonisk-collection-pub47e570c0)
- [SYMFONISK Picture frame with WiFi speaker, black - IKEA](https://www.ikea.com/gb/en/p/symfonisk-picture-frame-with-wifi-speaker-black-20487316/)
- [eufy Security Video Doorbell 2K (Battery-Powered)](https://us.eufylife.com/products/e82101w3?ref=navimenu)
- [Smartmi Air Purifier P1 – smartmiglobal](https://www.smartmiglobal.com/pages/smartmi-air-purifier-p1)
- [Air Purifier H06 — Himox.com/home](https://www.himox.com/products/air-purifier-h06)
- [‎Tuya Smart on the App Store](https://apps.apple.com/us/app/tuyasmart/id1034649547)
- [How to Use Tuya Homebridge Plugin](https://developer.tuya.com/en/docs/iot/Tuya_Homebridge_Plugin?id=Kamcldj76lhzt)
- [iRobot Braava® 390t](https://shop.irobot.co.uk/braava-moppingirobot-braava-390t-robot-mop/B390045.html)
- [Amazon.com: iRobot Roomba i7+ (7550) Robot Vacuum with Automatic Dirt Disposal-Empties Itself, Wi-Fi Connected, Smart Mapping, Works with Alexa, Ideal for Pet Hair, Carpets, Hard Floors, Black : Everything Else](https://www.amazon.com/gp/product/B07GNPDMRP?tag=macs03-20)
- [Home Assistant](https://www.home-assistant.io/)
- [Bob mini dishwasher](https://daan.tech/en/) 
- [Use a TP-Link HS110 to monitor my washing machine - Configuration - Home Assistant Community](https://community.home-assistant.io/t/use-a-tp-link-hs110-to-monitor-my-washing-machine/5090)
- [Conexis L1 | Smart Locks | YaleHome](https://yalehome.co.uk/smart-locks/conexis-l1/)
- [Keyless Connected | Smart Locks | YaleHome](https://yalehome.co.uk/smart-locks/keyless-connected/)
- [Smart Locks | Kwikset](https://www.kwikset.com/smart-locks)

# Transcription
  
| Time Index | Transcription                                                                                     |
| :--------- | :------------------------------------------------------------------------------------------------ |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about automating technology           |
| 00:07      | to do your work for you, or in today's case, your home.                                           |
| 00:10      | I'm Rosemary Orchard, and I'm joined as always by David Sparks.                                      |
| 00:12      | Hey, David, how are you today?                                                                    |
| 00:14      | Rose, I missed you.                                                                               |
| 00:15      | I just missed you.                                                                                |
| 00:18      | I mean, it's not been that long since we've recorded, but, you know, we had, we recorded          |
| 00:22      | the last episode earlier than usual.                                                              |
| 00:24      | Like three weeks ago.                                                                             |
| 00:26      | I know, I know.                                                                                   |
| 00:27      | I haven't been able to talk to my nerd buddy.                                                     |
| 00:28      | So anyway.                                                                                        |
| 00:29      | There's nothing stopping you talking to me.                                                       |
| 00:31      | I know.                                                                                           |
| 00:32      | I know.                                                                                           |
| 00:33      | But we've both been busy, but we're back in the microphone podcast studio here to talk            |
| 00:37      | about automators today.                                                                           |
| 00:38      | And I'm real excited today.                                                                       |
| 00:41      | Rose has been working on her home kit automation.                                                 |
| 00:45      | And we talked about a little bit about six months ago, I think.                                   |
| 00:49      | And I knew at the time that Rose, you know, living alone in her own house was going to            |
| 00:56      | just bring this next level and it was just a question of time.                                    |
| 01:01      | And she keeps sending me, dear listeners, I get these pictures from Rose of like just             |
| 01:06      | random home kit hardware.                                                                         |
| 01:09      | And there's some of it's not, but I get these pictures of cool automation hardware and she        |
| 01:15      | doesn't even put any description and she just teases me.                                          |
| 01:18      | So today we're going to nail Rose down and get the details out of her about, well, that           |
| 01:24      | was, that sounds weird.                                                                           |
| 01:26      | We're going to get Rose seated at her chair nicely with a cup of British tea.                     |
| 01:31      | Right.                                                                                            |
| 01:32      | Do you drink tea?                                                                                 |
| 01:33      | It's just water today because I got braces recently.                                              |
| 01:36      | I'm lisping a little bit for people who are listening closely.                                    |
| 01:38      | And so while I'm wearing them, I'm not allowed to drink anything other than water, which I'm      |
| 01:44      | fine with.                                                                                        |
| 01:45      | Do you drink British tea?                                                                         |
| 01:46      | No.                                                                                               |
| 01:47      | I don't do hot drinks.                                                                            |
| 01:48      | I like green tea.                                                                                 |
| 01:50      | I don't understand those dark British teas.                                                       |
| 01:52      | I just, you don't have to email me about it, but I don't understand them.                         |
| 01:56      | Anyway, so we got Rose here.                                                                      |
| 01:58      | We're going to talk about home kit today and go through all the cool stuff she's done             |
| 02:02      | at her house.                                                                                     |
| 02:03      | I've got a few updates myself.                                                                    |
| 02:05      | Put your wallet in a locked place because we're going to be talking about a lot of cool           |
| 02:09      | home kits stuff you can buy.                                                                      |
| 02:11      | And it's probably, you know, not a good day to listen to the automators if you're worried         |
| 02:15      | about buying something new.                                                                       |
| 02:16      | Yeah.                                                                                             |
| 02:17      | And that said, I will point out that a lot of the individual components are very affordable.      |
| 02:23      | It's just if you go nuts and do your entire house.                                                |
| 02:25      | Like one of the things, which I actually didn't put in the outline, but I feel I should mention,  |
| 02:29      | is a Sonoff Mini USB smart plug.                                                                  |
| 02:32      | And why say USB smart plug?                                                                       |
| 02:34      | I mean, that you plug a USB into it and then it's got USB out on the other side.                  |
| 02:38      | These are about 10 bucks.                                                                         |
| 02:40      | And they, you know, they are just a Wi-Fi smart device so that you can toggle a USB thing         |
| 02:45      | on and off.                                                                                       |
| 02:46      | So, you know, individually, one of those is fine.                                                 |
| 02:49      | You put four studio lights on your desk, all of which are USB powered, and suddenly you're        |
| 02:52      | looking at $40.                                                                                   |
| 02:54      | That's how it escalates.                                                                          |
| 02:55      | What?                                                                                             |
| 02:56      | This is cool.                                                                                     |
| 02:57      | I've never heard of this before.                                                                  |
| 02:58      | So like anything that's USB powered, like your desktop rocket launcher, something like            |
| 03:03      | that, you can put into automation that will that run on home kit or what's the automation?        |
| 03:09      | So this doesn't run on home kit.                                                                  |
| 03:11      | And that's something I have been struggling with a little bit with some of the things because     |
| 03:16      | you know, there's a lot of great home automation stuff out there that's not home kit compatible.  |
| 03:22      | And there's good reasons for this.                                                                |
| 03:23      | You know, there are extra hoops to jump through for Apple and so on.                              |
| 03:27      | But this does appear in [[Home Assistant]].                                                           |
| 03:30      | So I've only got one of these so far because I am playing with it still and trying to make        |
| 03:34      | sure that it works as I wanted to, but it appears that I can connect it to [[Home Assistant]]         |
| 03:39      | and then through [[Home Assistant]], I can actually share it back to Home Kit because [[Home Assistant]]  |
| 03:44      | can work the same way Home Bridge does.                                                           |
| 03:46      | It doesn't have to, but it can.                                                                   |
| 03:48      | Explain what [[Home Assistant]] is or I guess we're going to get to that later, it's already          |
| 03:51      | in.                                                                                               |
| 03:52      | We're going to get to that later.                                                                 |
| 03:53      | So let's leave that as a teaser, shall we?                                                        |
| 03:55      | Yeah.                                                                                             |
| 03:56      | But the idea though that you can automate a USB powered plug, I actually now my head              |
| 04:00      | is spinning.                                                                                      |
| 04:01      | I didn't know such a product existed and I'm going to have to think about that because            |
| 04:08      | I feel like there is room in my life for such a device.                                           |
| 04:12      | We're going to link in the show notes and we'll just set right now that I am the first            |
| 04:16      | person to have to spend money as a result of this show.                                           |
| 04:19      | Bingo.                                                                                            |
| 04:20      | We win or maybe lose.                                                                             |
| 04:23      | I'm not entirely certain.                                                                         |
| 04:24      | It doesn't really matter, but yes, it's one of those things where I've been branching             |
| 04:29      | out and I'm experimenting with various things and that's one of my very recent purchases          |
| 04:35      | that I'm still toying with, but it seems pretty cool because otherwise you have to control        |
| 04:41      | all of the things that the USB is plugged into simultaneously with a smart outlet, whereas        |
| 04:46      | this would let me just have one or two things controlled automatically and then everything        |
| 04:51      | else controlled manually.                                                                         |
| 04:52      | All right.                                                                                        |
| 04:53      | When we last spoke on this journey, you were thinking about light switches, but the problem       |
| 05:00      | is regulations in the UK and make it harder than it is in California at least.                    |
| 05:06      | I can just open the wall and put my own switch in.                                                |
| 05:08      | It's not that difficult, but over there.                                                          |
| 05:11      | I can do that over here unless it's in a kitchen or a bathroom because water, electricity,        |
| 05:17      | electrifying yourself, not good, please don't die.                                                |
| 05:21      | You're not allowed to do that.                                                                    |
| 05:23      | The other thing that we have is vast majority of our houses don't have neutral wires running      |
| 05:28      | to the light switches.                                                                            |
| 05:34      | We've got neutral running to the light.                                                           |
| 05:37      | It's just not running to the light switch.                                                        |
| 05:39      | That's weird.                                                                                     |
| 05:40      | I mean, that's how things work over here.                                                         |
| 05:43      | It's pretty good.                                                                                 |
| 05:44      | Our plugs are some of the safest in the world.                                                    |
| 05:46      | They're also the most painful to step on, but that's another problem for another time.            |
| 05:51      | I did some digging around and I tried light wave.                                                 |
| 05:55      | For people who aren't familiar with light waves, they're sold on the Apple store in               |
| 05:58      | the UK and Europe, and you can buy them directly from Amazon or light wave, whoever.              |
| 06:05      | They are light switches and also they do plug sockets that you can just put on the wall.          |
| 06:12      | They are smart ones.                                                                              |
| 06:14      | You press the up and it increases the light and you press it down and it decreases the            |
| 06:18      | amount of light.                                                                                  |
| 06:19      | If you just press it and it's off, it turns it on.                                                |
| 06:22      | You may be seeing the problem here already, is the dimming switch.                                |
| 06:26      | The light in my kitchen is not dimmable.                                                          |
| 06:28      | It's like fluorescent or something, right, just it's on and it's off.                             |
| 06:34      | It's not fluorescent, it's LED, but it's an on off LED rather than a dimmable LED.                |
| 06:39      | Fortunately, I made good friends with a local electrician who has little bits of downtime         |
| 06:45      | between jobs and I'm very willing to be incredibly flexible as in he can just turn up and do      |
| 06:49      | work if I need something from him.                                                                |
| 06:53      | He came around and spent a couple of minutes messing with that and he said, this is going         |
| 06:57      | to drive you insane because the light was flickering.                                             |
| 07:01      | He uninstalled it for me and sent it back and I sent it back to Amazon and I did some             |
| 07:08      | digging around and I found out Aqara, that's A-Q-A-R-A, have light switches which can be          |
| 07:14      | compatible with European and UK sockets and they are on off switches.                             |
| 07:22      | They're like the bouncing switches, if that makes sense, so you press it and the switch           |
| 07:27      | immediately pops back up and that can turn on off automatically.                                  |
| 07:32      | So I got one of those, waited for it to come via Aliexpress because that was the cheapest         |
| 07:37      | way to buy it.                                                                                    |
| 07:38      | It came pretty quickly just over a week later, the electrician came around, connected it,         |
| 07:43      | it took him about three minutes.                                                                  |
| 07:45      | I spent more time pairing it because I ran into a slight Aqara problem, David.                    |
| 07:50      | The original hub only lets you put 32 devices on it.                                              |
| 07:54      | Oh, and you were over 32?                                                                         |
| 07:57      | Way over 32.                                                                                      |
| 07:59      | Okay, so would you get another hub or would you do?                                               |
| 08:01      | So there is a couple of different ways around this.                                               |
| 08:04      | I did actually get the new hub because I have the M1S hub.                                        |
| 08:08      | There's also the camera, the G2H camera that you can pair 64 devices with.                        |
| 08:13      | Well, I already have cameras so I didn't really want or need a camera but they now have the       |
| 08:18      | M2 hub and actually Aqara on the Apple Store in the UK and much of Europe, not all of Europe.     |
| 08:25      | For some reason, for example, not available in Portugal, not sure why, but they are on            |
| 08:30      | the Spanish Apple Store.                                                                          |
| 08:32      | But they're also now much more widely available on Amazon, which eliminates the problem of        |
| 08:36      | if I order an M2 hub from China, is it going to be a Chinese hub or a European hub?               |
| 08:41      | Because they connect to different servers.                                                        |
| 08:43      | So I ordered the M2 hub and that arrived and I'm slowly migrating all of my devices               |
| 08:48      | over to that hub, which is much better because it's also micro-USB powered.                       |
| 08:57      | So in the meantime, I had a $7 Zigbee stick, which I plugged into [[Home Assistant]] and I'm            |
| 09:04      | using [[Home Assistant]] kind of like a Zigbee hub, like you can use it the same as a Hue hub           |
| 09:09      | or an IKEA hub and so I set that up and gave that a whirl and I was impressed.                    |
| 09:15      | It works incredibly quickly.                                                                      |
| 09:17      | I walk into my kitchen, my Aqara motion sensor, which is connected to the Aqara hub, detects      |
| 09:23      | motion and the light turns on.                                                                    |
| 09:25      | So that's all kinds of magic running incredibly quickly because the SwitchBot solution I had,     |
| 09:31      | it worked really well, it was just slow.                                                          |
| 09:34      | You walk into the kitchen and you'd have a glass that was half full of water before the           |
| 09:39      | light turned on and that just wasn't good because then you end up turning the light on yourself.  |
| 09:45      | If you're going to do home automation, it's really about having actual automation that            |
| 09:49      | makes magic because then you walk into a room and you don't need to think where's the light       |
| 09:53      | switch or I should turn on the light.                                                             |
| 09:55      | The light's already on by the time your thought process is going, it's dark.                      |
| 10:00      | So I've solved that problem and I'm very happy with it.                                           |
| 10:03      | And just for the listeners in the US, Aqara is fully available in the US Amazon store.            |
| 10:09      | M2 hub is $50.                                                                                    |
| 10:11      | A lot of their hardware is in the $20 price range.                                                |
| 10:15      | An indoor air quality monitor is only $45.                                                        |
| 10:18      | I've never seen one that cheap.                                                                   |
| 10:21      | No, their stuff is incredibly cheap.                                                              |
| 10:24      | The only thing I would say is don't buy the sensors from Amazon or Apple because they             |
| 10:30      | are so expensive.                                                                                 |
| 10:31      | They are about half of the price on Aliexpress and the sensors are exactly the same wherever      |
| 10:36      | you buy them from.                                                                                |
| 10:38      | And you can get them delivered to you in 10 days and Aqara deal with all of the, Aqara,           |
| 10:42      | sorry, Aliexpress, their shipping partners deal with all of the customs and import and            |
| 10:47      | everything.                                                                                       |
| 10:48      | So you don't need to worry about it.                                                              |
| 10:49      | It adds on the VAT or TVA or whatever it is at the checkout when you pay for it.                  |
| 10:55      | And so it just gets sent to you and delivered incredibly quickly.                                 |
| 10:59      | And the other thing I would say, like Rose has a friendly neighbourhood electrician,               |
| 11:05      | if you are afraid to get into this home kit stuff because you don't want to be playing            |
| 11:09      | with live wires or you're not allowed to where you live, but you're thinking, well, this          |
| 11:15      | would be way too expensive to do.                                                                 |
| 11:18      | It's been my experience because I have hired an electrician too for a couple of runs that         |
| 11:21      | were difficult or things that I just didn't want to get into.                                     |
| 11:24      | I am terrible at running a line through rafters.                                                  |
| 11:27      | You know, we have to get up and snake the line.                                                   |
| 11:30      | I just can never get that to work.                                                                |
| 11:32      | And so I'll hire somebody for that.                                                               |
| 11:33      | And most of these small time electrician guys who are not running huge outfits are familiar       |
| 11:41      | with this work and are increasingly doing it.                                                     |
| 11:44      | They know that they're working with consumers, not like big corporations, and they price          |
| 11:48      | it reasonably.                                                                                    |
| 11:49      | And I think if you just looked around, you'll be surprised that in wherever you live, there's     |
| 11:54      | probably somebody that can help you out install this stuff.                                       |
| 11:57      | Yeah.                                                                                             |
| 11:58      | Yeah.                                                                                             |
| 11:59      | The trick is to look on the neighbourhood groups, wherever they are, whatever apps are relevant,   |
| 12:04      | which has meant that I've had to use the e-book that is Facebook a couple of times because        |
| 12:09      | that's where the people go.                                                                       |
| 12:10      | So I'm glad I kept my Facebook account just for that so I can ask recommendations because         |
| 12:14      | I've got some great recommendations.                                                              |
| 12:15      | Yeah.                                                                                             |
| 12:16      | There's one in the US called Craigslist that I used and found somebody that was really            |
| 12:20      | qualified and did really great work and not too expensive.                                        |
| 12:26      | So you ended up with the Aqara switches now.                                                      |
| 12:28      | Have they populated your entire house yet or are they just?                                       |
| 12:31      | No.                                                                                               |
| 12:32      | No.                                                                                               |
| 12:33      | I've just stuck with the one because everywhere else, I bought covers for the light switches,     |
| 12:37      | which the Hue 4 button switch magnetises into.                                                    |
| 12:42      | And I'm pleased with that solution.                                                               |
| 12:44      | That works.                                                                                       |
| 12:46      | And I can do that everywhere else.                                                                |
| 12:47      | The only thing is in the bathroom, I don't yet have a smart lighting solution, but at             |
| 12:51      | the same time, I've looked at it several times and my conclusion every time so far has been       |
| 12:55      | I really don't think it's worth the bother because it's a pull switch.                            |
| 13:02      | Pull switches are very hard to automate.                                                          |
| 13:03      | I looked at all sorts of crazy ideas, but basically the only solution to automate my              |
| 13:08      | bathroom lighting is to take the bathroom light out and connect something like a Shelly           |
| 13:14      | one or something, which is like a little, basically it's a chip thing that you put the            |
| 13:20      | wires from the electricity into there and then you put them out from there into the               |
| 13:26      | light and then it can sit between.                                                                |
| 13:29      | And theoretically, that can also then work with the pull cord, but that's theoretical.            |
| 13:34      | I'd need to do some messing around.                                                               |
| 13:37      | The electrician I spoke to said, honestly, the people that he knows who are also playing          |
| 13:42      | with the smart home stuff, he said, the bathroom, you just don't bother with it.                  |
| 13:45      | It's not worth it.                                                                                |
| 13:46      | There's this image of you like with a little string tied to the tap and then like a motor         |
| 13:52      | on it and you press a button and it goes and it's like rolls up the string and then pulls         |
| 13:58      | this way.                                                                                         |
| 13:59      | I don't know.                                                                                     |
| 14:00      | I feel like that's like not impossible for Rosemary Orchard to have something like that.          |
| 14:04      | I mean, actually I looked at the SwitchBot because I thought the SwitchBot can do, so             |
| 14:09      | the SwitchBot for people who don't know, it's a little robot that you stick on a surface          |
| 14:14      | and it's got an arm that can come out and press something, but it can also turn things            |
| 14:18      | off by pulling.                                                                                   |
| 14:21      | And I thought maybe if I set it up and so I threaded some like fishing line or floss              |
| 14:27      | or something through the cord that is on this light and had the SwitchBot pull rather than        |
| 14:39      | push, that could work.                                                                            |
| 14:42      | And then I decided that that really feels very janky and I did some basic experiments             |
| 14:48      | and I don't think it would pull with enough force to actually succeed.                            |
| 14:53      | Yeah.                                                                                             |
| 14:54      | The tension on a pole switch is actually pretty high.                                             |
| 14:56      | So all it would probably do is cause your SwitchBot to lift off the counter and then              |
| 15:00      | float back down.                                                                                  |
| 15:02      | Exactly.                                                                                          |
| 15:03      | Yeah.                                                                                             |
| 15:04      | Yeah.                                                                                             |
| 15:05      | Well, anyway, so wall switches, I'm glad you found a solution.                                    |
| 15:08      | And we talked about this and that power users years ago, but I discovered the Lutron Casetaa     |
| 15:13      | system and I have never looked back and it took me like a year to kind of get them where          |
| 15:19      | I wanted in the house.                                                                            |
| 15:20      | But at this point, all the lights in the house that I really want to control with automation,     |
| 15:25      | including the bathroom lights are on a Lutron Casetaa and it's amazing because it solves         |
| 15:30      | two problems.                                                                                     |
| 15:31      | Number one is it is rock solid.                                                                   |
| 15:34      | You push the button on your phone or whatever and the lights just go on a friend of mine,         |
| 15:39      | Bob Spivack, who was a guest on MPU at one point and like does this commercially, was              |
| 15:44      | telling me that they have their own bandwidth and I don't know what the whole story is behind     |
| 15:48      | that.                                                                                             |
| 15:49      | But whatever the radio signal for these Lutron Casetaas is a great.                              |
| 15:53      | Zigbee.                                                                                           |
| 15:54      | Yeah.                                                                                             |
| 15:55      | You have to get your own base unit forward, but you buy that with the first switch and            |
| 15:59      | then you're kind of in.                                                                           |
| 16:01      | And the other thing that's great about it is there is an up and a down and a dim switch           |
| 16:05      | on it.                                                                                            |
| 16:06      | And everyone in my family can still turn the lights off and on by just going to the wall          |
| 16:11      | switch and pressing it.                                                                           |
| 16:12      | And I think a minimum for all this home kit stuff is it has to still preserve the previous        |
| 16:18      | functionality.                                                                                    |
| 16:19      | Like if your automation means your switches don't work anymore, that might work if you            |
| 16:24      | live alone.                                                                                       |
| 16:25      | But if you've got any other humans in your house, that's going to be a problem.                   |
| 16:29      | So yeah.                                                                                          |
| 16:30      | Yeah.                                                                                             |
| 16:31      | These switches have been great.                                                                   |
| 16:32      | They are expensive.                                                                               |
| 16:33      | They were like $50 a switch when I bought them.                                                   |
| 16:35      | I don't know how much they are now.                                                               |
| 16:36      | I haven't bought one in a couple of years, but I was looking at the light in the closet           |
| 16:41      | as I was prepping for today's show saying, how come I have to throw a switch in here?             |
| 16:46      | Why?                                                                                              |
| 16:47      | Why isn't this automated?                                                                         |
| 16:48      | So maybe I'll be buying another one.                                                              |
| 16:49      | But it's just really, it's one of those home automation, like happy ending stories.               |
| 16:56      | You put home automation in your house and your significant other, your children want              |
| 17:01      | to scalp you, but not this time.                                                                  |
| 17:05      | It's, yeah, I'm pleased with my solution here and I'm glad yours is working as well.              |
| 17:10      | It certainly worked when I was there and I find the bounce switch is fairly logical as            |
| 17:13      | well.                                                                                             |
| 17:14      | You press it, you get light, you press it and the light turns off.                                |
| 17:18      | Nobody has had a problem with it yet so far and I've tried it on my parents and the electrician   |
| 17:23      | as well.                                                                                          |
| 17:25      | This episode of The Automators is brought to you by ExpressVPN.                                   |
| 17:30      | Go to expressvpn.com/automators for high speed, secure and anonymous VPN services           |
| 17:36      | and you'll get an extra three months for free.                                                    |
| 17:39      | Not a day goes by anymore without reading some article about people getting hacked on             |
| 17:43      | the internet.                                                                                     |
| 17:45      | Your internet privacy is important and it's under attack more now than ever.                      |
| 17:50      | We all take little risks every day when we go online, whether we think about it or not.           |
| 17:55      | Using the internet without ExpressVPN is a bit like driving without car insurance.                |
| 17:59      | It just feels like an unnecessary risk.                                                           |
| 18:02      | Every time you connect to an unencrypted network in cafes, hotels or airports, someone on the     |
| 18:07      | same network could gain access to your personal data like your passwords and financial details.   |
| 18:13      | And your data is valuable.                                                                        |
| 18:15      | Hackers make quite a bit of money selling an individual person's information.                     |
| 18:20      | ExpressVPN acts a bit like online insurance, it creates a secure encrypted tunnel between         |
| 18:25      | your device and the internet so nobody can steal your personal data.                              |
| 18:30      | And ExpressVPN is simple to use on all your devices.                                              |
| 18:33      | Just fire up the app and click one button to get protected.                                       |
| 18:37      | There are a lot of VPN services out there.                                                        |
| 18:40      | I feel safe with ExpressVPN.                                                                      |
| 18:42      | That's why I've been a customer for a long time.                                                  |
| 18:45      | I like that you can just click one button and turn it on.                                         |
| 18:48      | I like that they're always pushing the envelope on making the ExpressVPN data safe and not        |
| 18:54      | keeping the logs of you and protecting you.                                                       |
| 18:57      | That's their primary goal.                                                                        |
| 18:59      | Which isn't necessarily true about all VPN services.                                              |
| 19:02      | So secure your online data today by visiting expressvpn.com/automators.                     |
| 19:08      | That's E-X-P-R-E-S-S VPN.com/Automators and you can get an extra three months free.         |
| 19:15      | Once again, that's expressvpn.com/automators and our thanks to ExpressVPN for their support |
| 19:21      | of this show and all of relay FM.                                                                 |
| 19:24      | All right, what's next?                                                                           |
| 19:26      | Well, one of the things I realised was, so I was having lights turn on and off based              |
| 19:32      | on motion and time of day.                                                                        |
| 19:35      | However, there are times when that doesn't work.                                                  |
| 19:39      | For example, if it's cloudy and overcast, then I might need light earlier in the day              |
| 19:45      | than I would on a nice bright sunny day with no clouds in the sky.                                |
| 19:50      | And this is the UK.                                                                               |
| 19:51      | So we have a fair number of cloudy and overcast days and sometimes we have rain as well, which    |
| 19:56      | adds to it.                                                                                       |
| 19:57      | And so I looked into and I was using or trying to use the lux sensors in my Hue motion sensors.  |
| 20:05      | So lux is light level and it gets translated into a number.                                      |
| 20:09      | But the problem is the great place to put a motion sensor is in a corner where I can              |
| 20:13      | see a lot of a room.                                                                              |
| 20:15      | But the corners are where the light doesn't really go, which is just frustrating and annoying.    |
| 20:21      | And so I did some digging around and I found that me, that's MI, and they're part of the          |
| 20:27      | Xiaomi brand, make some light sensors, which are pretty small.                                    |
| 20:30      | They're like an inch or so in diameter.                                                           |
| 20:36      | And they pair directly with the Aqara hub and they appear in [[HomeKit]].                             |
| 20:39      | And so I got four of those and I've stuck one on the windowsill or the window frame               |
| 20:43      | in every room, and that was it.                                                                   |
| 20:47      | There's no extra work to it.                                                                      |
| 20:48      | I've just now got a really accurate light sensor in every single room, which is based             |
| 20:53      | on the light coming in through the window.                                                        |
| 20:55      | That was really smart putting it on the window.                                                   |
| 20:57      | Yeah.                                                                                             |
| 20:58      | Yeah.                                                                                             |
| 20:59      | That's the thing.                                                                                 |
| 21:00      | I put it on the window frame or in my bedroom, my office, it's on the windowsill.                 |
| 21:04      | Now, technically, I could probably have got away with two of these, one for each side             |
| 21:09      | of the house.                                                                                     |
| 21:10      | But I decided I was just going to stick one in each room because sometimes the way the            |
| 21:17      | light is shining or there's a van parked outside blocking the light in one room, whatever         |
| 21:22      | it is, these are $10 each or so.                                                                  |
| 21:27      | It wasn't a huge investment to get some extra light sensors.                                      |
| 21:31      | And then if I walk into a room and it's cloudy and overcast, it turns on the lights.              |
| 21:36      | And if it's within an hour of sunset, it will close the curtains as well.                         |
| 21:39      | There's two separate automations I've set up.                                                     |
| 21:42      | And otherwise, it'll just close curtains and blinds at sunset for me, which works really          |
| 21:46      | well.                                                                                             |
| 21:48      | But this just means I walk into a room and it says, hey, it's a bit dark.                         |
| 21:52      | I'm going to turn on some ambient lights for you.                                                 |
| 21:54      | Or hey, it's really dark.                                                                         |
| 21:55      | I'm going to turn on all the lights in this room for you.                                         |
| 21:59      | And now I don't really think about it.                                                            |
| 22:02      | I did have to spend quite a bit of time playing with the light levels and seeing, okay, so        |
| 22:07      | now's the kind of time where I would feel it's dark enough that I would want more light.          |
| 22:13      | So you know, turning on, but the other bonus is sticking the light sensor in the windowsill       |
| 22:17      | is my main lights, like the lights I use in my room to actually see, don't really reach           |
| 22:23      | the windowsill.                                                                                   |
| 22:25      | So they're not really affecting it, which is really good.                                         |
| 22:28      | I'm really pleased with that.                                                                     |
| 22:29      | That was not my intention when I set it up, but that is a bonus effect of how I've done           |
| 22:34      | things.                                                                                           |
| 22:35      | So if I understand it correctly, it's looking for both lack of light and motion in the room       |
| 22:42      | to trigger the light.                                                                             |
| 22:43      | No, so it's looking for motion.                                                                   |
| 22:45      | And then, and this is something I've set up using the Home Plus app.                              |
| 22:48      | You could do this with the Eve Energy app as well.                                                |
| 22:51      | I just like Home Plus is a really lovely app.                                                     |
| 22:55      | But basically when motion is detected, it does a check.                                           |
| 22:59      | There's a condition on it for the light level is below.                                           |
| 23:03      | And then it's whatever number is appropriate for that room and the lighting available in          |
| 23:06      | that room.                                                                                        |
| 23:07      | Because, for example, my kitchen has a choice of overhead light.                                  |
| 23:11      | That's it.                                                                                        |
| 23:12      | I mean, I do have some under the counter lights, which I recharge on a regular basis because      |
| 23:18      | they're micro USB, but I don't count on those to light my way.                                    |
| 23:25      | They're extra lighting rather than instead of lighting.                                           |
| 23:28      | And yeah, and so it will turn on lights that are appropriate, but it uses the light level         |
| 23:33      | as a condition.                                                                                   |
| 23:34      | If the light level is below this, then trigger this scene.                                        |
| 23:36      | If the light level is below that, then trigger that scene.                                        |
| 23:40      | And I'm saying scene because this way I can also have buttons in certain places to trigger        |
| 23:45      | that scene if I want to.                                                                          |
| 23:48      | If I'm sitting on the sofa and I'm not really moving much, then I can pull out my phone or        |
| 23:52      | tap my phone and trigger a scene for the lighting in the living room if I wanted to.              |
| 23:59      | And that's obviously something you wouldn't want to put in your bedroom because if you            |
| 24:02      | move around in bed, you're going to trigger your lights.                                          |
| 24:05      | Well, actually, I am.                                                                             |
| 24:06      | I do have that in my bedroom and I just have a dummy switch in Homebridge.                        |
| 24:14      | So Homebridge is a system.                                                                        |
| 24:16      | I'm running it on a Raspberry Pi.                                                                 |
| 24:18      | You could run it on an always on Mac or probably an always on Windows machine or Synology.        |
| 24:24      | If you've got a Synology that can run Docker containers, you can run this on Synology.            |
| 24:29      | But I have a dummy switch and a dummy switch is a fake switch, which you can toggle on            |
| 24:34      | and off.                                                                                          |
| 24:35      | And there's a button by my bed.                                                                   |
| 24:37      | And so every time, every day when I go to bed, I reach out and I press this button.               |
| 24:40      | It does a number of things.                                                                       |
| 24:41      | It turns off lights.                                                                              |
| 24:42      | It turns off fans, dehumidifiers, et cetera, to make it nice and quiet.                           |
| 24:45      | But one of the things it turns on is this fake bedtime switch.                                    |
| 24:50      | And then the same way as when there's motion detected and it's looking at the light levels,       |
| 24:55      | it also in the bedroom checks whether or not bedtime is on.                                       |
| 25:00      | And if bedtime is on, bedtime has to be off, sorry, in order for the trigger to go through        |
| 25:06      | and continue.                                                                                     |
| 25:07      | That's a condition.                                                                               |
| 25:08      | Okay.                                                                                             |
| 25:09      | And that's using Home+.                                                                        |
| 25:10      | Yeah.                                                                                             |
| 25:11      | The Home+ is to set up the condition and the Homebridge is to get the fake switch into         |
| 25:17      | [[HomeKit]].                                                                                          |
| 25:18      | And these fake switches are brilliant.                                                            |
| 25:19      | You can have ones that you manually turn on and off, ones which are always on.                    |
| 25:24      | And when you toggle them, it goes briefly off and then it comes back on, or ones that             |
| 25:29      | are off and then you press it and 30 seconds later it turns off, which can have many use          |
| 25:35      | cases.                                                                                            |
| 25:36      | They can work as timers.                                                                          |
| 25:37      | I have an eight arrow one for my lava lamp.                                                       |
| 25:39      | So when my lava lamp turns on, it turns on the lava lamp timer.                                   |
| 25:43      | And then when the lava lamp timer turns off, it turns off my lava lamp.                           |
| 25:47      | I want to get better at using motion sensors, but it's difficult for me because there's           |
| 25:52      | just like a dog and three other humans running around my house.                                   |
| 25:57      | And you know, just like I'm not sure, you know, what that means.                                  |
| 26:00      | And then I've had inconsistent results with the [[HomeKit]] app.                                      |
| 26:03      | Like I try to set like in one main room of our house, like if you walk through it, it'll          |
| 26:09      | turn the lights on and then it's supposed to turn them off after 20 minutes.                      |
| 26:12      | But then sometimes it doesn't.                                                                    |
| 26:14      | And then the lights are on all night and everybody's mad at dad because I had the lights on all   |
| 26:19      | night.                                                                                            |
| 26:20      | So I'm trying to figure that out.                                                                 |
| 26:22      | And I think that's something I need to get better at.                                             |
| 26:25      | And I guess I've got to get a few sensors and just start experimenting.                           |
| 26:30      | Maybe I need to just upgrade to start using Home+ app as well.                                 |
| 26:33      | Yeah.                                                                                             |
| 26:34      | The Home+ app really is a great automation tool.                                               |
| 26:38      | I'm also going to say if you're looking at building a little library of [[HomeKit]] apps              |
| 26:44      | or tools, HomePass, save all of your [[HomeKit]] passes, HomeCam, to see multiple cameras at          |
| 26:51      | the same time on one screen or cycle through them security system style.                          |
| 26:55      | And also [[Controller for HomeKit]].                                                                  |
| 26:58      | [[Controller for HomeKit]] has saved my bacon multiple times as I've gone through messing             |
| 27:02      | with stuff.                                                                                       |
| 27:04      | I accidentally reset my original Aqara hub at some point.                                         |
| 27:08      | And of course, it removed everything.                                                             |
| 27:10      | Ouch.                                                                                             |
| 27:11      | Yeah.                                                                                             |
| 27:12      | And that means it broke all of the automations as well.                                           |
| 27:14      | Yeah.                                                                                             |
| 27:15      | Except while it did that, I'd made a backup earlier that day when playing with [[Controller for HomeKit]]        |
| 27:21      | Yeah.                                                                                             |
| 27:22      | And [[Controller for HomeKit]] has complete backups with automations, scenes, names, etc.             |
| 27:27      | So I just had to pair the Aqara hub again, sync the names from the Aqara app into [[HomeKit]],        |
| 27:34      | which fortunately there's a button in the Aqara app settings to do that.                          |
| 27:38      | And so it pushed all the names because I try to keep the names and sync between the apps          |
| 27:42      | and because there's buttons for this, I do this regularly whenever I'm adding stuff from          |
| 27:45      | renaming things.                                                                                  |
| 27:47      | And then, yeah, and then I matched up any devices that didn't quite have the same name            |
| 27:53      | and restored and I'm good.                                                                        |
| 27:55      | And everything's now in the right, it was, everything was immediately back in the right           |
| 27:58      | room.                                                                                             |
| 27:59      | All of the automations were working, etc.                                                         |
| 28:01      | It was brilliant.                                                                                 |
| 28:02      | I was so impressed.                                                                               |
| 28:03      | Well, I'm going to, next time we talk about [[HomeKit]], hopefully I'll have some cool motion         |
| 28:07      | based automation.                                                                                 |
| 28:08      | I just got to figure out a way to make it work with my family and, but, but I think it would      |
| 28:13      | be nice to, I like the idea of walking through a room and at night and not having to like         |
| 28:18      | fumble for light switches.                                                                        |
| 28:20      | Yeah.                                                                                             |
| 28:21      | Yeah.                                                                                             |
| 28:22      | I found shorter time periods tend to be better.                                                   |
| 28:24      | Now, my house is definitely smaller than yours.                                                   |
| 28:26      | I've stayed on your sofa, so I can say that for a fact, but I found really like five minutes      |
| 28:32      | after I've left a room is a good time to turn the motion sensor off.                              |
| 28:36      | So most of my motion sensor lights are on a five minute trigger.                                  |
| 28:39      | Yeah.                                                                                             |
| 28:40      | That's a good point.                                                                              |
| 28:41      | And shorter tends to be slightly more reliable there.                                             |
| 28:43      | You have an entry in the outline solar panels.                                                    |
| 28:47      | I want to know what you're doing with solar panels.                                               |
| 28:50      | Well, I've got a couple of things running on solar panels now.                                    |
| 28:54      | All of my curtain openers, which are a SwitchBot curtain openers are now solar panel powered.     |
| 29:01      | And this, it won't charge them from flat to fully charged, but it will absolutely keep            |
| 29:08      | them fully charged if they're charged up.                                                         |
| 29:11      | And so I've got solar panels in the bedroom in the office.                                        |
| 29:14      | I've just stuck them to the curtains and that's working really well in the living room because    |
| 29:19      | the curtains are in front of a door.                                                              |
| 29:21      | They don't like, they don't overlap the door slightly during the day.                             |
| 29:24      | So I've just hung them on the door frame.                                                         |
| 29:28      | And so they're, they're just there.                                                               |
| 29:29      | They're actually on the door itself.                                                              |
| 29:31      | So when you open the door, I had to buy some USB-C extension cables, which are card don't         |
| 29:35      | officially, sorry, which a SwitchBot don't officially support, but it works fine.                 |
| 29:40      | I have no problem with that.                                                                      |
| 29:43      | So yeah, I've got solar powered stuff everywhere.                                                 |
| 29:46      | And I recently got my parents some cameras and a solar panel for that as well for the             |
| 29:52      | outdoor camera, which my dad was very pleased with.                                               |
| 29:55      | So but I see you also have solar.                                                                 |
| 29:58      | Yeah.                                                                                             |
| 29:59      | I think the similar thing, you know, I went just like you got into a car.                         |
| 30:03      | I have kind of gone all in with the Eufy EUFY brand, particularly their camera systems.           |
| 30:11      | This is a subsidiary of Anchor, if you remember Anchor cables, and I've always kind of liked      |
| 30:15      | and trusted the company.                                                                          |
| 30:17      | And so I bought some of their, their camera stuff and maybe we'll talk about cameras later,       |
| 30:22      | but one of the things I like about Eufy is that they store locally.                               |
| 30:25      | So you don't have to pay them to store it and you don't have to worry about them securing         |
| 30:29      | your camera footage.                                                                              |
| 30:30      | You actually store it locally in twice.                                                           |
| 30:33      | But they have a little, a nice little camera that I stuck at the, on the, on the fascia           |
| 30:40      | board around my house that points down at the driveway.                                           |
| 30:44      | So somebody tries to do something to my cars at night.                                            |
| 30:47      | They're going to, you know, be on camera.                                                         |
| 30:49      | But it was far away, and as the farthest camera away from the house, there is no electrical       |
| 30:54      | line running out there.                                                                           |
| 30:56      | And I was, I was about to hire an electrician to come out and just run a line out there           |
| 31:00      | because every time the battery dies on it about every six weeks.                                  |
| 31:06      | And then I got to get the ladder out and I got to climb up and, you know, inevitably              |
| 31:09      | I lose track of that.                                                                             |
| 31:11      | And then it's been up there for three weeks and the battery's been dead.                          |
| 31:14      | And so I was going to hire an electrician and then I just got like a, you know, a marketing       |
| 31:20      | email from eufy that said, Hey, you want to get the solar panel for your camera?                |
| 31:24      | And I looked at that and it cost about, I'm looking at $60 on Amazon, which is not cheap,         |
| 31:31      | but it's, it's cheaper than an electrician.                                                       |
| 31:33      | Yep.                                                                                              |
| 31:34      | So I thought I'd give it a try and I put one up and it's amazing.                                 |
| 31:39      | It just, I mean, I have not climbed up the ladder now in like five months since I put             |
| 31:44      | that solar panel up there.                                                                        |
| 31:45      | And it's a small little solar panel you pointed at the sun.                                       |
| 31:48      | Every time I open the app, the camera is fully charged and it's great.                            |
| 31:53      | I like it so much that there's one more outdoor camera that I have to set the battery on.         |
| 31:58      | And I think I'm going to have to just buy another one because it's just so much easier            |
| 32:03      | when you don't have to think about, you know, is this thing, is the battery charged on this       |
| 32:08      | thing?                                                                                            |
| 32:09      | Yes.                                                                                              |
| 32:10      | Yeah.                                                                                             |
| 32:11      | No, my, I've got Soma blind motors.                                                               |
| 32:15      | So they're, they're ones that you can just hook onto the, the cord or the chain or there's        |
| 32:20      | a tilt option, which you can replace a tilt wound with.                                           |
| 32:23      | Of course, mine had a pull or a cord and then the chain is rotate some.                           |
| 32:29      | So I've, I've, I've just walked with the regular motors.                                          |
| 32:31      | I didn't get a tilt from them, but it still works.                                                |
| 32:36      | Those came with solar panels as well.                                                             |
| 32:39      | And so that's also the parrot as well.                                                            |
| 32:41      | The only tip I'll give people if you're looking to do this stuff with solar panels is charge      |
| 32:45      | the devices up fully first because you might have to play a little bit with the solar panel       |
| 32:50      | placement before you get it right.                                                                |
| 32:53      | And you know, if you, if you've charged it up fully first, then you, you won't be annoyed         |
| 32:57      | that things are running out of battery or, you know, the battery is draining a little             |
| 33:01      | bit.                                                                                              |
| 33:02      | But yeah, it's, I'm really pleased with that.                                                     |
| 33:04      | And I mean, I, I don't know how green it is in comparison to the production of the solar          |
| 33:08      | panel, but at the same time, I'm hoping to keep all of these devices for a long time              |
| 33:11      | because they work.                                                                                |
| 33:12      | Yeah.                                                                                             |
| 33:13      | And quite frankly, the less I have to touch stuff, the better.                                    |
| 33:17      | I had to charge the, the batteries in my IKEA blinds recently, finally, I've had them for         |
| 33:22      | nearly a year, David, 10 months, and I finally needed to charge the batteries.                    |
| 33:27      | And so I went to IKEA and I bought an extra battery and I charged that and I put it in            |
| 33:30      | the first blind and I took that battery and charged it in the second blind and took that          |
| 33:34      | battery, charged it for the third blind.                                                          |
| 33:36      | And now I've got an extra battery sitting in with all of my cables and stuff just ready           |
| 33:39      | for next time when something starts running low, because it's, it's much easier than,             |
| 33:45      | oh shoot, why didn't my bedroom blind go down?                                                    |
| 33:47      | Right.                                                                                            |
| 33:48      | It's because they took the battery out to charge it and I didn't put the battery in,              |
| 33:50      | I need to go fetch the battery and so on.                                                         |
| 33:53      | And then it's not fully charged, et cetera.                                                       |
| 33:55      | So yeah.                                                                                          |
| 33:56      | Okay.                                                                                             |
| 33:57      | So last episode we did on [[HomeKit]], we went deep in that episode on your blind motors and          |
| 34:03      | your IKEA blinds.                                                                                 |
| 34:05      | I don't want to rehash that now.                                                                  |
| 34:07      | We'll put a link to that in the show notes.                                                       |
| 34:09      | But do you have anything to report on that?                                                       |
| 34:11      | Are they still working okay and are you still happy?                                              |
| 34:13      | They were brilliantly.                                                                            |
| 34:14      | I've had zero problems with them at all, aside from the fact that they finally started            |
| 34:19      | running out of battery after 10 months.                                                           |
| 34:21      | And bearing in mind, I play with these.                                                           |
| 34:23      | You know, I'll, I'll close the blind, you know, from demoing stuff to somebody and open           |
| 34:29      | it and pop and, you know, and I have some of them open and close halfway at parts of              |
| 34:33      | the day because it's really bright.                                                               |
| 34:34      | Again, those light sensors coming into play.                                                      |
| 34:37      | If it's really bright in a room, then I actually partially close the blind so that I, you know,   |
| 34:43      | don't have too much light.                                                                        |
| 34:44      | I found there's a particular van, which if it's parked at a certain angle or between              |
| 34:50      | a range of angles opposite my house at certain times of the day, the sun will reflect off         |
| 34:54      | of that and shine.                                                                                |
| 34:55      | It feels like it's boring into my skull.                                                          |
| 34:57      | So being able to, you know, half close the blind is great, especially when it's during            |
| 35:03      | a meeting, you can't really get up, I just have, well, I've got the IKEA button actually          |
| 35:09      | and so I can just press it and then press the down again when it gets to the right point-ish          |
| 35:12      | and it stops.                                                                                 |
| 35:13      | I don't have to get up and that's great.                                                          |
| 35:17      | So I am super tempted for these motorised blinds because my, you, since you've been               |
| 35:23      | to my house, we cleared out the front room and that turned into my studio because of,             |
| 35:27      | you know, COVID and the kids coming home and I'm going to stay there.                             |
| 35:31      | I like it, but it's got this massive window behind my desk and I love the light from it,          |
| 35:36      | but there are certain points of the day that the sun is just like nailing me straight in          |
| 35:40      | the eye if I don't close the blinds and because it's behind, the blinds are behind my desk.       |
| 35:45      | It's actually kind of, it's like a little ballerina thing to get back there and put               |
| 35:49      | them up and down and it's a super wide window.                                                    |
| 35:52      | So I probably would need two sets of them, but I've been waiting to hear how you're doing         |
| 35:56      | on this because I think I am really pleased with them.                                            |
| 35:59      | The only thing is, is you can't like, so you can, if you'd like reach your hand right             |
| 36:04      | around the back because they, they wrap the, the bar at the bottom, the weight bar all            |
| 36:09      | the way around right up to the top.                                                               |
| 36:11      | If you, if it runs out of battery and you really need to put the blinds down, you can             |
| 36:14      | very gently but firmly pull it down, but you're not going to want to do that on a regular         |
| 36:18      | basis.                                                                                            |
| 36:19      | Like that's not good for it.                                                                      |
| 36:20      | It's good.                                                                                        |
| 36:21      | It's not going to know how far it's down and so on because obviously the motor, it's usually      |
| 36:25      | in charge of all of this, so you don't want to do that, but especially for window coverings       |
| 36:29      | that you can't slash don't ever touch by hand.                                                    |
| 36:32      | It's great.                                                                                       |
| 36:33      | And I've just put the buttons somewhere really logical for everything else.                       |
| 36:37      | And I've not had a problem when people have come and, you know, they've wanted to close           |
| 36:41      | the blinds or something.                                                                          |
| 36:42      | I've just given them a button and it works for the living room blinds because Soma don't          |
| 36:47      | make buttons.                                                                                     |
| 36:48      | I actually got an Aqara wireless button and it's got four buttons on it.                          |
| 36:53      | So it looks like it's two up and down switches horizontally.                                      |
| 36:57      | And so one of them, I've set to the rotate and now the problem is, of course, you can't           |
| 37:02      | press and hold it and get it to the right rotation level.                                         |
| 37:05      | I need to experiment.                                                                             |
| 37:06      | Maybe I can do that through [[Home Assistant]], but either way, I don't really care because           |
| 37:09      | I've just set it up so, you know, the slide for the opening and closing is just open or           |
| 37:16      | closed and that's it.                                                                             |
| 37:18      | And then for the tilt, there's a couple of different options because you've got single            |
| 37:22      | press, double press and triple and press and hold.                                                |
| 37:25      | So I've set it up and I know what all of them mean.                                               |
| 37:28      | And yeah, so it works.                                                                            |
| 37:30      | Now, are your roller blinds, I think I have one question because I'm on IKEA's website         |
| 37:35      | right now.                                                                                        |
| 37:36      | Are they blackout blinds?                                                                         |
| 37:37      | Because it looks like those are the only motorised ones they have.                                |
| 37:40      | So they have blackout and they have another one as well, which is kind of translucent-ish.        |
| 37:46      | Yeah, that's what I want.                                                                         |
| 37:47      | It's a loose weave.                                                                               |
| 37:48      | I've got that in the kitchen.                                                                     |
| 37:50      | I'd also like to point out that I got these blinds and my parents liked them so much that         |
| 37:54      | they went and bought three blinds two weeks later.                                                |
| 37:56      | Wow.                                                                                              |
| 37:57      | I made this warning at the beginning of the show, Rose.                                           |
| 37:59      | I'm the one that's going to spend money today.                                                    |
| 38:02      | This is going to cost me money.                                                                   |
| 38:03      | It's great.                                                                                       |
| 38:04      | All of our listeners will really feel like they've learned stuff.                                 |
| 38:05      | I mean, I'm probably going to be buying more stuff at the end of the episode anyway because       |
| 38:08      | self-enablement, right?                                                                           |
| 38:10      | All right.                                                                                        |
| 38:11      | Well, I'm going to look in.                                                                       |
| 38:12      | I'm putting, I'm saving this tab.                                                                 |
| 38:14      | All right.                                                                                        |
| 38:15      | This is something I need to figure out later.                                                     |
| 38:17      | But thank you for enabling me.                                                                    |
| 38:19      | I'm a temporary shopping tab group.                                                               |
| 38:21      | Okay.                                                                                             |
| 38:22      | Now you, and then as I was fumbling through that, you went into switches.                         |
| 38:26      | I want to talk about switches for a minute because you're talking about the IKEA shortcut         |
| 38:30      | button.                                                                                           |
| 38:31      | That's new since the last time we talked.                                                         |
| 38:33      | Yeah.                                                                                             |
| 38:34      | Yeah, it is.                                                                                      |
| 38:35      | So IKEA shortcuts buttons.                                                                        |
| 38:37      | Somebody might be thinking, oh, I can run shortcuts with buttons.                                 |
| 38:39      | I'm just going to dash your hopes and dreams right here right now.                                |
| 38:43      | It runs home kit scenes.                                                                          |
| 38:44      | It does not run shortcuts, which is a shame.                                                      |
| 38:48      | I mean, I say it runs home kit scenes.                                                            |
| 38:50      | You could also set it to control an individual item and, or you could convert it to a shortcut    |
| 38:58      | and then, you know, you can have it run a home kit shortcut, or you could have it get             |
| 39:04      | contents of your URL and talk to something like push cut automation server to run a shortcut      |
| 39:07      | shortcut.                                                                                         |
| 39:08      | But the IKEA shortcuts buttons are pretty great.                                                  |
| 39:11      | I have one right here on my desk, David.                                                          |
| 39:13      | And this is for some stuff that we've yet to get into, but this one that I've got here            |
| 39:18      | when I press it, it opens the curtain in front of my front door.                                  |
| 39:21      | It pauses playback tools, speakers around the house, and it buzzes my intercom to let whoever     |
| 39:26      | is at the door in.                                                                                |
| 39:27      | Wow.                                                                                              |
| 39:28      | So say, for example, Amazon had not already come today and I was sitting here podcasting          |
| 39:32      | with you and I could, and I heard them buzz at the door.                                          |
| 39:35      | I could hit this button right here.                                                               |
| 39:37      | And then that gives me a couple of extra seconds to say to you, hey, I need to be right back      |
| 39:41      | and then go to the door, answer it and so on because I've already dealt with opening              |
| 39:45      | the curtain, buzzing the person in, pausing any music that might be playing, et cetera.           |
| 39:51      | And that's actually been really, really useful.                                                   |
| 39:54      | It does.                                                                                          |
| 39:55      | It just means that I feel a little bit less stressed that, oh gosh, I need to spring up           |
| 39:59      | and I need to scroll down the end of the hallway and press the button there and open the curtain  |
| 40:04      | and things like that.                                                                             |
| 40:05      | So I put a door curtain on that because it also means when I unlock my front door, it             |
| 40:10      | automatically opens the curtain.                                                                  |
| 40:12      | Now the curtain opener from the switchboard is relatively slow, so it's not perfect,              |
| 40:18      | but it's certainly easier than trying to find my way in through a curtain that's over the         |
| 40:22      | door because there's a window above the door and otherwise people could potentially send          |
| 40:26      | a ladder outside and see in.                                                                      |
| 40:27      | I think it's unlikely, but I like having the curtain there anyway.                                |
| 40:30      | Yeah.                                                                                             |
| 40:31      | No, I think that's great.                                                                         |
| 40:33      | And I have also been looking into switches and I invested in a switch called the Flick            |
| 40:40      | F-L-I-C. I think you may have been the person who told me about these to begin with, I'm          |
| 40:45      | not sure.                                                                                         |
| 40:46      | Possibly, yeah.                                                                                   |
| 40:47      | But they have the Flick 2 out now and I bought a set of those and they're a little, it's          |
| 40:52      | about the size of a US quarter coin, maybe an English pound, but of course thicker.               |
| 40:59      | And it's got a little battery in it and it's a switch and that's all it is and it pairs.          |
| 41:03      | They've got a Flick app.                                                                          |
| 41:05      | You've got to put a, there's a piece of hardware, you've got to plug in your network.             |
| 41:09      | I mean, if you're going to go down this road, one of the purchases you have to make is an         |
| 41:14      | Ethernet switch and just get one with like 10 or 15 switches on it and then get a bunch           |
| 41:19      | of little cables.                                                                                 |
| 41:20      | But anyway, so you plug the little hardware into your Ethernet network and it's just this         |
| 41:26      | little quarter size switch and it's got sticky tape on the back and you can trigger, it's         |
| 41:32      | a trigger in a home kit once you enable it.                                                       |
| 41:35      | So it's just like any other trigger in a home kit.                                                |
| 41:38      | So it doesn't just trigger scenes, it can trigger anything that home kit can do.                  |
| 41:44      | And I love these things.                                                                          |
| 41:45      | I've got one under my desk, you know, where I sit now that my desk is downstairs.                 |
| 41:50      | If I just reach under and press one button and also there's three registered presses              |
| 41:55      | on it.                                                                                            |
| 41:56      | There's a single press, a double press and a long press.                                          |
| 41:58      | So if I press it once, it turns on the strip light around the back of my desk, the huge           |
| 42:03      | strip light and it turns on the other lighting in the room and it's like when I'm working         |
| 42:08      | and it's getting dark in the room, I reach under there, press one button and the room             |
| 42:11      | lights up for me.                                                                                 |
| 42:13      | If I double tap that, it turns them off.                                                          |
| 42:16      | And then if I long press it, it turns on because outside my window, there's a little pond with    |
| 42:21      | a fountain.                                                                                       |
| 42:22      | It turns on the fountain and so or the waterfall really, but the switches and all this stuff      |
| 42:29      | is stuff I could have done with home kit, I can even attach it now to a [[Stream Deck]]               |
| 42:34      | with a third party apple probably get into later.                                                 |
| 42:37      | But you know, but there's something nice about a physical switch that you can just touch          |
| 42:41      | and it does it.                                                                                   |
| 42:43      | I put another one in my bedside table and I stuck it to the inside of the drawer.                 |
| 42:48      | You know, you open the top drawer and there's a little, just a little button in there.            |
| 42:53      | And I have glaucoma, so at night I have to take four eyedrops now.                                |
| 42:57      | It's crazy.                                                                                       |
| 42:58      | So the doctor says, take one, you know, and then close your eyes for five minutes and             |
| 43:06      | then take another one.                                                                            |
| 43:07      | So it's a 20 minute process to get through this.                                                  |
| 43:10      | But the whole time my eyes are closed, I can't see anything, but you know, I can turn the         |
| 43:14      | lights off and on just by reaching over and also some of the drops are kind of painful            |
| 43:19      | that the lights are on.                                                                           |
| 43:20      | They actually hurts mark and whatever, but you just reach into the drawer and you press           |
| 43:25      | the button and I can toggle the lights off and on.                                                |
| 43:29      | And then we've got like a, another set of lights in the bedroom, if I long press it               |
| 43:32      | turns those off.                                                                                  |
| 43:33      | So it like just solves kind of a problem for me and I know you could yell out to Siri             |
| 43:38      | or you could, you know, put these things on other automations, but sometimes just having          |
| 43:43      | a little switch that you can stick anywhere in your house is pretty convenient.                   |
| 43:47      | Yeah.                                                                                             |
| 43:48      | I have to say, you know, as much as being able to talk to a voice assistant is wonderful          |
| 43:52      | and incredibly useful and I do use it on a regular basis.                                         |
| 43:56      | Sometimes just being able to stick a button that does what you need to do where you want          |
| 43:59      | it does exactly what you want.                                                                    |
| 44:02      | I've got quite a few of the Aqara buttons now.                                                    |
| 44:05      | I've got some of the one button ones.                                                             |
| 44:06      | I've got some, I don't have any of the twos, but I've got a four button one, which I've           |
| 44:12      | got for my blinds and I've got two, six buttons.                                                  |
| 44:18      | And bearing in mind, every single one on the Aqara has, like David said with the flick            |
| 44:22      | ones, three actions.                                                                              |
| 44:24      | So there's single press, there's double press and there's long press.                             |
| 44:28      | And being able to, you know, long press on something and have it do a specific thing              |
| 44:34      | is really useful.                                                                                 |
| 44:35      | By the side of my bed though, like you, I've got a button and if I press it once, it just         |
| 44:39      | puts the house into nighttime mode.                                                               |
| 44:42      | If I double press it in the morning, then it starts me getting ready for getting up.              |
| 44:48      | It opens the blinds in my bedroom, but it doesn't open the curtains, stuff like that.             |
| 44:51      | And I've got an IKEA shortcuts button now in my bathroom with an image of a shower on             |
| 44:55      | it because you can pop off the front of these and then you can, it comes with some stickers.      |
| 45:00      | And I've also, I've got a label printer, so I just printed my own.                                |
| 45:04      | You could just put it on paper as well and stick it in there to be fair.                          |
| 45:06      | I've got a shower.                                                                                |
| 45:08      | And so if I'm in, if I go in the bathroom, I press this button, it closes the blinds              |
| 45:12      | in the living room and the curtains in the bedroom so people can't see in so I don't              |
| 45:16      | accidentally walk out of the bathroom and go, oh, my neighbours are outside, wonderful.            |
| 45:22      | And it starts playing music to my Sonos room, which lives in my hallway.                          |
| 45:26      | And then I, or, you know, I might have already put the Sonos room in the bathroom.                |
| 45:31      | And then, you know, I'm ready to shower because, you know, I've got my music and I'm ready        |
| 45:37      | to go.                                                                                            |
| 45:38      | Yeah.                                                                                             |
| 45:39      | The switches are really handy and I'm a big fan of, one other switch I have is I have             |
| 45:45      | a Lutron Casetaa switch.                                                                         |
| 45:47      | Most of them are off on and dim, but they've also got one that's just off and on.                 |
| 45:53      | And I installed that next to the door, the front door of the house.                               |
| 45:58      | And if you press the top button, it lights up all of the lights in the house except the           |
| 46:02      | bedrooms.                                                                                         |
| 46:03      | Yep.                                                                                              |
| 46:04      | And, and if you press the, the bottom one, it turns off all the lights in the house except        |
| 46:09      | the bedrooms.                                                                                     |
| 46:10      | And so if you're walking out the door and you're like, Hey, did I turn off the lights?            |
| 46:14      | I just hit the bottom button and it turns them all off.                                           |
| 46:16      | And if you're walking in and you hear a noise or for whatever reason, you just want to walk       |
| 46:21      | into a house that's well lit, press the top button in the house is very well lit.                 |
| 46:24      | When you press that button.                                                                       |
| 46:25      | Yeah.                                                                                             |
| 46:26      | In fact, now that I think about it, I should make a, I should program a similar flick switch      |
| 46:30      | in my bedside where I can just press it and like, if I hear a noise at night, I just press        |
| 46:35      | the top button and I can go dance.                                                                |
| 46:37      | Yeah.                                                                                             |
| 46:38      | I have to say, I have a couple of scenes set up for that.                                         |
| 46:43      | Because, you know, I've heard strange noises and there's never been anything wrong, but           |
| 46:47      | just being able to hit button and know everything is lit up really brightly.                      |
| 46:52      | I mean, let's face it, if somebody's broken into your house and something and then suddenly       |
| 46:55      | everything lights up, they're going to scarper.                                                   |
| 46:58      | Yeah.                                                                                             |
| 46:59      | So there's nothing to worry about.                                                                |
| 47:00      | What are they going to do?                                                                        |
| 47:01      | What did you say?                                                                                 |
| 47:02      | Scarper.                                                                                          |
| 47:03      | They're going to run away, David.                                                                 |
| 47:04      | Scarper.                                                                                          |
| 47:05      | I've never heard that term.                                                                       |
| 47:06      | I like it.                                                                                        |
| 47:07      | Okay.                                                                                             |
| 47:08      | Well, scarpering.                                                                                 |
| 47:09      | I guess it's a British English thing.                                                             |
| 47:10      | But yeah.                                                                                         |
| 47:11      | Scarper.                                                                                          |
| 47:12      | They'll run off because they don't want to be caught.                                             |
| 47:13      | Yeah.                                                                                             |
| 47:14      | You have to mention that they come in our houses, they're going to walk by like six cameras       |
| 47:16      | on the way.                                                                                       |
| 47:17      | Oh, yeah.                                                                                         |
| 47:18      | They're going to be on camera in my place as well.                                                |
| 47:21      | For sure.                                                                                         |
| 47:22      | So that's pretty good.                                                                            |
| 47:26      | This episode of Automators is brought to you by Technology Untangled.                             |
| 47:30      | I love finding a new show to listen to, especially when it's both informative and somehow matches |
| 47:34      | all of my random interests.                                                                       |
| 47:36      | Hosted by Michael Bird, Technology Untangled is a show that deciphers text rapid evolutions      |
| 47:40      | with one simple question in mind.                                                                 |
| 47:43      | What's really going to shape our future and what's going to end up in the bargain boom            |
| 47:46      | with the floppy disk?                                                                             |
| 47:48      | I listened to the episode about the mission to Mars and I really loved how it detailed            |
| 47:52      | all of the information about sending and receiving messages, especially having just watched the   |
| 47:57      | Martian again.                                                                                    |
| 47:58      | This really appealed to me.                                                                       |
| 48:00      | I think you would enjoy this podcast if you ever think about things in technology and             |
| 48:05      | wonder how does this really work and is this going to have an impact on me or indeed anything.    |
| 48:10      | And to give you an idea of episode topics, you can expect a deep dive into 5G, which              |
| 48:16      | untangles the who, what, why and how's the 5G and what it means for you.                          |
| 48:21      | How supercomputers are helping us with a fight against COVID by sifting through billions          |
| 48:24      | of molecules to look for drugs to repurpose, along with AI in the future of jobs and episodes     |
| 48:30      | on energy information and that mission to Mars I mentioned.                                       |
| 48:34      | You're really spoiled for choice.                                                                 |
| 48:36      | Most guests include people from Google, Sainsburys, Aston Martin, Red Bull Racing, Goonhilly          |
| 48:41      | Earth Station, The New York Times and Nokia.                                                |
| 48:45      | Michael Bird has interviewed over 50 super interesting people this year, think technologists,     |
| 48:50      | scientists, academics, developers, futurists and IT generalists, and in the final episode         |
| 48:55      | of Technology Untangled, you can hear about the one innovation almost all the guests couldn't     |
| 48:59      | stop talking about, as well as learning how to prepare for tomorrow's innovations today.          |
| 49:05      | Watch for Technology Untangled anywhere you listen to podcasts and we'll include a link           |
| 49:09      | in the show notes.                                                                                |
| 49:10      | Well, thanks to Technology Untangled for their support of this show and great AFM.                |
| 49:16      | Speaking of the Sonos Roam, I added another Sonos speaker to my house, David.                     |
| 49:21      | Okay, why not?                                                                                    |
| 49:23      | Well, so the Sonos Roam is a great battery speaker with [[AirPlay\|AirPlay 2]], it's got Qi charging,          |
| 49:29      | so most of the time it lives on a little Qi charger in my hallway, and this is wonderful.         |
| 49:34      | And I realised IKEA sell these symphonist buttons, so IKEA have a partnership with Sonos where    |
| 49:40      | they actually will sell Sonos speakers, but they are an IKEA outer design, and they don't         |
| 49:48      | have voice assistants built in, so the Google and Amazon voice assistant options aren't           |
| 49:53      | there, so these ones don't have microphones, which is wonderful.                                  |
| 49:55      | I have to say I've not set my Sonos Roam up with any voice assistant because its primary          |
| 49:59      | usage is in my bathroom listening to me sing in the shower, and I don't really want that          |
| 50:04      | going out anywhere.                                                                               |
| 50:05      | Sure.                                                                                             |
| 50:06      | I don't think anybody wants that going out anywhere, to be honest.                                |
| 50:08      | What songs do you sing, though, just out of curiosity?                                            |
| 50:11      | Like ABBA, stuff like that, a little bit Dancing Queen, maybe some Bee Gees, good stuff.          |
| 50:19      | But I realised, you can pair this symphonist button from IKEA with any Sonos speaker, and         |
| 50:26      | the symphonist buttons are about £15, probably $20 or so, so it's not insanely cheap, but         |
| 50:32      | it's not incredibly expensive either, and I'm much more willing to potentially ruin               |
| 50:36      | a button in my shower than I am willing to ruin a speaker.                                        |
| 50:40      | So the speaker is somewhere where it can broadcast the music into the shower, but it's not going  |
| 50:46      | to get hit by the spray of the water and so on.                                                   |
| 50:49      | But the button, it would be nice if I could go, oh no, I really don't want to listen to           |
| 50:53      | this track, skip to the next one.                                                                 |
| 50:56      | And so I got the button, and I stuck it in my shower.                                             |
| 50:59      | It's great because it's a circular dial, so you can move it around, turn it up, and move          |
| 51:05      | it back around in the other direction, turn it down.                                              |
| 51:08      | Press is play or pause, and double press is skip to the next song.                                |
| 51:11      | And if you really want, there's also triple press, which is go back to the start of this          |
| 51:15      | song, or skip backwards in general.                                                               |
| 51:20      | And it's great.                                                                                   |
| 51:21      | And as I was showering one day, and I skipped a track, I realised, hey, this is something         |
| 51:26      | I frequently want at my desk, I want the ability to skip a track, or pause my music because       |
| 51:32      | somebody's ringing me without having to talk to my HomePod, or scramble for my phone,            |
| 51:37      | or find my watch, or tap the right buttons on my watch, whatever it is.                           |
| 51:42      | It's a bit of a faff.                                                                             |
| 51:45      | And so the only thing that I could think of as a solution to this, David, was I had to            |
| 51:49      | buy another Sonos, a symphonic picture frame that now hangs in my hallway and a button            |
| 51:54      | to go with it.                                                                                    |
| 51:56      | Okay.                                                                                             |
| 51:57      | Okay.                                                                                             |
| 51:58      | It wasn't the only solution.                                                                      |
| 51:59      | I had many options.                                                                               |
| 52:00      | I could have just bought another symphonic button and paired it with the Roam, but I was really   |
| 52:02      | curious because Sonos and IKEA have partnered up to create this artwork speaker system where      |
| 52:07      | you can buy art, which is actually a speaker.                                                     |
| 52:11      | That's crazy.                                                                                     |
| 52:12      | How's it sound?                                                                                   |
| 52:13      | It sounds incredible, David.                                                                      |
| 52:15      | I really love it.                                                                                 |
| 52:16      | I mean, it's a big speaker because it's a piece of art.                                           |
| 52:19      | But wow, it sounds good.                                                                          |
| 52:21      | I love it.                                                                                        |
| 52:23      | My only complaint is I couldn't get alternative artwork for it yet because I'm pretty certain     |
| 52:27      | a lot of IKEA stuff was on the Ever Given, which was that big cargo container ship that           |
| 52:33      | got stuck and blocked every other ship in the world for quite some time.                          |
| 52:41      | Because some of the shortcuts buttons I bought, be warned if you're going to go pick those        |
| 52:45      | up, buy some extra batteries straight away, because so I bought eight, three of them were         |
| 52:51      | out of battery and two of them have already got low battery and they've only been paired          |
| 52:55      | for two weeks.                                                                                    |
| 52:56      | They had low battery when I set them up.                                                          |
| 52:59      | So the CR2032 batteries are cheap.                                                                |
| 53:02      | They're easy to get.                                                                              |
| 53:03      | I've gotten Amazon subscribers save for them, so they just arrive and they go and draw and        |
| 53:08      | then get used up because so many things are using these batteries in my house now.                |
| 53:13      | But yeah, so I got this symphonist speaker art frame, which is great because I keep the           |
| 53:21      | room in the hallway most of the time, but frequently it's in the bathroom when I'm going          |
| 53:25      | in and out of the bathroom.                                                                       |
| 53:26      | Maybe I'm cleaning, maybe I'm doing my makeup, I'm having a shower and stuff.                     |
| 53:30      | And so it's nice to always have music in the hallway as well.                                     |
| 53:33      | And it's a really lovely speaker.                                                                 |
| 53:35      | So I got that and I paired a symphonist button to it.                                             |
| 53:39      | And now, David, at my desk, I have the symphonist button.                                         |
| 53:42      | So earlier today, when my boss called me at work, I just reached out and pressed Paul's,          |
| 53:47      | put on my AirPods Max and spoke to him.                                                           |
| 53:50      | And that was it.                                                                                  |
| 53:51      | And there were no dramatics, there was no, the Apple Assistant has misunderstood me.              |
| 53:57      | No, I don't want to know what the price of jam in Italy is today.                                 |
| 54:02      | I would like to pause my music or whatever weird thing it interprets what you're saying           |
| 54:06      | is.                                                                                               |
| 54:07      | I have to say, having a slight lisp, the first day that I'm wearing a new set of braces           |
| 54:11      | is the worst.                                                                                     |
| 54:14      | And it's definitely interfering with my ability to talk to voice assistants.                      |
| 54:19      | I set a timer to cook rice earlier today and when it went off, it said, your Chris timer          |
| 54:25      | is done.                                                                                          |
| 54:26      | Okay, well.                                                                                       |
| 54:27      | And I'm there going, that sounds nothing like what I said.                                        |
| 54:31      | Thank you, S-I-R-A.                                                                               |
| 54:32      | Yeah.                                                                                             |
| 54:33      | But yeah.                                                                                         |
| 54:34      | So I now have a whole house button, which pauses my music, which is great because the             |
| 54:40      | way I do this is [[AirPlay\|AirPlay 2]].                                                                       |
| 54:42      | I [[AirPlay\|AirPlay 2]] to all of my speakers.                                                                |
| 54:45      | And then if you pause an individual speaker in the group, then all of them get paused.            |
| 54:49      | That's an interesting problem to solve.                                                           |
| 54:52      | I've kind of gone down the road of the HomePods because they were cheap and there's so           |
| 54:58      | many sales on these HomePods.                                                                    |
| 55:00      | So at this point, I've got, I don't even know how many, I have four of them now.                  |
| 55:06      | And my daughter has a mini in her room.                                                           |
| 55:09      | So we've got like a kind of a HomePod network and the nice thing because I use Apple hardware,   |
| 55:14      | everything just kind of works together and I don't need one in the shower.                        |
| 55:19      | The way our shower, the room that has like the shower in the sink is, doesn't have a              |
| 55:23      | door and it's connected to our bedroom.                                                           |
| 55:25      | So if I play the bedroom one, that's loud enough.                                                 |
| 55:28      | But the, yeah, I think that is kind of an interesting area of automation.                         |
| 55:34      | And I should be doing more with automatically playing music because I love music so much.         |
| 55:39      | But right now we've still got, you know, the kids are doing, well, one of them is now going       |
| 55:44      | to actual school and the other one will be leaving in like a month to live up at UCLA.            |
| 55:50      | So then suddenly I can like get a little more creative with like, I walk in the room, motions     |
| 55:55      | and sort of triggers, it's, it's sparky and turn on, you know, Star Wars or whatever.             |
| 56:00      | And so hopefully that's coming for me.                                                            |
| 56:02      | Yes.                                                                                              |
| 56:03      | Yeah.                                                                                             |
| 56:04      | No, I have to say I'm very pleased with that.                                                     |
| 56:05      | I've added, I've got another IKEA shortcut button on my desk.                                     |
| 56:08      | And depending on the time of day, and this is just depending on time of day right now,            |
| 56:14      | when I press it, it, it tries to play different music based on time of day to speakers that's     |
| 56:19      | not working super well.                                                                           |
| 56:20      | I'm thinking I'm just going to set it up to one big smart playlist, but it's quite nice           |
| 56:25      | having a button that I can just reach out and press and it'll start playing music.                |
| 56:30      | And then, and it'll start playing a very specific place as well.                                  |
| 56:33      | So it won't be whatever I was listening to last.                                                  |
| 56:36      | I did upgrade my speaker system in the bedroom, David, I now have a HomePod mini stereo pair.     |
| 56:42      | So good.                                                                                          |
| 56:43      | Really love it.                                                                                   |
| 56:44      | Brain sounds in, in, in, you know, fake surround sound are wonderful.                             |
| 56:49      | That's been helping me get to sleep much more easily.                                             |
| 56:53      | And yeah, it, it, it's, yeah, I really like the HomePod stuff, but if people are interested       |
| 57:00      | in something that can do [[AirPlay]] too, which maybe has some more automation options than           |
| 57:05      | the symphonist stuff from IKEA is cheaper than Sonos, but it is Sonos hardware inside.            |
| 57:10      | Can we talk about cameras for a little bit?                                                       |
| 57:13      | Okay.                                                                                             |
| 57:14      | Because you were just figuring that out the last time we talked.                                  |
| 57:16      | Have you, where have you gone with your camera system?                                            |
| 57:20      | So last time we spoke, I think I, I didn't really want cameras or outside cameras because         |
| 57:25      | I, you know, privacy of other people.                                                             |
| 57:29      | And then I had some packages go missing and they did turn up.                                     |
| 57:32      | They were delivered to a street with almost the same name on the other side of town.              |
| 57:38      | Fortunately, the lovely lady that lives there came around and rang my doorbell the next           |
| 57:43      | day and said, Hey, these were delivered to me, but they're not mine.                              |
| 57:48      | These appear to be yours.                                                                         |
| 57:49      | I don't know what was going on with the driver.                                                   |
| 57:52      | My son signed for them.                                                                           |
| 57:54      | And I got the impression she was not best impressed at her son for his lack of reading            |
| 57:58      | skills in this particular case.                                                                   |
| 58:00      | But either way, it doesn't matter.                                                                |
| 58:02      | Everything turned up.                                                                             |
| 58:03      | But that was the point where I decided that I really do need the ability to check what's          |
| 58:08      | like what's happened in the hallway and so on.                                                    |
| 58:12      | So at this time, the ring people camera had not been discontinued.                                |
| 58:17      | This was the one where you can take out the spyhole on your door or replace it with a             |
| 58:20      | ring doorbell camera.                                                                             |
| 58:23      | So I got one of those.                                                                            |
| 58:25      | And it means that you don't need to drill anything.                                               |
| 58:28      | And I set it up and I set it up through Homebridge so it's in my home kit set up.                 |
| 58:34      | So when somebody rings the doorbell, I don't need to buy one of those extra ring chimes.          |
| 58:38      | It dings on all of my HomePods and sends me push notifications and so on.                        |
| 58:43      | And it's great.                                                                                   |
| 58:44      | I am paying for the ring subscription here, but I decided that was probably the lesser            |
| 58:49      | the evil options because technically because I live in an apartment, like my front door           |
| 58:54      | is half mine and half not mine.                                                                   |
| 58:56      | So I have to be careful what I do with it.                                                        |
| 58:58      | Replacing the lock with a smart lock, not a problem, but adding a doorbell with a camera          |
| 59:04      | and stuff by drilling into the door frame might...                                                |
| 59:08      | It wouldn't get me in trouble, but it might get me a sternly worded letter.                       |
| 59:12      | So I decided against that.                                                                        |
| 59:14      | My parents on the other hand wanted a smart doorbell and were telling me, oh, we want             |
| 59:17      | to get this ring doorbell.                                                                        |
| 59:19      | But I know my parents, they will complain about having to pay for the subscription,               |
| 59:23      | but then they will complain about not having the later playback features.                         |
| 59:28      | So fortunately, this was at the same time as they were looking at an outdoor camera.              |
| 59:32      | I just bought them a eufy set and set it up and I'm quite pleased with that.                    |
| 59:36      | And I'm guessing that you've also managed to get a eufy doorbell.                               |
| 59:39      | Yeah.                                                                                             |
| 59:40      | I want to hear about your experience with eufy because I don't know many other people           |
| 59:44      | that use it other than me.                                                                        |
| 59:46      | And I, like I said, when they first kind of came on the scene, I knew they were an Anker         |
| 59:50      | subsidiary, so I'm like, okay, those are good guys.                                               |
| 59:53      | And I like that when you get it, like the doorbell comes with a little unit that you              |
| 59:58      | plug into your, you know, to your switch, you know, it's another thing you plug into              |
| 01:00:03   | your ethernet network.                                                                            |
| 01:00:05   | But it's got onboard storage.                                                                     |
| 01:00:06   | I wish that you could like put a memory stick in it because it's, I think it's...                 |
| 01:00:11   | Yeah.                                                                                             |
| 01:00:12   | So there's two different eufy doorbells.                                                        |
| 01:00:13   | I'm guessing you've got the 2K one, which is the one my parents also have.                        |
| 01:00:16   | And it comes with a base station, which looks kind of like an airport extreme or time capsule     |
| 01:00:21   | did.                                                                                              |
| 01:00:22   | That's what I know.                                                                               |
| 01:00:23   | From Apple.                                                                                       |
| 01:00:24   | And that's limited 16 gigabytes of storage.                                                       |
| 01:00:25   | Eeronically, if you've got the 1080p camera, it would have come with a different door chime        |
| 01:00:33   | plug-in with antenna on it.                                                                       |
| 01:00:35   | And that can take a microSD card.                                                                 |
| 01:00:37   | So you could have put any size microSD card in there and you'd have been fine.                    |
| 01:00:40   | But the base station is limited 16 gigabytes of storage.                                          |
| 01:00:44   | Yeah.                                                                                             |
| 01:00:45   | Well, either way, that's what I have.                                                             |
| 01:00:48   | And so I put it in and this has been like a year now that it's been in, put it in when            |
| 01:00:55   | COVID was kind of getting started.                                                                |
| 01:00:57   | And it's been great because we did get more, you know, deliveries during this time, obviously     |
| 01:01:01   | we couldn't go out and it, you know, you've got to use the eufy app.                            |
| 01:01:06   | And when I first bought it, there were all these forum messages about saying home kit             |
| 01:01:09   | integration is coming in and at the same time they had already upgraded some of their existing    |
| 01:01:14   | cameras to home kit integration.                                                                  |
| 01:01:17   | So I was like, well, there's a company that's proven that they can aftermarket, put home          |
| 01:01:21   | kit in.                                                                                           |
| 01:01:22   | And I just assumed it was a question of months and of course now it's been a year and it          |
| 01:01:25   | still doesn't have home kit integration.                                                          |
| 01:01:28   | I don't know if it ever will.                                                                     |
| 01:01:29   | No, but it does have a Homebridge plug-in.                                                       |
| 01:01:32   | All right.                                                                                        |
| 01:01:33   | Well, I want to get to that.                                                                      |
| 01:01:34   | We're going to talk about Homebridge later because I want to talk about that.                    |
| 01:01:37   | Yeah, because this is something I'm looking at setting up for my parents.                         |
| 01:01:40   | For some reason, I've been struggling to get that outdoor camera into home kit even though        |
| 01:01:43   | their outdoor camera is most definitely home kit compatible.                                      |
| 01:01:46   | Things are a bit janky.                                                                           |
| 01:01:47   | I think I need to go over there at some point and reset the base station and do some other        |
| 01:01:50   | stuff.                                                                                            |
| 01:01:51   | But that's a problem for a day when I've got a couple of hours to kill at their place             |
| 01:01:56   | and they won't be too annoyed if I reset all of their stuff and set it up again.                  |
| 01:02:01   | Yeah.                                                                                             |
| 01:02:02   | So just to be clear, their outdoor and indoor cameras are home kit compatible.                    |
| 01:02:06   | If you buy the home kit compatible ones, just to be clear, there are some non-home                |
| 01:02:09   | kit compatible ones.                                                                              |
| 01:02:10   | They look the same, but double check to make sure you don't get caught out.                       |
| 01:02:13   | Yeah.                                                                                             |
| 01:02:14   | And once you connect them, then you see them in home kit and you can connect them to your         |
| 01:02:19   | home kit cloud storage, which is ideal because it's encrypted, it's yours, it's you don't         |
| 01:02:25   | pay for it.                                                                                       |
| 01:02:26   | It's like it's kind of, and starting with iOS 15, you're going to get, I think, an unlimited      |
| 01:02:31   | number.                                                                                           |
| 01:02:32   | Right now, it's limited to five, but you can, I think it's unlimited with the...                  |
| 01:02:36   | I think it's part of iCloud Plus.                                                                 |
| 01:02:38   | Which they announced at the same time as iOS 15, but they didn't actually say it's coming         |
| 01:02:42   | at the same time as iOS 15.                                                                       |
| 01:02:44   | Yeah.                                                                                             |
| 01:02:45   | Yeah.                                                                                             |
| 01:02:46   | I haven't seen it in the betas yet.                                                               |
| 01:02:47   | I'm anxious to see it show up, but so a lot of UV cameras work right in home kit, but             |
| 01:02:52   | then the doorbell, you've got to go in the UV app.                                                |
| 01:02:55   | The other one that hasn't made the home kit jump is they have some floodlight cameras where       |
| 01:03:01   | if you've got a floodlight on the exterior of your house, you pull that down, you put             |
| 01:03:04   | one of these up, and it's an LED floodlight plus a camera, so whenever there's motion,            |
| 01:03:10   | you can see it there, and you've got to run those out of the UV app.                              |
| 01:03:13   | That being said, the UV app isn't terrible.                                                       |
| 01:03:16   | I mean, it's okay.                                                                                |
| 01:03:17   | No, it's pretty good.                                                                             |
| 01:03:18   | You can share cameras with other people in it, so my parents have shared their cameras            |
| 01:03:21   | with me.                                                                                          |
| 01:03:22   | Yeah.                                                                                             |
| 01:03:23   | And tip, if you go into the settings area of the app, then you can rearrange the cameras,         |
| 01:03:30   | because of course my parents shared their cameras with me, and these are new cameras.             |
| 01:03:32   | You want these at the top of your UV security app?                                                |
| 01:03:35   | Yeah.                                                                                             |
| 01:03:36   | No, I don't really want my parents' driveway and back garden at the top of my UV security         |
| 01:03:40   | app, thanks.                                                                                      |
| 01:03:41   | Yeah, I agree.                                                                                    |
| 01:03:42   | So I rearranged it.                                                                               |
| 01:03:45   | And so you can do that, and they've got a Mac app, which is kind of unique.                       |
| 01:03:49   | You can get it in the Mac app store, so you can see your cameras on your Mac.                     |
| 01:03:53   | I think that's for M1 Macs, David, because I was looking on an Intel machine the other            |
| 01:03:56   | day and I couldn't download it.                                                                   |
| 01:03:58   | I don't know if that's true enough, because I thought I ran it on an Intel machine, but           |
| 01:04:02   | maybe I'm mistaken.                                                                               |
| 01:04:04   | I know that you can also download the mobile app on an M1 Mac.                                    |
| 01:04:09   | The mobile app is not disabled, so if you prefer the mobile app on an M1 Mac, you can             |
| 01:04:14   | download it and run it on your Mac, but they also have a separate Mac dedicated to it.            |
| 01:04:19   | I'm looking now, it has one star after 50 reviews.                                                |
| 01:04:23   | I don't think it's that bad.                                                                      |
| 01:04:24   | I mean, it does what it says on a 10.                                                             |
| 01:04:26   | It shows your cameras.                                                                            |
| 01:04:28   | Yeah.                                                                                             |
| 01:04:29   | And the cameras are pretty good.                                                                  |
| 01:04:31   | And when we had the big fire scares last year, we got evacuated a few times.                      |
| 01:04:36   | One of the things we did as we were doing the mad scramble was I took the indoor cameras          |
| 01:04:41   | and relocated them at key windows in the house pointing out the windows.                          |
| 01:04:46   | And so when we got, because we literally could not get back to our house, once you get evacuated, |
| 01:04:51   | they shut down the streets and you're not allowed back.                                           |
| 01:04:54   | So I was able to see exactly where the fires were.                                                |
| 01:04:57   | I was able to look out my windows the whole time we were evacuated and that was really            |
| 01:05:01   | handy.                                                                                            |
| 01:05:02   | And so there's a lot to like about the eufys and they're not expensive.                            |
| 01:05:06   | I mean, the cameras, if you get them on sale or they're, I think even like the fancy ones         |
| 01:05:12   | with the motors are under $50 and you shouldn't buy those because you can't control those         |
| 01:05:16   | motors from home kits.                                                                            |
| 01:05:17   | No, you can't, but you can control them in the eufys security app.                                 |
| 01:05:20   | And actually I'm a big fan of those.                                                              |
| 01:05:21   | I've got some running around.                                                                     |
| 01:05:22   | I have one in the kitchen when I was fostering Smudge the Adorable Kitty, who I'm pleased         |
| 01:05:26   | to say is doing very well in her new home for anybody who's wondering.                            |
| 01:05:30   | She's apparently ruling the roost.                                                                |
| 01:05:32   | But it was, it's really good because in the eufy app, you can rotate it.                           |
| 01:05:36   | So I'm actually going to be taking a little bit of a break.                                       |
| 01:05:38   | I'm going on holiday, precise location to be determined, depending on, you know, restrictions,    |
| 01:05:44   | problems with the world, et cetera.                                                               |
| 01:05:47   | In September, and I will be relocating all of my cameras to near windows, but this also           |
| 01:05:52   | means that I can pan around.                                                                      |
| 01:05:55   | So if I stick one, for example, on the window here in my office, pointing out the window,         |
| 01:05:59   | I will actually be able to rotate it to point into the room as well.                              |
| 01:06:02   | So I can just check everything's okay, which is really nice.                                      |
| 01:06:08   | And those cameras do connect to home kit.                                                         |
| 01:06:11   | And once Apple gets this home kit, you know, multiple camera, like right now you get five,        |
| 01:06:16   | but you know, for a couple hundred bucks, you could put five of these things all over             |
| 01:06:20   | your house when you're gone, you could have a ton of coverage outside or inside.                  |
| 01:06:25   | And they're also so cheap.                                                                        |
| 01:06:27   | I'm tempted to put one outside, honestly, just if it gets wrecked, it's something to              |
| 01:06:31   | the world.                                                                                        |
| 01:06:32   | Yeah.                                                                                             |
| 01:06:33   | This actually ties back to the Sonoff Micro USB smart adapter I mentioned at the top              |
| 01:06:39   | of the episode, because I know some people would like to have their cameras on, for example,      |
| 01:06:45   | when they're asleep, but they don't want them on during the day when they're at home.             |
| 01:06:50   | And so the way to do that with a camera is to kill the power to it.                               |
| 01:06:55   | Because Apple doesn't have an option for off when I'm awake, but on when I'm asleep.              |
| 01:07:00   | It's either it's on when you're at home or it's off when you're at home, full stop.               |
| 01:07:04   | And so I am also considering toying with the Sonoff USB smart adapters to turn the cameras        |
| 01:07:10   | off, you know, when I'm at home in rooms doing stuff.                                             |
| 01:07:14   | I don't need the camera on because I'm there and I can see it.                                    |
| 01:07:17   | But then, you know, when I'm not at home or when I'm asleep, turn it back on.                     |
| 01:07:23   | Because the other thing is I've got a camera in my living room pointing at the glass doors.       |
| 01:07:26   | But if I've got a guest who's staying in that room, I really don't want the camera on.            |
| 01:07:32   | You know, if I've got a guest staying there, then I actually, I have a 3D printer, David.         |
| 01:07:37   | I 3D printed a cover for the camera so I can just drop it over.                                   |
| 01:07:42   | Because this way they know that I can't see it.                                                   |
| 01:07:46   | Because, you know, there's a black cover over a white camera, it's pretty darn obvious.           |
| 01:07:50   | But, you know, it's a little piece of mind for them that definitely nobody can see.               |
| 01:07:55   | And also, you know, it'll be powered off as well.                                                 |
| 01:07:59   | That's for my piece of mind.                                                                      |
| 01:08:00   | So it's definitely powered off.                                                                   |
| 01:08:01   | But this way, you know, they don't need to worry about being seen.                                |
| 01:08:03   | So, yeah.                                                                                         |
| 01:08:04   | I think that's all good ideas.                                                                    |
| 01:08:08   | And like if you could get those USB power switches connected to a button at your bedside          |
| 01:08:13   | table, then it'd be really great to be able to turn the cameras off around that way.              |
| 01:08:17   | Well, I will keep playing and report back at a later date.                                        |
| 01:08:19   | I am fairly confident that I can connect this stuff to [[Home Assistant]] and [[Home Assistant]]          |
| 01:08:25   | can send things into [[HomeKit]] the same way Homebridge does.                                        |
| 01:08:29   | So, yeah, I'll report back, but I'm 99% confident right now it can be done.                       |
| 01:08:35   | Yeah, it sounds like we're both in a pretty good place with cameras right now.                    |
| 01:08:38   | Yeah.                                                                                             |
| 01:08:39   | Yeah.                                                                                             |
| 01:08:40   | I'm really pleased with mine.                                                                     |
| 01:08:41   | Because I had an extra camera for the cat, and now I currently don't have a cat.                  |
| 01:08:45   | I'm not fostering a cat.                                                                          |
| 01:08:47   | I repurposed it to point at my 3D printer.                                                        |
| 01:08:49   | So, I have a camera pointed at my 3D printer.                                                     |
| 01:08:52   | So, you know, when it's done.                                                                     |
| 01:08:53   | Yeah.                                                                                             |
| 01:08:54   | Good.                                                                                             |
| 01:08:55   | Well, I already know when it's done because I have a whole automation setup for that,             |
| 01:08:57   | which maybe we should go into in the future.                                                      |
| 01:08:59   | It's nice to be able to check in and see in high resolution how things are doing and so           |
| 01:09:03   | on.                                                                                               |
| 01:09:04   | And the other thing we've not mentioned about the eufye indoor cameras is you can stick a          |
| 01:09:07   | microSD card in the camera.                                                                       |
| 01:09:09   | Yes.                                                                                              |
| 01:09:10   | Because the eufye indoor cameras are Wi-Fi.                                                        |
| 01:09:11   | They do not connect to a base station, but you can stick a microSD card in it so it's             |
| 01:09:15   | got on-device storage if you want to.                                                             |
| 01:09:18   | You don't have to, but you can.                                                                   |
| 01:09:19   | Yeah.                                                                                             |
| 01:09:20   | And in the app, assuming you haven't moved it over to [[HomeKit]], in the app you can see             |
| 01:09:24   | prior events like you can go through and scrub them off the card.                                 |
| 01:09:29   | And it does a rolling, right?                                                                     |
| 01:09:31   | So it fills it up and it's kind of, it's always up to date.                                       |
| 01:09:34   | It deletes the oldest first.                                                                      |
| 01:09:35   | Yeah.                                                                                             |
| 01:09:36   | And the bigger stick you put in it, the longer history you keep.                                  |
| 01:09:39   | And like I said, I'm just so happy with those cameras and they're not expensive.                  |
| 01:09:45   | We've got one on the dog crate because she sleeps in the crate at night, the Ahsoka               |
| 01:09:49   | Cam.                                                                                              |
| 01:09:50   | And you know, we're always checking in on her.                                                    |
| 01:09:52   | Or when we leave and we put her in there for a couple hours so we can see how she's               |
| 01:09:55   | doing.                                                                                            |
| 01:09:56   | Yep.                                                                                              |
| 01:09:57   | Yeah, just good stuff.                                                                            |
| 01:10:00   | This episode of The Automator is brought to you by Privacy.                                       |
| 01:10:03   | Get a privacy.com/automators for smarter payments and get $5 to spend on your first         |
| 01:10:09   | purchase.                                                                                         |
| 01:10:10   | Financial transactions and online baking are awesome.                                             |
| 01:10:13   | It's so convenient.                                                                               |
| 01:10:15   | But I also worry when I log into these systems exactly what kind of data I'm giving to what       |
| 01:10:21   | people.                                                                                           |
| 01:10:22   | I don't want someone to take advantage of that data to steal money from me or personal            |
| 01:10:27   | information or compromise my privacy.                                                             |
| 01:10:30   | Privacy is a tool that makes it easy to manage your financial lives online while keeping your     |
| 01:10:35   | most important information secure.                                                                |
| 01:10:38   | By generating virtual numbers, privacy masks your bank information so you never have to           |
| 01:10:42   | worry about giving it out to people you don't know online.                                        |
| 01:10:46   | I know we've all experienced that moment where there's some online store that has something       |
| 01:10:50   | you want to buy.                                                                                  |
| 01:10:51   | It's maybe the perfect gift or something you've been looking for for yourself.                    |
| 01:10:55   | But then they get to that window where they want you to type in your credit card information.     |
| 01:11:00   | And this is a vendor you've never heard of before.                                                |
| 01:11:02   | You don't even know what country they're located in.                                              |
| 01:11:05   | Do you feel safe giving them your credit card information?                                        |
| 01:11:08   | Well, that's why a service like privacy is so important.                                          |
| 01:11:11   | With privacy, you take back control of your payments.                                             |
| 01:11:14   | You decide who can charge your card and how much and how often, and you can close a card          |
| 01:11:19   | at any time.                                                                                      |
| 01:11:20   | Plus, you can make sure that you are never accidentally billed twice or upgraded to another       |
| 01:11:25   | service without your consent.                                                                     |
| 01:11:27   | And privacy is partnered with the good folks at 1Password, so you can create and use            |
| 01:11:31   | and save privacy cards directly within your 1Password dashboard.                                |
| 01:11:36   | All virtual cards are created in 1Password, then they'll have the same security benefits        |
| 01:11:41   | as your other privacy cards, and you can set up spending limits, create single-use or merchant    |
| 01:11:46   | locked cards whenever you want.                                                                   |
| 01:11:48   | So head to privacy.com/automators and sign up for an account.                               |
| 01:11:52   | New customers will automatically get $5 to spend on your first purchase.                          |
| 01:11:57   | Once again, that's privacy.com/automators to sign up now.                                   |
| 01:12:01   | And our thanks to privacy for their support of the automators and all of RelayFM.                 |
| 01:12:06   | All right, Rose, we've done a terrible job of managing this outline.                              |
| 01:12:10   | So we've got a couple here.                                                                       |
| 01:12:12   | We're going to go through fast, but something that's changed for both of us since we last         |
| 01:12:16   | talked about this stuff is air purifiers.                                                         |
| 01:12:19   | Suddenly that's a thing.                                                                          |
| 01:12:20   | Yeah.                                                                                             |
| 01:12:21   | So I went to the optician.                                                                        |
| 01:12:23   | I have hay fever, and apparently it made my eyelids really bumpy.                                 |
| 01:12:26   | My optician was incredibly unimpressed with me.                                                   |
| 01:12:30   | So I got some air purifiers, and I went a little bit mad.                                         |
| 01:12:34   | So I got a SmartMI, that's MI for the me, and that's a [[HomeKit]] air purifier.                      |
| 01:12:42   | I love it.                                                                                        |
| 01:12:43   | It's great.                                                                                       |
| 01:12:44   | It works.                                                                                         |
| 01:12:45   | It lives on auto next to my sofa, and it's wonderful.                                             |
| 01:12:48   | And then I realised I needed one in my bedroom, one in my office.                                 |
| 01:12:51   | So I got some Himox, H-I-M-O-X ones, which pro tip, don't pair them with the app that            |
| 01:12:57   | it says to, pair them with the Tuya app that's T-U-Y-A, because Tuya is the protocol behind       |
| 01:13:04   | a lot of this stuff.                                                                              |
| 01:13:06   | And if it's connected to the Tuya app, Tuya has a Homebridge plugin and a [[Home Assistant]]          |
| 01:13:10   | plugin where you can then get your stuff into [[HomeKit]] through that.                               |
| 01:13:14   | So I now have three air purifiers into [[HomeKit]], and then it got really hot.                       |
| 01:13:19   | So I bought a Dyson fan slash air purifier for the living room, because that's my largest         |
| 01:13:24   | room connected to the kitchen.                                                                    |
| 01:13:25   | I thought an extra air purifier probably wouldn't hurt.                                           |
| 01:13:27   | And this fan is Wi-Fi, so it turns on and off through [[HomeKit]] slash Homebridge as well,           |
| 01:13:34   | which I'm really pleased with.                                                                    |
| 01:13:35   | That works really well for me.                                                                    |
| 01:13:37   | And I have to say, I have noticed my eyes and, in general, sinuses feeling a lot better           |
| 01:13:42   | since I installed air purifiers everywhere.                                                       |
| 01:13:44   | Yeah, when COVID started, I got the one recommended by Wirecutter.                                |
| 01:13:50   | It's the Coway COWAY air purifier, I'll put an Amazon link in.                                    |
| 01:13:55   | It has no automation tools built in.                                                              |
| 01:13:58   | I mean, it doesn't connect to anything, except it does have an auto button on it, and it          |
| 01:14:03   | has a sensor.                                                                                     |
| 01:14:04   | And if the room is bad, it turns itself up, so you can have it run that way, or you can           |
| 01:14:09   | just have it run steadily at any one of the four motor settings.                                  |
| 01:14:13   | When we run them 24-7, I don't turn them off at all.                                              |
| 01:14:17   | I might just leave them going.                                                                    |
| 01:14:18   | I turn off the one in my bedroom and the Dyson fan in the living room when I go to bed,           |
| 01:14:24   | just because I don't need them running all the time.                                              |
| 01:14:26   | The one next to my bed is basically next to my head, or into the pillow end of the bed,           |
| 01:14:30   | because there's a limited number of locations to put this in my bedroom.                          |
| 01:14:34   | So I have that one turned off.                                                                    |
| 01:14:35   | It's also got a light on the top, which I found, if you set up an automation in the               |
| 01:14:40   | Tuya app for these Himox ones, then you can have, when it turns on, turn off the light.         |
| 01:14:46   | Because by default, when it turns on, it turns on the light, and there's no way to disable        |
| 01:14:50   | that.                                                                                             |
| 01:14:51   | I don't understand why it's got this blue ring light around the top anyway, I guess,              |
| 01:14:54   | so that you know it's on.                                                                         |
| 01:14:56   | The one in my office, I don't care.                                                               |
| 01:14:57   | It's on a shelf above my head, glancing up there.                                                 |
| 01:14:59   | It's actually quite useful, because I can see, oh, it's on, doing things.                         |
| 01:15:03   | Great.                                                                                            |
| 01:15:04   | Though at the moment, it's off because of podcasting.                                             |
| 01:15:06   | But the one in the bedroom, I don't want that on.                                                 |
| 01:15:09   | And especially, it would spin up at night, and that's frustrating when you don't need             |
| 01:15:13   | that.                                                                                             |
| 01:15:14   | Yeah.                                                                                             |
| 01:15:15   | So I had the same problem, that there's a light, a bright light on the top of this one,           |
| 01:15:18   | and the one in the bedroom lights up the bedroom.                                                 |
| 01:15:20   | So I researched it, couldn't find a way to turn it off.                                           |
| 01:15:24   | So I have a nice little tidy towel that lays on top of the air purifier, and now I don't          |
| 01:15:31   | see the light.                                                                                    |
| 01:15:32   | And that was my...                                                                                |
| 01:15:33   | Electrical tape is your best friend when it comes to these LEDs.                                  |
| 01:15:35   | Yeah, you know what I should do, electrical tape.                                                 |
| 01:15:37   | Except I actually kind of like seeing the settings underneath it during the day.                  |
| 01:15:41   | But I should probably just do electrical tape.                                                    |
| 01:15:44   | But anyway, my automation solution for this was not to go into home kit products.                 |
| 01:15:50   | I felt like for an air purifier, just leave it running, and then you're good.                     |
| 01:15:53   | But get one that can adjust its motor speed to the needs.                                         |
| 01:15:57   | And the other thing just about air purifiers, I always thought that they might just be snake      |
| 01:16:02   | oil and not wear the trouble, and immediately, my daughter and me who have allergies had          |
| 01:16:08   | a better time when we put these things in.                                                        |
| 01:16:11   | And then when the fires came through here and we had ash in the air, usually when we              |
| 01:16:15   | have ash in the air, we are cleaning ash off everything because it just gets in the house.        |
| 01:16:20   | It's everywhere.                                                                                  |
| 01:16:21   | And with these air purifiers, like took all that out, and it was great.                           |
| 01:16:25   | So if you're on the fence about buying one of these, I would recommend getting one, no            |
| 01:16:30   | matter which one you get.                                                                         |
| 01:16:31   | Yeah.                                                                                             |
| 01:16:32   | So I would use the amount of dust in my flat by quite a bit.                                      |
| 01:16:35   | And I'm really pleased with that.                                                                 |
| 01:16:38   | One of the reasons why I went for smart, aside from being able to turn off the one in my          |
| 01:16:40   | bedroom when I go to bed, is when I turn on a film on TV, specifically a film, I'm using          |
| 01:16:46   | a Homebridge plug-in with Plex to achieve this.                                                  |
| 01:16:49   | When I turn on a film, it turns off the air purifier in the living room because that one's        |
| 01:16:53   | right next to the sofa.                                                                           |
| 01:16:55   | And I don't want that spinning up because I've microwave popcorn and it goes, popcorn,            |
| 01:16:58   | you know, pollutants in the air.                                                                  |
| 01:17:00   | It's like, yes, there are pollutants in the air, but you know what?                               |
| 01:17:03   | I'm good with it this time.                                                                       |
| 01:17:04   | Most of the time, I want you to be doing exactly what you want to do right now, but not while     |
| 01:17:07   | I'm watching a film.                                                                              |
| 01:17:08   | Thank you.                                                                                        |
| 01:17:09   | Yeah.                                                                                             |
| 01:17:10   | This morning, I was working at my desk, and there's a little chair next to my desk.               |
| 01:17:14   | I called the co-pilot chair where the dog sits in the mornings, and I gave her a snack            |
| 01:17:19   | and she stretched and stood up and shook.                                                         |
| 01:17:22   | And then immediately the fan next to her went, uh-oh, and it just like fired up.                  |
| 01:17:26   | And I thought, this thing still works, you know?                                                  |
| 01:17:28   | Yep.                                                                                              |
| 01:17:29   | The fact that the dog shaking was enough for the fan to say, okay, this room needs an             |
| 01:17:33   | extra sweep.                                                                                      |
| 01:17:34   | Okay.                                                                                             |
| 01:17:35   | Yep.                                                                                              |
| 01:17:36   | Speaking of sweeping, also, let's make this a quick one, what's your status with your             |
| 01:17:39   | robot vacuum?                                                                                     |
| 01:17:40   | I mean, I think-                                                                                  |
| 01:17:41   | Love it.                                                                                          |
| 01:17:42   | Runs regularly.                                                                                   |
| 01:17:43   | Yeah.                                                                                             |
| 01:17:44   | I've set up a further automation now when it docks after it's finished.                           |
| 01:17:48   | It sends me a notification to tell me to empty it because this is very useful.                    |
| 01:17:54   | And as well as telling me to empty it, it also says, run the mop because, David, I managed        |
| 01:17:58   | to get a robot mop.                                                                               |
| 01:18:00   | I got an open box returned on eBay.                                                               |
| 01:18:03   | Yeah.                                                                                             |
| 01:18:04   | So, it was brand new.                                                                             |
| 01:18:07   | It was just the box was a little bit damaged where somebody had opened it and decided that        |
| 01:18:10   | they didn't want it and sent it back.                                                             |
| 01:18:12   | Now, I bought a robot mop.                                                                        |
| 01:18:14   | You might be thinking, oh, wow, that sounds really fancy.                                         |
| 01:18:16   | It is the dumbest robot mop in existence.                                                         |
| 01:18:19   | And this is a very good thing because it's water and electricity and you don't really             |
| 01:18:22   | want these things to get overly smart and confident and do stuff.                                 |
| 01:18:25   | Yeah.                                                                                             |
| 01:18:26   | You fill the head with water.                                                                     |
| 01:18:27   | You stick cleaning cloth on there.                                                                |
| 01:18:28   | You put some third-party cleaning cloth on Amazon to bulk it out so that I've got plenty          |
| 01:18:32   | to get me through the week.                                                                       |
| 01:18:33   | You put it down and you press the button.                                                         |
| 01:18:35   | It can do dry mopping and wet mopping.                                                            |
| 01:18:37   | It beeps when it's done.                                                                          |
| 01:18:39   | If you're thinking, oh, yeah, this is like a robot vacuum where I can just have it start          |
| 01:18:43   | automatically, there may be some that exist, but you're still going to need to refill it          |
| 01:18:46   | with water before it runs.                                                                        |
| 01:18:49   | So I'm perfectly happy with the very dumb model.                                                  |
| 01:18:52   | It does have a little mapping debris that you have to leave on the counter.                       |
| 01:18:56   | So when I take it into the bathroom, I swap the cloth on the way and I take the sensor            |
| 01:19:03   | with me as well.                                                                                  |
| 01:19:04   | And I found actually closing the lid on the toilet and just placing the sensor there on           |
| 01:19:10   | the toilet.                                                                                       |
| 01:19:11   | It's about in the middle of the room in the bathroom.                                             |
| 01:19:13   | That works great.                                                                                 |
| 01:19:14   | The only thing I'll say is what I do is I actually double mop every room because I wouldn't       |
| 01:19:18   | do this if I was mopping myself, but let's face it, I wouldn't mop on a daily basis if            |
| 01:19:22   | I was doing this by hand anyway.                                                                  |
| 01:19:24   | But robot vacuums, robot mops, they're not as good as humans, but by running every single         |
| 01:19:27   | day, they are better than humans at this.                                                         |
| 01:19:31   | So instead, I put it facing one way in the kitchen and in the bathroom.                           |
| 01:19:36   | In the bathroom, I can move the bin and scales so that they're out of the way at the mop.         |
| 01:19:40   | In the kitchen, I can't really move the ills, the trolleys and the bins out of the way entirely.  |
| 01:19:46   | So I just have it mop in one direction, move the trolleys in the bin and have it mop in           |
| 01:19:51   | the other orientation.                                                                            |
| 01:19:52   | In the bathroom, I just pick it up, stick it on the other side, point it in a different           |
| 01:19:54   | way until it did go again, and it's really good.                                                  |
| 01:19:57   | I'm really pleased.                                                                               |
| 01:19:58   | I've had no complaints.                                                                           |
| 01:19:59   | Which brand?                                                                                      |
| 01:20:00   | You didn't say which brand you bought?                                                            |
| 01:20:01   | I think it's a Brava, iRobot Brava maybe.                                                         |
| 01:20:06   | It's the white one.                                                                               |
| 01:20:07   | It's like a little square.                                                                        |
| 01:20:08   | A little square.                                                                                  |
| 01:20:09   | Yeah.                                                                                             |
| 01:20:10   | 360T or something.                                                                                |
| 01:20:12   | It was very cheap because I got it open box on eBay.                                              |
| 01:20:16   | These, it looks like the retail for sometimes 250, 300 pounds, David.                             |
| 01:20:21   | Well, I certainly did not pay that much for mine.                                                 |
| 01:20:22   | I think I got 75 pounds open box, including postage, so I feel like I might have got              |
| 01:20:27   | a steal.                                                                                          |
| 01:20:28   | The iRobot Brava, because Brava I think was a separate brand that got bought by iRobot            |
| 01:20:34   | and I had the prior version of it and it eventually died on me.                                   |
| 01:20:38   | But it worked well, but it wasn't wet, it was just a dry mop and that's not as good.              |
| 01:20:43   | Yeah, mine came with two heads.                                                                   |
| 01:20:45   | And the beauty of the two heads is that you've got one dry head and one wet head, so the          |
| 01:20:53   | dry head, you wrap up a cloth around it.                                                          |
| 01:20:55   | There are two different kinds of cloths.                                                          |
| 01:20:56   | There are white cloths, which are smooth and then there are blue cloths, which are like           |
| 01:21:01   | rounded microfiber.                                                                               |
| 01:21:04   | And the blue cloths go on the wet head.                                                           |
| 01:21:07   | And then I just check them all in with the other microfiber stuff that I do laundry with.         |
| 01:21:12   | And just for clarification, US Amazon store, that's $179, so it's not that bad.                   |
| 01:21:18   | I mean, I have the robot vac, I have an iRobot as well.                                           |
| 01:21:23   | It's the one, I got it on one of these Amazon sales, I think it might be the prior model,         |
| 01:21:27   | but it's the one that has the little housing that it plugs into and cleans itself out.            |
| 01:21:34   | And it is a spinning vacuum, but I use it on a hardwood floor and it actually picks               |
| 01:21:40   | up a lot.                                                                                         |
| 01:21:41   | And the one I have has a ton of features.                                                         |
| 01:21:43   | It's got [[HomeKit]] integration, it's got mapping, and honestly, I don't use any of that stuff.      |
| 01:21:50   | The only thing I do is I will kick it off from the app occasionally.                              |
| 01:21:53   | I guess it's not [[HomeKit]], it's just it's from their app and I'll push the button to               |
| 01:21:57   | get it started and it'll leave its little house and start vacuuming.                              |
| 01:22:01   | But I do that several times a week.                                                               |
| 01:22:02   | And like you said, it's not as good as if I were to sweep the room, but just by repetition,       |
| 01:22:09   | it gets spots that I wouldn't get and it keeps the floor clear.                                   |
| 01:22:12   | I'm super tempted to get one of these mops as well because on hardwood floors, I think            |
| 01:22:17   | it would be nice to do that in addition.                                                          |
| 01:22:19   | I have to say, I'm very impressed because my kitchen is right next to my living room.             |
| 01:22:23   | My kitchen has got tiles down and my bathroom as well, and my living room has carpet.             |
| 01:22:30   | And there is a little door strip between them and it's slightly rounded up to account for         |
| 01:22:35   | the extra height provided by the carpet.                                                          |
| 01:22:37   | And my robot runs up against that and it stops.                                                   |
| 01:22:41   | It's not a big lip, it's maybe half an inch or so.                                                |
| 01:22:44   | And I can see it going up because it actually cleans the strip.                                   |
| 01:22:48   | And so I can see that it could mount, but it doesn't.                                             |
| 01:22:51   | It's using some kind of amazing magic to go, I shouldn't go here.                                 |
| 01:22:56   | So I actually don't need to close the door.                                                       |
| 01:22:57   | I do close the door in the bathroom just because otherwise it has to try and navigate around      |
| 01:23:00   | the door in a very narrow space and I feel like it does a better job as the door is closed.       |
| 01:23:05   | But it's really good.                                                                             |
| 01:23:06   | I'm really pleased with this because it does mean that things stay cleaner.                       |
| 01:23:11   | And I have, you know, if I, you know, the other day I managed to drop some toast in               |
| 01:23:15   | the kitchen and it was, oh my gosh, I dropped toast in the kitchen, don't it?                     |
| 01:23:19   | It's like, I just pressed the button on the robot vacuum and it goes, and you're dealing          |
| 01:23:24   | with this, you know, pick up the big beds, but the robot vacuum is good deal with the             |
| 01:23:27   | rest.                                                                                             |
| 01:23:28   | And so it just ran and that was it.                                                               |
| 01:23:29   | Done.                                                                                             |
| 01:23:30   | No, no problems.                                                                                  |
| 01:23:31   | Yeah.                                                                                             |
| 01:23:32   | I really think these things are useful and the idea of being able to offload that stuff           |
| 01:23:36   | to, you know, robot is a great idea.                                                              |
| 01:23:39   | So anyway, that's a winner.                                                                       |
| 01:23:40   | Yeah.                                                                                             |
| 01:23:41   | I have the robot vacuum run when I've left home, when there's nobody at home.                     |
| 01:23:45   | Sure.                                                                                             |
| 01:23:46   | It just comes out and it runs during sort of Monday to Friday, it runs at about 10 o'clock        |
| 01:23:51   | in the morning usually unless it's already run, you know, because I've said, oh, there            |
| 01:23:54   | are crumbs on the floor.                                                                          |
| 01:23:55   | I should get that.                                                                                |
| 01:23:56   | But it just runs automatically about 10 o'clock in the morning, which is great.                   |
| 01:23:59   | So, yeah.                                                                                         |
| 01:24:01   | Okay.                                                                                             |
| 01:24:02   | I want to talk about more changing topics.                                                        |
| 01:24:04   | I want to talk about [[Home Assistant]] and what you're doing with it and just kind of explain        |
| 01:24:08   | what you've done because this is entirely new since the last time we went into this.              |
| 01:24:12   | Yeah.                                                                                             |
| 01:24:13   | So for people not familiar, [[Home Assistant]] is kind of like a brain for your home in               |
| 01:24:16   | the same way that [[HomeKit]] is a brain for your home.                                               |
| 01:24:19   | So you might think, oh, these are competing products.                                             |
| 01:24:20   | It's one or the other.                                                                            |
| 01:24:21   | That's not true.                                                                                  |
| 01:24:22   | You can use them together.                                                                        |
| 01:24:23   | I am.                                                                                             |
| 01:24:24   | You could switch everything over to [[Home Assistant]] pretty much, but you don't have to.            |
| 01:24:29   | So I'm using both.                                                                                |
| 01:24:30   | So you can run [[Home Assistant]], it's, you can run it as something that you just download           |
| 01:24:36   | and install.                                                                                      |
| 01:24:37   | That's not the best way to do it.                                                                 |
| 01:24:39   | The best way to do it is to run it as an operating system, either in something called a Docker    |
| 01:24:42   | container, which is basically like a container with everything in it.                             |
| 01:24:46   | Or in my case, I bought a Raspberry Pi.                                                           |
| 01:24:49   | I bought a blue case for it because [[Home Assistant]]'s icon is blue.                                |
| 01:24:54   | And that is my [[Home Assistant]] setup, and it's just running on that.                               |
| 01:24:59   | And I actually went as far as to get a Zigbee dongle and a Z-Wave dongle, which means it's        |
| 01:25:05   | like a Hue or an Aqara or an IKEA hub.                                                            |
| 01:25:09   | And Z-Wave is the same thing, but for my Yale locks, which we'll get to in a little bit.          |
| 01:25:14   | But it can, so it can both read stuff in from [[HomeKit]] and it can also share stuff out to          |
| 01:25:19   | [[HomeKit]].                                                                                          |
| 01:25:21   | One thing that completely confused me to start with is when you're setting up the [[HomeKit]],        |
| 01:25:25   | you get a selection of device types, and so I was there going, oh, right, yeah, I want            |
| 01:25:29   | to share some thermostats I created, I'll get to that in a second, to [[HomeKit]].                    |
| 01:25:36   | So I clicked the temperature option, and I selected the device and it reshared my net             |
| 01:25:40   | atmosphere back.                                                                                  |
| 01:25:41   | I did not realise that these are inclusive statements, not exclusive statements.                  |
| 01:25:45   | So I don't have to say I'm going to share sensors and then share the thermostats.                 |
| 01:25:52   | I can not share any device types and I can just explicitly select the items that I want           |
| 01:25:57   | included, which is much, much easier because, yeah, I have it not sharing everything because      |
| 01:26:04   | otherwise I suddenly have all my Hue bulbs twice, and I don't need that.                          |
| 01:26:09   | That's completely unnecessary.                                                                    |
| 01:26:11   | But [[Home Assistant]] can let you do things like, for example, I have Netatmo sensors in some        |
| 01:26:17   | of my rooms.                                                                                      |
| 01:26:19   | So these are, in one case, I've got a wireless one, in the other case, I've got the Healthy       |
| 01:26:23   | Home Coach, which plugs in by micro USB, and they do temperature, humidity, air quality,          |
| 01:26:30   | volume, et cetera.                                                                                |
| 01:26:33   | And they're great.                                                                                |
| 01:26:34   | And I have paired the temperature sensor with this with my IKEA smart plug.                       |
| 01:26:39   | And that combined together is now a thermostat.                                                   |
| 01:26:42   | And I've set this up in [[Home Assistant]].                                                           |
| 01:26:44   | It's called a generic thermostat.                                                                 |
| 01:26:45   | I'll link to a specific piece of documentation, but it means I can say, hey, Apple lady, set      |
| 01:26:51   | the temperature in the bedroom to 21 degrees.                                                     |
| 01:26:54   | That's Celsius, by the way, for people getting very concerned that I'm trying to freeze           |
| 01:26:58   | myself to death.                                                                                  |
| 01:26:59   | I'm not.                                                                                          |
| 01:27:01   | And it will then turn on and off the heater in the bedroom to reach and maintain a temperature    |
| 01:27:07   | of 21 degrees.                                                                                    |
| 01:27:08   | And that's something that [[Home Assistant]] can do.                                                  |
| 01:27:10   | But in [[HomeKit]], that's pretty difficult to do.                                                    |
| 01:27:13   | You end up creating a whole bunch of automations, things don't necessarily work quite the way     |
| 01:27:16   | you expect.                                                                                       |
| 01:27:17   | But by creating a fake thermostat through [[Home Assistant]], [[Home Assistant]] is the one doing         |
| 01:27:23   | all the logic.                                                                                    |
| 01:27:24   | And it's the big brain in the back going, yep, turn on.                                           |
| 01:27:27   | Okay, we're good now.                                                                             |
| 01:27:28   | Turn off.                                                                                         |
| 01:27:29   | Yeah.                                                                                             |
| 01:27:30   | Turn on.                                                                                          |
| 01:27:31   | We're good.                                                                                       |
| 01:27:32   | Turn off.                                                                                         |
| 01:27:33   | And so it makes it easier to do things like my dishwasher.                                        |
| 01:27:36   | I have a dishwasher.                                                                              |
| 01:27:37   | The door opens at the end of the cycle, but stuff's still really, really hot from the cycle.      |
| 01:27:42   | And so instead, I have a, I actually bought a Xiaomi button because I was playing around          |
| 01:27:47   | with this stuff.                                                                                  |
| 01:27:48   | And I paired that to the Zigbee dongle.                                                           |
| 01:27:49   | And I paired an Aqara door sensor to the Zigbee dongle as well.                                   |
| 01:27:53   | And so I stuck the Aqara door sensor on my dishwasher.                                            |
| 01:27:56   | And the reason why I ended up with the button is because during the day, as I load my dishwasher, |
| 01:28:02   | I open and close the door.                                                                        |
| 01:28:03   | And I didn't want this to, I didn't want my automation to trigger just any time the               |
| 01:28:07   | door opens.                                                                                       |
| 01:28:08   | I specifically only wanted it to trigger when the door opens at the end of a washing cycle.       |
| 01:28:11   | Yeah.                                                                                             |
| 01:28:12   | So I got this button, I stuck it on my dishwasher.                                                |
| 01:28:17   | And now when I start my dishwasher, I press the go button on the dishwasher and I press           |
| 01:28:21   | the Xiaomi button that's stuck on the top of it.                                                  |
| 01:28:24   | And then when the door opens, it waits 10 minutes and then it sends me a notification             |
| 01:28:30   | to say, go out to the dishwasher.                                                                 |
| 01:28:32   | And that was really easy to do in [[Home Assistant]], but would have taken me a long time to do       |
| 01:28:36   | in [[HomeKit]].                                                                                       |
| 01:28:37   | Yeah.                                                                                             |
| 01:28:38   | Totally.                                                                                          |
| 01:28:39   | Yeah.                                                                                             |
| 01:28:40   | And funnily enough, so my dishwasher goes to little or something at the end of the cycle.         |
| 01:28:45   | I've noticed that on some of the longer cycles, that coincides exactly with when I get that       |
| 01:28:50   | push notification from [[Home Assistant]], which is pretty amazing.                                   |
| 01:28:55   | So it's working out for you.                                                                      |
| 01:28:56   | I mean,                                                                                           |
| 01:28:57   | It really is.                                                                                     |
| 01:28:58   | You should really write this up though, because I think the process of, you know, setting         |
| 01:29:01   | it up on a Raspberry Pi and everything, I think they're, this isn't something we can              |
| 01:29:05   | cover in a podcast, but I'd be fascinated to do, but I will say the [[Home Assistant]]                |
| 01:29:09   | documentation on their website is very good.                                                      |
| 01:29:12   | The only thing is, is you might need some extra plugins.                                          |
| 01:29:15   | So I will try and write this up.                                                                  |
| 01:29:16   | I might not get this done by the time the show comes out, but keep an eye on the RSS              |
| 01:29:19   | feed from my blog and you'll get a new version.                                                   |
| 01:29:24   | It's also simplified my washing machine and tumble dryer automations because I tried using        |
| 01:29:29   | vibration sensors and it kind of works for a dryer where it's just consistently, you              |
| 01:29:34   | know, rotating your clothes to dry them.                                                          |
| 01:29:37   | Yeah.                                                                                             |
| 01:29:38   | It works really well for a washing machine where it's got a filling cycle and a soaking           |
| 01:29:41   | cycle, all of which are stationary with the machines not moving at all.                           |
| 01:29:47   | And so I tried switching to Eve Smart Plugs for this and I had a push cut automation fired        |
| 01:29:52   | off by a button on the, on the machine.                                                           |
| 01:29:55   | So I pressed the button, it would send off a thing to push cut to say, Hey, she's starting        |
| 01:30:01   | a wash.                                                                                           |
| 01:30:02   | And then it would cycle through every five minutes or so and check the energy levels              |
| 01:30:06   | on the washing machine and the tumble dryer.                                                      |
| 01:30:09   | And I was using Eve Smart Plugs for this.                                                         |
| 01:30:12   | One Eve Smart Plug did not like being a tumble dryer plug David.                                  |
| 01:30:16   | So that one, it didn't die, it didn't kill my tumble dryer either, fortunately, but               |
| 01:30:20   | it was just cutting out at various times.                                                         |
| 01:30:23   | If I ran the dryer a couple of times a day, it just went, this is too much for me.                |
| 01:30:27   | I can't do this.                                                                                  |
| 01:30:29   | So I listened to it and I gave it a good retirement.                                              |
| 01:30:32   | It's not going to power some Christmas tree lights instead, because, you know, that that's        |
| 01:30:37   | going to be considerably lower effort for it.                                                     |
| 01:30:41   | And I did some digging on the home assistant forums, which are a wealth of information.           |
| 01:30:46   | And I found TP Link Kasa plug ins, Smart Plugs, sorry.                                            |
| 01:30:52   | They're also Wi-Fi and they do energy monitoring.                                                 |
| 01:30:54   | So I'm accomplishing the same things as I did with the Eve stuff, but they talk to the            |
| 01:31:01   | Kasa app.                                                                                         |
| 01:31:02   | They don't integrate with [[HomeKit]].                                                                |
| 01:31:04   | And you might think that this is a disadvantage, but for me, this is a huge advantage, because    |
| 01:31:08   | I only made this mistake once.                                                                    |
| 01:31:10   | I asked my HomePod to turn everything off.                                                       |
| 01:31:14   | It turned off the washer and the dryer, David, fortunately, neither machine was running at        |
| 01:31:18   | the time.                                                                                         |
| 01:31:19   | Otherwise, that could have been a significant problem.                                            |
| 01:31:22   | But you only make that kind of mistake once.                                                      |
| 01:31:25   | And so instead, I don't have these plugs to show up in [[HomeKit]] at all, because now I              |
| 01:31:30   | can ask Siri to turn on and off whatever I like.                                                  |
| 01:31:33   | And I don't need to worry about it turning off something that shouldn't be turned off.            |
| 01:31:37   | But these monitored energy usage, again, in [[Home Assistant]], and then when the energy usage        |
| 01:31:43   | drops on the machine, then it sends me a notification to go and empty it, which is wonderful.     |
| 01:31:49   | And I'm really pleased with that because that simplified things significantly.                    |
| 01:31:54   | And yeah, it makes my life much easier.                                                           |
| 01:31:56   | The actual cars, smart plugs that I'm using, I picked them up on eBay very cheaply because        |
| 01:32:02   | they were the ones specifically listed in the forums as people are doing this automation          |
| 01:32:05   | with them.                                                                                        |
| 01:32:06   | And I thought, let's not go off-piste here.                                                       |
| 01:32:10   | That sounds like a recipe for disaster.                                                           |
| 01:32:11   | TP-Link do have some new ones.                                                                    |
| 01:32:14   | I have one arriving.                                                                              |
| 01:32:15   | It should arrive today, but Amazon had a hiccup.                                                  |
| 01:32:17   | I think they accidentally left the parcel at the depot, David.                                    |
| 01:32:20   | So I couldn't get it here today and check that it does the same thing.                            |
| 01:32:24   | But there is a new one, which also does energy monitoring.                                        |
| 01:32:27   | If you're looking into this stuff, you're going to need one that can do energy monitoring         |
| 01:32:31   | because just knowing the machine is on or off won't really help you here.                         |
| 01:32:37   | So you'll need to get the energy amount.                                                          |
| 01:32:39   | But that's much easier.                                                                           |
| 01:32:41   | But honestly, David, the real reason why I dove into [[Home Assistant]] in the first place            |
| 01:32:46   | was the Z-Wave module and smart locks because I've kind of upgraded my home security.             |
| 01:32:52   | All right, so explain that.                                                                       |
| 01:32:54   | What are you doing with smart locks?                                                              |
| 01:32:56   | Well I got two.                                                                                   |
| 01:32:57   | I got a Yale Connectus L1 for the multi-point lock on my patio doors.                             |
| 01:33:02   | These are the doors I use most of the time.                                                       |
| 01:33:05   | And I got a Yale key list for my other door, and that's got a touch number pad on it.             |
| 01:33:11   | So you can type in the number.                                                                    |
| 01:33:12   | Both of them can use or do use NFC tags.                                                          |
| 01:33:15   | And you can pair the same NFC tag to multiple locks.                                              |
| 01:33:18   | So I just have one NFC fob on my hearing.                                                         |
| 01:33:20   | I've got one NFC fob in the little pouch that my keycard for my car stays in because it           |
| 01:33:26   | just works if I'm in the car.                                                                     |
| 01:33:28   | But the Yale stuff, you can buy a Z-Wave module to put inside of them.                            |
| 01:33:35   | And this, of course, costs extra.                                                                 |
| 01:33:37   | And I believe in the US, Yale actually have a home kit module, which you can put in there         |
| 01:33:43   | as part of their partnership.                                                                     |
| 01:33:44   | But then you have to buy their plug, their bridge to connect it.                                  |
| 01:33:50   | And this way, I just bought the Z-Wave modules.                                                   |
| 01:33:52   | I paired it to the Z-Wave dongle in [[Home Assistant]].                                               |
| 01:33:55   | And then I said, hey, and by the way, send these over to [[HomeKit]] as well, please.                 |
| 01:34:00   | And it works.                                                                                     |
| 01:34:02   | I can get home.                                                                                   |
| 01:34:03   | I get out of the car.                                                                             |
| 01:34:04   | I talk to my watch and say, open the patio door.                                                  |
| 01:34:06   | And it opens the patio door.                                                                      |
| 01:34:07   | And I just pull the handle down and I walk in.                                                    |
| 01:34:09   | Nice.                                                                                             |
| 01:34:10   | It's perfect.                                                                                     |
| 01:34:11   | And as an extra bonus, I set it up so that when I lock the door, it automatically closes          |
| 01:34:18   | the blinds inside because the blinds slide open and close, and they can also rotate.              |
| 01:34:24   | And so it just puts them back to the central closed position as well.                             |
| 01:34:30   | But then when I get home, the first thing that happens is the blinds automatically open,          |
| 01:34:35   | which is wonderful.                                                                               |
| 01:34:36   | I'm really pleased with this setup.                                                               |
| 01:34:37   | It works very well, I have to say.                                                                |
| 01:34:40   | I think [[Home Assistant]] is even more reliable than Homebridge.                                     |
| 01:34:43   | And I only had a couple of hiccups with Homebridge.                                               |
| 01:34:45   | And it was because I hadn't updated my Raspberry Pi and it desperately needed some updates.       |
| 01:34:50   | So I ran the updates and that's rock solid now as well.                                           |
| 01:34:53   | I'm really pleased with all of this.                                                              |
| 01:34:55   | I am extremely happy with my home automation setup right now.                                     |
| 01:35:00   | That does not mean I'm not going to change a bunch of things, but I am just very happy            |
| 01:35:02   | with it.                                                                                          |
| 01:35:03   | There's always room for improvement.                                                              |
| 01:35:05   | Oh yeah.                                                                                          |
| 01:35:06   | Yeah.                                                                                             |
| 01:35:07   | Well, I'm glad that you've got what you want and everything's working.                            |
| 01:35:13   | And I'm glad we took the time today to kind of go over things.                                    |
| 01:35:17   | Any like overall tips now that you've been implementing these things that you've kind             |
| 01:35:20   | of lessons you've learned along the way that might help people out?                               |
| 01:35:23   | Yeah.                                                                                             |
| 01:35:24   | Post-it notes, a Sharpie, a masking tape or painter's tape.                                       |
| 01:35:29   | All right.                                                                                        |
| 01:35:30   | Explain that.                                                                                     |
| 01:35:32   | So you go to IKEA and you buy 10 shortcut buttons or whatever, or you get in a car order          |
| 01:35:37   | come through with all of your stuff.                                                              |
| 01:35:40   | It's more efficient and more fun, quite frankly, to pair all of the devices and then go stick     |
| 01:35:45   | them in the right place and set them up later.                                                    |
| 01:35:47   | You do that and you're in for a world of hurt because there is nothing worse than sitting         |
| 01:35:51   | there and you've got 20 buttons sat in front of you and you no longer know which one is           |
| 01:35:54   | which.                                                                                            |
| 01:35:55   | Yeah.                                                                                             |
| 01:35:56   | So post-it note and a Sharpie to write down when it gets set up what its default name is          |
| 01:36:02   | and masking tape can help you in some cases.                                                      |
| 01:36:06   | For anything that plugs in, if you don't have your label printer handy, I hope you've got         |
| 01:36:10   | a label printer.                                                                                  |
| 01:36:11   | You've got a lot of things to label.                                                              |
| 01:36:12   | Do yourself a favor, label every single port on that ethernet switch with what it's connected     |
| 01:36:16   | to.                                                                                               |
| 01:36:17   | Also, buy some nice short ethernet cables so you don't have a meter and a half of unused          |
| 01:36:22   | cable hanging around there unnecessarily.                                                         |
| 01:36:25   | Some nice short colour-coded ethernet cables are your friend, but label all of the things.         |
| 01:36:30   | Anything that can move.                                                                           |
| 01:36:32   | If you've got children or pets, make sure everything can be labeled, whether or not               |
| 01:36:36   | it's supposed to move, because otherwise stuff will end up in places that you're not expecting.   |
| 01:36:43   | You can also use masking tape to stick door and window sensors in positions to try them           |
| 01:36:47   | out and check for your spouse or partner approval factor if they look at it and go,               |
| 01:36:53   | what have you done here?                                                                          |
| 01:36:54   | I hate the look of this.                                                                          |
| 01:36:56   | Yeah, yeah.                                                                                       |
| 01:36:57   | Healing masking tape or painters tape off of something is much easier than those three            |
| 01:37:00   | M pads.                                                                                           |
| 01:37:01   | Those three M pads go on, the Titanic ain't going to get them off.                                |
| 01:37:05   | Yeah.                                                                                             |
| 01:37:06   | So, if you think at all ever you may want to, I don't know, replace the battery or something,     |
| 01:37:15   | spend a little time at the start, White Spirit, Goo Gone, whatever, get those sticky pads that           |
| 01:37:20   | come stuck on the back of the devices off.                                                        |
| 01:37:22   | You do not want to use those by stock in Velcro sticky pads because then you can remove the       |
| 01:37:28   | button from wherever it is, make sure to leave a little screw hole or whatever it is that         |
| 01:37:33   | allows you to replace the battery available so that you can then replace the battery without      |
| 01:37:39   | having to try and peel all the sticky stuff off, which just makes an already annoying             |
| 01:37:43   | job more annoying because you're going to have to replace batteries, you're going to              |
| 01:37:48   | want to move stuff and the Velcro sticky pads will peel off and a little wipe down with           |
| 01:37:53   | some just general cleaning fluid will get any stickiness that they've left behind off             |
| 01:37:56   | as well, which is great.                                                                          |
| 01:38:00   | And speaking of replacing batteries, just buy them, like when you buy the device, buy             |
| 01:38:04   | some spare batteries right on the box or the packageing, what it's for, spare batteries            |
| 01:38:08   | for a car sensor, spare batteries for IKEA sensors, spare battery for IKEA blinds, spare          |
| 01:38:13   | battery for ring doorbells and cameras, whatever it is, just write it on there, label all things  |
| 01:38:20   | and then you've got extra batteries.                                                              |
| 01:38:22   | Now I don't have an extra battery for my ring doorbell because I have one ring doorbell.          |
| 01:38:26   | If I had six ring doorbells, I would have a spare battery, but I don't.                           |
| 01:38:31   | Yeah, those are my big tips because stuff, you're going to have to tweak and modify things,       |
| 01:38:36   | make it as easy as possible for you to do that and also when you're playing with stuff            |
| 01:38:40   | at the start, you will kill batteries really quickly.                                             |
| 01:38:42   | So if you've already got spares, you already know what the spares are for, then it's easy         |
| 01:38:46   | to just pull out a box of batteries and go, ah, these are the ones that say there for             |
| 01:38:49   | the IKEA sensors, perfect.                                                                        |
| 01:38:51   | These are CR2032s, Amazon them, as soon as they arrive, write down the CR2032s for the            |
| 01:38:57   | IKEA sensors and stick it back in the box.                                                        |
| 01:39:00   | It's much easier to really be ahead of this stuff, especially if you get a smart smoke            |
| 01:39:05   | detector and it takes a non-standard battery, hi, that's me, I bought a Xiaomi one.               |
| 01:39:10   | It's wonderful, I really love it, but it takes a non-standard battery.                            |
| 01:39:14   | I'm so grateful I've already got a spare because the day that starts beeping because it's running |
| 01:39:18   | out of battery, I can just replace it instead of living with the 3 AM.                            |
| 01:39:23   | Well, also, I think that just collecting that stuff, even just putting it in plastic baggies      |
| 01:39:29   | with a label, just make sure, do future you a favor with all of this stuff and just take          |
| 01:39:37   | a minute so it's a lot easier.                                                                    |
| 01:39:40   | And one bit of advice I'd add is, Rose and I have both obviously gone kind of overboard           |
| 01:39:45   | with this stuff, but we didn't start with all this stuff.                                         |
| 01:39:49   | We just kind of built it up.                                                                      |
| 01:39:50   | I mean, for me, this has been like a five-year journey and so I think you just start with         |
| 01:39:55   | a problem and find some automation to fix that and then see where it goes from there.             |
| 01:40:00   | But I find it really just amazing to be able to control the lights and have the robot vac         |
| 01:40:07   | clean the floor and all this stuff.                                                               |
| 01:40:08   | I just really find it nice.                                                                       |
| 01:40:11   | So it's something worth spending some time on.                                                    |
| 01:40:14   | Absolutely, yes, I agree.                                                                         |
| 01:40:17   | And you don't have to do all the things at once.                                                  |
| 01:40:19   | I know if you're thinking, oh gosh, 10-day shipping from China with these sensors, I'm            |
| 01:40:23   | just going to buy all of them at once.                                                            |
| 01:40:26   | I mean, buy one on Amazon, pay more money for it and get it tomorrow and see if it works          |
| 01:40:31   | the way you like, if it's the size that you like.                                                 |
| 01:40:34   | These sensors are pretty small, but you might still think, actually, I don't like the way         |
| 01:40:38   | that that sticks out on the door frame.                                                           |
| 01:40:41   | But the good news is you stuck it up on masking tape, right, because that's what I told you       |
| 01:40:44   | to do and you've only got one of them.                                                            |
| 01:40:49   | You haven't got 10 of the things.                                                                 |
| 01:40:50   | So it's very easy to deal with just having one, but yeah, this stuff is great.                    |
| 01:40:56   | Take a little bit of time.                                                                        |
| 01:40:58   | I have to say the automators forum is great.                                                      |
| 01:41:00   | There's also, if you are a Relay FM member, doubly so if you're a Relay FM Automators member         |
| 01:41:06   | because we love you.                                                                              |
| 01:41:07   | There is a great [[Discord]] server where people sit and chat.                                        |
| 01:41:11   | There is a home channel and you can go in there and talk home automation.                         |
| 01:41:16   | There are some wonderful people with amazing ideas in there and I'm not just talking about        |
| 01:41:20   | me.                                                                                               |
| 01:41:21   | I do pop in there from time to time, but there are lots of great people with things.              |
| 01:41:24   | There are people that have already got the Meross garage door opener and things like that.         |
| 01:41:27   | So if you want to ask questions, that's another great place to pop in and see because lots        |
| 01:41:32   | of people with lots of experience steal from the collective mind.                                 |
| 01:41:36   | We are the Borg in this case.                                                                     |
| 01:41:38   | Make sure you get that information.                                                               |
| 01:41:40   | Yeah, totally.                                                                                    |
| 01:41:41   | Well, I think that's a lot.                                                                       |
| 01:41:43   | It's a lot for home automation, but it's funny how much it's evolved for us since the last        |
| 01:41:48   | time we did one of these shows.                                                                   |
| 01:41:50   | It is.                                                                                            |
| 01:41:51   | Yeah.                                                                                             |
| 01:41:52   | I think it will still continue to evolve, but anything that you're looking forward                |
| 01:41:56   | to with iOS 15 and home automation?                                                               |
| 01:41:58   | I don't think they've really changed a huge amount aside from that limitation with the            |
| 01:42:04   | number of cameras, which always did feel a little bit nitpicky with the fact that it              |
| 01:42:10   | was just one, five cameras on the two terabyte option and one on the 200 gigabyte option.         |
| 01:42:17   | Unfortunately, they're just moving that down.                                                     |
| 01:42:19   | So it's five on the 200 gigabyte option and unlimited on the two terabyte option, which           |
| 01:42:23   | also means you're part of Apple One.                                                              |
| 01:42:26   | Then you'll get that, which is great.                                                             |
| 01:42:28   | So yeah, before we go actually though, David, we did get a question specifically about home       |
| 01:42:33   | automation for today.                                                                             |
| 01:42:34   | Okay.                                                                                             |
| 01:42:35   | And that's from Chris C. And I double checked.                                                    |
| 01:42:38   | He lives in an apartment here, so he can't go about replacing light switches.                     |
| 01:42:41   | But he said, if somebody was on a budget and wanted to automate their home lighting, what         |
| 01:42:45   | products would you recommend?                                                                     |
| 01:42:47   | And I think I'm probably going to have to say light bulbs, IKEA light bulbs, Aqara light          |
| 01:42:51   | bulbs, Meross light bulbs, Nanoleaf Essentials light bulbs, or IKEA ones probably are going       |
| 01:43:00   | to be the option, aside from the Nanoleaf, they're all going to need a hub.                      |
| 01:43:05   | But Nanoleaf, if you've got a HomePod Mini, should work because it's thread.                     |
| 01:43:09   | Yeah.                                                                                             |
| 01:43:10   | Yeah.                                                                                             |
| 01:43:11   | But I think that's the answer for him, isn't it?                                                  |
| 01:43:13   | I think that the light bulbs when they first came out were like $100 light bulb.                  |
| 01:43:18   | And that's just not true anymore.                                                                 |
| 01:43:19   | Now they're very affordable.                                                                      |
| 01:43:21   | So you just get a couple of them and try them.                                                    |
| 01:43:24   | But if you're going to do light bulbs and you're not going to be able to change switches,         |
| 01:43:28   | you're going to go crazy if people turn that switch off and then suddenly the light bulb          |
| 01:43:31   | isn't connected to power.                                                                         |
| 01:43:33   | So therefore none of your home automation stuff works.                                            |
| 01:43:35   | So this goes back to my masking tape tip of just tape the light switch so nobody can              |
| 01:43:40   | change it.                                                                                        |
| 01:43:41   | Or they do sell like little magnetic covers or yeah, yeah, they sell childproof covers            |
| 01:43:46   | for these things as well.                                                                         |
| 01:43:47   | So you can still get at it if you do need to flip it to say change the light bulb yourself.       |
| 01:43:51   | Yeah.                                                                                             |
| 01:43:52   | But you know that you won't get to it the rest of the time, which is pretty good.                 |
| 01:43:55   | Yeah.                                                                                             |
| 01:43:57   | And have a nice talk with your significant other before you do it and explain to them             |
| 01:44:02   | how it works and maybe even buy maybe some flick switches or some of these relatively             |
| 01:44:08   | inexpensive switches to put nearby the light switch because people, other people in your          |
| 01:44:13   | house are not going to understand that they need to pull their phone out of their pocket          |
| 01:44:16   | turn the lights off.                                                                              |
| 01:44:17   | No.                                                                                               |
| 01:44:18   | I have to say actually if you get the IKEA ones, IKEA sell three different kinds of remote        |
| 01:44:23   | controls now, but there's one that's just like there's a one and a zero on its binary.            |
| 01:44:29   | So you know, you can get that and it's just an up and a down.                                     |
| 01:44:33   | If you cover the regular light switch and put that right next to it or on top of it,              |
| 01:44:38   | that is incredibly obvious for people exactly what it does.                                       |
| 01:44:42   | That switch won't appear in home kit unlike the shortcuts button, but it will it's it's           |
| 01:44:47   | instantly recognisable to people.                                                                 |
| 01:44:49   | So I, you know, that's definitely a point in favor of IKEA because, you know, you're              |
| 01:44:55   | probably not going to want to buy loads of hubs.                                                  |
| 01:44:58   | It'll get to the point where it's hub city, also known as my TV unit, but yeah, it's worth        |
| 01:45:06   | looking into.                                                                                     |
| 01:45:07   | And from what I can tell from having a quick chat with Chris, because I happen to be in           |
| 01:45:10   | the discord when he asked this question, his wife is very on board with these things providing    |
| 01:45:15   | it works.                                                                                         |
| 01:45:16   | So I also recommend add some magic at a motion sensor or something so that when you walk          |
| 01:45:21   | into the room and it's dark, the lights turn on, don't use cameras as motion sensors because      |
| 01:45:26   | they look at if a pixel is changed and when lights turn off or turn off pixels change             |
| 01:45:33   | and that can slash will drive you crazy.                                                          |
| 01:45:35   | I've been there.                                                                                  |
| 01:45:36   | I made that mistake once never again.                                                             |
| 01:45:39   | Yeah.                                                                                             |
| 01:45:40   | And like Apple has promised like facial recognition with cameras and that's been there for like   |
| 01:45:46   | a year or two now.                                                                                |
| 01:45:47   | I honestly cannot get that to work.                                                               |
| 01:45:50   | I pointed a UV camera at the front door as you walk through the front door, it sees your          |
| 01:45:55   | face and I thought it wouldn't be cool if I could get it to recognise me and play my              |
| 01:46:00   | favourite playlist when I walk in the door and thus far that has not been reliable at              |
| 01:46:06   | all.                                                                                              |
| 01:46:07   | And maybe it's the camera.                                                                        |
| 01:46:08   | I mean, if I upgrade the camera, maybe that would do a better job, but that is like on            |
| 01:46:15   | my wish list of things to get better at, but I think that's just a software limitation            |
| 01:46:19   | at this point.                                                                                    |
| 01:46:20   | Yeah.                                                                                             |
| 01:46:21   | I think it is slowly improving.                                                                   |
| 01:46:23   | I am seeing improvements there, but at the same time it consistently fails to recognise           |
| 01:46:26   | me, but it can still recognise loads of pictures of me in photos.                                 |
| 01:46:29   | So I'm not quite sure what's going on there.                                                      |
| 01:46:32   | I have a feeling that something needs improving, but we'll see what later.                        |
| 01:46:35   | All right.                                                                                        |
| 01:46:36   | Well, there will be a later.                                                                      |
| 01:46:38   | We'll talk about this again.                                                                      |
| 01:46:40   | We've got those great forums over at Talk.Autominers.fm where you guys can talk about it.         |
| 01:46:44   | Like Rose said, and maybe you're so from now, we'll check in again, see what's new.               |
| 01:46:50   | But I am impressed, Rose, how far you've come with this, and this is the last time we've          |
| 01:46:55   | talked to you.                                                                                    |
| 01:46:56   | I might have gone a little bit mad, but I'm still trying to make it guest friendly.               |
| 01:46:58   | So if slash when I get guests again, hopefully more and more people are getting vaccinated.       |
| 01:47:06   | If people continue to be sensible, hopefully this global issue will be manageable in the          |
| 01:47:10   | not too distant future, and then I might actually be able to invite people over to stay for       |
| 01:47:15   | the night and get some feedback on how my home automation drives.                                 |
| 01:47:18   | I'm crazy.                                                                                        |
| 01:47:19   | Yeah.                                                                                             |
| 01:47:20   | Well, I spent money today, or I'm going to, and that's just the way it is.                        |
| 01:47:26   | Excellent.                                                                                        |
| 01:47:27   | Mission accomplished.                                                                             |
| 01:47:28   | I did look, I think the U.S. only sells the blackout blinds with the motors in them for           |
| 01:47:34   | IKEA.                                                                                             |
| 01:47:35   | So here's the thing, David, with IKEA, and this is a good tip actually for everybody              |
| 01:47:39   | looking on the IKEA website going, I thought that they sold this thing and I can't see            |
| 01:47:43   | it.                                                                                               |
| 01:47:44   | If you look on another country's website and it's there, that means IKEA still sell               |
| 01:47:47   | it.                                                                                               |
| 01:47:48   | They've removed it from that country's store though, because they currently don't have            |
| 01:47:52   | stock going to that country or in that country and they don't know when they're going to          |
| 01:47:55   | get it.                                                                                           |
| 01:47:56   | Interesting.                                                                                      |
| 01:47:57   | Well, I'll check back in a few months.                                                            |
| 01:47:58   | So they can completely remove it if they don't know when they're going to get it in               |
| 01:48:00   | stock.                                                                                            |
| 01:48:01   | Yeah.                                                                                             |
| 01:48:02   | If it's there and it says that it's currently out of stock, that means that they have a           |
| 01:48:05   | pretty good idea probably of when it's going to come because I found this with the shortcuts      |
| 01:48:09   | buttons.                                                                                          |
| 01:48:10   | They disappeared several times and I've done quite a bit of digging around and I got some         |
| 01:48:15   | various sources to dig around with the people at IKEA and the unofficial word is stuff gets       |
| 01:48:20   | removed from the website when they don't know when it's going to be restocked.                    |
| 01:48:23   | That doesn't mean it won't be restocked.                                                          |
| 01:48:24   | It just means that they currently don't have it and they did have a lot of stuff on the           |
| 01:48:28   | Ever Given which is completely messed up shipping around the world.                               |
| 01:48:32   | So stuff will probably come back.                                                                 |
| 01:48:35   | [[OmniFocus]]ed task, 45-day repeat, check IKEA for transparent blinds, motor blinds.                |
| 01:48:42   | I mean, they're not transparent.                                                                  |
| 01:48:43   | They're translucent.                                                                              |
| 01:48:44   | Well, all I need is I want the light to come through.                                             |
| 01:48:47   | Yeah.                                                                                             |
| 01:48:48   | Yeah.                                                                                             |
| 01:48:49   | They let light through.                                                                           |
| 01:48:50   | My mom has well those in her office.                                                              |
| 01:48:51   | I have one in my kitchen.                                                                         |
| 01:48:52   | They're brilliant.                                                                                |
| 01:48:53   | All right.                                                                                        |
| 01:48:54   | Well, apparently they're not available in the U.S. so I'll just have to wait.                     |
| 01:48:57   | Or come over and visit me and stick it in your suitcase on the way home.                          |
| 01:49:00   | Yeah, I'll just like come home and get like, look like I'm taking a sword home.                   |
| 01:49:04   | What is this in your suitcase and why does it look suspicious?                                    |
| 01:49:07   | It's a smart blind.                                                                               |
| 01:49:08   | Good luck explaining that one.                                                                    |
| 01:49:09   | That was a big problem in California when they opened up the Galaxy's Edge at Disneyland          |
| 01:49:14   | as long as people want to fly home with their lightsaber blades and it's like, how do you         |
| 01:49:18   | get that home?                                                                                    |
| 01:49:19   | Oh, God.                                                                                          |
| 01:49:20   | You know?                                                                                         |
| 01:49:21   | And Disney came up.                                                                               |
| 01:49:22   | Checked luggage is the answer.                                                                     |
| 01:49:23   | Well, they also have a Disneyland solution.                                                       |
| 01:49:24   | They'll ship it for you now so you don't have to like try and figure out how to get your          |
| 01:49:28   | lightsaber blade back on an airplane.                                                             |
| 01:49:31   | Well, that rounds out the show for today.                                                         |
| 01:49:34   | But before you go, I want to tell you quickly about two things.                                   |
| 01:49:38   | First of all is [[Roboism]].                                                                          |
| 01:49:39   | It's a great show here on [[Relay FM]] hosted by [[Alex Cox]] and [[Kathy Campbell]] who both guested         |
| 01:49:44   | on Automators before.                                                                             |
| 01:49:46   | They explore how artificial intelligence, machine learning and digital systems are affecting      |
| 01:49:50   | our culture.                                                                                      |
| 01:49:51   | Explore the humanity behind the box that are quickly becoming a part of our everyday life         |
| 01:49:55   | at relay.fm/roboism or search Roboism wherever you get your podcasts.                       |
| 01:50:02   | Also, this month, [[Relay FM]] is working on a fundraiser to raise money for St. Jude.                |
| 01:50:07   | Go to Relay FM slash St. Jude to learn more.                                                      |
| 01:50:10   | All right.                                                                                        |
| 01:50:11   | See you guys in a couple of weeks.                                                                |
| 01:50:14   | We are the Automators podcast.                                                                    |
| 01:50:15   | You can find us over at Relay.fm slash Automators.                                                |
| 01:50:19   | Thank you to our sponsors ExpressVPN, Technology Entangled and Privacy.                           |
| 01:50:24   | We'll see you in a couple of weeks.                                                               |
