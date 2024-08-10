---
status: incomplete
fc-date:
  year: 2022
  month: 5
  day: 6
fc-category: podcast
podcast: Automators
published: 2022-05-06
duration: 6125
formattedduration: 01:42:05
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Daniel Jalkut
notetype: episode
showpage: http://relay.fm/automators/101
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators101.mp3
episode: 101
title: "101: Red Sweaters and AppleScript Fun with Daniel Jalkut"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode, Rosemary and David are joined by Daniel Jalkut, the man in the red sweater behind FastScripts, MarsEdit, and the Core Intuition podcast. Together they ponder the future of AppleScript, the restaurant at the end of the universe, and just how fast is a script?

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Daniel Jalkut]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 101 Discussion](https://talk.automators.fm/t/101-red-sweaters-and-applescript-fun-with-daniel-jalkut/13742)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Your Shortcut to Efficient, Consistent Communication.
- [[Hunter Douglas (Sponsor)|Hunter Douglas]] - Take advantage of Hunter Douglas' '*Season of Style*' rebate savings event.
- [[DEVONthink (Sponsor)|DEVONthink]] - Get organised and unleash your creativity.

# Show Notes
- [About: Daniel Jalkut](https://redsweater.com/about/DanielJalkut.html)
- [Red Sweater Software](https://redsweater.com/)
- [xkcd: Automation time spent vs saved](https://xkcd.com/1319/)
- [invariablyafk/thinkc-mac-classic-helloworld: Hello world example using Think C 5.0, for Classic Macintosh System 7](https://github.com/invariablyafk/thinkc-mac-classic-helloworld)
- [Dash for macOS - API Documentation Browser, Snippet Manager - Kapeli](https://kapeli.com/dash)
- [Getting Started with Headless Chrome - Chrome Developers](https://developer.chrome.com/blog/headless-chrome/)
- [Puppeteer  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/puppeteer/)
- [Driving Headless Chrome with Python - GeeksforGeeks](https://www.geeksforgeeks.org/driving-headless-chrome-with-python/)
- [Selenium](https://www.selenium.dev/)
- [SmolSoftBoi/puppeteer-stealth: For puppeteer to prevent detection.](https://github.com/SmolSoftBoi/puppeteer-stealth)
- [iCab Mobile (Web Browser) on the App Store](https://apps.apple.com/gb/app/icab-mobile-web-browser/id308111628)
- [Beautiful Soup Documentation — Beautiful Soup 4.4.0 documentation](https://beautiful-soup-4.readthedocs.io/en/latest/)
- [Transloader for Mac, iPhone and iPad - Eternal Storms Software](https://eternalstorms.at/transloader/)
- [FastScripts 3](https://redsweater.com/fastscripts/)
- [1.4 Using OSA Menu with OS 9](http://books.gigatux.nl/mirror/applescriptinanutshell/aplscptian-CHP-1-SECT-4.html)
- [Apple's Script - Red Sweater Blog](https://redsweater.com/blog/502/apples-script)
- [FastScripts 3: Scriptlight Search, Parallel Execution, Progress Reporting, and More! - Red Sweater Blog](https://redsweater.com/blog/3784/fastscripts-3)
- [How to Create and Use Symbolic Links (aka Symlinks) on a Mac](https://www.howtogeek.com/297721/how-to-create-and-use-symbolic-links-aka-symlinks-on-a-mac/)
- [The Talk Show ✪: Ep. 343, With Paul Kafasis](https://daringfireball.net/thetalkshow/2022/04/15/ep-343)
- [BetterTouchTool | folivora.ai - Great Tools for your Mac!](https://folivora.ai/)
- [Core Intuition Podcast](https://coreint.org/)

# Transcription
  
| Time Index | Transcription                                                     |
| :--------- | :---------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators,                                 |
| 00:04      | the automation podcast about making all of your devices,          |
| 00:06      | do everything for you,                                            |
| 00:07      | and even letting you have some fun with them.                     |
| 00:09      | My name is Rosemary Orchard,                                      |
| 00:10      | and I'm joined as always by David Sparks.                         |
| 00:12      | Hey, David, how are you today?                                    |
| 00:14      | I am great, Rose, and so happy to be here talking to you.         |
| 00:17      | We haven't done a show for a little while                         |
| 00:19      | just because of scheduling things,                                |
| 00:21      | so it's always fun talking to Rosemary,                           |
| 00:23      | and we have the guests at the end of the universe                 |
| 00:26      | with us today.                                                    |
| 00:27      | Welcome to the show, Daniel Jalkut.                              |
| 00:30      | Thank you, it's great to be here.                                 |
| 00:31      | Well, this was a little bit of scheduling hijinks,                |
| 00:34      | getting here this time,                                           |
| 00:36      | so I'm really glad it's working out,                              |
| 00:37      | and there's no loud construction going on outside my doors,       |
| 00:41      | and everything seems to be coming up.                             |
| 00:43      | Rose has no pun intended.                                         |
| 00:45      | Yeah, well, I mean, Rose,                                         |
| 00:46      | just to give you a little backstage again,                        |
| 00:49      | Daniel is an automator,                                           |
| 00:51      | but he's also a developer,                                        |
| 00:52      | and he developed one of our favourite apps, Fast Scripts,          |
| 00:55      | which, you know, I believe,                                       |
| 00:56      | I think you may have sponsored us at one point,                   |
| 00:59      | but that's not why we're here.                                    |
| 01:01      | We don't do that,                                                 |
| 01:02      | but Daniel's a friend who makes a great automation app,           |
| 01:05      | and we thought, we got to get Daniel                              |
| 01:06      | on to talk about Fast Scripts,                                    |
| 01:08      | and then Daniel's house started getting constructed upon,         |
| 01:12      | and it just took a long time,                                     |
| 01:13      | but we did it, and we're here, gang,                              |
| 01:15      | and we've got a great show in store for you today.                |
| 01:17      | Sounds great, let's do a great show.                              |
| 01:20      | Yeah, it's going to be the best show                              |
| 01:23      | in the history of podcasting.                                     |
| 01:25      | I think that's the plan.                                          |
| 01:27      | That was my promise, so we'll see.                                |
| 01:28      | Well, I think we've got a pretty good place to get started,       |
| 01:32      | because not only are you the creator of Fast Scripts,             |
| 01:34      | but if you go to Red Sweater Software,                            |
| 01:37      | then you can have a poke around,                                  |
| 01:38      | and there's all sorts of goodies there.                           |
| 01:41      | Everything from Mars Edit, my favourite blog editor,               |
| 01:43      | that if only I were not using Jekyll I could use,                 |
| 01:47      | to obviously Fast Scripts and much more,                          |
| 01:50      | but how did you get started in automation?                        |
| 01:52      | Because obviously you're here now, you're a developer,            |
| 01:54      | you're not just automating things,                                |
| 01:55      | you're creating automation tools,                                 |
| 01:58      | but where did this all begin?                                     |
| 02:00      | Oh, man, I can't imagine a life without automation.               |
| 02:04      | So I guess if I think back,                                       |
| 02:07      | my dad was a software engineer,                                   |
| 02:10      | and so I was introduced to the idea of programming                |
| 02:13      | very, very young.                                                 |
| 02:16      | My memory is six or seven,                                        |
| 02:20      | starting to just point me at the idea                             |
| 02:23      | of computer instructions and following the flow of logic,         |
| 02:27      | and I remember really also being pretty young,                    |
| 02:32      | my dad doing some things at the time that were automation,        |
| 02:36      | things, I don't know if I can remember the exact things,          |
| 02:39      | but I remember him just kind of like celebrating                  |
| 02:43      | the idea of writing a computer program,                           |
| 02:45      | and this was at a time when I don't think                         |
| 02:47      | there were any real popular automation technologies.              |
| 02:51      | We weren't on the Mac at that point either,                       |
| 02:53      | we were on a Commodore Amiga,                                     |
| 02:55      | but just the idea that you could harness the power                |
| 02:58      | of a computer to make something tedious, less tedious,            |
| 03:03      | is I think every programmer by nature is an automator,            |
| 03:09      | and what the folks listening                                      |
| 03:12      | who don't consider themselves programmers,                        |
| 03:15      | I think should appreciate is that very instinct they have         |
| 03:19      | to make these tedious things less tedious                         |
| 03:21      | is exactly what drives every programmer,                          |
| 03:24      | and a lot of automation is programming, it's just,                |
| 03:29      | so my memory goes back real far,                                  |
| 03:33      | always trying to find the easy way out basically,                 |
| 03:36      | this is a cliche, but a lot of programmers                        |
| 03:40      | like to say they're lazy,                                         |
| 03:41      | I bet a lot of automators don't count themselves                  |
| 03:43      | as programmers claim to be lazy,                                  |
| 03:46      | although there's also the classic pitfall                         |
| 03:49      | that we will spend like six hours automating a five minute        |
| 03:53      | task, as long as it gets us out of having to do                   |
| 03:57      | that five minute task even one additional time,                   |
| 04:01      | but yeah, it's my mindset,                                        |
| 04:03      | I like to, in general, in life,                                   |
| 04:08      | I like to look at things, optimise them,                          |
| 04:11      | make them better, more efficient,                                 |
| 04:14      | this comes to things like I'm thinking about the fact             |
| 04:18      | that I'm perhaps like overly proud of my method                   |
| 04:22      | for making coffee in the morning,                                 |
| 04:25      | where I haven't figured out how to pour the water in              |
| 04:31      | and start the coffee maker before I scoop the coffee,             |
| 04:37      | because I know the timing so that I won't end up                  |
| 04:41      | with water coming out of the coffee maker                         |
| 04:43      | before the scoops are in there,                                   |
| 04:45      | and I just feel proud of those things,                            |
| 04:48      | and I think that's what automators feel                           |
| 04:50      | when they've shaved a few seconds off of something                |
| 04:54      | or made something just feel a little better to do,                |
| 04:57      | you don't even have to necessarily save time,                     |
| 05:00      | but just making the process feel better,                          |
| 05:03      | and I think that's something a lot of people overlook,            |
| 05:05      | automation, it kind of gets at that joke about like,              |
| 05:09      | well, you spend all this time to automate something               |
| 05:10      | that didn't take that long anyway,                                |
| 05:12      | a lot of it is just making your environment                       |
| 05:15      | more comfortable to you,                                          |
| 05:17      | and that's kind of my approach to all of the use                  |
| 05:20      | of all technology.                                                |
| 05:21      | You know, it's funny, Daniel,                                     |
| 05:23      | I've never really thought about that, but I am like you,          |
| 05:25      | I like when I scramble an egg,                                    |
| 05:27      | I have a very specific order I do it in,                          |
| 05:30      | and it's the most efficient order,                                |
| 05:32      | and the way the dishes get washed, the egg gets scrambled,        |
| 05:35      | everything gets done, specific order.                             |
| 05:37      | Same thing, when I feed the dog,                                  |
| 05:39      | the order that I get the food out,                                |
| 05:41      | and you know, the way I do it all,                                |
| 05:44      | I have like automated that process,                               |
| 05:46      | and I think it's almost,                                          |
| 05:49      | I think a lot of people listening                                 |
| 05:50      | will relate to this, right?                                       |
| 05:51      | I mean, if you've got the mindset                                 |
| 05:53      | that you're going to be interested in automation,                 |
| 05:56      | you can't help but bring it                                       |
| 05:57      | into the analog world with you.                                   |
| 05:59      | Yeah, and I think there's kind of a sense                         |
| 06:01      | of like everything in its right place.                            |
| 06:04      | Recently, this past season,                                       |
| 06:06      | I have started taking ice skating lessons,                        |
| 06:10      | and it really started to give me an appreciation                  |
| 06:13      | for how you can kind of be in accord with your environment,       |
| 06:18      | right?                                                            |
| 06:19      | So like most people who have ever ice skated,                     |
| 06:24      | my experience before was get on the ice skates,                   |
| 06:27      | kind of clumsily step over to the ice,                            |
| 06:30      | and then hope for dear God, you don't fall, right?                |
| 06:33      | And just kind of try to move forward.                             |
| 06:35      | And the lessons sort of taught me how to be in the right          |
| 06:40      | posture to sort of like harness the power of the ice.             |
| 06:44      | And that way, I kind of think there's something to that           |
| 06:48      | with this idea of like,                                           |
| 06:51      | scrambling the eggs the right way.                                |
| 06:53      | And it makes me appreciate, for instance,                         |
| 06:55      | like I bet you could interview a dancer                           |
| 06:59      | and the dancer would understand the idea                          |
| 07:03      | that moving their body in a certain way                           |
| 07:06      | feels like the most efficient way to do,                          |
| 07:08      | to achieve what they're trying to do.                             |
| 07:11      | So there's something really kind of,                              |
| 07:12      | I think philosophical at the root of all this.                    |
| 07:16      | Yeah, I mean, David Allen mentioned this in GTD,                  |
| 07:19      | that he's got a section,                                          |
| 07:21      | at least in the original book about flow theory,                  |
| 07:22      | it's like a mental state where you're just performing             |
| 07:25      | optimally and you're absorbed by your tasks.                      |
| 07:27      | And I always thought of it as like,                               |
| 07:29      | you have a little sense of satisfaction                           |
| 07:31      | in what you're doing as well of,                                  |
| 07:32      | it doesn't feel clunky.                                           |
| 07:34      | And that for me is where a lot of automation comes in,            |
| 07:37      | because I can do things,                                          |
| 07:39      | like I can go and move these files into this folder               |
| 07:41      | and rename them all with this prefix.                             |
| 07:44      | I can do that manually and it doesn't take me very long.          |
| 07:47      | But having to do it feels kind of clunky                          |
| 07:50      | and I end up doing things like,                                   |
| 07:51      | well, let's just open the folder automatically and stuff.         |
| 07:53      | And then, before I know it,                                       |
| 07:55      | I've actually done the thing                                      |
| 07:57      | where I've just got it to rename the files.                       |
| 07:58      | And then because I like to check on my work,                      |
| 08:00      | it just opens the folder afterwards.                              |
| 08:02      | And it's like, hey, by the way, I did the thing for you.          |
| 08:05      | Here you go.                                                      |
| 08:06      | There's just a sense of satisfaction going,                       |
| 08:08      | oh, it did that thing.                                            |
| 08:09      | And not only did it do that thing,                                |
| 08:11      | it did it exactly the way I like it to be done.                   |
| 08:13      | So even if I'm not completely with it                             |
| 08:15      | as it's going through doing things,                               |
| 08:17      | like it's accurate, even if I'm not on the ball                   |
| 08:19      | because I've taken the time to set that up.                       |
| 08:21      | So it can let me, slack off is the wrong word,                    |
| 08:24      | but relax a little bit and focus on other things.                 |
| 08:28      | And at the end, you get to say,                                   |
| 08:30      | yep, nailed it again.                                             |
| 08:32      | There I go.                                                       |
| 08:33      | So you get to feel the satisfaction of doing it perfectly,        |
| 08:37      | which I do think is something that feeds a lot of this too.       |
| 08:40      | And I bet it feeds the dancer                                     |
| 08:41      | and it feeds the ice skater too.                                  |
| 08:43      | I do think that also the comment you made earlier                 |
| 08:47      | about how all programmers are automators,                         |
| 08:50      | I would argue that all automators are programmers too.            |
| 08:53      | If you're going to do this stuff,                                 |
| 08:55      | I mean, they're hopefully not too complicated,                    |
| 08:58      | but sometimes they get complicated too.                           |
| 09:00      | But a lot of automators like do a level of program.               |
| 09:04      | It's not the same thing that you'll do                            |
| 09:06      | when you're working at Apple or making an app,                    |
| 09:09      | but it is a level of programming.                                 |
| 09:11      | And it takes that kind of mindset,                                |
| 09:13      | the logical progression,                                          |
| 09:16      | because the computers are not very smart, right?                  |
| 09:18      | We've got to tell them exactly what order to do things.           |
| 09:20      | And it takes that kind of mindset                                 |
| 09:22      | in order to be a good automator.                                  |
| 09:24      | Yeah, I think a key way to think about that                       |
| 09:27      | is whatever tool you're using for automation                      |
| 09:30      | at the time may not have the depth or breadth                     |
| 09:34      | to automate things using the same techniques                      |
| 09:38      | and strategy that you would with, say, a more advanced tool       |
| 09:42      | like let's say the [[Swift]] programming language.                    |
| 09:44      | It may not have that depth and breadth,                           |
| 09:46      | but whatever you do in shortcuts or automator                     |
| 09:51      | or whatever your script,                                          |
| 09:57      | something simpler than what you're doing today                    |
| 10:01      | can be done in a more advanced tool.                              |
| 10:04      | So that is to say, whatever it is you're doing,                   |
| 10:07      | you could probably already,                                       |
| 10:08      | you're already capable of doing the same kind of thing            |
| 10:12      | in a more advanced tool.                                          |
| 10:13      | It's just that the more advanced tools also offer you             |
| 10:16      | the ability to expand beyond that skill set.                      |
| 10:21      | Yeah, yes.                                                        |
| 10:22      | And a lot of this stuff is about the logic behind it.             |
| 10:26      | What is the problem that you're trying to solve                   |
| 10:28      | and how do you get from A to B?                                   |
| 10:30      | And do you also do C as well?                                     |
| 10:33      | And that's a good chunk of it.                                    |
| 10:35      | And oftentimes tools like [[Keyboard Maestro]]                        |
| 10:38      | or Shortcuts abstract some of the difficulties involved.          |
| 10:41      | I spent a good 15 minutes earlier today                           |
| 10:44      | attempting to read some specific files with Python.               |
| 10:47      | And it turned out the entire thing                                |
| 10:48      | was that I was in the wrong location                              |
| 10:50      | and so it was reading from the wrong path.                        |
| 10:51      | Of course it was, something very, very simple.                    |
| 10:55      | But that's the sort of thing                                      |
| 10:56      | where something like Shortcuts makes that a lot easier.           |
| 10:59      | And so you don't have to futz around with stuff like that,        |
| 11:03      | which can often put people off of these things.                   |
| 11:06      | Because if it takes 15 minutes for a programmer                   |
| 11:10      | to read a file in the end,                                        |
| 11:13      | admittedly a half asleep programmer at the time,                  |
| 11:16      | then how long is it going to take somebody                        |
| 11:17      | who doesn't know that programming language?                       |
| 11:21      | And that's difficult,                                             |
| 11:22      | but a lot of tools make it a lot easier.                          |
| 11:24      | And it's really good that we have those as options                |
| 11:27      | and that everybody listening to this is a programmer.             |
| 11:29      | If you've ever created a Shortcut,                                |
| 11:31      | even if it's just one action, congratulations,                    |
| 11:33      | you get a little gold star.                                       |
| 11:34      | I totally agree with that.                                        |
| 11:36      | And I'm also in the camp of people                                |
| 11:37      | who is persistently trying to convince everybody,                 |
| 11:40      | I know that if they want to become a quote unquote programmer,    |
| 11:45      | the more universally accepted form of programmer,                 |
| 11:49      | then it's open to you.                                            |
| 11:51      | And I know some people just feel                                  |
| 11:52      | like they don't have the mind for it or whatever.                 |
| 11:54      | But trust me, if you are thinking in terms of automation          |
| 11:58      | at all, then you have the mind for it.                            |
| 12:00      | It's just a matter of like everything else                        |
| 12:02      | overcoming the learning curve.                                    |
| 12:04      | I mean, when I started,                                           |
| 12:06      | I was into programming a lot more as a kid.                       |
| 12:08      | As I've grown up, I never grew up.                                |
| 12:12      | But as I got older, I've kind of just kind of adopted,            |
| 12:16      | well, the level of programming I want to dive into                |
| 12:19      | is automation.                                                    |
| 12:20      | I don't want to go further.                                       |
| 12:21      | I've got other things I want to do.                               |
| 12:23      | But when I was a kid, it was really hard                          |
| 12:25      | because it was assembly code.                                     |
| 12:27      | I started on an Atari.                                            |
| 12:28      | You started on an Amiga.                                          |
| 12:29      | But you were really, you were writing binary                      |
| 12:34      | into your computer to make it do anything interesting.            |
| 12:38      | Like if you tried to write it in basic, it was so slow.           |
| 12:41      | But now those tools are much easier for people.                   |
| 12:44      | And that's why you've got kids going through middle school,       |
| 12:47      | making really great apps.                                         |
| 12:49      | And I agree with you that's out there.                            |
| 12:52      | But also the flip side of that is,                                |
| 12:53      | and if you're listening to the show saying,                       |
| 12:55      | well, I don't want to become a programmer, that's okay.           |
| 12:57      | You can just be an automator and that's all right.                |
| 13:00      | My point is that you have a programmer's kind of mindset          |
| 13:04      | when you come to it.                                              |
| 13:04      | But whether you use this as your gateway drug                     |
| 13:08      | to become the next great programmer                               |
| 13:10      | or just a way to get your work done a little faster,              |
| 13:14      | I really think that this is something                             |
| 13:16      | you should be exploring.                                          |
| 13:18      | And we'll just call you a programmer behind your back.            |
| 13:20      | There you go, exactly.                                            |
| 13:21      | Yeah, but it's definitely a positive, not a negative.             |
| 13:26      | That's right.                                                     |
| 13:27      | But so you started doing automation as a kid                      |
| 13:30      | and at some point you went beyond automation.                     |
| 13:33      | You began programming computers                                   |
| 13:36      | and tell us just a little bit about your journey there.           |
| 13:39      | Yeah, so I mentioned how my dad was a programmer                  |
| 13:42      | and when I think back and when I tell that story                  |
| 13:46      | about how early I was exposed to programming,                     |
| 13:48      | people often assume I must have been programming myself           |
| 13:52      | shortly after, but it was a sort of a combination                 |
| 13:58      | of my dad not pushing programming on me                           |
| 14:01      | and my own interests not really emphasising that.                 |
| 14:08      | So just to say, in stark contrast to some people                  |
| 14:11      | who grew up with parents who programmed,                           |
| 14:14      | I didn't end up really programming that much                      |
| 14:17      | until I was much older.                                           |
| 14:19      | When I say much older, I mean like 16.                            |
| 14:23      | So I spent most of my childhood not programming                   |
| 14:28      | even though I had computers, ranging from first computer,         |
| 14:34      | I remember my dad having was a K-Pro,                             |
| 14:37      | had Commodore Amiga's, Commodore 64 before that.                  |
| 14:42      | And I remember cracking open,                                     |
| 14:45      | this is also something I try to remember to remind people         |
| 14:47      | because at this point I'm not modest,                             |
| 14:50      | I am a really good programmer, okay?                              |
| 14:51      | I'm an adult, I've learned over 20 plus years                     |
| 14:55      | of programming how to be good at it.                              |
| 14:58      | But when I was a teenager and I opened the Commodore 64           |
| 15:02      | basic manual, I remember just getting perplexed                   |
| 15:07      | at the go sub instruction,                                        |
| 15:10      | which is like the basic instruction to call a sub routine.        |
| 15:13      | And so in the long story short,                                   |
| 15:16      | I never learned how to program the Commodore 64,                  |
| 15:18      | I never really learned how to program basic at all.               |
| 15:21      | And it was because I was overwhelmed.                             |
| 15:22      | I had the book, I had a dad who could have helped me,             |
| 15:25      | I had resources and I felt like I couldn't do it.                 |
| 15:30      | And it is a sort of testament I think                             |
| 15:34      | to coming back to something,                                      |
| 15:37      | even things that you think maybe you couldn't do                  |
| 15:39      | because as it happened,                                           |
| 15:41      | what finally motivated me to learn to program                     |
| 15:44      | was getting my first Mac.                                         |
| 15:46      | And like I said, before my Mac, my first Mac,                     |
| 15:50      | I did a little bit of programming on [[Unix]]                         |
| 15:53      | because I was part of like a university [[Unix]] community.           |
| 15:56      | And so I did a little bit of C programming on [[Unix]].               |
| 15:59      | And then I got a Mac and the idea of like it is                   |
| 16:03      | for so many kids, the idea of making a game took over.            |
| 16:08      | And a game with graphics.                                         |
| 16:11      | So there's an app I wrote that is,                                |
| 16:18      | some of you might remember this game style from [[Unix]]              |
| 16:23      | and I think it's been adapted to other platforms                  |
| 16:25      | by other people, but it's basically,                              |
| 16:27      | it's usually called Daleks and it's a robot type game             |
| 16:30      | where you just kind of make, you know,                            |
| 16:33      | inspired by Doctor Who's Daleks.                                  |
| 16:35      | It's just like you move around                                    |
| 16:37      | and try to make the robots crash into each other.                 |
| 16:40      | This was a [[Unix]] game that I used to play                          |
| 16:42      | on this [[Unix]] community.                                           |
| 16:44      | And when I first got my PowerBook Duo 210,                        |
| 16:50      | it was my first Mac that I owned                                  |
| 16:52      | and could use for myself, my family was not a Mac family.         |
| 16:55      | So I brought my family kicking and screaming                      |
| 16:58      | into the Apple ecosystem, but I got my first Mac                  |
| 17:02      | and I thought this has graphics                                   |
| 17:03      | and I need to learn how to program it.                            |
| 17:06      | And so I got this great app on the Mac at that time.              |
| 17:11      | First of all, there was a compiler called Think C                 |
| 17:14      | and there was this great app called Think Reference.              |
| 17:17      | And it was just from a time,                                      |
| 17:18      | it's kind of like the equivalent                                  |
| 17:19      | of like the Dash documentation app today.                         |
| 17:23      | I don't know if you're familiar with that, but it's cool.         |
| 17:27      | But it's just basically like a nice,                              |
| 17:28      | like hyperlink based, you know, documentation thing.              |
| 17:32      | And I just tried to read everything I could                       |
| 17:34      | about the Mac toolbox at that time.                               |
| 17:36      | And I wrote my first game and I put it out there                  |
| 17:38      | as shareware and I think I was, you know,                         |
| 17:43      | maybe 17 or something at the time.                                |
| 17:46      | And that got me started.                                          |
| 17:47      | And after that, I was committed to the Mac                        |
| 17:52      | and it's sort of just a fast track.                               |
| 17:55      | Like I said, I didn't learn to program until kind of late         |
| 17:59      | for a programmer's son,                                           |
| 18:01      | but by within a few years,                                        |
| 18:04      | I was working at my first job at Apple                            |
| 18:07      | as a quality engineer, a tester                                   |
| 18:11      | and managed to just get into the right doors                      |
| 18:15      | to end up programming for the System 7 team.                      |
| 18:20      | And that's it, that's the story.                                  |
| 18:22      | So anyway, see you next week.                                     |
| 18:25      | I mean, but that really goes to show, you know,                   |
| 18:27      | that just because you've got, you know,                           |
| 18:29      | parents who can do this and, you know,                            |
| 18:31      | you had the ability to learn, you don't have to learn it,         |
| 18:34      | you know, right from, you know, the age of being knee high,       |
| 18:36      | you can learn programming whenever you want                       |
| 18:38      | and then, you know, become great at it                            |
| 18:40      | as you obviously are because of all the apps                      |
| 18:42      | that you've created and are running and supporting today.         |
| 18:45      | Right.                                                            |
| 18:46      | And then sometimes I think about that, you know,                  |
| 18:48      | I don't want to diminish the impact my dad                        |
| 18:51      | in particular had on me, but like I said already, you know,       |
| 18:56      | you know, I didn't really use that resource much,                 |
| 18:59      | but I think just having a dad who was so steeped                  |
| 19:03      | in programming, knowing, it kind of demystified it, right?        |
| 19:07      | Like if you, if you were like a shoemaker's daughter              |
| 19:13      | and somebody says to you, like,                                   |
| 19:17      | shoemaking is impossible.                                         |
| 19:19      | Like how would anybody even start?                                |
| 19:20      | You might have like the sense like, well, actually, you know,     |
| 19:24      | take these things and they stitch them together                   |
| 19:25      | and this is how it works,                                         |
| 19:27      | even though maybe you had never tried to make a shoe.             |
| 19:31      | So when the time came that I wanted to program,                   |
| 19:34      | you know, it's like so many people emphasise these days           |
| 19:37      | of giving kids role models.                                       |
| 19:39      | Well, I had a role model, you know, I had a role model            |
| 19:42      | that I could step into the shoes of, so to speak.                 |
| 19:45      | And yeah, I'm grateful that I did                                 |
| 19:47      | because it turns out, turns out I like programming.               |
| 19:50      | And I didn't even know that I was gonna like programming          |
| 19:53      | frankly until after I went to college.                            |
| 19:56      | I didn't know what I was gonna do.                                |
| 19:59      | And luckily, I think I ended up doing what I like.                |
| 20:03      | So is that like a good news bad thing,                            |
| 20:05      | news thing for your dad's like,                                   |
| 20:06      | goodness is Daniel's into programming, the bad news is            |
| 20:09      | he's became one of those Mac weirdos.                             |
| 20:13      | It was for sure.                                                  |
| 20:14      | And we used to have these annoying debates about the Mac          |
| 20:18      | because he was just so steeped in this like anti-Mac rhetoric.    |
| 20:23      | He was like, you know, among the,                                 |
| 20:25      | he was a compiler engineer                                        |
| 20:26      | and none of his compiler friends used Macs.                       |
| 20:30      | So all of the like hyperbole about Macs being toys                |
| 20:35      | and this and that and the other thing.                            |
| 20:37      | And I'll tell you what,                                           |
| 20:38      | this is perfect for the automators show                           |
| 20:40      | because my dad at some point grudgingly,                          |
| 20:44      | I think what happened is after I was working at Apple             |
| 20:46      | for a while, he was sort of proud enough of me working            |
| 20:49      | at Apple that he thought maybe he should get a Mac                |
| 20:51      | just like be play for the home team.                              |
| 20:54      | And they got a Mac and being a programmer that he is,             |
| 20:58      | he started getting, he bought like an [[AppleScript]] book.          |
| 21:03      | And it was such a great testament to AppleScript                 |
| 21:07      | that my dad, like a C++ compiler engineer,                        |
| 21:12      | one day he pulled me aside and he just said,                      |
| 21:14      | I finally took a look at this AppleScript language.              |
| 21:18      | I just thought it was going to be so basic,                       |
| 21:21      | but it's a real programming language.                             |
| 21:24      | And I was like, yes, you get it.                                  |
| 21:26      | Like this is, and that was a great testament to him               |
| 21:31      | sort of finding a route to respecting Apple and the Mac           |
| 21:36      | was through AppleScript of all things.                           |
| 21:39      | And I didn't know how, at that time,                              |
| 21:40      | I didn't know how to use AppleScript at all,                     |
| 21:42      | but this must have been in, you know, 96 or something             |
| 21:45      | a couple of years after AppleScript had come out.                |
| 21:47      | And now one of your primary products                              |
| 21:49      | is AppleScript related, which is kind of fun.                    |
| 21:50      | Right, that's right.                                              |
| 21:52      | Yeah, I really feel like AppleScript                             |
| 21:55      | doesn't get a fair shake from a lot of people.                    |
| 21:58      | I mean, I get that it's not like a traditional programming        |
| 22:01      | language and it's, you know, the syntax is weird, you know,       |
| 22:07      | it's supposed to be more natural language                         |
| 22:09      | and, you know, making things more natural language                |
| 22:12      | sometimes makes them more difficult,                              |
| 22:13      | particularly for traditional programmers,                         |
| 22:17      | for non-programmers, it might make their life easier.             |
| 22:21      | But for people who are used to very specific language             |
| 22:24      | to declare a variable, it can make them crazy.                    |
| 22:27      | But I understand where they were coming from.                     |
| 22:30      | And I feel like that was one of the early tips                    |
| 22:34      | to bring automation to the masses.                                |
| 22:37      | Yeah, well, and the thing is, for people who aren't               |
| 22:40      | in programmer cultures, every language is reviled by somebody.    |
| 22:46      | And the people who reviled the language                           |
| 22:48      | are usually pretty vocal about it.                                |
| 22:50      | And it's funny to think about languages like PHP,                 |
| 22:54      | JavaScript, C++, Perl,                                           |
| 22:59      | four of like the most popular languages in history                |
| 23:01      | are some of the most reviled languages, right?                    |
| 23:04      | They have, people have pejoratives                                |
| 23:06      | for all of these languages.                                       |
| 23:08      | And in JavaScript in particular, I think most people              |
| 23:12      | would agree is the most universally adopted language now.         |
| 23:16      | And people still ridicule it for all of its shortcomings.         |
| 23:21      | So sometimes I like to think, you know,                           |
| 23:24      | AppleScript has plenty to ridicule it for,                        |
| 23:28      | but, you know, there is a like parallel universe                  |
| 23:31      | where AppleScript took off and became so popular                  |
| 23:34      | that it was like the language powering the web.                   |
| 23:38      | And then people would still be ridiculing it                      |
| 23:41      | and, you know, glorifying all of the things                       |
| 23:44      | that are wrong with it,                                           |
| 23:45      | but it would still be hugely successful.                          |
| 23:47      | So it's like, you know, it's kind of easy                         |
| 23:49      | to beat up on AppleScript because not only does it have           |
| 23:53      | a lot of peculiarities that are different                         |
| 23:55      | from other languages, it makes it difficult                       |
| 23:57      | in some ways for programmers and non-programmers,                 |
| 24:00      | but it's also not that popular.                                   |
| 24:02      | So it's sort of low stakes to beat up on it.                      |
| 24:06      | Yeah, but then there are people that you meet                     |
| 24:09      | that can do amazing things with it.                               |
| 24:12      | And we still hear from automated listeners                        |
| 24:14      | who are now learning AppleScript                                  |
| 24:17      | because they're primarily working on the Mac                      |
| 24:21      | and they want to get the most out of automation on the Mac.       |
| 24:24      | And I think it's a good option.                                   |
| 24:26      | I mean, so long as you're staying on the Mac,                     |
| 24:28      | once you get on the mobile,                                       |
| 24:29      | you're not gonna get anything with AppleScript.                   |
| 24:32      | But I stand by the belief that Apple is not going                 |
| 24:35      | to remove AppleScript from the Mac.                               |
| 24:37      | I don't need, I think it would require effort                     |
| 24:40      | on their behalf to do so.                                         |
| 24:42      | And as a result, it's in there.                                   |
| 24:45      | I think it would take dynamite to get AppleScript                 |
| 24:47      | out of the Mac OS at this point.                                  |
| 24:49      | And I don't think anybody's willing to blow stuff up.             |
| 24:52      | Yeah, so it's a perfect example of something                      |
| 24:54      | that you can, I think, pretty respectfully be confident           |
| 25:00      | will not go away and be confident will get no care.               |
| 25:04      | It's like, it's going to age out,                                 |
| 25:08      | maybe not even gracefully, right?                                 |
| 25:10      | It's just gonna go away over whatever the course of time          |
| 25:15      | is that it naturally stops being used                             |
| 25:18      | and people move on to other things.                               |
| 25:21      | Maybe that will be shortcuts to a large extent                    |
| 25:23      | if Apple continues to invest in shortcuts.                        |
| 25:26      | Maybe it'll be JavaScript-based automations.                      |
| 25:29      | But I agree, the thing is some of the best things                 |
| 25:36      | about AppleScript actually are the ways                           |
| 25:39      | that it imposed on, and it still does impose                      |
| 25:43      | on programmers who support it at the app level.                   |
| 25:48      | It imposes a philosophy for organising your data                  |
| 25:52      | kind of into the equivalent of a DOM                              |
| 25:55      | like in a JavaScript sense, document object model.                |
| 26:00      | It's kind of the tree hierarchy                                   |
| 26:02      | of all the contents of an app.                                    |
| 26:05      | And AppleScript did this very early on, the 90s.                  |
| 26:10      | And so what's great about that is a lot of apps                   |
| 26:14      | that do support scripting are structured in such a way            |
| 26:17      | that they can be adapted to other scripting languages             |
| 26:20      | if something else comes along.                                    |
| 26:23      | So it's kind of like the infrastructure,                          |
| 26:26      | when you talk about AppleScript,                                  |
| 26:27      | you're talking about the language,                                |
| 26:28      | but also the infrastructure.                                      |
| 26:29      | And especially the infrastructure,                                |
| 26:33      | a lot of people would probably be hard-pressed                    |
| 26:35      | to find another way to organise their existing apps,              |
| 26:39      | at least.                                                         |
| 26:40      | The other thing is, of course,                                    |
| 26:41      | shortcuts is shipped,                                             |
| 26:42      | but it shipped with AppleScript support and CLI support.          |
| 26:45      | So even though shortcuts may eventually be here                   |
| 26:49      | to eat AppleScript's lunch at the moment,                         |
| 26:51      | it's still bringing the goods.                                    |
| 26:53      | So we have everything that you would expect                       |
| 26:56      | from an automatable application in 2022.                          |
| 27:01      | This episode of Automators is brought to you                      |
| 27:03      | by our friends at TextExpander.                                   |
| 27:04      | Get your team communicating faster                                |
| 27:06      | so they can focus on what's most important.                       |
| 27:08      | With TextExpander, your team's knowledge                          |
| 27:10      | is at their fingertips.                                           |
| 27:11      | Get your whole team on the same page                              |
| 27:12      | by getting information out of silos                               |
| 27:14      | and into the hands of everyone that needs to use it.              |
| 27:17      | You can share your team's knowledge across departments,           |
| 27:19      | so your team is sending a unified message to your customers       |
| 27:21      | and isn't spending time reinventing the wheel.                    |
| 27:24      | Here's how it works.                                              |
| 27:25      | First, store it.                                                  |
| 27:26      | Keep your company's most used emails, phrases, messaging,         |
| 27:28      | URLs, and more right within TextExpander.                         |
| 27:31      | Then share it.                                                    |
| 27:32      | Get your whole team access to the content                         |
| 27:33      | they need to use every day,                                       |
| 27:35      | organise it by department,                                        |
| 27:36      | and finally, expand it.                                           |
| 27:38      | Deploy the content you need with just a few keystrokes            |
| 27:40      | on any device across any apps you use.                            |
| 27:43      | It's that easy,                                                   |
| 27:44      | and TextExpander is available on Mac, Windows, Chrome,            |
| 27:46      | iPhone, and iPad.                                                 |
| 27:48      | I use TextExpander for all sorts of things,                       |
| 27:49      | but particularly in the context of teams,                         |
| 27:51      | it's really important to actually have                            |
| 27:53      | the same information everywhere.                                  |
| 27:54      | If something changes,                                             |
| 27:56      | this way, everybody's sending the same message.                   |
| 27:58      | There's no more,                                                  |
| 27:59      | this person said I could,                                         |
| 28:00      | when somebody else said that they couldn't,                       |
| 28:02      | it's all unified.                                                 |
| 28:04      | So it boosts your productivity                                    |
| 28:05      | by saving your time and by avoiding problems.                     |
| 28:09      | As a listener of automators,                                      |
| 28:10      | you can get 20% off your first year.                              |
| 28:12      | Visit textexpander.com/automators                           |
| 28:14      | to learn more about TextExpander.                                 |
| 28:16      | That's textexpander.com/automators.                         |
| 28:18      | I'll thanks to TextExpander                                       |
| 28:19      | for their support of this show and Relay FM.                     |
| 28:23      | Well, Daniel, let's fast forward now.                             |
| 28:25      | You are a programmer, you own a company,                          |
| 28:28      | you've got some great apps                                        |
| 28:29      | that have automation related products,                            |
| 28:31      | but how much do you use automation                                |
| 28:33      | in your day-to-day work?                                          |
| 28:35      | I use automation whenever I can,                                  |
| 28:37      | and I'm always trying to expand my tool set.                      |
| 28:40      | The most recent thing I could tell you about                      |
| 28:43      | that I've started working on                                      |
| 28:45      | is actually automating,                                           |
| 28:47      | it's been a long time on my list                                  |
| 28:49      | to get better at web screen scraping,                             |
| 28:53      | like to automate, in particular,                                  |
| 28:55      | I like so many other people                                       |
| 28:57      | have switched years and years ago                                 |
| 28:59      | to paperless documents.                                           |
| 29:02      | And I am so frustrated by the fact                                |
| 29:05      | that I have the simultaneous compulsion                           |
| 29:08      | to maintain an archive of all of my statements                    |
| 29:12      | from these different companies.                                   |
| 29:14      | And the total lack of interest or desire                          |
| 29:18      | in logging in and clicking around and downloading them.           |
| 29:21      | So when you ask me about what I've been automating lately,        |
| 29:24      | it doesn't happen to be an AppleScript thing,                    |
| 29:26      | but it's really interesting,                                      |
| 29:30      | because I've dipped my toe into screen scraping,                  |
| 29:36      | probably for at least 15 years.                                   |
| 29:38      | I've tried to automate things in the past,                        |
| 29:41      | as far back as I can remember, sometimes using tools              |
| 29:46      | as rudimentary as just like the curl command line tool.           |
| 29:51      | And for folks who don't maybe know, just real quickly,            |
| 29:55      | screen scraping just means trying to navigate to                  |
| 29:58      | and extract data from the web                                     |
| 30:01      | without doing it manually, basically.                             |
| 30:05      | And what I was so delighted to learn recently                     |
| 30:08      | when I started digging back into it again                         |
| 30:11      | is that Chrome in particular,                                     |
| 30:15      | this might be old news to you both,                               |
| 30:17      | but Chrome in particular has something called Headless Chrome.    |
| 30:22      | And it's a way, it's like a protocol and interface                |
| 30:25      | for interacting with the browser programmatically                 |
| 30:30      | without it even necessarily being loaded into a window.           |
| 30:34      | And then Google also has this other technology                    |
| 30:37      | called Puppeteer, which is a Python package.                      |
| 30:42      | No, it's not Python, I'm sorry.                                   |
| 30:44      | It's a mix up my scripting languages.                             |
| 30:46      | It's a node package, at least the interface I'm using             |
| 30:49      | is node, a JavaScript based.                                      |
| 30:52      | And it just gives you all these cool tools                        |
| 30:55      | for automating stuff on the web.                                  |
| 30:58      | So you can say things like open this page,                        |
| 31:01      | wait for it to finish loading, click in the text box              |
| 31:05      | that has this ID, whatever, login,                                |
| 31:09      | enter the text, Daniel, submit the form,                          |
| 31:13      | and then automate putting everything in                           |
| 31:16      | to log into a site.                                               |
| 31:17      | I've just scratched the surface,                                  |
| 31:19      | so the only reason I mentioned it                                 |
| 31:20      | is because it's so fresh in my memory,                            |
| 31:22      | but it's a really good example.                                   |
| 31:26      | I feel like [[AppleScript]], Shortcuts,                              |
| 31:30      | even Shell Scripts on the Mac,                                    |
| 31:32      | they give us the power to automate so much in the context         |
| 31:36      | of our local work environment, our desktop.                       |
| 31:39      | And that's so important, it's so powerful,                        |
| 31:41      | but I have felt frustrated by the sort of boundary                |
| 31:44      | of the web for a long time.                                       |
| 31:46      | Like I often don't feel like I can just quickly                   |
| 31:50      | throw a script together to automate something on the web.         |
| 31:53      | And I feel like maybe I'm kind of at the door,                    |
| 31:57      | at the doorstep of being able to do that                          |
| 32:00      | with this new technology.                                         |
| 32:02      | Well, just imagine somebody out there like me,                    |
| 32:05      | who's not a professional programmer,                              |
| 32:07      | and all the ways we struggle with getting data out of the web,    |
| 32:11      | because I can tell you,                                           |
| 32:12      | I've written some real janky keyboard nitro scripts               |
| 32:16      | and [[Alfred]] workflows,                                             |
| 32:18      | and I've done some really crazy stuff over the years              |
| 32:20      | to try and automation,                                            |
| 32:22      | I call it like scraping my data out of a website,                 |
| 32:26      | because they just make it so hard.                                |
| 32:28      | So this is actually very encouraging to me,                       |
| 32:31      | because I wasn't aware                                            |
| 32:32      | that there was a headless version of Chrome.                      |
| 32:36      | So how do you get started?                                        |
| 32:37      | If someone out there is listening                                 |
| 32:38      | and you've got their interest,                                    |
| 32:39      | how do you get started figuring that out?                         |
| 32:43      | Let me see if I can pull up my notes for this,                    |
| 32:47      | because I have a couple good links, I think.                      |
| 32:51      | One resource I'll recommend,                                      |
| 32:53      | while Daniel is just looking for his notes,                       |
| 32:54      | there is Selenium.                                                |
| 32:56      | Selenium is designed to be a testing tool                         |
| 32:59      | for developers of web applications,                               |
| 33:01      | where the idea is it will just go                                 |
| 33:03      | and do the same series of actions again and again,                |
| 33:05      | and when something breaks,                                        |
| 33:06      | it'll go, hey, it's broken over here,                             |
| 33:09      | without you needing to write thousands of lines of code.          |
| 33:13      | And it's quite popular for this sort of thing as well,            |
| 33:16      | because it's got a Python library that you can use,               |
| 33:22      | and it's fairly well documented,                                  |
| 33:25      | or very well documented actually,                                 |
| 33:26      | because people use this for testing.                              |
| 33:28      | But that's obviously using Python,                                |
| 33:30      | rather than JavaScript,                                           |
| 33:32      | which Daniel must be using with Puppeteer.                        |
| 33:36      | Yeah, so the thing with Puppeteer,                                |
| 33:37      | the reason I, so years ago, whenever I had tried this,            |
| 33:40      | I tried to find, at the moment,                                   |
| 33:41      | whatever the latest and greatest was,                             |
| 33:43      | and that definitely included things like Selenium.                |
| 33:46      | Included for many years, these packages,                          |
| 33:49      | people may recognise the name of Phantom.js,                      |
| 33:52      | and these were all designed to allow you                          |
| 33:57      | to run various web framework, not frameworks,                     |
| 34:02      | like the actual browser APIs.                                     |
| 34:06      | What seems to be unique about Headless Chrome                     |
| 34:10      | and Puppeteer is this emphasis on the headless aspect,            |
| 34:15      | so that you can really come up                                    |
| 34:18      | with more efficient kind of standalone scripts and stuff          |
| 34:23      | that run without even like the artefact                           |
| 34:26      | of seeing Chrome or any other browser open.                       |
| 34:29      | And Selenium might have provided that too, I can't recall,        |
| 34:33      | but there's two things I wanna mention                            |
| 34:35      | while I have everybody thinking about this.                       |
| 34:37      | The first is, let's see, Puppeteer itself,                        |
| 34:43      | you can find, I think you can just Google it,                     |
| 34:46      | because it's actually one of the other,                           |
| 34:49      | so the encouraging things about this are,                         |
| 34:51      | and I'll say, I'm not a huge Chrome fan, personally,              |
| 34:54      | I don't use Chrome, I use [[Safari]] all the time,                    |
| 34:57      | so I'm kind of like the last person                               |
| 34:59      | you'd expect to go running to Chrome,                             |
| 35:01      | but as soon as I see that there's                                 |
| 35:04      | like this screen scraping technology                              |
| 35:06      | that is basically endorsed and sponsored by Google,               |
| 35:10      | and there's a framework for automating it called Puppeteer,       |
| 35:15      | which is also by Google, I'm like, you know what?                 |
| 35:19      | I'm not gonna make, this is like,                                 |
| 35:20      | you don't get fired for hiring IBM, you know?                     |
| 35:23      | It's like, this is, just cause I don't particularly               |
| 35:28      | use Chrome, doesn't mean I won't lean on it                       |
| 35:31      | to solve this problem for me.                                     |
| 35:33      | So basically, if you Google for Puppeteer,                        |
| 35:36      | you will find it, we can put a link in the show notes             |
| 35:38      | already, yeah.                                                    |
| 35:40      | So the only other thing I wanna mention is,                       |
| 35:42      | it took me a little while, cause I got it going,                  |
| 35:44      | so one of the cool things about Puppeteer                         |
| 35:46      | and Headless Chrome is you can run it,                            |
| 35:49      | not headless while you're debugging,                              |
| 35:51      | and so you can like bring up the browser                          |
| 35:53      | and see what it's doing and try to figure out                     |
| 35:54      | how to change it, and I was having a lot of bad luck,             |
| 35:59      | cause I was trying to get it to log into my bank,                 |
| 36:01      | and it wasn't working, and then,                                  |
| 36:03      | so I discovered that Puppeteer also supports plugins,             |
| 36:07      | and there's one called plugin,                                    |
| 36:11      | it's called the Puppeteer Stealth plugin,                         |
| 36:14      | and it basically just convinces whatever website                  |
| 36:17      | you're trying to automate that it's not being automated,          |
| 36:21      | which is a great step too,                                        |
| 36:23      | and so as soon as I installed this plugin and used it,            |
| 36:25      | instead of the like baseline Puppeteer,                           |
| 36:27      | I was totally able to log into my bank                            |
| 36:30      | and do all kinds of cool things.                                  |
| 36:32      | Yeah, and that's the challenge for an automator, right,           |
| 36:34      | because these website hosts are really trying                     |
| 36:39      | to avoid people scraping data for bad reasons,                    |
| 36:41      | and that's something we don't want to have happen.                |
| 36:44      | We don't want hackers to go and pull our data off,                |
| 36:48      | I mean, a bank website is an extreme example,                     |
| 36:50      | but even just like a shopping website or a forum                  |
| 36:54      | where you like to go and participate,                             |
| 36:55      | you don't want them scraping all your data out of there,          |
| 36:58      | but as a user, it's our data,                                     |
| 37:00      | I mean, I don't wanna get into the arguments                      |
| 37:04      | about whether it's still our data                                 |
| 37:05      | once we put it on the internet,                                   |
| 37:06      | but I mean, we put it there,                                      |
| 37:08      | it's stuff that relates to us,                                    |
| 37:10      | and in general, the internet websites                             |
| 37:14      | are not very good at saying,                                      |
| 37:15      | oh, hey, it's you Sparky,                                         |
| 37:17      | and this is your bank information,                                |
| 37:19      | just push this one button                                         |
| 37:20      | and we'll give you everything you need out of the website.        |
| 37:22      | They don't give you that, you know?                               |
| 37:25      | And I wish, you know, since they don't,                           |
| 37:28      | we have to figure a way around it.                                |
| 37:30      | That's right, and I would be happy to use                         |
| 37:32      | a more secure like API or something                               |
| 37:35      | that they wanna provide,                                          |
| 37:37      | but yeah, it's like, I almost feel like, you know,                |
| 37:40      | there's this strong like right to repair movement                 |
| 37:43      | for products, and I feel like there should be like                |
| 37:45      | a right to API for your data, you know,                           |
| 37:49      | there's all this great stuff, you know,                           |
| 37:51      | the widely like sort of lamented,                                 |
| 37:55      | what is it, the GDPR? GDPR, yep.                                  |
| 37:58      | Yeah, the widely lamented policies from that nonetheless          |
| 38:03      | brought us some great like data portability changes.              |
| 38:07      | And I would like to see some similar,                             |
| 38:10      | something similar that just made all these big companies          |
| 38:13      | that can afford to do it, give us an API for our data.            |
| 38:16      | But in the absence of that,                                       |
| 38:18      | this is really something fun to look into.                        |
| 38:20      | So I guess I just say it kind of as like,                         |
| 38:22      | this is what I'm jazzed about at the moment.                      |
| 38:24      | And if anyone out there like me has been waiting around           |
| 38:28      | wondering like, how the heck do I scrape web pages in 2022?       |
| 38:32      | I'm pretty confident this is one of the best approaches.          |
| 38:36      | Yes, absolutely.                                                  |
| 38:38      | Though if you live in the UK,                                     |
| 38:39      | then banks have to adhere to British legislation,                 |
| 38:43      | which means that if they're over a certain size,                  |
| 38:46      | they have to integrate with a protocol called open banking,       |
| 38:49      | which means that they have to have an API                         |
| 38:51      | that can be accessed by authorised.                               |
| 38:54      | It's not just something where anybody can sign up,                |
| 38:57      | but you know, if you go through vetting process,                  |
| 38:59      | you can then sign up to get access                                |
| 39:01      | and authenticate yourself and get data out of your bank,          |
| 39:06      | which is pretty cool.                                             |
| 39:07      | So maybe at some point that will spread out.                      |
| 39:10      | There's a similar piece of legislation in Europe,                 |
| 39:12      | though it doesn't explicitly say open banking.                    |
| 39:15      | It allows people to use a couple of different APIs,               |
| 39:19      | but it's pretty good that data portability                        |
| 39:22      | is becoming more of a thing.                                      |
| 39:23      | And I'm very amused by puppeteer stealth                          |
| 39:26      | because for years, and I still have it now,                       |
| 39:28      | ICAP is one of my favourite applications                           |
| 39:31      | that I keep installed on my iPad and my iPhone,                   |
| 39:33      | and I very rarely use.                                            |
| 39:34      | But what I do when I'm using it is I've set it                    |
| 39:37      | so that the browser profile is Firefox on Windows.                |
| 39:40      | Because this nearly always gets around the,                       |
| 39:43      | oh, we've detected you're using an iPad,                          |
| 39:45      | so we're gonna give you a really janky mobile interface           |
| 39:47      | that's missing 80% of the options that you need.                  |
| 39:51      | Because that's always good fun,                                   |
| 39:53      | though I did have one with something the other day,               |
| 39:55      | I was trying to cancel a subscription,                            |
| 39:56      | and I tried loading it in the browser on my Mac,                  |
| 39:59      | it didn't work, I tried the app on my iPhone,                     |
| 40:01      | it didn't work, and then I eventually realised,                   |
| 40:03      | I haven't tried the browser on my iPhone,                         |
| 40:05      | and the cancel button only appeared                               |
| 40:06      | in the browser on my iPhone, which was not fun,                   |
| 40:10      | but I reported it to them and reminded them                       |
| 40:12      | that they're not legally allowed to do that,                      |
| 40:14      | they have to have the cancel button show up everywhere.           |
| 40:17      | And I got an apologetic email on a voucher                        |
| 40:19      | for a service that I canceled back.                               |
| 40:21      | All right, there you go.                                          |
| 40:24      | Well, yeah, it's funny, because ICAP is the app,                  |
| 40:26      | it's not pretty, it's not user friendly,                          |
| 40:29      | but man, it can pretend to be anything on your iPad,              |
| 40:32      | and it's like you keep it for that reason.                        |
| 40:35      | Yep, exactly.                                                     |
| 40:36      | That's cool.                                                      |
| 40:38      | It does what you need when you need it.                           |
| 40:40      | So have you had success, Daniel, with this experimentation?       |
| 40:44      | So far, I haven't gotten too deep into it,                        |
| 40:45      | because I keep getting pulled off onto something else,            |
| 40:48      | but it got me far enough through,                                 |
| 40:50      | like in the years past, when I tried,                             |
| 40:52      | I'd run into something like I couldn't figure out                 |
| 40:54      | how to fake the stealth thing well enough,                        |
| 40:58      | or when you're first starting out scraping,                       |
| 41:00      | a lot of things will direct you to using static scraping,         |
| 41:03      | which means that it just loads the web page,                      |
| 41:06      | like there's a very popular Python library                        |
| 41:09      | called Beautiful Soup, which is great                             |
| 41:11      | for like taking apart the contents of a web page.                 |
| 41:15      | But it doesn't do anything to interact with the web page          |
| 41:19      | dynamically through its like JavaScript interfaces,               |
| 41:22      | and as anybody listening can probably imagine,                    |
| 41:25      | that's increasingly important for most websites.                  |
| 41:28      | So you can't just, like it used to be screen scraping meant,      |
| 41:31      | find the right URL, load it, and process the data.                |
| 41:35      | And in some cases, that still works,                              |
| 41:38      | and when it does, that can be a much faster, easier way           |
| 41:41      | to quote unquote scrape data,                                     |
| 41:44      | but a lot of the time now,                                        |
| 41:46      | you need to go through a little dance with the web page           |
| 41:48      | to make it think you're really a user browsing it.                |
| 41:52      | And so that's where this new stuff comes in.                      |
| 41:54      | Yes.                                                              |
| 41:55      | Yeah.                                                             |
| 41:56      | I have to say though, it is quite amazing                         |
| 41:57      | what apps are capable of doing.                                   |
| 42:00      | One that springs to mind is Transloader,                          |
| 42:03      | which is a great iOS and Mac OS application,                      |
| 42:06      | the idea being you send it a URL and say,                         |
| 42:08      | hey, go download this on my Mac,                                  |
| 42:09      | but not the Mac that I'm currently on that Mac over there,        |
| 42:12      | or this Mac and that Mac, or whatever it is,                      |
| 42:14      | and you can do it from your phone,                                |
| 42:15      | but you can pre authenticate yourself.                            |
| 42:17      | So it can keep your cookies and everything                        |
| 42:19      | so that it can then download stuff                                |
| 42:21      | using your authentication credentials,                            |
| 42:24      | which it wouldn't be able to do otherwise,                        |
| 42:26      | because it's just going to hit the URL,                           |
| 42:28      | and the URL is going to go, no, I don't know you,                 |
| 42:30      | but if you've pre logged in,                                      |
| 42:31      | then as long as the cookies don't expire,                         |
| 42:34      | I can remember that.                                              |
| 42:34      | And it's amazing how web scraping has snuck into our lives,       |
| 42:38      | even in ways that people aren't aware of.                         |
| 42:40      | Yeah.                                                             |
| 42:41      | I haven't seen this app,                                          |
| 42:42      | but I'm looking at the app store page right now,                  |
| 42:44      | and it looks like something I should check out,                   |
| 42:45      | because that's a great example.                                   |
| 42:48      | Like part of this whole puzzle                                    |
| 42:49      | is storing all your credentials and cookies and stuff.            |
| 42:52      | Yeah.                                                             |
| 42:53      | It sounds like this app has solved that aspect of the puzzle.     |
| 42:57      | Yes.                                                              |
| 42:58      | It's made by the creator of [[Yoink]],                                |
| 42:59      | and so he's got a couple of good apps,                            |
| 43:02      | including Backlook,                                               |
| 43:03      | which is a great app for developers.                              |
| 43:07      | This episode of the Automators podcast                            |
| 43:09      | is brought to you by Hunter Douglas.                              |
| 43:11      | Just go to hunterdouglas.com/automators                     |
| 43:14      | to start automating your home                                     |
| 43:16      | and take advantage of some generous rebate savings                |
| 43:18      | opportunities.                                                    |
| 43:20      | We all want to live well, at ease, in comfort,                    |
| 43:23      | in style,                                                         |
| 43:24      | and Hunter Douglas can help you do just that                      |
| 43:25      | with their innovative window shade designs,                       |
| 43:28      | gorgeous fabrics,                                                 |
| 43:29      | and control systems so advanced                                   |
| 43:31      | they can be scheduled to automatically                            |
| 43:33      | just to their optimal position throughout the day.                |
| 43:36      | We're automators and Hunter Douglas is there for you.             |
| 43:39      | Hunter Douglas's shades diffuse harsh sunlight,                   |
| 43:42      | instead casting a beautiful glow across the room.                 |
| 43:45      | With their adaptability,                                          |
| 43:47      | you can enjoy the view outside a window                           |
| 43:49      | without needing to give up your privacy,                          |
| 43:51      | and you can bring this all together                               |
| 43:53      | with Hunter Douglas's power view technology.                      |
| 43:56      | This ensures that your shades will automatically reposition       |
| 43:59      | for the perfect balance of light,                                 |
| 44:01      | privacy, and insulation, morning, noon, and night.                |
| 44:04      | The great thing about Hunter Douglas                              |
| 44:05      | is you don't have to compromise.                                  |
| 44:07      | You can get the best in window products and shades,               |
| 44:10      | plus the best in automation.                                      |
| 44:11      | They're putting it all together for you                           |
| 44:13      | so you can be automated                                           |
| 44:14      | and have beautiful window treatments.                             |
| 44:16      | Hunter Douglas shades are compatible                              |
| 44:18      | with all your favourite home automation systems,                   |
| 44:21      | Amazon Alexa, [[HomeKit\|Apple HomeKit]], Google Assistant,                    |
| 44:24      | IFTTT, and more.                                                  |
| 44:27      | Look, you're listening to automators,                             |
| 44:28      | you want to automate your home,                                   |
| 44:30      | and this stuff makes it super easy.                               |
| 44:32      | You can integrate your shades                                     |
| 44:33      | with your other products in your home,                            |
| 44:35      | using [[HomeKit\|Apple HomeKit]].                                              |
| 44:37      | And you can get that control with Hunter Douglas.                 |
| 44:39      | So you can live beautifully with Hunter Douglas,                  |
| 44:42      | enjoying greater convenience, enhanced style,                     |
| 44:44      | and increased comfort in your home throughout the day.            |
| 44:47      | And right now, for a limited time,                                |
| 44:49      | you can take advantage of generous rebate savings opportunities   |
| 44:53      | on select styles.                                                 |
| 44:54      | To do that, go to hunterdouglas.com/automators,             |
| 44:58      | that's H-U-N-T-E-R-D-O-U-G-L-A-S dot com/automators.        |
| 45:04      | And our thanks to Hunter Douglas                                  |
| 45:05      | for their support of the automators and all of Relay FM.          |
| 45:11      | So, Daniel, obviously you're having fun with, you know,           |
| 45:14      | some JavaScript there with Node and Puppeteer                     |
| 45:17      | and Headless Chrome and so on.                                    |
| 45:18      | But you also mentioned before JavaScript,                         |
| 45:21      | and obviously, you know, nowadays,                                |
| 45:24      | for starters, it's not the 1990s anymore,                         |
| 45:26      | it's the 2020s, and you've got an app called Fast Scripts.        |
| 45:31      | You know, what are you feeling about AppleScript at the moment?   |
| 45:34      | Is it going to be replaced by JavaScript                          |
| 45:36      | for automation on macOS,                                          |
| 45:39      | or is that as flaky as my personal experience tells me it is?     |
| 45:43      | And you know, where do you think this is going right now?         |
| 45:46      | Yeah, I mean, it's funny, if I dig into my archives,              |
| 45:49      | I have some old blog post probably from 10 plus years ago,        |
| 45:54      | strongly urging Apple to switch to JavaScript                     |
| 45:57      | for automation on the Mac.                                        |
| 45:59      | And it wasn't in the context, if I recall correctly,              |
| 46:01      | it wasn't in the context of like what they ended up doing,        |
| 46:04      | which is the JavaScript OSA interface                             |
| 46:07      | to basically the same infrastructure as AppleScript.              |
| 46:12      | I just thought I could see the writing on the wall                |
| 46:13      | at that time, like it was already,                                |
| 46:15      | Apple was already becoming like an industry leader                |
| 46:19      | in JavaScript by way of WebKit.                                   |
| 46:23      | And it just seemed like that was the place                        |
| 46:25      | they should focus their efforts.                                  |
| 46:28      | And they have really focused their efforts on JavaScript          |
| 46:31      | in the context of WebKit                                          |
| 46:34      | and not really anywhere else that I can think of.                 |
| 46:39      | And I mean, except, you know, so the thing is,                    |
| 46:42      | as it relates to AppleScript,                                     |
| 46:44      | in my opinion, the JavaScript OSA,                                |
| 46:47      | the JavaScript for automation as they call it,                    |
| 46:50      | it just shouldn't be there.                                       |
| 46:51      | Like it's just, I know some people use it                         |
| 46:53      | and apologies if you use it and like it more power to you,        |
| 46:56      | but it is not a game changer in any way.                          |
| 47:00      | And in my opinion, it ends up revealing more                      |
| 47:05      | like impedance mismatch between the language                      |
| 47:08      | and the AppleScript infrastructure.                               |
| 47:11      | And it's just, I find it really tedious to write myself.          |
| 47:15      | I wouldn't write a script in JavaScript for automation,           |
| 47:19      | but it's there.                                                   |
| 47:20      | And the state of things now as we, you know,                      |
| 47:25      | AppleScript is sort of, as most people know,                      |
| 47:28      | it's just not being invested in.                                  |
| 47:30      | And I don't think we can look forward to it                       |
| 47:32      | being invested in.                                                |
| 47:33      | Nonetheless, in the context of fast scripts,                      |
| 47:37      | it's, you know, I guess I should clarify,                         |
| 47:40      | fast scripts is not technically an AppleScript tool.              |
| 47:44      | It can run almost anything, almost any script on your Mac.        |
| 47:50      | However, it has certain sort of integrations                      |
| 47:53      | with the way it runs AppleScript                                  |
| 47:55      | that make it particularly nice for running AppleScript            |
| 48:00      | to many people.                                                   |
| 48:02      | So it's kind of simultaneously like a general purpose             |
| 48:04      | automation, you know, launcher tool                               |
| 48:07      | and a AppleScript power user tool.                                |
| 48:12      | You know this, I know,                                            |
| 48:13      | I'm explaining to folks who are listening.                        |
| 48:15      | And so I don't know,                                              |
| 48:18      | I don't know where AppleScript is going,                          |
| 48:20      | but I guess where I was getting at is,                            |
| 48:22      | whatever the case may be, as things stand now,                    |
| 48:26      | AppleScript is still the best thing going                         |
| 48:28      | for automating many things on your Mac.                           |
| 48:31      | And so that's my incentive is personal selfishness                |
| 48:35      | to want the best possible AppleScript running app                 |
| 48:41      | I can make for myself.                                            |
| 48:43      | And then it turns out a bunch of other people in the world        |
| 48:46      | who are still steeped in AppleScript                              |
| 48:49      | really like using fast scripts.                                   |
| 48:52      | Yes.                                                              |
| 48:53      | Yeah, I didn't realise actually until,                            |
| 48:54      | I think it was just the last week                                 |
| 48:55      | that I can use it to run other scripts.                           |
| 48:57      | Like it never occurred to me that I could do that.                |
| 49:00      | And so now I've got a bunch of fast scripts                       |
| 49:03      | that I'd written to do various things that work.                  |
| 49:05      | They're just all sitting in my menu bar on my work machine.       |
| 49:07      | It's like, oh, great, thanks.                                     |
| 49:09      | It never occurred to me,                                          |
| 49:10      | like literally never occurred to me until                         |
| 49:11      | about last week when I was poking around,                         |
| 49:13      | go, I wonder if I can write an AppleScript                        |
| 49:15      | to run the bash code.                                             |
| 49:15      | And it's like, wait a minute,                                     |
| 49:17      | hang on a second, I'm over complicating things here.              |
| 49:20      | But yeah, it is amazing to me in particular,                      |
| 49:23      | how powerful AppleScript is in terms of everything else.          |
| 49:29      | And I think you're right,                                         |
| 49:30      | because JavaScript expects you to be working with objects         |
| 49:34      | and has JavaScript object notation, JSON, and so on.              |
| 49:38      | So a lot of people think of it and use it like that.              |
| 49:40      | And as a web developer, I very definitely do.                     |
| 49:42      | And it is a mismatch.                                             |
| 49:44      | When you're working with something                                |
| 49:47      | that's from the operating system,                                 |
| 49:50      | it isn't just an object in the sense that you might think of it.  |
| 49:54      | And so manipulating it the same way                               |
| 49:56      | that you would do elsewhere is not impossible.                    |
| 50:01      | It's just awkward in some ways.                                   |
| 50:05      | And I find that actually having the right language,               |
| 50:08      | like it's the right tool for the right job, right?                |
| 50:11      | Just because you can use a hammer to drive in a screw             |
| 50:13      | doesn't mean that it's a good answer.                             |
| 50:15      | And it's one of those things where it flows better                |
| 50:19      | with AppleScript.                                                 |
| 50:19      | And oddly enough, I've read a lot of JavaScript day to day,       |
| 50:24      | but if you write the same script in AppleScript                   |
| 50:28      | and in JavaScript object notation, JavaScript for automation,     |
| 50:32      | you'll often find the AppleScript ones faster.                    |
| 50:35      | Sometimes by a very significant amount,                           |
| 50:37      | which is just very weird and entertaining.                        |
| 50:40      | And also sometimes the AppleScript one works                      |
| 50:42      | and the JavaScript one doesn't.                                   |
| 50:44      | And my conclusion is it's not hooked up                           |
| 50:46      | to the same Apple events quite perfectly.                         |
| 50:50      | And so something just misses somewhere.                           |
| 50:53      | So I tend to fall back to AppleScript                             |
| 50:55      | rather than reaching for JavaScript there.                        |
| 50:57      | Well, one possible explanation for that                           |
| 50:59      | is the neglect that AppleScript has had.                          |
| 51:04      | Think about it, it was inventid and implemented                   |
| 51:08      | to run on 1990s Macs.                                             |
| 51:11      | So it's optimised for parsing all of the language,                |
| 51:16      | running all the commands to be fast on a 1990s Mac.               |
| 51:20      | And you know how it is now, you run some old 1990s software       |
| 51:24      | on a current Mac, it's gonna blaze.                               |
| 51:26      | And whereas with the JavaScript for automation stuff,             |
| 51:29      | they have to load in the whole infrastructure                     |
| 51:32      | of JavaScript engine that can power the web.                      |
| 51:36      | And so I don't know, that's kind of an interesting example        |
| 51:39      | where it's like, well, it's missing a lot of stuff,               |
| 51:41      | but what it has, it can do sometimes quite quickly.               |
| 51:44      | Well, I mean, I think also with AppleScript,                      |
| 51:47      | there was a honeymoon period where there were a group             |
| 51:49      | of extremely smart people at Apple working actively               |
| 51:54      | on making AppleScript really awesome.                             |
| 51:57      | And while Apple kind of the bloom fell off the rose for Apple,    |
| 52:00      | that work was done.                                               |
| 52:02      | I'm not sure there was ever a honeymoon period                    |
| 52:04      | for implementation of JavaScript on the Mac.                      |
| 52:07      | No, no, no, it's, you're absolutely right.                        |
| 52:09      | And it feels, that's why it just feels so tacked on               |
| 52:13      | to me that I think it would be better                             |
| 52:15      | if it wasn't there in many respects.                              |
| 52:18      | Yeah, yeah, that is something that can often be said              |
| 52:21      | about many solutions, you know, you see a company is done.        |
| 52:25      | Oh yeah, so like you wanna be able to download                    |
| 52:27      | all the data, great.                                              |
| 52:29      | So we're gonna give you a 3000 megabyte zip file.                 |
| 52:32      | And we've given you every single piece of information             |
| 52:35      | that we've got about you, rendered as a PNG.                      |
| 52:39      | It's very high resolution, but it's all rendered as a PNG.        |
| 52:41      | It's like, great, thanks, you know, technically compliant,        |
| 52:44      | but not actually being useful.                                    |
| 52:45      | You may as well have not bothered.                                |
| 52:47      | And unfortunately, sometimes JavaScript for automation            |
| 52:52      | can feel like that.                                               |
| 52:54      | I do think that we've lost the thread a little bit.               |
| 52:57      | Yes.                                                              |
| 52:58      | So you've made this app Fast Scripts,                             |
| 52:59      | and there are other ways to launch [[AppleScript\|AppleScripts]] on your Mac,     |
| 53:02      | but tell us, why does Fast Scripts exist?                         |
| 53:06      | Well, Fast Scripts goes back to a time                            |
| 53:09      | before there were many other ways to run scripts                  |
| 53:13      | for one thing.                                                    |
| 53:14      | When I wrote it, it was around the turn of the century.           |
| 53:18      | So it's been a while.                                             |
| 53:21      | And I wrote it actually early in the Mac OS 10 days               |
| 53:25      | as I was missing the functionality from an OS 9,                  |
| 53:30      | an earlier app called, I think it was called,                     |
| 53:34      | OS A menu.                                                        |
| 53:36      | And it was basically started as a perfect copy of that,           |
| 53:41      | just like the idea would be,                                      |
| 53:42      | there would be an icon in the menu bar.                           |
| 53:44      | It would list your scripts,                                       |
| 53:45      | and you would select them and run them.                           |
| 53:48      | And the motivation was,                                           |
| 53:50      | and the reason it's called Fast Scripts,                          |
| 53:52      | is because at that time,                                          |
| 53:54      | Apple and scripting automation people in general                  |
| 53:57      | were all focused on like long workflows.                          |
| 54:01      | Like the main use case for scripts                                |
| 54:03      | was to write something that you could point at your pile          |
| 54:07      | of like a hundred photos and,                                     |
| 54:09      | you know, a thousand pages of manuscript                          |
| 54:11      | and have it like typeset it or something.                         |
| 54:14      | And it would take an hour or two,                                 |
| 54:15      | and it would be done, it would be great, it would be automated.   |
| 54:18      | But those types of tasks were all oriented around                 |
| 54:21      | like opening a script in [[Script Editor]]                            |
| 54:23      | and manually invoking it with a mouse or something.               |
| 54:27      | And my idea at the time,                                          |
| 54:29      | and the very first version of Fast Scripts                        |
| 54:31      | didn't support keyboard shortcuts or anything.                    |
| 54:34      | It was just the icon in the menu bar,                             |
| 54:36      | but the idea was to be able to run scripts                        |
| 54:40      | that it wouldn't be worth opening up [[Script Editor]],               |
| 54:44      | opening the script,                                               |
| 54:45      | and clicking the play button on the [[Script Editor]].                |
| 54:49      | So, you know, examples are things like,                           |
| 54:52      | I have scripts that run,                                          |
| 54:54      | I run in [[Safari]] to go to all like the favourite URLs               |
| 54:58      | I like to go to.                                                  |
| 54:59      | I would never open up [[Script Editor]]                               |
| 55:01      | to go put like a Open New York Times news,                        |
| 55:06      | you know, script and run it.                                      |
| 55:09      | So, the idea was fast,                                            |
| 55:11      | I wanted the scripts to be both fast in their availability        |
| 55:16      | and fast in their execution.                                      |
| 55:18      | So, the very first, and that was the other thing,                 |
| 55:20      | is with [[AppleScript]], with the [[Script Editor]] at that time,        |
| 55:25      | every time you ran a script,                                      |
| 55:27      | I think it would load the whole script into memory                |
| 55:29      | and then run it.                                                  |
| 55:30      | And so, there was always a little lag.                            |
| 55:32      | And so, the first version of Fast Scripts                         |
| 55:34      | traded the cost of memory for speed                               |
| 55:41      | by loading every script into memory ahead of time.                |
| 55:44      | And so, it would all be there ready to run                        |
| 55:46      | so that when you invoked the script, it would be instant.         |
| 55:49      | And that was unheard of at the time.                              |
| 55:52      | So, it was kind of scratching my own itch,                        |
| 55:54      | but then slowly, but surely people were like,                     |
| 55:56      | wow, there's a type of script                                     |
| 55:58      | that I can't really run meaningfully                              |
| 56:01      | in any other context but this.                                    |
| 56:03      | So, anyway, over time,                                            |
| 56:06      | the sort of primary value of the app has changed                  |
| 56:09      | and it's been interesting for me because,                         |
| 56:12      | for instance, in the most recent version,                         |
| 56:15      | Fast Scripts 3, which was just released a few months ago,         |
| 56:20      | it, I think it's a few months ago,                                |
| 56:24      | I'm sort of spacey as everybody else is                           |
| 56:26      | in pandemic thinking.                                             |
| 56:30      | One of the things I had to do was abandon                         |
| 56:32      | my like Fast Scripts 1.0 idea                                     |
| 56:35      | that scripts should be loaded into memory.                        |
| 56:39      | And it turned out it didn't matter                                |
| 56:41      | because computers are fast now.                                   |
| 56:44      | Not only, in Fast Scripts 3,                                      |
| 56:46      | not only are scripts not pre-loaded into memory,                  |
| 56:49      | Fast Scripts 3 also adds all these new efficiencies               |
| 56:53      | around being able to run multiple scripts at the same time.       |
| 56:57      | And that involves this whole system of me                         |
| 57:02      | spawning a separate application process                           |
| 57:04      | for every script that you run.                                    |
| 57:06      | And that sounds really complicated                                |
| 57:08      | and inefficient but it's super efficient                          |
| 57:10      | and it's super fast and it's great                                |
| 57:12      | because it defies every implementation detail                     |
| 57:15      | of the first version of Fast Scripts,                             |
| 57:18      | but it still fulfills all of the user expectations.               |
| 57:22      | Yes, yeah, that is one of the things                              |
| 57:25      | where I was just thinking like, pooh, yeah,                       |
| 57:27      | like I think my Mac Studio that's sitting here,                   |
| 57:29      | like I didn't even go all out on the spec,                        |
| 57:31      | I'm pretty certain it can run                                     |
| 57:33      | the vast majority of [[AppleScript\|AppleScripts]] insanely quickly,              |
| 57:36      | which is a great thing.                                           |
| 57:38      | Speaking of updates that you've done recently,                    |
| 57:40      | one of the ones that I loved,                                     |
| 57:42      | and of course this went everywhere around                         |
| 57:45      | the nerd circle and the internet,                                 |
| 57:47      | I know John Gruber posted about it,                               |
| 57:49      | I'm pretty certain Dr. Drang posted about this,                   |
| 57:51      | you've streamlined regular expressions in [[AppleScript]].           |
| 57:55      | Guilty.                                                           |
| 57:57      | Yeah, that's the nerdiest thing I've done                         |
| 58:00      | for the scripting community in a long time.                       |
| 58:03      | It's funny because I had all these priorities                     |
| 58:06      | on my list of things to do for Fast Scripts                       |
| 58:08      | that were things like, I just mentioned things like,              |
| 58:11      | running multiple scripts at a time                                |
| 58:13      | and spawning out to different processes,                          |
| 58:16      | supporting progress feedback through the standard                 |
| 58:19      | progress mechanism, these things I got into Fast Scripts 3        |
| 58:23      | and then I was like, breathe a sigh of relief                     |
| 58:26      | because now all the stuff that's been nagging at me               |
| 58:30      | that I wanted to do for 10 years or so,                           |
| 58:33      | I got done in Fast Scripts 3.                                     |
| 58:35      | And now I can just focus on things                                |
| 58:37      | that I think are sort of,                                         |
| 58:39      | it's kind of like I built the house                               |
| 58:40      | and now I can put up the nice curtains,                           |
| 58:42      | it's like, okay, the house is waterproof,                         |
| 58:46      | all of the doors and latches work, now let's make this place      |
| 58:50      | feel nice and the regular expression support                      |
| 58:52      | is kind of the first and I hope a long line                       |
| 58:56      | of scripting affordances for the app.                             |
| 59:00      | So for anybody out there who uses [[AppleScript]],                   |
| 59:03      | the idea is basically Fast Scripts is a launcher tool             |
| 59:06      | but it also supports its own scripting commands                   |
| 59:09      | that you can easily use and access                                |
| 59:12      | even if you're not running the script from Fast Scripts,          |
| 59:15      | but it kind of includes its own scripting additions               |
| 59:18      | and this regular expression thing that Rose is alluding to        |
| 59:22      | is basically a way to process text in your [[AppleScript\|AppleScripts]]          |
| 59:29      | without the usual mechanism                                       |
| 59:32      | for using regular expressions was to dispatch out                 |
| 59:35      | to a shell script or to use a third party script library          |
| 59:39      | or to automate with [[BBEdit]] or something like that.               |
| 59:43      | Yes, so what you can do now is inside your [[AppleScript]]           |
| 59:47      | wherever you are, where you need to split some text up,           |
| 59:49      | you can just continue where you are                               |
| 59:50      | and say, tell Application Fast Scripts,                           |
| 59:52      | do whatever the magic is that you need to do                      |
| 59:55      | and then tell and then you're back in the regular script          |
| 59:58      | and you've just had a very quick conversation                     |
| 01:00:01   | with Fast Scripts and it's done some magic.                       |
| 01:00:04   | Yeah, used it a couple of times, I love it.                       |
| 01:00:06   | That's great, I'm glad to hear it                                 |
| 01:00:08   | and I want to emphasise for anybody listening                     |
| 01:00:11   | that that is a completely free feature of the app                 |
| 01:00:14   | and one of the things I want to do with Fast Scripts              |
| 01:00:17   | and I've wanted to do since the beginning                         |
| 01:00:19   | is to have it be as a baseline product,                           |
| 01:00:23   | a better way, basically a better version                          |
| 01:00:25   | of Apple's script menu, but that also does something,             |
| 01:00:29   | does that job better and then also offers extra things            |
| 01:00:33   | for free and then premium features                                |
| 01:00:36   | that you get paying a little bit more.                            |
| 01:00:38   | So that I encourage people, if they're interested in that,        |
| 01:00:42   | just consider downloading and using Fast Scripts for free,        |
| 01:00:46   | don't even worry about whether you might want                     |
| 01:00:48   | to pay for it someday, because yeah,                              |
| 01:00:50   | part of that for me is I hope someday you do pay for it,          |
| 01:00:53   | but in the meantime, I just have empathy for scripters            |
| 01:00:56   | and I would like everybody out there                              |
| 01:00:58   | who can see the value in a streamlined script menu                |
| 01:01:03   | to use it and enjoy it.                                           |
| 01:01:05   | Yes, yes, and it is really great                                  |
| 01:01:08   | that you're one of the many people making tools                   |
| 01:01:11   | that make the scripting solutions                                 |
| 01:01:14   | and the automation solutions                                      |
| 01:01:15   | that we already use even better.                                  |
| 01:01:16   | And it's lovely to see Fast Scripts doing this                    |
| 01:01:20   | from both sides, both the executing                               |
| 01:01:23   | as well as the being involved inside of the execution.            |
| 01:01:29   | So you get all of the advantages, which is even better.           |
| 01:01:32   | Yeah, and I'll just mention one other thing                       |
| 01:01:34   | about the whole philosophy of Fast Scripts                        |
| 01:01:36   | is basically since the beginning,                                 |
| 01:01:38   | whenever I noticed something annoying                             |
| 01:01:40   | about the process of running a script,                            |
| 01:01:42   | I think, how can I make that better?                              |
| 01:01:44   | And so there's little things Fast Scripts does                    |
| 01:01:47   | that you might not notice unless it wasn't doing them.            |
| 01:01:50   | And it includes things like there's a priority                    |
| 01:01:54   | in Fast Scripts that if your script brings up                     |
| 01:01:56   | like a prompt or a panel, then that takes attention               |
| 01:02:02   | away from the app you were in.                                    |
| 01:02:04   | Now, I'm pretty sure it's still the case                          |
| 01:02:07   | that in every other way of running,                               |
| 01:02:09   | or at least most other ways of running scripts,                   |
| 01:02:12   | that after you're done dismissing the panel,                      |
| 01:02:14   | now you're suddenly like in some kind of weird limbo              |
| 01:02:17   | where you're not really focused on the old app anymore.           |
| 01:02:21   | And that's one example of many things                             |
| 01:02:23   | where I try to make the process of running the script nicer.      |
| 01:02:26   | And so we'll actually remember what app you were in               |
| 01:02:29   | and put you back into it after you're done.                       |
| 01:02:31   | And that's what I was gonna ask really,                           |
| 01:02:32   | because I feel like although Fast Scripts started out             |
| 01:02:36   | to run a publishing workflow in the 90s,                          |
| 01:02:40   | it really has evolved a lot.                                      |
| 01:02:42   | And like you keep finding all of these rough edges                |
| 01:02:45   | around automation on the Mac,                                     |
| 01:02:47   | and then Fast Scripts comes in with a solution,                   |
| 01:02:49   | whether it be a regular expression tool                           |
| 01:02:52   | or just a way to get your scripts running faster.                 |
| 01:02:55   | And then to me, it's not the menu bar, man.                       |
| 01:02:58   | It's the keyboard shortcuts.                                      |
| 01:02:59   | I love that so much, you know?                                    |
| 01:03:00   | Yeah, I mean, that's funny too,                                   |
| 01:03:02   | because that's like, Rose was saying earlier,                     |
| 01:03:05   | like she hadn't noticed that you can run non-[[AppleScript\|AppleScripts]].       |
| 01:03:07   | And I was thinking to myself, you know,                           |
| 01:03:09   | it's all on me, but the main thing I've done wrong                |
| 01:03:13   | with Fast Scripts over all these years,                           |
| 01:03:15   | from the beginning, I made it for people                          |
| 01:03:17   | who basically I knew already knew what they wanted.               |
| 01:03:21   | And it was, you know, and so I never had to,                      |
| 01:03:24   | I never felt like I had to explain what Fast Scripts can do.      |
| 01:03:28   | And the negative of that is that I've been catching up            |
| 01:03:31   | ever since, and there's all these things in it                    |
| 01:03:34   | where I've added things over the years to accommodate             |
| 01:03:37   | something that like most people at the time                       |
| 01:03:39   | just sort of expected it would do.                                |
| 01:03:42   | And then as time goes on, it's just this accumulating mass        |
| 01:03:45   | of features and functionality that aren't all                     |
| 01:03:48   | totally well documented and, you know,                            |
| 01:03:51   | not promoted or marketed.                                         |
| 01:03:53   | So that's something I'll work on,                                 |
| 01:03:55   | but it is kind of like one of these things                        |
| 01:03:57   | kind of like one of these apps that is what I'm,                  |
| 01:04:00   | one thing I'm proud of it for is it can be                        |
| 01:04:04   | exceedingly simple on the surface while having depth              |
| 01:04:08   | if you dig into it and look for it.                               |
| 01:04:11   | I would like to just make a note in your defense.                 |
| 01:04:13   | I've been using it to run Python scripts,                         |
| 01:04:15   | so I'm not quite sure why it didn't occur to me                   |
| 01:04:17   | that I could run a Bash script.                                   |
| 01:04:18   | I think it's just one of those things where my brain was like,    |
| 01:04:22   | well, obviously this is completely different                      |
| 01:04:24   | and therefore that's not going to work.                           |
| 01:04:25   | So I'm not even going to try.                                     |
| 01:04:28   | And then I was looking at it the other day and was like,          |
| 01:04:30   | I bet this is going to work.                                      |
| 01:04:31   | And I popped it in there.                                         |
| 01:04:33   | Well, it works, surprise.                                         |
| 01:04:36   | So yeah, it's just one of those things where it's just like,      |
| 01:04:39   | oh yeah, I missed trying the obvious.                             |
| 01:04:41   | And I think this is something where as well,                      |
| 01:04:43   | some people who don't know what they were like,                   |
| 01:04:45   | who don't necessarily know that that's the thing                  |
| 01:04:47   | would just try putting all the scripts in there                   |
| 01:04:49   | and seeing what happens.                                          |
| 01:04:52   | And, you know, and so they would just have solved                 |
| 01:04:54   | that problem by not even thinking about it.                       |
| 01:04:57   | And instead I overthought it which complicated things             |
| 01:04:59   | because that's me and I'm special.                                |
| 01:05:00   | Yeah, try throwing random things in there                         |
| 01:05:03   | because probably the least expected quote unquote script          |
| 01:05:06   | you can throw in there is any document.                           |
| 01:05:10   | If you just throw like a file in there,                           |
| 01:05:12   | you can throw like a pages document in there                      |
| 01:05:14   | and you could assign it to a keyboard shortcut if you want to.    |
| 01:05:17   | And it'll open it.                                                |
| 01:05:20   | So, you know, it kind of tries to deal with everything            |
| 01:05:23   | as a script first and then if it can't,                           |
| 01:05:25   | it deals with it as an app or as a document.                      |
| 01:05:28   | So it just opens things in that sense.                            |
| 01:05:31   | It's like so many other launchers in that way.                    |
| 01:05:34   | But it's unlike something like [[LaunchBar]],                         |
| 01:05:36   | it's not really oriented around general purpose launching.        |
| 01:05:40   | It's oriented around launching things                             |
| 01:05:42   | that you organise to be in the scripts folder.                    |
| 01:05:46   | While I'm thinking about it,                                      |
| 01:05:48   | do you discourage people from using sim links                     |
| 01:05:51   | to put scripts in there?                                          |
| 01:05:53   | Because I've got scripts that are stored                          |
| 01:05:55   | for various reasons inside of this [[Git]] repo                       |
| 01:05:58   | or that [[Git]] repo.                                                 |
| 01:05:59   | And I don't necessarily want to put them all                      |
| 01:06:02   | in the library scripts folder.                                    |
| 01:06:04   | Is that something you recommend or discourage                     |
| 01:06:06   | or is it just fine?                                               |
| 01:06:08   | It should be just fine.                                           |
| 01:06:10   | It's funny, in particular,                                        |
| 01:06:12   | sim links were a tricky challenge for me                          |
| 01:06:14   | that I don't think I quite got right until Fast Scripts 3.        |
| 01:06:19   | And I hope it's right now                                         |
| 01:06:20   | and let me know if you run into problems.                         |
| 01:06:22   | But I did for many, many, many years                              |
| 01:06:25   | support aliases without supporting sim links.                     |
| 01:06:29   | So distinction there that an alias is a file                      |
| 01:06:33   | that can be resolved to a target                                  |
| 01:06:36   | whereas a sim link is at the file system level.                   |
| 01:06:39   | But yeah, it should work.                                         |
| 01:06:40   | And I encourage that.                                             |
| 01:06:41   | And it's sort of all part of a shortcoming of Fast Scripts        |
| 01:06:45   | that it's not easier to configure it                              |
| 01:06:47   | to run things outside of the scripts folder.                      |
| 01:06:49   | But that's probably something on the list for the future.         |
| 01:06:53   | But yeah, in the meantime,                                        |
| 01:06:55   | that is actually a really great way                               |
| 01:06:57   | is just to either drag aliases in                                 |
| 01:07:01   | or to make sim links to folders                                   |
| 01:07:04   | or to specific scripts that are outside the.                      |
| 01:07:07   | And that can be really useful in terms of the,                    |
| 01:07:11   | this is kind of getting into deep Fast Scripts feature territory. |
| 01:07:15   | But one of the great things about Fast Scripts                    |
| 01:07:16   | is you can have app-specific scripts                              |
| 01:07:18   | that are determined just by where they are                        |
| 01:07:21   | in your scripts hierarchy.                                        |
| 01:07:22   | In the application subfolder of your scripts hierarchy,           |
| 01:07:27   | you can put app-specific scripts.                                 |
| 01:07:28   | And sometimes you wanna have the same script                      |
| 01:07:30   | in multiple apps.                                                 |
| 01:07:31   | And so using the sim links or aliases                             |
| 01:07:34   | is another good trick there.                                      |
| 01:07:35   | Yes, for some reason,                                             |
| 01:07:37   | I don't think I ever looked at the documentation                  |
| 01:07:39   | to see that aliases were supported.                               |
| 01:07:40   | And that's a lot easier                                           |
| 01:07:41   | because you just right click and find her                         |
| 01:07:43   | and make aliases right there.                                     |
| 01:07:44   | I years ago installed some utilities                              |
| 01:07:48   | from JuneCloud, the makers of delivery.                           |
| 01:07:50   | And they have a service for making sim links to things,           |
| 01:07:55   | which I've used a lot over the years.                             |
| 01:07:57   | Obviously, you can do it in a number of ways.                     |
| 01:08:00   | But of course, an alias is really easy.                           |
| 01:08:02   | So that's perfect.                                                |
| 01:08:04   | That may even be better in some ways for what I'm doing.          |
| 01:08:08   | Hopefully whatever you try works.                                 |
| 01:08:09   | So I'm glad that I now support both of them.                      |
| 01:08:11   | I mean, I've yet to run into problems outside of my brain.        |
| 01:08:14   | All the problems I've run into so far                             |
| 01:08:15   | have basically been my brain going,                               |
| 01:08:16   | I don't know what to do here.                                     |
| 01:08:18   | I'm just gonna not do it                                          |
| 01:08:20   | because I don't think that's gonna work.                          |
| 01:08:21   | And it turns out when I actually get around to trying it,         |
| 01:08:24   | it does work.                                                     |
| 01:08:25   | So it's quite impressive, I have to say.                          |
| 01:08:28   | Daniel, I wanted to ask you,                                      |
| 01:08:29   | because you've got another app                                    |
| 01:08:31   | that's not an automation focused app,                             |
| 01:08:33   | but an app that benefits from automation integration.             |
| 01:08:36   | And that's MarsEdit.                                              |
| 01:08:37   | MarsEdit is an excellent blogging tool.                           |
| 01:08:40   | In fact, I recently switched to WordPress                         |
| 01:08:43   | and hooray, I'm able to use MarsEdit again.                       |
| 01:08:46   | And it's so nice having like a native app on my Mac.              |
| 01:08:48   | I can write on and not worry about, you know,                     |
| 01:08:51   | the web screwing me over.                                         |
| 01:08:55   | So, but you have like,                                            |
| 01:08:57   | because you come to this with a kind of an automator's mindset,   |
| 01:09:01   | you have brought automation to MarsEdit.                          |
| 01:09:03   | Can you kind of share for the audience                            |
| 01:09:04   | some of the stuff you're doing in MarsEdit?                       |
| 01:09:07   | Yeah, well, so MarsEdit automation                                |
| 01:09:11   | is largely oriented around,                                       |
| 01:09:13   | you know, editing the contents of a particular post               |
| 01:09:18   | or putting together a post.                                       |
| 01:09:20   | So the ways I use it personally is like speaking of podcasts,     |
| 01:09:26   | I have like a script that puts together                           |
| 01:09:29   | a new episode post for my podcast.                                |
| 01:09:33   | And it's, you know, just sort of like prompts me                  |
| 01:09:37   | for the title and the excerpt                                     |
| 01:09:40   | and the list of links and all that.                               |
| 01:09:42   | And then it puts it together and it's just a way of,              |
| 01:09:45   | it's kind of like, it's actually like kind of filling             |
| 01:09:47   | the shortcoming of there being like a stationary tool             |
| 01:09:50   | for particular post formats.                                      |
| 01:09:54   | But that's one example of something I use it for.                 |
| 01:09:58   | I also use it for automating, creating new blog posts             |
| 01:10:02   | for all of my products themselves, the apps.                      |
| 01:10:05   | Like when I have a new version of Fast Scripts or MarsEdit,       |
| 01:10:08   | I have a script for each of those                                 |
| 01:10:10   | that asks me what version it is                                   |
| 01:10:13   | and what the release notes are.                                   |
| 01:10:15   | And that just automatically generates a new blog post             |
| 01:10:19   | document that I can then send to the blog.                        |
| 01:10:23   | That's one thing, you know, some people, I will say,              |
| 01:10:26   | some people look at MarsEdit and they think,                      |
| 01:10:28   | great, this thing's automatable.                                  |
| 01:10:30   | I'm gonna use it to migrate my whole blog                         |
| 01:10:33   | from like, let's say blogger to WordPress.                        |
| 01:10:35   | And I usually discourage that.                                    |
| 01:10:38   | And in fact, I don't have great support for that,                 |
| 01:10:42   | in part because MarsEdit is limited                               |
| 01:10:46   | in the access it has to most blogging systems,                    |
| 01:10:51   | you know, not in ways that prevent you                            |
| 01:10:53   | from doing a great job writing and publishing posts,              |
| 01:10:56   | but in ways that, you know, do limit how well                     |
| 01:11:00   | you can perfectly clone an existing blog.                         |
| 01:11:04   | So I usually encourage people to use other techniques             |
| 01:11:06   | like most blog systems have an export feature,                    |
| 01:11:09   | you know, data export, but, you know,                             |
| 01:11:13   | all kinds of things like that, little nice things                 |
| 01:11:17   | like I have little scripts to put in links                        |
| 01:11:25   | to things that like, with a referral code in them,                |
| 01:11:29   | like, you know, paste a link into this blog post                  |
| 01:11:32   | with a referral code from Amazon or whatever.                     |
| 01:11:36   | And those are the kinds of things that, again,                    |
| 01:11:38   | it's easy for me to add as I use the app                          |
| 01:11:42   | and just get annoyed by things.                                   |
| 01:11:43   | So I have a long list of things I'd like to add still             |
| 01:11:46   | to MarsEdit automation-wise, but that's that kind of stuff.       |
| 01:11:51   | And for example, I recently added support                         |
| 01:11:54   | for setting the contents of, one of the things                    |
| 01:11:57   | you can do in MarsEdit is you can configure                       |
| 01:11:59   | your custom fields if you have those in WordPress.                |
| 01:12:02   | And so one expansion to the automation I recently added           |
| 01:12:06   | lets you set the values of the custom fields,                     |
| 01:12:08   | which was great because I do all my sponsorships                  |
| 01:12:12   | on my blog posts for my podcast using custom fields,              |
| 01:12:18   | and I used to have to do all that manually.                       |
| 01:12:19   | And now I can just run a script that says like,                   |
| 01:12:22   | okay, put the, you know, so happens, text expand                  |
| 01:12:26   | or sometimes sponsors my podcast.                                 |
| 01:12:28   | So coincidence there, but, you know,                              |
| 01:12:30   | I can run a script that says put the TextExpander details        |
| 01:12:34   | into this blog post.                                              |
| 01:12:36   | Yeah.                                                             |
| 01:12:37   | Things like that are great.                                       |
| 01:12:38   | Have you explored shortcuts with it?                              |
| 01:12:41   | I mean, is that something you're interested in?                   |
| 01:12:43   | With MarsEdit, yeah, it's on my list.                             |
| 01:12:46   | It's actually on my list with fast scripts too.                   |
| 01:12:48   | I really think, you know,                                         |
| 01:12:50   | kind of getting back to fast scripts                              |
| 01:12:52   | and like what's up with AppleScript and shortcuts.               |
| 01:12:55   | I think as time goes forward, I'm going to be thinking            |
| 01:12:59   | increasingly like not what can I do for AppleScript authors,     |
| 01:13:04   | but what can I do for anybody                                     |
| 01:13:05   | who's automating something on the Mac, you know?                  |
| 01:13:08   | So I have ideas along those lines.                                |
| 01:13:11   | The Apple's infrastructure so far                                 |
| 01:13:14   | doesn't let you do a ton as far as running shortcuts goes.        |
| 01:13:17   | You're pretty much limited to just like                           |
| 01:13:20   | ask the shortcut system to run a shortcut by name.                |
| 01:13:23   | So it's kind of like automating the equivalent of saying          |
| 01:13:25   | like, hey, dingus, run this.                                      |
| 01:13:29   | But I think there's a lot of things I can do                      |
| 01:13:32   | to expose the similar, you know,                                  |
| 01:13:35   | the kinds of things I mentioned, scriptable things.               |
| 01:13:39   | Like another thing fast scripts has built in                      |
| 01:13:41   | is this kind of heads up display message display                  |
| 01:13:45   | scripting command that lets you kind of do                        |
| 01:13:47   | a lighter weight feedback like display a message                  |
| 01:13:51   | in the corner with self-dismissing.                               |
| 01:13:54   | If you want like streamlined messages                             |
| 01:13:57   | supposed to like an alert you have to dismiss or whatever.        |
| 01:14:00   | And that's something I plan to expose                             |
| 01:14:02   | via shortcuts to anybody                                          |
| 01:14:05   | so that you don't have to write a script necessarily              |
| 01:14:08   | to be able to take advantage of that.                             |
| 01:14:10   | And Mars Edit of course is perfect for,                           |
| 01:14:13   | it should be exposed to the shortcut system                       |
| 01:14:16   | for like so many other shortcuts                                  |
| 01:14:19   | that just work with text and images.                              |
| 01:14:21   | If you could use it as part of the workflow                       |
| 01:14:24   | that gets you to the point of a blog post                         |
| 01:14:26   | that's ready to publish,                                          |
| 01:14:27   | I think that would be really useful.                              |
| 01:14:29   | Yes, I can imagine that would be really useful.                   |
| 01:14:33   | I look forward to potentially a future                            |
| 01:14:35   | where you're crazy enough to start supporting                     |
| 01:14:38   | text-based CMS, I use Jackal.                                     |
| 01:14:42   | The number of custom fields possible with that is just,           |
| 01:14:45   | well, I mean, it's literally limitless                            |
| 01:14:47   | because it's a text file, you can put anything in there.          |
| 01:14:51   | So maybe that won't be on the back page for a while.              |
| 01:14:54   | I don't think you need to,                                        |
| 01:14:56   | I don't think you should be excited                               |
| 01:14:58   | about that being a forthcoming feature,                           |
| 01:15:00   | but I also don't think you need to feel hopeless about it.        |
| 01:15:03   | It's definitely on my list.                                       |
| 01:15:05   | It's funny because years and years and years ago,                 |
| 01:15:08   | Mars Edit did support a text-based system called Blossom.         |
| 01:15:12   | You might remember that.                                          |
| 01:15:14   | But it basically ran up against,                                  |
| 01:15:18   | I had other priorities,                                           |
| 01:15:19   | I needed to support things for Blogger and WordPress              |
| 01:15:22   | and Tumblr and all these other services.                          |
| 01:15:24   | And I fell by the wayside.                                        |
| 01:15:26   | And it's been on my mind,                                         |
| 01:15:28   | I wanna get back to it at some point                              |
| 01:15:29   | and you will be on my beta list when that happens.                |
| 01:15:34   | Oh, absolutely, sign me up.                                       |
| 01:15:35   | I'm willing to break anything.                                    |
| 01:15:37   | I hopefully just provide actually useful bug reports.             |
| 01:15:41   | But it is amazing how the right tool                              |
| 01:15:43   | can really make things a lot easier.                              |
| 01:15:46   | And also just adding even more automation support                 |
| 01:15:49   | can be really good.                                               |
| 01:15:50   | One of the things that springs to mind, of course,                |
| 01:15:52   | is [[Rogue Amoeba]] recently added shortcut support                   |
| 01:15:55   | and a new scripting support with custom JavaScript,               |
| 01:15:59   | I believe it was for [[Audio Hijack]].                                |
| 01:16:02   | Obviously, Omni Group have got custom JavaScript,                 |
| 01:16:05   | [[Drafts]] has got custom JavaScript.                                 |
| 01:16:07   | If you get nerdy, you can write [[Obsidian]] plugins.                 |
| 01:16:09   | Do you think maybe there's a future                               |
| 01:16:11   | of a custom JavaScript automation inside of Mars Edit             |
| 01:16:14   | or are you just gonna stick with                                  |
| 01:16:16   | a AppleScript and shortcuts for now                              |
| 01:16:18   | as you've already got a pretty long to-do list?                   |
| 01:16:20   | Yeah, well, again, it's probably not imminent or anything,        |
| 01:16:23   | but one of the reasons, I think for example,                      |
| 01:16:26   | in the Omni case, they were strongly motivated to do that         |
| 01:16:29   | in part because Apple didn't have                                 |
| 01:16:32   | automation solution for iOS                                       |
| 01:16:34   | and they wanted to offer something cross-platform                 |
| 01:16:38   | if I have my memory of that right.                                |
| 01:16:40   | And that's an issue I'm gonna face if and when I,                 |
| 01:16:45   | for instance, bring Mars Edit to iOS,                             |
| 01:16:47   | then I'm gonna have to look                                       |
| 01:16:49   | at the whole automation situation afresh.                         |
| 01:16:53   | And hopefully some of that will be addressed                      |
| 01:16:56   | by shortcuts, though the cross-platform nature                    |
| 01:16:58   | of shortcuts as of most recent Mac OS is very welcome             |
| 01:17:03   | and it's encouraging for a future                                 |
| 01:17:05   | where we can look forward to cross-platform solutions             |
| 01:17:07   | for many apps, but yeah, the JavaScript approach,                 |
| 01:17:12   | whenever I hear about, I just listened recently                   |
| 01:17:14   | to the recent The Talk Show with John Gruber                      |
| 01:17:18   | and Paul Kafasis and as I was listening to it,                   |
| 01:17:22   | I was like, you know what?                                        |
| 01:17:23   | Maybe I should have a JavaScript interface                        |
| 01:17:25   | because it does make sense.                                       |
| 01:17:26   | It makes a lot of sense.                                          |
| 01:17:29   | It would be, like you said, it's just one item                    |
| 01:17:32   | on my exceedingly long list of things to do.                      |
| 01:17:35   | However, the continued automation of my life                      |
| 01:17:38   | does continue to surprise me                                      |
| 01:17:40   | how many of those things I eventually get done.                   |
| 01:17:42   | Yes, yes, it's always amazing                                     |
| 01:17:44   | how much automation and scripting,                                |
| 01:17:46   | sneaky and even when we're not aware of it.                       |
| 01:17:50   | This episode of Automated is brought to you                       |
| 01:17:51   | by DEVONthink, the flagship product                               |
| 01:17:53   | from Devon Technologies.                                          |
| 01:17:54   | DEVONthink is the most professional document                      |
| 01:17:56   | and information management application for the Mac.               |
| 01:17:58   | It's the one place for storing all of your documents,             |
| 01:18:00   | snippets, all bookmarks and working with them.                    |
| 01:18:03   | The integrated AI insists you with filing and searching           |
| 01:18:05   | while the extensive search language                               |
| 01:18:07   | with advanced Boolean operators                                   |
| 01:18:08   | means you're never looking for something                          |
| 01:18:10   | and not finding it.                                               |
| 01:18:12   | DEVONthink features a flexible sync system                        |
| 01:18:14   | that supports many cloud services                                 |
| 01:18:16   | or lets you synchronise over a local network too                  |
| 01:18:18   | with everything securely encrypted.                               |
| 01:18:20   | That gives you the choice                                         |
| 01:18:21   | for however syncing works best for you.                           |
| 01:18:23   | It's got smart rules and flexible reminders                       |
| 01:18:25   | that let you automate all parts of your workflow                  |
| 01:18:26   | and delegate boring, repeating tasks.                             |
| 01:18:29   | So your system handles it.                                        |
| 01:18:31   | Let DEVONthink automatically organise your data                   |
| 01:18:33   | with rules you define.                                            |
| 01:18:35   | DEVONthink's AppleScript dictionary                               |
| 01:18:36   | is one of the largest on the Mac.                                 |
| 01:18:38   | There's no part of DEVONthink that can't be automated.            |
| 01:18:40   | Extend DEVONthink's functionality with your own commands          |
| 01:18:42   | by adding them to a scripts menu.                                 |
| 01:18:44   | Even templates can have scripts inside                            |
| 01:18:46   | and you can set up new documents                                  |
| 01:18:48   | with data from placeholders                                       |
| 01:18:49   | or inserted by your own AppleScript code.                         |
| 01:18:52   | And of course, there's so much more.                              |
| 01:18:53   | From an iOS companion app to email archiving, scanning,           |
| 01:18:55   | or even an embedded web server                                    |
| 01:18:57   | sharing data securely with your team.                             |
| 01:18:59   | Honestly, it's hard to pick which feature stands out              |
| 01:19:02   | as the most useful for DEVONthink                                 |
| 01:19:03   | because I use so much of it all the time,                         |
| 01:19:06   | like the batch processing for, you know,                          |
| 01:19:08   | managing a whole group of files                                   |
| 01:19:09   | that I've just decided that I need to import and organise.        |
| 01:19:12   | So simple.                                                        |
| 01:19:13   | You should use DEVONthink if you've got documents,                |
| 01:19:15   | you need to manage them, store them,                              |
| 01:19:17   | and have them organised in the same consistent way                |
| 01:19:19   | in various places and have a system that,                         |
| 01:19:22   | let's face it, has got your back                                  |
| 01:19:23   | when you and your personal filing mess up.                        |
| 01:19:27   | You can get 10% off of DEVONthink                                 |
| 01:19:29   | 3 or agree to it right now.                                       |
| 01:19:30   | Just go to devonttechnologies.com/automators.               |
| 01:19:33   | That's devonttechnologies.com/automators for 10% off.       |
| 01:19:36   | Our thanks to Devon Technologies                                  |
| 01:19:37   | for their support of the show and all of relay.fm.              |
| 01:19:41   | So Daniel, you have, we've been talking                           |
| 01:19:45   | through the show today.                                           |
| 01:19:46   | I feel like we've gone kind of through a little history,          |
| 01:19:48   | kind of getting started with automation,                          |
| 01:19:50   | AppleScript, JavaScript.                                          |
| 01:19:52   | And then at the end of the last segment,                          |
| 01:19:54   | we started to dip our toes into some of the developers            |
| 01:19:57   | starting to actively add shortcut support.                        |
| 01:20:00   | And there definitely feels to me                                  |
| 01:20:03   | like an evolution of automation.                                  |
| 01:20:05   | And last year, [[WWDC]], I believe it was Craig Federighi             |
| 01:20:10   | who said that shortcuts on the Mac                                |
| 01:20:12   | was one more step in their overall automation plan.               |
| 01:20:16   | And to me, that was like kind of shocking                         |
| 01:20:19   | that they have a plan for automation                              |
| 01:20:21   | because it just seemed like they really gave up                   |
| 01:20:25   | on automation a few years ago.                                    |
| 01:20:26   | And I mean, to me, the turning point was                          |
| 01:20:28   | when [[Sal Soghoian]] left the company,                                |
| 01:20:31   | I'm like, well, I guess they just don't care about this anymore.  |
| 01:20:33   | But now suddenly it does seem like there's a plan.                |
| 01:20:37   | What's your insight on that?                                      |
| 01:20:38   | Where do you think this is all heading?                           |
| 01:20:41   | I don't know.                                                     |
| 01:20:42   | I might have more to predict                                      |
| 01:20:46   | if I had Doug Moore into shortcuts myself so far.                 |
| 01:20:50   | I've kind of been like among the many users                       |
| 01:20:54   | who is intrigued by it,                                           |
| 01:20:55   | but then I start using it on the Mac in particular                |
| 01:20:58   | and run into something or other                                   |
| 01:21:01   | that just sort of takes the wind out of my sails.                 |
| 01:21:05   | So I've looked at it enough to be excited about it                |
| 01:21:09   | and where it's going.                                             |
| 01:21:12   | I don't know if, for example,                                     |
| 01:21:14   | the future that Apple has in mind would include more.             |
| 01:21:20   | I could imagine there being like a nesting system                 |
| 01:21:25   | for shortcuts.                                                    |
| 01:21:26   | They already have the ability to run a shortcut                   |
| 01:21:28   | from another shortcut,                                            |
| 01:21:31   | but if you can think back,                                        |
| 01:21:35   | has either of you ever used the [[Quartz Composer]]                   |
| 01:21:38   | that Apple used to support?                                       |
| 01:21:40   | I vaguely remember playing with this a few times.                 |
| 01:21:43   | It was very much a kind of general purpose,                       |
| 01:21:47   | scripted visual scripting tool for graphics.                      |
| 01:21:52   | And it had nodes kind of like [[Audio Hijack]]                        |
| 01:21:54   | and you'd connect them together.                                  |
| 01:21:56   | And the logic of each node would direct the data                  |
| 01:22:01   | to a different node and you could have nested compositions.       |
| 01:22:08   | I kind of hope that,                                              |
| 01:22:10   | so here's, I guess here's the high level.                         |
| 01:22:12   | Shortcuts is not sophisticated enough yet                         |
| 01:22:16   | to fulfill all the needs of automation on the Mac.                |
| 01:22:20   | I think that's accurate.                                          |
| 01:22:22   | It's probably accurate also that it's not sophisticated           |
| 01:22:25   | enough to cover the needs of iOS.                                 |
| 01:22:27   | It's just as good as it happens to get.                           |
| 01:22:30   | So if you look at shortcuts as a scaffolding for the future,      |
| 01:22:36   | I think you could imagine it getting new logic flow               |
| 01:22:44   | capabilities, like maybe little nodes in the,                     |
| 01:22:49   | I'm gonna open up a shortcut here                                 |
| 01:22:50   | to just kind of prompt my memory.                                 |
| 01:22:51   | But like, yeah, you have like a linear list right now             |
| 01:22:54   | of things in a shortcut.                                          |
| 01:22:57   | And the cool thing about [[Quartz Composer]] was                      |
| 01:23:02   | you could kind of have like a two dimensional map                 |
| 01:23:05   | of all the ways that your logic could flow.                       |
| 01:23:08   | And I could see it expanding in that way.                         |
| 01:23:13   | It has the potential to be the kind of tool                       |
| 01:23:17   | like I was alluding to earlier with fast scripts                  |
| 01:23:19   | where it could be simple on the surface                           |
| 01:23:20   | but have depth that's available only if you're interested.        |
| 01:23:25   | So it would be cool if there were like some power user,           |
| 01:23:28   | this idea of like nodes in shortcuts,                             |
| 01:23:32   | you just look for action types and you drag them in.              |
| 01:23:35   | And it would be cool if some of them were like,                   |
| 01:23:39   | run shortcut script, let's say.                                   |
| 01:23:43   | And it's like a text based way to manage all the different        |
| 01:23:48   | shortcut actions you want to invoke and chain together.           |
| 01:23:52   | And maybe it's just run job,                                      |
| 01:23:54   | maybe that's just a JavaScript.                                   |
| 01:23:56   | Maybe there's like a,                                             |
| 01:23:57   | maybe whatever they do for the future of automation               |
| 01:24:01   | involves sort of allowing more powerful segments                  |
| 01:24:06   | in the chain of execution                                         |
| 01:24:08   | that's already there with shortcuts.                              |
| 01:24:11   | Yes, yeah, because right now it's got options to do things        |
| 01:24:14   | like run JavaScript, run JavaScript for automation,               |
| 01:24:16   | run this terminal command and things like that.                   |
| 01:24:19   | But as you say, it is a very linear list.                         |
| 01:24:21   | It reminds me in some ways of the differences between Zapier      |
| 01:24:25   | and make now integral map.                                        |
| 01:24:26   | Zapier just gives you what looks like a vertical list.            |
| 01:24:28   | And there's some if statements and so on in there                 |
| 01:24:32   | if you pay for the advanced stuff you get branching               |
| 01:24:34   | and then make you've got a more visual layout                     |
| 01:24:37   | where it splits things off and goes this way or that way          |
| 01:24:40   | depending on what you're doing and things could run in parallel   |
| 01:24:44   | or it might be an exclusive branching.                            |
| 01:24:48   | And I think that's a very good way to look at it                  |
| 01:24:51   | with how this could get more powerful.                            |
| 01:24:55   | What do you think of automation hooks?                            |
| 01:24:56   | Because that's a notable lacking feature                          |
| 01:24:59   | right now on shortcuts for Mac OS.                                |
| 01:25:01   | iOS has got the automation tab                                    |
| 01:25:03   | where you can hook it into focus modes and arriving places        |
| 01:25:07   | which maybe makes less sense for the Mac                          |
| 01:25:09   | though they do have focus mode automation triggers                |
| 01:25:11   | for location which somewhat baffles me.                           |
| 01:25:15   | Actually the one that baffles me most                             |
| 01:25:17   | is the application trigger for focus modes on Mac OS.             |
| 01:25:20   | So you activate [[Safari]] and it activates your focus mode           |
| 01:25:23   | and then you tab away to reply to a message                       |
| 01:25:25   | and it deactivates your focus mode.                               |
| 01:25:28   | And then you tap back to [[Safari]]                                   |
| 01:25:29   | and it usually doesn't actually work unfortunately                |
| 01:25:31   | to activate your focus mode the second time                       |
| 01:25:34   | if you do it in fairly short sequence.                            |
| 01:25:37   | But do you think that there's a place                             |
| 01:25:39   | for an automation tab there or similar                            |
| 01:25:42   | or is that something that people should be solving                |
| 01:25:45   | through other scripting methods?                                  |
| 01:25:48   | Obviously file scripts is one way to do this.                     |
| 01:25:51   | And you've got folder actions and stuff built                     |
| 01:25:54   | into the operating system                                         |
| 01:25:55   | or do you think that shortcuts                                    |
| 01:25:56   | should maybe also step up there?                                  |
| 01:25:58   | I think that in general,                                          |
| 01:25:59   | shortcuts should step up everywhere it can reasonably be          |
| 01:26:04   | wherever it can provide parity.                                   |
| 01:26:06   | So that might mean, for instance, one day                         |
| 01:26:09   | when we have shortcuts on our watch,                              |
| 01:26:12   | we don't have shortcuts on the watch, right?                      |
| 01:26:14   | We do have shortcuts on the watch.                                |
| 01:26:15   | It's a relatively recent edition,                                 |
| 01:26:17   | I believe it was iOS 14 that added it.                            |
| 01:26:19   | It's fairly limited.                                              |
| 01:26:21   | It's fairly limited, I have to say.                               |
| 01:26:23   | A lot of things don't run like it.                                |
| 01:26:25   | So it still makes a good example.                                 |
| 01:26:27   | In fact, maybe a better example that it does exist                |
| 01:26:30   | because I think it's okay for it to not step up                   |
| 01:26:34   | in many of the same ways that a shortcut run on iOS               |
| 01:26:38   | or the Mac should behave a certain way, you know?                 |
| 01:26:42   | And, but I'm constantly frustrated                                |
| 01:26:45   | by the little things that Apple has not stepped up                |
| 01:26:49   | to provide parity for between iOS and the Mac                     |
| 01:26:52   | and it comes down to like things as simple                        |
| 01:26:55   | as like setting timers, right?                                    |
| 01:26:58   | Like you can't set a timer.                                       |
| 01:27:00   | Like when they brought Siri to the Mac                            |
| 01:27:03   | and they didn't, you know, so many of the basics,                 |
| 01:27:09   | the things you expect to work on iOS                              |
| 01:27:12   | just didn't work on the Mac.                                      |
| 01:27:14   | I just find that like a missed opportunity.                       |
| 01:27:16   | So I'm not super optimistic                                       |
| 01:27:18   | that they will step up with shortcuts everywhere                  |
| 01:27:22   | to provide that parity,                                           |
| 01:27:23   | but the same way that I think they should support timers          |
| 01:27:28   | that I think they should support                                  |
| 01:27:29   | as much as they possibly can.                                     |
| 01:27:31   | And maybe shortcuts will provide the kind of like enthusiasm      |
| 01:27:37   | and attention to automation                                       |
| 01:27:40   | that actually inspires Apple to want to provide that parity.      |
| 01:27:43   | I can't help but feel like their idea                             |
| 01:27:47   | of the future of automation is more democratic                    |
| 01:27:49   | but less powerful.                                                |
| 01:27:51   | I think that's really where they're heading.                      |
| 01:27:53   | I think you're probably right,                                    |
| 01:27:54   | but I think that's where hopefully somebody at Apple              |
| 01:27:58   | will make the argument and win for that whole idea                |
| 01:28:01   | of simple on the surface,                                         |
| 01:28:03   | but broad and deep where people want it.                          |
| 01:28:06   | You know, just give people the out.                               |
| 01:28:09   | Give people, it's kind of like, you know,                         |
| 01:28:13   | [[Safari]] supporting app extensions or [[Safari]] plugins.               |
| 01:28:18   | It's like Apple's not going to emphasise                          |
| 01:28:22   | the desire or need to like go install                             |
| 01:28:27   | some random third party, you know,                                |
| 01:28:31   | like the, you know, if eBay has a plugin                          |
| 01:28:35   | or something for [[Safari]], it's like,                               |
| 01:28:36   | it can be simple for everybody except for the person              |
| 01:28:40   | who wants to install a plugin to [[Safari]].                          |
| 01:28:43   | And I think that's, hopefully that's the approach                 |
| 01:28:47   | that they'll take with future automation enhancements as well.    |
| 01:28:51   | Yes, because we do see that, don't we,                            |
| 01:28:53   | with applications like on iOS Toolbox Pro                         |
| 01:28:55   | and on the Mac [[BetterTouchTool]], like they both exist.           |
| 01:28:58   | I mean, Toolbox Pro exists purely to add actions                  |
| 01:29:01   | to shortcuts that wouldn't otherwise be there.                    |
| 01:29:03   | And [[BetterTouchTool]], of course,                                 |
| 01:29:04   | had a pre-existing feature set,                                   |
| 01:29:06   | but it's the one that's added a whole bunch                       |
| 01:29:09   | of different things like execute this keyboard shortcut.          |
| 01:29:12   | That's something shortcuts couldn't do                            |
| 01:29:13   | and [[BetterTouchTool]] now allows it to do.                        |
| 01:29:15   | And I think, you know, I think we will see, you know,             |
| 01:29:18   | developers stepping up to the plate, you know,                    |
| 01:29:20   | you plan to do with file scripts as well with, you know,          |
| 01:29:23   | the extra that we us power users want.                            |
| 01:29:29   | And also what I suspect a lot of people will start with           |
| 01:29:32   | as their solution to the automation problem, you know,            |
| 01:29:36   | because they know that this application                           |
| 01:29:39   | has a keyboard shortcut to do the thing that they want.           |
| 01:29:41   | So the logical solution is to run the keyboard shortcut,          |
| 01:29:45   | you know, if they search for, you know,                           |
| 01:29:47   | whatever the name of the app is, you know,                        |
| 01:29:49   | Chihuahua Amazing app in shortcuts.                               |
| 01:29:53   | Yes, yeah, it's a great app.                                      |
| 01:29:54   | I'm just trying to pick something random                          |
| 01:29:55   | that I know doesn't have shortcut support.                        |
| 01:29:58   | And, you know, so they search for it and they don't have it.      |
| 01:30:00   | So then they find the open app and so they can open the app.      |
| 01:30:03   | Well, that's part of the battle.                                  |
| 01:30:03   | So now how do I do the keyboard shortcut?                         |
| 01:30:05   | You know, that's where they'll Google                             |
| 01:30:07   | how to keyboard shortcut shortcuts.                               |
| 01:30:09   | And that's a terrible thing to have to Google.                    |
| 01:30:11   | You need to stick macOS after it and then still hope              |
| 01:30:14   | that you don't get some blog posts talking                        |
| 01:30:16   | about the keyboard shortcut system preferences pane tap.          |
| 01:30:20   | But, you know, it's something where I think we will               |
| 01:30:25   | be hopefully pleasantly surprised by these things.                |
| 01:30:27   | But I do think it would be nice, especially things like           |
| 01:30:30   | folder actions in Finder.                                         |
| 01:30:33   | It's buried.                                                      |
| 01:30:34   | Like finding that as just a normal user is difficult.             |
| 01:30:37   | My mom had something a little while ago where she was like,       |
| 01:30:40   | whenever I put something in this folder, like it gets zipped.     |
| 01:30:44   | Like, why is that?                                                |
| 01:30:46   | I deleted the folder because it didn't have anything              |
| 01:30:48   | in that I worried about.                                          |
| 01:30:49   | And then I created it and it still happens.                       |
| 01:30:53   | And it turned out she had a folder action attached to it.         |
| 01:30:55   | And I guess like with her deleting the folder                     |
| 01:30:58   | and then creating a new one, you know,                            |
| 01:31:01   | the folder action was still attached to the location rather       |
| 01:31:04   | than the UUID of the folder or something.                         |
| 01:31:07   | I'm not quite sure how that happened there.                       |
| 01:31:09   | But either way, and she was like, what is going on?               |
| 01:31:11   | And I like had to go digging around.                              |
| 01:31:13   | And I eventually found the folder actions menu,                   |
| 01:31:15   | which she claims she's never seen before.                         |
| 01:31:18   | I'm personally skeptical.                                         |
| 01:31:20   | She must have set this up somehow.                                |
| 01:31:22   | And like there was an automated reaction in there                 |
| 01:31:24   | to like make archive or something.                                |
| 01:31:26   | Oh, yeah.                                                         |
| 01:31:27   | How does somebody get an accidental folder action?                |
| 01:31:29   | That's what I want to know.                                       |
| 01:31:31   | You're talking about the woman who periodically turns off         |
| 01:31:34   | like calendar syncing on her iPhone                               |
| 01:31:36   | and swears that she's never opened the Settings app.              |
| 01:31:39   | So I've got no idea.                                              |
| 01:31:41   | Like I've seriously considered using                              |
| 01:31:42   | shortcuts on her iOS device so that when she opens the Settings   |
| 01:31:46   | app, it just like opens messages to me and says,                  |
| 01:31:50   | like, I tried to do something I'm not allowed to do again.        |
| 01:31:53   | I haven't done it because it would actually                       |
| 01:31:55   | prevent her doing things that are necessary.                      |
| 01:31:57   | But like I've seriously considered it a few times.                |
| 01:31:59   | But like, you know, she had no idea theoretically                 |
| 01:32:03   | that this feature existed and that it was doing magic on her Mac. |
| 01:32:07   | And it's difficult to find even if you know it exists.            |
| 01:32:10   | So I'm sure that, you know, having a central place where          |
| 01:32:14   | you could go see all of this stuff and manage it                  |
| 01:32:19   | would be, you know, really useful for people.                     |
| 01:32:22   | Because I think that's the other problem, you know,               |
| 01:32:24   | you've got so many different apps running different things        |
| 01:32:26   | here, there and everywhere, you know,                             |
| 01:32:27   | theoretically running their own magic.                            |
| 01:32:30   | It can be really difficult to, you know,                          |
| 01:32:32   | find out what's causing stuff to happen where,                    |
| 01:32:36   | though I have to say this is where an app I mentioned earlier     |
| 01:32:39   | comes in handy, Backlog.                                          |
| 01:32:40   | It's useful after something's happened.                           |
| 01:32:42   | It can open the console logs for the past                         |
| 01:32:46   | and even for specific applications, which is great.               |
| 01:32:49   | So if I find a bug in Fast Scripts at some point                  |
| 01:32:52   | and you get logs, you'll know it's because it happened            |
| 01:32:54   | and I hit the Backlog and was able to go,                         |
| 01:32:55   | right, show me the Fast Scripts log for the last hour             |
| 01:32:58   | and I'm going to send those over                                  |
| 01:32:59   | because I didn't have the console running.                        |
| 01:33:02   | Yeah, well, I think the only explanation for your mom             |
| 01:33:04   | is that she is suffering slash possibly benefiting                |
| 01:33:08   | from sleep automation.                                            |
| 01:33:10   | Yeah, in the middle of the night, she's getting up                |
| 01:33:13   | and exploring the deep automation capabilities of her Mac         |
| 01:33:18   | and she has no memory of it.                                      |
| 01:33:20   | I would love it if I would just woke up tomorrow morning          |
| 01:33:22   | in my bank would I had an automation                              |
| 01:33:24   | to pull data off my bank website                                  |
| 01:33:26   | and I had no idea how I did it.                                   |
| 01:33:28   | Yeah, I do think that we're in a weird period right now.          |
| 01:33:33   | I think that the automation team is, you know,                    |
| 01:33:36   | primarily shortcuts.                                              |
| 01:33:37   | I think they're, you know, they were given [[SwiftUI]]                |
| 01:33:40   | as a platform and they're struggling                              |
| 01:33:43   | to make the best possible app                                     |
| 01:33:45   | with, you know, kind of a developing set of tools.                |
| 01:33:49   | So I don't know what the long-term story is,                      |
| 01:33:51   | but, you know, kind of tying it all together,                     |
| 01:33:53   | I do think shortcuts is going to get better                       |
| 01:33:55   | and more efficient and all of that,                               |
| 01:33:57   | but I also think that there is going to continue                  |
| 01:33:59   | to be this world where Mac users can tap into things              |
| 01:34:03   | like [[AppleScript]] and Apple Events                                |
| 01:34:06   | and iOS users can't.                                              |
| 01:34:08   | And I don't know that Apple's ever really going to be able        |
| 01:34:10   | to fix that at this point.                                        |
| 01:34:12   | Yeah, well, you know, speaking of the idea of having,             |
| 01:34:16   | like if I look at shortcuts right now,                            |
| 01:34:20   | it's already overwhelmed with actions                             |
| 01:34:22   | and they need to do something about this                          |
| 01:34:24   | because like it's really hard to organise and get to              |
| 01:34:27   | like what are the different actions.                              |
| 01:34:28   | And even if you search, it's like run JavaScript.                 |
| 01:34:31   | For instance, I typed in earlier                                  |
| 01:34:33   | while we were talking about that.                                 |
| 01:34:34   | And this, I've already got like one for [[Audio Hijack]],             |
| 01:34:36   | one for the web, one for JavaScript for automation.               |
| 01:34:42   | Hopefully there will just be so many options                      |
| 01:34:45   | that they'll have to organise this better.                        |
| 01:34:46   | And, you know, I don't know why I kind of,                        |
| 01:34:52   | I think I kind of lost my train of thought there,                 |
| 01:34:55   | started talking about this for some other reason                  |
| 01:34:56   | and now I can't remember what.                                    |
| 01:34:57   | But I don't know, I guess in closing about shortcuts,             |
| 01:35:02   | I would just say, I hope it continues to get attention.           |
| 01:35:06   | It's been nice to see how much little bug fixes are coming.       |
| 01:35:09   | There's a steady stream of little bug fixes.                      |
| 01:35:11   | And hopefully that means that when like [[WWDC]] comes along,         |
| 01:35:15   | we'll see like a shortcuts for the Mac 2 or whatever              |
| 01:35:19   | and it'll be something to celebrate.                              |
| 01:35:22   | Yes, yes.                                                         |
| 01:35:23   | And hopefully they'll finally fix that issue that I have          |
| 01:35:26   | where if I download a shortcut                                    |
| 01:35:27   | and it's got an action in that I don't know                       |
| 01:35:29   | and my Mac doesn't know it                                        |
| 01:35:30   | or my iPhone doesn't know it,                                     |
| 01:35:32   | it doesn't just say unknown action                                |
| 01:35:35   | or very occasionally a translation string                         |
| 01:35:37   | because, you know, that's always good fun.                        |
| 01:35:40   | The translation string is for unknown action.                     |
| 01:35:42   | I did report that one a couple of times, I think.                 |
| 01:35:44   | So it's a, yeah, it's all interesting when that happens.          |
| 01:35:49   | Yeah.                                                             |
| 01:35:49   | It would be lovely to have more ways to organise                  |
| 01:35:52   | both the actions inside of shortcuts                              |
| 01:35:55   | and also be able to organise shortcuts by actions and filter      |
| 01:36:00   | for it includes actions from this application                     |
| 01:36:02   | or that application and so on and so forth.                       |
| 01:36:04   | So I could really see, you know,                                  |
| 01:36:06   | what things have I got that could possibly be affecting           |
| 01:36:09   | on me focus or whatever it is that I'm looking                    |
| 01:36:13   | to, you know, do something with.                                  |
| 01:36:15   | I remember now, the reason I started down that path               |
| 01:36:17   | was cause David was saying something about how, you know,         |
| 01:36:19   | these resources on the Mac like running an AppleScript           |
| 01:36:22   | are not going to be made available to iOS.                        |
| 01:36:24   | But I think what can happen is that got me thinking               |
| 01:36:29   | about how there's like a limitless number of new actions          |
| 01:36:33   | that people can add and the AppleScript and stuff like that      |
| 01:36:36   | can sort of fill in the gaps until an appropriate                 |
| 01:36:40   | kind of quote unquote native shortcut action exists.              |
| 01:36:44   | And so I think in that sense, it's like, at some point            |
| 01:36:47   | you'll be able to look at your list of shortcuts                  |
| 01:36:49   | that like work on the Mac, but don't work on iOS                  |
| 01:36:51   | and start asking yourself like, what would it take                |
| 01:36:54   | for there to be a type of action that does this                   |
| 01:36:57   | that would work on iOS and the Mac?                               |
| 01:36:59   | And maybe if it becomes popular enough,                           |
| 01:37:04   | that'll be a kind of a motivator to people, right?                |
| 01:37:06   | And people like you and David who are talking                     |
| 01:37:10   | about the shortcomings of, you know, shortcuts,                   |
| 01:37:13   | we will say, well, there's this AppleScript I rely on            |
| 01:37:16   | that does this thing.                                             |
| 01:37:17   | And if only somebody would make an app                            |
| 01:37:19   | that provides shortcut that does that everywhere.                 |
| 01:37:22   | So I think it's, I love the fact like you said early on           |
| 01:37:25   | that they decided to include AppleScript support.                |
| 01:37:29   | It has the possibility that it will sort of give                  |
| 01:37:35   | shortcuts more viability as it matures                            |
| 01:37:38   | and give it a sort of scaffolding on which to build.              |
| 01:37:41   | Yeah, well, and there's two points on that.                       |
| 01:37:43   | First of all, as you can see this happening                       |
| 01:37:45   | actively right now, if you go into Automator                      |
| 01:37:48   | and you look at the things in Automator                           |
| 01:37:51   | that last year got moved to shortcuts.                            |
| 01:37:54   | There were actions like PDF and file actions                      |
| 01:37:57   | that you know got moved because they're like,                     |
| 01:38:00   | well, we can currently do this with an Automator action           |
| 01:38:03   | which is in essence a fancy AppleScript.                         |
| 01:38:05   | So we've got to build it into shortcuts                           |
| 01:38:07   | but they left some out, you know,                                 |
| 01:38:09   | there's some that didn't make it.                                 |
| 01:38:10   | And like this year, and when we get to June,                      |
| 01:38:14   | well, we see Apple move more from the category                    |
| 01:38:16   | of Automator to shortcuts.                                        |
| 01:38:18   | And then the other thing I think                                  |
| 01:38:20   | that is very illustrative of your point                           |
| 01:38:22   | is this app [[BetterTouchTool]].                                    |
| 01:38:24   | And [[BetterTouchTool]] is an app that was made                     |
| 01:38:27   | to make it easy to, you know, add functions                       |
| 01:38:31   | to your touch bar or to your touch pad                            |
| 01:38:33   | and it's kind of expanded.                                        |
| 01:38:35   | But the developer went nuts with his shortcut support             |
| 01:38:39   | and like things like select an item from the menu                 |
| 01:38:42   | or, you know, like all this stuff that we wanna do                |
| 01:38:45   | that, you know, shortcuts team wasn't given the rope to do.       |
| 01:38:50   | He just added it to his app.                                      |
| 01:38:53   | It has almost nothing to do with what his app does.               |
| 01:38:56   | But suddenly it's like you've got this Trojan horse               |
| 01:38:58   | of actions that you've dropped into your Mac                      |
| 01:39:02   | into shortcuts just by having [[BetterTouchTool]].                  |
| 01:39:04   | So I really think it's, we're at an interesting time              |
| 01:39:07   | and we're all speculating, but I do think                         |
| 01:39:11   | that people who want to automate this stuff                       |
| 01:39:13   | is going to get a lot easier for you in the future.               |
| 01:39:16   | And that's in our hope.                                           |
| 01:39:18   | But either way, Daniel Jalkut,                                   |
| 01:39:19   | thank you so much for coming.                                     |
| 01:39:20   | Now you mentioned your podcast,                                   |
| 01:39:22   | but you're such a classy guy.                                     |
| 01:39:23   | You didn't even say the name.                                     |
| 01:39:24   | It's called Core Intuition.                                       |
| 01:39:25   | It's an excellent application.                                    |
| 01:39:27   | I'm an excellent podcast and you can go in there                  |
| 01:39:30   | and Daniel has, I mean, the reason I love having him              |
| 01:39:33   | on our show is because he's got this insight                      |
| 01:39:35   | of someone who likes to automate                                  |
| 01:39:36   | but also writes automation tools.                                 |
| 01:39:38   | Well, you get that inside every episode of Core Intuition.        |
| 01:39:41   | So we're gonna put a link in the show notes for that.             |
| 01:39:44   | Thank you.                                                        |
| 01:39:45   | We'll also put a link in for Red Sweater Software,                |
| 01:39:48   | which is, you know, where all these great apps are.               |
| 01:39:50   | Anywhere else people should look for you, Daniel.                 |
| 01:39:53   | Oh, well, if you just wanna get like my less professional         |
| 01:39:56   | side, you can find me on Twitter, Daniel Punkass.                 |
| 01:40:00   | That's kind of the breadth of most of my stuff                    |
| 01:40:03   | is either Red Sweater or kind of being a smart alec               |
| 01:40:07   | on Twitter, so.                                                   |
| 01:40:09   | Simultaneously the best and worst Twitter handle                  |
| 01:40:13   | of any of my friends, I'll have to say.                           |
| 01:40:15   | It really, it's funny, I will say really quickly                  |
| 01:40:20   | I had a cause this past weekend for several local news stations   |
| 01:40:25   | to get in touch with me about an accident                         |
| 01:40:27   | that I witnessed on a highway around here.                        |
| 01:40:30   | And to have to explain to all of them                             |
| 01:40:32   | what my Twitter handle is, to spell it out for them,              |
| 01:40:35   | it's always kind of fun.                                          |
| 01:40:38   | Well, thank you so much for all the hard work you've done         |
| 01:40:41   | for our community of Automators and Fast Scripts                  |
| 01:40:45   | is just an excellent app, Rose and I both use it                  |
| 01:40:48   | if you're listening to Automators, go check it out.               |
| 01:40:50   | And as Daniel again mentioned, but was too nice                   |
| 01:40:54   | to explain, you can use Automators for free.                      |
| 01:40:57   | He's got a lot of features in there                               |
| 01:40:59   | that you can just download the app and start using it.            |
| 01:41:01   | And I'd recommend you do that.                                    |
| 01:41:02   | And if you'd like it, you know, register                          |
| 01:41:06   | and give Daniel some money, cause it's a great app.               |
| 01:41:09   | Anything else, Daniel, any other places people find you?          |
| 01:41:13   | No, you know, I have some blogs, but my blog is,                  |
| 01:41:16   | my main blog, I haven't written as much as I should               |
| 01:41:18   | as the developer of a blog editor, but my main                    |
| 01:41:22   | technology blog is bitsplitting.org.                              |
| 01:41:26   | It's kind of like my home base really on the web, I guess.        |
| 01:41:31   | So between that, Twitter and my company website,                  |
| 01:41:33   | redsweater.com, you'll find plenty                                |
| 01:41:36   | to hopefully state your curiosity.                                |
| 01:41:39   | There you go.                                                     |
| 01:41:40   | And in the after show today, we're gonna talk                     |
| 01:41:43   | to about Daniel's ninth grade automation,                         |
| 01:41:45   | cause this is a good story.                                       |
| 01:41:47   | So for the supporters, we'll be talking about that.               |
| 01:41:50   | Also thank you to our sponsors,                                   |
| 01:41:52   | TextExpander, Hunter Douglas and [[DEVONthink]].                 |
| 01:41:55   | We are the Automators, you can find us                            |
| 01:41:57   | at relay.fm/automators and we'll see you next time.         |
| 01:42:01   | Goodbye.                                                          |
| 01:42:01   | Let's get started.                                                |
