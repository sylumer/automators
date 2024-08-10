---
status: "incomplete"
fc-date:
  year: 2018
  month: 12
  day: 07
fc-category: "podcast"
podcast: "Automators"
published: 2018-12-07
duration: 2469
formattedduration: "00:41:09"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/12"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/automators012.mp3"
episode: 12
title: "12: Automated Holidays"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
It's holiday time so what happens when you throw two automation nerds at things like holiday decorations, festive music, and ? Listen and find out.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 012 Discussion](https://talk.automators.fm/t/automators-12-automated-holidays/3415)

# Sponsors
- [[TextExpander (Sponsor)|TextExpander from Smile]] - Multiply your team’s productivity.

# Show Notes
The holidays are upon us, and Rosemary and David are ready to automate. Our trusty nerds start with simple things like wallpaper and voice-in-a-can technologies.  
Next, they get to holiday music. It's great that you can automate music playback, but David wants to go deeper with Siri Shortcuts and automation around your music. David has a white whale concerning HomePod destination for audio, but we all need holiday wishes … right? - Then our team talks about this episode's sponsor, TextExpander, which they both love very much. - Then they get into their favourite automation contraptions for automating holiday lights. David admits Thanksgiving is a mere speed bump to his holiday preparations. David even admits to creating his own little Disneyland Main Street, and it all runs on HomeKit. Open David's front door and the magic starts happening. Rose takes it a level deeper by invoking Homebridge, third-party software that lets you run non-HomeKit gear with HomeKit. - Then the team talks about the best ways to automate holiday cards. It's harder than you think. They aren't done there, however, there is room in automation for present lists, grabbing multiple browser tabs via automation, 
* * *
- [Automators #12: Automating Holidays](https://www.relay.fm/automators/12)
- [Automators on the Web](https://automators.fm/)
- [Automators Talk](https://talk.automators.fm/)
- [Automators on YouTube](https://www.youtube.com/channel/UCvpU-_RS85Y7q5PZsAaH87w)
- [Rose on the Web](https://rosemaryorchard.com/)
- [Rose on Twitter](https://twitter.com/rosemaryorchard)
- [David on Twitter](https://twitter.com/MacSparky)
- [Mac Power Users #409: Holiday Tech - Relay FM](https://www.relay.fm/mpu/409)
- [The Porg Holiday iPhone Case](https://twitter.com/MacSparky/status/1070879980702261250) - Why does David love this so much?
- [BB8 Christmas Wallpaper](https://weheartit.com/entry/209282590)
- [Christmas Time!](https://www.icloud.com/shortcuts/a269c3c48045469eadf6cd86573fe983) - Here's a Siri Shortcut that lets you automate music playback.
- [Eve Door & Window - Smart and wireless contact sensor for windows and doors, automatically trigger accessories and scenes, get notifications (open/closed status), Bluetooth Low Energy (Apple HomeKit) - - Amazon.com](https://www.amazon.com/Eve-Door-Window-automatically-notifications/dp/B01M9CLFD4/ref=sr_1_2_sspa?ie=UTF8&qid=1544152718&sr=8-2-spons&keywords=eve+homekit+door+sensor&psc=1)
- [iHome ISP6X Wi-FI Smart Plug, Use your voice to control connected devices, Works with Alexa, Google Assistant and HomeKit enabled smart speakers - - Amazon.com](https://www.amazon.com/iHome-control-connected-Assistant-speakers/dp/B01HCVG9NG/ref=sr_1_3?ie=UTF8&qid=1544152689&sr=8-3&keywords=ihome+HomeKit+plug)
- [David's Indoor Light Automation](https://www.dropbox.com/s/jujg7sbbtfe2dpo/IMG_1030.png?dl=0)
- [Homebridge](https://github.com/nfarina/homebridge)
- [OmniFocus Present List](https://www.icloud.com/shortcuts/a947ffdeccf2479c8d41d648c10a6df5) - A Siri Shortcut for adding list items to OmniFocus.
- [The Things Present List](https://www.icloud.com/shortcuts/3145204525d44b1cb27647e87e21b7bc)
- [The Pen Addict - Relay FM](https://www.relay.fm/penaddict)
- [Grabbing a Safari Link with Keyboard Maestro - MacSparky](https://www.macsparky.com/blog/grab-safari-link)
- [Markdown Service Tools - Brett Terpstra.com](http://brettterpstra.com/projects/markdown-service-tools/)
- [Pixelmator Pro](https://www.pixelmator.com/pro/)
- [Warhol Inspired Christmas Card](https://www.dropbox.com/s/mw2r1464kp0gu9m/The-Warhol-Inspired-Christmas-Card.png?dl=0)
- [Gift Wrap Field Guide | MacSparky Field Guides](https://learn.macsparky.com/p/giftwrap)

# Transcription

| Time Index | Transcription                                                                                        |
| :--------- | :--------------------------------------------------------------------------------------------------- |
| 00:00      | Hello, I'm David Sparks, and I'm joined by my co-host, Rose Orchard, and this is The                 |
| 00:06      | Automators, where we talk about how to automate your technology to do your work for you.             |
| 00:11      | Hello, Rose.                                                                                         |
| 00:12      | Hello, David.                                                                                        |
| 00:13      | We're back again.                                                                                    |
| 00:14      | Yes, we are.                                                                                         |
| 00:15      | And we've got a fun-filled holiday episode this month.                                               |
| 00:19      | We thought it would be fun to talk about using automation for holiday-related stuff.                 |
| 00:23      | Yeah.                                                                                                |
| 00:24      | It's one of these things, you know, it comes around at least once a year.                            |
| 00:27      | After some people, there are multiple holidays in the year, and it's a good opportunity to           |
| 00:32      | bust out the automation tools and impress the relatives, or at the very least, make your             |
| 00:35      | life a little easier.                                                                                |
| 00:36      | Orchard, just in my case, just add some nerdiness to the holiday, which is just a purpose in         |
| 00:42      | itself.                                                                                              |
| 00:43      | Yes.                                                                                                 |
| 00:44      | Well, it's a worthy purpose, because, you know, everybody should be enjoying themselves,             |
| 00:48      | you know, at every time of year, hopefully, but especially during the holidays, so.                  |
| 00:52      | We've covered this on the Mac Power users a few times over the years.                                |
| 00:55      | We'll go ahead and put some links in the show notes for those shows.                                 |
| 00:59      | This episode, The Automators, we're going to go a little bit nerdier.                                |
| 01:02      | We're going into some [[AppleScript]] and some other stuff.                                             |
| 01:05      | So those shows are great, and this show is going to go even deeper down the nerd stack.              |
| 01:11      | So you know, let's get started.                                                                      |
| 01:14      | All right.                                                                                           |
| 01:15      | Well, you had a good one, I think, that'd be fun for the holidays about your desktop background.     |
| 01:20      | Yeah.                                                                                                |
| 01:21      | So this is for almost everybody.                                                                     |
| 01:24      | If you're an iOS user, I'm afraid you can't do this one.                                             |
| 01:27      | But Windows users, Android users, Mac users, Linux users, you can automatically change               |
| 01:32      | your desktop background.                                                                             |
| 01:34      | So pick a folder on Android, that would be an album of festive pictures, and have your               |
| 01:41      | device automatically change your background on Windows, Mac, and Linux.                              |
| 01:46      | You could also do a screensaver of fun images.                                                       |
| 01:50      | And there are some actual, the really nice sets of images out there, which you can just              |
| 01:55      | download as a whole group, or maybe add it to your photo library automatically.                      |
| 02:01      | There's some Google Photos albums as well, which is a really nice, simple way that everybody         |
| 02:06      | can add some fun to the holidays.                                                                    |
| 02:08      | I went searching the other day for my iOS devices.                                                   |
| 02:12      | I wanted a home screen that was appropriately festive, but also Star Wars.                           |
| 02:18      | Oh.                                                                                                  |
| 02:19      | Yeah.                                                                                                |
| 02:20      | That took a little while.                                                                            |
| 02:21      | I mean, there's some stuff out there.                                                                |
| 02:22      | There's some kind of oddball pictures of Yoda in a Santa suit, but they didn't really                |
| 02:26      | work for me.                                                                                         |
| 02:27      | But then I found the perfect one.                                                                    |
| 02:29      | It's BB8 draped in Christmas lights.                                                                 |
| 02:33      | I will, in fact, I'll put a link to that in the show notes.                                          |
| 02:36      | It's just the perfect little wallpaper for your iPhone and your iPad.                                |
| 02:41      | Yeah.                                                                                                |
| 02:42      | That is something I'm going to have to borrow because BB8 is just adorable.                          |
| 02:46      | So Christmas lights on top.                                                                          |
| 02:48      | Love it.                                                                                             |
| 02:49      | They're from Disneyland and they were selling custom iPhone cases and they have one with             |
| 02:52      | a porg on it in a Santa hat and he says season squeakings.                                           |
| 02:59      | I don't know.                                                                                        |
| 03:00      | I had to get it, Rose.                                                                               |
| 03:01      | I had to buy it.                                                                                     |
| 03:03      | Okay.                                                                                                |
| 03:04      | Note to self, I need the same iPhone case as David.                                                  |
| 03:07      | I love porgs.                                                                                        |
| 03:08      | They're so adorable.                                                                                 |
| 03:09      | I saw Star Wars last Christmas and oh, yeah.                                                         |
| 03:11      | Porgs.                                                                                               |
| 03:12      | I don't know why everybody's so angry about these little porgs.                                      |
| 03:14      | They're kind of cute.                                                                                |
| 03:15      | They're adorable.                                                                                    |
| 03:16      | I do still wish Chewie had ate that one.                                                             |
| 03:19      | I mean, come on.                                                                                     |
| 03:20      | Yeah.                                                                                                |
| 03:21      | You already cooked it.                                                                               |
| 03:22      | I mean, come on.                                                                                     |
| 03:23      | He was hungry.                                                                                       |
| 03:24      | Yeah.                                                                                                |
| 03:25      | Anyway, so set your desktop backgrounds.                                                             |
| 03:26      | Have some fun with that.                                                                             |
| 03:27      | There's like we said, no matter as you can see from my little adventure, no matter what              |
| 03:31      | you're interested in is whether it's Doctor Who or whatever, there's some kind of Christmas          |
| 03:36      | theme for that as well.                                                                              |
| 03:38      | So you can mix your metaphors.                                                                       |
| 03:43      | Another one is now that we have all these voice and the can things in our house, I think             |
| 03:46      | you can get those involved with your holiday preparations as well.                                   |
| 03:50      | Yeah.                                                                                                |
| 03:51      | I mean, just simply asking how long until Christmas you'll get different answers on                  |
| 03:54      | different devices.                                                                                   |
| 03:55      | Like my Echo is just giving it to me in days whereas Siri has been returning in weeks and            |
| 04:01      | days, but any voice assistant should be able to tell you how long it is until Christmas              |
| 04:07      | or New Year or Kwanzaa, whatever holiday it is you're celebrating.                                   |
| 04:11      | Yeah.                                                                                                |
| 04:12      | It would be, that'd be something you may want to combine into a bigger automation.                   |
| 04:18      | Like if you had a Christmas related kickoff automation that would tell you, that would               |
| 04:24      | play your favourite music and turn on your lights and things, we're going to talk about               |
| 04:27      | some of those later.                                                                                 |
| 04:28      | There's nothing wrong with inserting some Siri shortcut code in there to figure out                  |
| 04:34      | the current day and subtract that from the holiday that you're looking for.                          |
| 04:40      | And then you could create a text field to say, or just a text file that says, you know,              |
| 04:45      | so many days until whatever the holiday is and have it say that or display it.                       |
| 04:50      | That's really only two or three step shortcut.                                                       |
| 04:52      | If you look at some of the stuff we did on date shortcuts earlier in the run of the show,            |
| 04:57      | you could easily convert one of those to add specific code.                                          |
| 05:00      | I mean, obviously Apple and Google all these have already hard coded in where you can just           |
| 05:06      | ask the device how many days until Christmas and it's going to know that.                            |
| 05:09      | But if you want to include that in an automation, you're going to have to kind of build it yourself. |
| 05:14      | But it's an easy date math automation.                                                               |
| 05:18      | It's a very simple one.                                                                              |
| 05:19      | And of course, things like the Echo and so on have got Christmas skills where they've                |
| 05:23      | got silly jokes and things like that, which is perfect for either maybe you, if you enjoy            |
| 05:28      | that kind of thing, I know I do.                                                                     |
| 05:31      | And also to keep kids and family members entertained around the holidays.                            |
| 05:35      | Yeah, my little niece, who's two now, she's got used to talking to the Google in her house.          |
| 05:45      | So now she tries to talk to the smoke detector.                                                      |
| 05:49      | She thinks it's Google sitting in her crib.                                                          |
| 05:52      | Well, there you go.                                                                                  |
| 05:53      | That can be a project evil holiday project for somebody you want to mess with your relatives         |
| 05:58      | or friends, kids, you know, like train them to talk to smoke detectors.                              |
| 06:01      | It didn't make me think though.                                                                      |
| 06:02      | I mean, what is it like for these children growing up where they have never known a time             |
| 06:08      | where you didn't have a voice in a can in your life?                                                 |
| 06:11      | It's a very different perspective online anyway.                                                     |
| 06:17      | So anyway, you can do that.                                                                          |
| 06:19      | I want to talk a little bit about music and just the in general, the holiday playlist because        |
| 06:23      | I think that's something a lot of people like and it would make a lot of sense to automate           |
| 06:27      | that.                                                                                                |
| 06:28      | But at the most basic level, if you've got a especially if you've got a music subscription           |
| 06:33      | service, but also if you just bought all your own music, you can easily put together a playlist.     |
| 06:38      | I'm going to be Apple centric on this discussion because that's where I spend most of my time.       |
| 06:44      | And and I since I have an Apple music subscription, I have over the years put together what I think  |
| 06:49      | is a mighty fine playlist.                                                                           |
| 06:51      | I call it Yule, why you ULE and in fact, I'll put a link for it in the show notes.                   |
| 06:57      | So if you want to subscribe to it, it's just a whole bunch of jazz related Christmas stuff           |
| 07:01      | that I like.                                                                                         |
| 07:02      | Yes, I subscribed to this last year, I believe, because you mentioned it on my power users           |
| 07:06      | and I can second it.                                                                                 |
| 07:08      | It's a very good playlist.                                                                           |
| 07:09      | And I've been updating it.                                                                           |
| 07:10      | So there's going to in fact, I'll put a post up on the MacSparky, maybe I'll put a link             |
| 07:13      | for that into but the I've been updating it, continuing my search, found some new music              |
| 07:19      | that I didn't expect this year.                                                                      |
| 07:21      | So it's getting better and I and I'll share it.                                                      |
| 07:24      | But my point is, you know, what if you want to play that?                                            |
| 07:29      | So there's a lot of ways we talked about if you have a voice in the can, if you have an              |
| 07:33      | Apple HomePod, it's very easy, especially for an [[Apple Music]] based playlist is to say,               |
| 07:39      | you know, magic phrase, play the Yule playlist, and it'll just happen.                               |
| 07:44      | And that's great.                                                                                    |
| 07:45      | That's almost as much automation as you need, because you can start it with your voice in            |
| 07:50      | a few words and you can stop it at any time.                                                         |
| 07:53      | But you can take that another level if you want.                                                     |
| 07:57      | And and in Siri shortcuts, you have the ability to start a specific playlist and you can set         |
| 08:04      | it to be random and play music.                                                                      |
| 08:06      | In fact, Rose's got a shortcut we're going to share in the show notes of this show that              |
| 08:11      | does something like that in relation to [[HomeKit]].                                                     |
| 08:13      | But but just you can have in any automation you want, you can have it start a playlist.              |
| 08:17      | So if you've got, let's say a Siri shortcut that gets you into the mode of wrapping gifts            |
| 08:23      | or whatever, you can have it automatically start playing that music.                                 |
| 08:26      | I do have a complaint there, Rose.                                                                   |
| 08:28      | Yeah, what is your complaint, David?                                                                 |
| 08:30      | I want that playlist to play on my HomePod automatically, and yeah, currently no way                 |
| 08:36      | to do that.                                                                                          |
| 08:37      | No, I mean, the only way that you can do that is if you talk to the HomePod and you say,             |
| 08:43      | hello, lady, please, can you run this shortcut and then you can run shortcuts, certain shortcuts.    |
| 08:48      | I would hate to coax you on your HomePod and depending on how you set your shortcut up,              |
| 08:55      | this might be one of them.                                                                           |
| 08:56      | And then, of course, that HomePod will start playing the music.                                      |
| 08:59      | And as anybody who owns a HomePod knows, the microphones on it are excellent.                        |
| 09:03      | So if you could say the magic phrase with a HomePod somewhere nearby, I'm pretty sure                |
| 09:07      | I heard mine just trigger through a closed door at the other end of the apartment.                   |
| 09:14      | So it should be a trigger inside the actual series shortcut where you get to choose what             |
| 09:21      | HomePod it plays on.                                                                                 |
| 09:24      | It's easy to be critical.                                                                            |
| 09:26      | It is the very first iteration, though, of [[Shortcuts\|Siri Shortcuts]].                                         |
| 09:29      | So let's hope that...                                                                                |
| 09:31      | I just feel like overall, in fact, that's one of the problems throughout some of the                 |
| 09:35      | stuff we're talking about at the show today is the [[HomeKit]] HomePod stuff integration needs           |
| 09:40      | a little more muscle.                                                                                |
| 09:41      | Yeah, it does.                                                                                       |
| 09:43      | But I think we can get there on it, though.                                                          |
| 09:45      | I have a feeling that that team are still hard at work.                                              |
| 09:47      | We're seeing a lot of betas on them.                                                                 |
| 09:49      | Yeah, I love that.                                                                                   |
| 09:50      | I love that there's so many betas on an Apple product and it's not just [[WWDC]].                        |
| 09:56      | Yes, that is always good.                                                                            |
| 09:59      | Okay, let's take a minute to talk about the sponsor for today's show.                                |
| 10:05      | And that's our friends over at Smile and their application TextExpander.                             |
| 10:12      | TextExpander is the way I get...                                                                     |
| 10:15      | It's the most simple automation I do, but it's the one I use every day.                              |
| 10:19      | And TextExpander multiplies your team's productivity by making up-to-date shared knowledge available |
| 10:24      | instantly.                                                                                           |
| 10:25      | So when you use TextExpander, you can type a simple phrase and it can expand into something          |
| 10:31      | big and that is the very definition of automation.                                                   |
| 10:35      | But TextExpander goes so much further than simple text expansion.                                    |
| 10:40      | One of the things they do is that they have teams.                                                   |
| 10:43      | So you can share this TextExpander data among multiple team members and that makes it accessible     |
| 10:50      | and searchable through simple abbreviations and keyboard shortcuts.                                  |
| 10:54      | And then you can write the text expansion snippets by your best writer.                              |
| 10:58      | So if you're in a company and you've got customer service issues, whoever is the best writer         |
| 11:02      | can write the responses to those emails.                                                             |
| 11:04      | And then all the people that are managing those emails can access it through that shared             |
| 11:09      | TextExpander database.                                                                               |
| 11:11      | And because it's available on multiple platforms, Mac OS, iOS, Windows, and the web, you can         |
| 11:16      | use it from just about anywhere.                                                                     |
| 11:18      | And it's great.                                                                                      |
| 11:19      | I am actually a team TextExpander subscriber because of the MacSparky field guides.                 |
| 11:26      | Get a lot of questions.                                                                              |
| 11:27      | I try to deal with a lot of them myself, but sometimes I get overloaded and in that case             |
| 11:32      | I send them on to an assistant and the assistant has access to those same snippets that I use        |
| 11:37      | and respond into customer inquiries.                                                                 |
| 11:39      | And the thing I love about this is I can make changes to the database and the customer or            |
| 11:45      | the assistant doesn't even know it.                                                                  |
| 11:47      | One of the things is sometimes we include links or maybe I have to change a title or                 |
| 11:51      | do something and I'll fix the snippet and she just keeps using the same snippet she's                |
| 11:56      | always used.                                                                                         |
| 11:57      | The text changes.                                                                                    |
| 11:58      | She's not even really aware of it, but the customer still gets the most up-to-date information.      |
| 12:03      | Got a lot of listeners to the show that I've written into saying that they're doing the              |
| 12:06      | same thing with their teams.                                                                         |
| 12:07      | It's just a great way to solve a problem.                                                            |
| 12:09      | So if you're on a team, TextExpander will change the way you work and leave you more                 |
| 12:13      | time to do what you do best.                                                                         |
| 12:15      | For bigger teams, TextExpander supports single sign-on and grouping accounts, which makes            |
| 12:20      | getting set up a breeze.                                                                             |
| 12:22      | It's also great for writers and sales teams, teachers, lawyers and more.                             |
| 12:26      | You can find tips related to your industry by searching for the TextExpander blog.                   |
| 12:31      | I've written a bunch of stuff.                                                                       |
| 12:32      | I use TextExpander as a lawyer.                                                                      |
| 12:34      | So it's just a great little application.                                                             |
| 12:37      | It can save you so much time.                                                                        |
| 12:39      | So don't put it off any longer.                                                                      |
| 12:40      | We're getting towards the end of the year.                                                           |
| 12:42      | It's time to get your automation act together.                                                       |
| 12:44      | That's why you're listening to the Automators.                                                       |
| 12:46      | Go to textexpander.com/podcast right now to learn more.                                        |
| 12:51      | Once again, that's textexpander.com/podcast and make sure to let them know you                 |
| 12:55      | heard about it here on the Automators.                                                               |
| 12:57      | Well, let's dive in a little bit deeper with some of those home solutions, actually.                 |
| 13:05      | So as well as playing music, you can, of course, turn on the lights.                                 |
| 13:08      | Everybody can turn on lights.                                                                        |
| 13:09      | You might have a light switch.                                                                       |
| 13:10      | But of course, this year, you can actually, you know, you probably have got a Christmas              |
| 13:14      | tree that you need to turn on and off or some kind of holiday lighting.                              |
| 13:19      | Some people, I'm sure, have got reindeer on the roof, that sort of thing.                            |
| 13:22      | You can, of course, go super simple.                                                                 |
| 13:25      | Just go buy one of those cheap timers, plugs that you can plug something into, and that              |
| 13:30      | will automatically turn on, I don't know, 4pm and turn off at 10pm, things like that.                |
| 13:34      | But those aren't the most flexible way of doing things.                                              |
| 13:38      | And I've heard, David, that you've got a pretty in-depth holiday setup going on at                   |
| 13:43      | home.                                                                                                |
| 13:44      | Can you tell us a bit about that?                                                                    |
| 13:45      | I mean, sort of.                                                                                     |
| 13:46      | So first of all, I get the simplicity of the timer, and that's cool.                                 |
| 13:51      | But I really like having the ability to control it more.                                             |
| 13:55      | And for me, the indoor stuff, I mean, we have, you know, first of all, I didn't ask you              |
| 14:01      | this, Rose, but I'll tell you, my family goes hard at Christmas.                                     |
| 14:04      | I mean, and you know how it's very vogue, I was listening to a couple other podcasts                 |
| 14:09      | on the network, and everybody's saying, oh, they're so happy that we have Thanksgiving               |
| 14:11      | to give them a barrier between Christmas and, you know, and Halloween.                               |
| 14:17      | So people don't start really getting serious about Christmas and thought for Thanksgiving            |
| 14:20      | in the US.                                                                                           |
| 14:21      | Not us, man.                                                                                         |
| 14:22      | We treat Thanksgiving as a speed bump.                                                               |
| 14:24      | We're already thinking about Christmas when November hits.                                           |
| 14:27      | And so I'm always making plans and doing stuff.                                                      |
| 14:30      | And what I don't like is about the timer for your Christmas tree, because we have two                |
| 14:35      | trees in our house is what I was getting to.                                                         |
| 14:37      | We have the usual Christmas tree, and my wife has her very own little Starbucks tree where           |
| 14:42      | she collects the ornaments from Starbucks.                                                           |
| 14:43      | So we've got two trees to light.                                                                     |
| 14:46      | And we've also got, believe it or not, a little mini Disneyland in our house.                        |
| 14:53      | Are you familiar with the concept of Christmas villages, Rose?                                       |
| 14:56      | I am.                                                                                                |
| 14:57      | But that's not something that I think everybody will be familiar with.                               |
| 15:01      | So it's these little houses where you make, like, a little village.                                  |
| 15:04      | And it was a thing.                                                                                  |
| 15:05      | It was very popular in the US, and it seems to me like it's a lot less popular now than              |
| 15:09      | it used to be.                                                                                       |
| 15:10      | But my mother was super into it.                                                                     |
| 15:12      | So when she passed, we took some of her houses, and we always like to put her houses up.             |
| 15:15      | But then we realised that if we got a little creative, we could make our own little Disney           |
| 15:21      | main street.                                                                                         |
| 15:22      | And, you know, my wife really likes Disney, and frankly, so do we, so do the rest of us.             |
| 15:27      | So we made our own little main street.                                                               |
| 15:31      | I'm going to put a picture of this in the show notes so you guys can make fun of me.                 |
| 15:35      | But so we've got a main street.                                                                      |
| 15:38      | We've got a light up.                                                                                |
| 15:39      | We've got two trees.                                                                                 |
| 15:40      | We've got all this stuff we want to light up.                                                        |
| 15:41      | Nobody wants to go around and have different timers running at different times.                      |
| 15:45      | And a lot of times we're not home.                                                                   |
| 15:46      | So what's the point of having lights turn on when nobody's home?                                     |
| 15:51      | So I really wanted to make it more automation friendly, and it was really easy.                      |
| 15:56      | What I did is I got some of those iHome plugs, and the iHome plugs are just a home kit friendly      |
| 16:01      | plug that you can plug into the wall, and you can plug a thing into that.                            |
| 16:05      | So I've got the Disney main street, the two trees plugged into these iHome plugs.                    |
| 16:11      | And then I have a trigger on my front door.                                                          |
| 16:14      | It's just a magnetic switch that is also a home kit friendly, and I will look up the                 |
| 16:19      | name of the manufacturer.                                                                            |
| 16:20      | I frankly forget who it was.                                                                         |
| 16:21      | I've had them for some time now, but it's just a little magnetic switch.                             |
| 16:25      | When the door opens, it sends a signal to home kit to say, hey, front door just opened.              |
| 16:31      | And so all I did is set up an automation now that when the front door opens, it turns on             |
| 16:37      | the two trees and the little Disney village.                                                         |
| 16:39      | And it's great because you walk in the door and the house just lights up with Christmas              |
| 16:43      | for you.                                                                                             |
| 16:44      | And the condition is that it's at night time as well.                                                |
| 16:46      | So with home kit, you can say the switch is thrown and it's dark outside.                            |
| 16:51      | And when you do that, all that stuff happens, and it's great.                                        |
| 16:54      | That is wonderful.                                                                                   |
| 16:55      | Yes, because that is the advantage of integrating this into a home kit or Google Home or whatever    |
| 17:01      | setup that you're using.                                                                             |
| 17:03      | You can make it happen only when you're at home and only have it ultimately turn on,                 |
| 17:07      | say 45 minutes before sunset, because at least for me, it's getting pretty dark then already.        |
| 17:13      | And things like that.                                                                                |
| 17:14      | And that's really nice.                                                                              |
| 17:15      | So of course, what I would recommend doing, if you hook this into any existing scenes                |
| 17:21      | or whatever setup it is, groups in your home kit setup or home automation setup, make a              |
| 17:27      | note of this, because otherwise I can guarantee somebody is not going to be happy after Christmas.   |
| 17:32      | It'll probably be you because almost every system will go, I was unable to locate the                |
| 17:37      | device Christmas tree or Christmas tree is not responding to something like that.                    |
| 17:42      | And that is very frustrating.                                                                        |
| 17:44      | And that's a very big buzz kill after what will hopefully be a very enjoyable season                 |
| 17:48      | for you.                                                                                             |
| 17:49      | Yeah, it's not that big of a deal.                                                                   |
| 17:51      | And for instance, the outdoor lights I have on also an iHome switch, which does just that.           |
| 17:58      | It looks at the sunset and it turns the lights on at sunset and it turns them off at a specified     |
| 18:04      | time.                                                                                                |
| 18:05      | I could have done that on a light sensitive switch, but these iHome things are super cheap.          |
| 18:11      | So it wasn't that much more money to do it.                                                          |
| 18:13      | And I like the ability to remotely turn them off or even turn them on if I want, like if             |
| 18:19      | it's a cloudy rainy day, I can just be sitting at my desk and turn the lights on, you know.          |
| 18:24      | So that gives you just more power.                                                                   |
| 18:27      | And the name of the door switch, by the way, is Eve, EVE.                                            |
| 18:30      | They make this door switch and it's great.                                                           |
| 18:33      | I use it all the time for different types of automation, but during the holiday season,              |
| 18:36      | it turns on the indoor stuff.                                                                        |
| 18:38      | Oh, the other thing it turns on is that, Rose, I really need help, honestly.                         |
| 18:46      | A couple of years ago, somebody made an outdoor decoration that's like a cute little R2-D2           |
| 18:52      | that lights up with a Santa hat on.                                                                  |
| 18:54      | And of course, I have it, but it was too good to put outside and get beat on by the sun              |
| 19:00      | and the rain.                                                                                        |
| 19:01      | So it's an indoor decoration and he lights up too.                                                   |
| 19:04      | Okay.                                                                                                |
| 19:05      | I'll tell you what.                                                                                  |
| 19:06      | I will provide help.                                                                                 |
| 19:07      | I'm going to fly over and I'm going to pick some of this stuff up and I'm going to redistribute      |
| 19:10      | it.                                                                                                  |
| 19:11      | Okay.                                                                                                |
| 19:12      | Is that the kind of help you're looking for?                                                         |
| 19:13      | As a side note, redistributing may involve just bringing it home.                                    |
| 19:16      | It's a long trip.                                                                                    |
| 19:17      | It's a long trip for you, but to come on, we'll give you something.                                  |
| 19:19      | I'll make it for an R2-D2 Christmas decoration.                                                      |
| 19:22      | I will make it.                                                                                      |
| 19:25      | So it's interesting, though, what I was saying earlier about the music is where this stuff           |
| 19:29      | hangs up for me.                                                                                     |
| 19:30      | It's like we need the ability to have that door switch.                                              |
| 19:33      | We need the home kit triggers, be able to be a Siri shortcut trigger to start up actions,            |
| 19:40      | if you understand what I mean.                                                                       |
| 19:41      | Yes.                                                                                                 |
| 19:42      | Currently, I cannot have Siri shortcuts say, when the front door opens, do this, do something.       |
| 19:47      | I can address home kit as a scene to say, as part of my automation, I want you to activate           |
| 19:54      | a specific scene, but I cannot to say when the door triggers or when I trigger the scene,            |
| 20:01      | do something else.                                                                                   |
| 20:02      | And what I'd ideally like is to walk in the front door and have my favourite Dexter Gordon            |
| 20:09      | Christmas song start coming out of the HomePod and the Christmas lights go on.                       |
| 20:13      | That's what I'm looking for, Rose.                                                                   |
| 20:15      | Well, I mean, this is a bit of a rabbit hole.                                                        |
| 20:17      | We're not strictly speaking of automating holidays now, but on this week's Connected,                |
| 20:21      | [[Federico Viticci\|Federico]] was talking about how he set up [[Homebridge]] on his brand new Mac Mini.                       |
| 20:26      | And he's using integration to trigger [[AppleScript\|AppleScripts]] on the Mac Mini via [[HomeKit]], which               |
| 20:33      | means that it can then address iTunes, which means it can talk to specific HomePods and              |
| 20:37      | play specific music as part of a scene.                                                              |
| 20:43      | And so for anybody looking for a holiday project who is in the [[HomeKit]] and [[AppleScript]] world,       |
| 20:48      | by all means go at that and please report back.                                                      |
| 20:50      | I have no experience with this.                                                                      |
| 20:52      | I have used [[Homebridge]] before.                                                                       |
| 20:55      | It's a third-party piece of software that you can run on something like a Raspberry                  |
| 20:57      | Pi or a Mac Mini.                                                                                    |
| 21:00      | And then you can use it to add non-[[HomeKit]] compatible devices to your home.                          |
| 21:05      | There's also [[Home Assistant]], which is another piece of open-source software, which you can           |
| 21:10      | run to up your home automation that works with [[HomeKit]] things and everything else.                   |
| 21:14      | It's not [[HomeKit]] as well, or almost everything else, I believe.                                      |
| 21:18      | And of course, if it doesn't, then hopefully you can find somebody who's written a plugin            |
| 21:23      | to do that.                                                                                          |
| 21:24      | But that is a way of doing that.                                                                     |
| 21:26      | I would say caution you that it may not be the most stable way, and if you are using                 |
| 21:32      | this holiday season as an opportunity to get family members on board with automation, take           |
| 21:37      | a leaf out of David's book and pick something simpler to start with, because David's been            |
| 21:43      | in the doghouse in that area before.                                                                 |
| 21:45      | I did something similar in the Hazel Field Guide.                                                     |
| 21:49      | I covered it where I use an if this, then that trigger to create a text file, which                  |
| 21:53      | then [[Hazel]] sees.                                                                                     |
| 21:55      | And once [[Hazel]] sees the field guide, that's a trigger, and then I trigger an [[AppleScript]]            |
| 21:59      | to play music.                                                                                       |
| 22:01      | I am not sure if I can [[AppleScript]] address the output of the music instead of playing               |
| 22:07      | it on my Mac to play it through a HomePod.                                                           |
| 22:09      | I believe that what [[Federico]] said is you have to set up iTunes on the Mac to specifically            |
| 22:14      | play to the HomePods, and then it works.                                                             |
| 22:17      | So just leave it on as a default.                                                                    |
| 22:18      | So you're not really scripting it.                                                                   |
| 22:20      | That's just the native or the natural.                                                               |
| 22:25      | That's just the intent of the app is to talk to the HomePod instead of playing through               |
| 22:30      | the speakers.                                                                                        |
| 22:31      | And then the question becomes, if you restart the Mac, do you have to redo?                          |
| 22:34      | I mean, we're getting in the land of goofy automation right now where things work if everything      |
| 22:38      | aligns up perfectly, you know.                                                                       |
| 22:41      | Yeah.                                                                                                |
| 22:42      | Yeah.                                                                                                |
| 22:43      | This is where you're doing chants and things to make sure that everything works as you               |
| 22:46      | expect.                                                                                              |
| 22:47      | Yeah.                                                                                                |
| 22:48      | I suspect I could probably get it to work either through that [[Hazel]] method I was talking             |
| 22:52      | about or through the method [[Federico Viticci\|Federico]] was using.                                                      |
| 22:55      | But what I'd really like is for it to be a lot easier and just build it into series                  |
| 22:59      | shortcuts.                                                                                           |
| 23:00      | I can already make it play a playlist.                                                               |
| 23:03      | The only thing I'm missing now is the trigger and the ability to direct the playlist to              |
| 23:07      | the specific speaker.                                                                                |
| 23:08      | And like I said earlier, it is the first year of Apple [[Shortcuts\|Siri Shortcuts]].                             |
| 23:13      | And it's pretty amazing how much that did get done.                                                  |
| 23:16      | So I'm not going to be super upset.                                                                  |
| 23:18      | It takes them another year to get that figured out.                                                  |
| 23:20      | Well, Apple, this is one of our Christmas wishes.                                                    |
| 23:23      | Please can we have it?                                                                               |
| 23:24      | Yeah.                                                                                                |
| 23:25      | Right.                                                                                               |
| 23:26      | Yeah.                                                                                                |
| 23:27      | I mean, you knew as soon as they gave us [[Shortcuts\|Siri Shortcuts]], we were never going to be just            |
| 23:30      | happy with that, right?                                                                              |
| 23:31      | Apple?                                                                                               |
| 23:32      | I mean, we're going to want more.                                                                    |
| 23:33      | Yes.                                                                                                 |
| 23:34      | Automators, nerds want everything and we want it all now.                                            |
| 23:38      | Yeah.                                                                                                |
| 23:39      | All right.                                                                                           |
| 23:40      | So next up is if you send lots of cards or letters at this time of year, we would highly             |
| 23:49      | recommend using mail merge to create the address labels for those envelopes or to print directly     |
| 23:55      | onto the envelopes.                                                                                  |
| 23:56      | However, you choose to do it just to make life a little bit easier.                                  |
| 24:01      | What you may discover is say, for example, you have David Sparks and Daisy Sparks in                 |
| 24:05      | your address book.                                                                                   |
| 24:06      | Then, of course, they come up twice, so you will need to make sure that you do appropriate           |
| 24:10      | filtering.                                                                                           |
| 24:11      | And if, for example, instead of writing a Christmas card to David Sparks, you'd prefer               |
| 24:15      | to write it to the Sparks family, you may want to just drop the name or have the name                |
| 24:21      | printed in a very faint colour that you can then write over with some kind of fancy pen,              |
| 24:26      | maybe a calligraphy pen.                                                                             |
| 24:27      | If you are into pens, of course, I highly recommend the pen addict to go even nerdy on               |
| 24:33      | fountain pens.                                                                                       |
| 24:34      | But yes, that is something that is well worth doing because you can even make it pretty.             |
| 24:39      | You can add, of course, emoji when you print it, or you can just add some pretty images              |
| 24:44      | of some holly or something to represent the season to jazz up those Christmas cards.                 |
| 24:49      | Yeah.                                                                                                |
| 24:50      | And just to go a little deeper on this, this is one we have covered on MPU, and so you               |
| 24:54      | can listen to those episodes.                                                                        |
| 24:55      | But the mechanics of that is usually, I think the best way to do that on a Mac at this point         |
| 25:02      | is to put it into a numbers or an Excel spreadsheet.                                                 |
| 25:08      | You can do it sort of out of the contacts database, but the problem is that the contact              |
| 25:13      | fields in the contact database are kind of predesignated by Apple, and there is no potential         |
| 25:19      | field that you can say the Sparks family, which is what you'd want to say instead of                 |
| 25:23      | David or Daisy.                                                                                      |
| 25:25      | And I've actually talked to some of the developers that have been working on some of the contact     |
| 25:28      | related apps, and they all are aware of this problem, but the problem is that the way the            |
| 25:33      | contact database is, which is what every address book app uses is the Apple's native contact         |
| 25:39      | database, because it wouldn't make any sense to roll your own, because then you'd have               |
| 25:43      | inconsistent data.                                                                                   |
| 25:44      | So they've got to use Apple's database, and Apple's database simply doesn't have a field             |
| 25:48      | for this.                                                                                            |
| 25:49      | So what I would recommend is you export out of contacts, make a specific contact group               |
| 25:56      | over the people you want to get your cards, export that out, then import it into numbers             |
| 26:02      | or Excel.                                                                                            |
| 26:03      | And then just add a field with the name of how you want it addressed.                                |
| 26:07      | And then you can use that field in your mail merge instead of the actual name of the person.         |
| 26:13      | And the point Katie made, because she's so practical and smart, was once you make it,                |
| 26:18      | then you're done.                                                                                    |
| 26:19      | I mean, you really don't need to go and rebuild that every year.                                     |
| 26:21      | For most of your people, the addresses aren't going to change.                                       |
| 26:24      | And if you've got a way of keeping track of where they do change, you can go and fix                 |
| 26:27      | this fairly easily.                                                                                  |
| 26:29      | So that's the mechanics of how to do that mail merge.                                                |
| 26:34      | Yeah.                                                                                                |
| 26:35      | And it's a very practical thing to do.                                                               |
| 26:37      | You might be thinking, oh, it's not very personal sending an envelope with a printed address.        |
| 26:42      | Trust me, when I say the post people will be really happy because reading handwriting                |
| 26:45      | can be very, very tricky.                                                                            |
| 26:47      | And especially if you've got a big stack of cards to write, you're going to be happy                 |
| 26:51      | at the end of it because your hand's not aching.                                                     |
| 26:53      | And the post people will be happy because they'll actually be able to deliver these                  |
| 26:57      | cards.                                                                                               |
| 26:58      | But think of it in that perspective, if the lack of personality is making you a little               |
| 27:03      | sad there.                                                                                           |
| 27:04      | Hey, let's talk about Christmas lists.                                                               |
| 27:07      | All right.                                                                                           |
| 27:08      | So you've got to make a list and check it twice, right?                                              |
| 27:11      | Right, right.                                                                                        |
| 27:12      | Or thrice, maybe?                                                                                    |
| 27:13      | Why not?                                                                                             |
| 27:14      | Because there's a couple of things that you might want to do this time of year, like maybe           |
| 27:17      | buying presents, wrapping presents, delivering presents.                                             |
| 27:21      | Speaking of wrapping, there's this guy called MacSparky and he released this gift wrapping          |
| 27:25      | field guide and it's free.                                                                           |
| 27:27      | So if you want to do super nerdy, awesome gift wrapping, then I would highly recommend               |
| 27:33      | getting that because it's free.                                                                      |
| 27:34      | So why not?                                                                                          |
| 27:35      | At the very least, you can learn how to make presents look awesome even if you choose not            |
| 27:38      | to do it.                                                                                            |
| 27:39      | I feel like that is the exact opposite of automation.                                                |
| 27:42      | Oh, it is.                                                                                           |
| 27:44      | But it's great fun.                                                                                  |
| 27:45      | And honestly, there are some things that you don't want to automate because it's good                |
| 27:49      | fun.                                                                                                 |
| 27:50      | Like, what's better than putting on a nice film, sitting there and wrapping some presents            |
| 27:54      | for the people that you really love?                                                                 |
| 27:55      | Yeah.                                                                                                |
| 27:56      | So just, there's been this joke on Mac Paris for years about how I love to wrap presents             |
| 28:01      | and everybody thinks I'm like joking.                                                                |
| 28:03      | A lot of people email me like, you don't really do that, do you?                                     |
| 28:06      | And of course I do.                                                                                  |
| 28:08      | So it's like a 15 minute video.                                                                      |
| 28:09      | It's free.                                                                                           |
| 28:10      | You can get it over at learn.macsparky called the gift wrap field guide and it shows you             |
| 28:14      | the tools I use and how I wrap a present.                                                            |
| 28:16      | And I'm actually hearing from a lot of listeners who are like, they're like going to impress         |
| 28:22      | their wives and husbands this year with this new found wrapping prowess.                             |
| 28:26      | So I'm glad I'm helping out there.                                                                   |
| 28:28      | Yeah.                                                                                                |
| 28:29      | And it, trust me, at the very least it's worth watching just to see how this gets done.              |
| 28:34      | So anyway, back to our list of checking it twice or even thrice.                                     |
| 28:39      | You've probably got some people that you want to buy the presents for and then you're going          |
| 28:41      | to wrap the presents and then you're going to deliver the presents.                                  |
| 28:44      | But in order to make sure everything gets done, it's worth having a list.                            |
| 28:48      | Really worth having a list for this.                                                                 |
| 28:51      | And I've actually created two shortcuts, one for things and one for OmniFocus, where you             |
| 28:56      | can choose some contacts.                                                                            |
| 28:57      | And then for each of these, you get two tasks added to a project which is created for you            |
| 29:03      | called by default Christmas 2018, but you can of course rename that to suit your needs.              |
| 29:10      | And it will just add a task to buy the present for person and wrap the present for person            |
| 29:18      | to your task list, which is quite simple, but I believe that this could save me quite                |
| 29:25      | a bit of time.                                                                                       |
| 29:26      | Because last year I was there going, hmm, three years before Christmas, and I forgot                 |
| 29:29      | to buy my boyfriend's mama Christmas present.                                                        |
| 29:31      | Oh man.                                                                                              |
| 29:32      | That's the one person you got to take care of, Russ.                                                 |
| 29:35      | Oh, trust me.                                                                                        |
| 29:36      | I fixed that.                                                                                        |
| 29:37      | We went out and I found a beautiful hat scarf and gloves set for her, which she was absolutely       |
| 29:42      | thrilled with.                                                                                       |
| 29:43      | So it turned out that it worked out really, really well, but it could have gone so horribly          |
| 29:47      | wrong.                                                                                               |
| 29:48      | So this year I have a list.                                                                          |
| 29:50      | So we've done the list a little differently, and this is very unautomated, I guess, is               |
| 29:57      | that a word?                                                                                         |
| 29:58      | But for me, the key with the Christmas gift list is the fact that we need to share it.               |
| 30:05      | Daisy and I do the shopping together and sometimes apart.                                            |
| 30:10      | So what we do is every year, at some point in November, we sit down and say, okay, what              |
| 30:14      | are we going to get for these people, and we have a shared [[Apple Reminders\|Reminders]] list.                           |
| 30:18      | And I know there's a bunch of apps that are way better at this, but because my wife is               |
| 30:23      | not so much of a geek and she's comfortable using [[Apple Reminders\|Reminders]], and I know that she'll open             |
| 30:28      | it and look at it, that's the method I chose.                                                        |
| 30:32      | And so we have a shared list and we have a syntax for it, although I never say that                  |
| 30:36      | word syntax to her.                                                                                  |
| 30:38      | So we have a list.                                                                                   |
| 30:40      | So what we do is the first thing I have is the name of the person and then the gift and              |
| 30:44      | then parentheses, I put the person who's going to buy it, because a lot of times we'll divide        |
| 30:49      | and conquer.                                                                                         |
| 30:50      | So it'll say Rose hyphen, apple pencil, and then parentheses is like David.                          |
| 30:56      | And then in that case, if we're saying we're going to get Rose and apple pencil and David's          |
| 31:02      | going to take care of it.                                                                            |
| 31:05      | But it's not necessarily written in stone that I'm going to take care of it.                         |
| 31:08      | If she's somewhere and she picks up the apple pencil, she'll check it off.                           |
| 31:11      | And then so the point is we just occasionally check in on that to see what's left that we            |
| 31:15      | need to buy.                                                                                         |
| 31:16      | And that works really well for the two of us, but I don't know how geeky it is.                      |
| 31:20      | Well, I would say that that is sufficiently geeky because especially if you're sharing               |
| 31:24      | this with a less technical person, the most important thing is that the other person's               |
| 31:28      | going to use it.                                                                                     |
| 31:29      | Now, I would definitely not classify my boyfriend as less technical.                                 |
| 31:33      | He has a master's degree in software engineering and he knows what he's doing when it comes          |
| 31:37      | to this stuff.                                                                                       |
| 31:38      | But for him, it's always the resistance factor.                                                      |
| 31:42      | How difficult is this to do?                                                                         |
| 31:44      | You might have this amazing idea of this Trello board where you move the card from ideas to          |
| 31:51      | purchasing and then from purchasing to wrapping and then from wrapping to delivering and             |
| 31:55      | then from delivering to waiting for the thank you letter or something like that.                     |
| 31:59      | That might be a lovely idea, but it's always about the acceptance of the other people that           |
| 32:03      | are involved in this.                                                                                |
| 32:04      | If you've got a four-year-old kid, is your four-year-old kid actually going to sit there             |
| 32:08      | and learn how to use Trello or are they just going to drag the cards wherever they want              |
| 32:11      | because they think it's a fun game?                                                                  |
| 32:13      | So I would highly recommend if you, even if the other people in your life are really technical       |
| 32:19      | and they are super into nerdiness, yeah, there's a lot of value in keeping it simple.                |
| 32:24      | If you're looking for a cross-platform solution, I would highly recommend to do this.                |
| 32:27      | That's what I'm sharing with my boyfriend.                                                           |
| 32:29      | He keeps all of his project stuff in there.                                                          |
| 32:31      | We have Alexa put groceries in there because at this time of year, you want to make sure             |
| 32:35      | that you've got all of your groceries because at the very least in a little place in Europe,         |
| 32:39      | the shops are just going to be shut for almost a week.                                               |
| 32:42      | So you want to get everything purchased in advance.                                                  |
| 32:46      | And that's great.                                                                                    |
| 32:47      | And we have a shared gift list in there as well, which actually I should have put a to-do            |
| 32:53      | list option there.                                                                                   |
| 32:54      | I'll see if I can get that done by the time the share releases.                                      |
| 32:57      | It's somewhat related since we're on the subject is birthday gifts.                                  |
| 33:03      | That's another one where you can add some degree of automation and I don't think we're               |
| 33:06      | ever going to do a show on birthday gifts.                                                           |
| 33:08      | So I'll tell you about it now.                                                                       |
| 33:10      | For me, I just create an OmniFocus repeating task that shows up a week before the birthday           |
| 33:17      | and it allows you to, it says, hey, you need to get Rose a birthday gift or birthdays in             |
| 33:22      | a week.                                                                                              |
| 33:23      | And that's all I need to kind of get myself rolling on it.                                           |
| 33:26      | And then in terms of the actual, like sending her a note on her birthday, I have calendars           |
| 33:30      | tell me and that usually is enough.                                                                  |
| 33:33      | As I'm saying it, of course, the automator inside me is going, oh, this would be kind                |
| 33:37      | of fun.                                                                                              |
| 33:38      | You could run a query with Siri shortcuts to look at the contacts database and pull out              |
| 33:44      | all the birthdays because it actually can do that.                                                   |
| 33:47      | And you can sort them by list and then display a list and maybe even manually select which           |
| 33:51      | ones you want to create OmniFocus reminders for.                                                     |
| 33:56      | It's actually doable as a Siri shortcut, but maybe a case where the automation is you're             |
| 34:01      | doing it just for the sake of the automation because there's not that many people that               |
| 34:05      | I have birthdays for.                                                                                |
| 34:06      | And I created these reminders years ago and they just work now because they, they repeat             |
| 34:10      | every year.                                                                                          |
| 34:11      | So.                                                                                                  |
| 34:12      | Yeah.                                                                                                |
| 34:13      | I mean, that's the brilliance of this technique.                                                     |
| 34:14      | If it repeats every year in whatever system you're using, you will not forget anybody's              |
| 34:18      | birthday.                                                                                            |
| 34:19      | Whereas if you decide that you're just going to have a shortcut and you're going to run              |
| 34:22      | it every month, that month that you don't run it, you will miss somebody's birthday.                 |
| 34:26      | And if somebody's birthday is on the second of the month or something, you are, you're               |
| 34:30      | going to run out of time.                                                                            |
| 34:31      | So having a reminder in your system is definitely a good way.                                        |
| 34:35      | Well, what I was thinking was rather than just do the thing a normal person would do                 |
| 34:39      | is look through my calendar and just create them each at a time I would have Siri shortcuts,         |
| 34:45      | pull them and then create the OmniFocus repeating tasks for me.                                      |
| 34:49      | If that makes sense.                                                                                 |
| 34:50      | But yeah, that is definitely case of automating for the sake of automating.                          |
| 34:55      | No, that said, if you want to do it, it's a great exercise.                                          |
| 34:59      | So.                                                                                                  |
| 35:00      | It's necessarily bad.                                                                                |
| 35:01      | Yeah.                                                                                                |
| 35:02      | Yeah.                                                                                                |
| 35:03      | Like that sort of thing is always good, especially if you've got a lot of people to go through,      |
| 35:06      | you know, you're probably going to want to grab a list of all the people with birthdays              |
| 35:08      | and then sort it out and go, yeah, I don't know, is David so important that he should                |
| 35:14      | get a birthday present?                                                                              |
| 35:15      | Yeah.                                                                                                |
| 35:16      | You know.                                                                                            |
| 35:17      | Don't answer that question.                                                                          |
| 35:18      | You can make me sad.                                                                                 |
| 35:21      | The answer is yes.                                                                                   |
| 35:22      | David is most definitely important enough.                                                           |
| 35:24      | The other thing I would do is a lot of times when you're doing holiday shopping or just              |
| 35:29      | kind of looking for gifts, whether for other people or for yourself, the way most of us              |
| 35:33      | do that anymore is on the web.                                                                       |
| 35:34      | I mean, so you're searching through, you've gone through Wirecutter, you've got the various          |
| 35:40      | Amazon pages or whatever you found for the gifts that you want to give or get.                       |
| 35:46      | And maybe you just need a list of those URLs.                                                        |
| 35:50      | That's kind of an interesting problem to automate that issue.                                        |
| 35:53      | I was kind of playing with it before we recorded.                                                    |
| 35:57      | There is a [[Keyboard Maestro]] command to get URL and then you would have to force it to                |
| 36:02      | go through for each tab and get the URL for each tab.                                                |
| 36:06      | There's also an [[AppleScript]] phrase that can look at [[Safari]] and pull the URL of the                  |
| 36:10      | frontmost tab.                                                                                       |
| 36:11      | And once again, you could cycle through those and automatically have it pull each one.               |
| 36:16      | But the solution that I found the easiest because it's already been done for us is from              |
| 36:21      | our friend [[Brett Terpstra]], who, by the way, we need to have on the automators.                       |
| 36:26      | But the Brett made a series of things called the Markdown Service Tools, which is some               |
| 36:33      | of the best automation for Mac on the web and it's absolutely free.                                  |
| 36:37      | I'm going to put a link in the show notes.                                                           |
| 36:39      | Go check it out if you find value in these things, buy something else that Brett makes               |
| 36:43      | or donate or do something for him because he's great.                                                |
| 36:46      | But anyway, one of the Markdown Service Tools is just, it just grabs all the tabs from [[Safari]]        |
| 36:53      | and creates a Markdown list of them.                                                                 |
| 36:56      | So if you've got your [[Safari]] open on your Mac and you've got, you know, 17 tabs open                 |
| 37:01      | to presence, you either want to buy for someone else or maybe something you want to tell people      |
| 37:05      | you'd like, you just run this service, you right click in the text field of any text                 |
| 37:11      | editor, text edit, pages, Ulysses, whatever, and it will run a script that goes to [[Safari]],           |
| 37:18      | grabs each tab, creates a URL for the tab and then turns it into a Markdown list and                 |
| 37:23      | prints it right into the word processor that you're in.                                              |
| 37:28      | And this is a great little tool and it's all done for you.                                           |
| 37:31      | Yes, that is really useful.                                                                          |
| 37:33      | I use Pinterest to store the things that I would like to receive as gifts just because               |
| 37:38      | it's very visual and I believe that list is actually public, but just because it makes               |
| 37:43      | it easier, like my mom doesn't have to have a Pinterest account because she wants to know            |
| 37:47      | what Pinterest is and it's very confusing, but if I just send her a page, pretty pictures            |
| 37:51      | on it that she can click on and then purchase stuff for me, that's much easier.                      |
| 37:56      | And yeah, that's good.                                                                               |
| 37:58      | Don't forget as well, if you're looking for things to get people and you're stuck for                |
| 38:02      | ideas, Amazon does have a feature where you can search for public wish lists of people.              |
| 38:07      | So if you search, I would caution you, if you search for David Sparks, you will not                  |
| 38:13      | find David, just because there are hundreds of David Sparks, unfortunately.                          |
| 38:18      | But yeah, it might well be that somebody has already created a wish list for themselves              |
| 38:23      | and you can go there and steal ideas, which is always worth doing.                                   |
| 38:27      | Well, I think it's a pretty good start on holiday automation, Rose.                                  |
| 38:32      | I think it is.                                                                                       |
| 38:33      | The only follow-up, I would say, is don't forget delegation, which is not strictly automation,       |
| 38:39      | but maybe if you've got kids or friends, see if you can delegate some stuff to them, or              |
| 38:45      | at the very least, have some fun together this holiday season.                                       |
| 38:48      | That is definitely very important.                                                                   |
| 38:51      | This isn't entirely automation, but every year we try to make a unique Christmas card                |
| 38:55      | for our family.                                                                                      |
| 38:57      | And I always, the Mac or iOS is always involved at some level.                                       |
| 39:02      | This year we decided to do the Andy Warhol cards, the Andy Warhol posterised.                        |
| 39:09      | So we took pictures of the four of us all looking really cool.                                       |
| 39:13      | And then I just did that in Pixelmator on the Mac.                                                   |
| 39:17      | I could have done it on iOS as well by doing it on the Mac this year.                                |
| 39:21      | So every year I use the technology to build the cards, and we've had a lot of fun with               |
| 39:24      | that over the years.                                                                                 |
| 39:25      | Yeah, that sounds great fun, and that is the sort of thing that everybody enjoys.                    |
| 39:30      | It's got a lot easier now too, because when we first started doing it, we'd like get                 |
| 39:34      | pictures made of whatever it was that we made, and then we'd have to attach that to a card.          |
| 39:38      | But now these printing services have got so good, you can upload your own picture and                |
| 39:42      | they do a really good job of printing it onto the card for you.                                      |
| 39:46      | Yes, which is something you might be thinking, oh, by the time you're listening to it, it's          |
| 39:51      | a bit late for this year, but hold on to that idea for next year.                                    |
| 39:53      | Put it in your task management system and have it remind you so that you have an automated           |
| 39:57      | reminder for next year.                                                                              |
| 39:58      | And then print out your labels and you're good to go.                                                |
| 40:01      | Yes.                                                                                                 |
| 40:02      | All right, everybody.                                                                                |
| 40:04      | So if you've got more ideas for holiday automation, we'd love to hear them.                          |
| 40:09      | Head over to talk.automators.fm and in the notes for the show, I definitely will be reading          |
| 40:16      | them all and trying to crib ideas from you, because I love automating the holidays.                  |
| 40:21      | And if you want to learn more about us, we are the Automators.                                       |
| 40:25      | We're at automators.fm, we're over at Relay on relay.fm/automators.                              |
| 40:32      | Rose is Rosemary Orchard on Twitter, I'm Matt MacSparky.                                             |
| 40:35      | What I miss, Rose.                                                                                   |
| 40:37      | Automators is on Twitter too, Automators.fm.                                                         |
| 40:39      | If you want to give us a Christmas present and you haven't followed us on Twitter, follow            |
| 40:42      | us on Twitter.                                                                                       |
| 40:43      | There you go.                                                                                        |
| 40:44      | And if you have followed us already, then that's okay.                                               |
| 40:47      | I'd say if you want to give us a real Christmas present, give us a review, because we've never       |
| 40:50      | had, I don't think we've ever asked for that in the show.                                            |
| 40:53      | I think we did in the very first few episodes, but we're in double digits now.                       |
| 40:58      | Give us a review.                                                                                    |
| 41:00      | And everybody have a happy holiday, we'll be back with more automation in a couple weeks.            |
| 41:04      | See you then.                                                                                        |
