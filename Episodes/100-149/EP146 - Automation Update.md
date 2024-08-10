---
status: "incomplete"
fc-date:
  year: 2024
  month: 01
  day: 26
fc-category: "podcast"
podcast: "Automators"
published: 2024-01-26
duration: 2293
formattedduration: "00:38:13"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/146"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators146.mp3"
episode: 146
title: "146: OmniFocus 4: Automation Update"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode of Automators, David and Rosemary talk about the new automation features that have come to OmniFocus 4.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 146 Discussion](https://talk.automators.fm/t/146-omnifocus-4-automation-update/17182)

# Sponsors
- None.

# Show Notes
In this episode of Automators, David and Rosemary talk about the new automation features that have come to OmniFocus 4.

- [Introducing OmniFocus 4 | Blog - The Omni Group](https://www.omnigroup.com/blog/introducing-omnifocus-4)
- [OmniFocus 4: What’s New in Omni Automation?](https://omni-automation.com/omnifocus/automation-new.html)
- [OmniFocus Plug-In Collection](https://omni-automation.com/omnifocus/actions.html)
- [Alfred Gallery • Workflows • OmniFocus Collection](https://alfred.app/workflows/omnigroup/omnifocus-collection/)

# Transcription
  
| Time Index | Transcription                                                     |
| :--------- | :---------------------------------------------------------------- |
| 00:00      | Hello, and welcome to The Automators.                             |
| 00:03      | I'm David Sparks, and I'm joined by my co-host,                   |
| 00:06      | Rose Mary Orchard, and this is The Automators,                    |
| 00:08      | where we talk about how to automate your technology               |
| 00:11      | to do your work for you.                                          |
| 00:12      | Hello, Rose.                                                      |
| 00:13      | Hey, David, how are you?                                          |
| 00:15      | Good.                                                             |
| 00:16      | This week, we've got a fun episode.                               |
| 00:18      | OmniFocus 4 has released, and boy,                                |
| 00:21      | there's just a bucket of automation attached to that one.         |
| 00:23      | So we thought we would give it some time on The Automators.       |
| 00:27      | And I'm looking forward to talking about that.                    |
| 00:30      | On the bonus section, Automators Max,                             |
| 00:33      | which is the ad-free extended version of the show,                |
| 00:37      | we're going to be talking about Vision Pro and automation         |
| 00:40      | and thoughts around that.                                         |
| 00:42      | So that's going to be fun today.                                  |
| 00:44      | But let's get right into the meat of this one.                    |
| 00:47      | OmniFocus 4, I guess we should give it a little background.       |
| 00:52      | You and I have both been avid OmniFocus users for years.          |
| 00:56      | I went on a bit of a spirit quest,                                |
| 00:59      | looking for alternatives over the last year.                      |
| 01:03      | Now that I'm not a lawyer, I thought, well, maybe                 |
| 01:04      | I don't need something like OmniFocus.                            |
| 01:06      | Let me see what else is out there.                                |
| 01:08      | And we've gone over that on the Mac Power user,                   |
| 01:11      | so I don't need to restate here.                                  |
| 01:12      | But there's a lot of options, but ultimately,                     |
| 01:14      | I still love my OmniFocus.                                        |
| 01:16      | And it's still my up-of-choice for task management.               |
| 01:21      | But they've been working on this version                          |
| 01:24      | for, I don't know, a couple of years now.                         |
| 01:26      | This one took a while.                                            |
| 01:28      | But it was a big switch.                                          |
| 01:29      | It went over to [[SwiftUI]].                                          |
| 01:31      | And I think it's probably the highest profile, most complex       |
| 01:36      | app, to make the full switch to [[SwiftUI]].                          |
| 01:39      | Would you agree?                                                  |
| 01:40      | I don't really know with it.                                      |
| 01:41      | I haven't really kept that track.                                 |
| 01:42      | I don't know if there's something else bigger out there.          |
| 01:44      | Yeah, I think it probably is.                                     |
| 01:48      | It's one of those things where, even if a brand new application   |
| 01:52      | was written that was huge, like, I don't know, Logic or Final Cut |
| 01:57      | Pro or something was written in [[SwiftUI]],                          |
| 01:59      | those are bad examples because they already exist.                |
| 02:03      | Even if something brand new was written in it,                    |
| 02:05      | it wouldn't be the same because OmniGroup had to deal with,       |
| 02:08      | here are all the features that already exist in our app.          |
| 02:10      | And we know our customers use them.                               |
| 02:12      | So we have to keep the features.                                  |
| 02:14      | We have to keep things familiar.                                  |
| 02:17      | But we also have to make everything work.                         |
| 02:20      | And I know that they definitely ran into some issues              |
| 02:22      | at various points.                                                |
| 02:23      | And I'm sure they had to file some bug reports with Apple         |
| 02:26      | to try and get some things fixed in [[SwiftUI]]                       |
| 02:31      | or try and work around it.                                        |
| 02:33      | But I feel like they've done a really good job.                   |
| 02:34      | And it shows with the universal unified UI                        |
| 02:37      | that you get across all the devices now.                          |
| 02:39      | So it's got the [[SwiftUI]], which gives it the foundation            |
| 02:43      | to work across all Apple platforms going forward.                 |
| 02:47      | So if they want to add a new feature now,                         |
| 02:49      | it's not like implementing it three times for iPhone, iPad,       |
| 02:54      | and Mac, or even Vision Pro going forward.                        |
| 02:57      | Once you make the feature, you get it for free everywhere.        |
| 03:01      | And that's the big benefit of it.                                 |
| 03:03      | But it was a big job getting that out.                            |
| 03:06      | But there's also an automation story to this.                     |
| 03:09      | And I want to get into that.                                      |
| 03:11      | But maybe we should just take another minute.                     |
| 03:13      | In addition, OmniFocus4 has got an easier user interface.         |
| 03:17      | And they've added several features.                               |
| 03:20      | But this automation story, to me,                                 |
| 03:22      | is the one that I thought, especially on the automators,          |
| 03:25      | we should talk about.                                             |
| 03:25      | Because this is not a small leap with automation,                 |
| 03:29      | what they've done with all the various platforms.                 |
| 03:33      | No, no.                                                           |
| 03:34      | And just by starting with some things.                            |
| 03:37      | So they've done some things where they've just increased          |
| 03:42      | and improved what was already there.                              |
| 03:44      | So for example, keyboard support on iPad and also iPhone.         |
| 03:50      | There was already keyboard support, good keyboard support,        |
| 03:52      | in OmniFocus3 on the iPad.                                        |
| 03:53      | But now there's full keyboard navigation support,                 |
| 03:56      | which means that you can jump between elements and areas          |
| 04:01      | of OmniFocus without reaching for a trackpad                      |
| 04:04      | or reaching to touch the screen.                                  |
| 04:06      | And things like that really do make a difference.                 |
| 04:08      | And you might be thinking, that's not an automation feature.      |
| 04:10      | To me, that is an automation feature.                             |
| 04:12      | Because for me, the best automation                               |
| 04:14      | is jumping back and forth really quickly                          |
| 04:16      | between the things that I need as fast as I can.                  |
| 04:20      | And so there are lots of things like that,                        |
| 04:22      | which has just been significantly improved,                       |
| 04:26      | that makes my life a lot easier.                                  |
| 04:27      | And I really love that about it.                                  |
| 04:29      | Yeah, and to me, the big one is the OmniFocus JavaScript          |
| 04:34      | automation flavour that they've built.                             |
| 04:38      | And this, I want to give a lot of the credit                      |
| 04:41      | to [[Sal Soghoian]], but I know that it was the OmniGroup2.            |
| 04:44      | But they came up with a new automation language in essence.       |
| 04:48      | It's a very, it's a flavour of JavaScript.                         |
| 04:51      | But it really applies to OmniApplications.                        |
| 04:55      | And what the effect is, is you can essentially                    |
| 04:59      | build any feature you want in the app                             |
| 05:01      | if you have JavaScript skills.                                    |
| 05:04      | But they've also pre-populated it.                                |
| 05:07      | I've lost track.                                                  |
| 05:08      | It's over 100 new features that you can add just                  |
| 05:11      | by implementing one of these JavaScript implementations.          |
| 05:14      | And the beauty of it is it doesn't just work on Mac.              |
| 05:18      | It works on all platforms.                                        |
| 05:20      | And so you add a new feature, and the feature                     |
| 05:23      | works on iPhone, iPad, and Mac, and hopefully future platforms    |
| 05:28      | as we get to them.                                                |
| 05:30      | And it's just all there.                                          |
| 05:32      | And I don't think I've ever seen this in an application.          |
| 05:35      | I mean, we've always had [[AppleScript]] that gave you                |
| 05:38      | the ability to do certain things.                                 |
| 05:39      | But this is like next level.                                      |
| 05:42      | Yes.                                                              |
| 05:42      | Yeah, I think, so they've added a library, essentially,           |
| 05:46      | where you can, there's four libraries.                            |
| 05:48      | There's [[OmniFocus]], [[OmniOutliner]], [[OmniGraffle]], and [[OmniPlan]].       |
| 05:53      | And they all have, they're sharing a lot of common things.        |
| 05:56      | But then they've all got their own specific things.               |
| 05:59      | So for example, OmniGraffle has got a lot more                    |
| 06:01      | to do with adding images and shapes                               |
| 06:06      | and manipulating those versus OmniFocus, which is about tasks     |
| 06:09      | and OmniOutliner, which is about lines in your outline.           |
| 06:13      | But by adding this, and then they've significantly expanded       |
| 06:17      | this in OmniFocus 4 as well, which is really great.               |
| 06:20      | And we'll have to get to the specifics of it.                     |
| 06:22      | You've just got so much you can do.                               |
| 06:24      | Now, [[Drafts]] has been doing this for a long time.                  |
| 06:28      | But [[Drafts]] is very specifically focused on text.                  |
| 06:30      | And I've done some amazing and weird, wonderful things            |
| 06:33      | in [[Drafts]], some of which I probably                               |
| 06:35      | shouldn't have been using [[Drafts]] for.                             |
| 06:36      | But that's the problem if you give people scripts                 |
| 06:38      | or a scripting language.                                          |
| 06:39      | They will use it for things that you never intended.              |
| 06:41      | So my apologies to Greg Pierce for making his life difficult      |
| 06:44      | with at least one feature, I'm sure.                              |
| 06:46      | But OmniFocus is the only task manager                            |
| 06:50      | that I know of where you've got basically just the ability        |
| 06:54      | to get into your task database and monkey around with it          |
| 06:58      | using scripting that they've provided you with at this level.     |
| 07:03      | You can create a whole bunch of stuff.                            |
| 07:04      | You can have an automated cleanup that's like, hey,               |
| 07:07      | if I've not seen this in a year, delete it.                       |
| 07:10      | I wouldn't recommend that you do that.                            |
| 07:11      | But there's so many possibilities.                                |
| 07:13      | And of course, there's the ability                                |
| 07:15      | to just go onto the Omni Automation website                       |
| 07:18      | and just download a bunch of this stuff                           |
| 07:19      | and play with it without ever writing a line of script            |
| 07:23      | yourself, because you don't have to or a bunch of other people,   |
| 07:26      | including sales ago, and have done it for you.                    |
| 07:29      | Yeah, there's just so much there already.                         |
| 07:32      | Like one of the things I've always worked with with OmniFocus     |
| 07:36      | is defer dates.                                                   |
| 07:37      | Now, I don't try to use them on all my tasks,                     |
| 07:40      | but defer dates can come in really handy,                         |
| 07:42      | depending on what kind of custom setup you're using.              |
| 07:46      | And it's one of the features of OmniFocus                         |
| 07:49      | that makes it the app of choice for me.                           |
| 07:52      | But automating those in the early days was very difficult.        |
| 07:55      | I wrote these really archaic Apple scripts                        |
| 08:00      | that would go through and set it a fur date.                      |
| 08:02      | But it always felt to me kind of like throwing the dice           |
| 08:05      | every time I ran that script.                                     |
| 08:07      | And now, using this new feature, there's already                  |
| 08:12      | a script pre-written for you by one of the Omni people,           |
| 08:15      | a Christian.                                                      |
| 08:16      | It's called, what's this one called, date controls.               |
| 08:21      | And you just go in and you can attach keyboard shortcuts          |
| 08:25      | to anything you want to do, like change the defer date            |
| 08:27      | to next week or change it today or move it forward an hour.       |
| 08:32      | All the ways you'd want to manipulate a defer or a due date       |
| 08:35      | is in here.                                                       |
| 08:36      | And then, using the script, you can set your own custom           |
| 08:40      | keyboard shortcuts for it.                                        |
| 08:42      | And then, if you've gone full nerd                                |
| 08:45      | and you've got yourself a [[Stream Deck]],                            |
| 08:46      | then you can set up a [[Stream Deck]] panel that just                 |
| 08:49      | hits those keyboard shortcuts.                                    |
| 08:51      | And you can have an entirely custom [[OmniFocus]]ed stream           |
| 08:55      | deck board that manages dates for you.                            |
| 08:57      | And this used to be really difficult.                             |
| 09:00      | I know because I was there at the beginning.                      |
| 09:02      | And now, it's just a question of attaching keyboard shortcuts     |
| 09:06      | to a pre-written script and then hooking up the buttons.          |
| 09:09      | Or if you just want to use the keyboard,                          |
| 09:11      | you can do that too.                                              |
| 09:13      | Whereas lately, I've come to using my extended Apple keyboard.    |
| 09:17      | For some reason, I got it out.                                    |
| 09:19      | And that number pad for an automator can be quite useful.         |
| 09:24      | Yeah, definitely.                                                 |
| 09:26      | And it's amazing what trouble an automator can get up             |
| 09:31      | to when you leave them alone, right?                              |
| 09:34      | But there's so many things that you can do.                       |
| 09:37      | One of the things I do personally with Omni-Automation            |
| 09:40      | and other similar things, I don't actually assign keyboard        |
| 09:42      | shortcuts to this stuff.                                          |
| 09:43      | I just have a shortcut using the run Omni-Automation plug-in      |
| 09:50      | action for these things.                                          |
| 09:53      | And then I can just run the shortcut that                         |
| 09:55      | will do that for me, which that works as well.                    |
| 09:58      | And I've gone with that approach because it then                  |
| 10:00      | allows me to have a mini [[Stream Deck]] on the side of my iPad       |
| 10:06      | when I'm doing things on my iPad so I can just                    |
| 10:08      | have shortcuts open on the right-hand side of my iPad             |
| 10:11      | and just have that folder open.                                   |
| 10:15      | And it allows me to do the same sort of thing,                    |
| 10:17      | which is really useful.                                           |
| 10:18      | Obviously, I can run it through Omni-Focus directly,              |
| 10:20      | but this way I have a similar approach on everything.             |
| 10:25      | But yeah, it's really great that we have these options.           |
| 10:28      | And there's so many sensible examples                             |
| 10:31      | like creating packing lists for a trip                            |
| 10:33      | or clearing tags from your selected projects                      |
| 10:36      | or selected tasks or importing tags from a file.                  |
| 10:40      | So if you've gone off on maybe like a Mike Schmidt-style          |
| 10:43      | personal retreat, and one of the things that you came up          |
| 10:46      | with was a list of tags that you think                            |
| 10:48      | that you should be using, and you just type all of that up,       |
| 10:51      | you can just import all of those and bam, done.                   |
| 10:55      | It's there's so many things that you can tell                     |
| 10:59      | have come from user requests here that wouldn't necessarily       |
| 11:02      | make sense directly in the application                            |
| 11:04      | because it's a little bit too specific,                           |
| 11:06      | like an Eisenhower matrix using tags, where                       |
| 11:09      | you've got urgent and important and not urgent,                   |
| 11:11      | not important, and just figuring out all of that.                 |
| 11:15      | That's not something that should necessarily be built             |
| 11:17      | into the app because this is Omni-Focus,                          |
| 11:19      | it's not an Eisenhower matrix task manager.                       |
| 11:21      | But it's something that makes sense for a lot of people           |
| 11:25      | and somebody creates its script and it's available                |
| 11:27      | to download and give it a play if that's something you want.      |
| 11:29      | And I think that that's what makes it work so well                |
| 11:32      | for me at least in that if I temporarily need                     |
| 11:35      | to switch things to using an Eisenhower matrix style approach,    |
| 11:38      | I can just use a plugin for that for a while                      |
| 11:41      | and bam, done, very simple, very easy.                            |
| 11:43      | And if I then don't need it,                                      |
| 11:45      | then I can just delete the plugin and it's gone.                  |
| 11:48      | And yeah, that makes it so much easier.                           |
| 11:51      | You can do a combo of you where you've got                        |
| 11:53      | multiple windows open, you drag things between the windows        |
| 11:56      | and stuff like that, it all makes sense to have                   |
| 12:01      | but not necessarily directly in the application.                  |
| 12:04      | What are some of your favourite features with version four?        |
| 12:07      | Oh, I mean, I think just starting with the unified UI,            |
| 12:12      | that's definitely one of the big things for me.                   |
| 12:17      | But I think it's actually the fluid outline.                      |
| 12:21      | So I did use the fluid outline                                    |
| 12:22      | when I first started using OmniFocus with version two.            |
| 12:25      | And then at some point I ended up switching                       |
| 12:28      | to the column view where you've got your due date                 |
| 12:31      | in this column and your deferred date in that column              |
| 12:33      | and your project in that column.                                  |
| 12:34      | And that just worked well for me for a long time.                 |
| 12:38      | But when they released OmniFocus four                             |
| 12:40      | with the new fluid design                                         |
| 12:42      | and the fact that you can customize it                            |
| 12:43      | in different perspectives,                                        |
| 12:45      | that made things way better for me.                               |
| 12:47      | All right, so fluid outline for me, agreed.                       |
| 12:50      | And one of the really nice benefits of this                       |
| 12:53      | is you can now really customize what shows up in it.              |
| 12:56      | Like I said earlier, I like defer dates                           |
| 13:00      | and now I can change them without going to the inspector.         |
| 13:02      | That's really kind of a form of automation                        |
| 13:04      | because it's just so much faster.                                 |
| 13:06      | In fact, earlier when we were talking about the scripts           |
| 13:08      | I use on the Mac, I don't use them on the mobile devices.         |
| 13:12      | And the reason is because with fluid outline,                     |
| 13:14      | I don't really need them.                                         |
| 13:15      | I can just tap over my finger and I'm off to the races.           |
| 13:18      | Yeah, yeah.                                                       |
| 13:19      | And I think that that for me really is the big feature.           |
| 13:23      | It's not an automation feature per se,                            |
| 13:25      | but again, better UI is or an easier to use UI                    |
| 13:28      | is a great automation feature.                                    |
| 13:30      | Now, if I'm in any view, I can just tap on a task                 |
| 13:33      | and immediately edit any of the fields on it that show up.        |
| 13:36      | And I've customized what fields show up.                          |
| 13:38      | And in different views, as I mentioned before,                    |
| 13:40      | you know, different perspectives                                  |
| 13:42      | have different fields available.                                  |
| 13:44      | So I tap on the I at the top on iOS                               |
| 13:46      | or click on it on Mac OS.                                         |
| 13:49      | And then I can edit the layout                                    |
| 13:53      | so that I see things the way I want to see them.                  |
| 13:56      | I can just turn on a custom row layout                            |
| 13:58      | and then I can change it to have, for example,                    |
| 14:00      | completion date show, which makes perfect sense.                  |
| 14:02      | In the perspectives that I've created for review,                 |
| 14:06      | but not in any of the other perspectives                          |
| 14:07      | because they don't have completion dates                          |
| 14:09      | because usually I don't see the completed tasks,                  |
| 14:11      | you know, and I can customize                                     |
| 14:12      | whether or not I'm previewing my notes                            |
| 14:14      | and stuff like that.                                              |
| 14:14      | And it all makes, you know, it's such a huge difference           |
| 14:17      | when you are trying to, you know, get stuff done.                 |
| 14:22      | And that is what automation is about, right?                      |
| 14:24      | Actually getting the stuff done.                                  |
| 14:25      | And for me, you know, it's become a lot easier                    |
| 14:27      | with OmniFocus 4.                                                 |
| 14:29      | Well, Rose, let's get over to shortcut support                    |
| 14:33      | with OmniFocus because that's a big part                          |
| 14:36      | of the automation support                                         |
| 14:37      | and it has changed with OmniFocus 4.                              |
| 14:39      | Yeah, and I mean, it's changed,                                   |
| 14:41      | but it's not necessarily changed in a way                         |
| 14:43      | that most people would necessarily see.                           |
| 14:46      | You know, there's a lot of the same                               |
| 14:49      | shortcuts actions are there.                                      |
| 14:50      | You know, there's something that came late                        |
| 14:52      | to OmniFocus 3, you know, after OmniAutomation came out           |
| 14:55      | was running OmniAutomation plugins and scripts                    |
| 14:58      | as shortcuts actions.                                             |
| 15:01      | And I'm just going to stop for a moment                           |
| 15:02      | to clarify the difference between a plugin and a script.          |
| 15:05      | A plugin is an OmniAutomation, you know, script                   |
| 15:08      | that you have installed in OmniFocus.                             |
| 15:10      | It's in one of the folders that you've set to be linked.          |
| 15:13      | And an OmniAutomation script,                                     |
| 15:15      | if you use that in a shortcut section,                            |
| 15:17      | then you have your whole script text                              |
| 15:19      | in the shortcut section.                                          |
| 15:20      | So it's not actually in OmniFocus.                                |
| 15:24      | And this for me actually is a really useful                       |
| 15:26      | little automation tool.                                           |
| 15:28      | And the reason for that is very simple.                           |
| 15:30      | There are some scripts that I want to have in OmniFocus           |
| 15:34      | and I just want to be able to run them at any time,               |
| 15:36      | regardless of what device I'm on, et cetera.                      |
| 15:38      | There are other scripts that I have around for, you know,         |
| 15:42      | sometimes just in case days or, you know,                         |
| 15:46      | I use these on a quarterly basis                                  |
| 15:50      | as part of that kind of review.                                   |
| 15:52      | So I want to save them,                                           |
| 15:53      | but I don't need that appearing in my face every day.             |
| 15:56      | And so for those, I've put those into shortcuts                   |
| 15:59      | and I'm using the Omni,                                           |
| 16:01      | run OmniAutomation script actions for those,                      |
| 16:04      | which is really useful.                                           |
| 16:06      | The big thing that's happened with OmniFocus 4                    |
| 16:09      | is that you didn't need to go and edit all your shortcuts         |
| 16:12      | that were using OmniFocus automation                              |
| 16:14      | or OmniFocus shortcuts actions in shortcuts.                      |
| 16:17      | If you installed OmniFocus 4                                      |
| 16:19      | and you logged in and got everything, you know,                   |
| 16:21      | syncing and so on,                                                |
| 16:22      | then the OmniFocus 4 actions                                      |
| 16:23      | just magically replaced the OmniFocus 3 actions.                  |
| 16:27      | And that was it.                                                  |
| 16:28      | Like you didn't have to go and manually replace them              |
| 16:30      | or say, okay, if it's on this iPad                                |
| 16:32      | because I haven't updated that iPad yet, it just works.           |
| 16:36      | And that for me is like, wow, you know, like, you know,           |
| 16:39      | it's a feature that Apple and the shortcuts team added            |
| 16:43      | a couple of iOS's ago,                                            |
| 16:44      | but we haven't really seen it appear in many places.              |
| 16:47      | The only place I've really seen it happen before                  |
| 16:50      | was in things where things,                                       |
| 16:51      | because they have separate iPhone and iPad apps                   |
| 16:54      | and a separate Mac app, you know, you had to say,                 |
| 16:57      | you know, if I'm on a Mac, use this action.                       |
| 16:59      | If I'm on an iPad, use that action.                               |
| 17:00      | If I'm on an iPhone, use this action.                             |
| 17:03      | But OmniFocus is, you know,                                       |
| 17:05      | one of the first apps that I'm aware of                           |
| 17:06      | that has actually used, you know,                                 |
| 17:09      | this feature that's available                                     |
| 17:10      | to just give you a seamless shortcuts upgrade.                    |
| 17:13      | And that was greatly appreciated by me                            |
| 17:16      | because I had one test device running                             |
| 17:18      | on OmniFocus 3 for a bunch of stuff.                              |
| 17:20      | And then most of the things were running OmniFocus 4.             |
| 17:23      | And the fact that my shortcuts just worked                        |
| 17:24      | on all the devices, that was really appreciated.                  |
| 17:28      | And, you know, I've spoken to lots of people                      |
| 17:30      | who've upgraded and they were like, yeah,                         |
| 17:32      | that all my shortcuts stuff is just working.                      |
| 17:33      | I expected to have to let go and rewrite everything               |
| 17:35      | and find a bunch of broken stuff, but I didn't.                   |
| 17:38      | So that to me is, you know, my favourite feature.                  |
| 17:41      | Is that because of [[SwiftUI]] that it's working so well,            |
| 17:44      | or did they do something else, you think?                         |
| 17:46      | No, so Apple explicitly added something                           |
| 17:49      | where if you've got two apps by the same app developer            |
| 17:53      | and their shortcuts, the shortcuts action                         |
| 17:55      | is using the same signature, then it is the same action.          |
| 17:59      | Like, you know, it's not just the signature,                      |
| 18:01      | it also has to have the same parameters                           |
| 18:03      | and, you know, outputs and things like that.                      |
| 18:05      | But basically, if you have the same shortcuts action              |
| 18:09      | in this application and in that application, you know,            |
| 18:12      | and that application is perhaps intended to be an update for      |
| 18:16      | or a bigger version of the other one, then, you know,             |
| 18:21      | it's just the same shortcut action                                |
| 18:22      | and it will just run that one.                                    |
| 18:24      | So if you've still got one device running OmniFocus 3,            |
| 18:27      | then those shortcut actions will just keep working,               |
| 18:29      | even though everything else is using OmniFocus 4.                 |
| 18:32      | One of my favourite things to do                                   |
| 18:33      | is go over to omni-automation.com.                                |
| 18:36      | And I believe Sal is the only person writing those,               |
| 18:39      | I'm not sure, but there is,                                       |
| 18:43      | there's a couple of things going on over there.                   |
| 18:45      | First of all, he's added a ton of features                        |
| 18:48      | through this new automation JavaScript scheme.                    |
| 18:51      | And it's kind of fun to just go feature shopping.                 |
| 18:53      | Like, you go in there and you download an automation              |
| 18:57      | and just add a feature to OmniFocus                               |
| 19:00      | and it scratches an itch for you.                                 |
| 19:02      | Like I talked earlier about setting dates,                        |
| 19:04      | but there's so many.                                              |
| 19:05      | Like I said, there's over a hundred here.                         |
| 19:07      | Are there any rows that you are particularly excited about        |
| 19:10      | that people can just go download?                                 |
| 19:12      | Well, I mean, I wrote a few of the Omni-automation scripts there. |
| 19:16      | Sal asked very nicely.                                            |
| 19:17      | Yeah, Sal asked very nicely                                       |
| 19:19      | if he could include them on the site,                             |
| 19:21      | which of course I said yes.                                       |
| 19:23      | So there may be some other scripts                                |
| 19:24      | actually included from other folks as well.                       |
| 19:29      | But yeah, for me, it's things like toggling focus                 |
| 19:33      | for folders and stuff like that.                                  |
| 19:36      | So I have certain folders, nested folders,                        |
| 19:40      | which you believe it, that have got                               |
| 19:43      | certain groups of things in.                                      |
| 19:44      | And so when I'm podcasting, I want certain things focused.        |
| 19:49      | And when I am doing my day job, I want other things focused.      |
| 19:54      | And so I actually modified the toggle focus for folders one       |
| 19:58      | because focus also works on iOS now.                              |
| 20:00      | And that's something that took a while to get there.              |
| 20:04      | But the fact that it is here is great.                            |
| 20:07      | And I love that.                                                  |
| 20:09      | So there's so many things that just sort of they've               |
| 20:13      | turned the corner where stuff was difficult for a while.          |
| 20:18      | And so that was just a legacy of people.                          |
| 20:22      | Nobody imagined that the iPad was                                 |
| 20:24      | going to become an actual productivity device                     |
| 20:27      | for a lot of people.                                              |
| 20:28      | And so Omni-Focus for iPad was good,                              |
| 20:31      | but it didn't necessarily have these features.                    |
| 20:33      | Because when they wrote it the first time around,                 |
| 20:36      | they didn't know that that's something that was going to be       |
| 20:38      | wanted, and sometimes you can program yourself into a corner.     |
| 20:41      | I say this as somebody whose day job is often                     |
| 20:44      | dealing with the times that we've programmed ourselves            |
| 20:46      | into a corner and having to fix that.                             |
| 20:49      | It can be a lot of work to just, oh, add this feature             |
| 20:51      | that you already have on another platform.                        |
| 20:54      | Maybe not so much.                                                |
| 20:55      | But yeah, there's just so many useful things.                     |
| 20:59      | And I've got a whole bunch of things                              |
| 21:00      | where I have something that will automatically just               |
| 21:03      | clear out a bunch of stuff that gets added to my inbox.           |
| 21:06      | Because the way that you add a task through the share sheet       |
| 21:10      | now to Omni-Focus, that's changed, actually.                      |
| 21:13      | That's changed a lot in Omni-Focus 4.                             |
| 21:16      | Previously, it would pop up something                             |
| 21:17      | and you basically just have the title of the task in a note.      |
| 21:20      | And that was it.                                                  |
| 21:20      | And that was all you could do with it.                            |
| 21:22      | And now it pops open whatever your default view in Omni-Focus     |
| 21:27      | is for a task.                                                    |
| 21:29      | So in my case, that shows me the title.                           |
| 21:32      | It shows me a little flag next to it.                             |
| 21:34      | Projects or the project tags, the due date, the repeat date,      |
| 21:38      | any repeat, and then notes.                                       |
| 21:40      | And then also, there's the option to add an attachment            |
| 21:43      | whenever I share something.                                       |
| 21:44      | And this is really useful for me because when I add things,       |
| 21:48      | if I am going shopping and I check out the store online           |
| 21:51      | beforehand, I will just share a bunch of those links              |
| 21:54      | into Omni-Focus.                                                  |
| 21:57      | And then I have my Omni-Automation script, which                  |
| 22:00      | goes through and it looks at the URL in the note, actually.       |
| 22:04      | And if the note contains, for example,                            |
| 22:07      | IKEA.co.uk or IKEA.com.uk, then it will add the IKEA tag          |
| 22:15      | and move it to my shopping project for me.                        |
| 22:17      | And this is the sort of thing that I                              |
| 22:20      | was able to do in Omni-Focus 3, but it has just                   |
| 22:23      | got easier to do in Omni-Focus 4 with the added features          |
| 22:26      | because now I can also reformat that note to be rich text.        |
| 22:32      | And so I can hide the URL itself and just have                    |
| 22:36      | the name of the item in there and things like that, which         |
| 22:40      | is just, it's the sort of thing that makes my life a lot easier   |
| 22:44      | and more pleasant when I am just trying to get through,           |
| 22:48      | for example, IKEA really quickly and just get everything done.    |
| 22:52      | Yeah, like some of the things that I like in this list,           |
| 22:55      | and if you go to Omni-Automation,                                 |
| 22:57      | they've got a page that gives you                                 |
| 22:58      | a list of all the plugins that exist that you can download.       |
| 23:02      | There's a lot of tag management.                                  |
| 23:04      | Like if you deal with tags or want to deal more with tags         |
| 23:06      | and automate that, I feel like that's                             |
| 23:09      | one of the bigger topics here where they've got things going on.  |
| 23:12      | They've come in here called create a list for trip,               |
| 23:15      | but I'm guessing that might be one that you donated               |
| 23:17      | because I know you've done a lot of stuff on that.                |
| 23:19      | That one actually wasn't one of mine.                             |
| 23:21      | I believe that was one of Cell's first sort of examples           |
| 23:24      | of here's something you can do,                                   |
| 23:25      | because having a template project that you recreate               |
| 23:28      | on a regular basis is something that a lot of people want.        |
| 23:33      | I personally do all of my packing lists in [[Drafts]]                |
| 23:37      | just because that ends up working better for me,                  |
| 23:39      | but I use Omni-Automation to create a travel project              |
| 23:43      | in Omni-Focus and it has a task called pack for trip              |
| 23:47      | and that links to the [[Drafts]] note that I create                   |
| 23:49      | with all the packing information in it.                           |
| 23:52      | But it's a really great example of what you can do                |
| 23:54      | and it's something that somebody could edit                       |
| 23:56      | without necessarily needing to know much about scripting.         |
| 23:59      | You'll need to make sure that you quote everything                |
| 24:01      | that you want in your example project                             |
| 24:05      | or your template project, but that's about it.                    |
| 24:09      | Yeah, I did some like where I made requests                       |
| 24:13      | and Sal made tags.                                                |
| 24:14      | So I didn't write them, but I had a role                          |
| 24:16      | like there's a link back task where it creates a new task         |
| 24:20      | and then puts a link back to it.                                  |
| 24:22      | That's when I had specifically requested                          |
| 24:24      | and I like the idea of being able to link back                    |
| 24:27      | to my tasks easily and this does it.                              |
| 24:29      | But the just really nice work for Omni-Group,                     |
| 24:34      | getting this out, putting together this structure                 |
| 24:36      | to allow people like Rose and Sal                                 |
| 24:38      | to create all these additional features.                          |
| 24:40      | And you too, dear listener,                                       |
| 24:41      | if you want to put some effort into it,                           |
| 24:44      | JavaScript's not that hard.                                       |
| 24:46      | You can usually kind of finagle your way through it,              |
| 24:49      | but I would also recommend writing into the Omni-Group            |
| 24:52      | if there's one you'd like.                                        |
| 24:53      | A lot of times they're always looking                             |
| 24:54      | for subjects to write new ones on.                                |
| 24:57      | Yes, yeah, the Omni [[Slack]] channel for users                       |
| 25:01      | is a really nice place to hang out.                               |
| 25:03      | There is a specific automation channel in there                   |
| 25:05      | where Sal's hanging out.                                          |
| 25:06      | And yeah, if people post requests,                                |
| 25:08      | then often, like they'll say,                                     |
| 25:10      | I'm trying to do this with an automation script.                  |
| 25:13      | How do I do it?                                                   |
| 25:14      | There'll be several people trying to help with the answer         |
| 25:16      | and sometimes Sal will just swoop in and be like,                 |
| 25:19      | here's the answer for you, I just wrote it                        |
| 25:21      | because I was bored or something.                                 |
| 25:25      | But there's people asking for things with OmniPlan                |
| 25:28      | and OmniGraphil and OmniOutliner too.                             |
| 25:30      | Obviously, OmniFocus, that's the nerd love one.                   |
| 25:35      | So that's the one where people get really excited.                |
| 25:38      | But there's examples in there                                     |
| 25:40      | for converting spreadsheets into markdown tables                  |
| 25:45      | so that you can paste it into [[Obsidian]] or into OmniFocus.         |
| 25:50      | And that is the sort of thing where it's,                         |
| 25:52      | it's a very niche use case.                                       |
| 25:54      | Converting a spreadsheet to a markdown table                      |
| 25:57      | to paste into a specific applications                             |
| 25:59      | is something that not everybody's going to want to do             |
| 26:01      | or need to do.                                                    |
| 26:02      | But if you want that, then there's a plug in for it.              |
| 26:06      | So yeah, yeah, I love the Omni Automation.                        |
| 26:09      | Omni [[Slack]] channel, Omni Group [[Slack]] channel                      |
| 26:12      | for automation, it's a really lovely place                        |
| 26:14      | to just get ideas.                                                |
| 26:16      | Alright, so while we're talking about OmniFocus Automation,       |
| 26:20      | I think we need to go to a few more topics.                       |
| 26:23      | One of them is something that grew out of our show.               |
| 26:26      | I complained on the show, I don't know,                           |
| 26:28      | about six months ago that, you know, the plug in,                 |
| 26:31      | there was an [[Alfred]] plug in that allowed you to automate,         |
| 26:34      | you know, getting to a specific project or folder                 |
| 26:37      | and OmniFocus very easily and it deprecated                       |
| 26:39      | and it just seemed like the guy stopped working on it.            |
| 26:42      | And then mysteriously right after Auto Automator,                 |
| 26:45      | which is the internet pseudonym of Sal,                           |
| 26:48      | submitted to the [[Alfred]] people,                                   |
| 26:51      | a plug in called OmniFocus Collection.                            |
| 26:54      | So if you're using OmniFocus, you can install that.               |
| 26:57      | I love it, I use it all the time                                  |
| 26:59      | and it allows me once again to navigate                           |
| 27:01      | into my OmniFocus database with the minimal effort.               |
| 27:05      | Yeah, and that is just something that, you know,                  |
| 27:08      | makes lives a lot easier and not only that,                       |
| 27:11      | but this is also a great way to see some of the ways              |
| 27:16      | that you can use JavaScript with OmniFocus as well,               |
| 27:21      | because there's JavaScript in the workflow.                       |
| 27:23      | If you download it, then you can actually, you know,              |
| 27:25      | edit it and play with it.                                         |
| 27:27      | It's not, you know, just compiled in a way                        |
| 27:29      | that is just like an application that you install.                |
| 27:31      | You can actually look at it and play with it                      |
| 27:33      | and change things if you want to,                                 |
| 27:34      | which is very, very useful and allows you to get as nerdy         |
| 27:38      | as you might like with this.                                      |
| 27:40      | Yeah, and then also, I guess we should check in,                  |
| 27:44      | how are we doing a project and task automation these days?        |
| 27:49      | Like what are you doing                                           |
| 27:51      | when you add a new project on OmniFocus?                          |
| 27:53      | Are you automating it and if so, how?                             |
| 27:56      | Well, it depends on what I'm adding.                              |
| 27:58      | So I have, I'm gonna start with my travel one                     |
| 28:02      | because I feel like this is one that people will just get         |
| 28:06      | without me having to explain too much background.                 |
| 28:08      | But with travel, whenever I add a new trip,                       |
| 28:11      | so when I add a new trip,                                         |
| 28:12      | it usually starts by me adding the trip in Tripit,                |
| 28:16      | which is an online service I use for trip planning                |
| 28:19      | and so on, and you can just forward the emails.                   |
| 28:20      | It will magically just read everything, parse it out              |
| 28:23      | and shove it into a lovely digital itinerary for you.             |
| 28:26      | But Tripit also has a calendar, which I'm subscribed to.          |
| 28:28      | So I have, believe it or not,                                     |
| 28:30      | a political automation server on my iPhone                        |
| 28:32      | and it just sits there and it checks,                             |
| 28:35      | I think it's once a day or so,                                    |
| 28:38      | it checks on this calendar to see                                 |
| 28:39      | if anything new has been added to this.                           |
| 28:42      | And if it has, then it goes off into OmniFocus                    |
| 28:45      | and it adds this new trip as a project to OmniFocus               |
| 28:50      | and it'll put in the date of the trip                             |
| 28:53      | followed by the name of the trip                                  |
| 28:56      | because that's information that it can get out                    |
| 28:59      | of the calendar very easily.                                      |
| 29:01      | And then it will just create a couple of tasks                    |
| 29:04      | in there for me.                                                  |
| 29:05      | It'll create, create a packing list,                              |
| 29:08      | pack for this trip.                                               |
| 29:10      | And then it usually creates some book travel,                     |
| 29:14      | book accommodation tasks and so on as well.                       |
| 29:17      | But when it creates the create packing list tasks                 |
| 29:20      | because I'm a weird nerd, I love being a proper nerd              |
| 29:24      | in this case, it also hops off into [[Drafts]]                       |
| 29:27      | and it creates my packing list.                                   |
| 29:30      | And in the packing list,                                          |
| 29:31      | it puts a link back to the OmniFocus project for me.              |
| 29:35      | And then it gets a link to that draft.                            |
| 29:36      | And so in the create packing list and pack actions,               |
| 29:39      | in the note, there is a link that takes me                        |
| 29:41      | to my actual packing list in [[Drafts]]                              |
| 29:44      | so that I can see what it is that I need to pack.                 |
| 29:47      | And that for me is one of the very simple things                  |
| 29:51      | that I've automated.                                              |
| 29:53      | I say simple, it only adds a couple of tasks                      |
| 29:56      | and it only adds a single empty draft.                            |
| 30:00      | It doesn't, the draft has just got the name of the trip           |
| 30:02      | and a link back to OmniFocus in there.                            |
| 30:03      | And the task, the tag of packing.                                 |
| 30:06      | But it makes my life a lot easier                                 |
| 30:09      | for the things that I need it for that.                           |
| 30:12      | So yeah, it means I never open OmniFocus                          |
| 30:15      | and go and look in the travel thing and go,                       |
| 30:18      | huh, this trip's not there.                                       |
| 30:20      | Why is that?                                                      |
| 30:21      | I can also run that shortcut manually if I need to.               |
| 30:24      | But if I'm running it once a day,                                 |
| 30:25      | usually works out just fine for me.                               |
| 30:28      | Okay, so what I do is I like to run all projects                  |
| 30:33      | through OmniFocus and I've gone up and down on this,              |
| 30:35      | like some of the stuff, because I use [[Notion]]                      |
| 30:38      | and [[Obsidian]] as well, depending on what I'm doing.                |
| 30:41      | It's complicated, but now I'm working with someone                |
| 30:44      | to help on some of the backend stuff.                             |
| 30:46      | I need to have a collaborative place,                             |
| 30:48      | but I still want my space where I know all my projects.           |
| 30:51      | And so I set up a new project                                     |
| 30:53      | for basically every deliverable I make,                           |
| 30:56      | like this episode is a project that OmniFocus for me.             |
| 31:01      | And so what I do for that,                                        |
| 31:02      | and I've looked at different ways to create those,                |
| 31:05      | Caitlin Solsky made the nice template automation,                 |
| 31:09      | and there's a couple other ways to automate it.                   |
| 31:11      | But to me, it always comes back to shortcuts                      |
| 31:14      | with the task paper integration.                                  |
| 31:16      | You just create a project,                                        |
| 31:19      | you export it from OmniFocus's task paper.                        |
| 31:22      | And then with shortcuts, it's very easily                         |
| 31:24      | to grab some variables, like for a podcast,                       |
| 31:28      | it would be what day you're publishing,                           |
| 31:29      | what day you're recording.                                        |
| 31:30      | And then you generate tasks all related to that,                  |
| 31:33      | like getting the ads done,                                        |
| 31:35      | getting the show prepped and all that.                            |
| 31:37      | So I run a script in shortcuts                                    |
| 31:40      | that runs a task paper automation,                                |
| 31:42      | uses the variables I collect in shortcuts,                        |
| 31:45      | and then it drops it into a folder in OmniFocus.                  |
| 31:47      | In this case, it would be the automators episodes folder.         |
| 31:51      | And then the last thing I do is I just open the folder            |
| 31:54      | using a link to the folder,                                       |
| 31:56      | because you can do that in OmniFocus,                             |
| 31:57      | you can link to anything.                                         |
| 31:58      | So I just open a link directly to that folder                     |
| 32:01      | to see that everything landed right                               |
| 32:02      | and I can make any adjustments if needed.                         |
| 32:05      | And then all that stuff kind of feeds into a view,                |
| 32:08      | a perspective on OmniFocus that I call active projects.           |
| 32:11      | And so I can just click one button in OmniFocus                   |
| 32:14      | and see all the active projects I have in there                   |
| 32:18      | to get rolling.                                                   |
| 32:20      | Yeah, that's what I end up doing for a lot of projects.           |
| 32:24      | I have, because of the way that my day job works,                 |
| 32:29      | I don't tend to need to do project management there               |
| 32:34      | in general, that is something that is managed in a system         |
| 32:38      | that I don't really have a lot of control over,                   |
| 32:40      | but I'm fine with it working the way it works.                    |
| 32:43      | It works for me and it works for work as well,                    |
| 32:45      | because sometimes the automation solution                         |
| 32:47      | is that you just have to do whatever needs to be done             |
| 32:52      | with the other people that are involved.                          |
| 32:55      | But for a lot of other things,                                    |
| 32:58      | I just create ad hoc projects based on a template                 |
| 33:04      | which is task paper based in shortcuts.                           |
| 33:07      | And shortcuts can pop up a menu or a list                         |
| 33:10      | and ask me to choose if it's a menu, it'll be this or that.       |
| 33:14      | If it's a list, it could be this, this and this.                  |
| 33:16      | I tend actually to use dictionaries rather than lists,            |
| 33:20      | because then I can show myself a pretty name for something,       |
| 33:23      | but give myself the 17 tasks                                      |
| 33:26      | or whatever it is associated with that.                           |
| 33:28      | And yeah, for me, the other thing                                 |
| 33:31      | that I'm doing automation-wise related to projects,               |
| 33:34      | but not so specifically project creation in OmniFocus             |
| 33:38      | is whenever I start recording a podcast,                          |
| 33:40      | I use a bunch to set everything up on my Mac,                     |
| 33:43      | but what the things it does is it opens OmniFocus                 |
| 33:47      | to the perspective for that podcast automatically for me.         |
| 33:51      | So that I just have that available                                |
| 33:53      | and it contains all of the projects,                              |
| 33:55      | including my general for that podcast project,                    |
| 33:59      | which is not related to a specific episode.                       |
| 34:01      | So if there's something I need to catch up on with you,           |
| 34:03      | then I can throw that in there and then I'll see it               |
| 34:05      | because it gets popped open and put in front of my face           |
| 34:08      | when we sit down to start recording.                              |
| 34:11      | So one of my big observations                                     |
| 34:13      | as I look at other task managers                                  |
| 34:15      | was the automation in OmniFocus                                   |
| 34:18      | makes it nearly irresistible to me                                |
| 34:20      | because that's what I want.                                       |
| 34:21      | I don't want my task manager to be a thing                        |
| 34:23      | that I spend a lot of time on.                                    |
| 34:25      | And when you hear us talk about it,                               |
| 34:27      | it may sound like we do,                                          |
| 34:28      | but my point is the fact that we are able to automate             |
| 34:34      | it means that we spend less time in it.                           |
| 34:35      | And I really, despite all the time I put into learning it         |
| 34:40      | and kind of setting it up,                                        |
| 34:41      | my actually daily use of OmniFocus is to a minimum                |
| 34:44      | because most of the stuff is created automatically                |
| 34:47      | and it just works and it shows up for me.                         |
| 34:49      | And it still keeps me on top of things                            |
| 34:51      | without being in the way.                                         |
| 34:53      | And I really like that.                                           |
| 34:55      | Yeah, same here.                                                  |
| 34:56      | I've spent probably theoretically too much time over the years    |
| 35:03      | spent tweaking my setup and adding automations                    |
| 35:07      | to make sure that when this kind of event                         |
| 35:09      | appears on my calendar that I have a preparation list             |
| 35:13      | and OmniFocus for it and stuff like that.                         |
| 35:16      | But at the same time, by investing bits of time here              |
| 35:20      | and there, I haven't had to invest whole chunks of time           |
| 35:23      | at any point.                                                     |
| 35:24      | I've never had to sit down and spend three weeks                  |
| 35:27      | setting up my system.                                             |
| 35:29      | That's not been it.                                               |
| 35:31      | What I've done is I've spent 20 minutes here,                     |
| 35:33      | half an hour there, five minutes here,                            |
| 35:36      | noted down an idea there and so on.                               |
| 35:38      | And over time, my system has become very fluent                   |
| 35:42      | and fluid and easy to use.                                        |
| 35:44      | And that is what I need from my system                            |
| 35:48      | because I often have OmniFocus open in a sliver                   |
| 35:53      | on the edge of my screen just so that I can see                   |
| 35:55      | what's going on if there's a bunch of tasks to be doing.          |
| 35:58      | But at the same time, if I just need to be focusing               |
| 36:01      | on one particular task, that's what I do.                         |
| 36:03      | And that's fine with me.                                          |
| 36:05      | And it works nicely because I don't have to go off                |
| 36:08      | and think, oh, right, yeah, but I need to get                     |
| 36:11      | these six tasks into the system.                                  |
| 36:13      | I've automated getting the vast majority of things                |
| 36:16      | into my system over time in various different ways.               |
| 36:20      | And I've experimented back and forth                              |
| 36:23      | with using things like MailDrop and [[URL Schemes]] and so on.        |
| 36:26      | I should actually note there was a small but potentially,         |
| 36:30      | at least for one person, breaking change                          |
| 36:32      | in the [[URL Schemes]] in OmniFocus 4.                                |
| 36:36      | And that things like opening the project's view on iOS            |
| 36:39      | doesn't work because there is no projects tab on iOS anymore.     |
| 36:43      | There's no specific view that's just your list of projects.       |
| 36:47      | And there's no specific view that's your list of tags             |
| 36:50      | because it's part of the, it's a popover that's just,             |
| 36:56      | okay, to help you quickly open something.                         |
| 36:59      | It's the quick open now.                                          |
| 37:01      | And that may seem like that's a bad change,                       |
| 37:03      | but I have personally found that that quick open feature,         |
| 37:06      | once I trained myself to use it,                                  |
| 37:07      | so I just hit Command O in OmniFocus for open.                    |
| 37:11      | And then I can type the name of a project or tag or anything      |
| 37:14      | and it will just find it and turn it back to me,                  |
| 37:16      | return it to me.                                                  |
| 37:17      | It's kind of like having a mini [[Alfred]] inside of OmniFocus,       |
| 37:21      | but it's there on iOS as well, that huge game changer             |
| 37:25      | because that has just made my life so much easier.                |
| 37:28      | Yeah, well, my congratulations to the Omni Group                  |
| 37:31      | on shipping this monumental [[SwiftUI]] project,                     |
| 37:35      | but also giving us all this great automation.                     |
| 37:39      | I think if you're looking for a task manager                      |
| 37:41      | and want to use your automation shops,                            |
| 37:43      | I don't know that there's anything better out there,              |
| 37:46      | but go check it out and see what you can do.                      |
| 37:50      | We are the Automators.                                            |
| 37:51      | You can find us over at relay.fm slash Automators.                |
| 37:54      | If you want to talk about this, we have a forum,                  |
| 37:58      | just go to talk.automators.fm,                                    |
| 38:00      | you can sign up for it right there.                               |
| 38:02      | On Automators Max,                                                |
| 38:03      | we're going to talk about Vision Pro,                             |
| 38:04      | stick around, otherwise, we'll see you next time.                 |
| 38:07      | Goodbye, folks.                                                   |
