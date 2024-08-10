---
status: "incomplete"
fc-date:
  year: 2023
  month: 01
  day: 27
fc-category: "podcast"
podcast: "Automators"
published: 2023-01-27
duration: 4947
formattedduration: "01:22:27"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/120"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators120.mp3"
episode: 120
title: "120: Looking at Launchers"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David spent some time looking at Raycast, the latest Mac launcher to arrive on the market, and compare it to their current favourite launcher, Alfred.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 120 Discussion](https://talk.automators.fm/t/120-looking-at-launchers/15171)

# Sponsors
- [[Issuu (Sponsor)|Issuu]] - Get started with Issue today.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.

# Show Notes
- [Search with Spotlight on Mac - Apple Support](https://support.apple.com/guide/mac-help/search-with-spotlight-mchlp1008/mac)
- [Raycast](https://www.raycast.com/)
- [How to use Raycast and how it compares to Spotlight and Alfred - The Verge](https://www.theverge.com/23170431/raycast-how-to-macos-search-extensions-alfred-spotlight)
- [Why I chose Raycast over Alfred. I am a long-time user of Alfred —… | by Safwan Samsudeen | Dec, 2022 | Medium](https://safwansamsudeen.medium.com/why-i-chose-raycast-over-alfred-e8c39493a139)
- [Raycast vs. Alfred or LaunchBar? - Software - MPU Talk](https://talk.macpowerusers.com/t/raycast-vs-alfred-or-launchbar/26985)
- [Alfred App](https://alfred.app/)
- [Alfred Gallery](https://alfred.app/)

# Transcription
  
| Time Index | Transcription                                                                                         |
| :--------- | :---------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to Automators, where we talk about how to automate your technology to do your                 |
| 00:05      | work for you.                                                                                         |
| 00:06      | I'm David Sparks and joined by my co-host, Rosemary Orchard.                                          |
| 00:10      | Hello, Rose.                                                                                          |
| 00:11      | Hey, David.                                                                                           |
| 00:12      | How are you doing?                                                                                    |
| 00:13      | Good.                                                                                                 |
| 00:14      | I am looking forward to today's show.                                                                 |
| 00:16      | We have been hearing lately a lot about [[Raycast]], a new upcoming keyboard launcher.                    |
| 00:23      | So you and I spent a month playing with it, and we're going to be talking about that                  |
| 00:27      | today.                                                                                                |
| 00:28      | But we're going to take a look at some of the other launchers, too, and what we're using              |
| 00:31      | under fire, and just a good opportunity to check in on keyboard launchers, which if you're            |
| 00:38      | an automator is something you should definitely be running.                                           |
| 00:41      | Launchers are really awesome.                                                                         |
| 00:44      | As we get through the show, you'll hear the way that you and I use them in multiple contexts.         |
| 00:49      | But I trigger my launcher at least, I don't know, 50 times a day.                                     |
| 00:54      | I mean, everything I do on my Mac starts in the launcher.                                             |
| 00:57      | So it is very commonly used.                                                                          |
| 01:00      | It's a great way to get things going on your computer without reaching for the mouse or               |
| 01:06      | doing some complicated interaction.                                                                   |
| 01:10      | They're just awesome.                                                                                 |
| 01:11      | And the other thing we're going to talk about today, of course, is the updates to [[Spotlight]],          |
| 01:15      | which is Apple's version of a launcher, and we've got a lot to cover today.                           |
| 01:18      | But before we get started on Automator's Macs today, which is the special edition of the              |
| 01:25      | show, which has extended content and no ads, which you can sign up for on the website at              |
| 01:30      | relay.fm/automators.                                                                            |
| 01:31      | But on Automator's Macs, I have been digging in on this home assistant that Rose told me              |
| 01:37      | to buy, and I am starting to get it, Rose, I'm starting to get it, but I'm also making                |
| 01:42      | mistakes.                                                                                             |
| 01:43      | Yeah.                                                                                                 |
| 01:44      | Well, we'll look at some of that.                                                                     |
| 01:45      | And we're going to do a full show on it at some point once I kind of get it dialed in.                |
| 01:49      | But on the Automator's Macs day, Rose and I are going to be checking in on how that's                 |
| 01:53      | going and early mistakes I'm making and how to fix them.                                              |
| 01:57      | Yes.                                                                                                  |
| 01:58      | Yeah.                                                                                                 |
| 01:59      | And I'm looking forward to that.                                                                      |
| 02:00      | It's going to be fun.                                                                                 |
| 02:01      | Yeah.                                                                                                 |
| 02:02      | So, David, should we start talking about launchers with [[Spotlight]], you know, the one that everybody's |
| 02:07      | got built into their Mac or iPad for free?                                                            |
| 02:11      | And I mean, how do you feel about it?                                                                 |
| 02:13      | Because I kind of feel like [[Spotlight|Spotlight's]] improving, but it's so far behind everybody else that         |
| 02:20      | it's kind of been lapped on the track multiple times, and, you know, it's getting better              |
| 02:24      | and the team working on [[Spotlight]], I'm sure, is working hard, but I'm feeling like I just,            |
| 02:29      | I couldn't use it as my daily launcher because it's missing a lot of features for me.                 |
| 02:33      | Yeah.                                                                                                 |
| 02:34      | In fact, I think before we even get into it, I just want to explain one thing, and that               |
| 02:37      | is none of these are exclusive, right?                                                                |
| 02:40      | Oh, yeah.                                                                                             |
| 02:41      | Historically, [[Spotlight]] was under the Command Space keyboard shortcut, and when you crack             |
| 02:46      | open a new Mac, that's the keyboard shortcut that hits [[Spotlight]], but you can go in the               |
| 02:51      | keyboard shortcuts settings and change that.                                                          |
| 02:55      | And I very early changed mine to Control Space for [[Spotlight]], and because there are a few             |
| 03:01      | things that I think [[Spotlight]] does well, and occasionally I need it.                                  |
| 03:04      | So it's over there hanging out under the Control key, so under the Control Space, I get [[Spotlight]]     |
| 03:08      | rolling.                                                                                              |
| 03:09      | And, but at the same time, I've been running [[Raycast]] under Option Space and [[Alfred]] under              |
| 03:15      | Command Space, and I don't foresee me changing that.                                                  |
| 03:19      | So none of these are exclusive, and [[Spotlight]] in particular, because you already have it              |
| 03:24      | on your Mac.                                                                                          |
| 03:25      | So I think you will want to map that now.                                                             |
| 03:27      | If you decide that you're just a [[Spotlight]] person, leave it under Command Space, but                  |
| 03:31      | if you decide to jump on board with [[Raycast]], or [[Alfred]], or Launch Bar, any of the other               |
| 03:35      | options, I would recommend remapping it to somewhere else and putting your primary launcher           |
| 03:41      | under that Command Space key, but this is not an exclusive thing.                                     |
| 03:46      | But getting back to [[Spotlight]] though, I remember was, I think it was Mac OS Tiger, where it           |
| 03:52      | first came out.                                                                                       |
| 03:53      | But when they first released it, there was indexing problems, and it was really slow.                 |
| 03:58      | So it's one of those things where the first impression was not particularly good.                     |
| 04:03      | But over the years, [[Spotlight]] has really evolved, and I feel like the last couple of years in         |
| 04:06      | particular, Apple has been putting some wood behind the arrow on [[Spotlight]].                           |
| 04:14      | Let's start with some of the positives.                                                               |
| 04:16      | If I do a search in [[Spotlight]] for Rosemary Orchard, the results now are really good.                  |
| 04:24      | Just putting your name in, it's going to get a bunch of mail and messages that references             |
| 04:32      | you events.                                                                                           |
| 04:33      | It tells me when your next birthday is.                                                               |
| 04:35      | All this stuff just up on the screen, I see photos of you from my various things.                     |
| 04:41      | The advantage of [[Spotlight]], of course, is it's so integrated to Mac OS, it gets access                |
| 04:45      | to files and data that the other ones don't get.                                                      |
| 04:49      | Then if I hit Return on Rosemary for the version of your contact card, it's even better.              |
| 04:55      | It's like I've got Apple Notes showing up that you're in reminders that we have together              |
| 05:02      | and mail messages.                                                                                    |
| 05:05      | Then at the top, they've got a button you can press to send a message, do a [[FaceTime]]                  |
| 05:08      | call, send an email.                                                                                  |
| 05:11      | I think they've done a really good job with things like that, of presenting data.                     |
| 05:17      | When you do searches, it also does a really good job.                                                 |
| 05:20      | I can see why a lot of people don't go beyond [[Spotlight]] because this is all they want.                |
| 05:27      | At the same time, the search results are slow and ponderous in my opinion.                            |
| 05:34      | I think it's one of those things.                                                                     |
| 05:35      | If you don't have a huge amount on your Mac, and basically all you want to do is just open            |
| 05:41      | applications.                                                                                         |
| 05:43      | I asked in the RelayFM [[Discord]] earlier before we recorded this episode, what people were              |
| 05:48      | using.                                                                                                |
| 05:49      | A couple of people, including Kathy Campbell, host of Conduit here on RelayFM, are perfectly          |
| 05:56      | happy with [[Spotlight]] because they press command space, they type a couple of letters.                 |
| 06:00      | The application that they use comes up and they enter and they're done.                               |
| 06:05      | I think it really depends on what [[Spotlight]] is indexing.                                              |
| 06:08      | I know in the past, I have had to exclude folders from [[Spotlight]] indexing because it                  |
| 06:13      | just ended up taking up a huge amount of processing power on my machines at various times.            |
| 06:18      | I downloaded a new [[Git]] repo, which would be a whole folder full of folders of code.                   |
| 06:27      | Those files are tiny.                                                                                 |
| 06:28      | I wouldn't take long to download, and then [[Spotlight]] is there going, yep, I'm going                   |
| 06:31      | to go and index all of this.                                                                          |
| 06:33      | It's like, okay, you're trying to index 20,000 files right now, and I really don't need               |
| 06:38      | you to be doing that.                                                                                 |
| 06:39      | I'd like to actually, I don't know, compile the code perhaps, and it's one of those things            |
| 06:46      | where you can end up perhaps having a slower experience with [[Spotlight]] because it's got               |
| 06:51      | so much of that stuff in there.                                                                       |
| 06:53      | You can actually, in system settings, you can exclude folders from [[Spotlight]].                         |
| 06:58      | Which is definitely something that's worth considering if you've never really tried this              |
| 07:03      | stuff out, and you want to give [[Spotlight]] a fair shake before you try anything else.                  |
| 07:08      | You can exclude things like events and reminders or fonts or music or movies from your search         |
| 07:13      | results, and then there's an option somewhere else as well for excluding particular folders           |
| 07:19      | from [[Spotlight]].                                                                                       |
| 07:21      | But it's one of those things where it does just feel really, especially if you're trying              |
| 07:25      | to search for a shortcut.                                                                             |
| 07:28      | I searched for a shortcut that I use all the time, which is apps missing data for iOS today.          |
| 07:35      | First of all, I get a [[Unix]] executable as the first result, David.                                     |
| 07:40      | I actually don't know what this file is, nor do I actually know how to find it in [[Spotlight]].          |
| 07:46      | If I hit return, I'm pretty certain it's going to execute it, so I don't actually want to             |
| 07:49      | do that.                                                                                              |
| 07:52      | I have to navigate down with the arrow keys.                                                          |
| 07:56      | There's three apparent missing files.                                                                 |
| 07:58      | They're actually called missing, but then the fourth result is fix apps missing data                  |
| 08:03      | for iOS today, which is the one I wanted, but I have to press the down key four times                 |
| 08:10      | to get to that when I've typed in missing, so the first one takes me to the first result              |
| 08:14      | and then down, and then I can hit return and it will run it, but that's it.                           |
| 08:22      | I searched for something earlier, it was a bookmark that I've got in [[Safari]], so I typed               |
| 08:26      | it in, and the first five results I could do not are search for this in Google, search                |
| 08:34      | for this with another word after it, search for this with another word after it, and then             |
| 08:39      | two more searches for this word plus other words.                                                     |
| 08:43      | Then finally, there's my bookmarks in history, which is obviously the one that I want, which          |
| 08:47      | will then give me the thing, and so I have to navigate down.                                          |
| 08:51      | I tried pressing the up arrow, that was a mistake.                                                    |
| 08:53      | The up arrow took me to the beginning of my query, so you can't navigate upwards from                 |
| 08:58      | the bottom, so that was kind of sad, so maybe it's a spotlight false if you're listening.             |
| 09:05      | Can you let me press the up arrow to go to the bottom of the results, please?                         |
| 09:08      | That'd be nice, but yeah, it's one of those things where I think if you just want to launch           |
| 09:13      | apps and stuff like that, it's great probably, but I find the second I want anything more             |
| 09:18      | than just that, I struggle.                                                                           |
| 09:20      | Well, I mean, if you've tasted the forbidden fruit of any of the other launchers we're                |
| 09:24      | going to discuss today, you're going to be unhappy with spotlight.                                    |
| 09:29      | If you don't know better, spotlight is great, but once you use a snappy, proper launcher              |
| 09:35      | that does more for you, and another thing that's inherent with all of these apps, launch              |
| 09:41      | bar, [[Alfred]], and [[Raycast]] is they have a memory of what you select, and so the things you              |
| 09:47      | like the most gradually work their way to the top of the list, and I have not observed                |
| 09:54      | that.                                                                                                 |
| 09:55      | I've been trying to use spotlight more as we've been prepping for today's show.                       |
| 09:57      | I mean, one that vexes me is launching shortcuts because spotlight launches, searches for shortcuts   |
| 10:05      | properly without having to do any kind of modifier, you just type in a shortcut name                  |
| 10:09      | and it finds it for you, but every time it finds a shortcut, it gives me two versions                 |
| 10:14      | of that shortcut, and one of them has a dash application after it or dash open in the menu.           |
| 10:24      | These ones that you've added to your doc so that you could launch them from something                 |
| 10:28      | else by any chance?                                                                                   |
| 10:29      | Yes, probably.                                                                                        |
| 10:30      | That's what it is.                                                                                    |
| 10:31      | That's what it is.                                                                                    |
| 10:32      | Yeah.                                                                                                 |
| 10:33      | Yeah, so it's including your user's applications folder, which is where that is, and yeah.            |
| 10:38      | I get it.                                                                                             |
| 10:40      | That's one of those things that it seems like it's a great feature, but I really                      |
| 10:44      | wish that spotlight were smarter about doing that.                                                   |
| 10:47      | Yeah.                                                                                                 |
| 10:48      | Whereas when I search these out in [[Raycast]], it just finds the right one.                              |
| 10:51      | I don't deal with that.                                                                               |
| 10:53      | When I search them in [[Alfred]], in fact, I kind of prefer [[Alfred]]'s method where you actually            |
| 10:59      | use a modifier, so then you're only searching shortcuts, and that's why you don't get those           |
| 11:05      | extra search results.                                                                                 |
| 11:06      | Yeah, it feels to me like it's okay, and they are continuing to improve upon it, but                  |
| 11:14      | the access to the data, like the picture stuff is a good example.                                     |
| 11:19      | None of the other launchers really do that.                                                           |
| 11:21      | When I search your name, it doesn't look in my photos library and find pictures of you,               |
| 11:25      | but I just have never found that I ever needed that, and it's great, but I would rather have          |
| 11:33      | a fast launcher than one that gives me pictures.                                                      |
| 11:35      | I mean, I guess ideally I'd like to have one that does both, but the speed is more important          |
| 11:41      | than that data.                                                                                       |
| 11:42      | Yeah.                                                                                                 |
| 11:43      | My favourite part of this is if I type David into spotlight, okay, then I get one shortcut             |
| 11:50      | that comes up first, which is something that I put together as an example for David on                |
| 11:55      | iOS today, and then I get an option to search for David STE, okay, then the result is David           |
| 12:02      | Carrick, who was apparently a footballer from 1946 to 1989, David Lloyd, search Google                |
| 12:08      | for David, and then I get contacts for David Sparks and some other Davids, including one              |
| 12:14      | person who's just listed as David with no other information.                                          |
| 12:18      | I really feel like contact information ought to come first for something that's a name.               |
| 12:23      | Yeah.                                                                                                 |
| 12:24      | Same thing.                                                                                           |
| 12:25      | If I type Rosemary, I've got to arrow down 12 times to get to the Rosemary Orchard Contact.           |
| 12:30      | Of course, if I type in David S, then it's better, and it does actually go to you first               |
| 12:35      | because you happen to be first alphabetically.                                                        |
| 12:40      | One of those things where it's good, and I really like the way that they've built in                  |
| 12:45      | the pictures and everything, but I mean, there's just simple things.                                  |
| 12:49      | If I type a calculation into spotlight, so you can do this, okay, so type in like two                 |
| 12:53      | star 371, okay, and then you'll get the result of 371 multiplied by two.                              |
| 13:00      | Now if I press return, it opens the calculator app, which is, I don't know about you.                 |
| 13:05      | If I'm doing a quick calculation with spotlight, I don't think I'm going to want calculator           |
| 13:09      | come up.                                                                                              |
| 13:10      | What I want is the result because I need to put that somewhere.                                       |
| 13:14      | Now I have to do the keyboard shortcut for copy or use the edit menu to go and copy it,               |
| 13:22      | and then close calculator instead of just being able to hit enter and go into something               |
| 13:27      | else and paste it like I can with [[Alfred]] and [[Raycast]] and various other things.                        |
| 13:32      | Interestingly, the pictures that show up when I do type Rosemary Orchard, there are                   |
| 13:36      | a bunch of pictures of [[Stream Deck\|Stream Decks]].                                                                  |
| 13:38      | You and I have been sharing pictures of [[Stream Deck\|Stream Decks]].                                                 |
| 13:40      | Yeah, yeah, because it's pictures from our messages, right, the stuff that we've shared               |
| 13:43      | with each other.                                                                                      |
| 13:49      | So I feel like I'm being too harsh on spotlight.                                                      |
| 13:53      | It is nothing like it used to be with Tiger, it does better work, it's faster, it is taking           |
| 13:59      | advantage of some of the built-in access that it has that the other apps don't have.                  |
| 14:05      | But every time I try to use it, it's just not there.                                                  |
| 14:09      | When you hear about the stuff we're doing with [[Alfred]] and even [[Raycast]] later, you're                  |
| 14:14      | going to understand that this thing is, it's like a pedestrian version.                               |
| 14:20      | This app walks so the rest of them could run, I guess, and I don't know if really Apple               |
| 14:24      | has any interest in it.                                                                               |
| 14:26      | There's this emerging thing going on with Apple and Steve and I have been talking about               |
| 14:30      | a lot of Mac power users where it seems like Apple decided a couple of years ago that they'd          |
| 14:35      | make their productivity apps good and like you look at the emergence of [[Apple Reminders\|Reminders]] and                 |
| 14:43      | notes and now they've got a mind capture idea with free form and I don't know what else               |
| 14:51      | is out there coming down the road, but the productivity apps are actually getting really              |
| 14:55      | good but they're not getting best in class, right?                                                    |
| 15:01      | And they never will because Apple's making these apps for people who just buy Mac and                 |
| 15:06      | they know that if you want a best in class task manager, you're going to go up to something           |
| 15:11      | like Romney Focus or things or something like that.                                                   |
| 15:15      | But they're really doing a good job in that middle area and I almost feel like the spotlight          |
| 15:20      | is another iteration of that.                                                                         |
| 15:22      | Yes, I agree.                                                                                         |
| 15:23      | I think what they're doing is when they're making their productivity apps better, they                |
| 15:27      | are reducing the need for people to go from, okay, right, I need something that's not                 |
| 15:33      | just a list if we're using [[Apple Reminders\|Reminders]] as the example, I need something more and then landing           |
| 15:37      | in the app store and going, oh my God, there's like a bazillion things here and they buy              |
| 15:42      | something and then they feel like they have to use it because they paid money for it but              |
| 15:46      | they don't really like it and so on.                                                                  |
| 15:47      | They are making it better so that the point where you need to go and find something better            |
| 15:52      | is higher.                                                                                            |
| 15:56      | And so that's of course a great goal.                                                                 |
| 16:00      | My mom was asking me the other day, I want to be able to use more than one list in [[Apple Reminders\|Reminders]].         |
| 16:06      | How do I do that?                                                                                     |
| 16:07      | And I was like, okay, you just add a second list.                                                     |
| 16:09      | You actually already have multiple lists in [[Apple Reminders\|Reminders]] as you just didn't realise it.                  |
| 16:14      | And she actually wanted tags, it turned out.                                                          |
| 16:17      | And I showed her how to make smart lists and so on and she was like, oh, this is really               |
| 16:20      | useful, can I have a smart list of things that are tagged with this location?                         |
| 16:24      | Yes, you can.                                                                                         |
| 16:25      | And even better, when you create something in that smart list, it's ultimately tagged                 |
| 16:29      | with that location, which is just genius.                                                             |
| 16:31      | I love it.                                                                                            |
| 16:33      | But it is one of those things where it is just, yeah, spotlight is good but it's not                  |
| 16:40      | yet gone through the [[Apple Reminders\|Reminders]] and notes transformation levels.                                       |
| 16:44      | And maybe it will.                                                                                    |
| 16:45      | Maybe it will.                                                                                        |
| 16:46      | It's certainly getting there.                                                                         |
| 16:47      | With giving us shortcuts and other things in spotlight directly.                                      |
| 16:53      | And this is on iOS as well as Mac OS.                                                                 |
| 16:56      | So I like the fact that it's cross-platform there.                                                    |
| 16:59      | But for me, there is no way that I could switch to spotlight full-time, unfortunately.                |
| 17:07      | I'd love to give it more of a shake, but just I hit command space and then I type David.              |
| 17:13      | Or I hit control space in my case, actually, and I type David.                                        |
| 17:16      | The amount of time it takes to come up with information in general is just slow.                      |
| 17:21      | And then I have to press that arrow so many times to get to you.                                      |
| 17:25      | And then I have to go and find the thing that I actually want, which is not even the thing            |
| 17:31      | that I want to.                                                                                       |
| 17:32      | Also, I've just gone down and I went back up and it's now stuck on messages.                          |
| 17:35      | And I actually have to use the mouse to scroll up to get to being able to message or call             |
| 17:39      | you, which is interesting.                                                                            |
| 17:40      | I should probably open a feedback about that because that seems unintended.                           |
| 17:44      | But yeah, just one of those things where it's something that actually feels slow is not               |
| 17:49      | great.                                                                                                |
| 17:50      | Yeah.                                                                                                 |
| 17:51      | I mean, it's like if OmniFocus is a 10 of task managers, [[Apple Reminders\|Reminders]] is a six, maybe even               |
| 17:56      | a seven.                                                                                              |
| 17:57      | It's really good.                                                                                     |
| 17:59      | And where if [[Alfred]] is a 10 of launchers, spotlight, I think is a three or a four.                    |
| 18:06      | It really needs a lot more.                                                                           |
| 18:07      | Am I being too harsh?                                                                                 |
| 18:10      | I don't think so.                                                                                     |
| 18:11      | I think the thing is, spotlight is fine for a whole bunch of people.                                  |
| 18:15      | And if you're using spotlight, you should not feel bad that you're using spotlight.                   |
| 18:18      | And if you've tried the others and gone, I don't know, this seems more complicated than               |
| 18:23      | I would suggest if you're open to it, giving them another fair shake because all of these             |
| 18:28      | apps are constantly improving, but spotlight gets better once a year.                                 |
| 18:32      | Yeah.                                                                                                 |
| 18:33      | Another thing is, I know a lot of people who are power users, but just refuse to use one              |
| 18:37      | of these third party launchers because their whole thing is, I don't want to sit at a Mac             |
| 18:41      | and be dependent on software that's not installed.                                                    |
| 18:44      | Like, I guess if you work on a lot of different Macs, maybe you do IT or something and you            |
| 18:51      | work at different Macs all day.                                                                       |
| 18:52      | But for me, how often do I sit at a Mac that I don't own and have a need to do much?                  |
| 18:59      | I mean, I want the most powerful tools I can on my Mac.                                               |
| 19:02      | And as much and as good of friends as we are, the most time that we spend together, I have            |
| 19:07      | never sat behind your MacBook Pro and done anything.                                                  |
| 19:10      | So why would I need to be worried about it?                                                           |
| 19:14      | But I know that's another piece of it for people.                                                     |
| 19:16      | And what I will say is that Apple continues to make it better.                                        |
| 19:19      | Well, let's call it a four or a five, but the spotlight is useful and there's a lot                   |
| 19:25      | to it.                                                                                                |
| 19:26      | But both Rose and I, I think, were frustrated in trying to use it, getting ready for today's          |
| 19:31      | show.                                                                                                 |
| 19:32      | Yeah, yeah.                                                                                           |
| 19:33      | Like when I sit down behind my dad's Mac or my mom's Mac, it's usually to go ahead                    |
| 19:36      | and install updates or solve their latest tech support conundrum.                                     |
| 19:41      | Like my dad recently, you know, how do I solve 18,000 missing files or 1,800 missing files            |
| 19:47      | in Adobe Bridge?                                                                                      |
| 19:49      | It turned out that all we had to do was, when he was doing the rename, just delete the collection,    |
| 19:54      | create a new collection, then import stuff into the new collection, and voila, it's                   |
| 19:58      | simple.                                                                                               |
| 19:59      | But, you know, when I had to do that and I was sitting there using [[Spotlight]] and it                   |
| 20:01      | was like, okay, like mostly I'm using this to trigger a Google search.                                |
| 20:05      | So it's fine and I just hit return because it's never going to have what I want in the                |
| 20:09      | files.                                                                                                |
| 20:10      | But it is just one of those things where I was like, oh, right, but I can't like narrow               |
| 20:15      | this down and like go to this specific website with this.                                             |
| 20:19      | I have to, you know, type in my whole search query.                                                   |
| 20:21      | So it does cause me to change my workflow a little bit when that happens.                             |
| 20:25      | But, you know, honestly, I don't spend enough time behind other people's Macs to worry about          |
| 20:29      | it.                                                                                                   |
| 20:30      | And unfortunately, I can install, you know, [[Alfred]] and [[Raycast]] and so on on my work                |
| 20:34      | machine.                                                                                              |
| 20:35      | But, you know, even if, even if you can't, you know, why not give yourself the best experience        |
| 20:39      | on one machine at least?                                                                              |
| 20:44      | This episode of The Automators is brought to you by Issue.                                            |
| 20:47      | Get started with Issue today for free or sign up for an annual premium account and get 50%            |
| 20:52      | off.                                                                                                  |
| 20:53      | Whether you work for yourself or you're part of a team, it's time to get creative.                    |
| 20:57      | Make your online presence and your business stand out from the rest with Issue.                       |
| 21:02      | Issue is the all-in-one platform to create and distribute beautiful digital content from              |
| 21:06      | marketing materials and magazines to catalogues and portfolios and so much more.                        |
| 21:11      | There's no need for endless scrolling through PDFs.                                                   |
| 21:14      | Issue features your digital content in an easy to view way on every device.                           |
| 21:20      | Make it once and distribute it everywhere without reformatting.                                       |
| 21:23      | With Issue, your content is automatically optimised for engagement and ready to share,                |
| 21:28      | which saves you so much time.                                                                         |
| 21:30      | Issue also works seamlessly with the tools you already use and love, like Canva, Dropbox,             |
| 21:36      | Mailchimp, and InDesign.                                                                              |
| 21:37      | I've been working with Issue with my team to put together some newsletter data.                       |
| 21:42      | They have great online templates that work in Microsoft PowerPoint, Keynote, and can                  |
| 21:46      | be uploaded to Google Slides if you want.                                                             |
| 21:48      | It makes it really easy to get in and just start using the tools, and I'd recommend                   |
| 21:52      | this to anyone who wants to publish information to the web easily.                                    |
| 21:57      | Content on Issue can be published as public or private.                                               |
| 22:00      | Private only allows users with the shared link to view it, and public content will be                 |
| 22:05      | available for your audience and it'll be available for others to discover on the Issue platform.      |
| 22:10      | This is cool.                                                                                         |
| 22:11      | The platform also provides statistics on how your content is being consumed so you can                |
| 22:16      | learn more about your audience with data on impressions, clicks on the content, duration              |
| 22:21      | spent reading, pages viewed, and more.                                                                |
| 22:24      | Issue helps creators, marketers, designers, and really anyone who wants to make content               |
| 22:29      | that stands out.                                                                                      |
| 22:30      | You can get started with Issue today for free, or sign up for an annual premium account and           |
| 22:35      | get 50% off when you go to issuiu.com/podcast and use the promo code Automators.                |
| 22:43      | That's issuiu.com/podcast and use the promo code Automators at checkout for your                |
| 22:50      | free starter account or 50% off an annual premium account.                                            |
| 22:54      | One more time issuiu.com/podcast with that promo code Automators and our thanks                 |
| 23:00      | to Issuiu for their support of the Automators and all of RelayFM.                                     |
| 23:07      | So David, we've teased people a little bit.                                                           |
| 23:09      | We've looked at [[Spotlight]].                                                                            |
| 23:10      | [[Spotlight|Spotlight's]] fine.                                                                                     |
| 23:11      | It's okay.                                                                                            |
| 23:12      | But [[Raycast]] seems to be the new cool kid on the block and a lot of people are really                  |
| 23:17      | loving it, and Chris Lawley, who we had on in the last episode, is a huge fan.                          |
| 23:22      | So you and I have both given it a shot for a month, and I think there's a lot of great                |
| 23:27      | things to like about it.                                                                              |
| 23:29      | It's fast, it's got native shortcut support, window resizing is built in, and some other              |
| 23:35      | stuff.                                                                                                |
| 23:36      | But there's some things that we don't like as well, which we'll have to get to at the                 |
| 23:40      | end.                                                                                                  |
| 23:41      | I think a lot of people are weighing up the advantages of using [[Raycast]] and what extensions           |
| 23:49      | it has and so on.                                                                                     |
| 23:50      | So where do you feel like you're at at the moment with [[Raycast]]?                                       |
| 23:53      | I have actually been using it longer than a month, and like I said, I've mapped it to                 |
| 23:57      | the option space, and I looked at it, like, is this a replacement for [[Alfred]]?                         |
| 24:03      | Well, just to kind of cut to the end, it's not for me, and we'll get there eventually.                |
| 24:08      | But to kind of give you a little bit more background, [[Raycast]] is an app that is a launcher.           |
| 24:16      | One of the things I really like about it, it's very pretty.                                           |
| 24:19      | I mean, just the layout and the typography and just the way it looks when you activate                |
| 24:26      | it is very pleasant, and I think they spent a lot of time on that clearly.                            |
| 24:31      | But it's also, you know, that's not the only thing you want, you know, we'll get to some              |
| 24:37      | of that stuff later.                                                                                  |
| 24:38      | The business model is interesting.                                                                    |
| 24:40      | It's free for personal use, so you can download it for personal use.                                  |
| 24:44      | They're trying to monetise it on team usage, and they've got a bunch of team tools and                |
| 24:49      | admin tools that people can use with [[Raycast]], and they've got a $10 per user per month business       |
| 24:56      | model.                                                                                                |
| 24:59      | And I'm always interested in the business model for these things because I put a lot                  |
| 25:02      | of time and effort into learning them.                                                                |
| 25:03      | I don't want something that's going to just disappear one day, or if they're not making               |
| 25:08      | money with the kind of access they're getting to my machine, I worry, like, are they going            |
| 25:13      | to sell data or do something shady?                                                                   |
| 25:18      | I don't feel that way about [[Raycast]].                                                                  |
| 25:19      | They do have a business model, and the business model is a way that allows people who don't           |
| 25:24      | want to pay for a personal license to download and use it for free.                                   |
| 25:27      | So that's good, and I think that's something that a lot of people think about.                        |
| 25:31      | It's like, do I want it as much as you and I like [[Alfred]]?                                             |
| 25:34      | Some people don't want to pay for it, and I get that, and [[Raycast]] is an option for you,               |
| 25:39      | and it's definitely better than [[Spotlight]].                                                            |
| 25:43      | It brings in a lot of the stuff that we were complaining about in the last segment.                   |
| 25:48      | It solves those problems, and the first thing is it's fast.                                           |
| 25:51      | When you type in a search, it goes really fast.                                                       |
| 25:54      | You mentioned that it searches shortcuts and launches shortcuts without a modifier, so                |
| 26:00      | I can just type in the name of any shortcut and launch it off from there.                             |
| 26:04      | It's really good and really fast at that.                                                             |
| 26:06      | I think that is a really nice feature.                                                                |
| 26:09      | I also like the whimsy of it.                                                                         |
| 26:11      | I feel like they've got kind of a feeling for whimsy in the app.                                      |
| 26:15      | At one point, they had a feature where you could turn your cursor into a lightsaber,                  |
| 26:20      | and of course, I love that, but that's been disabled recently, and I don't know if it's               |
| 26:26      | a technical problem or an intellectual property problem, but I don't know if that's coming            |
| 26:32      | back or not.                                                                                          |
| 26:33      | The fact that they didn't include something like that is kind of cool, but I like [[Raycast]].            |
| 26:39      | I think it's a nice app, and it's definitely something worth checking out.                            |
| 26:44      | Yes, exactly.                                                                                         |
| 26:46      | It's one of those things where I've been trying it, I've been playing with it.                        |
| 26:49      | There are a lot of great extensions built in.                                                         |
| 26:51      | It has support for things like JIRA.                                                                  |
| 26:54      | If your workplace uses JIRA for task management and project management, then there is an extension    |
| 26:59      | built in for that, which is just great.                                                               |
| 27:02      | There are third-party extensions as well for things like that.                                        |
| 27:06      | I can go in and in the extensions area, I can literally see every single app I've got,                |
| 27:12      | and I can add an alias or a hotkey for it.                                                            |
| 27:14      | It's very simple, very easy to understand how you do that.                                            |
| 27:19      | I can also find just particular scripts or apps and add my own easily, and I can create               |
| 27:27      | quick links or a directory for scripts and things like that.                                          |
| 27:31      | When you get to installing things from the store, you've got all of those options, Google             |
| 27:36      | Translate, but you don't even need to install something to do, say, if I type in 23C and              |
| 27:43      | F, then it will convert 23 Celsius into Fahrenheit.                                                   |
| 27:48      | That's 73.4 for anyone who's curious.                                                                 |
| 27:53      | That's all built in.                                                                                  |
| 27:54      | That is great.                                                                                        |
| 27:55      | Also, when I hit return and then I go to paste that, I get the result of that conversion.             |
| 28:00      | I have to say that that's really smart, and I love having things like that just under my              |
| 28:05      | fingertips.                                                                                           |
| 28:06      | I found myself using [[Raycast]] more and more for things like conversions between things,                |
| 28:12      | just because it's so simple, and I get that result on my clipboard, which, of course,                 |
| 28:17      | is what we like.                                                                                      |
| 28:19      | I think another thing that some folks really like having an app that just does one thing              |
| 28:25      | and does it well, so using, say, [[Moom]] for rearranging your windows.                                   |
| 28:29      | If you have not tried rearranging your windows using an app like that or you've never really          |
| 28:33      | got into it, [[Raycast]] can do that as well.                                                             |
| 28:37      | I can actually say, if I've got a window active and I activate [[Raycast]] when I type window,            |
| 28:43      | then I get options for the bottom right quarter, the first third, the top half, put it on a           |
| 28:47      | previous desktop or a next desktop, the left half of my screen, put it back where it was,             |
| 28:52      | things like that.                                                                                     |
| 28:53      | I think that that is just really great that that's built in to the launcher so that you               |
| 29:01      | can actually take advantage of that.                                                                  |
| 29:04      | It's putting more things immediately under your fingertips, which I think is something                |
| 29:07      | that a lot of people really appreciate.                                                               |
| 29:10      | The window management system, it's almost enough of a reason to download the app just                 |
| 29:15      | to have the window management system.                                                                 |
| 29:18      | They're very clever.                                                                                  |
| 29:19      | They've got one called Almost Maximise, so it maximises it but doesn't fill up the entire             |
| 29:24      | screen, which is kind of like how I like windows when I want them big and a window and a desktop      |
| 29:31      | navigation, which is really nice, which not a lot of apps can handle.                                 |
| 29:36      | It's just very clever, the window management system, and that is an extension.                        |
| 29:43      | Extensions for [[Raycast]], they've got a bunch of them built in out of the box when you download         |
| 29:48      | it, but then you've got under the settings, and all of these, you access the settings                 |
| 29:52      | by command comma, just like every other proper Mac app.                                               |
| 29:57      | Then you've got a place you can go download extensions, like some of the ones I've installed.         |
| 30:04      | The emoji search is really nice, so you search emoji, it's got a nice display of them.                |
| 30:10      | You pick one, it goes into the paste buffer, and you can paste it.                                    |
| 30:13      | They do the same thing with SF symbols.                                                               |
| 30:14      | If you're into [[SF Symbols]], [[CleanShot X]] has a whole set of plugins, so if you're using                  |
| 30:20      | the [[CleanShot X]], a bunch of its commands now fall in [[Raycast]].                                          |
| 30:25      | [[Obsidian]], the [[Obsidian]] [[Raycast]] plugin is really good.                                                 |
| 30:31      | I installed the [[Home Assistant]] one because I'm trying to get better at [[Home Assistant]],                |
| 30:34      | so they've got a bunch of [[Home Assistant]] commands.                                                    |
| 30:37      | You can add these in here as you need them, but that's a blessing and a curse because                 |
| 30:44      | you only get what they have.                                                                          |
| 30:47      | Yeah, and so I went and looked at this, because one of the things I end up doing a lot for            |
| 30:54      | myself, especially using [[Alfred]] a lot of the time, is that I actually create my own workflows         |
| 31:02      | for things, and so I thought, okay, great, I'll try creating a [[Raycast]] extension.                     |
| 31:08      | So I started creating one using the template, and then I gave me the instructions which were          |
| 31:13      | to run NPM install and then build it, and that was the point where I went, ah, I can                  |
| 31:21      | do this.                                                                                              |
| 31:22      | I'm an expert developer, I use Node and JavaScript as part of my day job.                             |
| 31:27      | If when I said NPM install, you went, wait, what's that?                                              |
| 31:33      | Then you're probably not going to be writing a [[Raycast]] extension anytime soon, basically.             |
| 31:38      | And that's kind of the thing that I feel is a bit of a shame.                                         |
| 31:41      | Not only that, but once you've actually written a [[Raycast]] extension, if you want to share             |
| 31:44      | it with other people, you actually have to make a pull request back to the [[Raycast]] folks.             |
| 31:50      | And I get why, this is why Apple has App Store review, right, and there is the App Store,             |
| 31:55      | and you go to the App Store to look for an app, like Apple's approved it, you can download            |
| 31:59      | it and install it.                                                                                    |
| 32:00      | But the other side of that is Apple's the gatekeeper, right?                                          |
| 32:05      | And I feel like for [[Raycast]], this is one of those things that's a blessing and a curse,               |
| 32:09      | where you, you know, it seems to me, you know, I haven't done a huge amount of digging, like          |
| 32:14      | I know that I can add like a directory of scripts, so I presume I can download stuff                  |
| 32:19      | from GitHub and so on, but it doesn't seem like there's a repository of other sources                 |
| 32:24      | for extensions out there yet.                                                                         |
| 32:27      | And if I want to write an automation, I basically have to do it in another app and then add           |
| 32:33      | it into [[Raycast]] so that I can use it or write a script.                                               |
| 32:38      | And that's something that I feel like is a bit of a shame.                                            |
| 32:42      | It would be really nice if they had a block based editor in there for some simple things              |
| 32:47      | like you have with [[Alfred]].                                                                            |
| 32:49      | You know, if I want to add a search through a particular website, it seems like that's                |
| 32:55      | kind of difficult to just do if I want to do that, you know, like there are extensions                |
| 33:02      | out there for searching the mozzarella documentation for web stuff, but, you know, I have to go       |
| 33:08      | and download something that somebody has made, which, you know, it's got 5,000 downloads.             |
| 33:13      | I'm sure this is great, but I can't just add a search in the settings.                                |
| 33:19      | So you know, definitely, I'm really appreciating the fact that, you know, people have made            |
| 33:23      | Keyboard Maestros Macros or Keyboard Maestros integrations for listing macros and things              |
| 33:29      | like that.                                                                                            |
| 33:30      | That's fabulous.                                                                                      |
| 33:31      | That's genuinely brilliant.                                                                           |
| 33:33      | I love that, but a plenty of people have done this with [[Alfred]] as well and similar.                   |
| 33:38      | So, you know, I think we will see, you know, more of these coming along soon.                         |
| 33:44      | I noticed that there's a [[ChatGPT]] one, which just makes me sad because it gives so many               |
| 33:48      | bad answers so confidently, but, you know, there's, you know, there's some good stuff                 |
| 33:54      | out there.                                                                                            |
| 33:55      | You know, I like the fact that there's a brew search, but I've yet to find something on               |
| 34:00      | [[Raycast]] that I can't get in [[Alfred]] through something else or through a native feature.                |
| 34:08      | But that said, it's very slick.                                                                       |
| 34:09      | It's very simple.                                                                                     |
| 34:10      | It looks very modern.                                                                                 |
| 34:11      | You don't have to choose a theme.                                                                     |
| 34:12      | In fact, you can only choose between the default and the compact mode, light mode, dark mode          |
| 34:17      | or your system preferences.                                                                           |
| 34:20      | And yeah, that's pretty much it.                                                                      |
| 34:24      | It's kept very simple.                                                                                |
| 34:25      | One thing I've struggled with a bit, David, and I'm guessing you probably haven't struggled           |
| 34:29      | with this because you're a one Mac person, sync.                                                      |
| 34:33      | I don't think I can sync [[Raycast]] across my devices.                                                   |
| 34:38      | Certainly, I've just had to go and reinstall an extension that I know I have installed                |
| 34:43      | on my MacBook whilst I'm set here on my Mac Studio.                                                   |
| 34:47      | So it looks to me like it doesn't sync the preferences across your devices.                           |
| 34:52      | And that for me, unfortunately, is a missing feature.                                                 |
| 34:56      | So I'm going to have to see if I can send them a feature request to offer a sync in                   |
| 35:00      | some way just between my devices because I'm sure plenty of folks have got a desktop and              |
| 35:05      | a laptop that they would like to sync their preferences with.                                         |
| 35:07      | There's nothing worse than going to use your favourite launcher and you type the thing and             |
| 35:11      | it doesn't work because you need to go and install something first.                                   |
| 35:16      | Yeah.                                                                                                 |
| 35:17      | And to answer your question, I'm not aware of any sync either and I'm not just a one                  |
| 35:22      | Mac person.                                                                                           |
| 35:23      | I actually have a MacBook Air as well.                                                                |
| 35:24      | Yes, you do.                                                                                          |
| 35:25      | Yeah.                                                                                                 |
| 35:26      | But I've had the same problem.                                                                        |
| 35:27      | I have the same problem where I've got to go and reinstall them if I want.                            |
| 35:33      | And it's not as bleak as it sounds with the extension stuff because there is an extraordinarily       |
| 35:39      | active extension community.                                                                           |
| 35:42      | And there's all kinds of stuff coming out constantly where you're seeing new [[Raycast]]                  |
| 35:49      | extensions get issued often.                                                                          |
| 35:53      | And some of them seem very narrow.                                                                    |
| 35:55      | Yeah, it's mostly just for me that it has to go through them to get into the official                 |
| 36:02      | search and everything, whereas some other options have got just a forum where people                  |
| 36:08      | can go and post stuff or there's fan websites where you can just go and find all the things           |
| 36:12      | that you might be looking for there.                                                                  |
| 36:15      | So yeah.                                                                                              |
| 36:16      | So one of those things where I understand completely why they've done it.                             |
| 36:20      | It's not a negative for that, but it does mean that somebody else is in charge of getting             |
| 36:25      | you into that magic search.                                                                           |
| 36:28      | So yeah.                                                                                              |
| 36:29      | Yeah, and that there is a gatekeeper and that slows things down, you know.                            |
| 36:33      | So yeah.                                                                                              |
| 36:34      | And as far as I understand as well, updates to those extensions have to go through that               |
| 36:37      | same system as well.                                                                                  |
| 36:40      | So you don't just put it on there once you have to put it on there and put the updates                |
| 36:44      | through as well from what I was reading, though I have to say I haven't actually gone and             |
| 36:48      | installed it myself, gone through the process myself yet to create an extension and publish           |
| 36:54      | it just because I haven't had a need to.                                                              |
| 36:56      | But it is crazy.                                                                                      |
| 36:58      | Every time I go in here, there are new ones, you know, I just saw there's one for searching           |
| 37:02      | your craft library word count.                                                                        |
| 37:05      | I mean, they just all kinds of quirky little search things that you may want to use.                  |
| 37:10      | So it's worth checking out and while it does have some limitations, it's pretty and it's              |
| 37:20      | fast.                                                                                                 |
| 37:21      | Yeah.                                                                                                 |
| 37:22      | It's fast.                                                                                            |
| 37:23      | It's fast and it's over spotlight.                                                                    |
| 37:24      | Yes.                                                                                                  |
| 37:25      | Absolutely.                                                                                           |
| 37:26      | It's a great improvement over spotlight and there is a lot to love with it as well, particularly      |
| 37:30      | things like the unit conversion being a native built in feature.                                      |
| 37:34      | You don't have to install anything extra for that.                                                    |
| 37:37      | Along with emoji and S of symbol search, things like that, you know, this keyboard, myster            |
| 37:41      | extensions, all sorts of things are there already and I also have to say I did really                 |
| 37:47      | enjoy the onboarding, supercharging your productivity walkthrough.                                    |
| 37:52      | I thought that that was a really good feature.                                                        |
| 37:54      | So when you launch [[Raycast]] the first time, then you'll see that there is a, you know,                 |
| 37:59      | I think, let me just check what it was called.                                                        |
| 38:01      | Yeah.                                                                                                 |
| 38:02      | Start supercharging your productivity.                                                                |
| 38:03      | A walkthrough where when you navigate to that and you go through it, then it will actually            |
| 38:09      | walk you through doing things like setting up hot keys and aliases, navigating [[Raycast]]                 |
| 38:13      | with built-in keyboard shortcuts, quickly accessing links, floating notes.                            |
| 38:19      | That's something that we didn't mention, David.                                                       |
| 38:21      | Floating notes are like stickies, but in [[Raycast]] and they stay around outside of the                  |
| 38:29      | [[Raycast]] window as well, which is pretty cool.                                                         |
| 38:33      | I like that feature a lot, that's really nice.                                                        |
| 38:37      | I mean, I still use stickies, but yeah, the walkthrough at the beginning to help you get              |
| 38:42      | started figuring out [[Raycast]] and learning how window management works and so on is really             |
| 38:47      | good.                                                                                                 |
| 38:48      | What I like about it, I think, is that it doesn't, they're not trying to copy [[Alfred]],                 |
| 38:51      | which is probably the, you know, they've just got a different take on it.                             |
| 38:55      | And I think for some people it's going to really land and for some people they might                  |
| 38:59      | not like it or they might want, you know, something different.                                        |
| 39:02      | But it is a contender and worth consideration.                                                        |
| 39:05      | I mean, I was surprised when I heard about this app because I'm like, is there room for               |
| 39:10      | another keyboard launcher?                                                                            |
| 39:11      | I mean, we've already got, you know, several really good ones, including a free one from              |
| 39:17      | Apple and these guys have found a way and it's worth checking out.                                    |
| 39:25      | This episode of Automators is brought to you by Electric.                                             |
| 39:28      | When leading a small business, it's not all glamour.                                                  |
| 39:30      | In fact, sometimes it's a matter of spending hours trying to find a laptop lost in the                |
| 39:33      | mail for a new hire or dealing with some other technical emergency, which you're well                 |
| 39:38      | equipped to deal with, but maybe you just don't have the time for.                                    |
| 39:41      | The team over Electric knows small businesses, maybe like yours, face these challenges.               |
| 39:46      | That's why they've solved this problem for you by operating as your IT department.                    |
| 39:50      | Instead of spending your time sorting through unused application licenses, setting up employee        |
| 39:53      | laptops and answering never ending IT questions from your team, you can build that empire.            |
| 39:58      | With Electric acting as your IT department, you can get back to what you're good at.                  |
| 40:01      | Plus you get a really cool IT platform to see and manage everything.                                  |
| 40:05      | Honestly, knowing when to not do something is probably one of the best skills you can                 |
| 40:09      | have.                                                                                                 |
| 40:10      | There is nothing worse than spending half an hour getting water out of somebody's keyboard            |
| 40:13      | and fixing their laptop when actually you will be much better served by spending that                 |
| 40:17      | time doing the thing that your business is really about.                                              |
| 40:21      | And I would have loved to have Electric a number of times, and sometimes even now with                |
| 40:25      | my grandparents to be honest, so you should go and check out Electric if you are a small              |
| 40:29      | business owner or a runner and you just want to get all of your IT stuff done so you can              |
| 40:34      | get on with your job.                                                                                 |
| 40:36      | For automated listeners, Electric are offering a free pair of Beat Solo 3 headphones for              |
| 40:40      | taking a qualified meeting.                                                                           |
| 40:42      | Those go to electric.ai.automators.                                                                   |
| 40:44      | That's electric.ai.automators.                                                                        |
| 40:47      | Go there now to get your free pair of Beat Solo 3 headphones today for scheduling a meeting.          |
| 40:51      | Our thanks to Electric for their support of this show.                                                |
| 40:54      | All right.                                                                                            |
| 40:56      | I feel like [[Alfred]] has been looming over this whole episode.                                          |
| 41:00      | We did an episode on [[Alfred]] a while ago, but things continue to evolve in [[Alfred]] land.                |
| 41:05      | We got [[Alfred]] version 5 out.                                                                          |
| 41:08      | Both you and I are smitten with this as our keyboard launcher of choice.                              |
| 41:13      | And I thought it'd be fun to just kind of go through a little bit of why we're using                  |
| 41:17      | it and what we're doing with it.                                                                      |
| 41:19      | Yeah.                                                                                                 |
| 41:20      | Yeah.                                                                                                 |
| 41:21      | Let's get beyond the basics.                                                                          |
| 41:23      | Let's get into some nerdy automator stuff with [[Alfred]].                                                |
| 41:26      | Yes.                                                                                                  |
| 41:27      | Yeah.                                                                                                 |
| 41:28      | I mean, honestly, one of the things that I love to do using [[Alfred]] are really simple actions,         |
| 41:34      | but they're actions rather than launching apps.                                                       |
| 41:37      | So I launch into the sleep action or just sleep my displays or empty the trash or do                  |
| 41:42      | a calculation.                                                                                        |
| 41:43      | And I like the fact that that's built in when you hit whatever your launcher [[Alfred]] is and            |
| 41:48      | you type EJ.                                                                                          |
| 41:50      | If you've got drives connected, then you'll get the option to eject those drives and things           |
| 41:56      | like that.                                                                                            |
| 41:57      | So that's one of the things that I feel like sometimes people miss that they can do with              |
| 42:02      | [[Alfred]] because that's just more options that you can do basically.                                    |
| 42:07      | So that's certainly worth going and having a little poke around with what system actions              |
| 42:13      | you can do using [[Alfred]].                                                                              |
| 42:14      | So if you look in [[Alfred]] and the features under system, then you can even customise                   |
| 42:19      | which, what names things have got.                                                                    |
| 42:21      | So if instead of the word restart, you want to have the word reboot, you can change it                |
| 42:25      | to reboot.                                                                                            |
| 42:26      | Yeah.                                                                                                 |
| 42:27      | And also you can change like how eject works and things like that and turn on and eject               |
| 42:32      | all command, et cetera to get some simple but really useful nerdy keyboard actions under              |
| 42:41      | your fingers.                                                                                         |
| 42:42      | And that's one of the things about [[Alfred]], one of the reasons why [[Alfred]] is still kind                |
| 42:45      | of my go to is the system is the preferences for [[Alfred]].                                              |
| 42:51      | They're super deep and they give you a lot of control over it.                                        |
| 42:56      | Like if you want sleep, the default command to sleep your Mac and [[Alfred]] sleep, but let's             |
| 43:04      | say you want to use a different command, you can just put it in there and do it.                      |
| 43:08      | And you can even add a confirmation check box where you get a confirmation before it                  |
| 43:13      | does that.                                                                                            |
| 43:14      | And so however your brain works, you can adapt the app to kind of follow that.                        |
| 43:19      | And if you're using [[Alfred]], that's one of the first steps.                                            |
| 43:22      | I think you go to that features tab in the settings and just go through each one of them              |
| 43:27      | and just take a look at what's available to you and how they're configured and you'll                 |
| 43:31      | find different ways to use them.                                                                      |
| 43:34      | Yeah.                                                                                                 |
| 43:35      | Yeah.                                                                                                 |
| 43:36      | One that I found, it must have been about a year ago now that I couldn't believe that                 |
| 43:39      | I hadn't figured out before web bookmarks.                                                            |
| 43:42      | I have enabled my [[Safari]] bookmarks in [[Alfred]].                                                         |
| 43:44      | So when I type command space and then one of the things that is in my bookmarks, that's               |
| 43:49      | the option that comes up first.                                                                       |
| 43:52      | And something that we neglected to mention that you can do in [[Raycast]], you can do it                  |
| 43:55      | in [[Alfred]] as well.                                                                                    |
| 43:56      | If you search for something and you get a number of results come back, then the command               |
| 44:01      | key plus the number of the entry will launch that entry.                                              |
| 44:04      | Okay.                                                                                                 |
| 44:05      | So return will automatically open the first entry for you, but then command two would                 |
| 44:10      | launch the second one, command nine would launch the ninth one, et cetera.                            |
| 44:15      | You can guess how it goes from there.                                                                 |
| 44:17      | But that's something that is just really useful to be able to do.                                     |
| 44:23      | And similarly, once you've found something, you can actually then hit tab and then you'll             |
| 44:29      | get more options depending on exactly what it is that you found.                                      |
| 44:34      | If you found a bookmark, you get one series of options.                                               |
| 44:36      | If you found a file, you'll get different options and applications, more options, files,              |
| 44:41      | get other options again as well.                                                                      |
| 44:43      | So it's really nice that you can do that.                                                             |
| 44:47      | And you can change that tab key as well to something else if you prefer.                              |
| 44:50      | So you could have just the right arrow or the function key or the control key and more.               |
| 44:59      | You can even turn on and off actions.                                                                 |
| 45:01      | So if you don't want to be able to email a file from [[Alfred]], then you can just uncheck                |
| 45:08      | the email option, which is great.                                                                     |
| 45:11      | But equally, if you just want to use it as a fast and snazzy launcher that you can change             |
| 45:15      | the theme of, you could do that too.                                                                  |
| 45:18      | One of the things I know with [[Alfred]] having used these other ones is [[Alfred]] seems one                 |
| 45:22      | of the smartest at surfacing frequently used results and putting them at the top.                     |
| 45:28      | I know that they do this as well in [[Raycast]] and Launch Bar, but [[Alfred]] always seems to                |
| 45:34      | know like it only takes once or twice for me to trigger something in [[Alfred]] where the                 |
| 45:38      | next time I go and type anything like that, it's going to be the number one result.                   |
| 45:43      | And I just hit return and go, and that's something I appreciate about the app.                        |
| 45:47      | Yes.                                                                                                  |
| 45:48      | Yeah.                                                                                                 |
| 45:49      | Something else I appreciate is under the advanced settings, but it's not a scary setting.             |
| 45:52      | I promise, folks.                                                                                     |
| 45:54      | There is a history option for store the typed query and then show the latest query if it's            |
| 46:00      | within five minutes.                                                                                  |
| 46:02      | And the latest query within five minutes is to me, the [[Drafts]] equivalent in [[Alfred]].                   |
| 46:08      | So when I go back to [[Drafts]], if it's within five minutes, it'll show me the draft that                |
| 46:11      | I was working on.                                                                                     |
| 46:12      | If it's after that, it shows me a new one.                                                            |
| 46:15      | For me, being able to go back and, okay, so I searched for this and that gave me that,                |
| 46:19      | so I'm now going to search and I'm going to add another keyword onto this because I use               |
| 46:24      | [[Alfred]] instead of directly typing into [[DuckDuckGo]] or Google or whatever.                              |
| 46:30      | That gives me that.                                                                                   |
| 46:31      | And storing the typed query means that if I hit the up arrow, I see the previous searches             |
| 46:35      | that I've had.                                                                                        |
| 46:36      | So I can be like, oh, right, okay, so I got down this rabbit hole by, I was looking for               |
| 46:41      | [[BBEdit]] and then I saw this other thing and blah, blah, blah, which is really nice that               |
| 46:48      | I can have that.                                                                                      |
| 46:49      | And that's an option.                                                                                 |
| 46:50      | You don't have to enable those.                                                                       |
| 46:52      | I believe they are enabled by default, though I'm not 100% certain on that, but it's really           |
| 46:58      | nice to be able to do that.                                                                           |
| 47:00      | And also within the advanced options, then you've also got what control return, option                |
| 47:07      | return and command return do.                                                                         |
| 47:09      | And so by default, command return will reveal things in Finder.                                       |
| 47:13      | Option return will search your current search term in Finder and control return actions,              |
| 47:18      | the visible results, whatever actioning means within the context of the thing.                        |
| 47:25      | But I really like the fact that that's just something that you can do within [[Alfred]] and               |
| 47:32      | especially that going back to the latest query, it saves me so much time, David.                      |
| 47:36      | I think that was something I was struggling with with recast and spotlight when I was                 |
| 47:40      | giving them, you know, I actually put [[Raycast]] on command space for a while.                           |
| 47:45      | And that was the part that broke my brain and it took me a really long time to figure                 |
| 47:48      | out why I was struggling.                                                                             |
| 47:51      | And it was because the previous search term wasn't coming up if I'd used it recently.                 |
| 47:55      | Yeah.                                                                                                 |
| 47:56      | And I have, I have now enabled that.                                                                  |
| 47:58      | So thank you, Rose.                                                                                   |
| 47:59      | I had the [[Safari]] bookmarks, I'm surprised that's new to you.                                          |
| 48:02      | I had that turned on forever, but the, but yeah, the five minute thing.                               |
| 48:06      | I'd never turned that on.                                                                             |
| 48:07      | So I'll report back at how that does for me, but it seems like a good idea.                           |
| 48:11      | You had me when you said [[Drafts]].                                                                      |
| 48:12      | Yeah.                                                                                                 |
| 48:13      | I think once, once you've got the [[Drafts]] analogy, it's great.                                         |
| 48:17      | Like it's easier to understand for folks.                                                             |
| 48:20      | But something else that is definitely [[Alfred]] specific, that is not something that you can             |
| 48:25      | do at least easily in [[Raycast]].                                                                        |
| 48:28      | You definitely can't do this in spotlight is web search.                                              |
| 48:30      | Okay, if I type something into [[Alfred]] or [[Raycast]] or spotlight or launch bar or [[Quicksilver]],           |
| 48:37      | if you're storing that, you know, and it's not something that's just found as an action               |
| 48:42      | or on my local machine, you'll get the option to Google it or [[DuckDuckGo]] it, depending on             |
| 48:46      | what your preferences are.                                                                            |
| 48:47      | But what you can do in [[Alfred]] is create a custom search and it's got a bunch of them                  |
| 48:52      | built in.                                                                                             |
| 48:53      | So if I type in [[Alfred]] IMDB, legally blonde, it will search for legally blonde on IMDB.               |
| 49:00      | If I type STL, then it actually opens a website for finding 3D printer models for me, stlfinder.com.  |
| 49:11      | And it will put my query into that.                                                                   |
| 49:14      | But you can also just make these for whatever you like.                                               |
| 49:16      | So I actually have some of these, which are just doing things like they're searching [[DuckDuckGo]]       |
| 49:21      | with site colon, whatever the URL is with the query.                                                  |
| 49:27      | And I'm using that either because I can't script the search on the website or even if                 |
| 49:31      | I can search the script on the website, I don't want just what comes up in the website                |
| 49:35      | search results.                                                                                       |
| 49:36      | So a classic example of this is the [[Home Assistant]] website.                                           |
| 49:38      | I use the search all the time because I help out focus on the [[Home Assistant]] [[Discord]].                 |
| 49:43      | But when I search for things, it will search the [[Home Assistant]] website, which includes               |
| 49:48      | the subdomain community.homeassistant.io, which is of course their forums, which, you                 |
| 49:54      | know, if I was searching their website, their forums aren't going to be indexed on their              |
| 49:58      | website.                                                                                              |
| 49:59      | That's not something that they would probably want to do, quite frankly, because there's              |
| 50:02      | a whole lot of stuff in there.                                                                        |
| 50:03      | But it means that I can have whatever I like in the search and, you know, default ones                |
| 50:07      | built in for eBay and Bing, Ask, LinkedIn, YouTube, Flickr, you know, [[DuckDuckGo]], Google              |
| 50:14      | Weather, Pinterest, and of course one that's built in for help.                                       |
| 50:19      | So if I type help into [[Alfred]] and then I type, I don't know, bookmark, then it will search            |
| 50:26      | the [[Alfred]] help for the word bookmark and actually show me some useful results and then               |
| 50:31      | I can find that I somehow missed that I could enable bookmarks in [[Alfred]] in version 3.5.              |
| 50:38      | I'm ashamed of myself, David.                                                                         |
| 50:40      | I don't know how I missed that.                                                                       |
| 50:41      | I think maybe it was because for ages, my bookmarks were in really bad shape and it took              |
| 50:47      | me a while to go through and just prune them to get rid of all the rubbish that I didn't              |
| 50:51      | need.                                                                                                 |
| 50:52      | But as it is, you know, I finally got around to enabling that one.                                    |
| 50:55      | The built-in ones are great and they're going to be enough for a lot of people.                       |
| 50:59      | Like Google Images is another great one I use.                                                        |
| 51:01      | Like when I'm making a presentation, I will trigger it from [[Alfred]] and then, you know,                |
| 51:06      | the trick is you'll say like baseball, transparent, PNG, you know, and you'll find a baseball         |
| 51:12      | without a background that you can drop onto a slide.                                                  |
| 51:15      | So stuff like that is great, but I also have built them for like the MacSparky website               |
| 51:19      | and just like to do searches on things that are important to me that probably not a lot               |
| 51:24      | of people will need, but I can run a query right out of [[Alfred]] that way and that's pretty             |
| 51:29      | cool.                                                                                                 |
| 51:30      | Yes, exactly.                                                                                         |
| 51:31      | There's just so much depth in this, you know, the system preferences with [[Alfred]] and it's             |
| 51:39      | so customisable.                                                                                      |
| 51:40      | You know, that's really what gets me.                                                                 |
| 51:43      | The new and shiny [[Raycast]] is great and the plugins are fun, but man, there's just so                  |
| 51:47      | much I've over time customised [[Alfred]] to do for me.                                                   |
| 51:52      | We haven't even gotten to workflow yet.                                                               |
| 51:53      | I want to wait on that.                                                                               |
| 51:54      | We're going to get to that in the next segment, but like the clipboard history tools are really       |
| 51:59      | good, you know, it's just a really well-developed application.                                        |
| 52:04      | The calculator tools, again, they have a standard and advanced calculator.                            |
| 52:08      | It does snippet, so if you want it to do like a snippet expansion, you can, although I have           |
| 52:12      | to admit, I don't really use that much.                                                               |
| 52:14      | The contacts, we talked about contacts earlier in the episode and we were talking about how           |
| 52:19      | they work in spotlight and how they're great, but they're slow and they take a lot of mousing         |
| 52:23      | or arrow pressing to get to the right one and [[Raycast]]'s contacts, you can search the                  |
| 52:30      | contacts database, you can surface them, but you can't really navigate them well.                     |
| 52:34      | I feel like that's something [[Raycast]] needs to work on, frankly, but in [[Alfred]], contacts               |
| 52:40      | are awesome and they're awesome and ugly all at once because if I type Rosemary Orchard,              |
| 52:46      | it doesn't give me a bunch of pretty pictures of Rose.                                                |
| 52:48      | It doesn't do like all the stuff that spotlight does, but what it gets me is her email address,       |
| 52:54      | her phone number, a way to send her a message, all the stuff I need to do when I search for           |
| 52:59      | Rose's contact like immediately and I'm just a couple arrow clicks or a command number                |
| 53:07      | click away from doing something with that information and while it's not as pretty as                 |
| 53:13      | what spotlight does, it is fast and actionable and that's kind of what I want from contacts.          |
| 53:19      | Yeah.                                                                                                 |
| 53:20      | Now, honestly, I have to say, [[Raycast]] is pretty if I search for contact in [[Raycast]], then I'll         |
| 53:27      | see your profile picture and the phone number and the email and everything, but I then have           |
| 53:32      | to use like command K to get the options and then I can do things like send you a message             |
| 53:37      | or send you an email or copy various things, but I actually have to activate an action                |
| 53:42      | for that, whereas if I just type David and if I type DAV, then [[Alfred]] knows where I'm                 |
| 53:49      | going because it is learning from my search history and prioritising things, but literally            |
| 53:53      | once I've hit return, I mean, I still get your profile picture.                                       |
| 53:56      | It's not rounded off like it would be in contacts, but that's fine.                                   |
| 53:59      | Then I'm already directly on your email address, so if I need to copy it, if I was to paste           |
| 54:04      | it into a form or something somewhere, then I could do that and yeah, it's just really                |
| 54:12      | nice that I can do that and also the large type built in, so useful.                                  |
| 54:19      | You know when you're in 1Password and somebody's like, oh, what's your Wi-Fi password?             |
| 54:23      | You click on the down arrow and you're like, okay, large type this.                                   |
| 54:27      | That's sometimes not big enough.                                                                      |
| 54:28      | I really like the large type version in 1Password, by the way, folks, because it's                 |
| 54:31      | got the numbers underneath for the position of the characters, which is really useful                 |
| 54:36      | if you have to type in like the seventh and the 17th character of your password.                      |
| 54:40      | But the large type option in [[Alfred]], I can actually just type, I've got a workflow that               |
| 54:48      | gives me a large type where I can literally make anything appear in large type.                       |
| 54:55      | That to me is just one of those insanely useful little things that you don't need until you           |
| 55:00      | need it, right?                                                                                       |
| 55:01      | Yeah.                                                                                                 |
| 55:02      | And then you're happy you got it.                                                                     |
| 55:03      | Well, it's just like I had last night, my wife wanted a reference for an estate planning              |
| 55:10      | attorney, a friend of hers wants to get a will done.                                                  |
| 55:13      | Even though I don't practice law, I know a few lawyers and so she's like, can you give                |
| 55:17      | me a number for a good estate attorney?                                                               |
| 55:19      | I'm like, great.                                                                                      |
| 55:20      | So I hit [[Raycast]] and it was just tough to get to the phone number and the email address.              |
| 55:27      | Whereas in [[Alfred]], I've got that in seconds, tap space, command space, like a couple letters          |
| 55:37      | of the person's name, couple arrows down, command C, and I've got it.                                 |
| 55:41      | And that's the thing I want from a keyboard launcher.                                                 |
| 55:44      | I just want it lightning fast and to get out of my way.                                               |
| 55:47      | Yeah, exactly.                                                                                        |
| 55:49      | And I think that's the thing with all of this, right?                                                 |
| 55:52      | We're looking for the fastest, efficient way to do something with just our fingers.                   |
| 55:58      | And we don't want to then spend five minutes tapping the down arrow key to find the thing             |
| 56:04      | that it is that we want or to land in calculator when you're just doing a quick calculation           |
| 56:10      | of, I'm pretty certain I can do this math in my head, but let's make sure you get it                  |
| 56:13      | right because that's what we're doing with automation, right?                                         |
| 56:16      | We're doing automation to make sure that we get the right results consistently rather                 |
| 56:21      | than just fast and inaccurate.                                                                        |
| 56:25      | So yeah, for me, just being able to navigate around and don't forget folks, [[Alfred]]'s got              |
| 56:29      | themes as well.                                                                                       |
| 56:30      | So if you've looked at [[Alfred]] before and gone, I don't really like how it looks.                      |
| 56:33      | First of all, make sure you've checked out the modern themes, which were introduced                   |
| 56:38      | a while ago, certainly, but they look more spotlight like.                                            |
| 56:42      | You can do things like hide the top hat if you don't like the top hat.                                |
| 56:46      | But there's also a whole thing on their website where you can download different themes.              |
| 56:51      | And there's a lot of other websites out there as well, where you can download workflows               |
| 56:55      | and themes for [[Alfred]], where if you want something that's just very dark and dim or                   |
| 57:01      | very purple, then somebody's probably made one.                                                       |
| 57:04      | Or you can go ahead and create your own or duplicate one that somebody's made and tweak               |
| 57:09      | it to meet your needs.                                                                                |
| 57:11      | And I think that that's something that it's worth considering, especially if you've got               |
| 57:17      | low vision or similar and you know that you can easily see this font size on that colour.              |
| 57:25      | Then being able to just duplicate something that's close to what you need and then work               |
| 57:31      | from there is really nice.                                                                            |
| 57:35      | Every time we talk about [[Alfred]] on the show, I discover something that I didn't know.                 |
| 57:40      | And this time is no different.                                                                        |
| 57:42      | I discovered, I don't know why I never played with it before.                                         |
| 57:46      | Maybe this is an [[Alfred]] five edition or I just missed it, but the music mini player,                  |
| 57:52      | have you ever worked with that?                                                                       |
| 57:53      | Yeah, I find that I tend not to need it all that much because I have keyboards with buttons           |
| 57:59      | that can like play Paul stuff.                                                                        |
| 58:01      | But yeah, there's a mini player built into [[Alfred]].                                                    |
| 58:05      | So if you type music when you're in [[Alfred]], then it can actually go ahead, it imports                 |
| 58:12      | your library to start with and asks for control to access music.                                      |
| 58:19      | And then once it's done that, then you actually have the music player mini app and you can            |
| 58:24      | browse through different genres and albums and playlists or play a random album.                      |
| 58:30      | And it will be truly random.                                                                          |
| 58:32      | So if you've got Christmas music in your library, you may end up with seasonal favourites              |
| 58:37      | popping up.                                                                                           |
| 58:38      | But it's just a really nice little thing.                                                             |
| 58:41      | And as with all of this, you can customise your keywords for it.                                      |
| 58:45      | So if you do just have music playing, this is what I tend to use the most.                            |
| 58:50      | Or I tend-to-end up hitting command space and then I end up in the music player.                      |
| 58:56      | How do I get into the music player?                                                                   |
| 58:57      | I can't even remember what it is that I'm pressing.                                                   |
| 59:00      | It must be control, command, return.                                                                  |
| 59:03      | Yes.                                                                                                  |
| 59:04      | Return.                                                                                               |
| 59:05      | That's what I do.                                                                                     |
| 59:06      | And then you just type, yeah.                                                                         |
| 59:07      | And then when you type play, you get play, pause.                                                     |
| 59:10      | And it can just pause.                                                                                |
| 59:12      | And I'm pretty certain I added a workflow or something at some point so that I can just               |
| 59:16      | automatically pause any music that's playing when I just hit command space and type pause.            |
| 59:24      | Just in case.                                                                                         |
| 59:25      | But yeah, it's got so much built into it.                                                             |
| 59:29      | And yeah, I really like the fact that that's just there.                                              |
| 59:35      | And you can customise everything.                                                                     |
| 59:37      | It's under the appearance in the options, by the way, that you can specify where [[Alfred]]               |
| 59:42      | should appear.                                                                                        |
| 59:43      | Like does it hide the menu bar icon?                                                                  |
| 59:46      | Does it hide the result shortcuts?                                                                    |
| 59:51      | And this is per theme as well.                                                                        |
| 59:53      | So if you want to try two different things for the same theme, then you can just duplicate            |
| 59:59      | a theme and use that.                                                                                 |
| 01:00:01   | But it's so good to be able to just use that as an option.                                            |
| 01:00:07   | Yeah.                                                                                                 |
| 01:00:08   | I end up using it.                                                                                    |
| 01:00:09   | What theme are you using?                                                                             |
| 01:00:11   | So I have been alternating a little bit.                                                              |
| 01:00:15   | So I was using a custom one that I made, which is called [[Alfred]] Rose Purple, surprise.                |
| 01:00:23   | Which yeah, I just customised the different options so that I could have the different                |
| 01:00:29   | colours that I liked.                                                                                  |
| 01:00:30   | It's just a dark sort of translucent-ish purple with rounded corners.                                 |
| 01:00:35   | So it's a visual editor, I should note.                                                               |
| 01:00:41   | When you're editing a theme, you can literally just grab onto the edge of something and drag          |
| 01:00:46   | it.                                                                                                   |
| 01:00:47   | Or if you grab onto a corner and drag it, then you'll adjust that.                                    |
| 01:00:50   | And if you click on something, then you can change the colour of it so that you can make               |
| 01:00:55   | it more pink if you wanted to, or more purple in my case.                                             |
| 01:01:01   | But then when you do the options, then you can do things like hiding the hat.                         |
| 01:01:06   | Because I do have the hat hidden a lot of the time.                                                   |
| 01:01:09   | Just I like the hat, but the purple doesn't quite match the purple that I've chosen.                  |
| 01:01:14   | But I think my favourite thing is that I have [[Alfred]] appear on my active screen, David,                |
| 01:01:17   | instead of the default screen.                                                                        |
| 01:01:19   | So if I put my mouse over onto another screen and hit Command Space, then that's where [[Alfred]]         |
| 01:01:26   | is going to show up, rather than the other window where I'm not currently looking.                    |
| 01:01:30   | So yeah, that's a useful feature.                                                                     |
| 01:01:33   | What about you?                                                                                       |
| 01:01:34   | What theme are you using?                                                                             |
| 01:01:35   | I vary between two.                                                                                   |
| 01:01:37   | I like the Nord colour set, and if you're familiar with it, there's a kind of a colour scheme           |
| 01:01:41   | called Nord and David Zhang, Z-H-A-N-G built a Nord view for [[Alfred]], which I use.                  |
| 01:01:49   | I also like [[Alfred]]'s modern dark view, and I switch between those two kind of depending               |
| 01:01:55   | on my mood, but currently I'm using the [[Alfred]] Nord.                                                  |
| 01:01:59   | Yeah.                                                                                                 |
| 01:02:00   | That makes sense.                                                                                     |
| 01:02:01   | There's a lot of great ones out there for it.                                                         |
| 01:02:04   | And folks, if they're looking for this, should definitely check out the [[Alfred]] website and            |
| 01:02:09   | the [[Alfred]] forums, where folks have posted a lot of great themes and workflows for [[Alfred]].            |
| 01:02:16   | I think we're going to have to get to workflows in a minute, David, because there's just so           |
| 01:02:20   | much to talk about with this.                                                                         |
| 01:02:25   | This episode of The Automators is brought to you by TextExpander.                                     |
| 01:02:28   | You go to textexpander.com/automators and get 20% off.                                          |
| 01:02:33   | When you work in a small team, every moment counts.                                                   |
| 01:02:35   | You don't want to be wasting your time finding video conferencing details to send to a new            |
| 01:02:40   | client, and you don't want to track down the same FAQs from the company website.                      |
| 01:02:45   | These are the kinds of things you want at your fingertips so you can get your work done               |
| 01:02:49   | faster, and that's why you need TextExpander.                                                         |
| 01:02:52   | With TextExpander, you can access what you type the most with just a few keystrokes.                  |
| 01:02:57   | This allows you to get your work done faster and eliminate repetition, and it lets you focus          |
| 01:03:02   | on what matters most to you.                                                                          |
| 01:03:04   | TextExpander's powerful shortcuts and abbreviations streamline your team's work.                      |
| 01:03:09   | All you have to do is type a short abbreviation, and TextExpander does the rest for you.              |
| 01:03:13   | You just build and collect your most commonly used phrases, messages, URLs, and more right            |
| 01:03:18   | within TextExpander, then create your chosen abbreviation, and they'll be with you wherever           |
| 01:03:24   | you type.                                                                                             |
| 01:03:25   | You can even customise the snippets by having them automatically add in dates, fill in the            |
| 01:03:29   | blank fields, timestamps, and more.                                                                   |
| 01:03:32   | This will make sure that you still keep the personality in your communications you send,              |
| 01:03:37   | but make it easy at the same time.                                                                    |
| 01:03:39   | TextExpander is available on any device you use across any app you use on Mac, Windows,               |
| 01:03:44   | Chrome, or iOS.                                                                                       |
| 01:03:46   | I use TextExpander daily and often.                                                                   |
| 01:03:49   | This is a show about automation, and this is the best place to get started with automation.           |
| 01:03:54   | Start automating your text.                                                                           |
| 01:03:55   | It makes you feel like a superhero when you get things sent out so quickly using TextExpander,        |
| 01:04:01   | and I love the little reports it sends you, because every year I save days of my life                 |
| 01:04:06   | with TextExpander, and that's the ultimate goal of automation, right?                                 |
| 01:04:10   | Get it done fast, get it done right, and get on with your life.                                       |
| 01:04:13   | Now, if repetitive typing is getting you down, you need TextExpander.                                 |
| 01:04:17   | Check out TextExpander today at textexpander.com/automators, and you get 20% off your           |
| 01:04:22   | first year.                                                                                           |
| 01:04:24   | That's textexpander.com/automators, and say goodbye to repetitive typing.                       |
| 01:04:29   | Our thanks to TextExpander for the support of the automators.                                         |
| 01:04:33   | All right, David, I teased this before the break, workflows.                                          |
| 01:04:38   | How many workflows have you got?                                                                      |
| 01:04:40   | Do we start with the number, or do we start with what they do, and then count it up afterwards?       |
| 01:04:44   | Because I actually, unlike shortcuts, I don't have that many workflows installed.                     |
| 01:04:49   | I have several, and some of them are self-built, and some of them are duplicates, so it doesn't       |
| 01:04:55   | ... I don't have the ability to count it really quickly here, but why don't we just start             |
| 01:04:59   | trading some of our favourite workflows?                                                               |
| 01:05:02   | I want to go first, because I want to get one before you do.                                          |
| 01:05:06   | It's called Bypass by [[Stephen Millard]].                                                                |
| 01:05:09   | Stephen's been a guest on this show, and that is the Shortcuts Launcher Extraordinaire.               |
| 01:05:15   | It should be the one on the website.                                                                  |
| 01:05:16   | The [[Alfred]] website has a Shortcuts Launcher, but it's not as good as Stephen's.                       |
| 01:05:20   | With Stephen's, you just type SC, and then space, and then it searches just your shortcuts.           |
| 01:05:26   | As I said earlier, one of my discoveries through this month of trying different launchers             |
| 01:05:32   | is I actually prefer to use a filter system for launching shortcuts.                                  |
| 01:05:38   | I don't want to search for a shortcut and have the rest of my computer show up in search              |
| 01:05:43   | results.                                                                                              |
| 01:05:44   | I just want to search shortcuts.                                                                      |
| 01:05:46   | Typing the SC space, I know it's a little extra work, but at the end of the day, I like               |
| 01:05:52   | that.                                                                                                 |
| 01:05:53   | With this Bypass workflow installed, you activate [[Alfred]] type SC, period, and then start typing       |
| 01:05:59   | the name of your shortcut, and that's, I guess I'd say 98% of the time, the way I launch              |
| 01:06:04   | shortcuts.                                                                                            |
| 01:06:05   | Yeah.                                                                                                 |
| 01:06:06   | That makes sense.                                                                                     |
| 01:06:07   | I do that a lot as well.                                                                              |
| 01:06:09   | I have to say, though, a lot of the time that I'm launching shortcuts, I tend to do it                |
| 01:06:14   | as part of something else, which is why the workflows are so great, because I do have                 |
| 01:06:19   | some that I've just made for myself, that when I type a particular word, we'll just                   |
| 01:06:25   | launch certain apps or open a series of apps that I've chosen, and that's one of the things           |
| 01:06:33   | that I really like, but one of the workflows that I've got built in, you took [[Bypass]], I'm             |
| 01:06:39   | taking [[Bunch]], Bunch by [[Jay Miller]], who we've had on the show before, sorry, Bunch, the                 |
| 01:06:47   | [[Alfred]] workflow is by [[Jay Miller]], who we've had on the show before, and Bunch is from                  |
| 01:06:51   | [[Brett Terpstra]], who we've had on the show before as well.                                             |
| 01:06:54   | And yeah, I really like that because I use Bunch as a way to launch a series of applications          |
| 01:07:00   | all the time.                                                                                         |
| 01:07:01   | And so the fact that I can use [[Alfred]] to run a Bunch or launch a Bunch means that I just              |
| 01:07:08   | have everything in one place.                                                                         |
| 01:07:10   | I'm installing it.                                                                                    |
| 01:07:11   | I mean, I have trouble getting Bunch to stick with me.                                                |
| 01:07:15   | Brett's a good friend of mine, we've written books together, but since I've already built             |
| 01:07:19   | all this stuff in [[Keyboard Maestro]], I just can never seem to get around to using Bunch                |
| 01:07:24   | regularly.                                                                                            |
| 01:07:25   | So maybe that's one of the tricks, I always felt launching them was a bit of a pain.                  |
| 01:07:30   | So here we go.                                                                                        |
| 01:07:32   | Yeah.                                                                                                 |
| 01:07:33   | Yeah.                                                                                                 |
| 01:07:34   | I mean, if you've got them in [[Keyboard Maestro]], then going back to [[Stephen Millard]], he's also         |
| 01:07:38   | got [[Conductor]] for [[Keyboard Maestro]], which is to [[Keyboard Maestro]] what [[Bypass]] is to                    |
| 01:07:45   | Shortcuts in [[Alfred]], it's a workflow that you can download and install and honestly                   |
| 01:07:51   | just go check Stephen's website for loads of really great stuff because he's also got                 |
| 01:07:55   | [[Doctor Drafts]], which I feel we have to mention because a lot of the folks listening to the            |
| 01:08:00   | show love [[Drafts]] and the [[Doctor Drafts]] workflow is another really great one to get draft stuff        |
| 01:08:08   | into [[Alfred]].                                                                                          |
| 01:08:11   | And again, like you, David, I really prefer having the filter so I can just type DR and               |
| 01:08:17   | then I will get the options up for [[Drafts]] where I can create a new draft or search [[Drafts]]            |
| 01:08:23   | and run actions and things like that.                                                                 |
| 01:08:25   | That for me is one of the things that I prefer, like I know that I'm doing something in [[Drafts]],       |
| 01:08:30   | so I type DR and then as my brain's like, okay, right now we've got [[Drafts]] right, okay,               |
| 01:08:34   | now I can just go and do this bit over here and that's it, I'm done.                                  |
| 01:08:38   | It saves me typing in the search and getting distracted by the other options which aren't             |
| 01:08:44   | what I was looking for.                                                                               |
| 01:08:45   | Yeah, and the nice thing with these modifiers, I was going to argue, I think one of the reasons       |
| 01:08:51   | I like [[Alfred]] is because of [[Stephen Millard]] because he keeps writing these amazing workflows          |
| 01:08:57   | for it that aren't on any other apps, but one of the nice things he did with Bypass,                  |
| 01:09:01   | he did the same thing with the [[Keyboard Maestro]] one is where you can not only activate a short        |
| 01:09:06   | cover, you can go straight into editing it, if you use a different modifier, I think it's             |
| 01:09:09   | SC Edit and so it's just really nice to be able to launch all this off of your keyboard.              |
| 01:09:15   | At the end of the day, the goal, what is the job to be done by these app, it's to allow               |
| 01:09:21   | you to push a couple keys on your keyboard and get on with your day and make your Mac                 |
| 01:09:25   | do whatever it needs to do, so that is a real nice feature.                                           |
| 01:09:30   | I mean, there's so many good ones.                                                                    |
| 01:09:33   | Let's talk about a couple of, I have created a bunch of ones personally that I based off              |
| 01:09:38   | a template in the [[Alfred]] workflows where it is folder searches and I do them where I'm                |
| 01:09:48   | searching just for folders in certain directories, like as an attorney, I did one where I can         |
| 01:09:55   | type CL period and it searches only full folders in the client directory and because the thing        |
| 01:10:02   | I wanted was, I just want to get to the client folder really quick, because I know there's            |
| 01:10:06   | a bunch of documents in there and I don't want to see all of the various files related                |
| 01:10:11   | to that client or any other client.                                                                   |
| 01:10:14   | I want really narrow search results and with [[Alfred]], you can write a custom workflow that             |
| 01:10:19   | does that, says, okay, look in this directory and only return folders and I made a bunch              |
| 01:10:24   | of those and file searches, so there's a lot of things where I do file management on my               |
| 01:10:29   | Mac that starts out as an [[Alfred]] command.                                                             |
| 01:10:33   | Yes, yeah, I have to say, it is one of those things where if that's what you want from                |
| 01:10:39   | it, then it can do that so well.                                                                      |
| 01:10:41   | For me, I've got one custom folder search, which I've done for the applications folder                |
| 01:10:47   | and the reason why I did this is because I can then search for something and find it                  |
| 01:10:52   | in the applications folder and the return key will open it in the applications folder                 |
| 01:10:57   | instead of me having to use the command return to get it in [[Spotlight]], sorry, to get it               |
| 01:11:06   | in Finder and also it's specifically searching things that are just in the applications               |
| 01:11:10   | folder.                                                                                               |
| 01:11:11   | I do have applications installed in other locations, like my user's applications folder, but I'm      |
| 01:11:16   | not necessarily looking for those.                                                                    |
| 01:11:18   | But I've got a couple that I've created myself as well, David, which I feel like we should            |
| 01:11:24   | mention because one of the things I love about [[Alfred]] is when you click on the plus in the            |
| 01:11:28   | workflows area, so on the left you click the list of workflows that you may or may not                |
| 01:11:34   | have installed and at the bottom of that, there's the [[Alfred]] Gallery, there's some                    |
| 01:11:37   | help and then there's a plus.                                                                         |
| 01:11:39   | There are templates, so you can have web and URLs, there's follows and apps show [[Alfred]]               |
| 01:11:46   | with specific text, there's some essentials like taking a keyword and passing it into                 |
| 01:11:50   | [[AppleScript]] or a script filter going into AppleScript or keyword goes to a terminal                   |
| 01:11:54   | command, things like that, but there's also clipboard, pasting text from a hotkey, pasting            |
| 01:12:01   | this plain text from a hotkey, controlling music and things like that as great examples.              |
| 01:12:06   | And then there's also getting started, so you can use other ones there, but I mean I                  |
| 01:12:12   | nowadays end up starting with the blank workflow, but I've created a little one and it's just         |
| 01:12:17   | to do.                                                                                                |
| 01:12:18   | So if I type to do, no space to start with, and then I don't have anything after that                 |
| 01:12:25   | then I can create a new task in OmniFocus.                                                            |
| 01:12:28   | And it's really simple, it just needs to do and it takes whatever is after that and throws            |
| 01:12:33   | it into a [[URL Schemes\|URL scheme]] that opens it in OmniFocus in my inbox.                                          |
| 01:12:37   | That's it.                                                                                            |
| 01:12:38   | Really simple, really effective and it works.                                                         |
| 01:12:42   | And I did this as a test for myself just to see how easily can I create an [[Alfred]] workflow            |
| 01:12:52   | using somebody who's been playing with shortcuts and things like that for a while but doesn't         |
| 01:12:57   | necessarily know how to write a full-blown search filter in AppleScript or how to write               |
| 01:13:04   | a Python script to do something could do this and I was like, okay, well, [[URL Schemes]],                |
| 01:13:08   | there's plenty of examples of those out there.                                                        |
| 01:13:09   | The OmniFocus website shows a number of [[URL Schemes]].                                                  |
| 01:13:13   | I'm going to see what I can do and I did that and I then replicated it.                               |
| 01:13:18   | So if I type, OFP it searches OmniFocus projects, OFT searches OmniFocus tags and OF space followed   |
| 01:13:26   | by whatever it is just searches OmniFocus in general.                                                 |
| 01:13:30   | So yeah, it's not crazy hard to create some [[Alfred]] workflows, which is a really nice feature          |
| 01:13:38   | that I think people will appreciate.                                                                  |
| 01:13:40   | Yeah, there was a really good OmniFocus [[Alfred]] plug-in called Search OmniFocus that worked            |
| 01:13:48   | with version, I think with the Mac OS update it broke and that's because Apple stopped                |
| 01:13:54   | shipping a bunch of the stuff in the terminal or in the, you know, you're going to, I don't           |
| 01:13:58   | know the term of art to say, but basically you didn't have the pieces underneath that                 |
| 01:14:02   | it was using to run.                                                                                  |
| 01:14:04   | I think it was the JavaScript element that is not there anymore.                                      |
| 01:14:08   | And they have a new version out, but you need to install Node and actually I discovered               |
| 01:14:13   | it like 30 minutes before we start recording today and I didn't want to start messing around          |
| 01:14:18   | with that before we record a show.                                                                    |
| 01:14:20   | But this workflow, once you get it running, like you can type.f and it'll just search                 |
| 01:14:25   | your OmniFocus folders or.p and it'll just search your perspectives.                                  |
| 01:14:30   | It's a very powerful way to kind of get into an application that isn't, you know, OmniFocus           |
| 01:14:35   | isn't great at search in terms of like getting to something quickly or at least it certainly          |
| 01:14:40   | isn't as good as [[Alfred]] is and I am looking forward to getting this thing running again.              |
| 01:14:45   | I'll put a link in the show notes, but it's by Rhyd Lewis and it's a very cool OmniFocus              |
| 01:14:53   | [[Alfred]] plug-in.                                                                                       |
| 01:14:54   | Yeah, yeah.                                                                                           |
| 01:14:56   | There's some other group ones that we should give a mention to.                                       |
| 01:15:00   | So 1Password, if you use 1Password 7, then [[Alfred]] has got a native integration for                |
| 01:15:06   | that.                                                                                                 |
| 01:15:07   | If you're using 1Password 8, then there's a link in the [[Alfred]] preferences, I should                |
| 01:15:11   | say, to the [[Alfred]] 8 workflow on the [[Alfred]] website.                                                  |
| 01:15:17   | And so I'm using [[Alfred]] 8 and I've got the 1Password workflow installed.                            |
| 01:15:23   | And so when I type 1P into [[Alfred]], then it actually goes through and once you've connected            |
| 01:15:36   | everything up, which you will need to do, I had to do this the other day on my work                   |
| 01:15:40   | machine because I had forgotten that I'd not set this up, then you can actually just                  |
| 01:15:47   | search 1Password, which is great.                                                                   |
| 01:15:48   | I highly recommend it.                                                                                |
| 01:15:50   | So yeah, that's definitely something that I like.                                                     |
| 01:15:53   | It's basically the way that 1Password works now on your Mac.                                        |
| 01:15:59   | So [[Alfred]] can access it, requires you to install the command line tool.                               |
| 01:16:04   | So you'll get walked through doing all of that, but that's certainly something that                   |
| 01:16:08   | is worth looking at if you may want to just search 1Password for things from [[Alfred]].                |
| 01:16:15   | Yeah, a dumb one that I use all the time is time zones where I just set up, and this                  |
| 01:16:21   | is a third party when someone made it, but I've just set up the time zones I need to                  |
| 01:16:25   | see most often.                                                                                       |
| 01:16:26   | I activate [[Alfred]], I type TZ, and I see what time it is in Memphis, what time it is in                |
| 01:16:31   | London, like all the people I podcast with, I can tell exactly what time it is.                       |
| 01:16:35   | And this is the fastest way I know to find out what time it is in London because it's                 |
| 01:16:40   | three keystrokes.                                                                                     |
| 01:16:41   | Yeah.                                                                                                 |
| 01:16:42   | Yeah, exactly.                                                                                        |
| 01:16:44   | I have the same one set up, and what I really like as well is if you type time zone edit,             |
| 01:16:51   | then you can just edit them, but it's a really smart little thing to do that the creator              |
| 01:16:58   | has actually made it into a different command.                                                        |
| 01:17:01   | So if you just type TZ and then add, you're not accidentally going to add something.                  |
| 01:17:05   | So if you type TZ and leave your computer alone for a little bit and the cat walks                    |
| 01:17:08   | across the keyboard causing havoc, then they're not actually going to accidentally delete             |
| 01:17:13   | Melbourne or something from your useful ones, from your useful time zones.                            |
| 01:17:19   | So yeah, that's a neat little trick that's worth bearing in mind.                                     |
| 01:17:23   | That's how some of my OmniFocus stuff works.                                                          |
| 01:17:25   | If I type OFT, it's actually OmniFocus tags, but if I type to do, then it knows that I'm              |
| 01:17:30   | adding a to-do item.                                                                                  |
| 01:17:32   | Another one I should mention, [[Yoink]].                                                                  |
| 01:17:34   | So [[Yoink]] is a great little app that I have.                                                           |
| 01:17:37   | It sits on the left side of my monitor, and I can just drag a file.                                   |
| 01:17:40   | When I start dragging a file, [[Yoink]] appears as like a little floating shelf, and I can                |
| 01:17:43   | drop the file on there, and then when I've got the things together that I need, then                  |
| 01:17:48   | I can drag the files off of [[Yoink]], and when [[Yoink]] is empty, it disappears.                            |
| 01:17:52   | But because I use [[Alfred]] to find a lot of these files, I actually added the [[Yoink]] action,             |
| 01:17:58   | which is from Matthias, who is the creator of [[Yoink]], and it gives you an add to [[Yoink]]                 |
| 01:18:03   | action.                                                                                               |
| 01:18:04   | So when you search for a file, and then you find it, then you can just go ahead and actually          |
| 01:18:11   | use the add to [[Yoink]] action, and that's it.                                                           |
| 01:18:14   | It's super easy.                                                                                      |
| 01:18:15   | So yeah, highly recommend looking in...                                                               |
| 01:18:20   | There's a lot of apps, actually, that have got little [[Alfred]] workflows for them, official             |
| 01:18:25   | and unofficial, and sometimes they're even linked on the website.                                     |
| 01:18:28   | DEVONthink is another one.                                                                            |
| 01:18:29   | There's two different DEVONthink searches, which I've been playing with, and they both                |
| 01:18:37   | seem pretty good.                                                                                     |
| 01:18:38   | I can't decide between which one I like best.                                                         |
| 01:18:40   | Yeah.                                                                                                 |
| 01:18:41   | That's good, right?                                                                                   |
| 01:18:42   | I mean, that's what you want.                                                                         |
| 01:18:44   | You want abundance of riches.                                                                         |
| 01:18:46   | I'm a little sad that my current version of the OmniFocus search isn't working.                       |
| 01:18:51   | And if there were two of them, that would solve the problem.                                          |
| 01:18:54   | Yeah.                                                                                                 |
| 01:18:55   | I mean, honestly, I think it's just great that you can have the thing that most people                |
| 01:19:00   | probably want to do with a workflow if they're going, okay, I want to just be able to type            |
| 01:19:06   | something and then magic happens.                                                                     |
| 01:19:10   | So the something that you type would be a keyword, and then after that, your actions                  |
| 01:19:16   | can be to open files or to launch files or run a particular action, [[Alfred]].                           |
| 01:19:22   | Any of the [[Alfred]] actions that you can run, you can do as an action here or system commands           |
| 01:19:28   | and so on, and then you just chain as many of those together as you need.                             |
| 01:19:34   | So I've got one where if I type lullaby, then it actually checks if iTunes is playing or              |
| 01:19:39   | music is playing, and then it pauses it if it is.                                                     |
| 01:19:45   | It turns the volume all the way down to muted.                                                        |
| 01:19:49   | And if [[Amphetamine]] is running, well, [[Amphetamine]] is just told to turn off regardless of whether       |
| 01:19:55   | or not it's running, and then it runs a sleep command, and that's it.                                 |
| 01:20:01   | But it's really nice to be able to do that, and it didn't take me long to find all of                 |
| 01:20:07   | the places where I could just copy and paste these tiny little bits of AppleScript from.             |
| 01:20:12   | If application music is running, then tell application music if player state is playing,              |
| 01:20:18   | and pause, and tell, and if that was it.                                                              |
| 01:20:22   | And that's the longest part of the script.                                                            |
| 01:20:24   | So I think it's really nice to be able to do that sort of thing without having to do                  |
| 01:20:33   | anything too crazy.                                                                                   |
| 01:20:35   | That is pretty much the most scripting I've written to do anything in [[Alfred]], to be honest.           |
| 01:20:40   | So I think that's pretty good.                                                                        |
| 01:20:42   | We didn't talk today much about Launch Bar.                                                           |
| 01:20:44   | That's because neither one of us have been using it much lately.                                      |
| 01:20:47   | We did an in-depth dive on this on Mac Power users a year or two ago where I spent a bunch            |
| 01:20:52   | of time in Launch Bar then, and my conclusion at the time was it's really good, but I just            |
| 01:20:56   | preferred [[Alfred]].                                                                                     |
| 01:20:57   | It just seemed to work better for me.                                                                 |
| 01:21:00   | But we're not going to cover that one today.                                                          |
| 01:21:02   | I think we've gone enough at this, but it's nice to see that this is a healthy, active                |
| 01:21:09   | environment for people with lots of competing apps doing cool stuff, whether you're using             |
| 01:21:15   | [[Spotlight]] or [[Raycast]] or [[Alfred]] or Launch Bar.                                                         |
| 01:21:18   | I feel like all of these can help you automate.                                                       |
| 01:21:21   | Absolutely, and even if you just go, okay, well, I'm not sure I need any of these workflows           |
| 01:21:28   | or anything.                                                                                          |
| 01:21:29   | It's definitely worth downloading [[Raycast]] or [[Alfred]] or similar just to see, would you                 |
| 01:21:35   | benefit from being able to do command space and type a calculation and then copy that                 |
| 01:21:41   | to your keyboard?                                                                                     |
| 01:21:43   | If that's the only automation that you go away with, being able to do that, that's really             |
| 01:21:48   | cool and that's really useful, and so I think it's worth exploring these as options, even             |
| 01:21:55   | if you don't necessarily end up sticking with it, go to try.                                          |
| 01:22:00   | These things are fun to play with, and worst-case scenario, you maybe find that a different           |
| 01:22:04   | look of your Launch Bar app inspires you to maybe rearrange things and get some other                 |
| 01:22:11   | automations up and running.                                                                           |
| 01:22:13   | Either way, we're the Automators.                                                                     |
| 01:22:14   | You can visit relay.fm slash Automators.                                                              |
| 01:22:18   | We want to thank our sponsors today, Issue, Electric and TextExpander, and we'll see you              |
| 01:22:22   | next time.                                                                                            |
| 01:22:23   | Goodbye, folks.                                                                                       |
| 01:22:24   | Bye.                                                                                                  |
