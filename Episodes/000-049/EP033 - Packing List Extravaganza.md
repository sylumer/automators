---
status: "incomplete"
fc-date:
  year: 2019
  month: 09
  day: 27
fc-category: "podcast"
podcast: "Automators"
published: 2019-09-27
duration: 3204
formattedduration: "00:53:24"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/33"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators033.mp3"
episode: 33
title: "33: Packing List Extravaganza"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rosemary and David climb out of their suitcases armed with a variety of Shortcuts, Scriptable Scripts, Trello Boards, Reminders, TextExpander Snippets, Keyboard Maestro Macros and even a [[Drafts]] action group to automate and manage your packing lists.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 033 Discussion](https://talk.automators.fm/t/automators-33-packing-list-extravaganza/5602)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[Daylite (Sponsor)|Daylite]] - A CRM for your small-business.

# Show Notes
- [Automators #17: Live at PodCon - Relay FM](https://www.relay.fm/automators/17)
- [Packing List Trello](https://www.icloud.com/shortcuts/74af697aa22d463dafdb33cb4f159059) - You can share text to this Shortcut or if no input is provided you will be prompted for input. This searches your calendar for all-day events followed by a prompt to use one of those as the name of your list. If the list doesn't exist yet in the Trello board then it is created.
- [Packing Lists](https://www.icloud.com/shortcuts/ed26b456f6fa472fa45fd9d6026f3696) - David's advanced reminders setup Shortcut
- [Building a Packing List App with Shortcuts and iOS 13 - YouTube](https://www.youtube.com/watch?v=ZFmcYP3bprQ&feature=youtu.be) - The video to match the above Shortcut
- [Packing List Extravaganza](https://www.icloud.com/shortcuts/855071cf3f074f43b97a7e3e95ff541e) - Rosemary's Shortcut similar to the above, but it calls Scriptable to create the script. 
- [Scriptable Script to Find or Create Reminders List](https://www.dropbox.com/s/4mh232fqqbh1m6y/Find%20Reminder%20List.js?dl=0) - Called by the Scriptable Script above
- [Packing List Extravaganza Extras](https://www.icloud.com/shortcuts/6093dd8d1b9a483bb7647affb1176f74) - Rosemary's Shortcut for extra items to be added to any packing list - pairs with the previous Shortcut.
- [TextExpander Snippet for Packing Lists](https://www.dropbox.com/s/i33djlb3xwoxf9c/Packing%20List.textexpander?dl=0)
- [Keyboard Maestro Packing List](https://www.dropbox.com/s/ldvkoyu494tio8b/Packing%20List.kmmacros?dl=0)
- [Create Packing List (Drafts & OF)](https://www.icloud.com/shortcuts/fdd67dbb01c14d749566441a07cfd1e9) - Rosemary uses this to kick off her Drafts list - it creates the Draft and adds a single task to OmniFocus called "Pack", due the date the trip starts, and with a link to the Draft in the notes field.
- [Automators #23: Diving into Drafts Automation with Tim "The Drafts Man" Nahumck - Relay FM](https://www.relay.fm/automators/23)
- [Packing | Drafts Action Directory](https://actions.getdrafts.com/g/1ZC) - Rosemary's Packing Action Group for Drafts
- [Documentation on the Drafts Action Group](https://rosemaryorchard.com/everything/automators-33/)

# Transcription
  
| Time Index | Transcription                                                                                                                                                    |
| :--------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators.                                                                                                                                |
| 00:04      | My name is Rosemary Orchard, and I am joined by my fabulous co-host, David Sparks, and                                                                           |
| 00:08      | we're going to talk about how to automate your technology to do your work for you.                                                                               |
| 00:12      | Hello, David.                                                                                                                                                    |
| 00:13      | Hello, Rosemary.                                                                                                                                                 |
| 00:14      | How are you today?                                                                                                                                               |
| 00:15      | I am going crazy because I've just got back from holiday, and now we're talking about                                                                            |
| 00:19      | packing, and I've just booked another trip, so it's perfect timing.                                                                                              |
| 00:22      | Yeah, this is one of my favourite kinds of Automators episodes.                                                                                                   |
| 00:27      | We've got a problem, and between the two of us, we've found like six different ways to                                                                           |
| 00:32      | solve it through automation, and we're just going to talk through them all.                                                                                      |
| 00:36      | You may need this automation to build your packing list.                                                                                                         |
| 00:38      | We're going to share a bunch of stuff with you, but maybe you just need these automation                                                                         |
| 00:43      | skills to do something else other than a packing list, but it will be helpful.                                                                                   |
| 00:48      | Before we get to it, a couple of questions.                                                                                                                      |
| 00:50      | First is, we don't really do news on this show, but you got a new iPhone.                                                                                        |
| 00:57      | I do, and I believe you have a Yoda coloured iPhone.                                                                                                              |
| 01:00      | I do.                                                                                                                                                            |
| 01:01      | The Yoda phone.                                                                                                                                                  |
| 01:02      | That's what I call it.                                                                                                                                           |
| 01:03      | Well, this year, I went crazy.                                                                                                                                   |
| 01:04      | I went gold.                                                                                                                                                     |
| 01:05      | I've never done that before.                                                                                                                                     |
| 01:06      | I've only had white and silver.                                                                                                                                  |
| 01:07      | All right.                                                                                                                                                       |
| 01:08      | Did you get the pro?                                                                                                                                             |
| 01:09      | I did.                                                                                                                                                           |
| 01:10      | Yeah.                                                                                                                                                            |
| 01:11      | But it didn't go max.                                                                                                                                            |
| 01:12      | Five minutes.                                                                                                                                                    |
| 01:13      | What are your impressions?                                                                                                                                       |
| 01:14      | What do you think of it?                                                                                                                                         |
| 01:15      | I'm liking it.                                                                                                                                                   |
| 01:16      | Adjusting to know 3D Touch was a struggle, but for the week before it arrived, I turned                                                                          |
| 01:20      | off 3D Touch on my Tennis Max, and so I'm already used to navigating with the keyboard                                                                           |
| 01:25      | and quick tip, if you want to select a word, then you can tap with another finger and that                                                                       |
| 01:30      | will select the word once you've started navigating with cursor.                                                                                                 |
| 01:33      | I love the camera so much.                                                                                                                                       |
| 01:36      | I didn't know that I'd have a huge amount of use for the ultra-wide because I honestly                                                                           |
| 01:40      | find myself using telephoto more than ultra-wide, but it's great, and it's just a really nice                                                                    |
| 01:48      | phone, and I feel like it's faster as well.                                                                                                                      |
| 01:51      | I mean, I'm not really pushing it to the limits, but it's faster.                                                                                                |
| 01:54      | Yeah.                                                                                                                                                            |
| 01:55      | I talked about it more on the upcoming episode of MPU, so I won't go into it in great detail,                                                                    |
| 02:00      | but I wanted to definitely get your opinion.                                                                                                                     |
| 02:02      | One thing I would say is, with that wide lens, now you can get a portrait mode without having                                                                    |
| 02:09      | to back up.                                                                                                                                                      |
| 02:10      | You know what I mean?                                                                                                                                            |
| 02:11      | Yeah.                                                                                                                                                            |
| 02:12      | Yeah, definitely.                                                                                                                                                |
| 02:13      | That's nice.                                                                                                                                                     |
| 02:14      | And I can take a photo of my podcasting setup without actually moving backwards, which is                                                                        |
| 02:18      | amazing.                                                                                                                                                         |
| 02:20      | So what got you, because you had the big size before, now you've gone to the smaller size                                                                        |
| 02:24      | would?                                                                                                                                                           |
| 02:25      | Why?                                                                                                                                                             |
| 02:26      | Well, the back cracked because I kept dropping it, and I dropped it once, and there was actually                                                                 |
| 02:34      | no crack.                                                                                                                                                        |
| 02:35      | And then while I was on holiday, beta software, it happens.                                                                                                      |
| 02:39      | My phone locked up.                                                                                                                                              |
| 02:40      | It overheated.                                                                                                                                                   |
| 02:41      | It was non-responsive, so I just left it, and when I came back, the back had just shattered.                                                                     |
| 02:46      | I think maybe after expansion or something, I need to take it to the Apple Store.                                                                                |
| 02:50      | I should point out I did stop using it after this.                                                                                                               |
| 02:54      | I just left it turned off and dead.                                                                                                                              |
| 02:56      | Since I've got it home, I have plugged it in where I have safety equipment, like a bucket                                                                        |
| 03:00      | of sound just in case.                                                                                                                                           |
| 03:01      | You didn't tell me that?                                                                                                                                         |
| 03:03      | I've never heard of an iPhone cracking on its own.                                                                                                               |
| 03:06      | That's crazy.                                                                                                                                                    |
| 03:07      | It already had impact points on the back that I'm 100% sure of because otherwise it wouldn't                                                                     |
| 03:12      | shatter the way it has done, but it is broken.                                                                                                                   |
| 03:16      | So I'm going to take it to the Apple Store and have them have a look at it at some point.                                                                        |
| 03:20      | But yeah.                                                                                                                                                        |
| 03:21      | So I kept dropping it.                                                                                                                                           |
| 03:22      | Yeah, I decided I'll try the smaller one because within two weeks, you can always return it.                                                                     |
| 03:27      | So yeah, I went back to smaller, and I'm happy with it.                                                                                                          |
| 03:33      | Yeah, I have to admit, because we did the thing where I gave my old phone to my daughter,                                                                        |
| 03:37      | then I took her phone to sell it to Apple.                                                                                                                       |
| 03:41      | I decided to try that this time.                                                                                                                                 |
| 03:42      | I hadn't done that before, and I was looking at the smaller pro, and that's actually a                                                                           |
| 03:48      | really nice phone.                                                                                                                                               |
| 03:49      | It fits in your hand really nice.                                                                                                                                |
| 03:50      | It does.                                                                                                                                                         |
| 03:51      | So I mean, this is a very girly problem to have.                                                                                                                 |
| 03:55      | I have some really small handbags, which is really cute, and the Max only just fits.                                                                             |
| 04:01      | Like you have to shuffle things around to get it in there.                                                                                                       |
| 04:04      | And if it's in a rubbery case, it's difficult, whereas the regular size Pro fits perfectly.                                                                      |
| 04:10      | So for the sake of not having to buy new handbags, I bought a new phone.                                                                                         |
| 04:14      | I'm not sure that works.                                                                                                                                         |
| 04:15      | Well, congratulations on your new phone.                                                                                                                         |
| 04:17      | Yes.                                                                                                                                                             |
| 04:18      | I'm looking forward to seeing it next time you and I are together, which seems like about                                                                        |
| 04:22      | monthly lately.                                                                                                                                                  |
| 04:23      | Well, we'll see.                                                                                                                                                 |
| 04:25      | Yeah.                                                                                                                                                            |
| 04:26      | Anyway, also, this is still September, we're at the tail in here, but it is, and it is                                                                           |
| 04:32      | Childhood Cancer Awareness Month, and St. Jude is doing this special promotion with                                                                              |
| 04:37      | Relay FM.                                                                                                                                                        |
| 04:38      | It's gone really well.                                                                                                                                           |
| 04:39      | They've raced over a quarter of a million dollars as I read this ad, and that's just                                                                             |
| 04:43      | amazing.                                                                                                                                                         |
| 04:44      | And we appreciate all your support for all of you that did donate.                                                                                               |
| 04:47      | I want to stop and thank you right now for doing that.                                                                                                           |
| 04:50      | It's a great foundation.                                                                                                                                         |
| 04:52      | All they do is they take sick kids and they make them better and they don't charge them                                                                          |
| 04:56      | money for it.                                                                                                                                                    |
| 04:57      | And what more could you ask for?                                                                                                                                 |
| 04:59      | If you'd still like to donate, it's not too late.                                                                                                                |
| 05:01      | Go to stjude.org/automators and you can make your donation today.                                                                                          |
| 05:08      | Thank you.                                                                                                                                                       |
| 05:10      | So Rosemary, you and I have had this ongoing discussion with each other, a totally unrelated                                                                     |
| 05:16      | interview to the show about packing lists.                                                                                                                       |
| 05:19      | I think this goes back like six months because we've both of us had taken a lot of trips                                                                         |
| 05:23      | lately and because we're nerds and friends, we keep writing just, so how are you doing                                                                           |
| 05:28      | your packing list?                                                                                                                                               |
| 05:29      | And it's kind of fun that we've both evolved it through several iterations throughout this                                                                       |
| 05:35      | period.                                                                                                                                                          |
| 05:36      | And I thought it would be fun to kind of share with everybody how we've done that.                                                                               |
| 05:40      | Okay.                                                                                                                                                            |
| 05:41      | Well, I'm going to start with the basic one, basic.                                                                                                              |
| 05:45      | I should point out that in January this year, when we had a mini live episode at PodCon,                                                                         |
| 05:50      | we did talk a little bit about packing lists then.                                                                                                               |
| 05:52      | So there's an older version of packing lists in there.                                                                                                           |
| 05:56      | But after that, I really, I thought my setup was a bit too complicated and most importantly                                                                      |
| 06:00      | for me, I didn't like having all my items that I needed to pack in OmniFocus as an action                                                                        |
| 06:06      | group with packing with a due date before my trip, because then the day before your                                                                              |
| 06:10      | trip when you've got lots of other very important things to get done.                                                                                            |
| 06:14      | There's also like 78 items to pack inside your OmniFocus, just cluttering up your forecast                                                                       |
| 06:19      | view and it was impossible.                                                                                                                                      |
| 06:21      | So I moved my packing over to Trello because Shortcuts has great support for Trello.                                                                             |
| 06:27      | You can create lists, you can create cards and it seemed like a really good idea.                                                                                |
| 06:35      | So I moved everything over there and I primarily used Shortcuts for this and also the Trello                                                                     |
| 06:39      | app and a foundational aspect of this that I should definitely mention is that in my                                                                             |
| 06:47      | calendar, I have all of my trips as all day events in a specific calendar.                                                                                       |
| 06:52      | I use Tripit, I subscribe to the Tripit calendar, you don't have to use Tripit for any of my                                                                     |
| 06:57      | Shortcuts and I'm sure you can modify them to work and I'll see if I can put together                                                                            |
| 07:01      | a little article on how to modify them so that you don't need the calendar event.                                                                                |
| 07:08      | So I grabbed the calendar event and then I create the list for it and then I add things                                                                          |
| 07:11      | to the list and that's kind of it.                                                                                                                               |
| 07:16      | It's not super complicated.                                                                                                                                      |
| 07:18      | I did have a series of Drafts.                                                                                                                                   |
| 07:21      | So for example, I have one for clothes, one for tech, one for podcasting equipment, one                                                                          |
| 07:25      | for travel conference equipment and stuff like that and I could share them to the Shortcuts                                                                      |
| 07:33      | and then have those added as Trello Cards, which worked quite well apart from archiving                                                                          |
| 07:40      | Trello Cards on an iPhone while you're packing is actually quite hard to do.                                                                                     |
| 07:44      | Yeah, that actually makes sense though, I mean, because Trello, I can see you breaking                                                                           |
| 07:50      | it up into individual pieces of your trip and I think that's a theme that runs through                                                                           |
| 07:53      | a lot of our solutions because...                                                                                                                                |
| 07:56      | There's also something else I should mention.                                                                                                                    |
| 07:57      | I'm frequently planning multiple trips at a time so right now on my schedule, I have                                                                             |
| 08:02      | a trip to Brighton for a conference, then I am going to the UK to visit my parents and                                                                           |
| 08:07      | then I'm going to Berlin and there are various things cropping up already for these events                                                                       |
| 08:12      | that I know I need to pack so I need to have multiple packing lists available in advance,                                                                        |
| 08:16      | which perhaps is not a problem that other people have.                                                                                                           |
| 08:19      | For me, the way I started packing lists is it's not automation really.                                                                                           |
| 08:26      | What I did was I took a [[Apple Reminders\|Reminders]] list and I just, actually, let me just go back a little                                                                        |
| 08:32      | bit beyond that, I had a text list for the longest time that I just would look at the                                                                            |
| 08:37      | text list and I would reuse that text list.                                                                                                                      |
| 08:41      | Back in the days that I was using, I don't remember which app it was, it was one of the                                                                          |
| 08:46      | text-based apps and I would just duplicate the master list every time I had a new trip                                                                           |
| 08:52      | and every time there was something that I didn't remember or found something I needed,                                                                           |
| 08:56      | I added that to the master list and then I would make a duplicate copy of it and then                                                                            |
| 09:01      | delete from that list whatever didn't apply.                                                                                                                     |
| 09:05      | If I was going somewhere where I wasn't going to speak, all the speaker stuff that you usually                                                                   |
| 09:10      | bring with you, I would strike from the list.                                                                                                                    |
| 09:15      | That worked fine, but I wanted something where I could actually check off items as opposed                                                                       |
| 09:21      | to just having a text list.                                                                                                                                      |
| 09:22      | Also, we did some family trips and I wanted the ability to share it with my wife.                                                                                |
| 09:27      | What I did then was take that master list and I just converted it to a [[Apple Reminders\|Reminders]] list                                                                            |
| 09:33      | and it was called packing list.                                                                                                                                  |
| 09:35      | The idea behind it was number one, I could share it with Daisy and the second thing is                                                                           |
| 09:40      | it's just this massive list of items and anything I've ever needed is on this massive list of                                                                    |
| 09:48      | items and that works okay because I check them all off as I go to a trip and if there's                                                                          |
| 09:54      | something that is unchecked that I don't intend to bring on this trip, I just check                                                                              |
| 09:58      | it off anyway.                                                                                                                                                   |
| 10:00      | Very quickly, I would get that list down to just the things I need for this trip.                                                                                |
| 10:05      | I think I said this in that live show we did together, but the reason I don't do this stuff                                                                      |
| 10:10      | in OmniFocus is I feel like that's sacred ground for me.                                                                                                         |
| 10:14      | OmniFocus is where I get my work done.                                                                                                                           |
| 10:16      | I just don't want my packing list in OmniFocus.                                                                                                                  |
| 10:18      | That's just the way my brain works.                                                                                                                              |
| 10:21      | That makes sense.                                                                                                                                                |
| 10:22      | As I said, then you end up with all of these things to pack probably with a due date and                                                                         |
| 10:26      | it's just cluttering up the view of everything else that you need to pack or everything else                                                                     |
| 10:30      | you need to do.                                                                                                                                                  |
| 10:31      | It's not really something that you can do, well, I mean, pack socks is definitely something                                                                      |
| 10:37      | you can do, but it's not something that you're going to be thinking about when you're in                                                                         |
| 10:41      | the headspace of I need to clear out 60 of these emails before I can leave on this trip.                                                                         |
| 10:46      | It doesn't have to be on the same list.                                                                                                                          |
| 10:48      | I mean, OmniFocus and most task managers worth their salt have something akin to perspective,                                                                    |
| 10:55      | so you could have a packing list perspective, so it could be separate and you could keep                                                                         |
| 10:59      | it in one place.                                                                                                                                                 |
| 11:00      | I don't think that's a bad solution, but it would work the same way.                                                                                             |
| 11:04      | You would have these lists and you check them off or uncheck them.                                                                                               |
| 11:09      | You could automate it if you did an OmniFocus using shortcuts where you could add tasks,                                                                         |
| 11:15      | you know, a predetermined set of items to a list, but what I was doing was this thing                                                                            |
| 11:23      | eventually in [[Apple Reminders\|Reminders]] and what I would then do before a trip was I would go to the completed                                                                   |
| 11:28      | items in this massive list of things and I would just read through and uncheck the things                                                                        |
| 11:34      | I want to bring for this particular trip.                                                                                                                        |
| 11:38      | This is not automation, but either way, it was the way I was doing it for a very long                                                                            |
| 11:42      | time and I liked the sharing of reminders, I liked having it in a separate location,                                                                             |
| 11:47      | then my real work that got done in OmniFocus and I did it for a long time and up until                                                                           |
| 11:54      | about six months ago, that's the way I had been doing it for a long time and then I started                                                                      |
| 11:59      | thinking about other solutions and we're going to talk about some of those later in                                                                              |
| 12:03      | the show.                                                                                                                                                        |
| 12:04      | Yeah.                                                                                                                                                            |
| 12:05      | Well, I mean, it may not be automation in the sense that you're using fancy applications                                                                         |
| 12:11      | to do it, but it is an automation in the sense of everything's there and you don't have to                                                                       |
| 12:16      | retype everything every time you go on a trip, because that would be un-automated, definitely.                                                                   |
| 12:22      | And the nice thing about it was because it was a master list, even though I would have                                                                           |
| 12:27      | to read through a bunch of stuff that probably wouldn't apply to a lot of trips and ultimately                                                                   |
| 12:32      | that's the reason why I wanted something better because I got tired of doing that, but I looked                                                                  |
| 12:37      | at every potential thing that could be on my packing list every time I took a trip because                                                                       |
| 12:42      | I would read through those checked off items and there were really weird things on there.                                                                        |
| 12:48      | Maybe there's like an extra watch cable for my wife.                                                                                                             |
| 12:52      | I'm not going to take a lot of trips where I need to pack that, but that is on that list.                                                                        |
| 12:57      | So I would force my brain to look at all of those things every time I took a trip and                                                                            |
| 13:03      | as I would go through it, I would just uncheck the ones that would say, oh yeah, I'm going                                                                       |
| 13:06      | to need that on this trip and then once I was done, then I would go back and look at                                                                             |
| 13:09      | the packing list instead of the checked off items.                                                                                                               |
| 13:12      | I'd look at the unchecked items and then I'd start working through that list to pack.                                                                            |
| 13:16      | I mean, that makes perfect sense.                                                                                                                                |
| 13:17      | It's also a trigger list, which is a great getting things done technique.                                                                                        |
| 13:22      | This episode of Automators is brought to you by Daylight from Market Circle.                                                                                     |
| 13:25      | Daylight is the small business CRM and project management app for Mac, iPhone and iPad.                                                                          |
| 13:32      | Daylight is made for entrepreneurs and small businesses that use Apple devices.                                                                                  |
| 13:35      | It doesn't matter what kind of company you have, whether it's a financial service, a                                                                             |
| 13:39      | marketing agency, photography, real estate agent, or maybe even a podcaster.                                                                                     |
| 13:44      | Juggling multiple clients and projects can be a challenge.                                                                                                       |
| 13:48      | You might forget to follow up or lose track of details, emails and next steps.                                                                                   |
| 13:53      | Daylight solves all of those problems.                                                                                                                           |
| 13:55      | It has Apple Meal, contact and calendar integration.                                                                                                             |
| 13:58      | You can track all your leads in the sales pipeline and it even has document management                                                                           |
| 14:02      | so you can attach relevant files.                                                                                                                                |
| 14:03      | Plus, you can manage projects to keep track of all of the moving pieces.                                                                                         |
| 14:08      | If you want to keep track of all of your clients, deals and projects in one space and have a                                                                     |
| 14:14      | piece of mind knowing that your team's work is streamlined, go to MarketCircle.com now.                                                                          |
| 14:19      | It's worth checking out.                                                                                                                                         |
| 14:20      | 95% of their customers that they surveyed said Daylight improves overall organisation                                                                            |
| 14:25      | and productivity.                                                                                                                                                |
| 14:26      | That's MarketCircle.com.                                                                                                                                         |
| 14:27      | Our thanks to Daylight for their support of Automators and all of Relay FM.                                                                                     |
| 14:34      | All right.                                                                                                                                                       |
| 14:35      | The thing I did next after that was the problem I was having is I didn't like having to read                                                                     |
| 14:40      | through all those completed tasks and reminders.                                                                                                                 |
| 14:44      | It was obvious to me that there were typical groupings of tasks.                                                                                                 |
| 14:49      | If I'm going to bring an iPad with me, there's a list of things I need.                                                                                          |
| 14:53      | I need a charger.                                                                                                                                                |
| 14:54      | I need a keyboard.                                                                                                                                               |
| 14:55      | I need an Apple Pencil.                                                                                                                                          |
| 14:58      | There's things I need.                                                                                                                                           |
| 15:00      | Whereas if I'm going to bring a Mac, it's a different list or if I'm going to be going                                                                           |
| 15:03      | into cold weather, it's one list or if I'm going into rain, it's a different list.                                                                               |
| 15:08      | I went to Seattle with you and wore my wool shoes.                                                                                                               |
| 15:12      | That was obviously before I put this together.                                                                                                                   |
| 15:18      | If you're bringing the camera or if you're going to podcast, I realised there were these                                                                         |
| 15:22      | kind of categories of things I needed, so I decided, why don't I use shortcuts to auto-generate                                                                  |
| 15:31      | those categories?                                                                                                                                                |
| 15:32      | Rather than look through a list of 150 items, I looked through a list of 10 categories and                                                                       |
| 15:37      | they would generate whatever number of items arise from that.                                                                                                    |
| 15:43      | I did this in shortcuts and I'm going to share this shortcut and I'm also going to share                                                                         |
| 15:47      | a video.                                                                                                                                                         |
| 15:48      | The video I did was actually for the shortcuts field guide and thank you, everybody, for                                                                         |
| 15:52      | all the support on that that's come out since our last show and getting lots of great support                                                                    |
| 15:57      | and hearing from a lot of listeners that are making some awesome shortcuts.                                                                                      |
| 16:00      | I'll go ahead and share this one.                                                                                                                                |
| 16:02      | I'll put it up on YouTube and then we'll put a link in the show notes.                                                                                           |
| 16:07      | The idea behind this one is it's going to use a dictionary values.                                                                                               |
| 16:12      | We've talked in the show in the past about the difference between lists and dictionaries                                                                         |
| 16:17      | in shortcuts.                                                                                                                                                    |
| 16:18      | This is a great example of a dictionary because with a dictionary, with a list, you can only                                                                     |
| 16:23      | have one item attached to each item in the list.                                                                                                                 |
| 16:26      | With a dictionary, you can attach an array or a list of items for each item.                                                                                     |
| 16:32      | That's exactly what I need here.                                                                                                                                 |
| 16:33      | For instance, I have one called basics and that is travel documents, glasses, sunglasses,                                                                        |
| 16:41      | reading glasses, toothpaste, that kind of the basics that you need on any trip you take.                                                                         |
| 16:47      | I've got a list of these.                                                                                                                                        |
| 16:50      | My various dictionary entries with each one having its own list is basics, medicine, clothing,                                                                   |
| 16:56      | cold weather, rain, basic technology.                                                                                                                            |
| 17:00      | Basic technology is basically iPhone support because the iPhone is always coming with me,                                                                        |
| 17:06      | but it also includes things like noise canceling headphones, which if I'm going on an airplane,                                                                  |
| 17:10      | I might want to bring with me.                                                                                                                                   |
| 17:14      | In addition to basic technology, I've got iPad, MacBook, camera gear, podcasting, food.                                                                          |
| 17:22      | I like to bring along some cliff bars and whatnot when I go on a trip, so I've always                                                                            |
| 17:27      | got some food with me, you never know when you're going to get stuck without time to                                                                             |
| 17:30      | eat.                                                                                                                                                             |
| 17:31      | I've got these lists you go through in a dictionary.                                                                                                             |
| 17:36      | When you trigger the shortcut, all you get is that list, and then you check off the ones                                                                         |
| 17:42      | that you want.                                                                                                                                                   |
| 17:43      | I'm going to need the basics, I'm going to need the cold weather, I'm going to need the                                                                          |
| 17:45      | iPad, I'm going to need the journal.                                                                                                                             |
| 17:48      | That's four of these categories.                                                                                                                                 |
| 17:50      | When you do that, then the shortcut uses a repeat item, where it goes through and it                                                                             |
| 17:56      | takes each thing you selected, and it adds to [[Apple Reminders\|Reminders]] the individual array items for                                                                           |
| 18:03      | each one of those items.                                                                                                                                         |
| 18:04      | If you select basics, it's going to go through, and for each of the nine items I have under                                                                      |
| 18:10      | six, it's going to create a separate entry for that in a [[Apple Reminders\|Reminders]] list.                                                                                         |
| 18:17      | Each one gets its own entry and reminders that basically types it for you, and it does                                                                           |
| 18:22      | it for each category.                                                                                                                                            |
| 18:24      | Out of the dictionary, you've got in a one of 12 categories, and in each one of those,                                                                           |
| 18:30      | you have anywhere between two and 10 items in the array.                                                                                                         |
| 18:34      | It's going to put all that stuff into your [[Apple Reminders\|Reminders]] list, so you're going to have a                                                                             |
| 18:37      | customised [[Apple Reminders\|Reminders]] list created based on this dictionary.                                                                                                      |
| 18:43      | Makes sense so far?                                                                                                                                              |
| 18:44      | Yep.                                                                                                                                                             |
| 18:45      | I'm following you.                                                                                                                                               |
| 18:46      | It's really not that difficult of a shortcut once you understand dictionaries, and then                                                                          |
| 18:50      | the next thing it does is it just opens up [[Apple Reminders\|Reminders]] to that list.                                                                                               |
| 18:55      | Now, that's the basic one.                                                                                                                                       |
| 18:57      | This is what you're going to be able to download in the show notes.                                                                                              |
| 19:00      | Let me just talk about a few things I've considered doing with this.                                                                                             |
| 19:05      | The first is looking more closely at why some of these things are in the dictionary.                                                                             |
| 19:10      | For instance, basics that one I just went through, I only use this packing list when                                                                             |
| 19:16      | I'm going to take an overnight trip, which means I always need those basics.                                                                                     |
| 19:23      | What I should probably do is just automate putting the basics in without you having to                                                                           |
| 19:28      | check it off.                                                                                                                                                    |
| 19:30      | Why should I have to check though?                                                                                                                               |
| 19:32      | Every time I'm going to go, I'm going to bring a toothbrush, so I'm going to modify                                                                              |
| 19:37      | it at some point.                                                                                                                                                |
| 19:38      | I don't know if I'm going to get it done between now and the time we record the show                                                                             |
| 19:41      | to do that.                                                                                                                                                      |
| 19:42      | Then I got thinking that, well, if I'm going to automate putting the basics in, why don't                                                                        |
| 19:46      | I look at some of the other stuff that's subject to automation?                                                                                                  |
| 19:50      | I could have it query you as to the location you're going to when you run the shortcut,                                                                          |
| 19:57      | and then it could get the weather there, and if it's cold, it could automatically add the                                                                        |
| 20:01      | cold weather gear.                                                                                                                                               |
| 20:02      | If it's going to rain, it could automatically add the rain gear.                                                                                                 |
| 20:06      | But then I started building that out and realising that's just dumb.                                                                                             |
| 20:12      | Sometimes you want to do automation for the sake of automation.                                                                                                  |
| 20:18      | I know when I'm going to Seattle, I need my rain gear.                                                                                                           |
| 20:21      | I don't need to have this checking the weather in Seattle for me.                                                                                                |
| 20:24      | It always seems like it rains in Seattle.                                                                                                                        |
| 20:28      | I'm not sure that I want to take this shortcut that far.                                                                                                         |
| 20:32      | I mean, the other thing with that is how do you define cold and rainy?                                                                                           |
| 20:39      | Because if it only rains at night pretty much where you're going, then you're probably                                                                           |
| 20:43      | not going to want rain gear, or if you're going to be stuck in a conference hall for                                                                             |
| 20:47      | the entire time, it doesn't really matter if it's going to rain.                                                                                                 |
| 20:53      | I think, well, you can theoretically automate that.                                                                                                              |
| 20:58      | It's probably easier to just leave it and do it manually, because honestly, how many                                                                             |
| 21:02      | seconds does it take you to check those?                                                                                                                         |
| 21:04      | Yeah.                                                                                                                                                            |
| 21:05      | Usually, I know anyway, I don't have to check the weather, like where I'm going.                                                                                 |
| 21:10      | If I go to Chicago for certain times a year, I'm bringing the cold weather gear.                                                                                 |
| 21:16      | The other problem with this shortcut that I don't like is the shortcuts team did an                                                                              |
| 21:23      | amazing job this year.                                                                                                                                           |
| 21:24      | I am not going to fault them at all, because they did so much.                                                                                                   |
| 21:28      | But the one thing they left out of [[Apple Reminders\|Reminders]] is create a new reminders list.                                                                                     |
| 21:33      | Well, I believe this is where my shortcut comes in, perhaps.                                                                                                     |
| 21:39      | All right.                                                                                                                                                       |
| 21:40      | Yeah.                                                                                                                                                            |
| 21:41      | Okay.                                                                                                                                                            |
| 21:42      | We'll talk about that.                                                                                                                                           |
| 21:43      | Okay.                                                                                                                                                            |
| 21:44      | The way I currently have it set up, you have to have an existing [[Apple Reminders\|Reminders]] list called                                                                           |
| 21:47      | packing list, or there's nowhere to put these tasks.                                                                                                             |
| 21:51      | Yeah.                                                                                                                                                            |
| 21:52      | And that's something that I struggled with.                                                                                                                      |
| 21:54      | As I mentioned earlier in the show, I am often planning for multiple trips at the same time.                                                                     |
| 22:00      | In May of this year, I think pretty much every weekend I was on the road.                                                                                        |
| 22:05      | I believe I had one weekend off, but I was literally going, coming back, going, coming                                                                           |
| 22:09      | back, going, coming back.                                                                                                                                        |
| 22:11      | And then I had a little while and I went to [[WWDC]].                                                                                                                |
| 22:16      | And so that's the sort of thing where you can't leave planning your packing list until                                                                           |
| 22:21      | right before you go, because otherwise, guess what, you won't have the laundry done.                                                                             |
| 22:26      | And for that end, I needed, and this wasn't possible until iOS 13, I believe, the ability                                                                        |
| 22:33      | to have multiple [[Apple Reminders\|Reminders]] lists.                                                                                                                                |
| 22:34      | So I had to create them manually before, but now, thanks to Scriptable, I don't need to                                                                          |
| 22:40      | create them manually.                                                                                                                                            |
| 22:42      | And I have a two-line script.                                                                                                                                    |
| 22:44      | It's two-line script.                                                                                                                                            |
| 22:45      | Anybody can do this script.                                                                                                                                      |
| 22:46      | I'm not kidding when I say this, because you can copy and paste mine.                                                                                            |
| 22:51      | Basically, I'm going to tell you what it does.                                                                                                                   |
| 22:55      | So my shortcut offers me the list of different possible trips that I'm working on.                                                                               |
| 23:03      | And then it adds, we're packing this to the end and it passes this over to Scriptable.                                                                           |
| 23:07      | And Scriptable simply goes, hey, [[Apple Reminders\|Reminders]], have you got a reminders list with this name?                                                                        |
| 23:11      | Yeah?                                                                                                                                                            |
| 23:12      | Great.                                                                                                                                                           |
| 23:13      | All good.                                                                                                                                                        |
| 23:14      | Hey, no?                                                                                                                                                         |
| 23:15      | Okay.                                                                                                                                                            |
| 23:16      | I want more of those done.                                                                                                                                       |
| 23:17      | And then it tells, and then it knows it's finished and it comes back.                                                                                            |
| 23:20      | Which means that if that list already exists, I don't end up with duplicates running around.                                                                     |
| 23:26      | But I will always get that.                                                                                                                                      |
| 23:28      | It hadn't even occurred to me to do that through Scriptable.                                                                                                     |
| 23:32      | Thanks.                                                                                                                                                          |
| 23:33      | Yeah.                                                                                                                                                            |
| 23:34      | And Scriptable has a great shortcut support.                                                                                                                     |
| 23:37      | They've added the ability to run shortcuts with parameters.                                                                                                      |
| 23:40      | And then there's a arguments parameter called shortcut parameter, arguments property, sorry.                                                                     |
| 23:47      | And so you can just literally give it the name and it just goes, which is brilliant.                                                                             |
| 23:53      | And so it does that.                                                                                                                                             |
| 23:54      | And then it offers me the list of different things.                                                                                                              |
| 23:56      | The sample that I'm sharing has closed toiletries technology and podcasting equipment.                                                                           |
| 24:02      | And then it works the same way as yours does.                                                                                                                    |
| 24:05      | It just adds each of those array items to the reminders for me.                                                                                                  |
| 24:11      | Though mine does not open the packing list afterwards, which is probably an enhancement                                                                          |
| 24:16      | that I really ought to add, but Scriptable saved my bacon there.                                                                                                 |
| 24:22      | Yeah.                                                                                                                                                            |
| 24:23      | That's just a simple one step command open this list in [[Apple Reminders\|Reminders]].                                                                                               |
| 24:27      | But I figure once you run the script, you're going to want to take a look at it.                                                                                 |
| 24:31      | Probably.                                                                                                                                                        |
| 24:32      | I mean, it depends on what you're doing because I have a follow up script to this one, which                                                                     |
| 24:38      | is called packing list extras.                                                                                                                                   |
| 24:41      | And it asks me what else I need to pack.                                                                                                                         |
| 24:44      | And then it asks me which trip it's for.                                                                                                                         |
| 24:45      | And then it adds all of those to [[Apple Reminders\|Reminders]] as well to that [[Apple Reminders\|Reminders]] list because explain                                                                       |
| 24:51      | that to me.                                                                                                                                                      |
| 24:52      | So it's a, it's a shortcut.                                                                                                                                      |
| 24:54      | Yeah.                                                                                                                                                            |
| 24:55      | It's also a shortcut.                                                                                                                                            |
| 24:56      | And it's just asking for user input.                                                                                                                             |
| 24:58      | Yeah.                                                                                                                                                            |
| 24:59      | That's the very first thing it does because whenever it's something occurs, the first                                                                            |
| 25:02      | thing you need to do is write it down and then figure out where it's going to go.                                                                                |
| 25:06      | And so it asked me what I need, what I want to do.                                                                                                               |
| 25:09      | And because it's, it's the standard us for input books, I can do a return and I can add                                                                          |
| 25:13      | several items at the same time if I want to.                                                                                                                     |
| 25:16      | Then it asked me which trip it's for.                                                                                                                            |
| 25:18      | It runs that Scriptable script again.                                                                                                                            |
| 25:21      | And then it splits my original input by new lines and adds each one to my packing list.                                                                          |
| 25:26      | Okay.                                                                                                                                                            |
| 25:27      | That makes sense.                                                                                                                                                |
| 25:28      | Because sometimes there are just things like, for example, when, when I go visit my parents                                                                      |
| 25:32      | next, I'll be taking them a souvenir from my last holiday.                                                                                                       |
| 25:35      | That's not something I'm really going to add to a template list souvenir from previous                                                                           |
| 25:42      | holiday.                                                                                                                                                         |
| 25:43      | It starts putting a lot of pressure on you to buy everybody's souvenirs, which you don't                                                                         |
| 25:48      | necessarily want or need to do.                                                                                                                                  |
| 25:49      | And most people don't necessarily even want this stuff in their house.                                                                                           |
| 25:53      | So I have the ability to add extras.                                                                                                                             |
| 25:56      | And I usually run that afterwards as well because there's always something special that                                                                          |
| 26:00      | you need to take on a trip, whether it's the Clipper card for San Francisco or something                                                                         |
| 26:05      | else.                                                                                                                                                            |
| 26:06      | And for me, that's the purpose of opening the list after you create it.                                                                                          |
| 26:10      | Yeah.                                                                                                                                                            |
| 26:11      | If I make those changes, then I don't need to run a shortcut for that.                                                                                           |
| 26:14      | But yeah, it makes sense.                                                                                                                                        |
| 26:16      | I do like this Scriptable move because, you know, you can't create a shortcut.                                                                                   |
| 26:20      | I mean, you can't create a [[Apple Reminders\|Reminders]] list, but you certainly can script that.                                                                                    |
| 26:23      | Yes.                                                                                                                                                             |
| 26:24      | And I'm sure it's possible.                                                                                                                                      |
| 26:25      | And I'm pretty sure it's on the, the shortcuts team radar that they want, they want to integrate                                                                 |
| 26:29      | this.                                                                                                                                                            |
| 26:30      | But they've, they've been getting a lot of things done since [[WWDC]].                                                                                               |
| 26:33      | I've, I've had a lot of feedback on my feedback.                                                                                                                 |
| 26:36      | So I know that they're working hard.                                                                                                                             |
| 26:38      | Yeah.                                                                                                                                                            |
| 26:39      | I mean, it is, it's pretty remarkable how much they did when I was 13.                                                                                           |
| 26:44      | So I, like I said, I don't want to give them a hard time, but that's one that you can't,                                                                         |
| 26:49      | you can't script right now.                                                                                                                                      |
| 26:50      | And so this, this solves the problem.                                                                                                                            |
| 26:53      | And in some ways, this is a better solution than a shortcut, just create packing list                                                                            |
| 26:57      | item because that would not be able to check for conflict.                                                                                                       |
| 27:01      | It would just create the item.                                                                                                                                   |
| 27:03      | Yeah.                                                                                                                                                            |
| 27:04      | Yeah.                                                                                                                                                            |
| 27:05      | It's a built-in function in, in Scriptable.                                                                                                                      |
| 27:07      | I'm not going, Hey, calendar, do you have, because it technically reminders are a calendar                                                                       |
| 27:12      | with the type of reminder.                                                                                                                                       |
| 27:14      | It's a little bit weird unless you, you understand the history of how [[Apple Reminders\|Reminders]] came to be because                                                               |
| 27:19      | originally they were originally part of a calendar, but it just talks to the calendar                                                                            |
| 27:23      | and it's the, the action, the function is called find or create for [[Apple Reminders\|Reminders]].                                                                                   |
| 27:28      | Yeah.                                                                                                                                                            |
| 27:29      | So it's fairly clear what it does there.                                                                                                                         |
| 27:31      | And then just to speed up scripts, this was something that popped up in the forum recently.                                                                      |
| 27:36      | If you're running a script in scriptable and it's running slowly, or it seems to be                                                                              |
| 27:40      | running slowly, then that's probably because Scriptable is struggling to figure out whether                                                                      |
| 27:45      | or not the script is finished.                                                                                                                                   |
| 27:46      | And you can add a `script.complete` at the end and tell Scriptable that it's finished.                                                                             |
| 27:52      | And then it will magically work much faster.                                                                                                                     |
| 27:55      | And this works through Siri, widget and shortcuts.                                                                                                               |
| 27:59      | So.                                                                                                                                                              |
| 28:00      | Cool.                                                                                                                                                            |
| 28:01      | Well, I, I've been really happy with this new packing list mechanism.                                                                                            |
| 28:05      | So rather than, like I said, having to look through all the individual tasks, I'm just                                                                           |
| 28:09      | creating them in bulk.                                                                                                                                           |
| 28:11      | I haven't missed anything.                                                                                                                                       |
| 28:13      | You know, that, that's one question in my mind because before when you force yourself                                                                            |
| 28:16      | to read the entire list, you would never miss anything, but this is work just fine for                                                                           |
| 28:20      | me with Trips.                                                                                                                                                   |
| 28:21      | I, I do want to continue to play with it though.                                                                                                                 |
| 28:24      | Now, I have also been thinking about how do I make something like this work on the Mac?                                                                          |
| 28:32      | Right?                                                                                                                                                           |
| 28:33      | I mean, we built it on.                                                                                                                                          |
| 28:35      | IOS.                                                                                                                                                             |
| 28:36      | There's some people who listen to the show that don't really use iOS or shortcuts much.                                                                          |
| 28:40      | What if I want to do something like this in the Mac?                                                                                                             |
| 28:42      | And it seems to me there's really two ways to do it, at least in my kind of automation                                                                           |
| 28:47      | legal.                                                                                                                                                           |
| 28:48      | You could definitely do it with an [[AppleScript]], but I did not write an AppleScript for this.                                                                   |
| 28:52      | With the way, the two ways I did it was with two additional tools.                                                                                               |
| 28:56      | I did it both with [[Keyboard Maestro]] and I did it with TextExpander.                                                                                             |
| 29:01      | And it wasn't that difficult with either one.                                                                                                                    |
| 29:04      | I think I guess I would start with TextExpander is the easiest.                                                                                                 |
| 29:08      | And with TextExpander, you have the, what they call optional selection.                                                                                         |
| 29:14      | So with TextExpander, you could, you could create a text list.                                                                                                  |
| 29:19      | In fact, with the sample one and all, I guess I'll make this available for download too.                                                                         |
| 29:24      | Like the basics, like I said earlier, will just always be there, the toothbrush, the                                                                             |
| 29:27      | toothpaste, but then cold weather gear isn't necessarily going to be there.                                                                                      |
| 29:32      | But when you trigger the TextExpander snippet, it's going to have some optional selections                                                                      |
| 29:37      | and one of them would be cold weather gear.                                                                                                                      |
| 29:39      | And if you check the box for that, then it's going to add the, you know, the items contained                                                                     |
| 29:45      | within that optional selection to your text list.                                                                                                                |
| 29:49      | And then you could just go through and, you know, basically paste in or you trigger the                                                                          |
| 29:55      | snippet and whatever text editor of your choice, Apple notes to whatever.                                                                                        |
| 30:01      | And then I didn't think about trying to [[Apple Reminders\|Reminders]], but I don't think it would work.                                                                              |
| 30:06      | I'll test that out before we publish.                                                                                                                            |
| 30:08      | But the other way, so you would just trigger the TextExpander snippet.                                                                                          |
| 30:12      | Mine is just packing lists with no space.                                                                                                                        |
| 30:15      | And then it automatically types in the basics and then gives you optional selections.                                                                            |
| 30:19      | And I just did a couple of them.                                                                                                                                 |
| 30:20      | This is kind of a proof of concept.                                                                                                                              |
| 30:22      | I'm really going to be doing this through shortcuts for now on, but the, but then it                                                                             |
| 30:27      | just spits out the text for whichever selections you make.                                                                                                       |
| 30:31      | And that was super easy to build and works flawlessly.                                                                                                           |
| 30:37      | It's brilliant.                                                                                                                                                  |
| 30:38      | And, you know, easy to build works flawlessly.                                                                                                                   |
| 30:40      | That is ideal for anybody who's thinking, hmm, I don't know.                                                                                                     |
| 30:44      | I haven't given TextExpander a shot.                                                                                                                            |
| 30:46      | Maybe I should try it.                                                                                                                                           |
| 30:47      | You know, it, this is a great example.                                                                                                                           |
| 30:50      | And one of the way I set it up, it actually puts a empty space between each grouping.                                                                            |
| 30:56      | So the iPad stuff is together, the cold weather gear stuff is together.                                                                                          |
| 30:59      | I kind of like the way it does that.                                                                                                                             |
| 31:02      | So it's easy to kind of, you know, group it together in your head as you're packing up.                                                                          |
| 31:06      | Yeah.                                                                                                                                                            |
| 31:07      | I have a similar issue problem and that is, is solved in my next automation.                                                                                     |
| 31:13      | But before we get to that, do you want to talk about how you're using [[Keyboard Maestro]]                                                                           |
| 31:16      | to do a similar thing?                                                                                                                                           |
| 31:17      | Yeah.                                                                                                                                                            |
| 31:18      | Keyboard maestro is a little more complicated, but you know, it's also a little more fancy.                                                                      |
| 31:23      | You know, because [[Keyboard Maestro]] gives you a little more of a fancy option.                                                                                    |
| 31:27      | And the way I do that is, and I'll share this one as well, there's going to be a lot                                                                             |
| 31:32      | of downloadable content for this show.                                                                                                                           |
| 31:34      | The, it's a, it's a, it starts with a prompt for user input.                                                                                                     |
| 31:40      | And in [[Keyboard Maestro]], you can go ahead and do a lot of ways to do user input.                                                                                 |
| 31:49      | But one of the best ways is multiple user inputs on one text dialogue entry.                                                                                     |
| 31:55      | I explained all this in the [[Keyboard Maestro]] field guide.                                                                                                        |
| 31:57      | If this is foreign to you, you may want to check that out, but, but I'm going to do it                                                                           |
| 32:00      | in the one you can download too, so you can look at it.                                                                                                          |
| 32:02      | And one of the interesting things you can do, because it's basically a question for a variable.                                                                  |
| 32:07      | So you put like, you know, name, favourite colour, and then you would type in green or                                                                             |
| 32:12      | red or whatever, and it would save that as a variable.                                                                                                           |
| 32:15      | But in [[Keyboard Maestro]], if you put a zero, then a pipe, and then a one, and the pipe                                                                            |
| 32:21      | is the, the, the shift forward slash, you know, the thing on your keyboard above the                                                                             |
| 32:27      | forward slash is like a big pipe, it goes up and down.                                                                                                           |
| 32:29      | But if you go zero pipe one, then it's a checkbox, you know, on the Mac, you've seen checkboxes                                                                  |
| 32:35      | before in dialogue boxes.                                                                                                                                        |
| 32:38      | So what I do is, is I just re-list out all of those items I have in the shortcuts matrix                                                                         |
| 32:46      | of the dictionary item for shortcuts.                                                                                                                            |
| 32:49      | And you just have a list of all those.                                                                                                                           |
| 32:50      | And the one I'm going to make available for downloads only going to have two, because                                                                            |
| 32:54      | I'm not going to recreate the whole thing.                                                                                                                       |
| 32:56      | You're on your own if you want to create yourself, but the, but I did two just to explain how                                                                    |
| 33:01      | it works.                                                                                                                                                        |
| 33:02      | And so you put the, the item names like basic and cold weather gear.                                                                                             |
| 33:07      | And then rather than a variable call, you put the zero pipe one, so it's a checkbox.                                                                             |
| 33:12      | And then when you run the script, it says, you know, what's on your list and you can                                                                             |
| 33:17      | check off basic kit, cold weather gear, camera gear, whatever else is next on your list.                                                                         |
| 33:22      | And then, so then the computer has collected and listed the things you checked off.                                                                              |
| 33:28      | All right.                                                                                                                                                       |
| 33:29      | With me so far.                                                                                                                                                  |
| 33:30      | Yeah.                                                                                                                                                            |
| 33:31      | Yeah.                                                                                                                                                            |
| 33:32      | This is pretty, this is pretty kind of programming stuff, but yours is worse.                                                                                    |
| 33:36      | The next one you're doing is worse.                                                                                                                              |
| 33:37      | So I feel it's worse, but also you have, you don't need to understand any of it to, to                                                                           |
| 33:41      | know how it works.                                                                                                                                               |
| 33:42      | So.                                                                                                                                                              |
| 33:43      | Yeah, exactly.                                                                                                                                                   |
| 33:44      | Um, so then what I do is I use an if call and if the, and basically the computer reports                                                                         |
| 33:53      | a one, if you checked it off or zero, if you didn't.                                                                                                             |
| 33:57      | So if it says there's a one, if the variable basic kit equals one, which means the user                                                                          |
| 34:03      | checked it off, then we're going to set a variable called basic kit list.                                                                                        |
| 34:08      | So the actual list of items.                                                                                                                                     |
| 34:10      | And then you just type in all the things that are on that list and else.                                                                                         |
| 34:15      | So if the user doesn't check off the box for a basic kit, then the basic kit list is empty.                                                                      |
| 34:23      | So there's nothing to it.                                                                                                                                        |
| 34:24      | So, so the, so the variable gets declared twice in this logic.                                                                                                   |
| 34:29      | One time you fill it up with items and one time you put up with no items.                                                                                        |
| 34:33      | So if you check it off, the variable has a bunch of items in it.                                                                                                 |
| 34:36      | If you don't check it off, it has none in it.                                                                                                                    |
| 34:39      | And then you repeat that for each item on the list.                                                                                                              |
| 34:42      | And then at the end, uh, the way I did it with this script is I just dumped all of those                                                                         |
| 34:48      | variables at the end into the clipboard because I didn't know where you want to put it.                                                                          |
| 34:53      | Maybe you want to put it in [[Apple Notes]] or [[Drafts]] or wherever you want to put it.                                                                                |
| 34:56      | You can just then paste your, your packing list in.                                                                                                              |
| 35:00      | If you want to take this and run with it and do more with it, you can.                                                                                           |
| 35:03      | Like I said, this was kind of a, a proof of concept thing cause I'm, I'm not going to                                                                            |
| 35:06      | use this automation.                                                                                                                                             |
| 35:08      | I like the shortcuts version better.                                                                                                                             |
| 35:11      | And I'm always doing this stuff on my phone when it comes to like packing list, but the,                                                                         |
| 35:16      | but it's here.                                                                                                                                                   |
| 35:17      | So if you're, if you're not into doing this stuff on your phone, your iPad came up with                                                                          |
| 35:21      | a solution that'll work on the Mac.                                                                                                                              |
| 35:24      | So long as you have keyboard, my show or a techs expander, I guess if, if not, then you                                                                          |
| 35:29      | can just do what I did originally and just make your master lists and reminders on the                                                                           |
| 35:34      | Mac and just check and then check it, you know, go back to the, the old school.                                                                                  |
| 35:38      | Yeah.                                                                                                                                                            |
| 35:39      | Which works.                                                                                                                                                     |
| 35:40      | Definitely works.                                                                                                                                                |
| 35:41      | Yeah.                                                                                                                                                            |
| 35:42      | All right.                                                                                                                                                       |
| 35:43      | That was a lot.                                                                                                                                                  |
| 35:44      | Yes.                                                                                                                                                             |
| 35:45      | All right.                                                                                                                                                       |
| 35:46      | So, so I'm going to share these.                                                                                                                                 |
| 35:47      | You can download them and play with them, then go back and listen to those segments.                                                                             |
| 35:51      | If it doesn't make sense to you once you're looking at it, that will probably help out.                                                                          |
| 35:55      | So before we get to, to my seriously, crazy one, uh, we have a one last one.                                                                                  |
| 36:00      | So for this episode.                                                                                                                                             |
| 36:03      | This episode of the automators is brought to you by express VPN, high speed, secure and                                                                          |
| 36:09      | anonymous VPN services, get three months free with a one year package.                                                                                           |
| 36:15      | So you might, I think that nobody wants your online data or to snoop on you, but if you                                                                          |
| 36:20      | get your packing list, it means you're going on your trip and you're going to be using                                                                           |
| 36:23      | strange wifi.                                                                                                                                                    |
| 36:25      | And when you browse the web without anything to protect your privacy, you risk hackers,                                                                          |
| 36:30      | ad companies and more collecting your data.                                                                                                                      |
| 36:32      | And it does happen to people like us, which is why I recommend express VPN.                                                                                      |
| 36:36      | In fact, on all these trips, Rose and I have been talking about, I've been using the heck                                                                        |
| 36:40      | out of my express VPN account.                                                                                                                                   |
| 36:43      | Express VPN runs in the background of your computer or your phone.                                                                                               |
| 36:47      | You just open the app and you tap one button and it turns green, which means you are protected.                                                                  |
| 36:53      | It encrypts your data and hides your public IP address.                                                                                                          |
| 36:56      | You just download the app, click to connect and you're protected.                                                                                                |
| 37:00      | Express VPN is rated number one service by tech radar.                                                                                                           |
| 37:04      | It uses the new cutting edge technology called trusted server to make sure there's no logs                                                                       |
| 37:09      | of what you do online and it costs less than $7 a month and comes with a 30 day money back                                                                       |
| 37:14      | guarantee.                                                                                                                                                       |
| 37:15      | I really like express VPN when I'm on the road.                                                                                                                  |
| 37:19      | I do have to use Wi-Fi at those times and quite often I'm dealing with the day job and                                                                           |
| 37:24      | I've got to deal with client stuff and I don't want people snooping my Wi-Fi.                                                                                    |
| 37:28      | So with express VPN, it's not a problem on the iPad, the phone and even the Mac.                                                                                 |
| 37:34      | All you have to do is open the express VPN and just press that button.                                                                                           |
| 37:37      | You know, you're safe.                                                                                                                                           |
| 37:38      | You're good to go.                                                                                                                                               |
| 37:39      | And all those hackers, those guys in the back of the room sniffing the Wi-Fi, they don't                                                                         |
| 37:44      | get anything out of you.                                                                                                                                         |
| 37:45      | They got to go find it from somebody else and that's exactly what you want.                                                                                      |
| 37:49      | So use express VPN and I'll give you a piece of mine when you're traveling, when you're                                                                          |
| 37:53      | on the road, even when you just go down the street to Starbucks.                                                                                                 |
| 37:56      | You can protect your online activity today and find out how to get three months free                                                                             |
| 38:01      | at expressvpn.com/automators, a-u-t-o-m-a-t-o-r-s, that's expressvpn-e-x-p-r-e-s-s-vpn.com/automators for three months free with a one-year package. |
| 38:18      | Take back your online privacy, expressvpn.com/automators.                                                                                                  |
| 38:23      | Our thanks to ExpressVPN for their support of automators and all of relay FM.                                                                                    |
| 38:28      | Rose, all right, before we started recording today, [[Packing List\|you sent me a Drafts Action Group]].                                                         |                                                                                                                                                 |
| 38:36      | Action group, a [[Drafts]] program.                                                                                                                                  |
| 38:39      | I'm looking at my [[Drafts]] installation here.                                                                                                                      |
| 38:43      | You're going to share this with the world, right?                                                                                                                |
| 38:45      | Yep, yeah, I am.                                                                                                                                                 |
| 38:46      | I'm going to share it with the world.                                                                                                                            |
| 38:47      | I'll be in the [[Drafts]] section directory and in the show notes, there's a little bit of                                                                           |
| 38:51      | tweaking that still needs to be done.                                                                                                                            |
| 38:52      | I realised earlier I made a mistake saving some files locally instead of into iCloud,                                                                            |
| 38:58      | but it will be done by Friday when this show releases.                                                                                                           |
| 39:02      | So that explains why all my lists are empty.                                                                                                                     |
| 39:06      | Yeah, let's pretend that that's the case.                                                                                                                        |
| 39:12      | So what I realised is that I don't necessarily need things in [[Apple Reminders\|Reminders]].                                                                                         |
| 39:19      | I'm not really a huge fan of [[Apple Reminders\|Reminders]].                                                                                                                          |
| 39:22      | Even with the great upgrades it's got with iOS 13, anybody on the [[Apple Reminders\|Reminders]] team who's                                                                           |
| 39:26      | listening should not feel insulted by this, I'm just very, very persnickety about my                                                                             |
| 39:30      | workflows.                                                                                                                                                       |
| 39:31      | But I really love [[Drafts]].                                                                                                                                        |
| 39:34      | [[Drafts]] is a great application and I do an awful lot of things in it.                                                                                             |
| 39:37      | And thanks to the workspaces feature, it's like you can have multiple programs in one                                                                            |
| 39:43      | program.                                                                                                                                                         |
| 39:44      | And if you want to hear more about [[Drafts]], we did an episode with [[Tim Nahumck]].                                                                                   |
| 39:49      | I've pronounced his surname incorrectly, sorry, Tim, a while ago, which I'll link to                                                                             |
| 39:53      | in the show notes.                                                                                                                                               |
| 39:55      | But essentially what I've done here is I have, as of this moment in time, six actions.                                                                           |
| 40:04      | And the first one which you need is the managed template list, which allows you to create                                                                        |
| 40:10      | your template list.                                                                                                                                              |
| 40:12      | And just like we spoke about earlier, this builds a dictionary.                                                                                                  |
| 40:16      | Now it builds a slightly more complex dictionary because I use emojis to group my actions,                                                                       |
| 40:22      | to group my actual items to pack.                                                                                                                                |
| 40:24      | So for example, tech things, I've got a laptop icon, toiletry things, I've got a little person                                                                   |
| 40:30      | in the bath with the showerhead coming down on them, and things like that.                                                                                       |
| 40:37      | And so I store all of that.                                                                                                                                      |
| 40:39      | And the managed template list allows you to manage your templates.                                                                                               |
| 40:46      | And so then you can save all of those.                                                                                                                           |
| 40:48      | And those just get saved into iCloud so that you can use them again and again and again.                                                                         |
| 40:53      | You don't need to recreate this every time.                                                                                                                      |
| 40:56      | And once you've saved it, then you can add categories, you can delete categories, you                                                                            |
| 40:59      | can modify categories, you can change your emojis, all of that.                                                                                                  |
| 41:03      | And then there's your add packing items to your list so that you can actually add these                                                                          |
| 41:10      | things to your list because there's not a lot of point in just having a template.                                                                                |
| 41:14      | And what this does is it pulls up the file and it offers you the different categories                                                                            |
| 41:20      | you've got, so clothing, toiletries, tech, miscellaneous, documentation, etc.                                                                                    |
| 41:27      | And as I mentioned, I like emojis.                                                                                                                               |
| 41:30      | So what I also do is anything that needs charging before my trip gets a battery icon                                                                             |
| 41:36      | at the end of it, which leads me to my next action, which is what should I charge?                                                                               |
| 41:42      | And what should I charge?                                                                                                                                        |
| 41:43      | Look for everything with a battery icon, and it presents it to you at a list.                                                                                    |
| 41:47      | And if you tap on one, then it changes the battery icon to a plug icon to indicate that                                                                          |
| 41:51      | it's been charged.                                                                                                                                               |
| 41:53      | Very simple, works really well.                                                                                                                                  |
| 41:55      | And then there's a charge action as well.                                                                                                                        |
| 41:57      | So if you're adding items later, then you can easily add the battery icon instead of                                                                             |
| 42:00      | trying to hunt for it on the emoji keyboard because I can never find it when I need it.                                                                          |
| 42:06      | I like that you did that, but I'm not sure that's a problem I've ever had.                                                                                       |
| 42:10      | I mean, I always know what I need to charge before I leave.                                                                                                      |
| 42:13      | My problem is I've occasionally got onto long haul flights with my noise cancelling                                                                              |
| 42:16      | headphones at 10%.                                                                                                                                               |
| 42:18      | Yeah, so while theoretically I know what to charge, especially when I've been doing                                                                              |
| 42:24      | back to back trips, it's easy to think, yeah, yeah, I've charged my headphones, only to                                                                          |
| 42:29      | find out the worst possible moment in time when there's a screaming baby right behind                                                                            |
| 42:33      | you that, no, you didn't charge your headphones.                                                                                                                 |
| 42:36      | Yeah, that's something you really want on a long flight.                                                                                                         |
| 42:40      | Yeah, exactly.                                                                                                                                                   |
| 42:42      | And you know, especially if you've got somebody who's teething or is just not very happy for                                                                     |
| 42:46      | some reason, you know, it's nice to not have to worry about it because that makes everything                                                                     |
| 42:51      | more stressful.                                                                                                                                                  |
| 42:53      | So I mark the items that I need to charge and then I mark when they've been charged.                                                                             |
| 42:59      | And this is using the task format in [[Drafts]].                                                                                                                     |
| 43:02      | Now the task format in [[Drafts]] is based on the breakdown list format, which begins everything                                                                     |
| 43:06      | with a dash.                                                                                                                                                     |
| 43:08      | And then what it does is it does an open square bracket space, close square bracket, but [[Drafts]]                                                                 |
| 43:13      | is really smart and it recognises that this is a task.                                                                                                           |
| 43:16      | And so you could just tap on these square brackets and it checks them off for you, which                                                                         |
| 43:20      | is really, really nice.                                                                                                                                          |
| 43:22      | So my final action is, penultimate action, sorry, is a sort packing items.                                                                                       |
| 43:29      | And what this does is because a checked action has an open square bracket, an X and a close                                                                      |
| 43:36      | square bracket, it will be moved to the bottom because a space is sorted higher than an X.                                                                       |
| 43:45      | And then it will sort by the emoji, which means that you've got automatic grouping and                                                                           |
| 43:48      | then inside of that it's alphabetical order, which is really, really nice because then                                                                           |
| 43:53      | you know, you can see all of your clothing at the same time.                                                                                                     |
| 43:55      | You can see all of your swimwear at the same time, all of your toiletries, because us humans                                                                     |
| 43:59      | try and be logical and group things together and it's helpful to be supported with that.                                                                         |
| 44:06      | And then I have a final action, which is uncheck and resort, which unchecks everything, changes                                                                  |
| 44:10      | all the plugs back to batteries and it resorts everything.                                                                                                       |
| 44:13      | So if you want to reuse the packing list, you can reuse the packing list, then you can                                                                           |
| 44:17      | recharge things because what I frequently do is I reuse the same packing list on the way                                                                         |
| 44:21      | home as I used on the way out to make sure I don't leave something in my hotel room.                                                                             |
| 44:24      | Oh, really?                                                                                                                                                      |
| 44:25      | That's interesting.                                                                                                                                              |
| 44:26      | I never thought of that.                                                                                                                                         |
| 44:27      | Yeah.                                                                                                                                                            |
| 44:28      | And you could do this with your shortcuts as well because what you could do is have a                                                                            |
| 44:33      | simple shortcut which gets everything on a list that's checked off, deletes them and                                                                             |
| 44:39      | then adds them again.                                                                                                                                            |
| 44:40      | Yeah.                                                                                                                                                            |
| 44:41      | Or yeah, you could do that.                                                                                                                                      |
| 44:44      | I'm going to update my shortcut to run that Scriptable script and then you could just                                                                            |
| 44:48      | literally look at the checked off items too.                                                                                                                     |
| 44:51      | There's a couple of ways to do that.                                                                                                                             |
| 44:54      | Yeah.                                                                                                                                                            |
| 44:55      | Interesting.                                                                                                                                                     |
| 44:56      | But I decided that, you know, adding the uncheck and resort action was, that was actually                                                                        |
| 45:01      | the fastest action to create.                                                                                                                                    |
| 45:03      | The managed templates action has been complicated because if you update the emoji, then I need                                                                   |
| 45:10      | to update all of your packing lists to reflect that new emoji and things like that, which                                                                        |
| 45:15      | is still something I'm working on, it's tricky, but hopefully I'll get there and I'll have                                                                       |
| 45:22      | a blog post about all of this because it sounds very complicated.                                                                                                |
| 45:27      | But the reality of it is, while all of these are scripts and they're using anonymous functions                                                                   |
| 45:32      | and all of these crazy, e-programmary keywords, you actually don't need to understand how                                                                        |
| 45:38      | any of it works to pick it up and use it.                                                                                                                        |
| 45:41      | Yeah.                                                                                                                                                            |
| 45:42      | I use a different kind of automation really to make sure I don't forget anything when                                                                            |
| 45:45      | I get to a hotel room.                                                                                                                                           |
| 45:46      | I sweep everything off every flat surface.                                                                                                                       |
| 45:49      | You know how you get hotels when you've got like local restaurants and penciled on paper                                                                         |
| 45:54      | and they've got all this stuff and I throw it all in a drawer and then I pick like one                                                                           |
| 45:58      | or two drawers that will be the only drawers I use for the whole trip, especially if I'm                                                                         |
| 46:03      | alone, I don't need that much, right?                                                                                                                            |
| 46:05      | And then just make sure those drawers aren't due when you leave and usually they're pretty                                                                       |
| 46:08      | good.                                                                                                                                                            |
| 46:09      | Yes.                                                                                                                                                             |
| 46:10      | I usually do that, but when I broke my ankle, I had to go on a trip and I ended up staying                                                                       |
| 46:16      | in a hotel and my keys are in key smart pros, which are great because they've got tile integration                                                               |
| 46:23      | so you can make them ring.                                                                                                                                       |
| 46:24      | However, they're also white because when I bought it, there were only white ones and                                                                             |
| 46:28      | everything in my hotel room was white.                                                                                                                           |
| 46:30      | Oh boy.                                                                                                                                                          |
| 46:31      | And I managed to leave my keys in Amsterdam, two sets of house keys.                                                                                             |
| 46:36      | Great.                                                                                                                                                           |
| 46:37      | Yeah.                                                                                                                                                            |
| 46:38      | Thankfully, the hotel found them.                                                                                                                                |
| 46:39      | Mysteriously, after I told them that it was a Bluetooth tracker on the keys and that they                                                                        |
| 46:43      | have been seen within the vicinity of the hotel reception two hours before, at which                                                                             |
| 46:50      | point they miraculously found my keys and lost them found.                                                                                                       |
| 46:52      | Right.                                                                                                                                                           |
| 46:53      | So as a tip, having a tracker on your device and being able to tell a hotel that you have                                                                        |
| 46:58      | a tracker on your device may encourage them to find things faster, but because I had the                                                                         |
| 47:05      | broken ankle, I was of course less mobile and I think I just missed them somehow or                                                                              |
| 47:09      | maybe they got picked up by the cleaners at some other point and moved and then they weren't                                                                     |
| 47:14      | where I was expecting them.                                                                                                                                      |
| 47:15      | But I actually usually use the Tom Bihn travel traits for stuff like that.                                                                                         |
| 47:20      | So I tend not to lose things.                                                                                                                                    |
| 47:24      | So I like the idea of using emoji as a basis of your packing list.                                                                                               |
| 47:29      | Yeah.                                                                                                                                                            |
| 47:30      | Well, I find it's really useful for the categorising things as well because you can sort it and                                                                  |
| 47:34      | the emoji of course, you know, has its basis in Unicode, which means that it gets sorted                                                                         |
| 47:39      | alphabetically.                                                                                                                                                  |
| 47:40      | Yeah.                                                                                                                                                            |
| 47:41      | And so everything gets grouped by a category.                                                                                                                    |
| 47:43      | Yeah.                                                                                                                                                            |
| 47:44      | With mine, the way that works because it adds them to the list together as a dictionary                                                                          |
| 47:49      | array.                                                                                                                                                           |
| 47:50      | And they're grouped by category anyway.                                                                                                                          |
| 47:53      | But emoji, that's cool, like you could, but you could also with any one of these systems,                                                                        |
| 47:59      | you could insert emoji as the first character.                                                                                                                   |
| 48:01      | Oh yeah.                                                                                                                                                         |
| 48:02      | Absolutely.                                                                                                                                                      |
| 48:03      | Yeah.                                                                                                                                                            |
| 48:04      | But that's cool.                                                                                                                                                 |
| 48:05      | I like the way you did it.                                                                                                                                       |
| 48:06      | So it's [[Drafts]] your solution now for your packing list.                                                                                                          |
| 48:07      | It is my solution.                                                                                                                                               |
| 48:09      | And I should have mentioned, I kicked the whole thing off with shortcuts.                                                                                        |
| 48:12      | There is a slight bug at the moment which Agile Tortoise is working on, which unfortunately                                                                      |
| 48:16      | prevents this from working, where what I do is I pick the trip and then I create the draft                                                                       |
| 48:21      | and then I add a single task to OmniFocus to pack for the trip to the right project.                                                                             |
| 48:28      | And then in the notes of the task, there's just a link back to that [[Drafts]] draft.                                                                                |
| 48:34      | So because then on the day that I'm leaving for the trip, I can see, well, I still need                                                                          |
| 48:38      | to pack because I haven't checked off packing.                                                                                                                   |
| 48:41      | But inside of packing, I can see actually everything is charged.                                                                                                 |
| 48:44      | Most things are packed.                                                                                                                                          |
| 48:45      | There's just passport sunglasses and phone that I need to grab and go.                                                                                           |
| 48:51      | Yeah.                                                                                                                                                            |
| 48:52      | I did a video in the shortcuts field guide on [[Drafts]] and one of the things I really                                                                              |
| 48:55      | like about it is that it gives a unique identifier to each draft's note, which it makes accessing                                                                |
| 49:01      | it from outside like from OmniFocus really easy, whereas Apple Notes doesn't give you                                                                            |
| 49:06      | that unique identifier.                                                                                                                                          |
| 49:08      | The only way I came up with to really reliably get to a specific Apple Note is to insert some                                                                    |
| 49:15      | unique string into it, like a password almost, like some just unique group of letters and                                                                        |
| 49:21      | numbers.                                                                                                                                                         |
| 49:22      | And then you search for that group that's only found in one note and then you can open                                                                           |
| 49:27      | it.                                                                                                                                                              |
| 49:28      | It's very hacky.                                                                                                                                                 |
| 49:29      | Yeah.                                                                                                                                                            |
| 49:30      | I know some people I've seen have been talking about, if you share a note or a notes folder,                                                                     |
| 49:36      | which is possible now when I was 13, then you get a link to it.                                                                                                  |
| 49:40      | And of course, you could iMessage this to yourself so you're not really sharing it with                                                                          |
| 49:43      | anybody else, and then you have the link, which you can then copy and paste.                                                                                     |
| 49:49      | But I don't know how reliable that is if iCloud realises that nobody else is actually accessing                                                                  |
| 49:55      | the link.                                                                                                                                                        |
| 49:56      | Do they kill it at some point?                                                                                                                                   |
| 49:59      | I don't know, but it just makes me crazy that they've got a mechanism to create a unique                                                                         |
| 50:03      | identifier that they use when you share it, but they don't make it available to you for                                                                          |
| 50:08      | automation.                                                                                                                                                      |
| 50:09      | I mean, come on, guys.                                                                                                                                           |
| 50:10      | It would be really nice.                                                                                                                                         |
| 50:11      | And I really like having deep links as well, because things like [[DEVONthink]] have got                                                                          |
| 50:17      | unique links to all of the documents and groups and databases, which are perfect for adding                                                                      |
| 50:22      | to say a note, an OmniFocus, or a link to something.                                                                                                             |
| 50:27      | Unique links out of OmniFocus, [[Drafts]], Ulysses, [[DEVONthink]].                                                                                                   |
| 50:31      | All these apps make them, right?                                                                                                                                 |
| 50:34      | Except the Apple native app.                                                                                                                                     |
| 50:35      | In that case, you've got to come up with some goofy search term and that anyway.                                                                                 |
| 50:41      | Whatever.                                                                                                                                                        |
| 50:42      | Well, you can use, don't forget, 1Password has a feature where you can generate a password                                                                     |
| 50:45      | made of different words.                                                                                                                                         |
| 50:48      | So like correct horse battery staple is the standard XKCD example for a Word password,                                                                           |
| 50:54      | but 1Password has this feature, so you could theoretically use that and copy it.                                                                               |
| 50:59      | Usually what I just do is I put the name at the bottom of the note with the letter X in                                                                          |
| 51:04      | front of it, and that's enough.                                                                                                                                  |
| 51:05      | I don't need to go that far, but it's just, why should I have to do that?                                                                                        |
| 51:10      | Yeah.                                                                                                                                                            |
| 51:11      | It's a little frustrating.                                                                                                                                       |
| 51:12      | Yes.                                                                                                                                                             |
| 51:13      | So I'm using [[Drafts]] now, which is possibly one of the most automatable tools ever to                                                                             |
| 51:19      | exist, at least as far as text editors go, because all of the things that you can do                                                                             |
| 51:23      | here are pretty crazy.                                                                                                                                           |
| 51:26      | Well, I'm going to do it.                                                                                                                                        |
| 51:27      | So what I was doing, because before I had been tipped off to the Scriptable trick from                                                                           |
| 51:33      | Rosemary, I would adjust the script to different trips, the name, and then so I would have                                                                       |
| 51:39      | some that would get, like if it's a trip that I'm taking with my wife, I'd share it with                                                                         |
| 51:42      | her, and if it was a trip I was taking her business, I wouldn't.                                                                                                 |
| 51:46      | So I had a little bit of a manual process involved with that.                                                                                                    |
| 51:50      | Now I don't have to do that anymore, so I can have the script auto generate the name.                                                                            |
| 51:54      | I still would have to go manually share it, but I like doing it in [[Apple Reminders\|Reminders]] just because                                                                        |
| 51:59      | that sharing function when I need it is great, and even when I don't need to share it, it                                                                        |
| 52:03      | is a simple list that you check off, and [[Apple Reminders\|Reminders]] is a lot better than it used to be.                                                                           |
| 52:08      | For people who are not looking for super power in their task list, they just need basic functionality.                                                           |
| 52:14      | I think [[Apple Reminders\|Reminders]] is going to be a good solution going forward.                                                                                                  |
| 52:18      | I believe it is, especially with those nested tasks, that's really good.                                                                                         |
| 52:22      | And hopefully shortcuts will get access to this sort of thing in the not too distant                                                                             |
| 52:26      | future.                                                                                                                                                          |
| 52:27      | Yeah, I tried it for like a couple of days, and I'm like, this is not going to work for                                                                          |
| 52:31      | me.                                                                                                                                                              |
| 52:32      | I need my OmniFocus templates, I need my reviews, I need all those bells and whistles, but not                                                                   |
| 52:36      | everybody does.                                                                                                                                                  |
| 52:37      | No.                                                                                                                                                              |
| 52:38      | Not everybody does.                                                                                                                                              |
| 52:39      | All right.                                                                                                                                                       |
| 52:40      | Well, that's us.                                                                                                                                                 |
| 52:41      | We're the Automators.                                                                                                                                            |
| 52:42      | Thank you to our sponsors, our friends over at Daylight and ExpressVPN.                                                                                          |
| 52:47      | There's going to be a lot of downloadable content for this one, so check it out.                                                                                 |
| 52:50      | Let us know if it inspires you to do something amazing with your automation of your packing                                                                      |
| 52:57      | list.                                                                                                                                                            |
| 52:58      | You can find us over at Automators.fm.                                                                                                                           |
| 53:00      | If you go to talk.automators.fm, you can get on the forums where there's a lot of smart                                                                          |
| 53:04      | people, lots of stuff going on in there.                                                                                                                         |
| 53:07      | Did I miss anything, Rose?                                                                                                                                       |
| 53:09      | You are over at MacSparky.com, I believe.                                                                                                                        |
| 53:12      | I am, and you are at rosemaryorchard.com.                                                                                                                         |
| 53:15      | Yes.                                                                                                                                                             |
| 53:16      | Yes, that's us.                                                                                                                                                  |
| 53:17      | We'll see you in two weeks.                                                                                                                                      |
| 53:19      | Bye, everybody.                                                                                                                                                  |
