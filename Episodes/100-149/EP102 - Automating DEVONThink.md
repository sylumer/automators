---
status: "incomplete"
fc-date:
  year: 2022
  month: 05
  day: 20
fc-category: "podcast"
podcast: "Automators"
published: 2022-05-20
duration: 5156
formattedduration: "01:25:56"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/102"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators102.mp3"
episode: 102
title: "102: Automating DEVONthink"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
Rose and David dig deep on all of Automator's varied automation tools.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 102 Discussion](https://talk.automators.fm/t/102-automating-devonthink/13808)

# Sponsors
- [[Kolide (Sponsor)|Kolide]] -  Endpoint Security Powered by People. 
- [[LinkedIn Jobs (Sponsor)|LinkedIn Jobs]] - Post a job for free.
- [[Doppler (Sponsor)|Doppler]] - Sync environment variables at scale.

# Show Notes
- [DEVONtechnologies | DEVONthink, professional document and information management for the Mac and iOS](https://www.devontechnologies.com/apps/devonthink)
- [Differences between indexing vs. importing files - DEVONthink - DEVONtechnologies Community](https://discourse.devontechnologies.com/t/differences-between-indexing-vs-importing-files/66781)
- [DEVONtechnologies | Handbooks and Extras](https://www.devontechnologies.com/support/download/extras)
- [DEVONthink Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/dt)

# Transcription
  
| Time Index | Transcription                                                     |
| :--------- | :---------------------------------------------------------------- |
| 00:00      | Welcome to The Automators.                                        |
| 00:03      | I'm David Sparks and joined by my co-host,                        |
| 00:05      | Rose-Mary Orchard, and this is where we talk                      |
| 00:07      | about how to automate your technology                             |
| 00:09      | to do your work for you.                                          |
| 00:10      | Hello, Rose.                                                      |
| 00:12      | Hey, how are you, David?                                          |
| 00:13      | Good, I am excited about today's episode.                         |
| 00:16      | We're going to be talking about automation with DEVONthink,       |
| 00:19      | which is a topic you near and dear to my heart.                   |
| 00:22      | So I'm really looking forward to this one.                        |
| 00:24      | Yeah, me too.                                                     |
| 00:26      | I mean, people think of DEVONthink as kind of like                |
| 00:28      | find a replacement on steroids,                                   |
| 00:30      | but there's a lot more to it,                                     |
| 00:32      | and we're going to dive deep on today's episode.                  |
| 00:36      | Before we get started, however, Rose,                             |
| 00:40      | for our bonus segment today,                                      |
| 00:41      | we're going to talk about how specifically                        |
| 00:44      | you and I are using DEVONthink.                                   |
| 00:45      | I mean, the episode's going to be all about automation tools,     |
| 00:48      | but I thought it'd be fun to kind of dig in deep                  |
| 00:50      | on what we're doing with it these days,                           |
| 00:52      | and so we'll be doing that for the supporters.                    |
| 00:55      | If you'd like to be a supporter,                                  |
| 00:56      | just head over to relay.fm/automators.                      |
| 01:00      | You can sign up there.                                            |
| 01:01      | You get an ad-free version of the show                            |
| 01:03      | and you get some extra content on every episode.                  |
| 01:05      | So that's fun, right?                                             |
| 01:07      | Let's do that.                                                    |
| 01:10      | Do you want to start talking?                                     |
| 01:12      | Actually, before we get into DEVONthink, Rose,                    |
| 01:14      | I just saw you got your Mac Studio now.                           |
| 01:17      | How's it going?                                                   |
| 01:18      | I did. It's great. I love it.                                     |
| 01:20      | So as I expected, this is a lot more powerful                     |
| 01:24      | than the M1 iMac.                                                 |
| 01:25      | Now, I should clarify that for the vast majority of people,       |
| 01:28      | including podcasters, I am sure the M1 iMac                       |
| 01:32      | can do absolutely everything that they want and need and more.    |
| 01:35      | My problem was specifically related to programming                |
| 01:38      | where I was doing a lot of very intensive stuff                   |
| 01:41      | simultaneously, like running multiple [[JavaScript]] applications     |
| 01:46      | and one or more simulations of an iOS application                 |
| 01:50      | to track down a bug between the app and the server                |
| 01:52      | where you needed to add debugging and stuff.                      |
| 01:54      | It's tricky when you're doing that sort of thing.                 |
| 01:57      | And this studio is just so powerful and so tiny                   |
| 02:02      | that it's just amazing and wonderful. I love it.                  |
| 02:04      | And you're still using it with that gigantic screen?              |
| 02:07      | Oh, yeah. Yeah.                                                   |
| 02:08      | The 32-inch ultra-wide has gone absolutely nowhere.               |
| 02:12      | Now, the fun thing is, as we record this episode,                 |
| 02:16      | as the episode releases, I'm actually on holiday in New York,     |
| 02:18      | that is also the day that [[Apple]] is currently estimating           |
| 02:21      | that they will be delivering                                      |
| 02:22      | my Apple Studio display to me.                                    |
| 02:25      | So we're going to see what happens there.                         |
| 02:27      | I mean, it says the window is the 20th of May to the 7th of June, |
| 02:34      | but I'm really looking forward to this partially                  |
| 02:36      | because it's an Apple Studio display.                             |
| 02:39      | Well, why not?                                                    |
| 02:41      | But also because I'm going to be switching between portrait       |
| 02:43      | and landscape with it, David.                                     |
| 02:45      | And I think that that's something that is really interesting.     |
| 02:49      | There are plenty of monitors where if you rotate them,            |
| 02:51      | you can change the screen settings to say it's portrait           |
| 02:53      | or it's landscape.                                                |
| 02:54      | But I like the iOS-iness of this,                                 |
| 02:56      | where theoretically I rotate it,                                  |
| 02:57      | and it just knows that I rotated it and bam, I'm done.            |
| 03:02      | And so I think together,                                          |
| 03:04      | they're going to be an incredibly powerful combination,           |
| 03:06      | but this 32-inch ultra-wide screen is going absolutely nowhere.   |
| 03:09      | Yeah. All right. Well, next episode,                              |
| 03:11      | you have to give us all a picture.                                |
| 03:12      | Well, fingers crossed, I'll actually have it by then.             |
| 03:16      | I've got a visa mount ready,                                      |
| 03:17      | but I have no studio display                                      |
| 03:20      | and not even a tracking number right now.                         |
| 03:21      | So we'll have to see.                                             |
| 03:23      | But it should be pretty good.                                     |
| 03:25      | And the Mac Studio and, in fact, all of the Macs                  |
| 03:28      | are just great for doing so many automation things                |
| 03:31      | because it's just so easy to do.                                  |
| 03:33      | It's all built right in there.                                    |
| 03:35      | Everything is everywhere.                                         |
| 03:36      | And actually, I think that's one of the things                    |
| 03:38      | that makes [[DEVONthink]] a great topic for today's episode,         |
| 03:41      | because it means that I have everything everywhere                |
| 03:45      | in the exact same structure.                                      |
| 03:46      | And then my magic happens where it needs to happen,               |
| 03:50      | regardless of where I've added a document to it.                  |
| 03:52      | How are you doing storage on your Mac Studio?                     |
| 03:55      | I mean, did you just get a big internal drive                     |
| 03:57      | or have you got some stuff hanging off of it?                     |
| 03:59      | I've got a one terabyte internal SSD.                             |
| 04:02      | I have actually two Synologys at home.                           |
| 04:05      | I've got one which I've specifically dedicated                    |
| 04:07      | to all of my media stuff.                                         |
| 04:09      | I've been ripping DVDs and stuff for myself                       |
| 04:11      | and for some family members for years                             |
| 04:14      | and running a Plex server on that so that I can just watch        |
| 04:18      | whatever it is I want.                                            |
| 04:19      | And some things are really hard to get.                           |
| 04:21      | Did you know that you can't stream diagnosis murder               |
| 04:23      | anywhere, the murder mystery series with Dick Van Dyke             |
| 04:26      | as the doctor is solving crimes?                                  |
| 04:28      | I remember that, yeah.                                            |
| 04:29      | Yeah, it's streaming.                                             |
| 04:30      | At least here in the UK, I can't legitimately                     |
| 04:33      | stream it from any service.                                       |
| 04:35      | I'm sure there's multiple websites out there                      |
| 04:36      | where I could just watch it, but I actually wanted it.            |
| 04:39      | So buying DVDs from eBay and [[Amazon]] and I'm ripping them          |
| 04:42      | so that I can watch them on my TV myself is the solution.         |
| 04:46      | And so I've got one technology for that.                          |
| 04:47      | And I've got another one which is some documents and stuff        |
| 04:50      | that I use at home and time machine backups and so on.            |
| 04:54      | And then other than that, I'm looking actually                    |
| 04:56      | Satechi have a Mac mini slash studio sort of stand kind           |
| 05:03      | of thing.                                                         |
| 05:03      | It basically sits exactly under and is the same shape             |
| 05:07      | and size, at least width and depth, not height wise,              |
| 05:11      | as the Mac Studio.                                                |
| 05:12      | And the idea is it adds some ports to the front,                  |
| 05:14      | which is really important if you've got, say, a Mac mini          |
| 05:16      | and you are going to be unplugging and plugging stuff             |
| 05:18      | at the back all the time, that's really frustrating.              |
| 05:21      | Or if you are looking to add another hard drive to your Mac,      |
| 05:28      | you can put an M2 SSD in there.                                   |
| 05:30      | And I'm considering that for just like shoving all                |
| 05:34      | of the other stuff off that I don't want on my device.            |
| 05:37      | But the problem that I've got is I've                             |
| 05:38      | got a lot of stuff in [[Dropbox]].                                    |
| 05:40      | And [[Dropbox]] doesn't like you splitting the location of things.    |
| 05:44      | And they've got a bit funny recently where they've started,       |
| 05:47      | or at least they told me when I've put sim links and things       |
| 05:50      | on my Mac, a symbolic link is basically telling the file          |
| 05:53      | system, hey, this file is actually over here.                     |
| 05:56      | An alias is kind of like, hey, so if you go over here,            |
| 05:59      | then you're going to find it.                                     |
| 06:00      | But a symbolic link is more like, ta-da, I'm here.                |
| 06:04      | And it appears that you're here.                                  |
| 06:05      | But actually, when you go to touch it, it's like a magic mirror.  |
| 06:09      | Your hand goes through the mirror to the other side               |
| 06:12      | to grab it.                                                       |
| 06:13      | Yeah, it kind of fakes out the operating system.                  |
| 06:16      | Yeah, exactly.                                                    |
| 06:17      | And this is something that has been                               |
| 06:19      | able to be done on operating systems, mostly                      |
| 06:22      | [[Unix]]-based for absolutely donkeys years.                          |
| 06:24      | I found [[Dropbox]] is a little bit funny about that.                 |
| 06:27      | And I know previously I've had difficulty syncing [[Dropbox]]         |
| 06:30      | to an external SSD, which technically this would be.              |
| 06:34      | So I'm undecided what way I'm going to go there.                  |
| 06:37      | But I don't feel like I'm hurting the storage                     |
| 06:39      | base at all right now.                                            |
| 06:41      | So I think I'm going to be fine.                                  |
| 06:43      | I just tend to offload things to [[Dropbox]] in the cloud             |
| 06:46      | and have that sync down to my Synology                            |
| 06:49      | via the cloud sync service for anything that I want to keep,      |
| 06:53      | but I don't need on my device.                                    |
| 06:54      | Well, there's no way I would be able to fit my stuff              |
| 06:57      | on a one terabyte drive.                                          |
| 06:58      | I mean, just the photos library alone for me is huge.             |
| 07:01      | So it just depends.                                               |
| 07:03      | But we're all, I think it's something we're all figuring out.     |
| 07:07      | Like, do you have much internal storage you need?                 |
| 07:08      | You can get pretty fast external SSDs,                            |
| 07:11      | but nothing commits to speed of the internal drives.              |
| 07:14      | I mean, the new Mac Studio and the M1 Macs,                       |
| 07:17      | the way they have that basically the storage right                |
| 07:20      | on the chip, it is so fast.                                       |
| 07:23      | It is really hard to beat that.                                   |
| 07:25      | It really is, yeah.                                               |
| 07:26      | All right, well, I'm glad you like your new machine.              |
| 07:29      | I'm looking forward to hearing how you put an Apple Studio        |
| 07:32      | display next to a super wide monitor.                             |
| 07:35      | I mean, it just seems like it's going to be.                      |
| 07:36      | Flow over on the right, just like my iMac currently does.         |
| 07:39      | I mean, my iMac is not floating because I didn't get              |
| 07:40      | the visa amount on.                                               |
| 07:41      | So my iMac is actually a bit lower than my monitor,               |
| 07:44      | which is unfortunate.                                             |
| 07:45      | What are you doing with the iMac then?                            |
| 07:47      | So I actually had an Intel Mac mini,                              |
| 07:50      | which was the machine I was using before the iMac,                |
| 07:53      | as my home server.                                                |
| 07:55      | And I have decided that the M1 iMac is so much more               |
| 08:00      | power efficient than the Intel Mac mini.                          |
| 08:03      | The iMac is going to be my home server.                           |
| 08:05      | And this sounds insane because space wise,                        |
| 08:08      | like physical space wise, I absolutely agree.                     |
| 08:10      | It is far from efficient,                                         |
| 08:12      | but from a power perspective, it's much better.                   |
| 08:15      | And also it means if I need to do something on the machine,       |
| 08:18      | I don't have to have another machine to be able                   |
| 08:21      | to see what's going on.                                           |
| 08:22      | I don't have to run a long HDMI cable across my office            |
| 08:27      | or anything like that.                                            |
| 08:28      | I can literally just pull out the Bluetooth keyboard              |
| 08:32      | that I keep behind it, you know, turn on the slow, bam.           |
| 08:35      | I mean, so that's what I'm going to be doing with that.           |
| 08:39      | And, you know, thus far it works pretty well.                     |
| 08:42      | Also universal control.                                           |
| 08:44      | I've had to disable it on it                                      |
| 08:45      | because I've already moved the iMac behind me.                    |
| 08:49      | And I lost my mouse the other day.                                |
| 08:50      | I was very confused.                                              |
| 08:51      | Turned out I had accidentally pushed off the side                 |
| 08:54      | of my screen to my mouse on the iMac behind me.                   |
| 08:56      | So I had to disable universal control on that                     |
| 08:59      | because that was very confusing.                                  |
| 09:01      | I'm mentally figuring out, wait,                                  |
| 09:03      | which direction did I push him to get my mouse over there?        |
| 09:06      | And how do I get it back now?                                     |
| 09:08      | Was it confusing?                                                 |
| 09:10      | You know, universal control is such a game changer                |
| 09:12      | for me with an attached iPad.                                      |
| 09:14      | Maybe there's a future episode of automators                      |
| 09:16      | where we talk about our setups                                    |
| 09:17      | for doing different kinds of work                                 |
| 09:19      | because between universal control and screen setups               |
| 09:23      | and some things, there is a lot of automation I'm using there.    |
| 09:26      | So maybe that's a future episode.                                 |
| 09:28      | But either way, today we're here to talk about [[DEVONthink]].     |
| 09:31      | And [[DEVONthink]] is one of those apps                            |
| 09:33      | that's been around a really long time on the Mac.                 |
| 09:36      | And it's a small development team.                                |
| 09:39      | And, you know, it started out life as a kind of like a finder.    |
| 09:44      | It's really hard to categorise [[DEVONthink]],                     |
| 09:45      | but it really is, in my mind,                                     |
| 09:47      | kind of like a finder replacement.                                |
| 09:49      | It holds files,                                                   |
| 09:50      | but it adds like layers upon layers of extra power to that.       |
| 09:56      | Something that automators should really love.                     |
| 09:57      | I mean, separate from the automation stuff                        |
| 10:01      | we're going to get into today,                                    |
| 10:02      | like one of the things you can do with [[DEVONthink]]              |
| 10:05      | is you can attach a link to anything                              |
| 10:07      | in your [[DEVONthink]] database,                                   |
| 10:08      | whether it's a folder which they call groups                      |
| 10:11      | or it's a specific file                                           |
| 10:13      | or even just a specific page on a specific PDF.                   |
| 10:18      | There's a whole mechanism for creating those links.               |
| 10:20      | And as a result, if you're someone like me                        |
| 10:23      | who likes to be able to jump, you know,                           |
| 10:26      | contextually on a project to the project documents                |
| 10:29      | versus the project information or an email or whatever,           |
| 10:32      | [[DEVONthink]] holds all that                                      |
| 10:34      | and links to it externally and internally.                        |
| 10:36      | So you can make it like a really fast way                         |
| 10:40      | to hold things together.                                          |
| 10:43      | Yes, yeah.                                                        |
| 10:44      | For me, it's sort of my personal document management system.      |
| 10:47      | You know, I have documents that I store in [[Dropbox]]                |
| 10:49      | and things like that.                                             |
| 10:50      | Like recordings for this podcast episode,                         |
| 10:52      | those go into [[Dropbox]],                                            |
| 10:53      | they get categorised and filed into the folders                   |
| 10:55      | and GMR lovely editor picks them up and stuff.                    |
| 10:57      | But that's working documents that are actively being,             |
| 11:02      | having stuff done with being transformed.                         |
| 11:04      | But the things that I'm just, I'm keeping                         |
| 11:06      | and the things that I need to reference for me,                   |
| 11:08      | that's the sort of thing that I want in a system                  |
| 11:12      | where I know where everything is.                                 |
| 11:13      | And if I set it up on a new machine,                              |
| 11:14      | I don't forget to sync this folder with [[Dropbox]]                   |
| 11:17      | or something like that.                                           |
| 11:18      | I've got my database.                                             |
| 11:19      | If I've got my database, I've got everything important.           |
| 11:22      | Yeah, and that's just it.                                         |
| 11:24      | I mean, once you start storing things in there,                   |
| 11:26      | you get all those power tools                                     |
| 11:28      | and there are versions for the Mac.                               |
| 11:31      | There's also versions for the iPad and iPhone,                    |
| 11:34      | which are more recent, not quite as mature,                       |
| 11:38      | but they've been putting a lot of effort into those as well       |
| 11:41      | lately.                                                           |
| 11:42      | They've got a reliable sync engine                                |
| 11:44      | and you've got different ways you can sync stuff.                 |
| 11:46      | You can use [[Dropbox]], you can use iCloud,                          |
| 11:48      | you can use your own server if you want.                          |
| 11:50      | And importantly, you can attach your own password                 |
| 11:53      | before the sync so it is effectively into an encryption           |
| 11:57      | as far as I understand it.                                        |
| 12:00      | And so it's just a great way to work with all this stuff.         |
| 12:04      | And from an automation level, the fact                            |
| 12:06      | that you can see it on your phone or your iPad                    |
| 12:08      | means you can add tags and labels and things                      |
| 12:12      | on a mobile device.                                               |
| 12:14      | And then using some of the tools we're                            |
| 12:15      | going to talk about later in the show,                            |
| 12:17      | you can have all the work happening on the back end.              |
| 12:19      | So getting back to your Mac mini server,                          |
| 12:22      | it can be running [[DEVONthink]] full time on your database        |
| 12:26      | and always be applying those rules.                               |
| 12:28      | Yes, exactly.                                                     |
| 12:30      | And that's just something that works so well,                     |
| 12:33      | because a lot of the things that we do,                           |
| 12:36      | and we've talked about over the years,                            |
| 12:37      | and there's, to be clear, nothing wrong with those.               |
| 12:39      | And I'm personally still using things like [[Hazel]]                  |
| 12:42      | on my iMac as it is now, my home Mac server,                      |
| 12:46      | to pick up stuff and move it around and greening things           |
| 12:49      | and organise stuff, like things like my downloads folder          |
| 12:52      | and stuff, that all still gets managed by that.                   |
| 12:54      | But the ability for me to just go,                                |
| 12:55      | hey, this is a document, I need to keep it.                       |
| 12:58      | It needs to go somewhere safe, it's important.                    |
| 13:01      | And even partially file something already.                        |
| 13:04      | So for example, if I get a new app on,                            |
| 13:07      | so I'm looking for something, how do I                            |
| 13:09      | do this thing with this device again?                             |
| 13:11      | And then I realise, wait, I don't have the manual for it.         |
| 13:13      | OK, I'll download the manual and put it                           |
| 13:15      | straight into the manuals folder inside of [[DEVONthink]],         |
| 13:18      | or group actually, it's a group rather than a folder.             |
| 13:22      | And then I know that's done.                                      |
| 13:23      | And then magic happens in [[DEVONthink]]                           |
| 13:25      | when I'm back on my Mac.                                          |
| 13:26      | But you don't have to have an always on Mac,                      |
| 13:28      | because the next time you open up your Mac,                       |
| 13:31      | this stuff does just happen and pick it up.                       |
| 13:33      | Because you already, all the documents are already there.         |
| 13:36      | It's not waiting to suck them in necessarily,                     |
| 13:38      | which is just great.                                              |
| 13:41      | Indexing versus importing, I think                                |
| 13:43      | that's something we need to talk about with [[DEVONthink]]         |
| 13:46      | before we get started.                                            |
| 13:47      | Yes, yeah.                                                        |
| 13:48      | I think it's really worth looking at,                             |
| 13:50      | because they are two very different ways of working,              |
| 13:55      | both of which come with benefits and potentially                  |
| 13:57      | downsides, depending on your point of view.                       |
| 13:59      | But essentially, indexing is, these are my files.                 |
| 14:03      | They are organised, how I want them to be organised,              |
| 14:05      | they are in my file system.                                       |
| 14:06      | I want [[DEVONthink]] to sit on top of that and read               |
| 14:10      | and give me all of the searching capabilities                     |
| 14:13      | and so on on top of what is already there and find out.           |
| 14:17      | Whereas importing is basically, these files                       |
| 14:20      | now go and they live inside [[DEVONthink]].                        |
| 14:22      | Now, just to be clear, the [[DEVONthink]] database                 |
| 14:24      | is still a folder, which essentially, it's a package.             |
| 14:27      | You can go spelunking and looking for the files                 |
| 14:29      | if you needed to, but you shouldn't do that.                      |
| 14:33      | If you import it in [[DEVONthink]],                                |
| 14:34      | it just goes into [[DEVONthink]], it lives in [[DEVONthink]].       |
| 14:38      | And then, [[DEVONthink]] can rearrange things                      |
| 14:40      | and move stuff around for you without breaking any of the stuff   |
| 14:44      | that you had set up with folders and things like that.            |
| 14:47      | And so I personally prefer importing over indexing,               |
| 14:50      | but I do use indexing still for things like certain folders       |
| 14:54      | which automatically get imported                                  |
| 14:56      | and also my [[Obsidian]] database.                                    |
| 15:00      | So that everything that is an [[Obsidian]] stays where it is          |
| 15:03      | because I've organised that, how that makes sense.                |
| 15:06      | And then, everything else is imported.                            |
| 15:10      | How do you do things?                                             |
| 15:11      | Just like you, I import almost always                             |
| 15:14      | and there's a few, like if I have a shared folder                 |
| 15:18      | and I want [[DEVONthink]] to do its magic on stuff there,          |
| 15:21      | but for today's purposes, especially when you're thinking         |
| 15:24      | about taking on [[DEVONthink]] as an automation tool,              |
| 15:28      | I think importing is way easier than referencing                  |
| 15:33      | or indexing because you're not gonna get the results              |
| 15:36      | you always think you will                                         |
| 15:38      | when you're working with external files.                          |
| 15:40      | If you want [[DEVONthink]] to do its automations and magic,        |
| 15:42      | you really need to have the files inside [[DEVONthink]].           |
| 15:45      | And there's really no downside to doing that.                     |
| 15:49      | The way [[DEVONthink]] works,                                      |
| 15:50      | it's a, it is not what I would call a Roche Motel app.            |
| 15:54      | When you put the files in, you can just drag them back out.       |
| 15:57      | [[DEVONthink]] will add some extra metadata                        |
| 15:59      | while the files are in [[DEVONthink]],                             |
| 16:00      | but when you pull them out,                                       |
| 16:01      | it's not like their names get garbled                             |
| 16:03      | or file formats change.                                           |
| 16:05      | It's just, you just literally drag files out of [[DEVONthink]]     |
| 16:08      | and that's the export process.                                    |
| 16:10      | So you really don't have anything to lose                         |
| 16:12      | and if you want to automate with it,                              |
| 16:14      | you should import those files.                                    |
| 16:16      | Yeah, to note, importing is the default option                    |
| 16:20      | because basically if you import,                                  |
| 16:22      | your database is a portable database                              |
| 16:24      | so it can go anywhere and do anything.                            |
| 16:26      | And you can, indexing is integrated with the file system,         |
| 16:31      | which means you rename it in [[DEVONthink]]                        |
| 16:33      | and it renames it in Finder and they go both ways.                |
| 16:37      | And I would recommend checking out the user guide page 52         |
| 16:40      | to see precisely what it says there.                              |
| 16:43      | And I'm actually going to put a link to the forums                |
| 16:47      | for [[DEVONthink]] where somebody's had a thread                   |
| 16:50      | and this starts been going on for a while                         |
| 16:52      | where people discuss the pros and cons of indexing                |
| 16:55      | versus importing, but generally I'd recommend                     |
| 16:57      | unless you've got a very good reason for it,                      |
| 17:00      | go with importing over indexing.                                  |
| 17:01      | It makes life much easier and gives you more power                |
| 17:05      | and everything is definitely all in your database.                |
| 17:08      | This episode of the Automator's Podcast                           |
| 17:12      | is brought to you by Kolide,                                     |
| 17:13      | in-point security powered by people.                              |
| 17:16      | Try Kolide for 14 days free, no credit card required.            |
| 17:20      | Kolide sends employees important, timely                         |
| 17:22      | and relevant security recommendations for their Mac,              |
| 17:25      | Linux and Windows devices right inside of [[Slack]].                  |
| 17:29      | It's perfect for organisations that care deeply                   |
| 17:32      | about compliance and security,                                    |
| 17:34      | but don't want to get there by locking down devices               |
| 17:36      | to the point where they become unusable.                          |
| 17:38      | Instead of frustrating your team,                                 |
| 17:40      | Kolide educates your employees about security                    |
| 17:42      | and device management while directing them                        |
| 17:45      | to fix important problems themselves.                             |
| 17:47      | Kolide knows that for IT admins,                                 |
| 17:49      | the key to solving some of the most important security issues     |
| 17:53      | is to educate end users.                                          |
| 17:55      | They do this by instructing developers                            |
| 17:57      | to set past phrases on unencrypted SSH keys,                      |
| 18:01      | finding plain text, two-factor backup codes                       |
| 18:04      | and teaching end users how to store them securely                 |
| 18:07      | and encouraging employees to uninstall bad browser extensions     |
| 18:10      | that may sell their browser history.                              |
| 18:12      | Those are just some of the many use cases                         |
| 18:15      | not solved by locking down devices.                               |
| 18:18      | Your security policy and your employees                           |
| 18:20      | don't need to be at war.                                          |
| 18:21      | They can work together and Kolide can help you get there.        |
| 18:24      | You can try Kolide with all its features                         |
| 18:26      | on an unlimited number of devices for free for 14 days.           |
| 18:30      | There's no credit card required.                                  |
| 18:31      | Just use the link in our show notes.                              |
| 18:33      | Try it out at kolide.com/automators.                       |
| 18:36      | That's K-O-L-I-D-E dot com/automators.                      |
| 18:40      | And if you enter your email when prompted,                        |
| 18:42      | you'll get a free Kolide gift bundle                             |
| 18:44      | after trial activation.                                           |
| 18:46      | Our thanks to Kolide for their support                           |
| 18:48      | of the Automators podcast and all of Relay FM.                    |
| 18:53      | Before we went to the ad break,                                   |
| 18:54      | you were talking about the forums.                                |
| 18:55      | In addition, if you want to learn more about [[DEVONthink]],       |
| 18:59      | I have a field guide for you.                                     |
| 19:01      | So I have the [[DEVONthink]] field guide.                          |
| 19:03      | I have lost track of how many hours it is.                        |
| 19:05      | I think it's like seven hours.                                    |
| 19:07      | But there's an hour of material in there                          |
| 19:10      | about all the automation stuff we've got.                         |
| 19:12      | There's an hours worth of videos on automating [[DEVONthink]].     |
| 19:16      | And for, let's say two weeks after this episode ships,            |
| 19:20      | if you use the code,                                              |
| 19:21      | hooray, Automators with no space, I'll get $10 off.               |
| 19:25      | But all the stuff we're gonna talk about today,                   |
| 19:28      | I have walkthroughs for you in video format                       |
| 19:30      | in the [[DEVONthink]] field guide.                                 |
| 19:31      | So check that out if you're interested.                           |
| 19:33      | Let's start with, I think,                                        |
| 19:35      | the most basic automation tool of [[DEVONthink]],                  |
| 19:38      | which is group creation.                                          |
| 19:40      | And anytime we say groups today,                                  |
| 19:42      | you need to think folders.                                        |
| 19:44      | So creating folders, you can do in [[DEVONthink]] pretty easily.   |
| 19:48      | The first way is to just select,                                  |
| 19:51      | well, you can create a group like multiple methods,               |
| 19:54      | but to do it with a group of files,                               |
| 19:57      | you just select the files and then you right click                |
| 19:59      | and say create new group from folder.                             |
| 20:02      | There's a very similar action in the Finder.                      |
| 20:05      | And this is the kind of manual way to create a folder             |
| 20:09      | or slash group around a group of files in [[DEVONthink]].          |
| 20:13      | But where it picks up is there's a really cool tool               |
| 20:18      | in [[DEVONthink]] where,                                           |
| 20:22      | and this is a historical tool                                     |
| 20:24      | where it will use the [[artificial intelligence]].                    |
| 20:26      | And we haven't mentioned it yet,                                  |
| 20:28      | but one of [[DEVONthink\|DEVONthink's]] selling points                         |
| 20:30      | is that it's really invested in AI in terms of search             |
| 20:34      | and recognising what a file is and what a file contains.          |
| 20:39      | And so they have this cool trick                                  |
| 20:41      | where you can say automatically group these files                 |
| 20:44      | into folders for me.                                              |
| 20:46      | And since then, [[DEVONthink]] has got even smarter                |
| 20:50      | and there's some new methods like Classify,                       |
| 20:52      | which we're gonna talk about later,                               |
| 20:54      | where I think the developers really want you to focus on that.    |
| 20:56      | But that tool is still there.                                     |
| 20:58      | So if you hold down the shift key while right clicking            |
| 21:03      | in [[DEVONthink]],                                                 |
| 21:05      | there's an option that opens up called group similar items.       |
| 21:09      | And so let's say you've got 50 files in a folder                  |
| 21:13      | and you wanna group them.                                         |
| 21:15      | Well, you just select them,                                       |
| 21:17      | you hold down the shift key, right click                          |
| 21:19      | and then say group similar items.                                 |
| 21:20      | And then [[DEVONthink]] will look at the files                     |
| 21:23      | and do the best it can to sort those files                        |
| 21:27      | into folders for you automatically.                               |
| 21:30      | And it's really crazy how it works.                               |
| 21:32      | And sometimes I do this and it's like magic                       |
| 21:35      | and sometimes it's a mess,                                        |
| 21:37      | it doesn't always get it right.                                   |
| 21:39      | But the fact that the app is willing to try                       |
| 21:42      | and automatically create groups for me                            |
| 21:44      | and put the files in them is kind of awesome.                     |
| 21:47      | Do you ever use that feature?                                     |
| 21:49      | I do, I have to say because a lot of what I've done               |
| 21:54      | over the years is with getting things into Dev                    |
| 21:57      | and Think, I've done it in an automated fashion                   |
| 21:58      | and gone, well, I know that this,                                 |
| 22:01      | it's coming from this folder, it's going to be a payslip.         |
| 22:03      | So please, not only imported,                                     |
| 22:05      | but also add these tags to it                                     |
| 22:07      | and shove it in this folder while you're at                       |
| 22:10      | or shove it in this group, things already grouped.                |
| 22:12      | So when I right click and I hold the shift key,                   |
| 22:16      | group similar items gets grayed out                               |
| 22:17      | because my items are already grouped.                             |
| 22:20      | But if you were importing a bunch of things                       |
| 22:22      | and I have this periodically where I'm finished                   |
| 22:25      | with a folder of something or a couple of folders                 |
| 22:28      | and I've left it a while                                          |
| 22:29      | and then I dump it into my [[DEVONthink]] inbox.                   |
| 22:32      | And then it's like, oh gosh, I need to import this.               |
| 22:34      | Like, no, no, no, right click, group similar items                |
| 22:36      | and then figure out what to do with that later.                   |
| 22:38      | And especially with the suggestion for the naming                 |
| 22:42      | that comes up, the AI tries to pick stuff from the names.         |
| 22:45      | Like you can see pretty clearly how it's figured things out.      |
| 22:49      | And I find it works incredibly well.                              |
| 22:52      | And it's just a computer figuring out what to do.                 |
| 22:56      | And the best part of it is, if it does it                         |
| 22:58      | and you think, actually, no, no, looking at this,                 |
| 23:01      | I've decided I want to do things completely differently.          |
| 23:03      | Instead of categorising Lego by size,                             |
| 23:07      | we're going to categorise it by colour.                            |
| 23:09      | Of course we are, I'm using an example                            |
| 23:12      | that somebody at work came up with today.                         |
| 23:13      | Her daughter has seen a video on YouTube.                         |
| 23:15      | And wants to organise all of her Lego by colour.                   |
| 23:20      | But if you see that, you can just undo.                           |
| 23:21      | It's literally just commands that or edit undo,                   |
| 23:24      | just like you have in every other application.                    |
| 23:26      | And that is one of the great things.                              |
| 23:28      | You do something and then you change your mind.                   |
| 23:31      | You can just undo, even if it's moved                             |
| 23:34      | loads of different things around as part of that.                 |
| 23:36      | Yeah, and honestly, because of some of the features               |
| 23:40      | we're going to talk about later,                                  |
| 23:42      | I think the reason why this is somewhat hidden                    |
| 23:44      | is because there's better ways to do this stuff now,              |
| 23:47      | where it can look at the files                                    |
| 23:49      | and do a better job of categorising it for you                    |
| 23:52      | and assist you in getting the files moved.                        |
| 23:55      | This feels a little bit more like a blunt tool,                   |
| 23:58      | but they did not take it out of the toolbox,                      |
| 24:00      | which is great because if you want to do that,                    |
| 24:02      | that's definitely a way to do it.                                 |
| 24:05      | You want to talk a little bit about groups versus folders?        |
| 24:08      | Yeah, so one of the things is,                                    |
| 24:12      | what is essentially a folder in [[DEVONthink]]                     |
| 24:15      | is called a group.                                                |
| 24:17      | And I find this can be very useful                                |
| 24:19      | for helping me remember that this isn't Finder.                   |
| 24:23      | So I actually have two top level groups                           |
| 24:26      | inside of my [[Obsidian]] database.                                   |
| 24:29      | One is called auto-import,                                        |
| 24:31      | and that has index folders inside of it,                          |
| 24:33      | which are then going to import stuff into [[DEVONthink]].          |
| 24:36      | And then the other one contains index folders,                    |
| 24:38      | but other than that, everything is a group.                       |
| 24:42      | And this reminds me that it's not Finder.                         |
| 24:45      | It's not exactly the same as the file system,                     |
| 24:47      | and I can do different things with it,                            |
| 24:50      | and because I've got all of the extra magic                       |
| 24:53      | associated with it,                                               |
| 24:54      | and I can favourite a group,                                       |
| 24:56      | which just puts it at the top level.                              |
| 24:59      | And this can be really helpful                                    |
| 25:00      | when you're working on a projector,                               |
| 25:02      | going through organising a bunch of different things,             |
| 25:04      | because you can use that as your basis,                           |
| 25:06      | and you can create new smart groups from groups                   |
| 25:09      | and new smart rules from groups, as well as that.                 |
| 25:13      | But you don't have to do those things,                            |
| 25:18      | but it is just, there's more power to a group                     |
| 25:22      | than just a plain old folder.                                     |
| 25:23      | I know folders have folder actions in Finder.                     |
| 25:26      | If you find them, when you're going looking for them,             |
| 25:28      | congratulations, you have done something                          |
| 25:30      | that it took me a long time to do,                                |
| 25:32      | when my mom accidentally set up a folder action on her Mac        |
| 25:34      | and couldn't undo it.                                             |
| 25:36      | But it's a lot easier, I find,                                    |
| 25:38      | to do that with [[DEVONthink]].                                    |
| 25:41      | You can also mark entire folders as sort of locked,               |
| 25:46      | which basically just means nothing can go in or out of it.        |
| 25:48      | It's frozen, exactly as it is right now.                          |
| 25:52      | You can flag them and mark everything in them as unread           |
| 25:55      | by marking your group as unread.                                  |
| 25:58      | And there's also replicate and duplicate options                  |
| 26:01      | when you're looking at them.                                      |
| 26:02      | But what I really like about the groups in [[DEVONthink]]          |
| 26:05      | is you can copy a link to a group,                                |
| 26:08      | as well as copying a link to a specific item.                     |
| 26:10      | Or as you mentioned earlier,                                      |
| 26:12      | David, a page inside of an item,                                  |
| 26:14      | which means that you can say,                                     |
| 26:16      | okay, like all of the things in this group                        |
| 26:18      | are relevant to this thing that I need to do.                     |
| 26:20      | So for example, when I bought my place where I live now,          |
| 26:27      | I had a whole bunch of different documents                        |
| 26:29      | and I had them in a group there now                               |
| 26:31      | and split up and organised more appropriately                     |
| 26:34      | into different groups.                                            |
| 26:35      | But when I was able to do that, I was able to say,                |
| 26:37      | okay, right, we are moving this to over here                      |
| 26:40      | and I'm gonna duplicate this subgroup into that                   |
| 26:43      | and I'm gonna replicate this somewhere else,                      |
| 26:45      | which is slightly different.                                      |
| 26:47      | They're almost the same, but not quite.                           |
| 26:50      | And yeah, I was able to do a whole host of things                 |
| 26:54      | with that group of documents.                                     |
| 26:55      | And that actually is one of the things                            |
| 26:58      | that has morphed into a tag now,                                  |
| 27:00      | because you have groups and you have tagging                      |
| 27:02      | in [[DEVONthink]].                                                 |
| 27:03      | Yeah, okay, so that brings the next topic, right?                 |
| 27:07      | Groups and tags.                                                  |
| 27:08      | So we're talking about groups in this segment                     |
| 27:10      | and you're putting together groups, which is awesome,             |
| 27:13      | but [[DEVONthink]] also has extensive tag support.                 |
| 27:16      | And the idea of groups, which are basically folders,              |
| 27:22      | I know Rose just explained the differences,                       |
| 27:25      | but it's a single location that you can put a file.               |
| 27:29      | So it's an index to go back to the Lego example earlier.          |
| 27:33      | You can sort Lego by colour or you can sort them by size           |
| 27:37      | or you can sort them by shape,                                    |
| 27:39      | but you can't sort a single Lego by colour, size and shape         |
| 27:43      | because it only goes one place.                                   |
| 27:45      | Yeah, you'd have to nest the folders,                             |
| 27:47      | but then you have, so if you sort by colour first,                 |
| 27:49      | then you would have two,                                          |
| 27:51      | like if you've got red Lego and blue Lego                         |
| 27:53      | and you sort with groups,                                         |
| 27:55      | then you've got one folder for red, one folder for blue           |
| 27:57      | and then you sort by size.                                        |
| 27:58      | And so inside the red and the blue, you've got more groups.       |
| 28:01      | And that's where tags can shine.                                  |
| 28:04      | Yeah, well, I mean, even to take the Lego example                 |
| 28:07      | a step further, once you pick a colour,                            |
| 28:10      | then you're never going to get one group                          |
| 28:13      | with all of the four by four Lego together                        |
| 28:16      | because you'll have the four by four Lego                         |
| 28:18      | sorted by each colour.                                             |
| 28:20      | So, and that's a physical object,                                 |
| 28:22      | which it has that limitation,                                     |
| 28:24      | whereas the files on your [[DEVONthink]] database                  |
| 28:28      | are digital objects.                                              |
| 28:30      | And you can index them in multiple ways.                          |
| 28:33      | Going back to the Lego example,                                   |
| 28:35      | you could tag a file, colour, shape, size, and whatever,           |
| 28:41      | and then you can add any time,                                    |
| 28:42      | search for a tag and get all of those together.                   |
| 28:46      | So that's really nice.                                            |
| 28:47      | And while generally I'm not a huge fan of tags,                   |
| 28:50      | it's generally because of the poor implementation of tags         |
| 28:55      | in Mac OS and the abysmal implementation of tags                  |
| 28:58      | on iPhone and iPad OS.                                            |
| 29:01      | [[DEVONthink]] gives you a tagging scheme                          |
| 29:04      | that actually works.                                              |
| 29:05      | So, and also all the automation tools                             |
| 29:08      | that allow you to really put it to good use.                      |
| 29:10      | So this is a place where you may want to consider doing tags.     |
| 29:14      | Yeah, and I find tags have definitely got their place.            |
| 29:17      | So for example, all of those documents                            |
| 29:19      | that were related to my purchase of this place,                   |
| 29:22      | and indeed the actual place have been tagged with my address.     |
| 29:26      | And that means that if I'm looking for everything                 |
| 29:28      | to do with where I currently live,                                |
| 29:30      | I look at the tag with my address on it,                          |
| 29:33      | and then I've got all of that.                                    |
| 29:34      | I've got washing machine manuals.                                 |
| 29:35      | I've got the water heater manual.                                 |
| 29:36      | I've got my mortgage documents.                                   |
| 29:38      | I have the solicitor's information                                |
| 29:40      | for who I used my lawyer,                                         |
| 29:43      | essentially that helped me buy the place.                         |
| 29:45      | And that's all found with the tag.                                |
| 29:49      | If I'm looking, however, for receipts for this tax year,          |
| 29:54      | I have, so I have tax receipts as a tag.                          |
| 29:58      | I also have the year as a tag,                                    |
| 30:00      | and I have the month as a tag                                     |
| 30:01      | because our tax years here in the UK                              |
| 30:04      | don't run in January to December.                                 |
| 30:06      | When I was living in Austria, it was very simple.                 |
| 30:08      | If it was in the year, calendar year,                             |
| 30:10      | that was my tax year, done.                                       |
| 30:12      | Over here, unfortunately, not that simple, April to April.        |
| 30:15      | Well, because I tag things with the year and the month,           |
| 30:19      | then I can easily find it.                                        |
| 30:20      | Now I could set up a system where I tag things                    |
| 30:24      | based on the tax year and just have, I don't know,                |
| 30:27      | 21 to 2022, 22 to 23 and so on.                                   |
| 30:31      | But that is not something that I have figured out perfectly       |
| 30:34      | how to automate yet,                                              |
| 30:35      | but automatically tagging things with the year and the month,     |
| 30:39      | that's easy.                                                      |
| 30:40      | And then I can just manually do some cleanup                      |
| 30:42      | at the end of the year, and I'm sorted.                           |
| 30:44      | And so that makes it very easy                                    |
| 30:46      | for me to find that sort of thing.                                |
| 30:49      | And that works really well.                                       |
| 30:51      | And then I've got the smart groups                                |
| 30:53      | and the smart group can give me the tax year of information       |
| 30:57      | because I can say, okay, anything with these tags                 |
| 31:00      | and has the date of between this time and that time,              |
| 31:05      | which is where smart groups really help with                      |
| 31:10      | both your groups and your tags                                    |
| 31:11      | and all of the other metadata that you've got                     |
| 31:14      | to help you find all of your documents                            |
| 31:16      | in a way that you can then replicate                              |
| 31:18      | because you can basically save your search as a smart group.      |
| 31:21      | Yeah, okay.                                                       |
| 31:22      | And so let's talk about that.                                     |
| 31:23      | So that's another form of automation in Devon thing.              |
| 31:25      | And they have smart groups,                                       |
| 31:27      | which are groups that are not generated manually,                 |
| 31:30      | but groups that are generated based on criteria,                  |
| 31:33      | and getting back to it, we can say,                               |
| 31:35      | give me a smart group that has every Lego file                    |
| 31:37      | that is read four by four and whatever.                           |
| 31:42      | And so you're gonna have multiple tags it's searching             |
| 31:45      | and it puts together a smart group.                               |
| 31:49      | This is very similar to smart groups                              |
| 31:51      | or smart folders on the Mac.                                      |
| 31:54      | It's also very similar to like smart playlist                     |
| 31:57      | and historical iTunes or smart mailboxes and [[Apple Mail]].          |
| 32:01      | It just follows the same system.                                  |
| 32:05      | In fact, so much of you hold the option key                       |
| 32:06      | and hit the plus sign, you get to add conditionals                |
| 32:09      | just like you can on the Mac.                                     |
| 32:11      | So it really is just an implementation                            |
| 32:14      | of a Mac OS feature inside Devon thing.                           |
| 32:16      | But again, Devon thing is where you're storing                    |
| 32:19      | a bunch of files, that smart folder system                        |
| 32:23      | and mechanism is very useful.                                     |
| 32:24      | So why not have it also in Devon thing?                           |
| 32:27      | Yes, exactly.                                                     |
| 32:29      | And I find that one of the beauties of smart groups               |
| 32:32      | and indeed, the [[DEVONthink]] database,                             |
| 32:34      | the [[DEVONthink]] database gets synced between devices.             |
| 32:37      | So I'm not gonna be missing certain files                         |
| 32:40      | or this folder didn't somehow get created over here               |
| 32:45      | and is messed things up.                                          |
| 32:46      | No, my [[DEVONthink]] database is the source                         |
| 32:49      | and that contains my smart groups.                                |
| 32:50      | It contains my tags,                                              |
| 32:52      | which means I download it on another device.                      |
| 32:54      | I've got all of, I've got everything.                             |
| 32:56      | There's no, this is missing or that is missing.                   |
| 32:58      | And so the smart rules are then implemented the same way.         |
| 33:01      | If I make a tweak to how a smart rule                             |
| 33:03      | or a smart group works, then I can use that.                      |
| 33:07      | And indeed, smart groups are kind of foundation                   |
| 33:12      | for smart rules because the rules have, you know,                 |
| 33:15      | the search for this criteria and then do these actions.           |
| 33:18      | And one of the reasons why [[DEVONthink]] is so great                |
| 33:21      | is you can split that up.                                         |
| 33:22      | So you just wanna do the finding.                                 |
| 33:24      | You've got a smart group.                                         |
| 33:24      | You just wanna do the actions of a smart rule                     |
| 33:26      | without the finding.                                              |
| 33:28      | You can use batch processing                                      |
| 33:30      | or you can have the smart rule,                                   |
| 33:31      | which funnily enough, if you click on it,                         |
| 33:33      | and this was one of the things that I really liked,               |
| 33:36      | if you click on a smart rule,                                     |
| 33:38      | then it's also a smart group.                                     |
| 33:40      | You can see all the things                                        |
| 33:41      | that the rule is gonna apply to,                                  |
| 33:44      | which is really useful for, you know, all sorts of things.        |
| 33:49      | But it does just make my life a little bit easier                 |
| 33:51      | when it comes to especially creating rules                        |
| 33:54      | for things like that.                                             |
| 33:55      | Because, you know, I would often start                            |
| 33:56      | by just creating a smart folder somewhere                         |
| 34:00      | to try and find all the files previously.                         |
| 34:02      | And it's much easier to do in [[DEVONthink]].                        |
| 34:06      | And that's kind of the next layer of automation                   |
| 34:09      | with [[DEVONthink]].                                                 |
| 34:10      | One of the ways I explain this to people                          |
| 34:12      | is that [[DEVONthink]] has its own copy of [[Hazel]]                     |
| 34:15      | running inside of it.                                             |
| 34:16      | I mean, it's not feature for feature [[Hazel]].                       |
| 34:19      | In some ways it's better, in some ways it's worse,                |
| 34:21      | but it's a very complex trigger slash action                      |
| 34:26      | automation system that can be triggered                           |
| 34:29      | on a bunch of ways and perform a bunch of actions                 |
| 34:32      | on files in your [[DEVONthink]] database.                            |
| 34:34      | And I love it, and they call it smart rules.                      |
| 34:39      | And there's a lot to talk about here.                             |
| 34:42      | Oh yeah, there is.                                                |
| 34:43      | So to start with just a little sort of overview reminder          |
| 34:48      | for people, a smart rule is a series of criteria                  |
| 34:51      | that help you find all the files or, you know, documents          |
| 34:55      | because it's not just files.                                      |
| 34:57      | It's something we didn't really cover, David.                     |
| 34:58      | You can have like a website                                       |
| 35:00      | or a link inside of [[DEVONthink]] as a web archive,                 |
| 35:03      | which means that then you can reopen it                           |
| 35:05      | any time that you need to and you just go straight to it.         |
| 35:08      | And that's something I actually use                               |
| 35:10      | a lot more than I thought I would                                 |
| 35:13      | because it just helps with all sorts of things,                   |
| 35:15      | especially manuals for stuff                                      |
| 35:16      | where there's a video that helps you.                             |
| 35:18      | I do the same thing, just interrupt there.                        |
| 35:19      | I do the same thing with emails.                                  |
| 35:21      | If you just drag an email to [[DEVONthink]],                         |
| 35:22      | it has not only the email saved with all the texts,               |
| 35:25      | so you can search it,                                             |
| 35:26      | but it also creates a link back to the original email.            |
| 35:29      | So you can go back and find it, same thing.                       |
| 35:32      | And then you can apply all these rules to it.                     |
| 35:34      | Yeah, yeah.                                                       |
| 35:35      | The smart rule starts with I'm looking for this stuff.            |
| 35:39      | And then it has a series of actions,                              |
| 35:42      | which you can apply to stuff.                                     |
| 35:44      | And so I am just going to open one of mine,                       |
| 35:47      | which is my organised pay slips rule                              |
| 35:49      | so that I can kind of help people walk through it                 |
| 35:53      | because one of the things that you want to be careful             |
| 35:55      | and this is however you do automations on files                   |
| 35:58      | is the last thing you want to do                                  |
| 36:00      | is end up in endless recursion where you have a rule              |
| 36:03      | and it goes and it finds the file                                 |
| 36:05      | and it goes, hey, here's a file,                                  |
| 36:06      | I'm going to run my rule on it.                                   |
| 36:07      | And then it finishes, hey, here's a file,                         |
| 36:10      | I'm going to run my rule on it.                                   |
| 36:11      | Hey, here's a file, I'm going to run my rule on it.               |
| 36:13      | I had this the other day                                          |
| 36:15      | in something in my downloads folder,                              |
| 36:16      | it was renaming it just endlessly adding local                    |
| 36:20      | in front of it because I needed which server                      |
| 36:23      | I downloaded it from at work.                                     |
| 36:24      | Was it my local server, was it developer server                   |
| 36:27      | or something else?                                                |
| 36:28      | And I didn't create my criteria very smartly at the beginning.    |
| 36:33      | So what I do with my pay slips                                    |
| 36:35      | is my pay slips I download on my work machine                     |
| 36:38      | and they actually get a little bit of massageing with [[Hazel]]        |
| 36:42      | and thrown into the right folder,                                 |
| 36:43      | which then [[DEVONthink]] picks up.                                  |
| 36:45      | So one of my criteria for this is that the item is indexed        |
| 36:49      | and that means that, hey, this hasn't been dealt with             |
| 36:53      | but I can also, before that even, I can just say,                 |
| 36:56      | hey, just search in this group.                                   |
| 36:59      | So I can say, just search in a particular group,                  |
| 37:02      | search in a particular tag, only look in my inbox                 |
| 37:06      | or nest down into my tags.                                        |
| 37:09      | And so I will reset that back to looking into                     |
| 37:13      | my pay slips folder because that's very important.                |
| 37:15      | And you can choose to import, include                             |
| 37:17      | or exclude subgroups as well.                                     |
| 37:19      | So say for example, you have a folder called receipts             |
| 37:23      | but you don't actually or group call receipts                     |
| 37:25      | but you don't actually want anything                              |
| 37:28      | to end up living in there.                                        |
| 37:29      | You can say, hey, so I want this to be something                  |
| 37:32      | that is inside receipts but not in any of the subgroups           |
| 37:35      | where all of the actual important organised information is.       |
| 37:39      | And then you can say which actions you want to be performed       |
| 37:44      | and when you want them to be performed                            |
| 37:46      | because this is another thing.                                    |
| 37:48      | You don't just say, hey, I want you to do these things.           |
| 37:51      | You can say, I want you to do these things when?                  |
| 37:54      | So on work days or weekends, when it's created,                   |
| 37:57      | when it's created by the sorter, before it's saved,               |
| 38:00      | after it's saved, when I quit [[DEVONthink]],                        |
| 38:03      | when I start [[DEVONthink]] before or after it sinks                 |
| 38:06      | every minute, every hour, all sorts of things.                    |
| 38:08      | There is a whole bunch of stuff.                                  |
| 38:10      | And one of the things that I really like as well                  |
| 38:13      | is on demand.                                                     |
| 38:14      | And this is what I use when I'm creating a rule.                  |
| 38:17      | And I think that that is something very useful                    |
| 38:20      | for people to bear in mind that when you're creating              |
| 38:23      | a smart rule, actually honestly anywhere you're doing it          |
| 38:26      | if you can, don't have it run things 100% automatically.          |
| 38:32      | Wait until you've got it sorted out                               |
| 38:35      | and then set up the criteria for how frequently it should run     |
| 38:38      | or how automatically it should run.                               |
| 38:40      | Because especially when you're setting up                         |
| 38:42      | your import criteria or your matching criteria                    |
| 38:45      | for things you do not want to accidentally,                       |
| 38:48      | I don't know, import every single index item                      |
| 38:51      | into your [[DEVONthink]] database.                                   |
| 38:52      | Which means that magically everything disappears                  |
| 38:54      | out of your [[Obsidian]] database.                                    |
| 38:56      | And you may be asking,                                            |
| 38:57      | Rose, that sounds like you know this from personal experience.    |
| 38:59      | Yes, yes, I do.                                                   |
| 39:00      | I had to restore my [[Obsidian]] database twice                       |
| 39:03      | because I didn't learn my lesson the first time.                  |
| 39:05      | Yeah, so let me just jump in there a little bit.                  |
| 39:07      | So the stuff you're talking about                                 |
| 39:09      | is totally a risk that you have                                   |
| 39:13      | when you have a smart rule system,                                |
| 39:14      | whether it's [[Hazel]] or [[DEVONthink]].                                |
| 39:16      | Yes, absolutely, wherever you do it.                              |
| 39:18      | So the way, there's a couple of things.                           |
| 39:22      | So Rose was talking about the trigger level,                      |
| 39:24      | what is it gonna trigger this rule?                               |
| 39:27      | Yeah.                                                             |
| 39:27      | And with [[DEVONthink]],                                             |
| 39:29      | the triggers start out with a conditional all                     |
| 39:33      | whenever you create a new one.                                    |
| 39:34      | So it requires all triggers to be satisfied.                      |
| 39:38      | And so you'll be going through and say,                           |
| 39:39      | well, the trigger would be that the name is Lego                  |
| 39:44      | and the metadata or there's a tag                                 |
| 39:47      | that says red or something like that.                             |
| 39:49      | And because by default it's all,                                  |
| 39:53      | it's only gonna trigger that rule                                 |
| 39:55      | when you have all of those.                                       |
| 39:56      | But occasionally in your experimentation,                         |
| 40:00      | you may switch the all to any, you know?                          |
| 40:03      | And then anything with red in it,                                 |
| 40:05      | whether or not it's a Lego,                                       |
| 40:06      | maybe it's a swatch colour for your new bedroom                    |
| 40:10      | you're gonna paint or whatever.                                   |
| 40:12      | Anything that's got the red tag applied to it                     |
| 40:15      | suddenly gets triggered by this rule                              |
| 40:17      | and crazy stuff starts happening.                                 |
| 40:19      | So because there are so many different triggers,                  |
| 40:23      | you have to be very careful.                                      |
| 40:24      | And I think the beginning point                                   |
| 40:26      | is always make sure you've got the all checked.                   |
| 40:29      | Only use the any if you really mean to do that.                   |
| 40:33      | Yes, yes.                                                         |
| 40:34      | And anybody who's done this automation stuff                      |
| 40:36      | has occasionally seen a bunch of files get moved                  |
| 40:40      | or something crazy happened that they didn't expect.              |
| 40:42      | And a lot of times it's that damn any button that got you.        |
| 40:47      | Yeah, yeah.                                                       |
| 40:49      | So, yes.                                                          |
| 40:49      | And the way [[Hazel]] works is it automatically applies the rules     |
| 40:55      | or you can force them.                                            |
| 40:56      | But one thing [[DEVONthink]] does that's interesting                 |
| 40:59      | as Roses explaining this,                                         |
| 41:01      | you can determine when these rules run.                           |
| 41:04      | It doesn't have to be automatic, you know?                        |
| 41:07      | And the default of on-demand is great                             |
| 41:10      | when you're testing it.                                           |
| 41:11      | Because that way crazy stuff doesn't happen                       |
| 41:14      | without you doing it.                                             |
| 41:15      | Like you push a button and in files move,                         |
| 41:17      | you're like, okay, now I know what just happened.                 |
| 41:19      | But I always feel like once you start getting it sorted out,      |
| 41:24      | I actually add a bunch more, you know?                            |
| 41:26      | Because the times that these run                                  |
| 41:29      | and [[DEVONthink]] are interesting,                                  |
| 41:30      | like you can have it run on time,                                 |
| 41:33      | like every minute or hourly or weekly or whatever,                |
| 41:36      | or you can even break it down to weekdays and weekends.           |
| 41:39      | But they also have it so it runs before you quit the app          |
| 41:43      | or when you start up the app                                      |
| 41:45      | or before or after synchronisation.                               |
| 41:47      | So once I get the trigger figured out,                            |
| 41:51      | actually, once I get the rule figured out,                        |
| 41:53      | I don't actually do it past on-demand                             |
| 41:56      | until I have both the trigger and the action figured out.         |
| 41:59      | Yeah.                                                             |
| 42:00      | Then I just hit the little plus button.                           |
| 42:02      | There's a plus button there.                                      |
| 42:03      | And if you just mash it down like four or five times,             |
| 42:06      | it gives you a bunch of them.                                     |
| 42:07      | So you can do it on-demand, you can do it weekly or whatever.     |
| 42:10      | And I find that to be a fine way to set the timing.               |
| 42:15      | Yes, same. And I have to say,                                     |
| 42:17      | I really do love that there are multiple triggers                 |
| 42:22      | for when things are going to happen.                              |
| 42:24      | So you've got the what is this going to do things on,             |
| 42:28      | when is it going to do it?                                        |
| 42:29      | And then, of course, we have the actions that you can do.         |
| 42:33      | Okay. But before we get to the actions,                           |
| 42:35      | let's take a minute to talk about triggers,                       |
| 42:37      | because we've glossed over it.                                    |
| 42:40      | I mean, the trigger at list in [[DEVONthink]]                        |
| 42:45      | is truly remarkable.                                              |
| 42:46      | Oh, yeah.                                                         |
| 42:47      | I talked earlier about email.                                     |
| 42:49      | One of the triggers,                                              |
| 42:51      | well, there's a whole group of triggers                           |
| 42:53      | that are related specifically to email.                           |
| 42:56      | So recipient or who it's to                                       |
| 43:00      | or who the copies go to can be a trigger.                         |
| 43:04      | So I talked about earlier how I put emails into [[DEVONthink]].      |
| 43:08      | Well, when I was doing legal work                                 |
| 43:09      | and I had opposing counsel on a lot of the deals                  |
| 43:13      | I worked on, anytime I copied one of their emails                 |
| 43:16      | into [[DEVONthink]], one of the triggers that would look at          |
| 43:19      | is this email from John at fancylawfirm.com                       |
| 43:24      | because I only got one kind of email from John                    |
| 43:26      | of be related to a specific transaction.                          |
| 43:29      | And that single trigger,                                          |
| 43:31      | this was a case where I could use any of saying                   |
| 43:34      | the email came from him or went to him or included him            |
| 43:39      | was enough for [[DEVONthink]] to say,                                |
| 43:41      | oh, this is part of that file that you're working on              |
| 43:44      | and just grab the email and put it right there                    |
| 43:46      | into the email folder.                                            |
| 43:47      | And it is the detailed triggers                                   |
| 43:51      | that I think make [[DEVONthink]] a real candidate                    |
| 43:53      | for handling all your digital documents.                          |
| 43:56      | Yes.                                                              |
| 43:56      | Like URL is another one.                                          |
| 43:58      | Rose was talking about websites.                                  |
| 43:59      | If you always get stuff from a certain website                    |
| 44:03      | in relation to when certain project                               |
| 44:05      | you can have it look at the URL and use that.                     |
| 44:08      | I mean, what are some of your favourite triggers, Rose?            |
| 44:11      | Well, I mean, there's just so many.                               |
| 44:14      | And what I really love as well is you can do it based on          |
| 44:18      | like the kind of thing this is as well.                           |
| 44:20      | So if I added a rule to this, which said kind,                    |
| 44:24      | then I can say, you know, is or is not obviously,                 |
| 44:27      | but then you've got, it's a document.                             |
| 44:29      | It's a group or a smart group, it's a tag.                        |
| 44:32      | It's an ordinary tag or is it a group tag?                        |
| 44:34      | You know, you can specify that if you want to.                    |
| 44:37      | And then you can get nerdy.                                       |
| 44:38      | This is plain text, bridge text, formatted notes,                 |
| 44:40      | mark down a HTML page, a web archive, XML files.                  |
| 44:44      | You get the idea all the way down to other.                       |
| 44:47      | And if those options that it has doesn't do it for you,           |
| 44:51      | then you can also, of course, go back to the file extension.      |
| 44:54      | But as well as that, you've got all of the metadata               |
| 44:57      | that would be available in Finder,                                |
| 44:59      | such as the download URL.                                         |
| 45:02      | And this is something I use for my payslips.                      |
| 45:04      | My payslips always come from a specific URL.                      |
| 45:06      | And if it comes from the specific URL,                            |
| 45:08      | and it's in the folder where, you know,                           |
| 45:10      | it's coming from an import because I've downloaded it             |
| 45:13      | on another machine and it's been shoved into that folder          |
| 45:15      | for me to automatically import,                                   |
| 45:18      | then it knows this is very definitely a payslip.                  |
| 45:20      | Nothing else has fallen into this category.                       |
| 45:23      | You know, we are good to go.                                      |
| 45:25      | Let's work on this because that download URL                      |
| 45:28      | always begins with a specific, you know, group.                   |
| 45:32      | And, you know, you can go as far as you like up to,               |
| 45:34      | and I think my URL goes all the way up to the specific,           |
| 45:37      | like, payslip number would come after what I've got there,        |
| 45:41      | which means that, you know, if I did download something else      |
| 45:43      | from there, say, a new contract from the HR website               |
| 45:46      | or something, then I could specify, you know, that.               |
| 45:50      | But I really love the fact that I can say, you know,              |
| 45:52      | specifically, hey, this is an index thing.                        |
| 45:55      | It's come from this URL and it's a PDF.                           |
| 45:57      | Like, it has to be all of those things for this to fall into.     |
| 46:01      | And that's coming after my searching in this particular           |
| 46:05      | folder from, this is iCloud.                                      |
| 46:08      | So this iCloud folder just sinks across my devices.               |
| 46:10      | And then, you know, and then it goes and it magically does        |
| 46:14      | all of the stuff to, you know, move it and so on.                 |
| 46:18      | But there's just so many options.                                 |
| 46:20      | And as well as all of the standard metadata,                      |
| 46:24      | DEVONthink has custom metadata, which you can create.             |
| 46:27      | So you can add your own special metadata fields                   |
| 46:30      | and use those as triggers on actions, which is amazing.           |
| 46:33      | Yeah, so there's really almost no limit                           |
| 46:37      | as to figuring out what a trigger is.                             |
| 46:39      | And then once it's triggered, whether using the INE               |
| 46:42      | or the all modifier, then it's like, what do you do with it?      |
| 46:46      | And this is, again, now we're moving to actions.                  |
| 46:50      | There is a tremendous number of actions.                          |
| 46:54      | So, you know, the usual suspects are there,                       |
| 46:57      | like change a name, you know, add tags,                           |
| 47:01      | move to a certain group, all that stuff is there,                 |
| 47:04      | which is the stuff that a lot of us will be using                 |
| 47:07      | most of the time.                                                 |
| 47:09      | But it goes way beyond that.                                      |
| 47:10      | Like we're going to talk later about the classify tool.           |
| 47:13      | You can activate a classify based on a trigger.                   |
| 47:17      | Or, you know, we talked earlier about how DEVONthink              |
| 47:20      | will import your data, that we recommend that.                    |
| 47:23      | But you can export a file to an external folder outside           |
| 47:28      | of DEVONthink with a trigger.                                     |
| 47:30      | So as an example, let's say you share a [[Dropbox]] folder            |
| 47:34      | with your accountant.                                             |
| 47:36      | And when an expense record comes in,                              |
| 47:38      | you file it into DEVONthink and DEVONthink does all               |
| 47:41      | its magic, but one of the things DEVONthink figures out           |
| 47:44      | is like, hey, this is an expense receipt.                         |
| 47:46      | Go ahead and copy it out to his external folder                   |
| 47:49      | and [[Dropbox]] with his accountant.                                  |
| 47:51      | And that is, you know, just one additional action                 |
| 47:56      | you can do with DEVONthink.                                       |
| 47:58      | Yes, and what I have to say, I'm just                             |
| 48:01      | going to go back to the on demand trigger.                        |
| 48:03      | What I really like about that trigger for smart rules             |
| 48:06      | is I have almost that exact setup, David,                         |
| 48:08      | but I don't have all my receipts export automatically             |
| 48:12      | to the folder for my accountants.                                 |
| 48:13      | I just do that when I need to export stuff for my accountant.     |
| 48:16      | So it's not continually doing that.                               |
| 48:19      | And that means that I can then just modify that export thing      |
| 48:23      | to, say, a specific folder or whatever it is.                     |
| 48:26      | And then it will go ahead and do the export as needed,            |
| 48:31      | because that basically just solves a whole bunch of the problems  |
| 48:37      | that I have.                                                      |
| 48:38      | But the vast majority of what I'm doing                           |
| 48:39      | is exactly the same every single time.                            |
| 48:42      | It's going to sort things into this and that                      |
| 48:45      | and then export it and bam, I'm done.                             |
| 48:47      | But it allows me to keep everything in place pretty much          |
| 48:51      | and then just tweak the tiny bits that need tweaking, which       |
| 48:54      | is one of the reasons why the smart rules are so useful,          |
| 48:57      | because you don't have to actually run them automatically         |
| 49:01      | if you don't want to.                                             |
| 49:02      | You can basically just use them as a saved magic wand of,         |
| 49:06      | now go do this magic that I need to do on these things.           |
| 49:08      | Thank you very much.                                              |
| 49:09      | Done, which I really like.                                        |
| 49:12      | Yeah, great.                                                      |
| 49:12      | I mean, it's just super powerful.                                 |
| 49:14      | And additional things you can do with the actions                 |
| 49:21      | is you can change aids.                                           |
| 49:24      | And I want to talk about tokens.                                  |
| 49:25      | Let's put a pin in the token concept for a minute,                |
| 49:28      | because I think I want to get through to one of the basics.       |
| 49:30      | But we haven't mentioned yet that [[DEVONthink]]                   |
| 49:33      | has a very strong built-in OCR engine.                            |
| 49:36      | I think they licensed the Abbey engine.                           |
| 49:39      | I'm not sure what their underlying engine is,                     |
| 49:41      | but their OCR is very good.                                       |
| 49:43      | But OCR then becomes an action.                                   |
| 49:45      | So one of the things I do is I have a smart rule on my inbox      |
| 49:50      | in [[DEVONthink]].                                                 |
| 49:51      | And it just looks for any files that don't have OCR applied,      |
| 49:54      | and it OCRs them.                                                 |
| 49:55      | So anything that's important enough for me                        |
| 49:58      | to throw into [[DEVONthink]], quite often, they're just PDF        |
| 50:01      | files that I got somewhere that don't necessarily                 |
| 50:04      | have an OCR layer.                                                |
| 50:05      | [[DEVONthink]] does it automatically for me                        |
| 50:07      | by just using a simple trigger, which the trigger is              |
| 50:10      | look for a file that doesn't have OCR, and an action.             |
| 50:13      | And the action is do OCR in the file                              |
| 50:17      | and run this every five minutes.                                  |
| 50:19      | So it's always looking at the inbox                               |
| 50:21      | to see if there's something new that needs an OCR on it.          |
| 50:23      | And it's just automatically handled for me.                       |
| 50:26      | Yes.                                                              |
| 50:26      | Yeah.                                                             |
| 50:27      | And I have to say that I find that very, very                     |
| 50:29      | useful for a number of different things                           |
| 50:33      | because you can reformat stuff using [[DEVONthink]].               |
| 50:39      | And so a classic example of this is emails.                       |
| 50:42      | You were mentioning email import earlier.                         |
| 50:44      | I use [[DEVONthink]] to convert that to a PDF                      |
| 50:47      | because I can import emails and then convert to PDF.              |
| 50:51      | It is, I will admit, not necessarily the prettiest                |
| 50:54      | PDF in the world because guess what?                              |
| 50:56      | A lot of emails just pretty badly                                 |
| 50:58      | formatted in the first place, to be honest.                       |
| 51:00      | But oh my gosh, is this so useful?                                |
| 51:03      | Because everything in there is exactly what I need it to be.      |
| 51:08      | I've got a PDF of an email that I can send to my accountant       |
| 51:11      | that's not an email file, which last time                         |
| 51:14      | I tried to send my account on one of those,                       |
| 51:16      | I got a reply going, what is this?                                |
| 51:18      | It doesn't work, which I replied, OK, I guess you don't have out. |
| 51:21      | Look, here's a PDF for you.                                       |
| 51:23      | And I just changed things to automatically convert that.          |
| 51:26      | But you can do that sort of thing with [[DEVONthink]],             |
| 51:30      | which just makes it even more powerful.                           |
| 51:33      | Yeah, and a PDF is kind of a more permanent record of it,         |
| 51:37      | in a sense.                                                       |
| 51:38      | It captures it in time.                                           |
| 51:39      | Well, yes, the EML has got other stuff in there as well,          |
| 51:43      | like which servers it came through and stuff,                     |
| 51:45      | which can be very useful.                                         |
| 51:46      | But it's for the vast majority of things                          |
| 51:48      | completely unnecessary in the grand scheme                        |
| 51:50      | of filing an automation.                                          |
| 51:51      | Yeah, so it's just really powerful.                               |
| 51:55      | So you've got a powerful list of triggers,                        |
| 51:57      | which gives you a lot of flexibility.                             |
| 51:59      | And then you've got a powerful list of actions,                   |
| 52:01      | which gives you a lot of power.                                   |
| 52:03      | And then the last step, which we've                               |
| 52:05      | been kind of dancing around, is then                              |
| 52:07      | you've got a very precise ability to trigger when that            |
| 52:10      | happens, whether it's occasionally on demand                      |
| 52:13      | or when you start up the app or before you sync                   |
| 52:16      | or every few minutes or every hour or every week.                 |
| 52:19      | Put all that together.                                            |
| 52:20      | And you've got a really powerful, rules-based automation          |
| 52:23      | system right in the application.                                  |
| 52:26      | Yes, I completely agree.                                          |
| 52:27      | And there's more we can do if you duplicate a rule,               |
| 52:29      | which we'll talk about in a moment.                               |
| 52:32      | This episode of The Automators is brought to you by LinkedIn      |
| 52:35      | Jobs.                                                             |
| 52:35      | Post a job for free by going to linkedin.com                      |
| 52:39      |/automators.                                                 |
| 52:40      | Spring is typically a time of renewal and growth,                 |
| 52:43      | both personally and professionally.                               |
| 52:45      | As your small business grows, LinkedIn Jobs                       |
| 52:47      | is here to make it easier to find the people you want             |
| 52:49      | to talk to faster and for free.                                   |
| 52:52      | So many businesses get wrecked by hiring the wrong people.        |
| 52:55      | It's just so important that you have the right person             |
| 52:58      | with the right skills, the right attitude,                        |
| 53:01      | and the ability to help you grow your team.                       |
| 53:03      | You can find that person with a free job post in minutes          |
| 53:06      | on LinkedIn Jobs to reach your network                            |
| 53:08      | and beyond to the world's largest professional network            |
| 53:11      | of over 810 million people.                                       |
| 53:14      | Then add your job and the purple hashtag                          |
| 53:16      | hiring frame to your LinkedIn profile                             |
| 53:18      | to spread the word that you're hiring                             |
| 53:20      | so your network can help you find the right people to hire.       |
| 53:23      | Simple tools like screening questions                             |
| 53:25      | make it easy to focus on candidates                               |
| 53:27      | with just the right skills and experience.                        |
| 53:29      | So you can quickly prioritise who you'd                           |
| 53:31      | like to interview and hire.                                       |
| 53:33      | It's why small businesses rated LinkedIn Jobs number one          |
| 53:36      | in delivering quality hires versus leading competitors.           |
| 53:40      | LinkedIn Jobs helps you find the candidates                       |
| 53:42      | you want to talk to faster.                                       |
| 53:44      | Did you know that every week nearly 40 million job seekers        |
| 53:47      | visit LinkedIn?                                                   |
| 53:48      | Post your job for free at linkedin.com/automators.          |
| 53:52      | That's linkedin.com/automators                              |
| 53:54      | to post your job for free terms and conditions do apply.          |
| 53:57      | Our thanks to LinkedIn Jobs for their support                     |
| 54:00      | of the automators and all of Relay FM.                            |
| 54:04      | OK, before the ad break, you tease this a little bit, Rose.       |
| 54:07      | What's on your mind?                                              |
| 54:08      | Well, one of the things that I do                                 |
| 54:09      | is I end up with lots of rules which are similar to each other.   |
| 54:13      | And this is not similar in the sense                              |
| 54:16      | of I should have one rule that applies to all these things        |
| 54:18      | and then apply these other things subsequently.                   |
| 54:21      | It's more a case of, for example, organising my receipts.         |
| 54:24      | I need to do it in a fairly similar manner,                       |
| 54:26      | but all the receipts come in different formats, right?            |
| 54:29      | If I download this PDF from here                                  |
| 54:31      | and this one's coming as an email and stuff like that,            |
| 54:33      | it's there's similarities, but there's not enough                 |
| 54:36      | to really share common logic.                                     |
| 54:38      | But I've already done some of the similar sort of stuff           |
| 54:41      | with something else.                                              |
| 54:43      | I can right click on a rule and duplicate it.                     |
| 54:45      | And one of the things that I find really helpful                  |
| 54:47      | after I've done that is the first thing I go and do,              |
| 54:50      | I add a new action and I drag it to the top                       |
| 54:52      | and I change it to cancel.                                        |
| 54:54      | So it doesn't actually do anything.                               |
| 54:56      | And then that allows me to go through and tweak everything.       |
| 54:59      | Just in case, just in case, you know, duplicate,                  |
| 55:02      | add a new action, set it to cancel, put that very first           |
| 55:05      | so that nothing's actually gonna happen.                          |
| 55:07      | And then you can go through and tweak all the things              |
| 55:09      | and change stuff so that, you know, okay.                         |
| 55:11      | So I was emailing categorising emails                             |
| 55:15      | from John at big fancy law firm                                   |
| 55:17      | to this particular legal case.                                    |
| 55:19      | Well, now I'm dealing with Susan at big fancy law firm,           |
| 55:22      | but I'm dealing with this particular legal case.                  |
| 55:25      | However, she's also emailing me about other stuff.                |
| 55:28      | And so I'm specifically looking for this case reference           |
| 55:32      | in these email subjects.                                          |
| 55:34      | And they actually need to be organised slightly differently       |
| 55:36      | because this is a different kind of case,                         |
| 55:38      | something like that.                                              |
| 55:39      | And that allows you to take something                             |
| 55:41      | that you've already done as your basis                            |
| 55:43      | because, you know, we all love reusing things                     |
| 55:45      | that is copy paste is a fabulous automation tool.                 |
| 55:48      | People should use it way more                                     |
| 55:49      | and duplicating those much the same, you know,                    |
| 55:51      | it creates a copy of it.                                          |
| 55:53      | And then you can, you know, go through                            |
| 55:55      | and do all of the other things.                                   |
| 55:57      | Cancel is also a very good action.                                |
| 55:58      | I should know if you want to temporarily disable a rule,          |
| 56:01      | if you're trying to like debug stuff and like,                    |
| 56:03      | okay, something is going weird somewhere,                         |
| 56:05      | go through and add cancel actions                                 |
| 56:07      | to all but one of your all smart rules,                           |
| 56:10      | like do this in any kind of system to be clear,                   |
| 56:12      | not just Evan think,                                              |
| 56:13      | but anytime you're having problems                                |
| 56:15      | with magic happening somewhere,                                   |
| 56:16      | cancel all the stuff, like disable it from happening              |
| 56:19      | and then like turn them back on one at a time                     |
| 56:22      | and watch for where the problem then happens.                     |
| 56:25      | And bam, you'll have found your problem.                          |
| 56:27      | But this is a very useful way to, you know,                       |
| 56:30      | prevent stuff from going wrong                                    |
| 56:32      | when you are in the middle of making more magic                   |
| 56:35      | by reusing your existing magic.                                   |
| 56:37      | Yeah, so just to kind of put an exclamation point on that,        |
| 56:41      | you know, duplicating rules is great,                             |
| 56:43      | but it is a little bit like dealing with dynamite                 |
| 56:47      | and you definitely want to remove the fuse                        |
| 56:49      | whenever you do that, right?                                      |
| 56:51      | The first thing you do when you duplicate                         |
| 56:52      | is make sure the rule isn't going to fire off                     |
| 56:55      | while you're making changes to it.                                |
| 56:56      | An alternative method that I like to use                          |
| 56:59      | is I talked earlier about the all versus any conditional          |
| 57:03      | at the beginning of smart rules                                   |
| 57:04      | where you can say if all of these are true, then do this.         |
| 57:08      | But there's a kind of a clever workaround.                        |
| 57:11      | And I cover this in detail in a very detailed video               |
| 57:14      | in the [[DEVONthink]] Field Guide                                  |
| 57:16      | if you've already got it or thinking about it.                    |
| 57:17      | But you can add conditional rules within rules.                   |
| 57:22      | So let's go back to that example of John                          |
| 57:25      | and what was it, Sally at the Fancy Law Firm, I forget.           |
| 57:28      | Susan, but yeah, same difference.                                 |
| 57:30      | All right, so normally you would say,                             |
| 57:32      | you would have the conditional,                                   |
| 57:33      | if all of the following are satisfied, then do this.              |
| 57:36      | So if and the trigger would be                                    |
| 57:38      | if it comes from John at Fancy Law Firm.                          |
| 57:41      | But then you could also just add another one says                 |
| 57:44      | if it comes from Susan at Fancy Law Firm                          |
| 57:47      | and change it to any.                                             |
| 57:50      | And so you say if any of the following are true,                  |
| 57:52      | it comes from John or Susan.                                      |
| 57:54      | And then suddenly if Sally shows up too,                          |
| 57:56      | you can add her to the list and the rule still applies.           |
| 57:59      | It all happens within one rule                                    |
| 58:01      | and you don't have to create multiple rules.                      |
| 58:04      | But then there's another like,                                    |
| 58:06      | and to me that would expand to also say,                          |
| 58:09      | well, what if the subject line                                    |
| 58:10      | has the name of the specific transaction?                         |
| 58:14      | It's the ACME contract.                                           |
| 58:15      | So if the subject line says ACME contract                         |
| 58:18      | or if it comes from John or Sally or Susan,                       |
| 58:21      | if any of those four are true, right?                             |
| 58:24      | But you can go a level deeper on that.                            |
| 58:26      | And if you hold down the option key                               |
| 58:28      | while adding additional triggers,                                 |
| 58:31      | you can add sub-conditionals.                                     |
| 58:33      | So like, let's say that John,                                     |
| 58:37      | I've got two cases that involve John suddenly.                    |
| 58:40      | So the trigger isn't accurate with John.                          |
| 58:42      | If it just puts everything into this one file,                    |
| 58:44      | it may be something on the other file                             |
| 58:46      | that's coming in for John.                                        |
| 58:47      | So then I can say the top conditional would be any                |
| 58:51      | of the following if it comes from Sally or Susan,                 |
| 58:55      | or if it has the ACME contract in it.                             |
| 58:58      | But then if it comes from John,                                   |
| 58:59      | it may be the ACME contract or it may be the XYZ contract.        |
| 59:02      | So I hit option and then the little plus sign.                    |
| 59:06      | And this is why I'm telling you to watch the videos guys.         |
| 59:08      | This is hard to explain on with audio,                            |
| 59:10      | but hit that option plus sign.                                    |
| 59:12      | Then you can say,                                                 |
| 59:13      | then if all of the following are true under the any.              |
| 59:16      | So basically you're adding additional conditionals inside.        |
| 59:21      | And so if it comes from John and it says ACME,                    |
| 59:24      | then put it in the ACME file.                                     |
| 59:26      | And then over on the XYZ one,                                     |
| 59:27      | I'd have a similar one that says,                                 |
| 59:29      | if it comes from John and it says XYZ,                            |
| 59:32      | then we'd go to the XYZ file.                                     |
| 59:34      | You just got to be aware of that                                  |
| 59:36      | and just kind of really put your programmer brain on              |
| 59:39      | about those conditionals as you create them.                      |
| 59:41      | And if you were intentional at the time,                          |
| 59:43      | you set those trigger series up, it will work great.              |
| 59:47      | But if you let your guard down                                    |
| 59:48      | and just kind of fly through them really quick                    |
| 59:50      | and you get an any where there should be an all,                  |
| 59:52      | you know, all hell breaks loose.                                  |
| 59:54      | So just be careful.                                               |
| 59:55      | But if you do that right, I do it all the time                    |
| 59:58      | and it's really not a problem.                                    |
| 59:59      | Yeah, yeah.                                                       |
| 01:00:00   | And this is really useful.                                        |
| 01:00:01   | So say for example, John and Susan share an assistant, Jack.      |
| 01:00:05   | So even if you're dealing exclusively with John                   |
| 01:00:07   | on one case and Susan on another case,                            |
| 01:00:08   | Jack might be emailing you about both cases                       |
| 01:00:10   | to, you know, organise a meeting or something like that.          |
| 01:00:13   | And you'll want to classify that appropriately.                   |
| 01:00:16   | So then you can say if it comes from John                         |
| 01:00:19   | or it comes from Jack and has this subject                        |
| 01:00:22   | or you can say, okay, if it contains this in the subject          |
| 01:00:25   | and it comes from John or Jack                                    |
| 01:00:26   | and you'll need to figure out which one is most appropriate.      |
| 01:00:28   | And this is why I like adding this cancel action.                 |
| 01:00:33   | Because to be clear, I should note,                               |
| 01:00:35   | you can turn off a smart rule in Devon thing                      |
| 01:00:38   | and then it changes colour in the sidebar                          |
| 01:00:41   | to be a lighter gray by unchecking the checkbox                   |
| 01:00:43   | next to perform the following actions.                            |
| 01:00:45   | And I do that and I add the cancel                                |
| 01:00:48   | because I moved the cancel down in action every time              |
| 01:00:50   | I've reviewed it and changed it or modified it                    |
| 01:00:53   | or added stuff to it.                                             |
| 01:00:55   | So that then I know, okay, this is where I'm up to.               |
| 01:00:57   | This is especially useful if I'm quite busy                       |
| 01:00:59   | and moving back and forth between different things                |
| 01:01:02   | and tackling multiple problems at the same time                   |
| 01:01:04   | as I want to do when dealing, especially with taxes.              |
| 01:01:06   | I don't know what it is about taxes                               |
| 01:01:08   | that I often end up going right.                                  |
| 01:01:09   | Now I need to go fix this thing and digging that out              |
| 01:01:12   | and sorting that and then coming back                             |
| 01:01:13   | to what it is I was on.                                           |
| 01:01:16   | So by having the cancel rule, which I just drag down              |
| 01:01:18   | as I go, then I know where I'm up to                              |
| 01:01:21   | and then anything after that point                                |
| 01:01:22   | which I've not finished sorting out is gone                       |
| 01:01:26   | or not gonna happen at the very least, which,                     |
| 01:01:29   | and then the final step is,                                       |
| 01:01:31   | turn the checkbox back on afterwards.                             |
| 01:01:33   | But I find that to be incredibly useful as a tool                 |
| 01:01:37   | along with things like changing the creation                      |
| 01:01:40   | or modification date of documents.                                |
| 01:01:43   | Because especially if you're importing email,                     |
| 01:01:45   | you know exactly when that email was sent                         |
| 01:01:48   | and modified because you can't modify an email                    |
| 01:01:51   | after you've sent it.                                             |
| 01:01:52   | Like technically you can modify your local copy                   |
| 01:01:54   | of the email, but that does not actually change                   |
| 01:01:56   | what was sent.                                                    |
| 01:01:58   | And so you can change that to have those dates.                   |
| 01:02:02   | And you can also set a document date,                             |
| 01:02:05   | which is metadata on the document to say,                         |
| 01:02:08   | hey, this is the date of the document,                            |
| 01:02:10   | which could be very useful if, for example,                       |
| 01:02:13   | I don't know, you're preparing a birthday bonanza,                |
| 01:02:16   | series of things, you can have a document date                    |
| 01:02:18   | of the birthday.                                                  |
| 01:02:19   | And so you know that everything is related to all of that         |
| 01:02:22   | or whatever it is that you need to do.                            |
| 01:02:24   | But I find this to be a very useful combination                   |
| 01:02:29   | of things in [[DEVONthink]].                                       |
| 01:02:32   | Yeah, totally agree.                                              |
| 01:02:33   | And the flip side of these power tools is on the actions.         |
| 01:02:37   | And I wanna talk a bit about tokens                               |
| 01:02:39   | because we've talked about actions,                               |
| 01:02:41   | like you can rename a file,                                       |
| 01:02:43   | but what I didn't mention was the idea of tokens.                 |
| 01:02:46   | If you are a [[Hazel]] power user, you know about tokens,             |
| 01:02:50   | well, they've got them in [[DEVONthink]] too.                      |
| 01:02:53   | And this means when you go to, for instance,                      |
| 01:02:55   | set a name of a file,                                             |
| 01:02:58   | that's the one that I think people                                |
| 01:03:00   | probably use the most or change the name.                         |
| 01:03:02   | If you hit the, there's a little plus sign                        |
| 01:03:05   | next to the name field, and you can insert                        |
| 01:03:10   | what they call placeholders.                                      |
| 01:03:11   | Actually, it's not plus sign, you right click,                    |
| 01:03:13   | and then it says insert placeholder,                              |
| 01:03:14   | but they have so many tokens you can use.                         |
| 01:03:18   | And these are things where the program puts data in for you       |
| 01:03:22   | that it pulls out of itself.                                      |
| 01:03:24   | So the name of the file, the aliases,                             |
| 01:03:28   | we didn't, you know, aliases isn't really automation related,     |
| 01:03:30   | but it's a [[DEVONthink]] cool thing you can do.                   |
| 01:03:33   | You can put the kind of file, the link, the tags,                 |
| 01:03:37   | so you can literally add tags to the name automatically.          |
| 01:03:41   | You can add index numbers, counters.                              |
| 01:03:45   | You can pull amounts out of the document                          |
| 01:03:47   | like a number on an invoice,                                      |
| 01:03:49   | like the cost and then add it to the name.                        |
| 01:03:53   | It has a Bates numbering system.                                  |
| 01:03:56   | If you've got it in a group,                                      |
| 01:03:57   | you can add the group name to the file name.                      |
| 01:04:01   | So if you've got the correspondence from John                     |
| 01:04:04   | and we'll call it opposing council correspondence,                |
| 01:04:07   | it'll add that to the file name.                                  |
| 01:04:09   | And all that stuff is done with this token system,                |
| 01:04:13   | which you just right click and say insert placeholder.            |
| 01:04:15   | I always felt like this is like buried in [[DEVONthink]].          |
| 01:04:18   | I think a lot of people use [[DEVONthink]] for rules               |
| 01:04:20   | and don't even realise that stuff is there.                       |
| 01:04:23   | Postal code, tab, line breaks.                                    |
| 01:04:25   | And then on top of all that,                                      |
| 01:04:28   | they've got a whole bunch of date stuff you can do.               |
| 01:04:31   | And so if you wanna get the current date                          |
| 01:04:35   | that you're doing the rule, you can add it.                       |
| 01:04:37   | If you wanna get the date, it was added to your library           |
| 01:04:40   | because there's always a problem with documents                   |
| 01:04:42   | that you add to something like [[DEVONthink]].                     |
| 01:04:44   | It's like, if you add it                                          |
| 01:04:45   | and then you put the date in the name,                            |
| 01:04:47   | the date it's gonna use often is the date                         |
| 01:04:50   | that the rule is run, not the date the file was created.          |
| 01:04:53   | So like using the addition date helps,                            |
| 01:04:56   | but the creation date is even better.                             |
| 01:04:58   | And a lot of times you can go and get the creation date out.      |
| 01:05:01   | You can even have it look at the file                             |
| 01:05:02   | and try and find the date and put it.                             |
| 01:05:05   | So it's just really, and I think I've covered like 50%            |
| 01:05:12   | of the available tokens in this long rant.                        |
| 01:05:15   | So if you use [[DEVONthink]],                                      |
| 01:05:18   | please figure out placeholders                                    |
| 01:05:20   | because it's gonna really up your game.                           |
| 01:05:23   | Yes, yeah, it really is.                                          |
| 01:05:24   | And I should note, I mentioned earlier custom metadata.           |
| 01:05:28   | And I feel like this is worth talking about here again            |
| 01:05:30   | because custom metadata is essentially,                           |
| 01:05:33   | [[DEVONthink]] is a database.                                      |
| 01:05:34   | You're adding more fields to your documents                       |
| 01:05:37   | and things inside of the database                                 |
| 01:05:39   | so that you can sort them even better in various ways.            |
| 01:05:44   | And so for example, one of the things that I use [[DEVONthink]]    |
| 01:05:47   | for is helping organise my receipts                               |
| 01:05:50   | and other information for Texas.                                  |
| 01:05:52   | And this means that I need to know                                |
| 01:05:54   | how much something was, when did I purchase it                    |
| 01:05:56   | and who did I purchase it from                                    |
| 01:05:57   | and which business did I purchase under and so on.                |
| 01:06:00   | Those are the cost and the date.                                  |
| 01:06:03   | Those are standard metadata fields.                               |
| 01:06:05   | The currency that I purchased it in,                              |
| 01:06:08   | not such a standard field,                                        |
| 01:06:10   | but I added it because I could.                                   |
| 01:06:12   | And now I have the option to have currency.                       |
| 01:06:16   | And if you open preferences,                                      |
| 01:06:18   | you'll probably want to do this on the Mac.                       |
| 01:06:20   | I don't think you can actually access this                        |
| 01:06:22   | and change this on iOS.                                           |
| 01:06:24   | [[DEVONthink]] to Go is a very useful tool,                        |
| 01:06:26   | but it is very much, I'm taking my data with me                   |
| 01:06:29   | rather than I am doing all of the magic,                          |
| 01:06:31   | but you can add a new field to this                               |
| 01:06:35   | and you can specify what kind of field it is as well.             |
| 01:06:39   | So it's a Boolean, which means checkbox, right?                   |
| 01:06:41   | An integer number, so a whole number or a decimal number.         |
| 01:06:44   | You can have single line or multi-line text,                      |
| 01:06:47   | identifiers, rich text, URLs of specific kinds.                   |
| 01:06:50   | So say for example, you need to organise stuff                    |
| 01:06:54   | that's come from certain different kinds of internal websites     |
| 01:06:58   | and you can have an internal web link                             |
| 01:06:59   | as well as the public web link for things.                        |
| 01:07:03   | Item links are another one, dates, there's also sets.             |
| 01:07:08   | Sets are choices.                                                 |
| 01:07:09   | So you can have six or seven different things.                    |
| 01:07:12   | So I could have a set for which podcast is this?                  |
| 01:07:15   | So that I can organise things by podcast                          |
| 01:07:20   | and then there's countries and languages                          |
| 01:07:21   | which pre-populates with a list of different things               |
| 01:07:24   | obviously countries or languages                                  |
| 01:07:26   | depending on which one you choose.                                |
| 01:07:27   | But being able to add custom metadata definitions                 |
| 01:07:32   | means that you can use those to find documents                    |
| 01:07:34   | and then you can update those fields                              |
| 01:07:37   | and then use them to name things.                                 |
| 01:07:39   | And this is something that I have done                            |
| 01:07:42   | for a number of different things.                                 |
| 01:07:44   | So texts, how much text was paid on something                     |
| 01:07:48   | if I've had to pay tax on something,                              |
| 01:07:50   | that is a field that I have added.                                |
| 01:07:53   | And when I import my IKEA receipts,                               |
| 01:07:56   | sorry, not my IKEA receipts, my [[Apple]] receipts,                   |
| 01:07:59   | it scans the text for the regular expression,                     |
| 01:08:01   | VAT charged at 20% and that looks for any number                  |
| 01:08:05   | of literally any characters unfortunately                         |
| 01:08:08   | because the email, it seems to have changed format                |
| 01:08:11   | a little bit and it should just be white space                    |
| 01:08:12   | but that doesn't always work.                                     |
| 01:08:14   | That looks for the pounds symbol,                                 |
| 01:08:16   | the UK British pound symbol,                                      |
| 01:08:19   | a number of numbers, a dot,                                       |
| 01:08:21   | and then a number of numbers again.                               |
| 01:08:23   | And the backslash E, which is a number plus backslash,            |
| 01:08:28   | full stop backslash D plus,                                       |
| 01:08:30   | that is the regular expression for the numbers,                   |
| 01:08:33   | dot numbers, okay, so the amount of VAT charged.                  |
| 01:08:37   | I put that in brackets                                            |
| 01:08:38   | and then I can change the VAT to backslash two                    |
| 01:08:43   | and that is the group that I've picked                            |
| 01:08:45   | from that information                                             |
| 01:08:47   | because that basically just fixes it and it's amazing.            |
| 01:08:52   | And I can also scan the text for the amount                       |
| 01:08:56   | and this is something that I think                                |
| 01:08:58   | is really, really useful, the scan text feature                   |
| 01:09:01   | inside of DEVONthink allows you to scan text                      |
| 01:09:03   | for string, date, amount or regular expression.                   |
| 01:09:07   | And so you can scan for specific information                      |
| 01:09:10   | and if you know, for example, bank statements from your bank      |
| 01:09:13   | always have the word statement date for the date,                 |
| 01:09:16   | then you can put a prefix in there.                               |
| 01:09:18   | And if you look, it says prefix, star, suffix.                    |
| 01:09:22   | So if you know that the thing you're looking for                  |
| 01:09:26   | that you want to put in this particular field                     |
| 01:09:28   | always comes between this word and that word,                     |
| 01:09:33   | then you put this, star, that                                     |
| 01:09:36   | and then that bit that you scanned is a group.                    |
| 01:09:39   | And every time you scan, that creates more groups.                |
| 01:09:42   | And so if I scan three things,                                    |
| 01:09:45   | the first one, backslash one, backslash two, backslash three      |
| 01:09:48   | and then those brackets help you inside of that.                  |
| 01:09:51   | And that is just so useful in regards to organising               |
| 01:09:56   | and categorising things and getting data that you need.           |
| 01:09:59   | Because I don't know about anybody else                           |
| 01:10:01   | but I hate going through a massive pile of receipts               |
| 01:10:04   | looking, okay, like, did this one have tax on it?                 |
| 01:10:07   | Yes, how much tax was it?                                         |
| 01:10:09   | Okay, write that into a spreadsheet.                              |
| 01:10:10   | No, I have DEVONthink do as much of this magic as possible.       |
| 01:10:15   | And then I can just look at the receipts                          |
| 01:10:16   | and I can easily instantly see                                    |
| 01:10:18   | which ones don't have the AT on them,                             |
| 01:10:20   | which ones don't have the tax charged.                            |
| 01:10:22   | And I can check them.                                             |
| 01:10:25   | And if they aren't supposed to have tax                           |
| 01:10:26   | then I've got a special checkbox for that.                        |
| 01:10:29   | And then I can just, you know,                                    |
| 01:10:30   | find the ones that I do need to deal with.                        |
| 01:10:32   | And it does make my life much easier to handle.                   |
| 01:10:35   | And then I should note my receipt one for email stuff.            |
| 01:10:38   | It's specifically convert and continue to PDF paginated.          |
| 01:10:41   | The convert and continue is important                             |
| 01:10:44   | because then you're working with your new document,               |
| 01:10:45   | which of course is something that makes life much easier          |
| 01:10:50   | when you need that sort of thing.                                 |
| 01:10:52   | But there is so much you can do with the metadata.                |
| 01:10:54   | I highly recommend taking a look at that.                         |
| 01:10:57   | It is a power user feature.                                       |
| 01:10:59   | Even if you're not a power user, go poke at it.                   |
| 01:11:02   | Then ignore it for as long as you need until you go,              |
| 01:11:04   | I really wish that most of my documents                           |
| 01:11:06   | had this field, bam, a custom metadata.                           |
| 01:11:09   | This episode of the automators podcast                            |
| 01:11:13   | is brought to you by Doppler,                                     |
| 01:11:15   | sync environment variables at scale with Doppler.                 |
| 01:11:18   | In software development,                                          |
| 01:11:19   | secrets are private pieces of information                         |
| 01:11:22   | that act as keys to unlock protected resources                    |
| 01:11:25   | or sensitive information.                                         |
| 01:11:27   | So you can imagine the stressful days                             |
| 01:11:29   | of configuring, managing and sharing secrets                      |
| 01:11:31   | across different teams and clouds.                                |
| 01:11:33   | While those days are over, introducing Doppler,                   |
| 01:11:36   | the first universal secrets platform                              |
| 01:11:39   | it enables developers to automate the pain away                   |
| 01:11:42   | of managing secrets and ENV files,                                |
| 01:11:45   | which are a type of hidden file used                              |
| 01:11:46   | when working with secrets.                                        |
| 01:11:48   | Doppler is your team's central source of truth                    |
| 01:11:51   | for secrets and app configuration                                 |
| 01:11:53   | across all environments and clouds.                               |
| 01:11:56   | Whether your secrets are in Docker, AWS, Vercel                   |
| 01:11:59   | or anywhere else, Doppler works where you work.                   |
| 01:12:02   | And as your stack evolves, Doppler remains simple.                |
| 01:12:06   | More than 11,000 customers across all company sizes               |
| 01:12:09   | from startups to enterprises use Doppler.                         |
| 01:12:12   | So they can keep their secrets and app configuration              |
| 01:12:14   | in sync across devices, environments and team members.            |
| 01:12:18   | So say goodbye to dot ENV files,                                  |
| 01:12:20   | set up Doppler for your team in less than four minutes,           |
| 01:12:23   | sign up via Doppler slash L/automators                      |
| 01:12:27   | and that's all in lowercase.                                      |
| 01:12:28   | Once again, that's Doppler.com/L/automators,          |
| 01:12:32   | all lowercase.                                                    |
| 01:12:33   | Go there now and check it out.                                    |
| 01:12:35   | Our thanks to Doppler for their support                           |
| 01:12:36   | of the automators and all of relay FM.                            |
| 01:12:40   | So we've gone through rules and it is crazy                       |
| 01:12:44   | and you can do almost anything with rules and Devon thing         |
| 01:12:46   | but there are some additional stuff                               |
| 01:12:47   | where they're taking advantage                                    |
| 01:12:48   | of the [[artificial intelligence]]                                    |
| 01:12:49   | and these are some rules                                          |
| 01:12:51   | what I consider to be unique to [[DEVONthink]]                       |
| 01:12:53   | I've never seen them anywhere else before.                        |
| 01:12:55   | And my favourite is the classified tool                            |
| 01:12:57   | and it's similar to the earlier group,                            |
| 01:13:01   | similar items tool I was talking about                            |
| 01:13:03   | but it's better and more powerful.                                |
| 01:13:05   | And it's accessed in the inspector                                |
| 01:13:09   | and what it does is it uses the [[DEVONthink]]                       |
| 01:13:12   | [[artificial intelligence]] and it will look at a file                |
| 01:13:16   | and say, I think this belongs there.                              |
| 01:13:19   | You know, it'll figure out and it's for grouping files.           |
| 01:13:22   | I'm sorry, it's for putting files into groups more than           |
| 01:13:25   | tagging and but as you teach it,                                  |
| 01:13:29   | it gets really smart at this stuff.                               |
| 01:13:31   | Like if I was talking about earlier about that case,              |
| 01:13:33   | if I started putting emails and documents                         |
| 01:13:36   | that had the ACMI contract data                                   |
| 01:13:38   | and a [[DEVONthink]] would be looking at that                        |
| 01:13:40   | and as I did it two or three times,                               |
| 01:13:43   | it would increasingly start to realise,                           |
| 01:13:45   | oh, wait a second, anything related to this case                  |
| 01:13:48   | he wants in this group.                                           |
| 01:13:50   | And if you go in the classified tool, it'll show you,             |
| 01:13:53   | hey, this is where I think it belongs                             |
| 01:13:54   | and you can just hit a keyboard shortcut and drop it in.          |
| 01:13:57   | If it's wrong, you can search out the proper place for it         |
| 01:14:00   | and then it'll remember that going forward.                       |
| 01:14:02   | It kind of reminds me of how you're like when [[Alfred]]              |
| 01:14:04   | or [[LaunchBar]] starts to recognise that anytime I type OF,          |
| 01:14:08   | I want OmniFocus or the app starts to pay attention               |
| 01:14:13   | to how you act and then it starts giving you                      |
| 01:14:16   | what it thinks that you want the most.                            |
| 01:14:18   | And the more you use [[DEVONthink]],                                 |
| 01:14:20   | the better the classified tool gets.                              |
| 01:14:22   | And I find this just, it's like the best kind of automation       |
| 01:14:27   | in the sense that you're not preparing the rules                  |
| 01:14:29   | or writing the underline algorithm.                               |
| 01:14:32   | The application is building that algorithm itself                 |
| 01:14:35   | just based on the way you use the app.                            |
| 01:14:38   | Yes, yeah, I should note that you can get to the classified       |
| 01:14:41   | just through the right click menu on any document                 |
| 01:14:43   | or file in [[DEVONthink]].                                           |
| 01:14:45   | If you right click then underneath group items,                   |
| 01:14:49   | right above batch process and apply rules,                        |
| 01:14:51   | there's classified as well.                                       |
| 01:14:52   | And it is just a great kind of magic                              |
| 01:14:56   | and something else with the classified tool.                      |
| 01:14:59   | If you have multiple [[DEVONthink]] databases,                       |
| 01:15:01   | you can cross the streams.                                        |
| 01:15:03   | Now, it usually goes best if there's don't cross the streams.     |
| 01:15:05   | That's probably what you're aiming to do                          |
| 01:15:06   | with multiple databases, especially if you've got                 |
| 01:15:09   | a separate work one to a personal one                             |
| 01:15:11   | and things like that.                                             |
| 01:15:12   | Because especially looking at the sync options,                   |
| 01:15:15   | if you've got secure work data                                    |
| 01:15:17   | that shouldn't be going various places,                           |
| 01:15:19   | you can have an entirely local [[DEVONthink]] database               |
| 01:15:22   | that's synced over your local network.                            |
| 01:15:24   | So it's not even like going out to the internet                   |
| 01:15:27   | or you can sync through [[Dropbox]], iCloud, et cetera.               |
| 01:15:31   | But you can say, hey, do I wanna classify this                    |
| 01:15:34   | based on content, based on tags?                                  |
| 01:15:36   | And yes or no to current database only.                           |
| 01:15:39   | And that current database only flag could be very useful          |
| 01:15:42   | if you do just wanna classify things                              |
| 01:15:44   | within your current database or if you've got multiple,           |
| 01:15:47   | then you can potentially just move things around.                 |
| 01:15:50   | So if, for example, all of,                                       |
| 01:15:52   | I don't know, your finance documents                              |
| 01:15:53   | go on one particular database                                     |
| 01:15:55   | and all of your manuals for things go in another database         |
| 01:15:57   | and then the third database is for everything else.               |
| 01:16:00   | If you've got something that looks like a manual                  |
| 01:16:01   | in your everything else database,                                 |
| 01:16:02   | then it'll probably,                                              |
| 01:16:04   | if you've got the other database open,                            |
| 01:16:06   | suggest moving it to the other database.                          |
| 01:16:09   | But of course, it's up to you                                     |
| 01:16:11   | and how you structure things.                                     |
| 01:16:12   | Personally, I've gone for folders                                 |
| 01:16:14   | inside of one main database                                       |
| 01:16:16   | for the vast majority of my things,                               |
| 01:16:18   | but being able to move it somewhere else                          |
| 01:16:21   | as part of the classify tool                                      |
| 01:16:23   | is really very useful when you have that system.                  |
| 01:16:27   | Yeah, I just find it, it's an amazing tool.                       |
| 01:16:30   | And if you've got the typical thing                               |
| 01:16:32   | where you just scanned a bunch of documents                       |
| 01:16:34   | or got a bunch of stuff given to you                              |
| 01:16:36   | and thrown into your inbox, just open classify.                   |
| 01:16:41   | And the first few times, the first few sessions,                  |
| 01:16:44   | you're gonna probably have to tell it a few times.                |
| 01:16:46   | And no, not that one, but this one.                               |
| 01:16:49   | But then it gets to a point where it just works.                  |
| 01:16:52   | I mean, it is, like I said earlier,                               |
| 01:16:55   | it's just the best kind of automation.                            |
| 01:16:58   | When you actually don't write any automation,                     |
| 01:17:01   | the software does it for you.                                     |
| 01:17:02   | I mean, that's what the hope for the future is, right?            |
| 01:17:04   | That 20 years from now,                                           |
| 01:17:07   | you're not gonna be writing triggers and actions.                 |
| 01:17:10   | The computer would be smart enough                                |
| 01:17:11   | to intuitively understand what you want it to do.                 |
| 01:17:16   | Yes, definitely.                                                  |
| 01:17:17   | And while you're over in the sidebar,                             |
| 01:17:20   | that's where the classify tool appears,                           |
| 01:17:23   | you know, you can also have a poke around                         |
| 01:17:27   | and look for, look at some of the other options                   |
| 01:17:30   | that you've got there as well,                                    |
| 01:17:31   | because that's other ways in which you can organise               |
| 01:17:34   | your database or look at information.                             |
| 01:17:37   | There's even a graph view, which is frequency                     |
| 01:17:40   | versus, oh, I've forgotten the other option                       |
| 01:17:43   | of how frequently you access that particular file.                |
| 01:17:46   | But you can also, over here,                                      |
| 01:17:48   | this is something we've missed, David.                            |
| 01:17:49   | Reminders, I forgot to talk about reminders and [[DEVONthink]].      |
| 01:17:54   | And I can't believe it, because that is so useful.                |
| 01:17:57   | So say you have a regular maintenance task                        |
| 01:17:59   | that you need to do.                                              |
| 01:18:01   | So for example, maintaining your lawnmower,                       |
| 01:18:03   | but your lawnmower can be a bit tricky to disassemble             |
| 01:18:05   | and you always end up going and searching                         |
| 01:18:07   | for the manual to do it.                                          |
| 01:18:08   | You can actually just straight up add a reminder                  |
| 01:18:10   | to the manual for that document.                                  |
| 01:18:13   | So you get reminded once today, tomorrow,                         |
| 01:18:17   | in two days and a week,                                           |
| 01:18:18   | where you can be reminded our regular basis                       |
| 01:18:20   | hourly, daily, weekly, monthly, yearly,                           |
| 01:18:22   | and then you can go through and set up your complex               |
| 01:18:26   | or however frequently you want this to come up.                   |
| 01:18:30   | And so you can say, if you select monthly, for example,           |
| 01:18:34   | you start by specifying a date and time,                          |
| 01:18:36   | the next time you want this to happen,                            |
| 01:18:37   | then you can say, okay, every X months,                           |
| 01:18:40   | each on the 11th, for example,                                    |
| 01:18:43   | or on the first day, first weekday,                               |
| 01:18:47   | first Saturday, Sunday, whichever day of the week it is,          |
| 01:18:51   | first weekend, or there's also the other option,                  |
| 01:18:54   | second, third, fourth, fifth, last and so on,                     |
| 01:18:56   | allowing you to have the document pop up in your reminders,       |
| 01:19:00   | which is a smart group that you have for things like that.        |
| 01:19:04   | So, or a smart rule, it's an automatic smart rule.                |
| 01:19:08   | And you can add an alarm as well,                                 |
| 01:19:10   | which will even do things for you,                                |
| 01:19:12   | like play a sound or add it to your reading list                  |
| 01:19:14   | or open it or run [[JavaScript]] or [[AppleScript]]                      |
| 01:19:17   | or an external script for you, all sorts of things.               |
| 01:19:21   | But yeah, there's lots of good stuff in the sidebar               |
| 01:19:24   | along with the classify tool, which is definitely amazing.        |
| 01:19:27   | The first few times I used it, I was like,                        |
| 01:19:29   | what black magic is this?                                         |
| 01:19:30   | And just in case there's something that you want to exclude       |
| 01:19:33   | from the classification, that's in the very first tab             |
| 01:19:36   | in the sidebar where if you look under the generic segment        |
| 01:19:41   | in there, right at the bottom, exclude from classification,       |
| 01:19:45   | there's also options to exclude things from the search            |
| 01:19:47   | or wiki-linking or see also or tagging or whatever it is         |
| 01:19:51   | if you wanted or need to.                                         |
| 01:19:53   | So that can be very useful if you need that.                      |
| 01:19:56   | But I haven't yet found a need to exclude anything                |
| 01:19:59   | from the classification, David.                                   |
| 01:20:01   | I don't know if you've had an instance of that.                   |
| 01:20:03   | No, I haven't really come across it,                              |
| 01:20:04   | but I really look at classification.                              |
| 01:20:06   | This is a tool that I put to use.                                 |
| 01:20:08   | And I don't, especially now that I'm out of lawyer,               |
| 01:20:12   | I have even less reason to be too worried about that.             |
| 01:20:14   | But it's very powerful.                                           |
| 01:20:15   | And then the other thing that's kind of unique                    |
| 01:20:18   | to DEVONthink is it has a whole document automation              |
| 01:20:20   | system built in.                                                  |
| 01:20:23   | Yeah, I mean, we've been talking about                            |
| 01:20:24   | automating documents the entire show.                             |
| 01:20:26   | So I think you might need to give people                          |
| 01:20:27   | some more detail there.                                           |
| 01:20:28   | Yeah, so it's like they're document templates.                    |
| 01:20:31   | So an example would be like if you,                               |
| 01:20:35   | like one of the built in ones is like the day                     |
| 01:20:37   | in review and it's a document that generates                      |
| 01:20:40   | and it puts a list of questions and things                        |
| 01:20:43   | that you would do for your day in review                          |
| 01:20:44   | and you can modify the template.                                  |
| 01:20:47   | It can also create a populated set of groups or folders.          |
| 01:20:52   | Like if you want folders, you know, one through 31.               |
| 01:20:56   | So like if you were doing a GTD system                            |
| 01:21:00   | where you'd have a folder for each day                            |
| 01:21:02   | where you're copying documents to,                                |
| 01:21:03   | like you could generate the folders for you.                      |
| 01:21:07   | It could do a Dewey decimal index system.                         |
| 01:21:09   | Like no matter how you want to like put things together,          |
| 01:21:12   | it can do that for you.                                           |
| 01:21:14   | And you can create your own document templates.                   |
| 01:21:16   | So if you've got things you do all the time                       |
| 01:21:19   | and anyway, I haven't really mentioned DEVONthink                |
| 01:21:21   | as a note taking system,                                          |
| 01:21:23   | but that's not really the purpose of this automation show.        |
| 01:21:25   | But there's one there and you can automate the process            |
| 01:21:29   | of creating those notes.                                          |
| 01:21:31   | And then if you want to take it to the next level,                |
| 01:21:33   | you're going to have it execute [[AppleScript\|AppleScripts]]                     |
| 01:21:35   | to do like fill in fields at the same time.                       |
| 01:21:39   | So it can grab data from elsewhere                                |
| 01:21:41   | in your DEVONthink database or query you for like,               |
| 01:21:45   | who's the name of the person at this meeting or whatever.         |
| 01:21:48   | And it will fill that in for you.                                 |
| 01:21:50   | So there's a whole document template system,                      |
| 01:21:54   | which is an automation system also built in.                      |
| 01:21:57   | So it's like every few years,                                     |
| 01:22:00   | DEVONthink just goes another direction with automation           |
| 01:22:02   | to make it even more powerful.                                    |
| 01:22:04   | That's why it needed a whole episode today.                       |
| 01:22:06   | Yeah, exactly.                                                    |
| 01:22:07   | And one of the things I really like as well.                      |
| 01:22:09   | So going back to my example of the taxes,                         |
| 01:22:15   | if I select documents in DEVONthink                              |
| 01:22:18   | and I go to the tools menu,                                       |
| 01:22:19   | one of the options is create an expense report.                   |
| 01:22:22   | So going back to the cost and the date fields                     |
| 01:22:23   | that I was talking about earlier,                                 |
| 01:22:24   | can I actually create an expense report                           |
| 01:22:26   | for you based on that information?                                |
| 01:22:28   | And that's just something that's built in.                        |
| 01:22:31   | There's also creating table of contents, metadata overviews,      |
| 01:22:35   | summarising highlights or mentions,                               |
| 01:22:37   | and even doing things like merging documents.                     |
| 01:22:40   | So it really can go completely nuts on these things               |
| 01:22:45   | if you want with all of that sort of thing,                       |
| 01:22:49   | just to add as much or little data as needed                      |
| 01:22:53   | to help you find things and organise stuff as needed,             |
| 01:22:58   | which is truly powerful.                                          |
| 01:23:00   | Yeah.                                                             |
| 01:23:01   | So DEVONthink, if you like to automate,                          |
| 01:23:04   | you're going to like DEVONthink, it does everything.             |
| 01:23:08   | And we've given you a lot to think about today.                   |
| 01:23:11   | This one is a more technical episode                              |
| 01:23:14   | than we've covered in past,                                       |
| 01:23:16   | but we got into the nitty-gritty                                  |
| 01:23:18   | because you kind of have to understand                            |
| 01:23:19   | what you can do with it.                                          |
| 01:23:21   | Like Rose said, they've got an excellent form at DEVONthink.     |
| 01:23:24   | If you want my field guide and you get $10 off,                   |
| 01:23:27   | just remember that code that we're gonna use.                     |
| 01:23:29   | I'm gonna put it up today, Hooray Automators,                     |
| 01:23:32   | and it's gonna run for a few weeks                                |
| 01:23:34   | after this episode publishes, you get $10 off.                    |
| 01:23:36   | And man, if you want a better way to manage files                 |
| 01:23:41   | and you want to automate that,                                    |
| 01:23:42   | DEVONthink is the way to go.                                     |
| 01:23:45   | Yeah, yeah.                                                       |
| 01:23:46   | And if somehow DEVONthink doesn't cover what you need,           |
| 01:23:49   | I should mention scripting support.                               |
| 01:23:51   | Of course it has scripting support                                |
| 01:23:52   | and it comes with a whole bunch of scripts built in,              |
| 01:23:56   | like a daily backup archive or exporting to bookends              |
| 01:23:59   | for referencing systems, rotating images,                         |
| 01:24:03   | all sorts of things.                                              |
| 01:24:05   | There is just so much that you can do,                            |
| 01:24:07   | even add something as a to do to OmniFocus reminders,             |
| 01:24:11   | the hit list, things for your calendar.                           |
| 01:24:13   | It's just all right there.                                        |
| 01:24:15   | And those are the example scripts                                 |
| 01:24:17   | that you can just get from the DEVONthink folks.                 |
| 01:24:20   | And then of course people have written them                       |
| 01:24:22   | so you can just steal those.                                      |
| 01:24:23   | So I suspect we're gonna have quite a few people                  |
| 01:24:26   | automating a whole bunch of documents pretty soon, David.         |
| 01:24:29   | Hopefully they figure out how to automate the origami swans       |
| 01:24:32   | because that's the one thing I have not figured out               |
| 01:24:33   | how to do with the DEVONthink.                                   |
| 01:24:35   | And I haven't asked their support yet.                            |
| 01:24:37   | Their support was very responsive last time.                      |
| 01:24:39   | I pinged them with a question.                                    |
| 01:24:40   | So maybe I should try, but I don't know how well                  |
| 01:24:43   | it's gonna do with origami swans.                                 |
| 01:24:45   | Well, I think that one of the things                              |
| 01:24:47   | we didn't really mention in the show,                             |
| 01:24:49   | it is a small development team,                                   |
| 01:24:50   | but they are very automation,                                     |
| 01:24:52   | they're enthusiasts of automation.                                |
| 01:24:54   | So they keep bringing things.                                     |
| 01:24:55   | And the reason why there's so many great [[AppleScript\|AppleScripts]],           |
| 01:24:58   | I'm convinced is every time somebody writes an email              |
| 01:25:01   | to them asking for some feature,                                  |
| 01:25:03   | they'll just, they just write and publish an [[AppleScript]]         |
| 01:25:06   | to add the feature in essence via [[AppleScript]]                    |
| 01:25:08   | because it's just so powerful.                                    |
| 01:25:10   | So yeah, it's a great app and I'm a huge fan                      |
| 01:25:14   | and I use it every day.                                           |
| 01:25:15   | We're gonna get into that with the bonus content today,           |
| 01:25:19   | but I used DEVONthink a lot                                      |
| 01:25:22   | and I've really come to rely on this stuff.                       |
| 01:25:25   | Yes, same.                                                        |
| 01:25:26   | All right, we are the Automators.                                 |
| 01:25:28   | You can find us over relay.fm slash Automators.                   |
| 01:25:32   | You can weigh in on this at talk.automators.fm,                   |
| 01:25:36   | which is the forum for the show                                   |
| 01:25:37   | and so much great automation stuff going on there.                |
| 01:25:41   | We wanna thank our sponsors today.                                |
| 01:25:42   | That's Kolide, LinkedIn Jobs and Doppler.                        |
| 01:25:46   | Thank you for all your support.                                   |
| 01:25:47   | Please check out our sponsors and we will see you next time.      |
| 01:25:51   | Goodbye everyone.                                                 |
