---
status: "incomplete"
fc-date:
  year: 2021
  month: 05
  day: 07
fc-category: "podcast"
podcast: "Automators"
published: 2021-05-07
duration: 5401
formattedduration: "01:30:01"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Jay Miller"]
notetype: "episode"
showpage: "http://relay.fm/automators/75"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators075.mp3"
episode: 75
title: "75: Bunches of Automation, with Jay Miller"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rosemary and David chat to Jay Miller about how he automates, using Keyboard Maestro, Alfred, Bunch, and more.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Jay Miller]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 075 Discussion](https://talk.automators.fm/t/75-bunches-of-automation-with-jay-miller/11180)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Communicate smarter.
- [[Sync Up (Sponsor)|Sync Up, a OneDrive podcast]] - takes you behind the scenes of OneDrive.
- [[Forward Networks (Sponsor)|Forward Networks]] - Network modelling software.

# Show Notes
- [AIOHTTP](https://docs.aiohttp.org/en/stable/) - Asynchronous downloads in Python
- [Instant Search Workflow | Packal](http://www.packal.org/workflow/instant-search-workflow)
- [Packal Alfred OmniFocus Scripts - MacSparky](https://www.macsparky.com/blog/2021/3/packal-alfred-omnifocus-scripts)
- [Bunch | Brett Terpstra](https://brettterpstra.com/bunch/)
- [kjaymiller/Bunch_Alfred: Alfred Workflow for Brett Terpstra's Bunch Application](https://github.com/kjaymiller/Bunch_Alfred)
- [Bunch and the Stream Deck - Brett Terpstra.com](https://brettterpstra.com/2020/09/16/bunch-and-stream-deck/)
- [Easy and Complex Bunches - Jay Miller](https://gist.github.com/kjaymiller/068353c25416cd9ebfb6bd6954e16486)
- [Using Moom with Bunch for window management - Brett Terpstra.com](https://brettterpstra.com/2020/09/14/using-moom-with-bunch-for-window-management/)
- [Front matter - Bunch](https://bunchapp.co/docs/bunch-files/frontmatter/)
- [Hook - Find without searching](https://hookproductivity.com/)
- [Pinboard](https://pinboard.in/)
- [‎Pinstachio for Pinboard on the App Store](https://apps.apple.com/us/app/pinstachio-for-pinboard/id1535386074)
- [Menuwhere · Many Tricks](https://manytricks.com/menuwhere/)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators. My name is Rosemary Orchard, and we are here to talk                   |
| 00:06      | about automating your computer, your Mac, your iPad, and all of the things to make everything            |
| 00:11      | do your work for you. And I'm joined as always by David Sparks. Hey, David, how are you today?           |
| 00:15      | I'm great, Rose. I want to talk automation with you, you and Jay.                                        |
| 00:20      | Yeah, yeah, yeah. So we have got the fabulous Jay Miller on the podcast. Welcome, Jay.                   |
| 00:25      | Fabulous is such a strong word. I tend to think magnanimous, stupendous, and utterly automatic.          |
| 00:32      | I love all of those words. Excellent descriptors for everything, including yourself. So welcome          |
| 00:38      | to the show. Although utterly automatic makes you sound like you are a robot, just to be clear.          |
| 00:44      | Abort, sequence, abort, abort.                                                                           |
| 00:46      | Quick, what is the square root of 2572? Oh, yeah, yeah. What are the three rules?                        |
| 00:54      | It's okay, you passed. Yeah, I feel like anytime you accuse a developer of being a robot, there's        |
| 01:00      | a part of them that likes that. I'm not sure. Am I wrong? Oh, thank you. Yes, yes, yes. I like it.       |
| 01:05      | I like it when that happens. Yeah, yeah. Well, Jay, you have been on our list for a while, and           |
| 01:12      | we're going to talk a little bit about your background in a minute, but thanks so much                   |
| 01:17      | for coming on today to talk about being an automator. Yeah, no, big fan. Listen, every other week,       |
| 01:23      | and to this and many of the other relay shows, and happy to both learn and talk about some of the        |
| 01:32      | things that I do, because I always feel like as much as I'm a weird, strange, unique little bird         |
| 01:40      | doing my automation thing, I learn so much from what y'all are doing, and I feel like I've got           |
| 01:46      | my notebook ready, so let's do this. Yeah, automation truly is the chewing gum, scotch tape, rubber      |
| 01:52      | band of programming. It doesn't have to be pretty. It just has to work, and as we hear every week,       |
| 02:00      | that's often, especially my automations aren't that pretty, but they work. That's all that matters.      |
| 02:06      | Jay, tell us a little bit about yourself. Yeah, so I'm Jay Miller. I'm a long-time                       |
| 02:13      | podcaster developer advocate now a days, which people always tend to ask, what is a developer            |
| 02:20      | advocate? And the answer is, no one really knows. Basically, I get paid by my employer to go and         |
| 02:28      | talk about their products, but to also connect with their community, and whether it's sharing code,      |
| 02:34      | building projects, or connecting them to other people that might be able to answer their questions,      |
| 02:40      | that is my answer is always yes, and doing that. And the time that we're in now or getting out of        |
| 02:48      | has made that a little challenging, but it's also created a bunch of new opportunities to do all of      |
| 02:54      | those things virtually, which means I have a lot of meetings, but I also get a lot of opportunities      |
| 03:00      | to automate things. So yeah, it's a pretty cool gig. I mentioned podcasting. I'm currently               |
| 03:08      | doing a few shows, none of them that really fit this mold, but I do have a new productivity              |
| 03:15      | podcast that's in the works, as well as some other secret productivity projects. So yeah,                |
| 03:20      | that's kind of me in a nutshell. I'm also a dad, and yeah, I'm in sunny California,                      |
| 03:25      | where it rained yesterday and I was very confused. Yeah, I know, right? What is that? What is this       |
| 03:31      | stuff falling out of the sky? You're allowed rain in California. I thought this was forbidden.           |
| 03:36      | I feel like we've been cheating the system for a while. Like every time it rains, I'm like,              |
| 03:41      | are we going to get built for this? It's going to come out in our taxes, apparently. I don't know.       |
| 03:44      | Yeah, I don't know. I was under the impression that you basically lived in a desert over there,          |
| 03:49      | that that's how California works. But we basically do, but you'll see it on the forecast,                |
| 03:54      | but you're like, no, that's not actually going to happen. And then you wake up and things are wet.       |
| 03:58      | So there you go. Jay and I actually live pretty close to each other. But that's not                      |
| 04:03      | what we're here today. Jay, one of the reasons I want to have you on is because you're a developer,      |
| 04:08      | but you're also somebody in a job that has a lot of human interaction, like, you know,                   |
| 04:14      | a lot of folks out there who are not programmers. And I feel like when you bring those developer         |
| 04:19      | superpowers to the gig you've currently got, that automation is just going to naturally                  |
| 04:25      | grow out of that. And I'm guessing there'll be a lot of automation that we're going to talk about        |
| 04:29      | today that everybody can use out there whether or not they're a developer. So thanks for coming on       |
| 04:34      | to help us out. Absolutely. And I guess the other thing to add there is I'm also an introvert and        |
| 04:40      | one that suffers from ADHD. So working with people can be draining and remembering what to do after      |
| 04:48      | the fact can be even more draining. So having automation kind of be that here. Let me help you           |
| 04:55      | out here. That tends to help a lot. Yeah, yeah. Automation and checklists are definitely our             |
| 05:01      | friends in this particular case. You know, I don't have ADHD, but I definitely find lots of              |
| 05:07      | conversations with lots of people, something I've been doing a lot of recently, draining. And so         |
| 05:11      | having automation so that I can just press the button and it's like, okay, so send this email            |
| 05:15      | and do that and do that and do that. And then, you know, it's just done. And so yeah, I'm really         |
| 05:21      | glad that we get to talk to you about this. Well, before we start guys, let's just take a minute         |
| 05:27      | and talk about something that happened in Cupertino last week, the spring loaded thing.                  |
| 05:34      | Because I know the listeners want to know. And we did a whole episode on Mac horizontal. So my           |
| 05:38      | opinions have been shared already. But as I was watching this, there was a certain woman in              |
| 05:46      | the UK who texted me the words, they had me at purple. That's all she said. Purple. Rose,                |
| 05:55      | Rose, we need an explanation of what that cryptic text meant.                                            |
| 06:00      | Okay, well, it's not that cryptic. So for people that aren't aware, my favourite colour is purple.         |
| 06:05      | And therefore, the correct answer to are you getting a new iMac, which is M1, is                         |
| 06:13      | my Mac mini still within its return period. So thank you, [[Apple]]. Yes, I am. Are you getting              |
| 06:19      | a new iPhone in purple? No, no, I'm not because I have the iPhone 12 Pro Max. It's only the iPhone 12    |
| 06:25      | that is available in purple. So it's the 12 and the 12 mini. And Jay, I want to pick your brains         |
| 06:30      | a little bit about the mini actually. When we get to that, I want a purple iPhone. I want a pro          |
| 06:36      | purple iPhone so much. They did green. They're doing blue this year. Please, [[Apple]] purple next           |
| 06:42      | year. A lovely dark sort of mystical purple on the pro iPhones. That would just be magical.              |
| 06:49      | Absolutely magical. But yeah, I'm getting a new iMac, David. I've never had an iMac before. It's         |
| 06:55      | going to be exciting. And yeah, I can't wait because I've been trialling this M1 Mac mini,                |
| 07:03      | but the problem I found with it was that it didn't have enough USB-C ports. And the iMac does have,      |
| 07:10      | if you upgrade it, the four USB-C or rather two, the Thunderbolt ports and then two Thunderbolt          |
| 07:17      | 3s and USB-C ports. And it's called Ethernet in the power brick. It's interesting, but I'm looking       |
| 07:23      | for it. I'm hoping for shortcuts at [[WWDC]], David. Whatever the new macOS is, macOS fell off a cliff       |
| 07:32      | type thing, whichever cliff in California you're picking, macOS Disneyland. Let's do that one.           |
| 07:38      | I want shortcuts in it. I was thinking macOS Pomona might work, but I don't know.                        |
| 07:44      | You got to live here to understand. macOS Big Bear. Oh, there you go. I grew up right between            |
| 07:49      | Pomona and Big Bear, so that would work for me. But yeah, Rose, I think that works. And people are       |
| 07:56      | like, hey, wait, there's going to be a bigger one later, and they're right. And it's going to have       |
| 08:00      | the next version of that M1 chip that's going to have more cores. But you have to remember this M1       |
| 08:06      | is still competing with an iMac Pro for render speeds for stuff I'm doing. So this is still a            |
| 08:13      | great computer and it's purple. Yeah, it is. And a lot of people are saying, oh, I want to hold          |
| 08:20      | off for the 27 inch or the 32 inch iMac, whatever it is. I'm going to be putting this next to an         |
| 08:26      | ultra wide monitor. I've already got 34 inches of screen real estate. I do not need huge amounts of      |
| 08:32      | extra screen space here. Thanks to the episode on window management that we did, David, and your         |
| 08:38      | tip on on [[Moom]], which has completely changed my workflow, it's going to be pretty easy to manage         |
| 08:43      | that. Fortunately, but just the way that the things are changing with with how I do my work,             |
| 08:50      | it's going to make sense to have another monitor. The portable monitor I've been using is great. I       |
| 08:55      | love it. But it's it's not ideal for a permanent setup. So it's going to be excellent to to have         |
| 09:01      | those 24 inches of space, but not have my entire desk occupied by screens. So yeah, finding a            |
| 09:08      | balance there, but it isn't going to be occupied by screens. If you've got that gigantor monitor,        |
| 09:14      | and then you've got 34 inches, David. And so I'm actually this Friday, I've taken the day off work.      |
| 09:21      | So we're recording this podcast ahead of time. It's a background for people. I'm going to be             |
| 09:25      | mounting some shelves on the wall, and I'm going to be transferring my microphone on to the shelf        |
| 09:30      | on the wall, along with some lights for for my, you know, for doing videos and things like that.         |
| 09:38      | So when I'm on iOS today, or just meetings, I can turn on the lights and people can actually             |
| 09:43      | see me, which you know, I figured is a novel concept, people being able to see my face,                  |
| 09:47      | but let's go with it. And yeah, but I want I want to keep things on my desk to a minimum,                |
| 09:54      | and the amount of screen space, you know, I think it's going to be strike a good balance.                |
| 09:57      | One of the things that I've been struggling with here is that, you know, in the future,                  |
| 10:05      | I'll be traveling a lot. You know, that's I mean, we're already having those conversations about         |
| 10:09      | next year and like making sure we have the right miles and stuff set up. So for me, it's like,           |
| 10:16      | do I really want to invest in this beautiful screen that I'm only going to get to play with              |
| 10:22      | half of the time? And part of me says, yes, absolutely 100% you're an [[Apple]] nerd, you do that.           |
| 10:29      | The other part of me is like, well, they have this iPad. And I have like a work,                         |
| 10:36      | you know, laptop that's fine. I could just use that to invest in an iPad. And I mean, I have             |
| 10:42      | and the new iPad has so much with this supporting Thunderbolt. So now I can plug it into my LG,          |
| 10:49      | you know, cinema display thing, that this massive screen here. And I, I'm really excited about how       |
| 10:57      | much power comes in that new iPad. But I really need them to make some applications that are             |
| 11:03      | going to use that power. And I'm specifically talking about logic and final cut for me. But              |
| 11:09      | I know that there are a few alternatives out there. But I, I'm just begging [[Apple]], like if               |
| 11:16      | you've given me a $2,000 iPad that I want to buy, give me the applications that will make me             |
| 11:22      | say this is a no brainer, you know, shut up and take my money.                                           |
| 11:26      | Yeah, I talked to a friend years ago about why they don't have the pro apps on the iPad after            |
| 11:31      | they released the iPad pro. And this is somebody who like no stuff. And he said, just look at the        |
| 11:38      | RAM profile. He's like, it's never going to work. They can't put logic or final cut on the iPad or       |
| 11:44      | even X code because it only has at the time, it was, I think four gigs of RAM, you know, and             |
| 11:51      | now this new one, if you get the terabyte size one has 16 gigabytes of RAM. And all of a sudden,         |
| 11:57      | I feel like maybe we're, you know, I don't want to be too hopeful because, you know, we've been down     |
| 12:02      | this road before, but maybe this is the year that they're like, okay, we built it with a powerful        |
| 12:07      | enough chip, we've given enough RAM. Now all the [[Apple]] pro apps are going to show up here. And,          |
| 12:12      | and maybe this is the year who knows. Yeah, yeah, that would be pretty exciting. I've decided            |
| 12:18      | I am not going to have a laptop anymore. I'm going 12.9 inch iPad pro and an iMac. And until             |
| 12:25      | [[WWDC]] happens, I'm going to be using Jump Desktop whenever I need to get onto my Mac,                     |
| 12:31      | which works as a pretty good solution for getting around these things like, you know,                    |
| 12:35      | X code and stuff like that. It's not perfect, but it's, it's a good start. And as always,                |
| 12:40      | we need to start. And then hopefully, we can fill in the rest. But I think David,                        |
| 12:45      | it's probably time to start talking about some of the magical automation that Jay does.                  |
| 12:50      | It's not though, I still have a couple of questions. Number one, I want to follow up on you              |
| 12:54      | and Jump Desktop. I want to see how happy you are with that. But well, I'm already using it with         |
| 12:59      | an 11 inch iPad pro and a Mac mini a lot at the time. And I'm pretty happy with it. And that's on        |
| 13:04      | a very small screen. So I think I'm going to be happier with the 12.9 inch. Good. And the second         |
| 13:09      | question, you're getting a purple Mac, but you didn't say which purple keyboard you're getting           |
| 13:14      | and whether you're getting the purple mouse and the purple trackpad. I want to hear the whole            |
| 13:17      | purple story here. I'm not doing magic mouse. So I don't, I don't really have many issues,               |
| 13:24      | but I do have a slight case of arthritis in my hands. And it's just one of those things where            |
| 13:29      | if I do the smart thing and I use a good ergonomic mouse and stuff like that, I don't have a problem.    |
| 13:35      | The [[Apple Magic Keyboard]] is fine for me 90% of the time. And the other 10% of the time,                  |
| 13:40      | I've got plenty of other keyboards running around way too many keyboards. So that's all good.            |
| 13:45      | So I will be getting the [[Apple Magic Keyboard]]. And with the iMac configuration I'm looking at,           |
| 13:51      | it will come with the Touch ID built in, and I'll be getting the matching purple trackpad.               |
| 13:56      | And this will be accompanied by my standee, my city friend, the Logitech MX Master 3,                    |
| 14:03      | which is an excellent ergonomic mouse with a horizontal scroll wheel,                                    |
| 14:07      | which I can highly recommend if you do audio or video editing of any kind because scrolling              |
| 14:12      | across the timeline is just so easy with it. And then I would get, you go to the,                        |
| 14:18      | do you guys have hardware stores in UK? What do you call them? Where you go like hardware,               |
| 14:22      | do you know what a hardware store is? You mean like a DIY store? There you go.                           |
| 14:26      | Like Home Depot type thing? Yeah, exactly. Like we B&Q here or Wickes or Screwfix                        |
| 14:30      | here, yes. All right, so go there and get yourself a can of glossy purple spray paint.            |
| 14:38      | And then you just lay the mouse. I already [[Amazon]] did. It's arriving tomorrow.                           |
| 14:42      | And then just lay the mouse down, go outside, and put some newspaper underneath it so you                |
| 14:47      | don't mess up the ground. And then just spray it purple and you're good.                                 |
| 14:51      | Yeah, there's purple spray paint arriving tomorrow. It wasn't for the mouse that I'm tempted.            |
| 14:56      | I guarantee it will work fine. Don't worry about it. It'll be fine.                                      |
| 15:02      | This episode of Automators is brought to you by TextExpander from our friends at Smile.                |
| 15:06      | Supercharge your team with the power of TextExpander. Your team can do more with the same              |
| 15:10      | resources. That means less repetition, fewer errors, and greater consistency. So your team               |
| 15:15      | will feel like they've hopped off a bicycle and into a Ferrari. With TextExpander, you can keep        |
| 15:21      | your team consistent, accurate, and current by sharing your text and images with the whole               |
| 15:25      | staff to keep them on track, which makes sure everyone will have the same message and give the           |
| 15:30      | same answers to all customer questions. Help your team work faster and smarter by using                  |
| 15:36      | TextExpander's powerful shortcuts and abbreviations to streamline and speed up everything              |
| 15:41      | everyone types. TextExpander's powerful snippets save you time so that all you type                    |
| 15:47      | is a short abbreviation. And TextExpander does the rest of the typing for you, keeping your whole      |
| 15:52      | team communicating efficiently and with consistent language. Share your snippets of messaging,           |
| 15:58      | signatures, and descriptions with everyone who works on projects with you. I love TextExpander.        |
| 16:03      | I use it for all sorts of things, but honestly, my most commonly used snippet is the one where           |
| 16:08      | I managed to spell my name wrong. The E and the M just get swapped every time. TextExpander is         |
| 16:14      | available on Mac, Windows, Chrome, iPhone, and iPad. And Automators listeners get 20% off their          |
| 16:19      | first year. Just go to TextExpander.com/podcast now. I'll thanks to TextExpander from           |
| 16:24      | Smell for their support of this show and Relay FM. All right, let's talk automation, Jay. How did       |
| 16:31      | you get started in automation? Well, I mean, like most of us, I wasn't thinking about automation.        |
| 16:38      | I wasn't even really thinking about programming at the time. But when I got my first, second,            |
| 16:45      | third, one of those iPhones, I want to say it was probably the iPhone 5S. So probably my third or        |
| 16:52      | yeah, third iPhone. I found out about this app called [[Drafts]] that was just like,                         |
| 16:59      | everyone loved this application. I didn't really understand it. But some of my very first                |
| 17:06      | automations were, you know, the classic text, text the misses that I'm on my way home from work,         |
| 17:13      | text my mom or just have an application button that says, you know, sorry, I haven't messaged in so      |
| 17:19      | long. Just kind of those classic ones. And then I started getting into programming. And from there,      |
| 17:28      | it became, you know, for those that don't know, there's a script box in Draft Actions. And it's          |
| 17:34      | been there for some time now that allows for [[JavaScript]]. And I was like, Oh, I can use this to           |
| 17:43      | learn how to code. So for me, going in and learning, you know, Python and learning [[JavaScript]] for        |
| 17:51      | most of this type of automation stuff. And I had, I had not really at the time, I don't even think       |
| 17:57      | I'd only had like one like MacBook Pro. And I wasn't thinking about things like [[Keyboard Maestro]]                |
| 18:03      | or all this other stuff. So yeah, a lot of my automation really started on iOS devices and,       |
| 18:09      | you know, [[Drafts]] being the biggest part of that. Because at the time, I think I remember the day         |
| 18:16      | when a friend of mine showed me this app called Workflow. And I was just like, [[Apple\|Apple's]] never             |
| 18:22      | going to let this thing stay in the store. Like, it's crazy.                                             |
| 18:26      | The joke at the time was that they had naked pictures of somebody at [[Apple]], because there's              |
| 18:31      | no other way it would have got approved. Maybe that's how they all got hired.                            |
| 18:37      | Yeah, you know, something I didn't know, Jay, was that you actually learned development and              |
| 18:43      | programming through [[Drafts]] automation. That is, that's a great story. And I know there's a lot           |
| 18:50      | of people out there listening who like automation, they're not developers, they don't know much about    |
| 18:55      | programming. But they probably would like to learn more. And I think, you know, [[Drafts]] automation,       |
| 19:02      | particularly [[JavaScript]] automation, is a great place to get started. How did you go about learning,      |
| 19:08      | you know, the craft? Well, and I would say I have to be fair and say I was interested in                 |
| 19:15      | Python development at the time. And I was, you know, I was doing kind of the, you know, free code camp   |
| 19:21      | and like those courses. And I had mentors. But I think what [[Drafts]] and what iOS automation taught        |
| 19:28      | me was kind of the art of exploration. Because at the time, there were some docs, they weren't, you      |
| 19:35      | know, the greatest docs in the world, which I say, I only say that now because Greg has done phenomenal  |
| 19:42      | things with that platform. And like everything is so well documented. Now I'm like, wow, I wish I        |
| 19:46      | would have had this, you know, almost eight years ago, or seven years ago. But it's, it's interesting    |
| 19:55      | because at the time, all you could do is go on to Stack Overflow and like, how do I do a for loop        |
| 20:01      | in [[JavaScript]]? And in your mind, you're like, okay, there's a chance that the developer hasn't           |
| 20:09      | included this kind of logic, or there's a chance that it just won't translate one to one. So in my       |
| 20:15      | mind, I'm like, oh, this works like this. But then there are all these other things that I don't really  |
| 20:21      | know about. And it just became, well, let's try it and let's build what we know and build off of what    |
| 20:28      | we know and continue from there until you start doing more and more with it. And then you're like,       |
| 20:34      | oh, wow, I built like a mood tracker and [[Drafts]]. And that's like, has all these menu options and         |
| 20:42      | auto date finding stuff and natural language processing. And you're like, I don't know how I             |
| 20:48      | did this. And then eventually you realise it's all built on, you know, Band-Aids, patches, and a lot     |
| 20:54      | of copy pasting. So I would, I would always say you, you learn by breaking stuff and then figuring       |
| 21:01      | out how you broke it and fixing it. Yeah. Okay. So you didn't put this, the mood tracker in, in          |
| 21:06      | the outline. You didn't tell us about this before. Tell me about this. I don't use it anymore. That's    |
| 21:11      | okay. I just, I'm really curious because for everybody, their first automation that they                 |
| 21:16      | remembered, you know, doing that was held together with duct tape, hopes, wishes, and unicorn tears      |
| 21:22      | is always special. So, so, so what was this, you know, how, how did you create, obviously,               |
| 21:26      | you know, use [[Drafts]] and [[JavaScript]] from the sounds of it? But, but what was the purpose of this?        |
| 21:32      | So I, I've been a productivity fan person for a long time. And one of the things that I had,             |
| 21:40      | you know, really started thinking about was how does my mood affect my productivity? Like,               |
| 21:45      | I mean, obviously, we just have days where we just can't even. And, and that's, you know,                |
| 21:49      | for me, that seems to be more days than, than often. But I wanted to have this                           |
| 21:55      | like line of [[Drafts]] that were just emojis. And the emojis would be my, my mood so that                   |
| 22:03      | if I were scrolling through my [[Drafts]], because like most people up until a few weeks ago,                |
| 22:07      | I had several thousand [[Drafts]] that were still in my inbox, I, I could see a pattern of how my days       |
| 22:17      | had been going. And what I would do is I would just, you know, I would trigger the action, it would      |
| 22:23      | pull up, you know, how are you feeling with a couple of emojis there, I'd push the emoji,                |
| 22:29      | and then it would say date time emoji. And I think at one point, like tagging, I think tagging           |
| 22:34      | had been, you know, added by that point. So then I would also add the tag of the year, the month,        |
| 22:41      | the day of the week, the day of the month, and like whether it was in the morning, the afternoon,        |
| 22:48      | or the evening. And that way I could get an idea of like, okay, what has my mood been like in the        |
| 22:53      | evenings for this month? Or how does my mood this, you know, month compare to this time last year?       |
| 22:59      | That was the plan. Of course, again, at this point, I don't, I don't do that anymore. But                |
| 23:07      | I've kind of switched to other tools for that. But it was really cool of having like an immediate        |
| 23:12      | need of like, okay, I want to see if this helps. Let me just build it. And it just started with like,    |
| 23:17      | okay, just put an emoji in. Okay, well, only I don't want to add variants to my emoji. So let            |
| 23:23      | me pick a set of emojis. Okay, now that I've got my set of emojis, let me put that on a menu so          |
| 23:28      | that it just pops up and then I can just tap it. And then, oh, let me add all this metadata around       |
| 23:33      | it. And so again, it was like, as you did what you could to make things work, you were just like,        |
| 23:40      | okay, now what? Now, how do I make this a little bit better? And that has always been my, my developer   |
| 23:48      | story or how I've built things. It's always like, I've built this thing, you know, again,                |
| 23:53      | rainbow spit and duct tape. And now it's like, how do I make this better? How do I make it cleaner?      |
| 24:00      | How do I make it prettier? How do I make it, you know, more performant? How do I make it document?       |
| 24:04      | Well, I guess better documented. What can I do to improve the quality of this code or, you know,         |
| 24:11      | this project? And I think that was the thing that, you know, most people don't think about when          |
| 24:15      | they're developing is most of your time isn't developing new things. It's improving and maintaining      |
| 24:21      | the existing things that you've already put in place or that your company has put in place.              |
| 24:26      | Yeah. And I think that's so often the path for automators where you just start with a basic              |
| 24:31      | solution that does one thing. And then once you get that automation in place, you're like, well,         |
| 24:35      | wouldn't it be nice if this also did that? Or if this could detect this is Tuesday and do something      |
| 24:41      | special because it's Tuesday. And that's the way you learn this stuff, you know, you just,               |
| 24:46      | you want to scratch an itch. And so often, again, if you're trying to solve a problem,                   |
| 24:53      | you're going to learn it a lot faster than if you're just trying to learn in the abstract.               |
| 24:58      | I would agree with that. And, you know, that's, that's the whole point of automation,                    |
| 25:01      | isn't it? It's solving a problem. It's not learning to code or, you know,                                |
| 25:06      | solving world peace, though, if somebody could do that by lunchtime, that would be great.                |
| 25:10      | But it's about solving a problem that you have that you're facing right now                              |
| 25:14      | and finding the tools to do that. And, you know, and hopefully the motivation to do it as well.          |
| 25:19      | And it certainly sounds like you, you've got a really strong start there, Jay.                           |
| 25:23      | Yeah. So I guess if I ever do make it big in this programming world, I have to                           |
| 25:28      | send Greg a big check. I'll just always subscribe to that application, even if for some reason I'm       |
| 25:35      | not using it, I'll just always subscribe because I do really owe, you know, that application,            |
| 25:40      | my entire career start and progression. I find [[Drafts]] to be excellent value for money as well.           |
| 25:50      | There was recently an increase in the price for new subscribers, but that means that those of us         |
| 25:55      | who were subscribed at the old price still get it, something like 20 bucks a year. And that's            |
| 26:00      | with family sharing. I actually made a point of unsubscribing before my subscription would end           |
| 26:05      | and then subscribing again from new because I felt like I was getting a lot out of [[Drafts]] and I          |
| 26:09      | wasn't paying enough for it. Though, you know, not everybody can afford to do that. I'm very             |
| 26:13      | fortunate, but it's excellent value for money. And I would agree, it's a good way to start               |
| 26:20      | learning programming for an automation perspective as well, especially nowadays with it being on         |
| 26:25      | the Mac as well. It's on your Mac, your iPhone, your iPad, you know, wherever you want to code,          |
| 26:31      | you can, and then you can use that same solution to solve your problem wherever you are.                 |
| 26:35      | Well, I mean, the funny thing to me is how often I pull [[Drafts]] out of my tool belt and use it. I         |
| 26:42      | mean, we've got an episode of Mac Power Users publishing next week that really isn't about [[Drafts]],       |
| 26:47      | but I think I mentioned the app like four or five times in the episode because                           |
| 26:51      | it just is kind of a Swiss Army knife for text. And if someone works with text, this is a great          |
| 26:57      | automation platform because you can make your life so much easier with it. But let's talk a bit about    |
| 27:05      | some of your other automation because you've gone far beyond that since, you know, your initial          |
| 27:10      | exploration into [[Drafts]] and [[JavaScript]]. Yeah, so I mentioned that, you know, that quickly turned         |
| 27:16      | into programming. And I feel like anyone that can write a shortcut, anyone that can write a              |
| 27:24      | workflow or a [[Keyboard Maestro]] action, you're already on the right track. I tell people my             |
| 27:32      | claim to automation fame for the people that I worked around was I got in trouble once for not           |
| 27:41      | working. But that was because my computer was working for me. And we had, we had this big project,       |
| 27:49      | the company I used to work for acquired another company, and they had 40,000 items that they             |
| 27:54      | needed to add to our web platform. And at the time, I was the person that was responsible for that.      |
| 27:59      | So in my mind, I'm like, well, I've got my work cut out for the next year. And from there, it was        |
| 28:07      | like, well, how do I do this? Where do I even begin? The first step is downloading all of these          |
| 28:13      | images. So I just started writing scripts. And it was like, well, I'm going to write a script that       |
| 28:18      | goes to this web page and like clicks on every single link in their index. I have a list of all          |
| 28:23      | other items. So once I learned the URL, I just hit a button and boom, I have 40,000 images               |
| 28:30      | downloading to my computer, which my computer was not happy about, but it did it. After that,            |
| 28:36      | I had to figure out how to upload it into our system, which was this Java based, you know,               |
| 28:42      | older platform. So I couldn't just, you know, click a button and watch it go. But what I could do        |
| 28:48      | was integrate things like [[Keyboard Maestro]] into certain steps. So it was like, okay, let's upload        |
| 28:54      | all the files into the back end and then use [[Keyboard Maestro]] to just iterate through this               |
| 29:01      | long list and iterate just a fancy word that says go through it line by line. And, and just, okay,       |
| 29:07      | here's the URL. Here's the, you know, path that you need to take. Here's the file name. Here's           |
| 29:12      | the information. And then my screen just started flickering basically as mice were, you know,            |
| 29:18      | the mouse was moving around, opening windows, waiting for things to load. And I was like,                |
| 29:23      | well, I can't touch anything. So I'm just going to go walk around, I guess. So I wound up doing          |
| 29:29      | what we considered to be my entire year's job in about eight hours because it was just doing             |
| 29:37      | its thing and doing it on its own. Thanks to, you know, a little bit of programming knowledge,           |
| 29:41      | which wasn't even the superstar, the real superstar was [[Keyboard Maestro]].                                |
| 29:45      | So you can compact it a year's worth of work into eight hours. David, I think we have our                |
| 29:52      | automation, our automation crown winner right here. If we can, if we've got the coronation               |
| 29:58      | ceremony set up, we'll just go ahead and do that. That's amazing. And I feel like a lot of people        |
| 30:03      | could learn a lot from that because even if you can't script something, Keyboard Maestro's click         |
| 30:07      | it image will save you. I've used that for auto automating your Java applets. Sounds like we             |
| 30:13      | have a lot in common there too. Those Java applets are not fun. But luckily, the website                 |
| 30:20      | itself was just HTML. So once, as long as the web page didn't change, you could basically say,            |
| 30:27      | hey, fill out this form. Here's the information for the form. Keyboard maestro has all of that           |
| 30:31      | built in. And then you just have to have, you know, all of your, all your stuff and something for        |
| 30:38      | [[Keyboard Maestro]] to look at to say, what do I need to get? And I think at the time I was using like      |
| 30:44      | OmniOutliner, but I mean, I could have used [[Drafts]] or anything else. It was, but I mean,                |
| 30:49      | it was so fragile. And that's why I didn't want to touch it because I mean, you're literally             |
| 30:54      | switching applications like lying down to the next cell copy. Okay, parse this information out.          |
| 31:00      | Now go to the website, fill out the information, hit submit. Now go back to the outline,                 |
| 31:05      | pay, you know, lying down to the next cell. So like weird mouse movement, anything like that             |
| 31:12      | could have, I think at that point I literally like turned off my mouse. Like I just unplugged it.        |
| 31:17      | Because I had a wired mouse at the time. And I was just like, no, I'm not touching this thing.           |
| 31:22      | I have, you know, it won't go to sleep. I think I was using like caffeine or                             |
| 31:26      | [[Amphetamine]] or one of the many applications that do that. And it was just like, all right,                |
| 31:31      | nobody touched this computer. I literally put like a piece of paper on it. Just like, do not touch.      |
| 31:39      | Yeah, our CEO just came in and said, he was like, what's this? And I was like, oh, it's working.         |
| 31:47      | He's like, okay, and then walked out.                                                                    |
| 31:51      | I think that's the thing though, isn't it? You've got to get, you've got to do the work                  |
| 31:54      | somehow. And either you're going to sit there and do it manually and make mistakes,                      |
| 31:58      | or you can make your computer do it for you. And if you program it wrong, yes,                           |
| 32:02      | it will make mistakes. But, you know, it sounds like you did the right thing and you made it             |
| 32:06      | smart enough. Yeah, like you, you I scripting feels like the most powerful thing in the world            |
| 32:11      | and a house of cards all at once every time I do it, you know, because it doesn't take much for          |
| 32:17      | everything to go sideways when you're programming at that level with [[Keyboard Maestro]]. I just put        |
| 32:23      | one of those together recently for [[Grammarly]], because I run all my texts through [[Grammarly]].              |
| 32:27      | And I realised what a pain it was to copy the text, open the website. And there's no way on the          |
| 32:32      | website with a keyboard shortcut to open a new, open a new document. So I just use the                   |
| 32:40      | [[Keyboard Maestro]] trick, you know, look for this image on the screen and click it. And so it was          |
| 32:44      | all UI scripted and it works fine. But all that stuff is very tenuous as you put it together.            |
| 32:51      | But the, you know, what is it? Wait is my friend, you know, wait a half second between steps.            |
| 32:57      | And you definitely want to develop that in like in strokes. You say like, okay,                          |
| 33:03      | can I do it with one? Now, can I do it with 10? How can I do it with 100? Okay, if I can do it           |
| 33:09      | with 100, I can probably do it with all 40,000. Now let's go. Yeah. And then then you just have          |
| 33:15      | to hope and then you give yourself time that when you see it break, you're like, okay, it broke there.   |
| 33:20      | Let me, you know, let me document that and make sure I know now to add a weight in there or              |
| 33:25      | to say, hey, instead of going maybe instead of, you know, deleting the line in your spreadsheet,         |
| 33:32      | you just page down because sometimes that takes longer and it's just faster to page down and just        |
| 33:37      | copy whatever that sales contents are. And it, it again, that's why I say if you can automate            |
| 33:44      | even the smallest of things, it makes you start thinking in my opinion, like a developer in some         |
| 33:49      | way, shape or form. And you're like, hmm, when I do this, I get this problem. How can I make sure        |
| 33:54      | that this problem doesn't happen again? Yeah. Yeah. And I think that's the thing, right? You've          |
| 34:00      | got to be looking for these opportunities. Because if you don't look for the opportunities to automate,  |
| 34:05      | you know, it's, it's very easy to miss them. And I don't know about you, but I always end up looking     |
| 34:11      | back at things going, you know, it would have been so much better if I'd automated this, especially      |
| 34:16      | when you're doing anything multiple times, you know, every so often I'm there and I build an             |
| 34:21      | automation for something. And I think I'm spending a bit longer here building the automation than it     |
| 34:24      | would take me if I just did this manually. But just because I need to do this 10 times manually          |
| 34:29      | today, is that going to be the only time ever that I need to do that manually? And also,                 |
| 34:33      | am I going to make a mistake doing it and then have to redo something, which costs more time?            |
| 34:38      | And in my case, it nearly always turns out that I do something, I do an automation for one thing         |
| 34:43      | that is definitely only ever a one time thing. And three days later, I can reuse it with a very          |
| 34:48      | minor tweak to something else. So, you know, it usually works out these things.                          |
| 34:53      | Yeah. So when you did this [[Keyboard Maestro]] UI scripting automation, did it, did it work                 |
| 34:59      | for all the images without stopping once? Or did you have any, any complications you had to solve?       |
| 35:05      | Well, and like I said, I kind of did it like the 110 100 path. And I ran into a lot of problems          |
| 35:12      | around 100. There was some weird like timeout stuff that kept happening. So,                             |
| 35:19      | and again, a lot of that can be resolved by, you know, if you close the, close the browser down          |
| 35:24      | and reopen it, or if you do open the browser, like log in, just close it, open it, log in.               |
| 35:32      | And, and from that point, it was just a matter of like, click and go. And I think there was like         |
| 35:37      | one issue that did come up with like, there was a field that was input incorrectly, which                |
| 35:42      | I mean, at the time I didn't know. And that's fine. It was like, Oh, well, we just need to change        |
| 35:48      | this one field. Good thing I have a list of all of my items. And all I need to do is just take out       |
| 35:54      | all of the stuff that doesn't need to change and just make that one little adjustment and then           |
| 36:00      | run it again. And because you're only doing that one thing, it doesn't take eight hours,                 |
| 36:03      | it takes like one. So even when you're, you know, even when I did make mistakes there or                 |
| 36:08      | mistakes happened, you were still able to go, Hmm, oh, I get it. This two should have been a three.      |
| 36:14      | Okay, change that. Now run it again. And because I had so much stuff put in place, kind of like          |
| 36:20      | what Rose said, it, it didn't stop there. It was like, Okay, well, this worked. From now on, this        |
| 36:28      | is the new process because if it's good enough to work for, you know, 40,000, it can work for 20,        |
| 36:34      | it can work for 10, it can work for five. Yeah. And it just kind of increased the process over time.     |
| 36:39      | Now you said at one point you had issues with rebooting and re-logging into the website.                 |
| 36:44      | Did you script that into the system before you did the 80,000 run? So it would actually reload the       |
| 36:51      | browser. It would close the browser and reopen it every time and log in. Okay. All right. Yeah.          |
| 36:58      | Okay. So that, that's a way to solve the problem and who cares, right? Because it's still doing          |
| 37:02      | it all automatically. And the nice part was I had all the items were already in the system               |
| 37:08      | because I again, I'd ran that script that it did the bulk upload, which I don't remember how long        |
| 37:13      | that took, but it didn't take very long. So it wasn't like I was, you know, running into the             |
| 37:18      | problem of like, Oh, you have this corrupted data. It's like, no, you have data. There's just no         |
| 37:22      | information attached to it. So I'm just going through and updating the metadata. So if there ever        |
| 37:27      | was a problem, I could even just manually go in and make the, a small adjustment if I needed to.         |
| 37:32      | And I think that's, that's kind of the key thing. Like a lot of people want to try to build like         |
| 37:37      | this entire platform that does everything in one giant step. And it's like, okay, no.                    |
| 37:43      | No, if there are like three very significant steps, step one, get all the items, step two,               |
| 37:50      | put all the items in the system, step three, upload all the metadata. So by doing it that way,           |
| 37:56      | if one thing broke, I didn't have to do the entire process over again. It's like, oh, okay,              |
| 38:01      | I downloaded everything. Everything is now stored and it's fine. Okay. Now I uploaded everything         |
| 38:05      | and everything is great. Now all I have to do is focus on this one, you know, at the most, for           |
| 38:12      | the most part, very simple part. But at the same time, it would have been a lot harder to do,            |
| 38:18      | had I said, I'm just going to do download, update, upload to the system, and then add the metadata       |
| 38:24      | and then keep going through that process. It would have taken a lot longer.                              |
| 38:28      | Yeah. Yeah. And I very much like the approach that you have there of splitting it into steps.            |
| 38:34      | Can you tell us a little bit about how you divided these things into steps? Did you have                 |
| 38:38      | actual divisions in your macros, or did you just, you know, have a comment and a note of, okay,          |
| 38:44      | so if it reaches this far, then it's done all of this and things like that so that you would             |
| 38:48      | know if something went wrong, where it went wrong. So the first two steps were just complete, like       |
| 38:53      | Python scripting. I used a couple of tools that, you know, the, some of the developers called like       |
| 39:00      | AIO or AIO HTTP, which is like a asynchronous downloader in Python. And then I use that as               |
| 39:10      | well for the upload, but you also have to provide a bunch of like authentication and stuff behind        |
| 39:15      | the scenes. So basically I was downloading and uploading in like sets of 20. So 20 synchronous           |
| 39:22      | downloads. And then when one emptied out, you know, it started working on the next one. So those         |
| 39:27      | were kind of on their own. All I had to do then was just check against the files because they were       |
| 39:32      | stored on my local file system. Thank goodness for a lot of space. Also the images weren't too big,      |
| 39:38      | but I could then just say like, okay, quick little cute, you know, quick little scripture that says      |
| 39:45      | go through this list of items. And for every item, there should be an image with the same item number.   |
| 39:51      | And if that exists, then we're great. If it doesn't exist, then we have a problem. And, you know,        |
| 39:58      | then, of course, some things happen, I was missing a few files. So then I go in, I just manually         |
| 40:02      | download those. And then again, the next step is go into the system, upload everything. And then         |
| 40:09      | when I was setting the metadata, the first thing it would do is check and see if that item existed.      |
| 40:14      | If it didn't exist, I would, I had a little thing in there that said, Hey, you know, if this is value    |
| 40:20      | equal this, if it doesn't equal this, go back into that document, that spreadsheet that I had,           |
| 40:26      | and highlight that row so that I could just go in and filter and say like, Oh, for some reason,          |
| 40:30      | this didn't upload, right? Oh, this one too. Hmm. Okay. Well, let me, let me just go in and add          |
| 40:34      | those real quick and then rerun it again for just these items. And again, it's, it's one of those        |
| 40:39      | things that like it takes you eight, you know, eight, eight, nine hours to do it. But you have           |
| 40:45      | all of this pre-planned work and like, okay, step one took like two hours, step three took like          |
| 40:52      | another two hours. And then you have like another, you know, half day of solving those issues and        |
| 40:56      | figuring out why they broke. But then the next day you're like, I'm going to get in, I'm going to hit    |
| 41:02      | play and nothing's going to stop me. And I do that. And then everything is working. And you're like,     |
| 41:08      | so excited. And then you're just like, okay, I'm going to come in, I'm going to look at it from          |
| 41:12      | time to time, just to make sure that, you know, that the screen's still bouncing around doing its        |
| 41:17      | thing. And as long as it was, I was happy. This episode of The Automators is brought to you by           |
| 41:24      | Sync Up, a OneDrive podcast that takes you behind the scenes of OneDrive. If you're listening to          |
| 41:30      | this show, you know the joy of finding a new podcast that can teach you something and be                 |
| 41:35      | entertaining along the way. If you're looking for a new show to listen to, Sync Up takes you behind       |
| 41:41      | the scenes of Microsoft OneDrive. So you can learn about how to connect files, show your documents,      |
| 41:47      | and work from anywhere. And you'll get to hear about the design and development side of things,          |
| 41:51      | too. Each show covers a dedicated topic, guest interviews, news and announcements,                       |
| 41:57      | plus a special topic outside the technology norm. Topics include things like external sharing,           |
| 42:03      | so you can use your OneDrive data and share it externally. Automation, which of course is near           |
| 42:08      | and dear to my heart, and yours as well, because you're listening to The Automators,                     |
| 42:12      | and also remote work, which is now more important than ever, and entirely doable with OneDrive.          |
| 42:19      | In the most recent episode, the show covers Yammer, which offers employees a way to come                 |
| 42:24      | together socially to share what's going on in their lives, both inside and outside of work.              |
| 42:29      | The guest, Michael Holst, is the product manager on the Microsoft 365 product marketing team,            |
| 42:35      | responsible for employee engagement. Actually, listen to this episode with my wife, and she's,           |
| 42:40      | you know, trying to get back into the workforce, and she wants to get better at OneDrive,                |
| 42:45      | so if she ever applies for a job, she can talk about it with some authority.                             |
| 42:49      | And she's been learning about OneDrive through this podcast. That's just one reason to listen to         |
| 42:53      | the Sync Up podcast. And if you already are working at a place that uses OneDrive,                        |
| 42:58      | why not become the guru of OneDrive at your workplace? You know it will help you get your                |
| 43:03      | work done faster. And that's why you're listening to The Automators. So this is a great companion        |
| 43:08      | podcast for The Automators. If you work with OneDrive, or you think one day you may do so,               |
| 43:13      | either way, go listen to it now. Just search for Sync Up, S-Y-N-C-U-P, wherever you get your podcast.     |
| 43:20      | That's S-Y-N-C-U-P, or just click the link in the show notes to check out Sync Up. Go check it out        |
| 43:26      | now. Our thanks to Sync Up and Microsoft for their support of The Automators podcast and all of Relay FM. |
| 43:34      | And I think that's the thing. It took you a long time to put it together,                                |
| 43:39      | long being relative, into the amount of time that it took to actually run, but you still                 |
| 43:43      | saved years with the work. That's incredible. Absolutely. And I will say that I'm no longer              |
| 43:51      | at that company. I'm doing something else now. So I don't really have a need for this, you know,         |
| 43:56      | my magnum opus of automation glory. So now I've retreated into the quiet life of, I call it              |
| 44:05      | shortcut bettering, which means every time I have an application, which I think that there               |
| 44:10      | should be a shortcut for, I just make one using [[Keyboard Maestro]]. Or if I think that there should        |
| 44:18      | be maybe a better shortcut, not to pick on [[Drafts]] again, but that's one that I distinctly know of        |
| 44:25      | that like draft supports marked on the Mac and marked does this great preview of markdown content.       |
| 44:32      | And anytime that I want to preview markdown and [[Drafts]], I want marked to be running and I want           |
| 44:37      | marked to be the thing that's doing the preview. So I just hot wired the preview shortcut to make        |
| 44:43      | sure that marked is open and then just open up the mark streaming window. And then also when I           |
| 44:48      | close draft [[Drafts]], then [[Keyboard Maestro]] says, Oh, yeah, let me close mark two while you're at it.      |
| 44:53      | That's ingenious. I really think it's those two and three step automations that really, you know,        |
| 45:00      | provide the lubricant of the day, you know, it's like just little things like that,                      |
| 45:05      | even like the one I was talking about earlier, copy text, open [[Grammarly]], push this button and           |
| 45:09      | paste it, you know, stuff you do every day that is manual. The automation does not require you to        |
| 45:16      | go super deep into the weeds, but then it just improves your quality of life every day because           |
| 45:22      | you're doing this stuff repeatedly. I think those are some of the best automations.                      |
| 45:27      | I recently did one that's very similar to this where it will copy the URL of the currently               |
| 45:32      | open [[Safari]] window, open deliveries and start adding a new delivery. And I do this for when              |
| 45:38      | I've ordered things from [[Amazon]], so that I can easily grab that link and just paste it into              |
| 45:43      | deliveries ready to add that so that I know things are coming. And I realise I don't use                 |
| 45:49      | it all that often, but I do the same thing. I do command L command C, command space type DEL,            |
| 45:56      | wait for it to appear, tap enter, command N, and then it delivers picks it up on my keyboard.            |
| 46:02      | But that's actually quite a few steps. And I know, because I have extra space on my [[Stream Deck]],         |
| 46:07      | David, I have a space on my [[Stream Deck]] for that, which I don't use all that frequently.                 |
| 46:14      | So is it worth having a space on my [[Stream Deck]] for it? But it makes me happy every time I look          |
| 46:17      | at it. So I'm good. I do something similar to catch the URL and copy it. I don't necessarily put         |
| 46:25      | it into deliveries, which I should because I have deliveries open and I was expecting a delivery         |
| 46:29      | yesterday and it was late. But I use the hyper key for a lot. And I know, David, I think you've          |
| 46:35      | talked about the hyper key on your on your blog, some of [[BetterTouchTool]], you just hit caps lock       |
| 46:40      | and then now it hits shift control option in command for you. So hyper key L, when the browser is        |
| 46:48      | open, [[Keyboard Maestro]] says, Oh, let me, what's that URL? Okay, that's on your clipboard now. You're     |
| 46:54      | good. Yeah. And we've talked about hyper key in relation to [[Keyboard Maestro]]. But in the past,           |
| 47:00      | it required installing carbine or elements, which is an amazing app, but it has very questionable        |
| 47:07      | support in, you know, the most recent update to the Mac OS, you know, it doesn't, I don't think          |
| 47:12      | it's really stable yet. And the guy at [[BetterTouchTool]] just decided, I'll heck with it,                |
| 47:18      | I'll just write it into [[BetterTouchTool]]. And it's a one button where you can take the caps lock        |
| 47:23      | key and turn it into shift command control option. And it gives you a whole another set of like 30       |
| 47:32      | buttons you can use for keyboard shortcut, you know, the whole keyboard plus caps lock. And              |
| 47:37      | also it allows you to avoid doing that, you know, that jujitsu with your fingers where you're            |
| 47:43      | trying to hold down eight keys at once. Yes, holding eight keys at once is is a fast track               |
| 47:49      | way to not being particularly happy with your workflow. So I can highly recommend. Also,                 |
| 47:56      | just a side note, the guy behind [[BetterTouchTool]] went full time on that recently. And he was able      |
| 48:02      | to do that. And I'm really pleased about that. So I just wanted to mention that. So if you haven't       |
| 48:06      | tried [[BetterTouchTool]] before, and you have a trackpad, and you want to add support for automation      |
| 48:11      | to it, or you have a mouse with a mapped buttons, or you like window snapping, just look at better       |
| 48:17      | touch tool. It's it's amazing. Yeah, we need to at some point, dig in on that. We did a whole            |
| 48:21      | Mac Power Users episode on it in the past, but maybe it's a point we need to dig into the Rosemary             |
| 48:26      | Orchard brain on [[BetterTouchTool]] and hear what you're doing with it. Because you're right, it's        |
| 48:31      | an app that's not expensive. If you're a set up subscriber, it's you get it in there and he still        |
| 48:36      | gets paid. So, you know, it for automators, this is such a great tool, you know, it's kind of like       |
| 48:42      | [[Drafts]]. Like once you install it, you find all these uses for it. You forget that you're running it      |
| 48:48      | until it's not running. And then you're like, wait, what? Yeah, exactly. I had to do something on my     |
| 48:53      | dad's Mac for him the other day. He wanted to know why try time machine wasn't backing up. It            |
| 48:58      | turns out if you turn off your Wi Fi connection, then time machine doesn't back up that. Yeah.           |
| 49:03      | So, you know, 10 out of 10 on the troubleshooting. But I was trying to open a link in a new tab in       |
| 49:08      | [[Safari]] on the track. And I was using trackpad. And I was tapping with three fingers, because on my       |
| 49:14      | machines, I've mapped the three finger tap to the middle click, which usually means like close a tab     |
| 49:20      | if you're middle clicking on a tab, or open a link in a new tab. And I was doing this, and I was         |
| 49:25      | trying to figure out why it wasn't working. And it took me much too long to realise that it was          |
| 49:31      | because he doesn't have [[BetterTouchTool]] installed, because he doesn't, he doesn't know how to          |
| 49:36      | use that yet. So he'll be getting my first birthday next month.                                          |
| 49:40      | Rose, you mentioned kind of the like joint pains and stuff that come with, you know,                     |
| 49:44      | using a Mac a lot, you know, especially when it's our daily jobs. There's actually a new app. And        |
| 49:50      | I'm working on a video for like a whole suite of apps that help with with arthritis and RSI.             |
| 49:56      | And in that, it's called Menuwhere, which takes your top left menu, your app menu,                      |
| 50:05      | and your app menu bar, and it just puts it wherever your mouse is. And one of the things                 |
| 50:10      | that I've done is I've actually, you have to use like a hot key to trigger it normally. I've just        |
| 50:15      | configured [[BetterTouchTool]] with like shift double click to just it's almost like a second              |
| 50:20      | right click. It's like, oh, if you right click, you get your options. But if you shift double click      |
| 50:24      | on your, you know, trackpad, now you get that menu bar that if you are like me and you can never         |
| 50:30      | remember where your mouse is, you don't have to worry about that because the menu bar went to            |
| 50:34      | your mouse, not the other way around. That is genius. I'm going to use this. I love it. Fortunately,     |
| 50:40      | I do very well by mixing up the trackpad and my Logitech mouse, but it's always good to spare            |
| 50:45      | yourself any potential future problems if at all possible. And with [[BetterTouchTool]], you could         |
| 50:50      | also just configure it for your mouse as well. Yep. Yep. Though there is one button on my                |
| 50:55      | mouse that I've forbidden myself from using. I'm not allowed to program it. And that is the              |
| 50:59      | down button on the thumb rest. I don't know who Logitech thought that up, but everybody I knew           |
| 51:04      | who's ever pressed it goes, ow, yeah, that that's not happening on a long term basis.                    |
| 51:11      | You know what? I use it every day. The down button underneath the thumb rest, David.                     |
| 51:15      | Yeah, just push down with my thumb. That's great. Yeah, I don't know. Maybe it's just my thumb or        |
| 51:21      | something. It really hurts actually to use that and I can feel it in my joints. I just pressed           |
| 51:27      | at it just now and no, I'm not even going to try and use that again. My hands will not let me do         |
| 51:32      | that. I feel like all the years of playing the saxophone, my fingers are, they're very,                  |
| 51:37      | they're like athletes. They're super soldiers of fingerness.                                             |
| 51:41      | Okay, well, so we took a side diversion there, Jay, into [[BetterTouchTool]], but [[Keyboard Maestro]]         |
| 51:49      | and [[BetterTouchTool]] are not the only applications you are using on the Mac. And I know we keep         |
| 51:54      | meaning to talk about [[Alfred]] more on the show, David. We're going to have to do an entire episode        |
| 51:58      | on it. And Jay, we might have to get you back for a segment in that. But you are using [[Alfred]] in a       |
| 52:03      | couple of ways, which I really need to get better at doing, Jay. So would you like to tell us about      |
| 52:08      | some of your favourite [[Alfred]] scripts? So [[Alfred]] is awesome. I will say I think [[Alfred]] was probably       |
| 52:16      | the first Mac automation-ish tool that I ever used. And I've been a power user ever since.               |
| 52:24      | I guess the quite literal, that's what they call it. But I, so I use Duck.Go for search and Duck.Go      |
| 52:35      | for those that don't know, have a bunch of documented and undocumented commands that they                |
| 52:41      | call bang commands. So if you do exclamation point and whatever the shortcut is, and there's             |
| 52:48      | actually another app called Keyword Search on the Mac that does something similar. And I run that        |
| 52:53      | as well for different things. But the cool thing is [[Alfred]] can have its default action B to search       |
| 53:03      | for something on the internet. And over time, you start memorising the bang commands that you use        |
| 53:08      | for everything. So if I want to go to Google Images, I can just do like, you know, exclamation           |
| 53:16      | point IMG and then whatever I want to search. And because I don't have to like create the                |
| 53:21      | workflow for that, it'll just say, do you want to trigger this with the default action, which is         |
| 53:26      | search it in Duck.Go. And I say, why yes, yes, I do. And then from there, Google Images pops up          |
| 53:31      | and it searches for whatever I'm searching for. So it's almost like my universal search bar,             |
| 53:36      | but smarter using some of these different commands that Duck.Go has built into it.                       |
| 53:43      | Okay, so to give us an example of one of these bang commands that you like to use.                       |
| 53:48      | Let's see. Well, there's Twitter, because that's healthy for me to first think of Twitter.               |
| 53:54      | But I could just type in, you hear my key cron back here, if I just type in bang tw                      |
| 54:03      | max Sparky, it's going to open up Twitter, and it's going to open it up to David's,                      |
| 54:09      | well, it's actually going to search for David, but then I can see at, you know, David Sparks             |
| 54:14      | at MacSparky right there, first option. Yeah. Perfect. Yes. Yeah. No, I'm a big fan of those.           |
| 54:21      | And there's a, we've got a link actually to David, you've been diving into                               |
| 54:28      | to [[Alfred]] a little bit more recently. I noticed, you know, they've been posting things on your           |
| 54:33      | blog again, 10 out of 10 for that. I really need to do a better job at that, where you've been           |
| 54:38      | diving into [[Alfred]] as well. Yeah, well, there's just so much you can do with it from an automation       |
| 54:44      | perspective. And what there's two things I like about it that I've been embracing more lately.           |
| 54:50      | First is just native file search, because there are, there are built-in samples in the [[Alfred]],           |
| 54:59      | you know, sample pack where, like you can say, search for just folders that have this name.              |
| 55:05      | Like, I think a lot of time on your drive, you want to just find folders. And for me,                    |
| 55:09      | since I have a separate folder for every client name, that one made a lot of sense for me,               |
| 55:14      | but I added a parameter to it saying, just search in this one directory where all my                     |
| 55:19      | client files are. So if I type CL space, and then it searches the client folders, and I can type,        |
| 55:26      | you know, Rosemary Orchard, if Rose was a client, and then I would get to her folder,                    |
| 55:31      | just type in CL space, R-O-S-E, or, you know, however many letters have to type in for it to             |
| 55:37      | find her. And then you hit enter, and then you're in that folder in the finder, which is just a          |
| 55:41      | great way to navigate finder to specific places. And then as I started doing that, then I started        |
| 55:47      | making other custom folders, you know, like, you know, pod searches, the podcast folders,                |
| 55:51      | or, you know, you know, insert your own need here. So that's something I've been doing a lot of.         |
| 55:57      | The other one I was doing is I found a group of scripts written by Packal,                               |
| 56:04      | P-A-C-K-A-L, for OmniFocus that are just, you know, they are, I don't know what the words                |
| 56:11      | that kids use, the cats meow, what did they say? I don't know, man. I don't know how to be cool.         |
| 56:17      | So someone's kids, are you saying that? Yeah. Yeah, someone's kids.                                      |
| 56:19      | Unicorn tears, I think, is the hip person now.                                                           |
| 56:22      | Okay, unicorns. It's amazing because he just added a bunch of commands instead of bangs their period.    |
| 56:29      | So you hit period F, and then it searches all the OmniFocus folders. So I could say                      |
| 56:35      | period F space Smith, and I get to the Smith folder in OmniFocus. And I use a lot of nested              |
| 56:40      | folders because, you know, I have a lot of different things I'm responsible for. And                     |
| 56:44      | I hit, or I can hit period P, and it goes to a specific project, you know. And so                        |
| 56:51      | it just makes navigating through this stuff much faster. And all of that just is triggered by            |
| 56:58      | [[Alfred]]. And, you know, how do you not love [[Alfred]]? Yeah, I would highly second the recommendation        |
| 57:04      | that you've got there for [[Packal]]. It's a website where a lot of different people have submitted          |
| 57:09      | different scripts over time for [[Alfred]]. Now, some of these have been around for quite a                  |
| 57:14      | while. So there might be newer forks of them, you know, alternative versions, which are more             |
| 57:18      | up to date and have more features. So you might want to do a little bit of digging around there.         |
| 57:23      | But, you know, it's an excellent resource if you want to dive more into [[Alfred]].                          |
| 57:30      | And I know that I found [[Alfred]] is one of those tools where I don't really think about it much,           |
| 57:35      | but I use it a lot. And actually, [[Stephen Millard]], who was on the show relatively recently, has a        |
| 57:40      | whole two actions. They're just two actions, one for [[Keyboard Maestro]] and one for [[Drafts]].                |
| 57:46      | And it doesn't sound like a lot. He's put the entire [[Drafts]] library inside of [[Alfred]].                    |
| 57:51      | So, you know, that's something that I really, I've been playing with a lot and I really like.            |
| 57:58      | Yeah. I mean, the ability to trigger [[Keyboard Maestro]] scripts while you're                               |
| 58:02      | from [[Alfred]] is just a remarkable little tool because [[Alfred]] is always very close.                        |
| 58:09      | Do you guys trigger [[Alfred]] with Command Space, Control Space? How do you trigger [[Alfred]]?                 |
| 58:14      | Oh, Command Space. Absolutely. It has replaced [[Spotlight]].                                                |
| 58:19      | Yeah. I remap [[Spotlight]] to Option Space and then [[Alfred]] is Command Space.                                |
| 58:24      | Every so often, my Mac has been doing this weird thing because I'm back on the Intel Mac and I           |
| 58:28      | think it's throwing a wobbly because I was on the M1 and I liked it more. So, it throws a wobbly         |
| 58:34      | and it doesn't start [[Alfred]] at launch. And I'm not quite sure why this is. I've narrowed it down to      |
| 58:39      | it's not an [[Alfred]] problem because [[Alfred]] is doing all the right things that it's supposed to do.        |
| 58:46      | So, I've narrowed it down to Mac OS is being weird. So, I need Option Space available. Should I          |
| 58:53      | need to start [[Alfred]] from [[Spotlight]], which is pretty much the only thing I use [[Spotlight]] for             |
| 58:57      | nowadays. All you do is to remap that, all you do is you open up [[Spotlight]] and then hit Command          |
| 59:02      | Comma and then you can remap it to Option or Control Space and then that allows you to set               |
| 59:07      | the [[Alfred]] trigger to Command Space as you do. This episode of Automators is brought to you              |
| 59:14      | by Forward Networks. Forward Networks produces business risks by revolutionising the way large           |
| 59:18      | networks are managed. How? Well, their advanced software delivers a digital twin of the network,         |
| 59:24      | which is a completely accurate mathematical model in software. The model serves as a single              |
| 59:29      | source of truth for the network. So, users can verify that the network is configured correctly,          |
| 59:34      | is in compliance with policies, and is behaving exactly as they intended.                                |
| 59:39      | Forward Enterprise can accurately predict the impact of a proposed change across every possible          |
| 59:44      | traffic path. So, network operators can roll out changes with confidence, all while the network          |
| 59:49      | stays secure and reliable. It really is an invaluable tool for your company. Fortune 500                 |
| 59:55      | companies and large public sector organisations are turning to mathematical models of the network.       |
| 01:00:00   | Forward Networks have customers such as PayPal, Verizon, and Goldman Sachs, along with several           |
| 01:00:05   | large government agencies. It was founded in 2013 by four Stanford PhD graduates who felt an             |
| 01:00:11   | empathy for network operators, and no security is top of mind for IT professionals and business          |
| 01:00:16   | leaders, and sought to apply these principles of modern software development to the network.             |
| 01:00:22   | Request a demo today at forwardnetworks.com/automators. That's forwardnetworks.com/automators                  |
| 01:00:28   | Go there now, check it out. forwardnetworks.com/automators.                        |
| 01:00:33   | Our thanks to Forward Networks for their support of this show and Relay FM.                             |
| 01:00:38   | Dave and I know that you are, you know, you're all about context, and that's something, you know,        |
| 01:00:44   | we talked about just triggering, you know,OmniFocus searches, I mean, are, and, you know,               |
| 01:00:51   | drafting Keyboard Maestros. I've actually built, and I'm the maintainer of, there's another tool         |
| 01:00:56   | called Bunch, and it's built by automator, mad scientist [[Brett Terpstra]], and it is, I would say,         |
| 01:01:03   | it's very, it's [[Keyboard Maestro]] if it were only for context. So for me, I actually triggered those      |
| 01:01:12   | bunches via [[Alfred]], and I maintained the [[Alfred]] workflow for that. And it's cool because, you            |
| 01:01:22   | know, it becomes this thought of instead of just saying, oh, I need a website or oh, I need to open      |
| 01:01:27   | an app or a file, it's like, I need to get into podcasting mode, or I need to get into presentation      |
| 01:01:33   | mode, or I need to get into video mode. And I just, you know, hit [[Alfred]], hit B to activate Bunch,       |
| 01:01:39   | and then it searches for all of my active, all of my bunches that are available. And I just type         |
| 01:01:44   | the one that I'm looking for really quick, hit enter, and then boom, you got windows that are            |
| 01:01:48   | closing and new windows that are opening and do not disturb being set or unset and all this other        |
| 01:01:53   | stuff happening. Yeah, I need to get into Bunch. I, you know, I know anything Brett makes I usually      |
| 01:01:59   | fall for, and that's one I just haven't got to yet. I have all these complex setups with keyboard        |
| 01:02:06   | maestro, and I suspect a lot of this stuff would probably be easier with Bunch. I think the difference   |
| 01:02:14   | between in my, from what I can tell with Bunch and [[Keyboard Maestro]], and I've got 20 bunches,            |
| 01:02:20   | I think on here at this point, some that are just tests. But a lot of it is, I don't want to have        |
| 01:02:27   | to think about how I'm going to do a thing. It's like once you learn the, like the Bunch syntax,         |
| 01:02:32   | then it, what could be like a bunch of blocks and [[Keyboard Maestro]] becomes like 10 lines of just         |
| 01:02:41   | text in Bunch, and then you're, you're there, you're ready to go. Yeah. And what I, what I really like   |
| 01:02:48   | about Bunch as well is David, it uses X callback URLs. And we recently had a show on the stream          |
| 01:02:54   | deck where we talked about using these URLs in the web action. Now [[Brett Terpstra]] had had a post         |
| 01:03:00   | about doing this from [[Keyboard Maestro]]. And the, there's a bit of a delay if you, if you put             |
| 01:03:12   | X callback URLs in the website action, versus if you trigger them from [[Keyboard Maestro]]. But it          |
| 01:03:17   | means that you can easily trigger things from the [[Stream Deck]] as well. And yeah, I'm loving              |
| 01:03:23   | Bunch. I've been playing with it a little bit actually recently. So we might have to look                |
| 01:03:28   | into that one in a future show as well. Yeah. So give me just kind of an overview since I haven't        |
| 01:03:34   | run this one. Like give me a sample Bunch that you run and what exactly it does to your computer.        |
| 01:03:40   | So I'm going to, I'm going to find my very, very simple one that's six lines. And the lines,             |
| 01:03:49   | I'm going to read them to you. Line one, [[Slack]], line three. So there's a blank line in there,            |
| 01:03:55   | [[Safari]]. The blank line isn't even necessary. I just put it in there to make it readable.                 |
| 01:03:59   | There's a dash, two X's, and then two URLs on line five and six. And what that does is when I            |
| 01:04:06   | trigger that Bunch, it opens [[Slack]], it opens [[Safari]], it closes all of the tabs in [[Safari]],                |
| 01:04:12   | and then it opens those two URLs that I listed. That's, that's the simple one. That's a very             |
| 01:04:19   | simple. I tend to do that in the morning when it's like, oh, time to start my day. Let me make sure      |
| 01:04:24   | got [[Slack]] run in. You can do things like add snippets. So you can have all of those actions              |
| 01:04:30   | inside of a file and have another file call that file. And then on top of that, you can now add          |
| 01:04:37   | menus to it. So where you can say, well, what [[Slack]] do I want to go to it? Maybe you just program,       |
| 01:04:43   | you know, if you don't ever move your slacks around, you could say, you know, Command one is,            |
| 01:04:48   | you know, my work [[Slack]], Command two is the one that I have, I have where I'm in a bunch of friends      |
| 01:04:52   | and I can say, oh, work [[Slack]], and it'll go, okay, [[Slack]], and I'll send the keystrokes, you know,        |
| 01:04:57   | Command one to [[Slack]] so that it sends it to the right one. And if I want, and I guess the good           |
| 01:05:03   | example here is a podcast that I run called Bob's Tavern Cast, which don't worry about that. It's        |
| 01:05:07   | just a silly card game. But when I trigger that, what it does is it loads up my recording snippet,       |
| 01:05:18   | which closes [[Dropbox]] and CloudMounter, which is, you know, all the little big bandwidth consuming        |
| 01:05:25   | things. It closes Logic, Final Cut, [[Skype]], Zoom, [[Dropbox]], and my email client. It sets my do not         |
| 01:05:32   | disturbed on, it changes my audio inputs and outputs to my Focusrite Scarlet and it opens up             |
| 01:05:39   | [[Audio Hijack]] and triggers a [[Keyboard Maestro]] snippet that says, Hey, look at [[Audio Hijack]] and            |
| 01:05:47   | select the image that says that podcast name. And then from there, when I'm done recording,              |
| 01:05:55   | I hit close that bunch. And when I close it, it has a whole other set of instructions like              |
| 01:06:01   | reactivate [[Dropbox]], open up the [[Dropbox]] request URL, and then also open up Patreon so I can send the     |
| 01:06:09   | raw audio feed to my Patreon patrons and then open up Transistor where we host our podcast and           |
| 01:06:16   | then open up Logic, open up the exact template for Logic that I'm using, and then also have the          |
| 01:06:24   | window open where I'm expecting my co-host to drop their audio files in. So it already takes me          |
| 01:06:32   | out of one context and moves me into the next one. And all of this is like 30 lines of text.             |
| 01:06:38   | Yeah. And that makes it really easy to debug as well. But like some of the things you said               |
| 01:06:43   | in there, I'm not sure how you do those with Bunch. Like how do you make specific commands               |
| 01:06:48   | within an app or how do you open a Finder window? And I guess that probably isn't that difficult,        |
| 01:06:53   | but I just I need to sit down and figure it out. Yeah, there's there's a subcontext. So if you if        |
| 01:07:00   | you type Finder and then on the next line, you do a dash and then you put like a file name,              |
| 01:07:05   | it's supposed to open that file within Finder. You could also if it's just a folder path,                |
| 01:07:10   | if you just put the folder path in on a line itself, it'll just open that folder path.                   |
| 01:07:15   | And then sending commands like do not disturb and like system commands, you do that by wrapping them     |
| 01:07:21   | in parentheses. And that's the thing is there is a language that you have to learn. It is pretty         |
| 01:07:28   | simple. And some of it does make very much sense. There's a couple of them that I'm like, huh,           |
| 01:07:34   | I got to wrap my head around that a little bit more to get it. But then once you do,                     |
| 01:07:38   | you're able to just start writing things. And if I mean, even when you take stuff out and,               |
| 01:07:45   | you know, with snippets and menu options and stuff like that, there's there's a lot of room to           |
| 01:07:50   | to think about things differently. I like this because I feel like in [[Keyboard Maestro]], there's          |
| 01:07:55   | like one way to do a thing in most cases, or there's probably two. But if you don't know those           |
| 01:08:01   | ways, it becomes hard. And something like Bunch, you just start typing, I always say like, just try      |
| 01:08:07   | the file first. If you just try the file and it doesn't do what you want it to do, then go to            |
| 01:08:11   | the next step of like, okay, maybe I open the application and then add the file. And if that             |
| 01:08:15   | doesn't work, it's like, maybe I open the application and just send the command stroke of                |
| 01:08:18   | command zero command, oh, to open. There's a lot of ways that you can like try different things          |
| 01:08:25   | to get the same results. And ultimately, like, Brett's just gone above and beyond with adding            |
| 01:08:31   | front matter to it. So now you can have all those things run at once, you can have them run in line.     |
| 01:08:35   | And again, a lot of it is confusing, but a lot of it is also very optional. So you don't have to         |
| 01:08:41   | feel like writing your magnum opus, save you a year's worth of work in one text file, you can            |
| 01:08:47   | again, start slow, do like, I want these few things. And if you already have [[Keyboard Maestro]]            |
| 01:08:53   | doing the rest, just add the [[Keyboard Maestro]], your X callback URL, and it'll just run it.               |
| 01:08:59   | Yeah, I mean, the nice thing about this is it has URLs in it. So you can do basically anything on        |
| 01:09:05   | your computer from a bunch. And if it's, and if it's something Brett makes, you know that it's           |
| 01:09:12   | going to be constantly getting updated. And, you know, there's not going to be any rust in the           |
| 01:09:18   | machine. If there's something that doesn't work, Brett, I'll just go in and fix it.                      |
| 01:09:23   | Yeah, a bunch of something I've definitely been playing with more and more, especially when I            |
| 01:09:27   | realised that it might even in some ways be better than [[Keyboard Maestro]] for some of what I'm doing.     |
| 01:09:33   | You know, [[Keyboard Maestro]] is excellent, but it's an extremely powerful tool. And sometimes I don't      |
| 01:09:38   | need all of that power. And, you know, it's always good to have the right tool for the right job.        |
| 01:09:43   | So the other thing, of course, is, you know, if people don't have [[Keyboard Maestro]], but they like        |
| 01:09:48   | the idea of opening a series of applications at the same time, then of course, bunch is a great          |
| 01:09:51   | way of doing that. You know, if you don't have [[Keyboard Maestro]], and we might convince you on            |
| 01:09:55   | [[Keyboard Maestro]] another day, and if we don't, then that's totally fine. You're still an                 |
| 01:09:59   | automator without it.                                                                                    |
| 01:10:01   | Bunch is also free. I should throw that in there. But I think it will be moving to paid. Right now,      |
| 01:10:06   | it's in beta. But yeah, I know Brett's, Brett's got a lot of stuff going on, but I know Bunch is         |
| 01:10:12   | definitely a big priority for him.                                                                       |
| 01:10:14   | Now, how do you guys handle window management? Because I'm looking at these bunch scripts,               |
| 01:10:19   | and none of them seem to say open [[Safari]] and put it on the right side of the screen or something         |
| 01:10:24   | like that. So you can do that now. He recently added like some display management. There's               |
| 01:10:30   | another post that he did a while back about using [[Moom]] with Bunch. And again, because [[Moom]]               |
| 01:10:38   | supports different keystrokes, you can just trigger those keystrokes to happen. Just activate            |
| 01:10:44   | [[Moom]] and then, hey, activate this window, trigger these keystrokes, and now that window goes to          |
| 01:10:50   | the right place. And everybody's happy. All right. You guys have given me a homework project.            |
| 01:10:55   | You know, we make this show release on Fridays for a reason so we can spend the weekend doing            |
| 01:10:59   | something. I'm going to become a bunch guy over the weekend. So here we go. Jay, I know you're           |
| 01:11:05   | also enthusiastic about Hook. How are you using that? So yeah, Hook for those that know is like          |
| 01:11:11   | this really cool like bookmarking tool. And I always say bookmarking and people tend to think            |
| 01:11:16   | like I go to a website, I add it to my bookmark. So then I have to search for it in my bookmarks.        |
| 01:11:22   | And then there it is, which is great when you have three bookmarks, but terrible when you have           |
| 01:11:25   | 300. Hook is cool because hook doesn't just bookmark URLs. You can bookmark files. And the reason it's   |
| 01:11:34   | called hook is well, just like when you hook a fish, the fish is now connected to your fishing           |
| 01:11:41   | pole. You can hook one file or one URL to another file and URL or several files and URLs and those       |
| 01:11:50   | things. And recently I did a video that you can even hook to actions that you want to run                |
| 01:11:58   | when things happen. And they have a templating system and things like that. But all that to say,         |
| 01:12:04   | I hook so many things, almost everything. I hook it to something. And a lot of that is because           |
| 01:12:14   | of my job and the amount of research that comes into building these presentations or building            |
| 01:12:20   | you know, little scripts or demo projects. Like I'm often thinking about like, okay, what do I           |
| 01:12:26   | want to include in my presentation, even in podcasting, like the hook has been like the best             |
| 01:12:32   | because I can, if I have a guest, if I'm, you know, interviewing David Sparks, which I've done           |
| 01:12:38   | before, one of the best things about that is I can go to his Twitter account, hook that and then         |
| 01:12:43   | connect it to MacSparky.com and then connect that to the field guides and then connect that to           |
| 01:12:49   | automators and Mac power users. So that as we're talking, I don't have to sit there and think            |
| 01:12:54   | about, oh, what does he do? Oh, he does that and that and that and that. I can just go open up hook,     |
| 01:12:59   | search for, you know, David Sparks. And then I have this laundry list because David does way too         |
| 01:13:05   | many things of all the different things that David does. And then I now have that. And if I              |
| 01:13:10   | want to export that to a list, I can, if I want to go to a particular file, I can do that as well.       |
| 01:13:15   | And by the time that this is out, it will have launched. Now, hook also has pinboard integration         |
| 01:13:23   | so that anything that you hook can automatically be added. Well, sorry, any web you want to              |
| 01:13:28   | any web URL that you hook can automatically be added to pinboard. And for those that don't know          |
| 01:13:35   | pinboards, this very like lightweight, but super powerful, like bookmarking, you know, long term         |
| 01:13:41   | storage tool that most a lot of us nerds use that are doing things in the background. But the reason     |
| 01:13:48   | I love that is that if I've recently hooked some things that I'm wanting to think about in terms         |
| 01:13:54   | of research, I can hook. It'll move it to pinboard. And then I can now take it on my phone with me       |
| 01:14:00   | and I can view those those web pages on my phone or if I'm really nerdy, which I am, I can save the      |
| 01:14:09   | pinboard RSS for that tag that hook applies. And now I have an read it later service using hook          |
| 01:14:16   | that also links to projects and applications. So it's a super powerful tool. And I'm just loving         |
| 01:14:25   | all the stuff that they're doing with it. I know there's a lot more going on. And I will say,            |
| 01:14:29   | I guess the one caveat there is that I do work not for hook, but I've done some work with them in        |
| 01:14:36   | terms of working on the app and getting it some of the features, you know, thought out and applied.      |
| 01:14:43   | So I might be able to tell by my voice, I'm super passionate about like being able to make my job        |
| 01:14:51   | easier and have everything in one nice little place that I can find. And to me, hook has just been       |
| 01:14:59   | one of those things that adding it to my system saved me so much time and so much like cognitive         |
| 01:15:05   | load and where things are because I don't have to think about it anymore. I just have to open up         |
| 01:15:11   | hook and go, Oh, look, there it is. Yeah. And URLs are everywhere. I mean, this kind of ties into my     |
| 01:15:16   | idea of contextual compute where you just go one place, you find everything, everything talks to         |
| 01:15:22   | everything else. And I started using hook mainly as a source for URL links to files and folders on       |
| 01:15:30   | my Mac. But it is an addictive app. And you start using it more and you start building your own          |
| 01:15:35   | hook directories. And just like you said earlier, it is a great way to keep everything together.         |
| 01:15:42   | I mean, it's not I think the mistake people make when they hear the description is like,                 |
| 01:15:46   | well, you know, bookmarks or URLs, I've got a way to do that already. But this isn't just                |
| 01:15:51   | bookmarks and URLs. This is everything on your Mac. I mean, this is this is like you said,               |
| 01:15:56   | bookmarking for everything. It's and there aren't very many apps that will let you take                  |
| 01:16:02   | a website and connect it to, you know, a document or a video that's on your local machine. You can't     |
| 01:16:11   | say like whenever I'm watching this video that I've downloaded or a video of a presentation that I'm     |
| 01:16:16   | doing and go, Oh, that reminds me of this one thing that I did, you know, or this one, you know,         |
| 01:16:22   | walk talk that I watched. Let me go find that really quick. Let me hook it to this pre this              |
| 01:16:26   | video that's on my local storage so that the next time I'm playing it, I can go, wait, what was that     |
| 01:16:32   | one thing? Oh yeah, let me just activate hook. There it is. I think that's the thing, isn't it?          |
| 01:16:36   | It's all about the interlinking between things. That's one of the reasons why I'm such a big             |
| 01:16:40   | fan of [[Obsidian]]. I have done a little playing with hook. But in my day job, I don't really need to       |
| 01:16:46   | link files together or link much of anything together. It's it's all interconnected in an IDE.           |
| 01:16:52   | So I've not had a huge chance to play with it from that perspective. But it's something I'm,             |
| 01:16:57   | I've started experimenting with more and more, you know, as me rather than working me. And I'm           |
| 01:17:03   | liking it. Yeah. And, you know, now [[Obsidian]] has URL integration, where you can easily save the          |
| 01:17:09   | URL to an [[Obsidian]] page. And it has hook integration. So you can hook your [[Obsidian]] page. So I just      |
| 01:17:15   | love the way all this stuff ties together. Me too. Explain to me a little bit more, Jay,                 |
| 01:17:21   | how this new integration is going to work to allow you to use it on mobile devices, because              |
| 01:17:25   | that's the one thing I'm sad about with hook is that like the URL links I have to files and folders      |
| 01:17:32   | only work on a Mac. They will not work on a mobile device. And, and how far down this rabbit hole        |
| 01:17:38   | can we go on our phones and iPads? So the big the upsetting news there is that it does only work         |
| 01:17:45   | with pinboard. So you do have to be a pinboard user, which I think for some people, they're like,        |
| 01:17:49   | okay, no big deal. I know that there are talks to expand that to some other applications out there       |
| 01:17:55   | that people like. But when you enable the hook integration with your pinboard account, which,            |
| 01:18:02   | you know, pinboard gives you this API token, you just have to put that into hook and it goes,            |
| 01:18:06   | okay, cool. Thanks. Anytime that you hook a web URL. So if I go to macsparkyy.com or relay.fm slash        |
| 01:18:15   | automators and I hook it, if I immediately go to pinboard, it's there. And if it was already there,      |
| 01:18:22   | then it, hey, it shows that it's already there. And it adds this tag, this from dot or from colon        |
| 01:18:27   | hook tag. So if I have a pinboard, you know, client on my iPhone, which I do, I have [[Pinstachio]],        |
| 01:18:36   | that's my pinboard client of choice for iOS, then I can just search for that from hook tag or,           |
| 01:18:45   | you know, most cases, I just have it, it's the last thing that was open or because I'm often             |
| 01:18:49   | just storing everything with hook. Now it's the top thing on that menu. So if you have files that        |
| 01:18:56   | you'd have URLs that you know, you've hooked, you can then go into your pinboard client on your          |
| 01:19:02   | mobile device and they're there. Okay, I really like this. I did not know about [[Pinstachio]]. I've        |
| 01:19:07   | been looking for a new pinboard application for, for, for iOS. And I think you've just solved my         |
| 01:19:13   | problem. And it's a clever name. Gotta give them. Yeah, bonus points for being clever.                   |
| 01:19:21   | Could you give us an example of how you're using hook in your work life? Obviously,                      |
| 01:19:24   | you don't have to use the company names or anything. But, but just for people out there who are          |
| 01:19:29   | still trying to wrap their head around it, maybe, you know, an example of how you're using it day        |
| 01:19:34   | to day would help, I think. So if I can, if we can talk inside baseball on a podcast,                    |
| 01:19:42   | we have the automators dock here that we've planned. I have that hooked to a lot of the                  |
| 01:19:50   | different websites that we've talked about. So I have it hooked to [[Bunch]]. I have it hooked to            |
| 01:19:55   | [[Alfred\|Alfred's]] website. I have it hooked to some of the videos that I have in the notes and a lot of           |
| 01:20:02   | the documentation and a lot of these links that we've, we've saved here, I have them all hooked.         |
| 01:20:08   | So in the future, if I'm talking with someone and maybe we're talking about Mac automation and           |
| 01:20:14   | they're like, oh, hey, you did that cool thing with [[Bunch]]. I can go, yeah, let me show you               |
| 01:20:18   | the website. And if I go to the [[Bunch]] website, because that's hooked to this, I could, if I              |
| 01:20:24   | just activate Hook really quick, I can go, oh, you know what, I was on Automator 75. You should,         |
| 01:20:30   | you should check that out. And then once the episode is live, because again, we're talking in            |
| 01:20:33   | the past, I will have that hooked as well. And I'll probably remove the show notes,                      |
| 01:20:39   | because I won't need that anymore. So then I can go to [[Bunch]] and I can say, oh, yeah,                    |
| 01:20:44   | it's really cool. You know what, I could talk about this for hours, but I already did that               |
| 01:20:51   | on the show. And here's a link to it. And then just copy that link and then send it off to him.          |
| 01:20:55   | Nice. Yeah, I use it both for MacSparky and Legal in much the same way. And like one thing              |
| 01:21:02   | that is always hooked is the [[Obsidian]] URL, because that's kind of the ground zero for a lot of this      |
| 01:21:07   | stuff. But it also can be an OmniFocus project, or it can be a website or, you know, or a folder,        |
| 01:21:13   | full of files. And to me, that's kind of the killer feature of it. And something I sorely miss           |
| 01:21:20   | when I'm on an iPad that I don't have my hook security blanket available to me.                          |
| 01:21:25   | But I'm not sure there's really any way to do that the way the operating system is structured.           |
| 01:21:30   | Yeah, I don't think so. But you mentioned OmniFocus and kind of those tools. That's                      |
| 01:21:35   | really where that kind of next step came in of, you know, you can hook an OmniFocus project,             |
| 01:21:42   | but you could hook it to a calendar event. Or in my goofy case, whenever I'm meeting up,                 |
| 01:21:48   | I guess one of the things I do with my job that I didn't mention before is I do a lot of work            |
| 01:21:53   | around diversity and tech and talking with organisations and how, you know, the company                  |
| 01:21:59   | that I work for can support those organisations and their initiatives. And so I'm always in              |
| 01:22:05   | meetings. I average, you know, I think 4.2 something zoom calls a day. So for me,                        |
| 01:22:16   | whenever I have a meeting pop up, I have all of the context around that meeting stored on the            |
| 01:22:22   | event itself via hook. And the cool thing is if you're using something like just this generic            |
| 01:22:28   | [[Apple Calendar\|Apple Calendars app]], it even supports repeating events. So I don't have to hook them every single        |
| 01:22:35   | time. I just have to hook it to one instance. And it's always there. So if I'm doing like our            |
| 01:22:41   | YouTube planning session, or if I'm meeting with a new customer or a new partner that we're working      |
| 01:22:47   | with, I can just activate hook, do a quick search for this whole workflow that I have set up for,        |
| 01:22:55   | you know, onboarding new organisations. And then everything starts connecting. And it's all there        |
| 01:23:01   | and it's all done. And I don't have to think about it. And again, I talk about like, we automate         |
| 01:23:06   | things so that we one, don't make mistakes. And two, we don't have to think so hard.                     |
| 01:23:12   | Yeah. And that's the thing, isn't it? It's about moving the thinking think once.                         |
| 01:23:17   | You know, David Allen said think once a week. That's totally valid. You probably have to think           |
| 01:23:22   | more than once a week. But if we can just think once for all of these different things that we           |
| 01:23:27   | need, then that makes life much more difficult, much less difficult. That's the words I'm looking        |
| 01:23:33   | for. Sorry, can you tell it's been a long Tuesday? So yes, I'm a big fan of preparing for these          |
| 01:23:40   | things once and then you're good for it every single time.                                               |
| 01:23:45   | Well, you know what, Jay Miller, we have been talking an hour and a half and we've got through           |
| 01:23:50   | half the outline. Did we make it through 50%, David? Are you sure? I thought it was closer               |
| 01:23:55   | to a third. I feel like Jay is going to be back on the Automators if we can convince him. So             |
| 01:24:01   | we're going to have to do that. Absolutely. Okay. So Jay, important question,                            |
| 01:24:05   | cookies or brownies? If we're bribing you to get you back, which do we need?                             |
| 01:24:10   | Are we talking about the European cookies? Because those are just crackers, aren't they?                 |
| 01:24:16   | No, no, no. We're talking shortbread with Belgian chocolate chunk cookies.                               |
| 01:24:23   | Let me just interrupt and say in the name of all that is holy, do not offend European chocolate          |
| 01:24:28   | to roast. That's all I'm going to say. Also, cookies over here are like chocolate chip.                  |
| 01:24:33   | It's biscuits that you're thinking of, which can be sweet or savory, depending. We also have             |
| 01:24:38   | crackers. You guys are so wrong about that, honestly. I mean, they're cookies. They're cookies,          |
| 01:24:43   | right? No, they're not. They're biscuits. And you have them in a cup of tea. Okay. So I'm bribing Jay.   |
| 01:24:51   | I'm on board with jumpers. Bring back the local California Automators,                                   |
| 01:24:57   | meetups, and you've got me there. That's all you got to do. Okay. We only matched one of those           |
| 01:25:02   | before and then there was a pandemic. But let's try that again next time if we can, David. I'm           |
| 01:25:08   | up for visiting you and meeting your dog finally. Yeah. So we should do that. That's what we'll do.      |
| 01:25:13   | We'll get, next time we'll get Rose in California. My couch is still waiting for you, Rose. We can       |
| 01:25:21   | set up a meet up and Jay can come up. Jay is, can I say what city you're in, Jay?                         |
| 01:25:26   | Yeah. Yeah. When I'm not traveling, I'm in San Diego.                                                    |
| 01:25:30   | Yeah. So he's literally like an hour from me. So we'll make it automators plus Jay. It'll be like,       |
| 01:25:36   | you know, it'll be like the band is there, but we got a guest singer and it'll be Jay Miller             |
| 01:25:42   | and it'll be amazing. So yeah, we'll do that again. And either way, in the meantime, Jay,                |
| 01:25:47   | where do folks find you on the internet? So I will say, as I mentioned before,                           |
| 01:25:52   | I do a few podcasts. So if you're into productivity or Hearthstone or asking people in the UK            |
| 01:26:01   | what's up with their decency laws and stuff, you can find all of those weird things that                 |
| 01:26:08   | I do over at kjaymiller.com, also on Twitter at kjaymiller. And yeah, like, I've been doing                |
| 01:26:15   | some more YouTube stuff. So there's links to all that on that website. So just go there.                 |
| 01:26:20   | Then hopefully there will be some new podcasts talking about productivity and stuff in the               |
| 01:26:24   | near future. Well, I really appreciate you coming on the show today, Jay. You've got me looking at       |
| 01:26:30   | a bunch of hypothetical question. Do if someone out there wants to download Bunch, do you go with        |
| 01:26:35   | the with the beta build or do you go with the stable build? Go with the beta build for now.              |
| 01:26:40   | It's got a lot of stuff in it. And I know that a lot, I know it is on a feature free. So there's         |
| 01:26:47   | going to be nothing new until the brand, like the big version that comes up right now. It's just         |
| 01:26:53   | fixing a lot of minor stuff and documenting those things. And I did mention before, I'm also the         |
| 01:27:00   | maintainer of the unofficial Bunch [[Alfred]] workflow, but it's the one that's on the website. So           |
| 01:27:09   | do you want to try that out and run into any problems with it? You know who you can yell at              |
| 01:27:14   | and I will be there to solve any problems, but it's a pretty simple system. And it's all using           |
| 01:27:20   | those X callback URLs that people are so excited about. Nice. And we've got a link to that plug          |
| 01:27:27   | in or workflow, sorry, for [[Alfred]] in the show notes as well for everybody as well. And it is             |
| 01:27:32   | indeed installed on my Mac and it has been since we did our show preparation, Jay. So thank you          |
| 01:27:36   | for that. That makes me feel good because you didn't yell at me. No, no, I'm ribbing you to come back.    |
| 01:27:43   | I do think while you're at it, Jay, though, you might as well just go ahead and make the hook            |
| 01:27:46   | [[Alfred]] integration to because I know you have tons of free time. So just go ahead and whip that up.      |
| 01:27:52   | Brett's made the CLI. Unfortunately, the hook, the way that hook works, the X callback URLs              |
| 01:28:00   | aren't quite there yet, but I have it on good faith that they're working on that as well. So             |
| 01:28:06   | once they get those going, then definitely. But until then, I'll just keep making videos about           |
| 01:28:12   | it and then showing people all the little workarounds that I've figured out over time.                   |
| 01:28:17   | Excellent. Excellent. Once again, thanks to Forward Networks, Smile Software's, TextExpander,            |
| 01:28:24   | and sync up the OneDrive podcast for sponsoring today's show. We are the Automators. You can             |
| 01:28:30   | find us over at automators.fm. You can also find us at relay.fm/automators. And before we          |
| 01:28:37   | leave, I just wanted to point out another show on Relay FM that there's a good chance you'll like        |
| 01:28:41   | called Pictorial because we all love art in some form or another. And learning the history behind        |
| 01:28:47   | the most influential art or art behind video games doesn't just belong to expensive classrooms or        |
| 01:28:52   | museums. So join hosts Quinn Rose and Betty Chin as they talk about the most interesting parts of art    |
| 01:28:58   | history. Neither of them went to art school and they're breaking down the lead ism surrounding           |
| 01:29:04   | beautiful art stories by sharing what they're learning about art every other Tuesday. Quinn              |
| 01:29:09   | is a podcast producer who is passionate about recognising the artistry of both low and high art          |
| 01:29:14   | and Betty is a building design manager who's also spent years guiding tours at the art gallery of        |
| 01:29:19   | Ontario. Personally, I've always had interest in art and every time I go to museums, I love reading      |
| 01:29:25   | about the art as I look at it. This show just steps that up a level. I am a subscriber. If you're        |
| 01:29:32   | interested in learning more about art with them, why not start with episode 26 on flag design in         |
| 01:29:38   | North America or maybe episode 15 on the most famous stolen artifacts in the British Museum.             |
| 01:29:44   | You can find pictorial to listen and learn yourself at relay.fm slash pictorial or search for            |
| 01:29:51   | pictorial wherever you get your podcasts. Once again, we're the automators and we'll see you next time.  |
| 01:29:57   | Thanks for listening.                                                                                    |
