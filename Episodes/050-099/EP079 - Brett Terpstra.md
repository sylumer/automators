---
status: incomplete
fc-date:
  year: 2021
  month: 7
  day: 2
fc-category: podcast
podcast: Automators
published: 2021-07-02
duration: 5397
formattedduration: 01:29:57
hosts:
  - David Sparks
  - Rosemary Orchard
guests:
  - Brett Terpstra
notetype: episode
showpage: http://relay.fm/automators/79
episodeurl: https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/secure/automatorsrelay/automators079_REV-A.mp3
episode: 79
title: "79: Brett Terpstra"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
In this episode of Automators, Rosemary and David are joined by none other than Brett Terpstra, creator of Bunch, to talk about automation!

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- [[Brett Terpstra]]

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 079 Discussion](https://talk.automators.fm/t/79-brett-terpstra/11846)

# Sponsors
- [[HPE Tech Talk (Sponsor)|HPE Tech Talk]] - HPE news, tech Insights and world-class innovations. Listen now.
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Communicate Smarter.
- [[Discourse (Sponsor)|Discourse]] - Modern forum software for your community.

# Show Notes
- [Brett Terpstra.com](https://brettterpstra.com/)
- [Welcome to Bunch - Bunch](https://bunchapp.co/)
- [Moom · Many Tricks](https://manytricks.com/moom/)
- [Intro - Bunch](https://bunchapp.co/docs/)
- [Snippets - Bunch](https://bunchapp.co/docs/bunch-files/snippets.html)
- [Moom - Bunch](https://bunchapp.co/docs/integration/moom/)
- [Keystrokes - Bunch](https://bunchapp.co/docs/bunch-files/keystrokes.html)
- [Sample Bunches - Bunch](https://bunchapp.co/docs/bunch-files/samplebunch/)
- [Front matter - Bunch](https://bunchapp.co/docs/bunch-files/frontmatter/)
- [Opening Other Bunches - Bunch](https://bunchapp.co/docs/bunch-files/other-bunches/)
- [Scheduling Bunches - Bunch](https://bunchapp.co/docs/bunch-files/scheduling-bunches/)
- [Snippets - Bunch](https://bunchapp.co/docs/bunch-files/snippets/)
- [Startup Scripts - Bunch](https://bunchapp.co/docs/bunch-files/startup-scripts/)
- [URL Handler - Bunch](https://bunchapp.co/docs/integration/url-handler.html)
- [Task Managers - Bunch](https://bunchapp.co/docs/integration/task-manager/)
- [Obsidian](https://obsidian.md/)
- [BetterTouchTool - Bunch](https://bunchapp.co/docs/integration/bettertouchtool/)
- [Hazel - Bunch](https://bunchapp.co/docs/integration/hazel/)
- [Running AppleScript - Bunch](https://bunchapp.co/docs/bunch-files/scripts/applescript/)
- [Running Shell Scripts - Bunch](https://bunchapp.co/docs/bunch-files/scripts/shell-scripts/)
- [Podcasting | Sample Bunches - Bunch](https://bunchapp.co/docs/bunch-files/samplebunch/#podcasting)
- [Home | Dark Noise](https://darknoise.app/)
- [Charlie Chapman](https://charliemchapman.com/)
- [‎Dark Noise on the App Store](https://apps.apple.com/us/app/dark-noise/id1465439395)
- [Karabiner-Elements](https://karabiner-elements.pqrs.org/)
- [folivora.ai - Great Tools for your Mac!](https://folivora.ai/)
- [A Modern Space Cadet / Steve Losh](https://stevelosh.com/blog/2012/10/a-modern-space-cadet/)
- [Stream Deck - Bunch](https://bunchapp.co/docs/integration/stream-deck.html)
- [Bunch and the Stream Deck - Brett Terpstra.com](https://brettterpstra.com/2020/09/16/bunch-and-stream-deck/)
- [Vim (text editor) - Wikipedia](https://en.wikipedia.org/wiki/Vim_(text_editor))
- [Emacs - Wikipedia](https://en.wikipedia.org/wiki/Emacs)
- [How-to: macOS Key bindings - SS64.com](https://ss64.com/osx/syntax-keybindings.html)
- [Jekyll • Simple, blog-aware, static sites | Transform your plain text into static websites and blogs](https://jekyllrb.com/)
- [BTT as Default Browser / URL Based Triggers · GitBook](https://docs.folivora.ai/docs/1003_did_open_url.html)
- [Choosy: A smarter default browser for macOS](https://www.choosyosx.com/)

# Transcription
  
| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Welcome to The Automators, I'm David Sparks and joined by my co-host, Rosemary Orchard.              |
| 00:06      | How are you today, Rosemary?                                                                         |
| 00:08      | Well, a little bit of warning for our listeners.                                                     |
| 00:10      | Today, of course, is the day that my internet has chosen to act up a little bit.                     |
| 00:14      | So we put you in charge of the show just in case, because we have a very exciting guest.             |
| 00:20      | Jay Miller was telling us about a bunch of while ago, and he got twisted my arm after                |
| 00:23      | the show and was like, come on, make more use of this.                                               |
| 00:25      | It's a great tool.                                                                                   |
| 00:26      | And so I sat down and I spent some time playing with it and was like, oh my God, this is amazing.    |
| 00:31      | I need somebody to force me to use this more.                                                        |
| 00:34      | And then you suggested a guest for today's show, and I immediately went squee at a very              |
| 00:40      | high pitch and a very low volume, which I will not recreate here for all of those lovely             |
| 00:45      | people wearing headphones at home who would like to still have eardrums at the end of                |
| 00:48      | the episode.                                                                                         |
| 00:49      | So, yeah, I'm very excited.                                                                          |
| 00:52      | Welcome to the show.                                                                                 |
| 00:53      | Again, Brett Terpstra.                                                                               |
| 00:54      | Hey, it's so much fun to be here.                                                                    |
| 00:57      | Yeah.                                                                                                |
| 00:58      | Brett, you're like the prime automator, you know?                                                    |
| 01:02      | So I get a lot of attention.                                                                         |
| 01:05      | I've been a content creator for long enough that I'm well known, but the most common way             |
| 01:11      | when people introduce themselves that they heard of me is I heard of you on automators               |
| 01:17      | or I heard of you on Mac Power users.                                                                |
| 01:19      | So basically, I think you are the gateway for most people to my stuff.                               |
| 01:27      | That's a compliment.                                                                                 |
| 01:28      | I'd like to think that, you know, the shows that Rose and I and Steve and I make really              |
| 01:32      | do have a pretty broad audience.                                                                     |
| 01:36      | We had the Emojipedia guy on Mac Power users, Jeremy Birch, and he like goes on like CBS             |
| 01:48      | and he like he inventid Emoji Day, you know, the guy is like kind of a big deal.                     |
| 01:54      | And he wrote me and he said, I got more nice email from being on Mac Power users than any            |
| 01:58      | of that other stuff.                                                                                 |
| 02:00      | I'd like to think that we have a nice audience, but also a lot of people interested in automation    |
| 02:05      | and the reason you are a frequent guest on both Mac Power users and automators is because            |
| 02:11      | you're a guy who not only thinks of cool things, you actually build tools for other                  |
| 02:15      | people.                                                                                              |
| 02:16      | And that's what makes you warm the cockles of my heart.                                              |
| 02:24      | And so, so Jay Miller was on, he's like, oh yeah, a bunch, it's this really cool tool.               |
| 02:28      | I knew it was a thing you were doing, but I didn't know it was a like thing, you know,               |
| 02:34      | I mean, it started because the first time I saw it was a very hacky tool that you put                |
| 02:40      | together probably for your own use and you thought, well, I'll share it with people.                 |
| 02:44      | And now it's like a, it could be a product.                                                          |
| 02:46      | I mean, Rose and I have been playing with Bunch a lot leading up to this and we want                 |
| 02:51      | to talk about that today.                                                                            |
| 02:52      | But, but before we do, since it's been a while since you've been on, let's just kind of catch        |
| 02:56      | everybody up.                                                                                        |
| 02:58      | Brett is over at Brett Terpstra.com.                                                                  |
| 03:01      | He has made a lot of great automation tools over the years and we're going to talk about             |
| 03:05      | more than just Bunch on today's show.                                                                |
| 03:08      | Another thing that Brett has done recently is you've taken a gig, you've gone legit.                 |
| 03:13      | And you've suddenly you've got, you know, to deal with work stuff.                                   |
| 03:18      | And we're going to talk about how you automated that as well.                                        |
| 03:21      | So anytime we have Brett on, just strap in gang because there's going to be a lot of                 |
| 03:26      | cool automation coverage today.                                                                      |
| 03:27      | Yeah.                                                                                                |
| 03:28      | So let's get back to Bunch.                                                                          |
| 03:30      | I, you know, Jay kind of really dropped the gauntlet for both Rose and I and I've spent              |
| 03:35      | a couple hours now playing with it.                                                                  |
| 03:38      | And I'm going to give my basic explanation of what it is, but I'd like to kind of have               |
| 03:43      | you jump in and take over.                                                                           |
| 03:45      | Sure.                                                                                                |
| 03:46      | Something that Rose and I talk about a lot on the show are setups, you know, setting                 |
| 03:50      | up your computer for a certain context to do certain work.                                           |
| 03:54      | And historically, I've done that a lot of ways, but the current method that works best               |
| 04:00      | for me is [[Keyboard Maestro]] scripts combined with [[Moom]] shortcuts, you know, because window            |
| 04:08      | management is a key part of any setup system and [[Moom]] is so much better at it than keyboard          |
| 04:16      | maestro.                                                                                             |
| 04:17      | So I just program the shortcuts and then use them.                                                   |
| 04:21      | And that's fine, but it is also, you know, pretty tedious to set these up and you've                 |
| 04:26      | got to really understand how to use [[Keyboard Maestro]].                                                |
| 04:31      | Brett has done a system where you do it with a text file, where you just issue commands              |
| 04:36      | to your computer and you just create a text file once you learn the commands, you can                |
| 04:39      | fire it off and your computer does really cool stuff.                                                |
| 04:43      | And it's a great way to set up your computer.                                                        |
| 04:46      | How'd you come up with the idea for it?                                                              |
| 04:48      | Well, very much what you're describing, like I wanted at the base level, I just wanted               |
| 04:55      | to be able to launch and quit a group of applications with one keystroke.                            |
| 05:01      | And so obviously that was a combination of, in this case, [[BetterTouchTool]] and some Apple           |
| 05:07      | script and the process of doing it once, not a big deal, but once you start wanting                  |
| 05:13      | to expand that and have different sets of apps in different groups, it just seemed like              |
| 05:18      | there should be, I just wanted to write it down in a plain text document and, and like               |
| 05:24      | list the names of the apps and have them launch.                                                     |
| 05:27      | And so that was where Bunch began.                                                                   |
| 05:29      | Yeah, and, and just to explain how simple the syntax for Bunch is, if you want mail                  |
| 05:35      | to launch in your Bunch, you type mail on a single line.                                             |
| 05:41      | That's it.                                                                                           |
| 05:42      | I mean, you don't have to put a secret code in or throw a salt over your shoulder.                   |
| 05:45      | You just type mail and, um, yeah, it's really, really clever.                                        |
| 05:50      | I mean, because this is not something you need to be super nerd to do.                               |
| 05:53      | I think that people, when the people say it's a text file, they immediately turn off and             |
| 05:56      | say, well, I don't know, you know, I don't know how to program Perl, I can't do this.                |
| 06:00      | No, this isn't Perl.                                                                                 |
| 06:01      | This is like the easiest syntax in the world.                                                        |
| 06:03      | If you look in the example one, so I've got the example, I made sure to copy it before               |
| 06:07      | I started messing around with a whole bunch of things.                                               |
| 06:09      | Um, uh, and, uh, you know, if the example one you use at, at, like that's like a two-letter          |
| 06:16      | command and that hides all visible apps.                                                             |
| 06:19      | And so I immediately was like, okay, I need a template Bunch, um, which I, I did with                |
| 06:24      | BB Eta because BB Eta has great template files.                                                      |
| 06:26      | Um, and so I, I created a template bunch, which has got, you know, the, the title follow             |
| 06:31      | by at, at, and then everything else goes underneath that because the first thing I do before,        |
| 06:36      | you know, doing all of these other things is always hide my stuff.                                   |
| 06:39      | And that was incredibly easy to rock.                                                                |
| 06:41      | You know, there was no, oh, I have to learn this special syntax or anything.                         |
| 06:45      | No, it was just at, at and done.                                                                     |
| 06:48      | That was it.                                                                                         |
| 06:49      | And honestly, that could be a bunch, just the at, at two, at symbols next to each other              |
| 06:54      | because a lot of times as you're changing context, the first thing you want to do is                 |
| 06:58      | clear the decks and then having one, like a hide all bunch is pretty good idea.                      |
| 07:05      | Yeah.                                                                                                |
| 07:06      | I usually use command option, click on finder if I'm doing it manually, but that leaves              |
| 07:11      | finder visible.                                                                                      |
| 07:12      | Yeah.                                                                                                |
| 07:13      | Yeah.                                                                                                |
| 07:14      | Always finder, you know, even like I struggle with this when I was trying to do this through         |
| 07:17      | keyboard, my show, I cannot hide that damn finder.                                                   |
| 07:20      | It just refuses to go away.                                                                          |
| 07:23      | If everything else is hidden, it will, if it's, if other apps have visible windows and               |
| 07:28      | you switch to finder and hit command H, it should hide all windows for you.                          |
| 07:32      | Yeah.                                                                                                |
| 07:33      | But if everything else is hidden, it's like macOS wants to have one app visible at any               |
| 07:39      | given time.                                                                                          |
| 07:40      | Yeah.                                                                                                |
| 07:41      | Yeah.                                                                                                |
| 07:42      | I've actually been trying to figure out something because with finder, there is a way, so in,        |
| 07:47      | in the view menu or is it window menu?                                                               |
| 07:49      | Yeah.                                                                                                |
| 07:50      | I've merged all windows and then close.                                                              |
| 07:53      | So I've been, I've been trying to figure out a way to do that with, with Bunch.                      |
| 07:55      | At the moment, I'm still using a [[Keyboard Maestro]] macro for that, but maybe by the end of the        |
| 07:59      | show, I will be able to do this with Bunch or maybe not.                                             |
| 08:03      | Maybe it is right to do that with [[Keyboard Maestro]], but I'm loving everything that I've              |
| 08:06      | done so far.                                                                                         |
| 08:07      | The fact that I can toggle D and D is just, oh my God, that's a lifesaver.                           |
| 08:12      | So much a lifesaver.                                                                                 |
| 08:13      | So I'm now using this for all of my podcasting things.                                               |
| 08:16      | I've got a bunch for each of my podcasts because I can click a thing, hide all of the, the           |
| 08:20      | windows, it quits specific applications that I don't want running, um, you know, like discord        |
| 08:26      | ignores, do not disturb.                                                                             |
| 08:27      | So I don't have it running unless I'm doing a podcast where it's also on discord.                    |
| 08:32      | Um, and, uh, you know, this, this means that, you know, um, things disappear and things              |
| 08:37      | appear and do not disturb us on.                                                                     |
| 08:39      | And then at the end, I have another bunch of drawers.                                                |
| 08:41      | You're like getting into the tiny leaf, let's look at the forest first.                              |
| 08:45      | I'm just, I'm just getting excited because I want to give people an idea of the amazing              |
| 08:49      | stuff they can accomplish by the end of the episode.                                                 |
| 08:52      | All right.                                                                                           |
| 08:53      | So, so let's, let's talk through the forest first.                                                   |
| 08:55      | Um, so to launch an app, you hit, you just type in the name of the app, um, to hide apps.            |
| 09:02      | It's to add symbols together.                                                                        |
| 09:04      | So you can like focus an app too.                                                                    |
| 09:06      | If you, if you hide all apps and then you start launching apps, anything you launch after            |
| 09:11      | hiding is obviously going to be visible.                                                             |
| 09:14      | So you can launch a bunch of apps and then, uh, like put for me, if I'm working on documentation     |
| 09:20      | for a bunch, I really only need the sublime text window that, uh, has the documentation              |
| 09:27      | project in it.                                                                                       |
| 09:28      | So I put at [[Sublime Text]] and that will focus, that'll hide everything except for sublime             |
| 09:34      | text.                                                                                                |
| 09:35      | And you can do that at any point in a bunch.                                                         |
| 09:38      | Um, and then you can run all the commands or just go in parentheses.                                 |
| 09:42      | And a lot of this is stuff you can do in [[AppleScript]], but it's way simpler than AppleScript.       |
| 09:48      | You just put in parentheses DND and that will turn on, do not disturb, uh, put dark mode             |
| 09:55      | and it'll switch your, your screen to dark.                                                          |
| 09:57      | You can even, as of the latest update, you can even change your keyboard input language              |
| 10:03      | just by putting input source French and then suddenly have a French keyboard.                        |
| 10:08      | Yeah.                                                                                                |
| 10:09      | I saw that.                                                                                          |
| 10:10      | I'm like, how many people ask you for that feature, right?                                           |
| 10:12      | I mean, it's like one, one, one person asked me for that, but, but bunch is that kind of             |
| 10:17      | project for me where someone has an idea that I can see being at all useful and I'll probably        |
| 10:23      | try to figure out a way to do it.                                                                    |
| 10:25      | Okay.                                                                                                |
| 10:26      | So I just want, whenever I launch [[Drafts]], I want my keyboard to only have Latin characters           |
| 10:30      | on it, you know, Domina, Delta, you know, say, if you can find a matching input source               |
| 10:38      | for that bunch can do it.                                                                            |
| 10:41      | Yeah.                                                                                                |
| 10:42      | But it is great for like, I mean, at, at the most basic level, um, clearing the decks,               |
| 10:48      | getting the relevant apps open, like if you want to suddenly just manage your email and              |
| 10:54      | you want to open on your screen, like left side of the screen, mail, and then on the right           |
| 10:59      | side, your task manager and your calendar, um, you can create a bunch that'll do that.               |
| 11:05      | And it is a super simple script.                                                                     |
| 11:07      | It is at, at, and then [[Apple Mail\|Mail]], and then [[OmniFocus]], and then [[Fantastical]], or whatever your weapon       |
| 11:14      | of choice is.                                                                                        |
| 11:16      | And that is a bunch, guys.                                                                           |
| 11:18      | Send a keystroke to [[Moom]] to arrange it all for you because that's the one thing Bunch                |
| 11:22      | doesn't do.                                                                                          |
| 11:23      | Yeah.                                                                                                |
| 11:24      | And in fact, let's just talk about that right now because window management, as I was saying,        |
| 11:27      | is a difficult part of this, but you're using the same cheat I've been using historically            |
| 11:30      | with [[Keyboard Maestro]].                                                                                |
| 11:31      | And that's just install [[Moom]] because with [[Moom]], you can set a grid on your screen and                |
| 11:39      | attach, you know, and, and define grids like it could be left half of the screen or bottom           |
| 11:44      | left half of the screen or middle two thirds of the screen or just almost anything you               |
| 11:49      | can imagine.                                                                                         |
| 11:50      | And then you can tie a keyboard shortcut to that.                                                    |
| 11:53      | And then all you do is you can trigger a keyboard shortcut with a bunch.                             |
| 11:57      | So long as you have [[Moom]] running, and I guess you can make sure you have [[Moom]] running,               |
| 12:01      | just put it in the bunch and then trigger the keyboard shortcut to arrange the windows.              |
| 12:06      | Here's my trick.                                                                                     |
| 12:08      | So [[Moom]] has this snapshot feature.                                                                   |
| 12:12      | So you get all the apps you want to arrange on the screen, hide everything else.                     |
| 12:17      | And then put them where you want them and take a snapshot, and then you can just give                |
| 12:21      | it a name.                                                                                           |
| 12:22      | And then in your Bunch, Bunch can run AppleScript raw commands.                                      |
| 12:26      | You just start the line with an asterisk.                                                            |
| 12:28      | And then tell application [[Moom]] to arrange windows according to snapshot.                             |
| 12:33      | And then the name of the snapshot you made.                                                          |
| 12:35      | So at the end of the Bunch, you know, and Bunch can wait to run certain commands until               |
| 12:40      | all the apps that it launches have finished loading.                                                 |
| 12:44      | So then you just have it wait and then run that snapshot at the end.                                 |
| 12:48      | Yeah, I hadn't got to the wait command yet.                                                          |
| 12:50      | How does that work?                                                                                  |
| 12:52      | You just so you have to use snippets, which is basically just reusable texts that you                |
| 13:01      | can kind of import into a bunch.                                                                     |
| 13:04      | And you can create embedded snippets by putting three underscores at the end of your Bunch.          |
| 13:09      | And then anything after it is a snippet that you can reference with two left angle brackets.         |
| 13:16      | So to do a waiting snippet, you just indent by one tab or four spaces and then use the               |
| 13:25      | snippet syntax and anything that's indented like that will wait until all apps have shown            |
| 13:31      | at least one window or there's a five second if an app says it's launched but hasn't shown           |
| 13:36      | a window for five seconds, there's a dead man switch that says, OK, we'll just assume                |
| 13:40      | it's launched.                                                                                       |
| 13:41      | Yeah, things like QuickTime don't necessarily open windows when you open them.                       |
| 13:45      | So that's a great workaround for apps like that because, you know, not everything has                |
| 13:49      | a window.                                                                                            |
| 13:50      | At least start with.                                                                                 |
| 13:51      | That is the problem with general automation tools.                                                   |
| 13:56      | Dealing with every different apps quirks, it's impossible to make something that will                |
| 14:03      | just universally do what it's supposed to do, but I do my best.                                      |
| 14:09      | And honestly, if you do something like this, it's going to be the same apps every time.              |
| 14:13      | I mean, your calendar app isn't going to change.                                                     |
| 14:16      | So once you figure out the quirks of getting that app to work, you're done.                          |
| 14:21      | You know, it's not like you're going to be trying, well, if you're like this, you might              |
| 14:24      | be trying a lot of new apps.                                                                         |
| 14:25      | But a couple inserts there on kind of follow up on [[Moom]].                                             |
| 14:30      | You had talked about running an AppleScript to run a [[Moom]] setup, but you can also attach            |
| 14:36      | keyboard shortcuts to those setups in [[Moom]].                                                          |
| 14:38      | Why wouldn't you just press the keyboard shortcut?                                                   |
| 14:41      | Keyboard shortcuts are valuable.                                                                     |
| 14:43      | No matter how many hyper keys you have, there's still a limit to how many keyboard shortcuts         |
| 14:49      | you can have.                                                                                        |
| 14:50      | And in the case of snapshots, like I don't need to use a keyboard shortcut on that because           |
| 14:55      | I'm going to always call that snapshot from like a bunch or from some automation tools.              |
| 15:01      | So I just give it a name and call it with AppleScript.                                              |
| 15:04      | And that just reminded me that you are an owner of a hacker keyboard.                                |
| 15:08      | So we are going to put a pin in that and come back to that about you and your keyboards.             |
| 15:12      | But I have come across a bit of an epiphany on my keyboard arrangement shortcuts with                |
| 15:22      | [[Moom]].                                                                                                |
| 15:23      | I just want to share this with everybody because I'm very proud of myself.                           |
| 15:26      | Historically, I've done it with arrow keys.                                                          |
| 15:29      | I've tried to do it with number pad, but not all my keyboards have number pads.                      |
| 15:33      | And it occurred to me that my fingers are always on JKL.                                             |
| 15:38      | So now if I just hold down control command and just picture the keyboard in your mind's              |
| 15:45      | eye, J is left side, K is full screen centre, but not like full screen mode, if that makes           |
| 15:52      | sense.                                                                                               |
| 15:53      | L is right side.                                                                                     |
| 15:55      | And then U above the J is top left, you know, O above the L is top right, right facing arrow         |
| 16:05      | is bottom right and M below the J is bottom left.                                                    |
| 16:09      | And then I use the eye for top centre.                                                               |
| 16:13      | It's just I've got the whole thing out.                                                              |
| 16:15      | It's just great.                                                                                     |
| 16:16      | And so it's like a little diagonal of nine keys around centre to run around K. And all               |
| 16:23      | I have to do is hold down control command and I can put any window anywhere on my screen             |
| 16:27      | like a boss.                                                                                         |
| 16:28      | Nice.                                                                                                |
| 16:29      | That's pretty nice.                                                                                  |
| 16:31      | I have to say my biggest problem with keyboard shortcuts is apps that have keyboard shortcuts        |
| 16:38      | that then end up conflicting with each other.                                                        |
| 16:40      | That's why you always use control because no app ever uses control in its key combos.                |
| 16:46      | Well my problem is actually default ones.                                                            |
| 16:48      | So [[Drafts]] is a great application and I like its default keyboard shortcuts, but whenever             |
| 16:53      | I have [[ScreenFlow]] open, [[ScreenFlow]] wants to take over that keyboard shortcut.                      |
| 16:58      | And I've tried changing this in [[ScreenFlow]].                                                         |
| 16:59      | I've contacted the people at [[ScreenFlow]].                                                            |
| 17:01      | I can change it when I open the app and then the next time I open the app, it's reverted.            |
| 17:06      | And sometimes it doesn't even take me closing [[ScreenFlow]] and reopening [[ScreenFlow]] for              |
| 17:10      | this to happen.                                                                                      |
| 17:11      | I'm not quite sure what's going on there.                                                            |
| 17:12      | It's clearly a [[ScreenFlow]] bug, but they've not got around fixing it yet and it drives               |
| 17:17      | me insane that I'm there and I press what I think is the keyboard shortcut to just open              |
| 17:22      | a quick new draft because I just want to take a note on something that I'm doing in my current       |
| 17:26      | [[ScreenFlow]].                                                                                         |
| 17:27      | I've started recording again.                                                                        |
| 17:29      | It drives me insane.                                                                                 |
| 17:30      | So I actually have a [[Keyboard Maestro]] macro which interferes with this so that screen                |
| 17:36      | flow never gets that message.                                                                        |
| 17:37      | All right.                                                                                           |
| 17:38      | So gang, right now we are standing around a rabbit hole called keyboard shortcut.                    |
| 17:41      | So we're all looking at it.                                                                          |
| 17:43      | We are going to walk past it for a minute and then after we talk about Bunch, we're going            |
| 17:47      | to dive into this whole keyboard shortcut and hacking keyboard thing because Brett has               |
| 17:53      | a lot of information on this and we need to talk.                                                    |
| 17:57      | All right.                                                                                           |
| 17:58      | I got to shake this off.                                                                             |
| 17:59      | I was ready to dive right into the hole.                                                             |
| 18:01      | I know.                                                                                              |
| 18:02      | You're like, you know, like what would they call those guys in Vietnam, the snake guys               |
| 18:06      | that would go down into this?                                                                        |
| 18:07      | I was just thinking it was more Mad Hatter, Alice in Wonderland style.                              |
| 18:10      | Yeah.                                                                                                |
| 18:11      | Well, whatever.                                                                                      |
| 18:12      | It's a rabbit hole that we are going to climb in, I promise.                                         |
| 18:15      | But I want to stay on target here with Bunch for a minute because I think Bunch is something         |
| 18:19      | a lot of people are afraid of and shouldn't be.                                                      |
| 18:24      | So we've talked through getting apps open and then we're going to use the call for keyboard          |
| 18:29      | shortcuts.                                                                                           |
| 18:30      | What is it?                                                                                          |
| 18:31      | How do you do that, by the way, for people listening?                                                |
| 18:32      | How do you call a keyboard shortcut in Bunch?                                                        |
| 18:34      | Anything you put into square brackets will be typed as if you had typed it on your keyboard.         |
| 18:39      | Anything you put into curly brackets will be executed like a keyboard shortcut and you               |
| 18:45      | use key binding symbols, so like the at symbol is command, the tilde is option, the carat            |
| 18:54      | like shift six is control and dollar sign is shift.                                                  |
| 19:00      | So you can create keyboard combinations inside curly brackets.                                       |
| 19:05      | So just like dollar sign option C would press the key combination shift option C or dollar           |
| 19:14      | sign tilde C would hit shift option C for you.                                                       |
| 19:18      | Yeah.                                                                                                |
| 19:19      | I've put a link to the keystrokes documentation for Bunch in the show notes already for people       |
| 19:23      | just in case somebody wants to remember that it's there and it's in the show notes.                  |
| 19:27      | It's in the documentation and I've linked to it extra as well.                                       |
| 19:30      | I don't know if you noticed, but I redirected everything goes to bunchapp.co now where as            |
| 19:38      | we record this, currently all of that documentation is for the beta, which is also the default       |
| 19:45      | download right now.                                                                                  |
| 19:46      | But by the time this goes live, unless something has gone horribly wrong, version 1.4 will           |
| 19:51      | be stable and all of that documentation will apply.                                                  |
| 19:56      | This episode of The Automators is brought to you by HPE Tech Talk.                                   |
| 20:00      | With HPE Tech Talk, you get news, tech insights, and world-class innovations are revealed.           |
| 20:06      | In interviews with HPE's foremost thought leaders and change makers, Hewlett Packard                 |
| 20:10      | is one of the gold standards in the tech industry and they continue to innovate.                     |
| 20:15      | In the most recent episode, they talk about Project Aurora and Edge to Cloud security.               |
| 20:20      | That's HPE's innovative approach to security from Edge to Cloud with fidelity across hardware        |
| 20:25      | and software.                                                                                        |
| 20:26      | Learn about its deployment and its success.                                                          |
| 20:29      | But that's just one episode.                                                                         |
| 20:31      | If you want to listen, you can get extra topics like how to tackle issues when it comes to           |
| 20:35      | high performance computing, applying tech for the good of the people, planet, and communities,       |
| 20:40      | and how cloud data experiences are changing.                                                         |
| 20:43      | The show takes you straight to the source interviewing some seriously impressive tech                |
| 20:47      | leaders like Dr. Michael Roberts from the ISS US National Lab or Emily Christensen,                  |
| 20:53      | a master candidate in applied data science at USC.                                                   |
| 20:56      | Every episode has an interesting guest and I learned something.                                      |
| 21:00      | Check out Tech Talk wherever you get your podcasts or search for Tech Talk now or click              |
| 21:04      | the link in the show notes.                                                                          |
| 21:06      | Our thanks to HPE Tech Talk for their support of this show and all of Relay FM.                      |
| 21:12      | So let's go back to my example.                                                                      |
| 21:13      | You want to take mail and you want to put it on the left side of the screen.                         |
| 21:18      | All you would do is type the word mail then within the curly brackets, the shortcut that             |
| 21:25      | you're using to move something to the left side of the screen with Moon.                             |
| 21:29      | Yeah, that's it.                                                                                     |
| 21:31      | Using the commands with the right symbols, which are keyboard combinations.                          |
| 21:35      | And you've got to learn that syntax, but it's on the website.                                        |
| 21:38      | Although, to be fair, I have made it so flexible that you can actually write out the words           |
| 21:45      | command-option-c and it will understand that as well.                                                |
| 21:53      | I didn't know that.                                                                                  |
| 21:54      | Is it case sensitive?                                                                                |
| 21:55      | Does it matter?                                                                                      |
| 21:56      | Nope.                                                                                                |
| 21:57      | You can also use abbreviations like CMD and OPT.                                                     |
| 22:01      | And this is why people are going to love this because, yes, there is a special syntax                |
| 22:08      | which you can use and arguably maybe you should use just because that way it's very small.           |
| 22:14      | And it's potentially easy to misspell command, only putting one M in there instead of two            |
| 22:18      | or something like that or typing CTL instead of CTRL for control, but you can do whatever            |
| 22:27      | you like.                                                                                            |
| 22:28      | Always makes me laugh.                                                                               |
| 22:29      | Programmers always want to make it as small as possible, but it's a text file.                       |
| 22:33      | Just write it out.                                                                                   |
| 22:34      | Yeah.                                                                                                |
| 22:35      | Because six months from now, you're going to look at it and say, what the heck is this?              |
| 22:39      | If you write it out, you'll remember it.                                                             |
| 22:40      | I read Objective C for a lot of what I do, and it took me a long time to get used to                 |
| 22:48      | the idea of really long, very descriptive method names.                                              |
| 22:52      | Sure.                                                                                                |
| 22:53      | So now that I am used to it, I find myself applying it to Python and Ruby and all of                 |
| 23:01      | my other coding adventures.                                                                          |
| 23:03      | I use these really long names that I normally would have thought, oh, this could just be             |
| 23:08      | an X, but instead I'm going to name my variable with something very descriptive.                     |
| 23:12      | Do your other programming friends give you a hard time for that?                                     |
| 23:15      | No.                                                                                                  |
| 23:16      | I think people have come to accept that that might be a better, more readable way to code.           |
| 23:27      | It's like file names.                                                                                |
| 23:28      | For those of us who switch from PCs and were used to eight character file names with three           |
| 23:35      | character extensions, this idea that suddenly we could have entire sentences as a file name,         |
| 23:42      | it took me 10 years of using a Mac before I actually got totally comfortable with really             |
| 23:47      | descriptive file names.                                                                              |
| 23:48      | Always account for senility in your naming.                                                          |
| 23:51      | Right.                                                                                               |
| 23:52      | Yeah, exactly.                                                                                       |
| 23:53      | Well, I just want to take a moment to talk about the text file that ends with dot bunch.             |
| 24:00      | So you can give it whatever name you like, and so you have a file name, which means something        |
| 24:03      | to you.                                                                                              |
| 24:04      | And then inside of the file, you have a title section at the top, which looks to me like             |
| 24:09      | [[YAML]].                                                                                                |
| 24:10      | Is it [[YAML]], Brett?                                                                                   |
| 24:11      | Yeah.                                                                                                |
| 24:12      | It's YAML-esque, like it doesn't handle advanced structures like arrays and objects that [[YAML]]        |
| 24:19      | normally would, but it is basically key.                                                             |
| 24:22      | It's a lot like markdown metadata too, or multi-markdown.                                            |
| 24:26      | So it's just key, colon, and then a value.                                                           |
| 24:28      | Yeah.                                                                                                |
| 24:29      | So you can specify the title there, but then because it's a text file, you can include comments,     |
| 24:35      | which means that if you end up doing something like, I don't know, say you're trying to do           |
| 24:40      | something with Zoom and you need to give it five seconds before you can do something and             |
| 24:44      | you add a five-second wait, you can add a comment to yourself to say, hey, giving five-second        |
| 24:50      | wait because Zoom needs five seconds.                                                                |
| 24:53      | And so when you look back at it later, you will know what this means, hopefully, because             |
| 24:57      | you wrote a comment to yourself.                                                                     |
| 24:59      | And that's something, I think a lot of people struggle with the idea of writing a program,           |
| 25:06      | which you're not necessarily writing a program here with Bunch, you are just telling it what         |
| 25:12      | to do.                                                                                               |
| 25:13      | It's just like shortcuts only.                                                                       |
| 25:14      | It's text.                                                                                           |
| 25:15      | It's a batch file.                                                                                   |
| 25:17      | Yeah, it is.                                                                                         |
| 25:20      | It's very, very simple.                                                                              |
| 25:22      | But add comments.                                                                                    |
| 25:23      | If you add comments to whatever your automation is, then when you code and look at it in five        |
| 25:31      | minutes or five months or five years from now, because maybe something's not working quite           |
| 25:35      | right, or maybe you would like to replicate some of it, then you actually know what that             |
| 25:41      | is.                                                                                                  |
| 25:42      | And I love the fact that blank lines are ignored and just don't mean anything because that           |
| 25:45      | means I can put tons of spacing in there and have a comment that says, okay, now open these          |
| 25:49      | applications, now open these files, et cetera, and it works.                                         |
| 25:54      | And that's something that maybe I've learned from programming.                                       |
| 25:58      | You always have some space at the end of a function and then you add a comment before                |
| 26:02      | a new function that tells people what it does and what it accepts as input and what it provides      |
| 26:06      | as output.                                                                                           |
| 26:07      | That's something I'm replicating with Bunch.                                                         |
| 26:08      | People don't have to do that, but I love the fact that I can stick with a formatting                 |
| 26:13      | that's familiar to me.                                                                               |
| 26:14      | Have you been to the sample bunches page?                                                            |
| 26:17      | I went to the sample bunches page, and then I decided that I was going to try and do all             |
| 26:21      | of this by myself first, and then go back to the sample bunches page.                                |
| 26:26      | So maybe I should go look at the sample bunches page now, because-                                   |
| 26:29      | I was just going to say, because all of the reason that Bunch handles not just comments,             |
| 26:36      | but multiple formats of comments with double slashes or pound signs, or you can even do              |
| 26:42      | CSS style comments, like block comments, where it starts with a slash star and then goes             |
| 26:47      | until the next star slash, like all of that is because I wanted to really thoroughly document        |
| 26:52      | all these example bunches.                                                                           |
| 26:54      | It's kind of like Bunch can now create single site browsers all because I wanted to be able          |
| 26:59      | to display a welcome, an HTML welcome when you ran the example bunch.                                |
| 27:08      | So now it has full capabilities.                                                                     |
| 27:10      | You can load up, like you could have a single site browser for like Facebook Messenger that          |
| 27:16      | is sealed off from your other browser cookies in history and everything, and have it open            |
| 27:25      | and closed with the Bunch so you can have like a social media Bunch that has a dedicated             |
| 27:31      | Facebook window that saves your logins and everything.                                               |
| 27:36      | I just went off.                                                                                     |
| 27:37      | That was my own little rabbit hole there, but yeah.                                                  |
| 27:39      | This whole thing has really great support for websites and URLs, and you can even specify            |
| 27:45      | which browser it opens in.                                                                           |
| 27:47      | So like if you've got a website that only works in [[Firefox]] or [[Google Chrome\|Chrome]], you could tell                 |
| 27:54      | it open this URL in [[Google Chrome\|Chrome]].                                                                          |
| 27:56      | Yeah.                                                                                                |
| 27:57      | I love this.                                                                                         |
| 27:58      | I'm using it.                                                                                        |
| 27:59      | So Google Docs works fine in [[Safari]] on the Mac.                                                      |
| 28:01      | There's no problem with it, but I like the fact that it's then in a [[Google Chrome\|Chrome]] window because            |
| 28:06      | then I have [[Moom]] put [[Google Chrome\|Chrome]] in a certain spot, and I do the same thing with [[Firefox]] when             |
| 28:12      | I'm recording automators, I open it in [[Firefox]].                                                      |
| 28:16      | Why am I doing it in two different browsers?                                                         |
| 28:18      | It seemed like a good idea at the time.                                                              |
| 28:19      | It probably isn't.                                                                                   |
| 28:20      | I should probably change that at some point, but for the time being, I'm opening things              |
| 28:23      | in [[Firefox]] and [[Google Chrome\|Chrome]], and then [[Moom]] knows that, okay, [[Firefox]] goes over here, [[Google Chrome\|Chrome]]                |
| 28:29      | goes over here, [[Safari]] goes over there on the other side, and it gets resized much smaller,          |
| 28:34      | and I really like that.                                                                              |
| 28:35      | I have another basic concept that we really should tell people about.                                |
| 28:41      | And this developed early on in Bunch, but there's this idea of toggling Bunches.                     |
| 28:45      | So you can have all of these things happen when you open a Bunch, but then you can also              |
| 28:51      | close a Bunch that's already been opened, and any apps that it launched will be quit,                |
| 28:57      | and any commands, like if it hid your doc when it opened, it'll reshow your doc automatically        |
| 29:02      | when it closes.                                                                                      |
| 29:03      | And you can tell it specific things to do or not to do when closing the Bunch, using                 |
| 29:10      | basic single-character syntaxes.                                                                     |
| 29:12      | But once you have, so for me, I run in what's called Single Bunch Mode.                              |
| 29:18      | When I open one Bunch, it closes the last Bunch, so I can just, with one stroke, switch              |
| 29:24      | from recording podcasts to editing podcasts, and it changes all the available apps and               |
| 29:31      | rearranges my screen with one click.                                                                 |
| 29:34      | Yeah.                                                                                                |
| 29:35      | Yeah.                                                                                                |
| 29:36      | No, the Single Bunch Mode was the first thing that I started experimenting with, because             |
| 29:39      | to start with, I thought, well, no, I might want to use multiple Bunches at once, and                |
| 29:43      | then I read through the example Bunch.                                                               |
| 29:45      | And of course, you have the option to include other Bunches.                                         |
| 29:51      | So that means that I can write a mini thing, which is, okay.                                         |
| 29:54      | So I pretty much always need these five apps running.                                                |
| 29:58      | So I have that included now in all of my Bunches.                                                    |
| 30:02      | And again, this is where my template file is.                                                        |
| 30:04      | Nice.                                                                                                |
| 30:05      | I have a tip for you then.                                                                           |
| 30:06      | Oh, yeah.                                                                                            |
| 30:07      | And you can also, in that front matter where you would define a title, you can have a line           |
| 30:11      | that says, Single Bunch Mode colon ignore, so then that Bunch will then never close when             |
| 30:20      | another Bunch opens.                                                                                 |
| 30:21      | It'll completely ignore the fact that it's open.                                                     |
| 30:23      | Well, that might be very useful for me then.                                                         |
| 30:26      | I like that.                                                                                         |
| 30:27      | And if it's a Bunch that only ever launches apps, but you never want it to close them,               |
| 30:32      | you can also set toggles false, and that will make it so it never appears as open, so it             |
| 30:38      | can't be closed.                                                                                     |
| 30:39      | It'll only allow it to open.                                                                         |
| 30:41      | I love this.                                                                                         |
| 30:42      | I'm literally modifying this live on air.                                                            |
| 30:45      | Perfect.                                                                                             |
| 30:46      | Thank you.                                                                                           |
| 30:47      | That is so exciting.                                                                                 |
| 30:48      | You can even schedule opens and closes.                                                              |
| 30:51      | So if you have a Bunch, you can set Bunches as startup Bunches.                                      |
| 30:55      | So every time Bunch loads, it makes sure that Bunch is open.                                         |
| 30:58      | And you can also schedule, you can schedule at times of the day, you can schedule it to              |
| 31:03      | open on certain days of the week, you can schedule it to open every given interval, open             |
| 31:12      | this every hour or close this every hour.                                                            |
| 31:15      | So you can do all kinds of stuff that you always want running.                                       |
| 31:20      | You could make sure that 8 AM in the morning, it's going to launch all of those and have             |
| 31:24      | them running and then shut them down at 5.                                                           |
| 31:26      | You can do all kinds of stuff like that.                                                             |
| 31:28      | I love it.                                                                                           |
| 31:29      | And I've just linked to the front matter stuff again in the show notes.                              |
| 31:33      | So the people who are looking specifically for all of this amazing stuff, they can find              |
| 31:38      | it.                                                                                                  |
| 31:39      | Yeah.                                                                                                |
| 31:40      | One of the things you've done in this, and as soon as I saw it in there, Mike, of course             |
| 31:42      | spread out of this, it's some thorough support for URL callbacks.                                    |
| 31:47      | And I use those so much on my Mac because, you know, OmniFocus projects are URL callbacks            |
| 31:54      | for me, [[Obsidian]] pages or URL callbacks.                                                             |
| 31:57      | So I've got them sprinkled all over my system and you can embed them in a bunch.                     |
| 32:02      | So if you want to make a bunch to do one specific project, you can get to all of the pages or        |
| 32:09      | app locations you need out of your bunch, which is really nice.                                      |
| 32:14      | Check this out.                                                                                      |
| 32:15      | You can even, so a bunch has a whole system of dialogues.                                            |
| 32:19      | So you can make a bunch ask you, like offer you, do you want to work on which of these               |
| 32:23      | four projects?                                                                                       |
| 32:25      | And then when you select one project, it can tailor the bunch to load specific files for             |
| 32:32      | the project you selected.                                                                            |
| 32:34      | And you can have text input, you can have multiple choice input.                                     |
| 32:37      | You can even, as of last weekend, you can have a checkbox input.                                     |
| 32:43      | So you could have it offer you four different options and you can select as many of them             |
| 32:47      | as you want and have it perform different actions based on that.                                     |
| 32:52      | And do you have to code those options in or can you make it dynamically choose them from             |
| 32:56      | some other list?                                                                                     |
| 32:58      | You have to code those options in.                                                                   |
| 33:00      | You can, so Jay and I were talking about being able to dynamically populate the dialogues.           |
| 33:08      | It's not available yet, but it is definitely one of those one person asked for it.                   |
| 33:13      | So I might do it kind of things.                                                                     |
| 33:14      | Yeah.                                                                                                |
| 33:15      | I mean, it's just to have a very unique user experience.                                             |
| 33:18      | In fact, you could do this before you made my Latin plug-in if you wanted is like, I'd               |
| 33:24      | like you to look at my [[Kanban]] page in [[Obsidian]] and just show me everything that's an active          |
| 33:29      | project and populate that and then I could just trigger a bunch and say, okay, I'm going             |
| 33:34      | to go work on the Smith contract now or I'm going to go work on it.                                  |
| 33:37      | Is there a way to get that data as it's a markdown file on your drive?                               |
| 33:43      | Oh, okay.                                                                                            |
| 33:44      | Yeah, we can work with that.                                                                         |
| 33:46      | Yeah.                                                                                                |
| 33:47      | It's a plug-in just to do things with it, but if you look at it, I'll send you the spec              |
| 33:52      | on the plug-in.                                                                                      |
| 33:53      | It's a community plug-in, but it's really good and it's basically it's a markdown.                   |
| 33:57      | I think it's two hashes active, two hashes waiting so you could very easily see the list.            |
| 34:04      | If I add this before this goes live, you'll have to put an edit right here and say, oh,              |
| 34:09      | and Brett did that.                                                                                  |
| 34:10      | You know, I'm never going to edit it.                                                                |
| 34:12      | That's not me, but I will write it in the post.                                                      |
| 34:15      | How about that?                                                                                      |
| 34:16      | Yeah.                                                                                                |
| 34:17      | I'm going to put a link to it in the show notes so people keep an eye on the show notes.             |
| 34:20      | If you don't know about the show notes, then you should because they ought to be right               |
| 34:24      | there in your podcast player and if they're not, then you can just check the episode page            |
| 34:28      | at really.fm slash altimeters slash show number, which you could automate that.                      |
| 34:34      | Guys, this is one of the reasons why Brett is one of my favourite nerds because you just              |
| 34:37      | openly speculate about some dumb idea and he's like, oh yeah, I can probably have that               |
| 34:43      | in the next build.                                                                                   |
| 34:45      | Well, we're not going to hold you to it being in the next build, but we are going to hold            |
| 34:51      | you to this is amazing and you're going to keep working on it because I'm really, really             |
| 34:55      | enjoying this.                                                                                       |
| 34:57      | Speaking of callback URLs, Bunch has its own URL handler.                                            |
| 35:04      | So you can go two ways with it and you can easily create like an OmniFocus task and in               |
| 35:09      | the note for the task have a link that launches a bunch and the URL handler can take variables       |
| 35:15      | so you can create a link that launches a bunch and does something very specific with it makes        |
| 35:21      | it really easy to integrate across all of your applications.                                         |
| 35:25      | Well, and that's the nice thing about Bunch is because it's a text file, you could easily            |
| 35:29      | duplicate it and tweak it very quickly.                                                              |
| 35:33      | And that is the reason why I'm really attracted to this for this purpose.                            |
| 35:37      | I mean, Keyboard Master is still amazing app, but I still use it all the time, but I feel            |
| 35:40      | like this might be a more efficient way for me to handle the setup issue.                            |
| 35:45      | And I don't even need to pass a variable to Bunch.                                                   |
| 35:48      | I just need to like, because for me kind of mission control for me is [[Obsidian]].                      |
| 35:53      | Every project I have as a page in there with a bunch of links in it, like I've got to link           |
| 35:57      | to OmniFocus or I've got to link to the relevant files using hook, but I could have an entry         |
| 36:02      | in there for a bunch too and I just click it and it sets my desktop for that project,                |
| 36:09      | which would sound like a lot of Bunch can load OmniFocus for you too, like make it one               |
| 36:13      | link.                                                                                                |
| 36:14      | It could do everything.                                                                              |
| 36:15      | It could run the URL from OmniFocus and it could open Finder to the URL callback using               |
| 36:20      | hook to the project folder.                                                                          |
| 36:22      | And that would sound like a lot of work, but it's not because if it's templated, like                |
| 36:27      | all my legal projects have the same setup, but I'm just changing the locations, making               |
| 36:32      | a bunch of bunches, I guess that's what you call it.                                                 |
| 36:36      | In many, several bunches for the specific active projects would allow me to be an [[Obsidian]]           |
| 36:43      | and literally make my computer jump into that project with one click and that to me is very          |
| 36:49      | exciting.                                                                                            |
| 36:50      | Yeah.                                                                                                |
| 36:51      | Well, and to your point, like I love [[BetterTouchTool]], I love [[Keyboard Maestro]], I love              |
| 36:58      | [[Hazel]], like these are, I'm not trying to replace those.                                              |
| 37:02      | There are some things though that like building a context.                                           |
| 37:06      | It's just way easier for me to just type it out rather than having to use a UI and add               |
| 37:13      | actions to macros and like that gets time consuming.                                                 |
| 37:18      | And honestly, for the kind of stuff Bunch does, I find creating macros for it frustrating,           |
| 37:26      | which is why, you know, I thought this should just be plain text, yeah.                              |
| 37:32      | We haven't even mentioned, well, we did mention briefly.                                             |
| 37:35      | You can fire off an AppleScript with an asterisk, I mean, that's it, you know, type                 |
| 37:41      | it in, but you can also do other types of scripting.                                                 |
| 37:44      | So this actually can run very deep if you want to go down that, down that path.                      |
| 37:49      | And with stuff like shell scripts, it even offers script monitors.                                   |
| 37:55      | So you can see the output and the standard out and standard error output from a running              |
| 38:01      | script and you can, with Windows that Bunch creates things like task monitors and single             |
| 38:08      | side browsers and it can, it can display anything that has a quick look preview can                  |
| 38:13      | display in a window.                                                                                 |
| 38:14      | All of those can be arranged and you can give it very specific pixel positions, widths               |
| 38:19      | and heights, colours, like all of that is completely manageable within Bunch, unlike apps that        |
| 38:27      | it happens to launch.                                                                                |
| 38:28      | But yeah, I lost my train of thought, I diverted my rabbit hole diverge.                             |
| 38:35      | The pool runs deep and really my goal for having you here today is for people who haven't            |
| 38:40      | even launched Bunch to download and try it because I think you don't have to go down                 |
| 38:45      | shell scripting, you know, to make this a really powerful tool, but, but just for a                  |
| 38:50      | second here, let's indulge ourselves, okay, forget about the beginner stuff.                         |
| 38:56      | What is the craziest thing you've seen somebody do with Bunch now that you've put in the world?      |
| 39:01      | Oh, I think I still have the craziest bunches I've seen.                                             |
| 39:05      | Jay definitely is the guy who pushes the limits the furthest among like the current batch            |
| 39:14      | of beta testers.                                                                                     |
| 39:15      | If there's going to be, if anyone's going to say, hey, it does this, but I wish it does              |
| 39:21      | this, it would be Jay.                                                                               |
| 39:24      | My podcasting Bunch is fairly complex.                                                               |
| 39:27      | There's a skeleton version of it on the sample page, but it basically, it does a lot of what         |
| 39:35      | Rose was talking about.                                                                              |
| 39:36      | It quits some apps.                                                                                  |
| 39:38      | Like for me, it quits, I have a bunch called comms that is messages, [[Slack]], [[Discord]], Twitter,        |
| 39:47      | like, and so those all the exact same thing.                                                         |
| 39:50      | Yeah.                                                                                                |
| 39:51      | And those launch and quit as a group.                                                                |
| 39:53      | So my podcasting Bunch, the first thing it does is quit the comms bunch.                             |
| 39:58      | But because when I'm podcasting, I usually do want messages and [[Discord]] up those right               |
| 40:04      | after the line that quits that bunch, messages in [[Discord]] launch and Bunch will check before         |
| 40:10      | it quits any apps in a bunch.                                                                        |
| 40:13      | It'll see if those apps also exist in the new Bunch and it won't quit those.                         |
| 40:18      | So it leaves those two alone.                                                                        |
| 40:19      | It turns on do not disturb, it sets my audio output and input and volumes before loading             |
| 40:26      | up [[Audio Hijack]], opens up NVUltra to my podcasting notebook, loads up [[Audio Hijack]], and then         |
| 40:34      | it sends key commands to open the sessions window of [[Audio Hijack]] because you can't,                 |
| 40:41      | you can't open a specific session in [[Audio Hijack]] without the mouse, which is annoying.              |
| 40:48      | So it hits, for me, it hits the right arrow 13 times and then hits command, oh, and then             |
| 40:54      | switches back to that window and closes it and has me all ready to go.                               |
| 40:59      | Loads up [[Skype]] opens [[Firefox]] with my, my sponsor list and then runs a [[Moom]], a [[Moom]] snapshot          |
| 41:10      | to arrange it all for me.                                                                            |
| 41:12      | It gets, it's pretty intense.                                                                        |
| 41:14      | I'm on this campaign to get Mac app developers to become more automation friendly and I found        |
| 41:19      | an avenue that works and that is, because people don't want to deal with AppleScript                |
| 41:25      | implementation or, you know, whatever the, you know, whatever the hangup is that they                |
| 41:30      | just don't want to go there because I feel like [[Audio Hijack]] is nearly a perfect app                 |
| 41:34      | except it is not that automation friendly.                                                           |
| 41:37      | And so what I tell people now is like, add a single menu item where users can add their              |
| 41:44      | favourite actions from your application, like an [[Audio Hijack]], it would be your, your favourite,       |
| 41:49      | you know, audio recipes, or I just like talk the guy because timer is coming out with a              |
| 41:55      | Mac app.                                                                                             |
| 41:56      | And I'm like, just put all the timers in the menu bar.                                               |
| 41:59      | That's all I need.                                                                                   |
| 42:00      | Once you put it in the menu bar, I'm home.                                                           |
| 42:02      | I can, I can automate it, you know, well, and being like, so in the case of forklift,                |
| 42:08      | which is my favourite file manager, there's a lot of automation that it cannot do that                |
| 42:13      | finder typically with a little, actually with a lot of AppleScript, you can make finder             |
| 42:18      | do it, but you can't do it at all in forklift, but forklift lets you add custom keyboard             |
| 42:24      | shortcuts for just about everything and including like save sets of windows and tabs.                |
| 42:30      | And you can just assign a keyboard shortcut and then something like bunch can easily just            |
| 42:35      | trigger the keyboard shortcut for it.                                                                |
| 42:37      | Yeah.                                                                                                |
| 42:38      | Well, that's, that's all we need is we need it in a menu bar, we need a keyboard shortcut            |
| 42:41      | and, and the automator nerds will do the rest.                                                       |
| 42:45      | We're good.                                                                                          |
| 42:46      | Yeah.                                                                                                |
| 42:47      | Yeah, we will.                                                                                       |
| 42:48      | As we're recording this, they just released [[Dark Noise]], which is, you know, one of my                |
| 42:54      | favourite apps for white noise.                                                                       |
| 42:56      | I need a white noise app running almost 24 seven and Charlie Chapman, not that one,                  |
| 43:03      | but the Charlie Chapman, the app developer, Charlie, I sent him a note.                              |
| 43:07      | Hey, Charlie, give me a menu item.                                                                   |
| 43:09      | That's all I need.                                                                                   |
| 43:10      | And he wrote me back as like, Oh, that's a lot easier than AppleScript.                             |
| 43:14      | Yep.                                                                                                 |
| 43:15      | Yeah.                                                                                                |
| 43:16      | AppleScript is not fun to implement.                                                                |
| 43:18      | Yeah.                                                                                                |
| 43:19      | Well, gang, we're going to talk, we're going to go down that rabbit hole.                            |
| 43:23      | We're going back to it in just a minute, but if you haven't tried bunch, you should.                 |
| 43:27      | I believe contextual computing is the thing, you know, being able to set your computer               |
| 43:32      | up to do your bidding for you automatically means you get your work done faster, helps               |
| 43:37      | you switch and engage your brain and Brett has made an amazing tool for it.                          |
| 43:41      | So go download it.                                                                                   |
| 43:43      | We released a show on Friday for a reason you can, you have the whole weekend to figure              |
| 43:47      | out a bunch.                                                                                         |
| 43:48      | I will interject.                                                                                    |
| 43:49      | I had strong plans, I had solid plans to make a bunch of commercial app.                             |
| 43:55      | Yeah.                                                                                                |
| 43:56      | And even if it, like I was going to probably do a low subscription price on it, but then             |
| 44:02      | I got this fancy corporate job and so A, I don't need the money as much and B, I don't               |
| 44:11      | have time to support another commercial app.                                                         |
| 44:14      | I already had two and so I'm keeping it as a labor of love for the time being and for                |
| 44:21      | the foreseeable future bunches free.                                                                 |
| 44:24      | We'll call it donation where you're welcome to pay what you can for it, but it will continue         |
| 44:30      | to be that.                                                                                          |
| 44:31      | I feel like I need to sign up for like the recurring Brett Terpstra subscription plan               |
| 44:36      | where I can just give you money on a regular basis for all the cool stuff you make.                  |
| 44:40      | I'm offended that you haven't.                                                                       |
| 44:42      | Do you have one of those?                                                                            |
| 44:44      | Yeah.                                                                                                |
| 44:45      | Brett Terpstra.com slash, I think it's support, like I have a donate button.                         |
| 44:49      | Yeah.                                                                                                |
| 44:50      | If you go to Brett Terpstra.com/support, you can sign up using Memberful or PayPal             |
| 44:55      | and just send me three bucks a month for all of this stuff I make.                                   |
| 44:58      | I'm going to.                                                                                        |
| 44:59      | Well, as soon as we hang up here, man, I'm going to do that.                                         |
| 45:05      | This episode of The Automators is brought to you by TextExpander from our friends at                 |
| 45:09      | Smile.                                                                                               |
| 45:10      | TextExpander removes the repetition out of work, so you can focus on what matters most.              |
| 45:15      | Say goodbye to repetitive text entries, spelling errors, and trying to remember the right thing      |
| 45:20      | to say.                                                                                              |
| 45:21      | When you use TextExpander, you can say the right thing in just a few keystrokes.                     |
| 45:25      | It's better than copy and paste and better than scripts and templates.                               |
| 45:29      | TextExpander snippets allow you to maximise your time by getting rid of the repetitive               |
| 45:33      | things you type while still customising and personalising your messages.                             |
| 45:38      | TextExpander can be used in any platform, any app, anywhere you type.                                |
| 45:43      | Take your time back and increase your productivity with TextExpander.                                |
| 45:47      | I use it every day.                                                                                  |
| 45:48      | I feel like a computer without TextExpander installed on it is like typing with one hand             |
| 45:53      | tied behind my back.                                                                                 |
| 45:54      | I just really use it for everything.                                                                 |
| 45:56      | The thing I love about TextExpander is it's not just simple text replacement.                        |
| 46:01      | It allows you to use automation, which we love here, of course, on the automators.                   |
| 46:05      | It allows you to automatically insert dates and months or fill-in fills or even access               |
| 46:10      | your clipboard.                                                                                      |
| 46:12      | It's way more powerful than any other copy and replace tool.                                         |
| 46:17      | As listeners of the automators, you can get 20% off your first year.                                 |
| 46:21      | Just go to textexpander.com/podcast to learn more about TextExpander.                          |
| 46:26      | Once again, that's textexpander.com/podcast.                                                   |
| 46:30      | Use the same tool that Rose and I use every day to get our work done.                                |
| 46:34      | TextExpander is awesome, and you can get 20% off with that link.                                     |
| 46:38      | Our thanks to TextExpander from Smile for their support of the automators and all of                 |
| 46:43      | RelayFM.                                                                                             |
| 46:44      | So, Brett, can we drag David down the keyboard shortcuts rabbit hole now?                            |
| 46:49      | What do you reckon that's going to work?                                                             |
| 46:51      | Willingly, willingly.                                                                                |
| 46:52      | Take me.                                                                                             |
| 46:53      | So, Brett, Hyper Key maestro, where are you at with keyboard shortcuts right now?                     |
| 46:59      | How are you doing your Hyper Key?                                                                     |
| 47:00      | Are you still using Karabiner?                                                                       |
| 47:02      | Are you using something else?                                                                        |
| 47:03      | So [[BetterTouchTool]] added the capability.                                                             |
| 47:08      | But last time I tried it, it wasn't as lag-free and seamless as using Karabiner elements.            |
| 47:17      | So I still am currently using Karabiner elements, but I use [[BetterTouchTool]] so much that if it       |
| 47:24      | becomes truly viable, I will gladly consolidate and just do it all in [[BetterTouchTool]].               |
| 47:30      | And I'm hearing reports from people on Apple Silicon having significant problems with Karabiner?     |
| 47:36      | Oh, I am not.                                                                                        |
| 47:39      | Even with SIP enabled on my M1, Karabiner works fine, the latest versions do.                        |
| 47:43      | Well, I heard from one listener who was having crashes until he had installed Karabiner and          |
| 47:47      | then it started working fine.                                                                        |
| 47:50      | I have not had that trouble.                                                                         |
| 47:52      | So either way, I've been running it just on [[BetterTouchTool]] and it's been okay.                      |
| 47:56      | But for the listeners who aren't aware, Hyper Key, I think did you coin that term, Brett, or          |
| 48:02      | did you get that?                                                                                    |
| 48:03      | No, I did not.                                                                                       |
| 48:04      | I got to give credit to, oh man, I've even forgotten where it came from.                             |
| 48:08      | There was an article called Space...                                                                 |
| 48:14      | I will find a link.                                                                                  |
| 48:15      | It'll be in the show notes, a link to the original Hyper Key.                                         |
| 48:20      | If you Google Hyper Key, my name comes up before it now because I've been using it so much.           |
| 48:25      | But...                                                                                               |
| 48:26      | Yeah, the earliest record I have found so far on your website dates back to 2013.                    |
| 48:30      | Nope, 2012.                                                                                          |
| 48:33      | And I'm just going to keep digging until I find that.                                                |
| 48:36      | Steve Losh, perhaps, there we go, because that was linked in your 2012 article.                      |
| 48:41      | I will put that in the show notes.                                                                   |
| 48:44      | But the idea is, as Brett was saying earlier, we have limited real estate for keyboard shortcuts     |
| 48:50      | on our devices.                                                                                      |
| 48:51      | I mean, there's a bunch that Apple has already built into the system.                                |
| 48:53      | We can't use those.                                                                                  |
| 48:54      | I mean, Command-C is taken, right?                                                                   |
| 48:58      | But there are keys that you can use.                                                                 |
| 49:02      | Double key and option or combinations of that or combinations of control and option and              |
| 49:06      | shift are always good resources.                                                                     |
| 49:10      | But we want more.                                                                                    |
| 49:11      | And Steve Losh came up with the idea, and Brett has followed up on it, and I'm a total               |
| 49:16      | advocate of this, as well, of what we call a Hyper Key, which is the combination shift                |
| 49:22      | control option command, which is basically all three buttons to the left of your space               |
| 49:27      | bar plus shift.                                                                                      |
| 49:29      | But that is quite a finger-tangler to hit all those four as a modifier key.                          |
| 49:36      | But instead of doing that, you attach it to the caps lock key, which is the Hyper Key.                |
| 49:41      | So the caps lock key that we never use, instead, you convert that into a shift command option        |
| 49:48      | control, and then you can combine that with a whole other set of keys on your keyboard.              |
| 49:53      | So Hyper KeyD could open a new [[Drafts]] note.                                                           |
| 49:58      | So Rose wouldn't have that conflict with [[ScreenFlow]] anymore.                                        |
| 50:01      | Yeah.                                                                                                |
| 50:02      | And then I just have to train my brain to use that keyboard shortcut, which I never ever             |
| 50:06      | used in [[ScreenFlow]], and it became a default when [[Drafts]] arrived on the Mac, and then                |
| 50:10      | my brain immediately went, yes, I like this, I shall use this only to discover that something        |
| 50:16      | else had already co-opted it.                                                                        |
| 50:18      | So if you want to take that a step further, then you get into key sequences, and you can             |
| 50:24      | do this with a [[Keyboard Maestro]], you can do it with [[BetterTouchTool]], and you can do                |
| 50:28      | it with, if you want to hack your own key bindings file, basically make it so that like on my        |
| 50:35      | keyboard, if I hit Hyper S, it opens up a launcher, like a macro group in [[Keyboard Maestro]], and       |
| 50:45      | then another letter will launch an app.                                                              |
| 50:47      | So instead of taking up [[Hyper Key]]-SS with, say, [[Skype]], I can make it [[Hyper Key]]-SS, and then I              |
| 50:53      | have to ask again to launch [[Skype]], but any other letter.                                             |
| 50:56      | So like your entire keyboard opens up again.                                                         |
| 51:00      | And so it's like gateways into new groups of hotkeys, a lot to memorise, but a lot,                  |
| 51:05      | but not that much.                                                                                   |
| 51:06      | If you use those bunchings, and the way I do that in [[Keyboard Maestro]], I'm curious how               |
| 51:10      | you do it, Brett, is I actually just use conflict palettes for it because with the keyboard          |
| 51:15      | maestro, it auto-generates the secondary key presses.                                                |
| 51:20      | Like for me, Hyper KeyM is MacSparky, and from that, it's a full list of items.                      |
| 51:28      | It fills the screen, but if I type Hyper KeyM, and then F, then it brings up the focus podcast,       |
| 51:34      | or if I hit Hyper KeyM, then A, it brings up automators.                                              |
| 51:38      | If I hit Hyper KeyM, then A, then G, it opens the Google Docs for automators.                         |
| 51:45      | And those get under your fingers a lot faster than you think they would.                             |
| 51:48      | Yes.                                                                                                 |
| 51:49      | Or you could use Hyper KeyB to trigger all your bunches.                                              |
| 51:54      | Yes.                                                                                                 |
| 51:55      | I actually have quite a few of my bunches on exactly that kind of grouping.                          |
| 52:01      | There's a bunch folder in [[Keyboard Maestro]], but I actually mostly launch my bunches from             |
| 52:08      | my [[Stream Deck]], which is kind of a whole other keyboard shortcut thing.                              |
| 52:12      | Yeah.                                                                                                |
| 52:13      | Yeah, it is.                                                                                         |
| 52:14      | It is.                                                                                               |
| 52:15      | See, we're in rabbit holes and rabbit holes, guys.                                                   |
| 52:18      | Yes.                                                                                                 |
| 52:19      | Yeah.                                                                                                |
| 52:20      | Rose, how do you deal with running out of keyboard shortcuts?                                        |
| 52:23      | As [[Stream Deck]], and I recently purchased a CAD mouse, which has more buttons on it.                  |
| 52:28      | What mouse?                                                                                          |
| 52:29      | I haven't even heard this.                                                                           |
| 52:30      | A CAD mouse.                                                                                         |
| 52:32      | So this is primarily for people who do 3D modeling and things like that, which I'm getting into      |
| 52:37      | a little bit because I recently purchased a 3D printer.                                              |
| 52:40      | But a CAD mouse, basically, so I'm using it with my left hand, so it's got a scroll wheel            |
| 52:48      | type thing on it.                                                                                    |
| 52:49      | It's meant for manipulating 3D models.                                                               |
| 52:51      | Also works pretty well for editing audio and video, at least in my trial so far, but it's            |
| 52:56      | got a whole bunch of extra buttons on there, which I can program.                                    |
| 53:00      | But mostly I'm using my [[Stream Deck]] and folders and profiles within my [[Stream Deck]] for handling      |
| 53:06      | all of that because the folders and profiles in [[Stream Deck]] make a huge difference and               |
| 53:10      | being able to easily switch from one profile, aka context, to another gives me 32 buttons,           |
| 53:19      | which can be folders as well.                                                                        |
| 53:21      | So I really like that.                                                                               |
| 53:23      | Well, it is a challenge, honestly.                                                                   |
| 53:26      | Finding your way around it in the hyper key was awesome because it opened up what another            |
| 53:30      | 30 or so keys you could use.                                                                         |
| 53:32      | Another trick you could use is get a keyboard with a 10 key on it, even if you're not an             |
| 53:38      | accountant, but that 10 key, although it makes it a little farther reach to get to your mouse,       |
| 53:44      | it gives you a whole panel of buttons you can automate.                                              |
| 53:47      | Well, and you can buy those separate too.                                                            |
| 53:50      | Yeah.                                                                                                |
| 53:51      | I have a 10 keypad that's just a little USB one.                                                     |
| 53:54      | Yeah.                                                                                                |
| 53:55      | And then you could do what Brett did and buy the Ultimate Hackers keyboard.                          |
| 54:00      | Okay, so Brett and I have this ongoing text thread and we talk about stuff, but about                |
| 54:06      | every six months, I will text him to ask him about his keyboard because it surfaces in               |
| 54:13      | my brain that this would be something I would like, but then I look at the pictures and              |
| 54:17      | I look at all the cables and it just seems like a lot of work to me and I never buy it.              |
| 54:23      | Tell us about your hacker keyboard, Brett.                                                           |
| 54:25      | What do you mean all the cables?                                                                     |
| 54:28      | It's wired, so it plugs in, but then there's one cable that connects the two separate halves         |
| 54:33      | of it.                                                                                               |
| 54:34      | Yeah, that bothers me.                                                                               |
| 54:35      | But how are you going to have a split keyboard with no cable?                                        |
| 54:40      | I don't know.                                                                                        |
| 54:41      | I don't know.                                                                                        |
| 54:42      | But that's kind of the point of it, though, is that it's a split keyboard and you can                |
| 54:47      | attach the feet in ways that either make it tent from the middle or in from the sides                |
| 54:53      | or tilt forward.                                                                                     |
| 54:55      | You can tilt it on whatever axis you need to and then it has no function keys.                       |
| 55:01      | It has no arrow keys.                                                                                |
| 55:02      | Everything is done by, like if I want to hit the right arrow, I hold down the mod key,               |
| 55:07      | which is under where the space bar would be for my right thumb because I switched them.              |
| 55:13      | And then I hit IJKNL for arrow keys.                                                                 |
| 55:16      | And once you get used to that, you never have to leave the home row of your keyboard.                |
| 55:20      | It's amazing.                                                                                        |
| 55:21      | Yeah.                                                                                                |
| 55:22      | I mean, you are a big advocate of this keyboard and it's really an amazing keyboard.                 |
| 55:26      | It's modular, so you want to put a little thumb mouse on it.                                         |
| 55:30      | You can do that or a little trackpad.                                                                |
| 55:33      | You can do that too.                                                                                 |
| 55:34      | And I have those now.                                                                                |
| 55:36      | Okay.                                                                                                |
| 55:37      | They haven't like they haven't officially ever shipped the modules after like four years.            |
| 55:42      | Oh, really?                                                                                          |
| 55:43      | They send out, send out updates every month.                                                         |
| 55:44      | Here's where we're at with the module development.                                                   |
| 55:47      | But they put me, I talk about it enough that they put me on like the beta testers.                   |
| 55:52      | Sure.                                                                                                |
| 55:53      | And so I have all of the modules and I have tested them all and I have the V2 of the keyboard.       |
| 56:00      | So that's what I'm using now with RGB backlighting and everything.                                   |
| 56:05      | But yeah, like all the modules and the keyboard are all fully programmable.                          |
| 56:11      | So you pop up, it's called the agent.                                                                |
| 56:13      | And you can change what every single key does on all the different layers like the function          |
| 56:19      | mod and there's a mouse layer.                                                                       |
| 56:21      | If you hold down the mouse key, the arrow keys move your mouse instead of the cursor.                |
| 56:25      | It's yeah, it's cool.                                                                                |
| 56:27      | I, you know, as soon as I brought this up, I knew that Rosa was going to be tempted and              |
| 56:31      | her silence makes me think she's like buying one right now.                                          |
| 56:35      | I'm not, but I have a very important question for you for you, Brett, we're going off side           |
| 56:39      | rabbit hole here.                                                                                    |
| 56:40      | Hold on to your hat, David.                                                                          |
| 56:42      | So RGB backlighting, is this per key backlighting?                                                   |
| 56:45      | Is this whole keyboard is one colour at a time backlighting?                                          |
| 56:49      | How is this backlighting working?                                                                    |
| 56:51      | It is per key.                                                                                       |
| 56:53      | And like if you hold down one of the keys that modifies the keyboard.                                |
| 56:59      | So like if I hold down the mod key, it highlights the like the arrow keys for me and it highlights   |
| 57:05      | the keys that I've assigned special functions to with a colour based on what kind of function         |
| 57:11      | they have.                                                                                           |
| 57:13      | So it's actually like in general, I don't care about RGB backlighting.                               |
| 57:18      | It seems like a nice to have at best.                                                                |
| 57:23      | But this is actually pretty functional.                                                              |
| 57:25      | I can appreciate it.                                                                                 |
| 57:26      | Yeah, no, I was going to ask if it's tied to the function keys and stuff.                            |
| 57:30      | So I have tried split keyboards before.                                                              |
| 57:34      | It was primarily the Microsoft one, which I believe Marco Arment uses the black one.                  |
| 57:40      | I tried the surface one, the gray one, didn't really like it all that much.                          |
| 57:45      | It was just, I don't know, something about it.                                                       |
| 57:49      | But I, you know, I've tried split keyboards and I kind of like them.                                 |
| 57:53      | Sometimes they're sometimes they're great, sometimes they're not so great, but I have                |
| 57:56      | at least one finger which likes to complain about things.                                            |
| 58:00      | So I need to find a decent keyboard, which will help my hands.                                       |
| 58:04      | I may be going down that rabbit hole at some point.                                                  |
| 58:08      | I don't know.                                                                                        |
| 58:09      | I've got a new keyboard with a touch ID arriving with my new purple iMac, which apparently has       |
| 58:13      | shipped into dramatic music here.                                                                    |
| 58:16      | I am looking forward to getting that, that keyboard, but I can't work without the split              |
| 58:23      | keyboard.                                                                                            |
| 58:24      | I can't, I also can't use a static split keyboard where it's all one piece.                          |
| 58:29      | Like I need to be able to position the two halves correctly for like my personal ergonomics.         |
| 58:37      | So I don't do well with anything that might, where it's split, but they decide where my              |
| 58:43      | hands go.                                                                                            |
| 58:44      | Yeah.                                                                                                |
| 58:45      | And I think that's one of the reasons why I struggled more with the surface.                         |
| 58:48      | It felt, it was a different setup to the previous one, the previous Microsoft keyboard.              |
| 58:54      | And that just, you know, caused problems basically for me.                                           |
| 58:57      | And it was also a angle to a different axis.                                                         |
| 59:02      | That's not great.                                                                                    |
| 59:03      | But I really love the idea of keys lighting up differently depending on what function                |
| 59:07      | mode you're in.                                                                                      |
| 59:08      | David, I bet you could use this for context switching, you know, program it to change                |
| 59:12      | colours so you can have, I don't know, green for my power users, red for automators, blue             |
| 59:16      | for focused.                                                                                         |
| 59:17      | I've gone down this rabble.                                                                          |
| 59:19      | I've even had it in my cart, but I just can never bring myself to buy it.                            |
| 59:23      | And when you look at it, it looks like, I feel like it's like, if ever read about how                |
| 59:28      | they used to make cars, you know, like now they have an assembly line and the car goes               |
| 59:31      | through.                                                                                             |
| 59:32      | But the old days, like the one guy would build a car, like, you know, he'd start with a piece        |
| 59:39      | of steel and like a craftsman, like a furniture craftsman, he would end up with a car.               |
| 59:44      | I feel like this is the factory for the ultimate hacking keyboard.                                   |
| 59:47      | There's like a bunch of really smart guys with little tables where they build the keyboard           |
| 59:53      | artisanally.                                                                                         |
| 59:54      | It's not even a bunch.                                                                               |
| 59:55      | I think there's two guys.                                                                            |
| 59:56      | Yeah.                                                                                                |
| 59:57      | The, the beta that I'm using was hand soldered by one person.                                        |
| 01:00:01   | Yes, exactly.                                                                                        |
| 01:00:02   | Like it was built from scratch for me.                                                               |
| 01:00:04   | That's the feel these keyboards have.                                                                |
| 01:00:06   | And I kind of like that.                                                                             |
| 01:00:07   | And then the other piece of it, which Brett hasn't even gone down as far as Brett is                 |
| 01:00:12   | capable of is you can get into the source code of this keyboard.                                     |
| 01:00:15   | You can like, when they say hacking keyboard, they mean it.                                          |
| 01:00:18   | I mean, you can reprogram.                                                                           |
| 01:00:20   | If you say, I'm tired of A being an A, I want A to be an F, you know, you could do that              |
| 01:00:25   | with this keyboard.                                                                                  |
| 01:00:27   | Even more than that, the entire, all of the hardware and software that, that does everything         |
| 01:00:35   | is open source.                                                                                      |
| 01:00:36   | Like you, not only can you reprogram the keys, you can reprogram the program that reprograms         |
| 01:00:42   | the keys.                                                                                            |
| 01:00:43   | Yeah.                                                                                                |
| 01:00:44   | Like it's, it's, it's turtles all the way down.                                                      |
| 01:00:46   | Yeah.                                                                                                |
| 01:00:47   | And it seems like that would be a fun project to get one of these and just see where it              |
| 01:00:51   | leads you.                                                                                           |
| 01:00:52   | But then I think, man, I have a lot of work to do.                                                   |
| 01:00:55   | I feel like if I bought one of these, I would lose days into this keyboard.                          |
| 01:01:01   | You got to want to, it's, it's a, you got to want your free time to go to that kind                  |
| 01:01:05   | of thing.                                                                                            |
| 01:01:06   | Yeah.                                                                                                |
| 01:01:07   | But I know some of your free time has.                                                               |
| 01:01:09   | So what are you doing with it?                                                                       |
| 01:01:11   | It's such a like ingrained part of my life now that I don't think about it all that much.            |
| 01:01:17   | So I do a lot of key binding hacking.                                                                |
| 01:01:20   | You're probably familiar with my massive key bindings file for Mac OS, which still works             |
| 01:01:26   | with Big Sur and Apple Silicon.                                                                      |
| 01:01:29   | I love that it does.                                                                                 |
| 01:01:32   | So a lot of my keyboard hack, hackery isn't specific to the UHK, um, however, I do have              |
| 01:01:41   | it customised to the point where even if I got another UHK, I wouldn't be able to use                |
| 01:01:47   | it.                                                                                                  |
| 01:01:48   | Um, like I've, I've customised mine to the point where the keys are exactly where I want             |
| 01:01:53   | them to be, but not.                                                                                 |
| 01:01:58   | And I, yeah, I certainly, if I try to type, if I take my laptop and try to type on the               |
| 01:02:03   | Apple keyboard, both, it feels wrong.                                                                |
| 01:02:07   | Like my, I don't, I don't, I don't have feelings in some of my fingers.                              |
| 01:02:11   | So I can't feel the edges of flat keys, which makes it hard to like touch type.                      |
| 01:02:17   | So I can't, I can't do it, uh, hardware wise, but also if like, so my hyper key is also              |
| 01:02:24   | an escape key.                                                                                       |
| 01:02:25   | Is yours that way?                                                                                   |
| 01:02:27   | No.                                                                                                  |
| 01:02:28   | Yeah.                                                                                                |
| 01:02:29   | So if I hold down the hyper key and press a letter, then it's a hyper key.                           |
| 01:02:32   | But if I just tap it, it's an escape key, which for people like using Vim escape is                  |
| 01:02:39   | something you use all the time.                                                                      |
| 01:02:42   | And it's very ingrained in my muscle memory that I don't go up to the upper left for escape.         |
| 01:02:48   | I use the cap slot key.                                                                              |
| 01:02:50   | And uh, so using other people's keyboards in general never works well for me.                        |
| 01:02:55   | Now you're doing that with a key binding or is that part of the, the hackers keyboard?               |
| 01:03:00   | Uh, well, it's part of my carabiner, uh, the, what do they call it?                                  |
| 01:03:06   | The setting in carabiner, uh, it has an, it has an, if, if pressed with another key,                 |
| 01:03:12   | do this, if just pressed alone, do this.                                                             |
| 01:03:15   | Yeah.                                                                                                |
| 01:03:16   | Uh, you can also do that with the UHK agent, but I found it better to just do it all through         |
| 01:03:22   | carabiner right now.                                                                                 |
| 01:03:23   | If you use your laptop and you don't have your ultimate hacking keyboard with you, is                |
| 01:03:28   | it hard for you to work?                                                                             |
| 01:03:30   | Yes.                                                                                                 |
| 01:03:31   | Very.                                                                                                |
| 01:03:32   | Yeah.                                                                                                |
| 01:03:33   | Interesting.                                                                                         |
| 01:03:34   | I don't, I don't actually work on my laptop.                                                         |
| 01:03:36   | I'll, I'll do some writing.                                                                          |
| 01:03:37   | I can, I can write as long as I'm not trying to like hit key combinations and do anything            |
| 01:03:42   | special.                                                                                             |
| 01:03:43   | I can open up multi-markdown composer and I can write a blog post on my laptop without               |
| 01:03:47   | too much pain, but doing any kind of actual like coding or, uh, anything that involves               |
| 01:03:54   | my very custom keyboard layout, uh, is kind of pointless for me, which is why I bought               |
| 01:04:01   | when it came time for a new computer.                                                                |
| 01:04:04   | I just bought a mini because why, if I can't use a laptop as a laptop, what's the point?             |
| 01:04:10   | I'll just get a, I'll put the extra money into pimping out this Mac mini and I'm really              |
| 01:04:16   | happy with the decision.                                                                             |
| 01:04:18   | Yeah.                                                                                                |
| 01:04:19   | It's a really good computer now.                                                                     |
| 01:04:20   | It is.                                                                                               |
| 01:04:21   | It really is.                                                                                        |
| 01:04:22   | I really miss mine.                                                                                  |
| 01:04:23   | I'm just, I had to return it because the second that they said purple.                               |
| 01:04:27   | Yeah.                                                                                                |
| 01:04:28   | It was at a Mac mini for like a few days and then they announced the iMacs.                          |
| 01:04:35   | So I bought it because at that point, because I thought they're going to release something           |
| 01:04:40   | and either it's going to be, you know, it's going to be the yes, I should have an M1 Mac             |
| 01:04:44   | mini or it's going to be the I, I should not have an M1 Mac mini.                                    |
| 01:04:49   | Uh, I should be getting whatever the thing is that they announced and then they said                 |
| 01:04:52   | purple and it was just like, okay, I wasn't all that sure on the iMac, but I was considering         |
| 01:04:58   | adding another monitor to my setup and everything anyway.                                            |
| 01:05:00   | And then yeah, they said purple.                                                                     |
| 01:05:02   | So I held out until after that keynote before I decided to buy the Mac mini, but the iMacs           |
| 01:05:08   | did not excite me enough to change my Mac mini plan.                                                 |
| 01:05:13   | I did, however, immediately order a new Apple TV remote.                                             |
| 01:05:16   | Yeah.                                                                                                |
| 01:05:17   | Same.                                                                                                |
| 01:05:18   | Or a week later anyway.                                                                              |
| 01:05:19   | I got one and then I bought a second one because it ruins you.                                       |
| 01:05:25   | It does.                                                                                             |
| 01:05:26   | This episode of Automated is brought to you by Discourse.                                            |
| 01:05:30   | Discourse was founded in 2013 by Jeff Atwood from Stack Overflow, Robin Ward and Sam Saffron.        |
| 01:05:35   | It's a powerful, flexible open source community platform where discussions are searchable            |
| 01:05:40   | so you can find all the relevant details for your project.                                           |
| 01:05:43   | The platform is designed with moderation in mind, helping you keep the discussion on                 |
| 01:05:47   | track and high value while minimising the impact of trolls and spam.                                 |
| 01:05:51   | And it integrates with Zapier, Patreon, Memberful and more.                                          |
| 01:05:55   | I love how Internet communities can both be very close-knit, but also just let other                |
| 01:06:00   | people in and anyone join the conversation.                                                          |
| 01:06:03   | Of course, that's assuming they're not a spammer.                                                    |
| 01:06:05   | And forums like Discourse help you build a community by linking people to pre-existing               |
| 01:06:11   | topics when they create a new one, if it seems relevant, and helping people learn how to use         |
| 01:06:15   | the software.                                                                                        |
| 01:06:17   | And of course, we use Discourse here at Automators at talk.automators.fm, our very own forum.        |
| 01:06:24   | And it's brilliant.                                                                                  |
| 01:06:26   | Discourse offers a 100% 14-day free trial, and after that, plans start at $100 a month.              |
| 01:06:32   | And the folks at Discourse are giving Automators listeners 50% off your first two months after       |
| 01:06:37   | you start your subscription.                                                                         |
| 01:06:39   | Just go to Discourse.org and use the coupon code RELAY2021 when signing up.                          |
| 01:06:45   | That's Discourse.org code RELAY2021 when signing up for 50% off your first two months.               |
| 01:06:52   | And I also wanted to mention their new offering, Discourse for Teams.                                |
| 01:06:56   | It's perfect for smaller teams or businesses using Discourse to collaborate.                         |
| 01:07:00   | And because it's a private-focused Discourse instance with added features, including the             |
| 01:07:05   | new sidebar, automatic ice brokers, team updates, and more, it helps teams work together more        |
| 01:07:10   | effectively.                                                                                         |
| 01:07:11   | There isn't currently enough code for the teams offering, but plans start at $20 a month.            |
| 01:07:16   | And if you want to learn more about that, you can go to teams.discourse.com.                         |
| 01:07:21   | Our thanks to Discourse for their support of this show and RELAYFM.                                  |
| 01:07:27   | We have been throwing around the term keybindings a bit, and I don't think we've ever talked         |
| 01:07:31   | about it on this show.                                                                               |
| 01:07:33   | And there may be some listeners that are curious.                                                    |
| 01:07:35   | Could you explain what you mean by keybindings and how you're pulling that off?                      |
| 01:07:40   | Okay.                                                                                                |
| 01:07:41   | So, macOS has an underlying text system, and it's in any text field, whether it's a single           |
| 01:07:49   | input field or like the editor in your favourite text editor, it all uses this underlying             |
| 01:07:56   | text system.                                                                                         |
| 01:07:58   | And there are key combinations that are built into it, like control A is beginning of line,          |
| 01:08:06   | control E is end of line, those are like Emacs shortcuts.                                            |
| 01:08:10   | And you can expand those, but there's a file in your user library, you have to create it,            |
| 01:08:17   | but keybindings, and it's called defaultkeybinding.dict, and it's a P-list format.                   |
| 01:08:24   | And you can basically say, if I hit this key combination, do this with the cursor.                   |
| 01:08:31   | So it's stuff like inserting text or moving to the left, moving to the right, changing               |
| 01:08:35   | your selection, but all kinds of basic text editing maneuvers you can do, you can put                |
| 01:08:44   | on, like if I hit option S, it'll select the entire current paragraph.                               |
| 01:08:49   | I don't have to hit command left to go to the beginning, hold down shift, hit command                |
| 01:08:53   | right to go to the end.                                                                              |
| 01:08:54   | I just hit option S, and then I can do things like run search link.                                  |
| 01:09:00   | So I have a keybinding file that's got to be, let's see, how many lines is my keybinding             |
| 01:09:07   | file, 100, 200, 417 lines.                                                                           |
| 01:09:14   | That's a lot of lines.                                                                               |
| 01:09:16   | To be fair, that is, it's well commented, so at least half of those are comments.                    |
| 01:09:22   | But it is a long file.                                                                               |
| 01:09:23   | Well, I mean, this is something that people can really use.                                          |
| 01:09:27   | And it is a little kind of hacky to get it set up, but once it's set up, you can really              |
| 01:09:33   | make things work for you.                                                                            |
| 01:09:34   | And you can use that keybinding file on a laptop or a desktop or whatever.                           |
| 01:09:38   | So you don't have to worry about losing it.                                                          |
| 01:09:41   | And it works in every app.                                                                           |
| 01:09:43   | Like no matter what app you're in, you can have your keybindings that do the things you              |
| 01:09:48   | most frequently do, and it'll just work everywhere.                                                  |
| 01:09:52   | And this is why Brett had to get down the hyper key road, because frankly, you ran out               |
| 01:09:56   | of shortcuts, probably.                                                                              |
| 01:09:58   | It's true.                                                                                           |
| 01:09:59   | It's true.                                                                                           |
| 01:10:01   | I mean, there are worse things to run out of.                                                        |
| 01:10:03   | You'll be proud of me, Brett.                                                                        |
| 01:10:04   | I've been doing a lot of Vim lately, because I'm really sold on [[Obsidian]].                            |
| 01:10:08   | I'm doing so much work in it that they have a Vim mode I've enabled.                                 |
| 01:10:12   | And I get it.                                                                                        |
| 01:10:13   | I can see how this is faster.                                                                        |
| 01:10:15   | You know?                                                                                            |
| 01:10:16   | Yeah.                                                                                                |
| 01:10:17   | I think it's such a learning curve.                                                                  |
| 01:10:18   | Like I took me probably 10 years to actually get enough of the basics in my muscle memory            |
| 01:10:26   | that using Vim was faster than just using regular text editing.                                      |
| 01:10:31   | But I use Vim mode in sublime text now, too.                                                         |
| 01:10:35   | I do not use Vim mode in anything, just because I've got a slight bug with Vim on at least           |
| 01:10:42   | one server where for whatever reason, I can't add a new line and type on it.                         |
| 01:10:47   | And I think that's just a weird setting on that server.                                              |
| 01:10:50   | So I've been having a little argument with Vim.                                                      |
| 01:10:53   | I like it.                                                                                           |
| 01:10:54   | It works.                                                                                            |
| 01:10:55   | And I've taken many of the things from them, like multiple cursors and implemented that              |
| 01:10:59   | elsewhere so I can have a cursor on four or 14 lines and type and what I type appears                |
| 01:11:05   | on all of those lines simultaneously wherever the cursor is.                                         |
| 01:11:09   | So it could be at the beginning of some of those lines and the end of some of those lines.           |
| 01:11:12   | But that exists in lots of different text editing programs, so multiple cursors are                  |
| 01:11:19   | my friend.                                                                                           |
| 01:11:20   | And I've learned many, many things from Vim, but I don't use Vim mode unless I'm using               |
| 01:11:25   | Vim.                                                                                                 |
| 01:11:28   | So Brett, one last thing before we go.                                                               |
| 01:11:32   | An automator gets a new job.                                                                         |
| 01:11:34   | So you're working for the man now.                                                                   |
| 01:11:37   | Can you say what you're working for?                                                                 |
| 01:11:38   | Is that a secret?                                                                                    |
| 01:11:39   | Yeah.                                                                                                |
| 01:11:40   | Yeah, I work at Oracle.                                                                              |
| 01:11:41   | Okay, so they recognised your brilliance in this stuff and they brought you in.                      |
| 01:11:50   | But I'm sure that as soon as you got there, there was a bunch of stuff going on that felt            |
| 01:11:54   | manual and you had to bring your automation skills to bear.                                          |
| 01:11:58   | What'd you do?                                                                                       |
| 01:11:59   | How'd you go about it?                                                                               |
| 01:12:00   | Well, so I mean, I've only been at the job for a few weeks now and honestly, the first               |
| 01:12:05   | week was a whirlwind of ethics videos and onboarding stuff.                                          |
| 01:12:11   | Sure.                                                                                                |
| 01:12:12   | Now that I'm like into...                                                                            |
| 01:12:13   | That's by the way, you can thank my profession for that.                                             |
| 01:12:19   | Now that I'm kind of into the groove on it, I have to use things like Exchange servers               |
| 01:12:28   | and [[VPN\|VPNs]] that I've never had to deal with, at least not for the last decade of my life.              |
| 01:12:36   | And I can't use MailMate, which is where all of my email automation is in MailMate.                  |
| 01:12:43   | And actually, that's a lie.                                                                          |
| 01:12:44   | I did figure out how to get MailMate to connect to their SSO or their OAuth.                         |
| 01:12:49   | Anyway, I have been having to figure out how to use the tools I love with the tools that             |
| 01:12:55   | they allow.                                                                                          |
| 01:12:56   | And I have a work laptop that I'm not supposed to install things like [[Keyboard Maestro]] on.           |
| 01:13:04   | And so, yeah, a lot of it has been compromising to work with the available tools.                    |
| 01:13:12   | However, my job includes a lot of markdown and they're even going to be building out                 |
| 01:13:21   | some content in Jekyll.                                                                              |
| 01:13:24   | And these are things that I have a ton of tools written for.                                         |
| 01:13:28   | And so as long as I'm editing markdown, I'm using all of my favourite tools and they've               |
| 01:13:34   | translate well.                                                                                      |
| 01:13:35   | I'm lucky to have found a job that their first thing they said was, oh, and we want to switch        |
| 01:13:40   | everything to markdown.                                                                              |
| 01:13:41   | And I said, yeah, I can work with that.                                                              |
| 01:13:43   | Yeah.                                                                                                |
| 01:13:44   | So, okay, now that you've landed right in the middle of my wheelhouse, let's talk.                   |
| 01:13:48   | Yeah.                                                                                                |
| 01:13:49   | Right.                                                                                               |
| 01:13:50   | I mean, that's always a good sign, isn't it?                                                         |
| 01:13:53   | I have to say one of the things that I looked at because I also have a new job each job,             |
| 01:13:57   | which as we record, I've yet to start as this episode releases, I will have actually been            |
| 01:14:01   | in it for a little while.                                                                            |
| 01:14:02   | We're recording ahead just to make sure we don't fall behind on episodes if I'm potentially          |
| 01:14:07   | unexpectedly busy.                                                                                   |
| 01:14:09   | But one of the things that was appealing was, yeah, so we're just going to ship you whatever         |
| 01:14:13   | you laptop you'd like directly from the manufacturer and it's like, oh, you're not going to lock     |
| 01:14:18   | it down with a whole bunch of, yeah, okay, we'll get, yeah.                                          |
| 01:14:21   | I can install, you know, Bunch and [[Keyboard Maestro]] and things like that.                            |
| 01:14:25   | Yeah.                                                                                                |
| 01:14:26   | Mine came locked down.                                                                               |
| 01:14:28   | It even had requirements, when you change your password, it requires the character,                  |
| 01:14:35   | the non-alpha-numeric character in your password, which I tend to write, I like multi-word passwords |
| 01:14:43   | with spaces in them.                                                                                 |
| 01:14:45   | They're easy to remember and hard to crack and they don't necessarily need non-alpha-numeric         |
| 01:14:51   | characters in them, but I didn't get that choice.                                                    |
| 01:14:54   | Yeah.                                                                                                |
| 01:14:55   | Just put it in brackets next time.                                                                   |
| 01:14:57   | There you go.                                                                                        |
| 01:14:59   | I suppose I could use a quote.                                                                       |
| 01:15:03   | Somebody was telling me one of the most common hacker techniques is to throw the dictionary          |
| 01:15:08   | at it with an exclamation point at the end of each word and that cracks a lot of passwords.          |
| 01:15:14   | Yep.                                                                                                 |
| 01:15:15   | Yeah, pretty much because the exclamation mark for people who don't remember off the                 |
| 01:15:19   | top of their head is shift one.                                                                      |
| 01:15:22   | And so that's what a lot of people use, which is unfortunate because I used to use that              |
| 01:15:27   | a lot before companies started requiring you to add a non-alpha-numeric character to your            |
| 01:15:32   | password at which point I was like, yeah, everybody's going to use an exclamation mark.              |
| 01:15:35   | So now I need to pick something else.                                                                |
| 01:15:38   | And I did, but I also thankfully use 1Password for pretty much everything, so I need to check     |
| 01:15:43   | what my new job would like me to use there.                                                          |
| 01:15:46   | Do you want to hear about the automation that I'm working on but have not solved yet?                |
| 01:15:52   | Yes.                                                                                                 |
| 01:15:53   | Oh, yes, please.                                                                                     |
| 01:15:54   | So a [[BetterTouchTool]] can function as your default browser and perform actions if a URL             |
| 01:16:04   | matches a certain regex or like wild card string and then anything else that can pass                |
| 01:16:12   | off to your default browser.                                                                         |
| 01:16:15   | And so I want to have it so that when I click a work Zoom URL, it pipes that into a bunch            |
| 01:16:23   | that opens up the correct notebook for me, opens up Zoom, and sets my audio outputs.                 |
| 01:16:31   | Because for Zoom meetings, I don't want to wear headphones.                                          |
| 01:16:35   | I just do better with speakers if I don't have to record my audio.                                   |
| 01:16:39   | So change my audio settings and basically get my meetings all set up just by clicking                |
| 01:16:45   | on a Zoom URL.                                                                                       |
| 01:16:47   | I'm having a little trouble with the [[BetterTouchTool]] part of it, but it's going to work.           |
| 01:16:52   | I'm talking to Andreas right now.                                                                    |
| 01:16:54   | It's going to work.                                                                                  |
| 01:16:55   | It's going to be a cool automation.                                                                  |
| 01:16:57   | I feel like [[BetterTouchTool]] because Andreas, the developer, has kind of gone 100% on that          |
| 01:17:03   | app the last few years.                                                                              |
| 01:17:06   | And I don't think the community, myself included, have acknowledged enough of what he has done       |
| 01:17:12   | because that started out as an app to say, oh, this is where you can add cool features               |
| 01:17:17   | to your touchpad, right, to your trackpad.                                                           |
| 01:17:22   | But it is so much more than that now.                                                                |
| 01:17:25   | I mean, there's just so many ways to make that app dance for you that there's almost                 |
| 01:17:32   | not a problem on your Mac that you can't solve with it.                                              |
| 01:17:36   | Yeah, it is.                                                                                         |
| 01:17:37   | It's insane.                                                                                         |
| 01:17:38   | It's powerful.                                                                                       |
| 01:17:39   | And Andreas actually helped with several features in Bunch.                                          |
| 01:17:42   | When it comes to automation, he's my guy.                                                            |
| 01:17:46   | And yeah, honestly, even on my work laptop, there's no way I was working without installing          |
| 01:17:50   | [[BetterTouchTool]].                                                                                   |
| 01:17:51   | Yeah.                                                                                                |
| 01:17:52   | Yeah, it's the same.                                                                                 |
| 01:17:53   | The app that I was using, and actually I'm still using it, I've not yet switched over                |
| 01:17:58   | to [[BetterTouchTool]] for this, is Choosy.                                                            |
| 01:18:02   | And Choosy works the same way pretty much.                                                           |
| 01:18:05   | Which is the problem.                                                                                |
| 01:18:06   | Yeah.                                                                                                |
| 01:18:07   | That's what I'm talking to Andreas about is I want Choosy to be the default fallback                 |
| 01:18:12   | browser, but when I try to add it as a custom URL command, [[BetterTouchTool]] is erasing my           |
| 01:18:19   | custom command.                                                                                      |
| 01:18:20   | If I can solve that one little problem, this automation I'm talking about is cake.                   |
| 01:18:24   | It's done.                                                                                           |
| 01:18:25   | Yeah.                                                                                                |
| 01:18:26   | Yeah, I know.                                                                                        |
| 01:18:27   | Choosy is great because as well as matching part of a URL, so you can say Facebook only              |
| 01:18:31   | ever opens in this browser or something, you can also say, hey, anything from Microsoft              |
| 01:18:37   | Teams should please open in this browser and stuff like that, which is, you know, I love             |
| 01:18:43   | the fact that you can use the source application as well as URLs and modifier keys and all           |
| 01:18:49   | of that jazz, because if you, you know, occasionally, you know, need to be able to do personal       |
| 01:18:54   | stuff on your Mac, which I've had before on your work Mac, then it's nice to be able                 |
| 01:18:59   | to segregate that off to another browser and stuff like that.                                        |
| 01:19:02   | And so just being able to say, yeah, okay.                                                           |
| 01:19:04   | So anything that, you know, contains Brett Terpstra.com should open please in [[Firefox]] nightly rather    |
| 01:19:10   | than regular [[Firefox]], because that's what I'm using on this Mac for my personal stuff.               |
| 01:19:15   | Here's where I shot myself in the foot.                                                              |
| 01:19:18   | I had a choosy rule that any Zoom link just opened Zoom directly so I didn't get a bunch             |
| 01:19:24   | of Zoom browser tabs, but Oracle has, you have to do a single sign on authorisation to get           |
| 01:19:34   | into the Zoom meetings.                                                                              |
| 01:19:36   | So that requires going to the browser first where it picks up your cookie or ask for your            |
| 01:19:42   | login and then open Zoom.                                                                            |
| 01:19:44   | So at first I, I was clicking the Zoom links to join the meeting and it was sending me               |
| 01:19:50   | to an empty Zoom meeting because I didn't have my SSO credentials.                                   |
| 01:19:55   | And I had to get, I was on, I had tech support controlling my machine while I watched and            |
| 01:20:02   | it dawned on me that I had been hijacking the Zoom URLs.                                             |
| 01:20:07   | So I had to disable that rule in order to use Oracle Zoom, but it is an amazing feature.             |
| 01:20:13   | I just had to probably solve recently BetterTouchTools that I, you know, you occasionally          |
| 01:20:19   | click that green button, traffic button on your window and it goes into full screen mode,            |
| 01:20:25   | which is kind of a train wreck.                                                                      |
| 01:20:27   | And I didn't realise until recently you can program those buttons in [[BetterTouchTool]].              |
| 01:20:33   | So now if I click on it, it just makes it a full screen window as opposed to full screen             |
| 01:20:39   | mode, if that makes sense.                                                                           |
| 01:20:41   | And then if I right click it, then it goes into full screen mode, which I hopefully will             |
| 01:20:46   | never do.                                                                                            |
| 01:20:47   | I don't know.                                                                                        |
| 01:20:48   | Yeah.                                                                                                |
| 01:20:49   | Yeah.                                                                                                |
| 01:20:50   | I pretty much just hijacked that with [[Moom]] because [[Moom]] can do stuff with those buttons              |
| 01:20:55   | too.                                                                                                 |
| 01:20:56   | Yeah.                                                                                                |
| 01:20:57   | So I have a nerd challenge for you guys before we go.                                                |
| 01:21:00   | I am struggling with window management on a laptop.                                                  |
| 01:21:04   | I cannot seem to figure it out.                                                                      |
| 01:21:05   | I've been trying to like work it out like I've done it where I just keep everything on one           |
| 01:21:09   | screen and then I just, you know, use the, what is it, discover mode or whatever on the              |
| 01:21:15   | Mac where it puts all the windows on the screen so you can jump.                                     |
| 01:21:18   | Mission control.                                                                                     |
| 01:21:19   | Mission control.                                                                                     |
| 01:21:20   | There you go.                                                                                        |
| 01:21:21   | And then I've tried and that doesn't really work because I get too many windows and it's             |
| 01:21:24   | just, it's just a mess.                                                                              |
| 01:21:26   | I don't know where to look for them.                                                                 |
| 01:21:29   | And then I've tried putting them in full screen mode, which can work, you know, then you             |
| 01:21:33   | just go to the dock or up to the top and you can get to the one you want.                            |
| 01:21:36   | But then you've got windows that are like five screens away from each other.                         |
| 01:21:42   | And I just can't seem to get a satisfactory solution for window management on a laptop.              |
| 01:21:47   | How do you guys do it?                                                                               |
| 01:21:49   | Portable external monitor.                                                                           |
| 01:21:53   | So the answer to the question, David, is I cheat.                                                    |
| 01:21:58   | And yeah, I mean, to be fair, it helps having a larger size laptop, which is why my new              |
| 01:22:05   | job has given me a 16-inch MacBook Pro rather than the M1 MacBook Pro that I was kind of             |
| 01:22:10   | eyeing up just because, you know, on those one day a week that I'm in the office, a conference       |
| 01:22:17   | room because there will no longer be an office, you know, it's going to be easier to have            |
| 01:22:22   | a 16-inch screen and I am definitely planning on taking my portable monitor there, which             |
| 01:22:26   | is another 15 inches of screen.                                                                      |
| 01:22:29   | So that'll be extra space.                                                                           |
| 01:22:30   | But also, I tend to work from the middle space on my monitor on my laptop rather than the            |
| 01:22:39   | leftmost space, which is what I used to do.                                                          |
| 01:22:43   | And I think that's the default for a lot of people.                                                  |
| 01:22:45   | And then I know it's a couple of slides to the right, a couple of slides to the left.                |
| 01:22:48   | If you have not disabled, automatically rearranging spaces in the mission control preferences        |
| 01:22:54   | for everybody listening, please, please, please do that because otherwise, macOS magically           |
| 01:22:59   | rearranges things for you and what was three swipes right is now one swipe right and you've          |
| 01:23:03   | just swiped straight past it and you feel like you're going insane.                                  |
| 01:23:06   | Yeah.                                                                                                |
| 01:23:07   | And it's easy to drag those around.                                                                  |
| 01:23:08   | I call that gaslight mode.                                                                           |
| 01:23:09   | I call that gaslight mode because, like, every time it was just there and now it's not there         |
| 01:23:14   | and that's the default behaviour to rearrange that on you.                                            |
| 01:23:18   | Yeah, yeah.                                                                                          |
| 01:23:19   | I just, I can't do spaces, man.                                                                      |
| 01:23:22   | I love the idea and back in my Linux days, they were like window managers that were kind             |
| 01:23:28   | of like built around that idea and I just, it never translated for me.                               |
| 01:23:36   | I do really well with Command Tab using Keyboard Maestro's app switcher.                             |
| 01:23:41   | I just, I have a cluttered screen.                                                                   |
| 01:23:44   | I'm just used to that.                                                                               |
| 01:23:45   | I get through, I switch apps just using Command Tab.                                                 |
| 01:23:49   | Yeah.                                                                                                |
| 01:23:50   | Some of my apps have hyper key shortcuts to get to them, like my core apps, but for the              |
| 01:23:55   | most part, I'm just Command Tabbing through a pile of windows.                                       |
| 01:23:58   | I think that would be easier than the way I've been doing it with mission control because            |
| 01:24:02   | everything's in a different place every time you hit mission control and that gets frustrating.      |
| 01:24:07   | Well, and a lot of windows all look the same in mission control.                                     |
| 01:24:10   | It's like, at some point, you're just reading the icons anyway.                                      |
| 01:24:14   | So why not just use Command Tab?                                                                     |
| 01:24:16   | So mission control is the one where you see all of the windows for the application.                  |
| 01:24:20   | So I actually, I very rarely use that.                                                               |
| 01:24:24   | I have it.                                                                                           |
| 01:24:25   | It's actually a hot corner, but I practically never use it.                                          |
| 01:24:27   | But what I use instead is viewing all of the windows of my current application because               |
| 01:24:32   | I frequently have a lot of windows open for my current application.                                  |
| 01:24:35   | So being able to switch there with the app switcher using Command Tab, either with the               |
| 01:24:39   | default Mac OS one or the [[Keyboard Maestro]] one, which I'm playing with, I'm not sure                 |
| 01:24:44   | about yet.                                                                                           |
| 01:24:45   | You know, it's, well, those things where I've been doing something for a very long time              |
| 01:24:49   | one way.                                                                                             |
| 01:24:50   | So do I really want to change it?                                                                    |
| 01:24:51   | You know, if it's not broken, don't change it.                                                       |
| 01:24:53   | But at the same time, automation, automation possibilities, but, you know, switching to              |
| 01:24:57   | the right application and then going, okay, here are all the windows.                                |
| 01:25:01   | That's the one I want go because, you know, it's rare that I'm going to have 100 windows             |
| 01:25:05   | open in an application.                                                                              |
| 01:25:07   | If I do, it's usually Finder because I've been opening the same Finder window again                  |
| 01:25:11   | and again and again with [[Stream Deck]].                                                                |
| 01:25:15   | And then I just merge all the windows and close them and start over.                                 |
| 01:25:18   | The most hilarious part is if you have full screen mode on multiple apps and then you                |
| 01:25:24   | just tap on anything on your desktop and your Mac will then zoom six windows to the right            |
| 01:25:31   | to the Finder.                                                                                       |
| 01:25:33   | Like, in what world was that, like, the behaviour we would want when we click on something on         |
| 01:25:40   | the desktop?                                                                                         |
| 01:25:41   | I don't really know.                                                                                 |
| 01:25:42   | It's actually, at this point, I just laugh when it does it.                                          |
| 01:25:45   | It's like, okay, my computer's just going to take over now.                                          |
| 01:25:48   | I'll go get a drink.                                                                                 |
| 01:25:49   | Yeah.                                                                                                |
| 01:25:50   | I just can't do space.                                                                               |
| 01:25:53   | So Brett, you're using one screen and then just command tapping between a lot of apps.               |
| 01:25:58   | On my laptop, on my desktop, I have two huge monitors.                                               |
| 01:26:02   | Yeah.                                                                                                |
| 01:26:03   | On a laptop, yeah.                                                                                   |
| 01:26:04   | Yeah.                                                                                                |
| 01:26:05   | Well, thanks.                                                                                        |
| 01:26:06   | I actually appreciate that, guys, because I'm still struggling with this problem.                    |
| 01:26:09   | And with a 13-inch screen, I actually like things pretty, I take most of the screen up               |
| 01:26:14   | with a main app anyway, but I just don't like the full screen mode like you.                              |
| 01:26:18   | I feel like it does unexpected behaviours.                                                            |
| 01:26:22   | And I don't like having to swipe around to find an app.                                              |
| 01:26:25   | I would rather do a command tap.                                                                     |
| 01:26:27   | That's what I'm going to try.                                                                        |
| 01:26:29   | All right.                                                                                           |
| 01:26:30   | Well, guys, thanks for solving my problem.                                                           |
| 01:26:33   | That was helpful.                                                                                    |
| 01:26:34   | But more importantly, thanks for helping share the news about Bunch, because I think there's         |
| 01:26:38   | a lot of users out there and listeners that could really benefit from Bunch.                         |
| 01:26:42   | Yeah.                                                                                                |
| 01:26:43   | I think it's for everybody.                                                                          |
| 01:26:45   | I think, well, I think it's for your audience, for sure.                                             |
| 01:26:48   | Yeah.                                                                                                |
| 01:26:49   | I think it's pretty easy to approach, though.                                                        |
| 01:26:51   | Yeah.                                                                                                |
| 01:26:52   | Yeah.                                                                                                |
| 01:26:53   | Where do people go, Brett, if they want to?                                                          |
| 01:26:55   | Well, Bunch has its own website now, right?                                                          |
| 01:26:57   | Where's that?                                                                                        |
| 01:26:58   | Yes.                                                                                                 |
| 01:26:59   | Brett Terpstra.co.                                                                                    |
| 01:27:00   | Yeah.                                                                                                |
| 01:27:01   | We'll get you the massive amount of documentation I've written for it, as well as a pretty slick     |
| 01:27:06   | homepage that I just finished last weekend.                                                          |
| 01:27:10   | And then other than that, you can find me at Brett Terpstra.com along with my hundreds                |
| 01:27:15   | of other projects and my blogging.                                                                   |
| 01:27:18   | And then TTSCOFF will find me on any social media service, except for LinkedIn.                       |
| 01:27:24   | Well, you have to search for Brett Terpstra on LinkedIn, but I'm there, too.                         |
| 01:27:29   | That's your fancy.                                                                                   |
| 01:27:30   | Is there a picture of you there with a neck tie on?                                                  |
| 01:27:32   | I would like to see that.                                                                            |
| 01:27:33   | Yeah.                                                                                                |
| 01:27:34   | I think I have a tie and a white jacket on.                                                          |
| 01:27:37   | Nice.                                                                                                |
| 01:27:38   | Ooh.                                                                                                 |
| 01:27:39   | Fancy, fancy.                                                                                        |
| 01:27:40   | Yeah.                                                                                                |
| 01:27:41   | Yeah.                                                                                                |
| 01:27:42   | Fancy work, Brett.                                                                                   |
| 01:27:43   | It's a picture from like 2007 when I was skinnier.                                                   |
| 01:27:50   | Yeah.                                                                                                |
| 01:27:52   | When I left the law job, one of my goals was not to wear a tie.                                      |
| 01:27:57   | I'm still a lawyer, but the practice I have doesn't really involve me going to court.                |
| 01:28:02   | And my wife just told me we're going to a wedding in a few weeks, she's like, oh, no,                |
| 01:28:05   | you have to wear a tie to that.                                                                      |
| 01:28:06   | And I'm like, really?                                                                                |
| 01:28:07   | That ruined my whole day, just the thought of it.                                                    |
| 01:28:10   | I own so many expensive ties.                                                                        |
| 01:28:13   | I used to dress up a lot.                                                                            |
| 01:28:14   | I used to really enjoy dressing up, and I'd always go to Saks, there's an off.                       |
| 01:28:23   | There's where they sell all the samples from Saks Fifth Avenue.                                      |
| 01:28:25   | It's like their basement store.                                                                      |
| 01:28:28   | I used to buy so much stuff there.                                                                   |
| 01:28:30   | I just don't wear it anymore.                                                                        |
| 01:28:31   | The last time I wore a tie was the end of compulsory secondary school, where we had                  |
| 01:28:37   | to wear a uniform.                                                                                   |
| 01:28:38   | So I was 16, and I wore a prefects tie, and now I don't need to wear ties anymore, partially         |
| 01:28:44   | because most women don't usually wear ties as part of the outfits, though Joan Watson,               |
| 01:28:48   | the character played by Lucy Liu in elementary, pulled them off really well.                         |
| 01:28:53   | I loved her outfits there, but also, you know, I don't dress up fancy.                               |
| 01:28:58   | Rose, I think I would have been disappointed if you weren't the prefect at your school,              |
| 01:29:03   | honestly.                                                                                            |
| 01:29:04   | I was not a head girl, if that surprises you at all.                                                 |
| 01:29:08   | I also didn't apply to be head girl because I didn't want to be.                                     |
| 01:29:11   | Did you guys all look like Harry Potter because in my mind you would?                                |
| 01:29:15   | I mean, we didn't have the robes.                                                                    |
| 01:29:17   | So my school uniform was grey trousers, a white shirt or blouse, a purple tie, and                   |
| 01:29:24   | a blue jumper, and then if you were a prefect, you had a blue and purple tie instead.                |
| 01:29:29   | Before we sign off for today, I want to quickly tell you about another show here on RelayFM,        |
| 01:29:33   | Material.                                                                                            |
| 01:29:34   | Hosts Andy Ihnatko and Florence Ion are veteran technology journalists with plenty to say             |
| 01:29:39   | about what's going on at Google.                                                                     |
| 01:29:41   | Follow Google's journey with them at really.fm.material or search for material wherever you get your |
| 01:29:46   | podcasts.                                                                                            |
| 01:29:47   | Thanks to our sponsors today, HPE Tech Talk, TextExpander from Smile, and Discourse.                |
| 01:29:53   | Goodbye.                                                                                             |
