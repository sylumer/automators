---
status: "complete"
fc-date:
  year: 2024
  month: 04
  day: 19
fc-category: "podcast"
podcast: "Automators"
published: 2024-04-19
duration: 2137
formattedduration: "00:35:37"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/152"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators152.mp3"
episode: 152
title: "152: Action Buttons, Revisited"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David revisit their Action Buttons and share some of their automations. The hosts also discuss text and AI workflows.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 152 Discussion](https://talk.automators.fm/t/152-action-buttons-revisited/17508)

# Sponsors
- None.

# Show Notes
- [Sparky's Super-Action Button Script](https://www.icloud.com/shortcuts/7c7d9f54e2fa42a094d190f7baea8c38)
- [Rosemary Orchard's iPhone Action Button (Screenshot)](https://imgur.com/a/reC4gGh)
- [Rosemary Orchard's iPhone Action Button (Shortcut)](https://www.icloud.com/shortcuts/4322579b2417437b9f059f1367f0a094)
- [Text Workflow: Text Processing on the App Store](https://apps.apple.com/gb/app/text-workflow-text-processing/id1623230250)
- [Text Workflow: Text Converter on the Mac App Store](https://apps.apple.com/gb/app/text-workflow-text-converter/id1600520682?mt=12)
- [Whisper Memos](https://whispermemos.com/)
- [Mail Drop | Drafts User Guide](https://docs.getdrafts.com/docs/extensions/maildrop)
- [Just Press Record](https://www.openplanetsoftware.com/just-press-record/)

# Transcription
  
| Time Index | Transcription                                                   |
| :--------- | :-------------------------------------------------------------- |
| 00:00      | Hello and welcome to The Automators.                            |
| 00:03      | I'm David Sparks and joined by my co-host,                      |
| 00:06      | Rosemary Orchard.                                               |
| 00:07      | Hello, Rosemary.                                                |
| 00:08      | Hey, David, how are you?                                        |
| 00:10      | Excellent.                                                      |
| 00:10      | I thought it'd be fun today to share some of the stuff          |
| 00:13      | we are working on.                                              |
| 00:15      | We're going to revisit the action button.                       |
| 00:17      | I feel like the action button has kind of lost its place.       |
| 00:22      | A lot of people got their new iPhones                           |
| 00:24      | and they aren't using them.                                     |
| 00:25      | I'm hearing from lots of people that aren't using them.         |
| 00:27      | So we want to put a spotlight on the action button, what        |
| 00:30      | we're doing with it today.                                      |
| 00:31      | And then also, Rose and I have some fun workflows to share.      |
| 00:34      | So why don't we get started automating?                         |
| 00:37      | Yeah, let's start by talking about my action button,            |
| 00:41      | I guess, because I've got an action button.                     |
| 00:43      | You've got an action button.                                    |
| 00:44      | May as well start somewhere.                                    |
| 00:46      | And so I have recently rejigged mine a little bit               |
| 00:50      | because I primarily just had it as one action.                  |
| 00:55      | And then I realised that I was triggering the action button     |
| 00:57      | when I wasn't at home.                                          |
| 00:59      | And that action was no longer very useful.                      |
| 01:02      | So I have had a think about what it                             |
| 01:07      | is that I'm doing and the things that I am most frequently      |
| 01:09      | searching for in [[Spotlight]], which unfortunately is something    |
| 01:12      | that's kind of difficult to track.                              |
| 01:13      | But what my action button does now                              |
| 01:16      | is it does a number of things.                                  |
| 01:19      | And this is based on context, so in my case,                    |
| 01:23      | connected Wi-Fi network and or focus mode.                      |
| 01:27      | And then it uses [[Shortcuts]], but it uses [[Shortcuts]]               |
| 01:31      | folders for this stuff.                                         |
| 01:34      | So what I've done inside of [[Shortcuts]]                           |
| 01:36      | is I've created a couple of folders.                            |
| 01:39      | So I've got action button, action button home,                  |
| 01:43      | and action button sleep right now.                              |
| 01:46      | And so what I do in my primary action button shortcut,          |
| 01:52      | which is the one that runs it, is I start by checking           |
| 01:55      | if I'm at home.                                                 |
| 01:55      | So if I'm on my home Wi-Fi network,                             |
| 01:57      | then I get the contents of the action button home folder.       |
| 02:03      | And I add that to my variable of shortcuts.                     |
| 02:06      | And if I am in my sleep [[focus mode]],                             |
| 02:09      | then I get the contents of my action button sleep folder.       |
| 02:12      | And I add that.                                                 |
| 02:14      | And then finally, I get the contents of my action button        |
| 02:17      | folder, which is just the static stuff                          |
| 02:19      | that I always want there.                                       |
| 02:21      | And I add that to the variable.                                 |
| 02:22      | So the things that I always have are                            |
| 02:24      | going to be right at the bottom.                                |
| 02:26      | And the things that are context-dependent are at the top.       |
| 02:29      | And then I just show myself the list.                           |
| 02:32      | That's it.                                                      |
| 02:33      | It's very simple, but it means that if I am at home             |
| 02:36      | and I am sleeping theoretically, then                           |
| 02:40      | I get a choice between disabling [[Pi-hole]] on my network, which   |
| 02:45      | blocks at across the network for me.                            |
| 02:47      | So if something's not loading right,                            |
| 02:49      | then I can disable [[Pi-hole]] very quickly.                        |
| 02:52      | And if I'm asleep, then it gives me                             |
| 02:55      | the option of opening a specific page in the [[Home Assistant]]     |
| 02:58      | app, which is just devices and controls                         |
| 03:00      | that I use primarily whilst I'm asleep.                         |
| 03:04      | And there's some extra magic in there.                          |
| 03:06      | So for example, it'll only show my electric blanket             |
| 03:08      | if it's cold outside.                                           |
| 03:10      | It won't show it if it's 20 degrees outside, for example.       |
| 03:14      | And then the other things that are just there all the time      |
| 03:17      | are creating a new draft and things like that.                  |
| 03:19      | But it means that the things that I always use                  |
| 03:23      | or are most likely to always want are right at the bottom       |
| 03:25      | and the context things are at the top.                          |
| 03:28      | Originally, I had it the other way around,                      |
| 03:29      | and that was a little bit finicky.                              |
| 03:31      | I found that I was having to reach all the way                  |
| 03:33      | to the top of the screen, which as a Maxphone person,           |
| 03:36      | that's quite a long reach for me.                               |
| 03:38      | So I've found a way to bump the actions                         |
| 03:41      | that I always want right to the bottom.                         |
| 03:43      | And I'm quite excited by this, because these are just things    |
| 03:48      | that I'm probably going to want most.                           |
| 03:50      | Oh, I forgot, I should have said.                               |
| 03:52      | When I'm in the sleep focus,                                    |
| 03:55      | it also offers the option to open,                              |
| 03:57      | to run my [[Dark Noise]] shortcut,                                  |
| 03:59      | and to open the [[Bose Sleep]] app through a shortcut.              |
| 04:03      | So yeah, those are another few options there.                   |
| 04:07      | But it's really nice to just have those context options.        |
| 04:12      | What I haven't yet done is said,                                |
| 04:14      | hey, if there's only one action, just run it.                   |
| 04:17      | Because so far, I have at least two options in my defaults.     |
| 04:21      | And so yeah, I figure even if I only have one,                  |
| 04:24      | then I can just choose that and move on.                        |
| 04:26      | But yeah, that's what I have done so far.                       |
| 04:30      | And I am re-experimenting with it,                              |
| 04:33      | but I found I was pressing the action button more and more.     |
| 04:35      | I've been trying to train myself into using it.                 |
| 04:38      | And now I've spent some time training myself.                   |
| 04:40      | I'm a lot happier with my usage of it.                          |
| 04:44      | Okay, I need you to explain further about this thing.           |
| 04:47      | You're doing folders and variables.                             |
| 04:50      | That's unfamiliar to me.                                        |
| 04:51      | So there is an action in [[Shortcuts]] called "Get Shortcuts."        |
| 04:57      | And by default, it'll get all your shortcuts.                   |
| 04:59      | But if you tap on "All Shortcuts", you can change that            |
| 05:02      | and just get the shortcuts for a particular folder.             |
| 05:06      | And so by doing that, and then adding them to the list,         |
| 05:10      | after I have chosen something from the list,                    |
| 05:12      | I can use the output of the choose in a "Run Shortcut" action     |
| 05:18      | so that I get a choice of basically,                            |
| 05:20      | I could add 50 shortcuts to my list if I wanted                 |
| 05:23      | and choose one of them and run that shortcut.                   |
| 05:26      | But if I just try to use the title,                             |
| 05:29      | I'd have to get all my shortcuts and then filter                |
| 05:31      | and find the one where the title is explicitly that.            |
| 05:34      | And that gets a little bit messy.                               |
| 05:36      | So I have gone for the,                                         |
| 05:39      | it's a little messier from a UI perspective                     |
| 05:42      | because I have a folder in [[Shortcuts]],                           |
| 05:46      | which literally contains one shortcut                           |
| 05:48      | for when I'm on my home wifi, but you know what?                |
| 05:51      | It's okay, I'm okay with that.                                  |
| 05:53      | So yeah, I'm using the "Get Shortcuts",                           |
| 05:57      | choosing a folder and then choose from list                     |
| 05:59      | and then the "Run Shortcut" action                                |
| 06:01      | with the output of the choose from list to achieve that.        |
| 06:04      | Okay, that makes sense.                                         |
| 06:06      | I think that's easier once you wrap your head around            |
| 06:10      | the concept of grabbing shortcuts from a folder                 |
| 06:13      | than the way I do it because I'm doing the same thing           |
| 06:15      | except I've built it all into one big giant shortcut.           |
| 06:19      | So, you know, which is I think kind of more                     |
| 06:21      | of the historical way to do it,                                 |
| 06:23      | but I like your thinking there, Rosemary.                       |
| 06:26      | Well, the reason why I did it is because this way               |
| 06:29      | I can work on a shortcut and then be like,                      |
| 06:31      | okay, I'm happy to add this to my action button                 |
| 06:33      | and I just stick it in the folder                               |
| 06:35      | for where it should appear                                      |
| 06:36      | and ta-da, it's there.                                          |
| 06:38      | And I don't have to, you know, create a new menu entry          |
| 06:41      | and then rearrange things and all of that.                      |
| 06:45      | You know, it does mean that I get stuck                         |
| 06:46      | with whatever icon is assigned to the shortcut in [[Shortcuts]]     |
| 06:50      | and so on for my choose from list.                              |
| 06:53      | But at the same time, it works very well for me.                |
| 06:56      | So I'm quite pleased with it as a solution                      |
| 07:00      | because it's essentially a very fancy menu of shortcuts,        |
| 07:04      | but it's very easy to then, you know, go in                     |
| 07:07      | and if I wanna share part of my action button with somebody,    |
| 07:10      | I could share part of my action button with someone.            |
| 07:13      | Yeah, it all makes sense and I like it.                         |
| 07:17      | So what I'm doing is I've got a couple layers here.             |
| 07:20      | The primary index of my action button                           |
| 07:24      | is the existing focus mode.                                     |
| 07:26      | I mean, focus modes for me are so central                       |
| 07:28      | and that's another one.                                         |
| 07:30      | Someday we're gonna come back and talk about                    |
| 07:32      | because I don't know if people are using [[Focus Mode\|focus modes]].           |
| 07:34      | They just make everything so easy                               |
| 07:36      | because I hear about all these people buying these phones now   |
| 07:40      | that are intentionally stupid                                   |
| 07:42      | and can't contact people and things.                            |
| 07:44      | You could do a [[focus mode]] for that.                             |
| 07:46      | Like your [[focus mode]] gives you 10 different iPhones.            |
| 07:49      | I wish it gave you more,                                        |
| 07:50      | but that's as many [[Focus Mode\|focus modes]] as you can create.               |
| 07:52      | But every time you change your [[focus mode]],                      |
| 07:55      | your iPhone changes to match what it is.                        |
| 07:57      | So it's really cool.                                            |
| 07:59      | So I have a lot of my life centred on [[Focus Mode\|focus modes]].             |
| 08:03      | So I decided why not make the action button,                    |
| 08:05      | give me different things to be able to focus what I'm in.       |
| 08:08      | But before I even get to that,                                  |
| 08:10      | my first if statement, as they say,                             |
| 08:13      | is where I get the device orientation.                          |
| 08:16      | And you get that one.                                           |
| 08:17      | I get that one through the actions plugin,                      |
| 08:20      | the actions app, you know,                                      |
| 08:21      | that gives you some digital actions                             |
| 08:23      | and it can get the whether or not the device is face down.      |
| 08:26      | I'm not sure if there are any other apps that do that,          |
| 08:30      | but I know that the actions one does.                           |
| 08:32      | So it checks if it's face down,                                 |
| 08:35      | then all it does is put the phone on mute.                      |
| 08:40      | It silences ring.                                               |
| 08:42      | So it's kind of like the old fashioned ring silence button.     |
| 08:45      | But the way I activated is I put my phone face down             |
| 08:48      | and I push the button and it's silent.                          |
| 08:51      | Have you considered switching                                   |
| 08:53      | to the native get orientation action, David,                    |
| 08:55      | because that will also tell you                                 |
| 08:57      | if the device is face down or not.                              |
| 08:59      | You know what, it wasn't working when I built this.             |
| 09:03      | I will look into that, you know,                                |
| 09:06      | reduce reliance on third party apps is always a good thing.     |
| 09:09      | So yeah, I will follow up on that.                              |
| 09:12      | And it's something for our listeners to test as well.           |
| 09:14      | I just tested as well for myself,                               |
| 09:16      | get orientation, kind of difficult, by the way,                 |
| 09:18      | you have to like put your thumb like in the place               |
| 09:20      | to like tap the "Run Shortcut" action                             |
| 09:22      | and then like turn your phone face down and then run it.        |
| 09:24      | But it definitely says face down for me.                        |
| 09:26      | And when I turn it up, it's, you know, face up.                 |
| 09:30      | And if I stand it up, it says portrait.                         |
| 09:34      | The only thing there is, you know, if it's just like,           |
| 09:36      | if it's lying down, it'll say face up.                          |
| 09:38      | And it has to be like standing up on its end to say portrait    |
| 09:42      | or like, you know, vertical to say portrait.                    |
| 09:45      | So worth knowing, but definitely worth playing with.            |
| 09:48      | Well, the orientation I care about is face down.                |
| 09:50      | And so if I, if it is face down                                 |
| 09:53      | and I push the action button, it turns off sound.               |
| 09:56      | I actually originally had written it where it would toggle      |
| 09:59      | and I realised that was really dumb                             |
| 10:01      | because the only thing I'm ever going to want to do with that   |
| 10:04      | is make it silent when it's face down.                          |
| 10:07      | And I don't want it to toggle                                   |
| 10:08      | because what if it toggles to make noise                        |
| 10:10      | and I didn't realise it.                                        |
| 10:11      | So yeah, I had this fear when the iPhone first came out,        |
| 10:15      | there was some guy, a big symphony, right?                      |
| 10:17      | And like right at the silent part of the symphony,              |
| 10:19      | his phone went off and everybody hated him.                     |
| 10:21      | I don't want to be that guy.                                    |
| 10:23      | So I'm very careful.                                            |
| 10:24      | So then the otherwise of that if statement,                     |
| 10:28      | then goes into the world's longest loop of if statements        |
| 10:32      | because I'm not doing it the fancy way roses.                   |
| 10:35      | I may rewrite it.                                               |
| 10:36      | I'm going to experiment with what you're doing Rose             |
| 10:38      | because I like that.                                            |
| 10:39      | Well, something you could do with your shortcut                 |
| 10:42      | instead of rewriting it to be completely like mine              |
| 10:45      | is inside of that if statement                                  |
| 10:46      | after you turn your silent mode on                              |
| 10:49      | is just use a "Stop Shortcut" action.                             |
| 10:51      | And then instead of the otherwise                               |
| 10:53      | you just put everything else at the top level                   |
| 10:55      | that was something that I was trying before.                    |
| 10:58      | It was a pretty good approach                                   |
| 10:59      | but I switched to the running individual shortcuts              |
| 11:03      | for things for now at least.                                    |
| 11:05      | Maybe I'll switch back at some point.                           |
| 11:07      | You want to hear something silly?                               |
| 11:09      | I put a stop shortcut action in there anyway                    |
| 11:12      | after it checks orientation                                     |
| 11:13      | because I don't want things to get confused, right?             |
| 11:16      | Like I want to make it as simple as possible.                   |
| 11:19      | So I probably didn't need to put nest all this                  |
| 11:22      | and the otherwise, did I?                                       |
| 11:24      | I could just start it over with a brand new statement           |
| 11:26      | and raise it a level.                                           |
| 11:27      | I mean, the problem I'm facing that Rose doesn't have           |
| 11:30      | is it's a long shortcut and moving things around in there       |
| 11:34      | is always a little bit dicey                                    |
| 11:36      | because shortcuts jumps around                                  |
| 11:38      | and sometimes the actions go where you don't expect them        |
| 11:41      | and things stop working.                                        |
| 11:42      | So I generally like what you're doing                           |
| 11:45      | and I'm going to investigate that.                              |
| 11:47      | But either way, mine works now.                                 |
| 11:49      | I'm going to go ahead and put a link to mine                    |
| 11:51      | in the show notes.                                              |
| 11:53      | And if Rose, your game, let you do yours too.                   |
| 11:55      | Well, that's the only problem with mine.                        |
| 11:57      | I can't share a shortcut                                        |
| 12:00      | because it's a number of shortcuts.                             |
| 12:02      | And even if I share one shortcut,                               |
| 12:04      | if I share the main shortcut,                                   |
| 12:05      | you still need the folders containing the other shortcuts       |
| 12:08      | to actually do it.                                              |
| 12:10      | But then just share the main ones                               |
| 12:11      | when people kind of get the idea of the structure               |
| 12:13      | and then they can go out and make their own folders.            |
| 12:16      | I have faith in our audience.                                   |
| 12:19      | They will figure that out.                                      |
| 12:21      | But either way, mine is kind of a monstrosity                   |
| 12:24      | because of the structure.                                       |
| 12:26      | But it works.                                                   |
| 12:27      | So what it does is if it's not checks                           |
| 12:30      | and the phone is not face down,                                 |
| 12:32      | then the next thing it does is it checks                        |
| 12:33      | what is the current [[focus mode]].                                 |
| 12:35      | There's a built-in action, get current focus.                   |
| 12:38      | And then there's a bunch of if statements nested under that.    |
| 12:41      | So if the current focus doesn't have any value,                 |
| 12:45      | I toggle the focus.                                             |
| 12:47      | So it's just like, oh, I can just set a focus                   |
| 12:50      | by holding it down if there is not a focus, right?              |
| 12:52      | So that's one thing that's kind of useful.                      |
| 12:55      | Otherwise, if it's personal,                                    |
| 12:58      | then if I'm in personal [[focus mode]],                             |
| 13:00      | then it gives me a choose from menu                             |
| 13:05      | with a series of options,                                       |
| 13:07      | like the things I do in personal time.                          |
| 13:11      | I check the print on my 3D printer.                             |
| 13:14      | I go to the [[Kindle]] app.                                         |
| 13:15      | I try to make reservations for Disneyland.                      |
| 13:17      | I take a nap.                                                   |
| 13:18      | So like various shortcuts related to that stuff                 |
| 13:23      | pop up if I'm in personal mode.                                 |
| 13:27      | And the last one that choose from menu lists                    |
| 13:29      | in most of these is new focus.                                  |
| 13:30      | Like I can also use it to always change focus.                  |
| 13:34      | The next one is if it's podcasting,                             |
| 13:41      | then I've got things where I can check the time.                |
| 13:44      | I can send a quick email out to my family                       |
| 13:48      | saying, hey, I'm podcasting, leave me alone.                    |
| 13:50      | I do that when they're home with me.                            |
| 13:53      | I can turn on my recording light, turn it off,                  |
| 13:56      | that kind of stuff.                                             |
| 13:58      | If the next one is, I'll just go through a couple of these.     |
| 14:02      | I have a bunch of them, I can go through each one.              |
| 14:05      | If it's Disneyland, I have a Disneyland focus mode              |
| 14:07      | because of course you do.                                       |
| 14:09      | In that case, it just opens the camera.                         |
| 14:11      | It turns into a camera button                                   |
| 14:13      | and there is no choose from menu.                               |
| 14:15      | It's a single action                                            |
| 14:17      | and it opens the camera.                                        |
| 14:18      | And when I'm at Disneyland, I just want to take a picture.      |
| 14:21      | I just hold down the action button and it works.                |
| 14:23      | Which is what a lot of people wrote me and said,                |
| 14:25      | well, I want the action button to open the camera.              |
| 14:28      | I'm like, yeah, you probably do when you're out,                |
| 14:30      | but you don't, do you want that when you're at home?            |
| 14:34      | That's the thing about this.                                    |
| 14:35      | If you write a little shortcut,                                 |
| 14:37      | you can really just make this thing do what you want it to do.  |
| 14:41      | And I really like it.                                           |
| 14:42      | So I made a series of options for each of my [[Focus Mode\|focus modes]]        |
| 14:49      | and it's really excellent.                                      |
| 14:51      | And I use it every day.                                         |
| 14:53      | And when I hear people saying,                                  |
| 14:54      | oh, I don't know what to do with it.                            |
| 14:55      | It just makes me want to cry a little bit.                      |
| 14:57      | Another one I haven't mentioned that I use                      |
| 14:59      | and quite a bit of them is home kit settings                    |
| 15:02      | like the home related ones or the work related ones.            |
| 15:06      | I can set all the lights in the studio                          |
| 15:08      | or turn off all the lights in the studio                        |
| 15:09      | or turn on the recording light.                                 |
| 15:11      | And all the kind of home kit enabled stuff                      |
| 15:13      | that I've put together, I've put in there.                      |
| 15:16      | Like I want to add to it                                        |
| 15:18      | because I bought one of those [[Broadlink Smart IR Blaster\|Broadlink blasters]]                |
| 15:22      | that you told me about.                                         |
| 15:23      | So it sends out an [[IR]] signal                                    |
| 15:25      | and I've got it all now hooked up                               |
| 15:27      | to my little air conditioner in the room                        |
| 15:29      | because the air conditioner has a remote, it's [[IR]].              |
| 15:33      | So I programmed it to turn on and off the air and whatnot.      |
| 15:37      | So I want to add that to my action button.                      |
| 15:39      | I haven't got there yet.                                        |
| 15:40      | But that's maybe what I'll do                                   |
| 15:42      | when I make the big switch to folders.                          |
| 15:43      | But all of this is really good.                                 |
| 15:46      | Another one where I only have one action                        |
| 15:48      | is when I'm driving                                             |
| 15:50      | because usually my phone is kind of out of the,                 |
| 15:53      | I don't look at my phone at all when I drive.                   |
| 15:54      | I use [[CarPlay]] exclusively, but my phone is reachable.           |
| 15:58      | So I thought, well, it'd be kind of interesting                 |
| 16:00      | if I reach down and push the action button,                     |
| 16:02      | I can send my current location to my wife.                      |
| 16:05      | It just gets my location,                                       |
| 16:07      | sends a text message to my wife with my location.               |
| 16:09      | There's no message, it just sends her a location.               |
| 16:12      | And she's smarter enough to figure out,                         |
| 16:14      | oh, he sent me my location, that must mean he's on the way      |
| 16:16      | or this is where he's at.                                       |
| 16:18      | And that's only when I'm in driving mode.                       |
| 16:20      | So that's what I've done with it.                               |
| 16:22      | And it's really excellent.                                      |
| 16:25      | And people who are telling me                                   |
| 16:26      | they're not using the action button.                            |
| 16:29      | Come on, man, get on it.                                        |
| 16:31      | Get on that.                                                    |
| 16:31      | Get your action button going.                                   |
| 16:33      | Yeah, I found for me,                                           |
| 16:36      | because changing the shortcut in the settings                   |
| 16:38      | for the action button is so painful.                            |
| 16:40      | Like the first thing I did was, you know,                       |
| 16:42      | create a shortcut and just call it the iPhone action button     |
| 16:45      | and then just run that shortcut.                                |
| 16:46      | And then I can just change whatever's in that shortcut.         |
| 16:49      | So if I want to do like a new version of stuff,                 |
| 16:51      | like I'll just, you know, duplicate the existing one            |
| 16:55      | and then go back and edit the original one                      |
| 16:59      | instead of going, you know, going back and forth                |
| 17:02      | of like, you know, trying to like change the shortcut.          |
| 17:05      | Because I found it's just, for some reason, that screen,        |
| 17:08      | I think I've just got too many shortcuts there.                 |
| 17:11      | You know, I've got thousands of shortcuts,                      |
| 17:13      | like nearly 2,000 shortcuts.                                    |
| 17:14      | I really need to have a clean out of these.                     |
| 17:16      | I'm very aware of that.                                         |
| 17:18      | But, you know, I think it's not designed to handle              |
| 17:21      | somebody having 2,000 shortcuts.                                |
| 17:23      | So for me, it does seem to like go very weird                   |
| 17:26      | when I try to select the shortcut that I want to run.           |
| 17:29      | So I just created one, like,                                    |
| 17:30      | and then the newest created shortcut                            |
| 17:32      | appears right at the top.                                       |
| 17:33      | You select that and then you can go, like,                      |
| 17:35      | shove it in a folder, do whatever it is you like with it.       |
| 17:37      | And then, yeah, I just leave that alone                         |
| 17:40      | and do everything else in the shortcuts app,                    |
| 17:41      | which works much better performance-wise, I have to say.        |
| 17:45      | Yeah, mine's been fine.                                         |
| 17:46      | So I'm happy with the shortcut the way it works,                |
| 17:49      | except it's just such a pain in the neck to edit it             |
| 17:52      | that I'm gonna follow the lead of Rosemary Orchard              |
| 17:56      | as we all should do and break this thing down                   |
| 17:58      | to its component pieces with folders.                           |
| 18:01      | But did you hear that they're gonna add                         |
| 18:04      | possibly a capture button                                       |
| 18:06      | to the next iteration of the iPhone?                            |
| 18:08      | I don't know if you saw the rumors                              |
| 18:10      | if you're into that or not.                                     |
| 18:10      | I have not seen those rumors yet.                               |
| 18:13      | As with all of these things, you know,                          |
| 18:16      | this is one of the reasons why my iPhone action button          |
| 18:21      | is modular, so that, you know,                                  |
| 18:22      | if I want to swap stuff out, I can.                             |
| 18:26      | The other reason, by the way, folks,                            |
| 18:27      | that I have done it the way I've done it                        |
| 18:28      | is because this way, I can run each of those shortcuts          |
| 18:31      | individually without having to go through my action button.     |
| 18:35      | So, you know, I can just, you know, run my [[Pi-hole]]              |
| 18:42      | shortcut, which will allow me to disable [[Pi-hole]]                |
| 18:45      | for one minute, three minutes, five minutes, et cetera.         |
| 18:49      | Yeah, I need one of those shortcuts                             |
| 18:52      | because I eat way too much pie.                                 |
| 18:54      | So, yeah, I need to set my [[Pi-hole]].                             |
| 18:56      | Well, I mean, if only it were that easy.                        |
| 18:58      | Unfortunately, I have yet to figure out                         |
| 18:59      | the chocolate drone delivery system                             |
| 19:02      | or is it a drone chocolate delivery system?                     |
| 19:04      | I think drone chocolate delivery system.                        |
| 19:05      | A chocolate drone sounds like it could melt                     |
| 19:07      | and that seems disastrous for getting chocolate                 |
| 19:09      | to the correct places at the correct time.                      |
| 19:12      | But either way, you know, fingers crossed,                      |
| 19:16      | I can figure out the drone delivery system for chocolate        |
| 19:18      | in the not too distant future                                   |
| 19:19      | and program it onto my iPhone action button,                    |
| 19:21      | but also run that shortcut through [[Siri]] whenever I need.        |
| 19:24      | Well, who knows what the rumours are going to be                 |
| 19:27      | whether this actually happens or not,                           |
| 19:28      | but let's say that [[Apple]] does put a dedicated capture button    |
| 19:32      | on the iPhone in addition to the action button.                 |
| 19:35      | So that would presumably be hardwired to your camera, right?    |
| 19:38      | Just hold it up, push it and take a picture.                    |
| 19:41      | See, I immediately went back to, you know,                      |
| 19:44      | almost pre-iPhone days where people had [[Personal Digital Assistant\|PDAs]],                   |
| 19:47      | [[Personal Digital Assistant\|personal digital assistants]].                                    |
| 19:49      | Yeah.                                                           |
| 19:50      | And I remembered vividly when I got my first iPhone touch,      |
| 19:53      | like Googling, like how to make an iPhone touch into a PDA.     |
| 19:58      | And like how to use iPhone touch for [[Getting Things Done\|GTD]]                        |
| 20:01      | or [[Getting Things Done]], things like that.                       |
| 20:02      | Oh my gosh, I have so much not changed in many ways.            |
| 20:05      | And in many ways I've changed a lot.                            |
| 20:07      | But to me, when you say capture,                                |
| 20:10      | my immediate thought with notes.                                |
| 20:13      | Because you've got the action button,                           |
| 20:14      | the action button is camera and the capture button is a note    |
| 20:17      | or something like that.                                         |
| 20:18      | But you know, [[Apple]], if you're going to give us another button, |
| 20:21      | just make it programmable again.                                |
| 20:23      | Like by all means have a default, but make it programmable.     |
| 20:26      | And yeah, I'll be happy button.                                 |
| 20:29      | My guess would be that they don't do that.                      |
| 20:30      | I think they're going to,                                       |
| 20:32      | it's going to be hardwired to the camera.                       |
| 20:35      | For all the, can I say muggles?                                 |
| 20:38      | I don't know.                                                   |
| 20:39      | For the people out there that are not interested in automation, |
| 20:41      | they just want a button they can push                           |
| 20:42      | that they know will make the camera work.                       |
| 20:43      | But if they're going to make it hardwired,                      |
| 20:45      | why didn't they wire the action button into a silent mode?      |
| 20:49      | Yeah, well, I think this is their version                       |
| 20:52      | of taking care of the nerds and the non-nerds.                  |
| 20:55      | My point being, if this is coming,                              |
| 20:58      | then that's all the more reason                                 |
| 20:59      | to really make the action button work for you.                  |
| 21:02      | I'm disappointed, frankly.                                      |
| 21:04      | I feel like a lot of people kind of like never got on board     |
| 21:08      | with like really making the action button work for them.        |
| 21:11      | And like I hear all these people that are buying,               |
| 21:15      | like I said, these low tech phones                              |
| 21:16      | or they're frustrated with their iPhone                         |
| 21:19      | and in the age of notifications and distractions.               |
| 21:23      | And I'm like, gang, just spend some time                        |
| 21:25      | learning how to work your phone                                 |
| 21:26      | and you can make it less distracting.                           |
| 21:29      | You can make it, you know,                                      |
| 21:31      | follow whatever philosophy you're on here.                      |
| 21:33      | And I think a big piece of that is the action button.           |
| 21:37      | And I think we've got some good fodder for you here.            |
| 21:40      | So we release a show on a Friday for a reason,                  |
| 21:44      | go home this weekend and figure out your action button.         |
| 21:48      | Yeah.                                                           |
| 21:50      | Okay, Rose, what else are you                                   |
| 21:51      | working on automating these days?                               |
| 21:54      | Well, I have been messing around with text.                     |
| 21:57      | I've had a lot of stuff that I've had to deal with,             |
| 22:00      | like text-wise recently,                                        |
| 22:02      | just, you know, getting lumps of text,                          |
| 22:03      | needing to tidy it up and so on and so forth.                   |
| 22:06      | And I really wish I could remember                              |
| 22:08      | where I came across this app because it's amazing.              |
| 22:11      | The app's name is [[Text Workflow]].                                |
| 22:13      | I'm gonna put a link to it in the show notes for folks.         |
| 22:16      | But basically, it has a singular [[Shortcuts]] action               |
| 22:19      | called [[Text Workflow]].                                           |
| 22:21      | Yeah, that's it.                                                |
| 22:24      | And it will process text,                                       |
| 22:25      | but it's got a number of actions inside of it,                  |
| 22:29      | but then you can also create workflows inside of it,            |
| 22:32      | which chain a series of actions.                                |
| 22:35      | And so there's things in there like, you know,                  |
| 22:38      | converting case.                                                |
| 22:40      | So you can make something title case or lower case              |
| 22:43      | or you can beautify.                                            |
| 22:44      | So if you've got some [[JSON]] or [[XML]],                              |
| 22:46      | which by the way, folks, [[HTML]] extends [[XML]].                      |
| 22:50      | So this applies to that as well.                                |
| 22:52      | You can beautify it,                                            |
| 22:53      | which means that you can fix the formatting                     |
| 22:54      | and make it all pretty and beautiful.                           |
| 22:56      | You can filter words.                                           |
| 22:57      | You can remove duplicate words or duplicate lines.              |
| 23:01      | You can get rid of extra spacing.                               |
| 23:03      | You can trim, which is if there's like extra spaces             |
| 23:05      | at the beginning or the end of a line,                          |
| 23:07      | which can happen very easily,                                   |
| 23:08      | you can get rid of all of those.                                |
| 23:11      | And I ended up finding this app.                                |
| 23:14      | I don't remember how.                                           |
| 23:15      | I genuinely wish I did.                                         |
| 23:16      | And oh my gosh, this has been so useful for so many things.     |
| 23:20      | You know, I've been creating a couple of my own workflows       |
| 23:23      | to use with this.                                               |
| 23:26      | So there's one which will prefix a tab                          |
| 23:28      | to every single line.                                           |
| 23:30      | So that if I need to indent some stuff in markdown              |
| 23:34      | or similar, then that's very easy to do.                        |
| 23:36      | But yeah, this app is really cool.                              |
| 23:40      | It's actually even free to download and use.                    |
| 23:44      | And then there is a full access option                          |
| 23:47      | where it's like, I think it's 99 cents a month,                 |
| 23:50      | $5.99 a year, or lifetime is $9.99.                             |
| 23:54      | So, you know, obviously I immediately went ahead                |
| 23:56      | and got lifetime because that's insanely good value.            |
| 23:59      | But yeah, the only catch is it's only available                 |
| 24:01      | on iPhone and iPad.                                             |
| 24:02      | It's not available on macOS, it's like a macOS app.             |
| 24:07      | But yeah, I've got away with just using it on my iPhone         |
| 24:11      | and iPad so far because a lot of this stuff                     |
| 24:14      | is what I would be doing in [[BBEdit]] on the Mac.                 |
| 24:17      | But yeah, if you want to convert [[CSV]],                           |
| 24:19      | like comma separated values to a [[Markdown]] table,                |
| 24:22      | this has an action for it.                                      |
| 24:24      | Like, yeah, I'm in love.                                        |
| 24:26      | It's so nerdy and so useful to me that I've just been,          |
| 24:31      | you know, I've been converting text, David,                     |
| 24:33      | and it's made me very happy.                                    |
| 24:35      | Does that make me a nerd?                                       |
| 24:38      | Rose, this is, do we need to say it?                            |
| 24:42      | I mean, we're both nerds.                                       |
| 24:43      | Let's just...                                                   |
| 24:46      | So I was late for the recording today                           |
| 24:48      | because Rose put this in the outline                            |
| 24:50      | and I downloaded it and immediately went down                   |
| 24:53      | the rabbit hole.                                                |
| 24:54      | One thing Rose didn't say it does is AI conversion.             |
| 24:57      | So you can put, if you've got an open AI API,                   |
| 25:00      | which I do, I have a paid account, so I get one.                |
| 25:05      | Like one of my big problems is I'm using,                       |
| 25:08      | in fact, the automation I'm gonna talk about next               |
| 25:11      | uses whisper transcription.                                     |
| 25:14      | And whisper transcription is, I think, outstanding              |
| 25:17      | except for proper nouns.                                        |
| 25:19      | Like the word MacSparky always comes out as Macs,              |
| 25:24      | M-A-X-B-A-R-K-E-Y, MaxBarkey.                                  |
| 25:27      | And like the labs people all tell me                            |
| 25:30      | I have to name my next dog MaxBarkey                           |
| 25:31      | and it's always a joke, blah, blah, blah.                       |
| 25:34      | But I could write an AI script to say,                          |
| 25:37      | convert every instance of MaxBarkey to MacSparky              |
| 25:42      | and just add this to the workflow and this app                  |
| 25:45      | and it would fix it for me.                                     |
| 25:46      | Or the way so often AI does a bad job with paragraphs,          |
| 25:50      | I could probably cobble together an AI script here.             |
| 25:54      | So in addition to everything else, it does that too.            |
| 25:57      | It does date conversions.                                       |
| 25:58      | It really does a lot.                                           |
| 26:00      | And for 10 bucks for a lifetime license,                        |
| 26:02      | this one was a no-brainer for me.                               |
| 26:04      | I am only like an hour into owning this app                     |
| 26:08      | and I can't wait to dig in on it.                               |
| 26:11      | You made me realise something there, David,                     |
| 26:13      | because I had not messed with the AI stuff yet                  |
| 26:18      | just because I hadn't had a reason to.                          |
| 26:19      | There is also, by the way, folks who are a place text action,   |
| 26:22      | which could be quite useful.                                    |
| 26:24      | But I looked in the settings                                    |
| 26:26      | and of course you can do things like change your app icon       |
| 26:28      | per your open API key,                                          |
| 26:30      | sync the workflows with iCloud.                                 |
| 26:32      | That's really nice.                                             |
| 26:33      | But there's also something there                                |
| 26:35      | available on the Mac App Store.                                 |
| 26:36      | I missed out.                                                   |
| 26:37      | I don't know how I missed out.                                  |
| 26:39      | It's $5.99 on the Mac App Store.                                |
| 26:41      | And then you have the same app available                        |
| 26:45      | on the Mac App Store.                                           |
| 26:46      | So yeah, that's worth knowing about                             |
| 26:48      | and I will link the Mac App version as well                     |
| 26:50      | in the show notes for folks                                     |
| 26:52      | so that they can grab iOS or Mac.                               |
| 26:55      | Okay, okay, I'm doing that too, yeah, absolutely.               |
| 26:58      | Great.                                                          |
| 26:59      | I mean, because you could do even more with the AI stuff,       |
| 27:01      | you could say convert it to Spanish.                             |
| 27:03      | You could really just kind of go little nuts with it,           |
| 27:06      | but you automate it through this application.                   |
| 27:09      | I need to sit down and figure out the workflow.                 |
| 27:11      | So I'm gonna tell you my next workflow                          |
| 27:12      | and you tell me the best way                                    |
| 27:14      | to bring this app into the cycle, okay?                         |
| 27:17      | I've been very happy with a little automation I built.          |
| 27:20      | People in the labs are gonna be familiar with this one.         |
| 27:22      | I made them a video on it.                                      |
| 27:23      | But there is a nice little AI transcription app                 |
| 27:27      | called [[Whisper Memos]].                                         |
| 27:28      | And there's a bunch of these AI transcription apps.             |
| 27:32      | I mean, there's a flock of them.                                |
| 27:36      | The guy behind this, I forget his name,                         |
| 27:38      | but he sponsored MacSparky back in January.                    |
| 27:41      | So there's your full disclosure one week.                       |
| 27:43      | And I thought it was a cool app and that was good.              |
| 27:46      | I bought it because I always buy the stuff.                     |
| 27:49      | I wanna make sure that I'm paying for the stuff I use.          |
| 27:52      | And I was playing with it off and on                            |
| 27:54      | with a couple of others.                                        |
| 27:56      | And I wasn't really sure which one I wanted.                    |
| 27:58      | But then [[Whisper Memos]] started adding some features.          |
| 28:01      | And the first feature they added that I liked                   |
| 28:04      | is he's doing something on the back end                         |
| 28:05      | to do a better job with paragraphs,                             |
| 28:07      | which I think Whisperer transcription does poorly.              |
| 28:11      | It seems like it either returns like no paragraph return,       |
| 28:15      | no paragraph returns or it returns one for every sentence.      |
| 28:20      | It just doesn't understand the concept of paragraphs            |
| 28:22      | very well, which I don't like before                            |
| 28:24      | whatever he's doing, it's fixing it a bit.                      |
| 28:26      | And then the thing he did that really pushed me over the edge   |
| 28:29      | was he added an automatic email to function.                    |
| 28:33      | So once I dictate, then it transcribes                          |
| 28:37      | and emails the text somewhere.                                  |
| 28:39      | And at the same time, [[Drafts]] added a email drop box.            |
| 28:45      | So now you get a magic email address                            |
| 28:47      | with your [[Drafts]] subscription.                                   |
| 28:49      | So I'm having whisper take whatever I say,                    |
| 28:54      | transcribe it and drop it in my [[Drafts]] inbox                   |
| 28:57      | with no work by me, zero work.                                  |
| 29:00      | There's nothing else, I just do it and it's done.               |
| 29:02      | And then you add the last piece of the puzzle                   |
| 29:04      | is they've got a [[Apple Watch]] complication                       |
| 29:07      | and shortcut support for [[Whisper Memos]].                       |
| 29:10      | So you can either add it as a complication,                     |
| 29:12      | but in my case, I've added it to the action button              |
| 29:15      | on the [[Apple Watch#Apple Watch Ultra\|Apple Watch Ultra]].                                       |
| 29:16      | So now I just push the big orange button                        |
| 29:20      | and I start talking.                                            |
| 29:22      | And when I'm done, it's in my [[Drafts]] inbox.                     |
| 29:25      | So I like this.                                                 |
| 29:26      | But now I think I'm gonna add this new app                      |
| 29:28      | into the cycle here.                                            |
| 29:30      | So it can do some text processing on common things              |
| 29:33      | that I wanna fix like MacSparky                                |
| 29:35      | and a couple other bits.                                        |
| 29:38      | Yeah, it's one of those things as well                          |
| 29:41      | where because you create a custom workflow                      |
| 29:44      | and then, or you can create a custom workflow,                  |
| 29:46      | you do not have to create a custom workflow, I should say.      |
| 29:49      | But because you can create a custom workflow                    |
| 29:51      | and then I remember,                                            |
| 29:54      | I've just remembered where I heard of this app.                 |
| 29:56      | I actually heard of it because it's run into a shortcut bug     |
| 30:00      | which is if there's multiple transform text actions,            |
| 30:03      | then stuff gets a little bit funky.                             |
| 30:06      | But because you can select a workflow,                          |
| 30:09      | you can just create your like MacSparky transcript workflow    |
| 30:13      | and then anytime you need to tweak it,                          |
| 30:15      | you can just tweak the workflow                                 |
| 30:16      | and you don't have to go in and edit the shortcut               |
| 30:19      | which is a really nice little sort of bonus in there.           |
| 30:22      | So you can use it to have it, add some emojis.                  |
| 30:28      | Like every time it says [[Mac Power Users\|MPU]] or you say [[Mac Power Users\|MPU]],                     |
| 30:32      | you could have that replaced with [[Mac Power Users]]               |
| 30:36      | and then add the emoji                                          |
| 30:38      | or you could even have it like number lines.                    |
| 30:41      | So it can like number lines starting from like one              |
| 30:45      | and you can have a prefix, a suffix,                            |
| 30:48      | specify the number of digits that you want.                     |
| 30:50      | I mean, that may not be so useful for what you're doing there   |
| 30:53      | but things like a date converter could be quite nice.           |
| 30:58      | So if you say like a number of different date formats,          |
| 31:03      | you could actually have it,                                     |
| 31:05      | reformat various date formats to something else.                |
| 31:09      | That could be quite nice.                                       |
| 31:10      | Yeah, all sorts of things in there.                             |
| 31:12      | That could work.                                                |
| 31:13      | You know, another piece of AI I've got in the loop here         |
| 31:16      | is [[Grammarly]], I feel like has really kind of embraced AI.       |
| 31:20      | I think they realised that if [[Grammarly]] doesn't continue        |
| 31:23      | to be at the cutting edge of this stuff,                        |
| 31:24      | we're all gonna cancel our [[Grammarly]] subscriptions              |
| 31:26      | and just have AI do grammar check for us.                       |
| 31:29      | I still think [[Grammarly]] is far superior                         |
| 31:32      | and they continue to push it.                                   |
| 31:34      | But the interesting thing to me is once I get into [[Drafts]]      |
| 31:37      | then [[Grammarly]] kind of kicks in                                 |
| 31:38      | and fixes often a lot of the AI nonsense for me.                |
| 31:42      | So I've got a lot going on in this writing workflow             |
| 31:46      | but it's easier than ever for me to get a kind of an ugly       |
| 31:49      | first draft and then I work from there.                         |
| 31:51      | But just, you know, push the button, talk your watch            |
| 31:54      | and then the rest of it is the robots                           |
| 31:56      | until you come back to start editing it.                        |
| 31:58      | And that's pretty nice.                                         |
| 32:00      | Yes, yeah, that is really, really nice.                         |
| 32:02      | Yeah, I've been messing around with just press record           |
| 32:06      | and so on because then I still have the audio                   |
| 32:08      | if something goes wrong                                         |
| 32:10      | because every time you'll say, every so often                   |
| 32:11      | you'll say something and like, you know                         |
| 32:14      | if you end up with MaxBarkey instead of MacSparky,            |
| 32:19      | that's okay, you can figure out                                 |
| 32:20      | what you were talking about.                                    |
| 32:22      | But if I say something like [[MongoDB]]                             |
| 32:25      | and it translates that to Mongolian,                            |
| 32:28      | then I actually, especially with work stuff                     |
| 32:31      | I could get very confused.                                      |
| 32:33      | We've been dealing with Mongolian                               |
| 32:34      | and our database is [[MongoDB]]                                     |
| 32:36      | and knowing which one I was talking about                       |
| 32:39      | in that note to myself,                                         |
| 32:40      | that's actually quite important for me.                         |
| 32:42      | So for me, I've still been relying on good old                  |
| 32:45      | just press record for a lot of this.                            |
| 32:48      | But yeah, it's pretty nice to have all of these possibilities   |
| 32:54      | and I've found a link to whisper memo                           |
| 32:56      | and put that in the show notes for folks.                       |
| 32:59      | Yeah, I mean for me, and I looked at it                         |
| 33:01      | with just press record,                                         |
| 33:02      | but for me, the winner was the ease of use                      |
| 33:06      | of the whisper memos, it does a good job.                       |
| 33:09      | And like I said, I want this to be as easy as possible          |
| 33:13      | as little friction and it hasn't been a problem for me.         |
| 33:16      | The stuff I dictate isn't rocket science,                       |
| 33:19      | I can figure it out or I'll just rewrite it.                    |
| 33:21      | But this is a good workflow for me.                             |
| 33:26      | Additional uses I found for it that are interesting             |
| 33:28      | is even just like tasks and follow up items.                    |
| 33:32      | I mean, I went and picked up the dog at the groomer             |
| 33:35      | and the groomer said, there's a thing                           |
| 33:36      | and we need from the vet and like on the way home,              |
| 33:40      | just over my steering wheel,                                    |
| 33:41      | I pushed the button on the watch                                |
| 33:43      | and just dictated the email to the vet                          |
| 33:46      | to get the rabies certificate.                                  |
| 33:47      | So it was just sitting there waiting for me                     |
| 33:49      | and I got home and like things like that                        |
| 33:52      | where you can just automate that                                |
| 33:53      | as you go through the day are super useful.                     |
| 33:56      | And yeah, that's why we exist as the automators.                |
| 33:58      | I will go ahead and you know what I'm gonna do,                 |
| 34:02      | I'm gonna put the link for the MacSparky Labs video            |
| 34:05      | on this one into the notes for the show.                        |
| 34:07      | So we got lots of stuff for you today, gang.                    |
| 34:10      | You're gonna get our action button,                             |
| 34:13      | I'm gonna give you a little video                               |
| 34:14      | on this whisperer memos thing                                   |
| 34:16      | and hopefully we can help you get automated this weekend.       |
| 34:20      | Yeah, the only thing I'm missing                                |
| 34:21      | from [[Just Press Record]] right now                                |
| 34:22      | is like the ability to like get my recordings in [[Shortcuts]].     |
| 34:25      | I wonder maybe I should write them an email                     |
| 34:27      | and ask about that because you know,                            |
| 34:30      | originally this was something that was really difficult         |
| 34:32      | to do in [[Shortcuts]] to like,                                     |
| 34:34      | let it have a list of things from your app,                     |
| 34:38      | specifically like files and so on,                              |
| 34:40      | that could be quite tricky.                                     |
| 34:41      | But now it's become a whole lot easier                          |
| 34:44      | with the more recent versions of iOS.                           |
| 34:46      | So I drop them a line and see if they say                       |
| 34:49      | that they might be able to do it for us.                        |
| 34:52      | Cause if they can, that would be pretty awesome.                |
| 34:54      | Where would we be without [[Drafts]], Rose?                         |
| 34:57      | Greg always, Greg gives us,                                     |
| 35:00      | he is the lubricant of automation,                              |
| 35:02      | of text automation and all these [[Apple]] stuff.                   |
| 35:05      | Yeah, yeah.                                                     |
| 35:07      | All right, got a short one this week.                           |
| 35:09      | I hope you enjoyed it.                                          |
| 35:10      | We got some good stuff for you there.                           |
| 35:12      | We got some download links for you.                             |
| 35:13      | If you're a member of Automators Max,                           |
| 35:15      | that's the ad-free extended version of the show.                |
| 35:18      | Stick around, we're gonna be talking                            |
| 35:20      | about where we analog today.                                    |
| 35:21      | And if you haven't considered joining Automators Max,           |
| 35:24      | please do, Rose and I would really appreciate it.               |
| 35:27      | It helps us keep the lights on around here                      |
| 35:30      | and have a great day, everybody.                                |
| 35:32      | Goodbye, folks.                                                 |
