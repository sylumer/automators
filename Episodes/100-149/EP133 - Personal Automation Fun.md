---
status: "incomplete"
fc-date:
  year: 2023
  month: 07
  day: 28
fc-category: "podcast"
podcast: "Automators"
published: 2023-07-28
duration: 4718
formattedduration: "01:18:38"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/133"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators133.mp3"
episode: 133
title: "133: Personal Automation Fun"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David share a collection of their favourite personal automations ranging from task and project management to home automation.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 133 Discussion](https://talk.automators.fm/t/133-personal-automation-fun/16274)

# Sponsors
- [[Vitally (Sponsor)|Vitally]] - A new era for customer success productivity.
- [[Electric (Sponsor)|Electric]] - Unbury yourself from IT tasks.
- [[HelloFresh (Sponsor)|HelloFresh]] - Use code `automators10` for ten free meals with free shipping.

# Show Notes
- [PushCut | Automatically show your favourite site's recent news on your homescreen](https://www.pushcut.io/)
- [Add Child Tasks To Selected in OmnFocus](https://gist.github.com/RosemaryOrchard/e2c55a816ba209b9ee656f8ad8846b87)
- [Task Management Software Built For Pros - OmniFocus - The Omni Group](https://www.omnigroup.com/omnifocus)
- [Keyboard Maestro 10.2: Work Faster with Macros for macOS](https://www.keyboardmaestro.com/main/)
- [Keyboard Maestro Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/km)
- [Due: The Superfast Reminder App for iPhone & iPad](https://www.dueapp.com/)

# Transcription
  
| Time Index | Transcription                                                                                          |
| :--------- | :----------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, and welcome to Automators, the podcast about grabbing technology and bending it to              |
| 00:07      | your will so that it does all of your work for you.                                                    |
| 00:10      | My name is Rosemary Orchard, and I'm joined, as always, by my fellow David Sparks.                     |
| 00:13      | Hey, David, how are you?                                                                               |
| 00:14      | Great, Rose.                                                                                           |
| 00:15      | I am looking forward to making a show with you, as always.                                             |
| 00:19      | We've got a fun topic today.                                                                           |
| 00:20      | We thought we'd go through and share some just good personal productivity automations.                 |
| 00:24      | Yeah.                                                                                                  |
| 00:25      | It's just one of those things that we kind of had this idea for the show of what we                    |
| 00:31      | kind of wanted to talk about.                                                                          |
| 00:32      | And then we kind of looked at what we were going to talk about and went, hang on a minute.             |
| 00:36      | There's a theme here.                                                                                  |
| 00:37      | We already had one theme, but it turns out there's two themes, so we're getting back                   |
| 00:42      | to personal productivity with our automations.                                                         |
| 00:45      | And yeah, it's going to be fun.                                                                        |
| 00:48      | All right.                                                                                             |
| 00:49      | Before we do, however, Rose, you've got some good news to share with us.                               |
| 00:54      | Yeah, I do.                                                                                            |
| 00:56      | So PushCut for Mac is officially in [[TestFlight]].                                                       |
| 01:00      | So for folks who don't know or don't remember, I'm a part of Snailedit Development Limited,             |
| 01:05      | and we are the people currently looking after maintaining and updating PushCut.                        |
| 01:12      | And so we've been working really hard on a Mac app.                                                    |
| 01:14      | I say we.                                                                                              |
| 01:15      | It's predominantly been David, our developer, and I've just been filing lots of bug reports            |
| 01:19      | because that's how you make it better, do all the weird edge cases.                                    |
| 01:23      | And so yeah, it's officially in [[TestFlight]].                                                           |
| 01:26      | We're kind of doing a slow release at the moment because we don't want to be overwhelmed               |
| 01:29      | with duplicate reports from people.                                                                    |
| 01:33      | But yeah, watch the space.                                                                             |
| 01:35      | There will be more details available soon.                                                             |
| 01:38      | And yeah, it's really good.                                                                            |
| 01:40      | I'm really excited by it, especially because it turns out I use PushCut a lot.                         |
| 01:43      | I was using it a lot before we started developing for it, but I'm using it even more now and           |
| 01:50      | it's been really useful for my personal automations as well, David.                                    |
| 01:54      | Excellent.                                                                                             |
| 01:55      | Excellent.                                                                                             |
| 01:56      | I can't wait to get in on the beta.                                                                    |
| 01:58      | I'm a little sad that I haven't seen it yet, but I guess it's just.                                    |
| 02:01      | Well, that's because there are very few people as we record this episode on it, David.                 |
| 02:05      | I think you're going to be one of the first folks outside of Snailedit who's going to be                |
| 02:10      | on it.                                                                                                 |
| 02:11      | So yeah, it's, yeah, you'll be, you'll be on it and then, yeah, we'll get some other                   |
| 02:15      | folks in as, as time allows and so that we can, you know, get it out as soon as possible.              |
| 02:21      | Before we, let's just talk about it for a minute though, because PushCuts solve some                   |
| 02:26      | unique problems with automation, you know, allowing us to create our own automation server.            |
| 02:31      | And I'm not sure everybody understands what that means.                                                |
| 02:33      | I'd like you to explain that a little bit and in particular why this is a really good                  |
| 02:37      | news on the Mac, especially for those of us that have a Mac running 24 seven.                          |
| 02:41      | Well, PushCut allows you to do a number of things.                                                     |
| 02:45      | So for example, background notifications or background actions.                                        |
| 02:50      | So before shortcuts had automations built in PushCut already had them.                                 |
| 02:55      | And so it can do things like sense and I beacon, which is a specific kind of Bluetooth device          |
| 03:00      | that's basically says, hello, I am very specifically here.                                             |
| 03:03      | So it can do things like sense that or geographic location with time parameters on it and use          |
| 03:08      | that to trigger automations.                                                                           |
| 03:12      | And one of the things that those automations can do is run something on your PushCut automation        |
| 03:16      | server.                                                                                                |
| 03:18      | And a PushCut automation server is or has until very recently for everybody being an iPhone            |
| 03:25      | or an iPad sitting at home, which is running PushCut in the foreground all the time.                   |
| 03:29      | So it's not your daily driver iPhone, it's a spare iPhone, you know, maybe your previous               |
| 03:33      | generation one or something or iPod touches quite popular.                                             |
| 03:37      | There's a large number of folks using those.                                                           |
| 03:40      | And it just runs PushCut all the time.                                                                 |
| 03:43      | And then it waits and you can have scheduled things which run say every 15 minutes or every            |
| 03:48      | day or every two days or every six hours, whatever, running.                                           |
| 03:54      | And you can also have ad hoc automations triggered by something like Zapier or if this than that.      |
| 03:59      | And these automations can ping your iPhone running PushCut and run a shortcut.                         |
| 04:06      | And that shortcut can then do anything a shortcut can do.                                              |
| 04:10      | Maybe when you add in apps like Scriptable and so on, it can get super nerdy and awesome.              |
| 04:15      | So I've had it creating a whole series of [[Drafts]] and OmniFocus projects and folders                    |
| 04:21      | and stuff because this thing popped up in this calendar and bam, a whole bunch of stuff                |
| 04:27      | just happens automatically thanks to shortcuts and I've got projects and OmniFocus and everything      |
| 04:32      | just appearing automatically in the background without me ever having to actually lift finger          |
| 04:38      | because PushCut is sitting there waiting and going, I can run that shortcut.                           |
| 04:41      | And the best thing is, of course, because it's shortcuts.                                              |
| 04:43      | I can edit it on another device and then that just syncs over and ta-da when it runs the               |
| 04:48      | next time.                                                                                             |
| 04:49      | It does that.                                                                                          |
| 04:50      | And the brilliance of it coming to the Mac, which some folks have been asking, surely this             |
| 04:57      | has to be really easy.                                                                                 |
| 04:59      | It's really not, especially PushCut wants to do things properly.                                       |
| 05:03      | There's no dodgy hacking around to get everything working.                                             |
| 05:07      | And the brilliance of it coming to the Mac is, if your Mac is already running 24-7 or                  |
| 05:12      | pretty much running 24-7, for example, to run [[Keyboard Maestro]] Mac cars and deal with                  |
| 05:16      | [[Hazel]] rules and things like that, well, it's already there.                                            |
| 05:20      | It's got shortcuts.                                                                                    |
| 05:21      | The vast majority of apps that have shortcut support on iOS have them on Mac OS now.                   |
| 05:26      | There are naturally some exceptions to that, [[Safari]] and so on.                                         |
| 05:30      | But this means that then your Mac that's always on anyway can also run PushCut.                        |
| 05:34      | And so then Zapier can go, hey, hey, David's Mac, go run this shortcut and bam, it will                |
| 05:40      | run that shortcut.                                                                                     |
| 05:41      | And so instead of having to use an iPhone or an iPad or an iPod Touch, which for some                  |
| 05:47      | people may have involved purchasing an extra device before, which is obviously a pretty                |
| 05:51      | big barrier to entry, now you'll be able to use a Mac that you already have.                           |
| 05:55      | And it turns out there's a lot of people who have a Mac that's either always on or pretty              |
| 06:00      | much always on to run these things.                                                                    |
| 06:04      | And yeah, it's going to be very, very useful, especially when you realise that shortcuts               |
| 06:08      | for Mac has [[AppleScript]] support, [[Keyboard Maestro]] support, all of those things.                       |
| 06:14      | So you can run these things integrated together from just one tiny little command, which if            |
| 06:21      | this and that make or even your own webhooks from, say, [[HomeKit]] can then run automations               |
| 06:27      | on your Mac through shortcuts.                                                                         |
| 06:29      | Yeah, I think taking it to the Mac is going to be really nice.                                         |
| 06:34      | I mean, I think that's going to make a huge difference.                                                |
| 06:37      | Yeah, I think it will as well.                                                                         |
| 06:40      | And a lot of folks are really excited about this.                                                      |
| 06:43      | And yeah, they've got every right to be.                                                               |
| 06:45      | I'm also very excited about this.                                                                      |
| 06:47      | So yeah, we'll just have to see what happens, but fingers crossed, everything will continue            |
| 06:52      | to go smoothly as the beta versus continues and we can get something out for more folks                |
| 06:58      | soon.                                                                                                  |
| 06:59      | Excellent.                                                                                             |
| 07:00      | Well, I can't wait, Rose, to get in on that beta and I can't wait for this to go public.               |
| 07:05      | Any idea you think when it'll be when it'll release?                                                   |
| 07:09      | It's really, really hard to say how long is a piece of string.                                         |
| 07:12      | It really depends.                                                                                     |
| 07:13      | You know, I've I've been doing my best to be the most awkward user, you know, finding                  |
| 07:18      | as many weird edge cases and bugs as I can, but that doesn't mean that I succeeded.                    |
| 07:24      | So it really depends on, you know, how the beta process goes.                                          |
| 07:29      | Obviously we want to get this out sooner rather than later, we'd rather get it out                     |
| 07:32      | to people and then, you know, refine and add more features later instead of getting something          |
| 07:39      | out with the ability to, I don't know, make a coffee without you having to write a shortcut            |
| 07:46      | for it.                                                                                                |
| 07:47      | I'm making things up here because there are a large number of features on Lisp.                        |
| 07:49      | I don't want to give anything away and people immediately go, I need this, I need this, I              |
| 07:53      | need this.                                                                                             |
| 07:54      | So, yeah, yeah, it's not going to, you know, rumble around your house for you.                         |
| 07:58      | Your Mac Studio is not suddenly going to turn into a rumble, but yeah, we can, we can always           |
| 08:02      | add that feature later if we can figure out a way to install wheels over the internet.                 |
| 08:06      | Yeah, well, I think the fans are probably good enough for the section.                                 |
| 08:09      | I think you got that covered already.                                                                  |
| 08:13      | Let's talk about some personal productivity automations, though.                                       |
| 08:17      | We've got several on our list here, so I think why don't we just start sharing a few?                  |
| 08:22      | Yeah, so I've been dealing with quite a few other automations recently, and one of the                 |
| 08:29      | requirements that I've had for a number of these automations is figuring out if I'm at                 |
| 08:33      | home.                                                                                                  |
| 08:34      | Now, at home comes in air quotes because at home does not mean that I'm physically located             |
| 08:39      | at home.                                                                                               |
| 08:40      | It means that I'm kind of in a home status.                                                            |
| 08:42      | So it could be that I'm at my home home, or it could be that I'm a number of other locations           |
| 08:48      | which can be considered at home, and so on.                                                            |
| 08:52      | So I have to figure out what does at home mean and how can I determine if I am at home?                |
| 08:57      | And I've been playing with a number of things and trying to figure it out.                             |
| 09:00      | Some devices have got GPS, some devices don't have GPS.                                                |
| 09:04      | Sometimes GPS works, sometimes GPS doesn't work, and so on and so forth.                               |
| 09:08      | And so I've been working on one singular shortcut that I can use that will help me determine           |
| 09:15      | if I am at home, which I can then run from any other automation, because of course on                  |
| 09:21      | the Mac, even in things like [[Keyboard Maestro]] and so on, I can run a shortcut and it can               |
| 09:25      | return a true or a false, and then I can check that output.                                            |
| 09:30      | And so I've started refining this, and at the moment it starts by getting my Wi-Fi network,            |
| 09:36      | if there is one.                                                                                       |
| 09:37      | And if there is a Wi-Fi network, it'll check it against a list of no networks, and if the              |
| 09:41      | Wi-Fi network is any of those networks, then I'm considered at home.                                   |
| 09:46      | And yeah, and then it just returns true.                                                               |
| 09:49      | If I don't have a Wi-Fi network, it then gets my location.                                             |
| 09:54      | Now, originally in shortcuts, getting your location was slow.                                          |
| 09:59      | And when I say slow, I mean sit and wait for a while.                                                  |
| 10:05      | In iOS 15, this got a lot better.                                                                      |
| 10:10      | A lot of people were still using the workaround of get the current weather forecast, and then          |
| 10:16      | get the location out of that.                                                                          |
| 10:18      | But the good news is nowadays, it's a lot faster.                                                      |
| 10:21      | Now I'm still going with the Wi-Fi network first, just because if I'm on my home Wi-Fi,                |
| 10:25      | or I'm on what the Wi-Fi is considered at home, then I know I'm really at home.                        |
| 10:30      | Yeah, that's immediate, right?                                                                         |
| 10:32      | It's like a one or zero.                                                                               |
| 10:33      | Yeah, exactly.                                                                                         |
| 10:34      | It's immediate.                                                                                        |
| 10:35      | Yeah.                                                                                                  |
| 10:36      | And yeah, but the location is actually still really fast.                                              |
| 10:38      | If I don't have my Wi-Fi on for some reason, for example, I've recently replaced my TV                 |
| 10:43      | unit, which involved taking everything in my network down, and then putting it all back                |
| 10:47      | up again, which meant I had a brief 10-minute period yesterday evening going, oh my God,               |
| 10:52      | why is nothing working?                                                                                |
| 10:53      | Why is nothing working?                                                                                |
| 10:54      | It turned out I flipped a power switch in my office, and therefore the office was not                  |
| 10:57      | responding at the other end, but I was really worried I'd broken a cable under the floor.              |
| 11:00      | But yeah, so if the Wi-Fi is not on, then it falls back to getting my location.                        |
| 11:04      | And it starts by getting my country.                                                                   |
| 11:06      | Okay, because country, at least for me here in the UK, it's a relatively small geographic              |
| 11:12      | region.                                                                                                |
| 11:13      | If you're in the US or Australia or somewhere, maybe not, but it starts by getting my country.         |
| 11:19      | If I'm in the UK, then it will continue.                                                               |
| 11:22      | If I'm not in the UK, it returns a false immediately and just done.                                    |
| 11:25      | And then it gets my postcode.                                                                          |
| 11:28      | So postcode is the UK version of a zip code.                                                           |
| 11:32      | And essentially the way that these codes work is the first one or two letters at the start             |
| 11:39      | of it are going to be a town.                                                                          |
| 11:40      | And that's the town that your post gets sorted in, at least theoretically.                             |
| 11:45      | And then one or two digits after that is going to be a large area within that.                         |
| 11:50      | And then the final three digits are essentially like the street that you live on.                      |
| 11:56      | And so I can start by actually just checking the start of the postcode in most cases and               |
| 12:00      | just sort of fudge it and say, hey, if I am in, say for example, London one, that doesn't              |
| 12:08      | really exist, then return true.                                                                        |
| 12:09      | I'm at home.                                                                                           |
| 12:10      | It's fine.                                                                                             |
| 12:11      | And so I've been just checking the postcode to see if I'm at home.                                     |
| 12:15      | It's because checking GPS coordinates, you can do that.                                                |
| 12:18      | And the way that you can sort of genericise, I'm not sure if that's the right word, GPS                |
| 12:25      | coordinates, is you can take a digit off the end.                                                      |
| 12:26      | So if you get your exact GPS location when you're at home, and then you like knock one                 |
| 12:31      | or two of the decimal points off the end, you're increasing the area quite a bit, the                  |
| 12:38      | more units you knock off.                                                                              |
| 12:40      | But you can get it with that.                                                                          |
| 12:42      | But then you kind of have to say, okay, well, if it starts with this and things like that,             |
| 12:46      | and I was like, you know what, I'll just check the postcode.                                           |
| 12:48      | And if the postcode starts with any of these, then say that I'm at home, call it good enough           |
| 12:54      | and done.                                                                                              |
| 12:55      | Okay.                                                                                                  |
| 12:56      | So let me interrupt there.                                                                             |
| 12:59      | So and this is done in shortcuts.                                                                      |
| 13:01      | So what are the actual actions you're calling to choose between multiple different postcodes?          |
| 13:09      | Well, what I've done is in [[Data Jar]], [[Data Jar]] is my source of data for everything.                       |
| 13:15      | I have a dictionary called add home.                                                                   |
| 13:19      | And then inside of that, I've got Wi-Fi and I've got postcodes.                                        |
| 13:23      | Okay.                                                                                                  |
| 13:24      | And each of those is just text and it's just a multi-line string.                                      |
| 13:28      | Okay.                                                                                                  |
| 13:29      | So I can have like line one inside of Wi-Fi is the promised LAN.                                       |
| 13:33      | Because that's my my my friend network.                                                                |
| 13:36      | And then, you know, and then the next network name is on the next line and so on.                      |
| 13:39      | And so in shortcuts, what I do is I get this variable out of [[Data Jar]].                                  |
| 13:44      | And then I say, if this variable contains Wi-Fi network, so if it contains the Wi-Fi                   |
| 13:49      | network, then it's, you know, then return to it done.                                                  |
| 13:55      | Now with the postcode, I do split the postcode.                                                        |
| 13:58      | So I use a split text section because our postcodes are generally split into two sections.             |
| 14:03      | You know, the first part, which is, you know, the postal town and the large geographic area            |
| 14:08      | and then the street section.                                                                           |
| 14:09      | So I use a split text action on that.                                                                  |
| 14:12      | And then I just say, okay, if this list contains, you know, the split text, then return true           |
| 14:21      | otherwise return false.                                                                                |
| 14:22      | So that's what I'm doing there.                                                                        |
| 14:24      | And that is, you know, a very simple way of doing it, but it's much easier than getting                |
| 14:30      | a list of items and repeating with each and saying, okay, if this one is, you know, if                 |
| 14:36      | this is true, stop and exit and so on.                                                                 |
| 14:39      | So yeah, I just, I just check if the big block contains the little thing that I'm comparing            |
| 14:45      | it with.                                                                                               |
| 14:46      | Is it?                                                                                                 |
| 14:47      | And then are you done at postal codes?                                                                 |
| 14:48      | What if the?                                                                                           |
| 14:49      | Yeah, yeah, I just stop at postal codes to be honest.                                                  |
| 14:52      | You know, if I, if I'm somewhere without a location, you know, if GPS isn't working and                |
| 14:58      | I've got no Wi-Fi, I'm not at home.                                                                    |
| 15:00      | So I'm just going to return false.                                                                     |
| 15:02      | I could, I could get nerdier and figure out, you know, like, okay, so if I'm on a UK mobile            |
| 15:08      | network or something like that, but I decided that that was probably going about three steps           |
| 15:15      | too far.                                                                                               |
| 15:16      | You know, the chances that I will not have GPS or I won't have Wi-Fi and I'll be at home               |
| 15:21      | is pretty low, to be honest.                                                                           |
| 15:24      | And then the chances that I won't have Wi-Fi and for some reason, GPS isn't working to                 |
| 15:28      | get the, get the address with the country and the postcode is very, very, very low.                    |
| 15:34      | And if that's not working, don't consider me at home because I'm going to have bigger                  |
| 15:38      | problems to deal with than that.                                                                       |
| 15:40      | And honestly, the Wi-Fi network check is usually pretty much enough because a lot of the time          |
| 15:46      | I am running this to check, hey, if I should be considered at home, then set this stuff                |
| 15:52      | up like this for work.                                                                                 |
| 15:54      | And if it's not working and if it sort of crashes out at some point, then yeah, I'm                    |
| 15:57      | going to have to fix whatever that problem is before I can start work or before I can,                 |
| 16:02      | you know, turn my home lights on and off or something like that if I would need to.                    |
| 16:06      | So yeah, that's where I stopped for the time being.                                                    |
| 16:09      | Yeah.                                                                                                  |
| 16:10      | And that was my next question.                                                                         |
| 16:11      | It's like, when do you need to know you're at home, what types of automations are getting              |
| 16:14      | triggered?                                                                                             |
| 16:15      | Well, for example, when my work laptop turns on or when I turn my laptop on into a work                |
| 16:21      | mode, keep on my straight trigger as a macro.                                                          |
| 16:25      | And one of the things that it will do is check, hey, am I at home?                                     |
| 16:30      | And if I'm at home, then it'll make sure that the volume is up and so on, so I'll hear notifications   |
| 16:35      | and so on as they come in.                                                                             |
| 16:37      | If I'm in the office, however, then it's going to turn the volume way down so that if I'm              |
| 16:43      | getting, you know, somebody pings, say a general channel that, you know, everybody who's in            |
| 16:48      | the office is also in.                                                                                 |
| 16:50      | I'm not one of the cores of computers making slightly off saying, did it sounds, you know,             |
| 16:55      | my machines can be quieter.                                                                            |
| 16:57      | Or if I'm at home when I get up in the morning, then it's going to, what my phone does is              |
| 17:03      | it'll remind me of the habits that I've got in streaks that are in the morning category.               |
| 17:09      | If I am not at home, then it will skip the morning home tasks in streaks so that I don't               |
| 17:18      | have to worry about, you know, marking those as done.                                                  |
| 17:21      | I'm not going to get prompted for them throughout the day and so on and so forth.                      |
| 17:24      | So there's a number of things that I'm using this for to make sure that I do things or                 |
| 17:28      | don't have to do things and just not having to remember to mute my laptop when I'm in                  |
| 17:32      | situations where my laptop ought to be muted is actually pretty powerful, to be honest.                |
| 17:40      | This episode of Automators is brought to you by Vitally.                                                |
| 17:43      | Customer success teams today are facing a problem.                                                     |
| 17:46      | How do they connect customer data back to their work?                                                  |
| 17:48      | Vitally changes that.                                                                                   |
| 17:49      | It's the new kind of customer success platform and all in one collaborative workspace that             |
| 17:53      | combines your customer data with all the capabilities you expect from today's project management       |
| 17:57      | and work platforms because it's designed for today's customer success team.                            |
| 18:01      | That's why Vitally operates with unparalleled efficiency, improves net revenue retention                |
| 18:07      | and delivers best-in-class customer experiences.                                                       |
| 18:10      | It's the solution to helping your customer success team keep a better pulse on your customers,         |
| 18:14      | which maximises productivity, visibility, and collaboration.                                           |
| 18:18      | You can boost your bottom line by driving more revenue per customer with Vitally.                       |
| 18:22      | And if you take a qualified demo of Vitally, get a free pair of AirPods Pro.                            |
| 18:27      | So if you're a customer success decision maker actively seeking CS solutions, working at               |
| 18:32      | a business-to-business software as a service company with 50 to 1,000 employees, and you're            |
| 18:37      | willing to explore changing customer success platforms if you already have one in place,               |
| 18:41      | schedule your call by visiting vitally.io/automators and get that free pair of                   |
| 18:47      | AirPods Pro.                                                                                           |
| 18:48      | That's vitally.io/automators for a free pair of AirPods Pro when you schedule a qualified        |
| 18:54      | meeting.                                                                                               |
| 18:55      | Now, thanks to Vitally for their support of this show and really AFM.                                   |
| 19:01      | I've got one for you.                                                                                  |
| 19:02      | It's quite simple, but we're going to start simple and get more complex through the show.              |
| 19:07      | But I have recently been doing a lot of testing with [[Apple Reminders\|Apple's Reminders app]].                            |
| 19:11      | We're in beta season, so I always like to try and kick the tires on what Apple's working               |
| 19:15      | on.                                                                                                    |
| 19:16      | And one of the things about it that is more difficult than with OmniFocus is capture,                  |
| 19:23      | the creating a new task isn't as easy as it is with some more powerful task managers.                  |
| 19:29      | And so I went to a trick that I've been using with OmniFocus for a long time where you can             |
| 19:34      | create a shortcut, any task manager supports task creation via shortcut, which is just                 |
| 19:41      | about all the good ones at this point.                                                                 |
| 19:43      | You can create a shortcut, but the trick is not to just have a generic new task shortcut,              |
| 19:50      | whatever your app of choice is, but instead to make the shortcut pre-filled out for the                |
| 19:56      | typical things you're capturing, whether it be work or personal or specific projects.                  |
| 20:00      | In my case, I've got different areas of work.                                                          |
| 20:03      | I've got the labs and I've got the podcasts and all these different things.                            |
| 20:07      | So I have these shortcuts that create new reminders in the right buckets.                              |
| 20:15      | And I've been doing the same thing in OmniFocus, like I said.                                          |
| 20:18      | But I'm really playing a lot lately with what's the most efficient way to do this.                     |
| 20:24      | So the actual act of creating the shortcut is very easy.                                               |
| 20:27      | It's a one action shortcut, open OmniFocus, create a new task in the MacSparky Labs project.          |
| 20:33      | And then all you fill in is what the actual task is.                                                   |
| 20:37      | But what's the easiest way to trigger that when you're on mobile devices?                              |
| 20:41      | So what I do is I've got these shortcuts that reside in my doc.                                        |
| 20:46      | My doc only has shortcut choose from menu launchers in it.                                             |
| 20:51      | And so I've got one button for MacSparky stuff, one for personal stuff, one for miscellaneous         |
| 20:55      | stuff.                                                                                                 |
| 20:56      | And so I used to have just like one or two shortcuts in there, and they specifically                   |
| 21:03      | launched the OmniFocus Capture.                                                                        |
| 21:06      | But with [[Apple Reminders\|Reminders]], I find I need more of them because you really have to do a lot of work             |
| 21:12      | to open the app and add a new reminder.                                                                |
| 21:15      | So what I've done is I've made another submenu in it.                                                  |
| 21:19      | That makes sense.                                                                                      |
| 21:20      | So in the choose from menu list, and the way I've chosen to do this is it's running a                  |
| 21:25      | separate shortcut.                                                                                     |
| 21:26      | So this is hard to explain with audio, but let me just try and step back.                              |
| 21:31      | So when I click a button in my doc, there's a choose from menu that has like 25 items                  |
| 21:36      | on it that are various things in my life that I do that I can launch with one tap.                     |
| 21:42      | One of them says create a new reminder, and in shortcuts, when you do that, it launches                |
| 21:47      | another shortcut.                                                                                      |
| 21:49      | That's another choose from menu.                                                                       |
| 21:51      | And it's got a list of five or six different types of reminders I might want to create,                |
| 21:56      | and they're all prefilled out.                                                                         |
| 21:58      | And then I tap the one I want, and then I tap on the reminder.                                         |
| 22:01      | So it's three taps, the icon, and then the reminder, and then the specific one, which                  |
| 22:07      | sounds like a lot of work, honestly, for an automator to get to the item.                              |
| 22:11      | But just because of the way it's all set up, that's the way I do it.                                   |
| 22:15      | It's been working pretty good for me, but I would like to get it down to two taps.                     |
| 22:18      | So I'm paying attention to the ones I use and don't use, and if they can get small,                    |
| 22:23      | to be a small enough list, I'm going to put them in at that first level.                               |
| 22:28      | How are you paying attention to this?                                                                  |
| 22:30      | Are you just, you know, may he a mental note of these things, or do you have any logging               |
| 22:34      | in there using something like [[Data Jar]] or toolbox pros global variables to note which                  |
| 22:41      | ones you've used?                                                                                      |
| 22:43      | I'm just noting.                                                                                       |
| 22:44      | I mean, I look at it at the end of the week, did I ever push that button this week?                    |
| 22:48      | You know, no, I didn't, you know, kind of thing.                                                       |
| 22:51      | That's a good idea, frankly, to be more focused on it and just really actually count as you            |
| 22:57      | push the button, which I guess, if you did that with [[Data Jar]], I guess you would have                  |
| 23:02      | a variable that you add one to every time you push the button.                                         |
| 23:06      | Yeah.                                                                                                  |
| 23:07      | I mean, there's two options, right?                                                                    |
| 23:08      | Just either just have a number and add one to it every time, or you could just set it                  |
| 23:15      | to the date that you lost ran it.                                                                      |
| 23:16      | Yeah, that would work too.                                                                             |
| 23:19      | Because then you can just look at a list of dates and go, well, these ones are really                  |
| 23:23      | old.                                                                                                   |
| 23:24      | These ones are really new, which means also you never have to like reset all of those                  |
| 23:27      | numbers to anything.                                                                                   |
| 23:28      | Well, I will tell you, the senility has not taken hold yet.                                            |
| 23:33      | And when I open it, I know which ones I've been using.                                                 |
| 23:36      | Yeah.                                                                                                  |
| 23:37      | But there will be other options or other situations where maybe you use something much less frequently |
| 23:43      | with that.                                                                                             |
| 23:44      | That would actually be a really good idea.                                                             |
| 23:47      | But this is a little automation I've been fiddling with.                                               |
| 23:49      | And the challenge I've been struggling with is, do I want to make it like its own tier                 |
| 23:55      | or do I make it at that first level?                                                                   |
| 23:58      | I can tell you with OmniFocus, I got to a point where there was only like three of them.               |
| 24:03      | I didn't take that many slots on my root directory, and I liked the ability to just tap an icon        |
| 24:08      | in the dock and then tap an icon in to have a pre-filled task item.                                    |
| 24:12      | With [[Apple Reminders\|Reminders]], it feels like a lot more.                                                              |
| 24:14      | But honestly, I don't know that I'll be using [[Apple Reminders\|Reminders]] in a few months once Apple ships               |
| 24:18      | all this stuff.                                                                                        |
| 24:19      | So maybe I'll just go with it as it is for now.                                                        |
| 24:22      | But that's a nice way to handle the problem.                                                           |
| 24:26      | And the problem to be solved there, and it could be a calendar app or a task manager                   |
| 24:29      | app or anything where you need to put data in, is a lot of these apps do have the ability              |
| 24:35      | to create a new entry with a lot of the data pre-formatted.                                            |
| 24:40      | And if you're going in the app and every time like filling out the same fields repeatedly,             |
| 24:47      | then you're losing time out.                                                                           |
| 24:49      | Then automation can help you.                                                                          |
| 24:50      | And shortcuts automation, in this case, is incredibly simple.                                          |
| 24:54      | It's a single action.                                                                                  |
| 24:56      | [[Fantastical]] does it, [[Apple Calendar\|Calendar]], does it, [[OmniFocus]], [[Apple Reminders\|Reminders]], [[Things]], all of the heavy             |
| 25:01      | hitters in the productivity space have usually an action that lets you create a new thing              |
| 25:08      | and fill in metadata at the same time.                                                                 |
| 25:10      | And it does, you get the payoff on creating that automation like the second time you run               |
| 25:16      | it.                                                                                                    |
| 25:17      | Yeah.                                                                                                  |
| 25:18      | It's one of those things where it's amazing how just a tiny little bit of planning and                 |
| 25:24      | automation can save you potentially hours of time.                                                     |
| 25:28      | I had one, it's not in the doc because you've only just made me think of it.                           |
| 25:33      | And so I'll get a link so that we can pop it into the show notes.                                      |
| 25:36      | But one of the things that I end up doing in OmniFocus a lot is adding nested tasks.                   |
| 25:43      | So I might have a task, which is, it's not really a task, it's kind of a mini project                  |
| 25:49      | or a collection of tasks that maybe need to be done in a specific order.                               |
| 25:54      | By the way, this thing could be considered done when its children are done.                            |
| 25:59      | And so I'll need to do something, so in OmniFocus, I'll need to add a child task and then edit         |
| 26:05      | the parent task to say, hey, this should be completed when all of its children are completed.          |
| 26:12      | And I realised this was taking me a few taps because either I'd have to add a task and                 |
| 26:15      | then drag and drop it to indented or tap and hold on it, organise, indent.                             |
| 26:21      | You know, there's a number of things, but it wasn't the fastest it could be.                           |
| 26:25      | But edit, select like three or four things that I want to add subtasks to.                             |
| 26:30      | And then in the Omni Automation menu, run a little automation, that doesn't take very                   |
| 26:39      | long at all.                                                                                           |
| 26:41      | And I was able to put together four lines of Omni Automation JavaScript, which add child                |
| 26:46      | tasks to all of the selected tasks, and it makes sure that the parent task is set to                   |
| 26:53      | being completed when all of the child tasks are completed.                                             |
| 26:56      | And honestly, this has saved me quite a bit of typing and dragging and dropping, but it's              |
| 27:03      | also just saved my sanity of, okay, I need to add like subtasks to six things.                         |
| 27:08      | Okay, do this because the child task adds is just, it's not got a title, it's just blank.              |
| 27:13      | And that works exceptionally well for me.                                                              |
| 27:17      | It is fun solving little problems with little automations.                                             |
| 27:20      | And I think we, at some point, we have to come back to talk about Omni Automation.                      |
| 27:25      | It's just so powerful, you know, I mean, it's like the infinite task manager play set, right?          |
| 27:32      | You just make what you need, yeah.                                                                     |
| 27:35      | Or Sal has already made it and you just download it and install it.                                    |
| 27:39      | Yeah, exactly.                                                                                         |
| 27:40      | And it's amazing, you know, how many things do you use that?                                           |
| 27:46      | Or do you already exist when you didn't actually realise that?                                         |
| 27:50      | I mean, I'm trying to use [[Apple Reminders\|Reminders]] more right now because of, I want to talk about                    |
| 27:55      | in the labs and we're in the beta period, you know, so I always do that.                               |
| 27:58      | But I sound like I'm such a shill for OmniFocus, but it's just, it feels so hard not having            |
| 28:06      | that full OmniFocus tool set at my, you know, back in call.                                            |
| 28:11      | Yeah, it is really difficult.                                                                          |
| 28:13      | And yeah, it's just one of those things whenever I try using other things.                             |
| 28:18      | And I do, you know, periodically use other task managers, you know, if I'm doing a crazy               |
| 28:24      | complex project with lots of dependencies, you know, that this thing, when that's done,                |
| 28:28      | that enables all of these things.                                                                      |
| 28:30      | And when those three things over there are done, that enables this thing.                              |
| 28:33      | But when that's one of those things, plus these two other things are done, then that                   |
| 28:37      | enables that thing.                                                                                    |
| 28:38      | Then I'll turn to something like [[Taskheat]] or, you know, sometimes I'll just make a                    |
| 28:43      | quick list in [[Apple Reminders\|Reminders]] or even [[Drafts]] or things.                                                      |
| 28:46      | But you know, if I'm, if I want my big project management, I want OmniFocus.                           |
| 28:52      | And you know, I've recently taken to, I know that fake due dates are not GTD, I'm very                 |
| 29:03      | aware of this, but I have recently taken to, okay, it is today, whatever today is.                     |
| 29:09      | So for example, today is a Monday, it is Monday, today I need to do these things.                      |
| 29:16      | And you know, these things are going to be pretty much like the world may not end if                   |
| 29:20      | I don't run my dishwasher, but I'm going to have, you know, a lack of dishes.                          |
| 29:25      | And you know, a lot of stuff in my kitchen sink if I don't run the dishwasher.                         |
| 29:29      | So you know, I'll have things like running the dishwasher and stuff on there.                          |
| 29:32      | And so I've been, I've worked on a little shortcut recently, which allows me to add                    |
| 29:38      | day projects to OmniFocus.                                                                             |
| 29:41      | And so it'll ask me for the date and time as the starting point.                                       |
| 29:47      | Because the time is very important, because if for example, I have an acrobatics class                 |
| 29:52      | and I have to leave for my acrobatics class by 5.45, then the time for the end of day                  |
| 29:57      | stuff is going to be 5.45.                                                                             |
| 30:00      | Whereas if I don't have, you know, any classes or anything, then it'll be 10pm.                        |
| 30:05      | I've not yet got it reading into my calendar and figuring out, you know, what time is the              |
| 30:09      | end of day, because you know, it's not that difficult for me to figure it out.                         |
| 30:13      | And at some point I can automate that bridge if I choose to do so.                                     |
| 30:17      | But it asks me for the date and time.                                                                  |
| 30:18      | It then formats the date so that it's just, you know, Friday or whatever it is.                        |
| 30:26      | And creates a new project in OmniFocus in a folder called daily projects.                              |
| 30:33      | And it sets that project to be completed when all of its child tasks are completed.                    |
| 30:39      | And it gives it a due date of the date that I've selected and the time.                                |
| 30:43      | So if I put in, for example, Monday 10pm, then it'll be due today at 10pm.                             |
| 30:49      | And then it'll pop up and ask me, hey, you know, are there any things that are kind of                 |
| 30:54      | like standard things that you may need to do?                                                          |
| 30:56      | For example, if I need to do laundry or if I need to, you know, run the dishwasher, things             |
| 31:02      | like that, all of those things, you know, aren't come up as options.                                   |
| 31:07      | And then I can just select them off.                                                                   |
| 31:09      | This is just a dictionary, actually, in shortcuts.                                                     |
| 31:12      | And then that dictionary, the text values of that are just, you know, either the tasks                 |
| 31:18      | in or sort of subgroups of tasks in Taskpaper format.                                                 |
| 31:23      | And it just sticks it all together and adds it to that project in OmniFocus for me.                    |
| 31:27      | And that's it.                                                                                         |
| 31:28      | And it's very handy because then, you know, opens it up in OmniFocus.                                  |
| 31:32      | I can see things, add to things, reorganise things, you know, make certain things sequential.          |
| 31:38      | You know, you can't hang laundry up to dry until you've washed the laundry.                            |
| 31:42      | So, you know, things like that end up in the right order and I can only see things as they             |
| 31:47      | become available to me.                                                                                |
| 31:49      | But it's been helping me get an awful lot done and saving me a lot of time without making              |
| 31:54      | my life overly complicated, you know, and if at the end of the day I've not done things,               |
| 31:59      | I can either just move them into the next day's project or just delete the project because             |
| 32:04      | it was just a get stuff done today thing, which, you know, all of these tasks tend to                  |
| 32:10      | be just sort of household management tasks.                                                            |
| 32:12      | Maybe they should go in a household management project, possibly, but my focus is more getting         |
| 32:20      | the stuff done than being perfect about GTD.                                                           |
| 32:22      | Yeah.                                                                                                  |
| 32:23      | It really is just an impressive app and, you know, it's 15 years old now.                              |
| 32:27      | It's been 15 years since it released it and this is, I think, probably the longest running             |
| 32:33      | app of my life.                                                                                        |
| 32:34      | I keep looking for things.                                                                             |
| 32:36      | This part of me feels like, well, I'm ex-sparky, I should use something different.                     |
| 32:40      | It's been, you know, time for something new and I can never find anything.                             |
| 32:43      | Sometimes I might find something that looks a little prettier, but I never find anything               |
| 32:46      | that works better, you know.                                                                           |
| 32:48      | Yeah.                                                                                                  |
| 32:49      | That is always the thing.                                                                              |
| 32:51      | It just works for me and it's very difficult to replace a system that works, you know,                 |
| 32:56      | one of the biggest automation tips that I can give people is, you know, if things are                  |
| 33:01      | working and they're working well, find another thing to do instead, you know, instead of,              |
| 33:07      | you know, trying to automate something that already works incredibly well, unless you                  |
| 33:12      | have nothing but time on your hands, maybe go look for something else to automate instead.             |
| 33:17      | You know, if you've got plenty of time and you're just doing it for fun, sure, but most                |
| 33:22      | of us have got a little bit of a lack of time at various points that we need to address.               |
| 33:28      | So we're better off spending that time and focus on the other things.                                  |
| 33:34      | I talk on the show quite often about setups.                                                           |
| 33:36      | I think that's something that's a big deal to me and historically I've run them through                |
| 33:42      | [[Keyboard Maestro]], but I've been playing a lot lately with moving those over on my Mac                  |
| 33:47      | to shortcuts and it's been a lot of fun because like there's things that shortcuts can do              |
| 33:54      | now that I never expected it to be able to do, but the idea of a setup is when you're                  |
| 34:00      | going to start doing a specific kind of work, your windows arrange themselves for you and              |
| 34:05      | put yourself, you know, they put themselves in the right order and where they need to                  |
| 34:08      | be.                                                                                                    |
| 34:09      | It's the kind of stuff that, you know, there's multiple tools for this.                                |
| 34:13      | I use [[Keyboard Maestro]], Rosie's Bunch, but I've been slowly like exploring, pushing                    |
| 34:21      | this into shortcuts and generally it works.                                                            |
| 34:26      | There's a couple of tricks I need to rely on in [[Moom]].                                                  |
| 34:29      | Like one of the things you do is you arrange the windows and shortcuts does a lousy job                |
| 34:33      | at that compared to [[Keyboard Maestro]] and [[Moom]] doesn't do that at all, but [[Moom]] uses                    |
| 34:40      | a trick.                                                                                               |
| 34:41      | I think Brett's the first one to turn me on to this where you just run an [[AppleScript]]                 |
| 34:46      | on [[Moom]].                                                                                               |
| 34:47      | So, you set the windows the way you want, you have [[Moom]] run via AppleScripts, you set                 |
| 34:53      | them up for recording the automators and then the windows all arrange themselves for that.             |
| 34:58      | But there's a lot more you can do with shortcuts.                                                      |
| 35:01      | Like at this point, you can clear the screen of windows, you can open up specific apps                 |
| 35:08      | and the stuff that I think shortcuts is really good at this set is like the kind of focus              |
| 35:14      | and time management stuff like if you're using Timery, you can have it run a script to start           |
| 35:22      | your timer.                                                                                            |
| 35:23      | If you're using timing, you can have it run an AppleScript to start your timer.                       |
| 35:27      | If you're into focus modes, you can have it trigger whatever focus mode it is you need                 |
| 35:32      | when you're doing that setup.                                                                          |
| 35:34      | And like all of that like system level stuff I find is actually easier in shortcuts than               |
| 35:39      | it is in [[Keyboard Maestro]].                                                                             |
| 35:41      | That's not something that I expected to happen.                                                        |
| 35:44      | And I like to be able to just kind of choose from the menu and set the actions up like                 |
| 35:49      | I want to open up OmniFocus to a specific perspective.                                                 |
| 35:52      | I can do that now easy enough in shortcuts with thanks to the ability to better touch                  |
| 35:59      | tool shortcuts where you can trigger a keyboard shortcut when you open it.                             |
| 36:03      | But I have found that it works much better than I expected.                                            |
| 36:09      | Some of the things that are better than [[Keyboard Maestro]] is I don't have to deal with the              |
| 36:12      | pause command anymore.                                                                                 |
| 36:13      | In [[Keyboard Maestro]], I'd always have to put a bunch of pauses in there so everything                   |
| 36:16      | could catch up for some reason shortcuts is able to just do this stuff in order.                       |
| 36:20      | Maybe that's kind of because it's part of the operating system.                                        |
| 36:26      | But I think it's fun and it's always interesting taking existing automation and switching it           |
| 36:32      | to a different platform, the automation platform just to see if you've got the muscles for             |
| 36:37      | it and what's better and what's worse.                                                                 |
| 36:40      | One of the challenges I'm facing with this Rose is the idea of spaces.                                 |
| 36:45      | Do I keep separate spaces for different contexts?                                                      |
| 36:50      | In the past, I've done things like have a space that has all my communications apps                    |
| 36:54      | in it and then I've had a space where I do work and a space where I do utility work and                |
| 36:58      | things like that.                                                                                      |
| 37:01      | And another thing I've tested is [[Stage Manager]] because I'm really into contextual computing            |
| 37:06      | and focused work, I would really like to be able to teach it with the basic tools without              |
| 37:11      | automation and I've been struggling to find kind of a formula for that that normal people              |
| 37:17      | can use in [[Stage Manager]].                                                                              |
| 37:19      | I think it would have to be on one space and [[Stage Manager]], I just don't think is up to                |
| 37:23      | it.                                                                                                    |
| 37:24      | I just gave up on, you know.                                                                           |
| 37:26      | Yeah.                                                                                                  |
| 37:27      | Yeah.                                                                                                  |
| 37:28      | I kind of have just given up on automating [[Stage Manager]] and I just open Windows and                   |
| 37:35      | have moved them around, I don't do anything else.                                                      |
| 37:38      | Yeah.                                                                                                  |
| 37:39      | So the last week, what I've been doing is I've killed all my spaces, I've set up now                   |
| 37:45      | separate shortcuts for pretty much every context I work in and I just reset the screen for             |
| 37:53      | every bit of work I do, you know, and I'm calling them via [[Alfred]], you know, just [[Alfred]]               |
| 38:01      | with the plugin until you type SC and then the name of the setup and it arranges itself.               |
| 38:07      | But it's been pretty stable running out of shortcuts, which kind of surprises me.                      |
| 38:12      | Once in a while, a moon misses, like it doesn't get the Windows arranged right.                        |
| 38:17      | And the other problem is because I do a lot of recording, I change the screen resolution               |
| 38:21      | frequently, you know, for recording, I make it a little more text, the text a little bigger.           |
| 38:27      | But I have to make sure I've got it in the right display mode before I start running                   |
| 38:31      | off because window management gets confused when you open it in a different display than               |
| 38:35      | you saved it.                                                                                          |
| 38:36      | But you know, this has been a fun automation to work on and I'm not sure where I'm going               |
| 38:42      | to land with this at the end of the day.                                                               |
| 38:44      | Maybe I'll go back to using more spaces, but I like to just try experiments on this stuff              |
| 38:48      | and if you have some basic automation skills with shortcuts, even if you don't own keyboard            |
| 38:53      | in my show, this is now on deck for you, this is something you could absolutely do.                    |
| 38:57      | Yeah, yeah.                                                                                            |
| 38:59      | And I think it's one of those things where it's always good to, you know, try this with                |
| 39:06      | new things because you may discover new and better ways of doing things than compared                  |
| 39:12      | to what you were doing before because, you know, there's two arguments, right?                         |
| 39:16      | Never change a running system.                                                                         |
| 39:17      | If it works, leave it alone, don't touch it.                                                           |
| 39:19      | But also look out for improvements that you can make because a number of times that you                |
| 39:23      | kind of get, you know, not stuck in a rut, you're not even aware that you're in a rut,                 |
| 39:28      | you just kind of end up just following along doing what you've always been doing because,              |
| 39:32      | well, I can't do that, so I'm not going to try and do that, I'll do it this way instead.               |
| 39:37      | And you're missing out on better opportunities and ways of doing things or things that you             |
| 39:42      | didn't realise that you could automate before that actually you can, you know, like instead            |
| 39:46      | of just opening [[Audio Hijack]] when I start a podcast recording, it opens the right [[Audio Hijack]]                |
| 39:51      | session for me when I start recording, you know, instead of just sending me a notification      |
| 39:57      | to change my sound inputs, I actually have [[SoundSource]] switch them using shortcuts,                   |
| 40:03      | which previously I was doing with switch OSX, which was a command line utility, you know,              |
| 40:12      | and all of these things end up being improvements that, you know, I might not have found if            |
| 40:16      | I hadn't been open to the idea of changing to new applications.                                        |
| 40:20      | This episode of Automators is brought to you by Electric, turning a small business into                |
| 40:27      | an empire takes work, and you have to keep your ear to the ground for things that will                 |
| 40:30      | help you take it to the next level, but this can be hard when your attention is pulled                 |
| 40:33      | in different directions, because that's the reality of being a boss, the team over Electric            |
| 40:38      | knows small businesses, maybe like yours face these challenges. That's why they're on                  |
| 40:42      | hand to help with time consuming parts of your business, like standardised device security             |
| 40:46      | with best in class device management software, so you can implement best practices across              |
| 40:50      | the board and be ready to scale. An employee onboarding and offboarding done for you, saving           |
| 40:55      | you an average of eight hours per request. Plus, Electric will help you keep a single                  |
| 40:59      | point of visibility into your IT environment to control devices, networks, and applications.           |
| 41:05      | While Simplify Reporting allows you to achieve and maintain compliance, and proactive IT               |
| 41:09      | recommendations and automated workflows make IT even see to manage even for non-technical              |
| 41:14      | users. And look, if you're hearing this and you think your company could use some of these             |
| 41:19      | services, but you're not sure where to start, Electric Expert will guide you through the               |
| 41:23      | process of establishing standardised IT processes for your organisation. You have to delegate          |
| 41:29      | in order to focus on what you're good at. Just because you can do things like manage                   |
| 41:33      | all the devices and set up things like device management and compliance doesn't mean that              |
| 41:38      | you should. You should be focusing on the things that only you can do. And there's plenty              |
| 41:43      | of times where I would have lost something like Electric, and quite frankly, there's                   |
| 41:46      | times where I still want it, even if it's just my family, though don't tell them. So                   |
| 41:50      | you should go and check out Electric if you're kind of trying to run a business but spending           |
| 41:54      | more time managing IT than actually doing the thing that you should be doing. And that's               |
| 42:00      | probably quite a few of you. For automated listeners, Electric is offering a free pair                 |
| 42:04      | of Beats Solo 3 headphones for taking a qualified meeting. Just go to electric.ai.automators.          |
| 42:10      | That's electric.ai.automators. Go there now to get your free pair of Beats Solo 3 headphones           |
| 42:15      | today for scheduling a meeting. Our thanks to Electric for their support of this show.                 |
| 42:21      | All right, Rose, give us another personal productivity automation.                                     |
| 42:28      | Well, I've been dealing with [[Apple Reminders\|Reminders]]. So unlike you, David, I haven't switched [[Apple Reminders\|Reminders]]             |
| 42:34      | to try it out. I mean, I did give it a solo try for a couple of days. And then I decided               |
| 42:40      | that I had too much going on in my life at the moment to actually consider really switching            |
| 42:45      | productivity systems because that's always an endeavor. And so instead, I decided that                 |
| 42:53      | I was just going to keep playing with [[Apple Reminders\|Reminders]] because it's really easy to say, hey, Apple            |
| 42:58      | lady, add this thing to blah, blah list or remind me to bunk. And so I've mentioned                    |
| 43:05      | this before, you know, I have reminders, you know, when I get out of the car, when I get               |
| 43:09      | home and things like that. So anything that I add to [[Apple Reminders\|Reminders]], my default list in [[Apple Reminders\|Reminders]]           |
| 43:15      | is called automated processing because believe it or not, this list gets automatically processed.      |
| 43:20      | It's crazy naming, but I went for the simple but obvious approach. I also have a shopping              |
| 43:26      | list. I have a grocery list because every so often I forget what I've called my lists.                 |
| 43:32      | And then I've got location as a list. And then I've got to you as a list. And to you                   |
| 43:42      | is to space DUE. And this, believe it or not, goes into you. And location is for things                |
| 43:49      | that have got locations on. Now, when I'm adding things via Siri, I very rarely will                   |
| 43:55      | specify a list unless it's specifically, you know, shopping or grocery list. And those                 |
| 44:00      | will get processed. So I have push cut running all the time. And it runs a couple of little            |
| 44:09      | shortcuts, which process my reminders. And it processes my reminders usually about every               |
| 44:15      | 30 minutes. Because it's, you know, I'll go through a phase of adding a whole bunch of                 |
| 44:19      | stuff into, you know, reminders, you know, for like, you know, 20 minutes or something                 |
| 44:25      | while I'm cooking, I'll add a bunch of things. And then, you know, and then that's it, I               |
| 44:30      | won't add stuff for a little while. So I figured about every 30 minutes is good. And so what           |
| 44:37      | it does is it goes through and it looks in automated processing to start with. And if                  |
| 44:41      | it looks for anything with a location attached to it, and anything with a location attached            |
| 44:47      | to it, it just moves this into the location list. Very, very simple. And so if it's in                 |
| 44:53      | the location list, that's it, it gets ignored from then on. And then it goes back and it               |
| 44:57      | looks at the whole automated processing list, it looks for anything with a time. Okay, so              |
| 45:01      | anything that had a time and a location has already been moved into the location list.                 |
| 45:06      | Anything with a time attached to it, after that goes into due. So, or it goes into to                  |
| 45:12      | due specifically, to due because this way, all of the things can just get sloped into                  |
| 45:17      | due at the same time because due watches that list. And then everything else in automated              |
| 45:23      | processing gets dumped into my OmniFocus inbox. Very, very simple. But anything on my shopping         |
| 45:29      | list or my grocery list gets a little extra processing. Now, I should know actually in                 |
| 45:35      | both automated processing and this, I have a tendency to say, Hey, Apple lady, blah,                   |
| 45:42      | blah, blah. And then every so often Apple lady will get, you know, a little bit confused.              |
| 45:47      | And so I'll be like, cancel, no, Hey, Apple lady cancel. And somehow cancel gets added                 |
| 45:54      | to my list, whatever list it was that I was adding something to. And now sometimes I do                |
| 45:59      | need to cancel things. And that may be something that I say, Hey, Apple lady remind me to,             |
| 46:04      | I don't know, cancel the automated reminder from the management company about the gardening.           |
| 46:11      | I don't know, they don't actually send me a reminder. It'd be very nice if they did.                   |
| 46:15      | But yeah, the, you know, if I, if I want to add something with the word cancel in, then                |
| 46:21      | this won't trigger. But if anything is just called cancel, if the title of the reminder is               |
| 46:26      | cancel, it just gets deleted from my, from my own reminders, and then it disappears entirely.          |
| 46:31      | Because that it's not going to be helpful to me. But then the shopping list and the                    |
| 46:39      | grocery list, they both go through a specific separate shortcut, which is run as part of               |
| 46:45      | the process reminders one. And what happens to these is they get added to my grocery shopping          |
| 46:52      | list in, in OmniFocus. So this is a project. And they get tagged. Now, depending on the                |
| 47:00      | item, they may get tagged with specific things. Because what happens is there are some things          |
| 47:07      | that Siri might miss here. Part baked rolls, for example, so you can buy rolls from the                |
| 47:13      | supermarket, they are partially baked, and then you put them in the oven and you finish                |
| 47:16      | baking them. Very simple. Every so often, Siri adds park baked rolls, like dog park or,                |
| 47:23      | you know, kiddie play park park. And this is greatly appreciated. I'm very entertaining.               |
| 47:30      | But it can be slightly confusing, especially if I ever hand this off to another person,                |
| 47:34      | they have to decipher what Siri thought I meant. So I have a number of common mishear,                 |
| 47:40      | commonly misheard things, which Siri will, or shortcuts rather, will process on my behalf              |
| 47:45      | and correct Siri's mishearings for things like that. And some of these are also where                  |
| 47:52      | I call out, hey, if this thing is this, then chuck it in here with these particular tags.              |
| 48:01      | So, you know, for example, part baked rolls will usually come from, you know, any supermarket.         |
| 48:08      | But if weed killer is on my list, then it's not going to go onto the general supermarket               |
| 48:13      | list. It goes onto, you know, the hardware store list. So I can pick that up in the right              |
| 48:16      | place. And so generally, things get added into my supermarket shopping list. And then                  |
| 48:23      | it gets tagged with supermarket, or it may get tagged with a specific tag for, you know,               |
| 48:29      | a specific supermarket that that tends to be rarer. That's for things that I've, you                   |
| 48:32      | know, shared directly into my inbox. And then OmniFocus is running a separate script to                |
| 48:38      | automatically tidy up a number of items in my inbox where, you know, I've added stuff                  |
| 48:42      | from particular stores and, oh, it contains this URL. So do that on it, which is what                  |
| 48:48      | happens right at the end. But this means that, you know, all of these things can get tidied            |
| 48:52      | up really, really nicely and really quickly. And PushCut server is just sitting there now              |
| 48:58      | on my Mac, running every 30 minutes and tidying this up. However, there is a slight problem            |
| 49:03      | with this because, you know, what always happens when I'm driving to the grocery store? Yeah,          |
| 49:08      | I think of things that I need to buy. Oh yeah, I need to do this. I need to buy that. You              |
| 49:12      | know, I need to buy some more juice or something like that. And so I can say, hey, Apple lady,         |
| 49:17      | add this to my, you know, grocery list or shopping list. And that's great. But unless                  |
| 49:25      | I take a very long detour, I am not going to be driving for over half an hour. And so                  |
| 49:30      | the chances of PushCut picking this up are pretty low. But you may remember, David, right              |
| 49:36      | at the top of the show, I mentioned PushCut has the ability to do background triggers                  |
| 49:40      | on things. So when you get to a particular location, well, when I get to any of the grocery            |
| 49:47      | stores and I've set a bunch of them up as location triggers, it runs my process shopping               |
| 49:54      | list specifically shortcut, which is one of the reasons why I've got these split up into               |
| 49:58      | separate shortcuts. So I can have like general like process reminders, which will include              |
| 50:02      | processing the grocery list and the shopping list. But the, you know, process, the shopping            |
| 50:12      | list will just go through those two. And this way it just does that. So when I get to this             |
| 50:16      | location, it will run that shortcut for me on my automation servers. So my phone's not                 |
| 50:21      | locked up or being used or anything. Because what happens is as well as that, I also have              |
| 50:27      | that location, send me an OmniFocus notification. Well, it's not sending me an OmniFocus notification. |
| 50:32      | It sends me a PushCut notification. When I tap it, it runs a [[URL Schemes\|URL scheme]] and it opens                   |
| 50:37      | OmniFocus to not just any list, it opens a perspective specific to the store that I'm                  |
| 50:44      | at. So because sometimes there are some things that you can only buy in certain stores, you            |
| 50:48      | know, little or Aldi have, you know, offers that run sort of they start on Thursdays and               |
| 50:54      | Sundays and they're available for a few days and things like that. So any of those things              |
| 50:58      | that I've added to the list will be in those specific lists. So it'll open a perspective               |
| 51:02      | that finds me all the things that for any supermarket and all the things that for that                 |
| 51:06      | supermarket. And it will show me that in OmniFocus when I tap on the notification that I got           |
| 51:11      | because I got to the store. And this has been really, really useful for making sure that               |
| 51:17      | I don't forget things and so on and so forth. So yeah, my grocery list got nerdy, very, very           |
| 51:23      | nerdy, but it's working for me. Yeah. I mean, you went all the way in. Yeah. Yeah. I really            |
| 51:31      | feel like the, you know, the idea of grocery list is a great source of automation exploration,         |
| 51:38      | right? You know, because I think it's something we all need to do. It's something we'd all             |
| 51:43      | like to see be more effective. And the Apple has actually made progress on that in the                 |
| 51:47      | latest betas. They, if you make a list called grocery list or you designated list as your              |
| 51:52      | grocery list in your [[Apple Reminders\|Reminders]] app, it sorts them into the various aisles that they need               |
| 51:58      | to be in, you know, and I should have clarified earlier. Even when I'm not testing [[Apple Reminders\|Reminders]],          |
| 52:03      | I'm using it for shared lists. Daisy and I have like various stores and things. And I                  |
| 52:09      | really like the idea of talking to [[Apple Reminders\|Reminders]] through Siri voice and admin reminders.                |
| 52:16      | I think that's the one kind of killer feature that [[Apple Reminders\|Reminders]] has. But like you, I have it              |
| 52:21      | saved to a box that OmniFocus sweeps through, you know, and just collects it for me. And                |
| 52:27      | then I deal with it from there. Unless it is something going to the grocery list where                 |
| 52:32      | I save it directly via voice automation. What were the, what are the tricky parts with your            |
| 52:38      | automation? Where does it break? Or does it break? Well, I mean, I've been working on                  |
| 52:43      | it and we're finding it for a while. I did have it originally, like when I disconnected                |
| 52:47      | from CarPlay, running the automation to, you know, do the sweep and tidy things up and                 |
| 52:54      | so on. But I found that when I disconnect from CarPlay is a bad idea because disconnecting             |
| 53:02      | from CarPlay, that is the point where your phone is doing weird things with Wi-Fi and                  |
| 53:07      | so on. And then I go into a building made predominantly of metal, which funnily enough                 |
| 53:12      | does not have great cell signal. So yeah, that didn't work. So I switched away from                    |
| 53:18      | using a shortcut automation to try and trigger stuff and just went, hey, push cut has location         |
| 53:23      | triggers and it can just run this in the background. Let's give that a try. And that's been working    |
| 53:28      | brilliantly. So yeah, I think the biggest problem is actually trying to remember, what                 |
| 53:34      | is it that I actually meant when Siri wrote this down? So I've actually started adding                 |
| 53:42      | a tag to everything that comes in from [[Apple Reminders\|Reminders]] that is just a little Siri tag. And it's got          |
| 53:48      | like the Greek eye emoji on it, which works wonders for just grabbing my attention. If                 |
| 53:57      | I'm looking at something going, what is this? Then I can just kind of go, okay, well, this             |
| 54:02      | was added by Siri. So it may, sorry, it's the Nazar Amulet. That's the emoji that I'm                  |
| 54:09      | using. But yeah, it works wonders for, okay, if I can't figure out what this means, it                 |
| 54:15      | doesn't immediately obviously translate to something that I'm expecting or the word                    |
| 54:19      | chocolate, then I'm just going to go with, I'll leave it there for now. And if anything,               |
| 54:27      | specifically, in the grocery list in OmniFocus is there for over two weeks, and it was added           |
| 54:34      | by Siri, or it's got the Siri tag on it, and it's incomplete after two weeks, I have an                |
| 54:39      | automation go in and delete it for me. Because if I can't figure it out within two weeks,              |
| 54:45      | and it was added by a Siri, then yeah, most of these things tend to get out of within                  |
| 54:50      | a few days of, you know, or like the day before I go shopping or something. So yeah.                   |
| 54:57      | I think you're really smart to like consolidate all your tasks related stuff into one app.             |
| 55:03      | And I feel like over time, I have drifted away from that in a lot of ways. Like OmniFocus              |
| 55:08      | remains my main task manager, but like I said, groceries are my own reminders. We do a lot             |
| 55:13      | of project management in the labs and the MacSparky stuff I do with the people that                   |
| 55:18      | work with me. We use Kraft, you know, and because it's very collaborative, it's, you                   |
| 55:24      | know, it's not as powerful as [[Obsidian]], but it for collaboration, we can at mention each               |
| 55:30      | other and we get notifications and it's a native app and does all the cool stuff that                  |
| 55:33      | you need for collaboration. But I have, I realised at one point that it felt silly working             |
| 55:39      | on the project page in Kraft and then having a link back to an OmniFocus task list. So                 |
| 55:47      | like I just started generating the project related task list right on the project page                 |
| 55:52      | and it has not caused, you know, cats to live with dogs and the universe to implode. It                |
| 55:58      | just, it's, it's fine for that. But I also am aware of the fact that I'm skating out                   |
| 56:04      | on thin ice as I diversify my tasks into different places. You know what I mean?                       |
| 56:10      | Yeah. Yeah. No, it is one of the reasons why I have everything consolidated pretty much                |
| 56:15      | into one place is because this way I don't have to think about it. You know, if, if there              |
| 56:21      | is a task to be done, I'm going to see it because it goes into the application. And                    |
| 56:27      | this means, you know, I'm looking at something, you know, on a website and it's like, oh,              |
| 56:31      | right, I should pick this up when I go to XYZ store. Well, I just share it to OmniFocus                |
| 56:36      | and, you know, I have, I've, I've mentioned this one on the show before. I've got a process            |
| 56:42      | inbox tasks OmniFocus. It's an Omni automation. It's an OmniFocus script. And it goes through          |
| 56:48      | and it looks at tasks in my inbox and it basically uses the URL. If there is a URL in the notes        |
| 56:54      | of that, and it can match that up with a store, it will do so. And not only will it do so,             |
| 57:02      | it will, you know, then like at the tag at the, at the project, and then done. And this                |
| 57:09      | is something else that gets done, you know, with my process reminders, because sometimes               |
| 57:14      | reminders end up, well, things end up in [[Apple Reminders\|Reminders]] and then they, they get migrated over to OmniFocus  |
| 57:19      | and then OmniFocus can just go, ta-da, done. For me, the, the, the biggest problem with                |
| 57:26      | splitting up my tasks is kind of the same problem that I have with at the moment. I have two           |
| 57:32      | different work accounts with, which are both got calendars on and some of them have got,               |
| 57:38      | you know, some of them are fine in that they, they like, I, I, some things I get invited               |
| 57:45      | on both accounts, some things I only get invited on one account and that account doesn't always        |
| 57:48      | refresh an update. And it's like, okay, so what do I need to do? And, and so on and so                 |
| 57:55      | forth. And just trying to like, you know, know that I need to be in this place at this                 |
| 58:00      | time or I have a meeting at this time and things like that. If, if it, if it's not in                  |
| 58:04      | one place, I'm not going to find it. And if my tasks are split up across three or four                 |
| 58:08      | different places, I am going to miss some of them, probably something critical like                    |
| 58:14      | renewing a prescription or getting my car tax paid or something like that. Don't worry,                |
| 58:19      | Fox, I've got all of those done. But yeah, it's just one of those things where for me,                 |
| 58:27      | splitting stuff up ends up with things not getting done at some point and it may take                  |
| 58:32      | a while, but things will fall through the cracks pretty quickly.                                       |
| 58:35      | Well, I'm definitely paying attention. And if it starts to become an issue, I can change               |
| 58:40      | it back, you know, but yeah, it's nice when you've got a team where they, so they can                  |
| 58:44      | see what you've completed and not as well. So yeah, yeah, well, that's the thing. If                   |
| 58:49      | you're working collaboratively, having other people able to see what you've done is, is                |
| 58:54      | very important. So yeah, it's one of those things where there is no perfect system to                  |
| 59:00      | do this. So you just kind of have to go with it. But yeah, we'll as always see what happens            |
| 59:05      | with these things. So yeah.                                                                            |
| 59:11      | This episode of The Automators is brought to you by HelloFresh. Go to hellofresh.com/            |
| 59:17      | Automators 50 and get 50% off with the code Automators50. I actually like to cook. I love              |
| 59:23      | to have a good meal ready for my wife when she comes home. I think it's fun. But you                   |
| 59:28      | know what I hate? I hate getting the menus, going to the grocery store and dealing with                |
| 59:32      | all of that. With HelloFresh, you get farm fresh, pre-portioned ingredients and seasonal               |
| 59:37      | recipes delivered right to your doorstep. So you can skip the trip to the grocery store                |
| 59:41      | and count on HelloFresh to make home cooking easy, fun and affordable. That's why it's                 |
| 59:47      | America's number one meal kit. Another problem with me going to the grocery store is I always          |
| 59:51      | buy too much of something and not enough of the other. HelloFresh sends you pre-portioned              |
| 59:56      | ingredients to help cut down on food waste while step-by-step instructions make cooking                |
| 01:00:00   | a breeze, not a chore. Did you know HelloFresh offers more than just delicious dinners? It's           |
| 01:00:06   | now easier than ever to skip that extra grocery store run by adding snacks, sides and more             |
| 01:00:11   | to your weekly order. Simply shop HelloFresh Market and take your pick from a curated selection        |
| 01:00:16   | of over 100 items. So when you need dinner fast, don't call for delivery. Think HelloFresh.            |
| 01:00:22   | Their fast and fresh recipes are ready in just 15 minutes or less. Plus HelloFresh is 25%              |
| 01:00:28   | cheaper than takeout. Just a couple things I've cooked lately. Chicken sausage, spaghetti              |
| 01:00:33   | bolognese, very good. It comes with zucchini and parmesan and umami ginger pork bowls.                 |
| 01:00:39   | I like to cook Asian food, but I'm never good at getting the spices right. That's one of               |
| 01:00:44   | the great things about HelloFresh. They give you everything you need and I am able to get              |
| 01:00:48   | those Asian spices just right with their meals. These meals are great because they come out            |
| 01:00:52   | delicious, they're fresh and they take almost no time to make. I like to turn on some good             |
| 01:00:57   | jazz or a podcast and I've got the meal cooked in no time at all. Go to HelloFresh.com/          |
| 01:01:03   | Automators 50 and use that code Automators 50. There's no space there for 50% off plus                 |
| 01:01:09   | free shipping. That's all lowercase H-E-L-L-O-F-R-E-S-H.com/Automators 50. Get that 50% off.     |
| 01:01:19   | HelloFresh is America's number one meal kit, so go check it out yourself. That URL one                 |
| 01:01:24   | more time, HelloFresh.com/Automators 50 and code Automators 50 for that 50% off                  |
| 01:01:30   | plus free shipping. Our thanks to HelloFresh for their support of the Automators podcast               |
| 01:01:35   | and Olive Relay FM. Rose, one of the things I think that's important about personal productivity       |
| 01:01:43   | automation is just being aware of the sharp edges. When you're trying to work on personal              |
| 01:01:51   | productivity stuff, I think often it's app-based stuff. A lot of people who want to automate           |
| 01:01:56   | it get lost because they don't have quite what they need. When earlier in the show I                   |
| 01:02:01   | was talking about for doing setups, how the aha moment for me for shortcuts was when I                 |
| 01:02:07   | realised I could run an AppleScript to arrange my windows using a third-party app. I just             |
| 01:02:12   | wanted to take a minute to call that out, that concept that if you are facing a problem                |
| 01:02:19   | with shortcuts or [[Keyboard Maestro]] or anything that you're trying to do personal productivity          |
| 01:02:25   | automation on, you need to look sometimes beyond the obvious solution because for a                    |
| 01:02:31   | lot of people trying to automate stuff like this, the solution is out there. It just takes             |
| 01:02:36   | a couple extra steps. One of the big ones I would like to call this AppleScript. If                   |
| 01:02:42   | you're working on the Mac, there's just so many problems that AppleScript will solve                  |
| 01:02:47   | for you with a little creativity. I have several examples here, but I'm going to start with            |
| 01:02:54   | one. I mentioned earlier I record a lot. When I decide to open up a recording session,                 |
| 01:03:04   | one of the things I do is I change the resolution of my screen. Well, that is a pain in the            |
| 01:03:08   | neck. The way Apple makes it, you got to go to the display setting, you got to go find                 |
| 01:03:12   | a little button, you got to click on it. It's very human-intensive to switch resolution.               |
| 01:03:19   | I know people listening might be rolling their eyes, but it is. When you want to get to work,          |
| 01:03:23   | you want to get to work. I tried to [[AppleScript]] that forever and I never could find                   |
| 01:03:30   | a way to do it. I even asked [[Sal Soghoian]], the master of AppleScript. There really wasn't              |
| 01:03:35   | a good way to do it. There was some UI scripting of the display preference, which is, if you're        |
| 01:03:42   | listening, it's just as complicated as that sentence sounded. It's not consistent. Then                |
| 01:03:49   | I figured out, because I started looking at apps and one of the apps I downloaded was                  |
| 01:03:54   | display menu. I was looking at the website and they said, well, if you pay us $5 or something          |
| 01:03:59   | to get the pro version, you get AppleScript support. It's like the light bulbs went off.              |
| 01:04:04   | It's like, oh, wait a second. I can AppleScript display resolution using a third-party                |
| 01:04:10   | app. To solve the problem, what I had to do was I had to get a third-party app, in this                |
| 01:04:16   | case display menu, and then figure out their AppleScript implementation, which they do                |
| 01:04:21   | a pretty good job of explaining on their website. Then I can reset a resolution with an Apple          |
| 01:04:27   | script call. Now that I have that, it's a one-line code of AppleScript. I'm not sharing               |
| 01:04:34   | this so you guys all can change your resolution. Very few people need to do it as often as             |
| 01:04:38   | I do, but this is an example of the way I solved the problem. Now that I've got that                   |
| 01:04:43   | little snippet of code, I save it as a TextExpander snippet. I can dump it into a shortcut.           |
| 01:04:49   | I can dump it into a [[Keyboard Maestro]]. I can dump it into a script editor. I can do anything I want    |
| 01:04:53   | to run this. I've got it set for both the resolution I want to record and the resolution               |
| 01:04:59   | that I want to work at so I can change between the two of them. Now I'm off to the races.              |
| 01:05:05   | Anytime I want to automate that process, I have it implemented across the board. This                  |
| 01:05:11   | is a problem that was on my mind for years. It sounds silly, but it was. I just wanted to automate     |
| 01:05:16   | that screen change. I hated it every time I had to open that display box, and now I don't. But         |
| 01:05:21   | the trick was to keep your mind open to oddball solutions to this automation problem.                  |
| 01:05:27   | Yeah. That's really cool. I like the way that you dumped it into a TextExpander snippet. What I       |
| 01:05:33   | would probably have done is actually just put it into a shortcut or an AppleScript file and then      |
| 01:05:43   | just always run that because then if I ever need to change it, then I only have to change it in        |
| 01:05:47   | one place. At the same time, you're probably not going to need to change that very often.              |
| 01:05:52   | You know what? I'm going to do that. That makes way more sense. I'm going to switch to that.           |
| 01:05:57   | This is something I often do as part of my automations. It's like,                                     |
| 01:06:00   | oh, I'm going to do the same thing in multiple places. No, no, no, no, no. I'm going to put            |
| 01:06:04   | this in a mini sub-automation, and I'm going to run the mini sub-automation in all those places,       |
| 01:06:09   | because if it breaks or if I need to change something, I change it once and it's done everywhere.      |
| 01:06:13   | Yeah. What really has happened is I've installed this into multiple scripts for different things       |
| 01:06:20   | I do, screen setups, recording things, and it just works without me having to think about it.          |
| 01:06:26   | Another example of going outside the normal box is the little clock in the upper right corner          |
| 01:06:34   | of your Mac on the menu bar. For years, you were able to turn that offer on. Most people wouldn't      |
| 01:06:42   | care and they would leave it on 100% of the time, but if you're recording, you don't really want a     |
| 01:06:47   | digital clock up there because sometimes you make a mistake and you have to reset something, and then  |
| 01:06:52   | if people are watching the recording, they see suddenly 10 minutes just dropped off the universe.      |
| 01:06:58   | There's not an ideal fix for that because now it has to be there because the way Apple has done        |
| 01:07:03   | the sidebar. Yeah. But what you can do is make it more obtuse, and if you switch it to the analog      |
| 01:07:10   | clock, you're much less likely to notice that the analog minute hand jumped a little bit than you are  |
| 01:07:16   | to see the digital hand jumped up 10 minutes. I wanted to easily change that. Again, you can do        |
| 01:07:23   | it manually. There is a set of steps you go through, and this is even more tedious than changing the   |
| 01:07:29   | screen resolution. One day I did it for the last time, I said, this is enough of this. I just did      |
| 01:07:35   | a Google search. How do I change the clock on the Mac with a script? I found a shell script that       |
| 01:07:41   | does it, and it works great, and it toggles it. If I want to go between analog and minutes, it does    |
| 01:07:48   | that. Again, I've got that thing spread all over the place, and it's just a little thing I call.       |
| 01:07:54   | There is no automator or shortcut action that does this. There is no keyboard. You can run a           |
| 01:08:01   | shell script through shortcuts or [[Keyboard Maestro]]. Yeah. Well, that's my point, but there is no built |
| 01:08:08   | in native action to do this. It's too niche. Apple is never going to make that. Once I got the shell   |
| 01:08:15   | script, then I made a shortcut action, and I made a [[Keyboard Maestro]] action. Now I've got one more     |
| 01:08:21   | little thing in my bag of tricks of automation I can use. I feel like that's the extreme. If I lost    |
| 01:08:29   | you in that, you're like, I'm not going to do shell scripts. You're growing off the deep and           |
| 01:08:32   | sparky. There's a flip side of this that's equally important, and that is using built-in               |
| 01:08:40   | selection and keyboard shortcuts in apps that don't have actions. If you've got an app that I          |
| 01:08:50   | really like, and I've really come to like a lot, is the screenshot replacement called, I always        |
| 01:08:57   | forget the name, CleanShot. CleanShot has a bunch of really impressive features that it adds to the    |
| 01:09:04   | mix. One of it is high desktop icons. If I'm going to record, I want to high desktop icons.            |
| 01:09:11   | Well, I and CleanShot has the ability to custom program your own unique keyboard shortcuts for         |
| 01:09:18   | everything it does. That's a responsible app made by somebody who gets automation.                     |
| 01:09:23   | And so what I did is I just gave super obscure keyboard shortcuts to all the stuff I want to do        |
| 01:09:31   | in CleanShot. And now I can call those as part of a [[Keyboard Maestro]] script or using Better Touch      |
| 01:09:38   | Tools keyboard action. I can call them in shortcuts too. So like now instead of going to get a shell   |
| 01:09:45   | script, I'm just using a keyboard shortcut, but it works. Yeah. I have a bonus or an unrelated but     |
| 01:09:55   | useful little trick that I'm going to just mention for folks. Because you mentioned the date and time  |
| 01:10:01   | and this reminds me of something that I thought that I came across. I think I was on Lifehacker        |
| 01:10:05   | years ago, but it's been very useful. It's not as useful anymore because it turns out my Mac doesn't   |
| 01:10:11   | crash much nowadays. But if you go into system preferences or system settings and then you             |
| 01:10:18   | go to the clock options, which at least in Ventura under Control Centre and then clock options,        |
| 01:10:25   | there is the option to flash the time separators. I recommend everybody turn this on. It is            |
| 01:10:31   | relatively unintrusive. It just means that the colon between the hour and the minute flashes           |
| 01:10:37   | every second. If your Mac freezes, you will be able to tell because you can just stare at the time     |
| 01:10:43   | and if the colon doesn't disappear and reappear every second, then you know that your Mac is frozen,   |
| 01:10:50   | like frozen, frozen, and then you force restart it or whatever. But that has been a life saver         |
| 01:10:58   | for, well, maybe not a life saver, but it's certainly been very helpful to explain to my dad,          |
| 01:11:02   | hey, look at the time. If the colon doesn't disappear and reappear, your Mac is okay. You don't        |
| 01:11:07   | want to force restart it. Try quitting the application instead. Because for a while,                   |
| 01:11:14   | I discovered that he was just whenever Photoshop stopped responding, he was just force shutting        |
| 01:11:19   | down his Mac and restarting it, which it did fix the Photoshop problem, but I was slightly worried     |
| 01:11:24   | he was going to kill his machine by doing that too often or cause a corrupted operating system.        |
| 01:11:30   | So yeah, little bonus trick for folks there. Yeah, it is always interesting, you know,                 |
| 01:11:36   | trying to find different solutions to these things. And it's amazing how many things,                  |
| 01:11:41   | you know, can be solved with a line of AppleScript that you stole from the internet.                  |
| 01:11:45   | I want to give a shout out as well, actually, to fast scripts. Because fast scripts can run            |
| 01:11:50   | any script. It can run shell scripts, it can run Python scripts, it can run AppleScripts.             |
| 01:11:55   | And it lives in your menu bar, it's just a little script icon that lives in your menu bar, but         |
| 01:12:01   | you can have it show you different scripts and open the scripts in different places                    |
| 01:12:08   | and things like that. You can trigger it from a shortcut, but because you then have those scripts      |
| 01:12:14   | available in all the places, then you can just reuse them. So I put a lot of my general scripts        |
| 01:12:22   | for things like, you know, open iTerm with this profile and this profile split vertically.             |
| 01:12:29   | iTerm is an alternative terminal app that I use and profiles are, you know, like different setups,     |
| 01:12:35   | so you could have different colours, it can highlight different things when they appear on a screen,    |
| 01:12:40   | etc. And so, you know, having it open two of those, you know, split vertically is really useful.       |
| 01:12:46   | And, you know, I have, you know, some generic scripts for things like that, and they just              |
| 01:12:50   | live in my file scripts toolbar. So if I just want to, you know, run those, it's right next            |
| 01:12:56   | to Bunch, and I can just do that.                                                                      |
| 01:12:57   | You know, as for like, I don't know, 25 years, I've been looking at that setting with the flashing     |
| 01:13:04   | colon between, you know, the hours. And I've always thought that would drive me nuts to have           |
| 01:13:09   | that blinking at me all the time. And I just turned it on while you said it, because I've never had    |
| 01:13:14   | it on in all the years I've owned a Mac. And, you know, it's not that bad. It doesn't bother me.       |
| 01:13:18   | No, it's one of those things you would really think that it's very bothersome. But because             |
| 01:13:25   | it's far in the top right hand corner, it doesn't have to be. And, you know, you can pretty much       |
| 01:13:32   | ignore it. But it's very useful if your Mac crashes, because you'll be able to just stare at a time.   |
| 01:13:37   | And no, no, everything's okay. It's working. Or at least the Mac is fine. Mac OS is fine.              |
| 01:13:42   | There may be other problems, but Mac OS is okay.                                                       |
| 01:13:44   | Okay, I'm going to ask you a question that may cause some controversy.                                 |
| 01:13:48   | Oh, dear.                                                                                              |
| 01:13:49   | 12 hour or 24 hour clock?                                                                              |
| 01:13:52   | 24 hour clock.                                                                                         |
| 01:13:53   | Yeah, okay. That gets me in trouble over here. I think a lot of Americans prefer the 12 hour           |
| 01:13:59   | clock. But I don't know why. It's like, it's for me, it just completely removes the ambiguity.         |
| 01:14:05   | You know, you wake up in the morning, and you're like, Oh my God, did I like sleep through a whole     |
| 01:14:10   | day or something? You know, it happens every once in a while, right? If I also had 12 hour             |
| 01:14:16   | clocks in my life, I think I would continually wake up and go, did I sleep through a day and a half?   |
| 01:14:22   | You know, because I have blackout, blinds and curtains and everything. So my room gets pretty          |
| 01:14:26   | dark. So, you know, especially in summer, like 8am, 8pm, it's the same amount of light.                |
| 01:14:32   | The real problem is when you set an alarm and you have a clock that has AMPM on it,                    |
| 01:14:37   | that's one more variable. Like if you, you know, if you say your clock were 7,                         |
| 01:14:42   | but you didn't catch that at 7pm, you're going to sleep in tomorrow, you know, because your            |
| 01:14:48   | clock's not going off until 1900. Yeah, I don't know why more people don't use 24. I get maybe         |
| 01:14:54   | that. I think in Europe, it's more common to use a 24 hour clock.                                      |
| 01:14:57   | Yeah, we pretty much default to it. It's just incredibly useful. And also, it removes the              |
| 01:15:03   | ambiguity. You know, if the train leaves at 1907, you know, that's seven minutes plus seven in         |
| 01:15:09   | the evening. And you don't need to worry, wait, was it 7am? You know, or anything like that,           |
| 01:15:15   | you know, it's the same with flights and things like that. It works. And I mean, the other thing       |
| 01:15:21   | is it really, you know, it helps with date maths and automations, you know, like two hours before      |
| 01:15:28   | 2pm. It's 12. Two hours before 2am is midnight. Yeah. Yes, it allows you to avoid mistakes in          |
| 01:15:36   | automation. It gives you two more characters on your menu bar, because that's two less things          |
| 01:15:41   | you have to display. Oh, okay. The other thing, do you put seconds up there too? Please tell me        |
| 01:15:46   | you don't put seconds. I don't put seconds up there. That for me is a little too much. I have          |
| 01:15:51   | briefly tried it, like on and off for a little period of time. And it just doesn't work for me.        |
| 01:15:57   | I actually don't have Mac OS display the date for me either, because I've been experimenting and       |
| 01:16:05   | I'll have to get back to folks on a set for show about this. But I've been experimenting with a        |
| 01:16:10   | few different apps that will put like meetings and your calendar into your menu bar. Obviously,        |
| 01:16:16   | fantastic, I can do this. But specifically, I was looking for like a meeting based one.                |
| 01:16:19   | And yeah, and they often display the date as part of this. So yeah, because there's                    |
| 01:16:30   | meter, M-E-T-E-R is one that's in setup that I've been playing with. So yeah,                          |
| 01:16:38   | but there's a couple. And the fact that those show like the date in your menu bar means I don't        |
| 01:16:43   | have Mac OS display the date because I have that display the date instead. We may have to come back    |
| 01:16:48   | someday to time based automation because there's some really great tools out there now and it          |
| 01:16:53   | has definitely been evolving. One announcement on this, I feel like I have, because I have             |
| 01:17:01   | shortcuts create a lot of all day events and it seems like they finally got that bug fixed             |
| 01:17:05   | where it actually creates an all day event when you ask it to, which is kind of nice.                  |
| 01:17:09   | Yeah, that is good. I don't think I ran into that too often, but it was certainly problematic          |
| 01:17:18   | when I did. So I'm very glad that that is gone because yeah, wow. Yeah, it's crazy how much            |
| 01:17:26   | like a little something like that can really break you. Like work recently, a different person         |
| 01:17:32   | started creating meeting days or meeting calendar events for office days. And they're titling them     |
| 01:17:39   | and saying the location differently. And it just broke me. And it broke me and it broke my shortcuts   |
| 01:17:45   | as well. I had to rewrite like three shortcuts, which is how I ended up pulling something out to       |
| 01:17:50   | become like one shortcut. This is how you figure out if it's a work like office day calendar event.    |
| 01:17:57   | I just put that in one central sub shortcut that I can use everywhere else. But oh gosh,               |
| 01:18:01   | yeah, that was crazy while I was trying to deal with that. I'm a big fan of planning calendars.        |
| 01:18:08   | So a lot of times I have shortcuts generate all day events for me, which go into the planning          |
| 01:18:12   | calendar. And for a long time, it was very iffy as to whether or not that was going to show up,        |
| 01:18:19   | but it's generally fixed now. We're the automators. You can advice at really.fm                        |
| 01:18:25   |/automators. Thank you to our sponsors this week, Vitally Electric and HelloFresh.                 |
| 01:18:30   | Thanks so much for listening to the show. We'll see you next time. Goodbye, folks.                     |
