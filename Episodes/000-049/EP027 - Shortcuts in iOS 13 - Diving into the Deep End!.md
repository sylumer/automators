---
status: "incomplete"
fc-date:
  year: 2019
  month: 07
  day: 05
fc-category: "podcast"
podcast: "Automators"
published: 2019-07-05
duration: 3696
formattedduration: "01:01:36"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/27"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators027.mp3"
episode: 27
title: "27: Shortcuts in iOS 13 - Diving into the Deep End!"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rose and David throw caution to the wind and install iOS & iPadOS betas on everything. There are crashes and updates, all in the name of finding out just how impressive the new Shortcuts really is.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 027 Discussion](https://talk.automators.fm/t/automators-27-shortcuts-in-ios-13-diving-into-the-deep-end/5123)

# Sponsors
- [[Away (Sponsor)|Away]] - Thoughtful luggage for modern travel.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Give your productivity a boost.

# Show Notes
- [Our first look at Shortcuts on iOS - The Sweet Setup](https://thesweetsetup.com/articles/first-look-shortcuts-ios/)
- [Shortcut: Random Line Of Text](https://www.icloud.com/shortcuts/09436237846247948a2e39d967779dd9) - This is an iOS 12 shortcut, it should migrate automatically for iOS 13 devices.
- [‎Drafts on the App Store](https://apps.apple.com/app/id1236254471)
- [Jayson: JSON app for iOS & iPadOS](https://jayson.app/)
- [Scriptable](https://scriptable.app/)
- [Agenda - Date-focused Note Taking.](https://agenda.com/) - Please note, the Shortcuts talked about on the show are examples of what the developers can do - not something created or implemented.
- [Agile Tortoise experimenting with parameters for Drafts](https://twitter.com/agiletortoise/status/1143972797254897664)
- [Simon B. Støvring experimenting with Parameters for Jayson](https://twitter.com/simonbs/status/1146134667290189825)

# Transcription

| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Hello and welcome to Automators. This is the show where we tell you how to make your devices            |
| 00:08      | do all of your work for you, or at least that's what we try for. Hey, David, how are you?               |
| 00:13      | I'm great, Rose. How are you today? I am very excited because, well, we've been playing with            |
| 00:18      | Betas and there were no more chapters in Rose versus the leaf. So, yeah, at least I am good.                |
| 00:25      | Today, I think we're going to focus on shortcuts in iOS 13. We've talked about it a little bit          |
| 00:33      | at [[WWDC]], the show we had recorded just days after the keynote. Now, both of us have now                 |
| 00:39      | been using the beta for some time. Yes. And there's just so much to talk about with this.               |
| 00:46      | I thought we should probably update the listeners. Yeah, definitely. And especially the first beta      |
| 00:53      | was super buggy and it completely broke shortcuts for a lot of people. And then the second beta         |
| 00:58      | has fixed that and now there's a public beta. That's not to say everything is perfect, as you           |
| 01:03      | will hear throughout the show. Things are not perfect, but wow, they are different and this             |
| 01:08      | is a good thing. Yeah, I just opened up Siri Shortcuts on my iPad. We're starting to record             |
| 01:14      | the show and it says corrupt database, reset shortcuts. Oh, that's not good. It didn't say              |
| 01:20      | that last night when I was working here, Rose. Well, mine is not doing this. Well, I mean,              |
| 01:26      | I'd send you my iPhone, but by the time it gets there, the episode will already be out.                 |
| 01:31      | I'm going to push reset shortcuts. Let's see what happens. Okay, I'm covering my eyes here.             |
| 01:35      | That's hopefully it doesn't erase all of my shortcuts.                                                  |
| 01:40      | And now it's just crashing. So there you go. There we go. So this is the first of many warnings         |
| 01:46      | that you will hear throughout this podcast episode. This is a beta. Well, as we record this,            |
| 01:51      | I'm on developer beta two, public beta one is out. But just because it's a public beta does             |
| 01:57      | not mean everybody should install it. If you rely on your device working and your shortcuts working,    |
| 02:03      | then consider holding off at the very least until public beta two is out, maybe even public beta        |
| 02:09      | three, just because this is crashy. And there is a reason why it doesn't auto install on your device.   |
| 02:15      | That's September. And as you've just heard live from David, it's crashed the shortcuts database.        |
| 02:22      | And when I tried to restart it, the shortcuts is crashing straight to springboard. So I'm               |
| 02:26      | restarting my iPad. I would really like this to be working while we record the show since we're         |
| 02:30      | talking about the shortcuts app. I mean, it would be nice, but you do have an iPhone, right?            |
| 02:34      | Yeah. And another iPad. We got spoiled last year because the betas were so stable. Oh, yeah.            |
| 02:40      | Yeah. And this year, they aren't quite, now it's working. I restarted the iPad. Everything's there.     |
| 02:46      | Welcome to beta life. Hashtag beta life. Anyway, so as you can hear, it's not, it's too early for       |
| 02:53      | the, I'm really surprised they put out the public beta because I don't think this version is ready.     |
| 02:59      | But at the same time, I'm sure they're getting lots of good feedback from the brave souls that          |
| 03:03      | installed it. But if you're listening and you've got an extra device and you want to goof off with      |
| 03:08      | it, go crazy. If you're about to travel or you need your iPad to get, you know, pay for your            |
| 03:14      | shoes, this is not the beta for you. Not yet. No. And the general rule I would say on the public        |
| 03:21      | betas is when they come out, don't be in a hurry to install them. Give them a day or two to see         |
| 03:26      | if there's any, you know, huge problems. And once people start saying it's okay, then go for it.        |
| 03:32      | Yeah, definitely. And as a reminder to everybody that does have the beta installed,                     |
| 03:37      | there is feedback assistant, which is installed with the beta on your device. This is the public        |
| 03:42      | beta and the developer beta. And in iOS 13 and iPad OS 13. And for the rest of the show, please         |
| 03:49      | just insert the word and iOS iPad OS after iOS every time, because both of us are going to forget,      |
| 03:55      | I'm sure. Then you can put that in the control centre. And that's great because like something          |
| 04:01      | doesn't work in shortcuts, I literally swipe down from the control centre, I tap the feedback           |
| 04:05      | assistant. It crashes on me because this is a beta. Then when I launch it again, it comes up            |
| 04:11      | and it gives me the option to add new feedback. I know I'm going to lose this battle, but Rose,         |
| 04:16      | how many feedbacks have you submitted so far? Oh, I've actually been a little cautious. Let me          |
| 04:25      | see one, two, three, 17. Yeah, I've only got seven. So I knew I knew I was going to lose that.          |
| 04:32      | Well, in my defense, I have had some very weird issues, which I'm sure were caused by me being          |
| 04:39      | on the [[TestFlight]] and upgrading one device and then not upgrading the other devices to iPad            |
| 04:45      | OS 13 or iOS 13. And then turning off sync and turning on sync. I'm sure I put myself                   |
| 04:52      | in a corner somewhere. But I need to figure out a way of exporting and re-importing all of my           |
| 04:56      | shortcuts because one of the changes now is you cannot install shortcuts from a file, you need          |
| 05:01      | to install it from an iCloud link. Yeah. Yeah, there's a lot of changes. And that's why we're           |
| 05:08      | here today to talk about shortcuts. And the first thing I would mention is that the name has changed.   |
| 05:14      | It used to always be called Siri Shortcuts and everything Apple published. And I noticed like           |
| 05:19      | watching the [[WWDC]] sessions, now they're just calling it Shortcuts. Yes. And I think this is             |
| 05:27      | because there was a little bit of confusion going on because there were Siri Shortcuts in the settings  |
| 05:34      | and then there was the Shortcuts application. And it was never clear exactly, at least to me,           |
| 05:40      | which one they were really referring to as Siri Shortcuts. I always got the impression that the         |
| 05:44      | app was Shortcuts and then the ones in the settings were Siri Shortcuts. But now it's just              |
| 05:49      | Shortcuts and everything is in one place in the Shortcuts application, which makes my life              |
| 05:54      | so much easier. Yeah. And the reason why this got us excited at [[WWDC]], the reason it's getting a         |
| 06:00      | whole show during the beta is that this is not your usual update. Often when Apple makes something      |
| 06:07      | new and shiny, they move resources around and it gets a nice big update and then it gets                |
| 06:13      | smaller incremental updates in the years following, if at all. And in this case, the new version of     |
| 06:20      | Shortcuts is fundamentally different than the iOS 12 version of Shortcuts. Yes, it is. And that's       |
| 06:30      | obviously significant, but it's really good as well. Oh, no, it's great. I feel like I may have         |
| 06:37      | said this on the show before and I've said it to you in person is like, it's like Shortcuts needed      |
| 06:42      | a year to root, like when you plant a flower, it just needs time to get in. And now after a year,       |
| 06:48      | it's fully rooted. And now it's an application that ships on every device. So no longer do you          |
| 06:54      | have to go to the App Store and download it. And it's got even more connections as we're going to       |
| 06:59      | talk in the show between triggers and actions and things you can do from within the operating system    |
| 07:05      | we're fully benefiting from the fact that it's an internal Apple product now. They redesigned the       |
| 07:10      | user interface. It's got a new look and feel that's superior. It's got an entirely new programming      |
| 07:17      | model. We're going to talk about that later. And it's just more powerful, but it's also easier to       |
| 07:23      | use. They really walk the line here. And in fact, it's so different, Rose. When I was at                |
| 07:30      | [[WWDC]], you and I were talking and I was struggling. I was like, how am I going to explain these          |
| 07:35      | changes to the Siri Shortcuts Field Guide customers? And as I got home and looked at it,                |
| 07:41      | and then the betas got installed, and I started to plan it tomorrow, I realised it's so different.      |
| 07:44      | I have to build a whole new course. So I'm going to make a brand new Siri Shortcuts Field Guide         |
| 07:49      | because all the stuff I did last year really doesn't apply anymore with this new system.                |
| 07:54      | And if you bought the old one, I'm going to give you a discount on it. But I've got a three-month       |
| 07:58      | project ahead of me in order to explain this. And it's that different. And it's just kind of            |
| 08:04      | remarkable that Apple made something brand new last year. And this year, they made something            |
| 08:09      | brand new again. And I think both of us would agree that, except for the bugginess of the betas,        |
| 08:15      | almost everything that I've seen in it is an improvement.                                               |
| 08:19      | Oh yeah, definitely. Especially for people who don't have that programming, you know,                   |
| 08:25      | coding background, this is much easier to use. I mean, one mistake I've seen people                     |
| 08:31      | make time and time again, new to shortcuts, is they find something in their calendar,                   |
| 08:36      | and then they get the start time, and then they get the end time. But they're trying to get the         |
| 08:40      | end time of the start time because that was what was immediately before. Because of course, for us      |
| 08:45      | as a person, it's obvious I want the start time and the end time of the calendar event, right?          |
| 08:50      | But in programming, you know, you have to say I want the end time of the calendar event. And now        |
| 08:56      | it's really obvious because if you try and get the details of a calendar event, it actually has         |
| 09:01      | that calendar event in the action itself. So you can see that you're trying to get the details of       |
| 09:08      | get details of calendar event or get details of the calendar event itself. And this was a bad           |
| 09:14      | example because it sounds very complicated. But I'll put together a little video demonstrating          |
| 09:18      | how that's different. Well, let's talk about because you're kind of like in the programming             |
| 09:22      | model. And I guess what I would say is traditionally, workflow and then shortcuts or                    |
| 09:28      | [[Shortcuts\|Siri Shortcuts]] followed a traditional programming model in the sense of, you know, you need a piece   |
| 09:35      | of data. So you have a variable and the variable is the container that holds that. So you in essence    |
| 09:41      | declare a variable, and then you put data in it. And the command in the [[Shortcuts\|Siri Shortcuts]] was, you       |
| 09:47      | know, make very or was that create variable, and then you would get the variable later. And there       |
| 09:53      | was a get command for it. And so like if you were working on something, you you couldn't necessarily    |
| 09:58      | have the variable declaration and the action on it in the very same place. So quite often,              |
| 10:05      | you would have to go back and get the variable. And that was what was great about magic variables       |
| 10:09      | is you could through some trickery, you could kind of go in and some of those out of the application    |
| 10:15      | without making extra steps, but it still took a programmers kind of mind set to create them. Now        |
| 10:24      | automation in contrast is supposed to be simplification. It's supposed to be the idea of                |
| 10:29      | nouns and verbs or triggers and actions where you have something happen and then something else         |
| 10:34      | happens. And what they've done with this new version with the creation of parameters, and I'm           |
| 10:41      | trying to keep this simple, but basically, I've turned it quite literally into a sentence of            |
| 10:46      | nouns and verbs, where the action you want to do goes and gets the information you need, which,         |
| 10:53      | you know, in secret code is a variable. And then it performs an action on it and it's written           |
| 11:00      | literally as a sentence. So you just go in and tap in the words in the sentence,                        |
| 11:05      | you want to change or you want to have them pop up as a dialogue box. And it does it for you.           |
| 11:09      | You know, we're trying to explain this orally, but the bottom line is it greatly simplifies             |
| 11:18      | the process of creating automation and it makes it obvious to people who have not had any programming   |
| 11:25      | training exactly what they're doing. Yes, exactly. So for example, I'm looking at an if right here      |
| 11:32      | and I've got a text block before that a text action. And then the if says if text text being a magic    |
| 11:40      | variable linking back to the text. And then I've got contains but I could have is or does not contain   |
| 11:47      | or begins with or ends with and I've just typed the word David. So it literally says if text            |
| 11:52      | contains David, and then I put whatever it is I want inside of that or inside of the otherwise.         |
| 11:58      | It's and I'm done. And that I feel is going to be really useful for people who maybe even last          |
| 12:06      | year thought even though Apple owns them, I'm just not going to bother. You know, it seems              |
| 12:10      | like too much work. It's a lot easier now. Well, I think I can speak from my own experiences quite      |
| 12:15      | often. When I was learning workflow and then shortcuts to begin with, the sticky point for              |
| 12:22      | me was trying to figure out how to give an action the proper data to work with.                         |
| 12:27      | Yes. You know, how do I know if I'm creating a calendar event, how do I know that, you know,            |
| 12:33      | I want it to be on a certain day, you know, and how do I give it that data of the day?                  |
| 12:39      | And it's it was just kind of difficult and you had a process where you created the variables and        |
| 12:44      | then you went and quite often the trick to unlocking a new shortcut was adding a get variable           |
| 12:52      | command right before you did something because in your head, you think the program knows what           |
| 12:56      | you're talking about, but it's just a dumb program. And the fact that you declared or set up a variable |
| 13:02      | two or three steps earlier doesn't mean it's going to know that it should be thinking about that        |
| 13:06      | two or three steps later. And with the system they use now, this new model, everything is               |
| 13:12      | contained within the action itself. So you have the noun and the verb as one step. Not only does        |
| 13:18      | that mean you have less blocks in your Siri shortcut model, but it also means that if somebody          |
| 13:23      | who has very little understanding of this stuff, it makes obvious to them exactly what it's doing.      |
| 13:29      | And this is the reason why there's an all new field guide. This is a reason why Rose is working         |
| 13:34      | so hard on this. We got an article that she posted this week over at Sweet Setup, we're going to        |
| 13:39      | link to, but it just it just changes the entire game. Yes, it really does. And, you know, it makes      |
| 13:47      | it a lot easier. I should clarify, set variable and as to variable are still present because you        |
| 13:54      | can create variables, but there is no get because get is built into every single action that needs      |
| 14:00      | input. And that I find is just such a brilliant move on whoever thought of that, whoever thought of     |
| 14:08      | that really should be really pleased with themselves because on the one hand, yes, it means that you    |
| 14:14      | need maybe a little bit more work in setting things up and changing things around. If you are           |
| 14:19      | modifying things, but on the other hand, it's just so simple for everybody. I could show my             |
| 14:24      | mother this, my mother is not a programmer, she's a business analyst. And she got it. I was showing     |
| 14:30      | her, I had to go home a few weeks ago. And I showed her and she was there going, you know,              |
| 14:34      | I can figure this out. Yeah, I mean, it eliminates the level of abstraction. And I think that is        |
| 14:41      | one of the, there's many changes, but that is one of the biggest and most important because             |
| 14:47      | like that learning curve that I had to go on when I was learning this stuff years ago,                  |
| 14:51      | and you did as well, that's gone now because you just, when you want to make something happen,          |
| 14:59      | it's obvious what's happening. And that's going to empower people to make more powerful automation,     |
| 15:05      | which is what we're all about here. It most definitely is. And I'm really looking forward               |
| 15:10      | to seeing what all of these new people do with this. Let's talk a little bit about,                     |
| 15:14      | since we're on the beta, how well are old shortcuts doing under the new regime?                         |
| 15:20      | Well, I have myself cornered into a bit of a spot because I was using the [[TestFlight]] version of        |
| 15:25      | shortcuts before. And I should probably switch to the public release before I installed the beta,       |
| 15:31      | but I didn't. And that broke a few things. The shortcuts team said that they'd already fixed            |
| 15:38      | that one when I showed it to them. And they said, don't worry, it'll be fixed in the next beta.         |
| 15:41      | And for the most part, things are indeed fixed. However, some shortcuts have gone a little bit          |
| 15:48      | wonky, and I've had to rework them. In general, if you open a shortcut and you see the action           |
| 15:54      | get variable, that means that you've got work to do. But the vast majority of mine are working.         |
| 16:00      | And what I'm really liking is that all of the ones that were previously in settings, so like            |
| 16:04      | finding my keys with tile and things like that are now in the shortcuts app, which means that           |
| 16:08      | there's no more, the developer created a shortcut, but you can't see it in the shortcuts app because    |
| 16:13      | it's only a one action shortcut, which they never thought anybody would use as part of something        |
| 16:19      | else. So you can only run it on its own. In general, pretty solid.                                      |
| 16:24      | I have quite a few that are broken. And I'm going through and fixing them. The simple ones are all      |
| 16:28      | still working. Some of the complex, but not all of them are working. So I'm still in that process.      |
| 16:34      | But you did touch on a point there that in addition to the changes to the programming                   |
| 16:39      | model, they also just made shortcuts more accessible throughout the system. Like one of the             |
| 16:44      | things they've added is you can be in an application and there is a button that shows up that said,     |
| 16:52      | you know, add to shortcuts. And it's something that you do frequently. You press the button.            |
| 16:56      | And then what it does is it opens up the series. It's going to take me a while to get used to           |
| 17:02      | not saying [[Shortcuts\|Siri Shortcuts]]. Then what happens is the shortcuts, I guess editor for lack of a           |
| 17:08      | better term opens up inside the application. And you see that sentence with the nouns and               |
| 17:13      | the verbs right in the application that you want to invoke. So it just makes it, you know,              |
| 17:19      | for a lot of people that never found their way to the shortcuts app, they're going to see the           |
| 17:23      | shortcuts interface through this local instantiation of it. And it's great because now you can really   |
| 17:30      | customise when you add to shortcuts right from the place that you're doing it. And you can even         |
| 17:36      | make little changes. Like if you've got something like one of the examples they used at the WWC         |
| 17:42      | thing was ordering soup and like you say, well, I want to order soup often, but I want to change        |
| 17:47      | the flavour. I want to change the amount of it. You can do it right from within the app with that        |
| 17:52      | local instance of shortcuts. And it's obvious what you're doing. You just tap on the words in the       |
| 17:58      | sentence. And then you save it. And now you've created a shortcut. I just love how accessible           |
| 18:04      | this is going to be for people like Rose's mom. Yeah, exactly. And also just touch on accessibility     |
| 18:12      | one step further. You no longer have to speak to Siri or type to Siri in order to add a shortcut.       |
| 18:20      | Previously, if you were donating a shortcut from an application, say you'd opened OmniFocus and you     |
| 18:24      | got into the OmniFocus settings and you were adding something like viewing your inbox to Siri,          |
| 18:31      | you would have to speak it. Or if you had typed to Siri enabled, you would have to type to Siri.        |
| 18:35      | You no longer have to do that. They can define a default. The developer can define the default          |
| 18:42      | and that will be used automatically. I had no idea how upsetting that was to me until I realised        |
| 18:49      | we didn't have to do it anymore because so many times I sit there and I'd be like talking to Siri       |
| 18:54      | trying to give it a name, speaking as clearly as I possibly can. I'd say name this one Banana           |
| 19:01      | Strawberry and it would come back and say, okay, carrots and peas. And I'm just like, no. Yeah,         |
| 19:08      | exactly. It would be very frustrating especially. I can imagine in your case,                           |
| 19:12      | I don't think involving a client name, it would probably spill it wrong even though it's in your        |
| 19:16      | context, things like that. Yeah. So many subjects. I just gave up on making audible or voice-controlled |
| 19:24      | shortcuts because the names were so odd that I just knew I would never get it to work. So now I         |
| 19:29      | can just type them in. That's a nice improvement. Yeah. And also the name of any shortcut is how        |
| 19:36      | you run it via Siri now. You can add it with alternative names and so on. But if you have               |
| 19:43      | a shortcut, I've got one here called travel plans. I no longer need to add this to Siri with the name   |
| 19:51      | travel plans. I can just say magic words, travel plans, and boom, a pop strip it. So.                   |
| 20:01      | Nice. Yeah. I wanted to talk about triggers and actions and some other new capabilities,                |
| 20:06      | but first let's pay the bills. Yeah. We would really like to thank our first sponsor of today's         |
| 20:12      | episode, which is Away. So this episode of Automated is brought to you by Away. Away creates thoughtful |
| 20:19      | products designed to change how you see the world. They started with the perfect suitcase,              |
| 20:24      | and now they offer a range of essentials that solve real travel problems. Their luggage is loaded       |
| 20:30      | with features. The Away carry-on, for example, comes in an array of colours, two sizes, and two          |
| 20:36      | materials. It's got a hundred-day trial that lets you try any Away product on the road.                 |
| 20:41      | It comes with a lifetime warranty, which means they'll fix or replace your bag if it ever gets          |
| 20:44      | damaged, and it's got four 360-degree spinner wheels to guarantee a smooth ride. The bigger carry-on    |
| 20:52      | is sized up to make the most of the overhead bin, and Away suitcases are designed to last a lifetime.   |
| 20:58      | You get a 100-day trial on everything, plus free shipping within the US, Europe, and Australia.         |
| 21:04      | I have the Away carry-on, and honestly, one of my favourite features is actually the laundry bag         |
| 21:09      | inside of it, which sounds kind of crazy, but I've always had this problem because I always             |
| 21:15      | forget to pack a laundry bag, and it's right there in my suitcase now, so I never have to worry about   |
| 21:19      | it. So far, I've taken my suitcase to the UK, and I'm going to be taking it to Chicago at the end       |
| 21:26      | of the month, where I'm going to be seeing David at Macstock and hopefully some of you. I would         |
| 21:31      | recommend the Away suitcase to pretty much anybody who travels a lot because they're super sturdy,      |
| 21:35      | and the battery pack, which is an optional feature, is actually really useful. There's                  |
| 21:39      | nothing worse than sitting at your gate with your plane being delayed on your phone slowly draining     |
| 21:44      | your battery. Being able to literally just plug your phone into your suitcase is great,                 |
| 21:48      | and you can pop it out if they need to check your suitcase for any reason.                              |
| 21:52      | Go check them out now, and for $20 off a suitcase, visit awaytravel.com                                 |
| 21:57      |/automators, and use the promo code AUTOMATORS at checkout. That's awaytravel.com/           |
| 22:03      | AUTOMATORS, and use the promo code AUTOMATORS during checkout. Thank you so much to Away                |
| 22:08      | for their support of this show and all of Relay FM. So David, we've got some new triggers, which       |
| 22:15      | is scary, but none of the other stuff has gone away, and actually it makes shortcuts about,             |
| 22:22      | I would say, 8 billion times more powerful. Yeah, it is quite a bit more powerful, and                  |
| 22:27      | there weren't many ways to trigger an automation with shortcuts back in the workflow days, or even      |
| 22:34      | the iOS 12 shortcut days. It was basically a button in the application, and then some trigger,          |
| 22:41      | like you could put it on the Today View screen with the widget. There was a fairly, for me,             |
| 22:47      | at least unreliable voice control off of the HomePod, or a more reliable voice control off              |
| 22:54      | the iPhone directly. And then you could have the watch. There was also a watch way you could            |
| 22:59      | trigger them, but the watch is limited screen space. Yeah, and honestly, a lot of the watch             |
| 23:05      | stuff never really worked very well, just because there's only so much memory on a watch.               |
| 23:11      | It has increased with the more recent versions, but for me, it was never very reliable. I could         |
| 23:16      | maybe get it to add chocolate to my shopping list, which was honestly my most frequently used watch     |
| 23:22      | workflow back in the day, but nowadays, I can just talk to Siri and do the same thing.                  |
| 23:29      | You need a chocolate button somewhere, right? Just press the button.                                    |
| 23:32      | Yeah, I do, but it's okay. I have [[Drafts]] now.                                                           |
| 23:36      | But so with shortcuts, and you and I spent some time with the shortcuts gang up at [[WWDC]],                |
| 23:43      | they really added a lot of triggers, and they were explaining to us when we talked to them that         |
| 23:49      | they just had this big list and they started checking the items off, and they got a long way            |
| 23:54      | through the list for iOS 13. Yeah, they did. And it's amazing because these triggers,                   |
| 24:02      | it's a really long list. And then there's another list, which is kind of scary, but it's good.          |
| 24:09      | Well, the thing I like about it is they are some that don't involve your interaction as much.           |
| 24:14      | Like the one thing we always wanted was time-based triggers. Wouldn't it be nice                        |
| 24:18      | if every day at four o'clock, my phone or iPad could do X, Y, and Z, and I didn't have to think         |
| 24:25      | about it. And now you can. And honestly, if they had come back and said, yeah, we added time-based      |
| 24:32      | triggers, I'd be super happy if that was there. And that's kind of what my expectation was going        |
| 24:38      | in. Like if we had got to the iOS 13 and there were no time-based triggers, I would have definitely     |
| 24:44      | been disappointed. But they have a bunch of event categories. They have so time of day,                 |
| 24:51      | you can also trigger it to an alarm. Yeah, yeah. This is really useful. I've been using that to         |
| 24:56      | start my day because you've got an alarm and when it's stopped or when it's snoozed. So when it's       |
| 25:02      | snoozed, I've got a little shortcut that if I snooze it, it adds like a random insult into a            |
| 25:10      | text file. And then when I stop my alarm, then one of the first things it reads is the random           |
| 25:15      | insult. And there are usually things like you eat too much chocolate or why do you keep snoozing        |
| 25:21      | in the morning? Though I must say, because I've had the broken ankle, I've not really been using        |
| 25:26      | that too much. Okay, tell me how you did that. I mean, is it a list of insults that you just typed      |
| 25:31      | into? Yeah, yeah. So I have a text action and I can share this. And this works on iOS 12 as well.       |
| 25:39      | So I'll try and share an iOS 12 version if I can find a device in my house is not yet running iOS       |
| 25:43      | or iPadOS 13. And so I just have a text action, which has a list of random things in it. And then       |
| 25:51      | I split it. And then I use the filter files option. And to filter randomly, I get the first item        |
| 25:59      | from a list. And then I just write it into a text file. And then most important, when my alarm          |
| 26:06      | stops after I wrote it out, I clear the text file and I write an empty space into that file.            |
| 26:11      | Yeah. And then so you're not going to the web to pull from a set of web basins?                         |
| 26:16      | Oh, no, no, no. I'm just, yeah, because, you know, if you search for random insults on the internet,    |
| 26:21      | you're going to get some really horrible stuff. And I just want things like you eat too much            |
| 26:24      | chocolate or you snooze 17 times today, really? Even if I haven't snooze 17 times.                      |
| 26:30      | You could do that. Actually, now that I think about it, so every time you hit the snooze button         |
| 26:32      | since that is a trigger, you could set a variable and add to it each time you do it.                    |
| 26:39      | Yeah. Yeah, you could. And then you could give yourself a report.                                       |
| 26:43      | Yeah, of how many times you hit the snooze button.                                                      |
| 26:46      | I wonder if it would be, and then if you could actually put that into a data file somewhere,            |
| 26:51      | and then you could compare it to your sleep log. Just be curious to see how often you snooze compared   |
| 26:56      | to, you know, to what the quality of your sleep is. Yeah. And I mean, you can use all sorts of          |
| 27:03      | things this. You could just use the text file, but you could also use something like the Tally app       |
| 27:06      | by Agile Tortoise, the same people who make [[Drafts]].                                                     |
| 27:09      | Want to something weird about me? I don't use snooze. I don't even turn it on.                          |
| 27:13      | I try not to. I've seen to remember at some point Dwayne The Rock Johnson released an                   |
| 27:20      | alarm app for iOS, which had no snooze button. Yeah. And people went crazy and he was like,             |
| 27:26      | no, just don't snooze. When your alarm goes off, get up. Yeah. Do it. And I was like,                   |
| 27:31      | well, I can do that with a regular alarm. I don't need The Rock's alarm.                                |
| 27:35      | Yeah, I just find snoozing doesn't help me. So it just makes things worse quite often.                  |
| 27:41      | And I think that knowing in my head that there is no ability to snooze, it's like,                      |
| 27:46      | it forces you open. Yeah. All right. So in addition to using the snooze as a trigger,                   |
| 27:52      | you can also use an Apple Watch workout. I mean, it's just crazy how far they went with this stuff.     |
| 27:59      | Yeah, it really is. And it's so amazing what you can actually do, because when you start                |
| 28:08      | an Apple Watch workout, you can have it automatically start your playlist and things                    |
| 28:12      | like that. But at the same time, when you end it, you can also automatically have it open               |
| 28:16      | the health application for you. And that's great, because then you can review not just                  |
| 28:22      | the workout that you've done, but all of the other things that you've done throughout your day.         |
| 28:25      | Yeah, I guessed it a few weeks ago on the connected podcast, Mike was out of town. And                  |
| 28:33      | [[Federico Viticci\|Federico]] was talking about how he's working on a shortcut that when the alarm, when he turns            |
| 28:37      | off the alarm, it goes on the internet and pulls a bunch of data about the day and his calendar         |
| 28:42      | and probably the weather. And his goal is to turn that into a home screen, like a wallpaper             |
| 28:49      | for his device. I think you remember doing something similar for somebody in the Facebook group         |
| 28:54      | for Mac Power users back when that existed. And I think the shortcut is still around somewhere,         |
| 29:01      | because I used to CS as well. I made it with HTML and made it look kind of pretty,                      |
| 29:06      | so that you could then convert it to a PDF, convert the PDF to an image, and then save that as an       |
| 29:11      | image, but then you still had to set to edge your background manually. And now you can,                 |
| 29:17      | of course, just set it as your background. You don't even need to save the image.                       |
| 29:19      | Yeah. So one of the new actions is you can, you can set a background wallpaper.                         |
| 29:24      | So yeah, and we're going to talk about actions later. But I mean, it's, it's just,                      |
| 29:28      | it opens up a whole lot of new options. I know the easy thing for us to do, and we talked about         |
| 29:32      | this at [[WWDC]] is say, well, for some reason, I always go to music, like, you look at these triggers,     |
| 29:38      | like they have arrival and leaving triggers, like when you arrive and when you leave. And in my head,   |
| 29:43      | or even like before I need to leave, you know, the how the alarms, the calendar can tell you            |
| 29:48      | when you need to leave, you know, wouldn't be cool if it started playing this great, you know,          |
| 29:51      | motivational song 10 minutes before you leave, so you can start getting ready and having your           |
| 29:56      | favourite music playing. But, you know, I think the trick is to go beyond the obvious with this          |
| 30:01      | stuff and really think, you know, what do I need to automate? You know, maybe before I need to leave,   |
| 30:08      | give me a warning and open up my, my toothbrush timer and you know, like, like really think             |
| 30:14      | about the steps you take and how your device can automatically handle a bunch of it for you.            |
| 30:20      | Yeah, exactly. With these triggers, it's all there for you.                                             |
| 30:23      | Yeah. And, you know, it's amazing. And I mean, we should say, you know, not all these can run           |
| 30:29      | automatically. So some of them can. So for example, any snooze or stop an alarm, a shortcut can run     |
| 30:34      | automatically. And when you open an app, a shortcut can run automatically. Very important,              |
| 30:39      | do not set something else to open when you open shortcuts. Because otherwise, you're completely         |
| 30:45      | utterly stuffed. And I have no way of helping you out with that. I think maybe if you uninstall         |
| 30:50      | shortcuts, that will help. But I'm not sure. Yeah, somebody, I saw somebody on a Reddit                 |
| 30:59      | thread the other day did that. And then they were trying to fix it. And everyone was like,              |
| 31:02      | no idea, but you're basically stuffed. So that, that's not good. But there are other ones.              |
| 31:08      | You created an infinite loop. Yeah, exactly. You just can't fix that. But when you,                     |
| 31:14      | when you connect a Wi-Fi or to a Bluetooth device, then that's going to pop up and ask you              |
| 31:19      | because connecting to a Bluetooth device, that's not something you do on your iPhone or your iPad       |
| 31:24      | necessarily. It may be in some cases, that for example, when you connect your AirPods that,             |
| 31:30      | that just connects, you don't need to do anything after that very first pairing.                        |
| 31:34      | So yeah, those ones need you to pop up and confirm. And that is one of the bugs that I've               |
| 31:41      | run into. I cannot run any shortcut from a notification that it gives me right now. It's,               |
| 31:45      | it's kind of crazy. I've been rebooting everything, reinstalling everything, and it's all stuck.        |
| 31:49      | Yeah. And, but I mean, so with this new, this automatic triggers that will do things on an              |
| 31:57      | event as opposed to you physically pressing a button, some of them do kick up a confirmation            |
| 32:02      | dialog box. And Apple has a logic to that. You know, it's stuff that would happen automatically,        |
| 32:07      | will happen automatically, and stuff that you would normally go and tap buttons to happen.              |
| 32:10      | You're going to have to tap a confirmation. I think that's probably a good idea. I, you know,           |
| 32:15      | I don't think we want automation unchecked. You know, that's going to lead to the robot                 |
| 32:19      | uprising, but. Or at the very least lead to you having unexpected things happening on your phone        |
| 32:24      | when, when, when you don't think they should be happening because a trigger is misfiring or something.  |
| 32:30      | But, but even then it's just like so much of the drudgery is done now. You don't need to go to an       |
| 32:35      | app. You don't need to remember to go. It's just going to happen. Exactly. Yeah. I changed one of       |
| 32:40      | my shortcuts because previously I was using launch centre pro to remind me when I got home to           |
| 32:44      | stop my commuting timer. And especially recently with the broken ankle, I've been really                |
| 32:48      | interested to see how long it's taking me to get to and from work compared to how long it would         |
| 32:54      | usually take. And spoiler is taking twice as long. Who would have guessed. And you know,                |
| 33:02      | it's great that I now just have that pop up in shortcuts, which is not to say the apps like             |
| 33:06      | launch centre pro and so on are defunct. They're definitely not. They, they have their place and        |
| 33:10      | they, they still do the great things that they were doing before. But being able to run that            |
| 33:14      | directly in shortcuts is great, especially actually because it's basically telling Timery to just       |
| 33:21      | stop my commuting timer. That's all it does. You know, I love Rose that you broke your ankle and        |
| 33:25      | you found a way to turn that into a serious shortcut script. Well, you'll be even more                  |
| 33:32      | impressed. I even have an OmniFocus tag for it. All right. Yeah, I've got an OmniFocus tag for          |
| 33:38      | when my ankle is not broken. And I've put a bunch of things that I currently can't do because of        |
| 33:42      | the broken ankle in there and it's on hold. And then as soon as my ankle is, you know, back to          |
| 33:47      | being at least more normal, it's going to take a while. I'm going to have some physiotherapy and        |
| 33:51      | so on. Then I can delete that tag and all of those tasks will pop right back up.                        |
| 33:55      | All right. So what is number one on your unbroken ankle list?                                           |
| 33:59      | Actually, it's going and getting a pedicure because surprise, I can't do that right now.                |
| 34:04      | Because the cast is all the way up to my knee. So I actually can't even bend my leg very well.          |
| 34:09      | So it's like, you know, do my own pedicure or try to do my own pedicure with a plastic cast.            |
| 34:14      | So yeah, I'm going to go. Can you see your toes right now or your toes?                                 |
| 34:17      | Yeah. Yeah. My toes are sticking out of the cast, which is great because it was 38 degrees              |
| 34:20      | Celsius yesterday. Yeah. Which is, I can use a shortcut now because this is a new action                |
| 34:26      | to tackle that is in America. That's just barely about freezing. I don't understand what you're         |
| 34:29      | talking about. Okay. Well, I'm looking, I'm actually using peak elk for this. So it is 100 degrees,     |
| 34:37      | 100.4 degrees Fahrenheit. Yikes. Yikes. Yikes. Yeah.                                                    |
| 34:42      | One of the things you can do for a trigger now is an NFC tech. Oh, yeah.                                |
| 34:47      | That's really cool because you can, like let's say you arrive home and you just slap your phone         |
| 34:54      | against a sticker that you've got in the door jam and then suddenly things start happening.             |
| 34:59      | I guess arriving home is also a trigger too. So there's a lot of overlap here, you know.                |
| 35:04      | Yeah. But at the same time, so there's a couple of things. You could have it connecting to your         |
| 35:08      | home Wi-Fi network. You could have the NFC tech or you could have the geolocation. Now with the         |
| 35:14      | geolocation, I would point out that GPS is not the most accurate. And so that may trigger when          |
| 35:21      | you're still a little way away from home and depending on how you're traveling, that could be           |
| 35:26      | a few minutes away or it could be five, 10 minutes away, especially if you stop, you know, if you       |
| 35:31      | live in an apartment building, you stop downstairs to talk to your neighbour or something, you know,     |
| 35:35      | then your lights have turned on and the music's playing, but you're not there to actually enjoy         |
| 35:40      | it. Whereas something like the NFC sticker, well, if you don't want it to play, you know,               |
| 35:46      | the Indiana Jones theme tune, when you come through the door, when you have guests with you,            |
| 35:50      | then you just don't tap your phone on the NFC sticker. And with the Wi-Fi network, of course,           |
| 35:54      | it's an even smaller area, depending on how good or bad your Wi-Fi network is, of course.               |
| 35:58      | And one of the nice things with the NFC stickers, the same sticker can be used with multiple phones,    |
| 36:03      | but they won't have the same automation. You know, the automation is not embedded into the sticker,     |
| 36:09      | it's just a trigger. So I could put one in the kitchen and when I tap it, it sets the lights            |
| 36:14      | to a certain level. It plays my favourite jazz album and, you know, it just does things that I           |
| 36:20      | want. Whereas my wife could tap the same sticker and it could set the lights to a different level       |
| 36:25      | and it could play her favourite, you know, music. And, you know, you could make that sticker work        |
| 36:31      | for different people. You could even make it work. And I guess you probably could haven't               |
| 36:36      | tested this yet, but I don't think you could make it work with different devices. I think that the      |
| 36:40      | sticker would, with your instance of Siri shortcuts, would work on the same in your iPad as your phone. |
| 36:47      | Well, I mean, NFC stickers don't work on your iPad. So unless you happen to have two iPhones,           |
| 36:53      | and as a reminder to people who want the NFC things, unfortunately, you do need the                     |
| 37:01      | time of recording latest generation of iPhones, which is 10S, 10S Max, or 10R.                          |
| 37:06      | That is one of the reasons why I upgraded last year, I will admit, and it's been really useful          |
| 37:11      | to me. So I'm pretty happy with that. Yeah. But I mean, it's just really great because                  |
| 37:16      | there's just, it opens up the world to people. And like you mentioned, in passing Wi-Fi,                |
| 37:21      | that'll work for everybody's phones, you know, but my wife's trigger to Wi-Fi is going to be            |
| 37:26      | different than mine. Which is really good as well. And from what I remember, the way that the NFC tags  |
| 37:35      | work is it's using the ID of them. So if there's data on there, I believe it's going to try and         |
| 37:41      | read that data first. And NFC tags that you buy that have been pre-written, it may be set so that       |
| 37:48      | you cannot rewrite them. So if you're looking for NFC tags, try and get some blank ones.                |
| 37:54      | And then you can write to them with iOS, at the very least on the newer devices.                        |
| 37:59      | But you don't need to do that with shortcuts. You can just register it. And it asks you to              |
| 38:04      | just hold the NFC tag to the phone. And then theoretically, the next time you touch your                |
| 38:08      | phone on the sticker, it should work. I say theoretically, because I previously mentioned,              |
| 38:14      | I have a bug. I get the notification, not always with the NFC, but most of the time.                    |
| 38:19      | But I can't run anything from it. And I am trying to debug that one at the moment. And I've got         |
| 38:24      | a radar filed on that. And another trigger is Bluetooth connection. And so I've got a mouse,            |
| 38:30      | I've been attaching a mouse to my iPad just to play with it. And I'm trying to automate                 |
| 38:36      | the accessibility setting to turn on, in essence, the mouse support when the device is connected.       |
| 38:45      | And that's just not showing up as one of the potential Bluetooth devices that can be a trigger.         |
| 38:49      | I mean, we're in the beta, so things are still a little wonky. But you can see the potential.           |
| 38:57      | Definitely. And of course, something that we mentioned before is you can also use the buttons           |
| 39:02      | on the mouse to trigger shortcuts, which is possibly better. It depends on your point of view.          |
| 39:11      | But the other thing that we haven't mentioned yet, which I'm not sure many people know about,           |
| 39:15      | you can add shortcuts to the assistive touch menu, which means that you don't need to                   |
| 39:22      | switch back to your widget or your home screen or any of that, you can just have them under             |
| 39:28      | this little button and you can tap on it and you can just run those shortcuts that you regularly        |
| 39:31      | need to run. And I've been experimenting with this. I don't usually use the assistive touch menu,       |
| 39:36      | but I've been experimenting with this for looking at the time that I work on different                  |
| 39:40      | projects at work this week. And it's pretty useful, I have to say. If the NFC tags were working,        |
| 39:45      | I'd probably still be working with an NFC tag. But that's being a bit wonky for me,                     |
| 39:51      | so I've been trying the assistive touch menu and that's nice.                                           |
| 39:54      | Yeah. On the idea of triggering shortcuts from your desktop, or I'm sorry, from your springboard,       |
| 40:00      | on the iPad now as well, because you can put the Today View on the iPad,                                |
| 40:05      | you can pick two to always appear. And I've been using up next, which is Next Appointment,               |
| 40:11      | and then the Siri Shortcuts is my second standard one, because I have a bunch of shortcuts that         |
| 40:17      | trigger other shortcuts. I've nested them in essence, we've talked about this in the past on            |
| 40:22      | the show, I also cover that in the Siri Shortcuts field guide. But I have one called Legal and          |
| 40:28      | I tap that, and it gives me a menu of all my legal related shortcuts, and I have one for                |
| 40:32      | MacSparky. But that stuff is now all right on my home screen, on my iPad. And I love that so           |
| 40:40      | much, Rose. It just makes shortcuts all the more valuable. It's amazing, I love it. And I'm gonna       |
| 40:45      | have to go back and recreate some of those as well. And I'm really gonna have to tidy up my             |
| 40:50      | share sheet, because that's driving me slightly insane, the number of shortcuts I have in my            |
| 40:53      | share sheet that probably shouldn't be there realistically. Yeah, well, let's talk about that           |
| 40:57      | one, because the share sheet behaviour is different with this new version as well.                       |
| 41:02      | Yes, it's taken me a little while to wrap my head around it. But essentially,                           |
| 41:06      | previously in the share sheet, there were two rows. There were applications where you would open        |
| 41:11      | whatever it was in a specific application, and then there were the more action-y items,                 |
| 41:16      | so you could add something to deliveries or, you know, copy the iCloud link to a shortcut,              |
| 41:22      | and things like that. And there were shortcuts. And shortcuts, the application was in the share         |
| 41:28      | sheet, and then it popped up, and there was a little search at the top if you pulled down,              |
| 41:32      | and then there was just a list of the shortcuts that could take the kind of input being passed          |
| 41:37      | right now. So if you were sharing a photo, then it would only show you the shortcuts that could         |
| 41:40      | accept photos. This has now changed into one long list intermingled with the other applications,        |
| 41:47      | which, for some people, not a problem if you maybe only have 20 shortcuts. That's fine.                 |
| 41:55      | If you have 847 shortcuts and most of them can accept any kind of share sheet input,                    |
| 42:00      | because all you ever did was previously use a search, you may be going slightly insane.                 |
| 42:04      | If you are, please talk to me because I'm doing exactly the same thing.                                 |
| 42:08      | I'm having to go through and look at every single one of my shortcuts and see whether                   |
| 42:12      | they're not just in the share sheet. And if it's in the share sheet, is it accepting input that         |
| 42:18      | it should be accepting, or can I reduce that number, the amount of input here? Can I get rid            |
| 42:24      | of the shortcut entirely, or can I maybe combine this into another shortcut instead?                    |
| 42:32      | Yeah. And just with the prior version, it was kind of like, in essence, a folder.                       |
| 42:36      | You'd have to tap on the shortcuts button, and then you'd get access to all of them,                    |
| 42:42      | and now they're just interspersed with it. I think overall, it's more useful,                           |
| 42:46      | even though I understood the difference between the top line and the bottom line                        |
| 42:50      | share sheet before I was 13. I always felt like it was a very subtle thing and didn't always make       |
| 42:57      | sense. Now, the new system they're using is much easier, and they've incorporated,                      |
| 43:03      | I think they call it the SF. There's a group of images they've added to the San Francisco font.         |
| 43:10      | I forget the name of that last part, but basically they're glyphs. Maybe it's SF glyphs,                |
| 43:14      | I don't remember, but they've incorporated that into shortcuts. So now the glyphs you can attach        |
| 43:20      | your shortcuts are built into the system, and then they show up in the share sheet as well,             |
| 43:24      | so you can visually find it. But you're right. If you have a lot of them, it's time to audit,           |
| 43:30      | and then look at the ones you really use. Exactly. Yeah. That's the thing that I'm trying to figure     |
| 43:35      | out. What I would really like to do, and I'm still trying to figure out if this is possible,            |
| 43:39      | is whenever I run one of these, I would really like to have the name of the shortcut that I've          |
| 43:45      | run logged in a file, which I have a horrible feeling is going to mean that I need to add               |
| 43:51      | something to every single shortcut, which is even more work. But then I would actually know which       |
| 43:57      | ones I use, because some of them I use all the time, and others I rarely use, but they are              |
| 44:03      | very complicated processes, so I should keep them, but maybe they don't need to be in the               |
| 44:06      | share sheet, and I can actually get the input in the shortcut itself. Yeah. Makes sense. Well,          |
| 44:11      | we have more to talk about on automators, about shortcuts, but before we get there,                     |
| 44:15      | I want to take a minute to talk about our next sponsor, and that's our friends over at Smile.           |
| 44:19      | This episode of Automators is brought to you by TextExpander. Give your productivity a boost            |
| 44:25      | with TextExpander, and turn the things you type often into snippets. You can use them everywhere        |
| 44:31      | you type. So TextExpander is the application where you can type a few letters, and it automatically     |
| 44:37      | fills in a bunch of text for you. But I have brought this to a ninja level of automation,               |
| 44:43      | and I think you should too, because you're listening to the automators. Why not? TextExpander           |
| 44:48      | brings so much more to the table. Like, for instance, with TextExpander, you can use it                 |
| 44:52      | inside your team or your company for customer supports, e-mails, all that stuff, where you've           |
| 44:58      | got the person who writes the best text in your company writing the responses that goes out to          |
| 45:03      | all your customers. And if you want to be more productive, TextExpander helps you out there as          |
| 45:08      | well with repetitive typing tasks, leaving more time for what you do best. As an automator,             |
| 45:14      | I really like TextExpander as an automation tool, because there's a lot of stuff I do that's text       |
| 45:20      | related, and an automator is so perfect for that. And that's because TextExpander doesn't just fill     |
| 45:26      | in text in replacement for things, you know, like the typical text replacement app. TextExpander        |
| 45:32      | has the ability to use tokens, and they redid the user interface on this, by the way, recently,         |
| 45:36      | and it's really nice. So if you haven't looked at it, you need to go back and look again,               |
| 45:40      | where you can have it put in the date and time into your text for you. When I'm working with            |
| 45:47      | the legal clients, I sometimes keep a log of relevant events to a transaction I'm working for,          |
| 45:53      | and I just type X DTS in my head, that's X date timestamp. And it's a TextExpander snippet that         |
| 46:00      | puts in the date and the time. And I just type that it drops it in, then I hit return, and I            |
| 46:05      | start typing my notes. And then I've got a date stamp that I can put in any place on my Mac,            |
| 46:11      | that, you know, for text, I'm running down just a simple way use it. You can also have fill-in          |
| 46:16      | snippets where it prompts you to write in the name. You know, the most obvious examples,                |
| 46:21      | when you're sending an email, you can have it fill in the name of the person you're sending the email   |
| 46:25      | to. But you could also use AppleScripts with TextExpander. So I've got an [[AppleScript]] that            |
| 46:29      | automatically generates that name. But I still use the fill-in as well for different things. And        |
| 46:34      | you can, one thing an automator can do is you can repeat that field. So if you have the same            |
| 46:39      | text snippet two or three different places, you can just repeat it in TextExpander. You don't           |
| 46:45      | have to fill it in once. You can have it grab the contents of your clipboard. I mean, TextExpander      |
| 46:50      | is an automation tool. And if you're not using it, you should definitely try it out. So if you          |
| 46:55      | want to head over to textexpander.com/podcast, and you can learn more about the application,      |
| 47:01      | you can download it there. Make sure you let them know you heard about it here on automators and        |
| 47:06      | help support the show. And we really appreciate that. But, you know, that this is one of the most       |
| 47:11      | obvious ways to get started with automation. If you're not doing it yet, you need to                    |
| 47:14      | download this and check it out. There's just nothing like it for text automation on the iPad,           |
| 47:20      | the iPhone and the Mac. And now TextExpander is on Windows as well. So go check it out. And thank       |
| 47:26      | you, TextExpander, for all of your support. Once again, that's textexpander.com/podcast           |
| 47:32      | and let them know you heard about it on the automators. Well, I have some breaking news that            |
| 47:37      | happened literally right as you were reading that in that developer beta three has just landed,         |
| 47:42      | which means that by the time this episode is out on Friday, everything's going to be fixed              |
| 47:46      | and working perfectly in the public beta, right? Yes. Is that how that works? I'm the eternal           |
| 47:51      | optimist. Yeah. Well, I'm not yet installing it. We still have the rest of the episode to finish        |
| 47:57      | before I'm allowed to install any of the new betas on my devices. That was a promise I made to David    |
| 48:02      | before the episode started, at least in my head. If the beta landed, I was not going to install it      |
| 48:06      | while the episode is running, just in case. Yeah. So yeah. But so some of the things that we are        |
| 48:13      | talking about may have already been fixed or updated, which is great. But there is nothing              |
| 48:18      | wrong with the rest of the episode. So let's keep going. Yeah. Well, I mean, we've been focusing        |
| 48:22      | on the features with this episode. Exactly. And speaking of features, we've talked about all            |
| 48:29      | the new triggers. We haven't really talked much about the actions. No. And I mean,                      |
| 48:33      | it's not necessarily so much about the new actions that are built into shortcuts, not to                |
| 48:38      | belittle them, though. There's a couple that are really great. But it's all of the new actions that     |
| 48:45      | other applications can now add to shortcuts with parameters that have got me excited. So.               |
| 48:51      | Yeah. Explain parameters to the audience. So essentially, previously, if you wanted to                  |
| 48:58      | create a draft, and this is perhaps not the best example. So say you wanted to create a new note        |
| 49:04      | in Agenda. Agenda is an application where you can take notes and they're linked to calendar events.     |
| 49:10      | Previously, you pretty much had to copy it to your clipboard, and then Agenda would have had to         |
| 49:15      | grab that from your clipboard. Or Agenda could just say, hey, if you want to create a new note          |
| 49:20      | and Agenda, we're just going to open the new note. And that's it. And then you do whatever you like.    |
| 49:24      | Now, people like the developers of Agenda and the developers of [[Drafts]] and everybody else               |
| 49:30      | can say, hey, in order to create a new draft or a new note in Agenda or something, I would like         |
| 49:37      | a title and I would like the note body. And maybe I want some tags as well. And then they can tell      |
| 49:44      | you exactly what this is and how it should look like. And then you can put that information in          |
| 49:49      | shortcuts. And then it will give that information to [[Drafts]] or Agenda or JSON, the application          |
| 49:56      | by [[Simon Støvring]], who also makes Scriptable. And then that application gets the data and goes,        |
| 50:03      | great, I know what to do with this. And it does it. And this is amazing, because previously,            |
| 50:08      | all of these actions like adding a task to OmniFocus were created and maintained by the                 |
| 50:12      | shortcuts team, which I have no idea how many billions of apps are on the app store now,                |
| 50:17      | but that's just not a viable long term solution. The parameters framework for the shortcuts actions     |
| 50:24      | is because now it's up to the developers to add these actions into shortcuts with the parameters        |
| 50:28      | they need. And whenever they change something, they can change it in shortcuts as well. And I           |
| 50:32      | am in love with this. It's so good. Yeah, I mean, before the to pass data between applications,         |
| 50:38      | you had to use a [[URL Schemes\|URL scheme]], which was amazing for the time that it worked at all, honestly.            |
| 50:46      | But it was tedious. Or, you know, the latest hack people were using in iOS 12 was the clipboard         |
| 50:52      | using a clipboard as a temporary storage space. But it was never reliable. And it was really            |
| 50:57      | only one place you can hold data. And with parameters, now applications can freely exchange             |
| 51:03      | data between themselves. I mean, there's limits, of course, but it's, it's greatly                      |
| 51:09      | enhanced the ability to move data from one application to the next. And it's built for                  |
| 51:15      | that. It's not a hack that was thought of later. And as developers incorporate this,                    |
| 51:21      | it's going to greatly increase the things you can do with shortcuts.                                    |
| 51:25      | Yes, it absolutely is. Because for example, now when creating a new draft in [[Drafts]],                    |
| 51:32      | I can specify what tags I want to apply to that, which also means that I could have a list to           |
| 51:38      | say four tags I use frequently in shortcuts and select those and then pass that through instead         |
| 51:44      | of having to type them out once I'm in [[Drafts]] or trying to URL encode them and add them into a          |
| 51:50      | [[URL Schemes\|URL scheme]], which yes, I have previously been doing and now I no longer need to do. So yeah,            |
| 51:57      | this is really good. And hopefully this will replace the [[URL Schemes\|URL scheme]]. This is not to say that            |
| 52:03      | [[URL Schemes]] are bad, but I mean, Apple have been saying [[URL Schemes]] are not the most secure because     |
| 52:09      | well, anybody can run them with anything. And this is a framework offered by Apple specifically for     |
| 52:13      | shortcuts, which means that you can pass data to it and from it. Because once you've created that       |
| 52:19      | draft in [[Drafts]] and adult horses can pass back whatever information they think you're going to          |
| 52:25      | need, which is of course, exactly what we want. Developers giving us that data back.                    |
| 52:30      | And this isn't just, you know, more safe, it's better. I mean, it's just, it's more secure. It's        |
| 52:35      | easier to manage for Rosa's mom. She's going to be able to grab data from another application           |
| 52:42      | without ever understanding the URL callback, which she never would have understood. So it's just,       |
| 52:49      | I think it's just superior. I want to see how it's implemented and I hope that they don't               |
| 52:54      | put too many limitations on it. But watching the videos of the sessions at [[WWDC]] and my own              |
| 53:01      | experimentation with it so far, it's just been all positive for me.                                     |
| 53:05      | Oh yeah. Yeah, it is really good. And I'm really excited to see what developers are doing with          |
| 53:09      | this as well. So for example, JSON has got some new actions where you can actually give it JSON         |
| 53:17      | and have it display it instead of, you know, telling JSON, hey, show my clipboard. Well,                |
| 53:22      | now you just give it the text, which means that whatever's on your clipboard stays on your clipboard.   |
| 53:26      | And so you don't have to do it down to the beginning of a shortcut where you get the current            |
| 53:30      | clipboard, save it to a variable. And then at the end of the shortcut, you put it back.                 |
| 53:35      | Yeah, and you put it back. Yeah, crazy. Yeah, Rose, I am so excited with shortcuts. I feel like         |
| 53:42      | it was, I was a little surprised because at the keynote, they didn't really mention it. They            |
| 53:46      | didn't mention it at all, but then it did come in the up in the state of the union. And the             |
| 53:51      | the, and that's just because frankly, Apple had so much on their plate this year at the keynote.        |
| 53:55      | But to me, this is, I mean, the changes between Siri shortcuts and iOS 12 and shortcuts and             |
| 54:05      | iOS 13 are greater than the changes between workflow and shortcuts. Yeah. You know, if you              |
| 54:12      | look at the way it changed when they brought it into Apple, they were just getting it settled in.       |
| 54:16      | Those roots were still growing. This year, the changes are more extreme and they're all                 |
| 54:21      | generally for the better. Yeah, yeah, they are. And, you know, it's a little bit of pain for            |
| 54:27      | us early adopters to have to rewrite some shortcuts. But we're early adopters here,                     |
| 54:31      | you know, if stuff goes wrong, well, that's on our heads because we've chosen to play with it.          |
| 54:37      | But, you know, in general, it's working. And as always, I'm filing feedback whenever things             |
| 54:44      | don't work as I expect, or whenever things seem to work in an unexpected manner. And I've got           |
| 54:49      | some cases where, you know, this probably is expected behaviour, but to me, it's not expected            |
| 54:54      | because it didn't used to work that way. And it would be nice if there was a little pop-up saying,      |
| 54:58      | hey, you know, this has changed from this to that. When, you know, people who've got it                 |
| 55:03      | installed, install the final version in September. And the ones that have that you are updating,        |
| 55:10      | I'm finding I can make them more efficient because of the new tools. And it's always better             |
| 55:15      | because new options, because of it's so simplified, I'm able to find better ways to make it happen or   |
| 55:22      | improve upon the original shortcut. So I don't mind going back, it's a little time consuming,           |
| 55:27      | but I'm actually enjoying going through and rebuilding a bunch of them.                                 |
| 55:30      | Yeah, definitely. I kind of wish that I could just say, hey, all the ones that are, you know,           |
| 55:36      | currently in the share sheet, like disable them or something, disable all of my shortcuts. And          |
| 55:40      | then as I go through and manually fix the shortcuts and turn them on, I can realise that, hey,          |
| 55:44      | maybe 80% of my shortcuts I don't necessarily use on a regular basis so they can go. But,               |
| 55:50      | you know, there's no way to do that yet. iOS 14, here we come.                                          |
| 55:53      | The way you fix that is you have to go into find each one and turn it off in the settings               |
| 55:57      | for each one. Yeah, that's no fun. It's just like we don't have folders yet to organise shortcuts.      |
| 56:03      | But, you know, as I've said earlier, I think that's probably a fringe problem. I don't think            |
| 56:08      | there's a lot of people with hundreds of shortcuts like you and me. Well, maybe we're going to see      |
| 56:13      | that by next year because now it's coming installed and everyone's phoned by default.                   |
| 56:17      | You know, hopefully a lot more people are going to pick this stuff up and play with it. That's          |
| 56:20      | what we want. Yeah. And if there's people with a lot of shortcuts, they're probably listening           |
| 56:25      | to automators. Yeah, yeah. Pretty much guaranteed, or at least I hope so. And if you know a friend      |
| 56:31      | with a lot of shortcuts he isn't listening to the show, well, suggest it to them politely, please.      |
| 56:36      | Well, I'll tell you. I'm going to say torture them and make them listen to the show because             |
| 56:39      | that sounds horrible. But I'm more excited about mobile automation now than ever. I mean,               |
| 56:46      | with these triggers, with parameters, with the new programming model,                                   |
| 56:51      | suddenly Siri Shortcuts is even more powerful and easier to access. So I just can't wait to see         |
| 56:58      | what comes of all of this. Yeah, it's really exciting to see what has changed and the way               |
| 57:06      | that it's changed for the better because you can tell the Shortcuts team not that they don't care       |
| 57:12      | about us power users, but they're thinking of the people who are new to this. And they're trying to     |
| 57:17      | think, okay, how can we make this understandable and attractive to everybody? From my grandmother       |
| 57:24      | down, my grandmother owns two iPads, realistically, she's probably never going to play with Shortcuts,  |
| 57:28      | but my parents probably will, at least if I show them how to do some things with it.                    |
| 57:32      | They're going to be excited enough to give it a go. And I've already got my dad running a Shortcut      |
| 57:37      | now to AirDrop his selective photos from his phone and delete them. So I can see more and more          |
| 57:45      | people playing with this and seeing if they can figure it out. Yeah, and it really, even for us         |
| 57:50      | power users, making it easier. I mean, how often have you had Shortcuts failed? Maybe you don't         |
| 57:56      | because you're a superhero, but I have Shortcuts fail all the time because I don't have the variable    |
| 58:01      | in the right place or an assumption I made just didn't turn out to be true. And then I've got to        |
| 58:06      | trace it and figure it out. On longer Shortcuts, it becomes a pain in the neck. I mean, even for        |
| 58:11      | people who I would consider power users, this is going to make it easier. Definitely. And even for      |
| 58:17      | me, because I am struggling a little bit more at the moment because I seem to have a bug on my          |
| 58:22      | iPhone where it occasionally gets possessed and it moves up and down inside of a Shortcut               |
| 58:27      | when I'm trying to look at a variable or edit a variable, a magic variable.                             |
| 58:33      | But so this is making it easier despite that little bug. So yeah. So I think all very good              |
| 58:43      | things and I'm super excited. All that being said, it's still a beta. Has it been, please don't         |
| 58:49      | install the public beta on your working phone unless you don't mind it occasionally not being a         |
| 58:55      | working phone. Or less than occasionally, as mine spent most of this morning going,                     |
| 59:01      | hey, I'm going to reboot. I'm going to reboot again. I'm going to reboot again. And then when it        |
| 59:05      | finally booted, it wasn't working. So I had to reboot it again. But if you have an extra device,        |
| 59:11      | I think it's a lot of fun to get in there and play with it. So choose your own poison.                  |
| 59:16      | It is. Yes. And beware, I mean, the migration in beta 2 fixed most of my shortcuts, which were          |
| 59:23      | really broken. But quite a few were still broken. So especially if you're relying on your Shortcuts     |
| 59:29      | to do things, turn off iCloud sync on the device that you're planning on upgrading.                     |
| 59:36      | So if they're broken on that device, the breaks will not sync back. And also if you are upgrading       |
| 59:41      | just one of your devices and you use iCloud sync for your shortcuts, do turn off iCloud sync on         |
| 59:45      | that device that you upgrade. Because once you run it on iOS 13, it will no longer work on iOS 12.      |
| 59:51      | So please be careful with this. All right, Rose, you've got to be honest with me.                       |
| 59:56      | Have you started the install of the third beta on one of your devices already? Damn it. You know me     |
| 01:00:01   | so well. Right? Which one? Yeah, my 11-inch iPad Pro. Me too. It's preparing update. It's               |
| 01:00:10   | preparing the update. I just pushed it. I feel like we're at the end. I'm okay now. Yeah. I've          |
| 01:00:16   | still got my iPhone here in case I need to double check something, but I'm probably safe enough.        |
| 01:00:20   | How long ago did you push the button, Rose? I'm going to say 10 minutes ago. Was it 10 minutes          |
| 01:00:23   | ago? No, like two minutes after I told you I wasn't going to install it. That was like 10 minutes       |
| 01:00:28   | ago. Yeah. All right. Okay. There we go. But it's okay because it's the end of the show. We would       |
| 01:00:36   | really like to thank our sponsors for the show, which are Away. That's waytravel.com/             |
| 01:00:41   | Automators and Smile with TextExpander. All of the links, as always, will be in the show notes.         |
| 01:00:48   | And you can find the Automators podcast on Twitter, Automators FM, and also over in our forums where    |
| 01:00:54   | we would love to have you join this discussion and tell us all the things that you are excited about    |
| 01:01:00   | in the new iPad and iOS betas of shortcuts. And that is talk.automators.fm. David, where can            |
| 01:01:08   | people find you on the internet and around the internet? MacSparky.com is a good enough place.          |
| 01:01:12   | Head over there and you'll find all the stuff I do. That's where you're not hanging out in Batu,        |
| 01:01:17   | which you seem to be at quite frequently, according to [[Instagram]]. I am over at rosemaryorchard.com.        |
| 01:01:23   | And you will find links to all of my social media there. And we would like to thank you,                |
| 01:01:27   | our favourite listeners, for listening to this episode. And we will see you again in two weeks.          |
