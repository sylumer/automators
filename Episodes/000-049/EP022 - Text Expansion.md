---
status: "incomplete"
fc-date:
  year: 2019
  month: 04
  day: 26
fc-category: "podcast"
podcast: "Automators"
published: 2019-04-26
duration: 4067
formattedduration: "01:07:47"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/22"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators022.mp3"
episode: 22
title: "22: Text Expansion"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Text expansion is a simple sort of automation but also a powerful one. In this episode, Rose and David go deep on text automation, the tools they use, and some of their favourite ways to use text automation to get their work done faster.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 022](https://talk.automators.fm/t/automators-22-text-expansion/4630)

# Sponsors
- [[Luna Display (Sponsor)|Luna Display]] - The only hardware solution that turns your iPad into a wireless display for your Mac.
- [[Backblaze (Sponsor)|Backblaze]] - Unlimited cloud backup for Macs and PCs.

# Show Notes
- [Automators on the Web](https://automators.fm/)
- [Automators Assemble! Zip Hoodie](https://cottonbureau.com/products/automators-assemble-zip-hoodie#/1449850/sweatshirt-unisex-zip-up-hoodie-tri-navy-tri-blend-xs)
- [Automators Assemble! graphic tee](https://cottonbureau.com/products/automators-assemble#/1449823/tee-men-standard-tee-midnight-navy-100percent-cotton-s)
- [Automators Talk](https://talk.automators.fm/)
- [Automators - YouTube](https://www.youtube.com/channel/UCvpU-_RS85Y7q5PZsAaH87w)
- [Rose on the Web](https://rosemaryorchard.com/)
- [Zotero | Your personal research assistant](https://www.zotero.org/)
- [TextExpander - Communicate Smarter](https://textexpander.com/)
- [TextExpander Snippets - MacSparky](https://www.macsparky.com/tesnippets)
- [Keyboard Maestro](https://www.keyboardmaestro.com/main/)
- [TypeIt4Me 6 - Ettore Software](https://www.ettoresoftware.com/mac-apps/typeit4me/)

# Transcription

| Time Index | Transcription                                                                            |
| :--------- | :--------------------------------------------------------------------------------------- |
| 00:00      | Well, we have a surprise for our listeners.                                              |
| 00:02      | Don't we, David?                                                                         |
| 00:03      | Yes, we do.                                                                              |
| 00:04      | Merchandise.                                                                             |
| 00:05      | I'm very excited.                                                                        |
| 00:06      | Yes, everybody's favourite podcast                                                        |
| 00:09      | has t-shirts and hoodies available for you.                                              |
| 00:11      | And we know you were really your favourite podcast.                                       |
| 00:13      | So that is us.                                                                           |
| 00:15      | We certainly have one of the coolest logos,                                              |
| 00:17      | which really lends itself to you.                                                        |
| 00:19      | The title is over in Cotton Bureau,                                                     |
| 00:21      | Automator's Assemble,                                                                    |
| 00:22      | because it looks so much like Captain America.                                           |
| 00:24      | That's what I thought.                                                                   |
| 00:26      | I hope I don't get in trouble for saying that.                                           |
| 00:28      | But either way, we got a cool t-shirt                                                    |
| 00:30      | and a zippered hoodie with a 3D...                                                       |
| 00:36      | What's the fancy term for this, Rose?                                                    |
| 00:38      | It's...                                                                                  |
| 00:38      | Embroidered logo?                                                                        |
| 00:39      | Yes, embroidered logo on the zippered hoodie.                                            |
| 00:42      | I know that I'm going to get one of each,                                                |
| 00:44      | but the zippered hoodie I'm very excited about.                                          |
| 00:46      | We had to, like, kind of negotiate with them                                             |
| 00:48      | to get this because it's a larger size                                                   |
| 00:51      | embroidered 3D logo.                                                                     |
| 00:53      | It's very nice.                                                                          |
| 00:54      | If you got one of the [[Cortex]] hoodies,                                                    |
| 00:56      | it's like that.                                                                          |
| 00:57      | It looks really great.                                                                   |
| 00:59      | We'll put some pictures and links in the show notes                                      |
| 01:01      | so you can go check it out.                                                              |
| 01:02      | Yeah.                                                                                    |
| 01:03      | And I have to say, the Cotton Bureau stuff,                                              |
| 01:06      | the reason why we've gone with Cotton Bureau                                             |
| 01:07      | is because we know the people at Cotton Bureau                                           |
| 01:09      | and the quality there is really good.                                                    |
| 01:12      | So that's why we've gone with their stuff                                                |
| 01:13      | because we know we're not going to be sending you                                        |
| 01:15      | something that you're going to go,                                                       |
| 01:16      | oh my gosh, this is terrible,                                                            |
| 01:17      | and it falls apart after one run through the washing machine.                            |
| 01:20      | So we hope you're going to be really happy with it.                                      |
| 01:22      | I have to say I'm wearing one of the hoodies right now                                   |
| 01:24      | and it's very snugly and warm,                                                           |
| 01:26      | but not too warm.                                                                        |
| 01:27      | So I'm quite impressed with it.                                                          |
| 01:29      | I have to say I'm going to be wearing mine at some                                       |
| 01:31      | of our meetups actually.                                                                 |
| 01:33      | Yes, me too.                                                                             |
| 01:34      | [[WWDC]] baby going to have my automators assemble gear on.                                  |
| 01:38      | So go check it out.                                                                      |
| 01:40      | We put a link in the channel.                                                            |
| 01:41      | Like I said, you'll probably hear about this a couple times,                             |
| 01:43      | but it is a limited time campaign.                                                       |
| 01:46      | It doesn't run forever.                                                                  |
| 01:47      | So if you want to get them,                                                              |
| 01:48      | get in there and get them now.                                                           |
| 01:50      | Yeah, definitely.                                                                        |
| 01:52      | And hopefully the very least for people who are resident                                 |
| 01:55      | in the U.S., these are going to arrive in time to wear at [[WWDC]]                           |
| 01:59      | as well, which means that if you are thinking of getting one                             |
| 02:01      | to wear it to wear the meetups,                                                          |
| 02:03      | it should fingers crossed arrive in time barring                                         |
| 02:05      | any postal delays.                                                                       |
| 02:07      | So that should be good too.                                                              |
| 02:09      | And so what are we going to promise                                                      |
| 02:10      | if you're wearing an automators assemble anything?                                       |
| 02:14      | High fives?                                                                              |
| 02:15      | Definitely high fives and selfies.                                                       |
| 02:17      | We can, we can offer selfies.                                                            |
| 02:18      | And there may be stickers as well.                                                       |
| 02:20      | Yes, all these stickers.                                                                 |
| 02:22      | All right.                                                                               |
| 02:22      | That said, if you, if you don't want to get a t-shirt                                    |
| 02:25      | and you still want to come to the meetup, that's okay.                                   |
| 02:26      | We're not going to turn you away.                                                        |
| 02:27      | You will still be able to get a selfie.                                                  |
| 02:30      | Can't promise a high five though.                                                        |
| 02:31      | That may have to be negotiated.                                                          |
| 02:33      | Yeah.                                                                                    |
| 02:34      | All right.                                                                               |
| 02:35      | Well, go get your gear and we will see you wearing it at [[WWDC]].                           |
| 02:42      | Hello, and welcome to Automators.                                                        |
| 02:44      | I am here with my fabulous co-host, David Sparks.                                        |
| 02:47      | And we're going to teach you how to use your computers                                   |
| 02:49      | to do your work for you.                                                                 |
| 02:51      | Hello, David.                                                                            |
| 02:52      | Hello, Rosemary.                                                                         |
| 02:54      | You ready to talk some text expansion?                                                   |
| 02:56      | I am.                                                                                    |
| 02:57      | It's, it's a very good episode because as, as I'm stealing                               |
| 03:01      | from your outline is this is the gateway drug to automation                              |
| 03:04      | in many ways.                                                                            |
| 03:06      | Yeah, I know it is because it's easy and it's a low barrier                              |
| 03:10      | to enter, to entry and it's a high payoff and it's something                             |
| 03:13      | that we've been talking about off and on throughout the show,                            |
| 03:16      | but we thought we'd just take one show to talk really deep                               |
| 03:19      | about text expansion and how that works.                                                 |
| 03:21      | But before we do that,                                                                   |
| 03:22      | we've got a few announcements.                                                           |
| 03:25      | The meetups are still taking on new attendees.                                           |
| 03:29      | Just heard from a friend the other day coming all the way                                |
| 03:31      | from Las Vegas to join our Orange County meetup.                                         |
| 03:34      | That's pretty cool.                                                                      |
| 03:35      | That is nice.                                                                            |
| 03:36      | Yes.                                                                                     |
| 03:37      | There's a lot more spaces in the Orange County meet up                                    |
| 03:40      | than there are left in the [[WWDC]] meetup,                                                  |
| 03:42      | but we're probably going to be having the [[WWDC]] meet up outdoors.                          |
| 03:46      | So space hopefully won't be an issue on that front.                                      |
| 03:50      | Yeah, same thing down here in Orange County.                                             |
| 03:52      | So there's room for you.                                                                 |
| 03:53      | Go sign up.                                                                              |
| 03:54      | We're going to have a great time.                                                        |
| 03:55      | We're looking forward to it.                                                             |
| 03:58      | And just sign up.                                                                        |
| 04:00      | It's free.                                                                               |
| 04:01      | We'll have fun.                                                                          |
| 04:02      | Yes.                                                                                     |
| 04:03      | So let's talk about text expansion.                                                      |
| 04:05      | The Gateway Drug to Automation.                                                          |
| 04:08      | It is.                                                                                   |
| 04:09      | The text expansion is something that started showing up                                  |
| 04:15      | inward processors years ago, but then it kind of grew                                    |
| 04:20      | to the operating systems.                                                                |
| 04:22      | And I want to talk about the Apple operating system                                      |
| 04:24      | implementation in general later.                                                         |
| 04:27      | But, you know, the idea behind text expansion is real basic.                             |
| 04:30      | It's you type one thing and then the computer is monitoring                              |
| 04:34      | your keystrokes and says, oh, she just typed that.                                       |
| 04:38      | I want to turn that into something else.                                                 |
| 04:40      | Yeah.                                                                                    |
| 04:40      | The most common example is type cell like as in cell phone,                              |
| 04:45      | but with two C's and anytime it sees that C C E L L,                                     |
| 04:50      | it backs up the cursor, erases what you just typed                                       |
| 04:53      | and writes your cell number for you.                                                     |
| 04:55      | And it's much easier to type cell than it is to use the                                  |
| 04:59      | parentheses and the dashes and hit that number row up above                              |
| 05:03      | your keyboard and, you know, enter your, your phone number.                              |
| 05:05      | So, I mean, that's the kind of thing people were thinking                                |
| 05:08      | about it.                                                                                |
| 05:08      | The first time I ever saw text expansion used was in                                     |
| 05:12      | Microsoft Word, I believe, where they had a big library of                               |
| 05:16      | typos, you know, things that you commonly mistype and it would                           |
| 05:20      | back it up and fix it for you.                                                           |
| 05:22      | Yeah.                                                                                    |
| 05:23      | I used to use that all the time because I learned to type                                |
| 05:27      | fairly early.                                                                            |
| 05:28      | I was about 11 and I actually took piano lessons because I                               |
| 05:30      | wanted to learn to type, don't tell my mother.                                           |
| 05:33      | That's weird.                                                                            |
| 05:34      | I know, but it turns out I actually enjoyed piano lessons.                               |
| 05:37      | Yeah.                                                                                    |
| 05:37      | Well, I enjoy piano, so it worked out pretty well.                                       |
| 05:40      | But so I learned to type pretty early on, but I was fairly                               |
| 05:45      | quick at typing.                                                                         |
| 05:46      | I'm also quite quick at reading, but with speed,                                         |
| 05:48      | sometimes you lose accuracy.                                                             |
| 05:50      | And I got bored with maybe speaking teacher's typing, so I                               |
| 05:53      | never really followed it through and that meant that, of                                 |
| 05:56      | course, there'll be lots of mistakes.                                                    |
| 05:57      | And at one point, I think we'd be using, I want to say word                              |
| 06:02      | perfect or some earlier version of like a Microsoft rich                                 |
| 06:08      | text editor that wasn't Word, but it wasn't like notepad.                                |
| 06:11      | And I was using that and I handed the work in the teacher                                |
| 06:17      | lunch and said, no, but go home.                                                         |
| 06:19      | Too many spelling errors.                                                                |
| 06:20      | Try and fix it and so finding that you could do this in                                  |
| 06:24      | Microsoft Word saved my bacon.                                                           |
| 06:26      | Yeah, you know, it's really nice.                                                        |
| 06:27      | And if you're doing that already, congratulations.                                       |
| 06:30      | You're already an automator because you are doing some                                   |
| 06:32      | sort of automation at that kind of entry level text                                      |
| 06:36      | expansion automation.                                                                    |
| 06:38      | Some of the things I do and did very early was not just, you                             |
| 06:44      | know, I started thinking kind of outside of the box of things                            |
| 06:46      | that I type routinely.                                                                   |
| 06:47      | If I have a client with an odd name, you know, that's spelled                            |
| 06:51      | odd, you know, and and it's hard for me to remember.                                     |
| 06:54      | I just have a short name for them in my head or maybe just                               |
| 06:58      | the first name with the last initial and then it will                                    |
| 07:01      | automatically go and type that in.                                                       |
| 07:04      | As an attorney, I do a lot of research and writing and we                                |
| 07:08      | have very specific citation formats for, you know, as a                                  |
| 07:12      | lawyer, you have to go find old court cases and court cases                              |
| 07:15      | are found in different books published by different people                               |
| 07:18      | and the way the courts want you to cite those, you know,                                 |
| 07:22      | the volume and page number of those books so the judge can                               |
| 07:26      | go find the case too is very specific.                                                   |
| 07:29      | But that's a perfect example of something that lends itself                              |
| 07:32      | to basic text expansion and I've been doing that my whole                                |
| 07:35      | career.                                                                                  |
| 07:36      | Yes, I can see that being very useful as it turns out with                               |
| 07:39      | citations.                                                                               |
| 07:40      | I actually use an application called Zotero and there's                                  |
| 07:43      | lots of things that you could use with academic citations,                               |
| 07:46      | but legal citations are from what I understand just a little                             |
| 07:49      | bit different to academic ones.                                                          |
| 07:50      | You know, they're all the same.                                                          |
| 07:52      | I mean, they're not the same, but they're the same.                                      |
| 07:54      | You know, you just got to get some sort of easy way to get                               |
| 07:59      | it in like, I mean, like I can tell you like if I type CA3,                              |
| 08:05      | that's CalAP third, which is, you know, I mean, it's just                                |
| 08:08      | like it's muscle memory for me at this point.                                            |
| 08:11      | But but you have to have if you when you type it out,                                    |
| 08:14      | you've got to have the periods in the right places, you know,                            |
| 08:18      | whether or not there are spaces.                                                         |
| 08:19      | There's all these problems you have and text expansion at its                            |
| 08:22      | most basic level solves that problem.                                                    |
| 08:25      | Now, it started out in word processors, but then very quickly                            |
| 08:29      | the operating system vendors started to realise, hey, this                               |
| 08:32      | is something we should do.                                                               |
| 08:33      | They've got it on Windows.                                                               |
| 08:35      | They've got it on Mac.                                                                   |
| 08:36      | They've got it even now on iOS.                                                          |
| 08:37      | It took a while to get to iOS, but they they've got text                                 |
| 08:41      | expansion at the most basic level.                                                       |
| 08:43      | You find it in the settings on your Mac or if you go into                                |
| 08:47      | the settings on your iOS device under general, then keyboard,                            |
| 08:52      | it's under there.                                                                        |
| 08:52      | It's kind of hard to find if you don't know it's there.                                  |
| 08:56      | For the longest time, the synchronisation, the iCloud                                    |
| 08:59      | synchronisation of text expansion snippets was terrible.                                 |
| 09:05      | I mean, it was to me, it was like the poster child of bad iCloud                         |
| 09:09      | for, I don't know, like for four years or something.                                     |
| 09:12      | And it was just amazing to me that like you would go in there                            |
| 09:16      | and you would type in a new snippet and it just would not                                |
| 09:19      | propagate or it would.                                                                   |
| 09:21      | It was like not consistent after after I left my old firm                                |
| 09:25      | because I like had one called elaw, E-L-A-W and that's my                                |
| 09:31      | email for my legal address.                                                              |
| 09:34      | And for whatever reason for years, it would put in the                                   |
| 09:38      | email address for my old law firm.                                                       |
| 09:40      | It just, it refused to update that and I would delete it.                                |
| 09:45      | Oh man, I did so much crazy stuff, Rose.                                                 |
| 09:48      | At some point, I think I reinstalled iOS.                                                |
| 09:51      | And it still didn't fix it?                                                              |
| 09:53      | Yeah, just because I couldn't get it to work.                                            |
| 09:54      | And oh man, it made me so crazy.                                                         |
| 09:56      | But now it does work now, yeah.                                                          |
| 09:58      | Yeah, now it works.                                                                      |
| 09:59      | So I guess I shouldn't go on about it.                                                   |
| 10:01      | But it, for the longest time, that was a problem.                                        |
| 10:05      | But it's there and the nice thing about that is it's system                              |
| 10:08      | wide, you know, when it's just in Microsoft Word, all the                                |
| 10:13      | effort you put into creating these text expansion snippets                               |
| 10:16      | are only good in Microsoft Word.                                                         |
| 10:18      | Once it hits the operating system, you can use them                                      |
| 10:20      | in any application you want.                                                             |
| 10:23      | The OS expansion does have its limitations.                                              |
| 10:27      | Like for example, one that just drives me baddie is the                                  |
| 10:33      | requirement to have a leading space in order to do an                                    |
| 10:37      | expansion.                                                                               |
| 10:38      | This is something you may not know.                                                      |
| 10:40      | I mean, it is kind of a power user feature.                                              |
| 10:43      | But like for instance, sometimes I wanted to use in tech                                 |
| 10:48      | and OmniFocus, I want to insert a little TextExpander                                   |
| 10:53      | or TextExpander.                                                                        |
| 10:54      | You can see where I'm going with this, right?                                            |
| 10:56      | I want to insert a little text expansion before a word                                   |
| 11:00      | like when I use the capture tool on iOS to capture a link                                |
| 11:05      | into OmniFocus and I want to put read and review this article                            |
| 11:09      | or consider linking to this article.                                                     |
| 11:12      | I have all these different little like phrases that I                                    |
| 11:16      | insert before something I've put in OmniFocus.                                           |
| 11:19      | But I can't use that with the built-in expansion snippets                                |
| 11:23      | because it has to have a leading space.                                                  |
| 11:25      | So you literally have to like get the cursor to the beginning                            |
| 11:29      | of the line, hit the space then backspace without deleting                               |
| 11:33      | the space you just created.                                                              |
| 11:34      | And then you can run the built-in snippet.                                               |
| 11:36      | So I feel like the operating system is great for typos                                   |
| 11:42      | and citations and the stuff we've been talking about.                                    |
| 11:45      | But it also has its limitations.                                                         |
| 11:48      | It definitely does.                                                                      |
| 11:49      | You can't include things like line breaks either,                                        |
| 11:51      | which is really unfortunate because I have quite a few                                   |
| 11:55      | different email signatures is the wrong phrase for it                                    |
| 11:59      | because I have of course email signatures built into the                                 |
| 12:02      | various different mail applications that I keep switching                                |
| 12:05      | through on a regular basis.                                                              |
| 12:07      | But I do before my email signature I'll usually write                                    |
| 12:11      | something depending on who I'm writing to.                                               |
| 12:14      | It might be a theme from see you soon to with best regards                               |
| 12:19      | depending on the tone of the email.                                                      |
| 12:20      | But I can't have it do a line break after that and then put                              |
| 12:24      | something else in, which is quite frustrating.                                           |
| 12:28      | I have to say.                                                                           |
| 12:29      | Yeah, I mean in some of the snippets I'm going to talk                                   |
| 12:31      | about later are quite advanced and almost all of them use                                |
| 12:35      | line breaks and you just can't do it.                                                    |
| 12:38      | So I don't think they're really trying to make the built-in                              |
| 12:42      | operating system automation as an automation tool as the way                             |
| 12:48      | some of these other developers are.                                                      |
| 12:51      | And it's nice that it works.                                                             |
| 12:52      | It's nice that it syncs.                                                                 |
| 12:53      | It could be better.                                                                      |
| 12:54      | It's perfect for little things like email addresses,                                     |
| 12:57      | phone numbers, stuff like that.                                                          |
| 12:59      | But that is wonderful.                                                                   |
| 13:01      | Yeah, but it could be better.                                                            |
| 13:02      | Honestly, yeah, but this is like I said the start for so many                            |
| 13:06      | people and I think text expansion, you know, you think                                   |
| 13:11      | about the tool belt like a carpenter wears everybody has                                 |
| 13:13      | a screwdriver in their tool belt.                                                        |
| 13:15      | I feel like text expansion is like that screwdriver.                                     |
| 13:17      | It's there's just so many things you can do with this type                               |
| 13:21      | of automation and it really is automation.                                               |
| 13:24      | I mean the there is a trigger and there is an action in this                             |
| 13:28      | case, the trigger as you type a phrase in the action is                                  |
| 13:30      | it does something with that phrase.                                                      |
| 13:33      | And once you kind of get that internalised and you and you                               |
| 13:36      | put on your automator hat because you're listening to this                               |
| 13:38      | show, you have an automator hat.                                                         |
| 13:40      | You might not know it, but you do.                                                       |
| 13:42      | Suddenly you can really make magic happens and and that's why                            |
| 13:46      | we've made reference to text expansion type automation                                   |
| 13:49      | throughout the run of the show.                                                          |
| 13:51      | And that's why I feel like a lot of developers started to                                |
| 13:55      | say what more can I do with that?                                                        |
| 13:58      | Yeah, I mean, it's it's one of these things where a lot of                               |
| 14:00      | people are going, hmm, actually, this is something that is                               |
| 14:03      | very easy to understand.                                                                 |
| 14:04      | And if you if you're there going, well, I'm not sure I'm                                 |
| 14:07      | going to see use case.                                                                   |
| 14:08      | Don't worry, we've got a whole rest of the podcast convinced                             |
| 14:10      | you.                                                                                     |
| 14:13      | This episode of automators is brought to you by back place,                              |
| 14:16      | the unlimited cloud backup for Macs and PCs that starts at                               |
| 14:19      | just $6 a month.                                                                         |
| 14:22      | I've been using back place for a long time and the reason is                             |
| 14:26      | I don't want to have that data disaster that we always hear                              |
| 14:29      | about here at the automators.                                                            |
| 14:32      | You know how it goes.                                                                    |
| 14:33      | You think you've got everything covered.                                                 |
| 14:34      | You think you've got it all backed up, but it's gone.                                    |
| 14:36      | Maybe someone breaks in and steals your computer and your                                |
| 14:39      | attached backup drive or maybe haven't tested your backup                                |
| 14:42      | drive and it just goes bad.                                                              |
| 14:44      | Having that second off site backup is the way to really                                  |
| 14:48      | protect yourself and that's the back place does.                                         |
| 14:50      | You just set it up.                                                                      |
| 14:51      | It puts a little application in your menu bar and it starts                              |
| 14:55      | uploading your drive off site for you.                                                   |
| 14:58      | I think this is just a necessary step whenever you're going                              |
| 15:02      | to have a backup.                                                                        |
| 15:02      | It it's just in 2019.                                                                    |
| 15:05      | It's silly not to have a off site backup because it's just                               |
| 15:09      | your data is too important.                                                              |
| 15:10      | So, so how do you get started?                                                           |
| 15:12      | You can sign up for a 15 day free trial with no credit card                              |
| 15:15      | required at backblaze.com/automators back plays backs                              |
| 15:20      | up your documents, your music, photos, videos, drawing,                                  |
| 15:23      | projects, everything that's important to you.                                            |
| 15:25      | Sometimes you need access to a file on a go.                                             |
| 15:28      | Guess what Backblaze has got you covered?                                                   |
| 15:30      | You can use the super easy mobile application to access                                  |
| 15:33      | all your data anywhere in the world, even from your phone.                               |
| 15:37      | We're on vacation in Hawaii a few years ago and I needed                                 |
| 15:40      | something that was on the archive drive that's attached                                  |
| 15:43      | to my Mac.                                                                               |
| 15:43      | Of course, I didn't have access to it, but I just use the                                |
| 15:46      | Backblaze app on my iOS device.                                                          |
| 15:49      | Got it.                                                                                  |
| 15:49      | No problem.                                                                              |
| 15:50      | Backblaze is backed up over 750 petabytes and counting.                                  |
| 15:55      | I don't even know what a petabyte is to be honest with                                   |
| 15:57      | you, but I think that's a lot of data and they've done 750                               |
| 16:01      | of those that's the equivalent of 750 million gigabytes.                                 |
| 16:05      | Well, there you go.                                                                      |
| 16:05      | I just answered my own question.                                                         |
| 16:07      | These guys know their stuff.                                                             |
| 16:08      | If you did have a data disaster, Backblaze can ship you                                  |
| 16:12      | a hard drive with all your data on it.                                                   |
| 16:14      | And once you've restored your precious documents, you can                                |
| 16:17      | send the hard drive back for a full refund.                                              |
| 16:19      | Backblaze has restored over 35 billion files.                                            |
| 16:23      | That's a lot of safe projects, assignments and family photo                              |
| 16:26      | albums.                                                                                  |
| 16:27      | Having backups means total peace of mind.                                                |
| 16:30      | It's the difference between a data disaster costing you                                  |
| 16:33      | hours upon hours of work and just having a hard drive                                    |
| 16:36      | shipped to you.                                                                          |
| 16:37      | You know, you're in good hands because Backblaze are loved                               |
| 16:40      | by recommended by the Verge, Macworld, Next, Lifehacker                                   |
| 16:44      | Lifewire, 9to5Mac and more.                                                      |
| 16:47      | I'll tell you, I have been so happy to have this Backblaze                               |
| 16:50      | subscription when my daughter went off to school.                                        |
| 16:52      | I bought one for her.                                                                    |
| 16:53      | I just think that anybody that is operating a computer in                                |
| 16:57      | addition to having a local backup should have an offsite                                 |
| 16:59      | in Backblaze is my weapon of choice.                                                     |
| 17:02      | So avoid that looming disaster.                                                          |
| 17:04      | Go to backblaze.com/automators for your unrestricted                               |
| 17:08      | free trial and let them know you heard about it here on                                  |
| 17:10      | the automators.                                                                          |
| 17:11      | We really appreciate that and appreciate their support.                                  |
| 17:14      | So that's backblaze.com/automators.                                                |
| 17:17      | Go there now.                                                                            |
| 17:18      | Thank you Backblaze for saving us from countless data                                    |
| 17:20      | disasters and for their support of this show and Relay FM.                               |
| 17:26      | Okay.                                                                                    |
| 17:26      | So some third party developers decided text expansion is                                 |
| 17:30      | great.                                                                                   |
| 17:30      | Let's do more with that.                                                                 |
| 17:31      | And the poster child for this is our occasional sponsor                                  |
| 17:35      | TextExpander.                                                                           |
| 17:37      | Now, the TextExpander is an occasional sponsor of the                                   |
| 17:40      | automators.                                                                              |
| 17:40      | In fact, they were the first sponsor of this show once                                   |
| 17:43      | they heard we were doing it.                                                             |
| 17:44      | They said we wanted and we appreciate that, but they are                                 |
| 17:47      | not sponsoring today's episode.                                                          |
| 17:49      | They don't even know we're recording it.                                                 |
| 17:51      | We didn't want it.                                                                       |
| 17:52      | You know, this was just, we wanted to talk about text                                    |
| 17:55      | expansion and TextExpander is a part of the conversation.                               |
| 17:58      | And so this is not, they're not paying us to talk about it.                              |
| 18:02      | So what does it do?                                                                      |
| 18:03      | It does the basic expansion.                                                             |
| 18:04      | We were talking about it's system wide.                                                  |
| 18:07      | It syncs between platforms.                                                              |
| 18:09      | A few years ago, they made some real architectural changes                               |
| 18:13      | to the application that allows it to work on Mac iOS and                                 |
| 18:16      | even Windows.                                                                            |
| 18:17      | So if you've got a Windows machine at work, your snippets                                |
| 18:20      | will, will go across and they have a great system in                                     |
| 18:24      | place for shared snippet libraries.                                                      |
| 18:26      | I know roses shared some live shared a bunch over at                                     |
| 18:28      | macsparky.com/te snippets.                                                         |
| 18:32      | And even if you go on their website, they've got a bunch                                 |
| 18:34      | there you can download.                                                                  |
| 18:35      | So they, it's, you know, they've, they've got all the,                                   |
| 18:38      | the basic text expansion stuff covered.                                                  |
| 18:41      | They also have collaboration, which is built in.                                         |
| 18:43      | We're not going to really talk about that today much,                                    |
| 18:45      | but for instance, I collaborate with my assistant and                                    |
| 18:48      | we have a shared bank of snippets.                                                       |
| 18:50      | So when I change links and things for customer support                                   |
| 18:53      | emails, she uses the same phrase, but the snippet                                        |
| 18:57      | gets updated on the back end, which is really cool.                                      |
| 18:59      | But what we want to talk about today is TextExpander                                    |
| 19:03      | as an automator tool.                                                                    |
| 19:05      | Yes.                                                                                     |
| 19:06      | And believe me, it is a really good one.                                                 |
| 19:09      | And personally, I'm just all over the JavaScript support                                 |
| 19:12      | in it, but I think we're going to get to that in a moment.                               |
| 19:14      | Aren't we?                                                                               |
| 19:15      | Yeah, I think let's kind of work through it because                                      |
| 19:17      | there's a lot you can do with it.                                                        |
| 19:19      | Working our way up to JavaScript.                                                        |
| 19:23      | Yeah.                                                                                    |
| 19:23      | You don't have to be a programmer to do automation                                       |
| 19:27      | with TextExpander.                                                                      |
| 19:27      | That's one of the things I like about it.                                                |
| 19:30      | So they've got different categories they've added to                                     |
| 19:33      | the years to text expansion in TextExpander that, that goes                             |
| 19:38      | beyond what you get with the general system things.                                      |
| 19:41      | One of those is text tokens, and it's very easy when                                     |
| 19:45      | you're creating a snippet, they just did an update that made                             |
| 19:47      | it even easier to insert a token to represent something                                  |
| 19:50      | like the date and time.                                                                  |
| 19:53      | And, and it allows you to very, very much customise that.                                |
| 19:57      | You know, you can use like the, the date, the month as a                                 |
| 20:01      | number or the month spelled out or the date abbreviated                                  |
| 20:05      | or the date as a number, no matter how you want to format                                |
| 20:08      | a date and a time you can do with TextExpander.                                         |
| 20:11      | And the nice thing is you can insert that into a snippet.                                |
| 20:15      | And one of the things I do across all of my systems                                      |
| 20:18      | is I often date stamp entries and like for each client                                   |
| 20:24      | or matter, I may have a little text file I've got in Ulysses                             |
| 20:29      | and every time we get on the phone, I can just type it for                               |
| 20:33      | me, it is X DTS, which is X, which is the key I used to                                  |
| 20:39      | start telling my Mac, I'm going to about to do a snippet                                 |
| 20:41      | and DTS is date and time stamp.                                                          |
| 20:45      | Or if I go X DS, it's X, it's a date stamp.                                              |
| 20:48      | It just gives the date, but often like someone will call                                 |
| 20:51      | me, I just open up my file or I'll even do it in [[Drafts]]                                 |
| 20:55      | and I go X DTS and then boom, it puts the current date and                               |
| 20:59      | time as a stamp in and then I can start typing, you know,                                |
| 21:03      | based on what we're talking about and what I'm following                                 |
| 21:05      | up on.                                                                                   |
| 21:06      | And then once I either save that to Ulysses or if I'm in                                 |
| 21:09      | [[Drafts]], I move it to Ulysses.                                                            |
| 21:11      | I've got that recorded and sitting there, you know,                                      |
| 21:15      | probably five to, you know, 10 times a day and typing that                               |
| 21:21      | date and time stamp and manually is a complete pain in the                               |
| 21:23      | neck.                                                                                    |
| 21:23      | So this is an example of the advantage of a token.                                       |
| 21:27      | Yes.                                                                                     |
| 21:28      | And the advantage of this as well is for anybody who's                                   |
| 21:32      | listening, who's ever done that thing where you type the                                 |
| 21:34      | same thing so often, you don't know whether or not you're                                |
| 21:37      | spelling it correctly anymore and you look at the word                                   |
| 21:40      | February and you go, so one hour or two in February,                                     |
| 21:45      | there's two, but you know, you look at it and you start                                  |
| 21:47      | thinking it's wrong with this.                                                           |
| 21:48      | You don't even worry about that because you know it's                                    |
| 21:50      | right every single time and that is one of the significant                               |
| 21:53      | advantages and it means if you're sending documents out                                  |
| 21:56      | with date formatting in, it's always consistent because                                  |
| 21:59      | there's nothing worse than going through a document and                                  |
| 22:01      | going, well, in this place, they've written this like                                    |
| 22:04      | this and this place, they've written it like that.                                       |
| 22:06      | That is one of the great things about using                                         |
| 22:08      | TextExpander for this because you can just do it and it will                                 |
| 22:11      | be the same every time.                                                                  |
| 22:13      | I have to say I use the time stamps a lot more because at                                |
| 22:17      | work we have to, we have to check what we've done throughout                             |
| 22:19      | the day as a duty so that we know that where our time is                                 |
| 22:22      | going approximately so that we know, okay, for example,                                  |
| 22:25      | this project is ready to go into another department for                                  |
| 22:29      | maintenance versus it's still inactive development and I                                 |
| 22:33      | use the date stamps all the time and I have it formatted                                 |
| 22:36      | as 24 hour with no code long, which is something I would                                 |
| 22:39      | usually do if I was typing the time and it is so useful                                  |
| 22:42      | for that because I just, I type, I can't even remember,                                  |
| 22:46      | I type XH, that's it, XH and then I get the other current                                |
| 22:50      | time because I don't ever have XH's in my words apparently.                              |
| 22:54      | So I, you know, one of the things I do is I send out monthly                             |
| 22:59      | bills for the legal practice and the subject line will say                               |
| 23:03      | Sparks law slash, you know, April invoice or whatever                                    |
| 23:08      | the current month is and that's the same thing.                                          |
| 23:09      | It's a TextExpander snippet and it's using, instead of using                            |
| 23:13      | the full date, all it's using is the current month.                                      |
| 23:16      | But I just never have to think about it, you know, the invoices                          |
| 23:19      | go out, it says the right thing at the top of the, I mean,                               |
| 23:22      | the last thing you want to do is send out an invoice and have                            |
| 23:25      | the wrong month listed in the subject line, you know, and                                |
| 23:28      | you know, it's just like everything in your life that                                    |
| 23:31      | involves a date or time, why not automate it, make it always                             |
| 23:35      | right with something like this feature in TextExpander?                                 |
| 23:40      | Yes, yeah, it is perfect, things like that.                                              |
| 23:43      | But as well as this, you can do the, the, the calculations.                              |
| 23:46      | So you can do date and time mass, like adding a year or                                  |
| 23:49      | subtracting three days, things like that, which is really                                |
| 23:52      | useful if you want to say, you know, I'll get this done by                               |
| 23:55      | this time next week.                                                                     |
| 23:56      | Okay.                                                                                    |
| 23:57      | And then you can type whatever snippet user side is going                                |
| 23:59      | to be for this time next week.                                                           |
| 24:01      | And then it will put in next week's date and time or next                                |
| 24:04      | week's date is probably more realistic for you without you                               |
| 24:08      | having to get out your calendar and go, okay, so what day is                             |
| 24:12      | it today right now?                                                                      |
| 24:13      | If I add week to that, well, actually Monday, you get sucked                             |
| 24:17      | into your calendar.                                                                      |
| 24:18      | You just type next week and it does it for you, which is                                 |
| 24:21      | perfect.                                                                                 |
| 24:21      | I use that quite frequently as well.                                                     |
| 24:24      | Yeah, it's great.                                                                        |
| 24:25      | And, um, and that, but that's just one feature.                                          |
| 24:28      | You can also do a special characters, um, you know, we talked                            |
| 24:33      | about the carriage return, which is just so essential, like                              |
| 24:36      | even just like making something as simple as an email signature.                         |
| 24:39      | You need that carriage return, but it also includes keys like                            |
| 24:43      | the escape key, the return key and the tab key.                                          |
| 24:46      | For me, the tab key is the real golden child of this feature                             |
| 24:51      | because that just opened so many doors for you in terms of                               |
| 24:55      | automation.                                                                              |
| 24:56      | Um, for instance, when you're sending an email, um, you know,                            |
| 25:00      | traditionally, you would have to have one snippet to do the                              |
| 25:04      | subject line and one snippet to do the body of the email.                                |
| 25:07      | But with the tab key enabled, you can now have one snippet that                          |
| 25:13      | creates the current like, like I was just talking about that                             |
| 25:16      | one with the invoicing, it uses the, um, it puts the date in                             |
| 25:21      | with the proper, you know, format of the current month and                               |
| 25:24      | then it hits the tab key.                                                                |
| 25:25      | Well, what happens in any email application when you hit the                             |
| 25:29      | tab key jumps to the subject line, you know, the subject of                              |
| 25:32      | the email, you know, or I guess the body, you'd call it.                                 |
| 25:36      | So having the tab key there allows you to have one snippet                               |
| 25:39      | that you, that you can fire off in the sub in the subject or                             |
| 25:43      | the subject line, and then it'll type the subject and then hit                           |
| 25:47      | the tab key and go to the body and start typing that for you                             |
| 25:50      | too.                                                                                     |
| 25:50      | And it allows you to get two for one basically.                                          |
| 25:53      | Yeah.                                                                                    |
| 25:54      | And it, that is really useful because I've got a little story                            |
| 25:57      | here.                                                                                    |
| 25:58      | Uh, there, the ticket system that I work with at work.                                   |
| 26:00      | So I, I program a bunch of things at work and including                                  |
| 26:03      | enhancements to our ticket system.                                                       |
| 26:04      | Um, and it has a rest EPO, which means I can give you a                                  |
| 26:08      | rest EPO, which means I can go crazy and everything via that.                            |
| 26:11      | There are some things that you can't do through this.                                    |
| 26:14      | Um, and when GDPR was coming up, I had to set up something                               |
| 26:17      | which you could only do via a Java applet.                                               |
| 26:20      | And I had to fill out 16 fields in the Java applet.                                      |
| 26:23      | And I had to click, okay, click a few more things and then fill                          |
| 26:26      | out those same 16 fields exactly the same way.                                           |
| 26:29      | Yeah.                                                                                    |
| 26:30      | 28 times.                                                                                |
| 26:31      | You know what I did?                                                                     |
| 26:32      | I made a TextExpander snippet.                                                          |
| 26:34      | I would open it, type three characters, and it would do                                  |
| 26:36      | everything for me.                                                                       |
| 26:37      | So I was sitting there watching TV, click, click, type three                             |
| 26:40      | characters, give it a few moments done next.                                             |
| 26:43      | That saved me so many hours that evening.                                                |
| 26:46      | And I went into work the next day and my boss said,                                      |
| 26:48      | how long were you working last night?                                                    |
| 26:50      | And I said, Oh, not much.                                                                |
| 26:51      | You know, I got TextExpander to do it for me, which is perfect                          |
| 26:54      | for that.                                                                                |
| 26:55      | Oh, you're better than I am.                                                             |
| 26:56      | I would have been like, Oh man, I was working so hard.                                   |
| 26:59      | Oh, my, my boss thought I did work very hard because I found                             |
| 27:02      | a smarter way to do it and so the, the slower way to do it.                              |
| 27:05      | So he was pleased with me.                                                               |
| 27:06      | You also can use that tab key on web forms, you know, so you                             |
| 27:10      | can often go to the same web forms.                                                      |
| 27:13      | You can map it out with the tab keys and actually create                                 |
| 27:16      | entries very quickly.                                                                    |
| 27:18      | Just a lot you can do with those special characters.                                     |
| 27:21      | And then another thing that TextExpander can do is it can use                           |
| 27:25      | a clipboard, which is a secret weapon in my mind.                                        |
| 27:29      | I feel like a lot of people don't realise that or don't think                            |
| 27:32      | about how they can use it.                                                               |
| 27:33      | A good example for me, which is kind of like your example is                             |
| 27:36      | sometimes as a lawyer, I have to send out what they call                                 |
| 27:39      | discovery.                                                                               |
| 27:40      | It's just, it's a fancy legal term says I have to ask, ask                               |
| 27:43      | you questions.                                                                           |
| 27:44      | And often there are questions that are somewhat related like                             |
| 27:47      | I had a case recently that involved some, some government                                |
| 27:52      | contracts and they've got these super long numbers attached                              |
| 27:55      | to these contracts.                                                                      |
| 27:56      | And for each contract that I had like 10 questions, you know,                            |
| 28:00      | when was it entered, who signed it, were there any changes?                              |
| 28:03      | You know, it was like 10 essentially boilerplate questions                               |
| 28:07      | I was going to ask over and over again for all 10 contracts.                             |
| 28:11      | And I got thinking, well, I don't want to, you know, I don't                             |
| 28:14      | want to go in and manually do this.                                                      |
| 28:16      | You know, there were 10 contracts, 10 questions, 100                                     |
| 28:19      | questions at a right.                                                                    |
| 28:20      | And I didn't want to have to do this over and over again.                                |
| 28:22      | So I just had a text list of the 10 contract numbers.                                    |
| 28:27      | And once I created the one set of 10 questions, I put in a                               |
| 28:33      | placeholder for, in text expanded, you can do this, say                                  |
| 28:37      | insert the clip, the contents of the current clipboard.                                  |
| 28:39      | So just like you can insert the date, you can insert the                                 |
| 28:42      | contents of your clipboard.                                                              |
| 28:43      | So all I had to do once I set that up was I would just go to                             |
| 28:48      | the, to the Word document.                                                               |
| 28:50      | I would select and copy the first contract member into the                               |
| 28:54      | copy buffer, and then I would go into the Word document.                                 |
| 28:57      | I typed the text expansion snippet and boom, it would hit 10                             |
| 29:01      | with that contract number.                                                               |
| 29:02      | Then I went and copied the second contract number.                                       |
| 29:05      | Did the same thing.                                                                      |
| 29:06      | I did that 10 times and drastically reduced the amount                                   |
| 29:10      | of time it took me to put together something kind of                                     |
| 29:12      | complicated.                                                                             |
| 29:13      | And not only was it nice because it was done fast.                                       |
| 29:16      | I knew that each one had exactly the right number and exactly,                           |
| 29:20      | you know, there were, there were no mistakes in essence where                            |
| 29:23      | I had had someone type it, who knows what would have happened.                           |
| 29:26      | Yes, that, that is a perfect use case.                                                   |
| 29:29      | Lawyers are terrible.                                                                    |
| 29:30      | You know, if you get like one number wrong in the contract                               |
| 29:32      | number, they'll say, well, we never signed that contract.                                |
| 29:34      | We didn't, you know, because one of the numbers was off.                                 |
| 29:36      | So, so you got to get it exactly right.                                                  |
| 29:38      | And this is just a nice example of using that clipboard.                                 |
| 29:41      | The clipboard is just kind of a free agent of ways to drop                               |
| 29:47      | information into a text expansion snippet that you may use                               |
| 29:50      | over and over again.                                                                     |
| 29:51      | Maybe you're sending out information to a customer about,                                |
| 29:56      | and it's a different product every time you send the email,                              |
| 29:58      | but you want to send the email, you can have it grab the contents                        |
| 30:01      | of your clipboard.                                                                       |
| 30:02      | That's nice.                                                                             |
| 30:04      | Yes, it is very useful.                                                                  |
| 30:06      | And also one of the things that I have been doing is plain text                          |
| 30:11      | or pasting this as plain text.                                                           |
| 30:14      | So why type semi-colon PC?                                                               |
| 30:16      | It types out my clipboard, but it's plain text,                                          |
| 30:19      | which means that any and all formatting gets removed,                                    |
| 30:22      | but I've still got everything the way it is.                                             |
| 30:24      | Yeah.                                                                                    |
| 30:25      | Sometimes, and I don't know which applications this is off the                           |
| 30:27      | top of my head.                                                                          |
| 30:28      | I just noticed this happen occasionally.                                                 |
| 30:30      | If I try and do command alt V, command shift alt V, sorry,                               |
| 30:34      | is the correct one to paste without formatting,                                          |
| 30:37      | every so often it goes a little bit wonky.                                               |
| 30:39      | But if I use the plain text snippet with the clipboard inside                            |
| 30:44      | of it and my TextExpander abbreviation, it works.                                       |
| 30:48      | So that saves my bacon every once in a while.                                            |
| 30:51      | And just to make that clear, what's happening is                                     |
| 30:53      | TextExpander can work with either rich text or plain text.                                   |
| 30:57      | So all she's done is made a text expansion snippet that is pasting                       |
| 31:02      | the current contents of the clipboard in plain text.                                     |
| 31:05      | So that necessarily strips any formatting.                                               |
| 31:09      | So you can copy anything and then add,                                                   |
| 31:13      | what's your snippet to paste that, Rose?                                                 |
| 31:16      | It's semicolon PC, which is not very efficient in hindsight.                             |
| 31:20      | The keys are quite spread out.                                                           |
| 31:22      | But it works.                                                                            |
| 31:23      | It does.                                                                                 |
| 31:24      | And it's in my muscle memory now.                                                        |
| 31:26      | And as I type with all 10 fingers, it's not really a problem.                            |
| 31:30      | But related to this, so you can use nested snippets.                                     |
| 31:35      | And this is one which I wish I'd known about earlier.                                    |
| 31:38      | It is a fairly new feature to be fair.                                                   |
| 31:41      | But you can have one snippet included in another snippet.                                |
| 31:45      | And the advantage of this is, say, for example,                                          |
| 31:48      | you've got several different snippets that include your address.                         |
| 31:50      | Maybe one that's got directions to your building,                                        |
| 31:52      | one that's got directions to your office,                                                |
| 31:54      | one for people who are looking to deliver something to you,                              |
| 31:58      | and they've all got your address in.                                                     |
| 31:59      | Well, ideally, all of these will reference one snippet,                                  |
| 32:02      | which is your address snippet.                                                           |
| 32:04      | And then if you ever move, you update your address once,                                 |
| 32:07      | and it's done.                                                                           |
| 32:09      | Because that is so useful.                                                               |
| 32:11      | And especially things like phone numbers or email addresses,                             |
| 32:13      | which are perhaps more likely to change,                                                 |
| 32:15      | then you can do that as well.                                                            |
| 32:18      | And having nested snippets, one snippet inside the other,                                |
| 32:20      | means you update one, and then it just rolls out everywhere.                             |
| 32:24      | And that is definitely a good automation for everybody.                                  |
| 32:28      | Yeah, and one of my favourite script-based snippets                                       |
| 32:32      | is one that I use all the time in email,                                                 |
| 32:34      | where it grabs the name of the recipient.                                                |
| 32:38      | It just uses a little bit of [[AppleScript]] to look at the email                            |
| 32:42      | and whoever the address is, it uses their first name.                                    |
| 32:45      | And that is one snippet.                                                                 |
| 32:47      | But then I use that as a nested snippet in other snippets.                               |
| 32:50      | So I've got, if I type "xhi", it'll say "hi Rose comma".                                   |
| 32:57      | And that part, "Rose", is that nested snippet.                                             |
| 33:00      | But if I type xhello, it'll say hello, Rose.                                             |
| 33:03      | Or if I type xhey, it'll say hey, Rose.                                                  |
| 33:05      | And so it was a way to not have to replace that AppleScript                              |
| 33:11      | in every different iteration of how I want to send an email.                             |
| 33:14      | And if I want to make an adjustment to the AppleScript                                   |
| 33:17      | recently with some listener feedback,                                                    |
| 33:19      | I actually made a few changes to it.                                                     |
| 33:21      | I only had to fix it in one place.                                                       |
| 33:23      | Yes, which is perfect.                                                                   |
| 33:25      | And for people who are there wanting to know                                             |
| 33:28      | what the technical term for this might be called,                                        |
| 33:30      | you could consider it to be a function in programming,                                   |
| 33:32      | which is a thing that you call from lots of different places                             |
| 33:36      | to save you rewriting the same code everywhere.                                          |
| 33:38      | Well, in this case, the code is your text,                                               |
| 33:40      | it doesn't matter, it's still a function.                                                |
| 33:42      | Yeah, I never really thought of it in those terms                                        |
| 33:44      | in TextExpander, but you're absolutely right.                                           |
| 33:46      | That's what it is.                                                                       |
| 33:47      | Especially if you're calling something like your AppleScript                             |
| 33:49      | or as we'll get to you later, some of the JavaScript,                                    |
| 33:51      | it's a function.                                                                         |
| 33:53      | Another thing you can do with a TextExpander                                            |
| 33:56      | that's pretty cool is you can place the cursor                                           |
| 33:59      | after you run the snippet.                                                               |
| 34:01      | So an example of this I use is my file naming snippets.                                  |
| 34:06      | I've got a bunch of them that automatically insert                                       |
| 34:09      | the current date, and then at the end,                                                   |
| 34:12      | it'll say something like MacSparky Expense                                              |
| 34:14      | so [[Hazel]] can do something with it.                                                       |
| 34:16      | But then in the middle is two dashes                                                     |
| 34:18      | where I would put a description.                                                         |
| 34:20      | And I like the description in the middle,                                                |
| 34:22      | because in term, like this gets shared with the accountant,                              |
| 34:25      | I want her to see the date, the description,                                             |
| 34:27      | and then the MacSparky Expense                                                          |
| 34:29      | so she knows what account it's from.                                                     |
| 34:31      | But in order to go and add the description later,                                        |
| 34:35      | you have to place the cursor there.                                                      |
| 34:38      | But you can do that. You can just say,                                                   |
| 34:40      | okay, then move the cursor to this position.                                             |
| 34:42      | And I don't use that often, but when I do,                                               |
| 34:44      | it's very helpful.                                                                       |
| 34:46      | Yes, I can see that being quite useful.                                                  |
| 34:48      | I have several things that I type regularly,                                             |
| 34:51      | and having the cursor positioned afterwards is really good.                              |
| 34:54      | So in general, whenever I type an opening bracket,                                       |
| 34:56      | be that a round bracket, a curly bracket, or a square bracket,                           |
| 34:59      | it will automatically type the closing one for me                                        |
| 35:02      | and put the cursor in the middle.                                                        |
| 35:04      | So I can just keep typing.                                                               |
| 35:06      | This is something that I stole from my IDE.                                              |
| 35:09      | I use PHPStorm at work,                                                                  |
| 35:11      | and an IDE is just a development environment application.                                |
| 35:14      | So it's supposed to make it easier for me to develop.                                    |
| 35:17      | And one of the things that it does,                                                      |
| 35:19      | because you use brackets a lot,                                                          |
| 35:20      | is it automatically closes your brackets for you                                         |
| 35:22      | and puts the cursor back in the middle.                                                  |
| 35:24      | So in all the other applications that I write in that don't do that,                     |
| 35:27      | I have to actually expand to do it for me.                                               |
| 35:29      | Yeah, and like if you wanted to use Markdown a lot,                                      |
| 35:32      | TextExpander is great for Markdown                                                       |
| 35:35      | in terms of creating a snippet that could insert,                                        |
| 35:38      | for instance, the clipboard for a link,                                                  |
| 35:40      | and then place the cursor where you want to type the description.                        |
| 35:43      | Yeah.                                                                                    |
| 35:45      | These are little things, but it doesn't take long to set this up.                        |
| 35:48      | Like I said, the beauty about text expansion                                              |
| 35:51      | is that it takes almost no effort to set it up,                                          |
| 35:54      | and you can use it every day.                                                            |
| 35:56      | You get rewarded or you get your time back very quickly.                                 |
| 35:59      | Yes, definitely.                                                                         |
| 36:01      | So you use fill-in snippets a lot.                                                       |
| 36:03      | And this is something that I don't use that much                                         |
| 36:05      | because I tend not to have so many emails                                                |
| 36:08      | and things that I send that have got the same text in them.                              |
| 36:11      | Yeah.                                                                                    |
| 36:13      | So how do you use fill-ins?                                                              |
| 36:15      | I use fill-ins all the time there.                                                       |
| 36:17      | So a fill-in is just like a form letter kind of thing,                                   |
| 36:20      | you know, where I'll say,                                                                |
| 36:22      | Dear, and then have a fill-in field,                                                     |
| 36:25      | and it'll say, well, who are you sending it to?                                          |
| 36:27      | That invoicing thing I was talking about earlier,                                        |
| 36:30      | what it puts the date and the subject line and then hits the tab key.                    |
| 36:33      | The next thing it'll say is hello,                                                       |
| 36:35      | and then I have a fill-in for the client name.                                           |
| 36:38      | And the reason I don't use the AppleScript for that                                     |
| 36:42      | is because I'm doing it on a web form                                                    |
| 36:44      | and that there isn't an AppleScript to address as the web form.                         |
| 36:47      | And sometimes I want to address it to someone else at the company.                       |
| 36:51      | And so there's a basic one-line fill-in                                                  |
| 36:54      | where I can type in the name of the recipient.                                           |
| 36:56      | And then with the fill-ins, it's not...                                                  |
| 36:59      | Then there's at the end, there's a multi-line fill-in                                    |
| 37:02      | where I can type in a status report for the month.                                       |
| 37:05      | So when I send the bill out, they get a little description                               |
| 37:08      | of what I'm doing and what I'm up to and what I think is going on.                       |
| 37:11      | But it's not just for that stuff as well.                                                |
| 37:14      | You can also have optional selections in this fill-in field.                             |
| 37:18      | So like one of the optional selections I use in that snippet is...                       |
| 37:23      | And I usually only use this...                                                           |
| 37:25      | It's basically another sentence that I can just check a box                              |
| 37:28      | and it adds to it.                                                                       |
| 37:29      | If I don't check the box, then it doesn't add the sentence.                              |
| 37:32      | And when I have a new client, I'll say,                                                  |
| 37:34      | if you want me to mail you a copy of this with a stamp,                                  |
| 37:38      | let me know.                                                                             |
| 37:39      | And because most of my clients don't need that                                           |
| 37:41      | and I assume they don't from the beginning,                                              |
| 37:43      | but at the beginning, I'll go ahead and check the box                                    |
| 37:45      | so it adds that field.                                                                   |
| 37:46      | Another one I do when it's a new client is I'll say,                                     |
| 37:49      | if you want me to send these emails to someone else at the company,                      |
| 37:52      | let me know.                                                                             |
| 37:53      | And so I've got these optional selections.                                               |
| 37:56      | I never have to type this stuff.                                                         |
| 37:58      | All I type is new bill in the subject line                                               |
| 38:01      | and it does the whole thing.                                                             |
| 38:02      | It puts the date in, it's the tab key,                                                   |
| 38:04      | gives me the fill-in fields and then it creates the email.                               |
| 38:07      | And so things like that that you do that are repeated,                                   |
| 38:11      | this is super useful.                                                                    |
| 38:13      | I use it also all the time for customer support email.                                   |
| 38:16      | I'm actually surprised with your book release                                            |
| 38:18      | that you're not using a few of these                                                     |
| 38:20      | because it's just a thing that happens                                                   |
| 38:23      | as people buy stuff and they have questions.                                             |
| 38:25      | We have a few of them because my co-author Ryan and I,                                   |
| 38:29      | we both use TextExpander.                                                               |
| 38:30      | We actually use TextExpander a lot writing the book.                                    |
| 38:32      | Whenever I wrote the word task in Scrivener,                                             |
| 38:34      | it automatically replaced it with action for me                                          |
| 38:36      | because we wanted to use the word action rather than task.                               |
| 38:39      | And I specifically have an action group                                                  |
| 38:42      | that only worked in Scrivener for this                                                   |
| 38:44      | because having the word task replaced with action everywhere                             |
| 38:47      | else would be quite confusing for some people.                                           |
| 38:50      | We do use it for support as well.                                                        |
| 38:52      | I've got a couple snippets to say, you know, like,                                       |
| 38:55      | no, this book is not being posted.                                                       |
| 38:57      | It is only a digital book.                                                               |
| 38:59      | And, you know, here's a link to where you can find the downloads                         |
| 39:03      | and stuff like that, which is quite useful for people.                                   |
| 39:06      | Well, I mean, the interesting thing to me                                                |
| 39:08      | is we've been going at this now for a little while                                       |
| 39:10      | and there's all these features that you can use                                          |
| 39:13      | with a more powerful text expansion tool than the built-in one.                          |
| 39:16      | And we haven't even talked about scripting yet,                                          |
| 39:18      | but just looking at the tools we've gone through,                                        |
| 39:21      | if somebody doesn't want to deal with programming                                        |
| 39:24      | or, you know, scripting, there's a lot,                                                  |
| 39:27      | there's a lot of power in just those basic tools                                         |
| 39:30      | and you should be checking that stuff out for sure.                                      |
| 39:33      | But let's talk about that, you know, inserting code                                      |
| 39:36      | through text expansion.                                                                  |
| 39:38      | Yes. Well, that's just it.                                                               |
| 39:40      | You're not really inserting code.                                                        |
| 39:42      | You're using text to generate, manipulate text                                           |
| 39:47      | and then you're inserting the result of that,                                            |
| 39:49      | which is in many ways much better than just inserting code                               |
| 39:52      | because, I mean, I can have an automatic type function,                                  |
| 39:55      | open round bracket, close round bracket, open curly bracket,                             |
| 39:57      | close curly bracket.                                                                     |
| 39:59      | But I don't need anonymous functions a lot                                               |
| 40:04      | and in my case, my development environment                                               |
| 40:07      | will do that for me anyway,                                                              |
| 40:09      | so that wouldn't be a particularly good use case                                         |
| 40:11      | for text expansion, but you can.                                                         |
| 40:13      | What I meant by that was you put code into the snippet itself,                           |
| 40:17      | so it does things for you.                                                               |
| 40:19      | Yeah, and that is where it gets really crazy                                             |
| 40:21      | because you can, and what I love about a TextExpander here                              |
| 40:25      | is that you've got the option of doing this in JavaScript                                |
| 40:27      | or AppleScript and I personally find JavaScript                                         |
| 40:30      | for me is a lot easier for manipulating text                                             |
| 40:32      | because you can get the first character of a string,                                     |
| 40:35      | the last character of a string and it's much easier                                      |
| 40:38      | and I find regular expressions to be easier                                              |
| 40:41      | in JavaScript as well.                                                                   |
| 40:43      | I've never really tried them with AppleScript                                           |
| 40:46      | and regular expressions are really good.                                                 |
| 40:48      | If you've got, for example, something on your keyboard,                                  |
| 40:50      | or on your clipboard, on your keyboard,                                                  |
| 40:52      | and you want to grab, say, for example,                                                  |
| 40:55      | the digits in the invoice number that you've copied out of it.                           |
| 41:00      | Okay, because for whatever reason,                                                       |
| 41:02      | you get the whole field put onto your clipboard.                                         |
| 41:07      | That happens quite frequently with lots of web forms.                                    |
| 41:10      | If you look into the field, it automatically selects everything,                         |
| 41:12      | so instead of trying to select the four or five characters                               |
| 41:15      | of the invoice number, it's easier to just hit copy                                      |
| 41:18      | and have TextExpander grab out those digits for you.                                    |
| 41:21      | So what are some examples of JavaScript uses                                             |
| 41:24      | you're doing in TextExpander now?                                                       |
| 41:26      | It's like just an everyday example.                                                      |
| 41:28      | Well, I've actually had to migrate                                                       |
| 41:30      | some of these unfortunately to other scripts,                                            |
| 41:32      | but for example, the one that I just mentioned,                                          |
| 41:34      | grabbing the invoice number out,                                                         |
| 41:37      | I actually have a couple of these,                                                       |
| 41:38      | one that will also grab the date out                                                     |
| 41:40      | and then reformat the date into my preferred format.                                     |
| 41:43      | So for example, if I have got an American date,                                          |
| 41:45      | then it will just pass a little bit out                                                  |
| 41:47      | and turn that into a European formatted date for me                                      |
| 41:51      | or an ISO formatted date, so year, month, day,                                           |
| 41:53      | instead of month, day, year,                                                             |
| 41:55      | which is just very confusing for me,                                                     |
| 41:57      | and I look at it and I'm always very confused                                            |
| 41:59      | as to why the month and the day are the wrong way around,                                |
| 42:02      | and I frequently get the date and time wrong                                             |
| 42:04      | if I look at it that way, so I have one for that as well.                                |
| 42:07      | I have to admit, I think you guys do it right.                                           |
| 42:10      | I don't understand why we put the numbers together.                                      |
| 42:13      | It does, I think, enable confusion.                                                      |
| 42:16      | Yes.                                                                                     |
| 42:17      | And it requires you to use an additional character.                                      |
| 42:20      | You have to put a comma in there, so I don't know.                                       |
| 42:23      | I think you guys might have that one right.                                              |
| 42:25      | Yeah, but it's very useful for doing things like that,                                   |
| 42:28      | because of course you can use,                                                           |
| 42:30      | you can do this in JavaScript or AppleScript,                                            |
| 42:32      | so your AppleScript one of grabbing the context name                                     |
| 42:34      | in the email is perfect,                                                                 |
| 42:36      | but being able to manipulate things,                                                     |
| 42:38      | or for example, turning a comma separated list                                           |
| 42:41      | into a vertical list with line breaks between each item,                                 |
| 42:47      | that's another one that I've got,                                                        |
| 42:49      | and I just use the text expansion,                                                       |
| 42:52      | JavaScript function to split,                                                            |
| 42:54      | and then to combine those back together afterwards.                                      |
| 42:57      | I used to toy with the idea of creating an AppleScript                                   |
| 43:01      | or a JavaScript with TextExpander to fix smart quotes                                   |
| 43:06      | and I think, but I actually figured out a way                                            |
| 43:09      | to do that with keyboard master that made more sense.                                    |
| 43:12      | But there's just a lot you can do with this stuff                                        |
| 43:15      | once you start getting into the automation,                                              |
| 43:17      | and the way it works is rather than having a,                                            |
| 43:21      | when you are in the TextExpander application,                                           |
| 43:25      | rather than saying, when I type this,                                                    |
| 43:27      | I want you to type that,                                                                 |
| 43:29      | you say when I type this, I want you to run certain code,                                |
| 43:31      | and you can select JavaScript or AppleScript,                                            |
| 43:34      | and then you just paste the code into it,                                                |
| 43:36      | and it runs it.                                                                          |
| 43:37      | It's really convenient.                                                                  |
| 43:39      | Yes, it definitely is.                                                                   |
| 43:41      | And you don't need to become a JavaScript or AppleScript person                          |
| 43:46      | to do this.                                                                              |
| 43:47      | I mean, there are a bunch of examples of these scripts                                   |
| 43:49      | are already on the web.                                                                  |
| 43:50      | You can just block and copy them in.                                                     |
| 43:52      | Some of the ones that both Rose and I give away                                          |
| 43:54      | have AppleScript embedded in them.                                                       |
| 43:56      | You don't have to worry about it.                                                        |
| 43:57      | It's just there for you.                                                                 |
| 43:59      | The fact is, once you have an application                                                |
| 44:01      | that's capable of running it,                                                            |
| 44:03      | you can use that code no matter who wrote it.                                            |
| 44:05      | So, it's great.                                                                          |
| 44:06      | But be careful.                                                                          |
| 44:07      | Don't run anything from anybody.                                                         |
| 44:09      | Anytime you run code on your computer,                                                   |
| 44:11      | you never know, right?                                                                   |
| 44:12      | That's true.                                                                             |
| 44:13      | But one of the links that we'll be in the show notes                                     |
| 44:15      | is something from [[Brett Terpstra]],                                                        |
| 44:17      | who, as he was a recent guest,                                                           |
| 44:18      | I think you can probably trust him.                                                      |
| 44:20      | Yeah, he's quite nice.                                                                   |
| 44:21      | Yeah.                                                                                    |
| 44:22      | It's powerful.                                                                           |
| 44:24      | I mean, the bottom line is,                                                              |
| 44:25      | once you start adding this kind of stuff to text expansion,                              |
| 44:28      | it becomes so much more than just fixing a cellular phone number,                        |
| 44:32      | you know, and it can change the way you use your computer.                               |
| 44:35      | It can save you a great deal of time.                                                    |
| 44:37      | I mean, I'm always reinstalling and resetting TextExpander,                             |
| 44:41      | because like I do screencasts for them occasionally                                      |
| 44:43      | and for whatever reason.                                                                 |
| 44:45      | But, you know, I've looked in there,                                                     |
| 44:47      | and they actually have a little thing that keeps statistics                              |
| 44:49      | about how much time you save.                                                            |
| 44:51      | And I've literally saved months of my life                                               |
| 44:54      | with automatic typing.                                                                   |
| 44:56      | And that's not an exaggeration.                                                          |
| 44:58      | I mean, you know, I've been using the application                                        |
| 45:00      | for a long time and I use it every day.                                                  |
| 45:02      | I mean, not only do I do the advanced stuff we talk about,                               |
| 45:05      | I also type common contract terms                                                        |
| 45:08      | and just so many different things with this application.                                 |
| 45:12      | Yes.                                                                                     |
| 45:13      | And it works on iOS too.                                                                 |
| 45:14      | It is great,                                                                             |
| 45:15      | because I spend a lot of my time traveling                                               |
| 45:17      | and the iPad is very small in light.                                                     |
| 45:19      | I do have a nice MacBook Air,                                                            |
| 45:21      | but the iPad is even smaller and even lighter than that.                                 |
| 45:24      | And it's great because you've got TextExpander support                                  |
| 45:28      | in a lot of applications,                                                                |
| 45:30      | which is not something I found with any other                                            |
| 45:32      | text expansion application, unfortunately.                                               |
| 45:34      | But TextExpander has got an API that developers can integrate,                          |
| 45:38      | which means that you don't need to use the TextExpander app                             |
| 45:42      | or the TextExpander software keyboard                                                   |
| 45:44      | to type these things.                                                                    |
| 45:46      | So I do switch to the TextExpander software keyboard occasionally.                      |
| 45:49      | Yeah.                                                                                    |
| 45:50      | So the way it works on iOS is because of sandboxing,                                     |
| 45:53      | you can't have an application that has access to                                         |
| 45:57      | read your keyboard keystrokes                                                            |
| 45:59      | and allows you to insert text on any application.                                        |
| 46:02      | It's a security thing.                                                                   |
| 46:04      | I kind of wish Apple would make some exceptions for companies                            |
| 46:07      | like Smile because they've clearly established                                           |
| 46:10      | that they're a good player in this community,                                            |
| 46:13      | but they don't.                                                                          |
| 46:14      | So they made the API and some apps have adopted it.                                      |
| 46:17      | For me, this is a great reason.                                                          |
| 46:19      | It's just one more reason why [[Drafts]] is in my dock,                                      |
| 46:22      | to be honest,                                                                            |
| 46:23      | because they've got TextExpander integration.                                           |
| 46:26      | So all those snippets I can use work,                                                    |
| 46:29      | but there is some limitation there too.                                                  |
| 46:31      | You don't get some of the more advanced stuff                                            |
| 46:33      | we've been talking about with the basic API.                                             |
| 46:37      | Some of that stuff,                                                                      |
| 46:38      | you have to go into the TextExpander app on your device.                                |
| 46:42      | A good example for me is like when I do a conference call,                               |
| 46:46      | the TextExpander snippet does a whole bunch of stuff.                                   |
| 46:48      | And I'll talk to about that one maybe later in the show.                                 |
| 46:51      | But I have to activate that in TextExpander,                                            |
| 46:55      | but then I can paste it into an email                                                    |
| 46:57      | or something else very easily.                                                           |
| 46:59      | I really wish that Apple would make it                                                   |
| 47:03      | when you have an attached keyboard to an iMac,                                           |
| 47:06      | that it would allow you to use third-party keyboard tools.                               |
| 47:10      | And TextExpander is the poster child for this.                                          |
| 47:13      | I mean, it seems silly that I've got TextExpander in there.                             |
| 47:16      | I'm in an application that recognises snippets.                                          |
| 47:18      | And I'm sorry,                                                                           |
| 47:19      | well, it will work with applications that recognise snippets                             |
| 47:21      | like [[Drafts]],                                                                             |
| 47:22      | but like if you go into an email application that doesn't,                               |
| 47:25      | wouldn't it be nice if you could type your snippets?                                     |
| 47:28      | Because you can using the TextExpander keyboard,                                        |
| 47:32      | but when you attach a keyboard, all that goes away.                                      |
| 47:35      | And I think that's something they need to fix.                                           |
| 47:37      | Yes, it is.                                                                              |
| 47:38      | And it's very unfortunate that that happens.                                             |
| 47:41      | Though I have to say, occasionally, what I will do is,                                   |
| 47:45      | I will, with the smart keyboard,                                                         |
| 47:47      | I literally physically just detach it by just a few millimeters.                         |
| 47:50      | It's enough to pop up the on-screen keyboard.                                            |
| 47:52      | And then I will type whatever it is I need to type on the software keyboard.             |
| 47:56      | And I'm hoping that when I get my bridge,                                                |
| 47:58      | I'll just be able to press the button to pop up the on-screen keyboard                   |
| 48:01      | and type a few letters.                                                                  |
| 48:03      | But in general, I personally prefer to write in applications                             |
| 48:06      | with TextExpander support like [[Drafts]],                                                  |
| 48:08      | just to save myself a lot of the time and aggravation with,                              |
| 48:12      | why didn't this work?                                                                    |
| 48:13      | Oh, because I'm not in an application that supports it on iOS.                           |
| 48:17      | Well, darn.                                                                              |
| 48:20      | This episode of Automators is brought to you by our awesome friends at Lunar Display.    |
| 48:24      | They are the makers of the only hardware solution                                        |
| 48:27      | that turns your iPad into a wider display for your Mac.                                  |
| 48:30      | That means you'll have a second display that's super portable,                           |
| 48:33      | with basically zero lag and gorgeous image quality.                                      |
| 48:36      | I love my Lunar Display.                                                                 |
| 48:38      | Occasionally, things like the projector flaking out on me at work                        |
| 48:42      | would usually stress me out.                                                             |
| 48:43      | But as it is, I've got my Lunar Display dongle,                                          |
| 48:45      | so I just pop it into my Mac, mirror my display onto my iPad,                            |
| 48:48      | and everybody's watching what I'm doing on my lovely iPad screen                         |
| 48:51      | while I'm showing them what I need to show them on my Mac.                               |
| 48:54      | When I travel, I also use it as a regular second display,                                |
| 48:57      | extending my monitor next to me.                                                         |
| 48:59      | And it's always amazing when people come over and they watch you                         |
| 49:02      | drag a window from your iPad onto your Mac and look at you                               |
| 49:05      | as if you just don't cut some kind of magic,                                             |
| 49:07      | because that's what it feels like.                                                       |
| 49:09      | Setting up extra screens can be fiddly,                                                  |
| 49:12      | but Lunar Display couldn't be easier.                                                    |
| 49:14      | Just plug in this small bit of hardware into your Mac                                    |
| 49:16      | and you're good to go.                                                                   |
| 49:18      | Plus, everything works over Wi-Fi.                                                       |
| 49:20      | However, if you're a busy person,                                                        |
| 49:22      | you might be traveling without a Wi-Fi connection,                                       |
| 49:24      | and that's not a problem.                                                                |
| 49:25      | You can just connect with USB.                                                           |
| 49:27      | It's super simple to set up,                                                             |
| 49:29      | and you'll love that extra screen real estate.                                           |
| 49:32      | Lunar Display is a complete extension to your Mac.                                       |
| 49:35      | It supports external keyboards as well as Apple Pencil                                   |
| 49:37      | and touch interactions.                                                                  |
| 49:39      | It basically turns your Mac into a touchscreen device.                                   |
| 49:42      | And the all-new liquid video engine                                                      |
| 49:44      | brings significantly reduced latency                                                     |
| 49:47      | and a faster screen refresh rate.                                                        |
| 49:49      | Listeners of Automators can get an exclusive 10% discount                                |
| 49:52      | on Lunar Display.                                                                        |
| 49:54      | Just go to lunadisplay.com                                                              |
| 49:56      | and enter the promo code Automators at checkout.                                         |
| 49:59      | That's lunadisplay.com and promo code Automators at checkout.                           |
| 50:04      | Go there now, upgrade your setup.                                                        |
| 50:06      | You're going to love it.                                                                 |
| 50:08      | Lunar Display.com, promo code Automators                                                 |
| 50:10      | and get 10% off.                                                                         |
| 50:12      | Our thanks to Lunar Display for their support                                            |
| 50:14      | of this show and Relay FM.                                                              |
| 50:16      | So, TextExpander isn't the only game in town, though,                                    |
| 50:19      | for advanced text expansion type automation.                                             |
| 50:23      | One of them that certainly comes to mind is [[Keyboard Maestro]].                            |
| 50:26      | [[Keyboard Maestro]] is an application.                                                      |
| 50:29      | It's another one that we're going to have to probably                                    |
| 50:31      | give a full show to at some point.                                                       |
| 50:33      | And it's another application that seems to, like,                                        |
| 50:36      | permeate throughout the Automator's content.                                             |
| 50:39      | But one of the triggers this does, you know,                                             |
| 50:42      | and we're talking about text expansion as a trigger,                                     |
| 50:45      | is a typed phrase.                                                                       |
| 50:47      | And that's one of the many ways you can activate                                         |
| 50:50      | [[Keyboard Maestro]] to do something.                                                        |
| 50:52      | Type any phrase and something will happen.                                               |
| 50:55      | And Rose, do you use that much as a trigger                                              |
| 50:58      | in [[Keyboard Maestro]]?                                                                     |
| 51:00      | I don't necessarily use it with typed things as triggers,                                |
| 51:04      | but for example, I have [[Keyboard Maestro]]                                                 |
| 51:07      | renaming documents for me with the sort of thing                                         |
| 51:10      | that you could do with TextExpander,                                                     |
| 51:12      | but I've done it with [[Keyboard Maestro]] because then                                      |
| 51:14      | it can duplicate the document before it renames it.                                      |
| 51:16      | If it's got a specific file format,                                                      |
| 51:18      | or if it doesn't have that file format,                                                  |
| 51:20      | it'll pop things up and ask me how it should go                                          |
| 51:23      | about renaming this and things like that,                                                |
| 51:25      | which is very useful.                                                                    |
| 51:27      | And in some ways, it could be considered to be,                                          |
| 51:29      | like, a TextExpander on steroids,                                                        |
| 51:31      | but it's not designed for text expansion per se.                                         |
| 51:35      | It just happens to do that as well as many other things.                                 |
| 51:38      | Yeah.                                                                                    |
| 51:39      | One of the ways I tried to use type string triggers                                      |
| 51:42      | in [[Keyboard Maestro]] was for my setups.                                                   |
| 51:45      | I have a setup when I podcast.                                                           |
| 51:47      | I want certain applications open in certain locations,                                   |
| 51:51      | and I can do all that kind of window management stuff                                    |
| 51:54      | in [[Keyboard Maestro]].                                                                     |
| 51:56      | And for a while, I had set them up like I would just say                                 |
| 51:59      | podcast semicolon.                                                                       |
| 52:01      | And then if I type that word with a semicolon after it,                                  |
| 52:04      | it would automatically close all my apps                                                 |
| 52:07      | and then open the ones I want,                                                           |
| 52:09      | and it would open the ones to the pages I want.                                          |
| 52:12      | So I was doing this kind of stuff like that.                                             |
| 52:15      | But what I found was just typing didn't make sense.                                      |
| 52:18      | If I was just on the desktop, it was weird typing to nothing.                            |
| 52:23      | You know what I mean?                                                                    |
| 52:25      | Yes.                                                                                     |
| 52:26      | And sometimes it didn't necessarily work                                                 |
| 52:28      | because I wasn't necessarily in a text field.                                            |
| 52:31      | And then when you can open a Word document and start typing                              |
| 52:34      | something to activate your podcast setup,                                                |
| 52:36      | it just didn't really work for me.                                                       |
| 52:39      | So I don't really have that many that I use.                                             |
| 52:42      | The way I eventually solved that problem by the way                                      |
| 52:44      | in [[Keyboard Maestro]] is I just created a palette.                                         |
| 52:47      | And if I hit a, as opposed to a text string, just a keystroke.                           |
| 52:52      | So I hit a certain incantation of keys on my device,                                     |
| 52:57      | like a keyboard shortcut, and then it opens a palette.                                   |
| 53:00      | It opens up all of them.                                                                 |
| 53:01      | Like if I type automators, it opens up, you know,                                        |
| 53:04      | the Quip document to the automators, you know,                                           |
| 53:08      | show that we're working on.                                                              |
| 53:09      | It opens the, it does all the things I needed to do.                                     |
| 53:12      | And doing that off a palette just makes a lot more sense.                                |
| 53:15      | So while [[Keyboard Maestro]] does use text as a trigger,                                    |
| 53:19      | and I'm sure we've got some listeners that are probably                                  |
| 53:21      | doing some cool stuff with that.                                                         |
| 53:22      | We'll have to check the forums after the show publishes                                  |
| 53:25      | to see how people are using it.                                                          |
| 53:27      | I don't use that very often as a trigger in [[Keyboard Maestro]],                            |
| 53:31      | just because there's so many other triggers                                              |
| 53:33      | that make more sense to me for most of the stuff                                         |
| 53:35      | I do with that application.                                                              |
| 53:37      | Yeah.                                                                                    |
| 53:38      | I mean, I do use it for other things.                                                    |
| 53:40      | So for example, if a document SPAs in a specific folder,                                 |
| 53:43      | then [[Keyboard Maestro]] might use that to kick it off,                                     |
| 53:46      | like attach it to an email so like an email is an attachment                             |
| 53:49      | and things like that.                                                                    |
| 53:50      | Yeah.                                                                                    |
| 53:51      | Which is useful for things that I've scanned in on the printer                           |
| 53:53      | at work, because frequently if I scan things in,                                         |
| 53:55      | then it's going to be to email to somebody else.                                         |
| 53:58      | So it's good having that pop up with, you know,                                          |
| 54:01      | automatically in my email.                                                               |
| 54:03      | And then I can use TextExpander to finish it off,                                        |
| 54:07      | which is perfect.                                                                        |
| 54:09      | There's other places.                                                                    |
| 54:11      | [[Alfred]] has text expansion support.                                                       |
| 54:14      | That's a popular launcher application.                                                   |
| 54:17      | We've talked about IDEs throughout the show.                                             |
| 54:21      | And they, you know, it's a programming,                                                  |
| 54:25      | it's a programming environment.                                                          |
| 54:27      | What's the IDE stand for?                                                                |
| 54:28      | Something development environment?                                                       |
| 54:29      | Intelligent development environment.                                                     |
| 54:31      | So it'll do things like auto complete.                                                   |
| 54:33      | So for example, if I've got a variable named MacSparky,                                 |
| 54:36      | then when I type, if I'm using, for example,                                             |
| 54:39      | PHP or another language that starts variables with a dollar sign,                        |
| 54:43      | if I type the dollar sign in an M,                                                       |
| 54:45      | it will suggest MacSparky as one of many things.                                        |
| 54:48      | Yeah.                                                                                    |
| 54:49      | And yeah, it's a very useful way of working.                                             |
| 54:52      | It's kind of like the suggestions,                                                       |
| 54:54      | the auto complete suggestions on iOS,                                                    |
| 54:56      | which are of course another sort of version of text expansion.                           |
| 55:00      | They're not the same, of course.                                                         |
| 55:02      | There's also a type it for me,                                                           |
| 55:04      | which is another text expansion application.                                             |
| 55:06      | I don't really have much experience with it.                                             |
| 55:08      | I don't either, but I keep seeing people recommending it.                                |
| 55:11      | So I would love to hear from you if you're listening to this                             |
| 55:13      | and you're using type it for me,                                                         |
| 55:15      | because I do hear great things about it.                                                 |
| 55:17      | I'm going to go through and play with new applications.                                  |
| 55:20      | So I'd like to hear some uses.                                                           |
| 55:22      | I thought we'd finish up.                                                                |
| 55:23      | I mean, we've talked about a lot of uses                                                 |
| 55:25      | that we have throughout the show,                                                        |
| 55:27      | but I thought it'd be fun just to kind of talk about                                     |
| 55:29      | some additional ways we're automating with text expansion                                |
| 55:32      | as we wrap this up.                                                                      |
| 55:33      | Yes.                                                                                     |
| 55:34      | And I'm going to start with a really simple one.                                         |
| 55:36      | I cannot spell the word separator.                                                       |
| 55:39      | I get the A's and the E's and the O's all wrong all the time.                            |
| 55:44      | So I've created a couple of different TextExpander snippets in my case.                 |
| 55:48      | I should probably move these over to the Mac OS,                                         |
| 55:51      | iOS snippet expansions for those times when I'm typing it,                               |
| 55:54      | and I'm not in an application supported by TextExpander on iOS.                         |
| 55:58      | And I've got all the different ways that I try and spell it in there,                    |
| 56:01      | and they all correct to the correct spelling of separators                               |
| 56:03      | so that I don't look like a complete idiot all the time,                                 |
| 56:06      | just some other time.                                                                    |
| 56:08      | I mean, we all have that list of words that we commonly misspell,                        |
| 56:12      | and that's an obvious candidate for this.                                                |
| 56:15      | I think somewhat related are proper nouns,                                               |
| 56:18      | and maybe you're working on your marketing,                                              |
| 56:23      | you're working on an event, and they have camel case,                                    |
| 56:26      | so they have some weird spelling of it.                                                  |
| 56:28      | Or you deal with the web,                                                                |
| 56:31      | and you've got all these companies you're working with                                   |
| 56:33      | that don't like to use vowels.                                                           |
| 56:35      | So you could use text expansion                                                          |
| 56:40      | to fix all of those spellings problems                                                   |
| 56:42      | and allow it to just make it easier for you to put in.                                   |
| 56:44      | I mean, that's just the most basic,                                                      |
| 56:46      | but there's so much more you can do with it,                                             |
| 56:48      | like a document creation as a lawyer.                                                    |
| 56:50      | There's lots of things I do that do have repeated text in them,                          |
| 56:55      | and I've text expanded almost all of that stuff, the basics,                             |
| 56:59      | so it gives me a starting place.                                                         |
| 57:02      | For instance, if there's a contract between two people,                                  |
| 57:08      | one of the things you almost always want to talk about is,                               |
| 57:11      | hey, if we want to fight each other, where do we do it?                                  |
| 57:13      | They call it the venue clause.                                                           |
| 57:15      | Where do you, what court governs if there's a fight over this contract?                  |
| 57:19      | Well, I've got two or three of those saved as text expansion snippets,                   |
| 57:23      | so when I'm writing a contract,                                                          |
| 57:25      | I will usually start with one of those.                                                  |
| 57:27      | Often I'll have to go in and customise little bits of it,                                |
| 57:29      | but getting it started,                                                                  |
| 57:32      | I save so much time using text expansion for that kind of thing.                         |
| 57:36      | Yes. Another use case is, for example,                                                   |
| 57:40      | I've got phrases I'll use in emails a little at a time.                                  |
| 57:42      | Let me know if there's a problem.                                                        |
| 57:44      | And instead of typing, let me know if there's a problem,                                 |
| 57:48      | I use semicolon lmk in English,                                                          |
| 57:52      | and then I use backslash lmk,                                                            |
| 57:55      | and it will produce the same sentence for me in German,                                  |
| 57:58      | which is very useful at work when I'm trying to write to people in German                |
| 58:01      | and typing, let me know if there's a problem in English.                                 |
| 58:04      | Well, I mean, they'll all understand it.                                                 |
| 58:06      | Everybody I work with is pretty good when they speak fluent English,                     |
| 58:09      | but I'd like to at least give the impression that I speak fluent German,                 |
| 58:13      | which, depending on the day of the week, may not be true.                                |
| 58:16      | And I do this for a lot of different snippets as well,                                   |
| 58:19      | so I've got the same phrases in English and in German,                                   |
| 58:21      | and I just use a different starting trigger                                              |
| 58:24      | to determine which language it should be.                                                |
| 58:27      | One time I heard Merlin Mann say that he does not argue with the internet,               |
| 58:32      | and I love that so much that I made a snippet that says,                                 |
| 58:36      | and mine is X, not me.                                                                   |
| 58:38      | And whenever, you know, I don't get them very often.                                     |
| 58:40      | Occasionally I get an email from someone telling me what a dirty rotten scoundrel I am   |
| 58:44      | for whatever reason. You know, whenever you go on the internet,                          |
| 58:46      | you get that from a complete stranger, and I just type X, not me.                        |
| 58:51      | If I respond at all, I type X, not me.                                                   |
| 58:54      | He says, I'm sorry, I don't argue with the internet.                                     |
| 58:57      | So we've all got those.                                                                  |
| 58:59      | Something that's kind of interesting I've noticed as we've recorded the show             |
| 59:01      | is I always use X as the letter to start it,                                             |
| 59:05      | and you use a semicolon, sounds like.                                                    |
| 59:07      | Yeah, most of the time semicolons occasionally X's for things that I've stolen from you, |
| 59:12      | and then backslashes for things that are starting in German                              |
| 59:15      | that would start with a semicolon in English.                                            |
| 59:17      | Yeah, I like that when you're doing a different language,                                |
| 59:19      | you have a different starter character.                                                  |
| 59:21      | Yeah, but then I have the same snippet, so I don't have to think too hard.               |
| 59:24      | Actually, for some things in German, I have multiple starters,                           |
| 59:28      | so I've got the German equivalent of the abbreviation,                                   |
| 59:31      | just because my brain occasionally remembers that,                                       |
| 59:34      | and I guess what, you use the fill-in snippets in TextExpander                            |
| 59:37      | when I'm using TextExpander for those.                                                    |
| 59:39      | I have a collection of snippets that say thank you in different languages,               |
| 59:44      | so sometimes I hear from a customer and they'll be from a different country.             |
| 59:49      | I like to, I'll just say, it'll say German thanks, you know, and it'll say danke.        |
| 59:55      | Whatever, I've got most of the languages.                                                |
| 59:58      | I shared that library, by the way, at MacSparky.com.                                     |
| 01:00:02   | So feel free to download that and use it.                                                |
| 01:00:06   | I think I've added Klingon.                                                              |
| 01:00:08   | Over the years, I've added a whole bunch of crazy things to it,                          |
| 01:00:11   | but it's fun just to be able to type a phrase in a foreign language                      |
| 01:00:16   | just using a text expansion snippet.                                                     |
| 01:00:19   | But the reason I use the X, I use the semicolon for a long time,                         |
| 01:00:22   | but I switch over to X because I started using the keyboard on iOS a lot                 |
| 01:00:26   | to expand snippets and to get to the semicolon, it's two taps.                           |
| 01:00:30   | And I just didn't want to, like, switch keyboards to trigger a snippet.                  |
| 01:00:33   | So a couple years ago, I switched them all to X.                                         |
| 01:00:37   | Well, I do have a bonus tip for anybody listening who's going,                           |
| 01:00:40   | ah, it's two taps.                                                                       |
| 01:00:41   | If you actually tap on the one, two, three button                                        |
| 01:00:44   | and then just swipe to the semicolon and let go,                                         |
| 01:00:46   | then you switch back to the regular built-in keyboard,                                   |
| 01:00:49   | which is quite useful, but in general, I tend to use it                                  |
| 01:00:52   | like a physical keyboard when I'm typing, typing on iOS                                  |
| 01:00:55   | with something like droughts.                                                            |
| 01:00:57   | So I don't run into that as much because the semicolon's right there.                    |
| 01:01:00   | It's next to the "L"-key.                                                                  |
| 01:01:02   | Yeah, makes sense.                                                                       |
| 01:01:03   | Makes sense.                                                                             |
| 01:01:04   | Yes.                                                                                     |
| 01:01:05   | But I mean, any type of repeated phrases, it's just useful.                              |
| 01:01:09   | I mean, just like throughout a few more, I have them for things like                     |
| 01:01:12   | directions to my house, customers or port emails, whatever.                              |
| 01:01:16   | I mean, anytime you find yourself typing something more than                             |
| 01:01:19   | what's the stuff makes sense with all of the token support                               |
| 01:01:25   | and TextExpander, I've created a whole family of snippets                               |
| 01:01:29   | that I use to document things.                                                           |
| 01:01:31   | Like I talked earlier about my daytime snippet,                                          |
| 01:01:33   | but I also have like a call template when I get a call in                                |
| 01:01:37   | and it doesn't only put the date time in and allows me to put                            |
| 01:01:40   | in who's on the call, what the subject is,                                               |
| 01:01:43   | it's got a line at the bottom says action items.                                         |
| 01:01:45   | So I just like I fire off that snippet into [[Drafts]] when I get on                         |
| 01:01:50   | the call and I fill it in basically while I'm on the call                                |
| 01:01:53   | and when I get off and then I can document and save it.                                  |
| 01:01:56   | And I have a similar one for when I'm in a meeting,                                      |
| 01:01:58   | I have one for conference call that sets up the conference call,                         |
| 01:02:02   | you know, and that that inserts the free conference call dial in                         |
| 01:02:06   | number and it's got a field in there to say how long I estimate                          |
| 01:02:10   | it'll take and what the agenda is just getting that out early                            |
| 01:02:13   | allows you to keep the call, you know, more under control.                               |
| 01:02:17   | Yeah, definitely.                                                                        |
| 01:02:18   | But then I have a separate one that I run while I'm on the call                          |
| 01:02:21   | where I record things just like I was talking about earlier.                             |
| 01:02:24   | We talked in I think was episode 14 about automated journalling.                          |
| 01:02:27   | That's a great place for text expansion.                                                 |
| 01:02:30   | I just all I mean, I was just looking through my library                                 |
| 01:02:33   | as we were getting ready to start the show today.                                        |
| 01:02:35   | I have one in here for sick notes because when my kids get sick,                         |
| 01:02:39   | I've got to send a note to the school.                                                   |
| 01:02:41   | Well, I mean, it sounds silly, but there's only two or three reasons                     |
| 01:02:45   | they're usually sick.                                                                    |
| 01:02:46   | They either have a bad cold or they usually have a stomach flu.                          |
| 01:02:49   | So I've got an option to pick which one it puts the date in.                             |
| 01:02:53   | It creates the whole note for me and it takes a process                                  |
| 01:02:56   | that used to take five minutes and now it turns it into one minute.                      |
| 01:02:59   | And when I don't even remember creating this,                                            |
| 01:03:02   | but I've been using it like for a long time, you know,                                   |
| 01:03:05   | and whenever my kids get sick, that's what I do.                                         |
| 01:03:08   | I have the same thing for me as an adult.                                                |
| 01:03:11   | So when I'm sick, I don't have to, you know,                                             |
| 01:03:13   | like try and formulate an email to say,                                                  |
| 01:03:15   | I'm not well and I'm coming to work today.                                               |
| 01:03:17   | I just fire it off and I'm done.                                                         |
| 01:03:19   | I can go back to bed and sleep and get better.                                           |
| 01:03:22   | I've got one for movie reviews.                                                          |
| 01:03:24   | You know, so when I see a movie, I save it to day one                                    |
| 01:03:27   | and I have a little snippet that I fill in.                                              |
| 01:03:30   | It's kind of fun to go back and look at it in later years                                |
| 01:03:33   | and see what I thought of that movie when I saw it.                                      |
| 01:03:36   | So, you know, just like, just goofy things like that.                                    |
| 01:03:39   | I know you're doing it for emoji as well, right?                                         |
| 01:03:42   | Yeah, or at least I used to.                                                             |
| 01:03:44   | So I used to do colon and then whatever name sort of applied                             |
| 01:03:48   | to the emoji followed by another colon,                                                  |
| 01:03:50   | just like cap you have in [[Slack]] and things like that.                                    |
| 01:03:53   | But there's actually a really nice app for this now called Rocket.                       |
| 01:03:56   | And you mentioned this on, I think, the menu bar episode of my power users.              |
| 01:04:00   | But I'm sure we've got some listeners                                                    |
| 01:04:02   | who haven't listened to that episode of my power users.                                  |
| 01:04:05   | I'll put the link in the show notes.                                                     |
| 01:04:06   | But essentially, you type a colon, you start typing                                      |
| 01:04:08   | and it suggests emoji with like a graphical interface,                                   |
| 01:04:11   | which is even better.                                                                    |
| 01:04:12   | But you could, of course, just put the common ones                                       |
| 01:04:15   | into the operating system expansion for you.                                             |
| 01:04:19   | And if you are using something like messages,                                            |
| 01:04:21   | then it will automatically turn things like colon                                        |
| 01:04:25   | closed round bracket into a smiley face for you,                                         |
| 01:04:28   | which is really nice, but not necessarily everything that you want.                      |
| 01:04:33   | Because if you would like a little smiling pile of poop,                                 |
| 01:04:36   | then you need to be able to find that emoji                                              |
| 01:04:38   | and sometimes that one hides.                                                            |
| 01:04:40   | Well, and I guess, you know, we're kind of getting towards the end here.                 |
| 01:04:44   | The point of this show was to explain, number one,                                       |
| 01:04:48   | it's not that hard to get started with automation with text expansion.                   |
| 01:04:52   | And you do need to get something more than the built-in tools.                           |
| 01:04:56   | I think a tool like TextExpander,                                                        |
| 01:04:59   | I know they're an occasional sponsor,                                                    |
| 01:05:01   | whether they were, I mean, something like that                                           |
| 01:05:03   | is a really great tool to get yourself rolling.                                          |
| 01:05:08   | And then once you start making a couple of these,                                        |
| 01:05:11   | you'll find that, you know, like I said,                                                 |
| 01:05:14   | you get the payoff so quickly.                                                           |
| 01:05:16   | Some of the automation we talk about on this show,                                       |
| 01:05:18   | it takes a while to get that time back                                                   |
| 01:05:20   | that you spend creating it.                                                              |
| 01:05:22   | Keyboard maestro is a good example.                                                      |
| 01:05:24   | I mean, it's a great app, but sometimes it takes more involvement                        |
| 01:05:27   | to get the [[Keyboard Maestro]] macros working.                                              |
| 01:05:30   | They're powerful, they take longer to develop.                                           |
| 01:05:32   | But with text expansion, it's just so immediate, the return.                             |
| 01:05:37   | And if any of the stuff we talked about today sparks any interest in you,                |
| 01:05:41   | just take some time this weekend and set up a couple of them.                            |
| 01:05:45   | And you'll just be amazed how useful it is once you get it going.                        |
| 01:05:49   | Yes. And if you are going to try TextExpander,                                           |
| 01:05:51   | make sure to check out the shared snippets on their website,                             |
| 01:05:54   | just because there's so many useful ones in there                                        |
| 01:05:56   | and just scrolling through my list right now.                                            |
| 01:05:58   | You can see the names, for example, so whenever you type GitHub,                         |
| 01:06:00   | it's got a capital G and a capital H.                                                    |
| 01:06:02   | Because what case are they using this week?                                              |
| 01:06:05   | Who knows? It depends on the brand.                                                      |
| 01:06:07   | And it's nice to be able to have that automatically fixed for you.                       |
| 01:06:11   | Yeah. And I'm going to get a bunch of mine uploaded to their library                     |
| 01:06:16   | because I started the TE Snippets sub-directory of MacSparky                            |
| 01:06:21   | before they had this.                                                                    |
| 01:06:23   | And I'm going to try and get some upload.                                                |
| 01:06:25   | I don't know if they'll all be up there by the time we publish,                          |
| 01:06:27   | but check that out as well, Rose.                                                        |
| 01:06:29   | Don't you have some of your snippet libraries as well on the web somewhere?              |
| 01:06:33   | Not really, because they all tend to be very personalised to me                          |
| 01:06:36   | and honestly with the German ones, I'm embarrassed.                                      |
| 01:06:38   | Native German speakers like I did, they're probably going to go,                         |
| 01:06:41   | this is all wrong, especially people from Germany,                                       |
| 01:06:43   | because I write in Austrian German nowadays.                                             |
| 01:06:46   | But I will make sure that I've got some links to some of the places                      |
| 01:06:49   | where I've previously stolen this TextExpander snippet groups from.                      |
| 01:06:52   | So I've got one called Letters in Circles,                                               |
| 01:06:55   | and this is really fun. You type three O's and then whatever letter,                     |
| 01:06:58   | and it puts that letter into a circle.                                                   |
| 01:07:01   | And it uses three O's instead of two, because there's words like,                        |
| 01:07:05   | look at a loop, which have two O's in them.                                              |
| 01:07:08   | So yes, it's quite fun.                                                                  |
| 01:07:10   | Some great stuff out there. Let us know how you're using it.                             |
| 01:07:12   | You know, we've got that forum over at talk.automators.fm                                |
| 01:07:17   | and you know, have some fun making some text expansion.                                   |
| 01:07:22   | Yes. And don't forget, it doesn't matter whether or not you think                        |
| 01:07:26   | you're talented at this stuff, you can do it.                                            |
| 01:07:28   | Yes. Don't forget to sign up for our Meetups.                                            |
| 01:07:32   | Rose and I can't wait to meet you in Orange County or at [[WWDC]] in San Jose.               |
| 01:07:37   | Also, thank you to our sponsors, Backblaze and Luna Display,                             |
| 01:07:41   | and we'll see you all in a few weeks.                                                    |
