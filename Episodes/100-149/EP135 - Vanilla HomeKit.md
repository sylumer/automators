---
status: "incomplete"
fc-date:
  year: 2023
  month: 08
  day: 25
fc-category: "podcast"
podcast: "Automators"
published: 2023-08-25
duration: 5429
formattedduration: "01:30:29"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/135"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators135.mp3"
episode: 135
title: "135: Vanilla HomeKit"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rosemary and David talk about what's happening with Alex Hay's apps for Shortcuts, and then dive into the world of plain HomeKit without extra services.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- *Episode 135 discussion topic was not automatically created on the forum.*

# Sponsors
- [[Vitally (Sponsor)|Vitally]] - A new era for customer success productivity.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[HelloFresh (Sponsor)|HelloFresh]] - Use code `automators10` for ten free meals with free shipping.

# Show Notes
- [Toolbox Pro, Logger for Shortcuts, and Nautomate | Snailed It Development Ltd](https://snailedit.dev/2023/08/25/alex-hay-apps.html)
- [Toolbox Pro](https://snailedit.dev/)
- [Logger for Shortcuts](https://snailedit.dev/)
- [Nautomate](https://snailedit.dev/)
- [Apple's Home(Kit) App](https://www.apple.com/home-app/)
- [Aqara - Smart Home Automation Devices for Better Living](https://www.aqara.com/en/)
- [Smart lighting Products | Philips Hue](https://www.philips-hue.com/)
- [Smart Home Products - Lighting, Wi-Fi Speakers, Blinds - IKEA](https://www.ikea.com/us/en/cat/smart-home-hs001/)
- [Nanoleaf® Official Site | Smart Home LED Lighting Products (United Kingdom)](https://nanoleaf.me/en-GB/)
- [HomePass for HomeKit](https://homepass.app/)
	- We didn't mention them on the show, but you should definitely check out Aaron's other HomeKit apps too!
- [HomeBatteries for HomeKit on the App Store](https://apps.apple.com/gb/app/homebatteries-for-homekit/id6450958030)

# Transcription
  
| Time Index | Transcription                                                                                             |
| :--------- | :-------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the podcast about grabbing your technology, hardware,                   |
| 00:07      | or software, and making it do all of that hard work for you.                                              |
| 00:10      | My name is Rosemary Orchard, and I'm joined as always by David Sparks.                                    |
| 00:13      | Hey, David, how are you?                                                                                  |
| 00:14      | I am great, Rose.                                                                                         |
| 00:16      | So nice to be talking to you today.                                                                       |
| 00:18      | I got sick last week, so we had to delay our regular recording, and I missed you.                         |
| 00:22      | Well, I was all ready to record as well.                                                                  |
| 00:24      | I wasn't actually at home last week.                                                                      |
| 00:26      | I was going to be recording on a location elsewhere, but yeah, I saved it.                                |
| 00:32      | We put some stuff in the show notes.                                                                      |
| 00:34      | We've been having some fun, and it gave us a little more time to dive into the Automators                 |
| 00:38      | Max topic, which is going to be about automation notion, probably Automators Max listeners.               |
| 00:43      | But yeah, it also gave me a little time to work on an announcement that I've got for                      |
| 00:48      | today's show, because yeah, there's some cool stuff coming.                                               |
| 00:52      | Yeah, I can't wait to share that.                                                                         |
| 00:55      | Are you at the point now, Rose, where you're itching to put the latest builds on all of                   |
| 01:01      | your production devices?                                                                                  |
| 01:02      | Are you feeling it yet?                                                                                   |
| 01:03      | You're feeling the pull?                                                                                  |
| 01:04      | I mean, yes and no.                                                                                       |
| 01:07      | I've been playing with the Mac OS Sonoma Beta on and off, and I like it.                                  |
| 01:15      | Part of me really wants to just be like, install everything everywhere.                                   |
| 01:18      | And the other part of me is like, I want to keep one iOS, or in my case, iPad OS device,                  |
| 01:26      | not on the beta.                                                                                          |
| 01:28      | And when it comes to my Macs, I've been using with works permission, obviously, one of my                 |
| 01:36      | personal laptops also for work.                                                                           |
| 01:38      | So I have it set up so I can do that.                                                                     |
| 01:41      | And because of that, I really don't want to put the Mac OS beta on there.                                 |
| 01:44      | So I've got a separate laptop, and I can't put it on my Mac Studio because that's my                      |
| 01:47      | recording machine, and I don't want GMR Lovely editor to murder me when things inevitably                 |
| 01:52      | go wrong during the beta process.                                                                         |
| 01:55      | So yeah, I've not been playing with the Mac stuff as much, but iPad OS and iOS, yeah,                     |
| 02:02      | and watch OS, it's on everything pretty much like I've got one iPad mini that isn't running               |
| 02:07      | iOS 17, just in case my banking app decides that it's going to lock me out because I'm                    |
| 02:12      | using the beta, which it usually does, and this year hasn't happened.                                     |
| 02:16      | Well, the ship has sailed on the iOS stuff.                                                               |
| 02:18      | I have already done all that, but I just want on my Mac now, but we need it for the recording             |
| 02:25      | tools we use to make the podcast, I can't do it yet, but I don't even have a really                       |
| 02:29      | good reason, but I just want it now because I've got it on everything else.                               |
| 02:33      | There is a thing like, I call it beta inflation, the more devices you put it on, the more you             |
| 02:38      | want to put it on.                                                                                        |
| 02:39      | Yeah.                                                                                                     |
| 02:40      | Yeah, it just multiplies.                                                                                 |
| 02:41      | It's the beta triples.                                                                                    |
| 02:43      | They're just everywhere.                                                                                  |
| 02:44      | Yes, it is, it's tough.                                                                                   |
| 02:47      | It's tough, Rose.                                                                                         |
| 02:48      | It's hard on me.                                                                                          |
| 02:49      | But at the same time, I did have a little issue with my iPhone overheating at one point,                  |
| 02:55      | but I think that was also, I was using a different case at the time and I feel like the case was          |
| 02:58      | doing something a little weird with [[MagSafe]] or something, and I usually charge with [[MagSafe]],              |
| 03:02      | so I feel like that may not have been purely iOS.                                                         |
| 03:05      | I feel like that could have been hardware, but not iPhone hardware as a problem.                          |
| 03:10      | Yeah.                                                                                                     |
| 03:11      | Yeah, but aside from that, I feel like I've been very lucky this beta season.                             |
| 03:15      | I feel like I've been saying that in a lot of years recently, but at the same time, I                     |
| 03:20      | obviously had an issue with Shortcuts crashing on launch due to something going weird, which              |
| 03:26      | has been fixed in Beta 1, but yeah, I've been surprisingly lucky when it comes to this                    |
| 03:33      | stuff.                                                                                                    |
| 03:34      | Yeah, yeah.                                                                                               |
| 03:35      | I think overall, it's been a pretty good year.                                                            |
| 03:37      | We're calling it quality of life at [[WWDC]], and that's really stuck for me.                                 |
| 03:41      | I feel like that's what we're getting.                                                                    |
| 03:43      | We will be covering it here on the Automators when they release it.                                       |
| 03:47      | There's a bunch of new automation stuff.                                                                  |
| 03:48      | We've talked about some of it, but we haven't really gone into the weeds with it yet because              |
| 03:52      | it was all in beta.                                                                                       |
| 03:53      | When the time comes, gang, you will get the whole story from us, but before we get into                   |
| 03:59      | today's topic, you teased us with an announcement, Rose.                                                  |
| 04:02      | What's going on?                                                                                          |
| 04:03      | Yeah.                                                                                                     |
| 04:04      | As I'm sure listeners of the show have heard at some point recently, [[Alex Hay]], who was                    |
| 04:12      | a wonderful developer, created apps like [[Toolbox Pro]], [[Logger]] for [[Shortcuts]], and [[Nautomate]],                 |
| 04:18      | which are shortcuts to automated notion, sadly passed away earlier this year.                             |
| 04:24      | Obviously, this is very sad for all of us because he was a fabulous developer and very                    |
| 04:28      | supportive of other developers and shortcuts creators in just talking to people and setting               |
| 04:34      | up demo code that people could play with, passing in feedback to [[Apple]], and so on.                        |
| 04:38      | Obviously, also, he's been on the show before.                                                            |
| 04:40      | You can go back and listen to his episode.                                                                |
| 04:43      | Just a lovely guy.                                                                                        |
| 04:45      | I feel like a lot of people were also left going, what's going to happen to my shortcuts                  |
| 04:48      | that we're using Toolbox Pro actions or an Automate actions or Logger?                                    |
| 04:53      | I actually have some very good news because I founded a little development company with                   |
| 04:59      | a couple of friends of mine last year, the end of the year before, and we were able to                    |
| 05:05      | talk to Alex's family.                                                                                    |
| 05:07      | The great news is we have taken over Toolbox Pro, Automate, and Logger, so all of Alex's                  |
| 05:12      | apps, and they are now living with us.                                                                    |
| 05:16      | We're going to make a point to donate a chunk of any proceeds that we get out of this to                  |
| 05:21      | Charity in Alex's name, obviously.                                                                        |
| 05:24      | We're not going to be suddenly turning everything into a really high-priced app.                          |
| 05:29      | We're going to keep everything running the way it was when Alex set it up, and we're                      |
| 05:33      | just going to continue to update things and make sure that everything is going to continue                |
| 05:37      | to work in the future, and hopefully do some new releases and new features on stuff as                    |
| 05:42      | well.                                                                                                     |
| 05:43      | We've already got a couple of little ideas on things, and yeah, it's really exciting                      |
| 05:47      | that we get to take over these apps, which are so important to the community.                             |
| 05:51      | Yeah, it was so tragic because Alex was awesome and a quality person, but also just killing               |
| 05:59      | our developer and gave us so many of the best tools and shortcuts were through those add-ons.             |
| 06:05      | I'm really glad that you guys are able to honour the legacy, but also keep adding and                      |
| 06:10      | growing upon the legacy.                                                                                  |
| 06:14      | Of all the people in the world, I can't think of anyone better Rose than you to shepherd                  |
| 06:17      | it, and I'm really so happy to hear this news.                                                            |
| 06:20      | I'm glad we can share it with the world and let folks know that those apps are no longer.                 |
| 06:25      | They're still going to be supported, developed, and even expanded upon, so if you're interested           |
| 06:30      | in them, go check them out.                                                                               |
| 06:31      | We'll put some links in the show notes.                                                                   |
| 06:35      | It's a tragic situation, but this little part of it has a happy ending, that these excellent              |
| 06:42      | applications are going to continue.                                                                       |
| 06:44      | I wish you and your gang all the best of luck with this Rose.                                             |
| 06:48      | Yeah.                                                                                                     |
| 06:49      | Well, I'm just glad that we were able to talk to Axis Family and make sure that they                      |
| 06:55      | also don't have to deal with what is an app on the App Store and all of these things,                     |
| 07:00      | because if you're not a developer and you're not experienced with any of this, I can imagine              |
| 07:03      | it must be very overwhelming, so hopefully, fingers crossed, we've managed to relieve                     |
| 07:07      | them of a little burden there, and keep something running for the community, which is, I think            |
| 07:14      | I hope what Alex would have wanted, we basically just want to keep it running.                            |
| 07:20      | I know so many of the actions that he added in Toolbox Pro, the very first Toolbox Pro,                   |
| 07:24      | it kind of got [[Sherlocking\|Sherlocked]] by the Shortcuts team, but in a good way.                                       |
| 07:28      | He was happy about it.                                                                                    |
| 07:29      | He was like, these actions are going to go away because they're now part of Shortcuts.                    |
| 07:32      | This is great.                                                                                            |
| 07:33      | I ran into the limit on the actions that I could add, and so we're hoping that that's                     |
| 07:39      | going to continue to happen.                                                                              |
| 07:40      | Such a fun interview.                                                                                     |
| 07:41      | Yeah.                                                                                                     |
| 07:42      | That was such a fun interview, too.                                                                       |
| 07:43      | Well, it's just great, Rose, that you were.                                                               |
| 07:46      | Like I said, I couldn't be happier for these applications that they're going to continue                  |
| 07:51      | to exist in Alex's memory, and not only like I said, you guys aren't just planning to maintain            |
| 07:58      | them, but you're maintaining to grow upon them, and that's awesome.                                       |
| 08:03      | One other thing, we do have Automator's Max, which is the extended ad-free version of the                 |
| 08:08      | show.                                                                                                     |
| 08:09      | As Rose talked about earlier today, we're going to be talking about automating [[Notion]].                    |
| 08:13      | I have, for strange reasons, suddenly found myself using [[Notion]] daily, so I want to build                 |
| 08:18      | an Automation, and I thought it'd be fun to talk about my thoughts about automating going                 |
| 08:23      | in cold.                                                                                                  |
| 08:24      | We're going to talk about that in the extended version today, so that'll be fun.                          |
| 08:27      | Today's show is all about Vanilla [[HomeKit]], and I kind of like this topic.                                 |
| 08:33      | I'm a little nervous by it, so to give you a little background, we've covered [[HomeKit]]                     |
| 08:37      | several times, but Rose and I very quickly like to go down the rabbit hole of [[HomeKit]].                    |
| 08:42      | How far can we go with it?                                                                                |
| 08:44      | Both of us are [[Home Assistant]] owners and users, and I got an email from a listener asking                 |
| 08:49      | what she can do with [[HomeKit]] even though, and to quote her email, what can I do with                      |
| 08:53      | [[HomeKit]] even though I don't have [[Home Assistant]] and all the other toys you and Rose talk about?           |
| 08:58      | That's what she said, and I thought, you know what?                                                       |
| 09:00      | She's right.                                                                                              |
| 09:01      | We don't stop at that intermediate level of [[HomeKit]] enough, because we're Automators,                     |
| 09:06      | we want to go deeper, but I know we have listeners that don't want to get the extra                       |
| 09:10      | toys and don't want to deal with [[Home Assistant]], and let's do a [[HomeKit]] show where we talk                |
| 09:16      | about [[HomeKit]] in its vanilla form, and honestly, that's what the vast majority of people are              |
| 09:22      | doing with [[HomeKit]], so of course, we should cover it, and I thought we'd do that today.                   |
| 09:27      | Yeah.                                                                                                     |
| 09:28      | Yeah.                                                                                                     |
| 09:29      | The only thing I'm going to say about this is, it's kind of like dipping your toe into                    |
| 09:35      | the shallow end of the swimming pool with this.                                                           |
| 09:37      | You're going to start out with some things, and then at some point, you're going to run                   |
| 09:42      | into a limitation, and then you're going to run into another limitation, and suddenly                     |
| 09:45      | it's going to feel like it's all limitations.                                                             |
| 09:48      | When that happens, remember, that's not necessarily a smart home in general.                              |
| 09:53      | There are obviously some things that smart homes are not yet capable of doing.                            |
| 09:56      | I've yet to figure out actually how to get an automated jeep that's not creepy, who can                   |
| 10:02      | just deal with all of the life things for me and produce food at exactly the time that                    |
| 10:07      | I need exactly what I want without me actually voicing anything, but there's a lot that smart             |
| 10:15      | home can do, but when you start running into limitations, if you're just using [[HomeKit]],                   |
| 10:20      | be prepared for at least some of that to be the fact that you're just using [[HomeKit]] and                   |
| 10:26      | you're not involving anything else.                                                                       |
| 10:28      | With that said, I'm also going to say, if you're using [[HomeKit]], try and just do everything                |
| 10:33      | in [[HomeKit]], and we'll talk about that a little bit more as we go.                                         |
| 10:37      | There's a lot that you can do in [[HomeKit]], and it's got a lot better, especially with                      |
| 10:40      | iOS 17, I have to say.                                                                                    |
| 10:42      | Some of the automations, like when you convert them to shortcuts, they've got a lot more                  |
| 10:46      | powerful, so that's always a good sign.                                                                   |
| 10:49      | Yeah, and I think that's where we start.                                                                  |
| 10:51      | What is the state of [[HomeKit]] today?                                                                       |
| 10:54      | And granted, we're right in this transition period between iOS 16 and 17, but I would                     |
| 11:00      | agree with Rose.                                                                                          |
| 11:01      | I think it's actually a lot better than it used to be.                                                    |
| 11:04      | People does understand most people don't go beyond [[HomeKit]], so they've been adding features               |
| 11:12      | to just tack onto Rose's caveat above.                                                                    |
| 11:16      | I think the real frustration with [[HomeKit]] becomes with the automation.                                    |
| 11:20      | It's not turning the lights off and on.                                                                   |
| 11:22      | You can do that easy enough with [[HomeKit]], but the conditional automation and the stuff                    |
| 11:26      | that we like to talk about, you just don't get that with this, but that's okay if you                     |
| 11:31      | just want to get your toes wet and spend some time doing that and just get comfortable with               |
| 11:36      | that before you take it to the next level, or like my family, like even though I have                     |
| 11:42      | all this extra stuff, they don't do any of that stuff.                                                    |
| 11:45      | They just open [[HomeKit]], and that's it for them, so how can we help them make it a better                  |
| 11:51      | experience?                                                                                               |
| 11:52      | One of the things I would say when it comes to friends and family members on this stuff                   |
| 11:57      | is it's super tempting to be like, oh, yeah, I'm going to go for smart lights.                            |
| 12:00      | It's going to be great, and then you put a smart light bulb in, and then somebody comes                   |
| 12:05      | along and they flick the button, and it doesn't work, because you set it up hopefully so that             |
| 12:12      | when power disappears from the smart light, it restores its previous power state, because                 |
| 12:17      | otherwise you get turned on if there's a power flicker at 3 AM, trust me.                                 |
| 12:21      | Restore power state is really, really good for anything light-based, but the problem                      |
| 12:25      | with that is that's an instead-off, so you've taken something away from folks.                            |
| 12:30      | You have to think about these things if there's going to be other people involved and rather              |
| 12:35      | than instead.                                                                                             |
| 12:37      | It's not instead of using the light switch, you pull out your phone or talk to a home                     |
| 12:41      | pod or there's a motion sensor, it's as well as a light switch.                                           |
| 12:46      | You can talk to a HomePod, pull out your phone or wave it a motion sensor, hopefully                     |
| 12:52      | the motion sensor would just see you, and I feel like that's always a good place to                       |
| 12:56      | start regardless of what smart home stuff you're doing, and it's not instead for all                      |
| 13:03      | of this.                                                                                                  |
| 13:04      | What do you see as the current status of [[HomeKit]] and [[Matter]]?                                             |
| 13:09      | We've talked about [[Matter]] on the show before, it's the universal standard that the industry               |
| 13:13      | has decided that nobody's going to own all of this with their standard, so they've come                   |
| 13:17      | up with a common standard, but as people are interested in this, how much does [[Matter]] matter              |
| 13:24      | right now?                                                                                                |
| 13:25      | Well, first, before I say that, I'm just going to mention [[Thread]] as well because I feel like              |
| 13:30      | people kind of feel like [[Matter ]]is [[Thread]] and it isn't.                                                   |
| 13:34      | If you think of [[Thread]], [[Thread]] is basically kind of like Wi-Fi in some ways or Bluetooth.                 |
| 13:43      | It's an advancement on Bluetooth more or less, but that is like a protocol for things                     |
| 13:49      | to talk to each other.                                                                                    |
| 13:50      | Just like your Mac can use Wi-Fi to connect to the Internet, it could also connect via                    |
| 13:55      | Ethernet.                                                                                                 |
| 13:56      | Ethernet's a different protocol, but it's still going to get onto the Internet.                           |
| 13:59      | [[Matter]] is the thing that says, and here is how the Internet works more or less.                           |
| 14:07      | When it comes to [[Matter]], I feel like [[Matter]] is actually, it's getting more and more important             |
| 14:12      | as far as home kit is concerned, especially with regards to the fact that you can then                    |
| 14:17      | bring devices into home kit that weren't previously home kit compatible by buying a [[Matter]] Hub            |
| 14:23      | or using a [[Matter]] Hub and having those devices connected to it.                                           |
| 14:28      | I have [[SwitchBot Bot\|SwitchBot]], I have [[SwitchBot Curtain Opener\|SwitchBot curtains]], and previously I was not able to get those                   |
| 14:35      | into home kit natively.                                                                                   |
| 14:37      | I would have had to go through [[Homebridge]], which is what I did originally, and then later                 |
| 14:43      | I moved to using [[Home Assistant]] for that.                                                                 |
| 14:45      | Now I can buy a [[SwitchBot Hub\|SwitchBot Smart Hub]] and add that to the [[Matter]]-based one.                                 |
| 14:53      | It's got a little temperature dial and temperature screen and everything built into it, which             |
| 14:57      | is very nice.                                                                                             |
| 14:58      | I can connect that to the curtains and connect that to home kit, and voila, my curtains are               |
| 15:03      | now in home kit without me having to use Homebridge or [[Home Assistant]].                                    |
| 15:06      | I feel like it's incredibly important from that sense, also incredibly important for                      |
| 15:12      | multi-protocol households, protocol is possibly the wrong word here, but say, for example,                |
| 15:17      | your household has got some of the Echo Smart speakers in it, and you also have iPhones.                  |
| 15:24      | Well, if you want to be able to connect things to both your home kit home, but also be able               |
| 15:30      | to talk to the Echo speaker that's in the kitchen, well, [[Matter]] means that you can                        |
| 15:36      | do that because [[Matter\|Matter's]] protocol requires that devices can connect to more than one                      |
| 15:41      | thing.                                                                                                    |
| 15:42      | It can connect to multiple sources or controllers.                                                        |
| 15:46      | I don't really know what the right term for that is, but either way, it can connect to                    |
| 15:50      | multiple setups so that you can have it both in A-L-E-X-A, I'm not going to say the word because              |
| 15:55      | I'll always trigger a bunch of smart speakers, as well as home kit stuff.                                 |
| 15:59      | That is really great, and also some of those Echo Smart speakers have [[Matter]] Hubs built                   |
| 16:04      | in, which means that you can connect stuff to those and then share it to home kit, kind                   |
| 16:08      | of amazing really.                                                                                        |
| 16:10      | I think [[Matter]] matters a lot.                                                                             |
| 16:13      | That doesn't mean you have to rush out and replace everything that you've already got.                    |
| 16:16      | Absolutely not.                                                                                           |
| 16:17      | Don't need to do that, but keep an eye out for things like hubs and things like that,                     |
| 16:22      | which will allow you to connect devices that were somewhat smart before into home kit and                 |
| 16:28      | make them much smarter.                                                                                   |
| 16:29      | Yeah, I feel like what [[Matter]] does is it makes the case for a vanilla home kit even better                |
| 16:35      | in some ways because it just makes it easier to connect new things.                                       |
| 16:39      | As before, you'd have to go to something like [[Home Assistant]] to make a third-party device                 |
| 16:43      | work.                                                                                                     |
| 16:44      | Well, hopefully that will be less necessary going into the future as [[Matter]] takes off                     |
| 16:49      | and becomes more universal, and we're already seeing that effect.                                         |
| 16:52      | It's been what about a year now, and I feel like in another couple of years it's going                    |
| 16:56      | to be really set in that all devices are going to be [[Matter]] devices.                                      |
| 17:00      | Yeah.                                                                                                     |
| 17:01      | Yeah.                                                                                                     |
| 17:02      | At the moment, K is fully formed.                                                                    |
| 17:05      | They are still working on it, so it doesn't support things like cameras and so on yet.                    |
| 17:09      | That doesn't mean that cameras won't come.                                                                |
| 17:11      | They have said, and they're obviously working on this, that cameras are coming, but it means              |
| 17:15      | that, for example, that new Aqara doorbell that I bought a month or so ago, which we'll                   |
| 17:19      | get to a little bit later on the show, that doesn't support K yet.                                   |
| 17:24      | It's not that it can't support [[Matter]], it's just that the [[Matter]] protocol isn't ready                     |
| 17:28      | for it.                                                                                                   |
| 17:29      | Yeah.                                                                                                     |
| 17:30      | I'm crossing my fingers, I'm pretty certain that one is going to support it.                              |
| 17:32      | Aqara have been very good at supporting [[Matter]] face things, but yeah, it's not there for                  |
| 17:40      | everything yet, but it's coming.                                                                          |
| 17:43      | Then lastly, before we get into the weeds, we're not going to bang your head over the                     |
| 17:48      | whole time, but what are the things that people get from going to the next level, like Home               |
| 17:53      | Assistant and the other toys, that they don't get with [[HomeKit]]?                                           |
| 17:58      | For me, I'll tell you that it's automation, really, is that the automation stuff just                     |
| 18:03      | gets better when you can have a more complex automation logic, and [[HomeKit]] has a very simple              |
| 18:10      | logic.                                                                                                    |
| 18:11      | It's like there's a trigger and there's an action, and that's pretty much it.                             |
| 18:14      | When you get into something like [[Home Assistant]], you get multiple triggers, multiple actions.             |
| 18:19      | It really is next level compared to the basics of [[HomeKit]].                                                |
| 18:24      | What would you add to that, Rose?                                                                         |
| 18:26      | I would add not only that, but it's logging.                                                              |
| 18:30      | iOS 17 has added logging to [[HomeKit]] for security devices.                                                 |
| 18:36      | That's it.                                                                                                |
| 18:37      | I can see, for example, I have some smart locks and so on.                                                |
| 18:40      | I can see their history, and when I tap on one of the locks and go into the settings,                     |
| 18:47      | then I can specify that I want the information locked for a month.                                        |
| 18:56      | That's set up, actually, on your home settings, if folks are looking in the beta.                         |
| 19:00      | It took me a little while to find it the other day, so you tap on three dots in the right                 |
| 19:03      | hand corner of the Home app, and then it's under Home Settings, if you're running iOS                     |
| 19:08      | 17.                                                                                                       |
| 19:09      | That's an important caveat.                                                                               |
| 19:10      | You need to be running iOS 17, and then, yeah, you can go and dive in down there under                    |
| 19:15      | safety and security, but this activity history is limited to things like garage doors, smart              |
| 19:21      | locks, home security systems, and that's it.                                                              |
| 19:24      | There's nothing else.                                                                                     |
| 19:25      | Why did this light turn on two minutes ago?                                                               |
| 19:28      | That is a question I have had to answer more than once, and I remember distinctly when                    |
| 19:32      | I first got into smart home stuff being woken up at 3 AM because all the lights in the house              |
| 19:36      | turned on, and then I just go back to sleep, and the lights turned on, and I didn't know                  |
| 19:40      | what was going on.                                                                                        |
| 19:42      | I took a guess that it was something related to an automation of me coming home, was turning              |
| 19:49      | the lights on, and disabled that automation in [[HomeKit]], or just deleted it because it                     |
| 19:54      | was 3 o'clock in the morning and I was cranky, and then suddenly the lights stopped turning               |
| 19:58      | on and I was able to go back to sleep, but trying to figure out what happened or why                      |
| 20:03      | something happened is, or why something didn't happen as well.                                            |
| 20:08      | That can be really difficult, and that's one of the reasons why I love [[Home Assistant]],                    |
| 20:12      | and also fake devices.                                                                                    |
| 20:14      | I don't have a doorbell on my outside French doors, like a smart doorbell, because I don't                |
| 20:19      | want to put a camera on what is essentially a public footpath that people can walk on.                    |
| 20:25      | I could do it, and I'm sure most people wouldn't care because it's going to pick them up for              |
| 20:29      | like a couple of seconds as they walk past, or there were some kids running around early                  |
| 20:33      | today.                                                                                                    |
| 20:34      | It might have caught them a few times.                                                                    |
| 20:36      | Probably fine, but I personally just don't like the idea of sticking a camera out there                   |
| 20:40      | when it's not necessary, so instead, what I've done is I've got a smart button stuck                      |
| 20:45      | out there, which when I press it, as far as [[HomeKit\|HomeKit's]] concerned, it's a doorbell, so                      |
| 20:49      | I get the chime on my HomePods and everything, and I just stuck a fake picture in there.                 |
| 20:52      | It literally just says the word doorbell as an image, and [[HomeKit]] sees that as the camera,                |
| 20:59      | and [[Home Assistant\|Home Assistant's]] just there going, by the way, [[HomeKit]], hey, here's a doorbell.                       |
| 21:03      | This is a doorbell as far as you're concerned.                                                            |
| 21:05      | Have fun with it.                                                                                         |
| 21:06      | Being able to do that and not having a million and one hubs, hubs are great.                              |
| 21:12      | I'm going to say that.                                                                                    |
| 21:14      | If you've got the choice between a Wi-Fi and a hub device, you want hubs.                                 |
| 21:19      | One hub with 20 smart bulbs on it is much better than 20 smart bulbs, trying to cram                      |
| 21:23      | onto your probably not ready for this Wi-Fi, but at some point, you end up with the Aqara                 |
| 21:30      | hub, the IKEA hub, the Hue hub, this other hub that came from this other company.                         |
| 21:36      | 60 different hubs or something, it can feel like being able to consolidate that down to                   |
| 21:42      | [[Home Assistant]] with [[Zigbee]] and Z-Wave and [[Thread]] support is very, very nice.                              |
| 21:50      | That's what I really get out of it.                                                                       |
| 21:52      | I have a funny story about [[Home Assistant]] and automation.                                                 |
| 21:58      | I think I'll just leave it with this before we move on, but I have to share it with somebody,             |
| 22:02      | so nobody's listening, right?                                                                             |
| 22:05      | So Rose, we talked about this before.                                                                     |
| 22:08      | The refrigerator has an alarm on if you leave the door open.                                              |
| 22:11      | The alarm is the exact pitch of my tinnitus, so I can be standing right next to it and                    |
| 22:15      | not hear it going off.                                                                                    |
| 22:17      | I came up with this great idea where if the door is open for so long, and this is something               |
| 22:22      | you get with something like [[Home Assistant]], you don't get with [[HomeKit]], it turns on lights                |
| 22:27      | in certain parts of the house, so I basically have a visual reminder to say, oh, the refrigerator         |
| 22:32      | door is open.                                                                                             |
| 22:33      | I need to go down and shut it.                                                                            |
| 22:34      | One of the lights was the bedroom, because I'm upstairs sometimes, and then if the door                   |
| 22:40      | is open, I want to make sure I shut it for good a bit, but it turns red.                                  |
| 22:44      | And what was happening is, because we're now in the time of year where it gets darker earlier,            |
| 22:50      | that would go on, and I wouldn't realise it, and a neighbour asked me, Dave, what's going                  |
| 22:57      | on that your bedroom light's always red?                                                                  |
| 22:59      | I'm like, wait a second, people are starting to talk about me, so I change it to blue, so                 |
| 23:05      | I feel like this.                                                                                         |
| 23:06      | Well, I mean, what you could do with that is also have it send you a push notification                    |
| 23:10      | that says, you know, the refrigerator door is open, close it.                                             |
| 23:13      | That does all of that.                                                                                    |
| 23:14      | And what I should have done is have it reset for me.                                                      |
| 23:16      | I didn't set it to reset.                                                                                 |
| 23:18      | Oh, yeah.                                                                                                 |
| 23:19      | Yeah, that's the trick.                                                                                   |
| 23:20      | Yeah, having it go back to what it was before by creating an on-the-fly scene, as it were.                |
| 23:25      | But if you want to be scandalous in your neighbourhood, automation can make that possible, too.            |
| 23:29      | Same.                                                                                                     |
| 23:30      | Well, there you go.                                                                                       |
| 23:31      | That seems pretty good to me.                                                                             |
| 23:35      | This episode of Automators is brought to you by Vitally.                                                   |
| 23:39      | Customer success teams today are facing a problem.                                                        |
| 23:41      | How do they connect customer data back to their work?                                                     |
| 23:43      | Vitally changes that.                                                                                      |
| 23:44      | It's a new kind of customer success platform, an all-in-one collaborative workspace that                  |
| 23:48      | combines your customer data with all the capabilities you expect from today's project management          |
| 23:52      | and work platforms.                                                                                       |
| 23:54      | Because it's designed for today's customer success team, that's why Vitally operates                       |
| 23:57      | with unparalleled efficiency, improves net revenue retention, and delivers best-in-class                  |
| 24:02      | customer experiences.                                                                                     |
| 24:03      | It's the solution to helping your customer success team keep a better pulse on your customers,            |
| 24:08      | which maximises productivity, visibility, and collaboration.                                              |
| 24:11      | You can boost your bottom line by driving more revenue per customer with Vitally.                          |
| 24:15      | And if you take a qualified demo of Vitally, get a free pair of AirPods Pro.                               |
| 24:19      | So if you're a customer success decision maker actively seeking CS solutions, working                     |
| 24:24      | at a B2B software service company with 50 to 1,000 employees, and you're willing to                       |
| 24:29      | explore changing customer success platforms if you already have one in place, schedule                    |
| 24:32      | your call by visiting vitally.io.automators and get that free pair of AirPods Pro.                        |
| 24:39      | That's vitally.io.automators for a Pete free pair of AirPods Pro when you schedule a qualified            |
| 24:45      | meeting.                                                                                                  |
| 24:46      | Our thanks to Vitally for their support of this show and relay FM.                                         |
| 24:49      | All right, Rose, let's get into the basics of [[HomeKit]].                                                    |
| 24:54      | And some of this stuff you may already know, but stick with us.                                           |
| 24:56      | We're going to get deeper as we go through the outline.                                                   |
| 24:58      | But just as a starting point for someone like the listener who wrote in, [[Apple]] doesn't make               |
| 25:03      | the [[HomeKit]] hardware.                                                                                     |
| 25:04      | I think that's something people are mistaken because, you know, it doesn't have the [[Apple]]                 |
| 25:07      | thing.                                                                                                    |
| 25:08      | They always make the whole widget.                                                                        |
| 25:09      | When it comes to [[HomeKit]], that's not true.                                                                |
| 25:13      | They make the phone and they make some of the [[Apple]] hardware that connects to [[HomeKit]]                     |
| 25:18      | devices, but the actual making of the light switches and the light bulbs and the security                 |
| 25:23      | cameras, they've left that to other people.                                                               |
| 25:26      | And then it's up to them to support the [[HomeKit]] protocol.                                                 |
| 25:30      | So the thing you need to do if you want to get into basic [[HomeKit]], vanilla [[HomeKit]],                       |
| 25:34      | you need to buy a box that's got a doodad in it that says [[HomeKit]] on the box.                             |
| 25:39      | That's where it starts.                                                                                   |
| 25:40      | Yeah.                                                                                                     |
| 25:41      | Well, I mean, you could also argue that it starts with a [[Apple TV]] or a HomePod as well.                   |
| 25:47      | Because in order for your [[HomeKit]] home to be a properly smart home, you are going to                      |
| 25:52      | need a device that lives at home to be the controller or one of the controllers, realistically,           |
| 26:00      | because if you have more than one of these, then they sort of go around and around Robin.                 |
| 26:04      | You used to be able to, and I emphasise used to here, use an iPad.                                        |
| 26:10      | In my experience, anybody who used an iPad found themselves in for a world of trouble                     |
| 26:14      | when it came to [[HomeKit]] stuff, which is probably one of the reasons why [[Apple]] has removed this            |
| 26:18      | feature.                                                                                                  |
| 26:20      | And if you previously set up [[HomeKit]] and you had an iPad as a hub, then you may not have                  |
| 26:27      | been able to upgrade to the new [[HomeKit]] architecture.                                                     |
| 26:31      | So you would need to remove the iPad as [[HomeKit]] hub and then update that.                                 |
| 26:35      | But it also took it away in the iPadOS settings as well.                                                  |
| 26:38      | But yeah, so you'll need either a HomePod or an [[Apple TV]] or more than one of those to                     |
| 26:43      | be a [[HomeKit]] hub.                                                                                         |
| 26:45      | And then, yeah, some kind of [[HomeKit]] widgety-wadgety.                                                     |
| 26:48      | It could be a [[HomeKit]] light, it could be a [[HomeKit]] camera, doorbell, it could just be                     |
| 26:53      | a sensor, you know, for example, a leak sensor.                                                           |
| 26:56      | If you are worried about, I had something, actually, a couple of weeks ago, David, or                     |
| 27:01      | last month or a little bit longer ago, there was water underneath my kitchen sink.                        |
| 27:06      | Very concerning.                                                                                          |
| 27:07      | Yeah, it was very concerning.                                                                             |
| 27:09      | And I have a flood sensor under there.                                                                    |
| 27:11      | So the first thing that I knew about it was I got, like, alerts on all of my devices.                     |
| 27:15      | Everything went off and was like, leak detected.                                                          |
| 27:17      | And I'm like, oh, my God, wow, that worked.                                                               |
| 27:20      | Yeah, that's what we want though, right?                                                                  |
| 27:22      | It was one of those simultaneously brilliant and terrifying moments, because it's like,                     |
| 27:25      | there's water under the kitchen sink, oh no.                                                              |
| 27:27      | But because everything was going like, oh no, more or less, it did a slightly terrifying                  |
| 27:34      | critical alert sound.                                                                                     |
| 27:35      | But yeah, I knew there was water under the kitchen sink.                                                  |
| 27:38      | I found out that somebody, who whenever they installed the kitchen like 12 years ago, put                 |
| 27:44      | a washer on back to front.                                                                                |
| 27:46      | That was it.                                                                                              |
| 27:47      | And it took until now to start leaking.                                                                   |
| 27:49      | So I'm feeling pretty happy about my kitchen, to be honest.                                               |
| 27:52      | My kitchen is fine.                                                                                       |
| 27:53      | It was a very small leak.                                                                                 |
| 27:54      | I was able to mop it up and stick a tray under there until everything got sorted out.                     |
| 28:00      | And yeah, it's all fine, but you could just start with a sensor if you wanted.                            |
| 28:04      | If you want to know if the door is open or closed, then yeah, you can just start with                     |
| 28:08      | a sensor.                                                                                                 |
| 28:09      | And yeah, you just need something home kit.                                                               |
| 28:12      | You may need a hub to go with the something home kit.                                                     |
| 28:14      | For example, if you buy a Hue light bulb, unless it's one of the Bluetooth ones, which                    |
| 28:19      | I'm not sure I really recommend Bluetooth is never great for smart home devices.                          |
| 28:26      | I would much prefer [[Zigbee]], Z-Wave, [[Thread]], or even Wi-Fi over Bluetooth.                                 |
| 28:32      | But yeah, you might need a hub.                                                                           |
| 28:35      | It's certainly if you're buying like an IKEA light or whether the IKEA sensors or buttons,                |
| 28:44      | then you will need one of their hubs.                                                                     |
| 28:46      | The Dirigera is the new hub with [[Matter]] support.                                                          |
| 28:50      | Aqara have hubs.                                                                                          |
| 28:51      | They have a hub that's a camera.                                                                          |
| 28:53      | So if you buy the camera, it's also a hub.                                                                |
| 28:55      | That's really nice.                                                                                       |
| 28:56      | Yeah.                                                                                                     |
| 28:57      | So just pick something home kit.                                                                          |
| 29:00      | Make sure if it needs a hub, you grab the hub.                                                            |
| 29:02      | And then you can start connecting it.                                                                     |
| 29:05      | And it pretty much just works.                                                                            |
| 29:08      | Like if you try and scan the code that's on the device, it'll have like a little home                     |
| 29:12      | next to it and some eight characters of various kinds.                                                    |
| 29:17      | Then yeah, if you try and scan that with your camera, even it'll just be like, hey, this                  |
| 29:20      | is home kit.                                                                                              |
| 29:21      | I'll just go and open the home app and start setting that up for you.                                     |
| 29:25      | And off you go.                                                                                           |
| 29:26      | It walks you through it and helps you get everything working.                                             |
| 29:29      | Yeah.                                                                                                     |
| 29:30      | In fact, can we just take a break there and go back to the communications protocols, Wi-Fi,               |
| 29:37      | Bluetooth.                                                                                                |
| 29:39      | We glance over that often on the show.                                                                    |
| 29:41      | And I think for people getting into this, you need to understand that there are different                 |
| 29:45      | protocols for all the stuff to talk to each other.                                                        |
| 29:47      | And they have different costs and benefits.                                                               |
| 29:51      | Like Bluetooth is easy, but weak and inconsistent.                                                        |
| 29:54      | I'm with Rose.                                                                                            |
| 29:56      | That's the worst one to use.                                                                              |
| 29:57      | A lot of them go for Wi-Fi because it's easy and it is better than Bluetooth.                             |
| 30:03      | But the problem with Wi-Fi is as you add more and more devices, they add a lot of Wi-Fi                   |
| 30:07      | traffic to your Wi-Fi signal.                                                                             |
| 30:10      | And that can make them inconsistent and slower and not as good.                                           |
| 30:15      | So I think with both, and I think under Rose's tutelage, I've come to learn this.                         |
| 30:20      | If there's a [[Zigbee]] hub, if there's a device that comes with a hub, I almost welcome it                   |
| 30:25      | because maybe it costs us a little bit more, but you know the communications between the                  |
| 30:30      | device and the system is going to be rock solid and it's just more consistent.                            |
| 30:35      | So I almost lean toward hubs more than away from them.                                                    |
| 30:39      | Yes, definitely.                                                                                          |
| 30:41      | And you might be thinking, oh, but then that's another thing to plug in.                                  |
| 30:45      | But if you, and I have to set stuff up and I have to connect it with the hub and so on.                   |
| 30:48      | But if you think about, say for example, your average house, I don't remember how many rooms              |
| 30:54      | are in your house, David.                                                                                 |
| 30:55      | I've visited, but I honestly didn't spend my time there counting rooms.                                   |
| 30:58      | Yeah.                                                                                                     |
| 30:59      | Three bedrooms.                                                                                           |
| 31:00      | Yeah.                                                                                                     |
| 31:01      | So you've got three bedrooms plus, I'm guessing you've got a couple of bathrooms in there.                |
| 31:05      | You've got hallways, landings, you know, kitchen, dining area, all of that stuff.                         |
| 31:10      | You've got loads of rooms.                                                                                |
| 31:11      | Okay.                                                                                                     |
| 31:12      | I live in a pretty tiny, to be honest, two bedroom flat or apartment.                                     |
| 31:17      | Okay.                                                                                                     |
| 31:18      | I still have five rooms, okay.                                                                            |
| 31:20      | If you go kitchen, living room, bedroom, office, bathroom, plus I have my hallway.                        |
| 31:26      | And so that's six rooms and my living room actually has two overhead lights.                              |
| 31:29      | Okay.                                                                                                     |
| 31:30      | So say that I just put smart lights in each of those rooms.                                               |
| 31:34      | That's already seven more devices connecting to my Wi-Fi.                                                 |
| 31:37      | Yeah.                                                                                                     |
| 31:38      | But if I make those into Hue lights, that's one device connecting to my network, which                    |
| 31:43      | it could theoretically do over Wi-Fi.                                                                     |
| 31:45      | I always choose ethernet when I can.                                                                      |
| 31:47      | And then those seven devices connect to the hub.                                                          |
| 31:52      | And unless you have an enterprise-grade network, which, when I say enterprise-grade, I mean               |
| 31:57      | like the kind of thing that a really large business is running, not like something that                   |
| 32:02      | somebody sticks a label on and says, oh yeah, it's enterprise-grade, you're probably going                |
| 32:07      | to run into problems if you go with a whole bunch of Wi-Fi devices.                                       |
| 32:10      | You know, there are some things that are fine on Wi-Fi cameras, doorbells, that sort of thing,            |
| 32:14      | you know, that you won't find a [[Zigbee]] camera, doesn't exist because the [[Zigbee]] protocol                  |
| 32:19      | isn't big enough basically for videos and images.                                                         |
| 32:24      | But you'll find some things which basically kind of only exist as Wi-Fi.                                  |
| 32:28      | And that's fine.                                                                                          |
| 32:29      | But if you've got the choice of, you know, something that has a hub.                                      |
| 32:33      | So for example, David, you're a big fan of the [[Lutron]] Caseta light switches, and those                    |
| 32:39      | come with a hub.                                                                                          |
| 32:40      | And so all of your light switches just connect to one hub, and then that just works.                      |
| 32:45      | And that's going to be a lot less painful on your network.                                                |
| 32:49      | And also, that means you're going to have much fewer home kit problems.                                   |
| 32:52      | Often when I hear about people with home kit problems, the answer is the network.                         |
| 32:55      | It takes a very long time before people will admit it is the network.                                     |
| 32:59      | But it's like 95% of cases, something is wrong with the network that home kit is not happy                |
| 33:05      | with.                                                                                                     |
| 33:06      | It's devices that don't connect to the internet network and just connect to, you know, their              |
| 33:10      | own hub.                                                                                                  |
| 33:11      | And then there's one connection between that and home kit, essentially, which is to the                   |
| 33:16      | internet, then the better.                                                                                |
| 33:18      | Yeah, exactly.                                                                                            |
| 33:19      | And that's why [[Lutron]] was such a big win for me.                                                          |
| 33:22      | I didn't even really realise why I liked it so much until my friend Robert said, oh,                      |
| 33:29      | no, they've got their own bandwidth.                                                                      |
| 33:32      | It's just rock solid because, you know, they're on that, that hub, and it just, that solved               |
| 33:38      | the problem.                                                                                              |
| 33:39      | And that's why everybody who discovers [[Lutron]] is like, oh, these are the greatest lights                  |
| 33:42      | in the world.                                                                                             |
| 33:43      | They just turn on when you push the button, and that's what you want, right?                              |
| 33:47      | But that, that, so that's a part of home kit.                                                             |
| 33:49      | Even though you think you're in vanilla home kit, you're not doing anything fancy.                        |
| 33:52      | You can still torpedo yourself just because you've got a bunch of Bluetooth devices that                  |
| 33:56      | just choose not to work.                                                                                  |
| 33:58      | So you think you're doing everything right.                                                               |
| 33:59      | If you look at the screenshots and everything, you're doing everything right, but the thing               |
| 34:04      | just chooses not to work.                                                                                 |
| 34:06      | Exactly.                                                                                                  |
| 34:07      | And, you know, it's, it's surprisingly easy to be like, smart home sucks when, you know,                  |
| 34:13      | you've accidentally set yourself up with, you know, some Bluetooth light bulbs and so                     |
| 34:16      | on, which you would think would work fine, but, you know, and anything like that, you                     |
| 34:20      | know, wireless in general is never going to be as stable and secure as wired unless the                   |
| 34:26      | wire for some reason has been chewed on by, you know, some over enthusiastic bunny or similar.            |
| 34:32      | You know, so the more, you know, Wi-Fi wireless in particular is very susceptible to interference.        |
| 34:38      | So the more of that that you've got, the worse it's going to be.                                          |
| 34:41      | If things can be on their own, like set up dedicated just for this network, it's going                    |
| 34:46      | to be a lot easier to just control stuff and set it up and be happy with it.                              |
| 34:52      | So, you know, by all means, do try something out if you're buying your first, you know,                   |
| 34:56      | device of, you know, by all means go for Wi-Fi or similar.                                                |
| 34:59      | But at the same time, if you think that there's any possibility, even the slightest minuscule             |
| 35:05      | chance that you're going to dip your toe in the water and go, oh, this is fun.                            |
| 35:08      | I want more of this.                                                                                      |
| 35:11      | Definitely consider, you know, looking at something with a hub and going from there.                      |
| 35:15      | Because yeah, you're going to have a whole bunch of things running around your home.                      |
| 35:19      | And if, you know, these things connect through this hub and if this hub is unplugged, that's              |
| 35:23      | why versus this light sometimes doesn't work, but this other one in the same room usually                 |
| 35:27      | works.                                                                                                    |
| 35:28      | What's the difference between the two apart from the four feet in between them?                           |
| 35:31      | You're going to drive yourself crazy.                                                                     |
| 35:33      | Also let's talk for a minute about third party apps, because as you get into the home kit                 |
| 35:39      | world, one of the things they'll be surprised to learn is that all of these vendors that                  |
| 35:43      | make the things, [[Lutron]] as an example, they have apps, but then you have the home kit                     |
| 35:48      | app and the pairing process happens in the home kit app.                                                  |
| 35:52      | You don't really go into the third party app to make all this work, but then you still                    |
| 35:57      | kind of need it.                                                                                          |
| 35:58      | And it's like, could you explain Rose, how you, what your thought is about these third                    |
| 36:03      | party apps and where you use them and don't use them?                                                     |
| 36:06      | Yeah, basically my personal opinion on third party apps for things like this, and [[Apple]]                   |
| 36:10      | are really working hard to bring things like updates to devices into home kits so that                    |
| 36:15      | you don't need to use, for example, the Hue app or the [[Lutron]] app to update stuff.                        |
| 36:18      | You can do it through home kit.                                                                           |
| 36:20      | It's not 100% there yet.                                                                                  |
| 36:21      | So you may slash probably will need the third party app for these things.                                 |
| 36:26      | But my personal opinion on this is you can set stuff up in like the Hue app and so on.                    |
| 36:33      | Like if you need to pair any light bulb to the Hue hub, go for it through the Hue app.                    |
| 36:37      | That's going to be much easier than trying to do it through home kit.                                     |
| 36:39      | I don't actually remember how to do that through home kit, to be honest, it's been a while.               |
| 36:44      | But you can, yeah, so you can do that and then forget that that app exists until you                      |
| 36:50      | need it to install an update.                                                                             |
| 36:52      | Don't uninstall it necessarily, but certainly don't use it to control things and set up                   |
| 36:58      | automations and so on.                                                                                    |
| 37:00      | Because if you think of it as though you've got, you know, three different robots working                 |
| 37:05      | on, you know, assembling something, and they know that, you know, there's got to be this                  |
| 37:11      | thing over here and this thing over here and this thing over here.                                        |
| 37:14      | One of them, you know, starts working on attaching, I don't know, say an arm to another robot             |
| 37:18      | and it brings it over and it doesn't quite fit.                                                           |
| 37:19      | So it takes it off to another table to, to, you know, try and adjust it and another one                   |
| 37:23      | brings in a new arm and then takes that off to a table.                                                   |
| 37:25      | You've got two things trying to do the same thing, at least in theory, only it turns out                  |
| 37:29      | one of them is putting left arm on the left side and one of them is putting the right                     |
| 37:32      | arm on the left side.                                                                                     |
| 37:34      | That's what's going to happen if you set up automations in more than one app.                             |
| 37:37      | You absolutely at some point will accidentally program, when this thing turns on, like do                 |
| 37:42      | this and then in the other app you'll be like, when this thing turns on, turn it off again.               |
| 37:46      | And then you'll have something going weird somewhere, almost guaranteed.                                  |
| 37:50      | So by all means, use an app to set stuff up, update things, but don't use it for automations              |
| 37:56      | and certainly don't share it with like your family members and, and, and co-residents                     |
| 38:02      | for controlling things.                                                                                   |
| 38:03      | If you make them install 17 different apps on your phone, even if they love you and they                  |
| 38:07      | are a tech nerd, they're going to be like, why is this so complicated, can't this be                      |
| 38:11      | simpler?                                                                                                  |
| 38:12      | Yeah.                                                                                                     |
| 38:13      | I 100% agree.                                                                                             |
| 38:14      | So what I do is when the clocks change, I have a whole bunch of tech stuff I do twice                     |
| 38:18      | a year when the clocks change and one of them is I open those apps to see if there's updates              |
| 38:23      | available and otherwise I completely ignore them.                                                         |
| 38:26      | And I really wish that we could consistently get those updates through the home app and                   |
| 38:30      | I didn't even have to install them because I feel like having them on my phone is like                    |
| 38:36      | a potential for a problem and I don't even want it there.                                                 |
| 38:39      | You know, and, but, so I, I try to open them as infrequently as possible, but occasionally                |
| 38:45      | there are firmware updates and I feel like I should be getting them on my devices and,                    |
| 38:51      | and it's not even, I don't know, Rose, if you have favourite vendors that are really good                  |
| 38:55      | at this or bad at this, it seems to me kind of mishmash different vendors seem to get                     |
| 38:59      | those updates into the home app and it updates right there for you and others don't, but                  |
| 39:04      | I can't really tell you which ones I'd recommend.                                                         |
| 39:06      | Yeah.                                                                                                     |
| 39:07      | Obviously it, it varies not even depending on the vendor, but depending on what device                    |
| 39:12      | type it is and protocol it is and things like that.                                                       |
| 39:15      | So a Bluetooth version of this light bulb might not be able to install the update through                 |
| 39:19      | the home kit app, but a [[Zigbee]] version of the light bulb that otherwise looks identical                   |
| 39:22      | could or vice versa.                                                                                      |
| 39:25      | It's very difficult to pinpoint exactly what it is.                                                       |
| 39:29      | And in some cases it's just a case of like the vendors have got a limited number of developers            |
| 39:33      | in development time, so they haven't been able to do everything yet.                                      |
| 39:36      | So they've done what they can.                                                                            |
| 39:38      | They're working on the rest as they get around to it, but they're also trying to implement                |
| 39:41      | X call new feature or Y call new feature and so on and so forth.                                          |
| 39:45      | So yeah, there's a lot going on there.                                                                    |
| 39:48      | Yeah.                                                                                                     |
| 39:49      | So you may slash will need third party apps if there are some.                                            |
| 39:53      | Asterisk, I'm just going to make a note here.                                                             |
| 39:56      | If you see anything that says that it uses the Tuya up T U Y A or you know, there's another               |
| 40:02      | one.                                                                                                      |
| 40:03      | I've forgotten its name.                                                                                  |
| 40:04      | But yeah, that isn't actually home kit compatible.                                                        |
| 40:08      | It's a smart home thing, but they're all like the same stuff from China and they don't really             |
| 40:12      | work.                                                                                                     |
| 40:13      | Like it's both the same stuff, it's not the same stuff.                                                   |
| 40:16      | It's a company that sells their software that you can install on things and it's just                     |
| 40:19      | not good.                                                                                                 |
| 40:20      | So yeah, if something says Tuya, turn around and pick something else.                                     |
| 40:25      | And honestly, that's why the show exists because I think a lot of people don't want that.                 |
| 40:30      | They don't want to install software from somebody on the other side of the world and you don't            |
| 40:35      | know what their intentions are and what they're actually doing on your device.                            |
| 40:39      | They just want some basic automation and I feel like that's who this shows for people                     |
| 40:43      | that want to do this stuff.                                                                               |
| 40:44      | They want to trust [[Apple]].                                                                                 |
| 40:46      | And so my, my thoughts is the third party apps, install them as little as possible and                    |
| 40:50      | open them as little as possible.                                                                          |
| 40:52      | Yeah.                                                                                                     |
| 40:53      | Yeah.                                                                                                     |
| 40:54      | The other one I've just remembered is smart life.                                                         |
| 40:55      | They changed it.                                                                                          |
| 40:56      | Well, it had a sort of purple icon.                                                                       |
| 40:57      | It's not blue icon.                                                                                       |
| 40:58      | Yeah, Tuya and smart life are not home kit compatible and they are weird in various different             |
| 41:05      | ways.                                                                                                     |
| 41:06      | You may find that you've theoretically got two or three at the same device and they                       |
| 41:09      | all have slightly different controls for reasons.                                                         |
| 41:12      | Yeah.                                                                                                     |
| 41:13      | So just a random side note.                                                                               |
| 41:16      | They are not home kit compatible, but stay away from them, especially if even if you're                   |
| 41:20      | into, you know, other methods of setting up smart home stuff, it's surprisingly difficult                 |
| 41:25      | to work with even though they theoretically have an API.                                                  |
| 41:31      | This episode of the automators is brought to you by electric.                                             |
| 41:34      | Go to electric.ai/automators and unbury yourself from IT tasks.                                    |
| 41:40      | Also get a free pair of Beats solo three wireless headphones when you schedule a qualifying meeting.      |
| 41:47      | Turning a small business into an empire takes work and you have to keep your ear to the                   |
| 41:51      | ground for things that will help you take it to the next level.                                           |
| 41:54      | But this can be hard when your attention is pulled in different directions because that's                 |
| 41:58      | the reality of being a boss and the team over an electric knows small businesses may be                   |
| 42:04      | like yours face these challenges.                                                                         |
| 42:07      | That's why they're on hand to help with the time consuming parts of your business like                    |
| 42:11      | standardised device security with best in class device management software so you can implement           |
| 42:16      | the best practices across the board and be ready to scale and employee onboarding and                     |
| 42:21      | offboarding done for you saving you an average of eight hours per request plus electric will              |
| 42:26      | help you keep a single point of visibility into your IT environment to control your devices,              |
| 42:33      | networks and applications while simplified reporting allows you to achieve and maintain                   |
| 42:37      | compliance and proactive IT recommendations and automated workflows make IT easy to manage                |
| 42:44      | for even non technical users.                                                                             |
| 42:47      | And look if you're hearing this and you think your company could use some of these services               |
| 42:51      | but you're not sure where to start electrics experts will guide you through the process                   |
| 42:55      | of establishing standardised IT processes for your organisation.                                          |
| 43:01      | Automators listeners are susceptible to this problem where we want to do everything ourselves             |
| 43:05      | we want to automate we want to do the IT.                                                                 |
| 43:08      | But if we've got a business we need to focus on the business not being the IT and you can                 |
| 43:13      | really help yourself out if you go over to electric and let them take that burden for                     |
| 43:18      | you.                                                                                                      |
| 43:19      | Automators listeners electric is offering a free pair of beats solo three headphones                      |
| 43:23      | for taking a qualified meeting just go to electric.ai/automators that's electric.ai slash           |
| 43:30      | automators go there now to get your free pair of beats solo three headphones today for scheduling         |
| 43:36      | a meeting and our thanks to electric for the support of the automators.                                   |
| 43:43      | So David I feel like we should make some recommendations for some products slash hardware that is home    |
| 43:50      | kit compatible that we like because I've been trialling this new Aqara G for doorbell recently             |
| 43:56      | really loving it works really really well it's a nice piece of hardware.                                  |
| 44:01      | And yeah it just worked with home kit it was very easy to set up but we've both been trialling             |
| 44:07      | this stuff out and we've had some stuff for ages and some stuff is newer so what would                    |
| 44:12      | you recommend.                                                                                            |
| 44:13      | Yeah let's spend some money gang we talked in the last segment about not trusting the                     |
| 44:16      | third party developers but there are some that we inherently trust we've bought products                  |
| 44:21      | from them for years I feel like they're good home kit players they make good home kit products            |
| 44:27      | that work and don't fall apart the first time you use them and they do seem to do updates                 |
| 44:32      | to their software so I feel like there are a few vendors that I'm comfortable recommending                |
| 44:36      | one of them is Aqara and Rosemary actually I think you turn me on to them first because                   |
| 44:44      | you started buying their stuff the interesting thing about Aqara is it does require a hub                 |
| 44:48      | but it's a hub in the best of ways because it is giving you I think is it a [[Zigbee]] I                      |
| 44:53      | don't know what they're underlying yeah they have a [[Zigbee]] and [[Thread]] I can't remember                    |
| 44:58      | if [[Thread]] is in the newest hub or if it's in one of the ones coming but they certainly                    |
| 45:02      | it's a [[Zigbee]] based hub but depending on which hub you buy there's like a teeny tiny little               |
| 45:06      | stick one which is great if you just want to like try some stuff out and you know get                     |
| 45:10      | something very cheap they've got a couple of camera ones so your hub is also a camera                     |
| 45:16      | which is really cool and then they've got just sort of like a black round circular                        |
| 45:20      | puck but it's got an [[IR blaster]] in it as well which is very cool so it can control things                 |
| 45:26      | like TV and stuff that that unfortunately the [[IR blaster]] stuff last time I double checked                 |
| 45:32      | it didn't turn up in home kit which was a little bit of a shame but I think they've                       |
| 45:36      | been working on that so that may appear soon or is already there I'm not 100% certain but                 |
| 45:41      | yeah their their stuff is very affordable as well I find yeah that's the advantage so                     |
| 45:45      | with Aqara you're going to buy a hub which will range from the little $25 stick to the                    |
| 45:49      | $250 camera and there's price points in between and each hub you know different hubs have                 |
| 45:56      | different capabilities in terms of how many devices they can drive and whatnot but once                   |
| 46:01      | you get the hub then the actual hardware is very affordable and I feel like you get the                   |
| 46:07      | hub money back if you pretty quickly like you were talking earlier about the leak detection               |
| 46:12      | and I'm assuming you're using [[Aqara Water Leak Sensor\|Aqara leak detectors]] so I did that too and honestly it paid for             |
| 46:18      | the hub just the leak detectors and I don't know it's a thing here in California where                    |
| 46:23      | you go out of town and your house has a leak and it does you know multiple you know tens                  |
| 46:28      | of thousands of dollars of damage so I have friends that have experienced that so that's                  |
| 46:34      | always been a worry for me and these [[Aqara Water Leak Sensor\|Aqara leak detectors]] are just awesome they're small                  |
| 46:39      | they're inexpensive I think you get if you buy them in multiples they're about $15 each                   |
| 46:44      | and you can just you know they they work rock solid I put an indelible marker on them and                 |
| 46:50      | then I stick them under the water heater under the toilets you know they're all over the house            |
| 46:55      | yeah and just like Rose said this is one where I think [[HomeKit]] is really good at this because             |
| 47:00      | of the exact problem Rose described when they detect a leak they go crazy they set off [[HomeKit]]            |
| 47:05      | as an alarm system in a way that I'm not sure a third-party app could do I think only [[Apple|Apple's]]             |
| 47:10      | sort of access could give you that alarm that goes off like you know the missiles are coming              |
| 47:14      | in and it's great in fact when I was testing it my daughter who was up in Westwood at the                 |
| 47:22      | time I you know it's a different she lives she goes to school UCLA so she's up there                      |
| 47:28      | she called me she's like dad there's a leak at the house you know so so the alarm went                    |
| 47:33      | off not only my device went off on everybody and the family and she wasn't she was you                    |
| 47:39      | know two and a half hours away from me and she got the alarm so and that's what you want                  |
| 47:44      | when you have a water leak right you want everybody to know right away so I feel like                     |
| 47:49      | you know the car stuff just as the [[Aqara Water Leak Sensor\|leak detectors]] are a good example but let's just go through            |
| 47:54      | it really quick so both you and I use the [[Aqara Water Leak Sensor\|leak detectors]] I think their switches are                       |
| 47:59      | really good too like one of the things with [[HomeKit]] is just having a physical switch                      |
| 48:03      | to where you can push the button and it triggers an automation so it's essentially a light switch         |
| 48:08      | you can stick anywhere in the house and I feel like the car they're very reasonably priced                |
| 48:13      | and they work great and I've got a bunch of those what are some of the other car things                   |
| 48:17      | you've bought well I've got a whole bunch of them I just wanted to mention as well David                  |
| 48:22      | like your daughter getting that notification even though she's two and a half hours away                  |
| 48:25      | well if you were in say London I don't know for the really live show next year which by                   |
| 48:29      | the way folks Relay's 10th anniversary is next year there's a live show in London David                   |
| 48:33      | and I are both going to be there so if you want to come meet us and say hi please come                    |
| 48:37      | to the show we'll put a link in the show notes but you know if you were in London and she                 |
| 48:41      | was in LA she would be considerably closer than you and so if there were a leak when                      |
| 48:46      | you weren't there she'd be able to potentially you know get get home and figure out what                  |
| 48:50      | it was and call a plumber or something to fix it you know despite the fact that you                       |
| 48:54      | were on another continent and then you you would hopefully still avoid a significant                      |
| 48:59      | amount of damage so that that's why I think this stuff this stuff is so great that is                     |
| 49:03      | to other car devices I mean I have some of the buttons and I've got switches and so                       |
| 49:08      | on as well I have so I have wired in light switches from a car as well as the wireless                    |
| 49:12      | light switches and the wireless light switches are such a great idea because you know you                 |
| 49:17      | can you don't have to just control lights with them but if you think about you know                       |
| 49:22      | what you do in a day how often do you have to you know go and press a light switch for                    |
| 49:28      | example and the answer for me is never but I have a friend and in their living room you                   |
| 49:34      | go into their living room and the door opens to the right side to sort of a corner and                    |
| 49:39      | then so you go into the living room opening the door and then you have to turn around                     |
| 49:43      | close the door reach behind the door and turn on the light switch that is the most inconveniently         |
| 49:48      | placed at light switch I've literally ever encountered possibly there may have been one                   |
| 49:53      | other that was just weirdly positioned on the ceiling but that's the story for another                    |
| 49:57      | time so I solved the problem for that friend by just giving them a smart button on the                    |
| 50:02      | other side of the door so now you open the door and you just press the button that's                      |
| 50:05      | immediately you know to to your left as you're opening the door with your right hand and                  |
| 50:08      | voila you have lights so you can do that but you can also have it you know do other                       |
| 50:12      | things like for example maybe turn on a robot vacuum or play music on a HomePod whatever                 |
| 50:18      | and you can have buttons just anywhere you want and you can even take them with you                       |
| 50:22      | around the house I have door sensors and window sensors so for example if the window in my                |
| 50:30      | office is open the heating in my office won't turn on because my windows open why would I                 |
| 50:35      | heat the whole world when I've got the window open bad idea and it'll tell me for example                 |
| 50:41      | that my front door is open and my front door is open so I actually know about that and                    |
| 50:47      | I can get notifications about my doors opening as well I don't have to but I can I actually               |
| 50:53      | have them on my washing machine and tumble dryer doors because that way I know when they've               |
| 50:57      | been opened which you know that's that's using some other logic in there as well but I have               |
| 51:02      | them so I know that they've been opened also my washing machine is a front loader it's                    |
| 51:06      | very important with front loaders that you leave the door open for a while after the                      |
| 51:10      | wash so that they dry out so they just start growing mold in there so I you know can immediately          |
| 51:16      | see ah the washing machine doors closed it probably shouldn't be I'll go and open that                    |
| 51:21      | yeah what else do I have for my car I feel like I've got a bunch of other things running                  |
| 51:25      | around somewhere oh light sensors and motion sensors they're tiny and great because I know                |
| 51:30      | how bright it is in a room or whether or not there's motion yeah I mean the car is so                     |
| 51:35      | good for sensors like I've got the the window sensors on so many windows around the house                 |
| 51:41      | and I can be lying in bed or far away from the home and know exactly what windows are                     |
| 51:46      | open and close with my car sensors yeah especially if for example you know you're running around          |
| 51:52      | the house sorting things out before you go on a trip or something being able to just                      |
| 51:55      | quickly check okay are all the windows closed like have a quick look you check the security               |
| 52:00      | thing is like windows and doors are closed great and then you know and by all means you                   |
| 52:06      | know run around the house and still physically check but it just gives you that peace of mind             |
| 52:09      | you know you're driving away you're part of the way down the road somebody says wait did                  |
| 52:13      | you close the did you close the garage door I don't know did you close the garage door                    |
| 52:17      | did anybody close the garage door you can check on your phone instead of having to turn around            |
| 52:21      | drive home and you know you may still want to do that if you don't entirely trust the                     |
| 52:26      | technology but once you've got used to the technology being there and being reliable                      |
| 52:30      | you'll then feel more able to trust it so yeah like I love having just temperature sensors                |
| 52:35      | and humidity sensors in every room it's really useful to know you know like my office is the              |
| 52:40      | warmest room right now I still feel quite cold well I'll put on a jumper and see how I feel               |
| 52:46      | and then okay now I can turn up the heating because this is definitely the warmest room                   |
| 52:50      | in the house that I'm sitting in for example um so yeah it's just useful to have the data                 |
| 52:54      | for that but also so that I can tie it into other automations I agree I'll tell you the                   |
| 53:01      | only a car item that I'm still scratching my head on is I bought their wi-fi based human                  |
| 53:07      | occupancy sensor they have two uh right now they have one that is zigbee that works with                  |
| 53:12      | something like home assistant and they have a wi-fi one that plugs directly into home kit                 |
| 53:18      | and I wanted to give it a try and I have had inconsistent results with that but I think                   |
| 53:22      | it's operator error I I just haven't figured this thing out yet I mean it shows up yeah                   |
| 53:28      | it clearly shows me that it recognises there's someone in the room and not in the room um                 |
| 53:33      | but this is an example of where home kit is hard for me because uh I want the lights to come on           |
| 53:39      | when I enter the studio and go off when I leave and home home occupancy sensor is great for that          |
| 53:44      | right the or the room occupancy it's really good at saying is there a human in the room                   |
| 53:49      | which earlier iterations of home automation stuff was okay at but not great like a motion                 |
| 53:55      | sensor is great but if you sit there reading a book it eventually thinks there's nobody in the            |
| 53:58      | room and a human occupancy sensor knows this but for me I have different lighting scenarios for           |
| 54:04      | the studio if I'm shooting video I have one set of lights on if I'm just working it's a different         |
| 54:09      | set if I you know so I have three or four different ways I want the lights done and with a home assistant |
| 54:14      | setup I can go through and make it conditional but with just a basic Aqara home occupancy sensor          |
| 54:20      | I can turn the lights off or on but then the problem is when I put them to video lighting                 |
| 54:26      | then the Aqara sensor comes and says yeah but there's a human in here my rule is just to                  |
| 54:30      | turn the normal lights on so overwrite that you know and so I basically have a battle of automation       |
| 54:36      | and so there's been some things I guess this is I'm kind of getting down a rabbit hole here but           |
| 54:41      | if you want a basic thing where like I go into a room the lights turn on I leave room and lights          |
| 54:46      | turn off the the actual home the home the human occupancy sensor is good but I'm having troubles          |
| 54:53      | with it because I want it to do more yeah yeah that sounds to me like you kind of need the home           |
| 54:59      | occupancy sensor charge you feed into home assistant and home assistant to know like you set that you     |
| 55:03      | were in podcasting state so it'll turn it on to podcasting lighting and stuff yeah yeah exactly           |
| 55:08      | but yeah that's that's that's a thing for another time I've just remembered two other products that       |
| 55:13      | I have from Aqara actually four in total because that's that's how these things work that I should        |
| 55:18      | mention curtain and blind motors so I have curtains on a curtain rail I also have some curtains which     |
| 55:25      | are like eye rail or they're like in inside a little rail there's like hooky plasticky things             |
| 55:32      | inside of a rail that slide back and forth either way and I have as well I mentioned SiwtchBots           |
| 55:39      | ones earlier but I have some Aqara motors for controlling curtains and the Aqara motors are               |
| 55:45      | better than the [[SwitchBot Curtain Opener\|SwitchBot]] motors in some sense in many senses because they are more powerful and          |
| 55:50      | when you have floor length velvet curtains like I do you need the more powerful motors because            |
| 55:56      | the [[SwitchBot Curtain Opener\|SwitchBot's]] could not handle those and so I have Aqara curtain sensors and I also have blind           |
| 56:01      | or not curtain sensors curtain motors as a blind motors which have like a little cog on them and          |
| 56:07      | the chain from the blind goes in there and then it can open and close the the blinds automatically        |
| 56:13      | for me based on you know just like me arriving home and yeah then my my blinds by my door open            |
| 56:22      | so that I can easily come into the house which is lovely so yeah and they it also turns depending         |
| 56:28      | on the time of day so in the morning the the blinds point one way and in the evening the blinds           |
| 56:33      | point another way so that I don't end up sitting there with a whole bunch of like sun shining             |
| 56:37      | into my eyes attempting to blind me which is great but I so good to take advantage of the sunlight        |
| 56:43      | I think Aqara is the one who I bought the most products from at this point yeah yeah if you buy           |
| 56:49      | the the like the sensors and someone from Ali Express in particular you can definitely get                 |
| 56:56      | you know good bundles very cheaply you'll have to wait a little bit for postage it could be               |
| 57:01      | you know 10 days two weeks for it but you know it's I feel like it's worth waiting the 10 days            |
| 57:08      | to two weeks if you know like buy one from [[Amazon]] by all means and get it tomorrow to try it out          |
| 57:13      | but then if you go okay I want six of these buttons then yeah you can save quite a bundle                 |
| 57:19      | by buying them on Ali Express and they'll all connect to the same hub and [[Zigbee]], Z-Wave,              |
| 57:24      | etc. they are global they use slightly different channels in various areas at least                       |
| 57:30      | [[Zigbee]] does but the the actual hardware devices will connect regardless of where they're from            |
| 57:36      | so it's well worth saving some money on those if you've got a hub so yeah definitely recommend            |
| 57:43      | those and I think like you said the sensors to me is really the the Aqara the gold in the car             |
| 57:50      | is the sensors because it's expensive some sensors are like $50 just to buy a single sensor and           |
| 57:56      | they're just so much less expensive and they work rock solid with the car just get yourself a hub         |
| 58:02      | and if you want to add sensors throughout your house you're going to save yourself a ton of money         |
| 58:05      | another vendor that we have talked about you know is my [[Lutron]] Caseta only in the US as far as I        |
| 58:11      | understand not in Europe but boy if you want a great light solution in fact I've talked about             |
| 58:17      | this a bunch on the automators podcast in the past I'm not going to dwell on it but you replace           |
| 58:21      | the switches and that's the trick with lights if you put automated switches in the wall then all          |
| 58:27      | the lights that are connected at circuit are done and you don't have to buy individual home kit light     |
| 58:31      | bulbs and it makes it easier and the real problem it solves is for all the you know all the you           |
| 58:38      | know the muggles for lack of a better word in your house they just want to hit the switch and             |
| 58:43      | turn the light off and on and those still do so nothing changes the light switch still works              |
| 58:48      | but it does also automation friendly so I think if you are in the US at least and you want to             |
| 58:54      | really just get a great home kit experience by the [[Lutron]] Caseta switches they're expensive             |
| 59:01      | don't buy them all at once I think I've got them in every key switch in my house but it took me           |
| 59:07      | about a year and every month I would go buy another one and switch it out and eventually I had it         |
| 59:11      | everywhere I needed it but they're they're awesome do you have a switch recommendation that's not         |
| 59:17      | [[Lutron]]? So I did try Lightwave, Lightwave RF over here in the UK despite the name including RF            |
| 59:25      | they are not using radio frequency in the sense of you know like old-fashioned radio frequency            |
| 59:30      | they're using Z-Wave or Z-Wave depending on your pronunciation I say I tried because the                  |
| 59:37      | switches are required the the lights to be dimmable and the light that I was trying was not               |
| 59:45      | a dimmable light and so I was going to have to replace the light so in the end I went with                |
| 59:49      | an Aqara switch instead but they they have yeah like they have like a whole little range of things        |
| 59:56      | and also on their website they have like links to get like certified from them installers who             |
| 01:00:03   | were qualified electricians to come out to your house and set them up and they also do plugs              |
| 01:00:08   | plug sockets or outlets for your Americans so yeah they're certainly a good option I've I just            |
| 01:00:15   | went with an Aqara switch to be honest one of the things that I really like about it is it's a            |
| 01:00:20   | bounce switch so most switches here in the UK and as far as I understand in America they toggle           |
| 01:00:28   | so they're up when they're on and down when they're off or vice versa depending on how it was             |
| 01:00:32   | installed and this is a bounce switch so it doesn't look like it's got a state when you look at it        |
| 01:00:38   | you can't see that the the switch is saying that the light is on but you're looking at the light          |
| 01:00:42   | and the light is off so there's never that disconnective the way this this doesn't line up                |
| 01:00:47   | with what I'm saying you just press the light press the light switch and it turns on or press             |
| 01:00:51   | the light switch and it turns off and as well as it controlling the light obviously I can control         |
| 01:00:56   | the light with home kit as well but then I can have a home automation because I have some under           |
| 01:01:01   | the counter LED light strips um and um so when I press the button to turn on the light in the             |
| 01:01:08   | kitchen not only does it turn on the light in the kitchen it also turns on the under counter              |
| 01:01:12   | lighting for me so they they all get tightened together which is really nice some other vendors           |
| 01:01:18   | we can recommend Phillips Hue yeah for the lights yeah yeah if you if you want lights like really         |
| 01:01:25   | nice bright lights in your room then I would definitely recommend Phillips Hue you don't                  |
| 01:01:32   | have to go with fancy colours and things like that they have I definitely recommend the the white          |
| 01:01:40   | daylight adjustable I've forgotten the exact naming but it it goes between different shades of            |
| 01:01:44   | white at different times of day that's very nice and yeah they have various different lumens so           |
| 01:01:50   | you can get very bright lights if you need very bright lights in your room down to you know smaller       |
| 01:01:56   | ones and they they do all sorts of shapes of bulbs and things like that as well with different            |
| 01:02:00   | fittings and so on over here in the UK we use bayonet fittings in overhead lights like they               |
| 01:02:05   | have those which you don't necessarily get from other vendors and so on though there is another           |
| 01:02:14   | vendor that I'd recommend is a sort of maybe not quite secondary but yeah there there are other           |
| 01:02:19   | options but if you just want to go with lights that work definitely start at hue it's pricier             |
| 01:02:24   | but it's it's going to be good yeah I want to just add my endorsement Philips Hue they used to be         |
| 01:02:30   | a lot more expensive they were the one of the first ones on the scene they have got more price            |
| 01:02:36   | competitive but they're still probably going to be the most expensive option but they have their          |
| 01:02:40   | own hub and they just work and the other thing about Philips is once you get into that ecosystem          |
| 01:02:46   | you have the hub it's very easy to add additional lights and they have anything you can think of          |
| 01:02:51   | like when I made the studio here I wanted to make have some little spotlights that could put behind       |
| 01:02:56   | me to like light to backlight me and I didn't really have a convenient plug for them and I didn't         |
| 01:03:02   | know what I want to use and Philips had these little tiny wireless spots I keep them on my media          |
| 01:03:07   | cart they're always charged and I pull them out and they're totally attached to my automation             |
| 01:03:12   | and I think they were like 60 bucks to get them and so you pay more than you would I'm sure there         |
| 01:03:18   | was something out there for half that but these Philips ones they just work and also the other            |
| 01:03:24   | thing I find about the Philips lights if you do go through the colours the colours are more                 |
| 01:03:28   | accurately rendered than a lot of them the colours are way off and the Philips get it right so             |
| 01:03:34   | it's just a quality vendor you know and for you know light switches you might want to go with             |
| 01:03:39   | a different vendor but for the actual lights themselves I think the hue is the winner.                    |
| 01:03:44   | Yes yeah definitely my other recommendation when it comes to lighting or just other devices would         |
| 01:03:51   | be IKEA and you know most countries have got an IKEA even if there isn't one near you they will           |
| 01:03:57   | deliver things especially their smart home stuff and they are on board the [[Matter]] train which is          |
| 01:04:03   | always good and hue hasn't yet got there as far as I'm aware with the [[Matter]] train they're going          |
| 01:04:07   | to release a new hub for sure but IKEA already has a [[Matter]] hub out they do lights they do                |
| 01:04:16   | buttons they do sensors I picked up a very cool sensor the other day David it's a little rectangle        |
| 01:04:22   | it's got I guess it's a TFT display in it it's like one of those slightly old sort of green               |
| 01:04:29   | background with black segment shapes on it in most cases but there's some colour in there as well and      |
| 01:04:36   | it's a PM2 sensors a PM2.5 so it's measuring air quality temperature humidity and so on and it's          |
| 01:04:44   | got a backlight built in as well so they've got that they have air purifiers all sorts of things          |
| 01:04:52   | and it's very affordable as well you know the IKEA stuff is closer to slash the same as the               |
| 01:05:00   | Aqara pricing than it is the hue pricing and they do a good range of lights as well and one of the        |
| 01:05:08   | things that I'm definitely going to recommend with the IKEA stuff is you can actually get some of the     |
| 01:05:13   | IKEA stuff and use it without home kit I know we're doing a show here about vanilla home kit              |
| 01:05:18   | but if you wanted a smart plug with a button to control it and you don't want to have to like             |
| 01:05:24   | connect it to a hub or do wi-fi or anything like that you can buy a smart plug outlet thingy like         |
| 01:05:30   | you know it will plug in between the device and the outlet or socket and a button from IKEA and           |
| 01:05:37   | they'll come prepared and you can just use that to turn it on off like simple this can be very            |
| 01:05:44   | very useful I set one of these up for my grandmother the other day she had a fan and she when the button  |
| 01:05:50   | on the fan for turning it off was going a bit wonky so I just picked up one of these in IKEA and          |
| 01:05:55   | gave it to her and was like you know like you know if you just turn it off at the wall because            |
| 01:06:00   | she was struggling to press the physical like button on the fan to turn it on off I was like              |
| 01:06:05   | if you just turn it off at the wall by pressing this button then you know then when you turn it           |
| 01:06:10   | back on it'll be on whatever settings you had on before and that works perfectly for her so yeah          |
| 01:06:15   | the IKEA stuff definitely very very nice I have some of their blackout blinds as well love those          |
| 01:06:21   | I am so jealous I look at those blinds because IKEA makes affordable home kit friendly blinds             |
| 01:06:28   | so if you want your blinds to go up and down automatically you can do it they never have                  |
| 01:06:33   | my size and so I waited so long that I eventually just bought a pair of manual blinds and I gave          |
| 01:06:37   | up but that it's a very affordable option for that where most blinds are like a lot of money yeah         |
| 01:06:46   | yeah they they often are and yeah it's it's you know they've recently released some other ones I          |
| 01:06:52   | have three of the blackout blinds and I have one of the the non-blackout blinds from from the original    |
| 01:06:57   | lineup which they still have the trad I've forgotten the name it's not trad free that's their general     |
| 01:07:01   | sort of smart home stuff it means wireless by the way which is very cool but yeah I have I have           |
| 01:07:08   | those and then they've released a new design recently which is sort of zigzaggy fabric I don't            |
| 01:07:13   | quite know how to describe it it's not quite zigzags but it kind of comes out sort of diamonds and        |
| 01:07:17   | connects to each other either way they've got new new fabrics and so on so you know they've got things    |
| 01:07:21   | which might be more aesthetically appealing to I think they call those honeycomb at least in the          |
| 01:07:28   | US I think I think I think it's a honeycomb one yeah I looked at it but honestly I quite like             |
| 01:07:33   | mine being a dark gray because they are blackout blinds and that's what I wanted them for you             |
| 01:07:38   | know I have them behind the curtains and they work incredibly well I did have to cut one down             |
| 01:07:43   | something IKEA do not like support at all they don't they don't tell you how you can cut the              |
| 01:07:48   | blind down to fit there is no guide on how to do it I found a youtube video on somebody disassembling     |
| 01:07:53   | theirs and cutting it down and that was the first one I installed and it works fine it's it's great       |
| 01:08:00   | so yeah really really like that they they automate you go down at sunset they come up when my alarm       |
| 01:08:06   | goes off in the morning thanks to a shortcuts automation and so I get some light into my room             |
| 01:08:12   | immediately when I wake up or when I'm supposed to be waking up which helps avoid me falling back         |
| 01:08:16   | asleep definitely recommend them anymore let's let's pick one more what's one more vendor I'm             |
| 01:08:22   | going to go with one more it's a little bit out there because they have some very cool but                |
| 01:08:26   | it looks cool and it is cool products and then they've got some more practical ones                       |
| 01:08:30   | Nanoleaf yeah that's a good one so Nanoleaf Nanoleaf do funky lights okay I have their                 |
| 01:08:36   | original light panels so they're triangles of light that you stick you can connect them to each           |
| 01:08:41   | other theoretically you stick them to the wall I stuck them to a piece of white faced hardboard           |
| 01:08:47   | and put them in one of those giant IKEA frames that you can get reinforce the frame and hung it on        |
| 01:08:52   | the wall and it looks amazing and so you turn it on you've got like a little light show there's           |
| 01:08:57   | you know triangles changing colour and so on Nanoleaf also do slightly more practical light strips        |
| 01:09:02   | and light bulbs and their their new stuff uses [[Thread]] as well now my original stuff is using              |
| 01:09:07   | wi-fi remember what I said at the beginning of not recommending wi-fi devices this was an exception       |
| 01:09:11   | I made because they're so freaking cool but yeah like yeah they are really lovely really bright           |
| 01:09:19   | and very good colours so yeah definitely check out Nanoleaf as well they have [[Thread]]-based light          |
| 01:09:26   | bulbs so you know if you want to experiment with a [[Thread]] protocol they're quite affordable and           |
| 01:09:31   | often go on sale on amazon and yeah if you're excited by any of the things don't forget to                |
| 01:09:37   | camel camel camel them and keep an eye out for like a Black Friday or something coming late               |
| 01:09:42   | to this year for sales I keep seeing stuff in like back to school sales I guess college students          |
| 01:09:47   | apparently need smart home stuff which I mean yeah I get it but also what can you put in a                |
| 01:09:54   | dorm room when you can't really set up anything on an internet network because I guess most colleges      |
| 01:10:01   | wouldn't let you do that who knows they're probably just using IKEA local controls I guess but yeah       |
| 01:10:07   | yeah there's a there's a whole bunch of options out there and Nanoleaf is a a nice reputable brand       |
| 01:10:13   | of very pretty colours of their lights yeah they're fun they're just fun I don't own any but I've          |
| 01:10:19   | been tempted so many times yeah yeah they do some hexagon ones as well the hexagons came after the        |
| 01:10:25   | triangles um and I'd had the triangles for quite a while when uh when the hexagons came out but I         |
| 01:10:31   | keep looking at them going oh they're pretty so maybe I'll end up with them this episode of               |
| 01:10:39   | automators is brought to you by hello fresh with hello fresh you get farm fresh preportioned ingredients  |
| 01:10:44   | and seasonal recipes delivered right to your door skip trips to the grocery store and count on            |
| 01:10:48   | hello fresh to make home cooking easy fun and affordable that's why it's America's number                 |
| 01:10:53   | one meal kit you can banish the end of summer blues with hello fresh no need to stress about how          |
| 01:10:58   | your handle it all this fall because hello fresh takes care of the meal planning and delivers             |
| 01:11:01   | preportioned ingredients right to your home so whipping up a homemade meal in is easy in a cinch          |
| 01:11:07   | do you feel like you would love a wholesome homemade meal but there's just not enough time                |
| 01:11:11   | with hello fresh all you need is 15 minutes and you'll be enjoying a tasty satisfying meal                |
| 01:11:15   | made in your own kitchen just look for their quick and easy dinner options plus quick breakfast           |
| 01:11:19   | and lunches too hello fresh to save me a bunch of time yes I'm in the UK but hello fresh in the           |
| 01:11:25   | US will save you the same amount of time I promise I love the fact that I can just pick a couple of       |
| 01:11:29   | recipes and they change them up every week so I don't end up eating the same thing all the time           |
| 01:11:34   | some of my favourites oh it's so difficult to say there have just been so many great ones                  |
| 01:11:39   | and honestly I use hello fresh not just for me but also if I'm cooking and having my parents over         |
| 01:11:45   | or some friends as well you know it's really easy to look at the recipe and you can see what you          |
| 01:11:50   | would need to do for more people or just for me and pro tip even though it's just me I get a little       |
| 01:11:56   | more food than just for me because then I have some leftovers so I don't have to cook all the time        |
| 01:12:00   | go to hello fresh dot com/automators 50 and use 50 automators for 50 percent of                     |
| 01:12:06   | plus free shipping that's all lowercase letters h e l l o f r e s h dot com slash 50                      |
| 01:12:15   | automators hello fresh America's number one meal kit go right now to hello fresh dot com                  |
| 01:12:20   |/automators 50 and use 50 automators for 50 percent of plus free shipping our thanks to              |
| 01:12:25   | hello fresh for the support of the show and Relay FM okay Rose so we've got you through the basics       |
| 01:12:34   | you've got some installed I think we should if we're going to talk about home kit we have to talk         |
| 01:12:38   | about scenes and scenes is a feature in home kit that allows you to combine all of your switches          |
| 01:12:44   | and different things together to scenes so like if you want the room to you know to turn the lights       |
| 01:12:50   | on halfway and lock the doors or whatever you can do that with the scene yeah now it should be noted      |
| 01:12:58   | because you mentioned there lock the door the anything that involves a security device so that            |
| 01:13:03   | would be like doors windows locks garage doors things like that in home kit is going to require           |
| 01:13:10   | confirmation it's not just to be able to run entirely automatically because [[Apple]] being [[Apple]]             |
| 01:13:16   | want to keep you safe and secure they don't want you accidentally setting up an automation for            |
| 01:13:19   | whenever the bathroom light turns on unlocks the front door that would possibly go very badly in          |
| 01:13:24   | some places so yeah that you're gonna you won't be able to just automate lots of things including         |
| 01:13:30   | scenes but scenes are very good for automations for example if you want to have a button that turns       |
| 01:13:36   | off three devices I would suggest that you make a scene that turns off those three devices or             |
| 01:13:41   | does whatever it needs to do and then the button turns on the scene and there's a couple of reasons       |
| 01:13:47   | for this the obvious one being say you want a second button that can also do that well yeah now           |
| 01:13:55   | now you can just have it do the scene instead of trying to recreate everything secondly you can           |
| 01:14:00   | then also trigger that through a scene button in home kit and thirdly scenes can automatically undo       |
| 01:14:07   | themselves after a period of time so when a scene turns on you can say turn off after 15 minutes          |
| 01:14:14   | for example and so yeah I really love scenes and some apps even add scenes like my Nanoleaf added        |
| 01:14:20   | a couple of scenes for me of um some of the different light panels that I have set up for my              |
| 01:14:25   | Nanoleaf light panels and that's lovely so I have those as buttons in home kit ready to go               |
| 01:14:31   | yeah agreed I I really feel like that's like the power move if you're just going to work with the         |
| 01:14:36   | home kit app is you get everything you know build it out put your devices in by your hardware but         |
| 01:14:43   | the end of the day make scenes and think about it and those are the easiest way to call them off with     |
| 01:14:48   | Siri if you want to do that with Siri you can put like on your [[Apple Watch]] you can put buttons for        |
| 01:14:54   | the individual scenes it's much easier than trying to control the lights with your watch but              |
| 01:14:58   | you can have a list of five scenes and just scroll through on your watch and they've even got a           |
| 01:15:02   | complication for it it's just the actual moment point of control scenes are the way to go it's            |
| 01:15:09   | also as automators the best way to trigger them all as part of a shortcut automation because you          |
| 01:15:14   | just do a scene and that makes the the automation simpler as well yeah yeah especially if there's         |
| 01:15:21   | a chance that you want to reuse it but also just you know in general scenes are the power move            |
| 01:15:27   | because you set up a scene that controls these three devices and then it turns out that you use it        |
| 01:15:31   | on this button and use it in this shortcut maybe even use it in a personal automation in shortcuts        |
| 01:15:36   | but then you you want to just change it slightly so instead of turning this light on to 100% it           |
| 01:15:42   | turns it on to 90% but like a cold blue instead of a warm yellow white well you can do that and           |
| 01:15:49   | then that that goes in everywhere and even if you're only using in one place right now it's really        |
| 01:15:54   | smart to set yourself up so that if you want to do a change like this later then you can just             |
| 01:15:59   | instead of going into you know three or four different automations that's turn on this light              |
| 01:16:02   | in this way there's one scene that turns on the light that way and and that's the thing that's            |
| 01:16:07   | being used everywhere and and you just go and adjust it and that's it you know how converts               |
| 01:16:12   | are the best advocates that's me because I when I first started using home kit I didn't use scenes        |
| 01:16:16   | at all because I was using other automation tools and doing all this other stuff and then at one          |
| 01:16:21   | point I realised wow these scenes because with all the shortcuts I've built it was stupid I would         |
| 01:16:26   | you know make all these commands and turn on all these lights just set the scene and then                 |
| 01:16:30   | like if I want to change the scene I can change the scene I only have to touch shortcuts because          |
| 01:16:34   | shortcuts is still just going to call the scene that I made and uh if you add new lights or remove        |
| 01:16:38   | lights it's just absolutely the thing to get that's like I think the third level of this is               |
| 01:16:44   | figure out scenes make the ones you want make them easy to understand because the scenes will show        |
| 01:16:49   | up in the other people's devices like I'm speaking to someone who has other people in the home with       |
| 01:16:53   | me that that aren't going to be spending time and figuring all this out but if you make a simple          |
| 01:16:58   | scene for them it says turn all the lights downstairs off and you put that in there they open it up       |
| 01:17:04   | they see that they know exactly what it means they push the button and it happens and then                |
| 01:17:07   | suddenly you're a hero because you figure it out a way to make it easy for them to turn all the lights    |
| 01:17:12   | off yeah yeah I mean you can also use zones and areas in home kit to to you know have things in           |
| 01:17:18   | like an outdoor zone in a downstairs um area an upstairs area which then do magically work but            |
| 01:17:24   | if you've got a scene with that name it overrides it um the other thing I'll say is historically          |
| 01:17:29   | speaking running a scene which could control any number of devices has been more more reliable            |
| 01:17:38   | than running an automation that controls those same devices don't ask me why I have never really          |
| 01:17:44   | gone into the details of this because it's very hard to debug home kit but it seemed for a very           |
| 01:17:49   | long time as far as I understand it is still the case that an automation that would say turn off two      |
| 01:17:55   | lights um and um I don't know close the blind um or open the blind perhaps um would be more likely        |
| 01:18:04   | to fail or just not quite work right like maybe the blind wouldn't open or where the lights wouldn't      |
| 01:18:08   | turn off versus a scene that also did the same thing so it would turn off two lights and open             |
| 01:18:13   | the blind um historically speaking scenes have always been more reliable so set yourself up for           |
| 01:18:18   | success create a scene then you can press the button to test the scene you don't have to have             |
| 01:18:23   | your scenes as favourites you can unfavourite them and then you'll only see them in the rooms               |
| 01:18:27   | where the devices that control are in the home app um but yeah if you if you if you've got your           |
| 01:18:33   | scenes then you're going to be ready to go and automation ready and just hopefully very happy             |
| 01:18:38   | with your home kit success. All right what are some other tips Rose? Well uh one I've got to              |
| 01:18:45   | recommend home pass and then a second one is going to be home batteries and I'll get to that one a        |
| 01:18:50   | second um so that little qr code that we talked about scanning at the start um that you use to add        |
| 01:18:57   | devices to home kit before you go and plug that thing in somewhere really difficult and weird             |
| 01:19:04   | and awkward to access do yourself a favor download the home pass app scan the code and stick it in        |
| 01:19:10   | home pass with you know use home pass to store it and do that with all of your smart home devices         |
| 01:19:15   | that have got a home kit um barcode thingy on them um if it uses NFC home pass can read that as well      |
| 01:19:22   | it can read meta set up things it can store all of this stuff do yourself a favor and do that right       |
| 01:19:28   | now I don't care if you've had home kit set up for years and everything's fine or if you have not         |
| 01:19:33   | yet got home home kit set up home pass is critical because if something goes wrong and you have to        |
| 01:19:39   | unpair it and repair it crawling under the stairs and through the spiders webs to get to the I don't      |
| 01:19:44   | know like weird plug place where you put this only to find that the sticker fell off and now you don't    |
| 01:19:51   | have the sticker anymore is going to be aggravating um and if anything does go wrong and you need to      |
| 01:19:57   | unpair something and repair something being able to sit on your sofa and just open the code on your       |
| 01:20:03   | iPad and scan it on your iPhone for example um it's going to make your life so much easier so             |
| 01:20:08   | 10 out of 10 20 out of 10 recommend home pass um the developer has a number of other really great         |
| 01:20:15   | little home kit utility apps as well which I recommend and the other app I'm going to recommend           |
| 01:20:20   | comes with a warning of anything that has a battery have spares anything that needs recharging make       |
| 01:20:27   | sure you've got a couple of those cables in like a little bag that you've just labeled for charging       |
| 01:20:31   | home kit stuff so that you don't have to run around the house pro loaning random cables from other        |
| 01:20:35   | places get the home batteries app home batteries is all one word um with a capital B on the batteries     |
| 01:20:42   | allow it to access your home stuff and then just open it every so often David you said you do this        |
| 01:20:47   | twice a year when you check the smoke alarms by the way HomePods can listen to smoke alarms now          |
| 01:20:51   | and send you a notification when they hear the smoke alarm go off my mom helped me test this              |
| 01:20:55   | by burning some toast the other day um was not quite the the test that we were looking for um I           |
| 01:21:00   | was thinking that like a candle or something and blow it out and set the smoke alarm off                  |
| 01:21:03   | like that way but uh yeah she decided to go with the burning toast approach but it turns out it           |
| 01:21:07   | worked very well for uh setting up setting up the the uh HomePods to uh after they detected the          |
| 01:21:13   | smoke sensors if it makes you feel better I run the burning toast approach often so that's good           |
| 01:21:18   | yeah so uh yeah just like you check your smoke alarm sensors a couple of times a year you should          |
| 01:21:22   | be checking your batteries now a home batteries also comes with widgets so you can have a widget on       |
| 01:21:27   | your home screen to tell you what batteries are low um but it's it's a great little utility that          |
| 01:21:32   | will just say hey FYI uh like my rain gauge that's outside it's not even properly home kit supported      |
| 01:21:39   | it's a lovely Netatmo rain gauge it works really well in the Netatmo app it's connected to my           |
| 01:21:43   | Netatmo weather station which is fully home kit supported but either way you know that that is a         |
| 01:21:49   | 25 battery so let's consider low battery the good news is it's been out there for like two and a          |
| 01:21:53   | half years so I feel like it's probably got a while to go before I need to replace the batteries in       |
| 01:21:57   | that um but you know my my right patio uh door lock is down to 53 percent battery so I'm good             |
| 01:22:04   | double check that I've got the AA batteries ready to replace those when when I need it pretty certain     |
| 01:22:08   | I do um but yeah check and uh if something's running low replace the batteries now not later that         |
| 01:22:15   | last little percent on the batteries will either last forever or last no time at all it and it's          |
| 01:22:21   | going to be one of the extremes it'll last for six months or it'll last for six minutes um so yeah        |
| 01:22:25   | I I vote for being pre proactive preemptively replacing batteries is a good thing or recharging           |
| 01:22:31   | batteries is a good thing you don't want your blinds to suddenly stop opening and closing because         |
| 01:22:35   | they're out of battery and uh then you don't wake up in the morning and you're late for work or           |
| 01:22:39   | something not that I was speaking from experience recently definitely not no I I think that's great       |
| 01:22:44   | and I guess I would add to it if you're gonna go down the home kit rabbit hole keep just get a            |
| 01:22:49   | plastic bin and like you're gonna get little bits of detritus like when you buy a device they're          |
| 01:22:55   | maybe some mounting things that you may want someday or the little manuals with the QR codes              |
| 01:23:01   | and I know you're gonna scan them but it doesn't hurt to keep them too and in that in that bin            |
| 01:23:06   | just get every time you get a new device check the battery it's usually one of these watch battery        |
| 01:23:10   | formats of one kind or another and I just buy a box a um a pack of them from amazon and I just get        |
| 01:23:17   | a marker and write on the outside these are for the air tags these are for the Aqara sensors              |
| 01:23:22   | or whatever and I put I put it on there so then when I need to replace batteries I just go to the         |
| 01:23:28   | bin pull them out we have like a battery space in the house where we keep batteries that we all           |
| 01:23:32   | access but I don't let the family see my home kit batteries I keep them in the separate bin               |
| 01:23:38   | and that way I know they're always there yeah I have something similar I use um the the they're           |
| 01:23:43   | like plastic mesh sit bags um so like the mesh is encased in plastic on both sides so it's like           |
| 01:23:49   | mostly mostly see-through but obviously there's the mesh to reinforce the plastic and I have a            |
| 01:23:54   | whole bunch of those and I label them with you know what things are I I also use this for my              |
| 01:23:58   | cable management by the way free bonus tip for folks um you know if you've got a whole bunch of           |
| 01:24:02   | usb-a to usb-c cables well I know they're in the bag labeled usb-a to usb-c cables um uh but yeah I       |
| 01:24:09   | put things in there and label them you can just stick a post-it note inside the the like little           |
| 01:24:14   | thing um zip lock bags are also great for like keeping like the the mounting stickers together            |
| 01:24:20   | with the manual and the extra home kit um code that they they might give you or something that you        |
| 01:24:27   | can easily label just write on it in a sharpie um but yeah definitely find like a little way to keep      |
| 01:24:34   | stuff like that you can do your best to keep it minimal I also vote for downloading the pdf versions      |
| 01:24:38   | of any manuals because that way you can get rid of them um uh but yeah you you could yeah just have       |
| 01:24:45   | have a little space where you've got stuff like that ready to go um and uh also I'm gonna give            |
| 01:24:51   | folks another little bonus when it comes to recharging things um you can recharge stuff from              |
| 01:24:55   | battery packs if it's not totally flat so uh for example my curtains I need recharging every once         |
| 01:25:00   | in a while um yeah my current motors need recharging my curtains need recharging I didn't                 |
| 01:25:05   | comment but I loved it when you said it yep yeah my curtains need recharging it's the the motors on       |
| 01:25:10   | the curtain rails that need recharging rather than the curtains themselves the the fabric seems           |
| 01:25:14   | fine I don't think it needs any usb-c um but what I often do is um you know I could take the motors       |
| 01:25:21   | down and and take them off and plug them in and charge them and then take them back but instead           |
| 01:25:26   | because with home batteries I see when they're down to like 20% or so um I just grab a nice big           |
| 01:25:31   | battery pack grab the the cables which you know I've got labeled uh ready to go and they're nice          |
| 01:25:37   | long cables stick a battery pack on the windowsill and plug it plug the uh the the motors in and          |
| 01:25:42   | voila off we go um now I have also got solar panels on my current motors so I really need to charge       |
| 01:25:50   | them uh but that said UK weather being UK weather especially we didn't have some of this year David       |
| 01:25:56   | I feel like we had like a couple of weeks of summer in June and that was it it's it's uh                  |
| 01:26:00   | August and I feel like it's almost October otherwise um but we had over the weekend a                     |
| 01:26:05   | hurricane at an earthquake here so I saw yeah I'm British we complain about the weather this is           |
| 01:26:12   | what we do um or we talk about it at all times anyway because it's constantly changing uh but             |
| 01:26:17   | yeah so even though I have solar panels um you know it's not perfect but being able to plug in a          |
| 01:26:21   | battery pack into things um you know I take the power to the device instead the device to the             |
| 01:26:25   | power also means I don't have to transport it back uh later I remember to plug it in and so on            |
| 01:26:30   | um I also have for my IKEA blinds um I bought a spare battery for my gear so when one of them             |
| 01:26:37   | is running low I charge the spare battery and I check it into the blind and I take that battery           |
| 01:26:42   | and charge it up um this way if I if I you know mess up uh charging it when I take it out or something    |
| 01:26:48   | then I I I know it's fully charged but usually what happens is I go to charge it and it's like            |
| 01:26:51   | hey I'm fully charged it's like great put you straight in take one straight out and then I                |
| 01:26:55   | don't have to remember to go and put something in and be like why is this blind like open it's like       |
| 01:27:00   | 11 p.m at night it shouldn't be open at 11 p.m at night um so yeah it's uh spare batteries uh extra       |
| 01:27:07   | batteries all of those things uh definitely recommend it's like spare in-cars just for your               |
| 01:27:12   | printer uh it's much better to have some batteries on hand and then restock as you as you use them        |
| 01:27:18   | then it is to be like ah I need four AAA batteries for this and I don't have them so now I have to        |
| 01:27:25   | spare find a spare nine volt battery to unlock my door not great yeah have batteries one to go            |
| 01:27:31   | and one to show as they say you know one of the when I worked for Disneyland I find that was where        |
| 01:27:36   | I learned that like everything at Disneyland like there's spare parts they're clearly listed              |
| 01:27:43   | there's a system when the spare parts get low that new spare parts get ordered so we never run out        |
| 01:27:48   | and like just like doing boat because I worked on the jungle cruise the boat maintenance and              |
| 01:27:52   | the stuff they did back there it was it was like watching that it like it like lit a fuse in my brain     |
| 01:27:59   | it's like yes I want that for everything in my life I just want that it to be that easy you know          |
| 01:28:04   | and it's not that hard to set up a system to do that but you do have to have a bin or uh              |
| 01:28:09   | OmniFocus task or some way to make sure stuff like that happens yeah and you know we've with all these        |
| 01:28:15   | caveats and warnings and some that we've been giving we've probably made this sound bigger                |
| 01:28:18   | and more complex than it is really all you have to do is just buy a decent home kit device scan it        |
| 01:28:24   | and voila you're set up yeah but what we're trying to do is make it easier so that you can expand         |
| 01:28:29   | things and make it better and smarter and better for yourself later um I think my only parting piece      |
| 01:28:37   | of advice for people is going to be when you run into a limitation that you can't do something with       |
| 01:28:41   | home kit or whatever remember home kit is limited [[Apple]] have tried to set it up to be simple for          |
| 01:28:50   | everyone which means for my grandmother as well as for me the result of that is I'm going to be           |
| 01:28:57   | the one that gets very frustrated because I can't have it automatically do this thing                     |
| 01:29:02   | rather than my grandmother getting frustrated because she can't figure out that this button               |
| 01:29:06   | means turn the light on versus turn the light off like if it's the lit up little part of the button       |
| 01:29:10   | that's the bit you press when you run into those limitations that's when you end up looking outside       |
| 01:29:15   | it's something like Homebridge or home assistant home assistant being my preferred option to expand      |
| 01:29:20   | it um and do more but you can do a lot in home kit so it's definitely worth checking out yeah I feel      |
| 01:29:26   | like this whole episode has been subversive because we've been telling you how to set up basic home       |
| 01:29:32   | kit and make it work and both of us want you to do this and then say okay now what and guess what         |
| 01:29:38   | yeah another episode of automators we're going to explain that to you but we we definitely                |
| 01:29:43   | want you to go beyond vanilla home kit but yeah yeah if you just want to stay in home kit we gave         |
| 01:29:48   | you what you needed today we're the automators podcast you can find us over relay dot fm slash            |
| 01:29:53   | automators uh we've got a great forum at talk dot automators dot fm so real smart people there            |
| 01:29:59   | I still uh continue to google search for automation problems that someone in our forum has answered       |
| 01:30:05   | or even you know Rose has already done it at some point I love that um the uh I want to thank our         |
| 01:30:12   | sponsors today that's our friends over vitally electric and hello fresh and for those of you              |
| 01:30:18   | that are automators max members we're going to be talking notion and automation next but uh otherwise     |
| 01:30:23   | we'll see you next time goodbye folks                                                                     |
