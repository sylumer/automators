---
status: "incomplete"
fc-date:
  year: 2019
  month: 06
  day: 21
fc-category: "podcast"
podcast: "Automators"
published: 2019-06-21
duration: 4252
formattedduration: "01:10:52"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/26"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators026.mp3"
episode: 26
title: "26: Getting Started with HomeKit"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose is now banned from scooters, and how get started with HomeKit - from building your system to real automations that actually make your life easier!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 026 Discussion](https://talk.automators.fm/t/automators-26-getting-started-with-homekit/5040)

# Sponsors
- [[Timing (Sponsor)|Timing]] - The automatic time tracking app for macOS.
- [[Creative Next (Sponsor)|Creative Next ]] - The new podcast future-proofing creatives.

# Show Notes
- [Aga app 'could let hackers turn off oven' - BBC News](https://www.bbc.com/news/technology-39580507)
- [Sonos One: Smart Speaker](https://www.sonos.com/en/shop/one.html)
- [Logitech POP Smart Button for Simple Home Automation Control](https://www.logitech.com/en-gb/product/pop-smart-button)
- [Logitech Harmony Elite advanced universal remote, hub and app](https://www.logitech.com/en-gb/product/harmony-elite?crid=60)
- [Nanoleaf Light Panels](https://nanoleaf.me/en/consumer-led-lighting/products/smarter-series/nanoleaf-light-panels-smarter-kit/)
- [Botvac D7™ Connected Robot Vacuum | Neato Robotics](https://www.neatorobotics.com/robot-vacuum/botvac-connected-series/botvac-d7-connected/)
- [Mac Power Users #402: Home Automation with Robert Spivack - Relay FM](https://www.relay.fm/mpu/402)
- [Lutron Caseta Switches](http://www.lutron.com/en-US/Products/Pages/SingleRoomControls/CasetaWireless/Overview.aspx)
- [Eve Energy | Smart Plug](https://www.evehome.com/en/eve-energy)
- [iHome Smart Plug](https://ihomeaudiointl.com/discover/smart_plug/)
- [iRobot® Roomba® i7+ (i7558) - iRobotEMEA](https://store.irobot.com/irobot-roomba-i7-i7558/i755840.html)
- [M-O | Disney Wiki | FANDOM powered by Wikia](https://disney.fandom.com/wiki/M-O)
- [Oura Ring: the most accurate sleep and activity tracker](https://ouraring.com/)
(Spoiler: This does not track your mood)
- [Homebridge](https://homebridge.io/)
- [‎Home 3 on the App Store](https://apps.apple.com/us/app/home-3/id995994352)
- [‎HomePass for HomeKit on the App Store](https://apps.apple.com/us/app/homepass-for-homekit/id1330266650)
- [‎HomeRun for HomeKit on the App Store](https://apps.apple.com/us/app/homerun-for-homekit/id1367842592) - This is the complication app for your Apple Watch
- [HomeDash | The Ultimate HomeKit App](https://www.homedash.app/)

# Transcription

| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, this is Automated. I'm Rosemary Orchard and joined by my co-host, David Sparks. This              |
| 00:07      | is the podcast where we talk about how to get your technology to do all of your work                     |
| 00:11      | for you. Hello, David.                                                                                   |
| 00:13      | Hello, Rose. How are you today?                                                                          |
| 00:15      | Well, we've got a little bit of follow-up from our [[WWDC]] episode, actually, as it turns                   |
| 00:20      | out.                                                                                                     |
| 00:21      | Yeah, Rose versus the Leaf Chapter 2?                                                                    |
| 00:23      | Yeah, Rose versus the Leaf Chapter 2. So last time, when we recorded, we were in person                  |
| 00:28      | in a hotel room in San Jose looking at each other, which was a little bit weird, but not                 |
| 00:32      | bad weird, good weird. And I had my foot up on what the extra chairs that was in the room.               |
| 00:38      | And that was fine. And then I flew home and went, I should probably go to hospital and                   |
| 00:42      | get this checked out. Turns out I broke my ankle. So that's good.                                        |
| 00:47      | Yeah, gang. So Rose just texted me a picture of her foot, her leg in a cast. That's what                 |
| 00:54      | she did. That's how she told me.                                                                         |
| 00:55      | Well, I did send text to go with it, but sometimes iOS will take a while to send the text after          |
| 01:01      | it sent the picture, because it's so obsessed with sending the picture. And yeah, so David               |
| 01:06      | just got a picture of my leg in a cast.                                                                  |
| 01:07      | Are you feeling any better? Things, I mean, are you in pain? What's going on?                            |
| 01:12      | Yeah, I mean, it's okay. It's not very comfortable. I'm on, they've given me different crutches          |
| 01:17      | because apparently American crutches are a safety risk according to the hospital here.                   |
| 01:21      | So that was good to hear.                                                                                |
| 01:22      | Of course they are.                                                                                      |
| 01:23      | Yeah.                                                                                                    |
| 01:24      | As they happen.                                                                                          |
| 01:25      | So that was fun. So I've now got two pairs of crutches. And yeah, so I'm hopping around.                 |
| 01:31      | I'm not allowed to put any weight on it at all, but I'll be all right.                                   |
| 01:34      | Okay. Well, we're sorry that you had to go through that for us automators, Rose, that                    |
| 01:40      | you know, but getting the story out about iOS 13 was worth it.                                           |
| 01:45      | Yes. Yes. It totally was. I can't argue about that.                                                      |
| 01:49      | Yeah. It was sad because you were really, you know, not as mobile as you normally would                  |
| 01:55      | be in San Jose. And I know it was hard for you.                                                          |
| 01:59      | It was, but I still think I did pretty well meeting people. And for anybody I didn't get                 |
| 02:02      | to meet, well, put it in your calendar for next year. I'm pretty certain we'll be hosting                |
| 02:06      | another automators meetup.                                                                               |
| 02:07      | Yes. And, and Rose is not going to ride scooter because I am not going to let her.                       |
| 02:12      | But did you hear that there's this Pogo stick startup in Stockholm?                                      |
| 02:16      | Oh no. Oh no, Rose.                                                                                      |
| 02:18      | It's okay. I'm not going to Sweden anytime soon.                                                         |
| 02:21      | Okay.                                                                                                    |
| 02:22      | Anyway, so anyway, let's get to the content.                                                             |
| 02:26      | Yes. Let's do that. We thought it would be fun to talk about automating in your home,                    |
| 02:31      | home automation on an episode of automators. We've covered this a little bit in the past                 |
| 02:35      | on Mac Power users, but we haven't really taken a full automation level on it. And honestly,             |
| 02:40      | we haven't heard Rose's home automation story, which I am eager to hear. It's also something,            |
| 02:47      | you know, this is an ongoing story really that, you know, right now we're in this weird                  |
| 02:52      | period where there is the battle of the automation systems. Google has one, you know, Samsung            |
| 03:00      | has one. It was smart things. They got purchased by Samsung. [[Apple]] has home kit. There's all             |
| 03:05      | these different ecosystems and it's frustrating as users because we just want everything to              |
| 03:11      | work with everything and not have to deal with these battles. But at the same time,                      |
| 03:15      | there are different platform makers that have different visions and ideas. And us as consumers,          |
| 03:20      | we've been kind of victims of that. I mean, the latest one is the Nest cams, you know,                   |
| 03:26      | which is something that people bought thinking that they would be useful with the [[Amazon]].                |
| 03:33      | It's [[Amazon]], right? Everybody's using their Nest cams with [[Amazon]], but then Google has                   |
| 03:38      | now, who now owns Nest, is not making them as compatible with [[Amazon]]. And I know they're                 |
| 03:44      | still kind of a battle rageing over that may be able to get better, but it's like, you                    |
| 03:48      | know, we want to buy stuff. We just want it to work, right?                                              |
| 03:51      | Exactly. And it's very frustrating when you're there trying to set these things up. Usually              |
| 03:55      | people get some of the stuff for Christmas. And so you're there on Christmas Day going,                  |
| 03:59      | why do my lights no longer work? Like what is wrong with this? And then you're sitting                   |
| 04:04      | in the dark and that's not fun.                                                                          |
| 04:06      | Yeah. So what I would say is that for years, I was hesitant to recommend any of this stuff               |
| 04:11      | because I felt like I didn't want to turn somebody into buying something that later                      |
| 04:16      | became a brick on them. We're going to talk today about [[Apple|Apple's]] [[HomeKit]]. That's because                  |
| 04:22      | we're both [[HomeKit]] users. We did not want this podcast just to be all [[Apple]] stuff,                       |
| 04:26      | but this is the ecosystem that we both have the most experience with and we're going to                  |
| 04:30      | just share it. And if you are using a different ecosystem successfully, please sound off in              |
| 04:36      | the forums so folks can see your story. I think we'd love to hear from you.                              |
| 04:40      | Yes. And in my case, I should have mentioned my boyfriend is using an Android and he's                   |
| 04:45      | just got a new pixel. So all of the stuff that is set up in my house is designed to                      |
| 04:50      | be compatible with Android and specifically with my boyfriend because he has certain requirements        |
| 04:55      | when it comes to home automation as you will see later.                                                  |
| 04:58      | Yeah. And I like that though. I mean, there's a lot of devices now that on the 10 they say,              |
| 05:04      | they work with Android, they work with [[HomeKit]]. So that's good. And probably that's a real               |
| 05:08      | good solution for me. I don't think there's any risk I'm going to be jumping over to Android             |
| 05:12      | very soon. Although I did enjoy, I texted, I did a story about Galaxy's Edge, the new                    |
| 05:19      | Star Wars thing. And I got many concerned emails because apparently that's also an Android               |
| 05:25      | phone and people got worried I was switching. But that's not the case. I actually just went              |
| 05:29      | to Galaxy's Edge. But anyway, so I've been kind of, I'm okay just getting stuff that's                   |
| 05:34      | [[HomeKit]] compatible and not necessarily Android compatible, but that's really the short term              |
| 05:38      | view. If you're smarter than me, you probably buy stuff that only works with both.                       |
| 05:42      | Yeah. And there are certain advantages to home automation as well because I mean, it's                   |
| 05:48      | very well, very well being able to control your lights with your phone, but then you're                  |
| 05:52      | just moving the switch away from the door and into a device that can potentially run                     |
| 05:55      | out of battery. So that's not necessarily the point of it.                                               |
| 06:00      | Yeah, agreed. And I just wanted to say before we get into that, the reason I chose [[HomeKit]]               |
| 06:05      | is because I'm invested in [[Apple]]. And honestly, I like [[Apple|Apple's]] general take on home automation.          |
| 06:12      | They've had a security emphasis for some time, which is one of the reasons why it hasn't grown           |
| 06:17      | as fast as some of the competing platforms. But I do like the idea of a company that's                   |
| 06:22      | taking security and privacy pretty seriously when it comes to this stuff. And honestly,                  |
| 06:30      | the platform has developed a lot. iOS 13 got some really nice upgrades to the way [[HomeKit]]                |
| 06:35      | works. But I think it's time, it was at least time for me, who's fairly close to the sharp               |
| 06:41      | end of the stick to start investing in this stuff. And as you'll hear later in the show,                 |
| 06:44      | both Rose and I have done that.                                                                          |
| 06:46      | Yes. So yeah, let's talk about some of the advantages of this kind of thing because why                  |
| 06:53      | would you do this unless it offers you an advantage aside from being super cool? Because                 |
| 06:58      | being super cool is naturally a very big advantage that I'm sure all of our listeners are very           |
| 07:02      | concerned about.                                                                                         |
| 07:03      | Yeah. And I just always liked the idea of my house obeying me. I mean, I think that's                    |
| 07:08      | cool. You're right. But there are several, like the central point of control. We finally                 |
| 07:16      | are getting summer showing up here in Southern California just yesterday for the very first              |
| 07:21      | time I'm sitting at my office. I realise I'm getting all sweaty and it's like 85 degrees                 |
| 07:26      | in here. I just lost track of the temperature. When you get focused on something, you don't              |
| 07:31      | pay attention to things. And all of a sudden you realise, oh, wow, it's really hot in here.              |
| 07:36      | But with my automation, I was able to click a few buttons on my Mac and the air conditioner              |
| 07:41      | kicked in downstairs.                                                                                    |
| 07:43      | And that is a significant advantage. It's really, it's, you know, it's all very well                     |
| 07:47      | and good just being able to turn on and off your lights. But if you can control pretty                   |
| 07:50      | much everything from one place with just a phone or a tablet that maybe you've got stuck                 |
| 07:57      | to the wall or something like that, then it does make it very easy for you because                       |
| 08:01      | also then you can set it up to have just one button, which maybe sets the lights to this,                |
| 08:06      | the temperature to that and turns on the television or something.                                        |
| 08:09      | Yeah, so combination. So rather than the five or six individual switches, you can throw                  |
| 08:15      | one switch and make a whole series of things happen. And that remote control extends outside             |
| 08:20      | the front door with the Apple [[HomeKit]]. If you have an [[Apple TV]] or even an enabled iPad                   |
| 08:27      | at the house, you can control those devices remotely and just to go back to the air conditioning         |
| 08:32      | example, it gets really hot here in Southern California. So if the whole family's been                   |
| 08:37      | out of the house and we're heading back in the afternoon and we're going to know we're                   |
| 08:41      | going to come back to a sweltering house while we're in the car, you know, 40 minutes away,              |
| 08:46      | we can turn on the air conditioning so we can home the house is a little cooler.                         |
| 08:51      | Yes. And I should also point out you don't have to make these available on the wider                     |
| 08:57      | internet, but the advantage with [[HomeKit]] is it is available just for you. And as well                    |
| 09:01      | as an iPad or an [[Apple TV]], you can actually use a HomePod as well. So if you've been on                  |
| 09:07      | the fence about getting a smart speaker and you haven't picked one yet, but you don't                    |
| 09:12      | have an [[Apple TV]] or an iPad that lives at home to control [[HomeKit]] things, then maybe                     |
| 09:17      | a HomePod is the right solution for you because it will also work as an automation hub.                  |
| 09:21      | Yeah, another another car automation that we do is I have a series of buttons that turn                  |
| 09:26      | on the porch light, the interior light and some of the lights that we would want when                    |
| 09:31      | we come home. So if we're coming home late at night and we want to just have the house                   |
| 09:35      | lit up as we get home, we just push a button and it's lit as we get home, which is really                |
| 09:40      | nice.                                                                                                    |
| 09:41      | Yes, it is. And the other thing you can do instead of pushing buttons, you can let things                |
| 09:46      | just happen. So based on time or related to, for example, sunset and sunrise when everybody              |
| 09:51      | leaves the home, when one person returns home, when a specific person returns home and things            |
| 09:57      | like that, which is much nicer because then you can, you know, you can unlock your front                 |
| 10:02      | doors, you get home and it turns on all the lights for you or just the lights you need                   |
| 10:06      | because it recognises that it's you because of that iPhone in your pocket and all that                   |
| 10:10      | sort of thing.                                                                                           |
| 10:11      | Yeah, I agree. And we use both of those. I mean, we have a sunset based one that turns                   |
| 10:17      | on a certain light. But, but when I come home, I really like having just the whole, the whole            |
| 10:23      | house lit up. I mean, why not, you know, and you're not wasting a lot of power if you just               |
| 10:27      | turn it on as you get there.                                                                             |
| 10:30      | No, exactly. And it's using your GPS location to do things, but we will cover how iOS 13                 |
| 10:36      | may change that a little bit for you later on the show.                                                  |
| 10:39      | Yeah.                                                                                                    |
| 10:40      | The other advantages of home automation is it can help you get into routines. So I, my                   |
| 10:45      | boyfriend and I've been trying to make sure that we go to bed at a regular time for months.              |
| 10:50      | And one of the ways that we do this is a quarter past 10, all the lights go red and dim, which           |
| 10:57      | is a visual cue that it's time for bed. Now, of course, we can override this and turn the                |
| 11:02      | lights back to normal, but it's very helpful for getting us into that routine because it's               |
| 11:05      | sort of, you know, you see the lights and you get up and you start doing things and                      |
| 11:09      | eventually you just sort of get on with it. And you don't even think about the fact that                 |
| 11:12      | you're doing it because the lights have turned red anymore, you're doing it because you've               |
| 11:15      | got that cue, which is really nice.                                                                      |
| 11:17      | Yeah. I talked about recently on how I use [[Keyboard Maestro]] to force me to shut down                     |
| 11:23      | at the end of the day and plan my next day because of all the benefits of that. And it's                 |
| 11:27      | the same thing I do a thing on my Mac, but anytime you can have the exterior environment                 |
| 11:32      | kind of impose a constraint on you that you need, that's a really powerful thing. And                    |
| 11:39      | I think going to sleep and waking up are both examples of when you can put this home automation          |
| 11:44      | stuff to real good use for you.                                                                          |
| 11:46      | Definitely. And I will cover later in the show exactly what I'm doing for those two,                     |
| 11:50      | but it's definitely really good.                                                                         |
| 11:53      | What are your concerns about home automation?                                                            |
| 11:55      | Well, a lot of it is internet controlled, which depending on the system does potentially                 |
| 12:00      | mean that somebody else could control it. So I remember reading an article a couple of                   |
| 12:04      | years ago about Argo Cookers. I don't know if you've got those in the States, but they're                |
| 12:09      | a very popular brand of Cookers in the UK. And it turned out that the pre-warming function               |
| 12:15      | all you had to do was know the IP address of the cooker and you could control it. There                  |
| 12:20      | was no authentication involved, nothing. It was just know the IP address, send a particular              |
| 12:25      | package to it over the internet, and it would start preheating the oven, which, I mean,                  |
| 12:32      | it was thankfully only preheat. And I do believe that Argo patched it fairly quickly                     |
| 12:37      | once newspapers started writing about that particular incident. But a lot of people                      |
| 12:42      | store stuff in their Cookers while they're not using them in their ovens. So it could                    |
| 12:47      | have been potentially quite a fire hazard.                                                               |
| 12:49      | Yeah. What if you stored your laundry in there? That would be terrible.                                  |
| 12:52      | Well, for one, I would suggest, please don't store your, store your laundry in the oven.                 |
| 12:56      | That's not a great place for it, considering the fact that the ovens can get surprisingly                |
| 13:00      | dirty with all that food fat that spatters off of things and so on.                                      |
| 13:04      | You should also not store your fireworks in there. I think that would also be a bad idea.                |
| 13:08      | That could be somewhat dangerous. And firewood as well. Definitely don't store that in there.            |
| 13:12      | We need to take a break for a second. I've got to go take something out of my oven. I'll                 |
| 13:15      | be right back.                                                                                           |
| 13:18      | Anyway, so yes, well, David collects a firewood. That could potentially be a security risk,              |
| 13:26      | you know, depending on what it is and how it's controlled. So you always have to think                   |
| 13:32      | about things like this. And if you hook it up to services, like if this and that, then                   |
| 13:35      | of course you need to make sure that you've got a secure password that you're not using                  |
| 13:38      | anywhere else set up for that service. Because otherwise, theoretically, somebody may be                 |
| 13:42      | able to lock you out of your own home or into your own home, which would not be good.                    |
| 13:48      | Yeah. I feel like we're just still in early days. I think a lot of the vendors of this                   |
| 13:53      | stuff, like people who make door locks or ovens, they're just not used to all the terrible               |
| 13:59      | nonsense that goes on on the internet with security. So they hire someone to say, connect                |
| 14:04      | this to the internet and they just don't go far enough with the security protections.                    |
| 14:08      | Yeah. They don't realise that these are potentially an issue for them at all.                            |
| 14:13      | And that's why we really rely on getting back to the beginning of the show, these platform               |
| 14:19      | vendors. We need Google and [[Apple]] and [[Amazon]] and whoever else is Samsung to really look                  |
| 14:26      | out for us and try and build security into the system, even with not necessarily secure                  |
| 14:33      | devices connected to it. I don't have all the answers to it. I'm just smart enough to                    |
| 14:37      | ask the question, what are they doing on that behalf? But like [[Apple]] for the longest time                |
| 14:42      | required hardware encryption on anything that was going to be connected to [[HomeKit]].                      |
| 14:47      | It actually had to have a physical chip in it. That's the reason some of us that had                     |
| 14:50      | Hue lights had to buy the upgraded hub that had the hardware security in it. And I know                  |
| 14:57      | since then they have decided that they can safely do it as a software security and that                  |
| 15:03      | now that's happening now. But make sure that whatever platform vendor you decide to use                  |
| 15:09      | has got some kind of plan to try and protect you.                                                        |
| 15:12      | Yes. And this is one point where I will caution people, sometimes you can get really great               |
| 15:17      | cheap technology from places like Aliexpress and so on. But I would caution people that                  |
| 15:22      | if you are not familiar with this stuff, don't do that. Buy the brand name from Best Buy                 |
| 15:28      | or Saturn over here in Europe or whichever big company it is. And buy a brand name that                  |
| 15:33      | you recognise because if there is a security flaw, you're much likely to find out about                  |
| 15:38      | it on the wider internet in the general things that you read and you hear day to day. Then               |
| 15:44      | you are some unknown brand from China, which actually may have been designed to call home                |
| 15:48      | from the first place just because they don't have a brand name that would be ruined by                   |
| 15:54      | doing something like that.                                                                               |
| 15:55      | Yeah. So be aware of security. But I'm going to get in trouble for saying this, but I'm                  |
| 16:02      | not that afraid of it at the same time. I'm buying equipment from vendors that I trust.                  |
| 16:08      | I'm using a platform that I trust. And honestly, I'm not sticking my neck out very far, except           |
| 16:14      | with respect to the lock, which I will talk about in a little bit.                                       |
| 16:18      | This episode of Automators is brought to you by Creative Next. The Creative Next podcast                 |
| 16:24      | just launched its second season, focusing on future-proofing creators from AI Automation.                |
| 16:31      | Season two is about communication, how humans communicate with each other, how we communicate            |
| 16:36      | with machines, and how machines communicate with us. They're exploring the automation                    |
| 16:42      | of things like storytelling, smart environments, marketing, and advertising. It'll explore               |
| 16:48      | how all of those interesting questions you might have wondered about AI, like, how far                   |
| 16:53      | away is AI from writing the next great novel? And what happens when smart homes become smart             |
| 16:58      | workplaces?                                                                                              |
| 17:00      | Creative Next is available from Apple Podcasts, Google Podcasts, Spotify, and wherever you               |
| 17:05      | else you'd like to listen to your podcast. Plus, they have a companion article series                    |
| 17:10      | on Medium that's in partnership with Towards Data Science. And they're a member of the                   |
| 17:15      | civil family of independent newsrooms. Check it all out at creativenext.org./automators.                   |
| 17:22      | That's creativenext.org./automators. Our thanks to Creative Next for their support of this                 |
| 17:28      | show and all of Rule AFM.                                                                                |
| 17:32      | You know, we missed one other big downside of home automation.                                           |
| 17:35      | Oh, yes. Well, I mean, this does kind of tie in with the next part, doesn't it?                          |
| 17:40      | Yeah, it's the doghouse. The doghouse of automation. Like, if you are a geek, let's say a geek           |
| 17:48      | like me and you start putting this stuff in your house and you don't fully explain it                    |
| 17:53      | to your family and suddenly things stop working, that can be a problem.                                  |
| 18:00      | I believe, I remember a story where this was actually a problem for you and you got into                 |
| 18:05      | a little bit of trouble about it.                                                                        |
| 18:07      | Oh, yeah. I mean, because when I first started playing with the stuff, one of the first things           |
| 18:11      | I bit into is the hue lights. You know, the light bulbs you can screw into, they have                    |
| 18:16      | them that screw into ceiling lights. They've come a long way with the hue lights in the                  |
| 18:20      | years since they first showed up. But I got some of the first ones and you'd screw it                    |
| 18:24      | into your lampshade and then you would have automation. And I would try to get everybody                 |
| 18:31      | to use it. But of course, they wouldn't because why would you go to an app on your phone to              |
| 18:35      | turn on lights when there's a perfectly good switch on the wall?                                         |
| 18:38      | You're right.                                                                                            |
| 18:39      | Exactly.                                                                                                 |
| 18:40      | And then we had the problem was so they would just turn the switches off. And then of course,            |
| 18:47      | once the light bulb was disconnected from electricity, all the automation would stop.                    |
| 18:50      | So then she'd say, well, I don't understand why do you say this automation is supposed                   |
| 18:55      | to work and how come the porch lights not going on? Well, that's because somebody turned                 |
| 18:59      | off the switch and now it's not connected. So it can't go on. It has no power. So, you                   |
| 19:04      | know, and this this ongoing battle was going on. And I realised ultimately it just wasn't                |
| 19:09      | going to work. And so I while I still use some hue lights, in fact, two that we use                      |
| 19:14      | is on our bedside tables. Daisy has one and I have one. And I never turn off my switch                   |
| 19:20      | and she does all the time. She spends a little knob on the lamp and the that hue is connected            |
| 19:28      | to our network about 25 percent of the time, you know, just just the way it is. But I don't              |
| 19:34      | fight that battle, right? You know, one of the tricks to a long and happy marriage is                    |
| 19:38      | to know when to fight and when not to. But the but the other thing that we did and I'll                  |
| 19:44      | talk about it later when we talk about our setups is I realised if you're going to bring                 |
| 19:48      | automation to people who are not super nerdy, you need to make it invisible to them. And                 |
| 19:54      | you need to give them the benefits of it and remove as many of the limitations as possible               |
| 19:58      | and the switch thing was a big limitation. So ultimately, I ended up replacing the switches              |
| 20:03      | instead of the bulbs. Yes, which may be a solution in my case for Christmas and my boyfriend             |
| 20:10      | actually got me some Philips Hue lights and Philips Hue lights a light strip. So he was                  |
| 20:16      | the one who gave me the gateway drug and the mission to go ahead.                                        |
| 20:20      | All right, good. Well, your boyfriend's a little nerdier than my wife.                                    |
| 20:23      | Yes, he is. But at the same time, he is also not somebody who likes controlling things                   |
| 20:28      | with his phone. And if I ever hear him talking to Alexa, it's sort of a once in a blue moon              |
| 20:33      | opportunity because it just doesn't happen. So our setup is designed to work with that                   |
| 20:41      | because he doesn't like talking to things and pulling his phone to control lights.                       |
| 20:47      | So we've set up extra switches around the house, but these switches are now in more                      |
| 20:51      | convenient places and do more things than the previous light switches were because we                    |
| 20:55      | live in an apartment, we have an uninstalled light switches. So we've just stuck extra                   |
| 20:59      | switches next to them, which is a simple solution that works pretty well.                                |
| 21:05      | Yeah. And you can get those. I tried that. I had stuck switches to the wall and other                    |
| 21:11      | places and that I really just didn't go over that well either to tell you the truth because              |
| 21:15      | they didn't work. They weren't as reliable as I would have liked them to have been.                      |
| 21:21      | Yes, that is a problem. So I will say that potentially, especially the Philips Hue tech,                 |
| 21:26      | I think it's come a long way because one of the things that used to happen a while ago,                  |
| 21:30      | which you may see listed in many articles on the Internet is that down side of Philips                   |
| 21:33      | Hue is if there was a power blip, then the lights would turn on, which is all fine and                   |
| 21:39      | dandy at two o'clock in the afternoon, but at three o'clock in the morning, not so great.                |
| 21:45      | Yeah.                                                                                                    |
| 21:46      | And at one point I had a glitch where my iPhone thought like it was continually coming home.             |
| 21:52      | So at three o'clock in the morning, the lights would just turn on and then turn on again                 |
| 21:57      | and then turn on again. Every time I turned them off, they would turn back on to the point               |
| 22:02      | where my boyfriend was about to start unscrewing the light bulbs when I just thought to put              |
| 22:05      | my phone in airplane mode and see if that would fix it. And it did. So yeah, I had to fix                |
| 22:11      | that little issue.                                                                                       |
| 22:12      | Oh yeah. I have a funny automation story too. Home automation got them wild as well. I'll                |
| 22:18      | share that. But I actually want to start Rose. I just want to hear what is your setup? I                 |
| 22:22      | mean, what hardware do you have and what kind of automation are you doing in your house?                 |
| 22:26      | Yeah. So let's start with the speakers because the speakers actually can dictate a lot of                |
| 22:33      | your setup. So last year I bought a Sonos One. Now I bought this because I'd heard great                 |
| 22:39      | things about the Sonos system, but I wanted [[AirPlay]]. Okay. I was not willing to try something            |
| 22:44      | that didn't have [[AirPlay]] because I like it. I really like that feature where you can just                |
| 22:49      | send whatever it is you're playing to headphones, to your AirPods, or to a speaker. So I got             |
| 22:53      | a Sonos One. And then HomePods is not actually available from [[Apple]] in Austria, but some stores          |
| 23:01      | somewhere had a refurbished one or a returned one or something. And they said it was in                  |
| 23:07      | like excellent condition. And I got it and the cellophane on the box didn't even appear                  |
| 23:10      | to have been touched. So I now have a HomePod and a Sonos, which means that my HomePod could             |
| 23:17      | act as an automation hub. I also have an [[Apple TV]] and iPads galore, it seems like. So I have             |
| 23:24      | plenty of options there as my [[HomeKit]] hub. So those are the two speakers that I've got.                  |
| 23:30      | And then as far as lighting goes, it's predominantly Philips Hue lights. We replaced our bedroom         |
| 23:36      | light with a light that's got a fan above it last year. And one of the requirements                      |
| 23:40      | was can we get Philips Hue bulbs to fit into this light, specifically the ones that can                  |
| 23:44      | do the sunrise and sunset. Because then that's ideal for in the mornings, getting, you know,             |
| 23:52      | waking yourself up, you know, the lights start very dim and then get much brighter. And so               |
| 23:57      | there's also a Philips Hue light strip running around and Philips Hue go, which is one of                |
| 24:02      | the battery powered ones that you can plug in. It spends most of its life plugged in,                    |
| 24:06      | but it can be unplugged and moved if we need to use it on battery for a while. And then                  |
| 24:11      | I've got some Nanoleaf light panels. I've got the triangle ones. And you might have                     |
| 24:15      | seen these because they look really cool. And they are. They are fabulous because they                   |
| 24:19      | can do all sorts of patterns and fabulous things. And they're very bright, but they don't                |
| 24:24      | have to be. So what made you get those, by the way? I remember you shared it with me                     |
| 24:28      | and I was thinking, how did you get Nanoleafs? Yeah, well, there was a Black Friday sale                |
| 24:33      | last year and I'd been looking at them for ages and I really wanted them. So maybe my                    |
| 24:40      | boyfriend got me the Philips Hue stuff two years ago anyway. But I've been, I'd just                     |
| 24:44      | been looking at them going, oh, I really want these. And then they were on sale and I'm                  |
| 24:48      | all had a coupon and the sale was on in Austria as well. And so they were just delivered to              |
| 24:53      | me, I think it was from France. And yeah, I love them. So where do you have them? They're                |
| 25:00      | actually right above my desk. So which is really nice because you can do all these different             |
| 25:05      | ones. So there's like the energised ones. So if I'm feeling a bit sleepy, but I still                    |
| 25:09      | need to do some work, then I can put on energise. And they're surprisingly cool because you              |
| 25:13      | know how lights can get quite warm to touch even the LED ones sometimes. These are very                  |
| 25:17      | cool, which is good. It's currently 32 degrees inside my apartment Celsius, which is very                |
| 25:23      | toasty as far as Americans are concerned. So yeah, so that's the lighting situation.                     |
| 25:30      | And then for controlling the lights, we have one of the Philips Hue switches, the one with               |
| 25:34      | the four buttons on. So that's on, off, and then brighter and dimmer. And a number of                    |
| 25:40      | Logitech pop buttons scattered around. Now in hindsight, I might not have gone with the                  |
| 25:45      | Logitech pop buttons again, if I was replacing them, but I'm not sure what I would replace               |
| 25:50      | them with. But they're pretty good. So there's one by the front door that you just press                 |
| 25:55      | it once on your way out and everything turns off even the Sonos, which is really good.                   |
| 26:00      | And then aside from that, we've got a [[Logitech Harmony\|Logitech Harmony Hub]], which means that you can switch              |
| 26:05      | between the media PC attached to our television, the [[Apple TV]] or my [[Nintendo Switch]] very quickly         |
| 26:11      | and it controls the lights as well. Yeah, I want to talk about that [[Logitech Harmony\|Harmony Hub]]. I've                    |
| 26:17      | not used one in years. I played with one once, actually sent it back because it wasn't working           |
| 26:22      | that well for me. But what's the primary goal of it?                                                     |
| 26:26      | The primary goal was actually for me to not have to cycle through all of the different                   |
| 26:30      | inputs on the television. Essentially, that I was a little bit lazy there, but I actually                |
| 26:35      | got it for my boyfriend for his birthday. And I got the one that's got the remote control                |
| 26:39      | as well. Because one thing I've noticed my boyfriend really likes dealing with physical                  |
| 26:44      | things when controlling stuff. So he's much more of this kind of person who would happily                |
| 26:51      | pick up the remote control versus talk to the television, which of course can be done                    |
| 26:55      | now because we've got the [[Logitech Harmony\|Harmony Hub]]. But this way, we have the remote control and with                 |
| 27:01      | one press, you can either use the media PC or switch to the [[Apple TV]] and turn on the                     |
| 27:08      | gaming, the gaming mode, which is my [[Nintendo Switch]], but it also controls the lighting                  |
| 27:13      | as well. And so it will dim the lights when you start doing something and then it will                   |
| 27:19      | brighten the lights up afterwards, which is really nice.                                                 |
| 27:22      | Does that device work with home cameras? It just happened to also work with your hues?                   |
| 27:27      | It happens to work with the hues. So unfortunately, it doesn't control my Nanoleaf light panels,         |
| 27:31      | but they're also not right next to the television. So that's not too much of a problem.                  |
| 27:36      | Since we cut our cable, I mean, we really only use the [[Apple TV]]. So we just have the                     |
| 27:41      | one... We have the [[Apple TV]] remote that everybody hates, but I did put it in a little case as            |
| 27:49      | a magnet in it, so we just stick it to the TV. And my TV has that ability to... There's                  |
| 27:55      | a setting for it, and somebody listening knows and they're banging their head against the                |
| 27:59      | dashboard, but there's a setting in a lot of the more modern TVs where you can say get                   |
| 28:04      | your power from the device connected to you. So the TV turns on when I press the [[Apple TV]]                   |
| 28:10      | remote. So I don't even have to... I just have the one remote. It's very convenient.                  |
| 28:14      | But I don't think I'm really a candidate. I think it's HDMI CEC. That's protocol. It's                   |
| 28:19      | easy. Our [[Apple TV]] did that as well, and you could control it with the television remote,                |
| 28:24      | but it's switching between my [[Nintendo Switch]] and back to the [[Apple TV]] or over to the media              |
| 28:29      | PC because we don't have regular cable or even watch over-the-air stuff either. That                     |
| 28:36      | was barking me enough that I was willing to get that and pay the money for it. And my                    |
| 28:40      | boyfriend is actually very happy with it. So that was a very good investment slash birthday              |
| 28:44      | present this year.                                                                                       |
| 28:45      | All right. So how are you tying all this stuff together? I mean, you're on the Automator's               |
| 28:50      | podcast. The bar is high. What are you doing?                                                            |
| 28:53      | Yes. Well, let's start first thing in the morning. So from 7 a.m., some of the lights,                   |
| 28:57      | so the Hugo and the lights in the overhead ceiling fan, start turning on. And there's                    |
| 29:03      | a function in the Hue app where you can do a wake-up thing, and you can do it over 10                    |
| 29:09      | minutes, 20 minutes, 30 minutes, and possibly a few other time periods. And so they are                  |
| 29:16      | all doing that. And then at 7.15, lights come on around the rest of the apartment to help                |
| 29:20      | us wake up. And at 7.30, the Sonos will start playing. So that is a couple of different                  |
| 29:25      | automations put together. But that's how our mornings usually start. That does mean,                     |
| 29:30      | unfortunately, if it's a bank holiday, we will always forget to turn off at least one                    |
| 29:34      | of those, because one of them's in the Hue app, one of them's in the Home app, and one                   |
| 29:39      | of them's in the Sonos app.                                                                              |
| 29:41      | Yeah. So yeah, I was going to say, how are you automating Sonos? It's not through Home                   |
| 29:44      | Kit.                                                                                                     |
| 29:45      | No, that's through the Sonos app. The Sonos app actually has an alarm feature, and it's                  |
| 29:49      | playing one of my boyfriend's [[Spotify]] playlists in the morning, which is good because he likes           |
| 29:54      | controlling that.                                                                                        |
| 29:55      | I was going to next ask you, what song is it that wakes you up every day?                                |
| 29:58      | Well, it's one of his [[Spotify]] playlists, and it's said to random. So even if he never                    |
| 30:04      | changes the song, it will always be something different, I hope.                                         |
| 30:06      | Well, that's good, because there's a problem when you pick a song you love to be your alarm              |
| 30:10      | song, right?                                                                                             |
| 30:11      | Oh, no, never do that. Never do that. Definitely do not pick a song that your partner loves              |
| 30:18      | or the children love, because if you play something like that baby shark song, you will                  |
| 30:23      | go insane.                                                                                               |
| 30:24      | Absolutely.                                                                                              |
| 30:25      | Why do you do that to everyone, Rose?                                                                    |
| 30:26      | Oh, I'm sorry. I'm not singing it. If you don't know what it is, do not Google it.                       |
| 30:30      | Yes.                                                                                                     |
| 30:31      | Thanks to me later.                                                                                      |
| 30:32      | Yes, please.                                                                                             |
| 30:33      | After you Googled it anyway, because I told you not to. But yeah, so try and pick something              |
| 30:37      | sort of neutral.                                                                                         |
| 30:38      | Yeah, I just used the [[Apple Watch]], the [[Apple Watch]] one, because I get up pretty early and                |
| 30:42      | I don't want to wake my wife up, and it just vibrates on my wrist.                                       |
| 30:45      | Yeah, I often use that, but apparently the way I sleep, I sort of smash my wrist into                    |
| 30:49      | the mattress and it does wake up my boyfriend because it vibrates the mattress enough. Who               |
| 30:55      | knew?                                                                                                    |
| 30:56      | I thought you were going to say you smash your wrist into the headboard or something                     |
| 30:58      | and like break your watch because you're mad it's going off.                                             |
| 31:01      | No, but I should also mention that when I fell off a scooter, I did not break any technology.            |
| 31:06      | Good.                                                                                                    |
| 31:07      | Not one piece, not a single scratch.                                                                     |
| 31:08      | No technology was harmed.                                                                                |
| 31:09      | Yeah, no technology was harmed in the breaking of my ankle. So, never again. So yeah, and                |
| 31:15      | then when we leave the house in the morning.                                                             |
| 31:17      | I have to ask, did your watch say you have fallen? Do you want me to call?                               |
| 31:21      | Yes, it did.                                                                                             |
| 31:22      | Oh, great.                                                                                               |
| 31:23      | Then I actually ran into one of the engineers who worked on that later in the week and she               |
| 31:26      | was there going, did it work? Tell me all about it. It's great to share feedback with                    |
| 31:30      | somebody who actually worked on that and it worked great, I have to say. I did not want                  |
| 31:34      | it to call an ambulance because I didn't know how much that would cost me. But yeah. Anyway,             |
| 31:40      | so yes, then when we leave the house in the morning, whichever one of us leaves last, we                 |
| 31:44      | press the Logitech Pop button by the door and it will turn everything off, including                     |
| 31:50      | the Sonos. So the Sonos will automatically turn off at 8.30, which is our 10 minute warning              |
| 31:54      | to leave. But if both of us leave earlier in the day, then we can turn everything off,                   |
| 31:59      | which is great.                                                                                          |
| 32:00      | Yeah.                                                                                                    |
| 32:01      | Oh, I forgot a piece of hardware that I own. There is one more piece of hardware.                        |
| 32:04      | What's that?                                                                                             |
| 32:05      | It's a Neato BotVac D7. So we have a robot vacuum.                                                        |
| 32:09      | Oh, nice.                                                                                                |
| 32:10      | And Pirate Kitty because that was in some article somewhere and I just love the name.                    |
| 32:15      | And that goes around and cleans our apartment for us and sends us a map during the day when              |
| 32:19      | we're not here. So that's a great feature because you can also tell it to go clean the                   |
| 32:24      | bedroom or, you know, go clean the bathroom or the kitchen, which especially with being                  |
| 32:29      | at home with a broken ankle is great. So I spilled some crumbs by my desk today and                      |
| 32:32      | I just went and sat on the sofa and told it, go clean my desk. So that was a very good                   |
| 32:38      | investment.                                                                                              |
| 32:39      | Yeah. I'll talk about, I have one too. I'll talk about it a little bit.                                  |
| 32:42      | Yeah. Yeah. And then in the evening, so the, as I mentioned before the [[Logitech Harmony\|Harmony Hub]], when                 |
| 32:48      | you start and end different activities, it can do different things with the lighting.                    |
| 32:54      | But then half an hour or so before sunset, I play with how long before sunset at different               |
| 32:59      | times of the year because sometimes in the winter, you know, it's more like to be 45                     |
| 33:03      | minutes to an hour before sunset because it's usually overcast. And so it's darker earlier.              |
| 33:08      | As well as getting darker earlier. But the lights around the apartment just turn on and                  |
| 33:15      | they turn on different colours. And the home app will start one of the automations on the                 |
| 33:21      | Nanoleaf panels. So it's usually something like rainbow colours, like slowly dancing across               |
| 33:27      | them, which is pretty.                                                                                   |
| 33:29      | And yeah, then there's one I mentioned earlier, which is at 10.15 in the evening, all the                |
| 33:34      | old lights that aren't coloured dimmed down to be quite dim. And the lights that are                      |
| 33:39      | colour switched to red. And it's our cue that we should be trying to go to bed unless there's             |
| 33:44      | a good reason not to.                                                                                    |
| 33:46      | So how often do you live up to that?                                                                     |
| 33:48      | Pretty much always. I mean, yesterday I was in bed at 9.30. Apparently I fell asleep.                    |
| 33:53      | I have no recollection of this. Apparently my boyfriend tried to wake me up and failed.                  |
| 33:57      | And I woke up at 7.30 this morning.                                                                      |
| 33:59      | You've been through a lot, man. I mean, you broke your ankle.                                            |
| 34:04      | Yeah, exactly. But yeah, if I'm not in bed by, if I'm not already in bed by then, then                   |
| 34:11      | it will do that. And I should actually mention, so there's another app on the app store called           |
| 34:16      | Home, but it's not the one made by [[Apple]]. It's made by, and I'm going to get the name                    |
| 34:22      | wrong. I want to say it's made by Mathias Gangkwya. Mathias surname, beginning with a G.                   |
| 34:30      | And it's a little hard to find because it's just called Home. But I will add a link in                   |
| 34:34      | the show notes. And this app is great because it allows you to do better control of home                 |
| 34:43      | things. So this, my 1015 automation only runs if the lights are on. If the lights have already           |
| 34:50      | been turned off because we've already gone to bed, then it won't turn the lights back                    |
| 34:53      | on for us, which I believe is something that you are not able to do in the home app.                     |
| 34:57      | There's also one called Home Hub.                                                                        |
| 35:00      | Yes. Yeah. There's a couple of apps, actually, which we should go into later, because I also             |
| 35:08      | use one called Home Pass and another one called Home Run.                                                |
| 35:11      | Yeah.                                                                                                    |
| 35:12      | I'm sorry.                                                                                               |
| 35:13      | We should explore this a bit.                                                                            |
| 35:14      | And it's Home Dash, not Home Hub. Yeah, there's a bunch of them. And right now we're in the              |
| 35:18      | midst of beta. So it's kind of hard to recommend those until we kind of know where everything            |
| 35:23      | lands in September. But yeah, there are definitely better apps out there for controlling Home            |
| 35:28      | Kit.                                                                                                     |
| 35:29      | Definitely. Okay. So what is your setup like, David? Because I mean, I was at your house                 |
| 35:33      | and I played with it a little bit. But as I was on the guest Wi-Fi network, you didn't                   |
| 35:38      | give me full control of your house for some unknown reason.                                              |
| 35:41      | Oh, I didn't. You're in the circle of trust. I would have put you on the main network.                   |
| 35:45      | No, it's okay. I'm just teasing you. So what have you got aside from, you know, the same                 |
| 35:52      | things that I do?                                                                                        |
| 35:53      | Well, I've gone in deep. Let's just put it that way. Yeah, we talked about, like we                      |
| 35:57      | talked about it on MPU occasionally. I feel like there's been a substantial upgrade since                |
| 36:02      | the last year or two that I talked about the last time. And, you know, I explained the                   |
| 36:07      | last time, but okay, I'm going to go in with Home Kit. That's the [[Apple]] thing. I have [[Apple]]              |
| 36:10      | devices. And I wanted to be able to talk about it on shows like this, but I also just                    |
| 36:15      | wanted to make better automation. So I talk about the Hue lights and I still have a few                  |
| 36:21      | of those in lamps, you know, where we have lamps that are connected to walls. They still                 |
| 36:26      | are the best solution for that. But I also had some of the ceiling ones. I sold those                    |
| 36:31      | to a friend and I started replacing the wall switches with the [[Lutron]] Caseta wall switches.            |
| 36:39      | And I was talking to a friend of mine, Robert Spivack, who was a guest on MPU, I don't know,              |
| 36:46      | over a year ago, I guess he's a home automation guy. And he was explaining to me that [[Lutron]]             |
| 36:51      | has purchased its own space in the broadcast spectrum. You know, one of the big issues                   |
| 36:58      | with all this home automation stuff, just another related conversation I had last week                   |
| 37:03      | in San Jose when we were at [[WWDC]] was I talked to someone on one of the platforms, not Home               |
| 37:09      | Kit, but one of the major platforms was there. And I talked to one of their software developers          |
| 37:14      | and he was explaining that, you know, the big problem is interference in the signal.                     |
| 37:18      | You know, there's a very limited amount of spectrum that these devices are broadcasting                  |
| 37:22      | on. And while one may work, once you have five, they're all conflicting with each other                  |
| 37:27      | in that same spectrum. And that makes communication difficult. And that's one of the primary challenges  |
| 37:34      | that people that make this stuff face.                                                                   |
| 37:35      | Definitely, yes. So [[Lutron]], for me, has always been the exception. They just work. I mean,               |
| 37:41      | they do, they do have a base unit that you get when you buy your first one. And I think                  |
| 37:45      | that's a key component. But I've got these things now in almost every, every major switch                |
| 37:52      | in the house. And, you know, I keep adding them every time I have money to burn and I                    |
| 37:57      | want to do something, I'll buy another one of these things. And eventually the whole                     |
| 38:01      | house is going to be covered with these things. And it's great because they just work. First             |
| 38:06      | of all, the family members get that benefit of having a switch that works. But then at                   |
| 38:11      | the same time, the automation also always works because you are not, you know, you're                    |
| 38:16      | just not cutting the power off to the smart device like you do with a Hue light. The other               |
| 38:21      | thing is nice is there's different kinds of switches. You had talked about how you have                  |
| 38:25      | the button at your door that you can turn everything off with. I have one as well. And                   |
| 38:30      | it's a [[Lutron]] switch that can, if you press the top button, it lights up almost the entire               |
| 38:37      | house. And if you press the bottom one, it turns off every light in the house. So if                     |
| 38:42      | you're showing up late at night and you're uncomfortable or you hear a noise, whatever,                  |
| 38:46      | you press that button in the house, lights up like a Christmas tree. It just goes up                     |
| 38:50      | everywhere. But at the same time, as you're walking out the door, if you're like, oh,                    |
| 38:53      | I'm not sure if I turned off the light, you just press the bottom button and all the lights              |
| 38:57      | get turned off when you leave. And it's great, right?                                                    |
| 39:00      | I love that. If there were [[Lutron]] Casetas, which is available in Europe, then I would                  |
| 39:05      | have actually probably got those instead of the Phillips Hue because they are much more                  |
| 39:11      | friendly to other people. And you do have the advantage of the ability to just turn                      |
| 39:18      | it off with a button without replacing your light bulbs.                                                 |
| 39:22      | Yeah. The downside is that like if you live in an apartment, you probably can't start                    |
| 39:27      | replacing switches. So it depends and not everybody can use them. But if you have the                    |
| 39:33      | ability to replace switches where you live and you want a reliable lighting control,                     |
| 39:38      | it's the Casetas switches. I am so happy with them. I've got one now on the porch light.                |
| 39:43      | So I talked earlier about how we'll turn on lights as we're coming home. It's the home                   |
| 39:48      | kit driving the Casetas to turn on those lights. And it's great.                                       |
| 39:53      | Yes. Yeah, it is. I can confirm it because I tested it in person.                                        |
| 39:57      | Now, also in addition with the Hue lights, I just on a whim, I was at Home Depot. It                     |
| 40:04      | was like a home improvement superstore that's in a lot of communities here in the US. And                |
| 40:10      | I was there once and they had an open box set of two Hue light strips. And it was one of                 |
| 40:18      | those things where we're giving this to you almost for free. We don't know if it works.                  |
| 40:24      | You know, somebody must have returned it, whatever, like you want to try it, you know,                   |
| 40:27      | go for it. So I took a chance and bought them and they're great and they work fine. And                  |
| 40:32      | I have the strips installed in my office. I have one around kind of my storage closet                    |
| 40:38      | and one taped to the edge of my desk. You know, I have one of those desk that goes up                    |
| 40:43      | and down. It's like, I don't know, three quarters of an inch thick. And the strip just is stuck          |
| 40:49      | to the back edge of the desk. So when I turn it on, it lights up the wall behind my desk.                |
| 40:54      | And I love those lights because it's great. They just enough light, like a lot of times                  |
| 40:59      | when I get here early in the morning, it's not light out yet. And I don't really want                    |
| 41:04      | to light the whole room, if that makes sense. But having just those strip lights on is enough.           |
| 41:10      | Just to disclose one of my automations. I also have a sensor in the room that senses motion              |
| 41:16      | because, you know, I'll go to bed and I'll wait and I'm like, oh, I need that, you know,                 |
| 41:20      | I need that notebook that's in my office or I left my glasses in there or whatever. And                  |
| 41:25      | so once it's dark and this is just using home kit automation, assuming it's dark out, if                 |
| 41:30      | there's motion in this room, then turn on the strip lights, you know, so it doesn't                      |
| 41:35      | light up the whole room, but just the strip lights. And then there's a separate automation               |
| 41:40      | that says if it's dark and there's no motion in this room, turn the strip lights off. So                 |
| 41:44      | then it automatically, because you could do it with the automation where it says leave                   |
| 41:47      | them on for 15 minutes or whatever, but actually have a separate automation that once it realises        |
| 41:52      | there's no more motion, it just turns them off. Yeah, I actually want to get some more                   |
| 41:56      | of the strip lights and what the motion senses for that, because it would be great to have               |
| 42:00      | under the bed in the bedroom. So somebody gets up in the middle of the night to go to                    |
| 42:04      | the bathroom, then it could just turn on like a dim red or something. So the person going                |
| 42:08      | to the bathroom can see where they're going.                                                             |
| 42:10      | Oh, Rose, that's a great idea. Why did you say that?                                                     |
| 42:13      | I'm pretty certain that that is wife friendly. I'm pretty certain Daisy would approve of                 |
| 42:18      | that in your case.                                                                                       |
| 42:19      | Yeah, I guess the question would be is as I'm like, if I like twist and turn in my sleep,                |
| 42:25      | is that going to turn it on or not? I don't know.                                                        |
| 42:26      | Well, if you place the motion sensor in the right spot, so for example, low enough on                    |
| 42:31      | the floor that it's only going to see if there's like if like feet are moving, then it should            |
| 42:36      | be fine.                                                                                                 |
| 42:37      | Oh man, that's going to cost me money, Rosemary.                                                         |
| 42:40      | I'm sorry. I'm very sorry.                                                                               |
| 42:42      | I'm tempted. The other thing I like about those strip lights is they you can set colours                  |
| 42:47      | with them. So like during the holidays, I'll set it in holiday colours, whatever the holiday              |
| 42:51      | being or from just filling kind of eclectic, I'll change the colours up. Largely, I just                  |
| 42:56      | keep them white, but I do change the colours on occasion.                                                 |
| 43:00      | One question, which colour is it for Star Wars Day?                                                       |
| 43:03      | You know what? I have not done colours of my lights for Star Wars Day, but I think rebel.                 |
| 43:09      | I think I'll set that up. Rebel Orange would definitely be in the mix for me.                            |
| 43:14      | Well, there we go.                                                                                       |
| 43:15      | Yeah. Anyway, so that's the light situation. It's largely covered by the switches. We had                |
| 43:22      | the very first Nest controller that gave up the ghost on us last year. I don't know why                  |
| 43:28      | it just stopped working. And I wasn't afraid of the fact that the Google bot nest, everybody             |
| 43:35      | was freaking out. I'm like, whatever, the hardware works. And to be honest, I've never,                  |
| 43:41      | even though I've had this automatic thermostat, I've never taken huge advantage of it. I'm               |
| 43:47      | not comfortable about the air conditioning just turning on whenever the computer thinks                  |
| 43:51      | it should, even when we had just a mercury thermostat in it. We didn't do it that way                    |
| 43:56      | because I thought it was wasteful to have it turning on if we didn't need it. But I                      |
| 44:01      | do like that remote trigger. And so I went ahead. When I've upgraded it, I bought the                    |
| 44:06      | Ecobee, which is the [[HomeKit]] one. Yeah. And my thoughts going forward, Frank Lair, anything              |
| 44:14      | I'm going to buy [[HomeKit]], anything I'm going to buy for automation home needs to work with               |
| 44:17      | [[HomeKit]] with one exception, which I'll talk about in a minute. Same thing. A police friend               |
| 44:24      | of mine, I was talking about automation and stuff. I helped him out with some things.                    |
| 44:28      | And I said, yeah, I'm really tempted to do my friend Locke. And he said, well, Dave,                     |
| 44:35      | that Locke on your door, all it does is keep out the honest people. The bad guys are going               |
| 44:39      | to get through it. So why are you so hung up on this? So I went ahead and bought a [[HomeKit]]               |
| 44:43      | enabled Locke. It's the quick set one in the United States because I already had quick                   |
| 44:47      | sets and I could key it. And it's the same thing as the light switches. It recognises                    |
| 44:52      | the existing keys. I actually installed it when nobody was home. And when they came home,                |
| 44:58      | they use their key to unlock the front door. That was my test. It's like, okay, were they                |
| 45:03      | able to get in with no change? Yeah. Okay. So the key still works and we still use the                   |
| 45:07      | keys all the time. But it's also got a touchpad on it if you need it. And it's also connected            |
| 45:13      | to [[HomeKit]]. So I can lock it. Like if I come home from a hike and I realise I forgot to                  |
| 45:18      | lock the front door, I can just press a button on my phone and lock it. It's very nice and               |
| 45:23      | convenient. But it's not earth shattering, but it's nice having that. We've got a couple                 |
| 45:29      | plugs that our [[HomeKit]] enabled. And I think it's, you know what? I'm not sure who the                    |
| 45:38      | vendor is. I think it is... My parents have got some. I got my parents some for Christmas                |
| 45:44      | a few years ago. They've got the Elgato Eve ones. And they're really good. They love                    |
| 45:48      | plugging the Christmas tree into things like that. And they've got a lamp plugged into                   |
| 45:52      | it. And my dad is always super proud that he remembered to say the magic words, turn                     |
| 45:56      | on the lamp. Which, you know, he does that with his watch. And they really like it. And                  |
| 46:01      | I actually set it up recently. So it turns on when they come home and it's after dark.                   |
| 46:06      | So they're like pulling up in the driveway and the light turns on. And my mom thought                    |
| 46:09      | that that was the coolest thing ever. Yeah. I've got a couple Eve ones. And I've also                    |
| 46:12      | got a couple... I think I've got an iHome one as well. But the same thing I use it for like              |
| 46:16      | the Christmas lights. And, you know, it just kind of moves around. You know, they're always              |
| 46:21      | in motion. Where I... And then the last one that's [[HomeKit]] enabled is like you. I bought                 |
| 46:27      | a robot vacuum. I named mine Mo. Did you ever watch a Wally? Yes. Yes. I love Wally. Yeah.               |
| 46:34      | There's a little robot in Wally who's obsessed with cleaning everything. I actually looked               |
| 46:39      | him up. I'll put the note in the show notes. His name is Mo for microbe obliterator. And                 |
| 46:44      | he's always kind of angry because Wally's bringing dirt all over the place. It's kind                    |
| 46:48      | of a cute thing. Anyway, I call him Mo. I also call him my little buddy because, you know,               |
| 46:52      | I'm home alone a lot working at home. I don't have a dog. So I'm my little buddy. Yep. He                |
| 46:57      | gets... It's like I have pirate kitty. Yeah. He gets into trouble. We have a hardwood floor                |
| 47:01      | in our bedroom now and like he goes and cleans the dust in there the other day. He texted                |
| 47:06      | me. He's like, help. I'm stuck. I went in there and he had found one of my wife's workout                |
| 47:12      | shoes, you know, on the floor. And then he chewed up the shoelace and he got stuck. Oh                   |
| 47:17      | my gosh. My vacuum did the exact same thing. So the first day I was home alone with this                 |
| 47:22      | plastic cast on my like not really able to move and the robot vacuum messages me and                     |
| 47:26      | goes, help. I'm stuck. And it's like, oh God. So it sent me a map though. So I knew where                |
| 47:31      | it was. So I didn't have to go hunting around the apartment for it. I just sort of went                  |
| 47:34      | out to it and it's like, you just tried to eat one of my shoelaces. I'm like, hey buddy,                 |
| 47:38      | you shouldn't do that. That's not good for you, you know. No. So I got him unwound and                   |
| 47:43      | he cleaned the room. That's cool. But the one thing I don't have on home kit is cameras.                 |
| 47:50      | And I did get interested in cameras a few years ago and I was one of the original backers                |
| 47:56      | of the Canary camera, which is kind of an all in one camera. I like it because they have                 |
| 48:01      | the sirens in them as well. So I can remotely trigger a siren in the house if I want. And                |
| 48:06      | they're very, you know, friendly. They can not turn on when people, you know, when recognised            |
| 48:11      | people are in the room and you can just stick it on a cabinet and it does get a really good              |
| 48:15      | view of the room. And then I, a couple of years ago when we were leaving the country                     |
| 48:20      | for a short time, I upgraded and bought a couple. They have a wireless one, two Canaries                 |
| 48:26      | that you can put outside the house that you don't need to run any wiring for. And they,                  |
| 48:31      | you know, they'll watch the front door and the back door and they'll save it to the system.              |
| 48:36      | If you want, they've got an optional subscription plan like everybody. And I'm okay with these           |
| 48:42      | cameras. The outdoor ones on the wireless connection is nice because I didn't want to                    |
| 48:45      | have to run a bunch of wires. I'm not sure they're entirely responsive. I feel like                      |
| 48:49      | if someone just kind of runs up to the door and then leaves real quick, I'm not sure it's                |
| 48:53      | going to capture them. I don't think it's a complete solution. And honestly, when [[Apple]]                  |
| 48:58      | was talking at [[WWDC]] saying we're making this new system for cameras to make it ultimate,                 |
| 49:04      | you know, ultra secure and really protect the video of your home, I was really hoping                    |
| 49:09      | [[Apple]] would say, and we have a camera that we're making that you can trust, you know,                    |
| 49:14      | but they didn't. Instead, they're going to third party vendors. And honestly, it's a                     |
| 49:19      | lot of money to upgrade the cameras. But at some point I am going to, I want to get those                |
| 49:25      | into the home kit web as well.                                                                           |
| 49:27      | Yeah, I would really like to get a camera that replaces the spiral on the front door.                    |
| 49:33      | Because usually when our doorbell rings, it's actually somebody just trying to get into                  |
| 49:37      | the building. Yeah, rather than somebody for us. But if our front doorbell rings, then                   |
| 49:43      | it's frequently very much, who is that? Like, do we do we want to go and get it? And my                  |
| 49:47      | boyfriend and I are both equally lazy and neither of us particularly want to get up                      |
| 49:50      | and go check it. So it'd be great if we could just, you know, pull up a phone and open something         |
| 49:55      | like the HomeCam app and have a look and see who it is.                                                  |
| 49:59      | Yeah. Yeah, I think that's, for me, something I'm interested in. Robert Spivack, who I mentioned         |
| 50:06      | earlier, had some really great solutions that are frankly much cheaper than the home kit                 |
| 50:11      | stuff where you can run software on your Mac that records audio, the video locally basically             |
| 50:16      | solves all the problems [[Apple|Apple's]] talking about without having to spend more money. And I probably         |
| 50:21      | need to look at that as well. But if I do it, I feel like I may just have an electrician                 |
| 50:28      | run wires for me, which is, you know, to the key points and just do it properly. But that's              |
| 50:35      | on my radar, but I'm not super anxious to get started on it. You know, I'm just kind of                  |
| 50:40      | keeping on things right now. Sensors, I have, I have, like I said, the motion sensor and                 |
| 50:47      | the study, I also have one downstairs. I haven't put any in the bedrooms. It just seems weird            |
| 50:52      | to me. I have temperature sensors with the, you know, with the new thermostat and it came                |
| 50:58      | with an extra one. So I put it in my office as well. Although I haven't really applied                   |
| 51:02      | that to automation as too much either. But you know, the automatic sensors are really                    |
| 51:08      | nice because, I mean, we've got automation that we can set based on computers like at                    |
| 51:12      | sunset or at a certain time. But, but, you know, motion in a room is also a very nice                    |
| 51:18      | way to make convenient automation.                                                                       |
| 51:20      | It is. And by the way, did you know that the Philips Hue motion sensors, they can also                   |
| 51:25      | detect a light level, which is one of the reasons why I'm actually thinking of getting                   |
| 51:29      | one of those, because then you can use it for motion or for light. So if it gets really                  |
| 51:33      | dark, they could turn on the lights for you.                                                             |
| 51:35      | Yeah. And I have one of those. You've been in my house now. You came in and hung out                     |
| 51:38      | with us. So the upstairs, what I call hallway, it's like across the top. It's like a little              |
| 51:42      | thing you walk across to get to the bedrooms. I actually have a sensor in there that, so                 |
| 51:48      | if it's dark out and anybody's walking along the hallway because there's a stairway, that's              |
| 51:52      | the top of the stairs. I don't want someone to fall down the stairs. So at night, if you                 |
| 51:56      | walk along that area and it senses motion, it turns those lights on for a short period                   |
| 52:00      | of time. And that's real convenient. It's another kind of safety thing.                                  |
| 52:06      | It is. Yeah. That's really good.                                                                         |
| 52:08      | In terms of automations, I have lots of time and motion-based light automations. Like I                  |
| 52:14      | just shared one of them with you. Another one that I use is just like some of the downstairs             |
| 52:20      | stuff where it'll turn on like if you go downstairs at night. The weird thing about                      |
| 52:24      | me is there's multiple people who live in this house. And so you can't be as precise                     |
| 52:31      | with that. Like I was listening to your lights out automation. I guarantee you if I had lights           |
| 52:40      | turning red at 10 o'clock, like go to bed, there'd be at least one person in this house                  |
| 52:44      | that would be angry at me because they don't necessarily want to go to bed the same time                 |
| 52:47      | I do. Yeah.                                                                                              |
| 52:49      | So that's kind of like a thing. You're going to kind of work around that. But I do have                  |
| 52:53      | a lot of automations. Like even the one in the office when one of my daughter's visits,                  |
| 52:57      | this also doubles as her bedroom. And I always have to remember to turn that automation off              |
| 53:02      | because I don't want her like trying to go to sleep and having these strip lights turn                   |
| 53:05      | on repeatedly. I mean, in that particular case, I presume                                                |
| 53:10      | you can just put the sensor in a drawer and that will turn it off essentially. And then                  |
| 53:15      | you get the sensor back out when she leaves. Yeah, I do. But I'm a nerd. So I actually                   |
| 53:18      | just go in and it's very easy in the home app to just turn it off.                                       |
| 53:22      | Yeah, it is. But, you know, there's a lot you can do with this stuff. And                                |
| 53:26      | Oh, so much. And in addition to the automation, the manual control is also very useful.                  |
| 53:33      | I think the more people you have in your house, the more you rely on the manual control.                 |
| 53:37      | Potentially, yes. I find a lot of the time I pull out my phone or my [[Apple Watch]] and I                   |
| 53:42      | trigger a scene manually. Just because, you know, I've decided that we're going to sit                   |
| 53:46      | down and watch film or something. And the [[Logitech Harmony\|Logitech Harmony Hub]] is great, but it can't                    |
| 53:51      | differentiate between us watching TV and us watching a film.                                             |
| 53:55      | Before we continue, I want to talk about timing, the automatic time tracking app for Mac OS.             |
| 54:01      | Use the link in the show notes to get 10% off your purchase.                                             |
| 54:05      | This episode of the automators is brought to you by timing, the app that tracks your time                |
| 54:09      | automatically instead of manually. Now we're the automators. So that's important, right?                 |
| 54:16      | Making it automatic, you know, having the ability to get your time tracking                              |
| 54:19      | accurate without you having to push buttons. And that's what timing gives you.                           |
| 54:24      | Why are you tracking your time? Well, if you're billing your hours, that's obvious. But                  |
| 54:27      | even if you are employed or billing per project, you need to estimate how long specific task is          |
| 54:32      | going to take. Time tracking helps you stay on track with those estimates to make sure you               |
| 54:37      | don't end up in the red with your projects. And that can help you make more accurate estimates           |
| 54:41      | in the future. And that's what timing does. Instead of making you start and stop timers,                 |
| 54:46      | timing automatically tracks how much time you spend on each app, document and website.                   |
| 54:52      | It can get very granular. And it shows you exactly when you were working on what,                        |
| 54:57      | when you slacked off and how productive you've been so you know how to improve your productivity.        |
| 55:02      | Timing's functionality is similar to iOS 12 screen time before the Mac and honestly,                     |
| 55:08      | way more powerful. With timing, the manual tracking and adjustment is still possible,                    |
| 55:15      | but the automated approach gives you those real great details and plus they have a gorgeous new          |
| 55:20      | dark mode. But you know, when work doesn't just happen on your Mac, that's why timing automatically      |
| 55:26      | makes suggestions for filling the gaps in your timeline. When you come back and says, hey,               |
| 55:30      | you've been gone 30 minutes, what were you doing? Walking the dog, I write, then that's tracked for      |
| 55:35      | me. That way you'll never again forget to enter a meeting. And with the automatic sync feature,          |
| 55:40      | your track time will magically appear across all of your Mac. So even when you work on the go with       |
| 55:45      | your Mac book, you'll still have the full picture on your Mac once you get home. I just love the         |
| 55:50      | granularity of timing because I can spend time in Microsoft Word, but I have a lot of clients            |
| 55:56      | and a lot of different things going on. And that's not enough for me to know that I was in there.        |
| 55:59      | But when I know what documents I was working on, or what websites I was logged into, that gives me       |
| 56:05      | very accurate time as to where I'm spending my time. And timing is so smart that you can attach          |
| 56:10      | projects to those websites and documents so it automatically categorises everything for you.             |
| 56:16      | I've probably said the word automatic 100 times in this ad spot because that's what timing is.           |
| 56:20      | It's automatic time tracking. It's a great service. You need to check it out.                            |
| 56:25      | Timing is so confident that you'll love their fuss free approach. They offer a totally free trial.       |
| 56:30      | Download the 14 day trial today by going to timing app.com/automators and save 10%                 |
| 56:39      | when you purchase. Stop guessing how you spend your time and instead focus on doing what you're          |
| 56:43      | good at. We think timing for the support of this show. Okay. So iOS 13 is actually going to bring        |
| 56:50      | some changes to this. And while iOS 13, at least at the point of talking, is not available in public     |
| 56:55      | beta, it is coming. It will be out in September. At some point, we'll try their best to push it          |
| 57:03      | onto everybody's iPhone and iPad that's capable of this, or rather iPad OS will get pushed onto          |
| 57:08      | everybody's iPad that's capable of this. And we're going to see some differences there just              |
| 57:15      | because [[Apple]] like to try and improve the stuff every year. So why not?                                  |
| 57:22      | Yeah. We talked about it in the [[WWDC]] show, but let's just talk about this in terms of home               |
| 57:28      | automation. But with the new version of Siri shortcuts, they have effectively included                   |
| 57:35      | all of the home automation routines with Siri shortcuts. And you combine that with all these             |
| 57:42      | great new triggers like when you plug into your, what about when you plug into your car                  |
| 57:46      | and play, but when you unplug from your car and play, all of a sudden you can do home automation         |
| 57:51      | based on you leaving your car. Location stuff, time based stuff. And not only does that give             |
| 57:58      | you the ability to control your lights and your vacuum, but it also gives you the ability                |
| 58:03      | to start playing music and do all sorts of crazy stuff that you can do with Siri shortcut. It            |
| 58:08      | really unlocks the whole world for you. I can't wait to get started on this.                             |
| 58:12      | No, it's very exciting. And I mean, all of the home kit automations that you've got in home              |
| 58:18      | will be available under the automation tab in shortcuts as well. However, you don't need to              |
| 58:24      | worry, they are still available inside the home app. But I think in many ways, the biggest part          |
| 58:30      | of this is actually going to be the fact that the HomePod can, sorry, the HomePod can recognise        |
| 58:36      | multiple voices. So, and if the HomePod can recognise multiple voices, that means that                  |
| 58:41      | different people can trade different scenes because you can have it run a shortcut. But                  |
| 58:45      | if that shortcut isn't a home shortcut, if it's a personal shortcut, then nobody else can run            |
| 58:50      | that. But you can set up different shortcuts with the same name for those people. And then               |
| 58:55      | when they run it, it will do what they want rather than what you want, which is of course,               |
| 59:01      | the whole point of automation, having the stuff work the way you want it to.                             |
| 59:05      | And I'm looking forward to that. My wife is not going to be setting up Siri shortcuts,                   |
| 59:09      | but I can set them up for her. And the things that she likes, we can set up for her. I also              |
| 59:15      | like the fact that now the individual HomePods are addressable. Actually, I didn't talk about           |
| 59:20      | HomePods when I talked about my gear, but they have, they're like tribbles in my house at this          |
| 59:24      | point. They keep growing. I keep eyes out for deals. I've got one in the office, one in the              |
| 59:30      | bedroom. My daughter took our Sonos when she moved out, one of them. And then I've got two               |
| 59:36      | downstairs that are paired as a stereo pair. So I've got a bunch of addressable HomePods in             |
| 59:42      | the house. Yes. And that's especially with the new action and shortcuts, which is to set the             |
| 59:47      | playback destination is very useful. So as soon as iOS 13 is a little bit more stable and I've           |
| 59:53      | upgraded my iPhone, I will be testing a shortcut that when I connect to my home Wi-Fi network,           |
| 59:58      | it sets my playback destination to my HomePod. But when I disconnect from it,                           |
| 01:00:03   | it will then set it to my AirPods or pause it or whatever, which is perfect. So that when I,             |
| 01:00:08   | you know, when I'm not on the Wi-Fi anymore, yeah, it'll be mine. Yeah. I still want the                 |
| 01:00:14   | HomePod to play my anthem when I walk in the front door, right? I just haven't figured out              |
| 01:00:19   | what my anthem is yet. That's the problem. I mean, I mean, it can't be the end for us March,             |
| 01:00:24   | because that's the bad guy. That's the dark side. I can't do that. Well, if I was going to go Star       |
| 01:00:28   | Wars, I would either go with the main theme or the metal ceremony song at the end of episode.            |
| 01:00:35   | I kind of feel like the Indiana Jones theme might work for you. Yeah, that would totally work. But       |
| 01:00:40   | then also I really love jazz and there's some great jazz out there. So I really have that's              |
| 01:00:45   | that's the crisis I'm facing. Well, what you could do, and this is a crazy thought because               |
| 01:00:50   | this is going to be running a shortcut to do this, you could have it format the date is the day of       |
| 01:00:55   | the week. Yeah. And then have all the days of the week in a dictionary and have different songs          |
| 01:01:00   | connected to them. Yes. Or different playlists. What I what I need is a is a Wi-Fi enabled mood          |
| 01:01:07   | ring. Right. Oh, yeah. So I think there is actually like a health tracking fitness ring,                 |
| 01:01:13   | but I don't know if it actually connects into [[Apple Health]]. Yeah. If I could read my mood,               |
| 01:01:17   | then it could play like maybe it plays some Miles Davis, if I'm kind of down and it plays,               |
| 01:01:22   | you know, Star Wars, if I'm really up. I don't know. This story is not finished yet.                     |
| 01:01:27   | Let's just put it that way. No, we'll put this way. We're going to come back into a follow-up            |
| 01:01:31   | episode on this once we've got iOS 13. Yes, there we go. No, but I agree. It's like it really has        |
| 01:01:37   | unleashed a lot of power and it makes [[HomeKit]] a lot more attractive now that this automation has         |
| 01:01:42   | gone this deeper level. And I don't know. I feel like in the past where I've said,                       |
| 01:01:49   | if you want to wait, that's probably a good idea. I feel like now is the time if you're                  |
| 01:01:53   | interested in this home automation stuff, maybe buy a couple pieces and start playing with it,           |
| 01:01:57   | because it's a lot of fun and it is really useful now. And like another thing I didn't say earlier       |
| 01:02:03   | was my family understands the home app. I mean, my wife uses it all the time. I mean,                    |
| 01:02:08   | she turns the air conditioner on with her phone as well. And having this stuff kind of in one            |
| 01:02:14   | centralised location has really kind of unlocked home automation for them as well.                       |
| 01:02:20   | And while they're not designing their own automations, they're definitely using                          |
| 01:02:24   | their phones to trigger things and make some of this stuff happen.                                       |
| 01:02:29   | Yeah. And that's one of the great things, especially if you limit it to a few apps,                      |
| 01:02:34   | and that also applies to Android users. The problem is if you end up with several different              |
| 01:02:38   | things, so if you go, I don't know, say, Nanoleaf Flight Panels and Sonos and Phillips Hue,              |
| 01:02:43   | then that's three different apps to control things for an Android user. But of course,                   |
| 01:02:47   | it's only one app for an iPhone user in the Sonos app.                                                   |
| 01:02:51   | They don't have something on Android that combines everything? I thought they did.                       |
| 01:02:54   | Not that I found. I've been looking. And if anybody knows, please tell me in the forums,                 |
| 01:02:59   | my boyfriend will be eternally grateful, or he may not be, but I will be,                                |
| 01:03:03   | because he'll stop complaining about needing to use multiple apps for everything.                        |
| 01:03:06   | Well, I mean, there's a solution. Yes, I suggested it to him,                                            |
| 01:03:11   | and he looked at me like he'd grown an extra head. All right. So that was good.                          |
| 01:03:15   | The other nice thing I would mention on the home kit, if you're getting your family,                     |
| 01:03:19   | getting a couple of them you want to sell some of your non-nerd family members on it,                    |
| 01:03:23   | show them the control panel, put the widget on control panel for them, so you just swipe down            |
| 01:03:28   | the newer iPhones from the right, or depending on which device you have. But in the control panel,       |
| 01:03:32   | you can put a home kit button, which makes it very quick to get to no matter where you are on            |
| 01:03:39   | your phone or iPad. And once I showed it to my wife, that was, I know she uses it all the time.          |
| 01:03:45   | Oh yeah, I use it a lot as well. And also, if you put it in the control centre,                          |
| 01:03:48   | so you can put it home in the control centre, and then when you tap on it,                               |
| 01:03:51   | it can show eight favourite scenes. I've accidentally just set the early morning                          |
| 01:03:55   | scene because I'm tapping wildly. Or you can control nine accessories, so you can put like               |
| 01:03:59   | the nine most frequently controlled individually accessories there. And then eight of your most          |
| 01:04:05   | frequently used scenes. So I've got a couple of manually flight panels in there, which I really          |
| 01:04:10   | like. Well, I've been interested in this stuff since the X10 modules like 25 years ago. I just           |
| 01:04:16   | think it's great. I love the idea of making, automating stuff that I can automate. I mean,               |
| 01:04:22   | we're making this show, honestly, right? I mean, there's too many things for me to do as it is.          |
| 01:04:28   | The more of the little mundane stuff I can get out of my life, the better. And home automation           |
| 01:04:33   | definitely scratches that itch. Yes, it does. And I really like all of these features as well,           |
| 01:04:41   | because especially when you add a couple of extra apps made by third parties, you can really go          |
| 01:04:46   | crazy. So I've got a complication on my watch, which changes what it does at the different               |
| 01:04:53   | time of day. So if I'm sitting at home in the middle of the day, then it offers me one set               |
| 01:04:58   | one scene for [[HomeKit]]. But if I'm sitting at home in the evening, then it's offering me                  |
| 01:05:02   | something else, which is really useful. So what are the things you would like to do with [[HomeKit]]         |
| 01:05:08   | or with a home automation that you can't do yet? Well, actually, I have to say that in my particular     |
| 01:05:13   | case, it's very little I can't do because I have a Raspberry Pi set up with something called Homebridge. |
| 01:05:20   | And Homebridge is a great service. And you can run this on your Mac as well. I just said to run it       |
| 01:05:24   | on a Raspberry Pi for segregation. And in case that thing went wrong, it would only kill a Raspberry Pi. |
| 01:05:31   | And this means that I've connected. So I've got a Netatmo weather station that's connected             |
| 01:05:35   | into [[HomeKit]] as well. And my Neatobot back is connected. And my Sonos is also connected to [[HomeKit]].       |
| 01:05:42   | I will say that for some reason, it's not hugely reliable. I'm pretty certain that I did something       |
| 01:05:47   | wrong in the setup. And that is why because I've not heard this from other people, but it also           |
| 01:05:51   | means that everything that's available in [[HomeKit]] is also available via my [[Amazon Echo]] Lady inside       |
| 01:05:57   | of the Sonos. So it works in two ways, which does make life a lot easier for me. Until I had that,       |
| 01:06:03   | I was struggling a little bit with some things. Well, one challenge I'm facing right now is my           |
| 01:06:07   | in my backyard, I have these string lights, you know, that lights up and they pull too much              |
| 01:06:12   | Amperage where like the typical iHome plug is not going to be sufficient. There are now some             |
| 01:06:20   | heavy duty outdoor plugs. I have not bought one yet. So I guess I just need to try one.                  |
| 01:06:25   | But I tried one once a couple of years ago, and it also was not heavy duty enough to                     |
| 01:06:31   | do the lights. I'd like to be able to [[HomeKit]] the the backyard lights, you know,                         |
| 01:06:37   | and we have wildlife where I live. And sometimes I just want to turn the lights on to scare              |
| 01:06:41   | something away. And the, and I like to make that, you know, put maybe even put emotions                  |
| 01:06:47   | in, sir, I don't know what I do. But the either way, I that's a problem I have that still hasn't         |
| 01:06:52   | been solved. But but largely, I mean, the big stuff is there. Yes, it is, you know, the [[HomeKit]]          |
| 01:06:59   | has some pretty advanced rules now that has evolved over the last several iterations of iOS. So now,     |
| 01:07:05   | like one of the conditions is when nobody is home or when a certain person is home. And since we all     |
| 01:07:10   | have these iPhones in our pocket, [[HomeKit]] knows who is home and who is not. And I'd like to get          |
| 01:07:15   | better at using those in rules, you know, that kind of solves the problem I talked about. I just         |
| 01:07:21   | don't trust them that much. And and I don't know if that's justified or not. So that's something         |
| 01:07:26   | else. Maybe that's a software problem between my ears. But I need to look into that as well. I'd         |
| 01:07:31   | like to get more automation stuff that is conditional upon me being here and me not being here.          |
| 01:07:38   | Yeah, in my case, because my boyfriend has an Android, actually, that is a missing feature,              |
| 01:07:42   | like how can I track whether or not he's at home? And I've been have been looking at trying to set       |
| 01:07:47   | up something that monitors if he's on the Wi Fi network, but then the Wi Fi on his old phone broke.        |
| 01:07:52   | So he I couldn't even track him based on whether or not he was on the Wi Fi. And now now he's got        |
| 01:07:57   | pixels. So hopefully, I can figure something out so that I can say that if either of us is at home,      |
| 01:08:03   | I mean, I'm sure there must be something for Homebridge and Android, where I can do that,                |
| 01:08:06   | I just haven't looked enough for it yet. And it's just like the iPhone and the Android couple.           |
| 01:08:14   | Do you guys argue about that? So the thing? No, no, we've had discussions about it, but not              |
| 01:08:19   | arguments. In his case, he just doesn't really like the [[Apple]] stuff he thinks is overpriced.             |
| 01:08:24   | I personally disagree and find the software integration to be a major selling point.                     |
| 01:08:29   | Yeah. The old story. We agree to disagree. The old story. It's like Romeo and Juliet for nerds.          |
| 01:08:38   | Yeah, a little bit, but less desk involved.                                                              |
| 01:08:42   | All right. Well, anyway, home automation, I'm glad we are able to spend a little time on the             |
| 01:08:46   | automators. We have a forum, so let us know, especially if you're outside of home kit, what              |
| 01:08:50   | works for you. And I do have just a couple of final parting tips for people if they're looking for       |
| 01:08:57   | stuff. So for example, my nighttime scene, it only runs if the kitchen light is on,                      |
| 01:09:02   | because I just picked the kitchen light because that was an easy one. And I'm doing this with            |
| 01:09:06   | an app called Home 3. I got the name completely wrong earlier. I got the guy who makes [[Yoink]].             |
| 01:09:11   | This is made by Matthias Hochgatterer. And I will have a link to that in the show notes.                 |
| 01:09:16   | And there's two other apps made by a lovely person. I believe his first name is Aaron.                   |
| 01:09:21   | Home Pass and Home Run. So Home Pass, you can store all of the codes for Home Kit in there.              |
| 01:09:28   | And you do have to add these separately, but then they're all in one place. So if something goes         |
| 01:09:31   | wrong and you need to reset up your home, then they're all in one place, which is very useful.           |
| 01:09:37   | And Home Run is the one with the complications changing that I use on my watch.                          |
| 01:09:41   | And Home Dash is the one that I've been playing with. But right now, I'm kind of focused on the          |
| 01:09:46   | [[Apple]] app because betas, right? Yes, exactly. But at the same time, I have to say I've not               |
| 01:09:52   | had any problems with any of this stuff on the iOS 13 beta. I will grant you my [[Apple Watch]] and my       |
| 01:09:57   | iPhone are actually not on the on the betas right now, because I'm waiting for the public                |
| 01:10:03   | betas on those because always first developer beta is a little wonky. But                                |
| 01:10:08   | Yeah, I guess one point we didn't make about the iOS 13 beta is the controls are better.                 |
| 01:10:12   | Oh, yeah. So much better. They are conditioning controls. And some of the, you know, they reworked       |
| 01:10:18   | some of the controls. I still don't like that they're all a bunch of rounded rectangles. I mean,         |
| 01:10:23   | everything looks the same. I would prefer that the iconography be more prominent. So when you're         |
| 01:10:28   | looking between switches and light bulbs and things that you can find the stuff you want easier, but     |
| 01:10:35   | they have improved the actual controls with iOS 13.                                                      |
| 01:10:38   | All right. So that's it on home automation. Let us know in the forums if you've got something cool       |
| 01:10:44   | that you like. And we will see you in a couple of weeks. Thanks to our sponsors creative next            |
| 01:10:50   | in timing. And we will see you in two weeks. Bye bye.                                                    |
