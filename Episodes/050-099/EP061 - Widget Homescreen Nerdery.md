---
status: "incomplete"
fc-date:
  year: 2020
  month: 10
  day: 23
fc-category: "podcast"
podcast: "Automators"
published: 2020-10-23
duration: 4440
formattedduration: "01:14:00"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/61"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators061.mp3"
episode: 61
title: "61: Widget Homescreen Nerdery"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary look at the widgets in iOS 14 and how you can automate to make sure you have the data you need, under your thumb.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 061 Discussion](https://talk.automators.fm/t/61-widget-homescreen-nerdery/9274)

# Sponsors
- [[Sync Up (Sponsor)|Sync Up, a OneDrive podcast]] - takes you behind the scenes of OneDrive.
- [[FastScripts (Sponsor)|FastScripts]] - powerful script management utility. Instance access to your scripts, by keyboard shortcut or menu bar.

# Show Notes
- [Fantastical 3.2 is Here With 12 All-New Widgets, Scribble for iPad, and More! | Flexibits](https://flexibits.com/blog/2020/09/fantastical-3-2-is-here-with-12-all-new-widgets-scribble-for-ipad-and-more/)
- [Dark Noise](https://darknoise.app/)
- [FoodNoms | Food Tracker App for iPhone](https://foodnoms.com/)
- [Timery for Toggl](https://Timeryapp.com/)
- [‎Colour Widgets on the App Store](https://apps.apple.com/us/app/colour-widgets/id1531594277)
- [‎Widgetsmith on the App Store](https://apps.apple.com/us/app/widgetsmith/id1523682319)
- [‎Widgeridoo on the App Store](https://apps.apple.com/us/app/id1531359008)
- [‎Usage: Activity & Data Widget on the App Store](https://apps.apple.com/gb/app/usage-activity-data-widget/id970353453)
- [‎Launcher with Multiple Widgets on the App Store](https://apps.apple.com/us/app/launcher-with-multiple-widgets/id905099592)
- [WidgetPack](https://widgetpack.app/)
- [OmniFocus Widgets 2.0 with WidgetPack - HeyScottyJ](https://heyscottyj.com/2020/10/04/omnifocus-widgets-2-0-with-widgetpack/)
- [OmniFocus Widgets with WidgetPack - iOS - Automators Talk](https://talk.automators.fm/t/omnifocus-widgets-with-widgetpack/8864?u=rosemaryorchard)
- [Podcasting Widget](https://www.icloud.com/shortcuts/6ca206c472ac4071ae90dae1006dd309)
- [Deadlines Widget](https://www.icloud.com/shortcuts/2591ad9966da474fab5eaa4c12a6bd62)
- [‎SF Symbols Browser on the App Store](https://apps.apple.com/gb/app/sf-symbols-browser/id1491161336)
- [Toolbox Pro](https://toolboxpro.app/)
- [Home Screen Widgets | MFC Deck](https://mfcdeck.com/docs/1.0/widgets)
- [Scriptable](https://scriptable.app/)
- [Widget Examples - Scriptable - Automators Talk](https://talk.automators.fm/t/widget-examples/7994?u=rosemaryorchard) - Automators Talk
- [GitHub - andyngo/conversable-for-scriptable: Conversable is a simple chat widget for Scriptable.](https://github.com/andyngo/conversable-for-scriptable)
- [GitHub - giroriub/scriptable-public](https://github.com/giroriub/scriptable-public)
- [ScriptStore/StickyNote.js at main · 0507spc/ScriptStore · GitHub](https://github.com/0507spc/ScriptStore/blob/main/Widgets/StickyNotes/StickyNote.js)

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators. My name is Rosemary Orchard, and I'm joined as always                |
| 00:06      | by David Sparks. Hey, David. How are you today?                                                        |
| 00:08      | Hey, Rosemary. How are you? You've moved?                                                              |
| 00:13      | Well, yeah. I've redecorated. I've been to IKEA so many times, it feels like a second                  |
| 00:19      | home, and I have bought pretty much every single smart product they sell. I have blinds                |
| 00:25      | everywhere. I have a robot vacuum that arrived today and is my new best friend. Her name's             |
| 00:29      | Better Cup, in case anyone's interested, that is from the Princess Bride. But yeah,                    |
| 00:33      | I'm automating all of the things, and it's amazing.                                                    |
| 00:36      | We are going to dig deep on that in a future episode. I just want to give you time to kind             |
| 00:41      | of get it all settled, because I think it's going to be nuts, whatever you're going to                 |
| 00:44      | do, and I can't wait to hear about it. Yeah. I mean, it's good because I set up                        |
| 00:48      | some door sensors yesterday, and this morning I woke up and I was like, why is this door               |
| 00:52      | open? It's literally locked. It can't be open. And so I went and I looked at it, and                   |
| 00:56      | the door was indeed still locked shut, and the sensor was on the floor because apparently              |
| 01:00      | I didn't stick it to the door very well, even though I did clean it first. So I've stuck               |
| 01:04      | that one back up, and it seems to be holding now, but we'll see.                                       |
| 01:06      | They had door sensors or cool triggers, though. That's going to be fun.                                |
| 01:10      | Yes. And I've been playing a little bit, and I'm figuring out how to say if the door is                |
| 01:15      | open for more than a minute, because that can be a bit tricky, because I don't want                    |
| 01:19      | the heater to turn off every time the door opens, because I go out the door to take out                |
| 01:22      | the trash or something, and I come back 30 seconds later, I don't need the heating to                  |
| 01:25      | turn off twice while I'm gone. But, you know, there's possibilities.                                   |
| 01:31      | I think that's possible even in Native [[HomeKit]], but let's say that.                                    |
| 01:35      | Yeah. Convert to shortcut. Convert to shortcut is being my friend right now.                           |
| 01:39      | Exactly. All right. Well, what we thought would be fun for today's show is to have two                 |
| 01:45      | automators take a serious look at the widgets that have shown up in iOS 14. We talked briefly          |
| 01:52      | about our home screens on the iOS 14 show. We talked about the shortcuts widget, but                   |
| 01:57      | there's been this amazing bit of, you know, kind of explosion, like a mini gold rush on                |
| 02:04      | the App Store for people making widget apps. And there have been some developers that have             |
| 02:09      | just done an amazing job at implementing widgets for their apps. We're going to talk about             |
| 02:13      | a few of those. But what we really are going to dig deep on today are the widget apps for              |
| 02:19      | making widgets, you know, the kind of the meta level. As automators, this is the kind of               |
| 02:24      | stuff that really pushes our buttons. And Rose and I have gone deep. We've got kind                    |
| 02:29      | of a learning curve on this one. We're going to start with the easy ones. We're going to               |
| 02:32      | get to the hard ones. And by the end, we're going to be writing [[JavaScript]] widgets of                  |
| 02:36      | our own. So it's going to be fun. So I guess we should just get started.                               |
| 02:42      | Yeah. Before we do, there's a couple overview things                                                   |
| 02:46      | on widgets that kind of like kind of hangs as like a cloud. Some of them are really pretty             |
| 02:53      | white fluffy clouds and some of them are dark clouds over this whole conversation. You know,           |
| 02:58      | the good thing about these widgets is that they can be really beautiful or ugly, depending             |
| 03:02      | on your preference. And that they're just a great source for quick information on your                 |
| 03:09      | phone. One of the reasons I use some of the widgets I talk about today is just because                 |
| 03:14      | I want glanceable, usable data on my phone. And that's something we've not really had                  |
| 03:20      | before. Yeah, exactly. And that's the thing. Like I'm currently                                        |
| 03:26      | in a phase where the only apps on my home screen are in my dock. I know, David, you've                 |
| 03:30      | done this before, but I've got way more widgets on my home screen than you do. I'm not doing           |
| 03:33      | a big widget and a medium widget. I'm doing two small widgets and two medium widgets.                  |
| 03:38      | And then the dock. Though I may have a Max phone in my future and I believe that will                  |
| 03:43      | give me an extra row of apps to experiment with. But we'll see what happens there.                     |
| 03:47      | Yeah, I mean, halfway through the beta, I just took all the apps off my home screen                    |
| 03:52      | and I've got a few in my dock. And even the ones in my dock don't really need to be there              |
| 03:57      | because they have good widgets. So my, yeah, at this point, and I realise this is kind                 |
| 04:04      | of early in our relationship with widgets, but I am like all in, you know, and I've got                |
| 04:10      | so I've got my home screen is full of widgets. It really only has two, but they're, they're            |
| 04:15      | stocks. And then to the left of that, you know, what we used to call the today view                    |
| 04:20      | has a bunch of widgets. And then on the right side of that, I've just got the app centre.              |
| 04:24      | So it's, it's a very simple setup for me, but the widgets make this possible. And it's                 |
| 04:31      | just also, I think the widgets are a great way to make your phone your phone. I mean,                  |
| 04:36      | we talked on this show a little over a year ago about the hypothetical shortcut to end                 |
| 04:42      | all shortcuts, you know, the one that would take your calendar, turn it into the wallpaper             |
| 04:47      | and save it to the wallpaper of your phone. And that was one both of us had developed.                 |
| 04:54      | And then [[Apple]] yanked the carpet from under us by taking away the set wallpaper action                 |
| 04:59      | from shortcuts. So that never happened. I had to cut a bunch out of the shortcuts field                |
| 05:02      | guide because I had already planned to publish on it. But the, but now you get that with,              |
| 05:08      | you know, pick the calendar app of your choice that has a widget and you've got an automatically       |
| 05:13      | updating calendar on your home screen all day. It's just, it's awesome.                                |
| 05:16      | Yeah. And as we'll get to later, you don't even necessarily need to use a specific calendar            |
| 05:20      | app because there's lots of ways to do this. And that's what's really becoming the great               |
| 05:26      | thing about this is even if you don't necessarily want to use, you know, a specific calendar           |
| 05:32      | app, but you like the look of their widget, then there's almost certainly a way for you                |
| 05:36      | to create that view yourself with one of the widget apps we're going to talk about. Though             |
| 05:41      | there are some great apps and actually, especially with the app library, I found myself reinstalling   |
| 05:45      | some apps just because this way I have like one specific shortcut action or a particular               |
| 05:52      | widget view, which I like. And then it's in my app library and I don't use the app. I                  |
| 05:55      | just look at the view. Yeah. One of the apps we're going to cover today is one that lets               |
| 05:59      | you write a shortcut to turn it into a widget, which is amazing. So like that and, you know,           |
| 06:06      | I don't get ahead of myself. We got some cool stuff to talk about in today's show.                     |
| 06:12      | The downside though of the widgets is it's not really interactive. And we've talked about              |
| 06:16      | this on the show a few times now. It's, you know, the data update is slow. Some apps are               |
| 06:23      | worse than others where, you know, using the [[Apple Calendar\|Calendar app]] as an example, if you change                 |
| 06:28      | your appointments around, there's a chance your calendar on your home screen isn't going               |
| 06:32      | to be up to date. So that's an issue. There is a limitation on the sizes. You know, they've            |
| 06:38      | got the small, medium, large sizes on Android. You can kind of make widgets any way or shape           |
| 06:43      | or form you want and put them anywhere. And [[Apple]] kind of has this grid system. I don't                |
| 06:49      | really think that's a negative, but I know some people on the internet do. I kind of                   |
| 06:53      | like it to be clean. So I'm okay with that. What are your thoughts on that? Yeah, me too.              |
| 06:59      | I mean, I, on the one hand, I would like to just be able to float anything anywhere. And               |
| 07:03      | that would be great. On the other hand, I want all of the data. You know, I'm very much                |
| 07:09      | a data nerd. If I can get all the data, it makes me happy. So I would much rather just                 |
| 07:14      | have all of the things, you know, right there available for me so that I can, you know,                |
| 07:19      | just grab it all and see it with, you know, one look instead of, you know, one beautifully             |
| 07:24      | positioned photo of my robot vacuum in the middle of my home screen, which I could do                  |
| 07:28      | by taking off all the apps, but, you know, it wouldn't then rotate and turn into my calendar.          |
| 07:33      | That's your robot pet. Let's be honest. Yeah. Yeah. I mean, it's got a name, so it's a pet.            |
| 07:39      | Yeah, no, I agree. And then the other big downside is just, you know, as beautiful and                 |
| 07:46      | wonderful as widgets are, you get almost no support for them on iPad. And it's so disappointing.       |
| 07:52      | So disappointing. I talked about this on iPad Power Users. Every time I open up my iPad and             |
| 07:57      | I look at all those icons and that one sad widget, which is all you really get is one                  |
| 08:02      | medium size sad widget on this side. Yeah. I mean, you've got to swipe to get any more.                |
| 08:09      | It's just, I don't know what happened there. I don't know. I think, I think they've got                |
| 08:12      | something up their sleeve for like iOS 14.3 or 14.4 or something like that because I like,             |
| 08:19      | I want to get a 12.9 inch iPad pro and the magic keyboard. I'm currently still using                   |
| 08:24      | a smart keyboard or a bridge keyboard with my 11 inch iPad. I've switched between them                 |
| 08:28      | depending on what I'm doing. And I would really, really, really like to upgrade my iPad to             |
| 08:34      | the bigger one. But I feel like my phone can give me more information, despite the fact                |
| 08:41      | that I can literally fit my phone in my hand. I've got the 11 pro. I don't have the max                |
| 08:45      | at the moment, the max is coming back. And, you know, I can fit this in my hand and I                  |
| 08:50      | get more data at a glance from this than I get from my 11 inch iPad. It feels like there's             |
| 08:56      | something wrong there. They really need to fix that. And this will give me more automation             |
| 09:00      | options, of course.                                                                                    |
| 09:01      | And [[Stephen Hackett\|Stephen]] over at [[Mac Power Users]] and I were talking about it. He thinks that they're saving          |
| 09:05      | it for iOS, you know, 14 next year.                                                                    |
| 09:09      | Yeah. Well, we'll see what happens, right? But, you know, maybe 13.3. Yeah, it's nothing               |
| 09:15      | in the current beta, but                                                                               |
| 09:17      | I'm an optimist. I feel like we'll get it sooner. I mean, it's like, I guess we'll find                |
| 09:21      | out, but it seems like how hard can it really be, you know?                                            |
| 09:28      | Every single developer out there going so hard, David, so hard because there's always                  |
| 09:33      | a catch to this stuff. You're always there going, yeah, I could just flip a toggle and                 |
| 09:36      | that would happen and then suddenly everything breaks. But yeah, they've laid the groundwork.          |
| 09:42      | So, you know, we've got the idea of it in principle, the code, at least some of it already             |
| 09:46      | exists. I see why, you know, they might want to say, hey, you should have, you know, a                 |
| 09:52      | couple of columns of apps on your iPad, but at the same time, they're not making me have               |
| 09:59      | a row of apps on my iPhone. So just let me use my device how I want. That's why the Internet's         |
| 10:05      | gone so crazy over iOS 13 because, you know, you can set your device to look exactly how               |
| 10:10      | you want and people are going, you know, completely, you know, all over this. It's great.              |
| 10:15      | And I do think that we will get, I mean, they've got a notice that, and maybe that will hopefully      |
| 10:21      | move the iPad update further down, you know, further up the food chain. Either way, okay,              |
| 10:27      | so that's kind of the thing. And like some of these widgets we're going to talk about                  |
| 10:30      | today, these are real problems. The interactivity issues for some of them is a problem where           |
| 10:35      | you can see data, you can't really interact with it going into the app and the inability               |
| 10:41      | to frequently update. And there's some of these widgets that would be amazing on the                   |
| 10:45      | iPad, but there's just such limited real estate for it that you can't use them. So either              |
| 10:50      | way, let's start with some simple ones. I just want to hat tip to the shortcuts widget.                |
| 10:57      | We talked about that at length on our shortcuts iOS 14. Does that say iOS 14 earlier? Anyway,          |
| 11:04      | I said iOS 14 earlier, I'm ahead of the game, David, where overtime travel is into the future.         |
| 11:09      | It's great here.                                                                                       |
| 11:10      | Yeah, okay. So anyway, so we, we talked about it already in our shortcuts episode. It is               |
| 11:16      | the only interactive one that exists. I still think I'm very happy with that design. I know            |
| 11:23      | some people are a little grumpy that, you know, the buttons are the size of two icons                  |
| 11:28      | instead of one, but it's touch friendly. And as I explained that episode, using choose                 |
| 11:35      | from menu shortcuts, I'm able to easily get everything I need into one set of four buttons.            |
| 11:41      | Yes. Yeah. And I think that's great. You know, with, with a little bit of, you know, careful           |
| 11:47      | thinking and a bit of planning, you can, you can make those four buttons do so many more               |
| 11:52      | things and it works. And let's be honest, the, the thing that you want out of a widget                 |
| 11:57      | is that it either shows you the information that you need or it does the stuff that you                |
| 12:00      | needed to do. Those are the two components for a good widget. I would say, obviously                   |
| 12:06      | you want it to look the way you would like something to look, but, you know, if it doesn't             |
| 12:10      | do what it needs to do, either, you know, presenting that information or taking that                   |
| 12:15      | action, then it's a failure for a widget, I'm afraid.                                                  |
| 12:18      | Yeah. And this, this one gets prime real estate on my, on my home screen, it gets the lowest,          |
| 12:25      | you know, quadrant, uh, on where my thumb always is. So, and maybe it's the most used                  |
| 12:31      | shortcut I, I have because I had launched so many of my things on my phone contextually                |
| 12:36      | through shortcuts buttons. So it's just, you know, like I said, we already talked about                |
| 12:41      | this. We don't need to waste time on today, but good job. Shortcuts scene again.                       |
| 12:45      | I'm very impressed with it. I'm really happy with it. I'm really glad that they, they rolled           |
| 12:49      | this out so that we can only use it because it works great for me.                                     |
| 12:52      | Now you added one to the list here that I think you like, and that's the Siri shortcuts.               |
| 12:57      | I'm sorry, Siri suggestions.                                                                           |
| 12:59      | Siri suggestions. So if, if you, um, add a widget on your phone, um, and then you scroll               |
| 13:04      | down in, in that widget area, then you should be able to see, um, that there should be a               |
| 13:10      | Siri suggestions section. Um, and this allows you to add, so there's either a stack or there's         |
| 13:18      | the app suggestions and the app suggestions is such a great widget. So this is one you                 |
| 13:23      | can't stack. Now that's the only flaw with this widget, but it will put eight app icons                |
| 13:30      | in a space and it will update them based on what it thinks you want to do throughout the               |
| 13:34      | day. So those app icons will constantly change. Um, and that for me has been great. That's             |
| 13:39      | on my second page. Um, and I love the fact that those, those eight apps just change themselves         |
| 13:44      | out throughout my day. Yes, you can access the same thing by pulling down an opening                   |
| 13:48      | spotlight, but if I'm looking at information and then it's just like, Oh yeah, and I actually          |
| 13:51      | do want to open the home app. Thanks Siri. You know, that, that's great. So I get to                   |
| 13:56      | it through spotlight. So I've never used that, that, um, that widget because I just didn't             |
| 14:01      | want to give up that precious space. And I understand why it's not stackable because                   |
| 14:05      | it's got such a different look, but there you go. Uh, one of the things we didn't mention              |
| 14:11      | on the negatives of these apps that I think drives me a little crazy is listing the name               |
| 14:17      | of the underlying app under the widget. Just, there's a part of me that hates that. Right?             |
| 14:22      | Yeah. Me too. Me too. I, I mean, I, I both love it because it means that when people                   |
| 14:27      | take screenshots, um, either they have to [[Photoshop]] every single name out or they don't.               |
| 14:32      | And so then you actually know which apps that they use to create all of this. Yeah. And                |
| 14:35      | that's good for developers. So that there is a plus to that. I'm sure David Smith is                   |
| 14:39      | very happy that widget Smith appears on every home screen these days. Oh yeah. Exactly.                |
| 14:44      | Um, but at the same time, just for the, the cleanliness of my home screen, I would really              |
| 14:49      | like it if I could hide those app, uh, app names, but you know, it's okay. I can live                  |
| 14:53      | with it. They're not that many anymore. Yeah. Uh, I'll tell you, one of the native app widgets         |
| 14:59      | that I think deserves call out is Fantastical. Um, they just, you know, they've always               |
| 15:05      | got a good eye for design over there. And I think they just really did a great job with                |
| 15:11      | these widgets and you know, the [[Apple Calendar]] app widgets were fine, but as soon as I saw             |
| 15:18      | the [[Fantastical]] widgets, it immediately replaced them on my home screen. Yeah. Um,                   |
| 15:24      | and I like the fact that it's got, you know, not just calendar in there. It sounds ridiculous.         |
| 15:28      | It's a calendar app, but adding the weather for me made it into, from a good app icon                  |
| 15:34      | or app widget, sorry, into a great app widget. I pestered them about that so much through              |
| 15:38      | the beta. I'm like, just because that just get, that's one less widget I have to deal                  |
| 15:43      | with if I can get today's weather on my calendar. And, uh, I know that was a challenge for them        |
| 15:49      | figuring out where do you put it that doesn't get in the way of calendar data, but I think             |
| 15:53      | they did a good job. And if you use [[Fantastical]], they have, I don't know, they have many             |
| 15:59      | widgets to choose from. So you can choose whatever size you want and how big or how                    |
| 16:05      | much data you want. Uh, which one, do you use the [[Fantastical]] widget? Yes. I am currently            |
| 16:11      | experimenting with the medium size in a stack. Um, but I may try the small size later. Uh,             |
| 16:17      | but, uh, at the moment I'm using the medium one. Yeah. I'm using the large one and I'm                 |
| 16:23      | using the version of large one that gives me the monthly calendar and like today's date                |
| 16:28      | and big text. And then my event list underneath, I think I'm probably going to switch back             |
| 16:35      | to the large one. That's just the event list though, because I find I don't really ever                |
| 16:39      | look at the calendar. Like I don't need to know what day is next Thursday very often.                  |
| 16:45      | And I really like having my whole day events on my home screen. So I'm still in the experimental       |
| 16:52      | phase with that, but I, it's just a good job on them. Another one like that that stands                |
| 16:58      | out for me, um, is [[Dark Noise]]. And, um, we, you know, we had [[Dark Noise's\|Dark Noise]] developer on                  |
| 17:04      | the show and both of us are fans of the application. I like, um, cause I have a, I have a tinnitus     |
| 17:10      | issue. I have a lot of ringing in my ears all the time. So I like to have noise playing                |
| 17:14      | almost all the time and [[Dark Noise]] is great for that. And, um, this one, I think kind                 |
| 17:19      | of fits really nicely in the current widget model because you don't really need to interact            |
| 17:25      | with it a lot, but it's got the one I use is the medium one with eight buttons and those               |
| 17:29      | are the eight sounds I use almost always. And honestly, I could probably even go smaller               |
| 17:36      | with that, but the, uh, but you tap on it, it opens the app and starts the noise. And                  |
| 17:42      | I find that really functional. Yes. Um, and I like the fact that you can specify, you                  |
| 17:47      | know, which, which sounds are going to show up in the widget. Um, because that to me is,               |
| 17:51      | you know, the part that makes all these widgets great, the fact that you can save what shows           |
| 17:55      | up in there. Um, and you don't need to worry about the rest of it.                                     |
| 17:58      | Yeah. Something I've done that I think is kind of clever is I have basically what I                    |
| 18:02      | call my, my sound stack and it's a podcast music and [[Dark Noise]] all in one stack. And                  |
| 18:08      | I can just, you know, flip through those to get to any audio I want. And this is much                  |
| 18:13      | more convenient than going and digging for apps.                                                       |
| 18:16      | Yes. Yeah. That's the thing. Like I, I pretty much, if I'm looking for an app, I open the              |
| 18:20      | app library now. Um, but most of the time I don't need to, because either I've hooked                  |
| 18:24      | it to the double back tap on my phone, opens [[Drafts]]. Um, and it's straight to a new draft              |
| 18:29      | so that I can, you know, start capturing immediately or it's a widget on my home screen.               |
| 18:34      | All right. Um, one, another one. And I, I promise we're going to get to the nerdy or,                  |
| 18:40      | you know, build your own widgets in a minute, but there's a couple I just want to call out.            |
| 18:44      | And one is it's an [[Apple]] widget, but I have not seen anybody write about it or talk about              |
| 18:50      | it, but it's the files app. And this one is very useful. Just gives me the eight documents             |
| 18:57      | I've used most recently in files. And since I use files to store a lot of my work documents,           |
| 19:02      | this makes it super convenient for me to get to those on iPad or iPhone. And I feel like               |
| 19:08      | it's not, you know, there wasn't any rocket science involved here. It's a little icon,                 |
| 19:11      | a little picture and a name of your most recent documents. I think that's probably the best            |
| 19:15      | way to do it. But this is the one where I look at it and I say, man, this would look                   |
| 19:19      | so great on an iPad home screen.                                                                       |
| 19:22      | Mm hmm. Yeah. Yeah. I can see that. I can also see another version of this, which is                   |
| 19:27      | just like, um, icon previews, um, of like square previews of different documents. Like                 |
| 19:34      | you would see like, if you open the pages app and you look there, it, um, at how it used               |
| 19:39      | to be at any rate. Um, and now like the thumbnail view, that's what I'm thinking, just thumbnails      |
| 19:43      | with like little text beneath them, because you can do that. Um, you know, different app               |
| 19:47      | developers have done different things, um, and to, to show different stuff. And I think                |
| 19:52      | a thumbnail version of that would also be pretty cool because most of the time I can                   |
| 19:55      | tell what a document is just by looking at the preview. It would be nice to have both.                 |
| 19:59      | Yeah. I want to see that on the iPad.                                                                  |
| 20:02      | Food and alms is another one. Uh, I've been tracking food and I've, I've just been increasingly        |
| 20:07      | unhappy with the usual food tracking apps as they've got more monetised and more kind                  |
| 20:14      | of just, you know, weird, the way you open the app and they want to sell you a monthly                 |
| 20:18      | plan and they want to tell you about some partner service that will help you. And it's                 |
| 20:23      | just like, I just want to track my food, you know, it's not that hard.                                 |
| 20:26      | And this one sinks my iCloud, right?                                                                   |
| 20:28      | Yeah, it does. And, and it doesn't have the database that some of the others do. That's                |
| 20:32      | my only kind of negative on it. Once in a while, I found I have to add food to the database.           |
| 20:36      | But the fact is I don't eat that many different kinds of food. So very quickly it kind of              |
| 20:40      | got what I needed. And it just got this super clean widget and like there's a couple different         |
| 20:48      | ones. One can give you stats, but the one I like is the one that predicts what you're                  |
| 20:53      | going to eat next because quite often I eat the same thing and they do just do a good                  |
| 20:57      | job with it. I mean, it's, I'm using that widget more than I thought I would. In fact,                 |
| 21:02      | I just this morning took food and alms off my dock because I find all I do is go to the                |
| 21:06      | widget anymore.                                                                                        |
| 21:07      | That's great. Yeah. I mean, I think that's, that's, you know, a sign of a really great                 |
| 21:12      | widget where you're like, I don't need the app icon anymore because I just, you know,                  |
| 21:16      | the widget does what I needed to do. And I found their smart suggestions are pretty good               |
| 21:20      | too. I need to figure out some kind of pantry fridge inventory. So it's like, oh, and by               |
| 21:25      | the way, you are eating this for lunch because otherwise it's going to expire and you don't            |
| 21:28      | want to throw food away. And therefore this is going to be your suggested food. But I'll               |
| 21:33      | get there at some point. Another one that I've been using, and I know you've been using                |
| 21:37      | as well, David, at the Timery widget. Unfortunately, it's lost a little bit of its interactivity       |
| 21:42      | that it had before with, you know, iOS 12, because iOS 13 pretty much takes out interactivity          |
| 21:50      | unless you're shortcuts. So, you know, at least the shortcuts team got that. But it                    |
| 21:55      | has some, some pretty, you know, it works pretty well for me. It's got the stuff on                    |
| 21:59      | there that I need.                                                                                     |
| 22:00      | Yeah. And the way I use this one is actually I have two instances of the widget right next             |
| 22:06      | to each other on my, what used to be called today screen, but they're the two small ones.              |
| 22:12      | And one of them is just a big button that shows the currently running timer. And the                   |
| 22:15      | second one is the one that shows the day's accumulation. And this has been a big day                   |
| 22:22      | for me for podcasts. I did a bunch of post production on Mac power users and I did prep                |
| 22:26      | for today's show. So we're just getting started recording. I can tell you, I already have              |
| 22:30      | two hours and 38 minutes into podcasts today. So, you know, but that's, that's the kind                |
| 22:36      | of data I kind of like, you know, 24 minutes of family time, 19 minutes of health, I need              |
| 22:42      | to work out after we finish. But the, yeah, it's, once again, it's a, it's an app that                 |
| 22:49      | would be better if you could interact with it more in the widget form, but the developer               |
| 22:54      | did a great job with what he had.                                                                      |
| 22:56      | And I think we might see interactivity come back with iOS 14. I'm hoping we do a little                |
| 23:01      | bit more. Like they don't need to like go all out and let you do everything. But, you                  |
| 23:06      | know, for a timer to be able to show, you know, like, oh, and this timer is currently                  |
| 23:10      | active, like it did before, that would be a great, you know, thing to get back.                        |
| 23:15      | Or even just being able to turn off the timer without jumping into the app or task list                |
| 23:20      | applications. Like OmniFocus has one in beta right now that I think is pretty good, but                |
| 23:26      | you can't check items off in the widget because they don't let them.                                   |
| 23:30      | Unfortunately.                                                                                         |
| 23:31      | David, we keep fascinating back between iOS 13 and 14. I've just double checked. We are                |
| 23:36      | on iOS 14 right now. You threw me earlier by saying iOS 13.                                            |
| 23:40      | Yeah, myself as well.                                                                                  |
| 23:41      | And then I thought that I was in the wrong and oh gosh, iOS has been around for a really               |
| 23:44      | long time. Well done iOS. You know, happy teenage years.                                               |
| 23:47      | Listen to the pro users.                                                                               |
| 23:48      | It's at the point where it confuses me.                                                                |
| 23:49      | They don't know a version of iOS they're on.                                                           |
| 23:52      | I know which version of, you know, that I'm running, which is the latest developer beta.               |
| 23:56      | So it's 0.2, beta 3, but don't ask me what the big number is because that's not so important           |
| 24:01      | right now.                                                                                             |
| 24:02      | Well, I've just been spending a lot of time working in betas and it honestly does get                  |
| 24:07      | you confused when you're, you know, either way.                                                        |
| 24:11      | So when we get to iOS 15, I think we'll probably see the interactivity show up, but I don't            |
| 24:18      | want to wait for iOS 15 to get to the iPad. I would really like the iPad to get fixed                  |
| 24:24      | in iOS 14.2, 0.3, whatever.                                                                            |
| 24:26      | Yeah, that would be great if it could be.                                                              |
| 24:30      | This episode of Automators is brought to you by Sync Up, a OneDrive podcast. I love finding             |
| 24:35      | new podcasts to listen to. It's always great finding that intersection of fabulous content             |
| 24:39      | and some wonderful hosts who really can tell you everything.                                           |
| 24:42      | If you're looking for a new shit to listen to, Sync Up takes you behind the scenes of                   |
| 24:46      | OneDrive so you can learn about how to connect files, share your documents, and work from              |
| 24:51      | anywhere. And you'll get to hear about the design and development side of things too.                  |
| 24:56      | Each show covers a dedicated topic, guest interviews, news and announcements, plus a                   |
| 25:00      | special topic outside of the technology norm. And just so you've got an idea of what to                |
| 25:04      | expect, I want to tell you about some of the topics you might be interested in that were               |
| 25:08      | on previous episodes.                                                                                  |
| 25:09      | They've talked about empowering Mac users, changing management and product adoption,                   |
| 25:14      | success, file sharing, personal vaults, and more. I recently listened to their episode                 |
| 25:19      | on mobile productivity on Android. I'm always willing to look at new things, and most of               |
| 25:24      | my colleagues at work use Android, so it's no surprise I learned plenty of tips and tricks             |
| 25:28      | and was able to help some of my colleagues figure some things out too, as well as learning             |
| 25:33      | a few things myself.                                                                                   |
| 25:35      | Go and listen to it now. Just search for Sync Up wherever you get your podcasts. That's S-Y-N-C-U-P,    |
| 25:41      | or just click on the link in the show notes. Go check it out. I thank S-Y-N-C-U-P and Microsoft        |
| 25:46      | for their support of this show and all of Relay FM.                                                   |
| 25:50      | So David, we've been teasing people a lot. Let's get nerdy with our widgets because we've              |
| 25:56      | talked about some of the stuff that you can do just by installing the app. And there are               |
| 26:01      | some other apps, actually, that you can use and you just install them and you do everything            |
| 26:07      | in that app. So there's a whole series of different kinds of nerd levels here. So I                    |
| 26:12      | would suggest that we start at the easier level. So this is the sort of thing that you                 |
| 26:16      | can recommend to friends and family if they're like, oh, I want to customise my home screen.           |
| 26:21      | The first one that I found a while ago, colour widgets. And this lets you put like the time,            |
| 26:27      | the date, weather, and stuff like that. But you can change the colour as implied by the                 |
| 26:33      | name, but the font and positioning and stuff like that from your, from inside of the app.              |
| 26:39      | And it's pretty cool.                                                                                  |
| 26:40      | Yeah. I mean, for the basics, it's, you know, it gives you everything you need. You can                |
| 26:45      | build your own widgets and you have a lot of design control. And I think that's something              |
| 26:50      | a lot of people are looking for. You and I, because we're nerds, look at these widgets                 |
| 26:55      | like how, you know, how nerdy of data can I get you? Like one of the widgets you're                    |
| 27:01      | going to talk about later shows you your podcast schedule for the next week. You know, that's          |
| 27:05      | the kind of nerdy stuff that gets us excited. But a lot of people, they just want it to                |
| 27:10      | show the current day and date in a font that is appealing to them. And that is the ideal               |
| 27:18      | customer colour widgets.                                                                                |
| 27:20      | Yes. And it's great. I did notice that quite a few of these widgets can show you the current           |
| 27:25      | time, but there's a small problem with this, because widgets don't update every like 50                |
| 27:31      | seconds, a 30 seconds, sorry, or something like that. Then they often show you the wrong               |
| 27:35      | time and they can be out by several minutes because they update, I think it's approximately            |
| 27:40      | every 15 minutes, but it depends on how often the app tells them they need to update. So               |
| 27:46      | I found putting the time on my home screen is a bad idea because if I look in the top                  |
| 27:51      | left, A, I already have the time, admittedly is very small, but B, it will be different                |
| 27:56      | almost certainly unless the app was literally, unless the widget was literally just added              |
| 27:59      | to my home screen, it usually floats off and drifts back and everything.                               |
| 28:04      | No, I totally agree. Like there's a reason Fantastic Hell's widget doesn't give you an                 |
| 28:09      | option to put the time on because it's not going to be the same time as the actual time.               |
| 28:17      | So it's so much so that some of the developers have resorted to like fuzzy time and different          |
| 28:23      | ways to do it that is less precise because they can't do it. And this gets back to that                |
| 28:30      | whole lack of interactivity. And I guess kind of a sub issue is that these widgets, the                |
| 28:36      | [[Apple]] doesn't want these widgets killing your battery. So they use very little power. The              |
| 28:40      | screen gets updated and that's basically it until the next scheduled update, which is                  |
| 28:46      | not every 30 seconds. I don't know. I haven't looked into the API. I don't know what's the             |
| 28:51      | most frequent and app can update its widget.                                                           |
| 28:54      | I think this varies depending on like the battery level in your phone and whether or                   |
| 28:58      | not you're in low power mode and a lot of other things. I think I've seen people talking               |
| 29:03      | about every 15 minutes being the most frequent, but at the same time, it's one of those things         |
| 29:08      | where all a developer can do is ask to be updated and put themselves in a queue and                    |
| 29:14      | iOS will go, yep, or nope. And there's nothing that the developer themselves can actually              |
| 29:20      | do about that other than suggest you reboot your phone, which if you ever have an issue                |
| 29:28      | with a widget where it just shows as like a gray block or something, then rebooting your               |
| 29:33      | phone fixes it as far as I can tell. So that's kind of handy to know.                                  |
| 29:37      | Yeah, but it is really, you know, it's very limited is the point. So any of these widgets              |
| 29:44      | that promise to give you up to date, you know, stock, stock widgets that are going to tell             |
| 29:49      | you up to date information about the stock value, those aren't necessarily reliable.                   |
| 29:54      | So just have that in mind.                                                                             |
| 29:57      | Yeah, yeah.                                                                                            |
| 29:58      | Colour widgets is a great app. And I think it's a nice introductory to this, but there's                |
| 30:04      | an app that goes a little further with Widgetsmith. And Widgetsmith is kind of like the original       |
| 30:09      | build your own widget widget app.                                                                      |
| 30:12      | Yes. This is from David underscore Smith. And he also has an app called Watch Smith,                   |
| 30:19      | which some people may be thinking that they've heard of. And Widgetsmith is the widget version         |
| 30:24      | of Watch Smith. So you can do you can add, you know, like different views to widgets                   |
| 30:30      | and you can create multiple different widgets for each different size. So I could create               |
| 30:34      | say seven small widgets, 20 medium widgets and three large widgets or whatever I wanted.               |
| 30:39      | But what I really like is you can say that when it refreshes, like with a specific time                |
| 30:44      | period, it should show this kind of widget. But after that time, for example, after I                  |
| 30:49      | would usually finish work, it should show me a different kind of widget. And I love this               |
| 30:55      | and I've been playing with it. And I've actually just given one, like small spot on my home            |
| 30:59      | screen to Widgetsmith and one particular small widget from Widgetsmith. It's not a stack.              |
| 31:04      | It's just one widget and it changes depending on, you know, what time of the day it is.                |
| 31:10      | And I'm really liking it. It, you know, it's great for making sure I've got the right                  |
| 31:13      | information based on approximately when I am in my day.                                                |
| 31:17      | Yeah. So like during the day, you could have it show calendar events. And then when you                |
| 31:21      | get home, you know, after, let's say after 6pm, it's going to show you music or whatever.              |
| 31:29      | And it even can be controlled on weekdays versus weekends. It's just a very interesting                |
| 31:36      | idea of scripting widgets. I don't think anybody else has done this, although you could duplicate      |
| 31:42      | this feature with some of the shortcuts based widgets, but it's just, you know, it's very              |
| 31:47      | unique. And he came up with the idea on the Watchsmith app, you know, because he did the               |
| 31:51      | same thing with watch complications where you could schedule watch complications.                      |
| 31:55      | Yes. And I've said this on MPU and, you know, Dave Smith                                               |
| 31:59      | is a friend and I just, I'm so happy that he had an app that just took off like it did.                |
| 32:04      | But he's also a very smart developer and Widgetsmith seems like it gets an update every time I go      |
| 32:10      | to check my phone for updates. He's just like cranking them out. So the app is evolving very           |
| 32:17      | quickly because of its popularity. And I'm glad to see him keep the gas down on it, but                |
| 32:23      | it seems like there will be features in this app when this show publishes that are not there           |
| 32:28      | right now because I mean, like I'm in the beta for the 1.1. I mean, he's already upping                |
| 32:34      | the version because he's adding so much.                                                               |
| 32:37      | Yes. Yeah. Same. And the other thing is, you know, there's just so much that people can                |
| 32:43      | do. This is an app that literally went viral on TikTok. David, I can't believe I've just               |
| 32:47      | said those words on automators. This went viral on TikTok because it's a great way to                  |
| 32:52      | customise the widgets on your phone. And it can show you different data and I'm loving                 |
| 32:57      | time zones. Time zones are great. I can always check what time it is, whether you are.                 |
| 33:01      | Yeah. That's nice. And I totally think this is one that you could give a permanent slot                |
| 33:08      | and have it change its content by the course of the day. We haven't really talked about                |
| 33:13      | that. What do you think of the smart stacks versus the manual stack? So you can have the               |
| 33:19      | phone just choose for you when to put data up or you can turn off the smart stack button               |
| 33:26      | and then you have to manually kind of flip between them.                                               |
| 33:29      | Well, I found serious suggestions, specifically the app suggestions, to be pretty much spot            |
| 33:35      | on for me. But unfortunately, I have not found the smart stack to be particularly smart.               |
| 33:41      | It usually has information, which is not what I'm looking for. And more importantly, it                |
| 33:46      | doesn't appear to me that I can actually add what I'm looking for to that stack. So I can't            |
| 33:54      | put a bunch of different apps in there. So I have to create my own stacks so I can scroll              |
| 33:58      | through them. And I would much rather do that because then I can just swipe and there we               |
| 34:02      | go. I'm on, you know, the next stack that the next part of the stack that I need. So                   |
| 34:06      | I'm pretty happy with dumb stacks myself. How about you?                                               |
| 34:10      | I have had the exact same experience. It just seems like when I leave the smart stacks on              |
| 34:16      | and if I just have like a stack with two, like on my, my big widget on my home screen,                 |
| 34:22      | I have now added OmniFocus to it. But for the longest time, it was just photos and calendar            |
| 34:27      | or fantastical. And it just seemed like every time I looked at it, it gave me the exact opposite       |
| 34:31      | of what I wanted to see. And, and I'm not sure this is the computer's fault because                    |
| 34:36      | I don't think there's really any reliable way to determine when I want to see a calendar               |
| 34:40      | versus when I want to see a nice picture. So I turned off all the smart stack. I don't                 |
| 34:45      | think I have it. In fact, I know I don't have it running on any of my stacks. And, you know,           |
| 34:50      | maybe that'll get better in the future, but I feel like that's just not quite right yet.               |
| 34:54      | Yeah. Yeah. Definitely need some tweaking there, at least for, for you and me. But that's              |
| 35:00      | okay because there's plenty of other widgets that we can add into our stacks to make them              |
| 35:05      | a bit smarter ourselves. And one that I found out today, I tweeted about, you know, getting            |
| 35:11      | nerdy with widgets this morning, and several people had plenty of recommendations for me.              |
| 35:16      | And one of them was Widgeridoo, which for starters, best app name ever, David. Absolutely. Lovely        |
| 35:22      | name, Widgeridoo. So the developer tweeted out, tweeted to me and said, Hey, that he had this            |
| 35:28      | app, you know, and you can, that I should give it a go. And he was right. You absolutely               |
| 35:33      | should give this a go because this allows you to make a widget. But it's a kind of a                   |
| 35:39      | step beyond what you could do with, say, Widgetsmith or something. The idea is that you have a         |
| 35:44      | grid and you put different blocks in that grid to, you know, make the widget that you                  |
| 35:49      | want. And you can set colour backgrounds for each block in the widget and gradients on                  |
| 35:54      | them as well if you wanted to. And I'm really liking this as just an easy way to build widgets.        |
| 36:01      | This is something that I could see myself saying to my mom, like, if she's there, you                  |
| 36:05      | know, wanting like a custom widget, it could be like install Widgeridoo, you know, that that's           |
| 36:09      | going to do what you want, where you can get the different pieces of information that you              |
| 36:12      | want in the, in the format that you want. But it's not so complex that you need to like                |
| 36:17      | go and program a shortcut or write a [[JavaScript]] script to make it happen and to update it.             |
| 36:22      | You can just put the stuff in and it does it.                                                          |
| 36:25      | Yeah, I downloaded the app on your recommendation and I bought it. I bought the upgrade. I think       |
| 36:30      | it was like four bucks and you unlock everything. And this is very much, you know, kind of the         |
| 36:36      | simplified Lego for widgets where you can build, you can pick the size of widget you                   |
| 36:42      | want and then they've got a bunch of different components you can choose from. And the components      |
| 36:48      | are interesting, like there's a countdown timer. So let's say you want to count down                   |
| 36:53      | to a holiday or vacation, you can make that a component of your widget. The birthday widget            |
| 36:59      | I thought was really done well as well, where you could have on the medium size, you can               |
| 37:03      | show the person's name and their birthday or you could just have a picture of the person's             |
| 37:07      | show up in a very tiny version where you could have, you know, upcoming birthdays and just             |
| 37:12      | lots of stuff for which people are releasing application specifics, you know, there are                |
| 37:19      | apps out there to give you a widget with birthdays on it, but this just makes that one component       |
| 37:24      | of many others. So it just kind of combines everything into one place. And anybody could               |
| 37:31      | do this. It's just not that hard.                                                                      |
| 37:33      | Yeah, exactly. And I find that it I found that it was really simple to put a couple                    |
| 37:38      | of different widgets together. And it's got access to things like battery usage and stuff              |
| 37:42      | like that as well. So it was, you know, you can, you can have a cute picture of your dog               |
| 37:46      | or you can have the battery or you could have both. And it works really nicely. So I'm                 |
| 37:52      | pretty happy with that. It's also got toggles for things like invert colours and dark mode              |
| 37:56      | and things like that, which is a nice bonus.                                                           |
| 37:59      | Yeah. In fact, and that would be something I would complain about, about some of the more              |
| 38:02      | automation deep apps we're going to talk about is they're really not very conversant with              |
| 38:07      | light mode versus dark mode. They give you a lot of control over what the widget looks like. But,      |
| 38:13      | but, you know, if you build it out as kind of like a dark mode looking widget and your                 |
| 38:18      | phone is in light mode, it stands out as looking funny, whereas this app actually tries to solve       |
| 38:23      | that problem. And overall, the design is very attractive. I mean, it looks it's got kind of            |
| 38:29      | an opinion. And if you go look at the app on the app store, you'll see it. But, you know,              |
| 38:34      | it gives you control over it, but it also makes it easy to make something that looks nice.             |
| 38:39      | And some of these apps to build widgets don't make it that easy.                                       |
| 38:43      | Yeah. Yeah. We're going to get to some of the more complex ones later where you build your own         |
| 38:48      | widget. But that also means that you potentially need to figure out things like padding and,           |
| 38:54      | you know, positioning and stuff like that. Instead of a, I am going to drag this item                  |
| 39:00      | into this block or just tap on this block and I select this item and that's it. I'm done. Now I        |
| 39:04      | can choose my colour. Yes, toggle the gradient on or off. And that's it. I'm done. So, yeah,            |
| 39:10      | there's upsides and downsides to both. I really like playing with things and                           |
| 39:14      | some of the more complicated ones have had me fascinated all day. I've spent half of my day,           |
| 39:19      | David, programming widgets with shortcuts and scripts. Yeah. Well, I can see why. And it's             |
| 39:25      | fun because when you have that kind of control, then you can really make something neat. Like,         |
| 39:29      | for instance, I've been teasing throughout the episode Rose made one that looks at your calendar       |
| 39:34      | for the next, I think seven days. And if there's any podcast scheduled, it gives you a list of         |
| 39:39      | those over the next seven days. That is not something you could do with which we do because            |
| 39:44      | it, it'll give you a calendar and it'll leave in with their latest update, let you pick a specific     |
| 39:49      | calendar, but it will not say give me every event on this calendar over the next seven days. At least  |
| 39:54      | I couldn't figure out a way to do it. I think it's also, I've got multiple calendars for podcasting    |
| 40:00      | and I've actually made three, three widgets, which are almost the same, but they're not actually the   |
| 40:04      | same because they're all calendar based, but you know, I've got podcasting, I've got deadlines,        |
| 40:09      | and I've got my, my, my time plan for my day, which is based on my time blocking calendar              |
| 40:13      | and a couple of others. So yeah, but I mean, they don't like look into the future so much,             |
| 40:19      | it'll have today's calendar and tomorrow's calendar, but it won't have all the events in               |
| 40:24      | this calendar over the next week. But who knows, by the time this show publishes,                      |
| 40:28      | it may do that because that's the world we live in with these widgets. These developers are going      |
| 40:32      | crazy and just, you know, hitting updates daily on apps like would you redo a similar one,             |
| 40:40      | but more nerdy, I think would be usage. And that is an app that does nothing, but just kind of give    |
| 40:47      | you data on your phone, battery level data usage, just all the kind of like, if you want to nerd out   |
| 40:53      | and have a widget that just tells you, you know, what you're doing with your phone or whether,         |
| 40:58      | you know, where a bunch of, you know, usage statistics are on your phone. That's what this             |
| 41:04      | one does. There's not that much more to say about it than that's the focus of it, but it looks nice.   |
| 41:09      | It's got a good design. I've been using it just, just to kind of track battery and things on my        |
| 41:15      | phone. And I put it over in the today view screen, I don't look at it often, but it's nice knowing     |
| 41:20      | I can just swipe over and have that stuff if I want it. Yes. And that's the thing with all of          |
| 41:25      | these, you know, you can, you can play with them and see, you know, what, what do you actually use     |
| 41:31      | and what do you not use? And what should you maybe, you know, like move off of your home screen into   |
| 41:36      | the today view, which yes, I am still using and by the sounds of it, David, you are as well.           |
| 41:41      | Oh yeah, big time, big time. Okay. Another one that is of interest to me is launcher five.             |
| 41:49      | Launcher was kind of the original customised your widget app on the iPhone. We've talked about it on   |
| 41:57      | automators several times back before these new widgets existed with iOS 14. And of course,             |
| 42:04      | they made the transition to iOS 14. Are you using launcher at this point?                              |
| 42:09      | I was using launcher for a little while. And then one of the primary use cases that I had for it,      |
| 42:15      | which was messaging people through WhatsApp, they decided to get an iPhone. So I can use iMessage      |
| 42:20      | now. And so I'm not using that as much because I have the pinned people in messages, which is much     |
| 42:25      | more convenient. But I have been playing with it quite a bit. And I like the fact that you can,        |
| 42:31      | you know, specify pretty much anything to be behind any icon and so on. And so I'm probably            |
| 42:37      | going to put my playlist one back up there because I had several different playlists. But              |
| 42:42      | unfortunately, on the iPhone, you cannot customise play to all of my speakers. And I have a speaker    |
| 42:48      | in almost every room right now, David. So I would really like to be able to say, hey, play this        |
| 42:53      | everywhere. I can't do that on iPhone. And that's a iOS limitation, not anything to do with launcher   |
| 42:58      | specifically. Yeah, but launcher is interesting because for an automator, because it gives you         |
| 43:04      | the power at the back end, you know, you don't have a lot of control over how the widget looks.        |
| 43:09      | But when you press the button, the app has a lot of power behind it of things it can do, you know.     |
| 43:14      | So it's, it's just, you have to take a look at it. And we've talked about launcher on the show         |
| 43:19      | before. So go check it out. But it is now part of the iOS 14 widget ecosystem. So that's good.         |
| 43:28      | Yes, yes, it's not only good, it's great because there is so much that we can do with this.            |
| 43:33      | David, are you ready to get even nerdier? Yes, I think we need to go a level deeper, Rose.             |
| 43:38      | Okay, because I think I'm going to start on a simpler one. And I'm using air quotes here because       |
| 43:45      | all of these can be as complicated as you like. But Charty definitely deserves a shout out here       |
| 43:52      | because you can turn charts into widgets, which means you can display any data as a chart,             |
| 43:58      | or you can display any data as data, because Rodrigo, who was on the show before,                      |
| 44:04      | realised that people want to display things and they want things to be pretty on their phones.         |
| 44:09      | And so now you can also create another kind of chart. And they have, I've forgotten what it's          |
| 44:17      | called, I think it's like data display or something like that. But they, there are so many             |
| 44:23      | different kinds of data that you can display here that it's really great because it turns out          |
| 44:30      | people are great at displaying data and making it pretty. And who doesn't love pretty data?            |
| 44:35      | Yeah. And the thing, the real payoff is that this combines with shortcuts, right?                      |
| 44:42      | Yes. And that's what Charty always has been. It has been an ability to take your shortcut data        |
| 44:48      | and turn it into something that looks nice. But now it looks nice, right?                              |
| 44:51      | It looks nice. But now it looks nice on your home screen. And, you know, like the stuff we were        |
| 44:57      | talking about earlier, like a countdown timer, you could using Charty build a shortcut to do          |
| 45:03      | also a countdown timer and turn that into a chart widget on your home screen. And you would have       |
| 45:09      | absolute control over exactly how that looked. That's a very simple example. I mean, but we            |
| 45:14      | talked about Charty tracking OmniFocus tests that you completed versus didn't complete, you know.     |
| 45:20      | I mean, you could have any kind of data that is accessible via shortcuts become a shortcut widget      |
| 45:28      | on your or just a widget on your home screen. Like this is one for me that like, you know,             |
| 45:34      | I'm sorry to keep banging this drum. But if I had that whole iPad screen, can you imagine the          |
| 45:39      | charts? Like I could have a status board for my day right across the top of my iPad. I mean, it's      |
| 45:45      | just it's harder to do this on the iPhone because there's just not enough pixels. But, but man,        |
| 45:52      | Charty has a lot of potential. Yes, yes, it does. And the other thing is, is because a lot of         |
| 45:58      | people have already been playing with this stuff and creating charts, you know, to show in other       |
| 46:04      | areas, you know, within shortcuts, or maybe, you know, a report for their boss, so that they can       |
| 46:08      | say, Hey, yeah, I really did work 70 hours this week. Here's the chart to prove it. You know,          |
| 46:13      | now you can take that and display it on your home screen and maybe inverse it so that you can          |
| 46:18      | see how much free time you had instead. But it's it's really great to see, you know, the apps that     |
| 46:23      | already existed, you know, Launcher 5 and Charty, you know, two examples of this, you know, expanding |
| 46:31      | to really, you know, go all out on the widgets. Yeah, it's now up to 22 different actions for          |
| 46:37      | shortcuts with Charty and five different widget styles. I mean, it's just, first of all, can I        |
| 46:44      | just say, I love that this guy had this crazy nerdy idea, and there's enough people out there that     |
| 46:50      | are interested in stuff like this that he could turn it into a business. I mean, that's amazing.       |
| 46:54      | But, but yeah, you're going to hear more about Charty and widgets, I think, going forward on          |
| 47:00      | the Automators podcast, because it just digs in so deep. And Charty, I think, kind of also works      |
| 47:06      | hand in hand with the next app. And the next widget pack is one that we could legitimately             |
| 47:12      | give an entire show to. Oh, yeah. And so I've been doing some playing this morning, specifically,      |
| 47:19      | I've been playing with this for quite some time, because widget pack is a very basic app on its        |
| 47:26      | own, in that it just runs a shortcut, and then uses that to figure out what the widget is,             |
| 47:33      | and then displays it, which means that in order to update it, you have to run a shortcut. So I         |
| 47:38      | now have a shortcut called widget updates, which I just run on a regular basis. I have it run,         |
| 47:44      | I think, every time I close [[Drafts]], and at the moment is running once an hour. And these widgets       |
| 47:48      | don't sync between your devices, but you can create a widget on, say, one device and then              |
| 47:54      | run it on another, and it will just create the widget and update it as well. But it won't update       |
| 47:59      | something on another device. But what I like about this is everything is inside of shortcuts.          |
| 48:05      | So you create horizontal stacks and vertical stacks. Horizontal stacks are things going across         |
| 48:10      | your widget, vertical stacks are things going from top to bottom of your widget. And there's           |
| 48:14      | also a Z stack where you can then have layers. So you have a background, and then you have a text,     |
| 48:19      | and maybe something on top of that. And this is great because Scotty Jackson, who we've had on         |
| 48:28      | the show before, created custom OmniFocus widgets with widget pack. And I've got a link to his         |
| 48:33      | blog post on that. And then there's a forum thread, which has got a whole bunch of other               |
| 48:37      | things in there as well. But he created that. Now, OmniFocus has got widgets in beta right now.        |
| 48:42      | But this is custom widgets, displaying the data that he wants in the way that he wants it to be        |
| 48:48      | displayed. And that, for me, is the key. And I was looking at that. And this morning, I went,          |
| 48:54      | you know what I really like on my home screen, my podcasting schedule, and deadlines that I've         |
| 48:59      | got coming up. And also, I'd actually quite like a plan for my current day, you know, what have        |
| 49:05      | I blocked out time wise for my day. And so I created three shortcuts, which are almost identical       |
| 49:12      | to each other. I've got podcasting deadlines, and my daily plan is what it's called. And I use an SF   |
| 49:18      | symbol to start with. And then I create the title. And that is in a horizontal stack. And I set a      |
| 49:24      | colour of that. And then I pull in calendar events. And I go through each one. And I format the date    |
| 49:29      | to be a specific date. And then I put something else after it. And each event becomes a horizontal     |
| 49:35      | stack. And then I put all of my horizontal stacks into a vertical stack. And that's my widget.         |
| 49:40      | Now, it sounds kind of complex, but I'm going to have links in show notes to how I did both my         |
| 49:44      | podcasting widget and also my deadlines widget. Because this is a, it sounds complicated. And          |
| 49:54      | some of the shortcuts that I've taken apart from people using widget pack are most definitely          |
| 49:58      | complicated. But it can also be done quite simply. And I think the deadlines one in particular is      |
| 50:05      | quite a simple shortcut. And people will be able to figure that out from there.                        |
| 50:09      | Yeah, it really isn't that hard. And yeah, like the power roses shortcut gives you, this is the        |
| 50:16      | one I was talking about earlier, is that it shows you podcasts scheduled over the next week,           |
| 50:23      | where I was unable to do that with any of the other like kind of built in calendar tools,              |
| 50:28      | because only in shortcuts, can you say, look at the next seven days or look at the next 14 days        |
| 50:33      | and give me every event in this calendar list, or you could even get more specific, like if you        |
| 50:39      | just wanted recording, and if you named your events recording automators, you could say it has to be   |
| 50:46      | in one of these three calendars and have the word recording in the name. So with shortcuts,            |
| 50:50      | you've got this massive power to, you know, to filter and, you know, stretch out or to limit           |
| 50:57      | your search. And then what you get with this app with, you know, I forget the name already,            |
| 51:05      | it's a widget pack. With widget pack is then you can say, okay, now take all that data that I've       |
| 51:10      | just found through these fancy filters and display as data. And it's not ugly. I mean,                 |
| 51:16      | Rose just kind of breeze by the fact that she's using [[SF Symbols]], but that's [[Apple]] has made            |
| 51:22      | its own basically icon set for developers that normal people can use. And she's hitting that in        |
| 51:29      | shortcuts to make a really attractive widget that shows her stuff happening over next week.            |
| 51:35      | Not everybody listening has a podcast schedule, but maybe you've got a team meeting schedule or        |
| 51:40      | some other thing that you'd like to see out a week in advance. You can just download this widget.      |
| 51:46      | You know, knowing your kids school plan, things like that, you know, my parents, it sounds really      |
| 51:51      | silly. My dad has a calendar which tells him which bin needs to go out which week, because here in     |
| 51:56      | the UK, the recycling bin is picked up on one day. And then the next week, it's not the recycling bin, |
| 52:01      | it's the regular bin. And then every third week, there's glass as well, but it doesn't matter          |
| 52:05      | what other bins going out. So my dad has a calendar for that, which he shares with my mom.             |
| 52:09      | I have, I'm making one of these custom widgets so it can be on their screen. So it'll show them,       |
| 52:14      | hey, don't forget to put out these bins this week. And, you know, it sounds really silly. And the      |
| 52:20      | other Alexa skills and stuff for this, but at the same time, just being able to put custom data        |
| 52:26      | that you want on the home screen of your phone is pretty cool. And I have to say, I really like        |
| 52:32      | the fact that widget pack includes [[SF Symbols]]. There's also another app which I'm going to put         |
| 52:37      | a link to in the show notes, because [[SF Symbols]], San Francisco symbols, is a really nice way of        |
| 52:43      | showing, you know, an icon to represent something. And there, there's a great app that you can use     |
| 52:51      | on your iPhone to, to see, you know, all the different symbols. There's also an app from               |
| 52:56      | [[Apple]] on your Mac, which you can download and look at for free. But I'm using this iPhone one,         |
| 53:03      | which I've linked in the show notes now. I've gone all in with [[SF Symbols]]. If you've seen              |
| 53:08      | any of the presentations I've done lately, I use them as my icons and the paper was field guide,       |
| 53:13      | which will get released after Big Sur. The [[SF Symbols]] show up throughout the, those,                   |
| 53:18      | those keynote presentations. So it's just, it's just a great way to, to easily demonstrate data.       |
| 53:24      | But the nice thing, you know, the point here is you're accessing it from inside shortcuts. And         |
| 53:29      | all of the time we spent talking about shortcuts on this show over the last several years, and,        |
| 53:34      | you know, my shortcuts field guide, Rosa's shortcuts book, it all kind of leads to this,               |
| 53:39      | to a point where you say, now, okay, I'm getting good at shortcuts and I'm getting data one out        |
| 53:43      | of shortcuts. Now I'm just going to have that available to me on my home screen at a glance,           |
| 53:48      | where I don't have to do anything. I don't have to run a shortcut. It's just there for me. And         |
| 53:53      | that, you know, that's the payoff. Interestingly, one of widget packs actions is update widget,        |
| 53:59      | you know, because of this problem that we, you know, it just doesn't update as often as we'd like.     |
| 54:05      | But they've even tried to solve that with this app. Well, update widget specifically                   |
| 54:10      | saves your, your current widget data into widget pack so that then widget pack can display it.         |
| 54:16      | And Charty has another one as well, which is also called update widget. And yes,                      |
| 54:21      | if you're using Charty, you need to use the Charty action. If you're using widget pack,              |
| 54:24      | you need to use the widget pack action where, and it basically tells these apps, okay,                 |
| 54:29      | hey, this is, you know, the current state of what should be in your widget. So the next time           |
| 54:33      | the iOS says, have you got a widget update for me? They can go, yes, yes, I do. Here is the            |
| 54:37      | current data, please, please, please, please, displayed. At which point iOS will go, yep, or           |
| 54:42      | nope. But, you know, they, they then have it so they can do that. But like the thing you're doing      |
| 54:48      | with it, saying show me my podcast over the next week, that is something that makes sense for a        |
| 54:53      | widget because it's not going to change frequently. And largely the data is going to be accurate.      |
| 54:59      | Yes. Looking at your, your widget, I haven't had time to dig in on it. Something I'd like to do        |
| 55:04      | is when I tap on it, have it open up the calendar in Fantastic Health. I don't know if I can do        |
| 55:10      | that or not. That's, that's something I've not done yet. But if you look, so I linked to Scotty's      |
| 55:17      | OmniFocus widgets as well in the show notes. He has the URL section in there in, in his actions,       |
| 55:26      | so that when you tap on one of those actions, what the tasks in OmniFocus, it will take you to that.   |
| 55:31      | And I've yet to do that with mine. But you can do that so that it will open up the calendar,           |
| 55:37      | or you could even have it open to specific events or things like that. At the moment,                  |
| 55:42      | I'm fine with it pretty much just displaying. And I have a mostly black background on my iPhone,       |
| 55:46      | which is why the backgrounds of these widgets are indeed black. But that works quite well,             |
| 55:50      | because it just blends in and I just see deadlines or podcasting or my daily plan.                     |
| 55:55      | Yeah. Well, Scotty's is, is amazing. It's like a work of art because.                                  |
| 55:59      | Yeah, it's very pretty.                                                                                |
| 56:01      | And like you said, he's using the [[URL Schemes\|URL scheme]]. So if you tap on a task on the list,                     |
| 56:07      | it takes you to the individual task in OmniFocus. Well, at the point we're recording this,             |
| 56:13      | I'm on the OmniFocus beta. The OmniFocus list doesn't do that. You know, I mean,                       |
| 56:18      | but the OmniFocus one presents the data a little denser, which I think I prefer,                       |
| 56:23      | but I'm not sure. But, you know, I could do that too if I altered Scotty's script to put him closer    |
| 56:28      | together. It's just, it's really quite impressive what he's done with this. And it really gives me     |
| 56:35      | hope that any app that is addressable through shortcuts could become, you could make a widget          |
| 56:41      | exactly how you want it with this. I do wish, however, that there was a taught a way to follow         |
| 56:48      | the system like light mode, dark mode. Like I don't see that with. So you can do that. Okay.           |
| 56:54      | That is something you can do, but it's not the most logical things to do. So what you need to do       |
| 56:59      | inside of shortcuts with widget pack, I'm just creating a new shortcut. So I can just double           |
| 57:04      | check all of the actions. And of course, the app screen on iOS 14.2 beta three is blank. There we      |
| 57:11      | go. So you can set the colour. And you can say primary. And there's also secondary. So when you         |
| 57:19      | set the colour, and there's also an accent colour, when you set a colour, and it uses primary,            |
| 57:25      | this changes depending on whether or not your device is in a light mode or dark mode.                  |
| 57:30      | And that means that it will then change things. So primary, I believe is white. And then if you        |
| 57:37      | invert it, you get the opposite of it. And there is an invert colour action in widget pack. So what     |
| 57:42      | you can do is you can set your background. So you can create a colour, set that to set your             |
| 57:47      | background, modify the background to be that colour, invert that colour, and then set your foreground    |
| 57:53      | colour to be that. Now I am setting my foreground colour to be white in my widgets. And this means       |
| 58:02      | that it, they show up on a black background. Because to start with those, they're going,               |
| 58:05      | why is my text not visible? Because I hadn't changed it. And then I realised that I was                |
| 58:09      | setting the title colour and it's not being overwritten. And this is a really smart move on             |
| 58:13      | the widget pack developers part. Because what it does is it means that if I set a colour,               |
| 58:18      | then that's specific. And then if I set a foreground colour, it just goes, hey,                         |
| 58:23      | for all the things where she didn't set a colour, now go and change that. But if I did set a colour,     |
| 58:27      | it leaves it as is, which is pretty cool. Yeah. And you can, since you can, you can set                |
| 58:32      | appearance to dark or light with shortcuts. Is there a way to do an if statement to say if             |
| 58:39      | can it detect whether or not it is in currently in light mode or dark mode? I'm not sure that you      |
| 58:43      | can. I believe that might be a toolbox pro action. I am drawing a blank on that mentally               |
| 58:53      | at the moment. But I believe I'm gonna, I'll look into it. I'm just kind of like thinking out loud.    |
| 58:57      | Is dark mode on is a toolbox pro action. Okay, great. So then you can use that                         |
| 59:03      | for an if statement. And then you could actually even just make your own set of custom                 |
| 59:07      | light mode and dark mode looks for these as well. Just run toolbox pro first to see                    |
| 59:13      | is she in light mode or dark mode and, you know, then set up the colours dependent.                     |
| 59:18      | Be it add a lot of work to building it, but it would be kind of cool.                                  |
| 59:21      | Yeah. And, you know, if you're going to go nuts on, on building this stuff,                            |
| 59:24      | why not add in some of the other great apps that are out there for this?                               |
| 59:29      | I just can't get over how impressive this is. I mean, Charty's amazing too, but Widget Smith           |
| 59:37      | or Widget Pack, there's so many names. Widget Pack is really, it just almost gives you the             |
| 59:44      | ability to do anything with shortcuts in terms of widget creation.                                     |
| 59:47      | I'm going to include some, some screenshots, screenshots, screenshots in the show notes                |
| 59:51      | as well. Because the, the app, the widgets that I created this morning,                                |
| 59:57      | there, there are nothing particularly great, but they look pretty nice. I have to say,                 |
| 01:00:03   | like, you know, I wasn't there trying to make, make them look as pretty as possible.                   |
| 01:00:08   | I literally just set like title, a little bit of bold, added some colour, added an SF symbol,           |
| 01:00:14   | and they look pretty cool. They look professional. I mean, really.                                     |
| 01:00:18   | Exactly. Like they look like something that somebody's actually designed. Now,                         |
| 01:00:24   | I am not a designer and I'm sure there are going to be many designers sending me email.                |
| 01:00:28   | I apologise. I'm not suggesting that you couldn't do a better job because absolutely                   |
| 01:00:33   | somebody with a design background could do a better job. But me, I don't have a design                 |
| 01:00:37   | background. All I can say is, does this look pretty to me? And the answer to this is unequivocally,    |
| 01:00:42   | yes, it's, it's relatively clean and simple and minimalist. I say relatively, I've got colours          |
| 01:00:47   | and icons and stuff in there, which technically are unnecessary, but it looks nice. And it's got       |
| 01:00:52   | all that data in there. So I'm pretty happy with that. Yeah. I feel like both you and I are going      |
| 01:00:58   | to have a lot of fun building apps out of shortcuts or widgets out of shortcuts, which it just kind    |
| 01:01:05   | of, it just so logical when you think about it. Like, you know, we've had shortcuts for a while        |
| 01:01:12   | now. We've had the ability to do powerful things in shortcuts, but there's always been this point      |
| 01:01:16   | of friction of getting data out of shortcuts. Are you going to sit and like talk to your phone and     |
| 01:01:20   | try and get it to give you data? Are you going to, you know, work through a big choose from menu       |
| 01:01:25   | list? But we're just, you're looking for basic information. Why not just have it appear that,          |
| 01:01:32   | I mean, that's the most frictionless way you can get this. This episode of the Automators Podcast      |
| 01:01:38   | is brought to you by FastScripts. Go to fastscripts.app slash auto, get 20% off the powerful script    |
| 01:01:46   | management utility. I am so pleased to have FastScripts as a sponsor of the Automators Podcast.        |
| 01:01:53   | We've talked about this app before in the editorial section of the show because we love it.            |
| 01:01:58   | What's the point of automating the tedious tasks in your life if you don't have instant access to      |
| 01:02:03   | those automations at the tip of your fingers? FastScripts is a supercharged script menu for            |
| 01:02:08   | your Mac that makes it easy to organise and run your scripts. With FastScripts, by defining global     |
| 01:02:15   | or app specific keyboard shortcuts, you can customise the behaviours of all your most used Mac apps.    |
| 01:02:21   | You can even use it to override the default keyboard shortcuts in many apps. And the best part is      |
| 01:02:27   | FastScripts is completely free to use with up to 10 keyboard shortcuts. So you can use it as a quick   |
| 01:02:34   | fix for your most urgent needs. And when you decide you want more than 10 shortcuts, unlock premium    |
| 01:02:39   | functionality with a one-time payment of $25. We talk a lot about creating scripts on this show,       |
| 01:02:46   | but [[Apple]] doesn't really make it easy to trigger these on your Mac. And that's where FastScripts       |
| 01:02:50   | comes in. FastScripts picks up where Apple leaves off. With FastScripts, you get that enhanced upgrade |
| 01:02:57   | to the [[AppleScript]] menu. And it's a familiar design that you see, but it's a better user interface    |
| 01:03:03   | and easier to get to your scripts. But even more important is the powerful keyboard shortcuts. With    |
| 01:03:09   | FastScripts, you can set global or application specific control of the [[AppleScript\|AppleScripts]] at the tip        |
| 01:03:16   | of your fingers. I use these all the time because I have too many [[AppleScript\|AppleScripts]]. For example, I have   |
| 01:03:21   | one that creates a whole nested set of folders for new client projects. I tied that to a FastScript    |
| 01:03:28   | script. So when I'm in the Finder, I get a new client, I push one keyboard shortcut and get all        |
| 01:03:33   | my folders generated for me automatically. Because it's all done in [[AppleScript]], I don't need to go   |
| 01:03:39   | any further than FastScripts to make it happen. If you've ever been sitting at your Mac and known you  |
| 01:03:44   | had a script that could solve a problem, but just not sure where it is or how to trigger it,           |
| 01:03:49   | then you need FastScripts. And best of all, listeners to the Automator's podcast can get 20%           |
| 01:03:55   | off for a limited time. Just go to fastscripts.app slash auto, now and access to the exclusive         |
| 01:04:04   | Automator's discount coupon. That's fastscripts.app slash auto for that 20% off. Our thanks to         |
| 01:04:10   | FastScripts for their support of the Automator's podcast and all of Relay FM.                           |
| 01:04:17   | Rose, this submarine goes deeper into nerdiness.                                                       |
| 01:04:22   | Oh, it does. It does. And I think the first one that we have to talk about, unfortunately,             |
| 01:04:27   | I've not had that much time to use it. I've been playing with it for many other things.                |
| 01:04:32   | MFC Deck, not NFCdeck, MFC Deck. This is by Adam Tow, who was on the show before,                        |
| 01:04:38   | a creator of LaunchCuts and many, many, many amazing shortcuts, like storytelling                      |
| 01:04:45   | ones and things like that. This is an app, which is a widget app inside of the app.                    |
| 01:04:54   | And then it also adds widgets to your home screen. And again, you built these with shortcuts.          |
| 01:05:00   | It's great. I've been playing with it quite a bit, and I'm pretty impressed with it.                   |
| 01:05:04   | Yeah, it is. He covers all the different sizes. It also can create decks. It's a great app.            |
| 01:05:16   | Like you, I have not gone as deep on this as I have on the others, because there's just so much        |
| 01:05:21   | going on right now. And all this stuff is evolving so fast. But good on Adam for getting out on day    |
| 01:05:29   | one. What I really like is one of the examples that he has, and I'm not sure if he's documented        |
| 01:05:34   | this somewhere, but I did see he did a little presentation while this was in beta for a few            |
| 01:05:39   | people. And I saw that he has an office lights widget. And this is a widget I need to steal,           |
| 01:05:46   | because I have home kit stuff everywhere now. And I would really like to know everywhere if my         |
| 01:05:51   | heaters are on, if certain lights are on and things like that. And it's displayed. It's a              |
| 01:05:56   | dark purple widget, a gradient going from sort of mid purple to a dark purple with a home icon in      |
| 01:06:00   | it. And then it's got little light bulbs around the edge. So you can see which lights are on           |
| 01:06:06   | and which lights are off. And this is a work of art, because it's the positioning of where the         |
| 01:06:12   | lights are in his office, I believe. And I just love the fact that you can then see which lights       |
| 01:06:17   | are on and off. And that to me is awesome. And I really want to steal this widget.                     |
| 01:06:21   | Yeah, well, we'll probably come back to this app, because there's just, there's more into it than      |
| 01:06:27   | we have time for today. I mean, several of these apps could get their own show.                        |
| 01:06:32   | Yes. And that's not a promise, but we may well do a show or part show on just one app at some          |
| 01:06:39   | point. And then like another one that falls in the same category. And I think this is the full         |
| 01:06:44   | depth of nerdiness you can get with widgets is [[Scriptable]]. I mean, Scriptable, again,                  |
| 01:06:49   | we had the developer on the show, it's a [[JavaScript]] programming environment for the iPhone,            |
| 01:06:54   | I don't know how else to put it. But, you know, [[Simon Støvring\|Simon]] added widgets.                                   |
| 01:07:01   | Yeah, he didn't just add widgets, he added widgets, people went crazy over widgets in a good way.      |
| 01:07:07   | And there is an entire thread in our forum of people creating widgets, which is both the               |
| 01:07:14   | nerdiest thing I've seen in a while, but also one of the things that made me the happiest of being     |
| 01:07:19   | in a while because I was just there and it's like people are posting [[JavaScript]] code to make widgets.  |
| 01:07:23   | I have stolen so many of these widgets. It's great. I was playing with one a couple of days ago,       |
| 01:07:29   | the sticky note widget, where you could just have it showed like one specific sticky note.             |
| 01:07:34   | And I love that idea. It's great because you just have a sticky note and it's on your home screen.     |
| 01:07:41   | And then once it's done, you leave it and you can change it and make a different one.                  |
| 01:07:48   | And that's been really helpful for getting some things done.                                           |
| 01:07:51   | Yeah. And, you know, anything you can do with [[JavaScript]], you can turn into a widget. Like,            |
| 01:07:55   | I think at one point, I saw [[Jason Snell]] had written a [[JavaScript]] accessing the home weather data       |
| 01:08:02   | from his home weather station in California. We're dealing with a lot of poor air quality              |
| 01:08:07   | as the fires kind of go off and on. So he wanted to get his backyard air quality                       |
| 01:08:12   | in a widget and he did that with the Scriptable, just pulling the data off of his backyard weather     |
| 01:08:17   | station. I mean, this is the kind of stuff you can do with this. And it's not that inaccessible        |
| 01:08:25   | if you go into it. Even if you're not a professional programmer like me, you can,                      |
| 01:08:29   | this [[JavaScript]] feels to me a lot like [[AppleScript]]. You just need to find an example and start         |
| 01:08:34   | hacking at it and you can make it work. Yes. The other thing that I like is a lot of people have       |
| 01:08:39   | gone to great lengths to try and share their scripts with you. So there are scripts in the             |
| 01:08:46   | forum, but there is one particular person and his name is Andy. And he's created a widget              |
| 01:08:54   | in Scriptable and it's called conversable. And there's an entire GitHub repo, again,                    |
| 01:08:58   | I've linked it in the show notes, where you can add specific context to your home screen.              |
| 01:09:05   | And it has their name underneath and then a tiny little icon adjacent to the name                      |
| 01:09:10   | for messaging or calling somebody or [[WhatsApp]]. And I love the fact that you can do this because        |
| 01:09:17   | then you have specific people on your home screen, you just tap it and it does that action.            |
| 01:09:21   | And that to me is, it looks so nice as well. And I downloaded this one and give it a try.              |
| 01:09:30   | That's actually how I messaged you earlier today, David. And it's great.                               |
| 01:09:35   | Yeah. And I saw this one and I was thinking, how come [[Apple]] didn't do a context widget?                |
| 01:09:42   | I mean, they also didn't add a phone trigger to shortcuts when they added message and email            |
| 01:09:46   | triggers. So I'm guessing they don't think that the iPhone is used for calling anymore,                |
| 01:09:50   | which is kind of funny because it's still called a phone, but anyway.                                  |
| 01:09:54   | Yeah, I know. It is crazy though. And it's like, as we record this, it's very exciting because         |
| 01:10:01   | this is early days and like these apps are updating. It's like every time I turn my phone on,          |
| 01:10:06   | these apps we're talking about have updates out and a lot of them have open public betas.              |
| 01:10:11   | But even the shipping version is feels like a beta because they're pushing updates out so often.       |
| 01:10:17   | And this gives you so much power to, like I said at the beginning of the show,                         |
| 01:10:23   | make your phone your phone. Make it your own.                                                          |
| 01:10:26   | Yeah. And that's one of the things that everybody really needs from their devices.                     |
| 01:10:31   | Their devices need to be theirs so that they can actually do the things that they want to do on it     |
| 01:10:35   | and see the information they want to see. And I'm really pleased to say that with widgets,             |
| 01:10:40   | I am both having a huge amount of fun getting super nerdy writing scripts, creating shortcuts, but     |
| 01:10:47   | I'm also getting that information I need. So I pick up my phone and I see that information             |
| 01:10:53   | right there. And that's it. And I don't need to do anything else. I just pick up my phone.             |
| 01:10:57   | I see the information on the lock screen. I look at my phone and it unlocks and                        |
| 01:11:01   | reveals the information in the notifications. I swipe up. Oh, yep. I've got a podcast tomorrow         |
| 01:11:06   | at 3pm. Perfect. And this is becoming the new hobby land for me. Shortcuts are a hobby for me.         |
| 01:11:16   | I have downtime. I don't want to work. I'll think about a problem I want to solve with a shortcut.     |
| 01:11:20   | And now my mind is spinning with, well, what kind of data can I put on my home screen now?             |
| 01:11:26   | And the answer is all the data, David. All the data.                                                   |
| 01:11:29   | Yes, I agree. For me, one that I really want to dig in harder is Charty,                              |
| 01:11:33   | because I love the way it displays data. And I just, I'm just going to find something relevant.        |
| 01:11:41   | It's like, it's like I have this shiny tool. Now I want to use it on something.                        |
| 01:11:45   | Like you get a new hammer. You want to go hit something with it. And I, I'm not sure what I            |
| 01:11:48   | want to do with it. But I, you know, I'm looking at like days coming up. And I'm like thinking,        |
| 01:11:55   | I've never really been sold on giving me like feedback data on my OmniFocus data.                      |
| 01:12:00   | Because I just, you know, I just think at some point it becomes silly. But at the same time,           |
| 01:12:05   | I just want something on my home screen now. So I don't know what it will be. But,                     |
| 01:12:09   | but I think this will be an ongoing saga for the two of us as we continue on our automators journey.   |
| 01:12:14   | I'm hoping to see a whole load of home related widgets, because I would really like to be able         |
| 01:12:21   | to just see like a quick status. Like I have favourites in the control centre. And that's fine.         |
| 01:12:27   | But I would really like to just be able to like see like, hey, all your blinds are open and the        |
| 01:12:32   | windows are open and the heaters are off. You know, just something like that as a quick thing.         |
| 01:12:37   | Or, you know, it's something that could give me a warning of, hey, your windows open in the            |
| 01:12:42   | office, but the heater is also on. And I think I'm going to have to program that if I'm being          |
| 01:12:47   | honest. But I'm hoping there, there's a couple of great developers out there who are doing home        |
| 01:12:52   | related apps and home kit type controls. So it'd be pretty cool to see that.                           |
| 01:12:58   | Yeah. I'm really thinking kind of what, you know, I talked earlier about the status board on my iPad.  |
| 01:13:04   | I'm thinking about maybe just adding another screen of widgets between my home screen and the          |
| 01:13:09   | app centre and making that a status board. And like, what would that mean to me? You know,             |
| 01:13:14   | what kind of data would I want to see on that? And I'm not sure what it is yet, but                    |
| 01:13:19   | you, dear listener, will probably hear about it. Oh yeah, pair this way. If, if you don't volunteer    |
| 01:13:25   | the information, David, I will, well, I wouldn't actually abduct your dog, but I would threaten        |
| 01:13:30   | to abduct your dog because she's adorable and who wouldn't want to steal. I'm just going to threaten   |
| 01:13:33   | to do it. And then you'll tell us and then everybody's happy. And I might get to borrow                |
| 01:13:36   | your dog for an hour because she's cute. Okay, that does it for today. We want to thank our            |
| 01:13:42   | sponsors, Microsoft and FastScripts. If you'd like to get active in those forums,                     |
| 01:13:46   | head over to talk.automators.fm. You can find the show at relay.fm/automators,                   |
| 01:13:52   | and our website is automators.fm. See you next time.                                                   |
