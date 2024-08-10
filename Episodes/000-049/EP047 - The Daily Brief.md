---
status: "incomplete"
fc-date:
  year: 2020
  month: 04
  day: 10
fc-category: "podcast"
podcast: "Automators"
published: 2020-04-10
duration: 4061
formattedduration: "01:07:41"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/47"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators047.mp3"
episode: 47
title: "47: The Daily Brief"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rosemary and David dive into how they do a daily brief with Shortcuts on their devices.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 047 Discussion](https://talk.automators.fm/t/automators-47-the-daily-brief/7032)

# Sponsors
- [[Pingdom (Sponsor)|Pingdom]] - Start monitoring your website performance and availability today, and get instant alerts when an outage occurs or a site transaction fails.
- [[Ahrefs (Sponsor)|Ahrefs]] - SEO tools and resources to grow your search traffic.
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.

# Show Notes
- [Rosemary's Get Location Shortcut with Wifi Name](https://www.icloud.com/shortcuts/81a80aebd5cf4887bff0e2abe77b854d)
- [Data Jar](https://datajar.app/)
- [HomeKit blinds - IKEA](https://www.ikea.com/us/en/cat/electric-blinds-44531/)
- [Rosemary's Random Choice from List Shortcut](https://www.icloud.com/shortcuts/4596ee86efb24118a6c59e6639b7d510)
- [Programmatic change macOS Mojave accent colour - Stack Overflow](https://stackoverflow.com/questions/52693268/programmatic-change-macos-mojave-accent-colour)
- [Toggle Light Mode/Dark Mode AND Accent Colour from one to another - Ask Different](https://apple.stackexchange.com/questions/332003/toggle-light-mode-dark-mode-and-accent-colour-from-one-to-another)

# Transcription
  
| Time Index | Transcription                                                                                            |
| :--------- | :------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello and welcome to Automators. I am Rosemary Orchard and joined, as always, by my wonderful            |
| 00:07      | co-host based in California, David Sparks. Hello, David.                                                 |
| 00:10      | Hello, Rosemary Orchard, based in the UK now.                                                            |
| 00:13      | Yes, yes I am. A little earlier than expected, but not quite intentionally. I came over to               |
| 00:19      | visit and then I got stuck. It's somewhat intentionally stuck, but it's okay. I'm                        |
| 00:24      | quite happy with the end result. I need to go back at some point. My HomePods are still in              |
| 00:28      | Austria, as is my Mac mini. I'm doing everything on MacBook Air, but it's okay.                             |
| 00:34      | There are considerably worse things that could be happening and, as it is,                               |
| 00:37      | I get to talk to you. I'm calling this a pretty good day.                                                |
| 00:40      | Yeah, we got an interesting show today. The Daily Brief is the focus of the show and the Daily           |
| 00:45      | Brief is cool shortcuts we've made to give ourselves a brief of what we need for the day.                |
| 00:50      | But we're also introducing a new segment called Ask the Automators, where people have asked us           |
| 00:54      | questions and we're going to help automate a few folks. That one, I'm really looking forward to,         |
| 01:00      | we've got some really cool automation to talk about on that as well today. A lot to share,               |
| 01:05      | but I guess we should just get started, Ros.                                                             |
| 01:07      | I think we should. I think it might be a good idea to start with. What is a Daily Brief? Why             |
| 01:13      | do we have one? For me, the original idea came from when I was watching that very first Eeronman          |
| 01:19      | film and Jarvis wakes up at the house and is there going, and the weather today is like this,            |
| 01:25      | and all of that, and I was there going, that's really cool. I think it was mostly the window             |
| 01:31      | and the blinds automatically going up that I really liked, but I've taken the other parts                |
| 01:34      | of it and implemented those in my life. Yeah, and actually you could add window and blinds               |
| 01:39      | automation to this because there are home kit friendly windows and blinds. If you wanted to              |
| 01:44      | add them. Yeah, IKEA has new home kit blinds, which as I'm moving where I am right now,                  |
| 01:49      | I don't think my parents particularly want me to [[HomeKit]]-ify their entire house,                         |
| 01:52      | though I'm working on that, but I would seriously consider adding blinds going up to                     |
| 01:57      | the part of my Daily Brief, like something that just happens as a part of it.                            |
| 02:01      | Yeah, I would look at those when I was setting up my home studio and the budget for the blinds           |
| 02:07      | without automation is $50 and width is something like 800, and very quickly I realised I don't           |
| 02:13      | need those, but I haven't looked at, I guess IKEA makes them, so I'm assuming they're much less          |
| 02:17      | expensive. They are more affordable than the other options, yes, but they are still not, oh well,        |
| 02:24      | yeah, I'll buy these without thinking about it slash consulting the other half of my person,             |
| 02:32      | because if you do just sort of buy them and go home, it's like, hi, I have a lot of fancy new            |
| 02:36      | blinds. Oh, cool. How much for they? Don't check the credit card bill. They're not that cheap,           |
| 02:41      | unfortunately. Yeah, and I don't even really have entire faith that they would work all the time,        |
| 02:46      | even though I make a show called The Automators. I feel like [[HomeKit]] sometimes is a little testy,        |
| 02:52      | but if you're using automated blinds, let us know in the forums. We'd love to hear from you,             |
| 02:57      | see how it's going. Yeah, and I'm definitely interested. The Daily Brief, the idea behind it,            |
| 03:03      | like Rose was saying, is you could have a customised series of information given to you                  |
| 03:10      | every day for just the stuff that you're interested in. And these are generated through                  |
| 03:15      | shortcuts. This is the first half of the show, the shortcuts heavy, because it's just such a great       |
| 03:20      | place to do it. And the programming model is pretty simple, so anybody can make it. But at the same      |
| 03:26      | time, it's kind of a complicated thing. Like my Daily Brief script is 68 steps. It's one of the          |
| 03:32      | largest ones I have, because I just keep adding things to it. And I think this is an excellent           |
| 03:37      | playground if you want to get better at shortcuts is to start making your own Daily Brief, because       |
| 03:42      | you can solve specific problems and add stuff on to it. And it's kind of a fun place to make             |
| 03:50      | something. So play along with us. We're going to talk today about some of the specific problems          |
| 03:55      | we solved with our Daily Brief shortcuts, so you can kind of wholly get a jump start on it,               |
| 04:00      | and open your mind to the things you can include. Like I was thinking I have a friend that would         |
| 04:07      | love to have a surf report in his Daily Brief. There's not one in mind, but just sitting here            |
| 04:11      | coming up with the idea, I bet I could solve that problem. I spend a little time on it with              |
| 04:16      | shortcuts. Yes, definitely. And I think that's one of these things. You can customise this to            |
| 04:21      | include whatever information is appropriate for you. And also, at least in my case, I've customised      |
| 04:26      | it to not include information when it's not relevant. So for example, a little sneak preview,            |
| 04:31      | part of mine is checking, you know, how long is it to my next trip? Well, right now, especially,         |
| 04:36      | you know, considering the current situation, I have canceled all my future travel plans.                 |
| 04:40      | So it's not doing that anymore. It's just skipping that section. And it does that                        |
| 04:44      | automatically as part of my brief. And that is an excellent way to hone your shortcut skills.            |
| 04:48      | And the Daily Brief is another one where it's a really good idea to like break this up until             |
| 04:52      | chunks. And then your actual Daily Brief can just be like, run this shortcut, run that shortcut,         |
| 04:57      | run the other shortcut. Because then if you want your surf report in the afternoon, you know, to         |
| 05:02      | maybe go surfing in the evening or to think about whether or not you want to go surfing the next day,    |
| 05:07      | you can just run the surf report. But then if you want it as part of your Daily Brief,                   |
| 05:10      | you can just have that in there. And that is a great way to, you know, get started and play with         |
| 05:15      | all this stuff. Yeah, one of the best tools, and we're going to talk about it repeatedly through         |
| 05:20      | this show, at least that this is all sprinkled throughout my Daily Brief is the if statement,            |
| 05:24      | because you can apply conditions, like you get information, you apply a condition, like                  |
| 05:28      | if the surf is higher than three feet, you know, and if it's less than three feet, then don't give       |
| 05:34      | me surf report, you know, but all of a sudden it hits a certain threshold. And then I get a surf         |
| 05:39      | report. And so I don't hear the information unless I need to. And both of us have used that. So          |
| 05:45      | I thought it'd be fun. Why don't we just kind of, you know, ping pong a little bit back and forth        |
| 05:49      | and talk about some of the stuff in our Daily Briefs and how we solve specific problems.                 |
| 05:54      | Yes. And I think actually, I'm going to start with how I actually run my Daily Brief, because            |
| 05:59      | when I turn off my alarm on my iPhone in the morning, then that kicks off an automation. So              |
| 06:05      | automations and shortcuts, of course, some of them have this slightly annoying, you know,                |
| 06:09      | the notification appears, you have to tap the notification. But when your alarm stops,                   |
| 06:13      | is one of those where it just runs. So that is actually how I kick off my Daily Brief in the             |
| 06:19      | morning. So my alarm goes off, I turn it off, and then it just runs. And that for me has been a          |
| 06:26      | game changer in how all of this works, because it means that I get all this information.                 |
| 06:30      | Unfortunately, in some cases, I'm still not quite awake, especially if I've had to send                  |
| 06:34      | an early alarm for an early meeting. But I can always run it again later, but I have mine run            |
| 06:39      | automatically in the morning. What about you, David? I run mine manually when I want it.                 |
| 06:45      | Quite often I do it while I'm eating breakfast or, you know, kind of just like                           |
| 06:49      | gathering myself in the morning. Running it off the alarm ending trigger, that was a great idea.         |
| 06:56      | How do you display the data? So I'm using the show result action, actually.                              |
| 07:01      | Because the show result action means if I then choose to run the shortcut through Siri,                  |
| 07:06      | so I should be very clear. Inside of my automation, I literally just have one step,                      |
| 07:10      | which is run shortcut. Because I don't want to build that whole thing inside of that,                    |
| 07:15      | because then if I want to trigger it manually later, guess what? I have to create an alarm               |
| 07:19      | and disable it. And actually, it's very specifically tied to my bedtime alarm,                           |
| 07:25      | which is something that you can do in shortcuts. So I've built this as a separate shortcut.              |
| 07:30      | And inside my automation, I just use the run shortcut action. But then inside of the shortcut,           |
| 07:35      | I'm using the show result. Because it does mean if I try and run this through Siri,                      |
| 07:39      | I haven't been able to run it on a HomePod recently, with my HomePods being in another country.          |
| 07:44      | But I think I can run it on my HomePod as well, then it will speak. But if I run it by tapping           |
| 07:50      | it, then it displays the data for me. And that is really really nice.                                    |
| 07:54      | I did the same thing. I set it up with show result. The idea, I'd have my HomePod speak                  |
| 07:58      | it to me truly like, you know, Eeron Man. But I actually just prefer to read it. That's what I            |
| 08:04      | found. Yes. Well, I like hearing it when I'm first waking up in the morning, and then I will run it      |
| 08:10      | again. So one thing I have been playing with recently, which has been really useful and                  |
| 08:16      | interesting is I have been at the end of my shortcut. If it hasn't run that day already,                 |
| 08:23      | and this is pulling data from [[Data Jar]], something we talked about in a recent episode, it's,             |
| 08:28      | it should be out by the time this episode actually comes out. If I'm remembering things                  |
| 08:32      | correctly, it should be out a few days before. So I'll put a link to that in show notes.                 |
| 08:36      | But what I do, what I do is I check whether or not it's already run that day. If it hasn't run           |
| 08:42      | that day, then what it does is it adds a push cut notification to run it again in 45 minutes.            |
| 08:49      | And then push cut will pop up on my screen in 45 minutes to remind me to run my daily brief.             |
| 08:54      | So I get to listen to it when I'm kind of half awake, which gives me an idea of, oh, great,              |
| 08:58      | what are the super important things to get done today? Or, oh my gosh, I've got a meeting in an          |
| 09:02      | hour and I need to really get up and get to work. Though, of course, right now, that's not such a        |
| 09:06      | problem. But usually it's very helpful. Don't be late for work this morning. You have a meeting          |
| 09:12      | and it's with important people. So you need to make sure that you've done more than just brush your      |
| 09:16      | hair. But then I can run it. Then push cut comes up and tells me, hey, like, do you want to double       |
| 09:22      | check on your daily brief? And then when I run it, then it's running a display and text on screen        |
| 09:26      | for me to read and absorb. Yeah, see, for me, I just literally run it manually, like quite often         |
| 09:32      | while I'm cooking my toast, you know, so it's just not a, I haven't automated the process of triggering, |
| 09:38      | although it's a good idea to do that. And, you know, as always, as we make a show of automators,         |
| 09:44      | it inspires me to want to do more with this. But the, but let's talk a little bit about what's in        |
| 09:50      | the scripts themselves. Usually they start out with collection of information. You know, that's,         |
| 09:56      | I think, a very good starting place for me. I get the current date. I get the weather,                   |
| 10:04      | like one of the things I've done for trips. In fact, we're going to talk about trips later,              |
| 10:10      | but I will calculate the time between today and an upcoming trip. And then I will give myself            |
| 10:17      | kind of like an update, like X days until you go to [[WWDC]] or wherever it is. Although, like you,          |
| 10:24      | there aren't many trips on the books for me this year. But collecting data, I think, is important.       |
| 10:30      | Location, whether calendar or three of the big ones. Yes. Yeah, definitely. And I do pretty              |
| 10:37      | much the same thing. In general, what I've been doing actually with the location, because actually       |
| 10:42      | getting the location in shortcuts can take a long time. Like not in a good way. It takes a very long     |
| 10:47      | time, it feels like. So what I've been doing is I've been checking the name of the Wi-Fi network.        |
| 10:52      | And I've built a little dictionary of Wi-Fi network names to addresses. And I'm saving this,             |
| 10:58      | again, I'm saving this in [[Data Jar]], but you could just save this in a file in shortcuts.                 |
| 11:03      | And then, or you could just put it as a dictionary inside of a shortcut, you know, like                  |
| 11:07      | Wi-Fi network to address. And this means that my home Wi-Fi network, my parents' Wi-Fi network,          |
| 11:12      | my grandmother's Wi-Fi network, my other grandmother's Wi-Fi network, all of those,                      |
| 11:17      | I can look, I can get the name of the Wi-Fi network and then I can convert it to a location.             |
| 11:22      | Rosemary Orchard. And if I'm on one of those.                                                            |
| 11:24      | That is brilliant. That is brilliant. Because she's right.                                               |
| 11:29      | When you go to do a location check in shortcuts, it can take like 30 seconds sometimes. It's just        |
| 11:34      | crazy how long it takes. So all you're doing is setting up a dictionary and saying,                      |
| 11:39      | if you've got Wi-Fi network, Rosa's parents, then location is and then you put the location in.          |
| 11:44      | Yeah. Number one, Rosa's parents address United Kingdom. That's exactly how addresses work over          |
| 11:49      | here, by the way. Yeah. And then like same thing, work, you know, whatever apartment.                    |
| 11:55      | Yeah. In my case, work is a little more difficult because work is very widespread and we have three      |
| 12:00      | different Wi-Fi networks and one of those Wi-Fi networks is an international Wi-Fi network called        |
| 12:04      | Edgy Roam. And so I could be in London and connected to Edgy Roam. And so I don't use that               |
| 12:10      | specific one for, but for many people that will work. Now the catch is you do have to be connected       |
| 12:15      | to that Wi-Fi for this to work. It won't just scan for local Wi-Fi networks and do things based on       |
| 12:20      | that. But, you know, it's a very good solution for, you know, am I at home? Yes. And I'm on this         |
| 12:27      | Wi-Fi network. Perfect. Then let's skip the whole actually getting location. And yeah,                   |
| 12:33      | just grab the Wi-Fi network. Okay. So the mechanics of that in the shortcut art was                      |
| 12:37      | it an if statement and then checking against a known list of Wi-Fi network? Let me check.                |
| 12:44      | So I'm getting the network details and that says get Wi-Fi networks network name. Yeah.                  |
| 12:49      | And then what I have is before that action. So the first action is actually the dictionary               |
| 12:54      | or getting the dictionary in my case out of [[Data Jar]] because I'm using this in multiple                  |
| 12:58      | different places. So I don't want to build this dictionary into just one shortcut.                       |
| 13:01      | No, makes sense. So and then so I have the dictionary and then I have getting the Wi-Fi                  |
| 13:07      | network name and then I have a get value from dictionary action. I think it's called get                 |
| 13:13      | value from dictionary. Let me just double check by adding a get dictionary value. Sorry. Yeah.           |
| 13:18      | Then I say get value for the key is the network details. And then the dictionary                         |
| 13:25      | is the previous dictionary. And then this allows me to convert that network name into an address.        |
| 13:31      | And then that is what I can feed into a bunch of other things. Now, of course,                           |
| 13:36      | in the weather case, using the built in weather information and current weather and a lot of             |
| 13:40      | other weather applications, you don't need to specify the actual location because those                  |
| 13:46      | have already cached your location based on when they last checked for an update.                         |
| 13:51      | And so that's already up to date. And that's good. So you don't need that. But in my case,               |
| 13:56      | if it's checking how long is it going to take me to walk to work this morning,                           |
| 14:00      | if the wind is blowing you horizontal, it's going to take a little longer than it would otherwise,       |
| 14:04      | then it's very useful to have that address there available for you.                                      |
| 14:07      | How do you address the problem of you're not on a known Wi-Fi network? You're on a strange               |
| 14:13      | Wi-Fi network or you're not on a Wi-Fi network at all? That is a good question. And I'm not              |
| 14:17      | remembering exactly what comes out here. So I'm just going to delete my parent's network from            |
| 14:23      | this. I will undo this later. It just comes out with nothing. That's the thing. And so that was          |
| 14:29      | it. That's why I have this if afterwards. There we go. So after this, I think that there was an          |
| 14:34      | if there somewhere. Yeah. Yeah. So after the get value for network details in dictionary option,         |
| 14:40      | I say if my dictionary value does not have any value and then inside of that,                            |
| 14:46      | there's no otherwise it gets my current location. That's why it's there. Gotcha. There you go.           |
| 14:51      | Okay. So I was thinking you'd solve that problem up front, you know,                                     |
| 14:55      | but no makes more sense to first compare your Wi-Fi network to the known dictionary. And then            |
| 15:00      | if none of these work, then get the location. Well, here I'm taking advantage of the fact                |
| 15:05      | that shortcuts is very user friendly because usually what you would have to do in a programming          |
| 15:08      | language is check whether or not your key is in the dictionary before you say, hey,                      |
| 15:13      | this is equivalent to that. But in shortcuts, you can just say, hey, like, you know, get the value       |
| 15:19      | for the network details in the dictionary. And it will just return nothing if it doesn't find that       |
| 15:24      | key. Yeah. I'm just going to put my parents network back there. So this is, you know, a pretty           |
| 15:30      | sneaky way of doing it. And I'm pretty happy with my solution there. No, I think it's brilliant.         |
| 15:35      | And the thing about that is you're right. This is something that just doesn't work with a daily          |
| 15:39      | brief. Anything you do that involves location, that location call is one of the biggest headaches        |
| 15:45      | in shortcuts. So you're shortcutting that. Ooh, see how I did that with this dictionary. So              |
| 15:52      | it's absolutely something that would make sense as an external data store or something that you          |
| 15:57      | repeat throughout. You could also maybe make that a shortcut that you call from a shortcut.              |
| 16:04      | Just a location shortcut, put the dictionary in there and, and have it compare the dictionary            |
| 16:11      | and find location and to save that as, you know, location, subroutine or whatever you want to call       |
| 16:17      | it. And then you could call that shortcut from another shortcut. I have actually just done that.         |
| 16:23      | I've just duplicated my shortcut and I've, I've, I've deleted the extra actions or I'm deleting          |
| 16:28      | the extra actions and I've changed it to get location because this means I can then go through           |
| 16:32      | and add any more locations. I mean, I do that in [[Data Jar]], but I'm going to have a different one         |
| 16:36      | in the show notes for people that does not need [[Data Jar]] or anything else. It's just using               |
| 16:41      | shortcuts and a dictionary inside of shortcuts. Very clever, Rosemary. I love that. So, but,             |
| 16:47      | you know, the point is you're collecting data at the beginning. For me, I'm getting the current date,    |
| 16:51      | the current weather. I also grab events from my calendars. And there's three, I have many,               |
| 16:58      | many calendars. It's kind of ridiculous how many calendars I have, but the three that really matter      |
| 17:04      | for the daily brief is the, is the field guide calendar, the MacSparky calendar, the legal              |
| 17:10      | calendar and the personal calendar. And I actually break up the event reporting later by the areas of    |
| 17:16      | my life. Yeah, I've actually done that as well. I have different shortcuts that tell me what is          |
| 17:22      | upcoming for a few different kinds of areas of my life. And these pretty much map to my                  |
| 17:29      | fantastical calendar sets. So I have podcasting, which includes the automators podcast and               |
| 17:33      | nested folders podcast. And I also have a generic podcasting calendar, which is for things like,         |
| 17:39      | you know, if I'm going on clockwise or something that that goes in that calendar. And this is            |
| 17:43      | quite useful because especially at the moment, I'm temporarily staying with my parents. It's             |
| 17:47      | quite useful, you know, like before, or at lunchtime, because I don't record before lunch,               |
| 17:53      | all of my podcast co-hosts are in the US pretty much. So you're all happily asleep before I have         |
| 17:58      | my lunch. But that lunchtime, I can just be like, okay, here's a list of what I'm recording today        |
| 18:02      | done as a shortcut. So they know, you know, like ideally, if we can avoid it, please don't vacuum        |
| 18:07      | the house or run the washing machine during this time. But other than that, live your normal life.       |
| 18:11      | So that that's very useful. And a great opportunity to have those sub shortcuts as well.                 |
| 18:18      | Yeah. And it's just really easy, because then once you get those events by calendar, then you            |
| 18:24      | can do a comparison to see how many they are. Like, for instance, with mine, once I pull the             |
| 18:28      | events, for instance, MacSparky, if the event count is zero, then I just set the variable to            |
| 18:34      | say there are no MacSparky events today. And then otherwise, I can report a list of the events          |
| 18:41      | if there are MacSparky events. And I think this is what I was saying earlier, the if statements         |
| 18:45      | are just so helpful as you're building this daily routine shortcut.                                      |
| 18:50      | Yes. And I do set something very similar as well for my trip information. So if I'm on a trip,           |
| 18:56      | and this is marked by having an all day event in my trip at calendar, then it will do something          |
| 19:03      | different. And it will tell me if I've got anything trip-wise planned for that day,                       |
| 19:08      | you know, because I like to add things into into my trip at calendar based on, you know,                 |
| 19:13      | like, I think I'm probably going to go see the Space Needle in Seattle today, or I don't know,           |
| 19:17      | I'm going to go see the Grand Canyon the next day that might require a flight in between,                |
| 19:21      | but I'm sure I'll make it. And it's, it's nice to be able to switch between those. But if there's        |
| 19:26      | nothing, if I don't have an all day event in my calendar there, then I just have nothing,                |
| 19:32      | because I don't need to be told about, you know, like, on your trip today to Seattle,                    |
| 19:36      | you're going to be doing this. Oh, and by the way, the Grand Canyon is not in Seattle, but,              |
| 19:40      | you know, it's nice to have that. The way I deal with trips is it's kind of hard coded in. So            |
| 19:47      | I have a shortcut that looks at like the last one I did this for was we had a vacation to Hawaii.        |
| 19:53      | And I just had in there a listing of, I knew when the date was that we were leaving. So I did            |
| 19:59      | a difference between date shortcut, you know, and I would just say get the number of days between        |
| 20:05      | today and November or whatever that we left. And, and then it would report when it reports a shortcut,   |
| 20:12      | say X days between now and your trip to Hawaii, Aloha, you know, and so it was like hard written in.     |
| 20:17      | So the next one I would be doing it for would be [[WWDC]] if that were a thing. But since that's             |
| 20:22      | another thing, I, I took that out now. So that's, that's blank and it doesn't run. But you know,         |
| 20:29      | having it look for, I guess, I guess a way to make this easier would be to look for a trip calendar      |
| 20:34      | and just put all the stuff on trips. And then you would look out pretty far in the future,               |
| 20:38      | you know, like within five months or something and then do a time between dates for that.                |
| 20:43      | That'd be a way to be more automatic. I guess that's how you're doing it, right?                         |
| 20:46      | Yeah, it is. Because in my case, what I do is I forward all of the plans to trip it and it parses        |
| 20:51      | them. Unfortunately, I've been hearing from some listeners that it doesn't manage to parse emails        |
| 20:55      | in languages also in English. I have had the odd success with a German language email, but I'm           |
| 21:00      | pretty certain that's because their formatting is directly 100% exactly the same as the English          |
| 21:06      | language email. And so, and so it just manages to parse it because, you know, the data is still in       |
| 21:11      | the places looking forward. But, you know, so I, so that is another automation I have there. And         |
| 21:18      | then that means that these trips are in my calendar and it tells me, you know, like,                     |
| 21:22      | you know, 100 days until this or 50 days until that or something like that.                              |
| 21:26      | This episode of Automators is brought to you by Pingdom from SolarWinds. Today's internet users          |
| 21:33      | expect a fast web experience, no matter how good your content or how effective your marketing,           |
| 21:38      | they'll mostly bounce if your website is loading too slowly. With real user monitoring from Pingdom,     |
| 21:43      | you can discover how website performance issues affect your visitors' experience,                        |
| 21:47      | so you can take action before your business is impacted. How your visitors experience your website       |
| 21:52      | differs depending on the browser, device and platform they use. So if you want to identify               |
| 21:57      | how visitors are experiencing your website, so you can make informed optimisations and deliver           |
| 22:03      | great performance to those who matter the most. Real user monitoring is an event-based solution,         |
| 22:09      | so it's built for scalability, meaning you can monitor millions of page views without compromising       |
| 22:14      | the fidelity of your historical data or breaking the bank in the process. Get live visitor insights      |
| 22:20      | today with real user monitoring from Pingdom. Go to pingdom.com/read AFM right now for a           |
| 22:26      | 14-day free trial with no credit card required. And then when you sign up, use the code Automators       |
| 22:32      | in all caps at checkout to get an awesome 30% off your first invoice. Thanks to Pingdom for              |
| 22:38      | SolarWinds for their support of this show and Relay FM. Hey, I want to talk about conditional           |
| 22:44      | reporting a little bit further, but in this case, let's talk about how we're doing it with weather.      |
| 22:49      | I think this is for me like one of the simpler ones I do, but where I live, it gets real windy           |
| 22:56      | sometimes, but not often, but when it does, it's real windy. So I have one where it's using the          |
| 23:03      | shortcut connection to the Apple weather application, and it's just looking to see wind speed. And if    |
| 23:10      | wind speed is greater than 10 miles an hour, then it creates a text block that said wind speed is        |
| 23:16      | expected to be, and then it inserts the miles per hour, the wind speed variable. And then I save         |
| 23:24      | that as a variable, and then when I do my reporting, it'll show up. But I only see that if it is over    |
| 23:31      | 10 miles an hour. So I don't on every day get a daily report about what the wind is going to be          |
| 23:36      | today. But when it does show up, it's of note to me, it's something I need to start batting down         |
| 23:41      | the hatches for. And I just, it's a very simple idea in short, because the if statement, you just        |
| 23:47      | contain it in there. Otherwise, the text is blank. I have a separate text block in the, you know,        |
| 23:53      | if other, and then I set that, there's literally nothing in it. And then I set that to the variable      |
| 24:00      | called, you know, wind and likely, and then that's what gets reported on the, on the report,             |
| 24:06      | but you don't see anything because it's just an empty text field. That's a great way of doing it.        |
| 24:10      | I have personally been using the variable that comes out of the if statement, because                    |
| 24:16      | then I don't need to, to set anything explicitly to blank, I just throw a notification in,               |
| 24:22      | sorry, a notification, I throw those nothing actions in there. There's an actual nothing                 |
| 24:26      | action inside of shortcuts, which is very useful when you're just like scrolling through quickly,        |
| 24:32      | because I found if I'm scrolling through quickly, and I see a blank text box, I worry that I've          |
| 24:36      | deleted something. Yeah. So I've been using the nothing action instead. That's probably cleaner.         |
| 24:40      | Yeah. I mean, it's a personal preference as much as anything. But what I have been doing,                |
| 24:46      | I don't have so much of a problem with wind, but over here in the UK, we have rain. And the              |
| 24:52      | weather is one of those topics that people talk about all the time, because it really does change        |
| 24:56      | pretty quickly. Especially here, I'm only 40 minutes from the coast. I mean, it's hard to be             |
| 25:00      | far from the coast in the UK. But I'm really not that far away. And so I've been getting the             |
| 25:07      | precipitation chance. And I've been trying to figure out, you know, like, how wrong are the              |
| 25:12      | weather people? And the good news is, is the weather people are much, much more accurate today than      |
| 25:16      | they were when my parents were kids. And so I've been just checking if the precipitation chance          |
| 25:21      | is above 50%, then I want to know, because that's when I need to take an umbrella with me. And so        |
| 25:26      | what I do is I check if the precipitation chance is above 50%, then I say, you need an umbrella          |
| 25:32      | today. But I only do that if I am leaving the house for some reason. So if on my calendar,               |
| 25:38      | there is something like going to the supermarket, because my dad loves to put everything in the          |
| 25:42      | calendar, and he's invited me to all of these things. So these are all in my calendar now.               |
| 25:47      | Then that's, then it will tell me that or if I'm going to work when I'm back in Austria.                 |
| 25:52      | So the precipitation chance over there, I could probably get away with a higher number,                  |
| 25:56      | but I didn't program that yet. But, you know, so it only tells me this if I am actually going            |
| 26:02      | to leave the house that day. I should probably expand that because I do leave the house on               |
| 26:08      | days when it's not in my calendar, like I'll go to the supermarket for the bakery to buy something.      |
| 26:13      | But at the moment, it only tells me if I have to leave the house.                                        |
| 26:16      | Yes, I go outside often without appointments. So I would just leave it. But the other thing              |
| 26:20      | I do add to that, and it's funny because you and I use the exact same numbers. We didn't compare         |
| 26:24      | notes before, gang, this is just coincidence, but 50% for me is the trigger before I get any             |
| 26:30      | notification about rain. And you can also have it pull the expected amount of rain. So if it's over      |
| 26:38      | 50%, it says, okay, the chance of rain is X% and the amount expected is X, because a lot of times        |
| 26:45      | in Southern California, even if we have a high expectation of rain, it's a trivial amount of             |
| 26:49      | rain. So little that you're like, I'm not going to bother with an umbrella.                              |
| 26:54      | Yeah, that's one of those things where, yeah, you do need to account because sometimes                   |
| 27:00      | the other thing that I should really build into mine, and this is actually a great idea, is the          |
| 27:04      | wind strength. So if it's going to rain and it's going to be windy, then it should tell me it's          |
| 27:09      | going to rain, but don't take an umbrella. I do have one of those special umbrellas with wind            |
| 27:14      | vents, but even so, I prefer to try and keep my things in good condition. So taking it out               |
| 27:18      | in gale force winds is not a great idea. I told you on the show before, I've never been as cold           |
| 27:23      | as I was when I was near your parents' house. So I would just, if I had a daily brief and I lived        |
| 27:29      | near your parents, I would just have it every day, say put on three jackets. It would there be no        |
| 27:35      | if condition, it would just be there every day. In defense of the UK, you explicitly went to             |
| 27:40      | Stonehenge, which is when you were super cold and Stonehenge is a very exposed area. In January.         |
| 27:46      | Pretty much the only thing that you can use to get away from the wind there are the stones,              |
| 27:50      | and they have like a very wide radius around them where you can't go in to prevent the                   |
| 27:54      | earth from eroding. So you're kind of stuffed out there like, I'm going to go to Stonehenge.             |
| 28:00      | I went bob, I went dog sledding on a glacier in Alaska, and I was not as cold as I was at Stonehenge.    |
| 28:06      | That's all I'm saying. Anyway, well, that's cool. So we're both using the conditions.                    |
| 28:12      | Another cool one that I like to do is part of my daily brief is I like to see if there's                 |
| 28:17      | birthdays coming up. And so what I do is I find calendar events in the next five days,                   |
| 28:23      | where and I look at the birthday calendar because we all have that, or if you're using                   |
| 28:28      | contacts and you click the button you do. So any birthdays that show up in the next five days,           |
| 28:35      | if the count is zero, that's another very useful shortcut, by the way, if count equals                   |
| 28:40      | is something when you're doing the daily brief that always lets you kind of qualify this stuff.          |
| 28:45      | If it equals zero, then it's nothing. But if there is something there, then it creates a                 |
| 28:53      | text block, upcoming birthdays are, and it inserts the names using the smart variables                   |
| 28:59      | of the names of the upcoming birthdays. And it's just great. So I don't see it every day,                |
| 29:03      | but occasionally I get a little warning. And I like five days because I need a little time,              |
| 29:08      | if I need to get a gift or do something special for somebody's birthday.                                 |
| 29:12      | I like that. And one of the things I've been doing so previously back before, I think it was             |
| 29:17      | iOS 13 before, when I was doing the count method, because there is a count action inside of              |
| 29:25      | shortcuts that you can use to count these things. But since iOS 13, I've been changing all of my         |
| 29:30      | ifs over to just so get the results from the find calendar events where I just say if it has any value.  |
| 29:36      | And that is a little bit cleaner and perhaps for some people, especially people new to shortcuts,        |
| 29:43      | a much more friendly way of looking at it. Because if it has any value, well, yeah,                      |
| 29:47      | if there are birthdays, then it has value. Okay, that's quite easy. But if count of birthdays            |
| 29:52      | not equals zero, that can take a moment to wrap your head around. And so that's another way of           |
| 29:58      | doing that, which I'm doing pretty much the same thing, except mine is two weeks. Because if I           |
| 30:03      | have to post a card to somebody from Austria or now I'm back in the UK, it's not such a big deal,        |
| 30:07      | but it can take a little while to get there. It's kind of interesting when you think about it. I         |
| 30:11      | think there's a relationship between the length of our shortcuts and when we created them, because       |
| 30:16      | so many of these got easier over time, particularly with iOS 13. Yes, yes, they absolutely did. And      |
| 30:23      | I have to say one of the things that I did after iOS 13 is I kind of went back and deleted some          |
| 30:28      | old shortcuts and recreated them. I didn't even save them for comparison purposes. It was just           |
| 30:34      | delete and then re-add things because it allows me to go through and see like, actually, you know        |
| 30:39      | what, I'm not adding this just because I had it before. And I'm not just trying to optimise things       |
| 30:45      | because you'll optimise the first 10 actions to use some new fancy stuff and then forget                 |
| 30:50      | or get bored or distracted by Mamma Mia 2 playing on TV. That may or may not have happened last night        |
| 30:56      | while prepping for the show. And so I've been going through and recreating them entirely without         |
| 31:02      | looking at the old ones for reference, which has been pretty nice to help me, you know,                  |
| 31:06      | get to grips with all the new stuff that's in shortcuts as well.                                         |
| 31:09      | And the real payoff, at least for me, with the daily brief shortcut is a text field. Ultimately,         |
| 31:16      | you create a text message. I'm sorry, I misspoke. You don't want to say text message, but it's a         |
| 31:21      | text that's text variable, in essence, where you type all the stuff in there you want. And, you          |
| 31:26      | know, my old start, I say, good morning, Sparky. Today is and then insert current date. The time         |
| 31:31      | is and insert the current time, you know, just X days between now and whatever the next trip is.         |
| 31:37      | And then the current temperature. And then I also report the high and low. And, and I do rain and        |
| 31:44      | wind chance if it triggers that if statement. And then I break down my work by field guides,             |
| 31:51      | MacSparky, which includes podcasts and Sparks Law and personal calendars. And I do some other           |
| 31:58      | reporting. And then I always put something, I have an inspirational thing at the bottom,                 |
| 32:01      | which I change over time right now. It just says, do or do not, David, there is no try. And which is     |
| 32:07      | my favourite Yoda quote. So I've got that in there. So you can be kind of fun with yourself.              |
| 32:11      | And you create that text block that has all that stuff in there combines all those variables for         |
| 32:16      | you. And then you can, you can report it out. That's really nice. I have been, I've actually,            |
| 32:22      | so I've got a list inside of my shortcut. And I should again, probably convert this into a               |
| 32:27      | function shortcut for the timing is just a list, followed by the filter files action, because            |
| 32:32      | the filter files action, this does two things for me, it sorts it by random, and it limits it to         |
| 32:37      | one. And then it says, so it picks a random greeting out of this. So it might say hello,                 |
| 32:43      | or it might say good morning, or it might say it's a wonderful day to take over the world.               |
| 32:48      | And it has a few different things in there. Yes, I am trying to take over the world with                 |
| 32:51      | shortcuts, and it's good fun. But so it picks a random one of these, and it puts that at the             |
| 32:56      | start of my greeting for me. And that is quite fun, because, you know, even if I read it twice in        |
| 33:02      | one day, then, you know, I get a different greeting. Yeah, it's fun. Yeah, I got thinking                |
| 33:07      | once it'd be fun to put like, like you maybe do a URL callback to like the Shakespearean                 |
| 33:12      | Insulter. Because I believe that has an API, something where you could get something like that           |
| 33:16      | and have it read something different to you, like an inspirational quote or something every day.         |
| 33:22      | Yes, I'm sure you could. I mean, there's plenty of APIs for quotes and someone out there. So             |
| 33:26      | I'm sure you could make a call to one and get a random quote. Yeah. That's, that's what I'm              |
| 33:30      | doing. The filter files action is the one that does that. And I have an example in the show              |
| 33:34      | notes of how to get a random option out of a list for everybody. If you want to, like I save that        |
| 33:41      | text as what I call the status report. That's the variable called status report. And then,               |
| 33:48      | then you can do things with it. Like one thing you could do is you could just use the speak command      |
| 33:52      | and have your phone speak it for you, even if you don't own a HomePod. Yes. Yeah, that's,               |
| 33:58      | that's something that you can definitely do. Personally, I am a fan of show result. Yeah.                |
| 34:02      | Because this way it will either speak or show depending on what you want. And otherwise,                 |
| 34:08      | you may need something like a, a menu. Yeah. To, to, to, to decide that on, on the fly,                  |
| 34:14      | which means you have to do input. And if you're driving, then it will ask you, you know, like,           |
| 34:18      | do you want this or that? And then you have to say option one or something.                              |
| 34:21      | Yeah. And so I have done it both ways. And one of the ways like I do it, if I want it on my phone        |
| 34:26      | without dealing with a HomePod, and you use the speak result, there are settings for that               |
| 34:32      | command and shortcuts. And one of them is wait until finished. And you want to make sure to turn         |
| 34:37      | that off. Yes. So I do the speak status report. And then I follow it up by show status report,           |
| 34:44      | show results. And so what I get is a, immediately it speaks it out, but at the same time it spits        |
| 34:50      | it up on the screen for main text. So I've got the ability to do both. Some more fun you could           |
| 34:55      | have with this. If you've got the home kit stuff, you could have it turn on lights. You could have       |
| 35:00      | it play music or whatever you want, especially like if you're using it as the alarm, you know,           |
| 35:04      | turn off trigger. Yes. And what's really nice about that is you can hand off the playback of the         |
| 35:10      | music. So you can start playing the music and then you can hand it off to something like a HomePod,     |
| 35:14      | which means that, you know, after that, you can still do things on your iPhone and,                      |
| 35:18      | and get phone calls and so on without having your music disrupted, if that's what you want.              |
| 35:23      | I've just been setting my playback destination for the time being, but you could hand off                |
| 35:28      | playback entirely as well. Now there are people listening and saying, hey, I have a HomePod.            |
| 35:31      | I already know how to ask it for today's weather. I know how to ask it for my calendar.                  |
| 35:36      | All this stuff is already built into HomePod. I don't need to make this crazy shortcut, but             |
| 35:41      | the answer I'd give you is twofold. First of all, you can make it customisation,                         |
| 35:46      | just for you. Like a HomePod is not going to quote Yoda to you. Mine will, you know.                    |
| 35:50      | So if there's things you particularly like, like counting down for an upcoming trip is                   |
| 35:55      | another thing your HomePod is not going to do for you automatically. So you can make it work            |
| 35:59      | for you. And secondly, like I said at the top of the show, I think this is just such a great             |
| 36:04      | exercise if you're working with shortcuts. You're going to get better at shortcuts just trying to        |
| 36:08      | make your own, you know, daily brief shortcut. Absolutely. And you know, the other thing is,             |
| 36:14      | do you really want to ask your HomePod for 10 different things? I personally find that after            |
| 36:19      | a while, I get a little annoyed by going, hello, lady. You know, like, please, can you tell me           |
| 36:24      | the weather today? Hello, can you tell me this? And every time you do it, it goes, mm-hmm. After         |
| 36:28      | you say the magic phrase, which is fun. But the 18th time in a row in the morning, just to get           |
| 36:33      | all the information that you need can be a little wearing. And the other thing that you could do         |
| 36:37      | with this, which I've just thought of, is if you wanted to, you could save your daily brief into         |
| 36:43      | day one or something. Now, previously, what I was trying to do back when iOS 13 just was in beta,        |
| 36:49      | early beta, is I was creating a PDF, converting the PDF to an image, and then setting that to my         |
| 36:56      | lock screen information. So then when I, when I picked up my lock screen, I got like a little            |
| 37:01      | overview of my day. Unfortunately, the ability to set the wallpaper automatically has gone.              |
| 37:06      | And actually, for that particular use case, I think it was good because I found that the,                |
| 37:11      | of course, the information changes throughout the day until you really want to be updating your          |
| 37:15      | wallpaper 8,000 times a day. You could set this to happen every time you run an app or something,        |
| 37:20      | open an app, but it feels like a lot of work. And it's not, it wasn't a great experience,                |
| 37:27      | but the idea of it was pretty cool. Yeah, I know some people that were doing that. And                   |
| 37:31      | for me, it just felt like a bridge too far. At some point, I don't need, I don't need that               |
| 37:36      | automation. I'm good. I'm good. I ran it in the morning. I'm good. I generally know my appointments      |
| 37:41      | once I get rolling. Yeah. But anyway, make a daily brief gang. Anything I missed, Rose,                  |
| 37:47      | anything on yours that stands out that we didn't talk about? I don't think so. Oh,                       |
| 37:51      | wait, one thing that I do have, which we have not talked about, is I get all of my tasks,                |
| 37:55      | so due today out of OmniFocus. So they have this cool new action called get items from OmniFocus.        |
| 38:01      | Yeah. And it's great because you can get the upcoming due items, which is very, very handy               |
| 38:08      | because it allows me to do that. And this, combined with getting deadlines out of my calendar,           |
| 38:12      | I have a specific calendar for big deadlines. So I can get the next month's worth of deadlines.          |
| 38:18      | I usually go with two weeks. Every so often, I go in and tweak that. I've had four weeks for a           |
| 38:22      | while and I've just gone back to two weeks because I find me, my brain goes, four weeks,                 |
| 38:26      | that's loads of time. So I stop listening after the first item. And the first item is due today,         |
| 38:31      | and it turns out there's one also due tomorrow. And so I spend all of today relaxing after completing    |
| 38:34      | the first item. And the next morning, it's like, oh my gosh, I've got all of this to do. So yeah,        |
| 38:39      | I've been getting my tasks due today out of OmniFocus. I've been excluding a couple of tags              |
| 38:43      | because I have some recurring items in OmniFocus. I know that they're due and I'll see them in           |
| 38:49      | OmniFocus today. I just don't need them, you know, talked to me or shown to me. So, yes.                 |
| 38:55      | Yeah, I think someday we're going to have to do a kind of a smackdown of all our calendars on the        |
| 39:01      | show. I don't know when. But we are going to do that at some point. Yeah, we can put it in the future.   |
| 39:09      | This episode of The Automators is brought to you by Ahrefs, SEO tools and resources to grow              |
| 39:14      | your search traffic. Get a seven day trial for just $7. So whether you work for a big brand,             |
| 39:20      | run your own small business, or do freelance work, getting traffic to your website is always             |
| 39:25      | a challenge. And there's just so much competition out there. Ahrefs is an all in one SEO tool set        |
| 39:31      | that solves that problem. It gives you the tools you need to rank your websites and Google and get       |
| 39:37      | tons of search traffic. Now, I know what you're thinking. You heard SEO and you're like, oh,             |
| 39:41      | what does that mean? Well, I'll tell you, I've always been a little skeptical of SEO as well.            |
| 39:45      | But I started looking into Ahrefs and I'm super interested. I'm going to be setting this up for          |
| 39:52      | some of the stuff I do over at MacSparky. Ahrefs is very easy to set up. They got features that I       |
| 39:57      | like. And it's something I could easily recommend. It uncovers how your competitors are getting          |
| 40:03      | traffic and why you can see the pages and content that send them the most traffic. And you can get       |
| 40:08      | estimated search volumes with their keywords Explorer tool. So you can see how well a piece of           |
| 40:13      | content is likely to perform before you write it. Ahrefs has a ton of useful stuff like content          |
| 40:20      | Explorer, which can help you find guest blogging opportunities and Rank Tracker, which lets you          |
| 40:25      | track your progress on keywords. It'll even pick up broken backlinks and help you fix them. So take      |
| 40:31      | the mystery out of SEO and go to Ahrefs right now. That's ahrefs.com. Sign up for a seven day            |
| 40:39      | free trial for just $7. Get reports on your website. See what's performing well and figure out your      |
| 40:45      | next move. Whether you have a personal website you want to get a following on or your company            |
| 40:50      | needs more traffic to convert into sales, go there right now. Ahrefs.com. Get that $7 trial.             |
| 40:58      | Our thanks to Ahrefs for their support of Automators and all of Relay FM.                                |
| 41:04      | All right, David. So I think it's time to talk about our next section, which is ask the Automators,      |
| 41:10      | because people have been sending us a lot of questions. And I will do full disclosure. My                |
| 41:15      | question today comes or the question today comes from me, because I wanted to know, because I've         |
| 41:21      | been trying to do a better context switching. And this ties into something I talked about a few          |
| 41:25      | episodes ago where I really want to be using my [[Stream Deck]] more. And I thought, you know,               |
| 41:29      | context switching is like the way to use a [[Stream Deck]], but I like to colour coordinate my stuff.         |
| 41:34      | So I was wondering, first of all, David, what colour are you using as your accent colour on                |
| 41:40      | macOS right now? And then secondly, can we automate changing this? Because this is going                 |
| 41:45      | to be a fun challenge. Yeah, I very I like orange, I like gray. But when you told me your idea of        |
| 41:51      | saying when I'm switching context, I want my highlight colours to change, that immediately                |
| 41:56      | pushed some buttons in my nerd brain that are like, yes, yes, I want that now. So immediately,           |
| 42:03      | when you asked me the question, my first go to was a stopover [[Keyboard Maestro]] [[Keyboard Maestro]]          |
| 42:08      | does with version nine have the ability to get to set the the dark versus light mode.                    |
| 42:16      | But this is these accent colours and highlight colours are not addressable directly through a              |
| 42:21      | [[Keyboard Maestro]] command, although I'm going to send Peter an email since we hang up here.               |
| 42:26      | So you and I started talking about this before we started recording the show. And then immediately,      |
| 42:31      | you know, once we realised [[Keyboard Maestro]] will not solve this problem, the obvious answer was,         |
| 42:36      | I'm sure [[AppleScript]] has a way to do it. So we started digging and both of us found two different       |
| 42:42      | AppleScripts methods to to make this switch. Yeah, so I actually found a really nice one liner          |
| 42:50      | that almost perfectly works. But this only changes the highlight colour. So for people not familiar,      |
| 42:55      | a macOS has an accent colour and a highlight colour that you can set. Now the accent colour is used         |
| 43:00      | for things like the arrows of drop-downs. And the highlight colour is shown when you actually              |
| 43:04      | highlight something. So by default, it's blue. And both of those are blue by default, but you can        |
| 43:10      | change them. And I found a one line AppleScript that I'm going to read to people here, because          |
| 43:14      | I think you're going to be pretty impressed at how short this AppleScript is. It's tell application     |
| 43:20      | system events to tell Apple, sorry, tell application system events to tell appearance                    |
| 43:26      | preferences to set highlight colour to green. That's it. That's the entire AppleScript for               |
| 43:32      | changing the highlight colour. Unfortunately, changing the accent colours David and I discovered           |
| 43:37      | proved to be a little more complicated. Yeah, it just doesn't address itself to that. And                |
| 43:43      | instead, what you have to do is you have to you have to address the specific system event box.           |
| 43:50      | So we've got an AppleScript that will open up. And in full credit, I got started on this journey        |
| 43:58      | over at [Stack Exchange](https://stackexchange.com/), somebody had started something on this. So we'll put a link for that             |
| 44:02      | in as well. But the script we ended up with is great because it addresses the system event box.          |
| 44:10      | So the actual preference will show up on the screen for an instant when you run it, which                |
| 44:14      | isn't, you know, who wants to see that, but it shows up and then it disappears. It doesn't move your     |
| 44:19      | mouse or anything. It just shows up and then goes away. But with this script, you can address            |
| 44:25      | lighter dark mode, you can address the highlight colour and the and also the the accent colour. So         |
| 44:32      | you can set everything you want. Like if you want to make the accent colour orange and the                |
| 44:36      | highlight colour red and set it to dark mode, you can do that. And it's a relatively small Apple          |
| 44:41      | script. It's about looking at it. I think it's about 10 lines. And so we got that put together.          |
| 44:49      | And then we put it into a [[Keyboard Maestro]] run AppleScript command. And now we can run it in            |
| 44:55      | [[Keyboard Maestro]]. So if you want to set up a specific, you know, a specific work mode where              |
| 45:02      | everything is orange, then you can do that. That's a very nice script. And what I like                   |
| 45:07      | about this script is it shows you how to create dialogue boxes as well. So you can give yourself         |
| 45:11      | a choice of the different appearance colours. So let's light and dark, the different accent colours        |
| 45:17      | and the different highlight colours. And that means that you have the values for all of those             |
| 45:23      | available to you. So what you can do then is instead of just using the script and having to              |
| 45:30      | set it every time. So every time I run my Automators context button on my [[Stream Deck]],                   |
| 45:36      | then it asks me and I have to remember the Automators is red. What I can do instead is I can             |
| 45:41      | modify the script so it doesn't come up and ask me and it just sets everything to red. And that          |
| 45:46      | is where where I'm going to be having a lot of fun because I like the idea of doing a little bit         |
| 45:51      | of colour changing. I may even change my wallpaper, David, you know, because we've got that really        |
| 45:55      | nice automators wallpaper for the Relay FM members. And I have that. That sounds like a                 |
| 46:00      | rotation, but I may just start changing my wallpaper programmatically based on what I'm doing.           |
| 46:04      | And now that I think about that, does Keyboard Master have a method to change the wallpaper              |
| 46:10      | without running an AppleScript? I believe we're both going to be looking. It's a race,                  |
| 46:14      | people. Are you counting the moments to see who runs it fast? I've not even got Keyboard                 |
| 46:18      | Master's editor open yet. Oh, wait. Let's see here. I'm working on it. I'm working on it.                |
| 46:27      | Am I going to be David? I don't think so. I don't think it's there. It's not there. I can't find it.     |
| 46:32      | I look for background and wallpaper, but you can definitely do that with AppleScript. If you can't      |
| 46:37      | do it with AppleScript, you can do it with automator. Yeah, that's another option there. So             |
| 46:41      | you could build an entire context switching, which just changes the appearance of your machine.          |
| 46:45      | You can even toggle light and dark mode, of course. Personally, I don't know about you, David,           |
| 46:51      | but I'm liking the Mac OS Catalina option, where it will just change automatically at sunset.            |
| 46:56      | So mine is literally about to change as we record this right now. It's pretty cool.                      |
| 47:02      | Yeah, there's definitely an AppleScript way to change the wallpaper                                     |
| 47:06      | back in the background. And I'll have to look into it further, but Keyboard                              |
| 47:10      | Maestro from my five second attempt doesn't look like it does that, but it may do that as well.          |
| 47:16      | But I love that idea. It's like, so you could automate when you press a button on your [[Stream Deck]]       |
| 47:22      | or a keyboard combination with [[Keyboard Maestro]], you get the automator's desktop,                        |
| 47:29      | then it opens up the apps you want and sets the colours to red, maybe, because that's in our              |
| 47:34      | icon. I like that. I have a challenge for our listeners because I'm pretty certain that you              |
| 47:39      | can get the details of the currently playing item from iTunes. So I would challenge anybody who,         |
| 47:45      | or sorry, music as it's now called on Mac OS Catalina, I would challenge our listeners to                |
| 47:50      | anybody who listens using the music app to automatically detect which podcast is playing                 |
| 47:56      | and to set the wallpaper of their desktop to the correct artwork for the podcast.                        |
| 48:02      | That would be a pretty cool hack. Yeah, that would be.                                                   |
| 48:04      | Yeah. I mean, I can imagine for music, changing it to say the album artwork,                             |
| 48:10      | that's not going to work so well because it's going to be changing on average every three minutes.       |
| 48:14      | If you're listening to Bohemian Rhapsody, then you'll be a little bit safer,                             |
| 48:18      | but listening to that on loop, I'm sure as good as it is, somebody might complain at some point.         |
| 48:24      | So yeah, podcast artwork.                                                                                |
| 48:26      | I got one for you. What if you said instead of changing the artwork to match the podcast,                |
| 48:33      | whatever the currently playing album is, you pull a dominant colour out of the album cover art,           |
| 48:41      | change the desktop to match that, and set the highlight and the accent colours to match it as             |
| 48:46      | well. How do you get the dominant colour out of an artwork on Mac OS? I can do it in shortcuts with       |
| 48:54      | Toolbox Pro. Yeah. I bet there's a way. I'm sure there is. That is a challenge for our listeners.        |
| 49:01      | I'm very interested in that. So like if you're playing Dexter Gordon and it's got a red cover,           |
| 49:07      | then all of a sudden everything kind of turns red. I think that would be fun.                            |
| 49:12      | I think that could be fun. Sounds like party mode for Mac.                                               |
| 49:15      | Yeah, kind of. But with an album, it wouldn't be three minutes. It would run for 45 minutes              |
| 49:19      | or however long the album is. That's assuming you listen to music based on the album.                    |
| 49:23      | If you shuffle large playlists like I do sometimes, then that might be a little confusing.               |
| 49:29      | Then it'd have to come with an epilepsy warning pop-up dialog box.                                       |
| 49:35      | Well, fortunately, even if the songs are say 45 seconds in length, I don't think that would be           |
| 49:40      | an issue for most people with epilepsy. But yeah, that's something where it would at the very least      |
| 49:44      | be distracting having this little thing change constantly out of the corner of your eye.                 |
| 49:48      | Because even if you have your window fit the screen on Mac OS, then on either side of the                |
| 49:54      | dock you have that little bit of space. That's assuming that you have your window set to as              |
| 50:01      | much of the screen as possible. Well, I think it's a good idea, man, to try and automate the way         |
| 50:09      | your computer looks based on different types of work you're doing. I think that we've solved the         |
| 50:15      | mystery here with this AppleScript. We'll put it in the show notes in one way or another.               |
| 50:21      | Maybe I'll just put together a [[Keyboard Maestro]] script on it and we'll share that in the show            |
| 50:26      | notes so you can just download it and it's already loaded up and ready to go. To change it, all you      |
| 50:31      | do because it's AppleScript is very easy. If you want dark mode or light mode, wherever it says         |
| 50:35      | dark, you change it to light. If you want to make it whatever colour you want, you just have to change    |
| 50:41      | the colours. If it's red, change it to blue. A couple things we learned in our experimentation.           |
| 50:47      | There is no gray, but there is a graphite. Yes. That threw me for a while because I was                  |
| 50:53      | trying gray with AY and EY because there's American and English spellings and neither of                 |
| 50:59      | them were working. They were just not being recognised. Script editor, I wasn't using script             |
| 51:03      | debugger. Otherwise, I'd have had auto-complete but it was saying, I can't find this variable            |
| 51:06      | and I'm there going, it's not a variable, it's a colour. They're going, it doesn't exist. It turns        |
| 51:11      | out it's graphite. Yeah. But all the colours work with this script. Some of the other attempts we         |
| 51:17      | made didn't recognise some of the newer colours. I think pink didn't work with some of the ones           |
| 51:21      | we were trying. Yeah. That was a problem with the script that I read earlier, the telling system         |
| 51:28      | events to change the appearance preferences. Pink was not recognised as part of that uppercase or        |
| 51:32      | lowercase. But the good news is for the longer script that we found, we're not going to read it          |
| 51:38      | out. It's better to copy and paste that one. Then you can go ahead and just copy and paste,              |
| 51:45      | use it. You've got all the colours listed in the second option as well. They've got the properties        |
| 51:51      | listed at the top. Look in that to find out what you need to copy. There's blue, purple, pink, red,      |
| 51:56      | orange, yellow, green, graphite. In the case of a highlight colour, there's also other.                   |
| 52:01      | I wonder why pink dropped off of that one. I guess an API problem, maybe Apple added pink and            |
| 52:09      | when this was written, they never added it as a parameter. Maybe. The thing is, when you compile         |
| 52:16      | that script, that's using that little hammer icon in the script editor, then for all of the other        |
| 52:21      | colours, it changes them from just black monoprint to blue italic. But when you do pink, it comes         |
| 52:28      | up as green, which means it's recognised as a variable rather than a constant. It just                   |
| 52:33      | doesn't recognise it. I don't know why. I tried pink with an uppercase p and a lowercase p.              |
| 52:38      | All of the other colours are completely lowercase, but it just doesn't work. I don't know why.            |
| 52:43      | Maybe it's fuchsia or something. Magenta could be a different colour name.                                |
| 52:47      | But at the same time, in this script that we're going to link in the show notes,                         |
| 52:53      | with the different options that are listed in there, pink is right there.                                |
| 52:56      | Yeah. And when we run it and we type pink, it works. So yeah, that's it. We'll have to reach             |
| 53:02      | out. Maybe if Sal, if you're listening, let us know. Here's a guy. He probably knows.                    |
| 53:08      | Maybe it was a joke. Maybe Sal just doesn't like pink and decided to leave it out,                       |
| 53:13      | you know, when he was doing it. So if anybody is on the AppleScript team and has a way to fix           |
| 53:19      | that, please give me a fix on the highlight colours and let me set pink and also let me set               |
| 53:24      | accent colours the same way because that would be pretty cool, but you can't set accent colours so         |
| 53:28      | quickly, unfortunately. Yeah, it would be nice to get the accent colours with a one line script as        |
| 53:33      | well, but just not in the cards. Although I do think the script we have is very useful because           |
| 53:38      | it does everything. It does the light versus dark mode highlight and accent colour all in one go.         |
| 53:45      | So that's kind of nice. Yes. And it's very easy to take a look at it. I mean, it just says, you          |
| 53:49      | know, like click this checkbox and set it to that colour because it turns out single selects in           |
| 53:57      | AppleScript are actually checkboxes. So this tells you actually how to script a user interface          |
| 54:02      | where something doesn't have the explicit ability to say, hey, set the accent colour of Mac OS to         |
| 54:06      | purple. You know, you click a specific checkbox, which is the single choice list there in its            |
| 54:14      | very specific area. And that's a pretty cool thing to learn because that'll help you a lot with          |
| 54:19      | with applications who are unfortunately not so scriptable in AppleScript. And also, I think             |
| 54:24      | if you want to automate any of the system settings, this is going to be all you need. I mean, once       |
| 54:30      | you figure this out, you can do almost anything in your system settings with an AppleScript.            |
| 54:35      | Yeah, absolutely. Okay, so we'll put that one in and everybody download it. So we'll I'll put it         |
| 54:42      | in as a [[Keyboard Maestro]] script, but we'll also put in the AppleScript file and a link to the           |
| 54:48      | source link we got on this stuff. So you guys can play with it. Let us know what you do with it.         |
| 54:53      | I'm sure there'll be some interesting uses. I can tell you I'm going to be implementing this with        |
| 54:58      | my setups on my on my [[Stream Deck]]. So like when I go into email mode, I think I'm feeling blue           |
| 55:05      | for email. But for recording screencasts, I'm feeling graphite. So it just depends on, you know,         |
| 55:12      | I like the idea of being able to set the whole system around the current context. So that's              |
| 55:17      | what I'm going to be doing. I'll be dropping this AppleScript into a bunch of setup scripts.            |
| 55:20      | I will be doing the same thing. Unfortunately, my [[Stream Deck]] is back in Austria. So I'm just            |
| 55:24      | building the [[Keyboard Maestro]] macros right now and I'm using that on screen palette with keyboard        |
| 55:28      | maestro, which is pretty cool. But every self done it annoys me a little bit. And so I end up closing    |
| 55:32      | the palette. But it's a nice little way of trying to do things for sure. You know, you should do         |
| 55:37      | it as a conflict palette in [[Keyboard Maestro]]. So it only shows up when you trigger the keyboard          |
| 55:42      | shortcut. And then you can select the one you wanted and it'll disappear. See, David's a genius.         |
| 55:47      | There's a reason why we're podcast co hosts. All right. I have a few nuts to add to the pile. But        |
| 55:53      | honestly, Rose, I think you win today with that whole dictionary thing at the top and the location       |
| 55:58      | that's that's genius. I think we can say that we both have great ideas and we share them. So             |
| 56:04      | everybody's a winner. Okay, we all win. This episode of the Automators is brought to you by              |
| 56:11      | ExpressVPN. High speed, secure and anonymous VPN services get three months for free with a one year      |
| 56:18      | package. Just go to ExpressVPN.com/automators. You might have already heard how important it is    |
| 56:25      | to have a VPN. And now that a lot of you are working from home, it's even more important to              |
| 56:30      | choose a VPN that you trust. I've been using ExpressVPN for years, and I'm a happy customer.             |
| 56:36      | I like how easy it is to use. I just go into the application, press one button and I'm securely          |
| 56:42      | using the internet through a VPN. ExpressVPN values your privacy. They don't log your data               |
| 56:49      | to make money from selling it like some other services do. ExpressVPN has developed a technology         |
| 56:54      | called trusted server that only stores data and RAM and it's super fast. And you can stream HD           |
| 57:00      | quality videos with no lag. It's really easy to use. You just fire up the application, click one         |
| 57:06      | button and you're connected. Plus ExpressVPN is loved by tech radar, the Verge, CNET and more.           |
| 57:12      | So protect yourself today. Go to the link right now ExpressVPN.com/automators and get an           |
| 57:18      | extra three months free on a one year package. Visit ExpressVPN.com/automators now                 |
| 57:25      | to learn more. Our thanks to ExpressVPN for their support of the automators and all of Relay FM.         |
| 57:32      | All right, Rose, what else are you automating these days?                                                |
| 57:35      | All right. So recently here at Automators, we switched from using Quip for our show notes to             |
| 57:41      | using Google Docs. Now Quip was great because it supports Markdown and it does do multiple               |
| 57:49      | editors at the same time and so on. But you and I were running into some odd issues here and there.      |
| 57:53      | We were inviting guests to view the show notes for their shows and they were having to sign up           |
| 57:58      | and ask for permission to view things, which is not what we wanted at all. And we don't want             |
| 58:04      | people to have to sign up for stuff. We want to make this easy on guests. And every so often,            |
| 58:08      | I was finding that I couldn't take notes as we were recording. So as we record, we create a list         |
| 58:14      | of edit points just for any time we mess something up or so that we can make sure that our chapter       |
| 58:19      | markers are in the right space. And this was driving me a little bit insane and you weren't              |
| 58:23      | that happy with it either. So we decided we're switching from Quip to Google Docs, which means           |
| 58:29      | that I had to change the automations in Zapier. Because Zapier for us automatically creates the          |
| 58:35      | show notes doc so that then, especially for guests, we have a predetermined outline that we              |
| 58:42      | will use as a basis. And then we will go in and edit it. We try and get this to be a similar             |
| 58:50      | format every time so that people can jump to the same places in the show, if that's what                 |
| 58:54      | they're listening for the next time around. And so I had to change this. And this meant that I had       |
| 59:01      | to do a few things. First of all, I had to swap the Quip action for a Google Docs action to create       |
| 59:06      | a Google Doc. But the Google Docs action does not support Markdown. So I also had to go and add          |
| 59:13      | an action before this. And to do that, I use the formatter option in Zapier. And this is really          |
| 59:19      | great. I think it might be called format text, actually. But what you can do among a variety             |
| 59:25      | of other things is you can convert Markdown to HTML. And the Google Docs action to create a new          |
| 59:30      | Google Docs supports HTML. So our entire show notes are based on information that we have in             |
| 59:36      | [[Airtable]]. And then this is extracted. And then there's a script inside of Zapier. I'm not going          |
| 59:41      | to go into the details there, but essentially it checks whether or not we have a guest. And it           |
| 59:45      | generates some different things based on that and the notes that are passed into this from [[Airtable]].     |
| 59:51      | And then that is all in Markdown because that means that if David or I want to pop in and edit           |
| 59:57      | something, then we can do that very easily. And then this action, the format action converts             |
| 01:00:05   | our Markdown HTML. And then the HTML is put into the Google Doc action, which creates the Google         |
| 01:00:10   | Doc. And then, of course, we have another [[Airtable]] action to update our [[Airtable]] record with a link      |
| 01:00:16   | to the show notes. Because this means that what I'm doing with my [[Stream Deck]] button, when I get         |
| 01:00:22   | my [[Stream Deck]] back for the time being, it's just the [[Keyboard Maestro]] macro, is it opens the [[Airtable]]   |
| 01:00:27   | [[Airtable]] base in Firefox for me. And then I can see the link to the show notes. And I can just           |
| 01:00:35   | click on it and go straight to the show notes there. Because, of course, every show has a different      |
| 01:00:38   | document. Nice. That was a lot of work, though. It sounds like a lot of work, but actually,              |
| 01:00:43   | once I realised that I just needed a formatter action, it wasn't so much work. I added the script        |
| 01:00:48   | a couple of months ago, and I've been going through and tweaking it every time. Because, you know,       |
| 01:00:53   | we like to change things up a little bit and improve things. For example, for a guest, there's           |
| 01:00:58   | a link where they can upload the audio. Because otherwise, the inevitable question is, where do          |
| 01:01:02   | I upload the audio to? And we want to make it easy for everybody so we don't have to fumble for          |
| 01:01:07   | finding links and stuff like that. So yeah, it's been a little bit of work over time to do it,           |
| 01:01:13   | but the payoff is so good. Because now we have all the information right here                            |
| 01:01:18   | in Google Docs in front of me. And you and I are both editing today's show notes as we go                |
| 01:01:22   | at the same time to make sure we've got all the links in at the bottom. And that's pretty awesome.       |
| 01:01:27   | Yeah, it seems to be a little more consistent. And, you know, that's why we did it. But I've             |
| 01:01:34   | always thought of Google Docs and the Google suite in general is fairly automation friendly in terms     |
| 01:01:39   | of web-based automation. You know, like they have a lot more hooks in Zapier and if this,                |
| 01:01:44   | then that and these other web-based automation services, because just the nature of the beast,           |
| 01:01:49   | I never realised the problem with Markdown. Yeah, I mean, it's not really a problem with Markdown.       |
| 01:01:55   | I just, I'm not sure if it's maybe on the Zapier side of the action, or maybe if it's on the Google      |
| 01:02:00   | Docs side, that it doesn't support Markdown. But at the same time, I'm already paying for Zapier         |
| 01:02:07   | so that I can add lots and lots of actions to one Zap. So I can do many, many things,                    |
| 01:02:12   | which is very useful. And then, you know, so I just added this format direction, you know,               |
| 01:02:17   | it's free for me. Zapier has a little bit more work on their servers, but I'm sure they don't            |
| 01:02:22   | mind converting a couple of hundred words from Markdown to HTML. And then that means, you know,          |
| 01:02:28   | we end up with everything in the Google Doc ready to go nicely formatted for us.                         |
| 01:02:33   | Nice. Nice. So I have been doing some simple automation lately. [[Drafts]] has been, I don't know,           |
| 01:02:41   | for some reason, [[Drafts]] just always gives you automation ideas. But as we record this, we're             |
| 01:02:47   | fairly early in the home lock down situation. The show is actually going to go out several                |
| 01:02:53   | weeks after we record it. So I hope everything's okay in the future. Yes, yes. But the, but I've         |
| 01:03:01   | got a bunch of family members that are home now. And the, I've been sending text messages to this        |
| 01:03:07   | groups and I've set them up in [[Drafts]] with specific actions designed to message very specific groups     |
| 01:03:14   | of people. And I've got several of them. So I thought rather than opening messages and trying            |
| 01:03:19   | to like cobble together those groups, I would just do it in [[Drafts]]. And the problems to solve is         |
| 01:03:24   | number one, it's easier to make at the beginning. And all you do with [[Drafts]] is create a message         |
| 01:03:29   | template with the specific recipients you want inside of it. And then you write the message              |
| 01:03:34   | in [[Drafts]] and then you invoke the action and off it goes. So it solves the problem of creation,          |
| 01:03:40   | but it also solves the problem of not responding to the wrong thread. Because when you've got a          |
| 01:03:44   | bunch of threads and messages with multiple people, it's not obvious which one you're responding to.     |
| 01:03:49   | So I thought, you know, to avoid problems, I would do that. There's nothing too fancy about it.          |
| 01:03:54   | There's no, I made a separate menu group. But other than that, it's there's really not much to it.       |
| 01:04:00   | I mean, that's one of those things where it's a nice, a small automation that's really great.            |
| 01:04:04   | And that reminds me of another one that I've created based on message groups as well,                    |
| 01:04:08   | because I'm temporarily with my parents, they got a little stuck over here with the whole                |
| 01:04:11   | lock down situation. Unexpectedly, you know, things progressed faster than I expected. But                |
| 01:04:16   | you know what, I'm still in a great place. So I'm pretty happy with how that worked out.                 |
| 01:04:20   | But when I start recording, you know, I messaged my parents in a group chat to let them know that,       |
| 01:04:24   | hey, I'm recording, please don't vacuum. And so I've actually got a little shortcut for that,            |
| 01:04:29   | where I can just, you know, say, you know, podcast recording, and then asks me start or stop.            |
| 01:04:34   | And then it sends a message to that group chat to say, yes, you know, I'm starting recording,            |
| 01:04:39   | or I've just stopped recording, go ahead. Because sometimes I'll stay on the call                        |
| 01:04:43   | after we stop recording. David and I don't immediately hang up at the end of an episode.                 |
| 01:04:47   | We like to chat and make sure that we're happy with everything and do a little bit of future             |
| 01:04:51   | planning. So it's good for them to know that, you know, I'm not recording anymore, so they can get       |
| 01:04:54   | on with life. It's remarkable how useful text messages are when you have an entire family                |
| 01:05:01   | back in a house together. Yes. Yeah. I mean, living on your own, like maybe you wouldn't                 |
| 01:05:05   | think of things like that, but it's really useful for me to be able to message my parents and be like,   |
| 01:05:09   | hey, just started podcasting. And I was like, you're recording a podcast? I was like, no,                |
| 01:05:13   | no, I sent you that information at lunchtime. And that it's okay. I don't expect them to remember        |
| 01:05:18   | every moment of my day. When I was a kid, I had a friend whose family had installed a wired set of       |
| 01:05:23   | intercoms in their house. And I just thought it was the coolest thing ever that they could all           |
| 01:05:29   | like talk to each other in different rooms without screaming because that's how. I mean,                 |
| 01:05:33   | that's the walkie-talkie function on watchOS, right? Yeah. And now we have it like with text             |
| 01:05:37   | messages, so it doesn't make any noise. But do you ever use the walkie-talkie function?                  |
| 01:05:42   | No, because I forgot about it until I just mentioned it just now. And now I want to press                |
| 01:05:47   | the button, but we're still podcast recording. And my parents are downstairs and they're not             |
| 01:05:50   | expecting this. So I don't know what will happen if I turn it on and what they'll say to me.             |
| 01:05:55   | So I'll do that after the show and report back next time. Yeah. Well, my wife and I set it up            |
| 01:05:59   | and we've never used it. And just like the whole idea, I don't know, it's something you test once        |
| 01:06:04   | and I bet the numbers of usage on that are ridiculously small. I can see the usage for                   |
| 01:06:11   | that being great. If you're going to Disneyland for the day, just being able to communicate              |
| 01:06:16   | quickly with each other by talking and not having to get your phone out of your pockets,                 |
| 01:06:19   | especially in your case, your kids at grownups. So that's not a worry for you, but especially if         |
| 01:06:25   | you've got small children, you're wrangling small children, just being able to walkie-talkie through     |
| 01:06:29   | your Apple Watch is yes. But there's part of me that just loves the idea of a text message               |
| 01:06:35   | because it's so much less invasive. It is, but the problem with a text message is you can't              |
| 01:06:41   | necessarily like, unless you've got AirPods in your ears, your watch isn't going to read it out.         |
| 01:06:45   | And then you're going to have to like, look at it to try and read it. And I don't know about you,        |
| 01:06:50   | but my watch screen is pretty small. Especially if I'm wandering around not wearing my glasses,          |
| 01:06:54   | which happens in the early morning or late evening, then I'm not going to be able to read that.          |
| 01:06:58   | Yeah. Well, either way, big problems. But hey, automate your text messages. You can do that              |
| 01:07:05   | with [[Drafts]]. I'm sure there's other ways to do it as well. But [[Drafts]] is usually my weapon of choice     |
| 01:07:09   | for things like that. All right. Well, that about wraps it up for the automators this time. You          |
| 01:07:14   | can find us over at relay.fm/automators. You can find the forum over at talk.automators.fm.        |
| 01:07:21   | Let us know what you want to do. Ask the automators there. We're going to start                          |
| 01:07:24   | doing that on future episodes. It's kind of fun getting little puzzles and trying to solve them.         |
| 01:07:29   | You'll find a bunch of stuff in the show notes today, including all those AppleScripts we talked        |
| 01:07:32   | about. We'll see you next time. Yeah. See you in two weeks, everybody.                                   |
