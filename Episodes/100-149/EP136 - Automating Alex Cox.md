---
status: incomplete
fc-date:
  year: 2023
  month: 9
  day: 8
fc-category: podcast
podcast: Automators
published: 2023-09-08
duration: 6054
formattedduration: 01:40:54
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Alex Cox
notetype: episode
showpage: http://relay.fm/automators/136
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators136.mp3
episode: 136
title: "136: Automating Alex Cox"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Alex Cox returns to the Automators to share a few new automation tricks and get answers for some more involving NFC Tags, Keyboard Maestro, and Automation Possibilities with [[Apple|Apple's]] Vision Pro.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Alex Cox]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- *Episode 136 discussion topic was not automatically created on the forum.*

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.

# Show Notes
- [Alex Cox Makes Podcasts | Twitter, Instagram | Linktree](https://linktr.ee/alexcox)
- [Haptic](https://hapticfm.transistor.fm/)
- [It's Great to See You - Haptic with Alex Cox](https://hapticshow.substack.com/p/its-great-to-see-you#details)
- [Do By Friday](https://dobyfriday.com/)
- [Giving up the iPad-only travel dream – Six Colours](https://sixcolours.com/post/2023/08/why-i-gave-up-on-the-ipad-only-dream/)
- [Keyboard Maestro 10.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Keyboard Maestro Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/km)
- [Moom · Many Tricks](https://manytricks.com/moom/)
- [Clean up your windows! : App Store Story](https://apps.apple.com/gb/story/id1519883681)
- [Amazon.com: SwitchBot 3PCS NFC Tag Stickers](https://www.amazon.com/SwitchBot-Stickers-NTAG216-Devices-Compatible/dp/B09C295HSX)
- [Amazon.com: Clocky Alarm Clock on Wheels (Original)](https://www.amazon.com/Clocky-Rolling-Sleeper-Bed-Room-Run-away/dp/B000TAS9XQ?keywords=helicopter%2Balarm%2Bclock&qid=1693253664&sprefix=helicopter%2Balarm%2Caps%2C218&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1) 
- [Amazon.com: Kafuty-1 Novelty Digital LED Alarm Clock,Gadget Run Away Flying Alarm Clock](https://www.amazon.com/Kafuty-1-Novelty-Helicopter-Propeller-Creative/dp/B09WV2BGXM?crid=20S0O5P5BWLMZ&keywords=helicopter%2Balarm%2Bclock&qid=1694188980&sprefix=helicopter%2Balarm%2Bclock%2Caps%2C142&sr=8-3)
- [Amazon.com : 40Pcs NFC Tags Ntag 215 NFC Stickers](https://www.amazon.com/Stickers-Rewritable-Adhesive-Compatible-Android/dp/B0C49SVTCT/)
- [Timery for Toggl](https://Timeryapp.com/)
- [Horizon Workrooms Virtual Office & Meetings | Meta for Work](https://forwork.meta.com/horizon-workrooms/)
- [Apple Vision Pro - Apple](https://www.apple.com/apple-vision-pro/)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Welcome to Automators. I'm David Sparks and joined by my co-host, Rosemary Orchard. Hello,              |
| 00:07      | Rose. Hey, David. I am excited for today's guest because we've got the one, the only,                   |
| 00:14      | the amazing, Alex Cox is back. Howdy, howdy. Thank you so much for having me. I'm so,                   |
| 00:20      | so excited. Yeah, Alex, you are one of our favourite guests because,                                     |
| 00:24      | uh, how do I put this? You were living the struggle with us. Alex is, um, you know.                     |
| 00:32      | Yes. Yes. I mean, you're, you're automating stuff. I mean,                                              |
| 00:35      | as soon as we got on the prep call, you had like a list of like four questions of things                |
| 00:38      | you're trying to automate that you want. So we're going to cover some of that during the show.          |
| 00:42      | But, you know, the Automators is not meant to be a show for people who, you know, write [[Xcode]] every     |
| 00:48      | day for a living. Although Rose, I know you do that. Um, I mean, I don't usually use [[Xcode]].             |
| 00:54      | I write PHP, which is difficult to do an [[Xcode]]. I stand corrected. I stand corrected. But no,           |
| 01:01      | the reason the show exists is we want anybody out there to automate just like the chef said             |
| 01:06      | and ratatouille. Anybody can automate and, um, and, and Alex, you're on the journey with us. You        |
| 01:11      | got some cool stuff. You do, you're automating yourself. You're out there doing cool stuff,             |
| 01:14      | but you also got some questions and Rose and I are struggling with it, along with                       |
| 01:18      | you. So this is going to be a great show for anybody listening. We're going to give you some            |
| 01:21      | good automation tips. And, uh, if you're listening, the reason we dropped these shows on Fridays is     |
| 01:26      | cause we want you to spend the weekend going home and getting motivated and building some               |
| 01:31      | of your own automations. I like the way that it is really much. So we love you for listening to         |
| 01:36      | the show. By the way, here's the list of homework. Yeah. Insert like 500 page document. Um,             |
| 01:43      | accidentally, but done with love every time. But it works. We get emails from listeners all the time    |
| 01:48      | who figured out some cool automation that saves them time. And that's the whole point, right? I         |
| 01:53      | mean, we like computers, but we would rather be spending time playing with our dogs or kids in          |
| 01:58      | the garden, uh, watching TV, whatever it is that we like to do for fun. And, uh, automation can help    |
| 02:05      | you get there gang. So that's, that's right here. So Alex, Alex, one of the things that you do that     |
| 02:10      | I love is do by Friday. Uh, it's such a great podcast. I mean, I don't know who came up with            |
| 02:15      | the idea to pair you and Merlin Mann together, but it is, uh, you know, it's like peanut butter and      |
| 02:21      | jelly or it's like gasoline in a match. I'm not sure which one, but they either way, it's kind of       |
| 02:27      | awesome. Was this intended to be a compliment? I mean, that's exactly how I would describe it           |
| 02:33      | honestly because that's, that's pretty much it. All it took was me listening to Merlin Mann's shows      |
| 02:40      | for about a decade. Well, and including you David, I listened to Mac power users probably before        |
| 02:48      | any other show. I mean, maybe because you were, you were a show before                                  |
| 02:56      | your iTunes supported podcasts, right? Or am I mistaken? No, it was, it was there, but we were          |
| 03:04      | pretty early to the game, but that wasn't that. And then Rose came and then she became my favourite.     |
| 03:11      | And now I'm like, oh, the heck with all of these boys. Yeah, I'm sure you've been podcasting a          |
| 03:18      | lot longer than I am. Alex, I remember hearing about you such a long time ago. I'm thinking,            |
| 03:22      | darn, Alex, I was like, just such a cool person. I mean, I have been podcasting for as long as my       |
| 03:28      | curly. I am just not as popular. So for, and for good reason. But that's, that's such a compliment.     |
| 03:36      | Thank you, Rose. I was listening to my old automators episode. Actually, the, you were kind             |
| 03:44      | enough to have me on two years ago. And I just didn't want to repeat too much of what I had talked      |
| 03:51      | about before and realised, oh, you know what? I have with my automations kind of come not a long        |
| 03:59      | way, but as much as I would want to in that amount of time. So I think that just speaks to what David   |
| 04:06      | said, that even if you're hearing this and you just like to listen because you enjoy hearing            |
| 04:13      | David and Rose's Rosemary's voices, as I do, don't worry. There's still stuff to do. I am,              |
| 04:22      | I am, I still feel like a newbie and then realised, oh, grown a lot in two years. So that was kind      |
| 04:29      | of exciting. I gave myself a compliment. This is the first time on any show. Wow. Wow.                  |
| 04:36      | Congratulations, Alex. That is an achievement. And also, I'd just like to note, thinking that           |
| 04:41      | your automations have come a distance and you said not a long way, that might actually be a             |
| 04:47      | good thing in some ways. Because obviously, David and I are messing with this stuff all the time,       |
| 04:51      | because we're doing a podcast about automations. So we do have to push the limits to an extent          |
| 04:55      | and play with all the things. But things not having necessarily moved a lot and just improved,          |
| 05:01      | that's a sign that they're working. Exactly. My biggest problem is usually like, why is this            |
| 05:07      | not working? I had this just before we started the show today. I couldn't figure out why. I was         |
| 05:13      | asking my HomePod to set my office lights to 100%. They briefly go to 100% and then they just get      |
| 05:18      | dimmer and dimmer and dimmer. So spoiler, this weekend I was rearranging my office. Obviously,          |
| 05:23      | I've put one of the controls to adapt the lights in a box somewhere and something is resting on it      |
| 05:30      | and it's pressing the button. So I had to turn off that automation because                              |
| 05:36      | something somewhere is dimming my lights and I don't 100% know where it is right now.                   |
| 05:42      | That's going to be a fun one to fix. You know that you've grown as an                                   |
| 05:46      | automator when you realise that it could be something physical that is messing things up?               |
| 05:52      | Because just before we started recording, I'm like, oh, God, is my air conditioner still                |
| 05:57      | that loud? And went to just eventually go unplug it because my automation turned it off,                |
| 06:03      | didn't work, and then I saw a cat sitting on the button for it. So that was probably why.               |
| 06:10      | 50% of the time now, it used to be like only 10% of the time it was a cat messing up automations        |
| 06:17      | because we'll talk about it, but most of my automations are still in the real world,                    |
| 06:23      | quote, real world. But now about half the time it is a cat messing them up.                             |
| 06:29      | I think what I would just say that as a general rule, if you own a cat and you try to automate          |
| 06:36      | that the cat is going to mess it up about 10% of the time, just as a continuation of the                |
| 06:41      | psychological warfare between cats and humans. Exactly. I feel like I need to correct you,              |
| 06:46      | David, if you are owned by one or more cats. There you go. That is the correct phrasing                 |
| 06:51      | of the sentence. You don't own a cat. The cat graces you with that presence and chooses to own          |
| 06:56      | you. I'll speak as a dog person. Dogs don't mess up my automations. They just look at me sad            |
| 07:03      | when I'm trying to automate. I feel like I should remind you at the time that Ashoka was chewing        |
| 07:10      | on the flood sensor. That's right. She triggered the flood sensor because she was licking it.           |
| 07:15      | That's correct. Well, guys, dogs are in on it too, guys. Well, if any pets own you                      |
| 07:23      | and you have automation problems, you should look at them sideways. I really feel like they             |
| 07:30      | do like to mess with us a bit. That's one way to do it. Yeah, definitely. If you have a partner and     |
| 07:34      | anything goes wrong with your automation, always blame the pet. Always blame the pet. They will buy     |
| 07:39      | you so much leeway. Definitely recommend that tactic. Unless the pet is literally out at the            |
| 07:45      | house at the time that something goes wrong and there is absolutely no way that they could possibly     |
| 07:50      | have peed somewhere or put something somewhere that they shouldn't know that could be causing the       |
| 07:54      | issue. But yeah, blame the pets. Even if you've got a budgie or something, they are creative            |
| 08:00      | creatures. You can blame a budgie. I'm sure of it. Listen, if it can fart, then it can break            |
| 08:06      | an automation. If you're going to blame it. Everything but sloths can fart, apparently.                       |
| 08:11      | Oh, wow. This is a discussion that came up at work the other week. Don't ask me how stand up went       |
| 08:15      | out of the rails, but it did. This is what happens when the boss is out. Yeah, if it's not a sloth      |
| 08:22      | that can fart. I just had a little insight though. I was thinking, leak sensors actually could be       |
| 08:28      | quite useful when training dogs. You could put a leak sensor in the crate or wherever the dog           |
| 08:36      | stays and you would know when they peed. I never thought of it that way. Yeah, that is something        |
| 08:41      | I'm trying to set up for my brother who has just gotten a dog, actually. I believe a product that       |
| 08:48      | exists. Well, motion sensors exist, but the dog knows. There's basically a little accident area,        |
| 08:57      | we call it. The dog at least knows that if there's going to be an accident, he goes over there.         |
| 09:04      | There's a little motion sensor that works with [[HomeKit]]. Then he's like, my brother's like,              |
| 09:13      | oh, all right, I guess I got to go home and deal with that, but it prepares.                            |
| 09:18      | You could go a level deeper. You could get an [[Aqara Water Leak Sensor\|Aqara leak sensor]]. They're about 15 bucks,                |
| 09:22      | but you'd have to also get an [[Aqara Hub]], by the way. If he got that, when it gets wet,                  |
| 09:29      | it would, he would get a, but the funny thing is the way it integrates with [[HomeKit]] is it goes off      |
| 09:34      | like there is actually a leak, like an alarm goes off. Everybody in the house hears it.                 |
| 09:39      | It comes through as a critical alert. It sings out on the HomePods. I'm using the word sing             |
| 09:43      | very generously here. It is loud. That is the only problem with that because also,                      |
| 09:50      | especially if there are HomePods involved and the dog hears it, then they're going to get like,         |
| 09:55      | I mean, this could be a good thing, right? The dog here like pees, then hears a sound and is like,      |
| 10:00      | oh no, I shouldn't have done that. At the same time, you don't want the dog to be terrified of          |
| 10:04      | going to the toilet. So yeah. It's like red alert, red alert, rover, let it, let it flow.               |
| 10:11      | I love that. That's something you may want to look into. Something which you mentioned                  |
| 10:17      | along those lines. And at some point, when we get to the next feedback show, I want to go into          |
| 10:21      | this deeper rows, but [[Aqara]] has done something cool because there's all these features with the         |
| 10:26      | [[Aqara]] hardware and Rose and I always have this asterisk. Well, [[Aqara]] cameras do this or [[Aqara]]           |
| 10:30      | sensors do that, but they don't talk to [[HomeKit]]. Well, now they've got a way to share workflows         |
| 10:35      | from the [[Aqara]] app to [[HomeKit]]. Have you seen those rows? It's a nice feature they've added              |
| 10:40      | recently with a software update. I don't want to get into it today because I need to do a little        |
| 10:45      | more prep on it. But if you've got [[Aqara]] sensors and you want to get some of those additional           |
| 10:50      | features into [[HomeKit]], it's actually easier now than it used to be. So yeah, I've seen that and         |
| 10:55      | I've also seen the [[SwitchBot]] appears to be doing something very similar as well with their              |
| 10:58      | [[Matter]]-based hub. So that's definitely something that we should look into because yeah, I've had       |
| 11:03      | some questions come in about that recently. Oh, that's so cool. I look forward to that show.            |
| 11:08      | Alex, you got to find [[Aqara]] in your life if you're doing a home automation. It's just so great.         |
| 11:13      | But you had said earlier, I'm not going to let you get away with this. You said that you had            |
| 11:17      | grown as an automator. Tell us a little bit about that. What are the automations and platforms that     |
| 11:24      | you have found yourself gravitating to in the last two years? I have finally been using a               |
| 11:31      | [[Keyboard Maestro]] to do what I want it to do and actually put my windows where I want them to go         |
| 11:42      | and for things like podcast editing or podcast recording, just setting that up was really               |
| 11:53      | intimidating. But between the two of you and [[Jason Snell]], I think I've finally gotten it to work.       |
| 12:04      | And that has been phenomenal because I absolutely adore iOS. It is my main and I talked about this      |
| 12:15      | one last show. iOS is basically my main operating system. Secondary to that is Mac OS. And like         |
| 12:24      | a lot of people, actually [[Jason Snell]] talked about this on Six Colours a couple of days ago,             |
| 12:31      | so like a lot of folks, I tried to make my iPad a primary traveling computer for a very long time       |
| 12:39      | and really enjoyed being able to have just that really kind of stark focus with one or two apps         |
| 12:50      | and sometimes barely focus, barely working focus modes. But now I know this may make some people        |
| 12:59      | cringe. I have my Mac set up like a really, really fancy iPad that I would want. I just kind of wanted  |
| 13:07      | to make my Mac into what I would want an iPad to have. And because now it's kind of like the surface    |
| 13:16      | of Mac OS for me is what I would like is iOS. And then if I want to drill deeper, if I really           |
| 13:25      | need to go into like something like God forbid Vim, which has only happened once, I can do that.        |
| 13:36      | But I can have these really powerful applications exactly where I want them to be and doing the         |
| 13:44      | exact things I want. For example, there is this certain thing in the logic where I can't put any        |
| 13:53      | keyboard shortcut for it. It's not meant to be used that often because logic is an application          |
| 14:03      | for musicians, not podcasters. And a lot of us struggle with that. So I just needed something           |
| 14:12      | to always open stripped silence, which is what you use when you are editing a podcast and you           |
| 14:19      | want to eliminate the silent parts on different tracks. So it's just easier overall to kind of          |
| 14:30      | splice it together. But there was just no way to open that setting and then change it to the exact      |
| 14:40      | sort of threshold. I know that this is nonsense to some people, I apologise.                            |
| 14:46      | No, it makes sense. You're trying to run a command and it doesn't have automation for that.             |
| 14:51      | And I just needed to click a bunch of little buttons and I couldn't do that until I set up              |
| 15:00      | [[Keyboard Maestro]] with my [[Stream Deck]] and now it works. And I should have done it a long time ago,       |
| 15:08      | but it's there now and I'm grateful for it. So you're telling me that Alex is using keyboard            |
| 15:15      | maestro doing setups and contextual computing with automation? Are you gaslighting me? Are you          |
| 15:22      | just trying to get me all excited? I mean, what's going on here? I mean, I heard the magic focus        |
| 15:27      | modes in there as well, David. Yes, I mean, it's like a trifecta. I mean, I wanted to                   |
| 15:34      | sort of save it for the show, but I know how much you like contextual both of us really like            |
| 15:40      | contextual computing. And that's why I have my Mac setup setup like this, because there's just          |
| 15:49      | too much cognitive load for me to or there there isn't too much technically. But I think of my brain    |
| 16:01      | as a computer. And I want to use as little RAM as possible on things that don't don't need it,          |
| 16:13      | so that I can do, I can use the rest of the RAM for things I can't automate, like                       |
| 16:20      | thinking up silly ideas or doing stuff with my family or friends. So, and obviously,                    |
| 16:29      | that is what automating is all about. And with my, and it's not just on my computer, I mentioned        |
| 16:38      | a little bit before about how most of my automations are also like physically based. And I'm still      |
| 16:49      | using shortcuts with NFC tags to run pretty much everything in my apartment. I've got little            |
| 17:01      | stickers set up by my desk in my kitchen in my living room, both where I sit for                        |
| 17:11      | like couch like TV time and a place for reading. And each of those NFC tags triggers a focus mode       |
| 17:24      | to change my home screen or and or start playing something on a HomePod and change the lights          |
| 17:34      | just so I can get in to both literally the focus mode on iOS, but also in my with my own brain.         |
| 17:45      | It's easier for me to be like, okay, now it is, it's like a side by brain goes to hopefully it's        |
| 17:52      | like a solid state drive. Now, it doesn't take as long to to decompress from work or it doesn't         |
| 17:59      | take as long to, you know, go from relaxing to getting stuff going out of the house. And                |
| 18:10      | because I also live in such a small space because I'm in Chicago that and I can't really like when      |
| 18:18      | I say rooms, that's very generous. Now when I suppose it's more like vague areas. So to define          |
| 18:28      | that I kind of do it by lights and those different contexts. And I haven't gotten to the point where    |
| 18:37      | I only work on certain projects in certain places. But I'm kind of almost there because,                |
| 18:43      | you know, blue versus green versus purple lights really makes my brain function in different ways.      |
| 18:50      | And I love that. I know it's not for everybody. This episode of Automators is brought to you by         |
| 18:59      | ExpressVPN. Watching Netflix without using ExpressVPN is like playing your favourite game and not        |
| 19:04      | using all the power-ups. Why limit yourself when there's so much more fun to be had?                    |
| 19:09      | Netflix actually has thousands of shows across different countries, but without a VPN, you only         |
| 19:13      | get access to a limited selection based on your location. With ExpressVPN, you can unblock those        |
| 19:18      | shows by amending where it thinks you're located and it works on other streaming services too.          |
| 19:23      | That means that I can watch the Office US on Canadian Netflix or even Lord of the Rings on               |
| 19:28      | Turkish Netflix with just one click by opening the app, choosing the country I want Netflix to          |
| 19:32      | think I'm in and refreshing. There are so many reasons to use ExpressVPN. It has blazing fast           |
| 19:38      | speeds. You can stream in HD with zero buffering. It's compatible with all your devices, phones,        |
| 19:43      | laptops, media consoles, smart TVs and more. Plus they have servers in 94 different countries,          |
| 19:48      | so you can gain access to thousands of new shows. And it works with other services like BBC             |
| 19:53      | iPlayer, YouTube and many more. You can start paying full price for streaming services and getting      |
| 19:58      | only access to a fraction of their content. Get your money's worth at expressvpn.com/             |
| 20:03      | automators. Don't forget to use the link at expressvpn.com/automators to get those                 |
| 20:11      | extra three months of ExpressVPN for free. Our thanks to ExpressVPN for their support of this           |
| 20:16      | show and all of Relay FM. All right. Before the break, you were talking about your brain getting        |
| 20:24      | upgraded to an SSD. I have the opposite problem. I've come to acknowledge that my brain is more         |
| 20:29      | on the basic abacus level of compute and the automation and all the stuff I do is ways to help          |
| 20:36      | me make an abacus do more than it should. So we're both... Well, that's the thing. You're adding        |
| 20:43      | more rows and more beads. Yeah, yeah, exactly. Before I was on, you know, like a i-book sort of         |
| 20:54      | thing and then hopefully I kind of went to a power book and now, you know, with Silicon                 |
| 21:02      | Max and my M2, my brain is at the hard drive levels that each of those had and the RAM                  |
| 21:12      | amount, or at least I hope anyway. There's a Latin saying, materiam superabat opus[^1], which means the     |
| 21:22      | basically the collection is greater than the parts. And I've decided that's my life's dream,            |
| 21:27      | that when they put me in the ground, they'll say, well, he wasn't really that smart,                    |
| 21:31      | but he did some pretty good stuff with what he had, you know. And I think automation plays a role       |
| 21:37      | there. And, you know, so you mentioned [[Keyboard Maestro]] and screen setups and I will not ever           |
| 21:45      | pass up an excuse to talk about that because I think anybody listening to this should consider          |
| 21:50      | this. And the idea is using some automation tool to set your computer up to do the kinds of work        |
| 21:56      | you need to do in the best circumstances. So it sounds like you've been playing with that.              |
| 22:01      | What are you doing and how's it working? Well, I had tried to use [[Keyboard Maestro]] a little bit         |
| 22:11      | before and used your wonderful MacSparky Fields Guide, I believe, was how I wasn't introduced          |
| 22:20      | to it. But when I was like, all right, I should, I should like actually sort of like get down to        |
| 22:28      | the bones with this. That actually still hasn't happened very, very much. Mostly I kind of am           |
| 22:36      | still doing the thing where it is a surface, I don't want to say surface level, but the main            |
| 22:44      | thing is using scripts to, like I said, put windows in certain things like it will and using triggers   |
| 22:55      | like see, I'm trying to look because previous, I do have an [[Obsidian]]. Also, David, this is a thing      |
| 23:06      | that we both do. It's called CoxOS. And it's just kind of all of my, yeah, it's like all of my,         |
| 23:14      | it's all my like medication stuff, all of like the apart, there's also a section for like everything    |
| 23:21      | that runs in my apartment for if a guest needs to come over. But and I probably should have that        |
| 23:28      | with [[Keyboard Maestro]] too is like my own little read me to re set stuff up when it breaks. Because      |
| 23:37      | I mentioned before the show how I basically quit another job because in 2020, when last we talked,      |
| 23:47      | I was working at a company at Cards Against Humanity here in Chicago as the studio and events           |
| 23:54      | manager. But then in 2020, this thing happened where people really didn't want to be confined           |
| 24:01      | into a studio place, like having eight people there, not the best. Also, running big events in          |
| 24:08      | an office when that office no longer exists, not really a thing. So all of my automations               |
| 24:15      | based around that went out the window. And then I started doing freelance work with consulting on       |
| 24:25      | events, also consulting on just setting up a workflow for your like really if someone had a             |
| 24:35      | really small team, I would set them up. If they didn't have an IT person, I would just kind of be       |
| 24:42      | their go to. And I did a bunch of that for a year. And didn't I don't want to say didn't enjoy it.      |
| 24:52      | But there were so many little things that I had to work around all of my clients in order to do         |
| 25:04      | the specific thing they wanted, even though, you know, it wasn't the best way, which is fine. Like      |
| 25:11      | if you are working for someone, that is what you should do. But they should also pay you. And           |
| 25:19      | sometimes, you know, when you're freelancing, people just disappear. And that was something             |
| 25:24      | that I had never experienced until that. So and I'm like, you know, at all of my automations,           |
| 25:31      | all the things that make me incredibly fast at working, if I am just doing things for myself,           |
| 25:42      | aka just podcasting, none of this would would break. So what I am doing, I finally now this             |
| 25:51      | the past week, [[Keyboard Maestro]] is the only thing it does is right now is set windows and               |
| 26:00      | click certain buttons in logic for me. And the reason I'm able to finally do that is                    |
| 26:06      | I can just run my MacBook Air in clamshell mode. And I don't need to worry about things being           |
| 26:16      | pixel perfect anymore, because it's automatically set up that way. But before I would accidentally      |
| 26:23      | delete a complete track or something with [[Keyboard Maestro]], I'm also Oh, sorry, I'm                     |
| 26:32      | also using a [[Stream Deck]] to run the keyboard, a lot of that stuff in yeah, to run those scripts.        |
| 26:42      | Although I have to say, as I learn more about [[Keyboard Maestro]], I'm realising more and more             |
| 26:51      | each year, along with certain, certain [[AppleScript\|AppleScripts]], shortcuts can do just like more and               |
| 26:58      | more of it. And whenever I go to like Google something, I don't understand it turns out                 |
| 27:06      | someone's like, Well, actually, you can do this just with shortcuts natively. And so that is very       |
| 27:13      | exciting. But for the tiny little pixel perfect things, a [[Keyboard Maestro]] is absolutely magic.         |
| 27:21      | I think their icon Yeah, oh, yep, there's their icon has a little, a little magic wand.                 |
| 27:28      | Do you have a favourite thing, David for [[Keyboard Maestro]]? Like, is there what do you think I            |
| 27:33      | should be doing with [[Keyboard Maestro]] to even expand my musical automation palette with that            |
| 27:40      | specifically? All right. So setups, you know, the idea of setting your screen up to do your edits       |
| 27:45      | or whatever it is work project you want to do. You have done the first building block and that's        |
| 27:51      | setting windows because I feel like for most people, that's the biggest part, like you sit down         |
| 27:56      | at your computer and [[Safari]] is open to [[Amazon]], but you need to make, you know, write the report,        |
| 28:02      | edit the podcast, whatever it is you do to pay for your shoes. What if you could hit a magical          |
| 28:06      | button and [[Amazon]] went away and the editing software came up and the windows were just the              |
| 28:11      | way you like them. So you can feel like you're in the space to do the work.                             |
| 28:17      | Keyboard maestro is fine for that. And but the thing is, it's additive as you build that,               |
| 28:23      | now you've got it. So you can duplicate that and say, well, now what about when I want to do email      |
| 28:28      | while you go and you change the name of the apps, it doesn't open logic, it opens your mail app and     |
| 28:32      | it maybe sets it a little differently. But once you start building these, they become super easy        |
| 28:39      | to make additional ones, you know, and then it's just a question of deciding, well, how much do         |
| 28:43      | you want it to do? Now, historically, I always did them in [[Keyboard Maestro]], but somebody in the        |
| 28:49      | MacSparky Labs challenged me to do them in shortcuts. And honestly, I can do it in shortcuts           |
| 28:54      | just as easily because shortcuts has got powerful enough. And the window management piece of it         |
| 29:00      | was always the tricky part. The shortcuts window management can't hold a candle to                      |
| 29:04      | to [[Keyboard Maestro]]. But what shortcuts can do is run an [[AppleScript]]. And there's an app called        |
| 29:09      | [[Moom]], M-O-O-M. I'm going to give you a labs video where I explain it. [[Moom]] has [[AppleScript]] support.    |
| 29:16      | So you can set up the windows exactly as you want with [[Moom]]. And then you can run a one step            |
| 29:21      | shortcut that says, run my [[Moom]] view for editing podcasts. And they'll say, Oh, great, Alex, no         |
| 29:29      | problem. Here's logic. Here's your text edit. Here's your notes. Here's your whatever. And              |
| 29:34      | it just does it for you. So you can set up very complex windows out of shortcuts. And what shortcuts    |
| 29:41      | gives you is the ability to do things like, Oh, you want me to set your focus mode to editing?          |
| 29:46      | Sure, I'll do that too. Do you want me to run a timer in the timing app? Yeah, I got you covered.       |
| 29:52      | You know, do you want me to play the white noise app in the background? So, so shortcuts does some      |
| 29:57      | things that [[Keyboard Maestro]] doesn't. And so then people are saying, well, should I switch them all     |
| 30:02      | to shortcuts? I'm like, no, not necessarily. If you like it and [[Keyboard Maestro]], just keep doing it.   |
| 30:06      | Because now [[Keyboard Maestro]] can run shortcuts actions. So if you want to stick with keyboard           |
| 30:12      | maestro, then just run the [[Keyboard Maestro]] action to run the shortcut to set the focus mode. So        |
| 30:18      | we live in this, I keep calling it this golden age of Mac automation, because suddenly we've got        |
| 30:23      | these rich tools like shortcuts and [[Keyboard Maestro]] and [[Hazel]] and all these things are like            |
| 30:28      | at their peak. And they all talk to each other. So whichever one you want to fight you on that,         |
| 30:35      | David, I don't think we are living in a golden age of Mac automation. That was in, you know, the sort   |
| 30:42      | of, uh, well, I was going to say that was the cells to go in days, but he's still just killing it       |
| 30:49      | with especially what he's doing with voiceover. But we are in a golden age of [[Apple]] automation,         |
| 30:57      | because so much can finally talk to each other in a way that adds to that contextual computing.         |
| 31:08      | So for the weirdos like me who want to run everything on iOS, it works now. Like I can                  |
| 31:15      | trigger keyboard, I guess I can trigger [[Keyboard Maestro]] things from my phone. If I were to a           |
| 31:24      | remote, uh, like let's say I mentioned before the show, I have a separate Mac. If I want,               |
| 31:30      | if that's on, I guess I could probably maybe run it with shorter push, Pushcut that's in              |
| 31:38      | the care of Rosemary or George or so. We're gonna unleash Rose on push cut for you in just a minute     |
| 31:43      | here. But one way you could do it is you can have [[Keyboard Maestro]], you can have basically a secret     |
| 31:48      | URL. So you could call that URL from your phone and then it would trigger [[Keyboard Maestro]] on your      |
| 31:54      | second computer and do all that stuff for you. Yeah, that's that's what I was thinking, because I       |
| 32:00      | also use, well for launching the apps, I for a while had a mix of a bunch actions too with a            |
| 32:13      | [[Brett Terpstra]], which is what I would use on my laptop when I couldn't be, when I can't be in          |
| 32:21      | clamshell mode. Mostly, I know that you can do it with [[Keyboard Maestro]], but it was one of the          |
| 32:27      | things where it worked. And if it didn't, I could text Brett and say, what am I doing wrong?            |
| 32:33      | And you'd be like, here, here's the right script that you need to run it.                               |
| 32:38      | And in fairness, that thing I just described, you could do the entire thing in bunch,                   |
| 32:42      | because bunch can make shortcuts and it can run [[AppleScript]]. So you really get to choose your          |
| 32:48      | weapon. Yeah. And the other thing is, I'm pretty certain the bunch docs are where David found the       |
| 32:52      | [[AppleScript]] for [[Moom]] as well to run [[Moom]] to set the screen. The other thing I want to mention,         |
| 32:59      | by the way, about [[Moom]] is what you do with [[Moom]] is you click on the [[Moom]] menu bar icon,                 |
| 33:06      | and then you just click on save window layout snapshot. So like you put your windows where              |
| 33:10      | you want them, and then you're just like, just save it. Like, just save what I've got. Like,            |
| 33:15      | give it a name down. That's it. Like, bam. And then, yeah, that's it. Done. And then it's also          |
| 33:22      | got the, like, if you hover over the full screen icon, then it's got like, expand this to the full      |
| 33:31      | size of the current screen, but not like full screen. It's got put it over on the left side,            |
| 33:36      | put it over on the right side, put it on the top half, put it on the bottom half. And then at the       |
| 33:40      | bottom, it's got a rectangle. And you can also change this to use hexagons, which are the best          |
| 33:44      | icons. But then if you click on that little rectangle, then you can just like, select an area           |
| 33:49      | of your screen, and it kind of like, drags out like, LEGO bricks almost. And, and, and like,           |
| 33:56      | then, then it'll just snap the window that you've just, you've just changed the size of to that,        |
| 34:01      | exactly that. And then there's like, other options within there inside of that for like,                |
| 34:06      | move it to like, I've got an ultra wide monitor. So I've got things like, move it to the right          |
| 34:09      | hand third of my screen, and stuff like that. There's just so much you can do with [[Moom]]. It is          |
| 34:14      | truly crazy. And it's one of those things like, I can absolutely resize a window using something        |
| 34:20      | like cable maestro. cable maestro is a great app to use for resizing windows, if that's the app         |
| 34:24      | you're already using, and that's what you're used to and so on. But if I just want to, if somebody      |
| 34:28      | wants a recommendation for an app, that's going to like, move windows on their screen. I'm just         |
| 34:33      | going to tell them to try [[Moom]], because it's very, very easy to like, get into. And that, that menu     |
| 34:39      | bar save window layout snapshot, it's just so powerful. It makes it really, really easy to dive         |
| 34:45      | into. So you know what, Rose? I bet even if for some reason, a person is bonkers and was like,          |
| 34:54      | no, I'm going to do, that's dumb. I'm going to do my own thing. But I just went to the app store        |
| 35:03      | for [[Moom]]. And guess what? There's an app story that's clean up your windows. And what they              |
| 35:10      | suggest is, is [[Moom]] and a couple, a couple other tools. And basically, they teach you how to do         |
| 35:17      | this in, just in the basically, it's not an ad, but, you know, little app, yeah, featurette,            |
| 35:26      | which is another reason that I am excited about, like [[Apple]] just showing off what's essentially         |
| 35:33      | an automation. And it's even more accessible. That's wild. I am so stoked about that. Well,             |
| 35:42      | I'm very excited.                                                                                       |
| 35:43      | It's another one they mentioned there and better snap tool, which is built into [[BetterTouchTool]].      |
| 35:49      | If you've got that, yeah, there's, there's a whole bunch of different options for this stuff.           |
| 35:53      | I personally just like [[Moom]], it works really, really well for me. It's silly easy to use,               |
| 35:59      | I'm going to say, like, it took me a little while to figure out, like, how do I calculate one third     |
| 36:03      | of my screen? I was like, it doesn't matter exactly how I calculate it. I just need to get              |
| 36:08      | it about right. And then I can always adjust this over time. But yeah, there's a bunch of options.      |
| 36:13      | I found that story, by the way, from the app store, and I'll put a link in the show notes. And          |
| 36:17      | from what I remember that link, even if you don't have a Mac, should open on iOS as well,               |
| 36:21      | so that you can have a look at that. I have always been curious about the, like, what would happen      |
| 36:31      | with window management on the Mac when, let's say, a theoretical headset would come out. I'm like,      |
| 36:41      | okay, [[Apple|Apple's]] going to care a lot about window management eventually. And obviously, stage              |
| 36:49      | manager is what that was. But I'm so glad to see they are embracing the use of third-party apps         |
| 36:57      | still. And that also makes me excited for the possibilities for visionOS eventually,                    |
| 37:04      | which I know is later down on the document. Y'all are so organised with this.                           |
| 37:10      | I mean, I mentioned this to you when we were talking pre-show Alex, like,                               |
| 37:15      | our show outline is more of a sort of rough guideline of, here's a couple of markers,                   |
| 37:20      | let's try and hit them at some point. But it's like one of those adventure runs where it's like,        |
| 37:24      | your aim is to hit all the markers and then go to the finish line, but                                  |
| 37:28      | like, there's no order required. So that you need to do.                                                |
| 37:34      | It's fine. If we end up with too many side quests, we'll just get you back in a couple of months         |
| 37:39      | and continue talking about all this. I mean, just one last point on [[Moom]], though,                       |
| 37:43      | as people do write me and say, well, you know, this other one does this or that,                        |
| 37:46      | and, you know, but I just find it really hard to not recommend [[Moom]] because                             |
| 37:53      | the combination, it has so many window management features built in. And then                           |
| 37:57      | the ease of you saving a set up windows like Rose was talking about, and then the ease of               |
| 38:02      | triggering it via [[AppleScript]]. It's just such a killer combination. I just don't know how you          |
| 38:07      | not use that. And it, Rose is right. Like setting it up in [[Keyboard Maestro]], as much as I'm a           |
| 38:13      | fan of [[Keyboard Maestro]], it is a thing where you have to set a percentage or you have to set a pixel    |
| 38:18      | location. But what if you change your screen display or whatever? And [[Moom]] just kind of solves          |
| 38:25      | that for you. And then you can drop it into any automation platform. You can put it in,                 |
| 38:30      | you know, you put it in bunch, you can put it in shortcuts, you can use in [[Keyboard Maestro]].            |
| 38:33      | It doesn't matter. And then it just gives you, but, but, and then the big point I want to make          |
| 38:38      | before we move on is you've started it. You've got, even if you just have one, you've, you're           |
| 38:44      | like 75% of the journey just by getting one, because now it gets super easy. And then you're            |
| 38:50      | going to find yourself saying, Oh, you know, what about when I want to, you know, do ad recording?      |
| 38:57      | Or what about when I want to set up a new client project or whatever it is that you need to do          |
| 39:01      | next? No, no client projects, David. No, as I said, the words, I almost like suck them back in.         |
| 39:07      | I know you don't want to do that, but, but somebody listening might. And, and the point is              |
| 39:11      | whatever it is that you want to do next, once you've built the structure, you duplicate it,             |
| 39:16      | you change a few things, and then you've got it, you know, and then the last piece of these             |
| 39:21      | setups is having an easy way to trigger them. And you had said that you were doing it with a            |
| 39:26      | [[Stream Deck]], which is great. Like [[Keyboard Maestro]], you know, you set up a button, run a keyboard       |
| 39:32      | maestro script, you can do the same thing with shortcuts or a bunch. But, you know,                     |
| 39:36      | making triggers on a [[Stream Deck]] is great. If you're using [[Keyboard Maestro]], a conflict                 |
| 39:40      | palette can work. There's, there's a lot of different ways. But as you start getting into               |
| 39:43      | this, you should think about, well, how do I want to trigger these? And what's the easiest way          |
| 39:47      | for me to jump between them? Yeah, I didn't even mention [[Alfred]] and [[Raycast]], which                      |
| 39:53      | I also both see you use. [[Raycast]] is awesome and it runs shortcuts right out of a box. Yeah.             |
| 40:00      | Oh, so cool. Yeah, before we move on from [[Moom]], I do just want to mention that [[Moom]] also has            |
| 40:04      | built-in triggers, because of course we love automation apps. [[Moom]] has an option to trigger             |
| 40:09      | automatically when switching to the card, like your display layout matching like something in           |
| 40:15      | particular. So if you connect like one monitor that's got say 3,440 by 1,440 pixels and one             |
| 40:23      | that's 2,560 by 1,440, then it can automatically like rearrange your windows when you connect to        |
| 40:30      | that display layout, which is great for something like a laptop that you would dock and then undock     |
| 40:36      | even if like, if you're not using it in clamshell mode, if you're using it in an open mode,             |
| 40:40      | which is what I do with my machine. And it's just so nice that it can just be like,                     |
| 40:44      | hey, I can tell that you have done this. I'm just going to rearrange your windows for you,              |
| 40:48      | because that's what you told me to do. And it's got keyboard shortcuts and stuff built in as well       |
| 40:53      | that you can set up for each of your rearrangements. So yeah, it's really good.                         |
| 41:00      | This episode of The Automators is brought to you by TextExpander.                                       |
| 41:04      | Your shortcut to efficient, consistent communications, get 20% off. Just go to                          |
| 41:09      | textexpander.com/automators. When you work in a small team, every moment counts,                  |
| 41:15      | you don't want to be wasting your time finding video conferencing details to send to a new client,      |
| 41:20      | or you don't want to track down the same FAQs from the company website.                                 |
| 41:24      | These are the kinds of things you want at your fingertips, so you can get your work done faster.        |
| 41:29      | And that's why you need TextExpander. With TextExpander, you can access what you type the most          |
| 41:34      | with just a few keystrokes. Gang, if you're automators, this is the best place to start.                |
| 41:40      | Allowing you to work faster and eliminate repetition, TextExpander lets you focus on what               |
| 41:45      | matters most to you. TextExpander's powerful shortcuts and abbreviations streamline your                |
| 41:50      | team's work. All you have to do is type a short abbreviation, and TextExpander does the rest for        |
| 41:56      | you. You just build and collect your most commonly used phrases, messages, URLs, and more               |
| 42:02      | right within TextExpander. Then create your chosen abbreviation, and they'll be with you                |
| 42:07      | wherever you type. You can even customise the snippets by having them automatically add in              |
| 42:12      | dates, fill in the blank fields, timestamps, and more. This will make sure that you still               |
| 42:17      | keep the personality and the communication you send. TextExpander is available on any device            |
| 42:22      | you use across any app you use on Mac, Windows, Chrome, and iOS. I use the heck out of TextExpander.    |
| 42:30      | Just this week, I released a new field guide, the [[Obsidian]] Field Guide. I would not be able to get      |
| 42:34      | through this week without TextExpander because there's so many email questions,                         |
| 42:38      | there's so many special links I need to send. I do all of that. In TextExpander, it just makes          |
| 42:44      | everything so much easier. Every year, I look at the estimates of time saved in TextExpander,           |
| 42:49      | and I literally save days of my life every year. This is simple and powerful automation.                |
| 42:55      | You're an automator, you should check it out. If repetitive typing is getting you down and you          |
| 43:00      | need TextExpander, check out TextExpander today at textexpander.com/automators,                   |
| 43:06      | and you can get 20% off your first year. That's textexpander.com/automators to say goodbye        |
| 43:14      | to repetitive typing. Our thanks to TextExpander for all of their support of the automators.            |
| 43:19      | Alex, you teased us NFC tags. You said you've got NFC tags everywhere. You've got stickers.             |
| 43:27      | I've got NFC plastic chips and card-type chips that I've put in a bunch of places because               |
| 43:36      | I've stuck them to my vitamin box and so on, so that when I type my vitamins,                           |
| 43:39      | I can tap my phone on it and be like, I've taken my vitamins. Now, I don't need to think about it       |
| 43:43      | because Shortcuts magically goes up and does the work. You mentioned there's focus modes involved       |
| 43:48      | here, this background noise. What happens when your phone scans an NFC tag? What do they look like?     |
| 43:53      | Are they just white or black stickers? Have you got pretty patterns on them? What's going on with       |
| 43:58      | these?                                                                                                  |
| 43:59      | Vitamins.                                                                                               |
| 44:03      | Okay, vitamins for the Americans. I'm sorry.                                                            |
| 44:06      | Well, back when I was in university, actually, I was going to say the biggest struggle I have had       |
| 44:15      | with NFC tags is finding some that don't break. I guess the best luck I've had is with the              |
| 44:27      | [[SwitchBot Tag\|SwitchBot stickers]]. Those are on [[Amazon]]. They're a bit more expensive than the stickers that you        |
| 44:35      | can buy for $3. There's like 80 of these little stickers, but what I use, I guess they're almost        |
| 44:47      | like cardstock a little bit. They used to be very colourful when I had each of my contexts               |
| 45:01      | or focus modes. They are based around a certain colour. Let's just say my spouse thought they            |
| 45:11      | were a bit garish. Now they are all white and my muscle memory and having them long enough,             |
| 45:19      | I don't really need them labeled. Every morning when I am in my bathroom, I just slap my phone          |
| 45:29      | on the mirror and that triggers my wake up NFC. I know that you can run an automatic shortcut to        |
| 45:41      | automate something directly in shortcuts to turn on your lights, turn on the music, and                 |
| 45:47      | do the alarm, all of that stuff. My problem was I would talk to the [[Apple]] lady and then fall back       |
| 45:59      | to sleep even though all of the lights would be on and music was on. That's why I have a sticker.       |
| 46:06      | Like after my alarm goes off, I need to tap that phone to the NFC tag to it turns all of the            |
| 46:17      | lights from this garish wake up colour. I do all of this with hue lights and shortcuts with home         |
| 46:27      | kit. I know that some people don't like hue but it's just always worked for me. They have simple        |
| 46:37      | physical switches as well and that's one thing my spouse does like. They don't need to use the NFCs     |
| 46:44      | to control the lights. In the morning it starts my toothbrush timer and the lights on turns my          |
| 46:56      | music on and sets a timer for all that. In 30 minutes, all of that shuts down very abruptly.            |
| 47:06      | The music stops. The lights in my apartment turn blue so that it's like, okay, it is work mode.         |
| 47:16      | When I say blue, I mean the one that mimics sunlight theoretically. Oh yeah, like that cold white       |
| 47:26      | blue. Yeah. It's not the most pleasant thing but it's just to be like, okay, now is the time to         |
| 47:37      | if you've been messing around, you only need 30 minutes to get ready, change things. If for some        |
| 47:45      | reason I need to go in and stop an automation, that just mucks everything up. In order to not get       |
| 47:55      | into the muck, it motivates me to get up and do those things and it migrates perfectly to               |
| 48:03      | chunking blocks of time for working. That motivates me when an automation will break.                   |
| 48:19      | I don't enjoy that. Maybe someone has a weird special thing where they're like, yes, my shortcut        |
| 48:27      | broke but I'm not that person. I try to basically think of those NFC tags as an extension of my         |
| 48:38      | brain of like, all right, if I am tapping this button, it is tapping a part of my brain. I just         |
| 48:46      | try to imagine that it's like, okay, that is that light change. Your brain did that. I know             |
| 48:54      | this sounds like bunkers but yeah, so it's bathroom and then I sit at my desk and then tap              |
| 49:02      | another NFC tag. This is a question. Well, I think I will be able to answer this question               |
| 49:10      | myself. Since I run shortcuts via NFC tag, would I be able to trigger that shortcut and it also         |
| 49:29      | talks to my muck and arranges it in a certain way? Oh my gosh, I'm so happy. In theory, I could         |
| 49:37      | just hit a button on my [[Stream Deck]]. That's what I do now to set everything up. First thing in the      |
| 49:47      | morning is whatever I want to do least. It opens up a specific OmniFocus context in the                 |
| 50:01      | not context. A perspective that is a list of things I want to do least. It has a naughty word           |
| 50:12      | as the tag. So let's just say the things I want to do least. It pops up in the corner and my email      |
| 50:21      | opens, [[Drafts]] opens, a Google doc. Well, it used to be whatever the current project was for a client    |
| 50:31      | I was working on would open and that would then I just sit for however long and then middle of          |
| 50:43      | the day I go to like take a quick break and then I run I go to my kitchen and run another NFC tag       |
| 50:52      | that is pretty basic. It changes the lights to like normal, but it will also run a I have               |
| 51:03      | a switch bot mechanical thing. I don't know. I don't have anything that can open.                       |
| 51:11      | Yeah, yeah, a button presser that will make me an afternoon espresso and it also opens                  |
| 51:17      | the blinds or the curtains. I don't have a fancy like IKEA thing that will do it automatically.         |
| 51:26      | I have a physical thing that like latches on to the pole that we had to install over the window.        |
| 51:33      | My flat. I love British English so much. We should adopt it. Yours should be the correct                |
| 51:44      | the like canonical thing. It's funny because I am trying I'm like opening CoxOS and looking             |
| 51:53      | at this because so much of this now is just ingrained in my brain. Like all right, my afternoon         |
| 51:58      | break is done and then I go I come back to my desk and I have a separate NFC tag I could probably       |
| 52:06      | now I realise no that that is too much. I was about to say like I wonder if I can run a shortcut        |
| 52:13      | and that context depending on the time it would change and I would only need one shortcut but           |
| 52:20      | I don't know if that would work and I probably shouldn't do it. Well, what you could do is              |
| 52:26      | you could log inside or using shortcuts when you run the shortcut in the morning                        |
| 52:33      | or tell you, well, let's start with in the bathroom in the morning,                                     |
| 52:36      | like when you when you tap your NFC tag there, it could reset a variable in [[Data Jar]],                   |
| 52:42      | which is like Alex's day progress or something like that. I don't know. Whatever you want to            |
| 52:46      | call it, you know, whatever is appropriate for you. And then when you go and you tap the NFC tag        |
| 52:52      | at your desk, then it'll say, okay, Alex's day has progressed to one. You know, just I'm using          |
| 52:58      | numbers here for the sake of simplicity, but you could say like morning, morning work or whatever.      |
| 53:04      | And then if you tap it again, like the first thing that you could do is have the have the               |
| 53:08      | shortcut check this and say, okay, what is this? Oh, I already did morning work. Well,                  |
| 53:14      | in that case, I'm now going to turn on afternoon work. But if you haven't done morning work,            |
| 53:18      | then it will run the morning work one. So for example, if I don't know, you fly back from               |
| 53:23      | somewhere and you sleep late, as you don't get up until later in the day and you don't start            |
| 53:27      | working until like two or something. Then when you tap it, it'll be like, I'll just do the morning      |
| 53:31      | work one because, you know, that's that's well, that's nothing's happened yet. So yeah, like            |
| 53:36      | if you did something like that, you could use [[Data Jar]], you could use global variables into             |
| 53:40      | books pro, you know, there's a number of different options for that. But, you know,                     |
| 53:44      | you could definitely do that. And to go back to your question about triggering stuff on the Mac,        |
| 53:49      | [[Keyboard Maestro]] has like URLs that you can use to trigger stuff. So you can just use a get             |
| 53:54      | contents of URL with the [[Keyboard Maestro]] macro URL. Oh, yeah. The only thing I'll say about that       |
| 54:00      | is I have used this before, and I stopped using it not because it didn't work. It works. If your Mac    |
| 54:06      | is on, if your Mac however, is asleep, and password protected, guess what? Yeah, [[Keyboard Maestro]]       |
| 54:13      | macro URL can't do a lot because your Mac is asleep. So you're there going computer, do the             |
| 54:18      | magic thing. You just like, yeah, that's snoring sounds. But if you've got an extra Mac around,         |
| 54:25      | like you do Alex, that might be a great use for you, you know, to keep it running. It's kind of a       |
| 54:29      | background server. Before we move on, one modification to your workflow I wanted to add.                |
| 54:35      | If you look in the show notes, I put a link in there for you. And this is something I'm                 |
| 54:41      | literally tempted to just buy it and send it to you because I just want to hear the story of this.      |
| 54:47      | But they make a little device called the Clocky running alarm clock. And this is a robot. So            |
| 54:54      | it's automation. And what it does is it sits on your nightstand, but it's an alarm clock with two       |
| 54:59      | wheels on it. And when the morning, when the alarm goes off, if you don't turn it off fast enough,      |
| 55:05      | it jumps off your nightstand and races around the room and hides itself and it keeps ringing until      |
| 55:11      | you find it. Oh my goodness. David, I feel like this works better for people who own a house            |
| 55:15      | instead of somebody who lives in a very small area. No, I think it's even better in a small area.       |
| 55:19      | It's just like, can you just imagine something like running under the bed and it's got the QR,          |
| 55:24      | you put the QR sticker on the back of it, right? Put the QR sticker on the back                         |
| 55:28      | and just, just chase it around with your phone. Like you're running around the phone                    |
| 55:32      | in your pajamas saying, come back. I feel like this is like, well, there's things where like,           |
| 55:36      | you have to like go to the kitchen and then like scan an NOC tag and that presents like a maths         |
| 55:40      | puzzle for you to solve. And if you get it wrong, then it doesn't produce your morning coffee until     |
| 55:44      | you get it right. If you're there crying, what is two times seven? I can't do two times seven without   |
| 55:49      | coffee. There used to be a Gmail feature that was that. It was great. Yeah, I think, I think Alex,      |
| 55:56      | this could really work. And, but they make another one with like a little propeller on it and it        |
| 56:00      | takes off and flies around the room. And then the alarm won't stop ringing until you retrieve the       |
| 56:05      | propeller and return it to the clock. So that's another option. Are you serious? Yes. I have            |
| 56:11      | like, I had a little doll as a kid where it would go into like a thing and you pull like a cord on      |
| 56:16      | it and like the doll would like spin out and like fly off somewhere and you'd free forever,             |
| 56:20      | chase it over the car. It reminds me of that. This, I think, you know, I have a show that is            |
| 56:27      | not just about robots, but, but we, we talk about robots a lot. If this feels like something            |
| 56:33      | that I can expense to, to do a weird. S-Royce, this is not a counting advice. Please contact your       |
| 56:41      | accountants. Chase in your clocks around the house. Yeah, I can see that. Yes. This is,                 |
| 56:46      | this looks amazing. My gosh. But the automator angles, you have to put your QR sticker on the           |
| 56:52      | back of it. So yeah, the NRC sticker goes on the back of it. And so it's only when you found it.        |
| 56:57      | That you can scan it. Yeah. I've, I've also found actually the new, there, there was something          |
| 57:07      | with the iPhone 12 pro that NFC tags failed for me a lot, but I haven't had that issue anymore,         |
| 57:16      | which is. The radio got better. I heard that too for people. Yeah. Oh, okay. Good. Good. Cool. Yeah.    |
| 57:23      | I mean, it's one of those things where, you know, a lot of people think that you need to like touch     |
| 57:28      | the NRC tag to like your device and, and you don't, it's like there's a little scanner, essentially,    |
| 57:33      | it's like, it's right next to the camera on the back of your phone. It's not like inside the camera,    |
| 57:41      | it's just next to it, but like it should be able to scan it from like a centimeter, two centimeters     |
| 57:47      | away, like half an inch away from the NRC tag. So yeah, you don't actually have to like touch           |
| 57:52      | it to it. And if you have to touch it to it, that might be a sign that the NRC tag is actually          |
| 57:56      | broken, which is one of the reasons why I switched to like the plastic chip and card varieties,         |
| 58:01      | rather than stickers, because I can use like either a glue gun, or some like blue tech,                 |
| 58:08      | white tech, like, I don't know if Americans have this, I don't know what the equivalent is.             |
| 58:13      | It's kind of like a chewing gum like texture, but it doesn't stick permanently. That stuff              |
| 58:16      | from putting up like posters and so on. I can use that to like stick the NRC tags to a lot of           |
| 58:20      | things, which is great. And then yeah, I just don't have the issue with it breaking anymore.            |
| 58:26      | Oh, that's awesome. Can we put in the show notes what you use just because I'm, I think I might         |
| 58:34      | do this, because it also looks like it won't yellow as quickly as a sticker does. That's also           |
| 58:42      | why I have to replace them. Yeah, yeah, this is the advantage of like the hard plastic chips,           |
| 58:47      | and they come in like white and black and so on as well. And you can always stick like a sticker        |
| 58:51      | on them to like tell you what they mean or whatever. But at the same time, you can also just            |
| 58:56      | use them as like a plain white chip, which you know, has the partner approval factor of these           |
| 59:02      | don't look garish and disgusting or weird, like what is going on here? Exactly. Oh, and I should        |
| 59:11      | also mention that all of these, of course, trigger time tracking shortcuts that are via Timery,         |
| 59:23      | the amazing app that I think everyone uses. But if you aren't using Timery, you should. It's            |
| 59:30      | probably, it is probably my most important like quote productivity app other than OmniFocus. And        |
| 59:41      | that's just just a huge thing. I always have a timer running just to make sure that I'm on              |
| 59:50      | track. Because if at the end of the week, I look at my report, and I haven't done what I set out to     |
| 59:59      | do, it makes me sad. And sometimes what I set out to do is literally just play video games.             |
| 01:00:06   | Next to my switch, there's also a little NFC tag. But on the back of my [[Nintendo Switch]],                |
| 01:00:18   | and that just turns all the lights down and starts my video game timer. I have a timer                  |
| 01:00:27   | or project in Timery that's just called Life. And that is what I use whenever I am just tracking        |
| 01:00:40   | existence that isn't work involved. And I want to see that bar of the graph get bigger every            |
| 01:00:50   | week. That's the goal anyway. Isn't it shocking to you, though, to see that data? Because you           |
| 01:00:55   | have this perception of how you're spending your time, and then you look at it and you're like,         |
| 01:01:02   | and the actual numbers are so far different than what you think you're spending your time on.           |
| 01:01:06   | I'm always shocked by that. Yeah, I've been time tracking since I, gosh, it was hard in high            |
| 01:01:17   | school because we weren't allowed to have phones on us or anything. But it really also just makes       |
| 01:01:26   | it easier to find out where your time is being spent in ways that are... I'm not even talking           |
| 01:01:35   | like, oh, I was too quote unquote lazy. No, I'm like, oh, I spent a long time on this project           |
| 01:01:43   | and I don't really enjoy it. And there's not really any benefits from it. So let's make that            |
| 01:01:50   | report a lot smaller. I only want to see a little bit of email and administrative time,                 |
| 01:01:56   | not that being a giant thing. This isn't do by Friday, this is automated, sorry.                        |
| 01:02:04   | But at the same time, time tracking is a really valuable tool and being able to automate that           |
| 01:02:10   | is something that's really, really useful. So I've been automating a bunch of my time tracking.         |
| 01:02:14   | You know, if I'm taking a ballet class or an acrobatics class, guess what? I run my [[Apple Watch]]         |
| 01:02:20   | workout tracking and that starts a timer timer. And then when it stops, it stops the timer timer.       |
| 01:02:26   | Really simple. I get into my car and start driving. It starts a driving timer. I get out of my car      |
| 01:02:31   | and therefore I've stopped driving. It stops my driving timer and it allows me to just know where       |
| 01:02:35   | my life is going automatically, giving me a much better sense over the week of, okay, well, we're       |
| 01:02:41   | just spent this much time sleeping, this much time driving, and this much time doing these various      |
| 01:02:48   | things like podcasting, automated time tracking and things like that because I use a bunch to start     |
| 01:02:52   | my podcasting mode. And one of the things it does is run a shortcut that starts my podcasting timer.    |
| 01:02:59   | And so I can then look back on my week. Even if I've forgotten to do manual time tracking,              |
| 01:03:04   | which, you know, I'm working on doing some stuff with the [[Stream Deck]] and so on, with Keyboard          |
| 01:03:09   | Maestro, I'm stealing from TJ Luoma as Fantastic L, Fantastic Pal, as script as an idea of like,         |
| 01:03:16   | you know, I'll just have different colours on a [[Stream Deck]] button and have [[Keyboard Maestro]]             |
| 01:03:20   | change it based on, you know, stuff that you can check or stuff that gets triggered, which happens      |
| 01:03:26   | to be done thanks to, you know, timer and shortcuts. Then yeah, like, you know, I even if I forget to   |
| 01:03:33   | do the manual stuff, it's amazing how much stuff does get logged. And things like turning down          |
| 01:03:38   | your lights when you start, you know, playing a game and so on. I've been fortunate enough to be        |
| 01:03:42   | able to completely automate that. So if I start playing a film, like my living room just dims           |
| 01:03:47   | all of its lights and everything for me, which is just great because then, you know, I sit down to      |
| 01:03:51   | watch film, all the lights dim, I hit pause, the lights come back up. So if I need to go to the         |
| 01:03:55   | bathroom, like I hit pause, I can immediately see where I'm going, I come back, I hit play,             |
| 01:03:59   | and it just dims back down into like a cinema mode, stuff like that. It's all automation,               |
| 01:04:04   | and it's just so much fun. Alex, you mentioned [[Apple|Apple's]] Vision OS and Vision Pro Glasses earlier         |
| 01:04:13   | in the context of context, like how I did that. So I too am thinking like you, every time I talk        |
| 01:04:23   | to Alex, I wish you lived closer because you and I, our nerd alignment is so close. I just feel         |
| 01:04:29   | like we would have so much fun if you lived closer. But the, but either way, what are you               |
| 01:04:33   | thinking about with the Vision OS? It's almost like I've been listening to you for a decade and         |
| 01:04:37   | it's sort of influenced the way I think. Yeah, but you always influence me every time we talk.          |
| 01:04:42   | You have such good ideas. I went, when Vision OS was announced, I mean, I think I'm more excited        |
| 01:04:51   | for a new operating system than I am the actual headset. If anyone, everyone should subscribe           |
| 01:05:01   | to my podcast and pay me so I can get a Vision Pro. No, but as I talk about, you know, all of these     |
| 01:05:12   | contexts throughout my apartment, again, they are contexts more importantly for my brain. And I         |
| 01:05:22   | am so excited that it's going to become a, the like images and, or not images, but like my              |
| 01:05:31   | sightlines are going to literally be able to, you know, be contextually triggered by like a tap of my   |
| 01:05:42   | thumb to my forefinger or whatever. That is the dream, putting on a headset and then having             |
| 01:05:52   | all of this in front of me, like having just, oh God, I bet you guys too are just imagining             |
| 01:06:03   | putting like pulling shortcut blocks in the air. That's just, that's so exciting to me.                 |
| 01:06:11   | Because I know folks are very worried about it taking you out of the real world. And sure,              |
| 01:06:20   | it's very early days, but it's also, I think, about getting the unimportant stuff out of the            |
| 01:06:31   | way. It's going to make it even easier switching contexts with Vision OS. We saw at [[WWDC]] this           |
| 01:06:42   | year. I think we saw more entertainment things than productivity and work stuff because that's,         |
| 01:06:49   | you know, what gets normal people for lack of a better term, excited. And I mean, with Vision           |
| 01:07:00   | OS already, it's going to, you know, have shortcuts. That's correct, right? They did                    |
| 01:07:08   | announce that it's going to, you'll be able to trigger shortcuts on it because they,                    |
| 01:07:12   | I don't remember 100% of being announced, but I do know that, you know, iPad apps can run on Vision     |
| 01:07:18   | OS. Kind of like you can run an iPad app on a Mac, you know, like the developer has to,                 |
| 01:07:23   | you know, make sure it's compiled for it and check a checkbox. You know, it's not going to be           |
| 01:07:28   | perfect if they just go, yeah, sure, I'll just check the box. Let's go for this. But it should          |
| 01:07:34   | work. So my understanding is, yeah, shortcuts is there on or will be there on Vision OS.                |
| 01:07:40   | And yeah, if [[Final Cut Pro]] is going to run on visionOS, I feel like most things should be              |
| 01:07:53   | able to as a digital button should be easy to press. But I like with the way that, you know,            |
| 01:08:07   | the iPad has [[Stage Manager]] and iOS has different focus modes. I want that in front of my face.          |
| 01:08:17   | Like I want reminders of what I should or could be doing without having to, you know, do something      |
| 01:08:29   | that, I don't know, it's difficult to explain because so much of it is really,                          |
| 01:08:34   | it's so different for everyone, their needs, but also their abilities. My biggest, I think,             |
| 01:08:46   | gripe with all of [[Apple|Apple's]] OS is how much the accessibility settings are buried within settings          |
| 01:08:57   | because, you know, all of us nerds can go off about the UI of every sort of system preferences          |
| 01:09:07   | UI. It's just a mess everywhere. I know it's difficult. But accessibility,                              |
| 01:09:17   | it's definitely changing. But for the longest time, it's not that it was stigmatised,                   |
| 01:09:24   | but it really wasn't talked about at [[WWDC]]. And people, I don't think, were just using it to its         |
| 01:09:34   | full potential. But now that, you know, it's so baked in with shortcuts and stuff like that,            |
| 01:09:44   | I know that for me, at least, having things on Vision OS and like, you know,                            |
| 01:09:52   | using voice control and something with Vision OS and having my hands be free to do whatever             |
| 01:10:00   | is going to be huge because it's just that little, I just get a little bit of RAM back.                 |
| 01:10:09   | Like, if I have something in literally in the corner of my vision, it can be helpful. There's           |
| 01:10:16   | this app called One Thing and it literally just sits in your menu bar and does one thing. And           |
| 01:10:24   | that's always what I am working on. Is that one thing? And it's in my menu bar and I can always         |
| 01:10:32   | see it. I think with Vision OS, sure, you, it's always in your vision and it's like,                    |
| 01:10:39   | ah, your work can be everywhere with you. And it's like, no, no, no, I want it to be like,              |
| 01:10:44   | yes, this is always here with me and I can, you know, being able to physically automate something.      |
| 01:10:55   | There's something about it that gets me excited about the future of automation and the future of        |
| 01:11:02   | accessibility because, you know, a lot of my shortcuts do end up, they end up having accessibility      |
| 01:11:13   | actions, whether it's, you know, my nighttime one changes the text to be bigger on my iPad,             |
| 01:11:19   | so I can read it. I mentioned before the show how I like to change my AirPods settings when I am        |
| 01:11:29   | out and about because it makes me, it makes it easier to hear folks. I use my iPhone sometimes          |
| 01:11:38   | to magnify things that if I can't, you know, read something, like you don't have to be,                 |
| 01:11:44   | you know, quote unquote, like disabled to use accessibility is for everyone. And hopefully,             |
| 01:11:53   | people have heard this a million times, but I kind of, I'm really excited to see what Vision OS         |
| 01:12:00   | does with accessibility and not even just like site-wise, but whatever, like just different             |
| 01:12:09   | ways to use your hands. I was very much like, there's not going to be a controller for the              |
| 01:12:17   | Vision Pro, like there's no way, no, [[Apple]] has been literal hands-on since the iPhone, like,            |
| 01:12:24   | no, future is, you know, air pokies. And I think being able to blink and move all of my windows,        |
| 01:12:36   | like, that's what I'm thinking about, I guess, like blinking and completely changing context,           |
| 01:12:44   | not blinking, but, you know, like blinking, blink three times, and then suddenly you're                 |
| 01:12:49   | in entertainment mode and all of your, all of your lights have changed. That's almost like              |
| 01:12:55   | teleporting. Yeah, and it's still hard for me to, I mean, I'm mumbly and stumbly and all the time,      |
| 01:13:11   | but even more so when I'm thinking and talking about Vision OS, since it's so new,                      |
| 01:13:16   | there's so much imagination to be had. I feel like there's so much more to the interface                |
| 01:13:23   | that we haven't seen that, like, when the iPhone was new, people were new to a touch screen,            |
| 01:13:29   | and [[Apple]] went really slowly for the first several years, getting you to do more gestures and more      |
| 01:13:34   | complex things. And I feel like there is a whole library of gestures inside [[Apple]] that they're          |
| 01:13:39   | not going to expose to, like, version three of this product. And some of those will be in accessibility |
| 01:13:44   | and some of them just won't be visible yet or available, but they'll come at some point.                |
| 01:13:50   | The other thing that you touch on, Alex, that's interesting to me is the idea of context and            |
| 01:13:54   | Vision OS, because you and I are tracking, because I'm like, I love the idea of being able, like,       |
| 01:13:59   | for me, it's like even more deep, like, what if I could say I do my writing at a cabin,                 |
| 01:14:07   | you know, at Machu Picchu, you know, and the device gets good enough that I feel like that              |
| 01:14:13   | that's there. And then before, you know, my brain, as soon as I load that up, my brain's like, oh,      |
| 01:14:17   | writing mode, get to work writing and don't think about, you know, Ahsoka series or whatever.           |
| 01:14:22   | And so I feel like there's something to that. But the interesting piece of it to me is [[Apple]]            |
| 01:14:27   | was so focused on making this an augmented reality product. They really, you know, the                  |
| 01:14:33   | high is that the windows show up in your living room and that's such a focus of them. But I feel        |
| 01:14:37   | like for context stuff, sometimes virtual reality could be better if it's done with these high-quality  |
| 01:14:44   | screens. And [[Apple|Apple's]] not talking about that, because I feel like they don't really want to              |
| 01:14:47   | talk about virtual reality. I feel like they did talk about it. And for anybody who hasn't listened     |
| 01:14:52   | to that [[Cortex]] episode, all about Vision OS and the new Vision Pro that's going to come out,            |
| 01:15:00   | because Mike got to actually try one at [[WWDC]]. If you haven't listened to that, folks,                   |
| 01:15:05   | please do go listen to that, because [[Cortex]] is amazing. And B, because Mike does a really great         |
| 01:15:09   | job of walking you through exactly what his experience was like. But the digital crown                  |
| 01:15:14   | on the side of the Vision Pro, that you can turn it and you can adjust how much reality                 |
| 01:15:22   | is in your vision. So if somebody walks in, they're still going to appear and come, like,               |
| 01:15:28   | come in and there could be a ghost. But you can say, okay, I want Machu Picchu. I want to be            |
| 01:15:36   | sitting on the edge of the Grand Canyon. I want to be floating above a Formula One race, whatever       |
| 01:15:42   | it is. But you could also just be like, no, I'm just in my office at home. But because you can          |
| 01:15:50   | also, from my understanding, make your own 3D pictures and so on, I wonder if at some point             |
| 01:15:55   | we're going to get the ability to scan our environments. Because I know for me that could               |
| 01:15:59   | be really useful, because every so often, I'll have to do work, but there'll be something in            |
| 01:16:04   | my office bugging me. Like, I was in the middle of doing the same with my 3D printer last night,        |
| 01:16:09   | but I got frustrated and I stopped. And now out of the corner of my eye, I can see my 3D printer.       |
| 01:16:14   | And it's like taunting me of like, you haven't finished replacing this bit or whatever it is.           |
| 01:16:19   | Like, that's not actually the case right now. But I can imagine if I had taken a 3D scan of             |
| 01:16:25   | my office to use this like my working environment, like I could just be like, no, I'm in an idealised   |
| 01:16:31   | version of my office right now. I don't know that there's a massive box on the floor that could         |
| 01:16:35   | trip me up if I walk in that direction. I mean, obviously, like before I got up to walk around,         |
| 01:16:40   | I would have to reenter reality mode. But I feel like this could be really, really useful because       |
| 01:16:47   | it allows you to both set your context, but also just like fix your context. And I know that            |
| 01:16:54   | for a lot of people, you know, having context, sound and visual is a huge part of that and              |
| 01:17:02   | being able to get in and out of the zone. Like, I have days where I should just be able to get          |
| 01:17:06   | into the zone and snap and I'll do the exact same thing the next day that worked the previous day.      |
| 01:17:12   | And for some reason, there'll be something somewhere that I can see or hear that is bugging me and I    |
| 01:17:17   | won't be able to get in the zone. I feel like between the audio and the video in the Vision Pro,        |
| 01:17:22   | like I will be able to automate getting into the zone much more easily.                                 |
| 01:17:26   | Well, even like Alex in your small apartment, you were talking about you have a small apartment         |
| 01:17:31   | earlier. What if you could just put the headset on and feel like you're in a mountain glen or           |
| 01:17:36   | whatever? We had a meet up in the MacSparky Labs after the announcement and one of the guys in          |
| 01:17:41   | the labs spent a bunch of time in Tokyo like 10 years ago. He said, I lived in the box. He said,        |
| 01:17:46   | I lived in this tiny, tiny apartment in Tokyo. You know, they're famous for these little apartments.    |
| 01:17:51   | He said, I would have killed for this back then just because I always felt like I was like in this      |
| 01:17:56   | box. If I could put that on and feel like I was in someplace more spacious, it would have felt          |
| 01:18:01   | really good once in a while. And I feel like [[Apple]] hasn't told that story enough. I get what you        |
| 01:18:07   | mean. And Mike did a great job. I actually was in the room when Mike came back from that demo           |
| 01:18:12   | and he was all glazy-eyed. I think the way he said it to me is if they would have taken my credit       |
| 01:18:18   | card, I would have bought it right there. And I feel like there's just a lot to this thing for          |
| 01:18:23   | automators and people looking for contextual computing type applications that [[Apple]] hasn't              |
| 01:18:30   | really told that story yet, but I think it's there. I think we can say that we know it's there          |
| 01:18:40   | because so many people from the VR press, like I'm a little bit in the VR world and                     |
| 01:18:49   | so many people who like the VR press being there made me be like, okay, yeah, this is good to go.       |
| 01:18:57   | But there's just the way [[Apple]] tells stories, obviously, is always really specific. And right           |
| 01:19:05   | now, there are two terms that I think make people think certain things, which is artificial             |
| 01:19:14   | intelligence and virtual reality. And [[Apple]] really did kind of talk all about artificial                |
| 01:19:22   | intelligence and virtual reality in the [[WWDC]] keynote. They just didn't use those specifically           |
| 01:19:30   | because they want the [[Apple]] words and not the pre-written narrative that society has made.              |
| 01:19:40   | And I like that. [[Apple|Apple's]] afraid of the word [[artificial intelligence]]. They don't want it to,             |
| 01:19:45   | they don't want to get on that train, but they're doing it. Yeah. I had a bet that they would not,      |
| 01:19:53   | I was my developer friend, I'm like, I bet you a dollar and 50 cents. I don't know why I was 50         |
| 01:20:01   | cents, but Tim Cook, no one on that stage is going to say virtual reality or artificial                 |
| 01:20:12   | intelligence. They'll say machine learning. They will say, they're going to say spatial computing.      |
| 01:20:19   | And I was so happy. That was part of the bet. I'm like, yes, they did it. They used spatial             |
| 01:20:25   | computing instead of AR, or they did say AR. But Rose, like you said, I kind of want OmniFocus         |
| 01:20:35   | perspectives, like perspectives, so that I can just turn my head and then let's say you don't           |
| 01:20:46   | want to see that 3D printer. But in my VR headset, sometimes I watch Netflix. I also have an NFC tag    |
| 01:20:57   | on my, on my Quest. I will sometimes just watch Netflix in the Oculus Quest because it, or sorry,       |
| 01:21:08   | oh, Meta Quest, because that context switch is just better for my brain, even though the quality,        |
| 01:21:21   | like, you know, it's not 4K, it looks kind of crappy. But now with the Vision Pro, like, oh,            |
| 01:21:29   | like, oh, oh my gosh. And, you know, to snap back into reality when someone walks into the room is,     |
| 01:21:37   | I mean, this might be too far. But what if you could set automations to be triggered for specific       |
| 01:21:43   | people? That was, like, it wants that person, you know, like, if someone is wearing another Vision      |
| 01:21:54   | Pro, or they have, I mean, we know this thing can talk to iPhones and stuff already. Like, we,          |
| 01:22:01   | all of these chips can talk to one another, like the air tags, all of this stuff, all of the world      |
| 01:22:09   | of spatial computing is so ripe for automation that I want the David Sparks, Rosemary Orchard's,        |
| 01:22:19   | the Timery Joes of the world. David Smith, I am so, so excited for not just [[Apple|Apple's]] story,              |
| 01:22:27   | but of the developers, I know and trust their story of what spatial computing can be and our own.       |
| 01:22:36   | Like, there's still those, sorry, by our own, I mean, people, people like me who aren't necessarily     |
| 01:22:44   | developers, but build and use shortcuts, how there was those rumors that, like, oh, there's going to    |
| 01:22:50   | be a way to, like, build apps with Siri. And what I think the rumor, probably what that might be,       |
| 01:22:59   | is that we can build more apps with shortcuts and just say them into the air, like, build a             |
| 01:23:08   | shortcut just with, you know, just with voice control, which gets better. Oh, God, like, I mean,        |
| 01:23:16   | voice, I've been using voice control since my first Mac, just because it feels future-y and cool.       |
| 01:23:24   | But, you know, just doing that with your voice and being able to sort of build your own story of        |
| 01:23:31   | what you want in spatial computing excites me a lot, because just like with humans in software,         |
| 01:23:39   | diversity and system settings is better, I think.                                                       |
| 01:23:42   | All right, so let's go there for a minute. Let's get a little hypothetical. And so we're going to       |
| 01:23:46   | have to make some assumptions, because none of us have this yet. But what is your automation story?     |
| 01:23:52   | Let's say, Rose, you've got one of the things trapped on your head. How do you want to automate         |
| 01:23:56   | it to help you? What do you want to do with it? I think it really depends on the context. Like,         |
| 01:24:01   | for example, if I'm packing for a trip, like, I want, like, the current, like, a subset of things       |
| 01:24:07   | that I'm packing to be, like, a kind of little post-it note that's, like, sitting in, like, the         |
| 01:24:12   | corner of my field of view. Not obscuring stuff, but, like, it's there. And then when I look at it,     |
| 01:24:16   | it, like, zooms in and pops up and is, like, okay, you need, like, these three things left.             |
| 01:24:21   | Because number of times that I get distracted while walking around the house, looking for               |
| 01:24:25   | something while I'm packing is way too big. And, you know, it would be a similar thing going            |
| 01:24:31   | shopping. I'm not sure I would wear it to go to, like, the grocery store, but at the same time,         |
| 01:24:36   | you never know. It could be really useful if when you're looking at, like, the shelf in the             |
| 01:24:40   | grocery store, it could be, like, highlighting the things that you need. And then you look at it and    |
| 01:24:45   | it's like, by the way, here's the macro information on this. Like, this is really full of sugar,        |
| 01:24:50   | but this one right next to it, that you know, tastes pretty much the same, way better for you.          |
| 01:24:55   | Okay, I'll buy the one that's better for me. You know, that would be really nice.                       |
| 01:24:58   | So, so you want an AI bot that, like, is, like, your mother that's just gonna say,                      |
| 01:25:02   | I don't want to be like my mother, but I want, like, a personal assistant out of it, basically.         |
| 01:25:07   | Like, the thing that's reminding me, like, hey, you got distracted from this, but this is what          |
| 01:25:12   | you're supposed to be doing. Or, like, you know, just the thing that can understand that, you know,     |
| 01:25:18   | I, I'm currently, you know, I'm watching the show, but I'm like half watching the show because,         |
| 01:25:23   | like, I'm actually thinking about this problem. So it won't, like, let the show get too big and         |
| 01:25:28   | take over the screen. It will, like, you know, keep it a smaller corner. And, you know, at the end      |
| 01:25:36   | of the show, like, the episode, it won't alter play the next episode, or something, because,            |
| 01:25:41   | you know, I was kind of all lunch break and, you know, just thinking about, you know, what should       |
| 01:25:45   | I be doing next, and how do I solve this problem, etc. So, yeah, like, I feel like that's where I       |
| 01:25:51   | want to start. And then from there, you know, things like [[Swift Playgrounds]].                            |
| 01:25:55   | Wait, wait, that's where you want to start? You want to, you want a robot built?                        |
| 01:25:59   | Oh, no, no, no, this is, yeah, no, Rose, I am totally there.                                            |
| 01:26:03   | Like, obviously, it's gonna take a while and, and things like that. But, like, I feel like              |
| 01:26:08   | having, like, an OmniFocus perspective in the quarter of my field of view. And, like,                   |
| 01:26:13   | Ken's already, like, building that stuff. Exactly. Like, it's a group of already                        |
| 01:26:17   | got their apps. Like, they've got their apps run on visionOS or, like, they set them up and tested      |
| 01:26:21   | them. Like, I don't know if they've got their hands on a piece of hardware and actually been to         |
| 01:26:25   | a lab and tried stuff out. I would be surprised if they hadn't had that opportunity. But, you know,     |
| 01:26:31   | I feel like that, you know, Omni Group and so on. And similarly, [[Drafts]], I'm gonna need that,           |
| 01:26:37   | I'm gonna need [[Drafts]]. Like, obviously, I'm gonna need [[Drafts]]. But I feel like widgets on top of        |
| 01:26:43   | my life would be a really good place to start. Like, widgets and interactivity. And guess what?         |
| 01:26:48   | Widgets are becoming interactive with iOS 17. So, that's the thing.                                     |
| 01:26:52   | Yeah, it seems like it is coming together, doesn't it? Yeah. Day one beta this year because of the      |
| 01:26:57   | interactive widgets. Oh, yeah. I've just been living the best life.                                     |
| 01:27:03   | Losing my mind with, yes, it's amazing. It is so good. But then on top of that, you know, like,         |
| 01:27:11   | when we get to something like [[Swift Playgrounds]], [[Swift Playgrounds]] is already on the iPad, right?       |
| 01:27:15   | And Shortcuts is on the iPad. So, both of these apps should theoretically exist on visionOS.            |
| 01:27:20   | Because any iPad app can exist on visionOS. Now, Mac apps don't exist on visionOS. There's              |
| 01:27:26   | something like [[Xcode]] we wouldn't have, but you can share, like, you know, a Mac screen                  |
| 01:27:30   | into visionOS. So, you could still have something like [[Xcode]]. But imagine being able to, like,          |
| 01:27:34   | write your own mini apps in [[Swift Playgrounds]] and with Shortcuts on visionOS and just run them.         |
| 01:27:44   | Like, and then you get really creative. Because I feel like, I know that [[Swift Playgrounds]] has          |
| 01:27:50   | got limitations. I know a lot of people have done some really cool stuff with it. I've written          |
| 01:27:54   | stuff with it and then, you know, turned it into an app on the App Store. But I feel like               |
| 01:27:59   | bringing that into Shortcuts, like, visionOS is kind of the place to do it because it's                 |
| 01:28:05   | this whole cool new thing. And at the moment, I can write a script and run a script                     |
| 01:28:10   | on another machine from Shortcuts. I say another machine, like, macOS Shortcuts has support for         |
| 01:28:18   | command line scripts, [[AppleScript\|AppleScripts]], et cetera. But iOS just doesn't have that. The closest it's        |
| 01:28:23   | got is being able to run [[JavaScript]] on a page, on, like, a web page, which is a bookmarklet,            |
| 01:28:29   | essentially. But it would be really cool if you could integrate [[Swift Playgrounds]] stuff                 |
| 01:28:34   | with Shortcuts and then you could just automate all the things. Because [[Swift]] is a really powerful      |
| 01:28:38   | language. So I feel like you can pretty much do anything when you got those two. So maybe               |
| 01:28:44   | visionOS will be the thing that brings them together. I think that really quickly,                      |
| 01:28:50   | instead of iOS, visionOS is going to be my main operating system because of what you've just            |
| 01:28:58   | said. I mean, on top of that, I think that this hardware that is so different, there are going          |
| 01:29:11   | to be people who just have a different set of skills and a different way of thinking that               |
| 01:29:17   | will be building things that we've literally never seen and that other software developers may          |
| 01:29:24   | literally never thought of before, just because all of our brains are different. And I really hope      |
| 01:29:32   | that the [[Apple]] gets a, I mean, I know the SDK is there, but I really hope that cheaper hardware         |
| 01:29:42   | comes out soon, just so the accessibility of building things is easier. Because I know that             |
| 01:29:50   | I've played a little bit with the SDK, but it's just not the same. And from using a VR headset,         |
| 01:30:05   | and I've tried to use the SDK as kind of like, all right, just pretend you're in this environment.      |
| 01:30:17   | And it helps a little bit if you use a PlayStation controller, but I mean, you can't really, I think,   |
| 01:30:24   | unlock all of the possibilities unless you're using it. And only a few hundred people have              |
| 01:30:31   | ever tried this thing. I think it's going to be amazing. I'm with you guys. I feel like I don't         |
| 01:30:37   | know where it's going to lead. But for a starting point for me is getting to the contextual idea.       |
| 01:30:43   | I want to strap to my face and say, take me to the writing cabin. And I just want everything to         |
| 01:30:48   | happen. I want the focus modes, the, what I see through the headset, the apps that open. I want         |
| 01:30:55   | it to be a thing where you just put it on and you jump from one thing to a next. And it gives you       |
| 01:31:00   | like a little respite from the rest of the world, which is terrible to say. I have a great, I live      |
| 01:31:06   | in a nice little house. I'm happy. People are generally clean. But still, I would like the              |
| 01:31:11   | ability to escape once in a while and feel like it's going to be possible. I don't think that's         |
| 01:31:17   | a bad for the paltry sum of $3,500 to begin with, but yeah. In my case, plus a flight and hotel         |
| 01:31:26   | stay in the U.S. And I have prescription lenses. Yeah. But I really think that [[Apple]] is looking         |
| 01:31:34   | at this as a minimum viable technology. Like it has to have resolution and it has to have screen        |
| 01:31:41   | refresh and it has to have all this stuff to a certain minimum level in order for it to work.           |
| 01:31:46   | And that will get cheaper. And I think they call it vision pro because eventually there's               |
| 01:31:52   | just going to be a vision and a vision pro just like the iPhone. And that one will be less expensive.   |
| 01:31:58   | I mean, it is efficient. The way, I think the way they marketed was really smart. But David,            |
| 01:32:06   | have you, I think you have, you've worked in the, gosh, I forget the app name, but working in the       |
| 01:32:17   | Meta Quest when I would work in space. Yeah. I wrote a blog post about that. I was circling              |
| 01:32:25   | there with writing a blog post. And it was great except for the resolution. It was too blocky.          |
| 01:32:31   | And so you can only do it for like an hour and then you started to feel kind of a little gross.         |
| 01:32:38   | And with the vision pro, it's way higher resolution, way higher screen refresh. So I                    |
| 01:32:43   | think you'll be comfortable putting on. I don't know that you're going to want to wear it for           |
| 01:32:46   | eight hours, but I think that like if you want to do an hour or two work session, I think it            |
| 01:32:51   | probably should be no problem. Yeah. Yeah. Yeah. I remember Mike describing the headaches that he       |
| 01:32:55   | got from the Meta Quest pro, because essentially, like he's looking at text, right? And it's just        |
| 01:33:03   | the quality is not high enough. And Gray didn't really have this issue because, you know, he was        |
| 01:33:09   | looking at like the text projected on a whiteboard, which was a distance away. So your eyes will,       |
| 01:33:17   | you know, allow something to be a bit blurry, that's a longer distance away and not give you            |
| 01:33:22   | like that, that massively draining headache that you can get. But then, yeah, the screens in the        |
| 01:33:27   | vision pro should make it way easier because, you know, you look at stuff and it's like reality.        |
| 01:33:36   | Which is, you know, I think this is why [[Apple]] is so focused on augmented reality, because               |
| 01:33:40   | like you can just overlay text on the top of a thing. So imagine a language learner                     |
| 01:33:45   | who's put on a vision pro and they open whatever their language learning app of choice is.              |
| 01:33:49   | And suddenly everything that they see, like if they look at that thing, it gets like the name           |
| 01:33:56   | of whatever it is in the language that they're learning in both like phonetic script and,               |
| 01:34:00   | you know, whatever the correct script is for the language that they're learning underneath it.          |
| 01:34:05   | That would be so cool. Like that would be really useful. Obviously, you wouldn't be allowed to          |
| 01:34:11   | even exam. But, you know, I could just imagine like that being really useful for a whole bunch of       |
| 01:34:15   | people because it's like, oh, this thing that I never know what the name of that is. Okay,              |
| 01:34:20   | I know what the name of that is now. Great. A glass of beer, for example, in French.                    |
| 01:34:25   | Then, yeah, like, you know, this will at some point hopefully end up thinning down to something         |
| 01:34:32   | that looks like a pair of glasses or sunglasses. And, you know, being affordable for everybody.         |
| 01:34:39   | And I think, you know, when that happens, it won't seem weird anymore. Like, I would not                |
| 01:34:45   | wear a vision pro to the supermarket to buy groceries just to be clear. Not yet.                        |
| 01:34:51   | Part of me would be like, I would love to if there was like an app that could like tell me the          |
| 01:34:54   | calorie information and help me like be like, oh, you're in the fruit section. Here's the fruit         |
| 01:34:59   | fruit and vegetable section from your grocery list. These are the things that you need. You're          |
| 01:35:02   | leaving the fruit and vegetable section, but you did not buy bananas. Go back and pick up bananas.      |
| 01:35:07   | But, you know, when I was at WWC, I talked to a guy who went over to cafe Max for lunch and said,       |
| 01:35:12   | two people walked in wearing the headset, got their lunch and left without ever taking them off.        |
| 01:35:17   | I mean, it will be. I mean, I feel like on [[Apple]] campus, that's a bit more normal than,                 |
| 01:35:21   | you know, the grocery store in my town of 40,000 people here in the UK. I mean,                         |
| 01:35:27   | everyone in my office mocked me for having my AirPods in all the time. And then it was like             |
| 01:35:34   | barely six months later, everyone had them in. And I mean, I like on the Vision Pro that it             |
| 01:35:45   | you can see when someone is looking at you and you know that I wish almost there was                    |
| 01:35:53   | a signal on the AirPods somehow like a little light for folks to know like, no, I am I'm listening      |
| 01:36:00   | to you. But the clarity from the AirPods and the automation I have to make it just the world            |
| 01:36:08   | more listenable. Like I just wish that was a thing. Again, another like context switch.                 |
| 01:36:18   | Well, you know what we need to do? Once this thing gets released and we all get our hands on            |
| 01:36:23   | them and we start automating, we got to have you back, Alex. And you got to tell us what you're         |
| 01:36:28   | automating. This is all I think about, honestly. Like I have a new show just based around like,         |
| 01:36:34   | well, augmented reality and stuff in general. But I just think this is going to make,                   |
| 01:36:43   | I don't want to say make people better that makes it sound like people are bad. But I just think        |
| 01:36:48   | this is another layer of computing that is going to unlock a lot of creativity and even a lot of        |
| 01:37:01   | empathy and just different parts of our brains. The bicycle for the mind thing. Yeah. This is           |
| 01:37:09   | like a little electric scooter for your mind. I'm stoked. My abacus needs as much help as it can get.   |
| 01:37:16   | Yeah. And especially with the eyes on the front, you know, Alex, you're saying about the,               |
| 01:37:21   | you know, the idea of the indicator light for the AirPods. I feel like the eyes on the front            |
| 01:37:27   | will really help people understand with that. Like, no, I am looking at you. I'm just not               |
| 01:37:32   | taking this off because taking this off is, you know, like a thing. And then I have to put it           |
| 01:37:36   | back on and so on. And like, I am seeing like the window with the application that's got the            |
| 01:37:42   | information in that you're asking me about right here. So yeah, I feel like you're going to get         |
| 01:37:48   | there. Or you're seeing like their name and pronouns or something. And it's like, no, seeing            |
| 01:37:54   | this is like a curtain, like, no, no, I want to communicate with you, not I am ignoring you.            |
| 01:38:04   | And you both mentioned, obviously, when the hardware gets smaller and easier, we'll get                 |
| 01:38:09   | to that point. But I do think this is going to connect people more than isolate them. It's a            |
| 01:38:15   | really strong belief I've had for a while and [[Apple]] by presenting it in this way and only               |
| 01:38:26   | releasing it when the tech was ready, that it wouldn't turn people off like when you're wearing         |
| 01:38:34   | a VR headset, it makes you sick or whatever. I think no, not I think I know that this is going          |
| 01:38:43   | to revolutionise computing, even if vision OS is a total failure, because more and more people          |
| 01:38:51   | are going to think about spatial computing and ambient computing, even if it's not on your face,        |
| 01:38:58   | you're going to think about just what is around you and be more mindful in general                      |
| 01:39:06   | of how you're using something that's it's hard not to be.                                               |
| 01:39:13   | Yeah, and I don't even want to open the can of worms about the 3D video, but it's the                   |
| 01:39:18   | holiday. I mean, you really are. And we went this thing really goes mainstream, you'll be able to       |
| 01:39:24   | look at your loved one on the other side of the world, and it'll feel like they're in the               |
| 01:39:28   | room with you. And that's that's amazing. Either way, Alex, where do people go to find out more         |
| 01:39:35   | of the stuff you're making? You can go to Alexcox.me or I would ask this is coming out in two weeks,    |
| 01:39:45   | right? Yeah. Did you say overtake? Go to haptic.show if you like talking about theoretical              |
| 01:39:55   | computing and AR and VR and all of that stuff. I think you might enjoy it.                              |
| 01:40:05   | I'm signing up. I'm signing up. I can't wait. All right, we are the Automators podcast. You can         |
| 01:40:14   | find us at relay.fm/automators. I should mention as well, we'll put a link in for Do By           |
| 01:40:20   | Friday, Alex's other popular podcast. And Roboism, of course. Of course. Yeah. All the great shows      |
| 01:40:27   | are at Alexcox.me. Great. And so we'll put that in there. We have a forum at talk.automators.fm.        |
| 01:40:35   | If you have automation questions, there's a lot of smart people there. You can go check it out.         |
| 01:40:40   | We want to thank our sponsors today, and that is our friends over at ExpressVPN and TextExpander.       |
| 01:40:47   | And we'll see you next time. Goodbye, folks.                                                            |

[^1]: "totum partibus suis maius est" translates from Latin to English as "the whole is greater than the sum of its parts", whereas "materiam superabat opus" refers more to the materials and workmanship, "the workmanship exceeds the materials".