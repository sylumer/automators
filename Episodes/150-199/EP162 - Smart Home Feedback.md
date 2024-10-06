---
status: "incomplete"
fc-date:
  year: 2024
  month: 08
  day: 23
fc-category: "podcast"
podcast: "Automators"
published: 2024-08-23
duration: 2251
formattedduration: "00:37:31"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/162"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators162.mp3"
episode: 162
title: "162: Smart Home Feedback"
---
![Automators Logo.jpg|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary respond to some listener feedback and share updates on smart home technology and solutions.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 162 Discussion](https://talk.automators.fm/t/162-smart-home-feedback/17953)

# Sponsors
- None.

# Show Notes
- [Presence Sensor FP1E - Aqara](https://www.aqara.com/en/product/presence-sensor-fp1e/)
- [Presence Sensor FP2 - Aqara](https://www.aqara.com/en/product/presence-sensor-fp2/)
- [Hub M2 - Aqara](https://www.aqara.com/en/product/hub-m2/)
- [SwitchBot Universal Remote | Simplify & Consolidate Infrared Devices – SwitchBot UK](https://uk.switch-bot.com/products/switchbot-universal-remote)
- [Universal Remote – Broadlink Global Store](https://ebroadlink.com/collections/universal-remote)
- [Hub-M3 - Aqara](https://www.aqara.com/en/product/hub-m3/)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Hello and welcome to Automators, the Automation Podcast about grabbing your technology and              |
| 00:07      | encouraging it to do your bidding for you. My name is Rosemary Orchard and I'm joined                   |
| 00:11      | as always by my pal and co-host, David Sparks. Hey, David, how are you?                                 |
| 00:14      | I'm doing great, Rose. Looking forward to today getting into some fun automation with you, as           |
| 00:20      | always. Yeah. Yeah. And yeah, we thought today we would do a little combination of two things,          |
| 00:28      | because we get a lot of feedback here on the show. We do, you know, are absolutely best to              |
| 00:32      | read it all. There is a lot of it sometimes. And it's really lovely to see all of that. We've had       |
| 00:38      | some feedback recently about smart home things in particular. And we thought that today's episode       |
| 00:44      | would be a good opportunity to talk about some of that feedback that we've had and also how we          |
| 00:50      | are integrating some of this in our own homes and lives, maybe to give some of you ideas and,           |
| 00:56      | you know, maybe just to share some alternatives with everybody. Yeah. [[HomeKit]] and home automation      |
| 01:04      | is something that a lot of people are always looking into. And it's something that's always             |
| 01:09      | changing a bit. So I thought it would just be fun to do a little catch up. I'm going to start.          |
| 01:14      | I bought something that has helped. One of the big questions we get from guests and listeners is,       |
| 01:20      | I just want the lights to turn on when I walk in the room, the lights to turn off when I leave          |
| 01:25      | the room. That that is a very common request. I think for a lot of people, that's kind of like          |
| 01:30      | the gateway drug to automation, you know, make it so the lights turn on, you know, and, and I think     |
| 01:35      | that's a fair request. But historically, we haven't had really great answers for that because like,     |
| 01:41      | you know, an infrared detection would be one, you know, where you look for the person walking           |
| 01:46      | through the room. But the problem would be if you sat still in a room long enough,                      |
| 01:49      | it would forget you're there. And, you know, there's, there's lots of different attempts we made.       |
| 01:55      | Rose had a motion sensor on the bottom of her chair to kind of try and remind the room that             |
| 02:00      | she was there. Yeah. These [[Human Presence Sensor\|human presence sensors]] have got pretty good over the years.                  |
| 02:05      | And so recently I bought the latest from [[Aqara]]. It's the [[Zigbee]] [[Aqara Presence Sensor#FP1E\|Presence Sensor FP1E]]. Now,              |
| 02:13      | this one, they had the [[Aqara Presence Sensor#FP2\|FP2]], which is more powerful. And the [[Aqara Presence Sensor#FP1E\|FP1E]] is less expensive. I think I paid      |
| 02:20      | like $40 for it on [[Amazon]]. And it's still a great human presence sensor. And this solves that problem   |
| 02:27      | of when someone comes in the room, you need to have, if you're using it on a [[HomeKit]], you need         |
| 02:33      | to have an [[Aqara Hub]] because the [[HomeKit]] has to see the [[Aqara Hub]] to bring the sensor into             |
| 02:38      | your system. If you're using something like [[Home Assistant]], you can, you can plug it directly           |
| 02:42      | and you don't need the, the [[Aqara Hub]] for that. But my experience with it has been great. I do          |
| 02:48      | have an [[Aqara Hub]]. I connected it through [[HomeKit]] just because I feel like that's the thing most        |
| 02:53      | people are going to want to do. And when I walk in the room, the lights turn on, when I walk out        |
| 02:58      | of the room, the lights turn off. The only downside for me is there's one little corner of the room     |
| 03:03      | where I go over and like pull a bin out and I'm out of the view and then the lights turn out.           |
| 03:08      | And because I'm running it through [[HomeKit]], I don't have enough granular control. Now,                  |
| 03:13      | if I had run this thing through [[Home Assistant]], I could say wait five minutes before the lights         |
| 03:17      | out and then I wouldn't have that problem. And that's the thing I need to do is switch,                 |
| 03:22      | switch it over to [[Home Assistant]]. But I wanted to start with the easy one because I think a lot         |
| 03:26      | of people listening don't want to go all the way down the [[Home Assistant]] rabbit hole. You have          |
| 03:30      | [[HomeKit]] already. You're good to go. If you buy one of these presence sensors, the [[Aqara Presence Sensor#FP1E\|FP1E]], along with      |
| 03:36      | one of the [[Aqara Hub\|Aqara Hubs]], you should be good to go. And that is a simple answer to the question,           |
| 03:42      | how do I make my lights turn on and off when I would come in and leave the room?                        |
| 03:47      | Yeah. And this is a lot better than just your standard basic average motion sensor, which               |
| 03:52      | some of those you can get for as little as say $10, including ones from [[Aqara]],                          |
| 03:55      | which you would think, oh, $10, that's great. Let's start with that. But the problem with those         |
| 04:00      | is if you've ever been in a public bathroom and you've been in there and then the lights have gone      |
| 04:05      | off because it's just very, very reactive to, oh, there's nobody here. I'm turning this off.            |
| 04:10      | And it's like, okay, great. Now I'm sitting in the dark and you're sitting there waving your arms       |
| 04:14      | in the bathroom, trying to get the lights to turn back on so you can see to find the toilet paper       |
| 04:19      | or something. That's the problem with [[IR]]. It only is looking for motion rather than presence.           |
| 04:26      | And that is the difference because you can actually, with human presence, you can even                  |
| 04:30      | tune it to go through walls and so on. But it can detect that somebody, for example, is lying in bed    |
| 04:36      | asleep. And the [[Aqara Presence Sensor#FP1E\|FP1E]] is an improvement over the [[Aqara Presence Sensor#FP1\|FP1]], which I have a couple of the [[Aqara Presence Sensor#FP1E\|FP1s]]. And I have      |
| 04:46      | done, I've spent quite a bit of time playing with them and tuning them to get them right because        |
| 04:51      | you can control, there's a sort of grid that goes out from the sensor. And so you can say, hey,         |
| 04:59      | within a range, a low, medium, or far distance, and what kind of motion, is it a small amount of        |
| 05:08      | motion will trigger this or a medium amount of motion or a large amount of motion to trigger            |
| 05:11      | this to make it see a human? So if you've got cats, for example, cats may be a bad example              |
| 05:17      | because cats will be everywhere. They're not supposed to be. If you have a dog, especially a            |
| 05:21      | small dog that does not jump, then you could say, okay, let's ignore the floor area or robot vacuum.    |
| 05:27      | Robot vacuum is perhaps an even better example because that definitely shouldn't be jumping             |
| 05:31      | around. Then you can say, ignore the bottom area of the grid and just go for everything from sort       |
| 05:39      | of knee height upwards. Because then it's going to ignore your robot vacuum. Your robot vacuum is       |
| 05:43      | not going to trigger the lights at any point. But then everything else will, which is great. I mean,    |
| 05:49      | then if you've got crawling children, you may have to figure out something for that. But usually,       |
| 05:52      | if you've got crawling children, you'll probably be with said crawling children. So it's really         |
| 05:57      | nice that there are options to play with this and tune it. But the [[Aqara Presence Sensor#FP1E\|FP1E]], you don't have to do a lot     |
| 06:04      | of that to get that working. Whereas the [[Aqara Presence Sensor#FP1\|FP1]], there was a lot more required to get it working.          |
| 06:08      | It was the first one that a car released. And versus the [[Aqara Presence Sensor#FP2\|FP2]], this one, it does require the [[Aqara Hub\|hub]]         |
| 06:15      | instead of working over Wi-Fi. But that also means it's not clogging up your Wi-Fi network.             |
| 06:19      | So that's definitely an improvement, at least in my eyes, from that side of things. And it's            |
| 06:24      | fully local. So the [[Aqara Presence Sensor#FP1E\|FP1E]] doesn't have things like light detection. And I don't believe it has           |
| 06:31      | specific sleep and fall monitoring. So just like your [[Apple Watch]] has fall detection built in,          |
| 06:36      | the [[Aqara Presence Sensor#FP2\|FP2]] does have fall detection. And I actually just got one of those, David. So I'm going to          |
| 06:41      | have to do a little experimentation, because I am hoping actually to set this up in my grandmother's    |
| 06:46      | living room for her. So that if she does fall over in the living room, it can detect it and then        |
| 06:51      | send my mom a message to let her know just to help us. Because she mentioned that she's                 |
| 06:57      | not been feeling so great on her feet recently. And if I can get this working,                          |
| 07:01      | then this seems like a really great option so that it can automatically text my mom and say,            |
| 07:08      | hey, she's fallen over. You might want to check in. And then if my mom doesn't get a response,          |
| 07:13      | then she can call for help for something like that. So it's good to see that there's multiple           |
| 07:17      | options out there. Yeah. And they're just getting really easy. Like you were talking about dogs         |
| 07:22      | and robot vacuums. I didn't do any settings or anything on this. My dog will walk in here and           |
| 07:28      | it does not turn on the lights. It requires a human. And so that's great. So this is getting            |
| 07:36      | easier. And I feel like that one question that we hear so often, I think if somebody asks me            |
| 07:40      | in the future, I'm going to say a car [[Aqara Presence Sensor#FP1E\|FP1E]] plus a [[Aqara Hub\|hub]]. And then you're off to the races.                |
| 07:46      | Yes. Especially as the [[Aqara Hub\|hub]] is a gateway to all the other [[Aqara]] products as well,                        |
| 07:51      | which are usually very affordable. Yeah. Because the [[Aqara Water Leak Sensor\|leak sensors]],                                      |
| 07:54      | there's a lot of reasons to get that hub, especially if you're just in [[HomeKit]].                        |
| 07:59      | This always brings up for me the challenge of do I move more stuff into [[Home Assistant]]?                 |
| 08:06      | Like, you know, the thing I said earlier about this does turn the lights off if I'm in one              |
| 08:10      | tiny corner of the room. Now, all I would need to do is have a setting that said,                       |
| 08:15      | leave it on for five minutes before you turn off. Because I'm never in that corner more than five       |
| 08:19      | minutes. And that is absolutely doable with something like [[Home Assistant]]. But then my whole            |
| 08:25      | family has got [[HomeKit]] figured out they're not technical and they love [[HomeKit]]. And I don't           |
| 08:31      | want to do anything to break that because if it stops working for them, then I got a problem. So        |
| 08:37      | it's like, I'm always so leery of moving more stuff into [[Home Assistant]]. But this is one that           |
| 08:43      | does tend to me because I feel like there's one little additional feature that [[HomeKit]] doesn't         |
| 08:48      | have that [[Home Assistant]] does. And I do have a [[Home Assistant]] device here. So I could do it.            |
| 08:53      | But yeah, I do worry about, you know, breaking things.                                                  |
| 08:58      | Yeah. I mean, what I've done and what I would encourage people to do if they are looking at             |
| 09:02      | going down the [[Home Assistant]] path is, you know, by all means start small. But ideally,                 |
| 09:07      | what you should be doing, at least in my mind is setting everything up in [[Home Assistant]] and            |
| 09:12      | then showing it back to [[HomeKit]]. Because then in [[Home Assistant]], if something happens or doesn't       |
| 09:17      | happen, you can look at, you know, that individual thing and see, oh, there was a request from home     |
| 09:23      | kit to turn this off. That's why that light is off because [[HomeKit]] turned it off. So you               |
| 09:28      | can still have your [[HomeKit]] automations and so on running and so on. And everybody else in the         |
| 09:33      | family has to use [[Home Assistant]]. That's the thing. You know, ideally, you know, you at some point      |
| 09:38      | maybe get them to install the app on their phones so that you could do presence detection for them      |
| 09:44      | via [[Home Assistant]] and see, you know, where they are. But even if not, then there's ways around         |
| 09:49      | that with [[Home Assistant]] and the smart home stuff. The more complicated I'm making for them, though,    |
| 09:55      | it's bad. Yeah. Yeah. So, you know, but you don't have to go down that route. You can just start        |
| 10:00      | with, you know, pulling one thing and especially because you use [[Lutron]] light to connect the            |
| 10:04      | [[Lutron]] lights to [[Home Assistant]] and [[HomeKit]]. So you have both options available there.                 |
| 10:09      | There's a family thing where Daisy and the girls are leaving town for a weekend in a few months.        |
| 10:15      | And maybe that's what I'll do. And I'll just really restructure everything.                             |
| 10:21      | I don't know. It's something that weighs on me because as a nerd, I kind of want the [[Home Assistant]]     |
| 10:26      | extra features. But like I said, they, you know, it took a long time to get this to a point where       |
| 10:32      | they embraced it, but they have, you know, and, you know, my wife loves it. She can turn the            |
| 10:37      | air conditioning out on the way home or we can be upstairs in bed and make sure the doors are           |
| 10:40      | locked and all that stuff. I just don't want, if I break that, then I've done, it's kind of like        |
| 10:46      | the [[Apple Maps]] situation of the household, right? Once it doesn't work once, then you've got to like    |
| 10:52      | regain their trust. And if I add the complexity of [[Home Assistant]], I can completely see me doing        |
| 10:58      | that in a way that causes a problem. Yeah. Yeah. That is always the tricky bit. But you mentioned       |
| 11:05      | air conditioning, David. And we actually have some feedback about air conditioning from James.          |
| 11:11      | And James said, listening to the show, we were talking about the [[Broadlink Smart IR Blaster]].            |
| 11:17      | And James uses [[Aqara Hub#M2\|the black Aqara Hub]], which actually also ties into what we were just talking about,      |
| 11:22      | because that also has an [[IR Blaster]] built into it. And that works quite well with [[HomeKit]] directly,     |
| 11:26      | which is good to know because I tried it and it was a bit finicky, but it was also trying to            |
| 11:30      | control a 10-year-old TV at the time. And it didn't have that TV in the database and things got very,   |
| 11:36      | very wonky very quickly. But James is using the [[Aqara Hub]], so that's the [[Aqara Hub#M2\|M2 Hub]], which is available     |
| 11:42      | from [[Apple]] and from [[Aqara]] and through [[Amazon]]. And it's operating his TV and air conditioning unit       |
| 11:47      | quite nicely. And that's pretty good to hear, just as a potential addition to what David was            |
| 11:55      | suggesting there with the [[Aqara Presence Sensor#FP1E\|FP1E]]. But it's also just good to hear that that is working. And I have a      |
| 12:02      | little addition to the [[Broadlink Smart IR Blaster\|Broadlink adapter]] that I'm using, because I've got a [[Broadlink Smart IR Blaster\|Broadlink adapter]] in my     |
| 12:08      | kitchen to control my kitchen TV, which for reasons I still don't quite understand, the previous owners |
| 12:14      | replaced the front of one of my kitchen cabinets with a television. This thing is probably              |
| 12:20      | 7-8 cm deep, so like 3 inches deep, which means I lose a lot of valuable cabinet space. And my          |
| 12:28      | kitchen is minuscule. But there is a TV built in there. Unfortunately, the TV is now of such an age     |
| 12:34      | and the remote control is one of those materials that's just gone really gummy over time. And           |
| 12:38      | it's absolutely horrible. And I never want to touch it, let alone when I'm in the kitchen               |
| 12:42      | doing things like cooking and so on, because I can't really clean it anymore. So I got a [[Broadlink Smart IR Blaster\|Broadlink]]      |
| 12:47      | and I put that in the kitchen. And so now I can ask [[Siri]] to turn my TV on and turn my TV off            |
| 12:55      | and so on, which is pretty cool. And that works very well for me. But I also spotted something          |
| 13:01      | else recently, David, because you mentioned just now getting Daisy and your girls on board with         |
| 13:08      | smart home stuff took a while. And for a lot of people, they're very familiar with having               |
| 13:13      | these remote control to control, say, air conditioning and fans and televisions and so on.              |
| 13:18      | And if you try and take that away from them, there will be a revolt, very understandably.               |
| 13:24      | But what I realised recently that I want is I have a tower fan in my bedroom, which is great            |
| 13:29      | when it gets a bit warm here in the UK. I don't really need air conditioning, to be honest. My          |
| 13:33      | place usually stays fairly cool. But every so often, it does get quite warm. And I have a tower fan     |
| 13:39      | fan that I just run when I want to. But this did not come with a remote control.                        |
| 13:45      | It's from [[Princess]]. So it uses the [[HomeWizard Climate App\|HomeWizard Climate]] app to be controlled.                            |
| 13:53      | And unfortunately, when I bought it, I kind of thought that I could get everything into                 |
| 13:56      | [[Home Assistant]] because I hadn't really started using [[Home Assistant]] at the time.                        |
| 13:59      | And it's a bit of a pain to get this one into [[Home Assistant]]. So that was a bit of a no-go.             |
| 14:04      | But I discovered recently, whilst browsing around the internet, that [[SwitchBot]],                         |
| 14:10      | which are the people they make curtain controls that you can clip onto curtain rods and rails           |
| 14:16      | and blind tilts. And they've branched out into smart locks and robot vacuums and all sorts              |
| 14:20      | of other things recently. They've added a new product to their lineup, which is the [[SwitchBot Remote]].          |
| 14:25      | And I already had a [[SwitchBot Hub]] in my bedroom because I have [[SwitchBot Curtain Opener\|SwitchBot curtains]] in there.     |
| 14:32      | And I remembered, oh, the [[SwitchBot Hub]] has an [[IR Blaster]] built into it as well.                        |
| 14:38      | That's pretty cool. Let's give this a try. So I put this... So I started playing around and             |
| 14:43      | my fan was not listed as an option. And so I thought I was kind of at a dead end.                       |
| 14:49      | And I reached out to [[Princess]] to see if I could buy... There is an actual remote control                |
| 14:52      | that you can buy, but I didn't really want to pay 20 euros for a remote control. And then               |
| 14:56      | they couldn't even ship it to the UK. It was a whole thing. And so I was just messing around,           |
| 15:00      | selecting random fans in the [[SwitchBot]] app. And I'm not going to say that this is the way to go,        |
| 15:08      | but if you ever have a fan where you've lost your remote control for it, or you want to                 |
| 15:12      | "smartify" it, you may find that you can use [[Broadlink]] or [[SwitchBot]], or if you've got an                  |
| 15:17      | old [[Logitech *Harmony*]] floating around at home, they don't make them anymore, but they still work.        |
| 15:22      | Then you may find that if you just select random things that are quite similar,                         |
| 15:26      | you may find something that actually has all the controls for your device.                              |
| 15:29      | And I found one for my fan, where it can work through the [[SwitchBot Hub]].                                |
| 15:34      | So I then bought the [[SwitchBot Remote]], which allows you to have four different devices on it.           |
| 15:39      | It's got physical on and off buttons, and then it can control more than four devices.                   |
| 15:46      | But then you can press the buttons on the remote control to make things happen,                         |
| 15:50      | which is great when I'm mostly asleep and the fan is bothering me or I'm too hot.                       |
| 15:55      | Then I can just press the on button or the off button, assuming I've left it in the fan mode,           |
| 15:58      | to control the fan in my room without having to either get my phone out and find the app                |
| 16:04      | and control it through the app or get up and press the buttons on top of the tab fan itself.            |
| 16:10      | So I'm going to give a recommendation for the [[SwitchBot Remote]].                                         |
| 16:13      | And I have the [[SwitchBot Hub#Hub Mini\|mini hub]] in my bedroom, but I also have the [[SwitchBot Hub#Hub 2\|SwitchBot 2 Hub]] in my office,                |
| 16:20      | which is the [[Matter]] one, and that works pretty well as well. So some options there for folks.          |
| 16:25      | Yeah. And I have one more. If you are just looking to control like a mini-split AC system,               |
| 16:31      | there is a specific product on [[Amazon]] called...                                                         |
| 16:36      | Is it the [[Broadlink]] by any chance?                                                                      |
| 16:38      | No, [[Mysa Smart Thermostat\|Mysa Smart Thermostat for MiniSplit]]. And it works with most of them.                                |
| 16:43      | And it's a thermostat on the wall that shows the temperature and an up and down arrow                   |
| 16:47      | comes with an app. And it has an [[IR Blaster]] in it, as I understand it. I don't own one,                 |
| 16:53      | but I've been told by several people they work with just about them all.                                |
| 16:56      | That's another way to put the control onto your device.                                                 |
| 17:02      | One piece of follow-up I wanted to see, Rose, was we talk about [[Aqara]] lot.                            |
| 17:08      | Since the last time we talked about [[Aqara]] has released a new product, the [[Aqara Hub#M3\|M3 Hub]].                       |
| 17:12      | The [[Aqara Hub#M2\|M2 Hub]] was the state of the art last time we covered them.                                          |
| 17:17      | And so they've got the new [[Aqara Hub#M3\|M3 Hub]]. It is more [[Matter\|matter-friendly]], I guess I would say.                     |
| 17:22      | Yes. The other one got [[Matter]] support through an update.                                                |
| 17:25      | This one has [[Matter]] support built right in. It's [[Power Over Ethernet\|power over ethernet]].                                   |
| 17:30      | I don't know how many devices it supports. I'm assuming they up the number of devices                   |
| 17:36      | that it supports with the [[Aqara Hub#M3\|M3 Hub]]. Two-way [[IR Blaster]] for better detected and synchronisation.           |
| 17:42      | So this kind of gets back to what we were talking about.                                                |
| 17:44      | Like you could put one of these in a room where you needed an [[IR Blaster]],                               |
| 17:49      | like for a television or an air conditioner or a sailing fan and program it.                            |
| 17:53      | And as I understand it, you could put that straight into [[HomeKit]].                                      |
| 17:56      | You don't have to go through [[Home Assistant]] to make it work as you do with [[Broadlink]].                   |
| 18:02      | So that's a pretty nice looking piece of kit, $130 if you want to update it.                            |
| 18:08      | I guess there's really no reason you couldn't run two of these hubs on your network at the same time.   |
| 18:13      | No. And also the way that the matter setup works with [[Home Assistant]] for folks who are curious          |
| 18:21      | is you can figure something in [[HomeKit]] and then you share it to [[Home Assistant]].                         |
| 18:26      | That's how matter setup for devices works.                                                              |
| 18:29      | And that is definitely something that is worth considering for folks who are looking to get             |
| 18:36      | into this stuff and maybe get some of the more advanced controls and options.                           |
| 18:39      | And the only thing I will say about matter is because I recently made a mistake, David.                 |
| 18:45      | I needed a replacement smart plug with energy monitoring because one of mine met with an                |
| 18:49      | unfortunate end. I apparently have a cat. I don't have a cat,                                           |
| 18:55      | but there is a cat that likes to come in through my kitchen window.                                     |
| 18:57      | So one of my motion sensors took a bath in the sink because I'd left a bowl soaking overnight           |
| 19:02      | and the motion sensor got knocked into the sink. Fortunately, the motion sensor survived.               |
| 19:06      | And that was all well and good, but my dishwasher is plugged into a smart energy monitoring plug.       |
| 19:11      | So there's a cable running from under a counter up onto another counter and around into the             |
| 19:15      | dishwasher. And I don't know what Kitty was doing. Kitty was being mischievous, one presumes.           |
| 19:21      | But Kitty decided that it was going to play with this cable in some way and the smart plug ended        |
| 19:32      | up falling out or being pulled out, which is quite an impressive feat. These UK plugs won't             |
| 19:38      | just fall out of their sockets when you look at them. You have to pull pretty damn hard.                |
| 19:43      | So Kitty must have been practicing, I don't know, strength training, pull ups, chin ups.                |
| 19:47      | I don't know. But I'm blaming Kitty at any rate because I definitely,                                   |
| 19:52      | whenever I'm going under there to tidy up and clean up, I always make sure everything's                 |
| 19:56      | plugged in properly because it is plugged into an extension later because my kitchen                    |
| 19:59      | has exactly three power sockets in it for reasons unknown. But yeah, it ended up                        |
| 20:05      | in a pool of water where I had made a rather egregious error with some smart watering for my            |
| 20:13      | plants and I have massively over watered them for a couple of days and I decided after that I           |
| 20:17      | wasn't going to use it. So I bought a new smart plug with energy monitoring. Only I didn't realise      |
| 20:22      | that energy monitoring is not yet supported in the [[Matter]] spec. So it was a matter smart plug           |
| 20:28      | with energy monitoring. But energy monitoring is not available yet through [[Matter]],                      |
| 20:32      | which meant that the energy monitoring didn't show up in [[HomeKit]], didn't show up in [[Home Assistant]],     |
| 20:37      | didn't show up anywhere I had access to. So I ended up having to return it and buy something else       |
| 20:41      | instead. So that's the only thing I will mention when it comes to things saying we've got [[Matter]]        |
| 20:45      | support. The hub and the device may have [[Matter]] support, but all the specifications and features        |
| 20:51      | of it may not have that yet. And hopefully it will soon. But as we all know with various things,        |
| 20:57      | soon does not always equal, definitely will. Yeah. Yeah. Still waiting for that on a few of my          |
| 21:02      | devices. On my, on my [[eufy]] doorbell, that was for some good [[HomeKit]] support five years ago.             |
| 21:09      | Still haven't got there. Yep. Are you sure it's a cat? Not a ghost? I mean, you're literally...         |
| 21:15      | I mean, it would be a pretty impressive poltergeist to be honest. But no, Kitty has definitely made     |
| 21:20      | their presence known in my kitchen. Usually because I wander into my kitchen going,                     |
| 21:24      | huh, why is everything slightly? And then there's meow with a kitty cat rubbing itself                  |
| 21:29      | around my ankles. It's like, oh, hi, it's you again. Fortunately, Kitty is very well behaved            |
| 21:32      | when I pick Kitty up and then put Kitty back outside. I'm not exactly certain where Kitty lives,        |
| 21:37      | but based on the fact that Kitty's letting themselves in through my kitchen window,                     |
| 21:41      | I figure putting the Kitty back outside the kitchen window is fine. I do shut the kitchen               |
| 21:45      | window before putting Kitty back outside because otherwise Kitty is going to come straight.             |
| 21:50      | No, no, I don't even know if there's a boy or a girl to be honest. I haven't checked. It's not          |
| 21:55      | the kind of inspection that I usually do with something that I'm merely acquainted. But either          |
| 22:00      | way, we seem to be getting on well. I'm making a new friend. And I've repositioned some smart           |
| 22:09      | sensors in my kitchen so that they are now in cat-proof positions, which is not something               |
| 22:14      | I thought I would be doing before I owned a cat. But there you go. A cat owns me.                       |
| 22:19      | Yeah, there you go. So we heard from Peter about smart USB lights. Regarding power some LEDs with       |
| 22:26      | a power bank and smart USB plug discussion, some power banks don't support pass-through powering        |
| 22:32      | while charging. Don't know the anchor stuff, but worth considering. Some power banks don't work         |
| 22:38      | with really low power devices again. Don't know about anchor. How much power does the Wi-Fi connected   |
| 22:43      | smart USB plug itself use more than the LEDs on a Christmas tree? If so, it might be better just        |
| 22:49      | to keep them on. Yeah, this is back, kind of goes back to last holiday season where I had               |
| 22:55      | some LEDs on a little bonsai and I was looking to try and figure a way to power them automatically,     |
| 23:02      | even though they just were running off batteries. Yes. And in my case, even if technically powering     |
| 23:10      | the USB smart plug uses more power than the LEDs, I still want to do it because otherwise I have to     |
| 23:16      | make sure that I close all of the doors in my apartment before I go to bed. Because otherwise,          |
| 23:20      | if there is a light on in another room, I will be able to see it from my bedroom. Just that's the       |
| 23:26      | way that the reflections and doors, positionings, and so on work. And I do prefer to keep my            |
| 23:31      | bedroom window open because I have [[Netatmo Smart Indoor Air Quality Monitor\|the Netatmo]]... I can't remember which one it is.       |
| 23:35      | It's [[Netatmo Smart Indoor Air Quality Monitor\|the rose gold one]], which is an indoor room sensor and it does things like monitoring carbon dioxide levels.      |
| 23:45      | If I do not leave my bedroom door open, the carbon dioxide levels in my bedroom get very high           |
| 23:49      | overnight and I have a tendency to wake up with a headache. So I prefer to leave my bedroom door open   |
| 23:54      | rather than leaving it closed, which seems like a good solution to the problem. But the consequence     |
| 23:59      | of that is I have to make sure the other lights in my apartment are off before I go to bed or           |
| 24:04      | when I go to bed because otherwise they will keep me awake. The USB smart plugs that I've tried         |
| 24:11      | are very low power and I also just bought some [[Zigbee]] ones, David, which I'm going to be trying         |
| 24:14      | out in the not too distant future. I think, Rose, you need to figure out why you have carbon dioxide    |
| 24:20      | building up in your room at night. That's not good. Well, no, it's very simple. There is no             |
| 24:25      | ventilation if the windows and doors are shut. It's not completely airtight, but we don't have          |
| 24:33      | central air here in the UK. That's not a thing. So there aren't vents in my room or anything.           |
| 24:38      | So I have to leave either the window or the door open or ideally both, but especially in winter         |
| 24:44      | when the sort of season where it would be more typical for me perhaps to have seasonal lighting         |
| 24:49      | around, that's not really something that I can do, leaving the window open because it will get          |
| 24:55      | very, very cold very, very quickly. The solution to this problem is to leave the door open in my        |
| 25:02      | bedroom and then I have air circulation and it's fine. But to answer Peter's question, Rose had         |
| 25:07      | recommended a Wi-Fi device that would allow me to address it and turn the lights off and on             |
| 25:12      | in that little wireless mix. I looked it up and I think this was we recorded that show like in          |
| 25:18      | November and the first availability for shipping was like March and I wanted it for the holiday         |
| 25:25      | season. So I didn't bother and I just did what Peter said at the end of his note. I just left           |
| 25:29      | them on and I replaced the batteries two or three times in February and that was that.                  |
| 25:34      | Yeah, that's fair enough. Yeah, I bought some new ones which are [[Zigbee]] ones. So I'm going to be        |
| 25:39      | trying those out and yeah, we will have to see. But fingers crossed because when I looked the other     |
| 25:44      | day, the Wi-Fi ones were available again. So fingers crossed they will be available for you             |
| 25:49      | this year, David, so that you can have a play with them at the very least.                              |
| 25:52      | Somewhat feedback. I had someone spilled a glass of water in the bathroom                               |
| 26:00      | and it set off the [[Aqara Water Leak Sensor\|Aqara leak alarm]]. Oh, that's good. You put those in there like 10 or 15 bucks.       |
| 26:08      | You stick them in all your rooms that have pipes and you forget about them. I have got mine hooked      |
| 26:14      | up through the [[Aqara Hub#M2\|M2 Hub]] into [[HomeKit]] and with [[HomeKit]], it just lights up every phone in the               |
| 26:22      | network. Basically, it really lets you know there's a leak and I kind of forgot they were there,        |
| 26:28      | but it was kind of a nice reminder that those things are still looking out for a leak.                  |
| 26:33      | I need to check them. I don't know if they need batteries replaced at some point. They've been          |
| 26:37      | there for a couple of years now. They're very low power so they only really phone home periodically     |
| 26:43      | just to say, hey, I'm still live and this is kind of my battery percentage. And other than that,        |
| 26:48      | it's things like water connecting the contacts that makes them wake up and go, here's a problem.        |
| 26:54      | So the battery does last a pretty long time. I've had to replace the battery in mine now,               |
| 26:59      | but I've been here for four years. So that seems quite reasonable to me. I've probably                  |
| 27:06      | got about three years on the battery on it, but my parents have them in their place in France           |
| 27:11      | because they're not there after time. And it's really great for them because they did get an            |
| 27:16      | alert a couple of months ago that there was a leak in the utility room next to the washing machine.     |
| 27:24      | And it turned out the washing machine had created a little puddle on the floor. Apparently,             |
| 27:28      | it wasn't very well litter box broken. But the good news is my dad cleaned out the filter on the        |
| 27:34      | washing machine, which they thought they'd been cleaning out properly, but it turned out there          |
| 27:38      | was a corner and there was some lint stuck around the corner, which caused it to start leaky a little   |
| 27:42      | bit. Either way, that's all cleaned out and there is no leak anymore. But it worked. They were very     |
| 27:47      | concerned when they got this alert about half an hour after my mom had put on a washing cycle,          |
| 27:52      | but they were fortunately there at the time, so they were able to deal with it. But it's just nice      |
| 27:56      | to have that peace of mind of, oh, right, okay, something is leaking and I know about it rather         |
| 28:01      | than unexpectedly getting home and discovering, oh, there's water everywhere.                           |
| 28:05      | But the next step for that, if you're really interested, is to install a water main shutoff             |
| 28:12      | that is addressable via automation. And those exist. I have never done it, but I keep thinking          |
| 28:19      | about it every year. So I look on [[Amazon]] and the usual shopping sites to see what the options are.      |
| 28:27      | And they've never looked that impressive to me, but I think at some point I do want to put one          |
| 28:31      | of those in. So if your parents place in France got the alarm, they could push a button and it          |
| 28:37      | would turn off the main, at least until somebody could check it out and make sure that everything's     |
| 28:43      | okay. Yeah. Well, IKEA in Sweden, actually, as part of their smart home stuff sells a [[Zigbee]]           |
| 28:52      | water shutoff because I believe it's something to do with Swedish building regulations where            |
| 28:58      | dishwashers have to have a water shutoff running on the pipe that runs to them.                         |
| 29:04      | And IKEA made a smart one. I'm not sure if it's still available. It certainly was a few years ago       |
| 29:09      | when I was looking into it because I was very curious if I could buy it and have it installed           |
| 29:14      | over here. And what I discovered over here is if I installed it, I would then still have to have a      |
| 29:19      | manual one next to it and there just is not space in that cabinet. Like that cabinet barely has space   |
| 29:25      | for one at the moment. So I ended up not going down that route, but it would certainly be worth         |
| 29:30      | investigating that and experimenting with this sort of thing. If, of course, you live somewhere         |
| 29:35      | where you're able to experiment with this yourself or you have the skills and knowledge                 |
| 29:39      | and certifications to do so. Yeah, the big one here is [[Moen Flo Smart Water Monitor and Shutoff\|the Moen]] right now, [[Moen Flo Smart Water Monitor and Shutoff\|the Moen]]. And it's           |
| 29:46      | $400. I mean, it's a real deal piece of equipment, but it's got an app and I don't know that it's       |
| 29:52      | [[HomeKit]] or [[Home Assistant\|Home Assistant-friendly]]. Aren't they the people that made [[Moen Smart Shower\|the smart home shower]]?             |
| 29:57      | I feel like I remember [[Moen Smart Shower\|them making a smart home shower]] and being very confused as to what it was.       |
| 30:02      | Well, they are they're a plumbing accessory company, at least in the US. They make faucets and all          |
| 30:07      | sorts of things. But they've made a [[HomeKit]], I'm sorry, not [[HomeKit]], but a smartphone addressable       |
| 30:13      | water main valve that's not cheap at $400. And you probably have to pay a plumber to properly           |
| 30:19      | install it. But the next time I'm flush with cash, I may do this because I have so many friends that    |
| 30:25      | have had that where they go on vacation and something pops off of the house and then they               |
| 30:31      | have a $30,000 bill to get it fixed because water can do a lot of damage, especially if it's on the     |
| 30:37      | second floor. So yeah, this is something I may look into at some point. Yeah, that sounds like a        |
| 30:45      | very smart idea to at least investigate the option, depending on where you live. And so when you may    |
| 30:51      | have the option of having other people pop in, if you have something like that and turning it           |
| 30:56      | off for you. But it's nice to have at least the idea of being able to turn it off automatically.        |
| 31:02      | The only thing I don't like about it is that it seems like there's a lot of plastic on it for           |
| 31:06      | something that's that important. And [[Amazon]] gets me, by the way, because right next to it,              |
| 31:11      | they're selling the earthquake gas shutoff valve. I'm like, oh man, I have to buy both of these.        |
| 31:16      | Yeah. Yeah. For you, I can imagine in particular you would definitely want both of those.               |
| 31:20      | All right. What about your intercom? I know you've been working on that lately.                         |
| 31:25      | Yeah. So I've had a new key intercom that's [[Nuki Opener\|Nuki]]. I believe it's supposed to be pronounced "no key"       |
| 31:32      | actually, because it's "no key." They do smart locks and a variety of other things, [[HomeKit]]              |
| 31:38      | compatible as well as others. And I bought their smart intercom option. It was the [[Nuki Opener\|Nuki]].         |
| 31:47      | Now, it does seem to be available on their website. It's not available on [[Amazon]] anymore.               |
| 31:51      | But I noticed a bit of a problem a while ago, which is that it was not appearing in my smart            |
| 31:57      | home setup. And it was showing us offline in the [[Nuki]] app. And I was like, huh, there's something       |
| 32:02      | weird about this. Maybe it just ran out of battery and I need to charge it again. Well, I charged it    |
| 32:07      | and put it back and it worked for like an hour and then it died. And I thought, okay, maybe I           |
| 32:10      | didn't charge it for long enough, left it on charge, forgot about it for an extra day or so.            |
| 32:14      | So it was definitely fully charged, put it back and it worked for an hour and then it stopped           |
| 32:20      | working. So I concluded that this piece of technology probably died. Now I had it for at least three    |
| 32:27      | years or so and it did get used fairly intensively at times. So I started hunting around for other      |
| 32:34      | options, which is when I discovered it was no longer available on [[Amazon]]. And it's kind of tricky       |
| 32:40      | actually to find something that integrates with an existing intercom system where I mean, I probably    |
| 32:46      | could get away with replacing the handset on the wall. But at the same time, I don't really want        |
| 32:50      | to replace the handset on the wall. The handset on the wall is fine as it is. I don't really            |
| 32:55      | want to mess with it. I just wanted to add something that gave me the option to control                 |
| 33:01      | it smartly as well. So I have replaced this with a [[Ring Intercom]]. Because I already have a [[Ring Doorbell]]         |
| 33:08      | anyway, they tie in together, it works, it's fine. They have decent batteries in them,         |
| 33:14      | you pop the battery out and you leave the device where it is, unlike the new key where I had to         |
| 33:18      | take the physical device off the wall every time to go and then plug it into charge it and then         |
| 33:22      | take the whole device back and plug it back in. The device remains plugged in, you just take the        |
| 33:27      | battery out, which is an improvement as far as I'm concerned. So I got that and then I went down        |
| 33:33      | a bit of a rabbit hole, David, because if I'm at home and a parcel is being delivered and somebody      |
| 33:38      | buzzes my intercom, I don't want to have to get up and go buzz the intercom. So I put a couple of       |
| 33:44      | buttons, smart buttons in various places, so I can hit it and buzz somebody in. But I thought,          |
| 33:48      | you know what, parcel or parcels, the delivery tracking app that is my app of choice has a calendar     |
| 33:56      | there. And [[Home Assistant]] recently got calendar integration where you can get calendars. So I           |
| 34:01      | managed to get the calendar into [[Home Assistant]] and now if somebody buzzes the intercom, it checks      |
| 34:06      | if there is something on that calendar for today and if there is and I'm home, it'll just buzz          |
| 34:12      | them into the building. And this basically means that if somebody buzzes it, it will just automatically |
| 34:17      | let them into the building if I'm home, assuming it's a delivery person rather than, you know,          |
| 34:21      | somebody I'm not expecting or a delivery is expected today. And it's working really well                |
| 34:27      | because I don't have to get up and run to the intercom anymore and deal with any of that.               |
| 34:33      | It just works. And I'm very impressed with that, I have to say. It's very smooth. It's quite a          |
| 34:39      | large device, sadly. It is about as large as the phone, it feels like. It's not as large as the         |
| 34:45      | phone. The phone obviously is an oblong and this is more square, but it's working incredibly well.      |
| 34:51      | And I'm really impressed with it. So if anybody's got an intercom in their apartment building and       |
| 34:56      | just wants to make it smart, it would be worth looking into the [[Ring Intercom]]. I don't have a           |
| 35:01      | Ring subscription for this. I'm just using this without the Ring subscription and it's working          |
| 35:06      | really well. Well, Rose, that is what I love about you, that you would figure that [[Rube Goldberg]]        |
| 35:13      | system out and actually make it work. I love it. Yeah. Well, I mean, it's working for me,               |
| 35:19      | and I don't know that it would definitely work for anybody else, but I thought I had to give            |
| 35:25      | it a try with getting it paired to the parcels app through the calendar and so on. Because              |
| 35:32      | this is the sort of thing where, especially if you are expecting the intercom to ring,                  |
| 35:38      | do you want to have to get up and go press the buttons? Not really, no. That's an extra                 |
| 35:44      | chunk of like, depending on how big your apartment is and layout of your apartment and so on. In my     |
| 35:49      | case, it literally takes me from next to the front door to about as far away in my apartment as I       |
| 35:55      | can get from the front door. And then I have to run back to the front door to answer for the parcel.    |
| 36:00      | Whereas as it is, if somebody buzzes the intercom, I can just get up and go to the front door           |
| 36:04      | without having to go via the intercom, and I can open the door and take my parcel from the person.      |
| 36:08      | So that works for me, and that works really well. All right. Well, there are some [[HomeKit]]              |
| 36:15      | and home automation updates. Hopefully, we've inspired you. If you are at the beginning of              |
| 36:21      | that journey and you're looking for the thing, turn the lights on when I come in the room and           |
| 36:25      | turn them off on a leaf, check it out. I have spent money while Rose was talking. I ordered             |
| 36:31      | it an [[Aqara Hub#M3\|Aqara M3]] have. I want to compare them so I can report in on it. I'm doing it for science,         |
| 36:36      | Rose, doing it for science. I think that that's a very acceptable thing to do, David. Will them.        |
| 36:41      | I'm also thinking that if I can put it into the [[HomeKit]] network, I can put it in the room with         |
| 36:47      | the ceiling fan and the TV and the [[IR Blaster]] thing and actually get my family using that,              |
| 36:52      | that will be a win for me if I can pull that off. So I've got an ulterior motive.                       |
| 36:58      | But either way, there we go. We are the Automaters. You can find us over                                |
| 37:02      | relay.fm/automators. Sorry, I had a little bit of a cold this week, so thanks for         |
| 37:06      | hanging in there with my voice. We're going to do Automators Max today. If you are an Automators        |
| 37:11      | Max subscriber, you get the ad-free extended version of the show. Kind of on the automation             |
| 37:16      | theme. I'm thinking about making some purchases for some holiday automation. I want to get Rose's       |
| 37:21      | advice. She's always up to date on this stuff, so we're going to talk about that. Otherwise,            |
| 37:25      | we'll see you next time. Goodbye, folks.                                                                |
