---
status: "complete"
fc-date:
  year: 2023
  month: 11
  day: 17
fc-category: "podcast"
podcast: "Automators"
published: 2023-11-17
duration: 3534
formattedduration: "00:58:54"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/141"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators141.mp3"
episode: 141
title: "141: Keyboard Maestro Goes to 11"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Keyboard Maestro got a big update, and the Automators are here to report on the new features.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- *Episode 141 discussion topic was not automatically created on the forum.*

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.
- [[Oracle (Sponsor)|Oracle]] - Oracle Cloud Infrastructure is a single platform for your infrastructure, database, application development, and AI needs.

# Show Notes
Keyboard Maestro got a big update, and the Automators are here to report on the new features.

- [Keyboard Maestro](https://www.keyboardmaestro.com/main/)
- [Whats New (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/manual/Whats_New)
- [Prompt for Snippet (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Prompt_for_Snippet)
- [Create Calendar Event (Keyboard Maestro Wiki)](https://wiki.keyboardmaestro.com/action/Create_Calendar_Event)
- [Keyboard Maestro Field Guide](https://learn.macsparky.com/p/km)

# Transcription
  
| Time Index | Transcription                                                                                                      |
|:---------- |:------------------------------------------------------------------------------------------------------------------ |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about grabbing your technology                         |
| 00:06      | and making it submit and do whatever it is that you would like it to do, usually something                         |
| 00:11      | related to work, but also a lot of the time is fun because, you know, why not make your                            |
| 00:16      | work fun with a little automation?                                                                                 |
| 00:18      | I am Rosemary Orchard and I'm joined as always by David Sparks.                                                    |
| 00:21      | Hey, David, how are you?                                                                                           |
| 00:22      | Good, Rose.                                                                                                        |
| 00:23      | Although your intro felt a little extreme to me, like, you know, we're going to grab                               |
| 00:27      | the technology.                                                                                                    |
| 00:28      | Yeah.                                                                                                              |
| 00:29      | Yeah, I mean, sometimes you just have to grab it, like we're going to talk about [[Stream Deck\|Stream Decks]]     |
| 00:33      | later and I've been picking one up and taking it with me.                                                          |
| 00:36      | So, you know.                                                                                                      |
| 00:37      | Well, that's true.                                                                                                 |
| 00:38      | You do literally grab it and take it with you, don't you?                                                          |
| 00:40      | Yeah.                                                                                                              |
| 00:41      | Yeah.                                                                                                              |
| 00:42      | Sometimes you just nudge it.                                                                                       |
| 00:43      | You say, hey, would you please do this thing when I do that thing?                                                 |
| 00:45      | Yeah.                                                                                                              |
| 00:46      | Yeah.                                                                                                              |
| 00:47      | All right.                                                                                                         |
| 00:48      | Well, we are the Automators and we're very excited today.                                                          |
| 00:50      | One of our favourite automation apps for the Mac, [[Keyboard Maestro]] came out with a whole                       |
| 00:54      | brand new version.                                                                                                 |
| 00:55      | There's a ton of new features.                                                                                     |
| 00:57      | Rose and I have been kicking the tires and checking it out.                                                        |
| 01:00      | We're going to be talking about that.                                                                              |
| 01:02      | And then the bonus section for the Automators Macs members, we are going to do a check-in                          |
| 01:06      | on our [[Stream Deck\|Stream Decks]] because Rose and I are both [[Stream Deck]] enthusiasts and we both have been |
| 01:11      | using them and we thought it'd be fun to just check in to see what software we're using                            |
| 01:14      | and some cool tricks we're doing with the [[Stream Deck\|Stream Decks]], but the big show today is all             |
| 01:19      | about [[Keyboard Maestro\|Keyboard Maestro 11]].                                                                   |
| 01:21      | Peter has released a new update and man, he always delivers the goods, doesn't he?                                 |
| 01:28      | Oh, yeah.                                                                                                          |
| 01:29      | Yeah.                                                                                                              |
| 01:30      | And [[Keyboard Maestro]] is one of those apps that it will have plenty of bug fixes and improvements               |
| 01:36      | and new features and so on during the life cycle of a release, but then every two years                            |
| 01:42      | or so, a brand new release will come out and it'll just be like, oh my gosh, there are                             |
| 01:47      | all these amazing things in it and I'd never thought about this.                                                   |
| 01:50      | And yeah, there's so many little things in this and some big things as well that are                               |
| 01:57      | just making me really excited to refresh some of my automation as it is.                                           |
| 02:04      | It's always fun when you look through his release notes, he even puts thank yous out                               |
| 02:07      | to people who requested features.                                                                                  |
| 02:09      | He's like, oh, that's a good idea and he adds in, he'll thank the specific person.                                 |
| 02:14      | And [[Keyboard Maestro]] really is an application on a model from days gone past.                                  |
| 02:21      | It's an app where you buy it and the developer does continue to make small fixes and tweaks                        |
| 02:28      | to it over time, but then every, like you said, every few years, he says, hey, I made                              |
| 02:33      | a bunch of additions, I'd appreciate if you paid me a few bucks to support me and get                              |
| 02:39      | this upgrade.                                                                                                      |
| 02:40      | And he does a really good job.                                                                                     |
| 02:42      | The upgrade price is $25.                                                                                          |
| 02:45      | If you are coming from version 10, the prior version, and you do it before the middle of                           |
| 02:49      | December, you can get it for $18, but either way, man, I got my credit card out the moment                         |
| 02:55      | I saw there was an update.                                                                                         |
| 02:57      | And of course, if you were one of those people who bought version 10 just before version                           |
| 03:00      | 11 came out, you know, Peter's not just going to leave you sitting there, he'll make sure                          |
| 03:04      | that it's sorted out.                                                                                              |
| 03:05      | There was a little window of time for folks who just purchased the version 10 as well,                             |
| 03:11      | which is always greatly appreciated.                                                                               |
| 03:14      | And yeah, just making sure that all this stuff continues working with all these new fabulous                       |
| 03:18      | operating systems.                                                                                                 |
| 03:20      | And I am going to be, I've already heard a bunch from a bunch of you, because I did                                |
| 03:24      | the [[Keyboard Maestro]] Field Guide, which released with version 10 of [[Keyboard Maestro]].                      |
| 03:29      | I am going to be adding additional videos to that.                                                                 |
| 03:32      | It'll be a free update.                                                                                            |
| 03:33      | So basically, if you own the course, you're going to get a bunch more videos with the                              |
| 03:37      | version 11 features demonstrating how they work and how to use them.                                               |
| 03:42      | That is not going to happen, though, it's probably right after the new year.                                       |
| 03:45      | I'm in the midst of another project right now.                                                                     |
| 03:47      | I don't want to get that done first, but there'll be a free update to the                                          |
| 03:50      | [Keyboard Maestro Field Guide](https://learn.macsparky.com/p/km), and I will be covering the version 11 upgrade.   |
| 03:54      | So stay tuned for that.                                                                                            |
| 03:56      | Yeah.                                                                                                              |
| 03:57      | All right.                                                                                                         |
| 03:58      | I thought it'd be fun just to kind of take, you know, we both, we have a running list                              |
| 04:03      | here of the things that we thought were cool as we've been playing with it.                                        |
| 04:07      | It's been out about a week and a half now as we record this.                                                       |
| 04:10      | So both of us had enough time to kick the tires a bit.                                                             |
| 04:14      | And I thought we'd just start going through them, starting with the new macro wizard.                              |
| 04:19      | So this is an interesting tool.                                                                                    |
| 04:21      | I mean, [[Keyboard Maestro]] is great, but for a lot of people, it has a steep learning curve,                     |
| 04:28      | you know, because it is a programming environment, albeit a basic one and very                                     |
| 04:33      | visual one.                                                                                                        |
| 04:34      | That's the reason I made a field guide on it, to teach people how to use it.                                       |
| 04:37      | But they added a new feature under the file menu called New Macro Wizard.                                          |
| 04:43      | And this is a great way to get yourself rolling with a new macro.                                                  |
| 04:48      | And you can put in your title, you can put in the group where it's going to land.                                  |
| 04:52      | I have a mindset for testing.                                                                                      |
| 04:54      | I think that might be the default, but I always make new ones I want to try out in a                               |
| 04:58      | testing folder.                                                                                                    |
| 05:00      | And then it prompts you for the trigger.                                                                           |
| 05:03      | So you can say, well, I want this to be triggered by a hotkey or a status menu button or a type                    |
| 05:09      | string or even it gives you the option to add it later.                                                            |
| 05:12      | And then it says, well, what do you want to do?                                                                    |
| 05:14      | Well, we can activate an application or open a file or manipulate a window.                                        |
| 05:20      | There's a whole list of things you can do.                                                                         |
| 05:22      | And this is the kinds of things a lot of people want to do with [[Keyboard Maestro]].                              |
| 05:27      | So they've made a very simple way to get yourself up and running with the application and create                   |
| 05:34      | custom [[Keyboard Maestro]] macros with little or no effort.                                                       |
| 05:38      | Yeah.                                                                                                              |
| 05:39      | And I think that this is a really lovely idea.                                                                     |
| 05:43      | And it's one of those things where it does just make your life perhaps a little bit easier                         |
| 05:49      | for somebody who doesn't open the application to do stuff in it potentially very often.                            |
| 05:55      | And you just want to kind of be walked through it and given a little bit of a guide.                               |
| 06:00      | And I love that it's just very simple.                                                                             |
| 06:03      | And because a lot of the time I'll create a macro and I'll just be doing it really quickly                         |
| 06:07      | and not really thinking about it.                                                                                  |
| 06:08      | And then later I have to go find out which folder I put it in because I accidentally put                           |
| 06:12      | it in the "Podcast - Automators" folder instead of like the "Work and Get up" folder or something                  |
| 06:17      | like that.                                                                                                         |
| 06:18      | And that, you know, messes me up when I'm trying to find out why isn't this macro triggering?                      |
| 06:22      | Well, it's because it's not going to run on this machine in this circumstance because                              |
| 06:27      | that's what my group is set up for.                                                                                |
| 06:28      | So yeah, it's very nice that that is, you know, just there to make it a little bit easier                          |
| 06:35      | for folks.                                                                                                         |
| 06:36      | How do you organise your macro groups or you could also call them folders, but in [[Keyboard Maestro]]             |
| 06:40      | you have groups of macros.                                                                                         |
| 06:42      | How do you organise yours?                                                                                         |
| 06:44      | Well, there's groups and then there's smart groups.                                                                |
| 06:46      | So I kind of think of them as playlists and then smart playlists.                                                  |
| 06:51      | It's not quite the same thing because they really are more like folders.                                           |
| 06:55      | But what I tend to do is if I've got like a group of groups for one of a better way                                |
| 07:01      | to put it, I'll prefix the name of the group.                                                                      |
| 07:03      | So I have "Podcast:Automators".                                                                                    |
| 07:06      | I have "Podcast:iOS Today".                                                                                        |
| 07:08      | And then I have some further ones, which is like "Podcast:iOS Today\|Airtable".                                    |
| 07:14      | And this is like for ones very specific to air table for the [[iOS Today]] podcast.                                |
| 07:21      | And I've also been creating one that says "Podcast: Automators\|Notion" spoiler alert                              |
| 07:26      | folks.                                                                                                             |
| 07:27      | We're going to be talking about [[Notion]] in a future episode.                                                    |
| 07:29      | So I tend to try to group like things together, hence having the word "Podcast" before the word                    |
| 07:36      | "Automators".                                                                                                      |
| 07:37      | So otherwise "Automators" at the top "iOS Today" is in the middle.                                                 |
| 07:40      | And just "Podcast General" is then right at the bottom, which really doesn't help.                                 |
| 07:45      | And then other than that, if it is an application specific one, it will say "App:[[Firefox]]"                          |
| 07:53      | "App:Finder".                                                                                                      |
| 07:55      | If it's machine specific group, it'll be "Mac:", because Mac stands conveniently for                               |
| 08:01      | machine as well as Mac, and then the name of the machine and so on.                                                |
| 08:06      | So that, you know, if I get a new machine, I can easily add it to that group and so on.                            |
| 08:12      | So yeah, I tend to either have things in just the general group, like the all macros group                         |
| 08:22      | or I tend to put them into a very specific, okay, this is only going to run in this context                        |
| 08:27      | group.                                                                                                             |
| 08:28      | Other than that, yeah, I don't have a huge amount of grouping going on here.                                       |
| 08:33      | What about you, David?                                                                                             |
| 08:34      | I love that you just explained a very advanced hierarchy and said, but I don't have that                           |
| 08:40      | much, but you have a lot.                                                                                          |
| 08:42      | No, it's good.                                                                                                     |
| 08:43      | Well, I do have a lot of groups, but I don't have that, like I don't have that many differences                    |
| 08:49      | between those groups, if that makes sense.                                                                         |
| 08:52      | You know, like a lot of them will just be, you know, like "Work:Citrix", "Work:[[Firefox]]",                           |
| 08:57      | "Work:Microsoft Teams", and so on.                                                                                 |
| 09:00      | And that will just let me know that this is, you know, work for a specific application.                            |
| 09:05      | I guess that's why I break from my application rule.                                                               |
| 09:08      | But there we go.                                                                                                   |
| 09:09      | Yeah, so I got in trouble.                                                                                         |
| 09:10      | Like you, I do a lot of public display of my [[Keyboard Maestro]], cause I teach courses                           |
| 09:15      | on it and do stuff.                                                                                                |
| 09:16      | And so I found myself sometimes like cleaning and then like ending up deleting things I was                        |
| 09:21      | sharing with people or deleting things I needed in production.                                                     |
| 09:25      | So I had to get more organised.                                                                                    |
| 09:26      | Like I do the same thing you do though.                                                                            |
| 09:28      | I have like a bunch that are called "App:", A-P-P-colon, and then the name of the app.                             |
| 09:33      | And some of those, I'm a big fan of the feature in [[Keyboard Maestro]] where you can say, just                    |
| 09:39      | trigger this macro in this app.                                                                                    |
| 09:43      | Yeah.                                                                                                              |
| 09:44      | I mean, one of the most basic examples is [[Apple Mail]], right?                                                   |
| 09:48      | [[Apple Mail\|Apple Mail's]] keyboard shortcut to send an email is `command + shift + D`. It's like, what were     |
| 09:55      | they drinking the day they decided to make that the send keyboard shortcut?                                        |
| 10:00      | I mean, every app, every other email app uses `command + enter`, which makes a ton of sense.                       |
| 10:04      | So I just made a macro in the app colon mail that says, if I hit `command + enter`, hit the                        |
| 10:11      | keyboard shortcut `command + shift + D` and like, so I've got some real basic ones, but I also                     |
| 10:16      | have some more advanced ones.                                                                                      |
| 10:17      | But by keeping them in the app, it allows me to number one, find it easily and then keep                           |
| 10:22      | those kind of group together.                                                                                      |
| 10:25      | Just like you do.                                                                                                  |
| 10:26      | That's the trick, right?                                                                                           |
| 10:27      | So I'm going to go back to these groups and [[Keyboard Maestro]], but if you just give it a                        |
| 10:30      | prefix, you in essence nest them.                                                                                  |
| 10:33      | And I've got a couple of those like that MacSparky, I've got one called context.                                   |
| 10:37      | So my favourite, some of my favourite [[Keyboard Maestro]] macros are contextual, like anything,                   |
| 10:45      | one is personal, one is MacSparky.                                                                                 |
| 10:46      | I used to have one called legal.                                                                                   |
| 10:48      | It was so fun when I deleted it that day.                                                                          |
| 10:50      | But the, but so if I hit the [[Hyper Key]] plus M, then it opens up a list of like 30 things                       |
| 10:56      | I do as MacSparky and then it's a conflict palette.                                                                |
| 10:59      | So it just allows me to jump through them.                                                                         |
| 11:01      | I mean, I guess I'm getting into the weeds here, but, but it is interesting to see how                             |
| 11:06      | different people do grouping.                                                                                      |
| 11:08      | And when you make a new one with this macro wizard, you can drop it into any group.                                |
| 11:13      | And I have a testing group in mind.                                                                                |
| 11:16      | I think it's a very useful group to have if you're working in [[Keyboard Maestro]] and even                        |
| 11:21      | just learning it.                                                                                                  |
| 11:22      | It's like a little lab.                                                                                            |
| 11:23      | You have little experiments in there, you're like, well, at one point I wanted to, I wanted                        |
| 11:29      | to automate the volume dial on my [[Stream Deck]], right in the [[Stream Deck]], plus the one with                 |
| 11:36      | the four dials on the bottom.                                                                                      |
| 11:38      | I wanted a way to set the volume on my [[Apple Music]] because I have [[Apple Music]] piping out                   |
| 11:43      | of my Mac into some HomePods in my studio.                                                                         |
| 11:47      | And I wanted to turn the volume up and down without having to go to the app or do something                        |
| 11:51      | goofy.                                                                                                             |
| 11:52      | And so I figured out an [[AppleScript]] and I did all these tests in [[Keyboard Maestro]] to                       |
| 11:56      | figure it out.                                                                                                     |
| 11:57      | And then I signed the macro it to the dial in the, in the [[Stream Deck]] going up or going                        |
| 12:03      | down, but I'm looking at my testing and I'm seeing all the kind of historical reference                            |
| 12:07      | here as I was figuring out that script.                                                                            |
| 12:09      | And it's just kind of nice to have that stuff.                                                                     |
| 12:11      | Yeah.                                                                                                              |
| 12:12      | So I have a, um, a couple of, uh, sort of testing groups and I'm, I'm also just going                              |
| 12:17      | to say, uh, for the record, there, well, it might be nice in theory to be able to nest                             |
| 12:22      | groups of macros.                                                                                                  |
| 12:23      | I actually find it's more beneficial to me to have like the, the four different podcast                            |
| 12:29      | groups, uh, listed together, um, so that I can, I can see that I've got four different                             |
| 12:34      | podcast groups immediately in my sidebar instead of knowing that, you know, okay, so I've got                      |
| 12:38      | podcasts and I click on it and then it discloses another however many folders and so on.                           |
| 12:43      | I, I quite like the way that I've been forced to flatten it to an extent.                                          |
| 12:48      | Um, it makes, it makes it a lot easier for me, but I have a testing group, much like                               |
| 12:52      | you David.                                                                                                         |
| 12:53      | I also have a temporary group.                                                                                     |
| 12:56      | Now temporary is for a macro that I made as like a one-off thing of like, I needed to                              |
| 13:02      | just do this thing with something like I needed to create 27 folders or something like that.                       |
| 13:08      | Um, and like they all needed to have like consecutive dates in them or something.                                  |
| 13:13      | Um, and temporary is basically, I made this once, I'm probably never going to need it                              |
| 13:18      | again, but just in case, I'm going to throw it in this temporary folder.                                           |
| 13:22      | Um, and what I'll do when I do that is I will also use the great comment feature in [[Keyboard Maestro]]           |
| 13:27      | to add a comment, uh, into that macro and just say, Hey, this is what it's for and                                 |
| 13:32      | dump as many as possible, like in, in brain terms, keywords into that.                                             |
| 13:39      | So when I search for it later, I can then find it because inevitably with these things,                            |
| 13:44      | there will be a whole bunch of macros where it's like, no, I don't need this, I don't                              |
| 13:47      | need this again.                                                                                                   |
| 13:48      | Uh, but instead of deleting it, I found dump it into a temporary folder, which I should                            |
| 13:53      | probably just call archive or something like that.                                                                 |
| 13:55      | Um, but temporary, it makes my brain happy.                                                                        |
| 13:59      | So I'm living in temporary.                                                                                        |
| 14:00      | Um, and, uh, yeah, I've, I've, I've got that there and that, that has been really great                            |
| 14:05      | because, you know, you said before that you've gone to trouble where you've deleted macros                         |
| 14:09      | that you meant to keep and so on.                                                                                  |
| 14:11      | I've done the same.                                                                                                |
| 14:12      | Um, and I've also had macros that I've created as a one-off thing and then been a week later,                      |
| 14:16      | been like, Oh, actually, you know, if I still had that, I could use that as the basis for                          |
| 14:22      | this thing or whatever it is.                                                                                      |
| 14:24      | So it's, it's been very nice to just have that, uh, as available to me.                                            |
| 14:29      | Getting back to the new features though, that one of the nice things they did was, uh, historically                |
| 14:34      | the [[OCR]] engine in [[Keyboard Maestro]] was one called [[Tesseract]].                                           |
| 14:38      | But just like, you know, everybody else in the world, suddenly text recognition is getting                         |
| 14:42      | really good because of, you know, [[Artificial Intelligence]], yada, yada, yada, and, um, and                      |
| 14:50      | [[Tesseract]] had some issues.                                                                                     |
| 14:51      | Like I, I noticed like on a dark screen, it barely worked and there's some forum threads                           |
| 14:56      | that, that kind of confirmed that.                                                                                 |
| 14:58      | Um, but they, uh, but they added now the Apple [[OCR]] engine.                                                     |
| 15:03      | So the Apple text recognition is an [[OCR]] option going forward, starting with this version                       |
| 15:09      | 11.                                                                                                                |
| 15:10      | And I recommend it.                                                                                                |
| 15:11      | If you're running an automation that does [[OCR]], use the Apple engine, you're going to                           |
| 15:15      | be much happier.                                                                                                   |
| 15:17      | Just a nice quality of life improvement.                                                                           |
| 15:19      | But for people who want to grab text out of something, now you've got a much better way                            |
| 15:23      | to do it.                                                                                                          |
| 15:24      | Yes.                                                                                                               |
| 15:25      | And I think that, you know, a lot of the features that have been added, um, like custom for each                   |
| 15:30      | action names, um, where you're doing, uh, a display progress, that sort of thing, you                              |
| 15:35      | know, it sounds very nerdy, very complex and so on, but it does make your life much better                         |
| 15:41      | when you are trying to show, uh, a progress title and there's a whole bunch of stuff going                         |
| 15:46      | on so that you can, you know, customise it.                                                                        |
| 15:48      | And I just really appreciate features like that as much as something like adding, um,                              |
| 15:55      | a prompt for user input with sliders that can now return decimals, um, because that                                |
| 16:00      | sort of thing can really make a huge difference, uh, to the script and the way that I, I set                       |
| 16:06      | things up because, you know, I use [[Keyboard Maestro]] and I open the Macro editor multiple                       |
| 16:11      | times a day, um, to do things, um, and it'll often just be quickly one-off things of like,                         |
| 16:17      | I don't want to click this button 17 times, click it for me 17 times, um, or something                             |
| 16:22      | silly like that, uh, but I have [[Keyboard Maestro]] installed on my parents' machines as well,                    |
| 16:26      | um, and they're aware that it's there, they don't really know what it does, they don't                             |
| 16:30      | really know what's happening, but every so often, like when my dad inevitably accidentally                         |
| 16:36      | tries to delete the photos, uh, or pictures, uh, folder on his Mac, uh, because he hits                            |
| 16:41      | the wrong keyboard shortcut, it'll just intervene and go, are you sure about that?                                 |
| 16:45      | Is that a good idea?                                                                                               |
| 16:47      | I'm just gonna not let you do that and stuff like that.                                                            |
| 16:50      | Um, you know, I, I don't have parental control set up on those machines because, you know,                         |
| 16:55      | my parents are, you know, they're not necessarily the best with tech, but they are definitely                      |
| 16:59      | giving it their all and it would be hampering for them to not be able to just do things.                           |
| 17:05      | Um, but there's a couple of times where [[Keyboard Maestro]]'s just sort of snuck in and been                      |
| 17:09      | like, I'm just gonna, you know, deal with this and, you know, every so often it'll do                              |
| 17:13      | a little backup copy of all my dad's pictures to the [[NAS]] and stuff like that so that he                        |
| 17:17      | doesn't have to do it and it's just really great that, you know, all of these things                               |
| 17:21      | will also just continue to work with the new version.                                                              |
| 17:24      | I have not had a single macro not work in the new version.                                                         |
| 17:27      | Neither, neither.                                                                                                  |
| 17:29      | I'm giving Peter a 12 out of 10 because [[Shortcuts]], every couple of versions, it'll be like, I'm                |
| 17:34      | just gonna have to open every single shortcut and run it manually to see what's not quite                          |
| 17:38      | working now.                                                                                                       |
| 17:39      | Yeah.                                                                                                              |
| 17:40      | Well, and I have to laugh when you said, um, uh, you don't have parental controls and                              |
| 17:45      | solving your parents' computer adds a whole new element to the term parental controls.                             |
| 17:50      | Yeah.                                                                                                              |
| 17:51      | Yeah.                                                                                                              |
| 17:52      | Yeah.                                                                                                              |
| 17:53      | Yeah.                                                                                                              |
| 17:54      | Parental controls.                                                                                                 |
| 17:55      | I'm controlling my parents.                                                                                        |
| 17:56      | No, I, I don't do that, but, uh, I, I, I definitely have, uh, set up a few things on their devices.                |
| 18:02      | So that, yeah.                                                                                                     |
| 18:03      | Cause my mom for ages kept saving everything into, uh, like local storage, um, and then                            |
| 18:08      | complaining that it wasn't there on her iPad.                                                                      |
| 18:10      | Um, and so I, I just like, you know, I didn't install [[Hazel]] for this because [[Keyboard Maestro]]              |
| 18:15      | was already there for a couple of other things.                                                                    |
| 18:16      | Yeah.                                                                                                              |
| 18:17      | Uh, cause just like you, David, she was using the wrong keyboard shortcut for, for mail.                           |
| 18:20      | Um, and I know you can change it in the, in the Mac OS keyboard settings, but that's only                          |
| 18:25      | for that machine and it, occasionally Mac OS likes to randomly reset it.                                           |
| 18:30      | Yeah.                                                                                                              |
| 18:31      | Great.                                                                                                             |
| 18:32      | Um, and so, um, yeah, so I have [[Keyboard Maestro]] set for that.                                                 |
| 18:36      | So whenever she saves stuff into the local, like all my Macs, uh, storage, um, I would                             |
| 18:40      | just have it moved to the equivalent folder and [[iCloud]] and stuff, and you know, fortunately                    |
| 18:45      | she, she's got better at that recently.                                                                            |
| 18:46      | So that's, you know, that, that macro rarely gets run anymore, but at the same time it's                           |
| 18:50      | still there just in case, um, and it, it's nice that that, that definitely helps.                                  |
| 18:55      | Another new feature, you know how on [[TextExpander]], you can have it prompt you like dear, mister,               |
| 19:01      | so-and-so.                                                                                                         |
| 19:02      | Yeah.                                                                                                              |
| 19:03      | Now you can do that in [[Keyboard Maestro]].                                                                       |
| 19:04      | They've added a prompting command prompt for snippet and there's a syntax to it.                                   |
| 19:08      | You've got to nail it down like you, you know, there's an ask command.                                             |
| 19:12      | It's you, it's a, a percentage sign ask and then you put in the request of the field and                           |
| 19:21      | it gives you a window and you can type it in.                                                                      |
| 19:23      | Um, it's, it's nice.                                                                                               |
| 19:25      | I mean, if you want to use [[Keyboard Maestro]] for text expansion, I know a lot of people                         |
| 19:30      | do.                                                                                                                |
| 19:31      | Now you get the prompt and, uh, I think a prompt can be very useful, uh, a tool in your arsenal                    |
| 19:37      | of text expansion.                                                                                                 |
| 19:38      | And so, uh, really nice to see this get added.                                                                     |
| 19:41      | Yeah.                                                                                                              |
| 19:42      | I know I definitely appreciate this sort of thing being there because I do find myself                             |
| 19:47      | nesting things like this.                                                                                          |
| 19:49      | Um, and I was using [[Alfred]] for a while for, for, um, text expansion and, you know, I still                     |
| 19:54      | have [[TextExpander]], um, but I, you know, I like to try out all the options and I'm, I'm                         |
| 19:59      | going to be giving a [[Keyboard Maestro]] a thorough run for its money in the text expansion department            |
| 20:04      | over the next couple of months just to see if it can, uh, if it can work for me.                                   |
| 20:08      | Because, you know, it's never that I want to get rid of [[TextExpander]], you know, it's                           |
| 20:12      | a great tool.                                                                                                      |
| 20:13      | It does exactly what it does, but I'm always interested in finding the best solution for                           |
| 20:16      | me.                                                                                                                |
| 20:17      | Yeah.                                                                                                              |
| 20:18      | And people are always asking me, you know, is there like a non-price, you know, a subscription                     |
| 20:23      | service like [[TextExpander]] and they're out there, but honestly, I'm going to try them                           |
| 20:27      | there and it's good.                                                                                               |
| 20:29      | You may think I'm in the bag.                                                                                      |
| 20:30      | We've had them as a sponsor off and on for years, but the, um, they just have a really                             |
| 20:35      | nice set of features, but you know what, uh, [[Keyboard Maestro]], you know, this is the first                     |
| 20:39      | third party app other than [[TextExpander]] I've seen add these, uh, prompts.                                      |
| 20:44      | So I think that's on the way, right?                                                                               |
| 20:46      | Yes.                                                                                                               |
| 20:47      | Yeah.                                                                                                              |
| 20:48      | Exactly.                                                                                                           |
| 20:49      | Okay.                                                                                                              |
| 20:50      | Uh, another nice new feature is, is calendar events.                                                               |
| 20:54      | Now I've always felt like, uh, if there's a weakness in [[Keyboard Maestro]], it is things                         |
| 20:59      | like contacts and calendars.                                                                                       |
| 21:01      | I don't think it's as good as them as shortcuts are.                                                               |
| 21:04      | And I think that's probably because of just kind of the nature of the beast.                                       |
| 21:08      | [[Keyboard Maestro]] is made for doing all kinds of crazy, powerful stuff, but in dealing with                     |
| 21:13      | the native apps, I think Apple has more of a focus on that.                                                        |
| 21:16      | And it feels like, uh, [[Keyboard Maestro]] is starting to kind of nudge back that direction                       |
| 21:22      | or at least add more features in.                                                                                  |
| 21:24      | Um, I did run some tests on the new create calendar event and it works just like it does                           |
| 21:29      | in [[Shortcuts]].                                                                                                  |
| 21:30      | You know, it's got all the fields that you would expect.                                                           |
| 21:32      | It's even got the URL filled so you can drop a URL into your new calendar event, uh, as                            |
| 21:37      | you create it.                                                                                                     |
| 21:38      | And I feel like, you know, this is a good implementation of this, uh, and it's a feature                           |
| 21:42      | that was always frankly missing from [[Keyboard Maestro]].                                                         |
| 21:46      | There's not a whole lot to say about it, but if you want to create a new calendar event,                           |
| 21:50      | you no longer have to go over to shortcuts to do it.                                                               |
| 21:52      | You can just run it as one more step in your [[Keyboard Maestro]] script.                                          |
| 21:55      | Yeah, exactly.                                                                                                     |
| 21:57      | And I, I have to say that's the sort of thing that I really like, similarly to the, you                            |
| 22:01      | know, the enhanced or different, uh, [[OCR]] option.                                                               |
| 22:06      | You could do this by farming out to shortcuts, but it's really lovely when you can just stay                       |
| 22:10      | in [[Keyboard Maestro]].                                                                                           |
| 22:12      | Similarly, it's also great that you can just say, no, I already have a shortcut that does                          |
| 22:16      | this thing.                                                                                                        |
| 22:17      | I just want to run it and continue with the output from there.                                                     |
| 22:20      | Um, so yeah, I find that to be very, very useful.                                                                  |
| 22:24      | Yeah.                                                                                                              |
| 22:25      | And it's got all the things you'd expect.                                                                          |
| 22:27      | You can pick which calendar you're going to, set a location, starting time, duration, alarms.                      |
| 22:33      | You can set it as repeating, although repeating is limited as far as I understand to kind                          |
| 22:39      | of the usual suspects, daily, weekly, fortnight, month or year, fortnight.                                         |
| 22:44      | That's a term that we don't say much in the U S every two weeks is what fortnight means.                           |
| 22:48      | Yeah.                                                                                                              |
| 22:49      | I mean, I have to say it's, uh, it's better than bi-weekly because bi-weekly in some context                       |
| 22:54      | means twice a week and in some context, it means every other week.                                                 |
| 22:56      | Yeah.                                                                                                              |
| 22:57      | It's like pick one.                                                                                                |
| 22:58      | Yeah.                                                                                                              |
| 22:59      | Pick one.                                                                                                          |
| 23:00      | Isn't that crazy?                                                                                                  |
| 23:01      | It's a term that can mean twice a week or every two weeks and we, or just okay with                                |
| 23:03      | that.                                                                                                              |
| 23:04      | There's a part of me that hates that.                                                                              |
| 23:07      | Yeah.                                                                                                              |
| 23:08      | That's probably the same part of me that's currently hating wintertime over here.                                  |
| 23:11      | It's fine.                                                                                                         |
| 23:12      | Like I'm living with it, but yeah.                                                                                 |
| 23:15      | So speaking of that, uh, calendar event, because of that, I discovered that there's a GMT offset                   |
| 23:20      | feature built into, um, [[Keyboard Maestro]], um, so it's a function just like you can get                         |
| 23:26      | the current day, um, and, and, and time and now and things like that.                                              |
| 23:31      | Um, but there's a GMT offset, which returns the number of seconds that you are offset                              |
| 23:35      | from GMT.                                                                                                          |
| 23:37      | So that's really useful for all sorts of day math stuff.                                                           |
| 23:41      | And I'm, I'm just loving the fact that this is something that happens every time [[Keyboard Maestro]]              |
| 23:44      | comes out with a bunch of new features.                                                                            |
| 23:46      | I discover existing features that I didn't know about that solve problems that I, I had.                           |
| 23:51      | So it's, that's always really cool.                                                                                |
| 23:53      | This app is deep.                                                                                                  |
| 23:54      | Oh yeah.                                                                                                           |
| 23:58      | This episode of the automators is brought to you by ExpressVPN, high speed, secure and                             |
| 24:03      | anonymous VPN services.                                                                                            |
| 24:06      | Sign up at expressvpn.com/automators and get an extra three months for free.                                       |
| 24:11      | I don't know if you've ever noticed, but when you open an incognito window, there's a little                       |
| 24:15      | thing note that tells you your activity could still be visible to your employer, your school                       |
| 24:20      | and your ISP.                                                                                                      |
| 24:22      | If you want to really stop people from seeing the sites you visit, you need to use ExpressVPN.                     |
| 24:28      | Think about all the times you've used wifi at a coffee shop or a hotel without ExpressVPN,                         |
| 24:34      | every site you visit could be logged by the admin of that network.                                                 |
| 24:38      | And that's still true even when you're in incognito mode.                                                          |
| 24:42      | That's more your home internet provider could also see and record your browsing data.                              |
| 24:46      | In fact, and in the US, they were legally allowed to sell that data to advertisers and                             |
| 24:50      | they make a lot of money cataloguing every website you visit.                                                      |
| 24:55      | ExpressVPN is an app that encrypts all of your network data and reroutes it through a                              |
| 24:59      | network of secure servers so that your private online activity stays that private.                                 |
| 25:06      | ExpressVPN works on all your devices and is super easy to use.                                                     |
| 25:10      | The app literally has one button, just tap it to connect and your browsing activity is                             |
| 25:14      | secure from prying eyes.                                                                                           |
| 25:16      | I've used ExpressVPN for years, I like the simplicity of it and I like the reliability                             |
| 25:22      | of it, it's fast, it doesn't get in my way but it does provide me that privacy.                                    |
| 25:27      | I'm not doing any creepy stuff on the internet, I just don't like the way people are keeping                       |
| 25:30      | track and selling my data, I want to make it harder for them.                                                      |
| 25:34      | So stop letting strangers invade your online privacy.                                                              |
| 25:37      | Check yourself at expressvpn.com/automators, once again that is expressvpn.com/automators                          |
| 25:45      | to get three extra months for free, expressvpn.com/automators to learn more.                                       |
| 25:53      | And our thanks to ExpressVPN for their support of the automators and all of Relay FM.                              |
| 26:00      | Cool, so there's a whole bunch of other new features in here as well, including some like                          |
| 26:06      | setting your screen resolution, which feels like something that you may not do all that                            |
| 26:10      | often.                                                                                                             |
| 26:11      | I know that I don't do it super regularly, but I also know that every so often I feel                              |
| 26:16      | like this is something that happens when you're in support more.                                                   |
| 26:20      | I'm investigating like a customer issue at work or something, you know, it's made its                              |
| 26:23      | way to me and you know, somebody's like, okay, well this person has a Mac and they've got                          |
| 26:28      | this screen resolution on this display and I'm like, wait, what?                                                   |
| 26:32      | How do I set my screen for that resolution?                                                                        |
| 26:34      | Now I've used a bunch of apps for this in the past, but I love the fact that I can just                            |
| 26:37      | forget about all of those now and just use [[Keyboard Maestro]] to set my screen resolution.                       |
| 26:42      | So that's definitely a feature that I'm going to be keeping up my sleeve.                                          |
| 26:46      | Okay, so this is the one that was for me in this release because I'm a screencaster and                            |
| 26:55      | you know, when you screencast, you want to set your resolution bigger.                                             |
| 27:00      | Here's a screencaster trick for the audience.                                                                      |
| 27:02      | You don't want your standard high fidelity screen resolution when you screencast because                           |
| 27:08      | when people are watching it at home on their Apple TV or their small screen, it's hard                             |
| 27:12      | to read the text and everything is smaller than it should be.                                                      |
| 27:15      | So you actually want to bump up the resolution to a much where the text is bigger, you know,                       |
| 27:22      | it's not something I would use daily as I'm working with the computer, but when I record                           |
| 27:26      | I always am changing and this has been an ongoing battle for me.                                                   |
| 27:30      | There have been menu bar apps that kind of do it, but they aren't automation friendly.                             |
| 27:35      | Eventually, I cobbled together a very complicated [[AppleScript]] that does it and it works, but                   |
| 27:43      | it's also very rickety and this, I love this that they added this feature.                                         |
| 27:48      | So now I've already got an automation when I start screencasting that, you know, sets                              |
| 27:52      | the clock and does a bunch of other stuff.                                                                         |
| 27:54      | And now I'm just dropping and pulling the [[AppleScript]] out, adding this one step action,                        |
| 27:59      | my screen resolution changes and I'm quite pleased with this.                                                      |
| 28:03      | So this one is to me the winner, but I know I'm an oddball.                                                        |
| 28:08      | Yeah, but at the same time, I feel like there's a whole bunch of people who will find this                         |
| 28:14      | to be useful.                                                                                                      |
| 28:15      | Similarly, remove clipboard flavours is something that it's, you know, it's probably only useful                   |
| 28:21      | for some people, but for those people, it's going to be so useful.                                                 |
| 28:25      | So for folks who don't know, when you copy something to your clipboard, say for example,                           |
| 28:29      | you copy a shape that you created in keynote to your clipboard.                                                    |
| 28:36      | That can end up on your clipboard as a number of different things.                                                 |
| 28:39      | It can be an [[SVG]], it can be in [[PNG]], all sorts of stuff, depending on where you then paste                  |
| 28:45      | it to.                                                                                                             |
| 28:46      | And this object that's on your clipboard is actually, you know, it has flavours to it.                             |
| 28:53      | That's what it's referred to.                                                                                      |
| 28:54      | So the fact that you can remove those flavours is so useful.                                                       |
| 28:58      | If you've got a [[Pushover]] account, you can now send notifications directly from [[Keyboard Maestro]]            |
| 29:03      | to [[Pushover]].                                                                                                   |
| 29:04      | I think that's kind of cool.                                                                                       |
| 29:05      | Yeah, yeah.                                                                                                        |
| 29:06      | And I have to say, you know, like this is, this is something that you can do with, you                             |
| 29:10      | know, like, you know, shortcuts can do this with get contest of URL and you can, you can                           |
| 29:15      | make API calls through [[Keyboard Maestro]], which means that you can use other apps like push                     |
| 29:19      | cut, you know, full disclosure, you know, part of the team running push cut and, and so on.                        |
| 29:24      | And it's nice that these sort of actions that users are needing and creating for themselves                        |
| 29:28      | regularly are being integrated into [[Keyboard Maestro]].                                                          |
| 29:33      | So I'm loving that.                                                                                                |
| 29:34      | Yeah, I really think that, you know, just the idea of sending notifications to the user,                           |
| 29:41      | that's something that he's been kind of leaning into often on with it, you know, the URL calls                     |
| 29:46      | and stuff.                                                                                                         |
| 29:48      | This is just one more step in that direction.                                                                      |
| 29:51      | And the, the, there's always been an action where you can select a menu by name.                                   |
| 29:58      | And that one to me is the get out of jail free card of [[Keyboard Maestro]].                                       |
| 30:03      | Sometimes you want to automate something in an app that just is not cooperative.                                   |
| 30:07      | And you can, in essence, kind of force it by just calling menu bar calls.                                          |
| 30:14      | But apparently there were some issues with it.                                                                     |
| 30:16      | Now I've never had a problem with it.                                                                              |
| 30:18      | It's always worked for me, but there was enough of an issue that one of the, the new features                      |
| 30:23      | is he redid that feature to be more stable and, and useful, but, but I, I wouldn't say                             |
| 30:28      | anybody out there that's trying to automate an app that just is not cooperative, doesn't                           |
| 30:33      | have [[AppleScript]] dictionary, doesn't want to, you know, whatever it doesn't want to                            |
| 30:36      | play along.                                                                                                        |
| 30:37      | You can force it with menu bars, like say, okay, file new menu, then you almost everything                         |
| 30:44      | can be addressable from menu bar calls with most apps.                                                             |
| 30:47      | So that is a great feature.                                                                                        |
| 30:50      | And I'm glad it's continuing to get refinement.                                                                    |
| 30:52      | Yes.                                                                                                               |
| 30:53      | Yeah.                                                                                                              |
| 30:54      | One of the things I really like doing with that feature is combining it with the, if menu                          |
| 30:57      | is available or is not available, if statements, because I have, so I usually use command and                      |
| 31:06      | then the square brackets for indenting and outdenting and a lot of applications, not                               |
| 31:09      | every application, some of them use tab and my brain's okay with that.                                             |
| 31:13      | But in [[OmniFocus]], if you're in a project and you've got a nested task, you can outdent                         |
| 31:21      | it to, to be to pretty much any level, but if you're in the inbox and I hit outdent,                               |
| 31:29      | it doesn't turn it into a project, which is what I'm asked after doing.                                            |
| 31:34      | And so I am able to use the if menu option is available for convert to project, then                               |
| 31:41      | just do that instead for me.                                                                                       |
| 31:44      | And that's it.                                                                                                     |
| 31:45      | And I absolutely love that.                                                                                        |
| 31:48      | And yeah, it makes, that sort of thing makes my life a lot easier.                                                 |
| 31:51      | So I'm glad that even though the sections always were perfectly for me, that this is                               |
| 31:55      | just had a little bit of a, a polish in an upgrade.                                                                |
| 31:58      | So another action, which I'm sure some folks will be absolutely loving because it ties                             |
| 32:05      | into meetings and so on.                                                                                           |
| 32:08      | And so if you, if you want like a meeting macro that you can set up so when you're ready                           |
| 32:12      | to join a meeting, you're, you're, you just click it and you go set audio device.                                  |
| 32:18      | And so you can set audio devices for, you know, your, your input, your output and for                              |
| 32:23      | sound effects, which is a third thing in macOS.                                                                    |
| 32:26      | You can have sound effects go to a different speaker, which can be very useful.                                    |
| 32:30      | And I use that a lot of the time, but not when I'm in a meeting because when I'm in                                |
| 32:34      | a meeting, I don't want that sound effect being on a speaker that's then audible to                                |
| 32:39      | other people.                                                                                                      |
| 32:40      | I want it coming through my headset.                                                                               |
| 32:42      | So yeah, this is a really lovely little feature that was added.                                                    |
| 32:46      | So what, what kind of sound effects are you using?                                                                 |
| 32:49      | Now I'm curious.                                                                                                   |
| 32:50      | Well, I'm just talking about like macOS sound effects.                                                             |
| 32:53      | So like when I get a message, that sound, that sort of thing, that, that, that, that                               |
| 32:57      | has a separate speaker option.                                                                                     |
| 32:59      | I thought you had like a macOS.                                                                                    |
| 33:01      | I thought you had like a drum kick, like when you tell a joke, but boom, you know, like                            |
| 33:05      | you would just like follow that around.                                                                            |
| 33:07      | I mean, that's what the [[Stream Deck\|Stream Decks]] for.                                                         |
| 33:09      | And speaking of the [[Stream Deck]], actually there was another new action added to set                            |
| 33:14      | or rather an options added to the set [[Stream Deck]] or the [[Stream Deck]] set image action.                     |
| 33:21      | It now supports files.                                                                                             |
| 33:23      | So as well as icons, you can also use files.                                                                       |
| 33:26      | And that's, that's really handy.                                                                                   |
| 33:31      | The list is so long, you know, and like even the set audio device thing, that, I mean,                             |
| 33:38      | I was just making a joke about, but it's also like so useful.                                                      |
| 33:41      | Like I was talking earlier about playing, I like to play my music through the HomePods                             |
| 33:44      | and, but I like the other stuff to come through the Mac speaker and like there's all sorts                         |
| 33:48      | of ways I can automate this now.                                                                                   |
| 33:51      | Yeah.                                                                                                              |
| 33:52      | Very easily.                                                                                                       |
| 33:53      | So it's nice.                                                                                                      |
| 33:54      | And all these just add up to making life a lot easier.                                                             |
| 33:59      | So you know, you're setting variable to text action now support is setting array elements                          |
| 34:05      | of a variable.                                                                                                     |
| 34:07      | And you know, there's, there are some adjustments as well to two applications that I use a lot                     |
| 34:11      | hide front application and quit application.                                                                       |
| 34:15      | And so both of these wait for that action to be like completed before they continue.                               |
| 34:22      | So quit application waits for the action to the application to terminate or to relaunch.                           |
| 34:28      | And the hide front application waits for the application to no longer be active before                             |
| 34:32      | it continues.                                                                                                      |
| 34:33      | And I feel like that's the sort of thing that will definitely make life easier for a lot                           |
| 34:37      | of folks.                                                                                                          |
| 34:38      | Some folks who like me have just added a wait until application is no longer active or wait                        |
| 34:42      | until application is quit action, but also just new users who are coming in who are going,                         |
| 34:47      | Oh, I just want to do this.                                                                                        |
| 34:49      | And no longer having to trouble shoot and figure out that maybe adding a wait action is what's                     |
| 34:53      | needed for this particular macro to do what it needs to do.                                                        |
| 34:56      | You know, one of the things we were talking about before you hit the record button is                              |
| 35:00      | that [[Keyboard Maestro]] has themes like, and you don't even realise they're there unless                         |
| 35:05      | you have to go look for them, but they added a new one, blue tow pass.                                             |
| 35:09      | But it's kind of fun.                                                                                              |
| 35:10      | If you go into the settings, you can click into the settings [[Keyboard Maestro]] and then                         |
| 35:15      | you can change the colour theme of your menus and, you know, they've got different ones                            |
| 35:21      | you can choose.                                                                                                    |
| 35:22      | Yeah, specifically if the palettes.                                                                                |
| 35:24      | So for folks, if you open, um, [[Keyboard Maestro]] and you go to preferences, there's a palettes                  |
| 35:29      | tab.                                                                                                               |
| 35:30      | If you click on any of those palettes styles, it'll give you a theme editor and you can                            |
| 35:35      | go nuts and create your own theme.                                                                                 |
| 35:37      | But there's also arrows, which if you click up and down, we'll let you go through.                                 |
| 35:41      | So, uh, is anybody going to be surprised that I'm currently using gamma or purple?                                 |
| 35:46      | I don't think anybody's going to be surprised about that, but the blue tow pass is definitely                      |
| 35:50      | on there.                                                                                                          |
| 35:51      | It's my global macro palette style.                                                                                |
| 35:53      | Um, I tend not to use palettes all that much, which is perhaps why I've never really ended                         |
| 35:57      | up using this feature too much.                                                                                    |
| 35:59      | Um, but, uh, I do love the fact that there are these different styles and, uh, it caused                           |
| 36:05      | me to go through and explore and find gamma or purple, um, was an option.                                          |
| 36:10      | So yeah, um, there's a lot of purple in my life right now and I'm loving it.                                       |
| 36:14      | Well, and that's just like one more example of finding a new feature when you get the                              |
| 36:19      | update.                                                                                                            |
| 36:20      | And, uh, I like the orange ones to say the sunset looks kind of nice too, but, uh, yeah,                           |
| 36:24      | I should start using these more often.                                                                             |
| 36:27      | In other news, I've started an automation podcast with [[Stephen Hackett]], uh, who is also                        |
| 36:31      | an orange fan.                                                                                                     |
| 36:32      | Um, no, I'm kidding.                                                                                               |
| 36:33      | I'm kidding folks.                                                                                                 |
| 36:34      | Uh, the fact that both of you are such big fans of orange and yet the [[Mac Power Users\|MPU]] artwork is          |
| 36:38      | green does confuse me frequently.                                                                                  |
| 36:40      | Um, it's not a bad thing.                                                                                          |
| 36:42      | It's just, well, we did the, uh, Steven wasn't the co-host when we made it and, uh, you know,                      |
| 36:47      | just kind of is what it is.                                                                                        |
| 36:48      | Yeah, I know, I know.                                                                                              |
| 36:50      | I just, every so often I keep thinking that you should, uh, have an orange version of                              |
| 36:54      | it.                                                                                                                |
| 36:55      | Uh, maybe we'll do that when we hit episode 1000, we'll just change it to orange.                                  |
| 36:59      | Yes.                                                                                                               |
| 37:00      | Awesome.                                                                                                           |
| 37:01      | Awesome.                                                                                                           |
| 37:02      | That sounds good to me.                                                                                            |
| 37:03      | All right.                                                                                                         |
| 37:04      | In addition to setting audio sources, you can mute and unmute audio, uh, output, uh,                               |
| 37:09      | with a single command.                                                                                             |
| 37:10      | I mean, just like nice little quality of life improvements.                                                        |
| 37:14      | Yeah.                                                                                                              |
| 37:15      | And similarly, uh, clicking at the found image, um, so, you know, keep up my strokes, get                          |
| 37:21      | out of jail, free cart, um, is like, you know, okay, so I can't do this via a keyboard shortcut.                   |
| 37:27      | I can't do this via, you know, actual scripting, of course, um, I can't do this via a menu.                        |
| 37:32      | Okay.                                                                                                              |
| 37:33      | I'm just going to click at this image.                                                                             |
| 37:35      | Every so often like you'd have to add like a wait, like a wait half a second, wait two                             |
| 37:39      | seconds and then click at the image.                                                                               |
| 37:42      | Now there's an option to wait for that image to appear.                                                            |
| 37:46      | And it's the same in find image on screen, uh, where it can find an image and both of                              |
| 37:51      | those can wait for an image to appear.                                                                             |
| 37:53      | I just love that that is an option now, um, that's going to make a lot of these macros                             |
| 37:58      | that I had that were a little bit finicky, because, you know, it would be variable as                              |
| 38:01      | to how long it was that it needed to wait.                                                                         |
| 38:04      | That's just going to solve that problem right away.                                                                |
| 38:06      | Yeah.                                                                                                              |
| 38:07      | I mean, you often use this to have it click a button, but if the button isn't on the                               |
| 38:10      | screen yet, like I'm thinking about like, I, I have a bunch of these, uh, programmed                               |
| 38:15      | with the [[Grammarly]] website and you know, you just don't know how long it's going to take                       |
| 38:19      | the website to load.                                                                                               |
| 38:20      | And now you just have a wait for that image to appear and then it clicks it.                                       |
| 38:24      | I mean, it is shocking to me how well that feature works.                                                          |
| 38:29      | I mean, cause it really is a hack, right?                                                                          |
| 38:31      | You're, you can't figure out how to automate something.                                                            |
| 38:33      | So you just tell your computer, just look at the screen and whenever the [[Grammarly]] new                         |
| 38:37      | document button shows up, just push it, you know, and that, that is like crazy hacky automation.                   |
| 38:44      | But it works every time, but I have to, I make it wait like four seconds because I don't                           |
| 38:50      | know when it's going to show up, when the page is going to load.                                                   |
| 38:52      | Now I can take that piece out of that automation, just say, push it when it shows up.                              |
| 38:56      | I like that.                                                                                                       |
| 38:57      | Yeah.                                                                                                              |
| 38:58      | Um, and of course, with all these things, uh, I'm just going to take a moment to tell                              |
| 39:02      | people there's a little settings cog on actions in macros in [[Keyboard Maestro]].                                 |
| 39:08      | You may have never clicked this before.                                                                            |
| 39:09      | You may have clicked this by accident, but it's over on the right hand side.                                       |
| 39:12      | Go click it.                                                                                                       |
| 39:13      | Okay.                                                                                                              |
| 39:14      | I, I'm telling you this for a reason because there's various options in there, like set                            |
| 39:19      | action timeout and stuff like that.                                                                                |
| 39:21      | Yeah.                                                                                                              |
| 39:22      | And when you've got something like the [[Grammarly]] website where you're waiting for an image                     |
| 39:24      | to appear, I would strongly suggest that you make sure that if you are adding that option,                         |
| 39:30      | which you'll, you'll do in this settings cog menu as well, to wait for this to appear,                             |
| 39:35      | that you also set your action timeout to something reasonable like 30 seconds.                                     |
| 39:39      | Okay.                                                                                                              |
| 39:40      | Realistically, if it doesn't load in 10 seconds, I reckon there's a problem and you probably                       |
| 39:43      | need to rerun the macro, but if after 30 seconds it hasn't appeared, your macro should                             |
| 39:48      | probably, I don't know, set off some fireworks and go, hi, I've got a problem and I cannot                         |
| 39:53      | do the thing.                                                                                                      |
| 39:54      | But the fact that you can do that and you can customise that, some of the actions have                             |
| 39:58      | like cancel macro on failure as an option.                                                                         |
| 40:01      | And so you can say like, if I don't work, I don't want to, I don't want this macro to                              |
| 40:06      | like just stop, like it's okay if this step doesn't work for whatever reason.                                      |
| 40:11      | And I just love that these things are all right there as options.                                                  |
| 40:16      | There's also, by the way, copying actions as text or as images, which can be really nice                           |
| 40:22      | when you're sharing macros with other people, I tend to copy them as images and then set                           |
| 40:27      | the alt text to the copy as text option.                                                                           |
| 40:30      | And that's just really useful so that people can see what it is and then also in the macro                         |
| 40:35      | file over as well, so somebody can download it and give it a natural try.                                          |
| 40:38      | But yeah, I love the fact that all of these options are right there.                                               |
| 40:43      | There's also duplicating, disabling actions, trying them.                                                          |
| 40:46      | You can change colours, you can set notes on things.                                                               |
| 40:48      | So if you've got something that looks a bit weird and you're like, I am not going to remember                      |
| 40:51      | in five minutes why I've done this, add a note.                                                                    |
| 40:55      | You'll appreciate it.                                                                                              |
| 40:56      | Yeah, there's so much in this new version.                                                                         |
| 41:01      | You can tell like a lot of little problems got solved.                                                             |
| 41:06      | Adjustments to the engine, the [[Keyboard Maestro]] engine, so the way it works is [[Keyboard Maestro]]            |
| 41:11      | has an engine that runs in the background at all times in order to do the things you've                            |
| 41:16      | asked it to do.                                                                                                    |
| 41:17      | But then the application is where you set up the automations.                                                      |
| 41:20      | And there was a bunch of work on the engine to make it faster, more efficient.                                     |
| 41:25      | And just generally do the job better.                                                                              |
| 41:30      | The changes in that, that's like where they made the change to the [[OCR]] that we talked                          |
| 41:35      | about earlier, putting macro icons in the status menu.                                                             |
| 41:40      | So you have a status menu app with this.                                                                           |
| 41:42      | You can put the icon there.                                                                                        |
| 41:44      | That's nice.                                                                                                       |
| 41:45      | It makes it more visual, easier to see.                                                                            |
| 41:47      | All these are just nice little improvements that I think people will appreciate if they                            |
| 41:51      | use this application.                                                                                              |
| 41:53      | Definitely, and it's one of those things where all of this stuff, it adds up.                                      |
| 41:59      | So there's better support for using the address book and there's an address book token where                       |
| 42:05      | you can just get your information out of the address book.                                                         |
| 42:09      | And that seems like something that's like, well, why would I need that?                                            |
| 42:13      | What's that for?                                                                                                   |
| 42:14      | And it's like, well, actually, if you've got a whole bunch of snippets that are referencing                        |
| 42:18      | your name and your address, and then at some point you have to modify that, you move house                         |
| 42:25      | or similar.                                                                                                        |
| 42:27      | Being able to just pull that out of your address book is great, because then you update your                       |
| 42:30      | address book and guess what, all your snippets are updated.                                                        |
| 42:33      | And that, ideally, you'd have like a source, like a one macro or one snippet that's going                          |
| 42:41      | to have all of this information in there so you only have to update it once.                                       |
| 42:44      | But let's face it, we're human.                                                                                    |
| 42:46      | We all make mistakes.                                                                                              |
| 42:47      | Some of us don't do that.                                                                                          |
| 42:48      | Even those of us who preach it don't necessarily practice it.                                                      |
| 42:51      | So being able to just pull out of your address book for this sort of thing is going to make                        |
| 42:56      | your life easier.                                                                                                  |
| 42:58      | So I'm going to recommend that everybody do that.                                                                  |
| 43:00      | If they've got any snippets in [[Keyboard Maestro]] referencing their personal information, use                    |
| 43:03      | that address book one.                                                                                             |
| 43:05      | And that's come from this new version with the updated options that we've got.                                     |
| 43:10      | I just feel like I said earlier, a calendar was a weakness for it, but address book was                            |
| 43:15      | too, and the fact that they're trying to move that direction gives you a lot more power.                           |
| 43:21      | And you can pull the stuff out of shortcuts, but I think it'd be nice if this app can do                           |
| 43:26      | it as well.                                                                                                        |
| 43:27      | Yes, exactly.                                                                                                      |
| 43:29      | And yeah, I mean, I love the fact that I had some things, which I couldn't do previously                           |
| 43:34      | directly in [[Keyboard Maestro]], so I was using shortcuts to do it.                                               |
| 43:37      | And as David and I mentioned earlier, we upgraded to the new version.                                              |
| 43:41      | Apart from I got the option on one of my machines to live dangerously because I hadn't installed                   |
| 43:46      | the update just yet, and I was syncing, and I love that, by the way, that that and also                            |
| 43:51      | the fact that you get a little bit of audio that says thank you when you input the license                         |
| 43:55      | code for the new version, they're just tiny little Easter eggs, and they make me happy                             |
| 44:01      | every two years when I encounter them.                                                                             |
| 44:05      | Because yeah, it's nice that you get the warning that, yeah, you probably don't want                               |
| 44:09      | to live dangerously, but you can if you want to, or just install the update.                                       |
| 44:13      | So of course, I had installed the update everywhere.                                                               |
| 44:15      | And yeah, that was great, but all of my macros just worked.                                                        |
| 44:18      | If it worked before, it worked after.                                                                              |
| 44:20      | The only things that didn't work were the things that I had not actually finished before,                          |
| 44:23      | so they weren't actually working in the first place.                                                               |
| 44:26      | And that's just great.                                                                                             |
| 44:29      | So yeah, I really, really appreciate that.                                                                         |
| 44:32      | Macro construction also got some love, like he's got an action where you can move or a                             |
| 44:37      | menu item where you can move actions up and down in your list with a menu action.                                  |
| 44:43      | I don't really find that I need that that much.                                                                    |
| 44:46      | I feel like [[Keyboard Maestro]] really is the kind of gold star of macro construction.                            |
| 44:53      | It's difficult sometimes in shortcuts, because really the easiest way is you copy it, then                         |
| 44:57      | you paste it somewhere else with the, you hold on basically the icon for the action                                |
| 45:01      | and then say paste under or whatever, but you can't really move around and [[Keyboard Maestro]],                   |
| 45:06      | you can select the whole block of actions and duplicate them or copy them.                                         |
| 45:11      | But if he continues to press his lead forward on this stuff, I really wish that the [[Shortcuts]]                  |
| 45:17      | team would be able to do some of these features in [[Shortcuts]], because that is one of the big                   |
| 45:23      | frustrations with [[Shortcuts]] sometimes is just trying to get blocks of actions or move                          |
| 45:27      | things around without breaking them.                                                                               |
| 45:30      | And it's like it goes slow and then it goes really fast and then suddenly you're complicated                       |
| 45:35      | shortcut is out of order and you're not sure where and that's never fun.                                           |
| 45:40      | Yeah.                                                                                                              |
| 45:41      | Yeah.                                                                                                              |
| 45:42      | So I'm slightly surprised at you David.                                                                            |
| 45:43      | I immediately went in on finding out that there's move action up and move action down                              |
| 45:48      | and I added using macOS's native keyboard options in the system settings.                                          |
| 45:54      | I had a keyboard shortcuts for these.                                                                              |
| 45:55      | Yeah, that makes sense.                                                                                            |
| 45:56      | So I can move things up and down using my keyboard.                                                                |
| 45:59      | Like control arrow or something like that.                                                                         |
| 46:01      | Yeah.                                                                                                              |
| 46:02      | Yeah.                                                                                                              |
| 46:03      | I think it was command option up and command option down.                                                          |
| 46:09      | Yeah.                                                                                                              |
| 46:10      | But yeah, these are things that are making my brain happy because some people won't care                           |
| 46:17      | about this.                                                                                                        |
| 46:18      | They'll continue to drag stuff around and for most people that is absolutely fine.                                 |
| 46:22      | That was what I was doing before.                                                                                  |
| 46:23      | I don't have a problem with continuing to do it, but it's really nice that now I can                               |
| 46:27      | do even more without taking my hands off the keyboard.                                                             |
| 46:30      | AI might be the most important new computer technology ever.                                                       |
| 46:36      | It's stomping every industry and literally billions of dollars are being invested.                                 |
| 46:40      | So buckle up.                                                                                                      |
| 46:42      | The problem is that AI needs a lot of speed and processing power.                                                  |
| 46:45      | So how do you compete without costs spiraling out of control?                                                      |
| 46:48      | It's time to upgrade to the next generation of the cloud, Oracle Cloud Infrastructure                              |
| 46:53      | or OCI.                                                                                                            |
| 46:54      | OCI is a single platform for your infrastructure, database, application development and AI                         |
| 47:00      | needs.                                                                                                             |
| 47:01      | OCI has four to eight times the bandwidth of other clouds, offers one consistent price                             |
| 47:05      | instead of variable regional pricing, and of course, nobody does data better than Oracle.                          |
| 47:11      | So now you can train your AI models at twice the speed and less than half the cost of other                        |
| 47:16      | clouds.                                                                                                            |
| 47:17      | If you want to do more and spend less like Uber, 8x8 and Databricks Mosaic, take a free                            |
| 47:23      | test drive at OCI at www.oracle.com/automators.                                                                    |
| 47:29      | Thanks to Oracle for sponsoring this show and all of Relay FM.                                                     |
| 47:45      | One of my favourite tricks with [[Keyboard Maestro]] historically has been moving files.                           |
| 47:49      | I have a bunch of buttons set up to move files, but the [[Keyboard Maestro]] script took a lot                     |
| 47:54      | of finagling to get to work to move files, but now that's a lot easier, isn't it?                                  |
| 48:01      | Yeah, yeah, it is.                                                                                                 |
| 48:02      | So this has tripped me up a few times before because the move file and the rename file action,                     |
| 48:08      | they were kind of bundled in together.                                                                             |
| 48:09      | And this is great because underneath it, you are just actually moving the path, you're                             |
| 48:15      | changing the path of it, but that could be a little bit confusing for folks.                                       |
| 48:20      | And so it's now got explicit options for move or rename the files.                                                 |
| 48:26      | And I really appreciate that just because, yeah, it can help a lot with how some of these                          |
| 48:33      | things work because, yeah, there was move, and rename, and yeah, there's now move and                              |
| 48:42      | rename for the same thing.                                                                                         |
| 48:45      | So yeah, that just makes it a lot easier.                                                                          |
| 48:47      | Yeah, I use this in so many contexts because, like, for the MacSparky Lab stuff that I sent                        |
| 48:52      | to [[Jean Francois Brissette\|JF]], he helps me edit them.                                                         |
| 48:54      | I've got a button that has his picture on it, and it just points to a shared [[Dropbox]]                               |
| 48:59      | folder.                                                                                                            |
| 49:00      | And any file that I've selected, if I push his face, it goes to him.                                               |
| 49:04      | And the same thing with the podcast, like, I have a button that automatically moves our                            |
| 49:08      | recordings and ad reads and whatnot to a folder that we share with our editor, Jim.                                |
| 49:13      | And, like, I just find it seems basic to have an action to move a file.                                            |
| 49:19      | But no, it actually is something that you might use all the time.                                                  |
| 49:23      | I mean, we've recently made some slight tweaks to how we store the show notes for this episode.                    |
| 49:31      | And I'm doing this all with [[Keyboard Maestro]].                                                                  |
| 49:33      | So [[Keyboard Maestro]], when I start doing the recording, will create a new file in the correct folder,           |
| 49:38      | which is just created using the show number.                                                                       |
| 49:41      | And then it'll put all of the show notes as I go through the show into that, because                               |
| 49:45      | I'm using my [[Stream Deck#Stream Deck Pedal\|Stream Deck Pedal]], and it's writing [[Keyboard Maestro]] macros.   |
| 49:50      | But when I'm done with the recording, because it's watching where the recordings for this                          |
| 49:54      | episode go, it grabs them and it moves them and renames them.                                                      |
| 49:58      | So it's got the right episode number in the front, and it sticks them into the right                               |
| 50:01      | folder for me.                                                                                                     |
| 50:02      | And if something goes wrong and it screws up, it's like, okay, I'm just gonna dump these                           |
| 50:05      | into incoming and hope that Jim can work it out.                                                                   |
| 50:07      | But because it renames them before that, and then it moves them, it's like, it means that                          |
| 50:13      | I and I am gonna be leaving these as two separate actions because it works and I don't want                        |
| 50:16      | Jim to kill me, because he does a lot of work for us to make our lives a lot easier.                               |
| 50:20      | So I'm gonna just leave that one alone.                                                                            |
| 50:23      | But yeah, the fact that that is just, you know, something that you can do now is great.                            |
| 50:29      | And yeah, moving and renaming files, honestly, such a useful tool.                                                 |
| 50:33      | And there's also something else that I've just noticed, David.                                                     |
| 50:36      | I'm not sure when this appeared.                                                                                   |
| 50:38      | I don't think that this is something that I've seen explicitly listed somewhere.                                   |
| 50:44      | And so you're gonna have to tell me if I'm going crazy.                                                            |
| 50:47      | Disable on all Macs.                                                                                               |
| 50:49      | Yeah, there is a macro syncing option to disable the macro group on all Macs now.                                  |
| 50:54      | That is new.                                                                                                       |
| 50:55      | I had not realised that this was in there.                                                                         |
| 50:57      | This is perfect because like my temporary folder, my testing folder and stuff like that, they're                   |
| 51:00      | just disabled on every single Mac.                                                                                 |
| 51:02      | And then I move stuff out of there when I need to run it, and then I move it back in                               |
| 51:07      | when I'm done.                                                                                                     |
| 51:08      | And so the fact that I can disable a folder on every Mac, it's just perfect.                                       |
| 51:12      | I love it.                                                                                                         |
| 51:13      | Yeah.                                                                                                              |
| 51:14      | And that's like a feature that's so far down the stack that, you know, that these guys                             |
| 51:17      | are on top of things that they added that.                                                                         |
| 51:19      | But just, you go back to move and copy files.                                                                      |
| 51:21      | I think that is an often overlooked possibility with [[Keyboard Maestro]].                                         |
| 51:26      | I don't think a lot of people think of using it for that, but it actually is very good                             |
| 51:30      | at it and is particularly nice if you can combine it with a [[Stream Deck]].                                       |
| 51:35      | But it could also just be on a conflict palette.                                                                   |
| 51:38      | Yeah.                                                                                                              |
| 51:39      | I mean, it's also great actually with watching a folder because that's what I have it do                           |
| 51:44      | with the audio for the podcast.                                                                                    |
| 51:46      | It watches a folder and then it does the things.                                                                   |
| 51:52      | And OK, [[Hazel]] could do the same thing.                                                                         |
| 51:54      | And [[Hazel]] could absolutely run that macro for me, but I don't see a reason to have a                           |
| 51:58      | trigger in [[Hazel]] and the action in [[Keyboard Maestro]] when I can just have the trigger                       |
| 52:02      | and the action together in one place and be done with it.                                                          |
| 52:06      | And so that's the way that I have gone with that particular solution.                                              |
| 52:12      | But you know, you can split this stuff up however you like, and that's one of the charming                         |
| 52:16      | things about automation, especially on the Mac.                                                                    |
| 52:19      | Should we talk about the command line tool?                                                                        |
| 52:22      | Because that's a banner feature we haven't mentioned yet.                                                          |
| 52:24      | I think we should.                                                                                                 |
| 52:25      | Yeah.                                                                                                              |
| 52:26      | [[Keyboard Maestro]] now has a command line tool.                                                                  |
| 52:29      | And some people are going, huh?                                                                                    |
| 52:31      | What?                                                                                                              |
| 52:32      | Terminal on your Mac opens a command line.                                                                         |
| 52:35      | And just like there is a shortcuts command line tool, yeah, there is folks.                                        |
| 52:40      | And there's also the ability to run [[AppleScript]] on the command line.                                           |
| 52:43      | Now you can run [[Keyboard Maestro]] on your command line.                                                         |
| 52:46      | Now this may not seem like something that is super useful to some folks.                                           |
| 52:53      | Other folks are going to be going, oh my God, yes, yes, yes, yes, yes.                                             |
| 52:56      | Yeah, you're kind of either in the, why did I use the command line?                                                |
| 53:01      | Or oh my God, I've needed command line access for this.                                                            |
| 53:03      | I have had a few scripts where I'm running, you know, like a [[Shell Scripting\|shell script]] for whatever        |
| 53:08      | it is that does a bunch of things.                                                                                 |
| 53:10      | And I want a [[Keyboard Maestro]] macro to happen.                                                                 |
| 53:13      | And the ways that I have done this previously was either having a shortcut that runs the                           |
| 53:16      | macro or using [[AppleScript]] within the [[Shell Scripting\|shell script]] to run a [[Keyboard Maestro]] macro.   |
| 53:24      | Now both of these worked, it was fine.                                                                             |
| 53:27      | The fact that I can just change it to do this directly now is great, because I do have,                            |
| 53:33      | you know, [[Keyboard Maestro]] macros run through things like [[Bunch]].                                           |
| 53:36      | And so having the option to do that through the command line integrations to through a                             |
| 53:40      | [[AppleScript]] integration, just tidy things up a little bit and stuff like that.                                 |
| 53:45      | So I personally think that this is a great feature, you know, and the fact that it's                               |
| 53:49      | there, maybe not everybody's going to use it, that's fine.                                                         |
| 53:53      | But the fact that you can use it to trigger or edit a macro is just so useful.                                     |
| 53:59      | I absolutely love that.                                                                                            |
| 54:01      | I'm not a big command line user.                                                                                   |
| 54:03      | I have played in it and understand it.                                                                             |
| 54:06      | And my problem is that I just never find much use for it.                                                          |
| 54:10      | The apps I use don't need command line interface.                                                                  |
| 54:12      | I think when you do programming, that's a much more common occurrence to go into the                               |
| 54:17      | command line.                                                                                                      |
| 54:18      | But you know, at one point I felt like I was missing out, like there's something I should                          |
| 54:22      | be doing more command line stuff, and I realised all the stuff I was doing in command line                         |
| 54:26      | while it was very efficient, I can be equally efficient with the user interface stuff because                      |
| 54:34      | of tools like [[Keyboard Maestro]] ironically.                                                                     |
| 54:39      | So it's just, you know, it's just not something I use a lot.                                                       |
| 54:43      | At some point I'm going to find a good use for it, but I don't find it at this point.                              |
| 54:47      | I like what you were talking about earlier where you said like your [[Bunch]] macros, which                        |
| 54:52      | are [[AppleScript]] calls, and you're like, well, I could switch it to a command line call,                        |
| 54:55      | which historically is a lot shorter and more efficient, I guess you would say.                                     |
| 54:59      | Yeah, it's also a little easier to read because I've actually just checked on some of them.                        |
| 55:04      | So it turns out I have a mixture.                                                                                  |
| 55:06      | Some of them are run this shortcut, which runs this [[Keyboard Maestro]] macro.                                    |
| 55:10      | Some of them are doing [[AppleScript]], usually an inline [[AppleScript]].                                         |
| 55:15      | So that's a script that I've written into the bunch to run a [[Keyboard Maestro]] macro.                           |
| 55:19      | Some of them are using [[URL Schemes\|URL scheme]], go me, I've got three different ways of doing this.            |
| 55:24      | I'm going to take a little bit of time after we record today, and I'm just going to tie                            |
| 55:27      | these all up to use that [[Keyboard Maestro]] command line script because I feel like that                         |
| 55:31      | is going to be a whole *bunch* better.                                                                             |
| 55:33      | And yes, the fact that I used "bunch" was intentional.                                                             |
| 55:35      | Yeah, I think we need to do a show on setups, you know, because you can do them in [[Keyboard Maestro]],           |
| 55:40      | you can do them in [[Shortcuts]], you can do them in [[Bunch]], and I am confused because                          |
| 55:45      | I've used all three tools and I think they're all great, but some of them are better at                            |
| 55:51      | some things than others.                                                                                           |
| 55:52      | I think we need to break that down for the audience at some point.                                                 |
| 55:55      | And that will force me to make some decisions probably too.                                                        |
| 55:59      | But let's put that one on the list for future shows.                                                               |
| 56:01      | But yeah, if you want to use a command line to call these [[Keyboard Maestro]] macros, you                         |
| 56:05      | can do it now.                                                                                                     |
| 56:07      | And that's just one more thing you can do.                                                                         |
| 56:11      | And one of a very long list of things you can do, my congratulations to Peter and everybody                        |
| 56:18      | helping him out over there to get [[Keyboard Maestro]] version 11 out gang.                                        |
| 56:22      | This is a really great update.                                                                                     |
| 56:24      | And it's an app.                                                                                                   |
| 56:25      | If you like [[Keyboard Maestro]], you should absolutely upgrade.                                                   |
| 56:28      | Show your support for the developer and, you know, give them the means to continue developing                      |
| 56:35      | this amazing automation app.                                                                                       |
| 56:37      | I've said it many times in the last couple of years, but we are, I feel like in a golden                           |
| 56:42      | age of automation for the Mac, because you have all the toys available to you and you                              |
| 56:47      | got the [[AppleScript]] stuff that we've historically had, but [[Shortcuts]] is for real on the Mac.               |
| 56:52      | And [[Keyboard Maestro]] is there too, along with [[Hazel]] and [[TextExpander]] and all these others.             |
| 56:57      | And they all seem to talk to each other now.                                                                       |
| 56:59      | They've all, for whatever reason, agreed to, you know, run each other's commands.                                  |
| 57:04      | So you can make a super automation tool with basically any collection of tools here.                               |
| 57:10      | But [[Keyboard Maestro]] is, to me, critical to this and I use it every day.                                       |
| 57:14      | I mean, I don't know what else to say.                                                                             |
| 57:16      | So I'm really happy that we got this new version.                                                                  |
| 57:18      | Yeah.                                                                                                              |
| 57:19      | Me too.                                                                                                            |
| 57:20      | And honestly, it's just great to see that Peter's always out there collecting feature                              |
| 57:24      | requests and so on.                                                                                                |
| 57:25      | There's one that's in the forum and this is actually the move or move and rename, move                             |
| 57:33      | or rename option.                                                                                                  |
| 57:35      | And this was actually submitted by Jim, who was a fabulous [[Keyboard Maestro]] user, spent                        |
| 57:42      | a lot of his time in the forums helping out a bunch of users.                                                      |
| 57:44      | Well, he passed away, I think it was last year, might have been the year before.                                   |
| 57:50      | And Peter's replied to his post in the forum about the file actions being a bit confusing                          |
| 57:56      | with, you know, that he said that he's never going to get to see it, but he has added this                         |
| 58:00      | option.                                                                                                            |
| 58:01      | I mean, it was brought up a while ago, it was brought up in 2018, so it's five years.                              |
| 58:06      | But you know what, the fact that Peter will keep track of these things and implement them                          |
| 58:12      | when the time is right and when he's got the ability to do so, it's just fabulous.                                 |
| 58:16      | So great job there, Peter.                                                                                         |
| 58:17      | I'm really, really, really impressed with [[Keyboard Maestro\|Keyboard Maestro 11]].                               |
| 58:20      | Yeah.                                                                                                              |
| 58:21      | We are the Automators Podcast.                                                                                     |
| 58:23      | You can find us at relay.fm/automators.                                                                            |
| 58:26      | You can find the forums for the automators over at [talk.automators.fm](https://talk.automators.fm) and you can go |
| 58:30      | check it out.                                                                                                      |
| 58:31      | It's shocking to me how many times I have a question and I find it in our forum.                                   |
| 58:35      | So I find the answer.                                                                                              |
| 58:37      | So that all works.                                                                                                 |
| 58:38      | Thank you to our sponsors today, our friends at ExpressVPN in Oracle.                                              |
| 58:42      | For those of you that are Automators Max subscribers, stick around.                                                |
| 58:45      | We're going to be talking some [[Stream Deck]].                                                                    |
| 58:46      | Otherwise, thanks for listening and we'll see you next time.                                                       |
| 58:49      | Goodbye, folks.                                                                                                    |
