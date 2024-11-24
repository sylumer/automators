---
status: "complete"
fc-date:
  year: 2024
  month: 10
  day: 18
fc-category: "podcast"
podcast: "Automators"
published: 2024-10-18
duration: 3977
formattedduration: "01:06:17"
hosts: ["David Sparks","Rosemary Orchard"]
guests: ["Tim Stringer"]
notetype: "episode"
showpage: "http://relay.fm/automators/166"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators166.mp3"
episode: 166
title: "166: Foundations of Automations with Tim Stringer"
---
![Automators Logo.jpg|200x200](Logo.jpg)

# Synopsis
In this episode, David and Rosemary are joined by Tim Stringer to look at his automations and discuss the core principles of automating.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Tim Stringer]].

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 166 Discussion](https://talk.automators.fm/t/166-foundations-of-automations-with-tim-stringer/18087)

# Sponsors
- [[Notion (Sponsor)|Notion]] Try the powerful, easy-to-use Notion AI today.
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Find the qualified candidates you want to talk to, faster. Post your job for free today.

# Show Notes
- [Keyboard Maestro 11.0.3: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Hazel - Noodlesoft - Simply Useful Software](https://www.noodlesoft.com/)
- [Shortcuts User Guide - Apple Support](https://support.apple.com/en-us/guide/shortcuts/welcome/ios)
- [Hookmark - Links beat searching](https://hookproductivity.com/)
- [Hookmark on Setapp | Link files, web pages, PDFs](https://setapp.com/apps/hookmark)
- [Notion](https://www.notion.so/)
- [Universal Links - Hookmark](https://hookproductivity.com/help/more/universal-links/)
- [Hookmark--Documentation](https://hookproductivity.com/help/general/overview/)
- [Link-friendly Mac Apps - Hookmark](https://hookproductivity.com/what-mac-apps-are-compatible-with-hook-app)
- [Principles That Determine the URL Scheme Returned by `Copy Link` for a Given App - Hookmark](https://hookproductivity.com/help/integration/url-scheme-selection-principles#hookSchemes)
- [OpenIn | Loshadki Apps](https://loshadki.app/openin4/)
- [Arc from The Browser Company](https://arc.net/)
- [Air Traffic Control: Automate Your Link Routing - Arc Help Centre](https://resources.arc.net/hc/en-us/articles/22932014625431-Air-Traffic-Control-Automate-Your-Link-Routing)
- [Choosy: A smarter default browser for macOS](https://choosy.app/)
- [OpenIn on Setapp | Open files and links faster](https://setapp.com/apps/openin)
- [BetterTouchTool | folivora.ai - Great Tools for your Mac!](https://folivora.ai/)
- [Trigger Conditions & Conditional Activation Groups · BetterTouchTool](https://docs.folivora.ai/docs/1400_conditions.html)
- [Control Action Sequence Flow · BetterTouchTool](https://docs.folivora.ai/docs/6a_control_flow_actions.html) - Using ifs, loops, and more.
- [Automate without limits | Zapier](https://zapier.com/)
- [KeyCue using shortcuts made easy](https://ergonis.com/keycue)
- [Alfred](https://alfred.app/)
- [Alfred - Conductor for Keyboard Maestro | ThoughtAsylum](https://www.thoughtasylum.com/alfred/alfred_conductor_for_keyboard_maestro/)
- [PopClip for Mac](https://www.popclip.app/)
- [PopClip on Setapp | Use instant text actions](https://setapp.com/apps/popclip)
- [PopClip Extensions Directory](https://www.popclip.app/extensions/)
- [PopClip - Documentation](https://www.popclip.app/guide/)
- [Snippets - PopClip Developer](https://www.popclip.app/dev/snippets) - Writing a small block of text as a PopClip Extension
- [Activate with a keyboard shortcut - PopClip](https://www.popclip.app/guide/basics#activate-with-a-keyboard-shortcut)
- [OmniFocus Plugin: Templates - Kaitlin Salzke](https://kaitlinsalzke.com/omnifocus-plugins/templates-for-omnifocus/)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Hello, and welcome to Automators, the show where we talk about grabbing your technology,                |
| 00:07      | learning how best you can make the most of it, and getting it to do your bidding for                    |
| 00:10      | you.                                                                                                    |
| 00:11      | I'm Rosemary Orchard, and joined as always by David Sparks.                                             |
| 00:13      | Hey, David, how are you?                                                                                |
| 00:14      | Hey, Rose, how are you today?                                                                           |
| 00:17      | I'm doing all right, David.                                                                             |
| 00:19      | It's been a bit of a slog the last couple of weeks, but I get to talk to you again,                     |
| 00:22      | and that's always exciting.                                                                             |
| 00:23      | It's always fun to talk Automators, and we have a guest today.                                          |
| 00:26      | Welcome to the show, Tim Stringer.                                                                      |
| 00:29      | Thanks very much.                                                                                       |
| 00:30      | It's great to be here.                                                                                  |
| 00:31      | Tim is the gentleman that runs [Learn OmniFocus](https://learnomnifocus.com), among many other things, and always has interesting     |
| 00:38      | automation tales to share.                                                                              |
| 00:40      | I can tell by our outline that we could make this a week-long episode, and that might be                |
| 00:45      | fun.                                                                                                    |
| 00:46      | But Tim, thanks for coming.                                                                             |
| 00:47      | I'm looking forward to digging in on this stuff with you.                                               |
| 00:51      | But before we do, we have a bit of an announcement, don't we, Rose?                                     |
| 00:55      | Yes, we do, David.                                                                                      |
| 00:58      | Do you want to go ahead with this, or do I take point on it?                                            |
| 01:02      | I guess, why don't you start?                                                                           |
| 01:05      | Well, it's been 166 episodes of Automators so far, including this episode, and it's                     |
| 01:13      | been going on for a long time.                                                                          |
| 01:14      | We've been having a lot of fun, but recently it has become a bit too much like hard work,               |
| 01:21      | and there's only so much that automation can do to make that better for everybody, unfortunately.       |
| 01:27      | Yeah.                                                                                                   |
| 01:28      | So, gang, we're retiring the Automators.                                                                |
| 01:30      | I guess, I don't know how to put it.                                                                    |
| 01:32      | The show we've been doing for a long time, Rose and I both love making the show.                        |
| 01:37      | It's a lot of work, though, and both Rose and I have a lot of irons in the fire, and                    |
| 01:42      | we've been having some friendly conversations with each other about how do we get better                |
| 01:46      | at this stuff, and how do we make it more efficient.                                                    |
| 01:50      | We've ultimately decided that between Rose's job and company and other engagements she                  |
| 01:58      | has and between my other podcasts and the things I do, that we had to cut back a bit,                   |
| 02:03      | and we decided to jointly that the Automators would be the one where we do that.                        |
| 02:09      | With a sad heart, and for the first time in my life, I've ever shut down a podcast, we're               |
| 02:14      | going to retire the Automators next month.                                                              |
| 02:17      | Yes.                                                                                                    |
| 02:18      | Yeah.                                                                                                   |
| 02:19      | It's been over six years, which is a pretty long time.                                                  |
| 02:22      | We started in July 2018, David, by throwing out a good couple of episodes because [[Apple]]                 |
| 02:28      | announced [[Shortcuts]], which was a fun way to start the podcast, actually, having to throw                |
| 02:33      | things away and start over again because there was new and exciting stuff.                              |
| 02:37      | It's not that there isn't new and exciting stuff out there.                                             |
| 02:40      | There is plenty of it.                                                                                  |
| 02:42      | It's just that we don't have the time in the bandwidth, which is a real shame.                          |
| 02:45      | There's only so much you can automate in your life to create those, unfortunately.                      |
| 02:49      | Yeah.                                                                                                   |
| 02:50      | As I'm heading into the new year, I can say personally, I really want to focus on quality               |
| 02:54      | or quantity on the things I'm doing, and that required some tough decisions.                            |
| 03:00      | Both of us love making the show.                                                                        |
| 03:03      | If time were unlimited, I think we would, but just looking at my life, I have worked                    |
| 03:09      | every weekend for the last three months, and I felt like I've got to change things                      |
| 03:16      | a little bit to get a little bit more margin.                                                           |
| 03:20      | From my vantage point, I can tell you that we're going to be covering these automator                   |
| 03:24      | topics over on [[Mac Power Users]] more.                                                                    |
| 03:27      | I suspect that a lady named Rosemary Orchard will be showing up on [[Mac Power Users]] on occasion          |
| 03:32      | to talk to us about that stuff.                                                                         |
| 03:34      | I think we can still bring you a lot of the good automators content over on [[Mac Power Users]],             |
| 03:38      | but it really is just a question of bandwidth for both of us.                                    |
| 03:45      | I'll take the head.                                                                                     |
| 03:46      | I first suggested it, but I'll tell you, Rose, when I suggested it, you sounded relieved.                |
| 03:52      | Yeah.                                                                                                   |
| 03:53      | It's one of those things where increasingly I've been having more and more things taking                |
| 03:56      | up all of my time, and it feels like I just don't have time to do everything.                           |
| 04:01      | As we all know, there's only so much you can do if you don't have time for everything.                  |
| 04:05      | It doesn't matter how great your task manager is.                                                       |
| 04:07      | It doesn't matter how great your automation systems are.                                                |
| 04:10      | There are only 24 hours in the day, and believe it or not, it's good to sleep for at least,             |
| 04:15      | say, four to six of those, if not more.                                                                 |
| 04:18      | When you start cutting back on that, then you know you've got problems.                                 |
| 04:21      | Yeah.                                                                                                   |
| 04:22      | It's with a sad heart and a lot of love that we're bringing the Automator's journey to                  |
| 04:27      | an end.                                                                                                 |
| 04:28      | We are going to make some great shows.                                                                  |
| 04:31      | [[EP168 - Final Feedback\|Our final one]] will be releasing, I believe, on November 15th.                                           |
| 04:35      | We'd love for you to write in with thoughts and comments and automation questions.                      |
| 04:40      | The last episode is going to be really focused on audience feedback.                                    |
| 04:43      | That's why we're, one of the reasons why we're announcing this now, so you have time to send            |
| 04:46      | it in.                                                                                                  |
| 04:47      | There's a feedback forum at relay.fm.com/automators.                                              |
| 04:50      | I spoke with our friend, [[Stephen Millard]], and he is going to really button down the                     |
| 04:56      | [Automator's Obsidian Vault](https://github.com/sylumer/automators), so he's not promising it'll be done when we finish a show, but he           |
| 05:05      | really wants to make it really well done.                                                               |
| 05:08      | I talked to him yesterday, he says, you're going to be amazed when you're able to find                  |
| 05:11      | out how many times, David, you have said the word, [[Aqara]].                                              |
| 05:14      | So I thought that was kind of funny.                                                                    |
| 05:16      | But we're going to do it right as we wrap the show up.                                                  |
| 05:21      | We're both sad to shut it down, and I'm sorry I'm just rambling here a bit, but this is                 |
| 05:25      | hard for me.                                                                                            |
| 05:26      | And I'll tell you, as much as I know this is the right move, it was really hard.                        |
| 05:31      | Yes.                                                                                                    |
| 05:32      | It's one of those things where it's always really hard in life to make the right decision,              |
| 05:37      | but at the same time, we don't want to shortchange the listeners.                                       |
| 05:40      | If we just turn up every week and phone it in, and we rely heavily on our guests to                     |
| 05:45      | do all of the work for us, then that's not going to be a good experience for anybody,                   |
| 05:50      | and that's something that we absolutely don't want to do.                                               |
| 05:53      | So that's the news, and please send us your feedback for that final episode.                            |
| 05:59      | Give us some good feedback, and I can't wait to hear what you all have to say.                          |
| 06:04      | And with that, talking about having a guest carry the load for you, Tim Stringer, this                  |
| 06:10      | guy is an automator.                                                                                    |
| 06:11      | Tim, where do we start with this?                                                                       |
| 06:14      | I think maybe we should just talk about your idea of automation key learnings.                          |
| 06:20      | We were talking about that before the show started, and there's a lot of good stuff in                  |
| 06:24      | here that comes up frequently on the show.                                                              |
| 06:28      | What have you learned about automation over the years?                                                  |
| 06:31      | Yeah, definitely.                                                                                       |
| 06:32      | And I guess I don't even know when I started becoming an automator, it goes back to, I                  |
| 06:36      | think, the early days of technology.                                                                    |
| 06:38      | So it was useful for me in preparing for today's episode just to kind of think back and decide          |
| 06:45      | for myself, what is automation?                                                                         |
| 06:47      | How does it help?                                                                                       |
| 06:48      | How does it hinder and things like that?                                                                |
| 06:50      | I think it can be a bit overwhelming at times, especially in the kind of golden age of automation       |
| 06:57      | that we find ourselves in, where there's so many different ways to do things, and so                    |
| 07:03      | many tools, and many of these tools have become more and more capable over the years.                   |
| 07:08      | So that's where I think it's better to take a step back and just look at it more conceptually.          |
| 07:15      | What do all automations have in common?                                                                 |
| 07:18      | And it comes back to basic principles.                                                                  |
| 07:20      | All of them have some sort of a trigger, and there's something that happens in response                 |
| 07:25      | to that trigger.                                                                                        |
| 07:28      | Thinking about what could trigger this automation and what you want to happen before even choosing      |
| 07:33      | the tools, I think can be very useful.                                                                  |
| 07:36      | And then once you're clear on sort of the path you want the automation to follow, then                  |
| 07:41      | the choice of tools becomes a lot easier, and maybe it's several tools combined.                        |
| 07:47      | So I just gave some examples of, as we're preparing in some examples of triggers, that                  |
| 07:52      | could be something that happens off in the internet.                                                    |
| 07:55      | There's an email that arrived, or an event that just ended in [[Google Calendar]], or somebody              |
| 08:00      | booked a session in [[Calendly]], those sorts of things that kind of happen asynchronously.                 |
| 08:07      | I could be sleeping at night, and there's a trigger that happens.                                       |
| 08:11      | I think that's an important point, though, Tim.                                                         |
| 08:13      | I think people who start in automation often think that the trigger is a manual.                        |
| 08:18      | It has to be you pushing a button or doing some action on your computer.                                |
| 08:25      | And when you get to the crossroads of realising, oh, wait a second, I can have it be triggered          |
| 08:31      | by a clock, or I can have it be triggered by something on the internet, then suddenly                   |
| 08:35      | automation takes on a new level of power, because separating yourself from the trigger                  |
| 08:44      | is something that a lot of automators don't figure out right away.                                      |
| 08:48      | Yeah, totally.                                                                                          |
| 08:50      | And an extension of that is device triggers.                                                            |
| 08:53      | So if I'm walking around with my iPhone, and I reach a location, or I connect to a                      |
| 08:58      | different Wi-Fi network, or something like that, those can be very much triggers as well.               |
| 09:03      | And it's not quite the same as the web one, because it does rely on a device being present              |
| 09:08      | in some situation, some state.                                                                          |
| 09:11      | But there's a lot of things that could be very useful to happen in those instances as                   |
| 09:16      | well.                                                                                                   |
| 09:18      | And then I think the third class is the manual triggers, and pressing a keyboard shortcut               |
| 09:23      | or launching a shortcut or pressing a button on my [[Stream Deck]] or something like that.                  |
| 09:28      | Yeah, I would really like to dive a little bit more into the separating of the automations,             |
| 09:34      | so the actual actions that happen from the triggers.                                                    |
| 09:37      | Did you start down this path because you found that you wanted multiple triggers to run the             |
| 09:43      | same series of actions, or was it just a sort of natural separation that happened over time?            |
| 09:49      | I think it was a natural, it's not something I noticed in hindsight, I guess, is the best               |
| 09:54      | way I could put it.                                                                                     |
| 09:56      | Just looking at the various automations, and I've assembled quite a large suite over the                |
| 10:02      | years and keep adding to them.                                                                          |
| 10:04      | But just looking, if I had to kind of classify them, there were sort of specific triggers.              |
| 10:10      | But I think looking at the actions, that can be, that's a whole another level of it.                    |
| 10:15      | There could be a trigger that causes a shortcut to be run, whereas that [[Shortcuts]] could still           |
| 10:22      | be run manually, or there could be multiple circumstances where kind of the engine kicks                |
| 10:27      | into gear, and it could be started, it's kind of like having a remote starter for your car              |
| 10:33      | versus sitting in the driver's seat and pressing the button or turning the key or something             |
| 10:37      | like that.                                                                                              |
| 10:38      | They have the same results, but they're triggered in different ways.                                    |
| 10:42      | Yeah, that makes a lot of sense.                                                                        |
| 10:44      | And I think it was one of those things where for me, it was always very obvious with [[Shortcuts]]          |
| 10:49      | previously before iOS 17, where you could create an automation in [[Shortcuts]], and then                   |
| 10:56      | you could just put all of your actions in there.                                                        |
| 10:58      | And I was always a big advocate for, no, no, no, make a shortcut, and then just put the                 |
| 11:02      | run shortcut action in there.                                                                           |
| 11:03      | And then at iOS 17, they changed it, so you just sort of select your shortcut to run,                   |
| 11:07      | which I feel is a much better experience for a lot of folks as well.                                    |
| 11:11      | Because it means that you can search your [[Shortcuts]] for the thing that contains whatever                |
| 11:16      | that word is, calendar, invite, or whatever, and you'll find it instead of having to look               |
| 11:21      | there and look through your automations and just kind of tap on each one, browse through                |
| 11:25      | the actions and figure out what's going on.                                                             |
| 11:27      | So I'm glad to see that that has indeed worked out for you, because it is one of those things           |
| 11:33      | where sometimes for me, it's very obvious that this is the better approach for me, but                  |
| 11:40      | that doesn't mean it's the better approach for everybody.                                               |
| 11:43      | I was just going to say, having actions that are reusable, I think, is a very helpful way               |
| 11:48      | of looking at it too, so just kind of thinking out this is a sequence of actions that I might           |
| 11:55      | want to happen in various circumstances and not being too caught up on the trigger at                   |
| 12:02      | the same time, knowing that the trigger should trigger something, but not being necessarily             |
| 12:07      | too caught up on the actions, because that might start off as one or two actions, but                   |
| 12:11      | over time, that could be 20 actions, but at least you have something that actually sort                 |
| 12:18      | of spawns at automation.                                                                                |
| 12:19      | Yeah, I really feel strongly that automation doesn't have to be overly complex, and something           |
| 12:27      | I've always tried to focus on in this show and the stuff I talk about with this is that                 |
| 12:32      | you don't need to make a 30-step shortcut.                                                              |
| 12:36      | You may need to occasionally, and as you get better at it, you may want to for one reason               |
| 12:41      | or another, but for most of us, the three to five-step shortcut often is the most effective,            |
| 12:48      | most stable, and just takes you a few minutes to put it together, but then it saves you                 |
| 12:52      | minutes every time you run it, and I think that should be the target when you're getting                |
| 12:56      | started with this stuff.                                                                                |
| 12:58      | Absolutely, yes.                                                                                        |
| 13:00      | It's one of those things where it's always tricky to take those steps back and go, okay,                |
| 13:06      | what is it that I just need to do?                                                                      |
| 13:08      | What is the most difficult part of this automation?                                                     |
| 13:10      | Or going back to something you wrote in the document here, Tim, you've noted that automation            |
| 13:17      | is much about consistency as it is speed.                                                               |
| 13:20      | It's about getting things right instead of necessarily doing things faster, because we                  |
| 13:24      | all know if we rush to try and do things, we'll skip a step or we'll miss something or just             |
| 13:28      | overlook something which actually is really important, and for me, that's one of the reasons            |
| 13:32      | why I love automations, and so for me, that's often the point where I start with my automations.        |
| 13:39      | What is that thing that I need to get right every single time, and I don't know if that's               |
| 13:43      | where you start, Tim, or do you start from a different perspective?                                     |
| 13:47      | I think it's ultimately about automation really needs to take the pressure off.                         |
| 13:53      | It's not earning its keep unless it's making life easier in some case.                                  |
| 13:57      | So there's the ones where I can press a button and have 20 things happen that would normally            |
| 14:03      | take me five minutes or 10 minutes, but I can suddenly do it in a second.                               |
| 14:06      | That's definitely a quality of life enhancement.                                                        |
| 14:10      | And there's the other ones where, let's say, we're forgetting to follow up with clients                 |
| 14:15      | after calls, and I can just have a task automatically appear in my inbox to prompt me to do a follow-up |
| 14:21      | once the session actually ends.                                                                         |
| 14:24      | That's not something that would take me very long to create, but I still have that sort                 |
| 14:28      | of mental load of having to remember to do that thing or to, you know, I'm talking to                   |
| 14:34      | this person and then I have another call soon after.                                                    |
| 14:38      | Maybe I'm going to forget to follow up with them and send some information I promised                   |
| 14:42      | or something along those lines.                                                                         |
| 14:44      | So that's the way they kind of earn their keep, I guess, is to just look at how is this                 |
| 14:50      | improving the quality of my life and work and both for myself and the people I serve                    |
| 14:57      | by extension.                                                                                           |
| 14:59      | That makes a lot of sense, absolutely.                                                                  |
| 15:02      | So, Tim, what is your automation suite these days?                                                      |
| 15:06      | What are the apps that are getting used by you here in 2024 on your various platforms?                  |
| 15:14      | Yeah, sure.                                                                                             |
| 15:16      | It's going to be a fairly extensive list, but I think all of these do kind of cooperate.                |
| 15:22      | They work together.                                                                                     |
| 15:23      | They're kind of Lego pieces that allow me to ultimately build the automations.                          |
| 15:29      | I'd say the core three are [[Keyboard Maestro]], [[Zapier]], and [[Shortcuts]], and all of the other ones,               |
| 15:37      | and I'll throw one like [[Hazel]] in there, for instance, that I almost forget about [[Hazel]].                 |
| 15:42      | I think it's just doing its job in the background, and once it's up and running, I don't even           |
| 15:48      | really have to think about it.                                                                          |
| 15:50      | It's the best app, right, when you don't even think that you forget it exists, but it's                 |
| 15:54      | still working for you.                                                                                  |
| 15:55      | Yeah, those are the best kinds of automations, I think.                                                 |
| 15:59      | One to that point, I think what helps an app kind of get to that stage is just trust in                 |
| 16:05      | both the app itself and my application of the app.                                                      |
| 16:10      | If I create a shortcut or something, but I haven't really thought it through, and I'm                   |
| 16:15      | wondering, is this going to work in all cases, or is this going to let me down, or is this              |
| 16:19      | trigger going to be reliable, then it's almost adding pressure rather than relieving it.                |
| 16:25      | I put a bit of a sort of less as more sort of approach.                                                 |
| 16:31      | I really want to fine-tune an automation, have it be able to prove, think through the                   |
| 16:36      | different sort of edge cases, and then I can treat it like a hazel where it's just doing                |
| 16:42      | its thing, and I don't even have to think about it anymore, it's just kind of running                   |
| 16:46      | in the background.                                                                                      |
| 16:47      | Yeah, so I'd say those are the [[Zapier]] for automating things that happen on the web,                    |
| 16:54      | and it's usually a combination of [[Shortcuts]] and [[Keyboard Maestro]] that takes care of the                 |
| 16:59      | Mac automations, and then over on them, iPhone and iPad, it's pretty much exclusively [[Shortcuts]]         |
| 17:06      | at this point.                                                                                          |
| 17:07      | That makes a lot of sense.                                                                              |
| 17:08      | There are other things that you can use to automate on iOS, as we all know, there's                     |
| 17:13      | great apps like [[Scriptable]] and so on, but at the same time, [[Shortcuts]] is just there,                    |
| 17:17      | it's on every device, it comes pre-installed.                                                           |
| 17:20      | It's really difficult to not consider that the defaults for iOS, and honestly, the fact                 |
| 17:27      | that it now works on the Mac as well, admittedly, not all the actions, that's still pet peeve           |
| 17:33      | of mine, but the fact that it's there means that I've created [[Shortcuts]], and despite the                |
| 17:39      | fact that my muscle memory, whenever I'm, say, for example, preparing iOS today, which                  |
| 17:44      | is a very [[Shortcuts]] heavy preparation system for me, I default to picking up my phone,                  |
| 17:51      | but now what I've done is I've added a little, hey, if device is iPhone, pop up a notification,         |
| 17:59      | would you like to run this on the Mac, just to remind me that I don't have to run it                    |
| 18:03      | on my iPhone, I used to have to, but now those actions that I needed are all available on               |
| 18:08      | the Mac, which is, it's great that you can then bring those over when you need to, but                  |
| 18:13      | of course, you don't necessarily have to if you don't want to.                                          |
| 18:17      | I'll just add to that too.                                                                              |
| 18:18      | I think that [[Shortcuts]] can be seen as a very user-facing technology, that can be the wrapper            |
| 18:24      | that takes [[AppleScript\|AppleScripts]] and [[JavaScript]] and things like that, and just turns it into what               |
| 18:30      | I almost start to think about as an app that I created myself that's leverageing pieces                  |
| 18:35      | of other apps, but it's kind of designed, in many cases, I think, to be interacted                      |
| 18:41      | with at some point, whereas something like [[Keyboard Maestro]] and [[Hazel]] and things like                   |
| 18:46      | that are going to be doing excellent work in the background, but not necessarily getting                |
| 18:51      | seen so much.                                                                                           |
| 18:55      | This episode of The Automators is brought to you by Notion.                                             |
| 18:59      | By the powerful, easy-to-use Notion AI today, just go to Notion.com/Automators.                   |
| 19:06      | There's so much to love about Notion.                                                                   |
| 19:07      | I run the whole MacSparky backend off Notion.                                                          |
| 19:11      | It allows me to keep in touch with my team.                                                             |
| 19:14      | We all know the status of every project.                                                                |
| 19:16      | We have an excellent way to communicate with each other on any questions or issues, and                 |
| 19:20      | now with Notion AI, we've got a whole host of new features we're using on all the content               |
| 19:26      | I create.                                                                                               |
| 19:27      | The new Notion AI is a single AI tool that does it all.                                                 |
| 19:30      | You can search across Notion and other apps, generate docs in your own style, analyse PDFs              |
| 19:35      | and images, and chat with you about anything.                                                           |
| 19:39      | Notion is a perfect place to organise your tasks, track your habits, write beautiful                    |
| 19:43      | docs, and collaborate with your team.                                                                   |
| 19:45      | And the more content you add to Notion, the more Notion AI can personalise its responses                |
| 19:50      | for you.                                                                                                |
| 19:51      | This is what I really like about this idea of Notion AI is that it gets to read your                    |
| 19:55      | content and then use it to help you make your content better.                                           |
| 19:59      | Because unlike generic chatpots, Notion AI already has the context of your work.                        |
| 20:04      | Notion AI is connected to multiple knowledge sources.                                                   |
| 20:07      | It uses AI knowledge from GPT-4 and Claude to chat with you about any topic.                            |
| 20:13      | It can search across thousands of Notion docs in seconds to quickly answer any question.                |
| 20:18      | And with AI connectors now in beta, Notion AI can search across Slack discussions, Google               |
| 20:23      | Docs, Sheets and Slides, and more tools like GitHub and Jira are coming soon.                           |
| 20:28      | As an example, as I'm working on the shortcuts field guide, I put my outline into the Notion            |
| 20:33      | document then I asked Notion AI to check it for me.                                                     |
| 20:37      | Sometimes it comes up with a suggestion or two that I actually end up using in the video.               |
| 20:42      | Notion is used by over half of the Fortune 500 companies, so you'll be in great company.                |
| 20:47      | Try Notion for free when you go to notion.com/automators.                                         |
| 20:51      | It's all lowercase, [N-O-T-I-O-N dot com slash Automators](https://notion.com/automators) to try the powerful, easy to use               |
| 20:57      | Notion AI today.                                                                                        |
| 20:59      | And when you use our link, you're supporting our show.                                                  |
| 21:02      | That link one more time is notion.com/automators and our thanks to Notion for their           |
| 21:07      | support of the Automators and Relay.                                                                    |
| 21:10      | Tim, you have listed as one of your favourite automation apps, [[Hook\|Hookmark]], which is also sometimes         |
| 21:17      | called [[Hook]].                                                                                            |
| 21:19      | It's an application that I think of as a ubiquitous linking utility app.                                |
| 21:25      | I never really thought of it as an automation app, but I kind of see where you're coming.               |
| 21:29      | Tell us about [[Hook\|Hookmark]].                                                                                 |
| 21:31      | Yeah, sure.                                                                                             |
| 21:32      | Yeah, and I have a long history with [[Hook\|Hookmark]], the original developer, Luke Baudouin is based           |
| 21:38      | right here in British Columbia, so definitely got a nice connection geographically with                 |
| 21:43      | him.                                                                                                    |
| 21:44      | And it's one of those apps that I think once people get it, they really get it and they                 |
| 21:50      | wonder how they lived without it.                                                                       |
| 21:52      | But it's a bit of a difficult one to just kind of sell people onto.                                     |
| 21:56      | It's maybe something that they need that they don't realise that they need.                             |
| 22:01      | But fundamentally, [[Hook\|Hookmark]] is about connecting stuff together, connecting a document to a              |
| 22:07      | file or a folder to another document to a web link to whatever you want to link together.               |
| 22:13      | It's kind of the glue that holds all these things together.                                             |
| 22:16      | And one use case that I've been finding very useful recently is for all of my learned                   |
| 22:21      | [[OmniFocus]] sort of management and all the content tracking and everything that goes into [[Notion]].         |
| 22:28      | And so I'm working on a course right now on using [[OmniFocus]] with note taking apps, which                  |
| 22:33      | is quite a complex course.                                                                              |
| 22:35      | There's an extensive mind map and there's an outline and a folder and I'm going to be                   |
| 22:40      | starting recording shortly, so I'm going to be managing that whole process.                             |
| 22:44      | So I use the document or the note for the course, the one that lives in [[Notion]] is the                   |
| 22:50      | jumping off point for all those things.                                                                 |
| 22:53      | And then I can press Ctrl H on my keyboard and jump to the [[Keynote]] file or jump to the                  |
| 22:59      | recording folder or the document folder or the outline and just having all of the kind                  |
| 23:05      | of assets linked in one place I just find is really useful.                                             |
| 23:10      | And some of those things, especially files and folders, there's just no practical way                   |
| 23:15      | that I've found to link them without [[Hook\|Hookmark]].                                                          |
| 23:20      | There's no sort of standard file or finder links that Apple provides that makes them                    |
| 23:26      | easy to reference.                                                                                      |
| 23:27      | So I think that's been especially golden just to be going from looking at notes to working              |
| 23:32      | on a keynote to developing an outline and having it just be like a few clicks away.                     |
| 23:38      | And I would add to that as someone who also uses Notion for production is there's a lot                 |
| 23:43      | of things to like about [[Notion]], but the way it treats external links is not one of them.                |
| 23:49      | [[Notion]] is bad at linking outside of its own application.                                                |
| 23:53      | They largely don't work, so an application like [[Hook\|Hookmark]] can give you that central clearing             |
| 24:01      | house for related links when the application doesn't cooperate.                                         |
| 24:06      | Yeah, totally.                                                                                          |
| 24:06      | For instance, if you put like an [[OmniFocus]] link into a [[Notion]] document, it doesn't know                 |
| 24:12      | what to do with it.                                                                                     |
| 24:13      | Yeah.                                                                                                   |
| 24:13      | So you're going to have to jump through hoops.                                                          |
| 24:15      | I use [[TinyURL]] in those cases sometimes to create a web link that links to the application              |
| 24:21      | specific link, which does the job, but it's just so much easier with [[Hook\|Hookmark]].                          |
| 24:26      | Yeah, it's like, and it's weird because [[Notion]] has a native app and it would be nice if they            |
| 24:31      | could do that stuff.                                                                                    |
| 24:32      | Now, do you use [[Notion]] in the web browser link or in the native app on your Mac?                        |
| 24:41      | Neither actually.                                                                                       |
| 24:42      | I created a [[Safari]] web app for that because I find those the most, the easiest on sort                  |
| 24:49      | of resources, they don't take up too much memory or CPU, they launch very quickly.                      |
| 24:54      | So there's very few web apps I use.                                                                     |
| 24:56      | I find the [[Safari]] ones generally work the best, even if there might be missing a few                    |
| 25:01      | features.                                                                                               |
| 25:02      | Well, I really like the [[Notion]] for what we do, but that is a great way to fix that one                  |
| 25:09      | problem.                                                                                                |
| 25:10      | Yes.                                                                                                    |
| 25:11      | Yeah, it is.                                                                                            |
| 25:12      | And I often find myself struggling a little bit with [[Notion]] or just in general cross-linking            |
| 25:17      | things.                                                                                                 |
| 25:18      | So for example, my packing list, whenever I'm going on a trip, I will create a packing                  |
| 25:23      | list in [[Drafts]] and I have a project in my task manager, which is [[OmniFocus]], you could                   |
| 25:26      | do it in [[Things]] or [[Todoist]] or whatever you want.                                                        |
| 25:30      | And then I also use [[Tripit]] for managing my trips.                                                       |
| 25:33      | So that's got all the travel details and things like that in there.                                     |
| 25:36      | But that means that I want those links in all of the places and it just kind of gets                    |
| 25:41      | a little bit messy sometimes, like looking at all those URLs all the time.                              |
| 25:45      | So maybe I need to experiment a bit more with [[Hook\|Hookmark]].                                                 |
| 25:47      | It's one of those things where I've looked at it multiple times, but because the vast                   |
| 25:52      | majority of applications that I use have unique URLs to most things, like for example, [[Obsidian]]         |
| 25:59      | supports URL schemes for opening documents, [[OmniFocus]] does, drafts does, et cetera.                     |
| 26:04      | I have not yet really found a use case for it, but I feel like I must be missing out.                   |
| 26:09      | So I'm going to have to give it another deeper dive.                                                    |
| 26:12      | I'd maybe start with files and folders.                                                                 |
| 26:14      | I think that's the, like you could have a task that says open this [[Numbers]] spreadsheet                  |
| 26:19      | or this folder and review it or something like that.                                                    |
| 26:22      | Because that's the, I'd say the least linkable part of the Mac operating system.                        |
| 26:30      | And that might kind of spawn some interest in, in [[Hook\|Hookmark]] that, where you can find other               |
| 26:35      | use cases, but that's just one, I think that's just really not possible without [[Hook\|Hookmark]].               |
| 26:40      | And there's something about just having a task to update a [[Numbers]] spreadsheet and within                |
| 26:46      | seconds being in the spreadsheet and making changes that's really attractive.                           |
| 26:50      | That's one of the advantages of having your working files and [[DEVONthink]] is that they                  |
| 26:54      | actually do make links to files that work, but [[Hook\|Hookmark]] allows you to work straight out                 |
| 26:59      | of the [[Finder]].                                                                                          |
| 27:00      | Rose, you should give it a shot because I think that someone like you would, would find                 |
| 27:05      | interesting ways to use it.                                                                             |
| 27:07      | And the idea, you know, I mean, I talk about this idea of contextual computing, this idea               |
| 27:13      | that you, you drive right to the place you want to be in the app and the file that you                  |
| 27:19      | need to be is a really good workflow in this modern world where, you know, so often going               |
| 27:26      | to read an email requires you to navigate the inbox and the search field.                               |
| 27:31      | And, you know, there's so many ways to get distracted along the way.                                    |
| 27:36      | Whereas when you set the stuff in, up in [[Hook\|Hookmark]], it's like a laser gets you straight to the           |
| 27:40      | exact place you need to be.                                                                             |
| 27:43      | And third party developers and, and the people behind Hook have done just a really good job             |
| 27:48      | of, of making all those integrations work.                                                              |
| 27:51      | I'll just, didn't you mention email David?                                                              |
| 27:53      | Yeah.                                                                                                   |
| 27:54      | I was going to say that the integration that took [[Hook\|Hookmark]] provides for email is excellent              |
| 28:00      | as well.                                                                                                |
| 28:00      | And that's something where you can actually share a *hook* link with somebody else.                       |
| 28:05      | So David, if you had an email that you want to reference to both you and Rose Ron, you                  |
| 28:10      | could just share the *hook* link and that'll, that'll pull up the email for Rose, even if                 |
| 28:14      | she's just using the free version of [[Hook\|Hookmark]].                                                          |
| 28:17      | So that's it.                                                                                           |
| 28:18      | You have a nice little bonus to be able to reference things in a standard kind of way.                  |
| 28:23      | Yes.                                                                                                    |
| 28:24      | Yeah.                                                                                                   |
| 28:24      | That's one of the things where I have struggled a little bit with [[Hook\|Hookmark]] before because               |
| 28:27      | I've wanted universal links that work on iOS and Mac OS and some applications, you know,                |
| 28:33      | they, that just isn't going to work because, you know, they've had different [[URL Schemes\|URL schemes]]                |
| 28:38      | or whatever.                                                                                            |
| 28:39      | But I have a feeling that, you know, I'm just reading up on [[Hook\|Hook's]] universal links at the               |
| 28:43      | moment.                                                                                                 |
| 28:44      | I've just found their web page for that.                                                                 |
| 28:45      | And so I'm going to put a link to that in the show notes for folks, because obviously                   |
| 28:49      | if it can grab the universal links as well, then this is just going to take me down to                  |
| 28:53      | one keyboard shortcut for everything to copy those links, which is of course always a nice              |
| 28:57      | little time saver and automation in itself.                                                             |
| 29:00      | One word of caution on the universal links is in its current form, they don't actually                  |
| 29:04      | work on the iPhone and iPad.                                                                            |
| 29:07      | So that's, yeah, that's a limitation I hope will be overcome at some points.                            |
| 29:12      | And, but yeah, that's they're really only useful, I think on the Mac.                                   |
| 29:16      | Yes, yeah.                                                                                              |
| 29:17      | Well, I will be experimenting with the different URL types that [[Hook\|Hookmark]] supports.                      |
| 29:22      | And again, I'll pop a link to that into the docs and just their documentation in general,               |
| 29:28      | because they seem to have a really good documentation page.                                             |
| 29:30      | So I'm sure folks will want to dive into that and have a good play with all of the options              |
| 29:35      | that are out there.                                                                                     |
| 29:36      | You know, Tim, another interesting implementation of your, your automation is open in.                  |
| 29:41      | With the [[Arc\|Arc browser]] and tell us about that.                                                            |
| 29:45      | Yeah, sure.                                                                                             |
| 29:47      | Well, I've been using the [[Arc]] is my primary browser for quite a while.                                  |
| 29:50      | There's just some real gems of features that are included in that app.                                  |
| 29:55      | And, and one of the use cases I face though is let's say I have an email with a [[Notion]] link,            |
| 30:04      | but I want that to open up in my notion app I've created using as a Safari web app.                     |
| 30:09      | So that's where open comes in.                                                                          |
| 30:11      | It's open, open in is set as my default browser.                                                        |
| 30:15      | It's kind of like the traffic control for all the links that are flying around.                         |
| 30:19      | And I've set up a number of rules.                                                                      |
| 30:21      | So for instance, if it is a [[Notion]] link, then it's going to open in the [[Notion]] app.                     |
| 30:26      | It won't go to work.                                                                                    |
| 30:28      | If it doesn't pass one of the, the, the rules there, it's going to be sent off to [[Arc]]                   |
| 30:34      | as being the default.                                                                                   |
| 30:36      | And within [[Arc]] a feature, I think that's very few people actually know about is one                     |
| 30:40      | called traffic control or air traffic control or something like that.                                   |
| 30:44      | But basically once something arrives in [[Arc]], you can tell it which profile to use.                      |
| 30:49      | So for instance, I use [[WordPress]] for the [Learn OmniFocus website](https://learnomnifocus.com).                                       |
| 30:54      | And if it's an admin link, so if I want to look up like a user on the site or                           |
| 30:58      | in order or something like that, it's going to take me into the profile where I'm                       |
| 31:03      | logged into the kind of the backend of the website.                                                     |
| 31:06      | Or if it's a YouTube link, it's going to take me to my YouTube profile within                           |
| 31:11      | the [[Arc]] browser.                                                                                        |
| 31:13      | So there's kind of two levels of traffic control happening.                                             |
| 31:17      | There's the open in, which is sending it off to the appropriate web browser, essentially,               |
| 31:22      | whether it's [[Arc]] or [[Safari]] web app.                                                                     |
| 31:24      | And then there's the traffic control within [[Arc]], which gets even more granular and sends                |
| 31:30      | it off to the appropriate profile.                                                                      |
| 31:32      | So that's just been working really, really well.                                                        |
| 31:35      | That's really cool.                                                                                     |
| 31:36      | I've been looking forward to getting something like this that can then also differentiate               |
| 31:41      | between [[Safari]] profiles and potentially even [[Safari]] tab groups.                                         |
| 31:45      | Because this is something where, and I am not blaming any company out there for not                     |
| 31:49      | integrating with this other than [[Apple]].                                                                 |
| 31:51      | Because they seem to have just not made these APIs available                                            |
| 31:56      | at all, which is just a real shame, because I would really love to be able to say like,                 |
| 32:00      | hey, when I'm opening this kind of link for snail to app stuff, for example,                            |
| 32:06      | I wanted to open in my snail that profile versus somewhere else.                                        |
| 32:09      | So I'm kind of having to fudge around it with multiple browsers, or I haven't been using open           |
| 32:14      | in.                                                                                                     |
| 32:14      | I've been using another app called [[Choosy]], which also lets you create rules to send                     |
| 32:19      | things off to particular web browsers and so on.                                                        |
| 32:22      | And that also has support for different Chrome profiles and so on in there.                             |
| 32:25      | Now, I'm not really a [[Google Chrome\|Chrome]] user, but I'm feeling like I might need to give that a                     |
| 32:28      | bit more of a play and maybe give [[Arc]] another go as well, just to see                                   |
| 32:33      | how that works with it.                                                                                 |
| 32:34      | Because I have a feeling, the fact that it can automatically direct it to those different               |
| 32:40      | profiles as well, that's pretty nice.                                                                   |
| 32:44      | I feel like that would be a useful thing for me.                                                        |
| 32:47      | Yeah, I go back and forth with [[Arc]] and [[Safari]].                                                          |
| 32:49      | I can't make up my mind.                                                                                |
| 32:51      | [[Safari]] is just so stable.                                                                               |
| 32:53      | It's so good on your battery.                                                                           |
| 32:55      | There's a lot to like about [[Safari]], and everything integrates with the other versions                   |
| 32:59      | of [[Safari]] and your other devices.                                                                       |
| 33:01      | But, man, [[Arc]] sure is a sexy app.                                                                       |
| 33:04      | I mean, they've got some great features in there.                                                       |
| 33:08      | And they're constantly pushing it.                                                                      |
| 33:09      | That's the other thing I like about it.                                                                 |
| 33:11      | They're always pushing it.                                                                              |
| 33:12      | Although they did have a security problem, I think, last month, if memory serves.                       |
| 33:16      | Yeah, very recently.                                                                                    |
| 33:17      | They did patch it very quickly, but it was one of those kind of cringe moments                          |
| 33:22      | where like, how did that happen?                                                                        |
| 33:23      | So hopefully they've learned from the experience that I don't think any users were                      |
| 33:27      | affected from everything that I've read.                                                                |
| 33:30      | It's just a reminder about how much responsibility there is as a                                        |
| 33:35      | any sort of browser maker, especially in terms of privacy and security.                                 |
| 33:40      | Yes, absolutely.                                                                                        |
| 33:41      | And they have all their release notes on their website as well,                                         |
| 33:44      | which is just really nice to be able to go and scroll back through and see.                             |
| 33:49      | I tend to use [[Safari]] and [[Firefox]] personally, just because [[Firefox]] has                                   |
| 33:53      | amazing developer tools, which in my day job, I really need.                                            |
| 33:56      | And then in my not-so-day job, when I'm there trying to do something on a website,                      |
| 34:00      | I'm there going, I miss [[Firefox]].                                                                        |
| 34:02      | Give me [[Firefox]].                                                                                        |
| 34:03      | [[Safari]] is great, but [[Firefox]] is just something that I'm very used to.                                   |
| 34:06      | But I definitely need to branch out and try more browsers.                                              |
| 34:09      | And I feel like having [[Choosy]] already on my Mac is probably a good place to start,                      |
| 34:14      | because I can redirect things off to different browsers.                                                |
| 34:16      | And then I can maybe have a try at [[OpenIn]].                                                              |
| 34:20      | I'll mention [[OpenIn]] is part of the [[SetApp\|SetApp Suite]] as well.                                                 |
| 34:22      | So if you're a [[SetApp]] subscriber, that's already something you have at your disposal.                    |
| 34:29      | That is very good to know.                                                                              |
| 34:30      | And I will pop a link to the Setup link for [[OpenIn]] in the show notes as well, folks.                    |
| 34:35      | So there will be all of the links there to Setup versions where we have them.                           |
| 34:40      | So Tim, something else I supported that you put in our show notes is [[BetterTouchTool]].                 |
| 34:45      | Now, I've been spending a lot of time playing with [[BetterTouchTool]] recently because                   |
| 34:49      | on my work machine, I am not using the [[Stream Deck]] app at all.                                          |
| 34:54      | And I'm doing everything in [[BetterTouchTool]] with [[Keyboard Maestro]] and [[Shortcuts]]                       |
| 34:57      | and a whole bunch of other things.                                                                      |
| 34:59      | And I've got a mouse, which has got two, six, or 12 side buttons on it,                                 |
| 35:03      | depending on what I'm doing.                                                                            |
| 35:04      | And I need to know, what are you doing with [[BetterTouchTool]]?                                          |
| 35:07      | What problems is it solving for you?                                                                    |
| 35:08      | Because I know you've got a mouse and a trackpad.                                                       |
| 35:10      | So how's that working?                                                                                  |
| 35:12      | Yeah, sure.                                                                                             |
| 35:13      | So I've got a trackpad sitting to the left of my keyboard,                                              |
| 35:16      | and I've got a Logitech vertical mouse on the right.                                                    |
| 35:20      | And one limitation with the Logitech vertical mouse is it doesn't have many buttons on it.              |
| 35:25      | And I actually have seen that as an advantage in some ways.                                             |
| 35:30      | Once I started to use [[BetterTouchTool]] in combination with keyboard shortcuts and mouse                |
| 35:37      | modifier keys and mouse buttons running.                                                                |
| 35:39      | So for instance, if I'm in [[Apple Mail\|Mail]] and I want to archive a message,                                        |
| 35:42      | I just press the middle mouse button.                                                                   |
| 35:45      | If I hold down the command key and press the middle mouse button,                                       |
| 35:48      | it's going to delete it just to give a very simple example.                                             |
| 35:51      | If I do option command and middle mouse button,                                                         |
| 35:54      | it's going to specifically put an order into the orders folder where I keep track of all of those.      |
| 36:00      | So just one of those things that might sound simple, no big deal,                                       |
| 36:05      | but it does allow me to get through email that much more quickly.                                       |
| 36:09      | And there's something about having just a few buttons to manipulate                                     |
| 36:12      | versus reaching for keyboard shortcuts that sometimes quite a welcome change there.                     |
| 36:18      | So I realised when I combine the modifier keys with the buttons on the mouse,                           |
| 36:23      | I have far more, essentially far more buttons than I could ever need.                                   |
| 36:28      | And then I'm using by kind of gotten used to,                                                           |
| 36:32      | maybe it's from playing the piano back in the day,                                                      |
| 36:33      | I'm used to using both hands at the same time and it's felt very natural.                               |
| 36:38      | And if I need to scroll or zoom, I just move my hand a little to the left.                              |
| 36:42      | And I've got the trackpad waiting for me there.                                                         |
| 36:45      | What are some of your favourite shortcuts you're using?                                                  |
| 36:49      | I've got one in [[OmniFocus]] is an example where I can mark an action complete                             |
| 36:53      | and then go to the next action.                                                                         |
| 36:55      | So it's a very simple macro within [[BetterTouchTool]].                                                   |
| 36:59      | It just presses the spacebar and then the down arrow.                                                   |
| 37:02      | But even something simple like that,                                                                    |
| 37:04      | because there's a lot of kind of maintenance actions I go through even daily.                           |
| 37:08      | And I just want to just check it, it maybe takes me 30 seconds to do it.                                |
| 37:14      | I just hold down that modifier key and press the left button                                            |
| 37:17      | and I'm on to the next one.                                                                             |
| 37:18      | I think every [[OmniFocus]] nerd has some version of a shortcut                                             |
| 37:22      | where you hit the spacebar in the down arrow.                                                           |
| 37:24      | Mine is done in [[Keyboard Maestro]].                                                                       |
| 37:27      | But yeah, I think that you realise that's necessary                                                     |
| 37:31      | as you work through your data.                                                                          |
| 37:32      | And that's fun that you added that to the mouse.                                                        |
| 37:35      | Well, you have me very interested in this                                                               |
| 37:37      | because I think I need to look into it.                                                                 |
| 37:39      | What I tell the listeners is remember in [[BetterTouchTool]]                                              |
| 37:42      | that you can set the automation scripts per application.                                                |
| 37:47      | So Tim can have that automation that hits the spacebar in the down arrow key                            |
| 37:53      | only when he's an [[OmniFocus]].                                                                            |
| 37:55      | But then he could have the exact same shift plus click                                                  |
| 38:00      | do something entirely different, [[Safari]] or [[Arc]],                                                         |
| 38:03      | or whatever his browser of choice is.                                                                   |
| 38:07      | Yeah, one that I added yesterday was just press the middle key in [[Keynote]]                               |
| 38:11      | and it kicks off the presentation.                                                                      |
| 38:12      | And there's something simple like that.                                                                 |
| 38:16      | It's a nice quality of life.                                                                            |
| 38:17      | And I do have a few global ones for [[BetterTouchTool]].                                                  |
| 38:20      | So we talked about [[Hook\|Hookmark]] earlier.                                                                   |
| 38:22      | If I hold down the control key and press the left mouse button on my mouse,                             |
| 38:27      | it's equivalent of control H and it brings up [[Hook\|Hookmark]],                                                |
| 38:30      | which has been very useful.                                                                             |
| 38:33      | And sometimes I go into an app I haven't used in a while                                                |
| 38:35      | and I can't remember what [[BetterTouchTool]] integrations I set up.                                      |
| 38:40      | So if I do control option command and then the middle mouse button in any app,                          |
| 38:44      | it'll pop up a cheat sheet and show me what I've defined previously.                                    |
| 38:48      | So I found that's really useful.                                                                        |
| 38:50      | Is that a cheat sheet through [[BetterTouchTool]]?                                                        |
| 38:53      | Yeah, yeah, exactly.                                                                                    |
| 38:55      | I will find that and put that in the show notes                                                         |
| 38:58      | because I did not realise that existed                                                                  |
| 39:00      | and that is something I need in my life.                                                                |
| 39:01      | So I'm sure some of our listeners would like that as well.                                              |
| 39:05      | Yeah, the action is simply called toggle cheat sheet.                                                   |
| 39:08      | So when I do that combination, it just brings that up on the screen.                                    |
| 39:12      | Excellent.                                                                                              |
| 39:12      | I don't know.                                                                                           |
| 39:13      | I think I just stumbled across that one when I was sometimes having                                     |
| 39:17      | a little trouble remembering what I'd set the mouse buttons                                             |
| 39:20      | and modifier keys to do.                                                                                |
| 39:22      | So that's been really useful.                                                                           |
| 39:24      | Now, if you want to go crazy, use this with an extended keyboard                                        |
| 39:28      | and then you're combining number pad keys or stream deck keys plus mouse buttons.                       |
| 39:34      | It gets nuts very quickly.                                                                              |
| 39:36      | But yeah, I like that.                                                                                  |
| 39:38      | I think one of the keys is to kind of go crazy over time in a sense.                                    |
| 39:41      | Exactly.                                                                                                |
| 39:42      | Don't try to just do this with one app                                                                  |
| 39:45      | and just get really used to using it.                                                                   |
| 39:47      | And like it was, even though I used [[Keynote]] a lot,                                                      |
| 39:50      | it didn't occur to me till yesterday that I could do some of the same things in [[Keynote]].                |
| 39:55      | But not having that also wasn't like holding me back in a big way.                                      |
| 40:00      | It was just one of those, I like to think of these sorts of things                                      |
| 40:04      | as just sort of small quality of life additions to the system                                           |
| 40:08      | where they're not essential, but they are welcome                                                       |
| 40:10      | and they do make things a little bit easier.                                                            |
| 40:14      | When you get adapted automation, you get a separate trigger in your brain                               |
| 40:18      | called the *That's Annoying* trigger, where you do something repeatedly.                                  |
| 40:23      | Like I want to start a [[Keynote]] and I always have to do this, this, and this                             |
| 40:26      | with the mouse or whatever.                                                                             |
| 40:29      | And it's like, how could that's annoying?                                                               |
| 40:30      | How could I make that easier?                                                                           |
| 40:32      | And if you've got the knowledge to build the automation at that point,                                  |
| 40:36      | it's very easy.                                                                                         |
| 40:37      | And you've added this [[BetterTouchTool]] plus mouse trick to your bag of tricks.                         |
| 40:42      | So I'm sure that you're slowly discovering many areas where you can do that.                            |
| 40:47      | And like Tim was saying earlier, I would just pile on to say,                                           |
| 40:51      | never try to learn 20 shortcuts at once.                                                                |
| 40:55      | Learn one at a time and then you'll get to 20, but you will never learn 20 at once.                     |
| 41:00      | I just think it's the way our brains are mapped.                                                        |
| 41:03      | Once it becomes muscle memory, then you're okay to put a couple more in.                                |
| 41:07      | But don't try and do it all at once or you'll just get overwhelmed and not do any.                      |
| 41:12      | Yeah, exactly.                                                                                          |
| 41:13      | And this is where an application like [[KeyCue]] or something can come in really handy as well                  |
| 41:17      | because that can pop up all of the keyboard shortcuts and things that are already built                 |
| 41:20      | into an app.                                                                                            |
| 41:22      | And even if you change them through the system preferences,                                             |
| 41:26      | you can still see what those have been set to.                                                          |
| 41:28      | And that can be very helpful for figuring out what your next shortcut is that you're                    |
| 41:34      | going to learn or something or figuring out a different way to trigger that,                            |
| 41:37      | which is obviously what you've been doing, Tim.                                                         |
| 41:39      | And I think that that's really smart.                                                                   |
| 41:40      | We do focus heavily on the keyboard here on Automators because our hands tend to be on                  |
| 41:44      | the keyboard.                                                                                           |
| 41:44      | But if your hand is already on the mouse, then it doesn't make sense to keep taking it off              |
| 41:49      | the mouse to continue doing extended keyboard actions,                                                  |
| 41:52      | especially if you're involving the number pad or a macro pad or something like that.                    |
| 41:56      | Yeah, and then going back to what we talked about earlier, that's another example of how                |
| 42:00      | the trigger can vary, but the actions stay the same.                                                    |
| 42:03      | So I might have five different triggers that kick off the same sequence of actions,                     |
| 42:10      | and it's nice to have that flexibility if I'm on my laptop and I don't have my mouse                    |
| 42:14      | or something like that, I can still run the automation.                                                 |
| 42:17      | It's just going through a different trigger.                                                            |
| 42:23      | This episode of Automators is brought to you by LinkedIn Jobs.                                          |
| 42:26      | When you're hiring for your small business, you want to find quality professionals that                 |
| 42:29      | are right for the role.                                                                                 |
| 42:30      | That's why you have to check out LinkedIn Jobs.                                                         |
| 42:32      | LinkedIn Jobs has the tools to help find the right professionals for your team faster                   |
| 42:36      | and for free.                                                                                           |
| 42:37      | We've all heard those stories about when you're hiring somebody and you just get a CV                   |
| 42:42      | and that's completely inappropriate, somebody that just doesn't have the right skills.                  |
| 42:46      | And that's the sort of thing that wastes a lot of time and I've seen that happen time and time          |
| 42:50      | again.                                                                                                  |
| 42:51      | Finding the right person with the right skills and the right personality to fit your team               |
| 42:55      | is absolutely critical.                                                                                 |
| 42:57      | LinkedIn isn't just a job board, it helps you find professionals you can't find anywhere else,          |
| 43:01      | even those who aren't actively searching for a new job but might be open to the perfect role.           |
| 43:06      | In a given month, over 70% of LinkedIn users don't visit other leading job sites,                       |
| 43:10      | so if you're not looking on LinkedIn, you're looking in the wrong place.                                |
| 43:13      | On LinkedIn, 86% of small businesses get a qualified candidate within 24 hours.                         |
| 43:18      | Hiring professionals like a professional on LinkedIn.                                                   |
| 43:22      | LinkedIn also knows that small businesses are wearing so many hats and might not have                   |
| 43:25      | the time or resources to hire.                                                                          |
| 43:27      | That's why they're constantly finding ways to make the process easier.                                  |
| 43:30      | They even just launched a feature that helps you write job descriptions,                                |
| 43:33      | making the process even easier and quicker.                                                             |
| 43:35      | It's easy to see why 2.5 million small businesses use LinkedIn for hiring.                              |
| 43:39      | Post your job for free at LinkedIn.com/automators.                                                |
| 43:44      | That's LinkedIn.com/automators to post your job for free.                                         |
| 43:47      | Terms and conditions apply.                                                                             |
| 43:51      | Tim, another thing that you do is a lot of web automation.                                              |
| 43:56      | I know you're a [[Zapier]] fan.                                                                             |
| 43:58      | Tell us why you picked [[Zapier]] and what you're doing with it.                                            |
| 44:02      | Yeah. It's been many years since I started using [[Zapier]].                                                |
| 44:06      | I think it was probably the only game in town at the time, so it made the choice very easy.             |
| 44:13      | Even in the early days, I think they had quite a solid reputation.                                      |
| 44:16      | They really built the tool, right?                                                                      |
| 44:19      | I've dabbled with the other ones.                                                                       |
| 44:21      | I know Make is another one that is popular, but [[Zapier]] is the one I've                                  |
| 44:27      | learned to trust for many years and I'm familiar with, so there hasn't been                             |
| 44:31      | really a motivation to move to another app.                                                             |
| 44:35      | I think one of those cases where if it's not broke, don't fix it.                                       |
| 44:40      | It's proven to be very reliable, and it does pretty much everything I need it to do.                    |
| 44:45      | I guess it wouldn't be a good use of my time to move that to something else,                            |
| 44:49      | unless I specifically wanted to develop expertise in another app or service.                            |
| 44:53      | Yeah. I think it's one of those things where, especially if you've been using one of these              |
| 44:57      | online services for long enough, the alternative was probably [[IFTTT\|If This Then That]],                         |
| 45:01      | which had exactly one trigger and one action.                                                           |
| 45:05      | They did extend it after a while, but it took quite a while after [[Zapier]] came around.                   |
| 45:10      | And [[Zapier]] very much targeted themselves as being a business tool rather than                           |
| 45:14      | [[IFTTT\|If This Then That]], which was like, hey, when somebody sends me an email with this title,                 |
| 45:19      | set my lights to this colour because my sports team is winning or something,                             |
| 45:24      | which there's nothing wrong with that as an automation basis, but it does come across                   |
| 45:30      | more casual and less, I am going to be using this for business purposes and this is how I'm             |
| 45:35      | going to use it. And I think [[Zapier]] has really set themselves up very well there.                       |
| 45:40      | And I've been using [[Zapier]] and [[Make]] for a long time now, and I have slowly moved more and more          |
| 45:46      | things to make and I need to sit down at some point perhaps this weekend and move more things           |
| 45:51      | into just one so that I'm not dealing with multiple systems everywhere.                                 |
| 45:55      | But it's good here that you're still using [[Zapier]] and that you're still finding it useful.              |
| 46:01      | I can talk about a few specific use cases if that would be helpful.                                     |
| 46:04      | That would be really helpful.                                                                           |
| 46:06      | Yeah. Okay. Yeah. One recent one going back to [[Notion]] is I've got one of the databases and              |
| 46:14      | there is a library of all the content sort of past, present and future.                                 |
| 46:18      | And when the status of something in the content library goes to in progress,                            |
| 46:23      | then that triggers is up, which adds a task to, in my case, [[OmniFocus]], but you could very easily        |
| 46:30      | add a task to [[Things]] or to [[Todoist]] or anything that has kind of a web integration.                      |
| 46:36      | The one trick with that took me a little while to figure out is I needed to add an extra feel           |
| 46:42      | in [[Notion]] to say, I call it processed by [[Zapier]] and it automatically puts a check on that.              |
| 46:49      | Otherwise, that trigger could happen over and over again, then I could end up with 100 tasks            |
| 46:55      | for the same thing essentially. So sometimes there are a few little details to navigate.                |
| 47:00      | But now that I've got it in place, it's very simple to kind of kick off the actual work                 |
| 47:06      | that's being done simply by changing the status and [[Notion]].                                             |
| 47:10      | I probably spent an hour figuring that out when all of a sudden done, but                               |
| 47:14      | I could be using that one for years and getting a lot of benefit.                                       |
| 47:18      | Yes. Yeah, that is very smart. And also just the, hey, just limit this so that it doesn't               |
| 47:23      | keep happening. Because I know with [[Airtable]], [[Zapier]] runs once per record when the record              |
| 47:29      | appearing or moving is the trigger. And that's it across all of your Zaps to prevent you ending         |
| 47:34      | up in an infinite loop of this was created and then it got moved here by this automation.               |
| 47:39      | By that automation, it just goes around in a massive circle without anybody ever actually               |
| 47:43      | touching it, which would be pretty cool, but that's not necessarily what you're aiming for.             |
| 47:46      | So yeah, remembering, what is the requirement? Okay, so when this is done, why do I not want            |
| 47:52      | it to happen again? That's a useful thing to remember with any and all automations.                     |
| 47:58      | I think that lesson you learned about the flag saying, hey, this has already been processed             |
| 48:04      | is an important one with web automation. And for a lot of folks out there that are playing with it,     |
| 48:10      | that is often a culprit. And you have to really babysit a new web-based automation for a few days       |
| 48:16      | to make sure you're not generating a thousand of whatever the thing is, because the web                 |
| 48:21      | automation just kept looking at the site and updating itself and throwing one more task on              |
| 48:26      | the pile. I bet that was a surprise to you. The first time you went in there and I'll be focused        |
| 48:31      | at 120 times start this project or something, right? It's like, what?                                   |
| 48:36      | It's something I uncovered during the testing. It wasn't kind of a production automation at that        |
| 48:41      | point. And that's why I think thoroughly testing it is key. And then otherwise, the automation can      |
| 48:47      | feel like it's adding weight to the system. If suddenly I've got a bunch of tasks to clean up           |
| 48:53      | that I didn't create myself, or I don't understand why they're being created. So                        |
| 48:56      | something to be mindful of that there are sometimes a few little technical hurdles to                   |
| 49:02      | overcome with these. And if it's something that's important, if it's very useful automation to have,    |
| 49:08      | then it's often worth the effort. Do you have in your head a protocol when you make a new               |
| 49:13      | automation? At what point does it go from testing to production? I guess it kind of goes into a beta    |
| 49:21      | stage. I do some sort of basic testing on it, like in [[Notion]] just creating some sample records          |
| 49:27      | and changing the status and updating things and making sure it works as expected. And if I'm pretty     |
| 49:34      | convinced it's working, then I'll just consider it kind of a beta and maybe try it out for the next     |
| 49:39      | couple of weeks, see if there's any edge cases I missed. And I know it's production when I don't        |
| 49:44      | even think about it anymore. It's just humming along nicely and it just does its thing in the           |
| 49:51      | background. Have you guys ever found yourself building an automation? And it actually works,            |
| 49:57      | it gets out of beta, you know, for lack of a better term. But then you don't actually use it. I do      |
| 50:03      | that occasionally. It's like the idea of it was much sexier in my mind than the existence of it.        |
| 50:10      | Am I the only one that has that happen once in a while?                                                 |
| 50:14      | I would say it happens to me sometimes, but I wouldn't say it happens all that often because            |
| 50:18      | often if I'm building an automation for a thing, it's because I need to do that same series of          |
| 50:25      | actions over a number of things, even if it's only 20 things today. And then I tend to keep the         |
| 50:32      | automations around, even if I don't necessarily think I'm going to use them again, I'm not going        |
| 50:35      | to delete it and get rid of it because I might need something very similar to that later or in          |
| 50:40      | the future. And then I can copy and paste it and start or reference it and look back at it,             |
| 50:48      | which can be quite handy for things. And speaking of going back to things, one of the things I          |
| 50:53      | found when I was doing some automations like Tim did, particularly with mail drop, it's a little         |
| 50:58      | less of a problem if you've got a direct API integration that you might have with, say,                 |
| 51:03      | [[Todoist]] and [[Zapier]], is putting a searchable text string somewhere so that you can then find all         |
| 51:10      | of the things and you know where this has come from. And this is something that originally I            |
| 51:14      | would go back and I would delete these out of my automations, but I have found actually                 |
| 51:18      | that it is much better value to just keep them in the notes or something so that then later on,         |
| 51:25      | if I'm there trying to go, hey, so this [[OmniFocus]] task keeps appearing. Where is this coming from?      |
| 51:32      | What is causing this? Why is this happening to me? Or why does this thing keep appearing in             |
| 51:37      | reminders? This is very confusing. Then what I can do is I can look into the notes and I usually        |
| 51:45      | put it in double brackets and then have something. And so if it's a shortcut that's running, it'll be   |
| 51:50      | shortcut colon and then the name of the shortcut. If it's a [[Zapier]] action, it'll be Zapier colon        |
| 51:55      | and the name of the Zap and things like that just to help me find it later when I am trying to back     |
| 52:01      | trace where this magical thing is coming from to explain it to somebody else or just to tweak it        |
| 52:06      | or to replicate it. Or if something's gone awry and I have 120 of these things appear,                  |
| 52:12      | like [[Drafts]] recently added a mail drop feature, which is really cool. But if I automate something,       |
| 52:17      | I'm going to have to make sure that I add something to the bottom of that so that I                     |
| 52:20      | know where those are coming from because I don't want to overwhelm [[Greg Pierce\|Greg's]] mail service with a load      |
| 52:25      | of emails if I have an automation go awry. Yeah, that's a great idea because it's much easier to        |
| 52:30      | put in that little kind of note to future self than it is to try to trace where is this thing           |
| 52:36      | coming from and it's not always very obvious. Yeah, self-documenting versus, you know, I could          |
| 52:42      | write it into an [[Obsidian]] document or put it into [[DEVONthink]] or something. But then I absolutely     |
| 52:46      | have to update that if I am going to change things. And if I just change something really               |
| 52:51      | quickly on my phone on the fly, I may not remember to do that. But if there is something that's         |
| 52:57      | actually directly there in the automation, then I will almost certainly remember to update it           |
| 53:01      | because it's right there where I can see it. And if it is one that I don't currently use but has        |
| 53:07      | potentially future value in like [[Zapier]], for instance, I'll maybe leave it in there, but I'll           |
| 53:13      | disable it. So when I'm going through my zaps, I see that this is maybe there is potentially            |
| 53:19      | useful in the future, or I put a lot of work into this one, and I might want to at least refer back     |
| 53:24      | to it or duplicate it, create something similar. And then if it's been a year and I realise, yeah,      |
| 53:30      | this doesn't really serve a purpose anymore, I'll just delete it at that point.                         |
| 53:35      | So often we get lessons from prior automations. Like, you know, you keep them around just so            |
| 53:41      | you remember how you pulled something off. And the diagnostic and kind of read me or                    |
| 53:49      | notes to future self related to complex automations are what's going to get you out of a whole          |
| 53:54      | so many times. Absolutely. Yeah, it's one of those things where it's, you know,                         |
| 54:01      | it's amazing the number of times a little thing from past me has just popped up somewhere and           |
| 54:06      | I've gone, oh, oh, yes, yes, past me actually thought that this was a good idea, which is why           |
| 54:13      | this task is in my task manager or whatever it is. And, you know, just adding a little bit of           |
| 54:17      | context to these things so that, you know, it's not just a bolt out of the blue. It is                  |
| 54:22      | something that is, you know, a little more helpful than that and has a little bit of context. It's      |
| 54:28      | like, when you whenever you write a task to yourself, instead of just saying, you know, like,           |
| 54:33      | do the washing up, you know, like, having something that's actually nice of, you know,                  |
| 54:38      | make sure your home is clean and tidy by cleaning the dishes. That's, that's a really bad,              |
| 54:42      | that deliberately bad example, but just remembering the purpose of the thing that's                     |
| 54:46      | magically appearing in front of you is quite important when it comes to automations.                    |
| 54:52      | Another automation platform that you use, and I definitely think this is an automation platform,        |
| 54:56      | is [[Alfred]]. And we always like to talk about folks' preferences for keyboard launchers right now,        |
| 55:02      | like automation, we have this abundance of riches with [[Raycast]] and [[Alfred]] and [[LaunchBar]] and these       |
| 55:08      | great apps around all following kind of the legacy of our beloved [[Quicksilver]], but [[Alfred\|Alfred's]] your             |
| 55:14      | weapon of choice here. Why is that? And what are you doing with it? I think it's another case of        |
| 55:21      | if it isn't broken, don't fix it. And I have, I've played with, with [[Raycast]] as well. And there's       |
| 55:26      | definitely a lot to like about that. There's just some really key automations and workflows I've        |
| 55:32      | got in [[Alfred]] that I would really, really miss having universal actions is something that there's       |
| 55:38      | maybe a little bit of an underused feature in [[Alfred]] where you can just select any text, for            |
| 55:44      | instance, and kick off a search. I use that all the time. So I could, for instance, I've got a          |
| 55:49      | custom search to look for a user in the backend database for [Learn OmniFocus](https://learnomnifocus.com). So I could select         |
| 55:56      | their name or their email, press its control, option command, backslash in my case. And then            |
| 56:03      | that's easily fed into the search for like a subscriber or user or something like that. Or              |
| 56:08      | if I want to look up a movie that someone mentions in an email, I can send that off to a search without |
| 56:13      | any copying and pasting. So again, it's one of those things that it's not essential, but it is          |
| 56:20      | one of those little niceties that improves the quality of life and just makes things a little           |
| 56:26      | bit faster, just feels a little bit more seamless. So that's universal actions. I've got one for        |
| 56:34      | finding folders, one that I got from you, David, that you had like variations on that where I've        |
| 56:40      | got one for like finding folders, but only within my client's folder or my [Learn OmniFocus](https://learnomnifocus.com) folder.      |
| 56:45      | And again, just it makes it incredibly quick to get to the information I want. So                       |
| 56:51      | it'd be hard to imagine not using it. Yeah, one of the things I've been doing a lot recently is         |
| 56:57      | because I've been playing with [[BetterTouchTool]] is so much, and specifically using it for my [[Stream Deck]]      |
| 57:02      | controls and reworking my [[Stream Deck]] setup on my work machine is I have actually been using       |
| 57:09      | a lot of [[Keyboard Maestro]] URLs to run [[Keyboard Maestro]] macros, because I already have macros for        |
| 57:14      | a bunch of these things. And so I've been using [[Stephen Millard\|Stephen Millard's]] fabulous [[Alfred]] plugin [[Conductor]]      |
| 57:20      | so that I can just, you know, open [[Alfred]], type KM, search for the thing. So for example,               |
| 57:26      | activate select, and then I can press the control key and hit return, and it copies the URL to run      |
| 57:33      | that macro to my clipboard. And I just paste it straight into a [[BetterTouchTool]]. And having           |
| 57:38      | things like that right under my fingers is really easy. And I know some folks, some friends of mine     |
| 57:43      | even have struggled with creating [[Alfred]] workflows and so on. But I feel like there's so many out       |
| 57:50      | there that you don't necessarily need to create them, you can just download them and borrow them        |
| 57:54      | from everybody else. Yeah, the folder one was an adaptation of one that was on the public website.      |
| 58:03      | And if you just take it apart, there's not much to it. And, and I had done it for client files,         |
| 58:08      | exact same, you know, invoke [[Alfred]], and I think I type F space. And then it's just searching client    |
| 58:16      | folders, which a lot of times is what you want to do. I think no matter which one you use,              |
| 58:22      | that there's a lot of good ones now. And every time this comes up, I have [[Raycast]] people writing        |
| 58:27      | me saying you're not covering [[Raycast]] enough. Well, that's because I, like Tim, I've got [[Alfred]]         |
| 58:32      | wired so well, that it's it's hard for me to justify going over. But every time I look at [[Raycast]],      |
| 58:37      | they've got most of the tools that I'm doing in [[Alfred]]. So you know, six of one, half dozen,            |
| 58:43      | the other, but the, but the important thing is you get one of these tools and slowly customise          |
| 58:48      | it to your liking, because it really does just dramatically improve your speed on your Mac,             |
| 58:56      | maybe more than any other automation tool when you think of it. I, I know several times been working    |
| 59:02      | on my Mac in front of friends or people who are not as nerdy as me. And I just, you know,               |
| 59:08      | it's so internal to me, I hit, you know, command space and do a couple things and suddenly my           |
| 59:13      | computer jumps to life. And they're like, what did you just do? I mean, they're always shocked by       |
| 59:18      | it. You know, I think most people don't even try [[Spotlight]], much less one of these tools.               |
| 59:23      | Yeah, absolutely. And one of the things I have also heard is that is a little more difficult to         |
| 59:28      | submit the plugins for [[Raycast]] than it is for [[Alfred]]. [[Alfred]] will happily let multiple things           |
| 59:36      | with exist with similar names in their galleries, but a friend of mine did try to create a new time     |
| 59:39      | zone integration or plugin for [[Raycast]], which works differently to the one that's already there.        |
| 59:44      | And they were told, oh no, like you can't have that because we already have a time zones one.           |
| 59:49      | That doesn't work how my brain wants it to work. So that's not going to work for them.                  |
| 59:54      | But yes, you can still create your own and download third party ones. You just can't                  |
| 59:57      | submit it to the store, which is a shame. That's a bit more curated, you know, I think that's there.    |
| 01:00:03   | Which has pros and cons to it for sure. Yeah.                                                           |
| 01:00:07   | So Tim, something else you had on the list, which I use every day and I don't even think about it       |
| 01:00:12   | until today, literally earlier today. I was on a call with a colleague and I was sharing my screen      |
| 01:00:17   | and I opened my database up and I paste it in the ID and I selected it and then I clicked on the        |
| 01:00:21   | button that appeared above it. And my colleague went, wait, what was that? How did you do that?         |
| 01:00:27   | And the answer to that is [[PopClip]] because it automatically took the ID and wrapped it in                |
| 01:00:31   | the magic to make sure the database query actually worked. But I'm curious, what are you using          |
| 01:00:36   | [[PopClip]] for? Because, I mean, it pops up like the little bar does on iOS and iPad OS with the copy      |
| 01:00:42   | and paste. There's so many plugins. I'm curious what you're using. Yeah, sure. Yeah, it's one of        |
| 01:00:48   | those things that almost feels like it's built into macOS at this point because I've been using it      |
| 01:00:53   | for so long. And I don't tend to use it for the standard cut, copy, paste things because I've already   |
| 01:01:00   | got those well established under my fingers. But for a lot of text manipulation, that's probably my     |
| 01:01:06   | number one use case, putting it in title case or lower case. There's one called Slugify. I just         |
| 01:01:12   | like the little icon with the slug there where it turns it into something you could use for a           |
| 01:01:16   | website address. And that one's surprisingly useful if I'm just creating a slug for some                |
| 01:01:21   | learn [[OmniFocus]] content or something. There's some more advanced things like [[URL Encoding\|URL encoding]],              |
| 01:01:27   | sorting is a great one. There's an [[OmniFocus]] one that's fairly recently was updated to [[OmniFocus]]        |
| 01:01:34   | 4. I'll take a little bit of credit for that because I was lobbying the developer, Nick, to             |
| 01:01:40   | have that be updated. But it's just really nice to be able to select some text and turn it into         |
| 01:01:44   | an [[OmniFocus]] action. I think there's similar ones for [[Todoist]] and things as well. So it's one of        |
| 01:01:50   | those that there's probably plugins, all insert extensions, all install in the future that I            |
| 01:01:56   | could be using, but I just want to get used to using the current set and then add to it as it           |
| 01:02:01   | makes sense. Yeah, one of the things I've done with this recently is if I select text in [[Keyboard Maestro]],       |
| 01:02:07   | then it offers me a percent variable as an icon. And if I click that, or it's actually         |
| 01:02:15   | percent VAR, and if I click that, then it reps the currently selected text with percent variable        |
| 01:02:20   | percent before and then just a percent sign afterwards. So if I've copied and pasted a variable         |
| 01:02:25   | name, then I can easily turn it into a variable in a text block, for example, which has been quite      |
| 01:02:31   | useful for me. I love that. I really like [[PopClip]]. I'm using automation to make other automation        |
| 01:02:37   | easier. Why wouldn't you do this? Rose wrote [[Keyboard Maestro]] code completion                           |
| 01:02:44   | with [[PopClip]]. Rose, we love you. That's why. That's why you would do so.                                |
| 01:02:49   | I am that sort of nerd, and I am not going to apologise for it because that is exactly who I            |
| 01:02:54   | am. But this is also something that is really nice about [[PopClip]] is you don't have to have the same     |
| 01:02:58   | actions everywhere. You can have actions appear contextually in certain applications depending          |
| 01:03:03   | on, because you can write them yourself. There's a really handy little guide. I'll see if I can         |
| 01:03:07   | find it in the forums or if they put it in the documentation now. It's literally just a little          |
| 01:03:14   | block of text. You write a little block of text in something like [[Drafts]] or [[BBEdit]],                    |
| 01:03:18   | and then it turns into a [[PopClip]] action, which is really great for just really simple things            |
| 01:03:23   | like adding this thing before and after and so on and so forth. So yeah, I personally think that        |
| 01:03:28   | [[PopClip]] is really amazing. And I'll link the documentation as well as that particular kind              |
| 01:03:34   | of action creation. Yeah, but unlike Tim, I haven't sold [[PopClip]] plugins with reckless abandon,         |
| 01:03:40   | so I have the arrow of shame. If you have too many plugins, it fills up the entire bar and              |
| 01:03:48   | gives you a little arrow at the end, or you can get the rest of them that you've plugged in.            |
| 01:03:52   | And now listening to Tim, I feel like I need to audit mine and get down to just one little bar          |
| 01:03:57   | of [[PopClip]] plugins. I don't need two of them. Yeah, yeah. I mean, it's one of those things              |
| 01:04:03   | where I found going through and just unchecking ones I'm not sure about right now is a really good      |
| 01:04:10   | start because you don't have to uninstall them to hide them. And then you can go through and just       |
| 01:04:16   | do a little bit of a judicious selection. And then, of course, there's always exporting,                  |
| 01:04:22   | tweaking to make it only available in certain applications and then putting it back or only             |
| 01:04:26   | available with certain text selected and so on and so forth. One little pro tip to add to is            |
| 01:04:31   | sometimes it's convenient to activate [[PopClip]] using the keyboard instead of like a mouse selection.     |
| 01:04:37   | So I use a [[Keyboard Maestro]] macro for that, which just invokes [[PopClip]]. I think it's just               |
| 01:04:43   | like one line of [[AppleScript]] or something like that. And so that gives the kind of the power of        |
| 01:04:49   | [[PopClip]] without the unnecessary reaching for the mouse. Yeah. Yes, absolutely.                          |
| 01:04:56   | All right. Well, Tim, if people want to learn more about what you're up to, where should they go?       |
| 01:05:01   | Yeah. So technically simple is the company I founded way back in 2003. And that's where I               |
| 01:05:08   | promote my consulting services, mainly [[OmniFocus]] and [[Asana]]. And then [Learn OmniFocus](https://learnomnifocus.com) is my              |
| 01:05:14   | membership-based site from 2014. And you'll find all the information there.                             |
| 01:05:21   | Well, congratulations on 10 years with [Learn OmniFocus](https://learnomnifocus.com). Everybody go check it out.                      |
| 01:05:26   | We are the Automator's Podcast. You can find this at relay.fm/automators.                        |
| 01:05:32   | Thank you to our sponsors this week, LinkedIn, Talent Solutions, and Notion. For those of you           |
| 01:05:37   | that are Automator's Mac subscribers, I should have mentioned at the top of the show,                   |
| 01:05:42   | you are able, with the show shutting down, you will be able to transfer your Automator's Max            |
| 01:05:48   | subscription to another show if you want. And there's some other options too. We're working             |
| 01:05:54   | with Relay right now. We're recording a little early. So we'll be taking care of you.                   |
| 01:05:59   | But those Automator's Max subscribers do stick around because we are going to be talking about          |
| 01:06:04   | [[OmniFocus]] Automation Plugins. We couldn't help ourselves. So we're going to be covering that one.       |
| 01:06:10   | Otherwise, we'll see you next time. Goodbye, folks.                                                     |
