---
status: "incomplete"
fc-date:
  year: 2020
  month: 12
  day: 18
fc-category: "podcast"
podcast: "Automators"
published: 2020-12-18
duration: 5363
formattedduration: "01:29:23"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/65"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators065.mp3"
episode: 65
title: "65: 12 Days of Automation"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
The holidays are here so let's Automate! Rose and David cover 12 days of automation with cool ideas, tricks, and automation products to up your game this holiday season.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 065 Discussion](https://talk.automators.fm/t/65-12-days-of-automation/10038)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[FastScripts (Sponsor)|FastScripts]] - powerful script management utility. Instance access to your scripts, by keyboard shortcut or menu bar.
- [[Woven (Sponsor)|Woven]] - the calendar app with the most powerful scheduling tools.
- [[Setapp (Sponsor)|Setapp]] - more than 200 powerful apps for your Mac.

# Show Notes
- [Paperless Field Guide](https://learn.macsparky.com/p/paperless)
- [Gift Wrap Field Guide](https://learn.macsparky.com/p/giftwrap)
- [Merosss Home Automation Plugs](https://www.meross.com/)
- [Twinkly Lights](https://www.twinkly.com/)
- [Nanoleaf Smart Lighting Products](https://nanoleaf.me/en-US/)
- [Aqara Cube - New Way to Simplify Your Smart Home Control](https://www.aqara.com/us/cube.html)
- [Hexagons are the Bestagons - CGP Grey](https://www.cgpgrey.com/blog/hexagons-are-the-bestagons)
- [4 types of NFC tags to buy for your Siri Shortcuts automations - Matthew Cassinelli](https://www.matthewcassinelli.com/nfc-tags-siri-shortcuts/)
- [Random Wallpaper Shortcut](https://www.icloud.com/shortcuts/04dde65d8e3e4763bc87cb49fcbe4c60)
- [Deliveries App](https://junecloud.com/)
- [IKEA Automated Blinds](https://www.ikea.com/us/en/p/fyrtur-blackout-roller-blind-wireless-battery-operated-gray-70417463/)
- [Mac Power Users #562: The First Apple Silicon Macs](https://www.relay.fm/mpu/562)
- [Keyboard Maestro 9.1: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Noodlesoft - Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/)
- [MailSuite](https://smallcubed.com/)
- [Task Management Software Built For Pros - OmniFocus - The Omni Group](https://www.omnigroup.com/omnifocus)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, where we talk about how to get your technology to                      |
| 00:06      | celebrate your holidays with you.                                                                        |
| 00:08      | My name is Rosemary Orchard, and as always, I'm joined by the wonderful David Sparks.                    |
| 00:12      | Hey, David, how are you?                                                                                 |
| 00:13      | I'm great, Rose.                                                                                         |
| 00:14      | I think this episode is going to be fun.                                                                 |
| 00:16      | I think your family members' reviews will be mixed.                                                      |
| 00:20      | Yes, yes.                                                                                                |
| 00:22      | I will agree with that in advance when the Christmas tree starts playing.                                |
| 00:26      | We wish you a Merry Christmas at 3 o'clock in the morning.                                               |
| 00:29      | Everybody is probably going to complain.                                                                 |
| 00:31      | It might not be the kids if you have kids, but it could be somebody else in your life                    |
| 00:35      | or you, so, you know, we'll take that into our advisement when you get creative automating               |
| 00:42      | this holiday season.                                                                                     |
| 00:44      | So we thought it would be fun this year, since we are around the holidays and we're both                 |
| 00:48      | feeling a little punchy, just to come up with 12 goofy holiday and new year related automations,         |
| 00:56      | the problems we have, how we're solving them, and hopefully you can take something from                  |
| 01:00      | it.                                                                                                      |
| 01:01      | And you can use this stuff for the holidays, but you can really use it all year, too.                    |
| 01:05      | Before we get started, I have something to share.                                                        |
| 01:08      | I released the paperless field guide.                                                                    |
| 01:10      | Hooray, it's out now.                                                                                    |
| 01:11      | Yay!                                                                                                     |
| 01:12      | Congratulations, David.                                                                                  |
| 01:13      | I know you've been working super hard on this, and life has thrown a couple of curveballs                |
| 01:17      | your way as well during the production process.                                                          |
| 01:19      | Yeah, I mean, my iMac had to go into the shop for a while, and there were a bunch of issues              |
| 01:25      | and fire evacuations and all that.                                                                       |
| 01:29      | But yeah, so it's a new version of the paperless field guide.                                            |
| 01:32      | It's temporarily on sale for $24, and it'll go up to $29.                                                |
| 01:36      | You can get it over at learn.macsparkyi.com.                                                               |
| 01:39      | The automator level of this thing, the backstory, is there's a bunch of automation stuff, shortcuts      |
| 01:45      | and whatnot in the field guide, because paperless workloads involved a lot of automation.                |
| 01:50      | But the one that I wanted to talk about real briefly with the audience here is I was struggling          |
| 01:57      | with the folder creation script.                                                                         |
| 01:59      | I wanted to have a simple folder creation script, and I know you can buy an app for                      |
| 02:03      | it, and the [[Keyboard Maestro]] kind of does it.                                                            |
| 02:06      | There's all these apps that kind of build a set of nested folders for you, but none                      |
| 02:11      | of them do a very good job of it.                                                                        |
| 02:13      | So I tried a bunch of tools out.                                                                         |
| 02:15      | Ultimately, I ended up writing an [[AppleScript]] to do it, and you can write nested folders                |
| 02:21      | with AppleScript, and you can even write it where you can choose a source folder, or                    |
| 02:26      | you can have it just automatically create a certain folder.                                              |
| 02:30      | And then I spent another hour trying to figure out how to do it on an iCloud directory, because          |
| 02:34      | iCloud directories are a completely different animal.                                                    |
| 02:37      | But I eventually figured it all out, and I sent it to Sal, the master of AppleScript                    |
| 02:43      | say, is there any way I could do this better, and he's like, no, you basically got it.                   |
| 02:48      | That is high praise indeed, because sometimes it's really tricky to figure these things                  |
| 02:51      | out, and then somebody else looks at it and goes, but why didn't you just press the widget               |
| 02:55      | cranking button?                                                                                         |
| 02:56      | Yeah, I know.                                                                                            |
| 02:57      | Wait, there's a button for that?                                                                         |
| 02:58      | Where?                                                                                                   |
| 02:59      | Nobody told me about this.                                                                               |
| 03:00      | I was kind of expecting him, because my scripts were like 15 lines, I was kind of expecting              |
| 03:04      | him to send me like a two liner that just did the same thing, but no, he said that was                   |
| 03:09      | the most efficient way.                                                                                  |
| 03:10      | So I got Sal's approval, and those scripts are all in the field guide, but there's a                     |
| 03:14      | lot of automation stuff in there if you're interested in it.                                             |
| 03:17      | But if you want to go paperless, please help support me and go check it out, and you can                 |
| 03:21      | do that at learn.macsparky.com.                                                                          |
| 03:23      | Yeah, it's actually one of my New Year's resolutions, David, to overhaul my system and                   |
| 03:28      | make sure that I am as paperless as possible.                                                            |
| 03:30      | So I've been going through your field guide already.                                                     |
| 03:32      | I got a bit of a sneak preview, so I'm very much appreciating that you've done all the                   |
| 03:37      | hard work for me.                                                                                        |
| 03:38      | One of the really nice things about paperless now versus the last time I wrote a book on                 |
| 03:41      | this was it used to be you needed to buy a $400 scanner to go paperless, and now there                   |
| 03:47      | are so many really good apps that will do the scanning for you that you really don't                     |
| 03:51      | need a fancy scanner unless you've got a huge volume.                                                    |
| 03:55      | Yeah.                                                                                                    |
| 03:56      | Yeah.                                                                                                    |
| 03:57      | Okay.                                                                                                    |
| 03:58      | So let's talk about some holiday automations.                                                            |
| 03:59      | I mean, the one that everybody would have first on their list is probably how do you                     |
| 04:05      | light the trees up automatically?                                                                        |
| 04:07      | Uh-huh.                                                                                                  |
| 04:08      | And so we've done this a couple different ways in the Sparks House over the years.                       |
| 04:14      | I had some old Wemo plugs that just stopped working this year, so instead I went on Amazon.             |
| 04:23      | I found some plugs on Amazon that were just $15 for a plug, and if you bought two of them,               |
| 04:30      | at least I think it might have been a sale, but it was like two of them was like 22 or                   |
| 04:33      | something.                                                                                               |
| 04:34      | It wasn't that expensive to buy.                                                                         |
| 04:36      | We actually have two Christmas trees in our house because that's how we do it, I guess.                  |
| 04:41      | One is like the real tree and one is a tiny one, but I wanted them both to be able to                    |
| 04:46      | turn on automatically.                                                                                   |
| 04:47      | So I found these plugs on Amazon.                                                                        |
| 04:50      | It was a third-party vendor that I'd never heard of before, but they were so cheap, and                  |
| 04:56      | I know with Amazon it's easy enough to send them back if they don't work.                                |
| 04:59      | So I went ahead and took a shot on them, and I'm quickly scrolling through my Amazon                     |
| 05:05      | history right now to try and find these damn things.                                                     |
| 05:08      | Oh, there we go.                                                                                         |
| 05:09      | Me, Ross, M-E-R-O-S-S.                                                                                   |
| 05:10      | Yeah.                                                                                                    |
| 05:11      | Okay, David, we are actually surprisingly similar in many, many ways.                                    |
| 05:17      | So I also bought smart plugs.                                                                            |
| 05:18      | I went with IKEA once because I was in IKEA earlier this year, and I just bought tons                    |
| 05:22      | of plugs, but a friend wanted an automated Christmas tree, but he's an Android user,                     |
| 05:29      | and that's a bit scary to you and me, but they're still wonderful people.                                |
| 05:34      | They're out there.                                                                                       |
| 05:35      | What should I get him?                                                                                   |
| 05:37      | So he doesn't need to buy a Google Nest or an Echo Dot or anything like that.                            |
| 05:44      | And I went with a M-E-R-O-S plug as well.                                                                |
| 05:46      | I don't know if it's M-E-R-O-S or M-E-R-O-S, but I got one of those.                                     |
| 05:52      | They are frequently on sale right now, it seems.                                                         |
| 05:55      | And also, spoiler alert, I bought their 10-meter LED light strip under my bed because I'm                |
| 06:00      | working on that.                                                                                         |
| 06:02      | And yeah, their stuff's great.                                                                           |
| 06:04      | It doesn't need a hub or a bridge to integrate with [[HomeKit]], and it just connects to your                |
| 06:09      | Wi-Fi, and it does seem to work pretty well.                                                             |
| 06:11      | I'm quite impressed with it.                                                                             |
| 06:12      | Yeah.                                                                                                    |
| 06:13      | So they've got the sticker on it, and you just scan the sticker from the home app.                       |
| 06:18      | Now the ones I bought was $20 for two of them.                                                           |
| 06:20      | I don't know if that's still the deal, but immediately said it needed a firmware update.                 |
| 06:29      | So I downloaded the app, and I ran the firmware update, and it just hung, and it never got               |
| 06:35      | over.                                                                                                    |
| 06:36      | It just never stopped.                                                                                   |
| 06:37      | And then I went back to [[HomeKit]], didn't work anymore.                                                    |
| 06:39      | This is the typical thing, right?                                                                        |
| 06:42      | So then I pulled the plug out, and I put it back in the wall, holding down the switch                    |
| 06:46      | power, because that's usually the way you reset these things.                                            |
| 06:49      | And sure enough, the light started blinking again, and then I was able to add it to [[HomeKit]]              |
| 06:53      | again, and just because I've been busy, Rose, I haven't gone back to try and do a firmware               |
| 06:59      | update.                                                                                                  |
| 07:00      | Right now, it has a little badge on it, saying it needs a firmware update.                               |
| 07:02      | It doesn't seem to matter.                                                                               |
| 07:04      | It works just fine, and I have both of these things installed, and in general, I'm happy                 |
| 07:09      | with the cost.                                                                                           |
| 07:10      | I mean, when I think about how much I paid for those Wemo plugs that died versus these                  |
| 07:14      | Meross plugs, I feel like I probably spent too much money on the other ones.                              |
| 07:21      | And I'm not sure these are going to last forever, but they definitely are working great this             |
| 07:25      | year.                                                                                                    |
| 07:26      | Once you've got them installed, they're [[HomeKit]]-friendly, so how do you turn them on?                    |
| 07:32      | You can, using all the great new triggers we've got in shortcuts, you can set up a shortcut              |
| 07:38      | script.                                                                                                  |
| 07:39      | You could also just go in [[HomeKit]] Automation and do that, and the way I'm doing them is                  |
| 07:46      | I'm having them turn on automatically when it gets dark outside, and then I'm using another              |
| 07:52      | automation to turn them off automatically at 11.                                                         |
| 07:57      | But often, we'll turn them on during the day, because we like the Christmas tree, and we're              |
| 08:01      | sitting there, and they're all LED lights.                                                               |
| 08:03      | They use almost no power anymore.                                                                        |
| 08:05      | So I also added a [[HomeKit]], what do you call a scene, just to turn the lights on.                         |
| 08:11      | It's a scene with just two objects attached to it, just each tree.                                       |
| 08:15      | But it's a way that my wife can open up the [[HomeKit]] app, because she's not particularly                  |
| 08:19      | savvy with this stuff.                                                                                   |
| 08:21      | There's a big button there, it says turn trees on, and she taps it, and the trees go on.                 |
| 08:26      | And interestingly, historically, I've done these where I would attach it to a switch,                    |
| 08:30      | like I would use one of our Lutron cassettes, because Lutron makes the thing you can plug                |
| 08:36      | into the wall and plug lights into it.                                                                   |
| 08:39      | I'm not doing that this year.                                                                            |
| 08:40      | Just for giggles, I decided, what if I did it this year, where there was no physical                     |
| 08:44      | switch to turn the lights off and on, how would the family handle that?                                  |
| 08:49      | And now the tree's been up a week and a half, and nobody has said anything to me about                   |
| 08:53      | it.                                                                                                      |
| 08:54      | They're just fine.                                                                                       |
| 08:55      | I mean, I think I have successfully notified them enough that it hasn't even occurred to                 |
| 09:00      | them that I should have it attached to a switch.                                                         |
| 09:03      | Yeah, that is great.                                                                                     |
| 09:05      | That is a good update, because I bought two IKEA smart outlets, and I bought a bottom for                |
| 09:11      | them as well, just because all the IKEA things need to be paired with what they term steering            |
| 09:16      | devices.                                                                                                 |
| 09:18      | And so a steering device could be a motion sensor or a button, but their motion sensors                  |
| 09:21      | and buttons do not appear in [[HomeKit]], which is the downside of that approach.                            |
| 09:26      | The button is the cheapest way to do it, and I like separating my things out, so I know                  |
| 09:30      | that this button would turn these things off.                                                            |
| 09:32      | So I bought two outlets and a button, and that's working pretty great.                                   |
| 09:38      | And I, like you have a scene that turns on my Christmas tree and the lights that I've                    |
| 09:43      | strung around the TV stand next to it, when I turn the TV on, I am turning the lights                    |
| 09:47      | around the TV stand off, just so that I don't have any glare or anything, because the IKEA               |
| 09:52      | star lights I've got, I think they're called Strahler, are really, really lovely, but they're            |
| 09:56      | also quite bright, actually, which is great.                                                             |
| 09:58      | You get a reflection on the screen.                                                                      |
| 10:00      | Yeah, yeah, you can do.                                                                                  |
| 10:02      | And yeah, I also kind of went a little bit out there with my Christmas lights this year,                 |
| 10:08      | because my Christmas tree is a pre-decorated, pre-lit one, just because it's actually a                  |
| 10:13      | very nice tree, and it's quite small.                                                                    |
| 10:16      | And so this year, you know, I upped the ante, I added some extra decorations, I added some               |
| 10:20      | more tinsel, and I decided that I needed more lights, because I was bored with just plain                |
| 10:25      | warm white lights.                                                                                       |
| 10:28      | So I went with Twinkly lights, Twinkly not as an adjective as a proper noun.                             |
| 10:35      | You can find these at twinkly.com.                                                                       |
| 10:37      | I should note, I got these in an amazing Black Friday sale at a place I think called Lights              |
| 10:42      | for Fun in the UK, and that's four with the number four.                                                 |
| 10:47      | But they are programmable lights, and when I say programmable lights, I mean, you put                    |
| 10:52      | them on your tree, and you use the app, and it maps your tree.                                           |
| 10:57      | So it flashes all of the LEDs in sequence, so you need to turn any other lights that                     |
| 11:01      | are on the tree off for this, and it'll flash all the LEDs in a specific colour in sequence               |
| 11:05      | while you're pointing the camera at your tree, and then it knows where each LED is, and then             |
| 11:10      | you can use it to do effects.                                                                            |
| 11:12      | So it will do a rainbow gradient, or a snowfall, or popcorn effects, or rockets lighting up,             |
| 11:22      | or flags, and you can also draw on your tree in the app and make different LEDs go different             |
| 11:28      | colours, and you can tap each individual LED and set it to a different colour, which is                    |
| 11:32      | so much fun.                                                                                             |
| 11:33      | I have wasted so much time sitting there changing the LED colours on my Christmas tree, David.            |
| 11:39      | It's amazing.                                                                                            |
| 11:40      | I love it.                                                                                               |
| 11:41      | I love it.                                                                                               |
| 11:42      | It's amazing.                                                                                            |
| 11:43      | I know.                                                                                                  |
| 11:44      | Yeah.                                                                                                    |
| 11:45      | So, yeah, I should know.                                                                                 |
| 11:49      | I did get them on an amazing Black Friday deal.                                                          |
| 11:51      | They are quite expensive, especially if you have a bigger tree.                                          |
| 11:54      | I am very fortunate.                                                                                     |
| 11:55      | My tree is tall but skinny, because the last place I live down this place are both quite                 |
| 12:00      | small, which means that I don't have a huge amount of floor space, but ceiling space is                  |
| 12:05      | available, so I have a tall but skinny tree.                                                             |
| 12:08      | So I got away with 100 lights.                                                                           |
| 12:10      | And that looks pretty good on it, I have to say.                                                         |
| 12:13      | I don't know.                                                                                            |
| 12:14      | They came with a decently long lead and everything as well, which is great, but I just love the          |
| 12:17      | fact that I can do this.                                                                                 |
| 12:19      | I will confess, I saw these advertised on [[Instagram]], and I genuinely thought that they                   |
| 12:22      | were just a thing that weren't really very good.                                                         |
| 12:26      | But I have been spending a lot of time on the Homebridge subreddit recently, just because                |
| 12:31      | there's a lot of cool stuff that appears on there and the [[HomeKit]] one.                                   |
| 12:35      | And so many people were recommending these lights.                                                       |
| 12:38      | Now these lights are not [[HomeKit]] compatible.                                                             |
| 12:40      | They are Homebridge compatible though, which means somebody has written a Homebridge plugin              |
| 12:44      | for them.                                                                                                |
| 12:45      | So then you can get them into [[HomeKit]].                                                                   |
| 12:46      | So in [[HomeKit]], I can't change what colours or scenes they're doing or anything.                           |
| 12:52      | I can just turn them on enough and dim them if I want to.                                                |
| 12:55      | So that is something else I do.                                                                          |
| 12:57      | When I turn on the TV, as well as turning off the stars around the TV stand, I also dim                  |
| 13:00      | the Christmas tree to 50%.                                                                               |
| 13:02      | And I turn off the other, the prelit lights as well.                                                     |
| 13:07      | So that's, so it's not too bright, which is quite nice.                                                  |
| 13:10      | So I still have a nice, I tend to just keep it on a very slow change between colours during               |
| 13:16      | the day and get a bit jazzy or in the evenings.                                                          |
| 13:20      | But yeah, that's how I'm doing my tree right now.                                                        |
| 13:23      | All right.                                                                                               |
| 13:24      | So the next time you see these on a killer deal, let me know.                                            |
| 13:27      | Yeah.                                                                                                    |
| 13:28      | I saw them on a Black Friday deal here in the UK.                                                        |
| 13:30      | I presume they were probably also on sale somewhere in the US.                                           |
| 13:34      | But yeah.                                                                                                |
| 13:35      | So that's something that you can do there.                                                               |
| 13:38      | Yeah, that's, that is crazy.                                                                             |
| 13:40      | I think, I don't know, as long as I could afford it, I think my wife would go nuts for                   |
| 13:44      | these things.                                                                                            |
| 13:45      | Yeah.                                                                                                    |
| 13:46      | Yeah.                                                                                                    |
| 13:47      | That's the thing.                                                                                        |
| 13:48      | They can be quite pricey.                                                                                |
| 13:49      | As you can imagine, you know, individually addressable LEDs are the light strip from                     |
| 13:53      | murals that I mentioned earlier was ridiculously cheap for 10 meters.                                    |
| 13:57      | I think that's what 30 feet of light strip, but they are not individually addressable LEDs.              |
| 14:02      | You set the entire strip to one colour.                                                                   |
| 14:06      | And that's it.                                                                                           |
| 14:07      | So how much do twinkly lights cost normally?                                                             |
| 14:10      | I think they're usually around 120 pounds, I want to say, for the hundred, and I got                     |
| 14:15      | them for about 50, which is still a lot of money for Christmas tree lights.                              |
| 14:20      | Yeah.                                                                                                    |
| 14:21      | Very am I.                                                                                               |
| 14:22      | I recently bought a friend some Christmas lights for five pounds for a hundred warm                      |
| 14:26      | white lights.                                                                                            |
| 14:27      | They don't, they don't have any patterns or anything.                                                    |
| 14:29      | I could have got a multi-coloured ones for the same price, but you know, they're literally                |
| 14:34      | 10 size the price of normal Christmas lights, but they're so much fun to program.                        |
| 14:38      | And there's a music module as well, where you can have them, you know, dance in time                     |
| 14:42      | to songs and stuff like that if you wanted to.                                                           |
| 14:45      | Yeah.                                                                                                    |
| 14:46      | And there's a whole, whole bunch of them.                                                                |
| 14:47      | I'm looking like curtains and all sorts of different.                                                    |
| 14:50      | Yeah.                                                                                                    |
| 14:51      | Yeah.                                                                                                    |
| 14:52      | Yeah.                                                                                                    |
| 14:53      | They do all sorts of things.                                                                             |
| 14:54      | Yeah.                                                                                                    |
| 14:55      | I went with just a chain of LEDs and wrapped them around my tree.                                        |
| 14:57      | I did need to get an assistant to help me because it's surprisingly difficult when                       |
| 15:02      | you have a tall skinny tree to wrap things around it.                                                    |
| 15:04      | So I had a friend rotate the tree while I just held the lights to pin them in place                      |
| 15:09      | as we went.                                                                                              |
| 15:10      | But that worked out quite nicely.                                                                        |
| 15:12      | I'm that guy when it comes to putting lights on a Christmas tree where I'm obsessive about               |
| 15:17      | it.                                                                                                      |
| 15:18      | Like, you know, there's two, you can make two choices, putting lights on your Christmas                  |
| 15:21      | tree.                                                                                                    |
| 15:22      | You can just kind of like throw them up there and get it done very quickly, or you can wrap              |
| 15:25      | them into the limbs.                                                                                     |
| 15:27      | And that's a good time for me to put on a book on tape or a podcast and I will, literally                |
| 15:32      | I'll start lighting the tree and my family will go away for hours and then they'll come                  |
| 15:36      | back and the tree is lit because I just, I'm insistent.                                                  |
| 15:40      | My tree is basically a triangle.                                                                         |
| 15:42      | It doesn't have limbs per se.                                                                            |
| 15:44      | It is a piece of continuous wire wrapped into a tall skinny triangular shape, sort of like               |
| 15:49      | a pyramid, but very, very squished and it only has three sides, not four.                                |
| 15:54      | But it's a nice tree.                                                                                    |
| 15:56      | I actually like it and it looks pretty cool.                                                             |
| 15:59      | And especially with these twinkly lights, I am super impressed.                                          |
| 16:02      | Yeah.                                                                                                    |
| 16:03      | Just, and I was just looking, I mean, it's too late for me this year, but a 200.                         |
| 16:07      | Next year?                                                                                               |
| 16:08      | Yeah, maybe, maybe.                                                                                      |
| 16:09      | We'll see how I'm feeling.                                                                               |
| 16:10      | You know, it's been a rough year, you know, so I don't know, I feel like I can afford                    |
| 16:16      | them, but it's $230 for a 250 light set.                                                                 |
| 16:21      | Yeah.                                                                                                    |
| 16:22      | Yeah.                                                                                                    |
| 16:23      | They can be quite pricey.                                                                                |
| 16:24      | So, yeah.                                                                                                |
| 16:25      | Watch out for the sales people in January.                                                               |
| 16:26      | There should be some good January sales.                                                                 |
| 16:28      | Yeah.                                                                                                    |
| 16:29      | Well, while we're on the light theme, I actually have some other light related automations               |
| 16:34      | that we could talk about.                                                                                |
| 16:35      | Well, let me finish.                                                                                     |
| 16:36      | I've got one more thing.                                                                                 |
| 16:37      | So the May Ross thing works so well.                                                                     |
| 16:40      | Historically, I have lit my outdoor lights.                                                              |
| 16:44      | You know, the guy who makes a show called Automators, I actually have never automated                    |
| 16:47      | the outdoor lights because- Oh my gosh, David.                                                           |
| 16:50      | I mean, like 10, 15 years ago, I bought a light sensing switch.                                          |
| 16:56      | So it's just outside and it's the source where the lights are plugged in.                                |
| 17:01      | And as soon as it senses that it's dark, then the lights turn on and they stay on for like               |
| 17:07      | three hours.                                                                                             |
| 17:08      | And it's always worked so well that it's just never been a problem.                                      |
| 17:12      | But I relocated it this year and when we pull into the driveway after dark, then all the                 |
| 17:17      | lights turn off because the light sensor thinks it's daylight and then that resets everything.           |
| 17:22      | So I had to switch over to something more automator-friendly this year and I just spent another 15 bucks |
| 17:27      | and bought another May Ross and it's holding it just fine.                                               |
| 17:30      | Yes.                                                                                                     |
| 17:31      | Yeah, that is great.                                                                                     |
| 17:32      | Yeah.                                                                                                    |
| 17:33      | I didn't realise, I mean, I guess it depends on where your plug is.                                      |
| 17:36      | But finding outdoor home kit compatible plugs can be a bit tricky.                                       |
| 17:40      | I know Wemo do some, but of course they are understandably a bit more pricey.                            |
| 17:44      | But I'm finding that there are a lot of newcomers in the home kit market actually right now,             |
| 17:48      | which are producing things at more affordable prices.                                                    |
| 17:51      | I think Apple's requirement of secure self-wear rather than a specific chip in their devices             |
| 17:57      | is definitely making more manufacturers jump on board.                                                   |
| 18:00      | And the way I'm doing this one is actually I run the cord for the lights from the garage                 |
| 18:06      | to just under the garage door.                                                                           |
| 18:08      | So if you come see my house, you can plug in.                                                            |
| 18:10      | And then I put the May Ross plug on the inside between the garage plug and the cord that                 |
| 18:16      | goes outside and that made it closer to the network and it's dry and just kind of solved                 |
| 18:22      | a whole bunch of problems.                                                                               |
| 18:23      | Yeah, yeah.                                                                                              |
| 18:24      | That is definitely a great approach on that.                                                             |
| 18:27      | This episode of The Automators is brought to you by ExpressVPN, high speed, secure and                   |
| 18:32      | anonymous VPN services.                                                                                  |
| 18:35      | Get an extra three months for free when you go to expressvpn.com/automators.                       |
| 18:42      | The sad truth is our data isn't always safe.                                                             |
| 18:45      | No matter who you are or what sites you use, attacks leading to data leaks are worrying                  |
| 18:50      | and they're common.                                                                                      |
| 18:52      | And you don't want your credit card info, passwords or driver's license in the hands                     |
| 18:57      | of hackers, especially when, according to recent reports, your data is worth up to $1,000                |
| 19:03      | on the darker parts of the web.                                                                          |
| 19:05      | You're already busy.                                                                                     |
| 19:06      | You don't want to have to worry about hackers and scammers while you use your devices.                   |
| 19:10      | I don't either.                                                                                          |
| 19:11      | That's why I use ExpressVPN.                                                                             |
| 19:14      | ExpressVPN is an app that funnels your data through a secure encrypted tunnel so that no                 |
| 19:19      | matter what device you use, you can have peace of mind every time you use on the internet.               |
| 19:24      | The app connects with just one click is lightning fast and the best part is ExpressVPN works             |
| 19:30      | on up to five devices simultaneously.                                                                    |
| 19:33      | So you and your whole family can stay protected.                                                         |
| 19:35      | I've been using ExpressVPN for years.                                                                    |
| 19:38      | They gave me a trial for it when they first came on as a sponsor and I was immediately                   |
| 19:43      | attracted to ExpressVPN.                                                                                 |
| 19:45      | I like the ease of use.                                                                                  |
| 19:46      | I like the fact that you just open up an app, you press one button and you're plugged in.                |
| 19:51      | And I just renewed, I believe, for the second time and that is not, you know, I'm not getting            |
| 19:55      | it for free, guys.                                                                                       |
| 19:56      | I pay for it just like you and it is a no-brainer for me.                                                |
| 19:59      | I just did my renewal just a couple of weeks ago.                                                        |
| 20:02      | I buy it at a year at a time and I have safe and secure internet on all my devices no matter             |
| 20:08      | where I am.                                                                                              |
| 20:09      | I even like having it when I'm home, you know, we're all stuck home with this pandemic.                  |
| 20:14      | But it just creeps me out that these cable companies are tracking all the data we use                    |
| 20:20      | on the internet.                                                                                         |
| 20:21      | And I don't do anything weird on the internet, but I just don't want to give them the data.              |
| 20:24      | So I turned it on at home too.                                                                           |
| 20:26      | But ExpressVPN, once you get your account, that's all you have to do.                                    |
| 20:29      | Put it in, hit a button and you're off to the races.                                                     |
| 20:32      | So protect yourself with ExpressVPN.                                                                     |
| 20:34      | The VPN rated number one by CNET, wired and countless others.                                            |
| 20:39      | And if you visit expressvpn.com/automators, right now you can arm yourself with an extra           |
| 20:45      | three months of ExpressVPN for free.                                                                     |
| 20:47      | That's e-x-p-r-e-s-s-vpn.com/automators.                                                           |
| 20:53      | Go ahead and visit expressvpn.com/automators to learn more.                                        |
| 20:57      | And our thanks to ExpressVPN for their support of this show and all of relay FM.                         |
| 21:03      | So David, do you want to continue the light theme?                                                       |
| 21:05      | I've just realised we've done one automation so far.                                                     |
| 21:07      | We've got another 11 to go.                                                                              |
| 21:09      | Okay, let's do another one.                                                                              |
| 21:11      | Let's do another one.                                                                                    |
| 21:12      | So on the second day of Christmas automation or holiday automation, I would like to continue             |
| 21:16      | the lights theme.                                                                                        |
| 21:18      | Coloured bulbs are great at this time of year.                                                            |
| 21:20      | It's a great excuse if you've been looking at getting some smart bulbs for lamps, especially             |
| 21:25      | anything where the physical plug is a little bit out of the way and difficult to access.                 |
| 21:29      | And you can set them to reds, golds, greens, all of those wonderful colours.                              |
| 21:34      | I also have Nanoleaf light panels though.                                                                |
| 21:36      | I have the original triangular ones, but I do have a rhythm module for them.                             |
| 21:42      | Since then they have come out with squares and then hexagons, which are the best-agons.                  |
| 21:46      | And now they have shapes, which are a variety of different shapes that you can interconnect              |
| 21:52      | with each other.                                                                                         |
| 21:53      | But these are really pretty lights.                                                                      |
| 21:57      | And Nanoleaf has also come out with some very cheap coloured bulbs and a light strip,                     |
| 22:02      | which is kind of affordable.                                                                             |
| 22:05      | And they don't require a hub and they work pretty well.                                                  |
| 22:10      | The new stuff is using the [[Thread]] technology, which is in the HomePod Mini, David.                       |
| 22:14      | So it reacts super fast if you have a HomePod Mini.                                                      |
| 22:18      | But I really like my Nanoleaf light panels.                                                              |
| 22:20      | I did not stick them to the wall like they suggest.                                                      |
| 22:23      | I used some other double-sided foam adhesive tape to stick them to a piece of wood, which                |
| 22:30      | has got a white facing on it.                                                                            |
| 22:32      | And then I've hung that in a frame, which did need reinforcement.                                        |
| 22:35      | These lights are kind of heavy, but they're now hanging above my sofa.                                   |
| 22:38      | And they are amazing holiday lights and also just lights for ambient colour the rest of                   |
| 22:44      | the year.                                                                                                |
| 22:45      | They're surprisingly bright.                                                                             |
| 22:46      | I should warn people.                                                                                    |
| 22:47      | But it's really nice to have other lights also join in on seasonal fun, be that oranges                  |
| 22:54      | and purples at Halloween, or pastel colours at Easter, or just pretty pale blue colours                    |
| 23:01      | in the summer in the evenings when you're trying to cool down and you're thinking of                     |
| 23:04      | the beach or something.                                                                                  |
| 23:06      | So I definitely recommend pretty coloured lights and getting them in on your automation game.             |
| 23:12      | Yeah, I have looked at these Nanoleaf lights for years and I just can never figure out where             |
| 23:17      | I'm going to put them or where I would put them.                                                         |
| 23:20      | But do they support [[HomeKit]] at all, or is it yours?                                                      |
| 23:23      | Yeah, yeah, they're fully [[HomeKit]] integrated, which is great.                                            |
| 23:27      | And they have a rhythm module, which means that it can listen to music and then change                   |
| 23:31      | colour in time with the music.                                                                            |
| 23:34      | But what I really like is inside the app, there is something where you can actually                      |
| 23:39      | slow it down.                                                                                            |
| 23:40      | So anybody who knows somebody with epilepsy will be aware that fast flashing lights can                  |
| 23:45      | potentially cause an epileptic fit, but you can actually change it.                                      |
| 23:49      | So it will still sink in time with the music, it will just go slowly, so it shouldn't trigger            |
| 23:55      | one of those.                                                                                            |
| 23:56      | Obviously I'm not a medical professional, and I'm sure Nanoleaf will still recommend                     |
| 23:59      | that you follow whatever medical advice is out there.                                                    |
| 24:01      | But I like the fact that that feature actually exists inside of this app because really fast             |
| 24:07      | flashing lights just make me feel a bit off sometimes.                                                   |
| 24:11      | And if you're sitting there at home, then you don't necessarily want it to be pretending                 |
| 24:15      | that it's a 1970s disco, so it can be quite nice to have that.                                           |
| 24:20      | And you can add in some funky remote system as well.                                                     |
| 24:22      | Nanoleaf have one, I think it's a dodecahedron, no, that's incorrect, it's a nine-sided shape.           |
| 24:29      | But Aqara also have a six-sided cube, and you could just have these set up to trigger                   |
| 24:35      | different scenes and then kind of roll them like dice and just see where they land.                      |
| 24:39      | I would suggest rolling them on a soft surface rather than, you know, smashing them around               |
| 24:42      | on something hard.                                                                                       |
| 24:44      | But you know, you can add some cool remotes for your family, and they'll be able to get                  |
| 24:48      | in on the automation fun, and it's really great.                                                         |
| 24:52      | Yeah, that might be something I have to look at next year, honestly.                                     |
| 24:57      | It really pushes my buttons, but I can't figure out where to put it, but I'll figure something           |
| 25:01      | out.                                                                                                     |
| 25:02      | I lost my studio in 2020, so I can't, I don't even have my own little space that I could                 |
| 25:06      | just take them and...                                                                                    |
| 25:07      | Well, I hung them, I hung these above my sofa.                                                           |
| 25:09      | I know in your case, you might not be able to hang them, you know, directly above your                   |
| 25:14      | sofa, but you know, putting them on a wall somewhere near your desk or one of your desks                 |
| 25:18      | might be a nice place to put them.                                                                       |
| 25:20      | I will say that these can do sort of sunrise colours and theoretically can help you with                  |
| 25:25      | waking up, but they are exceptionally bright.                                                            |
| 25:29      | So you will, you know, want to take that into account if you're thinking of putting them                 |
| 25:34      | in the bedroom.                                                                                          |
| 25:35      | Do not set them to 100% brightness when you first wake up in the morning.                                |
| 25:39      | I did that as a test earlier this week, and even though the lights were on the floor,                    |
| 25:43      | I still woke up immediately as soon as they turned on, and I'm not a particularly light                  |
| 25:48      | sleeper at the moment.                                                                                   |
| 25:49      | I'm going to hang them over the sofa, so next time you come stay with me, I'll have them                 |
| 25:53      | to turn on the automators colours at like 2 AM.                                                           |
| 25:56      | Oh, thank you, David.                                                                                    |
| 25:58      | Me and my jet lag will greatly appreciate that.                                                          |
| 26:04      | Another one that is a very holiday-related automation is music.                                          |
| 26:08      | I mean, everybody has like their favourite kind of holiday music, and why not automate                    |
| 26:13      | that?                                                                                                    |
| 26:15      | I have found for, you know, I named my holiday playlist, Yule, and I actually share that.                |
| 26:19      | I'll put the sharing link in the show notes.                                                             |
| 26:23      | So if you've got [[Apple Music]], you can get my Yule playlist.                                              |
| 26:26      | It's all like jazz.                                                                                      |
| 26:27      | So if you like jazz and Christmas music, that may be for you.                                            |
| 26:31      | But anyway, for whatever reason, when I yell out to that pretty lady in the little speaker               |
| 26:37      | box and I say, play Yule playlist, she never gets it.                                                    |
| 26:41      | I don't know what.                                                                                       |
| 26:42      | I think it's because of the name of the playlist.                                                        |
| 26:44      | I need to give it something more unique, like David's super fancy Christmas playlist                     |
| 26:48      | or something.                                                                                            |
| 26:49      | I don't know, but it just never seems to work.                                                           |
| 26:51      | So I have taken the combination of my Yule playlist and added a bunch of automation to                   |
| 26:57      | it because starting a playlist in shortcuts is trivial and your phone is always in your                  |
| 27:02      | pocket.                                                                                                  |
| 27:03      | And since we've got all these new triggers, I've been playing with, this has been kind                   |
| 27:07      | of my trigger experimentation.                                                                           |
| 27:11      | I told you that I put an NFC tag by the front door, and now I've programmed that to start                |
| 27:19      | the Yule playlist.                                                                                       |
| 27:20      | I walk in the door, I slap my phone against the sticker, and I get my music to the chagrin               |
| 27:26      | of everybody else in my family, but I love it.                                                           |
| 27:30      | That is great.                                                                                           |
| 27:31      | And you can set the playback destination in shortcuts too, which is how I am actually                    |
| 27:35      | doing one of my evening routines, actually, because I have an NFC tag next to my bed where               |
| 27:41      | I tap my phone on it and it triggers [[Dark Noise]] and plays that to the speaker in my                      |
| 27:45      | bedroom.                                                                                                 |
| 27:46      | And I do that and I trigger it to all of the HomePods downstairs, so there's nowhere                    |
| 27:52      | to rest.                                                                                                 |
| 27:53      | Are they all paired together?                                                                            |
| 27:54      | No, there's two of them.                                                                                 |
| 27:55      | There's two of them there.                                                                               |
| 27:56      | Okay, yeah.                                                                                              |
| 27:57      | Okay, yeah.                                                                                              |
| 27:58      | Because you can air play, unfortunately, this is a limitation of shortcuts, which I really               |
| 28:03      | wish they were fixed, where you can only set one playback destination inside of shortcuts.               |
| 28:09      | And so, but yeah, if you have two HomePods downstairs, that makes sense.                                |
| 28:12      | That works.                                                                                              |
| 28:14      | So speaking of NFC, I actually have a recommendation, it's kind of more of a gift than something         |
| 28:21      | you might want to do yourself, but I can see why people would also want NFC tags for themselves.         |
| 28:27      | If you're thinking, oh, there are some things I'd really like to automate and David and                  |
| 28:31      | Rose have kind of got me going here with what I could do with some NFC tags.                             |
| 28:35      | You can have a blank NFC tag or you can use bank cards, ID cards, anything that's got                    |
| 28:40      | an NFC chip in it to read that in shortcuts, to trigger an automation.                                   |
| 28:47      | So I used to use my ID card at work when I was still going to an office to help me trigger               |
| 28:51      | my work time tracking.                                                                                   |
| 28:53      | So I would keep track of what I was doing work wise.                                                     |
| 28:56      | But a great thing that you could do is buy some NFC tags or stickers.                                    |
| 29:01      | Now I should note there is a series of standards, as always, which apply to NFC tags.                    |
| 29:07      | Especially if it says two, one, three, that means that these are a one time writable chip                |
| 29:12      | and two, one, fives are rewriteable.                                                                     |
| 29:15      | So just like CDR and CDRWs or floppy disks after you've taken the chip out.                              |
| 29:21      | So check before you buy if you think that you're going to want to potentially, you know, write           |
| 29:25      | stuff to these.                                                                                          |
| 29:27      | But I have actually been writing to NFC tags.                                                            |
| 29:30      | Now my sergeant, yeah, yeah, so my sergeant showed me an app called NFC tools.                           |
| 29:37      | We'll put a link in the show notes, which is a great app that you can use on your iPhone                 |
| 29:42      | to write stuff to NFC tags.                                                                              |
| 29:44      | And so I have a little photo frame in my living room, and it's got the name and password for             |
| 29:51      | my Wi-Fi in it.                                                                                          |
| 29:52      | It's also got a QR code that you can scan.                                                               |
| 29:54      | But if you tap your phone to the QR code, it'll help you join the Wi-Fi because it's                     |
| 29:58      | got the username and the password encrypted in it in the same kind of format that you would              |
| 30:02      | use for a QR code, but obviously NFC based.                                                              |
| 30:06      | So if you tap your phone to that, then that can help people join the Wi-Fi.                              |
| 30:10      | But one that I really like the idea of, okay, is send, say for example, your mom or your                 |
| 30:15      | grandma a photo of you in a frame, but stick an NFC tag behind your head and then program                |
| 30:22      | it so that when they tap their phone on it, it'll suggest it'll pop up to call you.                      |
| 30:27      | Now you don't need to use shortcuts for this.                                                            |
| 30:28      | You can actually just program this in NFC tools.                                                         |
| 30:31      | You can have, you know, like contact information and just type it in there so that they can              |
| 30:35      | just call your number.                                                                                   |
| 30:36      | And that I think is amazing, especially if, for example, you know that a family member                   |
| 30:41      | is going to be getting an iPhone for this holiday season, then send them some photos                     |
| 30:47      | of different people and have NFC tags behind it so that they can just tap on the person                  |
| 30:52      | to call them.                                                                                            |
| 30:53      | That's amazing.                                                                                          |
| 30:54      | That feels like magic where they just tap the phone on the person and it calls them.                     |
| 31:00      | And you can also, of course, stick them, stick NFC tags in all the places yourself to call               |
| 31:05      | people.                                                                                                  |
| 31:06      | I may have gone a little bit further, David.                                                             |
| 31:08      | I have lots of NFC tags.                                                                                 |
| 31:09      | I bought some little chip ones.                                                                          |
| 31:11      | They're not stickers.                                                                                    |
| 31:12      | They're just kind of like very thin coins.                                                               |
| 31:14      | And then I bought a roll of labels for my label maker, which is just slightly smaller                    |
| 31:18      | in diameter than the chip.                                                                               |
| 31:20      | So I'm now printing labels to stick off my NFC chips so that I know which one does before                |
| 31:26      | I decide exactly where I'm going to stick.                                                               |
| 31:28      | Are you primarily using them to call because those are two great examples of why you would               |
| 31:32      | want to write to an NFC tag, but honestly, I can't think of any others.                                  |
| 31:36      | Yeah.                                                                                                    |
| 31:37      | So most of the time, for me personally, I'm not doing that.                                              |
| 31:40      | I'm just leaving them blank and then using them to trigger shortcuts because that works                  |
| 31:45      | for me.                                                                                                  |
| 31:46      | And some of these shortcuts, you know, because if you use these with shortcuts on your iPhone,           |
| 31:50      | now you can also write a shortcut to URL to one of these tags with the app NFC tools.                    |
| 31:56      | But the problem with that is then everybody has to have the same shortcut.                               |
| 32:00      | So that might not work super well.                                                                       |
| 32:03      | And personally, I would recommend against writing a shortcuts URL to an NFC chip, especially             |
| 32:07      | if it's a one-time write.                                                                                |
| 32:08      | If it's rewriteable, then sure, by all means, go ahead.                                                  |
| 32:11      | But if it's a one-time write, I would not do it.                                                         |
| 32:13      | Just use.                                                                                                |
| 32:14      | So what shortcuts does, I believe, is it reads the ID of the tag.                                        |
| 32:18      | So it should never, you know, run into the case of, oh, and this one also happens to                     |
| 32:22      | trigger this other thing, which I wasn't intending for it to do.                                         |
| 32:27      | Now, I want to wind back just a little bit, though.                                                      |
| 32:29      | This is not holiday theme, but look, maybe it is if you have people over your house.                     |
| 32:34      | The idea that you could say, just tap this with your phone and it's going to connect                     |
| 32:37      | you to my guest Wi-Fi.                                                                                   |
| 32:40      | Tell me how you did that.                                                                                |
| 32:41      | Okay.                                                                                                    |
| 32:42      | So there is, there's a whole bunch of different websites out there where you can generate                |
| 32:46      | a QR code for your Wi-Fi and you type in the username and the password.                                  |
| 32:51      | SC Tools works in pretty much the same way.                                                              |
| 32:53      | It asks you for the, the name of the network.                                                            |
| 32:57      | So if you tap on write and then you need to go to add record, then you scroll down until                 |
| 33:02      | you find Wi-Fi network, then you type, you select the kind of authentication that you                    |
| 33:07      | have.                                                                                                    |
| 33:08      | So that could be WPA personal, WPA to personal enterprise, all of that.                                  |
| 33:13      | And your encryption, which is probably, you know, EES or whatever, then you type in the                  |
| 33:19      | name of your network and your password, then you type, okay.                                             |
| 33:22      | And when it's got all the required fields, then it will go ahead and actually just, you                  |
| 33:27      | know, write it to the NFC tech for you.                                                                  |
| 33:29      | And then when you connect, it should just pop up and do things, at least in my experiments,              |
| 33:34      | it's worked super well.                                                                                  |
| 33:35      | So there's nothing we need to do on the recipient iPhone, it'll just connect as long as you              |
| 33:39      | set up the tech.                                                                                         |
| 33:40      | Yeah.                                                                                                    |
| 33:41      | Yeah.                                                                                                    |
| 33:42      | Because it's reading the information in that NFC tech.                                                   |
| 33:43      | All right.                                                                                               |
| 33:44      | So I should note to people, information written to an NFC tag overrides, you know, the ID                |
| 33:50      | of the NFC tag.                                                                                          |
| 33:51      | Sure.                                                                                                    |
| 33:52      | So for example, if you, if you've written something to an NFC tag, then, so say for                      |
| 33:57      | example, you write, you know, connecting to the Wi-Fi network to it.                                     |
| 34:00      | And then you also want to use it to trigger an automation on your iPhone.                                |
| 34:04      | Every time you tap your phone to that tag, it will do both, which can be a good thing                    |
| 34:09      | and a bad thing.                                                                                         |
| 34:11      | So, you know, take that, that a warning with a rain or, you know, and figure out, you know,              |
| 34:17      | how you want to use this.                                                                                |
| 34:18      | Well, honestly, we've got this little funny little Yoda statue in our room.                              |
| 34:23      | And I was thinking, this would be perfect, it's light.                                                   |
| 34:26      | I could stick one of these to the bottom of it.                                                          |
| 34:28      | And when people come over and say, you want to get on the Wi-Fi, just say tap the Yoda.                  |
| 34:33      | And then, yeah, I'm going to get one.                                                                    |
| 34:36      | So I, it's official, I've now spent money on this episode.                                               |
| 34:39      | Ha ha ha.                                                                                                |
| 34:40      | Yeah.                                                                                                    |
| 34:41      | Yes, David.                                                                                              |
| 34:42      | You fell into your own trap.                                                                             |
| 34:43      | Yep.                                                                                                     |
| 34:44      | Yep.                                                                                                     |
| 34:45      | Well, they're, they're in the show notes.                                                                |
| 34:46      | So hopefully everybody will be able to find them.                                                        |
| 34:47      | Yeah, I've got it.                                                                                       |
| 34:48      | So I've got NFS, because I do have NFC tags I've been using, but I have not written to                   |
| 34:52      | them yet.                                                                                                |
| 34:53      | And that is a very good use case scenario for me.                                                        |
| 34:55      | And also, of course, the one you talked about is really good too, for someone that, you                  |
| 34:59      | know, doesn't, you know, someone that's a little more tech challenged.                                   |
| 35:03      | The idea, they tap their phone against a picture and then call somebody that is kind                     |
| 35:06      | of nice.                                                                                                 |
| 35:07      | Yeah.                                                                                                    |
| 35:08      | And I love it.                                                                                           |
| 35:09      | You know, I have a few tags dotted around that I can just sort of tap my phone on and                    |
| 35:12      | it will, you know, go ahead and remind me that, hey, you only have, you know, another 25 minutes         |
| 35:17      | here at the sofa, because you need to, you know, go and prep for automators or whatever                  |
| 35:21      | it is.                                                                                                   |
| 35:22      | Um, and, you know, so I have them around in places that I frequently put my phone.                       |
| 35:26      | Yeah.                                                                                                    |
| 35:27      | Because then stuff does just happen, which is great.                                                     |
| 35:29      | So.                                                                                                      |
| 35:30      | Yeah.                                                                                                    |
| 35:31      | I use them for a lot of like contextual stuff where like I want to set a timer and work                  |
| 35:35      | on an app and do things so in, in a specific location, you know.                                         |
| 35:39      | Yes.                                                                                                     |
| 35:40      | Yeah.                                                                                                    |
| 35:41      | Yeah.                                                                                                    |
| 35:42      | That's, that's always great.                                                                             |
| 35:44      | This episode of automators is brought to you by Fast Scripts.                                            |
| 35:47      | What's the point in automating all of these tedious tasks in your life if you don't have                 |
| 35:50      | instant access to these automations, right at the tip of your fingers.                                   |
| 35:54      | Fast Scripts is a supercharged script menu for your Mac that makes it easy to organise                   |
| 35:58      | and run scripts.                                                                                         |
| 35:59      | By defining global or app specific keyboard shortcuts, you can customise the behaviours                   |
| 36:03      | of all your most used Mac apps.                                                                          |
| 36:05      | You can even use it to override the default keyboard shortcuts in many apps.                             |
| 36:10      | The best part is Fast Scripts is completely free to use with up to 10 keyboard shortcuts.                |
| 36:15      | So you can use it as a quick fix to your most urgent needs.                                              |
| 36:17      | And then when you decide you want more than 10 shortcuts and not premium functionality                   |
| 36:21      | with a one-time payment of $25.                                                                          |
| 36:24      | Fast Scripts is really useful for helping you get into the habits of using some of these                 |
| 36:28      | because I know I've written loads of scripts over the years, but unless they're easily                   |
| 36:31      | accessible, I'm just not going to use it.                                                                |
| 36:34      | And that means that you should probably be using it as well if you're not already.                       |
| 36:37      | Because if you're listening to this podcast, you definitely have automations you should                  |
| 36:40      | be running.                                                                                              |
| 36:42      | And I also really like the fact that it comes with a whole bunch of [[AppleScript\|AppleScripts]] already,               |
| 36:46      | which means that if you're like me, yes, you could probably code an [[AppleScript]], but let's              |
| 36:51      | be honest, it's much easier to copy and paste the bits that you need from different scripts,             |
| 36:55      | stick it all together, and there you go.                                                                 |
| 36:57      | So Fast Scripts is a bonus repository as well.                                                           |
| 37:00      | Access to the Automators podcast can get 20% off for a limited time, so go to fastscripts.app/auto            |
| 37:06      | now to access the exclusive Automators discount coupon.                                       |
| 37:10      | That's fastscripts.app slash auto for 20% off.                                                           |
| 37:14      | Our thanks to Fast Scripts for their support of the show and Relay FM.                                  |
| 37:18      | All right, I've got one that is really been useful this year.                                            |
| 37:24      | We got some holiday cards.                                                                               |
| 37:26      | I don't know.                                                                                            |
| 37:27      | Do people do that in the UK?                                                                             |
| 37:28      | I assume they do.                                                                                        |
| 37:29      | It feels like that's where this all started.                                                             |
| 37:30      | Yeah, but we share holiday cards with friends and family, and we really enjoy it.                        |
| 37:37      | It's like a family dinner time ritual to look through the cards that came through that day,              |
| 37:42      | and we always enjoy them unless you send us a long letter and then we make fun of you                    |
| 37:47      | and laugh at you.                                                                                        |
| 37:49      | But otherwise, we're good.                                                                               |
| 37:51      | But then we always get in this discussion like, remember that year they sent that one                    |
| 37:54      | card and we want to talk about it, but then we can never actually see it.                                |
| 37:58      | So what we do is we keep the cards and then we get rid of them after Christmas.                          |
| 38:03      | I think we just throw them away because you can't keep all that stuff.                                   |
| 38:07      | And I got thinking this year, let's find a way to keep copies of this.                                   |
| 38:11      | And I did write a book called Paperless.                                                                 |
| 38:13      | So of course, I've got some ideas on it.                                                                 |
| 38:16      | But I wanted to put together a simple automation where anybody in the family could do it.                |
| 38:22      | So what I did was I installed Scan Pro Plus.                                                             |
| 38:25      | It used to be called Scan Bot, but now it's Scan Pro Plus, but they changed the name.                    |
| 38:31      | But it's a really good scanning app that can go on your phone.                                           |
| 38:34      | And my wife and I are the only people to do it.                                                          |
| 38:35      | The kids will never bother.                                                                              |
| 38:38      | But Scan Pro Plus has the ability to save with a token.                                                  |
| 38:44      | You can tokenise the name.                                                                               |
| 38:46      | So I token the name Holiday into the name, and then I have a shared folder we saved to.                  |
| 38:53      | And that's a shared folder in iCloud.                                                                    |
| 38:55      | So I've been using some of these iCloud shared features that just came out this year, and                |
| 38:59      | they're working fine.                                                                                    |
| 39:00      | So we have a shared folder.                                                                              |
| 39:01      | It goes in there.                                                                                        |
| 39:02      | And then I have on my Mac [[Hazel]] looking at that folder for anything with the name Holiday                |
| 39:08      | in it.                                                                                                   |
| 39:09      | And then it processes it and puts it into a folder, sorts it into a separate folder that                 |
| 39:16      | has a sort into sub folder command.                                                                      |
| 39:20      | [[Hazel]] does a really cool thing where you can add a command to say, take this file and put                |
| 39:23      | it into a sub folder, and you can do it by date.                                                         |
| 39:27      | Now by default, [[Hazel]] is going to want to make the date the day that you have the file.                  |
| 39:32      | So the exact date.                                                                                       |
| 39:34      | But you can modify that to just be the month or the year.                                                |
| 39:37      | And I modified to just be the year.                                                                      |
| 39:39      | And then I've got now a collection started of these cards going into a folder that sorts                 |
| 39:43      | them by year.                                                                                            |
| 39:45      | And all it takes, the only overhead was just teaching my wife how to use Scan Pro Plus.                  |
| 39:52      | And to be honest, I do most of the scanning anyway.                                                      |
| 39:55      | So I'm not sure I even needed to do that.                                                                |
| 39:57      | But it's just a really nice workflow that automatically sorts and saves the cards.                       |
| 40:03      | So then after we toss them after the new year, we'll still have access to them.                          |
| 40:09      | That's great.                                                                                            |
| 40:10      | I wish my family had done that.                                                                          |
| 40:11      | My parents have always kept the cards from the year and put them in the box with a Christmas             |
| 40:15      | tree.                                                                                                    |
| 40:16      | And then the next year they pulled them out and use that as the reference list of people                 |
| 40:19      | that they should definitely be sending cards to.                                                         |
| 40:21      | And it's also meant that in the case of the couple of relatives who've sadly passed away,                |
| 40:27      | we still had the last Christmas card they sent us, which then goes into a sort of permanent              |
| 40:31      | collection, which is displayed every year, which is quite a nice way to keep those people                |
| 40:35      | with us.                                                                                                 |
| 40:36      | But having a scanned copy of those cards as well would be great.                                         |
| 40:39      | So I'm going to be telling my parents about this app because I think that they should                    |
| 40:42      | really be doing that with some of these because not everybody's coming around forever and                |
| 40:46      | it's always nice to be able to live back.                                                                |
| 40:48      | Yeah, and the only hassle with it is you've got to have [[Hazel]] if you want to do the auto                 |
| 40:53      | sorting feature.                                                                                         |
| 40:54      | But honestly, you wouldn't need to do that either, really.                                               |
| 40:57      | You could just save to a folder.                                                                         |
| 40:58      | It'd be fine.                                                                                            |
| 40:59      | Like, you could date stamp it in the name and you really don't need the [[Hazel]] part on                    |
| 41:05      | the back end, but because I can't help myself, I put it in.                                              |
| 41:08      | Yeah.                                                                                                    |
| 41:09      | Yeah.                                                                                                    |
| 41:10      | Which makes a lot of sense.                                                                              |
| 41:11      | Yeah.                                                                                                    |
| 41:12      | So you're talking about holiday cards.                                                                   |
| 41:15      | I'm going to go with holiday wallpaper, not the kind that you stick on your wall, though,                |
| 41:20      | if you want to do that, by all means, figure out how to automate it and let me know.                     |
| 41:25      | But if you are running the iOS 14.3 beta, then I have a suggestion for you.                              |
| 41:31      | And David, I'm sure you're running the beta at this point.                                               |
| 41:33      | So what my suggestion is is create a folder and fill it with seasonal wallpaper for your                 |
| 41:39      | iPhone, for your iPad, et cetera, and then have a shortcut, choose one at random every                   |
| 41:43      | day, have it automatically run nice and early in the morning, and then your lock screen                  |
| 41:47      | every day will be a different seasonal wallpaper.                                                        |
| 41:50      | And I'm going to include a shortcut here in the show notes for people, which I've written,               |
| 41:53      | which just pulls a random file out.                                                                      |
| 41:55      | Now, because it's random, that means that this can repeat.                                               |
| 42:00      | You can actually do the same thing on the Mac with [[Hazel]] that can do, you know, that                     |
| 42:06      | can set your wallpaper as an automator, and I believe even Cable My Store can do that.                   |
| 42:10      | I would be very surprised if it couldn't.                                                                |
| 42:12      | But the other thing you can do.                                                                          |
| 42:13      | So I've just written a shortcut that can set a random one, but you could also name each                  |
| 42:18      | individual wallpaper with, you know, the, say, number of the day of the month.                           |
| 42:24      | So, you know, if this was slightly earlier in the month, then you could go through one                   |
| 42:28      | through 25 or whatever it is that you like.                                                              |
| 42:30      | And then you can have it just find the file with that day's, you know, the date of the                   |
| 42:37      | day as the number, and then set that as your wallpaper to avoid repeats if you wanted to,                |
| 42:43      | or potentially delete them once it's set the wallpaper.                                                  |
| 42:46      | There's a whole bunch of different things you can do, but I am enjoying a new festive                    |
| 42:49      | wallpaper every day.                                                                                     |
| 42:50      | I just Googled and found some nice ones for my iPhone.                                                   |
| 42:53      | So I've currently got some nice blue snowflakes drifting down onto what looks like it must               |
| 42:58      | be Santa's Grotto.                                                                                       |
| 42:59      | There you go.                                                                                            |
| 43:01      | And of course Santa has a grotto.                                                                        |
| 43:03      | He should.                                                                                               |
| 43:04      | Of course he does.                                                                                       |
| 43:05      | He deserves it.                                                                                          |
| 43:06      | Yeah.                                                                                                    |
| 43:07      | Yeah.                                                                                                    |
| 43:08      | I think that this whole idea of changing wallpaper automatically is something that, you know, we         |
| 43:11      | didn't have for such a long time, and now it's going to show up.                                         |
| 43:14      | I'm very curious to see how people use it.                                                               |
| 43:16      | Like I had this whole plan of like building a daily wallpaper with my calendar and all                   |
| 43:21      | this other stuff.                                                                                        |
| 43:22      | But like as we talked about in the widgets show, I don't think that's necessary anymore.                 |
| 43:26      | But making the automatic wallpaper selection do something like give your phone a holiday                 |
| 43:32      | theme.                                                                                                   |
| 43:33      | And you could, I could see several holidays over the year you would want to do this.                     |
| 43:36      | Or even like seasonal, you know, like you could have fall and winter would be kind of                    |
| 43:41      | fun.                                                                                                     |
| 43:42      | Yeah.                                                                                                    |
| 43:43      | And the other thing that I have been doing, which I have disabled for the time being is                  |
| 43:47      | I've also been setting my wallpaper to what I'm doing at the moment.                                     |
| 43:51      | So usually right now, because we're recording automators, David, I would have the automators             |
| 43:55      | wallpaper on my iPhone.                                                                                  |
| 43:57      | So if it lit up, then I'd see automators behind the notifications.                                       |
| 44:00      | But because I'm setting my wallpaper, what I'm considering doing, I have not yet done,                   |
| 44:07      | what I'm considering doing is writing into [[Data Jar]], the date that my wallpaper was last                 |
| 44:13      | changed by a very specific change wallpaper due to a theme day.                                          |
| 44:19      | And then if it, if it's changed at that day, then it won't do the context, contextual wallpaper.         |
| 44:24      | And if it, if it has, and if it hasn't, then it will do contextual wallpaper type thing.                 |
| 44:29      | But I have not yet done that.                                                                            |
| 44:30      | I've just disabled my automations to change the wallpaper in other cases.                                |
| 44:34      | So normally what you would do then is just have a look for a calendar event.                             |
| 44:38      | Like if you had a major work project, or in your case, a podcast, and then you would.                    |
| 44:43      | Well, I usually use actually NFC text when I start recording or doing something to do                    |
| 44:48      | things like time tracking and set do not disturb based on my calendar event, et cetera.                  |
| 44:53      | And then, you know, if I'd say that I'm doing automators, it sets the automators wallpaper               |
| 44:57      | for me, but not right now.                                                                               |
| 44:58      | That would be nice.                                                                                      |
| 44:59      | Like in my case, I really try to record podcasts on different days.                                      |
| 45:03      | I feel like, you know, it's kind of a high energy thing and doing a bunch of rows and                    |
| 45:07      | really help.                                                                                             |
| 45:08      | So like if it was MPU day, and I could have a check the calendar for, if there's a calendar              |
| 45:15      | entry that says MPU, something, something, then set the wallpaper to the MPU, you know,                  |
| 45:21      | artwork or an automator's days, which that would be kind of fun.                                         |
| 45:25      | I hadn't thought about that.                                                                             |
| 45:26      | Okay.                                                                                                    |
| 45:27      | I'm going to have to play with that Rose.                                                                |
| 45:28      | You've inspired me again.                                                                                |
| 45:29      | Well, there we go.                                                                                       |
| 45:30      | At least it was free this time.                                                                          |
| 45:32      | Yeah.                                                                                                    |
| 45:33      | So one problem I have, my wife and I, our love Christmas, we're really into it.                          |
| 45:40      | I mean, I made a field guide about gift wrap and I already told you that I kick everybody                |
| 45:45      | out of the room when I put lights on the tree.                                                           |
| 45:47      | But so we like buying gifts for people too.                                                              |
| 45:50      | And we found that we're not the best at communicating that stuff.                                        |
| 45:54      | And then we go to wrap presents and we're like, Hey, here's something really cool.                       |
| 45:58      | I bought so-and-so and she may have bought them the same or something very similar.                      |
| 46:02      | And, you know, we just, we don't communicate enough on that.                                             |
| 46:06      | And I just wanted, and both of us like fly off the handle when it comes to Christmas shopping.           |
| 46:11      | So the problem for us really isn't like making a list of what we're going to buy people.                 |
| 46:15      | The problem is once we go to start buying stuff, we go crazy.                                            |
| 46:19      | And so I wanted to try and solve that.                                                                   |
| 46:21      | I wanted to have an updateable list of what we had both bought.                                          |
| 46:26      | So before you buy something, you could check it to make sure the other person hadn't bought              |
| 46:29      | something similar already or whatever.                                                                   |
| 46:32      | And I wanted you some automation, but my spouse is not particularly into, you know, automation.          |
| 46:38      | So this is what I came up with.                                                                          |
| 46:41      | I made a shortcut and it is a, it's, it's collecting two variables.                                      |
| 46:48      | And I save it as an app on the home screen so she can just tap it.                                       |
| 46:51      | She doesn't have to open up shortcuts.                                                                   |
| 46:53      | And it'll, first is a choose from list and it's a list of all the people we buy gifts                    |
| 46:57      | for.                                                                                                     |
| 46:58      | So first you're grabbing the name of the person and then you're, then you type in what it                |
| 47:04      | is you just bought.                                                                                      |
| 47:05      | And so, you know, Rosemary, you know, new home kit, you know, switches and, and then                     |
| 47:13      | you hit enter and then it saves it with an append to note and Apple notes and a shared                   |
| 47:18      | note.                                                                                                    |
| 47:19      | We have a shared note between us for the gifts we bought and it just appends to that note                |
| 47:23      | that append is important there.                                                                          |
| 47:24      | You don't want to rewrite the note.                                                                      |
| 47:26      | You wanted to just add to the note and it does a great job and it, and I format it.                      |
| 47:30      | So it says Rosemary dash new, you know, home kit switches.                                               |
| 47:35      | And so then that updates automatically and because of the magic of note, Apple notes                     |
| 47:40      | sharing, it updates automatically on both phones.                                                        |
| 47:43      | So when either one of us goes to buy something, all she has to do is check the Apple note.               |
| 47:47      | And then after she done buying something, just run this, the little shortcut script.                     |
| 47:51      | She doesn't even know it's a shortcut, you know, she doesn't know what it is.                            |
| 47:54      | She's, you know, it doesn't occur to her.                                                                |
| 47:56      | It's a thing.                                                                                            |
| 47:57      | Yeah, it's a thing.                                                                                      |
| 47:58      | She pushes the button, she fills it out and it really has helped this year.                              |
| 48:02      | I'm really pleased to hear that.                                                                         |
| 48:04      | That is great.                                                                                           |
| 48:05      | Have you considered adding an emoji to the start of each one so you know who's bought                    |
| 48:08      | what?                                                                                                    |
| 48:09      | Just in case, you know, there is some overlap and she can go, David, we shouldn't have                   |
| 48:12      | got Rosemary the new home kit switches.                                                                  |
| 48:14      | I got her, you know, a series of HomePods or something like that, you know, a six pack                  |
| 48:19      | of HomePods.                                                                                            |
| 48:20      | Yeah.                                                                                                    |
| 48:21      | Yeah.                                                                                                    |
| 48:22      | That's a thing.                                                                                          |
| 48:23      | I have six rooms to put HomePods in and I've got, I nearly have a HomePod for each                     |
| 48:27      | room.                                                                                                    |
| 48:28      | I'm currently missing the hallway in the bathroom, the bedroom, I believe is being dispatched            |
| 48:32      | at the moment because shortly before we started recording, Apple billed me so that HomePod              |
| 48:37      | mini is on the way.                                                                                      |
| 48:38      | All right.                                                                                               |
| 48:39      | Good.                                                                                                    |
| 48:40      | My daughter got one.                                                                                     |
| 48:41      | They're pretty nice.                                                                                     |
| 48:42      | Yeah.                                                                                                    |
| 48:43      | They sound pretty good actually.                                                                         |
| 48:44      | At least mine does in my kitchen.                                                                        |
| 48:45      | Yeah.                                                                                                    |
| 48:46      | I'm pleased with that.                                                                                   |
| 48:47      | I'm used to the, to the big one, but you know, but you know, it really is a thing.                       |
| 48:50      | If you're into the Apple ecosystem, that's the one you want.                                             |
| 48:53      | If you want to, you don't need something with a super great speaker, but you know, you want              |
| 48:57      | to spend a hundred bucks.                                                                                |
| 48:58      | I mean, all these people are like putting themselves in knots over, do I get the, you                    |
| 49:03      | know, do I get the one from Amazon?                                                                      |
| 49:04      | Do I get the one from Apple?                                                                             |
| 49:05      | It just depends on what ecosystem you're in.                                                             |
| 49:07      | That's all.                                                                                              |
| 49:08      | Yeah.                                                                                                    |
| 49:09      | Yeah.                                                                                                    |
| 49:10      | Anyway.                                                                                                  |
| 49:11      | Yeah.                                                                                                    |
| 49:12      | So that, that's an automation that's working good.                                                       |
| 49:14      | Next year, like I had thought about different ways of doing this, not well, maybe I could                |
| 49:17      | make an error table and like my wife is never going to work with an error table.                         |
| 49:21      | That is like just not going to happen.                                                                   |
| 49:23      | And so Apple notes seem like the obvious choice.                                                         |
| 49:27      | I think what I would do next year, and this really isn't automator is like, we also often                |
| 49:34      | sit down and talk about gift ideas is for that destination note where we do the append                   |
| 49:39      | stuff.                                                                                                   |
| 49:40      | I think I would use the top of the node just to write down the ideas we had and then, then               |
| 49:45      | I would have pinned to the bottom of it what we actually bought.                                         |
| 49:48      | And maybe there's a better way to do it, but the point is I'm working with someone here                  |
| 49:52      | who is not going to lift a finger, you know, you know, I have to make it as easy as possible             |
| 49:57      | for her to interact with and that, that's what I came up with.                                           |
| 50:02      | I mean, that's, that's the thing, isn't it?                                                              |
| 50:03      | You've got to make it easy for other people to work with.                                                |
| 50:07      | And so speaking of purchasing items for people and things like that, I have been working                 |
| 50:14      | this year on automatically handling my email specifically in response to things that I've                |
| 50:20      | ordered, things that have been dispatched and things that have been delivered.                           |
| 50:24      | Now I know that Amazon sends me a lot of email on this.                                                  |
| 50:27      | And of course I can just filter this out at the server level, but especially when it comes               |
| 50:31      | to dispatch and delivery emails, I don't want them gone immediately.                                     |
| 50:35      | I want them gone about 24 hours after they appear in my mailbox.                                         |
| 50:41      | So I'm using [[Apple Mail]] for this.                                                                        |
| 50:45      | And what I'm doing is I've written a series of rules, which you can do in Apple Mail.                    |
| 50:50      | And then I have [[Keyboard Maestro]] activate itself at one o'clock in the morning.                          |
| 50:54      | It opens mail.                                                                                           |
| 50:55      | Mail is pretty much always in the inbox for me.                                                          |
| 50:58      | So I will note that this would not work if it was not in the inbox, but I usually tend                   |
| 51:04      | to close mail afterwards and I'm in the inbox anyway, so that's all good.                                |
| 51:10      | And so I have it do command A, and then there's a menu command, which is, well, I use command            |
| 51:17      | alt L, that's what my [[Keyboard Maestro]] macro does, and that applies my mail rules.                       |
| 51:22      | So mail rules, you can create them and they will automatically run on incoming email if                  |
| 51:26      | it meets the criteria.                                                                                   |
| 51:28      | But if one of my rules requires that the date received is less than, or sorry, is greater                |
| 51:35      | than one day's old, then it's not going to be able to run when it gets the mail.                         |
| 51:40      | And it won't run automatically again, you know, every couple of minutes to check whether                 |
| 51:44      | or not a message now matches its criteria.                                                               |
| 51:47      | So instead I have it do that.                                                                            |
| 51:49      | And then it just automatically gets rid of all of the, all of the old dispatch emails                    |
| 51:53      | and the old delivery emails.                                                                             |
| 51:56      | So if there is a problem that, you know, I'll still find it very quickly scrolling through               |
| 51:58      | my inbox, but I've been really working on trying to keep my inbox much cleaner.                          |
| 52:03      | And this is helping me massively with that.                                                              |
| 52:05      | And it also would mean that I could potentially forward them elsewhere.                                  |
| 52:08      | So I do have dispatch, sorry, I have order emails automatically get forwarded to deliveries,             |
| 52:13      | the June cloud app, which helps keep track of those.                                                     |
| 52:17      | And then, and then they get a colour to show that they've been handled and that they are                  |
| 52:22      | in deliveries.                                                                                           |
| 52:23      | Yeah.                                                                                                    |
| 52:24      | Apple Mail rules have so much promise, but so often they break your heart, like something                |
| 52:28      | silly happens and they just don't run when you, you look at it and it looks like it should               |
| 52:33      | run.                                                                                                     |
| 52:34      | And what you find out is there's all these conditions that you don't even know exist.                    |
| 52:38      | I related up mail, was it a, was it called a small cube is the name, oh, mail act on                     |
| 52:46      | and mail tags.                                                                                           |
| 52:48      | They just released their update for the M1 Max and for Big Sur.                                          |
| 52:51      | So if you want to like power up Apple Mail, that's what I would recommend using.                         |
| 52:57      | Mail act on in particular allows you to do some more stuff with mail rules that you wouldn't             |
| 53:02      | otherwise be able to do, like apply to outgoing and doing some other stuff.                              |
| 53:05      | But yeah, I, I get where you're coming from, part of me wishes Apple would just put those,               |
| 53:10      | all those powerful rules in the cloud, but also part of me acknowledges that they will                   |
| 53:15      | just never do that.                                                                                      |
| 53:16      | I just don't think that's ever going to happen.                                                          |
| 53:18      | I mean, it's also great because I don't necessarily have to use Apple Mail as my primary mail            |
| 53:21      | client in order to use these rules because I can just have it running in the background.                 |
| 53:26      | And that's pretty much what I do.                                                                        |
| 53:28      | It's just there and it's running in the background, it automatically handles stuff for me.               |
| 53:31      | I could have it run more frequently, you know, apply all rules more frequently than just                 |
| 53:35      | once a day at one AM, but I'm rarely using my Mac at one AM.                                             |
| 53:39      | And so it opening up mail doing command A, command L, and then hiding mail again is not                  |
| 53:43      | a problem for me.                                                                                        |
| 53:45      | And it just gets on with it and then stuff disappears.                                                   |
| 53:48      | And because of the wonder of IMAP, it happens to disappear everywhere, which is great.                   |
| 53:52      | So if you're still using pop, I would highly recommend upgrading.                                        |
| 53:56      | Yeah.                                                                                                    |
| 53:57      | No, I mean, who uses pop these days?                                                                     |
| 53:59      | I mean,                                                                                                  |
| 54:00      | there are some people who are concerned about, you know, privacy and so on.                              |
| 54:04      | And so by downloading the email, it's no longer on other servers to still be accessed, which,            |
| 54:09      | you know, is good, but it's also been through a whole bunch of servers up until that point.              |
| 54:13      | So I'm not completely sold on the security benefit of pop over IMAP.                                     |
| 54:17      | Yeah.                                                                                                    |
| 54:18      | And it's extraordinarily inconvenient because you're either going to get the same email copied           |
| 54:22      | to all your devices, but they're not going to know that or you're only going to get your                 |
| 54:26      | email on one device.                                                                                     |
| 54:27      | Yeah.                                                                                                    |
| 54:28      | So in March this year, when I came back to the UK, my mom was saying, I'm having some                    |
| 54:32      | really weird issues with email.                                                                          |
| 54:34      | You know, the stuff is always on my iPhone, but then when I turn my Mac on, it, like all                 |
| 54:39      | my email disappears and I don't understand why.                                                          |
| 54:42      | So I looked at her map at Mac and it was still using pop.                                                |
| 54:45      | I thought Gmail turned off pop.                                                                          |
| 54:47      | But apparently for her account, it was still active.                                                     |
| 54:49      | And I have no idea.                                                                                      |
| 54:50      | I know I set that up using the, you know, the standard Google settings that Mail has on                  |
| 54:56      | Mac OS.                                                                                                  |
| 54:57      | I've got no idea how she managed to change that over to pop.                                             |
| 55:00      | And as always, she swears she didn't touch it, but I'm not 100% convinced that she didn't                |
| 55:04      | do something.                                                                                            |
| 55:05      | Yeah.                                                                                                    |
| 55:06      | Well, and that's always like we're near the holidays and historically we would be visiting               |
| 55:09      | family.                                                                                                  |
| 55:10      | I don't know if that'll happen this year or not, but that's when you discover all the                    |
| 55:14      | technology problems in your family.                                                                      |
| 55:16      | And so often if you have a family member who is not tech savvy and they have an email problem,           |
| 55:22      | it's because they have a internet service company like a cable company or whoever who                    |
| 55:29      | still has pop email and they don't know you better and they're just using pop and they                   |
| 55:34      | may even have a way to switch it over to IMAP on their server, but they just don't bother.               |
| 55:39      | And it's like, there's been several family members where I've fixed their email and they                 |
| 55:44      | think I'm a genius.                                                                                      |
| 55:45      | All I did was switch it from pop to IMAP.                                                                |
| 55:47      | Yeah.                                                                                                    |
| 55:48      | Which is, you know, it's a great fix when you can offer it.                                              |
| 55:51      | Because, you know, they have deeper problems than the wrong configuration settings for                   |
| 55:55      | things, but that's a story for another day.                                                              |
| 55:57      | All right.                                                                                               |
| 55:59      | Let's talk about our next sponsor and as our friends over at Woven, the calendar with                    |
| 56:03      | the most powerful scheduling tools.                                                                      |
| 56:06      | Try it free for 21 days.                                                                                 |
| 56:09      | Just go to the link in our show notes today to get that trial.                                           |
| 56:12      | Look, we're all trying to manage our calendars and it's hard.                                            |
| 56:16      | And the more disorganised you get, the more it impacts your work and your ability to                     |
| 56:20      | get things done.                                                                                         |
| 56:22      | Using a great calendar is important to your workflow because it helps you stay on target.                |
| 56:27      | Woven syncs all of your calendars in one place, including your Google G Suite and Microsoft              |
| 56:32      | 365 accounts.                                                                                            |
| 56:34      | So you can see all of your time, both personal and professional in one place.                            |
| 56:39      | Woven builds scheduling links directly into your calendar.                                               |
| 56:42      | So you can use one-off scheduling links.                                                                 |
| 56:45      | You can quickly time block your week using Woven smart templates so you can plan your                    |
| 56:49      | perfect week.                                                                                            |
| 56:50      | And it's that time blocking that helps you avoid that disorganised feeling.                              |
| 56:54      | I can tell you, I time block and it makes a huge difference.                                             |
| 56:58      | Woven also has built-in analytics so you can easily calculate where you spend your time.                 |
| 57:03      | So you can make time for what matters most.                                                              |
| 57:05      | You really need to check this out.                                                                       |
| 57:07      | Take control of your calendar to improve your workflows.                                                 |
| 57:10      | And as a listener of the automators, you can try Woven for you for 21 days.                              |
| 57:15      | Go to Woven.com or click on the link in the show notes.                                                  |
| 57:19      | Again, that's Woven, W-O-V-E-N.com to check it out.                                                      |
| 57:23      | Our thanks to Woven for their support of the automators and all of Relay FM.                             |
| 57:29      | So David, we have a new year coming up, at least according to many calendars.                            |
| 57:34      | What are you going to do?                                                                                |
| 57:35      | How are you going to automate that?                                                                      |
| 57:36      | Yeah, I thought it would be fun to talk in relation to holidays.                                         |
| 57:39      | I think the new year always brings this sense of renewal and I know that it's very popular               |
| 57:44      | for the nerds to say, we don't do anything for New Year's and New Year's resolutions                     |
| 57:49      | are a bad idea.                                                                                          |
| 57:51      | I do think that that's generally true, especially if you decide you're going to change your              |
| 57:55      | whole life.                                                                                              |
| 57:56      | I'm going to lose 20 pounds, start meditating and change my job and everything and hang that             |
| 58:00      | on a New Year's resolution.                                                                              |
| 58:02      | But what you can do to make a difference in your life is habits.                                         |
| 58:06      | And I think small habits can make a huge difference.                                                     |
| 58:09      | And I'm thinking about that for myself and I've never been very good at tracking habits,                 |
| 58:15      | change digitally.                                                                                        |
| 58:16      | I use an analog system for that, but I wanted to look into digital tools for it.                         |
| 58:21      | So I began this quest about a month ago of downloading and trying a bunch of habit apps                  |
| 58:27      | and I decided I don't like any of them.                                                                  |
| 58:29      | Some of them are just ugly and a lot of them don't really have the features I want.                      |
| 58:35      | So I wanted to figure out a way to track habits and ultimately I decided that I was just going           |
| 58:42      | to do an OmniFocus and that sounds a little silly, I think, but it's perfect for that.                   |
| 58:48      | I created a custom perspective for habits and the habits are tied to each area of my                     |
| 58:53      | life.                                                                                                    |
| 58:54      | So like I have habits that I'm trying to work on as a father versus habits I'm trying                    |
| 58:58      | to work on as MacSparky.                                                                                |
| 59:00      | And for a lot of the areas of your life, habits are really the measure of how you improve.               |
| 59:07      | As a dad, I don't have a lot of specific projects.                                                       |
| 59:11      | My kids are old enough that I'm not working on the paper mache project with my kids.                     |
| 59:17      | But there are certain habits that I could have as a dad that could really impact my                      |
| 59:22      | role with my kids and my ability to be a dad.                                                            |
| 59:25      | So I've built these habits into OmniFocus.                                                               |
| 59:28      | So what I've done is I've created them as repeating tasks.                                               |
| 59:32      | They all fall under a specific perspective that looks for habits based on role.                          |
| 59:39      | And it's very easy to automate this process of just having a custom perspective, you open                |
| 59:44      | it up, you see it, I've got morning habits and night habits.                                             |
| 59:47      | That was one of my complaints with a lot of these habit apps.                                            |
| 59:50      | There are habits that you want to work on that, you know, parts of them only happen                      |
| 59:55      | at certain times of the day.                                                                             |
| 59:56      | Like brush my teeth and floss at night.                                                                  |
| 59:59      | There's one in the morning, but there's also one at night.                                               |
| 01:00:01   | But I don't want to be looking at that all day in my habit app.                                          |
| 01:00:04   | With OmniFocus, I'm able to, through the clever use of perspectives, just see the ones that              |
| 01:00:09   | are one or appropriate to me.                                                                            |
| 01:00:10   | And then you can also set start times to them.                                                           |
| 01:00:13   | And it's been working out really good for me.                                                            |
| 01:00:15   | The other thing that habit apps do that OmniFocus isn't really made to do as a habit app is              |
| 01:00:22   | give you reminders of when to do things.                                                                 |
| 01:00:25   | I mean, you can tie reminders as specific tasks in OmniFocus, but I didn't want to get                   |
| 01:00:29   | that granular.                                                                                           |
| 01:00:31   | So I just, in shortcuts, made a reminder in the morning, at late morning and early evening               |
| 01:00:37   | to check in on my habit perspectives in OmniFocus.                                                       |
| 01:00:40   | And I've been doing that for about a month and now I don't need the, I'm going to turn                   |
| 01:00:43   | those off because now I just do it.                                                                      |
| 01:00:45   | It's kind of become a habit, you know, a habit to check my habits.                                       |
| 01:00:49   | So I can turn that off.                                                                                  |
| 01:00:50   | I felt like that was kind of an automation method to solve that problem that I wouldn't                  |
| 01:00:56   | otherwise use.                                                                                           |
| 01:00:57   | Yeah.                                                                                                    |
| 01:00:58   | Are you using the repeats based, are you doing, you know, things with defer dates rather than            |
| 01:01:02   | due dates or?                                                                                            |
| 01:01:03   | Yeah.                                                                                                    |
| 01:01:04   | Yeah.                                                                                                    |
| 01:01:05   | No due dates.                                                                                            |
| 01:01:06   | No due dates.                                                                                            |
| 01:01:07   | All defer based on start date.                                                                           |
| 01:01:08   | And some of them are like, they're not all everyday habits, you know, and with OmniFocus                 |
| 01:01:13   | it's very flexible.                                                                                      |
| 01:01:14   | Like there's a member of my family that I felt like the only time I was talking to that person           |
| 01:01:19   | was when we had to do some kind of business, you know, we had to arrange a meeting or a                  |
| 01:01:23   | birthday gift or something.                                                                              |
| 01:01:25   | And I was losing touch with that person as a person.                                                     |
| 01:01:27   | So now I have a three week repeat on calling him and just kind of calling him with no agenda,            |
| 01:01:35   | you know, and things like that.                                                                          |
| 01:01:36   | So you can set them as flexible as you want in OmniFocus and, you know, if you don't use                 |
| 01:01:41   | OmniFocus, you know, choose your poison here or get a habit app.                                         |
| 01:01:45   | But I used kind of an automated solution to this and now I need one less app and I'm                     |
| 01:01:51   | pretty happy with it.                                                                                    |
| 01:01:53   | I kind of like the idea of, because you have that Shortcuts alert and OmniFocus relatively                |
| 01:01:59   | recently got some really great Shortcuts support where you can pull stuff out.                           |
| 01:02:03   | So I kind of like the idea of checking whether or not there's anything that's, you know,                 |
| 01:02:07   | available with your, your Habit tag and then only telling you to go check it if there is,                |
| 01:02:13   | you know, something that's available.                                                                    |
| 01:02:14   | So then if you're doing well, you don't get a reminder, but if you're, you're not doing                  |
| 01:02:17   | so well and you've got reminder, you know, you've got habits that need completing, then                  |
| 01:02:21   | it'll pop up and say, Hey, you know, you've got 15 habits that you're supposed to be                     |
| 01:02:24   | checking off for however many, you know, get in there and, you know, opening it up.                      |
| 01:02:29   | Hopefully not 15 brand new ones all at once.                                                             |
| 01:02:31   | That sounds like a bit of a recipe for a bit of a mess.                                                  |
| 01:02:35   | So the way I do that is I, in the, what used to be called the today, if you screen the                   |
| 01:02:40   | screen to the immediate left of your home screen.                                                        |
| 01:02:43   | I have a large OmniFocus widget there, but it's multiple instances of the OmniFocus widget.              |
| 01:02:50   | If I scroll through them, one is MacSparky, one is legal and one is habits.                             |
| 01:02:55   | And I just can swipe through those and see whatever is on, you know, available to me                     |
| 01:03:00   | right now.                                                                                               |
| 01:03:01   | Yes.                                                                                                     |
| 01:03:02   | And that's been working out really good.                                                                 |
| 01:03:03   | OmniFocus did a nice job.                                                                                |
| 01:03:05   | They did a lot of customisation with their widget.                                                       |
| 01:03:07   | So you can actually set the font size, which is so you can make it as small as you want                  |
| 01:03:12   | if you've got a lot of stuff on there, hopefully not too much in your task manager, but it's             |
| 01:03:16   | there for you.                                                                                           |
| 01:03:17   | Yeah.                                                                                                    |
| 01:03:18   | Yeah.                                                                                                    |
| 01:03:19   | That's great.                                                                                            |
| 01:03:20   | Speaking of habits, one of the things I have been struggling with a bit is getting up in                 |
| 01:03:23   | the mornings.                                                                                            |
| 01:03:24   | It, you know, it's that time of year where at least in Northern Hemisphere our clocks                    |
| 01:03:28   | have gone back and, sorry, yeah, there are clocks have gone backwards and, you know,                     |
| 01:03:34   | things are a bit darker all around.                                                                      |
| 01:03:36   | It seems like I'm spending a lot of my life in the dark, which is not so great.                          |
| 01:03:41   | But one of the ways I've been solving this, I've got a couple of different ways.                         |
| 01:03:44   | I've mentioned my smart blinds in a recent, in a recent episode and opening those automatically          |
| 01:03:50   | is great, but they do have a motor in them and they kind of go, hmm, when they open,                     |
| 01:03:55   | it's not super loud, but it could be enough to wake some people up.                                      |
| 01:03:59   | But what most smart lights can of course do is turn on and thanks to the wonder of shortcuts,            |
| 01:04:06   | personal automations.                                                                                    |
| 01:04:07   | So if you look at the sleep, then there is a waking up trigger and this can run entirely                 |
| 01:04:13   | automatically just like the time-based ones, but I like the sleep one because occasionally               |
| 01:04:17   | I adjust my, my wake up time.                                                                            |
| 01:04:19   | And if I adjust my wake up time, then this will also get adjusted.                                       |
| 01:04:23   | And I have it turn on a lamp quite dim in a very yellow colour.                                           |
| 01:04:31   | Just so these are unfortunately right next to my bed.                                                    |
| 01:04:35   | If they're a bit further away from your bed, even, so turning on a light on a very dim                   |
| 01:04:39   | setting in a home kit is still very bright when everything else is dark.                                 |
| 01:04:44   | So you'll, you might find that you can do a more gradual wake up if your lights are                      |
| 01:04:48   | further away from the bed.                                                                               |
| 01:04:49   | In my case, I just turned them on quite dimly.                                                           |
| 01:04:52   | And then when I stop my alarm, I have the blinds automatically open and it run a good morning            |
| 01:04:58   | scene for me, which, you know, also does a couple of other things because, you know,                     |
| 01:05:04   | it's good to turn on the lights because just opening the blinds right now does not necessarily           |
| 01:05:07   | guarantee light as I discovered this morning when I woke up early and thought, I'll just                 |
| 01:05:12   | open the blinds and then realise that made absolutely no difference to the light levels                  |
| 01:05:17   | in my bedroom.                                                                                           |
| 01:05:18   | I checked on, I checked, because the Phillips Hue motion sensor has a light levels.                      |
| 01:05:23   | And so I checked it.                                                                                     |
| 01:05:24   | I, I closed the blinds again and checked afterwards and the light level remained exactly the same        |
| 01:05:28   | with the blinds closed as it did with the blinds.                                                        |
| 01:05:31   | What time does the sun actually come up around your, around your house?                                  |
| 01:05:35   | That is a good question.                                                                                 |
| 01:05:36   | I'm not a hundred percent sure right now.                                                                |
| 01:05:38   | If I will note, it's been very foggy here recently, which has, of course, made it much                   |
| 01:05:44   | more difficult to see the sun just because it's that much more diffused.                                 |
| 01:05:49   | It says daylight is from eight AM to four PM.                                                            |
| 01:05:52   | Yeah.                                                                                                    |
| 01:05:53   | That is rough.                                                                                           |
| 01:05:54   | You're, so you're farther north than me.                                                                 |
| 01:05:55   | I mean, the time I spent in your area was also in January and it was cold and dark.                      |
| 01:06:01   | And honestly, I don't know how you get out of bed.                                                       |
| 01:06:04   | I mean, if someone put me in your area with like an electric blanket, I would not be out                 |
| 01:06:09   | of bed until like nine.                                                                                  |
| 01:06:10   | I just don't see how it would be possible.                                                               |
| 01:06:12   | Oh, my electric blanket ultimately turns off when I get into bed, just because otherwise                 |
| 01:06:17   | I end up roasting myself.                                                                                |
| 01:06:18   | Yeah.                                                                                                    |
| 01:06:19   | But the, so the, because we get sun at like 630 and I just wake up through that without                  |
| 01:06:26   | opening the blinds, just the sun on the blinds doesn't have to wake me up.                               |
| 01:06:29   | But I get it, well, it sounds like you've got a good system for it.                                      |
| 01:06:34   | I just use the watch tapping.                                                                            |
| 01:06:36   | That's a big deal for me because I have another person in bed.                                           |
| 01:06:38   | Oh, I have, I have that as well, but you know, especially if you're both getting, yeah, yeah.            |
| 01:06:43   | So because I'm using the sleep feature in the health app, you know, that, that's, that's                 |
| 01:06:49   | how I'm getting the waking up with the lights turning on.                                                |
| 01:06:52   | And then when I turn the alarm off, then it opens the blinds.                                            |
| 01:06:55   | Now I can do this because I live on my own, but you could probably also do this if either                |
| 01:06:59   | your partner sleeps like they're dead, because some people can sleep through pretty much                 |
| 01:07:03   | anything until it's time for them to get up.                                                             |
| 01:07:06   | Or if you're the person who's getting up later, or you both get up at the same time,                     |
| 01:07:09   | give or take, you know, so have a chat with other people in your house about that.                       |
| 01:07:12   | But I find it's quite useful.                                                                            |
| 01:07:14   | Speaking of smart blinds, David, I sent my parents up with smart blinds this, this weekend.              |
| 01:07:17   | It was great.                                                                                            |
| 01:07:18   | They're really, they're really excited.                                                                  |
| 01:07:20   | I kept it super simple though, the blinds automatically close at 930 at night.                           |
| 01:07:25   | If nobody's open, they automatically open at 8am, because my mom is quite a light sleeper.               |
| 01:07:31   | And if she does manage to sleep late one day, I do not want to be on the receiving end of                |
| 01:07:34   | a slightly grumpy phone call because the blinds opening were corrupt.                                    |
| 01:07:39   | And so, and so if, if people are home, they don't open automatically.                                    |
| 01:07:43   | But then when my parents put up the blind in the bedroom, they're, these are IKEA blinds.                |
| 01:07:46   | So there's a button in every room, then it puts up the blinds in the other two rooms                     |
| 01:07:50   | for them as well.                                                                                        |
| 01:07:51   | So that they only need to open one blind.                                                                |
| 01:07:53   | And they're really happy and my mom was super excited because they're Apple TV for some                  |
| 01:07:57   | reason hadn't been functioning as a home cat hub.                                                        |
| 01:07:59   | And now it does because I actually installed the updates pro tip folks, if, if something's               |
| 01:08:04   | not working and you're using an Apple TV as a home hub, install the updates.                             |
| 01:08:07   | It makes a difference.                                                                                   |
| 01:08:08   | But yeah.                                                                                                |
| 01:08:09   | And so, you know, she, she, she went out and disconnected from the Wi-Fi network while                   |
| 01:08:14   | she was at the grocery store and then messaged me to say, I think the blinds are closing.                |
| 01:08:18   | Are the blinds closing?                                                                                  |
| 01:08:19   | Cause she tested it and it worked.                                                                       |
| 01:08:21   | Yeah.                                                                                                    |
| 01:08:22   | Yeah.                                                                                                    |
| 01:08:23   | So I'm really, I'm really happy that they're very excited by this.                                       |
| 01:08:26   | Well, I mean, 2020 had its downsides, but the upside was that was the year that IKEA democratised        |
| 01:08:31   | automatic blinds, you know, they came out with something that is home kit compatible and                 |
| 01:08:37   | not ridiculously expensive.                                                                              |
| 01:08:39   | So I still haven't bought any though.                                                                    |
| 01:08:41   | Yeah.                                                                                                    |
| 01:08:42   | I tried to get some, some motors.                                                                        |
| 01:08:43   | I have vertical blinds in my lounge where I've got French doors or, or window doors                      |
| 01:08:47   | is the French cold, I'm funnily enough.                                                                  |
| 01:08:49   | And so I've got, I've got, yeah, yeah, they do.                                                          |
| 01:08:53   | So I've got a cord and a chain and the cord opens the blinds and the chain rotates the                   |
| 01:09:00   | blinds.                                                                                                  |
| 01:09:01   | And so I thought, you know, I will try buying some motors for these and just saying, first               |
| 01:09:06   | of all, the motors are huge.                                                                             |
| 01:09:07   | Secondly, they're really loud.                                                                           |
| 01:09:08   | Thirdly, they don't work very well.                                                                      |
| 01:09:10   | So guess what I'm returning to Amazon because I was just very disappointed.                              |
| 01:09:15   | So if I want smart blinds in my living room, I'm going to have to come up with something                 |
| 01:09:17   | else.                                                                                                    |
| 01:09:18   | And I should probably try some fee or, or whatever the, the, the brand is, um, that, that makes          |
| 01:09:24   | those, um, the, the good ones, cause these were just Tuya ones that I found on Amazon.                   |
| 01:09:30   | They were on sale.                                                                                       |
| 01:09:31   | So I decided to, to jump in and give it a go for, for the sake of the show.                              |
| 01:09:35   | And, uh, I was horrendously disappointed.                                                                |
| 01:09:37   | I am very sad to say.                                                                                    |
| 01:09:38   | Yeah.                                                                                                    |
| 01:09:39   | The only way those would work, they'd have to be heavy because they're using the friction                |
| 01:09:42   | to move the rope, right?                                                                                 |
| 01:09:43   | They're manually pulling the rope.                                                                       |
| 01:09:45   | Yeah.                                                                                                    |
| 01:09:46   | And they're also just humongous.                                                                         |
| 01:09:48   | It feels like they've got massive batteries inside them, but you have to plug them in for                |
| 01:09:52   | them to work.                                                                                            |
| 01:09:53   | Yeah.                                                                                                    |
| 01:09:54   | So yeah.                                                                                                 |
| 01:09:55   | Yeah.                                                                                                    |
| 01:09:56   | It was not great.                                                                                        |
| 01:09:57   | Um, another one, another automation I would recommend as you hit the new year is something               |
| 01:10:03   | I've been prattling on a lot about at Mac power users lately is this idea of contextual computing.       |
| 01:10:09   | Um, I did a video on it for the [[Keyboard Maestro]] field guide and it's just the, the                  |
| 01:10:16   | idea, and this was something I really adopted wholeheartedly in the past year is this idea               |
| 01:10:21   | of removing intermediate steps in my computing.                                                          |
| 01:10:26   | And there's a lot of reasons why this is now possible, uh, one of which is, you know, the                |
| 01:10:31   | abundance of URL linking and deep linking that involve that that's in all apps anymore,                  |
| 01:10:36   | um, where you can like jump to a [[DEVONthink]] document and then over to a draft, a draft                |
| 01:10:42   | draft, and you can have all that stuff connected and talking to each other with these URL links.         |
| 01:10:49   | And, uh, so you create shortcuts or [[Keyboard Maestro]] scripts or however you want to do,                  |
| 01:10:54   | I'm using conflict palettes is my main kind of way of doing this.                                        |
| 01:10:58   | But now when I work on my computer, I can go straight from idea to task.                                 |
| 01:11:04   | I mean, just as an idea, as an example today, we're prepping for today's show.                           |
| 01:11:10   | I just hit, um, control option command M, which is max Sparky land.                                      |
| 01:11:16   | And then I tap F, which is, I'm sorry, a, I was thinking about focused.                                  |
| 01:11:20   | I tap a for automators and that gives me a list of all my automators asked and I tap                     |
| 01:11:25   | G and it takes me to the Google doc for the show.                                                        |
| 01:11:28   | And so it's in a G and I'm into the show outline.                                                        |
| 01:11:32   | Yeah.                                                                                                    |
| 01:11:33   | No, at no point do I get stuck in opening the browser and saying, Oh, there's something                  |
| 01:11:37   | shiny.                                                                                                   |
| 01:11:38   | Oh, look, there's something on cell at Amazon.                                                           |
| 01:11:40   | That Rose told me about that.                                                                            |
| 01:11:41   | Now I need to buy.                                                                                       |
| 01:11:42   | I just go straight from the idea to doing the work.                                                      |
| 01:11:45   | And I'm doing this on the iOS and Mac very successfully.                                                 |
| 01:11:50   | And I'm just really happy with this workflow that it's kind of evolving for me, but almost               |
| 01:11:55   | all the work I do anymore, there are no intermediate steps.                                              |
| 01:12:00   | And maybe we should do a whole show on this or I don't know, at some point we had to go                  |
| 01:12:04   | into it deeper because there's a lot of different ways to pull this off.                                 |
| 01:12:07   | But the trick is having some sort of automation mechanism and using links.                               |
| 01:12:13   | And if you start applying this in your life, it will make a difference.                                  |
| 01:12:17   | And that's something I would recommend you try heading into the new year.                                |
| 01:12:20   | Yes.                                                                                                     |
| 01:12:21   | Yeah.                                                                                                    |
| 01:12:22   | I've been experimenting a lot with [[Stream Deck]] myself to really, you know, make full                     |
| 01:12:25   | use of it.                                                                                               |
| 01:12:26   | So I have an automators button.                                                                          |
| 01:12:27   | I have a nested folders button, got a screencast online button, even got a button David from             |
| 01:12:31   | my mastermind group, which just opens the zoom call and also opens our doc where we keep                 |
| 01:12:36   | track of our goals and everything.                                                                       |
| 01:12:39   | It's just really nice to have that.                                                                      |
| 01:12:41   | And I also have T.J.                                                                                     |
| 01:12:42   | Luoma's Fantastical, which is currently smiling at me because we are getting to wrapping         |
| 01:12:49   | up or in the not too distant future.                                                                     |
| 01:12:52   | But yes, my next automation or our final automation is more about optimism and, you know, 2021           |
| 01:13:01   | being a new year.                                                                                        |
| 01:13:03   | And one of my, my, my personal goals, of course, is to save as much energy as possible.                  |
| 01:13:08   | Now, obviously I have, you know, my Mac mini running all the time.                                       |
| 01:13:11   | I have a Plex server, things like that.                                                                  |
| 01:13:13   | So I am in many ways not being the most energy efficient that I can be, but I am doing my                |
| 01:13:18   | best to keep track of my energy usage and also turn things off when I can, which means                   |
| 01:13:23   | all of my heaters are plugged into smart outlets.                                                        |
| 01:13:26   | So if I'm sitting in my office, guess what?                                                              |
| 01:13:27   | I'm not heating the rest of the house until half an hour before lunch, at which point                    |
| 01:13:31   | I will heat the living room, which is adjacent to the kitchen, but I'll only do that if                  |
| 01:13:35   | the windows aren't open.                                                                                 |
| 01:13:37   | And so I have been going through creating a whole bunch of shortcuts to log the usage                    |
| 01:13:41   | of different devices.                                                                                    |
| 01:13:43   | So for example, my washing machine, I log how often I use it and things like that and                    |
| 01:13:47   | how much energy it's used.                                                                               |
| 01:13:49   | Same with the tumble dryer and things like that and, you know, the dehumidifier and so                   |
| 01:13:53   | on.                                                                                                      |
| 01:13:54   | I'm not logging, you know, when I turn on each individual light bulb, but it's amazing                   |
| 01:13:58   | what you can automate and log automatically thanks to [[HomeKit]].                                           |
| 01:14:03   | So when I turn the TV on, I automatically, you know, log that.                                           |
| 01:14:07   | And then I send a push cut notification to my phone to say, Hey, you know, do you want                   |
| 01:14:12   | to start logging entertainment time because I'm trying to log the time that I spend relaxing             |
| 01:14:17   | as well as the time that I spend working because I just want it to be a habit.                           |
| 01:14:19   | So I have a good balance in my life and I can see that I have a good balance in my life                  |
| 01:14:23   | of what I'm doing.                                                                                       |
| 01:14:25   | But one of the shortcuts I have been creating, because lock down is starting to lift here                 |
| 01:14:30   | in the UK.                                                                                               |
| 01:14:31   | I'm fortunate to be in an area that is relatively well off compared to some other areas.                 |
| 01:14:37   | So I have been able to go places, you know, to, you know, more than just the supermarket.                |
| 01:14:42   | Very exciting.                                                                                           |
| 01:14:43   | I know.                                                                                                  |
| 01:14:44   | And so I have been experimenting with a shortcut that if I am getting driving directions home,           |
| 01:14:50   | it'll calculate how long it is until I get home.                                                         |
| 01:14:53   | And if it's not, if it's going to be less than 15 minutes, then it will turn back on                     |
| 01:14:57   | my living room heater and my hallway heater just so that the house isn't freezing.                       |
| 01:15:01   | If it's after 9pm, it will turn on my electric blanket.                                                  |
| 01:15:06   | And if I am going to be traveling for more than 15 minutes, then it calculates back to                   |
| 01:15:10   | 15 minutes before I'm supposed to arrive and schedules on my push cut automation server,                 |
| 01:15:14   | which is sitting at home, that it should run the, the, the, the automation then at that                  |
| 01:15:19   | time when, you know, I'm going to be about 15 minutes away from home to automatically                    |
| 01:15:23   | start warming things up.                                                                                 |
| 01:15:24   | So it's not super cold, but I do have the advantage of everything being off while I'm                    |
| 01:15:28   | gone.                                                                                                    |
| 01:15:29   | And I'm finding that that seems to be working quite well.                                                |
| 01:15:31   | Now granted, I'm the furthest away I've been so far is 20 minutes.                                       |
| 01:15:35   | So it's only had a five minute delay.                                                                    |
| 01:15:37   | And I'm not sure I could tell the difference when I get home, if the heating's been on                   |
| 01:15:40   | for 15 minutes or 20 minutes, but the house is certainly not icy cold.                                   |
| 01:15:45   | And I'm, I'm quite pleased with it.                                                                      |
| 01:15:47   | And I'm, I'm feeling like I'm saving energy.                                                             |
| 01:15:49   | My energy bill is certainly not as high as I was expecting it to be this month, which                    |
| 01:15:53   | is a great start.                                                                                        |
| 01:15:54   | Yeah.                                                                                                    |
| 01:15:55   | I had my M1 Mac on my lap last night and it was, it's cold here right now.                               |
| 01:16:00   | I mean, relatively it's cold for something California.                                                   |
| 01:16:03   | And I'm used to my laptop, like being a heat source, you know, on my legs.                               |
| 01:16:08   | And I was cold because my laptop wasn't eating me.                                                       |
| 01:16:11   | I was, I was really bummed.                                                                              |
| 01:16:12   | You know, I was like, Oh, here's a downside of the M1 Mac.                                               |
| 01:16:14   | It no longer space heater.                                                                               |
| 01:16:16   | Yep.                                                                                                     |
| 01:16:17   | Yeah.                                                                                                    |
| 01:16:18   | And it's, it's amazing that, you know, that's what we've got used to, but suddenly we're                 |
| 01:16:22   | going to have to get used to miss.                                                                       |
| 01:16:25   | So we'll see.                                                                                            |
| 01:16:26   | All right.                                                                                               |
| 01:16:27   | So 12 days of automation, hopefully there was some stuff in there that can help you.                     |
| 01:16:31   | I have been using the new M1 Mac for automation and I've got a bunch of thoughts and experiments         |
| 01:16:36   | to report in.                                                                                            |
| 01:16:37   | We're going to talk about that right after this.                                                         |
| 01:16:41   | This episode of Automators is brought to you by Setup.                                                   |
| 01:16:44   | There's an app for everything these days.                                                                |
| 01:16:45   | Some are excellent and others not so much.                                                               |
| 01:16:48   | A great way to discover new quality apps and get all the tools you need to be successful                 |
| 01:16:52   | and productive is by using Setup, a subscription for Mac apps.                                           |
| 01:16:57   | Setup packs over 200 apps into one.                                                                      |
| 01:16:59   | There's an app for almost any task.                                                                      |
| 01:17:00   | So you can stay on your flow and finish what you started.                                                |
| 01:17:04   | And now you can take your projects to your iPhones and iPads with support for iOS companion              |
| 01:17:08   | apps for your Mac favourites like Ulysses, To Do and Tasky.                                               |
| 01:17:13   | Setup has a dedicated curation team that only selects the highest quality apps, which means              |
| 01:17:17   | you don't have to spend time searching for great tools and it's such great value.                        |
| 01:17:21   | Instead of paying thousands of dollars for separate app licenses, you just pay one flat                  |
| 01:17:24   | monthly fee.                                                                                             |
| 01:17:26   | New apps are added regularly and updates are free and all of the apps are their full featured            |
| 01:17:30   | pro versions.                                                                                            |
| 01:17:31   | Head over to setup.com to try Setup free for a week and if you like it, pay just $9.99                   |
| 01:17:37   | a month for as long as it's useful to you and it will be.                                                |
| 01:17:40   | Once again, go to setup.com to see how it fits with your workflow.                                       |
| 01:17:43   | Now thanks to Setup for their support of the show and all of Relay FM.                                  |
| 01:17:47   | All right.                                                                                               |
| 01:17:49   | So Apple has now made a new Mac based on Apple Silicon as opposed to Intel chips.                        |
| 01:17:55   | And Rose is the smart one.                                                                               |
| 01:17:57   | She didn't buy one.                                                                                      |
| 01:17:58   | She's waiting for next year's version.                                                                   |
| 01:18:00   | I mean, David, you're my guinea pig.                                                                     |
| 01:18:03   | You're trying the stuff and you're going to report back to me and tell me that I can't                   |
| 01:18:07   | use it as a heat source on my lap.                                                                       |
| 01:18:09   | That's a deal breaker, David.                                                                            |
| 01:18:10   | That's a deal breaker right there.                                                                       |
| 01:18:11   | Yeah, I know.                                                                                            |
| 01:18:12   | I solved the problem for you, huh?                                                                       |
| 01:18:15   | Well, I was looking at the Mac mini, but I mean, my Mac mini is probably about 18 months                 |
| 01:18:20   | old.                                                                                                     |
| 01:18:21   | It was a high-end machine when I got it, I, you know, made sure to trick it out to the                   |
| 01:18:25   | best of my ability, except for the RAM, which I cheaped out on.                                          |
| 01:18:27   | And then I, you know, twisted Steven Hackett's arm and taking it apart at Mac stock and putting,         |
| 01:18:32   | you know, considerably more RAM in there.                                                                |
| 01:18:34   | So I have 32 gigabytes of RAM in there because that's the only user serviceable part of the              |
| 01:18:37   | Intel machine.                                                                                           |
| 01:18:38   | And unfortunately with the M1 Macs, you can't even do that with them and they're limited                 |
| 01:18:42   | to 16 gigs of RAM.                                                                                       |
| 01:18:44   | And my machine is working really well.                                                                   |
| 01:18:46   | I definitely want that shiny new silicon machine.                                                        |
| 01:18:49   | If it ran shortcuts, I would, there wouldn't have been a moment's hesitation.                            |
| 01:18:55   | I would have been, you know, on the Apple store website buying, buying, buying, no doubt                 |
| 01:18:59   | at all.                                                                                                  |
| 01:19:00   | But as it is, I do have working Macs and I'm pretty happy with what I've got right now.                  |
| 01:19:07   | So I'm going to wait and see if there's an M1X or an M2 sometime next year.                              |
| 01:19:12   | And hopefully some of the people who bought M1s will, you know, maybe not be quite so                    |
| 01:19:16   | gung-ho about it, or they'll be willing to upgrade again and I could get a great deal.                   |
| 01:19:20   | Yeah.                                                                                                    |
| 01:19:21   | Well, it is, I mean, this is the entry level and it's crazy.                                             |
| 01:19:25   | And every time I talk about it on a podcast, I sound like an Apple fanboy, but I mean,                   |
| 01:19:30   | it's just so rare to see a computer improve so drastically, so quickly, and it is, it's                  |
| 01:19:36   | remarkable.                                                                                              |
| 01:19:37   | But we've had a lot of questions from automators listeners about, you know, what does that               |
| 01:19:41   | mean for Mac automation, and how does it affect your Mac automation?                                     |
| 01:19:45   | And I thought it'd be interesting to talk about, you know, my experiences.                               |
| 01:19:50   | For the, a lot of the automation type work I do, which is largely, I mean, the deepest                   |
| 01:19:56   | I go down the stack really is AppleScript and some Java scripting.                                      |
| 01:20:01   | It's fine.                                                                                               |
| 01:20:02   | I mean, [[Keyboard Maestro]] works.                                                                          |
| 01:20:03   | I have not had any of my [[Keyboard Maestro]] scripts that, you know, used to work on Intel                  |
| 01:20:07   | Mac, not work on this M1 Mac.                                                                            |
| 01:20:09   | I haven't tried all of them.                                                                             |
| 01:20:11   | I've got hundreds of them, but they've all worked fine.                                                  |
| 01:20:15   | And same thing, TextExpander, which is another kind of gateway drug automation tool, works               |
| 01:20:21   | fine.                                                                                                    |
| 01:20:22   | [[Hazel]] came out with a new version that works on the M1.                                                  |
| 01:20:26   | I think the new version is mainly for Big Sur, more than it's the M1, but they turned                    |
| 01:20:31   | it into an application as opposed to a system preference tool.                                           |
| 01:20:35   | But it, it's, it works fine.                                                                             |
| 01:20:37   | I mean, it rocks solid.                                                                                  |
| 01:20:39   | All of my typical automation tools work fine.                                                            |
| 01:20:42   | My automator scripts work.                                                                               |
| 01:20:44   | All the AppleScripts I've written still work.                                                           |
| 01:20:47   | I understand if I were to go deeper down the stack into some of the terminal tools, some                 |
| 01:20:52   | of those don't work yet, but like, I believe, what is it, Homebridge, is Homebridge not working          |
| 01:20:58   | on M1 yet?                                                                                               |
| 01:20:59   | I have you.                                                                                              |
| 01:21:00   | Homebridge is what you're thinking of there, David.                                                      |
| 01:21:03   | Yeah.                                                                                                    |
| 01:21:04   | Yeah.                                                                                                    |
| 01:21:05   | And so it kind of works, but it's, it's also, you know, one of those things where there's                |
| 01:21:11   | Homebrew is not one thing.                                                                               |
| 01:21:13   | It is one thing, but it's essentially access to a whole bunch of different things, a lot                 |
| 01:21:17   | of which are developer tools, which, you know, are somewhat difficult to port in some cases.             |
| 01:21:23   | Other things are very easy to port.                                                                      |
| 01:21:25   | I know Bitbar is one of the services that, you know, was, was not going to make the transition           |
| 01:21:30   | and then somebody's come out with [[SwiftBar]], which is, you know, the new version of Bitbar                |
| 01:21:35   | basically, which I'm super happy about because having found out about Bitbar relatively recently,        |
| 01:21:40   | it turns out I love it and I need it in my life.                                                         |
| 01:21:42   | So I was disappointed here.                                                                              |
| 01:21:43   | It wasn't going to work.                                                                                 |
| 01:21:44   | And then [[SwiftBar]] is out, which solves that problem.                                                     |
| 01:21:49   | And some of this is, you know, thanks to changes that Apple have made with Big Sur.                      |
| 01:21:53   | So for example, [[Hazel]] needed a new version because it can't be a preference pane anymore.                |
| 01:21:57   | It needs to be a standalone application.                                                                 |
| 01:22:01   | And there's a whole bunch of different things in there.                                                  |
| 01:22:02   | I know some of the apps that I use for development are not necessarily working super well on             |
| 01:22:08   | silicon.                                                                                                 |
| 01:22:09   | They're, they're being ported and there's something a little bit janky.                                  |
| 01:22:13   | I've heard that there's a colleague at work who's got a machine and he said, you know,                   |
| 01:22:17   | what do you need me to test?                                                                             |
| 01:22:18   | And so I sent him a very long list of apps and he wrote back to me with, I don't know                    |
| 01:22:22   | how to code.                                                                                             |
| 01:22:23   | So can I still test these applications and said, well, if it starts, then that's a good                  |
| 01:22:27   | thing.                                                                                                   |
| 01:22:28   | And apparently some of them didn't start.                                                                |
| 01:22:29   | So I need to check back and make sure whether or not he actually installed these things                  |
| 01:22:32   | correctly or if he's doing the thing where he thinks that there's an executable file                     |
| 01:22:36   | because he's a Windows user.                                                                             |
| 01:22:37   | Yeah.                                                                                                    |
| 01:22:38   | So.                                                                                                      |
| 01:22:39   | Well, and I think that that's, I mean, development tools I think are definitely not all there            |
| 01:22:43   | yet.                                                                                                     |
| 01:22:44   | But automation.                                                                                          |
| 01:22:45   | Except for [[Xcode]], which I've heard is running, it's compiling things considerably faster                 |
| 01:22:50   | than a 10 core iMac Pro.                                                                                 |
| 01:22:52   | Yeah.                                                                                                    |
| 01:22:53   | Well, that doesn't surprise me.                                                                          |
| 01:22:54   | On the Mac Pro Pro and that, that is amazing.                                                            |
| 01:22:57   | That is absolutely stunning.                                                                             |
| 01:22:58   | I am so impressed with that and very jealous of those developers that have got those machines            |
| 01:23:03   | because, you know, it would be nice to have that.                                                        |
| 01:23:05   | But at the same time, I'm doing all right with what I've got.                                            |
| 01:23:07   | And so I'm going to hold off for a little bit and wait and see.                                          |
| 01:23:10   | We had an Apple executive Mac Power users and one of the things he talked about is like,                 |
| 01:23:13   | they have the ability to walk down the hall to the hardware team and say like, there's                   |
| 01:23:18   | this thing we do with our app that would could really use hardware acceleration.                         |
| 01:23:24   | And they can write it onto the chip because guess what?                                                  |
| 01:23:26   | They're making the chip, you know, so it's, there's a whole bunch of stuff going on behind               |
| 01:23:30   | the scenes where like things like Final Cut and [[Xcode]] and Logic are going to just run                    |
| 01:23:37   | way faster even than the improvements you get from the basic M1 chip because they're                     |
| 01:23:43   | going to have on-dye subroutines built in for their software.                                            |
| 01:23:48   | But so that stuff is awesome.                                                                            |
| 01:23:50   | But in general, I think you're probably fine with automation with the new hardware if you're             |
| 01:23:56   | doing the kind of stuff I'm doing.                                                                       |
| 01:23:57   | Like I have not had any of my automation break, but I'm not writing really advanced terminal             |
| 01:24:02   | tools and I'm not using developer tools like Rose.                                                       |
| 01:24:04   | So there's a line to be drawn.                                                                           |
| 01:24:07   | I think if you go deeper down that stack, you're going to run into problems.                             |
| 01:24:11   | But a lot of the stuff we talk about in this show all works.                                             |
| 01:24:14   | The other thing you said, shortcuts on the Mac.                                                          |
| 01:24:17   | Now that we have the believer in iOS apps, you know, I've never been a super big proponent               |
| 01:24:22   | of shortcuts, but now I want it to badly on my Mac.                                                      |
| 01:24:26   | Yeah.                                                                                                    |
| 01:24:27   | It just seems obvious now.                                                                               |
| 01:24:29   | It does.                                                                                                 |
| 01:24:30   | I mean, I think the difficulty that we're going to run into here is, you know, whether,                  |
| 01:24:33   | you know, developers have different Mac and iOS versions of their apps in most cases,                    |
| 01:24:38   | you know, a lot of the apps that we've been using in love for years.                                     |
| 01:24:41   | For example, OmniFocus, they have two separate Mac and iOS apps.                                         |
| 01:24:46   | And of course, you know, there's probably share code between them to an extent and things                |
| 01:24:50   | like that because they're not going to reinvent the wheel when they've already got the code.             |
| 01:24:54   | But those shortcuts hooks which are in the iOS apps are not necessarily going to be right                |
| 01:24:59   | there on the Mac apps.                                                                                   |
| 01:25:00   | So then if the shortcuts does come to the Mac, does that mean that all developers are                    |
| 01:25:05   | going to say, well, you can run the iOS version of our app on the Mac, but it's going to be              |
| 01:25:09   | an iOS version of the app.                                                                               |
| 01:25:11   | And if you really want full functionality, you should run the Mac app, but you're going                  |
| 01:25:14   | to need the iOS app as well for the shortcut support, or do they have to, in a couple of                 |
| 01:25:17   | months, program in all shortcut support on the Mac as well?                                              |
| 01:25:21   | We're going to have to wait and see if that happens.                                                     |
| 01:25:24   | I'm very much hoping that the shortcuts team is working on a version of shortcuts for Mac                |
| 01:25:28   | OS though, because if there's one thing that will make me buy a silicon Mac before I'm                   |
| 01:25:32   | ready to, it's shortcuts.                                                                                |
| 01:25:33   | Yeah.                                                                                                    |
| 01:25:34   | Let's be honest, David, that's just going to happen.                                                     |
| 01:25:36   | And even the native app support on the M1 is nothing to get excited about.                               |
| 01:25:43   | That is not a reason to buy one of these, because most of the apps don't work.                           |
| 01:25:46   | They've been turned off.                                                                                 |
| 01:25:48   | And like the one I find myself using the most is [[Dark Noise]], you know, Charlie's app, because            |
| 01:25:54   | there isn't really a good Mac app that does what Charlie's app does, and he fortunately                  |
| 01:25:59   | allows us to use it on the Mac, but Timery, which is another app I use all the time to                   |
| 01:26:04   | set toggle timers, man, I wanted that so bad on the Mac, and it's not here.                              |
| 01:26:08   | I have to reach out to the developer, maybe he's working on a Mac app, or there's some                   |
| 01:26:12   | reason why it won't work on the Mac, but there isn't a good solution on the Mac.                         |
| 01:26:17   | I know you've worked on some automation solutions so have I.                                             |
| 01:26:21   | I'm also bugging the, if you go into the GitHub for the [[Stream Deck]] toggle support, I've been            |
| 01:26:30   | active in there bugging the developer.                                                                   |
| 01:26:32   | I know they're testing a method now, where you can add tags to a [[Stream Deck]] toggle.                     |
| 01:26:37   | Oh, good.                                                                                                |
| 01:26:38   | Yeah.                                                                                                    |
| 01:26:39   | Yeah.                                                                                                    |
| 01:26:40   | I had something running with terminal commands doing post or getting post REST calls to the              |
| 01:26:46   | toggle API, but it was kind of, it wasn't kind of tricky to set up.                                      |
| 01:26:50   | It was tricky to set up because you would then have to create basically a macro for each,                |
| 01:26:54   | you know, favourite that you wanted because you need to use the IDs of the tags and stuff                 |
| 01:26:59   | like that, and it's much more user friendly to have a proper web GUI for that.                           |
| 01:27:04   | So I've got a version out there that's floating around, but it's not super stable what I was             |
| 01:27:09   | doing, and I honestly wasn't very happy with it.                                                         |
| 01:27:11   | I was excited by the possibilities that it offers, but it doesn't work super well for                    |
| 01:27:16   | me.                                                                                                      |
| 01:27:17   | And if it doesn't work super well for me, the person who created this, then I can't really               |
| 01:27:21   | in good faith give it to other people.                                                                   |
| 01:27:23   | It's never really going to be reliable, and you know, so hopefully the toggle thing comes                |
| 01:27:26   | together, but, and fortunately for me, I keep an iPad in front of me when I'm in front of                |
| 01:27:32   | my, my iMac.                                                                                             |
| 01:27:33   | So most of the stuff I just do on the iPad, but it would be nice to see more adoption                    |
| 01:27:39   | for iPhone and iPad apps over on the M1 Mac, but kind of getting back to the point of this               |
| 01:27:45   | segment, all of the, the garden variety automation tools, I have had no problems at all.                 |
| 01:27:52   | And I, I even wrote like the [[Keyboard Maestro]] developer to ask if he's seen any issues and               |
| 01:27:57   | he said he hasn't, and he was right on top of it for the Apple Silicon.                                  |
| 01:28:01   | So you know, [[Keyboard Maestro]] is the one that I do the most kind of complex work with and                |
| 01:28:06   | that one works.                                                                                          |
| 01:28:07   | So I think you're probably going to be fine.                                                             |
| 01:28:09   | Yeah.                                                                                                    |
| 01:28:10   | Yeah.                                                                                                    |
| 01:28:11   | It's one of those things.                                                                                |
| 01:28:12   | If you've got very specific, you know, more obscure apps that you need to do, to do your                 |
| 01:28:17   | day job or whatever it is that you do on the Mac, then of course you're going to have to                 |
| 01:28:20   | check those out.                                                                                         |
| 01:28:21   | I think for most people, you know, for people who are doing, you know, I would say less                  |
| 01:28:27   | non-Apple development work than they'll probably be fine, but it of course depends, you know,            |
| 01:28:32   | you have to take that with a pinch of salt and do your own research, but I'm very excited                |
| 01:28:36   | to see what comes out of this.                                                                           |
| 01:28:38   | Me too.                                                                                                  |
| 01:28:39   | All right.                                                                                               |
| 01:28:40   | I think that about does it for today's show.                                                             |
| 01:28:42   | We want to thank our sponsors ExpressVPN, Red Sweater, Woven and Setup.                                  |
| 01:28:48   | You can learn more about the Automators over at Automators.fm, the website for the show.                 |
| 01:28:54   | You can also find the show at relay.fm slash Automators.                                                 |
| 01:28:58   | You can find the forums, the amazing Automators forums at talk.automators.fm.                            |
| 01:29:02   | Rose, isn't it great when you search for a problem and you find the answer in the Automators             |
| 01:29:07   | forum?                                                                                                   |
| 01:29:08   | Yeah.                                                                                                    |
| 01:29:09   | I love that.                                                                                             |
| 01:29:10   | It's amazing.                                                                                            |
| 01:29:11   | I am so happy when that happens.                                                                         |
| 01:29:12   | It's just great.                                                                                         |
| 01:29:14   | We will see you in a couple of weeks and until then, keep automating.                                    |
| 01:29:18   | Have fun.                                                                                                |
| 01:29:19   | Bye, everyone.                                                                                           |
