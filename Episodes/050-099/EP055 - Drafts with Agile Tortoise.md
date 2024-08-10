---
status: "complete"
fc-date:
  year: 2020
  month: 07
  day: 31
fc-category: "podcast"
podcast: "Automators"
published: 2020-07-31
duration: 4862
formattedduration: "01:21:02"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Greg Pierce"]
notetype: "episode"
showpage: "http://relay.fm/automators/55"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators055.mp3"
episode: 55
title: "55: Drafts with Agile Tortoise"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary are joined by Greg Pierce of Agile Tortoise to talk about Drafts and how they're using it and text-based automations to improve their lives with everything from dinner alerts to complex project templates.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Greg Pierce]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 055 Discussion](https://talk.automators.fm/t/automators-55-drafts-with-agile-tortoise/7852)



# Sponsors
- [[Mint Mobile (Sponsor)|Mint Mobile]] - Cut your monthly wireless bill.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.

# Show Notes
- [Google Maps URL Scheme for iOS | Maps URLs | Google Developers](https://developers.google.com/maps/documentation/urls/ios-urlscheme)
- [Beta Program - Drafts User Guide](https://docs.getdrafts.com/beta/)
- [URL Schemes - Drafts User Guide](https://docs.getdrafts.com/docs/automation/urlschemes#open)
- [Drafts 21 Released - Better undo and advanced HTML Previews - News & Updates - Drafts Community](https://forums.getdrafts.com/t/drafts-21-released-better-undo-and-advanced-html-previews/7706)
- [Matt Gemmell's Actions | Drafts Action Directory](https://actions.getdrafts.com/search?utf8=%E2%9C%93&q=%40mattgemmell)
- [Plain Text Preview | Drafts Action Directory](https://actions.getdrafts.com/a/1Vn)
- [Creating Custom Preview templates - Drafts for Mac - Drafts Community](https://forums.getdrafts.com/t/preview-templates/4118/4?u=rosemaryorchard)
- [Preview in Marked | Drafts Action Directory](https://actions.getdrafts.com/a/11f)
- [Toggle Shopping Mode | Drafts Action Directory](https://actions.getdrafts.com/a/1OR)
- [OF TaskPaper | Drafts Action Directory](https://actions.getdrafts.com/g/1F6)
- [Message Action Step - Drafts User Guide](https://docs.getdrafts.com/docs/actions/steps/system#message)
- [Save Note and Send Tasks to OmniFocus | Drafts Action Directory](https://actions.getdrafts.com/a/1aL)
- [PushCut - Help & Support - Automation Server](https://www.pushcut.io/support_automation_server.html)

# Transcription
  
| Time Index | Transcription                                                                                                |
| :--------- | :----------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello and welcome to Automators. My name is Rosemary Orchard and I'm joined today by David                   |
| 00:07      | Sparks. Hello, David. How are you? Hello, Rosemary Orchard. Are you ready to automate today?                 |
| 00:12      | Oh, yeah. And today's going to be a good episode, I think.                                                   |
| 00:15      | Yeah. We want to talk about [[Drafts]]. We covered [[Drafts]] last year, but it's changed so much that,              |
| 00:22      | you know, that crazy guy that makes the app just keeps adding features to it. And so we thought,             |
| 00:28      | well, let's go back and talk about it because I know I'm using it more. I know you are too. But              |
| 00:33      | speaking of that crazy guy, we should invite him on. Hey, Greg, are you available?                           |
| 00:38      | Yeah, sure. I can spice out an hour of my time for you all.                                                  |
| 00:42      | So welcome to the show, Greg Pierce. Greg is the developer of [[Drafts]]. And Greg is                            |
| 00:50      | a colleague and a friend. And we talk frequently with all the great stuff you're doing with your             |
| 00:54      | app. And like I was saying earlier, it's just time to go back to [[Drafts]]. You've really done                  |
| 00:59      | a great job in the last year or two of adding a lot of automator friendly features.                          |
| 01:05      | Thanks. I appreciate that. I try. You know, a big part of what [[Drafts]] is, is listening to the                |
| 01:10      | community and what they want in the app. And, you know, I'm always trying to implement those                 |
| 01:14      | things. So a lot of crazy automators out there using my app. So there's always a lot of great                |
| 01:20      | ideas. It's definitely a favourite among our audience. I'll tell you that. Oh, yeah. But                     |
| 01:25      | before we start, Greg, just share a little bit about your background and, you know,                          |
| 01:29      | what got you to the point to make this automation tool for us? Sure. Well, I mean, I started my own          |
| 01:36      | software business about 15 years ago now, just kind of went out consulting and doing mostly                  |
| 01:44      | web development work at the time. And when the app store came around, I got involved in that.                |
| 01:49      | And I've had a series of apps, but over time [[Drafts]] is the one that really took off and                      |
| 01:55      | is what my focus is these days. And I think it's become something that's more of a platform for              |
| 02:01      | text than a simple to describe app. But it's something that keeps me busy and has a lot of                   |
| 02:10      | opportunities to grow. So I've just stuck with it and rode that train. Greg, also, you know,                 |
| 02:16      | since you're on Automators, I feel like we have to get a moment of automation lore out,                      |
| 02:21      | because I know you and I believe Marco Arment were involved kind of with the birth of the URL                |
| 02:26      | callback. Sure. Could you tell me that story a little bit? Because I think the listeners would               |
| 02:31      | love to hear about how that happened. So many of us use them. Right. Well, my first reasonably               |
| 02:37      | successful app on the app store was a dictionary app called [[Terminology]]. And this was in the early           |
| 02:43      | days of the app store before we had a built in system dictionary and a lot of the multitasking               |
| 02:51      | features and stuff that exist now. And I was looking for a way to make my dictionary more                    |
| 02:58      | useful by tying into other apps and allowing you to look upwards in the app. And I talked to                 |
| 03:06      | Marco Arment about it, who at the time was doing [[Instapaper]]. And he also had some dictionary                 |
| 03:12      | features he built in, but was interested in integrating with other things. So we talked                      |
| 03:17      | about it and we kind of built a system we agreed on back and forth where you could select a word             |
| 03:21      | in Instapaper. And using a [[URL Schemes\|URL scheme]] in the background, it would open [[Terminology]] directly                  |
| 03:27      | to that word. So you could read the definition. And then in addition to that, we put a callback              |
| 03:33      | scheme in it so that he could provide a URL to [[Terminology]] that says, well, when you're done                 |
| 03:39      | over there, you can come back to [[Instapaper]] using this URL. So I could pop a button up on the screen         |
| 03:45      | in [[Terminology]]. You could read your entry or definition. And when you were done, click this                  |
| 03:52      | back button that brought you back over to [[Instapaper]]. Now, that doesn't sound all that cool                  |
| 03:59      | nowadays with a lot of the features that have since been added to iOS, like the little back button           |
| 04:04      | up in the upper left to get to your last app. That didn't used to exist. The multitasking                    |
| 04:10      | trade didn't used to exist. So there really wasn't a good way to get back to your last app.                  |
| 04:14      | And that was how we got started is just trying to simplify some of those sort of things.                     |
| 04:20      | And as we went back and forth, we're like, well, let's try to get more people to adopt this. So              |
| 04:25      | we hacked out a spec. I actually wrote it, but we both contributed to it and had a few other                 |
| 04:31      | people review it. And that's what became [[x-callback-url]], which was just a way of                             |
| 04:36      | standardising how those URLs could be constructed to make it easier for more apps to adopt them              |
| 04:42      | and to work together to document what they were capable of doing through the URLs.                           |
| 04:48      | Did you have any idea when you made that how big that was going to get?                                      |
| 04:52      | I did not. And honestly, I've said this number of times, but I'm one of the poorest advocates                |
| 04:58      | of my own spec in the sense that I don't think it ever should have had to exist.                             |
| 05:03      | I agree with that. And I honestly thought it was something that we would just,                               |
| 05:07      | it was a hack we put in place for a year or maybe two years until Apple provided a better way for            |
| 05:13      | apps to work together. And that just didn't come for year after year, new iOS versions                       |
| 05:19      | were coming out. And there was no, no solution to that problem. So more and more people relied               |
| 05:25      | on the [[URL Schemes]] and it grew. Yeah, but it is, it is kind of interesting when you think about it,          |
| 05:30      | because, because Apple never really got on the horse until many years later, you built basically             |
| 05:37      | the backbone of what became [[Drafts]]. And also you built the backbone of what became [[Workflow]],                 |
| 05:43      | which would became [[Shortcuts]], which is one of the most frequent topics of automation on iOS.                 |
| 05:49      | So I mean, I just feel like you guys did something special that day.                                         |
| 05:53      | I'm proud of what we accomplished. You know, it wasn't, it was within several years of putting               |
| 05:58      | out the spec that it was implemented in apps from Google, you know, [[Google Maps]] supports it,                  |
| 06:05      | [[Gmail]], some of the other apps, mic, some of Microsoft's apps, which really came through                      |
| 06:10      | acquisition when they bought the [[Outlook]] app and stuff. But it's neat to have,                               |
| 06:16      | have that technology adopted so broadly and now supported in something that's built into the OS.             |
| 06:22      | I did not realise that [[Google Maps]] supported this. This is amazing.                                          |
| 06:26      | Yeah. And let's just pray that you never have to invent something like this again.                           |
| 06:33      | Well, you know, you, you make do sometimes you use the tools you have and you try and I think                |
| 06:39      | that's consistent with the automated philosophy, right? You try to make the best of what you have            |
| 06:44      | and make it work for you. And that's what we did. Chewing gum and rubber bands are perfectly fine            |
| 06:50      | if that's what you have available to you. That's right. There's a lot of duct tape in my life                |
| 06:55      | and I'm not ashamed to admit it. So if it works, flip with it. You and me both, sister. You and me           |
| 07:01      | both. So Greg, how did you get started with automation? I mean, really, I am a full-time                     |
| 07:07      | programmer now, but I kind of got into programming through automation. I was not a comp-sci major.          |
| 07:14      | I didn't aspire to be a programmer per se, but I kind of came of age and was working my early                |
| 07:21      | jobs in the late 80s, early 90s at a time when computers were still relatively new in a lot of               |
| 07:27      | workplaces and the level of competence with them was not super high among a lot of the staff.                |
| 07:36      | And I was working mostly at small organisations and as I got in there, I was the one who was                 |
| 07:43      | the best at the computers. And I was always looking for ways to simplify my life, whether it was             |
| 07:50      | taking a clerical task that took an hour and figuring out a way to just press a button or                    |
| 07:56      | enter a command. Some of the first things I was automating were like word perfect macros                     |
| 08:02      | and word perfect for DOS. I was writing database macros in like [[R-Base]] and things like that.                 |
| 08:09      | And I was crunching up text. You know, there was a lot of things that, you know, you had to do               |
| 08:14      | database dumps to get mailing labels or whatever else and you needed to manipulate that text and             |
| 08:21      | clean it up. And I was just trying to build tools for that. And I was also doing side projects.              |
| 08:27      | I started publishing a print magazine in the early 90s with a friend and I had to develop a lot of           |
| 08:35      | tools and learn things to be able to get that cranked out. And eventually I brought that to the              |
| 08:40      | web in the mid 90s when the web came out. And, you know, it was a situation where the very first             |
| 08:46      | version of that website, I hand edited text files, you know, [[HTML]] files and uploaded them to a server.       |
| 08:52      | And, but it was, we were publishing a publication. We had hundreds of album and book reviews and             |
| 08:59      | interviews and things. And it was not really practical to manage as a series of text files.                  |
| 09:04      | And I needed to learn ways to automate building that site. And so I got into scripting and                   |
| 09:11      | those sorts of things and it went from there. Yeah, it is funny. Just so often this is just                  |
| 09:17      | born out of necessity. But we're so glad that you, you know, took the next step into programming             |
| 09:23      | because it has brought us some great automation tools for those of us on the other end.                      |
| 09:28      | Yeah, it was a process. I had started the job where I was just doing that to make                            |
| 09:36      | clerical life easier. And by the time I stopped working at that place 10 years later, I was a                |
| 09:42      | full time programmer there because I just kept finding more things to automate. And then they                |
| 09:46      | said, well, you made it better in that department. Can you go look over what they're doing in sales          |
| 09:51      | and see if you can help them do it better? You know, the curse of being good at something,                   |
| 09:57      | you then get asked to be good at something somewhere else as well.                                           |
| 10:00      | Right. So it was part workflow consultant and part, you know, actually developing the tools                  |
| 10:06      | where it was possible to do so and just got more and more into that.                                         |
| 10:11      | I feel like so often the root cause of good automation is inherent laziness.                                 |
| 10:20      | So many of us, like we look at things we do and we're like, oh, come on, again, you know,                    |
| 10:25      | oh, and then that leads down the road of automation.                                                         |
| 10:30      | Yeah, actually, you know, efficiency. Everybody wants to get more done. Well, not everybody, but             |
| 10:37      | a lot of people want to get more done in less time. And anytime you find one of those things,                |
| 10:42      | you're doing twice or 10 times. And, you know, I think all the automators, listeners struggle                |
| 10:49      | with what that breaking point is when it's when it's repetitive enough to require automation or              |
| 10:55      | to benefit from expending the effort to automate it. But, you know, so many things, you just keep            |
| 11:02      | building these little tools and suddenly you've taken your productivity level to an exponential              |
| 11:09      | new level. Yeah. And I may be even a more generous way than saying laziness is like,                         |
| 11:14      | maybe you're so motivated by wanting to do something that all the little stuff                               |
| 11:18      | really annoys you and you really have to get that automated. And that's kind of what led                     |
| 11:24      | to [[Drafts]] in a lot of ways. So, you know, because you had this history with the [[URL Schemes\|URL scheme]].                  |
| 11:29      | And I told the story on this show, I think the last time we did the episode, but I was in the                |
| 11:33      | middle of a trial the day you launched [[Drafts]] and I opened it and immediately got it. Like,                  |
| 11:38      | here's an app that immediately captures words and then lets me process them through essentially              |
| 11:45      | a URL based automation immediately. And like that day, the app went in my dock and I don't think it's        |
| 11:53      | ever been out of my dock since then. Well, I was stumbling over a lot of things on my iPhone,                |
| 12:00      | just wanting to jot down ideas. And I found myself having to go through so many steps to open the            |
| 12:05      | right app and find the right node or create one or give it a name, find a folder. And I just didn't          |
| 12:11      | want to stumble through those things. I wanted to take my phone out, jot down my idea and put                |
| 12:16      | my phone back in my pocket. And I needed a place to do that. And that was this original scratchpad           |
| 12:21      | concept of [[Drafts]]. It's just make it simple to open it up and not have to fumble through all those           |
| 12:27      | additional steps. Yeah, that's something that I've definitely had a lot of issues with, especially           |
| 12:32      | to start with. Heck, I had the original iPod touch. I didn't get the first gen iPhone, but I had the         |
| 12:36      | iPod touch and not having copy and paste was frustrating, to say the least. And it took a                    |
| 12:42      | while before that came around. And I used [[Drafts]] a lot in the beginning. And I don't remember if I           |
| 12:48      | had the very first version or maybe the second version or something. But I've definitely been                |
| 12:52      | using [[Drafts]] for a very long time, just for that very reason. I often don't know what I'm going to           |
| 12:57      | do with text too. If I have some sort of idea or task, I want to remember I don't necessarily know           |
| 13:03      | upfront exactly what I want to do with it, which was the other big part of [[Drafts]] is get it out of           |
| 13:07      | your head, get it into your capture system and be able to do something with it later. Because                |
| 13:13      | maybe it's going to become a text message. Maybe it's going to become an email or a blog post or             |
| 13:18      | a tweet. And you don't know when you start typing that text. Yeah. Well, I mean, it's crazy.                 |
| 13:25      | Not only did you make this app, but you have evolved it over the years. I feel like [[Drafts]] is                |
| 13:32      | one of the poster children for subscription-based applications. A lot of developers have moved               |
| 13:39      | to subscription over the last few years. You yourself included with [[Drafts]]. Although you have                |
| 13:44      | a very generous model, you don't have to subscribe to use [[Drafts]]. But the way the app has evolved            |
| 13:52      | since you went on subscription model for me personally has completely changed a bunch of my                  |
| 13:59      | workflows. I mean, you have secretly turned [[Drafts]] from an automation text processing app into a             |
| 14:05      | notes app. It snuck up on me. And I know that you were planning this and you talked about it                 |
| 14:12      | publicly. But between getting it on the Mac and adding a bunch of the automation and storage tools           |
| 14:20      | you've put on, the tagging support and so many other things, one day I woke up and was like,                 |
| 14:27      | wow, [[Drafts]] is not what I thought it was for all these years. It's so much more now.                         |
| 14:32      | Yeah. Well, I really sat down and now it's probably three or four years ago and decided,                     |
| 14:38      | well, what am I going to do moving forward? And the [[App Store]] model for a business person like               |
| 14:42      | me up to that time had been created app, put it out there, sell it, and then move on to the next             |
| 14:47      | app. You've got to come up with a new idea and stuff. But I think everyone was getting fatigued              |
| 14:52      | with the new app every six months and wanting to have more reliable tools that were maintained               |
| 14:59      | and suitable for professional use stuff you could rely on. And I think I realised I had an app like          |
| 15:06      | that in [[Drafts]]. But under the current model where I sold it directly to people, I could not sustain          |
| 15:13      | a business building that app. So I said, well, let's just give it a try. Let's convert over.                 |
| 15:20      | Let's see if there's enough support in this community for the subscription base to allow                     |
| 15:25      | me to work on this full time and to make this a vibrant, well-developed tool that keeps up                   |
| 15:31      | with the latest OS developments and adds new features all the time. And since making that                    |
| 15:37      | transition a little more than two years ago, it's been great. The app has moved forward at an                |
| 15:43      | incredible pace. And I thank the support of the users for making that possible.                              |
| 15:50      | Well, it's one of those apps. For me, I look at it and I look at what's happened since you've                |
| 15:55      | changed it to a subscription model. And there's just so many new features. And it feels like                 |
| 15:59      | every time I open my iPhone, there's a new beta. Now, that's a slight exaggeration because I do              |
| 16:04      | open my iPhone more than once a day. And you did take a little bit of a break after [[WWDC]],                    |
| 16:09      | but I was just checking the beta page earlier today and there's guidance and warnings and                    |
| 16:15      | new betas available, which of course I am now part of. But it's one of those where I really                  |
| 16:21      | feel like I'm more than getting my money's worth out of it, which is always very nice.                       |
| 16:24      | And hopefully it's going to continue to work that way for everybody.                                         |
| 16:28      | I hope so. It's not for every app. I mean, clearly some apps, like maybe a timer app,                        |
| 16:33      | you don't need new features every month. But something that's so crucial to your workflow,                   |
| 16:38      | like a note-taking app, there's just a lot of opportunities to grow. There's always                          |
| 16:41      | new services for [[Drafts]] to integrate with, new features to streamline and stuff. So                          |
| 16:47      | I don't think there's any end in sight to how I can keep improving the app.                                  |
| 16:52      | Well, if you need ideas or more, a list for your to-do list, just want you to just make a public             |
| 16:57      | one and me and Rose will just fill it up for you. I mean, there's a forum post, right? I'm pretty            |
| 17:02      | certain I've posted on that a couple of times. Yeah, I've asked for feedback and gotten plenty               |
| 17:08      | of it in the past. I have a long list already. This episode of The Automators is brought to                  |
| 17:16      | you by Mint Mobile. Go to mintmobile.com/automators and cut your wireless bill to $15 a                      |
| 17:22      | month. Mint Mobile can cut your wireless bill with their futuristic approach to wireless.                    |
| 17:29      | If you're still using one of the big wireless providers this year, have you asked yourself                   |
| 17:33      | what you're paying for? Between expensive retail stores, inflated prices and hidden fees, there's            |
| 17:39      | ample opportunity to take advantage of paying customers like you. This is where Mint Mobile                  |
| 17:44      | comes in. Mint Mobile provides the same premium network coverage you're used to, but at a fraction           |
| 17:50      | of the cost because everything is online. Mint Mobile saves on retail locations and overhead,                |
| 17:56      | then passes those savings directly to you, making it easy to cut your wireless bill down to just             |
| 18:01      | 15 bucks a month. Every plan comes with unlimited nationwide talk and text, and you can stop paying          |
| 18:08      | for unlimited data you'll never use. Just choose between plans with three, eight, or 12 gigabytes            |
| 18:14      | of 4G LTE data. It's ridiculously easy to set up. You go and activate, you plug your card into               |
| 18:21      | your phone, and you're off to the races. You can cut your wireless bill from hundreds of dollars             |
| 18:27      | to 15 bucks. You can use your own phone with any Mint Mobile plan and keep your same phone number            |
| 18:33      | along with all your existing contacts. Just ditch your old wireless bill and start saving with Mint          |
| 18:38      | Mobile. To get your new wireless plan for just 15 bucks a month and get the plan shipped to your             |
| 18:44      | door for free, go to mintmobile.com/automators. That's mintmobile.com/automators.                            |
| 18:52      | Go there now and cut your wireless bill to 15 bucks a month at mintmobile/automators,                        |
| 18:57      | and our thanks to Mint Mobile for their support of the automators and all of Relay FM.                       |
| 19:03      | All right, so we've talked a little about the history of [[Drafts]] and where it is now.                         |
| 19:08      | I thought it'd be fun for Rose and I to share some of our favourite things about it,                         |
| 19:13      | and we've got kind of just a little list here, and we're going to get into our actual workflows              |
| 19:17      | in a minute, but let's start with some of the cool stuff. One, and this is kind of basic stuff,              |
| 19:23      | but it's just so well implemented, is I love the unique identifier per draft,                                |
| 19:30      | because as an automator, that opens up so many options. One of the tools I was using before                  |
| 19:35      | I went all in with [[Drafts]] for my notes storage was [[Apple Notes]], and they didn't have, I don't know why,      |
| 19:41      | they don't have a unique identifier system built into [[Apple Notes]]. So the way I would do it is I             |
| 19:48      | would go into [[1Password]] and generate a one-time password and put it at the bottom of an Apple note.          |
| 19:55      | So I basically had my own [[UUID]] system, and then I could do a search in shortcuts for that                    |
| 20:01      | password. I've got air quotes up right now to find the specific note, because otherwise you had to           |
| 20:06      | like search, and if you like, if it was like a client name, what if I had four notes with that               |
| 20:10      | client's name in it, you know, and you just never knew if it was going to land in the right spot.            |
| 20:15      | And you put that in from the beginning, you make it very easy for people to access,                          |
| 20:22      | you know, and you built specific shortcuts actions for unique identifiers, but at the same time              |
| 20:29      | you have the unique identifier system where you can right-click on a note in the [[Drafts]] Mac app,             |
| 20:37      | and it has an option to copy the [[UUID]]. And I've built a ton of [[Keyboard Maestro]] scripts as well,             |
| 20:44      | which use the [[x-callback-url\|URL callback]]. Maybe you can tell me I'm doing it wrong, but that works for me on               |
| 20:49      | [[Keyboard Maestro]]. So I also have a bunch for [[Keyboard Maestro]]. So like when someone sends me                 |
| 20:54      | something I want to add to the running feedback for the Automator's podcast,                                 |
| 20:58      | if I'm on my iPhone or iPad, I can select the text and run a shortcut that takes the selected text           |
| 21:05      | and pastes it to the bottom of the draft with that [[UUID]]. And if I'm on my Mac, I run a [[Keyboard Maestro]]              |
| 21:12      | script that takes the selected text and then opens [[Drafts]] via URL, you know, hit some                |
| 21:19      | keyboard buttons to go to the bottom of the draft and places. And I know with the shortcuts,                 |
| 21:25      | you have prepend and append, but with [[Keyboard Maestro]], you kind of have to fake it.                         |
| 21:29      | At least I do with just keystrokes. And I get the cursor to the bottom of the draft and drop it in,          |
| 21:37      | but it's all based on that [[UUID]]. And no matter what you're doing as a listener in your life,                 |
| 21:44      | if you've got running notes for a client project, or if you're working on your big dream that you            |
| 21:50      | want to make someday, you can hit that text into that unique identifier-based draft anytime you              |
| 21:58      | want. And it's a system that Greg has done thoughtfully. I'm way too complimentary of you today,             |
| 22:04      | Greg. I sound like I'm sucking up. But as someone who uses this stuff every day, I'm                         |
| 22:10      | very appreciative of the effort you put into making a system that works with that stuff.                     |
| 22:15      | Well, and exposing a permalink URL for any piece of content like a draft in an app is pretty                 |
| 22:21      | important to be able to crosslink and work between different apps in any way, shape, or form.                |
| 22:26      | The fact that you can copy a link to a draft makes it real easy to stick that link into a task               |
| 22:33      | manager, say, where you have a note that's related and has elaboration on something that you need            |
| 22:39      | to link in your task manager. Those things are important to keep a system going, you know,                   |
| 22:46      | in and out of the app. Yeah. Well, I mean, it's just, it's a great example. I mean,                          |
| 22:50      | another great way I use UIDs, and this was inspired by Rosemary, is I rant constantly about how much         |
| 22:58      | I hate the shortcuts notes field. It's too small. The text is too small. You can't, you have to scroll       |
| 23:04      | within it. And every time I see the gang from shortcuts back when we used to travel, I would                 |
| 23:11      | like corner them on this, say, guys, come on, fix the notes, fix the text field. And, and Rose,              |
| 23:17      | you know, because she's so smart, just said, well, I don't even do that anymore. I just put                  |
| 23:21      | them in [[Drafts]] and use a, I'm assuming you use a [[UUID]] link, Rose, to pull the draft in. And so just           |
| 23:27      | like a couple months ago, I started doing that. Now, like a lot of my shortcuts, text fields,                |
| 23:33      | or like [[OmniFocus]] scripts and other script stuff I do, they're just all permanently stored                   |
| 23:37      | in [[Drafts]] where I can edit them there. And then the shortcuts will call it whenever I need,                  |
| 23:42      | although I'm having some beta issues with that right now, Rose. We'll have to talk about that                |
| 23:45      | sometime. Oh, well, we'll get back to that in a future episode. Yeah. Hopefully not my issues.               |
| 23:51      | No, I know where the culprit is. It's a long story and a total diversion from this show,                     |
| 23:56      | but we'll, we'll get there. Trust me. That's, that's beta life for you, isn't it? It doesn't                 |
| 24:01      | matter what beta you run, something at some point will break. And you just have to figure out who's          |
| 24:05      | the problem and tell people about it, but also sometimes even if it's not somebody's problem.                |
| 24:10      | So for example, in this case, Greg, if it's not necessarily your problem, it's probably                      |
| 24:13      | still a good idea for people to give you a heads up that this iOS version breaks this thing so               |
| 24:18      | that you actually, you know, have heard about it for more than one person instead of getting an              |
| 24:23      | angry email in a couple of months going, this thing hasn't worked.                                           |
| 24:27      | Anyway, unique identifiers thumbs up. Yeah, definitely. I use them all the time and it's                     |
| 24:33      | great and it enables so many of my other automations, which as you said, David,                              |
| 24:38      | we're going to get to later in the show. One of the other things that I really like,                         |
| 24:41      | which you've recently enhanced support for is the advanced [[HTML]] preview.                                     |
| 24:46      | So you can do this preview of things in [[Drafts]] where it will just like, for example, render                  |
| 24:51      | markdown so that you can see it as pretty text, which is something I use a lot of the time when              |
| 24:56      | I'm writing, when I've got image links in there and I just want to make sure everything looks                |
| 24:59      | right. And I've got, you know, alt text for my images and things like that. But the advanced                 |
| 25:04      | [[HTML]] preview with the added, well, awesomeness, I'm just going to term it so that you can add                |
| 25:11      | things like the [[Airtable]] JS so that you can directly integrate [[Airtable]] forms and things                   |
| 25:17      | like that. Unsurprisingly, I love [[Airtable]]. I love [[Drafts]]. I love the two of them together.                 |
| 25:23      | And this has been great for me. I've been doing a lot of playing with that. It took me a little              |
| 25:27      | while to wrap my head around it and be like, how can I use this in ways that I'm not already using           |
| 25:31      | [[Airtable]]? Because I wrote my own [[Airtable]] support for [[Drafts]], of course. But this is much easier           |
| 25:38      | for people to use, which is great. Right. I mean, at the basic level, the actions in [[Drafts]]                  |
| 25:44      | incorporate [[JavaScript]] and they use [[JavaScript]] core, which is a basic version of the core language           |
| 25:49      | that's provided by Apple on all the platforms. And it's the same [[JavaScript]] engine that runs in              |
| 25:54      | [[Safari]] and stuff, but it doesn't have all the features you have when running in a browser.                   |
| 25:59      | You know, a lot of [[JavaScript]] libraries are written to rely on things like the document                      |
| 26:05      | object model and the [[Ajax]] tools that are added to the [[JavaScript]] language in the context of a                |
| 26:12      | browser. But by using the [[HTML]] preview and adding a few features to get data in and out of those             |
| 26:17      | previews, it lets you execute those kind of [[JavaScript]] libraries like the [[Airtable]] API and                  |
| 26:24      | stuff within [[Drafts]] by using the browser preview window. And it also lets you do stuff like build            |
| 26:31      | completely custom UIs for an action in [[HTML]] and be able to pass data back, which there's a few               |
| 26:40      | examples people have put out there. Matt Gemmell, in particular, the author and former programmer,            |
| 26:45      | has done some really neat stuff with writing custom UI tools on these new [[HTML]] previews that                 |
| 26:51      | are more flexible than you can do with the limited UI scripting in the base [[Drafts]] actions. So,              |
| 26:59      | it's pretty cool and pretty powerful for people with some basic [[HTML]] and [[JavaScript]] experience.              |
| 27:05      | Yeah, I would say if you're into [[Drafts]], I would search out Matt Gamble's various action                     |
| 27:13      | contributions because he's built like interactive actions that some of them that you download                |
| 27:20      | multiples of Matt's actions and they work together. And it almost is like an app. It's like a sub app        |
| 27:27      | from within [[Drafts]]. Honestly, for me, it's almost more than I need. I feel like it got too fiddly            |
| 27:33      | as I was playing with his stuff. But man, it's powerful. It is an advanced feature. It's not                 |
| 27:40      | for everybody, but there's certainly sorts of prompts you might want to create in a workflow                 |
| 27:46      | that this gives you a tremendous amount of flexibility. If you don't like the way the                        |
| 27:51      | text edit field looks, you could make it bigger or smaller or have it suit your needs in this kind           |
| 27:57      | of a thing and not be limited to what is provided by [[Drafts]] or shortcuts. And that even ties into            |
| 28:05      | one of the [[Drafts]] I'm going to share later because I considered it for that and ultimately rejected      |
| 28:11      | it. But you know, I was thinking while Greg was talking, Rose, we've been searching for the proper           |
| 28:17      | drinking game word for the Automators podcast, or at least I have. Okay. I think I found it.                 |
| 28:22      | It's not [[Brett Terpstra]]. No, I think it's [[JavaScript]]. I mean, because at this point,                 |
| 28:29      | [[JavaScript]] is such the such the automation tool across platforms for all the reasons we've talked            |
| 28:34      | about it over the last year. It seems like that's the thing you got to do if you want to be an               |
| 28:40      | automator. I mean, if you want to take it to the next level, you just got to pick up some [[JavaScript]]         |
| 28:44      | tools or skills. That might be a little dangerous as a drinking game now. Yeah, I think it could be.         |
| 28:51      | I would like to warn people against alcohol poisoning. It's serious. So consider water or                    |
| 28:55      | juice. Well, you don't have to drink alcohol. This is very true. There we go. You can also eat               |
| 29:00      | chocolate. I am not responsible if you end up obese. But it's good fun. I love chocolate.                    |
| 29:04      | Now, seltzer water drinking game, though, is more dangerous for a podcaster than alcohol, just to            |
| 29:10      | say. So another one that I really like, and this one is more basic than Rose's, but just                      |
| 29:18      | the implementation on the Mac. You did a great job of getting this app on the Mac. And for me,               |
| 29:22      | that's kind of the gating issue. The reason why I never could think of [[Drafts]] as a notes app,                |
| 29:27      | because I work on the Mac more hours a day than I work on iOS. And I always loved when I was using           |
| 29:34      | [[Drafts]], the thought of saying, wouldn't it be great if I can just go to my Mac and finish this?              |
| 29:38      | And you did that. But you didn't just, well, you didn't just make a basic version. You actually              |
| 29:44      | included the actions, the JavaScript support. Just, you know, great job getting the feature set              |
| 29:51      | and the parity over to the extent that we can use our cool automations on all platforms.                     |
| 29:57      | Thanks. It was a lot of work, and it was a multi-year transition in process of                               |
| 30:01      | planning to get there. But I'm pretty happy with the result. And I really do what I sat down to              |
| 30:07      | make [[Drafts]] my full-time job and to move to a subscription model, that that was a piece that                 |
| 30:12      | really would need to be in place. It was my most requested, you know,                                        |
| 30:18      | significant feature. And I really do that that would be key to making this a platform                        |
| 30:25      | that people could use more broadly. So I'm glad we've gotten to that point.                                  |
| 30:29      | You know, because you evolve in your own thinking, like for me,                                              |
| 30:32      | thinking back when I suddenly realised, oh, wait, [[Apple Notes]], which, you know,                              |
| 30:37      | is a good app, but it isn't the best app for what I need. How did I get in the spot where I had              |
| 30:43      | invested so much in [[Apple Notes]]? And it was the multi-platform. You know, it was because it was              |
| 30:47      | there. If I wrote on one device, it was on all the devices. And now the draft is on all it.                  |
| 30:53      | It puts you in contention, which is, I think, probably what you were looking for.                            |
| 30:57      | Yeah. It's an interesting time with the transition of the platforms and the new technologies coming          |
| 31:04      | to the Mac, like [[Mac Catalyst\|Catalyst]] and all. Had I started this process another year or two later, maybe               |
| 31:11      | that would have been the path I went down. But I'm pretty happy to have a native [[AppKit]]                      |
| 31:15      | traditional Mac app fully formed as well, because I think it gives a better overall                          |
| 31:21      | user experience on the Mac. Absolutely. 100%. Even if they had, you know,                                    |
| 31:26      | even if you had just waited for the Apple Silicon Mac and just said, well, you can just run my,              |
| 31:31      | you know, my iPad app on your Mac, I don't feel like that's the experience that would have been              |
| 31:36      | satisfactory to me. You know, I want a Mac app when I'm on the Mac. And I think the, you know,               |
| 31:42      | good on you. Yeah. I think it's another case of categories matter. You know, is that a good                  |
| 31:47      | technology for a weather app? Absolutely. But for a productivity app and workflow app,                       |
| 31:53      | I think that you really need those native Mac like controls and experience.                                  |
| 31:59      | Yes. And also the way that you've gone into the extra details here so that you can, for example,             |
| 32:04      | within an action, I've done this in a few of mine, you can turn on and off action steps per                  |
| 32:08      | platform. So it will do slightly different things, whether it's running on iOS or macOS for me,              |
| 32:14      | which is great. And I love it. And that, you know, it's little attention to detail on things like            |
| 32:19      | that, which really, for me, have made [[Drafts]] into a great application that I can use and                     |
| 32:24      | I can automate things with. Yeah. And I tried to, that was a necessary step because some things              |
| 32:30      | just don't behave the same on both platforms, but you'd like to be able to customise an action in            |
| 32:35      | such a way that it'll do, it'll work the way you want on each platform. And I tried to minimise              |
| 32:40      | that as much as possible works exactly the same out of the box on both platforms. But there are              |
| 32:45      | certainly exceptions to that rule where they actually try to integrate with work differently.                |
| 32:51      | So you have to plan for that or whatnot. A common case is mismatching [[URL Schemes]],                           |
| 32:56      | where a [[URL Schemes\|URL scheme]] does one thing on one platform, but then it's formed differently                          |
| 33:00      | on another. Though I know quite a few app developers have been in the process of tweaking                    |
| 33:04      | those over the years so that they can have the same thing on every platform. The mail-in version             |
| 33:09      | would have been say, well, just make separate actions for different platforms, but that's,                   |
| 33:13      | that's not elegant. You know, we want something that works. Some small things that you've done               |
| 33:18      | that I'm really happy with [[Drafts]] is just overall the shortcuts integration on iOS is,                       |
| 33:23      | is very robust. You know, I talked earlier about [[UUID]] stuff, but app in prepend,                             |
| 33:28      | like every tool you think you would need with respect to an app like [[Drafts]],                                 |
| 33:33      | there's a shortcut for it. You know, it's, it's great. And a silly one that's been in there                  |
| 33:39      | since I think the very beginning is [[TextExpander]] support. I've got this massive library of                   |
| 33:45      | [[TextExpander]] snippets and it's still not that easy to use them on the iPhone and iPad. You know,             |
| 33:51      | there's very few apps that support it and [[Drafts]]. So like writing emails and things,                         |
| 33:57      | I can just, you know, access those. So, I mean, there's just from simple to complex,                         |
| 34:01      | you've done a good job of making this app automator friendly.                                                |
| 34:05      | Thanks. I try. [[TextExpander]] has been a great partner over the years and they, you know,                      |
| 34:10      | they have a strong user base that I'm a user of it as, as well. And, you know, having that                   |
| 34:16      | integration is always valuable. Because a part of the, one of the key bits of [[Drafts]] to an additional        |
| 34:23      | just capturing things is having that one comfortable place to edit text, you know,                           |
| 34:28      | any old snippet of text, whether you're writing an email or, you know, it's going to end up in               |
| 34:34      | pages or something. That's not always where you want to do your editing and having that one place            |
| 34:39      | to go to dump some text in, even if you just end up copying it to the clipboard. [[Drafts]] is great for         |
| 34:45      | that and having a tool like [[TextExpander]] integrated just makes it that much more smooth for, for their       |
| 34:50      | users. Yeah, like total productivity hack for me is I write almost all my email in [[Drafts]] because            |
| 34:57      | that way I don't get into the [[Apple Mail\|Mail]] app and get sidetracked. But I also have the ability to use               |
| 35:03      | [[TextExpander]] when I'm running my email, which I don't if I use the [[Apple Mail]] app.                       |
| 35:08      | Yeah, I was doing that on Sunday. Actually, I was sitting on a plane and having to reply to a                |
| 35:13      | bunch of email and it's like, no, this is a great opportunity to just write everything in [[Drafts]],            |
| 35:18      | have all of my fancy actions available. And then afterwards I was just like tapping my email action          |
| 35:24      | and copying it and pasting it so that I was actually replying to emails instead of sending a                 |
| 35:27      | new email. But it was great and it works really nicely for that and gives me all of the options              |
| 35:34      | that I otherwise wouldn't necessarily have in other applications. And I find [[Drafts]] often                    |
| 35:39      | fills an automation gap for me in that respect with things like [[TextExpander]] support and everything          |
| 35:44      | else. It just slots in there and fixes whatever my problem is. And then I can take it and move               |
| 35:49      | it on elsewhere, which is, of course, one of the reasons why the app exists in the first place.              |
| 35:54      | So it's quite nice to remember that. I find something very satisfying when the plane                         |
| 35:59      | lands and you reconnect to the internet and you send off all those emails. Like in my head,                  |
| 36:04      | it's kind of like Harry Potter sending off a flock of owls. I don't know. It's just,                         |
| 36:10      | it's really, I don't know why that is, but just like 20 emails just fly out of that airplane                 |
| 36:14      | on the runway as I'm waiting to get in and you debark the plane and you feel like you've                     |
| 36:20      | accomplished something. I really wish now this is an official feature request, Greg. We need                 |
| 36:26      | owl animations every time an email is sent because I've set it up in [[Drafts]]. That's an                       |
| 36:32      | official feature request and I'm hoping to see it in the next version after the iOS 14 release               |
| 36:37      | and Big Sur handling. All right, writing it down. Okay, thank you. Or even, but let's just have              |
| 36:42      | about this. When I activate the action to take the draft and send it to [[Apple Mail]], just make the            |
| 36:49      | sound of flapping wings. You could do that, right? That sounds like it could be a more useful,               |
| 36:55      | actually, also potentially for accessibility use cases. You know what action you've tapped                   |
| 37:01      | because it does a different sound effect. I hadn't thought about that. I mean, I'm sure everything's         |
| 37:07      | built in so that it can actually tell you what thing you're tapping so you know, but you know,               |
| 37:10      | it's nice to have an audible confirmation that you've tapped the right thing. Here's an interesting          |
| 37:14      | question. Is there the ability to add play a sound via action? I guess could you do that                     |
| 37:19      | through a [[JavaScript]] command? Probably if it's on the internet, right? I mean, maybe with the                |
| 37:24      | [[HTML]] preview? You could certainly do it in an [[HTML]] preview. I don't have any specific sound                  |
| 37:31      | library functions right now, but it is something that could be added. Guys, we got to do this.               |
| 37:37      | We got to add actions. I have a cutting plan. [[Dark Noise]] is amazing and has loads of sounds.                 |
| 37:43      | What we could do is just have a shortcut that calls out to [[Dark Noise]] and plays a 10-second                  |
| 37:48      | or a two-second [[Dark Noise]] sound and pings back to [[Drafts]]. Or you could just get like the old                |
| 37:54      | sounds of a pre-Big Sur Mac and just put them, I'm sure Apple Legal would have no problem with you           |
| 38:01      | embedding those in your house. Okay, a small caveat. I only want this if you can stay on the [[App Store]]       |
| 38:10      | because if you can't stay on the App Store, then that makes [[Drafts]] very unhelpful to a lot of                |
| 38:15      | people. That would be fun because it would be a very simple action if it was already in the                  |
| 38:19      | library, you just say play sound, insert, maybe tokenise it. All right, I'm getting off the track            |
| 38:26      | here, guys. We have some cool stuff we're doing with [[Drafts]]. We thought it'd be fun to share it              |
| 38:32      | and we're just going to go around Robin. Rose, you want to go first? All right. Okay, so one of              |
| 38:38      | the things, I've already mentioned this, but I feel it's really worth talking about is markdown              |
| 38:42      | preview. So a lot of the time I write blog post articles and things like that, magazine articles             |
| 38:47      | in [[Drafts]]. And one of the things that I do is I insert images, which in markdown is the exclamation          |
| 38:52      | mark, open square bracket, your caption text, close the square bracket, open the round bracket,              |
| 38:59      | and the URL of the image, close the round bracket. But of course, then I just have a URL,                    |
| 39:06      | and it frequently happens that I paste the wrong URL with the right alt text. So I write my alt text         |
| 39:12      | first and then I paste everything afterwards, and it ends up in the wrong place. And this has                |
| 39:17      | caused some confusion before. So one of the things that I do now is I split screen, and especially           |
| 39:23      | on iOS, it automatically does this. If you tap on the preview icon at the bottom of the screen               |
| 39:28      | on an iPad, then it will split screen [[Drafts]] with the markdown preview. So I can actually see                |
| 39:33      | my whole article in its beautiful rendered format. And then I will also see the images in line.              |
| 39:40      | This is great. And I actually use it a lot of the time. And it just feels nice to be writing.                |
| 39:45      | And then just to see the page updating on the right side, where where you've typed stuff,                    |
| 39:51      | and it's like, Oh, you've done things. So I'm going to change this. And it just feels very                   |
| 39:55      | satisfying. And it's built in action, it comes, it ships with [[Drafts]]. And there are a lot of                 |
| 40:00      | different sort of different [[CSS]] files that you can use. And I actually have a couple of custom               |
| 40:06      | ones, because of course, and me, but the point is, is anybody can use this, and it's very easy to            |
| 40:10      | use. And I just love it. Yeah. And with the custom templates on that, it's actually relatively easy          |
| 40:15      | to get a preview that matches your own personal blog theme or whatnot. I think I've talked some              |
| 40:23      | people through this on the forum before, but you can pretty much literally view source on your blog,         |
| 40:28      | get, copy that [[HTML]] and strip out just the right part where the post goes and replace it with a              |
| 40:35      | draft tag and save that as a template. And then you can use that in your previews and, you know,             |
| 40:40      | actually take a look at what it'll look like on your site before you send it up there, which is              |
| 40:46      | great. I've been meaning to do that for literally years. And I never get around to it. And I know            |
| 40:51      | that's an easier job than in my head it is. I've got a couple of those custom templates for                  |
| 40:57      | different blogs, and it's really nice. And it really does help. But also, some of the time,                  |
| 41:01      | I just like having one of the defaults with white and black text, which also switches to black with          |
| 41:06      | white text in night mode, because it's very simple and just gives me exactly what I'm after, which           |
| 41:12      | is the pretty rendered text. And for fear of causing anyone to drink, we also integrate with                 |
| 41:17      | [[Brett Terpstra\|Brett Terpstra's]] [[Marked]] on the Mac for that sort of preview functionality too. So if you have those |
| 41:22      | kind of previews and templates and use marked for your workflow, you can get it to [[Drafts]] to live            |
| 41:28      | update the streaming preview and marked for the same purposes, which is really nice.                         |
| 41:34      | I've got what I'd call a level one action that I use frequently. And it's just a simple                      |
| 41:42      | insert text [[Drafts]] action. So the way [[Drafts]] work, and I know some people listening already know             |
| 41:47      | this really well, but others don't. You can create custom actions and the actions are assembled like         |
| 41:53      | blocks, like so much about the automation these days. And there's very fancy blocks like insert              |
| 41:59      | [[JavaScript]]. But there's also blocks that are very simple, like just save the file or one that I'm            |
| 42:06      | going to talk about right now is insert text. So you can have template text that gets inserted,              |
| 42:12      | you know, like traditionally, the way you would done this is you'd create like a draft that had              |
| 42:17      | your template text in it. Like one example I have is every time I get a call related to the legal,           |
| 42:23      | you know, my law practice, someone calls me, I open a draft. And the header of the draft                     |
| 42:29      | puts in an automatic timestamp and date stamp. It adds the let the word SL note with a space                 |
| 42:38      | between us with L and note. So it's a Sparks Law note. And then it leaves dashes and leaves space            |
| 42:45      | at the end of that first line, it's got a level one header for markdown at the beginning, it's               |
| 42:50      | got a hash at the front of it. And then below it, it has listings for who did I talk to,                     |
| 42:56      | you know, what's the matter we discussed, what are the action items for me, what are the action              |
| 43:01      | items for the other person. And so all that stuff just filled in automatically. So historically,             |
| 43:07      | I would have done that by having a template note. And then I would just duplicate that every time            |
| 43:12      | I needed it. But that's no fun. [[Drafts]] makes it so much easier, you create an action. And once               |
| 43:17      | you have that template text, you just paste the template text into the action, the way the action            |
| 43:21      | works, you can put any text in there that you want. And then when it comes time to run it,                   |
| 43:27      | you can add keyboard shortcuts to actions and [[Drafts]]. So for me, I know it is a control option               |
| 43:34      | C for call. And so I just, somebody calls me, I hit control option C, the whole draft gets                   |
| 43:40      | created. And with all of that detail I just mentioned, gets listed. And then I can just                      |
| 43:46      | fill it in on the call, I don't have to type in all that other stuff every time I want to use it.            |
| 43:51      | And like if I use Matt Gemmell's automation, I could actually have it fill in, it could say,                 |
| 43:56      | who called and I could fill in the name. And, you know, what matters is it would fill in the                 |
| 44:00      | name. I'm not doing that stuff because I find it just as easy, honestly, to navigate the draft               |
| 44:06      | and fill it in. And because every call is different, sometimes it doesn't necessarily lend itself to         |
| 44:11      | that level of automation. But a very simple draft action that anybody listening to the show can              |
| 44:18      | make is an insert text automation. And I've got an action set that I've created in [[Drafts]] that's             |
| 44:26      | like 15 of these things. Like I've got one, if someone calls me to make a new company, I've got              |
| 44:31      | one, if I'm talking to someone about something I'm working on the field guide. So there's just a             |
| 44:36      | whole bunch of stuff I do that I want to record and like make notes on. And I took all the tedium            |
| 44:42      | out of it with the simplest of simple [[Drafts]] actions. I have a lot of templates and [[Drafts]] as                |
| 44:48      | well. And it's something very similar. It's just using insert text. And what I, what I did the               |
| 44:53      | first time is I created a draft with everything in and I just copied it and pasted it in the                 |
| 44:57      | insert text action. And that was it done. And it's a great way to automate things. And it's,                 |
| 45:04      | as you said, extremely simple to set up. So everybody should give that a shot if they haven't                |
| 45:08      | tried creating custom actions yet. This episode of Automators is brought to you by DEVONthink,               |
| 45:14      | the flagship product from Devon Technologies. DEVONthink is a professional document and                      |
| 45:18      | information management application for the Mac. And it helps you collect, file, organise, edit,              |
| 45:23      | and annotate all kinds of documents so you can reach digital organisational heaven.                          |
| 45:28      | Archive your email with the enhanced email archiver and scan your paper documents with                       |
| 45:32      | the revised scanner interface. You can even import PDFs with custom stamps before giving them to             |
| 45:37      | others. Then organise your documents in any way you want. Smart groups that you create                       |
| 45:42      | different views on your data. And the integrated AI assists you with filing and searching.                   |
| 45:46      | You can automate your workflow, create smart rules, and add flexible reminders to any document.              |
| 45:53      | The even let non programmers easily automate many parts of the workflow so you can delegate                  |
| 45:57      | the boring repeating tasks to DEVONthink. And finally, sync your data securely between your                  |
| 46:02      | devices using your preferred web storage or even directly on your local network. And take your data          |
| 46:09      | with you with DEVONthink's iOS companion app. You can get 10% of DEVONthink 3 or upgrade to it               |
| 46:15      | right now. Just go to DEVONtechnologies.com/Automators. That's DEVONtechnologies.com                         |
| 46:21      | slash Automators for 10% off. Our thanks to Devon Technologies for their support of this show                |
| 46:26      | and all of Relay FM. I do a lot of different things with [[Drafts]]. Clearly, my installation                    |
| 46:32      | of [[Drafts]] is not typical of a lot of people because my primary use of it is testing it and                   |
| 46:38      | trying to break it. And I have junk piles of action groups that are things installed from                    |
| 46:46      | users or things I use just to test the app or different functionality. But there's a few things              |
| 46:52      | that I really have a kind of complete workflow and [[Drafts]] for. And I've shared this elsewhere and            |
| 46:59      | I've shared some of the example actions of it. But one of the things I do most with it is meal               |
| 47:05      | planning and grocery shopping. And it's kind of a full workflow that touches on a lot of areas.              |
| 47:11      | But it's got templates like you all described creating a new note with template. When I sit down             |
| 47:17      | to do meal planning, I've got a template action that just says new grocery list and it comes up              |
| 47:24      | with a new list that's tagged groceries and that has text filled in for creating checkbox lists for          |
| 47:31      | each part of the store and for the recipes I want to cook. And then I kind of sit there on my iPad           |
| 47:36      | and split screen with [[Safari]] and browse to recipes I want to make and drag the links into [[Drafts]] and         |
| 47:43      | then fill out my list for what I need to get at the store, you know, while I'm doing that.                   |
| 47:50      | And what I love about it is that I put, you know, I go to the store and I pull my phone out and my           |
| 47:56      | notes sink and I flip on, I call the action shopping mode. And what it does is it changes                    |
| 48:05      | the notes format to a different syntax, which has, which I have configured to have large font                |
| 48:12      | settings. So it's real easy to read at the store and it's real easy to tap the checkboxes.                   |
| 48:17      | And it disables sleep on the phone. So that especially in these days where I'm always wearing                |
| 48:23      | a mask at the store, you don't have to keep waking up your phone and unlocking it to get                     |
| 48:27      | to your list again. You know, I just set it in the cart in front of me and can check off the                 |
| 48:32      | stuff as I get it in the store. And it also enables a feature called link mode in [[Drafts]],                    |
| 48:38      | which the main purpose of link mode is to highlight tappable things like email addresses and phone           |
| 48:44      | numbers in your text, but it also disables editing temporarily. So as you're tapping off checkboxes,         |
| 48:51      | you don't accidentally bring up the keyboard and stuff that it's kind of a hassle.                           |
| 48:57      | Yes, I've actually got a slightly modified version of that, which we'll circle back to you later in          |
| 49:02      | our actually more advanced ones. But then I get back home, I've got my stuff I'm going to cook               |
| 49:07      | all week. And I've got this note in my inbox tag groceries, I've got a workspace that shows me               |
| 49:13      | a filtered list of my [[Drafts]] that only show me the ones tagged groceries so that I can easily                |
| 49:19      | find my list. I go in there and I look up the I've got the link for the recipe I was going to make           |
| 49:24      | and I, you know, I cook it. And when I'm done with that note, and I've cooked all those meals,               |
| 49:28      | I just archive that. But it's still there in that workspace. And if I want to go back and find that          |
| 49:34      | recipe again, or whatever from last week's grocery list, it's easy to do. And it kind of,                    |
| 49:40      | that kind of workflow touches on a lot of different areas of [[Drafts]] and what you can do with it.             |
| 49:45      | But you know, simple automations and use a plain text and checkboxes and stuff that give it a lot            |
| 49:52      | of utility. Yeah, I forgot to mention on mine the same thing. I use tags now that I'm using [[Drafts]]           |
| 49:57      | as note storage. I use the tags there as well, because tags are the way I can find things later.             |
| 50:04      | So that that's really useful. Although I am going to continue to bug you, I want someday to be able          |
| 50:10      | to export those tags as Apple notes or as Apple tags. I don't know if that's possible or not.                |
| 50:15      | But yeah, it is. That's something on the feature list. I think I actually have some code in there            |
| 50:21      | for it yet, but didn't finish it. It'll get there. So I guess that's why I had you on today,                 |
| 50:26      | so I could bug you about that publicly, since I've done it enough privately. Fair enough.                    |
| 50:32      | Well, speaking of tags, my next automation, which I use tags for is [[OmniFocus]] project templates.             |
| 50:39      | So I have a workspace and I have a tag and the workspace is based on the tag and it's just                   |
| 50:44      | called project template. That's my tag name and that is my workspace name. And then I also have              |
| 50:52      | an action group, which is my [[OF Taskpaper Action Group for Drafts\|OmniFocus Taskpaper action group]], which we can put a link to in the             |
| 50:57      | show notes. It seems like quite a few people probably already have that, but the link will be                |
| 51:02      | there anyway. And basically, all of the notes in this workspace are project templates for [[OmniFocus]].         |
| 51:10      | And they have variables in and all sorts of things. And there are a couple of different                      |
| 51:15      | ways that these get used. But my most common way of doing it is I will just open up [[Drafts]],                  |
| 51:20      | go to my project templates, and pick one, and then run the action to add it to OmniFocus,                    |
| 51:26      | and it'll pop up and ask me questions. And then it will just dump everything into OmniFocus for me.          |
| 51:33      | And it's great because I have all of these complex project templates, which I figured out                    |
| 51:37      | and added things to and removed things from and I update it. And of course, it syncs between all             |
| 51:42      | of my devices, which we'll get to again later in another one. And it's perfect because I can say,            |
| 51:48      | oh, right, yeah, I'm going to visit my grandparents. So I need to do this stuff. And all of that is          |
| 51:54      | already in a project template ready. So I just tap it and, you know, it comes up and is like,                |
| 51:58      | oh, if you're going to go visit your grandparents, then you need to do this, of course, not visiting         |
| 52:02      | them at the moment. But when I go back and I'm able to visit them again later when it's safe to,             |
| 52:06      | then I can reuse my template. And it's just sitting there waiting for me.                                    |
| 52:11      | Yeah, this is like, this is a triumphant work of Rosemary Orchard. I recommend you download it               |
| 52:17      | because there's so much in here. A lot of it's [[JavaScript]] based. I'm going to get on the phone               |
| 52:22      | with you someday, Rose, and go through these with you because there's, I haven't even processed              |
| 52:26      | what all these do. I mean, I mean, most of them actually aren't using [[JavaScript]]. They're just               |
| 52:31      | using the insert text action because all I do is I just have it. So you'll tap on something, say,            |
| 52:37      | for example, do you tap on it? And it just inserts the at symbol, do you and then some brackets?             |
| 52:43      | Now, that particular one, I think actually might be smarter because it might say, oh,                        |
| 52:48      | if there's selected text, then I'll insert the brackets around the selected text. But the point              |
| 52:55      | is, some of it is just, for example, flag, I'm certain that just is insert text at flag. Done.               |
| 53:04      | Because it's using [[Taskpaper]], and it's great. And I should have mentioned my entire workspace                |
| 53:09      | uses the [[Taskpaper]] format in [[Drafts]] because [[Drafts]] can now have different formats for [[Drafts]]. So             |
| 53:14      | you can use [[Markdown]]. There's also a script format and [[Taskpaper]]. And Greg, I think you've got some          |
| 53:19      | other ones in there as well, haven't you? There are a few others. And I've also got on the roadmap           |
| 53:25      | custom syntax definitions and themes that maybe come by the end of this year, if not early next              |
| 53:31      | year, which are going to allow people to create their own theme implementations and special syntaxes.        |
| 53:39      | And it's a little bit advanced, but I think people are going to come up with some cool variations on,        |
| 53:44      | you know, if you want a little custom [[Markdown]], or you want a particular way of viewing [[Markdown]],            |
| 53:50      | maybe you like your headers a different colour, or you like your block quotes to be bigger or smaller,       |
| 53:57      | things like that, that having those features in place is going to be an exciting addition.                   |
| 54:01      | Yeah. And then there'll be a bunch of user created syntax that we can all download and use if we             |
| 54:07      | don't want to bother making our own. And, you know, and like one out of five will be awesome and four        |
| 54:14      | out of five will be terrible, but the one out of five will be totally there. Just the same reason            |
| 54:20      | Apple's not making custom watch faces, right? But yeah, I'm really looking forward to that feature           |
| 54:28      | coming out. Rose, I'm with you on this. I'm slowly moving all of my text fields out of                       |
| 54:35      | shortcuts and setting them up in [[Drafts]]. And I'll have to use these tools, although mine are all             |
| 54:40      | kind of pretty much created already. So it's just a, you know, it's a much simpler process.                  |
| 54:45      | I think I've got like 40 different OmniFocus templates at this point.                                        |
| 54:50      | Some of the, one of the other ones I do is simple automations with messages. And, you know, it's             |
| 54:56      | something that's super easy to set up in [[Drafts]], but I have probably about a half a dozen message            |
| 55:03      | actions on my main action list. And they're for things like texting something to all three of my             |
| 55:10      | kids, you know, yeah, I have a group conversation and messages to them, but I'd have to go find it           |
| 55:15      | and, you know, look it up in messages, whereas anytime I could just open that up, type something             |
| 55:21      | and click one button to send it to the three of them and not have to worry about the message                 |
| 55:25      | history or opening the messages app. I even have a silly one that I created about six months ago,            |
| 55:32      | because we have a two-story house and my kids are often upstairs at dinners ready and I got sick             |
| 55:39      | of yelling upstairs, dinnertime and trying to get their attention. Because more often than not,              |
| 55:44      | they've got one of their devices handy or will respond when they get a text. So I wrote one that's           |
| 55:49      | just ring dinner bell and it sends the word dinner to all three of my kids with one tap. I don't             |
| 55:55      | even have to type anything into [[Drafts]]. And that's one I use quite often is to get their attention           |
| 56:01      | Yeah, I have teenagers. I've realised that communicating via text is much easier than any                    |
| 56:07      | other form of communication. And they, I can't get over how they respond immediately. Like,                  |
| 56:12      | I can scream up the stairs for like 10 minutes, nothing. But if I just type one text message,                |
| 56:18      | I hear a little feet running or big feet running very quickly.                                               |
| 56:22      | There's noise canceling headphones pretty much.                                                              |
| 56:25      | I did some videos for Greg. So Greg is, you know, full disclosure, I've done work for [[Drafts]].                |
| 56:32      | But one of the ones I made in there that I keep is because I live in earthquake country,                     |
| 56:38      | I made a draft on my phone that gets my location and it goes to my kids and my sisters and it's              |
| 56:46      | like some immediate family. And I just push one button and it says, I'm okay. I'm at this location.          |
| 56:53      | And because the way Southern California works is if there's an earthquake,                                   |
| 56:58      | the cellular system goes down very quickly. But I usually have about 30 seconds to a minute                  |
| 57:05      | before it goes down because suddenly everybody gets on their phones and the towers get overwhelmed.          |
| 57:10      | And calls are almost impossible, but texts can get out. So it's like my hot button, you know,                |
| 57:16      | and I think it's a good idea for anybody that lives like, if you live in hurricane country or                |
| 57:23      | whatever, just set something like that up.                                                                   |
| 57:25      | Definitely. I would agree with that. And I fortunately live in an area where there are no                    |
| 57:30      | natural disasters, other disasters aside. And so I don't need something like that.                           |
| 57:36      | But I have something very similar for where I never am flying and it will message people                     |
| 57:40      | that I've taken off and that I've landed. And it doesn't have any more.                                      |
| 57:44      | And it doesn't have any more, you know, fun stuff than that. It's just like,                                 |
| 57:48      | I've taken off or I've landed. That's it. But it works really well.                                          |
| 57:52      | I think the risk where you live, Rose, is that you may turn into a popsicle                                  |
| 57:56      | in between December and March. So you should have one.                                                       |
| 58:00      | Okay. I've been there. It's very cold. Very cold.                                                            |
| 58:04      | It's not that cold. It's Stonehenge is windy. That's all.                                                    |
| 58:08      | Okay. I have another one. And this is kind of a pickup on the last one where I said I made that              |
| 58:14      | call record and I talked about how I mark SL note in the name. And this is my solution because               |
| 58:20      | Greg is just, you know, not giving me my Apple tags. So I wanted the ability once I created                  |
| 58:28      | that note to save it to the client file, right? So I've written a note. I can reference it in                |
| 58:37      | [[Drafts]], but I also have a folder for each client and why not collect all notes related to that               |
| 58:43      | client in the one place. So I have a very simple, well, not as simple of a draft, but you can save           |
| 58:48      | a note to iCloud very easily. It's a one step action. And it takes the first line of the note                |
| 58:56      | and makes that the file name. So if I write the word SL note in the, in the first line,                      |
| 59:01      | and then I write the client name in the first line, now I have an essence created name based tags.           |
| 59:07      | And so I save that and then [[Hazel]] on the back end will look for that anything with the word SL               |
| 59:17      | note and the client name. And if it sees those two things together in the name of the file,                  |
| 59:23      | it will move it to the notes folder in the client file. So that's pretty clever, right? It's just,           |
| 59:29      | it's a, it's a back end [[Hazel]] based file system. It gets a little more complicated on iOS because            |
| 59:36      | you can't address where you save it with [[iCloud]], you can only save it to the [[Drafts]] folder. So I             |
| 59:42      | have a sub folder in [[Drafts]] called, you know, SL notes and [[Hazel]] looks at that. And there's a [[Hazel]]          |
| 59:48      | rule that just takes every file that gets saved there and moves it to the location that my Mac               |
| 59:53      | looks at. So I have two [[Hazel]] rules. The first one on iOS moves it to the proper folder in the               |
| 59:59      | second one files and sorts it. And then I run a JavaScript action that I cribbed from your, your             |
| 01:00:05   | your forms for Greg. And it, it, it looks for any line in that note that has a dash at the beginning.        |
| 01:00:14   | And it parses that out and saves it to [[OmniFocus]] as a inbox item. And this was something that was            |
| 01:00:22   | interesting for me because [[OmniFocus]] has rich support in [[Drafts]]. There's a lot of people that                |
| 01:00:26   | run [[JavaScript]] Omni support stuff, including the lady that's on the phone with us right now.                 |
| 01:00:31   | But the, some of them go too deep for me. It's like, you can really go deep. You could, like I               |
| 01:00:38   | could have it parse out the name of the client and then save it to the client project and add tags and       |
| 01:00:43   | do all sorts of cool stuff. But I realised that I don't want that automation. I still want my inbox          |
| 01:00:48   | and [[OmniFocus]] to serve as a filter. And just because I think something belongs in [[OmniFocus]] at the           |
| 01:00:55   | moment doesn't mean it actually belongs there. So I still need the end of the day audit through              |
| 01:00:59   | the OmniFocus inbox. So I, I stripped out all of the super automation. The only thing it does is             |
| 01:01:05   | just take a dashed item and add it to the inbox with no project name, no tags, no nothing, you               |
| 01:01:11   | know, no flags or anything. So I keep it really simple. But then at the end of the day, I can go             |
| 01:01:16   | through it and process it properly. But that is a [[JavaScript]] combined with saved file automation             |
| 01:01:24   | I use in [[Drafts]] probably about 10 times a day. Yeah. Adding task parsing to things, I think                  |
| 01:01:33   | I might have stolen your action, David, because you messaged me about it at some point and asked             |
| 01:01:37   | a question for some other reason. And I was there going, you don't steal that action because I end           |
| 01:01:44   | up with a lot of things inside of my [[Drafts]] as well, which I need to parse out. And so my OmniFocus          |
| 01:01:49   | inbox, having spent the last week running backwards and forwards between countries to move my entire         |
| 01:01:54   | life is a little bit out of hand, but a lot of those things were captured through [[Drafts]].                    |
| 01:01:59   | Yeah. I published this one. I got permission from the gent whose name is Casey right now,                    |
| 01:02:03   | who did the original [[JavaScript]] programming for that parsing. And, but I will put a link in the              |
| 01:02:08   | show notes, but you can obviously customise this to fit for you. The chat, one of the challenges             |
| 01:02:14   | for me was, you know, how do I get, because normally with something like this, I would want to               |
| 01:02:19   | give [[Hazel]] tags to do the filing because they're just so certain, if you know what I mean,                   |
| 01:02:24   | but name-based tags work just as good. And that's why I'm not totally leaning on Greg to get the             |
| 01:02:29   | sample tags in because I figured out a way around it. I just, you know, I just put SL note in. And           |
| 01:02:34   | I could probably write a script if I really got, if I wanted to spend an afternoon to figure this            |
| 01:02:39   | out, but either way, it's fine as I'm doing it. But, but it is interesting when you combine                  |
| 01:02:45   | automation tools. And when you think about, well, [[Drafts]] can make this note for me,                          |
| 01:02:50   | but how do I get it to a specific location on export, you know, where it's going to have,                    |
| 01:02:56   | let's say you've got a hundred clients and you don't want to create a separate [[Drafts]] action for             |
| 01:03:00   | each one, because you could do it in [[Drafts]], identifying a specific location. But ultimately,                |
| 01:03:06   | I decided the easiest way is to let [[Hazel]] do that back into automation for me.                           |
| 01:03:12   | Yeah. It definitely makes sense in some of these cases to hand everything off to another                     |
| 01:03:15   | system. And that's the beauty of [[Drafts]] because it is so well integrated. I can easily do that.              |
| 01:03:20   | And I have a [[Dropbox]] folder, actually, because I have a variety of things put stuff in there,                |
| 01:03:26   | and that includes Zapier and [[Drafts]]. And then [[Hazel]] just picks stuff up and goes,                            |
| 01:03:30   | Hey, I've done this thing for you. It's like a little piece of magic happens whenever my                     |
| 01:03:35   | Mac mini is running. But Rose, you've gone a step further. You're putting [[Pushcut]] together with             |
| 01:03:40   | [[Drafts]] now. Yes. Yes, I am. So I have an iPhone 6s, which I bought a long time ago for testing               |
| 01:03:48   | purposes, and it's getting iOS 14. So I'm keeping it. And it sits there all day and runs [[Pushcut]]            |
| 01:03:54   | automation server. We've talked about [[Pushcut]] on the show before, but the automation server                 |
| 01:03:58   | basically sits there and waits for you to tell [[Pushcut]] to do something. And then it does it                 |
| 01:04:04   | entirely automatically. So this means that I can have [[Zapier]] watch something. So say, for example,   |
| 01:04:11   | I create shows over at Screencast Online, so it watches [[Podio]], which is what the Screencast              |
| 01:04:16   | Online folks use for our project management. And it goes, Hey, Rose, there's a new show assigned             |
| 01:04:20   | to you. And then it pings [[Pushcut]] as part of that. And [[Pushcut]] then takes this information,                |
| 01:04:26   | and it runs shortcuts. That's its purpose. But those shortcuts take that data and go,                        |
| 01:04:30   | Hey, [[Drafts]], can you run these three actions for me? And those different actions will do                     |
| 01:04:35   | different things. So I've got actions for shows, I've got actions for magazine articles, I write             |
| 01:04:40   | for Screencast Online, I've got actions for things that I write for the suite setup. And                     |
| 01:04:44   | basically what this does is it creates a series of [[Drafts]], and it will save the [[UUID\|UUIDs]] of these              |
| 01:04:50   | [[Drafts]] back into [[Airtable]] when it creates them. So I can easily jump from [[Airtable]] to a specific         |
| 01:04:57   | draft. And I know that the content is there, which then ties into another automation later where             |
| 01:05:02   | send it back out. And it creates things and it updates things. And it's amazing. And then it                 |
| 01:05:09   | creates projects and throws them into [[OmniFocus]] for me, because another action that I've still               |
| 01:05:14   | been experimenting with, it's a little bit wonky, but with a little bit of improvement,                      |
| 01:05:18   | it'll get there. I can actually just send a comma separated list of                                          |
| 01:05:23   | the variables I need to put into any project template inside of [[Drafts]]. And it will add that                 |
| 01:05:32   | project template into [[OmniFocus]] for me without popping up and asking me to provide input,                    |
| 01:05:37   | which it would usually, because I'm giving it the whole list of parameters. And that has been a              |
| 01:05:43   | game changer for making sure everything is in [[OmniFocus]] for me. It's great.                                  |
| 01:05:47   | Yeah, you're going to have to share that one once you get it ironed out. I think that'd be                   |
| 01:05:50   | fun to talk about on the show. Yeah, it sounds really complex. But basically,                                |
| 01:05:55   | I have [[Pushcut]] automation server do most of the heavy lifting. And it just takes data,                      |
| 01:06:00   | tells shortcuts, here's the data. And then [[Shortcuts]] is basically sitting there as the middle                |
| 01:06:04   | man for this. And just goes, hey, [[Drafts]], please, can you do this for me? And [[Drafts]] says, hold my            |
| 01:06:10   | beer or hold my water or sell some water in your case, David. And goes, boom, here's 20 [[Drafts]]               |
| 01:06:17   | that you need for this particular thing. You've got your outline, you've got the place where                 |
| 01:06:21   | you can put links to the app and then place where you can put other useful links, place where you            |
| 01:06:26   | can put like summary place where you can put a description, all of this. And I've saved all                  |
| 01:06:31   | that data into air table for you. And now I'm just going to go sit and chill by the pool because             |
| 01:06:35   | it does it all in seconds without me thinking about things. And because [[Drafts]] just syncs                    |
| 01:06:40   | everywhere, it does this on this iPhone 6s, which is sitting in like a remote control                        |
| 01:06:45   | holder from IKEA. It's permanently plugged in. I never look at it. And it just runs and it's                 |
| 01:06:50   | brilliant. It's magic. You know, when some of these third parties come up with ways to further               |
| 01:06:56   | automation with third party apps, and you always worry about, you know, is Apple going to sure               |
| 01:07:01   | lock them or, you know, and fold this into [[Shortcuts]] or something on the Mac? I never worry                  |
| 01:07:08   | about that when it comes to the [[Pushcut]] automation server. That is something Apple will never go that       |
| 01:07:13   | far on. No, never, never. And it's great because I can just have it do these things. And okay,               |
| 01:07:20   | sometimes [[Pushcut]] automation server just runs shortcuts or whatever. But in this particular                 |
| 01:07:24   | case, it's handing all of the heavy lifting off to [[Drafts]] and [[Drafts]] is there going, yep,                    |
| 01:07:28   | I'm going to do this, I'm going to do that, I'm going to do this other thing. And it feels                   |
| 01:07:32   | literally like magic because then, because it sends, so it sends that notification only to my                |
| 01:07:38   | [[Pushcut]] automation server. But then the last action in the shortcut is to ping my other                     |
| 01:07:43   | devices through [[Pushcut]] and say, Hey, I created all these [[Drafts]] for you. And they all have the             |
| 01:07:49   | same tag. And so then, and it sends me a link. And so I open that link, and that's using a URL               |
| 01:07:54   | scheme in [[Drafts]] to jump straight to that. And then I can just see all of the things it's just               |
| 01:07:59   | created for me. And it's like, Okay, now I have a lot of work to do. But I didn't have to set it             |
| 01:08:03   | all up, which is the amazing part. So yeah, this is why I don't need a secretary. And I really               |
| 01:08:09   | wish we could do that in a way where we don't need to have an, you know, an iOS device plugged in and        |
| 01:08:14   | running 24 seven in the background. But that's what we need. And so we've got the option.                    |
| 01:08:20   | And I have to say, I got the iPhone 6s a couple of years ago, very cheaply. It's like refurbished            |
| 01:08:25   | from some story. It was Argos here in the UK for anybody who's familiar. It's just a store that              |
| 01:08:30   | sells a lot of different things, but they had refurbished iPhone successes. And so I grabbed                 |
| 01:08:34   | one because I thought this could be useful for testing things on. And it is my personal cut                  |
| 01:08:40   | automation server now. And it was a very cheap way to set it up. If people are looking to get                |
| 01:08:44   | a device specifically for this, I maybe recommend at least a 7 or maybe an 8 or                      |
| 01:08:49   | what the new SEs because I think that the 6s will probably not get iOS 15. But for the time being,           |
| 01:08:56   | it's definitely doing its job. Yeah. And there's a lot of people listening that probably have an             |
| 01:08:59   | old iOS device, maybe an iPad mini or whatever sit in a drawer that you could be using for this              |
| 01:09:06   | today. Greg, have you ever played with [[Pushcut]] and the automation tools they've put it together             |
| 01:09:11   | over there? I have not, although you've got my mind thinking a little because I do have plenty of            |
| 01:09:16   | those devices in my drawer that I'm not doing anything with. And then in the case where you're               |
| 01:09:21   | applying it for something like this, it really doesn't matter if it has a spent battery or whatever          |
| 01:09:26   | because it's going to be plugged in all the time. Exactly. Yeah. Yeah. That's why for me,                    |
| 01:09:32   | this works so well because I think the iPhone 6s has got a fairly bad battery life now. It's                 |
| 01:09:36   | certainly not like expanded or anything like that. It's not the point where it's potentially                 |
| 01:09:40   | dangerous. But if I unplug it, it dies very quickly. I'm super battery sensitive right now                   |
| 01:09:46   | because I'm currently getting almost my third year out of my original iPhone 10 and the battery              |
| 01:09:52   | is really showing its age. And I'm running the Betas OSs, which are never great for your battery.            |
| 01:09:57   | But I know I'm going to buy the new one in the fall. So it seems silly to invest in upgrading                |
| 01:10:01   | the battery in this one. So I'll hobble through. Yeah. I just, I have no care in the world for               |
| 01:10:08   | battery since this whole pandemic thing started because I spend my day migrating between different           |
| 01:10:14   | desks in the house and they all have chargers on them. So it's like, oh, I'm at 80%. How did it get          |
| 01:10:19   | so low? Only in your world, David, I just had to put my iPhone on charge because I forgot to put             |
| 01:10:27   | it in its battery case today. And like, so this was, we started recording at I think 7 PM. And                |
| 01:10:35   | at that point it was down to 11% battery. And I was like, okay, I really need to put this on                 |
| 01:10:39   | charge now. Yeah, I started this year with a bunch of speaking gigs on the calendar and like                 |
| 01:10:44   | all these plans for travel. So I bought the extended battery case, the Apple battery case,                   |
| 01:10:50   | which is really cool. It's got a camera button on it. And for my new phone, and man, that's just,            |
| 01:10:56   | I should have just flushed $200 down the toilet, honestly, it would have served the same purpose.            |
| 01:11:02   | I got it used like new on Amazon for basically because I used to have a                                      |
| 01:11:08   | Qi charger on my desk and being in lock down. My Qi charger was in Austria and I was here              |
| 01:11:13   | and I didn't want to buy another Qi charger. So I was like, oh, get the battery case because              |
| 01:11:16   | that'll be useful when iOS 14 beta has come out. And it's paid off. So for me, it's been good.               |
| 01:11:22   | But I can see why it wouldn't be for everyone. Greg, tell me when you're not using [[Drafts]],                   |
| 01:11:28   | what tools are you using to automate these days? Well, I, I'm definitely on the geekier side being           |
| 01:11:34   | a programmer and having spent years with it. Most of my automation stuff surrounds supporting                |
| 01:11:40   | the infrastructure of [[Drafts]], you know, because people say, well, you spend your time on this app.           |
| 01:11:46   | Well, in addition to the app, they're supporting [[Drafts]], there are two [[Rails]] applications,                   |
| 01:11:53   | three [[Jekyll]] static websites for documentation and marketing and [[TypeScript]] library for all the,             |
| 01:12:02   | you know, [[JavaScript]] documentation and stuff. And all those things are fiddly and require a lot              |
| 01:12:09   | of steps. So most of the automations I have are around either shell scripts or [[Ruby]] scripts to,              |
| 01:12:16   | you know, step through, like say, I'm going to release a new beta. And I've got the release                  |
| 01:12:23   | notes to put up with new versions of the site, modified documentations, I've got a push to get               |
| 01:12:29   | a updated documentation and stuff like that, a whole bunch of steps that you just don't want to              |
| 01:12:35   | have to do repetitively and are bound to forget to do some of if you don't automate it. So I have            |
| 01:12:40   | a lot of little terminal shell scripts and [[Ruby]] scripts that do those kind of steps for me.                  |
| 01:12:48   | So I can just sort of say publish, go and it'll render all those sites and upload them to the                |
| 01:12:54   | right places and stuff. Yeah, you know, it's a lot of programmers we've had guests on the show,              |
| 01:13:01   | you know, get down to terminal and shell script type automation, which I guess, Rose,                        |
| 01:13:06   | we've got to cover in more depth at some point on the show. It's just so hard                                |
| 01:13:10   | to explain that on an audio podcast, you know, you really need video.                                        |
| 01:13:15   | It is. Yeah. Something like [[Shortcuts]] or [[Drafts]] actions are easier to talk about because you             |
| 01:13:19   | just have to look for the right name, but where you need to spell it right, it can get a bit trickier.       |
| 01:13:24   | It's not as intimidating as you might think. I mean, you kind of covered this on your,                       |
| 01:13:27   | was it the previous episode with Dr. Drang that the scripting and stuff is really not as intimidating        |
| 01:13:33   | as some people think it is. And if you've done basic building block automations, you could move on           |
| 01:13:39   | to scripting. And, and once you get the handle of some of the basic syntax in a language like                |
| 01:13:45   | [[JavaScript]] or in the shell scripting, I mean, you can, you can do a lot without, without a lot of            |
| 01:13:51   | effort. Yeah. If I'm doing it, then that's true. Everybody has their moments where they think,               |
| 01:13:59   | oh gosh, this is terrifying. But as we've learned, things look terrifying, but then turn out to be           |
| 01:14:04   | not as scary as you might think. I mean, a lot of the original heavy lifting programming I did was           |
| 01:14:09   | in [[FileMaker]]. And I don't know if you all have any history with [[FileMaker]], but it has a point and            |
| 01:14:14   | click kind of script builder tool that, you know, is very similar to what [[Editorial]] workflows are            |
| 01:14:21   | like, or like shortcuts where you have these building blocks and fill in these gaps. And                     |
| 01:14:27   | it is very powerful. And there's a point at which you say, this is getting too frustrating to have           |
| 01:14:32   | to drag these blocks over. And, and it's easier to do it with text where I can cut and paste.                |
| 01:14:38   | Much like plain text is easier, easier to manipulate than rich text word document. Sometimes                 |
| 01:14:45   | that cruft gets in your way. And if you get over some of those basic hurdles, you could be amazed            |
| 01:14:51   | what you can accomplish with a little bit of code. Yeah. Just this past week, I was working on,              |
| 01:14:56   | I'm working on a new field guide on the paperless workflows. And we talked in the last Automators            |
| 01:15:01   | episode about automatically creating folders and folder hierarchies. And I spent like a couple               |
| 01:15:06   | hours building this very complex [[Keyboard Maestro]] script. And I realised, you know, this is madness.     |
| 01:15:11   | And I just went in [[AppleScript]]. And it wasn't that hard. It was so much easier to do with the            |
| 01:15:17   | traditional scripting tool, you know, and you do find yourself getting sometimes using the,                  |
| 01:15:23   | you know, the building block automation tools, as Greg calls them, they're great. But sometimes              |
| 01:15:28   | you really are, you're taking them in directions they weren't meant to go. And that's where you              |
| 01:15:34   | really want to dust off your traditional scripting tools. All right. Well, Greg, thank you so much           |
| 01:15:42   | for all the work you've been doing on [[Drafts]] and keep it up. And so we're going to have                      |
| 01:15:47   | exported Apple tags and audio probably by the time the show ships, right? I mean, no problem next week.      |
| 01:15:55   | Absolutely. I'll get right on it after my nap.                                                               |
| 01:15:59   | All right. Well, I mean, it shouldn't take more than 20 minutes, of course,                                  |
| 01:16:02   | so this stuff is really easy. You've just been, you know, relaxing all summer.                               |
| 01:16:06   | Yeah, just do it in your free time. No, I am just 14 work at all.                                            |
| 01:16:09   | No. What do you think of iOS 14? Has it got you thinking about anything for [[Drafts]], you know,                |
| 01:16:15   | pluses or minuses? Clearly widgets are pretty huge for [[Drafts]]. And I've got an implementation                |
| 01:16:22   | in place that is going into testing here as soon as Apple works out some of the deployment bugs.             |
| 01:16:27   | But a lot of the other iOS 14, some summers I cringe after [[WWDC]] and I've got a lot of work to do,            |
| 01:16:34   | but it's not too bad this year. A lot of the new features I like as a user and are super convenient          |
| 01:16:40   | and cool, but don't really affect my life as a developer. You know, I don't have to do any work              |
| 01:16:45   | to take advantage of the new messages features or things like that. And there's not some                     |
| 01:16:53   | mind-boggling new feature that I've got to implement like multiple Windows support and iPad,                 |
| 01:16:58   | you know, in previous years or stuff like that. So other than widgets, it hasn't affected [[Drafts]]             |
| 01:17:04   | that much. A little more on the Mac side, I think adopting some of the new Big Sur                           |
| 01:17:10   | conventions will be interesting. And I haven't dug too deep on that yet. But I'm excited about               |
| 01:17:17   | the new platform updates. I think they look great. I think that Apple set it in the right                    |
| 01:17:21   | direction on a lot of stuff. I think this is a real fun time to be a fan of Apple products.                  |
| 01:17:28   | And I'm just super curious to see what the Mac experience is going to be like in a year or two               |
| 01:17:34   | from now, because I think it's going to be substantially different on a kind of like a                       |
| 01:17:39   | quantum level. You know, we've had small changes for years, but this is, I mean, just think about it.        |
| 01:17:45   | We can run iOS and iPad apps on our Macs. I mean, how does that change your workflow? Yeah.                  |
| 01:17:52   | Does it suddenly make that, you know, Microsoft, you know, 27 inch draft table iMac something                |
| 01:17:58   | that we want? I mean, it's just, I'm super curious. I'm interested to see where it goes as well.             |
| 01:18:03   | And I think in a couple of years, I'm going to have users who want to run the iOS version of                 |
| 01:18:08   | [[Drafts]] on their Mac that they prefer that. I don't think it'll be most Mac users, but I think there'll       |
| 01:18:15   | be some. It'll be interesting to see where it all goes. Yeah, right. But it's going to be six months.        |
| 01:18:20   | It's not going to be two years. So some buckling, maybe. Well, the upgrade path on Macs is a little          |
| 01:18:28   | slower. I mean, you have an early adopter kind of listener base on the podcast, but people tend to           |
| 01:18:33   | hang on to Macs for a while. So I think it's more like three or four years before the primary                |
| 01:18:38   | core users have Apple Silicon and stuff. Let's see what happens there. I have a feeling that we              |
| 01:18:46   | are going to see an interesting split of people who the number of people rushing to buy Intel Macs            |
| 01:18:51   | Now versus the people going, I'm going to wait. You know, I've got a MacBook Air sitting in front            |
| 01:18:56   | of me and I'm thinking, well, I mean, it's new. But at the same time, my mom's MacBook definitely            |
| 01:19:02   | needs replacing. And maybe I should be getting a Silicon MacBook Pro as an experiment in the end             |
| 01:19:09   | of the year when they release them. So let's see how far. At least want to wait and see the specs,           |
| 01:19:14   | like what kind of battery life they end up having and stuff to know. Yeah, that's the thing. And             |
| 01:19:20   | the MacBook Air is still nice. And, you know, especially now working from home all the time,                 |
| 01:19:24   | I can use the Mac mini for the vast majority of things. So. Rose is an amazing how our brains                |
| 01:19:29   | like can justify something. It's like, Oh, yeah. Oh, my mom really needs a computer. And Apple just          |
| 01:19:36   | happens to have a new one coming out that I'd really like. I get it. I get it. I'm not, I am                 |
| 01:19:41   | trying to make my own life easier with tech support. It's much easier with the computers faster.             |
| 01:19:46   | I know my wife's computer is so ready for replacement. I can't even tell you. I mean,                        |
| 01:19:52   | it is swelling. The speakers don't work. It is like the World War II bomber coming back with                 |
| 01:19:58   | holes in the wings. It's just, it's just barely living. But then I told her, I made the mistake              |
| 01:20:02   | of telling her, yeah, the new Macs, you're going to be able to run your iPhone and iPad apps on.             |
| 01:20:07   | And she's like, Oh, I want that one. So now I can't even like give her mine and justify                      |
| 01:20:13   | getting a new one because she wants the new one too.                                                         |
| 01:20:17   | See, that was your mistake, David. Don't tell people about the new ones.                                     |
| 01:20:19   | Rookie mistake. Rookie mistake. Well, once again, Greg, thanks again. Thanks for coming on and               |
| 01:20:24   | sharing and everybody head over to get [drafts.com](https://drafts.com). I believe that's the website, right? We're going          |
| 01:20:30   | to have a bunch of show links in the notes here with some of the stuff we've talked about today.             |
| 01:20:36   | If you haven't looked at automating with [[Drafts]], it's such an awesome tool. It's on all three                |
| 01:20:40   | platforms and we are digging it. Thank you to our sponsors, Mint Mobile and [[DEVONthink]].                   |
| 01:20:46   | We are the Automators. You can join the forums over at [talk.automators.fm](https://talk.automators.fm).                                   |
| 01:20:51   | You can find us at relay.fm/automators. And we'll see you in a couple of weeks.                              |
| 01:20:56   | Goodbye, everyone.                                                                                           |
