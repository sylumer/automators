---
status: incomplete
fc-date:
  year: 2022
  month: 11
  day: 19
fc-category: podcast
podcast: Automators
published: 2022-11-19
duration: 5413
formattedduration: 01:30:13
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Simon Støvring
notetype: episode
showpage: http://relay.fm/automators/115
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators115.mp3
episode: 115
title: "115: Automating the Future, with Simon Støvring"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Simon Støvring returns to talk about how much automation has changed and what his favourite new features are.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Simon Støvring]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 115 Discussion](https://talk.automators.fm/t/115-automating-the-future-with-simon-stovring/14753)

# Sponsors
- [[MasterClass (Sponsor)|MasterClass]] - Get unlimited access to every class.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.

# Show Notes
- [Simon B. Støvring](https://simonbs.dev/)
- [Simon B. Støvring (@simonbs) / Twitter](https://twitter.com/simonbs)
- [Meccano - Wikipedia](https://en.wikipedia.org/wiki/Meccano)
- [Scriptable](https://scriptable.app/)
- [Runestone](https://runestone.app/)
- [GitHub: Runestone](https://github.com/simonbs/runestone)
	- Performant plain text editor for iOS with syntax highlighting, line numbers, invisible characters and much more.
- [Runestone | Documentation](https://docs.runestone.app/documentation/runestone/)
- [Rest – HTTP API Client on the App Store](https://apps.apple.com/us/app/rest-http-api-client/id1318172341)
- [Textastic - Text, Code, and Markup Editor with Syntax Highlighting - FTP, SFTP, SSH, Dropbox, Google Drive - for iPad](https://www.textasticapp.com/)
- [Data Jar](https://datajar.app/)
- [Jayson](https://jayson.app/)

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the automation podcast about making all of your technology,          |
| 00:06      | all of your apps, all of your services, and all of your things do your bidding for you.                |
| 00:10      | So you'll have like a little Roomba following you around the house, making it new, or doing            |
| 00:14      | all of your stuff for you rather than making you do all the stuff. Either way, my name                 |
| 00:18      | is Rosemary Orchard and I'm joined as always by David Sparks. Hey, David, how are you?                    |
| 00:22      | I'm good, Rose, but you just inspired me. I think we need to do a show on robots. I                    |
| 00:26      | don't know how that works. I don't have very many robots, but we should just do a show                 |
| 00:30      | about all our robots at some point. Well, that sounds good. And maybe, I don't know,                   |
| 00:34      | maybe we could program with them with Scriptable or something. Maybe we could use this Runestone       |
| 00:38      | editor to write some stuff. I don't know. I hear some great things are, you know, just                 |
| 00:43      | floating around as always from the wonderful Simon Støvring who's agreed to join us again.            |
| 00:47      | Yeah. Hey, hey, Rose and hey, David. I'm super pleased to be here again. Thanks for having             |
| 00:53      | me. Well, Simon, you are one of our favourite automators. You make applications that help               |
| 00:58      | us do automation better, but you're always kind of up with really cool solutions. And                  |
| 01:03      | your thoughts on automation, I think, are really important to share with the community as one          |
| 01:08      | of the kind of leaders in this space. And we really appreciate you coming back.                        |
| 01:12      | Yeah. I mean, let's see if you're actually going to appreciate all my thoughts. I mean,                |
| 01:16      | you gave me some homework, some things to think about, right? Let's see if you'll appreciate           |
| 01:22      | all the thoughts I have at least. Okay. Well, I mean, anything is, you know, we don't all              |
| 01:27      | have to agree on everything. It's okay. We can still love each other. That's what I say.               |
| 01:30      | Yeah. Simon, for folks who don't know, I mean, you've been a prior guest on the show, but              |
| 01:35      | just for the folks who don't want to go back and listen to that one, tell us a little bit              |
| 01:39      | about yourself and where you are and what you're doing.                                                |
| 01:43      | Yeah, sure. So my name is Simon and I'm an indie developer slash not really an indie                   |
| 01:50      | developer. So I have a full-time job working at a traditional agency. That's my day job.               |
| 01:56      | And then I'd like to say that in the evening, I'm an indie developer. I don't really know              |
| 01:59      | if that qualifies as an indie developer, but that's how I like to think about it. And I                |
| 02:04      | do apps like you, before you mentioned Scriptable, that's one of them. And app for programming,        |
| 02:11      | writing small programs in JavaScript on your iPhone and iPad. I do Rune Stone, a classic               |
| 02:16      | plain text editor, an app called JSON for browsing JSON and [[Data Jar]], a database that's built           |
| 02:24      | for shortcuts. And many of these apps have this thing in common that they're really                    |
| 02:29      | meant for power users like you, Rose and David. And that also means that they tend to tie              |
| 02:36      | a bit into shortcuts. I mean, Rune Stone doesn't, but the three others do.                             |
| 02:41      | Yeah. I mean, you really are someone who strikes me as like you're scratching your own itch.           |
| 02:46      | You like automation. When the tool isn't there that you need, you just build it. You know,             |
| 02:51      | I love that.                                                                                           |
| 02:52      | Yeah. I mean, I usually have this saying that you're not that special, meaning that if there's         |
| 02:58      | something you as a developer need, or me in this case, then build it. And it's likely                  |
| 03:03      | that others will enjoy it because, yeah, you're not that special. Probably others have the             |
| 03:08      | same needs. And that's kind of how I go about my software development. If there's something            |
| 03:13      | I feel like I need, and that could be fun to build, and that I could actually build,                   |
| 03:19      | then I'll usually go ahead and do it.                                                                  |
| 03:21      | Yeah. But you go to the next level with it because, I mean, so many people will get in                 |
| 03:27      | your shoes with your skill set, might make a little quick and dirty tool to do what you                |
| 03:33      | need, something that you keep for yourself, you know, that isn't necessarily very pretty               |
| 03:38      | or whatever, but gets the job done. But you always take it to the next level. And you                  |
| 03:42      | share it with people like me, because I don't have the ability to make things like Rune                |
| 03:45      | Stone or, you know, the apps that you make. [[Data Jar]], for instance, is something I use                  |
| 03:50      | so often. And I really appreciate that you put it out there for the world. And anybody                 |
| 03:55      | listening to the Automator should absolutely check out this website with all these great               |
| 04:01      | apps that he's made, because we got to support guys like you that are bringing these tools             |
| 04:06      | out for us.                                                                                            |
| 04:07      | Yeah, thanks. Yeah, I mean, it's just, it's a lot more fun to build something. Well, it's              |
| 04:13      | fun to build something for yourself, but I also think it's just fun to think of apps                   |
| 04:17      | and products in general in this, like, bigger space that what with others want, and how                |
| 04:21      | can I tweak this small thing a bit so others will like it as well? And it requires a bit               |
| 04:29      | more polish of a product that I quite enjoy doing. Because if you just build something                 |
| 04:35      | for yourself, as you mentioned, you might not polish it that much, because it'll feel                  |
| 04:40      | like you have the time. It'll feel like you want to or something like that. But I quite                |
| 04:43      | enjoy that part of the process. Yeah, making things nice.                                              |
| 04:48      | And it's also probably fun. And so many programmers I know are like puzzle solvers, you know,          |
| 04:53      | for lack of a better term. And like, spending your free time solving these puzzles, figuring           |
| 04:58      | out ways to make these things happen. I can see where you probably enjoy it. But do you                |
| 05:02      | ever see yourself kind of going all in as an indie developer? Or do you like doing it                  |
| 05:07      | as a side thing, side hustle too much?                                                                 |
| 05:11      | Yeah, that's a good question. I don't really know. I mean, of course, I've had the thought             |
| 05:17      | like many others doing software development, I guess that I mean, has been on my mind.                 |
| 05:23      | But I right now I kind of enjoy this, this mix of two things, like having a full time                  |
| 05:28      | job, having my colleagues doing great things with them in a team and then having this other            |
| 05:33      | thing on the side. I mean, it kind of suits me pretty well.                                            |
| 05:37      | Well, that's good. Because I think it's one of those things where you have to actually                 |
| 05:42      | be happy with what you're doing, don't you? You don't want to be, you know, just grinding              |
| 05:47      | stuff, grinding apps out because you have to make them. I feel like a lot of developers                |
| 05:50      | make amazing products and apps when they're doing something that they actually really                  |
| 05:55      | enjoy doing. And as you said, you know, putting that extra polish on there with the with the           |
| 05:59      | perspective that somebody else is going to look at it. And if you're, you know, if you                 |
| 06:02      | do it all day every day, some people that works great for and other people that might                  |
| 06:07      | not work so great for. And as it is, we're getting some great, really, really useful                   |
| 06:10      | apps from you, which I know I use [[Data Jar]] multiple times a day every day. I don't even                |
| 06:15      | think about it anymore, it just happens. But that is so useful to have as just, you know,              |
| 06:21      | a tool that is always there for me that I may not otherwise have, you know, if somebody                |
| 06:26      | else, you know, or if nobody had made that. So thank you.                                              |
| 06:30      | Yeah, sure. Thanks. Yeah, I mean, I hope that it kind of shows in some of my apps that this            |
| 06:36      | is this is this is a passion rather than a, you know, a nine to five that, oh, I just                  |
| 06:41      | need to get this app done now and get it out of the door. I mean, that that's not intended             |
| 06:45      | as a step for like, you know, anyone, I mean, it's totally fine. Others are doing great,               |
| 06:51      | great apps, but just, that's just not really my angle here. It's just, it's, it's a hobby.             |
| 06:56      | It's a passion. And I mean, that, that also means that I can just, I can take my time                  |
| 07:01      | with things and give them the polish that I think they need. Or like, yeah, I just,                    |
| 07:06      | I kind of hope that that shows. Yeah.                                                                  |
| 07:09      | Yes. Yeah. I remember seeing all of those betas of Runestone, which we'll have to get                  |
| 07:13      | to in a bit going out on Twitter and thinking, gosh, is that there's been in beta for a long           |
| 07:17      | time, but not in a bad way that it was there for a long time, just like you were really                |
| 07:21      | taking your time to, to try and get it right and so on. And it's always, you know, interesting         |
| 07:26      | watching any developer go through their own individual process of how they solve things.               |
| 07:31      | Because much like the way that David or I me go through automations, trying to solve                   |
| 07:34      | our problems and looking at various angles and so on, you know, you can see this as similar            |
| 07:39      | sort of process for you in, in your development process. And I certainly find it very interesting,     |
| 07:45      | you know, I always keep an eye on your Twitter, trying to see what's coming up and, you know,          |
| 07:49      | what may or may not be going on. And I know, you know, a lot of my friends are the same                |
| 07:54      | and, you know, I frequently get messages from people after I've told them about one of your            |
| 07:57      | apps going, oh my gosh, did you know about one of other, another one of Simon's apps                   |
| 08:02      | afterwards? So I introduced a friend to Runestone recently, he sent me a message going, oh my          |
| 08:06      | god, have you heard about JSON? It's amazing. It's like, yes, yes, I know JSON, but I'm                |
| 08:10      | glad you're finding these things out again.                                                            |
| 08:12      | Oh yeah, sure, thanks. I mean, that, that really means a lot to, to hear. Yeah, that's, that's         |
| 08:18      | like part of the reason that I do it. And that other others find, find join these apps                 |
| 08:23      | as well.                                                                                               |
| 08:24      | Yeah.                                                                                                  |
| 08:25      | Simon, tell us, tell us what, you know, because I know you build automation tools, but obviously       |
| 08:31      | you're automating as well, because you're making these tools to scratch your own itch.                 |
| 08:35      | What are some of the interesting things you've automated recently with your technology?                |
| 08:39      | Oh yeah, I think like, as you mentioned, I'm a developer, so most of my time I spend there             |
| 08:47      | like automating things that are development related. So like recently I've been playing                |
| 08:55      | around with some continuous integration for some of our like code bases at work, you know,             |
| 09:01      | to just polish those. And then doing that, you know, tweaking the flow for publishing                  |
| 09:07      | apps from, from development to production or taking apps from development to production.               |
| 09:12      | That's like, there are so many steps involved in that. And you really want to automate it.             |
| 09:16      | And it's not really at all different from building a shortcut or something like that.                  |
| 09:21      | But that's, that's some of the things that I spend a lot of my, my day job on these days               |
| 09:25      | automating this, this whole flow for the employees at the company that I'm working for. And obviously  |
| 09:32      | that is basically the same thing for my own projects. There's also a lot of automation                 |
| 09:37      | involved in, in building my apps, maybe because I enjoy putting the automation in there because        |
| 09:43      | you certainly don't need to do like automate part of your development setups if you don't              |
| 09:49      | want to, if that's not your thing. But it is my thing. I quite like automating these                   |
| 09:53      | parts. So just like part of the way that Runestone's documentation is built. I mean, that's all         |
| 09:59      | automated from writing, writing the documentation in line with my, with the code that makes            |
| 10:05      | up my app to like publishing it on the website. But I'm guessing that's not really what you            |
| 10:11      | want to hear about. You probably want to hear about some of the shortcuts automations.                 |
| 10:15      | It really is. Because it's whatever you actually end up using day to day. And you know, so,            |
| 10:21      | you know, continuous integration and development and deployment is something that may be a             |
| 10:27      | slightly alien concept to many of our listeners. But, you know, essentially, if you think about        |
| 10:33      | a process where, you know, you've got, you know, the area where you're doing, you know,                |
| 10:38      | your preparation work, and then you've got the part where somebody said, right, okay,                  |
| 10:42      | this bit's ready to go. This bit can, you know, go out to production. Then, you know,                  |
| 10:47      | when that, whenever that happens, you know, something gets published and email gets confirmed          |
| 10:50      | that it could be sent, whatever it is, then this entire process kicks off and actually,                |
| 10:55      | you know, does all of the actions that's involved. So, you know, I don't know what actions are         |
| 10:59      | involved for you. But if it maybe it was a website update, then it could potentially                   |
| 11:03      | update part of the website, automatically send out a marketing email, you know, if                     |
| 11:06      | it was a new product being added to the website that may or may not happen or something, you           |
| 11:11      | know, and this sort of thing ends up, you know, it sounds very complex and technical                   |
| 11:15      | sometimes, but it's essentially, as you said, it shortcuts just on a slightly different                |
| 11:20      | scale, you know, instead of Lego, it's Meccano or something. Does anybody else know what               |
| 11:26      | Meccano is? I feel like I'm possibly on my own here.                                                   |
| 11:29      | Oh, no, no, no. Yeah, we used that in school for, I think, some math, math classes or so.              |
| 11:35      | I have vague memories of this.                                                                         |
| 11:37      | Well, at least it's not just me. I just remember my dad talking about Meccano. He had a Meccano        |
| 11:42      | kid as a kid and absolutely loved it and did a lot of building and so on with it, which                |
| 11:47      | you know.                                                                                              |
| 11:48      | Meccano, that's the sticks with the magnets, right?                                                    |
| 11:52      | Yeah.                                                                                                  |
| 11:53      | Yeah.                                                                                                  |
| 11:54      | Yeah, we have that.                                                                                    |
| 11:55      | Yeah. Well, there we go. Minor detour taken, but yes. Meccano, by the way, is still available          |
| 12:01      | and is actually available for sale on Amazon. So there we go, folks. I apologise to everybody's        |
| 12:06      | Christmases, but I will put a link to the Wikipedia page in the show notes.                            |
| 12:11      | Well, you know, and also I'd say as someone who's not setting up development environments,             |
| 12:17      | the fact that development is so closely related to text, there is a benefit for anybody who            |
| 12:22      | writes from hearing the stuff developers and programmers are doing because a lot of times              |
| 12:28      | those automations you guys develop for development platforms can be adapted to working on text         |
| 12:36      | and anybody who writes should be interested in text automation. So I find value in that                |
| 12:41      | as well.                                                                                               |
| 12:42      | So, but I was also thinking something you and I have never talked about. So I'm just                   |
| 12:47      | kind of dropping this one on you. It's like in my mind, because you make all these apps                |
| 12:52      | that you are like, you know, super efficient at your Mac. Like when you sit down, do you               |
| 12:57      | have like automated setups for like going into doing work versus, you know, working on                 |
| 13:02      | your blog or things like that? Have you automated all that stuff too? Or do you do that manually?      |
| 13:09      | Oh, yeah. I see what you mean. I think I'll have to disappoint you there, David. Most                  |
| 13:16      | of my workflows are when I'm sitting at the Mac, they are actually quite manual. I think               |
| 13:24      | it's like, it's the good old like how long does it take to set up this automation versus               |
| 13:30      | how many times do I have to do it manually for it to be worth setting up the automation,               |
| 13:34      | right? And I'm sure that on some of my tasks, I have crushed that barrier where I should               |
| 13:40      | have automated it years ago, but I just keep asking myself the question if that's actually             |
| 13:46      | the case. No, I think part of it is also just like, whenever I have some time for building             |
| 13:54      | like some of my own apps, I tend to want to spend the time on that. That's usually my                  |
| 13:59      | evenings and my weekends versus automating it. So if I'm automating something, it's usually            |
| 14:05      | because it's like, obviously going to save me time in the long run, or because I really                |
| 14:11      | need this to be, what do you say, like safe. I can't really allow human errors in this                 |
| 14:19      | part of the process. So those are usually the things that I tend to automate. Not really               |
| 14:26      | as much like my own workflows for setting up, I don't know what it could be like windows               |
| 14:32      | and so on. I don't really do that.                                                                     |
| 14:36      | That's fair enough. It's one of those things where, you know, it can definitely be a time              |
| 14:40      | sink. I know that I must have spent hours, for example, playing with Bunch and other                   |
| 14:45      | similar apps that I've used to do these things. And it occasionally gets me into a little              |
| 14:49      | bit of a pickle. I spent half an hour the other day trying to figure out why [[Discord]]                   |
| 14:53      | was starting on startup on my Mac. And I couldn't track it down. Turns out, I think I'd set            |
| 14:58      | it in the [[Discord]] settings itself. But I was looking, I went through [[Keyboard Maestro]].                |
| 15:02      | Nope, not there. I went through Bunch. Nope, not there. And I spent quite some time trying             |
| 15:07      | to figure out why is this happening. Like there is no logical reason for this to be                    |
| 15:11      | happening and found it in the really obvious place. And that can be sort of the downside               |
| 15:19      | of these things. And are you willing to, once you set this stuff up, spend the time maintaining        |
| 15:24      | it and tweaking it. But also, it can just be a lot of fun to get started with all these                |
| 15:29      | things and see what you can do with it as I find it often ends up giving me other completely           |
| 15:35      | unrelated ideas.                                                                                       |
| 15:36      | Yeah. And that's actually a super good point you have there. Because I mean, I hate to                 |
| 15:40      | admit this or I'm a little embarrassed to admit it. But I mean, I enjoy automating things,             |
| 15:46      | but I really, really hate maintaining them. And I really, really hate when things go breakdown.        |
| 15:52      | I can get really frustrated if I have, you know, a week ago, I set up an automation and                |
| 15:57      | then for whatever reason, a week after, it doesn't work. Maybe because there's some edge               |
| 16:01      | case that I didn't think of or whatever. That will get me really frustrated because then               |
| 16:05      | it interrupts my workflow. Now, now, now it's even worse than when I did it manually. Now              |
| 16:10      | I have to fix this. I have to stop what I'm doing. I have to fix this workflow. And I                  |
| 16:14      | think I know that's part of the reason that some things, I just never get around to automate           |
| 16:20      | because it just, I dread for the day that it stops working.                                            |
| 16:23      | Yeah, I agree. And there is like this sense of betrayal, you know, it's like I put all                 |
| 16:28      | this time into it and now it's not doing exactly what I want. And then you say, well, I'm never        |
| 16:32      | going to do that again. And I do think that one of the topics that we try to like circle               |
| 16:38      | around on this show is, is these various automation platforms because some are more reliable           |
| 16:43      | than others. And I think people who want to automate need to kind of make smart decisions              |
| 16:47      | about where they automate different types of problems if they want to get that reliability.            |
| 16:53      | But I totally get it. And, and I also like the idea that, you know, oh, I don't build,                 |
| 16:59      | you know, a tweaky little automation so much as I build apps. And, you know, it's like                 |
| 17:05      | the difference between, you know, sharpening your chisel and cutting wood and get it.                  |
| 17:09      | Yes, I think it's, it's one of those things where it also depends on, on who's doing the               |
| 17:15      | thing right as to how they solve the problem. You know, some people will see a problem of              |
| 17:19      | there's a pile of rocks here and we need the pile of rocks over there. And some people                 |
| 17:23      | will just grab a wheelbarrow and they'll start moving them. Some people will just pick up              |
| 17:26      | rocks and start moving them with their hands. And other people will build, you know, a little          |
| 17:33      | automation platform that will pick up the rocks and move them to where, to somewhere else              |
| 17:37      | and, and potentially even, you know, plan for the future of the time where we're not                   |
| 17:40      | going to need to move rocks from pile A to pile B, but instead some of them will need                  |
| 17:44      | to go from pile A to pile B and some of them will need to go from A to C. And how do we,               |
| 17:49      | how do we differentiate between these rocks? You know, how do, how, how can I get the camera           |
| 17:52      | to automatically recognise the size of this rock? You know, and, and, and that's the point             |
| 17:58      | where it gets much more difficult. There's an excellent XKCD of somebody asking a developer            |
| 18:04      | to, to build something that recognises whether or not somebody was in a national park when             |
| 18:09      | they took a photo. And the developer is like, yep, that's fine. And then we want you to                |
| 18:14      | automatically recognise which kinds of birds are in that. I'm going to need 10 years and               |
| 18:18      | a team of engineers. You know, it goes from simple, like, are these GPS coordinates within             |
| 18:23      | this range of GPS coordinates? Yes or no to, and I need a computer to identify this. It's,             |
| 18:28      | it's sometimes very easy to accidentally start doing overkill with your automations. And it's          |
| 18:33      | also very interesting seeing that some people are the kind of person who will, you know,               |
| 18:38      | find a build, build a, build a solution to the problem rather than do the solution to                  |
| 18:44      | the problem. If that makes sense, not that you're not solving the problem, but you're,                 |
| 18:47      | you're building a, a different way of solving the problem, which is very, very cool.                   |
| 18:51      | Yeah, I think your example with the, the real bar was, was excellent. You went from having             |
| 18:55      | a super simple problem that's moving the, moving the rocks to having an overly complex                 |
| 19:02      | problem. And automations can be like that sometimes. That's not to say people shouldn't                |
| 19:06      | automate. I mean, this would be the wrong show to say that on. And that's not what I                   |
| 19:09      | want to say, but we just, we have to pick the places that we automate, that we spend                   |
| 19:13      | our time, right? And I think I'm a little piggy when it comes to that.                                 |
| 19:18      | Yes, yes. Choose your battles wisely is always, always the, the good places start.                     |
| 19:25      | But the flip side of that is get a lot of good tools. You know, to use the battle analogy,             |
| 19:30      | if you've got more weapons, you can, you can do more battle and, but also, you know, you,              |
| 19:36      | if you're going to go into battle to do automation, why not have some good tools? And that's           |
| 19:40      | what Simon is bringing to the table.                                                                   |
| 19:44      | This episode of the automators is brought to you by masterclass. Go to masterclass.com                 |
| 19:49      |/automators this holiday and give one annual membership and get one for free. With                |
| 19:54      | masterclass, you can learn from the world's best minds anytime, anywhere, and at your                  |
| 19:59      | own pace with over 180 classes from a range of world-class instructors. That thing you've              |
| 20:05      | always wanted to do is closer than you think. With masterclass, you can learn the art of               |
| 20:10      | negotiating from Chris Voss, discover the art of business strategy with Bob Iger, the                  |
| 20:15      | guy who ran Disney, learn cooking from Gordon Ramsay or, or learn about disruptive entrepreneurship    |
| 20:21      | from Richard Branson. I recently took a masterclass from Petra Collins called capture your vision      |
| 20:27      | through photography. I really like photography, but I've never really had the eye of a photographer.   |
| 20:33      | At least I didn't really know how to go about it. In this course, we got hands-on instruction          |
| 20:38      | from Petra Collins. I learned about lighting portraits and how to take a picture of my                 |
| 20:43      | subject and creating my own photo series. The lighting part in particular was really                   |
| 20:48      | helpful for me. I never really understood the idea of backlight and how to use it every                |
| 20:52      | time I tried. I made the photo worse. Well, Petra taught me how to do this right, and now              |
| 20:57      | my pictures look better. The point is, there's something for everyone in masterclass, and              |
| 21:01      | I highly recommend you check it out. This holiday, give one annual membership and get                  |
| 21:06      | one free. Go to masterclass.com/automators now. That's masterclass.com/automators.         |
| 21:13      | And our thanks to masterclass for the support of the Automators podcast and all of Relay               |
| 21:18      | FM.                                                                                                    |
| 21:19      | So, Simon, you have a sort of armory at your disposal, essentially, if we're continuing                |
| 21:27      | with the battle analogy. And of course, the first thing that got you onto automators and               |
| 21:31      | grabbed David and my attention was Scriptable. And we just kind of wanted to check in on               |
| 21:38      | Scriptable. It's obviously still there, still in the app store. I was using it just the                |
| 21:41      | other day and having great fun with it and finding that it's still working just as well                |
| 21:49      | as ever, which is not a surprise. And yeah, we were wondering what you think about Scriptable          |
| 21:55      | and how it's going. Are you still surprised, potentially, by how many people are using                 |
| 22:00      | it?                                                                                                    |
| 22:01      | Well, the short answer is yes. I am actually very surprised by how many people are using               |
| 22:06      | it. I don't really pay attention to numbers like that, like how many times have my app                 |
| 22:12      | been downloaded, how many people are using it, how many sessions do people have, all                   |
| 22:17      | of these metrics that some developers like to really optimise for and spend their time                 |
| 22:24      | investigating into depth and checking how many people that uses one feature and can                    |
| 22:29      | you do some A-B tests to optimise all of that. I don't really spend a lot of time on that.             |
| 22:36      | But just, I think it was last week or the week before, I went to check how many people                 |
| 22:41      | are actually using my app because I'm working on a big update for [[Scriptable]] and I needed              |
| 22:45      | some sense of like, who am I developing for, where are they based and so on. So I actually             |
| 22:50      | just checked these numbers recently and I got very surprised by how many people are                    |
| 22:54      | using Scriptable. And yeah, it just, it kind of warms my heart that something that I thought           |
| 23:01      | of four years ago and that I just built it as a hobby, I still like going kind of strong               |
| 23:08      | to this day. So that's nice.                                                                           |
| 23:12      | Yeah, it's always interesting whenever I run into folks and they're like, oh yeah, I've                |
| 23:17      | been writing lots of stuff in Scriptable recently. And I think because you've got things like          |
| 23:22      | the widget support there and so on as well for the home screen widgets, it really is                   |
| 23:28      | a great app where you can completely and fully program your own widget without having to               |
| 23:34      | write your own iOS app. And of course, you've done all the heavy lifting in the back end               |
| 23:38      | so that the widgets themselves can be updated and so on automatically and things like that,            |
| 23:43      | which means that somebody who already knows a little bit of JavaScript can then say, okay,             |
| 23:49      | so I am going to, if it's a Tuesday, I'm going to try and get this comic, but if it's                  |
| 23:55      | a Wednesday, I'm going to get this web comic and pull that in and display that in a widget             |
| 24:00      | or they can go really nerdy and complex and build their own, I don't know, [[Todoist]] widget              |
| 24:06      | with JavaScript if they wanted to, which is really cool that, you know, that's something               |
| 24:10      | that's possible and it's not just, you know, get some data and, you know, do something                 |
| 24:16      | that previously you couldn't do in shortcuts, you know, for a long time, a lot of us, myself           |
| 24:19      | included, were using [[Scriptable]] to edit reminders because editing a reminder was not something         |
| 24:24      | you could do in the [[Shortcuts]] app. And, you know, and you came to our rescue and [[Alex Hay]]                 |
| 24:30      | Hay did the same thing with [[Toolbox Pro]], so there were two different ways of doing it.                 |
| 24:34      | And then, fortunately, the [[Apple Reminders\|Reminders]] team were like, oh, you mean you actually want                    |
| 24:37      | to like change your reminder? Oh, that's not something we thought of. But I guess we can               |
| 24:42      | add that to shortcuts. Like, thank you. Thank you, [[Apple Reminders\|Reminders]] team. That's, that's good. Finally,       |
| 24:46      | catching up on what some other developers have been solving for you for the last couple                |
| 24:49      | of years. But yeah, it's always, you know, a strange, like, watching, you know, other                  |
| 24:57      | people solve these problems and the main app developers not necessarily doing it, but it's             |
| 25:00      | really good that Scriptable has been one of those ones that you can rely on to do that                 |
| 25:04      | because it has got such good access to all things.                                                     |
| 25:07      | Yeah, so I mean, and we just kind of jumped into a bit Scriptable what it is, it's an                  |
| 25:11      | app for your phone or your iPad, and it allows you to write JavaScript, which will automate            |
| 25:18      | your phone. It's like an alternative automation platform. But instead of using like shortcuts,         |
| 25:24      | you write [[JavaScript]]. But in addition, shortcuts can run these JavaScript applets that you             |
| 25:32      | make. So you can add features to Shortcuts, but you can also just use a separate platform.             |
| 25:36      | And even if you don't speak a lick of JavaScript, it comes with a bunch of nice ones built in          |
| 25:40      | to kind of get you a start. I am the least qualified on this podcast to talk about it                  |
| 25:46      | when it comes to JavaScript. I'm like a blind hog, smelling for an acorn, you know, occasionally       |
| 25:51      | I find one. But I'm able to cobble them together because JavaScript has such a big resource            |
| 25:58      | on the internet. There's so many people that have shown you how to do stuff between that,              |
| 26:02      | the samples. It really does give you some extra tools like Rose was saying, historically               |
| 26:09      | we would use it for to get around problems with [[Apple Reminders\|Reminders]], but there's always little                   |
| 26:13      | bits of glue that you need for automation or maybe even something fancier that you can                 |
| 26:19      | only do with a bit of JavaScript. It's really great for calling out to the internet. Like              |
| 26:24      | you've got the built in one for the current weather and the polling count. I think those               |
| 26:28      | are excellent where it's just going to the internet, figuring it out and reporting back                |
| 26:31      | to you. And it's a really interesting application. I think if you're interested in automation          |
| 26:38      | on iOS or iPadOS, this is a really good extra tool in your belt.                                       |
| 26:44      | Yeah, I would absolutely agree with that, especially if you've got complex data coming                 |
| 26:50      | back because [[Shortcuts]] has got the ability to do something like get contents of URL.                   |
| 26:54      | And then whatever comes back, if it's a [[JSON]] or an [[XML]] will be a dictionary that you can               |
| 27:01      | go through. But it's a bit tricky at times to hammer down into some of that data. And                  |
| 27:08      | especially if you've got, say, a raise of data where it's a list with... It could have                 |
| 27:13      | anywhere between five and seven responses. It can be kind of tricky to go through all                  |
| 27:19      | of that. You'll end up nesting lots of repeats and so on to try and get all the way into               |
| 27:23      | it. But it feels like it's a lot easier in Scriptable and JavaScript for a lot of this,                |
| 27:31      | just because, especially JSON, it is JavaScript object notation. So it's not surprising that           |
| 27:36      | it's quite easy to manipulate. And I'm just very glad that Scriptable is there for those               |
| 27:40      | people who are willing to take a step up from Shortcuts to something that is going to make             |
| 27:47      | their life a little bit easier, or a lot easier in some cases, but they can still use it as            |
| 27:52      | part of a Shortcut. So you don't have to throw away everything that you've already done to             |
| 27:55      | replace the whole thing. You can just build the replacement to this chunk of actions in                |
| 28:01      | Scriptable and then replace that chunk and still have the rest of it in Shortcuts where                |
| 28:04      | you feel comfortable.                                                                                  |
| 28:05      | Yeah, I'm glad to hear that. That's the motivation I had when I started developing Scriptable,         |
| 28:15      | which is now more than four years ago. Back then, there was no Shortcuts. It was still                 |
| 28:21      | called Workflow. And as a developer, I thought that Workflow was super great, and Shortcuts            |
| 28:29      | is super great to this day. But it didn't really fit the way that I like to think about                |
| 28:35      | problems as a developer who's used to writing code. So these drag-and-drop blocks, it didn't           |
| 28:42      | feel flexible enough for me. I mean, I've gotten more used to it over the years. But                   |
| 28:46      | back then, it's going to take me half an hour to make this small program in Workflow or                |
| 28:53      | Shortcuts, and I could do it in five minutes in JavaScript. So that's really why I started             |
| 28:58      | building Scriptable back then. And I like to think of it as what [[AppleScript]] was to automate           |
| 29:04      | us. No, what was I called? The Mac App? Automator. Yes. Automators is the podcast. Automator           |
| 29:12      | is the app. Yeah, so I like to think of it as what AppleScript was to automate us back                 |
| 29:18      | then. That was like Scriptable to Workflow or Scriptable to Shortcuts. And to your point,              |
| 29:25      | there are some operations on data, on maybe JSON in particular, that's easier to do in                 |
| 29:32      | JavaScript than it might be in Shortcuts, especially if you're like used to programming                |
| 29:37      | in whatever language, which was part of the motivation for doing the run inline action                 |
| 29:43      | a few years ago. So you can even have a Shortcut and you can drag a JSON or JavaScript block           |
| 29:50      | into your Shortcut. So it lives within the Shortcut and you can run a piece of JavaScript              |
| 29:55      | in Scriptable, even though you're running a Shortcut. And I often use that to do some                  |
| 30:00      | data manipulation. Yeah, yes. And also, you know, I think it's also not just necessarily               |
| 30:06      | for people who are ready to move on from Shortcuts to something more powerful, but also for            |
| 30:12      | people who are looking at Shortcuts and they're not necessarily understanding how to process           |
| 30:17      | the data there. Some people, you know, just find that they're that doing things one way                |
| 30:21      | is easier than the other, you know, if you're left handed or right handed, you may find                |
| 30:25      | it easier to do certain things with your left hand or your right hand. But there are things            |
| 30:30      | that nearly every person does, you know, just with whichever hand works best for their brain.          |
| 30:35      | So for example, I am right handed. When I juggle, as far as I'm doing three-ball juggling,             |
| 30:39      | I should start with two balls in my right hand. I can't do that. I have to start with                  |
| 30:43      | two balls in my left hand. Why? I don't know. That's what my brain wants to do and that's              |
| 30:47      | easier for me. And similar to that, some people may find it easier to go through, you know,            |
| 30:52      | data that they've got back from a URL in code and process it that way. I certainly                     |
| 30:59      | know that debugging, figuring some of this data stuff out when your data structure is,                 |
| 31:05      | you know, bigger or more complex is, I find it a lot easier to do in Scriptable. So I've                |
| 31:09      | still got a lot of actions which are going through, you know, big, big chunks of data                  |
| 31:14      | that it's getting back from an API to pluck out the right bits for me with Scriptable                  |
| 31:20      | just because I could do it in shortcuts, but drilling down to that data and that level                 |
| 31:27      | and figuring out, you know, and which of the, you know, 16 array elements that I get back,             |
| 31:33      | you know, there are 16 items in this list that are returned and I need two of them.                    |
| 31:37      | Which ones do I need? That's something that's very easy to do in JavaScript, not so easy               |
| 31:40      | to do in shortcuts. It can be done in shortcuts. It's just a little trickier to do.                    |
| 31:46      | So you mentioned that Scriptable isn't necessarily for people who are ready to move on from shortcuts  |
| 31:52      | to something more powerful. And I just wanted to mention that that's not really how I like             |
| 31:56      | to think about it either. I don't think Scriptable is more powerful than shortcuts in many ways        |
| 32:01      | quite the opposite. Shortcuts is super powerful. I think more of them as two apps that can             |
| 32:06      | live side by side. I mean, I started developing Scriptable way before, no, actually not way            |
| 32:12      | before, maybe like a few months, four months before shortcuts was a thing. And I thought               |
| 32:17      | that it would be like, yeah, I didn't really have a plan for the app back then. To be honest,          |
| 32:21      | I was just building something on my own that I thought was fun. And then Apple came along              |
| 32:26      | and introduced SiriKit. And it was immediately clear for me that this, this is a companion             |
| 32:31      | to shortcuts. So they introduced SiriKit in like June at Adobe 2018, I believe. And it                 |
| 32:39      | just Scriptable immediately clicked for me. I knew that it had to be a companion for shortcuts.        |
| 32:45      | So it was actually just one of the first shortcuts apps, I think we call them to these days,           |
| 32:51      | like, you know, in the same category as Toolbox Pro. Yeah, yeah, Widget Smith, sorry.                  |
| 32:59      | Charlie, that's the one I was talking about. Yes, yeah, there's lots of these great ones.              |
| 33:05      | And yes, you know, it's in some cases, it can be for somebody who wants to dip their                   |
| 33:09      | toe into the programming world without leaving behind, you know, all of the things that they've        |
| 33:14      | already built and created with shortcuts. But in other cases, it is a companion just                   |
| 33:19      | like Apple when they brought shortcuts to the Mac, they added a run AppleScript action                |
| 33:24      | and run shell script and so on. Because yeah, all of these things can work together. So                |
| 33:27      | yes, that is a very good point.                                                                        |
| 33:30      | So at this point, Scriptable has been around a while. Where do you want to go with the app?            |
| 33:35      | I mean, do you have big plans or just want to keep it running? I mean, what's your plan?               |
| 33:39      | That's a great question. I do, I do have big plans. It's so for the past two years, I've               |
| 33:46      | been working on this, this other app Runestone. And I have maybe not used that much time on            |
| 33:52      | Scriptable in the meantime, because this other app has just taken up a lot of my time. And             |
| 33:57      | that's like a really good reason for that. So Runestone is a text editor and Scriptable                |
| 34:02      | uses a text editor that that's a big part of the app. And I wanted to build a custom                   |
| 34:06      | text editor my own text editor that I could bring into Scriptable. And that that happened              |
| 34:11      | to take a lot more time that I had imagined. So bringing that into Scriptable is, is like              |
| 34:17      | the next step. But that's just, that's just a small step in like a bigger thing I want                 |
| 34:24      | to do with Scriptable. So anyone who might have like followed me online for the past                   |
| 34:30      | few months might have seen that I'm also working on, on bringing a bridging JavaScript                 |
| 34:35      | to a [[SwiftUI]]. So doing a one to one bridge between the JavaScript side of things and                  |
| 34:42      | then native [[SwiftUI]] components. So what I really want to do is making, making it possible             |
| 34:48      | for people to use, if not all, then many of the, the concepts that we're used to in [[SwiftUI]],       |
| 34:57      | Apple's new framework for, for building UIs and making, making those available to                  |
| 35:04      | people who are more comfortable with JavaScript. And hopefully if everything goes as planned,          |
| 35:10      | because this is still in like the exploration phase, but, but things seem to be turning                |
| 35:14      | out quite well. But if, if they go well, bring that into Scriptable. So that's, I think                |
| 35:20      | that's like, that's, that's the next step. Because as I said a few minutes ago, Scriptable             |
| 35:27      | really started out as a companion to shortcuts. At least when it launched, it was a companion          |
| 35:32      | to shortcuts, but it has grown into something a little different than that. I mean, these              |
| 35:37      | days people are mostly using Scriptable to build widgets. I think just, just this week                 |
| 35:44      | I got a mail from, from a user who lives in Ukraine and who built a widget that shows                  |
| 35:53      | if, because it like Ukraine, they have power outages these days. And this user built a                 |
| 35:58      | widget just shows if, if there, there seems to be a power outage based on, on some metrics             |
| 36:05      | that, that they have like built into this script. I haven't looked closely at the script.              |
| 36:09      | I don't know exactly what it's doing, but it was just so heartwarming to get this support              |
| 36:13      | email because it was very positive. And this user was like, see, I've, I've built this                 |
| 36:17      | and people love it. Yeah. And that's just an example. People, people are really using                  |
| 36:22      | Scriptable to build widgets these days. And I want to figure out like, how does Scriptable             |
| 36:29      | look in 2022? Or maybe it's, it's likely 2023 before I can even think about launching this             |
| 36:35      | next thing. But how does it look now? Like people have spent so much time building UIs                 |
| 36:42      | into widgets. So I want to think about like, how can I make that experience even better?               |
| 36:47      | Yes. Yeah. That, that is always something that some people really struggle with taking                 |
| 36:51      | something from a very abstract context and visualising what it looks like, right? You                  |
| 36:57      | know, it can be quite tricky. That's one of the reasons why I think widget pack, that's                |
| 37:01      | the name of the app that I was trying to think of earlier. It has that preview action inside           |
| 37:04      | of shortcuts. So as you're building your widget, you can actually preview what the widget's            |
| 37:08      | going to look like. Yeah, that's super cool. Because otherwise, you know, you've just got              |
| 37:12      | this, this, this abstract. Okay. So I built like a, I built a text thing. And then I,                  |
| 37:18      | I wrapped it in, you know, a H stack. So that's a horizontal stack. So if I put more things            |
| 37:25      | in that, then that's going across. And then I put that in a vertical stack. So the, then               |
| 37:29      | anything that I put underneath that is going to be going top down and trying to remember               |
| 37:33      | that and, and visualise it in your head. And of course, the inverse of starting out with,              |
| 37:37      | I know that I want like this icon over here on the left. And then I want text on the right,            |
| 37:42      | which is like a title and then a subtitle and then some content, like trying to figure                 |
| 37:46      | out how to translate that, especially if you're new to this stuff and you haven't worked with,         |
| 37:52      | with [[SwiftUI]] and, you know, or CSS before where you had to try and figure out how to                   |
| 37:57      | lay this stuff out can be very, very tricky. There's, there's a reason why, you know, there's          |
| 38:02      | the folks who create the designs in Adobe and design or publisher or similar. And then                 |
| 38:07      | there's the folks who, who write the code that make the design. And there, there's not a               |
| 38:10      | huge amount of crossover between those in my experience. You know, there's, there's some               |
| 38:14      | people saying, this is what's going to look good. And there are some people going, and                 |
| 38:17      | I will write the code that makes this thing do that. Hopefully fingers crossed unless                  |
| 38:21      | something goes very, very wrong. So, so yeah, it's, it's, it's certainly interesting. And              |
| 38:27      | I'm looking forward to the, the beta of that when, whenever you get around to it. So I                 |
| 38:31      | feel free to put me on the early beta list and I will do my best to test it to its limits.             |
| 38:36      | I've, I've been playing a lot with [[Swift Playgrounds]] recently and [[SwiftUI]]. So fingers crossed          |
| 38:40      | I'll be able to translate that knowledge back into JavaScript. And yeah, I can't wait to               |
| 38:43      | see what you've got for us.                                                                            |
| 38:44      | Sure. I'll, I'll make sure to add you to the beta and in many months time probably.                    |
| 38:50      | That's fine.                                                                                           |
| 38:51      | What I really like about this is it's almost like, kind of like the app going in full circle           |
| 38:55      | coming back now to [[Swift]], right? You know, where it started as a, really an option to                  |
| 39:01      | what Apple was doing or what was coming. And now it's back in the middle of, I don't know,             |
| 39:07      | it's, I like, I like the idea of that. And that is a, that is a big plan. I asked you                  |
| 39:13      | that question, not knowing the answer. And you really, you have big plans, Simon. It's                 |
| 39:18      | very clear.                                                                                            |
| 39:19      | Yes.                                                                                                   |
| 39:20      | Thanks. Yeah, it is really a, it is really full circle. I didn't really think of that                  |
| 39:25      | because it definitely didn't start as a shortcuts companion, but it turned into that. And now          |
| 39:31      | I want to see what's, what's the next step?                                                            |
| 39:33      | Yes. Yes. I'm very glad at the beginning though that you mentioned that you had a big update           |
| 39:38      | coming to it. So, uh, yes, that's what that's always good to hear. It's always very exciting           |
| 39:42      | whenever there are new updates coming.                                                                 |
| 39:46      | This episode of Automated is brought to you by LinkedIn Jobs. These days, every new potential          |
| 39:50      | hire can feel like a wager and a high stakes game for you and your small business. You                 |
| 39:54      | want to be 100% certain that you have access to the best qualified candidates available.               |
| 39:58      | That's why you have to check out LinkedIn Jobs. LinkedIn Jobs helps the right people                   |
| 40:02      | find your team faster and for free.                                                                    |
| 40:06      | Last time I was looking for a job, I swung massively between worldly overwhelming and                  |
| 40:10      | insanely underwhelming. And you know what? One of the things that I made sure to do was                |
| 40:14      | check out every single company on LinkedIn. And you know what? Those purple hashtag hiring             |
| 40:19      | frames certainly helped me out. It is so quick to create a free job post to LinkedIn, and              |
| 40:24      | it literally just takes minutes. Then you add your job and that purple hashtag I just                  |
| 40:28      | mentioned to your LinkedIn profile, spread the word that you're hiring and simple tools                |
| 40:32      | like screening questions make it easy to focus on candidates with just the right skills                |
| 40:35      | and experience. So you can quickly prioritise who you'd like to interview and hire.                    |
| 40:41      | Meaning you can be sure to finish the year strong with the right team member on board. It's                  |
| 40:44      | why small businesses rate LinkedIn Jobs number one in delivering quality hires versus leading          |
| 40:48      | competitors. LinkedIn Jobs can help you find qualified candidates you want to talk to faster.          |
| 40:54      | Post your job for free at LinkedIn.com/Automators. That's LinkedIn.com/Automators          |
| 41:00      | to post your job for free. Thumbs and conditions apply. Our thanks to LinkedIn Jobs for their          |
| 41:04      | support of the show and all of relay.fm.                                                             |
| 41:08      | Well, Simon, we've been talking about this new app Runestone for a while. And so this                  |
| 41:13      | is the first time we get to share this with the audience. Runestone is a text editor.                  |
| 41:18      | And the way it stands for me, and I don't know if you intended this, but I've always                   |
| 41:23      | felt like that the iPhone needed a [[BBEdit]], right? You know, an app that's just really                 |
| 41:29      | good with programming text and made by a conscientious developer. And the very first time I downloaded |
| 41:35      | Runestone, that the exact vibe I got, I'm like, oh, we finally got [[BBEdit]] on the iPhone.              |
| 41:42      | And it really is a powerful text editor. I mean, this is for some companies like a full                |
| 41:48      | time thing. And you managed to put together one with code highlighting and just like a                 |
| 41:54      | lot of great features in your free time. How'd you do it? And how's it going?                          |
| 42:00      | Um, yeah, well, thanks for the kind words. I never really, yeah, I never really aimed                  |
| 42:08      | to be like the [[BBEdit]] file as quite the opposite. And I think [[BBEdit]] does a ton more things          |
| 42:14      | than Runestone does currently and will ever do. [[BBEdit]] is certainly a powerful tool.                  |
| 42:21      | Um, but yeah, I started building Runestone in December 2020. I think, um, yeah, I think                |
| 42:28      | it was actually the first of December, because I remember I was like, I'm going to take one            |
| 42:32      | month out of the calendar of my spare time at least and see how far can I get building                 |
| 42:38      | my own text editor? Because as I mentioned a bit earlier, I wanted a custom text editor                |
| 42:43      | in my app Scriptable, which obviously a big part of that app is a text viewer way, right?              |
| 42:50      | Um, JavaScript. And that has previously, uh, and actually it still is to this day based                |
| 42:55      | on some open source component that isn't, um, that performant, especially not with large               |
| 43:00      | files. And I knew that if I wanted to take Scriptable to the next level, I had to build                |
| 43:05      | my own, um, text editor for various reasons. So I wanted, I, I, I promised myself that                 |
| 43:11      | I would spend a month doing that. And if it turned out to be promising after a month,                  |
| 43:16      | then I would probably continue working on it or otherwise I'd scratch it. And well,                    |
| 43:21      | it, it, it did seem promising when, uh, after a month, uh, and I thought like, oh, okay,               |
| 43:26      | maybe a few more weeks, maybe a few more months and I'll be done. But it turned out that it            |
| 43:30      | took me like, I think one and a half year from I started the development to, um, to                    |
| 43:35      | the app being on the app store. And it, I never really intended it to be a standalone                  |
| 43:39      | app. Um, so that's also why I'm, I'm very, very happy to hear those, uh, those words                   |
| 43:43      | from you, David. Um, that's, uh, yeah, um, that, that, that really warms my heart. Um,                 |
| 43:51      | because I never expected it to be a standalone app. It's just the, the standalone app that             |
| 43:57      | we have today was actually meant to be the example app for my open source framework.                   |
| 44:02      | So rune stone is the core of rune stone is released as, as an open source framework that               |
| 44:08      | any developer can use, uh, in their own app. Um, and to a company that open source framework           |
| 44:15      | had to build an example app to know, you know, show developers how to integrate it into their          |
| 44:19      | app and the features of the framework and so on. And as I was building that example                    |
| 44:25      | app, I was just, at one point I was just looking at it thinking, hmm, this is actually the             |
| 44:30      | text editor that I wish existed fire is because it's super simple. Uh, it uses this standard           |
| 44:37      | document browser. Um, people might think of it as like the files app, but it's like a                  |
| 44:43      | UI component that developers can integrate into their own app, but it looks and behaves                |
| 44:47      | exactly like the files app. And when you select the file in, in that UI component, you just            |
| 44:54      | presented with a big text view and that's basically it. And I just found myself thinking               |
| 44:59      | this, this is what I want. And from there on it, I just decided to release it as his                   |
| 45:04      | own app. Yes. And it's available for free as well. There is an in-app premium purchase,                |
| 45:10      | which I believe is, um, $9.99 US dollars. I know it was $8.99 over here in the UK, um,                 |
| 45:15      | which unlocks all of the, the extra features like line numbers and so on because, you know,            |
| 45:19      | you just spent 18 months on this. So I think that's well deserved. Um, but I find, you                 |
| 45:24      | know, um, on my iPad, I tend-to-end up using, uh, Texttastic because it's got, you know,              |
| 45:28      | uh, saved, saved folders and things like that. And I'm often using it to do, um, edits on,             |
| 45:33      | you know, larger projects that I, I've got in from, say, working copy or similar. But                  |
| 45:37      | on my iPhone, if I want to edit a text file, um, or if I just want to do a quick edit on               |
| 45:42      | something on an iPad, then I will be reading for Runestone because as you said, it starts              |
| 45:46      | in that file bar. So the view that, you know, a lot of people are very familiar with, it's             |
| 45:50      | the same thing that Pages does when you open Pages, unless you've already got a document               |
| 45:54      | open, you know, it takes you to that same view. Um, and you know, it's, it's really nice               |
| 45:59      | to just be able to go, yep, this is the file and okay, it, it knows that it's a PHP file               |
| 46:04      | and it opens it and it does syntax highlighting. I've just opened a little file called welcome         |
| 46:09      | to json.json. Um, and, uh, it's got all the syntax highlighting there automatically. Um,               |
| 46:15      | you know, obviously it recognises what a JSON file is. Um, but it's also got, you know,                |
| 46:20      | the ability to do the simple things which are not so simple on iOS, like fix the formatting            |
| 46:25      | of something. Um, and, and other things which, you know, I personally really appreciate, um,           |
| 46:30      | because if I'm editing something like a JSON file, you know, I, I just, you know, you don't            |
| 46:35      | need the formatting to be pretty, but you need the brackets to match. Um, and it's a lot easier        |
| 46:41      | to spot a problem when you've got good formatting on things. Um, so thank you for that. I, you         |
| 46:46      | know, I, I use it all the time. Um, and, uh, yeah, it is just one of my, one of my little              |
| 46:52      | go-to apps, um, that, uh, I have for a number of, uh, things I've used for a number of things.         |
| 46:57      | I didn't realise, um, the other day I was looking, I was like, what is this app in my,                 |
| 47:01      | in my app library? Um, and I was, I changed the icon to use the blueprint icon. Um, which,             |
| 47:06      | uh, which confused me for a bit, uh, because I actually really like the default icon, the              |
| 47:11      | textual icon. It's just lines of text with different colour blocks on. Um, but it's very,               |
| 47:16      | very nice. And, uh, yeah, I think it's one of those things. I, I, I've, I use Runestone.               |
| 47:21      | But I use Runestone in a lot more places than I, than I realised. I was looking for a new              |
| 47:27      | app, uh, the other day, and I can put a link to this one in the show notes. I was looking              |
| 47:30      | for an app that could do, um, HTTP requests. Um, so for folks who are going, huh, HTTP                 |
| 47:35      | requests, it's the same as the get contents of URL in, in shortcuts, but I just wanted                 |
| 47:39      | to be able to do it, uh, repeatedly, uh, very quickly, um, without, you know, building a               |
| 47:44      | shortcut for this. Um, and so I looked and I was browsing through apps. Um, and then                   |
| 47:49      | I found one and I realised that the update notes, which at that point were from a few                  |
| 47:52      | days ago, they're from a few months ago now said, Oh, and I've switched to using the Runestone         |
| 47:57      | editor from Simon Støvring. It's open source. And I was like, okay, purchased sold. Thank                |
| 48:02      | you very much. That is the app that I am looking for. A developer who actually is, you know,           |
| 48:07      | not just using what you've done, um, but, you know, crediting you with it as well, because             |
| 48:11      | of course you said it is, it's open source and you've got a license that is allowing                   |
| 48:15      | other people to, to actually use it. Um, you know, I was really pleased to see there's,                |
| 48:20      | you know, there's not just this developer, but there's lots of developers out there using              |
| 48:23      | this framework, you know, clearly your, your hard work is being appreciated by more than               |
| 48:28      | just the people using the app.                                                                         |
| 48:30      | Yeah. Um, it's the developer community have been, or like the, at least the developer                  |
| 48:36      | community on the iOS side have been surprisingly, um, welcoming to this, this open source framework.   |
| 48:44      | It's gone a bit better than I hoped for when I, when I started building it, um, I really               |
| 48:48      | just built it because well, I needed it. And I thought if, if I needed others might need               |
| 48:54      | it as well, because there wasn't really any performant, um, open source text editor with               |
| 49:01      | the feature set that I needed, you know, such as high line numbers, highlighting the selected          |
| 49:06      | line, um, no line wrapping. So, you know, you can scroll horizontally. That's, that's                  |
| 49:11      | not really a standard thing on iOS either. And I couldn't find any open source framework               |
| 49:15      | that did all of this. Um, yeah. So it just felt natural to open source it and, uh, have                |
| 49:22      | others, uh, other developers benefit from this if they wanted to, because I think like                 |
| 49:27      | these days we are seeing, um, a bit more powerful apps on the, on the, on the iPhone and the           |
| 49:35      | iPad than we have done previously. And, um, so things like HTTP, um, clients or API clients            |
| 49:44      | or whatever you want to call them. Um, at least to me, they, they're quite new. I don't                |
| 49:49      | think we have had those years ago, at least not this polish that we have to these days                 |
| 49:55      | to today. Um, and just these, these apps also need a, a performant text editor. Uh, it might           |
| 50:04      | not be as big part, uh, as big, uh, a part of the app as it is in Runestone because that               |
| 50:09      | is like ad text editor, but it's still an important part of the, of those apps. Um,                    |
| 50:14      | and I just, I want those apps to be, if I can somehow improve those apps, if I can somehow             |
| 50:20      | help out, I'd, I'd love to. And that's, that's really the motivation with, with open sourcing          |
| 50:24      | Runestone. Um, yeah. So I'm happy to see that the, the HTTP client that you mentioned                  |
| 50:30      | have, have adopted it as well. Yeah. Yeah. It's, it's one of those things. I keep seeing               |
| 50:34      | it in, in more and more places. Um, and it's just really interesting finding all of these              |
| 50:39      | apps that are going, Hey, uh, we have text. Oh wait, we, we need to be better at text.                 |
| 50:45      | How do we do this? Oh, thank you, Simon. I, I appreciate the fact that you have already                |
| 50:50      | done the thing that makes us better at text. Text is a small part of our app, but we're                |
| 50:54      | going to use this. And you know, also for anybody who is, um, you know, curious about                  |
| 50:58      | you know, what is the code behind Runestone? You can go look at it on GitHub. It's, it's               |
| 51:03      | there. Um, you know, the, the, the source code for the, for the text editor and, and                   |
| 51:07      | so on. And well, in fact, there's a lot there. There's also very in depth documentation,               |
| 51:11      | which I've, I've linked in, in the show notes, but, um, it seems to me I could be wrong.               |
| 51:16      | Oh, Simon, you'll have to correct me if I'm wrong. The documentation is really more intended           |
| 51:20      | for developers of the, of something that's using Runestone rather than somebody who's                  |
| 51:26      | planning on using Runestone. Uh, because if you want to use Runestone, you just use it,                |
| 51:31      | you just open it up, tap plus to create a file or tap a file to open it and off you                    |
| 51:37      | go. That's, that's kind of it.                                                                         |
| 51:39      | Oh yeah. Yeah. Um, that's not really any documentation of Runestone, the app. So that, that's a thing  |
| 51:45      | that's a mistake that I made that I named the open source framework the same as the app,               |
| 51:49      | which have led to some confusion, um, understandably, but Runestone, the app, that's not really        |
| 51:55      | any documentation for that. Um, I think I naively hope that's, that wasn't necessary.                  |
| 52:01      | It's just, it's like, just the thing that I haven't gotten around to yet. And it's honestly            |
| 52:05      | a bit further down on my priority list than, than where I am right now. Um, but the documentation      |
| 52:11      | is certainly aimed for, for developers who wish to, to adopt the framework. Um, I don't                |
| 52:16      | think you can really get any developer to adopt your framework. If you don't like show them            |
| 52:21      | how to do it, if you don't have great documentation, you shouldn't expect them to at least.            |
| 52:25      | Yes. But I can officially give everybody the entirety of the, the necessary user documentation         |
| 52:31      | for Runestone in about two sentences. Open the app and tap plus or tap on a document                   |
| 52:36      | to open, create or open a document. You can modify the settings by tapping the settings                |
| 52:41      | icon in the top right. Have a good day. Like it's, it's very, very simple. Um, and I think             |
| 52:47      | that's one of the things that is, um, so deceptive about this app, uh, because it, it does just        |
| 52:53      | seem incredibly simple, um, when you look at it. Um, but when I think, you know, from,                 |
| 52:59      | from in my developer brain of all of the potential things that need to go into this, you know,         |
| 53:03      | I've just opened a different JSON file. Um, uh, and, uh, now I'm, I'm just going to format             |
| 53:08      | and format the document and it's done a beautiful job on it, 10 out of 10 there, but it's got          |
| 53:13      | different highlighting for, um, different kinds of, um, you know, properties. So I've                  |
| 53:18      | got some things which are string. So one, this is Europe's London and that's green. Um,                |
| 53:23      | and then I've got something that's false, which is red. Um, and I've got some other                    |
| 53:27      | things such as true, which are also red cause they're Booleans. And then I've got some,                |
| 53:30      | some numbers which are orange. Um, and you know, the fact that it can correctly recognise              |
| 53:35      | all of those different things and, and highlight them, you know, accurately so that at a glance        |
| 53:39      | I can tell what kind of thing this is without needing to, you know, look for quotes around             |
| 53:45      | a number. For example, that just makes it incredibly easy, um, and, and useful. And                    |
| 53:52      | so, you know, I'm personally very appreciative. And I think, you know, there are probably              |
| 53:57      | more folks using this than they realise, even if they've never downloaded Runestone itself,            |
| 54:01      | because I've certainly seen, uh, several, uh, developers, uh, who, uh, I'm sure many                   |
| 54:06      | of us know talking to you on Twitter about this. And I'm sure there are many more who                  |
| 54:09      | have talked with you, uh, you know, off of Twitter about, about using the framework.                   |
| 54:13      | So it's, uh, I think something that it may have taken quite a bit of your time, but                    |
| 54:18      | especially if it then feeds back into Scriptable, I think it was well worth it.                        |
| 54:23      | Yeah. Well, yeah. Thanks. I'm glad to hear that you, that you find it simple to use.                   |
| 54:27      | That was really the whole point. I think if you are a user that has, um, more advanced                 |
| 54:33      | text editing needs on your iPhone and iPad, you should definitely look at something like               |
| 54:37      | text testing that you, um, mentioned earlier. That, that's really the least to me. That's              |
| 54:42      | the [[BBEdit]] of, um, of the iPhone and iPad. That's a, it's, uh, an app that has existed                |
| 54:48      | for many years. It's a super good app developed by a, a great developer, Alexander, who has            |
| 54:53      | also helped me out on parts of Runestone. When I got stuck, um, you know, understanding                |
| 54:57      | parts of the text layout system, Alexander is a, is a super great person and a great                   |
| 55:03      | developer and text testing is a great app. So I think more, Runestone, I think more of                 |
| 55:08      | that as like, um, on the Mac, you might have, uh, you have text edit, and then you might               |
| 55:13      | have as a developer, you have a more powerful, um, text editor, could be a Nova, VS code               |
| 55:19      | or whatever. And I think Runestone is more like the text edit on steroids. It's for the,               |
| 55:26      | it's for the times that you don't need a full fledged powerful editor, but you just need               |
| 55:31      | something simple. And for some people that might be enough, but if, if it isn't, and                   |
| 55:36      | if you have more powerful needs than that, or more advanced needs than that, then there                |
| 55:40      | are other editors, um, that you might appreciate more.                                                 |
| 55:44      | Yeah. Uh, I'm very pleased to hear that the developer of Textastic was helpful. I thought              |
| 55:48      | I remembered, um, that, that I'd seen a couple of those conversations, um, going on. And               |
| 55:53      | it's, it's always so nice to me to see, uh, developers within the indie developer community            |
| 55:59      | helping each other out because it does lead to great apps for, for everyone, uh, there.                |
| 56:04      | So, you know, that, that's certainly well worthwhile. And, uh, yeah, it's, it's, it's                  |
| 56:09      | always interesting. I kind of feel like, um, uh, that, uh, Runestone is more like a text               |
| 56:15      | wrangler was when, um, the folks at bare bones had text wrangler and [[BBEdit]], like text wrangler       |
| 56:20      | was like the mini version, um, of it, uh, which was the one that was available for free                |
| 56:25      | and everything. And they've, they've since rolled everything into [[BBEdit]] and text wrangler            |
| 56:28      | is no longer, um, but, um, you know, it, it kind of reminds me a little bit of text wrangler           |
| 56:34      | in, in some ways, which is quite nice and certainly meant as a compliment.                             |
| 56:37      | Uh, thanks. Text wrangler. I had completely forgotten about that.                                      |
| 56:42      | Uh, a lot of people that I think that's right. It was a good app though, but you still get             |
| 56:48      | it, you know, you just get [[BBEdit]] and then you add on the features if you want them.                  |
| 56:53      | Oh yeah. Sure.                                                                                         |
| 56:54      | Well, I mean, [[BBEdit]] has everything that text wrangler had and it's got all the extra                 |
| 56:59      | features too. Um, you know, it, it always did. That was, that was the thing and it was                 |
| 57:04      | kind of, I guess a different build with some of the things turned off, um, and, and a different        |
| 57:09      | icon, a different name. Um, I don't really know. I did, I don't really remember looking                |
| 57:13      | into it all that much. And, uh, I used text wrangler for a few years on my work machine                |
| 57:17      | when, uh, I worked somewhere that wouldn't let me have [[BBEdit]] installed. Um, I'm not                  |
| 57:21      | quite sure why they wouldn't let me have [[BBEdit]] installed, but either way, I did eventually           |
| 57:25      | convince them to see the error of their ways. And fortunately, I now get to use Runestone              |
| 57:29      | whenever I need to as well, which definitely makes my life easier.                                     |
| 57:34      | This episode of automators is brought to you by ExpressVPN. You've probably heard by now               |
| 57:37      | that you should be using a VPN when you connect to the internet, but adding an extra step to           |
| 57:42      | anything you do every day can sound like hassle. Well, if you knew how easy it was to protect          |
| 57:46      | your connection with ExpressVPN, you'd be doing it already. ExpressVPN is the easiest                  |
| 57:51      | way to browse safely, securely, and just better. Uh, one of the things that I love about ExpressVPN    |
| 57:57      | is just working around those silly geolocation blockers that say you need to be in the United          |
| 58:02      | States of America to view this page because we do not agree with GDPR or cannot support                |
| 58:06      | it, or whatever it is, or just catching up with that series on Netflix that for some                   |
| 58:10      | reason isn't available here even though it was 15 minutes ago. Well, that's something                  |
| 58:14      | I can do with ExpressVPN. And ExpressVPN gets rid of all those things that you hate about              |
| 58:19      | VPNs. It's a VPN done right. First of all, it's blazing fast. Lots of other VPNs slow                  |
| 58:23      | your connection down to the point where it's not even worth it to connect. But ExpressVPN              |
| 58:27      | doesn't lag or buffer. You can stream in HD with no issues. And using it couldn't be                   |
| 58:32      | easier. Just open the ExpressVPN app, tap one button and enjoy instant protection across               |
| 58:37      | all of your devices. The fact is, once you connect to ExpressVPN, you don't even realise               |
| 58:41      | you have it on. But your connection is secure, your data is encrypted, and you can spoof your          |
| 58:45      | location so you've got access to any content available outside of your region. No wonder               |
| 58:49      | it's been called the best VPN by CNET. Right now, go to expressvpn.com/automators                |
| 58:55      | and you can get an extra three months of ExpressVPN for free. That's ExpressVPN.com/automators   |
| 59:04      | to get those three extra months of ExpressVPN. ExpressVPN.com/automators. Our thanks             |
| 59:10      | to ExpressVPN for their support of this show and all of Real AFM.                                      |
| 59:14      | Well, I mentioned earlier, [[Data Jar]], and I'm such a huge fan of this application. Sometimes             |
| 59:22      | people have trouble understanding it, you know, what it does and how it relates to shortcuts.          |
| 59:27      | Simon, explain [[Data Jar]].                                                                                |
| 59:29      | Yeah. How do you explain [[Data Jar]]? It's a database for [[Data Jar]]. It's like a key value storage.          |
| 59:40      | Very generic key value storage. You can store your strings, Booleans, numbers, and so on,              |
| 59:45      | and it's designed for and obviously integrates with shortcuts. And it's, yeah, it's a really           |
| 59:52      | shortcuts-focused database, that's basically it.                                                       |
| 59:58      | Global variables for shortcuts is the way I was thinking about it. It's like you can                   |
| 01:00:02   | put your phone number in [[Data Jar]], your address, anything that you're going to repeatedly call          |
| 01:00:08   | in a shortcut. So like, let's take the phone number as an example. Let's say that you're               |
| 01:00:12   | in sales and you've written a bunch of email shortcuts, and the email includes your phone              |
| 01:00:19   | number in it. Let's say you've got 20 of them, and then your phone number changes, right,              |
| 01:00:25   | or your employer changes or something. So you want to get your customers your new phone                |
| 01:00:29   | number. Well, you could go in and block and copy and paste 20 times, or you could when                 |
| 01:00:37   | you build them, being a future thinking automator, just use [[Data Jar]] and have it call the variable      |
| 01:00:43   | for your phone number. And then when your phone number changes, you change the phone                   |
| 01:00:46   | number in [[Data Jar]], and all those shortcuts just magically have the new data.                           |
| 01:00:51   | And this is something that is shockingly not in shortcuts, you know, the idea of a memory              |
| 01:00:57   | of a variable across different shortcuts. And Simon scratched that it's so well that                   |
| 01:01:04   | I don't care if Apple ever fixes it, because I'm super happy with [[Data Jar]]. But I mean,                 |
| 01:01:09   | it's just a little problem. And I do think that like, you know, when we talk about things              |
| 01:01:14   | like Scriptable, some people say, well, JavaScript, I don't know how much I'm going to do that.        |
| 01:01:18   | Look, [[Data Jar]] is something everybody who owns shortcuts or makes a shortcut can use because            |
| 01:01:24   | it's just what I said. It's a little jar full of data. In fact, maybe that's how you                   |
| 01:01:31   | came up with the name, right? Exactly. Yes. Yeah. For me, one of the most useful things                |
| 01:01:39   | about [[Data Jar]] is the fact that I can go into [[Data Jar]] at any point and see what my data is.             |
| 01:01:45   | And I can see it very, very simply and very easily. And I can see that on any of my devices,           |
| 01:01:51   | not just the device that had the shortcut that created that or updated it or whatever.                 |
| 01:01:58   | Because some of the things that I struggle with sometimes with some of the other solutions,            |
| 01:02:02   | you know, I've tried storing things in files in iCloud and so on and so forth. Sometimes               |
| 01:02:08   | like you have to wait for the file to download. And I just want to just quickly, manually              |
| 01:02:13   | edit something. And I don't have to do that through shortcuts, you know, I can do that                 |
| 01:02:17   | through shortcuts. I'm certainly capable of doing it. But I can just open up [[Data Jar]] and               |
| 01:02:22   | I can see things and I can easily edit it. So recently I was traveling for the first                   |
| 01:02:27   | time in a while. And I realised that my airline check-in script hadn't done what it needed             |
| 01:02:32   | to do, which is add a reminder and to do when I should be able to check in. And I just popped          |
| 01:02:38   | into [[Data Jar]]. And I checked, I've got a little section called airline check-in, that's one             |
| 01:02:43   | of the keys in the key value store. And then I looked in it. And the value for this is                 |
| 01:02:47   | it's actually a dictionary. Okay, so it has, you know, a number of keys like LH for Lufthansa          |
| 01:02:53   | and OS for Austrian and so on and so forth. And then each of the values there is a number.             |
| 01:02:59   | And I realised it was very simple. I was flying with Scandinavian airlines and they just weren't       |
| 01:03:05   | in here. SK was not present. So I added SK, ran it again and bam, it worked. And then                  |
| 01:03:09   | on my way home, you know, my automations had already picked up that there was a flight                 |
| 01:03:13   | in my calendar and the G reminder had been added and I got notified that I was supposed                |
| 01:03:17   | to check in. And that solved it. You know, but I'm easily able to just pop in and see                  |
| 01:03:24   | at a glance what is, you know, what I've got here and what I've not got. And I use [[Data Jar]]             |
| 01:03:29   | for so many things, like all of my API keys, I store in [[Data Jar]]. So I never accidentally               |
| 01:03:34   | share like my air table API key with everybody and let everybody delete everything that's              |
| 01:03:38   | in our shortcuts, a air table, that'd be bad. But I also have, you know, like different                |
| 01:03:45   | Wi-Fi addresses and what they equate to back from when, like location-wise, from when getting          |
| 01:03:51   | your location in shortcuts took a very long time, that's been improved. But I've also                  |
| 01:03:55   | got, you know, I've got a dictionary here, which has all of my work notes because I have               |
| 01:04:00   | a work note automatically created every single day and I have the ID of that work note stored          |
| 01:04:05   | with the date. So I can easily grab the work note. But when I run the shortcut, if the                 |
| 01:04:10   | work note isn't there, then it goes and it creates it and it saves it into [[Data Jar]].                    |
| 01:04:14   | So it should have been created automatically, but just in case it'll, you know, it'll look             |
| 01:04:18   | it up and, you know, you've got that function with shortcuts, you've created a shortcut                |
| 01:04:23   | action to check if there is a value. And also to get a value and you can have it not fail              |
| 01:04:29   | if the value isn't present. And I really appreciate, you know, that little bit of extra thought        |
| 01:04:34   | that you've put in there that maybe somebody doesn't actually want to crash their shortcut.            |
| 01:04:38   | If this value isn't there, maybe they figured out a way of handling this. And so you either            |
| 01:04:42   | let people, you know, be slightly, you know, cautious about it and just check, Hey, does               |
| 01:04:47   | this thing exist? Okay, if it exists, then I'm going to get it. Or I'm just going to                   |
| 01:04:51   | get this. If it's empty, it's fine. I'll deal with it later. And, you know, you've built               |
| 01:04:57   | in, you know, both approaches there for however people like to automate their things.                  |
| 01:05:02   | Yeah, that was one of the things that became quite obvious when I started using the app                |
| 01:05:07   | myself that I could, I mean, I had this check if value exists action from almost day one.              |
| 01:05:15   | And it was quite easy to use and build, you know, if value exists, then do this, otherwise             |
| 01:05:19   | do that. But it was quite a few steps. And I thought, well, I can quite easily solve                   |
| 01:05:25   | this within the app by basically wrapping that if statement into the app and then only                 |
| 01:05:30   | able to do it once and never again in my shortcuts on this, I really needed. Yeah, so that became      |
| 01:05:36   | quite obvious from from using it.                                                                      |
| 01:05:38   | Yes, yes, it's, yeah, it's just one of those things where if you go through and you look,              |
| 01:05:44   | you know, like if you if I tap and hold on any value in data or any of those tiles in                  |
| 01:05:49   | data, then I can copy the key and I can copy the value, but I can also copy the key path               |
| 01:05:54   | because I can nest data. So if I want to put, you know, I have a top level key for work                |
| 01:06:00   | and then inside of work, I've got various different things, including daily notes and                  |
| 01:06:04   | then inside of daily notes, it's a dictionary and I've got the date and I've got that ID.              |
| 01:06:09   | So I can, you know, copy, you know, the key to get me all the way down or I can just what              |
| 01:06:14   | I did, I copied the key for daily notes. So it's work dot daily underscore notes because               |
| 01:06:19   | that's how I wrote my keys. And then inside of shortcuts, I put dot and then I've just                 |
| 01:06:24   | got the date and then just looks it up and it tries to get it. And, you know, I really                 |
| 01:06:29   | appreciate how easy you have ended up making this force, because so many people need data              |
| 01:06:36   | that they can access across more than one shortcut, you know, if you if you want to put some data      |
| 01:06:40   | down and then pick it up again later, then you can do that. And, you know, I think that                |
| 01:06:46   | this is just very useful. I for a long time, the way I was working around focus modes and              |
| 01:06:51   | not being able to get my current focus mode on iOS is every time a focus mode turned on,               |
| 01:06:54   | it would store my current focus mode into a key called focus in [[Data Jar]]. And it would                 |
| 01:06:59   | write it in there. And when my focus mode ended, it would remove it or it would unset                  |
| 01:07:06   | it and then, you know, a new focus mode starting would set it. And yeah, this, this was, this          |
| 01:07:12   | was certainly a hack to work around a problem. It was not perfect. I run into some issues              |
| 01:07:17   | where if you stopped a focus mode and started another focus mode, sometimes the new focus              |
| 01:07:21   | mode starting shortcuts automation would run before the stop focus mode shortcuts automation           |
| 01:07:27   | had run. And so I had to put something, I ended up putting a date time in there and                    |
| 01:07:33   | just saying, okay, if this changed in the last 10 seconds, and it's got a value, don't                 |
| 01:07:37   | change it again. Because otherwise, like I would end my fitness focus mode and start                   |
| 01:07:43   | my, I can't remember, I think it was my personal focus mode. And yeah, I just have no focus            |
| 01:07:50   | mode available inside of [[Data Jar]]. But yeah, it's, it's really nice that you've got all                |
| 01:07:55   | of the abilities to, you know, view a value or just get all of the keys in here and count              |
| 01:08:00   | how many values there are and so on, just to make it a little bit easier on everybody.                 |
| 01:08:05   | Because I think a lot of people will get really hamstrung with shortcuts and not being able            |
| 01:08:09   | to save some data for later.                                                                           |
| 01:08:11   | Yeah, I mean, I'm, yeah, I'm completely speechless hearing you talking about all of this. That's       |
| 01:08:17   | a great, great use of [[Data Jar]]. And it's like that. When I listen to this show normally,               |
| 01:08:25   | it's like [[Data Jar]] comes up occasionally. And every time I'm so impressed hearing you                  |
| 01:08:30   | talk about it, because you're using it in ways that I never thought of. And my use of                  |
| 01:08:36   | [[Data Jar]] is actually quite simple. It's, you mentioned earlier that you're using it there              |
| 01:08:40   | or we're using it, I mean, doesn't really matter. But at least you were using it to                    |
| 01:08:44   | store API keys. And that's more or less how my use of data just started. That's the reason             |
| 01:08:53   | I wanted to develop it because I found myself in the early days of shortcuts, we were posting          |
| 01:08:58   | our shortcuts, our screenshots of our shortcuts, we were sharing them, and so on. And I didn't         |
| 01:09:04   | want my screenshots to include my API keys, obviously. So I thought that I need somewhere              |
| 01:09:10   | else to store these. And actually, I want to reuse them across my shortcuts, which was                 |
| 01:09:15   | another problem in itself. And that's the reason I built [[Data Jar]]. And then I just                     |
| 01:09:20   | kind of tried to think of it in more or less the most generic way that I could with this               |
| 01:09:26   | JSON like structure. So hearing people's use of [[Data Jar]] just blows my mind because it's               |
| 01:09:33   | being used in ways that I never really thought of or really, I almost wanted to say intended           |
| 01:09:40   | for. I guess I kind of did because it build a generic, but it's like people are really                 |
| 01:09:46   | storing a lot of data in [[Data Jar]]. Yes. And that's what are I know Rose is a fringe case               |
| 01:09:52   | because because she's Rose, right? And she's going to find these great ways to use it.                 |
| 01:09:56   | But what are some of the other interesting ways you're hearing from people that use data               |
| 01:10:00   | jar? What kind of data are they putting in? Oh, yeah, I mean, I've seen lots of different              |
| 01:10:09   | cases. But in some way, they all have have a thing in common because at the end of the                 |
| 01:10:16   | data, it's just storing data, right? It's just storing strings. But people are building                |
| 01:10:21   | like entire databases of their, you know, favourite movies or health data, even like                    |
| 01:10:27   | keeping track of things. People have built pill trackers around [[Data Jar]]. I mean, I've                 |
| 01:10:35   | seen a lot of different use cases. But you know, there are some that goes again. I mean,               |
| 01:10:40   | I think one of the most common ones is actually storing API keys. And that that seems like             |
| 01:10:45   | a common problem. Yes, yes. I ran in somebody the day. I don't remember where it was. I                |
| 01:10:50   | think it was on Reddit. And they were they were asking if something could hook into the                |
| 01:10:54   | mail app on iOS, because they wanted to manage all of their email with [[Data Jar]]. And I just            |
| 01:11:00   | sort of looked at that and I didn't reply to it. But I was so tempted to reply with,                   |
| 01:11:04   | I don't think that you're solving this problem quite the right way, because I felt like it             |
| 01:11:08   | was very much the to go back to the earlier analogy, building the automation machine to                |
| 01:11:12   | move the rocks when all you need to do is move the rocks from A to B. It did feel slightly             |
| 01:11:17   | over the top there. But also, you know, however, however you want to solve a problem, right?           |
| 01:11:21   | If it scratches the edge, then go for it. But yeah, it's one of those things that, you                 |
| 01:11:26   | know, I look at how I use [[Data Jar]]. And in some ways, I'm probably, you know, abusing                  |
| 01:11:30   | it beyond its intended capacity, I certainly nest lots of data in many places. But I also,             |
| 01:11:38   | you know, find that it is so useful to be able to just quickly, you know, throw some                   |
| 01:11:44   | data in here. And I've got plenty of data, I should probably actually just create a temp               |
| 01:11:48   | key. And for anything that I'm just like messing with, put it under the temp key, and then             |
| 01:11:52   | I can clear it out periodically. But, you know, it is, you know, so interesting looking                |
| 01:11:59   | in here, you know, I've got a list of my OmniFocus shopping projects in here, and their IDs.           |
| 01:12:07   | And clearly, that's for some automations that are very much still in progress slash forgotten          |
| 01:12:12   | about and abandoned somewhere in my shortcuts folders. But, you know, it's amazing seeing,             |
| 01:12:18   | you know, what people have done before I had CarPlay. I built my own sort of CarPlay system            |
| 01:12:23   | using [[Data Jar]] and shortcuts and maps to give me like a list of my favourites. So I could                |
| 01:12:30   | tap on any of my favourites. And it would, you know, get me directions to that address                  |
| 01:12:34   | that was pulled out of [[Data Jar]], and so on and so forth. And, you know, it's amazing                    |
| 01:12:42   | what somebody will do with an app and how much the developer will simultaneously despair               |
| 01:12:47   | and be amazed. Fortunately, I don't seem to have quite scared you off yet today, which                 |
| 01:12:51   | is good. But yeah, I'm finding [[Data Jar]] really solves a lot of a lot of the data problems               |
| 01:12:58   | that I have, you know, the airline check in one, all I'm doing is I'm just looking at                  |
| 01:13:02   | my calendar for anything that's a flight. And then it just matches the flight number                   |
| 01:13:07   | and pulls out the first two letters, which it looks up in [[Data Jar]]. And that's, you know,               |
| 01:13:13   | actually surprisingly easy to do thanks to the fact that I know that this data is here                 |
| 01:13:17   | and I can quickly look in [[Data Jar]] and just, you know, see whether or not I have that in                |
| 01:13:23   | the case of that particular flight, I didn't have it. So, you know, I was able to fix that             |
| 01:13:29   | very quickly. But, you know, it's very nice to just have a way to go look at this data,                |
| 01:13:35   | because it's not hidden from me. It's right there where I need it. And I can look at it                |
| 01:13:39   | on all of my devices too, which is great. And yeah, yeah, so thank you.                                |
| 01:13:44   | Sure. And this is like the thing that I enjoy the most about building the kind of apps that            |
| 01:13:50   | I do, it being like Scriptable or [[Data Jar]], these, all of my apps have this thing in                    |
| 01:13:56   | common that they're really in some way developer tools, some more than others. But the most            |
| 01:14:02   | interesting thing about building these is that I never really know how people end up                   |
| 01:14:07   | using them. And it always turns out that they'll use it in ways that I haven't ever dreamed            |
| 01:14:13   | of. The same thing goes for Scriptable. I might build it with some use cases in mind,                  |
| 01:14:20   | but then, you know, one day a support mail seeks in with someone who either is already                 |
| 01:14:25   | using it in ways that I couldn't imagine, or have this idea for a small thing that would               |
| 01:14:31   | just make it useful in a completely different way. And that's just, that's the biggest                 |
| 01:14:36   | joy I get as a developer. That's like building one thing and people are just inventing their           |
| 01:14:43   | own things with this. It's like, I'm really just building the tools. I'm not really building           |
| 01:14:48   | the end product when it comes to [[Data Jar]] Scriptable. The end product there is really the scripts       |
| 01:14:54   | that people are writing or the shortcuts that they're building on top of [[Data Jar]]. And it's             |
| 01:14:59   | just impossible to imagine all the things that people can build with this. But it's                    |
| 01:15:03   | a great joy hearing stories like that.                                                                 |
| 01:15:06   | I think what we're going to have to do, Simon, when this show goes up is we're going to have           |
| 01:15:10   | to put some posts up in the forums because we have some mini sections in the forums for,               |
| 01:15:15   | you know, Scriptable and so on. So we're going to have to put up some extra posts just specifically    |
| 01:15:20   | for Scriptable and [[Data Jar]]. And let's throw up ones for Rune Stone and we'll get to Jason              |
| 01:15:26   | in a minute too. And just get people to post in those of all the different ways that they're           |
| 01:15:29   | using it because I have a feeling that we're going to blow your mind and hopefully in the              |
| 01:15:34   | best possible way because there are so many people using all of these great apps that                  |
| 01:15:39   | we've built.                                                                                           |
| 01:15:40   | Oh, yeah, that would be great.                                                                         |
| 01:15:41   | I also think, you know, Simon, you do a really good job of intermediating for those of us              |
| 01:15:47   | that are not programmers. And the last app I want to discuss is JSON or JSON. I don't                  |
| 01:15:53   | know how you pronounce it because there are JSON files which are very cryptic if you're                |
| 01:15:58   | not working them every day for someone like me. And then you made this app which is called             |
| 01:16:03   | JSON, J-A-Y-S-O-N, which can take a JSON file and just give you in a very clean fashion                |
| 01:16:10   | all the data out of it that it actually contains. And for someone like me, this is a very useful       |
| 01:16:16   | app because I do like to work with JSON data, but I always sit here scratching my head trying          |
| 01:16:22   | to find it in the middle of all that code. And you just kind of solve the problem for                  |
| 01:16:27   | us. What led to JSON and am I pronouncing it right? Tell me that first. Am I pronouncing               |
| 01:16:34   | it right? How do you pronounce this application?                                                       |
| 01:16:39   | I think you're pronouncing it right. I mean, pronounce it basically however you want to.               |
| 01:16:43   | The idea was that it should be pronounced the same way as the data format just to make                 |
| 01:16:47   | things even more confusing. That's like, that was the intention.                                       |
| 01:16:51   | There we have it. From the maker, JSON.                                                                |
| 01:16:53   | I guess I had like error. Yeah. I was in an evil corner that day when I came up with                   |
| 01:16:58   | the name, I guess, thought it would be a fun prank to name it the same as the file format.             |
| 01:17:03   | But you did spell it differently. So when folks search for it on the App Store, if they                |
| 01:17:07   | search for J-A-Y-S-O-N, then they'll get the original good JSON app, which is also available           |
| 01:17:12   | on Mac, I should note. So if anybody's got this [[Data Jar]] and JSON both available on the                |
| 01:17:18   | Mac, so if anybody's got large bits of data or even not so large bits of data that they                |
| 01:17:23   | want to be able to look at, then you can do that on Mac OS and iOS and iPad OS.                        |
| 01:17:29   | Yeah. Sorry, what was the second part of the question, David?                                          |
| 01:17:33   | Well, just what led to the creation of this app? I mean, someone like you, I'm sure,                   |
| 01:17:38   | probably can decrypt JSON files pretty easily.                                                         |
| 01:17:41   | It depends. I mean, yeah, if they're formatted well, as Rosemary mentioned earlier, then               |
| 01:17:49   | JSON can be quite easy to read. Yeah, if they're formatted well, and if they're quite                  |
| 01:17:56   | small files, when JSON files get big, they can be a bit difficult to navigate around.                  |
| 01:18:02   | At least when they contain like multiple layers of nested objects, it can be a bit difficult           |
| 01:18:08   | to wrap your head around it in a text editor. So that's one of the reasons that I built                |
| 01:18:14   | JSON. And the reason that it was built for the iPhone and iPad first, it came to the                   |
| 01:18:21   | Mac afterwards when Catalyst was announced. It's a Catalyst app, and it wasn't really                  |
| 01:18:30   | intended for the Mac until Catalyst was released. The reason that I built it for the iPhone            |
| 01:18:35   | and iPad was partly because of shortcuts and partly because of the iPad in general. So                 |
| 01:18:41   | I moved more of my work to the iPad. So I have this day job of working as a developer in               |
| 01:18:49   | an agency. And we are often either communicating with APIs, reading documentation for APIs,            |
| 01:18:57   | poking at APIs using HTTP clients, as Rose mentioned earlier, and passing JSON files around     |
| 01:19:04   | to each other to investigate some data or debug some issue. And as I was moving part                   |
| 01:19:10   | of my work to the iPad, and I fell in love with the iPad, I needed some way of easily                  |
| 01:19:16   | browsing JSON files, because there are various different tools available on the Mac and also           |
| 01:19:21   | online tools, but they don't work that well on the iPad. So I wanted something and I kind              |
| 01:19:27   | of solved this problem. And yeah, then another part of the reason is shortcuts. JSON was               |
| 01:19:32   | definitely built with shortcuts in mind. So JSON came after shortcuts and it was partly                |
| 01:19:38   | intended as a companion, because people were using JSON more on their phone and on their               |
| 01:19:45   | iPad all of a sudden, because people were programming on their phones all of a sudden.                 |
| 01:19:52   | And I felt like I needed a tool to browse JSON, because I don't think shortcuts does                   |
| 01:20:00   | that well of a job out of the box, honestly. So I built various ways of doing that with                |
| 01:20:06   | JSON. Obviously, it can launch JSON from a shortcut, open the app with the JSON that                   |
| 01:20:13   | you provide as input. But you can even get a notification within shortcuts that shows                  |
| 01:20:19   | you the JSON. So it's like a rich notification on iOS that you can open. And then without              |
| 01:20:24   | leaving the shortcut, you can kind of browse the JSON.                                                 |
| 01:20:28   | For me, one of my favourite settings, which I just had to dive back into the app to double              |
| 01:20:34   | check is in the settings of JSON, you can actually have it default to saving your clipboard            |
| 01:20:40   | and saving files. And one of the things that I really like to do when I'm building one                 |
| 01:20:45   | of these more complex shortcuts, say I'm getting data back from [[Airtable]], is I will have that          |
| 01:20:49   | data then opened in JSON and have it save the file. And then I can jump backwards and                  |
| 01:20:54   | force between shortcuts and JSON as much as I need to build whatever it is that I'm trying             |
| 01:21:00   | to do. And I don't remember, did data or JSON come first? I'm struggling to remember now               |
| 01:21:08   | in what order they came. But it doesn't really matter, because what I can do in JSON, same             |
| 01:21:18   | as I can do in data, is I can copy the key path, which is something that you couldn't,                 |
| 01:21:24   | I don't think originally do in shortcuts, where you couldn't just paste, like you couldn't             |
| 01:21:30   | say, okay, so this would be the top level object has, and then, you know, whatever the                 |
| 01:21:38   | third thing was, you couldn't put this dot has dot cats, for example, and then get the                 |
| 01:21:43   | list of cats back that are returned from this fictional API call. But now you can. And I               |
| 01:21:50   | think when that was added, you immediately, I seem to remember, it may not have been that              |
| 01:21:55   | instantaneous, but I'm going to give you the full credit of my memory and say that you                 |
| 01:21:58   | were on the ball, and it was out during the beta of the shortcuts released there, where                |
| 01:22:04   | you can, you know, if you tap and hold on something, then you can copy the value. I'm                  |
| 01:22:10   | pretty certain that there was also the key in there as well, where I managed to go through             |
| 01:22:16   | and copy that, which just made my life so much easier when I was trying to do all of                   |
| 01:22:20   | these things, because, you know, trying to find, you know, what some things called, it's               |
| 01:22:26   | very easy. You might think, oh, developers, they know what they're doing. Yes, but I can't             |
| 01:22:30   | necessarily type. And just because I saw the word cats does not mean that my brain is not              |
| 01:22:34   | going to substitute the word dogs in its place, or it's not going to write cat instead of              |
| 01:22:39   | cats, or something, you know, it's very easy to make a typo there. And I'm really glad                 |
| 01:22:43   | that the JSON exists to help me, you know, figure out where I'm going with all of that.                |
| 01:22:49   | Yeah, that's good. Yeah, I don't really remember the order of things either. I don't even remember     |
| 01:22:56   | which app came first. I think it was JSON. But yeah. Yeah, that was kind of working with               |
| 01:23:04   | these key paths, was no pun intended, but was kind of key in this app. It wasn't, I think              |
| 01:23:12   | it's a great feature that you can call it the key path, because you can also, can you                  |
| 01:23:16   | work with key path in shortcuts? Yeah, yeah, that was something that you couldn't originally           |
| 01:23:21   | do, but you can now, if you've got a dictionary yet, then you can just type, you know, the             |
| 01:23:28   | full path to whatever it is with dots, because previously you'd have to do get value from              |
| 01:23:32   | dictionary with, say, for example, this, and then you'd have to do get value from dictionary           |
| 01:23:36   | with has is the key, and then cats and so on. And then you'd have to work with your end                |
| 01:23:40   | object, which meant that you had to use lots of dictionary actions, which is not necessarily           |
| 01:23:47   | a bad thing, but it's certainly very repetitive to do as a user. And also, if you accidentally         |
| 01:23:55   | moved one of those dictionary actions out of order, and you didn't notice your entire                  |
| 01:23:59   | shortcut would just break and crash, whereas if you know that you are going down to, you               |
| 01:24:04   | know, the seventh level within something, and there are keys along the way, then it's                  |
| 01:24:08   | much easier to just type that all into one action and know that that one action is what                |
| 01:24:13   | does that bit and be done with it. Yeah, as you mentioned, it isn't a bad thing to use                 |
| 01:24:19   | multiple get keys actions. But I think if people are doing this today, then definitely                 |
| 01:24:25   | give key path a try, because that'll if you have a shortcut where you're using multiple                |
| 01:24:32   | get keys actions, you'll find that using a key path will certainly clear that shortcut                 |
| 01:24:37   | up quite a bit possibly. Yes. Yes. And it speeds it up as well. As a side note, I found                |
| 01:24:43   | if you if you have a lot of the get value for a key for dictionary actions, if you have                |
| 01:24:49   | say sex with them and you convert it into one, you may not notice a huge improvement.                  |
| 01:24:54   | But when that shortcut is being run multiple times or that section of the shortcut is being            |
| 01:24:58   | run multiple times for say 20 things that came back from your air table, then it certainly             |
| 01:25:05   | does get slightly more performant. So yeah, it's what we're doing.                                     |
| 01:25:10   | It seems like there's always some some kind of overhead when you drag an action into your              |
| 01:25:14   | shortcut, like, especially if you have the editor open right and it performs the animation,            |
| 01:25:19   | it just slows down the shortcut a bit. Yes. Yeah. Yeah. It's certainly one of those things.            |
| 01:25:26   | And as I mentioned, it's very easy to accidentally drag and drop actions out of order. I don't         |
| 01:25:30   | know if either of you have had that you thought you tried to scroll up, you accidentally moved         |
| 01:25:34   | an action in shortcuts, and you don't know what you did. So you have to like tap undo.                 |
| 01:25:39   | I remember if you've done any other changes, and just try and like move up and down until              |
| 01:25:44   | you find one of those changes, and then you tap undo until you get to that. And then tap               |
| 01:25:48   | redo and keep looking for changes up and down your shortcut to see what it was so that you             |
| 01:25:52   | can make sure that you didn't accidentally break everything. Yeah.                                     |
| 01:25:55   | Yeah. Well, that that's never happened to me in the last 12 hours.                                     |
| 01:26:02   | No. Oh, okay. Okay. How much of those 12 hours where you were asleep and walking your                  |
| 01:26:06   | dog, David? Yeah, 11. Asking for scientific purposes. Yeah. Yeah. That is, that's crazy.               |
| 01:26:14   | That's one of the things I feel like, man, that is such a little hanging fruit in shortcuts            |
| 01:26:17   | is to lock things and just make, there's, there are ways to solve the problem. Just,                   |
| 01:26:24   | you know, take a look at [[Keyboard Maestro]] game, you know, and, but yeah, that is vexing.               |
| 01:26:30   | But you know, what is the vaccine is that Simon keeps making great apps that I do believe              |
| 01:26:36   | help the rest of us get better at automation. And I love what I'm hearing today. I can't               |
| 01:26:41   | wait to see what's next. And Simon, thanks for coming by and keeping us updated on all                 |
| 01:26:47   | the cool stuff you're making. Sure. Anytime. And thanks so much for having me. It's, it's              |
| 01:26:51   | been a pleasure. It's always nice to talk to you.                                                      |
| 01:26:54   | Well, I am going to give you some homework. I'm afraid, Simon. I've seen that you're                   |
| 01:26:58   | brewing some Christmas beer on, you posted this on Twitter. So I'm officially giving                   |
| 01:27:03   | you homework. You're going to have to take some time off this Christmas and enjoy your                 |
| 01:27:06   | Christmas beer. That's, that's the homework I'm going in.                                              |
| 01:27:09   | Thanks. That's the great kind of homework. I'll make sure to do that.                                  |
| 01:27:16   | Yes. Yes. And if we happen to get a script to will beta sometime after that, that would                |
| 01:27:20   | be appreciated, but that's not on your homework list. That's the, the triple bonus extra credit        |
| 01:27:25   | if it happens and you still get bonus credit for showing up. I don't know. Either way,                 |
| 01:27:30   | you're certainly not in, not going to struggle with the, with that homework, I hope.                   |
| 01:27:35   | You will get a beta, but probably not on this side of Christmas.                                       |
| 01:27:40   | That is entirely fair. Yes. Especially considering, you know, you, you have, you know, all of          |
| 01:27:45   | these apps out there, it's one of them is also an open source framework. And, you know,                |
| 01:27:50   | you have a day job as well. It's impressive how much you are managing to deliver to us                 |
| 01:27:54   | on a repeated basis. And I'm sure everybody who is automating things using one of your                 |
| 01:27:59   | apps or using Runestone in, in another app really, really appreciates it. And I know                   |
| 01:28:04   | why I certainly do.                                                                                    |
| 01:28:05   | Yeah. And so just some links, we're going to put them in the show notes, but you can                   |
| 01:28:10   | get JSON, J-A-Y-S-O-N dot app at that website. And same thing, Scriptable dot app, the website.        |
| 01:28:17   | And I believe [[Data Jar]] is the same [[Data Jar]].                                                           |
| 01:28:22   | And Runestone. And Runestone. Very clever, Simon. You know what you're doing. He also                  |
| 01:28:27   | has a blog over at simonbs.dev. And so that's another place to go. And there he's got links            |
| 01:28:35   | to all his projects. And he does have interesting blog posts too on stuff that he's working            |
| 01:28:40   | on or thinking about. So, so head over there and gang check it out. And really, if you,                |
| 01:28:45   | if you want to, you know, get better at this automation stuff, check out Simon's apps,                 |
| 01:28:49   | whether it's [[Data Jar]] or Scriptable, I really feel like there's something in here for everyone         |
| 01:28:53   | that wants to get a little better at this stuff. And, and we are eternally thankful                    |
| 01:28:58   | to you, Simon, for the fact that you spend your whole day at work, you come home and                   |
| 01:29:03   | you need to work on these things for us on the side. And we all want to support you as                 |
| 01:29:07   | much as we can because we love the stuff you're making.                                                |
| 01:29:10   | Sure. Thanks. And I'm thankful, thankful for, for the users using my, my apps and for being,           |
| 01:29:18   | being invited on this podcast. Thanks a lot.                                                           |
| 01:29:20   | Well, you're more than welcome. We will be having you back at some point in the future.                |
| 01:29:24   | Don't worry, homework notwithstanding, though, hopefully you will have enjoyed the beer by             |
| 01:29:28   | the time we get you back on the show. But yeah, it's, it's, it's always good to keep                   |
| 01:29:32   | an eye out on what you're doing. And for folks who, who are curious, you can also find follow          |
| 01:29:38   | Simon on Twitter, SimonBS. And I have found some other great apps through some of the                  |
| 01:29:43   | developers that I see him talking to as well. So pro tip there for you folks, for looking              |
| 01:29:47   | to find some other really cool apps, follow Simon on Twitter, and you'll find thousands                |
| 01:29:51   | of them, I'm sure.                                                                                     |
| 01:29:53   | And we are the automators. You can find us at relay.fm/automators. You can find                  |
| 01:29:58   | the, the forums at talk.automators.fm and the website at automators.fm. Thank you to                   |
| 01:30:04   | our sponsors, masterclass LinkedIn jobs and express VPN. We'll see you next time.                      |
