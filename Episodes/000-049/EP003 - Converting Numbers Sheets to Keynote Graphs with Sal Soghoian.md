---
status: "complete"
fc-date:
  year: 2018
  month: 08
  day: 03
fc-category: "podcast"
podcast: "Automators"
published: 2018-08-03
duration: 3833
formattedduration: "01:03:53"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Sal Soghoian"]
notetype: "episode"
showpage: "http://relay.fm/automators/3"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators003.mp3"
episode: 3
title: "3: Converting Numbers Sheets to Keynote Graphs with Sal Soghoian"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode we sat down with Sal Soghoian to learn how to use AppleScript to turn a Numbers table, column, or row, into a chart in Keynote. We also dove into the history of AppleScript, what parts of it mean, and how you can learn it too.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Sal Soghoian]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 003 Discussion](https://talk.automators.fm/t/automators-3-converting-numbers-sheets-to-keynote-graphs-with-sal-soghoian/1162)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile Software]] - Multiply your team’s productivity.

# Show Notes
This is an episode where you'll want to bring your Mac, and make sure to [visit Sal's page](http://macosxautomation.com/automators/) to download all the goodies too!
* * *
- [Mac Power Users #370: Automation with Sal Soghoian - Relay FM](https://www.relay.fm/mpu/370) - Sal Soghoian, the father of automation on the Mac, joins Katie and David to discuss the state of Mac an iOS automation. Sal discusses the history of Automation on the Mac, the possibilities for Automation on iOS and the tools and languages available to put the power in the hands of the user.
- [Numbers Table to Keynote Chart | macOS Automation.com](http://macosxautomation.com/automators/)
- [macOS Automation](http://macosxautomation.com/) - If you want to learn about automation on the Mac, this a *great* place to get started. You'll find links to all of Sal's other sites here too.
- [Apple Configurator & Automator](https://configautomation.com/) - All about automating Apple Configurator with Automator and more.
- [Late Night Software | The home of Script Debugger](https://latenightsw.com/) - An alternative to Script Editor for your Mac.
- [CMD-D Down-Home Scripting Bootcamp](https://www.cmddconf.com/) - A 3 day course with Sal and Ray where you can learn AppleScript together. Make sure to listen to the show to get a discount of $200 when booking your ticket!
- [Omni Group Automation](https://omni-automation.com/) - If you want to learn about automating OmniGraffle or OmniOutliner with OmniJS, then this is the official website.
- [How Apple Programmer Sal Soghoian Got Apps Talking to Each Other | WIRED](https://www.wired.com/story/soghoian-automation/)
- [iWork and Automation](https://iworkautomation.com/) - If you enjoyed the example of taking a table in Numbers and converting it into a chart in Keynote and would like to automate more things with the iWork suite of applications then this is the place to start!
- [Automators Forums](https://talk.automators.fm/c/episodes) - Join us to talk about the episode, dissect the AppleScript, and nerd out about automation.

# Transcription

| Time Index | Transcription                                                                                                                                                            |
|:---------- |:------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 00:00      | Welcome to the Automators, episode three where we talk about some automation with our pal                                                                                |
| 00:06      | Sal Soghoian.                                                                                                                                                            |
| 00:07      | Yes.                                                                                                                                                                     |
| 00:08      | We are very excited to have Sal on the show here today.                                                                                                                  |
| 00:11      | For those of you who don't know him, he's possibly the most important person in the                                                                                      |
| 00:14      | automation world.                                                                                                                                                        |
| 00:15      | Isn't that right, David?                                                                                                                                                 |
| 00:16      | Yeah.                                                                                                                                                                    |
| 00:17      | When we started the show, we were like, well, we're going to have guests too, of course.                                                                                 |
| 00:20      | In fact, to you listeners out there, if you've got a really cool automation workflow, let                                                                                |
| 00:24      | us know in the forums because we're going to pick a few and we're going to have some                                                                                     |
| 00:28      | of you on the feature.                                                                                                                                                   |
| 00:30      | But the obvious first guest was Sal.                                                                                                                                     |
| 00:33      | Sal, welcome to the show.                                                                                                                                                |
| 00:35      | Thank you so much.                                                                                                                                                       |
| 00:36      | I am just so pleased to be here.                                                                                                                                         |
| 00:39      | I am so pleased that automation is an exciting topic once again.                                                                                                         |
| 00:44      | Amen, brother.                                                                                                                                                           |
| 00:45      | Amen.                                                                                                                                                                    |
| 00:46      | We had Sal on the Mac Power users, so I'm going to put a link in the show notes where                                                                                    |
| 00:49      | we talked at length, but the real quick short summary of it is I first met Sal when he taught                                                                            |
| 00:55      | [[AppleScript]] at the Mac World Expo years ago.                                                                                                                         |
| 01:00      | He did a two-day course on it, and I have used the stuff Sal taught me in that course                                                                                    |
| 01:05      | for, I don't know, something like 10 years now, all the time to help me get automation                                                                                   |
| 01:10      | better.                                                                                                                                                                  |
| 01:11      | And for the longest time, Sal was the term product manager.                                                                                                              |
| 01:15      | I mean, you were basically the guy for automation at Apple for a long time.                                                                                              |
| 01:19      | My job was kind of overloaded.                                                                                                                                           |
| 01:21      | My title was product manager automation technologies, but I also functioned as the dev representer                                                                       |
| 01:29      | and I would, the public meeting presenter and PR guy and a bunch of other things too.                                                                                    |
| 01:36      | We're all encompassed within that title.                                                                                                                                 |
| 01:38      | Well, I mean, the fact that Sal loves automation and it's infectious if you spend any time                                                                               |
| 01:44      | with him because there's so many ways you can make your life easier with this stuff.                                                                                     |
| 01:49      | And now you're not with Apple, but you're still doing that.                                                                                                              |
| 01:51      | You're helping [[Omni Group\|Omni]] with the [[JavaScript]] implementation they're doing.                                                                                |
| 01:55      | You're constantly publishing stuff over at Mac automation, I'm sorry, macosxautomation.com.                                                                              |
| 02:02      | And you're just a treasure of the community for the automation stuff, I mean, honestly.                                                                                  |
| 02:08      | Definitely.                                                                                                                                                              |
| 02:09      | I mean, I wouldn't have got started with AppleScript if it hadn't been for you and your                                                                                  |
| 02:12      | websites.                                                                                                                                                                |
| 02:13      | So thank you because I'm here today because of you.                                                                                                                      |
| 02:16      | I am so impressed and inspired.                                                                                                                                          |
| 02:19      | That's amazing.                                                                                                                                                          |
| 02:20      | I'm just thrilled with the work that you're doing, pushing and advancing automation around                                                                               |
| 02:25      | the world through very creative ways and orchard related presentations.                                                                                                  |
| 02:32      | I'm just thrilled with what you're doing too.                                                                                                                            |
| 02:35      | Yeah, I do.                                                                                                                                                              |
| 02:36      | I must say that I actually am working with Apple.                                                                                                                        |
| 02:40      | I have an Apple badge.                                                                                                                                                   |
| 02:43      | I work as a contractor with HCS which is Craig Cohen's organisation for the enterprise team                                                                              |
| 02:51      | at Apple.                                                                                                                                                                |
| 02:52      | I help them to develop automation tools for setting up iOS devices using Macs.                                                                                           |
| 03:01      | And so some of that stuff that we developed early during my time at Apple, we're still                                                                                   |
| 03:07      | using and advancing and it's really incredible.                                                                                                                          |
| 03:10      | Just give a shout out to JD and Adam and Ricardo and the rest of the team over there.                                                                                    |
| 03:16      | They're doing a really great job on automating iOS devices using Macs.                                                                                                   |
| 03:22      | And are they using AppleScript for that?                                                                                                                                 |
| 03:24      | Or I don't know if you can say at all.                                                                                                                                   |
| 03:26      | AppleScript comes into play quite a bit.                                                                                                                                 |
| 03:27      | It's mostly based on automator.                                                                                                                                          |
| 03:30      | They use workflows upon attachment to automate the setup of iOS devices for companies, usually                                                                           |
| 03:38      | large installations and maybe tens of thousands of iOS devices where they might not have access                                                                          |
| 03:46      | to a network or the convenience of just being able to plug and go is really important.                                                                                   |
| 03:54      | So we developed that technology.                                                                                                                                         |
| 03:57      | I worked with the configurator team, Todd Fernandez and the configurator team, and we                                                                                    |
| 04:03      | developed an architecture for that.                                                                                                                                      |
| 04:05      | And I document a lot of that at [configautomation.com](https://configautomation.com), which you can get to from the [macosxautomation.com](https://macosxautomation.com) |
| 04:13      | master site.                                                                                                                                                             |
| 04:15      | And gang, if you're, first of all, this is an episode we want you to listen to in front                                                                                  |
| 04:20      | of a computer because Sal, as the first guest, has set the bar so high that I don't think                                                                                |
| 04:26      | any future guest will match.                                                                                                                                             |
| 04:28      | We're going to get into the weeds on some AppleScript today because that's what we                                                                                       |
| 04:32      | do on the show.                                                                                                                                                          |
| 04:33      | Sal set up a website for you.                                                                                                                                            |
| 04:35      | So if you go to macosxautomation.com/automators, you'll see how he did that.                                                                                             |
| 04:41      | There's a whole [[AppleScript]] there that's annotated for you.                                                                                                          |
| 04:44      | It's got videos to show.                                                                                                                                                 |
| 04:45      | And we're going to talk through it on the show today.                                                                                                                    |
| 04:47      | So I think one of the best ways to get your very first lesson in auto script from Apple                                                                                  |
| 04:52      | script from the guy is to sit down, listen to our show and just open that website on                                                                                     |
| 04:57      | your Mac and you're going to get the code and everything you need.                                                                                                       |
| 05:01      | Before we get started, I think if anybody's getting serious about AppleScript, one thing                                                                                 |
| 05:05      | I would recommend you do, Apple has a built-in AppleScript editor on your Mac.                                                                                           |
| 05:09      | But if you want to get serious about the stuff, the app that I've been using, and Sal told                                                                               |
| 05:13      | me about this app way, way long ago when I took his course, is you want to get yourself                                                                                  |
| 05:19      | over to late night software.                                                                                                                                             |
| 05:20      | There's an app called [[Script Debugger]].                                                                                                                               |
| 05:22      | And for years I paid for this app, bought it, they had a purchase system.                                                                                                |
| 05:27      | Now they've got a thing where you can, I believe you can just download it and upgrade your                                                                               |
| 05:30      | license once you get into it.                                                                                                                                            |
| 05:32      | So anybody can download it and get the basic features with it.                                                                                                           |
| 05:35      | And it's, in my opinion, far superior to the [[Script Editor\|AppleScript editor]] in the built-in to the                                                                |
| 05:41      | Mac OS.                                                                                                                                                                  |
| 05:42      | It's a wonderful tool.                                                                                                                                                   |
| 05:43      | Yeah.                                                                                                                                                                    |
| 05:44      | It's got a complete free trial for the first 20 days as well, which is really, really good                                                                               |
| 05:48      | for testing it out.                                                                                                                                                      |
| 05:49      | I highly recommend it.                                                                                                                                                   |
| 05:50      | Yeah.                                                                                                                                                                    |
| 05:51      | One of the tricks of [[AppleScript]] is the libraries.                                                                                                                   |
| 05:53      | And you know, it's a real challenge to do this on a podcast because it's a programming                                                                                   |
| 05:58      | language, but the libraries into the applications is what gets you the magic ability to automate                                                                         |
| 06:03      | them.                                                                                                                                                                    |
| 06:04      | And Script Debugger's libraries are amazing.                                                                                                                             |
| 06:08      | Another thing is I want to plant a seed.                                                                                                                                 |
| 06:09      | We're going to talk about this later in the show, but Sal's getting ready to do a whole                                                                                  |
| 06:13      | three-day conference on [[AppleScript]].                                                                                                                                 |
| 06:15      | And that's going to be in October in Cartersville, Georgia, going to the South this time.                                                                                |
| 06:22      | It's called the [[CMD-D Conference\|CMD-D Down Home Scripting Bootcamp]].                                                                                                              |
| 06:27      | And we are going to have a code for you at the end of the show to get you $200 off.                                                                                      |
| 06:31      | So we have a lot to talk about.                                                                                                                                          |
| 06:34      | But this is the automator, so we like to get nerdy.                                                                                                                      |
| 06:36      | So let's start out talking a little bit about this [[AppleScript]] implementation that Sal                                                                               |
| 06:40      | shared with us.                                                                                                                                                          |
| 06:41      | A lot of people always ask me when they want to get into [[AppleScript]], they're like, I'm                                                                              |
| 06:45      | not really sure how I use it.                                                                                                                                            |
| 06:47      | I understand that there's this great language out there that lets me connect apps together                                                                               |
| 06:51      | and make my Mac do things without me having to trouble with it.                                                                                                          |
| 06:55      | But where do I start?                                                                                                                                                    |
| 06:57      | And I asked that question of Sal and he put together this really great tutorial for us.                                                                                  |
| 07:01      | So how do we start there?                                                                                                                                                |
| 07:04      | So once again, this is at macosxautomation.com/automators.                                                                                                               |
| 07:08      | So if you're listening in your car, this is one I would pause right now and just wait                                                                                    |
| 07:12      | till you get home and from your Mac because looking at the code is going to make this                                                                                    |
| 07:15      | way easier for you.                                                                                                                                                      |
| 07:17      | Yes.                                                                                                                                                                     |
| 07:18      | And Sal's been really great here and he's got a complete downloadable zip file with everything                                                                           |
| 07:23      | in it that you're going to need to get started and play.                                                                                                                 |
| 07:25      | All right, so what is this script about?                                                                                                                                 |
| 07:27      | So when you asked me about doing the podcast, the thousands of scripts that I've written                                                                                 |
| 07:36      | or seen in my life, I said, you know, is there some type of script that shows some of the                                                                                |
| 07:42      | basic power behind AppleScript and some of the remarkable abilities that it has, but                                                                                     |
| 07:48      | at the same time is quite functional and easy to understand.                                                                                                             |
| 07:53      | And my mind instantly went to this script and what the script does is it takes a table                                                                                   |
| 08:03      | in numbers and takes the data from the table and makes a chart in a slide on keynote.                                                                                    |
| 08:13      | And just the act of being able to run the script, it grabs the data, reformats it and                                                                                    |
| 08:20      | transfers it and transforms it into a visual chart in another application.                                                                                               |
| 08:28      | And it does so with a really small amount of [[AppleScript]].                                                                                                            |
| 08:32      | And I thought, wow, this is a great example for showing the transformative power of automation.                                                                          |
| 08:40      | And that's what the script is.                                                                                                                                           |
| 08:43      | It starts off in numbers and it finds the table, extracts the data, stores the data,                                                                                     |
| 08:51      | then goes to keynote and runs a command for creating a chart and passing in the data that                                                                                |
| 08:57      | it had previously extracted.                                                                                                                                             |
| 08:59      | And that's the basic principle behind it.                                                                                                                                |
| 09:02      | And once you've saved it and installed it into the system-wide script menu, it's there                                                                                   |
| 09:08      | for you at any time.                                                                                                                                                     |
| 09:09      | So you can just select the script from the script menu and instantly the data from the                                                                                   |
| 09:16      | current table you're looking at turns into a chart in keynote.                                                                                                           |
| 09:21      | And then because you guys are my favourite people, I added two other scripts that you                                                                                    |
| 09:28      | can also use based on the same script where you can select a row or a column in the table                                                                                |
| 09:36      | and use that data from that row or that column and turn it into a pie chart.                                                                                             |
| 09:42      | So it's really useful.                                                                                                                                                   |
| 09:45      | And then you start realising, it just takes a small amount of effort to make this script                                                                                 |
| 09:51      | and to spend, what, 15 minutes to install it, create it, put it on your machine.                                                                                         |
| 09:57      | But then every time you use it, think of how much time that is saving you from having to                                                                                 |
| 10:03      | figure out how to grab that data from the table, how to go to keynote, how to create                                                                                     |
| 10:11      | the slide, how to create a chart, then how to populate the chart with the data that you                                                                                  |
| 10:17      | want, that could take an hour to do by hand.                                                                                                                             |
| 10:22      | And it gets done in a second using [[AppleScript]].                                                                                                                      |
| 10:27      | So that's really what's going on with this particular script.                                                                                                            |
| 10:31      | This script really reminds me of my Hallelujah moment with [[AppleScript]].                                                                                              |
| 10:35      | It was like I said, I was taking your course.                                                                                                                            |
| 10:37      | At the time, I was seriously considering getting into [[Xcode]], really going all in, because                                                                            |
| 10:44      | I used to program computers all the time, kind of fell off the wagon for a long time.                                                                                    |
| 10:48      | I thought it would be fun.                                                                                                                                               |
| 10:49      | I mean, the tools now in a lot of ways are easier than they used to be in a lot of ways                                                                                  |
| 10:52      | they're harder.                                                                                                                                                          |
| 10:53      | But I thought, but I also have a career and other things I want to do.                                                                                                   |
| 10:57      | And I know people that spend all of their time program computers, and it's a never-ending                                                                                |
| 11:01      | struggle.                                                                                                                                                                |
| 11:02      | But when I realised that with [[AppleScript]], I could take the fruits of others, I could                                                                                |
| 11:08      | take the work that the Omni Group does and that the Smile does on PDF pan and these                                                                                      |
| 11:12      | companies do, and I could glue them together in ways that I wanted them to work and make                                                                                 |
| 11:18      | them do stuff for me that the developers had never even dreamed of.                                                                                                      |
| 11:23      | All I had to do is learn [[AppleScript]].                                                                                                                                |
| 11:25      | That was like the moment for me when I realised, oh, this is where I need to spend my time,                                                                              |
| 11:29      | because I am a power user.                                                                                                                                               |
| 11:30      | I'm not a programmer.                                                                                                                                                    |
| 11:32      | And this stuff is great.                                                                                                                                                 |
| 11:33      | And that's why I love this script, because it takes two apps.                                                                                                            |
| 11:36      | Then you do the work in [[Numbers]], but it automatically creates the chart for you in [[Keynote]].                                                                      |
| 11:41      | And I can tell you, the [[Numbers]] team never had the idea of doing this.                                                                                               |
| 11:45      | It's not a feature you're ever going to find built into the application.                                                                                                 |
| 11:48      | But like we said, this is 17 lines of code and you do this.                                                                                                              |
| 11:53      | And it's [[AppleScript]], so it's not even that hard of code.                                                                                                            |
| 11:56      | It's easy to just understand.                                                                                                                                            |
| 11:59      | Could you walk us through just kind of, because let's assume people have taken our advice.                                                                               |
| 12:03      | They're looking at your code now on the website.                                                                                                                         |
| 12:05      | Just walk us through kind of the basics of what the point is of some of these lines in                                                                                   |
| 12:09      | here.                                                                                                                                                                    |
| 12:10      | Like for instance, the first line is tell application open quote numbers, close quote.                                                                                   |
| 12:15      | So that is a line that you're always going to see when you're addressing an application                                                                                  |
| 12:19      | in [[AppleScript]].                                                                                                                                                      |
| 12:20      | It just gets the ball rolling.                                                                                                                                           |
| 12:22      | It tells the computer where you're, you know, what sandbox you just jumped into.                                                                                         |
| 12:27      | Right.                                                                                                                                                                   |
| 12:28      | [[AppleScript]], when they came up with the idea for [[AppleScript]] a long time ago, before System                                                                      |
| 12:33      | 7, the thought was, is there a way that basically what the user's thinking, you could just have                                                                          |
| 12:43      | them write that down and the computer would understand that?                                                                                                             |
| 12:48      | It's kind of very close to the idea of natural language like Siri uses, where the user says,                                                                             |
| 12:55      | hey, you know, find me a grocery store nearby that sells fresh tomatoes.                                                                                                 |
| 13:03      | And somehow that gets understood and translated.                                                                                                                         |
| 13:06      | So the idea was, can you have a natural language that the user could write that would actually                                                                           |
| 13:12      | control the applications on the computer?                                                                                                                                |
| 13:16      | And [[AppleScript]] has an English-like syntax.                                                                                                                          |
| 13:19      | It's very close to English.                                                                                                                                              |
| 13:22      | There are a certain couple of things that are more stilted about it, but generally you                                                                                   |
| 13:28      | can say things that are what you're thinking of.                                                                                                                         |
| 13:33      | For example, I can say tell application finder to duplicate every file of the folder documents                                                                           |
| 13:42      | of home whose name contains Sparky to the desktop.                                                                                                                       |
| 13:48      | And it will do what I just said.                                                                                                                                         |
| 13:52      | Now on the computer, when you're dealing with [[AppleScript]], you need to tell the computer                                                                             |
| 13:57      | who you're talking to.                                                                                                                                                   |
| 14:00      | And in this particular case, we're talking to two applications, [[Numbers]] and [[Keynote]].                                                                             |
| 14:06      | So the first part of our script, lines one through 10, are dealing with the Numbers application.                                                                         |
| 14:14      | So when we have a multiple line script, we encase the statements that are dealing with                                                                                   |
| 14:22      | Numbers in a tell block.                                                                                                                                                 |
| 14:24      | And that means we're going to start off by telling application numbers.                                                                                                  |
| 14:30      | And that's a way of waking it up and saying, hey, we're going to be talking to you.                                                                                      |
| 14:35      | And then we give it all our various script statements.                                                                                                                   |
| 14:37      | And when we're done, we say end tell.                                                                                                                                    |
| 14:41      | So that just means that anything between the first line and line 10 is going to be targeted                                                                              |
| 14:47      | at the Numbers application.                                                                                                                                              |
| 14:49      | And that's called a tell block.                                                                                                                                          |
| 14:52      | There's two types of tells.                                                                                                                                              |
| 14:53      | A tell statement would be a one line script, tell application numbers to activate.                                                                                       |
| 15:01      | Tell block would be a multiple line script beginning with the targeted application and                                                                                   |
| 15:07      | ending with end tell.                                                                                                                                                    |
| 15:09      | So somebody wrote tell application numbers to activate.                                                                                                                  |
| 15:13      | What would happen?                                                                                                                                                       |
| 15:14      | That's a one line script.                                                                                                                                                |
| 15:15      | What happens when you do that?                                                                                                                                           |
| 15:17      | Then what happens is that gets translated into what they call Apple events.                                                                                              |
| 15:22      | There's an underlying architecture that [[AppleScript]] sits on top of.                                                                                                  |
| 15:27      | It's a messaging architecture called [[Apple Events]].                                                                                                                   |
| 15:30      | And it's a way for applications and the system to send messages to each other.                                                                                           |
| 15:35      | And what happens is the application numbers gets sent a message to start up and come forward.                                                                            |
| 15:43      | The word activate gets translated into that message, start up and come forward, become                                                                                   |
| 15:50      | the front most application.                                                                                                                                              |
| 15:52      | So it just pulls it forward and like people can organise their desktops with a couple                                                                                    |
| 15:57      | simple [[AppleScript]] commands.                                                                                                                                         |
| 15:58      | I mean, if you're ready to podcast, you can say tell application [[Skype]] to activate.                                                                                  |
| 16:05      | Tell application [[Safari]] to activate.                                                                                                                                 |
| 16:07      | And then you can even drive it to a certain web page so you could get your notes up.                                                                                     |
| 16:14      | I know people that do that.                                                                                                                                              |
| 16:16      | Tell application Safari to set the URL of the front window to macautomation.com.                                                                                         |
| 16:27      | And the great thing about this is there are dictionaries built into Mac OS and so many                                                                                   |
| 16:33      | applications like, for example, OmniFocus have a dictionary, which means that if you're                                                                                  |
| 16:38      | looking for language specific to controlling a certain application, you can find that it's                                                                               |
| 16:44      | right there in the documentation built into your Mac, which is really, really powerful.                                                                                  |
| 16:49      | So you can find out exactly what you can do with these things.                                                                                                           |
| 16:51      | And it's all explained there for you.                                                                                                                                    |
| 16:54      | Every application that is scriptable or will respond to the Apple events carries an internal                                                                             |
| 17:00      | dictionary that you can view and it tells you, these are my commands.                                                                                                    |
| 17:05      | These are what I understand.                                                                                                                                             |
| 17:07      | These are my objects like a document or a slide or text box or an image.                                                                                                 |
| 17:13      | And these are the properties that those objects have, like a height, a width, a colour.                                                                                  |
| 17:19      | And what you do with [[AppleScript]], it's very conversational, you take a set of verbs and                                                                              |
| 17:25      | you match them with the objects and properties.                                                                                                                          |
| 17:28      | So you could say, set the colour of the current box to blue.                                                                                                             |
| 17:33      | And you've created an [[AppleScript]] statement that is very much like an English-like sentence.                                                                         |
| 17:42      | So quite often with [[AppleScript]], you can read the code and understand exactly what it's                                                                              |
| 17:48      | doing, which is in contrast to other languages like [[Swift]] or [[Objective C]] or [[C++]] or stuff                                                                     |
| 17:57      | like that, where you have to really look at what's going on because things are typed                                                                                     |
| 18:03      | from the top down and you're trying to figure out, okay, what's really happening here?                                                                                   |
| 18:09      | What is this variable?                                                                                                                                                   |
| 18:10      | What's holding?                                                                                                                                                          |
| 18:11      | What's in that?                                                                                                                                                          |
| 18:12      | With [[AppleScript]], let's look at the second line here, tell the first table of the active                                                                             |
| 18:18      | sheet of the front document.                                                                                                                                             |
| 18:21      | So that means we're targeting a very specific object that's in the front document.                                                                                       |
| 18:28      | And you'll notice the word front, that indicates [[AppleScript]]'s way of saying the first item,                                                                         |
| 18:36      | the first document, and maybe a stack of documents.                                                                                                                      |
| 18:39      | On the Mac, we can have multiple documents open simultaneously.                                                                                                          |
| 18:44      | So [[AppleScript]] needs a way to indicate which one is the one you want to talk to.                                                                                     |
| 18:50      | And in this case, in the English language, we use the word front all the time.                                                                                           |
| 18:56      | If there's a row of people lining up, you can say, well, the first person or the front                                                                                   |
| 19:01      | person, the person at the front, please come forward.                                                                                                                    |
| 19:05      | And [[AppleScript]] uses that as well.                                                                                                                                   |
| 19:08      | So that means it's looking at, in the [[Numbers]] spreadsheet, it's looking at the front number                                                                          |
| 19:11      | spreadsheet.                                                                                                                                                             |
| 19:12      | It's just looking at the front sheet you have.                                                                                                                           |
| 19:14      | And if you had two and you had one behind it, you want to look from the one behind you                                                                                   |
| 19:18      | would change the word front to what?                                                                                                                                     |
| 19:20      | The second.                                                                                                                                                              |
| 19:21      | Yeah.                                                                                                                                                                    |
| 19:22      | Or you can even say the sheet behind the first sheet, if you wanted to.                                                                                                  |
| 19:28      | So I mean, there's a lot of ways to, in English, we use positional identification quite a bit.                                                                           |
| 19:34      | Well, the third person in the second row, please stand up, or you can use properties as a way                                                                            |
| 19:42      | of identifying.                                                                                                                                                          |
| 19:43      | You can say, well, everyone who has red hair, please stand up.                                                                                                           |
| 19:49      | There's different ways of identification.                                                                                                                                |
| 19:52      | And [[AppleScript]] incorporates those so that you don't have to know any particular programming                                                                         |
| 19:59      | construct to be able to target the object you want.                                                                                                                      |
| 20:02      | And that same thing happens again at the beginning of that line, too, where it says, tell the                                                                            |
| 20:08      | first table.                                                                                                                                                             |
| 20:10      | So if there's four tables on that spreadsheet or on that page, you're talking to the first                                                                               |
| 20:18      | one.                                                                                                                                                                     |
| 20:19      | And that's a way of identifying that.                                                                                                                                    |
| 20:21      | And you'll notice something else.                                                                                                                                        |
| 20:23      | In [[AppleScript]] to the world of [[AppleScript]], and basically the way the computers work,                                                                            |
| 20:29      | is everything belongs to or is contained in something else.                                                                                                              |
| 20:33      | For example, a word is contained in a sentence, which is contained in a paragraph, which is                                                                              |
| 20:40      | contained in a story.                                                                                                                                                    |
| 20:43      | A file is in a folder that's in a folder that's in another folder on a disk.                                                                                             |
| 20:49      | And that's the way things work on the computer.                                                                                                                          |
| 20:53      | And the way you identify something is by identifying its position in the chain of command.                                                                               |
| 21:00      | It's object hierarchy.                                                                                                                                                   |
| 21:01      | So we're looking at the first table of the active sheet of the front document.                                                                                           |
| 21:10      | It's like writing an address, you know, 123 Main Street, Cincinnati, Ohio, United States,                                                                                |
| 21:19      | Planet Earth.                                                                                                                                                            |
| 21:20      | Or the car keys in the drawer in the entry hall, you know.                                                                                                               |
| 21:26      | There you go.                                                                                                                                                            |
| 21:27      | You've described a containment, what it's called a containment hierarchy.                                                                                                |
| 21:33      | And that's how you identify things.                                                                                                                                      |
| 21:35      | And when you put the word tell before it, it's the way of telling the computer that                                                                                      |
| 21:41      | this is the guy that's going to be doing what I need to do.                                                                                                              |
| 21:45      | In the first two lines, we've used two tell statements.                                                                                                                  |
| 21:47      | The first to say, this is the application we're talking to.                                                                                                              |
| 21:52      | And the second one to say, this is the particular object that we're talking to a table, a very                                                                           |
| 21:57      | specific table.                                                                                                                                                          |
| 21:59      | And then you do something with it.                                                                                                                                       |
| 22:01      | And then you do something with it.                                                                                                                                       |
| 22:04      | And then what do we do with it is the next three lines in our script where it says set                                                                                   |
| 22:09      | the column titles to the formatted value of cells two through minus one of the first row                                                                                 |
| 22:16      | of the cell range.                                                                                                                                                       |
| 22:18      | And what happens there is we're describing a range of cells in a row.                                                                                                    |
| 22:24      | So for example, our particular table has a header row and a header column.                                                                                               |
| 22:32      | So we want the data from the table, not the header row.                                                                                                                  |
| 22:36      | And so that's why we're saying cells two through minus one.                                                                                                              |
| 22:41      | And minus one is just a programming way of saying the last guy in the row.                                                                                               |
| 22:47      | Instead of putting in the words last guy in the row there, we're saying cells two through                                                                                |
| 22:51      | minus one of the first row of the cell range.                                                                                                                            |
| 22:56      | And cell range is a property of the table that is a list of positions.                                                                                                   |
| 23:02      | So you don't even have to know this is cell A1C or cell 3B2 or whatever.                                                                                                 |
| 23:10      | You just talk to the cell range and ask AppleScript to find it and it will do that for you.                                                                              |
| 23:18      | This episode of Automators is brought to you by TextExpander from Smile.                                                                                                 |
| 23:22      | TextExpander multiplies your team's productivity, making up-to-date shared knowledge available                                                                           |
| 23:27      | instantly to everybody.                                                                                                                                                  |
| 23:29      | Using TextExpander, you can make sure your team's common responses are easily accessible                                                                                 |
| 23:34      | and searchable and can be used with simple abbreviations and keyboard shortcuts.                                                                                         |
| 23:38      | Your best writers can write and edit those responses and everybody on any platform, macOS,                                                                               |
| 23:44      | iOS, Windows and the web, can use these snippets immediately everywhere and any update is put                                                                            |
| 23:51      | through instantly.                                                                                                                                                       |
| 23:52      | If you're on a team, TextExpander will change your working life and leave more time for                                                                                  |
| 23:56      | what you do best.                                                                                                                                                        |
| 23:58      | Larger teams can even benefit from single sign-on and grouping accounts, which includes                                                                                  |
| 24:03      | identity providers like Octa, OneLogin and G Suite, which reduces the amount of time it                                                                                  |
| 24:08      | takes to onboard new users or a large number of users at the beginning.                                                                                                  |
| 24:14      | Visit TextExpander.com/podcast to learn more about TextExpander and don't forget to                                                                                      |
| 24:19      | tell them that you heard about it on Automators.                                                                                                                         |
| 24:22      | Our thanks to TextExpander from Smile for their support of this show.                                                                                                    |
| 24:27      | So the cell range, is that a part of the library entry for numbers?                                                                                                      |
| 24:31      | Is that correct?                                                                                                                                                         |
| 24:32      | Exactly correct.                                                                                                                                                         |
| 24:33      | If you look in the dictionary for numbers, if you're in [[Script Debugger]] or the script editor                                                                         |
| 24:39      | and you choose to open dictionary and you can view the entire dictionary of every term                                                                                   |
| 24:45      | that [[Numbers]] knows and every object and all the values, the cell range is a property of                                                                              |
| 24:53      | a table.                                                                                                                                                                 |
| 24:55      | And it just means, you know, what you have selected is identifiable by a certain range.                                                                                  |
| 25:02      | If you've ever used [[Microsoft Excel\|Excel]], you'll notice that, you know, when you select something, it'll                                                           |
| 25:07      | tell you, you selected B4 to Q16 and that identifies what is called the cell range.                                                                                      |
| 25:16      | And that's a property in [[AppleScript]] for table and numbers.                                                                                                          |
| 25:21      | So what happens in line two is we're getting the formatted value, which it means, give                                                                                   |
| 25:27      | it to me nicely with the period 00 or whatever is being used or dollar sign or whatever.                                                                                 |
| 25:35      | Give me that and then we're going to store it in a container called column titles.                                                                                       |
| 25:40      | We're making a, what is called a variable and variables are just basically bottles or                                                                                    |
| 25:46      | bowls that you hold stuff in temporarily while you're using it in the script.                                                                                            |
| 25:52      | And the way that you create a variable is very simple.                                                                                                                   |
| 25:57      | You just make up a word that [[AppleScript]] doesn't know or that's not part of the application's                                                                        |
| 26:02      | dictionary and it looks at it and it goes, oh, that's a container.                                                                                                       |
| 26:07      | So I took two words and jammed them together.                                                                                                                            |
| 26:11      | I made them intercapped or [[Camel case]] column titles.                                                                                                                 |
| 26:15      | And that's the name of my variable and it's going to hold all of the data that was extracted                                                                             |
| 26:21      | by my request to get the content of the first row of the cell range.                                                                                                     |
| 26:29      | Then the next line in the script does the same thing and it gets the first column of                                                                                     |
| 26:36      | the cell range.                                                                                                                                                          |
| 26:37      | So what I'm doing in those first two line two, line two, three, sorry, line three and                                                                                    |
| 26:44      | line four is I'm getting the headers.                                                                                                                                    |
| 26:47      | I'm getting the column titles and I'm getting the row titles.                                                                                                            |
| 26:51      | Yeah, because your [[Keynote]] table needs titles and you're just grabbing the variables.                                                                                |
| 26:55      | Yes.                                                                                                                                                                     |
| 26:56      | Right.                                                                                                                                                                   |
| 26:57      | I want to keep those and I identify them because I know where they are.                                                                                                  |
| 27:00      | They're the header ones.                                                                                                                                                 |
| 27:01      | So they're the first row or the first column are your header columns.                                                                                                    |
| 27:07      | And so the first two lines of doing something, line three and four, is basically extracting                                                                              |
| 27:13      | that information.                                                                                                                                                        |
| 27:15      | And that's really remarkable when you think about it that one line of [[AppleScript]] will                                                                               |
| 27:19      | give me the contents of all of that row automatically in a nice list of strings or text names, whatever                                                                  |
| 27:28      | the column names or the row editors are, it's going to return those as a nice list of strings.                                                                           |
| 27:35      | And I store both of those in my variables column titles and row titles.                                                                                                  |
| 27:40      | Then the next line, I begin, I want to get the data for the table, all those numbers                                                                                     |
| 27:48      | that are in that table.                                                                                                                                                  |
| 27:49      | And so I make an empty container that's going to hold a list of values.                                                                                                  |
| 27:56      | And I do that, I call table data, I make up a word that [[AppleScript]] doesn't know and                                                                                 |
| 28:02      | it looks at it and says, oh, that's a container.                                                                                                                         |
| 28:04      | And I give it a value of an empty container.                                                                                                                             |
| 28:07      | That's in some programming languages, that's called an array, in [[AppleScript]] you call                                                                                |
| 28:13      | lists, but they're basically anything within curly braces that is separated by commas is                                                                                 |
| 28:21      | a list.                                                                                                                                                                  |
| 28:22      | And so I created an empty list and a variable that's going to hold the data that I'm going                                                                               |
| 28:28      | to extract from the table.                                                                                                                                               |
| 28:30      | Does that make sense so far?                                                                                                                                             |
| 28:32      | Yes, definitely.                                                                                                                                                         |
| 28:33      | Yeah.                                                                                                                                                                    |
| 28:34      | So the tip I would like to give people is when you use, you can do this in [[Script Debugger]]                                                                           |
| 28:39      | or in [[Script Editor]].                                                                                                                                                 |
| 28:40      | In [[Script Editor]], there's a hammer icon and in [[Script Debugger]], it's the compile button.                                                                         |
| 28:45      | Once you click that, it does syntax highlighting, which for people who don't know, basically                                                                             |
| 28:49      | it makes certain words special colours to help you figure out what they mean.                                                                                            |
| 28:53      | And the variables are always green in both of these.                                                                                                                     |
| 28:56      | They actually use the same syntax highlighting, which is really nice.                                                                                                    |
| 28:59      | And that's really helpful for trying to figure things out so you can follow what you're doing                                                                            |
| 29:03      | quite easily.                                                                                                                                                            |
| 29:04      | Exactly.                                                                                                                                                                 |
| 29:05      | In this particular one, you'll notice that the properties of objects I made like this                                                                                    |
| 29:11      | light blue active sheet formatted value.                                                                                                                                 |
| 29:15      | And then the positional ones I made like a greenish, like first, yeah, the word first                                                                                    |
| 29:22      | and front are that.                                                                                                                                                      |
| 29:24      | And then things that are objects I made like an orange, like document, cells, rows.                                                                                      |
| 29:30      | So you can begin to see, oh, this is an object and this is the property of that object and                                                                               |
| 29:35      | this is the value of that.                                                                                                                                               |
| 29:39      | And we put them together.                                                                                                                                                |
| 29:41      | Okay.                                                                                                                                                                    |
| 29:42      | So the next thing we're going to do is line six through eight.                                                                                                           |
| 29:46      | It's only a three lines and it's a repeat loop.                                                                                                                          |
| 29:50      | And the repeat loop means you're going to perform some kind of action multiple times                                                                                     |
| 29:57      | each time with a different object.                                                                                                                                       |
| 30:00      | And in this case, we're going to go through each one of the rows.                                                                                                        |
| 30:07      | We have three rows of data.                                                                                                                                              |
| 30:09      | So the first time we're going to go through row two and then next time is row three, next                                                                                |
| 30:14      | time is row four of data.                                                                                                                                                |
| 30:18      | And then we're going to extract the data from those rows.                                                                                                                |
| 30:21      | That's basically what's going to happen.                                                                                                                                 |
| 30:23      | So that's why we're saying repeat with a I and in this case, I is just a container.                                                                                      |
| 30:31      | Although that is a word I in AppleScript, it's not a word.                                                                                                               |
| 30:36      | So it looks at it as a container.                                                                                                                                        |
| 30:39      | It's called a loop counter and it basically it's just going to each time the loop occurs,                                                                                |
| 30:46      | it's going to have a value indicating the loop that it's going through.                                                                                                  |
| 30:53      | And that loop counter is going to be from two to the count of rows.                                                                                                      |
| 30:58      | So I'm asking AppleScript to count how many rows there are and start at the second one                                                                                   |
| 31:04      | and go to the end.                                                                                                                                                       |
| 31:05      | So if there's five rows and it starts at the second, it's going to do two, three, four                                                                                   |
| 31:11      | and five.                                                                                                                                                                |
| 31:12      | If there's four rows, it's going to start the second and go two, three and four.                                                                                         |
| 31:18      | And each time I will have that value of two, three or four.                                                                                                              |
| 31:23      | The line in between, you'll notice that the repeat is follows of the same kind of construct                                                                              |
| 31:29      | that we have with a tell block where you begin a tell and you end to tell with a repeat loop,                                                                            |
| 31:35      | you begin the repeat.                                                                                                                                                    |
| 31:37      | And then there's an end repeat that indicates to the computer that this is where I'm stopping                                                                            |
| 31:44      | the repeat.                                                                                                                                                              |
| 31:45      | So let's just do anything in between those two lines.                                                                                                                    |
| 31:49      | And in this case, we only have one operation we're doing.                                                                                                                |
| 31:53      | It's line seven.                                                                                                                                                         |
| 31:55      | And it says set the end of the table data to the value of cells two through minus one                                                                                    |
| 32:03      | of row I.                                                                                                                                                                |
| 32:05      | And let's look at that.                                                                                                                                                  |
| 32:07      | Set the end of the table data.                                                                                                                                           |
| 32:10      | It's your appending information to a list.                                                                                                                               |
| 32:14      | So if I have a list and my list has three things on it, and I want to add something                                                                                      |
| 32:19      | to the end of the list, this is how you do it in AppleScript.                                                                                                            |
| 32:22      | You say set the end of this list, table data, to the value of cells two through minus one.                                                                               |
| 32:33      | Remember minus one is just in programming a fancy way of saying the last item, the last                                                                                  |
| 32:39      | row, the last column.                                                                                                                                                    |
| 32:42      | Cells two through minus one, the last cell, of row I.                                                                                                                    |
| 32:46      | And remember I is our loop counter.                                                                                                                                      |
| 32:49      | So each time it's going to be either two, three, or four.                                                                                                                |
| 32:53      | So if this was the second, the first time this loop ran, it would say set the end of                                                                                     |
| 32:59      | the table data to the value of cells two through minus one of row two.                                                                                                   |
| 33:04      | Then to do the same thing again, say row three, and then to do the row four.                                                                                             |
| 33:09      | And what is happening is each time we're doing this, our list gets added to, our table data                                                                              |
| 33:15      | container gets added to, and then we end up with nice three sections in there of multiple                                                                                |
| 33:22      | lists within our table data variable.                                                                                                                                    |
| 33:27      | So you could actually do the same thing, but say set the beginning, right?                                                                                               |
| 33:31      | If you needed to flip your data for whatever reason.                                                                                                                     |
| 33:34      | Exactly.                                                                                                                                                                 |
| 33:35      | You can use the word beginning.                                                                                                                                          |
| 33:37      | AppleScript understands that.                                                                                                                                            |
| 33:40      | In AppleScript, the index of the first item in a list is one.                                                                                                            |
| 33:46      | In JavaScript, they use a zero index.                                                                                                                                    |
| 33:50      | So the first item is zero, item zero.                                                                                                                                    |
| 33:53      | But AppleScript is more English-like, and in English we don't go, will the zero person                                                                                   |
| 34:00      | please stand up?                                                                                                                                                         |
| 34:01      | We say, well, the first person stand up.                                                                                                                                 |
| 34:03      | So AppleScript uses the one as the index for the first value of a list or an array.                                                                                      |
| 34:12      | And end is identified to show where you're going to be appending the data to instead                                                                                     |
| 34:18      | of beginning or the end.                                                                                                                                                 |
| 34:19      | You could also say middle.                                                                                                                                               |
| 34:22      | AppleScript uses a lot of positional indicators that are just normal English language.                                                                                   |
| 34:30      | And so then the other, once we've closed off our repeat and we close the Intel for the                                                                                   |
| 34:38      | block talking to the table, and then Intel for the application, we've completed the conversation                                                                         |
| 34:44      | with numbers.                                                                                                                                                            |
| 34:46      | And what we have to show for it are three containers, one called column titles that                                                                                      |
| 34:51      | held all of the titles of the columns.                                                                                                                                   |
| 34:55      | We have row title container that contains the column names, the column titles contains                                                                                   |
| 35:03      | the row column names.                                                                                                                                                    |
| 35:06      | And then we have table data that contains the information pulled out of the cells.                                                                                       |
| 35:11      | So we have all, we've cleaned out our table, we've extracted what we need, and we have                                                                                   |
| 35:17      | it in three containers that we can now use with another application.                                                                                                     |
| 35:23      | That's a great thing about [[AppleScript]] is that it makes it easy to transfer data between                                                                             |
| 35:29      | applications.                                                                                                                                                            |
| 35:30      | You don't have to write that data to disk or you don't have to put the data in some                                                                                      |
| 35:35      | other file and then go get it again.                                                                                                                                     |
| 35:38      | In [[AppleScript]], you could just hold it in memory and then switch applications that you're                                                                            |
| 35:44      | talking to and go to the second application and use that data, which is what we'll be                                                                                    |
| 35:49      | doing here.                                                                                                                                                              |
| 35:51      | So next we go over to [[Keynote]].                                                                                                                                       |
| 35:53      | Exactly.                                                                                                                                                                 |
| 35:54      | So lines 12 through 17 through the end of the script, we now have our data from the                                                                                      |
| 36:00      | table and now we're ready to do something with that in [[Keynote]].                                                                                                      |
| 36:04      | And if we were in front of the script editor or in front of [[Script Debugger]] and we opened                                                                            |
| 36:09      | up the dictionary for [[Keynote]], you'll see that not only does [[Keynote]] have an extensive                                                                           |
| 36:15      | scripting dictionary where it talks about documents and slides and transitions and templates                                                                             |
| 36:22      | and all the different things that [[Keynote]] does, it also has sets of commands.                                                                                        |
| 36:30      | Commands are verbs like make, print, close, quit, open, and then there are some specialised                                                                              |
| 36:42      | commands for each application that are commands that just that application does itself.                                                                                  |
| 36:48      | Like an application like [[TextEdit]] would not understand the word rotate that [[Photoshop]]                                                         |
| 36:55      | would use.                                                                                                                                                               |
| 36:57      | So if you were scripting [[Photoshop\|Adobe Photoshop]], you would use the word rotate maybe sometimes                                                                              |
| 37:02      | if you were adjusting your images.                                                                                                                                       |
| 37:05      | But [[TextEdit]] doesn't really understand what rotate means and it wouldn't have that as                                                                                |
| 37:11      | a command.                                                                                                                                                               |
| 37:12      | So that would be a command specific to that application.                                                                                                                 |
| 37:16      | There are some commands that are common to all applications like open, close, quit, print,                                                                               |
| 37:21      | things like that.                                                                                                                                                        |
| 37:23      | But in this case, the command on line 14 is add chart.                                                                                                                   |
| 37:29      | So [[Keynote]] has a command just for creating charts.                                                                                                                   |
| 37:34      | And we can address that command and use it to target a specific slide.                                                                                                   |
| 37:40      | So line 12 begins our talking to [[Keynote]].                                                                                                                            |
| 37:45      | We're saying tell application Keynote, hello.                                                                                                                            |
| 37:48      | And we begin with the tell block and we end with the tell block at line 17 and anything                                                                                  |
| 37:53      | in between is talking to [[Keynote]].                                                                                                                                    |
| 37:57      | Then we're going to talk to a specific object in that [[Keynote]].                                                                                                       |
| 38:03      | And it's going to be the current slide of the front document.                                                                                                            |
| 38:06      | Now what does current slide mean?                                                                                                                                        |
| 38:09      | Current slide is a property of the document in [[Keynote]].                                                                                                                  |
| 38:14      | And it just means which slide you have selected in the interface.                                                                                                        |
| 38:18      | That's the current slide.                                                                                                                                                |
| 38:20      | So whatever slide the user currently has selected, we're going to be addressing it.                                                                                      |
| 38:26      | So tell the current slide of the front document.                                                                                                                         |
| 38:28      | So if I have two [[Keynote]] documents open, it's the one that's on top of the other one.                                                                                    |
| 38:34      | And I'm going to talk to the current slide.                                                                                                                              |
| 38:37      | And then in between the actual command is on line 14 and 15.                                                                                                             |
| 38:43      | It's actually one line, but I couldn't fit it on one line in the page.                                                                                                   |
| 38:49      | So there's a character at the end of line 14 that looks like a line with a little squiggly                                                                               |
| 38:54      | going down.                                                                                                                                                              |
| 38:56      | That means that's a wrap character.                                                                                                                                      |
| 38:59      | It means that it's an option L. And it means that this is actually the next line is actually                                                                             |
| 39:05      | part of the script statement.                                                                                                                                            |
| 39:08      | But for convenience purposes, I'm wrapping it to the next line so that we can see it                                                                                     |
| 39:14      | easier.                                                                                                                                                                  |
| 39:15      | So the command on line 14 is actually one long statement.                                                                                                                |
| 39:21      | And it is this.                                                                                                                                                          |
| 39:22      | Add chart.                                                                                                                                                               |
| 39:24      | And then the first parameter for our command, it needs to know what are your row names for                                                                               |
| 39:31      | the chart.                                                                                                                                                               |
| 39:33      | And that's the parameter.                                                                                                                                                |
| 39:35      | Row names, two words.                                                                                                                                                    |
| 39:37      | And I give it that value of row titles, my container.                                                                                                                    |
| 39:42      | So the first parameter of the add chart command is row names.                                                                                                            |
| 39:46      | I pass that my container that contains the row titles.                                                                                                                   |
| 39:51      | Then the second parameter for the command is column names.                                                                                                               |
| 39:56      | And I pass it the container that is holding the column titles.                                                                                                           |
| 40:02      | I say column titles.                                                                                                                                                     |
| 40:04      | And then the third parameter is data.                                                                                                                                    |
| 40:08      | And I pass it the container that is holding the table data.                                                                                                              |
| 40:12      | Then the next parameter is type.                                                                                                                                         |
| 40:15      | What kind of chart do you want to make?                                                                                                                                  |
| 40:18      | And you'll notice in purple, there's something called vertical underscore bar underscore                                                                                 |
| 40:24      | 2D.                                                                                                                                                                      |
| 40:26      | In the keynote dictionary, they have a textual representation of each one of the possible                                                                                |
| 40:34      | charts.                                                                                                                                                                  |
| 40:36      | And that's what they use for the representation for a vertical bar chart that's 2D, not 3D.                                                                              |
| 40:43      | And I would imagine if you went in that code and changed the 2 to 3, you probably got a                                                                                  |
| 40:47      | 3D chart.                                                                                                                                                                |
| 40:49      | You probably get a 3D chart.                                                                                                                                             |
| 40:51      | You do.                                                                                                                                                                  |
| 40:52      | I just tested it.                                                                                                                                                        |
| 40:53      | Yes, there you go.                                                                                                                                                       |
| 40:55      | And then the last parameter is how do you want this data grouped by?                                                                                                     |
| 40:59      | And I don't know if you've done a lot of charts, but there's an axis.                                                                                                    |
| 41:03      | So you can say I want to group by the column or by the row is really what it is.                                                                                         |
| 41:08      | So grouped by is the parameter.                                                                                                                                          |
| 41:11      | And the value for that is chart row.                                                                                                                                     |
| 41:14      | So I want my column, I want my bar chart to be grouped by the row value.                                                                                                 |
| 41:24      | Because it will invert it for you if you want to.                                                                                                                        |
| 41:27      | And you can always, as you see in the video at the end of this page, I go in and I switch                                                                                |
| 41:32      | the axis to show how that data can be transformed easily within the document itself.                                                                                     |
| 41:40      | So then we close off our tell blocks on the last two lines.                                                                                                              |
| 41:44      | We're finished talking to the current slide and we finished talking to [[Keynote]].                                                                                      |
| 41:49      | And that's it.                                                                                                                                                           |
| 41:50      | In that 17 lines, we have addressed the numbers application, found a specific table, extracted                                                                           |
| 41:58      | the headers, extracted the table data, then addressed [[Keynote]], found the current document,                                                                           |
| 42:05      | the current slide in the front document, and then converted that data into a chart.                                                                                      |
| 42:13      | All within 17 lines of [[AppleScript]] and it happens in a fraction of a second when you                                                                                 |
| 42:18      | actually run it.                                                                                                                                                         |
| 42:20      | That's pretty amazing.                                                                                                                                                   |
| 42:21      | It is.                                                                                                                                                                   |
| 42:22      | And just imagine if you had to go to your boss every Wednesday and give a presentation                                                                                   |
| 42:26      | and you had to incorporate a chart and you had the date already.                                                                                                         |
| 42:30      | Running this [[AppleScript]] automates that process for you.                                                                                                             |
| 42:34      | And this is just a jumping off point.                                                                                                                                    |
| 42:35      | We've given you the code, sales written, you can download it and use it as is.                                                                                           |
| 42:39      | Or you can start changing the chart types.                                                                                                                               |
| 42:41      | Or you can start, just go in there and start fiddling with it.                                                                                                           |
| 42:45      | You can always redownload it if it breaks.                                                                                                                               |
| 42:47      | And you're doing [[AppleScript]] at that point.                                                                                                                          |
| 42:50      | That's the beauty of this.                                                                                                                                               |
| 42:52      | I learned all this [[AppleScript]] from Sal.                                                                                                                             |
| 42:54      | I don't think I've written a few of any scripts from scratch by myself or I just started line                                                                            |
| 43:02      | one with a blank cursor because so much of the stuff is out there.                                                                                                       |
| 43:05      | You can download it and start modifying it to make it work for you.                                                                                                      |
| 43:08      | Exactly.                                                                                                                                                                 |
| 43:09      | You don't really need to sit down and learn all of these words and how it all works.                                                                                     |
| 43:13      | And obviously, it's a really powerful tool and if you're ready to get into the stuff                                                                                     |
| 43:18      | you can, but also, Sal's just given you everything that you can download and run it.                                                                                     |
| 43:22      | You don't need to necessarily understand it, obviously try to, but it's really useful                                                                                    |
| 43:27      | as it is.                                                                                                                                                                |
| 43:28      | If you go to [iWork Automation](http://iworkautomation.com), which is linked off of the macOS automation main page, it's                                                 |
| 43:36      | an entire site for just scripting the [[iWork]] suite of applications.                                                                                                   |
| 43:41      | And this script is actually part of the keynote section under it or under the numbers section.                                                                           |
| 43:49      | Sorry.                                                                                                                                                                   |
| 43:50      | It's under the numbers section.                                                                                                                                          |
| 43:52      | There's on the right hand side, it says exporting to keynote.                                                                                                            |
| 43:57      | There's a couple examples there and they explain how the script works.                                                                                                   |
| 44:03      | So there's hundreds and hundreds of scripts available for you just dealing with iWork                                                                                    |
| 44:10      | on the iWork Automation website as well.                                                                                                                                 |
| 44:13      | And once you've used one of these, it's like David said, it's easy to understand what's                                                                                  |
| 44:20      | going on and use bits and pieces of things that you've seen or other people use or provided                                                                              |
| 44:26      | and put them together in creative ways to do what you want to do with the computer.                                                                                      |
| 44:32      | Yeah.                                                                                                                                                                    |
| 44:33      | You know, we released this show on Friday for a reason because the goal is that our                                                                                      |
| 44:36      | listeners will spend the weekend kind of learning whatever new automation we talked about.                                                                               |
| 44:42      | If you go to this macOS automation.com site, I recommend having some vacation time stored                                                                                |
| 44:47      | up because it is a rabbit hole.                                                                                                                                          |
| 44:50      | There's so much great stuff.                                                                                                                                             |
| 44:52      | If you want to automate your photos application, I mean, honestly, a lot of this stuff is going                                                                          |
| 44:56      | to be future content for our show.                                                                                                                                       |
| 44:57      | We're going to talk about some of these automations, but there's so much stuff here that Sal has                                                                         |
| 45:02      | put together at [macosxautomation.com](https://macosxautomation.com) and just go take a look and I'm sure you're going to                                                |
| 45:06      | find something you would like to play with.                                                                                                                              |
| 45:09      | And because it's all there, you can download it, you can go ahead and break it and then                                                                                  |
| 45:14      | fix it.                                                                                                                                                                  |
| 45:15      | And before you know it, you're programming and that's the beauty of this stuff.                                                                                          |
| 45:19      | Yes.                                                                                                                                                                     |
| 45:20      | And if anybody makes any tweaks to the original AppleScript to make it work for them, please                                                                             |
| 45:25      | post it in the forum so that everybody else can steal it because this is an amazing way                                                                                  |
| 45:30      | to get started.                                                                                                                                                          |
| 45:32      | So please, please share what tweaks you make to make it yours.                                                                                                           |
| 45:36      | To borrow a great idea that Apple has of everybody can code.                                                                                                             |
| 45:41      | Well, I think we can even go a step before that.                                                                                                                         |
| 45:45      | Everybody can script.                                                                                                                                                    |
| 45:46      | You know, it's coding and it uses the same kind of concepts of understanding objects                                                                                     |
| 45:52      | and it uses the same ideas about repeating and extracting and manipulating and empowering.                                                                               |
| 46:02      | And scripting is a great way to get yourself into the idea of that the power of the computer                                                                             |
| 46:10      | should reside in the hands of the one using it, that this is there for you.                                                                                              |
| 46:16      | This is built into this computer.                                                                                                                                        |
| 46:19      | It's built into the Apple software.                                                                                                                                      |
| 46:21      | It's built into third party software and it's waiting for you to just spend a little bit                                                                                 |
| 46:28      | of time to take advantage of it.                                                                                                                                         |
| 46:30      | Yeah, we were talking before we start recording how it feels like there's a little bit of                                                                                |
| 46:35      | a wave building on automation between Siri shortcuts and things going on.                                                                                                |
| 46:39      | And honestly, we started developing the show months before any of that stuff got announced.                                                                              |
| 46:43      | So we just got lucky, I guess.                                                                                                                                           |
| 46:45      | But how do you see, Sal, as someone who's so knowledgeable about [[AppleScript]] and [[JavaScript]]                                                                      |
| 46:52      | and worked for Apple for so long, how do you see all this fitting together with the Siri                                                                                 |
| 46:58      | shortcuts and the stuff that Apple is now bringing to the forefront?                                                                                                     |
| 47:04      | Automation is a fundamental thing about computers and not only computers, but just humans.                                                                               |
| 47:11      | As humans, we've always looked for ways to automate what we do.                                                                                                          |
| 47:16      | It's just a natural instinct.                                                                                                                                            |
| 47:19      | It's what makes us human.                                                                                                                                                |
| 47:22      | It's what makes us creative.                                                                                                                                             |
| 47:23      | It's what inspires us.                                                                                                                                                   |
| 47:26      | And so that's never going to go away from the computer.                                                                                                                  |
| 47:30      | And it's one of the things that attracts us to Macs is that it's always been a device                                                                                    |
| 47:35      | that allows us to explore and create with our own tool sets that we make ourselves.                                                                                      |
| 47:43      | And one of the interesting things that's happening is that this world is coming to iOS too, with                                                                         |
| 47:50      | groups like software developers like the Omni Group, who have implemented core [[JavaScript]]                                                                            |
| 47:59      | as a scripting language for their applications like [[OmniGraffle]] and [[OmniOutliner]] on iOS, you're                                                                  |
| 48:06      | starting to see the same kind of creative pallet that you had on the Mac.                                                                                                |
| 48:13      | You're starting to see that happen on iOS, and then you have applications like [[Drafts]]                                                                                |
| 48:20      | or 1Writer that support core [[JavaScript]] as well and expose their apps and functionality                                                                              |
| 48:29      | and a lot of these apps are now using URLs as a communication path instead of Apple events.                                                                              |
| 48:40      | They're using URLs because that's what's available currently on iOS.                                                                                                     |
| 48:46      | And I think that what you're seeing in the sense of the wave building, your instincts                                                                                    |
| 48:52      | are right on, David and Rose, your instincts are right on is you're sensing that there's                                                                                 |
| 48:57      | a wave happening and I really believe it is because that same ability is coming to that                                                                                  |
| 49:04      | platform and it's also being shared across both platforms.                                                                                                               |
| 49:09      | What Omni has done is they've implemented an automation solution through Omni Automation                                                                                 |
| 49:16      | that works both on Macs and iOS exactly the same way.                                                                                                                    |
| 49:21      | You write the same script that runs on both platforms the same.                                                                                                          |
| 49:26      | And I think that that's the beginning of a new wave of automation, a new wave of user                                                                                    |
| 49:32      | empowerment, and I think that's coming.                                                                                                                                  |
| 49:35      | And it's really important for Apple to be part of that as well.                                                                                                          |
| 49:42      | I think that Apple wants to grow their platform, especially in the enterprise and education                                                                              |
| 49:49      | markets, and I'll bet you as more automation comes to iOS that you're going to see an increase                                                                           |
| 49:55      | in sales in the enterprise because all of a sudden now you can make that device yours.                                                                                   |
| 50:02      | You can create a set of tools that your team or your staff use that solve those problems                                                                                 |
| 50:09      | and freeze them from drudgery and allows them to be as productive as they can be for you.                                                                                |
| 50:17      | And I think that Apple senses that too as well.                                                                                                                          |
| 50:21      | I'm looking at the changes that they made in Mojave and I'm looking at what they're                                                                                      |
| 50:26      | doing with iOS 12 and Siri shortcuts and I'm going, mm-hmm, it's part of it.                                                                                             |
| 50:33      | They're embracing this and I bet you it's going to reward Apple with increased sales,                                                                                    |
| 50:39      | increased loyalty, increased excitement about their products again.                                                                                                      |
| 50:44      | And once you get that excitement going, it's infectious.                                                                                                                 |
| 50:48      | Apple love to share the tools that they've created.                                                                                                                      |
| 50:51      | They love to make productivity things and then share that with their team or share that                                                                                  |
| 50:57      | with other individuals.                                                                                                                                                  |
| 50:59      | And Rose, you're a great example of that.                                                                                                                                |
| 51:02      | Thank you.                                                                                                                                                               |
| 51:03      | Yes, it's really exciting.                                                                                                                                               |
| 51:04      | I was watching the keynote and I was like, they mentioned [[Automator]] on stage.                                                                                        |
| 51:09      | Are you kidding me?                                                                                                                                                      |
| 51:10      | They mentioned [[Automator]] on stage and yeah, I was there freaking out a little bit and                                                                                |
| 51:15      | a couple of people at [[AltConf]] were looking at me like I was a bit crazy.                                                                                             |
| 51:19      | It's like, no, it's fine.                                                                                                                                                |
| 51:20      | Seriously, this is good stuff.                                                                                                                                           |
| 51:21      | Yeah.                                                                                                                                                                    |
| 51:22      | I'm like, [[Automator]], [[Automator]], you could use [[AppleScript]].                                                                                                   |
| 51:24      | It's like, yes, but [[Automator]] is a very good starting point.                                                                                                         |
| 51:27      | I can tell you that [[Automator]] and [[AppleScript]] have been part of every Apple keynote.                                                                             |
| 51:34      | They run in the background.                                                                                                                                              |
| 51:37      | When all of a sudden an email comes in from Tim or something, that just doesn't happen                                                                                   |
| 51:41      | by magic.                                                                                                                                                                |
| 51:42      | Yeah.                                                                                                                                                                    |
| 51:43      | Or when all of a sudden, Craig walks up to the machine and it's perfectly set up for                                                                                     |
| 51:49      | this particular demo, there's a reason behind that.                                                                                                                      |
| 51:54      | And Apple uses automation to a high degree like any other large company.                                                                                                 |
| 52:00      | I mean, 80% of top tier companies that have a lot of computers use automation, they rely                                                                                 |
| 52:08      | on it.                                                                                                                                                                   |
| 52:09      | You can't make charts by hand.                                                                                                                                           |
| 52:11      | You have to automate that process.                                                                                                                                       |
| 52:13      | You can't produce content by hand, especially if you're doing huge websites with lots of                                                                                 |
| 52:20      | images and media materials.                                                                                                                                              |
| 52:22      | That's got to be automated.                                                                                                                                              |
| 52:24      | It's the only way to, through automation, you get speed, accuracy, consistent output                                                                                     |
| 52:30      | and scalability.                                                                                                                                                         |
| 52:31      | And there's no other way to do that besides just throw bodies at something.                                                                                              |
| 52:37      | And then you're dealing with the normal problems of dealing with humans.                                                                                                 |
| 52:43      | And you're not using them to their best potential and you burn people out.                                                                                               |
| 52:47      | And that's not what you want to be about as an organisation.                                                                                                             |
| 52:50      | You want to be an organisation that leads and inspires.                                                                                                                  |
| 52:54      | And automation plays a big role in that.                                                                                                                                 |
| 52:57      | And if there's a mission statement for this podcast, it's that you don't need to be a                                                                                    |
| 53:01      | big company to take advantage of that.                                                                                                                                   |
| 53:03      | These tools are easy enough that anybody can do it.                                                                                                                      |
| 53:06      | I've got to feel like I just hit you guys over the head with a Nerf bat, right?                                                                                          |
| 53:11      | Definitely, yes.                                                                                                                                                         |
| 53:14      | Anybody can get started.                                                                                                                                                 |
| 53:15      | And even if your organisation or a company that you work for is not necessarily thinking                                                                                 |
| 53:20      | it in terms of automation yet, just do it yourself.                                                                                                                      |
| 53:23      | That's something, you know, I do it at work.                                                                                                                             |
| 53:25      | That's my job.                                                                                                                                                           |
| 53:26      | My job is to automate things so that we don't have people sitting there copying things from                                                                              |
| 53:29      | spreadsheets into programs anymore.                                                                                                                                      |
| 53:31      | They just type it straight into the program.                                                                                                                             |
| 53:34      | And, you know, it makes life easier and you'd be surprised at how quickly people get on                                                                                  |
| 53:38      | board when they see, oh, right.                                                                                                                                          |
| 53:40      | So that table that you have to create every week in numbers, you can just snap your fingers.                                                                             |
| 53:45      | And in the time it's taking you to snap your fingers, that script is run and boom, you've                                                                                |
| 53:48      | got a fancy looking chart and keynote ready to go.                                                                                                                       |
| 53:52      | That's the sort of thing that gets people on board.                                                                                                                      |
| 53:54      | Yeah.                                                                                                                                                                    |
| 53:55      | And, you know, if there's a mission statement to this podcast, it's that you don't need                                                                                  |
| 53:57      | to be Apple to take advantage of this stuff.                                                                                                                             |
| 54:00      | It's easy enough and it's fast enough that anybody can do it, whether you're a one-person                                                                                |
| 54:05      | shop or whether you're managing your kid's soccer team or you've got a dental practice                                                                                   |
| 54:11      | or whatever.                                                                                                                                                             |
| 54:12      | And we really want you to take that out of this show that you can do this stuff.                                                                                         |
| 54:16      | Yes, definitely.                                                                                                                                                         |
| 54:17      | So, you know, one way you could get better at doing this stuff is going and taking a three-day                                                                           |
| 54:21      | course on AppleScript.                                                                                                                                                   |
| 54:23      | And there just happens to be one in October.                                                                                                                             |
| 54:27      | The [[CMD-D Conference\|CMD-D Down Home Scripting Bootcamp]], where you get taught by the master, Sal will                                                                             |
| 54:32      | be there teaching you for three days about how to get better at AppleScript.                                                                                             |
| 54:35      | And, you know, I think back to those two days I spent with you at Mackerel, I really think                                                                               |
| 54:42      | it was a huge step for me in my automation journey.                                                                                                                      |
| 54:45      | And I hope anybody that's interested in this stuff goes and checks it out.                                                                                               |
| 54:48      | And we even have a discount code.                                                                                                                                        |
| 54:50      | Yes, yes we do.                                                                                                                                                          |
| 54:52      | But you're going to have to do a little bit of coding to figure out the discount code,                                                                                   |
| 54:56      | aren't you, David?                                                                                                                                                       |
| 54:57      | Yeah, we decided to make the code, Sal asked us, well, what do you want the code to be?                                                                                  |
| 55:01      | We said, well, let's make people write their first line of [[AppleScript]] to get $200 off.                                                                              |
| 55:06      | So Rose, what's the code?                                                                                                                                                |
| 55:07      | My code is very, very simple.                                                                                                                                            |
| 55:09      | It's `tellappdiscount`, all one word, small letters, lowercase.                                                                                                          |
| 55:14      | syntax isn't quite right, but yeah, that's what we can use, so `tellappdiscount`.                                                                                        |
| 55:20      | Yeah, so you don't need to write us and tell us we're missing the quote marks or spaces.                                                                                 |
| 55:25      | We understand.                                                                                                                                                           |
| 55:26      | But just be quiet and get your $200, just, you know.                                                                                                                     |
| 55:33      | Definitely, yes.                                                                                                                                                         |
| 55:34      | I wanted to mention that.                                                                                                                                                |
| 55:35      | I'll be teaching this with Ray Robertson, who's an absolute master of [[AppleScript]] instruction.                                                                       |
| 55:42      | He is just the most patient and personable guy, and he knows scripting inside and out,                                                                                   |
| 55:50      | and it's just a joy to work with him.                                                                                                                                    |
| 55:53      | So we'll both be there, plenty of hands-on attention, and it's down home because it's                                                                                    |
| 55:59      | in Cartersville, Georgia, and where we can go to partake in some southern hospitality,                                                                                   |
| 56:05      | and I'm really looking forward to that.                                                                                                                                  |
| 56:07      | Yes, I'm sure it's going to be absolutely fabulous.                                                                                                                      |
| 56:10      | And of course, if you go to this, you'll get to hang out with a bunch of other people who                                                                                |
| 56:13      | are also interested in automation and trade ideas with them and borrow them and expand                                                                                   |
| 56:18      | them and make them your own, which is one of the massive advantages of going to these                                                                                    |
| 56:21      | things in person.                                                                                                                                                        |
| 56:23      | You really get to feed all the ideas in together.                                                                                                                        |
| 56:26      | Yeah, I saw Ray was teaching us some [[AppleScript]] last year at [[CMD-D Conference\|CMD-D]]. He made an                                                                              |
| 56:32      | analog clock with [[AppleScript]].                                                                                                                                       |
| 56:34      | To this day, I have no idea how he did it.                                                                                                                               |
| 56:37      | The guy really knows his stuff.                                                                                                                                          |
| 56:41      | I think it was using [[Adobe Illustrator\|Illustrator]] or something, right?                                                                                              |
| 56:44      | Yeah, it was.                                                                                                                                                            |
| 56:45      | It was using [[Adobe Illustrator\|Illustrator]].                                                                                                                          |
| 56:46      | It had a second hand that was sweeping.                                                                                                                                  |
| 56:50      | Crazy.                                                                                                                                                                   |
| 56:51      | It's pretty amazing.                                                                                                                                                     |
| 56:52      | It would definitely go crazy.                                                                                                                                            |
| 56:54      | We promised our audience like 45 minutes, but we have you on the show, so of course                                                                                      |
| 56:58      | we're going to go over a little bit, but I want to ask you one last question.                                                                                            |
| 57:03      | What was your first automation?                                                                                                                                          |
| 57:04      | I mean, you're the master of this stuff, but you started somewhere.                                                                                                      |
| 57:07      | What is it that got you on this path?                                                                                                                                    |
| 57:12      | I was working in a print service bureau in Charlottesville, Virginia, and in the early                                                                                   |
| 57:18      | day, it was the early days of desktop publishing.                                                                                                                        |
| 57:24      | We had a Lineatronic 100, something like that, and we were getting hundreds and hundreds                                                                                 |
| 57:29      | of files coming through the door every day.                                                                                                                              |
| 57:32      | I had to go through manually these [[PageMaker]] and [[QuarkXPress]] files and make sure did they                                                                        |
| 57:38      | put the image to this, is this set for that, did they put a background on that, is the                                                                                   |
| 57:43      | font set for that.                                                                                                                                                       |
| 57:46      | Finally I was looking for ways to automate just checking and flight checking documents.                                                                                  |
| 57:54      | Simple things like that, it's something that could save me from 45 minutes of sending a                                                                                  |
| 58:00      | file to print and then finding out that wrong font type or image didn't have its background                                                                              |
| 58:05      | set.                                                                                                                                                                     |
| 58:06      | I was looking for ways to automate that process, and I had been working with various developers                                                                          |
| 58:13      | at [[QuarkXTensions]], and that was quite useful.                                                                                                                        |
| 58:16      | We developed a couple things, one of which was [[ShadowCaster]] that did drop shadows on                                                                                 |
| 58:22      | text.                                                                                                                                                                    |
| 58:23      | It was like the first time that was done, but then I saw an ad in the Apple Developer                                                                                    |
| 58:30      | Magazine for this scripting language called [[AppleScript]], natural English-like language                                                                               |
| 58:36      | for controlling applications and computer.                                                                                                                               |
| 58:40      | I bought the CD and I spent, I think, $10 or $14 on the [[Scriptable Finder]].                                                                                           |
| 58:48      | You had to buy a [[Scriptable Finder]] that came on a 400K floppy.                                                                                                       |
| 58:53      | At the time [[QuarkXPress]] was scriptable.                                                                                                                              |
| 58:56      | Dave Shaver and Ralph Rich had gotten Tim Gill to put scripting into [[Quark]], and [[Quark]]                                                                            |
| 59:04      | had this extensive scripting library, and I said, oh, this is fantastic.                                                                                                 |
| 59:09      | Let me try this out.                                                                                                                                                     |
| 59:11      | It's like David said, I looked at it and I looked at the dictionary and I said, okay,                                                                                    |
| 59:17      | there's an object and there's a property.                                                                                                                                |
| 59:21      | It says I should use the verb set and I should be able to just tell it.                                                                                                  |
| 59:26      | The first script that I ever wrote that got me started was set the colour of the current                                                                                 |
| 59:32      | box to blue.                                                                                                                                                             |
| 59:35      | Once I ran that and I watched that box in [[QuarkXPress]] turned blue, I just said, oh,                                                                                  |
| 59:43      | this is it.                                                                                                                                                              |
| 59:44      | I don't need to go to somebody and say, please write me code to do this.                                                                                                 |
| 59:50      | I can do this myself.                                                                                                                                                    |
| 59:52      | I can create my own tools and I promptly fired all my clients.                                                                                                           |
| 59:57      | I had a design business.                                                                                                                                                 |
| 59:59      | I got rid of all my clients and I spent 13 hours a day in a room just sitting there                                                                                      |
| 01:00:05   | for months trying to learn and understand and absorb [[AppleScript]] and once I got my head                                                                              |
| 01:00:12   | around it, I started writing scripts professionally for big companies like AT&T and Better Homes                                                                         |
| 01:00:20   | and Gardens.                                                                                                                                                             |
| 01:00:21   | I wrote a fraction making script for their recipes.                                                                                                                      |
| 01:00:26   | I wrote scripts for everybody from Showtime to hundreds of big name companies and it's                                                                                   |
| 01:00:36   | a common thing.                                                                                                                                                          |
| 01:00:37   | Everybody needs automation and I got into the desktop publishing with the local real estate                                                                              |
| 01:00:43   | magazine and I created catalogue publishing scripts for that that eventually Apple saw                                                                                   |
| 01:00:50   | me and convinced me through much trickery, they convinced me to join the company and                                                                                     |
| 01:00:57   | once I did it, it just took off and accelerated but that's how I got started, just one line                                                                              |
| 01:01:04   | of code.                                                                                                                                                                 |
| 01:01:05   | That's all it takes.                                                                                                                                                     |
| 01:01:06   | Got to get hooked somewhere.                                                                                                                                             |
| 01:01:08   | You made it so much easier for the rest of us with all the stuff you've done over the                                                                                    |
| 01:01:10   | years so we certainly thank you for that and I'm really excited.                                                                                                         |
| 01:01:14   | The third episode of this new show, we're able to get a kind of intensive [[AppleScript]]                                                                                |
| 01:01:18   | tutorial from the man himself so I'll say go ahead and thank you so much and do download                                                                                 |
| 01:01:24   | that script, play with it, let us know in the forums how you're using it and like I                                                                                      |
| 01:01:29   | said, if you want to get better at this stuff, go to the [[CMD-D Conference\|CMD-D Down Home Scripting Bootcamp]]                                                                      |
| 01:01:34   | in October.                                                                                                                                                              |
| 01:01:35   | Sal, you're also speaking at a couple of places.                                                                                                                         |
| 01:01:37   | I guess you're at the [[Mac Sysadmin Conference]], correct?                                                                                                              |
| 01:01:40   | Yes, I'm at [[Mac Sysadmin Conference\|Mac Sysadmin]] this year in Gothenburg, Sweden in October and I'm speaking with my                                                |
| 01:01:48   | friends down at [[MacTech]] in November.                                                                                                                                 |
| 01:01:53   | Always love going to visit with those guys, Neil and everybody, they're so nice and the                                                                                  |
| 01:01:59   | food is outstanding.                                                                                                                                                     |
| 01:02:02   | I just love the food there.                                                                                                                                              |
| 01:02:04   | That's in LA, right?                                                                                                                                                     |
| 01:02:05   | It's in LA and it's really convenient to get to and it's always fun and like you said,                                                                                   |
| 01:02:11   | I enjoy being around people who are into automation, who are looking for creative ways to use it.                                                                        |
| 01:02:22   | That's what Rose mentioned was that when you're around those kind of people, it's infectious                                                                             |
| 01:02:26   | and you start creating things and coming up with solutions that take you way beyond the                                                                                  |
| 01:02:32   | initial ideas that you had.                                                                                                                                              |
| 01:02:34   | Well, thank you so much, Sal.                                                                                                                                            |
| 01:02:36   | This certainly will not be the last time you're invited on the show.                                                                                                     |
| 01:02:38   | I hope we have you on many times in the future to talk about automation as we continue this                                                                              |
| 01:02:43   | journey.                                                                                                                                                                 |
| 01:02:44   | We are the Automators.                                                                                                                                                   |
| 01:02:46   | You can find us on Twitter, @automatorsfm.                                                                                                                               |
| 01:02:50   | Rose is @rosemaryorchard on Twitter.                                                                                                                                     |
| 01:02:53   | Did I get that right, Rose?                                                                                                                                              |
| 01:02:54   | Correct.                                                                                                                                                                 |
| 01:02:55   | Yes, you did.                                                                                                                                                            |
| 01:02:56   | Again, I'm @macsparky.                                                                                                                                                   |
| 01:02:57   | Sal, you can find over at [macosxautomation.com](https://macosxautomation.com).                                                                                          |
| 01:03:00   | Is there any other websites we should point people at, Sal?                                                                                                              |
| 01:03:03   | Let's just stick with that one.                                                                                                                                          |
| 01:03:05   | It has links to everywhere else you want to go.                                                                                                                          |
| 01:03:07   | Yes, be careful.                                                                                                                                                         |
| 01:03:08   | Be careful.                                                                                                                                                              |
| 01:03:09   | There are many rabbit holes there.                                                                                                                                       |
| 01:03:10   | Many, many rabbit holes.                                                                                                                                                 |
| 01:03:11   | I've been spending a lot of time with [[Omni Automation]] and I'm just so excited to be                                                                                  |
| 01:03:17   | able to work with those guys every day.                                                                                                                                  |
| 01:03:19   | It's great.                                                                                                                                                              |
| 01:03:20   | I cannot wait to really dig in on [[Omni Automation]] and [[OmniFocus]] because I'm a big OmniFocus                                                                      |
| 01:03:25   | user and I have big plans for that [[JavaScript]] stuff that you guys are doing over there.                                                                              |
| 01:03:31   | We may talk to you about that again too.                                                                                                                                 |
| 01:03:33   | We will see you all in a couple of weeks.                                                                                                                                |
| 01:03:35   | Make sure to go log in to the Discourse Forum for the Automators.                                                                                                        |
| 01:03:41   | What is that?                                                                                                                                                            |
| 01:03:42   | [talk.automators.fm](https://talk.automators.fm).                                                                                                                        |
| 01:03:44   | There we go.                                                                                                                                                             |
| 01:03:45   | [talk.automators.fm](https://talk.automators.fm).                                                                                                                        |
| 01:03:46   | Check it out and we'll see you all in two weeks.                                                                                                                         |
r