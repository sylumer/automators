---
status: "incomplete"
fc-date:
  year: 2021
  month: 03
  day: 26
fc-category: "podcast"
podcast: "Automators"
published: 2021-03-26
duration: 6516
formattedduration: "01:48:36"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/72"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators072.mp3"
episode: 72
title: "72: Quality of Life Automation on the Mac"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David explain many little automations that can improve your quality of life on your Mac.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 072 Discussion](https://talk.automators.fm/t/72-quality-of-life-automation-on-the-mac/10900)

# Sponsors
- [[Intrazone (Sponsor)|The Intrazone by Microsoft SharePoint]] - a bi-weekly conversation and interview podcast by the SharePoint team.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.
- [[Privacy (Sponsor)|Privacy]] - Smarter payments.

# Show Notes
### Credits
*The Automators*  
- [Rosemary Orchard](https://rosemaryorchard.com)  
- [David Sparks](https://www.macsparky.com)

*The Editor*  
- [Jim Metzendorf](https://twitter.com/jmetzendorf)

*The Fixer*  
- [Kerry Provanzano](https://twitter.com/ciaokerryciao)
* * *
- [All Automators Episodes](https://www.relay.fm/automators/archive)
- [BetterTouchTool](https://folivora.ai/)
- [Moom · Many Tricks](https://manytricks.com/moom/)
- [Keyboard Maestro 9.2: Work Faster with Macros for macOS](http://www.stairways.com/action/kmdiscount?REF9WZE)
- [Keyboard Maestro Window Management - MacSparky YouTube](https://www.youtube.com/watch?v=78NoxkrFbrU)
- [GitHub - Corcules/KMLink: Stream Deck plugin to drive Keyboard Maestro](https://github.com/Corcules/KMLink)
- [‎Amphetamine on the Mac App Store](https://apps.apple.com/gb/app/amphetamine/id937984704?mt=12)
- [CleanMyMac X: The Best Mac Cleanup App for macOS. Get a Cleaner Mac in Minutes.](https://macpaw.com/cleanmymac)
- [CleanMyMac X](https://macpaw.com/cleanmymac)
- [Automators #68: Stephen Millard and ThoughtAsylum - Relay FM](https://www.relay.fm/automators/68)
- [Grammarly](https://app.grammarly.com/)
- [‎Amphetamine on the Mac App Store](https://apps.apple.com/gb/app/amphetamine/id937984704?mt=12)
- [Rename files, folders and disks on Mac - Apple Support](https://support.apple.com/en-in/guide/mac-help/mchlp1144/mac)
- [Amazon.com: Elgato Stream Deck Mini - Compact Live Production Controller with 6 Customisable LCD keys, Trigger Actions in OBS Studio, Streamlabs, Twitch, YouTube and More (10GAI9901) , Black: Computers & Accessories](https://www.amazon.com/Elgato-Stream-Deck-Mini-customisable/dp/B07RL8H55Z?tag=macs03-20)
- [Mac Power Users #569: Contextual Computing - Relay FM](https://www.relay.fm/mpu/569)
- [Noodlesoft - Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/)
- [OS X Watermark PDFs Service](http://macosxautomation.com/automator/watermarkPDFs/index.html)
- [Keyboard Maestro Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/km)
- [Hazel Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/hazel)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to The Automators. I'm David Sparks and joined by my co-host, Rosemary Orchard.                  |
| 00:07      | And this is The Automators, where we talk about how to automate your technology to do                    |
| 00:11      | your bidding for you. Hello, Rose, how are you today?                                                    |
| 00:14      | Oh, I'm doing great, David. We have got a great show lined up. And when you suggested                    |
| 00:19      | this topic to me, I was there going, you know what, there are so many little things that                 |
| 00:23      | I've done, which really, really, you know, make my life easier. And so I love that that's                |
| 00:29      | what we're going to talk about today. Yeah. And we're focused on the Mac today. Sorry,                   |
| 00:33      | Windows users, but a lot of this stuff could probably translate over with a different set                |
| 00:37      | of apps. But we were just looking at all the little automation steps we take to improve                  |
| 00:42      | the quality of life on our Macs. And none of these were enough to give them their own                    |
| 00:48      | show. But when you put them together, there's actually a lot of stuff here to make your                  |
| 00:53      | day easier as you work on your Mac. So that's what we're going to talk about today.                      |
| 00:58      | We're starting with my favourite automation subject on the Mac. The one that's on my mind                 |
| 01:05      | the most lately is window management. I haven't talked about it on this show, but I went through         |
| 01:10      | a whole sordid tale where I traded my iMac Pro to a guy and, you know, money changed                     |
| 01:17      | hands. And I ended up with a ridiculously overrated, overpriced, I guess it's not overrated              |
| 01:26      | or overpriced, but it's out of my wheelhouse. I bought one of those fancy [[Apple]] monitors                 |
| 01:32      | through a trade. And it's way more monitor than I need. It's got a bunch of features                     |
| 01:39      | that I don't really use, but I figured the Intel iMac wasn't going to have value much                    |
| 01:45      | longer. So trading it for a fancy monitor that I can use with hopefully a future Apple                   |
| 01:50      | Silicon Mac just kind of made sense. Wait, David, are you telling me that you have a                     |
| 01:55      | crystal ball because you got rid of your iMac Pro before [[Apple]] killed the iMac Pro line?                 |
| 02:01      | Yeah, I felt better after that happened. I mean, I felt kind of sad because I thought                    |
| 02:04      | that was probably my favourite Intel Mac I ever owned, but, but, you know, getting rid                    |
| 02:09      | of it, you know, the writing was on the wall when you see that a MacBook Air can render                  |
| 02:15      | video faster than my iMac Pro. So you can only imagine what it's going to be like when                   |
| 02:21      | they release future [[Apple Silicon]] Macs that have more cores and are going to, you know,                  |
| 02:26      | just run circles around an iMac Pro. So, so anyway, I've got a very fancy monitor that                   |
| 02:31      | I feel guilty about owning because it's more monitor than I deserve. It does a lot in terms              |
| 02:38      | of brightness that I don't really need. But one thing I really like about it is the size.                |
| 02:45      | It is a 6K resolution as opposed to 5K and it's massive on my desk. So suddenly I have                   |
| 02:53      | more pixels than I ever could imagine using and that totally changed up my game for window               |
| 02:59      | management. Yeah, and window management is actually something I've been struggling with                  |
| 03:03      | quite a bit recently. I've realised that I need to, to get better at it as in when I'm                   |
| 03:10      | starting certain contexts, I really need something that'll just kick everything off and go this          |
| 03:15      | up over here, this up here, this up here, these apps over here on, on the secondary monitor              |
| 03:20      | or something I'll talk about in a, in a second. And everything else just gone, please. Because           |
| 03:26      | one of the things I've been discovering with is I've not been super great about, you know,               |
| 03:31      | getting rid of the things that I don't need before I start doing the next thing, which                   |
| 03:38      | is okay when you're your computer a lot, but not necessarily great when you've not been                  |
| 03:44      | at your computer as much. And that's something that I have been, you know, recently, I've                |
| 03:49      | had some time of work and I've spent a good chunk of it rewatching once upon a time on                   |
| 03:54      | Netflix, which is a great show. And I'm really enjoying it. And it's great to have a bit                 |
| 03:58      | of time to Zen out and just do nothing. But at the same time, you know, it means that                    |
| 04:02      | I come back. And today's Tuesday, I've still got the applications open from recording the                |
| 04:07      | last iOS today, last Friday, because that's how much I've used my computer since then,                   |
| 04:12      | not at all. And so that's something that I'm looking forward to hearing how you do this                  |
| 04:17      | so that I can hear how I can get better at it.                                                           |
| 04:19      | Yeah, well, there's really two elements to window management. The first is the simple                    |
| 04:24      | one just saying take this window and put it somewhere, which I think is something I want                 |
| 04:28      | to talk about because there's a, this is something automation can help. But then there's also            |
| 04:33      | like a second level to it where I would call it kind of setup automation, where not only                 |
| 04:38      | do you stick a window somewhere, but you stick like for a podcast, you'd stick the recording             |
| 04:43      | thing in one spot and the the outline in another spot. So you set up the computer to do a specific       |
| 04:49      | type of work. And that is also done through window management. And then you've got also                  |
| 04:54      | that super wide monitor, which I'm sure is making you struggle a little bit with where                   |
| 04:58      | do you stick things?                                                                                     |
| 05:00      | Well, not so much because I tend to use vertical thirds on this monitor. And I actually have             |
| 05:05      | a portable monitor, which is a 15 inch monitor. And it's powered by USB C. And so if you plug            |
| 05:12      | it into a USB C machine, then you can just plug in a USB C cable and it'll do everything.                |
| 05:16      | And I originally got this for travel. Oh, how naive I was being, but it works really                     |
| 05:21      | great for when I'm recording screencast for screencast online. And also the rest of the                  |
| 05:24      | time now I am using this vertically next to my monitor. And I've actually taken a leaf                   |
| 05:30      | out of your book David from back in the day when you had three monitors on the go where                  |
| 05:34      | you had your iMac in the middle and two portrait monitors either side. And I've got OmniFocus            |
| 05:38      | and my calendar on there. And that just means that I can always glance over and see, oh,                 |
| 05:43      | yeah, like, you know, these, these are the things that I should be seeing. And I've been                 |
| 05:48      | programming some things so that I use my [[Stream Deck]] and [[Keyboard Maestro]] to switch what             |
| 05:52      | I actually see in either of those. You know, when, when I switch context, so for example,                |
| 05:58      | if I'm podcasting, then it'll switch to podcasting perspective in OmniFocus and my podcasting            |
| 06:03      | calendar set in Fantastical, which is great, but I need to do more than just that because                |
| 06:10      | that's not really managing windows. That's, you know, sorting out the things inside the                  |
| 06:14      | windows. Yeah, agreed. And I like to, I think one of the things you do when you go to window             |
| 06:21      | management is to give some thought and some intentionality to where do you generally want                |
| 06:27      | things to show up? I mean, a lot of us have 27 inch screens on iMacs, which have a lot                   |
| 06:32      | of screen space on them, or maybe multiple monitors. We're going to put a flag in laptops                |
| 06:39      | and come to back that back to that in a minute. But for, you know, the bigger screens, like              |
| 06:43      | I generally like one of the things that occurred to me is I generally want that centre space             |
| 06:49      | as a workspace. Like that's where I've got the big [[Safari]] window or the big Microsoft                    |
| 06:54      | word or pages or [[Obsidian]] or whatever I'm working on. One of the advantages of the six                   |
| 06:59      | game monitor is I can actually split that centre space where I have like the top, maybe                  |
| 07:05      | 25% for some sort of reference in the bottom 75% for the big thing I'm working on and it's               |
| 07:12      | still fine, you know, because there's just so much space on this monitor. But I like                     |
| 07:16      | to think about the centre of the screen as my working space. And then on the left side,                  |
| 07:21      | I like to have my tasks and my calendar in my case, OmniFocus and Fantastical. And I always              |
| 07:28      | have OmniFocus on top and Fantastical on the bottom, but my calendar and an active task                  |
| 07:33      | list is always just right there for me to reference. And then on the right side, I think                 |
| 07:37      | of that as kind of like the, you know, like the drawer in your kitchen where you keep                    |
| 07:42      | a lot of extra stuff. So I'll have at certain points of the day, I'll have communications                |
| 07:46      | in there, but I usually keep that shut down because I don't want the distraction, but                    |
| 07:49      | like [[Slack]] messages, base camp, whatever different areas I'm communicating with people, I can            |
| 07:56      | keep that in little windows over there. I also keep it for, because I've been experimenting              |
| 08:03      | with Toggle, I actually use their app and keep it over there so I can see the active                     |
| 08:07      | time track along with the timing app, which gives me better data in terms of exactly how                 |
| 08:13      | much time I spent in different apps on my Mac. And, you know, just kind of like depending                |
| 08:18      | on if we're, if we're dealing with rain, I'll keep, you know, care at weather. But I've                  |
| 08:22      | got like a bunch of little like utility informational apps on the right side. And with this gigantic     |
| 08:29      | monitor, I can do that, but you could also do it with a 27 inch screen. Another alternative              |
| 08:34      | like Rose is doing is you could have literally a second screen attached, whether it's to                 |
| 08:38      | a laptop or an iMac screen, and you could, you know, designate as a space for those types                |
| 08:44      | of reference apps.                                                                                       |
| 08:45      | Yeah. Yeah. And I mean, that's something that I've experimented with as well, because                    |
| 08:50      | I have this ultra wide monitor. And when I say ultra wide, it's, it's a 34 inch monitor.                 |
| 08:55      | So it's pretty darn huge. It's about the same size as two normal monitors that you'd                     |
| 08:59      | be issued at work, which funnily enough is how I ended up with one in the first place.                   |
| 09:03      | Because my MacBook Adorable could only support one monitor. The MacBook Adorable is sadly                |
| 09:09      | no more. I still have a work issued one. And when I plug it into this monitor, it works                  |
| 09:13      | great. But, you know, this, this works really well. But most of the time I find that I tend              |
| 09:19      | to work in vertical thirds. And I'm, I'm pretty much at the moment exclusively using                     |
| 09:24      | [[BetterTouchTool]] for that, which is a great tool. And it's actually for mouse and, and                  |
| 09:31      | trackpad management, primarily. And you can do all sorts of things like connect Siri remotes             |
| 09:36      | and stuff to it. But what I'm using it for is what another smaller spin off application                  |
| 09:43      | from it can do is better snap tool. And this is integrated into [[BetterTouchTool]]. And you               |
| 09:49      | can create drag zone. So when you drag an application into that zone, then it automatically,             |
| 09:55      | you know, can resize it to something that you set up. And you can customise all of that                  |
| 09:58      | and set it up. But I've been struggling a little bit because it's a little bit fiddly                    |
| 10:03      | to do. And at one point, I thought I found a bug and it was losing things. It turned                     |
| 10:08      | out I had it set up on one computer and I didn't have it set up on another and exporting                 |
| 10:12      | it from one computer to another was a bit tricky. So I've been looking to improve that                   |
| 10:17      | because I pretty much set up vertical thirds on this monitor. And then I've got the natural              |
| 10:23      | snapping that it can do so it can automatically snap to halves and quarters, which is great              |
| 10:28      | if that's what you need. However, sometimes it's nice to have a few more options than                    |
| 10:35      | that. And that's what I would really like to improve on.                                                 |
| 10:38      | Yeah. And so that's the first part of this, we're talking about window management. And                   |
| 10:43      | you know, putting windows in their place and there's really, I can't understate this                     |
| 10:48      | if you bring intentionality to this. It really improves your productivity because your brain             |
| 10:55      | snaps to the place like I always look to the lower left corner to check calendar. I mean,                |
| 11:00      | because I've always, whether I had it on an external monitor or a corner of my gigantic                  |
| 11:04      | monitor, my calendar is always in the same place. And as silly as it sounds, removing                    |
| 11:10      | that little bit of friction and knowing that, you know, OmniFocus is up, is up on the left               |
| 11:15      | side and calendars down on the left side, it just makes it so much easier. I never think                 |
| 11:20      | about it, you know, whereas when you've got a bunch of windows that are stacked on top                   |
| 11:24      | of each other and you want to figure out what you're supposed to do next or if you're available          |
| 11:28      | next Tuesday, you've got to like go spelunking through your computer to find the window.                 |
| 11:34      | There is really something to be said for having this stuff organised and figured out.                    |
| 11:39      | Yes, yeah, there definitely is. And that's the thing, because I know as I work, you know,                |
| 11:46      | I tend to start the day with a relatively clean and tidy desk and then by the end of                     |
| 11:49      | the day, there's stuff all over my desk in a bunch of different places. But one of the                   |
| 11:53      | things I always do at the end of the day, I reset my desk, I put things back where they're               |
| 11:57      | supposed to go, the notes go back in the top left and the pens go in the pen heading next                |
| 12:01      | to it and things like that. And the buttons that I have dotted around my desk to do things               |
| 12:06      | go back into their normal location. And that works great. And that's something I need to                 |
| 12:11      | get better at doing on my Mac as well. Because, you know, my Mac is an extension of my desk.             |
| 12:19      | It's on my desk. Why shouldn't I reset things so that when I come to it the next morning,                |
| 12:23      | I can look at it and go, yeah, everything's in the right place. And if I can set it up                   |
| 12:27      | so that the windows are where they're supposed to be, I'll only focus my calendar here and               |
| 12:32      | maybe everything else is closed so that then whatever context I decide to choose, I can                  |
| 12:37      | open the right windows and put them in the right places. Then, you know, that's going                    |
| 12:42      | to be ideal for me. And hopefully help me stay on track. And so that's the aim at the                    |
| 12:50      | very least.                                                                                              |
| 12:51      | In theory.                                                                                               |
| 12:52      | Yes, everything is theoretical. My life is a beta. So it will probably change by this                    |
| 12:57      | time tomorrow. But that's okay, providing I'm, you know, I'm actually getting the work done              |
| 13:01      | as well as playing around and messing with the automations.                                              |
| 13:05      | Well, well, doing this through window management doesn't necessarily mean everything is set              |
| 13:12      | up exactly for a specific mode of work, but at least allows you to know that there's certain             |
| 13:17      | spaces you can stick this window. And I just sent Rosa a screenshot of mine.                             |
| 13:22      | Yeah, and I'm looking at it right now.                                                                   |
| 13:24      | And one of the things that I've decided is that I don't want these equal squares. I don't                |
| 13:30      | want like one third, one third, one third. I want different size spaces to use differently.              |
| 13:36      | For instance, on my monitor, because I'm putting everything on one monitor, the fantastic                |
| 13:42      | windows relatively small on the left side. But if I actually want to work on the calendar,               |
| 13:47      | I want to suddenly put that in the centre and make that the main focus and be able to                    |
| 13:51      | work on it, but then put it back where it belongs afterwards. And this is window management.             |
| 13:56      | I want that to happen quickly with keyboard shortcuts. We're going to talk about keyboard                |
| 14:01      | maestro for this purpose later, but there's a simpler and easier app to use for this for                 |
| 14:07      | just this purpose that I've been using. And it's called [[Moom]], M-O-O-M.                                   |
| 14:13      | Yeah. And because of you, David, I just downloaded this show because I saw what you wrote in             |
| 14:18      | our outline and went, wow, I need this. And now I've got it and I've just downloaded it                  |
| 14:23      | from the app store. That's all I've done so far. And I've got it here and I'm looking                    |
| 14:27      | at the preferences pane and going, okay, what is this? How do I use it? So, David, tell                  |
| 14:31      | me how you are using [[Moom]].                                                                               |
| 14:33      | Yeah. What [[Moom]] does, there's a couple of, I mean, it is a window management tool. And                   |
| 14:37      | out of the box, it does the stuff like [[BetterTouchTool]] where you can drag and you can                  |
| 14:41      | have hot corners and do things like that. But what really I think makes it exceptional                   |
| 14:46      | are two features. Number one is it allows you to do asymmetrical presets. So you can                     |
| 14:52      | set a grid with as many boxes as you want. Like the grid I use is 8x6. So it looks at                    |
| 15:01      | the screen and it splits the screen in 8x6 grids. And because I have the big 6K monitor,                 |
| 15:08      | that's what I use. If I had a smaller monitor, I might change that. And then it allows you               |
| 15:14      | to drag an app into that grid. So if you want it in the centre, maybe you're making it,                  |
| 15:21      | you know, a square 3 across to square, you know, 7 and then you pull down for the full                   |
| 15:29      | like height of the screen. And so then you've set it to that grid. And then you can put                  |
| 15:33      | other apps and other places on the grid and everything fits together very nicely. One                    |
| 15:39      | of the settings they have is to intentionally leave like a padding between those grid spaces.            |
| 15:45      | So like I think I have mindset at 10 points where you've got just a little bit of space                  |
| 15:49      | between the windows so everything isn't right on top of each other. And I think I find that              |
| 15:53      | little bit of padding actually helps me kind of like distinguish what is where and then                  |
| 15:59      | but you can change it from 10 points to two points, whatever you want. And but then you                  |
| 16:03      | see you designate these spaces and like I said earlier, some spaces are bigger than others.              |
| 16:08      | And I use the word spaces here. I'm not talking about the OS 10 feature where you have different         |
| 16:14      | screens. This is just like space on the single screen. But the advantage of [[Moom]] is you set              |
| 16:21      | those spaces and then you can save them as a preset. So you can say whatever the active                  |
| 16:26      | app is, I want to put it in my big centre space or I want to put it in my bottom left                    |
| 16:33      | space. So if you're in your head, you have these spaces designated, you can then save                    |
| 16:38      | those as presets and attach keyboard shortcuts to them. So then then the magic really starts             |
| 16:44      | happening. So like if I go to Fantastic Hell on the bottom left and I'm like, okay, now                  |
| 16:48      | I want to work on my calendar. I hit, what do I hit? I hit control option down arrow                     |
| 16:55      | and it puts it in my big centre space, which is at the bottom. Like I said earlier, I've                 |
| 16:59      | got the centre split top and bottom because this monitor has so many pixels. So I take                   |
| 17:06      | the calendar and immediately zip it to the big working section of the screen. So I can                   |
| 17:11      | do calendar work there. And when I'm done, I hit control shift down arrow, which is the                  |
| 17:17      | keyboard shortcut that I have saved to put it back in the left side at the bottom. And                   |
| 17:23      | you set these keyboard shortcuts to whatever makes sense for you. I have to actually look                |
| 17:26      | up my keyboard when I tell you, because at this point they're just internal to me. My                    |
| 17:30      | fingers just kind of do it. I don't really think about it. But that way I'm moving these                 |
| 17:36      | windows between different sized spaces as I go throughout the day. You know, when it's                   |
| 17:41      | reference, it goes over to the left. When I'm working on it, it goes to the centre and                   |
| 17:46      | all this stuff happens really without me thinking about it actively anymore. My fingers just             |
| 17:52      | go to the keyboard and you know, the windows zip around the screen. Another example is                   |
| 17:59      | like I usually keep [[Obsidian]] in the top like quarter of the centre screen because it's                   |
| 18:04      | usually referenced for me. And then I'm doing the active work, whether it be in [[Safari]] or                |
| 18:10      | a word processor or whatever, and the bottom three quarters of the centre screen. But sometimes          |
| 18:17      | I want to then like dig into [[Obsidian]] and do some real research through it. Then I just                  |
| 18:22      | push a keyboard shortcut and it takes over the bottom centre. So as I go through my day,                 |
| 18:27      | I can easily move these things around the screen using the [[Moom]] shortcuts. And the real trick            |
| 18:34      | for it was the idea that, okay, I'm not going to have equal size squares. I'm going to have              |
| 18:41      | pre designated graph squares that are different sizes. And then I can make an app big or small           |
| 18:47      | depending on what I'm doing at that moment.                                                              |
| 18:49      | That makes perfect sense because our needs aren't constant, are they? And therefore our                  |
| 18:54      | window management has to be flexible to reflect that. And that's something that I've really              |
| 18:59      | been struggling with. And I think, you know, you've really hit upon it there is that my                  |
| 19:02      | vertical thirds don't work when I need to do something that doesn't neatly fit into                      |
| 19:08      | thirds. And sometimes I need something that's, you know, fairly wide in the middle and then              |
| 19:13      | just a little bit of space down the edges or just need, sometimes I do just end up using                 |
| 19:17      | full screen and adding, you know, making sure that I've got sidebars opened on the left                  |
| 19:23      | and the right side of the application so that it's not too wide, but I can then concentrate.             |
| 19:28      | And I think that's going to be the key here for me using [[Moom]]. And so I've just been checking            |
| 19:33      | and I've made sure to include a link to the developer's website in the show notes so that                |
| 19:38      | we can, so that everybody can see that and find out how to use it. Because I think it's                  |
| 19:44      | probably going to be the right tool for most people because it does look pretty darn easy                |
| 19:49      | to use. Unlike, say, [[Keyboard Maestro]], which is extremely powerful, but can be a little                  |
| 19:56      | bit trickier, because I know you've been using [[Keyboard Maestro]] for this before David.                   |
| 20:00      | Yeah, I have. And historically, [[Keyboard Maestro]] has been my tool for this. I'm leaning towards          |
| 20:05      | [[Moom]] for and [[Keyboard Maestro]], by the way, remains my tool for setups, which we're going                 |
| 20:11      | to talk about next. But for window control, I feel like [[Moom]] is probably a little better                 |
| 20:17      | because that grid system is ingenious. You just drag it on a grid with [[Keyboard Maestro]].                 |
| 20:22      | It works on the basis of percentage of screen width. And I'll talk about that later how                  |
| 20:27      | you set that up. But it's not as clean and it's not as visual. And you just have to kind                 |
| 20:33      | of like guess it and then try it and see if this is right. Whereas with [[Moom]], you just                   |
| 20:37      | drag it and you're like, yeah, that's about right. And another feature [[Moom]] has is not                   |
| 20:42      | only to save a grid space that you can move an app to, you can actually set up an entire                 |
| 20:49      | set of grids with specific apps and you press a button and it auto sorts them into that.                 |
| 20:55      | It's not as powerful as [[Keyboard Maestro]]. And it almost feels to me like now [[Moom]] is                     |
| 21:00      | straining to setup land. And I'm not sure it's as good at that as [[Keyboard Maestro]] is.                   |
| 21:06      | But for the basic issue of setting up windows and being able to quickly move them around                 |
| 21:11      | to different spaces on your screen. And also, honestly, that padding around the windows                  |
| 21:16      | makes a huge difference for me. I just, I mean, I can't share the screen that I shared                   |
| 21:21      | with Rose because it's got a bunch of stuff on it. But maybe I'll...                                     |
| 21:25      | Yeah, it does. And I'm very intrigued by some of the things that I'm seeing here, David.                 |
| 21:29      | It's all good stuff, people. But I can tell you there's some cool things maybe on it.                    |
| 21:34      | Maybe I'll figure out a way to save this and put it in the show notes with data in it.                   |
| 21:39      | That's not private. But either way, having a little padding around it, as you look at                    |
| 21:45      | mine, Rose, what do you think of the little tin pixel pad around the apps?                               |
| 21:50      | I think that it works for you, but it will probably drive me crazy. And the reason for                   |
| 21:55      | that is I don't have a fairly plain background on my Mac. I have a nice colourful background              |
| 22:00      | with...                                                                                                  |
| 22:01      | Sure.                                                                                                    |
| 22:02      | I mean, it's not literally rainbows and unicorns, but it's kind of like that. And so seeing              |
| 22:07      | all those different colours would drive me a little bit crazy between the applications.                   |
| 22:12      | But if you... So David's got a fairly plain gray background here. And I know it's not                    |
| 22:17      | just solid gray as a background, but it's fairly plain. So that works really well. And                   |
| 22:22      | I like how this looks on your screen, David, for sure.                                                   |
| 22:27      | This episode of Automators is brought to you by The Intro Zone. I love finding new podcasts              |
| 22:32      | to listen to. And it's even better when they can actually bring something useful to my                   |
| 22:36      | life as well as providing me with enjoyment. If you're looking for a new show to listen                  |
| 22:40      | to, The Intro Zone is a bi-weekly podcast with conversations and interviews on how Microsoft             |
| 22:45      | SharePoint, OneDrive, and related tech can work for you. You'll hear from guest experts                  |
| 22:50      | behind the scenes and out in the field, so you can see how SharePoint fits into your                     |
| 22:54      | everyday work life to easily share and manage content, knowledge, and applications. Each                 |
| 22:59      | show covers a bunch of segments, like news and announcements, a focused topic of the week,               |
| 23:05      | news perspectives, FAQs of the week, and upcoming events. And the topics for each show are               |
| 23:10      | really interesting. Previous episodes cover migration to the cloud, the power platform,                  |
| 23:15      | and API and teamwork. I recently listened to their episode on fantasy productivity, and                  |
| 23:22      | I thought it was really interesting to hearing them talk about exactly the problem that I've             |
| 23:26      | seen from both sites, which is actually implementing a technology and getting users to use it.           |
| 23:31      | And one of the things that they pointed out, which was really useful to me, and a very                   |
| 23:36      | easy way to see where my teams have messed up in the past, was the rolling things out                    |
| 23:40      | to one department problem, where one department uses something and others don't, making                  |
| 23:44      | it more difficult. So you can take the information that they provide and use it with other technologies, |
| 23:49      | like Microsoft Teams. Go and listen to it now. Just search for The Intro Zone wherever                   |
| 23:54      | you get your podcasts. That's I-N-T-R-A-Z-O-N-E. Or just click on the link in the show notes.            |
| 24:02      | Go check it out. Our thanks to The Intro Zone by Microsoft SharePoint for their support                  |
| 24:06      | of this show and all of Relay FM.                                                                       |
| 24:08      | So, David, one of the things that we kind of touched on, slash, danced around in the                     |
| 24:14      | window management segment was the workspace setup and getting applications open when we                  |
| 24:21      | need them, and closing them when we don't need them, and things like that. And I know                    |
| 24:27      | I'm using [[Keyboard Maestro}] for this. I'm guessing you're probably using [[Keyboard Maestro}], too?             |
| 24:31      | Yeah. I mean, historically, that's been the whole thing. I did a video on YouTube on                     |
| 24:35      | it a couple of years ago, and a lot of people have used that as a basis. And so, window                  |
| 24:42      | setup with [[Keyboard Maestro}], as I was saying, is possible. You can put it on. And the way                 |
| 24:48      | he did it, which I think is really actually pretty clever, is you set the window size                    |
| 24:54      | based on a percentage of screen size, because if you're in an iMac and then you go over                  |
| 24:58      | to a laptop, you know, if you set specific pixels, it's just going to be a mess, and                     |
| 25:04      | it's not going to work. Where you use a percentage of screen size, you're able to have it adapt          |
| 25:09      | to whatever your current, you know, machine is, or if you get a different size monitor                   |
| 25:13      | and everything will still work. And the way it does it, there's a built-in step there,                   |
| 25:19      | but it's screen visible is where you pick the top left pixel, and then you do a percentage               |
| 25:26      | based on that. And if you look at the video that I did on YouTube, everything's in there,                |
| 25:32      | but you can even address secondary and third monitors through this system, and you can                   |
| 25:38      | set a specific percentage. And you can get those gaps or make things tighten up by using                 |
| 25:43      | that specific percentage. So say, you know, make it start at the top left corner and make                |
| 25:48      | the width 33% of the screen. And then you have another window set up where you say, start                |
| 25:55      | at the top left corner plus 33% of the width. If you can follow with me, I'm, this is hard               |
| 26:01      | on a podcast here, someone talk about this, you can start a second box that is just to                   |
| 26:05      | the right of that first one. And so there's a way to do this. It is not as user-friendly                 |
| 26:12      | as moon for just setting windows, but you can do it. But what [[Keyboard Maestro]] really                    |
| 26:17      | brings to the table is you can say not only that you're going to put a window in this                    |
| 26:21      | very specific spot on the screen, but that window is going to have OmniFocus in it. And                  |
| 26:26      | it's going to show the MacSparky planning perspective, because you can trigger a keyboard               |
| 26:31      | shortcut that shows up the specific perspective. And then you can say, and then I'm going to             |
| 26:36      | open a new tab in OmniFocus and show the MacSparky active perspective, because I've got                 |
| 26:41      | one showing the stuff I'm planning to do and stuff I'm actively working on. So I can put                 |
| 26:46      | both of those in that window. And, you know, you start thinking that through with all the                |
| 26:50      | different apps you use, like if you do stuff on the web and you go to a specific Google                  |
| 26:55      | doc, you can open that Google doc, or if you want to open a specific document in Microsoft               |
| 27:02      | Word, it can do that. Or, you know, just think through all the stuff you do. You know, open              |
| 27:08      | up Fantasticalendar, open it up to your work calendar, but close your personal calendar.               |
| 27:13      | All of that stuff is addressable with keyboard Maestro, because keyboard Maestro can do almost           |
| 27:17      | anything. And then you start thinking about it. You can put together a, you know, a setup                |
| 27:24      | for the day job, or you can put up a setup for doing your family tree or anything that                   |
| 27:30      | you work on repeatedly on your Mac, where you trigger a keyboard Maestro script, and                     |
| 27:35      | your Mac just assembles itself into the toolset that you want, with the apps that you want               |
| 27:41      | in the place that you want them. And that is powerful. Yeah. Yeah. So one of the things                  |
| 27:48      | that I've been doing, or how I started with this was I actually built a [[Stream Deck]] profile              |
| 27:56      | for different contexts. So I've got a podcasting one with separate folders for automators,               |
| 28:02      | nested folders, iOS today. And then inside of that, I had buttons for each of the applications           |
| 28:09      | that I would need. And to start with, this was a case of, you know, identifying what                     |
| 28:13      | I actually use. And that worked. But it meant that I had to press each of the individual                 |
| 28:17      | buttons to start applications. And then for most of the show, you know, those buttons                    |
| 28:23      | were completely and utterly unnecessary. And what I really needed was to run all of them                 |
| 28:27      | at the same time. So I then combined them. And thanks to your tip, and in the last show,                 |
| 28:34      | I am actually using the KM link plugin for [[Stream Deck]] now, instead of the [[Keyboard Maestro]]              |
| 28:41      | plugin, because this lets me select the macro from the drop-down, and a little hack for people            |
| 28:47      | if they're finding that the menu of the different [[Keyboard Maestro]] macros is too long, just              |
| 28:54      | edit the macro that you're looking for, because it's easy to find in [[Keyboard Maestro]], and               |
| 28:59      | then it'll be right at the top in your last edited. And that's what I've done with all                   |
| 29:02      | of them. I've just added a comment and then deleted it. And then boom, it's right at the                 |
| 29:07      | top. So I've been using that a lot. And then I, at the moment, have just been opening all                |
| 29:14      | of these. And I was actually thinking about maybe now I've got [[Moom]] combining opening                    |
| 29:19      | the applications and then organising them, because most of my podcasting, I've got pretty                |
| 29:24      | much the same applications. And they need to go to pretty much the same place. And so                    |
| 29:29      | I don't want to duplicate all of that logic every single time. That seems unnecessary.                   |
| 29:35      | But at the same time, you know, I want things to be good and to actually work. So maybe                  |
| 29:41      | it's probably better to stick with one solution instead of, you know, crossing the streams.              |
| 29:46      | Oh, no, you shouldn't do that. You should cross. You absolutely should cross the streams                 |
| 29:51      | here because this is the trick, right? You use OmniFocus to open up. I'm sorry, use keyboard             |
| 29:57      | Maestro to open an app like OmniFocus and put it into the setup that you want to see                     |
| 30:02      | the data that you want. But because [[Moom]], you can apply custom keyboard shortcuts to                     |
| 30:08      | file placement. You just pull out the file placement elements of the keyboard Maestro                    |
| 30:13      | script. And then you just trigger a keyboard shortcut, which you can do easily with keyboard             |
| 30:18      | Maestro. So you open the app, load all the data you want into it. And then the last thing                |
| 30:24      | you do is press the [[Moom]] keyboard shortcut where so you can put the window where you                     |
| 30:28      | want it to be. Right. That makes a lot of sense. And it just so you're using the window                  |
| 30:33      | management tools of [[Moom]], plus all of the awesomeness that is keyboard Maestro. And                      |
| 30:39      | then what I do with that is I combine all of that into a single script and keyboard Maestro.             |
| 30:45      | So where I while I can have the individual scripts to like get the Google Doc open and                   |
| 30:50      | put it in a specific place. But if I'm going to do a podcast, I'm going to have one that                 |
| 30:54      | opens up the recording tool and opens up the page with the advertisements on it and opens                |
| 31:00      | up the page with the outline on it and, you know, opens up a message window to rows. And                 |
| 31:05      | so all the tools I need on my screen at the moment that I'm recording a podcast, I combine               |
| 31:10      | them into one keyboard Maestro script. And, and where historically I had some very fiddly                |
| 31:16      | window placement scripts I wrote in keyboard Maestro, you know, the 33 percent thing.                    |
| 31:21      | Now I took, I gutted those out and I'm putting [[Moom]] keyboard shortcuts in. So it just fits               |
| 31:27      | to my [[Moom]] keyboard, you know, grid and everything just shows up the place I want it. The other          |
| 31:35      | piece of that keyboard Maestro script, by the way, that you need to do is you need the                   |
| 31:39      | first thing you need to do is you close all windows before you run the script because                    |
| 31:42      | you don't want to put windows on top of windows. It gets nutty, but, but this is really not              |
| 31:47      | that difficult. Anybody listening to this can do this. And this kind of ties into my                     |
| 31:54      | whole idea of contextual computing, but just imagine sitting at your computer and pressing               |
| 31:58      | one button and your computer suddenly, you know, does a whole bunch of work for you and                  |
| 32:05      | everything you need to do that specific type of work, you've created the ideal environment               |
| 32:10      | for you to do that work. You know, maybe part of it is you close Twitter in the messages                 |
| 32:15      | app because the type of work you're doing requires focused work and you don't want to                    |
| 32:18      | be interrupted. But you can put all that together with a combination of keyboard Maestro and             |
| 32:24      | [[Moom]].                                                                                                    |
| 32:25      | Yeah. And I think that's what I'm going to be doing here because, you know, that's what                  |
| 32:29      | works for me. Or, you know, and that's where I've been struggling a little bit with keyboard             |
| 32:34      | Maestro because it's possible to do all the stuff with keyboard Maestro. It's just been                  |
| 32:38      | a little bit fiddly to get everything done. But keyboard Maestro has actually meant that                 |
| 32:41      | my workspace setup for iOS today is considerably more stable because I realised, so for people           |
| 32:49      | who don't know iOS today is a video as well as an audio podcast. And for the video, Mikah                |
| 32:55      | and I tried to show our iPads and our iPhones with, you know, what we're actually doing                  |
| 32:59      | on them as part of the show. But in order to do this, we need to use another piece of                    |
| 33:03      | software which [[Skype]] doesn't natively support anymore. So you have to run a terminal script              |
| 33:09      | first. So instead of me, you know, I have a [[Skype]] button in my iOS today segment, which,                 |
| 33:17      | you know, I'm in the process of replacing with a whole series of things that will just                   |
| 33:21      | open everything at once. But what it actually does is it checks if [[Skype]] is open. If [[Skype]]               |
| 33:25      | is open, it quits [[Skype]]. And then it runs this terminal command for me and then it opens                 |
| 33:30      | [[Skype]] and then it opens the [[Skype]] preferences so I can check to make sure that my virtual                |
| 33:34      | camera is working so that I can pipe my iPhone and my iPad through so that my workspace is               |
| 33:38      | actually set up for me to be able to do the work instead of me thinking it's set up and                  |
| 33:42      | then finding out that it's not, which, you know, would not be great if you're there trying               |
| 33:47      | to show an iPad and it turns out you can't.                                                              |
| 33:49      | Yeah. Yeah, that makes sense. I think one of the things you need to do before you start                  |
| 33:54      | down this road is make big boy and big girl decisions about the dock. You know, are you                  |
| 34:00      | going to have the dock on and where is it going to be? You know, I keep moving it around                 |
| 34:04      | on my screen. For the last two weeks, I've hidden the dock as just an experiment. And                    |
| 34:10      | you know what I find is I don't really miss it. You know, I thought that I was referencing,              |
| 34:15      | you know, because you can show lights to show whether an app is open or not or jump to an                |
| 34:20      | app with it. But I never go down with my mouse to the dock to activate a specific app. You               |
| 34:26      | know, that is something that I do with [[Alfred]] or if I did window management, right, I don't              |
| 34:30      | need to bother because it's already on the screen.                                                       |
| 34:34      | So I've been hiding the dock and actually it's been fine. But either way, when you start                 |
| 34:38      | building these spaces for the windows, you want to account for it. And like [[Moom]] does                    |
| 34:42      | that, if you have the dock on the left or the right or the bottom, it draws the grid                     |
| 34:46      | around it so you don't cover it up. And so you can do that. But figure it out because                    |
| 34:52      | the grid size will change if you keep moving your dock around after you set all this up.                 |
| 34:56      | Yeah. And then you're going to have to tweak things. Yeah. So I've just put my dock back.                |
| 35:02      | And I'm sorry, TJ Luoma. My dock is now at the bottom, but it's hidden. And I'm going                    |
| 35:08      | to see how I go without a dock. Because I do have a hidden dock most of the time actually                |
| 35:13      | when I'm doing a screencast online things, just because, you know, you don't want the                    |
| 35:18      | dock to be showing all the time. And yeah, I'm going to have a play and see what this                    |
| 35:23      | is like. I'm thinking this might work out well for me. I'm also thinking that I might                    |
| 35:28      | change my mind in a couple of days and be confused about my lack of dock. And why did                    |
| 35:34      | I get rid of the dock? And then I'll remember, oh yes, because I was talking to David and                |
| 35:37      | podcasting. And that's the beauty of recording automators. You end up changing everything.               |
| 35:42      | Yeah. I guarantee you like two, I guarantee you like two months from now, my dock will                   |
| 35:46      | be showing again. I won't really know why. Yeah. It's the thing that's always the most                   |
| 35:51      | Yeah. But really, I haven't, for the last couple of weeks, I realised, because, you know,                |
| 35:56      | the reason to leave it apparent is so you can check it. You can flick your eye over to                   |
| 36:00      | see, you know, the downloads folder or whatever. But I disabled like the recently loaded apps.           |
| 36:06      | I don't like that feature of the dock. So I don't even have that turned on. If I want                    |
| 36:10      | to get to my downloads folder, I hit command space D O and [[Alfred]] gets me there and puts                 |
| 36:16      | it on my screen. So I just, I just don't think about the dock. And I think I like keeping                |
| 36:22      | it around because it's such a Mac thing as a Mac power user quote unquote, you know,                     |
| 36:28      | I just like, it just makes me happy to look at it, I guess, but it's stupid. And the pixels              |
| 36:34      | are too precious and hiding it has not been a problem for me. I maybe that'll stick. I                   |
| 36:39      | don't know. But but I've been a lot more intentional about my spaces lately, because I really do         |
| 36:44      | think this idea of spending the time to set up these setups and put your computer, you                   |
| 36:50      | know, bend your computer to your will automatically whenever you change gears actually really            |
| 36:54      | does help your brain change focus and get your work done.                                                |
| 36:58      | Yeah. And I think we should reiterate that point that you made before David about closing                |
| 37:02      | all open windows. I actually don't close open windows. I quit applications. And I do                     |
| 37:09      | have some applications that stay open all the time. And you can control that in in keyboard              |
| 37:13      | maestro and you can set applications that should not be quit. But and so I've got a                      |
| 37:17      | couple of those which just stay open OmniFocus and Fantastical are part of those. And I also             |
| 37:24      | don't quit [[Safari]] or close [[Safari]] windows. Because sometimes it's, you know, I've gone                   |
| 37:30      | through and I curated a list of links in preparation or something. And then, you know, when you          |
| 37:37      | actually do it, you don't want those to disappear. And maybe an open browser window is not the           |
| 37:42      | best tool for that. Maybe I should save everything into [[Drafts]]. But when I'm just going to have          |
| 37:45      | to reopen it again anyway, I would prefer to keep it. So yeah, closing windows and quitting              |
| 37:51      | applications I think is a critical step in getting your workspace set up the way that                    |
| 37:55      | you need to do for a good quality of life automation on your Mac.                                        |
| 37:58      | Yeah. One thing that does not add to your quality of life is manually opening applications               |
| 38:04      | and then dragging them on the screen and trying to rearrange them every time you want to change          |
| 38:09      | your flow. That is not quality of life. Yeah, spend some time on this. It's a fiddly thing.              |
| 38:17      | And like the nerd part of me loves the fiddliness of this, but it really isn't that fiddly.              |
| 38:22      | And for me, the trick was discovering [[Moom\|Moom's]] ability to use keyboard shortcuts to put windows            |
| 38:28      | in a very specific place that I can very easily define, easier than with [[Keyboard Maestro]].               |
| 38:36      | And then combining that with the power of [[Keyboard Maestro]] and suddenly like, man, I'm                   |
| 38:40      | off to the races. Rose mentioned KMLink earlier, the way I use that is so I've got buttons               |
| 38:45      | across the top row of my [[Stream Deck]] that just like one of them is legal writing. One                    |
| 38:52      | of them is legal admin. One of them is MacSparky planning. So I've just got a bunch                     |
| 38:58      | of different buttons. And as I go through my day, I'm like, okay, now I'm going to                       |
| 39:02      | spend an hour working on writing blog posts. And I press a button and suddenly my computer               |
| 39:06      | magically turns into a blog writing super machine. And that's exactly what you want.                     |
| 39:12      | You want to change context and have your computer say, okay, buddy, here I am. I'm setting up            |
| 39:17      | for you. We're good. And I find that a very good use of automation.                                      |
| 39:24      | Yes, absolutely. And that's the thing. It's all about improving life and making everything               |
| 39:29      | much easier so that you do just go, oh yeah, done. And then when you think about it, you're              |
| 39:35      | blogging.                                                                                                |
| 39:36      | Before we move on, I think you're on a, you have both a 13 and a 15 inch laptop at this                  |
| 39:42      | point.                                                                                                   |
| 39:43      | I have a 12, a 13 and a 15. So to be clear, before people think I'm crazy, two of those                  |
| 39:51      | are work machines and while those is personal, the 12 inch for work is considered a laptop               |
| 39:56      | and the 15 inch is a desktop. Because you're allowed one laptop and one desktop. And at                  |
| 40:00      | that point, they didn't have Mac minis. And so there was a 15 inch MacBook Pro and my                    |
| 40:05      | MacBook SSD died. So I needed a new computer stat. And that's what was available. So that's              |
| 40:12      | what I got. So yeah, I have multiple machines running around. And I use all of them depending            |
| 40:19      | on what I need to do.                                                                                    |
| 40:21      | Yeah. Okay. So this, this is where all the setup talk women talking assumes you've got                   |
| 40:26      | enough pixels to push around where you can make things fit inside. The only laptop I                     |
| 40:32      | have currently is a 13 inch. And yeah, it is, you know, all the magic I was talking about                |
| 40:38      | earlier is going to be hard on a 13 inch screen.                                                         |
| 40:41      | It is tricky. I would, I would start by saying 13 inches is an inch more than 12 inches and              |
| 40:48      | the window management on a 12 inch laptop is tricky. On a 13 inch laptop after using                     |
| 40:53      | a 12 inch, it feels so much easier. So worst case scenario, folks borrow somebody's 12                   |
| 40:59      | inch machine for a little while and see how you feel about it. However, you know, the trick              |
| 41:06      | is, um, for me, like, you know, figuring out how much do I actually need to see on this                  |
| 41:13      | machine at this time. And also using spaces, spaces in the, the [[Apple]] sense of this space                |
| 41:20      | has these applications or this space has these applications on it and using the multi finger             |
| 41:24      | swipe to swipe between the spaces, because that's what I do, especially on the 12 inch                   |
| 41:29      | and the 13 inch. And I find that that really works. You know, I can say, okay, I'm, I'm                  |
| 41:34      | here and I'm, I'm using this application and this application is open for reference                      |
| 41:38      | and is taking up maybe a third of my screen on the right. And the, the main application                  |
| 41:42      | is two thirds of the screen on the left. Um, and then I can swipe back and I can see my                  |
| 41:46      | mail, um, and, um, Microsoft Teams. And I swipe again and I can see OmniFocus and Fantastic              |
| 41:53      | Al. Um, and, you know, and it's, it's a couple of swipes around to get to what I need to                 |
| 41:59      | see. Now, ideally I plug these into external monitors, hence the portable 15 inch that                   |
| 42:04      | I've got that currently is pretty much remaining docked, um, on, on my, uh, on my Mac mini,              |
| 42:10      | um, as a vertical extra display. Um, but I have used it before, um, when I've needed                     |
| 42:16      | to with, with the laptops, just because that's how it works and it works great.                          |
| 42:20      | Yeah. And, and so if you can plug a laptop into a big monitor, like I've got mine plugged                |
| 42:25      | into this massive monitor and, and I spend most of my Mac time at my desk with that big                  |
| 42:32      | monitor and all the benefits. So I just spent the last, you know, X number of minutes explaining.        |
| 42:38      | But occasionally I do find myself with just a laptop on my lap and the, the way I've been                |
| 42:43      | trying to do this and I've tried different methods. Like I've tried having all the windows               |
| 42:48      | just on one screen, but then jump between them with the dock. I've tried, you know,                      |
| 42:52      | different things. Like apples combined app in one window mechanism is horrible. Um, like                 |
| 42:59      | if you, it just, it's very tedious to set up. You can't automate it, but the idea of                     |
| 43:06      | full screen apps on a 13 inch actually works for me pretty well. And, um, what I do is                   |
| 43:13      | kind of like rows of machine use the swipe. Like I, a four finger swipe up on my laptop                  |
| 43:18      | gets me into mission control mode and every window, if it's in full screen is labeled.                   |
| 43:24      | And so you can see, you know, the names of the apps and even it gives you a preview of                   |
| 43:29      | it if once it loads in, and I can jump between them pretty quickly, but like referencing one             |
| 43:34      | bit of data to another still isn't really ideal on a laptop. And, um, what the default                   |
| 43:41      | setting on this, if you go into system preferences, uh, centre mission control, um, the very top         |
| 43:51      | option is automatically rearranged spaces based on most recent use.                                      |
| 43:55      | Yeah. I don't know who thought of this, but I'm pretty certain that they don't use spaces                |
| 44:00      | the way everybody else would use them because I hate it when I try to go right and whatever              |
| 44:06      | was there, isn't there anymore because I used it. And so it moved left.                                  |
| 44:10      | Yes. And I've, I've got muscle memory built in and I know where things are. Um, the other                |
| 44:15      | option that's here that I should, I should mention is group windows by application. Sometimes            |
| 44:21      | I like to have say multiple OmniFocus windows open or multiple [[Safari]] windows or, you know,              |
| 44:27      | whatever. Um, and I do not like my windows to be, to be grouped by applications. So that                 |
| 44:33      | one is turned off as well.                                                                               |
| 44:34      | Yeah, me too. But I don't know if that's a default, but the top one, the automatically                   |
| 44:38      | rearranged is a default. I think this came up on MPU recently. I talked about it on some                 |
| 44:42      | podcast recently, but this is the road to madness. I mean, every time you go up to,                      |
| 44:49      | every time you swipe a different app is there. So you have no idea of knowing what you're                |
| 44:53      | going to be fighting. And, uh, so I actually have in my head a very specific arrangement                 |
| 44:58      | of the windows, um, you know, in my head that [[Safari]] obsidian, fantastical OmniFocus mail.               |
| 45:06      | So I like in my head, I know what it, where is in relation to what. And if I'm actually                  |
| 45:12      | doing something where I need to reference, I'll add additional spaces to the left of                     |
| 45:15      | the desktop. So like I can have like a, you know, a word processor next to a [[Safari]] browser              |
| 45:22      | for reference or something where if I'm doing something very specific, I can put a temporary             |
| 45:26      | like set up there, but I always keep the other stuff exactly in the same space. And I find               |
| 45:31      | it, my brain was again, you know, contextually can get to that stuff very quickly. But if                |
| 45:36      | you were to rearrange those every time I use a different app, I would be throwing my computer            |
| 45:40      | through a window. I really don't understand why that's the default. So go in and turn                    |
| 45:44      | that off if you want to try and use these, but                                                           |
| 45:46      | I should also mention that if, if you're using a laptop, then of course you're going to have             |
| 45:49      | a trackpad. If like me, you've also got an external trackpad that you're using on, on                    |
| 45:53      | the desktop, um, then you can use this too. You can also, uh, swipe by default. I believe                |
| 45:59      | it's three fingers up and down, um, to, to see, um, if you go up, then that's all of                     |
| 46:05      | your open windows in these current spaces. Uh, but across the top, you also have a list                  |
| 46:09      | of your spaces and you can drag and drop these around to rearrange them. Um, and that, that              |
| 46:16      | can be great for getting things set up. Um, I also, uh, in mission control, there is an option           |
| 46:21      | to say that displays have separate spaces. Now, if you change this, you're going to need                 |
| 46:24      | to log out and log back in again. Um, but that can be really useful if you do have multiple              |
| 46:29      | monitors, um, because then you can say, okay, I want these, these spaces over here on this               |
| 46:34      | monitor and everything else on this monitor or these based on this monitor, those spaces                 |
| 46:39      | on that monitor and then everything else on, you know, whichever monitor, depending on                   |
| 46:42      | how many monitors you've got. And then that means that you can swipe around, um, on, on,                 |
| 46:47      | you know, on multiple monitors. Um, and you don't necessarily have the same things in                    |
| 46:53      | both places. And if you do have a laptop that's plugged into a monitor, then, um, have a play            |
| 46:58      | with that, that setting and see whether or not you like it. I personally find it's great                 |
| 47:03      | to know that these applications are on this screen and those applications are on the other               |
| 47:07      | screens. Um, and also with that swipe up, I can easily see my spaces. And if something                   |
| 47:11      | ends up in the wrong place, then I can drag and drop it and fix it.                                      |
| 47:14      | What I would say though, the, the part that I find most distracting about this setup                     |
| 47:19      | is that the finder like takes over sometimes. Like if you have a file on your screen and                 |
| 47:25      | you want to just hit the space bar to preview it, oftentimes it will jump to the finder window           |
| 47:31      | for no, for apparently no reason. I don't know what's going on with the interaction between              |
| 47:36      | the desktop and the finder when you use full screen apps. And it feels to me almost like                 |
| 47:40      | a bug, but it's, it's very frustrating to like have your computer suddenly jump seven spaces             |
| 47:46      | to the right. Yeah. Yeah. That, that is definitely annoying. And that is where I can see the             |
| 47:52      | automatically rearranging spaces coming in handy. Cause then you would just swipe back                   |
| 47:55      | once and you'd be right where you were. Yeah. But then everything else is messed up. So,                 |
| 47:59      | you know, do you really want that? But there is no way to really use automation                          |
| 48:04      | to put the spaces where you want them. To my knowledge. And that would be,                               |
| 48:10      | that would be great if [[Keyboard Maestro]] could address those. I, I believe they've tried. I,              |
| 48:13      | I think there's the ability to swipe. There's some things you can do with [[Keyboard Maestro]],              |
| 48:17      | but it, it's not like, you know, make this setup of spaces just like you can do this setup of windows.   |
| 48:24      | This episode of the Automators podcast is brought to you by ExpressVPN at expressvpn.com                 |
| 48:32      |/automators. You can get high speed, secure and anonymous VPN services with an extra three          |
| 48:38      | months for free. How did you choose which internet service provider to use? The sad thing is most        |
| 48:45      | of us have very little choice because ISPs have a lot of control in the regions they serve.              |
| 48:50      | They can then use that control to take advantage of customers like us.                                   |
| 48:55      | Data caps, straining throttles, the list goes on. But worst of all, many ISPs log your internet          |
| 49:01      | activity and can sell that data to other companies for advertising. I protect all of my devices with     |
| 49:08      | ExpressVPN, which means ISPs wouldn't be able to see my internet activity. That's right. I use           |
| 49:15      | ExpressVPN to stick it to the man. So what is ExpressVPN? It's a simple app for your computer            |
| 49:22      | or smartphone that encrypts all of your network data and tunnels through it a secure VPN server          |
| 49:29      | so that your activity stays your activity. Just think about how much of your life is on the internet.    |
| 49:34      | Every site you visit, video you watch or messages you send could be tracked and used without your        |
| 49:40      | permission. That's the reason I recommend ExpressVPN as the best way to keep your information private.   |
| 49:47      | You just download the app, tap one button on your device, and you're protected. And ExpressVPN does      |
| 49:53      | all of this without slowing your connection. That's why it's rated the number one VPN service            |
| 49:59      | by CNET and Wired. What I love most about ExpressVPN is its simplicity. They've got an app,              |
| 50:04      | you open it, you push a button, and you're secure. It works the same on the Mac. So                      |
| 50:08      | I can always make sure that button is turned on and I'm protected via ExpressVPN.                        |
| 50:14      | I was given a free subscription when they first started sponsoring years ago, but                        |
| 50:18      | that ended and I gladly paid. I've been a paying subscriber now for two or three years.                  |
| 50:23      | It's just a great service and you don't have to think about it. You never notice any delay               |
| 50:29      | and you're always protected. So stop handling over your personal data to ISPs and other companies        |
| 50:34      | who want to profit from your information. Protect your information with the VPN I trust                  |
| 50:39      | to keep me private online. Visit expressvpn.com/automators. That's E X P R E S S VPN.com           |
| 50:49      |/automators to get three extra months for free. One last time that's expressvpn.com/          |
| 50:55      | automators right now to learn more. Our thanks to ExpressVPN for their support of the automators         |
| 51:01      | and all of relay FM. All right, we've done entire shows on file management, but I think there's          |
| 51:07      | like a segment in quality of your life on file management too, because this is another thing             |
| 51:13      | like window management that just takes a lot of time is very tedious and it's easy to make mistakes      |
| 51:18      | if you don't bring automation to bear. And I thought it'd be fun just to kind of check in on ways        |
| 51:23      | we're doing this. Yeah. And so something that a lot of people don't know, which I'm going to start       |
| 51:29      | with is Finder can rename multiple files at the same time. And to do this, it's incredibly logical.      |
| 51:37      | You select multiple files at the same time, and then you right click and rename then has an ellipsis     |
| 51:42      | at the end. That's dot dot dot. And then when you do that, you've got options to add text. You can       |
| 51:48      | you can format, you can add a name and an index and name and a counter the name and a date               |
| 51:53      | before the name after the name, custom formats and everything you can add text replace text.             |
| 51:58      | You can do all of the things. And oh my gosh, is this such a useful trick? Because you don't need        |
| 52:04      | to start digging around with things like automator, quick actions or anything like that to to just do    |
| 52:10      | an incrementing series of numbers or to add the date that a file was created to the start of it.         |
| 52:17      | You can do that inside of Finder and just be done with it. And that's amazing.                           |
| 52:22      | I had no idea this existed until you put it in the outline.                                              |
| 52:25      | That's the thing. If David Sparks doesn't know about it, most people probably don't,                     |
| 52:30      | because it's a kind of hidden feature. You just wouldn't think that you could do it.                     |
| 52:35      | And I can't remember how I came across this. I think it was somebody on Twitter alerted me to it.        |
| 52:39      | But wow, is it great? And I've used this so many times just because it works really well.                |
| 52:47      | And you can, you know, and where you're doing the the format rename, it's got custom format.             |
| 52:52      | And you do have to have something in there for it to do that. But oh my gosh, that's this.               |
| 52:58      | It's just great. And wow, am I impressed with this?                                                      |
| 53:02      | Yeah. And [[Apple]], I haven't found a knowledge based article on it, but they do have a user guide.         |
| 53:09      | They've got some details on this. And we're going to put that in the show notes and                      |
| 53:14      | and let people check that out. But it is really nice to know you can do this without a third party app.  |
| 53:19      | So yeah, it really is. And it can just be as simple as, you know, you've you've dragged,                 |
| 53:25      | you have a camera with an SD card, and you're getting all those photos off of that camera.               |
| 53:31      | And you just want to rename them all to the date that they were taken,                                   |
| 53:35      | and the name of the camera that you took them on. Well, you can do that.                                 |
| 53:39      | You know, you'll have to manually and put the name of the camera that you took them on.                  |
| 53:42      | But then you can, that's doable. And you don't need to download special applications for it,             |
| 53:49      | or any of that, you just have to use Finder. And Finder is great, because everybody has to               |
| 53:56      | have it installed on their Mac. So I give it 10 out of 10 for that.                                      |
| 54:01      | Another tool, the third party tool that I think is great for doing like file                             |
| 54:08      | quality of life management stuff is [[Hazel]]. And this is one, I mean, I did a whole field guide            |
| 54:13      | on it. And, you know, we've done show, we've given [[Hazel]] its own show on the automators,                 |
| 54:19      | I don't know if we have. I am not 100% certain there, David, I will just double check.                   |
| 54:25      | There's a secret page with the automators archive on Relay FM where I can just search everything.       |
| 54:31      | And [[Hazel]] is not in any show title. So I am going to put that down in our outline for the                |
| 54:40      | not too distant future. But it's just a great app for what I would call quality of life problems.        |
| 54:46      | I mean, it's a whole system. You can create a whole filing system on your Mac with [[Hazel]].                |
| 54:51      | And maybe we'll talk about that when we give it a whole show. But there's little things it does          |
| 54:56      | that I find super useful. A good example is we have recently with the death of [[Skype Call Recorder]]       |
| 55:05      | moved out of [[Skype]] as our backbone for podcasting. We now do it in Zoom. But because Zoom has the        |
| 55:12      | ability to make the backup recording as part of its service. So whenever we finish a recording,          |
| 55:18      | a file gets a folder gets saved to my desktop with all the backup recordings. Now, our primary           |
| 55:24      | recording is done with [[Audio Hijack]] from [[Rogue Amoeba]]. And, you know, like 99% of the time,                  |
| 55:31      | that's the file that gets turned into the podcast. But you never know if something                       |
| 55:35      | goes wrong, you want to backup. But I get these folders just on my desk full of it. And I make           |
| 55:40      | three podcasts. So I get a lot of these folders. And they're not folders that I want to. I never         |
| 55:46      | really access the data in there. And I mean, I know it's there. If something goes wrong,                 |
| 55:50      | I can go get it. But it's something that takes up a bunch of space. It's on my desktop. It's got a       |
| 55:54      | really goofy name. And I don't want to spend a lot of time thinking about it. So I have a [[Hazel]]          |
| 56:00      | roll that if I tag the file as podcast backup, that's what I do. I could also base, you know,            |
| 56:07      | automate the rule based on the name. But because the names change, it's actually kind of difficult to    |
| 56:12      | come up with a good naming scheme for it. But so it just takes me a second to add a tag called           |
| 56:17      | podcast backup. In fact, I can automate that with k[[Keyboard Maestro]], which is probably a                 |
| 56:22      | discussion for another day. But I have the ability to apply the tag with a very quick keyboard           |
| 56:27      | shortcut. And so it puts the tag on, and then [[Hazel]] will look for any file or folder on the              |
| 56:33      | desktop with this tag. And when it sees it, it moves it to a, what I call a podcast archive              |
| 56:40      | folder. And then in addition, [[Hazel]] then monitors that folder and anything that's over 60 days old,      |
| 56:48      | it just deletes. So, you know, usually, I know within a week, whether I need the backup file,            |
| 56:54      | but just out of an abundance of caution, I made it two months. And so all I do is when we finish         |
| 57:00      | the show, I put the podcast archive tag on it, and then it, or backup tag on it, and then it             |
| 57:06      | goes to that folder, and then it gets deleted. And I never think about it. So I'm automating the         |
| 57:10      | process of moving it to a folder and checking how long it's there and deleting it. Those are three       |
| 57:17      | steps that I would have to do manually without [[Hazel]]. And that's just like an example of little          |
| 57:22      | everyday problems that you can do with [[Hazel]]. I mean, like I said, you can also run your whole           |
| 57:28      | file system on it. But just like whenever you have these little things that show up in your life         |
| 57:33      | that you find yourself repeatedly doing, often if it involves a file, your [[Hazel]] license was like 30,    |
| 57:41      | 40 bucks, solves the problem for you. And that's the beauty of it. So I share the nested folders,        |
| 57:49      | folders inside of [[Dropbox]] with Scotty, but Scotty only has a free plan for [[Dropbox]]. And                  |
| 57:54      | for what he uses it for, it's not worth him upgrading to two terabytes of space,                         |
| 58:00      | because it goes from five to two terabytes, five gigabytes to two terabytes, which is kind               |
| 58:04      | of a large jump. So what we've done instead is we have crafted a highly technical system                 |
| 58:11      | where he adds the word archive to the start of any of the folder names that he no longer needs           |
| 58:17      | access to. And then [[Hazel]] on my end just watches it and goes, oh, [[Yoink]]. And it grabs it, it moves       |
| 58:22      | the folder to a different [[Dropbox]] folder, which is not shared with him. It's a shared folder in          |
| 58:27      | that he has a link so he could go in and get something if he needed to, but it's not directly            |
| 58:31      | shared with him taking up his [[Dropbox]] space. And then it removes the word archive from the front         |
| 58:35      | so that everything's alphabetically sorted. And it works really, really well, because he can rename      |
| 58:41      | the folder as soon as he's done with everything for the episode. And bam, we're finished. And oh,        |
| 58:46      | my gosh, do I love that? It works so well. Because it's simple. We decided to, you know,                 |
| 58:52      | take the logical approach of keep it, you know, silly simple. And we did and it works.                   |
| 58:59      | Yeah. And that's kind of a different element of automation between two people.                           |
| 59:04      | And quite often the easiest is what I think of like a sock on the door knob kind of automation           |
| 59:09      | where you add a tag or you just change the name a little bit between the two of you. And then you        |
| 59:14      | can have your automation process on either computer takeover or maybe in this case intentionally         |
| 59:21      | on one computer because he doesn't have the big account. And it's really that stuff is not that          |
| 59:27      | hard to put together. Another little like quality of life thing for me is I'm, you know, I'm big on      |
| 59:36      | [[Obsidian]] lately. And they're going to have a mobile app, but it's not out yet. And a lot of times I      |
| 59:42      | write things in [[Drafts]] that I want to put into a specific place in [[Obsidian]]. And I was looking at        |
| 59:48      | all sorts of ways to do that, you know, because I'm an automated right, you know, can I make it so I     |
| 59:53      | write directly into the [[Obsidian]] vault, but I'm using their end-to-end encrypted libraries that          |
| 59:57      | doesn't really work. But I do have the file system available on my Mac. And but I'm writing these        |
| 01:00:03   | notes on the iPhone. You know, like just literally right before we start recording a day, a client       |
| 01:00:08   | called me and had a couple of questions and I wanted to record that call into an [[Obsidian]] note.          |
| 01:00:15   | So I quickly dictated it and I made a [[Drafts]] action that saves it to a very particular folder            |
| 01:00:22   | in [[Dropbox]]. And the reason I use [[Dropbox]] for this one is because you can address individual              |
| 01:00:27   | folders in [[Dropbox]] where with the iCloud you can't. So back on my Mac, [[Hazel\|Hazel's]] looking at that folder    |
| 01:00:34   | and one of them is, you know, client communication notes, whatever, blah, blah, blah. But it sees a      |
| 01:00:39   | new file appeared there and it just drops it right into [[Obsidian]] in the right place. So,                 |
| 01:00:46   | you know, I can go to my Mac and everything is already there and I didn't have to spend a                |
| 01:00:50   | bunch of time moving files around. So just like little quality of life things. Yeah.                     |
| 01:00:55   | Yeah, I actually have a folder in [[Dropbox]] called automated actions, David. And this has a series         |
| 01:01:01   | of subfolders and basically the idea of it is, is stuff gets put in here to make magic happen.           |
| 01:01:07   | So there's all kinds of nerdy things in here, like there's a screen cost online thing where              |
| 01:01:12   | there's a JSON file and it takes that information, [[Keyboard Maestro]] actually takes that information      |
| 01:01:16   | and does magic with it. But speaking of podcasts, [[Dropbox]] and [[Keyboard Maestro]], I actually do want       |
| 01:01:23   | to share one of the things that I've done, which is when I finished recording an episode of automators,  |
| 01:01:29   | I have a [[Keyboard Maestro]] macro pop up and it asks me what the, what the episode number is.              |
| 01:01:37   | And so I input the episode number. So for this one, it's 72. And then there are three buttons            |
| 01:01:43   | on this. And it's showing me the name of the file. And it says, you know, do you want to move it?        |
| 01:01:48   | Do you want to keep it? Do you want to just ignore it? Or do you want to delete it? And this is great    |
| 01:01:52   | if we very occasionally have a full start to recording, then I can just nuke the files in one            |
| 01:01:57   | go. Or I can just go actually, you know, what leaves them there just in case there was something         |
| 01:02:01   | great in that. Or I can move them. And then when they get moved, they get renamed. So they've got        |
| 01:02:07   | the episode number at the start and they get put in the right folder for our wonderful editor gym        |
| 01:02:12   | to go ahead and, you know, do the magic on to make this into a full show. Because [[Keyboard Maestro]]       |
| 01:02:17   | can do things very similarly to how [[Hazel]] can do things as well. It's not the same. It's a very          |
| 01:02:22   | different application. And if you if you want the very, I wouldn't say very, very simple approach,       |
| 01:02:28   | but the simpler approach where it's just for file management, then of course [[Hazel]] is your app.          |
| 01:02:32   | But if you want to go a bit fancier, then [[Keyboard Maestro]] can do a lot with file management too.        |
| 01:02:40   | Yeah, another app that does good, like automation file stuff is [[DEVONthink]] they're                      |
| 01:02:45   | sponsored today, full disclosure, we didn't know that when I put this note in. And we may at some        |
| 01:02:51   | point do a show on automation and [[DEVONthink]] because it's there's just so much there. But               |
| 01:02:56   | they have kind of a version of [[Hazel]] built into [[DEVONthink]] so you can automate files in your            |
| 01:03:01   | [[DEVONthink]] library. Another one I did what [[Hazel]] recently is we're heading into tax season and I'm      |
| 01:03:07   | getting a bunch of forms. And it's the same thing I use a [[Keyboard Maestro]] script to apply               |
| 01:03:11   | two tags. One is the word tax and the other one is 2020. And it automatically saves it to a              |
| 01:03:17   | particular folder and copies it to another folder that I share with my accountant. So,                   |
| 01:03:22   | you know, just like all these little things that normally take time to do you can automate your          |
| 01:03:27   | way out of on the Mac with something like [[Hazel]]. And in addition to saving you time,                     |
| 01:03:33   | because it's automation, it always works, it always puts the file in the exact right place.              |
| 01:03:38   | But you do some stuff with [[Hazel]] kind of quality of life stuff that's with their other features,         |
| 01:03:42   | right? Yeah. So [[Hazel]] actually has a whole bunch of things built in that it can just do for you          |
| 01:03:49   | just by virtue of having the application installed. You don't need to set up rules or folders or any     |
| 01:03:53   | of that, which is the first one is emptying trash. So [[Hazel]] can empty trash. I believe it can remove     |
| 01:04:02   | things that are older than a certain date. And whenever your trash gets over a certain size by           |
| 01:04:07   | default. And for anybody who's not yet on Big Sur, there is a new version of [[Hazel]] for Big Sur,          |
| 01:04:13   | which is a standalone application is no longer a system preferences pain. But it's, you know,            |
| 01:04:18   | it's working really, really well for that. And they did a great job overhauling it actually for          |
| 01:04:24   | this. Sorry, I just need to click skip this version. There we go. So trash, you can have it              |
| 01:04:29   | delete files sitting in the trash more than a week and keep the trash size under a gigabyte.             |
| 01:04:33   | Now, personally, I have increased this because just like you, David, where you keep things for           |
| 01:04:37   | 60 days where theoretically you only need it for seven, I find it's always better to err on the          |
| 01:04:43   | side of caution with emptying my trash because once the trash is emptied, it's gone. Now,                |
| 01:04:49   | I do have time machine backups. I also have the local snapshots it does. So for whatever reason,         |
| 01:04:56   | my backup drive becomes disconnected, I can get things back within 24 hours on my local machine.         |
| 01:05:01   | But, you know, I prefer not to, you know, go through the hassle of restoring things from                 |
| 01:05:05   | backups if I don't need to. So I've, I've upped that to 10 gigabytes. You can also say oversized         |
| 01:05:11   | files should be left as is or deleted immediately, which would mean as you try to delete something       |
| 01:05:17   | that's over, say, 10 gigabytes in my case, then I can say, leave it alone or get rid of it immediately.  |
| 01:05:24   | Again, abundance of caution, I've said, leave this as is, but that's fine. The other approach            |
| 01:05:31   | the other the other feature, which you can just enable in the preferences is under the                   |
| 01:05:35   | the trash option in the preferences is app sweep. So to delete an application on Mac OS,                 |
| 01:05:41   | you you just delete it. That's it. But app sweep can go through and just like applications like          |
| 01:05:50   | App Cleaner or CleanMyMac and things like that where it can go through and look for everything         |
| 01:05:55   | else. [[Hazel]] can do that too. And it can go through and find the support files. So that'll be             |
| 01:06:00   | things like little preference files that get left here and there and stuff like that.                    |
| 01:06:05   | And [[Hazel]] can get rid of that for you. So, you know, you might want to enable that if that's             |
| 01:06:10   | how you prefer to remove your applications. Personally, I usually use recently it's been                 |
| 01:06:15   | CleanMyMac until until recently it was App Cleaner. But both of those work really well.                |
| 01:06:23   | And I really like having these options built in [[Hazel]] because it helps make sure that my trash           |
| 01:06:32   | isn't insanely full with loads of items, especially if you haven't used your Mac in a while.             |
| 01:06:37   | You know, as you heard, I have three laptops, I don't use all of them at the same time.                  |
| 01:06:41   | And in fact, one of my work laptops is really just there is a backup should anything go wrong.           |
| 01:06:46   | It's nice to know that when I go back I've knocked off files in the trash from six months ago.           |
| 01:06:50   | This episode of Automators is brought to you by privacy.com. It's not easy to deal with your             |
| 01:06:57   | finances online. And as somebody who spent a fair amount of time traveling, and I've lived in lots       |
| 01:07:02   | of different countries, I've certainly had my fair share of buying things online and not knowing if      |
| 01:07:07   | really where I'm putting in my credit card information is super secure, but knowing that                 |
| 01:07:11   | it's literally the only way to get what I need. Privacy is a tool that makes it easy to manage           |
| 01:07:17   | your financial lives online while keeping your most important information secure. By generating          |
| 01:07:22   | virtual numbers, privacy masks your bank information. So you never have to worry about giving out to     |
| 01:07:27   | people you don't know online. Handing over your credit card details to a new shop, even if it            |
| 01:07:34   | looks like it's using Shopify or something can be a little bit worrying. If you don't know them,         |
| 01:07:39   | and you don't know really who's behind them, then are they really safe? That's what makes                |
| 01:07:44   | services like privacy important, because even if they are safe, you know that you're safe because        |
| 01:07:50   | you're giving them a number that's used just for them. Just like we try and keep our email               |
| 01:07:53   | details secure, we should do the same with our financial details. And that's what privacy lets           |
| 01:07:59   | you do. Take back control over your payments. Decide who can charge your card, how much,                 |
| 01:08:04   | and how often. So there are no more surprise subscriptions. And you can close cards at any time.         |
| 01:08:09   | Plus, you can make sure that you are never accidentally billed twice or upgraded to another              |
| 01:08:13   | service without your consent. And privacy is partnered with the good folks at 1Password.               |
| 01:08:19   | You can create, use, and save privacy cards directly within your 1Password dashboard.                  |
| 01:08:23   | All virtual cards created in 1Password have the same security benefits as your other privacy cards,    |
| 01:08:29   | and you can set spend limits, create single use or merchant lock cards whenever you want.                |
| 01:08:33   | Head to privacy.com/automators and sign up for a new account. New customers                        |
| 01:08:40   | automatically get $5 to spend on your first purchase. Go to privacy.com/automators                 |
| 01:08:45   | and sign up now. Our thanks to privacy for their support of this show and Relay FM.                      |
| 01:08:51   | Maybe the ultimate quality of a life tool on your Mac is [[Keyboard Maestro]]. We've already                 |
| 01:08:57   | mentioned it several times during the show. Yeah, it's come up how many times now? I mean,               |
| 01:09:01   | I don't know if we should talk about [[Keyboard Maestro]] or [[Stream Deck]] being the bright texture            |
| 01:09:08   | of the automators podcast, where you need to drink a sip of whatever your favourite beverage is           |
| 01:09:13   | every time you hear it. I highly recommend Cook Zero. That's my current beverage of choice.              |
| 01:09:18   | But take your pick there. But both applications really do make my life on my Mac much, much easier.      |
| 01:09:27   | And one of the ways that I really dove into [[Keyboard Maestro]] and improved how I use my Mac               |
| 01:09:36   | with it was by looking at the triggers, actually, David. I don't know where you really started.          |
| 01:09:40   | Did you look at the actions first or the triggers? But I found looking at the triggers                   |
| 01:09:44   | made it much easier for me. Yeah, I mean, my brain wants to index everything. In fact,                   |
| 01:09:50   | if you go to the [[Keyboard Maestro]] field guide, there's like a whole section that covers every            |
| 01:09:55   | trigger and every action. And I feel like kind of just going through those videos and understanding      |
| 01:10:00   | what can be a trigger and what it can do as an action, then you just put that in your brain.             |
| 01:10:05   | And then as you're going through your day, you realise, oh, here's something I could automate.           |
| 01:10:09   | I could pull a trigger out of this or that. And there's just so many you can use. And                    |
| 01:10:14   | for quality of life, little hacks that just make your day go easier, I would agree,                      |
| 01:10:20   | understanding how to use those triggers is key. Yeah. Yeah. And I think that's the thing. Because        |
| 01:10:27   | [[Keyboard Maestro]], one of the things that I have done with it is I have it start programs when            |
| 01:10:33   | specific drives are connected to my Mac. So I have some external hard drives. I don't keep them          |
| 01:10:38   | plugged in all the time. There's things like bootable backups and things like that. And I have           |
| 01:10:42   | it say, when this volume is mounted, and it knows then that when the bootable backup volume is           |
| 01:10:52   | connected, yes, I'm very creative when naming external hard drives, that it should open a                |
| 01:10:59   | Carbon Copy Cloner for me. So that application pops up. And I know that I can do this in carbon          |
| 01:11:06   | copy cloner, but I consolidated all of this stuff into one application so that I know if I'm looking     |
| 01:11:13   | for I plug this in and something happens, I'm looking for a [[Keyboard Maestro]] and that's where            |
| 01:11:19   | I'm looking to find this. Because the other trigger that you can use is also a USB device.               |
| 01:11:26   | And so whenever my my XLR interface is connected to my Mac, then it pops open a different series         |
| 01:11:33   | of applications and does things. And now I've actually switched XLR interfaces recently. I'm             |
| 01:11:37   | now using a Focusrite for anybody who's curious. And so this remains permanently plugged in because      |
| 01:11:42   | unlike Zoom, it doesn't have battery and, you know, to be powered up and things like that.               |
| 01:11:47   | It just is, which works great. But, you know, I added that as well, because                              |
| 01:11:53   | the same thing can trigger any of these. And so whenever I do that, it pops open a couple of             |
| 01:11:56   | things so that I can make sure that everything is running smoothly. And when you plug something into     |
| 01:12:02   | your Mac, it's usually because you're going to do something. And so I love the fact that, you know,      |
| 01:12:08   | you can say, okay, this volume, any volume actually is mounted. Okay, just open Finder for me.           |
| 01:12:14   | Whenever I plug in a drive, open Finder, done. And that actually is a very simple macro. You             |
| 01:12:21   | select your trigger, you have one action and done. And that's it. And that can make your life much       |
| 01:12:26   | easier. And I know that my dad now has [[Keyboard Maestro]] because whenever he connects a drive,            |
| 01:12:30   | it does that. Yeah, I mean, so often when you plug something into your computer,                         |
| 01:12:37   | it's, it's about to result in a repeated behaviour that, you know, every time you plug your camera        |
| 01:12:42   | card and you do this, every time you plug in your backup drive, you do that. And because                 |
| 01:12:48   | [[Keyboard Maestro]] can recognise something being plugged into your computer as a trigger,                  |
| 01:12:53   | that is like healthy ground for automation. And another one I do is my scanner. You know,                |
| 01:12:59   | I have a Fujitsu scan snap. It could work wirelessly, but the way I'm set up, I just do the scanning on  |
| 01:13:05   | the weekends and I plug it directly into my computer, put it on my desk and, you know,                   |
| 01:13:09   | I'm right there. So I just work through it. And one of the advantages of that is, as soon as             |
| 01:13:14   | [[Keyboard Maestro]] is always watching and says, oh, he just plugged a scanner in. Well, then               |
| 01:13:19   | you need to open Preview on the right side of the screen. You need to open up the Fujitsu software       |
| 01:13:23   | on the left side of the screen. You need to, you know, there's a whole bunch of things that happen.      |
| 01:13:27   | And that's stuff I would normally do manually, but, you know, getting back to quality of life.           |
| 01:13:34   | Why not have [[Keyboard Maestro]] do all that stuff for me? And it took                                      |
| 01:13:37   | all of about two minutes to set that script up one time. And now for the rest of my life,                |
| 01:13:42   | when I plug in my scanner, my computer says, oh, he's in scanning mode. In fact, one of the things       |
| 01:13:47   | I do is I open up a YouTube window because when I'm scanning, I'm just sitting there. So I'll            |
| 01:13:52   | watch something on YouTube while it happens. So it's just goofy, but why not bend your computer          |
| 01:13:59   | to your will, like we say at the top of every show? And this is a great example of an excellent          |
| 01:14:05   | trigger in [[Keyboard Maestro]] that can lead to a lot of quality of life stuff. And another really          |
| 01:14:10   | good trigger for quality of life improvements with [[Keyboard Maestro]] that you should be aware of is       |
| 01:14:15   | the Wi-Fi connection, because that's another good one where it's, it'll say, well, he connected to       |
| 01:14:20   | the home Wi-Fi or he just connected to the work Wi-Fi or he connected to Starbucks. And maybe            |
| 01:14:26   | the apps you open, the settings you have all change depending on where you're located. Well,             |
| 01:14:31   | why would you do that manually? Just use that Wi-Fi trigger. Yeah, yeah. And that was something I        |
| 01:14:36   | used back in the day where I did something as crazy as going to the office. Wow. It's in a               |
| 01:14:41   | hole in the country now. I don't do that anymore, David. A little less relevant at the moment,           |
| 01:14:45   | but hopefully that's about to change. Yeah, I'm sure for many people that sort of thing will             |
| 01:14:50   | return. And it was really simple. But the other thing that I've done is [[Keyboard Maestro]] also has        |
| 01:14:58   | a menu bar option. And I have a lot of things in the menu bar. And I used to have a little meeting       |
| 01:15:07   | option in my menu bar, where if I ran it, it would hide a whole bunch of applications and                |
| 01:15:12   | things like that and just actually close the windows on pretty much everything except just               |
| 01:15:17   | a few things. So I knew that there was nothing on my Mac that was going to pop up during the             |
| 01:15:23   | meeting that shouldn't. Because it wasn't that I was doing anything bad on my Mac. It was more           |
| 01:15:28   | the point of I learned very quickly that certain people in management, if they saw that I've made        |
| 01:15:32   | notes on the possibility of doing something, would then immediately want it even if it was               |
| 01:15:36   | six months of work. And of course, they wanted into. And so it was for the best to make sure             |
| 01:15:41   | that these things were hidden from said people and therefore could not inadvertently pop up in a         |
| 01:15:46   | meeting. Well, we were still in the pre discussion stages with my boss. And so this, you know, was       |
| 01:15:53   | pretty much just a save me unnecessary work and stress button. And I would highly advise that            |
| 01:15:58   | everybody have a button like that, because I know now when I go into meetings, my meeting button,        |
| 01:16:05   | now I'm at home does things very differently. It just hides everything else. But it, you know,           |
| 01:16:10   | it actually, thanks to push, get sense and notification to my phone so that my phone can                 |
| 01:16:15   | I tap it and it automatically then puts my phone and do not disturb for the length of the meeting        |
| 01:16:21   | and things like that. But a meeting button is something that you can easily do with [[Keyboard Maestro]].             |
| 01:16:26   | Yeah. I mean, so much of this stuff, I wish shortcuts had, you know. Yeah. Yeah. Same.          |
| 01:16:35   | I think we all wish the shortcuts had many of the things that [[Keyboard Maestro]] had,                      |
| 01:16:39   | but also at the same time, sometimes I wish [[Keyboard Maestro]] had some of the things that                 |
| 01:16:42   | shortcuts does, just because, you know, they're two very different applications.                         |
| 01:16:48   | And they were built very differently in the beginning. And it's interesting to see the                   |
| 01:16:53   | crossover between them. Though sometimes I do wish, and maybe maybe we should ask Peter,                 |
| 01:16:58   | the developer of [[Keyboard Maestro]], if he can do this, if he can alias some of the actions,               |
| 01:17:04   | so that when I search for things with the shortcuts name, I still find it in [[Keyboard Maestro]] and I      |
| 01:17:09   | can learn what its real name is. Because every software I look for something, I can't find it,           |
| 01:17:15   | and I know it exists in [[Keyboard Maestro]]. I just have to Google around until I stumble across the        |
| 01:17:19   | right name for it. Yeah. Like, you know, a little quality of life thing I did recently with [[Keyboard Maestro]]     |
| 01:17:26   | is a [[Grammarly]] workflow. I'm a [[Grammarly]] subscriber, so a lot of the stuff I write gets          |
| 01:17:33   | run through the [[Grammarly]] filter. It's not an end all, but I mean, it's a good, it's the only            |
| 01:17:38   | Grammar Checker that I've ever really had any reliance on. You know, like the ones built in              |
| 01:17:43   | the word processors are actually pretty bad. But there's a couple of problems. The first is,             |
| 01:17:49   | it's really a web service. It's not an app. Their app is, I think it's an electron piece of garbage.     |
| 01:17:56   | And their app is slow and just, it's not worth it. So when I do this stuff, I always do it on            |
| 01:18:03   | their website. But there's a whole process I got to go through. Like, I've written it in [[Drafts]]         |
| 01:18:08   | or [[Obsidian]]. I've written it somewhere. And then I want to run it through [[Grammarly]]. So I found          |
| 01:18:14   | myself doing the same thing every time, you know, select, copy, you know, open up a website, paste,      |
| 01:18:20   | you know. So I put all that into a [[Keyboard Maestro]] script. The only tricky thing about it was,          |
| 01:18:26   | to assemble it was very easy, you know, Command A selects all the text. Command C copies the text.       |
| 01:18:34   | So I'm running two keyboard commands in, in a [[Keyboard Maestro]]. Open [[Safari]] to the [[Grammarly]]             |
| 01:18:40   | website. And this is where it gets tricky. There's not a keyboard command on their website to open       |
| 01:18:46   | up a blank document to paste it in. Instead, you have to mouse over a specific icon and press it.        |
| 01:18:53   | But [[Keyboard Maestro]] has the ability to look for an image on the screen and press it. So                 |
| 01:18:59   | I do that. So I just took a screenshot of it. And it's a very distinct image. It's like a new,           |
| 01:19:04   | it says new underneath it. And I press that button, then I pause for half a second and I hit Command     |
| 01:19:10   | V to paste it. And that, that was something I was doing like three or four times a day, you know,        |
| 01:19:17   | manually. And it just occurred to me like, wait a second, what am I doing here? You know, so             |
| 01:19:21   | you know, that's a [[Keyboard Maestro]] quality of life in person.                                           |
| 01:19:25   | Yeah, that is definitely one. And I should, I should steal that, David, because I use [[Grammarly]]          |
| 01:19:30   | too. And I love the fact that it pops up whenever I'm doing things on the web, so that I can,            |
| 01:19:36   | you know, have it, have it fix things for me. Because, you know, every so often while I'm                |
| 01:19:40   | typing in the forums, I'm not so great at typing necessarily, I'm currently fostering a cat and          |
| 01:19:45   | she likes to sit with her paw on the keyboard. And she's not pressing any buttons. She's just            |
| 01:19:51   | obscuring those buttons from me. So I can't always press the right button. And [[Grammarly]] helps           |
| 01:19:55   | by saying, you know, this word is incorrectly spelled. I think you meant this. And of course,            |
| 01:19:59   | there's built-in spell check on the Mac, but this is also good when I've missed apostrophes and          |
| 01:20:04   | things like that, so that it can actually fix things. So it's, you know, decent English, so              |
| 01:20:08   | that people actually understand it. Rose, that is totally a cat thing to like sit there and just         |
| 01:20:13   | put parts of her body over what you're working on. So you can't see them.                                |
| 01:20:17   | Yeah, earlier today, she was trying to sit so that her entire body was covering the keyboard.            |
| 01:20:23   | And I had to have a polite conversation with her to explain that that was not acceptable.                |
| 01:20:27   | And that, of course, got me a vacant stare and a blink. And then I tried putting the laptop on her       |
| 01:20:34   | and she wasn't unhappy about it. I was very gentle in the way that I did it. And this was a 13 inch,     |
| 01:20:38   | not a 15 inch. So I was gentle about it. And then she got the memo that maybe her being on top of        |
| 01:20:44   | the keyboard was not the best solution. And she settled for being on the trackpad. So fortunately,       |
| 01:20:50   | my Bluetooth mouse came to the rescue. Yeah, cats.                                                       |
| 01:20:56   | Yeah, automation is hard when you can't see the keyboard.                                                |
| 01:20:59   | Yeah, yeah. Well, it wasn't so much that I couldn't see the keyboard, it was that I couldn't use the     |
| 01:21:03   | keyboard. And now we settle for me occasionally not being able to use parts of the keyboard,             |
| 01:21:07   | which, you know, it's not ideal, but it works. So I'll take it.                                          |
| 01:21:10   | Yes, you know, a dog doesn't put itself over the keyboard, but it does other things in getting           |
| 01:21:15   | away of automation. Like I was rearranging my desk and I had the [[Stream Deck]] cord hanging off the        |
| 01:21:20   | end and she's never chewed on cables. But for whatever reason, it was like a fabric cable.               |
| 01:21:26   | Oh, yeah. And I looked down and she just chewed the end right off. And I'm like, damn. But fortunately,  |
| 01:21:31   | the big [[Stream Deck]], you can actually replace the cable on the smaller ones. I understand you can't.     |
| 01:21:36   | Yeah, yeah, I've got the medium size, which actually works great for me. I keep looking at the           |
| 01:21:40   | large [[Stream Deck]], but it's not available on [[Amazon]] at the moment in the UK, though for anybody in       |
| 01:21:45   | the UK who's listening, curries do have them in stock. But the problem is, is I don't feel like          |
| 01:21:52   | I can justify it right now because I'm really happy with the medium size. I would love a replaceable     |
| 01:21:57   | cable, though, because the cable on this A extremely long, B USB A, not USB C. So, you know,             |
| 01:22:04   | that would be better. But speaking of the [[Stream Deck]], the [[Stream Deck]] actually just on its own          |
| 01:22:11   | can be a great way to do a whole bunch of things. A recent plugin update for it has allowed a global     |
| 01:22:20   | mute button in [[Stream Deck]] for your microphone. And this previously was a Windows only feature.          |
| 01:22:28   | But now it's Windows and Mac, which means it works. And I love it. It's great. I love having             |
| 01:22:33   | that there. And I've been using that a lot. I have a foot pedal for my external microphone,              |
| 01:22:38   | but I love the [[Stream Deck]] button for it as well. But of course, you can amp up your [[Stream Deck]]         |
| 01:22:43   | massively with [[Keyboard Maestro]] and the plugin that we mentioned near the start of the show,               |
| 01:22:48   | KM Link, because you will just be able to do so many things with that because it's,                      |
| 01:22:55   | you know, 16 programmable buttons. I have a button here with the automators logo on it,                  |
| 01:22:59   | David. You know, how cool is that? Yeah. And then I would imagine, is that your                          |
| 01:23:03   | automator setup? Yep. Yep. So that takes me, at the moment, it's taking me to a folder. I'm              |
| 01:23:08   | going to reprogram that soon to take me to an automators profile specifically. And I love that,          |
| 01:23:16   | you know, I can then customise everything. And I have all the things here. And the automators            |
| 01:23:21   | profile at the moment is got a folder and it's got some buttons for different applications               |
| 01:23:26   | and things like that. But instead, I'm going to change it so that there are a couple of different        |
| 01:23:30   | things that I do frequently. So obviously, we have preparation before the show, then we have             |
| 01:23:35   | recording the show. And then, of course, there's post production. It might be you or it might be         |
| 01:23:41   | me who goes through and makes sure the links are there and does the upload. It depends on what's         |
| 01:23:47   | going on and everything. But those are the three different states of automators. And so I need to        |
| 01:23:52   | set it up so that I've got those and then some other handy buttons that I should just always             |
| 01:23:56   | have available, like the Relay FM CMS and things like that, so that I can always make sure that          |
| 01:24:01   | things are there and, you know, the Google Drive folder so that I can always find all of our             |
| 01:24:07   | documents, which is super handy. The last time we had TJ on, he really gave me religion about            |
| 01:24:15   | multiple palettes on the [[Stream Deck]], you know, and like a good example. And this really combines        |
| 01:24:22   | well with [[Keyboard Maestro]]. Like Microsoft Word is a good example. It's an app that I use a lot,         |
| 01:24:28   | but it's just really kind of sometimes difficult to get it to do, like, repeatable tests. Like,          |
| 01:24:36   | one of the things I do often is I comment on documents for clients and I put a capitalised word          |
| 01:24:43   | privileged in the top of the comment. So I wanted to be clear when I say to the client, this is not      |
| 01:24:49   | a version of the document we can send to the other side yet. It's, I'm now making comments that are      |
| 01:24:53   | just between the two of us about this document. And, you know, repeatedly going to hit the comment,      |
| 01:25:00   | add comment button, which is not easy in Microsoft Word. I mean, you can do it with a right mouse        |
| 01:25:04   | click or you can do it from a menu bar, but all of that kind of takes away focus. And so I made a        |
| 01:25:09   | [[Keyboard Maestro]] script that uses the keyboard combination for the selected text to add a comment        |
| 01:25:15   | then writes in the word privilege, puts a colon, adds a new paragraph. At one point, I was highlighting  |
| 01:25:20   | it, but I thought that was too much. And then once I made that script, then I just added it to a         |
| 01:25:26   | [[Stream Deck]] button. And I have a whole [[Stream Deck]] palette that loads every time I open Microsoft        |
| 01:25:31   | Word. And that was kind of the gateway. And now all of a sudden, like all the like weird,                |
| 01:25:35   | repeatable stuff I do in Word, I've made [[Keyboard Maestro]] scripts and buttons. Some of them are          |
| 01:25:41   | simple as just like a keyboard combination of changing the view from draft view to print preview         |
| 01:25:46   | or things that you could just do with a keyboard shortcut. But some of them are like multiple            |
| 01:25:50   | steps strung together. And I've got this whole palette of tools. So when I'm working in Microsoft        |
| 01:25:57   | Word, I can just reach up and press any button and make a bunch of stuff happen. And it's just           |
| 01:26:02   | really nice, you know, and that, you know, I kind of, I know I keep saying it, but that's the idea       |
| 01:26:07   | of the show today of like, what are the daily problems you're having and how are you automating          |
| 01:26:11   | around them? Yeah, so that's something your comments in Microsoft Word Davis reminded me that            |
| 01:26:18   | I do the same thing in [[ScreenFlow]]. And so I have a couple of buttons and adding a chapter marker         |
| 01:26:23   | in [[ScreenFlow]] is just one button. It's a single back tick for Americans on your keyboard is the          |
| 01:26:28   | top left button next to the one. You just press it once. And then bam, you've got a back tick.           |
| 01:26:33   | And if you do three of those before and after a piece of code in our forums, then it will format         |
| 01:26:38   | it nicely automatically. So bonus tip for you. But adding a chapter marker in [[ScreenFlow]], it's           |
| 01:26:44   | one button. It's super easy. However, I never just add a chapter marker. I always have to type           |
| 01:26:50   | something. And while I'm editing, I often add to dos for myself to, you know, you know, to do            |
| 01:26:57   | tying this up or to do re-record this video and things like that. And even if I'm then going             |
| 01:27:03   | and doing it immediately, because [[ScreenFlow]] has a somewhat poor tendency to crash, for whatever         |
| 01:27:10   | reason, then I make sure to add this and then hit save. And so what I do is I have some buttons,         |
| 01:27:21   | and this is a string deck palette that appears whenever I open [[ScreenFlow]]. And then it presses           |
| 01:27:27   | the backspace key for me, and then it types to do colon, and then hits command S. And I'm using          |
| 01:27:34   | [[Keyboard Maestro]] markers for these just because it's easy. And then I have it in [[Keyboard Maestro]]        |
| 01:27:38   | if I need it elsewhere, like for example, on another Mac, which might happen. Though I do                |
| 01:27:44   | recommend you backup your [[ScreenFlow]] profiles regularly, and there's a backup function in                |
| 01:27:48   | [[Stream Deck]] for you to do that. But I've got several different ones, you know,                           |
| 01:27:54   | I've got a couple of different to-dos. I've got one which is notes for JF, who's a managing editor       |
| 01:27:59   | over at ScreenCast online, and he goes through all the ScreenCasts and so I can leave him a note,        |
| 01:28:03   | and it just adds one which starts with JF colon. And then of course I need to type in whatever it is.    |
| 01:28:09   | And it makes my life so much easier to be able to do that because, you know, you press a button          |
| 01:28:15   | and you're most of the way there. And that's it. And these buttons are right next to my keyboard.        |
| 01:28:20   | Do you have your [[Stream Deck]] on the right or the left of your keyboard, David?                           |
| 01:28:23   | Or in the centre? It's to my left, to my left, just under,                                               |
| 01:28:26   | just above kind of the upper left portion of the keyboard. I can reach it                                |
| 01:28:31   | really without moving my hand very far. Okay, mine is, mine's on the right,                              |
| 01:28:37   | because I was having a slight issue with Crackle coming through on my audio, and it's fixed. But         |
| 01:28:43   | one of the ways I fixed it was moving all of the things that aren't my XLR to face away from the         |
| 01:28:48   | left side of my desk. That said, I am planning on rearranging my desk in the not too distant future.     |
| 01:28:54   | So hopefully that will, that will move around at some point, because at the moment the right             |
| 01:28:58   | side of my desk is a little bit cluttered. There's a HomePod, a watch charger, a multi-port              |
| 01:29:04   | dock, a key charger for my iPhone, an iPad, an extra monitor, a light, and my [[Stream Deck]] over           |
| 01:29:11   | here, as well as a couple of other things that probably shouldn't be here. Why do I have a               |
| 01:29:15   | spare lightning cable right there, anyway? I do think if you're going to buy, you know,                  |
| 01:29:20   | if we've sold you in [[Stream Deck]], you're going to buy one. I would recommend just getting the big        |
| 01:29:23   | one, because you're just going to keep finding uses for those buttons. Yeah, I mean, I would say         |
| 01:29:29   | don't get the small one, because it's only six buttons, and six buttons is not enough. If you            |
| 01:29:35   | want to try it, then there's an iPhone application with a subscription in it, and you can get a          |
| 01:29:41   | month for free. And that iPhone version is the same number of buttons as the medium size. Now,           |
| 01:29:48   | I would say the medium size one is good, because the [[Stream Deck]] itself is actually quite small,         |
| 01:29:52   | but it comes with a little stand that's adjustable, so you can have it at different angles. And of       |
| 01:29:57   | course, with different profiles and folders, you'll be fine with 15 buttons if you're willing to         |
| 01:30:04   | switch folders and so on. And I don't regret having the 15 button one, aside from the fact that I        |
| 01:30:09   | can't change the cable. Whereas, of course, David, you know, you could change the cable on yours,        |
| 01:30:14   | so. Yeah, that paid off for me. Yeah. But you know, [[Stream Deck]] and [[Keyboard Maestro]] go together         |
| 01:30:21   | so well. I would argue that if I could only have one, it would absolutely be [[Keyboard Maestro]],           |
| 01:30:25   | because if you don't want to spend the money on [[Stream Deck]], you can also put together keyboard          |
| 01:30:29   | palettes on screen with [[Keyboard Maestro]] to do a lot of these same things. But there is something,       |
| 01:30:34   | and as someone who believes in the religion of, you know, keyboard shortcuts, I'm surprised to           |
| 01:30:40   | say this, but there's just something about having that button list in that separate device with          |
| 01:30:45   | all those buttons. Yeah. I think it's the pictures that you can add to them. So I'm looking at my        |
| 01:30:50   | overall, my standard view on the [[Stream Deck]], as it were. And I've got icons here for automators,        |
| 01:30:57   | nested folders, screencast online, iOS today. I've got TJ Luoma is fantastic pal, because,               |
| 01:31:03   | you know, this is my last meeting of the day. And, you know, it's the last thing that's happening,       |
| 01:31:08   | and I've got a mute button, and I can switch through. I've also got a button to control                  |
| 01:31:12   | my Philips Hue lights, but all of these have got pretty icons on them. So if I look at the automators       |
| 01:31:17   | one, it's the automators logo, nested folders is a nested folders logo, and so on and so forth.          |
| 01:31:22   | And so when I look at it, I don't, my brain doesn't translate what it's seeing. It just knows iOS        |
| 01:31:28   | today, press the rainbow, done. Because the iOS today, I come for anybody who doesn't know is            |
| 01:31:33   | kind of a rainbow gradient. Automator is red gear with an A, and it kind of looks like the               |
| 01:31:39   | Captain America logo. Perfect. And, you know, I love that I just look at it, and my brain                |
| 01:31:45   | immediately associates the colours and the shapes that it's seeing with the thing that it needs to do.    |
| 01:31:49   | And that's why, you know, my, my [[ScreenFlow]] profile on my [[Stream Deck]] has got things like,              |
| 01:31:58   | it's a comment bubble with a green checkmark in it. And these are just some things that I've made        |
| 01:32:04   | by overlaying PNGs on top of each other in Pixelmator. You know, nothing too fancy or crazy,             |
| 01:32:12   | but it works. So, yeah, I took [[Stephen Millard]], who was a guest in episode 68. He has a script           |
| 01:32:21   | that will run and pull out all of the [[SF Symbols]] which is [[Apple\|Apple's]] kind of open source. Well,            |
| 01:32:27   | it's not open source, but [[Apple\|Apple's]] common icon set. And he can in, so I just ran his script to put        |
| 01:32:33   | them all on a dark gray background. And so for like in the Microsoft Word one, it's just a               |
| 01:32:38   | bunch of icons, but it's just faster seeing the icon and pushing the button than any other way           |
| 01:32:43   | that I'm aware of. So it's pretty cool. I really love that. And I also have a bonus tip for you,         |
| 01:32:49   | though, David. If you then put the icons through, there's an icon formatter in shortcuts, where          |
| 01:32:56   | you can format things as an app icon, which just kind of rounds the corners off. You can then use        |
| 01:33:00   | those icons as OmniFocus perspective icons, which I love. And I may or may not have an                   |
| 01:33:07   | entire new series of OmniFocus perspectives with fancy icons. Thanks to [[Stephen Millard]].                 |
| 01:33:11   | So thank you, Stephen. I'm going to have to follow up on that because I did that,                        |
| 01:33:15   | but I did that manually. So I wasn't very automator friendly to use some of those.                       |
| 01:33:20   | Well, I may have also got a little bit crazy. I made an extension to his script where it allows          |
| 01:33:28   | me to search the font awesome icons for something. So for example, I can search for arrow or dice or     |
| 01:33:34   | something like that. And then we'll find all of those and just create icons with all of those            |
| 01:33:38   | for me. Because I tend to use font awesome because I use that for work as well. We have                  |
| 01:33:46   | pro subscription there and so on. So I'm quite familiar with the icons they create. So I know            |
| 01:33:50   | how I can easily search it. And so I've literally had that open on my iPad and I've been generating      |
| 01:33:55   | icons on my iPhone, which works really well. Unless the count on your lap decides to randomly            |
| 01:34:00   | tap the cancel button, which she did once. Yeah, I have a small group of friends that I                  |
| 01:34:05   | have a shared [[Dropbox]] folder with where we put like [[Stream Deck]] icons and things like this.              |
| 01:34:09   | You're in it. So, but maybe we should think of like a GitHub or something we can do for                  |
| 01:34:14   | the listeners as well. So we can have like a community based location for [[Stream Deck]]                    |
| 01:34:19   | icons and OmniFocus perspective icons, because everybody's doing all this stuff on them.                 |
| 01:34:24   | And if we had a way that everybody could share it, that would make it easier for everyone.               |
| 01:34:28   | I'll see if I can sort something out with that before the before the episode, David.                     |
| 01:34:35   | I can't promise for our listeners that I will have been able to do that.                                 |
| 01:34:39   | But if I can, there'll be something in the show notes for you.                                           |
| 01:34:42   | Yeah, or well, let's report back in two weeks with the next episode. So we have                          |
| 01:34:47   | perfect together. I may have a few other things to talk about in a few weeks as well.                    |
| 01:34:52   | All right. Cool. Looking forward to that. This episode of The Automators is brought to you by            |
| 01:34:59   | [[DEVONthink]]. Get organised and unleash your creativity. Go to devontechnologies.com/             |
| 01:35:05   | automators to get 10% off. [[DEVONthink]] is the most professional document and information               |
| 01:35:11   | management application for the Mac. It's the one place for storing all your documents, snippets,         |
| 01:35:17   | or bookmarks and working with them. The integrated AI assists you with filing and searching while the    |
| 01:35:23   | extensive search language with advanced Boolean operators helps you out. [[DEVONthink]] features          |
| 01:35:28   | a flexible sync system that supports many cloud services or lets you synchronise over the local          |
| 01:35:34   | network to with everything securely encrypted. This gives you the choice for however syncing             |
| 01:35:39   | works best for you. It has smart rules and flexible reminders that let you automate all parts of your    |
| 01:35:45   | workflow and delegate boring, repeating tasks. Let [[DEVONthink]] automatically organise your data        |
| 01:35:50   | with rules you define. [[DEVONthink\|DEVONthink's]] [[AppleScript]] dictionary is one of the largest on the Mac.         |
| 01:35:55   | There's no part of [[DEVONthink]] that can't be automated. Extend [[DEVONthink\|DEVONthink's]] functionality           |
| 01:36:00   | with your own commands by adding them to its Scripts menu. Even templates can have Scripts inside        |
| 01:36:06   | and you can set up new documents with data from placeholders or inserted by your own [[AppleScript]]        |
| 01:36:12   | code. And of course, there's so much more from the iOS companion app to email archiving, scanning,       |
| 01:36:19   | or even embedded web server for sharing your data securely with your team. My life is document           |
| 01:36:25   | intensive and I'm a big [[DEVONthink]] fan for that reason. I've got databases for MacSparky             |
| 01:36:31   | stuff and field guide research. I've also got [[DEVONthink]] libraries for a bunch of my legal work.      |
| 01:36:36   | It's just a great place to go because I control the security, I control the syncing,                     |
| 01:36:41   | and I have massive, powerful tools at my disposal, way more powerful than what the Finder provides.      |
| 01:36:48   | You can get 10% off [[DEVONthink]] 3 or upgrade to it right now. Just go to devontechnologies.com/automators.         |
| 01:36:54   | That's devontechnologies.com/automators for 10% off. Our thanks to               |
| 01:37:01   | DEVONtechnologies for their support of the automators and all of Relay FM.                            |
| 01:37:05   | So, David, I think we're almost at the end of the show here. I think it's probably time to               |
| 01:37:13   | round out the episode with the other small things that we're doing. And I think the first place that     |
| 01:37:19   | we've got to start with here is Automator, because we've not really talked about Automator               |
| 01:37:24   | much today. When compared to tools like [[Keyboard Maestro]] and [[Hazel]], it pales in comparison,              |
| 01:37:31   | which is a shame because it's actually a pretty powerful tool and it's free and it's on every            |
| 01:37:36   | Mac out there. And it can do some pretty cool things. So, I've used it before for things like            |
| 01:37:43   | combining PDFs, especially when I was applying for a mortgage. To start with, I was told,                |
| 01:37:49   | oh, we need all these separate documents. So, I made a point, everything's separate document,            |
| 01:37:53   | blah, blah, blah, blah, blah. And then they said, oh, no, no, no, no, no, we need                        |
| 01:37:56   | all of your bank statements as one PDF. And for somebody who has banks in multiple countries,            |
| 01:38:03   | this was quite a few documents. And I wasn't about to sit there and drag all of those one after          |
| 01:38:08   | another into the sidebar of the preview window. No, I just used the combine PDF option in Automator      |
| 01:38:15   | to do that. And I had it pop up, asked me for the PDFs, and then combine them. And it's about            |
| 01:38:21   | out a brand new PDF for me. And that was it done. And Automator really was the place to start with       |
| 01:38:27   | that. And I know there are so many other ways I could have done this. There are web services,            |
| 01:38:31   | I could have done it in the terminal. Maybe [[Keyboard Maestro]] has the option to do that.                  |
| 01:38:36   | But it worked with Automator and it was easy. So, I was wondering, do you use [[Automator]] for              |
| 01:38:42   | anything? Yeah, I mean, first of all, it's sentimental. I mean, our friend, [[Sal Soghoian]],                 |
| 01:38:47   | is the brain behind Auto, the Automator. And I'm like you a little sad because it started out            |
| 01:38:57   | amazing. I think it was Tiger that that showed up for the first time, 10.4. And there was just so        |
| 01:39:05   | much that, so much promise that never really got fulfilled. They never gave Sal, I feel like,            |
| 01:39:10   | the resources he needed to turn it into something like workflow or shortcuts. But it was like,           |
| 01:39:15   | the DNA is there. And you know, the workflow team openly acknowledges that that was part of their        |
| 01:39:21   | inspiration for workflow, which became shortcuts. It just never got the variable support and the         |
| 01:39:28   | action support that we really needed. That being said, I use it a lot. One of my favourite                |
| 01:39:35   | automation workflows, I got actually from Sal from a website, I'll put a link in the show notes.         |
| 01:39:39   | Because I'm a lawyer, I send a lot of PDFs to people that are not done, you know,                        |
| 01:39:45   | people are reading draft PDFs. And I was doing, I had all these different ways of marking it as          |
| 01:39:50   | draft, like there's ways you can do it in the PDF applications. And none of them I was really            |
| 01:39:55   | satisfied with. Because a lot of times I'll just have the the file on my desktop before I send it        |
| 01:40:02   | off and I want to mark it as draft. So I made an Automator script that takes a PNG stamp of              |
| 01:40:09   | the word draft, tilts it 45 degrees, makes it really big sets the opacity to like 30% so you             |
| 01:40:17   | can see through it. And it's a big red draft stamp and it just stamps it on every page of the PDF.       |
| 01:40:23   | And then changes the name to add the word draft at the end. And I use that probably every day,           |
| 01:40:30   | you know, just like, I'm because I'm constantly sending these PDFs out to clients for review.            |
| 01:40:34   | And, you know, the fear is if I send them something that's not marked draft, and it's not done, and      |
| 01:40:39   | then they try, they, they use it and as a mistake or just aren't thinking, and then all of a sudden      |
| 01:40:44   | you have a contract sign that isn't the right contract. And so it's just like things like that           |
| 01:40:49   | it's really good for. But that's kind of a static automation, you can it's not like changing names       |
| 01:40:55   | inside the document or anything. But it because it's baked into the operating system, I can trigger      |
| 01:41:01   | I can trigger it on my desktop very easily. And so I do still find use for automator.                    |
| 01:41:08   | Yeah, yeah, and you can trigger it, you can so you can run automated workflows through things            |
| 01:41:13   | like [[Hazel]] and stuff as well, which of course increases its power. So you can say [[Hazel]], if,             |
| 01:41:18   | if this file matches all these requirements, then then run that automated action. I pretty               |
| 01:41:24   | much use it the same way you do as, you know, quick actions inside a finder. So for anything             |
| 01:41:29   | that's an image, I have a special button which allows me to resize those images. And it's called         |
| 01:41:36   | forum resize, because I use this when I'm uploading images to forums, you don't need 12                  |
| 01:41:41   | megapixels if you're uploading a photo to my power users forum, or the automators forum.                 |
| 01:41:47   | And if you've taken a photo on your iPhone, it's probably pretty darn huge. And so I have it,            |
| 01:41:52   | you know, resize the images for me. And it works great. And I just resizes them. And I think             |
| 01:42:02   | it adds the word dash mall to the end, or no, it saves it on my desktop, that's it.                      |
| 01:42:08   | And so that, you know, the new one appears on my desktop, and I have actually a [[Hazel]] action             |
| 01:42:15   | on my desktop where anything that appears there, it opens it in [[Yoink]]. And this just means that it       |
| 01:42:20   | then, you know, a couple of seconds after it appears on the desktop, it pops up in my [[Yoink]]              |
| 01:42:24   | bar on the bottom left so that I can, I can see it quickly and drag it to wherever it needs to go.       |
| 01:42:29   | And then it vanishes out of [[Yoink]], which just makes my life a little bit easier. So Automator            |
| 01:42:34   | definitely still has its place. And I really wish it could have become more. And I don't know, maybe     |
| 01:42:40   | next year, we will see shortcuts on the Mac. They recently added get variable back to shortcuts          |
| 01:42:46   | David in the 14.5 beta. So I'm curious as to what that means and what that could imply.                  |
| 01:42:53   | Yeah, I just got used to not having it literally, you know, I finally stopped searching for it and       |
| 01:42:58   | gone with, you know, everything being magic variables. And very rarely did I have an occasion            |
| 01:43:05   | where I thought, oh yeah, get variable would be handy here. And I'm wondering if actually,               |
| 01:43:11   | maybe they brought that back because tapping and holding on variables to then say, to then               |
| 01:43:17   | tapping and holding on things so that you can then select a variable was not logical.                    |
| 01:43:23   | For a lot of people, like it's quite hidden. I know a lot of people have struggled with                  |
| 01:43:27   | certain things going, oh yeah, but I want to insert this. But if I tap on it, it doesn't give me that    |
| 01:43:31   | option. The answer is of course, tap and hold. But yeah, I'm wondering if maybe, maybe it really         |
| 01:43:37   | needs it's coming to the Mac across my fingers. Who knows? I mean, it'd be very interesting to see       |
| 01:43:41   | how that fits with [[Keyboard Maestro]], you know, yeah, yeah, I'm sure there'd be some things that          |
| 01:43:47   | can do better because it's baked into the system and other things that would be much worse at,           |
| 01:43:52   | frankly. I don't know. But I hope so. I hope so. I think that needs out. But I mean,                     |
| 01:43:58   | since I feel like automator is never going to get the love it needs, if we have to do it by              |
| 01:44:02   | getting shortcuts on the Mac, then so be it. Yeah. Yeah. Yeah. Well, let's see.                          |
| 01:44:08   | Before we go, you and I had both written down a couple apps in the process of this outline that          |
| 01:44:14   | are kind of like quality of life automation apps that are kind of out of the normal that                 |
| 01:44:19   | I thought we should mention. Yeah. I'll start with [[Amphetamine]]. No, it's not a drug. It's a drug for     |
| 01:44:26   | your Mac. It's in the Mac App Store. There was recently a thing where [[Apple]] asked them to rename         |
| 01:44:32   | even though they've had that name for years and then [[Apple]] went back and said, actually, no, it's        |
| 01:44:36   | fine. But I love [[Amphetamine]] because it's for people who've used the caffeine command in the             |
| 01:44:43   | terminal or Java, latte, there's a couple of different ones. They're all pretty much coffee              |
| 01:44:51   | based names for the Mac. Little menu bar applications that sit in the menu bar on your Mac               |
| 01:44:56   | where you can stop your Mac going to sleep. [[Amphetamine]] is one of those, but it's better because         |
| 01:45:02   | it has automation. So for example, you can say, hey, this machine is a laptop. Whenever it's             |
| 01:45:08   | plugged in, I want you to not let it go to sleep. Thank you. Or have it do it on a schedule or have      |
| 01:45:14   | it do it when certain drives are connected. And I love this for my work laptops. I have it keep          |
| 01:45:19   | them awake during working hours. This is not because I'm not working, but it means that if I get up      |
| 01:45:24   | to go to the bathroom and get a glass of water and stretch my legs or something,                         |
| 01:45:28   | then when I come back to my computer, it's not gone to sleep, which of course kills my VPN               |
| 01:45:33   | connection, kills my terminal connections and causes a whole mess of things that take 10 minutes         |
| 01:45:40   | to unpack when really all I needed to do was get up, go to the bathroom, grab a glass of water,          |
| 01:45:45   | maybe a bar of chocolate and come back to my desk. I didn't really want 10 minutes of extra work.        |
| 01:45:49   | And so [[Amphetamine]] saves me a lot with that because it just works. And it's got a couple                 |
| 01:45:56   | of different icons as well. There's a pill icon, some coffee icons, a sun and a moon,                    |
| 01:46:01   | things like that. So you know when it's on and off. But I love the fact that it's got these              |
| 01:46:06   | automation options built into it. Of course, you can run terminal commands and stuff when you            |
| 01:46:10   | plug things in through [[Keyboard Maestro]] and so on. But I find [[Amphetamine]] is just a super                |
| 01:46:15   | easy way to do it. Yeah. The one I would add in this one is controversial for some folks is              |
| 01:46:21   | CleanMyMac X. Not controversial in the sense that it's a bad app. It's a fine app. But people,           |
| 01:46:28   | a lot of nerds write me every time I talk about this and they're like, well, if you just run this        |
| 01:46:32   | terminal command and that terminal command and blah, blah, blah, you can do a bunch of maintenance       |
| 01:46:37   | on your Mac. And I agree. But I don't want to do any of that stuff. I want it automated.                 |
| 01:46:41   | Yeah. And CleanMyMac X combines, it checks the disk volume. It checks the RAM usage.                     |
| 01:46:49   | It's like all the little stuff that you can use to kind of make your Mac run better.                     |
| 01:46:54   | It does that. And if you get a set app subscription, you get it as part of that. And                     |
| 01:46:59   | I run it on my Macs. And I feel like it's on an automation tool because it just does a bunch             |
| 01:47:04   | of stuff that I personally don't want to stop and do. Yeah. Yeah, same. And so earlier in the            |
| 01:47:11   | show, we mentioned that [[Hazel]] can do things like clean up apps when they're deleted and things like      |
| 01:47:18   | that. And also monitor your trash. CleanMyMac X can do that too. I'm personally still using those        |
| 01:47:24   | in [[Hazel]], but not because I don't like CleanMyMac. I actually do like it and I use it. And recently,     |
| 01:47:30   | I was running out of space on my Mac and I could not figure out why. And CleanMyMac X has a feature      |
| 01:47:36   | where it can go through. It can look at everything on your Mac and sort things from biggest to           |
| 01:47:39   | smallest. And I found a rogue 32 gigabyte file that had been duplicated six times, which explains         |
| 01:47:46   | where all of my space went, David. Oh, my gosh. Wow. So that was a lot of space. And I now have it       |
| 01:47:54   | back. And that 32 gigabyte file turns out was unnecessary as well because that project was               |
| 01:47:59   | finished months ago. So that has been nuked from orbit and no longer exists.                             |
| 01:48:05   | All right. Quality of life automation. I bet you've got some that you would like to share as well.       |
| 01:48:10   | And we have a forum for that that you can find on talk.automators.fm. Thank you to our sponsors,         |
| 01:48:16   | our friends over at Microsoft Express VPN, Privacy, and DEVONthink. We are the Automators.                |
| 01:48:21   | You can find us at relay.fm/automators. And we have a website at automators.fm. And we'll see      |
| 01:48:29   | you next time. Goodbye, everyone.                                                                        |
