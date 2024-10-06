---
status: "incomplete"
fc-date:
  year: 2021
  month: 04
  day: 09
fc-category: "podcast"
podcast: "Automators"
published: 2021-04-09
duration: 5904
formattedduration: "01:38:24"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Tim Nahumck"]
notetype: "episode"
showpage: "http://relay.fm/automators/73"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators073.mp3"
episode: 73
title: "73: Custom Drafts Themes, Syntax, and more with Tim Nahumck"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary get Tim back on the show to talk about recent updates to Drafts and how he's using it to customise his workflow and how other people can take advantage of them too!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Tim Nahumck]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 073 Discussion](https://talk.automators.fm/t/73-custom-drafts-themes-syntax-and-more-with-tim-nahumck/11006)

# Sponsors
- [[PDFpen (Sponsor)|PDFpen, from Smile]] - Powerful PDF editing on your Mac.
- [[Microsoft Lists (Sponsor)|Microsoft Lists]] - A Microsoft 365 app that helps you track information and organise work.
- [[Sync Up (Sponsor)|Sync Up, a OneDrive podcast]] - takes you behind the scenes of OneDrive.

# Show Notes
- [Drafts 26: The Customisation Update - nahumck.me](https://nahumck.me/drafts-26-the-customisation-update/)
- [Drafts - nahumck.me](https://nahumck.me/tag/drafts/)
- [Nahumck Dark | Drafts Directory](https://actions.getdrafts.com/t/1hn)
- [Nahumck Light | Drafts Directory](https://actions.getdrafts.com/t/1is)
- [Jayson](https://jayson.app/)
- [‎Pastel on the App Store](https://apps.apple.com/us/app/pastel/id413897608)
- [Popular Themes | Drafts Directory](https://actions.getdrafts.com/theme_definitions?order=popular)
- [Tablet Habit Dark | Drafts Directory](https://actions.getdrafts.com/t/1jn)
- [Tablet Habit](https://tablethabit.com/)
- [Dark and Friendly | Drafts Directory](https://actions.getdrafts.com/t/1j4)
- [BirchTree](https://birchtree.me/)
- [Night Owl | Drafts Directory](https://actions.getdrafts.com/t/1jM)
- [Draftsdown | Drafts Directory](https://actions.getdrafts.com/s/1hm)
- [Fountain | A markup language for screenwriting.](https://fountain.io/)
- [Fountain | Drafts Directory](https://actions.getdrafts.com/s/1hl)
- [Popular Syntaxes | Drafts Directory](https://actions.getdrafts.com/syntax_definitions?order=popular)
- [Simple List+ | Drafts Directory](https://actions.getdrafts.com/s/1jG)
- [Tweets | Drafts Directory](https://actions.getdrafts.com/s/1iw)
- [‎Pretext on the App Store](https://apps.apple.com/us/app/pretext/id1347707000)
- [Editor Preferences - Drafts User Guide](https://docs.getdrafts.com/docs/editor/editorsettings)
- [Desqueeze Photo](https://www.icloud.com/shortcuts/a50a50a1754645cbaccb2b355155408e)
- [Use Camera Remote and timer on Apple Watch - Apple Support](https://support.apple.com/en-gb/guide/watch/apda6e61c287/watchos)
- [Clear Spaces for a Clear Mind - nahumck.me](https://nahumck.me/clear-spaces-for-a-clear-mind/)
- [Modules | Drafts Directory](https://actions.getdrafts.com/g/1Jn) - Customise modules for quick switching when using Drafts.
- [Appearance: Automators Episode 73 - nahumck.me](https://nahumck.me/appearance-automators-episode-73/)

# Transcription
  
| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators. My name is Rosemary Orchard, and as always, I'm joined             |
| 00:06      | by fellow automation nerd David Sparks, and we're going to talk about automating things              |
| 00:11      | and making computers do stuff for us. Hey, David, how are you today?                                 |
| 00:15      | I'm great, Rose. I want to make my computer do stuff, so I think we should talk about                |
| 00:21      | automation today.                                                                                    |
| 00:22      | Yeah. It seems like a novel concept on a show called Automators, but I've heard that some            |
| 00:28      | pretty cool apps out there are doing some pretty cool things, and then I ran into this               |
| 00:32      | guy, Tim, who's just been doing amazing things with [[Drafts]] again, so I asked him on the show.        |
| 00:37      | Is that okay with you?                                                                               |
| 00:38      | Yeah. Let's have Tim on.                                                                             |
| 00:40      | Hey, Tim. Welcome back to the show.                                                                  |
| 00:42      | Hey, everybody. Thanks for having me back.                                                           |
| 00:47      | Well, you're very welcome.                                                                           |
| 00:50      | Tim is the master of [[Drafts]], a frequent author on various bits and pieces of [[Drafts]], and             |
| 00:57      | really is funny. [[Drafts]] is an automation platform. Historically, you don't think of a text editor    |
| 01:03      | as an automation platform, but with all the work Greg has done over the years, that's                |
| 01:08      | what it's become.                                                                                    |
| 01:10      | Oh, yeah. Absolutely. It's one of those things that I find myself just using little things           |
| 01:16      | here and there, and it actually takes me a little while to remember, oh, yeah, that's                |
| 01:22      | an automation. It's just become everyday workflow now.                                               |
| 01:26      | Yeah. We've got a future Mac Power users episode coming out on the joy of [[Obsidian]] and kind          |
| 01:32      | of a deep dive into it, and one of the points I made was that [[Drafts]] is a companion app              |
| 01:37      | to [[Obsidian]], and [[Obsidian]] falls down as an electron app. [[Drafts]] picks up the slack as                |
| 01:44      | a native app, and it's the perfect place to write text and put it in there because whatever          |
| 01:48      | action you need, either already exists or you can build it yourself.                                 |
| 01:53      | And I think one of the things you were saying there, Tim, about automation really is the             |
| 01:57      | point. It should just be part of your workflow. We shouldn't necessarily be thinking about           |
| 02:01      | what we're doing. We should just hit the button and the magic happens, and we continue without       |
| 02:06      | a second thought because really, that is the whole point of this, isn't it, to improve               |
| 02:11      | our workflows. So I'm glad to hear that you've been continuing with that.                            |
| 02:14      | Yeah, absolutely.                                                                                    |
| 02:16      | We had Tim on before, and so this is our second kind of [[Drafts]] deep dive with Tim, but in            |
| 02:23      | the interim, [[Drafts]] has changed quite a bit, and they've added a bunch of new features.              |
| 02:26      | So we thought who would be better than to have Tim on to kind of help us walk through                |
| 02:31      | what's new, and there is quite a bit new. And how can we take the most advantage of                  |
| 02:37      | it as automators? So we really appreciate that, Tim.                                                 |
| 02:41      | Yeah, no problem, anytime. Anytime.                                                                  |
| 02:43      | Yeah, we're on [[Drafts]] version 26 now. I can't remember which version number we were on when          |
| 02:50      | we spoke to you, but I'm pretty certain it was in the single digits, because [[Drafts]] 4                |
| 02:53      | was around for a very long time, and then [[Drafts]] 5 came, and then everything just sort               |
| 02:58      | of rollercoastered, I think is the right word to say. Greg, Greg Pierce at Agile Tortoise            |
| 03:03      | has been doing a tremendous job, and I see you all the time in the Drafts [[Slack]] posting               |
| 03:09      | about things, and I always end up checking them out and just being amazed because you                |
| 03:14      | are doing all of these great things, and it's just hard to cover in a couple of words what           |
| 03:20      | exactly it is that you've done, because you seem to do so many things.                               |
| 03:24      | Well, thank you, first of all. But yeah, there's a lot of iterations that have come since 5.         |
| 03:32      | I think that was the last time I was on, was soon after 5 or 5.4 came out, and then it's             |
| 03:39      | changed to just basically version numbers at this point, so we're up to 26, and it's                 |
| 03:45      | one of these examples of a really good subscription app that gives you the benefits for paying       |
| 03:52      | into that over time, and just frequent updates and really solid updates at that.                     |
| 03:56      | Yeah, I was going to say, I think it's like the poster child of subscription apps, because           |
| 04:01      | the worry you have, the implicit promise of a subscription is that I'm going to give you             |
| 04:07      | money on a regular basis, and you're going to give me improved features on a regular                 |
| 04:11      | basis. We've gone from version 5 to 26, and there are a lot of new features that Greg                |
| 04:19      | has just really put the pedal down on. When he came on our show, we talked about iCloud              |
| 04:24      | tags. He had it in there in a month, just like he's constantly making this app better,               |
| 04:31      | which is why I think for me, I just don't find myself very attracted to other text apps,             |
| 04:38      | because whatever feature I want, he's probably already put it in or about to, and then you           |
| 04:43      | combine that with these actions. [[Drafts]] has the ability to write custom user actions,                |
| 04:50      | which can be very simple or very difficult, depending on how far you want to go down that            |
| 04:54      | rabbit hole. Even just a template text is something anybody can do, and I think that                 |
| 05:01      | one of the things I hope people get listening to this today is that you can build your own           |
| 05:05      | actions as well. Yeah, and I think with one of the things                                            |
| 05:09      | with the newest update in 26 that is really going to start coming probably not immediately           |
| 05:16      | right now, but probably in the months to come, as more and more people figure it out, figure         |
| 05:21      | out use cases, is that with customisable themes and syntaxes, you can create little mini apps.       |
| 05:29      | Back when I first wrote about [[Drafts]] 5, it really was one of those things that you could             |
| 05:33      | create little modular apps. If I wanted a writing app, I was there. If I want a journal              |
| 05:37      | app, I'm there. If I want a scratch pad, I'm there, and it's just either a key press or              |
| 05:42      | a swipe away, but now you can have visually different apps within [[Drafts]], and it's going             |
| 05:50      | to really start to take off, and there's some interesting possibilities, I think, ahead.             |
| 05:55      | Yeah. All right, let's take a minute and talk about this new custom themes and [[Drafts]]                |
| 06:01      | and how it works. Give us an overview. The themes and syntaxes, so we'll break it                    |
| 06:06      | down, I guess, into the two. Themes are really just what they are. Any app comes with, well,         |
| 06:13      | most apps come with some sort of light and dark theme, and [[Drafts]] allows you to set that,            |
| 06:19      | but now you can create your own. Do you have a website that you like the colours of? Well,            |
| 06:24      | you can use that in your theme. Do you just like a certain colour palette? You can do that            |
| 06:28      | too. It's really just a fresh coat of paint, and I've often, sometimes, we're sitting out            |
| 06:36      | there looking for the latest, greatest apps coming, and sometimes the developer just throws          |
| 06:42      | a new coat of paint on something, and everybody loves it. I remember when things three brought       |
| 06:47      | out the dark mode, and everybody was super excited about the dark mode, and it's just                |
| 06:53      | one of those things. Little coat of paint, no functionality change, but a little coat                |
| 06:56      | of paint goes a long way. But the difference here is that you can create a theme that really         |
| 07:05      | dials in exactly how you want to work and see a certain draft. So for those that follow              |
| 07:14      | my site, I have a couple of themes based on a light version and a dark version of my site,           |
| 07:19      | and that's kind of where I started, was I wanted a theme that matched my website so                  |
| 07:23      | that when I write, I'm writing for my website, and that's the theme that I use on a regular          |
| 07:28      | basis. Themes in general are just JSON files, that's the nerdy part, but it's not that hard          |
| 07:37      | to create them, really.                                                                              |
| 07:39      | And just kind of for folks that don't want to create them, if you go into the [[Drafts]]                 |
| 07:44      | app, there's already a bunch shipping in the app, and there are also user supplied ones              |
| 07:51      | that you can download from within the app. And I really feel like, like you said, over               |
| 07:56      | the next couple of months, this is probably going to blow up. I mean, it's only a question           |
| 08:00      | of time before we have the solarised view and the different kind of theme views. Maybe               |
| 08:07      | we get the green text on black background or whatever. All the usual nerd go-tos are                 |
| 08:14      | going to be there. And I do think there's something to be said for that, because when                |
| 08:19      | you're working on text, if nothing else, it can bring context to it. You can have different          |
| 08:23      | views for different types of writing, and it's going to be really great as this thing                |
| 08:30      | starts to get bigger.                                                                                |
| 08:31      | Right. And I mean, that's the thing that we do now today with apps. If I'm in [[Drafts]]                 |
| 08:39      | and then I want to use something like Ulysses for writing, those are going to be two different       |
| 08:42      | interface colours, right? It's a visual distinction. I may want to use, you know, a certain monospace |
| 08:49      | font for my writing and regular fonts for just simple scratchpad note-taking. And I can              |
| 08:55      | have that within one app. I don't need to switch. And that's always been my thing.                   |
| 08:59      | It's kind of similar to what you said, David, is that I get so much value out of [[Drafts]].             |
| 09:03      | It really does replace a lot of apps for me, so I don't need to go anywhere else but the             |
| 09:07      | one place. And now I can really customise everything down to little tiny bits of text                |
| 09:14      | for colours just to make sure it pops and I see it in my own way for me.                              |
| 09:20      | So how do you create the JSON file to make your own custom template?                                 |
| 09:25      | Well, so I've started using the app [[Jayson]] by [[Simon Støvring\|Simon]]. I don't know how to pronounce his                 |
| 09:32      | last name.                                                                                           |
| 09:33      | I think it's so nice to pronounce [[Simon Støvring\|Støvring]].                                                          |
| 09:35      | Okay, we'll go with that because you're probably better with names than I am. And I've used          |
| 09:41      | that and I used an app called [[Pastel]]. And that one allows you to choose a colour palette.             |
| 09:49      | So I actually spent some time with the JSON file looking at what things I could customise,           |
| 09:53      | what colours I could change. And then just kind of chose different colours that fit the                |
| 09:59      | theme of my website. So I obviously have a certain colour, the dragon fruit type colour                |
| 10:06      | that is for my site. And then I wanted to accent that with other colours. It took a little            |
| 10:13      | while to get that nailed down and the biggest single complaint of the release. And I mentioned       |
| 10:19      | it to Greg before it went out and I just said, you know, I'm going to write about this too.          |
| 10:24      | But I wish this was either built in or there's some web interface or whatever. Like, I would         |
| 10:30      | love to have one because I think so many users want to just change the look and that's all           |
| 10:36      | they care about that there needs to be an easier visual way. Well, coming out soon, I don't          |
| 10:43      | know if it'll be out by the time this goes out or not. But coming out soon, there's going            |
| 10:47      | to be an online theme builder that does the same thing to be able to choose colours. And              |
| 10:52      | you can build it online, import it and then go and share it from there.                              |
| 10:56      | Yeah, this is something I that's where I really dug into it because I played with it a little        |
| 11:01      | bit in the beta. But I mean, I lack a lot of free time right now. I've had a lot of                  |
| 11:06      | things going on. And so when the theme builder came, I was there go, Oh, okay, this is much,         |
| 11:11      | much easier for me. Because, you know, I can just drag and drop in the bits that I want.             |
| 11:16      | Well, it's not quite drag and drop its type. But that's fine. And then boom, it works.               |
| 11:21      | And so I was obviously incredibly grateful that because you shared your themes with me               |
| 11:24      | Tim, really early on, and I've actually just set those as my default themes. And I want              |
| 11:29      | to talk a little bit about how you're switching between themes in a minute. So don't let me          |
| 11:32      | forget that. But I really like how Greg's made it easy here because I mean, obviously,               |
| 11:40      | you know, he writes iOS and Mac apps, that's his thing, but he's written a great web app             |
| 11:44      | here as well, that just, you know, lets you do this because I love the fact that it's                |
| 11:49      | split as well with the editor and the interface, because you can really change the colour of          |
| 11:54      | I think everything. I don't think there's anything that you can't change the colour of                |
| 11:58      | in [[Drafts]] now with the new theming.                                                                  |
| 12:00      | Right. And those, and those are the basic colours. And then, and then within that whole               |
| 12:05      | big, you know, theme builder or the JSON file, there's these things called scopes. And it's          |
| 12:10      | just the, the different text elements within the app that you can change. And you can customise      |
| 12:15      | those too. It may not work with every syntax, and you may have some weirdness going forward.         |
| 12:22      | But what I've tried to do is, is modify just the key scopes that I want. And then anytime            |
| 12:29      | you create a syntax file that uses those scopes to apply the colours and the theme. So if you         |
| 12:34      | think of it that way, where the theme kind of the theme file sets the colours and what                |
| 12:41      | happens with the text, and then the syntax file really just applies those scopes within              |
| 12:48      | itself. So that way you can have the different elements. So, but yeah, theme, theming is             |
| 12:54      | going to be huge. And I think we could maybe talk about, you know, some automation stuff             |
| 12:59      | going forward in a bit after we talk about syntaxes. But I like what has gone on here.               |
| 13:07      | And it gives everyone a lot of control. And the biggest thing I find with theming that's             |
| 13:13      | been the hardest to get my head around is what looks good, right? And I'm no longer                  |
| 13:19      | sitting going, what's possible? It's like, wow, I mean, what shade of blue represents                |
| 13:24      | what I want here? What shade of orange is the right orange? How does this colour text                 |
| 13:29      | look on this colour background? It really is more about a personal preference selection               |
| 13:37      | than anything else.                                                                                  |
| 13:38      | Yeah, it's like we suddenly have this abundance of riches. And you've got, you've got some           |
| 13:45      | really nice classy looking themes. And you've got some that are just, you know, kids playing         |
| 13:50      | with matches, you know, just terrible. Yeah.                                                         |
| 13:54      | There was a guy in the forum, not the forum, but the [[Slack]] channel. And I think his handle           |
| 14:01      | in there is Kimono Stereo. So I don't know his name. Sorry, I apologise for that. But                |
| 14:07      | he had a bunch of themes when this all came out. And one of them that he put out was called          |
| 14:12      | BSOD, Blue Screen of Death. And I'm like, nope, not installing that, that brings back                |
| 14:18      | too many memories, not happening. But I mean, you could make it like you're typing into              |
| 14:22      | a blue screen of death if you really wanted to go that way. So yeah, it's just crazy the             |
| 14:29      | amount of stuff that you can do and how each theme can really make it feel like a different          |
| 14:34      | space that you're working in.                                                                        |
| 14:35      | Yeah. And all you do to run them as you go into the settings and into preferences. And               |
| 14:41      | by the way, I had said that within a month, they'll be polarised. And now there's already            |
| 14:45      | two polarised in there, dark and light.                                                              |
| 14:47      | I think those might be default themes, David, actually.                                              |
| 14:50      | Yeah, they're built in.                                                                              |
| 14:51      | Yeah, I know.                                                                                        |
| 14:52      | I was gonna say, I was using Solarise Dark as my light theme for a very long time on                 |
| 14:56      | my iPad.                                                                                             |
| 14:57      | Well, and the cool thing about this, and especially with a theme builder, so actually in your        |
| 15:04      | editor settings, which is the little AA icon in the bottom, you can tap that and then you            |
| 15:11      | can actually export this syntax. You don't even need to have JSON or anything like that              |
| 15:15      | installed. What you can do now is with this online theme builder is you can import that              |
| 15:22      | file. And if you don't like a certain colour that's in there, or you wish a colour was something       |
| 15:27      | different, you can change that colour, you can kind of hunt around, play with the settings            |
| 15:32      | a little bit, find that colour, change it, import that again, as your own theme. And                  |
| 15:39      | then you can share that on the directory. It's it's really easy. And in fact, for my                 |
| 15:44      | own themes, as I've been kind of tweaking some things based on either feedback or my                 |
| 15:48      | own personal uses, I've gone in and instead of using JSON to actually modify the file                |
| 15:56      | and type in everything, I've actually gone to the theme builder, uploaded the file, and              |
| 16:02      | then import the new file, overwrite the directory. So I have the saved copy still. And I don't       |
| 16:09      | need to do much else. It's it I can do it all with the online tool. And it's it's actually           |
| 16:15      | sped up my workflow a little bit. It's not automated, but it works.                                  |
| 16:20      | So what are your your in addition to your own themes? Are there any that you would recommend?        |
| 16:25      | There's a there's a few. So the things that I'm using different themes for right now.                |
| 16:31      | Obviously, I have my own dark theme that I use on a regular basis for either writing                 |
| 16:37      | or work for right now, which I'll talk about maybe in a minute. Journaling, I have my own            |
| 16:44      | journal dark theme. Jeff Perry of tablet habit had come up with his and I kind of morphed            |
| 16:51      | it into my own. So I liked the colour theme that he had there. So that one's a good one.              |
| 16:57      | I think that one's called tablet habit dark. Once I get to a certain place for task management,      |
| 17:05      | I'm going to probably use either the dark and friendly theme that was provided by Matt               |
| 17:11      | Birchler. It's either I'll use that or I'll I'll I'll change and modify it and credit                |
| 17:16      | him in the in there for task management. I'll do that. And then for scripting, I use a theme         |
| 17:24      | in there called night owl. It's a it's a theme that's been around for a long time in some            |
| 17:29      | other writing apps and coding apps. My buddy Jeff Mueller had gone and actually taken that           |
| 17:36      | theme went through painstakingly before the online theme builder and set all the colours.             |
| 17:41      | It took him about probably half a day to do it. But there was like I think there's like              |
| 17:46      | 1200 colours in the original. So he he changed that and streamlined it down. But those are            |
| 17:53      | kind of the big ones that I'm using right now. I don't really use other ones and I'm                 |
| 17:58      | I'm still playing around with a few things here and there of how I want to set it up.                |
| 18:02      | Can I second the nomination for night owl? It is gorgeous for a dark theme. I love it.               |
| 18:07      | Yeah.                                                                                                |
| 18:08      | And there are links to all of those themes that you've just mentioned in the show notes.             |
| 18:11      | I should I should say so for anybody who's looking for them, check the show notes. They're           |
| 18:15      | right there.                                                                                         |
| 18:16      | Yeah. So and that's and again, it you know, going back to what I was saying is it really             |
| 18:23      | is something that this is going to come down to a lot of people's personal preferences.              |
| 18:27      | So over time, especially with this online theme builder coming out, that's really going to           |
| 18:33      | drive and push a lot of people to create new things. And I'm I'm looking forward to that.            |
| 18:39      | This episode of Automators is brought to you by PDFpen from our friends at Smile. Does               |
| 18:44      | your PDF editor allow you to secure documents, do OCR scanning, fill out and sign forms?             |
| 18:50      | Does it allow you to do all of that on the go and at a low cost? PDFpen does. PDFpen is              |
| 18:57      | the all purpose PDF editor that allows you to improve your workflow and productivity,                |
| 19:02      | add signatures, text and images and make changes and correct typos.                                  |
| 19:07      | Improving your workflow is one of those magical things that sometimes it takes you forever           |
| 19:11      | to realise that's what you've done. And that's one of the reasons why it's so difficult              |
| 19:16      | to try and do it yourself. But if you haven't used PDFpen, then you really should. The fact          |
| 19:22      | that you can save your various different signatures as a stamp just makes it easy so that you        |
| 19:27      | always have those on hand that you need. And if a document wants you to sign in black and            |
| 19:33      | white, you can do that too. I use it for all sorts of things. Just last week, I used it              |
| 19:38      | to fix a typo in PDFs that were sent to me and send it back and let them know that as                |
| 19:43      | well as signing the document, I'd fix the typo for them. That turned out to be a big                 |
| 19:48      | time saver for me and for them because I didn't have to wait for them to fix the document            |
| 19:53      | and then send it to me again. I just fixed it and it was done.                                       |
| 19:58      | If you work at all with PDFs, you need PDFpen and you can keep everything synced too because         |
| 20:03      | PDFpen and PDFpen Pro work with PDFpen for iPad and iPhone for seamless editing across               |
| 20:10      | your devices with cloud services such as iCloud, Dropbox, Google Drive, OneDrive, and more.          |
| 20:16      | You can learn more about PDFpen and PDFpen Pro at PDFpen.com/podcast. That's PDFpen.com        |
| 20:25      | slash podcast. Our thanks to PDFpen from Smile for their support of this show and all of             |
| 20:31      | RelayFM.                                                                                             |
| 20:32      | Tim, we've covered themes, which is how things look mostly. There's also syntaxes. Now,              |
| 20:40      | I know what a syntax is, but for the people at home, I think you will do a better job                |
| 20:44      | of explaining what is a syntax and why is that important in [[Drafts]]?                                  |
| 20:49      | I will try to do that justice. A syntax is just the built-in grammar that the file uses.             |
| 20:59      | You might just want simple text. You might want to write in markdown or multi-markdown.              |
| 21:03      | You may be writing [[JavaScript]] or even setting some things up in Taskpaper. Those have been          |
| 21:08      | kind of the general syntaxes for a while. What a syntax file allows you to do is it's                |
| 21:16      | a lot more complicated than a theme file is. It still uses JSON to really navigate everything,       |
| 21:25      | but you need to know regular expressions, more commonly called regex. It's not for the               |
| 21:33      | faint of heart. I think I said that in my review. It really is not for the faint of                  |
| 21:37      | heart. The only reason I think I was able to do what I've done with my own syntax of                 |
| 21:46      | [[Drafts]]down is really because I've grafted some other elements here and there to my own.              |
| 21:52      | It's really difficult to do. It's one of those things if you have an experience or                   |
| 21:58      | have somebody that can guide you, it's a good idea to do. I think the biggest reason why             |
| 22:04      | you'd want to use your own syntax is because you use the app in a certain way or have a              |
| 22:09      | certain way of setting it up. There are some syntaxes that are out there like you could              |
| 22:17      | do fountain, which is a common writing syntax that a lot of different people use and maybe           |
| 22:24      | writing screenplays, you could do that within [[Drafts]] and it'll highlight everything, how             |
| 22:29      | you would have an app that you would normally write in fountain. You can have it set up              |
| 22:34      | that way in [[Drafts]] and it just changes how you're going to use the app.                              |
| 22:41      | I think how it ties into some theming is you can set some of the way things look in your             |
| 22:50      | syntax using the theme colours or the theme scopes and making text larger, smaller, italicised,       |
| 22:57      | whatever, monospace. You can do that within your syntax file and it really can change                |
| 23:05      | how everything looks. It's a really powerful tool. I don't know if you have anything more            |
| 23:10      | to add to that, Rose.                                                                                |
| 23:12      | I would also mention that syntax is commonly referred to in programming terms, so you have           |
| 23:18      | a programming syntax and that's usually, if you open, say for example, a [[JavaScript]] file,            |
| 23:25      | then that will look one way and then if you open, I don't know, say just a text file,                |
| 23:32      | then that will just probably be like black text on a white background. Usually that's                |
| 23:35      | what happens. An application, I'm going to use [[BBEdit]] as an example here because it supports           |
| 23:40      | thousands of different programming syntaxes, at least I think so. It certainly supports              |
| 23:44      | hundreds of them. That's what it's doing. That's the magic that's behind it there.                   |
| 23:49      | Just a slightly different explanation, but I think you covered that very well.                       |
| 23:54      | It feels like this is one where you're really threading the needle because Greg, the [[Drafts]]          |
| 24:01      | developer has already done an excellent job of syntax support for the usual suspects. The            |
| 24:08      | stuff you're often going to be using to write [[Drafts]] like Markdown. I think even as Critic           |
| 24:13      | Markdown in there, I was just looking to see if he already put it in there.                          |
| 24:17      | That's actually built into the MultiMarkdown. The Critic Markup is built into MultiMarkdown          |
| 24:22      | and it's great.                                                                                      |
| 24:24      | He's got that in there. A lot of the syntax that most people would want is already baked             |
| 24:31      | in, but I guess he had just enough people asking, can I make it custom that he said,                 |
| 24:37      | okay, well, I'll give you the tools to go in and write your own. This is one I'm very                |
| 24:42      | curious to see, number one, what do people do with it? Number two, will I ever have                  |
| 24:47      | any interest in it? While I'm super interested in theming it properly, the syntax thing to           |
| 24:53      | me is a snoozer because I largely just write Markdown for everything. When I do coding               |
| 25:01      | to the extent I do coding, I don't do it in draft. I'm not sure how much this is going               |
| 25:06      | to be for a lot of people, but I think this is a feature that's going to be super useful             |
| 25:11      | to a couple of people and a lot of people are just going to pass this one by.                        |
| 25:15      | Well, I think for a lot of people, it will enhance things. Say, for example, somebody                |
| 25:20      | who uses Jekyll or Hugo or something as their blogging platform, normally that's got a block         |
| 25:26      | at the top that's got three dashes above it and three dashes below and then inside it                |
| 25:30      | that's a [[YAML]] format. Something like that, you can now do in [[Drafts]] and that can have                |
| 25:36      | its own bit of theming because it knows that that's there because it's got the starter               |
| 25:41      | and the ender and then the rest of it's in Markdown. That's something that's much easier              |
| 25:45      | to do and have look right because I know that's something I've struggled with before                 |
| 25:49      | where I just wanted that bit to display in like mono space and then I wanted the rest                |
| 25:55      | of it to be pretty Markdown as I was used to and I couldn't do that at the time and                  |
| 25:59      | now I can do that and that's what I like about this.                                                 |
| 26:03      | I think David, you're right. This is something that I think in a short term, there's not             |
| 26:08      | going to be a whole lot of people that find this useful because they're going to go, okay,           |
| 26:11      | great, number one, how do I do it? And then number two, what do I do with it? And really             |
| 26:17      | the answer to the how is, well, you got to know some regex and you got to get some help              |
| 26:22      | if you don't know that and you got to work on it. But really, what do you do with it?                |
| 26:27      | There's a lot of possibilities that could come from it. Myself, like with, so I created              |
| 26:32      | a syntax called [[Drafts]] down and it just, I started with the multi Markdown that's built              |
| 26:37      | in. So I have all the critic Markup. I have all of the features of Markdown and multi                |
| 26:42      | Markdown. So everything's in there already. And you can export syntax files the same way             |
| 26:50      | you do theme files and [[Drafts]]. So it's a pretty easy thing to grab that file. But I                  |
| 26:56      | started including, because I will often to emphasise something in my writing, I made                 |
| 27:01      | bold and italicise it. And that's not something that's built into the multi Markdown. It's           |
| 27:05      | occasionally that can get a little weird with just how it highlights, but I put that in              |
| 27:11      | there. And, and so that's in there now for me. And I've incorporated some other things               |
| 27:16      | because I use multi Markdown primarily for things that I use for work. So when I talk                |
| 27:24      | about work task management and how I do things at work in my job, I'm constantly using [[Drafts]]        |
| 27:31      | for it. And I just go back and forth wiki style linking everything. So I can move freely             |
| 27:36      | through some some different [[Drafts]] that I have. But I've started to incorporate task                 |
| 27:43      | lists in greater form. And I mean, really, it was probably about a week before the [[Drafts]]            |
| 27:51      | 26 got released that I was really starting to play with two state and three state tasks.             |
| 27:58      | Those are the checkboxes that you see within [[Drafts]]. But it it's the three state tasks               |
| 28:04      | are really interesting because that's not part of multi Markdown. That as it's as it's               |
| 28:09      | shipped in the app, you have to actually use a simple list or simple list plus syntax to             |
| 28:15      | get those. And so I just combined those two things together to say, All right, here's                |
| 28:19      | multi Markdown, here's a simple list. And I can combine these two. It wasn't much effort             |
| 28:25      | it took a little time, but I got it in there. And now I can have, you know, either tasks             |
| 28:30      | that like, once it's done, it's done, or hey, I need to ask somebody something, I'll mark            |
| 28:36      | it in process. And it when it's completed, it'll get grayed out and struck through. So               |
| 28:43      | I don't have to see that task visually. It's, it's, it's just a simple change that I've              |
| 28:47      | made, but it's been a big difference so far. Yeah, another thought that occurs to me is              |
| 28:53      | the Markdown, what I'll call Markdown plus apps, apps that use Markdown as a starting                |
| 28:58      | point. But then they add things, you know, like these PKM apps do have like task management          |
| 29:03      | syntax or or linking syntax. And there's no reason why you couldn't write custom syntax              |
| 29:10      | and [[Drafts]] to make that process a lot easier to create the notes and [[Drafts]] and go ahead             |
| 29:17      | and apply custom syntax.                                                                             |
| 29:19      | Right. And even one of the other things you can do in a syntax is up at the top, there's             |
| 29:25      | a little tiny carrot next to the draft symbol. And that's a navigation window. And when you're       |
| 29:32      | in a draft, you can navigate to the different headers of a draft. Well, now you can set              |
| 29:36      | navigation points that are incomplete tasks. So that's actually one of the things I've               |
| 29:42      | I've used is any of my incomplete or in process tasks, I can quickly navigate to one using           |
| 29:48      | that portion of it. So I can just jump to that and mark it really quickly because some               |
| 29:52      | of my lists are very long with the amount of tasks that I'm either undertaking or assigning          |
| 29:58      | to people as part of my day to day job. So it's, it's something that makes me navigate               |
| 30:03      | even quicker and you can, you can do that a whole lot easier now and you can do that                 |
| 30:07      | with anything. So if there's keywords that you want to set up, so say somebody creates               |
| 30:12      | a syntax that has the, you know, the word to do in their TODO and a colon, you could                 |
| 30:19      | make that so you can navigate to that element throughout the draft. So it, it can start              |
| 30:24      | to extend the app even farther than it is today and more use cases going forward.                    |
| 30:30      | Do you guys use that feature in [[Drafts]], the reorder feature? Are you familiar with this?             |
| 30:35      | Yes.                                                                                                 |
| 30:36      | Oh, arrange mode?                                                                                    |
| 30:37      | All the time.                                                                                        |
| 30:38      | I, you know, I don't know why every text editor on the market doesn't steal that feature.            |
| 30:43      | It is the best, you know, because like for writing blog posts or even legal briefs, I                |
| 30:48      | find, you know, one of the last steps to do is just go into that mode and fill, you know,            |
| 30:53      | give myself free reign to move things around. And for listeners that aren't aware, they              |
| 30:58      | have the ability in [[Drafts]] to drag as a starting point paragraphs up and down, you can just          |
| 31:04      | move them around. But with [[Drafts]], it gets even more granular. I think it goes down to               |
| 31:08      | the sentence level of memory serves. And, and you can just, you can reorder your text.               |
| 31:14      | And after you get to writing things, it makes a lot of sense to take some time and look              |
| 31:19      | at it again to make sure the organisation makes sense. And this easy rearrange is so,                |
| 31:26      | so powerful.                                                                                         |
| 31:27      | Yeah. There's, there's times that I've sat in meetings where I'm using my iPad jotting               |
| 31:32      | down notes and, you know, I'll have multiple tasks come in and I'm in a range and I'm trying         |
| 31:39      | to order them in priority. Because I typically don't use a numbered list because things jump         |
| 31:44      | priority one day to the next. And so I will, I'll be sitting there in that mode and I'm              |
| 31:50      | like, Oh, I got to exit this because, you know, I need to write another task down. Oh,               |
| 31:54      | no, I don't. I can just duplicate the line and inside the arrange mode, little pro tip,              |
| 31:59      | you can just edit the text there. So you can duplicate a line and you can edit the text              |
| 32:04      | right in a range mode. So you don't need to leave that if, especially if you're doing                |
| 32:07      | some minor modifications here and there. And then you can just tap done and everything               |
| 32:12      | just magically moves around where you want it. And it's set. I do that all the time.                 |
| 32:17      | And it, it is one of those features again, where it's, it's built in and before we didn't            |
| 32:23      | have that to the extent that we have it now. And I don't ever want to go with another app            |
| 32:30      | that does not have that it is that vital to me in my workflow.                                       |
| 32:33      | I use this all the time because I, I have a lot of Taskpaper templates for various projects.        |
| 32:39      | So, you know, for example, every single episode of automators and as to folders, I was today         |
| 32:44      | guest podcast them on things like that, they all have task templates. And whenever I'm               |
| 32:48      | going through an editing them and I want to rearrange some tasks in, in that template,               |
| 32:53      | so that, you know, things get created and they're in the right order. I do that. And                 |
| 32:56      | it's just like that, that mode is a game changer for people who ever rearrange lines. There          |
| 33:03      | is no more cutting and pasting and stuff like that. You just drag it up and down and done.           |
| 33:07      | And it's so easy.                                                                                    |
| 33:08      | Yep.                                                                                                 |
| 33:09      | I do think though, getting back to syntax, this is going to be a feature that is going               |
| 33:13      | to get filled out by the community pretty quickly. And I would, I would recommend for                |
| 33:19      | listeners that don't want to go as deep down the rabbit hole as Tim has. It's just keep              |
| 33:24      | an eye on the community syntax plugins because I suspect that, I mean, because you already           |
| 33:30      | have most what you need built in the app. I think that the few exotic things that most               |
| 33:35      | people would be looking for are going to exist pretty rapidly.                                       |
| 33:39      | Right. And the things that I see in the future for people to create in, you know, I kind             |
| 33:46      | of have my journalling workflow already set. But for people that do, you know, bullet journalling,     |
| 33:53      | this is something where you could literally create a syntax and you can have the different           |
| 33:57      | markers, I guess, for each line be different, be a different colour. You could, you can have          |
| 34:05      | them do different things so that as you're moving through the app, it could really be                |
| 34:10      | like how you would write a bullet journal by hand, you could do it digitally. It takes               |
| 34:15      | a lot more work to set this up, but it's something that could be done if somebody really wanted      |
| 34:21      | it. And I think that's something that that the with the theming and syntax highlighting,             |
| 34:28      | those two things together can create some really powerful customisations for people                  |
| 34:33      | to really make it an app that maybe they didn't have a huge use for beyond a scratch pad,            |
| 34:39      | but then now can turn into their daily bullet journal and really take it to another level.           |
| 34:45      | Yeah. And when you get tired of it, you change the theme, you've got the same syntax.                |
| 34:50      | Right. And for those that are thinking, Hey, you know, a digital bullet journal, I like              |
| 34:54      | using my, my, my handwriting, right? You know, I like writing my hand. Well, in version              |
| 35:00      | 22, we, you know, scribble came along. And that's something you can use there too. It's              |
| 35:08      | it's great. I use scribble with [[Drafts]] all the time. And it I can write by hand, I can               |
| 35:15      | type it in, it doesn't really matter. And that and that's just a another example of                  |
| 35:20      | how great these little features are. Since we've gone from [[Drafts]] five to 26. Now, all               |
| 35:27      | these little features are just huge usability improvements that are just fantastic.                  |
| 35:32      | I have linked to the most popular pay or the ordering of the most popular syntaxes and               |
| 35:38      | themes in the show notes for everybody, by the way. So if you're there going, I want                 |
| 35:43      | to try things out, then it's there. And I'm very pleased to report that as of the time               |
| 35:46      | of recording [[Drafts]] down Tim, your, your custom syntax is the most popular syntax by probably        |
| 35:53      | a large margin. So I'm very pleased to see that.                                                     |
| 35:56      | I hope it doesn't stay there long. I hope other people come along and do great, wonderful            |
| 36:01      | things with this because I'm I'm really just making it for me. I mean, I'm not sounding              |
| 36:06      | I hope I'm not sounding conceded in any way. It's just I'm making this for me. And if other          |
| 36:10      | people find uses for this, fantastic. And I hope other people create some things that                |
| 36:16      | are really awesome that other people can use.                                                        |
| 36:19      | So Rose, have you gone down the rabbit hole of [[Drafts]] theming and syntax yet?                        |
| 36:23      | So I have started specifically, I was talking earlier about the the Jackal Hugo theming              |
| 36:30      | and that's something that I am messing with. But it's such a local mess. It's it's one               |
| 36:35      | of those things where I'm looking at it. And I've not had the time to just sit down and              |
| 36:39      | properly do it. So I've been trying to do it in sort of five minute chunks between doing             |
| 36:43      | other things. And I can tell you if you have not looked at the documentation, and you don't          |
| 36:48      | really know what you're doing. Hi, yes, this is me. Then it's worth sitting down and having          |
| 36:54      | a quick look through and looking at how some other people have done things. And of course,           |
| 36:58      | as Tim said, exporting one of the built in ones, which is close to what you want. And                |
| 37:03      | then, you know, modifying that and then re importing it. And I definitely second the                 |
| 37:09      | recommendation you made at the top to Tim for JSON J A Y S O N. That is a an excellent               |
| 37:14      | app for doing this because it makes it very, very easy to create valid JSON. JSON is a               |
| 37:21      | very picky syntax. If you miss a quotation mark or at a comma where you shouldn't, you               |
| 37:25      | will break it. So it's good to have an app that protects you from yourself.                          |
| 37:29      | Yeah. Yeah, I went down. Yeah, I tried to play with the themes and it doesn't really                 |
| 37:35      | seem that hard to customise them if you want. But I found night owl and it was like love             |
| 37:40      | it for sight. And I've been using night owl now. And I don't know that I'm going to be               |
| 37:45      | switching off of it anytime soon. It's just such a great theme.                                      |
| 37:48      | Oh, I'm well, I'm using Tim's light and dark themes. And I've set those up. So my editor             |
| 37:52      | auto switches at well with the system. So that's, you know, when sun comes up and when               |
| 37:58      | the sun comes down, which of course recently changed. So that's not at all confusing. Fortunately,   |
| 38:03      | my Mac knows what I'm doing there.                                                                   |
| 38:05      | And we didn't mention it, but in the preferences for [[Drafts]], there are buttons to get themes         |
| 38:11      | and get syntaxes at the bottom of each screen. So don't when you open the app, you'll see            |
| 38:18      | a limited number built in, but there is so much more out there. Just push the button                 |
| 38:22      | and go go try some of these out.                                                                     |
| 38:25      | This episode of the automators podcast is brought to you by Microsoft lists, a Microsoft             |
| 38:31      | 365 app that helps you track information and organise work. Keeping track of information             |
| 38:37      | is something that's in everyone's job description these days. Quite simply, writing things down      |
| 38:42      | is what works for simple lists, but it can get overwhelming when you need to stay on                 |
| 38:47      | top of hundreds of items and get others to pay attention and act. Microsoft lists is                 |
| 38:52      | a Microsoft 365 app that helps you easily track information and organise your work.                  |
| 38:58      | Lists are simple, smart and flexible, so you can stay on top of what matters most to your            |
| 39:03      | team. You can track issues, assets, routines, contacts, inventory and more using customisable        |
| 39:09      | views and smart rules and alerts to keep everyone in sync. With ready made templates, you can        |
| 39:15      | quickly start lists online on the new mobile app for iOS and directly within Microsoft               |
| 39:21      | Teams. And because it's part of Microsoft 365, you can rely on enterprise ready security             |
| 39:27      | and compliance. I spent some time with Microsoft lists and I'm impressed. I feel like Microsoft      |
| 39:33      | has really threaded the needle with this one, giving you a product that's simple to use,             |
| 39:38      | but also complex enough to manage in Teams, which is not easy. It's not easy to make an              |
| 39:44      | app that can be easy to use, but also work with a group of people and that's what they've            |
| 39:48      | done with Microsoft lists. If you're already using Microsoft Teams or Microsoft 365, this            |
| 39:54      | one is a no brainer. It's an excellent app and definitely worth checking out. So if you              |
| 39:59      | want your list to get a whole lot smarter, get more done with Microsoft lists. Go to                 |
| 40:04      | aka.ms slash ms lists for more information, videos, demos, blogs and more. That's aka.ms             |
| 40:12      | slash ms lists. Make a list and let it flow. Our thanks to Microsoft lists for their support         |
| 40:19      | of the Automators and all of Relay FM. So Tim, you don't just write in [[Drafts]]. You automate          |
| 40:27      | things. You mentioned before you've got a bunch of things that just happen. What are                 |
| 40:31      | these things that just happen? What are you actually automating in [[Drafts]]? And they're               |
| 40:36      | small automations, right? But anytime I hit command K, which is a very common keyboard               |
| 40:42      | shortcut, it inserts a markdown link, right? So even though that's something that I just             |
| 40:48      | do and it's muscle memory for me now, that's still a script running in the background. It's          |
| 40:53      | still a little bit of an automation that just pops a little bit of text in with a formatted          |
| 40:58      | URL for me. And it's done. Those are the little things. Keyboard shortcuts. And there's a            |
| 41:06      | new setting that allows you to turn those on. So as you see it in the action group on                |
| 41:13      | the right hand side of the app, you can kind of see what your keyboard shortcuts are. At             |
| 41:17      | this point, I don't know how many pages I want to say, maybe eight of keyboard shortcuts             |
| 41:21      | that I have. And sometimes I don't remember everything that I have. So it's it's a good              |
| 41:26      | visual indication for me that, oh, hey, I can, I can use a simple shortcut to then kick              |
| 41:32      | off an action, which maybe just format some text. And that's, that's primarily, I think              |
| 41:37      | out of all the automations that I use, that is my primary one is within the app, text                |
| 41:43      | manipulation is probably my biggest single automation that I'm using. Aside from that,               |
| 41:49      | the other automations that I'm using, and where it really comes into the play with theming,          |
| 41:55      | not so much syntax right now, but theming is workspaces. So workspaces is, you know,                 |
| 42:01      | that basically in short terms, a collection of [[Drafts]] with tags applied to them. So you              |
| 42:06      | can group things together. So I have some for, you know, one for writing, one for scripting,         |
| 42:12      | I have one for journalling, I have one for work. And so what I do with that now, and what             |
| 42:18      | I've done with my module script, which is something I talked about way back in [[Drafts]]                |
| 42:24      | five, I can now set a theme based on that keyboard shortcut. It's not something that                 |
| 42:31      | happens automatically, I've actually asked Greg to put it in so that when you switch                 |
| 42:35      | a workspace, you change the theme. There's some there's some risks with doing that way.              |
| 42:40      | But I think that's something most users will find beneficial. But when I switch from, say,           |
| 42:48      | my writing syntax to my journal syntax, or my journal workspace, rather, I can just switch           |
| 42:55      | the colour of the app and make it look different. And it's, it's something that's just a visual       |
| 42:59      | change, but that is an automation that I'm doing.                                                    |
| 43:02      | Just walk through that. How are you pulling that off?                                                |
| 43:05      | So I have an action that is a module selector. So it sets the workspace, it sets the action          |
| 43:12      | group and the keyboard row. So that that way I can have all the actions in my fingertips             |
| 43:18      | that I want. And then what I've done is I've added a theme to each one of those. So now              |
| 43:24      | when I use my keyboard shortcut, I can switch and I have my modules are command two through          |
| 43:33      | command eight. And so I can switch all those modules inside of those keyboard commands.              |
| 43:41      | And so it's just jumps me from effectively what I like to say is one app to another.                 |
| 43:46      | So I can go from writing to journalling real quick. And it changes the [[Drafts]] list, it                |
| 43:51      | changes the action groups, everything and now the theme. So I know that I'm in a different           |
| 43:56      | space. On the iPhone, I use that I have that actually is an action in every single one               |
| 44:02      | of my action groups at the beginning point so I can quickly switch there. So I'll do                 |
| 44:08      | that too. Yeah, so that's an action that that changes                                                |
| 44:12      | all these settings. Is that a published action?                                                      |
| 44:15      | I don't know that it is anymore. It might not be. But you know what, I will I will get               |
| 44:20      | that out so everybody can have that link in the show notes so that people can use it.                |
| 44:24      | Yeah, because I'm doing the same thing. But I'm even though I host the automators, I'm               |
| 44:28      | doing it largely manually at this point. So you're making me jealous. How could you?                 |
| 44:33      | I do I do just to kind of put an emphasis on his discussion of the action keyboard shortcuts.        |
| 44:40      | That is something that you really should embrace if you use [[Drafts]] because not only I mean,          |
| 44:45      | there's anything you create an action on you can tie to a keyboard shortcut and it's done            |
| 44:49      | right in the edit menu for the action. And in addition to text transformations, I also               |
| 44:55      | use it for text templating. Because I love I write a lot of [[Drafts]] text that's going                 |
| 44:59      | to go somewhere else. Like, you know, I have a call with a client or whatever. I could               |
| 45:05      | make a template draft form. But I also just have the text template saved as a keyboard               |
| 45:10      | shortcut. So I don't have to monkey around with the action menu. I just, you know, hit               |
| 45:16      | the plus sign, fire off my keyboard combination and everything's there for me.                       |
| 45:20      | Yeah. And I think I think one of the things that people lose themselves in a lot. And                |
| 45:25      | I've kind of backed down a little bit here and there from doing a lot of heavy lifting               |
| 45:29      | automations, there's there's a very big place for those. But the simple automations sometimes        |
| 45:35      | tend to be the right ones. It really is one of those things that's overlooked a simple               |
| 45:41      | action to move one thing to another place. You know, I liken it to a forklift. So I work             |
| 45:47      | in automotive, but you know, we have different robots and the plants that pick up from one           |
| 45:52      | location, drive it down a line and put it in another location. It's it's a simplified                |
| 45:59      | task at that point, but it's an automation. And that's that's kind of the the nice thing             |
| 46:04      | about [[Drafts]] is that you can use a lot of those little actions. And you can either have              |
| 46:08      | them in the keyboard row, you could have them as a keyboard shortcut so that when you have           |
| 46:13      | an iPad or an external keyboard connected, you can just do that. Obviously, I'm I'm very             |
| 46:17      | iOS centric. So I'm the Mac is is just as capable. And it's probably even more capable               |
| 46:24      | when you combine that with, you know, [[AppleScript]] and things like that. So yeah. And                |
| 46:28      | the nice thing about the simple automations is they never break. They just seem to work              |
| 46:32      | forever. Yeah, they do. The thing that in going back rows to your question, you know,                |
| 46:39      | for me, things that I automate are are really my own workflows and my own way of working             |
| 46:46      | and using the app. By and large, a lot of what I do with [[Drafts]] has not changed. I'm                 |
| 46:52      | very boring in that way. I use it, I use it for everything that I possibly can. And where            |
| 46:58      | it doesn't work, I use another app. But I use it for writing for journalling, those                   |
| 47:03      | sorts of things. So I have my automation that I've had for a while to publish to WordPress.          |
| 47:10      | So I use that all the time. When I when I do my writing for my journal, I've created                 |
| 47:17      | a PDF version of my journal. So now I not only have the text save within [[Drafts]], but                 |
| 47:23      | I also send that over to shortcuts, create a formatted PDF and save that PDF off. It's               |
| 47:30      | just it's just a quick, easy automation. It runs very quickly. And it just allows me                 |
| 47:38      | to process some [[Drafts]] out of the system. So it's not as overwhelming.                               |
| 47:42      | Sure. And do you do is that like a daily thing? Or do you run it a certain increment of time?        |
| 47:48      | My intention was daily. Sometimes it's not sure. So so that that particular one, and                 |
| 47:55      | I can maybe create a one to share with with the users. So we'll have to put that one in              |
| 48:00      | notes too. But I think it just grabs the title, which I how I format my journal is very much         |
| 48:09      | a date goes in the title field. I have a section of kind of just some metadata on the day,           |
| 48:15      | you know, how much I slept what the weather's going to be like, just some little simple              |
| 48:19      | things that shortcuts provides. And then it just gives me a couple little fields for what            |
| 48:26      | I called quick hits, and then some entries. And so there's a lot of times where I will               |
| 48:32      | journal and it'll just be a lot of quick hits for the day. And I really don't have a whole           |
| 48:35      | lot of say, I'm not really writing profoundly every day. Sure. But sometimes, like the other         |
| 48:42      | night I had a crazy vivid dream and I sat down and wrote that out and how I felt about               |
| 48:46      | it. And it just that that's what ended up coming out for that day. But then sometimes                |
| 48:52      | I forget to run the action at night. And there's a couple times where I've forgotten to run          |
| 48:57      | it for a couple of weeks. But the beauty of it is I can run that quickly. And it just                |
| 49:03      | processes it very, very fast. In fact, excuse me, I will. In fact, I will have a draft window        |
| 49:12      | on the one side of my iPad, I will have a shortcut window on the other side of my iPad.              |
| 49:16      | And it just I can just watch it in real time run. And it's just it takes me all of about             |
| 49:21      | five minutes to process a bunch of them.                                                             |
| 49:23      | I'm just thinking out loud when the time based shortcuts trigger allow you to run that action        |
| 49:27      | without you having to do it yourself? I think it would.                                              |
| 49:32      | It would. The only thing I would have to do is save the I mean, I could probably do it               |
| 49:38      | for that day. That's actually not a bad rabbit hole for me to go down at some point. It's            |
| 49:43      | just something that I could do that. Actually, you know what? I will take that on as an assignment.  |
| 49:49      | Thanks for giving me homework.                                                                       |
| 49:50      | There we go. I'm going to have to do that.                                                           |
| 49:52      | Everybody goes home from this podcast with homework, Tim. You are no exception being                 |
| 49:55      | guest.                                                                                               |
| 49:56      | Fantastic. Great.                                                                                    |
| 49:57      | But good news is you're probably going to get an A. So yeah, let's hope so.                          |
| 50:02      | And the other thing that's cool with that workflow is you can set up the formatting of the PDF       |
| 50:08      | as you want. So in this case, you said it's your journal. So you want it to look nice                |
| 50:12      | as it goes into this PDF file.                                                                       |
| 50:14      | Well, actually, the funny thing is it does format pretty well. And it really mimics what             |
| 50:22      | I had in [[Day One]]. So I used to use [[Day One]] years ago. There were some security things                |
| 50:30      | that happened that I particularly was not a fan of. And so I moved that to my own solution           |
| 50:36      | within [[Drafts]] at the time. But now, you know, I look at the value of what I have in [[Drafts]]           |
| 50:41      | where it saves me from a couple of different subscriptions with other apps, writing apps,            |
| 50:46      | journalling apps, et cetera. I don't need to use those apps. I can just use [[Drafts]] and                |
| 50:51      | I have one payment. It's a cost proposition at that point for me.                                    |
| 50:57      | One of my favourite drums to bang on is the idea of contextual computing and the idea                 |
| 51:02      | of mode shifting. And you, I think, everyone I've talked to has accomplished that the best           |
| 51:09      | with [[Drafts]] in these early days of themes. But it sounds like you've really kind of gone             |
| 51:14      | deep on getting a different context for different modes of doing [[Drafts]].                             |
| 51:19      | Yeah. I try to do that as much as possible because I know that staying in one place,                 |
| 51:27      | you know, there's people that I know that use, I'll use Gmail as an example. I use Gmail             |
| 51:33      | at work. That's our preferred platform at work. And I know some people that have personal            |
| 51:39      | Gmail accounts and there's times that they have trouble keeping those two contexts separate.         |
| 51:46      | And blending work and personal is never good. So for me, by extension, just keeping those            |
| 51:51      | contexts separate of, hey, you know, in my journal, my journal stuff never gets shared.              |
| 51:56      | That's not a public thing. That's for me. So having a, not only a visual cue from a colour            |
| 52:03      | standpoint, but even a potential different syntax that I can use there is going to help              |
| 52:09      | drive that, okay, I am journalling now. This is journal time. I don't need to focus on                |
| 52:13      | anything else but journal. And then the other times where I'm using my writing, this is              |
| 52:18      | writing time. That's what I need to use. So it's, it's a, it's something that I'm, I'm               |
| 52:22      | still going through its early days, but I'm still going through it. And now that I can,              |
| 52:29      | you know, use the syntax or sorry, not syntax, but the theme scripting and change that I             |
| 52:36      | can, I think it's just one more step towards, you know, creating all these mini apps and             |
| 52:43      | automating my way through it.                                                                        |
| 52:45      | What's the, what's the missing feature in [[Drafts]] for you at this point? I mean, you                  |
| 52:48      | can even customise syntax. I don't know what's left. Oh, I have some, I have some thoughts           |
| 52:55      | actually.                                                                                            |
| 52:56      | Now, Greg Pierce is going, how long is my homework list? Sorry.                                      |
| 53:00      | Yeah, I know. Yeah. I don't, I don't think you're going to get Greg on again because                 |
| 53:03      | you asked that question. No, um, actually there's, there's two major ones for me, right?             |
| 53:07      | Like I, I still would love to see somehow, even though [[Drafts]] is a text editor, I would              |
| 53:13      | love to see image support get added. It's a whole difficulty of how you support images               |
| 53:21      | in a text format, especially with all the automations.                                               |
| 53:24      | Yeah.                                                                                                |
| 53:25      | But I, I would love to see it. There's, there's certain things that are possible now where           |
| 53:28      | you can have local files and you can render it in a window, but man inline text or inline            |
| 53:34      | image support would be probably my first and foremost. Um, but there are other people for            |
| 53:41      | a long time that have wanted file provider support. So what that, what that means is                 |
| 53:48      | I just let me either use a common directory that I can save all my drafts to [[Dropbox]],                |
| 53:54      | iCloud, whatever, so that I can use [[Drafts]] on iOS and another app on my Mac or access                |
| 54:01      | it somehow, um, or use it in other automations somewhere else. That's probably the biggest           |
| 54:06      | one that I think a lot of people want open in place, right? Like those sorts of things               |
| 54:11      | with file provider support would be hugely beneficial, I think.                                      |
| 54:15      | Yeah. Well, it just gives people even more options. Um, and then [[Drafts]] becomes the tool             |
| 54:20      | that you lay on top of those text files.                                                             |
| 54:22      | Right. I think, I think that if, if I was a betting man, that one's coming before images.            |
| 54:28      | Yeah.                                                                                                |
| 54:29      | Images is one of those things that I, I don't know if he ever has plans to add that. It's            |
| 54:33      | a, it's a dream of mine, but I, you know, I can dream all I want. It doesn't mean I'm                |
| 54:37      | going to get it.                                                                                     |
| 54:38      | Well, it's just, um, it's also kind of opposite of the whole intention of the app. Simple,           |
| 54:45      | quick text capture and fast work on text, you know, um, you've seen people do it with                |
| 54:50      | like mark down, well, how like an asset folder that holds a group of assets that you can             |
| 54:55      | mark down a link into it, you know, but I don't know. I'm, I'm not hell bent on [[Drafts]]               |
| 55:00      | going that far down that, that road.                                                                 |
| 55:04      | Yeah. I think for me, in my own use cases, very selfishly, um, and open in place. So                 |
| 55:09      | if I, if I tap a document somewhere in files or [[Dropbox]] and I can open it inside of [[Drafts]]           |
| 55:17      | and have it be, you know, just very basic, I can only edit the text. I can't do anything             |
| 55:21      | else with it and then save it back to that place again. I, I think that's a feature that             |
| 55:26      | I personally would welcome because I prefer writing in [[Drafts]] over other apps. Um, I've              |
| 55:31      | used other apps, um, I'm trying to remember some of the ones that I use. Um, uh, I can't             |
| 55:38      | even remember the names of them. I, I like pretext, I think is the one that I use the                |
| 55:42      | most for that where I just need to edit a quick file. And [[Drafts]] doesn't have a way                  |
| 55:47      | to do that without importing the file. And then I have to figure out a way to save it                |
| 55:52      | out. Um, you know, cause a lot of times I'll need a header for a file name or whatever.              |
| 55:58      | So it's just, it's a, it would solve a problem for me that I have right now. And maybe that's        |
| 56:05      | something that'll come.                                                                              |
| 56:06      | Well, I want to talk about the way you resource your [[Drafts]] files, cause you use [[Drafts]] not          |
| 56:13      | only as a production tool, but as a storage tool, but we're going to wait, let's put a               |
| 56:17      | pin in that for right now. Before we close the door on automation, um, Rose, what have               |
| 56:23      | you done lately with [[Drafts]] and automation that's worth sharing? I know you're always                |
| 56:28      | cooking something up.                                                                                |
| 56:29      | It's definitely not ready to share yet. It's in a very, very, very rough and janky state,            |
| 56:36      | um, right now, because I'm trying to figure out how best to tackle this problem. But I               |
| 56:41      | am trying to create a new draft in this workspace action. And essentially the idea for that          |
| 56:49      | is somewhere you create a template draft, which has the same name as the workspace.                  |
| 56:55      | Um, so that should be relatively logical, I would hope. Um, and then, um, it takes                   |
| 57:00      | that, uh, and it takes the, the body of that draft and then it, it creates a new draft               |
| 57:05      | from that. Uh, but it has all the same tags as the current workspace, um, and so on. Um,             |
| 57:12      | and potentially even switches a theme. I've not quite figured out how to, to crack that              |
| 57:17      | nut yet. And of course, if, if agile torches does implement theme switching, then that's,            |
| 57:21      | I don't need to deal with that. Um, the difficulty I've been having is what if there isn't a         |
| 57:26      | theme or a template for that workspace? Um, because I, I would like to both have the                 |
| 57:34      | option of saying like, I'm just working, just let me create a new draft and boom, I'm done.          |
| 57:38      | Um, and also actually, you know what? I want to create a template for this, um, one, um,             |
| 57:44      | and things like that. Um, and potentially also handling orphan, uh, templates where you              |
| 57:49      | have templates that don't match a, um, uh, a theme, uh, or workspace. Sorry. I've got                |
| 57:54      | themes on the brain, it seems. Um, so that's, that's the nut that I am currently trying              |
| 57:58      | to crack. Um, the nuts that I've cracked considerably more recently that are actually,               |
| 58:03      | you know, ready for consumption, um, are, um, saving things into my, um, [[Obsidian]] notes              |
| 58:09      | folder in [[Dropbox]]. Sure. Um, including appending to lists. So I have a specific folder for           |
| 58:16      | lists. Um, and I have an action that will let me append to any file in that folder.                  |
| 58:22      | Um, which means that I can just write something. So say, for example, I write once upon a time,      |
| 58:27      | I can say append that to list TV shows to watch done. And then that draft disappears.                |
| 58:32      | It's gone to the trash because I filed it. Um, and then that, that is actually a list                |
| 58:37      | item in that list for me. So I can, I can get at that. And because it's in [[Dropbox]],                  |
| 58:42      | I can access it from a whole bunch of places, which makes it pretty easy.                            |
| 58:45      | I have solved or dealt with two similar problems lately. Um, like you, I also use [[Obsidian]]           |
| 58:51      | to store a lot of data and I write everything in [[Drafts]]. You know, I don't write that much           |
| 58:57      | in obsidian, at least initially. And, um, uh, because I'm using [[Obsidian\|Obsidian's]] end-to-end encryption      |
| 59:03      | model, I don't have a [[Dropbox]] resource to dump these, these files into and said, I've                |
| 59:08      | got it on my native drive on my Mac. So I made a special folder that's watched by our                |
| 59:14      | dear friend [[Hazel]]. And, um, I have, um, [[Drafts]] saved to that folder and then Mac, the Mac,           |
| 59:22      | you know, running [[Hazel]] will sort it. And if I put tags on it, it'll put it into different           |
| 59:27      | places in the base [[Obsidian]] library on my Mac. And then suddenly it, you know, it disperses          |
| 59:33      | to everywhere through [[Obsidian]] sync. But I had to, it was a, it was a different problem              |
| 59:38      | because I don't have cloud storage to work with when I'm working with [[Obsidian]] files.                |
| 59:42      | And, um, um, also because I don't use [[Drafts]] for long-term storage, I use it for the creation         |
| 59:49      | process. I have a lot of templated stuff I want to send to other places. I mean, uh,                 |
| 59:55      | so much of my life is similar, you know, in terms of things I'm taking notes on, maybe               |
| 01:00:00   | it's a call from a client or maybe it's a new idea for a YouTube video or a working                  |
| 01:00:05   | outline for automators. And so I have created just this treasure trove of templates and              |
| 01:00:11   | [[Drafts]] with text templates where it's automatically applying tags. And if you're listening to        |
| 01:00:16   | this, all you need to do to put a tag on a draft with a template is you say add a tag                |
| 01:00:23   | and you write the tag name and you put commas in, you can put as many as you want. And it            |
| 01:00:27   | adds those at the point of creation. And then those workspaces automatically indexed to              |
| 01:00:33   | those tags. So, um, I hope I'm not being too, uh, flippant about this, but I mean, it's              |
| 01:00:38   | just, it's not a very difficult process. But once you set it up, it's, it's super powerful.          |
| 01:00:44   | And I do everything with Markdown. So, you know, I've got this great Markdown syntax                 |
| 01:00:49   | highlighting with this new theme. And, and almost anything I do during the day, if somebody          |
| 01:00:54   | calls me, like I have one for a single member, California limited liability company. That's          |
| 01:01:00   | it's just like an, I'm just looking at that one's on my screen right now. So if you call             |
| 01:01:03   | me up and say, I need to make an LLC and I'm like, how many members, one member? Okay.               |
| 01:01:07   | I push one button in [[Drafts]]. All the questions I need to ask you just appear in [[Drafts]] and           |
| 01:01:12   | I fill it all out. And then I push this into [[Obsidian]] button and there it goes. You know,            |
| 01:01:18   | and I just, I just love [[Drafts]]. I don't know what we'll say.                                         |
| 01:01:22   | See, the, the interesting thing that it, you both use templates a lot. That's actually               |
| 01:01:27   | a feature of [[Drafts]] that I barely touch and I probably need to dive more into that myself.           |
| 01:01:33   | Like that's just something that I don't typically use, but I think I may have to start. Um,          |
| 01:01:38   | so it just goes to show you no matter how much you know about the app. I know people look            |
| 01:01:42   | to me like I know a lot about it. It, I don't know everything and I don't use everything.            |
| 01:01:47   | So it's, it's something that having, having people that do more, it educates me and helps            |
| 01:01:53   | me get along with new possibilities. It's going to be great.                                         |
| 01:01:56   | I also think it's, we use it in a different way. Like I use [[Drafts]]. It's just like it's              |
| 01:02:01   | in the dock. It's the app I open up every time I want to type something or write something.          |
| 01:02:05   | But it's not necessarily the place that the tech stays, you know, whereas you're using               |
| 01:02:11   | [[Drafts]] for much more, you're actually storing in there. But I think the fact that I send             |
| 01:02:15   | things out requires me to have different automations than you would need. And the fact that you      |
| 01:02:20   | keep it on [[Drafts]] means you have different automations that I wouldn't need.                         |
| 01:02:23   | Yep. Absolutely. And I think, you know, for me, a lot of, a lot of it, because your work             |
| 01:02:30   | can be done on a Mac, mine has to be done on a PC begrudgingly most of the day.                      |
| 01:02:35   | But, I mean, I can, I can still, I mean, I still use my iPad quite a deal for work.                  |
| 01:02:40   | And I'm able to tie into Gmail and the calendar and run meetings and everything off of it.           |
| 01:02:46   | It just, I have to work in a little bit of a different way because of the nature of the              |
| 01:02:49   | business. So it's, it's, yeah, there's definitely different automations. But I mean, it, maybe       |
| 01:02:55   | this, the templates are a way forward that I can do some fun things and automate some                |
| 01:03:01   | things like Rosemary was saying, right, like syntaxes, things of that nature. And even               |
| 01:03:05   | if I end up doing a task management system with [[Drafts]], which is something I've been                 |
| 01:03:11   | batting in more around in my head for a while, you know, and it kind of comes from a thought         |
| 01:03:16   | that I think Merlin Mann had for a while was like, Hey, I want Taskpaper and markdown               |
| 01:03:21   | to basically have a baby and come up with something awesome. And how do I do this? How               |
| 01:03:26   | do I, how do I make this a reality? And so I've been going through and, you know, in                 |
| 01:03:31   | the background, it's definitely not anywhere close to being a fleshed out thought of how             |
| 01:03:35   | am I going to create a task management system within [[Drafts]]? And once I do that, I'm going           |
| 01:03:39   | to need brand new templates. I will need brand new automations. And it's something I'm going         |
| 01:03:44   | to improve upon over time. It's going to be fun.                                                     |
| 01:03:47   | Tim, can I just say that you're deluding yourself? This is not hypothetical. You are                 |
| 01:03:52   | going to do it. Oh, I'm going to do it. It's a matter of time,                                       |
| 01:03:58   | which is you would think, you know, yeah, it's a when, right? You would think with,                  |
| 01:04:05   | you know, Hey, everybody's stuck inside because of COVID and all that other stuff. You would         |
| 01:04:09   | think that life is slowed down a little bit. It hasn't. So it's actually probably gone               |
| 01:04:16   | a little faster than I'd like it to. So the time element is really going to be the constraining      |
| 01:04:21   | factor. Time and knowledge, I think, uh, with, with regular expressions. That's something            |
| 01:04:27   | I lack the knowledge of and need to really improve.                                                  |
| 01:04:32   | This episode of Automators is brought to you by Sync Up, a OneDrive podcast. I love finding           |
| 01:04:36   | new podcasts to listen to. And it's great to just have some more audio to really enjoy               |
| 01:04:41   | as I go about my day to day tasks. If you're looking for a new show to listen to, Sync Up             |
| 01:04:46   | takes you behind the scenes of OneDrive so you can learn about how to connect files,                 |
| 01:04:50   | share your documents, and work from anywhere. And you'll get to hear about the design and            |
| 01:04:54   | development side of things too. Each show covers a dedicated topic, guest interviews,                |
| 01:05:00   | news and announcements, plus a special topic outside of their technology norm, such as               |
| 01:05:05   | favourite article of pandemic clothing. Topics include external sharing, data security, remote        |
| 01:05:12   | work, and of course, automation. I was recently going back through the back catalogue listening        |
| 01:05:18   | to some of the episodes and I was listening to the one about external sharing. And this              |
| 01:05:23   | is a problem that I've had to deal with a lot at work. Somebody trying to send a document            |
| 01:05:27   | to me, but they're not in my organisation or me trying to send something to them. And                |
| 01:05:32   | of course, they're not where I work either. It's really interesting to hear how Microsoft            |
| 01:05:37   | like you to tackle this problem. And of course, it's led me to make some other discoveries           |
| 01:05:43   | which have really helped my workflow and I've been able to share them with my colleagues             |
| 01:05:46   | too. Go and listen to it now. Just search for Sync Up wherever you get your podcasts.                 |
| 01:05:52   | That's S-Y-N-C-U-P. Or just click the link in the show notes. Go check it out. Our thanks            |
| 01:05:59   | to Sync Up and OneDrive for their support of this show and all of Relay FM.                          |
| 01:06:03   | Tim, we've been talking around the idea of storing all of your notes in [[Drafts]]. And                  |
| 01:06:10   | this wasn't really, I think, something Greg intended when he first made [[Drafts]]. I mean,              |
| 01:06:15   | [[Drafts]] was the place you went. You wrote text and you sent it out somewhere and something            |
| 01:06:18   | happened to it. But he unintentionally made this awesome note-tap that has all these storage         |
| 01:06:24   | abilities with workspaces and tags and all the features he's added. And I know you've                |
| 01:06:30   | kind of embraced this fully, right? So tell us, how is that working? What are some tips              |
| 01:06:36   | people might want to hear that they're going to think about doing this?                              |
| 01:06:40   | So one of the things that's, obviously, you know, you have workspaces. So the use of tags            |
| 01:06:45   | is pretty paramount. But in the [[Drafts]] window, you have basically three different groups             |
| 01:06:51   | that you can also utilise where it's the inbox, flagged and archived. And in a lot of my workspaces, |
| 01:06:56   | I will have the flagged element of that as something that, you know, when you flag a                 |
| 01:07:01   | draft, it doesn't show up in the inbox. It only shows up in flagged. So that way, it's               |
| 01:07:06   | kind of out of sight, out of mind on a regular basis from my regular list. And what I use            |
| 01:07:13   | something like that for is I will keep a lot of my lists. So Rose, you mentioned earlier             |
| 01:07:18   | that you have your movie lists saved to [[Dropbox]] so you can have that in [[Obsidian]] later. For          |
| 01:07:24   | me, I just keep that in [[Drafts]]. And there's an append to list action that's in the directory.        |
| 01:07:31   | And I just use that. And all of my lists are actually in my normal general workspace is              |
| 01:07:38   | what I call it. But it's in the flagged portion of it, and it's tagged list. So I can actually       |
| 01:07:44   | just switch to a different workspace and use it as a list app within within [[Drafts]]. And              |
| 01:07:52   | so for me, it's it's using the flagged and archived in addition to tags that can really              |
| 01:07:59   | kind of help with some of that. I'll call it file storage that allow me to work in that              |
| 01:08:05   | way. So I'll use an example for me for work. For work, I use three different [[Drafts]] that             |
| 01:08:13   | one of them is work tasks, work wiki, and then work accomplishments. So I will have those            |
| 01:08:20   | three [[Drafts]] in my inbox. And that's really it. Everything else, everything that I reference         |
| 01:08:28   | in my my work wiki, which holds a lot of the wiki style linking to the other [[Drafts]] that             |
| 01:08:35   | I need, all of those are are tagged work. And they're flagged so they don't show up                  |
| 01:08:40   | in the inbox. But they're all there if I need to jump into them. So it just simplifies the           |
| 01:08:47   | view for for work. And so I will jump into work tasks. And I have a little a little syntax           |
| 01:08:53   | that I use. And again, this is all custom to me. And unfortunately, with the programs                |
| 01:08:57   | that I'm working on, I can't share it. So I apologise. But it's it's one of those things             |
| 01:09:04   | that I can jump into the different programs that I'm working on, I can jump to different             |
| 01:09:08   | parts of the program. And I have a lot of that done in the wiki style linking so I can               |
| 01:09:12   | just jump around from, you know, draft to draft to draft, just easily with a tap of                  |
| 01:09:19   | a button and I'm there. So that's kind of how I've been using the storage portion of                 |
| 01:09:25   | it is is really relying on tagging for workspaces, and then flagging or archiving [[Drafts]] and         |
| 01:09:31   | then searching, you know, either having searches or, you know, just using the the quick search       |
| 01:09:37   | feature, which is I think it's shift command F, so that that way you can pull up that search         |
| 01:09:44   | window and you can really kind of dive down and see which draft you need to get to. So               |
| 01:09:50   | that's that's how I've been using it. And how I think my [[Drafts]] list does not balloon                |
| 01:09:54   | up to a massive amount. I actually have no idea how many [[Drafts]] I have. I've never sat               |
| 01:10:00   | down and figured it out. But there's a lot of them. And so I just keep I keep a lot of               |
| 01:10:06   | stuff there because I don't really have another place to send it. My wife and I share a lot          |
| 01:10:12   | of notes, but those are within notes. I don't really use another app, because, you know,             |
| 01:10:18   | getting a significant other to use the app of your choice is really difficult sometimes.             |
| 01:10:24   | But she's she's decided to use the built in notes app. She she and I work really well                |
| 01:10:29   | with that. So I will take that any day of the week. So I at least have that hurdle crossed.          |
| 01:10:36   | And so I with those are the really the two places for me is if it doesn't fit within                 |
| 01:10:41   | [[Drafts]], because it needs an image or or I need to share it with my wife, then I use                  |
| 01:10:48   | that in notes. That's it. So that's kind of how things have fleshed out for me. I think              |
| 01:10:54   | one of the really cool features for someone like you is the [[Drafts]] widget where you can              |
| 01:10:58   | attach workspaces to a button. So you can have like an eight grid, you know, two by                  |
| 01:11:04   | four grid with a small, I think isn't that the small widget? That's not even the big                 |
| 01:11:08   | one where you can just have buttons to jump to specific workspaces. Like I the stuff                 |
| 01:11:14   | I do keep in [[Drafts]], I've got attached to workspaces. Like I use it for a draft, you                 |
| 01:11:19   | know, copy that I'm going to write for the blog or something. And I can just push one                |
| 01:11:22   | button and get right to it for my home screen. I love that.                                          |
| 01:11:25   | Yeah. And that came out in [[Drafts]] 22. It's been out for a while. But when widgets came               |
| 01:11:30   | out in iOS 14, that was one of those things that I it felt weird. But [[Drafts]] isn't in                |
| 01:11:37   | my dock on my iPhone at all. I don't I don't have that in there. I used to all the time              |
| 01:11:44   | is at the centre, but I don't anymore because I use the widgets and I can I've actually              |
| 01:11:49   | even at times I've I'm like, oh, I need to switch to my journal real quick. And I just               |
| 01:11:55   | instinctively on my on my 11 I'll swipe up from the bottom and go to home and then I'll              |
| 01:12:00   | tap the journal widget because it's just that's the way I've been doing it for a little while.       |
| 01:12:07   | And it's faster for me to jump and switch different contexts that way. Yeah, makes it                |
| 01:12:11   | me it actually makes me feel now with the theme switching. It actually makes me feel                 |
| 01:12:15   | like I'm jumping into a separate app, which is kind of fun. Yeah. But yeah, the widgets              |
| 01:12:21   | are are awesome. And I love what he's done with them. My only gripe and it's not even                |
| 01:12:28   | something that he's done is I wish there was a small four by four widget because the only            |
| 01:12:34   | way you can get the grid is in the medium or large. Yeah, I just wish there was one                  |
| 01:12:38   | that had four by four because I would use that in a whole lot more places. Yeah, so                  |
| 01:12:42   | yeah. And also, this is an obvious one that would benefit from an interactive widget. It             |
| 01:12:47   | would be cool if you could have a display draft and have it interact. And that's just                |
| 01:12:51   | something [[Apple]] hasn't got to yet. I would be surprised if we don't get that at [[WWDC]]                 |
| 01:12:56   | this year. I think everybody knows. Oh, that's a feature. Yeah. Yeah, even even for their            |
| 01:13:01   | own apps, reminders, you can't check those off anymore. That's something that I just                 |
| 01:13:06   | can't believe they ship that without thinking of the usability of it. And people I'm sure            |
| 01:13:11   | people want things like that for sure. I mean, I'm just imagining an iPad full of widgets,           |
| 01:13:18   | you know, and [[Drafts]] being a big piece of that. And just like that would be that would               |
| 01:13:23   | be great. Yeah. Oh, be fantastic. And I mean, I even the interactive part, I created an              |
| 01:13:30   | action that I just called it fancy tweet because it just used the HTML previews. But I would         |
| 01:13:35   | love to be able to kick off an action. And even if it was just [[Drafts]] native UI, be able             |
| 01:13:40   | to compose a tweet and then send it and not even actually go into the app. It's just all             |
| 01:13:45   | done in the widget. I mean, I just it's it's something that I hope gets extended to other            |
| 01:13:51   | apps in iOS 15. It just it needs to be there. I think that's going to elevate the the way            |
| 01:13:58   | widgets work. If they can make that a reality for not only [[Drafts]], but others too.                   |
| 01:14:05   | Rose, how are you storing notes in [[Drafts]]? I mean, are you doing a lot of onboard storage            |
| 01:14:11   | in [[Drafts]]?                                                                                           |
| 01:14:12   | I pretty much just chuck it in a tag. And if it's not tagged, then it's in my inbox.                 |
| 01:14:18   | So I have a custom workspace called inbox, which is just looking for things that aren't              |
| 01:14:22   | tagged, which, you know, it's very simple. But it absolutely works for me. And, you know,            |
| 01:14:30   | and I'm just trying to, you know, go through and process the I don't even know how many              |
| 01:14:35   | items are in said inbox. Well, okay, let's just say that it's a four digit number right              |
| 01:14:42   | now, because I have a lot of automations which create [[Drafts]], and I've not yet updated all           |
| 01:14:46   | of them to actually have tags, which is a problem. But the good news is they all use                 |
| 01:14:52   | the same templates. So I can go through and find anything that's fault matching a particular         |
| 01:14:58   | regular expression. I'm guessing I might spend more time creating some regular expression            |
| 01:15:02   | than I will actually, you know, manually going through and looking at everything. But, you           |
| 01:15:08   | know, there's some fun. And I have to say I've had a long weekend. It's been a long weekend          |
| 01:15:12   | here in the UK. I may or may not have eaten a large number of chocolate Easter eggs and              |
| 01:15:18   | or bunnies. And I refuse to comment any further on that. So I've definitely just been adding         |
| 01:15:23   | things to my inbox and not purchasing anything because, you know, what a long weekend's for.         |
| 01:15:28   | Yeah, I get there sometimes too. And it's like for me that a big [[Drafts]] inbox means that             |
| 01:15:33   | I need to do some processing. I do use the flag. A flag to me means it's waiting for                 |
| 01:15:40   | something. Because like I said earlier, my [[Drafts]] don't really stay in [[Drafts]]. So I send             |
| 01:15:45   | them somewhere. But if I have like something I've written, I want to get feedback from               |
| 01:15:49   | someone on and I still want to have, you know, it's like once I leave [[Drafts]], whatever editor        |
| 01:15:56   | I go into isn't as good. You know, it's just the truth, you know, I mean, I don't have               |
| 01:16:00   | the ability to rearrange things and, you know, all the little features that we talk about.           |
| 01:16:05   | So if I'm waiting on something where I think I may want to do some more editing, I just              |
| 01:16:09   | flag it. And then that that's like a checklist for me to go through the flag list to say,            |
| 01:16:13   | oh, I'd never heard back from Rose on this bit of text or whatever. But I ideally like               |
| 01:16:18   | to try and get it out. But you know, that's the nice thing about the app. You can use                |
| 01:16:22   | it in a lot of different ways. I know some people that use it for work. And they use                 |
| 01:16:28   | they use a work workspace and anything that's in their inbox is is something that they need          |
| 01:16:33   | to just kind of keep tabs on, right, just kind of the day to day, anything flagged is something      |
| 01:16:40   | that they need to take action on. And then archived is something that they are waiting               |
| 01:16:44   | on information for. And so they can switch between the tabs at the top just to say, All              |
| 01:16:50   | right, what do I need to do? Right. So who's who's waiting on me? Who am I waiting on?               |
| 01:16:55   | And they can follow up based on that. The biggest thing with [[Drafts]] is that you can                  |
| 01:17:01   | really make it what you want it to be. And there's what works for one person isn't going             |
| 01:17:06   | to work for the next. But the fact that you can customise this and make it your app that             |
| 01:17:11   | it's just it's gone from a text editor and a scratch pad that you use to something that              |
| 01:17:15   | is is really what do you want to make with it? You can go and do that now. It's it's                 |
| 01:17:20   | really powerful and well worth the price of admission, for sure.                                     |
| 01:17:25   | I remember I was in trial in Los Angeles when they released the first version of the app             |
| 01:17:30   | and I downloaded it and I immediately got it. You know, I mean, it's just like, oh, this             |
| 01:17:35   | is obvious. How come nobody made this before? And and to this day, just the ability to open          |
| 01:17:40   | it up, press the microphone and start talking. I write so much text that way. And but but            |
| 01:17:48   | you forget that the other version 26, they've added so many features. What are some of the           |
| 01:17:52   | other little features that you use every day, Tim, that listeners may not be aware of?               |
| 01:17:58   | So so one that they just actually added in in 26 is that. Oh, man, I'm trying to remember            |
| 01:18:04   | what it's called. It basically you type it balance typing balance, white typing, I think             |
| 01:18:09   | is the name of it, where it automatically inserts the brackets on either side.                       |
| 01:18:12   | Yeah, so it's it's brackets, parentheses, quotes, and I'm missing one other. But it                  |
| 01:18:18   | that actually is something that it's like it. The usability functionality of that is                 |
| 01:18:24   | just something like, wow, why did why didn't this have this before? Well, I'm glad it has            |
| 01:18:29   | it now, right? It's something that I didn't know I really needed. That's something that              |
| 01:18:36   | just a little appreciative one, for sure, recently that I can bring to mind, I should                |
| 01:18:42   | pull up. And Jim, you can cut this, I'm going to pull up the change log because I forget              |
| 01:18:49   | how many things have been added over time. And I, you know, it's been a while since                  |
| 01:18:55   | I've been on the show. So I mean, really, truly, I don't even remember half of the stuff             |
| 01:18:59   | that's come out in the last year, because it really is one of those things that I just               |
| 01:19:04   | I can't keep all that stuff in my brain. Yeah, it's braces is the other one that you're              |
| 01:19:09   | you're looking for, because there's parentheses, which are the round bracket, there's brackets,      |
| 01:19:12   | the square bracket braces, which are the curly ones, and then quotes, and those are the ones         |
| 01:19:16   | that are balanced. And this is one of the the editor preferences. And I'm going to link              |
| 01:19:22   | people to the editor preferences documentation on the [[Drafts]] website, so that they can find          |
| 01:19:26   | out about that and toggle that on or off if they want to.                                            |
| 01:19:30   | So Tim, in addition to all the automation stuff you do in [[Drafts]], you're you are a primary           |
| 01:19:37   | iOS user. And yep, but you still like to automate when what are you up to and like shortcuts         |
| 01:19:43   | and other automation platforms these days? So actually, there's a couple of things I've              |
| 01:19:47   | been doing lately. So actually, in this COVID time, just before our lock down happened, my            |
| 01:19:55   | girlfriend moved in. And then, you know, several months later, I proposed to her. And she said,      |
| 01:20:02   | yes, which is great for me. And and I'm glad she puts up with me. And then we decided actually,      |
| 01:20:12   | we didn't want to wait until 2022 to have our big wedding when we can actually celebrate             |
| 01:20:16   | with people after some restrictions are lifted and everything. She's Canadian, so I have             |
| 01:20:21   | to crossed, you know, the border and I can't do that right now, even just to get married.            |
| 01:20:27   | So there were some difficulty there. So we ended up getting married in March. And so                 |
| 01:20:34   | for a little while, we, we had shortcuts on our home screens that we could tap. And one              |
| 01:20:43   | of them says, when is my wedding? And one of them said, when is the ceremony? And so                 |
| 01:20:47   | I would tap that. And in the compact UI, it would give me just a counter to when the                 |
| 01:20:52   | ceremony was taking place. Cool. I like that. The funny, it was, it's just something cute.           |
| 01:20:57   | And it was a, it was a picture of the two of us on the home screen. And the funny thing              |
| 01:21:04   | is, you know, my, my now wife, I almost said fiance, but my, my wife, you know, she's,               |
| 01:21:10   | she's fairly nerdy too. She does not play around with this kind of stuff ever. But when              |
| 01:21:16   | I showed it to her and said, I have this cool idea, just give me your phone for a second,            |
| 01:21:20   | just trust that I'm going to do this. And, you know, you'll like the result. She absolutely          |
| 01:21:25   | loved it. Like, you know, the hug that I got just for doing that is worth it alone.                  |
| 01:21:30   | So, so that's kind of something that just a little tiny thing like that where you need               |
| 01:21:35   | to keep track of a date and you can do that with a special icon on your home screen. That,           |
| 01:21:40   | that's a, that's just a little tiny automation, but it's something that I've done.                   |
| 01:21:44   | Yeah. And it's a really easy, it's a calendar action, you know, and just really nice, easy           |
| 01:21:50   | shortcut to put together any, but it could do it and, and useful. And I was just thinking,           |
| 01:21:55   | where could you run with that? Maybe you could send the, send it to a HomePod to have it            |
| 01:22:00   | speak it. When you push the button, that'd be kind of fun.                                           |
| 01:22:02   | Yep. You could do that. There was even, I thought about it as like, you know, if I                   |
| 01:22:08   | wanted to, I could, you know, set this to the bridesmaids and groomsmen, right? I could,             |
| 01:22:13   | I could have a little thing every time I run it, send them an email.                                 |
| 01:22:16   | Yeah. Just remind them.                                                                              |
| 01:22:17   | They'd love you for that. So you check it 40 times a day and then suddenly your best                 |
| 01:22:23   | man is, is, is also the one who's potentially out for your blood. But either way, congratulations    |
| 01:22:29   | are most definitely in order for that. Thank you. Thank you. I have three, I know of three           |
| 01:22:34   | COVID babies, but the Tim is my first COVID, COVID groom.                                            |
| 01:22:40   | There we go. Fantastic. Yeah. Yeah. No COVID babies right now. Yeah. That's, that's, that's          |
| 01:22:46   | a different, you know, thing that'll happen later on. That'll take more of my time.                  |
| 01:22:52   | Friend of mine just had a COVID baby. I told her, you should just name her Fauci. She didn't,        |
| 01:22:58   | she didn't appreciate that at all. Not one bit.                                                      |
| 01:23:00   | No. There, there have been an uptick of baby names of Corona.                                        |
| 01:23:05   | Oh my gosh. I don't know about that. Yeah.                                                           |
| 01:23:08   | Yeah. Yep. Nope. Nope. Those are, those are not nice parents. I'm going to go on record              |
| 01:23:13   | of saying those are not nice parents. Well, I mean, I'm not sure if it's better or worse             |
| 01:23:17   | than Grogu, which apparently is becoming more and more popular for people not familiar.              |
| 01:23:22   | That is the name of the baby Yoda in the Mandalorian series.                                         |
| 01:23:25   | People are actually naming their kids Grogu.                                                         |
| 01:23:28   | It was a thing, I don't know if it was a joke article that I read the other day or if it             |
| 01:23:33   | was actually serious. It was on one of those, one of those things that it could have gone            |
| 01:23:36   | either way. I just decided to assume that some parents are making interesting choices.               |
| 01:23:41   | Yeah. I don't think anybody loves Star Wars more than me and I would not name, I wouldn't            |
| 01:23:46   | name my dog Grogu. I don't mind anyway.                                                              |
| 01:23:48   | Well, your dog is entirely too cute and cuddly for that as well, I think so.                         |
| 01:23:53   | Yeah. I'd sooner name a dog baby Yoda than Grogu. That's just my feeling on the matter.              |
| 01:24:00   | So in addition to that, one of the other things I've been actually getting into being that           |
| 01:24:04   | I'm very mobile OS focused and obviously iOS, I've been using my phone as a camera. So I             |
| 01:24:13   | actually got a bunch of moment here for Christmas this past year.                                    |
| 01:24:18   | And the nice thing about that is there's a lot of different lens options. So I actually              |
| 01:24:24   | use an anamorphic lens quite a bit to take kind of more of a cinematic photo or a cinematic          |
| 01:24:29   | video. I actually recorded our wedding using that lens.                                              |
| 01:24:33   | The interesting thing is that when you save a raw photo, those are squeezed photos. So               |
| 01:24:39   | it still puts it in the same format width wise as a regular photo that iOS would take.               |
| 01:24:46   | So I came up with an automation there to de-squeeze the photo, because you just have to do some      |
| 01:24:50   | math and fix it.                                                                                     |
| 01:24:53   | Because generally you'd have to open the moment app to actually see the anamorphic photo             |
| 01:24:56   | properly. Yeah. So I can use the iOS app if I need to take a quick picture and the lens              |
| 01:25:04   | is attached. So I can do that and still de-squeeze the photo. I can use the moment app as well.      |
| 01:25:10   | But I figured out a way now to take a photo and change it and modify it via shortcuts.               |
| 01:25:16   | Just to take a photo and do that. Simple automation that I've been running to create what I need.    |
| 01:25:23   | It's been great.                                                                                     |
| 01:25:24   | We had a couple of friends over for like the first time in a year, I think, you know, recently       |
| 01:25:30   | and we were in the backyard and we wanted to take a group photo and I set the camera                 |
| 01:25:34   | on a tripod and then use the [[Apple Watch]] camera app. This is kind of an automation. Maybe            |
| 01:25:40   | you don't know, but if you've got an [[Apple Watch]], it gives you a preview of what the                 |
| 01:25:43   | phone sees and then you can press a button on the watch and it counts down three seconds             |
| 01:25:47   | and takes a picture. And everybody was very impressed with me that I had that ability.               |
| 01:25:54   | And it's something that everybody owns an [[Apple Watch]] and an iPhone can do.                          |
| 01:25:57   | Yeah, I highly recommend that. I've used that several times just to make sure because it's           |
| 01:26:03   | easier than setting something up on a timer with a countdown and then running to get into            |
| 01:26:08   | position. You can actually be in position and make sure that you are in the shot because             |
| 01:26:13   | usually from experience, the person who does the running around to get the photo ends up             |
| 01:26:18   | being on the end and then they get kind of half cut out of the shot. And this way you                |
| 01:26:21   | can make sure that everybody's in the photo and stuff like that. And if there are small              |
| 01:26:25   | children or pets involved, then you can make sure that you can actually see what they're             |
| 01:26:30   | doing as well because you're seeing through your phone camera, which is great. So I definitely       |
| 01:26:35   | recommend that.                                                                                      |
| 01:26:36   | I have a whole host of shortcuts related to photos. I've got a whole directory of them.              |
| 01:26:42   | But that is one of the nice things about shortcuts is that it is so integrated with the camera       |
| 01:26:49   | that you can do stuff like Tim's adjusting photo size. I've got a similar one that knocks            |
| 01:26:55   | a photo down so I can post it to the Mac Power users or the automators forums without                |
| 01:26:59   | it being a gigantic photo with just a quick shortcut. Kind of does the same thing, but               |
| 01:27:04   | not really.                                                                                          |
| 01:27:05   | Yeah, but it's very useful. That sort of thing.                                                      |
| 01:27:09   | Absolutely. And I mean, beyond that, the actual place that I'm using shortcuts, and I actually       |
| 01:27:14   | use this on a daily basis is as a launcher. So you can use the widgets, but I'm a person             |
| 01:27:20   | that has gone widgets only for the home screen. And my doc is now three icons that are just          |
| 01:27:27   | some orders at the new neuomorphic icons that we're seeing. But those just those just kick           |
| 01:27:34   | off a menu action so I can open up various apps. So I have a little bit more absent my               |
| 01:27:38   | fingertips. And I don't have any badges on my home screen. I'm a person that when I see              |
| 01:27:43   | a badge, I need to check it. So if I don't see a badge, I don't have to check it, which              |
| 01:27:47   | is great. I can just deal with that later and I have to swipe over to the app library                |
| 01:27:51   | to get anything. So that's how I've been using that as of late. Just and it's just three             |
| 01:27:57   | simple menu actions, right? It's a menu action and it opens the app. I'm not doing anything          |
| 01:28:03   | other than that.                                                                                     |
| 01:28:04   | Yeah, but it's three separate launchers.                                                             |
| 01:28:07   | Yeah. That is an increasingly popular way to run an iPhone. And I'm with you. I don't                |
| 01:28:14   | like all the apps on my screen anymore.                                                              |
| 01:28:16   | Yeah. And I a while ago, I used an app called clear spaces. I still use that today where             |
| 01:28:22   | all of my widgets kind of pop out of the home screen. And then when I don't need them anymore,       |
| 01:28:27   | I swipe away. And it's just a blank screen again. So it's actually something that I really           |
| 01:28:33   | like because it's, do I need something? Okay, I know where that is. And on my home screen,           |
| 01:28:37   | I could swipe down, take a look at it, swipe back up, and then it's just a blank screen              |
| 01:28:42   | again. I've been using that quite a bit and I really like that.                                      |
| 01:28:45   | I have never heard of this app. I'll have to check that out.                                         |
| 01:28:49   | I actually have a post that we can link that kind of where I explain it. And it's a kind             |
| 01:28:55   | of a cool effect. At first, it was kind of like, oh, look at the neat thing you can do.              |
| 01:28:59   | And it basically just isn't, it's a, it's a widget that you can add to your home screen              |
| 01:29:04   | that then just blends with the background. And at first, it was kind of like, here's                 |
| 01:29:09   | this really cool hidden widget trick, right? And then I started really using it. And so              |
| 01:29:16   | like when I'm done with my tasks for the day, I don't need to see the reminder widget anymore.       |
| 01:29:22   | So I just swipe that away and it's gone. So I know that that area of my life is done.                |
| 01:29:27   | When I'm done, you know, tracking food for the day, I swipe that when I'm done with all              |
| 01:29:31   | my calendar events, I swipe that away. And, you know, so that way I'm minimising what                |
| 01:29:37   | I see on my home screen to be just really targeted and focused. And so I've been using               |
| 01:29:41   | it in that way for a while.                                                                          |
| 01:29:43   | And when you said earlier that you, that you just swipe up to get to your, to get to your            |
| 01:29:50   | [[Drafts]], I wasn't sure what you were talking about. I think that must be what it was.                 |
| 01:29:54   | Yeah. So, so what I will do it like, I guess was saying for [[Drafts]], when I'm in [[Drafts]]               |
| 01:30:01   | even, and I'm like, Oh, I got to switch to the journal. Sometimes I'll just instinctively            |
| 01:30:06   | swipe up on the home screen. It takes me to the home screen. I also have the triple back             |
| 01:30:11   | tap for that as well. So I'll just pop into the home screen and then I'll tap on the journal         |
| 01:30:18   | icon for in my [[Drafts]] widget. And it'll just pop me back into [[Drafts]], but in the journal             |
| 01:30:25   | workspace with everything applied. So that's been really good. That's kind of how I use              |
| 01:30:31   | that. And then when I don't need to see [[Drafts]] for the rest of the day, if I'm kind of done,         |
| 01:30:37   | I'm laying in bed, I'll swipe that widget away, it disappears. And I don't have to worry             |
| 01:30:41   | about it anymore. And I don't think of it. I can just kind of wind down and get ready                |
| 01:30:45   | for bed.                                                                                             |
| 01:30:46   | So this works on you taking a screenshot of your blank home screen as the underlying                 |
| 01:30:51   | effect, right?                                                                                       |
| 01:30:53   | Yeah.                                                                                                |
| 01:30:54   | Clever.                                                                                              |
| 01:30:55   | Clever.                                                                                              |
| 01:30:56   | It's really clever. And I mean, I remember being on the beta for it. And, you know, they             |
| 01:31:01   | weren't even sure it was going to get approved. Because one of the things that I really like         |
| 01:31:05   | about these kind of widgets is that it doesn't have the name underneath it. You know, I've           |
| 01:31:12   | always wanted to have a home screen that was free and clear of the words. I just wanted              |
| 01:31:16   | that to be an accessibility feature for forever. That way it's a little bit more visually clear.     |
| 01:31:21   | I know what apps I have put places. Don't remind me what they are. And so for me, for                |
| 01:31:28   | widgets, I didn't want to see that when I swipe away. I don't want to have like, you                 |
| 01:31:32   | know, no offense to David Smith or anything. It's just like, I don't want to see the word            |
| 01:31:35   | widget Smith on my home screen five times. I just want to see nothing. I just want the               |
| 01:31:40   | picture that I have behind it. And so this is an app that allows that. I just didn't                 |
| 01:31:44   | think that [[Apple]] was originally going to approve it. So hopefully they're not going to take          |
| 01:31:48   | that away. You know, [[Apple]] is [[Apple]]. So sometimes they do that. But hopefully, hopefully it's        |
| 01:31:55   | something that stays, but I've been using it that way for a while.                                   |
| 01:31:57   | Well, gang, if you're interested, you should probably download it soon.                              |
| 01:32:01   | Yeah. Yeah. Yeah, definitely. Well, those things to grab while it's there. Because,                  |
| 01:32:07   | you know, even if you think right now that you don't want it, then, you know, if you                 |
| 01:32:10   | do in six weeks, and it turns out it's temporarily not there for whatever reason, we know [[Apple]]      |
| 01:32:15   | do these things from time to time, then, yeah, then you can get it back.                             |
| 01:32:20   | So the only thing that makes me kind of, I guess, think that they're going to allow it               |
| 01:32:26   | is that other apps have popped up that offer the same functionality. And so those are all            |
| 01:32:31   | approved as well. Again, not a guarantee, but it's likely that maybe that feature can                |
| 01:32:37   | stay.                                                                                                |
| 01:32:38   | Well, I'll cross my fingers. I do have this app. And yeah, it's, it's quite handy. I've              |
| 01:32:44   | been experimenting with it a little bit. And I now I've heard you talking about how it works         |
| 01:32:49   | because obviously, you know, I've read your post before, but now I've heard you talking              |
| 01:32:54   | about it. I'm going to give it another shot in the same way that you're doing it.                    |
| 01:32:57   | I've actually expanded. I'm so into the widgets. Now I have like three screens of widgets.           |
| 01:33:02   | I used to have just one.                                                                             |
| 01:33:03   | Whoa.                                                                                                |
| 01:33:04   | Yeah.                                                                                                |
| 01:33:05   | And like, like,                                                                                      |
| 01:33:06   | So what are you running?                                                                             |
| 01:33:08   | Well, I'm not running clear spaces. You see them and you see the ugly labels, but, um,               |
| 01:33:14   | you know, just they're all kind of contextual. My main screen is the big, fantastic Al with          |
| 01:33:19   | a list of my events for the day and the, the, the medium widget with the four shortcuts              |
| 01:33:25   | launchers, you know, but I do like launchers with shortcuts like you, but I do it out of             |
| 01:33:29   | a widget.                                                                                            |
| 01:33:30   | I just really liked the interface elements of the widget. I feel like it's, it's the                 |
| 01:33:34   | way shortcuts really need to be run. And then I've got a screen with, um, that's like                |
| 01:33:40   | kind of like task management. It's got OmniFocus and streaks. And then I've got a time              |
| 01:33:45   | tracking page and then a little bit of a, you know, mix of things at the end. And then               |
| 01:33:52   | I get to the app, the app library. And so, and it works fine for me. I mean, I, and then             |
| 01:33:57   | if also the, what is it, what do these call the debut? I've got like, um, timely things              |
| 01:34:02   | like weather, time, world, I can see what time it is where Rose lives, you know, stuff               |
| 01:34:06   | like that.                                                                                           |
| 01:34:07   | And I think that's, I mean, it's one of those things and tying it back to what we were just          |
| 01:34:12   | talking about in the beginning of the show with [[Drafts]] and, and making it your own.                  |
| 01:34:16   | I just, I like that, you know, there's a lot of functionality that we have today in a lot            |
| 01:34:22   | of what we use, Mac, iOS, whatever. And specifically with iOS and the iPhone, how much we use that   |
| 01:34:29   | and it's so, such a personal device now. Now we have so many options to make it your own.            |
| 01:34:34   | I really like the way this is headed. And I feel that it's being done in a, in the right             |
| 01:34:39   | way. I think there's some features that are missing, but I think, I think as we go on                |
| 01:34:44   | in iOS 15, hopefully just iOS 15, but likely iOS 16, that we're going to see a lot more              |
| 01:34:50   | of this customisation happen. And I think that's going to be really cool.                            |
| 01:34:53   | I was just talking to an app developer friend on the phone the other day about this very             |
| 01:34:57   | thing. I think that the next, like the undiscovered country of the iOS apps is the user interface    |
| 01:35:05   | customisability, like us being able to make it work the way we want it to look like is               |
| 01:35:13   | the next thing that app developers need to run to. And [[Drafts]] is kind of already there               |
| 01:35:18   | with what they've just recently done. Carrot Weather has done some stuff like that too. But I do       |
| 01:35:24   | think that's like where we want to go.                                                               |
| 01:35:27   | Oh, and those are probably my two favourite examples for customisation, right? Just Carrot Weather      |
| 01:35:32   | knocks it out of the park always, every time. It just seems that he can't really do much             |
| 01:35:39   | wrong when he comes to developing apps, which is fantastic. Complaints about being cussed            |
| 01:35:46   | out or treated like a meatbag outside. But for him, it's a great example of how can you              |
| 01:35:53   | make this work for you instead of you just living with the interface. How can you make               |
| 01:35:58   | it work for you and make it better to suit your needs? That is the next frontier, I think,           |
| 01:36:03   | for all of us.                                                                                       |
| 01:36:04   | Yeah, I would agree with that. And for people who haven't checked out Karat 5 and the customisation  |
| 01:36:11   | options in it, it's pretty cool. You can design your own interface so that you have                  |
| 01:36:16   | all the weather that you like. And I've definitely been playing around with that quite a bit.        |
| 01:36:21   | All right, Tim. Well, for folks listening, Tim is the master of all things [[Drafts]], the               |
| 01:36:28   | future developer of the [[Drafts]] task management workflow. Tim, where do people go to find             |
| 01:36:38   | you?                                                                                                 |
| 01:36:39   | Well, I'm on Twitter at Nahumck, my last name, N-A-H-U-M-C-K. And you can go to Nahumck.me           |
| 01:36:50   | to find where I write. And that's pretty much where you can find me nowadays.                        |
| 01:36:55   | Now, we sure appreciate you sharing all this with us, Tim, and the great stuff you're doing          |
| 01:37:00   | and keep it up, man. So we had you at [[Drafts]] version 5 and version 26. So I guess we'll              |
| 01:37:07   | see you around version 50. I don't know.                                                             |
| 01:37:09   | Yeah, sounds good to me.                                                                             |
| 01:37:11   | Okay. If you like this show, there's a good chance you're like parallel. Hosted by journalists       |
| 01:37:16   | and accessibility expert Shelly Brisbane, parallel is a tech podcast with accessibility              |
| 01:37:21   | sprinkles. Shelly and her guests put accessibility into a larger context on parallel. Sometimes      |
| 01:37:27   | it's about devices and software. Sometimes it's about living in a world that's powered               |
| 01:37:31   | by more tech every day. Accessibility is the icing on the cake. Go check it out at relay.fm          |
| 01:37:38   | slash parallel. We are the Automators podcast. You can find us at relay.fm/automators.         |
| 01:37:45   | Our website is automators.fm and you can find our forum at talk.automators.fm. There are             |
| 01:37:52   | some super smart automators in there and so many problems getting solved. Just the other             |
| 01:37:56   | day I Googled a problem and found the answer on our forums. Thank you to our sponsors,               |
| 01:38:02   | PDF pin from smile, Microsoft lists and sync up a one drive podcast. We released this show           |
| 01:38:08   | on Friday for a good reason. So you can have a little automation project over the weekend.           |
| 01:38:13   | Jordan gave us some great ideas this week. So why not automate [[Drafts]] this weekend? Either           |
| 01:38:18   | way, thanks for listening and we'll be back in a few weeks.                                          |
