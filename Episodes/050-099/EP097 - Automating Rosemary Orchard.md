---
status: "incomplete"
fc-date:
  year: 2022
  month: 03
  day: 11
fc-category: "podcast"
podcast: "Automators"
published: 2022-03-11
duration: 6192
formattedduration: "01:43:12"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/97"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators097.mp3"
episode: 97
title: "97: Automating Rosemary Orchard"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David asks all the questions and we get into the nitty gritty details of how Rosemary's workflows and systems are being automated. From Hazel to Home Assistant, with a sprinkling of Airtable, there's variety and magic.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 097 Discussion](https://talk.automators.fm/t/97-automating-rosemary-orchard/13443)

# Sponsors
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.
- [[Hover (Sponsor)|Hover]] - Make a name for yourself.

# Show Notes
- [Relay FM Membership](https://www.relay.fm/membership)
- [Hazel – Noodlesoft – Simply Useful Software](https://www.noodlesoft.com/)
- [DEVONtechnologies | DEVONthink, professional document and information management for the Mac and iOS](https://www.devontechnologies.com/apps/devonthink)
- [RosemaryOrchard/systemConfigs](https://github.com/RosemaryOrchard/systemConfigs/blob/main/README.md) - ZSH, [[Git]] configs, etc.
- [Bunch.app](https://bunchapp.co/)
- [Snippets - Bunch.app](https://bunchapp.co/docs/bunch-files/snippets/)
- [Moom · Many Tricks](https://manytricks.com/moom/)
- [Home Assistant](https://www.home-assistant.io/)
- [Generic Thermostat - Home Assistant](https://www.home-assistant.io/integrations/generic_thermostat/)
- [Home Assistant | Zigbee2MQTT](https://www.zigbee2mqtt.io/guide/usage/integrations/home_assistant.html) - This is how I pair my Aqara and IKEA devices directly to Home Assistant
- [HomeKit - Home Assistant](https://www.home-assistant.io/integrations/homekit/) - This is how I share the Aqara and IKEA devices back into HomeKit.
- [Keyboard Maestro 10.0.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Airtable](https://airtable.com/invite/r/XxNzmsB9)
- [Make | Work the way you imagine](https://www.make.com/en) - Formerly known as Integromat
- [URL Linker for Safari on the App Store](https://apps.apple.com/th/app/markdown-linker-for-safari/id1289119450?mt=12)
- [Stream Deck Pedal | elgato.com](https://www.elgato.com/en/stream-deck-pedal)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello and welcome to Automated. My name is Rosemary Orchard, and I am here to talk to                    |
| 00:06      | you about automating everything in your life with my co-host, David Sparks. Hey, David,                  |
| 00:11      | how are you today?                                                                                       |
| 00:12      | I am great, Rose, and this is an episode I've been looking forward to because we're automating           |
| 00:17      | Rosemary Orchard today.                                                                                  |
| 00:19      | Yeah. Yeah. Just when you thought that I couldn't be any more automated, I got a [[Stream Deck#Stream Deck Pedal\|Stream Deck Pedal]]             |
| 00:23      | and the entire thing just went out the window.                                                     |
| 00:26      | Yeah. We both got [[Stream Deck#Stream Deck Pedal\|Stream Deck Pedals]]. We're going to talk about that later in the episode,             |
| 00:29      | but the key today is we did an episode a few months ago where I walked through the main                  |
| 00:34      | automation stuff I'm doing, and I'm like, do you think we could do you, Rose? And you're                 |
| 00:39      | like, yeah. And I'm like, do you think we could do it within five hours? And you're                      |
| 00:42      | like, no promises. So here we are, right?                                                                |
| 00:46      | I mean, I didn't hear you say hours. I thought you said years.                                           |
| 00:49      | Okay. Well, there we go.                                                                                 |
| 00:51      | Yeah. We might have a bit to talk about today. It's okay. This is what show notes are for.               |
| 00:56      | We can come back to them next time.                                                                      |
| 00:57      | Yeah. But before we do that, we've got some exciting news. The Automators now has a membership           |
| 01:02      | program and it's got the best name. It's Automators Max. So if you're interested in signing up           |
| 01:09      | for Automators Max, you get a ad free version of the show every week. So you get the show                |
| 01:14      | sans ads. You get then extended version of the show. We're going to add an additional                    |
| 01:19      | segment at the end of each show. You get all the other relay goodies that come with being                |
| 01:24      | a member of any relay show newsletter, discord membership crossover. They have some downloads            |
| 01:30      | like show art and things. And it's $5 a month or $50 a year. If you'd like to support the                |
| 01:35      | show, we'd love it.                                                                                      |
| 01:37      | Yeah. It would be really great because, you know, we're going to give you all of the extras              |
| 01:41      | and you're going to hopefully really, really enjoy it along with all the great relay FM                  |
| 01:46      | membership extras as well.                                                                               |
| 01:48      | Yeah. And we're starting with this episode. So if you're listening right now and you're                  |
| 01:51      | sold, go sign up and you can read down on this episode as Automators Max and the artwork                 |
| 01:56      | looks kind of awesome too. I'll have to say that.                                                        |
| 01:59      | Oh yeah. Yeah. Yeah. There's purple in there. Yeah. We might have pulled some strings to                 |
| 02:04      | get some purple in there, but I'm very happy with the purple.                                            |
| 02:06      | All right. Well, that's a thing that will be going on, going forward. And we thank you                   |
| 02:12      | for your support. If you don't want to sign up for Automators Max, we're still giving                    |
| 02:15      | you a great show. I'm going to just keep doing it, but you know, Max is there for people                 |
| 02:19      | who want it. But we're here today to talk about Rose and how she does her automation                     |
| 02:25      | and the starting point as so often is document automation. I think that's something that                 |
| 02:32      | a lot of people struggle with. And I know you've put a lot of thought into it. So let's                  |
| 02:36      | talk.                                                                                                    |
| 02:37      | Yeah. Yeah. I mean, I feel like it's where I started with document management is actually                |
| 02:43      | a pretty good place to talk about because where I started with document management was                   |
| 02:47      | a humongous downloads folder, which was quite frankly, almost embarrassing, and a really                 |
| 02:53      | badly organised documents folder and [[Dropbox]] and so on and so forth. And the way that I                  |
| 02:57      | fixed it was by automating it. So I essentially created automations for the file at the top              |
| 03:04      | of the stack and then ran the automations over those primarily using [[Hazel]] to get rid                    |
| 03:10      | of everything like that, which meant that every time I got rid of one kind of thing,                     |
| 03:15      | I was getting rid of all of the other kinds that fitted into that category. So for example,              |
| 03:20      | screenshots, I save screenshots to my downloads folder and they disappear after 24 hours unless          |
| 03:25      | I put them somewhere else. So if I want to keep them, I move them, but otherwise it lands                |
| 03:30      | in my downloads folder and then 24 hours later, it's gone. And that cleared out a whole bunch            |
| 03:36      | of things pretty quickly once I started chipping away at it because it meant that I was creating         |
| 03:42      | a rule. I had a whole bunch of really useful data to see whether or not things would fall                |
| 03:47      | into it because I was using Hazel's try feature where you can click on the eye and then you'll           |
| 03:53      | see whether or not a file falls into those rules or not and whether or not things will                   |
| 03:57      | be applied. And so that's where I really got started because the step one was clearing                   |
| 04:02      | out all of the rubbish because there is just so much stuff like ICS files. When you download             |
| 04:08      | an ICS file, you just want an event in your calendar. So what I do is I have [[Hazel]] immediately           |
| 04:13      | open the ICS file using Fantastical and then six hours later, it deletes it. If I've not                 |
| 04:18      | managed to click the add to calendar button in that time period, then I assume that I'm                  |
| 04:23      | not really that interested in the event and it will pop up an error when I eventually                    |
| 04:27      | try to click add and I can retrieve it because trash gets emptied after 24 hours. But it's               |
| 04:33      | one of those things where I tried to start with the really simple stuff, primarily the                   |
| 04:37      | downloads folder because that's where all the stuff ends up, of course. And it made a                    |
| 04:43      | big difference because it meant that I had suddenly piles of files that I could see and                  |
| 04:47      | go, right, well, this is the kind of thing that I need over here and I guess I want to                   |
| 04:50      | keep that sort of stuff, which is always a good place to get started.                                    |
| 04:55      | Yeah. I think that's a way a lot of people do it. And I think it's really wise to have                   |
| 05:01      | like a central place where automation points and then you can, I like the word shipping                  |
| 05:07      | in a way at it because I don't think this is something where you need to spend a weekend                 |
| 05:10      | writing a script for every type of file in there. You just kind of do it as you open                     |
| 05:15      | the folder and say, wow, what are you doing here? And how long have you been here? And                   |
| 05:21      | what can I do to make sure I don't have to see you ever again? And then you just make                    |
| 05:24      | a [[Hazel]] or a DEVONthink or whatever your system is, you make a rule to deal with that                 |
| 05:30      | category. And it's fun because then after a while it really becomes like, you know,                      |
| 05:36      | when you start out the process, there may be a hundred or a thousand files in that folder.               |
| 05:40      | But then after you do it a while, you're like, oh, there's three files in here. It's like                |
| 05:44      | you're personally offended. How did these three files get through all my rules? You                      |
| 05:48      | know, how did they slip through the cracks? So something you start coming up with things                 |
| 05:51      | and before you know it, you've got a very thorough system.                                               |
| 05:55      | Now, I like that you're doing it in a download floor because I do that in the action folder              |
| 05:59      | and it's just a folder I created called action that I point all the rules at. But it's not               |
| 06:04      | a bad idea to just put it in downloads because like you said, stuff goes there naturally                 |
| 06:08      | anyway. I don't know if that makes more sense or less sense than the action versus like                  |
| 06:15      | downloads. The nice thing about the action is you deliberately put it there. But that's                  |
| 06:20      | an extra step too, you know? Yeah, I mean, I have two, I have both. So I actually have                   |
| 06:25      | a folder. I mean, I've got three because I've got one in iCloud. I've got a folder in [[Dropbox]]            |
| 06:31      | called automated actions. And then I've got my downloads folder. And downloads is really                 |
| 06:35      | where a whole chunk of stuff happens because things do just end up there. And I've done                  |
| 06:38      | things like change my default screenshot safe location to downloads explicitly because                   |
| 06:43      | I really don't want to keep screenshots for very long. I actually use clean shots to take                |
| 06:47      | my screenshots most of the time. It automatically puts them on my clipboard. I paste them wherever       |
| 06:52      | it needs to go and I close and then it never actually gets saved, which is kind of part                  |
| 06:58      | of the magic of managing documents. If you can avoid having documents, you don't need                    |
| 07:01      | to manage them. But I do have specific automated actions folders inside of iCloud and [[Dropbox]]            |
| 07:10      | because this means that other things can put files and things there to be managed. So for                |
| 07:16      | example, Zapier will save certain things into subfolders of the automated actions folder                  |
| 07:21      | in [[Dropbox]] for me and [[Make]] previously known as [[Make\|Integromat]] does that as well. And then                    |
| 07:26      | I have shortcuts, of course, and that saves things. Historically, always save things inside              |
| 07:31      | the shortcuts folder. And so that was where my automated actions folder was in iCloud.                   |
| 07:36      | And I've been able, fortunately, with iOS 15 to move that up a level to the top in iCloud,               |
| 07:42      | which means that I can have magic happen in those places. And I try to keep those folders                |
| 07:50      | fairly single purpose, if that makes sense. So I have inside of automated actions, a folder              |
| 07:55      | called add to DEVONthink, which, funnily enough, adds everything that gets put in there               |
| 08:00      | into DEVONthink, and then that's it. Just because I don't, I want it to be very, very                 |
| 08:06      | obvious when I'm trying to create an automation or doing something on say a phone, which is              |
| 08:10      | not so easy to see document management on, or massive file paths, that that's where that                 |
| 08:17      | thing is going. Because the last thing you want is to say, hey, put all of the files                     |
| 08:23      | that I actually wanted to just keep for like 24 hours, just in case, and then get rid of                 |
| 08:27      | into DEVONthink, because when I put something in DEVONthink it's staying there, not because        |
| 08:31      | it's difficult to delete things. But that's just because I like, if something's going                    |
| 08:35      | into DEVONthink for me, that means that it is something that is a relatively permanent                |
| 08:39      | archive. You know, I say relatively, because there's always exceptions to the rule. I'm                  |
| 08:44      | sure when my washing machine breaks, I will delete my washing machine manual. But also,                  |
| 08:49      | you know, that that's one of my solutions. You know, if something is a archive document,                 |
| 08:53      | you know, I need to keep this, I need to keep this for a long time. It's going in DEVONthink.                |
| 08:57      | But will you, you know, sometimes you'll                                                          |
| 08:59      | look in there and you will find a washing machine manual from 20 years ago. Like, maybe                  |
| 09:03      | you're not old enough yet, but you'll be surprised how much digital detritus you get.                    |
| 09:07      | I mean, I got my first washing machine manual when I bought, where I currently live two                  |
| 09:12      | years ago. The washing machine I'm pleased to note is 12 years old now. And I was able                   |
| 09:16      | to get the manual online. I did some pretty deep Googling to find it, but it was one of                  |
| 09:21      | those things where actually finding that manual was really good because my washing machine               |
| 09:25      | was making really weird noise the other day. Like it turned out that the drum was just                   |
| 09:30      | like imbalanced. But I was able to search washing machine manual and found all my machine                |
| 09:39      | and I actually found it. I actually didn't even do that. I opened up my phone because                    |
| 09:42      | it was in the kitchen and I was hearing the noise and okay, searching washing machine                    |
| 09:46      | manual. Okay. Noises. Drum is unbalanced. Do this. I'm looking at it going, I have                       |
| 09:51      | no idea how a washing machine works, but this thing is 12 years old. It's pretty mechanical.             |
| 09:55      | If it goes wrong, I have to buy a new one anyway. So I'll give it a try and it worked.                   |
| 10:00      | And I was very pleased that I was able to find that so quickly and it was only because                   |
| 10:04      | I've set things up and I just, you know, I just named it washing machine manual. It's                    |
| 10:08      | okay. Like it doesn't need an amazing name in that case, but it is pretty helpful to                     |
| 10:12      | just have all of that kind of thing at your fingertips when you need it, but also be able                |
| 10:18      | to just completely not only ignore that group of documents 99% of the time, because most                 |
| 10:23      | of the time I don't care how my mixer works or my washing machine or things like that.                   |
| 10:28      | And I don't care about last year's text return, but I do care that if I get audited, I have              |
| 10:33      | lost your text return and if my washing machine goes wrong, I have the manual. So it makes               |
| 10:38      | sense to be able to keep that information.                                                               |
| 10:40      | Yeah. A point you made there that I'd like to emphasise is the naming of it washing machine              |
| 10:46      | manual. I know that sounds dumb, but think about future you and what terms would you                     |
| 10:51      | search on? And I get that these apps are very powerful and they do OCR and even if you give              |
| 10:58      | it a really obscure name and you type washing machine, it's still probably going to find                 |
| 11:01      | it, but why not make it easy? And you know, you don't need to go crazy. You don't need                   |
| 11:08      | to even put the name and the brand and everything in the name. But if you just put in the word           |
| 11:11      | washing machine, you're making it much easier for your future self to find it.                           |
| 11:16      | Yes. Yes. Absolutely. And that's one of the things I really do try to work on when it                    |
| 11:22      | comes to document management is good names. So many things land in, you know, whatever                   |
| 11:27      | folder it comes into. It comes in as an email attachment or whatever. And somebody's just                |
| 11:31      | given it a really bad name, untitled 179 or something. The first thing I try to do whenever              |
| 11:39      | I'm creating something actually is give it a name. It could be a working title, but I                    |
| 11:44      | try to give it a name immediately because that means that when I'm inevitably looking                    |
| 11:48      | for the thing again later, you know, I find it and that is, you know, that's more of a                   |
| 11:53      | life hack than an automation hack. But it also means once I've given it the name, then the               |
| 11:58      | automations can put it away in the right place. Though I should note that on my working directories,     |
| 12:04      | the places where I keep files that I'm actively working on, I tend not to have automations               |
| 12:10      | running specifically unless I tag something. So [[Hazel]] will watch my documents folder, but                |
| 12:17      | it's only watching for things with the tag done because that way that gets picked up.                    |
| 12:23      | But until I finish working on it, it's not going to, it's not going to find it. I should                 |
| 12:27      | create a smart folder. I actually think about it now for all the things that I've not touched            |
| 12:31      | in like 48 hours, which don't have the done tag, just so that I can find those.                          |
| 12:37      | The way I solve that problem, because that is an issue, right? The flip side of this                     |
| 12:42      | document automation is if you get really good at it, the documents disappear before you                  |
| 12:47      | do anything with them. And I actually had that happen to me once where it put like,                      |
| 12:51      | I think it was a water bill. It like filed it for me before I paid it. And I just didn't                 |
| 12:56      | realise I hadn't paid it. And they sent me a letter, Hey, dude, you haven't paid your                    |
| 12:59      | bill. And I'm like, Oh, I never saw it because [[Hazel]] took care of it before I read it.                   |
| 13:05      | And so what I do, this is kind of a, this is not a very automated, technical way to                      |
| 13:13      | handle it. But so I have the action folder and inside that folder, I have three subfolders,              |
| 13:19      | one for MacSparky, one for legal, which is hopefully going away soon, and then one                      |
| 13:23      | for personal. And anything, and I point all the [[Hazel]] rules actually at those subfolders.                |
| 13:29      | And that allows me to kind of like parse the [[Hazel]] rules based on what part of my life                   |
| 13:34      | they're working on. So that makes it easier to manage them. But the actual action folder                 |
| 13:39      | doesn't have any rules pointed at it. And that's the one, actually, I take that back.                    |
| 13:45      | Let me, I'll explain, but the action folder, the only thing the action folder rules do                   |
| 13:49      | are automatically move things into folders if they're the kinds of things that can be                    |
| 13:54      | automatically moved. But otherwise, I look through them, and then I decide, okay, this                   |
| 13:58      | one is going to something I need to pay, I need to make a note or whatever. And then                     |
| 14:02      | I can put it into the, the personal folder and it'll get filed.                                          |
| 14:06      | Yeah. Yeah. That makes a lot of sense. Yes. What I am trying to do with a lot of this,                   |
| 14:11      | I'm not there yet. And this is a system that until I trust it 100%, I'm not going to change              |
| 14:16      | things. What I'm, I'm aiming for is create OmniFocus actions automatically from things                   |
| 14:22      | like that. So that then it should appear wherever, you know, it should appear where I'm going            |
| 14:28      | to look for the task itself. But it's not actually going to change. But I don't need                     |
| 14:33      | to, you know, manually put the thing somewhere so that it gets handled because that of course            |
| 14:39      | is where I will fail to do something at some point and then accidentally have a backlog                  |
| 14:43      | of four water bills that need to managing. I actually created an OmniFocus [[AppleScript]]                  |
| 14:48      | to do that a few years ago where I could flag it and have it create an OmniFocus task. But               |
| 14:54      | the script broke after a certain amount of time. And just like, if it's not 100% reliable,               |
| 14:58      | that is a very dangerous game, you know? Yeah. Yeah. I mean, my plan with this, the                      |
| 15:04      | way that I'm trying to structure this is I'm actually doing this with [[Keyboard Maestro]]                   |
| 15:09      | adding the OmniFocus action. Because if something goes wrong, then I just have, you know, I              |
| 15:14      | just tell [[Keyboard Maestro]], stop, like, don't, don't do the rest of the macro, just stop                 |
| 15:18      | right there. Because that means that if there's a file there, it means that something didn't             |
| 15:23      | work somewhere. And then I can go into debug. But at the minimum, then I've got the, yeah,               |
| 15:27      | well, the file's still here. So you need to do whatever the right action is for it. And                  |
| 15:31      | you need to look it up in your system is whatever the right action is, if you don't remember.            |
| 15:35      | Because yes, with something like that, you do have to trust it 100%. And it's very useful                |
| 15:42      | to be able to do that. But also to have a system that, you know, until I trust it 100%, I'm              |
| 15:47      | able to scope. Yeah, I'm going to stop because I ran into an error.                                      |
| 15:51      | Yeah, makes sense. Now, where does [[DEVONthink]] fit in this? Because you've mentioned Devon               |
| 15:55      | think and [[Hazel]].                                                                                         |
| 15:57      | Yes. So I do use both. And I should know [[DEVONthink]] is sponsoring the show. But even if                 |
| 16:02      | they weren't sponsoring the show, I would still have to talk about it because I really                   |
| 16:06      | love and use the application on a regular basis. And a lot of what I do with [[DEVONthink]]                 |
| 16:10      | is essentially just like organise these documents, you know, I've got a business, so I've got            |
| 16:15      | all of the invoices and receipts and everything that I need to keep. And so all of those end             |
| 16:20      | up in [[DEVONthink]]. And what I am doing in [[DEVONthink]] for those is I'm using the smart                   |
| 16:25      | rules to organise and rename things and put information into custom metadata fields. I                   |
| 16:32      | can't believe I lived so long with [[DEVONthink]] without really using custom metadata fields,              |
| 16:37      | but they've allowed me to create, you know, like this was the cost of this and this was                  |
| 16:41      | the VAT paid on it, fields, which means that then essentially I pretty much have an automated            |
| 16:49      | texture turn, which is really great combined with some smart dates and so on. And that is                |
| 16:55      | incredibly useful. And even more so when my accountant somehow lost all of the digital                   |
| 17:02      | documents that I had sent over. And so I sent everything again, and it was, you know, five               |
| 17:07      | minutes of work to export everything and just say, yep, it's all here, go. Because, you                  |
| 17:14      | know, I had everything in a really easy to organise format, which means that also I'm                    |
| 17:19      | actually maintaining all of the stuff, which is something that I'm sure people who've got                |
| 17:25      | their own business and have to do texture turns or maybe just Americans because you                      |
| 17:27      | all have to do texture turns over there are aware can be a bit of a pain at times keeping                |
| 17:34      | track of all those receipts and everything. It makes it incredibly easy. And my favourite                 |
| 17:38      | thing that I've been working on recently is getting emails automatically out of mail                     |
| 17:43      | into [[DEVONthink]] and converting them into a PDF. So all of my [[Apple]] receipts get pushed                  |
| 17:49      | into [[DEVONthink]] and converted into PDFs with all this data on them, because that's                      |
| 17:54      | one of the things that I need. Okay, well, it makes sense. So, you know, you've got some                 |
| 17:59      | stuff in [[Hazel]], you get some stuff in Devon thing. Interestingly, you know, [[DEVONthink]]                  |
| 18:03      | does have a really powerful set of [[Hazel]] like rules inside of it. So you could do it all                 |
| 18:09      | with either. Yeah, yeah, you could. I just tend to use [[DEVONthink]] for these are documents               |
| 18:14      | that I want to be able to access anywhere. potentially, you know, I probably won't,                      |
| 18:20      | but I want to be able to. And also, I really need to keep these documents, you know, they're             |
| 18:27      | documents that they're not something that I will work on, necessarily. They're more                      |
| 18:33      | reference materials. And when I'm done with things, then I'll put them in there as well                  |
| 18:38      | if it's something that I've created that I'm proud of. I want to keep or something that                  |
| 18:43      | I just want to look back to frequently for inspiration. But a lot of it is essentially,                  |
| 18:48      | you know, manuals and receipts and things like that. But it is really handy to use that                  |
| 18:54      | to just organise that information because then, right, I'm looking for the thing that tells              |
| 18:59      | me how to reset my door lock because I have a smart door lock. Okay, well, that it's going               |
| 19:04      | to be in [[DEVONthink]], yeah, and I'll just search for lock or door or Yale. And it will                   |
| 19:11      | appear because not only have I given it, you know, a good file name, which is I've got                   |
| 19:16      | two different ones. So they both start with Yale door lock, they do have the model in                    |
| 19:20      | there and then I've added a bunch of information in, in the metadata because that's something            |
| 19:26      | that you can do where you, you know, add extra information. There's aliases as well that                 |
| 19:33      | you can use. I tend just to end up writing in the, I think it's a custom metadata field                  |
| 19:40      | that I created called notes. But it's a very handy place to just add extra information and               |
| 19:47      | you can do the same thing in Finder. But, you know, it's, for me, somehow [[DEVONthink]]                    |
| 19:54      | works really well for my brain. And also the fact that it doesn't matter what device I'm                 |
| 19:59      | on, I can just open my [[DEVONthink]] database and then find everything is in here, except                  |
| 20:05      | at work, of course, I do have a separate [[DEVONthink]] database for work related things.                   |
| 20:09      | Yeah, I mean, custom metadata is so much easier with [[DEVONthink]] than Finder. It's like not              |
| 20:13      | even close. Like I made a custom field for [[Obsidian]] link. So if I have a related note                    |
| 20:20      | on any file in [[DEVONthink]], I've got a custom metadata for that link, you know, nice. One                |
| 20:26      | thing that you do with [[DEVONthink]] is you create links to documents, which I would imagine               |
| 20:31      | is it's helpful for your tax planning. That is more difficult with Finder based files.                   |
| 20:37      | And you do have some stuff you can find or do you have a system for that? Like how do                    |
| 20:41      | you how do you link to a document and find her? I guess is the question. I tend not to,                  |
| 20:45      | to be honest. You know, if I'm going to link to a file, it's either going to be something                |
| 20:49      | that is in [[DEVONthink]] or [[Obsidian]]. And I mean, I could put all of my markdown files                     |
| 20:57      | and everything into [[Obsidian]]. I actually have it index that folder so that if I am searching             |
| 21:02      | for something and I've, it turns out that what it is is I've stored it in a link in                      |
| 21:07      | as part of an [[Obsidian]] document, I'll still find it. But pretty much if I'm going to link                |
| 21:12      | to something, it's going to be in [[DEVONthink]] or [[Obsidian]]. And the files that live on my                 |
| 21:18      | device tend not to be things that I, I link to in that sort of way. The closest that I                   |
| 21:24      | might come is, you know, there's, there's a path to a folder here because that folder                    |
| 21:29      | contains a project that I'm working on, you know, on development wise. So, you know, I'm                 |
| 21:34      | only to open it with [[Xcode]] or Web Store or more Nova or BS code or something, depending                  |
| 21:40      | on what it is.                                                                                           |
| 21:41      | All right. But you've opened another can of worms. You're putting documents in [[Obsidian]]                  |
| 21:45      | as well.                                                                                                 |
| 21:46      | Well, I say documents, they're just markdown documents or images that I'm referencing and                |
| 21:51      | markdown documents so that I've got an image there. I tend not to put other kinds of files               |
| 21:57      | in there. There's no particular reason, but if I'm going to reference a file, then it's                  |
| 22:04      | probably going to be something that's on the internet or a document that I'm going to be                 |
| 22:09      | putting in [[DEVONthink]] so that I can have a link to that.                                                |
| 22:14      | Yeah. I'm, I'm the same way. I feel like [[DEVONthink]] is way better at documents than                     |
| 22:20      | [[Obsidian]] is. So I don't put any real documents in [[Obsidian]]. Okay. I know this whole thing                |
| 22:26      | sounded like a [[DEVONthink]] ad, but we're both big [[DEVONthink]] fans. So sorry. It's just                  |
| 22:29      | weird that they're also sponsoring today, but there you go.                                              |
| 22:32      | It is weird, but it's just one of those things. Yeah. There is one tiny thing. Well, maybe               |
| 22:38      | not tiny thing that I will mention that's sort of related to document management, which                  |
| 22:44      | is I've got a lot of config files, which I am slowly putting into [[Git]]. So for anybody                    |
| 22:51      | who uses the terminal on a regular basis, you probably have a bash or a ZSH config. If                   |
| 22:57      | you use [[Git]], then you'll have a [[Git]] config. If you use item, then you might have custom                  |
| 23:02      | settings like I've got badges for different folders and item and I'm slowly putting all                  |
| 23:06      | of those and my Homebrew installs into a [[Git]] repo. And this has been causing all sorts                   |
| 23:14      | of wonderful headaches because I realised I actually have zero consistency in the way                    |
| 23:18      | that my machines are set up, which explains why every so often I'll be on one machine                    |
| 23:22      | going, but I'm sure this worked when I did this yesterday. And the answer is it was on                   |
| 23:26      | the other machine. So I'm trying to unify across my devices that so that I end up with                   |
| 23:32      | the same setup everywhere just because you go to search for a document, being able to                    |
| 23:36      | find it on every device is great. But if you go to do something, especially when it's                    |
| 23:42      | code related, I find, and you're missing the application that you need to do it or something,            |
| 23:48      | it's very frustrating. So I'm managing those files by putting them in [[Git]].                               |
| 23:55      | This episode of Automators is brought to you by Electric. When you think of the phrase                   |
| 23:59      | boss move, you might be thinking of making a bold business decision or maybe giving a                    |
| 24:02      | great presentation for a big crowd. The reality is sometimes being a boss in a small business            |
| 24:07      | means sorting out the orange juice you spilled on your own keyboard or helping a staff member            |
| 24:10      | with setting up their new laptop. A team over Electric knows more businesses, maybe like                 |
| 24:15      | yours, face these challenges. That's why they've solved this problem for you by operating as             |
| 24:19      | your IT department. Instead of spending your time sorting through unused application licenses,           |
| 24:23      | setting up employee laptops and answering never ending IT questions from your team,                      |
| 24:27      | you can build that empire. With Electric acting as your IT department,                                   |
| 24:31      | you can get back to what you're good at. Plus, you get a really cool IT platform to see and              |
| 24:35      | manage everything. A service like Electric really saves all sorts of time. From, how                     |
| 24:41      | do I set up my calendar? To, wait, wait, where did my laptop go? Why isn't it here yet?                  |
| 24:47      | All of those questions can be answered by the team at Electric. For automated business,                  |
| 24:52      | Electric are offering a free pair of Beats Solo 3 headphones for taking a qualified meeting.             |
| 24:56      | Just go to electric.ai.automators to set it up. That's electric.ai.automators to get                     |
| 25:02      | your free pair of Beats Solo 3 headphones today for scheduling meeting. Our thanks to                    |
| 25:07      | Electric for their support of this show and Relay FM.                                                   |
| 25:10      | So, David, do you want to talk about setups and breakdowns and all of that fun?                          |
| 25:16      | Rose, you're speaking my language. I just love that so much.                                             |
| 25:20      | Yes, yes.                                                                                                |
| 25:21      | I love setup automation. Yeah, context switching. I mean, it's like, come on. What are you               |
| 25:26      | doing to me here?                                                                                        |
| 25:27      | I know, I know, I know. I'm just saying the magic words.                                                 |
| 25:30      | Share your secrets, Rose. Share your secrets.                                                            |
| 25:32      | Well, my secrets aren't exactly difficult, fortunately. And essentially what I have done                 |
| 25:42      | is I've, I spent a bit of time sitting down and going, okay, what do I actually need to                  |
| 25:48      | do in different places? Because that, for me, was a lot of the work because it turns                     |
| 25:54      | out that if you record three podcasts, there's a bunch of common things that happen across               |
| 26:00      | all three podcasts. And so, it's probably sensible to have that unified so that when                     |
| 26:08      | you start recording a podcast, the things that happen for every podcast always happen.                   |
| 26:13      | And then podcast specific things happen. So, for example, when I start recording automators              |
| 26:18      | or when I say that I'm going to be recording an episode of automators, Kibble My Show goes,              |
| 26:22      | which episode is this? And amazing, wonderful, love it, type it in. And then at the end of               |
| 26:29      | the show, it helps me rename files using the episode number because it stores it. And so,                |
| 26:36      | what I've done for this is I've got Bunch, which is what I'm using for the big overview                  |
| 26:43      | of it. And that is running a number of things, including shortcuts, and of course, keyboard              |
| 26:50      | master macros and opening and closing applications. And then once all the applications are open,         |
| 26:56      | it runs [[Moom]]. So, it can tidy everything up for me, which is really nice so that then                    |
| 27:01      | when I start recording an episode, that [[Safari]] is right in front of me with the tabs that                |
| 27:05      | I need because it's created a new [[Safari]] window and put everything into those tabs. And all              |
| 27:11      | the other windows that I need are in the places that they always are so that I'm not usually             |
| 27:15      | going, wait, where did I put [[Audio Hijack]] again? It's hiding somewhere. Yeah, I do the                   |
| 27:21      | same thing. It's funny how we've harnessed [[Moom]] to turn into a minion of our automation.                 |
| 27:29      | And it's not that hard because you can set a keyboard shortcut to any layout and then                    |
| 27:32      | you just trigger a keyboard shortcut in it and you're good to go. Yes, yes, exactly.                     |
| 27:38      | Did you know [[BetterTouchTool]] has an action and shortcuts to trigger a keyboard shortcut?               |
| 27:45      | That's like, that is like gold.                                                                          |
| 27:48      | That is a really handy tool. Yes, because there are so many things that you need to do                   |
| 27:55      | a keyboard shortcut in or the easiest way to automate it is just do the keyboard shortcut                |
| 28:00      | inside it. Yeah.                                                                                         |
| 28:02      | You know, one of the things I'm doing right now, which happened at the start of this episode             |
| 28:06      | is I ran a [[Keyboard Maestro]] macros to start recording, to actually start the recording                   |
| 28:10      | of the episode. And that saved a time stamping [[Keyboard Maestro]]. And it also switched [[Audio Hijack]]             |
| 28:16      | and then did the keyboard shortcut to start the recording, which is Command R.                    |
| 28:22      | And you know, there's a new version of [[Audio Hijack]] coming with scripting and I can't wait               |
| 28:25      | for that. But for the time being, doing the recording or just starting the recording                     |
| 28:32      | through keyboard shortcut, that's pretty powerful. But I wouldn't be able to do that in shortcuts        |
| 28:36      | if it wasn't for [[BetterTouchTool]].                                                                      |
| 28:38      | Yeah, yeah, it's awesome. I mean, it's like, we had [[Apple]] on [[Mac Power Users]] and I was                   |
| 28:43      | asking them about like, triggering menu items and keyboard shortcuts. That stuff is such                 |
| 28:49      | an easy way to, to kind of like hack your way into automation. And they're like, no,                     |
| 28:56      | it's not like they just were not interested in doing that. Now [[BetterTouchTool\|BetterTouchTool's]] added                  |
| 28:59      | the whole tool set. I mean, menu items, it just, it's like a killer app now for shortcuts,               |
| 29:05      | which makes me laugh. But anyway, I went down a little bit of a tangent there for a second.              |
| 29:12      | So it's, it's a combination of Bunch and [[Moom]] sounds like to really get it going. What,                  |
| 29:17      | what are some of the other like setups that you have? Like when you want to code for work                |
| 29:22      | or, I don't know, just tell, tell me some of the other setups you've got.                                |
| 29:26      | Well, I mean, it depends because actually at work, I have three primary setups that                      |
| 29:31      | I use. I've got coding, which, you know, splits my ID, which PHP storm on one side of my screen,         |
| 29:37      | [[Firefox]] on the other side of my screen. And then on my laptop screen, it'll put item split               |
| 29:42      | into three areas. So running the right commands that I need for, for the day. But then if                |
| 29:48      | I'm going joining a meeting at work, then it will put teams in the middle because it's,                  |
| 29:54      | it's going to be teams for meetings, meetings. And it puts, it slims down [[Firefox]] and puts               |
| 30:01      | it on the left of that and it slims down PHP storm and puts it on the right just so that                 |
| 30:06      | if I need to see my code or the, the site that I was on beforehand, I can do that.                       |
| 30:12      | And then I've also got another one for, I'm screen sharing, because when I'm screen sharing              |
| 30:17      | with people, I have a 32 inch ultra wide monitor. It's amazing. If you need to share your entire         |
| 30:23      | screen, the other person needs a magnifying glass, unfortunately. And also, you know,                    |
| 30:30      | I like to get rid of other applications that I might have had running, you know, I might                 |
| 30:33      | have had [[Safari]] open just to, you know, Google something that I was thinking about, you know,            |
| 30:38      | buying perhaps or something, you know, when you think of something, you just do it because               |
| 30:41      | it takes three seconds and then you've got [[Safari]] open still. And so it helps clean up                   |
| 30:46      | things like that as well, just because I don't want messages sending me a notification while             |
| 30:50      | I'm, you know, on a slack huddle with somebody sharing my screen, it's not important. So,                |
| 30:56      | so I do that. And it actually switches my focus mode from work to work meeting. I just                   |
| 31:03      | have a work meeting focus mode, which gets rid of even more notifications than just my                   |
| 31:10      | regular work focus mode. And then when I end that, then the switch is back to my work focus              |
| 31:14      | mode, which is really handy. And I'm switching focus modes, because people are going to ask              |
| 31:20      | about this, I'm switching focus modes using shortcuts. And what I do, and how I run the                  |
| 31:25      | shortcut is because I switch mode through bunch, I just have it run the [[AppleScript]]                      |
| 31:31      | switches, tell application shortcuts to run shortcut, quote, the name of your shortcut.                  |
| 31:36      | And you do need quotation marks around the name of your shortcut if it's got a space in                  |
| 31:40      | it. But it's, it's very easy to do. And there's a number of ways that I can do this. I usually           |
| 31:46      | trigger bunch primarily from my [[Stream Deck]], because I have the icons there. And I had                   |
| 31:54      | an idea. I only started this the other day, unfortunately, because TJ Lewin created the                  |
| 32:00      | great calendar icon, which you can have in [[Stream Deck]]. And that's controlled through                    |
| 32:07      | [[Keyboard Maestro]] and you change the background colour of the [[Keyboard Maestro]], the stream                 |
| 32:13      | deck button, and you change what text is on it all through [[Keyboard Maestro]] and some                     |
| 32:17      | [[AppleScript]] and bash scripts and everything. It's, it's genuinely amazing. And I love it.               |
| 32:22      | I realised what I can probably do a good chunk of the time is read some of that same data                |
| 32:30      | and actually use it to display the right bunch. So then when I press one [[Stream Deck]] button,             |
| 32:36      | it will almost certainly run exactly the right bunch for exactly what I'm doing. And then                |
| 32:41      | I'll have another one next to it for just like, you know, give me all the bunches. And                   |
| 32:44      | I can choose whichever one manually. But I realise, you know, when I'm, when it's Wednesday,             |
| 32:50      | I'm recording automators. When it's Tuesday, I'm recording iOS today. When it's Thursday,                |
| 32:53      | I'm recording nested folders. Guess what? I can put one button. So I don't need three                    |
| 32:57      | buttons taken up the entire time. I don't need to hide them behind a podcasting button.                  |
| 33:01      | I just need to, you know, have one button, which shows me the correct thing. So that's                   |
| 33:05      | what I am playing with at the moment. I don't think that's going to be ready by the time                 |
| 33:09      | this show ships, but hopefully I will have it in a vaguely shareable state so I can talk                 |
| 33:15      | about it in the forums.                                                                                  |
| 33:16      | Yeah, that's a lot. You know, I'm a big fan. [[Brett Terpstra\|Brett]] and I wrote books together. I just                    |
| 33:23      | haven't really got fully invested in bunch it. And I think the reason is because I set                   |
| 33:29      | up all of these scripts in [[Keyboard Maestro]] to do setups for me. And like the kind of                    |
| 33:34      | stuff I want to do, usually with a setup is open apps and then arrange them using moon,                  |
| 33:40      | which is the same thing you're doing with bunch. And occasionally like I'll start a                      |
| 33:45      | timer or something, but all that stuff is scriptable inside [[Keyboard Maestro]]. I'm trying                 |
| 33:51      | to make the case for me for [[Bunch]]. I mean, what should I, what am I missing here?                        |
| 33:55      | Well, one of the great things that you can do with bunch, which I think a lot of people                  |
| 33:59      | probably will like is if you click on the bunch option in the menu bar, there is an                      |
| 34:03      | option right there, new bunch with open apps, which means that you can just open up the                  |
| 34:10      | apps that you usually want to have for this thing and you can save it. And this is the                   |
| 34:15      | same trick is you can, you can do the same trick with moon. You can save a window layout                 |
| 34:20      | snapshot once you've positioned or your windows where you want them. And for me, that was                |
| 34:26      | really helpful getting started because I had some of this stuff in [[Keyboard Maestro]], but                 |
| 34:30      | I'd never really bothered to sit down and figure it out. And another feature that I                      |
| 34:37      | really like, and this is not to say that [[Keyboard Maestro]] is not great for this, is I really             |
| 34:42      | like the fact that when I open a bunch file, it's pretty much just a list of application                 |
| 34:46      | names. So I'm skimming it and I'm going, yep, [[Visual Studio Code]]. Yeah, that's the one                   |
| 34:52      | that I want, you know, and it's, it's great for both when you're having those brain fart                 |
| 34:55      | moments where I don't remember what the name of the thing is that I need to open because                 |
| 35:00      | everybody's brain does that every once in a while. And it's also just very useful for                    |
| 35:06      | being able to copy little chunks very easily and reorder them. Whereas an action in keyboard             |
| 35:13      | maestro, and it's the same if you, you have an action in shortcuts, it just takes up a                   |
| 35:16      | lot more space on your screen than a single line of code, which, which is really helpful.                |
| 35:23      | What I also like about bunch is each bunch can have the concept of being open or closed                  |
| 35:29      | or running and not running, which means that I can toggle it on and off. And so I can say                |
| 35:34      | when I start my recording, podcast recording, automators bunch, do these things. And when                |
| 35:41      | I finish it, do those things. And I don't need to try and harness like which mode I'm                    |
| 35:49      | in, because I could theoretically be in multiple modes simultaneously, because bunch supports            |
| 35:54      | that. And that's one of the reasons why I really like it. I think it's probably a good                   |
| 35:59      | chunk of it is that, that concept of a bunch being on or off, essentially, that allows                   |
| 36:05      | me to add extra magic.                                                                                   |
| 36:08      | I think I need to like really just like say for the next month, I'm just going to use                    |
| 36:12      | bunch for this. Like one of the reasons I wanted to kind of keep it with [[Keyboard Maestro]]                |
| 36:16      | is that, you know, I've already got it all, all the triggers and buttons connected, you                  |
| 36:21      | know, and like putting up the infrastructure to, to switch over is a pain. The other thing               |
| 36:27      | was I was really toying with the ability to try and set windows size and height and everything           |
| 36:34      | in, in [[Keyboard Maestro]] to take [[Moom]] out of the loop, you know, that way it's easier                     |
| 36:39      | if you have one less app involved. But I just found that like you really have to do a pixel              |
| 36:45      | by pixel and [[Keyboard Maestro]] to do this right. And then like if I change resolution, everything         |
| 36:51      | just looks terrible. And it's just like it really just wasn't kind of doing the job.                     |
| 36:56      | Yeah, yeah, I have to say, you know, I do, you know, Keyboard Maestro's window management                |
| 37:01      | generally is great because you can do things like just move this to the centre of my primary             |
| 37:06      | monitor, which is actually something that I've got hooked onto several other actions.                    |
| 37:13      | So for example, if I try to quit [[Safari]] with command Q, most of the time I did not mean                  |
| 37:19      | to hit command Q, I meant hit command W to close tab. So I actually have [[Keyboard Maestro]]                |
| 37:24      | interfere with it there and go, are you sure? Like, did you actually want to do this? And                |
| 37:29      | one of the things that it does with the are you sure is it moves that right into the middle              |
| 37:33      | of my main monitor. Because that means that I'm actually going to see it because there's                 |
| 37:37      | nothing worse than deliberately trying to do something and getting an are you sure prompt                |
| 37:41      | that's wait, wait, why is it way over there in the right hand corner of my secondary monitor?            |
| 37:46      | That's not where I wanted to see it. And the answer is I dragged it, I dragged the keyboard              |
| 37:50      | maestro prompt there sometime previously, and [[Keyboard Maestro]] smarter remembers where                   |
| 37:54      | you put the prompt because you probably want to put it back, except for this thing I don't.              |
| 37:59      | I always want it front and centre. So I have it move things in that respect. And where are               |
| 38:04      | you doing something relative to other things? So smack bang in the centre vertically and                 |
| 38:09      | horizontally of my main monitor, it's fabulous, but it is much trickier to say, yeah, I want             |
| 38:15      | this to take up one third of my screen vertically, please. Or, you know, one, one third of my            |
| 38:22      | screen horizontally actually is what I mean. So I end up with three columns on my screen.                |
| 38:25      | The smart home fit into this at all. Yes. So of course, when I'm podcasting, I have                      |
| 38:32      | automated curtains and automated blinds and things like that. And the last thing I want                  |
| 38:35      | is mid recording for my blinds start going down and going, or my current start closing                   |
| 38:41      | and going, and I won't do that sound for very long because it is quite annoying. And it                  |
| 38:47      | probably doesn't get picked up much by my microphone or it shouldn't do. I've done my                    |
| 38:52      | best to position everything so that it wouldn't. But one of the things that I do when I start            |
| 38:57      | my recording is I actually have it trigger my podcast recording focus mode and then my                   |
| 39:03      | phone checks, hey, is sunset in the next two hours? Okay, cool. I'm just going to go ahead               |
| 39:08      | and close your curtains and blinds right now, at least in my office. And that is really                  |
| 39:14      | helpful. And of course, it also turns on lights and so on as part of that. And I have a variety          |
| 39:18      | of home kit scenes set up for like Iowa's today, where I use different colour lights                      |
| 39:24      | in the background and things like that. And I've been getting pretty nerdy with the home                 |
| 39:28      | automation stuff, David. I think there's going to be quite a bit to talk about there.                    |
| 39:33      | This episode of automators is brought to you by our friends at TextExpander. Keep everything             |
| 39:37      | consistent and accurate with . In our fast-paced world, things change constantly             |
| 39:42      | and errors in messaging can have significant consequences. TextExpander lets you make approved           |
| 39:47      | messaging available to every team member instantly with just a few keystrokes. So your team stays        |
| 39:52      | consistent, current and accurate. With TextExpander, you can get your message right every                |
| 39:56      | time, expand content that corrects your spelling and keep your language consistent with just             |
| 40:00      | a few keystrokes. So your team members always know the right message for the right person                |
| 40:05      | at the right time without relying on memory or copy and paste. I love TextExpander and                   |
| 40:10      | I use it for all sorts of things. Recently, I've been experimenting with app-specific                    |
| 40:15      | snippets again. And guess what? They're even better when you share them because that means               |
| 40:19      | that everybody who needs to write their text is certain way so it appears right in this                  |
| 40:23      | application. Well, they can get it just like that every time. As a listener of automators,               |
| 40:29      | you can get 20% off your first year. Visit TextExpander.com/podcast to learn more                   |
| 40:33      | about TextExpander. That's TextExpander.com/podcast. I'll thanks TextExpander for                   |
| 40:38      | their support of this show and Relay FM. Okay, so Rose, every time I talk to you, I                     |
| 40:44      | feel like your home automation has started over. It's like a very much fast moving train.                |
| 40:51      | Where are you right now with respect to home automation?                                                 |
| 40:54      | There is a lot of home automation in my life, David. I've taken the opportunity because                  |
| 41:01      | I've been using the IKEA smart home stuff. I've got quite a bit of it. I've got smart                    |
| 41:06      | blinds that I've got quite a few of the smart outlets. I've got some bulbs. I recently got               |
| 41:10      | a nice new uplighter in my living room. IKEA has GU10 white comfort bulbs. That was what                 |
| 41:20      | I needed for the reading light in there. I just got two IKEA smart bulbs. Unfortunately,                 |
| 41:26      | I think that a chunk of this is due to the fact that I have a lot of smart home stuff.                   |
| 41:31      | I have a lot of devices. Apparently, my home was built with the very best of insulation                  |
| 41:39      | in mind. One of the ways that they did that was by foil backed plasterboard and a number                 |
| 41:45      | of other things which massively interfere with the signal inside of my home. I kid you                   |
| 41:51      | not when I say that I have one of what feels like the UK's tiniest flats. It's two bedrooms              |
| 41:58      | just if you are very, very, very good friends with everybody. But I can be in one room and               |
| 42:06      | I will not have Wi-Fi signal even though the router is literally in the next room. That                  |
| 42:10      | massively interferes with things. The IKEA hub, unfortunately, really, really, really                    |
| 42:15      | struggled for me. I've ended up moving all of my IKEA things into home assistant because                 |
| 42:21      | home assistant, you can plug a [[Zigbee]] dongle into it. I bought a [[Zigbee]] dongle and I paired              |
| 42:28      | everything with home assistant. Home assistant and the [[Zigbee]] dongle that I bought seem                  |
| 42:32      | to be doing a really, really great job of getting all of my things to talk to each other.                |
| 42:39      | I can share those back into [[HomeKit]] so I'm not losing out on the fact that I can then                    |
| 42:43      | talk to a home pot and say open and close this blind and do these things and so on and                   |
| 42:46      | so forth. But also, home assistant automations are a lot more powerful. You can say, for                 |
| 42:54      | example, if this door is open for two minutes, then do this thing, which is something that               |
| 43:00      | I was trying to do for a long time in [[HomeKit]] and Shortcuts and I had things forming out                 |
| 43:08      | to my push cut automation server where it was checking every 10 seconds, hey, is the                     |
| 43:13      | door still open? Is the door still open? Is the door still open? Well, there's 120 seconds               |
| 43:18      | in two minutes. That's 12 runs of a shortcut to check whether or not a door is still open.               |
| 43:26      | It felt very inefficient and unoptimised. Quite frankly, it was a bit flaky just because                 |
| 43:31      | you're relying on duct tape and a wish to make all of those things work. And individually,               |
| 43:38      | each component was rock solid. [[HomeKit]] was great and the door lock is great and push                     |
| 43:44      | cut is great, but trying to connect all three of them together seemed to just end up being               |
| 43:48      | a bit tricky. And I couldn't ever quite figure out where the failure point was. So I've been             |
| 43:53      | able to solve a good chunk of that with some home assistant automations, but I've managed                |
| 43:58      | to keep all of my [[HomeKit]] automations intact because what I've done is I've backed up                    |
| 44:03      | my [[HomeKit]] setup. And then when I removed the devices from the [[HomeKit]] home because                      |
| 44:10      | I took them off of the IKEA bridge and I paired it to [[Home Assistant]] and I shared it back                |
| 44:14      | to [[HomeKit]], I could actually restore the backup that I'd created and I used controller for               |
| 44:20      | [[HomeKit]] for this. And what I could do was I could say, hey, so this device is now this                   |
| 44:27      | device and then it just linked everything back up for me. So it meant that actually nothing              |
| 44:32      | got broken. And I have to say, control of [[HomeKit]] definitely deserves a massive shout out                 |
| 44:38      | because it made that process a lot easier. And so does [[Home Assistant]] because it is an                   |
| 44:42      | incredibly powerful system that's allowed me to get rid of three hubs so far and just                    |
| 44:49      | pair everything directly.                                                                                |
| 44:50      | Okay, wait, I just want to pull a set of weeds for a minute here because you keep talking                |
| 44:54      | about [[Home Assistant]], but I'm not sure everybody knows what [[Home Assistant]] is. So what is it?            |
| 44:59      | Yeah, we've mentioned it on the show before, but if you think of [[HomeKit]], [[HomeKit]] is one                 |
| 45:05      | way to control a number of smart home devices, but they all have to be [[HomeKit]] compatible.               |
| 45:11      | What you can do instead, there's a number of different options out there. There was Samsung              |
| 45:16      | SmartThings for a while. I think that's pretty much dead now, unfortunately. There's Hubitat             |
| 45:21      | and a number of things, but [[Home Assistant]] is a very big one and it's open source. And                   |
| 45:26      | essentially, the idea is that it is a small brain that lives in your house on a computer                 |
| 45:31      | and it does a variety of different things. But on [[HomeKit]], where you have to have an                     |
| 45:39      | always-on iPad that stays at home or an [[Apple TV]] or a HomePod, you can run this on a computer            |
| 45:46      | that you might already have that's in your home. So I was running on a Raspberry Pi for                  |
| 45:51      | a while and then I ended up buying a slightly more powerful machine because I wanted to be               |
| 45:56      | able to do lots of things with data tracking. But the idea is that you run a small server                |
| 46:02      | of yourself that can manage this sort of thing, just like [[HomeKit]] can with automations and               |
| 46:07      | so on, but you can connect a number of different devices to it.                                          |
| 46:10      | Yeah, and it feels to me kind of like it's halfway between Homebridge and [[HomeKit]] in                     |
| 46:15      | some ways because you get their device and then you can put it on a Raspberry Pi, but                    |
| 46:20      | you can also just buy a premade box. In fact, I've got one on order because we're going                  |
| 46:24      | to do a show on this at some point, but they're pretty slow to deliver. I'm not sure when                |
| 46:29      | mine's coming. Someday it's just going to show up, but I have a home assistant yellow                    |
| 46:33      | on order. But then it gives you a web interface where you can have much more granular kind               |
| 46:43      | of home automation rules. Is that fair summary?                                                          |
| 46:45      | Yes.                                                                                                     |
| 46:46      | Okay.                                                                                                    |
| 46:47      | So it's not just home automation rules, but it's also a lot of the things that you can                   |
| 46:52      | do with [[Home Assistant]], you would probably struggle to do with just [[HomeKit]] or even [[HomeKit]]              |
| 47:01      | and Homebridge. So for example, I have a smart heating that came with my house. I just had               |
| 47:07      | to buy a hub to talk to it, but there is no plug-in for this for [[HomeKit]], for a Homebridge               |
| 47:14      | at all. I looked and I looked at trying to create one and it would have been quite frankly               |
| 47:19      | a bit of a nightmare. And then I looked in [[Home Assistant]] and there wasn't a plug-in                     |
| 47:24      | that somebody had made. They made an add-on. And the difference between the two, I'm not                 |
| 47:29      | going to go into here because it's not important for the terms of the show, but somebody had             |
| 47:33      | made something that I could try and it worked. And basically what they're doing is they're               |
| 47:39      | using a different protocol. It's not like [[Zigbee]], it's a messaging protocol, but they                    |
| 47:47      | can actually talk directly to this. And [[Home Assistant]] itself supports it. So essentially                |
| 47:52      | they're just bridging between the two of those. And that's something they can do because                 |
| 47:57      | [[Home Assistant]] already supports all of this. And that is very nice to be able to do. And                 |
| 48:04      | also [[Home Assistant]] has an API that I can use. So if I want to get nerdy with shortcuts,                 |
| 48:09      | I could, but it's got some pretty good shortcut sections as well. So there are a number of               |
| 48:15      | things that you can do like easily create fake buttons or switches and things like that                  |
| 48:20      | that you might want to use so that your home knows when you're asleep and doesn't turn                   |
| 48:24      | on all the lights every time you roll over in bed. That's very easy to do, whereas you                   |
| 48:28      | would need a series of different Home Bridge plugins and to create automations in the Home               |
| 48:32      | App and then modify them in, say, Home Plus to be able to avoid the lights turning on                    |
| 48:38      | while you're asleep.                                                                                     |
| 48:39      | Well, I mean, I feel like that's the next level for you. The [[Home Assistant]] has changed                  |
| 48:44      | your game for a lot of this stuff.                                                                       |
| 48:47      | Yes. Yes, it has. But I've also very much tried to keep things much the same way they                    |
| 48:52      | were previously because what I had previously generally was working. And what I am attempting            |
| 48:57      | to do is not create 101 problems, but instead to solve the problems that I was having before             |
| 49:03      | I move on to the next thing. So the first problem that I was having was that my washing                  |
| 49:08      | machine and my tumbler I do not beep when they finish. And I did not know that they'd                    |
| 49:11      | finish their cycles and I would forget about laundry. And so I was able to set up energy                 |
| 49:16      | tracking with [[Home Assistant]] and get push notifications when those devices finished,                     |
| 49:20      | which was great. And my next challenge is figuring out what exactly is the correct radius for            |
| 49:26      | me arriving home where I want the lights to turn on, but the lights won't have been on                   |
| 49:29      | for five minutes from walking home.                                                                      |
| 49:32      | Well, good luck with that.                                                                               |
| 49:34      | You're going to have to walk me through. It's going to be a challenge. When mine shows up,               |
| 49:38      | you have to walk me through because it's new to me, but I am super interested in the ability             |
| 49:42      | to add more conditions to my rules and make home automation more powerful. I think [[Apple]]                 |
| 49:47      | is actually doing a pretty good job with [[HomeKit]], but it also is kind of the least common denominator.   |
| 49:52      | You know, it'd be nice if you could go further with this. The other thing [[Home Assistant]] looks           |
| 49:56      | like it's going to give me is the ability to use devices that aren't made for [[HomeKit]],                   |
| 50:00      | which will be nice.                                                                                      |
| 50:01      | Yeah, yeah. It is great that you can do that. So I have a smart smoke detector, but there                |
| 50:08      | are I think the only smart smoke detector available in the UK is the Netatmo one, which                  |
| 50:11      | is fairly pricey. I bought a 10 pound [[Zigbee]] smart smoke detector and it works exactly                |
| 50:18      | the same way as a regular smart smoke detector, except I also paired it to [[Home Assistant]] and            |
| 50:22      | shared it to [[HomeKit]] and I attempted to test it. It was really difficult. Like I had to                  |
| 50:29      | actually have to set several light several candles underneath it and close a bunch of                    |
| 50:35      | doors to trigger it, but it works exactly the same way you would expect a [[HomeKit]] one                    |
| 50:39      | to do. I got a push notification to my phone. So I was really, really pleased about that                 |
| 50:45      | and it was only 10 pounds versus I think it was 60 or 80 pounds for the Netatmo one.                     |
| 50:50      | So there can be quite a price difference, but it does come with a bit of a trade off                     |
| 50:54      | of you have to install [[Home Assistant]] on something or buy [[Home Assistant]] blue or yellow. I've            |
| 50:59      | think blue is not available in the US anymore and yellow is only on pre-order right now,                 |
| 51:03      | but it does give you a great interface for editing automations, which for me is definitely               |
| 51:10      | something I'm very excited by.                                                                           |
| 51:12      | Now, you're also, I guess, at war against your hubs, right?                                              |
| 51:16      | Yeah. Yeah, I kind of am. So originally I bought the [[Aqara Hub#M1S (Gen 1)\|Aqara M1S]], which is a round, white                  |
| 51:24      | round plug, which kind of looks like a doorbell chime, because it also functions as a doorbell           |
| 51:29      | chime with a light around it that you just plug into the wall and it's Wi-Fi. And at                     |
| 51:35      | the time, I thought, 32 devices? I'm not going to hit 32 devices. Editor, note, Rose                     |
| 51:43      | hit 32 devices much quicker than Rose had anticipated. Surprise. And so I ended up needing               |
| 51:50      | another [[Aqara Hub]]. And so I bought the [[Aqara Hub#M2\|Aqara M2 hub]], and the [[Aqara Hub#M2\|Aqara M2 hub]] is great, but                  |
| 51:56      | migrating things between the devices or between the hubs started breaking some of my automations.        |
| 52:03      | And it was at this point that I had already bought a [[Zigbee]] dongle for [[Home Assistant]] because            |
| 52:07      | I wanted to try the smart smoke detector because I was, I got woken up at three o'clock in               |
| 52:13      | the morning by the smoke detector going, beep, I'm running out of battery, beep, I'm running             |
| 52:17      | out of battery, which is everybody's worst nightmare. So being able to check the battery                 |
| 52:21      | level from [[HomeKit]] and [[Home Assistant]] is really useful. And so I bought this dongle                     |
| 52:26      | and I thought, you know, if I'm moving things from one device to another, why don't I just               |
| 52:32      | try pairing the [[Aqara]] stuff straight into [[Home Assistant]]? And it worked. It worked really,               |
| 52:38      | really well. And then I realised that I could get a bit nerdier and combine two devices so                |
| 52:45      | that if both the motion sensors on my chair notice something, then actually, or if either                |
| 52:51      | motion sensor on my chair notices something in my office, then that appears as motion                    |
| 52:56      | in my office. And that then gets shared as one thing.                                                    |
| 52:59      | Wait, wait, wait, gross. Two motion sensors on your chair?                                               |
| 53:03      | Yeah, I decided to experiment because I realised that basically whichever way I put a motion             |
| 53:10      | sensor on my chair, there's a chance that it won't notice how I'm moving because I either                |
| 53:15      | move from side to side or I move backwards and forwards. And depending on how I've got                   |
| 53:21      | my chair set up, it may not notice one of the movements. So for example, if I just lean                  |
| 53:26      | backwards a little bit, then the seat itself doesn't move because I've got a really great                |
| 53:29      | chair. But if I just move from side to side, the back doesn't move or it does, but it does               |
| 53:36      | not move enough. So I played with a bunch of different options and I decided that I                      |
| 53:40      | was going to try because I bought another vibration sensor sticking another one on there.                |
| 53:48      | And yeah, so I now have two sensors on my chair, David. That was not planned, but it's                   |
| 53:53      | working really, really well.                                                                             |
| 53:55      | That is one of the reasons why you're one of my favourite people, Rose, that you put two                  |
| 54:00      | motion sensors on your chair. I love that.                                                               |
| 54:03      | Well, then what I did is I combined them through [[Home Assistant]] so that they just show up as             |
| 54:07      | one. So if either of them sees movement, then it just shows up as my office chair is occupied            |
| 54:15      | because I set it to occupied versus not occupied. But I've combined the two of them because              |
| 54:20      | in [[HomeKit]], I don't want to see whether or not one of them, the seat or the back, has                    |
| 54:26      | detected motion. I don't care about that. And then I took it a step further and went,                    |
| 54:30      | literally, I don't care about the other motion sensors in my office either. I just care about            |
| 54:34      | whether or not my office is occupied. And I combined all of them into an office occupancy                |
| 54:39      | sensor, which I use to control lights. And then I combined my computer into that as well.                |
| 54:45      | So if my computer is on, then it considers my office to be occupied because I will be                    |
| 54:52      | most likely sitting here at it or coming back briefly because it will go to sleep relatively             |
| 54:57      | quickly.                                                                                                 |
| 54:58      | Okay. So now I just want to know when my [[Home Assistant]] yellow is going to ship. That's                  |
| 55:03      | all I want to know.                                                                                      |
| 55:04      | I mean, probably quite soon. I don't know. I don't remember exactly when it's going                      |
| 55:09      | to ship. I should note for anybody who's going, oh, that sounds interesting. The [[Home Assistant]]          |
| 55:14      | docs are really good. And they've got full install guides for everybody. So if you have                  |
| 55:19      | a Raspberry Pi at home already, you could install [[Home Assistant]] on it and have a play.                  |
| 55:26      | And that's what I did with [[Home Assistant]] operating system. And it worked really, really well            |
| 55:31      | for me.                                                                                                  |
| 55:32      | I should do that.                                                                                        |
| 55:33      | I'm really enjoying it.                                                                                  |
| 55:34      | But since I've already ordered this one, I think I'm just going to wait. But yeah.                       |
| 55:37      | Yeah.                                                                                                    |
| 55:38      | Now, when are you shipping? This all sounds like fun.                                                    |
| 55:42      | It is a lot of fun. And it's also pretty nice to be able to shop from a much wider array                 |
| 55:48      | of smart home devices than are just available to [[HomeKit]]. So for example, when I got my                  |
| 55:54      | Yale locks here in the UK, Yale didn't have a [[HomeKit]] hub out. It just wasn't an option.                 |
| 56:02      | But they did have Z-Wave plug-ins that you could put inside the devices. And I could                     |
| 56:08      | have bought, I think, as a Z-Wave hub from them, but that wasn't a [[HomeKit]] compatible.                   |
| 56:13      | But [[Home Assistant]] can share things into [[HomeKit]]. And so I bought a Z-Wave dongle for a Home             |
| 56:18      | Assistant. That was the original reason for me getting into [[Home Assistant]] properly and                  |
| 56:24      | trying it really was because I wanted to get smart door locks and I wanted them in [[HomeKit]].              |
| 56:30      | So I bought a Z-Wave dongle and mine's an Aeotec, I believe it is, and plugged that                      |
| 56:36      | into [[Home Assistant]]. And then I paired my Yale locks to it. And I got a push notification                |
| 56:43      | just five minutes ago saying, hey, your door lock battery is running low. You probably                   |
| 56:47      | want to fix that. So I will go after the show and replace the batteries in my door lock.                 |
| 56:51      | But that set got me smart door locks and it got me [[HomeKit]] compatible smart door locks                   |
| 56:58      | that I can control with Siri. And that's how I usually unlock my doors. But I didn't have                |
| 57:05      | to wait for Yale to finally release a door lock because one of the doors I wanted to                     |
| 57:11      | control is a multi-point lock where you have to lift the handle to engage the lock before                |
| 57:15      | you can lock it. And there aren't that many locks which are compatible with that. And                    |
| 57:22      | a lot of the smart locks that you can get would just try to lock if the door was closed,                 |
| 57:26      | which will not work with a multi-point lock. And so I really wanted something that would                 |
| 57:30      | work and if I was getting one Yale lock, I figured get two because then both of them                     |
| 57:34      | will pair. And I'm really, really pleased with them, I have to say, and it works really,                 |
| 57:39      | really well.                                                                                             |
| 57:40      | So where do you draw the line between [[Home Assistant]] stuff and [[HomeKit]] stuff?                            |
| 57:45      | I don't really. I try to look at what is the best solution because if I can get it into                  |
| 57:52      | [[Home Assistant]], I can get it back into [[HomeKit]]. And if it's something that's [[HomeKit]] only,               |
| 57:58      | I can actually pair it into [[Home Assistant]] because [[Home Assistant]] has the ability                        |
| 58:02      | to pretend to be [[HomeKit]], essentially. So I actually have an air purifier that I bought                  |
| 58:08      | before I got into [[Home Assistant]]. And it took a while to arrive. It was not Kickstarter.                 |
| 58:14      | The other one, Indiegogo, is an Indiegogo project. And it's a lovely air purifier. It's                  |
| 58:20      | very swish, fancy designer, all sorts of things. But it is [[HomeKit]], not any kind of local protocol,      |
| 58:27      | except for that. But I was able to get it into [[Home Assistant]] through [[HomeKit]] and then I can             |
| 58:33      | control all of my air purifiers in one place. And I didn't have to do that, but I did it                 |
| 58:40      | because I was curious. And it's quite nice to be able to look at a view just for my living room          |
| 58:46      | and see the air purifier for that room. Whereas if I look at the bedroom view, I see the air             |
| 58:50      | purifier in that room, which wasn't [[HomeKit]] compatible. It's a Tuya one. But I have the                  |
| 58:57      | best of all of the worlds, essentially, because if I want to do something in [[HomeKit]],                    |
| 59:01      | I can do it because I can share everything back to [[HomeKit]]. But if [[Home Assistant]] is going to            |
| 59:05      | be the easiest way to solve a problem, or the best way to solve the problem because it will              |
| 59:10      | allow me to extend it, then I can solve it there as well. So pretend you live with people who are        |
| 59:15      | not as nerdy as you. Yeah. Are they able to get into [[HomeKit]] to see the rules? I mean,                   |
| 59:20      | can you live with somebody else is I guess what I'm asking, like with [[HomeKit]]? Well,                     |
| 59:24      | I guess the question is, why do they need to see the rules? Yeah. Because [[Home Assistant]],                |
| 59:30      | everybody can have their own account, and it's got an iOS app, it's got an [[Apple Watch]] app.              |
| 59:36      | And so they can log in. And if you share things with them, like the automations and so on,               |
| 59:42      | you give them access to it, then they'll be able to see and edit all of those things.                    |
| 59:46      | The same as you can share that access through [[HomeKit]]. But ideally, my aim for every setup is            |
| 59:52      | that I create it in such a way that it should just do what you expect without you needing to do          |
| 01:00:00   | anything. So you walk into the bathroom and the light turns on. And very occasionally,                   |
| 01:00:04   | while I'm debugging things or setting something up, that might not be the case. But if that's            |
| 01:00:08   | the case, either don't invite people over or I turn that off and revert it to a manual control           |
| 01:00:14   | while those people are here. And then I turn it back on and continue tweaking afterwards.                |
| 01:00:18   | And as I asked the question I'm thinking, yeah, with my house, like my wife and kids access,             |
| 01:00:24   | the individual switches, like they'll tap the button to turn the kitchen lights on.                      |
| 01:00:28   | But they're not going to be doing the automation stuff. They either just benefit from it,                |
| 01:00:33   | or they suffer from it if I don't do it right.                                                           |
| 01:00:36   | Yes, yes. And hopefully with the freaking complaints of it's not working. Because otherwise,             |
| 01:00:41   | you might not know it's not working for them. But yes, my aim is really try to make the magic            |
| 01:00:47   | happen so that it does just do the thing without needing to tap the buttons and do things. So            |
| 01:00:54   | if I walk into my hallway during the day when it's quite light, it will turn on the light                |
| 01:00:57   | dimly. And if it's the middle of the night when I have been asleep because I've got to go to the         |
| 01:01:01   | bathroom, again, the lights in the hallway are dim. But aside from that, within half an hour of          |
| 01:01:06   | sunset, up until it gets bright enough in the morning, it will turn on the lights to be fully            |
| 01:01:12   | bright. And that's yet to confuse my parents when they come over and visit. And I think they're          |
| 01:01:18   | fairly good barometer for, you know, does this thing do what you would expect? They walk into a          |
| 01:01:26   | room and it provides the amount of light that they need. And, you know, the bathroom is on               |
| 01:01:31   | and off the light in there is either on or it's off. But if you go in there and then you close           |
| 01:01:37   | the door, it will leave the light on until you've opened the door and left. Because the last thing       |
| 01:01:42   | you want is the light turning off in the middle of a shower.                                             |
| 01:01:46   | This episode of Automated is brought to you by DEVONthink, the flagship product from Devon              |
| 01:01:49   | Technologies. DEVONthink is the most professional document and information management application       |
| 01:01:54   | for the Mac. It's the one place for storing all your documents, snippets, all bookmarks,                 |
| 01:01:58   | and working with them. The integrated AI assists you with filing and searching,                          |
| 01:02:01   | while the extensive search language with advanced billion-search operators makes sure                    |
| 01:02:05   | you're never looking for something and not finding it. DEVONthink features a flexible                   |
| 01:02:09   | sync system that supports many cloud services or lets you synchronise over the local network too         |
| 01:02:14   | with everything securely encrypted. It secures you the choice for however syncing works best for         |
| 01:02:18   | you. It has smart rules and flexible reminders that let you automate all parts of your workflow          |
| 01:02:23   | and delegate boring repeating tasks. Let DEVONthink automatically organise your data with rules         |
| 01:02:28   | you define. DEVONthink's [[AppleScript Dictionary is one of the largest on the Mac. There's no           |
| 01:02:32   | part of DEVONthink that can't be automated. Except when [[DEVONthink's functionality with                |
| 01:02:36   | your own commands by adding them into a scripts menu. Even templates can have scripts inside             |
| 01:02:40   | and you can set up new documents from data with placeholders or inserted by your own [[AppleScript]]        |
| 01:02:45   | Code. And of course there's so much more from an iOS companion app to email archiving, scanning,         |
| 01:02:50   | or even an embedded web server for sharing your data securely with your team. I did mention earlier      |
| 01:02:55   | on the show that I personally use and love DEVONthink and I would say that even if they weren't         |
| 01:02:59   | sponsoring today's episode, but one of the features I've been using recently is the Convert              |
| 01:03:03   | File feature. Because DEVONthink automatically imports email and with Convert File you can              |
| 01:03:08   | actually convert it to a PDF. Yup, so my emails get imported and converted into PDFs automatically.      |
| 01:03:14   | Perfect for accounting. So if you think that you need somewhere where you can organise your files        |
| 01:03:19   | and easily find them, and maybe even convert some documents, check out DEVONthink. You can get 10%      |
| 01:03:24   | of [[DEVONthink]] 3 or upgrade to it right now. Just go to devontechnologies.com/automators.          |
| 01:03:29   | That's devontechnologies.com/automators for 10% off. Our thanks to Devon Technologies for          |
| 01:03:34   | their support of this show and all of Relay FM. So Rose, you've got a lot of great automations,          |
| 01:03:40   | but what about dealing with applications that don't want to automate, you know,                          |
| 01:03:45   | that they're out there, apps that don't have hooks for all the various automation platforms              |
| 01:03:49   | you like? How do you deal with those? Yeah, so there's been a reasonable amount of this recently         |
| 01:03:56   | where I've been just dealing with weird things that don't do what I want them to do. And a lot           |
| 01:04:03   | of what I have done is dig around until I find a way to fix the problem. Now in one particular case      |
| 01:04:10   | it ended up actually with Rose goes and uses a different application because I was trying                |
| 01:04:15   | to get the terminal to open in three windows and do three different things. And I wanted those           |
| 01:04:22   | windows positioned in a different way. And I could get terminal to open three windows.                   |
| 01:04:28   | And I could get them positioned, but getting the correct one to do the correct command                   |
| 01:04:34   | was not working for me. So I ended up switching to item. But a lot of what I've been doing recently,     |
| 01:04:39   | it has been a little bit of [[AppleScript]] where possible or where necessary, maybe text expansion         |
| 01:04:46   | in a few places and [[Keyboard Maestro]] just stepping in and rescuing me in all the places where usually    |
| 01:04:53   | this thing would be disabled. But actually in this particular scenario, I wanted to happen. So           |
| 01:04:58   | [[Keyboard Maestro]] bridges a gap to make magic. Can you give me an example? Yeah, so I don't use text      |
| 01:05:06   | expansion when I'm programming. I say I don't use text expansion. That's not strictly true.              |
| 01:05:11   | I don't use my standard text expansion. So my standard text expansion I've got mostly in             |
| 01:05:18   | TextExpander. But there's also some things in [[Alfred]], because that was a fun experiment and why not.         |
| 01:05:26   | And there's the odd thing in [[Keyboard Maestro]]. But the ones in TextExpander and the ones in             |
| 01:05:31   | [[Alfred]] do not run in my development applications, just because they will end up accidentally interfering |
| 01:05:39   | with what I'm doing in various ways. Now, the programs that I use themselves, they do have               |
| 01:05:45   | text expansion, they've got autocomplete, things like that. But there are certain things that I          |
| 01:05:50   | do want available, but only in those applications. But I don't have every app. So for example,           |
| 01:05:58   | my work machine, I don't have TextExpander installed. There's a number of reasons for that.             |
| 01:06:03   | But it's just something that because I'm not writing words, I didn't feel like I needed a lot            |
| 01:06:08   | of the time. But I did need some text expansion. So I have [[Keyboard Maestro]] run some macros only         |
| 01:06:18   | in those applications. And I've got some smart groups that are just for my development applications.     |
| 01:06:24   | But it's even smarter than that in that it looks at the name of the window, and it checks what the       |
| 01:06:29   | file extension is in the name of the window. And then if it's a PHP file, it will do one thing.          |
| 01:06:36   | And if it's a [[JavaScript]] file, it will do a different thing and so on and so forth so that               |
| 01:06:40   | I can type whatever my magic incantation is. And I get exactly the right result for whatever          |
| 01:06:46   | language I'm programming in, which is I think something I would have struggled to do with                |
| 01:06:51   | just playing text expansion. But I was really pleased to be able to sort that out with keyboard          |
| 01:06:55   | maestro. Yeah. I mean, [[Keyboard Maestro]] does come to the rescue so often, doesn't it?                    |
| 01:07:00   | Yeah. Yeah. It was one of those things where I was so nearly there. And then I remembered                |
| 01:07:05   | the [[Keyboard Maestro]] can get the name of the window. And that was the bit that just made                 |
| 01:07:11   | everything click. Because once I figured that out, I figured out not only my text expansions,            |
| 01:07:16   | but also when I hit save, I needed to do a particular sequence events. I need to activate                |
| 01:07:22   | the terminal or iTerm as it is now so that I can actually look and see the thing and make sure           |
| 01:07:27   | that everything's compiling. And then if that's fine, then I can go over to [[Firefox]] and refresh          |
| 01:07:32   | the page. But I don't want that to happen when I'm editing certain files. And so because I can           |
| 01:07:39   | check which files I'm editing, thanks to the property, which is the title of the window,                 |
| 01:07:45   | I can make different magic happen. And that was one of those things where, yeah,                         |
| 01:07:52   | I really had one puzzle piece fall into place and realised, wow, yeah, this is incredibly                |
| 01:07:59   | powerful. Because I was able to reuse that with [[Audio Hijack]]. Because [[Audio Hijack]] by session has        |
| 01:08:06   | the name. And so if it's automators in the name, it's now going to do automators magic. Whereas          |
| 01:08:12   | if it says nested folders, it'll do nested folders magic and so on and so forth. So it's                 |
| 01:08:16   | mostly been [[Keyboard Maestro]] to the rescue. But there has been a little help with iTerm as well.         |
| 01:08:22   | Okay, you want me to blow your mind a little bit? Maybe you already know this.                           |
| 01:08:26   | There's a cool plugin for [[Obsidian]] called custom window title, very simple plugin,                       |
| 01:08:32   | takes the name of the current note and puts it in the title of the window. And suddenly,                 |
| 01:08:37   | once it's in the title of the window that opens up all these automation possibilities                    |
| 01:08:42   | when I'm working in a [[Obsidian]] note that has the word automators in the title.                           |
| 01:08:47   | Or that also the way I use that is with the timing app, the timing app that is time tracking.            |
| 01:08:54   | Now it tracks time based on that window. It doesn't just say time in [[Obsidian]]. It'll say                 |
| 01:09:00   | time on the automators file. And so it's like, it's like once you change the name of the window          |
| 01:09:05   | title, it opens up automation possibilities with something like [[Keyboard Maestro]]. It's pretty            |
| 01:09:09   | cool. Anyway, it's a very small plugin. And it's currently version 0.3.3. I don't even know what         |
| 01:09:17   | that means. Wouldn't it be version one if it's out? But I don't know. It might just be that              |
| 01:09:23   | it's the developer considers it's so small that he's not or she's not given it a 1.0 yet,                |
| 01:09:30   | or there's also features that they've not yet made. Yeah, well, either way,                              |
| 01:09:34   | it's a great little plugin that I'm running it. And that might help you if you want to automate          |
| 01:09:39   | some of that. Like based on opening an [[Obsidian]] document, you could trigger that automation.             |
| 01:09:44   | Yes, yes. That is definitely something that I will be looking into. It's one of those things.            |
| 01:09:52   | I do automate a lot of things around [[Obsidian]], but it's mostly the creation of documents in              |
| 01:09:57   | folders and things like that rather than actually going into and reading things out of it just yet.      |
| 01:10:04   | Maybe that needs to be a feature show. I've done some work there.                                        |
| 01:10:08   | So maybe that's something we'll talk about one day. Well, that is definitely something I will be         |
| 01:10:14   | looking for. Another thing that I've been playing with is there are some great menu bar apps and         |
| 01:10:22   | [[Safari]] extensions on the Mac, which have been solving a number of different problems for me.             |
| 01:10:28   | So one of them is, and I'm now going to get this wrong because it's gone and hidden from me,             |
| 01:10:33   | the name of the application. It's the little house with the lightning icon in it in my menu bar,         |
| 01:10:38   | and it's called [[HomeControl Menu for HomeKit\|HomeControl]]. That's one. And [[HomeControl Menu for HomeKit\|HomeControl]] gives me all of the devices, scenes,          |
| 01:10:45   | groups, smart group, sensors, etc. from [[HomeKit]] in my menu bar so that when I click on it,               |
| 01:10:52   | I can see all of those things. I should mention that [[Home Assistant]] does also have an application        |
| 01:10:57   | for the Mac, and that's good. It works really well and it gets a bunch of sensors into it,               |
| 01:11:03   | but for a lot of the things that I'm doing where I just want specific scenes,                            |
| 01:11:08   | it's pretty great to just click and be able to go blind, set to closed or open or turn this light        |
| 01:11:15   | on or turn this light off and things like that without having to open the application,                   |
| 01:11:19   | which has been very helpful. And this also has an automation option where you can get                    |
| 01:11:25   | a [[URL Schemes\|URL scheme]] for each individual item or scene or device and run that through something else so          |
| 01:11:33   | you can integrate smart home scenes into [[Keyboard Maestro]] without having to run an entire shortcut       |
| 01:11:41   | just to set a smart home scene because the Home app for some reason is still really not                  |
| 01:11:46   | automatable on macOS. I really don't know what's going on there. Of course, I can do it on iOS,          |
| 01:11:51   | but having all of the options everywhere is something that I am hoping to have when it                   |
| 01:11:57   | comes to a lot of these automation possibilities. No, I agree. And of course, that's the trick to        |
| 01:12:02   | get it into your [[Stream Deck]] as well. Because once you have a URL, then only can you trigger it          |
| 01:12:08   | from [[Keyboard Maestro]], you can insert the URL into a [[Stream Deck]] button, which is kind of fun.           |
| 01:12:14   | Exactly, yes. And it is really useful for that. I've been enjoying it. There's                           |
| 01:12:21   | a couple of [[Safari]] extensions. You mentioned Home Safe before. It's not really an automation option,     |
| 01:12:27   | but it does allow me to get the image from the Key Image from a web page, which can be really            |
| 01:12:33   | helpful when I'm building a shopping list for a store that I'm going to go to so I actually have         |
| 01:12:37   | a picture of the thing that I'm looking for. But one that I have only found out about recently,          |
| 01:12:43   | but is really cool is URL linker. And it's, I think it was $199 or even free in the Mac app              |
| 01:12:50   | store. But it means that when I right click on any page in [[Safari]], I can copy the URL,                   |
| 01:12:58   | but then I can set up preferences. So because it copies as markdown format. So you get your              |
| 01:13:05   | square brackets, the title of the page, round brackets, URL, but you can have, you can add               |
| 01:13:10   | your own formats. So if you need a different format, so say for example, you're on one particular        |
| 01:13:16   | page and you always want to copy it with a prefix, then you can create a format for that. And you've     |
| 01:13:22   | just got title and URL parameters, and you can use that anywhere. And it's a very simple                 |
| 01:13:28   | application, but it really does make it very easy to just copy whatever I need as a markdown link,       |
| 01:13:35   | because most of the time I'm writing a markdown, but I can also do it with HTML,                         |
| 01:13:38   | which is something that I've been using at work.                                                         |
| 01:13:40   | Well, what are some other ways you get around apps that don't want to automate?                          |
| 01:13:46   | I mean, there is the good old fashioned keep, keep a sure click at image. But one other thing            |
| 01:13:52   | that I have been doing recently is I have two applications at work that really don't want to             |
| 01:13:58   | talk to each other. The system where I can book my holiday and my calendar. And my calendar,             |
| 01:14:03   | I can work around because it's on my Mac. The system where I book my holiday, it's a web system,         |
| 01:14:09   | and it doesn't play ball. But I found that there is a way to get an ICS file out of it.                  |
| 01:14:17   | But the URL is hidden. So I ended up creating a [[Keyboard Maestro]] macro that takes the URL                |
| 01:14:23   | of the [[Safari]] page, and it reworks it a little bit, it replaces some text, and then it opens a new       |
| 01:14:30   | URL, which will then have automatically download the ICS file, which was really, really helpful,         |
| 01:14:36   | until they finally figured it out. And then three weeks later, they added the button. So I can do        |
| 01:14:43   | it directly. But that was a way around that because I went through their documentation and I asked,      |
| 01:14:48   | and somebody said, well, here's the URL for this. And I was able to look at the two URLs that I had      |
| 01:14:54   | and figure out what the difference was and just replace things until it worked. So that was quite        |
| 01:14:59   | helpful. So being able to create a [[Keyboard Maestro]] macro that didn't click at an image,                 |
| 01:15:03   | and I could have done it with shortcuts, and maybe I should have because it would have got the front     |
| 01:15:07   | most [[Safari]] window. But I do use [[Firefox]] and [[Google Chrome\|Chrome]] as well at work because I'm a web developer,         |
| 01:15:12   | and I have to use all the browsers. Now, talking to you, I get the impression that,                      |
| 01:15:18   | like, when you have to, like, roll up your sleeves for an automation that you generally                  |
| 01:15:22   | are using [[JavaScript]], as opposed to [[AppleScript]], what is the balance for you between [[AppleScript]]         |
| 01:15:28   | and other languages? I mean, it really depends. Honestly, if I'm actually going to be writing            |
| 01:15:34   | a script to automate something on the Mac, I am not going to use [[JavaScript]]. [[JavaScript]] for              |
| 01:15:39   | automation is one of those things that was a lovely idea. And when I say JavaScript for                  |
| 01:15:43   | automation, I'm talking specifically the [[JavaScript]] version of [[AppleScript]], not [[JavaScript]], as you       |
| 01:15:48   | would find it in [[Drafts]] or similar. But it was a wonderful idea. And I love what they were going         |
| 01:15:54   | for. But somehow, it just does not have all the same event hooks as [[AppleScript]], which means that        |
| 01:16:02   | you can write the same script in [[AppleScript]] and [[JavaScript]]. And the [[AppleScript]] one will work           |
| 01:16:08   | consistently. And the [[JavaScript]] one will just sometimes randomly stop or miss something or not          |
| 01:16:14   | be triggered or not do something that you would expect. And I don't know why that is. I've talked        |
| 01:16:19   | to a number of different people. And essentially, the running theory appears to be that it didn't        |
| 01:16:24   | quite get hooked up in all the same places. And so therefore, it sometimes just doesn't work,            |
| 01:16:30   | which is a real shame. So I am using [[AppleScript]] for anything very specifically Mac. But where I'm       |
| 01:16:38   | doing something that will be multi-platform, where I want it on my iPhone as well, I will go             |
| 01:16:43   | with [[JavaScript]] because I can write [[JavaScript]] and use it in [[Drafts]]. I can use it in [[Obsidian]].           |
| 01:16:47   | I can use it in Scriptable. I could use it in the browser. And I can use it on my Mac or my iPhone       |
| 01:16:52   | or my iPad, which means that it works anywhere, which is really, really nice. Because the last           |
| 01:16:59   | thing I want is to sit down and go, oh, yeah, I wanted to do this. Oh, now I need my Mac. Right.         |
| 01:17:06   | Yeah. No, that's not happening. I feel like I'm doing more [[AppleScript]] than I have in a while            |
| 01:17:11   | because of the [[Apple Silicon]] Macs. And they have an all day battery. And like all of a sudden, I'm       |
| 01:17:18   | doing less work on the iPad. So I don't mind having Mac only automation. And [[AppleScript]] for Mac is      |
| 01:17:25   | so good. I mean, there's so many apps that are really hooked into it. So you can do a lot of cool        |
| 01:17:30   | stuff with [[AppleScript]]. But I don't know that that's the long term play. What do you think is the        |
| 01:17:36   | long term play from [[Apple]]? I mean, so clearly [[Shortcuts]], they've said is the future and they're          |
| 01:17:42   | going to try and do more shortcut stuff. But are they going to have an [[AppleScript]] like language         |
| 01:17:49   | that goes across all their platforms? I mean, I've heard people speculate that they think [[SwiftUI]]       |
| 01:17:55   | is going to have an automation version that that's the plan. But I don't know. I mean, what do you       |
| 01:18:01   | think? I mean, [[Swift]] is an automation language, definitely would have a lot of advantages.               |
| 01:18:07   | It's already on all of [[Apple\|Apple's]] platforms. [[SwiftUI]], the framework, is not necessarily the right          |
| 01:18:15   | thing. I misspoke there. I'm sorry, [[Swift]], not [[SwiftUI]], yes. Yeah. And [[Swift]] has got a lot of           |
| 01:18:20   | advantages to it. It is perhaps a bit trickier for people who are familiar with some other programming   |
| 01:18:29   | languages, but are not necessarily developers, because there are some certain things that are            |
| 01:18:33   | flipped. So for example, in [[JavaScript]], if you create a variable and you want it to be a constant        |
| 01:18:41   | variable, you create it with the name const. And if you want something that's flexible, you use let.     |
| 01:18:46   | If you use the word let in [[Swift]], that is a constant. And so just things like that will trip             |
| 01:18:51   | up people who are a bit newer to language, which is a bit of a shame, perhaps, but also, you know,       |
| 01:18:56   | there's reasons behind why they've created [[Swift]], the way they've created it. And it's an                |
| 01:19:01   | incredibly powerful language. So it would be lovely. But I feel like maybe because [[JavaScript]]            |
| 01:19:08   | was already on every device as something that, for example, agile torches could just bundle              |
| 01:19:14   | into [[Drafts]] and expose to people. And it's used in [[Obsidian]] and other things. It's                       |
| 01:19:22   | perhaps accidentally gained a lot of momentum as an automation language.                                 |
| 01:19:29   | And I feel like [[Apple]] would probably be missing out on something quite amazing if they                   |
| 01:19:36   | bucked the trend and said, no, no, no, no, no, no, like [[Swift]] is the future. [[Swift]] is the future         |
| 01:19:40   | here. They can do that when it comes to development, because the developers don't really have a choice.  |
| 01:19:46   | If they want to develop for [[Apple]] platforms, then it's objective to see or [[Swift]]. But when it comes      |
| 01:19:53   | to automation languages, you know, the Omni Group have spent a lot of time creating Omni                 |
| 01:19:59   | Automation with [[Sal Soghoian]] for all of their apps, agile torches has got everything. You know,           |
| 01:20:05   | [[Simon Støvring]] created Scriptable, created Scriptable, which essentially bridges a ton of [[Swift]]          |
| 01:20:11   | into [[JavaScript]]. You know, [[Apple]] could do that. They could say, no, no, no, it's [[Swift]] from now          |
| 01:20:18   | on out. And I'm sure it would do fine. But I think it would end up being more like [[AppleScript]]                 |
| 01:20:25   | in the sense that it's considered a relatively niche, odd thing. The significant[[                  ]]|
| 01:20:34   | advantage for it would be that developers would be able to create a whole bunch of automations to        |
| 01:20:38   | help them as part of their development process, because they're already writing [[Swift]]. But               |
| 01:20:45   | I don't know. I feel like if they're going to do something, they should probably go with                 |
| 01:20:48   | [[JavaScript]], because it's just the one that's there. I mean, they added the action. This was              |
| 01:20:54   | what I was 13 of run [[JavaScript]] on [[Safari]] page, where you can run essentially a bookmarklet              |
| 01:21:00   | on the [[Safari]] web page through shortcuts and then get that information back.                             |
| 01:21:11   | There's the option when they added shortcuts to the Mac, they added a run [[JavaScript]] for Mac             |
| 01:21:18   | automation, along with the run [[AppleScript]] automation. I have a feeling [[AppleScript]] is                 |
| 01:21:22   | probably not going anywhere. But I hope maybe that somebody goes in and has a poke around with           |
| 01:21:29   | [[JavaScript]] for Mac and tries to find some of that weirdness that I've been experiencing.                 |
| 01:21:34   | And I know a lot of other people have as well. I do think that it's probably more work to take           |
| 01:21:38   | [[AppleScript]] out than to just leave it in. So that's probably what they're going to do.                  |
| 01:21:43   | But I hope you're right on [[JavaScript]]. I would like to see a unified scripting language across           |
| 01:21:48   | all [[Apple]] platforms. And I feel like they must have a plan for it. I would hope. And it seems            |
| 01:21:55   | like they hinted at it last year in [[WWDC]] when they talked about how the shortcuts on the Mac             |
| 01:22:02   | is just the beginning. And my fingers are crossed and I'm really hoping that they have got a good        |
| 01:22:09   | answer for that. Yes. So do I. And I do hope that maybe we end up with all the options. Maybe they       |
| 01:22:18   | go in and they fix [[JavaScript]] and add [[Swift]] at the same time. Because that would be pretty amazing.      |
| 01:22:25   | And I have to say, you know, if people ask me, you know, which automation language should I              |
| 01:22:30   | learn, I usually recommend [[JavaScript]] just because it opens up so many more options in so many more      |
| 01:22:36   | apps than [[AppleScript]] does. I mean, [[AppleScript]] is great assuming that you're on the Mac.              |
| 01:22:41   | But our lives are becoming more and more mobile. We're working from home. And, you know, sometimes       |
| 01:22:48   | that does involve working from the sofa or the breakfast bar or wherever ends up being convenient        |
| 01:22:53   | because, you know, unexpected work on your house or guests or something and you just need to get         |
| 01:22:59   | out of the way. Being able to do all of your things everywhere is definitely something that              |
| 01:23:05   | should not be taken for granted. And, you know, especially for those people who've got a desktop,        |
| 01:23:11   | it's, you know, if they're looking at buying another device, it's probably going to be an iPad,          |
| 01:23:16   | not a laptop if they don't feel like they need a laptop 99% of the time, but they would quite            |
| 01:23:21   | like an iPad. So they should be able to do their work on it. And I think adding [[Swift]] as a scripting     |
| 01:23:26   | language on iOS is much less likely than opening up shortcuts some more and giving people some           |
| 01:23:33   | extra [[JavaScript]] that they can run with it. This episode of Automators is brought to you by              |
| 01:23:39   | Hover, one of Relay FM's longest running sponsors. When you have that one big idea,                     |
| 01:23:43   | where do you go? Well, your business starts with a domain name. And so for many entrepreneurs,           |
| 01:23:48   | Hover is that big leap. Hover has over 300 domain extensions to choose from. No matter what you          |
| 01:23:53   | want to build, there's a domain name waiting for it. And they have excellent technical support to        |
| 01:23:57   | answer any questions you may have. And they're dedicated to getting you online, not upselling            |
| 01:24:02   | you. Hover has free who is privacy, so the bad guys don't get all your information. A clean              |
| 01:24:08   | user interface monthly sales on popular top level domains. And it's easy to see why Hover is the         |
| 01:24:14   | popular choice of people starting businesses. I have so many domains that I literally have to go         |
| 01:24:19   | through them in pages. And one time I had a great idea for a website when I was chatting to a friend     |
| 01:24:25   | on the public transport system in Berlin, I was literally able to pull out my phone and buy the          |
| 01:24:30   | domain captainjetset right there. I haven't done anything with it yet, but I've got great plans         |
| 01:24:35   | and, you know, when I eventually get around to them, I've already got the domain. We know you            |
| 01:24:40   | like intuitive user experiences and things that just work straight out of the box. So I know you'll      |
| 01:24:45   | appreciate Hover. The user interface is really simple, clean and easy to navigate. Buy your domain       |
| 01:24:50   | and start using it today. Go to hover.com/automators and get 10% off all new purchases.            |
| 01:24:55   | That URL one more time hover.com/automators. Make a name for yourself with Hover.                  |
| 01:25:01   | Our thanks to Hover for their support with this show and relay FM.                                       |
| 01:25:05   | So there's one place that I benefit from your automation and that is the automation you've put           |
| 01:25:10   | in place to work on show development for automators. I know you've got three podcasts and you put some   |
| 01:25:16   | effort into that. How are you automating podcasting? I don't think anybody is going to be surprised if   |
| 01:25:22   | I say air table. It's the magic word. But essentially, I've got four air table databases                 |
| 01:25:32   | which drive a lot of the podcasting things for me. I have four because iOS today has feedback            |
| 01:25:38   | which gets shared with Micah and I wanted my personal stuff to not end up taking up                      |
| 01:25:44   | all of the feedback base. So I just split those into two separate things. But you and I have             |
| 01:25:49   | got a pretty great air table base which has all of our future episodes in. It's got all of our guests.   |
| 01:25:57   | They're not actually living in the base. We do let them escape occasionally.                             |
| 01:26:01   | I hear the Twitch studios are nice from the last time we let Micah out. But all of these give me         |
| 01:26:07   | a lot of data which I can then access in a lot of other places. So I've been using a lot of Zap here     |
| 01:26:13   | and some of this is migrated to [[Make]] which very recently rebranded from [[Make\|Integromat]].                      |
| 01:26:21   | And those do things like watch certain views and then go great. It's time to create a new show           |
| 01:26:28   | note for automators. I'm going to take this template and I'm going to take this data from air table.     |
| 01:26:32   | I'm going to replace these placeholders in the template with this data and bam,                          |
| 01:26:37   | here is a new show document for you. That's one thing I've been tweaking recently because                |
| 01:26:43   | we had an automators document for a long time which had all the data in but it wasn't very pretty.       |
| 01:26:48   | So I got you to work your magic because I've seen your Mac Power users outline                           |
| 01:26:53   | to make it a lot prettier. It's very useful that both of us can go in and edit all of this data          |
| 01:27:02   | in air table and then it just bam magically appears in the Google Doc in a nice formatted view           |
| 01:27:08   | that we can easily share with our guests. Yeah, it's impressive. And organising Google Doc creation      |
| 01:27:16   | it's not really that much work if you want to try and do it. And there's a lot of ways you can do it.    |
| 01:27:21   | Like you mentioned that [[Make]] slash what was it called before [[Make\|Integromat]]. Yeah,                           |
| 01:27:29   | they've got a nice system in there where you can automate the formation of a Google Doc                  |
| 01:27:34   | with a template and that's what you're using for this one, right? Yes, yes, I am. So there's a           |
| 01:27:41   | template document with placeholders in and placeholders are something that you can set up                |
| 01:27:46   | and it's best to check the documents with whichever automation system you want as to how                 |
| 01:27:51   | those need to be formatted. But I just set the placeholders to be different columns from                 |
| 01:27:58   | air table, which puts the data in the right place really, really easily. And there's static              |
| 01:28:08   | information in there that stays the same from show to show. So that just lives in there and it means     |
| 01:28:13   | that if you want to go in and make an edit to the template, you can do it. And the next template         |
| 01:28:17   | that gets created will be correct rather than having a text file which is converted to HTML,             |
| 01:28:23   | which is shoved into Google Docs, which was the kind of hack that I was using before,                    |
| 01:28:27   | which was okay, but it didn't result in very pretty documents.                                           |
| 01:28:30   | Yeah, I've been playing with the same thing for Mac power users and auto-generating the template and     |
| 01:28:34   | this is not rocket science if you want to do it. I guess that kind of gives me a bigger question is      |
| 01:28:40   | what else are you doing with like [[Make\|Make/Integromat]] and [[Zapier]] and some of the other              |
| 01:28:46   | web tools? What's your involvement with those at this point?                                             |
| 01:28:51   | I mean, there's a whole bunch of things happening that I just don't even think about anymore,            |
| 01:28:57   | because, well, magic just happens and projects appear in OmniFocus or documents appear in                |
| 01:29:05   | Finder or DEVONthink or wherever they need to be and I'm not thinking about it, which is really          |
| 01:29:10   | the magic. So I'm just opening [[Make]] right now to just double check because I know I've got a lot         |
| 01:29:15   | of different things in here, which help me keep track of things. One I've recently done is [[Amazon]]        |
| 01:29:23   | Returns. If I return something to [[Amazon]], this doesn't happen very often. I try to be smart              |
| 01:29:28   | when I buy something, so I'm not constantly doing returns. It's not great for the environment or         |
| 01:29:33   | anything else, but whenever I do an [[Amazon]] return, it grabs that email, that email gets forwarded        |
| 01:29:40   | to it. I use FastMail's rules to forward that to a [[Mailhook\|mailhook]] at [[Make]] and it grabs a bunch of              |
| 01:29:46   | information out of it and adds that as a task or actually a project in [[OmniFocus]]. So I end up with       |
| 01:29:55   | an auto-completing project which will complete with the last item and then inside of it,                 |
| 01:30:02   | it's got print label package item for return and then drop off parcel for return. Only it doesn't        |
| 01:30:08   | just say parcel, it'll actually tell me what the parcel is at all those steps because that               |
| 01:30:13   | information is grabbed out of the email. That has been very useful just because it means that I          |
| 01:30:21   | don't forget and accidentally try and return something too late as very nearly, but fortunately          |
| 01:30:26   | didn't happen before. I thought I had another week to return something and discovered very               |
| 01:30:31   | shortly before the post I was closed that I did not. So fortunately, I was able to make it down          |
| 01:30:35   | there. But what I'm doing with that is I'm just matching text in the email and then I'm calling          |
| 01:30:41   | PushCut and PushCut is adding the [[OmniFocus]] project for me with the information that I need for that.    |
| 01:30:50   | And there's lots of different things that are going on. Whenever I get, there's a tweet about            |
| 01:30:58   | iOS today, I get sent that information in such a way that I can tap on it to retweet and so on           |
| 01:31:06   | and so forth, which I really like. Yeah, I'm trying to use more cloud-based stuff, like                  |
| 01:31:12   | automating the Mac Power users is one that I've been working on lately. What are the                     |
| 01:31:20   | parts of your life you want to automate that you haven't? What are the areas out there?                  |
| 01:31:23   | Where's the blue sky Rose? I mean, laundry, if I could have like a magic machine that just               |
| 01:31:29   | made laundry disappear and then reappear clean, dry, folded and in the drawers or hung up on the         |
| 01:31:35   | hangers, that would be amazing. I did have a very brief Google at one point to see whether or not        |
| 01:31:41   | I could find a machine that would help fold piles of laundry. And the conclusion I came to is they       |
| 01:31:47   | are twice to four times the size of a washing machine, considerably less efficient and very              |
| 01:31:53   | likely to break if they exist. And the only one that I found that seemed to vaguely have information     |
| 01:32:00   | was just, yeah, US only. But there's a lot of things. One of the things that I feel like is              |
| 01:32:07   | totally lacking in automation and really could use it is meal planning and shopping lists from           |
| 01:32:12   | meal planning. Because if I'm going to make spaghetti bolognese, there's a fairly set list               |
| 01:32:18   | of ingredients that I need. And I have briefly started looking into something called Grocy,              |
| 01:32:25   | Grocy, which can help like keep track of what's in your fridge with you and things like that.            |
| 01:32:31   | But I've yet to actually sit down and properly go through and create a list of all the things that       |
| 01:32:36   | I have and start tracking what I'm consuming so that it can add things back to my list when I need       |
| 01:32:41   | to buy them and do meal planning in such a way. And I feel like that's something that's,                 |
| 01:32:47   | once I do it, it'll be, why didn't I do this before? But at the moment, I'm still not there yet.         |
| 01:32:54   | So even Rosemary Orchard has something. She hasn't automated yet.                                        |
| 01:32:59   | Well, if anybody has a complete laundry automation system, then I'm interested. Let me know.             |
| 01:33:05   | Yes, I'm looking for that. Unfortunately, I think the answer to that is either do laundry                |
| 01:33:11   | more frequently. So it's less of a chore or pay somebody else to do my laundry, which they're            |
| 01:33:15   | both valid options. I just need to figure out how much more frequently do I need to do laundry to        |
| 01:33:21   | make this less of a problem. All right. Before we go, we've gone along today. But before we go,          |
| 01:33:26   | let's just take a few minutes to check in on initial impressions of the [[[Stream Deck#Stream Deck Pedal\|Stream Deck Pedal]].               |
| 01:33:30   | Like I've just got mine. I just got it installed and set up. I'll tell you a couple of things I          |
| 01:33:37   | like about it. I like that it's cabled, which sounds weird, but I had been trying a [[Bluetooth]]            |
| 01:33:43   | pedal system and it was constantly turning off or not paired and it just wouldn't stay there. So         |
| 01:33:51   | if you tap on the pedal and nothing happens, then you very quickly lose faith in it. So                  |
| 01:33:57   | as much as it is a pain to run a cable up the desk, it's actually nice because it's just always          |
| 01:34:03   | responsive. Another thing I like about it is that it's got different shapes for the pedals. The          |
| 01:34:09   | other mistake with the one I had before was they were all the exact same shape. So I don't know.         |
| 01:34:13   | Oh, right. Yeah. I was referring to it in the MacSparky Labs video as pedal braille,                    |
| 01:34:17   | but I don't know what the word is, but like with your foot, you can tell where you are without           |
| 01:34:21   | looking at it. And that's a nice feature that they've got on the [[Stream Deck#Stream Deck Pedal\|Stream Deck Pedal]]. They also,           |
| 01:34:27   | you know, because it's Elgato, they did a lot of nice little things like they included additional       |
| 01:34:31   | springs. If you want to make them tighter or looser to press, they even put some rubber                  |
| 01:34:36   | things in there where you can literally like turn the middle pedal off. You can put them in there        |
| 01:34:41   | and make it so you can't press it. So if you've resting your foot on it, but I'm not giving up a         |
| 01:34:46   | third button, right? Oh, no, no, no, no, need all the buttons, definitely all the buttons.               |
| 01:34:52   | And then the other thing I like about it is that it's a [[Stream Deck]], right? So all the stuff I'm         |
| 01:34:56   | doing is [[Stream Deck]], keyboard, maestro scripts, whatever I can now stick on my feet. So my initial      |
| 01:35:01   | impression is this is going to be useful for me. I haven't exactly figured out all the ways I'm          |
| 01:35:06   | going to use it, although I have got a mute button now connected to the centre pedal when I podcast,     |
| 01:35:12   | which is nice. Yes. Yeah, I am really, really liking it, especially because I record iOS today           |
| 01:35:19   | live every week. And we display our devices on screen. It's a podcast with video. So we're               |
| 01:35:26   | displaying our devices as we talk. And so switching between just me on camera versus me and an iPhone    |
| 01:35:33   | or an iPad with me overlaid on top of it, that's something I was doing before with the [[Stream Deck]].      |
| 01:35:40   | But I found, and I need to figure out, I'm going to have to pick your brain David,                       |
| 01:35:44   | the correct way to do this, because I find different profiles on the [[Stream Deck]] tend to                 |
| 01:35:50   | point of a better word, bounce back. So it'll be in whatever profile I've selected. So I'll set it       |
| 01:35:57   | to say the automators profile. And then after a little while, I'll glance down on my screen deck         |
| 01:36:02   | and those buttons that I thought were the buttons in the profile. Yeah, they're actually back to my      |
| 01:36:08   | default buttons in my default profile. And I'm not quite sure why that is. I guess it's because          |
| 01:36:14   | the [[Stream Deck]] doesn't anticipate that you're going to spend an hour and a half                         |
| 01:36:18   | still jumping through different applications, but on the same task. And so it bounces you back to        |
| 01:36:23   | your default. And this is the same sort of thing. I've got it a little bit with the pedal as well.       |
| 01:36:28   | So what I'm doing at the moment, which I need to figure out a much better way off is I'm actually        |
| 01:36:33   | going to open up the [[Stream Deck]] preferences, and I changed my default profile for the pedal             |
| 01:36:39   | for each podcast that I do, so that I've got different buttons available to me. And then when            |
| 01:36:44   | I'm not podcasting, I set it back to my actual default default. Because otherwise, I press the           |
| 01:36:51   | foot pedal, and I had this before where I was pressing buttons. Fortunately, they are buttons            |
| 01:36:56   | that are blank on my default profile, but I press it and nothing would happen. And then I glance         |
| 01:37:01   | down at the [[Stream Deck]] and go, oh, that's because there's no button there. And I now have to open       |
| 01:37:05   | the correct profile while I'm podcasting and trying to do all the other things. So I need to             |
| 01:37:10   | figure out why it's bouncing back or just the correct way to solve this problem.                         |
| 01:37:17   | Yeah. I haven't had that problem yet, but I haven't been using it that long.                             |
| 01:37:21   | One big mistake I made was it prompted me and said, do you want to copy your profiles from               |
| 01:37:27   | your [[Stream Deck]] to your... And I just clicked yes without thinking. Well, of course, I have a           |
| 01:37:32   | [[Stream Deck]] with 30 buttons and then a thing with three buttons. That was really dumb to copy            |
| 01:37:37   | those profiles over. So I'm going to delete them all, which you can do. And if you delete them on        |
| 01:37:42   | the panel, it does not delete them for the [[Stream Deck]]. So I'm going to delete them all and start        |
| 01:37:47   | over. But I think there's something to this, and I just have to figure out, like I was playing with      |
| 01:37:53   | in the MacSparky Labs video where I set up the [[Safari]] to move between tabs with the right or left        |
| 01:37:59   | tab on the thing. You could navigate. That doesn't really make sense. I can do that                      |
| 01:38:04   | just as quickly with my fingers. I don't think I need to put that on my foot. And that's really          |
| 01:38:09   | the thing, right? It's like what goes down to the foot and what doesn't. Podcasting, mute the mic,       |
| 01:38:16   | of course. Like the podcast time stamp stuff, of course. I think [[Zoom]] is another great option            |
| 01:38:23   | for this. Wouldn't it be great if you just mash with your foot that it mutes your mic                    |
| 01:38:27   | or changes cameras or whatever. And so there are things where I think we're on camera or                 |
| 01:38:34   | like in the thick of battle, like we, when we're recording a podcast, I think using your foot makes      |
| 01:38:40   | a lot of sense. There's other things I'm not sure it makes as much sense. But honestly, this thing       |
| 01:38:44   | doesn't have to be useful in every context to pay for. It's great. I mean, I think it's just nice to     |
| 01:38:51   | have it. It is really nice to have it. And I have to say, I didn't think I'd get much mileage out of     |
| 01:38:56   | it at work. I'm a developer. I'm a software developer. And I frequently end up sitting in                |
| 01:39:02   | the weirdest positions despite the fact that I've got an air on, which is designed so that it's          |
| 01:39:07   | really difficult to sit badly in this chair. I still somehow manage it. But I found, actually,           |
| 01:39:13   | it has got quite a bit of utility. I'm going into meeting mode, hit the button with my foot. I don't     |
| 01:39:20   | have to reach down and look at the buttons on my [[Stream Deck]] for that because that's                     |
| 01:39:26   | just a bunch of profile that I want to have available at pretty much any moment. Actually,               |
| 01:39:31   | it's a screen sharing one. I think now that I'm thinking about it that I trigger. But it's really        |
| 01:39:36   | useful to be able to do that or just set all my window layouts back to the normal layout                 |
| 01:39:42   | please. You know, I've been shuffling things around and rearranging them for fixing this problem.        |
| 01:39:47   | I'm now starting on a new problem, just reset everything to the way it should be.                        |
| 01:39:51   | And that's been really handy to have just because I actually enjoy having those things                   |
| 01:39:59   | available without having them take up icons on my [[Stream Deck]], which I try to keep                       |
| 01:40:06   | just to the things that I want to be able to reach down and hit a button. But I'm thinking               |
| 01:40:12   | about which button it is when I hit it, whereas the pedals, I don't think I just tap,                    |
| 01:40:17   | which I think is the difference there for me. Yeah. Yeah. It's early. I think we'll talk about this      |
| 01:40:23   | more. I think both of us are going to do a lot of workflows around it. But my initial impression         |
| 01:40:28   | is I am not sending this back. I think it's cool and I'm going to be using it. And I've tried pedals     |
| 01:40:34   | before. They've never worked, but this one already feels like it's a keeper. Yes. The only time that     |
| 01:40:40   | I've had a problem with it, David, I thought it wasn't working the other day and I was very              |
| 01:40:44   | concerned that my streamed out pedal was just like dead or something. It turns out I've been             |
| 01:40:48   | rearranging my desk and I unplugged the cable. So pro tip, if you unplug it, you need to plug it back    |
| 01:40:54   | in again. Yeah. That does help. If it's plugged in, that does help. Yeah. Yeah. It turns out if          |
| 01:40:58   | it's not plugged in, I kind of wish that there was a like easy way to tell by looking at the device      |
| 01:41:03   | from the very least war I've got it, that it's not plugged in. But also if I'd open the streamed         |
| 01:41:08   | axle for a little bit earlier and checked on the pedal, it would have said not connected. Just like      |
| 01:41:14   | it did when I finally opened it and went, oh, that's why. Yeah. That'll do it. That'll do it. I          |
| 01:41:21   | think it's cool. And I just like all the little touches that I'll got those shipping instead of a        |
| 01:41:26   | six foot or five foot cable to 10 foot cable. And because I have a desk that's a sit stand desk,         |
| 01:41:31   | 10 foot is really kind of the minimum length I need to make it. So it will work when the desk            |
| 01:41:37   | is standing mode or sitting mode. But the cable is long enough. It's like, that's cool.                  |
| 01:41:43   | Yes. And it's a braided cable as well. It's not just one of those really, really cheap cables            |
| 01:41:47   | where the coating will fall off the second you look at it. It's a nice braided one.                      |
| 01:41:51   | Yeah. No, I do like the little touches of Elgato stuff. I feel like I'm becoming like                    |
| 01:41:57   | an Elgato fanboy, but they just, they really do good stuff. I heard from a Mac Power users               |
| 01:42:02   | listener that said Elgato was formed by, I think it was the people that did, I want to say the logic.    |
| 01:42:10   | And then they got into hardware and they've got some former [[Apple]] people there.                          |
| 01:42:14   | Whatever's going on over there. I'm a fan. I mean, like, like I've got their [[XLR]] box now.                |
| 01:42:19   | I've got their mic stand and man, it's just all good quality stuff that you don't regret buying          |
| 01:42:25   | like so much of the stuff these days. All right. Well, that's it. We are the Automators Podcast.         |
| 01:42:32   | I want to thank our friends. We've got several sponsors today helping us out at Electric,                |
| 01:42:36   | TextExpander, DEVONthink and Hover. They help us keep the lights on. Please go check out those          |
| 01:42:41   | links and check out their great products. We now have Automators Max. We're going to be doing that       |
| 01:42:47   | today. Rose is getting into the hardware business or kind of, right? So we're going to talk about        |
| 01:42:53   | that. She's developing her own hardware. I want to hear the story about that. So for Automators Max      |
| 01:42:58   | listeners, you can get that. Thanks for listening. You can find us over at relay.fm slash Automators.    |
| 01:43:03   | You can find the website at Automators.fm and we'll see you next time. Goodbye, Ron.                     |
