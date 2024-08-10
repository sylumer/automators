---
status: "incomplete"
fc-date:
  year: 2019
  month: 02
  day: 15
fc-category: "podcast"
podcast: "Automators"
published: 2019-02-15
duration: 2649
formattedduration: "00:44:09"
hosts: ["David Sparks","Rosemary Orchard"]
guests: []
notetype: "episode"
showpage: "http://relay.fm/automators/17"
episodeurl: "https://www.podtrac.com/pts/redirect.mp3/traffic.libsyn.com/automatorsrelay/17_-_Live_at_PodCon.mp3"
episode: 17
title: "17: Live at PodCon"
---
![Automators Logo|200x200](Logo.jpg)

# Synopsis
This week David and Rose come to us live from PodCon with a very enthusiastic audience where they take the opportunity to dive into some of their travel automation setups. Once back in the studio they then go through some of the great feedback they've received recently.

# Hosts
- [[David Sparks]]
- [[Rosemary Orchard]]

# Guests
- None.

# Links
- `$="[Show Page](" + dv.current().showpage + ")"`
- [Episode 017 Discussion](https://talk.automators.fm/t/automators-17-live-at-podcon/4057)

# Sponsors
- [[ExpressVPN (Sponsor)|ExpressVPN]] - High-Speed, Secure & Anonymous VPN Service.

# Show Notes
- [Tripit - Travel Itinerary - Trip Planner](https://www.tripit.com/)
- [Append to Bear](https://www.icloud.com/shortcuts/c99cab3bf76b4121bda45fb5e1a471f2) - A shortcut to help you append to Bear notes for David's home grown Tripit solution. 
- [Packing List Shortcut](https://www.icloud.com/shortcuts/bbd642d45f0c46ffb6b9d3850554d45c) - Rose's crazy packing list shortcut
- [Scanner App for iPhone and iPad | Best Scanning App | Scanner Pro](https://readdle.com/scannerpro)
- [Automators #5: Project Templates - Relay FM](https://www.relay.fm/automators/5)
- [Here I Am - David's Location Shortcut](https://www.icloud.com/shortcuts/0c7615e525114639aefbb37099c77b56)
- [Automators Talk - the official forums](https://talk.automators.fm/)
- [iBeacon Recommendations - iOS - Automators Talk](https://talk.automators.fm/t/ibeacon-recommendations/3573/8?u=rosemaryorchard)
- [Estimote, Inc. - indoor location with Bluetooth beacons and mesh](https://estimote.com/) - These are the iBeacons Rose and David are using. 
- [Automators #9: Scriptable with Simon Støvring - Relay FM](https://www.relay.fm/automators/9)
- [Car plate identification script - iOS / Scriptable - Automators Talk](https://talk.automators.fm/t/car-plate-identification-script/2180)
- [Scriptable Forums - Automators Talk](https://talk.automators.fm/c/ios/scriptable)
- [Pearl Compact Makeup Mirror USB Battery Pack with LED Ring Light - Hyper Shop.com](https://www.hypershop.com/collections/pearl) - This is Rose's crazy battery pack
- [So Many Tools but which one to choose - macOS - Automators Talk](https://talk.automators.fm/t/so-many-tools-but-which-one-to-choose/3556?u=rosemaryorchard) - Automator, Alfred, AppleScript, Hazel - which solution?
- [Keyboard Maestro Forums](https://forum.keyboardmaestro.com/)
- [Apple contacts to document? Beginner looking for help - macOS - Automators Talk](https://talk.automators.fm/t/apple-contacts-to-document-beginner-looking-for-help/3911) - This could potentially be solved with a mail merge. 
- [List all of the Applications on your Mac - Burk (Micro.Blog)](https://micro.burk.io/2019/01/28/one-of-my.html)
- [Launch Center Pro Shop - Contrast](https://shop.contrast.co/collections/launch-centre-pro/) - You can purchase Launch Center Pro NFC Stickers here
- [Automators (@automatorsfm) / Twitter](https://twitter.com/automatorsfm)
- [Short: Airport Travel](https://www.icloud.com/shortcuts/26bc7c0e410e4e8baa5c68227a6486e9) - A shortcut to help Rose quickly enter her travel to the airport

# Transcription

| Time Index | Transcription                                                                                                      |
| :--------- | :----------------------------------------------------------------------------------------------------------------- |
| 00:00      | All right. Well, hello and welcome to Automators Live at PodCon.                                                   |
| 00:10      | I am here with a very enthusiastic audience.                                                                       |
| 00:14      | It's crazy. There's like 10,000 people here to watch us talk about automation.                                     |
| 00:18      | I had no idea that we would draw a crowd like this.                                                                |
| 00:21      | Yeah, it's kind of scary, right?                                                                                   |
| 00:22      | Yeah, this is awesome. Thank you, you all. Thank you.                                                              |
| 00:25      | Sir, sir in the front, sit down, please.                                                                           |
| 00:27      | Yes. So, yeah, we thought that a good topic for this mini show,                                                    |
| 00:33      | which is going to be wrapped into a longer show released in a couple of weeks,                                     |
| 00:37      | would be to talk about how we got here with automation, right?                                                     |
| 00:41      | Yeah. So, Rose and I are at the PodCon Convention Conference in Seattle, having a great time.                      |
| 00:46      | There's a lot of people here with horns and...                                                                     |
| 00:50      | Elf ears.                                                                                                          |
| 00:51      | Elf ears. It's kind of cool. It's our usual crowd. That's good.                                                    |
| 00:55      | And we're going to talk about automation. So, just to make it super nerdy, like Rose said,                         |
| 01:01      | we both had put together some simple automations we used to get here,                                              |
| 01:05      | and we thought we'd do kind of a speed round of talking through how we did that stuff.                             |
| 01:09      | Yeah. You want to go first?                                                                                        |
| 01:10      | All right. I'm going to go first with the one that I preach about everywhere,                                      |
| 01:14      | which is I use Tripit to automate my travel itineraries.                                                           |
| 01:17      | So, Tripit is this really cool service. It's free. You can pay for it as well.                                     |
| 01:21      | I am a Tripit pro user, but the stuff that I'm talking about right now                                             |
| 01:24      | can be done for free.                                                                                              |
| 01:25      | And essentially what you do, you book something, like a hotel, or a flight, or a train,                            |
| 01:30      | and then you send the email that you get. You just forward it to Tripit,                                           |
| 01:33      | and then they just magically read everything.                                                                      |
| 01:36      | They parse everything out, and they stick it all together.                                                         |
| 01:38      | And then they create this trip plan for you so that you can see, like, hey, okay.                                  |
| 01:41      | So, first, I'm flying from Vienna to Newark Airport, and then from Newark to Seattle,                              |
| 01:45      | and then I'm staying in this hotel in Seattle for one night,                                                       |
| 01:47      | and then I'm staying in this hotel for the other night,                                                            |
| 01:49      | then I'm flying back to Washington, D.C., and then from there, I'm flying home to Vienna.                          |
| 01:53      | And it just has all of that, and then you can just pray, make one PDF,                                             |
| 01:57      | and it's like, I know what I'm doing now. Yay! That's always good.                                                 |
| 02:02      | Yeah, you know, I have the homegrown Tripit thing.                                                                 |
| 02:04      | What I do recently, I've been trying to use Bear, which is another note-taking app.                                |
| 02:08      | I know. I like note-taking apps.                                                                                   |
| 02:11      | But this one is very automation-friendly, and it allows you to append information                                  |
| 02:16      | and files to a note. So whenever I take a trip, I create in Bear a new note.                                       |
| 02:22      | Like, I have one called 2019 PodCon.                                                                               |
| 02:25      | So, when I first do it, I'll write down the details,                                                               |
| 02:30      | maybe I'll write down the names of the people I'm going to be with,                                                |
| 02:32      | or whatever details I know about the conference.                                                                   |
| 02:36      | But then the emails start coming in, and we all get a bunch of email,                                              |
| 02:39      | whether it's from the airline or the hotel or whatever.                                                            |
| 02:41      | And I've got a simple thing what I do. It's a series shortcut extension.                                           |
| 02:49      | So the way it works is in [[Airmail]], which is the mail application I'm using,                                        |
| 02:53      | but you can do this in [[Apple Mail]] too.                                                                             |
| 02:54      | You can render an email as a PDF, and then you press the extension button.                                         |
| 03:00      | And it's just one action. In fact, let me just check here to make sure I got this right.                           |
| 03:04      | And what it does is it just saves the file to Bear,                                                                |
| 03:09      | but it allows you to specify when you create the series shortcut                                                   |
| 03:14      | which Bear file does it go to.                                                                                     |
| 03:17      | And so I have it save it directly to the Bear file that's related to the trip.                                     |
| 03:22      | So you could do this for any trip you take or any kind of event.                                                   |
| 03:24      | So as emails start coming in, you just press one button, it saves that email to it.                                |
| 03:30      | Now, this also works with a PDF.                                                                                   |
| 03:31      | So because it's an extension, it can attach itself to a PDF.                                                       |
| 03:35      | So it doesn't have to just be the text of an email, it could also be the attached PDFs.                            |
| 03:39      | And by just hitting that one button as these things come in,                                                       |
| 03:42      | then I've got one note that has all that stuff accumulated.                                                        |
| 03:45      | It doesn't do like Tripit does a better job of making it pretty                                                    |
| 03:48      | because Tripit really combines it nicely.                                                                          |
| 03:50      | But this is just a really simple way to put it all in one place.                                                   |
| 03:53      | And then you've got it all in that bear note.                                                                      |
| 03:55      | So the day you go to leave, you've got your airline, your hotel, all that stuff in one place.                      |
| 04:00      | Yeah. And one of the things I do, so I take that Tripit.                                                           |
| 04:05      | So Tripit has a calendar that you can subscribe to.                                                                |
| 04:07      | And I don't usually use Google Calendar, but for this, I use Google Calendar.                                      |
| 04:11      | And so I've subscribed to my Tripit calendar in Google Calendar.                                                   |
| 04:13      | And then I have Zapier watch it and whenever Zapier sees a new all day event                                       |
| 04:17      | added to the Tripit calendar, it then takes that and it creates one task in my OmniFocus inbox.                    |
| 04:24      | But this task is kind of special because it's actually got a OmniFocus URL in the notes field,                     |
| 04:30      | which when I tap on it creates an entire trip project for me based on the information from the Tripit trip.        |
| 04:38      | So that I know I have the name of the event and then they match up in OmniFocus and in Tripit.                     |
| 04:42      | So it's all the same. So I can just look at it and be like, OK, right.                                             |
| 04:46      | So it's 2019 slash 01 dash Seattle. That's the name of this trip.                                                  |
| 04:50      | And it's the same everywhere.                                                                                      |
| 04:51      | Nice. Nice.                                                                                                        |
| 04:53      | Let's talk about getting packed up and automation stuff we did.                                                    |
| 04:58      | You've got a very cool automation.                                                                                 |
| 04:59      | I want to give you the most time on this, but just real quick, the way I've done packing lists,                    |
| 05:04      | I don't even think it qualifies as automation, but Rose says I have to tell you about it.                          |
| 05:09      | If you go on [[Apple Reminders\|Reminders]], I just have a list called packing list and I've added to it over the years.                |
| 05:14      | I've got so much stuff in there.                                                                                   |
| 05:16      | I was just looking and I've got an entry called fancy socks, you know,                                             |
| 05:19      | because sometimes I go to a wedding or something.                                                                  |
| 05:22      | If I don't bring my fancy socks, I'm going to look like an idiot.                                                  |
| 05:24      | So what I do is I have all these items in here and for every trip, I'll add new things.                            |
| 05:28      | Like in this trip, I brought some really nice stickers for Rose.                                                   |
| 05:32      | And if you were here with the 10,000 people, you'd be able to get one of her stickers.                             |
| 05:37      | But so I just added Rose stickers.                                                                                 |
| 05:39      | I've got this list and they're all checked off all the time, except when I prepare for a trip.                     |
| 05:42      | And then in [[Apple Reminders\|Reminders]], you can say, show me the completed items.                                                   |
| 05:46      | And I'll just scroll through that list and click on the ones that I want to add to the packing list for this trip. |
| 05:51      | And because I've got such a kind of encompassing list, it's very easy to populate that.                            |
| 05:57      | The other advantage of [[Apple Reminders\|Reminders]] is you can share that with someone.                                               |
| 06:00      | So I share with my spouse when we're doing like a family trip and she can be checking items off as well.           |
| 06:04      | And [[Apple Reminders\|Reminders]] is the right speed for her.                                                                          |
| 06:07      | I know there's some really cool packing apps, but and I have some good ideas of the [[Apple Reminders\|Reminders]],                     |
| 06:12      | but forget everything because Rose has turned this into a Siri shortcut.                                        |
| 06:16      | Well, I did used to use an app called TripList, which syncs with Tripit, but it hasn't updated for the iPhone 10.  |
| 06:22      | And now I have an iPhone 10S Max, so it just looks horrific.                                                       |
| 06:24      | So I gave up on that and said, OK, I'm doing this in shortcuts.                                                    |
| 06:28      | And essentially what I do is I build a dictionary in shortcuts.                                                    |
| 06:32      | And so I have clothing and then list of different clothing that I might take.                                      |
| 06:37      | So like T-shirts, jumpers, socks, et cetera.                                                                       |
| 06:39      | You have fancy socks in your list?                                                                                 |
| 06:40      | I do not have fancy socks, but I'm sure everybody's dying to know what are non fancy socks like.                   |
| 06:45      | Do they have BB-8 on them?                                                                                         |
| 06:47      | Usually. OK, usually.                                                                                              |
| 06:48      | I mean, that's acceptable.                                                                                         |
| 06:50      | BB-8 socks are good.                                                                                               |
| 06:51      | The stance Star Wars.                                                                                              |
| 06:52      | I won't lie when I say the stance Star Wars socks have a lot of real estate in my sock drawer.                     |
| 06:59      | That's OK.                                                                                                         |
| 07:00      | Well, I may need to add fancy socks to my packing list.                                                            |
| 07:03      | But essentially what I do is I build this dictionary.                                                              |
| 07:05      | So the keys are the different kinds of things that I pack, like clothing, technology, random stuff                 |
| 07:11      | that apparently I need on the plane, like [[Nintendo Switch]], because why not?                                        |
| 07:15      | And things like that.                                                                                              |
| 07:16      | And then I go through and I have it give me the list of the keys.                                                  |
| 07:22      | So it's like, OK, do you need to pack clothing?                                                                    |
| 07:24      | You would think that's obvious.                                                                                    |
| 07:25      | But for some trips, you don't need clothing because you're just going for like one night                           |
| 07:28      | and it's just like, OK, I just need some clean underwear and we're good.                                           |
| 07:31      | And then so I select the different things and it goes through and it builds a nicely                               |
| 07:37      | layered series of action groups, which are Taskpaper, which I then add to OmniFocus.                              |
| 07:44      | Because I do everything in OmniFocus, including my packing lists.                                                  |
| 07:46      | And what I do is I add a specific tag to everything.                                                               |
| 07:50      | And this tag is called the packing tag.                                                                            |
| 07:51      | And most of the time this tag is on hold because, for example, the trip to [[WWDC]],                                   |
| 07:56      | that's going to happen in June this year, I do not need to see the fact that I need                                |
| 08:00      | to pack five pairs of socks.                                                                                       |
| 08:02      | Like right now that is not important in my day to day life.                                                        |
| 08:05      | So that tag is always on hold.                                                                                     |
| 08:06      | And then like a couple of days before the trip, then I'll just take that tag off hold                              |
| 08:10      | and I'll see all of my packing items for everything.                                                               |
| 08:12      | And what I like about this is it means that I can have like a section called podcasting                            |
| 08:16      | gear.                                                                                                              |
| 08:17      | And if I'm going to visit my boyfriend's sisters, I do not need to pack podcasting                                 |
| 08:20      | gear.                                                                                                              |
| 08:21      | I mean, I could, but they're probably going to look at me like I've grown four heads                               |
| 08:23      | instead of the season two, so I'm sticking with no podcasting gear for that trip.                                  |
| 08:28      | And that's what I do with that.                                                                                    |
| 08:29      | And I will share a link to this one in the show notes and probably do a little video                               |
| 08:34      | on it as well, because it looks kind of crazy when you look at it, but it's actually nice                          |
| 08:38      | and easy to edit and to make more, more sections of it.                                                            |
| 08:42      | Yeah, I was looking at this and what I really liked the way Rose did it, she made up modular,                      |
| 08:46      | uses a dictionary entry.                                                                                           |
| 08:47      | So if you've got not podcasting equipment, but maybe, you know, you like to go fly your                            |
| 08:53      | drone or do something else, you could make a segment for that as well.                                             |
| 08:59      | We've got some other topics though we wanted to talk about.                                                        |
| 09:02      | One of them that I think of whenever I go to like a conference, you know, is you get                               |
| 09:08      | a lot of paper, people throw paper at you everywhere you go.                                                       |
| 09:11      | We were walking around the show floor here, everybody has their paper they want to give                            |
| 09:15      | us and then Rose got the cool swag bag, you know, it's full of stuff.                                              |
| 09:20      | I don't like any of that stuff, you know, I don't want that paper.                                                 |
| 09:24      | So I made a scanner pro automation for this scanner pro is a great app.                                            |
| 09:29      | We haven't talked about it on the show yet, but it's an app that allows you to take a                              |
| 09:33      | picture of anything turning into a PDF, but they're very automation friendly.                                      |
| 09:37      | This one doesn't require a serious shortcut, you can do it right in the application.                               |
| 09:41      | And they have automations in the app.                                                                              |
| 09:44      | They are called.                                                                                                   |
| 09:45      | I should have it over.                                                                                             |
| 09:46      | I think they're called workflows.                                                                                  |
| 09:47      | Yeah, workflows, of course.                                                                                        |
| 09:49      | Audience nods.                                                                                                     |
| 09:50      | Yes, workflows.                                                                                                    |
| 09:51      | Yeah.                                                                                                              |
| 09:52      | So I've made a simple workflow that allows me to take a document that it has image.                                |
| 09:57      | So it's always scanner pro, it's you just find a piece of paper and it turns it into                               |
| 10:00      | a PDF.                                                                                                             |
| 10:01      | It does a really good job.                                                                                         |
| 10:02      | It gets the contrast right.                                                                                        |
| 10:04      | It finds the edges.                                                                                                |
| 10:07      | And then you run a workflow and the workflow I do renames the file.                                                |
| 10:13      | That's the sexy part, Rose, the rename.                                                                            |
| 10:16      | So what's the formatting on the naming?                                                                            |
| 10:19      | So I just put podcon and then a hyphen and then the date and then a hyphen and then the                            |
| 10:23      | time.                                                                                                              |
| 10:24      | And the reason I do that is I just want to get enough distinction that as I take pictures                          |
| 10:29      | of different things walking around here, they'll be the distinct files.                                            |
| 10:34      | And then I save it to a folder that I created on [[Dropbox]].                                                          |
| 10:38      | So as I walk through the conference or like if you do speaking, they give you these bags                           |
| 10:44      | full of stuff.                                                                                                     |
| 10:45      | You can just take pictures of things.                                                                              |
| 10:46      | Like if you see somebody at a conference, you take a picture of their business card.                               |
| 10:49      | If you see a vendor you want, you take a picture of their poster.                                                  |
| 10:53      | And at the end of the day, you've got this collection of PDFs that have saved to your                              |
| 10:57      | [[Dropbox]] and you don't have to take any paper home.                                                                 |
| 11:01      | And then I guess what I should do is I should add a create task in OmniFocus or whatever                           |
| 11:07      | your task manager of choice is to review that stuff in a week when you get home.                                   |
| 11:10      | Yeah.                                                                                                              |
| 11:11      | Because I mean, in the moment of travel, everything's like, oh my gosh, it's so pretty.                            |
| 11:15      | I need this map.                                                                                                   |
| 11:16      | I need this other map.                                                                                             |
| 11:17      | I've got 5,000 maps of Disneyland Paris now.                                                                       |
| 11:19      | I'm not even kidding.                                                                                              |
| 11:20      | And it's like, what am I going to do with all of this?                                                             |
| 11:22      | So yes, that's a very good point.                                                                                  |
| 11:24      | You want to have a point to review that.                                                                           |
| 11:27      | And that's one of the reasons why I like creating templates, which was one of our early episodes                   |
| 11:32      | we created.                                                                                                        |
| 11:33      | We talked about creating project templates and that's something I do for all of my                                 |
| 11:35      | trips every trip has a project template.                                                                           |
| 11:40      | Another automation I have is I use Airmail.                                                                        |
| 11:43      | We're both using Airmail right now as my mail app of choice.                                                       |
| 11:46      | And it has these things that are called custom actions.                                                            |
| 11:49      | And I have a trip action in there, which is just for travel.                                                       |
| 11:54      | And so what it does is it marks the emails read.                                                                   |
| 11:58      | So if, for example, I've got five or six emails related to the trip that are all coming                            |
| 12:01      | together, I can just handle them all together.                                                                     |
| 12:04      | It tags it with my travel tag, archives it, and forwards it to Tripit.                                             |
| 12:09      | So then Tripit will then go suck it all in and parse it and turn it into something pretty.                         |
| 12:15      | And of course, there is a filter in the backend to get rid of all the Tripit emails going,                         |
| 12:18      | yes, thank you very much.                                                                                          |
| 12:19      | We've received this email from you.                                                                                |
| 12:21      | Like as long as it worked, I don't care.                                                                           |
| 12:23      | So I just have that automatically filtered away.                                                                   |
| 12:25      | How do you deal with email when you're on a trip?                                                                  |
| 12:28      | Do you have any automation to help avoid the flood?                                                                |
| 12:32      | It's not precisely an automation in settings.                                                                      |
| 12:35      | You can turn off notifications.                                                                                    |
| 12:37      | So I just do that.                                                                                                 |
| 12:38      | Yeah.                                                                                                              |
| 12:39      | It depends for me if it's a long trip, I will make an auto responder.                                              |
| 12:43      | Yeah.                                                                                                              |
| 12:44      | Also, if you use something like a sandbox, the occasional sponsor over in Mac Power users,                         |
| 12:48      | they have a vacation mode where it'll save emails just into a vacation folder and you                              |
| 12:52      | can deal with it and you get back.                                                                                 |
| 12:53      | Yeah.                                                                                                              |
| 12:54      | That's great for something like a work email address for work.                                                     |
| 12:56      | Of course, I have an auto responder enabled.                                                                       |
| 12:58      | My phone is forwarded.                                                                                             |
| 13:02      | That's the word.                                                                                                   |
| 13:03      | I was thinking of the German word for a moment because that's what my task manager tells me.                       |
| 13:07      | And yeah, I actually have two projects for every trip.                                                             |
| 13:10      | I have a work one which goes into the work section and then my regular one.                                        |
| 13:14      | So I know, for example, coming here, there were approximately six travel disasters on                              |
| 13:20      | the way and I ended up arriving a day early after all of that, which is impressive, but                            |
| 13:24      | it was good because I looked at it and it's like, okay, I am on my way to the airport much                         |
| 13:28      | earlier than I anticipated, what stuff did I not do before I left work on Friday that                              |
| 13:33      | has to be done and got it all done in the airport.                                                                 |
| 13:35      | Is that like a British thing?                                                                                      |
| 13:36      | Like Dr. Who, you have a problem?                                                                                  |
| 13:38      | You get there day early?                                                                                           |
| 13:40      | In my case, it was just a case of I turned up at the airline desk and said, help me please.                        |
| 13:45      | And they said, okay.                                                                                               |
| 13:47      | So yeah, I got put on an early flight.                                                                             |
| 13:52      | So yeah, I do think that finding a way to deal with email and your time when you're traveling                      |
| 13:58      | is important.                                                                                                      |
| 13:59      | We talked about time blocking and automation for time stuff.                                                       |
| 14:02      | I find that one of my little series short shortcuts is what I call travel work and it's                            |
| 14:08      | just a simple series shortcut that creates a series of events.                                                     |
| 14:12      | And unfortunately, I just don't have the kind of life where I can just like completely unplug                      |
| 14:16      | for a week at a time.                                                                                              |
| 14:17      | So before I leave on a trip, I just run this shortcut and it creates some events for me                            |
| 14:22      | in my calendar to deal with email and some of the day-to-day business of my various enterprises.                   |
| 14:29      | And usually they're early morning events that could create an automatically and it kind                            |
| 14:33      | of makes me hold myself honest.                                                                                    |
| 14:35      | So like when I'm on a trip and I'm drinking and it's getting late, I have something to                             |
| 14:40      | remind me that, okay, don't go too crazy here, man.                                                                |
| 14:43      | You got to get up and work tomorrow morning.                                                                       |
| 14:45      | So that's a very simple automation.                                                                                |
| 14:46      | You just create an event and then I run that usually on the plane on the way to a trip.                            |
| 14:51      | Yeah, I mean, I do something kind of similar.                                                                      |
| 14:54      | I usually create a task, a tag, sorry, an OmniFocus.                                                              |
| 15:00      | And this is especially useful for work things.                                                                     |
| 15:02      | And I create a tag that's called after XYZ trip.                                                                   |
| 15:06      | So in the run up to the trip, I'm looking at everything and people are going, Rose, can                            |
| 15:09      | you do this?                                                                                                       |
| 15:10      | Rose, I need you to do this for me.                                                                                |
| 15:11      | And I'm like, okay, after the trip.                                                                                |
| 15:13      | And then this tag is on hold and then when I come back from the trip, I just delete that                           |
| 15:17      | tag.                                                                                                               |
| 15:18      | What I used to do is defer everything until after the trip.                                                        |
| 15:20      | There is nothing worse than coming back to work after a trip and looking at your task                              |
| 15:24      | manager and going, oh, that's a lot of stuff.                                                                      |
| 15:28      | Like, you know, you want to ease yourself back into it.                                                            |
| 15:30      | So all I do is I have to just delete the tag and then stuff reappears where it's supposed                          |
| 15:34      | to be.                                                                                                             |
| 15:35      | You know, it's, Rose, it's really fun podcasting with you sitting next to you.                                     |
| 15:39      | It's slightly weird, but I like it.                                                                                |
| 15:40      | I guess we can talk, we don't talk over each other as much and we're in front of this great                        |
| 15:44      | live audience.                                                                                                     |
| 15:45      | There's a bunch of great nerds out there.                                                                          |
| 15:46      | Say hi, everybody.                                                                                                 |
| 15:48      | Yeah, see, that's, that's, that sounds like 10,000 to me, I think.                                                 |
| 15:51      | Definitely.                                                                                                        |
| 15:52      | Definitely.                                                                                                        |
| 15:53      | Occasionally, somebody walks by in full costume and they look at us and they listen to like                        |
| 15:56      | five seconds of what we say and they're like, what, wasn't this supposed to be like funny                          |
| 16:00      | shows?                                                                                                             |
| 16:01      | Yeah.                                                                                                              |
| 16:02      | What's going on here?                                                                                              |
| 16:03      | Well, I mean, somebody just laughed.                                                                               |
| 16:04      | So there we go.                                                                                                    |
| 16:05      | We're good.                                                                                                        |
| 16:06      | It was an uncomfortable laughed.                                                                                   |
| 16:08      | So I'll take it though.                                                                                            |
| 16:09      | What are some of your other favourite travel automations?                                                           |
| 16:13      | Oh, um, yes.                                                                                                       |
| 16:16      | We don't have time for a lot of them.                                                                              |
| 16:18      | Let me see.                                                                                                        |
| 16:19      | I'm just going to have a quick look in shortcuts and see which ones I could go through super                       |
| 16:24      | quickly.                                                                                                           |
| 16:25      | Let me see.                                                                                                        |
| 16:26      | I'll tell you, one of my favourite automations is making sure that my noise canceling headphones                    |
| 16:31      | are on my packing list.                                                                                            |
| 16:32      | Oh, yeah.                                                                                                          |
| 16:33      | You've got to have them.                                                                                           |
| 16:35      | Yes.                                                                                                               |
| 16:36      | I actually have one, which is adding my travel to the airport.                                                     |
| 16:39      | So the way I get to the airport, I take a tram and a train.                                                        |
| 16:41      | Yeah.                                                                                                              |
| 16:42      | Okay.                                                                                                              |
| 16:43      | And the tram always lasts for X minutes and the train always lasts for X minutes.                                  |
| 16:45      | Um, and so I actually have a shortcut that just asked me, okay, what time does the tram                            |
| 16:50      | leave?                                                                                                             |
| 16:51      | What time does the train leave?                                                                                    |
| 16:52      | And it sticks it in my travel calendar.                                                                            |
| 16:53      | Um, which yeah, because I always look it up, but adding everything with the addresses                              |
| 16:57      | and stuff so that it appears at the right thing.                                                                   |
| 16:59      | And so that you know that you get the reminder to leave so that you actually get the tram                          |
| 17:04      | instead of standing there going, well, that was the tram.                                                          |
| 17:07      | Cool.                                                                                                              |
| 17:08      | How do I get to the airport?                                                                                       |
| 17:09      | Yeah.                                                                                                              |
| 17:10      | Yeah.                                                                                                              |
| 17:11      | Another one I use is another series shortcut all the time is a lot of times I go on trips                          |
| 17:14      | and, uh, without my family, it's work related.                                                                     |
| 17:17      | And, um, I like to just kind of keep my wife posted as to where I'm at and what's going                            |
| 17:22      | on.                                                                                                                |
| 17:23      | And I have a real simple series shortcut called here I am and all it's two steps.                                  |
| 17:27      | It goes into [[Shortcuts\|Siri Shortcuts]], it grabs my current location and it creates a text message                          |
| 17:33      | because I only have one wife that makes it really easy.                                                            |
| 17:36      | I, I create the text message and it's already addressed to her and it says here I am and                           |
| 17:41      | it just drops my current address in.                                                                               |
| 17:44      | It's like when I get back to the hotel, I'll send it to her and it's just one button.                              |
| 17:48      | Um, I could even automate that now that I think about if I want to automate firing                                 |
| 17:52      | that off.                                                                                                          |
| 17:53      | But it's just a nice way to kind of let her know how I'm doing and then like usually                               |
| 17:57      | when I get back to the room is when I can get on the phone together and then she doesn't                           |
| 18:00      | call me until she gets that text message.                                                                          |
| 18:03      | Um, it's, it's, it's an example of something anybody can do.                                                       |
| 18:07      | Everybody that's got an iOS device can load up [[Shortcuts\|Siri Shortcuts]], two steps, find location                          |
| 18:12      | and the next one is send a text message and you're in another one, which I use is in find                          |
| 18:17      | friends, uh, which is built into iOS, um, is, uh, the ability to either notify somebody                            |
| 18:24      | when you get to a location or if you are stalking somebody like this weekend, I'm stalking David,                  |
| 18:30      | you can have it notify you when they get to a location.                                                            |
| 18:33      | So David yesterday was on his way to the hotel from the airport and I just had it notify                           |
| 18:37      | me when he was like a block away and I got a notification was able to go down to the lobby                         |
| 18:41      | and look like I've been sitting there for hours waiting for him when actually I just                               |
| 18:45      | got there like 30 seconds earlier.                                                                                 |
| 18:47      | Yeah.                                                                                                              |
| 18:48      | I think the find friends is a great thing on trips, you know, like family or friends.                              |
| 18:52      | The first thing Rose and I did was we find friends for the duration of this trip and                               |
| 18:55      | it makes it really easy to find each other.                                                                        |
| 18:57      | Yeah.                                                                                                              |
| 18:58      | Well, listen, we don't have much time left before, you know, the 10,000 people cycle                               |
| 19:01      | out of here.                                                                                                       |
| 19:02      | Well, I actually had to say it's more like 12,000 now.                                                             |
| 19:04      | Yeah, definitely.                                                                                                  |
| 19:05      | I feel really bad for the next podcast because I mean, how are they going to crowd like this?                      |
| 19:11      | Well, we're the automators.                                                                                        |
| 19:12      | You can find us over at relay.fm/automators and we'll be doing more coverage on travel                       |
| 19:17      | related tips later.                                                                                                |
| 19:19      | I want to do one on my favourite luggage, the shampoo I use.                                                        |
| 19:23      | Oh, yeah.                                                                                                          |
| 19:24      | Yeah.                                                                                                              |
| 19:25      | And Rose is going to do a screencast on that really cool OmniFocus script.                                         |
| 19:29      | So we'll see that one too.                                                                                         |
| 19:31      | Yep.                                                                                                               |
| 19:32      | Thanks everybody for hanging out with us today and we'll see you next time.                                        |
| 19:36      | Yeah.                                                                                                              |
| 19:37      | Thank you very much and goodbye.                                                                                   |
| 19:38      | This episode of The Automators is brought to you by ExpressVPN, high speed, secure and                             |
| 19:49      | anonymous VPN service, get three months free with a one year package.                                              |
| 19:54      | We've seen a lot in the media lately about online security breaches.                                               |
| 19:57      | So it's only natural to worry about where your data goes, especially when something                                |
| 20:01      | as simple as sending an email can put your private information at risk.                                            |
| 20:05      | This is how you're being tracked by social media sites, marketing companies and possibly                           |
| 20:10      | even your internet provider.                                                                                       |
| 20:12      | And not only can they record your browsing history, they can also sell it to people who                            |
| 20:17      | want to profit from your information.                                                                              |
| 20:19      | You can take back your privacy with ExpressVPN.                                                                    |
| 20:22      | ExpressVPN works by securing and anonymising your internet browsing.                                               |
| 20:27      | It encrypts your data and hides your public IP address.                                                            |
| 20:30      | You can turn on ExpressVPN protection with just one click.                                                         |
| 20:34      | The easy to use apps run seamlessly in the background of your computer, iPhone and iPad                            |
| 20:39      | and it costs less than $7 a month.                                                                                 |
| 20:42      | ExpressVPN is rated the number one VPN service by Tech Rider.                                                      |
| 20:47      | It even comes with a 30 day money back guarantee.                                                                  |
| 20:50      | So if you've ever used public Wi-Fi and want to keep the bad guys away from your data,                             |
| 20:56      | you need ExpressVPN.                                                                                               |
| 20:57      | You know, as we get back from this trip that we just took, Seattle has a lot of really                             |
| 21:01      | great Wi-Fi was something I was impressed with that city kind of makes sense because                               |
| 21:06      | there's so much technology up there.                                                                               |
| 21:08      | But I still never feel comfortable getting on the Wi-Fi in a public place because it                               |
| 21:12      | really does open you up to exposure to hackers.                                                                    |
| 21:16      | And Seattle is also full of really smart computer people.                                                          |
| 21:19      | So maybe I don't want to do that.                                                                                  |
| 21:21      | Well I used ExpressVPN all throughout the trip.                                                                    |
| 21:24      | Anytime I wanted to go on Wi-Fi, I would just push the button ExpressVPN on my phone                               |
| 21:29      | on my iPad or my Mac and it just took care of it for me.                                                           |
| 21:32      | It's really great having one of these services installed on your devices.                                          |
| 21:36      | So anytime you want to protect yourself, you can.                                                                  |
| 21:41      | So I use it all the time and I think it's a great idea.                                                            |
| 21:44      | Honestly, in 2019, I think just about everybody should have a VPN service.                                         |
| 21:49      | So protect your online activity today by going to expressvpn.com/automators.                                 |
| 21:55      | If you don't want your online history in the hands of your internet provider or data resellers,                    |
| 22:00      | ExpressVPN is the answer.                                                                                          |
| 22:01      | By going to expressvpn.com/automators, you get three months free with a one-year package.                    |
| 22:08      | Once again, that is expressvpn.com/automators for three extra months free with a one-year                    |
| 22:14      | package.                                                                                                           |
| 22:15      | And our thanks to ExpressVPN for their support of the automators and all of Relay FM.                              |
| 22:20      | Well, welcome back from Seattle, David, we're not a pock on anymore.                                               |
| 22:25      | It was sure nice spending some time with you up there though.                                                      |
| 22:27      | We had a great time.                                                                                               |
| 22:28      | Yes, it was amazing and we got to meet so many listeners as well.                                                  |
| 22:32      | Thank you to everybody who came to that meetup.                                                                    |
| 22:34      | Yeah, the meet up just to give a quick summary was amazing.                                                         |
| 22:39      | We had a bar booked for it, but so many people signed up that we were way beyond what we                           |
| 22:44      | told the bar we were bringing and we were a little worried about it.                                               |
| 22:47      | Like triple capacity.                                                                                              |
| 22:48      | Yeah, we were a little worried about it and you and I had the opportunity to go and check                          |
| 22:52      | out the Omni Group's kind of corporate headquarters.                                                               |
| 22:57      | And we were telling them about it and they said, no problem, you can have it here.                                 |
| 23:00      | They have a really great cafeteria area there at the Omni Group.                                                   |
| 23:05      | And so we changed the location and a lot of people showed up.                                                      |
| 23:11      | We had a musical guest, I mean.                                                                                    |
| 23:14      | Yes.                                                                                                               |
| 23:15      | Yeah.                                                                                                              |
| 23:16      | It got a little bit crazy and I think we accidentally set the bar insanely high.                                   |
| 23:21      | So if you were at the meeting before, then please don't expect that much awesomeness                               |
| 23:26      | again apart from, of course, David, because Sparky is awesome, but yeah, it was great                              |
| 23:32      | fun to meet everybody and to hear about all the different things that everybody's been                             |
| 23:35      | automating as well, which is very inspiring.                                                                       |
| 23:38      | And I got to introduce Rose to the American tradition of going to Target and loading up                            |
| 23:43      | a cart for a party, which was great too.                                                                           |
| 23:46      | Yes.                                                                                                               |
| 23:47      | I've literally never done anything like that before in my life.                                                    |
| 23:49      | So yeah, cart was surprisingly maneuverable.                                                                       |
| 23:53      | So well done Target.                                                                                               |
| 23:54      | There we go.                                                                                                       |
| 23:55      | There we go.                                                                                                       |
| 23:56      | Yeah.                                                                                                              |
| 23:57      | Well, you know, we've already recorded half of this episode.                                                       |
| 23:59      | So the first half of this episode, as you heard, was recorded live at PodCon.                                      |
| 24:03      | And now we're home.                                                                                                |
| 24:04      | We thought it would be good to just fill up the rest of the episode with some of that                              |
| 24:07      | feedback that everybody's been sending us.                                                                         |
| 24:09      | Yeah.                                                                                                              |
| 24:10      | It's been a while since we did feedback on the show and there's quite a bit.                                       |
| 24:13      | Well, it's been 10 episodes since we lasted some feedback.                                                         |
| 24:16      | And that was episode 7 when we talked about the fact that the podcast was indeed a success.                        |
| 24:21      | So I thought we'd let you know that the podcast is still a success and what other things                           |
| 24:25      | you've told us.                                                                                                    |
| 24:26      | Hooray.                                                                                                            |
| 24:27      | Yes.                                                                                                               |
| 24:28      | Yes.                                                                                                               |
| 24:29      | The first thing I would say is you really need, if you haven't, you need to really head                            |
| 24:34      | over to talk.automators.fm.                                                                                        |
| 24:37      | It's a great community of folks.                                                                                   |
| 24:39      | Yeah, everybody there is just extremely nice, very welcoming.                                                      |
| 24:45      | If you post a question, you've got no idea where to start.                                                         |
| 24:47      | You don't need to be worried just because, A, everybody's really, really nice anyway,                              |
| 24:52      | because that's the kind of listeners that we have, lovely people.                                                  |
| 24:55      | And B, we're here to learn.                                                                                        |
| 24:58      | Nobody's going to judge you or think, oh my gosh, this person's so silly.                                          |
| 25:01      | They didn't think to use shortcuts for this.                                                                       |
| 25:02      | That's not the case.                                                                                               |
| 25:04      | You can post something where you've got absolutely no idea and everybody will try and point you                    |
| 25:08      | in the right direction.                                                                                            |
| 25:09      | If you're lucky, then some people might even just do the automation for you and say, here's                        |
| 25:13      | what it looks like when it's finished so you can implement it yourself, which is lovely.                           |
| 25:18      | And if you've made automations, you're very welcome to share them as well.                                         |
| 25:21      | We would absolutely love to see more finished automations just being shared.                                       |
| 25:25      | Well, we teased on the show, I believe it was on the episode where we talked about Launch                          |
| 25:30      | Centre Pro, iBeacons and how we, at some point, we're going to do a show on it.                                    |
| 25:35      | I've got some, Rose's got some, and we've been both in plane with them.                                            |
| 25:39      | But of course, the listeners were not ready to wait for that.                                                      |
| 25:43      | So there's a whole thread on this over at the forum.                                                               |
| 25:48      | Sylumer found USB iBeacons, which looked pretty nice.                                                            |
| 25:52      | Apparently, the ones we talked about on the show are no longer available on Amazon.                                |
| 25:56      | No.                                                                                                                |
| 25:57      | So we're post using some by Estimote, and it looks like you can still buy individual ones                            |
| 26:02      | on Amazon, but the packs of three or four may not be available, at least they're not                               |
| 26:08      | on amazon.com at the time of recording.                                                                            |
| 26:11      | If CamelCamelCamel is working, then you can use the website camelcamelcamel.com to track                           |
| 26:18      | an Amazon listing and find out when it becomes available again or when it goes on sale.                            |
| 26:25      | So you may want to try that there as we record.                                                                    |
| 26:28      | They are unfortunately having some server issues, but they should hopefully be back                                |
| 26:32      | quite soon.                                                                                                        |
| 26:33      | And honestly, it's kind of hacky to buy these things and set them up right now.                                    |
| 26:38      | Yeah, it is.                                                                                                       |
| 26:39      | And like when we do the show out, we're going to have to go through that in detail how you                         |
| 26:42      | do it.                                                                                                             |
| 26:43      | But one of the things I was hoping is by the time we get around to doing that show that                            |
| 26:47      | there'll be somebody with a product out there that's a little more consumer friendly.                              |
| 26:50      | Well, we are keeping an eye out for that as well, because of course, everybody wants                               |
| 26:55      | to have good iBeacons and we're very much hoping that somebody out there, a fellow nerd                            |
| 27:00      | is going to get on with it and create some of these.                                                               |
| 27:03      | And as soon as we've got something like that, we will let you know.                                                |
| 27:06      | Yeah.                                                                                                              |
| 27:07      | Okay, other feedback, [[Scriptable]].                                                                                  |
| 27:10      | Scriptable with [[Simon Støvring]] was one of our episodes, and I'm very much hoping I pronounce                      |
| 27:15      | Simon's surname correctly there.                                                                                   |
| 27:16      | I can see how I let you do that.                                                                                   |
| 27:19      | Yeah, yeah, that's very sneaky, and I approve.                                                                     |
| 27:22      | That's fine.                                                                                                       |
| 27:23      | Yeah, [[Simon Støvring\|| 27:23      | Yeah, Simon, who is lovely, and the Scriptable forums are in the Automated forums, actually,                       |]]Simon, who is lovely, and the Scriptable forums are in the Automated forums, actually,                       |
| 27:29      | and somebody wrote a Scriptable script to identify car registration plates.                                        |
| 27:34      | I think we've reached peak automation right there.                                                                 |
| 27:37      | You can just take a photo of a car registration plate, and Scriptable will identify it.                            |
| 27:41      | That's so crazy.                                                                                                   |
| 27:42      | I know, it's insane.                                                                                               |
| 27:44      | But if you're looking for examples of things that you can do Scriptable, there are a lot                           |
| 27:48      | of other less crazy ones in the forums, which people have shared.                                                  |
| 27:52      | Using this one, I'll make sure a link to this one is in the show notes so that everybody                           |
| 27:55      | can find it and try and identify it.                                                                               |
| 27:57      | The one thing I didn't check is whether or not it identifies just US plates or also European                       |
| 28:04      | plates as well.                                                                                                    |
| 28:05      | Well, now you have a homework project.                                                                             |
| 28:06      | Of course, we have a different format.                                                                             |
| 28:07      | Well, there we go.                                                                                                 |
| 28:08      | I mean, I don't drive, so I need to go start taking photos of cars on the street and hope                          |
| 28:12      | that people don't get upstairs.                                                                                    |
| 28:13      | I don't know.                                                                                                      |
| 28:14      | We'll see.                                                                                                         |
| 28:15      | I hope it's telling me you're part of the security state.                                                          |
| 28:18      | It's all right.                                                                                                    |
| 28:19      | Yeah, I'll just wear black heads of toe and try and look slightly terrifying.                                      |
| 28:23      | I mean, I don't really know what security look like over here.                                                     |
| 28:26      | I don't really see them that often.                                                                                |
| 28:27      | I feel like if there was a Jane bond that you could probably pull it off.                                          |
| 28:33      | Well, challenge accepted.                                                                                          |
| 28:37      | If I ever get access, I think I travel too much for that kind of security clearance.                               |
| 28:42      | You definitely have the gizmos for it, right?                                                                      |
| 28:44      | Oh, yeah.                                                                                                          |
| 28:45      | I've got all of the gadgets.                                                                                       |
| 28:47      | Exactly.                                                                                                           |
| 28:48      | I think I just, you could script them better than James Bond ever could.                                           |
| 28:52      | Yes.                                                                                                               |
| 28:53      | Well, I mean, I will give it a try.                                                                                |
| 28:55      | Yeah.                                                                                                              |
| 28:56      | That's for sure.                                                                                                   |
| 28:57      | Now you just need to figure out how to kill a man with like a light bulb or something,                             |
| 29:00      | but you know.                                                                                                      |
| 29:01      | Well, I mean, I have a mirror, which is also a battery pack, which also has a ring inside                          |
| 29:06      | of it that lights up so that you can check your makeup properly, slash use it as a portable                        |
| 29:09      | light in the hotel room where the lamp is not positioned where you would like it to                                |
| 29:15      | be.                                                                                                                |
| 29:16      | Wait a second.                                                                                                     |
| 29:17      | You have a mirror that's a USB battery?                                                                            |
| 29:20      | Yeah.                                                                                                              |
| 29:21      | And it's got a light.                                                                                              |
| 29:22      | I'll put a link to it in the show notes just because everybody's going to ask for me for                           |
| 29:26      | that.                                                                                                              |
| 29:27      | So I'm literally looking it up right now.                                                                          |
| 29:29      | Oh man.                                                                                                            |
| 29:30      | I think that's something my wife would really like.                                                                |
| 29:33      | It's something that a lot of women quite like because it's quite large for a mirror.                               |
| 29:39      | And it's round and flat, but it's very useful because it literally can do three things.                            |
| 29:47      | And when I used to work, so along with, it seems quite a few people on the relay network,                          |
| 29:52      | I used to work for Disney and the apartments that they give you, Disney and Paris are pretty                       |
| 29:57      | good, but the one thing that they do not have is a bedside lamp, which means that when you                         |
| 30:01      | go to turn off the lights at night, so you turn off the lights and then suddenly you're                            |
| 30:05      | by the front door in the dark.                                                                                     |
| 30:07      | So I got this so that I could take it with me so that I could leave it like on the nightstand.                     |
| 30:13      | And then I would still be able to see and go back to bed and then you can just turn                                |
| 30:16      | it off.                                                                                                            |
| 30:17      | Nice.                                                                                                              |
| 30:18      | Nice.                                                                                                              |
| 30:19      | Yeah.                                                                                                              |
| 30:20      | So on filing, we talked about that on the show last time.                                                          |
| 30:27      | And there was a good question in the forum about how do you decide what tools you use                              |
| 30:32      | for this stuff and quick ATB, I don't know if it's Qui Cat B, I don't know how he or                               |
| 30:42      | she pronounces it.                                                                                                 |
| 30:43      | But the question was, how do you choose between Automator, [[Alfred]], Keyboard, Maestro, Apple                        |
| 30:47      | Script, [[Hazel]], I can think of a few more to perform actions.                                                       |
| 30:53      | And I think it really depends on what you're doing.                                                                |
| 30:58      | Just a quick rundown, tools like [[Spotlight]], Automator, I'm sorry [[Spotlight]], [[Alfred]], Launch                         |
| 31:05      | Bar, those are tools that are allowing you to use your keyboard to do things on your                               |
| 31:09      | Mac quickly.                                                                                                       |
| 31:10      | But they aren't really automation tools that much, although with [[Alfred]] and Launch Bar,                            |
| 31:15      | there certainly are automation elements to them.                                                                   |
| 31:17      | Definitely, yeah.                                                                                                  |
| 31:19      | I think that [[AppleScript]] is like a whole other level, it's something you need to learn                            |
| 31:24      | and it's probably the most powerful tool on the Mac if you need to do stuff because it                             |
| 31:29      | can talk to applications.                                                                                          |
| 31:32      | Automator is like a level below [[AppleScript]] where it kind of does everything for you.                             |
| 31:36      | That was the original idea of kind of build your own automation without coding.                                    |
| 31:42      | And then [[Keyboard Maestro]], to me, is probably the starting point for most people that want                         |
| 31:48      | to seriously take this stuff on because it does so many things.                                                    |
| 31:53      | Yeah.                                                                                                              |
| 31:54      | I mean, personally, I would say if it's a difficult automation, then use whatever you're                           |
| 32:00      | most familiar with, where if it's easy, then maybe that's a good opportunity to look at                            |
| 32:04      | a tool that you would like to use that doesn't get enough use, something like that, just                           |
| 32:09      | to help you balance out your automation skillset.                                                                  |
| 32:12      | But of course, you have to pick a tool that's capable of doing the job.                                            |
| 32:15      | So the example in this particular case was to create 12 folders, one for each month of                             |
| 32:20      | the year and the name should be the month name, always a two-digit one dash and then                               |
| 32:25      | the name of the month.                                                                                             |
| 32:27      | And so there's a lot of ways that you can do that and you can, of course, just do it                               |
| 32:32      | by hand if you're really stuck, but you probably don't want to do that by hand every year.                         |
| 32:37      | So yes, there's a lot of options out there for all of these solutions naturally.                                   |
| 32:41      | Yeah.                                                                                                              |
| 32:42      | On that specific question, as it relates to a filing episode, I don't know if the listener                         |
| 32:46      | was trying to make folders like to file invoice in a way, but [[Hazel]] is really good for the                         |
| 32:54      | filing piece of that because you can even tell [[Hazel]] look in that folder and sort it                               |
| 33:00      | into a subfolder by month.                                                                                         |
| 33:02      | And if there isn't a subfolder for that month, create one when you do it.                                          |
| 33:06      | So that's the ultimate automation where you don't even have to push the button to make                             |
| 33:11      | it happen.                                                                                                         |
| 33:12      | Yes.                                                                                                               |
| 33:13      | I mean, in this case, I think it might have been that he needed the months in advance so                           |
| 33:16      | that he could pre-file certain things because every so often, for example, occasionally                            |
| 33:20      | I'll get my text return in May and they come here in June, the amount that I'm getting                             |
| 33:26      | back, I get told about it in June.                                                                                 |
| 33:28      | And so I like to post date that and stick that into the right folder.                                                |
| 33:32      | So every so often, you don't have the right folder already and then you need it and that's                         |
| 33:36      | a little bit of a hassle.                                                                                          |
| 33:37      | So perhaps to avoid that or something similar, but yes, especially filing, you can use all                         |
| 33:43      | of the tools pretty much.                                                                                          |
| 33:45      | Yeah.                                                                                                              |
| 33:46      | And it's kind of like you're talking like a 43 folder situation where you're putting                               |
| 33:50      | things into the future and then in that case, you do need to create those folders.                                 |
| 33:54      | Yes.                                                                                                               |
| 33:55      | I was going to give someone general advice about on their Mac getting automation going.                            |
| 34:01      | I think I would say [[Hazel]] and [[Keyboard Maestro]] are probably the two best apps that anybody                         |
| 34:08      | can use so long as they're willing to spend a little bit of time kind of figuring out                              |
| 34:11      | how they work.                                                                                                     |
| 34:12      | I would agree with that 100%.                                                                                      |
| 34:14      | I mean, Automator, if you're short on cash and you just want to get started, Automator                             |
| 34:19      | is free and it's good, but once you've got the ability to spend money or you realise                               |
| 34:27      | that there's something that you need to do that Automator can't do because Automator                               |
| 34:31      | is limited, [[Keyboard Maestro]] is definitely the next step up.                                                       |
| 34:34      | You don't need to know how to program to do any of this.                                                           |
| 34:37      | It is the magic blocks just like shortcuts.                                                                        |
| 34:41      | The [[Keyboard Maestro]] does, of course, predate shortcuts or workflow and yeah, it's excellent                       |
| 34:47      | and the developer Peter Lewis has really invested in the application and he's got his own user                     |
| 34:53      | forum as well, which I will link to in the show notes.                                                             |
| 34:55      | Of course, you're very welcome to discuss [[Keyboard Maestro]] items in our forums as well,                            |
| 35:00      | but yeah, he's got a lot of resources out there for that.                                                          |
| 35:05      | I was just talking to a listener yesterday who is doing a [[Keyboard Maestro]] script to                               |
| 35:11      | do auto-fill, form-filling mails, because there's really not many good solutions for                               |
| 35:18      | mail merge and he's using [[Keyboard Maestro]] to mail merge emails and send them even if                              |
| 35:24      | you want and I got thinking that's a great solution to a problem because quite often                               |
| 35:31      | there are weaknesses in the platform for one thing or another and I think mail merge is                            |
| 35:35      | one where the Mac isn't particularly good.                                                                         |
| 35:38      | I'm not that impressed with the way Microsoft solutions do it and with [[Keyboard Maestro]]                            |
| 35:44      | he was able to make a solution that basically works across his Mac and that's just one                             |
| 35:50      | example of solving a problem with that application.                                                                |
| 35:53      | Yes.                                                                                                               |
| 35:54      | Well, if that user is listening, please do share that in the forums because I'd love                               |
| 35:57      | to see it and there was a question at one point, somebody was trying to create a contract.                         |
| 36:01      | It may have been in the Mac Power Users forum actually, possibly Automators, where they                            |
| 36:07      | wanted to create a contract and they wanted to use the contacts information to fill the                            |
| 36:11      | name of the person and then they had different information that had to go in depending on                          |
| 36:15      | which event the contract was for and that sounds like a mail merge.                                                |
| 36:20      | If you're trying to generate documents, this is the other end of filing, generating the                            |
| 36:24      | documents to be files, don't forget mail merge is quite a powerful tool and as you've                              |
| 36:29      | just heard, [[Keyboard Maestro]] can even help you do that.                                                            |
| 36:31      | Yes.                                                                                                               |
| 36:32      | I've done a lot of that work over time because I use [[Keyboard Maestro]] for that type of stuff                       |
| 36:37      | all the time.                                                                                                      |
| 36:38      | We'll get there, we'll get there.                                                                                  |
| 36:40      | Yes.                                                                                                               |
| 36:41      | We will be circling back to that for sure.                                                                         |
| 36:43      | Yes, we've got some other feedback and completely miscellaneous feedback because I'm not sure                      |
| 36:50      | when we're going to get around to doing an episode on this and this is too good not                                |
| 36:53      | to share.                                                                                                          |
| 36:55      | When you set up a new computer, you probably want a list of the applications on your old                           |
| 36:59      | computer.                                                                                                          |
| 37:00      | This is assuming that you're either setting your current computer up from start, up from                           |
| 37:05      | scratch or you're setting up a new computer and you don't want to just transfer everything                         |
| 37:08      | over using something like Time Machine, Carbon Copy Cloner, et cetera.                                             |
| 37:12      | Well, Burk on micro.blog shared this fabulous tip, which is you can use the terminal to                            |
| 37:17      | get a list of all of the applications and save it into a text file and all you do is                               |
| 37:23      | you open up terminal on your Mac and you don't need to know how it works and you just type                         |
| 37:27      | ls slash and then applications for your applications folder and then you do a greater than symbol                  |
| 37:34      | and then you put in a file name and a file extension.                                                              |
| 37:39      | So for example, newsystemapps.txt and yeah, this will give you a list of all of your applications                  |
| 37:46      | in a text file on your computer so that you can just grab that and use that when you're                            |
| 37:51      | setting up a new machine.                                                                                          |
| 37:53      | And yeah, I thought that that was an excellent tip because that is automation.                                     |
| 37:58      | It's not as automated as just transferring everything via Time Machine, but there are                              |
| 38:01      | times when you don't want to do that.                                                                              |
| 38:03      | Yeah, it's really tough to cover terminal stuff on an audio podcast.                                               |
| 38:07      | At some point, if we do a show on maybe terminal based automation, we will screencast the heck                     |
| 38:12      | out of that one.                                                                                                   |
| 38:13      | Oh yeah, definitely.                                                                                               |
| 38:14      | Yeah.                                                                                                              |
| 38:15      | And I will be putting a link to Burk's post in the show notes because he's got the terminal.                       |
| 38:23      | He's got the command written out for you there so you can literally just copy paste it and                         |
| 38:27      | use it.                                                                                                            |
| 38:28      | And when I was looking at that, JD followed up with, if you use Homebrew, you can also                             |
| 38:33      | type `brew leaves` to get a list of all the packages installed, which I thought was extremely                         |
| 38:38      | useful.                                                                                                            |
| 38:39      | So thank you to JD and Burk on Micro.blog for sharing this.                                                         |
| 38:44      | The Launch Center Pro NFC stickers, what are you doing with yours at this point?                                   |
| 38:49      | Oh, okay.                                                                                                          |
| 38:50      | Well, do you remember we recently had an episode on time tracking?                                                 |
| 38:53      | Yeah.                                                                                                              |
| 38:54      | Well, time tracking, as I foresaw in that episode, has come to my workplace.                                       |
| 39:00      | And we have to do it in a specific format, in a specific system, et cetera.                                        |
| 39:04      | Basically I'm saving CSV files onto my iPhone.                                                                     |
| 39:08      | And so I'm using Launch Center Pro, so I just pick up my iPhone and I tap it on sticker                            |
| 39:13      | and it runs a workflow or a shortcut rather that runs two shortcuts.                                               |
| 39:18      | So we've talked before about running multiple, one shortcut that does lots of other things.                        |
| 39:24      | This is a shortcut that runs a stop timer shortcut and a start timer shortcut.                                     |
| 39:29      | So it stops the timer, asks me for a summary of what I did, and then it starts a new timer.                        |
| 39:35      | And it's so useful.                                                                                                |
| 39:37      | I love it.                                                                                                         |
| 39:38      | And I literally just pick up my phone and I tap it on the sticker.                                                 |
| 39:41      | And everybody else is there trying to use some clunky Windows program that they have                               |
| 39:44      | to times into and press spacebar to get it to autofill.                                                            |
| 39:48      | Why doesn't it just autofill when you click into the box?                                                          |
| 39:52      | And things like that.                                                                                              |
| 39:53      | I'm very, very happy with my solution and it only took me about 20 minutes to build.                               |
| 39:57      | So it's definitely a proprietary system.                                                                           |
| 40:00      | I'm actually currently taking a break from the toggle style timing of myself.                                      |
| 40:06      | I just find that my data quite often is bad because it is hard for me to remember to push                          |
| 40:13      | the button.                                                                                                        |
| 40:14      | Yeah.                                                                                                              |
| 40:15      | Yeah.                                                                                                              |
| 40:16      | And honestly, I don't need it at all times.                                                                        |
| 40:20      | I feel like I don't need that data at all times.                                                                   |
| 40:23      | I do it once in a while for a couple of weeks just to kind of check in and see how things                          |
| 40:28      | are going.                                                                                                         |
| 40:29      | And I spend a lot of my work time at my Mac where timing is actually always tracking for                           |
| 40:35      | me and I do get those reports.                                                                                     |
| 40:38      | But right now I'm taking a little break from it.                                                                   |
| 40:40      | But anyway, I'm sure I'll be back and trying it again at some point.                                               |
| 40:46      | I learn things every time I do it, but I just don't know that the investment of time to                            |
| 40:51      | try and kind of track the mental overhead of that makes sense for me right now.                                    |
| 40:55      | And it's weird for me because I do so many different things.                                                       |
| 40:58      | I find myself throwing timers all day when I'm trying to do it through that, even with                             |
| 41:03      | the automation help.                                                                                               |
| 41:04      | Yeah.                                                                                                              |
| 41:05      | Well, I mean, all I do in toggle for work is I literally just track the time that I clock                          |
| 41:09      | in and the time that I clock out.                                                                                  |
| 41:11      | And until I started this podcast, I was commuting even though I'd already been home for 10 minutes.                |
| 41:15      | Yeah.                                                                                                              |
| 41:16      | Yeah.                                                                                                              |
| 41:17      | If you've been trying to track time and you realise that you're not perfect, that's okay.                          |
| 41:20      | That means that you're normal, like everybody else, just like us.                                                  |
| 41:24      | And on that note, we've heard from a lot of people because we've been talking about an                             |
| 41:26      | app that's not out, which we're not supposed to really do that, I guess, but Timery, which                         |
| 41:31      | is the app that's come up several times, people saying, hey, when's that coming out?                               |
| 41:35      | Because if you are using toggle to track time, this app is going to make it so much easier.                        |
| 41:40      | And all I can say is the betas are closer and closer.                                                              |
| 41:44      | I think that we're not far.                                                                                        |
| 41:46      | And I will say at the Automators Twitter account, it doesn't tweet much, it tweets when new                        |
| 41:50      | episodes come out.                                                                                                 |
| 41:51      | It makes sure that you get a link to the forum thread and links to any YouTube videos that                         |
| 41:54      | are there.                                                                                                         |
| 41:56      | But it will be tweeting when this app releases.                                                                    |
| 41:58      | So if you're not following at Automators FM on Twitter, please do so if you, well, whether                         |
| 42:04      | or not you want to hear about Timery because it will be a one-time tweet, which David and                          |
| 42:08      | I will, of course, be tweeting as well from our accounts.                                                          |
| 42:11      | But yeah, that will be an easy way to get poked when it's released if you are looking                              |
| 42:16      | for an automated way to do so.                                                                                     |
| 42:17      | I'll tell you my favourite feedback we've gotten since we started the shows from all                                |
| 42:21      | the people who write us to say, hey, they thought this stuff was not something they                                |
| 42:24      | could do.                                                                                                          |
| 42:25      | But listening to the show, watching the screencast, they're finding themselves doing it.                           |
| 42:30      | And it's an interesting muscle to develop because once you realise you have the power                              |
| 42:34      | to automate something, even if you've never been a programmer, even if you don't know                              |
| 42:39      | [[AppleScript]] and Perl and all these other things, with the tools we talk about on the                              |
| 42:43      | show, there's a lot you can automate.                                                                              |
| 42:45      | And I just love hearing from people who have been empowered by what we've been doing and                           |
| 42:49      | thanks and you guys feed us as well when you tell us about the great stuff you're doing.                           |
| 42:54      | Yes, it is extremely exciting to hear whenever somebody was like, I don't know.                                    |
| 42:59      | I don't know what I'm doing, but look, I did this thing and it works and it does what                              |
| 43:02      | I want.                                                                                                            |
| 43:03      | It's like, yes, this makes me happy.                                                                               |
| 43:07      | It's funny once you realise that you can do that, you start seeing all sorts of opportunities.                     |
| 43:10      | Oh, yeah.                                                                                                          |
| 43:11      | Yeah.                                                                                                              |
| 43:12      | So if you're just listening to this podcast and you're thinking like, maybe one day, try                           |
| 43:16      | doing something today or if you're very busy today, then tomorrow, but try something very                          |
| 43:21      | soon because it's great fun.                                                                                       |
| 43:24      | And once you see what you can accomplish, it really will feed into this wonderful little                           |
| 43:30      | feedback loop of success and positivity.                                                                           |
| 43:33      | On that note, I think we'll wrap this episode up.                                                                  |
| 43:36      | You've got a great guest lined up in a couple of weeks.                                                            |
| 43:39      | Thanks to our sponsor, ExpressVPN, we're the Automators.                                                           |
| 43:42      | You can find us over at relay.fm/automators.                                                                 |
| 43:46      | You can check out our forums at talk.automators.fm.                                                                |
| 43:50      | You can find Rose over at rosemaryorchard.com.                                                                      |
| 43:53      | Correct.                                                                                                           |
| 43:54      | That's right.                                                                                                      |
| 43:55      | I always think it's org, Rose.                                                                                     |
| 43:57      | I don't know why I can't remember.                                                                                 |
| 43:58      | You can find me over at macsparkyi.com and we'll see you in two weeks.                                               |
| 44:02      | Yes.                                                                                                               |
| 44:03      | Thanks for talking to everybody again then.                                                                        |
