---
status: "incomplete"
fc-date:
  year: 2019
  month: 07
  day: 20
fc-category: "podcast"
podcast: "Automators"
published: 2019-07-20
duration: 2531
formattedduration: "00:42:11"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/28"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators028.mp3"
episode: 28
title: "28: Keyboard Maestro and the Mac"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David take a closer look at Keyboard Maestro, the Swiss army knife of automation for the Mac. Get $5 off David's new Keyboard Maestro Field Guide until the end of July with code "AUTOMATORSKM".

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 028 Discussion](https://talk.automators.fm/t/automators-28-keyboard-maestro-and-the-mac/5251)

# Sponsors
- [[Creative Next (Sponsor)|Creative Next ]] - The new podcast future-proofing creatives.

# Show Notes
- [Keyboard Maestro 8.2.4: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Nested Folders Podcast](https://nestedfolderspodcast.com)
- [Nested Folders Podcast Announcement](https://rosemaryorchard.com/blog/introducing-nested-folders-a-productivity-podcast/) - Rose explains her new show.
- [The Keyboard Maestro Field Guide](https://learn.macsparky.com/p/km) - Use "AutomatorsKM" to get $5 until the end of July.
- [Mac Power Users #484: Unlocking Keyboard Maestro - Relay FM](https://www.relay.fm/mpu/484)
- [Keyboard Maestro Discourse - Discussion forum for Keyboard Maestro, the powerful macro program for macOS](https://forum.keyboardmaestro.com/)
- [Email Flags - Questions & Suggestions - Keyboard Maestro Discourse](https://forum.keyboardmaestro.com/t/email-flags/8508)

# Transcription

| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks,                                                                               |
| 00:03      | and joined by my co-host, Rosemary Orchard,                                                            |
| 00:05      | and this is The Automators,                                                                            |
| 00:07      | where we talk about how to automate your technology                                                    |
| 00:10      | to do your work for you.                                                                               |
| 00:11      | Hi, Rosemary.                                                                                          |
| 00:12      | Hey, how are you doing?                                                                                |
| 00:14      | Good. We've got a good show today.                                                                     |
| 00:16      | We've danced around [[Keyboard Maestro]] a lot.                                                            |
| 00:19      | We haven't really given it a show,                                                                     |
| 00:20      | so we figured today was the day.                                                                       |
| 00:22      | It definitely is.                                                                                      |
| 00:23      | But before we dive into the automation                                                                 |
| 00:25      | that can be done with your keyboard and more,                                                          |
| 00:27      | we do have a few notes that we should include.                                                         |
| 00:30      | Do we not?                                                                                             |
| 00:31      | Yes, I understand there's a final chapter                                                              |
| 00:33      | to Rose versus the Leaf.                                                                               |
| 00:35      | There is.                                                                                              |
| 00:36      | Well, I mean, it's a preliminary final chapter,                                                        |
| 00:40      | but I can officially say                                                                               |
| 00:41      | that I no longer have a cast on my foot                                                                |
| 00:43      | and I can move my ankle in all directions,                                                             |
| 00:46      | some of which cause a little bit of not pain,                                                          |
| 00:49      | but uncomfortableness,                                                                                 |
| 00:51      | but I am significantly happier                                                                         |
| 00:54      | than I was with a cast on my foot.                                                                     |
| 00:55      | Oh, yeah. Yay!                                                                                         |
| 00:57      | And you can scratch your leg now.                                                                      |
| 00:59      | Oh, yeah. Yeah.                                                                                        |
| 01:01      | More importantly, I can moisturise                                                                     |
| 01:02      | because my feet were really dry,                                                                       |
| 01:05      | and that was annoying me.                                                                              |
| 01:06      | Well, that's great.                                                                                    |
| 01:08      | So next year, my goal at [[WWDC]] is to keep Rose off scooters.                                            |
| 01:12      | I think that that is a good goal.                                                                      |
| 01:14      | And we should also mention that both of us                                                             |
| 01:16      | are going to be at the Relay FM Fifth Anniversary Show                                                |
| 01:19      | this August.                                                                                           |
| 01:20      | Yes.                                                                                                   |
| 01:20      | And so if you want to meet us                                                                          |
| 01:22      | and you're in San Francisco in August,                                                                 |
| 01:24      | please come say hi                                                                                     |
| 01:25      | and see the Fifth Anniversary Show as well.                                                            |
| 01:28      | And you can keep me off the scooters then as well.                                                     |
| 01:30      | That's that's OK.                                                                                      |
| 01:31      | Maybe I'll rent a scooter                                                                              |
| 01:33      | and just follow you around in it                                                                       |
| 01:34      | to make sure you don't get on one.                                                                     |
| 01:36      | Is that right?                                                                                         |
| 01:39      | I'm not sure that works,                                                                               |
| 01:41      | but yeah, we can try.                                                                                  |
| 01:43      | Also, you have a new podcast you're launching.                                                         |
| 01:46      | Yes. As this episode releases,                                                                         |
| 01:48      | my new podcast, [[Nested Folders]], will actually be out.                                                  |
| 01:51      | So feel free to search for that in iTunes.                                                             |
| 01:54      | We'll have links in the show notes, of course.                                                         |
| 01:56      | And you can you can find that on the Internet.                                                         |
| 01:58      | It's about productivity and it probably, in many cases,                                                |
| 02:02      | how I've done things wrong so that you can do them right.                                              |
| 02:04      | And that's with a great friend of mine, Scotty Jackson.                                                |
| 02:07      | Excellent. I can't wait to listen to it.                                                               |
| 02:10      | All right.                                                                                             |
| 02:11      | Well, today we're here to talk about [[Keyboard Maestro]].                                                 |
| 02:13      | And, you know, the reason is we.                                                                       |
| 02:17      | Well, there's a couple reasons.                                                                        |
| 02:19      | Number one is [[Keyboard Maestro]] is one of the most powerful                                             |
| 02:22      | automation tools on the Mac that doesn't require any coding.                                           |
| 02:26      | And we've talked about it in some of our workflow episodes                                             |
| 02:29      | in the past about how we solve specific problems                                                       |
| 02:32      | and we stumbled in a [[Keyboard Maestro]] quite often.                                                     |
| 02:34      | But I just wanted to kind of give it a show.                                                           |
| 02:37      | The other reason, of course, is I released the [[Keyboard Maestro]]                                        |
| 02:39      | Field Guide and and I didn't get it.                                                                   |
| 02:43      | We didn't really have a chance to share it with the audience.                                          |
| 02:46      | There is a couple of discount codes if you use,                                                        |
| 02:49      | if you go to buy the [[Keyboard Maestro]] Field Guide with the link                                        |
| 02:53      | in the show notes and use the code AutomatorsLoveKM.                                                   |
| 02:58      | So AutomatorsLoveKM, no spaces.                                                                        |
| 03:00      | They'll get you $5 off.                                                                                |
| 03:01      | And I confirmed right before we recorded Keith over the developer                                      |
| 03:06      | of [[Keyboard Maestro]] still giving a 20% discount on the app itself.                                     |
| 03:10      | So if you go to buy the app over at Stairways Software.com,                                              |
| 03:14      | use the code KMFG to get 20% off the application itself.                                               |
| 03:21      | Excellent.                                                                                             |
| 03:22      | And it's well worth buying if you don't already own a license                                          |
| 03:25      | by the end of this podcast, you will almost certainly want one.                                        |
| 03:28      | So yes, use that discount.                                                                             |
| 03:31      | It's very automator friendly.                                                                          |
| 03:33      | Definitely.                                                                                            |
| 03:35      | [[Keyboard Maestro]] in a lot of ways,                                                                     |
| 03:37      | we were talking about before the show is like shortcuts.                                               |
| 03:41      | But it's like the original shortcuts.                                                                  |
| 03:43      | Yeah, so first, I believe Automator actually came along first.                                         |
| 03:48      | And then [[Keyboard Maestro]] sort of came along and was like,                                             |
| 03:50      | well, I can do all of this, but better because it really can.                                          |
| 03:54      | So where you'll run into limitations with Automator frequently,                                        |
| 03:58      | you can actually get around, I would say, 99% of those with [[Keyboard Maestro]]                           |
| 04:03      | just because it's a lot more powerful.                                                                 |
| 04:05      | And there are ways around almost every problem as you will hear.                                       |
| 04:11      | Yeah.                                                                                                  |
| 04:12      | And it's, but it is a traditional app, automation app in the sense                                     |
| 04:16      | that it has triggers and actions like so many of them.                                                 |
| 04:20      | But the thing that makes [[Keyboard Maestro]] so powerful on the Mac                                       |
| 04:24      | is just the sheer number of triggers and actions.                                                      |
| 04:29      | It's crazy how many different ways you can automate your Mac.                                          |
| 04:34      | And I've heard since I released the field                                                              |
| 04:36      | that I've heard from all sorts of people who bought it                                                 |
| 04:38      | or who are the users of it.                                                                            |
| 04:39      | And some of them do real simple things.                                                                |
| 04:42      | And we're going to talk about a couple of those in the show.                                           |
| 04:44      | But some of them really go deep down the stack with the application.                                   |
| 04:48      | And the nice thing is, no matter what you want to do, you can.                                         |
| 04:52      | The problem with [[Keyboard Maestro]], I always felt traditionally was                                     |
| 04:55      | it gives you so many tools that it can kind of be overwhelming.                                        |
| 05:00      | So yeah, it can be.                                                                                    |
| 05:01      | But at the same time, you know, don't let that put you off                                             |
| 05:04      | because we're going to talk you through this in today's episode                                        |
| 05:06      | of a bunch of things that you can do and how this stuff works.                                         |
| 05:09      | And so, of course, with any tool, there's                                                              |
| 05:12      | no need to go all the way into the deep end if you don't want to                                       |
| 05:14      | or don't need to just use what you need.                                                               |
| 05:16      | Exactly.                                                                                               |
| 05:17      | Like the triggers, I mean, you can have a trigger based on a Wi-Fi signal.                             |
| 05:21      | You know, like when you connect your laptop to your home Wi-Fi                                         |
| 05:25      | versus your work Wi-Fi, you can have it loading applications                                           |
| 05:28      | and doing all sorts of things for you.                                                                 |
| 05:30      | But, you know, maybe that's something you don't want to go that deep down the stack yet.               |
| 05:34      | You can also just make it easier to cut and paste.                                                     |
| 05:37      | You know, it depends on how far you want to go.                                                        |
| 05:40      | And in my experiences with most people, especially if you listen to the automators,                    |
| 05:44      | is that maybe you'll go just a little bit down the stack,                                              |
| 05:47      | then suddenly you go a little deeper down the stack.                                                   |
| 05:49      | And then as you get more comfortable that you go deeper before you know it,                            |
| 05:52      | you've got this thing, you know, running your whole system for you.                                    |
| 05:55      | Yeah, definitely.                                                                                      |
| 05:57      | Because there are practically no limits on how crazy you can go with this,                             |
| 06:01      | which is why it is an amazing tool.                                                                    |
| 06:04      | Let's talk a little bit about some of our favourite triggers, you know,                                 |
| 06:09      | and the triggers are the things that start off an animation.                                           |
| 06:14      | What about you, Rose?                                                                                  |
| 06:15      | Well, one of my favourite ones is actually an application.                                              |
| 06:18      | So [[Keyboard Maestro]] has a bunch of ways to automate stuff based on an application.                     |
| 06:23      | So what you can do is when an application activates or when it deactivates                             |
| 06:29      | or when it launches or quits or if it's running or if it's active,                                     |
| 06:34      | you can do a bunch of stuff.                                                                           |
| 06:35      | So for example, you could have every time you activate Tweetbot                                        |
| 06:40      | and that would include launching it,                                                                   |
| 06:43      | then it waits five minutes and that kills Tweetbot.                                                    |
| 06:46      | So at any given time, you can only spend five minutes on Tweetbot.                                     |
| 06:49      | And of course, we are getting, you know,                                                               |
| 06:51      | the screen time controls coming to Mac this year,                                                      |
| 06:55      | which will be excellent when we get them,                                                              |
| 06:57      | but they aren't fine-grained enough so that you can say,                                               |
| 07:00      | I only ever want to be able to spend five minutes on Twitter at a time.                                |
| 07:04      | And so you can use, you know, every time you activate it,                                              |
| 07:08      | kill it five minutes later.                                                                            |
| 07:09      | Yeah, actually, that's one of the ones I shared in the field guide                                     |
| 07:11      | and that's one I use every day.                                                                        |
| 07:14      | And it is nice because you can fall into those social media holes.                                     |
| 07:19      | And I don't have it actually quit the app, it just hides the app.                                      |
| 07:22      | But that's enough for me, you know, so you don't have to do anything drastic.                          |
| 07:25      | But just once it's the frontmost window,                                                               |
| 07:28      | it starts a timer when it gets to a certain amount of time.                                            |
| 07:31      | And because you can automate yourself, you can pick that,                                              |
| 07:33      | whether it's five minutes or two minutes or 15, whatever, you know,                                    |
| 07:37      | it just hides for you.                                                                                 |
| 07:38      | And then that's the kind of like smack in the side of the head to say,                                 |
| 07:41      | oh, wait, dummy, you just spent, you know,                                                             |
| 07:44      | X number of minutes where you weren't moving the needle at all.                                        |
| 07:47      | So get back to work.                                                                                   |
| 07:48      | And yeah, and it's great.                                                                              |
| 07:50      | So that's a that's a great trigger application based triggers.                                         |
| 07:55      | Some of my favourite ones are the USB triggers.                                                         |
| 07:58      | It's got. Oh, yeah, that's a great.                                                                    |
| 07:59      | Yeah, triggers that will happen as soon as you plug something in.                                      |
| 08:03      | So like I've got them for when I plug my scanner in.                                                   |
| 08:06      | But the one I really like is the one when I plug my memory stick in                                    |
| 08:09      | from my from my camera, because I have a Sony camera.                                                  |
| 08:13      | So the sticks all have the name Sony in it.                                                            |
| 08:15      | So whenever detects something that has the word Sony in it,                                            |
| 08:18      | it opens the photos application.                                                                       |
| 08:21      | It also opens the finder for me.                                                                       |
| 08:23      | It does a couple other things.                                                                         |
| 08:25      | So it just creates the environment I need to import and process photos                                 |
| 08:31      | immediately upon me to sticking the Sony stick in the back of my iMac.                                 |
| 08:36      | And it's just I love it when the computer does the tedious work for you.                               |
| 08:40      | And that's what this app is so good with.                                                              |
| 08:42      | Yeah, yeah, it is really good.                                                                         |
| 08:44      | And I have to say the USB device ones as well are really useful for                                    |
| 08:48      | just for example, you might always have like a little docking thing on your                            |
| 08:51      | desk at work and when when you when you plug in your your connector at work,                           |
| 08:56      | then you know, then you know that you're not just at work on works                                     |
| 08:59      | Wi-Fi, but you are at your desk.                                                                       |
| 09:01      | So then you can use that as well as a specific trigger for,                                            |
| 09:04      | hey, I'm at my desk.                                                                                   |
| 09:05      | This this hard drive is connected.                                                                     |
| 09:07      | Let's let's do this, yeah, whatever this is to get you started for your day.                           |
| 09:12      | Another one I really like.                                                                             |
| 09:13      | And if you listen to focused podcasts, you've already heard this one,                                  |
| 09:16      | but I have to share it here as well.                                                                   |
| 09:17      | And it's time based triggers, you know, where you can.                                                 |
| 09:20      | How triggers take off in time.                                                                         |
| 09:22      | But I was there's this thing I do at the end of the day.                                               |
| 09:24      | And I know this isn't automators content, but I feel like if I spend                                   |
| 09:29      | like an hour at the end of the day doing a final review of email                                       |
| 09:32      | and planning the next day, I always have a better day the next day.                                    |
| 09:35      | It's kind of what I call my shutdown.                                                                  |
| 09:37      | And for some reason, my brain just would never make time for it at the end of the day.                 |
| 09:41      | Even though I know I'm going to have a, it helps me, you know what I mean?                             |
| 09:45      | It's like one of those things that's like a super productive productivity tip.                         |
| 09:49      | But for some reason I can't get myself to do it.                                                       |
| 09:51      | So I actually have a time-based trigger at 430 every day where apps start closing                      |
| 09:57      | and I get a big message on the screen telling me it's time to do this thing I need to do.              |
| 10:01      | And as silly as it sounds, that thing really helps me because I, for some reason,                      |
| 10:07      | if I don't have my computer bang me over the top of the head at 430,                                   |
| 10:11      | I just never do this shutdown and it always makes the next day less productive.                        |
| 10:15      | Yes, definitely.                                                                                       |
| 10:16      | And as well as a time-based trigger.                                                                   |
| 10:18      | So the time-based trigger is specifically for at this time on one of these days of the week.           |
| 10:23      | There's also a cron trigger, which some people in the audience may be familiar with.                   |
| 10:27      | Cron is a system where, on the command line, where you can say on this minute of this hour,            |
| 10:35      | of this day, of this month, even of this year, do this,                                                |
| 10:40      | which means that you can have something happen on the first of every month or every Monday             |
| 10:45      | and things like that. And I use that as well, especially when I'm testing things locally               |
| 10:52      | on my machine. Of course, I have cron on my Mac as well, but I like to put it in Keyboard My Stripe    |
| 10:58      | because it's really easy to just pop in and turn off one with a tick mark instead of having            |
| 11:03      | to open the cron file and edit it and comment it out and stuff like that.                              |
| 11:06      | So when I'm testing scripts, I use that one an awful lot.                                              |
| 11:09      | Yeah, there's a whole bunch of cron-based triggers you can use or just time-based triggers,            |
| 11:13      | including the cron jobs. And kind of related, they have system wake and system sleep triggers,         |
| 11:19      | which I think are similar, but they're based on an action, but it kind of, in my head,                 |
| 11:24      | is time-related. So when you boot it up, something happens, or when you put it to sleep,               |
| 11:28      | something happens. But just to give you an idea, this application is so powerful because of that.      |
| 11:34      | You don't just have to have these exotic triggers.                                                     |
| 11:37      | No. So there's also a menu bar application, which I love. I actually trigger, I would say,             |
| 11:44      | most of my Keyboard My Stripe markers from the menu because I have this weird block. I used            |
| 11:49      | to be really good at learning keyboard shortcuts. And then for anything where I get to choose the      |
| 11:53      | keyboard shortcut, I forget it. Oh, really?                                                            |
| 11:55      | Don't ask me why I have this strange block, but most of the time, I'm absolutely going to forget       |
| 11:59      | it. So I love the Keyboard My Stripe menu bar app because I've got my things in there and they         |
| 12:04      | show up and I've got all the groups and everything. So the things only show up if I'm allowed to run   |
| 12:08      | them. And then I can just find that macro I want and click on it and run it.                           |
| 12:12      | One of the things I cover in the Field Guide, but you honestly don't need the Field Guide for this,    |
| 12:16      | is Karabiner Elements. Oh, yeah.                                                                       |
| 12:18      | It's a great little app, and it allows you to customise the cap's lock key. And that used to           |
| 12:24      | be actually kind of difficult. You had to go into the terminal, you had to do a whole bunch of         |
| 12:28      | nonsense to get it to work. Now they've got it dialed in so much that you just install the app         |
| 12:32      | and then you check a box in the app. But so I've got my cap's lock key mapped to, let me see here,     |
| 12:40      | Shift, Command, Option, Control. So it's all four, it's the three bottom buttons plus a Shift key.     |
| 12:46      | And so that just opened up a whole second layer of keyboard shortcuts for me.                          |
| 12:52      | And for this is really useful with Keyboard My Stripe because the more shortcuts you can add,          |
| 12:57      | you know, the easy, the more easy shortcuts you can add the better. So when I just hold                |
| 13:02      | down the cap's lock key, it's no longer acts as a cap's lock. Instead, it affects a basically a        |
| 13:08      | super shortcut. I think [[Brett Terpstra]] would call it the hyper key or something like that. Yes.            |
| 13:13      | Yeah. And so that's great. Plus, when I got this iMac, it came with the extended keyboard.             |
| 13:21      | And I was kind of mixed on it to tell you the truth or else because I've always been the type          |
| 13:24      | that's like, hey, I want my pointing device as close to my hands as possible. And putting that         |
| 13:29      | number pad there means I have to like go over the top of that every time I want to use the track pad.  |
| 13:34      | And, you know, I don't, I don't really use a number pad as a number pad very often, maybe like         |
| 13:40      | once a month. And so in the back of my mind, I thought, well, maybe someday when I'm filling           |
| 13:46      | fat with cash, I'll just buy the Apple wireless keyboard without the number pad on it. But then        |
| 13:54      | as the deeper I get into Keyboard My Stripe, I realise, oh, no, I need that number pad because         |
| 13:58      | that's a whole additional set of shortcut keys for me, basically. Oh, yeah, exactly. So, so now        |
| 14:05      | me and the number pad, we get along just fine. It's not going anywhere. I'm not replacing the          |
| 14:09      | keyboard. We're all happy. Which means you can actually say Keyboard My Stripe has saved you           |
| 14:14      | money. There you go. There you go. So there we go. Yeah. And oh boy, it has saved me some time as      |
| 14:21      | well because there are so many actions in here, actions that will even allow you to automate           |
| 14:26      | things which are not automatable. So shall we dive into some of our favourite actions? Are we ready     |
| 14:31      | for this? Yeah, yeah. What are some of yours? Well, I'm going to go with the one that lets you         |
| 14:36      | automate things that aren't automatable. Click Add Image. This has to be one of my favourite            |
| 14:42      | actions because there are so many things out there which for some reason are just not automatable      |
| 14:47      | at all. And there was this thing I had to set up at work and essentially I had to create the same      |
| 14:52      | thing almost identically 60 times. And there was no way to automate this at all. Trust me,             |
| 14:59      | I looked for quite some time to see if there was anywhere I could automate this. I was willing to      |
| 15:04      | learn any programming language on the planet to do it. But there was no way to do it. But Keyboard     |
| 15:09      | My Stripe has Click Add Image, which meant that despite the fact that this terrible application        |
| 15:14      | was not automatable, Keyboard My Stripe was able to click at the image. So what I did is I used        |
| 15:19      | the spreadsheet to generate all the inputs that I needed. And then I could just copy. And then I       |
| 15:24      | did set a keyboard trigger for this because I figured for the hour that I needed it, I could           |
| 15:29      | remember it. And I'd hit that and it would click at the image, it would click at the bottom and then   |
| 15:34      | it would click at the right things and put all the input in the right places. This application         |
| 15:38      | didn't even allow pasting to Keyboard My Stripe typed it. But that Click Add Image literally           |
| 15:43      | saved my sanity that evening. And I was just sitting there eating popcorn and watching a film.         |
| 15:47      | And I got my work done. Yeah, it's crazy. I mean, so the application looks for the,                    |
| 15:54      | you take a screenshot of a button and the application then scans your whole screen to                  |
| 15:58      | find that button. For instance, if you put something in front of that button, it doesn't work. So like |
| 16:03      | if you put a window in front of it, it can't find it. It's got to be on the screen. Yeah. And then,    |
| 16:08      | but the application will find it and then it doesn't just go to it. It centres the click               |
| 16:13      | on that button. So it actually lands in the right place. It's like dark magic. I don't even understand |
| 16:21      | that this Mac is supposed to, how is this happening, Rose? I don't get it. It is magic. Let's just go  |
| 16:25      | with it's magic and it's seriously awesome magic and leave it at that because I don't want to ruin     |
| 16:29      | any surprises. Yeah. There's a whole bunch of stuff you can do with it. One of these, it's kind        |
| 16:35      | of an exotic weird one. We're going to share some of our favourite Keyboard My Stripe shortcuts or      |
| 16:40      | why I'm confusing a lot of terms here, aren't I? We're going to save some of our Keyboard My Stripe    |
| 16:45      | workflows. I guess we'll call them workflows. Why not? We're going to talk. I think they're called     |
| 16:51      | Macros actually. Officially, I think they're Keyboard My Stripe Macros. We're going to share           |
| 16:54      | some of our favourite Macros later in the show. But one of the ones I really like is kind of an         |
| 16:59      | exotic one as well. It's called the Quick Macro. And so what that does is you can fire it off and      |
| 17:07      | then it starts recording anything you do with your keyboard in your mouse until you stop it.           |
| 17:12      | It's like in the old days in Microsoft Word used to have a similar record macro feature, right?        |
| 17:19      | But it's more powerful Keyboard My Stripe course and you can use it anywhere. But                      |
| 17:23      | so you run this and I often use it for text editing. I had someone send me some text that              |
| 17:28      | needed a heading applied and I had to remove a paragraph after each paragraph. And so I just,          |
| 17:33      | I started it and then I just, using the keyboard, I removed a single space. I added a heading          |
| 17:40      | signal. I went down one paragraph. I had the delete key. And then so that was a little encapsulated    |
| 17:47      | Quick Macro. And then I needed to apply it like 70 times. But because I even put the                   |
| 17:55      | command to drop down a paragraph, I didn't even have to move the cursor.                               |
| 17:58      | No. Yeah. And I was just able to manually trigger that little Quick Macro I'd created                  |
| 18:05      | and watch it happen on the screen. I wasn't able to watch a movie. I probably could have,              |
| 18:09      | if I wanted to, but it was faster for me just to kind of go through manually, press the button.        |
| 18:13      | But rather than press like seven keystrokes, I only had to press one. And it fixed the problem         |
| 18:19      | from very quickly and efficiently. And that's like an example of ways that it shows up for me every    |
| 18:25      | day. Yes. And that is a really good one as well. And yeah, there are some other really good ones       |
| 18:32      | as well. So for example, controlling your browser so you can set like the previous                     |
| 18:39      | front browser tab, for example, or set your front browser URL to be a specific thing,                  |
| 18:44      | which means that, for example, when you're doing maybe a startup macro for your morning,               |
| 18:50      | what you can do is, and one of the things that you can do is you can set the URL of your browser       |
| 18:55      | to be a specific URL. So if there's a website that you like to check in the morning when you're        |
| 18:59      | at work, then you can do that. I was thinking about the one you did, we covered on the show            |
| 19:04      | a long time ago about when you were creating calendar events, and you were having keyboard             |
| 19:10      | menstrual grab fields out of a numbers spreadsheet and assemble that into a Fantastical quick entry.   |
| 19:20      | Yeah. Yeah, exactly. So you can say like, you know, grab, so for my clipboard, go through each         |
| 19:25      | of the lines and paste them into Fantastical and just have it do that for me, which,                   |
| 19:30      | yeah, that's a really useful one as well. And that one's a little bit more complicated,                |
| 19:34      | but the video for that does exist, I believe, so we should make sure we link that in the show notes.   |
| 19:39      | Yeah. I mean, but it goes beyond that, you can control the mouse. I mean, you can literally            |
| 19:44      | move the mouse around the screen and press clicks. Yes. You can, it's got a whole control              |
| 19:50      | iTunes as well. Yeah, don't forget. Yeah, it still exists. At least for one recording.                 |
| 19:57      | Yes. And the good news for the developers of [[Keyboard Maestro]], of course, is that the                  |
| 20:02      | the iTunes scripting library has been imported into both the music and the TV applications.            |
| 20:07      | So depending on how they program this, hopefully they will just be able to migrate                     |
| 20:10      | everything over to music and TV with very little work. I'm hoping for that for them,                   |
| 20:16      | because they put so much work in on everything else. I feel like they deserve a break.                 |
| 20:19      | There's a full suite of windows and interface controls. So you can like move windows, resize           |
| 20:24      | them, do a whole bunch of stuff with the interface. One of the ones, and then there's like the catch   |
| 20:29      | all because at the end of the day, [[Keyboard Maestro]] can also execute a script. So if it                |
| 20:35      | doesn't do what you need it to do, you can create an [[AppleScript]] or a Java script or                  |
| 20:40      | you know, whatever script you need and drop it in there and let it run it as part of your              |
| 20:45      | [[Keyboard Maestro]] script. So suddenly things just just like expand much to even much higher altitudes.  |
| 20:55      | Yes. And it allows you to also take scripting knowledge to say, for example, you know how to           |
| 20:59      | do something with one document in AppleScript, but you have not yet learned how to go through         |
| 21:04      | a series of documents. Well, you can cheat. You can have [[Keyboard Maestro]] go through each of the       |
| 21:09      | documents and run your AppleScript on it, which means that you don't need to modify your script.      |
| 21:14      | It will just do it. It works. And this is a great way, especially if you're learning how to write      |
| 21:19      | AppleScript or you've just learned a little bit of bash. So you want to execute yourself a shell      |
| 21:23      | script or ZSH as it will be from September, then you can do that because it still works.               |
| 21:30      | Well, I'll tell you what I really want to do is hear some of Rose's favourite keyboard                  |
| 21:35      | maestro scripts because we haven't prepped the show to the extent that we've shared these with         |
| 21:41      | each other. I mean, I know the names of them, but I don't know what they are. So I'm very curious      |
| 21:45      | to hear about that. But before we do that, we got to keep the lights on. I want to thank our           |
| 21:49      | sponsor for this week, Creative Next, which is the new podcast for future-proofing creatives.          |
| 21:55      | You know, we talk about automation a lot on this episode. The Creative Next podcast                    |
| 22:00      | just launched its second season and it's focused on future-proofing creatives                          |
| 22:04      | from AI automation. Season two is all about communication, how humans communicate with                 |
| 22:10      | each other and how we communicate with machines and how machines communicate without us.               |
| 22:16      | They're exploring the automation of things like storytelling, smart environments and                   |
| 22:20      | marketing and advertising. It'll explore all those interesting questions you might have wondered       |
| 22:26      | about artificial intelligence, like how far away is AI from writing the next great novel and           |
| 22:32      | what happened when smart homes became smart workplaces. Creative Next is available from                |
| 22:37      | Apple Podcasts, Google Podcasts, Spotify, and wherever else you'd like to listen to your podcasts.     |
| 22:43      | Plus, they also have a comparison article series on Medium that's in partnership with                  |
| 22:49      | Towards Data Science. Plus, they're a member of the Civil Family of Independent Newsrooms.             |
| 22:54      | Check it all out at creativenext.org/automators. Once again, that's creativenext.org             |
| 23:02      |/automators. Our thanks to Creative Next for their support of this show and all of Relay FM.      |
| 23:08      | So, favourite time. Do we want to trade off? I'll go first and then you share one and                   |
| 23:12      | repeat until we run out of podcasts. Yeah, let's do it.                                                |
| 23:15      | All right. So, my first one, it sounds really boring. It's called Paste and Match Style.               |
| 23:21      | Now, you may be thinking, Rose, there's a keyboard shortcut for Paste and Match Style.                 |
| 23:26      | The trick is, I don't want to paste and match style in every application,                              |
| 23:29      | but some applications, I want to paste and match style by default. So, for example, OmniFocus.         |
| 23:34      | My notes in OmniFocus have zero formatting. This could be considered a win or a loss by                |
| 23:40      | some people. Personally, I hate it whenever the font randomly changes in the middle of my note.        |
| 23:44      | Yes, you're doing it right, just so you're clear. Exactly. So, I have a macro group called             |
| 23:52      | Boring Applications. I allegedly called them this. They're not boring applications,                    |
| 23:56      | but the idea is whenever I paste, my command V is automatically replaced with Command Shift Alt V,           |
| 24:02      | which is the keyboard shortcut for pasting and matching the style. And this is really useful           |
| 24:09      | because I don't have to remember to paste and match style. It just happens and it only happens         |
| 24:13      | in these applications. Of course, I can still manually do it in other applications,                    |
| 24:18      | but this gets me where I need to go 98% at the time.                                                   |
| 24:22      | Yeah, it's interesting, because with Keyword Master, you can actually have,                            |
| 24:25      | you can limit the number of applications where the automation runs. So, that gives you the ability     |
| 24:32      | to just have the applications that the Command V behaviour changes in, or Command V. I solve            |
| 24:39      | that problem a little differently. I use the Hyper Key plus V. I've built a super-paced machine        |
| 24:45      | that allows you not only to paste plain text, but also it'll change formatting and do all.             |
| 24:50      | It gives you a whole menu of things you can do with what's on your clipboard.                          |
| 24:54      | And so, if I hit Command V, I get the standard behaviour, but if I hit Caps Lock V, I get the world     |
| 25:01      | opens up to me. So, I solved the problem with Keyword Master just a little differently.                |
| 25:06      | One of my favourite Keyword Master scripts, this is one that I do share in the course,                  |
| 25:12      | is what I call the document machine. I'm a lawyer. I write a lot of documents.                         |
| 25:17      | And a lot of times, I start out with forms. That's just the way the business works.                    |
| 25:22      | And it usually takes a lot of editing afterwards, but it's nice to have it get started for you.        |
| 25:28      | And I've created scripts that work in both pages in Microsoft Word, where it gets you a pretty         |
| 25:34      | screen that collects variables, you type in names and dates and all sorts of data,                     |
| 25:41      | and then it cranks out documents based on that. And because some of the transactions I do are          |
| 25:46      | complex, sometimes it may generate one or it may generate 10 documents. But just getting that initial  |
| 25:52      | kind of document generation done, I have tried it so many different ways, Rose. I've built it,         |
| 25:58      | custom AppleScripts. I've done a lot of things over the years to try and make this document           |
| 26:04      | automation easier. And for me, [[Keyboard Maestro]] is the key. It's just the best way to do it.            |
| 26:09      | And it's very easy. The automation itself isn't that difficult. But once you figure it out,            |
| 26:14      | you just have to go through and generate it. And it's pretty awesome.                                  |
| 26:18      | Yeah. And that's the beauty of this. And I've used it for documents as well. One of the ones           |
| 26:23      | I mentioned I'll show some time ago was actually that I needed to duplicate a document and rename it   |
| 26:29      | into a specific weird format every time for work. And so I do something similar, though I don't        |
| 26:35      | have as many documents to generate as you. If I could generate my code, that would be lovely.          |
| 26:40      | But I'm working on that.                                                                               |
| 26:41      | Isn't the one you shared with us before a file-based trigger where when the file gets                  |
| 26:46      | dropped into a certain folder, then [[Keyboard Maestro]] does all that for you?                             |
| 26:50      | No, it's not actually. I run it manually on a file. And if it's already got the right kind             |
| 26:54      | of naming, then it parses out elements of the name so I can change parts of them.                      |
| 26:59      | And it automatically increments stuff. I'll put a link to that in the show notes.                      |
| 27:04      | So my next one is I stole it from Sean Blanc years ago. Oopsy Focus. So OmniFocus has a global         |
| 27:11      | keyboard shortcut where you can hit it and then you can add a task to your inbox. The problem is       |
| 27:16      | if I've accidentally quit OmniFocus or on purpose quit OmniFocus for some reason, then the keyboard    |
| 27:24      | shortcut does nothing. However, what you can do is you can again have a macro group that says,         |
| 27:30      | hey, if these applications aren't running, then these macros should be working. And so I have          |
| 27:38      | an OmniFocus one. I have a [[Drafts]] one. I have a couple of others for things where I would regularly    |
| 27:43      | use their quick capture. And if they're not running, then this macro will hop in and go,               |
| 27:50      | hold on a moment. She's just tried to start a trigger, adding a new task in OmniFocus,                 |
| 27:55      | but OmniFocus isn't running. What is she doing? I'll start OmniFocus for her and make her life         |
| 27:59      | easier and then trigger that keyboard shortcut again once the application is running.                  |
| 28:02      | Yeah, I like that one because it's a very simple script, but it solves a real problem for people.      |
| 28:09      | Yes. Well, I have had it where I'm sitting there before hitting my command multiple times going,       |
| 28:14      | why isn't this working? This isn't working. It's broken. And I'm in the middle of writing              |
| 28:18      | an email support. When I look at OmniFocus I realise, there's no dot under it in my doc,                  |
| 28:23      | at which point I delete the email that I was about to send to their support humans and                 |
| 28:28      | start OmniFocus and by which time I've forgotten my task. So this solves many problems and also        |
| 28:34      | eliminates email from people who already have enough email to deal with, I'm sure.                     |
| 28:38      | Yeah, another problem I solved with [[Keyboard Maestro]] is just setups. And there's a lot of               |
| 28:44      | applications that let you set up window management and window control. You can also do with Apple      |
| 28:49      | Script, but there's just so much more power with [[Keyboard Maestro]]. Like you can say, I want this        |
| 28:55      | specific application to be on the screen. And as I have added additional screens to my setup,          |
| 29:00      | so I'm more than just the main screen now, it's even more important to me to be able to set            |
| 29:05      | things up properly. And because I have two jobs, some days I'm a lawyer, some days I'm a nerd.         |
| 29:12      | I like the ability to kind of set my workstation up exactly for the job I'm doing.                     |
| 29:19      | I talked about that earlier when I plug in the Sony card. So for all the different things I do,        |
| 29:25      | I have different ideal setups. I mean, if I'm podcasting, it's different than if I'm screen            |
| 29:30      | casting. If I'm writing contracts for clients, it's different than if I'm processing legal email.      |
| 29:37      | So I just one day went through and thought of, okay, when I'm doing this, what's the ideal setup       |
| 29:43      | for processing email? And then I put the mail app in a certain spot and OmniFocus in the calendar      |
| 29:49      | always has to be present. And so I have all these things. And what I do is I hit the hyper key plus    |
| 29:54      | S for setups. And it just gives me a list of all of those setups I've created. And each one has a      |
| 30:01      | corresponding key on the keyboard, like mail would be M. And so I hit command, I'm sorry,              |
| 30:09      | hyper key S and then M. And then it clears out my screen and then opens up everything I want           |
| 30:15      | exactly as I need it for email or exactly as everything I need it for screen casting or                |
| 30:20      | whatever the task of the moment is. And it took me a couple hours to kind of get those done right.     |
| 30:26      | And I've made some tweaks since I first made them. But man, do I love that, you know, that when I      |
| 30:31      | want to switch gears into something, I just press a couple keys and my computer immediately obeys and  |
| 30:37      | sets itself up for me to do that kind of work. I mean, I enjoy this. When I did it at first,           |
| 30:43      | I thought this may just be one of those nerdy diversions that I do occasionally. And but man,          |
| 30:49      | this one paid off for me because I really find it better for my head to kind of get doing the work     |
| 30:55      | when the computer is just suddenly completely set up for the way I need it to be. And I also,          |
| 31:00      | like I close apps that there's, you know, if I really want to work on screen casting, I, you           |
| 31:04      | know, I shut down messaging and stuff because I don't want that stuff interrupting me. So              |
| 31:09      | it also kind of helps with focus. That is a really good one. Yes. My next one is another nice and      |
| 31:15      | simple one where if I type the semicolon followed by the word type, it will type my current clip       |
| 31:22      | board because every software and you'll run into a field on the internet for some reason that they     |
| 31:26      | decided this person is not allowed to paste. We know security better than this person. They are        |
| 31:32      | not allowed to paste their email address that by the way, they've just inserted with TextExpander.    |
| 31:36      | So it doesn't make a difference. Yeah. Exactly. And so I use this and then it backspaces five          |
| 31:44      | characters and it types whatever it is that's on my clipboard, which is a really nice way around       |
| 31:50      | that. Of course, if you're just trying to pay something that would be five characters or less,         |
| 31:54      | then you're probably better off, you know, typing it instead of pasting it with this method,           |
| 32:00      | but it works nicely. Yeah. My bank lets me paste into the first field, but in the confirmation         |
| 32:05      | field, they want a type. And that's the one I always get wrong, right? Because I'm typing it           |
| 32:10      | and it's a very complicated 1Password, password. And so it's so frustrating for me. And when I was  |
| 32:17      | making the field guide course, I finally broke down and did a similar one. I use a keyboard            |
| 32:21      | command instead of the word type as you do. But my trigger is different, but I do the exact same       |
| 32:27      | thing. And it sure is nice having that in your belt. Definitely. Yes. I'll share a simple one          |
| 32:34      | as well. I use Basecamp. And one of the things I do with Basecamp is I like to forward emails to       |
| 32:40      | the secret Basecamp address for each project. So I can kind of track the email on like a project       |
| 32:46      | and keep a record of it. But it's always a pain in the neck to go grab the secret email and create     |
| 32:52      | a new content. And I create a contact entry, you know, so I can just like, if I'm working on a thing   |
| 32:58      | called the Smith case, I can go in the BCC field and just type Smith case. And then it'll put the      |
| 33:03      | Basecamp secret address in there. And but creating that is always a pain in the neck. And CardHop      |
| 33:11      | has this CardHop, which is the same guys that make Fantastic Ale, just like Fantastic Ale has          |
| 33:17      | a quick entry mode, but for contacts. So what I all I do is I copy the secret email from Basecamp.     |
| 33:26      | And then I run a [[Keyboard Maestro]] script that opens CardHop. And then it prompts me for what I         |
| 33:33      | want to call it, you know, that's the part I couldn't automate because everyone's a little             |
| 33:37      | different, but this I'll type in Smith case. And then it'll create a new contact entry and add the     |
| 33:42      | secret email that's in the paste buffer, you know, because one of the things a [[Keyboard Maestro]] can    |
| 33:48      | access is whatever you've got in your buffer. So then it just creates the contact entry and            |
| 33:52      | saves it. So I've taken a somewhat tedious process and turned it down to just Command C to copy it     |
| 33:59      | and then a trigger to trigger the [[Keyboard Maestro]] script and the rest of it's done for me.            |
| 34:03      | That that is a really nice one. It's just like, you know, the thing about [[Keyboard Maestro]], I feel     |
| 34:08      | like the entry point, I mean, you can do the really fancy document machine and things like that.       |
| 34:13      | But it's just like, what are the little friction points you have on your Mac every day, the things     |
| 34:18      | that you do over an organ? Like for me, it was the process of opening contacts. I mean, I met          |
| 34:23      | one of the Apple contacts people at dub dub this year. And I said, man, could you just simplify        |
| 34:28      | and make it easier to use a keyboard to run that up? You know, because it's just like,                 |
| 34:32      | it's such a pain in the neck. There's so many clicks and you got to go to each field. And so           |
| 34:37      | and CardHop solve that to a large extent, but I wanted it even more automated. So when you have         |
| 34:42      | those friction points on your Mac, that's where [[Keyboard Maestro]] can really help you.                  |
| 34:46      | Yes. And speaking of friction points, this one is a little more complicated than the previous          |
| 34:52      | ones that I've shared. It's called cycle mail flags. And I should give full credit where credit        |
| 34:58      | is due. I did not create this. A lovely person in the Keyboard Maestro forums called G click           |
| 35:05      | created this some time ago, and I stole it from them. So I'm sharing it with full credit.              |
| 35:11      | And what it does, it starts by executing some AppleScript to get the flag item of the                 |
| 35:16      | the selected mail. And then I can just hit F12. So for me, that's actually FN plus F12.                |
| 35:24      | And it will cycle the flag. So that means that if it's red, then it will become orange. And if         |
| 35:29      | it's orange, it will go yellow. And if it's yellow, it will go green, green, goes to blue, blue,       |
| 35:33      | goes to purple, then gray, and then zero flag. And now that the iOS and iPadOS 13 betas have           |
| 35:40      | got coloured flags in, I'm finding that I'm using coloured flags more. But I am too lazy to hit menu,    |
| 35:46      | flag, and then set the right colour every time. And so I like to just cycle through and see what        |
| 35:52      | colour takes my fancy. And I feel is appropriate because I'm still defining what the different          |
| 35:56      | colour flags mean right now. I've got all in with coloured flags on the beta. Yeah, because I have,      |
| 36:03      | at the same time, kind of given up on some of the more power mail stuff I do happening on iOS.         |
| 36:11      | Because, you know, like with AppleScript on my Mac, I guess at some point, you know, I should         |
| 36:15      | talk about how we automate email. We haven't done that on the show yet heavily. I don't think so.      |
| 36:18      | But, but I've got some cool stuff I do on the Mac with, with mail. And so, and I'm at the Mac          |
| 36:25      | every day. So there's no point in doing it, or it takes three times as long on iOS. So I just flag     |
| 36:32      | it. And I have like, for me, blue is MacSparky, red is legal, orange is personal. So I've already     |
| 36:38      | got the taxonomy in my head. So it's very easy now just to apply a flag on iOS. And then I archive     |
| 36:44      | the message. And then when I sit at my Mac, I just clear through the flags. And that's been my mail    |
| 36:52      | solution on iOS. It makes sense, though, you know, I mean, it's just, it's just because I use Apple    |
| 37:00      | Mail, there's some features I like in it. And now I just kind of offload a few other things. I guess   |
| 37:06      | something I want to figure out, you have to help me out this, this Rose, I'm sure I could do it,       |
| 37:11      | is maybe I need to designate a flag for forwarding to my, my, my assistant. Although I guess it'd be   |
| 37:19      | just as easy just to forward it to my assistant. But at the same time, if you're on a plane or         |
| 37:24      | something, then you can have, you can have it forwarded. And then you can have actually keyboard       |
| 37:28      | menstrual just go through and select, like once an hour, select all the images in your inbox and       |
| 37:32      | apply the rules. And if there's anything with that colour, then it could just get forwarded to          |
| 37:36      | your assistant. Yeah, but I mean, I'm off the internet so infrequently, honestly, it's,                |
| 37:42      | Fair enough. And the thing I do with that is usually I just forward it anyway. And then once           |
| 37:46      | I land and reconnect, off they go. That's one of the joys I have of when I land an airplane. And I     |
| 37:53      | watch, I feel like I have all these like, I have this Harry Potter image of all these little           |
| 37:59      | owls flying off with my, because like, I'll send 50 messages at once when I land, because              |
| 38:04      | quite often on an airplane, I will just answer a bunch of email that just gets put in the queue        |
| 38:09      | until I reconnect. All right. Very quick sidebar before we get too distracted. Are you playing         |
| 38:13      | the new Harry Potter game for iOS? I am. I am. I'm actually enjoying it. I, you know,                  |
| 38:18      | I like, I like the idea of the Pokemon game, but I never understood Pokemon. I don't know.             |
| 38:24      | It was just wasn't a thing when I was a kid. So I just never got into it. But I read all the Harry     |
| 38:28      | Potter books and I've been having fun and I'm still finding myself playing it every day. And           |
| 38:34      | the nice thing is I'm playing it in a way that it's not like a chore. I'm just kind of having          |
| 38:38      | fun with it when I want. And but I'm making my way through the levels, man. I'm helping the            |
| 38:43      | Ministry of Magic. Yeah. I'm loving it too. It's so much fun. Yeah. Yeah. I still play Pokemon Go      |
| 38:51      | as well, mostly because I have Pokemon Let's Go on my Switch and you can trade Pokemon. Anyway,        |
| 38:56      | sidebar aside, we should get back to automation. Yeah. Well, I mean, I guess the point today is        |
| 39:01      | that there's just so much you can do with this app. If you've got a particular itch                    |
| 39:06      | Tri-[[Keyboard Maestro]], we got a 20% discount. I don't know how long that's going to last. So            |
| 39:10      | you should probably use that soon if you want. If you need help, I've got a field guide and            |
| 39:14      | there's a discount code for that too. But regardless, it's a very powerful tool. It's always coming up |
| 39:21      | on the Automators podcast. And if you want to get serious on automating on your Mac, this is           |
| 39:28      | the one you need, honestly. I mean, as excited as we are about shortcuts and what it's bringing to     |
| 39:33      | iOS, we already have those tools on the Mac and it comes in the form of [[Keyboard Maestro]].              |
| 39:39      | Definitely. And I should also mention the developer [[Keyboard Maestro]] is super responsive               |
| 39:44      | and they have their own forums. So you can go over to the forums and post questions and see            |
| 39:49      | answers. Of course, you're very welcome to post the same questions and not just in our forums as       |
| 39:54      | well. But as [[Keyboard Maestro]] has its own dedicated discourse forum, you're probably going to get      |
| 39:59      | the [[Keyboard Maestro]] style answer that you were looking for right there. Yeah. And there's a lot       |
| 40:03      | of guys and gals in the [[Keyboard Maestro]] forums that are using really high-end scripting. I mean,      |
| 40:10      | they're taking it to bigger and brighter levels. I think some of that stuff can be diverting.          |
| 40:16      | I feel like just using the basic tools in [[Keyboard Maestro]], you can solve a lot of problems. But       |
| 40:22      | if you really want to go deep down, check out some of the scripting stuff they're doing in those       |
| 40:26      | forums as well. Definitely. And also, sit down with [[Keyboard Maestro]], open up a new empty macro        |
| 40:33      | and just sit and scroll through the actions. Of course, you can go through all actions. Personally,    |
| 40:38      | I would recommend going through it by folder. So you're looking at the application control and so      |
| 40:42      | on. Because you'll find that there's a bunch of ideas that you get from just looking at the actions    |
| 40:47      | that you can do. Or you'll have ideas of how things you think things can be done. And if you           |
| 40:52      | can't finish it by yourself, then ask for help in one of the great forums out there, ours, or the      |
| 40:56      | Keyboard Maestro forum. And I'm sure somebody's going to point you in the right direction.             |
| 41:00      | Yeah. I've got a cool set of scripts I've been working on lately that are going to go into the         |
| 41:04      | first update to the field guide about tagging where I automatically... So I've got it figured          |
| 41:10      | out now where I can automatically apply tags. And it can work in conjunction with [[Hazel]] to             |
| 41:16      | do some pretty cool stuff. So there's just like, there's not much you cannot do with this application. |
| 41:22      | It's crazy. All right. Well, we are the automators. You can find us over at relay.fm                   |
| 41:28      |/automators. You can also find our forums at talk.automators.fm. You can find our website         |
| 41:34      | at automators.fm. Rose is found over at rosemary orchard.com and also automation orchard. What's       |
| 41:42      | going on in your world lately, Rose? Any big articles or things going down? We should be aware.        |
| 41:47      | Well, I mean, I did launch nested folders this week as the show goes out. So check out that as         |
| 41:52      | well. Yeah, go download a show, listen to it, see what you think. And I think I guess that's it.       |
| 41:59      | Thank you to our sponsor today. That's our friends over at creativenext. Good luck with that podcast   |
| 42:04      | as well. And we will see you in two weeks.                                                             |
