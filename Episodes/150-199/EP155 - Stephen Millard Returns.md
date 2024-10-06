---
status: complete
fc-date:
  year: 2024
  month: 5
  day: 31
fc-category: podcast
podcast: Automators
published: 2024-05-31
duration: 3863
formattedduration: 01:04:23
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Stephen Millard
notetype: episode
showpage: http://relay.fm/automators/155
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators155.mp3
episode: 155
title: "155: Stephen Millard Returns"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Stephen Millard, one of our favourite automators, returns to the show with ideas (and scripts) to automate Alfred and announces the public Automators Obsidian Vault.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 155 Discussion](https://talk.automators.fm/t/155-stephen-millard-returns/17655)

# Sponsors
- None.

# Show Notes
- [ThoughtAsylum](https://www.thoughtasylum.com/)
	- Bonus automation from Rosemary: I send the feed straight into GoodLinks to read it!
- [Automators #68: Stephen Millard and ThoughtAsylum - Relay FM](https://www.relay.fm/automators/68)
- [Alfred - Productivity App for macOS](https://www.alfredapp.com/)
- [Alfred | ThoughtAsylum](https://www.thoughtasylum.com/alfred/)
- [Raycast - Your shortcut to everything](https://www.raycast.com/)
- [Cluster (for Bunch) | Cluster is an Alfred workflow for use with the Bunch app by Brett Terpstra. This site provides documentation for the use of this workflow.](https://cluster.thoughtasylum.com/)
- [Welcome to Bunch - Bunch.app](https://bunchapp.co/)
- [What's New in Alfred 5.5?](https://www.alfredapp.com/whats-new/)
- [Change Log - Alfred](https://www.alfredapp.com/changelog/)
	- Alfred 5.5 has the Text View Stephen mentioned
- [Alfred - Bypass for Shortcuts | ThoughtAsylum](https://www.thoughtasylum.com/alfred/alfred_bypass_for_shortcuts/)
- [Alfred - Conductor for Keyboard Maestro | ThoughtAsylum](https://www.thoughtasylum.com/alfred/alfred_conductor_for_keyboard_maestro/)
- [Keyboard Maestro 11.0.3: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Doctor Drafts | Doctor Drafts is an Alfred workflow for use with the Drafts app by AgileTortoise. This site provides documentation for the use of this workflow.](https://doctordrafts.thoughtasylum.com/)
- [Drafts | Where Text Starts](https://getdrafts.com/)
- [Posts | Stephen Millard (ThoughtAsylum/@sylumer)](https://buymeacoffee.com/sylumer/posts)
	- Stephen's monthly roundups
- [Introducing Whisper | OpenAI](https://openai.com/index/whisper/)
- [Obsidian - Sharpen your thinking](https://obsidian.md/)
- [Obsidian Canvas - Visualize your ideas](https://obsidian.md/canvas)
- [GNU Aspell](http://aspell.net/)
- [TextSoap List Content Management | ThoughtAsylum](https://www.thoughtasylum.com/2023/11/30/textsoap-list-content-management/)
- [TextSoap - Automate Your Text Cleanup](https://textsoap.com/mac/)
- [Templater - Obsidian Plugin](https://silentvoid13.github.io/Templater/introduction.html)
- [Dataview - Obsidian Plugin](https://blacksmithgu.github.io/obsidian-dataview/)
- [Automators Obsidian Vault · GitHub](https://github.com/sylumer/automators)
- [Automators Talk | Forum](https://talk.automators.fm/)

# Transcription
  
| Time Index | Transcription                                                                                           |
| :--------- | :------------------------------------------------------------------------------------------------------ |
| 00:00      | Hello, and welcome to Automators, the podcast where we talk about how to grab your technology            |
| 00:07      | and encourage it to do your bidding for you.                                                            |
| 00:09      | I'm Rosemary Rashid and joined, as always, by David Sparks.                                             |
| 00:12      | Hey, David, how are you?                                                                                |
| 00:13      | Rose, I am so ready to talk automation.                                                                  |
| 00:16      | We got one of my favourite guests on the show today.                                                     |
| 00:19      | Welcome to the show again, Stephen Millard.                                                             |
| 00:21      | Thank you very much.                                                                                    |
| 00:23      | Millard?                                                                                                |
| 00:24      | Millard?                                                                                                |
| 00:25      | How do I do that, Stephen?                                                                              |
| 00:28      | Millard, where I'm from, but it does change around the UK, so.                                          |
| 00:31      | I want to get that right.                                                                               |
| 00:33      | Stephen Millard, but Stephen is one of our favourite automators, as always, brings so                    |
| 00:38      | much to the show, and Stephen, welcome back.                                                            |
| 00:43      | My pleasure to be here.                                                                                 |
| 00:44      | Thanks for inviting me back.                                                                            |
| 00:45      | Well, thank you for coming back, because we had you on the show a couple of years ago,                  |
| 00:49      | and I will link to that episode in the show notes for folks.                                            |
| 00:54      | It feels like you were producing a lot of great stuff before we had you on the show,                    |
| 00:59      | but it feels like since you've been on the show, you seem to have just gone wild in                     |
| 01:04      | the best of senses, because you've been producing so many automation-related things, and I feel         |
| 01:09      | like I blink, and there's yet another [[Alfred]] action or series of actions, because it's                  |
| 01:15      | a workflow which contains God knows how many actions in each case, or there's something                 |
| 01:20      | new on your blog about using [[TextSoap]] for handling things and so on, and it's really                   |
| 01:27      | exciting to see what you've been doing, and also what you're doing with [[Alfred]] as well,                 |
| 01:33      | because I find sometimes when I look at these things, I've been exploring some of what you've           |
| 01:37      | been doing, especially recently.                                                                        |
| 01:39      | I look at it and go, oh, that's really cool, that's cool, but maybe it's not for me, and                |
| 01:44      | sometimes I look at it and I go, why did I not think of this myself?                                    |
| 01:46      | I need this in my life.                                                                                 |
| 01:49      | So you have a lot of [[Alfred]] actions.                                                                    |
| 01:53      | Let's put it that way.                                                                                  |
| 01:54      | Do you have a favourite [[Alfred]] workflow that you've created for yourself?                                |
| 01:59      | To be honest, I just create the workflows when I find a need for them, so at the time, they're          |
| 02:05      | become my favourite for whatever reason it is that I've started doing that, so I'm just                  |
| 02:11      | bumping into ways of wanting to do things faster or better, and quite often I launch                    |
| 02:17      | a lot of things from [[Alfred]], and that's just my natural place to go for so many things,                 |
| 02:22      | and then they end up just being the ideal solution at the time, and it might be my favourite             |
| 02:29      | for a few months, and then I'll run across another problem, come with something else,                   |
| 02:35      | they're kind of like trying to choose between your children, they're all great in their                 |
| 02:39      | own way, and whenever I use them, it's like, oh, I'm so glad I built that two years ago,                |
| 02:44      | or five months ago, or yesterday.                                                                       |
| 02:47      | Well, and for folks who don't know Stephen, he's a computer professional, but he's also                  |
| 02:52      | an automator, and always looking for creative ways to find easy solutions.                              |
| 02:57      | He just really fits in the wheelhouse of the show.                                                      |
| 03:00      | Stephen, I'll tell you, I'm very picky about RSS feeds, but to me, [ThoughtAsylum](https://thoughtasylum.com), which                 |
| 03:05      | is Stephen's website, [thoughtasylum.com](https://thoughtasylum.com), is one of my favourite RSS subscriptions, because                |
| 03:11      | it is 100% bang for buck.                                                                               |
| 03:13      | You don't post every day, but every time you post, it's something that I always stop and                |
| 03:17      | pay attention to.                                                                                       |
| 03:18      | I've kind of got your RSS put off to the side, so I always make sure I don't miss it in the             |
| 03:24      | firehose of other things that are coming through, and you write and do stuff with [[Alfred]], [[Obsidian]],     |
| 03:32      | [[Shortcuts]], [[Drafts]], a lot of the stuff we talk about here on the show, so obviously we love              |
| 03:37      | having you on.                                                                                          |
| 03:38      | Thank you.                                                                                              |
| 03:39      | That's very kind.                                                                                       |
| 03:40      | I try and get something out every month, maybe a couple times a month, but it all depends               |
| 03:45      | on life gets in the way, work gets in the way, so I'm a little limited by that, but                     |
| 03:51      | I try and get something out there at least once a month.                                                |
| 03:54      | The first topic we're going to talk about with you today is [[Alfred]], because not only                    |
| 03:58      | are you a power user of [[Alfred]], you also are one of, in my mind, the leading plugin developers.         |
| 04:04      | You come up with ideas, and you make plugins for [[Alfred]], you've got the skills, you've                  |
| 04:09      | made several of them over the years, several of them are in my daily driver, but I actually             |
| 04:13      | wanted to ask you before we even got into them.                                                         |
| 04:17      | There's a new kid on the block, [[Raycast]], Rose and I have talked about it on the show.                   |
| 04:22      | I can tell you that I prefer [[Alfred]] just because of the plugin architecture and the plugins             |
| 04:28      | out there, but I was curious, have you looked at [[Raycast]], or are you just 100% in with [[Alfred]]           |
| 04:33      | at this point?                                                                                          |
| 04:35      | When [[Raycast]] was first surfacing on the scene, I did take a look at it then to see how it               |
| 04:42      | compared to [[Alfred]], and at the time, it was very similar, and there was kind of nothing                 |
| 04:48      | to get me to jump ship, if you like.                                                                    |
| 04:50      | I'd already invested a lot of time and effort in [[Alfred]], so I ended up just staying, but                |
| 04:55      | it's a phenomenally powerful platform with, it doesn't have workflows, but I think developing           |
| 05:02      | your own plugins, things like that, I think if you're a [[Node.js\|Node]] developer, it's very straightforward       |
| 05:06      | and very powerful today.                                                                                |
| 05:07      | Yeah, I was curious if that's on your radar or not.                                                     |
| 05:11      | Yeah, I think at this point, [[Alfred]] is kind of like where all my eggs are at the moment,                |
| 05:16      | but it's not said, never change.                                                                        |
| 05:19      | Yeah, and that's kind of my feeling too.                                                                |
| 05:21      | When people tell me that they prefer [[Raycast]], I don't begrudge them, I think, use whatever              |
| 05:25      | works for you, but I think it's absolutely a usable app.                                                |
| 05:29      | I actually subscribe to it because I want to keep up with everything for the show, but                  |
| 05:35      | I've been on my own journey.                                                                            |
| 05:36      | I mean, I started with [[Quicksilver]], and then for many years, I was a big [[LaunchBar]] person,             |
| 05:40      | but [[Alfred]] swayed me with the customisation and workflows, but I'm glad you're still                    |
| 05:47      | making stuff for it.                                                                                    |
| 05:48      | I think why don't we just dig in and talk about some of the cool workflows that you've                  |
| 05:52      | made for [[Alfred]].                                                                                        |
| 05:53      | We're going to link in the show notes.                                                                  |
| 05:55      | He actually has an [[Alfred]] project page on his website, so if you just follow that in                    |
| 06:00      | the show notes, you'll be able to go and see them all, and there's a lot of them.                       |
| 06:03      | Yeah, there really is.                                                                                  |
| 06:05      | And the things that I love in particular, and this is something where I just think it                   |
| 06:11      | is a little bit of an extra mile, because a lot of the folks who create automation things               |
| 06:16      | like myself, we're good at the technical side of things, we're not so good at the creative              |
| 06:20      | side of things, and you have some lovely names for each of your big workflows, so you've                |
| 06:26      | got [[Bypass]], you've got [[Conductor]], you've got [[Doctor Drafts]], and so on.                                  |
| 06:30      | And I really like the fact that you've actually got some names for it, and also, as we go               |
| 06:36      | through these, we're going to have to link folks to the specific one, because some of                   |
| 06:42      | these are so large that you've actually created their own documentation sites for them, which           |
| 06:47      | is absolutely amazing, because I've been playing with [[Cluster]] a bit, because I'm a big [[Bunch]]            |
| 06:52      | user, and it's so useful for me all the time, but it's just one of those things where it's              |
| 07:00      | like, okay, cool, so you start with [[Shortcuts]], and then everything just progresses down the             |
| 07:04      | nerd rabbit hole in the best possible way.                                                              |
| 07:07      | Well, Rose has invoked it, so why don't we talk about [[Cluster]] and [[Bunch]]?                                |
| 07:12      | That's one of your newer ones.                                                                          |
| 07:14      | Yeah, that's the most recent workflow that I've created for [[Alfred]], and it's for controlling            |
| 07:24      | the [[Bunch]] app by [[Brett Terpstra]].                                                                 |
| 07:28      | And I've been looking at [[Bunch]] on and off for quite a number of years, and I was convinced              |
| 07:34      | it should fit into my day-to-day workflow, but it never, I never quite found the right                  |
| 07:40      | time or the right needs to start working with it, and I knew that at some point I would,                |
| 07:46      | and earlier this year, I did.                                                                           |
| 07:48      | I came across something where it's like, actually, been able to set this up as bunches to automatically |
| 07:52      | launch applications and files and things, set up my workspace, that's exactly what I                    |
| 07:57      | need at this point in time.                                                                             |
| 07:59      | So what was it that pulled you over the edge?                                                           |
| 08:01      | Because I'm in the same spot, like I built all these setup workflows in [[Keyboard Maestro]]                |
| 08:07      | years ago, and it's like, I know [[Bunch]] is good, it's made by a friend, but I can never                  |
| 08:13      | get myself to invest the time to figure it out and set it up, but what was it that pulled               |
| 08:17      | you in, Stephen?                                                                                        |
| 08:19      | Yeah, so I'm naturally very good at focusing.                                                           |
| 08:23      | I'm very fortunate in that sense.                                                                       |
| 08:25      | I can have lots of things going out on around me, and I can be laser focused on just one                |
| 08:29      | thing.                                                                                                  |
| 08:30      | And because of that, I can have lots of things open on my Mac, and it's fine.                           |
| 08:36      | I don't get distracted by anything, I can just focus and switch, and context switching                  |
| 08:42      | takes a little bit of time, but I don't get distracted by things, I don't get pulled away               |
| 08:45      | from things, and that was fine to do that.                                                              |
| 08:49      | But I was starting to work on a project to move things around, such that I needed a better              |
| 08:54      | way of setting things up to make it more efficient to switch to that, because it was certainly          |
| 09:00      | I had so many moving parts, I just needed it to maximise the use of all my screens on                   |
| 09:06      | my Mac and things like that, and get things going and closed as quickly as possible.                    |
| 09:11      | And that was kind of the thing that I needed to kind of push me into it.                                |
| 09:15      | It wasn't like I need to context switch, which I think is what most people have, but I need             |
| 09:21      | to actually set up my environment in just the way I needed in a very short space of                     |
| 09:28      | time.                                                                                                   |
| 09:29      | And this is what the things I find for me is extremely handy with [[Bunch]].                                |
| 09:33      | I have some applications for work, which take a little while to open.                                   |
| 09:37      | And so if I know that I'm going to be going off and doing this sort of thing, for example,              |
| 09:42      | if I'm going to be going and spelunking and doing some database querying, I'm going to                  |
| 09:46      | need the database app open, I'm going to need [[BBEdit]] open to dump some things, I'll need               |
| 09:51      | numbers open, and so on.                                                                                |
| 09:53      | And I just want to make sure that I have all of those right there ready to go.                          |
| 09:57      | And so for me, it's not so much about turning on a particular focus.                                    |
| 10:04      | It's more about having the tools at the ready, because it's quite frustrating to be like,               |
| 10:08      | I just need to paste, no, I can't run the query yet, because it's not actually open                     |
| 10:13      | the application, let alone connected to the database.                                                   |
| 10:16      | So being able to set that up in advance is really handy.                                                |
| 10:19      | And one of the things that I've been trying to do a little bit more recently is refining                |
| 10:23      | my bunches and editing them, and that's why I found [[Cluster]] is quite helpful, because                   |
| 10:29      | I can actually just jump straight into editing a bunch from there.                                      |
| 10:32      | I know I can do it from the menu bar if I click on the bunch icon, and then I find the                  |
| 10:37      | bunch and I press option and I click on it, it can open it for editing.                                 |
| 10:42      | But I much preferred the approach of, I'm just going to quickly open this one through                   |
| 10:46      | [[Alfred]] and tweak it and done and save and move on.                                                      |
| 10:50      | And that makes it a lot faster for me.                                                                  |
| 10:53      | Yeah, that very much resonates with kind of what I was finding.                                         |
| 10:57      | I think I must my previous bits of work, I'd maybe have two, three applications open and                |
| 11:02      | using them in tandem.                                                                                   |
| 11:04      | But yeah, this other piece of work I was doing, it was more like nine or 10 different apps              |
| 11:10      | at different times.                                                                                     |
| 11:11      | So that was the real driver for it, I think.                                                            |
| 11:15      | Yes, yes.                                                                                               |
| 11:17      | And especially when it's not just specific applications, but also you need certain files                |
| 11:21      | and so on, that can get a little bit tricky over time.                                                  |
| 11:24      | So that's definitely been handy for me.                                                                 |
| 11:28      | And it's also nice to just be able to be like, okay, yeah, so it's this time, that means                |
| 11:33      | that I am going to attend this meeting.                                                                 |
| 11:35      | So yes, hide the other things on my machine and just open [[Microsoft Teams]] so that I can                 |
| 11:42      | join that meeting, which usually results in [[Microsoft Teams]] has encountered a problem.                  |
| 11:47      | I seem to find that happens every time I open Microsoft Teams, but that's not Bunch's fault.            |
| 11:51      | That is just a [[Microsoft Teams]] issue according to everybody on my team at work.                         |
| 11:55      | So yeah, this is extremely handy.                                                                       |
| 11:58      | And I have to say, I do appreciate the app beta section just because it does mean that                  |
| 12:06      | you've actually thought about people who like me, who want to just live in beta land and                |
| 12:10      | run betas on everything, pretty much except my Mac operating system.                                    |
| 12:14      | So thank you for that.                                                                                  |
| 12:16      | My pleasure.                                                                                            |
| 12:17      | I have to admit, though, that I did that for myself because I'm similarly inclined.                     |
| 12:23      | Well, that's just because you're an automation nerd.                                                    |
| 12:26      | So Stephen, I want to go through this a little bit deeper because I'm sure there's people               |
| 12:30      | listening who are a [[Bunch]] users or a [[Bunch]] curious.                                                     |
| 12:33      | So what does [[Cluster]] bring that you don't get already if you have [[Bunch]] installed?                      |
| 12:39      | Yeah, so, I mean, it's a way of interacting with the Bunch application.                                 |
| 12:46      | So a lot of my [[Alfred]] workflows are very much based around streamlining interactions with               |
| 12:52      | existing Mac applications.                                                                              |
| 12:55      | So they're not doing anything fundamentally new.                                                        |
| 12:57      | They're just trying to smooth out some of that friction in having to dig through menus                  |
| 13:03      | and other apps and things like that.                                                                    |
| 13:04      | You can just trigger it straight away.                                                                  |
| 13:06      | So as well as opening a bunch or closing a bunch, and as Rosemary said, editing a bunch,                |
| 13:14      | there's various other bits and pieces I've included in there.                                           |
| 13:18      | The [[Bunch]] documentation by [[Brett Terpstra\|Brett]] is absolutely fantastic.                                               |
| 13:21      | I find myself referencing that quite a bit when creating bunches and trying to tell them.               |
| 13:25      | So I added in a way to just quickly jump to that site.                                                  |
| 13:29      | But when I was working with [[Bunch]], I also found things like I would have bunches that                   |
| 13:35      | I'd be testing things with, and maybe I didn't want to have them showing up all the time.               |
| 13:40      | So I actually built into Cluster a way to switch the folders that [[Bunch]] looks at to                     |
| 13:46      | find out where your bunches are.                                                                        |
| 13:47      | And so I could actually switch which bunches are available to me based on what I was doing              |
| 13:53      | at the time, whether I was developing things for [[Cluster]], trying things out in [[Bunch]], or                |
| 13:58      | just working on something else.                                                                         |
| 14:00      | So that's the sort of thing people are trying to focus on and things like that to kind of               |
| 14:03      | help you even context switch and not distract yourself by selecting which bunches you've                |
| 14:08      | got available to you and things like that.                                                              |
| 14:10      | And then I think I also added some stuff around backups and some other bits and pieces.                 |
| 14:14      | But I basically tried to fit everything that I could figure out a way to access that was                |
| 14:20      | in [[Bunch]] into [[Cluster]] and then add a few extra bits and pieces on top.                                  |
| 14:26      | Yeah, like this might be enough for me to, I'm a nerd, I always want to play with this                  |
| 14:31      | stuff anyway.                                                                                           |
| 14:32      | But it is really nice the way you've set this all up was I think BBO is the [[Alfred]] command              |
| 14:39      | to open a new bunch and you can jump between them and [[Alfred]] all day long using these commands          |
| 14:46      | you've set up.                                                                                          |
| 14:48      | Congratulations on getting this thing done.                                                             |
| 14:49      | And like Rose said, the documentation that you do is so impressive for this stuff.                      |
| 14:54      | If you're listening and sometimes the stuff we talk about feels like it's going a little                |
| 14:59      | over your head.                                                                                         |
| 15:01      | Stephen does a great job of explaining how it works and documenting everything on his                   |
| 15:06      | website.                                                                                                |
| 15:07      | This is some of the most well-documented [[Alfred]] plugins probably from anybody.                          |
| 15:12      | I hope so.                                                                                              |
| 15:13      | Yeah.                                                                                                   |
| 15:14      | Yes.                                                                                                    |
| 15:15      | I also appreciate the fact that when you import your bunches into [[Alfred]], there is the option           |
| 15:21      | to have a description and various preferences and so on that people can use and you've actually         |
| 15:27      | taken advantage of that which means that when I'm looking at the bunches, when I'm looking              |
| 15:34      | at the workflows, I've got a bunch on the brain, if I'm looking at the workflows in                     |
| 15:37      | [[Alfred]], I can use the command comma for going to the preferences to see the options and                 |
| 15:43      | do things like enabling the bunch beta control and enabling audio completion or not as is               |
| 15:49      | actually my preference and even tweaking the keywords that are used to run things.                      |
| 15:55      | I feel like this is something that I know you've probably partially done this because                   |
| 16:01      | you're sharing it with other people, but I feel like this is actually an automation                     |
| 16:04      | lesson that I need to learn for myself as well of adding a bit more documentation onto                  |
| 16:10      | things at times so that I remember why does this have, for example, I was lucky to                  |
| 16:17      | [[Keyboard Maestro]] macro earlier, why is there a variable named ultimate your start set to                    |
| 16:21      | zero?                                                                                                   |
| 16:22      | This is a very good question.                                                                           |
| 16:23      | I don't know.                                                                                           |
| 16:24      | I'm going to have to go and investigate that one off to the show, but I feel like if I'd                |
| 16:27      | added some documentation for myself, then that could be quite useful and I don't necessarily            |
| 16:31      | need a whole manual, but it's really nice when you go to look at something like [[Cluster]]                 |
| 16:35      | or [[Conductor]] or [[Bypass]] that all of the data is there to actually see how it works.                      |
| 16:42      | So it is interesting that you called out the keyboard shortcuts, the keywords that you                  |
| 16:49      | can enter in the fact you can customise them.                                                             |
| 16:51      | That's actually the first time I've done that with one of the workflows that I've got.                  |
| 16:55      | So there's a really good chance that sometime over the next few months I will be going back             |
| 16:59      | to the other workflows and adding in even more configuration so that people can customise               |
| 17:04      | that more easily as well.                                                                               |
| 17:06      | But even though you haven't necessarily done that yet, there's still, in the other ones,                |
| 17:11      | there's options for setting the delay in [[Conductor]] and things like that, which is all                  |
| 17:16      | appreciated and there's also the editing method set in bypass, which is either command line             |
| 17:21      | or a [[URL Schemes\|URL scheme]] so that you can choose how to edit things.                                              |
| 17:26      | It's not that you have no options there, you've just been taking advantage of [[Alfred]] as updates         |
| 17:31      | as well, I presume.                                                                                     |
| 17:32      | Yeah, yeah, there's actually been some recent ones where one of the main aspects is you can             |
| 17:38      | now almost pop up a little text editor and text viewer, so that will be making an appearance            |
| 17:44      | in a few places as well, I've already shared that with a few people who've created stuff                |
| 17:48      | with me online as to how they can do that, so that will be making an appearance in some                 |
| 17:53      | of them too.                                                                                            |
| 17:54      | Yeah, another [[Alfred]] plugin you have that I use daily is [[Bypass]].                                        |
| 18:00      | It's one that can run shortcuts and we want to run shortcuts from [[Alfred]].                               |
| 18:05      | Why not?                                                                                                |
| 18:06      | It's so much faster than trying to do it the official ways through [[Apple]].                               |
| 18:12      | Tell us a little bit about that, how it works and what led you to build it.                             |
| 18:16      | Sure, yeah.                                                                                             |
| 18:17      | So, with a lot of the names of my workflows, I kind of base it on something about the app               |
| 18:24      | it's controlling us and it's doing so.                                                                  |
| 18:27      | [[Cluster]] was for a cluster of grapes is another way of describing a bunch of grapes.                     |
| 18:32      | [[Bypass]] is another idea of like taking a shortcut, you take the bypass and yeah, so it's intention       |
| 18:38      | started out as just being able to run shortcuts for some reason my Mac [[Spotlight]] just didn't            |
| 18:44      | seem to like indexing shortcuts so I just couldn't get them through [[Spotlight]] and it's                  |
| 18:48      | like, well, I prefer them in [[Alfred]] anyway, so it was pretty straightforward to build                   |
| 18:54      | something because [[Shortcuts]] at the time had introduced a command line option to launch a                 |
| 19:01      | shortcut and that also came with some other options that I just kind of built those in                  |
| 19:06      | so you can run it, you can run it with some input, you can edit the shortcut if you wanted              |
| 19:12      | to go straight into that and then I started eventually I think that was the first release               |
| 19:18      | that I did and then subsequently I looked at other things and it's like other things                    |
| 19:21      | that I was wanting to do with it and like probably many people who listen to the podcast              |
| 19:25      | I have a [[Stream Deck]] and I wanted to be able to launch shortcuts through that and I think               |
| 19:30      | at the time, I don't think the plugin was there and I think I was also looking at moving                |
| 19:35      | to [[BetterTouchTool]] which doesn't give you the same plugin control you would get                   |
| 19:41      | with the Elgato software so I started looking at launching shortcuts via URLs and so I took             |
| 19:52      | that built it into [[Bypass]] so that I could get very quickly the URL to run so the last shortcut             |
| 20:02      | that I'd edited or the most recent shortcut I'd created by name and then I kind of went                 |
| 20:09      | well okay I'm doing it by URL maybe other people want to do it in another way so I did                  |
| 20:12      | things for like being able to do it via a [[Shell Scripting\|shell script]] call so that same command line                   |
| 20:16      | call that's using behind the scenes and [[AppleScript]] as well and I added a few other                 |
| 20:22      | bits of bells and whistles but it was very much, it was an organic growth out of what                   |
| 20:27      | I needed to do at the time, it started off being able to launch it then edit it and then                |
| 20:31      | been up to launch in other places.                                                                      |
| 20:33      | I'm curious how many shortcuts you have because I had the same problem with [[Spotlight]] just              |
| 20:39      | refusing to index my shortcuts and I think that over about 1500 it definitely goes a                    |
| 20:45      | bit wonky and I'm wondering if there's a lower number from there that maybe we can actually             |
| 20:50      | feed back to the [[Apple]] folks that hey if you have more than this number of shortcuts, [[Spotlight]]         |
| 20:54      | just goes yeah.                                                                                         |
| 20:55      | At that point I probably had about 800-900, I think I'm down to about 500-600 at the                    |
| 21:03      | moment.                                                                                                 |
| 21:04      | I have been into the 1000 and something but I do have a cull every now and then with some                 |
| 21:10      | measure of success but I dread to think how many untitled shortcuts I have in shortcuts                 |
| 21:16      | at the moment.                                                                                          |
| 21:17      | Oh, too many, too many.                                                                                 |
| 21:19      | Well the thing about this, just to give you a concrete example of your listing at home                  |
| 21:25      | is if you install the [[Bypass]] workflow in [[Alfred]] and you open [[Alfred]], you just type `sc `      |
| 21:33      | then it indexes all your shortcuts and it can search them by name.                                      |
| 21:37      | So you type `sc ac` for action button or whatever and it would just get to that                     |
| 21:44      | shortcut and you could run it that fast.                                                                |
| 21:47      | So `sc ` shortcut name, you run it, it's very fast but he's gone to another level.                   |
| 21:53      | Like if you type `scedit` then space then you can open that shortcut to edit in [[Shortcuts]].               |
| 21:59      | One of my favourites that I didn't know that I'd use is `scurl` and if you type `scurl `               |
| 22:05      | it gets you a [[x-callback-url\|URL callback]] to that shortcut so you can embed it in an automation somewhere              |
| 22:10      | else.                                                                                                   |
| 22:12      | So all the kind of automator stuff you want to do is this is really cool and all that                   |
| 22:19      | just runs out of your [[Alfred]] command line and I kind of like that.                                      |
| 22:25      | I know that you could like in, for instance, a spotlight, it searches for shortcuts without             |
| 22:34      | having a qualifier like the `sc ` I was just talking about but I found that I don't                  |
| 22:39      | prefer that because I don't like seeing my shortcuts mixed in with all my other search                  |
| 22:43      | results the way you've implemented it Stephen allows me to just search [[Shortcuts]] without                |
| 22:50      | getting other stuff mixed in and it actually is easier for people with a lot of shortcuts               |
| 22:54      | I think.                                                                                                |
| 22:55      | Yeah.                                                                                                   |
| 22:56      | As someone who has quite a few, yes, I would agree with that.                                           |
| 23:01      | I forgot to mention about the URL one is a top tip.                                                     |
| 23:05      | If you rename your shortcuts frequently shortcuts as well as being able to run them by name             |
| 23:10      | you can run them by ID as well and so there's a setting in [[Bypass]] where you can actually                |
| 23:15      | say it will actually when you generate a URL give me the ID version so then if you do put               |
| 23:20      | that URL somewhere like on a [[Stream Deck]] and then subsequently rename your shortcut it will             |
| 23:26      | still run it.                                                                                           |
| 23:28      | Of course you did that, I love it.                                                                      |
| 23:32      | It is a local URL it's not the [[iCloud]] URL you get when you share a shortcut but it's fine               |
| 23:39      | for your local use.                                                                                     |
| 23:41      | Yeah, absolutely.                                                                                       |
| 23:42      | Yeah, so it's just using the [[Shortcuts]] [[URL Schemes\|URL scheme]] so yeah entirely local to do that.                    |
| 23:48      | So if you're listening you've got [[Alfred]] and you like [[Shortcuts]] there's one you definitely              |
| 23:53      | want to go download and start using and there is a cousin to this [[Alfred]] plugin [[Conductor]]               |
| 24:01      | I feel like [[Bypass]] and [[Conductor]] are related tell us about that.                                        |
| 24:06      | I think they're very much where I can't remember which exactly came first but I think I created         |
| 24:12      | them around the same sort of time.                                                                      |
| 24:14      | Yeah, I have probably at least as many [[Keyboard Maestro]] macros as I do shortcuts and so I               |
| 24:23      | had a similar kind of issue and like you said it's almost like a cousin or a brother                    |
| 24:30      | to it or a sister to it.                                                                                |
| 24:32      | It's a very similar idea it allows you to kind of search for a macro by name and run                    |
| 24:38      | it or edit it because [[Keyboard Maestro]] has additional options you could enable or disable               |
| 24:45      | a macro I don't do that very often but you can do that.                                                 |
| 24:49      | Similarly if you can work with groups of macros you can I think Rosemary you mentioned earlier          |
| 25:00      | that there's a little delay that you can add so that as well as running a macro you can                 |
| 25:06      | actually go delay and run a macro and that was something I added because I was trying                   |
| 25:11      | to do a video of something at the time I was like I wish I could just pause this while                  |
| 25:14      | I set something up and then it'll capture it without me having to edit too much and                     |
| 25:18      | so I just added it in and that was quite useful at the time and then I recently I was doing             |
| 25:26      | quite a bit of work with [[Keyboard Maestro]] and not having much luck and spending a lot                   |
| 25:30      | of time dipping in and out of the log files and I recently added an option to just open                 |
| 25:34      | the log files as well but I tried to do it in such a way as there's not just one log                    |
| 25:39      | file with [[Keyboard Maestro]] there's actually several different types and so I tried to                   |
| 25:44      | feature proof that a little bit and so it dynamically goes and looks at what log files                  |
| 25:48      | are available to you and we'll offer those to you to open up directly.                                  |
| 25:53      | Yes, yeah that is something that I occasionally run into with a [[Keyboard Maestro]] that and               |
| 26:00      | I did have to change the keyboard shortcut that happens through `⌘R` because that                  |
| 26:08      | triggers recording and in my brain `⌘R` is run as in like go and run this micro                    |
| 26:16      | and yeah so I kept hitting `⌘R` that caused a few problems to say the least so                     |
| 26:21      | I had to figure out the better way to solve that problem which was to just go into the                  |
| 26:27      | [[Keyboard Maestro]] keyboard shortcut settings rather than system preferences and change                   |
| 26:31      | it specifically for [[Keyboard Maestro]] which solved the problem quite nicely but yes it                   |
| 26:35      | is very handy to have a conductor there to give us access to control of those things                    |
| 26:41      | because just like David said I personally like my brain has or like if I open something                 |
| 26:48      | like spotlight [[Alfred]] whatever my brain knows I want to run a shortcut I want to run a         |
| 26:54      | [[Keyboard Maestro]] macro and so typing those two letters to guarantee or just a few letters to guarantee           |
| 27:00      | that I get the result that I am looking for within that is a massive bonus for me which                 |
| 27:05      | is one of the reasons why I do love the the [[Alfred]] workflow so you've created.                          |
| 27:10      | Well, it's music my is that you find it useful.                                                         |
| 27:13      | Definitely.                                                                                             |
| 27:15      | And then there's the big one [[Doctor Drafts]] how'd you come up with the name [[Doctor Drafts]] by the               |
| 27:25      | way.                                                                                                    |
| 27:26      | Okay, so essentially [[Doctor Drafts]] is my workflow for working with the [[Drafts]] app by [[Greg Pierce]]           |
| 27:33      | "*AgileTortoise*" and as I'm sure many of you might know I'm a huge [[Drafts]] user I've been                   |
| 27:39      | using it for a very long time and I wanted a way to control that and as I was working                   |
| 27:45      | with it and the obvious kind of code put in for drafts was `dr` every time I had a command               |
| 27:53      | it was doctor something and so it was like well, I might as well call it "*[[Doctor Drafts]]*".                    |
| 27:58      | So that's where that name came from.                                                                    |
| 28:01      | And so [[Doctor Drafts]] is your it is your big one and it is it gives you a lot of control over               |
| 28:09      | drafts all from [[Alfred]] tell us what some of your favourite features are and and how people               |
| 28:16      | are using it that you've been hearing about.                                                            |
| 28:19      | Yeah, so [[Doctor Drafts]] is one that I created a little while ago, but it's actually had quite               |
| 28:26      | a lot of revisions to it, so it's almost like a minor version of 10 now it's been like 10               |
| 28:35      | sort of iterations where I've been adding new features and the initial aim of it was                    |
| 28:42      | literally just try and do as much as I could with with working with [[Drafts]] so particularly              |
| 28:48      | like creating new drafts and I just wanted a really quick way to interact and not just                  |
| 28:54      | a, [[Drafts]] comes with a global entry system but I wanted to be able to not just add things                |
| 29:00      | but pull things out trigger things, open up various as many things as I could and [[Drafts]]                |
| 29:07      | is a really automatable application and gives you lots of options for working with it.                  |
| 29:13      | So I kind of dove into that and I did hit some challenges with it and I ended up having                 |
| 29:21      | to more or less reverse engineer the [[Drafts]] database that sits behind it all to figure                  |
| 29:26      | out how I could interact with some of the things.                                                       |
| 29:28      | So my approach with that was always I'm only reading I'm never updating that database directly          |
| 29:34      | that's for the [[Drafts]] to do, but there are ways to do things like pull out additional                   |
| 29:40      | information about [[Drafts]] by being able to like dig in and pull some of that out so there's              |
| 29:45      | a bit of I think [[Python]] code in there that's doing some of that.                                        |
| 29:49      | And in terms of what I use it for, my main use is actually not any of the things that                   |
| 29:57      | are built in, which sounds really strange.                                                              |
| 30:01      | The way I actually designed this and a lot of the other workflows is under the hood they                |
| 30:08      | use what's called external triggers and it's ways that you can call a small flow a small                |
| 30:17      | set of blocks within the workflow to carry out something and things that you see in the                 |
| 30:23      | [[Alfred]] bar when you start typing in will trigger some of those and they will pass information           |
| 30:28      | in.                                                                                                     |
| 30:29      | But because I did it that way, that allows you to create your own [[Alfred]] workflow that's                |
| 30:36      | separate to [[Doctor Drafts]] and have it call the external triggers that are inside of [[Doctor Drafts]].            |
| 30:42      | So it almost becomes like a function library in coding terms so you can say you can call                |
| 30:50      | something inside of [[Doctor Drafts]] to do work for you and so I actually have various personal               |
| 30:55      | workflows that I've built that will do particular things for me, grab information from certain          |
| 31:01      | places, put that into [[Drafts]] in a certain way and do something else subsequently.                       |
| 31:06      | So [[Doctor Drafts]] is doing the heavy lifting, but I've kind of got my own personal additional               |
| 31:12      | version that kind of sits alongside.                                                                    |
| 31:14      | Can you explain one of those in further detail just so people can get an idea?                          |
| 31:18      | Yeah, so I do have some some files that are coming in onto my machine from external sources             |
| 31:29      | out on the internet and I can trigger something in [[Alfred]] in one of my personal workflows               |
| 31:37      | that will go and read in some of that data.                                                             |
| 31:41      | It will then take it and push it into a workflow that calls something in [[Doctor Drafts]].                    |
| 31:48      | Now if I was just taking files and pushing them straight into [[Drafts]], and it has the facility            |
| 31:53      | to do that, it would just get imported directly, but doing it this way allows me to set things          |
| 31:58      | like tags on it and set some of the additional meta data.                                                |
| 32:02      | So that ensures that it then ends up in the correct workspace or it will show up in the                 |
| 32:08      | correct workspace for me and it will correctly tag everything else like that.                           |
| 32:12      | So I can trigger this to ultimately go through, iterate through and pick out each of the files          |
| 32:17      | that's available, tag them, send them into [[Drafts]] and then open up [[Drafts]] to the appropriate            |
| 32:24      | workspace for me.                                                                                       |
| 32:25      | Okay, and that's very specific to one of my particular needs, but there are lots of people              |
| 32:31      | out there.                                                                                              |
| 32:32      | I do get people contacting me to like similar, I want to do this.                                       |
| 32:35      | I want to set up a log and I want it to do it like this and I want them to like sync with               |
| 32:40      | [[Obsidian]] or something.                                                                                  |
| 32:41      | So I do get all sorts of queries where people want to kind of use [[Doctor Drafts]] and use it in              |
| 32:46      | that enhanced way.                                                                                      |
| 32:47      | There's a whole section on the website of, here's examples of ways you can build workflows               |
| 32:53      | like that and the common ones that people might want to build for themselves and tailor                 |
| 32:57      | for themselves.                                                                                         |
| 33:00      | That makes a lot of sense.                                                                              |
| 33:01      | Yeah, I find that I often end up doing this with my own automations where I end up sort                 |
| 33:05      | of breaking them down into, well, actually, I need this a little bit of functionality                   |
| 33:09      | in like six different places.                                                                           |
| 33:10      | So I'll make it into a sub macro in [[Keyboard Maestro]] or an independent shortcut that I                  |
| 33:16      | can call from four different shortcuts and so on and so forth because it just makes my                  |
| 33:21      | life easier to be able to do that.                                                                      |
| 33:23      | And so I'm glad to hear I am not the only weirdo automator out there because I consider                 |
| 33:28      | this the good kind of weird to be clear.                                                                |
| 33:30      | Yeah, now exactly that.                                                                                 |
| 33:32      | And in fact, just to go back to [[Cluster]] for a moment, one of the things that I always                |
| 33:37      | found frustrating with workflows in [[Alfred]] was that it was very linear.                                 |
| 33:42      | So it was the same as it's even more linear than [[Shortcuts]] in a way, but you go step by                 |
| 33:48      | step by step by step by step and then you come to the end and that's it done.                           |
| 33:55      | And as someone who used to be a programmer, I always wanted more, the idea of more like               |
| 34:03      | a function or a sub routine where you could call the flow, work through it and then come                |
| 34:10      | back to where you started and maybe call it again and come back to where you started.                   |
| 34:14      | And there wasn't that structure in there, but I did figure out a way of doing it and                    |
| 34:19      | I do actually use that in [[Cluster]].                                                                      |
| 34:22      | So if anyone is interested in that, [there's a blog post about it](https://www.thoughtasylum.com/2024/02/29/pseudo-functions-in-alfred-workflows), but take a closer                   |
| 34:26      | looking [[Cluster]] and you'll see that there's what I call [pseudo functions](https://www.thoughtasylum.com/2024/02/29/pseudo-functions-in-alfred-workflows) that I've built                |
| 34:30      | that allow you to kind of reuse code multiple times within a workflow without actually stopping         |
| 34:37      | at that point.                                                                                          |
| 34:38      | That makes sense.                                                                                       |
| 34:40      | It's amazing what you've done with [[Drafts]].                                                              |
| 34:44      | And it just depends on how much of a power user you are, but this is almost like a programming          |
| 34:49      | language around the application so you can build custom, like you say, you can build                    |
| 34:54      | custom functions to make it do whatever you're interested in.                                           |
| 34:59      | Very impressive.                                                                                        |
| 35:00      | And it was very much built with the intention of it being a bit like [[Automator]] or [[Shortcuts]].            |
| 35:06      | So you could reuse those blocks, all the code and scripting and everything that I've built              |
| 35:11      | will do the heavy lifting and all you have to do is give it the right data and it will                  |
| 35:15      | go and do it for you.                                                                                   |
| 35:18      | Stephen, we asked you to come on the show, we didn't realise it, but you've got a project               |
| 35:22      | up your sleeve that involves us here on the Automator's podcast.                                        |
| 35:26      | I do indeed.                                                                                            |
| 35:28      | It's a very exciting one, I hope.                                                                       |
| 35:31      | So it's something I've been working on for anyone who kind of follows me on, I do a monthly             |
| 35:37      | post about what I've been up to and for anyone who's been following along on that, I've been            |
| 35:42      | mysteriously mentioning a background project that I've been working on since December 2022.             |
| 35:53      | And it's to do with the Automator's podcast.                                                            |
| 35:55      | So I found that when I would be listening to episodes, really useful things would come                  |
| 36:02      | up and I'd go, oh, yeah, I'll make a mental note of that.                                               |
| 36:06      | Sometimes I would make a note of it at the time, sometimes I wouldn't be able to.                       |
| 36:10      | And sometimes I would just be elsewhere thinking about something, something would come up and           |
| 36:14      | I was like, I've heard that on the Automator's at some point.                                           |
| 36:19      | When did I hear it?                                                                                     |
| 36:20      | What was it exactly?                                                                                    |
| 36:22      | So [[Podcast Note to Drafts\|I do have a shortcut that I use to kind of capture information about where something is in the podcast]]. |
| 36:29      | If I kind of go, yeah, I really want to come back to that.                                              |
| 36:32      | It puts something in [[Drafts]] for me and off I go and that's great.                                   |
| 36:34      | But sometimes it's just a vague recollection.                                                           |
| 36:38      | And I decided that it would be really great if I had a way to go back and reference any                 |
| 36:44      | of the episodes and find more information and pull things out.                                          |
| 36:49      | And so around that time was a little bit of discussion about some GPT AI thing knocking                 |
| 36:56      | around.                                                                                                 |
| 36:57      | Sure.                                                                                                   |
| 36:58      | And there was something called [[Whisper]].                                                                 |
| 37:02      | And so at that point I started using [[Whisper]], which is an AI tool that you can use to take              |
| 37:10      | audio and produce text based translation of it.                                                         |
| 37:17      | I started using that to see if I could get it to work on the Automator's podcast episodes.              |
| 37:25      | And then I decided, well, it kind of works.                                                             |
| 37:27      | The results were a little off, shall we say?                                                            |
| 37:33      | So David, I'm sure you know that when you use [[Whisper]], "MacSparky" becomes "Max Barkey"                    |
| 37:38      | as well as many other things.                                                                           |
| 37:41      | And so I decided, well, there's a bit more work to this, but I'd really like to do something            |
| 37:46      | with it.                                                                                                |
| 37:47      | And then it was like, actually, it'd be really good.                                                    |
| 37:49      | What would be even better would be more like a wiki sort of thing.                                      |
| 37:52      | And it's like, what could I do that with?                                                               |
| 37:55      | Oh, [[Obsidian\|Obsidian's]] quite good, isn't it?                                                                    |
| 37:57      | So I use [[Obsidian]] a lot.                                                                                |
| 37:59      | I use it every day.                                                                                     |
| 38:00      | And I decided, well, maybe I could build an [[Obsidian]] vault based around the podcast episodes.           |
| 38:07      | So I could start with the [[Whisper]] translations and then I could go through and manually do              |
| 38:13      | some processing and maybe I could add some meta data and maybe I could add some links                    |
| 38:18      | out to different information.                                                                           |
| 38:20      | And kind of the idea grew a little bit and so did the scale that I decided I was going                  |
| 38:27      | to try and do this at.                                                                                  |
| 38:30      | So over the course of the past 18 months almost, I think it is, I've been working on putting            |
| 38:37      | something together.                                                                                     |
| 38:38      | I have to admit, it's not exactly where I wanted it to be.                                              |
| 38:42      | I wanted it to be absolutely perfect, but I've now got it to the point where I would                    |
| 38:48      | like to share it with people because I think it would be useful for everyone to have.                   |
| 38:53      | But it isn't, as I say, just this AI translation.                                                       |
| 38:58      | It's not just a translation.                                                                            |
| 38:59      | I'm attempting to do more than that.                                                                      |
| 39:01      | So I'm attempting to improve the AI translations.                                                       |
| 39:05      | And so I've applied lots of automation to building this vault to try and help with that.                |
| 39:12      | It's very cool.                                                                                         |
| 39:14      | You sent us a little link where we could get our own preview of this before the show.                   |
| 39:18      | And so I was having a poke around inside of it.                                                         |
| 39:20      | And I have to say it is very cool the way that you've put this together.                                |
| 39:24      | And obviously, you know, you've got a canvas in there, which opens in [[Obsidian]], which is                |
| 39:27      | something I haven't yet played with a lot, actually, personally.                                        |
| 39:31      | The canvas feature in [[Obsidian]] is kind of new.                                                          |
| 39:35      | It's not super new, but it's new enough that part of me is like, oh, new feature.                       |
| 39:38      | I'm not sure about that.                                                                                |
| 39:40      | And so, yeah, it's just one of those things where I've, it's nice to see an example of                  |
| 39:45      | how somebody is using this.                                                                             |
| 39:47      | But I really like the way that you structured this, where you've got the episodes.                      |
| 39:52      | You know, there's some events in there and, you know, methodologies and things like that                |
| 39:57      | where, you know, everything can link together.                                                          |
| 39:59      | And I feel like this is something that I have a similar problem in that I think, oh, that's             |
| 40:04      | a really great idea.                                                                                    |
| 40:05      | I need to make a note of that, or I'll remember that later.                                             |
| 40:08      | And I don't remember it later.                                                                          |
| 40:10      | And then I'm there going, where did I hear about that app that does like fitness widgets?               |
| 40:16      | So it's basically just like widgets on your home screen for fitness, but it's not the                   |
| 40:20      | fitness app.                                                                                            |
| 40:21      | And I don't remember what it's called.                                                                  |
| 40:22      | I just remember it's that.                                                                              |
| 40:23      | And it takes me like an hour and a half to eventually come up with, it's called peak.                   |
| 40:26      | And I heard about that on [[Cortex]] in a state of the apps episode like two years ago or                   |
| 40:31      | something.                                                                                              |
| 40:32      | And so trying to find, you know, all that information after the fact can be pretty challenging.         |
| 40:37      | And I love this as a wiki idea because, you know, there's so much stuff that, you know,                 |
| 40:43      | a lot of people would like to remember about the podcast where they're looking for something            |
| 40:48      | particular that was mentioned at some point.                                                            |
| 40:52      | And they don't know what episode it was on.                                                             |
| 40:54      | They don't remember what guest it was on.                                                               |
| 40:55      | They don't remember the topic that it was about.                                                        |
| 40:57      | It was just, there was this remark that linked to this particular thing.                                |
| 41:02      | And then from there, they'll be able to find whatever it is they're looking for.                        |
| 41:05      | So it's a very cool idea and I'm very excited to see this.                                              |
| 41:09      | I'm glad you proved the idea.                                                                           |
| 41:11      | Yeah.                                                                                                   |
| 41:12      | I mean, it's, I dread to think how many hours I've actually sunk into it, but the result                |
| 41:17      | is something I'm going to be able to build on and something that's going to grow even                   |
| 41:21      | more useful in time.                                                                                    |
| 41:23      | So it was a lot of the automation around it was an interesting challenge as well.                       |
| 41:28      | So it was actually quite fun too.                                                                       |
| 41:31      | Okay.                                                                                                   |
| 41:32      | And so the, so it actually is an index of all the shows.                                                |
| 41:35      | It's got transcripts that have been made by a robot, but massaged by Stephen.                           |
| 41:41      | And you know, I'm doing something similar, Stephen, with the behind the scenes from                     |
| 41:46      | MacSparky, we've got a [[Notion]] database where all projects go, whether it's a, you know,                |
| 41:53      | a video or a blog post or whatever.                                                                     |
| 41:56      | And we're doing the same thing.                                                                         |
| 41:57      | We're putting transcripts of all videos in.                                                             |
| 41:59      | And then with [[Notion]] AI, I can say, well, tell me the last time I wrote about this or                   |
| 42:04      | whatever.                                                                                               |
| 42:05      | And it kind of suddenly we're at this inflection point and, and for years, people ask me, well,         |
| 42:11      | can you get transcripts of your podcasts?                                                               |
| 42:12      | And we'd look into it and, you know, it was four or $500 per episode and we weren't making              |
| 42:17      | enough money to pay for it.                                                                             |
| 42:19      | But suddenly I always felt like the technology was going to catch up and it feels to me like            |
| 42:23      | it kind of is now.                                                                                      |
| 42:25      | So you've got a transcript of every show, show notes, guests, everything.                               |
| 42:30      | So if you have a recollection of hearing about something on the automators, you can go into             |
| 42:35      | this [[Obsidian]] database, type a few search terms and it's in there.                                      |
| 42:38      | In fact, I typed the search term "*[[Stephen Millard]]*".                                                       |
| 42:41      | And I realised that you come up a lot on our show a few times.                                          |
| 42:46      | Yeah.                                                                                                   |
| 42:47      | So this is really cool.                                                                                 |
| 42:48      | We'll have a link for it.                                                                               |
| 42:49      | But tell us some of the automation challenges you had in putting it together.                           |
| 42:53      | Like I said, the main thing was the sort of topics that you guys discuss is maybe not                   |
| 43:01      | necessarily something that the AI is able to easily pick out.                                           |
| 43:06      | And there's obviously David, you've got one side of the ocean accent and Rose has got another               |
| 43:14      | and then you may have another guest.                                                                    |
| 43:15      | And I think the AI sometimes gets a little bit tripped up on some of that.                              |
| 43:20      | So there's a lot of, sometimes there are differences in spelling.                                       |
| 43:25      | Sometimes it has some amazing translations of something which you absolutely did not                    |
| 43:30      | say.                                                                                                    |
| 43:31      | And then other times it's like, even when I go back and listen, it's actually the speech                |
| 43:39      | is so quick and so passionate that it's actually hard to make out necessarily the exact details         |
| 43:45      | of what those words were.                                                                               |
| 43:46      | And so you can kind of understand why the AI was having so much trouble.                                |
| 43:52      | But the whole process for the episodes starts out with just checking the RSS feed for the               |
| 43:58      | podcast.                                                                                                |
| 43:59      | And then periodically it checks and when there's a new one available, I've got a little old             |
| 44:05      | Intel headless Mac mini that I use for various automation things.                                       |
| 44:09      | That's running some checks, primarily using a shortcut, so it checks the [[RSS]] feed and                   |
| 44:16      | then will download the episode.                                                                        |
| 44:21      | Once it downloads, it then triggers a [[Shell Scripting\|command line script]] that will go off and it will actually         |
| 44:28      | open something called a [[tmux]] session, and that's just a way of running a little virtual                 |
| 44:33      | session such that if I want to check it remotely, I can check it without interrupting anything.         |
| 44:40      | So it runs this session and it triggers the [[Whisper]] AI installation to go through and process           |
| 44:48      | the podcast file.                                                                                       |
| 44:49      | Because my machine is so old, it usually takes about five or six hours.                                 |
| 44:53      | I'm sure a lovely nice new [[Apple Silicon]] one would probably do it in minutes instead.                   |
| 44:58      | But it's not an urgent thing, I can just offload it onto that machine and just leave it to              |
| 45:03      | run.                                                                                                    |
| 45:04      | And that produces a set of files and one of those is having a VTT file, which is a transcript           |
| 45:12      | along with timestamps.                                                                                  |
| 45:15      | And then from that, I can take that VTT file and the first thing I did was because I translated         |
| 45:24      | lots of these episodes, I think I had like 120 of them before I kind of started actually                |
| 45:28      | building them properly into the vault.                                                                  |
| 45:32      | And what I did was I used another command line tool called [[Aspell]] to just do a spell                   |
| 45:37      | check across all of the episodes, and then I did get the results just to see how many                   |
| 45:42      | spelling mysteries there were.                                                                          |
| 45:45      | There were thousands.                                                                                   |
| 45:47      | I can imagine so many.                                                                                  |
| 45:50      | And that's, I'm guessing that's not even American versus English spelling differences                   |
| 45:55      | of "aluminum" versus "aluminium", but just general misspellings.                                             |
| 45:59      | No.                                                                                                     |
| 46:00      | Yeah.                                                                                                   |
| 46:01      | As I said, David, you would not believe how many different variations there are of Max                  |
| 46:06      | Park.                                                                                                   |
| 46:07      | Yeah.                                                                                                   |
| 46:08      | Yeah, I know.                                                                                           |
| 46:09      | Strangely, I wouldn't believe it because I've been dealing with the same problem on                     |
| 46:13      | my end.                                                                                                 |
| 46:14      | I think I stopped counting at 40.                                                                       |
| 46:16      | Yeah.                                                                                                   |
| 46:17      | My field guides now are, they do the captions through a robot because it allows me to, allows           |
| 46:25      | the customer to have different languages, and that's a big deal, but they won't let                     |
| 46:28      | me edit the file.                                                                                       |
| 46:29      | And every time I see that, MacSparky came and spelled another way, it just breaks my                     |
| 46:33      | heart a little bit.                                                                                     |
| 46:35      | So after I'd run this and ended up with all these thousands of spelling issues, I then                  |
| 46:43      | worked through them manually because there really wasn't any way to automate that.                      |
| 46:48      | I had to check each one and figure out what it actually meant and where it was used and                 |
| 46:51      | maybe get some context around it.                                                                       |
| 46:53      | So I went through and what I did was I created some text files and I put in the misspelling             |
| 47:03      | and then I put a tab and then I put the correct spelling and I did that for everything and              |
| 47:11      | I did that for everything with case changes as well.                                                    |
| 47:15      | So this thousands became more thousands.                                                                |
| 47:19      | But what I ended up with was like a really solid set of transformations where I could                   |
| 47:27      | change from one spelling to what should be the correct spelling.                                        |
| 47:33      | It's not perfect.                                                                                       |
| 47:35      | Sometimes you change things that in the wrong places are that don't need to be changed in               |
| 47:38      | some way.                                                                                               |
| 47:41      | I think, David, you have once or twice used the term "Max Barky" on purpose.                              |
| 47:45      | So I had to account for those as well.                                                                  |
| 47:48      | Oh, boy, sorry about that.                                                                              |
| 47:50      | So there are some manuals changes, you can only automate so far, unfortunately.                         |
| 48:00      | So I created these files and then what I did was I found a way with [[TextSoap]], which is                 |
| 48:07      | a fantastic app for working with text on the Mac to transform the content of these files                |
| 48:15      | to update them and get the spelling to where, in theory, it should be.                                  |
| 48:22      | And so I did that for misspellings and Rose, yes, I did kind of change the American spellings           |
| 48:28      | to English spellings because that's what I wanted.                                                      |
| 48:31      | So it's a separate list, but you know, there it is.                                                     |
| 48:36      | Well, I can tell you that I waxed poetic about [[TextSoap]] on [[EP035 - Automating Business with Don McAllister\|episode 35]].                                 |
| 48:41      | You know how I know that?                                                                               |
| 48:44      | I could take a guess.                                                                                   |
| 48:46      | Yeah, it's right there in the vault, which is amazing.                                                  |
| 48:52      | Yeah.                                                                                                   |
| 48:53      | So with the updated transcripts, I then have some additional automation that I've built                  |
| 49:01      | in, I think, [[Keyboard Maestro]] for that, that then takes that text and pushes it over into               |
| 49:12      | a new file in the [[Obsidian]] vault.                                                                       |
| 49:15      | And at the same time, it triggers off various other automations.                                        |
| 49:18      | I think most of those are in shortcuts and things, which will go out and go to try and                  |
| 49:24      | figure out what the show notes pages for that episode on the really website and it will                 |
| 49:29      | open that up for me.                                                                                    |
| 49:31      | It will try and extract things like the forum page for the for the episode and try and populate         |
| 49:41      | that for it and get me bits of the show notes and things like that and the actual show notes,           |
| 49:45      | sorry, not show notes, bits of the meta data about the episode and the actual show notes.                |
| 49:50      | I actually do that manually, I'll explain why in a moment, but it builds this template                  |
| 49:58      | and then it opens it up in [[Obsidian]] for me.                                                             |
| 50:01      | So I have this mostly complete episode straight away without ever having to do anything at              |
| 50:07      | that point because I've put in all the effort ahead of time and got all these automations               |
| 50:11      | in place that build this file and just open it straight up.                                             |
| 50:15      | Yes.                                                                                                    |
| 50:16      | Yeah.                                                                                                   |
| 50:17      | That is one of the beauties of automation, isn't it, that you do have to spend a long time              |
| 50:22      | putting in the work sometimes in advance, but then it does just magically produce this                  |
| 50:27      | result for you, which in this case is the episode transcript file with all of the other                 |
| 50:33      | data in there and it's mostly done from what you're saying.                                             |
| 50:38      | Yeah.                                                                                                   |
| 50:39      | So from that point, I will then go and add in details of any guests and other little bits               |
| 50:44      | of pieces and the show notes.                                                                           |
| 50:45      | I actually found that if I just copy and paste that into [[Obsidian]], [[Obsidian]] actually is really          |
| 50:52      | good at converting it straight from the website, much better than actually running it through           |
| 50:56      | any other tool.                                                                                         |
| 50:57      | So there's a little manual step there, but the results are so much better.                              |
| 51:04      | And then I check through the list of sponsors as well.                                                  |
| 51:08      | So there are sponsor pages that I've included in the vault as well, so people will find                 |
| 51:12      | out about the organisation that's sponsoring the episodes.                                              |
| 51:17      | But for those, what I wanted to do was after looking through them, they tend to be the                  |
| 51:25      | same details every time, although the sponsors that have been with the show for a long time,            |
| 51:31      | they do change their intro text over time.                                                              |
| 51:35      | So I've tried to accommodate that as well, but I didn't fancy entering that manually                    |
| 51:40      | every time or just copy and pasting it every time.                                                      |
| 51:43      | So I came up with a way of just inserting it as by a template.                                          |
| 51:49      | So it would be starting elsewhere and it sounds exactly like a [[TextExpander]] snippet,                   |
| 51:53      | which was my first way of doing it.                                                                     |
| 51:56      | But I found that was quite slow to add at volume when I was working through lots and                    |
| 52:02      | lots of episodes.                                                                                       |
| 52:03      | Yeah, I imagine that'd be tricky.                                                                       |
| 52:05      | Yeah, so what I did was I actually went back to using [[Alfred]] for that.                                  |
| 52:09      | So [[Alfred]] does have some inbuilt snippet management, but what I actually did was built a workflow       |
| 52:16      | for it.                                                                                                 |
| 52:17      | I have an automators podcast workflow in [[Alfred]], which has several workflows in it that help            |
| 52:24      | me kind of build this vault.                                                                            |
| 52:26      | And one of them is for sponsors.                                                                        |
| 52:28      | And so I can trigger this with just by typing in a snippet at the command line.                         |
| 52:35      | And the advantage that it gives me is that I can get a list of all the sponsors and                     |
| 52:41      | I can just start filtering that list, which I could do in a different way in [[TextExpander]]              |
| 52:47      | to a point.                                                                                             |
| 52:48      | But it's just so quick and easy to do in [[Alfred]], it looks nicer to do it in [[Alfred]], to be honest.       |
| 52:53      | And I can very quickly put that in there.                                                               |
| 52:55      | And I've also got a much quicker way of editing those details as well.                                  |
| 52:59      | But that then gets the sponsors in.                                                                     |
| 53:02      | Yeah, I can imagine that the advantage in [[Alfred]] in particular is that you can read                     |
| 53:06      | from the list of files that you've got, which are within the sponsors folder.                           |
| 53:10      | So that it's, you know, instead of having to have potentially two lists that you maintain               |
| 53:14      | or an automation that's, you know, taking the list of files and updating the [[TextExpander]],             |
| 53:20      | you know, drop down with it or something.                                                               |
| 53:22      | It's just, it's just reading the files and giving you those options, which is definitely                |
| 53:26      | an advantage.                                                                                           |
| 53:28      | Yeah.                                                                                                   |
| 53:29      | So the final step on the building out an episode is then to read through the transcript.                |
| 53:38      | So I'll go through the transcripts and I'll put in a tag.                                               |
| 53:43      | Sorry, a link for anything that's particularly interesting.                                             |
| 53:48      | So if, if for example, [[Alfred]] came up, then I would put some square brackets around that,               |
| 53:53      | which is an internal link in [[Obsidian]], and that would link out to a page on [[Alfred]] that                 |
| 53:59      | for many of the things that you've talked about over the years, I've got many of those                  |
| 54:04      | pages in there.                                                                                         |
| 54:05      | There are many, many more that I still don't have yet, but they might be linked and just                |
| 54:09      | waiting for a page to be added.                                                                         |
| 54:11      | If I work through and do that, and I'll correct any of the, the texts I go through.                     |
| 54:16      | So as I mentioned before, sometimes it's a bit hard to tell what the AI has translated.                 |
| 54:22      | And so I built an automation to help with that as well.                                                 |
| 54:26      | So I have something built with [[Templater]], which is a templating plugin in [[Obsidian]].                     |
| 54:34      | And I created something in that that will actually allow me to trigger the template                     |
| 54:40      | by a keyboard shortcut that will copy the episode number to the clipboard from the                  |
| 54:47      | file name of the episode file.                                                                          |
| 54:51      | So grab that nice and quickly.                                                                          |
| 54:54      | And then the automation will also grab the timestamp from the line that the cursor is                   |
| 55:02      | currently on in the episode transcription.                                                              |
| 55:05      | And so armed with the episode number and the time index, I then have a folder which contains            |
| 55:16      | all of the podcast episodes.                                                                            |
| 55:18      | And I can then triggers [[VLC]], which is an audio player and a video player.                               |
| 55:24      | And it will open that at a timestamp, which is, I think I've said it to about 10 seconds                |
| 55:30      | before, and it will play for, say, 20, 30 seconds at slightly slower than normal speed                  |
| 55:37      | to give me the best chance possible of trying to figure out what was actually said.                     |
| 55:42      | Sometimes it does take a few listens to try and make out exactly what it is in the context              |
| 55:46      | of what's going on.                                                                                     |
| 55:47      | But sometimes it's just really obvious, and then I can manually amend that.                             |
| 55:51      | And so I just worked through the whole file doing that.                                                 |
| 55:53      | I would love to say I've caught everything as I've gone through every single episode                    |
| 55:57      | that I've done so far, but I know I won't have.                                                         |
| 56:01      | But over time, I'm sure I'll catch anything that's missing or needs updating.                           |
| 56:07      | But the core of the vault is these episodes, and everything hangs off those.                            |
| 56:13      | So links out to guests, links out to services and application things that they're all bundled           |
| 56:20      | in there.                                                                                               |
| 56:21      | It links out to particular automations, links out to methodologies or idea and concepts                 |
| 56:27      | and that's something I'm building out over time.                                                        |
| 56:30      | But as I say, I may have kind of overscaled what I would like to have done for the initial              |
| 56:36      | release.                                                                                                |
| 56:37      | But as I say, I think I've got it's something that's actually practical, useful, beneficial,            |
| 56:42      | and you know, I'll just keep improving it over time.                                                              |
| 56:44      | I think by doing what you've done here, especially by giving yourself the methodologies and so          |
| 56:50      | on, it's actually the template, which obviously you're using [[Templater]], which is a fabulous              |
| 56:57      | [[Obsidian]] plugin.                                                                                        |
| 56:58      | I love that to give you actual templates, but it means that it's very easy.                             |
| 57:03      | There is a dedicated place to put these things to come back to later.                                   |
| 57:07      | And I feel like sometimes when you're creating an automation, especially if you know that               |
| 57:13      | your goal is a big system, you do need to just give yourself the freedom to explore                     |
| 57:18      | and play with these things a little bit, even if you don't necessarily fully flesh out all              |
| 57:22      | of those things for the first release, at least having a sample there of this is what                   |
| 57:28      | my goal is for this sort of thing is a really good thing to aim for.                                    |
| 57:32      | Because then of course, you can build it up over time.                                                  |
| 57:35      | And I feel like you've taken a very good approach here by starting with the core information,           |
| 57:41      | the episodes and building out from there.                                                               |
| 57:43      | And I'm very excited to see what things end up in all of these folders and so on as time                |
| 57:49      | goes on because I'm sure there will be many great things.                                               |
| 57:53      | I really, I expect it to be that case.                                                                   |
| 57:56      | Yes.                                                                                                    |
| 57:57      | Well, I really appreciate you doing this, not only for our own reference, but for the                   |
| 58:01      | audience.                                                                                               |
| 58:02      | And we're going to put a link in the show notes so you can download this and                    |
| 58:07      | Stephen has a [buy me a coffee](https://buymeacoffee.com/sylumer) button in there.                                                                  |
| 58:09      | I've already bought him a couple.                                                                       |
| 58:11      | And if you use find this useful, I would, you know, say throw him a few coffees because                 |
| 58:16      | this is a lot of work.                                                                                  |
| 58:17      | A couple of things in here that made me giggle.                                                         |
| 58:21      | So as of the last update, it's 154 episodes were a couple beyond that now.                              |
| 58:27      | We have had 47 guests and total runtime of almost 192 hours.                                            |
| 58:33      | And that made me laugh.                                                                                 |
| 58:35      | That's a lot of, that's a lot of podcasting, 192 hours.                                                 |
| 58:38      | I can only imagine what it would be for the 700 plus episodes of [[Mac Power Users]].                       |
| 58:43      | And the other thing is he's got an entry in here called the [[Rogues Gallery]], where he's                  |
| 58:48      | found pictures of all the guests or most of the guests.                                                 |
| 58:51      | And I love that.                                                                                        |
| 58:53      | And I love the name, the rogues gallery, because we have a rogues gallery of automators that            |
| 58:57      | come through here, yourself included, Stephen.                                                          |
| 58:59      | Yes.                                                                                                    |
| 59:00      | Yes.                                                                                                    |
| 59:01      | Yes.                                                                                                    |
| 59:02      | And yeah, we are always, of course, looking for various different guests to have on from                |
| 59:06      | a variety of backgrounds and so on.                                                                     |
| 59:08      | And so it's interesting to see who's come on frequently and there's always space in                     |
| 59:14      | the [[Rogues Gallery]] for more people because it's a gallery rather than the wanted notices.               |
| 59:19      | I mean, if you haven't been on the show yet, then consider yourself on a wanted notice                  |
| 59:23      | because we want you to come on the show, but it's a good kind of wanted notice.                         |
| 59:26      | There's a ward out for coming on the show and maybe send you some stickers or something                 |
| 59:31      | if we've got some.                                                                                      |
| 59:32      | But yeah, it's very cool.                                                                               |
| 59:34      | And I love your use of [[Dataview]] as well, which is another great [[Obsidian]] plugin, which               |
| 59:38      | just gives us tables and all sorts of things with magically pulling data out of other areas             |
| 59:44      | of the app.                                                                                             |
| 59:45      | And that's very nice to see because I love [[Dataview]] and I sometimes find myself getting              |
| 59:51      | perhaps a little too nerdy with date of you and spending a lot of time building amazing                 |
| 59:55      | queries and so on and then realising that it's returning three notes instead of 30 because              |
| 01:00:00   | I did not write the other 27 notes yet.                                                                 |
| 01:00:03   | And that could be a problem.                                                                            |
| 01:00:04   | So I'm glad to see that you've got some really great examples of that in there too.                     |
| 01:00:09   | Yeah, there's quite a lot of [[Dataview]] content in there.                                                |
| 01:00:14   | So lots of things pulling that meta data about the episodes.                                             |
| 01:00:17   | So there's little bar charts of like episode length so you can kind of see what sort of                 |
| 01:00:22   | phases you've been through of how long your episodes are.                                               |
| 01:00:25   | And as David said, there's like the stats about how many guests and things like that.                   |
| 01:00:29   | So there's all sorts of [[Dataview]] links and queries in there that just kind of I've tried               |
| 01:00:35   | to include in a way that's useful and practical.                                                        |
| 01:00:38   | Yes.                                                                                                    |
| 01:00:39   | I think another really great thing about this is for anybody who's [[Obsidian]] curious, but                |
| 01:00:44   | they've never really tried [[Obsidian]] because they kind of just want to see a vault of like               |
| 01:00:48   | with data in and how people are using it.                                                               |
| 01:00:51   | This is a really great example because there's cross linking, there's tags, there's meta data            |
| 01:00:57   | featuring [[YAML]] headers if you want to go nerdy like that.                                               |
| 01:01:00   | There's so much stuff which makes it a really great sample [[Obsidian]] database in a way that              |
| 01:01:06   | especially for our audience hopefully is actually going to be useful and provide them with information. |
| 01:01:11   | So this is amazing in so many different ways as well as very flattering to us, which is                 |
| 01:01:17   | greatly appreciated.                                                                                    |
| 01:01:18   | Thank you.                                                                                              |
| 01:01:19   | Yeah.                                                                                                   |
| 01:01:20   | Well, honestly, I'm on the forum quite a lot.                                                           |
| 01:01:23   | This comes up quite a lot in terms of people asking questions about what, when things have              |
| 01:01:28   | come up or asking about something that you've done an entire episode on and they seem to                |
| 01:01:32   | have missed.                                                                                            |
| 01:01:33   | So having something like this to reference back to is kind of useful in any case.                       |
| 01:01:38   | Yes.                                                                                                    |
| 01:01:39   | Yes.                                                                                                    |
| 01:01:40   | Definitely.                                                                                             |
| 01:01:41   | Well, Stephen, this is like Rose said, it is very flattering, but it's also I think really               |
| 01:01:46   | useful for folks that are interested in automation, particularly in the types of automation we          |
| 01:01:50   | talk about around here.                                                                                 |
| 01:01:52   | We're going to put a download link in it.                                                               |
| 01:01:54   | Thank you so much for doing this for the community and I know people are going to really love           |
| 01:01:58   | it.                                                                                                     |
| 01:01:59   | Yeah.                                                                                                   |
| 01:02:00   | There was a post on the forum that came out recently asking if there's any transcriptions.              |
| 01:02:03   | I was like, yes, but I'm not going to tell you just yet.                                                |
| 01:02:08   | Well, I think that that's reasonable and you can always go back to this person, the episode             |
| 01:02:17   | releases and put that in there.                                                                         |
| 01:02:19   | So I've put a link.                                                                                     |
| 01:02:20   | I know that the link is not yet active, but you've said you're going to make it active                  |
| 01:02:24   | before the show goes out.                                                                               |
| 01:02:26   | So I'll put a link in the show notes to where folks can actually have a look at that because            |
| 01:02:31   | it's on [[GitHub]], which means that as you update it, people will be able to go back and check             |
| 01:02:37   | for updates and so on, which is extremely cool.                                                         |
| 01:02:40   | So yes, very handy.                                                                                     |
| 01:02:42   | All right.                                                                                              |
| 01:02:43   | Well, [thoughtasylum.com](https://thoughtasylum.com) is Stephen's home on the internet.                                               |
| 01:02:48   | Like I said at the top of the show, this is a must subscribe link.                                      |
| 01:02:51   | If you're interested in automation, Stephen is always bringing us joy and delight as                     |
| 01:02:57   | automators with cool new automations.                                                                   |
| 01:03:00   | We didn't even talk about a bunch of the other stuff Stephen's doing.                                    |
| 01:03:02   | We'll have to have them back to do that in the future.                                                  |
| 01:03:05   | Stephen, anywhere else people should go other than [thoughtasylum](https://thoughtasylum.com) if they want to look into               |
| 01:03:08   | what you're doing.                                                                                      |
| 01:03:09   | That's probably the main place.                                                                         |
| 01:03:12   | If people do want to see what I'm up to every month, there's a lot of stuff that I don't                |
| 01:03:19   | post about on my blog, on [thoughtasylum](https://thoughtasylum.com), if they want to follow that.                                   |
| 01:03:24   | If you go to [my Buy Me a Coffee page](https://buymeacoffee.com/sylumer), then that's where I post [my monthly updat](https://buymeacoffee.com/sylumer/posts/40325).                       |
| 01:03:30   | You don't have to buy me a coffee.                                                                      |
| 01:03:31   | You can just go there and read about all the other bits and pieces I've been up to that                 |
| 01:03:35   | month.                                                                                                  |
| 01:03:36   | Yeah, I didn't even know that existed and I am now subscribing to that as well.                         |
| 01:03:41   | And we are the Automators Podcast.                                                                      |
| 01:03:43   | You can find us at relay.fm/automators.                                                                 |
| 01:03:47   | We want to thank our supporters.                                                                        |
| 01:03:49   | That's a big deal around here.                                                                          |
| 01:03:52   | Podcasts advertising has slowed down a bit and we really appreciate those supporting                    |
| 01:03:55   | us.                                                                                                     |
| 01:03:56   | Those of you that do support us get the ad-free extended version of the show.                           |
| 01:03:59   | We call it [[Automators Max]].                                                                              |
| 01:04:02   | We are going to be talking today in the [[Automators Max]] section to Stephen all about AI and automation.   |
| 01:04:09   | He's been thinking about it.                                                                            |
| 01:04:10   | He's been dealing with it in the day job.                                                               |
| 01:04:12   | I can't wait to pick his brain on it.                                                                   |
| 01:04:13   | Otherwise, have a great day, everyone, and we'll see you next time on the Automators podcast.                   |
| 01:04:18   | Goodbye, folks.                                                                                         |
