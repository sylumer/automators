---
status: "incomplete"
fc-date:
  year: 2021
  month: 06
  day: 18
fc-category: "podcast"
podcast: "Automators"
published: 2021-06-18
duration: 5169
formattedduration: "01:26:09"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/78"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/Automators_78.mp3"
episode: 78
title: "78: WWDC 2021: Shortcuts comes to macOS"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Hooray! Apple has made Shortcuts for the Mac. In this episode Rose and David dive deep on their initial impressions with the Mac version of Shortcuts and how well it plays with traditional Mac Automation.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 078 Discussion](https://talk.automators.fm/t/78-wwdc-2021-shortcuts-comes-to-macos/11773).

# Sponsors
- [[Intrazone (Sponsor)|The Intrazone by Microsoft SharePoint]] - a bi-weekly conversation and interview podcast about SharePoint, OneDrive and related tech within Microsoft 365.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[HPE Tech Talk (Sponsor)|HPE Tech Talk]] - HPE news, tech Insights and world-class innovations. Listen now.

# Show Notes
- [Mac Power Users #592: WWDC 2021 and the Future of Mac Automation - Relay FM](https://www.relay.fm/mpu/592)
- [SF Symbols - Apple Developer](https://developer.apple.com/sf-symbols/)
- [Meet Shortcuts for macOS - WWDC 2021 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2021/10232/)
- [Design great actions for Shortcuts, Siri, and Suggestions - WWDC 2021 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2021/10283/)
- [Donate intents and expand your app’s presence - WWDC 2021 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2021/10231/)
- [Keynote - WWDC 2021 - Videos - Apple Developer](https://developer.apple.com/videos/play/wwdc2021/101/)

# Transcription
  
| Time Index | Transcription                                                                                                             |
| :--------- | :------------------------------------------------------------------------------------------------------------------------ |
| 00:00      | Welcome to The Automators. I'm David Sparks, and I'm joined by my co-host, Rosemary Orchard.                              |
| 00:07      | How are you, Rosemary?                                                                                                    |
| 00:09      | Oh, I'm excited, David. [[WWDC]] happened. There was an impulse purchase on my end. Yeah,                                     |
| 00:16      | things are exciting in a very good way.                                                                                   |
| 00:19      | Yeah, I mean, once a year, [[Apple]] unwraps the Christmas presents for us, and as automators,                                |
| 00:24      | we're always on the lookout for new stuff, and this year they deliver it again.                                           |
| 00:28      | We're going to spend a lot of this episode going through it, but at the top of the show,                                  |
| 00:32      | I just want to say, I feel like The Automators team and the Shortcuts team in particular                                  |
| 00:37      | are the boss over there. They're just doing so good right now.                                                            |
| 00:40      | Oh, yeah, yeah. I am really impressed. Multiple videos, Shortcuts appearing in videos                                     |
| 00:47      | that are technically not about shortcuts. It's great. I'm so impressed.                                                   |
| 00:52      | They're really doing such a great job. Not only are they delivering a great app and service,                              |
| 00:59      | but they're clearly influencing other people there, which is just wonderful.                                              |
| 01:04      | And they've become Mac developers this year.                                                                              |
| 01:07      | Yeah, which we hoped about, but we didn't expect.                                                                         |
| 01:12      | We hoped.                                                                                                                 |
| 01:13      | And yes, we got it.                                                                                                       |
| 01:15      | So we're going to get into all of that, but I'm not going to slip by that you just talked about an impulse purchase.      |
| 01:23      | And what happened, Rose?                                                                                                  |
| 01:27      | Okay, well, so this is linked to the fact that Shortcuts will be coming to Mac OS Monterey.                               |
| 01:35      | Yeah.                                                                                                                     |
| 01:36      | So of course, I have a book, Take Control Shortcuts. You have Shortcuts Field Guide.                                      |
| 01:42      | So this means for both of us, there is work required.                                                                     |
| 01:45      | And to some extent, this work is required before this is publicly available or before it's a standard release for people. |
| 01:52      | Yeah.                                                                                                                     |
| 01:53      | Now, I have a lovely M1 iMac. This is what I'm using right now. I'm recording on it. It works great.                      |
| 01:59      | But as you and I both know, and I'm sure many of our listeners are aware,                                                 |
| 02:03      | if you install a beta operating system, you can expect a certain number of things not to work.                            |
| 02:09      | And considering the fact that I have three podcasts, I have screencasts, I have writing and so on,                        |
| 02:15      | I thought, ah, but Monterey Crash is probably not going to, you know,                                                     |
| 02:20      | fly as an excuse for more than a day or two.                                                                              |
| 02:23      | I'm going to have a queue of people lining up to kill me if I just upgrade that.                                          |
| 02:28      | So I upgraded my Intel MacBook Air.                                                                                       |
| 02:30      | Now, my Intel MacBook Air has had an exciting couple of years since I got it.                                             |
| 02:37      | It likes its fans.                                                                                                        |
| 02:40      | And it's been around the world almost literally, mileage wise.                                                            |
| 02:45      | And it's a great machine. There is nothing wrong with it.                                                                 |
| 02:49      | But oh my gosh, the thing is loud. And I nuked it and paved it for Monterey.                                              |
| 02:53      | It didn't help.                                                                                                           |
| 02:55      | And it was honestly just giving me a bit of a headache.                                                                   |
| 02:58      | And then I found some of the Monterey features are only available on an M1 Mac.                                           |
| 03:02      | And of course, a lot of the apps which are going to be having shortcut support                                            |
| 03:07      | will also be just going, OK, actually, we're going to release our iOS app on macOS.                                       |
| 03:12      | But for that, you need an M1.                                                                                             |
| 03:14      | So the Intel won't work for those apps, yeah.                                                                             |
| 03:16      | The Intel does not work for those Macs at all.                                                                            |
| 03:19      | And so I looked at it and I went, huh, and I looked on the refurb store                                                   |
| 03:24      | and next day delivery on a refurbished MacBook Pro was available.                                                         |
| 03:30      | So at that arrive last Thursday.                                                                                          |
| 03:33      | Nice. Did you sell your Intel machine back to [[Apple]]?                                                                      |
| 03:36      | I have not yet sold my Intel machine. It's on my to-do list.                                                              |
| 03:39      | Or actually, technically, it's in my OmniFocus.                                                                           |
| 03:41      | I wanted to make sure that I've completely and utterly wiped that machine                                                 |
| 03:45      | before I send that off.                                                                                                   |
| 03:47      | But yeah, I will be getting rid of that because there's no point having two laptops,                                      |
| 03:52      | at least for me.                                                                                                          |
| 03:54      | I'm fine with, you know, now I'm sitting here surrounded by M1s.                                                          |
| 04:00      | Technically, my 12 Pro Macs does not have an M1 chip inside it,                                                           |
| 04:03      | but I've got a 12.9 inch iPad Pro here, a 13 inch MacBook Pro and an M1 Mac                                               |
| 04:09      | all within, you know, hands reach.                                                                                        |
| 04:12      | And wow, I'm loving the M1 life. It's so quiet, David.                                                                    |
| 04:15      | Yeah, you told me like a month ago that your plan was to just use the iMac as your Mac                                    |
| 04:20      | and then use your iPad with through like remote desktop to go in and run Mac stuff                                        |
| 04:27      | off your iPad like it was a laptop.                                                                                       |
| 04:29      | Yeah, and honestly, my plan for many things is absolutely still that.                                                     |
| 04:34      | I was hoping a little bit more for more developer-y targeted announcements at [[WWDC]].                                       |
| 04:43      | So, you know, being able to run a standard terminal on my iPad would be great,                                            |
| 04:48      | but there are apps for that like Secure Shellfish, Prompt from Panic,                                                     |
| 04:52      | things like that, all of which work great.                                                                                |
| 04:54      | So, you know, that's perfect.                                                                                             |
| 04:56      | But in this particular case, you know, I need to write a book on shortcuts,                                               |
| 05:01      | including shortcuts for Mac.                                                                                              |
| 05:02      | And as people are going to find out, that's not just a case of,                                                           |
| 05:05      | and it runs on the Mac, there's a lot more to it than it just runs on the Mac.                                            |
| 05:09      | So I need to be able to take all the screenshots and everything.                                                          |
| 05:11      | I consider doing a virtual machine or installing it on an external keyboard,                                              |
| 05:17      | all kinds of things.                                                                                                      |
| 05:18      | And I thought, no, the best solution really is just have a machine,                                                       |
| 05:22      | and this machine is the machine for this.                                                                                 |
| 05:24      | And who knows, I may actually sell it, you know, in a couple of months.                                                   |
| 05:30      | That would be fine.                                                                                                       |
| 05:31      | But I may not.                                                                                                            |
| 05:32      | Nothing should.                                                                                                           |
| 05:33      | I'll see.                                                                                                                 |
| 05:34      | My advice is to wipe your Intel Mac, get what you can from it from [[Apple]],                                                 |
| 05:40      | or if you want to like deal with the third party sellers.                                                                 |
| 05:42      | So they usually get you a little bit more money,                                                                          |
| 05:44      | but it comes a little more headache.                                                                                      |
| 05:46      | Yeah.                                                                                                                     |
| 05:47      | So [[Apple]] is not going to give me a lot of money for the MacBook Air,                                                      |
| 05:49      | even though it's definitely, but if you buy it from [[Apple]],                                                                |
| 05:52      | they're selling it for at least three times the price that they would give me for it.                                     |
| 05:56      | So I am going to go ahead and put that one on eBay.                                                                       |
| 05:59      | I need to double check that I can't convince my mom to upgrade from her first                                             |
| 06:02      | generation 12 inch MacBook, just MacBook.                                                                                 |
| 06:05      | But, you know, we'll see.                                                                                                 |
| 06:07      | Yeah.                                                                                                                     |
| 06:08      | But I would try and monetise that one and just keep the M1 because that's really the way                                  |
| 06:13      | and you get so spoiled with these laptops where the battery just runs all day.                                            |
| 06:17      | And I can't imagine you getting rid of it.                                                                                |
| 06:21      | I have been thinking too about, I know the show's about hardware,                                                         |
| 06:24      | but, but, you know, here I am.                                                                                            |
| 06:26      | Yeah.                                                                                                                     |
| 06:27      | I've been thinking a lot about it because, you know, we had these rumored                                                 |
| 06:29      | laptops coming out the MacBook Pros and I still think they're going to come out soon.                                     |
| 06:33      | And they're going to be like screamers, you know, compared to the M1s.                                                    |
| 06:37      | Yeah.                                                                                                                     |
| 06:38      | And, you know, like what is my next move?                                                                                 |
| 06:40      | You know, because I'm a nerd and I always am thinking about that.                                                         |
| 06:44      | So I was thinking I'd get a, you know, just a loaded MacBook Pro and make that my only                                    |
| 06:48      | Mac.                                                                                                                      |
| 06:49      | I've got this cool monitor I can plug it into, but it's just, that just never works                                       |
| 06:52      | for me.                                                                                                                   |
| 06:53      | I tried using this M1 laptop that way for a couple of weeks and it just, I just like the                                  |
| 06:58      | ability to sit down on my computer and start working and plugging and unplugging always                                   |
| 07:02      | seems to have headaches compared that I didn't, that I don't want to deal with.                                           |
| 07:06      | So currently I have an M1 laptop and an M1 Mac mini.                                                                      |
| 07:11      | And the more I think about it, I think my strategy will be whenever, you know, the stuff shakes                           |
| 07:16      | loose is to get the loaded Mac mini, whatever the next, you know, the, like the pro, I'm                                  |
| 07:21      | holding up air quotes, Mac mini is just kind of improve the Mac mini a bit and have that                                  |
| 07:26      | the one attached to my monster monitor and just keep the M1 laptop and just, you know,                                    |
| 07:31      | because for on the road and, and moving around, this is all the computer I need.                                          |
| 07:36      | Yeah.                                                                                                                     |
| 07:37      | Yeah, I have to confess the one thing I had kind of forgotten about is there are some                                     |
| 07:41      | events that I like to attend, which have hackathon days as the second day.                                                |
| 07:46      | And it's okay to remote into your machine for like half an hour, an hour or two is worth                                  |
| 07:51      | of use.                                                                                                                   |
| 07:52      | But if you're taking part in a hackathon, being able to run your code directly on your                                    |
| 07:56      | machine, regardless of the network is definitely something that I need to keep in mind.                                   |
| 08:01      | So I suspect that this M1 MacBook Pro is here to stay.                                                                    |
| 08:06      | I love it.                                                                                                                |
| 08:07      | You know, I've not had a 13 inch MacBook Pro before actually.                                                             |
| 08:10      | I've had a 15 inch.                                                                                                       |
| 08:12      | Actually, no, that's a lie.                                                                                               |
| 08:14      | My first MacBook after the MacBook Air was a 13 inch pro, but that had the CD slot in the                                 |
| 08:18      | side.                                                                                                                     |
| 08:19      | I've not had the modern form factor with USB C and I like it.                                                             |
| 08:22      | It's great.                                                                                                               |
| 08:23      | It seems to be doing everything I need it to do so far.                                                                   |
| 08:26      | I will say I'm still using my M1 iMac for most things.                                                                    |
| 08:30      | I'm sitting here talking into it right now because, you know, it's already set up for                                     |
| 08:35      | that.                                                                                                                     |
| 08:36      | But I've got the M1 MacBook Pro right here under my microphone because we've got plenty                                   |
| 08:40      | to talk about on the Mac today, David.                                                                                    |
| 08:42      | I am so excited that [[Apple]] is paying attention to automation on the Mac and everywhere, clearly,                          |
| 08:49      | because it's everywhere this year.                                                                                        |
| 08:51      | In particular on the Mac.                                                                                                 |
| 08:53      | And so we talked earlier that [[Apple|Apple's]] bringing shortcuts to the Mac.                                                      |
| 08:56      | There's a really good interview at Mac Power Users.                                                                       |
| 08:59      | We'll put a link in the show note where we, we actually had an [[Apple]] representative come                                  |
| 09:03      | on the show and talk about it.                                                                                            |
| 09:05      | The concern I had with shortcuts coming to the Mac was, you know, we have a rich ecosystem                                |
| 09:11      | of automation already on the Mac between [[AppleScript]], Shell script, and all the cool things                              |
| 09:16      | you can do with apps like [[Hazel]] and Automator and even TextExpander.                                                      |
| 09:21      | So number one is I wanted them to focus more on automation on mobile devices because there                                |
| 09:28      | is no rich ecosystem there.                                                                                               |
| 09:30      | It's just shortcuts.                                                                                                      |
| 09:32      | And number two, I was worried about if [[Apple]] shows up with shortcuts on the Mac, what,                                    |
| 09:38      | you know, are they going to start lobbying hand grenades at their competition?                                            |
| 09:43      | And like, are they going to disable [[AppleScript]] or are they going to make it so apps                                     |
| 09:49      | like [[Keyboard Maestro]] can't work on a Mac?                                                                                |
| 09:52      | And that's not the case.                                                                                                  |
| 09:54      | I mean, I think my worries were ill founded in hindsight because just on the, you know,                                   |
| 10:01      | zooming out on the 50,000 foot level, we've got shortcuts on the Mac, which brings over                                   |
| 10:07      | a bunch of cool actions from shortcuts on iOS that we didn't have on the Mac.                                             |
| 10:11      | Stuff that only [[Apple]] could really address through automation.                                                            |
| 10:15      | We still have Shell scripting and [[AppleScript]] in place.                                                                  |
| 10:19      | They have not removed it.                                                                                                 |
| 10:20      | Not only have they not removed it, they've added support for it in the new shortcuts,                                     |
| 10:24      | which means [[Apple]] is kind of on board with that stuff.                                                                    |
| 10:27      | And consequently, [[Keyboard Maestro]], [[Hazel]], Shell scripting, AppleScripting, all that                                     |
| 10:34      | stuff is here, you know, for the long haul and people can go down that deep if they want                                  |
| 10:40      | to stay at the shortcuts level and make nice little shortcuts and not worry about it.                                     |
| 10:44      | Yeah.                                                                                                                     |
| 10:45      | And I think this is what's really great.                                                                                  |
| 10:46      | You know, they're not killing anything off, at least not yet.                                                             |
| 10:50      | I say that because some of the way that they phrase certain things makes me feel like some                                |
| 10:56      | applications may be eliminated in the future, but certainly this year, nothing is going away.                             |
| 11:02      | What are you worried about?                                                                                               |
| 11:04      | Can you give me an example?                                                                                               |
| 11:05      | Well, I'm not worried about it.                                                                                           |
| 11:06      | The fact that you can import automator actions and convert automator actions to shortcuts,                                |
| 11:11      | and you know, they've made a thing about you can convert them to shortcuts, makes me feel                                 |
| 11:17      | like maybe the hint here is don't create things in automator anymore.                                                     |
| 11:22      | Create it in shortcuts because automator.                                                                                 |
| 11:25      | I agree with you.                                                                                                         |
| 11:26      | I think automator is not long for this world.                                                                             |
| 11:28      | And that makes me feel a little sad because our friend Sal was so instrumental in making                                  |
| 11:33      | automator.                                                                                                                |
| 11:34      | But if he were here, I think he'd also say, I don't care.                                                                 |
| 11:36      | So long as automation is on the Mac, I don't care what the platform is.                                                   |
| 11:40      | And really, automator is not shell scripting.                                                                             |
| 11:43      | Automator is just like shortcuts.                                                                                         |
| 11:45      | It's a layer on top of that to make it easy to use.                                                                       |
| 11:49      | And so we aren't actually losing automation tools so much as we're losing kind of the                                     |
| 11:56      | easy shell on top of it.                                                                                                  |
| 11:59      | And although I will say that one of the arguments they've made is that, hey, we're bringing                               |
| 12:05      | all the most important automator actions over is they're not bringing all of them over.                                   |
| 12:11      | And like I've already had a couple of break, I've got this really clever one I used to                                    |
| 12:17      | watermark PDFs all the time because I'm a lawyer.                                                                         |
| 12:19      | I send out draft PDFs every day.                                                                                          |
| 12:22      | So that action still only works in automator because they did not bring the watermark                                     |
| 12:28      | action over.                                                                                                              |
| 12:29      | I submitted a ticket on it.                                                                                               |
| 12:31      | And I could actually, I think, write it in shortcuts with a layering of an image with                                     |
| 12:37      | an opacity.                                                                                                               |
| 12:38      | Yeah, image overlay.                                                                                                      |
| 12:39      | But it's not the same as watermarking.                                                                                    |
| 12:42      | You have to monkey around with things.                                                                                    |
| 12:44      | You have to go through each page of the PDF.                                                                              |
| 12:47      | You might even have to convert them to images before you can do that.                                                     |
| 12:51      | I'm not 100% sure.                                                                                                        |
| 12:52      | Yeah.                                                                                                                     |
| 12:53      | And if you do that, then obviously there's no built-in text anymore.                                                      |
| 12:56      | And you have to OCR things afterwards.                                                                                    |
| 12:58      | That feels like it's, I feel like maybe missing a watermark was an oversight or at the very                               |
| 13:05      | least, they're not intending on you converting everything to images first.                                                |
| 13:11      | Or either just like the [[Kanban]] board inside the shortcuts team has a card that says watermark                             |
| 13:18      | and it hasn't been converted yet.                                                                                         |
| 13:20      | It's like they haven't got to it yet.                                                                                     |
| 13:23      | So I do think that we may lose a little bit that way if they don't take it all over.                                      |
| 13:30      | But I actually really feel like they're in real good faith trying to bring over everything.                               |
| 13:35      | And I know from, we've met all these people.                                                                              |
| 13:39      | When we had the automator set up at WWC, the shortcuts team in large part was there.                                      |
| 13:43      | In fact, some of the people giving these sessions I've met at our meet up.                                                     |
| 13:46      | Yeah, I think I've definitely met both of them from the shortcuts is coming to Mac OS                                     |
| 13:52      | session Ayaka and Ian.                                                                                                    |
| 13:53      | And I mean, they're lovely people in person.                                                                              |
| 13:55      | And I'm really glad to see, you know, that they are, you know, at [[WWDC]] presenting, you                                    |
| 14:01      | know, it's online this year, but hopefully next year there will be in person as well.                                     |
| 14:05      | Because I would love to meet the entire team again and congratulate them because clearly                                  |
| 14:10      | this is a huge step.                                                                                                      |
| 14:11      | Yeah.                                                                                                                     |
| 14:12      | And but I do know also, like just looking at the original core workflow team, they were                                   |
| 14:18      | heavily inspired by automator.                                                                                            |
| 14:20      | I mean, they saw that.                                                                                                    |
| 14:21      | And they're like, why don't we have something like that on the iPhone?                                                    |
| 14:24      | So they built it.                                                                                                         |
| 14:25      | And now, you know, kind of it's come full circle.                                                                         |
| 14:28      | But these people who started with affection for automator are not going to torpedo automator.                             |
| 14:33      | They're going to give us, I think, everything that they possibly can and make it better.                                  |
| 14:38      | I mean, I feel like Sal didn't get enough support from [[Apple]] on Automator.                                                |
| 14:43      | I feel like if he had been kind of unleashed on this thing, we would have had a lot of                                    |
| 14:47      | these souls years ago, but, you know, it didn't happen for whatever reason.                                               |
| 14:50      | And now it's happening.                                                                                                   |
| 14:53      | And there are so many pieces of shortcuts that are easier to automate than with shell and                                 |
| 15:01      | AppleScripting, like, you know, inherent pieces.                                                                         |
| 15:04      | Like I'm always struggling when I try to do shortcuts around contacts because there's                                     |
| 15:10      | just really not a good way to do that with [[AppleScript]] and shell script.                                                 |
| 15:13      | And I know people are going to start writing me their scripts and tell me how great they                                  |
| 15:16      | are at it.                                                                                                                |
| 15:17      | And it's just like, you know, kind of the layer automation that you get with keyboard                                     |
| 15:20      | and maestro that those apps don't really work that well with contacts, but contacts on                                    |
| 15:25      | iPhone and iPad with shortcuts is like trivially easy.                                                                    |
| 15:29      | And I expect we'll be getting the same kind of, you know, ease of use over on the Mac too.                                |
| 15:35      | I mean, the other one that we talk about all the time here is Timery and you and I have                                   |
| 15:40      | struggled to come up with these goofy automations for Timery.                                                             |
| 15:45      | And like that's going to be an app on the MacBook.                                                                        |
| 15:48      | Now it is an app on the Mac.                                                                                              |
| 15:49      | You know that he's going to put all those hooks in and you're going to write very easy                                    |
| 15:53      | automation for your time tracking using shortcuts.                                                                        |
| 15:57      | Yes.                                                                                                                      |
| 15:58      | Yes, we are.                                                                                                              |
| 15:59      | And, you know, I tweeted out to ask some developers, some people I managed to ping specifically                           |
| 16:06      | a tweet is never long enough and my memory always sucks when it comes to lift stall the                                   |
| 16:10      | developers who've got either great shortcut support or make shortcuts [[Apple]] apps off the                                  |
| 16:14      | apps off the top of your head and remember their Twitter handles.                                                         |
| 16:18      | So that that that was a challenge, but I tweeted some people and a lot of people are tweeted                              |
| 16:24      | back saying, yeah, I've already got, you know, a draft build of this, but, you know, theoretically                        |
| 16:28      | running on the current macOS beta, which considering the fact that this is like two days after                            |
| 16:33      | [[WWDC]], I was stunned.                                                                                                      |
| 16:36      | And, you know, and other people say that I'm working on our plan to do it and things like                                 |
| 16:41      | that. So I'm very excited because of course this means that, you know, we're going to                                     |
| 16:46      | have some of these apps that we already use and enjoy on, you know, on all of our platforms                               |
| 16:53      | and it looks to me based on what I've been seeing in the sessions that [[Apple]] have done                                    |
| 16:59      | a few things to make this easier and that hopefully you can use the same intense on                                       |
| 17:04      | both in both different applications, even if you have a completely separate application.                                  |
| 17:09      | So, you know, you pay, you pay for it once on the iPhone and you pay for it once on the                                   |
| 17:14      | Mac.                                                                                                                      |
| 17:15      | Theoretically, you can still have those same actions, which means that the shortcut that                                  |
| 17:19      | you run, then, you know, is the same shortcut, whichever platform, which is great because                                 |
| 17:24      | I know I wasn't able to verify if it's still like this.                                                                   |
| 17:27      | I suspect not.                                                                                                            |
| 17:28      | Things used to have different actions for things for iPad and things for iPhone.                                          |
| 17:32      | And I have a feeling if they currently do, then they won't need to do that anymore.                                       |
| 17:37      | And I have feeling they may have already fixed that anyway.                                                               |
| 17:41      | So, you know, this is great because it means even separate applications can have the same                                 |
| 17:46      | shortcut sections.                                                                                                        |
| 17:47      | So, you won't need to check, hopefully, if it's Mac, do this action.                                                      |
| 17:50      | If it's not Mac, do this other action.                                                                                    |
| 17:53      | And if it's [[Apple Watch]], then crash and die because this, you know, this doesn't work on                                  |
| 17:58      | [[Apple Watch]] or whatever.                                                                                                  |
| 17:59      | I'm being hyperbolic.                                                                                                     |
| 18:00      | You know, there are some things that don't necessarily work on the [[Apple Watch]] the same                                   |
| 18:04      | as they don't work on the HomePod, just because, you know, it needs to go in and do this or                               |
| 18:09      | do that or whatever.                                                                                                      |
| 18:10      | But, you know, most things work everywhere.                                                                               |
| 18:13      | And a couple of my shortcuts that I've got here, it turns out a lot of my shortcuts,                                      |
| 18:18      | David, rely on third-party actions.                                                                                       |
| 18:21      | Who knew?                                                                                                                 |
| 18:22      | And so, I dug around and all of the ones that I found, which are just using macOS or shortcuts,                           |
| 18:28      | core actions, work.                                                                                                       |
| 18:30      | So, I can toggle my Wi-Fi on and off through an action in the menu bar because shortcuts                                  |
| 18:35      | is in my menu bar.                                                                                                        |
| 18:36      | I do think that, historically, setting up automation for a Mac developer was a challenge                                  |
| 18:43      | because there's two things going on.                                                                                      |
| 18:46      | First, it's a lot of work to add [[AppleScript]] support to your app.                                                         |
| 18:50      | I mean, it's a lot of work to add any kind of support to your app.                                                        |
| 18:53      | But, you know, [[AppleScript]] is a language that a lot of programmers don't like because it's                                |
| 18:59      | supposed to be more human-friendly.                                                                                       |
| 19:01      | I actually like [[AppleScript]].                                                                                              |
| 19:03      | I'm comfortable with it, but I understand why some people don't.                                                          |
| 19:06      | So, you've got that barrier, but you also have the barrier knowing that very few users                                    |
| 19:11      | understand or have any desire to use [[AppleScript]].                                                                         |
| 19:14      | So, it's like, am I going to add a new feature to my app that everybody can take advantage                                |
| 19:20      | of, or am I going to spend that same time building an [[AppleScript]] support for a very                                      |
| 19:24      | small subset of my users?                                                                                                 |
| 19:26      | And I think too often the answer is, well, I'm going to add the new feature.                                              |
| 19:31      | But now, with shortcuts, you're going to have a massively bigger user base that wants these                               |
| 19:39      | shortcuts.                                                                                                                |
| 19:40      | So, and frankly, [[Apple]], I think, is putting in the time in the developer kit to make these                                |
| 19:46      | intents and these methods of using shortcuts much easier than historical [[AppleScript]] methods.                             |
| 19:53      | So, it's going to be a lower barrier and more users are going to want it.                                                 |
| 19:58      | And also, there's that thing.                                                                                             |
| 20:00      | You know whenever [[Apple]] adds a new feature, and this is a thing developers know, maybe                                    |
| 20:04      | listeners of the show don't know, but [[Apple]] adds some new feature, feature X.                                             |
| 20:08      | And, you know, let's say 50 developers really jump on that.                                                               |
| 20:12      | And at launch, they've got their apps already with feature X built into it.                                               |
| 20:17      | Well, go to the App Store and try to not see those apps because it's almost impossible.                                   |
| 20:22      | [[Apple]] is sticking those apps in front of your face, you know.                                                             |
| 20:25      | So, there's a marketing boost to them as well for adding support for this.                                                |
| 20:29      | So, I think there's a lot of good reasons for a lot of good app developers to add shortcuts                               |
| 20:34      | to their apps.                                                                                                            |
| 20:35      | And I think we'll see that you'll be surprised how many apps have really robust support for                               |
| 20:41      | shortcuts in September.                                                                                                   |
| 20:43      | Yeah.                                                                                                                     |
| 20:44      | And I'm hoping that, you know, we're going to see a lot of apps do this.                                                  |
| 20:47      | I know some app developers are not going to have this ready day one because they've got                                   |
| 20:52      | all of these other things that they also need to build in, you know, share play, things                                   |
| 20:56      | like that, you know, depending on the app, you know, certain features are probably more                                   |
| 21:00      | important than others to have on day one.                                                                                 |
| 21:02      | And there's a limited number of developer hours between now and whenever [[Apple]] actually                                   |
| 21:07      | releases this, because of course you don't know until the iPhone keynote.                                                 |
| 21:11      | And then, you know, it might be tomorrow, it could be Friday, it could be next week,                                      |
| 21:17      | you know, it could be today, they've done that before.                                                                    |
| 21:20      | I have seen developers having minor meltdowns on Twitter and I do not blame them because                                  |
| 21:25      | they thought they were going to be ready and they had a few more days and nope, it's today.                               |
| 21:29      | But, you know, we're going to see what happens and I'm pretty excited.                                                    |
| 21:33      | It looks like [[Apple]] have got, you know, quite a few things right here which will make it                                  |
| 21:37      | even easier.                                                                                                              |
| 21:39      | This episode of the Automator's Podcast is brought to you by the Intrazone by Microsoft SharePoint.                       |
| 21:46      | Your bi-weekly conversation and interview podcast about SharePoint, OneDrive, and related                                 |
| 21:51      | tech within Microsoft 365.                                                                                                |
| 21:53      | You're listening to the Automator's, you like technology.                                                                 |
| 21:56      | Why not continue to learn about technology with other technology related podcasts like                                    |
| 22:01      | the Intrazone from Microsoft?                                                                                             |
| 22:03      | If you're looking for a new show to listen to the Intrazone as a bi-weekly podcast with                                   |
| 22:08      | conversations and interviews on how Microsoft SharePoint, OneDrive, and related tech can                                  |
| 22:14      | work for you.                                                                                                             |
| 22:15      | You'll hear from guest experts behind the scenes and out in the field so you can see                                      |
| 22:19      | how SharePoint fits into your everyday work life to easily share and manage content, knowledge,                           |
| 22:25      | and applications.                                                                                                         |
| 22:26      | Each show covers a bunch of segments like news and announcements, a focused topic of the week,                            |
| 22:32      | guest perspectives, FAQs of the week, and upcoming events.                                                                |
| 22:37      | And the topic for each shows are really interesting.                                                                      |
| 22:40      | Previous episodes cover automation, which Rose and I love here at the Automator's.                                        |
| 22:45      | Also you can learn about migration to the cloud and crisis management and working remotely.                               |
| 22:50      | In the last episode, they focused on Visio for everyone.                                                                  |
| 22:54      | Learn how to take your diagramming skills to the next level in this episode featuring                                     |
| 22:59      | some of the team from Visio at Microsoft.                                                                                 |
| 23:01      | Learn how to leverage your Microsoft 365 account to get better at diagramming, which is something                         |
| 23:07      | I think everybody could benefit from.                                                                                     |
| 23:10      | They've got use cases for beginners to experts, web to desktop, and more.                                                 |
| 23:15      | It's a really good listen all in under an hour.                                                                           |
| 23:18      | So go and listen to it now.                                                                                               |
| 23:20      | Just search for the Intrazone wherever you get your podcasts.                                                             |
| 23:23      | That's I-N-T-R-A-Z-O-N-E.                                                                                                 |
| 23:27      | Or just click the link in the show notes.                                                                                 |
| 23:29      | Go check it out.                                                                                                          |
| 23:30      | Our thanks to the Intrazone by Microsoft SharePoint for their support of the Automator's                                  |
| 23:35      | and all of Relay FM.                                                                                                      |
| 23:37      | So, you know, we've kind of been dancing around this a little bit, David, but I think it's                                |
| 23:41      | time to talk about what new stuff there is in shortcuts.                                                                  |
| 23:45      | Because obviously, you know, with shortcuts being on the Mac, they've added things kind                                   |
| 23:51      | of specifically for the Mac, but it's not just specific for the Mac.                                                      |
| 23:56      | Getting apps is clearly targeted at macOS.                                                                                |
| 24:00      | And perhaps getting on-screen content as well.                                                                            |
| 24:04      | And clearly, [[AppleScript]] and  shell script execution is also, you know, macOS stuff.                                        |
| 24:09      | But some of this stuff, like split screen apps, doesn't just work on Mac.                                                 |
| 24:13      | It also works on iPad.                                                                                                    |
| 24:15      | And I'm pretty, you know, excited about this because there's a lot that you can do with                                   |
| 24:21      | just a couple of things here.                                                                                             |
| 24:24      | And you don't need to, you know, spend hours digging around and figuring out how do I figure                              |
| 24:29      | out if these two applications are open, you just say split screen.                                                        |
| 24:32      | And even if they're not open right now, macOS opens them and boom, split screen.                                          |
| 24:37      | Yeah.                                                                                                                     |
| 24:38      | And it's interesting on a couple levels because window management was not something that                                  |
| 24:43      | shortcuts ever had to deal with before.                                                                                   |
| 24:45      | And they have addressed it here.                                                                                          |
| 24:48      | And it's not just split screen.                                                                                           |
| 24:50      | You can also place a window on the screen through shortcuts action.                                                       |
| 24:53      | Like you can say, as far as I could find, the available options are left half of the screen,                              |
| 24:59      | right half of the screen, top left quadrant, top right quadrant, top, or bottom left quadrant,                            |
| 25:07      | bottom right quadrant.                                                                                                    |
| 25:08      | So you've got basically six different ways you can set a window with a shortcut, which                                    |
| 25:14      | is enough for most people.                                                                                                |
| 25:15      | It's not going to give you like, moon level accuracy and allow you to put it on an 8x6                                    |
| 25:21      | grid or anything.                                                                                                         |
| 25:22      | But for most of people, I think this is going to be just fine.                                                            |
| 25:25      | Yeah.                                                                                                                     |
| 25:26      | And I think that's the trick, isn't it?                                                                                   |
| 25:28      | You know, shortcuts is shortcuts.                                                                                         |
| 25:30      | It's not [[Keyboard Maestro]].                                                                                                |
| 25:31      | It is not [[Hazel]].                                                                                                          |
| 25:33      | It's none of the macOS applications that we are used to using right now for automation                                    |
| 25:40      | purposes.                                                                                                                 |
| 25:41      | But it's definitely a step above Automator while still retaining most of that ease of                                     |
| 25:45      | use, which is great.                                                                                                      |
| 25:47      | I actually had a conversation with somebody at my job today about shortcuts, and he was                                   |
| 25:52      | saying that he made a shortcut at the weekend and it took him about five minutes.                                         |
| 25:56      | And now he has a phrase that he can say at his iPhone.                                                                    |
| 26:00      | And if he says it, then it sends GPS coordinates, what three words and stuff to a couple of                               |
| 26:05      | different people so that they can find him.                                                                               |
| 26:09      | What three words for people who aren't familiar is a grid square with three words assigned                                |
| 26:14      | per grid square so that people can find a very small location and find out exactly where                                  |
| 26:20      | you are instead of just I'm in, I don't know, California, which kind of, you know, saying                                 |
| 26:26      | town names can be at times.                                                                                               |
| 26:28      | And I was really impressed.                                                                                               |
| 26:29      | You know, this is somebody who, okay, he's a programmer, but at the same time, you know,                                  |
| 26:34      | this is somebody who hadn't played with shortcuts before the weekend and he created a shortcut.                           |
| 26:38      | So I'm pleased that it is accessible for people.                                                                          |
| 26:42      | Yeah.                                                                                                                     |
| 26:43      | So there's a couple of points I want to follow up on there.                                                               |
| 26:45      | The first is that, you know, window and file management were necessary on the Mac because                                 |
| 26:51      | that's what the Mac is good at.                                                                                           |
| 26:54      | But we're seeing that a bunch of these actions have dribbled back to the iPhone and the iPad                              |
| 26:59      | and these betas.                                                                                                          |
| 27:00      | So we got better file management automation, you know, which is, you know, I said earlier,                                |
| 27:07      | I was hesitant to get shortcuts on the Macs.                                                                              |
| 27:09      | I thought they needed to focus on the iPad and iPhone, but what happened was by going                                     |
| 27:13      | to the Mac, it gave them additional tools to bring back to the iPad and the iPhone.                                       |
| 27:18      | I mean, I was just wrong on that, on that anti, you know, shortcuts on the Mac in every                                   |
| 27:23      | possible way.                                                                                                             |
| 27:24      | But, but that's great because now we're going to talk and maybe this show or a future show                                |
| 27:28      | about all the new file management stuff you can do with shortcuts on your iPhone and iPad,                                |
| 27:33      | which wouldn't have happened if they hadn't gone to the Mac.                                                              |
| 27:36      | Yeah.                                                                                                                     |
| 27:37      | It is great.                                                                                                              |
| 27:38      | Specifically for people who have, you know, who are curious about the file stuff, specifically                            |
| 27:45      | you can now label files, you can move files, rename files, obviously reveal files in Finder,                              |
| 27:53      | but you can also, you know, get the parent folder and get the contents of a specific                                      |
| 27:59      | folder.                                                                                                                   |
| 28:00      | Previously, if you got the contents of a file path and it was a folder, so say, for example,                              |
| 28:06      | inside of [[Dropbox]], you had a folder called Automators, then if you just put Automators                                    |
| 28:10      | in, in the path, then you could get everything inside the Automators folder, which is great                               |
| 28:15      | except, you know, you have to know that it was a specific thing that you have to know.                                    |
| 28:21      | And then it was get file from file path or whatever.                                                                      |
| 28:24      | And it just wasn't particularly logical.                                                                                  |
| 28:26      | Now there's a specific action to get the contents of a folder, which is great.                                            |
| 28:31      | And similarly renaming files.                                                                                             |
| 28:33      | This was quite tricky before.                                                                                             |
| 28:34      | Because people, the way that they did it, was they got the file, they saved the file,                                     |
| 28:39      | and then they deleted the original file, which was crazy works, but you shouldn't need to                                 |
| 28:44      | do that.                                                                                                                  |
| 28:45      | Like that, that's where things go wrong because then it didn't get saved.                                                 |
| 28:49      | And now you've deleted the file and that worked, saving it didn't and things like that.                                   |
| 28:54      | And, you know, it's not good.                                                                                             |
| 28:55      | So I'm really glad now that, you know, we have official actions for moving files, because                                 |
| 29:00      | again, people, the way they did that was they got the file, they saved it to the new location,                            |
| 29:05      | and then they deleted it.                                                                                                 |
| 29:06      | It's exactly the same.                                                                                                    |
| 29:07      | And now there's actions for that.                                                                                         |
| 29:08      | Yeah.                                                                                                                     |
| 29:09      | But saving it wasn't always where you wanted to save it because you could save it anywhere                                |
| 29:13      | in [[Dropbox]], but on [[Apple|Apple's]] own iCloud service, you had to save it to a shortcut subfolder.                                |
| 29:18      | So like I had this crazy system where I had these subfolders in the shortcut subfolder                                    |
| 29:24      | in iCloud, and then I had [[Hazel]] on my Mac constantly watching them, like anything saved                                   |
| 29:29      | a shortcut slash [[Obsidian]] copy to my [[Obsidian]] database, anything, and, you know, and I had                                |
| 29:34      | all these weird rules that I had to like move files after I had created them via shortcuts                                |
| 29:40      | because shortcuts wouldn't let me just put it where I wanted to, to begin with.                                           |
| 29:44      | And that problem is now solved.                                                                                           |
| 29:45      | So yeah, all this stuff I really think probably stems from them having to get shortcuts on                                |
| 29:51      | the Mac.                                                                                                                  |
| 29:52      | And that's, that's good, right?                                                                                           |
| 29:55      | Yeah.                                                                                                                     |
| 29:56      | Yeah.                                                                                                                     |
| 29:57      | So just to be very clear, because I'm sure some people will be going, wait, wait, what                                    |
| 29:59      | does this mean?                                                                                                           |
| 30:00      | So you can save files from shortcuts anywhere in iCloud drive and anywhere in [[Dropbox]].                                    |
| 30:07      | [[Dropbox]] was possible before, but now you've got anywhere in iCloud drive.                                                 |
| 30:13      | Similarly, you can get files from anywhere in iCloud drive, which means if, for example,                                  |
| 30:19      | you've been looking [[Obsidian]] going, yeah, I would really like [[Obsidian]], but you know,                                     |
| 30:24      | I'm using the iCloud sync and that means it's not really automation friendly.                                             |
| 30:27      | Well, with [[Shortcuts]], it now is.                                                                                          |
| 30:30      | So you have a whole bunch more options, which I'm sure people are, you know, not sure exactly                             |
| 30:37      | what that means yet.                                                                                                      |
| 30:38      | In some cases, in other cases, people are there running around like headless chickens                                     |
| 30:41      | going, oh my God, oh my God, oh my God.                                                                                   |
| 30:44      | That was me last, last Monday, David, when, when they started announcing all this stuff                                   |
| 30:49      | and things were trickling out as I was trying on my really bad internet, which finally got                                |
| 30:54      | fixed two days later to download the betas.                                                                               |
| 30:57      | But yeah, there, there's all sorts of great things that have come, you know, previously                                   |
| 31:02      | there was an exit shortcut action.                                                                                        |
| 31:04      | It's now called stop shortcut, which is a bit more friendly, but there's also stop and                                    |
| 31:08      | output.                                                                                                                   |
| 31:09      | So if you previously had an exit shortcut action, it gets upgraded to a stop and output, but                              |
| 31:14      | there's also just a straight up stop shortcut action, which just stops.                                                   |
| 31:18      | That's it.                                                                                                                |
| 31:19      | It doesn't have a specific output or anything.                                                                            |
| 31:20      | It's just end, which is, you know, which is great.                                                                        |
| 31:25      | And there's, there's also also things, you know, focus modes.                                                             |
| 31:27      | Okay.                                                                                                                     |
| 31:28      | Let's put a pin in focus modes.                                                                                           |
| 31:29      | I want to come back to that because there's a lot to talk about.                                                          |
| 31:32      | Yeah.                                                                                                                     |
| 31:33      | But there's also start screensaver and things like that.                                                                  |
| 31:35      | So, you know, if I run this shortcut, then it starts my screensaver, which, you know,                                     |
| 31:40      | is exactly what you want.                                                                                                 |
| 31:41      | But iPhone and iPad don't have a screensaver, you know, you could lock them.                                              |
| 31:47      | I'm actually curious as to what that action does on my iPad.                                                              |
| 31:50      | I've not tried starting a screensaver on my iPad yet, David, have you?                                                    |
| 31:54      | Does it even exist?                                                                                                       |
| 31:55      | I'm not sure that action came over.                                                                                       |
| 31:56      | So this is, this is what's really interesting.                                                                            |
| 31:59      | Vibrate device is available.                                                                                              |
| 32:01      | The action is available on all devices now.                                                                               |
| 32:06      | So okay.                                                                                                                  |
| 32:07      | So now if I, if I look at a shortcut with start screensaver in, and I try and run it,                                     |
| 32:11      | it says it can only run on the Mac and if you try and vibrate an iPad or a Mac, it's                                      |
| 32:15      | going to tell you, no, I don't vibrate.                                                                                   |
| 32:19      | So you are going to need in some cases to use if actions to work around this for things                                   |
| 32:25      | that only work on macOS or only work on iPhone and iPad or only work on iPhone and Apple                                  |
| 32:30      | watch.                                                                                                                    |
| 32:32      | And so you'll need to use get device details.                                                                             |
| 32:34      | And I would suggest something like device model.                                                                          |
| 32:38      | There's also device is watch, which is, you know, your device is an [[Apple Watch]].                                          |
| 32:42      | And if I get the device model on this MacBook Pro, then it tells me it's a Mac, Mac with                                  |
| 32:48      | a capital M.                                                                                                              |
| 32:50      | So if it's a Mac, don't vibrate, you know.                                                                                |
| 32:52      | Yeah, exactly.                                                                                                            |
| 32:53      | So I mean, in this case, you'll probably want to say if it's an iPhone vibrate, I don't                                   |
| 32:58      | know if you're going to be running your shortcut on the [[Apple Watch]].                                                      |
| 33:01      | And if you will want the haptic feedback in which case you can vibrate on the [[Apple Watch]],                                |
| 33:08      | that might be a little tricky to do, you probably have to do a nested if else if, and then just                           |
| 33:15      | otherwise don't vibrate, you know, go on to the next section because, you know, Macs                                      |
| 33:20      | don't have vibration.                                                                                                     |
| 33:21      | And I don't want to do it today, but someday I want to talk about how we're using shortcuts                               |
| 33:24      | on our watches because I'm very curious how you're using yours.                                                           |
| 33:27      | Yeah, it's something I need to definitely get into more because I feel like I don't                                       |
| 33:31      | use shortcuts on my watch anywhere near as much as I should.                                                              |
| 33:34      | Yeah.                                                                                                                     |
| 33:35      | And there's just a ton of actions that are specific to devices, like on the Mac, if you                                   |
| 33:41      | try to run the timing device, like set an alarm, set a timer, it just gives you a message                                 |
| 33:46      | that this isn't available on your Mac, which you kind of should be, honestly, I mean, the                                 |
| 33:50      | Mac is fully capable of running a timer, you know, but yeah, but you know, we're in beta                                  |
| 33:57      | one, too.                                                                                                                 |
| 33:58      | So who knows where this is going to end up.                                                                               |
| 34:01      | But there's some actions that I'm just so happy to see on the Mac, like I talked about                                    |
| 34:04      | earlier how having one device, like one Mac, one MacBook, one of the big problems is you've                               |
| 34:10      | got to properly eject drives before you unplug it from your monitor.                                                      |
| 34:14      | There's a shortcut called eject drive, right?                                                                             |
| 34:17      | Yep.                                                                                                                      |
| 34:18      | So all these apps that are out there to help you eject drives, maybe they just got sure                                   |
| 34:22      | like by smart people who want to use shortcuts, like you could run a shortcut that says, you                              |
| 34:26      | know, you know, remove Mac and you could eject drives and close windows and do a whole bunch                              |
| 34:31      | of stuff, run that shortcut, then unplug your MacBook and take it with you.                                               |
| 34:36      | Yeah, this is great because I mean, the other thing is, is of course we have folders as                                   |
| 34:41      | well.                                                                                                                     |
| 34:42      | So if you want to stick all your Mac shortcuts in a Mac folder, then you can go ahead and                                 |
| 34:46      | do that.                                                                                                                  |
| 34:47      | But you can also choose to stick your Mac shortcuts in say a menu bar or something like that because                      |
| 34:55      | I mean, shortcuts is literally everywhere it feels like, David.                                                           |
| 34:59      | It's kind of crazy.                                                                                                       |
| 35:01      | Yes.                                                                                                                      |
| 35:02      | Let me see.                                                                                                               |
| 35:03      | I have a screenshot here from the keynote, not from the keynote, sorry, but from, from                                    |
| 35:06      | the, the presentation that you did on shortcuts coming to the Mac and I've annotated it.                                  |
| 35:12      | And there it is.                                                                                                          |
| 35:14      | So you can run shortcuts.                                                                                                 |
| 35:15      | This is specific to the Mac, Siri, app, menu bar, keyboard shortcuts, spotlight, your dock,                               |
| 35:22      | finder, and I believe the touch bar as well.                                                                              |
| 35:26      | I've not got around to putting any shortcuts in my touch bar yet.                                                         |
| 35:28      | I don't know what ones I would run in my touch bar, but this is, yeah, this is pretty crazy.                              |
| 35:34      | You know, all of these actions are available to us and not only are all of these actions                                  |
| 35:38      | available to us, the vast majority of them work regardless of your device.                                                |
| 35:43      | And you know, it's, it's great that everything is just there and can be run anywhere.                                     |
| 35:51      | Yeah.                                                                                                                     |
| 35:52      | And we've talked about how it supports traditional automation.                                                            |
| 35:57      | There's a trifecta of commands, run shell script, run [[AppleScript]] and run [[JavaScript]]                                     |
| 36:03      | for Mac automation, which are the three traditional ways we created advanced automation on the                            |
| 36:08      | Mac.                                                                                                                      |
| 36:09      | All of that can be run from right inside your shortcuts.                                                                  |
| 36:13      | So while shortcuts, as we've said, is kind of the basic language of automation, if you've                                 |
| 36:17      | got an advanced [[AppleScript]] and you just decide to embed it in a shortcut step, your                                     |
| 36:23      | shortcut just got very powerful.                                                                                          |
| 36:26      | Yeah, it did.                                                                                                             |
| 36:28      | And speaking of shortcuts getting more powerful, we've still got actions like running shell                               |
| 36:33      | scripts you can run on your device, but you can still run a script over SSH that of course                                |
| 36:37      | works everywhere.                                                                                                         |
| 36:39      | And you can also, and when you want to try any of these scripting actions, the first                                      |
| 36:45      | time you do it, you'll, you'll be prompted if you want to allow scripting actions.                                        |
| 36:49      | And this is in the preferences of shortcuts then, if you say yes, where you need to take                                  |
| 36:53      | a box that enables or allow running scripts, which says when enabled, the, the actions                                    |
| 36:58      | run [[AppleScript]], run shell script, run [[JavaScript]] for Mac automation, run [[JavaScript]] on web page                          |
| 37:03      | and, and I can't read the rest of it because it's, it's running out of the box.                                           |
| 37:09      | And that's a box that I need to file through, through the feedback app, but basically it's                                |
| 37:14      | a checkbox that you need to turn on.                                                                                      |
| 37:15      | And there's a couple of other checkboxes here as well.                                                                    |
| 37:18      | So you can allow sharing large amounts of data, allow deleting without confirmation and                                   |
| 37:23      | allow deleting large amounts of data.                                                                                     |
| 37:26      | Which means that, you know, you can then, you know, have shortcuts, just delete things                                    |
| 37:33      | without you having to confirm.                                                                                            |
| 37:35      | If you're going to do that, please test your shortcut.                                                                    |
| 37:38      | I feel like I shouldn't need to say that, but please test your shortcuts before you,                                      |
| 37:43      | you delete things without confirmation.                                                                                   |
| 37:45      | Like make sure that you're definitely getting the right actions there or getting the right                                |
| 37:49      | files, reminders, calendar events, whatever it is, make sure you're getting the right                                     |
| 37:53      | things before you, you go ahead and delete everything and if you have that confirmation                                   |
| 38:00      | turned off.                                                                                                               |
| 38:01      | Remember when the workflow first got purchased by [[Apple]] and everybody was worried that would                              |
| 38:04      | be the end of it.                                                                                                         |
| 38:05      | You know, they'd break up the band and that would be in, I mean, who would imagine now                                    |
| 38:08      | we're getting shortcut actions like connect to server, you know, delete without confirmation.                             |
| 38:15      | One of this would have been possible if workflow had not been purchased by [[Apple]], you know,                               |
| 38:19      | this never would have happened.                                                                                           |
| 38:22      | Although I do wish they would get rid of those automation confirmation dialog boxes, that                                 |
| 38:27      | was kind of on my wish list for this year and that didn't really happen.                                                  |
| 38:30      | So we're still getting bubble pop-ups when we rent some of our more complex automation.                                   |
| 38:36      | And these pop-ups have kind of got a little bit more aggressive, I've noticed, at least                                   |
| 38:39      | the first couple of times they happen, where I have one particular automation that I run                                  |
| 38:46      | in the morning and it creates a bunch of widgets using widget pack.                                                       |
| 38:49      | And the way it does this is it runs a whole bunch of shortcuts in a folder.                                               |
| 38:55      | And so for every shortcut it ran, the first couple of times I was just clicking an allow                                  |
| 38:59      | button because I was half asleep because this triggers when my alarm goes off and when                                    |
| 39:06      | I stop it.                                                                                                                |
| 39:08      | And then I start, you know, I actually had my glasses on one morning and I was vaguely                                    |
| 39:12      | awake because I'd already woken up shortly before my alarm went off.                                                      |
| 39:15      | And I was looking at it and it turns out there's an always allow button.                                                  |
| 39:19      | So if I just hit the always allow button, then that would have been much easier.                                          |
| 39:23      | But basically, you know, the first couple of times that you run things on the new iOS,                                    |
| 39:29      | assuming nothing changes, iPadOS as well, of course, and maybe macOS, you might have                                      |
| 39:34      | to hit a couple of allow dialogues per shortcut depending on what it's doing and how it's                                 |
| 39:40      | doing things.                                                                                                             |
| 39:41      | Just because, you know, they've added in a bit of extra security, but I'm hoping that                                     |
| 39:45      | this means that by adding some extra stuff in this year, they're going to be able to                                      |
| 39:49      | relax some other things next year.                                                                                        |
| 39:52      | But we did see some automation improvements, David.                                                                       |
| 39:58      | This episode of the Automator's Podcast is brought to you by ExpressVPN.                                                  |
| 40:03      | Go to expressvpn.com/automators for high speed, secure and anonymous VPN services.                                  |
| 40:09      | Not only that, when you sign up at that link, you get an extra three months for free.                                     |
| 40:14      | There's a lot of VPN services out there, but you need to find a VPN service you can trust.                                |
| 40:20      | And that's why I use ExpressVPN.                                                                                          |
| 40:22      | I would not accept a VPN sponsor that I didn't trust and ExpressVPN is really good.                                       |
| 40:29      | Specifically, ExpressVPN doesn't log your activity online.                                                                |
| 40:33      | A lot of cheap or free VPNs make money by selling your data to advertisers.                                               |
| 40:37      | But ExpressVPN doesn't do this.                                                                                           |
| 40:39      | They even developed a technology called Trusted Server that makes their VPN servers incapable                             |
| 40:45      | of storing any data.                                                                                                      |
| 40:47      | Instead of using hard drives, they use RAM, so all data is wiped whenever the servers                                     |
| 40:51      | are powered down.                                                                                                         |
| 40:52      | And ExpressVPN is fast because it uses Lightway, a new VPN protocol they engineered to make                               |
| 40:58      | user speeds faster than ever.                                                                                             |
| 41:00      | If you've tried other VPNs, you'll know they can sometimes slow your connection.                                          |
| 41:04      | But ExpressVPN is always blazing fast and lets you stream video and HD quality with                                       |
| 41:10      | zero buffering.                                                                                                           |
| 41:12      | And it's super easy to use.                                                                                               |
| 41:13      | There's no technical skills needed.                                                                                       |
| 41:16      | Just fire the app and tap one button to connect.                                                                          |
| 41:19      | Kids, grandparents, tech savvy or not, could use it.                                                                      |
| 41:22      | And seeing it, the Verge and many other tech journals rate ExpressVPN their number one                                    |
| 41:27      | VPN in the world.                                                                                                         |
| 41:30      | It's their commitment to privacy, speed and usability that brought me in as a customer                                    |
| 41:36      | to ExpressVPN.                                                                                                            |
| 41:37      | I renewed just a little while ago and I've been renewing for years.                                                       |
| 41:41      | I love ExpressVPN and I use it all the time.                                                                              |
| 41:45      | Even during COVID when I was staying home, I still didn't want my cable provider to have                                  |
| 41:49      | all my data.                                                                                                              |
| 41:50      | I just felt like it was weird.                                                                                            |
| 41:51      | So I've been using ExpressVPN frequently.                                                                                 |
| 41:55      | So protect yourself with the VPN that I use and trust.                                                                    |
| 41:58      | Go to expressvpn.com/automators today and get an extra three months free with a                                     |
| 42:04      | one month package.                                                                                                        |
| 42:05      | That's expressvpn.com/automators.                                                                                    |
| 42:10      | Visit expressvpn.com/automators to learn more.                                                                      |
| 42:14      | Our thanks to ExpressVPN for their support of the automators and all of RelayFM.                                          |
| 42:19      | All right, before the ad break, you were teasing us about some things that they added.                                    |
| 42:24      | What are you talking about, Rose?                                                                                         |
| 42:26      | I'm talking about focus mode, David.                                                                                      |
| 42:28      | You put a pin in it earlier, I'm pulling that pin out where we're diving into focus mode                                  |
| 42:32      | because focus mode is, A, going to be a huge productivity booster for so many people and                                  |
| 42:39      | B, oh my gosh, so many automations.                                                                                       |
| 42:42      | I can't keep the excitement out of my voice because you can have automations run when you                                 |
| 42:48      | turn focus mode on and you can have automations turn focus mode on.                                                       |
| 42:53      | It's built into settings, a bunch of these automations with focus modes.                                                  |
| 42:59      | For example, you can have, you know, home screens change and so on and no, this is a                                      |
| 43:05      | shortcut thing.                                                                                                           |
| 43:06      | This is custom pages of your home screen and this works on iPhone and iPad to be clear                                    |
| 43:11      | for people.                                                                                                               |
| 43:13      | Tie that into changing your watch face and wow, you're going to have a great time.                                        |
| 43:20      | You can also, you know, inside of the settings for the focus mode.                                                        |
| 43:24      | You can have the focus mode turn on automatically from times, locations, apps, et cetera.                                 |
| 43:32      | I believe locations will need a confirmation the same as everything else does, but I'm                                    |
| 43:38      | not 100% certain.                                                                                                         |
| 43:40      | But there's also smart activation as well, which is pretty cool.                                                          |
| 43:46      | And so I'm looking forward to seeing what people do with this because there's so much                                     |
| 43:52      | that you can do with a focus mode that you couldn't do anywhere else and it sinks between                                 |
| 43:57      | your devices.                                                                                                             |
| 43:59      | So if I turn on focus mode on my [[Apple]], on my, on my iPhone, it sinks.                                                    |
| 44:04      | It's then on my Mac.                                                                                                      |
| 44:05      | It's on my iPad.                                                                                                          |
| 44:06      | It's on all of my devices.                                                                                                |
| 44:07      | I put my iPhone into do not disturb the other day and everything was quiet for my podcast                                 |
| 44:12      | recording, except for my M1 Mac.                                                                                          |
| 44:15      | And this is great.                                                                                                        |
| 44:16      | Usually, you know, there's an iPad somewhere that I've forgotten to put on silence.                                       |
| 44:20      | No, it's just, it does it for everything.                                                                                 |
| 44:23      | And this is great.                                                                                                        |
| 44:25      | It is, um, talk about a, I don't think [[Apple]] could have made a new feature that pushes                                    |
| 44:32      | all my buttons better than focus mode.                                                                                    |
| 44:35      | I mean, it's got tons of automation, which we're going to go and do today.                                                |
| 44:39      | It is definitely a Mac power user thing and I have a podcast called focus.                                                |
| 44:43      | So I mean, I'm not sure what they could have done better, but, but yeah, so focus is this                                 |
| 44:48      | idea that where you can, you know, I've talked a lot on this show and I'm like power users                                |
| 44:55      | about what I call contextual computing, which is like my little hobby horse of the last                                   |
| 44:59      | year of the idea that when you sit at your computer, that the computer should arrange                                     |
| 45:05      | itself for you to do your hard work, you know, and this is part, you know, productivity,                                  |
| 45:11      | but it's also really part automation.                                                                                     |
| 45:13      | You know, you want the ability that your computer anticipates what you're going to do and sets                            |
| 45:18      | you up for success to do that and doesn't give you all the distractions that computers                                    |
| 45:22      | can give you.                                                                                                             |
| 45:23      | And that's what this is.                                                                                                  |
| 45:24      | You pick a mode, like for an example, podcasting is one of my modes.                                                      |
| 45:29      | And when I turn podcasting on as a mode, um, it does a bunch of different things.                                         |
| 45:35      | First of all, it, it limits the people that can contact me.                                                               |
| 45:41      | And the way focus mode works is it builds this wall.                                                                      |
| 45:43      | I mean, it doesn't start with saying everybody can contact you, figure out the people who                                 |
| 45:48      | can't contact you.                                                                                                        |
| 45:49      | It says, no, focus is just the opposite.                                                                                  |
| 45:51      | It says nobody can contact you, figure out the people that you're going to let through                                    |
| 45:54      | the wall.                                                                                                                 |
| 45:56      | And like in podcasting, it's just Rosemary, Steven, and Mike and my wife, you know, the,                                  |
| 46:02      | my three podcast partners and, and my wife and anybody else who texts me while I'm recording,                             |
| 46:09      | I just don't see it.                                                                                                      |
| 46:11      | And it's so great not to be interrupted by a client or some, you know, just some silly                                    |
| 46:16      | text message that comes through while I'm sitting here trying to do the hard work of                                      |
| 46:20      | making a good podcast.                                                                                                    |
| 46:22      | And then you can also decide which apps can notify you.                                                                   |
| 46:26      | And like in this case, it would probably be zoom and some of the other apps I used to                                     |
| 46:29      | make the show, but nothing else.                                                                                          |
| 46:31      | And so this is great.                                                                                                     |
| 46:33      | But as an automator, there's so many layers you can add onto it, like Rose was talking                                    |
| 46:37      | about.                                                                                                                    |
| 46:38      | You can set on your iPhone and iPad a home screen custom to each focus mode.                                              |
| 46:44      | Yeah.                                                                                                                     |
| 46:45      | Like yesterday, we, um, I took a day off.                                                                                 |
| 46:47      | My wife and I went and spent the day at Disney's California Adventure, one of the theme parks                             |
| 46:51      | here in Anaheim, and I've created a Disneyland focus.                                                                     |
| 46:55      | And when I get to Disneyland, it did give me a confirmation, by the way, it turned on.                                    |
| 47:00      | And then my home screen for the day had like a battery widget and, you know, just the stuff,                              |
| 47:06      | the weather and the stuff I need, and the Disneyland app, the stuff I need on my home                                     |
| 47:10      | screen when I'm at Disneyland and the other home screen went away.                                                        |
| 47:14      | And yeah, I didn't get bothered by their stuff.                                                                           |
| 47:17      | And it's just really great.                                                                                               |
| 47:19      | But I mean, as Rosemary was saying, this is so automation, like friendly, like you can                                    |
| 47:25      | set focus modes with a shortcut.                                                                                          |
| 47:29      | So you could create a shortcut that you could tap on your watch and say, okay, I'm going                                  |
| 47:33      | into a meeting, set up meeting mode, and then your, your do not disturb gets turned on for                                |
| 47:38      | most people except the key people that you carve out the home screen on your phone changes,                               |
| 47:43      | the home screen on your iPad changes.                                                                                     |
| 47:45      | I mean, all this stuff just happens.                                                                                      |
| 47:47      | I mean, this is the beauty of automation and it's not that difficult to set it up.                                        |
| 47:52      | Yeah.                                                                                                                     |
| 47:53      | Yeah.                                                                                                                     |
| 47:54      | It really is.                                                                                                             |
| 47:55      | And I love the fact that focus mode.                                                                                      |
| 47:57      | So, uh, I'm just going to have a quick walkthrough of the default focus mode.                                             |
| 48:01      | So do not disturb still exists.                                                                                           |
| 48:04      | And that button in the control centre is kind of split into two now where, uh, there's a                                  |
| 48:08      | circle on the left hand side of it, where if you tap that, it will just toggle do not                                     |
| 48:12      | disturb on and either off if it's on, or if there's a focus mode on, it will toggle the                                   |
| 48:16      | focus mode off.                                                                                                           |
| 48:18      | If you tap on the right side of it, then you can choose between focus modes.                                              |
| 48:22      | So there are some default ones, which people might be familiar with, which include driving,                               |
| 48:27      | sleep, um, and there's also work and personal, uh, which are new and you, you, you go through                             |
| 48:33      | and you set them up.                                                                                                      |
| 48:34      | And if you haven't set it up, then it shows up in the settings with a set up option.                                      |
| 48:38      | Um, and it walks you through the things that David was saying, you know, which people do                                  |
| 48:42      | want to let through, which apps do you want to let through, so on and so forth, setting                                   |
| 48:45      | things up automatically and so on.                                                                                        |
| 48:47      | Um, and then you can add another five focus modes.                                                                        |
| 48:52      | So you can go fairly nuts with this.                                                                                      |
| 48:55      | Um, I mean, I say fairly nuts because at the end of the day, you've got work personal,                                    |
| 49:00      | um, and then five others that you can customise and work.                                                                 |
| 49:03      | Obviously you can, you can change to mean whatever you want.                                                              |
| 49:06      | Work and personal can't be renamed.                                                                                       |
| 49:08      | The other five you can give any icon, any name to that you like.                                                          |
| 49:12      | You can, you can turn on dimming your lock screen and things like that.                                                   |
| 49:16      | Um, there's these time sensitive notifications.                                                                           |
| 49:19      | You can allow them to come through and so on.                                                                             |
| 49:21      | Um, and this, you know, this is really great as far as I'm concerned.                                                     |
| 49:26      | I, I know I, I wear lots of different hats, um, but I'm pretty certain I can boil it down                                 |
| 49:32      | to, you know, the day job, which is work personal, which is going to be, I'm hanging out with                             |
| 49:37      | people, be that friends or family, and then five other things, one of which is already                                    |
| 49:41      | assigned podcasting.                                                                                                      |
| 49:42      | No surprise there.                                                                                                        |
| 49:43      | Oh, Rose, where did you get this limitation for five?                                                                     |
| 49:46      | Where do you see that?                                                                                                    |
| 49:47      | Because I can't add any more when I've added five.                                                                        |
| 49:49      | Okay.                                                                                                                     |
| 49:50      | I've added 12, so I'm not sure.                                                                                           |
| 49:52      | Wow.                                                                                                                      |
| 49:53      | Okay.                                                                                                                     |
| 49:54      | This is crazy because I've been trying for days, like my plus button is just gone.                                        |
| 49:59      | It doesn't help that every time I, I put my, uh, my [[Apple Watch]] near my iPad or my iPhone,                                |
| 50:04      | I get a notification at the top saying, would you like to use this device as a keyboard                                   |
| 50:07      | for your [[Apple Watch]]?                                                                                                     |
| 50:08      | No.                                                                                                                       |
| 50:09      | Um, it's just popped up again, but I, I definitely can't add more than five.                                              |
| 50:14      | Okay.                                                                                                                     |
| 50:15      | Well, I'm going to, I'm going to have to look into that, David.                                                           |
| 50:17      | Maybe, maybe I've got a bug or maybe you've got a bug on some of yours, go disappear or                                   |
| 50:21      | I'm going to get the ability to, uh, to create these, but I've been adding them from multiple                             |
| 50:26      | devices as well.                                                                                                          |
| 50:27      | I've added them on iPad, iPhone, and Mac.                                                                                 |
| 50:29      | So I don't know.                                                                                                          |
| 50:30      | Okay.                                                                                                                     |
| 50:31      | Well, my plus button is disappeared on all of my devices.                                                                 |
| 50:33      | That's the thing.                                                                                                         |
| 50:34      | Weird.                                                                                                                    |
| 50:35      | Cause, cause in, in settings, focus, there should be a plus in the top right and I definitely                             |
| 50:40      | don't have one.                                                                                                           |
| 50:41      | Yeah.                                                                                                                     |
| 50:42      | And I don't know that I added them from that.                                                                             |
| 50:45      | I'll have to, I'll have to go back.                                                                                       |
| 50:46      | I mean, we're in beta one, so we're all learning at the same time.                                                        |
| 50:49      | Yeah.                                                                                                                     |
| 50:50      | Yeah.                                                                                                                     |
| 50:51      | I mean, at the moment, I think it is limited to five, which seems like a reasonable limitation,                           |
| 50:54      | but if they can remove that entirely for everybody, that would be great.                                                  |
| 50:57      | Why would there need to be any limitation?                                                                                |
| 50:59      | Honestly.                                                                                                                 |
| 51:00      | I mean, honestly, I will do randomly decide limitations on, on our behalf, which people                                   |
| 51:04      | are not always that happy with.                                                                                           |
| 51:06      | Cause I was, I was thinking I would add one actually for each podcast, like recording                                     |
| 51:11      | automators.                                                                                                               |
| 51:12      | That's what I wanted to do, but then I found out it was five and I thought, no, I'm, I'm                                  |
| 51:15      | going to need more for this.                                                                                              |
| 51:18      | So we'll see.                                                                                                             |
| 51:20      | Well, we will look into that and report back.                                                                             |
| 51:22      | Hopefully that, hopefully my 12 is, is not the anomaly, but the, um, either way, uh,                                      |
| 51:28      | it's very powerful and the automation in is very simple.                                                                  |
| 51:31      | There is a focus, it's a new action in, in shortcuts, you know, start a focus and, um,                                    |
| 51:37      | the automation out, I feel like could be better.                                                                          |
| 51:40      | Um, like I would like to trigger shortcuts out of a focus mode unless I'm missing something.                              |
| 51:46      | So you can.                                                                                                               |
| 51:47      | So inside of short in the inside of the shortcuts app, this is much like, uh, this is an automation                       |
| 51:53      | trigger.                                                                                                                  |
| 51:54      | Yeah.                                                                                                                     |
| 51:55      | Yeah.                                                                                                                     |
| 51:56      | It's an automation trigger and you can turn off ask him running.                                                          |
| 51:57      | Um, and actually one of the first things I did was create, um, a shortcut for this                                        |
| 52:01      | because I've set my work to be every Monday to Friday, but I don't necessarily work every                                 |
| 52:07      | Monday to Friday, I could have a bank holiday, I could have a day off.                                                    |
| 52:11      | I don't want to be turning my automation off to turn my focus mode on.                                                    |
| 52:15      | That feels like it kind of defeats the point, but what I do want to do is say, Hey, if it's                               |
| 52:21      | a holiday or I am on holiday, then turn my focus mode back off, please.                                                   |
| 52:26      | Um, so turning the focus mode on triggers a shortcut, which checks whether or not it's                                    |
| 52:30      | a holiday day or a vacation day.                                                                                          |
| 52:32      | Um, and then it turns the focus mode off again, if it is one of those, and otherwise it just                              |
| 52:38      | does nothing.                                                                                                             |
| 52:39      | Um, and so this now happens automatically whenever, uh, my, my work mode comes on, which                                  |
| 52:45      | means when the next, uh, bank holiday comes up at the end of August, uh, I will, uh, you                                  |
| 52:51      | know, hopefully see it toggle on and toggle back off.                                                                     |
| 52:54      | Um, or maybe it just won't turn on at all because it'll realise it turns off that day.                                    |
| 52:58      | Another thing I'd really like them to see them add, uh, and I'm going to submit a tick,                                   |
| 53:02      | and I just haven't got around to it yet is a separate shortcut action just to set home                                    |
| 53:07      | screen.                                                                                                                   |
| 53:08      | Cause now that you have the ability to set the home screen, I want to do that automatically                               |
| 53:12      | without entering a focus mode.                                                                                            |
| 53:14      | Like what if I just want to get my health apps on my screen, but I don't need to, I don't                                 |
| 53:19      | need to deal with it.                                                                                                     |
| 53:20      | It doesn't affect notifications and access to me, but I just want to be able to put my,                                   |
| 53:25      | my home screen with all my health data on it.                                                                             |
| 53:27      | You know, I'd like to be able to do that.                                                                                 |
| 53:30      | This is something I was looking at as well because I was thinking, oh, I could create                                     |
| 53:32      | a focus mode for travel, but the problem is, is when I'm traveling, I'm, I'm not necessarily                              |
| 53:37      | going to know in advance where notifications are going to come from to be useful.                                         |
| 53:41      | Yeah.                                                                                                                     |
| 53:42      | Um, I want all the notifications from everywhere because airlines can email me.                                           |
| 53:46      | It could be the flighty app tells me something.                                                                           |
| 53:48      | It could be tripped.                                                                                                      |
| 53:49      | It tells me something.                                                                                                    |
| 53:50      | It could be that my friend texts me and goes, Hey, I heard this thing because they have                                   |
| 53:55      | a friend of a friend of a friend who works in air traffic control or whatever.                                            |
| 53:58      | Um, you know, it, it, it's one of those things where I had the last thing I want to do is                                 |
| 54:03      | be limiting my notifications when traveling, but I absolutely want different home screens.                                |
| 54:09      | No doubt about it.                                                                                                        |
| 54:10      | And there's a couple of ways you could do that.                                                                           |
| 54:11      | One would be, um, and the way I describe focus earlier is the way it should be.                                           |
| 54:16      | It builds the wall.                                                                                                       |
| 54:17      | Then you make holes for the people you want to let through, but there could be another                                    |
| 54:20      | setting button that just says let them all through, you know, and, and there'll be occasions                              |
| 54:26      | where you have a focus mode where that makes sense.                                                                       |
| 54:28      | Um, or like I said, just let us automate which screen is, you know, the home screen and turn                              |
| 54:34      | them off and on through via automation and just leave it out of focus mode entirely,                                      |
| 54:39      | particularly if there's only five of them that you're allowed to add.                                                     |
| 54:42      | Um, and I think that would work.                                                                                          |
| 54:44      | I mean, the other way you do it, and all you do is you long press on the, the home screen                                 |
| 54:49      | buttons at the bottom of your iOS device and then you tap it again and you, you can literally                             |
| 54:52      | manually turn them off and on, but we're automators.                                                                      |
| 54:55      | That's like, that's for, that's for, uh, monkeys.                                                                         |
| 54:58      | We want, we want to automate this stuff, right?                                                                           |
| 55:00      | We don't want to be sitting there like a monkey tapping on our phone to turn screens off and                              |
| 55:04      | on.                                                                                                                       |
| 55:05      | Hmm.                                                                                                                      |
| 55:06      | Yeah.                                                                                                                     |
| 55:07      | Yeah.                                                                                                                     |
| 55:08      | It would be much better if we, we have more options.                                                                      |
| 55:10      | Um, I would also love it.                                                                                                 |
| 55:12      | Um, and I'm going to file some feedback on this.                                                                          |
| 55:14      | If I could say, Hey, let anybody in this group or this group through, because I have a group                              |
| 55:19      | of a, it's called favourite contacts.                                                                                      |
| 55:22      | Um, and this is not related to the favourites feature in iOS.                                                              |
| 55:25      | It's a group that I created myself, but it's basically a very small group of people who                                   |
| 55:30      | I would always like to be able to contact me.                                                                             |
| 55:32      | Yeah.                                                                                                                     |
| 55:33      | I would love to just select that group.                                                                                   |
| 55:35      | Similarly, for work, it would be great if I could select the work address book as people                                  |
| 55:39      | who are able to get in touch with me.                                                                                     |
| 55:41      | Yeah.                                                                                                                     |
| 55:42      | But when I'm working, everybody I work with needs to be able to get in touch with me and                                  |
| 55:46      | I, it would be great if I could just say everybody in this context, uh, you know, group, uh,                              |
| 55:52      | which gets updated automatically because it's exchange.                                                                   |
| 55:55      | Um, so, um, you know, they, they might have to build in some extra work for that, but                                     |
| 55:59      | I'm definitely going to file that as feedback because I feel like especially work wise, you're                            |
| 56:04      | not going to want to go through and go, yes, my boss is allowed to contact me, but this                                   |
| 56:08      | colleague who never shares their biscuits is not allowed to contact me.                                                   |
| 56:11      | Uh, biscuits are cookies for the Americans.                                                                               |
| 56:14      | Um, uh, so, uh, especially if it's cookies, they need to share cookies.                                                   |
| 56:17      | Um, anyway, um, you know, it would be good if everything could just do that.                                              |
| 56:21      | I just wrote about that last week in MacSparky.                                                                          |
| 56:23      | Same thing.                                                                                                               |
| 56:24      | Contact groups.                                                                                                           |
| 56:25      | Like I want to make a focus group where clients can get a hold of me.                                                     |
| 56:29      | Going through with the current system, I would have to go through and select each client                                  |
| 56:33      | individually and add them.                                                                                                |
| 56:35      | And you can't even search for clients either.                                                                             |
| 56:37      | So I was trying that just now.                                                                                            |
| 56:39      | I tried searching for sparks as in David Sparks.                                                                          |
| 56:42      | No, I had, I had to use the, the, the, um, alphabet, uh, scroll on the right hand side.                                   |
| 56:48      | A little tip for people who don't know, by the way, if you drag on that, then you, you                                    |
| 56:51      | drag down between the letters.                                                                                            |
| 56:53      | Um, and so that allowed me to get to S very quickly and I rise and needed to go to T and                                  |
| 56:57      | then scroll back upwards from there because sparks is closer to T than it is, you know,                                   |
| 57:02      | um, the letter for, for in the alphabet are, uh, there we go.                                                             |
| 57:06      | Um, so, uh, yeah, I, I had to do that.                                                                                    |
| 57:09      | Uh, which, you know, it works, but it, it would be better if I could just select a group.                                 |
| 57:13      | Yeah.                                                                                                                     |
| 57:14      | And like if you had a client group, when you add a new person to that group, they're                                      |
| 57:17      | automatically added, you don't have to go and manually re-add them.                                                       |
| 57:20      | And then when you have multiple focuses, like my nuclear family gets through in almost all                                |
| 57:26      | of my focuses.                                                                                                            |
| 57:27      | If my kids or my wife texts me, I need to know, you know how many times I've gone through                                 |
| 57:31      | the process now of selecting them and new focuses?                                                                        |
| 57:35      | I'm guessing as you've created 12 and there are four default ones, that's going to be                                     |
| 57:40      | 16 times that you've done that.                                                                                           |
| 57:42      | Yeah.                                                                                                                     |
| 57:43      | So it's nuts.                                                                                                             |
| 57:44      | Um, but yeah, I mean, we're power users.                                                                                  |
| 57:47      | So of course we have a list of things we want added, but I think overall this focus                                       |
| 57:50      | mode is really great and I think for automators, it is something that can really help you                                 |
| 57:57      | work on that contextual compute, uh, like Rose, I love that it's distributed across all devices.                          |
| 58:03      | It's sad to me because my podcast machine, the one I record podcasts is the one that                                      |
| 58:07      | it doesn't get it because that'll be the last one to get the update and, um, it'll be months.                             |
| 58:12      | So, um, it's just, uh, that's a bummer, but, but I mean, you can see where this is going                                  |
| 58:18      | and, and I love it.                                                                                                       |
| 58:20      | Yes.                                                                                                                      |
| 58:21      | I really love it too.                                                                                                     |
| 58:23      | And I saw, um, somebody posting, I can't remember who it was and I've, I've not got the link                              |
| 58:28      | to the post.                                                                                                              |
| 58:29      | If I can find it again, um, then I'll link it.                                                                            |
| 58:31      | It was a, the shortcut subreddit, somebody has realised that through the combination                                      |
| 58:36      | of focus mode and push cut, you can use Zapier to trigger, uh, push cut on, on your, on an                                |
| 58:45      | iPhone server, for example, and then that can turn on a focus mode, which then spreads                                    |
| 58:50      | to all of your devices and can run a shortcut on each of your individual devices through                                  |
| 58:55      | those automations without you having to confirm it in advance, which means that all of your                               |
| 59:01      | devices now can do stuff.                                                                                                 |
| 59:04      | Like it's kind of mind boggling to think, you know, that they can do all of these things.                                 |
| 59:08      | Uh, but I'm, I'm extremely happy with it.                                                                                 |
| 59:11      | Yeah.                                                                                                                     |
| 59:12      | And I would really like to see them add, um, focus mode buttons to the [[Apple Watch]], um,                                   |
| 59:19      | which I have not figured out how to do yet.                                                                               |
| 59:22      | I mean, I can do it via automation with a shortcut, but, um, it would be cool if like,                                    |
| 59:28      | you know, we had a very easy way to trigger focuses, even just with the [[Apple Watch]], because                              |
| 59:32      | that's all you need.                                                                                                      |
| 59:33      | Yeah.                                                                                                                     |
| 59:34      | So, um, if I tap, that's the wrong button, uh, this is kind of tricky.                                                    |
| 59:39      | If I tap, if I tap, so if you swipe up from a watch face, David, and you find the do not                                  |
| 59:44      | disturb moon, if you tap on that, it does show me the different focus modes that I've                                     |
| 59:48      | got.                                                                                                                      |
| 59:49      | Oh, it's already there.                                                                                                   |
| 59:50      | So you, you've got your watch running the new beta.                                                                       |
| 59:53      | Yes.                                                                                                                      |
| 59:54      | Yes, I do.                                                                                                                |
| 59:55      | I also have 15% battery life.                                                                                             |
| 59:57      | So ask me again how that's going.                                                                                         |
| 59:59      | Uh, I do not recommend people run the watchOS beta.                                                                       |
| 01:00:02   | I made a stupid mistake.                                                                                                  |
| 01:00:03   | I was playing with [[SwiftUI]] and I wrote a watchOS application.                                                             |
| 01:00:07   | Oh, you know what, Rose?                                                                                                  |
| 01:00:08   | I'm installing the beta tonight that, that, for that reason.                                                              |
| 01:00:11   | Don't do it, David.                                                                                                       |
| 01:00:12   | I'm doing it.                                                                                                             |
| 01:00:13   | I'm going to do it.                                                                                                       |
| 01:00:14   | Because your battery life will suck.                                                                                      |
| 01:00:15   | So badly.                                                                                                                 |
| 01:00:16   | My battery life already sucks.                                                                                            |
| 01:00:17   | My watch is like three years old, so it'll just be worse.                                                                 |
| 01:00:19   | Oh, okay.                                                                                                                 |
| 01:00:20   | Um, I mean, you're, you're going to get like five minutes out of it if you're lucky.                                      |
| 01:00:24   | Um, also it keeps waking up all of my other devices because anytime I put my [[Apple Watch]]                                  |
| 01:00:30   | near an iPad or an iPhone, they light up and say [[Apple Watch]] keyboard input, enter text                                   |
| 01:00:36   | on your [[Apple Watch]] using, sorry, I need to move it back again because I moved it further                                 |
| 01:00:40   | away because this is annoying me.                                                                                         |
| 01:00:41   | And now the notification doesn't show.                                                                                    |
| 01:00:43   | Basically, you can use your iPhone and iPad to type into your [[Apple Watch]], which I'm not                                  |
| 01:00:47   | 100% certain I understand the utility of, uh, for, uh, an average user, perhaps, uh,                                      |
| 01:00:52   | for accessibility purposes, it makes sense.                                                                               |
| 01:00:55   | Um, uh, but then why wouldn't you just pick up your iPhone to do the action instead?                                      |
| 01:01:00   | Either way, um, this is slightly, uh, frustrating.                                                                        |
| 01:01:04   | Uh, yes, press the type.                                                                                                  |
| 01:01:06   | And then if I tap on notification, it's kind of like the [[Apple TV]] remote where you can                                    |
| 01:01:11   | then type onto the [[Apple TV]] from your iPhone or your iPad, except it's slow and it comes                                  |
| 01:01:15   | up with connecting to start with.                                                                                         |
| 01:01:18   | Well, I, uh, I love focus modes.                                                                                          |
| 01:01:21   | I think it's great and it, even as it's shipping, I'm very happy with it.                                                 |
| 01:01:25   | I would like to, we, we've already kind of raised some things.                                                            |
| 01:01:28   | We'd like to see them fixed with it, but, um, this is exactly what I want.                                                |
| 01:01:32   | I want to be able to have my computers set themselves up for me automatically for me                                      |
| 01:01:37   | to do the hard work and like when I hit, you know, legal work focus, I get a set of apps                                  |
| 01:01:44   | and services and, and accounts on my screen that matter to that.                                                          |
| 01:01:49   | And I love it.                                                                                                            |
| 01:01:50   | I'm just very happy with this.                                                                                            |
| 01:01:51   | And this is something that everybody can use.                                                                             |
| 01:01:53   | I hope a lot of people kind of find religion with this stuff because I think you can really                               |
| 01:01:56   | make a difference on staying on target and getting your hard work done so you can go                                      |
| 01:02:01   | and enjoy the rest of your life.                                                                                          |
| 01:02:04   | This episode of Automators is brought to you by Tech Talk, a podcast from the folks at                                    |
| 01:02:07   | Hewlett Packard Enterprise.                                                                                               |
| 01:02:09   | I love finding new shows to listen to, especially when they're short, but incredibly interesting.                         |
| 01:02:14   | And Tech Talk is a show that talks you through HPE news, tech insights and world class innovations.                       |
| 01:02:19   | I recently listened to the episode on Walt Disney Studios and their experiments with                                      |
| 01:02:24   | AI and machine learning.                                                                                                  |
| 01:02:26   | Of course, I used to work for Disney as did David, so anything with Disney in the title                                   |
| 01:02:30   | definitely captures my attention.                                                                                         |
| 01:02:32   | But in particular, I found it interesting how they're using technology and specifically                                   |
| 01:02:36   | AI and so on in the realms of visual effects because who wouldn't find that interesting?                                  |
| 01:02:42   | I think all of you would.                                                                                                 |
| 01:02:44   | And if you want to listen to, you can expect some other topics like how to tackle issues                                  |
| 01:02:48   | when it comes to high performance computing, the future of technology, data measurement                                   |
| 01:02:52   | and disruptive software ecosystems and AI, and even supercomputing aboard the International                               |
| 01:02:58   | Space Station.                                                                                                            |
| 01:02:59   | And the show takes you straight to the source, interviewing some seriously impressive tech                                |
| 01:03:03   | leaders.                                                                                                                  |
| 01:03:04   | Previous guests have included Dr. Michael Roberts from the ISS US National Lab, Sanjeev Katwa,                            |
| 01:03:11   | H.C.T.O. of Tottenham Hotspur Football Club, and Monica Livingstone from Intel.                                           |
| 01:03:16   | Check out Tech Talk wherever you get your podcasts.                                                                       |
| 01:03:19   | Search for Tech Talk now or click the link in the show notes.                                                             |
| 01:03:22   | Our thanks to HPE Tech Talk for their support of this show and Relay FM.                                                 |
| 01:03:28   | So David, before the outbreak, we were talking about things that are hard work and things                                 |
| 01:03:33   | that are getting easier.                                                                                                  |
| 01:03:35   | And I'm so pleased sharing falls into that category.                                                                      |
| 01:03:39   | While hard work is now getting easier and sharing has got some pretty cool changes coming                                 |
| 01:03:45   | to it, which I'm quite excited about.                                                                                     |
| 01:03:47   | I have not waded into this that much recently, grab my questions aside, but I have had a                                  |
| 01:03:57   | bit of a look and I'm quite pleased that at the very least, people are no longer going                                    |
| 01:04:02   | to have to turn on sharing for iCloud links, which was aggravating before because it wouldn't                             |
| 01:04:10   | do it unless you'd already run a shortcut.                                                                                |
| 01:04:13   | And explaining that to people was surprisingly hard at times.                                                             |
| 01:04:16   | Yeah.                                                                                                                     |
| 01:04:17   | There was a saying back in the US, we had this weird period where we outlawed alcohol prohibition.                        |
| 01:04:24   | And the same was during prohibition, everybody was a criminal because people would still                                  |
| 01:04:28   | drink.                                                                                                                    |
| 01:04:30   | I felt like up until I was 15, anybody who distributed a shortcut was still a criminal                                    |
| 01:04:37   | because the way the phone would act, because I distribute a lot of shortcuts between the                                  |
| 01:04:43   | blog and the shortcuts field guide.                                                                                       |
| 01:04:45   | If people didn't turn off a special setting, all the alarm bells went off like, oh my gosh,                               |
| 01:04:51   | you're importing a shortcut from Sparky and it's going to ruin everything.                                                |
| 01:04:55   | And so that was always a little bit of a frustration for me, but it seems like they've really taken                       |
| 01:05:02   | a lot of steps this year to make distribution easier.                                                                     |
| 01:05:04   | There's really three ways to do it now.                                                                                   |
| 01:05:08   | You want to walk through those?                                                                                           |
| 01:05:10   | Yeah.                                                                                                                     |
| 01:05:11   | So the first is iCloud link.                                                                                              |
| 01:05:13   | And this is now enabled by default.                                                                                       |
| 01:05:16   | Previously, this was not enabled by default.                                                                              |
| 01:05:18   | So by default, people can now share and receive shortcuts via an iCloud link.                                             |
| 01:05:24   | And this is now signed using your [[Apple ID]] as well.                                                                       |
| 01:05:28   | So I'm not 100% certain how this is going to work because you need to be signed into                                      |
| 01:05:34   | iCloud to do this, and [[Apple]] don't tend to revoke people's iCloud IDs for things.                                         |
| 01:05:39   | Developers occasionally don't get banned from the developer store or from the app store                                   |
| 01:05:44   | for things, and it's rare, but people don't usually get their iCloud accounts revoked.                                    |
| 01:05:51   | By the way, that's no a thing.                                                                                            |
| 01:05:53   | And shortcuts files are officially a thing now, David.                                                                    |
| 01:05:57   | They were there in workflow, and they were there on shortcuts, and then they disappeared                                  |
| 01:06:01   | in shortcuts, and people were very unhappy because that's how they were backing shortcuts                                 |
| 01:06:06   | up, and now they're back again.                                                                                           |
| 01:06:10   | And they are officially notarised by iCloud as well.                                                                      |
| 01:06:13   | So that means they're signed, and there's a little certificate with them.                                                 |
| 01:06:17   | And there's also a private sharing mode, which is for sharing with contacts or saving personal                            |
| 01:06:23   | backups, and these are, I believe, shortcuts files as well, and they are signed as well.                                  |
| 01:06:29   | So basically, it's just going to be official that [[Apple]] have acknowledged that, oh yeah,                                  |
| 01:06:37   | people make and share shortcuts, that's why this thing is insanely popular.                                               |
| 01:06:42   | Let's make that maybe a bit easier for people.                                                                            |
| 01:06:45   | We didn't think this was going to be a big thing, and we apparently have a lot of people                                  |
| 01:06:49   | in support, spending a lot of time supporting this, so let's fix that.                                                    |
| 01:06:54   | At least I hope that that's what went through somebody's head there.                                                      |
| 01:06:58   | And Rose and I are going to test it, and we'll report back because we're both on the beta.                                |
| 01:07:01   | But I think the idea of signing shortcuts is an excellent one, so long as it doesn't                                      |
| 01:07:07   | make it real hard for people to share, and putting personal responsibility on the shortcuts                               |
| 01:07:13   | so you can send it out in the world, I think that's a win.                                                                |
| 01:07:18   | And shortcut files is the same thing.                                                                                     |
| 01:07:19   | And I understand why they pulled it because it was really a security hole, and what if                                    |
| 01:07:24   | you got a shortcut from some bad actor and it did things, and now that they're adding                                     |
| 01:07:29   | features to it, like delete without, you know, confirm, you could do serious damage to somebody's                         |
| 01:07:36   | machine with a shortcut.                                                                                                  |
| 01:07:37   | So you want-                                                                                                              |
| 01:07:38   | Well, that's only if that person has chosen to turn that on themselves, because that is                                   |
| 01:07:43   | a setting for shortcuts rather than for, you know, for, say, a shortcut specifically.                                     |
| 01:07:52   | That's what I'm getting at.                                                                                               |
| 01:07:54   | People can, you know, by logging you into servers and doing all the things that, you                                      |
| 01:07:58   | know, the more power that gets added to shortcuts, the more danger it is for running shortcuts                            |
| 01:08:02   | from third parties.                                                                                                       |
| 01:08:03   | So they added an accountability system to it, and I'm glad they did.                                                      |
| 01:08:07   | And that third method really strikes me as kind of like a corporate deployment method,                                    |
| 01:08:11   | you know, where you've got a company where they're going to build some shortcuts that                                     |
| 01:08:15   | allow you to log into the server and do whatever, and just make it really simple to deploy                                |
| 01:08:20   | to your employees.                                                                                                        |
| 01:08:22   | But I think it seems well thought out.                                                                                    |
| 01:08:24   | I haven't, I don't have any experience with it yet, but I will, and we'll report back.                                    |
| 01:08:29   | But I mean, I like that they're putting effort into this and solving, you know, this problem                              |
| 01:08:35   | of responsible distribution of shortcuts, which is what we all want.                                                      |
| 01:08:38   | Yeah.                                                                                                                     |
| 01:08:39   | And the one thing that I wanted as well was for it to become a bit easier to stop sharing                                 |
| 01:08:44   | a shortcut.                                                                                                               |
| 01:08:45   | So I've had this before.                                                                                                  |
| 01:08:46   | There was something, there was just a typo, I think it was, in one of the first editions                                  |
| 01:08:51   | of the shortcut, a shortcut that I created for Take Control Shortcuts.                                                    |
| 01:08:54   | So I created a new one, and it had a different URL, because I didn't just update the previous                             |
| 01:09:01   | one long, long story behind that.                                                                                         |
| 01:09:04   | But I, because I didn't have it, I couldn't get rid of the old links.                                                     |
| 01:09:09   | So people that have the old book are still emailing me saying, hey, you know, there's                                     |
| 01:09:13   | a typo in the shortcut, and it's like, I spelled the as T-E-H or something like that.                                     |
| 01:09:18   | It was out there for a few hours.                                                                                         |
| 01:09:20   | But to this day, I still get emails about it, even though the book's been out for ages,                                   |
| 01:09:24   | because people haven't downloaded an updated version.                                                                     |
| 01:09:26   | There is now the option.                                                                                                  |
| 01:09:29   | So I just shared a shortcut with you via messages to test this.                                                           |
| 01:09:32   | And then I tapped on the link that I shared with you myself to open it in Shortcuts again.                                |
| 01:09:39   | And people are going, Rose, why are you doing this?                                                                       |
| 01:09:41   | If you open that link that you shared in Shortcuts again, then you get the add shortcut screen                            |
| 01:09:46   | with add and don't add.                                                                                                   |
| 01:09:48   | But if you look in the top right, there are the three buttons right there, which say copy,                                |
| 01:09:53   | there are the three dots, sorry.                                                                                          |
| 01:09:55   | And if you tap it, there's copy iCloud link and stop sharing, which kills the URL.                                        |
| 01:10:00   | So then it doesn't work anymore.                                                                                          |
| 01:10:02   | Yeah, it says this is not verified and won't let me open it.                                                              |
| 01:10:05   | Oh, well, it should be verified because there, I mean, there we go.                                                       |
| 01:10:10   | This is what happens when you run a very early beta people.                                                               |
| 01:10:13   | This is why it's for developers, not for consumers.                                                                       |
| 01:10:15   | And now it's here.                                                                                                        |
| 01:10:16   | So go figure.                                                                                                             |
| 01:10:17   | It works now.                                                                                                             |
| 01:10:18   | There we go.                                                                                                              |
| 01:10:19   | There we go.                                                                                                              |
| 01:10:20   | It just needed time to think about things, David.                                                                         |
| 01:10:22   | What is life?                                                                                                             |
| 01:10:23   | What is the meaning of life?                                                                                              |
| 01:10:24   | Computers are much deeper than we think.                                                                                  |
| 01:10:27   | Yeah, we don't give them credit for it, I mean.                                                                           |
| 01:10:29   | And if it's a bowl of petunias, oh no.                                                                                    |
| 01:10:31   | Either way, I can now stop sharing this.                                                                                  |
| 01:10:34   | So if I have an oh no moment myself, I can stop sharing a shortcut very easily.                                           |
| 01:10:38   | This was there before.                                                                                                    |
| 01:10:39   | I just wanted to make sure that it still exists and it works because I know that's something                              |
| 01:10:46   | that people have asked me frequently before.                                                                              |
| 01:10:48   | How can they stop sharing a shortcut?                                                                                     |
| 01:10:51   | And yeah, that's how you do it, people.                                                                                   |
| 01:10:54   | Yeah.                                                                                                                     |
| 01:10:55   | Now, these are all good things and the shortcuts team, I don't know how big it is now, but                                |
| 01:11:00   | it must be bigger because they've done so much work.                                                                      |
| 01:11:03   | They built a Mac app, they added a bunch of new actions.                                                                  |
| 01:11:06   | I mean, they've really come a long way with this.                                                                         |
| 01:11:08   | I mean, you say that, David, but I believe it was Ayaka who mentioned it in the shortcuts                                 |
| 01:11:13   | for Mac [[WWDC]] video, which everybody can get in the developer app.                                                         |
| 01:11:18   | By the way, for free, you can watch this video.                                                                           |
| 01:11:21   | She said that it's built, so the Mac OS application is built in [[SwiftUI]] for cross-platform functionality.                |
| 01:11:29   | So hopefully it's all the same code under the hood, which will make bug fixing much                                       |
| 01:11:33   | easier for them, which is great.                                                                                          |
| 01:11:36   | That's the whole point of [[SwiftUI]], really.                                                                               |
| 01:11:38   | Yeah.                                                                                                                     |
| 01:11:39   | Yeah.                                                                                                                     |
| 01:11:40   | And yeah, it's pretty great.                                                                                              |
| 01:11:41   | I am loving the fact that I can run shortcuts on my Mac, none of my shortcuts work on my                                  |
| 01:11:46   | Mac because they all use actions from third party developers.                                                             |
| 01:11:51   | And so all the ones I use day-to-day are just non, they're non-functional.                                                |
| 01:11:56   | But I mean, one thing that we've not talked about, David, which I feel probably we ought                                  |
| 01:12:01   | to, is some of the UI changes, which are present on both Mac OS and iOS, because there's a                                |
| 01:12:10   | lot that's changed here.                                                                                                  |
| 01:12:12   | And I think it's for the better overall.                                                                                  |
| 01:12:15   | Yeah.                                                                                                                     |
| 01:12:16   | Agreed.                                                                                                                   |
| 01:12:17   | I mean, and it's not the massive UI overhaul that we got.                                                                 |
| 01:12:20   | What was it?                                                                                                              |
| 01:12:21   | iOS 13.                                                                                                                   |
| 01:12:22   | Yeah.                                                                                                                     |
| 01:12:23   | Yeah.                                                                                                                     |
| 01:12:24   | Yeah.                                                                                                                     |
| 01:12:25   | This is more subtle, but there's definitely some changes here.                                                            |
| 01:12:28   | For example, naming a shortcut.                                                                                           |
| 01:12:30   | This one caught me by surprise because I went to do the thing where you name the shortcut                                 |
| 01:12:35   | and I realised at the top of the shortcut where it says shortcut name, it would say untitled                              |
| 01:12:41   | shortcut before, you can just tap on that and you can change the name right there.                                        |
| 01:12:45   | You can tap the icon right there and change the colour and the icon.                                                       |
| 01:12:50   | And I believe we've got a few more icons now.                                                                             |
| 01:12:53   | There's certainly the categories on the Mac are quite nice.                                                               |
| 01:12:57   | I like the way that you can click to toggle between things, which is lovely.                                              |
| 01:13:02   | And they got the [[SF Symbols]] and all this going on.                                                                        |
| 01:13:06   | They don't have all of [[SF Symbols]] here.                                                                                   |
| 01:13:08   | This is just a small subset.                                                                                              |
| 01:13:09   | Totally unrelated, but have you played with the new download [[SF Symbols]] 3?                                                |
| 01:13:14   | Oh yeah.                                                                                                                  |
| 01:13:15   | Yeah.                                                                                                                     |
| 01:13:16   | Very nice.                                                                                                                |
| 01:13:17   | Very nice.                                                                                                                |
| 01:13:18   | I mean, I was kind of disappointed with myself that I spent Thursday night last week on my                                |
| 01:13:22   | new M1 Mac geeking out over [[SF Symbols]] because can you think of a geekier way to spend a                                  |
| 01:13:29   | Thursday night, David, because I genuinely can't.                                                                         |
| 01:13:32   | Not me either.                                                                                                            |
| 01:13:33   | On the other hand, I was geeking out on shortcuts and [[SF Symbols]] and I had a great Thursday                               |
| 01:13:38   | night for anybody who's concerned about me.                                                                               |
| 01:13:40   | I genuinely had a lot of fun.                                                                                             |
| 01:13:42   | So for listeners who are not following, [[Apple]] made its own phone called San Francisco several                             |
| 01:13:47   | years ago.                                                                                                                |
| 01:13:48   | And then two or three years ago, they started making their own glyph set called [[SF Symbols]],                               |
| 01:13:55   | San Francisco symbols.                                                                                                    |
| 01:13:57   | And they made it for app developers, so when you're building an app on the iPhone, you've                                 |
| 01:14:00   | got a really nice symbol set you can pull from.                                                                           |
| 01:14:02   | It's got things like take a picture, load an image, just typical like an envelope for                                     |
| 01:14:08   | an email application.                                                                                                     |
| 01:14:09   | And a lot of the glyphs and icons you would associate with an app, but every year they                                    |
| 01:14:15   | expand it and you can download it.                                                                                        |
| 01:14:17   | It's like an app, really, that you can pull them out of.                                                                  |
| 01:14:19   | And this year, knowing that they add even more symbols, they added the ability to put                                     |
| 01:14:24   | colours on them.                                                                                                           |
| 01:14:25   | So all of a sudden, all of my OmniFocus perspectives are getting new SF symbol based icons and                            |
| 01:14:34   | my [[Stream Deck]] is getting button updates and all this stuff.                                                              |
| 01:14:38   | If you look at some of the field guides I've made, even I've used symbols and some of the                                 |
| 01:14:41   | animations I use in there because they're just so well made.                                                              |
| 01:14:46   | And do you need to be in the paid developer to get access to that, Rose?                                                  |
| 01:14:49   | I don't know.                                                                                                             |
| 01:14:50   | I'm not 100% sure off the top of my head, I was just looking because it is on the developer                               |
| 01:14:56   | site.                                                                                                                     |
| 01:14:57   | There's an [[SF Symbols]] app on iPhone, which you can just download.                                                         |
| 01:15:04   | And I believe that's a third party one or maybe is a macOS one now.                                                       |
| 01:15:08   | But it looks to me like the standard [[SF Symbols]] app and the SF3 beta is actually available                                |
| 01:15:15   | for everybody.                                                                                                            |
| 01:15:17   | It is on developer.apple.com but I'm not logged in and there is no login button on this page.                             |
| 01:15:23   | It's just there's a download button right here.                                                                           |
| 01:15:25   | We'll put a link in the show notes and if you can get into it, great.                                                     |
| 01:15:30   | But if you have a need to use some icons, this is a great set.                                                            |
| 01:15:36   | I find them very useful even for presentations because I like to have very simple slides                                  |
| 01:15:40   | and sometimes you're just looking for a nice icon of an envelope and you don't have to                                    |
| 01:15:45   | use something gross off Google images if you do that this way.                                                            |
| 01:15:49   | Yeah.                                                                                                                     |
| 01:15:50   | It's a very easy way to just get some great icons for things.                                                             |
| 01:15:54   | Do make sure that people check the usage for things that they're using.                                                   |
| 01:15:58   | You can't use it as app icons and stuff like that.                                                                        |
| 01:16:01   | You can use it in things.                                                                                                 |
| 01:16:03   | There's an interface guide.                                                                                               |
| 01:16:04   | Follow all the rules.                                                                                                     |
| 01:16:05   | I'm not telling you to break the rules but I'm telling you that it's out there.                                           |
| 01:16:09   | Exactly.                                                                                                                  |
| 01:16:10   | You can download this app and use it and it works on your Mac OS and iOS devices.                                         |
| 01:16:16   | Wow.                                                                                                                      |
| 01:16:18   | What a year.                                                                                                              |
| 01:16:20   | I didn't expect this much automation this year but we got it.                                                             |
| 01:16:25   | The Mac thing started to feel like it was going to happen towards the end as we approached                                |
| 01:16:29   | [[WWDC]] but that could have gone a lot of ways.                                                                              |
| 01:16:33   | It could have been really ugly if they didn't do it with care and fortunately they did do                                 |
| 01:16:39   | it with care.                                                                                                             |
| 01:16:40   | It's not only did we keep our traditional tools.                                                                          |
| 01:16:42   | I think there's a lot of people who are going to be automating on their Mac that weren't                                  |
| 01:16:45   | before.                                                                                                                   |
| 01:16:46   | Yeah.                                                                                                                     |
| 01:16:47   | Yeah.                                                                                                                     |
| 01:16:48   | That's just it.                                                                                                           |
| 01:16:49   | I think a lot of people have said before I can't work on the iPad.                                                        |
| 01:16:53   | It doesn't have the apps I need.                                                                                          |
| 01:16:54   | It doesn't have the apps that I'm used to.                                                                                |
| 01:16:57   | Changing workflows is an expensive thing.                                                                                 |
| 01:16:59   | I mean expensive time wise.                                                                                               |
| 01:17:01   | I'm potentially money wise.                                                                                               |
| 01:17:02   | If you buy an iPad and it doesn't work out for you because it turns out you're very                                       |
| 01:17:06   | used to doing things in say logic and Ferrite won't cut it, that's acceptable but at the                                  |
| 01:17:12   | same time that could have cost you a lot of money.                                                                        |
| 01:17:15   | So they've never really looked at shortcuts before.                                                                       |
| 01:17:18   | And now shortcuts is definitely a thing that everybody should have a look at whether or                                   |
| 01:17:24   | not they feel like they need automation in their life.                                                                    |
| 01:17:27   | And I feel like it's going to be a good gateway drug for things.                                                          |
| 01:17:30   | We haven't talked about today some of the other things that you can do.                                                   |
| 01:17:34   | You can run shortcuts from the command line and from [[AppleScript\|AppleScripts]].                                                       |
| 01:17:39   | So as well as running command line scripts and [[AppleScript\|AppleScripts]] inside of shortcuts, those                                   |
| 01:17:44   | things can run shortcuts which is kind of mind boggling and great but also app developers                                 |
| 01:17:51   | can build in options to run shortcuts as part of their app.                                                               |
| 01:17:56   | And they can ship shortcuts with their app with the links.                                                                |
| 01:17:59   | That's why links are signed and so on now.                                                                                |
| 01:18:01   | And I personally feel that this is a huge step forward.                                                                   |
| 01:18:05   | On the surface of it, it just appears to be, yeah, shortcuts is on the Mac.                                               |
| 01:18:09   | But the fact that there's now a command line option, so there is a command line option                                    |
| 01:18:13   | for me to list all of my existing shortcuts.                                                                              |
| 01:18:16   | So now I can pipe that into something else and open it in [[BBEdit]] if I want to.                                           |
| 01:18:21   | I could get a list of all of my shortcuts in the shortcuts app.                                                           |
| 01:18:25   | I could do that but now I can do it on the command line as well.                                                          |
| 01:18:29   | So I think for some people, this will make them sit up and pay attention and see that                                     |
| 01:18:35   | shortcuts is, you know, it might be in some ways, you know, the low level easy application                                |
| 01:18:42   | that can't necessarily do everything.                                                                                     |
| 01:18:45   | But wow, is it getting there and it can already do so much if you just use the right apps.                                |
| 01:18:51   | I can't wait until September, October when apps start shipping all of their shortcuts                                     |
| 01:18:56   | enabled Mac versions because I have a feeling this is going to be amazing.                                                |
| 01:19:01   | Yeah, me too.                                                                                                             |
| 01:19:03   | And like third party shortcuts apps from the iPhone and iPad are already starting to say                                  |
| 01:19:07   | they're going to show up on the Mac and app developers are going to show up.                                              |
| 01:19:12   | I just think automation is going to get way easier.                                                                       |
| 01:19:15   | I remember back in May 2018, Rose and I were first starting the show and we were recording                                |
| 01:19:20   | test episodes and doing things.                                                                                           |
| 01:19:23   | And we had to throw it all away.                                                                                          |
| 01:19:25   | Yeah, because that June [[Apple]] announced shortcuts for iOS and we literally threw out like three                           |
| 01:19:31   | episodes and just started over again.                                                                                     |
| 01:19:33   | And I feel like this is like another one of those moments like shortcuts arriving on                                      |
| 01:19:37   | the Mac is a much bigger deal than we can really convey in a single episode and it's                                      |
| 01:19:42   | going to be an ongoing topic on this show and it's just going to be a way for a lot                                       |
| 01:19:46   | of people that had trouble automating before, you know, a lot of people never could figure                                |
| 01:19:50   | out [[AppleScript]].                                                                                                         |
| 01:19:51   | Well, guess what?                                                                                                         |
| 01:19:52   | You don't need to.                                                                                                        |
| 01:19:53   | You're going to be able to do a lot of automation without ever touching it.                                               |
| 01:19:55   | So this is really great stuff.                                                                                            |
| 01:19:59   | We're going to continue to cover it.                                                                                      |
| 01:20:00   | We're early in the beta.                                                                                                  |
| 01:20:01   | So Rose and I, I know my experience is like it's early in the beta, so things aren't working,                             |
| 01:20:05   | right?                                                                                                                    |
| 01:20:06   | Not all the pipes are connected.                                                                                          |
| 01:20:08   | So as it gets better over the beta period, we'll be able to report back on more of the                                    |
| 01:20:12   | issues that like we have question marks on right now.                                                                     |
| 01:20:16   | Rose is going to update her shortcuts.                                                                                    |
| 01:20:20   | Take control book.                                                                                                        |
| 01:20:21   | Right?                                                                                                                    |
| 01:20:22   | Yeah.                                                                                                                     |
| 01:20:23   | So preliminary talks with Joe at Take Control have said that I'm doing take control of shortcuts                          |
| 01:20:28   | 2.0 because quite a bit has changed since I first wrote the book and I have so many                                       |
| 01:20:34   | more ideas now for shortcuts that I can include.                                                                          |
| 01:20:38   | And there's just a whole bunch of different things that I can, I can put in there.                                        |
| 01:20:41   | So I'm, you know, I'm still working on the outline.                                                                       |
| 01:20:44   | That may change, but at the moment it's looking like it's going to be a brand new book, which                             |
| 01:20:47   | is exciting.                                                                                                              |
| 01:20:48   | And so what I'm going to do is I've been updating the shortcuts field guide, like I did one                               |
| 01:20:54   | for iOS 14, and I'll be doing and looking at it.                                                                          |
| 01:20:58   | There are new actions available on iPhone and iPad.                                                                       |
| 01:21:01   | There are some differences to the user interface, but it's not so different that I need to re-record                      |
| 01:21:06   | the whole course.                                                                                                         |
| 01:21:07   | So what I'm going to do is I'm going to do a free update to the shortcuts field guide                                     |
| 01:21:11   | for iPhone and iPad with the changes that we get with iOS 15.                                                             |
| 01:21:15   | If you've already bought it, then you'll be able to get that update for free.                                             |
| 01:21:18   | If you haven't bought it, you should check it out.                                                                        |
| 01:21:20   | And that'll be released right around the time that the, around September, you know, whenever                              |
| 01:21:24   | they release it.                                                                                                          |
| 01:21:25   | And then I'm going to make an all new course for shortcuts for the Mac because that is                                    |
| 01:21:28   | like kind of a boil the ocean project for me.                                                                             |
| 01:21:31   | So I'm going to make that a separate course so you can get the Mac one or you can get                                     |
| 01:21:34   | the iPhone and iPad one and the Mac one will be a separate purchase, but that's going to                                  |
| 01:21:38   | come out too this year.                                                                                                   |
| 01:21:39   | Yeah.                                                                                                                     |
| 01:21:40   | This is, this is pretty great.                                                                                            |
| 01:21:42   | And there's so much that we can have fun with.                                                                            |
| 01:21:44   | I genuinely can't wait to see.                                                                                            |
| 01:21:47   | And I also did just want to say something, hopefully David, your inbox won't get too                                      |
| 01:21:51   | inundated with this.                                                                                                      |
| 01:21:53   | What I would like to say is if you are an app developer and you have shortcuts supporting                                 |
| 01:21:57   | your app and you're bringing that to the Mac and you want to get me and David on a test                                   |
| 01:22:01   | flight, which is now on the Mac, please send us an email because I would love to see this.                                |
| 01:22:08   | There's an email button.                                                                                                  |
| 01:22:10   | There's the, the really dot FM/automators.                                                                          |
| 01:22:13   | There's an email button which goes to me and David.                                                                       |
| 01:22:15   | It's an all in one.                                                                                                       |
| 01:22:16   | So, you know, you can get in touch with both of us.                                                                       |
| 01:22:19   | And I actually also iOS apps that are doing new shortcuts things.                                                         |
| 01:22:23   | Please let me know.                                                                                                       |
| 01:22:24   | I'm, I'm all in on the [[TestFlight]].                                                                                       |
| 01:22:25   | My life is a beta.                                                                                                        |
| 01:22:26   | So, you know,                                                                                                             |
| 01:22:27   | I'm going to be installing on my watch now and it's all because of Rose.                                                  |
| 01:22:30   | Yeah.                                                                                                                     |
| 01:22:31   | Feel free to share it in the forums as well.                                                                              |
| 01:22:33   | You know, you're welcome to, but you can get in touch with us directly as well.                                           |
| 01:22:37   | I'm sure a lot of people in our forums will be on the public beta as soon as it's available.                              |
| 01:22:41   | Little reminder, if you are not a developer, please do not install the developer beta.                                    |
| 01:22:45   | It is, dodgy is not, is, is, is an understatement.                                                                        |
| 01:22:50   | I have had to reboot my iPad like six times to get network issues fixed and stuff like                                    |
| 01:22:56   | that.                                                                                                                     |
| 01:22:57   | You know, apps where theoretically nothing has changed in that stack don't work anymore.                                  |
| 01:23:01   | Some people have had issues with apps crashing on launch and they've had to completely nuttily                            |
| 01:23:06   | nuke their iPad.                                                                                                          |
| 01:23:07   | Hi, David.                                                                                                                |
| 01:23:08   | I know.                                                                                                                   |
| 01:23:09   | I know you're one of those people.                                                                                        |
| 01:23:10   | Yes, I am.                                                                                                                |
| 01:23:11   | So, you know, there's all sorts of issues.                                                                                |
| 01:23:13   | They're waiting for the public beta and hopefully it'll be more stable then.                                              |
| 01:23:16   | But I know that a lot of our listeners are app developers or they've got something, even                                  |
| 01:23:20   | if you think, ah, it's, it's tiny, nobody's going to care.                                                                |
| 01:23:23   | Share it.                                                                                                                 |
| 01:23:24   | People want to know.                                                                                                      |
| 01:23:25   | And this is the only way that people are going to, well, it's not the only way I hope                                     |
| 01:23:28   | that people are going to find out, but this is one of the great ways that you can share                                   |
| 01:23:30   | things.                                                                                                                   |
| 01:23:31   | And we're kicking the tires and we just kind of want to see how all this stuff works together.                            |
| 01:23:34   | And if you're putting hard work on it, we'd love to hear from you.                                                        |
| 01:23:37   | And even maybe tell us a little bit about your story about, you know, what you're looking                                 |
| 01:23:42   | for with your automation.                                                                                                 |
| 01:23:43   | How hard was it?                                                                                                          |
| 01:23:44   | This is all stuff that the users want to know, ultimately, and we're going to have some                                   |
| 01:23:48   | guests on the show.                                                                                                       |
| 01:23:49   | I mean, this is the thing, man, and, um, and I have very good feelings about it.                                          |
| 01:23:54   | I think that Automation on the Mac is going to really jump with this release.                                             |
| 01:23:59   | I think a lot of people, like I said earlier, are going to get into it that wouldn't have                                 |
| 01:24:03   | otherwise.                                                                                                                |
| 01:24:04   | Yes.                                                                                                                      |
| 01:24:05   | Yeah, absolutely.                                                                                                         |
| 01:24:06   | And especially one thing we did mention, which I should mention just before we end                                        |
| 01:24:09   | the show, for anybody who has previously had to release a new version of an app, and they've                              |
| 01:24:14   | gone from, say, 1.0 to 2.0, and they've had to do shortcut sections, and they're the same                                 |
| 01:24:19   | shortcut sections, but for users, they have to go in and replace all their shortcut sections.                             |
| 01:24:24   | There's an upgrade path now provided by [[Apple]].                                                                            |
| 01:24:26   | So if you're listening and you're going, huh, I know of an app that's currently having issues                             |
| 01:24:31   | with that, then maybe, you know, give the developers a little while and ping them and                                     |
| 01:24:35   | drop them an email and just say, hey, if you didn't know this, by the way, this is now                                    |
| 01:24:39   | a thing, because that would be great if all of the apps can just upgrade things so that                                   |
| 01:24:44   | stuff doesn't break.                                                                                                      |
| 01:24:45   | I know previously, Greg Pierce, Mr. Agile Tortes, had to, this was when [[Drafts]] actions                                    |
| 01:24:50   | were just built into shortcuts.                                                                                           |
| 01:24:53   | He had to ping the guys on the shortcuts team and say, there's a new version of [[Drafts]].                                   |
| 01:25:00   | Can you change all the [[URL Schemes]] that you're using, please?                                                             |
| 01:25:03   | And then, of course, we got the actions, and that's all been sorted out since then, which                                 |
| 01:25:07   | is great.                                                                                                                 |
| 01:25:09   | I'm very pleased about that, but yeah, it's one of those things where there's a lot of                                    |
| 01:25:14   | potential pain points which are being dealt with here, and I can't wait to see what this                                  |
| 01:25:20   | summer of betas brings us.                                                                                                |
| 01:25:22   | Before we finish today, I want to tell you about another show here on [[Relay FM]].                                          |
| 01:25:26   | If you like Automators, there's a good chance you're going to like [[Clockwise]].                                             |
| 01:25:30   | You're busy.                                                                                                              |
| 01:25:31   | You don't have lots of time to catch up on everything that happens in tech every week.                                    |
| 01:25:34   | I know you're busy automating.                                                                                            |
| 01:25:36   | Twice is a weekly roundtable which covers four tech topics in 30 minutes.                                                 |
| 01:25:41   | Join hosts Dan Moran and Micah Sargent every Wednesday as they welcome two special guests                                 |
| 01:25:45   | from a diverse pool of tech punnets, writers, podcasters, developers, and more to Tech Talk.                              |
| 01:25:50   | Both David and I have been on the show.                                                                                   |
| 01:25:52   | Whether it's what's going on in the news this week or timeless tech questions, it's                                       |
| 01:25:56   | never the same show twice.                                                                                                |
| 01:25:58   | In the meantime, you can join us for talks and offerings at talk.automators.fm and we'll                                  |
| 01:26:03   | see you in two weeks.                                                                                                     |
| 01:26:05   | Good bye.                                                                                                                 |
