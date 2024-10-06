---
status: "incomplete"
fc-date:
  year: 2024
  month: 02
  day: 09
fc-category: "podcast"
podcast: "Automators"
published: 2024-02-09
duration: 5837
formattedduration: "01:37:17"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Robert Spivack"]
notetype: "episode"
showpage: "http://relay.fm/automators/147"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators147.mp3"
episode: 147
title: "147: Smart Home Automation with Robert Spivack"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rosemary and David are joined by smart home guru Robert Spivack to talk about everything from HomeKit and Matter, to Thread and WiFi.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Robert Spivack]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 147 Discussion](https://talk.automators.fm/t/147-smart-home-automation-with-robert-spivack/17231)

# Sponsors
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post a job for free.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[Vitally (Sponsor)|Vitally]] - A new era for customer success productivity.

# Show Notes
- [Robert Spivack - DoItForMe Solutions](https://doitforme.solutions/)
- [Welcome Matter! | evehome.com](https://www.evehome.com/en/matter)
- [Presence Sensor FP2 - Aqara](https://www.aqara.com/en/product/presence-sensor-fp2/)
- [Smart Thermostats & Smart Home Devices | ecobee](https://www.ecobee.com/en-ca/)
- [Lutron Electronics, Inc. - Dimmers And Lighting Controls](https://www.lutron.com/europe/pages/default.aspx)
- [Smart lighting | Philips Hue](https://www.philips-hue.com/)
- [Eve | evehome.com](https://www.evehome.com/en)
- [Meross Offical Site, Smart House and Home Automation Device Provider.](https://www.meross.com/)
- [Electric Blinds | Smart Blinds | Battery Powered Blinds | Somfy](https://www.somfy.co.uk/products/electric-blinds)
- [Hunter Douglas Blinds Shades | Official Hunter Douglas Site](https://www.hunterdouglas.com/)
- [Motorized Shades - Affordable Smart & Electric Shades - IKEA](https://www.ikea.com/us/en/cat/electric-blinds-44531/)
- [Aqara Smart Curtain Controllers to Open/Close Your Curtains](https://www.aqara.com/en/product/curtain-controller/)
- [HomePass for HomeKit](https://homepass.app/)
- [Home+ 6 on the App Store](https://apps.apple.com/us/app/home-6/id995994352)
- [Controller for HomeKit](https://controllerforhomekit.com/)
- [WiFi Network Planning and Site Survey Software](https://www.netspotapp.com/)
- [DoItForMe.Solutions - YouTube](https://www.youtube.com/@DoItForMeSolutions)

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello and welcome to Automators, the podcast about grabbing your tech and encouraging it              |
| 00:07      | to do your bidding for you.                                                                            |
| 00:08      | My name is Rosemary Orchard and I'm joined as always by my pal David Sparks.                          |
| 00:12      | Hey David, how are you?                                                                                |
| 00:13      | I am great Rose, super happy to be here talking automation with you.                                    |
| 00:19      | I got my new Vision Pro over the weekend.                                                              |
| 00:22      | Oh, fancy.                                                                                             |
| 00:23      | Yeah.                                                                                                  |
| 00:24      | Yeah.                                                                                                  |
| 00:25      | I need time but we're going to do a show on automating with Vision Pro and so that's                   |
| 00:29      | coming up.                                                                                             |
| 00:30      | But in the meantime, we wanted to do a check in with [[HomeKit]] and one of my favourite people             |
| 00:35      | to talk about [[HomeKit]] with is Robert Spivack.                                                           |
| 00:38      | Welcome to the show Robert.                                                                            |
| 00:39      | Thank you.                                                                                             |
| 00:40      | It's a pleasure to be here.                                                                            |
| 00:41      | Now Robert, you and I have known each other like 10 years now.                                         |
| 00:44      | I think the first time I met you was during [[WWDC]] or Apple Macworld somewhere and you walked            |
| 00:52      | up to me and we hit it off.                                                                            |
| 00:53      | Robert is a consultant who sets up [[HomeKit]] and Home Automation sometimes for very fancy                |
| 01:02      | people and really knows this business inside out.                                                      |
| 01:06      | I feel like having the pro in once in a while just to talk about the state of home automation,         |
| 01:10      | what's working, what's not and how we as automators can take better use of it is a real good interview |
| 01:16      | once in a while.                                                                                       |
| 01:17      | Thanks Robert for coming in.                                                                           |
| 01:19      | Oh, absolutely.                                                                                        |
| 01:20      | I've dabbled in home automation from the days when I was just experimenting at home to working         |
| 01:27      | as a professional integrator and also I do a lot of educational work now consulting with               |
| 01:32      | clients, helping them understand what to do with their systems.                                        |
| 01:37      | You go back to like X10 days of memory serves.                                                         |
| 01:39      | You've been doing this for a long time.                                                                |
| 01:41      | Yes, way back to X10, Insteon, all the old stuff and went through quite a bit.                         |
| 01:50      | I've worked with some very large systems and really settled on the middle what we call                 |
| 01:55      | or I call the do it for me segment where a lot of folks want to do some of the work themselves         |
| 02:00      | or a lot of it and I just guide them and help them with as little or as much help as they              |
| 02:05      | want.                                                                                                  |
| 02:06      | Yeah, and we're going to put Robert's contact in the show.                                             |
| 02:09      | If you would like Robert's help, you can reach out to him and see if you can figure                    |
| 02:14      | that out, but Robert's going to help us all today, just updating us with the home automation.          |
| 02:20      | There's a lot to cover, but the first thing I would like to get into is just the overall               |
| 02:27      | philosophy of setting up home automation and doing it right.                                           |
| 02:31      | I think a lot of us stumble into this, we're like, well, I'll get a light switch and see               |
| 02:35      | how it goes.                                                                                           |
| 02:38      | You make the argument that you could bring a little bit more intention when you're setting             |
| 02:42      | this up.                                                                                               |
| 02:43      | Yes, if you want to avoid tearing your hair out and going crazy with all the challenges,               |
| 02:50      | if you approach it a little more professionally, even as you would work projects in your own           |
| 02:56      | normal professional life, I think it can really help.                                                  |
| 03:01      | For example, I really think if you set an objective of what you're trying to do, what                  |
| 03:06      | you want it to accomplish, it makes it a lot easier to look at products and look at devices            |
| 03:11      | and decide what you want or what you don't want by having criteria to compare them against.            |
| 03:17      | That makes a lot of sense.                                                                             |
| 03:20      | What I like to do is find the easy ways to eliminate things.                                           |
| 03:23      | If I'm looking at four or five different products or 10 different products, I look for the quick       |
| 03:28      | ways to knock them off the list and get it down to two or three.                                       |
| 03:32      | If you decide what you really want it to do, and by that, not technically, but from a final            |
| 03:37      | result, do you want your lights to be automatically turned on or off?                                  |
| 03:42      | Do you want things to happen on their own?                                                             |
| 03:45      | Do you want comfort?                                                                                   |
| 03:46      | Do you want entertainment?                                                                             |
| 03:48      | If you start with what you really want, and the best way to do that is to ask the people               |
| 03:52      | you live with because they're also part of the solution.                                               |
| 03:56      | Yes.                                                                                                   |
| 03:57      | Yeah.                                                                                                  |
| 03:58      | It's something that is really important to remember whenever you are looking into the                  |
| 04:03      | world of home automation, whether you are fully entrenched in it or if you're just sort                |
| 04:07      | of thinking about dipping your toe in the water, how do other people interact with your                |
| 04:12      | home?                                                                                                  |
| 04:13      | It's not necessarily even just the people you live with.                                               |
| 04:16      | Obviously, they are super important, but visitors and guests to your home, people who have             |
| 04:21      | to come in maybe, and I had to have my shower replaced a while ago because it broke.                   |
| 04:27      | I had to explain to the plumber because he got a bit confused because he walked into                   |
| 04:31      | the bathroom and the light turned on, and he said, wait, how did that happen?                          |
| 04:34      | I said, well, it's a smart light.                                                                      |
| 04:36      | It knows if somebody's in the bathroom and turns the light on and keeps the light on.                  |
| 04:40      | He was a bit confused by that, but remembering how other people interact with things is,               |
| 04:45      | I find really useful as a way to get started with a lot of these home automation things.               |
| 04:51      | Yeah.                                                                                                  |
| 04:52      | I'm probably between a dead horse, but if you have loved ones in your house and you                    |
| 04:57      | start changing the way the light switches work, that's a recipe to get yourself in a                   |
| 05:02      | lot of trouble.                                                                                        |
| 05:03      | One of the things I like to recommend is to think of two classes of uses yourself and                  |
| 05:09      | everybody else.                                                                                        |
| 05:11      | By that, for example, you could do a lot of things where devices now have single tap,                  |
| 05:16      | double tap, triple tap, 16 buttons, many variations.                                                   |
| 05:21      | What I like to do is make sure the simple obvious things are available for everyone.                   |
| 05:27      | If you go to a light switch, if you press, it goes on.                                                 |
| 05:29      | If you press, it goes off.                                                                             |
| 05:32      | You can put the double taps and the triple taps and the interesting things you want                    |
| 05:36      | to do and hide them and expect they'll be used mainly by yourself, but don't put critical              |
| 05:42      | functions as complicated sequences that others have to learn and remember.                             |
| 05:49      | That is the thing.                                                                                     |
| 05:50      | Things have to be intuitive when you want to interact with them, don't they?                           |
| 05:53      | If you press the button that's on the wall that you would expect to be the light switch,               |
| 05:58      | then you would expect the light to come on.                                                            |
| 06:01      | If it just doesn't do anything, that's going to be really confusing.                                   |
| 06:05      | If you go to press it and there's tape over it, well, I have encountered people and I'm                |
| 06:09      | not kidding.                                                                                           |
| 06:10      | He will peel the tape off to press the button and then get very confused that light still              |
| 06:15      | doesn't come on because the tape should have been a clue, but people will persist on doing             |
| 06:21      | the thing that is most logical to them.                                                                |
| 06:23      | But at the same time, home automation can be a great way of making something that currently            |
| 06:27      | doesn't seem like it works well in your home work better.                                              |
| 06:30      | I know that with smart lights, I've been able to put buttons in places where it wouldn't               |
| 06:35      | be easy or possible to put a light switch necessarily because it's like a little shelf                 |
| 06:41      | that's next to my sofa, but I can put a light switch on the shelf next to my sofa so that              |
| 06:46      | I can just press the button while I'm watching TV and it will toggle the lights.                       |
| 06:51      | And of course, I've got my phone and things, but my phone might be on charge across the                |
| 06:54      | room or in another room, so I've been able to add an extended functionality by adding                  |
| 07:00      | smart options as well.                                                                                 |
| 07:02      | I actually like the idea of hidden UI in home automation.                                              |
| 07:05      | I never really thought about it that way, but the way you explain it is like, yeah,                    |
| 07:10      | you can add cool home automation and just make sure that at the basic level, it doesn't                |
| 07:16      | change anything for the non-nerds in your house, but then add the additional levels                    |
| 07:22      | to it.                                                                                                 |
| 07:23      | An example that comes to my mind is the buttons.                                                       |
| 07:25      | I have a button next to my side table, and if I press it twice, the reading light comes                |
| 07:30      | on.                                                                                                    |
| 07:31      | If I hold it down, all the lights go off, but my wife just knows if she presses that                   |
| 07:35      | button, it turns the lights on in the room.                                                            |
| 07:37      | And she has no idea about the additional functions, and if I told her about it, she'd look at          |
| 07:41      | me like I'm crazy, but that's okay because she'll never know about it or try it.                       |
| 07:48      | And you can really take that to many different levels.                                                 |
| 07:51      | One of the things folks love are the LED light strips, the coloured strips or the colour tunable         |
| 07:58      | strips.                                                                                                |
| 07:59      | And when you start adding those, you don't have physical switches on the wall because                  |
| 08:04      | you're putting them under cabinets, on top of cabinets, behind devices.                                |
| 08:09      | So one of the things I like to do is tie them into automations in a way that if someone                |
| 08:15      | comes into the room and they press off on a normal light, and they're expecting to shut                |
| 08:20      | down the whole room, I also make sure it shuts off all those additional display lights or              |
| 08:27      | other lights.                                                                                          |
| 08:28      | So they don't have to go, how do I turn that off?                                                      |
| 08:30      | Where is the control for that?                                                                         |
| 08:31      | They don't have to pull out their phone or watch or learn something.                                   |
| 08:35      | They have a default mode of at least shutting everything off or turning everything on altogether.      |
| 08:41      | Yeah.                                                                                                  |
| 08:42      | And I think that makes a lot of sense as well because a lot of the time when you're dealing            |
| 08:47      | with, say, smart lighting, you actually want a way to control all of the lights in an area             |
| 08:54      | at once.                                                                                               |
| 08:55      | And the light switch or similar is a really sensible way to do that.                                   |
| 08:59      | I've done exactly what you just suggested there.                                                       |
| 09:01      | I have some, there are USB LED light strips under the counters, not under the counters,                |
| 09:10      | under the upper cabinets, that's it, in my kitchen.                                                    |
| 09:13      | And whenever I turn my kitchen light off, then they give you a couple of seconds just                  |
| 09:20      | to make sure in case you wanted to quickly grab a glass of water as you hit the light                  |
| 09:25      | switch and you turn the light off, it's like, oh, I wanted to grab that glass of water,                |
| 09:28      | but then they turn off as well.                                                                        |
| 09:30      | And I think that by figuring out what do I need to be able to control together is also                 |
| 09:37      | a really good starting point.                                                                          |
| 09:39      | And that kind of leads into the overall concept.                                                       |
| 09:42      | In a professional lighting design or a larger system, you want to think about the overall              |
| 09:48      | lighting in a room or an area rather than individual.                                                  |
| 09:52      | It's very rare to just flip a single light on or off.                                                  |
| 09:56      | In fact, if you counted up the number of lights in a larger home, there would be a                     |
| 10:00      | hundreds, you couldn't have rows of 30 or 40 switches on the wall.                                     |
| 10:05      | So you have to start thinking from the beginning of the overall scene or effect.                       |
| 10:11      | When you walk into a room, you want the count under counterlights to be on at a low level.             |
| 10:16      | You want some highlights above the counters that wall wash towards the ceiling or in cove              |
| 10:22      | lighting.                                                                                              |
| 10:23      | So you think about the overall lighting effects that you want.                                         |
| 10:28      | And then you divide it into a few modes.                                                               |
| 10:31      | Really in a sense, it matches focus modes.                                                             |
| 10:33      | Are you eating?                                                                                        |
| 10:35      | Are you cooking?                                                                                       |
| 10:36      | Are you cleaning up?                                                                                   |
| 10:37      | Are you relaxing?                                                                                      |
| 10:38      | And then the main physical controls change those modes rather than controlling individual              |
| 10:44      | lights.                                                                                                |
| 10:45      | Yeah, that makes perfect sense because, of course, you have to remember what is the functionality      |
| 10:51      | of a room.                                                                                             |
| 10:52      | It's really easy to be like, oh, I found these really cool, like they're sort of like panels           |
| 10:57      | and you stick them on the wall and they light up and they flash in rhythm with the music               |
| 11:01      | and things like that.                                                                                  |
| 11:02      | And it's like, great.                                                                                  |
| 11:04      | That's really cool for a demo of some really cool tech, but how are they going to fit into             |
| 11:09      | your life?                                                                                             |
| 11:11      | Are you constantly having home disco parties where you're going to have and want music to              |
| 11:15      | light up and sort of have a disco effect in your house?                                                |
| 11:19      | Or do you actually maybe need some kind of like glowing reminder on Tuesdays that it's                 |
| 11:26      | trash day and you need to take the rubbish outside or something like that?                             |
| 11:30      | So figuring out how you can make it functional and fit in with your life is really important.          |
| 11:35      | Yes.                                                                                                   |
| 11:36      | The example I would give is if you remember when we first got word processors and fonts                |
| 11:41      | and colours, everything looked like a ransom note.                                                      |
| 11:45      | That was the joke that anyone who doesn't know a designer built these documents with                   |
| 11:49      | 25 different fonts, all these different colours.                                                        |
| 11:52      | Well, home automation is really at that ransom note level where we're so excited with all              |
| 11:57      | the things we can do and all the different things that are possible that we get lost                   |
| 12:03      | in the fun of it rather than stepping back and looking at the final result of what we're               |
| 12:09      | trying to achieve, especially the impact on everyone else, not just ourselves.                         |
| 12:15      | Yes, definitely.                                                                                       |
| 12:17      | Along those lines, one of the areas that's overlooked is the aesthetics.                               |
| 12:23      | And I suggest to pay more attention to how things look.                                                |
| 12:26      | The physical controls, the physical devices, instead of buying six different types of light            |
| 12:33      | switches or dimmers because each one has a feature you like, compromise on functionality               |
| 12:40      | by picking one brand, one physical style.                                                              |
| 12:44      | So anywhere in your house, you see the same physical style of paddle or toggle or button.              |
| 12:51      | So you're starting to look at a visual integrity throughout your home, not just functionality.         |
| 12:57      | And wouldn't that technically be better as well?                                                       |
| 13:00      | Because when you've got different switches on different little mini boxes or different                 |
| 13:05      | Wi-Fi bandwidth, that that can also lead to headaches.                                                 |
| 13:10      | Yes, that simplifying the choice of devices can really increase the reliability.                       |
| 13:16      | On the other hand, you don't want everything from one company.                                         |
| 13:20      | If you diversify a little bit, you can have some systems that are isolated yet work together.          |
| 13:26      | And when one thing doesn't work, you don't lose everything.                                            |
| 13:29      | And that was the classic reason why a lot of people still do not like having hubs or                   |
| 13:34      | hub-based systems, even though [[HomeKit]] and everything else really requires a hub.                      |
| 13:40      | When the hub goes down, you lose a lot of control over everything.                                     |
| 13:45      | Yeah, but that is also where things like, for example, if you're looking at, say, Philips              |
| 13:50      | Hue lighting, you can get the Philips Hue remotes, which can sort of magnetise onto                    |
| 13:58      | a light switch or next to a light switch.                                                              |
| 14:00      | And those pair directly with the bulb.                                                                 |
| 14:02      | So even if the hub is offline, you still do have a way to control the lights.                          |
| 14:07      | But equally, if the hub is offline and therefore you can't connect with your devices, you have         |
| 14:12      | one thing to troubleshoot.                                                                             |
| 14:14      | If you have a whole bunch of, say, Wi-Fi connected devices or Bluetooth connected devices, then        |
| 14:20      | you've got a lot of potential points that you may need to go and troubleshoot if things                |
| 14:24      | aren't working right or aren't working at all.                                                         |
| 14:26      | Because there's so many things that could have gone wrong.                                             |
| 14:30      | It could be that the individual device has lost power, that it's not connecting and things             |
| 14:34      | like that.                                                                                             |
| 14:35      | So I'm personally a hub fan because I'd much rather have things talk to one dongle and                 |
| 14:40      | then that one dongle plugged into my internet network than have 50 Wi-Fi devices trying                |
| 14:47      | to talk over Wi-Fi to each other and inevitably not quite doing it right.                              |
| 14:52      | Yes.                                                                                                   |
| 14:53      | I'm a big fan of not using Wi-Fi as much as possible and using hubs or centralised                     |
| 15:00      | controllers.                                                                                           |
| 15:01      | But I just want people to be aware that once they do that, they are introducing a potential            |
| 15:05      | single point of failure that may not exist as they just bought a few Wi-Fi plugs and                   |
| 15:11      | devices and are just starting to get into growing into a larger system.                                |
| 15:16      | There's a trade-off.                                                                                   |
| 15:17      | The great thing is most physical lighting switches.                                                    |
| 15:20      | We've been talking about lighting, but there's a lot of other devices.                                 |
| 15:23      | But lighting switches all mostly will work even when the hub or the power of the network               |
| 15:29      | is down because they're physically wired, the switches that are wired into the wall.                   |
| 15:35      | But once you get beyond that to any other smart bulbs or smart devices, that is a strong               |
| 15:41      | consideration.                                                                                         |
| 15:43      | The other challenge I find is budget.                                                                  |
| 15:46      | We all want more than we can afford, whether we're a single person, a married couple, a                |
| 15:52      | luxury home, no one ever says, do everything, the checkbook is completely unlimited.                   |
| 15:58      | What I would suggest is a trade-off here.                                                              |
| 16:02      | If you standardise on one product, you're not going to be able to go get that latest                   |
| 16:06      | devices on sale for 20% off or $20 off or $50 off.                                                     |
| 16:13      | There's a discipline of saying, I've standardised.                                                     |
| 16:17      | I know it's not always going to be the least expensive.                                                |
| 16:21      | But what I like to look at is, especially I did this when I was doing it as a hobby,                   |
| 16:26      | is think that you were hired to work on your own house, your own system.                               |
| 16:31      | Put $20 in a jar every time you spend an hour fiddling with something.                                 |
| 16:37      | Or calculate what your hourly wage is as you spend the whole weekend reconfiguring your                |
| 16:43      | network or reconfiguring your home automation system.                                                  |
| 16:48      | What is the cost of you doing that work?                                                               |
| 16:51      | Yes.                                                                                                   |
| 16:52      | Now, apply that to the cost of the product.                                                            |
| 16:55      | If you buy a $20 [[Amazon]] special no-name light switch or you buy a $60 or $80 [[Lutron]] or you             |
| 17:03      | buy a $50 Eve plug instead of a $10 Meras or other one, if you spend three hours a month               |
| 17:12      | resetting it and rebooting it and fiddling with it because it never works right, how                   |
| 17:18      | have you really saved money?                                                                           |
| 17:20      | Yeah.                                                                                                  |
| 17:22      | This is definitely something that I think it's very easy to fall into the trap of starting             |
| 17:28      | out by buying the cheapest and messing with that.                                                      |
| 17:32      | Because often I find people who start by buying the cheapest thing have a really bad experience.       |
| 17:38      | Whereas people who start with something like Philips Hue lights or the [[Lutron]] Cassata stuff            |
| 17:42      | if you're in the US, they tend to have a much better experience because those companies,               |
| 17:48      | well, they're selling a hub, which means that they want you to buy a whole bunch of their              |
| 17:52      | devices.                                                                                               |
| 17:53      | Now, that doesn't mean to say that you have to start with a hub-based device, but starting             |
| 17:59      | with the cheapest thing, especially, and I'm going to put my own note in here, anything                |
| 18:04      | that says Tuya TYA or Smart Life, that's going to be a recipe for it's not going to work               |
| 18:12      | the way you expect it to with everything because Tuya is just a Chinese company who will sell          |
| 18:17      | their software to anybody and anybody can slap it on their device and one dehumidifier                 |
| 18:22      | doesn't work the same as the next dehumidifier, doesn't work the same as the next light bulb           |
| 18:26      | and so on and so forth.                                                                                |
| 18:28      | I definitely recommend people steer clear of those, but if you're looking for something                |
| 18:32      | to start with and you want to get a smart plug, it's worth looking at the physical form                |
| 18:38      | factor of the thing as well as what it can do, isn't it?                                               |
| 18:44      | And certainly, as [[Apple]] fans, we're used to paying a little more for quality and in some               |
| 18:49      | ways using [[HomeKit]] as a home automation system is self-selecting until recently and it still           |
| 18:57      | is.                                                                                                    |
| 18:58      | It's been difficult for a company to achieve [[HomeKit]] certification.                                    |
| 19:02      | Not only do they have to build the product, but they have to pay for a test lab to test                |
| 19:06      | it and put it through a lot of at least basic testing and compatibility.                               |
| 19:11      | So that ensures that anything with [[HomeKit]] and hopefully [[Matter]] Standard certification                 |
| 19:17      | now is a level of quality above the basics.                                                            |
| 19:21      | You can't just buy some chips, put them in a box and send it out the door and hope it                  |
| 19:25      | works.                                                                                                 |
| 19:26      | There's more to it.                                                                                    |
| 19:28      | And I would add about that cost element because a good example for me is [[Lutron]] Casetta because        |
| 19:35      | I struggled with smart lights.                                                                         |
| 19:37      | I tried the Hue route and in the early days, it was misery because your family would turn              |
| 19:43      | off the switch and then all the automation would stop and it was expensive to buy all                  |
| 19:47      | these bulbs, especially in the early days and it was obvious to me once I got my first                 |
| 19:53      | [[Lutron]] Casetta that this is the solution for my house because the family can use them,                 |
| 19:58      | no problem.                                                                                            |
| 19:59      | I don't have to replace each individual bulb and they are just dead on reliable and they've            |
| 20:05      | been that way for me since the beginning.                                                              |
| 20:06      | In fact, I think, Robert, you're the person who told me to try it, but they were expensive.            |
| 20:12      | They were like, I think it was like $80 when I bought my first one that included a hub.                |
| 20:17      | And what I did was about every month or two, when I wanted to spend money on something                 |
| 20:22      | dumb and we all do that, right, you get the bug like, I want to buy myself something.                  |
| 20:27      | And over the course of about 18 months, I replaced every switch in the house that I                    |
| 20:32      | needed.                                                                                                |
| 20:33      | I don't really want to think about how much money I ultimately spent on [[Lutron]] switches,               |
| 20:38      | but I would guess it's probably $300 or $400 total.                                                    |
| 20:41      | And that was five, six years ago and they're awesome and they still work.                              |
| 20:47      | And when I hear a noise in the house at night, I push a button and the entire house lights             |
| 20:50      | up and when I come home, I can light up just the lights in the stairwell in the kitchen.               |
| 20:56      | Like they give me all the home automation stuff I need, but I never would have spent                   |
| 21:02      | $300 or $400 to set them up, but I would do it over time.                                              |
| 21:07      | I think doing things over time as well, it's smart, you know, it's really tempting to just             |
| 21:11      | dive in and start from scratch and be like, cool, clean slate, I'm going to do everything.             |
| 21:17      | But at the same time, by doing things slowly, you know, starting with one room, like say               |
| 21:23      | your office or similar, if you work from home and you have an office or, you know, a room              |
| 21:28      | that's perhaps primarily utilised by the tech nerd of the home.                                        |
| 21:32      | And I'm working out from there, then that gives you a bit of time to iron out the kinks                |
| 21:36      | in the system, right, and fix the bugs, which you will inevitably have, it doesn't matter              |
| 21:41      | how great the hardware is and how perfect your setup is, you will find an unexpected                   |
| 21:47      | human behaviour that you have to then account for in your actual solution to things.                    |
| 21:54      | So I personally like the, I'm going to start here, I'm going to try this.                              |
| 21:58      | Okay, cool.                                                                                            |
| 21:59      | That's working.                                                                                        |
| 22:00      | Let's roll it out somewhere a bit more utilised and so on and so forth so that you can, you            |
| 22:04      | know, get everything started on a nice even surface where you're not, you know, you're                 |
| 22:11      | not part of the way through installing your 15th light switch at the weekend when suddenly             |
| 22:15      | you have to go and deal with like a thing and then there's, you know, some of the lights               |
| 22:18      | are done, some of the lights aren't done, but you didn't really have a list because                    |
| 22:21      | you were just working through it and now you don't know what's not done.                               |
| 22:25      | Right.                                                                                                 |
| 22:26      | And what I like to do, especially with in my own home and in advising other people is                  |
| 22:32      | if you're not building an entire new house or not trying to design a system for an entire              |
| 22:37      | house, I like to go with a pain based solution.                                                        |
| 22:41      | What I mean is do things that you have a problem with now, you see a real need, you want to            |
| 22:48      | fix a problem, you're getting terrible sound out of your TV.                                           |
| 22:52      | So you want to look at maybe using a sound bar, maybe using a pair of HomePods, maybe                 |
| 22:57      | using Sonos.                                                                                           |
| 22:59      | You have an objective you want that's going to improve and be measurably better when you're            |
| 23:04      | done.                                                                                                  |
| 23:05      | You're not just fiddling if you have lights that you have a light in the pantry recently,              |
| 23:10      | we have a little pantry and we have people, guests, visitors and they open and close the               |
| 23:15      | pantry.                                                                                                |
| 23:16      | Hey Joe, get this pasta out for us or we're cooking together and the light stays on.                   |
| 23:21      | It bothered me after three years, I put a motion sensor in the pantry and I replaced                   |
| 23:26      | the dimmer on the wall with a smart dimmer.                                                            |
| 23:29      | So now the door opens and closes and the lights just go on and off and they never have to              |
| 23:33      | get annoyed or upset the lights left on.                                                               |
| 23:37      | I think that that is a really good idea.                                                               |
| 23:40      | One of the things that I did is when I moved into my place, I did kind of go all out.                  |
| 23:45      | I put hue bulbs in everywhere and then I put the hue dimmers on the wall so that I could               |
| 23:50      | use them like normal lights as well.                                                                   |
| 23:52      | But after I did that, I realised after a while that there were two rooms that I hadn't done            |
| 23:57      | that in because they didn't take normal bulbs and they were bugging me.                                |
| 24:01      | And it took me a month or two to realise, you know what, the bathroom light and the kitchen            |
| 24:05      | light not turning out when I press the button by the bed that's like, I'm going to sleep               |
| 24:10      | now, turn out all the lights please, that's bugging me.                                                |
| 24:13      | I'm going to fix that and I got some people in to sort that because over here in the UK                |
| 24:19      | messing with electrics in the kitchen, the bathroom needs an electrician for that sort                 |
| 24:23      | of stuff.                                                                                              |
| 24:24      | But it's worth seeing what is bothering you.                                                           |
| 24:28      | Is it that there is something plugged in in a really awkward to access place and you                   |
| 24:34      | don't want it on all the time but there's no switch on the device itself?                              |
| 24:38      | Maybe a smart plug is the solution for that.                                                           |
| 24:41      | But you know, it's amazing how far home automation has come because there's so much more than          |
| 24:44      | just smart plugs and lights now, isn't there?                                                          |
| 24:48      | Absolutely.                                                                                            |
| 24:49      | And it's important to not feel guilty of not doing everything.                                         |
| 24:54      | I have a problem with our garage where I wanted to know if the door was left open.                     |
| 25:00      | I didn't want an automated garage door opener and there have been lots of issues and the               |
| 25:05      | issues have cropped up again with integration with home kept being dropped in problems.                |
| 25:10      | But for me, I don't need to open and close the door remotely.                                          |
| 25:14      | I can do that with the home link traditional setup built into my car.                                  |
| 25:18      | But I want to know if the door was shut.                                                               |
| 25:20      | So the solution I did was I put a camera in the garage facing the door so there's no privacy           |
| 25:27      | concerns and now I can visually confirm and that's the only thing I will trust if the                  |
| 25:32      | door is open or closed.                                                                                |
| 25:34      | And along with that, it is nice to have a signal and indicator somewhat open or closed                 |
| 25:41      | the door.                                                                                              |
| 25:42      | So I use a door and window sensor.                                                                     |
| 25:44      | I'd like to claim credit, but I saw this online years ago, you take a door window sensor               |
| 25:49      | and you put it on a large hinge, like a four inch hinge and you attach the hinge to your               |
| 25:56      | garage door.                                                                                           |
| 25:57      | So as the door goes up, gravity, the hinge swings away and breaks the connection with                  |
| 26:03      | the magnet on the sensor.                                                                              |
| 26:05      | It's a simple way to have a wireless sensor for your garage door without going into a                  |
| 26:10      | complete garage door opener closer with the sensors and the wires and everything needed                |
| 26:17      | to get that going unless you want that, unless you need the automatic open and close.                  |
| 26:25      | This episode of Automators is brought to you by LinkedIn Jobs.                                         |
| 26:28      | When you're hiring for your small business, you want to find quality professionals that                |
| 26:31      | are right for the role.                                                                                |
| 26:32      | That's why you have to check out LinkedIn Jobs.                                                        |
| 26:34      | LinkedIn Jobs has the tools to help you find the right professionals for your team faster              |
| 26:38      | and for free.                                                                                          |
| 26:40      | Whenever we've hired somebody new at work or I've been looking for a new job, I've                     |
| 26:45      | found that where the best thing to do is to actually dive into a person's history and                  |
| 26:49      | find out exactly what skills they've got which transferable it's for our team.                         |
| 26:55      | LinkedIn isn't just another job board.                                                                 |
| 26:56      | It has a vast network of more than a billion professionals, which makes it the best place              |
| 26:59      | to hire.                                                                                               |
| 27:00      | Hiring is easy when you have that many quality candidates.                                             |
| 27:03      | So easy, in fact, that 86% of small businesses get a qualified candidate within 24 hours.              |
| 27:09      | LinkedIn also knows small businesses are wearing so many hats and might not have the time or           |
| 27:12      | resources to hire.                                                                                     |
| 27:14      | That's why they're constantly finding ways to make the process easier.                                 |
| 27:17      | They even just launched a feature that helps you write job descriptions making the process             |
| 27:20      | even easier and quicker.                                                                               |
| 27:22      | It's easy to see why 2.5 million small businesses use LinkedIn for hiring.                             |
| 27:26      | Post your job for free at linkedin.com/automators.                                               |
| 27:31      | That's linkedin.com/automators to post your job for free, terms and conditions apply.            |
| 27:36      | Okay, so Robert, let's talk about, let's go global a little bit.                                       |
| 27:43      | We're here in 2024.                                                                                    |
| 27:44      | A lot of people are hearing this word [[Matter]].                                                          |
| 27:46      | They're not really sure what it means.                                                                 |
| 27:48      | We've got [[HomeKit]], [[Home Assistant]], Google Home, all these different platforms.                         |
| 27:53      | Can you kind of draw a picture for us of what's going on?                                              |
| 27:58      | Once you get beyond one or two smart plugs or smart devices, you need a system to pull                 |
| 28:03      | it all together.                                                                                       |
| 28:05      | And there's really a few key things that a hub or controller provide.                                  |
| 28:10      | One is remote access, the ability to access everything in your home when you're not home.              |
| 28:16      | It provides the gateway, the communications path.                                                      |
| 28:19      | So if you're traveling, if you want to turn the heating or air conditioning on when you're             |
| 28:23      | away, if you want to shut the lights down, you want to check security, you want to be                  |
| 28:28      | able to do that when you're not home.                                                                  |
| 28:30      | So that immediately in [[HomeKit]] that the [[HomeKit]] hub or controller provides that and the [[HomeKit]]        |
| 28:36      | hub is an [[Apple TV]] or a HomePod in systems like Google or [[Amazon]], their apps do that                   |
| 28:44      | through their cloud, their apps do that through their cloud infrastructure and in more advanced        |
| 28:50      | hobbyist and prosumer devices like [[Home Assistant]] or Hubitat, the hub itself either provides           |
| 28:58      | it or has an add-on capability for remote access.                                                      |
| 29:02      | So the first thing you want to do in looking at a bigger system is really choosing, if                 |
| 29:07      | you want to be organised and not go crazy, choosing one main system to be the heart,                   |
| 29:13      | whether it's [[HomeKit\|Apple HomeKit]] or Google or [[Amazon]] or [[Home Assistant]].                                      |
| 29:17      | My main system, that is a system you first connect everything to when you get a new product.           |
| 29:24      | You may also connect it to others, but that's going to be your primary.                                |
| 29:28      | That's where you want it to work reliably.                                                             |
| 29:31      | That's where you want your most control to be and then you may link it into other systems.             |
| 29:37      | So it's kind of like the backbone where everything else is linking out from that spine to connect      |
| 29:43      | to things, but there is a central place where everything is tied in.                                   |
| 29:47      | Yes, and it's somewhat technical, but it's also organisational.                                        |
| 29:52      | You could have three or four different hub or systems that have lights on one and security             |
| 29:57      | on the other and cameras on another, but you're going to drive yourself crazy.                         |
| 30:01      | So wherever possible, I recommend designating one primary system and only going to the other           |
| 30:07      | systems when you have unmet needs or capabilities that you want done by them.                          |
| 30:14      | I'll give an example.                                                                                  |
| 30:17      | In my home, I use [[Amazon]] devices for voice control.                                                    |
| 30:21      | Historically, I started with them first before [[Apple]] and Siri had [[HomeKit]] and did much,                |
| 30:28      | but even today, I don't rely on Siri and HomePods and voice.                                           |
| 30:33      | I do rely on [[Apple]] as the controller, but I rely on [[Amazon]] for the voice.                              |
| 30:41      | So I've made my complexity a little simpler because I only have to worry about voice access            |
| 30:47      | from the [[Amazon]] ecosystem.                                                                             |
| 30:49      | I don't care about using the app.                                                                      |
| 30:51      | I don't care about using anything else they provide to control things.                                 |
| 30:54      | I only care about, can I use my voice to turn things on or off in my home that way?                    |
| 31:02      | Everything else is centric in [[HomeKit]], and then I use [[Home Assistant]] and a few other                   |
| 31:08      | things as experimental or supplemental.                                                                |
| 31:12      | I want really advanced automations, or if I want to do things or bring devices in that                 |
| 31:17      | I simply can't bring in, I do it that way.                                                             |
| 31:21      | Yes, that makes a lot of sense to me because it really depends on what it is that ends                 |
| 31:27      | up feeling natural.                                                                                    |
| 31:29      | For some people, they started with [[Amazon\|Amazon's]] voice assistant, which I'm not going to say                |
| 31:33      | the name of in case I trigger it for everybody.                                                        |
| 31:37      | They started with that because that was one of the first things around, or maybe they had              |
| 31:42      | some Google Homes or something.                                                                        |
| 31:44      | And so, yeah, if you've already got those devices and they're okay, they're working                    |
| 31:48      | for you, then upgrading to Home Pods everywhere or even HomePod Minis everywhere could be a            |
| 31:54      | very expensive endeavour.                                                                               |
| 31:56      | You mentioned earlier about starting with the pain points.                                             |
| 32:01      | If those things are working for you and your family, your home is working with them, then              |
| 32:07      | there's no reason to throw them away and start over unless there is something specific                 |
| 32:13      | about them that's bothering you.                                                                       |
| 32:15      | I certainly agree, [[Home Assistant]] is so good for putting things together that don't otherwise          |
| 32:20      | necessarily go together in the way that you would want.                                                |
| 32:25      | For quite a while, I had a smart dehumidifier because we have a little bit of a humidity               |
| 32:30      | problem in the UK indoors, so usually, well, at least my family has always had dehumidifiers           |
| 32:36      | to try and help control that.                                                                          |
| 32:37      | So I had a smart plug and a humidity sensor connected together through [[Home Assistant]] to               |
| 32:44      | make a smart dehumidifier, which wouldn't have been possible with the other systems.                   |
| 32:49      | And that was one of the things that ended up bringing me more towards [[Home Assistant]].                  |
| 32:54      | But I started predominantly with [[HomeKit]], which worked very well for me until I needed                 |
| 32:58      | more.                                                                                                  |
| 32:59      | Yes.                                                                                                   |
| 33:00      | And the nice thing is those kinds of automations are hidden or invisible.                              |
| 33:04      | So the fact that you set it up with [[Home Assistant]] or even with some other system, the rest            |
| 33:10      | of the people in the house don't have to know that.                                                    |
| 33:12      | It just works.                                                                                         |
| 33:13      | Exactly.                                                                                               |
| 33:14      | But the great thing now is we're in a period of confusion, but we're in a period of growth.            |
| 33:20      | Until now, if you bought [[Apple]] products, you had to use [[HomeKit]].                                       |
| 33:26      | If you bought a Google smart speaker, you had to have products that ran with Google.                   |
| 33:30      | Each ecosystem was isolated.                                                                           |
| 33:35      | Over time, the manufacturer's brute force made their products work with more than one.                 |
| 33:41      | So very often, you'd pick up a device and it said, works with [[HomeKit]], works with Google,              |
| 33:46      | works with [[Amazon]].                                                                                     |
| 33:48      | But they had to go through three times the effort to do that.                                          |
| 33:52      | And they didn't always work the same with each of these different systems.                             |
| 33:56      | Now euphemistically, we call that, and it's not just home automations with everything.                 |
| 34:02      | It's called a walled garden.                                                                           |
| 34:04      | But I've always called it a walled prison because it really restricts you and controls                 |
| 34:09      | what you can do against your own will.                                                                 |
| 34:13      | I was just going to say, I definitely agree.                                                           |
| 34:14      | I've seen people purchase like a smart switch or something, and then they can get access               |
| 34:20      | to the power usage and so on through the [[Amazon]] system or through the Google system or through         |
| 34:29      | the app for the device, but they can't get access to that through [[HomeKit]] because it's                 |
| 34:32      | just not available there.                                                                              |
| 34:34      | And that's very frustrating for people who want to use this sort of thing with [[HomeKit]].                |
| 34:38      | So it sounds like you're telling us something is changing there.                                       |
| 34:43      | Yes, the new [[Matter]] standard, which is a consortium, you can go through all the technical details,     |
| 34:50      | but it's basically a combination of the biggest manufacturers all realising no one of them             |
| 34:55      | can rule the consumer market.                                                                          |
| 34:58      | So they all agreed in sort of a detente to work together.                                              |
| 35:02      | They contributed both technology and market presence and availability so that going forward,           |
| 35:10      | there'll be one set of standards for connecting devices.                                               |
| 35:14      | But I really like to put it in perspective.                                                            |
| 35:17      | [[Matter]] is a case of is the glass half empty or is the glass half full?                                 |
| 35:22      | If you look at all the promises of everything great it's going to do, we're still waiting              |
| 35:28      | for a lot of that to happen.                                                                           |
| 35:30      | But if you look at the basics at the very basic level, it's succeeding in doing two                    |
| 35:34      | things.                                                                                                |
| 35:35      | It's succeeding in providing a basic connectivity where a product will work with all of these          |
| 35:43      | ecosystems at a basic level of functionality.                                                          |
| 35:47      | So if you buy a new smart plug and it says it's [[Matter]] compatible, that's all you have                 |
| 35:53      | to worry about, whether you're Google, [[Amazon]], [[HomeKit]], [[Home Assistant]] or others, it will              |
| 35:59      | work at a reasonable level with all of them.                                                           |
| 36:03      | And that's a major accomplishment because until now you had to really buy the product                  |
| 36:08      | for the system you own.                                                                                |
| 36:11      | The second benefit, which is sometimes overlooked or not, is it provides one programming model         |
| 36:20      | for the manufacturers and creators of the products.                                                    |
| 36:23      | They now have to provide a [[Matter]] interface, a [[Matter]] driver, [[Matter]] software and they're              |
| 36:30      | done.                                                                                                  |
| 36:31      | They can now build that product and it will work with all of these different systems.                  |
| 36:37      | So there's a cost and efficiency benefit.                                                              |
| 36:40      | Now in the short term, we're seeing a negative and the pundits are saying there's now a                |
| 36:45      | race to the bottom where there's no difference between all these products and therefore a              |
| 36:50      | $50 smart plug and a $10 smart plug, they're all the same.                                             |
| 36:55      | Now that's really not true, but it's very confusing.                                                   |
| 37:00      | We haven't seen the market or the products figure out how to be a standardised product                 |
| 37:06      | while still having added value.                                                                        |
| 37:09      | There's a few companies doing that very well, but a lot of others are just racing to slap              |
| 37:15      | the [[Matter]] label on their product and they haven't thought about it so they're dropping                |
| 37:19      | their prices.                                                                                          |
| 37:22      | So what are the ways that these products distinguish themselves?                                       |
| 37:25      | So a great example is the EVE line of products.                                                        |
| 37:28      | They started with [[HomeKit]] only products and by adding [[Matter]] support, they're now able                 |
| 37:33      | to work with a wider variety of systems, but they've always had very high reliability to               |
| 37:40      | the hardware and added features in the plugs that EVE provides.                                        |
| 37:45      | They provide power monitoring and power management.                                                    |
| 37:48      | So you can see the usage, how much electricity a product plugged in is using.                          |
| 37:54      | If you want to monitor how much is your TV using or an air conditioner or other devices                |
| 37:59      | if they meet the amp load, you can get all that information.                                           |
| 38:04      | The downside today is you still have to go to their app or any manufacturer's app for                  |
| 38:10      | this added value.                                                                                      |
| 38:12      | So the thought that [[Matter]] would eliminate all these apps and eliminate having to have                 |
| 38:18      | different apps for different products is not completely true.                                          |
| 38:22      | If you want the extra features, you still have to go to the manufacturer's app.                        |
| 38:27      | Similarly, with security cameras or with many other products, most of the added features               |
| 38:33      | are still controlled or only accessible through the manufacturer's app.                                |
| 38:39      | But that's something that is hopefully at least a matter of time, isn't it?                            |
| 38:44      | Because by having a standard for these things, that means that if Elgato EVE have power monitoring,    |
| 38:52      | then they can expose that information to other systems like [[HomeKit]] in the same way that               |
| 38:59      | a Philips smart plug would be able to, I don't think the Philips one does smart monitoring,            |
| 39:03      | but if it did, then that's how it could expose that.                                                   |
| 39:08      | And then they would be able to do that in the same way, which will hopefully make it                   |
| 39:11      | easier for [[Apple]] with [[HomeKit]] and [[Amazon]] with their system and Google with the home                    |
| 39:20      | system to actually read this data in instead of having to do a, well, here is a list of                |
| 39:25      | 68 different thousands, different possible properties you could pass to us.                            |
| 39:31      | Please be nice.                                                                                        |
| 39:32      | Please actually put the numbers in the number boxes and the text in the text boxes instead             |
| 39:36      | of vice versa, because that will make things not work very well.                                       |
| 39:39      | So hopefully by having standards for this, I know the matcher standard is still quite                  |
| 39:45      | early.                                                                                                 |
| 39:46      | I think at the moment they're still working on locks or locks have only just come in.                  |
| 39:49      | I can't remember exactly where locks are within the matcher standard right now, because that's         |
| 39:53      | the sort of one that I've been eyeballing.                                                             |
| 39:56      | But by having standard, a unifying standard that everybody is working towards and with                 |
| 40:06      | then hopefully we can actually get to the point where somebody can say, okay, so this                  |
| 40:10      | is the wattage and the amperage and the voltage and summing all that together.                         |
| 40:17      | That means this and so on and so forth.                                                                |
| 40:20      | So I'm hoping that this is going to be great for everybody.                                            |
| 40:25      | One thing I'd like to remind folks is it's not a bad thing.                                            |
| 40:29      | The worst case with [[Matter]] or other standards is it's no worse than what we have now, but              |
| 40:35      | the upside, this potential, as you mentioned, for getting more features standardised, more             |
| 40:39      | capability available is a good thing.                                                                  |
| 40:43      | So we can't look at it as it's only been out a year or two.                                            |
| 40:47      | It's already a failure.                                                                                |
| 40:48      | No, it's still growing.                                                                                |
| 40:49      | It may take three, four, five years to get to where we want it to be.                                  |
| 40:53      | But it's a subtle issue also.                                                                          |
| 40:57      | A lot of the features we want that are in the device can be used from the existing ecosystems.         |
| 41:03      | If you take a motion sensor and you go into the app for the motion sensor, for example,                |
| 41:10      | the [[Aqara Presence Sensor#FP2\|Aqara FP2]], which uses radar-type technology, micro-millimetre wave[^1], you can go into the            |
| 41:19      | app and set zones and set a lot of advanced features, but you don't need to deal with                  |
| 41:26      | that in [[HomeKit]].                                                                                       |
| 41:28      | When you go into [[HomeKit]], you simply have a trigger saying, if this motion happened,                   |
| 41:33      | do something else.                                                                                     |
| 41:34      | Now that motion might be just a small area of one room because you program that in the                 |
| 41:41      | device itself.                                                                                         |
| 41:42      | So you get the benefits of advanced features, even though all those features don't map directly        |
| 41:49      | into functionality in [[HomeKit]] or in Google or even [[Home Assistant]] today.                               |
| 41:56      | You can still take advantage of it.                                                                    |
| 41:57      | So I wouldn't shy away from these newer technologies.                                                  |
| 42:01      | Just be aware that Rome wasn't built in a day.                                                         |
| 42:04      | So give it time, and as features become popular, the standards will incorporate them and raise         |
| 42:11      | the level of function that is considered standard.                                                     |
| 42:16      | So something actually is offering matcher support now.                                                 |
| 42:18      | Not if they're promising matcher support will come soon, but if they're actually offering              |
| 42:22      | matcher support, then that means that whatever they do within the matcher realm is hopefully           |
| 42:28      | just going to straight up be available to [[HomeKit]] and so on and so forth, which means                  |
| 42:33      | that's better.                                                                                         |
| 42:34      | Of course, if something, just like the old days, if something's [[HomeKit]] coming soon,                   |
| 42:39      | matcher coming soon, maybe hold off until it actually has matcher support or actually                  |
| 42:44      | has whatever it is support that you're looking for.                                                    |
| 42:47      | But providing it's got the matcher framework there and it's using that, then it should                 |
| 42:55      | be assuming the standard goes forward and the creator of whatever this hardware is actually            |
| 43:01      | does update their software.                                                                            |
| 43:04      | Everything should be able to tie in and interlink together, I hope, from what you're saying.           |
| 43:10      | Yes.                                                                                                   |
| 43:11      | And having the [[Matter]] certification is, again, a quality baseline.                                     |
| 43:17      | So if you buy products that are [[HomeKit]] certified and now [[Matter]] certified, you know the manufacturer  |
| 43:22      | has at least paid $10,000 to $50,000 to join the CSA Alliance, they have paid $20,000 to               |
| 43:29      | $10,000, $20,000, $30,000 to have a lab test their product.                                            |
| 43:33      | So there's an implied quality level by buying a [[Matter]] product or a [[HomeKit]] product in the             |
| 43:38      | past.                                                                                                  |
| 43:39      | So it really, unless you're buying the least expensive product to just play with, I would              |
| 43:46      | recommend going with the standardised products, looking for products from major manufacturers.         |
| 43:52      | And if you go out online and read the reviews, you get a sense of who the big brands are,              |
| 43:57      | who the big companies are, companies like [[Aqara]], companies like [[Lutron]], companies like                 |
| 44:03      | Ecobee or Ecobee for thermostats.                                                                      |
| 44:06      | And there are maybe a dozen or so really high quality companies and it's growing.                      |
| 44:13      | But if you stick to those brands, you're going to have less trouble.                                   |
| 44:16      | If you want to be the most frugal, then you can go to the second tier companies that are               |
| 44:20      | now getting [[Matter]] or [[HomeKit]] certified and you can buy them on [[Amazon]].                                |
| 44:25      | You can buy them in big box stores.                                                                    |
| 44:28      | And again, it's relatively safe.                                                                       |
| 44:30      | When you start going to Aliexpress and buying products directly from Asia with unknown brands,         |
| 44:37      | then you're an experimenter.                                                                           |
| 44:39      | There's nothing wrong with that and you may find some incredibly interesting products.                 |
| 44:43      | But be aware and set your expectation of what you're looking for and what you're going to              |
| 44:48      | achieve.                                                                                               |
| 44:49      | All right, so let's assume that someone listening is willing to trade money for reliability.           |
| 44:54      | They want to get the better quality products so they can have a successful home automation             |
| 45:00      | install.                                                                                               |
| 45:01      | What are some of your recommended brands in the various categories like lights and switches            |
| 45:06      | and sensors?                                                                                           |
| 45:07      | I mean, when you're setting it up, Robert, what are the brands that you rely on?                       |
| 45:12      | Sure.                                                                                                  |
| 45:13      | Now, with all the usual disclaimers, et cetera, there are four wired switches.                         |
| 45:18      | And dimmers, I always recommend [[Lutron]].                                                                |
| 45:21      | They're my number one choice.                                                                          |
| 45:23      | They're just so reliable.                                                                              |
| 45:25      | The only complaint I hear on [[Lutron]] is the price, not anything else.                                   |
| 45:30      | For smart bulbs where you can't do wired switches or you have lamps and other reasons, you want        |
| 45:36      | colour variation, you want tunable white, then Phillips Hue is my number one go-to brand                |
| 45:43      | in that arena.                                                                                         |
| 45:45      | There are plug-ins, smart plugs.                                                                       |
| 45:48      | It's really a variety.                                                                                 |
| 45:50      | I've used Eve in the past.                                                                             |
| 45:52      | They're very good.                                                                                     |
| 45:53      | They're still a little pricey.                                                                         |
| 45:54      | I've now had very good luck with Maras and a few of the other brands that are certified.               |
| 46:00      | So I'd say there.                                                                                      |
| 46:01      | And again, the installation is a plug.                                                                 |
| 46:03      | You're not opening walls.                                                                              |
| 46:05      | You're not doing something that you don't want to reinstall if it doesn't work.                        |
| 46:10      | So that's pretty safe.                                                                                 |
| 46:11      | As an example on that, I have struggled over the years for outdoor smart plugs.                        |
| 46:17      | I had at one point an outdoor fountain and then this year I had the outdoor Christmas                  |
| 46:21      | lights and I have made the mistake of buying the cheap one on [[Amazon]] and they never work               |
| 46:29      | or they work for like two weeks.                                                                       |
| 46:31      | But I finally took your advice.                                                                        |
| 46:33      | I bought an Eve outdoor plug and I think this is like the third year running.                          |
| 46:39      | I've been using it.                                                                                    |
| 46:40      | It's just an example of sometimes it makes sense to buy the more expensive one because                 |
| 46:45      | it just gets rid of all the headaches.                                                                 |
| 46:49      | The other area where I would recommend clearly a brand or two and that's motorised shades              |
| 46:55      | and blinds.                                                                                            |
| 46:57      | Once again, I'm a big fan of [[Lutron]].                                                                   |
| 46:59      | The Serena is the consumer line.                                                                       |
| 47:02      | Also Songfi, but you really have to go through a dealer for that.                                      |
| 47:06      | And quite honestly, Hunter Douglas has been doing very well.                                           |
| 47:10      | That's a traditional designer, decorator brand, but it is sold through big box stores and              |
| 47:15      | retail, not just through dealers.                                                                      |
| 47:18      | But to be honest, the two issues with window coverings are aesthetics, the fabric choices              |
| 47:24      | and the colours and the motors.                                                                         |
| 47:27      | And the number one reason I choose [[Lutron]] is they are incredibly quiet and precision.                  |
| 47:34      | If you do a house where you have three or four or five blinds or shades, when they all                 |
| 47:40      | completely go up and down, completely synchronised, they're not all at a half inch off of each         |
| 47:45      | other.                                                                                                 |
| 47:46      | And you can't hear them.                                                                               |
| 47:47      | They're totally silent.                                                                                |
| 47:50      | So that's what makes them expensive.                                                                   |
| 47:52      | If you don't care about the sound, if you don't care about a limited choice of fabrics,                |
| 47:58      | if you don't need them cut to custom sizes, then there's a lot more happening today with               |
| 48:05      | smart lines.                                                                                           |
| 48:08      | IKEA has products that are good.                                                                       |
| 48:10      | There's other companies like Smart Wings and a few others.                                             |
| 48:13      | I haven't used them, but I know folks that are happy with them because they're much                    |
| 48:18      | less expensive.                                                                                        |
| 48:20      | I personally have IKEA blinds.                                                                         |
| 48:22      | They aren't the quietest, but they're certainly not loud.                                              |
| 48:26      | And I also have some [[Aqara Blind Controller\|Aqara blind controllers]] and [[Aqara Smart Curtain Motor\|Aqara]] and [[SwitchBot Curtain Opener\|SwitchBot curtain motors]] that               |
| 48:32      | you can put onto like a curtain rail to move your curtains back and forth.                             |
| 48:37      | And they all work very well, you know, obviously the [[Lutron]] ones and the Hunter Douglas ones           |
| 48:44      | would be lovely, but those aren't available over here in the UK, which meant that I was                |
| 48:49      | limited to what I could get elsewhere.                                                                 |
| 48:51      | And I've had the [[Aqara]] ones in particular, I really like they can deal with some very                  |
| 48:56      | heavy curtains without any issues.                                                                     |
| 48:59      | That sounds good.                                                                                      |
| 49:01      | And you did mention [[Aqara]].                                                                             |
| 49:02      | I did want to say that in general, that the line of products from [[Aqara]] on [[Zigbee]], which               |
| 49:08      | is a type of wireless communication, is a great selection of great variety, very cost                  |
| 49:14      | effective.                                                                                             |
| 49:15      | Personally, I'm not ready to deploy [[Thread]] devices as a wireless interface.                            |
| 49:20      | I think it's still immature.                                                                           |
| 49:22      | There's still a lot of kinks being worked out.                                                         |
| 49:24      | So in the short term, I would stick with [[Zigbee]] as a wireless communications method for shades,        |
| 49:32      | blind sensors, anything that can not have to be Wi-Fi and needs to be low power.                       |
| 49:39      | [[Zigbee]] is a great choice and [[Aqara]] is really hitting them out of the park now.                         |
| 49:44      | I've been very lucky with the [[Aqara]] things because I was able to buy [[Aqara Hub\|the hub]], the [[HomeKit]]                 |
| 49:50      | enabled hub, which I actually ended up connecting to home assistant here in the UK.                |
| 49:56      | But the sensors I was able to pick up on Ali Express, so like the door sensors, the window sensors,     |
| 50:01      | the temperature sensors, motion sensors, and things like that, and because they're connecting          |
| 50:06      | to the hub and they aren't Wi-Fi based, I didn't have to worry about them phoning home                 |
| 50:12      | or anything because they're just sending data to a hub that says, I'm open, I'm closed.                |
| 50:17      | I saw something move.                                                                                  |
| 50:18      | I didn't see something move.                                                                           |
| 50:20      | It is 18 degrees, it is 19 degrees.                                                                    |
| 50:23      | That's Celsius just for clarification folks, don't worry, I'm not actually freezing here.              |
| 50:28      | And so, yeah, they've definitely been very nice to get to know from that perspective                   |
| 50:35      | and their stuff seems to be very good as well as being affordable, which is always a nice              |
| 50:41      | thing for people who are looking to dip their toe in.                                                  |
| 50:44      | Their sensors in particular are so small that I feel like that is one of the problems that             |
| 50:48      | people have with some smart home things.                                                               |
| 50:51      | They would like motion sensors in their room, but they don't want this giant thing staring             |
| 50:56      | out from the wall looking at them the whole time.                                                      |
| 50:59      | They want something that blends in with the decor, like you were saying with the window                |
| 51:03      | shades.                                                                                                |
| 51:04      | You want something that looks nice, and yeah, finding something that blends in or just disappears      |
| 51:10      | essentially is really key for me when it comes to sensors.                                             |
| 51:17      | This episode of The Automators is brought to you by ExpressVPN.                                        |
| 51:21      | Go to expressvpn.com/automators for high speed, secure and anonymous VPN services,               |
| 51:28      | and get an extra three months for free.                                                                |
| 51:30      | You may not know this, but when you search for something on Netflix, what you get is                   |
| 51:34      | only a fraction of what Netflix actually has.                                                          |
| 51:38      | There are 18,000 titles globally, but only 6,000 of those are available in the US.                     |
| 51:44      | That means you might be missing out on thousands of great shows and movies if you're not using         |
| 51:48      | ExpressVPN.                                                                                            |
| 51:50      | ExpressVPN is an app that lets you change your online location, which means you can switch             |
| 51:55      | where Netflix thinks you're located.                                                                   |
| 51:57      | ExpressVPN has over 100 different locations, so you can gain access to thousands of new                |
| 52:02      | shows no matter where you live.                                                                        |
| 52:04      | And it's not just Netflix, ExpressVPN helps you access more content on all streaming services.         |
| 52:10      | Disney Plus, Hulu, Macs, BBC iPlayer, you name it.                                                     |
| 52:15      | So for example, I can kick back and watch The Office on Canada's Netflix, which is great               |
| 52:21      | because I can't access it any other way, and I like The Office.                                        |
| 52:26      | Another great show I love that's not available to me otherwise is Brooklyn Nine-Nine, which            |
| 52:30      | is on Canada Netflix.                                                                                  |
| 52:32      | And it's so simple to do, just fire up the ExpressVPN app on the computer or TV, change                |
| 52:38      | the location, refresh Netflix, and that's it.                                                          |
| 52:42      | In general, VPNs can be super slow, but the reason so many people love ExpressVPN is it's              |
| 52:47      | so fast.                                                                                               |
| 52:48      | There's never any buffering or lag and all your shows stream in HD quality.                            |
| 52:53      | So stop missing out on great TV and get thousands of new shows with ExpressVPN.                        |
| 52:58      | And if you use the Automators link, we got them to give you an extra three months free,                |
| 53:02      | so just go to expressvpn.com/Automators, sign up and get those extra three months or             |
| 53:08      | free.                                                                                                  |
| 53:09      | That's E-X-P-R-E-S-S-V-P-N.com/Automators to get those three extra months completely             |
| 53:17      | free.                                                                                                  |
| 53:18      | And our thanks to ExpressVPN for their support of the Automators and all of Relay FM.                  |
| 53:25      | Before the break, Rose was talking about [[Aqara]].                                                        |
| 53:27      | I bought a [[Aqara Presence Sensor\|Aqara human presence sensor]], and it is really impressive, because in the past               |
| 53:34      | I've tried to do the thing where you have the motion sensor in the room, but then when                 |
| 53:38      | you sit still, all the lights turn off, the [[Human Presence Sensor\|human presence sensor]] to me feels like a step              |
| 53:45      | above, but it hasn't entirely solved the problem yet.                                                  |
| 53:48      | It still does occasionally think I've left the room, and it does have a little bit of                  |
| 53:53      | a delay, but I feel like we're just on the verge of that fundamental problem of people                 |
| 53:58      | saying, I want to walk in a room, I want the lights to turn off, and I want to walk out                |
| 54:02      | of the room, and I want them to turn off.                                                              |
| 54:03      | I guess I misstated that, but you walk in, they turn on, you walk out, they turn off.                  |
| 54:08      | What do you think of these [[Human Presence Sensor\|human presence sensors]] that are starting to show up on the                  |
| 54:11      | market?                                                                                                |
| 54:12      | I think the technology is very impressive, but it's still a lot of tweaking and adjusting              |
| 54:17      | required to make them work properly, and probably that's the one area, if we want to point             |
| 54:24      | to anything where the AI height could really help.                                                     |
| 54:28      | I would love for there to be more AI enabled sensors that will just simply figure out what             |
| 54:34      | you want, how you use your home, who goes in, who goes out of a room, and configure themselves         |
| 54:41      | to operate the way you want.                                                                           |
| 54:44      | It's a never-ending job to twiddle and tweak and play with those if it's more than yourself            |
| 54:51      | in your own office or room.                                                                            |
| 54:55      | That brings us to an important point, which is the big challenge in home automation is                 |
| 55:01      | that it's not an individual activity.                                                                  |
| 55:04      | We're used to our smartphones, our watches, our computers that is one device, one person.              |
| 55:10      | We set it the way we want, no one else tells us what to do, they don't care what we do,                |
| 55:16      | they don't have to like it or not like it.                                                             |
| 55:18      | In a home automation system, you're living in a house, you're living with other people,                |
| 55:24      | you're living with multi-user aspects that even [[Apple]] has ignored for 20 years, security,              |
| 55:30      | restriction, the kids, I don't want the kids to fiddle with the lights in the kitchen,                 |
| 55:35      | but they need control of the lights in their bedroom.                                                  |
| 55:38      | There's a lot of challenges that have not been addressed.                                              |
| 55:41      | All right.                                                                                             |
| 55:42      | I'd like to switch topics real quick.                                                                  |
| 55:45      | I bought a [[Home Assistant]] Yellow about a year ago.                                                     |
| 55:50      | I go into the app every week or two and make sure everything's updated, but I hit a stumbling          |
| 55:56      | block with this.                                                                                       |
| 55:57      | I know that you're a fan, and I know Rose is definitely a fan.                                         |
| 56:02      | [[Home Assistant]], I'll give the novice description, you guys can tell me where I'm wrong, but            |
| 56:07      | it gives you a lot more flexibility than [[HomeKit]].                                                      |
| 56:09      | It shows you where things break, and there's a lot more devices that connect to it.                    |
| 56:14      | Just a few days ago, I got an email from a MacSparky lab member who was telling me                    |
| 56:18      | how he has [[Home Assistant]] connected to his Kia electric vehicle.                                       |
| 56:22      | Well, I've got one of those, and he's able to know like it can give him a reminder when                |
| 56:26      | the car needs charging, and I'm like, wow, I have that ability and I haven't done it                   |
| 56:31      | yet, and I'll tell you what went wrong.                                                                |
| 56:33      | I got [[Home Assistant]] set up, I started putting everything in it, and then the [[HomeKit]] switches         |
| 56:39      | and the [[HomeKit]] app started behaving funny, and my wife and kids who are never going to                |
| 56:46      | use [[Home Assistant]], by the way, were complaining that all of a sudden nothing was working right,       |
| 56:51      | and I realised that I was going, I went in too deep with [[Home Assistant]], and it was causing            |
| 56:56      | problems for them with [[HomeKit]].                                                                        |
| 56:57      | I backed off immediately, and I just haven't taken the time to go figure out that problem.             |
| 57:03      | If someone's listening, like me, and they have a [[HomeKit]] trained family, but they want                 |
| 57:09      | to do something like [[Home Assistant]] where they get a lot more power, how do you live                   |
| 57:13      | in both worlds at once?                                                                                |
| 57:15      | Tell me what I'm doing wrong, guys.                                                                    |
| 57:18      | How many hours do you have?                                                                            |
| 57:21      | First step is, again, as we mentioned earlier, deciding who is the master controller.                  |
| 57:27      | With [[Home Assistant]], you can have [[HomeKit]] devices from [[Apple]] that are accessible in [[Home Assistant]],    |
| 57:36      | or you can have devices loaded into [[Home Assistant]] that are pushed out into [[HomeKit]].                   |
| 57:43      | It's very subtle, but if [[Home Assistant]] is controlling everything, then if something                   |
| 57:48      | doesn't work, those devices don't work anywhere.                                                       |
| 57:52      | If [[HomeKit]] is natively controlling devices, then [[Home Assistant]] is an add-on, tapping                  |
| 57:59      | it on the shoulder saying, let me have a look.                                                         |
| 58:01      | Let me also fiddle with things, but it's not controlling everything.                                   |
| 58:06      | I probably did that wrong.                                                                             |
| 58:08      | I probably was letting [[Home Assistant]] take over and push to [[HomeKit]] is what I was doing.               |
| 58:14      | I think letting [[Home Assistant]] take over isn't necessarily the problem.                                |
| 58:18      | The problem that I see most often is where people start letting [[Home Assistant]] take over,              |
| 58:23      | but then they don't let it actually go all the way, where they say, oh, no, no, no, but                |
| 58:29      | I just want to keep this one thing, just keep it in [[HomeKit]].                                           |
| 58:34      | I feel like if you're going to get [[Home Assistant]] to be the primary controller, you need to            |
| 58:37      | just embrace that, put everything in there, don't put everything in [[HomeKit]], take it                   |
| 58:41      | out of [[HomeKit]], and send it back to [[HomeKit]] from [[Home Assistant]], but Robert may have a                 |
| 58:46      | different perspective.                                                                                 |
| 58:47      | Well, I think we're saying the same thing is if you're not ready to embrace [[Home Assistant]]             |
| 58:53      | and put the time in to tweak it and adjust it and get everything running there, don't                  |
| 58:58      | be half into both systems.                                                                             |
| 59:00      | Be all in on one and dabble in the other, but don't have some things in one, some things               |
| 59:06      | in the other, and it's tough because actually what I would suggest is setting up a separate            |
| 59:13      | network, not network, but a separate home, maybe one room, and just do [[Home Assistant]]                  |
| 59:20      | entirely for that room to get familiar with it and go deeper and then see if you're ready              |
| 59:26      | or willing to embrace it more.                                                                         |
| 59:28      | I would not try to fiddle with both of them, and then you've got things breaking in [[HomeKit]]            |
| 59:34      | or else it's running in [[HomeKit]], but you're not able to do everything with it in Home                  |
| 59:38      | Assistant.                                                                                             |
| 59:40      | It all gets back to, I mean, a simpler anecdote is a neighbour once called me into their home           |
| 59:45      | to help them.                                                                                          |
| 59:46      | My light's not working in the bedroom with my voice assistant.                                         |
| 59:50      | When I tell it to turn the lights on, they don't work, okay.                                           |
| 59:52      | What do you have live, Philips, you, okay.                                                             |
| 59:55      | Well, show me where it works, take me down to the kitchen.                                             |
| 59:59      | There is an [[Amazon Echo]] device.                                                                        |
| 01:00:01   | They're talking to it, lights go on, lights go off, everything is fine.                                |
| 01:00:05   | They go upstairs to the bedroom.                                                                       |
| 01:00:07   | There is a Google Home device, and it's not working.                                                   |
| 01:00:12   | Lights don't go on.                                                                                    |
| 01:00:13   | I said, well, did you configure the Google Home to talk to the Philips SmartBubs?                      |
| 01:00:18   | And I got a blank stare, and then I showed them, and then I got a bigger stare.                        |
| 01:00:22   | I said, well, now you're going to have to always replicate what you do in Google with                  |
| 01:00:27   | what you do with [[Amazon]].                                                                               |
| 01:00:29   | You've got to recreate the same routines, the same commands, et cetera, and they threw                 |
| 01:00:33   | their hands up.                                                                                        |
| 01:00:34   | I said, well, let's back up.                                                                           |
| 01:00:36   | Why do you have two different devices?                                                                 |
| 01:00:38   | Oh, I got that Google thing free when I bought something at the store a few weeks ago.                 |
| 01:00:44   | Okay.                                                                                                  |
| 01:00:45   | Well, why don't we not use that?                                                                       |
| 01:00:48   | Why don't we set everything up with [[Amazon]] or even [[Apple]], whatever you like?                           |
| 01:00:52   | Oh, no, I don't want to do that.                                                                       |
| 01:00:54   | I got it.                                                                                              |
| 01:00:55   | It's free.                                                                                             |
| 01:00:56   | I want to use it.                                                                                      |
| 01:00:57   | So sometimes you have to discipline and say, where do you want to put your stuff?                      |
| 01:01:02   | What system do you want to use and segregate how you're doing it?                                      |
| 01:01:06   | So in your case, David, I don't think you want to learn how to build dashboards in [[Home Assistant]]      |
| 01:01:12   | and go deep in it.                                                                                     |
| 01:01:13   | So I would keep it for the advanced rules and automations and be very careful which devices            |
| 01:01:20   | you expose to it and which devices you have in both systems in a way that you can use                  |
| 01:01:26   | them from both without one interfering with the other as much as possible.                             |
| 01:01:31   | That's probably what I need to do.                                                                     |
| 01:01:34   | I don't know that I feel comfortable going all in with it.                                             |
| 01:01:38   | If I lived alone, I think I would be more likely to do something like that just because                |
| 01:01:44   | I finally got these people that I live with happy with Home Automation.                                |
| 01:01:49   | And I don't want to do anything to put that at risk if that makes sense.                               |
| 01:01:55   | It does make sense.                                                                                    |
| 01:01:56   | Yeah, I personally find that [[Home Assistant]] specifically for the automations is just so                |
| 01:02:02   | good though because you can see what happened and when and why.                                        |
| 01:02:06   | And that's where I like putting everything into [[Home Assistant]] so I can track that with                |
| 01:02:11   | all the automations.                                                                                   |
| 01:02:13   | But at the same time, I can see why that would be pretty scary for some people.                        |
| 01:02:16   | But also, it's just like it's so much better in terms of like interactions, like I've                  |
| 01:02:20   | got a Samsung TV in here that I can control with [[Home Assistant]] and I've got apparently                |
| 01:02:25   | a car that I can monitor with [[Home Assistant]] and it seems like or even those [[Aqara]] sensors             |
| 01:02:32   | seem to kind of work better with [[Home Assistant]] because of the [[Zigbee]] or whatever.                     |
| 01:02:37   | I'm a little bit out of my league here.                                                                |
| 01:02:39   | But there's a lot of reasons to want to do more with it.                                               |
| 01:02:45   | But at the same time, if my wife wants to turn out the lights in the kitchen, she's                    |
| 01:02:50   | got to be able to turn out the lights in the kitchen, and I don't know.                                |
| 01:02:55   | I guess I need to spend like an afternoon just digging in on this.                                     |
| 01:02:59   | I'm not a bozo.                                                                                        |
| 01:03:00   | I can figure this stuff out.                                                                           |
| 01:03:01   | It's just that we kind of hit that friction point.                                                     |
| 01:03:05   | I backed away from it and I've just not had time to go back and figure out what went wrong             |
| 01:03:09   | and where I should go with this.                                                                       |
| 01:03:12   | Well, a good analogy, whether it's [[Home Assistant]], whether it's Hubitat, whether it's a few            |
| 01:03:16   | other things, if we think back about the PC industry, we had IBM compatible, IBM PCs,                  |
| 01:03:23   | and we had [[Apple]].                                                                                      |
| 01:03:24   | Yeah.                                                                                                  |
| 01:03:26   | If you tune your PC, if you hot rod it, if you built your own and went to Fry's electronics            |
| 01:03:31   | and selected every component and found the drivers for the video card or this or that                  |
| 01:03:37   | serial port, you had an amazing system.                                                                |
| 01:03:40   | But 80% of the time, you were always fiddling with it, getting it working again.                       |
| 01:03:46   | Whereas if you bought an [[Apple]], it just worked.                                                        |
| 01:03:48   | You couldn't do everything the PC could do, but the things you wanted to do were just                  |
| 01:03:53   | smooth and buttery and integrated and it just flowed together.                                         |
| 01:03:59   | I think [[Home Assistant]] or other DIY prosumer automation systems have that same challenge.              |
| 01:04:06   | If you don't want a hobby, you just want the damn thing to work, then [[HomeKit]] or one of                |
| 01:04:13   | the other mass market systems makes sense.                                                             |
| 01:04:16   | I mean, that's a very little secret of why in the professional and the luxury space,                   |
| 01:04:22   | Prestron, Control 4, Savant, companies most consumers haven't heard of, are still dominating.          |
| 01:04:28   | People spend $50,000 on a system, so they never touch it.                                              |
| 01:04:33   | They literally call a guy when anything needs to be changed.                                           |
| 01:04:36   | They don't want a hobby, they just want it to work.                                                    |
| 01:04:40   | They're willing to not choose the equipment, choose the brands of lights, choose every                 |
| 01:04:45   | little gadget because having it work and not worrying about it, it's not a hobby, it's                 |
| 01:04:50   | not an application, it's just a tool that they want working.                                           |
| 01:04:55   | I think [[HomeKit]] and even Google and [[Amazon]] to some extent are more of that just work                   |
| 01:05:01   | type of system.                                                                                        |
| 01:05:02   | The key to bring it all back around, are there really cool automations you want to do or               |
| 01:05:09   | you have to do?                                                                                        |
| 01:05:11   | If you have to do, then you have to find ways to do that.                                              |
| 01:05:15   | If you want to do, then you have to decide, well, how can I partition everything, perhaps              |
| 01:05:21   | do my studio on home automation, not do the rest of the house so no one else is affected.              |
| 01:05:26   | If it screws up, I get up and walk over and flip the manual switch until I fix it, but                 |
| 01:05:31   | I don't have a wife or kids or visitors screaming at me.                                               |
| 01:05:36   | It is funny how much of this home automation stuff involves other humans and making it                 |
| 01:05:43   | work for them.                                                                                         |
| 01:05:44   | And so often, just like me, there's one person in the house that wants to go right off the             |
| 01:05:49   | cliff with this stuff and the rest of them just want the lights to turn on.                            |
| 01:05:54   | Just probably a challenge for you as a professional when you're helping people, right?                 |
| 01:05:57   | You almost have to coach your clients who it's like, hey, is the rest of your family                   |
| 01:06:01   | okay with this and how are we going to do this in a way that they don't look at Robert                 |
| 01:06:06   | Spivack as the guy who came in and made their house wonky.                                              |
| 01:06:09   | Well, a lot of what I do professionally would bore you guys because the automations are                |
| 01:06:14   | so simple, the setups are not complicated.                                                             |
| 01:06:19   | The focus is on shades, lights, audio, music, not sitting, detecting if you haven't moved              |
| 01:06:27   | in your chair and not the lights, not turning off.                                                     |
| 01:06:30   | Their needs are different, but what they want is ultra-reliability, which is something                 |
| 01:06:36   | that I don't see in the smart home consumer space.                                                     |
| 01:06:39   | For us, people I talk with, when they say, oh yeah, my dimmers work every month or two,                |
| 01:06:46   | they follow up the network, I have to factory reset them and reconfigure them and that's               |
| 01:06:51   | okay.                                                                                                  |
| 01:06:52   | That is not just unacceptable, but that is a disaster in a professional system.                        |
| 01:06:58   | We want things to work like a toaster.                                                                 |
| 01:07:01   | Never think about it, never touch it.                                                                  |
| 01:07:03   | You go to the toaster, you put your toast in.                                                          |
| 01:07:06   | You don't think, well, is this the one time in a hundred that it's not going to toast                  |
| 01:07:09   | today?                                                                                                 |
| 01:07:10   | No, it just works.                                                                                     |
| 01:07:12   | Home automation is getting there, but it's not there today.                                            |
| 01:07:16   | The less you do to make it less reliable, the less you mix systems, the less you try                   |
| 01:07:22   | to use an [[Amazon]] device with [[HomeKit\|Apple HomeKit]] products, the less you can experiment, then                 |
| 01:07:29   | the more reliable you can make it.                                                                     |
| 01:07:33   | I'm personally a huge fan of being able to look at what happened when you're setting                   |
| 01:07:38   | things up and figuring out why that thing happened or didn't happen and so on, which                   |
| 01:07:43   | is one of the reasons why I have really enjoyed Home Assistant's traces for automations and            |
| 01:07:49   | scripts so I can see, okay, well, it got to the point where it checked if it was a Thursday            |
| 01:07:54   | and it said, no, oh, that's because today's Tuesday, well, okay, so that did work, but                 |
| 01:08:00   | maybe I need something that works on Tuesdays and Thursdays and figuring it out.                       |
| 01:08:04   | I think one of the key skills to remember when you're looking at all of this stuff is                  |
| 01:08:09   | your basic troubleshooting, grabbing a pen and paper or an iPad Pro and an [[Apple Pencil]]                |
| 01:08:14   | and writing down, okay, so when this happens, then that happens and just figuring out the              |
| 01:08:21   | basics and starting with that and then working on the refinements slowly and carefully from            |
| 01:08:26   | there.                                                                                                 |
| 01:08:27   | Okay, every time I walk into the room, the lights turn on, good start.                                 |
| 01:08:31   | Every time I walk into the room and it's dark, well, define dark and progress from there               |
| 01:08:37   | and I think that's one of the biggest mistakes that a lot of people make with home automation          |
| 01:08:41   | is they go straight into, okay, so when I come home and it's on Thursday after 8 p.m.                  |
| 01:08:48   | and it's dark and nobody else is home, I want this and it's like, whoa, you set yourself               |
| 01:08:53   | about 800 conditions you need to wade through there.                                                   |
| 01:08:56   | Start with when I come home, the lights turn on and then progress to the next most complicated         |
| 01:09:01   | one from there.                                                                                        |
| 01:09:02   | And honestly, [[Apple]] is partly at fault for some of this stuff because they put options                 |
| 01:09:07   | in [[HomeKit]] like saying when it's just me at home because in theory, they know who's there              |
| 01:09:12   | and not there depending on what devices are present, but I find that that stuff generally              |
| 01:09:16   | is unreliable.                                                                                         |
| 01:09:18   | My advice to anyone with automations, I mean, home assistant is nice because it documents              |
| 01:09:24   | but with any other system, create a record of what you're doing.                                       |
| 01:09:29   | I mean, pad and pencil or any method, online, electronic, don't get hung up on how, but                |
| 01:09:36   | if someone were to steal your [[HomeKit]] hub or to erase everything, how would you recreate               |
| 01:09:43   | all the automations you've painfully built up over the years?                                          |
| 01:09:47   | It's sadly necessary to become a nerd and document spreadsheets or notes.                              |
| 01:09:53   | Write down what it's supposed to do, what you want it to do.                                           |
| 01:09:57   | Now the good thing is if you use a hub, if you use [[Lutron]] or use [[Aqara]], there's what                   |
| 01:10:02   | I call the number one magic trick of smart home.                                                       |
| 01:10:06   | That's the first time you mess up and rebuild your system when you add the hub and all the             |
| 01:10:12   | devices connected to the hub just populate and come right back into your system versus                 |
| 01:10:19   | Wi-Fi devices that you have to go around to each one and reset and individually add them               |
| 01:10:25   | again.                                                                                                 |
| 01:10:26   | You'll realise that hubs do solve a lot and make things a lot easier.                                  |
| 01:10:32   | There's also a really great little app on the App Store called HomePass, which means                   |
| 01:10:36   | that if you do have devices like a single smart plug that's got Wi-Fi on it and you've                 |
| 01:10:42   | put it behind a really heavy piece of furniture that you can't easily get to, and you have             |
| 01:10:46   | to reset stuff, if you scanned the pass into HomePass, that little home connection barcode,            |
| 01:10:54   | then you don't have to move the giant piece of furniture more than you need to to just                 |
| 01:10:59   | press and hold the button to reset it because you'll be able to scan that barcode from another         |
| 01:11:03   | device to add it back to your smart home if you do have to reset things.                               |
| 01:11:08   | That could be really useful.                                                                           |
| 01:11:11   | How is that not a built-in feature in the Home App?                                                    |
| 01:11:14   | Once you scan something, that it just keeps a memory of it where you can go and access                 |
| 01:11:19   | it again.                                                                                              |
| 01:11:20   | It keeps a memory of it until you reset your home.                                                     |
| 01:11:23   | That's the problem because when you've reset your home, well, you're going to have to find             |
| 01:11:27   | your things and put them back together because you didn't want any of that, so it got rid              |
| 01:11:31   | of it, which is a theoretically nice idea.                                                             |
| 01:11:36   | Thanks for that, [[Apple]].                                                                                |
| 01:11:38   | It would be nice to export those, but HomePass can help at least.                                      |
| 01:11:42   | I would settle for the Home App from [[Apple]] having search.                                              |
| 01:11:46   | I can't find devices in my configuration.                                                              |
| 01:11:48   | Fortunately, I use [[Controller for HomeKit]], which is one of the excellent third-party                   |
| 01:11:53   | apps.                                                                                                  |
| 01:11:54   | It has a search function.                                                                              |
| 01:11:55   | If I want to find, where did I put that smart plug?                                                    |
| 01:11:58   | Which room did I put it in?                                                                            |
| 01:12:00   | What did I call it?                                                                                    |
| 01:12:02   | There's certainly room for third-party apps to embellish or extend whatever system you're              |
| 01:12:08   | using, and ultimately, I'd like to see more of that incorporated by [[Apple]].                             |
| 01:12:14   | Backup and Restore is still not a feature of [[HomeKit]].                                                  |
| 01:12:18   | It is in [[Controller for HomeKit]] and other apps.                                                        |
| 01:12:22   | The basics, there are some basics you have to deal with when you're not using a more                   |
| 01:12:28   | professional-oriented system, whether it's a prosumer system like [[Home Assistant]] or others.            |
| 01:12:33   | There's just backup and Restore.                                                                       |
| 01:12:35   | You'd think that is so basic.                                                                          |
| 01:12:37   | Robert, do you have any other apps that you would recommend people check out if they're                |
| 01:12:41   | using [[HomeKit]] in addition to [[Controller for HomeKit\|Controller]]?                                                               |
| 01:12:44   | We haven't talked a lot about the physical networking aspects, and Wi-Fi networks can                  |
| 01:12:49   | be challenging.                                                                                        |
| 01:12:51   | It's a little bit more professional, but they have a free version, an app called NetSpot,              |
| 01:12:57   | which runs on a laptop, on a Mac, and it provides the ability to do heat map surveys, which            |
| 01:13:03   | means walking around your house with your laptop, measuring the Wi-Fi, and giving you                  |
| 01:13:08   | visual maps of where you have dead spots, where you have weak spots.                                   |
| 01:13:13   | I find that it's very useful if you're planning to figure out where to put your access points          |
| 01:13:20   | or how to improve your Wi-Fi coverage.                                                                 |
| 01:13:25   | This episode of Automators is brought to you by Vitally.                                                |
| 01:13:28   | Customer success teams today are facing a problem.                                                     |
| 01:13:30   | How do they connect customer data back to their work?                                                  |
| 01:13:33   | Vitally changes that.                                                                                   |
| 01:13:34   | It's a new kind of customer success platform, an all-in-one collaborative workspace that               |
| 01:13:39   | combines your customer data with all the capabilities you expect from today's project management       |
| 01:13:43   | and work platforms.                                                                                    |
| 01:13:45   | Because it's designed for today's customer success team, that's why Vitally operates                    |
| 01:13:49   | with unherald efficiency, improves net revenue retention, and delivers best-in-class customer          |
| 01:13:54   | experiences.                                                                                           |
| 01:13:55   | It's the solution to helping your customer success team keep a better pulse on your customers,         |
| 01:14:00   | which maximises productivity, visibility, and collaboration.                                           |
| 01:14:04   | You can boost your bottom line by driving more revenue per customer with Vitally.                       |
| 01:14:08   | And if you take a qualified demo of Vitally, get a free pair of AirPods Pro.                            |
| 01:14:12   | So if you're a customer success decision maker actively seeking CS solutions, working                  |
| 01:14:17   | at a B2B, software as a service company with 50 to 1,000 employees, and you're willing                 |
| 01:14:21   | to explore changing customer success platforms if you already have one in place, schedule              |
| 01:14:26   | your call by visiting vitally.io.automators and get that free pair of AirPods Pro.                     |
| 01:14:32   | That's vitally.io.automators for a free pair of AirPods Pro when you schedule a qualified              |
| 01:14:38   | meeting.                                                                                               |
| 01:14:39   | Our thanks to Vitally for their support of this show and Relay FM.                                      |
| 01:14:44   | Before the break, Robert, you had mentioned Netspot and checking out the heat map of                   |
| 01:14:49   | Wi-Fi in your house.                                                                                   |
| 01:14:50   | I think this is kind of the dirty secret to me of home automation for a lot of people                  |
| 01:14:56   | is that the problem isn't that they bought the wrong device, but their Wi-Fi is so stinky              |
| 01:15:01   | that it just isn't working reliably for home automation.                                               |
| 01:15:05   | Can you kind of talk a little bit about that problem and how to approach it?                           |
| 01:15:10   | The device that brings internet into your home is really a multifunction device.                       |
| 01:15:15   | Typically, you may get it from your internet provider.                                                 |
| 01:15:19   | So it's actually a router, a switch, a firewall, a gateway.                                            |
| 01:15:24   | It's doing a lot of things and it does none of them extremely well.                                    |
| 01:15:28   | It works good enough until you start adding lots of Wi-Fi devices and really running a                 |
| 01:15:35   | lot more on your network.                                                                              |
| 01:15:37   | So I certainly say the first thing you want to do is look at replacing the standard ISP                |
| 01:15:45   | or carrier-provided equipment with your own devices.                                                   |
| 01:15:51   | And that will help a lot, but the other question is whether you have enough coverage in your           |
| 01:15:56   | home, whether your home has a physical layout or it's multiple stories, and at some point              |
| 01:16:03   | you may either need to have additional access points or use a mesh Wi-Fi system which has              |
| 01:16:09   | multiple units connected wirelessly to each other.                                                     |
| 01:16:15   | But at a higher level, and I know this is controversial a little bit, but my personal                  |
| 01:16:21   | desire and opinion is to avoid Wi-Fi as much as possible.                                              |
| 01:16:26   | Wi-Fi is designed for phones, tablets, computers.                                                      |
| 01:16:33   | It's not designed for real-time devices that send small amounts of data but need very high             |
| 01:16:39   | reliable connections.                                                                                  |
| 01:16:42   | Sooner or later, I found most Wi-Fi devices failed.                                                    |
| 01:16:46   | Softly, they'll disconnect, they'll reconnect, they'll stop working, you'll need to unplug             |
| 01:16:52   | them and plug them back in.                                                                            |
| 01:16:54   | I mean, I've seen this with HomePods, I've seen this with [[Amazon]] devices, other devices                |
| 01:17:00   | where they simply don't work unattended.                                                               |
| 01:17:04   | You once in a while have to kick them or fiddle with them to make them work.                           |
| 01:17:09   | And the more devices you have, you may have congestion on your Wi-Fi.                                  |
| 01:17:14   | A lot of devices only work on what's called the 2.4 gigahertz frequency, and that frequency            |
| 01:17:21   | is the oldest in the original Wi-Fi.                                                                   |
| 01:17:24   | There are actually good reasons for using that frequency.                                              |
| 01:17:27   | It has the longest range, its speed is more than fast enough, and it has the lowest cost               |
| 01:17:34   | of manufacturing.                                                                                      |
| 01:17:35   | But as you crowd that band in design of Wi-Fi, it doesn't have the ability to support simultaneous     |
| 01:17:43   | devices talking at the same time.                                                                      |
| 01:17:46   | So it's very quickly switching between device to device, giving them a little bit of time              |
| 01:17:50   | to talk, and then going to the next device.                                                            |
| 01:17:53   | The 5 gigahertz band and the newer Wi-Fi standards allow multiple devices to communicate               |
| 01:17:59   | at the same time, and it solves that problem.                                                          |
| 01:18:03   | Most smart home devices still work on the 2.4 gigahertz.                                               |
| 01:18:08   | One of the things I've found as well, if you've got a 2.4 gigahertz smart home device, is              |
| 01:18:15   | a lot of the time to set it up on the network, you'll actually have to turn off the 5 gigahertz        |
| 01:18:20   | network because the device literally just won't and can't connect to Wi-Fi because there's             |
| 01:18:26   | a 5 gigahertz network.                                                                                 |
| 01:18:28   | And usually when that happens, I find that the result is actually that when the 5 gigahertz            |
| 01:18:35   | comes back on, the device seems to work fine, but it will randomly just be periodically                |
| 01:18:41   | flaky, whereas with my [[Zigbee]] devices in particular, so they're on a different network, they are       |
| 01:18:50   | rock solid.                                                                                            |
| 01:18:51   | They work fine.                                                                                        |
| 01:18:52   | The only time they don't work is when I don't have a battery left in them if they're a battery         |
| 01:18:58   | powered device, or the very occasional time, that smart plug's not working.                            |
| 01:19:03   | Why is it not working?                                                                                 |
| 01:19:05   | Because it was unplugged from the wall.                                                                |
| 01:19:07   | I need to have another work with my dad about that.                                                    |
| 01:19:10   | I found [[Zigbee]] not to have problems with that sort of thing, whereas Wi-Fi devices, you're             |
| 01:19:17   | trying to cram so many things onto a network, and you still want to be able to stream Netflix          |
| 01:19:20   | or [[Apple TV]] and so on, it's just asking for trouble, isn't it?                                         |
| 01:19:25   | Yes, but I don't think it's the case of the bandwidth or the network itself.                           |
| 01:19:30   | It's the design of the devices and the software and the firmware.                                      |
| 01:19:33   | You'll note most new devices now use Bluetooth for initial setup, and that bypasses the problematic    |
| 01:19:40   | firmware and software issues with getting confused by a 5 gigahertz band versus a 2                    |
| 01:19:46   | gigahertz band.                                                                                        |
| 01:19:47   | But one thing to keep in mind, the frequency of the network, Wi-Fi 2.4 gigahertz is the                |
| 01:19:53   | same physical frequency as Bluetooth devices, that's speakers, headphones, AirPods, etc.               |
| 01:20:03   | And also [[Thread]] devices, the [[Thread]] radios, the new, quote unquote, new wireless standard              |
| 01:20:10   | also runs on 2.4 gigahertz.                                                                            |
| 01:20:13   | So physical interference is possible with all of those devices, and there's one other                  |
| 01:20:19   | very common kitchen appliance that works on 2.4 gigahertz, and that's the microwave oven.              |
| 01:20:26   | If you've ever used your earphones in a kitchen and you turn on the microwave oven, suddenly           |
| 01:20:32   | all your audio drops out.                                                                              |
| 01:20:35   | So the reason [[Zigbee]] that you mentioned and there are other standards, the Z-Wave is still             |
| 01:20:41   | in use, although some people feel it may be dying, and [[Lutron]] and others, they use frequencies         |
| 01:20:48   | of the radio that are very different than Wi-Fi.                                                       |
| 01:20:51   | So it's sort of at a physical level, it's like driving a car in a freeway.                             |
| 01:20:56   | If you have a lane that's reserved for you to drive in, no [[Matter]] whether you're going                 |
| 01:21:01   | fast or slow, you're not going to get interference from the other lanes of traffic.                    |
| 01:21:07   | So at a physical radio transmission and reflection level, using non-Wi-Fi for any of your smart        |
| 01:21:13   | devices, and by smart devices, I'm referring to low power, low data devices, sensors, switches,        |
| 01:21:22   | things like that, you're avoiding potential interference from the beginning.                           |
| 01:21:26   | So rather than designing around it and optimising your Wi-Fi radios and being very careful of          |
| 01:21:33   | overloading the channels or not, if you have nothing that can interfere in the first place,            |
| 01:21:39   | you're far ahead.                                                                                      |
| 01:21:41   | And therefore, I would strongly recommend using [[Zigbee]] devices or other proprietary                    |
| 01:21:48   | radios, even though that's a dirty word, than using Wi-Fi for these sensors and general                |
| 01:21:55   | IoT devices.                                                                                           |
| 01:21:57   | And I can read Rosa's mind.                                                                            |
| 01:21:58   | She's thinking, that's exactly what I've been preaching on this show, gang.                            |
| 01:22:04   | Even though you look at it like, I got to get another ethernet cable and I got another                 |
| 01:22:08   | little box at the end of the day when it comes to this home automation stuff, you are making           |
| 01:22:14   | life easier.                                                                                           |
| 01:22:15   | I was just thinking, I've got my office lights, I've got three in there, I've got three in             |
| 01:22:20   | the bedroom, I've got one in the hallway, five in the living room, one in the kitchen.                 |
| 01:22:26   | All of those are connected to my [[Zigbee]] network, which is one dongle that's plugged in.                |
| 01:22:31   | And that's it.                                                                                         |
| 01:22:33   | But if I had all of those connected to the Wi-Fi, then I would be very dependent on not                |
| 01:22:38   | just my Wi-Fi, but also my neighbour's Wi-Fi.                                                           |
| 01:22:42   | Because if my neighbour's Wi-Fi decides that it's going to help on the same channel as                  |
| 01:22:45   | my Wi-Fi, I then have to go and change my Wi-Fi channel and stuff like that.                           |
| 01:22:49   | And if you're thinking, oh my God, that sounds like gobbledygook, don't get Wi-Fi connected            |
| 01:22:53   | devices because you'll regret it at some point when somebody's Wi-Fi interferes with your              |
| 01:22:58   | Wi-Fi or something somewhere collides, it's no fun.                                                    |
| 01:23:02   | But wired is always the best because if you wire something, no one else can interfere with             |
| 01:23:09   | it.                                                                                                    |
| 01:23:10   | Any wireless device, theoretically someone else, not you, a neighbour or in a high-rise                 |
| 01:23:16   | building, if you're right next door in another apartment, there may be some bleed over of              |
| 01:23:21   | radio signals.                                                                                         |
| 01:23:22   | So the ideal from a reliability point of view, but not from a cost and installation, is wired.         |
| 01:23:29   | I still recommend wired shades, wired door sensors, but that's not practical in many                   |
| 01:23:35   | situations.                                                                                            |
| 01:23:36   | And I understand that and I do that myself.                                                            |
| 01:23:39   | So at least get your sensors and other devices on to [[Zigbee]] or something else.                         |
| 01:23:45   | And you'll be solving your problems from the beginning rather than troubleshooting them                |
| 01:23:50   | afterwards.                                                                                            |
| 01:23:51   | Yeah.                                                                                                  |
| 01:23:52   | Setting yourself up for an easier success is always a win.                                             |
| 01:23:57   | So if people are listening, because I know this is something I think about sometimes,                  |
| 01:24:02   | it's like, how often should we be updating our Wi-Fi?                                                  |
| 01:24:06   | Because the technology does continue to improve.                                                       |
| 01:24:08   | Like for me, buying a mesh network of routers dramatically improved the Wi-Fi performance              |
| 01:24:15   | in my house.                                                                                           |
| 01:24:18   | What's your advice to people on those subjects?                                                        |
| 01:24:22   | With Wi-Fi, there's really been a few evolutions.                                                      |
| 01:24:24   | The original Wi-Fi was 2.4 gigahertz.                                                                  |
| 01:24:27   | The next big improvement was the introduction of five gigahertz band, which allowed streaming          |
| 01:24:33   | video, streaming cameras, high bandwidth devices, laptops, computers, even driver arrays to            |
| 01:24:40   | work with enough throughput to be not just usable, but comfortably used.                               |
| 01:24:46   | The third breakthrough was mesh for the consumer.                                                      |
| 01:24:50   | The ability to have multiple Wi-Fi radios that give you the coverage rather than trying                |
| 01:24:55   | to have one.                                                                                           |
| 01:24:58   | You saw those Wi-Fi units with 10 antennas sticking out.                                               |
| 01:25:00   | They looked like spiders on their backs or tarantulas.                                                 |
| 01:25:06   | You're fighting physics.                                                                               |
| 01:25:07   | So that's been the last major breakthrough.                                                            |
| 01:25:12   | Beyond that have been incremental improvements in speed and capacity.                                  |
| 01:25:17   | So I would recommend buy what you need, but don't buy the latest and greatest, which is                |
| 01:25:22   | overpriced.                                                                                            |
| 01:25:23   | Wi-Fi 6 primarily was about device density, having a lot more devices in the same area.                |
| 01:25:33   | And what folks don't realise is that density is for stadiums, movie theatres, businesses,              |
| 01:25:41   | places that want hundreds or thousands of people on Wi-Fi at the same time.                            |
| 01:25:46   | The Wi-Fi 6 density was not for homes.                                                                 |
| 01:25:51   | It did bring higher speed, potentially higher speed up to maybe a gigabit or close to it.              |
| 01:25:58   | So the newest iPhones and tablets could get more raw speed, but it's speed that is limited             |
| 01:26:05   | by the other end.                                                                                      |
| 01:26:08   | When you're talking to Netflix, when you're doing Zoom calls, you don't get the maximum                |
| 01:26:13   | speed end-to-end.                                                                                      |
| 01:26:15   | You're restricted by the servers, the shared equipment, the shared internet in between.                |
| 01:26:20   | So that theoretical spec speed is not achieved a lot of the time.                                      |
| 01:26:26   | So in practicality, even Wi-Fi 5 is more than acceptable with our modern devices.                      |
| 01:26:34   | So if we look at the last thing coming now, Wi-Fi 7, Wi-Fi 7 is extremely expensive today.             |
| 01:26:41   | It's not yet standard.                                                                                 |
| 01:26:43   | The companies have rushed products to market that are pre-standard.                                    |
| 01:26:47   | They're designed to meet the standard, but they're not able to put the standard label                  |
| 01:26:52   | on the box because the testing hasn't been finished.                                                   |
| 01:26:57   | Hopefully, it'll be a firmware change or a minor software update, but you cannot buy                   |
| 01:27:02   | a Wi-Fi 7 certified product today.                                                                     |
| 01:27:06   | So unless you're completely bleeding edge and you want that over one gigabit speed that                |
| 01:27:12   | it can deliver, I would say it's not yet ready for normal people to use, average people to             |
| 01:27:19   | use.                                                                                                   |
| 01:27:20   | The other challenge of Wi-Fi 7 is to get that speed and to get that speed on more than one             |
| 01:27:26   | device, you have to upgrade your router and your internet.                                             |
| 01:27:31   | If you don't have a one gigabit internet connection and you don't have a router device, the device     |
| 01:27:38   | that connects between your internet line and your home that can do that kind of speed and              |
| 01:27:45   | throughput for more than one device, you're not going to get that benefit.                             |
| 01:27:50   | No.                                                                                                    |
| 01:27:51   | I mean, if you've got something like a NAS at home where you've got all of the films                   |
| 01:27:56   | and shows that you've ripped off of DVD over the years, assuming of course that's legal                |
| 01:28:00   | where you are, then you can stream that across your home at a gigabit.                                 |
| 01:28:06   | But even so, you're probably not going to actually see that on the device at the other                 |
| 01:28:11   | end.                                                                                                   |
| 01:28:12   | And let's face it, if it's a TV, how often does the TV move around your house?                         |
| 01:28:15   | Could you maybe run an ethernet cable there and get the same benefit for $10 instead of                |
| 01:28:21   | however much it's going to cost to replace your whole home network?                                    |
| 01:28:24   | I mean, if you're just using a network provider provided router from six years ago, you probably       |
| 01:28:33   | want to look at upgrading your home internet or Wi-Fi network.                                         |
| 01:28:38   | But if you've got decent stuff, eros from a year or two ago, you don't need to be rushing              |
| 01:28:43   | to upgrade things.                                                                                     |
| 01:28:46   | There's not really a lot of points because within your home, it's probably actually                    |
| 01:28:52   | realistically going to introduce more problems than it solves because you're going to have             |
| 01:28:57   | to either configure your network to be exactly the same as it was before and still repair              |
| 01:29:01   | some devices that are doing things right, or you're going to have to connect everything                |
| 01:29:06   | to a whole new Wi-Fi network, and that's work that most people don't want to do.                       |
| 01:29:10   | Well, I'm going to tell people to spend money.                                                         |
| 01:29:13   | I say, if you don't have a mesh network, you should look into it because it was shocking               |
| 01:29:19   | to me how much better.                                                                                 |
| 01:29:21   | Even because of the nature of mesh networking, remote areas of the house just suddenly had             |
| 01:29:27   | solid and reliable Wi-Fi.                                                                              |
| 01:29:30   | Back in the day, when they were doing a lot more throttling at AT&T, I remember a couple               |
| 01:29:35   | months we were, our AT&T was getting throttled on our phones, and I couldn't understand why            |
| 01:29:41   | until I realised my kids were upstairs watching Netflix off the cellular network because they          |
| 01:29:47   | just could never get a Wi-Fi, and then they just switched it over, and I'm like, we used               |
| 01:29:53   | all our data in two days, but that doesn't happen anymore.                                             |
| 01:29:57   | With these networks, not only do I get it throughout the house, I get it in the backyard.              |
| 01:30:01   | I've got some Wi-Fi cameras for the [[eufy]] system, and they need a Wi-Fi signal, and they work           |
| 01:30:07   | in the front yard.                                                                                     |
| 01:30:08   | It's all like it was a magic cure for me in terms of it.                                               |
| 01:30:13   | Robert talked about how that was a big jump, but I don't think everybody has got on board              |
| 01:30:17   | with mesh networks yet, and I think anyone you buy at this point is probably going to                  |
| 01:30:23   | be an improvement for you.                                                                             |
| 01:30:24   | Yeah, definitely would recommend anyone that still has a single Wi-Fi unit in their house,             |
| 01:30:31   | and they're having coverage problems or performance problems.                                          |
| 01:30:35   | Look at any of the popular consumer mesh Wi-Fi solutions.                                              |
| 01:30:39   | It's plug-and-play as much as it can be.                                                               |
| 01:30:42   | It's affordable.                                                                                       |
| 01:30:44   | There are good brands at the $100 unit price level, not $500 or $1,000, and it's pretty                |
| 01:30:52   | much a no-brainer if you need to get your Wi-Fi under control.                                         |
| 01:30:56   | But I would not jump to the higher-end fancier products unless you want them, or you need              |
| 01:31:02   | them, or you're willing to pay for them, but they're not a necessity.                                  |
| 01:31:06   | No, no.                                                                                                |
| 01:31:08   | The only thing is, if you've got a smart home Wi-Fi device that's acting a bit flaky, but              |
| 01:31:13   | otherwise you think your network is absolutely fine, I'm going to say blame the network first.         |
| 01:31:20   | Don't blame the network last.                                                                          |
| 01:31:22   | If you've got a Wi-Fi device that's in [[HomeKit]] and sometimes it's not responding, it's probably        |
| 01:31:27   | going to be your network.                                                                              |
| 01:31:30   | One of the most common problems I see in just straight-up [[HomeKit]] is actually the network              |
| 01:31:36   | that everything's connecting through.                                                                  |
| 01:31:40   | Moving some things around, if you do have multiple routers or upgrading to a mesh network,             |
| 01:31:44   | it's probably going to fix that for that device.                                                       |
| 01:31:47   | Next time you know better, you can get [[Zigbee]], but you're still going to want all your devices         |
| 01:31:51   | to connect really well wherever you are in your home.                                                  |
| 01:31:54   | I would say slightly differently along those lines.                                                    |
| 01:31:58   | Instead of buying new Wi-Fi equipment, replace those smart home devices with non-Wi-Fi devices.        |
| 01:32:05   | Get some [[Zigbee]] or get some [[Lutron]] or whatever Philips Hue for [[Zigbee]] lights.                          |
| 01:32:11   | Put your budget into getting all your [[HomeKit]] or smart home devices off Wi-Fi as much as               |
| 01:32:18   | possible.                                                                                              |
| 01:32:20   | That's such an easy call.                                                                              |
| 01:32:21   | I mean, Rose and I talk about [[Aqara]], I feel like every episode, but get an [[Aqara Hub]] and               |
| 01:32:27   | the [[Aqara]] sensors and devices are not that expensive.                                                  |
| 01:32:32   | It's shocking how reliable they are for how little they cost.                                          |
| 01:32:37   | That brings up a related point is besides the fear or the reluctance to buy a so-called                |
| 01:32:43   | hub device to connect all these devices, some people that still have a small internet router           |
| 01:32:50   | with only four ports on the back and they don't have the capacity, those four ports are used.          |
| 01:32:56   | I just want to remind people, you can buy a simple, dumb Ethernet switch, which is a                   |
| 01:33:02   | little box that fits in the palm of your hand and it will convert one Ethernet port into               |
| 01:33:07   | four or eight more ports.                                                                              |
| 01:33:10   | These boxes are $10, $20, $30 at the most and they give you many extra ports.                          |
| 01:33:18   | Don't let the lack of physical connection on your router or existing network device stop               |
| 01:33:25   | you from adding hubs if that's the only thing blocking it.                                             |
| 01:33:30   | Like a 16 port switch and a bag of six-inch Ethernet cables and I think the whole thing                |
| 01:33:42   | was like $60 for the whole enchilada and now anytime I have another thing show up in the               |
| 01:33:48   | house, I just stick it in.                                                                             |
| 01:33:50   | Also, keep in mind that Ethernet is like electricity, it's like water, wherever you have a plug        |
| 01:33:57   | in your house, you can plug in a hub, it doesn't all have to be 10 feet away or five feet              |
| 01:34:03   | away from your main point of entry where your router and internet comes in.                            |
| 01:34:09   | You might find in your office or in a bedroom is a more convenient place and a better place            |
| 01:34:16   | for these other hubs to be installed if you have Ethernet going to a few places in your                |
| 01:34:21   | house.                                                                                                 |
| 01:34:22   | Robert, you are so plugged into this stuff.                                                            |
| 01:34:26   | Where do you think we're going to be with the general trend in a year or two with [[Matter]]               |
| 01:34:31   | and some of these home kit innovations we're starting to see today?                                    |
| 01:34:35   | Well, I would like to think that [[Matter]] will continue to improve and we'll get to the point            |
| 01:34:41   | that every device will have a [[Matter]] sticker on it and it won't be a confusion factor when             |
| 01:34:47   | you're buying something new.                                                                           |
| 01:34:49   | It'll plug in, it'll work, you'll get a level of capability and you'll only have to jump               |
| 01:34:54   | to third-party apps or third-party controllers or hubs if you want to do much more advanced            |
| 01:35:01   | specialised work.                                                                                      |
| 01:35:03   | Firstly, secondly, and this is kind of the bigger thing in my industry of the custom                   |
| 01:35:09   | and mid-range systems, I hope [[Matter]] lights a fire under the traditional product line.                 |
| 01:35:16   | A lot of the existing systems are just way overpriced for what they do, but more importantly,          |
| 01:35:22   | they're clunky, their technology is still 1980s, 1990s, there's no reason for them to                  |
| 01:35:30   | be so far behind other than having captive customers and captive dealers.                              |
| 01:35:36   | We do see the classic [[Ring Doorbell]] encroaching and dealers and systems saying, okay, we'll            |
| 01:35:43   | support ring, but with hundreds and thousands of devices supporting [[Matter]], it's simply                |
| 01:35:49   | going to be a matter of time before these bigger systems will have to embrace [[Matter]]                   |
| 01:35:56   | devices and at least accommodate them, which they do not do today at all, even with [[HomeKit]]            |
| 01:36:02   | or Google or [[Amazon]] products, they're very difficult to connect into larger systems.                   |
| 01:36:09   | I hope that will change by the force of the consumer.                                                  |
| 01:36:12   | Well, Robert, I appreciate you coming in today.                                                        |
| 01:36:15   | It's always great having you on the show and catching up with automation in general and                |
| 01:36:20   | trends in the business.                                                                                |
| 01:36:21   | Gang, if you're interested in getting help with Robert, we're going to put his contact                 |
| 01:36:25   | information in the notes to the show.                                                                  |
| 01:36:27   | You can reach out to him.                                                                              |
| 01:36:31   | I guess we're going to wrap it up there.                                                               |
| 01:36:32   | We are the Automators podcast.                                                                         |
| 01:36:34   | You can find us at relay.fm.com/automators.                                                      |
| 01:36:36   | Robert, where do people go to find you?                                                                |
| 01:36:39   | Well, I've started a YouTube channel to provide more educational information, so you can go            |
| 01:36:44   | there.                                                                                                 |
| 01:36:45   | It's at do it for me solutions, all one word.                                                          |
| 01:36:49   | And of course, everything else is based on my website, www.doitforme.solutions.                        |
| 01:36:58   | All my contacts and social links are there also.                                                       |
| 01:37:01   | All right.                                                                                             |
| 01:37:02   | We want to thank our sponsors today, LinkedIn Talent Solutions, ExpressVPN, and Vitally.                |
| 01:37:08   | If you want to check in on the forums, you can find them over at talk.automators.fm.                   |
| 01:37:13   | And we'll see you next time.                                                                           |

[^1]: "micro-millimetre wave" is not a thing. There are microwaves and there are millimetre waves - separate things and based on the wavelengths of the waves. [[Human Presence Sensor\|Human presence sensors]] currently use millimetre wavelength electromagnetic waves