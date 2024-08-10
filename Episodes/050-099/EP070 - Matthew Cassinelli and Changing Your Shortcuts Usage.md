---
status: "incomplete"
fc-date:
  year: 2021
  month: 02
  day: 26
fc-category: "podcast"
podcast: "Automators"
published: 2021-02-26
duration: 5764
formattedduration: "01:36:04"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Matthew Cassinelli"]
notetype: "episode"
showpage: "http://relay.fm/automators/70"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators070.mp3"
episode: 70
title: "70: Matthew Cassinelli and Changing Your Shortcuts Usage"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary are joined by Matthew Cassinelli to talk about how his Shortcuts use has evolved with the changes to Shortcuts.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Matthew Cassinelli]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 070 Discussion](https://talk.automators.fm/t/70-matthew-cassinelli-and-changing-your-shortcuts-usage/10666)

# Sponsors
- [[Intrazone (Sponsor)|The Intrazone by Microsoft SharePoint]] - a bi-weekly conversation and interview podcast by the SharePoint team.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.

# Show Notes
- [Matthew Cassinelli - Siri Shortcuts, apps, and technology tips](https://www.matthewcassinelli.com/)
- [Smart Tech Today | Smart Lights, Smart Speakers, IoT Tech Podcast | TWiT](https://twit.tv/shows/smart-tech-today)
- [Custom iOS 14 widgets have become a TikTok flex - The Verge](https://www.theverge.com/2020/9/23/21452647/ios-14-widgets-tiktok-widgetsmith-home-screen-design-selling-packets-etsy)
- [Homebridge](https://homebridge.io/)
- [Dummy switches for Homebridge](https://github.com/nfarina/homebridge-dummy)
- [Keyboard Maestro 9.2: Work Faster with Macros for macOS](http://www.stairways.com/action/kmdiscount?REF9WZE)
- [A Comprehensive Guide to All 120+ Settings URLs Supported by iOS and iPadOS 13.1 - MacStories](https://www.macstories.net/ios/a-comprehensive-guide-to-all-120-settings-urls-supported-by-ios-and-ipados-13-1/)
- [Twitter Shortcuts - Matthew Cassinelli](https://www.matthewcassinelli.com/?s=twitter) - These are the individual components.
- [Notion](https://www.notion.so)
	- [Notion API - Private beta](https://www.notion.so/api-beta)
- [Deep Links](https://medium.com/@nickmilo22/in-what-ways-can-we-form-useful-relationships-between-notes-9b9ec46973c6) - In what ways can we form useful relationships between notes? | by Nick Milo 
- [Hook - Find without searching](https://hookproductivity.com/)
- [Airtable](https://airtable.com/invite/r/XxNzmsB9)
- [Matthew Cassinelli - YouTube](https://www.youtube.com/c/MatthewCassinelli/videos)
- [Matthew Cassinelli - Twitch](https://www.twitch.tv/matthewcassinelli)
- [Shortcuts Catalog - Matthew Cassinelli](https://www.matthewcassinelli.com/sirishortcuts/)
- [WidgetPack](https://widgetpack.app/)
- [Membership - Matthew Cassinelli](https://www.matthewcassinelli.com/membership/)
- [Announcing the Shortcuts User Group - Matthew Cassinelli](https://www.matthewcassinelli.com/shortcuts-user-group-announcement/) - Slack chat for Shortcuts.
- [My routine checklist shortcut on Rene Ritchie's channel - Matthew Cassinelli](https://www.matthewcassinelli.com/rene-ritchie-iphone-productivity-guest/)
- [Clubhouse: Drop-in audio chat](https://www.joinclubhouse.com/)

# Transcription
  
| Time Index | Transcription                                                                                                                    |
| :--------- | :------------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to The Automators. I'm David Sparks and joined by my co-host, Rosemary Orchard.                                          |
| 00:07      | How are you today, Rosemary?                                                                                                     |
| 00:09      | I am excited, David. We have a returning guest on the show, and who better to talk to you                                        |
| 00:15      | about Shortcuts than Matthew Cassinelli.                                                                                          |
| 00:16      | Yeah. Welcome back, Matt.                                                                                                        |
| 00:18      | Hello. Thank you for having me. It's always a pleasure to be here.                                                               |
| 00:21      | I've never asked you, do you prefer Matt or Matthew?                                                                             |
| 00:26      | I do prefer Matthew. I feel like it's a good way to distinguish from all the mats out there.                                     |
| 00:31      | Okay. Well, I have been doing that wrong, but the very proper English lady always gets it right,                                 |
| 00:37      | so I'm going to just follow her lead.                                                                                            |
| 00:39      | You're David Sparks. I could never admonish you for that.                                                                        |
| 00:43      | Yeah. People call me Sparky. Sometimes they call me names that are not so nice, but I try to avoid that.                         |
| 00:51      | Well, I think Matthew, some of the confusion comes from the fact that Twitter does not allow long enough                         |
| 00:55      | handle feed to have your full name, so I'm guessing you had a choice between Matthew Cassinelli or Matt Cassinelli.              |
| 01:01      | Yes. That is forever makers. Even if a platform does allow it, then it's confusing because it's not the same as every other one. |
| 01:10      | Somebody should automate something and fix that.                                                                                 |
| 01:13      | It's really going to be hard for me because I just called you Matt again, but Matthew is one of the                              |
| 01:19      | shortcuts of wizards of the internet. Maybe the shortcuts wizard, dare I say. Matthew worked with                                |
| 01:27      | the workflow team back before they were acquired by Apple, and then you joined Apple when workflows                              |
| 01:33      | were acquired. You were the one who sherpaed so many of us into getting better at automation                                     |
| 01:41      | with all of the tools that those guys were building. You have since left Apple and you've got your own                           |
| 01:47      | website at MatthewCassinelli.com. We'll put a link to the website, but there's two L's gang. Don't forget that.                  |
| 01:54      | And you do a bunch of stuff there for shortcuts, but you also do videos. You're                                                  |
| 01:59      | on smart tech today with Micah, and you just got a bunch of stuff going on and you're helping people                             |
| 02:05      | automate, and I really just want to take every chance I can to point my spotlight at you because                                 |
| 02:10      | I just love the stuff you do, Matthew. Well, I appreciate that. It's fun to share, and especially                                |
| 02:16      | now that shortcuts has been getting better and better. I feel like somewhat low key, but also                                    |
| 02:22      | for people who are in the space, there's been huge changes, which have made a huge difference.                                   |
| 02:28      | So I'm excited to talk about it because I've even recently changed my strategy.                                                  |
| 02:34      | Yeah, because I do think that there was this debate, are they going to make it better for the                                    |
| 02:40      | power users or better for the normal users? I think with iOS 14, you could make the argument.                                    |
| 02:46      | They really scratched both issues. And I think, I mean, you could also say the                                                   |
| 02:52      | users forced it and made it better for themselves in a way that Apple probably didn't even expect,                               |
| 02:57      | which was awesome to see with the whole TikTok home screen customisation trend that blew up                                      |
| 03:04      | last September. Yeah, that is something that got... I'm sure the guys on the shortcut                                            |
| 03:10      | seemed super happy when that happened, right? Because all of a sudden, Apple had a good reason                                   |
| 03:15      | to give them more resources. I mean, I would hope so. I have no idea internally or anything like                                 |
| 03:22      | that, but it definitely... I mean, when iOS 14 came out, I think... I don't know about you,                                      |
| 03:29      | but we had all been, at least in the power user realm or whatever, been doing home screen                                        |
| 03:37      | customisation a little bit. And because [[Federico Viticci\|Federico]] had his whole pack out before, and I had attempted                              |
| 03:42      | to put all of my shortcuts on the home screen then, but it still did the thing where it jumped                                   |
| 03:47      | back into shortcuts first. And when iOS 14 came out, they didn't actually fix that. And so,                                      |
| 03:53      | I had assumed you were supposed to use widgets now instead, and it was just not a thing. But then                                |
| 04:01      | somebody made their home screen aesthetic AF, and that TikTok went viral, and everybody was like,                                |
| 04:08      | oh, cool, I can customise... It became a theming for app icons mostly, at least to those people,                                 |
| 04:15      | just to use the open app action. But that made shortcuts spike just in terms of millions of                                      |
| 04:23      | people now and learned about this app, because most people didn't even know about it before.                                     |
| 04:28      | So, I think that was a great just awareness thing that's like, this is here. I still think                                       |
| 04:33      | probably most people aren't running fancy shortcuts every day or anything like that,                                             |
| 04:38      | but it at least made Apple make the add to home screen thing work entirely without opening the                                   |
| 04:44      | app. So, that was great. I think it was like 14.2 or something. I think it was 14.3. I mean,                                     |
| 04:51      | the first round of the beta, it was only the Apple apps, and then they said, no, no, no, wait,                                   |
| 04:55      | let's just do everything. But you do have that pop up at the top every time that says shortcuts is                               |
| 05:01      | or whatever it says. I've kind of tuned out now.                                                                                 |
| 05:04      | Just a little checkmark. Yeah. Yeah, I have it open [[Safari]] to a new [[DuckDuckGo]] page every time,                                 |
| 05:10      | actually, so that I don't end up going down rabbit holes, which is a neat little trick that I thought                            |
| 05:15      | of a while ago, and it makes my life a lot easier. But I'm curious, Matthew, what does your                                      |
| 05:19      | home screen look like now in terms of number of shortcuts versus number of widgets, which kick                                   |
| 05:24      | off automations or populated by automations? So on iOS 14, I mean, I don't remember how many                                     |
| 05:31      | were before, but at least once you were able to hide home screens, I learned that there are,                                     |
| 05:36      | is it 13 or 14 screens? I think 14 might be the number. I've used 13 of them,                                                    |
| 05:45      | because, and we can get to this later, David's whole contextual computing thing, because I was                                   |
| 05:50      | like, yes, this is exactly what I've been doing. But I didn't put them on the last screen, because                               |
| 05:56      | if you then fill up that screen, it'll explode the rest of them, and something will go wrong,                                    |
| 06:01      | like just saving that space so that if anything needed to overflow, it wouldn't just ruin the                                    |
| 06:06      | whole order. Yeah, yeah, I've noticed that occasionally you'll move a widget or something,                                       |
| 06:12      | and then it's just everything's on all of the pages, and it takes a couple of minutes to                                         |
| 06:16      | put everything back if you only have a few home screens. So yeah, that was for sure brutal,                                      |
| 06:21      | when I was, because I've been going through, I've been trying since iOS 14 to get the perfect                                    |
| 06:27      | home screen, and it's taken me way too long because of the shortcuts thing. So like,                                             |
| 06:31      | once we got the add to home screen functionality, I put all of my shortcuts on the home screen,                                  |
| 06:37      | and I'm not joking when I was saying like over 1000 of them. So that just literally took me,                                     |
| 06:42      | I think, like a week to do. But then pretty much after that, I was completely overwhelmed,                                       |
| 06:49      | and it was way too much. They were all in folders and everything. I have a whole widget                                          |
| 06:56      | system too, where I mean, a lot of it becomes down to using apps like notes, or Timery, or things                                |
| 07:04      | set to specific lists for those different contexts on each different page. And even                                              |
| 07:10      | how I use shortcuts on a whole, I have a colour coding system by context that I had to develop                                    |
| 07:16      | before we got folders, because I was also completely overwhelmed having 1000 in a giant list. So                                 |
| 07:23      | basically now, I went through a whole just like paying attention to what I was doing and realised                                |
| 07:30      | that that wasn't working for me. And so I even just in the last few weeks, blew up my whole                                      |
| 07:35      | shortcuts library and turned those 1000 shortcuts into much smaller, or I wouldn't say smaller                                   |
| 07:42      | shortcuts, much fewer shortcuts, using menus that did the same functionality as pretty much                                      |
| 07:47      | each of those folders was doing. And then now those are all on my home screen as just a single                                   |
| 07:52      | shortcut. And it's fantastic. And even one other step that I just went through, I think a few days                               |
| 07:59      | ago was on my phone versus I have an 11 inch iPad and a 12.9 inch, the dock and the homes,                                       |
| 08:07      | the actual phone home screen, then became contextual just to which ones I would use on                                           |
| 08:12      | that device most. And I think I said to my girlfriend, I was like, I figured it out,                                             |
| 08:18      | like it clicked and it worked. And I was like, Oh my gosh, especially because                                                    |
| 08:23      | my shortcuts had been so much smaller, they fit in there. And then by device, I really did have                                  |
| 08:28      | the ones that I wanted to use the most. And it just like kind of lined up and I was like, well,                                  |
| 08:32      | that was awesome. So that's my whole, I've gone through a whole journey the last like six months                                 |
| 08:40      | into widgets and then out into shortcuts. And it does feel like it's actually like I was                                         |
| 08:48      | struggling with it for so long that I was like, Oh, now it works. And it's just kind of easy.                                    |
| 08:52      | And I was like, this, I was so used to it being a problem that I'm like relieved or like it's                                    |
| 08:57      | confusing because it's not a problem anymore. So I'm pretty stoked. So you're using like choose                                  |
| 09:02      | from menu based menus to get to your shortcuts. Are you running them as a widget or you're running                               |
| 09:08      | them as individualised shortcuts on your home screen? I'm actually mostly using just the                                         |
| 09:13      | shortcuts on the home screen because the widgets do force you into four or eight. I think I might                                |
| 09:20      | add in the four widget shortcuts a little bit more even because at a certain point I am trying to                                |
| 09:28      | make the home screens just look nice and having not every category that I've created, like I think                               |
| 09:35      | because apps like Ulysses don't have a home screen widget, I don't have one for my blogging category.                            |
| 09:41      | And so putting my shortcuts there might work, but there is sort of a uniformity of like having                                   |
| 09:46      | all on the home screen as opposed to in the widgets. I did go before the home screen thing,                                      |
| 09:51      | I was doing a lot of shortcuts stacks with 10 shortcuts in one single stack. And then using                                      |
| 09:58      | that as a way to contxtualisethings. But I think I just had there, maybe we can address this                                   |
| 10:05      | throughout the show of there was just bugs. If the single shortcut widget wasn't working for,                                    |
| 10:10      | I think, two months or something like that, I probably didn't even think about it until last                                     |
| 10:15      | week because I just was, I didn't trust it anymore. And so there are some even home screen bugs. If                              |
| 10:21      | you just as an awareness thing, if you use run shortcut and then run other shortcuts within                                      |
| 10:29      | that menu underneath and you don't choose one, it will just freeze the home screen and no home                                   |
| 10:34      | screen icons will work anymore. And you have to restart your phone. And when your home screen                                    |
| 10:39      | shortcuts, yeah, yeah, I have encountered that. So every single menu I create now has a cancel button                            |
| 10:45      | with an exit shortcut option, because then I tap that and then it exits the shortcut and,                                        |
| 10:50      | you know, that that's that's sort of my saving grace. But you mentioned earlier,                                                 |
| 10:55      | you mentioned earlier organising your shortcuts. So you've got folders, you've got colour coding.                                 |
| 10:59      | I know at some point you were doing something with icons. How are you organising your shortcuts                                  |
| 11:03      | right now? I mean, the icons were the only way I had any sort of concept for the 1500 shortcuts                                  |
| 11:10      | before because it was still, I still had like, I do videos. And so I put them all into red just                                  |
| 11:17      | because that's the colour of YouTube. And I, it took me a while and it was, this is probably one of                               |
| 11:23      | those things where I spent way too much time on this because I work by myself and I like have the                                |
| 11:28      | time to do it. And so most people are like, Oh, like, I really got down to like, which colours were                               |
| 11:34      | for, and also like, which colours were for which category. And it was all entirely based off of                                   |
| 11:40      | what colours are available in shortcuts. Or now I need to break out a little bit of, I only think                                 |
| 11:46      | of the world through these shortcuts, which is not great. But now with less shortcuts, the menu,                                 |
| 11:54      | the icons are less relevant because there's just fewer of them. It's, it's before I got really                                   |
| 12:00      | detailed into, I mean, when I worked at workflow, I actually reorganised those icons because I didn't                            |
| 12:05      | like the order and I, it was like a whole P list that I just switched the order. So it's made some                               |
| 12:12      | logical sense. And so I have like a very intimate knowledge of every single icon in shortcuts.                                   |
| 12:16      | But I also had every single step that is now within those menus was named for Siri. And I think                                  |
| 12:25      | that's where I got a little hung up was just making Siri shortcuts. Like I really wanted                                         |
| 12:31      | to have these available to trigger via Siri. And ultimately, I don't need that many, or I just                                   |
| 12:38      | can't remember 1500 phrases to say to like, obviously, that's just insane. So I think that's                                     |
| 12:44      | why I've now stepped back from that a little bit to have those triggers just for a context.                                      |
| 12:51      | And then I'm slowly pulling, as I noticed that I want to use one of those actions with Siri,                                     |
| 12:57      | I'm pulling it out and making sort of sub routines. Now that we're a few years in,                                               |
| 13:03      | how many do you guys actually trigger with your voice, Matthew? Yeah, not as many, I think because,                              |
| 13:11      | but only because of this situation. So that's sort of what I'm like, excited about for the next                                  |
| 13:18      | couple of months is to try this more with my new system and to really understand, I can tell so                                  |
| 13:24      | far I'm using many more of my shortcuts because they're, they're really just about that context.                                 |
| 13:32      | And the individual function, I think I've given too much weight to as like, this is valuable on                                  |
| 13:39      | its own. But once it's in a menu and easy to access, it's been really useful. Like we could,                                     |
| 13:45      | well, I have some examples that we can talk about soon, but just as individual trigger phrases,                                  |
| 13:51      | I was never really going to say that to Siri that much. But now that I'm using it, I can tell,                                   |
| 13:55      | Oh, I would use Siri for this situation more if it wasn't in this menu, especially. So                                           |
| 14:01      | it's, it, I think it's still, I think one thing is I've just haven't been using as many of mine                                  |
| 14:09      | as I've been able to build because I haven't been using the system. And so now getting more into                                 |
| 14:15      | that, I think it'll be more clear going forward, which ones will be more useful for Siri.                                        |
| 14:21      | When iOS 14 came out, I decided I was going to make all my shortcuts fit into a medium size widget.                              |
| 14:27      | And so that's just four of them here. I'm going to show you guys, we have a zoom open and I'll                                   |
| 14:34      | put a thing in this show notes, but this, this lower widget here. And so I've got one is personal,                               |
| 14:43      | one is legal, one is MacSparky and the other one is called directories. And that is like                                        |
| 14:48      | the mother of all like lists into lists, you know what I mean? So you can make it fit in for,                                    |
| 14:54      | you just may have to drill a little bit deeper, you know, but I mean,                                                            |
| 15:00      | did you consider just open shortcuts as your fourth one, David, because then there's a search button.                            |
| 15:05      | Yeah, you know, that would make sense. I actually like searching it through directories,                                         |
| 15:09      | because those directories are all logical. When I press that, like, there's the communications                                   |
| 15:15      | ones, there's the photos ones, there's the health ones, you know, it's all the stuff that I don't                                |
| 15:19      | use as often, but it's all organised by directory. So I find that I like Matthew, I use them more                                |
| 15:27      | in that way, because I'm sort of, I'm looking contextually and I'm looking, well, I'm going to                                   |
| 15:30      | do something I'm about to start a workout. And I get that health directory and I see the one that                                |
| 15:35      | starts the timer and puts the podcast on and does all the stuff. And I just find that the way my                                 |
| 15:42      | brain works, that works better. And I'm starting shortcuts on that home screen many times every                                  |
| 15:49      | day. And I think I use shortcuts more than I've ever used them because it's always on the home                                   |
| 15:54      | screen. So adding that extra layer or two sometimes of having to drill was a downside,                                           |
| 16:02      | but the benefit is because it's in front of my face all day, I find I use shortcuts more than                                    |
| 16:06      | ever. But like Matthew, I almost never use my voice anymore to trigger shortcuts.                                                |
| 16:11      | Loretta I use my voice a lot to trigger home kit things. So for example, it's been cold recently,                                |
| 16:17      | so I've been turning on the electric blanket before I go to bed and things like that. And I                                      |
| 16:21      | absolutely love being able to talk to the magical Apple lady and the speakers to get that to happen.                             |
| 16:28      | But I would say the vast majority of shortcuts that I run are through automations through                                        |
| 16:33      | things like a little NFC chip. I've got some sort of dime sized ones here. Dime is in the US                                     |
| 16:39      | coin rather than chocolates. If they had NFC tags and chocolates, I would have bought them,                                      |
| 16:45      | and I would also be NFC compatible now.                                                                                          |
| 16:47      | Matthew I would like that. I could just hold my phone to my tummy and turn the lights on.                                        |
| 16:51      | Loretta Yeah, exactly. Only have to point it at the right place depending on how long ago you                                    |
| 16:57      | ate it. But I've got stickers, I've got key rings, I've got all sorts of things. And you know what,                              |
| 17:03      | it makes a huge difference having those automations. I've also recently been experimenting with having                           |
| 17:08      | PushCut and Acme to go to bed. And it sounds like something you would use due for, but the idea                                  |
| 17:14      | is PushCut checks whether or not the bedtime scene has been, or not seen, sorry, bedtime,                                        |
| 17:18      | I've got a fake toggle through Homebridge. It checks whether or not it's on. And if it's not                                     |
| 17:23      | on, it'll check with me. And then auto queue it up, auto queue up another shortcut to run                                        |
| 17:28      | in 15 minutes. And then when I tap on that notification that PushCut has sent me, then                                           |
| 17:32      | it runs a scene for me so that when I'm actually ready to go to bed, I just tap the button on my                                 |
| 17:36      | phone and it runs a scene and I'm done. And it figures out automatically, yeah, I need to turn                                   |
| 17:40      | on the electric blanket and other stuff as well if it's not already on and things like that, which                               |
| 17:44      | is great. But it's amazing how much I run through automations rather than my voice.                                              |
| 17:51      | Yeah, it makes sense. I mean, especially like there are seven other ways to run shortcuts                                        |
| 17:57      | besides Siri. And so ultimately, you should use voice when it makes sense, but you don't need to                                 |
| 18:03      | to sit down and hold up your phone to like do something at your desk. Or there is just a lot                                     |
| 18:09      | of, I think a lot of work style stuff that I do on the iPad. My HomePod will catch it. So like,                                 |
| 18:16      | I don't use Siri on the iPad, I think is a big part because they really need to add like command                                 |
| 18:21      | space or whatever and hold it to trigger Siri just so that because otherwise I would use it more.                                |
| 18:26      | But I think the iPad I almost never use with Siri. And then my HomePod will catch it or                                         |
| 18:32      | something like that. Or if I have AirPods, and I think that's more, more of those use cases                                      |
| 18:37      | where I end up using it. But yeah, it still is. I think it's something too that it's still a new                                 |
| 18:44      | space. Like when people like us don't get together and talk about it and try stuff and explore and                               |
| 18:51      | really figure out what makes the most sense. I think it just kind of in daily life. I mean,                                      |
| 18:57      | I don't know, maybe this last year, it hasn't been the best time to do like a whole creative                                     |
| 19:01      | voice experiments. And maybe, and maybe there's some reason people might be feeling burnt out. So                                |
| 19:07      | like some of that stuff is not as, I mean, we're all like around people at home too. So even more,                               |
| 19:13      | you don't have that solo experience to try shortcuts or Siri experiences. So I think it's                                        |
| 19:19      | still something to explore. But I think that's the great part about shortcuts is that you don't                                  |
| 19:23      | have to use your voice, you can. And especially with home screens, like we were saying, that's the                               |
| 19:28      | most accessible thing for me. And even just coming back to, I think the reason I haven't gone into                               |
| 19:36      | more like I was doing some menus on the home screen that ran folders of shortcuts that                                           |
| 19:42      | then I picked from the shortcuts, but it did become too many menus for me. And I think I like the                                |
| 19:47      | spatial spread of the home screens, especially the big deal is being able to swipe on those dots                                 |
| 19:54      | on the iPhone is you can just get across to those different screens or I hide the ones that I'm not                              |
| 20:02      | using. So like ultimately, my phone home screen itself is just stuff that I want to do on the                                    |
| 20:07      | phone. And then those extra home screens, I can show contextually, I wish we had to show home screen                             |
| 20:14      | shortcut to be able to trigger those by like time of day or a calendar event. And they could like                                |
| 20:20      | pop up and hide and like that, that's where the world started to get into some wild stuff.                                       |
| 20:25      | Yeah, shortcuts team, if you're listening, pretty, pretty, pretty, pretty, pretty,                                               |
| 20:28      | pretty, please. I'll send you all those big bags of dime from IKEA. Everybody loves this.                                        |
| 20:33      | Yeah, it took me a long time to figure out the hiding of the home screen. So for anybody that                                    |
| 20:37      | doesn't know, if you enter jiggle mode, as I helpfully term it, and so if you edit your home                                     |
| 20:42      | screen and then you tap on the three dots at the bottom, that's how you can show and hide pages.                                 |
| 20:47      | So actually, pretty much all of mine are hidden. I only have two pages shown right now.                                          |
| 20:52      | And most of them are hidden. I have things like a travel page and stuff like that as well, because                               |
| 20:57      | guess what? I'm not really going places right now. That's not really a thing.                                                    |
| 21:01      | And so I just have a travel page where I've got things grouped into country folders, and then                                    |
| 21:05      | sometimes even cities within that, just because then I can drag all those out and stick them on                                  |
| 21:11      | another page for that city or country. And then when I come back, then I can shove it back in a                                  |
| 21:18      | folder, stick it back on the travel home screen, and I'm good. Nice. Yeah, if someone, Matthew,                                  |
| 21:24      | gosh, I'm going to get it there. If someone listening wants to start doing menu systems,                                         |
| 21:30      | since you've just done a bunch of them, give us some tips. What's a good way to get started with                                 |
| 21:35      | that? What are mistakes to be avoided? At least coming from where I was, I already had the actions                               |
| 21:42      | all built and laid out. And so I was kind of just taking what was an entire folder and turning                                   |
| 21:49      | that into one shortcut with a menu that had the same actions, but just as options in that menu.                                  |
| 21:56      | And then I sat there and copied and pasted over all of the new stuff, which was                                                  |
| 21:59      | very nice to have copied and pasted. Even though I do, it does kind of kill me that it doesn't                                   |
| 22:06      | maintain variables if you have multiple actions that you bring across.                                                           |
| 22:09      | And you can't easily copy and paste multiple actions at a time either, which is why I have                                       |
| 22:14      | a folder of shortcuts called run a shortcut, I think it's called. And then I just, these are                                     |
| 22:20      | just ones where it's, I didn't want to move everything over. It was too much work. So I've                                       |
| 22:24      | just got front shortcut. I just did that a thousand times. So that's one of those things where I can                             |
| 22:32      | measure that it actually took me a week to do. And if they made that more connected, it probably                                 |
| 22:38      | could have saved me about 20 hours. So like in the past, when they added the ability to pick up                                  |
| 22:44      | multiple shortcuts at the same time to put them into a folder, that saved me 20 hours of work                                    |
| 22:49      | as well because I was doing them single file before. And I was, I'm a madman, but you're in                                      |
| 22:56      | edge games, but at the same time, that's where we learned the limits, you know, and I got to                                     |
| 23:00      | communicate them more like this so that they can fix them. I mean, one secret thing that I don't                                 |
| 23:07      | know if people knew about that they added this year is the ability to use get link to file                                       |
| 23:12      | and get my shortcuts. I would probably use like choose from list to just limit the number, but                                   |
| 23:19      | you can programmatically share your shortcuts. And that's the entire way that I made my whole                                    |
| 23:24      | shortcuts catalogue, because I wouldn't have been able to do it manually. It would have taken me                                   |
| 23:28      | like two weeks to do by just clicking share, clicking copy, I cloud link one by one. It actually                                 |
| 23:34      | like saved me that much time too. So I bet. I wish that the shortcuts team would just spend a                                    |
| 23:41      | couple of weeks using keyboard Maestro because I feel like that [[Keyboard Maestro]] is like the                                     |
| 23:47      | the shining example of how to copy automation steps and paste groups. And like it has a bunch                                    |
| 23:54      | of features in there that shortcuts just isn't there yet. And I understand with a touch interface                                |
| 24:00      | it's harder, but I would love to see that if you've got a magic keyboard connected, though,                                      |
| 24:05      | there should be a secret unlock where it says, Hey, would you would you like to unlock Super                                     |
| 24:09      | Nerd mode or something? And then you can control. Yeah, Command A, Command C, Command V done.                                    |
| 24:17      | Yeah. Every time they add those features, I'm, I'm at least happy, but I am like, oh man,                                        |
| 24:25      | if I had this before. That's, that's the problem. We are so nerdy here that we're going darn it.                                 |
| 24:30      | When I copy my actions from one shortcut to another, it doesn't maintain variables and                                           |
| 24:34      | people are still going, wait, you can copy an action from one shortcut to another. Why would                                     |
| 24:38      | I do this? I mean, there's something, so I do this a lot. If people are curious as to why                                        |
| 24:44      | copy and paste is useful, air table shortcuts, I have tons of air table shortcuts and the                                        |
| 24:49      | authorisation section is always the same. So you have a URL, get contents of URL, and then in the                                |
| 24:55      | header, there's an authorisation and then there's bearer space, whatever your API key is. Being                                  |
| 25:00      | able to copy and paste that means it's the same every time. So that's really useful for me.                                      |
| 25:04      | Anything with an API key, the copy and paste pays for itself with that alone. But, you know, I think                             |
| 25:10      | it's the, the people at the sharp end of the stick that are, are hitting these barriers are, I think                             |
| 25:16      | the reason that they're making progress and, and again, they're walking that line between trying                                 |
| 25:21      | to make it easy for people who just want to make their icons look cool and the people who actually                               |
| 25:26      | want to turn it into a productivity tool. I think what's also, it's just sort of how Apple would                                 |
| 25:33      | operate if they were going to be doing this. It is a feat. It's a fundamental change to the system.                              |
| 25:38      | And so it'll just take, they only do that once a year pretty much. And so I think that's,                                        |
| 25:44      | I mean, that is like low key. One of the reasons I didn't totally want to work there is the release                              |
| 25:50      | cycle of Apple is pretty slow compared to the ability to use shortcuts and share them with people                                |
| 25:56      | is so much quicker. And so that's what I've been, I love doing for people online. And I think                                    |
| 26:02      | what I'm excited about with my new system is I think, I think my major paradox of choice over                                    |
| 26:09      | the last few years with having so many shortcuts and not, I should, I really should have done the                                |
| 26:14      | menu thing three years ago because it really hasn't, that's nothing new. I just haven't chosen to do it.                         |
| 26:20      | And that is a, I regret that basically because I think now for me, like I was saying, it clicked                                 |
| 26:27      | and in a new way. And I was sort of like, that's all there is. There's not this mysterious depth                                 |
| 26:34      | to shortcuts that is impossible to master. Like there's all this API stuff that you can do,                                      |
| 26:41      | but the app itself and what is in there and what apps can integrate with it now                                                  |
| 26:47      | isn't some sort of impossible task. And it really does come down to                                                              |
| 26:51      | to like different categories of your life. The ability to like, I was creating some high level                                   |
| 26:58      | sections of just like customise and control your devices, personal productivity. I think most                                    |
| 27:04      | work stuff does end up happening through the iPad, unless you're like really on your phone,                                      |
| 27:09      | which is, I think that was like a helpful for me to just remember because not everybody has                                      |
| 27:14      | the iPad. And so they're not going to be doing like log, I don't know, like super fancy stuff                                    |
| 27:19      | just from an iPhone or I think there's less there, but there's still so much room to grow to,                                    |
| 27:27      | which I'm excited for and actually getting it into people's hands. And I think the home screen                                   |
| 27:33      | thing really makes it a daily use case is and automations too, are just regular value, which                                     |
| 27:38      | you don't even have to touch, which is even those good in advance as well. So I'm excited to see                                 |
| 27:44      | what to share some more of this too with people in a more simple way, because we were saying                                     |
| 27:49      | at the beginning, I've made YouTube videos, but I haven't done that many recently. And now I'm                                   |
| 27:53      | going to be starting to make more because I feel like I've got more clarity into how people can                                  |
| 27:59      | actually use it on a daily basis. This episode of the automators is brought to you by the Intrazone                              |
| 28:06      | by Microsoft SharePoint, your biweekly conversation and interview podcast about SharePoint,                                      |
| 28:12      | OneDrive and related tech within Microsoft 365. If you're looking for a new show to listen to,                                   |
| 28:18      | the Intrazone is a biweekly podcast with conversations and interviews on how Microsoft                                           |
| 28:23      | SharePoint, OneDrive and related tech can work for you. You'll hear from guest experts behind the                                |
| 28:29      | scenes and out in the field. So you can see how SharePoint fits into your everyday work life to                                  |
| 28:35      | easily share and manage content, knowledge and applications. Each show covers a bunch of segments                                |
| 28:42      | like news and announcements, a focused topic of the week, guest perspectives, FAQs of the week,                                  |
| 28:49      | and upcoming events. And the topics for each show are really interesting. Previous episodes cover                                |
| 28:54      | migration to the cloud, power platform, API and teamwork, and security and compliance.                                           |
| 29:02      | The most recent episode covers drag and drop from outlook to SharePoint, which really pushes my                                  |
| 29:07      | buttons because I love contextual computing. And this is a form of that. Did you know that you                                   |
| 29:12      | can drag and drop emails and attachments from outlook directly into SharePoint without leaving                                   |
| 29:17      | outlook. In this episode, the podcast covers that workflow exactly with people using it daily.                                   |
| 29:23      | I found it really interesting. So go and listen to it now. Just search for the Intrazone wherever                                |
| 29:28      | you get your podcasts. That's I-N-T-R-A-Z-O-N-E or just click the link in the show notes. Go check it                            |
| 29:35      | out. Our thanks to the Intrazone by Microsoft SharePoint for their support of the automators                                     |
| 29:40      | and all of Relay FM. Speaking of how people can use this all a daily basis, recently in the 14.5                                 |
| 29:48      | beta, so this isn't out yet as we record though knowing our luck in the couple of days between                                   |
| 29:52      | recording and release, Apple will go, and here it is because it's got emoji and everything in it.                                |
| 29:57      | There's a couple of new actions in shortcuts. Specifically, take screenshot, orientation                                         |
| 30:02      | lock and data mode. So I immediately added two shortcuts triggered by automations with the                                       |
| 30:09      | YouTube app. Opening the YouTube app and closing the YouTube app. Opening it turns off orientation                               |
| 30:14      | lock. Closing it turns on orientation lock because most of the time I use my iPhone in portrait                                  |
| 30:18      | mode exclusively and that's it. But I was wondering if you've seen anybody take screenshot and how                               |
| 30:24      | they're using it or if you're using it yourself? I will say I am not on the betas for the first time                             |
| 30:32      | in maybe five to ten years because I can't handle those bugs anymore. Specifically with                                          |
| 30:41      | shortcuts honestly, I thought some of that stuff has been to the point where it was like affecting                               |
| 30:46      | my ability to get my work done and so I was like I'm gonna wait for at least a couple of rounds                                  |
| 30:51      | of this just to make sure that I've seen some like I think set wallpaper and stuff is broken and I                               |
| 30:58      | like have an automation that does that every day so some of that I'm like I feel bad for you but                                 |
| 31:06      | I'm also like thank god I didn't do that because I don't want to deal with it. I don't I don't                                   |
| 31:10      | totally get even though take screenshot is one of those where I'm like great then I was like wait                                |
| 31:15      | so how am I going to use that and I think orientation lock totally makes sense and I think                                       |
| 31:21      | that's an interesting I went I did think about this topic that I'm curious if you agree that                                     |
| 31:27      | some I saw somebody on Twitter saying I want this as a function in settings that I can just set by                               |
| 31:33      | app and I'm curious if this is either now what Apple is just going to give people to so that they                                |
| 31:39      | can do it but not make it into a feature and or it's going to be this is how they test whether                                   |
| 31:46      | or not they should do that and if everybody loves this they might add it like or because I pretty                                |
| 31:52      | sure that the community responses to automations is what's made things like time automations                                     |
| 31:58      | actually move forward which has been great like I feel like people we want this so badly and                                     |
| 32:04      | I love when Apple like listens and gives us those features and so I hope that stuff like this                                    |
| 32:10      | I mean I don't know what do you think like it could be either I mean it seems like that's a                                      |
| 32:15      | poor way to gauge it because like you could make a shortcut now saying when I launched the Kindle                                |
| 32:22      | app lock orientation because I like to read embed on my side you know and that that is a                                         |
| 32:30      | automation you pull but we make a podcast called the automators and used to work on the automation                               |
| 32:36      | team at Apple and there's some people out there that will figure that out but there's a lot more                                 |
| 32:41      | people that read the Kindle embed at night on their side who don't have any idea the shortcuts                                   |
| 32:46      | exist or if they do they think it's a way to make cool icons in their home screen I just don't think                             |
| 32:51      | it's a good way to measure I mean it's a good way to measure among super nerds but yeah you know                                 |
| 32:56      | I'm not sure it really gives them the data they need if that's what they're doing that's fair                                    |
| 33:00      | though I do think Apple is making progress with some of these things so for example in in the                                    |
| 33:05      | health app with the with the new sleep feature the sleep tracking they've got shortcuts where it                                 |
| 33:10      | just suggests shortcuts that it will add to your home screen and then when you're in sleep mode then                             |
| 33:15      | there's a shortcuts button if you've got shortcuts which shows up now a lot of people don't know                                 |
| 33:20      | about this and I've talked about this a couple of times on iOS today because people have no idea                                 |
| 33:24      | exist but if you think if you go into the health app it's there and then there's um and there's a                                |
| 33:29      | toggle inside of editing each shortcut to add it to that screen as well but some of these are just                               |
| 33:34      | things like you know open day one to log a journal and things like that um and I think I have a                                  |
| 33:39      | shortcut to that page which is of course always very meta of it's just a deep link to that one                                   |
| 33:48      | in the show notes so people can jump straight to that section but I really like it for things like                               |
| 33:52      | playing my rain sound so that it plays and it checks my wi-fi network first and if I'm at home                                   |
| 33:57      | it plays it on my home pot mini in my bedroom and if I'm not at home it just plays on my iPhone                                  |
| 34:02      | speaker I've not got any more granular yet with different [[AirPlay]] speakers at different on different                             |
| 34:06      | wi-fi networks because I'm not going anywhere um you know we're we're still anticipating the end                                 |
| 34:12      | of the world here in the UK apparently things will change I do wish this is one of those times                                   |
| 34:19      | where I wish I could ask the team because they were so so like deep in iOS before they worked at                                 |
| 34:24      | Apple that they were the kind of people that would know it but I do wonder if even putting it into                               |
| 34:30      | shortcuts on on a low level gives iOS a route in terms of like APIs and connecting into those                                    |
| 34:39      | realms with orientation lock that then could later be added as a feature because that's part of                                  |
| 34:45      | just the technical level is there's got to be code somewhere to do this stuff and so once it's in                                |
| 34:50      | shortcuts it can extend out and especially as uh shortcuts API is getting better and better I think                              |
| 34:56      | need to Apple should set examples for app developers for years have been able to control                                         |
| 35:01      | orientation in their phones so for example if you turn your phone upside down so the camera is at                                |
| 35:05      | the bottom or the notch um or whatever then then most apps will not orientate themselves to that                                 |
| 35:11      | orientation there are very few apps that will uh and your phone will not face id unlock in that                                  |
| 35:16      | position uh unsurprisingly I can't talk you are upside down um but um you know so so app developers                                |
| 35:22      | have been able to overwrite this um to an extent at any rate um so it will be interesting to see                                 |
| 35:28      | where we go with that one of the points Matthew makes though I think that's interesting is on a                                  |
| 35:32      | more meta level you can add additional features to your phone and iPad using shortcuts for people                                |
| 35:41      | that want to have app specific orientation you know and the more they keep doing that the better                                 |
| 35:48      | it is for us those of us that are that have figured it out or want to figure it out and um and I hope                            |
| 35:55      | people are using those features because I think you know to argue against myself I think it does                                 |
| 36:01      | show Apple that people want to make stuff like this happen if you'll give us the tools yeah                                      |
| 36:07      | especially I mean I think that's why shows like this are also good ways to for us to share that                                  |
| 36:13      | with people and it's even like I don't know ultimately Apple needs to like talk more about                                       |
| 36:20      | shortcuts I think do people and show them that these kind of things are possible um I do think                                   |
| 36:26      | even specifically with the automations I still feel like they're not very approachable because                                   |
| 36:33      | of the notifications in the way that they just say like here it's running an automation for                                      |
| 36:39      | this trigger and I don't know why and I don't know what's going on like and I also just have 700                                 |
| 36:45      | notifications in my tray that are no longer relevant that don't say anything and I'm like okay like I                            |
| 36:50      | need even just being able to customise what it says to you would go a very long way and making those                             |
| 36:56      | it's like hey it's 10 a.m now it's time to check your deliveries and like do your daily I don't                                  |
| 37:02      | know finance checkup or something like that versus it just says running not running shortcut even                                |
| 37:08      | specifically running automation even yeah yeah um the the new set watch face actions for short                                   |
| 37:14      | for the Apple watch which are amazing because I don't know if you all know this that you can have                                |
| 37:19      | like 40 to 50 watch faces now um which of course I did and I have them all contextually set for                                  |
| 37:26      | every one of those home screens if any of those apps were used it would change my watch face yeah                                |
| 37:31      | first of all it just I'm pretty sure just broke my Apple watch a little bit because it was like                                  |
| 37:35      | oh god like too much data trying to be passed but all those notifications just said opened one of 16                             |
| 37:42      | apps running your automation and and like anytime I opened any app and ultimately it just became a                               |
| 37:49      | burden instead of something that I could technically do and was fun but I don't want to see the orientation                      |
| 37:55      | lock automation every single time I use YouTube either so like it's like being a little kid right                                |
| 38:00      | and it's your party and your your mom brings you your favourite chocolate cake right and                                          |
| 38:07      | it's the cake you've been waiting all year to eat on your birthday and she puts it on your plate                                 |
| 38:12      | and then she just pours carrots on top of it you know and you're like I mean if you like carrot                                  |
| 38:18      | cake and it is a carrot no it's your chocolate cake and she put she she put carrots on that and                                  |
| 38:24      | you're like but I don't want the carrot she's like well what are you complaining about your                                      |
| 38:27      | cake's there you know you cut into it and it's vanilla on the inside and you're like ah I wanted                                 |
| 38:32      | it to be chocolate yeah exactly like this sounds like the worst birthday party ever I feel like                                  |
| 38:36      | I'm not being appreciative too because I will say before folders and things like that it was just a                              |
| 38:43      | giant mess and I think they've brought forward so much of that usability into the home screen or                                 |
| 38:50      | the widgets or I think the Siri experience does need to be smoothed out because I mean I'm pretty                                |
| 38:57      | sure most people don't even know that because they got rid of the trigger phrases and the title                                  |
| 39:02      | of the shortcut is now the trigger phrase but they who who communicated that to people not like us                               |
| 39:07      | and I don't know you people just don't know how to trigger them with Siri anymore so                                             |
| 39:12      | and the three of us are in the business of teaching people how to use this stuff I mean we all have                              |
| 39:17      | platforms and field guides and websites and and and I know in my case I get those emails                                         |
| 39:25      | so often people saying how do I turn this part off I love what you taught me but I just don't                                    |
| 39:31      | want this to happen anymore and I have to explain to them no that's always going to happen and then                              |
| 39:35      | they're like well why am I doing this then I mean so often people it's like the ultimate turnoff                                 |
| 39:40      | for them they they don't want the carrots they just want the chocolate cake you know and and I feel                              |
| 39:46      | like apple the carrots got smaller but they're still there you know yeah I love it yeah well                                     |
| 39:55      | hopefully as you pointed out Matthew we'll see some of these things maybe just change straight up                                |
| 39:59      | into settings like changing your watch face automatically I feel that should either be                                           |
| 40:03      | in the calendar or in the watch app or something like that or the very least discoverable through                                |
| 40:08      | the watch app that'll be pretty darn cool and so hopefully we'll see some of those changes                                       |
| 40:14      | make their way through can we go down that rabbit hole for a minute because I know all                                           |
| 40:17      | three of us are doing this how are you changing what's your coolest like watch face trick                                        |
| 40:23      | through automation Matt you go first I mean it for me it was using that open app trigger                                         |
| 40:33      | in automations for specific like if I open the music app it will open the music watch face                                       |
| 40:41      | on my watch so that it has those different controls and when I go on a walk the workout                                          |
| 40:48      | trigger opens one that has the little compass in there because otherwise I'm never going to use                                  |
| 40:52      | that compass and it's just kind of cool like we can't afford to lose lose Matthew Cassinelli I                                   |
| 40:58      | want you to use that compass yeah exactly the question is whether or not you know how to use                                     |
| 41:03      | a compass to find your way home that's a good point um yeah I could probably figure it out                                       |
| 41:09      | Berkeley is easy enough got pretty straight streets um um yeah I'm there's not a whole ton                                       |
| 41:18      | I think it has I mean I have ones it's like when I wake up it shows the solar face so I can kind of                              |
| 41:24      | see that sun level of the day like that's that's a little lovely seeing more sunlight over the time                              |
| 41:30      | which is that's a kind of cool way to get some awareness of some of those features um                                            |
| 41:35      | um I mean I I have a different watch face for each of those like 13 contexts so that but I don't                                 |
| 41:44      | you I those automations did get too overwhelming that I turned that off um I just have a shortcut                                |
| 41:50      | that is a menu it's a series of menus and it's the first one is work personal or colourful and                                    |
| 41:57      | then underneath that I just had different home screens for like I just want to use these when                                    |
| 42:03      | I'm not at work versus seeing some work related apps or just like those cool watch I don't know the                              |
| 42:08      | ones that just look nice too so I could kind of just pick from there for my home screen on my phone                              |
| 42:13      | yeah I just really like the idea of my wrist being another reminder of what context I'm in                                       |
| 42:19      | so I have like a law face and I have a MacSparky face I even have a podcast like face and                                        |
| 42:25      | and when I set timers or when I set up context my wrist just automatically switches to                                           |
| 42:32      | the face and Rose is showing us on the video I don't know if I can't see it it's my automations                                  |
| 42:37      | watch face it's really difficult to show people your watch face whilst also talking to a microphone                              |
| 42:41      | which is directly in line with your monitor I'm gonna try and do some weird yoga while David                                     |
| 42:45      | keeps talking yeah but but it's great like you know you yeah I use the same one the there's a                                    |
| 42:52      | face an analog face with colours or you can set colours and like if you find yourself strain off                                   |
| 42:59      | context and you look at your wrist it's a subtle reminder and say hey buddy you're not supposed to                               |
| 43:04      | be uh working on that other thing right now your wrist says you should be working on the                                         |
| 43:09      | automators and I don't know I find that a very useful without being a knowing little hack                                        |
| 43:16      | yeah I gotta I think maybe because I mean one problem that I have that we vaguely did you                                        |
| 43:23      | didn't allude to it but it was clear to me at the beginning of the show is that I do so many                                     |
| 43:27      | different things I'm like making videos I'm publishing the stuff on my website I have a                                          |
| 43:31      | newsletter I have a shortcuts user group that I like on [[Slack]] where people can join and talk about                               |
| 43:37      | it and so I do just like bounce around a lot and it's not easy for me to in one simple way                                       |
| 43:45      | enter that context like I think if we had that set home screen action I would have things that would                             |
| 43:52      | change to that screen and then kick off my timer stuff and do all these other things maybe that's                                |
| 43:57      | where your simpler menu system does help versus I don't want every shortcut in my video thing to                                 |
| 44:04      | start a timer timer over or kind of like I would have to start making it tied into across those so                               |
| 44:11      | that's something that I've been trying to figure out and I don't know any ideas well I mean in                                   |
| 44:17      | the menu I would suggest that you check what timer is running and if it's the timer for that context                             |
| 44:23      | then you just do nothing otherwise you would start the timer which you know that could be a work                                 |
| 44:28      | around yeah I think part of what I struggle with is the fact that I'm a shortcuts sharing person I                               |
| 44:36      | share all of mine and so yeah some stuff that I would do I could tie in better with more just                                    |
| 44:43      | like esoteric things but then I start to it becomes less shareable so that's that is a                                           |
| 44:49      | existential problem that people like us have where even just the fact that you can't share a                                     |
| 44:54      | shortcut and then this any sub routine from sub run shortcuts you'd have to share those as well                                  |
| 45:00      | and then they're like installing five shortcuts can be um I think that's like that alone is why I                                |
| 45:07      | did part of my system into menus is that I now have 75 shortcuts to share instead of 700 and                                     |
| 45:12      | nobody's gonna go click on my website open those links open the shortcut add it custom like it just                              |
| 45:19      | became too much work and so this makes all of that value much more present but um yeah like kicking                              |
| 45:27      | off those different contexts I think is even just for me I'm struggling enough to figure out what I                              |
| 45:32      | should be doing on the the stuff so once I can figure that out more maybe I can have the some                                    |
| 45:37      | sort of automation set up for me like a series of NFC tags all colour cut I mean it's got to be colour                             |
| 45:43      | at some point because that's what like what David was saying with the watch face if even if I look                               |
| 45:48      | down and see that mine is like yellow because I'm working on my blog posts I like know that                                      |
| 45:53      | and that does change my mindset it's like I need a switch in I mean so much of this stuff contextual                             |
| 45:59      | stuff I think is being kind to yourself you know like give yourself subtle reminders not beating                                 |
| 46:04      | yourself up over it and like there is a role for technology in that to help you you know nicely get                              |
| 46:12      | through that and work on that muscle of focus and um and I think shortcuts is a great tool to help                               |
| 46:20      | you it's a way to like rewire your phone and your brain into like a gentle way to do what you want                               |
| 46:28      | to do while also I think what I've enjoyed is also making room for my Twitter shortcut that                                      |
| 46:35      | I'm gonna use Twitter but maybe this shortcut helps me open certain like searches more intentionally                             |
| 46:42      | and quicker and not get lost in just scrolling and I think I've been enjoying that of both                                       |
| 46:49      | like getting more done but just the the lights are nicer or now I can use my music library more                                  |
| 46:55      | and so I'm listening to more music and that makes me happy and so yeah I think it does I I always                                |
| 47:01      | focus on the work part but or I think it's easy to think about like how can this be used for my                                  |
| 47:07      | work but the personal productivity aspect does just make some of those things smoother and that's                                |
| 47:13      | nice and I think now more than ever as people say it's like I don't we're all on our devices all                                 |
| 47:22      | day long and everybody knows the importance of managing your home environment and what inputs                                    |
| 47:27      | and how you're being affected by the world because you're stuck in the same space and so                                         |
| 47:33      | having control over your digital space I think makes a big difference like it's given me a sense                                 |
| 47:39      | of peace to have this sorted out where I felt like my my house wasn't in order so that it's been                                 |
| 47:44      | awesome hey tell us a little bit about your Twitter shortcuts and and what do they do                                            |
| 47:50      | sure it is now one shortcut which is great and one of the benefits of combining all of these                                     |
| 47:59      | shortcuts together into one menu is the ability to I mean often I don't you might run into this is                               |
| 48:06      | if I want to have the ability to have some sort of input I will at the beginning of a lot of                                     |
| 48:11      | shortcuts like check whether or not there's an input and then if there is get that input and if                                  |
| 48:16      | there isn't have some sort of way to then enter text or do like select whatever I need and so by                                 |
| 48:22      | putting those all into a menu it just happens right at the beginning of that one shortcut and                                    |
| 48:27      | then it can pass out all to these different things it's almost like a global variable but not really                             |
| 48:33      | but it's like within a single context yeah exactly so it's not like as split out which can                                       |
| 48:39      | and just get really duplicative and and it is in the process I think I just made something better                                |
| 48:46      | because I had some parts in one shortcut but not in the other so I mean on a on the simpler level                                |
| 48:53      | or let me just run it so I can double check what these menus are saying and I have one one of the                                |
| 48:59      | steps opens into my different Twitter lists so if you go on the web and look at your lists there's                               |
| 49:05      | a unique ID in there and then you can open a deep link into Twitter into that specific list                                      |
| 49:11      | this has been something that I've been that's like how I've used Twitter for the last five                                       |
| 49:15      | years is by opening into these lists using even workflow back in the day because I just use those                                |
| 49:21      | lists to curate I mean I follow 6,000 people now and I actually follow I mean most of them aren't                                |
| 49:28      | not a good chunk of them are unless because Twitter doesn't make it easy to manage but                                           |
| 49:32      | that's how I follow different contexts and it's very kind of like I didn't even think about that                                 |
| 49:37      | until now that it's I'm doing that same thing there um a couple others are just like I built these                               |
| 49:43      | for live tweeting like during [[WWDC]] it can just automatically append a hashtag to the end of                                      |
| 49:48      | every tweet before I send it out so that I just don't have to remember how to do that and people                                 |
| 49:53      | can mute me if they want um different ways to I've also done a series of ways to search and then add um                          |
| 50:02      | are they called parameters I don't remember with the search like advanced search terms in Twitter                                |
| 50:07      | where if you can put like filter colon follows it will search only people that you follow on Twitter                             |
| 50:14      | and so that's kind of like my own personal google search for all of you and it just like                                         |
| 50:19      | I found good book recommendations actually just by doing that um another one is self-search where                                |
| 50:25      | I just search my own tweets to see when I said something because I usually talk about shortcuts                                  |
| 50:31      | or something and then put it in my newsletter later and so that's really helpful so uh one                                       |
| 50:36      | I have is if I'm on somebody's profile it will open the the link to there's a page that's followers                              |
| 50:44      | you know for this person and so um it's kind of like when you follow someone you can see it on                                   |
| 50:49      | [[Twitter]] down below but there's just a web version of that and so this shows the web page for somebody's                          |
| 50:55      | profile so I can just see who's in common with this person that I already know and kind of                                       |
| 51:00      | understand what they're about and then the last part that I haven't because I've been doing this                                 |
| 51:06      | new I have a whole I want to expand this even further but it's going to be based off of a                                        |
| 51:10      | dictionary where I found one of the things that always happens with tweets is when you share them                                |
| 51:16      | somewhere it will just say um the metadata is just like tweet and it doesn't have the body of what                               |
| 51:23      | they said and so if you put it into [[Instapaper]] it's almost useless because there's just a URL                                    |
| 51:28      | and doesn't show anything if you put it into [[Apple Reminders\|Reminders]] I feel like it'll often it'll put it                                      |
| 51:33      | in that little card but I still want to have I'm I mean you I don't need to like preach to you all                               |
| 51:39      | that you want to extract the tweet text and then the URL of the person so I have one that                                        |
| 51:43      | that uses I think it's publish.twitter.com has an endpoint where you can send your tweet and then                                |
| 51:50      | it'll get back a dictionary of that data and then I also reformat that dictionary into a simpler                                 |
| 51:56      | dictionary that I want to use and so it's called tweet deeds and I think even um I think I saw                                   |
| 52:03      | at some point like Gruber has some sort of [[AppleScript]] where he does the same thing and turns                                   |
| 52:07      | it into markdown and I was like oh yeah I totally have a tweet a tweet or a shortcut that can do                                 |
| 52:11      | that too which is fun yeah and then all of that is launched from a Twitter icon on your home screen                              |
| 52:17      | yes but it also can be from the share sheet as well sure or if I copy a tweet link and then                                      |
| 52:22      | run that icon it'll grab the link automatically. So I have like the same thing for YouTube sometimes                             |
| 52:30      | or the thing I want to I need to expand the Twitter one more to put it into my task manager to put                               |
| 52:35      | into I now use [[Notion]] and I have access to their API and so I've been that's been a whole fun                                    |
| 52:41      | experiment because I can build a whole mess on top of that.                                                                      |
| 52:47      | This episode of The Automators is brought to you by ExpressVPN. Go to expressvpn.com/                                      |
| 52:53      | automators for high speed secure and anonymous VPN services best of all you'll get an extra                                      |
| 52:59      | three months for free. I don't know if you know this but by default Netflix hides thousands of                                   |
| 53:05      | shows and movies based on your location and you might be aware that Netflix has recently increased                               |
| 53:10      | their prices again. If you want to feel like you're getting your money's worth with your                                         |
| 53:14      | Netflix subscription you can start by using ExpressVPN like I do. So you might not know                                          |
| 53:20      | what's on Netflix in your country is completely different from someone in the UK or Japan has                                    |
| 53:26      | on theirs. Using ExpressVPN I can control which country I want Netflix to think I'm in. ExpressVPN                               |
| 53:33      | has over 90 countries to choose from so every time I run out of stuff to watch I just switch to                                  |
| 53:38      | another country to unlock new shows. And here's the best part it's not just for Netflix you can                                  |
| 53:44      | use ExpressVPN to unlock shows on other streaming services too. You can use it to watch BBC iPlayer                              |
| 53:50      | which is free and only available in the UK. ExpressVPN is also super fast and works on your phone                                |
| 53:57      | laptop even smart TV so you can watch your shows on the big screen with zero buffering.                                          |
| 54:03      | I've been an ExpressVPN for subscribers and one of my favourite places to watch                                                   |
| 54:09      | Netflix and other streaming services is in the UK. They've got a bunch of great series there that we                             |
| 54:14      | just don't have here in the US. I like British television anyway and also I like the fact that                                   |
| 54:19      | they have the Star Trek series. All I have to do is switch my server and ExpressVPN to the UK and                                |
| 54:26      | I'm good to go. You can make smart choices to stop paying full price for streaming services                                      |
| 54:32      | and only getting access to a fraction of their content. Get your money's worth at expressvpn.com                                 |
| 54:38      |/automators. Don't forget to use that link so you can get those three extra months for free                                 |
| 54:43      | that's expressvpn.com/automators expressvpn.com/automators to learn more. Our thanks to                               |
| 54:53      | ExpressVPN for the support of the automators and all of relay FM.                                                                |
| 54:59      | Matt, something you've been kind of dancing around that pushes a lot of my personal buttons                                      |
| 55:04      | is the way you're connecting everything with URLs and deep links and you've been doing this                                      |
| 55:10      | a long time I know. How do you feel Shortcuts is doing with that type of stuff right now,                                        |
| 55:17      | the ability to share data and jump between apps and ideas?                                                                       |
| 55:22      | That's an interesting, I wasn't expecting how Shortcuts is doing because I do think on some                                      |
| 55:26      | level it also involves the third party developers and the ability to just, I mean their usage of                                 |
| 55:34      | the deeper APIs because I know that some apps make this possible and others don't and I think                                    |
| 55:40      | that's the part that ends up hitting me or the ability to add in those deep links once a document                                |
| 55:50      | already exists. I think that's the other part or even some space in terms of where you're sending                                |
| 55:57      | it for that link to live because I think that's one of the things that I struggle with is I've                                   |
| 56:03      | been using Kraft for almost a year now and I have tons of links in there but there's not really                                  |
| 56:08      | really some sort of like space for them to exist and so I think that's particularly with [[Notion]]                                  |
| 56:15      | and the properties that are associated with pages is where I want to use those deep links                                        |
| 56:22      | but [[Notion]] on iOS does not open deep links into the corresponding apps so I'm slightly at a,                                     |
| 56:29      | I've kind of hit a temporary wall with that because I've been moving into [[Notion]].                                                |
| 56:34      | I think also my shortcuts that I've built now that the ones that do are able to look into apps                                   |
| 56:43      | and grab those documents are sort of enabling me to create non-deep link ways to access those                                    |
| 56:50      | same pages and even the widgets themselves I think specifically for the ways that I was                                          |
| 56:58      | just trying to create a context process I think have enabled me to, almost every single page,                                    |
| 57:07      | I have notes, timer, things, one that almost act as those deep links into those pages.                                           |
| 57:13      | So I do think within my task manager itself I don't have them going back out to those pages                                      |
| 57:19      | and I'm the worst for it right now because of it, like it's not, that's not great                                                |
| 57:24      | but I do think in terms of having access to those documents quickly it's probably,                                               |
| 57:31      | I don't know about like better than before but it's still, I still am not like struggling                                        |
| 57:35      | with that too much which is good. That's still an existential problem I think with,                                              |
| 57:42      | I think the way that I'm going to address it though is by using [[Notion]] as the project                                            |
| 57:48      | management level and then having a point where that, I'm not sure if I'll use it via Zapier                                      |
| 57:55      | or just a shortcut that'll pull from those pages but then creating the research document,                                        |
| 58:01      | the task in things and other pages and then having all of those links just because it created them                               |
| 58:07      | all at once. I mean something I've noticed with myself over the last year is tool selection to                                   |
| 58:13      | me has become a primary concern has been is this shareable, is this addressable and you know,                                    |
| 58:21      | and is it addressable and shareable on multiple platforms? I mean I'm, I am really into the                                      |
| 58:27      | [[Obsidian]] app but they haven't released their mobile app yet and as addressable as it is on my Mac                               |
| 58:32      | it's almost not addressable on iOS especially if you're using the security model I am. So                                        |
| 58:38      | it is something that comes up and I feel like it's something that you're starting to see                                         |
| 58:45      | a lot of enlightened app developers really embrace. I think the blend of shortcuts,                                              |
| 58:52      | deep links and widgets makes a big difference and not having one or two of those can kind of kill                                |
| 59:00      | the experience because it's starting to be expected all around like that's why I think                                           |
| 59:06      | Kraft was, it was awesome. I like pretty much asked them to add deep links because I was like                                    |
| 59:10      | I need this. Oh thank you, you're the one behind that because it's great. They have excellent                                    |
| 59:16      | support and it works on iOS and Mac and I think that that's a great solution and you can deep link                               |
| 59:21      | right to an individual entry of an, I mean it's one of the best supports I've seen.                                              |
| 59:28      | Exactly, it's amazing. I love Kraft. I think it's the part that I'm struggling with is that it's so                              |
| 59:33      | good and I'm also you but it doesn't do what [[Notion]] does in the way that I need it to and so                                     |
| 59:40      | I'm kind of trying to use both but those deep links don't open back into Kraft.                                                  |
| 59:44      | I think specifically with a tool like Kraft, it does come down to how I'm using it and                                           |
| 59:51      | I mean even, I don't know, I mean on a big level moving into Kraft simplified the amount of                                      |
| 59:57      | documents that I need to link to because I was able to almost like how I've smushed my                                           |
| 01:00:02   | shortcuts down, I made a document that has these sections that have deep sections into them                                      |
| 01:00:08   | for all of my different notes instead of a single like 500 notes in the notes app.                                               |
| 01:00:15   | The fancy nerd term there is map of content, M-O-C and that's what everybody's doing with                                        |
| 01:00:22   | this stuff but then with Kraft you can deep link the individual entries on your directory pages as                               |
| 01:00:28   | well so it's just it runs deep. I think probably part of it is that you can't find documents in                                  |
| 01:00:35   | Kraft and so like right you're using shortcuts and so if I was able to reach in and grab those                                   |
| 01:00:41   | documents and create deep links through via shortcuts, I would do it but I think it's                                            |
| 01:00:46   | once I'm manually creating those, it can be useful like on certain case-by-case basis or like                                    |
| 01:00:52   | I even have master documents that link out to other documents using their native back links                                      |
| 01:00:58   | features so that provides the access still because ultimately the strategy for deep links                                        |
| 01:01:05   | is to achieve the goal of that contextual computing and if I can get there in other ways                                         |
| 01:01:11   | that are just as quick, I do think like the direct almost is it bunch for Mac that is the                                        |
| 01:01:19   | one that has the deep link or no, no, that's that's right. I think you're thinking hook is the one.                              |
| 01:01:26   | I think that almost needs to become like a system level thing or even I think shortcuts kind of                                  |
| 01:01:34   | seems like a logical route for it to develop via iOS just because you can instead of having URLs                                 |
| 01:01:42   | with unique identifiers that just look weird having the shortcut itself abstract that or even                                    |
| 01:01:51   | I always imagine like the variables and shortcuts being some sort of link outside of the                                         |
| 01:01:57   | shortcuts app like you could link two different documents in other apps using an inline shortcut                                 |
| 01:02:04   | module or something like that in any app. Maybe I should have told that to Apple when I work there.                              |
| 01:02:09   | I never mentioned that. Honestly, it might have been too late because I feel like that's                                         |
| 01:02:14   | something they needed to address when they first started building iOS like the Macintosh has this                                |
| 01:02:21   | whole system for Apple events built in that makes everything addressable and I've been on this                                   |
| 01:02:28   | ramp before on the show so I won't drag it out now but I feel like there needs to be a system level                              |
| 01:02:34   | tracking on iOS to allow for automators to do things like that and the content graph maybe.                                      |
| 01:02:43   | It's just not there and yeah I think yeah I will say like a thing that I enjoyed                                                 |
| 01:02:51   | getting I don't know not that it's any sort of secret but they can do what they want there.                                      |
| 01:02:57   | They don't have a limitation besides their ability to get it done in time or have the                                            |
| 01:03:02   | like the talent and all that realistic parts about it but I think even just from what we imagined                                |
| 01:03:09   | workflow could be to now is like a lot more than I ever expected and so or what I thought was even                               |
| 01:03:18   | like possible technically and so I think that's what's so cool. I think it will I will say that                                  |
| 01:03:23   | would be complicated and sounds sometimes I can now like be like that's a cool idea that would                                   |
| 01:03:30   | probably take them three years and like of just like how much time it takes to make it right or                                  |
| 01:03:35   | to make it Apple level quality or yeah if there was a bug suddenly it's pushed to the next year                                  |
| 01:03:41   | and so like I think some of that stuff I would love like maybe I should file feedback please add                                 |
| 01:03:47   | deep linking via shortcuts like and that even the interface of it is an important thing that                                     |
| 01:03:53   | something that people are expected or like used to so maybe a shortcut's become more common that                                 |
| 01:03:58   | could be possible feature feedback request and it has to address security which is another                                       |
| 01:04:04   | another year you know that's like a way I mean just the part about it not being a link and still                                 |
| 01:04:10   | being secure like even shortcuts itself is a technical route that these apps can do that now                                     |
| 01:04:16   | and so turning it into an interface is like the technical part is maybe already there and                                        |
| 01:04:21   | then would just take time or Apple thinking it's what they need to do and or like I mean if we                                   |
| 01:04:30   | ever get shortcuts for Mac and that sort of linking system came from the Mac or was built                                        |
| 01:04:36   | and inspired by that and deep linked across the entire ecosystem like holy cow that sounds awesome                               |
| 01:04:41   | oh my gosh my heart's racing you gotta stop talking like that                                                                    |
| 01:04:45   | so Matthew something you said made me think how much of what you do is shaped by the                                             |
| 01:04:53   | automations versus the applications themselves and and where do you draw the line so for example                                 |
| 01:04:58   | you know craft came along if it didn't have deep links and some automation support would you have                                |
| 01:05:04   | just gone huh that seems cool next or you know you you were using [[Notion]] you've only recently                                    |
| 01:05:10   | got access to the API so I'm guessing until then no shortcuts pretty much nothing so where do you                                |
| 01:05:16   | draw that line it's got to be a blend of them I'd say I don't think craft has the best shortcuts                                 |
| 01:05:23   | yet like they could still do more with that although I would say like I'm kind of not using                                      |
| 01:05:28   | things right now because they don't have good enough shortcuts and it hasn't evolved into                                        |
| 01:05:33   | what I need although also like on some level being a solo person and needing some sort of                                        |
| 01:05:40   | project management not task management thing is relevant and things still might fit into                                         |
| 01:05:47   | a task manager for me because or it's still it's my favourite way to see tasks on my wrist still                                  |
| 01:05:52   | I still love their Apple Watch app so I think it's it always does come down to a blend                                           |
| 01:05:57   | and sometimes I mean between craft and [[Notion]] both of them I'd say I'm using because I could see                                 |
| 01:06:05   | that they were working on stuff that would be relevant to me like because I mean craft was                                       |
| 01:06:10   | also new and so I talked to them a lot in the betas being like if you want it to be something                                    |
| 01:06:15   | that I'm going to use it's got to have at least some of this stuff otherwise it just                                             |
| 01:06:19   | doesn't check the boxes and falls behind or like maybe you get like three out of four and that's                                 |
| 01:06:25   | enough um I think [[Notion]] I didn't use for you I also I met with the [[Notion]] team in like 2017                                     |
| 01:06:35   | and I could tell they weren't going to update the iPad app until now like I was just like this is                                |
| 01:06:41   | not their their priority at all they're like a startup trying to raise funds and be giant and                                    |
| 01:06:48   | so they weren't going to go deep and so even just like the ability to select multiple rows of text                               |
| 01:06:53   | on [[Notion]] two months or like three months ago I was like okay now I can actually maybe use it                                    |
| 01:06:57   | and I think the API also helped knowing that I could potentially move my air table library                                       |
| 01:07:03   | into [[Notion]] using this and then have more of the interface on top that I kind of wish air table                                  |
| 01:07:09   | had provided me um in the past few years and I've been I just did a whole how to use um                                          |
| 01:07:16   | shortcuts APIs with air table specifically like a stream a couple weeks ago that maybe people would                              |
| 01:07:22   | want to check out but um I think it does kind of depend I think even using the fact that [[Notion]]                                  |
| 01:07:30   | got more popular recently and there was more tutorials on how to set up some of the deeper                                       |
| 01:07:35   | parts helped me because I didn't see as much of that with air table and like I'm all about like                                  |
| 01:07:41   | filtering and views and I have five different databases that are interconnected that I'm trying                                  |
| 01:07:47   | to like set together so knowing that I could both use shortcuts to pump data in there and then have                              |
| 01:07:54   | their advanced views filter it for me properly I think is going to be important but I mean even                                  |
| 01:08:01   | I use [[Notion]] on my Mac right now don't use it on my iPad almost at all like I think I'm                                          |
| 01:08:07   | I have been trying not to just like only use things through shortcuts because that's what                                        |
| 01:08:12   | I produce content about and it's realistically I'm not only using my iPad and when I create videos                               |
| 01:08:19   | and things like that I'm not I have to edit in Final Cut Pro so I'm not like even then it's like                                 |
| 01:08:25   | not automation isn't going to help me edit those moments but I have shortcuts to get me into those                               |
| 01:08:31   | mindsets and things like that so there's yeah it kind of depends but I'd argue with you there I                                  |
| 01:08:37   | don't think your job is to do everything in shortcuts I think your job is to show us where                                       |
| 01:08:43   | shortcuts can be of help and frankly telling us where it can't be of help is as useful as well                                   |
| 01:08:51   | it's really helpful for me to know too because then I stop trying to do that too much it's like                                  |
| 01:08:56   | ultimately like I don't know like some of that can work but I think the core experience of shortcuts                             |
| 01:09:05   | I think has been more simplified for me lately which has been helpful and not just having thousands                              |
| 01:09:12   | of them makes it sound insane and all this stuff but there's really like I have like 13 categories                               |
| 01:09:19   | for my personal life and 13 for my work life because that's how many colours there are shortcuts                                  |
| 01:09:24   | lucky 13 money but it's still like I don't know life is there's like lots of areas to tap into but                               |
| 01:09:31   | the parts that you want to automate from that isn't as complex as life can be but yeah I mean                                    |
| 01:09:38   | that's even just the way I'm saying that it's like sometimes you're trying to make things for                                    |
| 01:09:42   | every part of your life and that's just life is hard to figure out and takes time so it's not                                    |
| 01:09:49   | always going to be easy to automate it in one day like working on these and then using them                                      |
| 01:09:54   | throughout the week has been the best part for me not trying to make a whole experience and then                                 |
| 01:09:59   | automate it and then be like now I'm done permanently and I can like use this forever it's a                                     |
| 01:10:06   | growing experiment and I think that's what I like about the menu system particularly is                                          |
| 01:10:11   | you just add another section to the menu and add some more tasks in and a good just simple tip                                   |
| 01:10:18   | move that to the top so that when you work on it it's first instead of once you get a couple                                     |
| 01:10:23   | hundred shortcuts in there you're just scrolling throughout the entire library so moving that                                    |
| 01:10:28   | the current menu that you're working on to the very top of the list is a good way to do it and                                   |
| 01:10:33   | one of the nice features of the Choose From Menu shortcut is you can move the entries and it moves                               |
| 01:10:38   | all the accompanying steps with it you don't have to like rearrange anything exactly and that is                                 |
| 01:10:47   | that's quite helpful and you can also put menus within menus which I'm guilty of doing on occasion                               |
| 01:10:54   | and we need some better like collapsible ways to look at those without just scrolling past                                       |
| 01:11:00   | 700 other steps that are in the menu option before you because I think that would make                                           |
| 01:11:06   | it does kind of feel less approachable on an like if you open this shortcut it's harder to                                       |
| 01:11:12   | tell what's happening except for if you read the menu or like there's a bunch of comments                                        |
| 01:11:16   | um yeah but I think it's easier than just trying to find 50 shortcuts for one area of                                            |
| 01:11:24   | life that you are trying to work under yeah like what I do with that catch all categories I just                                 |
| 01:11:28   | have a bunch of individual Choose From Menu shortcuts and then the master one is just running                                    |
| 01:11:34   | the shortcut from you know just running the sub shortcuts I'll have like one on photography                                      |
| 01:11:40   | tools and then I'll have an entry on the master that says photography and it just runs that                                      |
| 01:11:45   | photography tool shortcut I don't actually embed the whole thing into one massive monster                                        |
| 01:11:52   | for people who don't know the get my shortcuts action got a parameter for folders so you can                                     |
| 01:11:59   | grab shortcuts from a specific folder then you can use the run shortcut action to run those                                      |
| 01:12:04   | shortcuts and even they added an open shortcut action so you can go and edit them which that's                                   |
| 01:12:10   | like more for us I guess building shortcuts but yeah yeah that's pretty useful I use that every day                              |
| 01:12:16   | a couple of times a day to update all of the shortcuts that are or the widgets that I have                                       |
| 01:12:20   | created through widget pack which is one of the ways that I do contextual things because the widget                              |
| 01:12:25   | pack widgets show me different things based on the time of day as well as you know what content                                  |
| 01:12:29   | needs to be in there this episode of automators is brought to you by DEVONthink the flagship                                  |
| 01:12:35   | product from DEVONtechnologies DEVONthink is the most professional document and information                                |
| 01:12:40   | management application for the Mac it's the one place for storing all your documents snippets                                    |
| 01:12:45   | all bookmarks and working with them the integrated AI assist you with finding and searching while the                            |
| 01:12:50   | extensive search language with advanced billion operators means that you have no chance of losing                                |
| 01:12:55   | anything DEVONthink features a flexible sync system that supports many cloud services including                               |
| 01:13:01   | [[Dropbox]] and iCloud or it lets you synchronise over your local network too if that's what you prefer                              |
| 01:13:07   | and of course everything is securely encrypted this gives you the choice for syncing whichever way                               |
| 01:13:12   | works best for you it's got smart rules and flexible reminders to let you automate all                                           |
| 01:13:18   | parts of your workflow and delete boring repeating tasks letting DEVONthink automatically                                     |
| 01:13:23   | organise your data with the rules that you define DEVONthink's AppleScript dictionary is one of                               |
| 01:13:28   | the largest on the Mac there's no part of DEVONthink that can't be automated and you can                                      |
| 01:13:33   | accept and DEVONthink's functionality with your own commands by adding them to its scripts menu                                |
| 01:13:38   | even templates can have scripts inside and you can set up new documents with data from                                           |
| 01:13:42   | placeholders or even inserted by your own apple script code and of course there's so much more                                   |
| 01:13:47   | including a great iOS companion app which was just updated to version 3.0 there's also email                                     |
| 01:13:53   | archiving scanning and there's even an embedded web server for sharing your data securely with                                   |
| 01:13:58   | your entire team for me I love the fact that I have multiple databases and they are everywhere                                   |
| 01:14:05   | and the rules that I use on those are also everywhere I don't have to worry about syncing                                        |
| 01:14:09   | things between my MacBook Air and my Mac and my iPad and my iPhone in fact I can just check                                      |
| 01:14:15   | everything into the inbox and voila DEVONthink will sort it out for me if you've got                                          |
| 01:14:21   | documents that you need to manage and you need to make sure that they're the same everywhere                                     |
| 01:14:25   | and that things always get filed the right way then DEVONthink for you I love it for so many                                 |
| 01:14:30   | reasons but I have to say shortcuts in DEVONthink to go 3.0 one of my favourites you can get                                   |
| 01:14:37   | 10% off DEVONthink 3 or upgrade to it right now just go to devontechnologies.com/                                      |
| 01:14:42   | automators that's devontechnologies.com/automators for 10% off our thanks to DEVONtechnologies                                      |
| 01:14:47   | for their support of this show and all of really fm I you know we have an outline                                   |
| 01:14:53   | for today's show and we have not followed it at all we've got a whole show outline that we haven't                               |
| 01:15:00   | touched because we've been cerebral talking about shortcuts and I have enjoyed this conversation                                 |
| 01:15:05   | so much um so this is really one of my favourite episodes but I do want to talk about one thing                                   |
| 01:15:12   | on this outline that I think everybody out there that listens to the automator should be aware of                                |
| 01:15:18   | and that is this directory you've got over in your website math you um where you've got the                                      |
| 01:15:25   | amazing shortcuts catalogue I added the word amazing math math is too humble but it is it's great he's                             |
| 01:15:32   | got a website where he's got a bunch of the stuff he creates that he just puts up there to share with                            |
| 01:15:36   | folks and let them try it out Matthew tell us about how you got to build this thing and and uh you're                              |
| 01:15:43   | thinking behind it sure so at least currently it's split into the shortcuts library and the                                      |
| 01:15:50   | action directory I had to title them all just to distinguish them somehow um and I'm planning on                                 |
| 01:15:57   | adding an automation this thing and probably apps or like related gear soon it might turn into a                                 |
| 01:16:04   | workflow catalogue to get meta and also referential but um at least right now one of the big things                                |
| 01:16:11   | that I wanted to do was at least for the action directory have a documentation online of the                                     |
| 01:16:18   | functions that are available in shortcuts for people to use because I think one of the things                                    |
| 01:16:22   | that happens with shortcuts is people don't go through every action and so you think that                                        |
| 01:16:28   | shortcuts should be able to do more than it can because it like in theory when you conceptualise                                 |
| 01:16:34   | it it should be able to touch every part of the system and it's honestly a little weird that apple                               |
| 01:16:39   | hasn't added more functionality in there for certain stuff but it's still just a way to see on a high                            |
| 01:16:46   | level here are the um main categories there's also inside each action group there's headers                                      |
| 01:16:54   | for the different groups and so just by pulling those out and saying here's what's available                                     |
| 01:16:59   | I think it just helps people to understand what's available in shortcuts um then I also have                                     |
| 01:17:06   | that I think the original one of the original reasons I wanted to do this was to just share                                      |
| 01:17:11   | more shortcuts with people I think I ultimately needed to create at the time a whole system just                                 |
| 01:17:17   | for me to understand and be able to share and sort through my thousand shortcuts that I've been trying                           |
| 01:17:24   | to share um so I have a whole system I have an air table database where I will back up my shortcuts                              |
| 01:17:31   | and then customise them with different data like that this uh only takes one input and so like                                   |
| 01:17:38   | the theory was that you could use this and take those shortcuts and use them a series because                                    |
| 01:17:44   | they don't ask you to do things um it started to just get I think too much though because I it was                               |
| 01:17:51   | cool to have full documentation of my shortcuts I had all the links icons um I found a way to                                    |
| 01:17:59   | scrape out the comments in shortcuts and upload those as descriptions and so for every single step                               |
| 01:18:06   | I would tell you here's what's happening and then here's how I use this um and then I had yeah a                                 |
| 01:18:13   | whole way that you could browse these shortcuts and add them and just kind of see what happens and                               |
| 01:18:19   | then in related ways like these are all iPad shortcuts um I had to I have a a membership                                         |
| 01:18:27   | angle to it too so some of that metadata and ways to sort it was for members so you could                                        |
| 01:18:33   | my thinking was like if you wanted to learn more about shortcuts versus just getting the                                         |
| 01:18:37   | functionality you could join me and we can learn together sort of thing versus I also wanted to                                  |
| 01:18:43   | just make sure people could experience shortcuts for free like I do I both like want want to provide                             |
| 01:18:48   | a product that's of value and be able to get paid for it basically but at the same time also                                     |
| 01:18:53   | give people shortcuts so that it's not like fully gate kept because I do think shortcuts being free                              |
| 01:18:59   | is important because it means that everybody on their iPhone can use it and so I have it's just                                  |
| 01:19:05   | sort of a mix of things there um so with my new system I'm basically going to delete almost all                                  |
| 01:19:13   | of those shortcuts I think I'm going to make them available for the members just as um like mark                                 |
| 01:19:19   | down links in some document as opposed to my whole system because one thing that just ended up happening                         |
| 01:19:24   | was it was kind of slow because there's 700 of them and I'm not like a web developer I kind of                                   |
| 01:19:30   | built the website and so it's it's fine but it's not like the best but even still I think in terms                               |
| 01:19:35   | of approachability I want people to be able to find a handful of shortcuts and use them and so                                   |
| 01:19:40   | I'm actually re-releasing the catalogue in a new version where I'm going to have I think like 25                                   |
| 01:19:47   | shortcuts across a bunch of different categories just freely available for people and those 25 things                            |
| 01:19:54   | each have eight or 10 menu options in them that do all of the same things that were in my catalogue                                |
| 01:19:59   | before but basically it means I'm not putting the burden on you of having hundreds of shortcuts in                               |
| 01:20:05   | your library just giving you a couple shortcuts now so I think it'll still be I have a shortcut that                             |
| 01:20:11   | um looked at all of my folders and all of my shortcuts and then counted the actions in them                                      |
| 01:20:18   | and I have something like 10 000 actions and so there's a lot of drawings exactly I do think it                                  |
| 01:20:25   | counts menu like options as a second option yeah yeah which is yeah I had a look at that file at                                 |
| 01:20:32   | some point and uh the way it's structured means that uh unless unless you're going through matching                              |
| 01:20:37   | you know very specifically uh you're you're going to end up with each individual menu item                                       |
| 01:20:42   | is also an action so that does yeah at the very least double it for yeah yeah for for most things                                |
| 01:20:50   | but then now on the membership side I'm I'm sharing more of my specific and esoteric workflows                                   |
| 01:20:56   | like for video production um some of them just fancier ones that I'm building for apps before                                    |
| 01:21:03   | I'm I'm gonna eventually I'm trying to do like staggered releases so I can give them a way to                                    |
| 01:21:07   | people but you kind of get early access now and then I've been doing live streams where I show                                   |
| 01:21:12   | people a walkthrough every like all of my shortcuts last week to let people know um and I'm going to                             |
| 01:21:19   | be hosting kind of conversations that will turn into youtube videos like the full versions available                             |
| 01:21:26   | there too so that's pretty fun I've been really enjoying having direct listener support because                                  |
| 01:21:32   | it really has helped me to actually focus on what shortcuts could be and not like making youtube videos                          |
| 01:21:40   | to get views to get ads that like in certain ways that could I think uh corrupt the way I choose to                              |
| 01:21:48   | do it and so that's I've been it's been really nice like I have a newsletter that I let people know                              |
| 01:21:53   | every week new shortcuts that I'm building and um new additions to the catalogue and things that I'm                               |
| 01:21:59   | up to but um I got a lot of survey I did a survey from people and I think that really helped me                                  |
| 01:22:05   | understand how to give you all the best value so I've been enjoying that a lot um well as someone                                |
| 01:22:12   | on the outside I've really enjoyed seeing kind of you blossom because when you left you you know                                 |
| 01:22:17   | you weren't sure exactly how this was going to work and yeah and you've put together something here                              |
| 01:22:22   | that is super useful to people interested in automation the membership is not expensive it's                                     |
| 01:22:27   | fifty dollars a year five dollars a month so you can support matt and get you know even more access                              |
| 01:22:33   | but you also have a lot of stuff that's available for free for people who are just getting started                               |
| 01:22:37   | I and then now you've got the youtube stuff and the newsletter and I'm just super happy for you                                  |
| 01:22:43   | to see all this great stuff you're doing thanks I want to I've been I really felt like I think                                   |
| 01:22:50   | I had so much paradox of choice with shortcuts and just picking them and which even the ability to                               |
| 01:22:56   | share one of these workflows would take me like uploading all the shortcuts and doing all the                                    |
| 01:23:01   | stuff that wasn't like I think I mistook the work for value versus just being able to use it and so                              |
| 01:23:09   | I think I'm excited because that helped like that being settled helped me figure out just like                                   |
| 01:23:16   | how should you use shortcuts on not like I know how to make shortcuts I could tell you all day long                              |
| 01:23:21   | but like picking what's useful is still like I think we should have more discussions like this                                   |
| 01:23:27   | and I think the shortcuts community should talk about this stuff more because I think a lot of                                   |
| 01:23:31   | us know how to build shortcuts but like why and when to use them is still can be so personal or                                  |
| 01:23:39   | it almost like feels too simple even though because we're just used to it or something                                           |
| 01:23:44   | like that when for other people they're like oh my god I can control my lights like with the phone                               |
| 01:23:48   | and the home screen stuff I don't know it's like cool stuff that I think is really exciting and so                               |
| 01:23:54   | that's why I love to share it directly with I think the streams have been great I've been doing                                  |
| 01:23:58   | like I want to do some clubhouse shots to like help people more directly and it does help that                                   |
| 01:24:04   | I always been worried about that app because it's only in beta and not on android but                                            |
| 01:24:07   | shortcuts is not on android so I was like oh yeah why am I worried about that part at least                                      |
| 01:24:12   | um yeah but I think it's fun to I'm like relaunching youtube stuff soon so I'm going to actually have                            |
| 01:24:18   | more videos that are teaching you specific parts teaching sharing these specific shortcuts so you                                |
| 01:24:24   | can use them and I'm that's going to be a lot of fun well I'm glad to hear that because it's always                              |
| 01:24:30   | been interesting seeing what you've come up with and you know especially the the collaborations                                  |
| 01:24:34   | that you've done with people like Rene Ritchie and so on as you've been progressing through                                      |
| 01:24:37   | making these videos and figuring out you know how can you you know share these both for your benefit                             |
| 01:24:42   | as well as everybody else's because at the end of the day you know if you can't use the shortcuts                                |
| 01:24:46   | that you're making then can you can you share them and that's something I end up struggling with                                 |
| 01:24:50   | because all of my things are permanently in beta my life is a beta or actually realistically an                                  |
| 01:24:55   | alpha because there's so many darn bucks see that's why I want to work more together with you guys                               |
| 01:25:01   | because I do think there is a lot that we're all doing the same kind of thing separately and then                                |
| 01:25:07   | we communicate through podcasts or something and working on it together for like a couple hours                                  |
| 01:25:12   | like I could get a lot further or I'm doing this all day long at least so that's also a part of                                  |
| 01:25:17   | it is I've got all this fanciness that I want to it's it's much harder to share it than in the                                  |
| 01:25:23   | like super published format youtube like even my mistake it's just that youtube videos have                                      |
| 01:25:28   | a very specific if you don't say what you're talking about in the first three seconds people will                                |
| 01:25:32   | just click away and so it's like making understanding how youtube works I've been using clubhouse to                             |
| 01:25:39   | talk to other YouTubers and then now I feel like I know so much more how to make a succinct video                                |
| 01:25:44   | about one of these shortcuts and something like that so it's all coming together and I'm I want                                  |
| 01:25:51   | more from the community too I think I've been seeing people start to share more and blog and                                     |
| 01:25:57   | things like that which has been great and there's a lot I want to get app developers excited about                               |
| 01:26:02   | it too because we still need more shortcuts from apps they're they're we got to get a collective                                 |
| 01:26:09   | going well speaking of um you know app developers and so on I'm not going to make you a developer                                |
| 01:26:17   | in this scenario but say Tim Cook and the shortcuts team gave you a magic wand after fixing the bugs                             |
| 01:26:22   | you know what what are the key things that you would add next to ios and shortcuts to to make                                    |
| 01:26:29   | automation even more magical so I'm looking at the list that I put in here I can't tell oh wait                                  |
| 01:26:37   | it's trying to editorial this is quite a long list yeah I'm trying to count how many rows it is                                  |
| 01:26:42   | because i I think it took me 10 minutes to come up with like 45 things that they should add to                                   |
| 01:26:48   | shortcuts no 60 there it is um I think on the biggest level they need to build actions for                                       |
| 01:26:57   | their default apps to like set an example for developers because we have even some of like                                       |
| 01:27:03   | the first version of APIs for pages and things like that that can just open a pages document                                     |
| 01:27:09   | but I can't grab those documents append to them do and create new ones or anything like that and so                              |
| 01:27:15   | I think setting that example there could help other developers understand how to create shortcuts for                            |
| 01:27:22   | their apps or like the different versions too because I think there's a lot of ways to share                                     |
| 01:27:28   | stuff into apps but being able to grab them and act on them in shortcuts isn't something that seems                              |
| 01:27:34   | super common yeah I would absolutely agree with that I'm always disappointed whenever I check                                    |
| 01:27:39   | numbers going oh yeah so I could have it create a new number sheet and then uh oh no no no I can                                 |
| 01:27:44   | only append to an existing number sheet so I have to do a workaround where I open numbers                                        |
| 01:27:50   | and then I go back and I type in the name of the file and then yeah yeah exactly it's a little bit                               |
| 01:27:56   | of a disappointment though append to numbers does work really well I'll give some credit for that                                |
| 01:28:00   | I would say I'm trying to be specific because one thing that I really want that's just very                                      |
| 01:28:06   | specific is the ability to set playback destination to multiple HomePods using shortcuts I think it's                           |
| 01:28:12   | kind of absurd that we haven't gotten it at this point that's like that's the best way to do multi                               |
| 01:28:17   | room home scenes that doesn't exist and I feel like I mean I just for people listening we have a                                 |
| 01:28:22   | zoom open in both David and Rosemary we're like oh yeah come on because it is like every day I want                              |
| 01:28:28   | that so bad yeah exactly I don't I don't know if it's something that we haven't like clearly said                                |
| 01:28:34   | is like please this one thing would be great but even just like I think more clever uses of the                                  |
| 01:28:42   | default apps I was thinking like getting my daily agenda from the [[Apple Calendar|calendar]] app as an action or like                              |
| 01:28:49   | I think just advancing a lot of that stuff was is all the workflow action still and so                                           |
| 01:28:54   | hasn't really been expanded upon and made like improve the utility yeah I wonder if that's                                       |
| 01:29:00   | something third parties could jump on as well like could a company like flexing bits make a                                      |
| 01:29:07   | shortcut that gives you your daily calendar out of these three calendars without having to jump                                  |
| 01:29:11   | through the hoops of those old workflow actions you know and yeah they have they have a I think a                                |
| 01:29:18   | daily overview they have a daily agenda action but it's specifically for a fantastic help based yeah                             |
| 01:29:25   | yeah I do wonder work off your calendar sets because that could be the way to customise                                          |
| 01:29:29   | things yeah it does yeah but you have to use fantastical for that and for some people you                                        |
| 01:29:34   | know they they they don't want to use fantastical they want to use the native calendar action I do                               |
| 01:29:38   | wonder as specifically Matthew your example of you know the stock apps should have actions                                       |
| 01:29:44   | in some cases slash better actions in many cases I also wonder about a shortcuts offering                                        |
| 01:29:51   | pre-configured actions like find today's reminders that's something that you can do                                              |
| 01:29:56   | yeah with there's a great point with shortcuts actions as is but showing people how to configure                                 |
| 01:30:01   | that is a little bit tricky so giving you know having dummy actions that appear say in the menu                                  |
| 01:30:07   | which are just pre-configured with yeah okay so this is today's reminders or this week's calendar                                |
| 01:30:13   | events that would actually be really useful for some people because it would show people how to                                  |
| 01:30:17   | use these actions and how to build them themselves they have some like of the series shortcut ones                               |
| 01:30:23   | for like music is kind of auto-filling that for you but yeah that's a good point not necessarily                                 |
| 01:30:28   | just based off of what you would do also like common uses um yeah I do think even like the                                       |
| 01:30:34   | settings app should have either the ability to toggle features or open to those pages because                                    |
| 01:30:40   | where I'm still using all those url schemes that half broke for a year and then come back                                        |
| 01:30:46   | and things like that so I literally made a list of 60 like every single app just being able to                                   |
| 01:30:52   | open into files folders or pages like that um some more advanced stuff like oh another one that I                                |
| 01:31:00   | totally want and I've wanted for years is the ability for the show notification action to get                                    |
| 01:31:06   | open url parameter where when I show a notification like from like almost how push guts does where                               |
| 01:31:13   | you can once you drag on the action on the notification you can do something from there too                                      |
| 01:31:18   | I want the ability to create my own custom notifications where then once like I can almost                                       |
| 01:31:23   | like save a link for later in my notifications and then open that and go back to it that could be                                |
| 01:31:29   | deep link contextual computing like for days with that that would be awesome yeah I'm currently                                  |
| 01:31:35   | using the show notification with my car so when I connect to my car um if I haven't opened [[Data Jar]]                              |
| 01:31:41   | that day then it opens [[Data Jar]] because I was running into a bug I'm pretty certain it's just                                    |
| 01:31:46   | that I don't have enough storage space on my 256 gigabyte iPhone what kind of person am I that I'm                               |
| 01:31:51   | running out of storage space with that um but uh it would randomly lose or not be able to get all                                |
| 01:31:56   | the the the address lists that I built for my driving destinations so I opened [[Data Jar]] if I                                     |
| 01:32:02   | haven't opened it that day and then it shows me a notification so I can just easily tap on it while                              |
| 01:32:07   | I'm you know putting my seatbelt on to jump back to shortcuts and then continue the shortcut um but                              |
| 01:32:12   | it's yeah it's a little bit of a hack I think the biggest thing that apple could do to make                                      |
| 01:32:20   | shortcuts successful is shortcuts for Mac because ultimately I think especially with like people                                 |
| 01:32:27   | getting excited about the m1 max and just the shared I mean I don't know I'm not technical                                       |
| 01:32:33   | enough to call it a shared architecture but just conceptually like being more similar                                            |
| 01:32:38   | and having that functionality I think is where it would just be amazing and being able to customise                              |
| 01:32:44   | it across your devices and stuff like that would be so cool so also just to publicly eat your own                                |
| 01:32:50   | dog food I mean you're telling everybody that you can run iPad and iPhone apps on these computers                                |
| 01:32:55   | I feel like shortcuts is the ultimate flex there that's the ultimate like pressure on the that team                              |
| 01:33:01   | because shortcuts is ultimately like so native ios deep ios stuff that is like I mean even just                                  |
| 01:33:10   | like the fundamentals of um something like the health things and like that never existed or                                      |
| 01:33:15   | gps location yeah all that um so I'd love to see that kind of thing but I do think                                               |
| 01:33:23   | I think there's a lot to shortcuts now I think even I mean just like control basic controls over                                 |
| 01:33:30   | the Mac from shortcuts would be cool like being able to just turn on your computer and stuff that                                |
| 01:33:35   | you can do via ssh right now with shortcuts which most people probably don't know about but it's still                           |
| 01:33:41   | powerful there and having control over all your ios devices like I put I would I would use apple tv                              |
| 01:33:48   | shortcuts if they were on there yeah well I've got one that's not on your list Matthew which I think                             |
| 01:33:53   | you would like is uh just like they've got uh sections in the Mac in the app store for uh in                                     |
| 01:33:59   | app purchases and things like that I kind of feel that there ought to be a section for shortcuts                                 |
| 01:34:03   | where it lists what shortcuts are available um for for for an app because that's a data that                                     |
| 01:34:10   | could be gathered automatically yeah which which actions are available so that then you can scroll                               |
| 01:34:15   | down and you can look at an app before you even download it and go no no shortcut support not for                                |
| 01:34:20   | me thank you smack your mom or your mic there yes yes sorry for the sound effect people I got excited                            |
| 01:34:27   | and tap my microphone almost app clip style if you could run the shortcut but without even really                                |
| 01:34:32   | downloading the app or something like that and really understand what could be useful there that                                 |
| 01:34:37   | would be cool and I agree being able to find and understand what works which shortcuts is the other                              |
| 01:34:42   | thing like right now you have to go look in the apps category and just check which I do every time                               |
| 01:34:48   | well I'll tell you one way you can learn a lot is heading over to matthewcassinelli.com                                          |
| 01:34:53   | uh two t's two s's two l's you got all the double letters there we'll put a link in the show notes                               |
| 01:35:00   | go check an out gang and check out all of mat's uh amazing shortcut catalogue and all the great                                    |
| 01:35:06   | content he has maybe you want to sign up as a member uh since we really haven't touched our                                      |
| 01:35:11   | outline mat that means we're gonna have you back at some point so sure we're ready to go                                         |
| 01:35:15   | work next time or more because we'll probably have any questions I did tap into some of these                                    |
| 01:35:21   | sections about like how we're building them and the features I'd say most of it is is in there                                   |
| 01:35:25   | which is good but i I always love talking with you all I was I was just thinking before I was like                               |
| 01:35:31   | oh yeah these are my people like I anything I say you're not going to be like oh that's crazy                                    |
| 01:35:35   | why would you do that it's you're like oh man I wish I could do that so I love it yeah it's like                                 |
| 01:35:41   | therapy therapy for next exactly yep automation therapy well we are the automators you can find                                  |
| 01:35:48   | us over relay.fm/automators thanks again to matt for coming in thank you to our sponsors                                   |
| 01:35:54   | intro zone by Microsoft, ExpressVPN and DEVONthink and we'll see you next time goodbye everyone                                 |
