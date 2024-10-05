---
status: "incomplete"
fc-date:
  year: 2018
  month: 11
  day: 23
fc-category: "podcast"
podcast: "Automators"
published: 2018-11-23
duration: 3502
formattedduration: "00:58:22"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/11"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators01120E2809420Edit-2.mp3"
episode: 11
title: "11: Shortcuts Homescreens!"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Have you heard of the Shortcuts home screen fad? Where your home screen is just Shortcuts? David and Rose explore all of the possibilities, advantages, disadvantages and fun things you can do with Shortcuts on your home screen - and beyond.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 011 Discussion](https://talk.automators.fm/t/automators-11-shortcuts-homescreens/3273)
	- [Automators 11: Creating a Shortcuts Home Screen Shortcut](https://talk.automators.fm/t/automators-11-creating-a-shortcuts-home-screen-shortcut/3275)

# Sponsors
- [[OmniFocus (Sponsor)|OmniFocus]] - Accomplish more every day.

# Show Notes
- [Cortex #74: The Biggest Challenge of Being a Human - Relay FM](https://www.relay.fm/cortex/74)
- [Cortex #75: Home Again - Relay FM](https://www.relay.fm/cortex/75)
- [MacSparky's Siri Shortcuts Home Screen - YouTube](https://m.youtube.com/watch?v=B0AXdzNM6c8&feature=youtu.be)
- [Siri Shortcuts Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/siri)
- [Home Screen Icon Creator: A Shortcut to Create Custom Icons for Apps, Contacts, Solid Colours, and More - MacStories](https://www.macstories.net/ios/home-screen-icon-creator-a-shortcut-to-create-custom-icons-for-apps-contacts-solid-colours-and-more/)
- [Automators 11: Creating a Shortcuts Home Screen Shortcut - YouTube](https://www.youtube.com/watch?v=JrC0OKEqRBM)
- [The Context Home Screen - YouTube](https://www.youtube.com/watch?v=GtHntEP39bk)
- [Copy Whitespace](https://www.icloud.com/shortcuts/4c047002c4e64aba889503c1bb288cd1)
- [Sample Context Shortcut](https://www.icloud.com/shortcuts/32e31b62b76041c0875dab2798f3c9c3)

# Transcription

| Time Index | Transcription                                                                                        |
|:---------- |:---------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm Rose Orchard, and joined by my co-host, David Sparks.                                     |
| 00:05      | This is Automators, where we talked about how to automate your technology to do your                 |
| 00:10      | work for you.                                                                                        |
| 00:11      | Hi, David.                                                                                           |
| 00:12      | Hi, Rose.                                                                                            |
| 00:13      | I think when you say this is automators, we need to have one of those monster truck                  |
| 00:17      | voices.                                                                                              |
| 00:18      | This is automators, you know, like with Echo, with the work on that.                                 |
| 00:22      | Yes.                                                                                                 |
| 00:23      | Well, I'll put it in my OmniFocus for next time.                                                     |
| 00:27      | Okay.                                                                                                |
| 00:28      | So, we have a fun show today.                                                                        |
| 00:30      | I'm looking forward to this one.                                                                     |
| 00:32      | Yeah.                                                                                                |
| 00:33      | So, today, we're going to talk about making a shortcut home screen, which I'm sure some              |
| 00:38      | of our listeners have heard of, because I'm pretty certain there's a decent crossover                |
| 00:41      | between automators listeners and cortex listeners, because as CGP Gray on [[Cortex]] actually suggested  |
| 00:48      | this, and the internet seems to have gone crazy over turning your home screen into just              |
| 00:54      | shortcuts.                                                                                           |
| 00:55      | Yeah.                                                                                                |
| 00:56      | Yeah, I flipped out when I heard the idea, because I was doing something like, you know,             |
| 01:00      | one of the things, the themes of today's show is shortcuts to make shortcuts, you know,              |
| 01:04      | it's like it's becoming self-aware.                                                                  |
| 01:06      | I have all of these shortcuts for OmniFocus templates, you know, I've got like 30 of them,           |
| 01:13      | and so I made a shortcut that gives me a menu that I can pick from.                                  |
| 01:17      | But for some reason, my brain didn't go up with the idea of say, why don't you round                 |
| 01:21      | that up another level and put it on your home screen, and that's what Gray did.                      |
| 01:25      | And I thought it was really smart when he did it, I got so excited, I even made a little             |
| 01:28      | screencast, I'll put it in the show notes for this one, just after like a day of experimenting       |
| 01:33      | of my original take on it, although it's changed since then.                                         |
| 01:38      | Yeah.                                                                                                |
| 01:39      | It's one of these things, it is a very powerful tool, especially if you are launching a lot          |
| 01:43      | of shortcuts, it's very easy because then you can just press one button, and it's on                 |
| 01:47      | your home screen already, and it says, okay, do you want to do one of like these three               |
| 01:50      | things, and it just gets it done, and there's little thinking about it, and you don't have           |
| 01:55      | to talk to your phone, which I'm sure I'm not the only person, he doesn't really enjoy               |
| 01:59      | talking to my phone in public, which, you know, especially if it doesn't work, then                  |
| 02:04      | it is very annoying.                                                                                 |
| 02:06      | So the 20,000 foot view, what we're talking about is when you're in Siri shortcuts, you              |
| 02:11      | can save a shortcut as a home screen icon, or as a, as basically it looks like an app,               |
| 02:19      | you know, it puts an icon, it's got a bunch of glyphs you can choose from, you can pick              |
| 02:23      | a background colour, you can even import your own custom image to be the icon.                       |
| 02:29      | So in essence, you can turn a Siri shortcut into an app button, and the idea Gray had                |
| 02:35      | was what if I did that, and instead of just running a single shortcut, I put a menu of               |
| 02:40      | shortcuts in there, and actually the way we're going to talk about it today, it's not just           |
| 02:44      | shortcuts, we're talking about running from these things.                                            |
| 02:47      | So you put on your home screen, a single app button that will do multiple, launch multiple           |
| 02:53      | apps or specific tasks in multiple apps.                                                             |
| 02:57      | And then suddenly your home screen is not traditional apps, you bought off the app store,            |
| 03:02      | but instead these launchers and other utilities you've created out of the Siri shortcuts app.        |
| 03:07      | It's kind of fun.                                                                                    |
| 03:09      | And in a lot of ways powerful.                                                                       |
| 03:10      | Yeah, it's extremely good fun.                                                                       |
| 03:12      | And it's actually a great intro to shortcuts for somebody who's not so familiar with it,             |
| 03:17      | because there's very little to it.                                                                   |
| 03:20      | I mean, we're going to go into some more of the crazy things that you can do with this               |
| 03:24      | later.                                                                                               |
| 03:25      | But essentially, all we're doing here is a choose from menu.                                         |
| 03:28      | And then inside of the menu item, you either have a open app or a run shortcut action.               |
| 03:35      | And that's it.                                                                                       |
| 03:36      | That's all of the craziness done.                                                                    |
| 03:39      | The most difficult part is choosing the correct colour and icon to represent your shortcut.          |
| 03:43      | But you could, of course, just use an image from your photo library instead if you wanted            |
| 03:47      | to.                                                                                                  |
| 03:48      | And we've got advice for that in the outline, so we're going to get to that as well.                 |
| 03:52      | So why do it?                                                                                        |
| 03:53      | Number one, it gives you direct access to things like you can launch into a specific                 |
| 03:59      | OmniFocus perspective.                                                                               |
| 04:01      | I have one that has got a list of all the things I do on OmniFocus, like the specific                |
| 04:07      | perspectives, the review, because I can also use URLs, you know, [[URL Schemes]] in this.                |
| 04:12      | And so rather than just going to the OmniFocus icon, I go to the shortcut and open OmniFocus         |
| 04:18      | exactly where I want it so I don't get distracted.                                                   |
| 04:20      | Mm-hmm.                                                                                              |
| 04:21      | Yeah, that's something that always happens with me, whether it's email or OmniFocus or               |
| 04:25      | my calendar.                                                                                         |
| 04:26      | I open it to do something and something else catches my attention.                                   |
| 04:31      | And it's like up with this girl.                                                                     |
| 04:33      | I'm just gone.                                                                                       |
| 04:34      | I was thinking that.                                                                                 |
| 04:35      | It's like we're all dug.                                                                             |
| 04:37      | We're all dug.                                                                                       |
| 04:38      | Exactly.                                                                                             |
| 04:39      | And it's very easy to get sidetracked into all of these rabbit holes, and this is a great            |
| 04:43      | way to avoid that.                                                                                   |
| 04:44      | So especially if you're somebody who struggles with concentrating on things, or maybe you            |
| 04:48      | just want to up your focus on this sort of thing, it's very useful.                                  |
| 04:52      | Even better if you get distracted, I mean, one of the easiest ways to get distracted                 |
| 04:56      | is you open your email to do a specific task and something in the inbox catches your eye.            |
| 05:03      | You can make shortcuts to take you to specific areas of the mail application or your third           |
| 05:08      | party mail app of choice.                                                                            |
| 05:10      | So say, just take me to the Max Barking inbox, and you can do that, or you can have a shortcut       |
| 05:16      | that just opens a compose window in [[Drafts]], and then you can avoid the mail app altogether.          |
| 05:22      | So this stuff can get really powerful and really help you get better at getting your                 |
| 05:27      | work done.                                                                                           |
| 05:28      | Definitely.                                                                                          |
| 05:29      | And of course, it allows you to do things as well like stack actions.                                |
| 05:33      | So say for example, that whenever I sit down to start podcasting with David, I always want           |
| 05:37      | to have the lights on full in the bedroom at this time of year, because it's really dark,            |
| 05:42      | and I need to make sure that my phone's in do not disturb.                                           |
| 05:45      | And I want to open my [[Drafts]] note for this.                                                          |
| 05:48      | I do this on my phone, because if I type on my laptop keyboard, it's very loud, and it               |
| 05:52      | sounds like I hate my keyboard, then I do that, I press one button, and it does all                  |
| 05:56      | those three things.                                                                                  |
| 05:57      | But all I see on my phone is the [[Drafts]] app.                                                         |
| 06:00      | And then I'm aware that the lights have increased around me, but it's really useful for things       |
| 06:03      | like that.                                                                                           |
| 06:04      | Yeah, and I want to talk about that more with some examples later, but why not have it do            |
| 06:10      | two things?                                                                                          |
| 06:11      | Like going back to that OmniFocus reference, if I'm going into the OmniFocus MacSparky               |
| 06:16      | planning OmniFocus perspective, it will go ahead and set a timer for MacSparky stuff.                |
| 06:25      | So I'm actually setting a timer and going into do the work at the same time.                         |
| 06:30      | And it's just one step, but that's the kind of stuff that's the reason we make this show.            |
| 06:36      | You automate these things and it makes your life easier.                                             |
| 06:38      | Yeah, definitely.                                                                                    |
| 06:40      | And speaking of making life easier, this might actually be a really useful tool for the less         |
| 06:44      | technical people as well.                                                                            |
| 06:45      | So say, for example, you've got a relative who's not so tech savvy, and they've got                  |
| 06:48      | an iPad, but they're struggling to remember that, I don't know, [[Safari]] is for the internet           |
| 06:53      | and the internet, if they type in, I don't know, bbc.co.uk, then they get the BBC News               |
| 06:59      | website.                                                                                             |
| 07:00      | They get a news icon on their home screen that opens the BBC web page for them.                      |
| 07:05      | And it can either open that in the in-app [[Safari]] browser or in the main [[Safari]] app, depending        |
| 07:10      | on what you want.                                                                                    |
| 07:11      | And you set that up for them, and then they just know, I tap on this one, which has got              |
| 07:15      | the name that you've given it and the icon that you've given it, which makes it really               |
| 07:19      | easy to help them later when they go, wait, where is it?                                             |
| 07:22      | It's the red one with the newspaper icon.                                                            |
| 07:24      | They tap on that and they're there.                                                                  |
| 07:27      | And that, I think, is something, our audience members are probably going to be the people            |
| 07:31      | setting that up, but it's a nice thing to keep in mind for that as well.                             |
| 07:37      | Yeah, that's a really good idea.                                                                     |
| 07:38      | I was just thinking about one of my sisters would, like, I know there's certain things               |
| 07:42      | she does that sometimes confuse her.                                                                 |
| 07:44      | I could set up a button on her home screen that just does it all for her with Siri shortcuts.        |
| 07:50      | And Thanksgiving, as we record this, is just a couple days away.                                     |
| 07:53      | So now I think I'm going to be a hero on Thanksgiving.                                               |
| 07:55      | There we go.                                                                                         |
| 07:57      | One of the things that occurred to me when I first heard Gray talking about this was                 |
| 08:01      | contextualising work, and I'm going to go into detail in this episode about what I mean              |
| 08:06      | by this.                                                                                             |
| 08:07      | I'm going to share the ones I've created, but I love the idea of having a single button              |
| 08:11      | for MacSparky, and in it, I've got jumps to email boxes.                                             |
| 08:16      | I've got jumps to OmniFocus perspectives.                                                            |
| 08:19      | I've got jumps to my writing apps.                                                                   |
| 08:20      | I've got jumps to my outline for my newest field guide I'm working on, and all this stuff            |
| 08:25      | combined in one button.                                                                              |
| 08:27      | I just love that I can go to one icon on my home screen and from there, jump off into                |
| 08:31      | all the stuff I usually do when I'm wearing my MacSparky hat.                                        |
| 08:35      | Yeah.                                                                                                |
| 08:36      | It is extremely useful for people that wear multiple hats, and in some ways, everybody               |
| 08:40      | wears multiple hats.                                                                                 |
| 08:41      | You know, you likely have a job and you do something at home, or maybe you're a gardener             |
| 08:45      | and, you know, you love going for walks, and you can then have a gardening hat and a walking         |
| 08:51      | hat and a relaxing at home hat, which I hope everybody has, and that's really nice because           |
| 08:58      | then you're focusing and it's not like you're there and you just want to check, what was             |
| 09:03      | that show that I wanted to watch next, and you get sidetracked by the email that came                |
| 09:06      | in from work, you know, that you can avoid that happening, which is very nice.                       |
| 09:11      | And probably the other reason why you should consider doing this is just it's faster.                |
| 09:16      | I mean, I've been doing it for a few months now, and if you do it right, you can make                |
| 09:20      | it get you to whatever you need to do faster, more efficiently, and, you know, push all              |
| 09:27      | of our automator buttons.                                                                            |
| 09:29      | Yes.                                                                                                 |
| 09:30      | Yes.                                                                                                 |
| 09:31      | All right.                                                                                           |
| 09:32      | Okay.                                                                                                |
| 09:33      | So hopefully we've sold it.                                                                          |
| 09:35      | We tried hard to sell that.                                                                          |
| 09:37      | There's definitely a lot of advantages.                                                              |
| 09:40      | And if at this point you're thinking, I don't know, wait and listen to the examples because          |
| 09:45      | the examples are where you're going to go, okay, now I get it if you're still stuck at               |
| 09:49      | this point.                                                                                          |
| 09:50      | Yeah.                                                                                                |
| 09:51      | This is, as Rowe said, a very great way to get comfy with shortcuts because, you know,               |
| 09:57      | we've talked about shortcuts before and it can get advanced.                                         |
| 09:59      | I know I did a whole video course on it, but the, but one of the easiest commands you can            |
| 10:05      | do in shortcuts is just open up shortcuts, type in the search bar, choose from menu.                 |
| 10:10      | And it's just a command in shortcuts.                                                                |
| 10:11      | And when you drag that in, it creates a shortcut for you that gives you a short menu, I think        |
| 10:16      | by default it has three or four in there, maybe five, I don't remember now that I, anyway.           |
| 10:22      | I think it's three.                                                                                  |
| 10:23      | I'm just going to double check.                                                                      |
| 10:25      | And by the way, it's got a list in there and you can just go in and edit the name.                   |
| 10:29      | So you could make one that says, just, you know, you can pick the applications you want              |
| 10:35      | to launch via shortcuts.                                                                             |
| 10:37      | So you could say one is Fantastical and one is OmniFocus and one is Air Mail.                        |
| 10:42      | And you just type the names in there and then, and then it creates a list below and inside           |
| 10:50      | you can just launch the applications.                                                                |
| 10:52      | There's a Siri shortcut command to launch the application.                                           |
| 10:54      | Let me open mine.                                                                                    |
| 10:56      | I don't remember the exact phrase for that command.                                                  |
| 10:59      | It's open app.                                                                                       |
| 11:01      | Open app.                                                                                            |
| 11:02      | There we go.                                                                                         |
| 11:03      | And so all you have to do then is go, you copy in the task open app underneath, for instance,        |
| 11:10      | of the Air Mail one you copy in the open app command in Siri.                                        |
| 11:15      | So you just type search open app and drag it in.                                                     |
| 11:18      | And then you, then it gives you a button that you can just press and select any of your              |
| 11:23      | apps or at least most of your apps.                                                                  |
| 11:25      | Some of them don't show up.                                                                          |
| 11:26      | We'll talk about that later, but Air Mail is there.                                                  |
| 11:28      | So you tap Air Mail.                                                                                 |
| 11:29      | Now, when you run that shortcut and you tap on the Air Mail button, it's going to go and             |
| 11:35      | open the Air Mail application.                                                                       |
| 11:37      | So at the most basic level, this is a launcher.                                                      |
| 11:40      | You can, and then you can add additional ones to the choose from menu.                               |
| 11:43      | So you can have 15 of them if you want, you know, whatever you want.                                 |
| 11:46      | Like if you want to use just to replace a folder, you could do that.                                 |
| 11:50      | But it's just a very simple idea of choose from menu and open app.                                   |
| 11:55      | And you can take this one step further as well.                                                      |
| 11:57      | And you can use the run shortcut action as well.                                                     |
| 12:00      | So say you've already got a great shortcut that you've made and it does exactly what                 |
| 12:04      | you want it to do.                                                                                   |
| 12:05      | Well, you don't need to sit there and manually go back and forth between your two shortcuts          |
| 12:09      | checking what actions you did and how you did it and copying things over or recreating               |
| 12:14      | it.                                                                                                  |
| 12:15      | You can just use the run shortcut option.                                                            |
| 12:16      | And actually, if you turn off the show while running action, then some shortcuts are going           |
| 12:21      | to run a lot faster, especially if it's a very long complex shortcut.                                |
| 12:25      | It will run faster because the iPhone or your iPad will not need to show the UI of this              |
| 12:29      | as it's running.                                                                                     |
| 12:31      | And it works exactly the same way the open app action works.                                         |
| 12:34      | You choose whichever shortcut it is.                                                                 |
| 12:36      | There's a nice search option, and then you can just have it run for you.                             |
| 12:40      | Yeah.                                                                                                |
| 12:41      | Like I was just thinking an example of this would be, and here's a real simple one.                  |
| 12:46      | I take a walk usually every day.                                                                     |
| 12:49      | And so when I take a walk, there's a couple things I do.                                             |
| 12:52      | I set a timer to say I'm going to be walking because I'm anal retentive about time tracking.         |
| 12:58      | And I listen to a podcast.                                                                           |
| 12:59      | So while I walk, so I just have a shortcut called start a walk and it starts the timer               |
| 13:06      | and then it opens up overcast.                                                                       |
| 13:09      | And so I just click that one button on my home screen.                                               |
| 13:12      | It does those two tasks for me.                                                                      |
| 13:15      | And I guess I'm kind of giving a head a little bit, but that's an example of a choose from           |
| 13:22      | menu where I've got a two step, I've created in this, it's a small workflow inside the               |
| 13:27      | workflow.                                                                                            |
| 13:28      | Yeah.                                                                                                |
| 13:29      | And that works really well.                                                                          |
| 13:30      | The only thing that I would mention, if you are planning on just creating a shortcut                 |
| 13:35      | inside each of these menu items is don't forget the menu item itself does not give you anything.     |
| 13:41      | So there is a line inside and it actually does in this case show between the name of                 |
| 13:47      | the menu item and the action, but the action below that menu item does not receive the               |
| 13:52      | name of the menu item.                                                                               |
| 13:53      | So that is definitely something that you need to keep in mind if you're new to shortcuts             |
| 13:56      | and you're building one of these.                                                                    |
| 13:59      | If you need that word, you're going to have to use a text action or something to get that            |
| 14:03      | in there.                                                                                            |
| 14:04      | Yeah. And the other thing I would say is like, for instance, this walk one, that could be            |
| 14:08      | a separate shortcut and then you use it as a run shortcut.                                           |
| 14:12      | So you've got a simple two step shortcut combined under a choose action.                             |
| 14:16      | So this is one of the challenges of doing this with audio is that you don't get to see               |
| 14:20      | it.                                                                                                  |
| 14:21      | And that's why we're going to add videos to the show notes so you can watch that.                    |
| 14:24      | Yeah.                                                                                                |
| 14:25      | We're going to make sure that we have a demo video showing you how to build these and simple         |
| 14:28      | one and a more complicated one as well.                                                              |
| 14:29      | So you can graduate from one to the next.                                                            |
| 14:32      | Yeah.                                                                                                |
| 14:33      | And it's really powerful as you start doing this and you start, like I said, thinking                |
| 14:37      | in terms of context and just groupings, I mean, what are the folders that you have on                |
| 14:42      | your home screen right now that you frequently go and do things in and, you know, how can            |
| 14:47      | you take those another step?                                                                         |
| 14:49      | And this is where it happens.                                                                        |
| 14:51      | Yeah.                                                                                                |
| 14:52      | You can definitely, you can start with just the very simple stuff and really make it super           |
| 14:56      | complicated and awesome if you want to, which is of course, you know, where we tend-to-end           |
| 15:01      | up doing things that everybody is welcome at every level.                                            |
| 15:03      | Yeah.                                                                                                |
| 15:04      | We're going to bring you along, man.                                                                 |
| 15:05      | We want you to go crazy with this stuff.                                                             |
| 15:06      | Yes.                                                                                                 |
| 15:07      | Definitely.                                                                                          |
| 15:08      | In fact, let's start talking about some of the ones we've made that are cool.                        |
| 15:11      | But before we do that, you want to talk about our sponsor?                                           |
| 15:14      | Yes, I do.                                                                                           |
| 15:15      | So today we are sponsored by the Omni Group, who are makers of, among other applications,            |
| 15:20      | OmniFocus 3.                                                                                         |
| 15:21      | And OmniFocus 3 has been updated this year.                                                          |
| 15:24      | It is a fabulous new application and it has, most importantly, tags instead of context.              |
| 15:31      | So if you've used OmniFocus before, you might have been aware there was a singular context           |
| 15:35      | for an action or a task to complete.                                                                 |
| 15:38      | Now you have tags.                                                                                   |
| 15:39      | So for example, if I am waiting on David so that he can choose the next step, the topic              |
| 15:44      | for the next episode of Automators, then I can give that task both waiting on and David              |
| 15:49      | so that when I look at my David list, I know I should make sure that we know what we're              |
| 15:54      | talking about next time.                                                                             |
| 15:56      | The forecast view also shows calendar events now, which is really useful so that when you            |
| 16:00      | look at your day, you can see realistically how much you're going to get done.                       |
| 16:04      | There's also more flexible repeats.                                                                  |
| 16:07      | Batch editing has made it to iOS, along with a flexible inspector.                                   |
| 16:10      | So if you never used defer dates, well, you can move that out of your regular inspector              |
| 16:15      | view.                                                                                                |
| 16:16      | To find out more about how to use OmniFocus, check out insideomnifocus.com, where various            |
| 16:22      | people, including David and myself, have written articles about how we use OmniFocus every           |
| 16:26      | day.                                                                                                 |
| 16:28      | Go to omnifocus.com right now and start getting more done.                                           |
| 16:31      | That's omnifocus.com.                                                                                |
| 16:33      | OmniFocus accomplish more every day.                                                                 |
| 16:35      | Our thanks to the Omni Group for their support of this show and Relay FM.                            |
| 16:39      | I thought maybe to begin with, I would share one that is a very simple Siri shortcut app             |
| 16:47      | home-screwing launcher.                                                                              |
| 16:49      | And it's the list of apps that were always on my home screen that take a lot of space.               |
| 16:56      | And all I really need to do is get into them.                                                        |
| 16:59      | So I combine them, and they're all in what I call the communicate category.                          |
| 17:02      | So I have a simple shortcut called choose from menu.                                                 |
| 17:06      | And in it, I've got several functions.                                                               |
| 17:09      | There's mail, messages, [[Slack]], discourse, Twitter, and an air mail, because I've been                |
| 17:16      | playing with air mail thanks to Rose.                                                                |
| 17:17      | So I've got two mail apps in there.                                                                  |
| 17:19      | But then all it does is it's a launcher.                                                             |
| 17:22      | So for each one of those, there's an entry, and underneath I have the open app command               |
| 17:26      | for the various applications.                                                                        |
| 17:28      | And as a result, I'm able to get all of this into one button.                                        |
| 17:32      | I mean, this is the most basic use of this concept.                                                  |
| 17:36      | There's nothing fancy.                                                                               |
| 17:37      | There's no additional Siri shortcut action going on.                                                 |
| 17:39      | I'm not writing any specific tasks.                                                                  |
| 17:43      | But I've just got an easy way to launch myself into all of the apps I use to communicate.            |
| 17:48      | That is a really great first example.                                                                |
| 17:51      | My next example is a little bit more complicated.                                                    |
| 17:54      | It's my home action.                                                                                 |
| 17:57      | So this one, it's a yellow home icon, and it's called home because I'm not very creative             |
| 18:02      | with these things.                                                                                   |
| 18:03      | But it presents a list of different home kit scenes for me to run.                                   |
| 18:06      | Because of course, all of these are available to us in shortcuts.                                    |
| 18:10      | But the great thing about this is that I can choose.                                                 |
| 18:14      | So if I try to run it before six o'clock in the morning, or actually seven o'clock in                |
| 18:19      | the morning, I just modified its day, then it only shows me a few scenes to choose from.             |
| 18:24      | And then if I try and run it after seven o'clock in the morning, it will show me more scenes.        |
| 18:28      | If I try and run it late in the evening, then it suggests that I should go to bed and put            |
| 18:32      | the time for bed one right under my thumb, which is really useful.                                   |
| 18:37      | And that just allows me to access the home kit scenes that I actually really want to                 |
| 18:41      | use at the right time of day.                                                                        |
| 18:43      | So now, how are you doing that?                                                                      |
| 18:46      | How are you setting it so it's aware of the time and giving you different views?                     |
| 18:51      | So I am just doing the time action, or rather, it's called the date action.                          |
| 18:56      | And then I format that.                                                                              |
| 18:57      | So I just do HH in lower case, because that gives me two-digit hour.                                 |
| 19:03      | And then I check if it's less than seven, then it does one thing.                                    |
| 19:09      | And if it's more than, I want to say, eight PM, it does something else, nine PM, sorry,              |
| 19:14      | I've just double checked.                                                                            |
| 19:16      | And then other than that, everything else goes into the other category.                              |
| 19:20      | So it's just an if statement, you're checking the time and using it as a message inside              |
| 19:25      | one another.                                                                                         |
| 19:26      | Yeah.                                                                                                |
| 19:27      | Nice.                                                                                                |
| 19:28      | You should share a screenshot of that if you can.                                                    |
| 19:29      | Yes, I will do.                                                                                      |
| 19:31      | Yeah.                                                                                                |
| 19:32      | One I've got that's kind of in between those two is I mentioned to it earlier.                       |
| 19:37      | And that's my OmniSelect, I just call it OmniSelect, because it's just the thing where I go and      |
| 19:44      | get access to my most commonly used Omni Group, I'm sorry, OmniFocus things.                         |
| 19:50      | And I've got a bunch of perspectives in OmniFocus, like I have them for planning on MacSparky,       |
| 19:58      | on the legal and on my personal side.                                                                |
| 20:00      | And each one of those perspectives is a deferred date-based perspective filtered for flags,          |
| 20:10      | because most of my tasks don't have start dates.                                                     |
| 20:12      | But in terms of planning, the flagged items are the ones I'm trying to pay most attention            |
| 20:16      | to or the ones that have a due date attached to them.                                                |
| 20:19      | So I can tap on any one of those three items and it brings me to that specific perspective           |
| 20:24      | for like a planning forward.                                                                         |
| 20:26      | And I use that in the evenings when I'm planning the next day.                                       |
| 20:29      | At the same time, it runs into toggle and throws a switch for setting a timer for whether            |
| 20:36      | I'm planning personal, planning Sparky, or planning legal.                                           |
| 20:39      | So I get a good effective time tracking in addition to getting myself to the appropriate             |
| 20:44      | perspective.                                                                                         |
| 20:46      | OmniFocus also has certain perspectives that are available to you via URL.                           |
| 20:53      | And for instance, the projects one is at OmniFocus colon slash slash slash projects.                 |
| 21:00      | So if I want to see the projects, I've got that as a button.                                         |
| 21:04      | So I just use the URL command, you know, which puts that URL into the system and then opens          |
| 21:10      | the URL and it gets me there too.                                                                    |
| 21:13      | I could run timers on those if I wanted to, but I don't because they're not specific to              |
| 21:17      | a particular area of my life.                                                                        |
| 21:19      | And then just to get more meta, I was talking earlier about I have all these templates.              |
| 21:25      | So I have another like a third level shortcut, which is a menu of all those templates.               |
| 21:31      | And because there's so many of them, there's actually a fourth level to this.                        |
| 21:36      | I hope you're tracking with me.                                                                      |
| 21:37      | So if I press the templates button in this OmniSelect, it brings me to another series                |
| 21:42      | shortcut that says, are you making a Sparky template, a legal template or a personal template?       |
| 21:48      | And I click one of those.                                                                            |
| 21:50      | And also a couple of the ones that I use all the time are in that level.                             |
| 21:54      | But if I click on like MacSparky, then it gives me a list of like 12 different templates             |
| 21:58      | I've made for MacSparky projects.                                                                    |
| 22:00      | Now I know that sounds a little nutty, but it takes a lot longer to describe than to                 |
| 22:05      | actually activate.                                                                                   |
| 22:07      | So I just tap a few buttons and then I've got the template activated and I don't have                |
| 22:11      | to go into shortcuts and scroll through my big long list of shortcuts to find the one                |
| 22:16      | I want.                                                                                              |
| 22:17      | I always get it started.                                                                             |
| 22:18      | And when I want to work in OmniFocus, I avoid distraction by getting to exactly the place            |
| 22:22      | I need to be.                                                                                        |
| 22:23      | Yeah.                                                                                                |
| 22:24      | That's a really useful one.                                                                          |
| 22:26      | If I had more templates, then I would do that and I need to actually start making some               |
| 22:30      | more work templates because I've received a bunch of projects at work, which are all                 |
| 22:34      | quite similar.                                                                                       |
| 22:35      | I'm a big fan of checklists.                                                                         |
| 22:37      | I think that anytime you can put a checklist on a project that you're going to do, you               |
| 22:41      | have a much better chance of finishing it.                                                           |
| 22:43      | Definitely.                                                                                          |
| 22:44      | Yeah.                                                                                                |
| 22:45      | Right.                                                                                               |
| 22:46      | I'll give another example.                                                                           |
| 22:47      | I have a travel one, which what it does is I use Tripit as my travel service.                        |
| 22:54      | And that means I forward all of my travel itinerary bookings there and it just makes an itinerary    |
| 23:00      | for me so that it knows that, for example, next January, I'm probably going to be in                 |
| 23:03      | Seattle because I've already booked a hotel and forwarded that reservation there.                    |
| 23:08      | So what this does, the first thing it does, it checks my Tripit calendar to see if there's           |
| 23:12      | an all day event today.                                                                              |
| 23:14      | And if yes, it shows me one set of applications.                                                     |
| 23:17      | And if there is not an all day event, it shows me my Vienna and Austria applications because         |
| 23:21      | those are the ones I actually need when I'm here.                                                    |
| 23:24      | And that's it.                                                                                       |
| 23:26      | It's quite simple, really.                                                                           |
| 23:28      | Nice.                                                                                                |
| 23:29      | Nice.                                                                                                |
| 23:30      | I got one here that is a, it's more of a shortcut, but it can be incorporated into, it's more        |
| 23:35      | of a traditional shortcut, but it can be incorporated into this method.                              |
| 23:40      | And it's something, it's a work in progress.                                                         |
| 23:41      | I'm going to try and finish it and share this one by the time we publish this episode.               |
| 23:46      | But I call it take a nap, you know, because I like taking naps when I have time.                     |
| 23:52      | But I can only take a short nap if I sleep longer than like 45 minutes and I fall apart.             |
| 23:57      | I guess there's like science there.                                                                  |
| 23:59      | Like you go into REM sleep and it's harder to wake up and all that.                                  |
| 24:03      | So when I, when I throw the shortcut, it gets the current date adds 35 minutes and then              |
| 24:07      | sets a timer for 35 minutes and then set turns on do not disturb.                                    |
| 24:14      | And that's great.                                                                                    |
| 24:15      | The one thing I want to do to this is I want to get the date math in there to automatically          |
| 24:19      | turn off do not disturb.                                                                             |
| 24:21      | And I'm sure there's a way to do that.                                                               |
| 24:22      | I did something similar to this with some of my date calculation shortcuts in the past.              |
| 24:28      | I just haven't had time to go in and set it up properly.                                             |
| 24:31      | But I'm going to, by the time I'm done, it's not only going to show me a timer for 35 minutes,       |
| 24:35      | it's also going to turn on do not disturb and then turn it off automatically for me.                 |
| 24:40      | So I'll have that done by the time we publish this show.                                             |
| 24:43      | Yes.                                                                                                 |
| 24:44      | The one thing I would note is that the very least time of recording, there is a bug in               |
| 24:47      | some versions of shortcuts where do not disturb doesn't work with the beta.                          |
| 24:51      | So if you have the beta version, then switch to the app store version and then that will             |
| 24:55      | fix your do not disturb issues.                                                                      |
| 24:56      | Yeah, I got a message about that recently, like it said it would need to access something            |
| 25:02      | to do not disturb working.                                                                           |
| 25:05      | My guess is by the time, hopefully the betas, they're actually doing pretty frequent betas           |
| 25:10      | for the Siri shortcuts app.                                                                          |
| 25:12      | So hopefully they'll have that fixed in the next version.                                            |
| 25:14      | Yes.                                                                                                 |
| 25:15      | The exact error message it says, this action requires "donotdisturbintents" to be installed.         |
| 25:20      | That's all together, which is why I said it so quickly.                                              |
| 25:23      | Though, if you're listening to me at two times speed on overcast, you won't have noticed             |
| 25:30      | a difference.                                                                                        |
| 25:31      | Right.                                                                                               |
| 25:32      | Like you mentioned earlier, David, I have several different hats and I have several                  |
| 25:36      | different shortcuts which show me different applications based on which hat I'm wearing.             |
| 25:41      | So I have an automated shortcut, a sweet setup shortcut when I'm doing quick tips to the             |
| 25:46      | sweet setup, my Mac stories shortcut and learn on me focus, which they list a variety of             |
| 25:52      | things.                                                                                              |
| 25:53      | So they list different apps that I might need to get stuff done.                                     |
| 25:57      | They link to my OmniFocus perspectives, they link to my [[Drafts]] workspaces, as well as any            |
| 26:01      | shortcuts that I might run as part of wearing this hat.                                              |
| 26:05      | And that's really useful just to get everything into one place.                                      |
| 26:09      | Yeah.                                                                                                |
| 26:10      | This whole idea of contextual shortcuts, I think, is where you get the real payoff with              |
| 26:15      | this.                                                                                                |
| 26:16      | And I had talked earlier about it, but just to share my MacSparky shortcut, which is                 |
| 26:23      | a lightning bolt, because I think that's cool.                                                       |
| 26:26      | But there's just so many different things I do, and there's some of them that are very               |
| 26:30      | simple.                                                                                              |
| 26:31      | One of them is just inbox.                                                                           |
| 26:32      | So if I tap on that, it takes me to the MacSparky [[Airmail]] inbox for the MacSparky account.       |
| 26:40      | I don't see the inbox for the other accounts, I just see that one.                                   |
| 26:43      | But also, a lot of these I have timers running, so just to take for granted that if it's something   |
| 26:47      | that I can attribute to a specific area of my life, I'm going to throw a timer on.                   |
| 26:53      | And then there's multiples.                                                                          |
| 26:55      | And then the OmniFocus perspectives, I talked earlier about my OmniSelect application, where         |
| 27:04      | I can pick among my OmniFocus tasks, but there's no reason they have to live just there.             |
| 27:08      | I mean, one of the nice things about this is you can have redundancy.                                |
| 27:12      | And so if I'm looking at the MacSparky thing, getting into the various perspectives that             |
| 27:17      | are directly related to MacSparky are also in the MacSparky button.                                  |
| 27:22      | So I can always get to these things easily, no matter where I'm going.                               |
| 27:27      | If I have an idea for a new post, like sometimes I'm wandering around, I have an idea for a          |
| 27:33      | new post.                                                                                            |
| 27:34      | In fact, I just had one this morning, and I'm going to write up rows about all the low-hanging       |
| 27:37      | fruit in iOS.                                                                                        |
| 27:38      | I'm tired of people saying that it's just an iPad, but there's some things [[Apple]] needs               |
| 27:43      | to do, like they need to fix, like you should be able to create a folder and do better tags          |
| 27:48      | and stuff.                                                                                           |
| 27:49      | So I have this whole idea.                                                                           |
| 27:50      | But I want to write a post on that.                                                                  |
| 27:54      | So I've got this cool little button here on my MacSparky list that opens a new OmniFocus             |
| 28:00      | task.                                                                                                |
| 28:01      | But it's not just a new OmniFocus task, it's one that's intended to be a blog post.                  |
| 28:05      | So the name says write post about already.                                                           |
| 28:08      | So I already wrote the first three words of the input.                                               |
| 28:13      | I've got it assigned to the project, I've got all the tasks, I'm sorry, all the context              |
| 28:17      | or tags.                                                                                             |
| 28:18      | It says context in Siri Shortcut still, because I don't know whatever, but it does take tags.        |
| 28:23      | So you throw tags in there, and I've even got the ability to edit it in OmniFocus right              |
| 28:28      | away if I want to.                                                                                   |
| 28:29      | So it's just taking a whole bunch of steps off my usual method.                                      |
| 28:36      | Like if I wanted to just create a new task and OmniFocus about writing a blog post, all              |
| 28:41      | that metadata I would have to fill in when I opened OmniFocus and went to the inbox.                 |
| 28:45      | But because I've created this kind of shortcut, it allows me to just have to type in the exact       |
| 28:51      | name of the task and hit return or hit enter, and all the other metadata is already there            |
| 28:56      | because I've pre-populated it.                                                                       |
| 28:59      | I've got ones for show prep, for the various shows that I work on, and it runs timers and            |
| 29:05      | brings me to the Google Doc or the Quip Doc or the Apple Note, because I do, we work in              |
| 29:12      | different platforms for the different shows I'm on, but it knows that and just gets me               |
| 29:16      | there.                                                                                               |
| 29:18      | One of them I'm doing right now is I'm working on a, I'm making a [[Keyboard Maestro]] field             |
| 29:22      | guide Rose.                                                                                          |
| 29:23      | It's a big secret, but I'm not such a secret anymore, and I'm hoping it'll come out in               |
| 29:27      | January, but I've been working extensively on working with the app, and I'm spending                 |
| 29:31      | a whole bunch of time in an Omni Outliner outlined for it.                                           |
| 29:34      | So I've got that document now as a shortcut entry, and once I finish and ship this thing,            |
| 29:41      | that'll go away and something else will replace it, but for now, with just one tap, I can            |
| 29:45      | get right to that document and make a change or addition to it.                                      |
| 29:49      | And there's more here too.                                                                           |
| 29:50      | I've got my node stuff, just all the things I regularly do as MacSparky are here, and                |
| 29:58      | it allows me to get to them very easily.                                                             |
| 30:00      | Everyone I've got in here is the admin panel for the learn.macsparky site, if a customer             |
| 30:05      | has a problem, I can get to it very quickly, and I'm constantly adding and refining this.            |
| 30:12      | And I did a similar thing on the legal side, which has got a different set of things.                |
| 30:15      | It's got the billings and the client matters and all that stuff, but all that is under               |
| 30:20      | one button on my home screen, and I just love, love, love it.                                        |
| 30:24      | It almost feels like it changes the way iOS can work for me.                                         |
| 30:29      | Yes.                                                                                                 |
| 30:30      | I've actually found, because I've got some things that I'm working on that I really                  |
| 30:33      | want to spend more time on, I've actually put these as top-level items in a few of my                |
| 30:37      | shortcuts, because then when I open it and try to run it, it's like, okay, right, well,              |
| 30:41      | it's all very well that you want to sit down and watch Netflix, but you really wanted to             |
| 30:44      | do this thing.                                                                                       |
| 30:45      | Ah, right, okay, well, actually, yeah, I am going to sit down and get on with that as                |
| 30:49      | well.                                                                                                |
| 30:50      | Obviously, it's still up to me to find the motivation to actually get on with it, but                |
| 30:53      | it's nice having that little reminder there to prompt me to do it and then go, okay, yeah,           |
| 30:58      | actually, I am going to go and work on this right now.                                               |
| 31:00      | Yeah, it's a way to kind of even encourage behaviour.                                                |
| 31:03      | Yes, definitely, which you can also use it to discourage behaviour as well.                          |
| 31:07      | So your communication buttons start with might include Twitter, but if you've decided that           |
| 31:11      | maybe you're not so keen on Twitter, then you might decide in a few weeks to hold that               |
| 31:15      | one out and make it a little harder to get a Twitter for you, which everybody can do                 |
| 31:20      | whatever it is they want with this, because of course, it's extremely flexible.                      |
| 31:25      | I forgot to comment earlier when you had made mention that you had one that included home            |
| 31:29      | kit, like common home kit tasks.                                                                     |
| 31:33      | I think that's a great use for this because home kit is actually a little tedious to get             |
| 31:37      | to.                                                                                                  |
| 31:38      | Definitely.                                                                                          |
| 31:39      | You can get to it through the control centre or you can get through it through the app,              |
| 31:42      | but it's just not that easy to get to the things you want to do.                                     |
| 31:45      | I think this is a great example, although if I understand it right, you actually have                |
| 31:51      | limited access to home kit through Siri Shortcuts.                                                   |
| 31:53      | You don't have the ability to address a specific item.                                               |
| 31:56      | No, you don't.                                                                                       |
| 31:57      | You only have access to scenes, unfortunately, at least at the time of recording, knowing            |
| 32:02      | us they'll probably have changed that by the time we release this.                                   |
| 32:05      | I hope that's true.                                                                                  |
| 32:07      | They have, since we started, actually added the option to choose a home kit scene instead            |
| 32:12      | of only having them donated, which is really nice.                                                   |
| 32:17      | So you just create scenes for the stuff you want, but just think of the most common lighting         |
| 32:22      | and whatever setups you have and just create some scenes, combine them all under a single            |
| 32:27      | Siri Shortcut, and then you can have it accessible directly from your home screen.                   |
| 32:32      | Yeah.                                                                                                |
| 32:33      | Of course, this is really nice in tandem with what I mentioned earlier, which is giving              |
| 32:37      | myself specific ones at specific times because I'm sure most people have got, maybe they             |
| 32:42      | have slightly warmer lights in the evening than they do in the morning because a whiter              |
| 32:47      | light will actually help you wake up whereas a more yellow or red light will actually help           |
| 32:52      | you go to sleep.                                                                                     |
| 32:54      | So if you are doing things like that, which I have been at least playing with, and it                |
| 32:58      | has been working quite effectively for me, I have to say, that maybe that's the placebo              |
| 33:02      | effect, then it's nice to have just the right ones prompted shown to you at the right times.         |
| 33:10      | And it's also perhaps useful if you are trying to get some family members on board with home         |
| 33:14      | care instead of them going, like, which button, I don't understand this, just run this and           |
| 33:21      | choose the one you want, oh, right, okay, got it.                                                    |
| 33:25      | That's nice.                                                                                         |
| 33:26      | Just to finish up on a couple more examples, like you had talked about with me offline               |
| 33:31      | about your communications one, and you go a little deeper than I do, I'm just launching              |
| 33:35      | apps that you are actually addressing tasks inside these apps, right?                                |
| 33:40      | Yeah.                                                                                                |
| 33:41      | So communication one, I actually don't list communication methods, I list people.                    |
| 33:46      | These are people that I frequently communicate with, like my parents, my boyfriend, David,           |
| 33:51      | various other friends, and I tap on the person and it then takes me to that person in whatever       |
| 33:57      | communication method it is, usually by opening a message to this person.                             |
| 34:01      | So for example, in my message, you can just have it open and you can type a message there            |
| 34:08      | or you could, and I have done this for a few people, especially some group chats in iMessage,        |
| 34:14      | I've got it where there's actually ask for input box, and then I use the send message                |
| 34:20      | action, but I've toggled off show when sending, which means it sends in the background, and          |
| 34:26      | I don't ever have to actually open the chat, which for some really busy chats, where it's            |
| 34:30      | very easy to get distracted by pictures of cute bunnies or something, it's good to help              |
| 34:34      | me keep focused if it's just that I want to send a message that I'm running late for                 |
| 34:37      | dinner.                                                                                              |
| 34:38      | Yeah, I played with that and it's really goofy.                                                      |
| 34:40      | One of the things I think they made a mistake with with Siri Shortcuts is when they give             |
| 34:45      | you the example donations, when you tap on it, they always suggest that you create shortcut          |
| 34:51      | with telling a person the exact phrase, you just texted them, like if I text Rose, hey,              |
| 34:58      | let's start five minutes early, and say, do you want to create a Siri Shortcut?                      |
| 35:02      | Telling Rose Mary Orchard five minutes early, no, that's a one time thing.                           |
| 35:07      | I feel like they could do a better job with those donations, but the reason I really didn't          |
| 35:11      | ever get into going deeper on that communications tab is because I use all that stuff for [[Drafts]].    |
| 35:16      | I mean, I write most of it in [[Drafts]], and then with [[Drafts]], I've already got the send                |
| 35:20      | to Rose, send to family groups into the, you know, all my usual suspects are already included        |
| 35:26      | in automation on [[Drafts]].                                                                         |
| 35:28      | Yeah, I mean, that would probably should do something on [[Drafts]].                                     |
| 35:32      | I don't think we need to give that probably a show at some point, at least a show.                   |
| 35:36      | There's a lot to cover there.                                                                        |
| 35:37      | Yes, there is, there are a few good things that I donated to messages, though, for example,          |
| 35:44      | as well as I have one saying send I know exclamation mark to my mom, it has the option to just send  |
| 35:51      | a message or send a message to mom.                                                                  |
| 35:53      | And if I run send a message to mom, then it will just open messages to my mom specifically,          |
| 36:00      | which is exactly what I was looking for there.                                                       |
| 36:03      | And then that's it.                                                                                  |
| 36:04      | That's the end of the shortcut.                                                                      |
| 36:06      | So that's pretty nice.                                                                               |
| 36:07      | Of course, using [[Drafts]] for this is great.                                                           |
| 36:10      | But sometimes I just need to check what the person said before applying to them.                     |
| 36:14      | And that's unfortunately where it's a little more difficult to use [[Drafts]] because then               |
| 36:18      | I have to open messages or WhatsApp or [[Skype]] or whatever communication method it is we're            |
| 36:23      | using probably smoke signals by now.                                                                 |
| 36:26      | And then check it.                                                                                   |
| 36:27      | And then I go to [[Drafts]] and I write it only to send it back to the application I just                |
| 36:30      | came from.                                                                                           |
| 36:31      | That's the case where [[Drafts]], unfortunately, does not make sense there.                              |
| 36:34      | Yeah, but I mean, one of the other things I really want to emphasise on this is that                 |
| 36:38      | really lets you expose the apps that you normally are digging on other screens or in folders         |
| 36:43      | for.                                                                                                 |
| 36:45      | I like to play my saxophone.                                                                         |
| 36:47      | It's a weird thing, but I do it.                                                                     |
| 36:48      | But I've got these apps.                                                                             |
| 36:49      | I've got one for tuning, you know, just to make sure I'm playing in tune.                            |
| 36:53      | I've got one called for score that plays that displays my music.                                     |
| 36:56      | I've got one that is a little robotic drummer that plays, you know, it plays a beat because          |
| 37:02      | you want to get your rhythm right.                                                                   |
| 37:04      | You want to have it's almost like a metronome, but it's got a swing beat or something.               |
| 37:08      | But you know, I have to go dig for those apps all the time.                                          |
| 37:10      | So I made one of these shortcuts based on that.                                                      |
| 37:13      | And then I've actually got a bigger shortcut just called play.                                       |
| 37:17      | And that one launches a whole bunch of stuff.                                                        |
| 37:19      | It gets me into the [[Apple]] store.                                                                     |
| 37:21      | It gets me on [[Amazon]].                                                                                |
| 37:22      | It gets me on the HBO app opens the [[Apple TV App\|TV app]].                                                          |
| 37:25      | But there's also a button there called saxophone, which exposes that second level of those saxophone |
| 37:30      | apps.                                                                                                |
| 37:31      | So it's just a couple of taps I can get to exactly the apps I need.                                  |
| 37:34      | And by doing this, I find I use the folders a lot less frequently.                                   |
| 37:38      | Yeah.                                                                                                |
| 37:39      | I have started replacing a large chunk of my folders with shortcuts because it allows                |
| 37:44      | me to either open apps to the specific area that I always go to anyway, or just hide the             |
| 37:52      | ones that I never use, but have some kind of feature like sending me a notification because          |
| 37:56      | I need that.                                                                                         |
| 37:57      | For example, the app from my credit card company is dire and I rarely open it, but I do like         |
| 38:02      | the notifications I get when I use my card just to make sure that everything's working               |
| 38:07      | as it should do.                                                                                     |
| 38:08      | And if I get a notification when I haven't used my card, then I'm aware, which is always             |
| 38:12      | useful.                                                                                              |
| 38:13      | Yeah.                                                                                                |
| 38:14      | Another one that's just like makes sense as a shortcut, but it's actually difficult                  |
| 38:18      | to manage.                                                                                           |
| 38:19      | Otherwise, as I have a collection of health related, I've got one that opens the activity            |
| 38:23      | app, I've got one that, you know, when I'm going to start a workout, the things I do,                |
| 38:27      | I've got one for my meditation, I've got one for tracking food to the start walk.                    |
| 38:33      | When I was mentioning earlier, that one's also referenced here at like one of the messages           |
| 38:37      | I like you to take out of this listening to the show is you can use these shortcuts once             |
| 38:41      | you make them in repeated locations, you know, the start walk one shows up in a couple places        |
| 38:47      | for me.                                                                                              |
| 38:48      | The timer one show up all over the place and I just save it as a single or very short                |
| 38:52      | action shortcut, but then I just access it and run it from other locations, you know,                |
| 38:58      | you can go beyond the box here, you know, let your mind expand as you start thinking                 |
| 39:03      | about the ways to implement these.                                                                   |
| 39:05      | Yes.                                                                                                 |
| 39:06      | And I would actually definitely recommend in the vast majority of cases, if it's more                |
| 39:10      | than one action, make it into its own shortcut and then you can include it in other places           |
| 39:14      | because a very long shortcut can be difficult to manage and look at.                                 |
| 39:18      | And also if you then decide, for example, you have the start walk one, okay, so you                  |
| 39:23      | put that in one shortcut, maybe you want to access it in this other one as well.                     |
| 39:26      | Now what do you do?                                                                                  |
| 39:27      | Do you go copy the actions over and then you decide actually when you go for a walk, you             |
| 39:31      | also want to turn off all the lights in the house before you leave.                                  |
| 39:35      | You have to modify it in two places by turning it into its own shortcut, then you modify             |
| 39:39      | it once and it's updated everywhere.                                                                 |
| 39:41      | This is a function in programming terms and it is extremely useful for everybody and it              |
| 39:46      | also means that you can search for things and, you know, find it later and run it independently      |
| 39:51      | if you want.                                                                                         |
| 39:52      | And also more importantly, you can run it via Siri if you want because if it's an individual         |
| 39:57      | shortcut, you can donate it to Siri very easily versus donating a much larger shortcut               |
| 40:01      | with a menu.                                                                                         |
| 40:03      | Siri has some value, but perhaps not as much as an individual one.                                   |
| 40:07      | Yeah.                                                                                                |
| 40:08      | There's just so much you can do with this.                                                           |
| 40:10      | I was looking, I have a travel one where it's got things like open Google Maps and open              |
| 40:15      | Maps, but it's also got ones that get specific directions or get me where I'm at or it's             |
| 40:21      | got the single button, you know, send Daisy my location when I'm out, you know, in the               |
| 40:26      | world and I want her to know where I'm at.                                                           |
| 40:29      | It's just got a bunch of stuff related to location, but also it's got stuff in here                  |
| 40:34      | how to find a restaurant.                                                                            |
| 40:35      | So you get to combine all this stuff under one button and I guess going back on the theme            |
| 40:41      | Rose said earlier, when you've got it right in front of your face, when you push that                |
| 40:44      | button, you're more likely to use these tools.                                                       |
| 40:46      | Yeah.                                                                                                |
| 40:47      | Definitely.                                                                                          |
| 40:48      | And it's a great way of actually making sure you do things.                                          |
| 40:51      | So recently I've been beta testing a few different applications, which theoretically will replace    |
| 40:56      | other applications in my daily workflow.                                                             |
| 40:58      | And because I've been using the shortcuts, it's really easy because I've literally opened            |
| 41:01      | up the shortcut to edit it and changed, for example, I'm beta testing a micro blog app.              |
| 41:06      | I've changed the micro blog app out to be this other one.                                            |
| 41:11      | And that's great because then I still do exactly the same action, but I actually get to base         |
| 41:15      | test this application for these people because, you know, I said that I would give some feedback     |
| 41:19      | and if I don't use it, I can't provide feedback.                                                     |
| 41:21      | Yeah.                                                                                                |
| 41:22      | Just like on my audio list of my audio series shortcut launcher, I've got an entry called            |
| 41:27      | podcast, but it doesn't open the [[Apple Podcasts\| Apple podcast app]].                             |
| 41:31      | It opens overcast, but maybe next week I'm trying a different app.                                   |
| 41:34      | I can swap that out and the button I push never changes and the label never changes.                 |
| 41:39      | Yeah.                                                                                                |
| 41:40      | So back to something I said earlier as well.                                                         |
| 41:43      | If you have a relative with an iPad or an iPhone that's, you know, and maybe you have                |
| 41:47      | to change an application because they complain that it's not working, but having them remember       |
| 41:51      | the name of the new application, if you've done, if you've actually put shortcuts on                 |
| 41:55      | their screen for them, then they have the same icon and they have the same name for                  |
| 41:59      | the icon and they press it and it just opens the different application.                              |
| 42:03      | This is a little bit like what I used to do for my grandparents with putting [[Google Chrome\|Chrome]] on               |
| 42:07      | the desktop with the Internet Explorer icon because the blue E is the internet.                      |
| 42:11      | Yeah.                                                                                                |
| 42:12      | That's clever.                                                                                       |
| 42:13      | I like that.                                                                                         |
| 42:14      | I'm sure a lot of nerds have done that before.                                                       |
| 42:16      | This is a very similar concept or could be.                                                          |
| 42:18      | And this can both be to trick you into doing something that you want to do or not.                   |
| 42:24      | And of course, don't forget, you could have it as well.                                              |
| 42:26      | Just check the time.                                                                                 |
| 42:27      | And if you try and open Twitter past 10 p.m., it's like, nope, go to bed.                            |
| 42:32      | Do all sorts of things.                                                                              |
| 42:33      | Let's talk a little bit about this customisation because when I did that video, a bunch of           |
| 42:37      | people asked me, well, how did you get those icons on your screen and how come they don't            |
| 42:41      | have labels on them?                                                                                 |
| 42:43      | And let's just talk about the mechanics of that a little bit.                                        |
| 42:46      | So there's a lot of things that you can do here.                                                     |
| 42:47      | The first of all, obviously, is give your shortcut an icon.                                          |
| 42:53      | So you choose the colour in shortcuts and you choose which glyph represents it.                      |
| 42:59      | And then you can also, in the shortcut, so this is in the settings in the top right,                 |
| 43:05      | it's an often an on toggle under the dumb button.                                                    |
| 43:09      | And then you tap on icon.                                                                            |
| 43:10      | You can also say home screen and you can select photo or take a photo, which means that you          |
| 43:15      | can, if you want to go super crazy and make custom artwork, or you can just take an existing         |
| 43:21      | logo like the Automators logo and put that in there as well.                                         |
| 43:25      | The names, all apps and folders have names they're required to on iOS, which is something            |
| 43:32      | that I would, you know, I'm joining the course of people would say, I'd like to be able to           |
| 43:35      | turn that off.                                                                                       |
| 43:36      | I mean, just think about the apps on your home screen.                                               |
| 43:39      | When's the last time you needed to read the name of any of them?                                     |
| 43:42      | Yeah, I mean, yeah, once you've had an app for a few weeks, you remember what the icon               |
| 43:47      | looks like and it's mostly muscle memory for a lot of us, I'm sure, or you're launching              |
| 43:52      | it via Siri anyway, so you don't care what name it says.                                             |
| 43:56      | I would almost say once you've had it for a few hours, you know what the icon does.                  |
| 44:00      | But the anyway, but that's required.                                                                 |
| 44:02      | But there are some ASCII characters that are blank and it's like the secret, you know,               |
| 44:08      | the secret password, you've got to get them.                                                         |
| 44:10      | I got them off the internet years ago and I just saved them to a file where I just copy              |
| 44:15      | and paste them because you can't like put, you have to put something in for the name                 |
| 44:20      | or it won't let you complete the creation of the icon.                                               |
| 44:23      | But so you just paste in these blank characters and we'll put them in the link to the show.          |
| 44:28      | As a fact, I was thinking, maybe I'll even make a Siri shortcut that just paste those                |
| 44:32      | blank characters into the clipboard and then you could paste it.                                     |
| 44:36      | I'll have to figure it out, but I either way, we'll make those accessible to you so you              |
| 44:40      | can paste them in and that gives you an icon without a name underneath it and it looks               |
| 44:45      | really cool, I think.                                                                                |
| 44:47      | The other thing, I'm not sure how great it is, but he made the top line blank and I                  |
| 44:53      | think he did mention he used shortcuts.                                                              |
| 44:54      | So what we do is you make a shortcut and then you just give it an icon that is a solid black.        |
| 45:00      | If you've got a black background, then it's just going to blend right in.                            |
| 45:03      | So like he had his list of icons starting on the second row on the top row, there were               |
| 45:09      | four shortcuts up there that just had a solid black icon with node label and then that in            |
| 45:14      | essence pushed everything down a row.                                                                |
| 45:17      | And on that episode, Mike made the recommendation, which I think is brilliant, is to have secret     |
| 45:22      | shortcuts attached to those icons that you can't see, like maybe you make an OmniFocus               |
| 45:27      | new inbox item up there where it looks like there's no icon, but you just tap up there               |
| 45:32      | and it opens up for you like magic.                                                                  |
| 45:35      | And I've thought about that, but I've never gone to the level of doing it.                           |
| 45:40      | For me, when I've created those blank icons, they're just shortcuts that have no commands            |
| 45:44      | in them at this point for me.                                                                        |
| 45:46      | Have you done, have you played with that?                                                            |
| 45:48      | I briefly tried it and realised that I like having lots of icons on my home screen.                  |
| 45:54      | So it's not for me.                                                                                  |
| 45:55      | I can see for some people, especially if you don't have many icons and you want to have              |
| 46:00      | a very minimalist iPhone home screen, then that would be a really great way to push the              |
| 46:05      | most frequently used icons down underneath your thumb and to say the bottom two rows,                |
| 46:10      | which tend to be the most accessible ones.                                                           |
| 46:12      | But I tend to put things that I'm trying to do less of, but I still need to do in the                |
| 46:18      | top row.                                                                                             |
| 46:19      | One of the things we haven't mentioned about this is every time you run one of these, unfortunately, |
| 46:26      | when you run it from your home screen, it's going to jump into the Siri Shortcuts app.               |
| 46:31      | It's a little bit jarring the way it happens.                                                        |
| 46:35      | Yeah.                                                                                                |
| 46:36      | Unfortunately, it actually sends you to [[Safari]] and then it opens the Shortcuts app, which            |
| 46:40      | is a little bit, yeah, it takes a moment of getting used to it, but there's a great                  |
| 46:46      | tip where it says, if you turn off reduce motion, then the action becomes more fluid.                |
| 46:51      | Of course, this may change how other things appear.                                                  |
| 46:53      | In my case, it breaks my iPhone background because I have a black background with a rainbow          |
| 46:56      | border, which is just a thin, I think one or two pixel line around my phone.                         |
| 47:01      | And that breaks, unfortunately, if I turn off reduce motion.                                         |
| 47:04      | Yeah.                                                                                                |
| 47:05      | Either way, I really don't like that.                                                                |
| 47:08      | I mean, I know it just takes a few seconds, but I'm just not a fan of that action.                   |
| 47:14      | I wish that, or maybe, hopefully, with a future version of Siri Shortcuts, it won't drag you         |
| 47:20      | through that process.                                                                                |
| 47:22      | Interestingly, an alternative, and what I've been using is you can put these things on               |
| 47:28      | your widget screen, too, how the widget screen has a Siri Shortcuts widget.                          |
| 47:33      | If you put that on there and you're judicious in the way you set up your widget screen,              |
| 47:39      | you can select in the Siri Shortcuts app, which applications get on your widget screen,              |
| 47:44      | you can have all of these available to you by just swiping to the left on the widget                 |
| 47:48      | screen and tapping on the appropriate one.                                                           |
| 47:50      | And in that case, it doesn't go to [[Safari]], it doesn't go to the Siri Shortcuts app.                  |
| 47:53      | It truly acts like a menu-driven system, way more clean that way if you're unhappy with              |
| 48:00      | the icons.                                                                                           |
| 48:01      | Yes.                                                                                                 |
| 48:02      | And I can actually give people an additional tip, or I thought I could, and now I can't              |
| 48:05      | anymore because where is it?                                                                         |
| 48:08      | If you do the modifying of the widget in Shortcuts itself, so if you tap on the settings, then       |
| 48:17      | there should be Show in Widgets, so you can make sure whether or not your actual shortcut            |
| 48:22      | is showing in the widgets.                                                                           |
| 48:24      | And there should be somewhere in Shortcuts the option to go into the settings for Shortcuts,         |
| 48:29      | and then you can modify the widget screen and you can just move things up and down in there,         |
| 48:32      | which gets them to the top of your widgets much more easily.                                         |
| 48:35      | That's a good one.                                                                                   |
| 48:36      | Also, you can use the Launcher app to help you along with this as well.                              |
| 48:41      | So I use Launcher because it can show me widgets, I believe it has six or eight different widgets,   |
| 48:47      | and it can show me widgets based on time or location.                                                |
| 48:50      | So when I'm outside of Vienna, it can show me my travel one, but when I'm inside of Austria,         |
| 48:55      | it can show me my Austria slash Vienna one.                                                          |
| 48:58      | When I'm at work, it will show me my work one, which means that the Shortcuts and other              |
| 49:02      | actions that I would do at work, for example, are right there with one swipe when I'm at             |
| 49:07      | work, but once I leave work, they're not there anymore, which is useful for focus.                   |
| 49:12      | I don't know.                                                                                        |
| 49:13      | Do you think we could do a whole show on Launcher?                                                   |
| 49:15      | I almost think we could.                                                                             |
| 49:17      | I think so.                                                                                          |
| 49:18      | I mean, we're going to have to do a show on Launch Center Pro because that is in beta                |
| 49:21      | testing for 3.0.                                                                                     |
| 49:22      | I am under an NDA, unfortunately, but I will say it's awesome.                                       |
| 49:27      | So we're going to be doing a show on that.                                                           |
| 49:28      | Agreed.                                                                                              |
| 49:29      | That is a show.                                                                                      |
| 49:31      | Yeah, they are separate applications.                                                                |
| 49:33      | Just to be clear, Launch Center Pro, I believe was first on the market, and it's one of              |
| 49:37      | my favourite applications.                                                                           |
| 49:39      | It was one of the first automation apps for iOS.                                                     |
| 49:42      | Am I breaking the NDA if I say the beta is in my dock right now?                                     |
| 49:46      | I don't think so.                                                                                    |
| 49:47      | No, I don't think either was a breaking beta by saying it's in our dock because it is.               |
| 49:53      | What's in your dock these days, Russ?                                                                |
| 49:55      | Currently, I have [[Drafts]], [[Safari]], Launch Center Pro, and OmniFocus.                                  |
| 49:59      | How about you?                                                                                       |
| 50:00      | I have OmniFocus, [[Drafts]], and Launch Center Pro, and just those three.                               |
| 50:05      | I keep trying three in the dock, but I use [[Safari]] a lot because I Google so much.                    |
| 50:11      | So maybe I need to put a shortcut in my dock to Google things instead of opening [[Safari]].             |
| 50:16      | Well, actually, and I kind of misspoke, it's not actually OmniFocus.                                 |
| 50:20      | It's OmniSelect.                                                                                     |
| 50:21      | It's my shortcut we've been talking about because I like to just, I love the idea of                 |
| 50:26      | just going straight to the part of the, especially on a big app like OmniFocus.                      |
| 50:31      | I don't have to navigate anything, I just press a button, it takes me where I want                   |
| 50:34      | to go.                                                                                               |
| 50:35      | Yeah, that's good.                                                                                   |
| 50:36      | I still have OmniFocus there because it's useful to have the badge on the icon, and this             |
| 50:41      | is something that you won't get with shortcuts, which may be something that you want or maybe        |
| 50:45      | something you don't want.                                                                            |
| 50:46      | You do not get a badge on a shortcut.                                                                |
| 50:50      | Even if it is a shortcut just to open a specific application, you will not get a badge.              |
| 50:54      | That shortcut can give you notifications as part of this, and this is something I didn't             |
| 50:59      | mentioned earlier, but some applications like, for example, Quip, I use for more than one            |
| 51:04      | purpose and they, unfortunately, are not shortcut-successful, which means that all I can do is open  |
| 51:09      | the app.                                                                                             |
| 51:10      | So what I do is I have a notification that pops up after opening the app, and then I                 |
| 51:16      | get the app and I'm in the app and I'm going, oh, rabbit hole, rabbit hole, and the notification     |
| 51:20      | slides in from the top to show me, you are going to look at the automators outline.                  |
| 51:25      | Ah, right.                                                                                           |
| 51:26      | Yes.                                                                                                 |
| 51:27      | Thank you very much.                                                                                 |
| 51:28      | Pass to me.                                                                                          |
| 51:29      | That's good.                                                                                         |
| 51:30      | That's good.                                                                                         |
| 51:31      | That's not the only...                                                                               |
| 51:32      | Some apps just are not available, like the camera app, for instance, which is super frustrating.     |
| 51:37      | I've got a whole camera shortcut system, but the actual camera app isn't in it because               |
| 51:41      | it's not available to me.                                                                            |
| 51:43      | No, but you can, thankfully, at the very least, take a photo, which, yeah, it's a start.             |
| 51:49      | It's not quite what you want, and you have to specify how many photos you want to take               |
| 51:54      | and which camera you want to take it with the front camera or the back camera and whether            |
| 51:57      | or not you want to show a camera preview and all of that stuff.                                      |
| 52:01      | It is odd that some of the [[Apple]] apps are the ones that are not Siri shortcut-friendly.              |
| 52:05      | Yeah.                                                                                                |
| 52:06      | But then again...                                                                                    |
| 52:07      | It's also weird that you can turn off showing a camera preview because if you do that, then          |
| 52:13      | it just takes a photo of whatever is in front of whichever camera it is.                             |
| 52:16      | Yeah.                                                                                                |
| 52:17      | Kind of creepy.                                                                                      |
| 52:18      | Yeah.                                                                                                |
| 52:19      | But you don't have to press the buttons, take the photo, so that's something.                        |
| 52:25      | So you can't do everything with Siri shortcuts, but you can do a lot, and this is something          |
| 52:30      | I think you should try.                                                                              |
| 52:31      | You should not do it the way I did it because I fell into a hole for like a day and a half           |
| 52:35      | setting these things up.                                                                             |
| 52:38      | I think it's better, you know, just build them as you need them, but I do find that it's             |
| 52:42      | very useful.                                                                                         |
| 52:43      | I haven't decided yet where I fall on this, whether I'm going to just run them from the              |
| 52:48      | widget screen and just keep apps on my home screen, or right now I've got a kind of a combination    |
| 52:54      | of everything.                                                                                       |
| 52:55      | Like I said, I've got Omni Select in my dock, I've got the, especially the legal and the             |
| 52:58      | MacSparky contextual shortcuts are so useful to me.                                                  |
| 53:02      | I just keep those on my home screen, but some of them I have just got apps.                          |
| 53:07      | I just haven't really figured out how it all plays out for me yet.                                   |
| 53:11      | That whole thing jumping to [[Safari]] and then back to Siri shortcuts really just makes me              |
| 53:15      | crazy sometimes.                                                                                     |
| 53:16      | Yeah.                                                                                                |
| 53:17      | But I mean, at the same time for everybody listening, remember that there are no rules               |
| 53:20      | to this.                                                                                             |
| 53:21      | Do whatever you think works.                                                                         |
| 53:22      | And if this doesn't work, then well, I mean, at the very least you play with shortcuts               |
| 53:25      | some more, which is always a fun, fun exercise and it's well worth doing, I would say.               |
| 53:31      | But honestly, it's going to work because it's faster.                                                |
| 53:35      | It just is faster.                                                                                   |
| 53:36      | Yeah.                                                                                                |
| 53:37      | I mean, there's only so many slots on your home screen and the idea that not only can                |
| 53:41      | you open an app, but you can start a specific task in an app that always would take more             |
| 53:46      | clicks and button presses once you got the app open.                                                 |
| 53:50      | It's just faster.                                                                                    |
| 53:51      | And I suspect even it tries, this is going to adopt at least some portion of it.                     |
| 53:57      | And I mean, sometimes you can do some of these things with force touching an app icon, but           |
| 54:02      | I don't know about you, but I always forget that I can force touch app icons until I do              |
| 54:06      | it accidentally.                                                                                     |
| 54:07      | And there's like, oh, right.                                                                         |
| 54:08      | Yeah, I could do that because you get the little widget and then you get the things.                 |
| 54:12      | But of course, this is also an accessibility trick.                                                  |
| 54:15      | If you're somebody that for one reason or another can't force touch, then you can actually           |
| 54:19      | replicate those force touch options with shortcuts in the vast majority of cases and even go         |
| 54:27      | further.                                                                                             |
| 54:28      | Yeah, but I mean, the difference is though, it's just this is so much more customisable              |
| 54:32      | to you.                                                                                              |
| 54:33      | Yes.                                                                                                 |
| 54:34      | Force touching OmniFocus lets me create a new inbox item.                                            |
| 54:37      | It does not let me create a new idea for a blog post with everything already filled out              |
| 54:42      | for me or a new, you know, question for a client or, you know, that's not the only                   |
| 54:46      | I have a lot of customised inbox items that I've made with this because there's a bunch              |
| 54:51      | of stuff I do all the time that always has the same tags and always has the same projects.           |
| 54:55      | So why not just automate that stuff?                                                                 |
| 54:57      | So I only have to type in the least amount of information and get it captured properly.              |
| 55:03      | Yeah.                                                                                                |
| 55:04      | And I mean, I've been doing that too, and especially once you add the ability to do                  |
| 55:07      | multiple steps.                                                                                      |
| 55:08      | So for example, the new blog post thing can also create a blog post draft in [[Drafts]] for              |
| 55:14      | you.                                                                                                 |
| 55:15      | And then you can actually save a link to that in the note of the OmniFocus task.                     |
| 55:20      | And then, you know, you just saved yourself five minutes later because then you're looking           |
| 55:24      | at draft and it's like, oh yeah, that was that was the post I wanted to write and then               |
| 55:27      | done.                                                                                                |
| 55:28      | Yeah.                                                                                                |
| 55:29      | And you can like even go crazy and say, open up, create the task in the appropriate Ulysses          |
| 55:35      | folder and calendar time to write the blog post and create a calendar entry for posting              |
| 55:42      | it next week.                                                                                        |
| 55:43      | You know, you can you can go really far down the rabbit hole on this stuff.                          |
| 55:47      | Yeah.                                                                                                |
| 55:48      | That's where it gets really powerful.                                                                |
| 55:50      | I think we both have been eager to do this show because we've been having so much fun                |
| 55:54      | with it.                                                                                             |
| 55:55      | Okay.                                                                                                |
| 55:56      | Yeah.                                                                                                |
| 55:57      | Yeah.                                                                                                |
| 55:58      | No, we have.                                                                                         |
| 55:59      | It's been something I've been playing with for quite a while and I'm really enjoying                 |
| 56:01      | it.                                                                                                  |
| 56:02      | Yeah, my thanks to Gray for kind of leaving, blazing the trail here.                                 |
| 56:06      | Yes.                                                                                                 |
| 56:07      | And we did ask him, unfortunately, he wasn't able to be on today's show, but and he did              |
| 56:12      | send me a comment that he wanted to include, which is shortcut launches to launch shortcuts          |
| 56:16      | adjust the best.                                                                                     |
| 56:18      | So I think I can leave you with that message.                                                        |
| 56:21      | Yeah.                                                                                                |
| 56:22      | Can you tell this is fun?                                                                            |
| 56:23      | I think it is.                                                                                       |
| 56:24      | If you're listening to our show, this is fun for you.                                                |
| 56:26      | So give it a try and share them with us over at talk.automators.com.                                 |
| 56:32      | FM.                                                                                                  |
| 56:33      | Yes.                                                                                                 |
| 56:34      | And as always, there will be a thread for every episode, but feel free to create your                |
| 56:37      | own threads as well.                                                                                 |
| 56:38      | If it's related to the episode, then maybe just post a link to that in the thread for                |
| 56:44      | the episode as well, which is we're going to have some screencasts with this one to                  |
| 56:48      | show you, you know, how we're doing some of this stuff.                                              |
| 56:50      | So if you're confused by some of it, just follow along.                                              |
| 56:53      | Like Rose said, we'll have a simple one, we'll have a complex one.                                   |
| 56:57      | But I don't think this, this stuff is not particularly difficult and it's super useful.              |
| 57:02      | Yes, it is.                                                                                          |
| 57:04      | It's very easy to grasp.                                                                             |
| 57:06      | It's a great way to exercise your shortcut skills, especially if you're getting to grips             |
| 57:10      | with it and you can reach the sky and go beyond.                                                     |
| 57:14      | I'm sure somebody someday will figure out how to take us to the moon with shortcuts.                 |
| 57:18      | Amen.                                                                                                |
| 57:19      | All right.                                                                                           |
| 57:23      | So we are the automators.                                                                            |
| 57:24      | You can find us at automators.fm.                                                                    |
| 57:27      | We've got a great forum over at talk.automators.fm.                                                  |
| 57:30      | The show is hosted at really fm/automators.                                                          |
| 57:34      | Yeah, where you'll be able to find show notes, including various different links.                    |
| 57:39      | Don't forget there is a blog post which accompanies every episode.                                   |
| 57:42      | And if you want a blog, a RSS feed of just the automators blog posts, then you can get               |
| 57:48      | that over at automators.fm, which will then take from either my blog or David's blog depending       |
| 57:55      | on who is in charge of which episode.                                                                |
| 57:58      | The Rose is on Twitter at rosemary orchard.                                                          |
| 58:00      | I am on Twitter at MacSparky.                                                                        |
| 58:03      | Thank you Omni Group for sponsoring this episode.                                                    |
| 58:05      | Do we miss anything, Rose?                                                                           |
| 58:07      | No, I think that is everything, apart from to say thank you to everybody who has listened            |
| 58:12      | all the way to the end.                                                                              |
| 58:13      | You are wonderful people.                                                                            |
| 58:14      | And I look forward to hearing from you in some kind of feedback.                                     |
