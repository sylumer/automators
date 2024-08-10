---
status: "incomplete"
fc-date:
  year: 2020
  month: 10
  day: 09
fc-category: "podcast"
podcast: "Automators"
published: 2020-10-09
duration: 4300
formattedduration: "01:11:40"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/60"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators060.mp3"
episode: 60
title: "60: Cloud Automation Check-In"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Changes are afoot in the cloud automation space. IFTTT now has a pro tier. Zapier continues to improve. There's a new player on our radar, Integromat. In this episode, Rose and David break down the current state of cloud automation.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[PDFpen (Sponsor)|PDFpen, from Smile]] - The ultimate tool for editing PDFs and go paperless.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[Intrazone (Sponsor)|The Intrazone by Microsoft SharePoint]] - a bi-weekly conversation and interview podcast by the SharePoint team.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 060 Discussion](https://talk.automators.fm/t/60-cloud-automation-check-in/9013)

# Sponsors
- ==PLEASE COMPLETE==

# Show Notes
- [Home | Automators](https://automators.fm/)
- [Automators Talk](https://talk.automators.fm/)
- [Chitty Chitty Bang Bang - Wikipedia](https://en.wikipedia.org/wiki/Chitty_Chitty_Bang_Bang)
- [My Applets - IFTTT](https://IFTTTtt.com/home)
- [IFTTT Pro](https://IFTTTtt.com/pro)
- [Zapier | The easiest way to automate your work](https://zapier.com/)
- [Integromat - The glue of the internet](https://www.integromat.com/en/)
- [Automators #10: Using Zapier Web Automation - Relay FM](https://www.relay.fm/automators/10)
- [GitHub - huginn/huginn: Create agents that monitor and act on your behalf. Your agents are standing by!](https://github.com/huginn/huginn)
- [FYRTUR Blackout roller blind, wireless, battery operated gray, 32x76 ¾" - IKEA](https://www.ikea.com/us/en/p/fyrtur-blackout-roller-blind-wireless-battery-operated-gray-70417463/)
- [Drafts 20 Released - Cross-linking Drafts + Typewriter Scrolling - News & Updates - Drafts Community](https://forums.getdrafts.com/t/drafts-20-released-cross-linking-drafts-typewriter-scrolling/7455)
- [Examples: Cross-Linking | Drafts Action Directory](https://actions.getdrafts.com/g/18q)

# Transcription
  
| Time Index | Transcription                                                                                                |
| :--------- | :----------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks, and this is The Automators, where we talk about making your                         |
| 00:06      | technology do your bidding for you.                                                                          |
| 00:09      | I'm joined by my fellow co-host today, Rosemary Orchard.                                                      |
| 00:12      | How are you, Rosemary?                                                                                       |
| 00:13      | Oh, David, I'm surrounded by IKEA boxes.                                                                     |
| 00:16      | I may have got a little home automation crazy recently.                                                      |
| 00:19      | You promised to pull me back from the edge, and let's just say that I feel like I may                        |
| 00:23      | have been being tempted because I keep hearing about things that you've done.                                |
| 00:27      | And now I have lots and lots of home automation things.                                                      |
| 00:30      | Oh, yeah.                                                                                                    |
| 00:31      | You're just getting, just so you know, Rosemary keeps texting me pictures of products shipping               |
| 00:36      | into her house to do her home automation.                                                                    |
| 00:39      | So I'm really curious.                                                                                       |
| 00:41      | Like I said, I want to hear a home automation by somebody who doesn't have other humans                      |
| 00:48      | in their house because that other humans, that's the problem.                                                |
| 00:52      | If you're a nerd.                                                                                            |
| 00:53      | I would just say that it was only six window and door sensors and two temperature sensors                    |
| 00:57      | and a hub for them that arrived this morning.                                                                |
| 00:59      | That's all.                                                                                                  |
| 01:00      | Yeah.                                                                                                        |
| 01:01      | It looked like a very large pile in the photo that I sent you, David, and I'll see if I                      |
| 01:06      | can find a way to upload this photo for the show notes.                                                      |
| 01:09      | I've got some Aqara things.                                                                                |
| 01:11      | Yeah.                                                                                                        |
| 01:12      | I'll get it in the show notes.                                                                               |
| 01:13      | So I have a way.                                                                                             |
| 01:14      | We'll put it in the show notes.                                                                              |
| 01:15      | But also, you're going to IKEA to buy more remote control blinds, and we have a future                       |
| 01:21      | show.                                                                                                        |
| 01:22      | And we have a future show where we're going to take apart Rose's home automation.                            |
| 01:26      | And well, hopefully not literally.                                                                           |
| 01:28      | I'd like it to still work afterwards.                                                                        |
| 01:29      | Yeah.                                                                                                        |
| 01:30      | I'm looking forward though to hearing all the stuff you did.                                                 |
| 01:34      | Yes.                                                                                                         |
| 01:35      | But anyway, that's not why we're here today.                                                                 |
| 01:36      | I'm looking forward to having a finished place.                                                              |
| 01:38      | I'm temporarily back in a wardrobe for a recording studio, so this should be the last episode                |
| 01:44      | here and after this, the office should be finished, but we'll see.                                           |
| 01:46      | I have this picture in my head that you like hit the alarm clock and then like an egg just                   |
| 01:51      | like wobbles out of the refrigerator onto a frying pan, and you know, the whole thing                        |
| 01:56      | just happens before you get out of bed.                                                                      |
| 01:59      | Look just because Chitty Chitty Bang Bang was one of my favourite films growing up does                       |
| 02:02      | not mean that I'm recreating the breakfast scene.                                                            |
| 02:04      | That was your favourite movie?                                                                                |
| 02:05      | Yes.                                                                                                         |
| 02:06      | Okay.                                                                                                        |
| 02:07      | One of them.                                                                                                 |
| 02:08      | Yeah.                                                                                                        |
| 02:09      | That and the sound of music.                                                                                 |
| 02:10      | I don't know why.                                                                                            |
| 02:11      | I was shown Chitty Chitty Bang Bang at a young age, and I was too young to watch it.                         |
| 02:17      | And that was my...                                                                                           |
| 02:18      | The child catcher was terrifying.                                                                            |
| 02:19      | I will give you that.                                                                                        |
| 02:20      | He could smell children, Rose.                                                                               |
| 02:21      | He could smell children.                                                                                     |
| 02:23      | I was too little to scare the...                                                                             |
| 02:25      | You know what?                                                                                               |
| 02:26      | Oh yeah.                                                                                                     |
| 02:27      | Yeah.                                                                                                        |
| 02:28      | It was funny because I totally forgot about it, and then years and years later, I'm a                        |
| 02:30      | dad and I walk into the room and my kids are watching Chitty Chitty Bang Bang.                               |
| 02:36      | And like a part of me just like clenched, you know, it's just like, yeah, that was the                       |
| 02:42      | movie as I was a kid that scared me.                                                                         |
| 02:44      | I mean, I can see why it scared you.                                                                         |
| 02:46      | I didn't see it until I was a bit older, and so, yeah, it was fine.                                          |
| 02:49      | But it was one of my favourite things because they have this automated breakfast, and I                       |
| 02:53      | guess that's why we now have a podcast called Automators.                                                    |
| 02:56      | It's like one of my earliest memories.                                                                       |
| 02:58      | It's vivid.                                                                                                  |
| 02:59      | I think I was like three or something, but I had an uncle who was in a wheelchair and                        |
| 03:03      | I remember literally hiding under his wheelchair because that guy could smell children.                      |
| 03:08      | Anyway, enough of my therapy session.                                                                        |
| 03:12      | It's time to talk about web automation.                                                                      |
| 03:15      | We haven't gone back to the subject for a while and there have been some developments.                       |
| 03:19      | Oh, yeah.                                                                                                    |
| 03:20      | Yeah.                                                                                                        |
| 03:21      | I mean, to start with, we haven't covered Zapier for more than 40 episodes.                                  |
| 03:25      | We're at episode 60, David.                                                                                  |
| 03:27      | We made it.                                                                                                  |
| 03:28      | You know, only another 40 to 100, so we can, yeah, we can make that, I think, we've got                      |
| 03:35      | some fun stuff in the works.                                                                                 |
| 03:37      | But web automation is one of those things that constantly changes just because new services                  |
| 03:42      | pop up and new people add new things to new services and people come up with cool ways                       |
| 03:46      | of doing things.                                                                                             |
| 03:48      | And so everything is constantly evolving.                                                                    |
| 03:51      | And one of the biggest changes that happened recently is, is if this and that got a pro                      |
| 03:55      | version.                                                                                                     |
| 03:56      | Yeah.                                                                                                        |
| 03:57      | Yeah.                                                                                                        |
| 03:58      | I mean, for years, I think if you go back and listen to Mac Power users like six or seven                    |
| 04:01      | years ago and if this and that was new, the one thing I said was, this is great, but it's                    |
| 04:08      | just if this then that.                                                                                      |
| 04:10      | I mean, there's one condition and one action.                                                                |
| 04:13      | There's nothing further you can do with it.                                                                  |
| 04:15      | And I always felt like, well, you should be able to say if this then that and that and                       |
| 04:19      | that, you know, and I think even at the time I said, you know, make it a pay service and                     |
| 04:25      | you know, now I got my wish.                                                                                 |
| 04:26      | So they, they have a system now where you can make, become a subscriber and you get an                       |
| 04:33      | unlimited number of recipes, I believe, and, and then you have the ability to add conditions                 |
| 04:39      | to your triggers, but also add additional actions.                                                           |
| 04:42      | Yeah.                                                                                                        |
| 04:43      | And it's a little controversial.                                                                             |
| 04:45      | Yeah.                                                                                                        |
| 04:46      | I've seen a lot of people understandably upset about this because they're getting messages                   |
| 04:49      | that their uploads are going to be turned off.                                                               |
| 04:52      | The ones that they've created beyond the three that they're allowed to create, which is absolutely           |
| 04:57      | a shame.                                                                                                     |
| 04:58      | I kind of wish that they'd handled that differently, but I am looking forward to seeing how other            |
| 05:02      | people expand on what they can do with the service because I have found that if this                         |
| 05:07      | and that is pretty much the only way to integrate with certain things, like my Neato, a robot                 |
| 05:12      | vacuum that I had in Austria, I left it in Austria, I had the wrong plug and I decided                       |
| 05:17      | that it was going to be time to get something new over here, brand new vacuum, brand new                     |
| 05:20      | place.                                                                                                       |
| 05:21      | And also, you know, shipping things across continents seems like a bad idea when, you                        |
| 05:25      | know, you've got a limited amount of space available.                                                        |
| 05:28      | So that integrated really well.                                                                              |
| 05:29      | My Logitech Pop buttons for a long time, the only way that I could add anything to my                        |
| 05:34      | Logitech Pop buttons was through if this and that.                                                           |
| 05:37      | So if I wanted to turn off anything beyond what it natively integrated with, which were                      |
| 05:41      | things like my Hue lights, then I needed to use if this and that.                                            |
| 05:45      | So I had it set up.                                                                                          |
| 05:46      | If I press the button by my front door, then it would integrate with the Hue and the Sonos                   |
| 05:51      | directly and pause the Sonos and turn off the Hue lights.                                                    |
| 05:54      | But if I wanted it to run my robot vacuum, then I had to do that through if this and                         |
| 05:58      | that, but I might just set that up.                                                                          |
| 06:00      | And that was great.                                                                                          |
| 06:01      | However, my Logitech Pop buttons now integrate with [[HomeKit]].                                                 |
| 06:05      | So I am debating whether or not I want to go down the if this and that route or the                          |
| 06:09      | [[HomeKit]] route.                                                                                               |
| 06:10      | And I'm probably going to stick with the [[HomeKit]] route if I'm being completely honest.                       |
| 06:13      | Yeah.                                                                                                        |
| 06:14      | I think in general, when you can keep automation local, you're better.                                       |
| 06:19      | I mean, who wants to rely on the internet for their automation?                                              |
| 06:24      | And the thing that if this than that, the first thing problem they really solved.                            |
| 06:28      | And I think they did it.                                                                                     |
| 06:30      | I think they may have been the first one out of the gate to do this was to take different                    |
| 06:34      | technologies, different companies and allow you to combine them, you know, and like use                      |
| 06:39      | a trigger from your Wemo to fire something off with your Hue lights.                                        |
| 06:43      | And that was that was really a valuable service because nobody else could do it.                             |
| 06:48      | But in the intervening years, a lot of these [[HomeKit]] manufacturers have gotten in the game                   |
| 06:54      | where, you know, they use the glue that is [[HomeKit\|Apple HomeKit]] or Google's [[HomeKit]] version                         |
| 07:00      | of [[HomeKit]], which name escapes me at the moment, but, you know, these different platform binners             |
| 07:04      | have their own kind of integrated systems they're trying to put together.                                    |
| 07:09      | There is, I feel like, still space for if this than that though, because there's still                       |
| 07:15      | some home automation stuff because it's just, I mean, looking through the if this than that                  |
| 07:20      | list of service providers, it's just like every, you know, all home automation thing                         |
| 07:25      | you've ever thought of is seems like it's in there.                                                          |
| 07:28      | But also, I feel like it's very good at like grabbing one thing from the internet and using                  |
| 07:34      | it at some other point in the internet.                                                                      |
| 07:37      | And they also have done a good job of app integration for people on Apple platform.                          |
| 07:41      | So, you know, I don't know what the deal they made with Apple was, but they've got access                    |
| 07:47      | to some data from your iCloud stuff.                                                                         |
| 07:50      | One of my personal favourite integrations with if this than that is day one.                                  |
| 07:54      | I'm a big day one journaler, and I've got a couple day one things going on.                                  |
| 08:01      | One of them is if I have, if I favourite a tweet, then it gets saved to my day one library                    |
| 08:08      | through if this than that.                                                                                   |
| 08:09      | And if I publish a blog post at MacSparky, it gets saved to day one in a separate, you                      |
| 08:14      | know, diary in day one.                                                                                      |
| 08:16      | So there's a couple of things I have going that I just don't think I could do in the                         |
| 08:20      | other way.                                                                                                   |
| 08:22      | So just to kind of back up a few steps, though, what they've done now used to be that you                    |
| 08:26      | could make up as many of these integrations as you wanted, but they were limited in scope.                   |
| 08:30      | You know, you couldn't have multiple, multiple dimensions to them.                                           |
| 08:35      | What they have now is the standard plan, which is free.                                                      |
| 08:38      | And you can use as many applets that you get from other people, like if you go to the website                |
| 08:43      | and just turn somebody else's on, and you can make up to three of your own.                                  |
| 08:47      | And that's what has a lot of folks upset because a lot of people have a lot more than three.                 |
| 08:51      | And they're like, well, if I want to keep doing them now, I have to pay you.                                 |
| 08:55      | Now as we publish this, they are doing a set your own price promotion.                                       |
| 09:02      | I have a feeling that this may end the day before this podcast release is David.                             |
| 09:07      | Oh, really?                                                                                                  |
| 09:08      | Yeah.                                                                                                        |
| 09:09      | It's hard to know.                                                                                           |
| 09:10      | At one point, they said it was going to be through September, but we're recording this                       |
| 09:14      | in October and it's still up.                                                                                |
| 09:16      | So have you heard something?                                                                                 |
| 09:18      | I believe I heard that the set your own price for as long as they say is ending on October                   |
| 09:25      | 7th, and this podcast release is October 8th.                                                                |
| 09:28      | That's sad.                                                                                                  |
| 09:29      | All right.                                                                                                   |
| 09:30      | Well, I will do the blog post at MacSparky.                                                                 |
| 09:33      | And so if you guys follow MacSparky, then you will have benefited from that.                                |
| 09:38      | But I do think that, and then it's unclear what the price will be.                                           |
| 09:43      | I've seen reference to $9.99, but I don't know that that's the final price.                                  |
| 09:48      | I don't know.                                                                                                |
| 09:49      | So the current official monthly price after the special offer ends is $9.99 a month.                         |
| 09:54      | But if you did set it before the special offer ended, then it should be set to that price                    |
| 09:59      | forever.                                                                                                     |
| 10:00      | Now, David, as a lawyer, I'm sure you can 100% tell us that forever doesn't necessarily                      |
| 10:05      | mean forever or never and ever.                                                                              |
| 10:06      | It means until they change their mind because it's somewhere in the small print that they                    |
| 10:09      | can do that.                                                                                                 |
| 10:10      | I mean, half the Internet's already mad at them for doing this.                                              |
| 10:13      | So I think if they change the set your own price, I think they get the other half of                         |
| 10:17      | the internet mad at them too.                                                                                |
| 10:18      | I'm not sure that they do that.                                                                              |
| 10:20      | Probably.                                                                                                    |
| 10:21      | Yes.                                                                                                         |
| 10:22      | So theoretically, they've set it for, if you set your price, then it's set forever.                          |
| 10:28      | And I have locked in a lower price just because I'm curious to see what comes and I'm hopefully              |
| 10:33      | going to be able to increase how much money I pay them later.                                                |
| 10:37      | But at the moment, I'm not 100% sure what other things I can do with this beyond what                        |
| 10:43      | I'm already doing.                                                                                           |
| 10:44      | And most of my, if this, then that's applets, I believe they're called, are just very simple                 |
| 10:52      | standard as they were before Pro became a thing when this happens, do that.                                  |
| 10:57      | So I've got a lot of day one integrations just like you, David, where I'm saying, I've                       |
| 11:03      | set up an integration with Tripit.                                                                           |
| 11:05      | Now Tripit doesn't have this and that support.                                                               |
| 11:08      | But what I've done is I've subscribed to my Tripit calendar in Google calendar.                              |
| 11:12      | And when a new event is added to that calendar, then it logs it on that day as you, this,                    |
| 11:19      | this travel is booked.                                                                                       |
| 11:21      | And then when it actually happens, then it starts a new diary entry about half an hour                       |
| 11:26      | before, which is enough time if I'm flying somewhere that the entry will be in my day                        |
| 11:30      | one, and then I can save pictures to that on the plane or on the train or wherever I                         |
| 11:36      | am.                                                                                                          |
| 11:37      | So that I actually have an entry associated with each thing and I can take photos and                        |
| 11:40      | just put them straight in the entry, which is quite nice.                                                    |
| 11:43      | Yeah.                                                                                                        |
| 11:44      | But neither one of us are taking full advantage of these new features because they're, they're               |
| 11:48      | brand new.                                                                                                   |
| 11:49      | And honestly, we just need time to kind of integrate them.                                                   |
| 11:51      | But I spent time playing with them to get an idea how they work.                                             |
| 11:55      | And so the, the way you set it up is it's the traditional, if this the net setup, it's                       |
| 12:01      | like, if I unlock the front door and turn the lights on, but then you can add intervening                    |
| 12:08      | qualifying steps in, into the trigger.                                                                       |
| 12:10      | Like if I unlock the front door when it's dark outside and the, the sample I was working                     |
| 12:17      | with, I was using the dark skies to see, well, dark skies knows if it's dark outside.                        |
| 12:23      | So I'll use that part of it, this and that.                                                                  |
| 12:26      | So if I unlock the door and it's dark outside, then turn the lights on.                                      |
| 12:30      | And they even have a JavaScript filter you can run, which you, it looks like you almost                      |
| 12:35      | have to, in order to kind of put logic between those two pieces, but you can write JavaScript                |
| 12:42      | into this online automation.                                                                                 |
| 12:46      | And so at the qualifying level, one of the things that I thought was interesting was,                        |
| 12:51      | even if I use this JavaScript to write in a pause, you know, something I've always wanted                    |
| 12:55      | in these cloud services was the ability to pause.                                                            |
| 12:58      | And even with, you know, the home kit stuff.                                                                 |
| 13:01      | So like, let's say if I unlock the front door, wait five minutes.                                            |
| 13:06      | And if the door is not locked again, then lock the door, but I don't want it to immediately                  |
| 13:12      | lock the door.                                                                                               |
| 13:13      | I need enough time to get my groceries in or whatever.                                                       |
| 13:15      | But if I forget to lock the door, then go ahead and lock it for me.                                          |
| 13:18      | And I think I could do that with JavaScript.                                                                 |
| 13:22      | And if this than that, like you, I have bought a subscription.                                               |
| 13:24      | I have not pledged $10 a month.                                                                              |
| 13:27      | I've pledged less.                                                                                           |
| 13:29      | I did $5 a month, but the, but I think there may be a space in my heart for this once I                      |
| 13:35      | get going on it.                                                                                             |
| 13:36      | And, but I just, I've got to take the time to write the scripts.                                             |
| 13:40      | And then, you know, the, the back end of it, in addition to having these qualifications                      |
| 13:44      | on these online triggers, you can also say, in addition to turning on the lights, you                        |
| 13:48      | can also say, you know, do any other automation that you can do through if this than that,                   |
| 13:52      | like lock the door or turn on another light or whatever it is you've got hooked up with                      |
| 13:58      | if this than that.                                                                                           |
| 13:59      | So this is what I was looking for.                                                                           |
| 14:02      | Um, I, it's not clear to me exactly how necessary the JavaScript filtering is.                               |
| 14:10      | You know, um, if it is truly necessary for any qualification to work, it's having to                         |
| 14:17      | stop and write a JavaScript, seem to me like a huge barrier for a lot of people.                             |
| 14:20      | I mean, I can do it, but it's just going to, it's like, do I want to put the time into                       |
| 14:24      | it?                                                                                                          |
| 14:25      | Yeah, definitely.                                                                                            |
| 14:26      | And, um, I, uh, so that, that's interesting to me.                                                           |
| 14:29      | I want to see how that all plays out, but you know, it is kind of what we asked for.                         |
| 14:35      | Now, in terms of the people that are upset about the price, I get that, um, you know,                        |
| 14:40      | we were talking before we started recording, not only do the people that use it have to                      |
| 14:43      | pay now, but also the app developers have a fee, you know, to get involved with this                         |
| 14:48      | as well.                                                                                                     |
| 14:49      | So, um, but I also get from the flip side that companies need to stay in business, you                       |
| 14:55      | know, and I honestly, there must have been a way they were doing it, but I don't know                        |
| 14:59      | how they monetised all these years because I've never paid if this than that a dime until                    |
| 15:06      | few weeks ago.                                                                                               |
| 15:07      | You know, so I'm not really sure how they stay in business all that time.                                    |
| 15:11      | So, you know, it's, uh, you know, make your own decisions, you know, if you just think                       |
| 15:16      | it's ridiculous, don't want to pay it, then don't pay it, but, um, all the cloud services                    |
| 15:21      | we're going to talk about today have some kind of monthly fee associated with them.                          |
| 15:26      | And I do think that, you know, finding a way for them to monetise that stuff makes sense,                    |
| 15:31      | whereas not monetising means that they're going to, what, sell data or, you know, what,                      |
| 15:36      | how are they, what are they going to do to keep the lights on?                                               |
| 15:38      | And I'm not sure I'm comfortable with those options either.                                                  |
| 15:40      | No, me either.                                                                                               |
| 15:42      | And one of the things that, if this than that definitely does that other services don't                      |
| 15:46      | do is, um, you know, there, there are so many things on here that you just don't find elsewhere.             |
| 15:52      | So Alexa is not something I found on Zapier or [[Make\|Integromat]] or the other options.                              |
| 15:57      | I've just, I've been scrolling through, I've discovered Tesco, a supermarket here in the                     |
| 16:01      | UK is on, if this than that, um, and it looks like, uh, you can check for price drops and                    |
| 16:06      | you can add stuff to your basket and things like that, which I'm thinking has a lot of                       |
| 16:10      | potential.                                                                                                   |
| 16:11      | Um, what I really wish is that my washer and dryer were smart because there are smart washers                |
| 16:17      | and dryers on here.                                                                                          |
| 16:18      | And I would love a push notification when any of them finish, um, but, uh, I'm not able                      |
| 16:23      | to do that right now.                                                                                        |
| 16:24      | So I've ordered some sensors that might work for that, um, we'll see.                                        |
| 16:28      | Um, but there, there's, you know, all of these things, this is, you know, where if this than                 |
| 16:32      | that, you know, really is extremely strong because they have, you know, things like when                     |
| 16:38      | your Logitech Harmony scene starts and Logitech Harmony doesn't integrate with home kit.                     |
| 16:43      | So I can't, you know, directly do that.                                                                      |
| 16:45      | I can work around it with Homebridge or I can work around it with if this than that.                        |
| 16:49      | Um, and the harmony stuff is going through the harmony system anyway.                                        |
| 16:53      | So I'm, I'm definitely going to be, uh, playing with the, the, uh, harmony things here to                    |
| 16:59      | get that working.                                                                                            |
| 17:00      | But my harmony stuff is currently in a box because my place is being redecorated.                            |
| 17:04      | So everything was out of boxes.                                                                              |
| 17:05      | No, it's back in boxes.                                                                                      |
| 17:07      | Unfortunately.                                                                                               |
| 17:08      | Um, another one that's on if this than that, that I haven't seen elsewhere, although it                      |
| 17:12      | may be on Zapier, I need to check is Instapaper, you know, and saving articles, Instapaper                |
| 17:18      | or starring an article, Instapaper can trigger off an automation.                                            |
| 17:22      | And that's the kind of stuff I think if this than that, so good for, um, and the negative                    |
| 17:25      | column, you know, because I've been playing with it the last few weeks prepping for today's                  |
| 17:29      | show.                                                                                                        |
| 17:30      | Um, I was sad to see base camp is not a participant in this than that because I do a lot of stuff            |
| 17:35      | in base camp and it'd be nice to, to add those automation triggers through if this than that.                |
| 17:39      | Yeah.                                                                                                        |
| 17:40      | Um, and toggle surprisingly is not, and I thought toggle played with everybody.                              |
| 17:44      | So yeah.                                                                                                     |
| 17:45      | You too.                                                                                                     |
| 17:46      | Um, uh, so, I mean, there, it's just, and that's one of the weird things about this whole                    |
| 17:50      | cloud automation thing is that it seems like each different person, each different company                   |
| 17:57      | that's offering some sort of cloud automation glue has different companies they're working                   |
| 18:02      | with.                                                                                                        |
| 18:03      | There's not one that has them all.                                                                           |
| 18:05      | No, no, um, which is a shame, but at the same time, this is, you know, how they define their                 |
| 18:10      | unique selling point.                                                                                        |
| 18:11      | Um, you know, if you want to send your Fitbit wait automatically to iOS health, then if this                 |
| 18:17      | than that is the way to do it because it integrates with both Fitbit and iOS health, it can only             |
| 18:22      | put things in iOS health to be clear, it can't, you know, retrieve data, um, and it can't                    |
| 18:27      | be triggered based on data that's added to the health app.                                                   |
| 18:30      | So you have to, you have to go from Fitbit or whatever service to the health app, but                        |
| 18:34      | that's doable.                                                                                               |
| 18:36      | And that's the only system I know of that doesn't, you know, require something running,                      |
| 18:40      | you know, a one on your device manually by you to do that.                                                   |
| 18:44      | And indeed that's, I have that automation.                                                                   |
| 18:46      | I have an ancient withing scale and, um, and I have to look into this.                                       |
| 18:52      | I think that might be the thing slowing down in my network, but I'm not sure.                                |
| 18:56      | But yeah.                                                                                                    |
| 18:57      | But anyway, I have this ancient withing scale and I haven't, if this than that formula or                    |
| 19:00      | recipe I put together years ago, and it just saves the weight to my health app and I don't                   |
| 19:05      | have to bother with it, you know, automatically, you know, entering it in any way.                           |
| 19:09      | Yeah.                                                                                                        |
| 19:10      | I just bought a new scale, 30 pounds, uh, eufy U F Y by the people who make the Anker                        |
| 19:15      | stuff.                                                                                                       |
| 19:16      | Um, and it integrates with iOS health directly.                                                              |
| 19:18      | So really?                                                                                                   |
| 19:19      | Yeah.                                                                                                        |
| 19:20      | eufy, you mean?                                                                                               |
| 19:21      | Yeah.                                                                                                        |
| 19:22      | Yeah.                                                                                                        |
| 19:23      | eufy.                                                                                                         |
| 19:24      | Yeah.                                                                                                        |
| 19:25      | That's great.                                                                                                |
| 19:26      | eufy on their security cameras.                                                                               |
| 19:28      | Oh yeah.                                                                                                     |
| 19:29      | I'm very tempted to do the security cameras.                                                                 |
| 19:31      | They're, they're very reasonable too.                                                                        |
| 19:33      | I mean, they're not that expensive.                                                                          |
| 19:34      | Yeah.                                                                                                        |
| 19:35      | And they're on sale a moment as well.                                                                        |
| 19:36      | And with prime day coming, I suspect they're going to see further price drops.                               |
| 19:39      | I just don't know if I've got somewhere that I can put cameras that won't invade the privacy                 |
| 19:43      | of other people because I live in a shared building.                                                         |
| 19:45      | Um, I've, I've got an apartment, um, and I would have to be careful about where I place                      |
| 19:49      | the cameras so that I don't record other people coming and going to their apartments,                        |
| 19:53      | which feels like a massive invasion of privacy.                                                              |
| 19:57      | Just get one point in at your front door.                                                                    |
| 19:59      | Yeah.                                                                                                        |
| 20:00      | I just need to figure out where I can put it to point it at my front door without it                         |
| 20:03      | covering somebody else's front door.                                                                         |
| 20:04      | Okay.                                                                                                        |
| 20:05      | So yeah, I'm considering options.                                                                            |
| 20:08      | I've told to the other people in the building as well before I do anything.                                  |
| 20:11      | I don't want to make anybody upset.                                                                          |
| 20:12      | All right.                                                                                                   |
| 20:13      | eufy scale.                                                                                                   |
| 20:14      | Well, there we go, Rose.                                                                                     |
| 20:15      | Now you're going to cost me money.                                                                           |
| 20:18      | They're surprisingly cheap.                                                                                  |
| 20:19      | And I have to say it works really nicely and, you know, it seems to work well.                               |
| 20:24      | So it was well rated on wire cutter.                                                                         |
| 20:26      | Well, I think this, the wifi in this scale is, it's like, I've owned this thing, I don't                     |
| 20:32      | know, seven, eight years now.                                                                                |
| 20:34      | I mean, I think it, I have to research this, but as I understand it, when you've got something               |
| 20:41      | that's slow on your network, it's, it can really slow down other things as well.                             |
| 20:45      | Yeah.                                                                                                        |
| 20:46      | Yeah.                                                                                                        |
| 20:47      | This episode of Automated is brought to you by PDFpen from our friends at Smile.                             |
| 20:52      | You can use powerful PDF editing wherever you are with PDFpen, the ultimate editing                          |
| 20:57      | tool for your Mac, iPad or iPhone.                                                                           |
| 21:00      | Whether you're on the road or at your desk, need advanced editing features or just want                      |
| 21:04      | to sign an email back a contract, PDFpen has got you covered.                                                |
| 21:08      | Have you ever wanted to add in coloured lined or blank graph pages to a document?                             |
| 21:12      | Now in PDFpen Pro, you can choose from various paper styles for more effective note taking                   |
| 21:17      | organisation and customisation.                                                                              |
| 21:19      | So for all of you creatives, this one is for you.                                                            |
| 21:22      | PDFpen 12 now includes a call out tool to enable collaboration through comments, notes                       |
| 21:27      | and other annotations, advanced PDF compression, the ability to optimise PDF sizing and all                  |
| 21:33      | of these come as standard in the software.                                                                   |
| 21:36      | PDFpen, PDFpen Pro and PDFpen for iPad and iPhone all work together for seamless editing                     |
| 21:42      | across your devices when you use the [[Dropbox]] or iCloud.                                                      |
| 21:46      | I love using PDFpen, I had to fill out a form for my new apartment earlier today and it                      |
| 21:51      | just worked.                                                                                                 |
| 21:52      | I filled it up in PDFpen on my iPad, filled it out using my Apple Pencil and sent it back                    |
| 21:58      | after adding my signature from my template.                                                                  |
| 22:01      | Learn more about PDFpen and PDFpen Pro at Smile Software.com/podcast.                                   |
| 22:06      | If you do any work with PDFs, you need PDFpen, go to Smile Software.com/podcast.                        |
| 22:12      | Thanks to PDFpen for their support of this show and Relay FM.                                               |
| 22:18      | So Rose, there's another service that we have not discussed on the Automator's Podcast.                      |
| 22:23      | It's [[Make\|Integromat]] and I know this is one that you've been spending a lot of time with.                         |
| 22:29      | Yeah, so I was familiar with [[Make\|Integromat]] for a while and I was using their free plan and                      |
| 22:36      | then I ran out of space on Zapier.                                                                           |
| 22:38      | So Zapier, for $20 a month, you can have 20 zaps and I ran out of space and I wasn't                         |
| 22:45      | yet at the stage where I felt that it was worth upgrading to the next level plan on                          |
| 22:49      | Zapier and so I decided that I would go and have a look at [[Make\|Integromat]] and see whether                        |
| 22:54      | or not I could cover my basis for $9 a month there.                                                          |
| 22:57      | So that's half the price of a $20 a month Zapier plan, less than.                                            |
| 23:02      | And they've got loads of services.                                                                           |
| 23:04      | So unlike if this and that, they do have Basecamp, they've got PushCut, they've got                          |
| 23:07      | Toggle.                                                                                                      |
| 23:08      | But what I really love about [[Make\|Integromat]] is how visual it is.                                                 |
| 23:14      | So you have these little circles that represent the services and the actions that you're doing               |
| 23:18      | and you drag them out and you put them on this blank canvas and then you link them together                  |
| 23:23      | and you literally draw lines between them and then there's a magic wand told to automatically                |
| 23:28      | align everything if you want to all neat and tidy.                                                           |
| 23:31      | But it has branching on the base level plans and it feels to me like it works really well                    |
| 23:37      | really, really well.                                                                                         |
| 23:38      | It's 100% solid and I've just been doing so much with it that I just kind of wanted to                       |
| 23:46      | play with it.                                                                                                |
| 23:47      | I've been kind of using it more as a sandbox than Zapier, which has got a lot of things                      |
| 23:54      | in it that are very, you know, like this absolutely has to work 100% at the time, like getting               |
| 23:58      | the autonomy to show notes at the door.                                                                      |
| 24:00      | That's in Zapier, but it's actually triggered by [[Make\|Integromat]] because Zapier can only run on                   |
| 24:05      | something that is moves into a view in [[Airtable]] once and I wanted to be able to use things                   |
| 24:12      | multiple times.                                                                                              |
| 24:13      | So I'm having [[Make\|Integromat]] look at Zapier views every sort of quarter of an hour and send                      |
| 24:18      | each one of those items that it finds in that view over to a webhook on Zapier, which is                     |
| 24:24      | working really nicely for me.                                                                                |
| 24:26      | All right.                                                                                                   |
| 24:27      | So let's start with some simple [[Make\|Integromat]] automation.                                                       |
| 24:32      | I started playing with it as we prepped for the show, but I'm not in as deep as you are                      |
| 24:37      | yet, but I do agree with kind of the architectural look of things and I like that you put them               |
| 24:44      | on the screen and I think so often these web services, the interfaces is really difficult                    |
| 24:49      | to get when you're in a browser trying to connect pipes between different web services.                      |
| 24:57      | And one thing that immediately stood out for me is this is definitely more of a web service                  |
| 25:00      | connector than a home automation thing.                                                                      |
| 25:03      | Yes.                                                                                                         |
| 25:04      | Yeah.                                                                                                        |
| 25:05      | But there is a lot here.                                                                                     |
| 25:07      | So give me a simple one that you use.                                                                        |
| 25:10      | Okay.                                                                                                        |
| 25:11      | A simple one, well, I've already mentioned the Automator Show Notes one that literally                       |
| 25:16      | is looking at a specific view in [[Airtable]].                                                                   |
| 25:21      | So I started with the [[Airtable]] action and it's [[Airtable]] search records action and it                         |
| 25:27      | runs every 15 minutes, so there's a little clock on the left-hand side of the [[Airtable]]                       |
| 25:33      | action for search records, which I could set to once every day, certain days of the week,                    |
| 25:40      | certain days of the month, specific days, or at regular intervals, and then I input                          |
| 25:44      | a number of minutes and it has to be higher than five and I've said that to every 15 minutes                 |
| 25:51      | of the moment.                                                                                               |
| 25:52      | I should probably change that to every couple of hours actually, David, because we only                      |
| 25:54      | have one episode coming out every two weeks and each time it runs, it uses an action.                        |
| 26:00      | And then I have it, and then I've just set this as, so I could have done this in a couple                    |
| 26:07      | of ways.                                                                                                     |
| 26:08      | I could just get all of the records in that view and then use the iterator action, which                     |
| 26:12      | is like a repeat with each from shortcuts, to go through each of them and send that                          |
| 26:16      | to a webhook.                                                                                                |
| 26:17      | Instead, I just said max records one.                                                                        |
| 26:19      | So it doesn't matter if there's 100 records that need show notes creating, it will only                      |
| 26:24      | grab one of them.                                                                                            |
| 26:26      | And then it will make a HTTP request for me.                                                                 |
| 26:30      | And then that HTTP request is sending that over to Zapier and it just tells Zapier, hey,                     |
| 26:35      | here's the ID of the podcast episode that we're working on.                                                  |
| 26:40      | Here's the person responsible and here's the co-host because Zapier recently lost the                        |
| 26:44      | ability to look up foreign keys in its fetching record data, which was frustrating me.                       |
| 26:50      | So I've switched that over to [[Make\|Integromat]].                                                                    |
| 26:54      | Now.                                                                                                         |
| 26:55      | And so that's two actions.                                                                                   |
| 26:56      | It just searches records in [[Airtable]] and then it makes a HTTP request over to Zapier.                        |
| 27:02      | And that's working really nicely for me.                                                                     |
| 27:04      | Yeah.                                                                                                        |
| 27:05      | I've been playing with the toggle support in it because I've lately been doing a thing                       |
| 27:11      | where I use toggle.                                                                                          |
| 27:14      | I've been doing a time tracking experiment on myself for the last month.                                     |
| 27:17      | I kind of turn these off and on once in a while just to kind of get feedback.                                |
| 27:22      | But I've been doing it longer than I normally do.                                                            |
| 27:24      | And one of the things I do, and if you listen to the focused podcast, I talk on that show                    |
| 27:28      | about moving the needle.                                                                                     |
| 27:30      | I stopped one day and thought, well, what are the things I do that actually matter as                        |
| 27:35      | opposed to so many things I do that don't really matter at the end of the day?                               |
| 27:39      | And I call those like moving the needle things.                                                              |
| 27:41      | And working on a field guide is moving the needle, recording this podcast is moving the                      |
| 27:45      | needle.                                                                                                      |
| 27:46      | So I have various timers and I have just a single flag called moving the needle that                         |
| 27:51      | some timers have that attached to it and some don't.                                                         |
| 27:55      | So what I'd like to prepare, and I haven't finished it yet, but I'm working [[Make\|Integromat]]                      |
| 27:59      | to put together a toggle report.                                                                             |
| 28:03      | And you can send a toggle report like to Google Sheets or whatever.                                          |
| 28:08      | But I haven't figured out if I can filter on moving the needle yet, but I think I can.                       |
| 28:12      | And my goal with that is to send myself a regular report of how much time I'm spending                       |
| 28:18      | moving the needle as opposed to just time I'm tracking.                                                      |
| 28:22      | What I really like about the filtering [[Make\|Integromat]] is obviously you can filter inside                        |
| 28:27      | of the action.                                                                                               |
| 28:28      | So for example, my search records in [[Airtable]] Action, that's looking at a specific view,                     |
| 28:33      | which is already filtered for me.                                                                            |
| 28:35      | But the actual connection between two actions has a little spanner.                                          |
| 28:39      | And if you click on that, then you can actually set up a filter and you can go through loads                 |
| 28:43      | of conditions and you can say, oh, I want text that is equal to.                                             |
| 28:47      | So for example, if it's ID 100, then do something special as well, which is great.                           |
| 28:56      | And also being able to add branching, it's really nice just being able to say, oh, this                      |
| 29:01      | connects to this as well, please.                                                                            |
| 29:04      | And split things up and so on.                                                                               |
| 29:05      | And it looks pretty, it sounds really weird to have that as something that you like in                       |
| 29:12      | a service, an automation service.                                                                            |
| 29:14      | And I find if something looks good, then it really feels like they've made extra effort                      |
| 29:17      | there.                                                                                                       |
| 29:18      | Well, I absolutely agree with you that I feel like they've kind of nailed the user interface,                |
| 29:23      | which is not an easy thing to do with this type of service.                                                  |
| 29:27      | Yeah.                                                                                                        |
| 29:28      | The only thing I will say is this kind of tricky to navigate on an iPad on a touchscreen.                    |
| 29:32      | I don't have the magic keyboard yet, so I'm not sure if it's better with a mouse, especially                 |
| 29:37      | with the whole redecorating thing.                                                                           |
| 29:38      | I've, I actually wasn't able to use my iPad for a couple of days because I couldn't find                     |
| 29:42      | a charger for it.                                                                                            |
| 29:45      | So I've not been able to plug a mouse into my iPad.                                                          |
| 29:48      | I've not had a desk.                                                                                         |
| 29:49      | It's been a case of I'm sitting on the carpet balancing my iPad on my knees to use it.                       |
| 29:54      | So when I was playing with something [[Make\|Integromat]] the other day, I wasn't able to actually right              |
| 29:58      | click on one of the actions.                                                                                 |
| 30:01      | I don't know if you found that you can do better, David, with a mouse.                                       |
| 30:05      | I've only been, in my head, these are Mac apps, you know, I only work with this stuff                        |
| 30:10      | on the Mac.                                                                                                  |
| 30:11      | Yeah.                                                                                                        |
| 30:12      | But I recommend if you've got a Mac or Windows machine, then try and use it on that.                         |
| 30:18      | They do have an iOS app, but that is for integration with iOS things and also for sending you notifications. |
| 30:25      | So you can have [[Make\|Integromat]] send you a notification and you don't have to farm out to something              |
| 30:30      | like push bullet or push over or push cut, all of which you can absolutely use to send                       |
| 30:35      | yourself a notification.                                                                                     |
| 30:37      | But instead you can actually have it, you know, send it through its own app to you,                          |
| 30:43      | which is pretty nice.                                                                                        |
| 30:44      | Another thing that's funny is one of the connected services for Tegramat is if this                          |
| 30:48      | than that.                                                                                                   |
| 30:49      | Yes.                                                                                                         |
| 30:50      | So you can actually glue them together.                                                                      |
| 30:51      | Yeah.                                                                                                        |
| 30:52      | Yeah.                                                                                                        |
| 30:53      | Yeah.                                                                                                        |
| 30:54      | So I'm gluing Tegramat with Zapier via the webhooks, but you can also just directly                          |
| 30:59      | integrate with if this than that, which I love because all these services I find, you                        |
| 31:04      | know, I'm using all three of them.                                                                           |
| 31:06      | And there are several others out there that have been brought up in our forum, which I'm                     |
| 31:10      | intrigued by, but I've yet to explore and play with.                                                         |
| 31:13      | Yeah.                                                                                                        |
| 31:14      | It's like the Wild West right now for these services.                                                        |
| 31:17      | Some other integrations that are fun with [[Make\|Integromat]] is Microsoft Word templates, which                      |
| 31:22      | I'm assuming is using the Office 365 cloud templates.                                                        |
| 31:26      | Yeah.                                                                                                        |
| 31:27      | And then there's plenty of cloud file storage integration, OneDrive, [[Dropbox]], all the usual                  |
| 31:33      | suspects, you know.                                                                                          |
| 31:36      | There's a lot here [[Make\|Integromat]].                                                                              |
| 31:38      | Yeah.                                                                                                        |
| 31:39      | Yeah.                                                                                                        |
| 31:40      | One of the things that I really like is you can have a data store [[Make\|Integromat]].                               |
| 31:45      | So you, so for example, something could trigger, you know, your device could do something.                   |
| 31:52      | And then that causes data to go into [[Make\|Integromat]].                                                               |
| 31:55      | And then you use the data store feature.                                                                     |
| 31:58      | And then another [[Make\|Integromat]] automation can come along and pull that data out and use that                      |
| 32:05      | somewhere else, which means that say, for example, you are logging your weight.                              |
| 32:09      | I'm just going to use this as an example.                                                                    |
| 32:11      | It's not necessarily a great example, but every time you update your weight, you could                       |
| 32:14      | store that inside of [[Make\|Integromat]].                                                                               |
| 32:16      | And then when something else needs your weight, so say, for example, you're tracking a child's               |
| 32:21      | BMI or something, I'm not sure it's necessarily a good idea because it's not particularly                    |
| 32:24      | accurate, but let's stick with it.                                                                           |
| 32:27      | Every time you update their height, it can just pull the most recent weight because you've                   |
| 32:30      | overwritten that data in the data store.                                                                     |
| 32:31      | Yeah.                                                                                                        |
| 32:32      | And you can use this for all sorts of things.                                                                |
| 32:34      | You know, that's just the worst possible example that I thought of at the top of my head.                    |
| 32:39      | I've not really used this yet.                                                                               |
| 32:41      | I was playing with it, but in my case, all of the data is available directly somewhere                       |
| 32:45      | else where I can go and look it up.                                                                          |
| 32:47      | So for example, the screencast online stuff that I'm doing, I just integrate directly                        |
| 32:51      | to Podio because that is inside of [[Make\|Integromat]].                                                               |
| 32:55      | It's directly set up.                                                                                        |
| 32:56      | So instead of storing the data in [[Make\|Integromat]] and potentially having it be stale because                      |
| 33:02      | I turned off my automation or something, which has been known to happen, oops, I just go                     |
| 33:08      | and look it up directly.                                                                                     |
| 33:09      | Yeah.                                                                                                        |
| 33:10      | Like if we were putting together an automation to set up podcast planning, episode number                    |
| 33:15      | would be a good candidate for that where that's a number that you're not necessarily                         |
| 33:19      | going to find on the cloud, but it's something you want to use repeatedly on maybe a Google                  |
| 33:23      | document and a Google sheet and in an error table in different places.                                       |
| 33:29      | Yeah.                                                                                                        |
| 33:30      | All right, you've got some other [[Make\|Integromat]] automations you can share with us.                               |
| 33:34      | Yes, I do.                                                                                                   |
| 33:36      | So another one that I am using, it's a little bit more complex, hopefully not too complex                    |
| 33:42      | for people.                                                                                                  |
| 33:43      | I am using Podio.                                                                                            |
| 33:45      | So that's the screencast online backend is Don McAllister ship with us when he was                       |
| 33:49      | on and an iterator to go through and compose a string of tasks, which I then send to my                      |
| 33:59      | protocol automation server.                                                                                  |
| 34:01      | So every time I'm assigned a show to do over a screencast online, it automatically assigns                   |
| 34:07      | a series of tasks to me, but instead of copying these out and saving them in a draft somewhere               |
| 34:12      | in Taskpaper format and some other interesting things, which I could have done, then if somebody            |
| 34:18      | is screencast online updates the workflow and wants us to do things slightly differently,                    |
| 34:22      | I wouldn't be able to, I wouldn't necessarily know that without going and checking the website,              |
| 34:27      | without me being me, I want all of my tasks in OmniFocus.                                                    |
| 34:30      | So whenever I get tasks assigned to me, I use the iterator to go through all of the                          |
| 34:35      | tasks and I compose a string.                                                                                |
| 34:38      | And the string is a dash a space, the name of the task at due open brackets due date                         |
| 34:45      | close brackets.                                                                                              |
| 34:46      | And then on the next line, there's the description of the task and then on another line, there's             |
| 34:50      | a link.                                                                                                      |
| 34:51      | Now the description of the link are indented with tabs.                                                      |
| 34:54      | And for people who are there going, this kind of sounds familiar, this is Taskpaper format.                 |
| 34:59      | And then I send all of this over to my push cut automation server.                                           |
| 35:05      | That's the input.                                                                                            |
| 35:06      | And then it runs a shortcut for me that adds all of those tasks to OmniFocus, which is absolutely            |
| 35:12      | brilliant.                                                                                                   |
| 35:13      | And I love it because it means that I always get the list of tasks and I have the link                       |
| 35:16      | so that I can actually go, like I check it off in OmniFocus and I can click the link and                     |
| 35:19      | check it off in Podio as well.                                                                               |
| 35:21      | It's a shame that I'm using two tools, I should probably train myself to just rely on                        |
| 35:25      | Podio, but I'm so used to relying on everything being in one system that I prefer to check                   |
| 35:30      | things off twice at the moment.                                                                              |
| 35:32      | Yeah, just the general idea of using URL links to tie things together is just so useful.                     |
| 35:40      | We're going to talk later today and I am really digging this hook up on my Mac for exactly                   |
| 35:46      | that reason, just the ability to create a URL link to anything.                                              |
| 35:50      | And OmniFocus is a good place for that because you can create URL links to OmniFocus tasks                   |
| 35:56      | or projects or folders.                                                                                      |
| 35:58      | So you can, you really can glue things together across different apps.                                       |
| 36:03      | Yes.                                                                                                         |
| 36:04      | Yeah.                                                                                                        |
| 36:05      | And I love the fact that that just works.                                                                    |
| 36:07      | I actually have a friend who was lucky using hook and it ended up writing a little bash                      |
| 36:11      | script workflow that he uses with [[Alfred]] to get links to different files and so on on                        |
| 36:17      | his Mac so that he can just paste them in anywhere.                                                          |
| 36:20      | I'll have to see whether or not he's willing to share that with people and get it for you                    |
| 36:25      | if possible for the show notes because it just uses a file link.                                             |
| 36:30      | So if you right click on something in Finder, then you can copy a file link.                                 |
| 36:34      | You might need to press Option to do that, but then you can copy your file path as a                         |
| 36:41      | name.                                                                                                        |
| 36:42      | So that's all set up through [[Alfred]] and a little bit of bash scripting, if I remember                        |
| 36:48      | correctly.                                                                                                   |
| 36:49      | Yeah, take a look at that.                                                                                   |
| 36:51      | Because the advantage of that is if you're working with like cloud services, you don't                       |
| 36:56      | want any of files, you don't want to put on the internet, you can just create local links                    |
| 37:00      | to the files.                                                                                                |
| 37:01      | And the link can be on the cloud service because it's no good unless it's run on your computer.              |
| 37:07      | But it's like a nice way to use to have access to things without putting things necessarily                  |
| 37:14      | on the web.                                                                                                  |
| 37:17      | This episode of The Automators is brought to you by ExpressVPN, high speed, secure and                       |
| 37:22      | anonymous VPN services.                                                                                      |
| 37:24      | Get an extra three months free when you sign up over at expressvpn.com/automators.                     |
| 37:31      | There's a ton of VPN providers out there, you've probably heard of a couple of them                          |
| 37:35      | and some of you may have even used a VPN before.                                                             |
| 37:38      | But there's a reason I use ExpressVPN and that's why we have them as a sponsor.                              |
| 37:43      | They're really good.                                                                                         |
| 37:44      | Here's why.                                                                                                  |
| 37:45      | ExpressVPN doesn't log your data.                                                                            |
| 37:48      | Other VPNs make money by selling your data to ad companies.                                                  |
| 37:51      | ExpressVPN developed a technology called trusted server that makes it impossible for their                   |
| 37:56      | servers to log any of your information.                                                                      |
| 38:00      | Second is speed.                                                                                             |
| 38:01      | Many VPNs slow down your connection and make your device sluggish.                                           |
| 38:05      | I've been using ExpressVPN for years and while my Internets are blazing fast, so are my devices              |
| 38:12      | when I'm running ExpressVPN.                                                                                 |
| 38:14      | Even when I connect to servers thousands of miles away, I can still stream HD quality                        |
| 38:18      | videos with zero lag.                                                                                        |
| 38:21      | The last thing that really sets ExpressVPN apart from other VPNs is how easy it is to                        |
| 38:26      | use.                                                                                                         |
| 38:27      | Unlike other VPNs, you don't have to input or program anything.                                              |
| 38:30      | You just fire up the app and click one button to connect.                                                    |
| 38:33      | That's it.                                                                                                   |
| 38:34      | It's so easy that even your grandparents could use it.                                                       |
| 38:38      | It's not just me saying that, wired, the Verge, CNET, and other tech experts rate ExpressVPN                 |
| 38:43      | the number one VPN in the world.                                                                             |
| 38:46      | I've been using ExpressVPN like I said for years.                                                            |
| 38:49      | I just like having my data secure, particularly when I'm on Wi-Fi.                                           |
| 38:55      | We find ourselves connecting to strange Wi-Fi once in a while and it can be really scary                     |
| 38:59      | because you don't know if somebody's sniffing out the signal.                                                |
| 39:02      | I do client work on my devices and I just want to be safe.                                                   |
| 39:07      | I hit that button ExpressVPN and I feel absolutely secure and safe.                                          |
| 39:13      | Even in this time of COVID, I was at a friend's house.                                                       |
| 39:15      | We did a social distance to visit recently and I ended up having to do a little work                         |
| 39:20      | and I hooked up ExpressVPN and it just pushed one button and you're in business.                             |
| 39:26      | It's just so easy to use and it gives you peace of mind.                                                     |
| 39:31      | You don't have to think about it and it's just one button and you're in.                                     |
| 39:35      | Protect yourself with VPN that I use and trust.                                                              |
| 39:38      | Go to expressvpn.com/automators today and get an extra three months free on a one-year                 |
| 39:44      | package that's expressvpn.com/automators.                                                              |
| 39:50      | Go there now.                                                                                                |
| 39:51      | Check it out.                                                                                                |
| 39:52      | Visit expressvpn.com/automators to learn more and our thanks to ExpressVPN for their                   |
| 39:58      | support of the Automators and all of RelayFM.                                                                |
| 40:01      | Well, David, we can't really talk about all of these web automation services without talking                 |
| 40:07      | about Zapier.                                                                                                |
| 40:08      | Now, we did do a show on Zapier, didn't we?                                                                  |
| 40:10      | Episode 10, I believe it was, so that was a while ago, 50 episodes ago.                                      |
| 40:14      | Wow.                                                                                                         |
| 40:15      | We've been doing this for a while.                                                                           |
| 40:16      | I'm loving it.                                                                                               |
| 40:17      | Zapier, I have to say, is probably my most heavily used web service.                                         |
| 40:21      | I have 20 Zaps running.                                                                                      |
| 40:24      | There are loads of steps in all of them.                                                                     |
| 40:27      | They do everything from put every new episode of the Mac Power Users onto the Mac Power Users                    |
| 40:30      | forum and the same on the Automators and focused because I'm sneakily behind the scenes on                   |
| 40:36      | a couple of things there to more complicated things like figuring out exactly what's going                   |
| 40:42      | in our default outline for the show notes based on whether or not we have a guest or                         |
| 40:46      | whether or not there are things in the notes in air table and putting it all together and                    |
| 40:51      | opening up a Google Doc, hopefully, for us.                                                                  |
| 40:55      | It's one of those things where I find it's very much designed as a business tool, unlike                     |
| 41:01      | if this and that, which is very much more targeted at somebody who's there going, hey,                       |
| 41:05      | I just got this fancy new washer dry set that's supposed to be Automation-y, which that's                    |
| 41:10      | where you turn to if this and that.                                                                          |
| 41:12      | If you're there going, I need to integrate Basecamp, Time, A Toggle, and Google Docs,                        |
| 41:20      | then that's where you're going to be looking at something like Zapier, really, in my opinion.                |
| 41:24      | Yeah, I mean, it is so much more information internet-based than home automation-based.                      |
| 41:31      | I feel like we've kind of gone through the three little bears, the soft bed, the medium                       |
| 41:38      | bed, the hard bed.                                                                                           |
| 41:40      | Zapier is the most powerful of them.                                                                         |
| 41:43      | I think I could, I know you've used [[Make\|Integromat]] more than me, but I've never really had kind                  |
| 41:49      | of a web automation problem that I couldn't get to the bottom of with Zapier.                                |
| 41:53      | I've had a few little things like, for example, if it's watching [[Airtable]] records, it will                   |
| 41:58      | only ever trigger on one [[Airtable]] record once, and that's not once per Zap, that's once globally.            |
| 42:05      | For example, if an Automator's record triggers the Create Show Notes thing, it can't then                    |
| 42:09      | trigger a Create Reminder to publish a show of if it's Roses episodes.                                       |
| 42:16      | I am using [[Make\|Integromat]] to watch [[Airtable]] views to trigger Zapier's apps, because I already                    |
| 42:22      | have most of the Zaps up in Zapier, and so I just changed the first action to a web hook                     |
| 42:28      | and then have [[Make\|Integromat]] ping it.                                                                            |
| 42:32      | The vast majority of the time, I can solve my problem with Zapier on its own independently.                  |
| 42:39      | Yeah.                                                                                                        |
| 42:40      | I'll tell you one thing.                                                                                     |
| 42:41      | I think in [[Make\|Integromat]], I like better is their user interface.                                                |
| 42:44      | We talked about that in the last segment, but Zapier, it takes a little while to kind                        |
| 42:49      | of figure out how to glue this stuff together in Zapier that I didn't have that amount of                    |
| 42:54      | friction with [[Make\|Integromat]].                                                                                    |
| 42:57      | It's one of those things where I don't think either service really offers a lot of friction,                 |
| 43:01      | unlike if this and that at least you used to, but it very much depends on what you're                        |
| 43:05      | trying to do and what you're more familiar with.                                                             |
| 43:07      | I would suggest that for a lot of people, [[Make\|Integromat]], especially if you're using branching,                  |
| 43:13      | is much easier to get to grips with because you don't have to pay for a higher tier plan                     |
| 43:19      | if you want branching and to do different actions based on different outcomes.                               |
| 43:24      | Zapier's branching at least on the $20 a month plan is more of an if filter.                                 |
| 43:28      | If this, then I'll do this, but there's no else.                                                             |
| 43:34      | That's where that perhaps full short, not necessarily really full short, but it doesn't                      |
| 43:38      | work as well on the lower tiers as it could do for some people.                                              |
| 43:42      | Yeah, but then I look at my completed Zapier Zaps and they make complete sense to me and                     |
| 43:46      | they're very easy to go in and edit.                                                                         |
| 43:48      | So I don't know.                                                                                             |
| 43:49      | I guess they're both very good at this.                                                                      |
| 43:51      | Yes, yeah, they are.                                                                                         |
| 43:53      | And I really like using both tools.                                                                          |
| 43:56      | I wouldn't say that there is a clear winner in the web automation world as far as any                        |
| 44:00      | of these go because it really depends on what you're doing, how much money you've got to                     |
| 44:03      | spend, what problem you're trying to solve, and what you want to do to solve that because                    |
| 44:10      | all of these are great services.                                                                             |
| 44:13      | Yeah.                                                                                                        |
| 44:14      | So some of the things I've done with Zapier, I'm using it a lot for the law practice stuff.                  |
| 44:20      | And like I was having an issue where I would get a new client and I'd need to do an air                      |
| 44:26      | table entry and I'd need to do a base camp project creation and I had all these things                       |
| 44:30      | that I needed to do with basic cloud services and it was dumb retyping and copying and pasting               |
| 44:38      | this into multiple places.                                                                                   |
| 44:40      | And Zapier, I was able to put together a Zap that would monitor the air table and then                       |
| 44:44      | look at a new entry there and then populate that across to other services, the billing                       |
| 44:49      | service, the base camp, and other things.                                                                    |
| 44:52      | And it was just rock solid.                                                                                  |
| 44:55      | I never had a problem with it once I got it established.                                                     |
| 44:58      | Yes.                                                                                                         |
| 44:59      | And that's what we really want, isn't it, from all of these things.                                          |
| 45:02      | We don't want a wonky solution that sometimes kind of maybe works.                                           |
| 45:05      | We want a rock solid solution that actually solves our problems because that's what automation               |
| 45:10      | is intended to do.                                                                                           |
| 45:12      | And if it's not solving our problems and it's creating problems, then why are we doing it?                   |
| 45:18      | That doesn't really fit the purpose of the show or what we want to do personally either.                     |
| 45:24      | It is interesting to me the overlap between these online services and local options.                         |
| 45:30      | One of the zaps that I used to use was I would cancel toggle timers in the evening and just                  |
| 45:37      | have it because once in a while you have a toggle timer going, you forget to turn it                         |
| 45:42      | off, you wake up the next day and it ran throughout your sleep with both Zapier and                          |
| 45:51      | [[Make\|Integromat]].                                                                                                  |
| 45:52      | That is a possibility because it's got toggle integration.                                                   |
| 45:55      | But now with shortcuts on iOS, having time triggers, I can just say every day at 11 PM                       |
| 46:03      | open timer and stop the currently running shortcut, and I prefer that local solution                         |
| 46:10      | so I don't use those as cloud solutions anymore.                                                             |
| 46:13      | Yeah.                                                                                                        |
| 46:14      | The disadvantage with a local solution like that is it doesn't work if your personal                         |
| 46:21      | device is offline.                                                                                           |
| 46:22      | So for example, I've recently been having a few battery issues on my iPhone.                                 |
| 46:25      | I'm sure it's an iOS bug.                                                                                    |
| 46:27      | It was fine the other day and then I update it and now my screen doesn't light up properly.                  |
| 46:32      | It's a bit dark until I reboot and it keeps running out of battery.                                          |
| 46:36      | So it's living in a battery case.                                                                            |
| 46:38      | So I have a feeling that I'm suffering for running a developer beta.                                         |
| 46:42      | That is my fault.                                                                                            |
| 46:43      | I am a developer, so I have a good reason to be running it, but probably shouldn't be                        |
| 46:47      | running it on my primary device.                                                                             |
| 46:49      | But that means if my iPhone dies in the evening, then that automation isn't going to run.                    |
| 46:54      | And so either then I want a dedicated device that's always plugged in to run something                       |
| 46:58      | like that.                                                                                                   |
| 46:59      | I have my push cut automation server device.                                                                 |
| 47:01      | I could definitely use that.                                                                                 |
| 47:03      | That wouldn't be a problem.                                                                                  |
| 47:05      | Or I could leave it in Zapier.                                                                               |
| 47:09      | Now, the disadvantage of the Zapier side of things as I discovered last year when I was                      |
| 47:14      | at [[WWDC]] with you was that it was stopping my timer at 10 p.m.                                                |
| 47:20      | Central European time.                                                                                       |
| 47:21      | 10 p.m. Central European time is not 10 p.m. San Francisco time.                                             |
| 47:27      | Time sounds weird.                                                                                           |
| 47:28      | It's kind of crazy.                                                                                          |
| 47:30      | And Zapier didn't automatically detect that I had temporarily relocated myself to the                        |
| 47:35      | other side of the world for a couple of weeks.                                                               |
| 47:38      | Fair enough.                                                                                                 |
| 47:39      | It shouldn't.                                                                                                |
| 47:40      | But if this and that, in my experience, can do that, but it doesn't have toggle integration.                 |
| 47:46      | So there are swings and roundabouts with all of this, but it's really interesting seeing                     |
| 47:51      | where local automation on your devices can replace some of these things, but where the                       |
| 47:57      | web automation definitely stands strong.                                                                     |
| 47:59      | Yeah, there's definitely not a single solution for this stuff.                                               |
| 48:03      | I mean, really, I would recommend if you're listening to the show and you want to incorporate                |
| 48:08      | some web-based automation that figure out what is the problem you want to solve.                             |
| 48:13      | I think that's probably the beginning point.                                                                 |
| 48:16      | And then look at these tools in relation to that problem.                                                    |
| 48:19      | Like, if you want to do day one stuff, you're probably going to be on it this than that.                     |
| 48:22      | If you want to do more kind of like data transfer between web services, you're probably over                 |
| 48:28      | at Zapier or [[Make\|Integromat]], and you just kind of have to approach it from that direction.                       |
| 48:36      | Because if you just start in the blind, each tool has its positives and negatives.                           |
| 48:43      | Definitely.                                                                                                  |
| 48:44      | Yeah.                                                                                                        |
| 48:45      | Yeah.                                                                                                        |
| 48:46      | And all of these things, it's one of the things where you probably aren't going to be me and                 |
| 48:52      | David where you want to pay for all three tools.                                                             |
| 48:54      | If you have a business case for it and you can classify it as a business expense, that's                     |
| 48:58      | great.                                                                                                       |
| 48:59      | But unless you actually have a need for all three tools, you're probably going to want                       |
| 49:02      | to try and consolidate things as well.                                                                       |
| 49:05      | And honestly, if you're looking at the home automation side of things, I would definitely                    |
| 49:09      | say that you want, if this and that, whereas if you're looking at the more business-type                     |
| 49:15      | scenarios, then you're probably going to be looking at [[Make\|Integromat]] or Zapier.                                 |
| 49:21      | And then you could start by shopping on price because [[Make\|Integromat's]] less than half the price,                 |
| 49:25      | which is a pretty good starting point.                                                                       |
| 49:26      | You can always migrate things over to Zapier later if you needed to.                                         |
| 49:29      | Yeah.                                                                                                        |
| 49:30      | I mean, you just got to see what, I think actually the starting point, because the difference                |
| 49:34      | in price isn't that much, I would say look at them and see which one is easier for you                       |
| 49:38      | to grok.                                                                                                     |
| 49:39      | Yes.                                                                                                         |
| 49:40      | Yeah.                                                                                                        |
| 49:41      | What's the service that, because they have different opinions as to how to do these                          |
| 49:45      | things and if you get into one of these and it makes a lot of sense to you, then that's                      |
| 49:52      | the one you should start with because this is hard enough as it is.                                          |
| 49:56      | You don't need to add a degree difficultly by not understanding it.                                          |
| 49:59      | I was in, if this and that last night looking at it and they keep changing their interface                   |
| 50:03      | and they used to have a simple button to show all of the integrated services, but they took                  |
| 50:09      | that out.                                                                                                    |
| 50:10      | And the only way you do it now is like, if you go to create a new, if this and that,                         |
| 50:13      | then it gives you a list of all the services they've got tied in.                                            |
| 50:16      | But like I spent minutes looking for that, where it used to just be a button on their                        |
| 50:21      | home screen where you'd say, okay, here are all the services we can integrate with.                          |
| 50:26      | So in my head, you first want to do all the integrations that you have and then see what                     |
| 50:31      | you can glue together.                                                                                       |
| 50:33      | But they had kind of switched the logic on me and it took me a while to get to the bottom                    |
| 50:37      | of it.                                                                                                       |
| 50:38      | And that can be an issue if you're trying to figure out which one of these is the one                        |
| 50:43      | for you.                                                                                                     |
| 50:44      | Yes.                                                                                                         |
| 50:45      | I would also say if you're looking for a little bit more detail on any of these, Screencast                  |
| 50:49      | Online did, I think, a two-part tutorial on Zapier and I did a one-part tutorial on [[Make\|Integromat]],              |
| 50:56      | which we'll put links to in the show notes, where even if you're not a Screencast Online                     |
| 51:00      | member, you can watch the free samples and just see what it's like without having to                         |
| 51:04      | sign up for the service and play with it yourself necessarily.                                               |
| 51:07      | Though, of course, all of these services you can sign up for and play with for free.                         |
| 51:13      | It's only if you need to go beyond the constraints of the free plan that you'll have to pay.                 |
| 51:18      | Yeah.                                                                                                        |
| 51:19      | And that also, if you only need a few items with one of these services, you can use all                      |
| 51:25      | of them.                                                                                                     |
| 51:26      | I mean, so there's nothing wrong with that, spend some time with each one.                                   |
| 51:31      | None of them, to my knowledge, have a time limit, so long as you just stay within the                        |
| 51:36      | constraints of the free plan.                                                                                |
| 51:37      | So it's not like you only have two weeks to figure it out.                                                   |
| 51:40      | And that might be a really good idea, is just sign up for all three of them, but just keep                   |
| 51:46      | within the free plan limits and after a month or two, see which one really resonates with                    |
| 51:50      | you.                                                                                                         |
| 51:51      | Yes, definitely.                                                                                             |
| 51:52      | That's something that you should, I would say that if you're listening to the show,                          |
| 51:56      | you should probably have all three of them on the free plans at least, just so that you                      |
| 52:00      | can say that you've got it and that you've played with it.                                                   |
| 52:04      | Now, with respect to the forums, you had said there were some additional services recommended                |
| 52:09      | by some listeners.                                                                                           |
| 52:10      | I hadn't seen that post.                                                                                     |
| 52:11      | What are some other ones that we should be checking out?                                                     |
| 52:13      | So one that I've seen, I believe at least twice in the Automators Forum, is an application                   |
| 52:18      | called, I'm not sure if it's Huggin or Huggin, H-U-G-I-N-N.                                                   |
| 52:23      | And this is a self-hosted version of sort of if this and that, Zapier or [[Make\|Integromat]].                         |
| 52:30      | So they say it's a system for building agents to perform automated tasks online.                             |
| 52:34      | It's got a picture of a Raven, but the idea is that it will do it for you, but you have                      |
| 52:41      | to host it and run it yourself.                                                                              |
| 52:44      | So that's both a good thing and a bad thing.                                                                 |
| 52:46      | If you think, oh my gosh, hosting this myself, that sounds terrifying, this is not the service               |
| 52:50      | for you.                                                                                                     |
| 52:51      | If you think, yeah, I've got a server, I could put some other services on it, I would definitely             |
| 52:54      | recommend that you play with it.                                                                             |
| 52:56      | And then you tell us in the forums, please, what it's like.                                                  |
| 52:58      | I have not yet had a chance to do this.                                                                      |
| 53:01      | I would love to set this up and play with it.                                                                |
| 53:04      | It's within my comfort zone, I just need a time machine.                                                     |
| 53:07      | So if anybody has one of those, I would really like that.                                                    |
| 53:10      | I have so many things that I need to do, so I've not had a chance.                                           |
| 53:13      | That's kind of the problem with the bake your own is that if things change, it's not the                     |
| 53:19      | initial setup that gets me.                                                                                  |
| 53:20      | It's like the six months later, it just stops working and then you've got to figure out                      |
| 53:24      | why.                                                                                                         |
| 53:25      | That's the thing I don't like about stuff like this.                                                         |
| 53:27      | Yeah, yeah, and you have to keep it up to date and maintain it yourself, which is both                       |
| 53:31      | a good thing.                                                                                                |
| 53:32      | If you're worried about the privacy and knowing what's in it, this is an open source application.            |
| 53:37      | It works apparently quite well.                                                                              |
| 53:40      | There's a good GitHub repository for it.                                                                     |
| 53:44      | It's fairly active, the last update, as I'm looking at it was three weeks ago.                               |
| 53:49      | But this has been around for at least seven years now with different things going on.                        |
| 53:56      | So you can always take a look at it and see what it's like.                                                  |
| 54:00      | This episode of The Automators is brought to you by the Intrazone by Microsoft SharePoint,                   |
| 54:05      | your biweekly conversation and interview podcast hosted by the SharePoint team.                              |
| 54:11      | Some of my favourite tech podcasts are those where the hosts bring in interview guests                        |
| 54:15      | who are solving unique technology problems, explaining how they do it, giving you an idea                    |
| 54:20      | how you can get better at solving your own problems.                                                         |
| 54:23      | That's the reason why we have guests here on The Automators show, and that's the reason                      |
| 54:26      | why we have the whole workflow series over on Mac Power users as well.                                       |
| 54:30      | If you like that and you're looking for a new show to listen to, this week's sponsor,                        |
| 54:34      | The Intrazone, is a biweekly podcast with conversations and interviews on how Microsoft                      |
| 54:40      | SharePoint, OneDrive, and related tech can work for you.                                                     |
| 54:43      | You'll hear from guest experts behind the scenes and out in the field.                                       |
| 54:48      | So you can see how SharePoint fits into your everyday work life.                                             |
| 54:52      | To easily share and manage content, knowledge, and applications.                                             |
| 54:57      | Each show covers a bunch of segments like news and announcements, a focused topic of                         |
| 55:02      | the week, guest perspectives, facts of the week, and upcoming events.                                        |
| 55:07      | And just so you have an idea what to expect, I want to tell you about some topics you might                  |
| 55:11      | be interested in that were on previous episodes.                                                             |
| 55:14      | They've discussed working from home, which is relevant to everyone at this point, and                        |
| 55:18      | also figuring out an intelligent intranet for your organisation.                                             |
| 55:22      | They also did an episode talking about API and teamwork too, which you should give a                         |
| 55:27      | try.                                                                                                         |
| 55:28      | I've been listening to The Intrazone lately, and I particularly enjoyed the recent episode                   |
| 55:33      | with CreoSpark and the Canadian Special Olympics.                                                            |
| 55:37      | In it, Mark and Chris talked to Denise from the Special Olympics Canada about their data                     |
| 55:42      | management problems.                                                                                         |
| 55:43      | They had data spread out all over the place.                                                                 |
| 55:46      | They didn't have an integrated system.                                                                       |
| 55:48      | So they switched over to SharePoint with the help of CreoSpark, and it really is a success                   |
| 55:53      | story.                                                                                                       |
| 55:54      | And it's also just a great way to hear how an organisation figures out a way to combine                      |
| 55:59      | its data and make it easier for everyone to get their work done.                                             |
| 56:03      | I find stories like this fascinating, and The Intrazone is just full of them.                                |
| 56:07      | So go and listen to it now.                                                                                  |
| 56:09      | Just search for The Intrazone wherever you get your podcasts.                                                |
| 56:12      | That's I-N-T-R-A-Z-O-N-E, or just click the link in the show notes.                                          |
| 56:17      | Go ahead and check it out.                                                                                   |
| 56:19      | Our thanks to The Intrazone by Microsoft SharePoint for their support of the Automators                      |
| 56:23      | and all of Relay FM.                                                                                         |
| 56:26      | So Rose, what automation problems are you solving these days?                                                |
| 56:29      | Well, I kind of feel like I'm creating automation problems at the moment because when I left                 |
| 56:34      | home just before we were going to record this episode, because I'm temporarily recording                     |
| 56:39      | at my parents' place again, I had a box of things, home automation things on my kitchen                      |
| 56:45      | counter, which need to be set up and plugged in, but because everything's being redecorated,                 |
| 56:50      | I don't have sockets and stuff right now because they need to be replaced because they weren't               |
| 56:54      | up to code.                                                                                                  |
| 56:55      | So I had to get an electrician in to do that.                                                                |
| 56:57      | So I've been doing some fun things, though.                                                                  |
| 57:00      | I have smart blinds.                                                                                         |
| 57:01      | I have a smart blind in my bedroom.                                                                          |
| 57:02      | And when I turn my alarm off in the morning, when I turn off my wake-up alarm specifically                   |
| 57:07      | on my iPhone, it automatically opens my blind for me, which is great.                                        |
| 57:12      | And I'm loving this so much.                                                                                 |
| 57:14      | And I have an automated blind in my kitchen.                                                                 |
| 57:17      | And I'm about to get one in my office slash studio, and hopefully it will actually be                        |
| 57:21      | installed by the time I get back.                                                                            |
| 57:23      | These are the IKEA blinds.                                                                                   |
| 57:24      | They have two.                                                                                               |
| 57:25      | They have a black-up blind called the Fyrtur, F-Y-R-T-U-R.                                                   |
| 57:29      | And then another one that begins with a K that I've forgotten how to pronounce it or                         |
| 57:33      | spell it, that is not a black-up blind that I've got in my kitchen.                                          |
| 57:37      | And it's so great.                                                                                           |
| 57:39      | They're really easy to set up, like actually physically install.                                             |
| 57:43      | But software setup could be a little bit better.                                                             |
| 57:45      | The IKEA Home smart app is not the smartest, but once it works, it's great.                                   |
| 57:52      | And yeah, I'm loving home automation stuff.                                                                  |
| 57:57      | There's literally a box of sensors and stuff on my kitchen counter for me to install as                      |
| 58:01      | soon as the redecorating's finished.                                                                         |
| 58:04      | But I'm not quite there yet.                                                                                 |
| 58:05      | So.                                                                                                          |
| 58:06      | Yeah.                                                                                                        |
| 58:07      | And we're going to do a whole show on that because I just want to hear.                                      |
| 58:09      | The thing I'm interested with you, Rose, is your triggers and your conditions for triggering                 |
| 58:15      | lights.                                                                                                      |
| 58:16      | It's harder for me.                                                                                          |
| 58:17      | I do have a lot of home automation stuff installed, but in terms of just like walking                        |
| 58:21      | a room and turning the lights on or turning them off, it's difficult because there's three                   |
| 58:25      | other humans in the house.                                                                                   |
| 58:27      | And I understand we can do sensors and say when nobody's in the room, but it's just                          |
| 58:33      | harder with multiple people because if my wife is working in the kitchen, lights just                        |
| 58:38      | randomly go off.                                                                                             |
| 58:41      | That is not something she's going to be happy with her husband about.                                        |
| 58:44      | Yeah.                                                                                                        |
| 58:45      | Yeah.                                                                                                        |
| 58:46      | Yeah.                                                                                                        |
| 58:47      | I can see why you need the family approval factor.                                                           |
| 58:50      | You also have a puppy who will probably object to things if it suddenly gets very cold or                    |
| 58:55      | very hot.                                                                                                    |
| 58:56      | Yeah.                                                                                                        |
| 58:57      | Yeah.                                                                                                        |
| 58:58      | Whereas I am predominantly worried about me, but I've decided that I am going to make                        |
| 59:03      | things slightly dumb.                                                                                        |
| 59:05      | So for a lot of things, I'm getting physical buttons and I bought some really cheap.                         |
| 59:09      | I think they were like less than a dollar each in IKEA plastic photo frames.                                 |
| 59:14      | Okay.                                                                                                        |
| 59:15      | These are not great photo frames, but they're perfect for put a piece of coloured paper in                    |
| 59:18      | them and stick the mounts for the IKEA buttons on the front and put labels underneath.                       |
| 59:23      | So I know that this button is for the heater and there's an on and off on that button.                       |
| 59:28      | And this one is for the blind and that one's an up and a down.                                               |
| 59:30      | And this one is for the light and that's, you know, all of the different toggles.                            |
| 59:34      | And then they're all in like one photo frame.                                                                |
| 59:36      | So if there are other people and they're like, how do I do this thing?                                       |
| 59:40      | Then it'll be, you know, like there's, there's a little thing that I can pick up and give                    |
| 59:44      | to them and they can figure it out because I am getting a sofa bed.                                          |
| 59:48      | It should be being delivered tomorrow.                                                                       |
| 59:49      | I had new carpets installed today.                                                                           |
| 59:51      | So sofa couldn't arrive until tomorrow, but it's a sofa bed.                                                 |
| 59:55      | So that means that, you know, when there's not a global pandemic anymore, I can have                         |
| 59:58      | people come stay and, you know, being able to, you know, give them a thing and say,                          |
| 01:00:04   | here's how you control the stuff in the room that you're in so that you don't overheat                       |
| 01:00:07   | or get blinded would be pretty nice.                                                                         |
| 01:00:10   | Yeah.                                                                                                        |
| 01:00:11   | Well, I, my automation problems I've been working on lately are just a lot of stuff                          |
| 01:00:15   | in [[Drafts]].                                                                                                   |
| 01:00:16   | I mean, we had Greg on recently, but after we recorded that show, he, because I pestered                     |
| 01:00:22   | him on the show, I think he added the ability to turn [[Drafts]] tags into Apple finder tags.                    |
| 01:00:29   | So now like one of the automations I use is like when I have a phone call come in for                        |
| 01:00:34   | a client matter, I just have a draft that runs a text template.                                              |
| 01:00:39   | And you can do that in [[Drafts]] where it just inserts text.                                                    |
| 01:00:42   | So it'll say, who's the call with, what's the subject, you know, what are the tasks.                         |
| 01:00:46   | I'm assigning myself.                                                                                        |
| 01:00:48   | And so I can fill that in during the call, but it also automatically when it runs the                        |
| 01:00:53   | template, it tags the note with the word with a tag called note and then a tag for legal.                    |
| 01:01:02   | And then when I'm done, I also add an additional tag with a client name, all that's done                     |
| 01:01:08   | in [[Drafts]].                                                                                                   |
| 01:01:09   | And then when I push the button at the end, it exports a markdown text file to a specific                    |
| 01:01:17   | location on my drive that Hazel's looking at.                                                                |
| 01:01:19   | And [[Hazel]] says, oh, there is a file that has client name plus the word note plus a note                      |
| 01:01:25   | tag on it.                                                                                                   |
| 01:01:27   | I'm just going to grab that and stick it in the notes folder for that client.                                |
| 01:01:33   | And so it's just super fast workflow for me where I can take notes and they get filed                        |
| 01:01:38   | immediately where they belong.                                                                               |
| 01:01:41   | And it's totally secure because it's just on my drive.                                                       |
| 01:01:43   | It's not going to the cloud anywhere.                                                                        |
| 01:01:45   | And all that's because Greg got it, that ability to export the tags as Apple tags.                           |
| 01:01:53   | And I'm so thankful to him for taking the time to do that because I think he really                          |
| 01:01:58   | only did it to shut me up.                                                                                   |
| 01:02:00   | Well, I've seen snippets of this workflow coming through, David.                                             |
| 01:02:03   | So I'm really pleased that this is working for you.                                                          |
| 01:02:06   | I need to sort out my digital filing system.                                                                 |
| 01:02:10   | Everything's kind of a mess right now because I've been experimenting with different apps                    |
| 01:02:15   | and different things here and there and do I really need to save this and do I just save                     |
| 01:02:18   | it in Finder or do I throw it in [[DEVONthink]] and all of this different stuff that is going                   |
| 01:02:23   | on.                                                                                                          |
| 01:02:24   | So I'm going to be doing an overhaul of my system at the Finder tags.                                        |
| 01:02:27   | I'm thinking I'm going to be taking a leaf out of your book here because that's pretty                       |
| 01:02:31   | darn cool.                                                                                                   |
| 01:02:32   | And then I also have the JavaScript step that looks at the note.                                             |
| 01:02:35   | And if there's anything in there that starts with a dash, then it gets added to the Omni                     |
| 01:02:38   | focus inbox.                                                                                                 |
| 01:02:39   | So if I give myself a task arising out of the call of the say dash, you know, write contract                 |
| 01:02:46   | and then at the same time that it's saving and the Markdown file out, it'll yank out                         |
| 01:02:52   | that line with the dash after and create a new Omni focus inbox item with that.                              |
| 01:02:57   | And so it's just a very efficient workflow for me.                                                           |
| 01:03:01   | But like you, I've also been spending a lot of time with notes and trying to bring automation                |
| 01:03:05   | to bear.                                                                                                     |
| 01:03:06   | You know, partly Mike Schmitz's fault, but I've been, you know, playing with room research,                  |
| 01:03:11   | which is kind of the new sexy thing on the internet, which I like a lot about Roam, but                      |
| 01:03:16   | I don't like it's a web tool only.                                                                           |
| 01:03:18   | So that makes me a little nervous and their security model just really isn't implemented                     |
| 01:03:22   | yet.                                                                                                         |
| 01:03:23   | I mean, you get an account and you have a password, but there's no two factor authentication.                |
| 01:03:28   | There's no end-to-end encryption.                                                                            |
| 01:03:30   | There's a whole bunch of reasons why I just can't use it for a lot of the stuff I do.                        |
| 01:03:35   | But the idea of backlinks, which Roam Research uses, I see the attraction of that.                           |
| 01:03:41   | And I've been putting a rudimentary backlink system into [[Drafts]].                                             |
| 01:03:46   | And so because [[Drafts]] has the ability to create crosslinks.                                                  |
| 01:03:50   | So if you're in [[Drafts]], like I have a draft called Automator's podcast.                                      |
| 01:03:55   | And then underneath that, I've got a bunch of details for the show and settings and things                   |
| 01:04:00   | that I use for show, but I've also got a thing there called episode list.                                    |
| 01:04:04   | And underneath that, I've got, you know, each episode listed, you know, and they'll say,                     |
| 01:04:09   | you know, episode 60, you know, web-based automation, and it'll have double brackets                         |
| 01:04:14   | around it.                                                                                                   |
| 01:04:16   | And that links to the Automator's episode 60 draft that I have.                                              |
| 01:04:21   | So I've got notes on the specific episode and everything links together.                                     |
| 01:04:25   | And there's a [[Drafts]] action that a user created.                                                             |
| 01:04:28   | I'll put a link in the show notes that will automatically generate backlinks.                                |
| 01:04:32   | So now if I go into the episode draft, it'll, it will look for any other draft that links                    |
| 01:04:42   | to it.                                                                                                       |
| 01:04:43   | So it's a backlink.                                                                                          |
| 01:04:44   | It's not as, it's not as efficient or as convenient as, as room research or even [[Obsidian]].                   |
| 01:04:48   | But it still gives you the benefit of a backlink.                                                            |
| 01:04:52   | And so, so I'm doing a bunch of automation stuff around that yet.                                            |
| 01:04:56   | And like you, I'm kind of like rethinking my note system.                                                    |
| 01:04:59   | And the thing is, I wrote a post about this at MacSparky, but right now we're in the                        |
| 01:05:03   | midst of a revolution in notes with tools like [[Obsidian]] and [[Drafts]] coming out.                               |
| 01:05:08   | And the idea of these backlinks and the idea that everything kind of connects to everything                  |
| 01:05:13   | else.                                                                                                        |
| 01:05:15   | And I am sold.                                                                                               |
| 01:05:16   | I mean, I think that one of the big problems with notes apps has always been that we have                    |
| 01:05:20   | to stop and think about where does this go.                                                                  |
| 01:05:23   | And that's a huge hangup because we're not sure where it goes when we start writing it.                      |
| 01:05:27   | Because with these new systems, it's kind of a beautiful chaos where everything links                        |
| 01:05:31   | together.                                                                                                    |
| 01:05:32   | You don't really think about where it belongs, but you can find it when you need it.                         |
| 01:05:36   | And, and I'm not sure where this is all going to end up.                                                     |
| 01:05:39   | I mean, Roam just took a bunch of money.                                                                     |
| 01:05:41   | So hopefully they'll get the security in order [[Obsidian]] seems to come out with a new update                  |
| 01:05:46   | every week [[Drafts]] is getting some amazing features.                                                          |
| 01:05:49   | So I honestly don't know where it all ends, but for now I'm doing this in a place I trust,                   |
| 01:05:55   | which is [[Drafts]], and, and I'm pretty happy with the backlinks I've been doing there.                         |
| 01:06:00   | Yes.                                                                                                         |
| 01:06:01   | That sounds really great.                                                                                    |
| 01:06:02   | I was really excited when [[Drafts]] added crosslinking where you can use two sets of square brackets            |
| 01:06:08   | and you can just type in the title of a draft, or you can, I think it was you and then colon                 |
| 01:06:13   | the UID of the draft to just create a link to it.                                                            |
| 01:06:17   | And that is very exciting.                                                                                   |
| 01:06:18   | And I need to do a lot more playing with that and figuring out how that works together.                      |
| 01:06:23   | Because I have a series of automations that create loads of [[Drafts]] for me for, you know,                     |
| 01:06:29   | like one specific thing that I'm doing, like, you know, a show for screencast online or,                     |
| 01:06:33   | you know, some stuff that's happening at work, I have multiple different areas that I need                   |
| 01:06:38   | to keep notes in.                                                                                            |
| 01:06:39   | And instead of having one really, really, really long note, I just want, you know, multiple                  |
| 01:06:44   | other notes so that I can jump between them.                                                                 |
| 01:06:47   | But I need to figure out how I can then take those UIDs and put them into the other ones                     |
| 01:06:52   | so that I have everything available for me, because I need to, I would like those links                      |
| 01:06:56   | at the top if I can, but I'll figure it out.                                                                 |
| 01:06:59   | And the nice thing about doing [[Drafts]] is [[Drafts]] is on iOS and it's on Mac, and it is so automation-friendly  |
| 01:07:05   | with shortcuts.                                                                                              |
| 01:07:06   | I mean, and with [[Drafts]], you can get the UID of a specific note.                                             |
| 01:07:11   | I mean, there's just a lot to like about that whole system and that ecosystem.                               |
| 01:07:17   | As we're recording this, I've got a series of posts and a video coming out this week                         |
| 01:07:21   | about this personal retreat I took, and all that stuff was written in draft, but it's                        |
| 01:07:25   | all cross-linked using that system and using the backlink.                                                   |
| 01:07:29   | So it really made the process of putting that together pretty simple.                                        |
| 01:07:34   | And kind of to put a bow in it, I am combining that with this app, you know, Hook, that I                    |
| 01:07:41   | just recently started using more frequently.                                                                 |
| 01:07:44   | And Hook gives you the ability to create a link to almost anything on your Mac.                              |
| 01:07:52   | And you just, you know, hit the magic keystroke and it creates a link and it does a file link.               |
| 01:07:55   | Apparently, Rosa's got a way to do it even without using Hook, which is cool.                                |
| 01:07:59   | But I like the ability to create links to specific files.                                                    |
| 01:08:03   | Like when I was experimenting with the room research, I would put hook links in the room                     |
| 01:08:08   | research outline to a specific client document, so the document itself wouldn't be in the                    |
| 01:08:13   | room database, but I would be able to get access to it.                                                      |
| 01:08:17   | But I did the same thing in [[Drafts]], or like I talked earlier about how I have a page,                        |
| 01:08:23   | a [[Drafts]] page for the Automator's podcast.                                                                   |
| 01:08:25   | Well, on that page, I have a link to the [[Google]] folder where we keep all of the documents                    |
| 01:08:30   | that we do the show on.                                                                                      |
| 01:08:32   | And I have a link to the air table where we do the show planning.                                            |
| 01:08:34   | And I have a link to the [[OmniFocus]] project for automators.                                                   |
| 01:08:39   | And so I go and all this stuff, cross links, and I do the same thing in the OmniFocus page                   |
| 01:08:46   | project for automators.                                                                                      |
| 01:08:47   | I also have links to the air table and to the draft, and like everything is connected                        |
| 01:08:52   | with these URLs.                                                                                             |
| 01:08:53   | And I've automated as much as I can.                                                                         |
| 01:08:55   | Some of it, I can't automate, some of it, just you have to resort to a block and copy.                       |
| 01:09:00   | And not all of this requires [[Hook]].                                                                           |
| 01:09:03   | The primary thing I've been doing with Hook is using it for file links and also email links.                 |
| 01:09:09   | But I can do email links also with an [[AppleScript]], but actually it's faster for me to                       |
| 01:09:14   | do it with Hook.                                                                                             |
| 01:09:15   | And I rewrote the AppleScript in Hook to allow me to use an AppleScript message link                       |
| 01:09:20   | as opposed to the Hook link.                                                                                 |
| 01:09:22   | So it's not proprietary, and I can open it on iPad.                                                          |
| 01:09:24   | But I'm rambling.                                                                                            |
| 01:09:27   | Some line is, you know, cross linking and URL linking for automators is a very handy                         |
| 01:09:34   | trick.                                                                                                       |
| 01:09:35   | Yes.                                                                                                         |
| 01:09:36   | Yeah, I would definitely agree with that.                                                                    |
| 01:09:37   | And while you were talking, I just figured out, I believe [[Drafts]] offers a search cross                       |
| 01:09:41   | link.                                                                                                        |
| 01:09:42   | And I think that's going to solve my problem because I can just put the search cross link                    |
| 01:09:44   | in there because there's a unique term at the beginning of every single title, which                         |
| 01:09:48   | is the same throughout that series of notes.                                                                 |
| 01:09:51   | So bam, we're done.                                                                                          |
| 01:09:52   | Oh, wow, this is great.                                                                                      |
| 01:09:54   | Thank you, David.                                                                                            |
| 01:09:55   | You solved a problem for me and you didn't even know you were doing it.                                      |
| 01:09:57   | Yeah, it is a fun time, though.                                                                              |
| 01:09:59   | I mean, [[Drafts]] is kind of my choice for this stuff, but there are some very interesting                      |
| 01:10:05   | tools being developed out there.                                                                             |
| 01:10:06   | And I'm super curious to see where all this goes.                                                            |
| 01:10:09   | And I think a year from now, like I said earlier, I just think that the whole idea                           |
| 01:10:15   | of note taking is undergoing a transformation right now.                                                     |
| 01:10:18   | And it's very exciting as a nerd to see how this plays out.                                                  |
| 01:10:22   | Definitely it is.                                                                                            |
| 01:10:23   | All right.                                                                                                   |
| 01:10:24   | So that does it for today's episode.                                                                         |
| 01:10:26   | We are The Automators.                                                                                       |
| 01:10:27   | You can find us over at relay.fm/automators.                                                           |
| 01:10:31   | I want to thank our sponsors for today.                                                                      |
| 01:10:33   | That's Smile Software, bringing us PDF pin, ExpressVPN, and the Intrazone by Microsoft                       |
| 01:10:40   | SharePoint.                                                                                                  |
| 01:10:41   | You can find us over at automators.fm.                                                                       |
| 01:10:44   | You can find the forums over at talk.automators.fm.                                                          |
| 01:10:46   | You can find the show at relay.fm/automators.                                                          |
| 01:10:51   | Then Rose, what are you up to on the internet these days?                                                    |
| 01:10:54   | Oh, gosh, I've been doing so many things, David.                                                             |
| 01:10:56   | I feel like I'm both coming and going at the same time.                                                      |
| 01:11:00   | If you're looking for me, generally, rosemaryorchard.com.                                                      |
| 01:11:02   | And I'm also doing things over at the suite setup and at screencasts online.                                 |
| 01:11:06   | Yeah.                                                                                                        |
| 01:11:07   | I'm over at macsparkying.com.                                                                                  |
| 01:11:09   | Just this week, as the show publishes, I've done a series of posts on the kind of the                        |
| 01:11:14   | hippie part of personal retreat and also the technology of how I did it.                                     |
| 01:11:18   | So I think that's kind of interesting.                                                                       |
| 01:11:20   | I've also recently tried to kind of reboot my newsletter to make it something more useful.                   |
| 01:11:26   | If you're interested, I would encourage you to go to macsparkying.com and sign up for the                      |
| 01:11:29   | newsletter.                                                                                                  |
| 01:11:31   | And once again, we're the automators.                                                                        |
| 01:11:33   | We've got a lot of great content coming for you.                                                             |
| 01:11:35   | We'll see you in two weeks.                                                                                  |
| 01:11:36   | Goodbye, everyone.                                                                                           |
